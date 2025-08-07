# Database Seeding Scripts

This directory contains scripts to populate your Nepali Calorie Tracker database with initial data.

## Available Scripts

### `seed.ts` - Main Seeding Script

Populates the database with **60+ traditional Nepali foods** across multiple categories:

#### Food Categories Included:

- **Main Courses** (5 items): Dal Bhat, Dhido, Khichdi, etc.
- **Grains** (3 items): White rice, brown rice, beaten rice
- **Legumes** (5 items): Various dals and beans
- **Snacks** (10 items): Momos, Sel Roti, Chatamari, etc.
- **Vegetables** (8 items): Gundruk, Saag, Aloo Tama, etc.
- **Meat & Protein** (6 items): Chicken, mutton, fish, sukuti, etc.
- **Dairy** (4 items): Yogurt, paneer, chhurpi, milk
- **Beverages** (4 items): Lassi, tea, chang, etc.
- **Desserts** (4 items): Kheer, rasgulla, jalebi, etc.
- **Condiments** (4 items): Various achars and pickles
- **Nuts** (2 items): Almonds, walnuts
- **Dried Fruits** (1 item): Raisins
- **Fresh Fruits** (4 items): Banana, apple, mango, orange

## How to Run

### Prerequisites

1. Make sure your database is set up and connected
2. Ensure Prisma is configured and migrations are applied

### Running the Seed Script

```bash
# Navigate to backend directory
cd backend

# Run the seed script
npm run seed

# Or with bun
bun run seed
```

### Reset Database and Seed

To completely reset your database and reseed:

```bash
npm run db:reset
```

## What the Script Does

1. **Clears existing data**: Removes all current food entries
2. **Inserts new data**: Adds 60+ Nepali foods with complete nutritional information
3. **Provides feedback**: Shows progress and summary of what was added
4. **Error handling**: Graceful error handling and cleanup

## Food Data Structure

Each food item includes:

- **Name**: Traditional Nepali name
- **Calories**: Per serving/unit
- **Protein**: In grams
- **Carbohydrates**: In grams
- **Fats**: In grams
- **Unit**: Serving unit (plate, cup, piece, etc.)
- **Category**: Food classification

## Sample Output

```
🌱 Starting to seed the database with Nepali foods...
🗑️  Clearing existing food data...
📥 Inserting Nepali food data...
✅ Successfully seeded 60 Nepali foods!

📊 Foods added by category:
   Main Course: 5 items
   Grain: 3 items
   Legume: 5 items
   Snack: 10 items
   Vegetable: 8 items
   Meat: 6 items
   Dairy: 4 items
   Beverage: 4 items
   Dessert: 4 items
   Condiment: 4 items
   Nuts: 2 items
   Dried Fruit: 1 items
   Fruit: 4 items

🎉 Database seeding completed successfully!
```

## Customizing the Data

To add more foods or modify existing ones:

1. Edit the `nepaliFoodsData` array in `seed.ts`
2. Follow the existing structure for new entries
3. Run the seed script again

## Nutritional Data Sources

The nutritional values are based on:

- USDA Food Database
- Indian/South Asian food composition tables
- Traditional Nepali serving sizes
- Common preparation methods

_Note: Values are approximations and may vary based on preparation methods and ingredients._
