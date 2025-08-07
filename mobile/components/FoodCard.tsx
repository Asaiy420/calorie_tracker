import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text, Chip } from "react-native-paper";
import { FoodItem } from "../services/foodService";

interface FoodCardProps {
  food: FoodItem;
  onPress: () => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ food, onPress }) => {
  return (
    <Card style={styles.foodCard} onPress={onPress}>
      <Card.Content style={styles.foodCardContent}>
        <Text style={styles.foodCardName}>{food.name}</Text>
        <Text style={styles.foodCardCalories}>
          {food.calories} cal per {food.unit}
        </Text>
        <Text style={styles.macroInfo}>
          P: {food.protein}g | C: {food.carbs}g | F: {food.fats}g
        </Text>
        <Chip mode="outlined" style={styles.foodCardChip}>
          {food.category}
        </Chip>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  foodCard: {
    width: "48%",
    marginBottom: 12,
    elevation: 2,
  },
  foodCardContent: {
    alignItems: "center",
    paddingVertical: 12,
  },
  foodCardName: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 4,
    color: "#2E7D32",
  },
  foodCardCalories: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
    textAlign: "center",
  },
  macroInfo: {
    fontSize: 10,
    color: "#888",
    marginBottom: 6,
    textAlign: "center",
  },
  foodCardChip: {
    transform: [{ scale: 0.8 }],
  },
});
