import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Apple Gift Cards
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Подарите бесконечные возможности. От приложений до музыки, от фильмов
          до игр.
        </p>
        <div className="relative mx-auto w-80 h-48 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl transform rotate-3 opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl flex items-center justify-center">
            <div className="text-center text-white">
              <Icon name="Gift" size={48} className="mx-auto mb-3 opacity-80" />
              <div className="text-sm font-medium opacity-60">
                Apple Gift Card
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
