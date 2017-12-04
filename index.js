const async = () => {
    return Promise.resolve();
};

const env = process.env.NODE_ENV || 'development'
const settings = require('./server/config/settings')[env]

async()
    .then(() => require('./server/config/database')(settings)) //setup the database
    .then(() => require('./server/config/passport')()) //setup the passport
    .then(() => require('express')()) // create new express application
    .then((app) => { // config the express app
        require('./server/config/express')(app)
        return app
    })
    .then((app) => {// add server side routes 
        require('./server/config/routes')(app)
        return app
    }) 
    .then((app) => // start up the application
        app.listen(settings.port, () =>
            console.log(`Server listening on port ${settings.port}...`))
    )
    .catch((err) => {
        console.log(err);
    });