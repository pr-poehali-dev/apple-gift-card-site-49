import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const giftCards = [
    {
      amount: 1000,
      originalPrice: 1000,
      discount: 0,
      popular: false,
    },
    {
      amount: 2500,
      originalPrice: 2500,
      discount: 0,
      popular: true,
    },
    {
      amount: 5000,
      originalPrice: 5000,
      discount: 0,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gift" size={24} className="text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">
                Apple Gift
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="/products"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Товары
              </a>
              <a
                href="/instructions"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Инструкции
              </a>
            </div>
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Apple Gift Cards
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Подарите бесконечные возможности. От приложений до музыки, от
            фильмов до игр.
          </p>
          <div className="relative mx-auto w-80 h-48 mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl transform rotate-3 opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center text-white">
                <Icon
                  name="Gift"
                  size={48}
                  className="mx-auto mb-3 opacity-80"
                />
                <div className="text-sm font-medium opacity-60">
                  Apple Gift Card
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Выберите номинал
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Все карты мгновенно доставляются на email и готовы к использованию
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <Card
                key={card.amount}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${card.popular ? "ring-2 ring-blue-500 scale-105" : ""}`}
              >
                {card.popular && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Icon name="Gift" size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {card.amount.toLocaleString()} ₽
                  </h3>
                  <p className="text-gray-600 mb-8">Apple Gift Card</p>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-200"
                    size="lg"
                  >
                    Купить сейчас
                  </Button>
                  <div className="mt-4 text-sm text-gray-500">
                    Мгновенная доставка
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Icon name="Zap" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Мгновенная доставка
              </h3>
              <p className="text-gray-600">
                Получите код карты на email сразу после оплаты
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-2xl flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Безопасно
              </h3>
              <p className="text-gray-600">
                SSL-шифрование и защищенные платежи
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Icon name="Smartphone" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Для всех устройств
              </h3>
              <p className="text-gray-600">
                Используйте на iPhone, iPad, Mac и Apple TV
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Gift" size={24} className="text-blue-400" />
            <span className="text-xl font-semibold">Apple Gift</span>
          </div>
          <p className="text-gray-400 mb-4">
            Официальный продавец Apple Gift Cards в России
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Поддержка
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Условия
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Конфиденциальность
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
