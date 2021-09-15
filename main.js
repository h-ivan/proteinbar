new Vue({
  el: "#app",
  data: {
    productos: [
      {
        image: "./img/barras/proteinbarena.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=protein+bar+ena&m=&c=barrasdeproteinas",
        nombre: "Protein Bar Ena",
        presentacion: "Caja x 16 Unidades",
        descripcion:
          "Constituye un alimento funcional al estar adicionado con vitaminas y minerales, permitiendo formar masa muscular al mismo tiempo que provee energía.",
        sabores: [
          { nombre: "Frutilla", icon: "frutilla" },
          { nombre: "Chocolate Brownie", icon: "chocolate" },
          { nombre: "Banana Split", icon: "banana" },
          { nombre: "Limón", icon: "limon" },
        ],
      },
      {
        image: "./img/barras/ironbargentech.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=iron+bar+gentech&m=&c=barrasdeproteinas",
        nombre: "Iron Bar Gentech",
        presentacion: "Caja x 20 Unidades",
        descripcion:
          "Barra a base de proteínas y carbohidratos ideada para ayudar a mantener el equilibrio en medio de la agitada vida cotidiana. Baja en grasa, con un 35% de proteínas de excelente calidad y una adecuada combinación de carbohidratos permite reemplazar una comida brindando sensación de saciedad.",
        sabores: [
          { nombre: "Frutilla", icon: "frutilla" },
          { nombre: "Chocolate", icon: "chocolate" },
          { nombre: "Banana", icon: "banana" },
          { nombre: "Menta", icon: "menta" },
          { nombre: "Limón", icon: "limon" },
          { nombre: "Coco", icon: "coco" },
        ],
      },
      {
        image: "./img/barras/proteinsnackstar.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=protein+snack+star+nutrition&m=&c=barrasdeproteinas",
        nombre: "Protein Snack Star Nutrition",
        presentacion: "Caja x 12 Unidades",
        descripcion:
          "Barras proteicas a base de proteína de suero lácteo, proteína aislada de huevo y proteína texturizada de soja. Ideal para consumir como colación en cualquier momento del día. Con deliciosos sabores a menta, banana o avellana.",
        sabores: [
          { nombre: "Avellanas", icon: "avellanas" },
          { nombre: "Banana", icon: "banana" },
          { nombre: "Menta", icon: "menta" },
        ],
      },
      {
        image: "./img/barras/powerbarpulver.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=power+bar+pulver&m=&c=barrasdeproteinas",
        nombre: "Power Bar Pulver",
        presentacion: "Caja x 12 Unidades",
        descripcion:
          "Barras nutricionales a base de carbohidratos y proteína de suero lácteo, libre de gluten. Ideal para los individuos que necesitan construir masa muscular o reponer tejidos dañados / agotados que requieren un aporte extra de proteínas.",
        sabores: [
          { nombre: "Chocolate", icon: "chocolate" },
          { nombre: "Frutilla", icon: "frutilla" },
        ],
      },
      {
        image: "./img/barras/barmervick.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=protein+bar+mervick&m=&c=barrasdeproteinas",
        nombre: "Whey Protein Bar Mervick Lab",
        presentacion: "Caja x 12 Unidades",
        descripcion:
          "Es una barra hiperproteica e hipercalorica (es decir con un alto aporte de proteínas y de calorías) diseñada especialmente para deportistas y personas con elevados niveles de actividad física. Su alto contenido proteico la convierte en un alimento ideal para potenciar la síntesis muscular del deportista.",
        sabores: [
          { nombre: "Chocolate", icon: "chocolate" },
          { nombre: "Frambuesa", icon: "frambuesa" },
        ],
      },
      {
        image: "./img/barras/lowcarbgentech.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=lowcarb+protein+bar+gentech&m=&c=barrasdeproteinas",
        nombre: "Lowcarb Protein Bar Gentech",
        presentacion: "Caja x 10 Unidades",
        descripcion:
          "Ideales para consumir en planes de alimentación bajos en carbohidratos, siendo parte de desayunos y meriendas prácticas como así también en colaciones.Contienen bajo contenido de carbohidratos. (3,3 g.), de los cuales 0,7 g. son azúcares.",
        sabores: [
          { nombre: "Brownie Crunch", icon: "brownie" },
          { nombre: "Peanut Butter Crunch", icon: "peanut" },
        ],
      },
      {
        image: "./img/barras/enargybarena.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=enargy+bar+ena&m=&c=barrasdeproteinas",
        nombre: "Enargy Bar Ena",
        presentacion: "Caja x 16 Unidades",
        descripcion:
          "Ideales para consumir en planes de alimentación bajos en carbohidratos, siendo parte de desayunos y meriendas prácticas como así también en colaciones.Contienen bajo contenido de carbohidratos (3,3 g.), de los cuales 0,7 g. son azúcares.",
        sabores: [{ nombre: "Banana", icon: "banana" }],
      },
      {
        image: "./img/barras/domgentech.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=dom+protein+bar&m=&c=barrasdeproteinas",
        nombre: "Dom Protein Bar Gentech",
        presentacion: "Caja x 12 Unidades",
        descripcion:
          "Es una barrita nutricional libre de gluten desarrollada bajo supervision de profesionales de la salud, considerando las necesidades y los principales nutrientes cuyo consumo habitual suele ser menor al recomendado. Creada con el objetivo de introducir un alimento saludable para acompañar los desayunos y meriendas. Es una fuente de proteínas, vitaminas, minerales y fibra. SIN TACC",
        sabores: [{ nombre: "Chocolate", icon: "chocolate" }],
      },
      {
        image: "./img/barras/barminiproteinfactory.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=protein+bar+mini+factory&m=&c=barrasdeproteinas",
        nombre: "Protein Bar Mini Protein Factory",
        presentacion: "Caja x 24 Unidades",
        descripcion:
          "Todo el sabor y aporte de proteinas en tamaño y precio “mini”! No son las clásicas barritas de cereal que encontramos en todos los kioscos, estos son verdaderos alimentos funcionales, auténticas fuentes de proteína, no alimentos para engañar el estómago!",
        sabores: [{ nombre: "Chocolate", icon: "chocolate" }],
      },
      {
        image: "./img/barras/barpremiumultratech.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=protein+bar+premium+ultra+tech&m=&c=barrasdeproteinas",
        nombre: "Protein Bar Premium Ultra Tech",
        presentacion: "Caja x 12 Unidades",
        descripcion:
          "Alto contenido de proteínas. Única barra de 75g. rellena con caramelo y maní tostado. Es una fuente de proteínas de alta calidad, facilmente asimilables, ayuda a la construcción muscular y a la recuperación. Forma de uso: Se recomienda consumir una barra luego del entrenamiento.",
        sabores: [{ nombre: "Manteca de Maní", icon: "peanut" }],
      },
      {
        image: "./img/barras/barproteinfactory.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=protein+bar+premium+ultra+tech&m=&c=barrasdeproteinas",
        nombre: "Protein Bar Sugar Free Protein Factory",
        presentacion: "Caja x 12 Unidades",
        descripcion:
          "Es un snack saludable, ideal para personas que quieren agregar proteínas de alto valor biológico a su dieta, fundamentales para el mantenimiento de los musculos, recuperacón, energía, saciedad y salud en general, pero que al mismo tiempo llevan adelante dietas restringidas en carbohidratos y azúcares.",
        sabores: [
          { nombre: "Chocolate", icon: "chocolate" },
          { nombre: "Dulce de Leche", icon: "dulce" },
        ],
      },
      {
        image: "./img/barras/barultratech.jpg",
        link: "https://ballnutrition.com.ar/busqueda?q=protein+bar+ultra+tech&m=&c=barrasdeproteinas",
        nombre: "Protein Bar Ultra Tech",
        presentacion: "Caja x 12 Unidades",
        descripcion:
          "Barra con 32% de proteína (o sea 16 g de proteína por barrita). Contiene en el interior de la masa un “crocante de proteína” que le da una textura excelente y diferente a todas las demás del mercado. Excelente complemento para acelerar la recuperación luego del entrenamiento Su gran aporte proteico potencia la síntesis muscular. Ideales para todo tipo de entrenamiento.",
        sabores: [
            { nombre: "Frutilla con Baño de Yogurth", icon: "frutilla" },
            { nombre: "Banana", icon: "banana" },
        ],
      },{
        image: "./img/barras/energy_bar_ultratech.jpg",
        link: "https://ballnutrition.com.ar/productos/barrasdeproteinas/energybarx12uultratechbarrasenergeticas",
        nombre: "Energy Bar Ultra Tech",
        presentacion: "Caja x 12 Unidades",
        descripcion:
          "Es el alimento ideal para utilizar antes y durante la actividad física, ya que es el momento en que el cuerpo necesita reponer los carbohidratos que está utilizando para ejecutar dicha actividad, y si los carbohidratos no se reponen rápidamente, luego de determinado tiempo de ejercicio aparece la fatiga muscular. Energy Bar de Ultra Tech ayuda a evitar que eso suceda aportando carbohidratos y proteínas de alto valor biológico y fácil asimilación.",
        sabores: [{ nombre: "Chocolate", icon: "chocolate" }],
      },
    ],
  },
});
