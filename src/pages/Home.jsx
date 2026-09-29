import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedCategories from '../components/FeaturedCategories'
import NewArrivals from '../components/NewArrivals'
import Footer from '../components/Footer'
import Products from '../pages/Products'

export default function Home() {
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