const pool = require("../utils/db");
exports.createTable = async (req, res) => {
  try {
    const updateTodo = await pool.query(
      "CREATE TABLE IF NOT EXISTS todo (id  SERIAL, description CHARACTER VARYING NOT NULL,PRIMARY KEY (id))"
    );
  } catch (err) {
    console.log(err);
  }
};
