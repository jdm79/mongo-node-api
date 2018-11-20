const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const DB_PW = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USERNAME;

const PORT = 6666
app.listen(PORT, () => {
  console.log(`I'm listening on port ${PORT}`);
})