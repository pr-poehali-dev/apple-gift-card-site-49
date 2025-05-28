import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { GiftCard } from "@/types";

interface GiftCardGridProps {
  giftCards: GiftCard[];
}

const GiftCardGrid = ({ giftCards }: GiftCardGridProps) => {
  return (
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
  );
};

export default GiftCardGrid;
