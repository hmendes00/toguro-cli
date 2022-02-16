export const InjectCssInShadowRoot = (root: HTMLElement, selectors: string) => {
  const styleSheets = document.querySelectorAll(selectors);
  let innerHTML = '';
  for (let i = 0; i < styleSheets.length; i++) {
    innerHTML += styleSheets[i].innerHTML;
  }
  const shadowRoot = root.getRootNode();
  const styleElement = document.createElement('style');
  styleElement.innerHTML = innerHTML;
  shadowRoot.appendChild(styleElement);
};

export const InjectCssInShadowRootFromString = (root: HTMLElement, css: string) => {
  const shadowRoot = root.getRootNode();
  const styleElement = document.createElement('style');
  styleElement.innerHTML = css;
  shadowRoot.appendChild(styleElement);
};
