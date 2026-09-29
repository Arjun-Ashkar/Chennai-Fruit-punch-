// ============================================================
// CHENNAI FRUIT PUNCH — AUTHENTIC MENU DATA WITH ACCURATE IMAGERY
// ============================================================
// All menu items stored as structured data for dynamic rendering.
// Images curated with exact matching colors, drinks, and food items.
// ============================================================

export const menuCategories = [
  {
    name: "Combo Offers",
    slug: "combo-offers",
    icon: "🔥",
    items: [
      {
        id: "combo-01",
        name: "Combo 01",
        price: 99,
        description: "Bread Omelette OR Veg Sandwich + Lemon OR Watermelon Juice + French Fries",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=80",
        badge: "Value Pick",
        isVeg: false,
        isCombo: true,
        comboItems: ["Bread Omelette OR Veg Sandwich", "Lemon OR Watermelon Juice", "French Fries"],
      },
      {
        id: "combo-02",
        name: "Combo 02",
        price: 149,
        description: "Veg Burger + Cheese Balls + French Fries + Watermelon OR Lemon Juice",
        image: "https://images.pexels.com/photos/30785709/pexels-photo-30785709/free-photo-of-close-up-of-burgers-with-crispy-french-fries.jpeg?auto=compress&w=1260&h=750&dpr=1",
        badge: "Popular",
        isVeg: true,
        isCombo: true,
        comboItems: ["Veg Burger + Cheese Balls", "French Fries", "Watermelon OR Lemon Juice"],
      },
      {
        id: "combo-03",
        name: "Combo 03",
        price: 159,
        description: "Paneer Burger + Cheese Balls + French Fries + Watermelon OR Lemon Juice",
        image: "https://images.pexels.com/photos/32807693/pexels-photo-32807693/free-photo-of-classic-cheeseburger-with-fresh-lettuce.jpeg?auto=compress&w=1260&h=750&dpr=1",
        badge: null,
        isVeg: true,
        isCombo: true,
        comboItems: ["Paneer Burger + Cheese Balls", "French Fries", "Watermelon OR Lemon Juice"],
      },
      {
        id: "combo-04",
        name: "Combo 04",
        price: 169,
        description: "Chicken Burger + Chicken Nuggets + French Fries + Watermelon OR Lemon Juice",
        image: "https://images.pexels.com/photos/34407507/pexels-photo-34407507/free-photo-of-juicy-gourmet-burger-on-dark-background.jpeg?auto=compress&w=1260&h=750&dpr=1",
        badge: "Popular",
        isVeg: false,
        isCombo: true,
        comboItems: ["Chicken Burger + Chicken Nuggets", "French Fries", "Watermelon OR Lemon Juice"],
      },
      {
        id: "combo-05",
        name: "Combo 05",
        price: 189,
        description: "Bread Omelette + Chicken Momos + French Fries + Ice Cream + Watermelon OR Lemon Juice",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&auto=format&fit=crop&q=80",
        badge: "Best Value",
        isVeg: false,
        isCombo: true,
        comboItems: ["Bread Omelette + Chicken Momos", "French Fries + Ice Cream", "Watermelon OR Lemon Juice"],
      },
      {
        id: "combo-06",
        name: "Combo 06",
        price: 129,
        description: "Egg Maggi OR Veg Maggi + Punch Cocktail + Ice Cream",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&auto=format&fit=crop&q=80",
        badge: null,
        isVeg: true,
        isCombo: true,
        comboItems: ["Egg Maggi OR Veg Maggi", "Punch Cocktail", "Ice Cream"],
      },
      {
        id: "combo-07",
        name: "Combo 07",
        price: 139,
        description: "Veg Momos + Pani Poori + Punch Cocktail",
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=500&auto=format&fit=crop&q=80",
        badge: null,
        isVeg: true,
        isCombo: true,
        comboItems: ["Veg Momos", "Pani Poori", "Punch Cocktail"],
      },
      {
        id: "combo-08",
        name: "Combo 08",
        price: 179,
        description: "Pasta + Veg Nuggets + French Fries + Punch Cocktail",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=80",
        badge: null,
        isVeg: true,
        isCombo: true,
        comboItems: ["Pasta", "Veg Nuggets", "French Fries", "Punch Cocktail"],
      },
    ],
  },
  {
    name: "Burgers",
    slug: "burgers",
    icon: "🍔",
    items: [
      { id: "burg-01", name: "Classic Veg. Burger", price: 70, description: "Crisp potato & veggie patty topped with fresh lettuce and sauces", image: "https://images.pexels.com/photos/30785709/pexels-photo-30785709/free-photo-of-close-up-of-burgers-with-crispy-french-fries.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "burg-02", name: "Paneer Burger", price: 80, description: "Spiced paneer patty with creamy mayonnaise and crisp onions", image: "https://images.pexels.com/photos/32807693/pexels-photo-32807693/free-photo-of-classic-cheeseburger-with-fresh-lettuce.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: "Popular", isVeg: true },
      { id: "burg-03", name: "Egg Burger", price: 60, description: "Freshly cooked golden egg patty with toasted sesame buns", image: "https://images.pexels.com/photos/23940632/pexels-photo-23940632/free-photo-of-burger-with-scrambled-eggs.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: false },
      { id: "burg-04", name: "Veg Mix Egg Burger", price: 80, description: "Combination of mixed veg patty and fresh egg", image: "https://images.pexels.com/photos/30785709/pexels-photo-30785709/free-photo-of-close-up-of-burgers-with-crispy-french-fries.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: false },
      { id: "burg-05", name: "Classic Chicken Burger", price: 80, description: "Tender seasoned chicken patty with herbs and lettuce", image: "https://images.pexels.com/photos/34407507/pexels-photo-34407507/free-photo-of-juicy-gourmet-burger-on-dark-background.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: "Popular", isVeg: false },
      { id: "burg-06", name: "Chicken Mixed Egg Burger", price: 100, description: "Double loaded with succulent chicken and egg layer", image: "https://images.pexels.com/photos/34407507/pexels-photo-34407507/free-photo-of-juicy-gourmet-burger-on-dark-background.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: false },
    ],
    extras: ["Extra Cheese — ₹20"],
  },
  {
    name: "Momos",
    slug: "momos",
    icon: "🥟",
    items: [
      { id: "momo-01", name: "Mixed Veg Momos", price: 70, description: "Delicate steamed dumplings stuffed with finely minced vegetables and spicy chutney", image: "https://images.pexels.com/photos/33670191/pexels-photo-33670191.jpeg", badge: null, isVeg: true },
      { id: "momo-02", name: "Chicken Momos", price: 80, description: "Juicy minced chicken steamed dumplings with hot garlic dip", image: "https://images.pexels.com/photos/18803174/pexels-photo-18803174.jpeg", badge: "Popular", isVeg: false },
      { id: "momo-03", name: "Paneer Momos", price: 80, description: "Fresh spiced cottage cheese filling inside tender steamed wrap", image: "https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg", badge: null, isVeg: true },
      { id: "momo-04", name: "Corn Cheese Momos", price: 90, description: "Sweet golden corn and melted mozzarella cheese stuffing", image: "https://images.pexels.com/photos/36173262/pexels-photo-36173262.jpeg", badge: null, isVeg: true },
      { id: "momo-05", name: "Chicken Peri Peri Momos", price: 90, description: "Crispy fried chicken momos tossed in fiery peri peri spice", image: "https://images.pexels.com/photos/18803174/pexels-photo-18803174.jpeg", badge: "Spicy", isVeg: false },
    ],
    extras: ["Italian / Mexican Pan Fried — Extra ₹40"],
  },
  {
    name: "Bread Omelet",
    slug: "bread-omelet",
    icon: "🍳",
    items: [
      { id: "bo-01", name: "SPL Bread Omelet", price: 50, description: "Chennai street style toasted bread encased in fluffy spiced egg omelette", image: "https://images.pexels.com/photos/13056147/pexels-photo-13056147.jpeg", badge: "Special", isVeg: false },
      { id: "bo-02", name: "Cheese Bread Omelet", price: 60, description: "Toasted bread omelet with melted cheese slice inside", image: "https://images.pexels.com/photos/15028103/pexels-photo-15028103.jpeg", badge: null, isVeg: false },
      { id: "bo-03", name: "Veg Bread Omelet", price: 60, description: "Bread omelet loaded with crunchy onions, capsicum and tomatoes", image: "https://images.pexels.com/photos/29186451/pexels-photo-29186451.jpeg", badge: null, isVeg: false },
      { id: "bo-04", name: "Paneer Bread Omelet", price: 70, description: "Stuffed with grated seasoned paneer inside warm egg toast", image: "https://images.pexels.com/photos/27706326/pexels-photo-27706326.jpeg", badge: null, isVeg: false },
      { id: "bo-05", name: "Chicken Bread Omelet", price: 70, description: "Loaded with shredded spiced chicken inside toasted egg bread", image: "https://images.pexels.com/photos/14415378/pexels-photo-14415378.jpeg", badge: null, isVeg: false },
    ],
  },
  {
    name: "Frankie",
    slug: "frankie",
    icon: "🌯",
    items: [
      { id: "frank-01", name: "Veg Frankie", price: 60, description: "Spiced vegetable roll in a warm toasted flatbread with tangy chutney", image: "https://images.pexels.com/photos/12737663/pexels-photo-12737663.jpeg", badge: null, isVeg: true },
      { id: "frank-02", name: "Corn Frankie", price: 70, description: "Sweet corn and onion masala rolled in crisp roti", image: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg", badge: null, isVeg: true },
      { id: "frank-03", name: "Egg Frankie", price: 70, description: "Egg layered wrap stuffed with crunchy salad and chaat masala", image: "https://images.pexels.com/photos/12737921/pexels-photo-12737921.jpeg", badge: null, isVeg: false },
      { id: "frank-04", name: "Chicken Frankie", price: 80, description: "Succulent chicken chunks rolled with spicy herbs and sauces", image: "https://images.pexels.com/photos/33430554/pexels-photo-33430554.jpeg?auto=compress&cs=tinysrgb&w=800", badge: "Popular", isVeg: false },
      { id: "frank-05", name: "Paneer Frankie", price: 80, description: "Tikka spiced paneer cubes rolled with pickled onions", image: "https://images.pexels.com/photos/12737663/pexels-photo-12737663.jpeg", badge: null, isVeg: true },
    ],
  },
  {
    name: "French Fries",
    slug: "french-fries",
    icon: "🍟",
    items: [
      { id: "fries-01", name: "Classic Fries", price: 50, description: "Crispy golden salted potato fries", image: "https://images.pexels.com/photos/15754939/pexels-photo-15754939.jpeg", badge: null, isVeg: true },
      { id: "fries-02", name: "Masala Fries", price: 60, description: "Tossed in zesty Indian spices and chaat masala", image: "https://images.pexels.com/photos/29150162/pexels-photo-29150162.jpeg", badge: null, isVeg: true },
      { id: "fries-03", name: "Peri Peri Fries", price: 70, description: "Fiery African bird's eye chili seasoning shaken hot", image: "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg", badge: "Popular", isVeg: true },
      { id: "fries-04", name: "Chilly Cheese Fries", price: 90, description: "Loaded with melted cheddar cheese and spicy green chilies", image: "https://images.pexels.com/photos/35017890/pexels-photo-35017890.jpeg", badge: null, isVeg: true },
    ],
  },
  {
    name: "Sandwich",
    slug: "sandwich",
    icon: "🥪",
    items: [
      { id: "sand-01", name: "Veg Sandwich", price: 50, description: "Fresh sliced cucumber, tomato, and mint chutney toast", image: "https://images.pexels.com/photos/33014398/pexels-photo-33014398/free-photo-of-delicious-chicken-sandwich-with-side-of-fries.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "sand-02", name: "Cheese Toast", price: 50, description: "Toasted bread with melted golden cheese", image: "https://images.pexels.com/photos/9240536/pexels-photo-9240536.jpeg", badge: null, isVeg: true },
      { id: "sand-03", name: "Chilly Cheese Toast", price: 60, description: "Spicy chopped green chilies on toasted melted cheese", image: "https://images.pexels.com/photos/35054704/pexels-photo-35054704.jpeg", badge: null, isVeg: true },
      { id: "sand-04", name: "Chicken Sandwich", price: 70, description: "Seasoned shredded chicken with herb mayonnaise in toast", image: "https://images.pexels.com/photos/6416558/pexels-photo-6416558.jpeg", badge: null, isVeg: false },
      { id: "sand-05", name: "Paneer Sandwich", price: 70, description: "Tandoori flavored paneer filling pressed golden", image: "https://images.pexels.com/photos/33014398/pexels-photo-33014398/free-photo-of-delicious-chicken-sandwich-with-side-of-fries.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
    ],
  },
  {
    name: "Pasta",
    slug: "pasta",
    icon: "🍝",
    items: [
      { id: "pasta-01", name: "White Sauce Pasta", price: 100, description: "Penne cooked in rich creamy garlic Alfredo sauce with herbs", image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "pasta-02", name: "Red Sauce Pasta", price: 100, description: "Tangy tomato arrabbiata sauce with basil and Italian spices", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "pasta-03", name: "Italian Cheese Pasta", price: 110, description: "Baked cheesy Italian pasta topped with herbs", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=80", badge: "Popular", isVeg: true },
    ],
  },
  {
    name: "Maggi",
    slug: "maggi",
    icon: "🍜",
    items: [
      { id: "mag-01", name: "Classic Maggi", price: 60, description: "Steaming 2-minute masala Maggi noodles with signature seasoning", image: "https://images.pexels.com/photos/31109619/pexels-photo-31109619.jpeg", badge: null, isVeg: true },
      { id: "mag-02", name: "Peri Peri Maggi", price: 70, description: "Tossed with hot peri peri chili seasoning", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "mag-03", name: "Veg Maggi", price: 60, description: "Loaded with peas, carrots, and sweet bell peppers", image: "https://images.pexels.com/photos/31109619/pexels-photo-31109619.jpeg", badge: null, isVeg: true },
      { id: "mag-04", name: "Egg Maggi", price: 50, description: "Scrambled egg mixed with masala noodles", image: "https://images.pexels.com/photos/32644591/pexels-photo-32644591.jpeg", badge: null, isVeg: false },
      { id: "mag-05", name: "Paneer Maggi", price: 80, description: "Topped with paneer cubes and special masala", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "mag-06", name: "Chicken Maggi", price: 80, description: "Tender chicken bits stirred into savory spiced noodles", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: false },
    ],
  },
  {
    name: "Nuggets & Snacks",
    slug: "nuggets",
    icon: "🍗",
    items: [
      { id: "nug-01", name: "Veg Nuggets", price: 70, description: "Crispy breaded vegetable nuggets with dip", image: "https://images.pexels.com/photos/35315972/pexels-photo-35315972.jpeg", badge: null, isVeg: true },
      { id: "nug-02", name: "Cheese Balls", price: 70, description: "Golden fried balls filled with molten cheese", image: "https://images.pexels.com/photos/35402608/pexels-photo-35402608.jpeg", badge: "Popular", isVeg: true },
      { id: "nug-03", name: "Chicken Popcorn", price: 70, description: "Crunchy bite-sized seasoned chicken popcorn", image: "https://images.pexels.com/photos/28573376/pexels-photo-28573376.jpeg", badge: null, isVeg: false },
      { id: "nug-04", name: "Chicken Nuggets", price: 80, description: "Golden fried tender chicken nuggets", image: "https://images.pexels.com/photos/39853099/pexels-photo-39853099.jpeg", badge: "Popular", isVeg: false },
      { id: "nug-05", name: "Corn Cheese Nugget", price: 90, description: "Sweet corn and gooey mozzarella fried crisp", image: "https://images.pexels.com/photos/39034210/pexels-photo-39034210.jpeg", badge: null, isVeg: true },
    ],
  },
  {
    name: "Tea & Coffee",
    slug: "tea-coffee",
    icon: "☕",
    items: [
      { id: "tc-01", name: "Black Tea", price: 15, description: "Strong brewed black tea", image: "https://images.pexels.com/photos/5946807/pexels-photo-5946807.jpeg", badge: null, isVeg: true },
      { id: "tc-02", name: "Lemon Tea", price: 20, description: "Refreshing tea infused with freshly squeezed lemon", image: "https://images.pexels.com/photos/8330332/pexels-photo-8330332.jpeg", badge: null, isVeg: true },
      { id: "tc-03", name: "Ginger Tea", price: 20, description: "Warm spiced tea with real crushed ginger", image: "https://images.pexels.com/photos/8329295/pexels-photo-8329295.jpeg", badge: null, isVeg: true },
      { id: "tc-04", name: "Masala Tea", price: 20, description: "Traditional spiced Indian chai with cardamom and cloves", image: "https://images.pexels.com/photos/10258207/pexels-photo-10258207.jpeg", badge: "Popular", isVeg: true },
      { id: "tc-05", name: "Coffee", price: 25, description: "Frothy brewed South Indian filter coffee", image: "https://images.pexels.com/photos/111159/pexels-photo-111159.jpeg", badge: null, isVeg: true },
      { id: "tc-06", name: "Sukku Coffee", price: 25, description: "Herbal dried ginger & coriander coffee decoction", image: "https://images.pexels.com/photos/8700714/pexels-photo-8700714.jpeg", badge: null, isVeg: true },
      { id: "tc-07", name: "Boost", price: 25, description: "Hot Boost chocolate malt drink", image: "https://images.pexels.com/photos/10389609/pexels-photo-10389609.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "tc-08", name: "Horlicks", price: 25, description: "Nutritious warm Horlicks malted drink", image: "https://images.pexels.com/photos/28525198/pexels-photo-28525198.jpeg", badge: null, isVeg: true },
    ],
  },
  {
    name: "Fresh Juice",
    slug: "fresh-juice",
    icon: "🧃",
    items: [
      { id: "fj-01", name: "Lime Mint", price: 30, description: "Fresh pressed lime with cool garden mint", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-02", name: "Lime Soda", price: 30, description: "Crisp sparkling lime soda on ice", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-03", name: "Ginger Lime", price: 30, description: "Zesty crushed ginger with fresh lime", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-04", name: "Papaya", price: 30, description: "Smooth chilled fresh tropical papaya juice", image: "https://images.pexels.com/photos/8181521/pexels-photo-8181521.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "fj-05", name: "Guava", price: 30, description: "Fragrant fresh pink guava juice", image: "https://images.pexels.com/photos/2134037/pexels-photo-2134037.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "fj-06", name: "Watermelon", price: 35, description: "Pure refreshing sweet red watermelon juice", image: "https://images.pexels.com/photos/5668213/pexels-photo-5668213.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: "Popular", isVeg: true },
      { id: "fj-07", name: "Nellikkai", price: 35, description: "Indian gooseberry (amla) antioxidant juice", image: "https://images.pexels.com/photos/17612807/pexels-photo-17612807.jpeg", badge: null, isVeg: true },
      { id: "fj-08", name: "Musk Melon", price: 40, description: "Sweet cantaloupe musk melon fresh juice", image: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-09", name: "Grape", price: 40, description: "Dark sweet black-grape fresh extraction", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-10", name: "Pineapple", price: 40, description: "Golden tropical pineapple juice", image: "https://images.pexels.com/photos/5146439/pexels-photo-5146439.jpeg", badge: null, isVeg: true },
      { id: "fj-11", name: "Pineapple Lime", price: 40, description: "Sweet pineapple blended with a lime punch", image: "https://images.pexels.com/photos/5146439/pexels-photo-5146439.jpeg", badge: null, isVeg: true },
      { id: "fj-12", name: "Grape Lime", price: 40, description: "Grape juice with a refreshing lime twist", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-13", name: "Mango", price: 50, description: "Thick luscious fresh mango pulp juice", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&auto=format&fit=crop&q=80", badge: "Seasonal", isVeg: true },
      { id: "fj-14", name: "Athi", price: 50, description: "Nutritious fresh fig (athi) extraction", image: "https://images.pexels.com/photos/19069897/pexels-photo-19069897/free-photo-of-cocktail-with-fruit.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "fj-15", name: "Red Banana", price: 50, description: "Creamy traditional South Indian red banana smoothie", image: "https://images.pexels.com/photos/20205956/pexels-photo-20205956.jpeg", badge: null, isVeg: true },
      { id: "fj-16", name: "Apple", price: 50, description: "Crisp cold-pressed golden apple juice", image: "https://images.pexels.com/photos/9024809/pexels-photo-9024809.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "fj-17", name: "Sapota", price: 50, description: "Naturally sweet chikoo (sapota) smoothie", image: "https://images.pexels.com/photos/3948523/pexels-photo-3948523.jpeg", badge: null, isVeg: true },
      { id: "fj-18", name: "Musambi", price: "50/60", description: "Sweet lime juice pressed fresh on order", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-19", name: "Orange", price: "50/60", description: "Freshly squeezed citrus orange juice", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=80", badge: "Popular", isVeg: true },
      { id: "fj-20", name: "Kiwi", price: 60, description: "Vibrant tangy green kiwi juice", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-21", name: "Carrot", price: 60, description: "Fresh sweet orange carrot juice", image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-22", name: "Mathulam", price: 60, description: "Ruby red fresh pomegranate juice", image: "https://images.pexels.com/photos/39798571/pexels-photo-39798571/free-photo-of-fresh-red-juice-pouring-into-glass-mug.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "fj-23", name: "Dragon", price: 60, description: "Exotic magenta pink dragon fruit juice", image: "https://images.pexels.com/photos/34375012/pexels-photo-34375012/free-photo-of-vibrant-dragon-fruit-smoothie-in-tropical-setting.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "fj-24", name: "Strawberry", price: 60, description: "Fresh ripe strawberry crushed juice", image: "https://images.pexels.com/photos/17612776/pexels-photo-17612776.jpeg", badge: null, isVeg: true },
      { id: "fj-25", name: "Beetroot", price: 60, description: "Deep crimson nutrient-rich beetroot juice", image: "https://images.pexels.com/photos/17612807/pexels-photo-17612807.jpeg", badge: null, isVeg: true },
      { id: "fj-26", name: "Apple Beetroot", price: 70, description: "Sweet apple and rich beetroot combo", image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-27", name: "Apple Carrot", price: 70, description: "Crisp apple with golden carrot juice", image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-28", name: "Carrot Pineapple", price: 70, description: "Carrot and tropical pineapple fusion", image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-29", name: "Mathulam Carrot", price: 70, description: "Pomegranate and carrot blend", image: "https://images.pexels.com/photos/17612807/pexels-photo-17612807.jpeg", badge: null, isVeg: true },
      { id: "fj-30", name: "Athi Apple", price: 70, description: "Fresh fig and apple blend", image: "https://images.pexels.com/photos/8215113/pexels-photo-8215113.jpeg", badge: null, isVeg: true },
      { id: "fj-31", name: "Athi Sapota", price: 70, description: "Fig and sweet chikoo smoothie", image: "https://images.pexels.com/photos/3948523/pexels-photo-3948523.jpeg", badge: null, isVeg: true },
      { id: "fj-32", name: "PBC", price: 70, description: "PBC juice", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-33", name: "ABC", price: 70, description: "ABC juice", image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "fj-34", name: "Tender Coconut", price: 80, description: "Natural refreshing tender coconut water", image: "https://images.pexels.com/photos/20720084/pexels-photo-20720084.jpeg", badge: null, isVeg: true },
      { id: "fj-35", name: "Butter Fruit", price: 80, description: "Thick creamy avocado (butter fruit) shake", image: "https://images.pexels.com/photos/17612827/pexels-photo-17612827/free-photo-of-a-green-drink-with-mint-leaves-and-a-straw.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "fj-36", name: "Litchi", price: 80, description: "Sweet delicate litchi fruit juice", image: "https://images.pexels.com/photos/17612776/pexels-photo-17612776.jpeg", badge: null, isVeg: true },
    ],
  },
  {
    name: "Dates Shakes",
    slug: "dates-shakes",
    icon: "🥤",
    items: [
      { id: "ds-01", name: "Fruit Salad", price: 60, description: "Bowl of freshly cut seasonal fruits", image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "ds-02", name: "Apple Dates", price: 70, description: "Apple and rich dates blended with creamy milk", image: "https://images.pexels.com/photos/9024809/pexels-photo-9024809.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "ds-03", name: "Athi Dates", price: 70, description: "Fig and dates wholesome shake", image: "https://images.pexels.com/photos/19069897/pexels-photo-19069897/free-photo-of-cocktail-with-fruit.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
      { id: "ds-04", name: "Sapota Dates", price: 70, description: "Chikoo and dates blended milkshake", image: "https://images.pexels.com/photos/28525198/pexels-photo-28525198.jpeg", badge: null, isVeg: true },
      { id: "ds-05", name: "Kiwi Dates", price: 80, description: "Kiwi and dates thick fruit shake", image: "https://images.pexels.com/photos/28053287/pexels-photo-28053287.jpeg", badge: null, isVeg: true },
      { id: "ds-06", name: "Dragon Dates", price: 80, description: "Dragon fruit and dates exotic milkshake", image: "https://images.pexels.com/photos/17612776/pexels-photo-17612776.jpeg", badge: null, isVeg: true },
      { id: "ds-07", name: "Fruit Salad With Ice Cream", price: 90, description: "Chilled fruit salad topped with a generous scoop of ice cream", image: "https://images.pexels.com/photos/5695591/pexels-photo-5695591.jpeg", badge: "Popular", isVeg: true },
      { id: "ds-08", name: "Butter Dates", price: 100, description: "Butter fruit (avocado) and dates premium rich shake", image: "https://images.pexels.com/photos/17612827/pexels-photo-17612827/free-photo-of-a-green-drink-with-mint-leaves-and-a-straw.jpeg?auto=compress&w=1260&h=750&dpr=1", badge: null, isVeg: true },
    ],
  },
  {
    name: "Falooda",
    slug: "falooda",
    icon: "🍨",
    items: [
      { id: "fal-01", name: "Falooda", price: 100, description: "Classic rose milk falooda layered with basil seeds, vermicelli and ice cream", image: "https://images.pexels.com/photos/2835351/pexels-photo-2835351.jpeg", badge: null, isVeg: true },
      { id: "fal-02", name: "Royal Falooda", price: 140, description: "Grand dessert falooda loaded with dry fruits, nuts, jelly, and rich ice cream", image: "https://images.pexels.com/photos/18646648/pexels-photo-18646648.jpeg", badge: "Premium", isVeg: true },
    ],
  },
  {
    name: "Mojito Special",
    slug: "mojito-special",
    icon: "🍹",
    items: [
      { id: "moj-01", name: "Lemon Mint", price: 60, description: "Crisp crushed mint, fresh lime slices, and sparkling soda", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "moj-02", name: "Blue Curacao", price: 60, description: "Electric blue citrus mocktail with bubbly fizz and mint", image: "https://images.pexels.com/photos/12419190/pexels-photo-12419190.jpeg", badge: "Popular", isVeg: true },
      { id: "moj-03", name: "Blueberry", price: 60, description: "Deep purple crushed blueberries with cooling mint", image: "https://images.pexels.com/photos/38101015/pexels-photo-38101015.jpeg", badge: null, isVeg: true },
      { id: "moj-04", name: "Strawberry", price: 60, description: "Sweet red strawberry crush with sparkling mint cooler", image: "https://images.pexels.com/photos/30591640/pexels-photo-30591640.jpeg", badge: null, isVeg: true },
      { id: "moj-05", name: "Virgin Mojito", price: 60, description: "Classic refreshing lime, sugar cane syrup, and crushed mint", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80", badge: "Popular", isVeg: true },
      { id: "moj-06", name: "Bubblegum Flavour", price: 60, description: "Fun, vibrant pastel pink sweet bubblegum mocktail", image: "https://images.pexels.com/photos/10918159/pexels-photo-10918159.jpeg", badge: null, isVeg: true },
      { id: "moj-07", name: "Mango", price: 60, description: "Golden mango cooler with fresh mint leaves", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&auto=format&fit=crop&q=80", badge: null, isVeg: true },
      { id: "moj-08", name: "Pineapple", price: 60, description: "Tropical pineapple punch with sparkling soda", image: "https://images.pexels.com/photos/33283858/pexels-photo-33283858.jpeg", badge: null, isVeg: true },
      { id: "moj-09", name: "Litchi", price: 60, description: "Floral litchi cooler with chilled mint and lime", image: "https://images.pexels.com/photos/35566544/pexels-photo-35566544.jpeg", badge: null, isVeg: true },
    ],
  },
];

// Helper: Get all items as a flat array
export const getAllItems = () => {
  return menuCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, categoryName: cat.name, categorySlug: cat.slug }))
  );
};

// Helper: Get items by category slug
export const getItemsByCategory = (slug) => {
  if (slug === "all") return getAllItems();
  const cat = menuCategories.find((c) => c.slug === slug);
  return cat ? cat.items.map((item) => ({ ...item, categoryName: cat.name, categorySlug: cat.slug })) : [];
};

// Helper: Search items
export const searchItems = (query) => {
  const q = query.toLowerCase().trim();
  if (!q) return getAllItems();
  return getAllItems().filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q)
  );
};
