// API Configuration
export const API_CONFIG = {
  // Base URL for the production backend API
  BASE_URL: "https://calorie-tracker-kc42.onrender.com/api",

  // Timeout for API requests (in milliseconds)
  TIMEOUT: 10000,

  // Endpoints
  ENDPOINTS: {
    FOODS: "/food",
    SEARCH_FOODS: "/food/search",
    ADD_FOOD: "/food/add",
  },
};

// Alternative configurations for development:
// For local development (Expo Web):
// BASE_URL: "http://localhost:3000/api"

// For local development (physical device/emulator):
// BASE_URL: "http://YOUR_IP:3000/api"
