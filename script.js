// Product Data (Array implementation with 43 products - Prices in INR)
const products = [
    // Electronics (12 products)
    {
        id: 1,
        name: "Samsung 4K Smart TV",
        price: 49999,
        category: "electronics",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
        description: "55-inch Ultra HD Smart TV with HDR",
        brand: "Samsung",
        inStock: 15
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        price: 134900,
        category: "electronics",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
        description: "Latest iPhone with A17 Pro chip",
        brand: "Apple",
        inStock: 10
    },
    {
        id: 6,
        name: "MacBook Pro M3",
        price: 169900,
        category: "electronics",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
        description: "14-inch with M3 chip, 16GB RAM",
        brand: "Apple",
        inStock: 8
    },
    {
        id: 9,
        name: "Sony WH-1000XM5",
        price: 29990,
        category: "electronics",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500",
        description: "Wireless Noise Cancelling Headphones",
        brand: "Sony",
        inStock: 25
    },
    {
        id: 10,
        name: "iPad Air",
        price: 54900,
        category: "electronics",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        description: "10.9-inch Liquid Retina display",
        brand: "Apple",
        inStock: 12
    },
    {
        id: 11,
        name: "Bose SoundLink",
        price: 9990,
        category: "electronics",
        rating: 4.4,
        image: "https://buy.budli.in/cdn/shop/files/Untitleddesign-2024-08-27T144457.717.jpg?v=1724750471&width=800",
        description: "Portable Bluetooth Speaker",
        brand: "Bose",
        inStock: 30
    },
    {
        id: 12,
        name: "Dell XPS 15",
        price: 189990,
        category: "electronics",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
        description: "15.6-inch 4K OLED Laptop",
        brand: "Dell",
        inStock: 6
    },
    {
        id: 13,
        name: "Canon EOS R6",
        price: 189990,
        category: "electronics",
        rating: 4.8,
        image: "https://i.blogs.es/4589a0/canon-eos-r6-01/450_1000.jpg",
        description: "Mirrorless Camera with 4K Video",
        brand: "Canon",
        inStock: 5
    },
    {
        id: 14,
        name: "Apple Watch Series 9",
        price: 41900,
        category: "electronics",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
        description: "GPS + Cellular, 45mm",
        brand: "Apple",
        inStock: 20
    },
    {
        id: 15,
        name: "Google Pixel 8",
        price: 75999,
        category: "electronics",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        description: "Unlocked Android Phone",
        brand: "Google",
        inStock: 18
    },
    {
        id: 16,
        name: "JBL Flip 6",
        price: 8990,
        category: "electronics",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
        description: "Waterproof Portable Speaker",
        brand: "JBL",
        inStock: 35
    },
    {
        id: 17,
        name: "Kindle Paperwhite",
        price: 13999,
        category: "electronics",
        rating: 4.7,
        image: "https://assets.aboutamazon.com/dims4/default/7b1a920/2147483647/strip/false/crop/2000x1125+0+133/resize/1200x675!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F91%2Fbb%2Fb182632d402287093dff14fc3967%2Fimage5-es.jpg",
        description: "8GB, with built-in light",
        brand: "Amazon",
        inStock: 22
    },

    // Gaming Devices (8 products)
    {
        id: 18,
        name: "PlayStation 5",
        price: 54990,
        category: "gaming",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500",
        description: "Digital Edition Console",
        brand: "Sony",
        inStock: 3
    },
    {
        id: 19,
        name: "Xbox Series X",
        price: 57990,
        category: "gaming",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500",
        description: "1TB SSD Console",
        brand: "Microsoft",
        inStock: 5
    },
    {
        id: 20,
        name: "Nintendo Switch OLED",
        price: 28990,
        category: "gaming",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500",
        description: "OLED Model with Neon Joy-Con",
        brand: "Nintendo",
        inStock: 12
    },
    {
        id: 21,
        name: "Razer DeathAdder V3",
        price: 5990,
        category: "gaming",
        rating: 4.5,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Razer_DeathAdder_Elite-top_PNr%C2%B00466.jpg",
        description: "Pro Gaming Mouse",
        brand: "Razer",
        inStock: 40
    },
    {
        id: 22,
        name: "Logitech G Pro X",
        price: 14990,
        category: "gaming",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500",
        description: "Wireless Gaming Headset",
        brand: "Logitech",
        inStock: 25
    },
    {
        id: 23,
        name: "SteelSeries Apex Pro",
        price: 18990,
        category: "gaming",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        description: "Mechanical Gaming Keyboard",
        brand: "SteelSeries",
        inStock: 15
    },
    {
        id: 24,
        name: "ASUS ROG Swift",
        price: 69990,
        category: "gaming",
        rating: 4.8,
        image: "https://sistemax.cl/image/cache/catalog/MONITORES/PG42UQ-800x1000.jpg",
        description: "27-inch 4K Gaming Monitor",
        brand: "ASUS",
        inStock: 8
    },
    {
        id: 25,
        name: "Nintendo Switch Pro",
        price: 5990,
        category: "gaming",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500",
        description: "Wireless Controller",
        brand: "Nintendo",
        inStock: 30
    },

    // Home Decor (10 products)
    {
        id: 26,
        name: "Minimalist Wall Clock",
        price: 2499,
        category: "home",
        rating: 4.3,
        image: "https://images.stockcake.com/public/8/f/c/8fc45f5d-37b6-4608-acf7-7de6924f9b13_large/minimalist-wall-clock-stockcake.jpg",
        description: "Large Silent Non-Ticking Clock",
        brand: "IKEA",
        inStock: 50
    },
    {
        id: 27,
        name: "Ceramic Vase Set",
        price: 3499,
        category: "home",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500",
        description: "Set of 3 Modern Vases",
        brand: "West Elm",
        inStock: 28
    },
    {
        id: 28,
        name: "Cotton Throw Blanket",
        price: 1999,
        category: "home",
        rating: 4.5,
        image: "https://dmaasa.com/cdn/shop/files/R-HBTH00076.jpg?v=1765973282&width=3840",
        description: "Soft Woven Decorative Blanket",
        brand: "Pottery Barn",
        inStock: 45
    },
    {
        id: 29,
        name: "LED Floor Lamp",
        price: 5999,
        category: "home",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        description: "Dimmable Standing Lamp",
        brand: "Philips",
        inStock: 20
    },
    {
        id: 30,
        name: "Abstract Wall Art",
        price: 4499,
        category: "home",
        rating: 4.2,
        image: "https://kotart.in/cdn/shop/products/Kotart-Modern-Abstract-Art-Canvas-Paintings-for-Home-and-Office-Wall-Decor-Living-room-Bedroom-Wall-Decor-Paintings-4.jpg?v=1697553852&width=1946",
        description: "Canvas Print 24x36 inches",
        brand: "Artistic",
        inStock: 15
    },
    {
        id: 31,
        name: "Scented Candle Set",
        price: 1299,
        category: "home",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=500",
        description: "Lavender & Vanilla 3-pack",
        brand: "Yankee Candle",
        inStock: 60
    },
    {
        id: 32,
        name: "Velvet Throw Pillows",
        price: 1799,
        category: "home",
        rating: 4.3,
        image: "https://aerohaven.in/cdn/shop/files/228GREEN-1.jpg?v=1717754914&width=1500",
        description: "Set of 2 Decorative Pillows",
        brand: "H&M Home",
        inStock: 35
    },
    {
        id: 33,
        name: "Bamboo Plant Stand",
        price: 3999,
        category: "home",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
        description: "Multi-tier Indoor Plant Holder",
        brand: "Urban Outfitters",
        inStock: 18
    },
    {
        id: 34,
        name: "Geometric Mirror",
        price: 4999,
        category: "home",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500",
        description: "Hexagonal Wall Mirror",
        brand: "CB2",
        inStock: 22
    },
    {
        id: 35,
        name: "Woven Basket Set",
        price: 2999,
        category: "home",
        rating: 4.6,
        image: "https://m2.dantty.com/images/products/Dantty-678537d43339e.jpg",
        description: "Storage Baskets 3-pack",
        brand: "The Container Store",
        inStock: 40
    },

    // Fashion (7 products)
    {
        id: 3,
        name: "Nike Air Max",
        price: 9999,
        category: "fashion",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        description: "Men's running shoes",
        brand: "Nike",
        inStock: 25
    },
    {
        id: 7,
        name: "Levi's Jeans",
        price: 3999,
        category: "fashion",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
        description: "Classic straight fit jeans",
        brand: "Levi's",
        inStock: 40
    },
    {
        id: 36,
        name: "Adidas Ultraboost",
        price: 15999,
        category: "fashion",
        rating: 4.7,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/59f3f8b61fb146dabf3a48566e6c7fd9_9366/Zapatillas_Ultraboost_5_Azul_ID8817.jpg",
        description: "Men's Running Shoes",
        brand: "Adidas",
        inStock: 20
    },
    {
        id: 37,
        name: "Ray-Ban Aviator",
        price: 8999,
        category: "fashion",
        rating: 4.6,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/RayBanAviator.jpg/1280px-RayBanAviator.jpg",
        description: "Classic Gold Sunglasses",
        brand: "Ray-Ban",
        inStock: 30
    },
    {
        id: 38,
        name: "Casio G-Shock",
        price: 6999,
        category: "fashion",
        rating: 4.5,
        image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Casio_G-Shock_Mudman_3031_wristwatch.jpg",
        description: "Shock Resistant Watch",
        brand: "Casio",
        inStock: 35
    },
    {
        id: 39,
        name: "The North Face Jacket",
        price: 12999,
        category: "fashion",
        rating: 4.8,
        image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F94398s.jpg?im=Resize,width=750",
        description: "Waterproof Winter Jacket",
        brand: "North Face",
        inStock: 12
    },
    {
        id: 40,
        name: "Puma Backpack",
        price: 2999,
        category: "fashion",
        rating: 4.3,
        image: "https://estilospe.vtexassets.com/arquivos/ids/3522409/SKU.jpg?v=638830107056500000",
        description: "Casual Daypack",
        brand: "Puma",
        inStock: 45
    },

    // Books (5 products)
    {
        id: 4,
        name: "The Great Gatsby",
        price: 499,
        category: "books",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500",
        description: "Classic novel by F. Scott Fitzgerald",
        brand: "Penguin",
        inStock: 100
    },
    {
        id: 8,
        name: "Dune by Frank Herbert",
        price: 599,
        category: "books",
        rating: 4.8,
        image: "https://images.squarespace-cdn.com/content/v1/57923bb33e00be1777423ef5/1606257928983-6PT3V060QNSEG8K8GE91/IMG_5199.jpeg?format=1000w",
        description: "Science fiction masterpiece",
        brand: "Ace Books",
        inStock: 75
    },
    {
        id: 41,
        name: "Atomic Habits",
        price: 799,
        category: "books",
        rating: 4.9,
        image: "https://assets.penguinrandomhouse.com/wp-content/uploads/2022/03/07110351/PRH-Atomic-Habits-Excerpt-Article-Header-1080x1080-1.jpg",
        description: "James Clear - Bestseller",
        brand: "Penguin",
        inStock: 150
    },
    {
        id: 42,
        name: "1984 by George Orwell",
        price: 399,
        category: "books",
        rating: 4.7,
        image: "https://www.penguin.co.uk/_next/image?url=https%3A%2F%2Fcdn.penguin.co.uk%2Fdam-assets%2Fbooks%2F9780141036144%2F9780141036144-jacket-large.jpg&w=614&q=100",
        description: "Dystopian Classic",
        brand: "Signet",
        inStock: 85
    },
    {
        id: 43,
        name: "The Psychology of Money",
        price: 699,
        category: "books",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500",
        description: "Morgan Housel - Finance",
        brand: "Harriman House",
        inStock: 60
    }
];

