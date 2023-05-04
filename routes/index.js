const authRoute = require('./authRoute.js')

function route(app){
    app.use('/api/auth', authRoute)
}

module.exports = route