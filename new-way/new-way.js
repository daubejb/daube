(function() {
  let thisImportDoc = document.currentScript.ownerDocument;
  class NewWay extends HTMLElement {
    static get observedAttributes() {}
    static get template() {
      return `
        <h1>Hello string literal</h1>
        <p>This is a new way to think</p>
      `;
    }
    constructor() {
      super();
      var shadowRoot = this.initShadowDom();
    }
    connectedCallback() {}
    initShadowDom() {
      let shadowRoot = this.attachShadow({mode: 'open'});
      let tmpl = NewWay.template;
      shadowRoot.innerHTML = tmpl;
      return shadowRoot;
    }
  } // Class DaubeInputText
  customElements.define('new-way', NewWay)
})();