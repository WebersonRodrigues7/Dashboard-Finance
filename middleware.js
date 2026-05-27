import jwt from 'jsonwebtoken';

export async function middleware(req, res, next) {
  try {
    const authHeader = req.headers['authorization'].split(' ')[1];
    const token = authHeader;
    const secretKey = process.env.JWT_SECRET;

    if (token == null) {
      return res.status(401).send('Sem token!');
    }

    const decodeToken = jwt.verify(token, secretKey);
    req.user = decodeToken;

    return next();
  } catch (err) {
    res.status(401).json(err);
  }
}
