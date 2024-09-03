'use client'
import React, { useState, useEffect } from 'react';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import Footer from './components/Footer';
import { handleOrderSubmit } from './serverActions';

const image_url = "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d1924c98-854b-461b-960c-e05e67f6308f/custom-nike-dunk-high-by-you-shoes.png";

const products = [
  {
    id: 'nike-dunk-high-1',
    name: 'Nike Dunk High 1',
    price: 840.0,
    image: image_url,
    discount: '35%',
    originalPrice: 1200,
  },
  {
    id: 'nike-dunk-high-2',
    name: 'Nike Dunk High 2',
    price: 840.0,
    image: image_url,
    discount: '35%',
    originalPrice: 1200,
  },
  {
    id: 'nike-dunk-high-3',
    name: 'Nike Dunk High 3',
    price: 840.0,
    image: image_url,
    discount: '35%',
    originalPrice: 1200,
  },
  {
    id: 'nike-dunk-high-4',
    name: 'Nike Dunk High 4',
    price: 840.0,
    image: image_url,
    discount: '35%',
    originalPrice: 1200,
  },
  {
    id: 'nike-dunk-high-5',
    name: 'Nike Dunk High 5',
    price: 840.0,
    image: image_url,
    discount: '35%',
    originalPrice: 1200,
  },
  {
    id: 'nike-dunk-high-6',
    name: 'Nike Dunk High 6',
    price: 840.0,
    image: image_url,
    discount: '35%',
    originalPrice: 1200,
  },
  {
    id: 'nike-dunk-high-7',
    name: 'Nike Dunk High 7',
    price: 840.0,
    image: image_url,
    discount: '35%',
    originalPrice: 1200,
  },
  {
    id: 'nike-dunk-high-8',
    name: 'Nike Dunk High 8',
    price: 840.0,
    image: image_url,
    discount: '35%',
    originalPrice: 1200,
  },
  {
    id: 'nike-dunk-high-9',
    name: 'Nike Dunk High 9',
    price: 840.0,
    image: image_url,
    discount: '35%',
    originalPrice: 1200,
  },
  // Add more products as needed
];

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductClicked, setIsProductClicked] = useState(false);
  const [clickedRowIndex, setClickedRowIndex] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const handleProductClick = (product, rowIndex) => {
    setSelectedProduct(product);
    setIsProductClicked(true);
    setClickedRowIndex(rowIndex);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setIsProductClicked(false);
    setClickedRowIndex(null);
  };

  const temp = () => {

  }

  const handleSubmit = async () => {
    try {
      setCurrentStep(1);
      setTimeout(() => setCurrentStep(2), 3000);
      setTimeout(() => setCurrentStep(3), 6000);
      setTimeout(() => setCurrentStep(4), 9000);

      const result = await handleOrderSubmit(selectedProduct, quantity);
      console.log('Order placed successfully:', result);
    } catch (error) {
      console.error(error);
    }
  };

  const renderProductRows = () => {
    const rows = [];
    const chunkSize = 4; // 4 products per row
    for (let i = 0; i < products.length; i += chunkSize) {
      const chunk = products.slice(i, i + chunkSize);
      rows.push(chunk);
    }
    return rows;
  };

  const steps = 4;

  const productRows = renderProductRows();

  return (
    <div>
      <Header />
      <div className="bg-gray-100 h-full flex flex-col items-center p-4">
        <ProgressBar currentStep={currentStep} />
        <div className="bg-white w-full max-w-4xl p-6 h-full rounded-lg shadow-md mt-10">
          {isProductClicked && selectedProduct ? (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-center">{selectedProduct.name}</h1>
                <button
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700 transition duration-300 text-xl font-bold"
                >
                  X
                </button>
              </div>
              <div className="flex flex-col lg:flex-row items-start lg:items-center">
                <div className="flex justify-center lg:justify-start w-full lg:w-1/2 mb-6 lg:mb-0">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-64 h-64 object-contain"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-1/2 px-6">
                  <div className="mb-4">
                    <p className="text-gray-700 text-xl font-bold">${selectedProduct.price}</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <label className="block text-gray-700 text-sm font-medium mr-4">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-20 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
                    />

                  </div>
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto mt-8">
                <div className="grid grid-cols-4 gap-6">
                  {productRows[clickedRowIndex].map((product) => (
                    <div
                      key={product.id}
                      className={`bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain mb-4"
                      />
                      <h2 className="text-lg font-bold text-gray-700">{product.name}</h2>
                      <p className="text-sm text-gray-500 mb-2">
                        <span className="line-through mr-2">${product.originalPrice}</span>
                        <span className="text-red-500">{product.discount} OFF</span>
                      </p>
                      <p className="text-xl font-bold text-gray-900">${product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold text-center mb-6">Products</h1>
              <div
                className="overflow-y-auto"
                style={{ maxHeight: '400px' }} // Limit the height to make it scrollable
              >
                {productRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
                  >
                    {row.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300"
                        onClick={() => handleProductClick(product, rowIndex)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-contain mb-4"
                        />
                        <h2 className="text-lg font-bold text-gray-700">{product.name}</h2>
                        <p className="text-sm text-gray-500 mb-2">
                          <span className="line-through mr-2">${product.originalPrice}</span>
                          <span className="text-red-500">{product.discount} OFF</span>
                        </p>
                        <p className="text-xl font-bold text-gray-900">${product.price}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
