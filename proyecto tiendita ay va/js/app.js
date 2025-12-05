// js/app.js

// --- 1. DATOS INICIALES (Mínimo 30 Suplementos) ---
const supplements = [
    // PROTEÍNAS (6)
    { id: 1, name: "Whey Protein Isolate", category: "proteina", price: 45.99, stock: 50, description: "Proteína de suero de leche de rápida absorción, bajo en carbohidratos.", benefit: "Recuperación muscular", shortDescription: "Suero de leche puro y de rápida asimilación.", imageTag: "" },
    { id: 2, name: "Caseína Micelar", category: "proteina", price: 42.50, stock: 35, description: "Liberación lenta, ideal para antes de dormir.", benefit: "Anti-catabólico nocturno", shortDescription: "Digestión lenta para aporte nocturno constante.", imageTag: "" },
    { id: 3, name: "Proteína Vegana de Guisante y Arroz", category: "proteina", price: 38.00, stock: 60, description: "Alternativa vegetal completa.", benefit: "Apto para veganos", shortDescription: "Alternativa completa para dietas vegetales.", imageTag: "" },
    { id: 4, name: "Mezcla de Proteínas (Blend)", category: "proteina", price: 35.99, stock: 75, description: "Combinación de suero, caseína y huevo.", benefit: "Liberación sostenida", shortDescription: "Combinación de proteínas para liberación gradual.", imageTag: "" },
    { id: 5, name: "Hydrolyzed Whey Protein", category: "proteina", price: 55.99, stock: 20, description: "Pre-digerida para la máxima y más rápida absorción.", benefit: "Absorción ultra rápida", shortDescription: "Pre-digerida para absorción inmediata.", imageTag: "" },
    { id: 6, name: "Gainer Alto en Calorías", category: "proteina", price: 60.00, stock: 30, description: "Para aumentar masa muscular y peso corporal.", benefit: "Aumento de peso", shortDescription: "Alta densidad calórica para el aumento de peso.", imageTag: "" },

    // AMINOÁCIDOS (7)
    { id: 7, name: "BCAAs 2:1:1", category: "aminoacidos", price: 25.99, stock: 100, description: "Aminoácidos de cadena ramificada esenciales para la síntesis proteica.", benefit: "Energía y prevención de fatiga", shortDescription: "Protege y energiza el músculo durante el ejercicio.", imageTag: "" },
    { id: 8, name: "L-Glutamina Pura", category: "aminoacidos", price: 18.50, stock: 90, description: "Aminoácido clave para la recuperación y salud intestinal.", benefit: "Inmunidad y recuperación", shortDescription: "Fundamental para la recuperación y la salud intestinal.", imageTag: "" },
    { id: 9, name: "L-Citrulina Malato", category: "aminoacidos", price: 29.99, stock: 70, description: "Precursor del óxido nítrico, mejora el flujo sanguíneo.", benefit: "Mejora el 'bombeo'", shortDescription: "Aumenta el flujo sanguíneo y el rendimiento.", imageTag: "" },
    { id: 10, name: "EAA (Aminoácidos Esenciales)", category: "aminoacidos", price: 32.99, stock: 55, description: "Contiene los 9 aminoácidos que el cuerpo no produce.", benefit: "Síntesis proteica completa", shortDescription: "Los 9 aminoácidos necesarios para la construcción muscular.", imageTag: "" },
    { id: 11, name: "Arginina AKG", category: "aminoacidos", price: 20.00, stock: 40, description: "Aumenta la producción de óxido nítrico.", benefit: "Vasodilatación", shortDescription: "Potencia la producción de óxido nítrico.", imageTag: "" },
    { id: 12, name: "Beta-Alanina", category: "aminoacidos", price: 24.99, stock: 80, description: "Incrementa los niveles de carnosina muscular.", benefit: "Resistencia y reducción de ácido láctico", shortDescription: "Mejora la resistencia y combate el ácido láctico.", imageTag: "" },
    { id: 13, name: "Taurina", category: "aminoacidos", price: 15.00, stock: 110, description: "Apoya la función nerviosa y muscular.", benefit: "Función celular y energía", shortDescription: "Soporte clave para la función nerviosa y muscular.", imageTag: "" },

    // RENDIMIENTO / PRE-ENTRENOS (6)
    { id: 14, name: "Monohidrato de Creatina", category: "rendimiento", price: 19.99, stock: 120, description: "El suplemento más estudiado para fuerza y potencia.", benefit: "Fuerza explosiva", shortDescription: "Aumenta la fuerza, potencia y rendimiento atlético.", imageTag: "" },
    { id: 15, name: "Pre-Entreno con Cafeína", category: "rendimiento", price: 35.00, stock: 65, description: "Fórmula energizante para máximo rendimiento.", benefit: "Foco y energía", shortDescription: "Máxima energía y concentración para tu entrenamiento.", imageTag: "" },
    { id: 16, name: "Óxido Nítrico (Sin Estimulantes)", category: "rendimiento", price: 31.99, stock: 50, description: "Mejora el flujo sanguíneo sin cafeína.", benefit: "Vasodilatación, sin nerviosismo", shortDescription: "Mejora el flujo sanguíneo sin usar estimulantes.", imageTag: "" },
    { id: 17, name: "HMB (Hidroximetilbutirato)", category: "rendimiento", price: 28.00, stock: 45, description: "Minimiza la degradación muscular durante el ejercicio intenso.", benefit: "Anti-catabólico", shortDescription: "Minimiza la descomposición muscular.", imageTag: "" },
    { id: 18, name: "Electrolitos en Polvo", category: "rendimiento", price: 14.99, stock: 150, description: "Reemplaza sales minerales perdidas durante el sudor.", benefit: "Hidratación", shortDescription: "Reemplazo de sales minerales y excelente hidratación.", imageTag: "" },
    { id: 19, name: "Carbohidratos (Dextrosa/Maltodextrina)", category: "rendimiento", price: 12.50, stock: 95, description: "Fuente rápida de energía post-entreno.", benefit: "Reposición de glucógeno", shortDescription: "Carbohidratos de asimilación ultra rápida.", imageTag: "" },

    // VITAMINAS Y SALUD GENERAL (11)
    { id: 20, name: "Multivitamínico Completo", category: "vitaminas", price: 22.00, stock: 85, description: "Apoyo a la salud general y al sistema inmune.", benefit: "Salud general", shortDescription: "Complejo de vitaminas y minerales esenciales.", imageTag: "" },
    { id: 21, name: "Vitamina D3 5000 IU", category: "vitaminas", price: 15.50, stock: 115, description: "Esencial para la salud ósea e inmune.", benefit: "Huesos e inmunidad", shortDescription: "Vital para los huesos y el sistema inmune.", imageTag: "" },
    { id: 22, name: "Omega 3 Aceite de Pescado", category: "vitaminas", price: 27.99, stock: 90, description: "Rico en EPA y DHA. Soporte cardiovascular.", benefit: "Salud del corazón y cerebro", shortDescription: "Soporte cardiovascular y función cerebral.", imageTag: "" },
    { id: 23, name: "Magnesio Bisglicinato", category: "vitaminas", price: 19.00, stock: 70, description: "Forma altamente absorbible para la relajación muscular.", benefit: "Sueño y relajación", shortDescription: "Forma absorbible para relajación y mejor sueño.", imageTag: "" },
    { id: 24, name: "Complejo B de Alta Potencia", category: "vitaminas", price: 17.50, stock: 60, description: "Apoya el metabolismo energético.", benefit: "Energía celular", shortDescription: "Apoya la producción de energía a nivel celular.", imageTag: "" },
    { id: 25, name: "Zinc Picolinato", category: "vitaminas", price: 13.00, stock: 105, description: "Mineral clave para el sistema inmune y hormonal.", benefit: "Inmunidad y testosterona", shortDescription: "Mineral clave para el sistema inmune y hormonal.", imageTag: "" },
    { id: 26, name: "Probióticos 50 Billones CFU", category: "vitaminas", price: 30.00, stock: 40, description: "Promueve un equilibrio saludable de la flora intestinal.", benefit: "Salud digestiva", shortDescription: "Promueve un equilibrio saludable de la flora intestinal.", imageTag: "" },
    { id: 27, name: "Curcumina con Pimienta Negra", category: "vitaminas", price: 26.50, stock: 35, description: "Potente antiinflamatorio natural.", benefit: "Antiinflamatorio", shortDescription: "Potente apoyo antiinflamatorio natural.", imageTag: "" },
    { id: 28, name: "Colágeno Hidrolizado", category: "vitaminas", price: 39.99, stock: 55, description: "Soporte para articulaciones, piel y cabello.", benefit: "Articulaciones y piel", shortDescription: "Soporte esencial para articulaciones y elasticidad de la piel.", imageTag: "" },
    { id: 29, name: "Ácido Hialurónico", category: "vitaminas", price: 21.00, stock: 48, description: "Ayuda a mantener la lubricación de las articulaciones.", benefit: "Salud articular", shortDescription: "Lubricación y soporte para las articulaciones.", imageTag: "" },
    { id: 30, name: "Extracto de Cardo Mariano", category: "vitaminas", price: 16.50, stock: 52, description: "Apoyo natural para la función hepática.", benefit: "Soporte hepático", shortDescription: "Apoyo natural para la función de desintoxicación del hígado.", imageTag: "" }
];

