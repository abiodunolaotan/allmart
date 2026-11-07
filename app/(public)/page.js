import HeroPage from "@/components/Hero"
import HeroCTA from "@/components/HeroCTA"
import NewsLetter from "@/components/NewsLetter"
import TechHaven from "@/components/TechHaven"
import UrbanKicks from "@/components/UrbanKicks"




const HomePage = () => {
  return (
    <main>
      <HeroPage/>
      <TechHaven/>
      <UrbanKicks/>
      <NewsLetter/>
      <HeroCTA/>
    </main>
  )
}

export default HomePage
