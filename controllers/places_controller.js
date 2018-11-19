module.exports = {
  greeting(req, res) {
    res.send({ hello: 'neptune' })
  },

  create(req, res) {
    console.log(req.body);
    res.send({ hello: 'uranus' })
  }
}