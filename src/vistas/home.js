import { panel } from '../componentes/panel'

export const home = {
  template: // html
    `
    <div id="intro" class="text-center p-5">
        <div class="row">
          <div class="col-4 d-flex justify-content-center">
              <div id="panelBarcos1" class="p-5">Hola</div>
          </div>
          <div class="col-4 d-flex justify-content-center">
              <div id="panel" class="p-5"></div>
          </div>
          <div class="col-4 d-flex justify-content-center">
              <div id="panelBarcos2" class="p-5">Hola</div>
          </div>
        </div>
        <p>Vamos a jugar a hundir la flota o batalla naval</p>
        
        <p>Empieza a clicar en la posición donde crees que estan los barcos</p>
                  
        <hr/>
    </div>
    `,
  script: () => {
    // panel.pintaPanel()
    panel.insertaBarcos()
    panel.pintaBarcos()
  }
}  