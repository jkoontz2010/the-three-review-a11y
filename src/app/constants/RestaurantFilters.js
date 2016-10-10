const selectedFilters = {
  location: "Austin",
  cuisine: "tacos",
  filterRestaurants
};

function filterRestaurants(restaurant) {
  const location = selectedFilters.location;
  const cuisine = selectedFilters.cuisine;

  if (location && restaurant.location.join(" ").indexOf(location) === -1) {
    return false;
  }
  if (cuisine && restaurant.alt_text.indexOf(cuisine) === -1) {
    return false;
  }

  return true;
}
