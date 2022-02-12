import { User } from '@models/index';
import { createFetch } from '@vueuse/core';

const _fetch = createFetch({
  baseUrl: import.meta.env.VITE_ASSETS_API_URL,
  options: {
    async beforeFetch({ options }) {
      // const myToken = await getMyToken();
      // options.headers.Authorization = `Bearer ${myToken}`;

      return { options };
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
});

/**
 * Service with basic calls for Toguro User API
 */
const ToguroUserService = {
  /**
   * Get basic info for user loggedin
   */
  getLoggedUser: async (): Promise<User | null> => {
    try {
      const res = await _fetch<User>(`/api/user/me`).get();
      if (res.statusCode.value === 200) {
        return res.data.value;
      }
    } catch (error) {
      console.error('Could not get logged user.', error);
    }
    return {};
  }
};

export default ToguroUserService;
