import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product, readProduct } from '../lib';

export function Details() {
  const [product, setProduct] = useState<Product>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
  useEffect(() => {
    async function loadProduct() {
      try {
        const prod = await readProduct(Number(itemId));
        setProduct(prod);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className="w-11/12 px-4 py-5 border border-gray-400 flex flex-col">
        <Link to="/">
          <div className="text-xs text-gray-500"> {'< Back to catalog'}</div>
        </Link>
        <div className="w-full flex">
          <div className="w-1/3 ">
            <img src={product?.imageUrl}></img>
          </div>
          <div className="flex flex-col w-2/3">
            <h1 className="font-bold text-lg">{product?.name}</h1>
            <h2 className="text-sm text-gray-500 my-1">{`$${product?.price
              .toString()
              .slice(0, 2)}.${product?.price
              .toString()
              .slice(
                product?.price.toString().length - 2,
                product?.price.toString().length
              )}`}</h2>
            <p className="text-xs">{product?.shortDescription}</p>
          </div>
        </div>

        <p className="text-xs mt-2">{product?.longDescription}</p>
      </div>
      <div className="w-11/12">
        <Link to="/">
          <button
            className="bg-gray-200 w-20 text-xs py-1 rounded-md mr-1"
            onClick={() => alert(`Added ${product?.name} to cart!`)}>
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}
