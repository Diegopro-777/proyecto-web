// --- 1. VARIABLES GLOBALES DEL CARRITO ---
let cart = [];
// Referencias a los elementos del DOM (Para la página carrito.html)
const cartListDiv = document.getElementById('cart-list');
const cartTotalSpan = document.getElementById('cart-total');
const cartCountSpan = document.getElementById('cart-count');

// --- 2. FUNCIÓN DE RENDERIZADO DEL CARRITO ---
const renderCart = () => {
    if (!cartListDiv) return; // Salir si no estamos en carrito.html

    cartListDiv.innerHTML = '';

    if (cart.length === 0) {
        cartListDiv.innerHTML = '<p class="empty-cart-message">El carrito está vacío. ¡Añade suplementos!</p>';
        if (cartTotalSpan) cartTotalSpan.textContent = '0.00';
        if (cartCountSpan) cartCountSpan.textContent = '0';
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <span>${item.name} (${item.quantity}x)</span>
            <span class="cart-item-price">${subtotal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</span>
            <button class="remove-from-cart-btn" data-index="${index}">❌</button>
        `;
        cartListDiv.appendChild(cartItem);
    });

    if (cartTotalSpan) cartTotalSpan.textContent = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
    if (cartCountSpan) cartCountSpan.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);

    saveCartToLocalStorage();
};


// --- 3. LÓGICA DE GESTIÓN DEL CARRITO ---
const addToCart = (productId) => {
    if (typeof supplements === 'undefined') {
        console.error("Error: La lista de suplementos (supplements) no está definida. Asegúrate de que app.js cargue primero.");
        alert("Error al cargar datos del producto. Intenta recargar la página.");
        return;
    }

    const productToAdd = supplements.find(p => p.id === productId);

    if (!productToAdd) {
        console.error(`Producto con ID ${productId} no encontrado.`);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productToAdd.id,
            name: productToAdd.name,
            price: productToAdd.price,
            quantity: 1
        });
    }

    renderCart();
};


const removeFromCart = (index) => {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }

    renderCart();
};


// --- 4. ALMACENAMIENTO (LocalStorage) ---
const saveCartToLocalStorage = () => {
    localStorage.setItem('supplementsCart', JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('supplementsCart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
};

// --- 5. FUNCIONES EXTRA ---
const clearCart = () => {
    cart = [];
    saveCartToLocalStorage();
    renderCart();
};

const checkout = () => {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
        return;
    }
    alert("¡Gracias por tu compra! 🛒");
    clearCart();
};

// --- 6. INICIALIZACIÓN Y EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromLocalStorage();
    renderCart();

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
            console.log(`Producto ID ${productId} agregado.`);
        }

        if (e.target.classList.contains('remove-from-cart-btn')) {
            const itemIndex = parseInt(e.target.dataset.index);
            removeFromCart(itemIndex);
        }
    });
});