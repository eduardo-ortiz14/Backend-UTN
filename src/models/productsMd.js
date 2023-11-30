import { connectToDatabase } from "../../db_config.js";

async function getAllProducts() {
  const pool = await connectToDatabase();
  let connection;

  try {
    connection = await pool.getConnection();
    const [products, _info] = await connection.query("SELECT * FROM products");
    return products;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

async function addNewProduct(productData) {
  const pool = await connectToDatabase();
  let connection;

  try {
    connection = await pool.getConnection();
    const [result, _info] = await connection.query(
      "INSERT INTO products SET ?",
      [productData]
    );
    return result.insertId;
  } catch (error) {
    console.error("Error adding new product:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

async function updateProduct(productId, productData) {
  const pool = await connectToDatabase();
  let connection;

  try {
    connection = await pool.getConnection();
    const [result, _info] = await connection.query(
      "UPDATE products SET ? WHERE id = ?",
      [productData, productId]
    );
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

async function deleteProduct(productId) {
  const pool = await connectToDatabase();
  let connection;

  try {
    connection = await pool.getConnection();
    const [result, _info] = await connection.query(
      "DELETE FROM products WHERE id = ?",
      [productId]
    );
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

export { getAllProducts, addNewProduct, updateProduct, deleteProduct };
