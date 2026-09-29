// ============================================================
// CHENNAI FRUIT PUNCH — SITE CONFIGURATION
// ============================================================
// Easily update business details, opening hours, and phone number here.
// ============================================================

export const siteConfig = {
  name: "Fruit Punch",
  tagline: "Fresh Juice • Falooda • Milkshake • Ice Cream • Snacks",
  heroSubtitle: "Good Food. Fresh Fruits. Great Vibes.",
  heroDescription: "Fresh juices, refreshing drinks, creamy desserts and delicious snacks — all served with flavour and freshness.",
  
  // Takeaway & Orders Phone Number
  phone: "+919791088444",
  phoneDisplay: "+91 97910 88444",
  
  address: {
    line1: "62/48, Nelson Manickam Road",
    line2: "Collectorate Colony, Aminjikarai",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600029",
    landmark: "Opp. to Skywalk area / Nelson Manickam Rd junction"
  },
  
  // Google Maps directions & search URLs
  // Explicitly targets the business name "Chennai Fruit Punch" at the exact Nelson Manickam Road address
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Chennai+Fruit+Punch,+62%2F48,+Nelson+Manickam+Road,+Collectorate+Colony,+Aminjikarai,+Chennai,+Tamil+Nadu+600029",
  googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Chennai+Fruit+Punch,+62%2F48,+Nelson+Manickam+Road,+Aminjikarai,+Chennai,+Tamil+Nadu+600029",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Chennai%20Fruit%20Punch,%2062%2F48,%20Nelson%20Manickam%20Road,%20Aminjikarai,%20Chennai%20600029&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // Opening Hours (24hr format start/end for automatic live status calculation)
  // Format: [startHour, startMinute, endHour, endMinute]
  // Display text can be edited per day
  openingHours: {
    days: [
      { day: "Monday", text: "9:00 AM – 11:00 PM", openHour: 9, openMin: 0, closeHour: 23, closeMin: 0 },
      { day: "Tuesday", text: "9:00 AM – 11:00 PM", openHour: 9, openMin: 0, closeHour: 23, closeMin: 0 },
      { day: "Wednesday", text: "9:00 AM – 11:00 PM", openHour: 9, openMin: 0, closeHour: 23, closeMin: 0 },
      { day: "Thursday", text: "9:00 AM – 11:00 PM", openHour: 9, openMin: 0, closeHour: 23, closeMin: 0 },
      { day: "Friday", text: "9:00 AM – 11:00 PM", openHour: 9, openMin: 0, closeHour: 23, closeMin: 0 },
      { day: "Saturday", text: "9:00 AM – 11:00 PM", openHour: 9, openMin: 0, closeHour: 23, closeMin: 0 },
      { day: "Sunday", text: "9:00 AM – 11:00 PM", openHour: 9, openMin: 0, closeHour: 23, closeMin: 0 },
    ]
  },

  // Helper function to check if the store is currently open
  isCurrentlyOpen: () => {
    const now = new Date();
    // Use local time in IST (UTC+5:30) or system time
    const dayOfWeek = (now.getDay() + 6) % 7; // Monday = 0, Sunday = 6
    const todayConfig = siteConfig.openingHours.days[dayOfWeek];
    if (!todayConfig) return false;

    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const openMinutes = todayConfig.openHour * 60 + todayConfig.openMin;
    const closeMinutes = todayConfig.closeHour * 60 + todayConfig.closeMin;

    return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
  }
};
