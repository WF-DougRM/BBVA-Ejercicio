import { LitElement, html, css } from 'lit-element';
import './components/GetData';


export class CalidadAire  extends LitElement {
  static get properties() {
    return {
            title: {type: String},
            page: {type: String}
    };
  }

  static get styles(){
    return css`
    
    `;
  }

  constructor() {
    super();

    this.addEventListener('ApiData', (e) => {
        //this._dataFormat(e.detail.data);
        console.log(e.detail.data);
    })
  }
 
  _dataFormat(data){
    let describe = [];

    data["results"].forEach((describes) => {
      describe.push({

        id: describes.id,
        stations: describes.stations
      })
    })
    console.log(describe);

  }
  
  render() {
    return html`
      <get-data url="https://api.datos.gob.mx/v1/calidadAire" method="GET"></get-data>
    `;
  }
}