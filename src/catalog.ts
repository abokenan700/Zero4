export type Category = {
  id: string;
  label: string;
  tint: string;
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  quantity: string;
  price: string;
  mrp?: string;
  tag?: string;
  badge?: string;
  emoji: string;
  color: string;
};

export const quickActions: Category[] = [
  { id: 'all', label: 'All', tint: '#ffe895', icon: '🛒' },
  { id: 'cafe', label: 'Cafe', tint: '#f5e4c8', icon: '☕' },
  { id: 'print', label: 'Printout', tint: '#e5ecff', icon: '🖨️' },
  { id: 'fresh', label: 'Fresh', tint: '#dff4de', icon: '🥬' },
];

export const categories: Category[] = [
  { id: 'vegetables', label: 'Vegetables & Fruits', tint: '#e7f7d9', icon: '🥦' },
  { id: 'dairy', label: 'Dairy, Bread & Eggs', tint: '#fff0c8', icon: '🥛' },
  { id: 'munchies', label: 'Munchies', tint: '#fde0ce', icon: '🍿' },
  { id: 'cold', label: 'Cold Drinks & Juices', tint: '#dff4ff', icon: '🥤' },
  { id: 'breakfast', label: 'Breakfast & Sauces', tint: '#f9e4ff', icon: '🥣' },
  { id: 'tea', label: 'Tea, Coffee & Health Drink', tint: '#efe0ce', icon: '☕' },
  { id: 'bakery', label: 'Bakery & Biscuits', tint: '#fff1d8', icon: '🍪' },
  { id: 'sweet', label: 'Sweet Tooth', tint: '#ffe0ea', icon: '🍫' },
];

export const heroTiles = [
  { id: 'pharmacy', title: 'Pharmacy', subtitle: 'Up to 25% OFF', emoji: '💊', bg: '#f0fbff' },
  { id: 'pet', title: 'Pet Care', subtitle: 'Food & toys', emoji: '🐾', bg: '#fff4df' },
  { id: 'beauty', title: 'Beauty', subtitle: 'New launches', emoji: '💄', bg: '#ffeef5' },
];

export const products: Product[] = [
  {
    id: 'banana',
    name: 'Robusta Banana',
    quantity: '4 pieces',
    price: '₹37',
    mrp: '₹48',
    tag: '10 MINS',
    badge: 'BESTSELLER',
    emoji: '🍌',
    color: '#fff4b8',
  },
  {
    id: 'milk',
    name: 'Amul Taaza Toned Milk',
    quantity: '500 ml',
    price: '₹28',
    tag: '10 MINS',
    emoji: '🥛',
    color: '#eef6ff',
  },
  {
    id: 'chips',
    name: 'Lay\'s Classic Salted Chips',
    quantity: '52 g',
    price: '₹20',
    mrp: '₹25',
    tag: '10 MINS',
    emoji: '🥔',
    color: '#ffe5cc',
  },
  {
    id: 'cola',
    name: 'Coca-Cola Soft Drink',
    quantity: '750 ml',
    price: '₹40',
    tag: '10 MINS',
    emoji: '🥤',
    color: '#f4f4f4',
  },
];
