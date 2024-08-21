import express from "express";
import {
  createAdminctr,
  loginAdminctr,
  getUser,
  getbookByIdCtrl,
  deletebookByIdCtrl,
  editbooksByIdctrl,
} from "../controllers/admin.controller.js";
import { addbookCtr } from "../controllers/addbook.controller.js";
import { auth } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", createAdminctr);
router.post("/login", loginAdminctr);
router.post("/addbook", auth, addbookCtr);

router.get("/always", auth, getUser);

// router.get("/courses", getCoursesCtrl);
router.get("/books/:id", getbookByIdCtrl);
router.delete("/books/:id", deletebookByIdCtrl);
router.put("/books/:id", editbooksByIdctrl);

export default router;
