(function() {
  let thisImportDoc = document.currentScript.ownerDocument;
  class DaubeDropList extends HTMLElement {
    static get observedAttributes() {}
    constructor() {
      super();
      var shadowRoot = this.initShadowDom();
    }
    static get template() {
      return`
<style>
  label {
    position: absolute;
    font-size: 0.95rem;
    top: 0rem;
    background-color: rgba(0,0,0,0);
    color: rgba(0,0,0,0.54);
    pointer-events: none;
  }
  #inputdiv {
    margin: 2rem 0;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    position: relative;
    max-width: 45rem;
    height: 3.2rem;
  }
  input {
    background-color: rgba(0,0,0,0);
    position: absolute;
    bottom: 0rem;
    padding: 0.4rem 0 0.4rem 0;
    margin-top: 1.5rem;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.42);
    width: 50%;
    font-size: 1rem;
  }
/* State - hover ********************************/
input:hover {
    border-bottom: 2px solid rgba(0,0,0,0.87);
  }
  input:hover ~ label {
    color: #237d32;
  }

  input:disabled:hover ~ label {
    color: rgba(0,0,0,0.25);
  }
  /* State - focus ********************************/
  input:focus {
    outline:none;
    background: rgba(0,0,0,0.05);
  }
  input:focus ~ label {
    color: #237d32;
  }
  /* State - focus ********************************/
  input:focus {
    border-bottom: 2px solid #237d32;
    color: rgba(0,0,0,.87);
  }
  input:valid {
    color: rgba(0,0,0,0.87);
    opacity: 0.87;
  }
  input:disabled, label:disabled {
    border-bottom: 1px dashed rgba(0,0,0,0.42);
    color: rgba(0,0,0,0.25);
  }
</style>
<div id="inputdiv">
  <input list="options" name="option" >
  <datalist id="options">
    <option value="Option #1"></option>
    <option value="Option #2"></option>
    <option value="Option #3"></option>
    <option value="Option #4"></option>
    <option value="Option #5"></option>
  </datalist>
  <label for="option">Select an option</label>
</div>
`
    }
    connectedCallback() {}
    initShadowDom() {
      let shadowRoot = this.attachShadow({mode: 'open'});
      let tmpl = DaubeDropList.template;
      shadowRoot.innerHTML = tmpl;
      return shadowRoot;
    }
  } // Class DaubeDropList
  customElements.define('daube-drop-list', DaubeDropList)
})();
