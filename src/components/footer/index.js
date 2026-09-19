import { LitElement, html, css } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import brandLogo from "../../assets/brand/logo-lockup.svg?raw";
import { classMap } from "lit/directives/class-map.js";
export class SuperFooter extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    footer {
      width: 100%;
      height: 80px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--gc-crema-100);
    }
    .brand {
      font-family: var(--gc-f-newsreader);
      font-weight: 400;
      font-size: 20px;
      color: var(--gc-verde-900);
    }
    .cpw {
      font-family: var(--gc-f-archivo);
      font-weight: 400;
      font-size: 10px;
      color: var(--gc-verde-500);
      opacity: 0.5;
    }
  `;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`<footer>
      <p class="brand">The Green Corner</p>
      <span class="cpw">Derechos reservados</span>
    </footer>`;
  }
}

customElements.define("super-footer", SuperFooter);
