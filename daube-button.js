(function() {
  let thisImportDoc = document.currentScript.ownerDocument;
  class DaubeButton extends HTMLElement {
    static get observedAttributes() {}
    constructor() {
      super();
      var shadowRoot = this.initShadowDom();
    }
    static get template() {
      return`
<style>
:host {
  display: block;
}
button {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-color: #237d32;
  border-radius: 2px;
  height: 2.25rem;
  background-color: #237d32;
  color: white;
  cursor: pointer;
  float: right;
  padding: 0 .2rem 0 .2rem;
}
button:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  opacity: 0.9;
}
</style>
<button>Action</button>
`
    }
    connectedCallback() {
      var daubeButton = this.shadowRoot.querySelector('button');
      daubeButton.addEventListener('click', this.onClick);

    }
    onClick(e) {
      this.dispatchEvent(new CustomEvent('daube-button-clicked',
        {bubbles: true, composed: true}));
        console.log('daube button on click event dispatched');
    }
    initShadowDom() {
      let shadowRoot = this.attachShadow({mode: 'open'});
      let tmpl = DaubeButton.template;
      shadowRoot.innerHTML = tmpl;
      return shadowRoot;
    }
  } // Class DaubeInputText
  customElements.define('daube-button', DaubeButton);
})();
