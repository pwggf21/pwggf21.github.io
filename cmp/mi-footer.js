class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Fernando García García.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
