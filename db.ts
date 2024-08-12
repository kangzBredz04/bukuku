// db.js
import postgres from 'postgres';

const sql = postgres({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false, // Opsional, tergantung pada sertifikat SSL Anda
        sslmode: 'require', // SSL mode
    },
});

export default sql;
