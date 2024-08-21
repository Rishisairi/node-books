import express from "express";
import cors from "cors";

const app = express();
import adminRouter from "./routes/admin.route.js";
import userRouter from "./routes/user.route.js";
const PORT = process.env.PORT || 4000;

//app.use->will apply the middleware to all apis.
//
app.use(cors()); //for all the ,ethods cors is allowed
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
//for all particular methods, we can keep in betwwen them
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩"); //call back funtion we have req and res
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
