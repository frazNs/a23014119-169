// main.js

// Function to simulate fetching dashboard data and filling it dynamically
document.addEventListener('DOMContentLoaded', function () {
  const summary = document.getElementById('summary');
  
  // Example dynamic content for the dashboard
  const userSummary = `
    <ul>
      <li>2 Pending Orders</li>
      <li>3 Items in Wishlist</li>
      <li>Last Purchase: HP Envy x360</li>
    </ul>
    <div class="mt-4">
      <a href="products.html" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Continue Shopping</a>
    </div>
  `;
  
  summary.innerHTML = userSummary;
});
