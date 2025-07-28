import { productList } from "@/data/data";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const product = productList.find(
    (product) => product.id === parseInt(params.slug, 10)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg">${product.price}</p>
    </div>
  );
}
