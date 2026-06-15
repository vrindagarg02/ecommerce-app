
  /*{
    id: 1,
    name: "Shoes",
    price: 999,
    description: "Sports Shoes",
  },
  {
    id: 2,
    name: "Watch",
    price: 1999,
    description: "Smart Watch",
  },
  {
    id: 3,
    name: "Bag",
    price: 799,
    description: "College Bag",
  },*/
  export const products = [
  { id: 1, name: "Men's Black T-Shirt", price: 499, category: "Men", description: "Premium cotton t-shirt",image: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwYmxhY2slMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D"},
  { id: 2, name: "Men's White T-Shirt", price: 549, category: "Men", description: "Slim fit casual t-shirt",image: "https://plus.unsplash.com/premium_photo-1727942419701-0428352a21e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbiUyMHdoaXRlJTIwdHNoaXJ0fGVufDB8fDB8fHww" },
  { id: 3, name: "Men's Polo T-Shirt", price: 799, category: "Men", description: "Classic polo style",image: "https://images.unsplash.com/photo-1720514496505-d6756368b0b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwcG9sbyUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 4, name: "Men's Denim Jeans", price: 1499, category: "Men", description: "Regular fit blue jeans",image: "https://images.unsplash.com/photo-1714143136367-7bb68f3f0669?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwYmx1ZSUyMGplYW5zfGVufDB8fDB8fHww" },
  { id: 5, name: "Men's Cargo Pants", price: 1299, category: "Men", description: "Comfortable cargo pants",image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

  { id: 6, name: "Men's Hoodie", price: 1799, category: "Men", description: "Warm fleece hoodie",image: "https://media.istockphoto.com/id/879609000/photo/young-bearded-handsome-indian-man-wearing-brown-fur-jacket-ready-for-cold-weather-against-gray.webp?a=1&b=1&s=612x612&w=0&k=20&c=g89fhFqP1IhcX0M6kY98jM009ECTGHHqfwtkQqbB_V4=" },
  { id: 7, name: "Men's Sweatshirt", price: 1399, category: "Men", description: "Winter sweatshirt" ,image: "https://media.istockphoto.com/id/2281230413/photo/blank-deep-teal-unisex-sweatshirt-mockup-folded-crewneck-flat-lay-with-denim-and-mens.webp?a=1&b=1&s=612x612&w=0&k=20&c=wIfPIFwoqxjP0RM-Qh9rh3BuC-JZQfM6iW6xDaaEK44="},
  { id: 8, name: "Men's Formal Shirt", price: 999, category: "Men", description: "Office wear shirt",image: "https://plus.unsplash.com/premium_photo-1661692180747-daaeaec5d5d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" },
  { id: 9, name: "Men's Casual Shirt", price: 899, category: "Men", description: "Checked casual shirt",image: "https://plus.unsplash.com/premium_photo-1770559219712-62e72f1ea88d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hlY2tlZCUyMGNhc3VhbCUyMHNoaXJ0fGVufDB8fDB8fHww" },
  { id: 10, name: "Men's Blazer", price: 3499, category: "Men", description: "Formal party blazer",image : "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9ybWFsJTIwcGFydHklMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D" },

  { id: 11, name: "Women's Black Top", price: 699, category: "Women", description: "Stylish casual top",image : "https://images.unsplash.com/photo-1759873911312-327421feccaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVuJTIwU3R5bGlzaCUyMGNhc3VhbCUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 12, name: "Women's White Top", price: 749, category: "Women", description: "Elegant everyday wear",image : "https://plus.unsplash.com/premium_photo-1689575249648-140fa6a0aeee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 13, name: "Women's Kurti", price: 999, category: "Women", description: "Traditional printed kurti",image : "https://images.unsplash.com/photo-1763559019748-a68819927eda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwU3R5bGlzaCUyMGNhc3VhbCUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 14, name: "Women's Palazzo", price: 899, category: "Women", description: "Comfortable palazzo pants",image : "https://images.unsplash.com/photo-1669197789750-43f2bb81027b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBwbGF6byUyMHBhbnRzfGVufDB8fDB8fHww"},
  { id: 15, name: "Women's Jeans", price: 1499, category: "Women", description: "High-rise denim jeans" ,image : "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBqZW5hc3xlbnwwfHwwfHx8MA%3D%3D"},

  { id: 16, name: "Women's Hoodie", price: 1699, category: "Women", description: "Winter hoodie",image : "https://images.unsplash.com/photo-1663573688938-2b3e7ea2ab33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBob29kaWV8ZW58MHx8MHx8fDA%3D" },
  { id: 17, name: "Women's Sweatshirt", price: 1399, category: "Women", description: "Casual sweatshirt",image : "https://images.unsplash.com/photo-1618333845076-890b5baf8ffe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBob29kaWV8ZW58MHx8MHx8fDA%3D" },
  { id: 18, name: "Women's Jacket", price: 2499, category: "Women", description: "Stylish winter jacket" ,image : "https://plus.unsplash.com/premium_photo-1671003995817-8c539ccf3fae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjB3aW50ZXIlMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D"},
  { id: 19, name: "Women's Saree", price: 2999, category: "Women", description: "Festive wear saree",image : "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVzdGl2ZSUyMHdlYXIlMjBzYXJlZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 20, name: "Women's Dress", price: 1999, category: "Women", description: "Party wear dress",image : "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFydHklMjB3ZWFyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D" },

  { id: 21, name: "Running Shoes", price: 2499, category: "Footwear", description: "Lightweight running shoes" ,image : "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGlnaHR3ZWlnaHQlMjBydW5uaW5nJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"},
  { id: 22, name: "Sports Shoes", price: 2799, category: "Footwear", description: "Performance sports shoes",image : "https://images.unsplash.com/photo-1739138056250-8fe572213417?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fExpZ2h0d2VpZ2h0JTIwcnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww" },
  { id: 23, name: "Casual Sneakers", price: 2199, category: "Footwear", description: "Trendy everyday sneakers",image : "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D" },
  { id: 24, name: "Formal Shoes", price: 2999, category: "Footwear", description: "Office wear formal shoes" ,image : "https://images.unsplash.com/photo-1726133731483-d4b8bcabeb43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExpZ2h0d2VpZ2h0JTIwcnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww"},
  { id: 25, name: "Women's Heels", price: 1899, category: "Footwear", description: "Elegant high heels" ,image : "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVlbHN8ZW58MHx8MHx8fDA%3D"},

  { id: 26, name: "Leather Belt", price: 799, category: "Accessories", description: "Genuine leather belt",image : "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJlbHR8ZW58MHx8MHx8fDA%3D" },
  { id: 27, name: "Men's Wallet", price: 999, category: "Accessories", description: "Premium leather wallet",image : "https://images.unsplash.com/photo-1628483211662-9bcc692c46dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGl0ZW1zfGVufDB8fDB8fHww" },
  { id: 28, name: "Women's Handbag", price: 1899, category: "Accessories", description: "Fashion handbag" ,image : "https://images.unsplash.com/photo-1682031215004-161c99d5b225?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGluJTIwaGFuZGJiYWd8ZW58MHx8MHx8fDA%3D"},
  { id: 29, name: "Backpack", price: 1499, category: "Accessories", description: "Travel backpack",image : "https://plus.unsplash.com/premium_photo-1670985781682-bd4bae1ab2f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 30, name: "Sunglasses", price: 1199, category: "Accessories", description: "UV protected sunglasses",image : "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" },

  { id: 31, name: "Baseball Cap", price: 499, category: "Accessories", description: "Stylish cap" ,image : "https://images.unsplash.com/photo-1560774358-d727658f457c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FwfGVufDB8fDB8fHww"},
  { id: 32, name: "Wrist Watch", price: 2999, category: "Accessories", description: "Premium wrist watch",image : "https://images.unsplash.com/photo-1451477334999-a9321157a431?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2glMjBicmFjZWxldHN8ZW58MHx8MHx8fDA%3D" },
  { id: 33, name: "Smart Watch", price: 4999, category: "Accessories", description: "Fitness tracking watch" ,image : "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMHRyYWNraW5nJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D"},
  { id: 34, name: "Silver Bracelet", price: 899, category: "Accessories", description: "Fashion bracelet",image : "https://media.istockphoto.com/id/665687294/photo/chrome-handle-for-glass-door.webp?a=1&b=1&s=612x612&w=0&k=20&c=VcxjAD1ICleFLyoMrGjxh-Wv2-GJj6H4QmL6PPnZNec=" },
  { id: 35, name: "Neck Chain", price: 1199, category: "Accessories", description: "Stylish chain",image : "https://media.istockphoto.com/id/1490904759/photo/gold-necklace-on-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=E-q0Q3ZPEGaRR1WkhS8nntnq0CXyFkD-C8djJCT5IVE=" },

  { id: 36, name: "Men's Track Pants", price: 999, category: "Sportswear", description: "Comfort fit track pants" ,image : "https://images.unsplash.com/photo-1706177208693-2e3c68e5f0f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhY2slMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D"},
  { id: 37, name: "Women's Leggings", price: 799, category: "Sportswear", description: "Stretchable leggings",image : "https://plus.unsplash.com/premium_photo-1664886098836-769acda328b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhbnRzJTIwYW5kJTIwbGVnZ2luZ3N8ZW58MHx8MHx8fDA%3D" },
  { id: 38, name: "Gym T-Shirt", price: 699, category: "Sportswear", description: "Breathable gym wear",image : "https://plus.unsplash.com/premium_photo-1683147614938-d27250357e2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnJlYXRoYWJsZSUyMGd5bSUyMHdlYXJ8ZW58MHx8MHx8fDA%3D" },
  { id: 39, name: "Yoga Pants", price: 999, category: "Sportswear", description: "Flexible yoga pants" ,image : "https://images.unsplash.com/photo-1619795811439-30757d55ecd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhbnRzJTIwYW5kJTIwbGVnZ2luZ3N8ZW58MHx8MHx8fDA%3D"},
  { id: 40, name: "Sports Jacket", price: 1999, category: "Sportswear", description: "Athletic jacket" ,image : "https://images.unsplash.com/photo-1780336672840-8b168588d190?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXRobGV0aWMlMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D"},

  { id: 41, name: "Kids T-Shirt", price: 399, category: "Kids", description: "Soft cotton t-shirt",image : "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29mdCUyMGNvdHRvbiUyMHQtc2hpcnR8ZW58MHx8MHx8fDA%3D" },
  { id: 42, name: "Kids Jeans", price: 699, category: "Kids", description: "Comfortable kids jeans",image : "https://plus.unsplash.com/premium_photo-1723809808474-d4f3488faf1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENvbWZvcnRhYmxlJTIwa2lkcyUyMGplYW5zfGVufDB8fDB8fHww" },
  { id: 43, name: "Kids Hoodie", price: 999, category: "Kids", description: "Warm hoodie" ,image: "https://images.unsplash.com/photo-1736779580571-033c4d0eb67a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9vZGllJTIwYW5kJTIwamFja2VldCUyMGFuZCUyMHNjYXJmfGVufDB8fDB8fHww"},
  { id: 44, name: "Kids Jacket", price: 1299, category: "Kids", description: "Winter jacket",image : "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww" },
  { id: 45, name: "Kids Sneakers", price: 1499, category: "Kids", description: "Comfortable sneakers",image : "https://plus.unsplash.com/premium_photo-1779231387625-445308d5e893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D" },

  { id: 46, name: "Winter Coat", price: 3999, category: "Winter Wear", description: "Heavy winter coat",image : "https://images.unsplash.com/photo-1609683028898-e21fc6a8b666?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyJTIwY29hdCUyMHN3ZWF0ZXIlMjBhbmQlMjBjYXB8ZW58MHx8MHx8fDA%3D" },
  { id: 47, name: "Woolen Sweater", price: 1499, category: "Winter Wear", description: "Soft wool sweater" ,image : "https://images.unsplash.com/photo-1667723498622-e09592ea61d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbnRlciUyMGNvYXQlMjBzd2VhdGVyJTIwYW5kJTIwY2FwfGVufDB8fDB8fHww"},
  { id: 48, name: "Beanie Cap", price: 399, category: "Winter Wear", description: "Warm wool cap" ,image : "https://images.unsplash.com/photo-1704799960305-eb9bc3fb0c63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwY29hdCUyMHN3ZWF0ZXIlMjBhbmQlMjBjYXB8ZW58MHx8MHx8fDA%3D"},
  { id: 49, name: "Winter Gloves", price: 599, category: "Winter Wear", description: "Insulated gloves",image : "https://plus.unsplash.com/premium_photo-1664373622153-be80a7a94ad5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXN1bGF0ZWQlMjBnbG92ZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 50, name: "Winter Scarf", price: 499, category: "Winter Wear", description: "Comfortable scarf",image : "https://images.unsplash.com/photo-1773650783656-f8e9e2ae5699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9vZGllJTIwYW5kJTIwamFja2VldCUyMGFuZCUyMHNjYXJmfGVufDB8fDB8fHww" },
];

export default products;