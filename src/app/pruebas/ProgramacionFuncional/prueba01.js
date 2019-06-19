const log = (...parametros) => console.log(...parametros);

function prueba01() {
    const arr = [1, 2, 3, 4, 5];
    suma = arr.reduce((anterior, actual, indice, vector) => {
        vector.push(actual);
        return anterior + indice;
    });
    log('suma', suma);
}

function prueba02() {
    const arr = [[1,2], [3,4], [5,6]];
    const flat = arr.reduce( (a, b) => a.concat(b));
    log(flat);
}

function prueba03() {
    const arr = [
                    { genero: 'M', categoria: 1, distancia: [100, 200] },
                    { genero: 'M', categoria: 2, distancia: [100, 200] },
                    { genero: 'M', categoria: 3, distancia: [100, 200] },
                    { genero: 'F', categoria: 1, distancia: [100, 200] } ];
    const flat = arr.reduce( 
        (acumulador, elemento, indice) => {
            elemento.distancia.forEach(
                distancia => {
                    acumulador.push(
                        { genero: elemento.genero, categoria: elemento.categoria, distancia: distancia } );
            });
            return acumulador;
    }, [] );
    log(flat);
}

function prueba04() {
    const nombres = ['Jorge', 'Maria', 'Jose', 'Bob', 'Pat', 'Maria', 'Jose', 'Jose'];

    const cantidadNombres = nombres.reduce(  (contador, nombre) => { 
        contador[nombre] = ( contador[nombre] || 0) + 1;
        return contador;
    }, {} );
    log(cantidadNombres);
}

console.clear();
//prueba01();
//prueba02();

prueba03();