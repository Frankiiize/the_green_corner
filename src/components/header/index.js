import { LitElement, html, css } from "lit";

export class MyElement extends LitElement {
  // Styles are applied to the shadow root and scoped to this element
  static styles = css`
    span {
      color: green;
    }
  `;

  static properties = {
    mood: { type: String },
  };

  constructor() {
    super();
    this.mood = "great";
  }

  // Render the component's DOM by returning a Lit template
  render() {
    return html`<header>
      <p>marca</p>
      <p>marca</p>
      <p>marca</p>
      <p>marca</p>
      <p>marca</p>
    </header>`;
  }
}

customElements.define("my-element", MyElement);
