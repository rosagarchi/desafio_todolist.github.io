let tareas = [];


function generarNumeroAleatorio() {
  return Math.floor(Math.random() * (99 - 1 + 1)) + 1;
}

function agregar() {
  const input = document.getElementById("tarea-nueva");
  const nuevaTarea = { id: generarNumeroAleatorio(), tarea: input.value, completada: false };
  tareas.push(nuevaTarea);
  mostrarTareas(tareas);
  input.value = '';
}

function mostrarTareas(tareasValores) {
  let lista = document.getElementById("tareas");
  lista.innerHTML = '';
  tareasValores.forEach(tarea => {
    incluirTarea(tarea);
  });
  tareas = [...tareasValores];
  resumen();
}

function incluirTarea(tarea) {
  let lista = document.getElementById("tareas");
  const nuevaTarea = document.createElement('li');
  nuevaTarea.innerHTML = `<div class="elemento"><div>${tarea.id}<span class="texto-tarea">${tarea.tarea}</span></div>  <div> <input ${tarea.completada && 'checked'} type="checkbox" onClick="completar(${tarea.id})"/> <i  onClick="borrarTarea(${tarea.id})"  class="fa-solid fa-xmark borrar"></i> </div></div>`;
  lista.appendChild(nuevaTarea);
}

function completar(id) {
  const actualizar = tareas.map((tarea) => {
    if (tarea.id === id) {
      tarea.completada = tarea.completada ? false : true;
    }
    return tarea
  })
  mostrarTareas(actualizar);
} 

function borrarTarea(id) {
  const tareasActuales = tareas.filter(tarea => tarea.id !== id);
  mostrarTareas(tareasActuales);
}

function resumen() {
  let completadas = 0;
  const total = document.getElementById("total-tareas");
  total.innerText = tareas.length;
  tareas.forEach((tarea) => {
    if (tarea.completada) {
      completadas++;
    }
  })
  const tareasRealizadas = document.getElementById("tareas-realizadas");
  tareasRealizadas.innerText = completadas;
}

const boton = document.getElementById('btn-agregar');

boton.addEventListener('click', () => {
  agregar();
});



document.addEventListener("DOMContentLoaded", mostrarTareas);
