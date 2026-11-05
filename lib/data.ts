export const destinations = [
  {
    id: "serengeti",
    title: "Serengeti National Park",
    image: "/jorge-tung-1pZJqQlgpsY-unsplash.jpg",
    distance: "~8 hrs from Arusha",
    area: "14,750 km²",
    tags: ["Game Drives", "Great Migration", "Hot Air Balloon", "Bird Watching"],
    description:
      "Witness the Great Migration and explore vast plains teeming with wildlife, including the Big Five. Ideal for multi-day safaris and photographic expeditions.",
  },
  {
    id: "ngorongoro",
    title: "Ngorongoro Crater",
    image: "/Images/ana-singh-1vOBJZ6228U-unsplash.jpg",
    distance: "~4 hrs from Arusha",
    area: "8,292 km²",
    tags: ["Crater Safari", "Cultural Visits", "Walking Safaris", "Photography"],
    description:
      "Explore the world's largest intact volcanic caldera. Shorter transfers and excellent wildlife concentrations make this a popular day-trip or overnight destination.",
  },
  {
    id: "lake-natron",
    title: "Lake Natron",
    image: "/pexels-balazsimon-15994102.jpg",
    distance: "~6 hrs from Arusha",
    area: "1,040 km²",
    tags: ["Flamingo Watching", "Hiking", "Waterfall Visits", "Maasai Culture"],
    description:
      "Discover surreal landscapes, flamingo colonies and cultural experiences. A great choice for adventurous travellers seeking off-the-beaten-path scenery.",
  },
  {
    id: "lake-manyara",
    title: "Lake Manyara National Park",
    image: "/jorge-tung--5Betfvtgso-unsplash.jpg",
    distance: "~2 hrs from Arusha",
    area: "325 km²",
    tags: ["Tree-Climbing Lions", "Bird Watching", "Forest Walks", "Lake Views"],
    description:
      "Famous for its tree-climbing lions, vast flocks of flamingos, and diverse ecosystems from groundwater forest to acacia woodland.",
  },
  {
    id: "tarangire",
    title: "Tarangire National Park",
    image: "/Images/ahmed-galal-VQqMACyNfwA-unsplash.jpg",
    distance: "~3.5 hrs from Arusha",
    area: "2,850 km²",
    tags: ["Elephant Herds", "Baobab Trees", "Game Drives", "River Valley"],
    description:
      "Home to one of the largest elephant populations in Tanzania, set among iconic ancient baobab trees and winding river valleys.",
  },
];

