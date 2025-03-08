import Categories from "@/components/HomePage/Categories";
import Footer from "@/components/HomePage/Footer";
import Header from "@/components/HomePage/Header";
import HeroSection from "@/components/HomePage/HeroSection";
import Mentors from "@/components/HomePage/Mentors";
import PopularTopics from "@/components/HomePage/PopularTopics";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <Categories />
      <Mentors />
      <PopularTopics />
      <Footer />
    </div>
  );
}
