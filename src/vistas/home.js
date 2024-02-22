import { panel } from '../componentes/panel'

export const home = {
  template: // html
    `
      <div id="intro" class="text-center p-5">
        <div class="d-flex justify-content-center">
            <div id="panel" class="p-5"></div>
        </div>
          <p>Amb la fletxa avall pots girar la peça</p>
          
          <p>'<strong>Ñ</strong>' per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta)</p>
          
          <p>Al final de la partida podràs desar la teva puntuació, i verue el ranking de jugadors</p>
          
          <button id="btnJuego" class="btn btn-success fs-1 mt-5">JUGAR</button>
          <hr/>
      </div>
    `,
  script: () => {
    panel.pintaPanel()
    panel.pintaBarcos()
  }
}  