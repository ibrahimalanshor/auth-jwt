# Auth JWT

## Instal

```bash
npm install @ibrahimanshor/auth-jwt
```

## Test

```js
const {
  createToken,
  createAccessToken,
  createRefreshToken,
  verifyToken,
} = require('@ibrahimanshor/auth-jwt');

const user = {
  id: 1,
  name: 'Anne Marie',
};

const token = await createToken(user); // return { accessToken, refreshToken }
const accessToken = await createAccessToken(user); // return accessToken
const refreshToken = await createRefreshToken(user); // return refreshToken
const verifyToken = await verifyToken('test'); // error
const verifyToken = await verifyToken('eyJ...'); // return { user, ...etc }
```