// Shopping Cart (Queue implementation for checkout processing)
class CartQueue {
    constructor() {
        this.items = [];
    }
    
    enqueue(item) {
        this.items.push(item);
    }
    
    dequeue() {
        return this.items.shift();
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    peek() {
        return this.items[0];
    }
}

// User Session Stack (Stack implementation for browsing history)
class SessionStack {
    constructor() {
        this.pages = [];
    }
    
    push(page) {
        this.pages.push(page);
    }
    
    pop() {
        return this.pages.pop();
    }
    
    peek() {
        return this.pages[this.pages.length - 1];
    }
    
    size() {
        return this.pages.length;
    }
}

// Initialize cart and session
let cart = [];
const checkoutQueue = new CartQueue();
const sessionStack = new SessionStack();

// User Authentication System
let currentUser = null;
let users = JSON.parse(localStorage.getItem('users')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartIcon = document.getElementById('cartIcon');
const closeCart = document.getElementById('closeCart');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchCategory = document.getElementById('searchCategory');
const sortSelect = document.getElementById('sortSelect');
const filterBtns = document.querySelectorAll('.filter-btn');
const userProfileBtn = document.getElementById('userProfileBtn');
const userNameDisplay = document.getElementById('userNameDisplay');

// Modal Elements
const signInModal = document.getElementById('signInModal');
const signUpModal = document.getElementById('signUpModal');
const paymentModal = document.getElementById('paymentModal');
const paymentSuccessModal = document.getElementById('paymentSuccessModal');

// Format price in Indian Rupees
function formatINR(price) {
    return '₹' + price.toLocaleString('en-IN');
}

// Display Products
function displayProducts(productsToShow = products) {
    productsGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${formatINR(product.price)}</p>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''} 
                    <span style="color: #666; font-size: 0.9rem;">(${product.rating})</span>
                </div>
                <p class="product-category">${product.category} · ${product.brand}</p>
                <p class="product-stock" style="color: ${product.inStock > 10 ? '#4CAF50' : product.inStock > 0 ? '#ff9800' : '#f44336'};">
                    ${product.inStock > 10 ? '✓ In Stock' : product.inStock > 0 ? '⚠️ Only ' + product.inStock + ' left' : '❌ Out of Stock'}
                </p>
                <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                    <button class="add-to-cart" onclick="addToCart(${product.id})" style="flex: 1;" ${product.inStock === 0 ? 'disabled' : ''}>
                        🛒 Add
                    </button>
                    <button class="buy-now" onclick="buyNow(${product.id})" style="flex: 1;" ${product.inStock === 0 ? 'disabled' : ''}>
                        ⚡ Buy Now
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Add to Cart
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product.inStock === 0) {
        showNotification(`${product.name} is out of stock!`, 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.inStock) {
            existingItem.quantity += 1;
        } else {
            showNotification(`Cannot add more than ${product.inStock} items!`, 'error');
            return;
        }
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    showNotification(`${product.name} added to cart!`);
    
    // Add to session stack
    sessionStack.push({ 
        action: 'add_to_cart', 
        product: product.name, 
        timestamp: new Date(),
        price: product.price 
    });
    console.log('Session History:', sessionStack.pages);
};

// Buy Now
window.buyNow = function(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product.inStock === 0) {
        showNotification(`${product.name} is out of stock!`, 'error');
        return;
    }
    
