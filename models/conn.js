const host = "queenie.db.elephantsql.com",
    database = "kpfjszqx",
    user = "kpfjszqx",
    password = "xbvHrmka0Cf9lZ1J1lZg883k8_a17BEi"

const pgp = require('pg-promise')({
    query: function(event) {
        console.log('QUERY:', event.query);
    }
});

const options = {
    host,
    database,
    user,
    password
}

const db = pgp(options);

module.exports = db;