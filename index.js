const getMethod = (req) => {
  return req.split(' ')[0]
}

module.exports = getMethod;