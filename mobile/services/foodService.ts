import api from "./api";

export interface FoodItem {
  id: number;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  unit: string;
  category: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateFoodRequest {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  unit: string;
  category: string;
}

export interface SearchFoodsResponse {
  message?: string;
}

class FoodService {
  /**
   * Get all foods from the database
   */
  async getAllFoods(): Promise<FoodItem[]> {
    try {
      const response = await api.get<FoodItem[]>("/food");
      return response.data;
    } catch (error) {
      console.error("Error fetching all foods:", error);
      throw new Error("Failed to fetch foods. Please check your connection.");
    }
  }

  /**
   * Search foods by name
   * @param query - Search query string
   */
  async searchFoods(query: string): Promise<FoodItem[]> {
    try {
      if (!query.trim()) {
        return this.getAllFoods();
      }

      const response = await api.get<FoodItem[] | SearchFoodsResponse>(
        "/food/search",
        {
          params: { q: query },
        }
      );

      // Handle case where no foods are found
      if ("message" in response.data) {
        return [];
      }

      return response.data as FoodItem[];
    } catch (error: any) {
      // Handle 404 (no foods found) as empty array
      if (error.response?.status === 404) {
        return [];
      }

      console.error("Error searching foods:", error);
      throw new Error("Failed to search foods. Please try again.");
    }
  }

  /**
   * Add a new food to the database
   * @param foodData - Food data to create
   */
  async addFood(foodData: CreateFoodRequest): Promise<FoodItem> {
    try {
      const response = await api.post<{ message: string; food: FoodItem }>(
        "/food/add",
        foodData
      );
      return response.data.food;
    } catch (error: any) {
      if (error.response?.status === 400) {
        throw new Error("Please fill in all required fields.");
      }

      console.error("Error adding food:", error);
      throw new Error("Failed to add food. Please try again.");
    }
  }

  /**
   * Get foods by category
   * @param category - Food category to filter by
   */
  async getFoodsByCategory(category: string): Promise<FoodItem[]> {
    try {
      const allFoods = await this.getAllFoods();
      return allFoods.filter(
        (food) => food.category?.toLowerCase() === category.toLowerCase()
      );
    } catch (error) {
      console.error("Error fetching foods by category:", error);
      throw new Error("Failed to fetch foods by category.");
    }
  }

  /**
   * Get unique categories from all foods
   */
  async getCategories(): Promise<string[]> {
    try {
      const allFoods = await this.getAllFoods();
      const categories = allFoods
        .map((food) => food.category)
        .filter((category): category is string => category !== null)
        .filter((category, index, array) => array.indexOf(category) === index)
        .sort();

      return categories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw new Error("Failed to fetch categories.");
    }
  }

  /**
   * Get popular foods (you can modify this logic based on your needs)
   * For now, it returns the first 6 foods
   */
  async getPopularFoods(): Promise<FoodItem[]> {
    try {
      const allFoods = await this.getAllFoods();
      return allFoods.slice(0, 6);
    } catch (error) {
      console.error("Error fetching popular foods:", error);
      throw new Error("Failed to fetch popular foods.");
    }
  }
}

// Export a singleton instance
export const foodService = new FoodService();
export default foodService;
