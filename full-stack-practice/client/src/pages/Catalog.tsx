import React, { useEffect, useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
import { Product } from '../lib';
import { ProductCard } from '../components/ProductCard';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   async function loadProducts() {
  //     try {
  //       const productList = await readCatalog();
  //       setProducts(productList);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   loadProducts();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = (await response.json()) as Product[];
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div> Error</div>;
  }

  return (
    <div className="px-4">
      <h1 className="text-4xl py-1">Catalog</h1>
      <hr />
      <div className="mt-3 flex">
        {products?.map((prod) => (
          <ProductCard product={prod}></ProductCard>
        ))}
      </div>
    </div>
  );
}
