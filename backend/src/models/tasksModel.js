const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const dataUTC = new Date(Date.now()).toUTCString();
  const query = "insert into tasks(title, status, created_at) values(?,?,?)";
  const createdTask = await connection.execute(query, [
    title,
    "pendente",
    dateUTC,
  ]);
  return createdTask;
};

module.exports = {
  getAll,
  createTask,
};
