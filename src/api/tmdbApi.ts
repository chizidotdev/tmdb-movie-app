import { AxiosRequestConfig } from 'axios';
import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air',
};

const tmdbApi = {
  getMoviesList: (type: string, params: AxiosRequestConfig<never> | undefined) => {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type: string, params: AxiosRequestConfig<never> | undefined) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate: string, id: string) => {
    const url = category[cate] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  search: (cate: string, params: AxiosRequestConfig<never> | undefined) => {
    const url = 'search/' + category[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate: string, id: string, params: AxiosRequestConfig<never> | undefined) => {
    const url = category[cate] + '/' + id;
    return axiosClient.get(url, params);
  },
  credits: (cate: string, id: string) => {
    const url = category[cate] + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate: string, id: string) => {
    const url = category[cate] + '/' + id + '/similar';
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
