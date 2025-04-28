
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Safety = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Безопасность в онлайн-играх</h1>
          <p className="text-xl text-gray-300 mb-8">
            Раздел находится в разработке. Здесь будут размещены советы по безопасности в онлайн-играх.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Safety;
