const createJwt = require('../jwt/create.js');

module.exports = async (user, config) => {
  const accessToken = await createJwt(
    { user },
    {
      ...config?.accessToken,
      secret: config?.secret,
    }
  );
  const refreshToken = await createJwt(
    { userId: user.id },
    {
      ...config?.refreshToken,
      secret: config?.secret,
      expire: config?.refreshToken?.expire || '30d',
    }
  );

  return { accessToken, refreshToken };
};
