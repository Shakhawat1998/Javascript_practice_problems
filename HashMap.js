function mapExample() {
    // Define a Map object to store country-capital pairs
    let capitalCities = new Map();

    // Add keys and values (Country, City)
    capitalCities.set("England", "London");
    capitalCities.set("Germany", "Berlin");
    capitalCities.set("Norway", "Oslo");
    capitalCities.set("USA", "Washington DC");

    // Print the map
    console.log(capitalCities);

    // Print the capital city of USA
    console.log(capitalCities.get("USA"));
}

// Call the function to execute the code
mapExample();
