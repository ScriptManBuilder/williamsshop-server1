// Типы для API ответов и запросов
export interface User {
  id: number;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface ProfileResponse {
  user: User;
  message: string;
}

export interface HealthResponse {
  status: string;
  timestamp: string;
  uptime: number;
  message: string;
}

export interface ApiError {
  message: string;
  error: string;
  statusCode: number;
}

// Константы API
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:3001',
  ENDPOINTS: {
    HEALTH: '/health',
    SIGNUP: '/auth/signup',
    SIGNIN: '/auth/signin',
    PROFILE: '/auth/profile',
    TEST: '/auth/test',
    USERS: '/users',
  },
  HEADERS: {
    CONTENT_TYPE: 'application/json',
  },
} as const;

// Примеры использования:

/*
// Регистрация
const signupData: SignUpRequest = {
  email: "user@example.com",
  password: "password123",
  firstName: "John",
  lastName: "Doe"
};

// Авторизация
const signinData: SignInRequest = {
  email: "user@example.com",
  password: "password123"
};

// Использование в fetch
fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SIGNUP}`, {
  method: 'POST',
  headers: {
    'Content-Type': API_CONFIG.HEADERS.CONTENT_TYPE,
  },
  body: JSON.stringify(signupData),
})
.then(response => response.json() as Promise<AuthResponse>)
.then(data => {
  console.log('Token:', data.access_token);
  console.log('User:', data.user);
});
*/