import { LitElement, html, css } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import brandLogo from "../../assets/brand/logo-lockup.svg?raw";
import { classMap } from "lit/directives/class-map.js";
export class SuperHeader extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }
    header {
      background-color: var(--gc-crema-50);
      z-index: 10;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      padding: 1rem;
      gap: 1rem;
      min-height: 80px;
      color: var(--gc-verde-700);
      border-bottom: 1px solid rgba(31, 58, 46, 0.14);
    }
    header > .nav {
      display: flex;
      width: 100%;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--gc-crema-50);
      visibility: hidden;
      opacity: 0;
      transform: translateY(14px);
      pointer-events: none;

      @media (min-width: 992px) {
        padding-right: 8rem;
        visibility: visible;
        opacity: 1;
        transform: none;
        pointer-events: auto;
        position: relative;
      }
    }
    header > .nav.show {
      visibility: visible;
      opacity: 1;
      transform: none;
      pointer-events: auto;
      border-top: 1px solid rgba(31, 58, 46, 0.14);
      animation: gcUp 0.18s ease both;

      @media (min-width: 992px) {
        border-top: 1px solid transparent;
        animation: none;
      }
    }
    header > .nav > ul {
      list-style: none;
      display: flex;
      width: 100%;
      margin: 0;
      padding: 0;
      flex-direction: column;
      @media (min-width: 992px) {
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
      }
    }
    header > .nav > ul > li {
      border-bottom: 1px solid var(--gc-verde-100);
      cursor: pointer;
      @media (min-width: 992px) {
        border-bottom: 1px solid transparent;
      }
    }
    header > .nav > ul > li:hover > a {
      color: var(--gc-terra-300);
    }
    header > .nav > ul > li > a {
      font-family: var(--gc-f-archivo);
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
    }
    header > .nav > ul > li > a {
      color: var(--gc-verde-700);
      padding: 1rem;
      display: flex;
      width: 100%;
      line-height: 1;
    }
    .hamburger {
      display: flex;
      @media (min-width: 992px) {
        display: none;
      }
    }

    .hamburger > button {
      width: 44px;
      height: 44px;
      border: 1px solid rgba(31, 58, 46, 0.2);
      border-radius: var(--gc-r-small);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--gc-r-soft);
      cursor: pointer;
    }
    .hamburger > button > span {
      width: 18px;
      height: 1.8px;
      background: var(--gc-verde-700);
      display: block;
    }
    .brand {
      width: 100%;
      max-width: 200px;
      @media (min-width: 992px) {
        max-width: 188px;
      }
    }

    @keyframes gcUp {
      0% {
        opacity: 0;
        transform: translateY(14px);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
  `;

  static properties = {
    isMenuOpen: { state: true },
  };

  constructor() {
    super();
    this.isMenuOpen = false;
  }

  handleToggleHamburger = () => {
    this.isMenuOpen = !this.isMenuOpen;
  };

  render() {
    const isInViews = window.location.pathname.includes("/views/");
    const homeHref = isInViews ? "../index.html" : "./index.html";
    const productosHref = isInViews ? "./productos.html" : "./views/productos.html";
    const nosotrosHref = isInViews ? "./nosotros.html" : "./views/nosotros.html";

    return html`<header>
      <a href="${homeHref}">
        <div class="brand">${unsafeSVG(brandLogo)}</div>
      </a>
      <nav
        class=${classMap({
          nav: true,
          show: this.isMenuOpen,
        })}
      >
        <ul>
          <li>
            <a href="${homeHref}">Incio</a>
          </li>
          <li>
            <a href="${productosHref}">Catalogo</a>
          </li>
          <li>
            <a href="${nosotrosHref}">Nosotros</a>
          </li>
        </ul>
      </nav>
      <div class="hamburger">
        <button @click=${this.handleToggleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>`;
  }
}

customElements.define("super-header", SuperHeader);
