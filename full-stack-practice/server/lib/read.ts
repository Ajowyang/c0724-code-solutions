export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

export async function readCatalog(): Promise<Product[]> {
  const response = await fetch('api/products');
  if (!response.ok) {
    throw new Error('error reading catalog');
  }
  return await response.json();
}

export async function readProduct(
  productId: number
): Promise<Product | undefined> {
  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) {
    throw new Error('error reading product');
  }
  return await response.json();
}
