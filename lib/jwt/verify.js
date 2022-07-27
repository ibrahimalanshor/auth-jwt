const jwt = require('jsonwebtoken');

module.exports = async (token, secret) =>
  await jwt.verify(token, secret || 'secret');
