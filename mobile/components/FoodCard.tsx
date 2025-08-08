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
    marginBottom: 16,
    elevation: 2,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },
  foodCardContent: {
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  foodCardName: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 6,
    color: "#0F172A",
    lineHeight: 20,
  },
  foodCardCalories: {
    fontSize: 13,
    color: "#475569",
    marginBottom: 4,
    textAlign: "center",
  },
  macroInfo: {
    fontSize: 11,
    color: "#64748B",
    marginBottom: 8,
    textAlign: "center",
  },
  foodCardChip: {
    transform: [{ scale: 0.85 }],
  },
});
