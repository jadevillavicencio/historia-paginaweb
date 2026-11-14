
const datosLideres = {
    hitler: {
        texto: "<strong>Adolf Hitler (Alemania Nazi):</strong> Subió al poder en 1933 aprovechando la crisis de 1929 y el Tratado de Versalles. Se alió con Mussolini, pactó temporalmente con Stalin y desató la guerra contra Churchill y Roosevelt.",
        conectados: ["mussolini", "stalin", "churchill", "roosevelt"]
    },
    mussolini: {
        texto: "<strong>Benito Mussolini (Italia Fascista):</strong> Creó el fascismo tras la 'Victoria Mutilada'. Fue inspiración inicial para Hitler y arrastró a Italia a una guerra para la que no estaba preparada.",
        conectados: ["hitler", "churchill"]
    },
    stalin: {
        texto: "<strong>Iósif Stalin (URSS):</strong> Líder soviético. Firmó el Pacto Ribbentrop-Mólotov con Hitler, pero tras la invasión alemana de 1941 se unió a Churchill y Roosevelt, logrando la victoria clave en Stalingrado.",
        conectados: ["hitler", "churchill", "roosevelt"]
    },
    churchill: {
        texto: "<strong>Winston Churchill (Reino Unido):</strong> Primer Ministro británico. Resistió los ataques alemanes en 1940 y mantuvo firme la alianza con Roosevelt y Stalin para derrotar al Eje.",
        conectados: ["hitler", "mussolini", "stalin", "roosevelt"]
    },
    roosevelt: {
        texto: "<strong>Franklin D. Roosevelt (EE. UU.):</strong> Presidente estadounidense. Tras el ataque a Pearl Harbor, convirtió a su país en el 'Arsenal de la Democracia' junto a Churchill y Stalin.",
        conectados: ["hitler", "stalin", "churchill"]
    }
};


function verLider(liderElegido) {
    

    document.getElementById("nodo-hitler").classList.remove("activo", "conectado");
    document.getElementById("nodo-mussolini").classList.remove("activo", "conectado");
    document.getElementById("nodo-stalin").classList.remove("activo", "conectado");
    document.getElementById("nodo-churchill").classList.remove("activo", "conectado");
    document.getElementById("nodo-roosevelt").classList.remove("activo", "conectado");


    document.getElementById("nodo-" + liderElegido).classList.add("activo");

   
    let listaConectados = datosLideres[liderElegido].conectados;

    for (let i = 0; i < listaConectados.length; i++) {
        let nombreConectado = listaConectados[i];
        document.getElementById("nodo-" + nombreConectado).classList.add("conectado");
    }

    
    document.getElementById("panel-conexion").innerHTML = datosLideres[liderElegido].texto;
}


const listaBatallas = [
    {
        frente: "occidental",
        titulo: "Día D (Operación Overlord)",
        fecha: "6 de junio de 1944",
        lugar: "Normandía, Francia",
        resultado: "Victoria aliada. Se abrió el frente occidental para liberar Francia."
    },
    {
        frente: "occidental",
        titulo: "Batalla de las Ardenas",
        fecha: "16 dic. 1944 - 25 ene. 1945",
        lugar: "Bélgica y Luxemburgo",
        resultado: "Última gran contraofensiva alemana contenida por los Aliados."
    },
    {
        frente: "oriental",
        titulo: "Batalla de Stalingrado",
        fecha: "17 jul. 1942 - 2 feb. 1943",
        lugar: "Stalingrado, URSS",
        resultado: "Victoria soviética decisiva. El avance alemán fue detenido."
    },
    {
        frente: "pacifico",
        titulo: "Bombardeo a Pearl Harbor",
        fecha: "7 de diciembre de 1941",
        lugar: "Hawái, EE. UU.",
        resultado: "Ataque japonés que provocó la entrada directa de EE. UU. a la guerra."
    },
    {
        frente: "pacifico",
        titulo: "Bombas Atómicas (Hiroshima y Nagasaki)",
        fecha: "6 y 9 de agosto de 1945",
        lugar: "Hiroshima y Nagasaki, Japón",
        resultado: "Rendición incondicional de Japón el 15 de agosto y fin de la guerra."
    }
];

function filtrarBatallas() {
    let frenteSeleccionado = document.getElementById("select-frente").value;
    let caja = document.getElementById("caja-batallas");
    caja.innerHTML = ""; // Limpiamos la caja antes de dibujar

    for (let i = 0; i < listaBatallas.length; i++) {
        let batalla = listaBatallas[i];

        if (frenteSeleccionado === "todos" || batalla.frente === frenteSeleccionado) {
            caja.innerHTML += `
                <div class="tarjeta">
                    <h4>${batalla.titulo}</h4>
                    <p><strong>Fecha:</strong> ${batalla.fecha}</p>
                    <p><strong>Lugar:</strong> ${batalla.lugar}</p>
                    <p><strong>Resultado:</strong> ${batalla.resultado}</p>
                </div>
            `;
        }
    }
}


window.onload = function() {
    filtrarBatallas();
};