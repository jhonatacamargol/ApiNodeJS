const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query = "insert into tasks(title, status, created_at) values(?,?,?)";
  const createdTask = await connection.execute(query, [
    title,
    "pendente",
    dateUTC,
  ]);
  return { insertId: createdTask.insertId };
};

const deleteTask = async (id) => {
  const removedTesk = await connection.execute(
    "delete from tasks where id = ?",
    [id]
  );
  return removedTesk;
};

const uptadeTask = async (id, task) => {
  const query = "update tasks set title = ?, status = ? where id = ?";

  const { title, status } = task;

  const [uptadeTask] = await connection.execute(query, [title, status, id]);
  return uptadeTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  uptadeTask,
};
