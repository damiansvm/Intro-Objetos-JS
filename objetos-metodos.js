// Ejemplo de objeto con metodos
const producto = {
    id: "p-07",
    nombre: "agua de jamaica",
    precio: 15,
    categoria: "bebida",
    disponible: true,

// metodo
    resumen(){
        return this.nombre + "- $" + this.precio + " (" + this.categoria + ")";
    },
    estadisponible(){
        return this.disponible;
    }
};
// paso 1 mostrando el objeto
console.log("---OBJETO COMPLETO---")
console.log(producto)
