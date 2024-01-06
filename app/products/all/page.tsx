import ProductCard from "@/components/elements/ProductCard";
import { getAllProducts } from "@/services/productService";

export default async function AllProductsPage() {
  const products = await getAllProducts();

  console.log(products);

  return (
    <>
      {products.map(({ id, title, description }) => (
        <ProductCard
          key={id}
          productId={id}
          title={title}
          description={description}
          imageSrc="/images/profile_pic.jpg"
        />
      ))}
    </>
  );
}