const productListDiv = document.getElementById('product-list');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const totalCountSpan = document.getElementById('total-count');


// --- 2. FUNCIÓN DE RENDERIZADO MODIFICADA ---
const renderProducts = (productsToDisplay) => {
    productListDiv.innerHTML = ''; // Limpiar la lista

    if (productsToDisplay.length === 0) {
        productListDiv.innerHTML = '<p class="no-results">No se encontraron suplementos que coincidan con tu búsqueda.</p>';
        totalCountSpan.textContent = 0;
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Usa la nueva imagen simulada y la descripción corta
        productCard.innerHTML = `
            ${product.imageTag} 
            <h3>${product.name}</h3>
            <span class="category-tag">${product.category.toUpperCase()}</span>
            <p class="description">${product.shortDescription}</p> 
            <p class="price"><strong>$${product.price.toFixed(2)}</strong></p>
            <p class="benefit">Beneficio clave: ${product.benefit}</p>
            <button class="add-to-cart-btn btn" data-id="${product.id}">Agregar al Carrito</button>
        `;
        productListDiv.appendChild(productCard);
    });

    totalCountSpan.textContent = productsToDisplay.length;
};


// --- 3. FUNCIÓN DE BÚSQUEDA Y FILTRADO (Controlador principal) ---
const filterAndSearch = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = supplements.filter(product => {
        // 1. Filtrar por categoría
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;

        // 2. Buscar por texto (en nombre, descripción, beneficio o categoría)
        const textMatch = product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            (product.shortDescription && product.shortDescription.toLowerCase().includes(searchTerm)) || // Busca en shortDescription si existe
            product.benefit.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);

        return categoryMatch && textMatch;
    });

    renderProducts(filtered);
};


// --- 4. EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar la vista al cargar la página
    renderProducts(supplements);

    // Configurar listeners
    searchInput.addEventListener('input', filterAndSearch);
    categoryFilter.addEventListener('change', filterAndSearch);
});

// Nota: La lógica del carrito (js/cart.js) usará estas variables y funciones.