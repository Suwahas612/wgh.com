// Filter products by category
function filterCategory(category) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const match = category === 'All' || product.dataset.category === category;
    product.style.display = match ? 'block' : 'none';
  });
}

// Filter products by search input
function filterProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const text = product.textContent.toLowerCase();
    product.style.display = text.includes(input) ? 'block' : 'none';
  });
}