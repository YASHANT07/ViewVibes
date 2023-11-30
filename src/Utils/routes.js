const host = "http://localhost:8000";
module.exports.registerRoute = `${host}/api/user/register`
module.exports.loginRoute = `${host}/api/user/login`
module.exports.otpRoute = `${host}/api/user/verify`;
module.exports.googleLoginRoute = `${host}/api/user/google/login`;
module.exports.forgoatRoute = `${host}/api/user/forgoat`;
module.exports.updatePasswordRoute = `${host}/api/user/update/password`;


