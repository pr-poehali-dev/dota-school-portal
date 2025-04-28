
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Tournaments = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Школьные турниры</h1>
          <p className="text-xl text-gray-300 mb-8">
            Раздел находится в разработке. Здесь будет размещена информация о школьных турнирах по Dota 2.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tournaments;
