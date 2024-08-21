import jwt from "jsonwebtoken";

const auth = (request, response, next) => {
  const token = request.header("x-auth-token");
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return response.sendStatus(403);
    }
    request.user = user;
    next();
  });
};
export { auth };
