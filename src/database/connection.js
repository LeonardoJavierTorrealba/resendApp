import sql from "mssql";

const dbSettings = {
    user: 'REDMEGATLON\\ltorrealba',
    server: 'ARBUESRV018',
    database: 'MegatlonSGC_Test',
    port: 1433,
    options:{
        encrypt: false,
        trustServerCertificate: true
    }
}

async function getConnection () {
const pool = await sql.connect(dbSettings);
const result = await pool.request().query('SELECT * FROM opcion')
console.log(result);
}

getConnection();
