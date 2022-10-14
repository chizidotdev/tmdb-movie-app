import { AxiosRequestConfig } from 'axios';
import axiosClient from './axiosClient';
import { TMovieResponse } from './types';

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
    return axiosClient.get<unknown, TMovieResponse<any>>(url, params);
  },
  getTvList: (type: string, params: AxiosRequestConfig<never> | undefined) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get<unknown, TMovieResponse<any>>(url, params);
  },
  getVideos: (cat: string, id: string) => {
    const url = category[cat] + '/' + id + '/videos';
    return axiosClient.get<unknown, TMovieResponse<any>>(url, { params: {} });
  },
  search: (cate: string, params: AxiosRequestConfig<never> | undefined) => {
    const url = 'search/' + category[cate];
    return axiosClient.get<unknown, TMovieResponse<any>>(url, params);
  },
  detail: (cate: string, id: string, params: AxiosRequestConfig<never> | undefined) => {
    const url = category[cate] + '/' + id;
    return axiosClient.get<unknown, TMovieResponse<any>>(url, params);
  },
  credits: (cate: string, id: string) => {
    const url = category[cate] + '/' + id + '/credits';
    return axiosClient.get<unknown, TMovieResponse<any>>(url, { params: {} });
  },
  similar: (cate: string, id: string) => {
    const url = category[cate] + '/' + id + '/similar';
    return axiosClient.get<unknown, TMovieResponse<any>>(url, { params: {} });
  },
};

export default tmdbApi;
