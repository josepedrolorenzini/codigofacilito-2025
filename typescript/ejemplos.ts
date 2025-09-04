//union type (XOR)
function mostrarPrecio( valor: string|number ){
   
        typeof valor === "string" ? valor.toLowerCase() : valor.toFixed(2) ;
}


console.log(mostrarPrecio("Cuarenta"));
console.log(mostrarPrecio(34.23));
mostrarPrecio("Cuarenta");
mostrarPrecio(34.23) ;

// interface para objetos
interface Persona{
        nombre: string,
        edad: number,
        esMayorDeEdad: boolean,
        direccion: string,
        ciudad: string,
        estado: string,
        pais: string,
        codigoPostal: string,
        telefono: string,
        email: string,
}


const persona: Persona = {
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
}

console.log(persona);


// pizza interface
interface Pizza {
        nombre: string, 
        precio: number,
        ingredientes: string[],
        tamano: string,
        tipo: string,
        estado: string,
        fechaCreacion: Date,
        fechaActualizacion: Date,
        fechaEliminacion: Date,
        fechaVencimiento: Date,
}