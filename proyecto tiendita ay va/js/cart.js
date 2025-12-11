// js/cart.js - VERSIÓN COMPLETA PARA AGREGAR Y MOSTRAR PRODUCTOS

// --- 1. VARIABLES GLOBALES DEL CARRITO ---
let cart = [];
const cartListDiv = document.getElementById('cart-list');
const cartTotalSpan = document.getElementById('cart-total');
const cartCountLink = document.getElementById('cart-count'); // Contador en el header
const cartCountPage = document.getElementById('cart-count-page'); // Contador en la página carrito.html


// --- 2. GESTIÓN DE ALMACENAMIENTO LOCAL ---
const saveCartToLocalStorage = () => {
    localStorage.setItem('supplemenCart', JSON.stringify(cart));
    // Actualizar el contador del carrito en el header
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartCountLink) {
        cartCountLink.textContent = totalItems;
    }
};

const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('supplemenCart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
};


// --- 3. FUNCIÓN DE RENDERIZADO (Dibuja el carrito en carrito.html) ---
const renderCart = () => {
    saveCartToLocalStorage(); // Guardar antes de renderizar

    if (!cartListDiv) return; // Si no estamos en carrito.html, no hacer nada aquí.

    cartListDiv.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartListDiv.innerHTML = '<p class="empty-cart-message">Tu carrito de compras está vacío. 😢</p>';
    } else {
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            totalItems += item.quantity;

            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');

            // Usamos una estructura simple para la tarjeta del carrito
            cartItemDiv.innerHTML = `
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p class="item-price">$${item.price.toFixed(2)} c/u</p>
                </div>
                <div class="item-controls">
                    <span class="item-quantity">Cantidad: ${item.quantity}</span>
                    <span class="item-subtotal">Total: $${itemTotal.toFixed(2)}</span>
                    <button class="btn delete-btn remove-from-cart-btn" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartListDiv.appendChild(cartItemDiv);
        });
    }

    // Actualizar totales en la página
    if (cartTotalSpan) cartTotalSpan.textContent = total.toFixed(2);
    if (cartCountPage) cartCountPage.textContent = totalItems;

    // Actualizar el contador en el header (por si se llama desde carrito.html)
    if (cartCountLink) cartCountLink.textContent = totalItems;
};


// --- 4. LÓGICA DE GESTIÓN DEL CARRITO (Agregar, Quitar, Vaciar) ---

/**
 * Agrega un producto por su ID al carrito.
 * @param {string} productId - ID del producto a agregar.
 */
const addToCart = (productId) => {
    // La función window.getSupplements() es provista por app.js
    const productData = window.getSupplements ? window.getSupplements() : [];

    if (productData.length === 0 && !window.areProductsLoaded()) {
        alert("El catálogo aún se está cargando o ha fallado. Inténtalo de nuevo.");
        return;
    }

    // Buscar el producto por su ID (usado como cadena de texto)
    const productToAdd = productData.find(p => p.id === productId);

    if (!productToAdd) {
        console.error(`Producto con ID ${productId} no encontrado en el catálogo.`);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1; // Incrementar cantidad
    } else {
        // Agregar nuevo ítem al carrito
        cart.push({
            id: productToAdd.id,
            name: productToAdd.name,
            price: productToAdd.price,
            quantity: 1
        });
    }

    renderCart();

    // Feedback de éxito (opcional)
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    // Mostrar un mensaje al usuario para confirmar la acción
    alert(`${productToAdd.name} agregado al carrito! Tienes ${totalItems} ítems.`);
};


const removeFromCart = (index) => {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    renderCart();
};

const clearCart = () => {
    if (confirm('¿Estás seguro de que deseas vaciar todo el carrito?')) {
        cart = [];
        renderCart();
    }
};

const checkout = () => {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de finalizar la compra.');
        return;
    }
    alert('Compra finalizada con éxito! Total a pagar: $' + cartTotalSpan.textContent);
    clearCart();
    // Aquí iría la lógica real de pago
};


// --- 5. INICIALIZACIÓN Y EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromLocalStorage();
    renderCart(); // Asegurarse de que el contador del header se actualice al cargar

    document.addEventListener('click', (e) => {
        // 🚨 1. ESCUCHA EL CLIC PARA AGREGAR PRODUCTOS
        if (e.target.classList.contains('add-to-cart-btn')) {
            e.preventDefault(); // Evitar navegación si el botón está en un formulario/link
            const productId = e.target.dataset.id;

            if (productId) {
                addToCart(productId);
            }
        }

        // 2. ESCUCHA EL CLIC PARA QUITAR PRODUCTOS (desde carrito.html)
        if (e.target.classList.contains('remove-from-cart-btn')) {
            const itemIndex = parseInt(e.target.dataset.index);
            if (!isNaN(itemIndex)) {
                removeFromCart(itemIndex);
            }
        }

        // 3. ESCUCHA EL BOTÓN PARA VACIAR CARRITO (desde carrito.html)
        if (e.target.classList.contains('clear-cart-btn')) {
            clearCart();
        }

        // 4. ESCUCHA EL BOTÓN PARA FINALIZAR COMPRA (desde carrito.html)
        if (e.target.classList.contains('checkout-btn')) {
            checkout();
        }
    });
});