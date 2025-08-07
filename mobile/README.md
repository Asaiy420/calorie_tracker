# Nepali Calorie Tracker Mobile App

A beautiful and intuitive mobile application for tracking calories with a focus on Nepali cuisine. Built with React Native, Expo, and React Native Paper.

## Features

### 🍽️ Comprehensive Food Database

- **25+ Nepali Foods**: Traditional dishes like Dal Bhat, Momos, Gundruk, and more
- **Detailed Nutrition Info**: Calories, protein, carbs, and fats for each food
- **Multiple Categories**: Main courses, snacks, vegetables, meats, dairy, grains, and condiments

### 📊 Smart Nutrition Tracking

- **Daily Summary Dashboard**: Visual overview of your nutrition intake
- **Progress Bars**: Track calories against your daily goal with color-coded indicators
- **Macro Breakdown**: Detailed protein, carbs, and fats tracking with visual bars
- **Real-time Calculations**: Instant updates as you add or remove foods

### 🔍 Powerful Search & Discovery

- **Advanced Search**: Find foods by name with instant filtering
- **Category Filtering**: Browse foods by type (snacks, main courses, etc.)
- **Quick Add**: Popular foods readily available on the dashboard
- **Food Details**: Complete nutritional information for informed choices

### 📱 Intuitive User Experience

- **Bottom Navigation**: Easy switching between Dashboard and Food Search
- **Material Design**: Clean, modern interface with React Native Paper
- **Interactive Modals**: Smooth food addition process with quantity selection
- **Snackbar Notifications**: Instant feedback for user actions
- **Responsive Design**: Optimized for different screen sizes

## Technology Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **React Native Paper**: Material Design components
- **TypeScript**: Type-safe development
- **React Native Vector Icons**: Beautiful iconography

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device (for testing)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nepali-calorie-tracker/mobile
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on your device**
   - Install Expo Go from App Store/Google Play
   - Scan the QR code from the terminal with Expo Go
   - The app will load on your device

### Alternative: Run on Simulator

**For iOS (macOS only):**

```bash
npm run ios
```

**For Android:**

```bash
npm run android
```

**For Web:**

```bash
npm run web
```

## App Structure

```
mobile/
├── App.tsx                 # Main app component with navigation
├── components/             # Reusable UI components
│   ├── FoodCard.tsx       # Individual food item card
│   ├── FoodSearch.tsx     # Search and filter interface
│   └── NutritionSummary.tsx # Daily nutrition overview
├── data/
│   └── foods.ts           # Nepali food database
└── package.json
```

## Key Components

### Dashboard

- Nutrition summary with calorie progress
- Today's food diary with detailed macro information
- Popular Nepali foods for quick access
- Remove foods functionality

### Food Search

- Comprehensive search across all foods
- Category-based filtering
- Detailed nutritional information
- Easy food addition to diary

### Add Food Modal

- Food selection with nutritional details
- Quantity input with real-time calorie calculation
- Macro breakdown preview
- Confirmation and cancellation options

## Customization

### Adding New Foods

Edit `data/foods.ts` to add new food items:

```typescript
{
  id: 'unique-id',
  name: 'Food Name',
  calories: 000,
  protein: 00,
  carbs: 00,
  fats: 00,
  unit: 'serving-unit',
  category: 'Category',
}
```

### Modifying Daily Goals

In `components/NutritionSummary.tsx`, adjust the daily targets:

- Calories: `dailyCalorieGoal` prop (default: 2000)
- Protein: Line 53 (default: 150g)
- Carbs: Line 58 (default: 250g)
- Fats: Line 63 (default: 65g)

### Styling

All styles are contained within each component file using StyleSheet. The app uses a consistent color scheme:

- Primary: `#4CAF50` (Green)
- Accent: `#FF9800` (Orange)
- Background: `#f5f5f5` (Light Gray)

## Future Enhancements

- **Backend Integration**: Connect to your Prisma-based backend
- **User Authentication**: Personal accounts and data sync
- **Meal Planning**: Plan meals in advance
- **Exercise Tracking**: Calorie burn tracking
- **Photo Recognition**: AI-powered food identification
- **Barcode Scanning**: Quick food entry
- **Social Features**: Share progress with friends
- **Offline Support**: Work without internet connection

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add/update tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
