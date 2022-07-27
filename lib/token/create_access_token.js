const createJwt = require('../jwt/create.js');

module.exports = async (user, config) => {
  const accessToken = await createJwt({ user }, config);

  return accessToken;
};
