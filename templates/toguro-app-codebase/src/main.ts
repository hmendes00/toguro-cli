import { defineCustomElement } from 'vue';
import appRegister from './app-register';
import Toguro from './Toguro.ce.vue';

// If you change this line, your app might not be registered properly
const ToguroVueComponent = defineCustomElement(Toguro);

// this has to be your final line
appRegister(ToguroVueComponent);
