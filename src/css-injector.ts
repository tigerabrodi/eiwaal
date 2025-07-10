class CSSInjector {
  private injectedStyles = new Set<string>();
  private styleElement: HTMLStyleElement | null = null;

  private ensureStyleElement(): HTMLStyleElement {
    if (!this.styleElement) {
      this.styleElement = document.createElement("style");
      this.styleElement.setAttribute("data-react-view-transitions", "");
      document.head.appendChild(this.styleElement);
    }
    return this.styleElement;
  }

  inject(css: string, id: string): void {
    if (this.injectedStyles.has(id)) return;

    const styleEl = this.ensureStyleElement();
    styleEl.textContent += css;
    this.injectedStyles.add(id);
  }
}

export const cssInjector = new CSSInjector();
