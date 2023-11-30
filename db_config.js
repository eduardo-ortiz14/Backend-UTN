import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "admin",
  port: 3306,
  database: "ecommerce_gamer",
};

async function connectToDatabase() {
  try {
    const pool = mysql.createPool({
      ...dbConfig,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    console.log("Connected to database");
    return pool;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

export { connectToDatabase };
