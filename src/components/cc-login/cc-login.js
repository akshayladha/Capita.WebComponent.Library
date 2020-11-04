const templateString = `
    <style>
    @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css';
    </style>
    <div class="container">
        <div class="row">
        <div class="col-11 col-lg-9 col-xl-8 mx-auto">
            <h3 class="font-weight-400 mb-4">Log In</h3>
            <form id="loginForm" method="post" action="">
            <div class="form-group" id="email">
                <label for="emailAddress">Email Address</label>
                <input type="email" name="email" class="form-control" id="emailAddress" placeholder="Enter Your Email">
                <div class="invalid-feedback">
                    Please provide a valid Email.
                </div>
            </div>
            <div class="form-group" id="password">
                <label for="loginPassword">Password</label>
                <input type="password" name="password" class="form-control" id="loginPassword" placeholder="Enter Password">
                <div class="invalid-feedback">
                    Please provide a valid Password.
                </div>
            </div>
            <div class="row">
                <div class="col-sm text-right"><a class="btn-link" id="forgot" href="">Forgot Password ?</a></div>
            </div>
            <button class="btn btn-primary btn-block my-4" id="loginBtn" type="submit">Login</button>
            </form>
            <p class="text-3 text-center text-muted">Don't have an account? <a class="btn-link" id="signup" href="">Sign Up</a></p>
        </div>
        </div>
    </div>
`;
const template = document.createElement('template');
template.innerHTML = templateString;

export class CCLogin extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.form = shadowRoot.querySelector('#loginForm');
        this.button = shadowRoot.querySelector('#loginBtn');
        this.forgot = shadowRoot.querySelector('#forgot');
        this.signup = shadowRoot.querySelector('#signup');
        this.username = shadowRoot.querySelector('#emailAddress');
        this.password = shadowRoot.querySelector('#loginPassword');
    }

    connectedCallback() {
        this.forgot.href = this.getAttribute('forgot') || '#';
        this.signup.href = this.getAttribute('signup') || '#';
        this.form.action = this.getAttribute('login') || '#';
        const success = this.onsubmit || function () { };
        const username = this.username;
        const password = this.password;
        const that = this;

        this.form.onsubmit = function (e) {
            let flag = true;
            const errorClass = 'is-invalid';
            if (username.value && that.validateEmail(username.value)) {
                username.classList = username.classList.value.replace(errorClass, '');
            }
            else {
                flag = false;
                username.classList += ` ${errorClass}`;
            }

            if (!password.value) {
                flag = false;
                password.classList += ` ${errorClass}`;
            }
            else {
                password.classList = password.classList.value.replace(errorClass, '');
            }

            if (!flag) {
                e.preventDefault();
            }
        }
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}
