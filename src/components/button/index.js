import { LitElement, html, css } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import brandLogo from "../../assets/brand/logo-lockup.svg?raw";
import { classMap } from "lit/directives/class-map.js";
export class SuperButton extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }
    :host([animate-shake]) {
      button:hover {
        animation: shaking 0.3s 2;
        animation-timing-function: ease-in-out;
      }
    }
    button {
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0;
      margin: 0;
      min-height: 44px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 17px 30px;
      border-radius: 100px;
      font-size: 13px;
      font-weight: 700;
      font-family: var(--gc-f-archivo);
      line-height: 1;
      letter-spacing: 0.05em;
      cursor: pointer;
      color: var(--gc-crema-50);
      transition:
        border-color 0.2s,
        background-color 0.2s;
    }
    @keyframes shaking {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(4px, 2px);
      }
      50% {
        transform: translate(0, 0);
      }
      75% {
        transform: translate(-4px, 2px);
      }
      100% {
        transform: translate(0, 0);
      }
    }

    .primary,
    .primary.icon {
      background: var(--gc-terra-500);
    }
    .primary:hover {
      background: var(--gc-terra-600);
    }
    .primary--outline {
      border: 1px solid rgb(244 241 234 / 35%);
      background-color: transparent;
      color: var(--gc-crema-50);
    }
    .primary--outline:hover {
      border: 1px solid var(--gc-crema-50);
    }

    .secondary {
      background: var(--gc-verde-700);
    }
    .secondary:hover {
      background: var(--gc-terra-500);
    }
    .secondary--outline {
      border: 1px solid rgba(31, 58, 46, 0.22);
      background-color: transparent;
      color: var(--gc-verde-700);
    }
    .secondary--outline:hover {
      border: 1px solid var(--gc-verde-500);
    }
    .tertiary {
      background: var(--gc-white);
      color: var(--gc-verde-900);
    }
    .tertiary:hover {
      background: var(--gc-verde-700);
      color: var(--gc-crema-50);
    }
    .primary--icon,
    .secondary--icon,
    .tertiary--icon {
      padding: 10px 20px;
    }
  `;

  static properties = {
    text: { attribute: "text" },
    variant: { attribute: "variant" },
    outline: { type: Boolean },
    icon: { type: Boolean },
  };

  constructor() {
    super();
    this.variant = "primary";
    this.text = "";
    this.outline = false;
    this.icon = false;
  }

  render() {
    return html`<button
      class=${classMap({
        [this.variant]: !this.outline ? true : false,
        [`${this.variant}--outline`]: this.outline,
        [`${this.variant}--icon`]: this.icon,
      })}
    >
      <slot> ${this.text} </slot>
    </button>`;
  }
}

customElements.define("super-button", SuperButton);
