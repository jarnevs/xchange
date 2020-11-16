import React, { useState, useEffect } from 'react';
import { useFirestore } from '../services';

import { ProductsList } from '../components/products/';

const ProductsPage = () => {
  const [filters, setFilters] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [products, setProducts] = useState(null);
  const {getProductsWithOrder, getRegions} = useFirestore();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsWithOrder();
      setProducts(products);
      setFilteredProducts(products);
    };

    const fetchRegions = async() => {
      const regions = await getRegions();
      setFilters(regions);
    }

    fetchRegions();
    fetchProducts();

  }, [getProductsWithOrder]);

  const filterProducts = (e) => {
    e.preventDefault();
    const filter = e.target.value;
    if (filter === 'all') {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter((product) => product.region == filter);
      setFilteredProducts(filteredProducts);
    }

    setFilterTerm(filter);
    setSearchTerm('');
  }

  const searchProducts = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    const productsFiltered = filteredProducts.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredProducts(productsFiltered);

    if (e.target.value === '' && filterTerm !== 'all') {
      const filteredProducts = products.filter((product) => product.region == filterTerm);
      setFilteredProducts(filteredProducts);
    } else if (e.target.value === '' && filterTerm === 'all') {
      setFilteredProducts(products);
    }
  }

  return (
    <div className="page page--products">
      <div className="container">
          <div className="row">
            <div className="col-12 title-page">
              <h1>Producten</h1>
            </div>
            <div className="col-12 title-page">
              <select onChange={(e) => filterProducts(e)}>
                <option value="all">Alle regio's</option>
                {!!filters && filters.map((filter) => <option key={filter.id} value={filter.id}>{filter.name}</option>)}
              </select>
              <input className="products" name="search" id="search" placeholder="Zoeken" value={searchTerm} onChange={(e) => searchProducts(e)}/>
            </div>
            <div className="col-12 col-md-12">
              <ProductsList products={filteredProducts}/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductsPage;