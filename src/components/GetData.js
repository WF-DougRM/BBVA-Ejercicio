import { LitElement} from 'lit-element';

export class GetData extends LitElement{

    static get properties(){
        return{
            url: {type: String},
            metho: {type: String}
        }
    }

    firstUpdated(){
        this.GetData();
    }

    _sendData(data){
        this.dispatchEvent(new CustomEvent ('ApiData',{
            detail: {data}, bubbles: true, composed:true
        }));
    }

    GetData(){
        fetch(this.url, {method: this.method} )
        .then ((response) => {
            if (response.ok) return response.json();
            return Promise.reject(response);
        })
        .then((data) => {this._sendData(data);})
        .catch((error) => {console.warn("Ah ocurrido algun error", error);})
    }
}

customElements.define('get-data',GetData);