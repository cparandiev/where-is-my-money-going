const async = () => {
    return Promise.resolve();
};

const env = process.env.NODE_ENV || 'development'
const settings = require('./server/config/settings')[env]

async()
    .then(() => require('./server/config/database')(settings))
    .then(() => require('express')())
    .then((app) => {
        require('./server/config/express')(app)
        return app;
    })
    .then((app) =>
        app.listen(settings.port, () =>
            console.log(`Server listening on port ${settings.port}...`))
    )
    .catch((err) => {
        console.log(err);
    });