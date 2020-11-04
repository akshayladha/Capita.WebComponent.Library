import { CCLogin } from './cc-login';
if (!window.customElements.get('cc-login')) {
    window.customElements.define('cc-login', CCLogin);
}
