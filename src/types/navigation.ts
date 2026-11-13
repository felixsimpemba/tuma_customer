export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    OTPVerification: { phoneNumber: string };
};

export type RootStackParamList = {
    Auth: undefined;
    Main: undefined;
};
