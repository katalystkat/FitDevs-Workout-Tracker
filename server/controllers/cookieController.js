const cookieController = {};

cookieController.setCookie = (req, res, next) => {
    // const randomInt = Math.floor(Math.random()*1000)
    res.cookie('cookiename', `${res.locals.user_id}`).end();
}

cookieController.checkCookie = (req, res, next) => {
    if (res.cookie) {
        console.log('res cookie: ' + res.cookie);
        next();
    }
    else res.redirect('/loginUser');
}

module.exports = cookieController;

