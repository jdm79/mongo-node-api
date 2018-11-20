const app = require('./app');
const PORT = 6666
app.listen(PORT, () => {
  console.log(`I'm listening on port ${PORT}`);
})