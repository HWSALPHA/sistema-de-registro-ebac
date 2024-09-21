console.log("Sistema EBAC de registro de alumnos");

var registro = [
    {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", email:"salvadormora@ebac.mx"},
    {nombre: "Maria Hubert", edad:"34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarrollo Back End con python", email: "maria@ebac.mx"},
    {nombre: "Chris Redfield", edad:"48", zonaResidencia: "Chihuahua", nombrePrograma: "Desarrollo Back End con python", email: "CHRED@ebac.mx"},
    {nombre: "James Sunderland", edad:"35", zonaResidencia: "CDMX", nombrePrograma: "Desarrollo Back End con python", email: "Jsunderland@ebac.mx"},
    {nombre: "Sebastian Castellanos", edad:"40", zonaResidencia: "Tijuana", nombrePrograma: "Desarrollo Back End con python", email: "SebCastellanos@ebac.mx"}
];


//Funcion para incluir un nuevo alumno en el sistema, simplemente se le cambio el nombre a la funcion agregarAlumno
function incluir(){
    //Aqui pedimos al usuario los datos del alumno a agregar
    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var edad = prompt("Ingresa la edad del alumno");
    var nombrePrograma = prompt("Ingresa el nombre del programa a estudiar");
    var email = prompt("Ingresa el correo email del alumno"); 
    //Se crea un nuevo objeto con los datos ingresados
    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email};
    //Añadimos el nuevo alumno al array de registros
    registro.push(nuevoAlumno);
    //Confirmamos al usuario que el alumno ha sido agregado correctamente
    alert("Alumno agregado exitosamente");
}
//Funcion para consultar el registro de alumnos
function consultar(){
    //Recorremos el registro y mostramos los detalles de cada uno
    for(var i = 0; i < registro.length; i++){
        //Mostramos cada dato del alumno en la consola
        console.log("Nombre:" + registro[i].nombre);
        console.log("Edad:" + registro[i].edad);
        console.log("Zona de residencia:" + registro[i].zonaResidencia);
        console.log("Nombre del programa:" + registro[i].nombrePrograma);
        console.log("Correo del alumno:" + registro[i].email);
    };
}


function eliminarAlumno(){
    var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");

    registro = registro.filter(alumno => alumno.nombre !==nombreAeliminar);



}


do{

var opcion = prompt("Seleccione una opcion: \n1.Incluir registro \n2.Consultar registro de alumnos \n3. Eliminar registro \n4 Salir");

if (opcion === "1"){
    incluir();
} else if(opcion === "2"){
    consultar();
}else if(opcion === "3"){
    eliminarAlumno();
}else if("Salida"){
    alert("Salir del sistema");
} else{
    alert("Opcion invalida, elige otra");
}


var continuar = prompt("¿Deseas hacer otra accion? (S/N)");

}while(continuar === "s");








