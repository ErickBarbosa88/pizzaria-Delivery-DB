const pg = require('pg');

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://rxwtloac:2EJ22ehciEulkTEtDHUwp-VeV3wFYipG@silly.db.elephantsql.com/rxwtloac',
});

module.exports = pool;
