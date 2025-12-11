// js/products-data.js - Catálogo de Productos con imágenes externas

const SUPPLEMENT_PRODUCTS = [{
        "id": "p001",
        "name": "Whey Protein Isolate",
        "category": "proteina",
        "price": 769.99,
        "stock": 50,
        "description": "Proteína de suero de leche de rápida absorción, bajo en carbohidratos, ideal para la definición muscular.",
        "benefit": "Recuperación muscular rápida",
        "shortDescription": "Suero de leche puro y de rápida asimilación.",
        // Imagen Externa (Proteína)
        "imagePath": "https://tse3.mm.bing.net/th/id/OIP.24zSTaZC4NHp-Otky0jaKQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p002",
        "name": "Caseína Micelar",
        "category": "proteina",
        "price": 689.50,
        "stock": 35,
        "description": "Proteína de liberación lenta, ideal para tomar antes de dormir y prevenir el catabolismo nocturno.",
        "benefit": "Anti-catabólico nocturno",
        "shortDescription": "Digestión lenta para aporte nocturno constante.",
        // Imagen Externa (Proteína)
        "imagePath": "https://suplementosalmayor.cl/wp-content/uploads/2023/04/Micelar-Casein-Vanilla-700g.png"
    },
    {
        "id": "p003",
        "name": "Proteína Vegana",
        "category": "proteina",
        "price": 450.00,
        "stock": 60,
        "description": "Mezcla de proteínas de guisante y arroz, una alternativa vegetal completa y sostenible.",
        "benefit": "Apto para veganos y alérgicos",
        "shortDescription": "Alternativa completa para dietas vegetales.",
        // Imagen Externa (Polvo)
        "imagePath": "https://m.media-amazon.com/images/I/41TsTBXQ3uL.jpg"
    },
    {
        "id": "p004",
        "name": "Mezcla de Proteínas (Blend)",
        "category": "proteina",
        "price": 1567.99,
        "stock": 75,
        "description": "Combinación de suero, caseína y huevo para una liberación de aminoácidos gradual y sostenida a lo largo del día.",
        "benefit": "Liberación de aminoácidos sostenida",
        "shortDescription": "Combinación de proteínas para liberación gradual.",
        // Imagen Externa (Proteína)
        "imagePath": "https://tse4.mm.bing.net/th/id/OIP.4rB51QNeCImop0FWZWtUowHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p005",
        "name": "Hydrolyzed Whey Protein",
        "category": "proteina",
        "price": 1999.99,
        "stock": 20,
        "description": "Proteína pre-digerida, lo que garantiza la máxima y más rápida absorción post-entrenamiento.",
        "benefit": "Absorción ultra rápida",
        "shortDescription": "Pre-digerida para absorción inmediata.",
        // Imagen Externa (Proteína)
        "imagePath": "https://i5.walmartimages.com/seo/Dymatize-ISO100-Hydrolyzed-Whey-Isolate-Protein-Powder-25g-Protein-Strawberry-20-Servings_8c3bd145-1dba-44ee-b6f2-6c443100e677.a2242fe087e06195584c7fcd63fe1c17.jpeg"
    },
    {
        "id": "p006",
        "name": "Gainer Alto en Calorías",
        "category": "proteina",
        "price": 625.00,
        "stock": 30,
        "description": "Fórmula alta en calorías y carbohidratos para atletas que buscan aumentar masa muscular y peso corporal rápidamente.",
        "benefit": "Aumento de peso y volumen",
        "shortDescription": "Alta densidad calórica para el aumento de peso.",
        // Imagen Externa (Gainer)
        "imagePath": "https://m.media-amazon.com/images/I/61LEpMXbRFL._AC_SL1500_.jpg"
    },
    {
        "id": "p007",
        "name": "BCAAs 2:1:1",
        "category": "aminoacidos",
        "price": 499.99,
        "stock": 100,
        "description": "Aminoácidos de cadena ramificada esenciales (Leucina, Isoleucina, Valina) para la síntesis proteica durante el ejercicio.",
        "benefit": "Energía y prevención de fatiga",
        "shortDescription": "Protege y energiza el músculo durante el ejercicio.",
        // Imagen Externa (Aminoácidos/Creatina)
        "imagePath": "https://tse4.mm.bing.net/th/id/OIP.tgq_QFo0xXWIj3Cwxv23GQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p008",
        "name": "L-Glutamina Pura",
        "category": "aminoacidos",
        "price": 330.00,
        "stock": 90,
        "description": "Aminoácido clave para la recuperación muscular, la salud intestinal y el sistema inmunológico.",
        "benefit": "Inmunidad y recuperación",
        "shortDescription": "Fundamental para la recuperación y la salud intestinal.",
        // Imagen Externa (Aminoácidos/Creatina)
        "imagePath": "https://i5.walmartimages.cl/asr/cf58bc67-e79c-44ca-a789-865faa57c10f.3ce18061cdb780e76ae2f4862e33a00d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
    },
    {
        "id": "p009",
        "name": "L-Citrulina Malato",
        "category": "aminoacidos",
        "price": 395.99,
        "stock": 70,
        "description": "Precursor del óxido nítrico, ayuda a mejorar el flujo sanguíneo y el rendimiento durante el entrenamiento.",
        "benefit": "Mejora el 'bombeo' y la resistencia",
        "shortDescription": "Aumenta el flujo sanguíneo y el rendimiento.",
        // Imagen Externa (Aminoácidos/Creatina)
        "imagePath": "https://i5.walmartimages.com/asr/bde11627-909e-454c-a4a4-66a3b2bf0ff6.2188d80e52cb1c5955b30ed0a8142eb5.jpeg"
    },
    {
        "id": "p010",
        "name": "EAA (Aminoácidos Esenciales)",
        "category": "aminoacidos",
        "price": 599.99,
        "stock": 55,
        "description": "Contiene los 9 aminoácidos que el cuerpo no puede producir por sí mismo, esenciales para la construcción muscular.",
        "benefit": "Síntesis proteica completa",
        "shortDescription": "Los 9 aminoácidos necesarios para la construcción muscular.",
        // Imagen Externa (Aminoácidos/Creatina)
        "imagePath": "https://m.media-amazon.com/images/I/61xTce8fx-L._AC_SL1500_.jpg"
    },
    {
        "id": "p011",
        "name": "Arginina AKG",
        "category": "aminoacidos",
        "price": 385.00,
        "stock": 40,
        "description": "Forma avanzada de arginina que maximiza la producción de óxido nítrico y la vasodilatación.",
        "benefit": "Potente Vasodilatación",
        "shortDescription": "Potencia la producción de óxido nítrico.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://tse2.mm.bing.net/th/id/OIP.94Q8kc_DMSU1PwYEcFtPygHaJ1?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p012",
        "name": "Beta-Alanina",
        "category": "aminoacidos",
        "price": 299.99,
        "stock": 80,
        "description": "Aminoácido que ayuda a incrementar los niveles de carnosina muscular, retrasando la fatiga y mejorando la resistencia.",
        "benefit": "Resistencia y reducción de ácido láctico",
        "shortDescription": "Mejora la resistencia y combate el ácido láctico.",
        // Imagen Externa (Aminoácidos/Creatina)
        "imagePath": "https://tse1.mm.bing.net/th/id/OIP.DH81opYFb2lyb9IRVYhBEAHaMs?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p013",
        "name": "Taurina",
        "category": "aminoacidos",
        "price": 615.00,
        "stock": 110,
        "description": "Apoya la función nerviosa, muscular y el equilibrio de electrolitos, además de ser un potente antioxidante.",
        "benefit": "Función celular y antioxidante",
        "shortDescription": "Soporte clave para la función nerviosa y muscular.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://resources.claroshop.com/medios-plazavip/s2/10643/1312584/5e41f273701b9-taurine-1600x1600.jpg"
    },
    {
        "id": "p014",
        "name": "Monohidrato de Creatina",
        "category": "rendimiento",
        "price": 349.99,
        "stock": 120,
        "description": "El suplemento más estudiado para aumentar la fuerza, la potencia y el rendimiento en ejercicios de alta intensidad.",
        "benefit": "Fuerza explosiva y potencia",
        "shortDescription": "Aumenta la fuerza, potencia y rendimiento atlético.",
        // Imagen Externa (Aminoácidos/Creatina)
        "imagePath": "https://m.media-amazon.com/images/I/71UVTrp5v4L._AC_SL1500_.jpg"
    },
    {
        "id": "p015",
        "name": "Pre-Entreno con Cafeína",
        "category": "rendimiento",
        "price": 735.00,
        "stock": 65,
        "description": "Fórmula completa con cafeína, citrulina y beta-alanina para ofrecer la máxima energía y concentración.",
        "benefit": "Foco y energía explosiva",
        "shortDescription": "Máxima energía y concentración para tu entrenamiento.",
        // Imagen Externa (Pre-entreno)
        "imagePath": "https://cdn.batitienda.com/baticloud/images/product_picture_da0b75e37515492cb1e3fba3100ffb6f_637935008233602770_0_m.png"
    },
    {
        "id": "p016",
        "name": "Óxido Nítrico (Sin Estimulantes)",
        "category": "rendimiento",
        "price": 1731.99,
        "stock": 50,
        "description": "Mejora el flujo sanguíneo y el 'bombeo' muscular sin la adición de cafeína o estimulantes.",
        "benefit": "Vasodilatación, sin nerviosismo",
        "shortDescription": "Mejora el flujo sanguíneo sin usar estimulantes.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://tse3.mm.bing.net/th/id/OIP.l04jo-lwrHDHYfmLw0yl5wHaKE?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p017",
        "name": "HMB (Hidroximetilbutirato)",
        "category": "rendimiento",
        "price": 528.00,
        "stock": 45,
        "description": "Metabolito de la leucina que ayuda a minimizar la degradación muscular (catabolismo) durante el ejercicio intenso.",
        "benefit": "Poderoso efecto Anti-catabólico",
        "shortDescription": "Minimiza la descomposición muscular.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://tse1.mm.bing.net/th/id/OIP.rw2YkPIKFISqOEtCr53G_gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p018",
        "name": "Electrolitos en Polvo",
        "category": "rendimiento",
        "price": 214.99,
        "stock": 150,
        "description": "Fórmula para reponer sales minerales (sodio, potasio, magnesio) perdidas durante el sudor, previniendo calambres.",
        "benefit": "Hidratación óptima y prevención de calambres",
        "shortDescription": "Reemplazo de sales minerales y excelente hidratación.",
        // Imagen Externa (Pre-entreno)
        "imagePath": "https://th.bing.com/th/id/OIP.7XUkFoJBE6B7D4WRmTaPGQHaFs?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p019",
        "name": "Carbohidratos (Dextrosa)",
        "category": "rendimiento",
        "price": 1312.50,
        "stock": 95,
        "description": "Fuente rápida de energía, ideal para la reposición de glucógeno inmediatamente después del entrenamiento.",
        "benefit": "Reposición de glucógeno post-entreno",
        "shortDescription": "Carbohidratos de asimilación ultra rápida.",
        // Imagen Externa (Aminoácidos/Creatina)
        "imagePath": "https://nutentar.com/storage/products/jO1B9VbbloCH3EV41bNjPLMwxYvLPjEuaK24RYdJ.png"
    },
    {
        "id": "p020",
        "name": "Multivitamínico Completo",
        "category": "vitaminas",
        "price": 222.00,
        "stock": 85,
        "description": "Complejo de vitaminas y minerales para apoyar la salud general, el metabolismo y el sistema inmune.",
        "benefit": "Salud general y energía",
        "shortDescription": "Complejo de vitaminas y minerales esenciales.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://tse3.mm.bing.net/th/id/OIP.URGLIKuRzQMlWFP0rchcfAHaHT?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p021",
        "name": "Vitamina D3 5000 IU",
        "category": "vitaminas",
        "price": 415.50,
        "stock": 115,
        "description": "Esencial para la absorción de calcio, la salud ósea y un sistema inmunológico fuerte.",
        "benefit": "Huesos e inmunidad fuertes",
        "shortDescription": "Vital para los huesos y el sistema inmune.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://tse3.mm.bing.net/th/id/OIP.r6s9P72fKDkpZ_qHwLZm0AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p022",
        "name": "Omega 3 Aceite de Pescado",
        "category": "vitaminas",
        "price": 527.99,
        "stock": 90,
        "description": "Rico en ácidos grasos EPA y DHA, brinda soporte cardiovascular y cerebral.",
        "benefit": "Salud del corazón y cerebro",
        "shortDescription": "Soporte cardiovascular y función cerebral.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://m.media-amazon.com/images/I/71pH2tqrn8L._AC_.jpg"
    },
    {
        "id": "p023",
        "name": "Magnesio Bisglicinato",
        "category": "vitaminas",
        "price": 419.00,
        "stock": 70,
        "description": "Forma de magnesio altamente absorbible, ideal para la relajación muscular, el sueño y el manejo del estrés.",
        "benefit": "Sueño y relajación muscular",
        "shortDescription": "Forma absorbible para relajación y mejor sueño.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://tse1.mm.bing.net/th/id/OIP.8M2Q5KSomqgoSKDOLwpTaAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p024",
        "name": "Complejo B de Alta Potencia",
        "category": "vitaminas",
        "price": 317.50,
        "stock": 60,
        "description": "Todas las vitaminas del grupo B, esenciales para el metabolismo energético y la función nerviosa.",
        "benefit": "Energía celular y función nerviosa",
        "shortDescription": "Apoya la producción de energía a nivel celular.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://m.media-amazon.com/images/I/814U+sW9c2L._AC_SL1500_.jpg"
    },
    {
        "id": "p025",
        "name": "Zinc Picolinato",
        "category": "vitaminas",
        "price": 213.00,
        "stock": 105,
        "description": "Mineral clave para el sistema inmune, la producción de hormonas y la salud de la piel.",
        "benefit": "Inmunidad y balance hormonal",
        "shortDescription": "Mineral clave para el sistema inmune y hormonal.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://tse1.mm.bing.net/th/id/OIP.2gt8EzeEG2Y9ZbYhCoazTgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id": "p026",
        "name": "Probióticos 50 Billones CFU",
        "category": "vitaminas",
        "price": 830.00,
        "stock": 40,
        "description": "Promueve un equilibrio saludable de la flora intestinal, mejorando la digestión y la absorción de nutrientes.",
        "benefit": "Salud digestiva e intestinal",
        "shortDescription": "Promueve un equilibrio saludable de la flora intestinal.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://http2.mlstatic.com/D_NQ_NP_943956-MCO45486063439_042021-O.jpg"
    },
    {
        "id": "p027",
        "name": "Curcumina con Pimienta Negra",
        "category": "vitaminas",
        "price": 626.50,
        "stock": 35,
        "description": "Potente antiinflamatorio natural, la pimienta negra mejora drásticamente su absorción.",
        "benefit": "Antiinflamatorio y articular",
        "shortDescription": "Potente apoyo antiinflamatorio natural.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/8b3d3e40-2631-47ab-8ab6-bcecffd253c9.abc5570708062bd5ada2c7e219d1d346.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
    },
    {
        "id": "p028",
        "name": "Colágeno Hidrolizado",
        "category": "vitaminas",
        "price": 339.99,
        "stock": 55,
        "description": "Soporte para articulaciones, tendones, piel y cabello, esencial para la elasticidad y la estructura.",
        "benefit": "Articulaciones, piel y cabello",
        "shortDescription": "Soporte esencial para articulaciones y elasticidad de la piel.",
        // Imagen Externa (Polvo)
        "imagePath": "https://i5.walmartimages.com/asr/8b5792c8-fe4e-46fb-a101-4a16da311779.e9b126ac34ccfd15d1cde54714e29dde.jpeg"
    },
    {
        "id": "p029",
        "name": "Ácido Hialurónico",
        "category": "vitaminas",
        "price": 291.00,
        "stock": 48,
        "description": "Ayuda a mantener la lubricación de las articulaciones y la hidratación de la piel desde el interior.",
        "benefit": "Salud articular y piel hidratada",
        "shortDescription": "Lubricación y soporte para las articulaciones.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://m.media-amazon.com/images/I/61Md1ygts7L._AC_SY300_SX300_QL70_ML2_.jpg"
    },
    {
        "id": "p030",
        "name": "Extracto de Cardo Mariano",
        "category": "vitaminas",
        "price": 316.50,
        "stock": 52,
        "description": "Apoyo natural para la función hepática y el proceso de desintoxicación del hígado.",
        "benefit": "Soporte y desintoxicación hepática",
        "shortDescription": "Apoyo natural para la función de desintoxicación del hígado.",
        // Imagen Externa (Píldoras/Cápsulas)
        "imagePath": "https://m.media-amazon.com/images/I/71gX6qLjXEL._AC_SX679_.jpg"
    }
];