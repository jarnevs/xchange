import React, { useContext } from 'react';
import 'firebase/firestore';

import { useFirebase } from './firebase.services';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
  const { app } = useFirebase();
  const db = app.firestore();

  const getProducts = async () => {
    const query = db.collection('products');
    const querySnapshot = await query.get();
    const products = querySnapshot.docs.map((doc) => doc.data());
    
    return products;
  };

  const getProductsWithOrder = async () => {
    const query = db.collection('products').orderBy('name', 'asc');
    const querySnapshot = await query.get();
    const products = querySnapshot.docs.map((doc) => doc.data());
    
    return products;
  };

  const getRegions = async () => {
    const query = db.collection('regions');
    const querySnapshot = await query.get();
    const regions = querySnapshot.docs.map((doc) => doc.data());
    
    return regions;
  };

  const getRegion = async (id) => {
    const docRef = db.collection('regions').doc(id);
    const docSnapshot = await docRef.get();

    return docSnapshot.data();
  };

  const getProduct = async (id) => {
    const docRef = db.collection('products').doc(id);
    const docSnapshot = await docRef.get();

    return docSnapshot.data();
  };

  return (
    <FirestoreContext.Provider value={{getProducts, getProduct, getRegion, getProductsWithOrder, getRegions}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore,
};