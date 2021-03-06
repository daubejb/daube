(function() {
  let thisImportDoc = document.currentScript.ownerDocument;
  class DaubeInputText extends HTMLElement {
    static get observedAttributes() {
      //TODO - input has to be required for styles to work - figure this out later
      //TODO - implement autocomplete
      //TODO - implement autofocus
      //TODO - implement form
      //TODO - implement inputmode
      //TODO - implement pattern
      //TODO - implement value
      //TODO - implement Helper text
      return ['label', 'disabled', 'name', 'required', 'autocomplete'];
    }

    get name() {
      return this._name;
    }

    set name(v) {
      if (this._name === v) return;
      this._name = v;
      this.setAttribute('name', v);
    }

      get label() {
      return this._label;
    }

    set label(v) {
      if (this._label === v) return;
      if (v) {
        this.setAttribute('label', v);
      } else {
        this.removeAttribute('label');
      }
    }

    get disabled() {
      return this.hasAttribute('disabled');
    }

    set disabled(v) {
      if (v) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }

    get required() {
      return this.hasAttribute('required');
    }

    set required(v) {
      if (v) {
        this.setAttribute('required', '');
      } else {
        this.removeAttribute('required');
      }
    }

    get autocomplete() {
      return this.hasAttribute('autocomplete');
    }

    set autocomplete(v) {
      if (v) {
        this.setAttribute('autocomplete', 'yes');
      } else {
        this.removeAttribute('autocomplete');
      }
    }
    attributeChangedCallback (atrValue, oldValue, newValue) {
      if (atrValue === 'disabled') {
        this.toggleDisabled();
        console.log('disabled changed');
        }
      if (atrValue === 'required') {
        this.toggleRequired();
        console.log('required changed');
        }
      if (atrValue === 'autocomplete') {
        this.toggleAutocomplete();
        console.log('autocomplete changed');
        }
      if (atrValue === 'name') {
        this.processName();
        console.log('name changed');
        }
      if (atrValue === 'label') {
        this.processLabel();
        console.log('label changed');
        }
    }

    constructor() {
      super();
      var shadowRoot = this.initShadowDom();
      var name = '';
    }

    static get template() {
      return`
<style>
  :host { font-size: 1rem; }
  /* State - idle + empty **************************/
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
    width: 100%;
    font-size: 1rem;
    color: rgba(0,0,0,0.87);
  }
  label {
    position: absolute;
    font-size: 0.95rem;
    top: 0rem;
    background-color: rgba(0,0,0,0);
    color: rgba(0,0,0,0.54);
    pointer-events: none;
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
    color: rgba(255,255,255,0.87);
  }
  input:disabled, label:disabled {
    border-bottom: 1px dashed rgba(0,0,0,0.42);
    color: rgba(0,0,0,0.25);
  }
  /* TODO State - error ***************************/
  /* NEVER USE PLACEHOLDERS ***********************/
  ::-webkit-input-placeholder { color: rgba(0,0,0,0); } /* Chrome/Opera/Safari */
  ::-moz-placeholder { color: rgba(0,0,0,0); } /* Firefox 19+ */
  :-ms-input-placeholder { color: rgba(0,0,0,0); } /* IE 10+ */
  :-moz-placeholder { color: rgba(0,0,0,0); } /* Firefox 18- */
</style>
<div id="inputdiv">
  <input type="text" name="demo" required/>
  <label for="demo">Demo Label:</label>
</div>
`
    }
    connectedCallback() {}

    initShadowDom() {
      let shadowRoot = this.attachShadow({mode: 'open'});
      let tmpl = DaubeInputText.template;
      shadowRoot.innerHTML = tmpl;
      return shadowRoot;
    }

    getLabel() {
      return this.shadowRoot.querySelector('label');
    }

    getInput() {
      return this.shadowRoot.querySelector('input');
    }

    toggleDisabled() {
      var label = this.getLabel();
      var input = this.getInput();
      if (this.disabled) {
        label.setAttribute('disabled', '');
        input.setAttribute('disabled', '');
      } else {
        label.removeAttribute('disabled');
        input.removeAttribute('disabled');
      }
    }

    toggleRequired() {
      var input = this.getInput();
      if (this.required) {
        input.setAttribute('required', '');
      } else {
        input.removeAttribute('required');
      }
    }

    toggleAutocomplete() {
      var input = this.getInput();
      if (this.autocomplete) {
        input.setAttribute('autocomplete', 'yes');
      } else {
        input.removeAttribute('autocomplete');
      }
    }
    
    processName() {
      var input = this.getInput();
      if (!this.hasAttribute('name')) {
        input.removeAttribute('name');
      } else {
      input.setAttribute('name', this.getAttribute('name'));
      }
    }

    processLabel() {
      var label = this.getLabel();
      label.innerHTML = this.getAttribute('label')
    }

  } // Class DaubeInputText
  customElements.define("daube-input-text", DaubeInputText)
})();