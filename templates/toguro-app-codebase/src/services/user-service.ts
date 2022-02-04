import { User } from '@models/index';
import axios from 'axios';

axios.interceptors.request.use(
  async (config) => {
    config.baseURL = import.meta.env.VITE_ASSETS_API_URL;
    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/**
 * Service with basic calls for Toguro User API
 */
const ToguroUserService = {
  /**
   * Get basic info for user loggedin
   */
  getLoggedUser: async (): Promise<User> => {
    try {
      const res = await axios.get(`/api/user/me`);
      if (res.status === 200) {
        return res.data as User;
      }
    } catch (error) {
      console.error('Could not get logged user.', error);
    }
    return {};
  }
};

export default ToguroUserService;
