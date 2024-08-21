import {
  createUser,
  getbooks,
  getuserbyusername,
} from "../services/user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//$2b$10$ES9xOXJz6vB8XH.lje0q/u this is the salt value, everytime it will create the salt value.

const genHashPassword = async (password) => {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
export async function createUserctr(request, response) {
  const data = request.body;
  if (data.password.length < 8) {
    response.status(400).send({ msg: "pass is too short" });
    return;
  }
  const userFromDb = await getuserbyusername(data.username);

  if (userFromDb.data) {
    response.status(400).send({ msg: "username already taken" });
    return;
  }
  const hashedPassword = await genHashPassword(data.password);
  try {
    await createUser({ username: data.username, password: hashedPassword });
    const token = jwt.sign(
      { id: userFromDb.data.username },
      process.env.sECRET_KEY
    );

    response.status(201).send({ msg: "Created sucessfully", data, token });
  } catch (error) {
    response.status(500).send("fail to add user"); //something bad happend on serve is 500
  }
}
export async function loginUserctr(request, response) {
  const data = request.body;
  const userFromDb = await getuserbyusername(data.username);
  if (!userFromDb.data) {
    response.status(400).send({ msg: "invalid crendentials" });
    return;
  } else {
    const storedDbPassword = userFromDb.data.password;
    const providedPassword = data.password;

    const ispasswordcheck = await bcrypt.compare(
      providedPassword,
      storedDbPassword
    );
    console.log(ispasswordcheck);
    if (ispasswordcheck) {
      const token = jwt.sign(
        { id: userFromDb.data.username },
        process.env.sECRET_KEY
      );
      response.status(200).send({ msg: "Login sucessful", token });
    } else {
      response.status(400).send({ msg: "Invalid credentials" });
    }
  }
}
export async function getUser(request, response) {
  response.send({ username: request.user });
}
export async function getbooksctr(request, response) {
  try {
    response.send(await getbooks());
  } catch (error) {
    //call back funtion we have req and res
    response.send("books not loaded");
  }
}
