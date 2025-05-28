import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
