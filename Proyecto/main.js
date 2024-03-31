class Alumno {
    //Constructor
    constructor(primerNombre, segundoNombre, primerApellido, segundoApellido, edad, idAlumno){
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.edad = edad;
        this.materiasInscritas = [];
        this.grupo = null;
        this.idAlumno = idAlumno;
    }

    //Atributos


    //Métodos
    obtenerNombreCompleto(){
        return this.primerNombre + ' ' + this.segundoNombre + ' ' + this.primerApellido + ' ' + this.segundoApellido;
    }

}

class Grupo{
    constructor(idGrupo){
        this.idGrupo = idGrupo;
        this.promedio = 0;
    }
}

class Materia {
    constructor(idMateria, nombre) {
        this.idMateria = idMateria;
        this.nombre = nombre;
        this.calificacion = 0;
    }
}

//Alta De Alumnos
let alumnos = [];
//1.- Instancia de un nuevo objeto alumno
let alumno = new Alumno('Brian', 'Uriel', 'Domínguez', 'Alvarado', 20, 1);
//2.- Agregar el nuevo alumno a nuestro registro
alumnos.push(alumno);
//3.- Persistir los datos


//let alumno = new Alumno('Brian', 'Uriel', 'Domínguez', 'Alvarado', 20, 1);
console.log(alumno);