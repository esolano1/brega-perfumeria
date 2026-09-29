import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="lg:col-span-9">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-24">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}