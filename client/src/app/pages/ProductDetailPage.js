import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { ProductDetail } from '../components/products';

import { useFirestore } from '../services';

const ProductDetailPage = ({}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [userId, setUserId] = useState('');
  const [reservered, setReserved] = useState(false);
  const { getProduct, getProducts, getRegion } = useFirestore();

  useEffect(() => {
    setReserved(false);
    const getCurrentUser = () => {
      const userId = sessionStorage.getItem('currentUser');
      const user = JSON.parse(localStorage.getItem(userId));

      setUserId(userId);
      setCurrentUser(user);
    }

    const checkProductInAccount = async () => {
      const userId = sessionStorage.getItem('currentUser');
      const user = JSON.parse(localStorage.getItem(userId));
      if (user !== null) {
        console.log(product);
        if (user.products.includes(id)) {
          setReserved(true);
        }
      }
    }

    const fetchProducts = async() => {
      const products = await getProducts();
      const otherProducts = getRandomProducts(products);
      setProducts(otherProducts);
    }

    const getRandomProducts = (products) => {
      const productsWithoutCurrent = products.filter((product) => product.id !== id)
      const lengthProducts = productsWithoutCurrent.length;
      const otherProducts = [];
      let prevIndex = null;

      while (otherProducts.length < 2) {
        let randomIndex = Math.floor(Math.random() * lengthProducts);

        if (prevIndex !== null) {
          if (randomIndex === prevIndex) {
            randomIndex += 1;

            if (randomIndex >= lengthProducts) {
              randomIndex = 0;
            }
          }
        }

        otherProducts.push(productsWithoutCurrent[randomIndex]);
        prevIndex = randomIndex;
      }

      return otherProducts;
    }

    const fetchProduct = async () => {
      const productDb = await getProduct(id);
      const region = await getRegion(productDb.region.toString());
      productDb.regionName = region.name;
      setProduct(productDb);
    }

    fetchProduct();
    fetchProducts();
    getCurrentUser();
    checkProductInAccount();
    window.scrollTo(0,0)
  }, [id])

  const addProductToAccount = (e) => {
    currentUser.products.push(product.id);
    localStorage.setItem(userId, JSON.stringify(currentUser));
    setReserved(true);
  }

  return (
    <div className="page">
      <ProductDetail product={product} otherProducts={products} user={currentUser} reservered={reservered} addProductToAccount={addProductToAccount}/>
    </div>
  );
};

export default ProductDetailPage;