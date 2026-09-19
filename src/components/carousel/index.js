import { LitElement, html, css } from "lit";
import "./index.scss";

export class SuperCarousel extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      width: 100%;
      height: auto;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 30px;
      scroll-behavior: smooth;
      scrollbar-color: var(--gc-verde-900) transparent;
      scrollbar-width: thin;

      scroll-snap-type: x mandatory;
      scroll-padding-inline: 0px;

      overscroll-behavior-inline: contain;

      @media (min-width: 576px) {
        scroll-padding-inline: 0px;
      }
    }

    .container {
      width: 100%;
      margin: 2rem 0;
      padding-bottom: 10px;
      white-space: nowrap;
    }

    ::slotted(.item) {
      position: relative;
      display: inline-block;
      width: 100%;
      height: auto;
      padding: 5px !important;
      overflow: hidden;
      border-radius: 20px;
      cursor: pointer;
      transform-origin: center left;
      transition: 450ms all;

      scroll-snap-align: start;
      scroll-snap-stop: always;
    }

    :host::-webkit-scrollbar {
      height: 8px;
    }

    :host::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: var(--gc-verde-900);
    }

    :host::-webkit-scrollbar-track {
      background-color: transparent;
    }

    @media (min-width: 576px) {
      ::slotted(.item) {
        max-width: 300px;
      }

      .container:hover ::slotted(.item) {
        opacity: 0.3;
      }

      .container ::slotted(.item:hover) {
        opacity: 1;
        transform: scale(1.1);
      }
    }
    @media (min-width: 768px) {
      ::slotted(.item) {
        max-width: 400px;
      }
    }
  `;
  handleSlotChange = (e) => {
    const slot = e.target;
    const assignedElements = slot.assignedElements({ flatten: true });
    console.log("Slotted elements changed:", assignedElements);
    assignedElements.forEach((slot) => {
      slot.classList.add("item");
    });
  };

  handleWheel = (event) => {
    event.preventDefault();
    this.scrollBy({
      left: event.deltaY,
      behavior: "smooth",
    });
  };

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("mouseenter", this.handleMouseIn);
  }

  render() {
    return html`
      <div class="container" @wheel=${this.handleWheel}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}

customElements.define("super-carousel", SuperCarousel);
