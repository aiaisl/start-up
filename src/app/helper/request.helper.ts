import axois, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import * as log from 'loglevel';
export interface IApiNotice {
    code: string;
    noticeMessage: string;
    message: string;
    warnMessage: string;
}
export const requestHelper: AxiosInstance = axois.create({
    baseURL: apiServiceHost,
    headers: {

    }
});
requestHelper.interceptors.request.use((request => {
    return request;
}))
requestHelper.interceptors.response.use(
    (res: AxiosResponse) => {
        log.debug('request success', res);
        return res.data;
    },
    (err: AxiosError) => {
        log.debug('request fail', err);
        return err;
    }
);