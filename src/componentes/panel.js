import { barcos } from "./barcos"

export const panel = {
    matriz: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    pintaPanel: () => {
        const idPanel = document.querySelector('#panel')
        idPanel.innerHTML = ''

        for (let i = 0; i < panel.matriz.length; i++) {
            let divFila = '<div class="fila d-flex justify-content-center">'
            
            for (let j = 0; j < panel.matriz[i].length; j++) {
                let divCelda = ''

                if (panel.matriz[i][j] == 0) {
                    divCelda += `<button id="${i}${j}" class="celda bg-dark bg-gradient border-secondary"></button>`
                } else if (panel.matriz[i][j] > 0) {
                    divCelda += `<button id="${i}${j}" data-barco="${i}${j}" class="celda bg-primary bg-gradient border-secondary"></button>`
                }

                divFila += divCelda

            }
            divFila += '</div>'
            idPanel.innerHTML += divFila
        }

        const celdas = document.querySelectorAll('.celda');
        celdas.forEach(celda => {
            celda.addEventListener('click', panel.verificarBarco);
        });
    },
    pintaBarcos: () => {

        for (let i = 0; i < barcos.length; i++) {
            const barco = barcos[i];
            console.log('barco', barco);
            const randomPositionX = Math.floor(Math.random() * (10 - barco[0].length)); // ANCHURA ARRAY
            const randomPositionY = Math.floor(Math.random() * (10 - barco.length));    // ALTURA ARRAY

            for (let j = 0; j < barco.length; j++) {
                const filaBarco = barco[j];

                for (let k = 0; k < filaBarco.length; k++) {
                    if (filaBarco[k] === 1) {
                        panel.matriz[randomPositionY + j][randomPositionX + k] = 1;
                    }
                }

            }
        }

        panel.pintaPanel()
    },
    verificarBarco: (event) => {
        const btnCelda = event.target;
        console.log('celda', btnCelda);
        const btnBarcoID = btnCelda.dataset.barco;
        console.log('btnBarcoID', btnBarcoID);

        if (btnBarcoID) {
            
        } else {
            console.log('No has hecho clic en un barco.');
        }
    }
}