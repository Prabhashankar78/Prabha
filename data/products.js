export const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 159900,
    originalPrice: 179900,
    discount: 11,
    rating: 4.8,
    reviews: 1243,
    img: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg',
    category: 'Flagship',
    inStock: true,
    features: ['A17 Pro Chip', '48MP Camera', '6.7" Display', '5G'],
    specs: {
      ram: '8GB',
      storage: '256GB',
      battery: '4422mAh',
      camera: '48MP+12MP+12MP'
    }
  },
  {
    id: 2,
    name: 'Samsung Galaxy S25 Ultra',
    brand: 'Samsung',
    price: 124999,
    originalPrice: 139999,
    discount: 11,
    rating: 4.7,
    reviews: 987,
    img: 'https://m.media-amazon.com/images/I/71P85R392uL._SX679_.jpg',
    category: 'Flagship',
    inStock: true,
    features: ['Snapdragon 8 Gen 3', '200MP Camera', 'S Pen', '5G'],
    specs: {
      ram: '12GB',
      storage: '256GB',
      battery: '5000mAh',
      camera: '200MP+50MP+12MP'
    }
  },
  {
    id: 3,
    name: 'OnePlus 13',
    brand: 'OnePlus',
    price: 64999,
    originalPrice: 74999,
    discount: 13,
    rating: 4.5,
    reviews: 756,
    img: 'https://m.media-amazon.com/images/I/61amb0CfMGL._SX679_.jpg',
    category: 'Mid-Range',
    inStock: true,
    features: ['Snapdragon 8 Gen 2', '50MP Camera', '120Hz Display', '5G'],
    specs: {
      ram: '12GB',
      storage: '256GB',
      battery: '5400mAh',
      camera: '50MP+48MP+32MP'
    }
  },
  {
    id: 4,
    name: 'Google Pixel 10 Pro',
    brand: 'Google',
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    rating: 4.6,
    reviews: 632,
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    category: 'Flagship',
    inStock: true,
    features: ['Google Tensor G4', 'AI Camera', 'Pure Android', '5G'],
    specs: {
      ram: '12GB',
      storage: '256GB',
      battery: '5050mAh',
      camera: '50MP+48MP+48MP'
    }
  },
  {
    id: 5,
    name: 'Xiaomi 16 Ultra',
    brand: 'Xiaomi',
    price: 79999,
    originalPrice: 89999,
    discount: 11,
    rating: 4.4,
    reviews: 543,
    img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97',
    category: 'Mid-Range',
    inStock: true,
    features: ['Snapdragon 8 Gen 2', 'Leica Camera', '120W Charging', '5G'],
    specs: {
      ram: '12GB',
      storage: '256GB',
      battery: '5000mAh',
      camera: '50MP+50MP+50MP'
    }
  },
  {
    id: 6,
    name: 'Vivo X300 Pro',
    brand: 'Vivo',
    price: 84999,
    originalPrice: 94999,
    discount: 11,
    rating: 4.5,
    reviews: 421,
    img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505',
    category: 'Mid-Range',
    inStock: true,
    features: ['Dimensity 9300', 'Zeiss Optics', 'AMOLED Display', '5G'],
    specs: {
      ram: '12GB',
      storage: '256GB',
      battery: '5400mAh',
      camera: '50MP+50MP+64MP'
    }
  },
  {
    id: 7,
    name: 'Oppo Find X9 Pro',
    brand: 'Oppo',
    price: 82999,
    originalPrice: 92999,
    discount: 11,
    rating: 4.4,
    reviews: 389,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca',
    category: 'Mid-Range',
    inStock: false,
    features: ['Snapdragon 8 Gen 2', 'Hasselblad Camera', '100W Charging', '5G'],
    specs: {
      ram: '12GB',
      storage: '256GB',
      battery: '5000mAh',
      camera: '50MP+50MP+13MP'
    }
  },
  {
    id: 8,
    name: 'Realme GT 8 Pro',
    brand: 'Realme',
    price: 54999,
    originalPrice: 64999,
    discount: 15,
    rating: 4.3,
    reviews: 612,
    img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7',
    category: 'Budget',
    inStock: true,
    features: ['Snapdragon 8 Gen 1', '50MP Camera', '120Hz Display', '5G'],
    specs: {
      ram: '8GB',
      storage: '128GB',
      battery: '5000mAh',
      camera: '50MP+8MP+2MP'
    }
  },
  {
    id: 9,
    name: 'Asus ROG Phone 10',
    brand: 'Asus',
    price: 94999,
    originalPrice: 109999,
    discount: 14,
    rating: 4.7,
    reviews: 534,
    img: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48',
    category: 'Gaming',
    inStock: true,
    features: ['Snapdragon 8 Gen 3', 'Gaming Triggers', '165Hz Display', '5G'],
    specs: {
      ram: '16GB',
      storage: '512GB',
      battery: '6000mAh',
      camera: '50MP+13MP+5MP'
    }
  }
];

export const categories = ['All', 'Flagship', 'Mid-Range', 'Budget', 'Gaming'];
export const brands = ['All', 'Apple', 'Samsung', 'OnePlus', 'Google', 'Xiaomi', 'Vivo', 'Oppo', 'Realme', 'Asus'];
export const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under ₹60,000', min: 0, max: 60000 },
  { label: '₹60,000 - ₹90,000', min: 60000, max: 90000 },
  { label: 'Above ₹90,000', min: 90000, max: Infinity }
];
