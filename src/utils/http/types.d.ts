import { Method } from "axios";

export interface PureHttpRequestConfig {

}
export type RequestMethods= Extract<
    Method,
    "get" | "post" | "put" | "delete" | "patch" | "option" | "head"
>