    if (!currentUser) {
        showNotification('Please sign in to buy!', 'error');
        signInModal.style.display = 'block';
        return;
    }
    
    // Create single-item order
    currentOrder = {
        items: [{ ...product, quantity: 1 }],
        total: product.price,
        date: new Date().toISOString(),
        orderId: 'ORD' + Date.now()
    };
    
    // Show payment modal
    displayOrderSummary();
    paymentModal.style.display = 'block';
    
    console.log('Buy Now - Product:', product.name);
};

// Update Cart Display
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    let itemCount = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        itemCount += item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatINR(item.price)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <span class="remove-item" onclick="removeFromCart(${item.id})">Remove</span>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartCount.textContent = itemCount;
    cartTotal.textContent = formatINR(total);
}

// Update Quantity
window.updateQuantity = function(productId, change) {
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);
    
    if (item) {
        const newQuantity = item.quantity + change;
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else if (newQuantity <= product.inStock) {
            item.quantity = newQuantity;
            updateCart();
        } else {
            showNotification(`Cannot add more than ${product.inStock} items!`, 'error');
        }
    }
};

// Remove from Cart
window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Item removed from cart');
};

// Search Products
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = searchCategory.value;
    
    let filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                             product.description.toLowerCase().includes(searchTerm) ||
                             product.brand.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
    
    displayProducts(filtered);
    
    if (filtered.length === 0) {
        showNotification('No products found', 'error');
    }
}

