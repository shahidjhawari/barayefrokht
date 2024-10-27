// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import ProductList from './pages/ProductList';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductList />
    </SafeAreaView>
  );
};

export default App;
