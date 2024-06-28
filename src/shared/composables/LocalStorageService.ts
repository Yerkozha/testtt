const LocalStorageService = (function () {

    let _service

    function _getService () {
        if(!_service){
            _service = this
        }
        return _service
    }
    function _setToken (token) {
        localStorage.setItem('token', token)
    }
    function _getToken () {
        const token = localStorage.getItem('token')
        return token
    }
    function _resetToken() {
        localStorage.removeItem('token')
    }


    return {
        getService: _getService,
        setToken: _setToken,
        getToken: _getToken,
        reset: _resetToken
    }

})()


export function generateToken({username, password}) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var token = '';
    for(var i = 0; i < (username + password).length; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    return Promise.resolve(token);
}

export default LocalStorageService