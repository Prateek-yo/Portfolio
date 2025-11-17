export const cafes = [
  {
    id: 1,
    name: "Café Coffee Day - Brigade Road",
    location: "Brigade Road, Bangalore",
    rating: 4.2,
    phone: "+91 80-4567-8901",
    hours: "8:00 AM - 11:00 PM",
    description: "Popular chain café known for its variety of coffee blends and casual atmosphere.",
    image: "https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialties: ["Cappuccino", "Cold Coffee", "Sandwiches"],
    mood: ["study", "friends"],
    price: "₹150-300"
  },
  {
    id: 2,
    name: "Blue Tokai Coffee Roasters",
    location: "Koramangala, Bangalore",
    rating: 4.6,
    phone: "+91 80-2345-6789",
    hours: "9:00 AM - 10:00 PM",
    description: "Specialty coffee roasters offering freshly roasted beans and artisanal coffee preparations.",
    image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialties: ["Pour Over", "Espresso", "Single Origin"],
    mood: ["study", "chill"],
    price: "₹200-500"
  },
  {
    id: 3,
    name: "Starbucks - Phoenix MarketCity",
    location: "Whitefield, Bangalore",
    rating: 4.4,
    phone: "+91 80-8765-4321",
    hours: "7:30 AM - 11:30 PM",
    description: "International coffee chain with comfortable seating and consistent quality drinks.",
    image: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialties: ["Frappuccino", "Americano", "Pastries"],
    mood: ["study", "friends", "romantic"],
    price: "₹250-600"
  },
  {
    id: 4,
    name: "The Coffee Bean & Tea Leaf",
    location: "UB City Mall, Bangalore",
    rating: 4.3,
    phone: "+91 80-9876-5432",
    hours: "8:00 AM - 10:30 PM",
    description: "Premium coffee and tea chain with a cozy ambiance and quality beverages.",
    image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialties: ["Ice Blended", "Tea", "Light Meals"],
    mood: ["romantic", "chill"],
    price: "₹200-450"
  },
  {
    id: 5,
    name: "Third Wave Coffee",
    location: "Indiranagar, Bangalore",
    rating: 4.5,
    phone: "+91 80-1234-5678",
    hours: "8:30 AM - 11:00 PM",
    description: "Modern coffee house focusing on specialty coffee and contemporary design.",
    image: "https://images.pexels.com/photos/1797103/pexels-photo-1797103.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialties: ["Flat White", "Cold Brew", "Artisan Coffee"],
    mood: ["study", "chill"],
    price: "₹180-400"
  },
  {
    id: 6,
    name: "Café Noir",
    location: "Commercial Street, Bangalore",
    rating: 4.1,
    phone: "+91 80-5432-1098",
    hours: "9:00 AM - 10:00 PM",
    description: "Intimate café with French-inspired décor and excellent coffee selections.",
    image: "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialties: ["French Press", "Croissants", "Quiche"],
    mood: ["romantic", "chill"],
    price: "₹220-500"
  },
  {
    id: 7,
    name: "Toit Brewpub & Café",
    location: "Indiranagar, Bangalore",
    rating: 4.7,
    phone: "+91 80-6789-0123",
    hours: "11:30 AM - 1:00 AM",
    description: "Popular brewpub with craft beer and excellent coffee, perfect for hanging out with friends.",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialties: ["Craft Beer", "Coffee", "Continental Food"],
    mood: ["friends"],
    price: "₹300-800"
  },
  {
    id: 8,
    name: "Matteo Coffea",
    location: "Lavelle Road, Bangalore",
    rating: 4.4,
    phone: "+91 80-3456-7890",
    hours: "8:00 AM - 11:00 PM",
    description: "Cozy coffee spot with a warm atmosphere, perfect for conversations and relaxation.",
    image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialties: ["Latte Art", "Desserts", "Light Snacks"],
    mood: ["romantic", "chill", "study"],
    price: "₹160-350"
  },
  {
    id: 9,
    name: "Filter Coffee",
    location: "Malleswaram, Bangalore",
    rating: 4.0,
    phone: "+91 80-7890-1234",
    hours: "7:00 AM - 9:00 PM",
    description: "Traditional South Indian filter coffee house with authentic taste and local charm.",
    image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialties: ["Filter Coffee", "South Indian Snacks", "Masala Tea"],
    mood: ["chill", "study"],
    price: "₹50-150"
  },
  {
    id: 10,
    name: "Barista Coffee Company",
    location: "Forum Mall, Bangalore",
    rating: 4.2,
    phone: "+91 80-4321-0987",
    hours: "8:00 AM - 10:30 PM",
    description: "Popular coffee chain with a variety of beverages and comfortable seating arrangements.",
    image: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialties: ["Macchiato", "Smoothies", "Wraps"],
    mood: ["study", "friends"],
    price: "₹140-320"
  }
];

export const moodCategories = [
  {
    id: 'study',
    name: 'Study',
    icon: '📚',
    description: 'Quiet places perfect for studying and working'
  },
  {
    id: 'chill',
    name: 'Chill',
    icon: '😌',
    description: 'Relaxed atmosphere for unwinding'
  },
  {
    id: 'romantic',
    name: 'Romantic',
    icon: '💕',
    description: 'Intimate settings for dates and romantic moments'
  },
  {
    id: 'friends',
    name: 'Friends Hangout',
    icon: '👥',
    description: 'Lively places great for hanging out with friends'
  }
];