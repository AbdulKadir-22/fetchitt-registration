const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const registerForEarlyAccess = async (email) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Using existing register endpoint with default values for early access
            body: JSON.stringify({
                email,
                fullName: 'Early Access User',
                password: 'WaitlistPassword123!', // Placeholder if required by backend
                role: 'waitlist'
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong while signing up.');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};
