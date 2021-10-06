const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors")

const {
  createStudents,
  getAllStudents,
  getStudentById,
  updateStudent,
} = require("./src/models/students");

const app = express();
app.use(cors());

app.get('/students/:id', getStudentById)
app.patch('/students/:id', updateStudent)
app.post('/students', createStudents)
app.get('/students', getAllStudents)


exports.app = functions.https.onRequest(app)