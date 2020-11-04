import { CCLoader } from './cc-loader';
if (!window.customElements.get('cc-loader')) {
    window.customElements.define('cc-loader', CCLoader);
}