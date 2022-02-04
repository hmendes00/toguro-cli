// If you change this file, your app might not be registered properly
const appRegister = (ToguroVueComponent: CustomElementConstructor) => {
  const appName = document
    .querySelector(`script[data-appid='${import.meta.env.VITE_APP_ID}']`)
    ?.getAttribute('data-appName');
  customElements.define(!appName ? 'toguro-toguro' : appName, ToguroVueComponent);
};

export default appRegister;