// Sort Products
function sortProducts(sortBy) {
    let sorted = [...products];
    
    switch(sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        default:
            sorted = products;
    }
    
    displayProducts(sorted);
}

// Filter by Category
function filterByCategory(category) {
    if (category === 'all') {
        displayProducts();
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// Checkout
window.checkout = function() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    if (!currentUser) {
        showNotification('Please sign in to checkout!', 'error');
        signInModal.style.display = 'block';
        return;
    }
    
    // Prepare order summary
    currentOrder = {
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toISOString(),
        orderId: 'ORD' + Date.now()
    };
    
    // Display order in payment modal
    displayOrderSummary();
    paymentModal.style.display = 'block';
    cartSidebar.classList.remove('open');
};

// Display Order Summary
function displayOrderSummary() {
    const orderItemsDiv = document.getElementById('orderItems');
    orderItemsDiv.innerHTML = '';
    
    currentOrder.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'order-item';
        itemDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between;">
                <span>${item.name} x ${item.quantity}</span>
                <span>${formatINR(item.price * item.quantity)}</span>
            </div>
        `;
        orderItemsDiv.appendChild(itemDiv);
    });
    
    document.getElementById('paymentTotal').textContent = formatINR(currentOrder.total);
}

// Payment Method Switching
document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.getElementById('cardPaymentForm').style.display = 'none';
        document.getElementById('upiPaymentForm').style.display = 'none';
        document.getElementById('netbankingForm').style.display = 'none';
        document.getElementById('codMessage').style.display = 'none';
        
        switch(this.value) {
            case 'card':
                document.getElementById('cardPaymentForm').style.display = 'block';
                break;
            case 'upi':
                document.getElementById('upiPaymentForm').style.display = 'block';
                break;
            case 'netbanking':
                document.getElementById('netbankingForm').style.display = 'block';
                break;
            case 'cod':
                document.getElementById('codMessage').style.display = 'block';
                break;
        }
    });
});

// Process Payment
document.getElementById('payNowBtn').addEventListener('click', function() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    let isValid = true;
    
    // Validate based on payment method
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiry = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
        
        if (!cardNumber || !expiry || !cvv) {
            showNotification('Please fill all card details', 'error');
            isValid = false;
        } else if (cardNumber.replace(/\s/g, '').length !== 16) {
            showNotification('Invalid card number', 'error');
            isValid = false;
        } else if (cvv.length !== 3) {
            showNotification('Invalid CVV', 'error');
            isValid = false;
        }
    } else if (paymentMethod === 'upi') {
        const upiId = document.getElementById('upiId').value;
        if (!upiId || !upiId.includes('@')) {
            showNotification('Invalid UPI ID', 'error');
            isValid = false;
        }
    } else if (paymentMethod === 'netbanking') {
        const bank = document.getElementById('bank').value;
        if (!bank) {
            showNotification('Please select a bank', 'error');
            isValid = false;
        }
    }
    
    if (isValid) {
        processPayment(paymentMethod);
    }
});

// Process Payment
function processPayment(method) {
    const payBtn = document.getElementById('payNowBtn');
    const originalText = payBtn.textContent;
    payBtn.textContent = 'Processing...';
    payBtn.disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        // Add to order queue
        currentOrder.items.forEach(item => {
            for (let i = 0; i < item.quantity; i++) {
                checkoutQueue.enqueue(item);
            }
        });
        
        // Update stock
        currentOrder.items.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                product.inStock -= item.quantity;
            }
        });
        
        // Save order to user's history
        if (!currentUser.orders) {
            currentUser.orders = [];
        }
        currentUser.orders.push({
            ...currentOrder,
            paymentMethod: method,
            status: 'Confirmed'
        });
        
        // Update users in localStorage
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            localStorage.setItem('users', JSON.stringify(users));
        }
        
        // Show success modal
        paymentModal.style.display = 'none';
        displaySuccessDetails(method);
        paymentSuccessModal.style.display = 'block';
        
        // Clear cart
        cart = [];
        updateCart();
        
        // Refresh products display
        displayProducts();
        
        // Reset button
        payBtn.textContent = originalText;
        payBtn.disabled = false;
        
        console.log('=== PAYMENT PROCESSED ===');
        console.log('Order ID:', currentOrder.orderId);
        console.log('Payment Method:', method);
        console.log('Total:', formatINR(currentOrder.total));
    }, 2000);
}

// Display Success Details
function displaySuccessDetails(method) {
    const detailsDiv = document.getElementById('successOrderDetails');
    const methodNames = {
        card: 'Credit/Debit Card',
        upi: 'UPI',
        netbanking: 'Net Banking',
        cod: 'Cash on Delivery'
    };
    
    detailsDiv.innerHTML = `
        <p><strong>Order ID:</strong> ${currentOrder.orderId}</p>
        <p><strong>Payment Method:</strong> ${methodNames[method]}</p>
        <p><strong>Total Paid:</strong> ${formatINR(currentOrder.total)}</p>
        <p><strong>Items:</strong> ${currentOrder.items.reduce((sum, item) => sum + item.quantity, 0)}</p>
    `;
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// User Authentication
userProfileBtn.addEventListener('click', () => {
    if (currentUser) {
        showUserMenu();
    } else {
        signInModal.style.display = 'block';
    }
});

// Close Modals
document.getElementById('closeSignIn').addEventListener('click', () => {
    signInModal.style.display = 'none';
});

document.getElementById('closeSignUp').addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

document.getElementById('closePayment').addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

// Show Sign Up
document.getElementById('showSignUp').addEventListener('click', (e) => {
    e.preventDefault();
    signInModal.style.display = 'none';
    signUpModal.style.display = 'block';
});

// Toggle Password
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Sign In Form
document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    const user = users.find(u => (u.email === email || u.username === email) && u.password === password);
    
    if (user) {
        currentUser = user;
        userNameDisplay.textContent = user.username;
        signInModal.style.display = 'none';
        showNotification(`Welcome back, ${user.username}!`, 'success');
        
        if (rememberMe) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
        }
    } else {
        showNotification('Invalid email/username or password!', 'error');
    }
});

// Sign Up Form
document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('newEmail').value;
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password.length < 8) {
        showNotification('Password must be at least 8 characters!', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    if (users.some(u => u.email === email || u.username === username)) {
        showNotification('User already exists!', 'error');
        return;
    }
    
    const newUser = {
        id: users.length + 1,
        fullName,
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
        orders: []
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    userNameDisplay.textContent = username;
    signUpModal.style.display = 'none';
    
    showNotification('Account created successfully!', 'success');
});

// Show User Menu
function showUserMenu() {
    const menu = document.createElement('div');
    menu.className = 'user-menu';
    menu.innerHTML = `
        <div class="user-menu-content">
            <p><strong>${currentUser.fullName}</strong></p>
            <p>@${currentUser.username}</p>
            <hr>
            <a href="#" id="myOrders">My Orders (${currentUser.orders?.length || 0})</a>
            <a href="#" id="myProfile">Profile</a>
            <a href="#" id="logoutBtn">Logout</a>
        </div>
    `;
    
    document.body.appendChild(menu);
    
    const rect = userProfileBtn.getBoundingClientRect();
    menu.style.position = 'absolute';
    menu.style.top = rect.bottom + 'px';
    menu.style.right = (window.innerWidth - rect.right) + 'px';
    
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        currentUser = null;
        userNameDisplay.textContent = 'Sign In';
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
        menu.remove();
        showNotification('Logged out successfully', 'success');
    });
    
    document.getElementById('myOrders').addEventListener('click', (e) => {
        e.preventDefault();
        showOrderHistory();
        menu.remove();
    });
    
    document.addEventListener('click', function closeMenu(e) {
        if (!menu.contains(e.target) && e.target !== userProfileBtn) {
            menu.remove();
            document.removeEventListener('click', closeMenu);
        }
    });
}

// Show Order History
function showOrderHistory() {
    if (!currentUser.orders || currentUser.orders.length === 0) {
        showNotification('No orders found', 'error');
        return;
    }
    
    let orderHistory = '=== ORDER HISTORY ===\n\n';
    currentUser.orders.forEach((order, index) => {
        orderHistory += `Order #${index + 1}: ${order.orderId}\n`;
        orderHistory += `Date: ${new Date(order.date).toLocaleDateString()}\n`;
        orderHistory += `Total: ${formatINR(order.total)}\n`;
        orderHistory += `Status: ${order.status}\n`;
        orderHistory += `Payment: ${order.paymentMethod}\n`;
        orderHistory += '-------------------\n';
    });
    
    console.log(orderHistory);
    showNotification('Check console for order history', 'success');
}

