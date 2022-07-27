const jwt = require('jsonwebtoken');

module.exports = async (payload, config = {}) => {
  const { secret, expire } = config;

  return await jwt.sign(payload, secret || 'secret', {
    expiresIn: expire || '15m',
  });
};
