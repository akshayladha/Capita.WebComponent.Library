export class CCProgressBar extends HTMLElement {

  constructor() {
    super();

    this.shadow = this.attachShadow({mode: 'open'});
    this._complete=this.getAttribute('complete');
  }

  get complete() {
    return this._complete;
  }

  set complete(val) {
    this.setAttribute('complete', val);
  }

  static get observedAttributes() {
    return [ 'complete' ];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    var innerBar = this.shadow.querySelector('.cc-progress-bar-inner');

    switch(name) {
      case 'complete':
        this._complete = parseInt(newVal, 10) || 0;

        if(innerBar !== null){
          innerBar.style.width = this.complete + '%';
          innerBar.innerHTML = this.complete + '%';
        }
    }
  }

  connectedCallback() {
    var template = `
      <style>
        .cc-progress-bar {
          width: 50%;
          height: 30px;
          background-color: #EDF2F4;
          border-radius: 5px;
          color: #FFF;
        }

        .cc-progress-bar-inner {
          height: 100%;
          line-height: 30px;
          background: #0069d9;
          text-align: center;
          border-radius: 5px;
          transition: width 0.25s;
        }
      </style>
      <div class="cc-progress-bar">
        <div class="cc-progress-bar-inner">${this._complete}%</div>
      </div>
    `;

    this.shadow.innerHTML = template;

    var progress = this.shadow.querySelector('.cc-progress-bar-inner');

    if(this._complete !== undefined){
      progress.style.width = this._complete + '%';
    }
  }

}
