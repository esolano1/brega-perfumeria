import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCategories from './components/FeaturedCategories'
import NewArrivals from './components/NewArrivals'
import Collections from './components/Collections'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-on-background">
      <Navbar />

      <main>
        <Hero />
        <FeaturedCategories />
        <NewArrivals />
      </main>

      <Footer />
    </div>
  )
}