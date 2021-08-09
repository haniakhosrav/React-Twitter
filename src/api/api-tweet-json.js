import {getAxiosInstanceJsonServer, getAxiosInstanceApi} from './api';

export const getHsashtags = (callback) => {
    getAxiosInstanceJsonServer().get('/hashtags')
        .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            const data = error.data;
            callback(false, data);
        })
}

export const getUsers = (callback) => {
    getAxiosInstanceJsonServer().get('/users')
        .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            const data = error.data;
            callback(false, data);
        })
}

export const newTweetRequest = (data, callback) => {
    getAxiosInstanceJsonServer().post('/tweets', data)
    .then(res => {
            callback(true);
        }).catch(error => {
            callback(false);
        })
}