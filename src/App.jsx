import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedBrands from './components/FeaturedBrands'
import Collections from './components/Collections'
import ProductGrid from './components/ProductGrid'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="mt-20">
        <Hero />
        <FeaturedBrands />
        <Collections />
        <ProductGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}