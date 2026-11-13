// API Configuration
const API_BASE_URL = 'http://localhost:8000/api'; // Update this with your actual API URL

// API Client
export const api = {
    // Authentication endpoints
    auth: {
        login: async (phoneNumber: string, password: string) => {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone_number: phoneNumber, password }),
            });
            return response.json();
        },

        register: async (data: {
            fullName: string;
            email: string;
            phoneNumber: string;
            password: string;
        }) => {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    full_name: data.fullName,
                    email: data.email,
                    phone_number: data.phoneNumber,
                    password: data.password,
                }),
            });
            return response.json();
        },

        verifyOTP: async (phoneNumber: string, otp: string) => {
            const response = await fetch(`${API_BASE_URL}/verify-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone_number: phoneNumber, otp }),
            });
            return response.json();
        },

        resendOTP: async (phoneNumber: string) => {
            const response = await fetch(`${API_BASE_URL}/resend-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone_number: phoneNumber }),
            });
            return response.json();
        },
    },
};

export default api;