// Format Card Number
document.getElementById('cardNumber')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s/g, '');
    if (value.length > 0) {
        value = value.match(new RegExp('.{1,4}', 'g'))?.join(' ') || value;
    }
    e.target.value = value;
});

// Format Expiry Date
document.getElementById('expiryDate')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\//g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    e.target.value = value;
});

// Event Listeners
searchBtn.addEventListener('click', searchProducts);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchProducts();
});

sortSelect.addEventListener('change', (e) => {
    sortProducts(e.target.value);
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterByCategory(btn.dataset.category);
    });
});

cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('open');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

document.getElementById('checkoutBtn').addEventListener('click', checkout);
document.getElementById('continueShopping').addEventListener('click', () => {
    paymentSuccessModal.style.display = 'none';
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === signInModal) {
        signInModal.style.display = 'none';
    }
    if (e.target === signUpModal) {
        signUpModal.style.display = 'none';
    }
    if (e.target === paymentModal) {
        paymentModal.style.display = 'none';
    }
    if (e.target === paymentSuccessModal) {
        paymentSuccessModal.style.display = 'none';
    }
});

// Check for saved session
window.addEventListener('load', () => {
    const savedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        userNameDisplay.textContent = currentUser.username;
    }
    
    // Initialize products
    displayProducts();
});