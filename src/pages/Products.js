import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Plus,
  Trash2,
  X,
  Search,
  ImageOff,
  ArrowRight,
  LogOut,
  Upload
} from 'lucide-react';
import { CATEGORIES, defaultProducts } from '../data/products';
import { isAdmin, adminLogout } from '../utils/adminAuth';
import SEO from '../components/SEO';
import './Products.css';

const STORAGE_KEY = 'opticalProducts';

const emptyForm = {
  name: '',
  category: CATEGORIES[0],
  price: '',
  description: '',
  image: ''
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState('');
  const [admin, setAdmin] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setAdmin(isAdmin());
  }, []);

  const handleAdminLogout = () => {
    adminLogout();
    setAdmin(false);
    setShowAddForm(false);
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setProducts(saved ? JSON.parse(saved) : defaultProducts);
    } catch {
      setProducts(defaultProducts);
    }
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch {}
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchTerm]);

  const handleFormChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setForm((prev) => ({ ...prev, image: '' }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const resetForm = () => {
    setForm(emptyForm);
    setFormError('');
    setShowAddForm(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const price = Number(form.price);

    if (!name) {
      setFormError('Please enter a product name.');
      return;
    }
    if (!price || price <= 0) {
      setFormError('Please enter a valid price.');
      return;
    }

    const newProduct = {
      id: `product-${Date.now()}`,
      name,
      category: form.category,
      price,
      description: form.description.trim(),
      image: form.image.trim()
    };

    setProducts((prev) => [newProduct, ...prev]);
    resetForm();
  };

  const handleRemoveProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="products-page">
      <SEO
        title="Eyeglass Frames & Eye Care Products | Eye Sight Optical and Medical Center Ltd"
        description="Browse eyeglass frames, sunglasses, contact lenses, reading glasses, and eye care accessories at Eye Sight Optical and Medical Center in Kisumu, Kenya."
        path="/products"
      />
      {/* Hero */}
      <section className="products-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="products-hero-content"
          >
            <h1 className="products-hero-title">Our Products</h1>
            <p className="products-hero-subtitle">
              Browse our range of frames, sunglasses, contact lenses, and eye care accessories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="section products-section">
        <div className="container">
          <div className="products-toolbar">
            <div className="products-search">
              <Search className="products-search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="products-filters">
              <button
                type="button"
                className={`filter-chip ${activeCategory === 'All' ? 'active' : ''}`}
                onClick={() => setActiveCategory('All')}
              >
                All
              </button>
              {CATEGORIES.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`filter-chip ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {admin && (
              <button
                type="button"
                className="btn btn-primary products-add-btn"
                onClick={() => setShowAddForm((prev) => !prev)}
              >
                {showAddForm ? <X className="btn-icon" /> : <Plus className="btn-icon" />}
                {showAddForm ? 'Close' : 'Add Product'}
              </button>
            )}
          </div>

          {admin && (
            <div className="admin-bar">
              <span>Admin mode</span>
              <button type="button" className="admin-logout-btn" onClick={handleAdminLogout}>
                <LogOut />
                Log out
              </button>
            </div>
          )}

          {/* Add Product Form */}
          <AnimatePresence>
            {admin && showAddForm && (
              <motion.form
                className="product-form card"
                onSubmit={handleAddProduct}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="product-form-grid">
                  <div className="form-field">
                    <label htmlFor="product-name">Product Name</label>
                    <input
                      id="product-name"
                      type="text"
                      value={form.name}
                      onChange={handleFormChange('name')}
                      placeholder="e.g. Rimless Titanium Frame"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="product-category">Category</label>
                    <select
                      id="product-category"
                      value={form.category}
                      onChange={handleFormChange('category')}
                    >
                      {CATEGORIES.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="product-price">Price (Ksh)</label>
                    <input
                      id="product-price"
                      type="number"
                      min="0"
                      value={form.price}
                      onChange={handleFormChange('price')}
                      placeholder="e.g. 4500"
                    />
                  </div>

                  <div className="form-field form-field-full">
                    <label htmlFor="product-image">Product Image (optional)</label>
                    <div className="product-image-input-row">
                      <input
                        id="product-image"
                        type="text"
                        value={form.image.startsWith('data:') ? '' : form.image}
                        onChange={handleFormChange('image')}
                        placeholder="Paste an image URL..."
                        disabled={form.image.startsWith('data:')}
                      />
                      <span className="product-image-input-or">or</span>
                      <button
                        type="button"
                        className="btn btn-secondary product-image-upload-btn"
                        onClick={() => fileInputRef.current && fileInputRef.current.click()}
                      >
                        <Upload className="btn-icon" />
                        Upload
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileChange}
                        className="product-image-file-input"
                      />
                    </div>
                    {form.image && (
                      <div className="product-image-preview">
                        <img src={form.image} alt="Preview" />
                        <button type="button" onClick={clearImage} aria-label="Remove image">
                          <X />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="form-field form-field-full">
                    <label htmlFor="product-description">Description</label>
                    <textarea
                      id="product-description"
                      rows={3}
                      value={form.description}
                      onChange={handleFormChange('description')}
                      placeholder="Short description of the product"
                    />
                  </div>
                </div>

                {formError && <p className="form-error">{formError}</p>}

                <div className="product-form-actions">
                  <button type="button" className="btn btn-secondary" onClick={resetForm}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <Plus className="btn-icon" />
                    Save Product
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-3 products-grid">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="product-card card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
                  viewport={{ once: true }}
                >
                  {admin && (
                    <button
                      type="button"
                      className="product-remove-btn"
                      onClick={() => handleRemoveProduct(product.id)}
                      aria-label={`Remove ${product.name}`}
                      title="Remove product"
                    >
                      <Trash2 />
                    </button>
                  )}

                  <div className="product-image-wrapper">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="product-image" />
                    ) : (
                      <div className="product-image-placeholder">
                        <ImageOff />
                      </div>
                    )}
                  </div>

                  <div className="product-category-tag">{product.category}</div>
                  <h3 className="product-title">{product.name}</h3>
                  {product.description && (
                    <p className="product-description">{product.description}</p>
                  )}

                  <div className="product-footer">
                    <Link to="/contact" className="btn btn-secondary product-enquire-btn">
                      Enquire
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="products-empty">
              <ShoppingBag className="products-empty-icon" />
              <p>No products found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section products-cta-section">
        <div className="container">
          <motion.div
            className="products-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="products-cta-title">Not Sure What You Need?</h2>
            <p className="products-cta-subtitle">
              Book an appointment with our optometrists for a personalized recommendation
            </p>
            <Link to="/appointments" className="btn btn-primary btn-large">
              Book Your Appointment
              <ArrowRight className="btn-icon" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
