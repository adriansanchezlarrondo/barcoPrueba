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
                    divCelda += `<div id="${i}${j}" class="celda bg-dark bg-gradient border-secondary"></div>`
                } else if (panel.matriz[i][j] ==     1) {
                    divCelda += `<div id="${i}${j}" data-barco="${i}${j}" class="celda bg-dark bg-gradient border-secondary"></div>`
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
    insertaBarcos: () => {

        for (let i = 0; i < barcos.length; i++) {
            const barco = barcos[i];
            console.log('BARCOS', barco);
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
        // panel.pintaBarcos()
    },
    verificarBarco: (event) => {
        const btnCelda = event.target;
        const btnBarcoID = btnCelda.dataset.barco;

        if (btnBarcoID) {
            console.log('TOCADO')
            btnCelda.classList.remove('bg-dark')
            btnCelda.classList.add('bg-danger')
        } else {
            console.log('AGUA');
            btnCelda.classList.remove('bg-dark')
            btnCelda.classList.add('bg-primary')
        }
    },
    pintaBarcos: () => {
        const idPanelBarcos1 = document.querySelector('#panelBarcos1')
        idPanelBarcos1.innerHTML = ''

        for (let i = 0; i < barcos.length; i++) {
            const barco = barcos[i];
            let divFila = '<div class="fila d-flex justify-content-center">'

            for (let j = 0; j < barco.length; j++) {
                
                const filaBarco = barco[j];
                
                for (let k = 0; k < filaBarco.length; k++) {
                    let divCelda = ''
                    if (filaBarco[k] === 1) {
                        divCelda += `<div class="celda bg-dark bg-gradient border-secondary"></div>`
                    }
                    divFila += divCelda
                }
                
            }
            divFila += '</div>'
            idPanelBarcos1.innerHTML += divFila

        }
    }
}