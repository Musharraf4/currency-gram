export interface IAUTHSTATE {
  user: IAUTHSTATEUSER | null;
  error: string;
  token: string;
  refreshToken: string;
  success: string;
  role: any;
  setUploadProfileImage: boolean;
  message: string;
  userEmail: string;
  emailVerified: any;
  isPasswordReset: any;
  isEmailChanged: any;
}

export interface IAUTHSTATEUSER {
  userId?: any;
  id?: string | number;
  email: string;
  password: string;
  token?: string;
  status: string;
  error: string;
  message: string;
  success: string;
  isLoading: boolean;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  city?: string;
  gender?: string;
  address?: string;
  dob?: string;
  profileImage?: string;
  aboutMe: string;
  language?: { languageName?: string; proficiencyLevel?: string }[];
  overalProfileCompletion?: number;
  profileCompletion?: {
    personalInfo: IPROFILECOMPLETION;
    licenses: IPROFILECOMPLETION;
    trainings: IPROFILECOMPLETION;
    cuisines: IPROFILECOMPLETION;
  };
}
interface IPROFILECOMPLETION {
  required: boolean;
  percentage: 25;
  completed: boolean;
}
