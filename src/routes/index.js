
const coursesRoute = require('./courses');
const siteRoute = require('./site');
const userRoute = require('./user');
const checkuser = require('../middleware/check');

function route(app){
    app.use('/user', userRoute)
    app.use('/courses',checkuser, coursesRoute);
    app.use('/', siteRoute);
}


module.exports = route;