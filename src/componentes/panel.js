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

        console.log('idBarco', panel.idBarco);
        for (let i = 0; i < panel.matriz.length; i++) {
            let divFilas = '<div class="fila d-flex justify-content-center">'
            
            for (let j = 0; j < panel.matriz[i].length; j++) {
                let divCelda = ''

                if (panel.matriz[i][j] == 0) {
                    divCelda += '<div class="celda bg-primary bg-gradient border-secondary"></div>'
                }

                if (panel.matriz[i][j] == 1) {
                    divCelda += `<div id="${panel.idBarco}" class="celda bg-dark bg-gradient border-secondary"></div>`
                }

                divFilas += divCelda

            }
            divFilas += '</div>'
            idPanel.innerHTML += divFilas
        }
    },
    idBarco: 0,
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
                        
                        panel.idBarco += 1
                        console.log('idBarco', panel.idBarco);
                    }
                }

            }
        }

        panel.pintaPanel()
    },
}