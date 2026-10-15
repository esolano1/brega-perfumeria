import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";


export default function Products() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Título Catálogo */}
        {/* Ordenar por */}
        {/* Filtros */}

        <ProductGrid />
      </main>

      <Footer />
    </>
  );
}