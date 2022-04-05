const connection = require("../config/db");

const findByEmail = (email) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM users WHERE email = ?", email, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    });
  });
};

const userDisplay = (email) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT id, name, phone_number, email, role FROM users WHERE email = ?", email, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    });
  });
};

const createAccount = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO users SET ?", data, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    });
  });
};

module.exports = {
    findByEmail,
    userDisplay,
    createAccount
}