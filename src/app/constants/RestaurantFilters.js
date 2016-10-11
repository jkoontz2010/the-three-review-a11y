const selectedFilters = {
  location: "Austin",
  cuisine: "tacos",
  cost: "any",
  filterRestaurants
};

function filterRestaurants(restaurant) {
  const location = selectedFilters.location;
  const cuisine = selectedFilters.cuisine;
  const cost = selectedFilters.cost;

  if (location && restaurant.location.join(" ").indexOf(location) === -1) {
    return false;
  }
  if (cuisine && restaurant.alt_text.indexOf(cuisine) === -1) {
    return false;
  }
  if (cost && cost !== "any" && restaurant.cost !== cost) {
    return false;
  }

  return true;
}
