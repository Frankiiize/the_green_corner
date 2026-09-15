import { LitElement, html, css } from "lit";
export class SuperCard extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    .card {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: var(--gc-white);
      position: relative;
      border-radius: var(--gc-r-medium);
      overflow: hidden;
    }
    .card__header {
      display: flex;
      width: 100%;
    }

    .card__header__background {
      width: 100%;
      height: 100%;
      max-height: 300px;
      display: flex;
    }

    .card__header__background > img {
      width: 100%;
      object-fit: cover;
    }
    .card__body {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
    .card__body__info {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .card__body__info--title {
      font-family: var(--gc-f-archivo);
      font-size: 26px;
      font-weight: 400;
      line-height: 1.02;
      letter-spacing: -0.02rem;
    }
    .card__body__info--description {
      font-family: var(--gc-f-archivo);
      font-weight: 400;
      line-height: 1.65;
      letter-spacing: -0.02rem;
      color: var(--gc-verde-700);
      opacity: 0.8;
      @media (min-width: 768px) {
        font-size: 1.1rem;
      }
      @media (min-width: 992px) {
        font-size: 1.3rem;
      }
    }

    .card__body__footer {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      gap: 1rem;
    }
    .card__body__footer__actionBtns {
      max-width: 200px;
      width: 100%;
    }
    .card__body__footer__price {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: flex-start;
    }
    .card__body__footer--full {
      font-family: var(--gc-f-archivo);
      font-weight: 600;
      line-height: 1.65;
      letter-spacing: -0.02rem;
      color: var(--gc-verde-700);
      font-size: 1.3rem;
    }
    .card__body__footer--discount {
      font-family: var(--gc-f-archivo);
      font-weight: 600;
      line-height: 1.65;
      letter-spacing: -0.02rem;
      color: var(--gc-verde-700);
      opacity: 0.3;
      text-decoration: line-through;
      @include bp.breakpoint("md") {
        font-size: 1.1rem;
      }
      @include bp.breakpoint("lg") {
        font-size: 1.3rem;
      }
    }
  `;

  static properties = {
    // isMenuOpen: { state: true },
    title: { attribute: "s-title" },
    description: { attribute: "s-description" },
    price: { attribute: "s-price" },
    discount: { attribute: "s-discount" },
  };

  constructor() {
    super();
    // this.isMenuOpen = false;
    this.title = "";
    this.price = 0;
    this.description = "";
    this.currency = "$";
    this.discount = 0;
  }

  handleToggleHamburger = () => {
    // this.isMenuOpen = !this.isMenuOpen;
  };

  render() {
    return html` <div class="card">
      <div class="card__header">
        <slot name="badge"></slot>
        <div class="card__header__background">
          <img src="./assets/png/hero-img.png" />
        </div>
      </div>
      <div class="card__body">
        <div class="card__body__info">
          <p class="card__body__info--title">${this.title}</p>
          <p class="card__body__info--description">${this.description}</p>
        </div>
        <div class="card__body__footer">
          <div class="card__body__footer__price">
            <span class="card__body__footer--full">${this.currency}${this.price}</span>
            <span class="card__body__footer--discount">${this.currency}${this.discount}</span>
          </div>
          <div class="card__body__footer__actionBtns">
            <slot name="button"></slot>
          </div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("super-card", SuperCard);
