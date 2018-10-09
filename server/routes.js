const api = require('./api');
const bp = require('body-parser');

module.exports = function(app){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(bp.urlencoded(  {extended:true} ));


// renders 
    app.get('/', api.index)
    app.get('/landing', api.landing)

// operations
    app.post('/login', api.login)
    app.post('/register', api.register)

return app;

}