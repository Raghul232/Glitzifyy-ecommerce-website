const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Optional: serve frontend

// Load products from products.json
const products = JSON.parse(fs.readFileSync('products.json'));

// In-memory cart
let cart = [];

// GET: All products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// POST: Add to cart
app.post('/api/cart', (req, res) => {
  const { productId } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  cart.push({ ...product, qty: 1 });
  res.json({ message: 'Added to cart', cart });
});

// GET: View cart
app.get('/api/cart', (req, res) => {
  res.json(cart);
});

// DELETE: Clear cart
app.delete('/api/cart', (req, res) => {
  cart = [];
  res.json({ message: 'Cart cleared' });
});

// Start server
app.listen(4000, () => {
  console.log('✅ Backend running at http://localhost:4000');
});