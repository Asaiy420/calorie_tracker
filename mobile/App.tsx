import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, Alert } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  Appbar,
  Card,
  Title,
  Paragraph,
  FAB,
  Chip,
  Text,
  Button,
  Portal,
  Modal,
  TextInput,
  Snackbar,
  BottomNavigation,
  ActivityIndicator,
} from "react-native-paper";

import { NutritionSummary } from "./components/NutritionSummary";
import { FoodCard } from "./components/FoodCard";
import { FoodSearch } from "./components/FoodSearch";
import { foodService, FoodItem } from "./services/foodService";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4CAF50",
    accent: "#FF9800",
    background: "#f5f5f5",
  },
};

interface ConsumedFood extends FoodItem {
  quantity: number;
  timeAdded: Date;
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [consumedFoods, setConsumedFoods] = useState<ConsumedFood[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [quantity, setQuantity] = useState("1");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // API related state
  const [allFoods, setAllFoods] = useState<FoodItem[]>([]);
  const [popularFoods, setPopularFoods] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load initial data
  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load all foods and popular foods
      const [foods, popular] = await Promise.all([
        foodService.getAllFoods(),
        foodService.getPopularFoods(),
      ]);

      setAllFoods(foods);
      setPopularFoods(popular);

      console.log(`📱 Loaded ${foods.length} foods from API`);
    } catch (err: any) {
      setError(err.message || "Failed to load data");
      console.error("Failed to load initial data:", err);
      Alert.alert(
        "Connection Error",
        "Failed to load food data. Please make sure your backend server is running on http://localhost:3000",
        [{ text: "Retry", onPress: loadInitialData }, { text: "OK" }]
      );
    } finally {
      setLoading(false);
    }
  };

  const totalCalories = consumedFoods.reduce(
    (total, food) => total + food.calories * food.quantity,
    0
  );
  const totalProtein = consumedFoods.reduce(
    (total, food) => total + food.protein * food.quantity,
    0
  );
  const totalCarbs = consumedFoods.reduce(
    (total, food) => total + food.carbs * food.quantity,
    0
  );
  const totalFats = consumedFoods.reduce(
    (total, food) => total + food.fats * food.quantity,
    0
  );

  const addFood = () => {
    if (selectedFood && quantity) {
      const newConsumedFood: ConsumedFood = {
        ...selectedFood,
        quantity: parseFloat(quantity),
        timeAdded: new Date(),
      };
      setConsumedFoods([...consumedFoods, newConsumedFood]);
      setShowAddModal(false);
      setSelectedFood(null);
      setQuantity("1");
      setSnackbarMessage(`Added ${selectedFood.name} to your diary!`);
      setSnackbarVisible(true);
    }
  };

  const removeFood = (index: number) => {
    const newConsumedFoods = [...consumedFoods];
    newConsumedFoods.splice(index, 1);
    setConsumedFoods(newConsumedFoods);
    setSnackbarMessage("Food removed from diary");
    setSnackbarVisible(true);
  };

  const onFoodSelect = (food: FoodItem) => {
    setSelectedFood(food);
    setShowAddModal(true);
  };

  const DashboardRoute = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text style={styles.loadingText}>Loading foods...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>❌ {error}</Text>
          <Button
            mode="contained"
            onPress={loadInitialData}
            style={styles.retryButton}
          >
            Retry
          </Button>
        </View>
      );
    }

    return (
      <ScrollView style={styles.scrollView}>
        <NutritionSummary
          totalCalories={totalCalories}
          totalProtein={totalProtein}
          totalCarbs={totalCarbs}
          totalFats={totalFats}
        />

        <Card style={styles.diaryCard}>
          <Card.Content>
            <Title>Today's Food Diary</Title>
            {consumedFoods.length === 0 ? (
              <Paragraph style={styles.emptyText}>
                No foods logged yet. Start tracking your meals!
              </Paragraph>
            ) : (
              consumedFoods.map((food, index) => (
                <View key={index} style={styles.foodItem}>
                  <View style={styles.foodInfo}>
                    <Text style={styles.foodName}>
                      {food.name} ({food.quantity} {food.unit})
                    </Text>
                    <Text style={styles.foodDetails}>
                      {Math.round(food.calories * food.quantity)} cal • P:{" "}
                      {Math.round(food.protein * food.quantity)}g • C:{" "}
                      {Math.round(food.carbs * food.quantity)}g • F:{" "}
                      {Math.round(food.fats * food.quantity)}g
                    </Text>
                    <Chip
                      mode="outlined"
                      style={styles.categoryChip}
                      textStyle={styles.categoryText}
                    >
                      {food.category}
                    </Chip>
                  </View>
                  <Button
                    mode="text"
                    onPress={() => removeFood(index)}
                    textColor={theme.colors.error}
                  >
                    Remove
                  </Button>
                </View>
              ))
            )}
          </Card.Content>
        </Card>

        <Card style={styles.quickAddCard}>
          <Card.Content>
            <Title>Popular Nepali Foods</Title>
            <View style={styles.foodGrid}>
              {popularFoods.map((food) => (
                <FoodCard
                  key={food.id}
                  food={food}
                  onPress={() => onFoodSelect(food)}
                />
              ))}
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    );
  };

  const SearchRoute = () => (
    <View style={styles.searchContainer}>
      <FoodSearch foods={allFoods} onFoodSelect={onFoodSelect} />
    </View>
  );

  const routes = [
    { key: "dashboard", title: "Dashboard", focusedIcon: "view-dashboard" },
    { key: "search", title: "Add Food", focusedIcon: "magnify" },
  ];

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashboardRoute,
    search: SearchRoute,
  });

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Nepali Calorie Tracker" />
        </Appbar.Header>

        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={styles.bottomNavigation}
        />

        {/* Add Food Modal */}
        <Portal>
          <Modal
            visible={showAddModal}
            onDismiss={() => setShowAddModal(false)}
            contentContainerStyle={styles.modal}
          >
            <Title>Add Food to Diary</Title>
            {selectedFood ? (
              <View>
                <Text style={styles.selectedFoodName}>{selectedFood.name}</Text>
                <Text style={styles.selectedFoodInfo}>
                  {selectedFood.calories} cal per {selectedFood.unit}
                </Text>
                <Text style={styles.selectedFoodMacros}>
                  Protein: {selectedFood.protein}g • Carbs: {selectedFood.carbs}
                  g • Fats: {selectedFood.fats}g
                </Text>
                <TextInput
                  label="Quantity"
                  value={quantity}
                  onChangeText={setQuantity}
                  keyboardType="numeric"
                  style={styles.quantityInput}
                  mode="outlined"
                />
                <Text style={styles.calculatedInfo}>
                  Total:{" "}
                  {Math.round(
                    selectedFood.calories * parseFloat(quantity || "0")
                  )}{" "}
                  calories
                </Text>
                <View style={styles.modalButtons}>
                  <Button
                    mode="outlined"
                    onPress={() => setShowAddModal(false)}
                    style={styles.modalButton}
                  >
                    Cancel
                  </Button>
                  <Button
                    mode="contained"
                    onPress={addFood}
                    style={styles.modalButton}
                  >
                    Add to Diary
                  </Button>
                </View>
              </View>
            ) : (
              <View>
                <Text>Select a food to add to your diary</Text>
              </View>
            )}
          </Modal>
        </Portal>

        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={3000}
          action={{
            label: "Dismiss",
            onPress: () => setSnackbarVisible(false),
          }}
        >
          {snackbarMessage}
        </Snackbar>

        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flex: 1,
    padding: 16,
  },
  bottomNavigation: {
    backgroundColor: "#fff",
  },
  summaryCard: {
    marginBottom: 16,
    elevation: 4,
  },
  summaryTitle: {
    textAlign: "center",
    marginBottom: 16,
    color: "#2E7D32",
  },
  calorieRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: 16,
  },
  calorieText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  calorieLabel: {
    fontSize: 16,
    color: "#666",
    marginLeft: 8,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  macroRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  macroItem: {
    alignItems: "center",
  },
  macroValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  macroLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  diaryCard: {
    marginBottom: 16,
    elevation: 4,
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    fontStyle: "italic",
    marginVertical: 20,
  },
  foodItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  foodCalories: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  foodDetails: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
  },
  categoryChip: {
    alignSelf: "flex-start",
  },
  categoryText: {
    fontSize: 10,
  },
  quickAddCard: {
    marginBottom: 100,
    elevation: 4,
  },
  foodGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  foodCard: {
    width: "48%",
    marginBottom: 12,
    elevation: 2,
  },
  foodCardContent: {
    alignItems: "center",
    paddingVertical: 8,
  },
  foodCardName: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 4,
  },
  foodCardCalories: {
    fontSize: 12,
    color: "#666",
    marginBottom: 6,
  },
  foodCardChip: {
    transform: [{ scale: 0.8 }],
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#4CAF50",
  },
  modal: {
    backgroundColor: "white",
    padding: 24,
    margin: 20,
    borderRadius: 8,
  },
  selectedFoodName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#2E7D32",
  },
  selectedFoodInfo: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  selectedFoodMacros: {
    fontSize: 12,
    color: "#888",
    marginBottom: 16,
  },
  quantityInput: {
    marginBottom: 16,
  },
  calculatedInfo: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2E7D32",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalButton: {
    minWidth: 100,
  },
  foodSelectButton: {
    marginVertical: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#f44336",
    textAlign: "center",
    marginBottom: 20,
  },
  retryButton: {
    marginTop: 10,
  },
});
