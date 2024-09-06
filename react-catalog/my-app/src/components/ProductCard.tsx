import { Product } from '../lib';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/details/${product.productId}`}>
      <div className="flex flex-col border border-gray h-96 w-60 ">
        <div className="w-full h-64 flex justify-center items-center">
          <img className="max-h-full" src={product.imageUrl}></img>
        </div>
        <div className="flex flex-col mx-3">
          <h1 className="text-sm mb-2">{product.name}</h1>
          <h2 className="text-sm mb-2 text-gray-500">
            {`$${product.price.toString().slice(0, 2)}.${product.price
              .toString()
              .slice(
                product.price.toString().length - 2,
                product.price.toString().length
              )}`}
          </h2>
          <p className="text-xs">{product.shortDescription}</p>
        </div>
      </div>
    </Link>
  );
}
