// Product Data (same as main app)
const products = [
    { id: 1, name: "Samsung 4K Smart TV", price: 599.99, category: "electronics", rating: 4.5 },
    { id: 2, name: "iPhone 15 Pro", price: 999.99, category: "electronics", rating: 4.8 },
    { id: 3, name: "Nike Air Max", price: 129.99, category: "fashion", rating: 4.3 },
    { id: 4, name: "The Great Gatsby", price: 14.99, category: "books", rating: 4.6 },
    { id: 5, name: "KitchenAid Mixer", price: 299.99, category: "home", rating: 4.7 },
    { id: 6, name: "MacBook Pro M3", price: 1499.99, category: "electronics", rating: 4.9 }
];

// Stack Implementation (Browsing History)
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
        this.logToConsole(`Pushed to stack: ${element}`);
        this.updateStackDisplay();
    }
    
    pop() {
        if (this.isEmpty()) {
            this.logToConsole("Stack is empty!");
            return null;
        }
        const popped = this.items.pop();
        this.logToConsole(`Popped from stack: ${popped}`);
        this.updateStackDisplay();
        return popped;
    }
    
    peek() {
        if (this.isEmpty()) {
            this.logToConsole("Stack is empty!");
            return null;
        }
        const top = this.items[this.items.length - 1];
        this.logToConsole(`Top of stack: ${top}`);
        return top;
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    updateStackDisplay() {
        document.getElementById('stackOutput').textContent = 
            `Stack (top → bottom):\n${this.items.reverse().join('\n')}`;
        this.items.reverse(); // Reverse back
    }
    
    logToConsole(message) {
        const consoleDiv = document.getElementById('consoleOutput');
        const p = document.createElement('p');
        p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        consoleDiv.appendChild(p);
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
        console.log(message);
    }
}

// Queue Implementation (Order Processing)
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        this.items.push(element);
        this.logToConsole(`Enqueued order: ${element}`);
        this.updateQueueDisplay();
    }
    
    dequeue() {
        if (this.isEmpty()) {
            this.logToConsole("Queue is empty!");
            return null;
        }
        const dequeued = this.items.shift();
        this.logToConsole(`Dequeued order: ${dequeued}`);
        this.updateQueueDisplay();
        return dequeued;
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    processAll() {
        this.logToConsole("Processing all orders in queue:");
        while (!this.isEmpty()) {
            const order = this.dequeue();
            this.logToConsole(`✓ Processed order: ${order}`);
        }
    }
    
    updateQueueDisplay() {
        document.getElementById('queueOutput').textContent = 
            `Queue (front → back):\n${this.items.join(' → ')}`;
    }
    
    logToConsole(message) {
        const consoleDiv = document.getElementById('consoleOutput');
        const p = document.createElement('p');
        p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        consoleDiv.appendChild(p);
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
        console.log(message);
    }
}

// Initialize data structures
const browsingStack = new Stack();
const orderQueue = new Queue();

// Array Operations Demo
function demoArrayOperations() {
    const consoleDiv = document.getElementById('consoleOutput');
    
    // Map operation
    const productNames = products.map(p => p.name);
    console.log("Product Names:", productNames);
    
    // Filter operation
    const expensiveProducts = products.filter(p => p.price > 500);
    console.log("Expensive Products:", expensiveProducts);
    
    // Reduce operation
    const totalValue = products.reduce((sum, p) => sum + p.price, 0);
    console.log("Total Inventory Value:", totalValue);
    
    // ForEach operation
    console.log("Product List:");
    products.forEach(p => console.log(`- ${p.name}: $${p.price}`));
    
    // Display in UI
    document.getElementById('arrayOutput').textContent = 
        `Products: ${products.length}\n` +
        `Names: ${productNames.join(', ')}\n` +
        `Total Value: $${totalValue.toFixed(2)}\n` +
        `Expensive Items: ${expensiveProducts.length}`;
}

// Stack Operations
function pushToStack() {
    const page = document.getElementById('pageInput').value;
    if (page) {
        browsingStack.push(page);
        document.getElementById('pageInput').value = '';
    } else {
        alert('Please enter a page name');
    }
}

function popFromStack() {
    browsingStack.pop();
}

