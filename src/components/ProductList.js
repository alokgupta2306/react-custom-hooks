import React from 'react';
import useFetch from '../hooks/useFetch';
import './ProductList.css';

const ProductList = () => {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) {
    return (
      <div className="container">
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-container">
          <h2>⚠️ Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Product List</h1>
      <p className="subtitle">Fetched using custom useFetch hook</p>
      
      <div className="product-grid">
        {data && data.slice(0, 20).map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img 
                src={product.images[0]} 
                alt={product.title}
                className="product-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                }}
              />
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <p className="product-category">{product.category.name}</p>
              <p className="product-description">
                {product.description.length > 100 
                  ? `${product.description.substring(0, 100)}...` 
                  : product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;