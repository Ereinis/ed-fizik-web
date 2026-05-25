class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <a class="brand" href="#kryefaqje" aria-label="Shko te kryefaqja">
          <span class="brand-mark">EF</span>
          <span>Edukim Fizik</span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Hap menunë" aria-expanded="false">☰</button>
        <nav class="nav-links" aria-label="Navigimi kryesor">
          <a href="#kryefaqje">KRYEFAQJE</a>
          <a href="#volejboll">VOLEJBOLL</a>
          <a href="#basketboll">BASKETBOLL</a>
          <a href="#futboll">FUTBOLL</a>
          <a href="#tenis">TENIS</a>
          <a href="#produkte">PRODUKTE</a>
          <a href="#perfundim">PERFUNDIM</a>
        </nav>
      </header>
    `;

    const toggle = this.querySelector(".menu-toggle");
    const nav = this.querySelector(".nav-links");

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
