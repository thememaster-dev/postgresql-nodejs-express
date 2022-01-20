const pool = require("../utils/db");

exports.createPost = async (req, res) => {
  try {
    const { description } = req.body;
    if (description) {
      if (description.length > 0) {
        const newTodo = await pool.query(
          " INSERT INTO todo (description) VALUES ($1) RETURNING * ",
          [description]
        );

        res.status(200).json({
          message: "creation was  successfull",
          data: newTodo,
        });
      } else {
        res.status(401).json({
          message: " description can not be empty",
        });
      }
    } else {
      res.status(401).json({
        message: "enter description",
      });
    }
  } catch (err) {
    console.log("created failed");
  }
};

exports.getAll = async (req, res) => {
  try {
    const allTodo = await pool.query("SELECT * FROM todo");
    res.status(200).json({
      message: "got them",
      data: allTodo,
    });
  } catch (err) {
    console.log("table is empty");
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE id =$1", [id]);
    res.status(200).json({
      message: "got it",
      data: todo,
    });
  } catch (err) {
    console.log("no todo of that id");
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    if (description) {
      if (description.length > 0) {
        const updateTodo = await pool.query(
          "UPDATE todo SET description = $1  WHERE id = $2 RETURNING *",
          [description, id]
        );
        res.status(200).json({
          message: "updated successfully",
          data: updateTodo,
        });
      } else {
        res.status(401).json({
          message: " description can not be empty",
        });
      }
    } else {
      res.status(401).json({
        message: "enter description",
      });
    }
  } catch (err) {
    console.log(" update failed");
  }
};

exports.del = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query("DELETE FROM todo WHERE id =$1", [id]);
    res.status(200).json({
      message: "deleted",
    });
  } catch (err) {
    console.log("delete failed");
  }
};
