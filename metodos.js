var laptops = [
    { nombre: 'HP', costo: 10000 },
    { nombre: 'DELL', costo: 15000 },
    { nombre: 'LENOVO', costo: 16000 },
    { nombre: 'HUAWEI', costo: 12000 },
    { nombre: 'VAIO', costo: 8000 },
    { nombre: 'ACER', costo: 11000 },
    { nombre: 'APPLE', costo: 20000 }
    ]
    console.log(laptops);

    // Metodos para recorrer arrays
    // Metodo Filter
    /* Válida si es un true o false para poder meterlos al nuevo array,
    // Y éste método no modifica el array original */
    var laptopsFiltrados = laptops.filter(function(laptops){
    return laptops.costo <= 13000});
    console.log(laptopsFiltrados);
    
    // Metodo Map
    var nombreLaptops = laptops.map(function(laptops){
    return laptops.nombre});
    console.log(nombreLaptops);
    
    // Metodo Find
    /* De igual forma,
    // Con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */
    var encuentraLaptops = laptops.find(function(laptops){
    return laptops.nombre == 'DELL';});
    console.log(encuentraLaptops);

    //Metodo forEach
    laptops.forEach(function(laptops){
    console.log(laptops.nombre);
    });
    
    // Metodo Some
    /* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */
    // EJjemplo 1 true
    var laptopsBaratas = laptops.some(function(laptops){
    return laptops.costo <= 8000;});
    console.log(laptopsBaratas);
    // EJjemplo 2 false
    var laptopsBaratas = laptops.some(function(laptops){
    return laptops.costo <= 7000;});
    console.log(laptopsBaratas);

    // Metodo Every
    /* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */
    // EJjemplo 1 true
    var laptopsBaratas = laptops.every(function(laptops){
    return laptops.costo <= 21000;});
    console.log(laptopsBaratas);
    // EJjemplo 1 false
    var laptopsBaratas = laptops.every(function(laptops){
    return laptops.costo <= 19000;});
    console.log(laptopsBaratas);
         
    // Metodo Reduce
    /* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */    
    // Ejemplo 1
    var costoTotal = laptops.reduce(function(totalActual, laptops){
    return laptops.costo + totalActual ;
    }, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual
    console.log(costoTotal);
    // Ejemplo 2
    var costoTotal = laptops.reduce(function(totalActual, laptops){
    return laptops.costo + totalActual ;
    }, 1); // El 1 será la cantidad inicial con la que comenzará el totalActual
    console.log(costoTotal);

    // Metodo Includes
    // Ejemplo 1 true
    var numeros = [1, 2, 3, 4, 5, 6];
    var incluyeNumero = numeros.includes(2);
    console.log(incluyeNumero);
    // Ejemplo 2 false
    var numeros = [7, 8, 9, 10, 11, ];
    var incluyeNumero = numeros.includes(2);
    console.log(incluyeNumero);


















