import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  Card,
  Title,
  Searchbar,
  List,
  Text,
  Chip,
  Button,
  IconButton,
} from "react-native-paper";
import { FoodItem } from "../services/foodService";

interface FoodSearchProps {
  foods: FoodItem[];
  onFoodSelect: (food: FoodItem) => void;
}

export const FoodSearch: React.FC<FoodSearchProps> = ({
  foods,
  onFoodSelect,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(
      foods
        .map((food) => food.category)
        .filter((category): category is string => category !== null)
    )
  ).sort();

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderFoodItem = ({ item }: { item: FoodItem }) => (
    <List.Item
      title={item.name}
      description={`${item.calories} cal per ${item.unit} • P: ${item.protein}g • C: ${item.carbs}g • F: ${item.fats}g`}
      left={(props) => <List.Icon {...props} icon="food" />}
      right={(props) => (
        <IconButton
          {...props}
          icon="plus"
          onPress={() => onFoodSelect(item)}
          mode="contained"
          iconColor="#4CAF50"
        />
      )}
      onPress={() => onFoodSelect(item)}
      style={styles.foodItem}
    />
  );

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title style={styles.title}>Search Foods</Title>

        <Searchbar
          placeholder="Search for foods..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
          iconColor="#4CAF50"
        />

        <Text style={styles.categoryLabel}>Categories:</Text>
        <View style={styles.categoryContainer}>
          <Chip
            mode={selectedCategory === null ? "flat" : "outlined"}
            onPress={() => setSelectedCategory(null)}
            style={styles.categoryChip}
            textStyle={
              selectedCategory === null ? styles.activeCategoryText : undefined
            }
          >
            All
          </Chip>
          {categories.map((category) => (
            <Chip
              key={category}
              mode={selectedCategory === category ? "flat" : "outlined"}
              onPress={() => setSelectedCategory(category)}
              style={styles.categoryChip}
              textStyle={
                selectedCategory === category
                  ? styles.activeCategoryText
                  : undefined
              }
            >
              {category}
            </Chip>
          ))}
        </View>

        <Text style={styles.resultsLabel}>
          {filteredFoods.length} food{filteredFoods.length !== 1 ? "s" : ""}{" "}
          found
        </Text>

        <FlatList
          data={filteredFoods}
          renderItem={renderFoodItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.foodList}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                {searchQuery
                  ? "No foods match your search"
                  : "No foods available"}
              </Text>
            </View>
          }
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    elevation: 4,
  },
  title: {
    textAlign: "center",
    marginBottom: 16,
    color: "#2E7D32",
  },
  searchBar: {
    marginBottom: 16,
    elevation: 2,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    color: "#333",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  categoryChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  activeCategoryText: {
    color: "#fff",
  },
  resultsLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  foodList: {
    maxHeight: 400,
  },
  foodItem: {
    backgroundColor: "#f9f9f9",
    marginBottom: 4,
    borderRadius: 8,
    elevation: 1,
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    color: "#666",
    fontStyle: "italic",
  },
});
