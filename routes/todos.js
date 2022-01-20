const express = require("express");
const router = express.Router();

const {
  createPost,
  getAll,
  getById,
  update,
  del,
} = require("../controller/todos");

router.post("/", createPost);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", update);

router.delete("/:id", del);

module.exports = router;
