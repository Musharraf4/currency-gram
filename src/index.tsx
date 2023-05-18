import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/store";

import "./index.scss";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Roboto",
            colorPrimary: "#007BFF",
            colorError: "#B51629",
            colorInfo: "#007Bff",
            colorSuccess: "#1AB900",
            colorWarning: "#EAB308",
            colorTextBase: "#374151",
            colorTextDisabled: "#67687966",
            colorBgContainerDisabled: "#e6e9ef66",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </BrowserRouter>
);
