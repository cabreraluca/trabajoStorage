const tablaDePosiciones = JSON.parse(localStorage.getItem('tablaDePosicionesJSON') || "[]");
window.onload = mostrarTabla;

class Jugador{
    constructor(nombre, puntos, diferencia){
        this.id = tablaDePosiciones.length + 1;
        this.nombre = nombre;
        this.puntos = puntos;
        this.diferencia = diferencia;
    }
}
const botonAgregar = document.getElementById("btn");
botonAgregar.addEventListener('click', agregar);

function agregar(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const puntos = document.getElementById("puntos").value;
    const diferencia = document.getElementById("diferencia").value;
    tablaDePosiciones.push(new Jugador(nombre, puntos, diferencia));
    localStorage.setItem('tablaDePosicionesJSON', JSON.stringify(tablaDePosiciones));

    mostrarTabla(tablaDePosiciones);

}

function mostrarTabla() {
    const tabla = JSON.parse(localStorage.getItem('tablaDePosicionesJSON') || "[]");

    const tablaImpresa = document.getElementById("respuestaBotonImprimir");
    tablaImpresa.innerHTML = "";
    for (const jugador of tabla) {
        const div = document.createElement("div");
        div.innerHTML = `
			<div class="jugador">
				<h3>Jugador: ${jugador.nombre}</h3>
				<p>Puntos: ${jugador.puntos}<p>
				<p>Diferencia: ${jugador.diferencia}<p>
			</div>
		`;

        tablaImpresa.appendChild(div);
    }
}
