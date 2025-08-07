import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Text, ProgressBar } from "react-native-paper";

interface NutritionSummaryProps {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
  dailyCalorieGoal?: number;
}

export const NutritionSummary: React.FC<NutritionSummaryProps> = ({
  totalCalories,
  totalProtein,
  totalCarbs,
  totalFats,
  dailyCalorieGoal = 2000,
}) => {
  const calorieProgress = Math.min(totalCalories / dailyCalorieGoal, 1);
  const remainingCalories = Math.max(dailyCalorieGoal - totalCalories, 0);

  return (
    <Card style={styles.summaryCard}>
      <Card.Content>
        <Title style={styles.summaryTitle}>Today's Nutrition</Title>

        <View style={styles.calorieSection}>
          <View style={styles.calorieRow}>
            <Text style={styles.calorieText}>{Math.round(totalCalories)}</Text>
            <Text style={styles.calorieLabel}>
              / {dailyCalorieGoal} calories
            </Text>
          </View>

          <Text style={styles.remainingText}>
            {remainingCalories > 0
              ? `${Math.round(remainingCalories)} calories remaining`
              : `${Math.round(
                  totalCalories - dailyCalorieGoal
                )} calories over goal`}
          </Text>

          <ProgressBar
            progress={calorieProgress}
            color={calorieProgress > 1 ? "#f44336" : "#4CAF50"}
            style={styles.progressBar}
          />
        </View>

        <View style={styles.macroRow}>
          <View style={styles.macroItem}>
            <Text style={styles.macroValue}>{Math.round(totalProtein)}g</Text>
            <Text style={styles.macroLabel}>Protein</Text>
            <View
              style={[
                styles.macroBar,
                {
                  width: `${Math.min((totalProtein / 150) * 100, 100)}%`,
                  backgroundColor: "#2196F3",
                },
              ]}
            />
          </View>
          <View style={styles.macroItem}>
            <Text style={styles.macroValue}>{Math.round(totalCarbs)}g</Text>
            <Text style={styles.macroLabel}>Carbs</Text>
            <View
              style={[
                styles.macroBar,
                {
                  width: `${Math.min((totalCarbs / 250) * 100, 100)}%`,
                  backgroundColor: "#FF9800",
                },
              ]}
            />
          </View>
          <View style={styles.macroItem}>
            <Text style={styles.macroValue}>{Math.round(totalFats)}g</Text>
            <Text style={styles.macroLabel}>Fats</Text>
            <View
              style={[
                styles.macroBar,
                {
                  width: `${Math.min((totalFats / 65) * 100, 100)}%`,
                  backgroundColor: "#9C27B0",
                },
              ]}
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  summaryCard: {
    marginBottom: 16,
    elevation: 4,
    backgroundColor: "#fff",
  },
  summaryTitle: {
    textAlign: "center",
    marginBottom: 20,
    color: "#2E7D32",
    fontSize: 20,
  },
  calorieSection: {
    marginBottom: 24,
  },
  calorieRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: 8,
  },
  calorieText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  calorieLabel: {
    fontSize: 16,
    color: "#666",
    marginLeft: 8,
  },
  remainingText: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  macroRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  macroItem: {
    alignItems: "center",
    flex: 1,
  },
  macroValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  macroLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
    marginBottom: 8,
  },
  macroBar: {
    height: 4,
    borderRadius: 2,
    alignSelf: "stretch",
    marginHorizontal: 8,
  },
});
