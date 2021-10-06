const { dbConnection } = require("../db-config");

exports.createStudents = async (req, res) => {
  const student = req.body;

  const query = `INSERT INTO students SET ?`;

  try {
    const [results, fields] = await dbConnection
      .promise()
      .query(query, student);

    student.id = results.insertId;
    res.status(201).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllStudents = async (req, res) => {
  const query = `SELECT * FROM students`;
  try {
    const [results, field] = await dbConnection.promise().query(query);
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getStudentById = async (req, res) => {
  const query = `SELECT *
                    FROM students
                    WHERE id = ?`;
  const { id } = req.params;
  try {
    const [student, field] = await dbConnection.promise().query(query, id);
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateStudent = async (req, res) => {
  const query = `UPDADE students
                    SET`;
  const { id } = req.params;
  const updateStudent = req.body;

  Object.entries(updateStudent).forEach((entry) => {
    const [key, value] = entry;
    query += `${key} = ${value},`;
  });
  query += `WHERE id = ?`;
  try {
    const [student, field] = await dbConnection.promise().query(query, id);
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
}
