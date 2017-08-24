
(function() {
  let thisImportDoc = document.currentScript.ownerDocument;
  class DaubeRadio extends HTMLElement {
    static get observedAttributes() {}
    constructor() {
      super();
      var shadowRoot = this.initShadowDom();
    }
    static get template() {
      return `
<style>
  :host { font-size: 1rem; }
  /* State - idle + empty **************************/
  #radiogroup {
    margin: 2rem 0;
    display: block;
    position: relative;
    max-width: 45rem;
  }
  #radios {
    padding-top: 1.5rem;
    display: block;
  }
  #radiogrouptitle {
    position: absolute;
    font-size: 0.95rem;
    top: 0rem;
    background-color: rgba(0,0,0,0);
    color: rgba(0,0,0,0.54);
    pointer-events: none;
  }
  input {
    background-color: rgba(0,0,0,0);
    display: inline-block;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 0.4rem;
    border: none;
    line-height: 1.15;
    border-bottom: 1px solid rgba(0,0,0,0.42);
    height: 1.5rem;
    width: 1.5rem;
  }
  label {
    font-size: 0.95rem;
    color: rgba(0,0,0,0.87);
    opacity: 0.87;
    margin-bottom: 1rem;
    vertical-align: middle;
    display: inline-block;
  }
  input:hover, {
    border: 2px solid #237d32;
  }
  input:checked+label {
    color: #237d32;
  }
</style>
<div id="radiogroup">
  <div id="radios">
    <input type="radio" id="radio1" name="radiogroup" value="option 1"><label id="radiovalue1">Option 1</label><br>
    <input type="radio" id="radio2" name="radiogroup" value="option 2"><label id="radiovalue2">Option 2</label><br>
  </div>
  <div id="radiogrouptitle">Radio Group</div>
</div>`
    }
    connectedCallback() {}
    initShadowDom() {
      let shadowRoot = this.attachShadow({mode: 'open'});
      let tmpl = DaubeRadio.template;
      shadowRoot.innerHTML = tmpl;
      return shadowRoot;
    }
  } // Class DaubeRadio
  customElements.define('daube-radio', DaubeRadio)
})();