import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { BASEURLBACKEND, REFRESHTOKENAPI } from "../constants/api-endpoints-constant";
import { RootState } from "../store/store";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "../utils/browser-storage-utils";
import { LOCALSTORAGEAUTHUSERINFO } from "../constants/browser-storage-constant";
import { setRefreshToken } from "../store/auth/auth-slice";

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: BASEURLBACKEND,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const customFetchBase = async (args: any, api: any, extraOptions: any) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (!!(result?.error && result?.error?.status === 401)) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const token = getDataFromLocalStorage(LOCALSTORAGEAUTHUSERINFO);
        const body = {
          userId: token?.user?.userId,
          refreshToken: token?.refreshToken,
        };
        const refreshResult: any = await baseQuery(
          { url: REFRESHTOKENAPI, method: "PUT", body },
          api,
          extraOptions
        );
        const formatData = refreshResult?.data?.data;
        const newToken = {
          token: formatData?.authToken,
          refreshToken: formatData?.refreshToken,
        };
        api.dispatch(setRefreshToken<any>(newToken));
        if (refreshResult.data) {
          // Retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          removeDataFromLocalStorage(LOCALSTORAGEAUTHUSERINFO);
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const baseAPI = createApi({
  reducerPath: "api",
  // baseQuery: baseQueryWithRetry,
  baseQuery: customFetchBase,
  endpoints: () => ({}),
});
