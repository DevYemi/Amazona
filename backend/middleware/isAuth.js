import jwt from 'jsonwebtoken'
export default function isAuth(req, res, next) {
    const Authorization = req.header('Authorization');
    if (!Authorization) return res.status(401).send({ message: 'NO TOKEN' })
    const token = Authorization.slice(7, Authorization.length);
    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send({ message: 'INVALID TOKEN' })
    }

}