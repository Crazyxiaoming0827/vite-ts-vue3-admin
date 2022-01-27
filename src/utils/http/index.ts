import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { resolve } from 'path/posix'
import { PureHttpRequestConfig, RequestMethods } from './types'

const defaultConfig = {
  baseURL: '',
  timeout: 1000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
}

class PureHttp {
  constructor () {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }
  // 初始化配置对象
  private static initConfig: PureHttpRequestConfig = {}

  // 保存axios实例对象
  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig)

  // 请求拦截
  private httpInterceptorsRequest (): void {
    PureHttp.axiosInstance.interceptors.request.use(
      config => {
        // 在发送请求之前做些什么
        return config
      },
      error => {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )
  }

  // 响应拦截
  private httpInterceptorsResponse (): void {
    PureHttp.axiosInstance.interceptors.response.use(
      response => {
        // 对响应数据做点什么
        return response
      },
      error => {
        // 对响应错误做点什么
        return Promise.reject(error)
      }
    )
  }
  /**
   * 请求工具函数
   * 选项式api可直接获取 $http   
   * setup直接引入 import { http } from  "utils/http";
   */
  public request<T> (
    method: RequestMethods,
    url: string, 
    param?: AxiosRequestConfig,
    data?: AxiosRequestConfig,
    axiosConfig?: PureHttpRequestConfig
  ): Promise<T> {
    const config = {
      method,
      url,
      params:{
        ...param
      },
      data:{
        ...data 
      },
      ...axiosConfig
    } as PureHttpRequestConfig;

     return new Promise((resolve, reject) => {
      PureHttp.axiosInstance
        .request(config)
        .then((response: any) => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * get
   * @param url     'xxxxx'
   * @param params  {id:xxx}
   * @param data    {id:xxx}
   * @param config   {}
   * 选项式api可直接获取 $http   
   * setup直接引入 import { http } from  "utils/http"; http.get
   */
   public get<T>(
    url: string,
    params?: T,
    data?:T,
    config?: PureHttpRequestConfig
  ): Promise<T> {
    return this.request<T>("get", url, params,data , config);
  }
  /**
   * post
   */
   public post<T>(
    url: string,
    params?: T,
    data?: T,
    config?: PureHttpRequestConfig
  ): Promise<T> {
    return this.request<T>("post", url, params,data, config);
  }
  /**
   * put
   */
  public put<T>(
    url: string,
    params?: T,
    data?: T,
    config?: PureHttpRequestConfig
  ):Promise<T> {
    return this.request<T>("put", url, params,data, config);
  }
  /**
   * delete
   */
   public delete<T>(
    url: string,
    params?: T,
    data?: T,
    config?: PureHttpRequestConfig
  ):Promise<T> {
    return this.request<T>("delete", url, params, data,config);
  }
}
export const http = new PureHttp()
