// API Configuration
export const API_CONFIG = {
  // Base URL for the backend API
  // Use your computer's IP address when running on physical device/emulator
  BASE_URL: "http://192.168.100.216:3000/api",

  // Timeout for API requests (in milliseconds)

  // Endpoints
  ENDPOINTS: {
    FOODS: "/food",
    SEARCH_FOODS: "/food/search",
    ADD_FOOD: "/food/add",
  },
};



// For Expo Web (running in browser):
// BASE_URL: "http://localhost:3000/api"

// For physical device or Android emulator:
// BASE_URL: "http://192.168.100.216:3000/api" (your computer's IP)

// For production deployment:
// BASE_URL: "https://your-backend-domain.com/api"
