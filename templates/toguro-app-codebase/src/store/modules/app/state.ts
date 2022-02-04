import { User } from '@models/index';
import { reactive } from 'vue';

export interface AppState {
  appLoaded: boolean;
  appAccessToken: string;
  loggedUser: User;
}

const state: AppState = reactive({
  appLoaded: false,
  appAccessToken: '',
  loggedUser: {}
});

if (import.meta.env.MODE === 'development') {
  (window as any).appGetters = state;
}

export default state;
