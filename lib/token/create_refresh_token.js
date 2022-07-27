const createJwt = require('../jwt/create.js');

module.exports = async (user, config) => {
  const refreshToken = await createJwt(
    { userId: user.id },
    {
      ...config,
      expire: config?.expire || '30d',
    }
  );

  return refreshToken;
};
