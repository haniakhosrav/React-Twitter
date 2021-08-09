import {getAxiosInstanceAuth, getAxiosInstanceApi} from './api';

export const loginApi = (user, callback) => {
    getAxiosInstanceAuth().post('/login', user)
        .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data.message);
        })
}

export const resgisterApi = (user, callback) => {
    getAxiosInstanceAuth().post('/register', user)
        .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data.message);
        })
}

export const sendProf = (image, callback) => {
    getAxiosInstanceApi().post('/uploadUserPhoto', image)
    .then(res => {
        const data = res.data;
        callback(true, data)
    }).catch(error => {
        callback(false, error.response.message)
    })
}

export const getAllTweets = (callback) => {
    getAxiosInstanceApi().post('/getAllTweet')
        .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const newTweetRequest = (data, callback) => {
    getAxiosInstanceApi().post('/newTweet', data)
    .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.message);
        })
}

export const getAllHashtags = (callback) => {
    getAxiosInstanceApi().get('/getAllHashTags')
    .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const getUsers = (callback) => {
    getAxiosInstanceApi().get('/getAllUser')
    .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const likeTweetRequest = (id, callback) => {
    getAxiosInstanceApi().get('/likeTweet/' + id)
    .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const getTweetsByHashtagRequest = (hashTag, callback) => {
    getAxiosInstanceApi().post('/getAllTweet', {hashTag})
        .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const getTweetsByUserRequest = (user, callback) => {
    getAxiosInstanceApi().post('/getAllTweet', {user})
        .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}

export const getProfileRequest = (callback) => {
    getAxiosInstanceApi().get('/getProfile')
        .then(res => {
            const data = res.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error);
        })
}





