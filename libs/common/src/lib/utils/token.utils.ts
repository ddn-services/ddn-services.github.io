import { store } from '../redux/store';
export const getToken = () => {
  //   return store.getState().user?.isRemember ? localStorage.getItem('access_token') : sessionStorage.getItem('access_token');
  sessionStorage.getItem('access_token');
};
export const setToken = (token: string) => {
  //   store.getState().user?.isRemember ? localStorage.setItem('access_token', token) : sessionStorage.setItem('access_token', token);
  sessionStorage.setItem('access_token', token);
};
