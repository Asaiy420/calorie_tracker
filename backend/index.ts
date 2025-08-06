import express from "express";
import cors from "cors";
import FoodRoutes from "./routes/food.route";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;


app.use("/api/food", FoodRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
