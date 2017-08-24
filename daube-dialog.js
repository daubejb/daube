(function() {
  let thisImportDoc = document.currentScript.ownerDocument;
  class DaubeDialog extends HTMLElement {
    static get observedAttributes() {
      return ['display'];
    }
    get display() {
      return this.hasAttribute('display');
    }

    set display(val) {
      if (val) {
        this.setAttribute('display', '');
      } else {
        this.removeAttribute('display');
      }
    }
    attributeChangedCallback (atrValue, oldValue, newValue) {
      if (atrValue === 'display') {
        this.toggleDisplay();
        console.log('display toggled');
      }
    }
    constructor() {
      super();
      var shadowRoot = this.initShadowDom();
    }
    static get template() {
      return `<link rel="stylesheet" href="../shared.css">
<style>
  #dialogmodal {
    position: absolute;
    border-radius: 3px;
    box-shadow:  0px 11px 15px -7px rgba(0, 0, 0, 0.2),
                  0px 24px 38px 3px rgba(0, 0, 0, 0.14),
                  0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    padding: 2rem;
    background-color: white;
    margin: auto;
    width: 40rem;
    height: 13rem;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  #entirescreen {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
  }
</style>
<div id="entirescreen" style="display: none;"></div>
<div id="dialogmodal" style="display: none;">
  <h3 id="question">Ready to go?</h3>
  <p id="message">Please click continue to proceed.</p>
  <slot name="negative"></slot>
  <slot name="positive"></slot>
</div>
`
    }
    connectedCallback() {
      var entirescreen = this.shadowRoot.querySelector("#entirescreen");
      entirescreen.addEventListener('click', e => {
        console.log('entire screen clicked');
        this.removeAttribute('display');
      })
    }
    initShadowDom() {
      let shadowRoot = this.attachShadow({mode: 'open'});
      let tmpl = DaubeDialog.template;
      shadowRoot.innerHTML = tmpl;
      return shadowRoot;
    }

    toggleDisplay() {
      var dialogModal = this.shadowRoot.querySelector('#dialogmodal');
      var entirescreen = this.shadowRoot.querySelector('#entirescreen');
      if (this.display) {
        dialogModal.style.display = 'block';
        entirescreen.style.display = 'block';
      } else {
        dialogModal.style.display = 'none';
        entirescreen.style.display = 'none';
      }
    }
  } // Class DaubeDialog
  customElements.define('daube-dialog', DaubeDialog)
})();
