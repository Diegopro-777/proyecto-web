// js/app.js - VERSIÓN FINAL Y FUNCIONAL (SIN FETCH)

// --- 1. VARIABLES GLOBALES ---
let supplements = [];
let productsLoaded = false;

const productListDiv = document.getElementById('product-list');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const totalCountSpan = document.getElementById('total-count');


// --- 2. FUNCIÓN DE CARGA DE DATOS (AHORA USA LA VARIABLE GLOBAL) ---
const loadProducts = () => {
    try {
        // 🚨 CAMBIO CLAVE: Usa la variable SUPPLEMENT_PRODUCTS cargada por products-data.js
        if (typeof SUPPLEMENT_PRODUCTS !== 'undefined' && SUPPLEMENT_PRODUCTS.length > 0) {
            supplements = SUPPLEMENT_PRODUCTS;
            productsLoaded = true;
            if (productListDiv) {
                renderProducts(supplements);
            }
        } else {
            throw new Error("El catálogo de productos no se ha cargado correctamente.");
        }
    } catch (error) {
        console.error("Fallo grave al cargar los productos:", error);
        if (productListDiv) {
            productListDiv.innerHTML = '<p style="color:red; text-align:center;">ERROR: La variable de productos no fue encontrada. Verifique si products-data.js está cargado.</p>';
            totalCountSpan.textContent = 0;
        }
    }
};


// --- 3. FUNCIÓN DE RENDERIZADO (Crea las tarjetas y el botón "Añadir al Carrito") ---
const renderProducts = (productsToDisplay) => {
    if (!productListDiv) return;

    productListDiv.innerHTML = '';

    if (productsToDisplay.length === 0) {
        productListDiv.innerHTML = '<p class="no-results">No se encontraron suplementos que coincidan con tu búsqueda.</p>';
        totalCountSpan.textContent = 0;
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.imagePath || 'img/default_product.jpg'}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <span class="category-tag">${product.category ? product.category.toUpperCase() : 'SUPLEMENTO'}</span>
            <p class="description">${product.shortDescription || product.description}</p> 
            <p class="price"><strong>$${product.price.toFixed(2)}</strong></p>
            <p class="benefit">Beneficio clave: ${product.benefit || 'N/A'}</p>
            <button class="add-to-cart-btn btn primary-btn" data-id="${product.id}">Agregar al Carrito</button>
        `;
        productListDiv.appendChild(productCard);
    });

    totalCountSpan.textContent = productsToDisplay.length;
};


// --- 4. FUNCIÓN DE BÚSQUEDA Y FILTRADO (Permanece igual) ---
const filterAndSearch = () => {
    if (!productsLoaded) return;

    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = supplements.filter(product => {
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;

        const textMatch = product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            (product.shortDescription && product.shortDescription.toLowerCase().includes(searchTerm)) ||
            (product.benefit && product.benefit.toLowerCase().includes(searchTerm)) ||
            (product.category && product.category.toLowerCase().includes(searchTerm));

        return categoryMatch && textMatch;
    });

    renderProducts(filtered);
};


// --- 5. INICIALIZACIÓN Y EXPOSICIÓN GLOBAL ---
window.getSupplements = () => supplements;
window.areProductsLoaded = () => productsLoaded;


document.addEventListener('DOMContentLoaded', () => {
    loadProducts();

    if (searchInput) searchInput.addEventListener('input', filterAndSearch);
    if (categoryFilter) categoryFilter.addEventListener('change', filterAndSearch);
});