"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union type (XOR)
function mostrarPrecio(valor) {
    typeof valor === "string" ? valor.toLowerCase() : valor.toFixed(2);
}
console.log(mostrarPrecio("Cuarenta"));
console.log(mostrarPrecio(34.23));
mostrarPrecio("Cuarenta");
mostrarPrecio(34.23);
const persona = {
    nombre: "Juan Perez",
    edad: 25,
    esMayorDeEdad: true,
    direccion: "Calle 123",
    ciudad: "Madrid",
    estado: "Madrid",
    pais: "España",
    codigoPostal: "28001",
    telefono: "1234567890",
    email: "juan.perez@gmail.com"
};
console.log(persona);
//# sourceMappingURL=ejemplos.js.map