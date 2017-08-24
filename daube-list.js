(function() {
  let thisImportDoc = document.currentScript.ownerDocument;
  class DaubeList extends HTMLElement {
    static get observedAttributes() {}
    constructor() {
      super();
      var shadowRoot = this.initShadowDom();
    }
    static get template() {
      return `
<style>
  :host { font-size: 1rem; }
  table {
    width: 100%;
  }
  thead tr th {
    font-size: 0.95rem;
    color: rgba(0,0,0,0.54);
  }
  tbody tr:hover{
    background-color: rgba(0,0,0,0.05);
  }
  tbody tr td, .bookroom {
    border-top: 1px solid rgba(0,0,0,0.2);
    color: rgba(0,0,0,0.87);
    text-align: center;
    padding-top: .35rem;
    padding-bottom: .3rem;
  }

  .bookroom {
    font-size: 2rem;
  }
  .bookroom:hover {
    cursor: pointer;
    color: #237d32;
    font-size: 2rem;
  }
  .alignleft {
    text-align: left;
  }


  tbody tr td.no {
    color: rgba(0,0,0,0.25);
  }
</style>
<slot></slot>
<table>
  <thead>
    <tr>
      <th class="alignleft">Name</th>
      <th>This hour</th>
      <th>Next 30 minutes</th>
      <th>Next hour</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="alignleft">14-14n120-avLab</td>
      <td class="bookroom">▢</td>
      <td class="bookroom">▢</td>
      <td class="no">—</td>
    </tr>
    <tr>
      <td class="alignleft">20W204-roof</td>
      <td class="no">—</td>
      <td class="bookroom">▢</td>
      <td class="bookroom">▢</td>
    </tr>
    <tr>
      <td class="alignleft">20e351-rooftop</td>
      <td class="bookroom">▢</td>
      <td class="no">—</td>
      <td class="no">—</td>
    </tr>
    <tr>
      <td class="alignleft">9s410-shadowman-14-p-vc</td>
      <td class="bookroom">▢</td>
      <td class="bookroom">▢</td>
      <td class="no">—</td>
    </tr>
  </tbody>
</table>
`
    }
    connectedCallback() {}
    initShadowDom() {
      let shadowRoot = this.attachShadow({mode: 'open'});
      let tmpl = DaubeList.template;
      shadowRoot.innerHTML = tmpl;
      return shadowRoot;
    }
  } // Class DaubeInputText
  customElements.define('daube-list', DaubeList)
})();