export const packages = [
  {
    id: "serengeti-adventure",
    title: "Serengeti Adventure",
    duration: "5 Days",
    location: "Serengeti",
    images: [
      "/omer-salom-gi6T2ktnpnE-unsplash.jpg",
      "/jorge-tung-1pZJqQlgpsY-unsplash.jpg",
    ],
    tags: ["Game Drives", "Great Migration", "Photography", "Camping"],
    wildlife: ["Lions", "Elephants", "Wildebeest", "Zebras", "Leopards"],
    description:
      "Experience the endless plains and witness the spectacular Great Migration through the Serengeti ecosystem.",
    itineraryLink: "/Itineraries/serengeti.html",
  },
  {
    id: "ngorongoro-experience",
    title: "Ngorongoro Experience",
    duration: "3 Days",
    location: "Ngorongoro Crater",
    images: [
      "/Images/pexels-dirk-pothen-2149332904-31207738.jpg",
      "/Images/AdobeStock_1053081199_Preview.jpeg",
    ],
    tags: ["Crater Safari", "Cultural Tours", "Walking Safari", "Photography"],
    wildlife: ["Black Rhino", "Lions", "Flamingos", "Hippos"],
    description:
      "Explore the world's largest intact volcanic caldera and its diverse wildlife.",
    itineraryLink: "/Itineraries/ngorongoro.html",
  },
  {
    id: "lake-manyara-escape",
    title: "Lake Manyara Escape",
    duration: "2 Days",
    location: "Lake Manyara",
    images: [
      "/jorge-tung--5Betfvtgso-unsplash.jpg",
      "/Images/AdobeStock_71303000_Preview.jpeg",
    ],
    tags: ["Wildlife Safari", "Bird Watching", "Nature Walks"],
    wildlife: ["Tree-Climbing Lions", "Flamingos", "Elephants", "Giraffes"],
    description:
      "Experience the unique ecosystem of Lake Manyara, famous for its tree-climbing lions and diverse bird species.",
    itineraryLink: "/Itineraries/Manyara.html",
  },
  {
    id: "tarangire-expedition",
    title: "Tarangire Expedition",
    duration: "3 Days",
    location: "Tarangire National Park",
    images: [
      "/Images/ahmed-galal-VQqMACyNfwA-unsplash.jpg",
      "/Images/tanzania-wild-sky-NHQOJBbJgdk-unsplash.jpg",
    ],
    tags: ["Wildlife Safari", "Baobab Trees", "Photography"],
    wildlife: ["Elephants", "Giraffes", "Buffalos", "Ostriches"],
    description:
      "Discover the diverse landscapes of Tarangire, known for its large elephant herds and iconic baobab trees.",
    itineraryLink: "/Itineraries/Tarangire.html",
  },
  {
    id: "natron-adventure",
    title: "Natron Adventure",
    duration: "4 Days",
    location: "Lake Natron",
    images: [
      "/pexels-balazsimon-15994102.jpg",
      "/Images/ahmed-galal-VQqMACyNfwA-unsplash.jpg",
    ],
    tags: ["Flamingo Watching", "Hiking", "Waterfall Visits", "Maasai Culture"],
    wildlife: ["Flamingos", "Pelicans", "Maasai Giraffes", "Grant's Gazelles"],
    description:
      "Explore the stunning landscapes of Lake Natron, a haven for birdwatchers and nature enthusiasts.",
    itineraryLink: "/Itineraries/lake-natron.html",
  },
  {
    id: "northern-circuit",
    title: "Northern Circuit Package",
    duration: "7 Days",
    location: "Northern Tanzania",
    images: [
      "/Images/jorge-tung--5Betfvtgso-unsplash.jpg",
      "/Images/uzuri-safaris-tanzania-dpoOaYVzMuI-unsplash.jpg",
    ],
    tags: ["Comprehensive Safari", "All-Inclusive", "Luxury Lodging"],
    wildlife: ["Big Five", "Flamingos", "Various Antelope Species"],
    description:
      "The ultimate Tanzanian safari experience, covering all major parks and attractions in the north.",
    itineraryLink: "/Itineraries/northern-circuit.html",
  },
  {
    id: "trekking",
    title: "Trekking and Adventure",
    duration: "Varies",
    location: "Mt. Kilimanjaro & More",
    images: [
      "/pexels-2150381842-31182909.jpg",
      "/Images/pexels-kilinge-adventures-1983321-12573131.jpg",
    ],
    tags: ["Mountain Climbing", "Hiking", "Adventure"],
    wildlife: [],
    description:
      "For nature lovers and mountain climbers seeking the ultimate adventure in Tanzania.",
    itineraryLink: "/Itineraries/trekking.html",
  },
];

export const testimonials = [
  {
    quote: "Mwala Tours made our safari unforgettable! The attention to detail and personalized service exceeded all expectations.",
    author: "Sarah J.",
    location: "United Kingdom",
  },
  {
    quote: "An amazing experience from start to finish. Our guide was incredibly knowledgeable and passionate about wildlife.",
    author: "Mark T.",
    location: "United States",
  },
  {
    quote: "Highly recommend Mwala Tours. They created the perfect itinerary for our honeymoon safari adventure.",
    author: "Emily R.",
    location: "Australia",
  },
];

export const features = [
  {
    icon: "binoculars",
    title: "Expert Guides",
    description:
      "Our experienced guides are passionate about sharing their knowledge and ensuring unforgettable safari moments.",
  },
  {
    icon: "map",
    title: "Tailored Experiences",
    description:
      "Customizable itineraries designed specifically for your preferences and travel style.",
  },
  {
    icon: "bed",
    title: "Luxury Accommodations",
    description:
      "Handpicked lodges and boutique camps offering comfort and authentic African experiences.",
  },
  {
    icon: "leaf",
    title: "Sustainable Tourism",
    description:
      "Eco-friendly practices and direct support to local communities and conservation efforts.",
  },
];
