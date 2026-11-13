// Test 2: My Shopping List
let shoppingList = ["Bread", "Milk", "Sugar", "Rice"];

// 1. Display the entire shopping list
console.log("Entire list:", shoppingList);

// 2. Display the first item
console.log("First item:", shoppingList[0]);

// 3. Display the last item
console.log("Last item:", shoppingList[shoppingList.length - 1]);

// 4. Add "Cooking Oil" to the end
shoppingList.push("Cooking Oil");
console.log("After adding Cooking Oil:", shoppingList);

// 5. Remove the first item
shoppingList.shift();
console.log("After removing the first item:", shoppingList);

// 6. Change "Sugar" to "Tea Leaves"
const sugarIndex = shoppingList.indexOf("Sugar");
if (sugarIndex !== -1) {
  shoppingList[sugarIndex] = "Tea Leaves";
}
console.log("After replacing Sugar with Tea Leaves:", shoppingList);

// 7. Display the total number of items
console.log("Total number of items:", shoppingList.length);
