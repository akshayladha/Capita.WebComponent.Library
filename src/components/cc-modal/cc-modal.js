const templateString = `
    <style>
    @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css';
    
    .overlay {
        opacity: 1;
        visibility: visible;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.42);
        -webkit-transition: opacity 0.5s;
        transition: opacity 0.5s;
        display: flex;
        align-items: center; 
        justify-content: center;
    }

    .overlay-hidden {
        opacity: 0;
        visibility: hidden;
        -webkit-transition: opacity 0.5s, visibility 0s 0.5s;
        transition: opacity 0.5s, visibility 0s 0.5s;
    }

    .modal-header {
        padding: 5px 10px;
    }
    .modal-header .close {
        padding: 3px 10px;
        margin: 0px;
    }
    </style>
    <div class="overlay overlay-hidden">
    <div class="overlay-content modal fade show">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            </div>
        </div>
    </div>
    </div>
`;
const template = document.createElement('template');
template.innerHTML = templateString;

export class CCModal extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
        this._overlay = shadowRoot.querySelector('.overlay');
        this._content = shadowRoot.querySelector('.overlay-content');
        this._modalTitle = shadowRoot.querySelector('.modal-title');
        this._modalBody = shadowRoot.querySelector('.modal-body');
        this._close = shadowRoot.querySelector('.close');
    }

    open() {
        const that = this;
        const container = this._content;
        this._overlay.classList.remove('overlay-hidden');
        this._modalTitle.innerHTML = that.getAttribute('header');
        container.style = "display:block";

        this._close.onclick = function () {
            that.close();
        }
    }

    close() {
        this._overlay.classList.add('overlay-hidden');
        this._content.style = "";
    }

    connectedCallback() {
        this._modalBody.innerHTML = this.innerHTML;
    }
}