function peekStack() {
    browsingStack.peek();
}

// Queue Operations
function enqueueOrder() {
    const order = document.getElementById('orderInput').value;
    if (order) {
        orderQueue.enqueue(order);
        document.getElementById('orderInput').value = '';
    } else {
        alert('Please enter an order ID');
    }
}

function dequeueOrder() {
    orderQueue.dequeue();
}

function processQueue() {
    orderQueue.processAll();
}

// Searching Algorithms
function linearSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const startTime = performance.now();
    
    // Linear Search
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(searchTerm)) {
            const endTime = performance.now();
            const time = (endTime - startTime).toFixed(4);
            
            document.getElementById('searchOutput').textContent = 
                `✓ Found: ${products[i].name}\n` +
                `Price: $${products[i].price}\n` +
                `Category: ${products[i].category}\n` +
                `Time: ${time}ms`;
            
            console.log(`Linear Search found:`, products[i]);
            return;
        }
    }
    
    document.getElementById('searchOutput').textContent = '❌ Product not found';
}

function binarySearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Sort products by name for binary search
    const sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
    const startTime = performance.now();
    
    let left = 0;
    let right = sorted.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const comparison = sorted[mid].name.toLowerCase().localeCompare(searchTerm);
        
        if (comparison === 0) {
            const endTime = performance.now();
            const time = (endTime - startTime).toFixed(4);
            
            document.getElementById('searchOutput').textContent = 
                `✓ Found via Binary Search: ${sorted[mid].name}\n` +
                `Price: $${sorted[mid].price}\n` +
                `Category: ${sorted[mid].category}\n` +
                `Time: ${time}ms`;
            
            console.log(`Binary Search found:`, sorted[mid]);
            return;
        } else if (comparison < 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    document.getElementById('searchOutput').textContent = '❌ Product not found';
}

// Sorting Algorithms
function bubbleSort() {
    const arr = [...products];
    const startTime = performance.now();
    
    // Bubble Sort implementation
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].price > arr[j + 1].price) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    const endTime = performance.now();
    const time = (endTime - startTime).toFixed(4);
    
    document.getElementById('sortOutput').textContent = 
        `Bubble Sort (by price):\n` +
        arr.map(p => `${p.name}: $${p.price}`).join('\n') +
        `\n\nTime: ${time}ms`;
    
    console.log('Bubble Sort completed in', time, 'ms');
}

function quickSort() {
    const arr = [...products];
    const startTime = performance.now();
    
    function quickSortRecursive(array) {
        if (array.length <= 1) return array;
        
        const pivot = array[array.length - 1];
        const left = [];
        const right = [];
        
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i].price < pivot.price) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        
        return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
    }
    
    const sorted = quickSortRecursive(arr);
    const endTime = performance.now();
    const time = (endTime - startTime).toFixed(4);
    
    document.getElementById('sortOutput').textContent = 
        `Quick Sort (by price):\n` +
        sorted.map(p => `${p.name}: $${p.price}`).join('\n') +
        `\n\nTime: ${time}ms`;
    
    console.log('Quick Sort completed in', time, 'ms');
}

function mergeSort() {
    const arr = [...products];
    const startTime = performance.now();
    
    function mergeSortRecursive(array) {
        if (array.length <= 1) return array;
        
        const mid = Math.floor(array.length / 2);
        const left = array.slice(0, mid);
        const right = array.slice(mid);
        
        return merge(mergeSortRecursive(left), mergeSortRecursive(right));
    }
    
    function merge(left, right) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex].price < right[rightIndex].price) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
    
    const sorted = mergeSortRecursive(arr);
    const endTime = performance.now();
    const time = (endTime - startTime).toFixed(4);
    
    document.getElementById('sortOutput').textContent = 
        `Merge Sort (by price):\n` +
        sorted.map(p => `${p.name}: $${p.price}`).join('\n') +
        `\n\nTime: ${time}ms`;
    
    console.log('Merge Sort completed in', time, 'ms');
}

// Clear Console
function clearConsole() {
    document.getElementById('consoleOutput').innerHTML = '<p>Console cleared...</p>';
}

// Initialize display
window.onload = function() {
    demoArrayOperations();
    console.log('DSA Demo initialized');
};