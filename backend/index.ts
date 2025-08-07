import express from "express";
import cors from "cors";
import FoodRoutes from "./routes/food.route";

const app = express();

app.use(express.json());

// Configure CORS with specific options
app.use(
  cors({
    origin: [
      "http://localhost:19006", // Expo web dev
      "http://localhost:19000", // Expo dev client
      "exp://localhost:19000", // Expo Go
      "exp://192.168.100.216:8081", // Expo Go on local network
      "https://your-mobile-app-domain.com", // Your deployed mobile app domain (if you have one)
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

const PORT = process.env.PORT || 3000;

app.use("/api/food", FoodRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
