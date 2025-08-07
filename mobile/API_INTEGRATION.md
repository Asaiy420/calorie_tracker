# 🍽️ Nepali Calorie Tracker Mobile App - API Integration Guide

## 🚀 Quick Start

### Prerequisites

1. **Backend Server**: Make sure your backend server is running on `http://localhost:3000`
2. **Node.js & npm**: Ensure you have Node.js installed
3. **Expo CLI**: For running the mobile app

### Setup & Installation

1. **Start the Backend Server** (in a separate terminal):

   ```bash
   cd ../backend
   npm run seed    # Populate database with Nepali foods
   npm run dev     # Start the backend server
   ```

2. **Install Mobile Dependencies**:

   ```bash
   cd mobile
   npm install
   ```

3. **Start the Mobile App**:

   ```bash
   npm start
   ```

4. **Open on Device**:
   - Install "Expo Go" app on your phone
   - Scan the QR code that appears in terminal
   - The app will load with real data from your backend!

## 🔌 API Integration Features

### ✅ **Real-Time Data**

- **Live Food Database**: 60+ Nepali foods loaded from your backend
- **Real-time Search**: Instant search across all foods
- **Category Filtering**: Filter by food categories
- **Popular Foods**: Dynamic popular foods section

### ✅ **Smart Error Handling**

- **Connection Errors**: Clear feedback when backend is offline
- **Retry Functionality**: Easy retry when connection fails
- **Loading States**: Beautiful loading indicators
- **Graceful Fallbacks**: Informative error messages

### ✅ **API Services Structure**

```
services/
├── api.ts           # Axios configuration & interceptors
├── foodService.ts   # Food-related API calls
config/
└── api.ts          # API configuration & endpoints
```

## 🔧 API Configuration

### Changing Backend URL

Edit `config/api.ts` to change the backend URL:

```typescript
export const API_CONFIG = {
  BASE_URL: "http://your-backend-url.com/api", // Change this
  TIMEOUT: 10000,
  // ... rest of config
};
```

### Available API Endpoints

| Method | Endpoint                   | Description          |
| ------ | -------------------------- | -------------------- |
| `GET`  | `/api/food`                | Get all foods        |
| `GET`  | `/api/food/search?q=query` | Search foods by name |
| `POST` | `/api/food/add`            | Add new food         |

## 📱 App Features with API Integration

### 🏠 **Dashboard Tab**

- **Nutrition Summary**: Real-time calorie & macro tracking
- **Food Diary**: Track consumed foods with detailed nutritional info
- **Popular Foods**: Dynamic list from backend (currently first 6 foods)

### 🔍 **Search Tab**

- **Live Search**: Search through entire backend database
- **Category Filter**: Filter by food categories from backend
- **Instant Add**: One-tap food addition to diary

### 🎯 **Smart Loading States**

- **Initial Load**: Shows loading spinner while fetching data
- **Error Handling**: Clear error messages with retry options
- **Empty States**: Informative messages when no data found

## 🔍 API Service Usage Examples

### Get All Foods

```typescript
import { foodService } from "./services/foodService";

const foods = await foodService.getAllFoods();
console.log(`Loaded ${foods.length} foods`);
```

### Search Foods

```typescript
const results = await foodService.searchFoods("dal");
console.log("Search results:", results);
```

### Get Foods by Category

```typescript
const snacks = await foodService.getFoodsByCategory("Snack");
```

## 🚨 Troubleshooting

### Backend Connection Issues

**Problem**: "Failed to load food data" error
**Solution**:

1. Make sure backend server is running: `npm run dev` in backend folder
2. Check if `http://localhost:3000/api/food` returns data
3. Try the retry button in the app

**Problem**: Empty food list
**Solution**:

1. Run the seed script: `npm run seed` in backend folder
2. Restart the backend server
3. Refresh the mobile app

### Network Issues

**Problem**: App works on simulator but not on physical device
**Solution**:

1. Make sure your computer and phone are on the same WiFi
2. Change `localhost` to your computer's IP address in `config/api.ts`
3. Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)

### Performance Tips

1. **Backend Optimization**: Index frequently searched fields in your database
2. **Caching**: Consider adding Redis for faster responses
3. **Pagination**: Implement pagination for large datasets
4. **Image Optimization**: Optimize food images if you add them later

## 🔄 Data Flow

```
Mobile App → API Service → Axios → Backend → Prisma → Database
     ↓
User Interface ← JSON Response ← Express Routes ← Controllers
```

## 🚀 Next Steps

### Immediate Enhancements

- [ ] Add offline caching with AsyncStorage
- [ ] Implement user authentication
- [ ] Add food images
- [ ] Create meal planning features

### Advanced Features

- [ ] Barcode scanning for packaged foods
- [ ] Photo recognition for food identification
- [ ] Social features & food sharing
- [ ] Exercise tracking integration

## 📊 Backend Requirements

Your backend should be running with:

- ✅ Express server on port 3000
- ✅ CORS enabled for mobile requests
- ✅ Prisma with PostgreSQL database
- ✅ Food database seeded with Nepali foods

## 🎉 Success Indicators

When everything is working correctly, you should see:

- 📱 Mobile app loads with "Loading foods..." then shows real data
- 🔍 Search returns results from your backend
- 📊 Food categories populated from database
- ✅ Console logs showing successful API calls

Your Nepali Calorie Tracker is now fully integrated with real backend data! 🎊
