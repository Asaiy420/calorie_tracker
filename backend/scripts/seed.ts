import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const nepaliFoodsData = [
  // Staple Foods & Main Courses
  {
    name: "Dal Bhat (Dal + Rice)",
    calories: 350,
    protein: 15,
    carbs: 60,
    fats: 8,
    unit: "plate",
    category: "Main Course",
  },
  {
    name: "Dhido (Millet/Corn Flour)",
    calories: 180,
    protein: 6,
    carbs: 38,
    fats: 2,
    unit: "bowl",
    category: "Main Course",
  },
  {
    name: "Khichdi",
    calories: 200,
    protein: 8,
    carbs: 35,
    fats: 4,
    unit: "bowl",
    category: "Main Course",
  },
  {
    name: "Bhat (White Rice)",
    calories: 130,
    protein: 3,
    carbs: 28,
    fats: 0.3,
    unit: "cup",
    category: "Grain",
  },
  {
    name: "Brown Rice",
    calories: 110,
    protein: 3,
    carbs: 23,
    fats: 0.9,
    unit: "cup",
    category: "Grain",
  },

  // Lentils & Legumes
  {
    name: "Dal (Mixed Lentils)",
    calories: 180,
    protein: 12,
    carbs: 30,
    fats: 1,
    unit: "cup",
    category: "Legume",
  },
  {
    name: "Masoor Dal",
    calories: 170,
    protein: 13,
    carbs: 28,
    fats: 0.8,
    unit: "cup",
    category: "Legume",
  },
  {
    name: "Chana Dal",
    calories: 190,
    protein: 14,
    carbs: 32,
    fats: 1.2,
    unit: "cup",
    category: "Legume",
  },
  {
    name: "Mung Dal",
    calories: 160,
    protein: 12,
    carbs: 26,
    fats: 0.7,
    unit: "cup",
    category: "Legume",
  },
  {
    name: "Rajma (Kidney Beans)",
    calories: 220,
    protein: 15,
    carbs: 40,
    fats: 1,
    unit: "cup",
    category: "Legume",
  },

  // Traditional Snacks & Street Food
  {
    name: "Momos (Vegetable)",
    calories: 45,
    protein: 2,
    carbs: 7,
    fats: 1.5,
    unit: "piece",
    category: "Snack",
  },
  {
    name: "Momos (Chicken)",
    calories: 55,
    protein: 4,
    carbs: 6,
    fats: 2,
    unit: "piece",
    category: "Snack",
  },
  {
    name: "Momos (Buff)",
    calories: 60,
    protein: 5,
    carbs: 6,
    fats: 2.5,
    unit: "piece",
    category: "Snack",
  },
  {
    name: "Sel Roti",
    calories: 220,
    protein: 4,
    carbs: 35,
    fats: 8,
    unit: "piece",
    category: "Snack",
  },
  {
    name: "Chatamari (Newari Pizza)",
    calories: 180,
    protein: 8,
    carbs: 25,
    fats: 6,
    unit: "piece",
    category: "Snack",
  },
  {
    name: "Bara (Black Lentil Pancake)",
    calories: 120,
    protein: 6,
    carbs: 15,
    fats: 4,
    unit: "piece",
    category: "Snack",
  },
  {
    name: "Yomari",
    calories: 150,
    protein: 4,
    carbs: 28,
    fats: 3,
    unit: "piece",
    category: "Snack",
  },
  {
    name: "Chiura (Beaten Rice)",
    calories: 160,
    protein: 3,
    carbs: 35,
    fats: 1,
    unit: "cup",
    category: "Grain",
  },
  {
    name: "Samosa",
    calories: 180,
    protein: 4,
    carbs: 22,
    fats: 8,
    unit: "piece",
    category: "Snack",
  },
  {
    name: "Pakoda (Mixed Vegetable)",
    calories: 150,
    protein: 4,
    carbs: 18,
    fats: 7,
    unit: "piece",
    category: "Snack",
  },

  // Vegetables & Curries
  {
    name: "Gundruk (Fermented Leafy Greens)",
    calories: 45,
    protein: 3,
    carbs: 8,
    fats: 1,
    unit: "cup",
    category: "Vegetable",
  },
  {
    name: "Saag (Spinach Curry)",
    calories: 35,
    protein: 4,
    carbs: 6,
    fats: 0.5,
    unit: "cup",
    category: "Vegetable",
  },
  {
    name: "Aloo Tama (Potato Bamboo Shoots)",
    calories: 120,
    protein: 3,
    carbs: 22,
    fats: 3,
    unit: "cup",
    category: "Vegetable",
  },
  {
    name: "Cauliflower Curry",
    calories: 80,
    protein: 3,
    carbs: 12,
    fats: 3,
    unit: "cup",
    category: "Vegetable",
  },
  {
    name: "Aloo Gobi",
    calories: 100,
    protein: 3,
    carbs: 18,
    fats: 2.5,
    unit: "cup",
    category: "Vegetable",
  },
  {
    name: "Bodi (Black-eyed Peas)",
    calories: 90,
    protein: 6,
    carbs: 16,
    fats: 0.5,
    unit: "cup",
    category: "Vegetable",
  },
  {
    name: "Karela (Bitter Gourd)",
    calories: 25,
    protein: 2,
    carbs: 5,
    fats: 0.2,
    unit: "cup",
    category: "Vegetable",
  },
  {
    name: "Bhanta (Eggplant Curry)",
    calories: 70,
    protein: 2,
    carbs: 12,
    fats: 2,
    unit: "cup",
    category: "Vegetable",
  },

  // Meat & Protein
  {
    name: "Chicken Curry",
    calories: 250,
    protein: 25,
    carbs: 8,
    fats: 14,
    unit: "cup",
    category: "Meat",
  },
  {
    name: "Mutton Curry",
    calories: 320,
    protein: 28,
    carbs: 6,
    fats: 20,
    unit: "cup",
    category: "Meat",
  },
  {
    name: "Buff (Buffalo) Sekuwa",
    calories: 180,
    protein: 22,
    carbs: 2,
    fats: 9,
    unit: "100g",
    category: "Meat",
  },
  {
    name: "Fish Curry",
    calories: 200,
    protein: 20,
    carbs: 8,
    fats: 10,
    unit: "cup",
    category: "Meat",
  },
  {
    name: "Sukuti (Dried Meat)",
    calories: 300,
    protein: 55,
    carbs: 0,
    fats: 8,
    unit: "100g",
    category: "Meat",
  },
  {
    name: "Boiled Egg",
    calories: 70,
    protein: 6,
    carbs: 0.5,
    fats: 5,
    unit: "piece",
    category: "Protein",
  },

  // Dairy Products
  {
    name: "Dahi (Yogurt)",
    calories: 70,
    protein: 4,
    carbs: 6,
    fats: 4,
    unit: "cup",
    category: "Dairy",
  },
  {
    name: "Paneer",
    calories: 265,
    protein: 18,
    carbs: 4,
    fats: 20,
    unit: "100g",
    category: "Dairy",
  },
  {
    name: "Chhurpi (Hard Cheese)",
    calories: 380,
    protein: 60,
    carbs: 4,
    fats: 12,
    unit: "100g",
    category: "Dairy",
  },
  {
    name: "Milk (Buffalo)",
    calories: 100,
    protein: 4,
    carbs: 5,
    fats: 7,
    unit: "cup",
    category: "Dairy",
  },

  // Beverages
  {
    name: "Lassi (Sweet)",
    calories: 150,
    protein: 6,
    carbs: 18,
    fats: 6,
    unit: "glass",
    category: "Beverage",
  },
  {
    name: "Chiya (Milk Tea)",
    calories: 80,
    protein: 2,
    carbs: 12,
    fats: 3,
    unit: "cup",
    category: "Beverage",
  },
  {
    name: "Juju Dhau (King Yogurt)",
    calories: 120,
    protein: 5,
    carbs: 15,
    fats: 5,
    unit: "cup",
    category: "Dessert",
  },
  {
    name: "Chang (Barley Beer)",
    calories: 120,
    protein: 1,
    carbs: 15,
    fats: 0,
    unit: "cup",
    category: "Beverage",
  },

  // Desserts & Sweets
  {
    name: "Kheer (Rice Pudding)",
    calories: 280,
    protein: 8,
    carbs: 45,
    fats: 10,
    unit: "cup",
    category: "Dessert",
  },
  {
    name: "Rasgulla",
    calories: 150,
    protein: 4,
    carbs: 30,
    fats: 2,
    unit: "piece",
    category: "Dessert",
  },
  {
    name: "Jalebi",
    calories: 180,
    protein: 2,
    carbs: 35,
    fats: 6,
    unit: "piece",
    category: "Dessert",
  },
  {
    name: "Laddu",
    calories: 200,
    protein: 4,
    carbs: 32,
    fats: 7,
    unit: "piece",
    category: "Dessert",
  },

  // Pickles & Condiments
  {
    name: "Achar (Mixed Pickle)",
    calories: 25,
    protein: 1,
    carbs: 4,
    fats: 1,
    unit: "tbsp",
    category: "Condiment",
  },
  {
    name: "Timur Achar (Sichuan Pepper Pickle)",
    calories: 15,
    protein: 0.5,
    carbs: 2,
    fats: 0.8,
    unit: "tbsp",
    category: "Condiment",
  },
  {
    name: "Golbheda Achar (Tomato Pickle)",
    calories: 20,
    protein: 0.8,
    carbs: 3,
    fats: 0.5,
    unit: "tbsp",
    category: "Condiment",
  },
  {
    name: "Khursani Achar (Chili Pickle)",
    calories: 10,
    protein: 0.5,
    carbs: 1.5,
    fats: 0.3,
    unit: "tbsp",
    category: "Condiment",
  },

  // Dry Fruits & Nuts
  {
    name: "Almonds",
    calories: 160,
    protein: 6,
    carbs: 6,
    fats: 14,
    unit: "30g",
    category: "Nuts",
  },
  {
    name: "Walnuts",
    calories: 185,
    protein: 4,
    carbs: 4,
    fats: 18,
    unit: "30g",
    category: "Nuts",
  },
  {
    name: "Raisins",
    calories: 85,
    protein: 1,
    carbs: 22,
    fats: 0.1,
    unit: "30g",
    category: "Dried Fruit",
  },

  // Fruits (Common in Nepal)
  {
    name: "Banana",
    calories: 105,
    protein: 1,
    carbs: 27,
    fats: 0.3,
    unit: "piece",
    category: "Fruit",
  },
  {
    name: "Apple",
    calories: 80,
    protein: 0.3,
    carbs: 21,
    fats: 0.2,
    unit: "piece",
    category: "Fruit",
  },
  {
    name: "Mango",
    calories: 135,
    protein: 1,
    carbs: 35,
    fats: 0.4,
    unit: "piece",
    category: "Fruit",
  },
  {
    name: "Orange",
    calories: 65,
    protein: 1,
    carbs: 16,
    fats: 0.2,
    unit: "piece",
    category: "Fruit",
  },
];

async function seedDatabase() {
  console.log("🌱 Starting to seed the database with Nepali foods...");

  try {
    // Clear existing food data
    console.log("🗑️  Clearing existing food data...");
    await prisma.food.deleteMany();

    // Insert new food data
    console.log("📥 Inserting Nepali food data...");
    const createdFoods = await prisma.food.createMany({
      data: nepaliFoodsData,
    });

    console.log(`✅ Successfully seeded ${createdFoods.count} Nepali foods!`);

    // Display summary by category
    const categories = [...new Set(nepaliFoodsData.map(food => food.category))];
    console.log("\n📊 Foods added by category:");
    
    for (const category of categories) {
      const count = nepaliFoodsData.filter(food => food.category === category).length;
      console.log(`   ${category}: ${count} items`);
    }

    console.log("\n🎉 Database seeding completed successfully!");
    
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed function
seedDatabase()
  .catch((error) => {
    console.error("Failed to seed database:", error);
    process.exit(1);
  });
