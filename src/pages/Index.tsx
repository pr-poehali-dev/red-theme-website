import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"></div>
        <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-white font-montserrat lg:text-7xl">
              Красный
              <span className="block text-red-200">Дизайн</span>
            </h1>
            <p className="mt-6 text-xl text-red-100 max-w-3xl mx-auto">
              Энергичный и современный сайт с красной цветовой схемой. Создан
              для тех, кто любит яркие и смелые решения.
            </p>
            <div className="mt-10">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 animate-pulse-red">
                Начать работу
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-4 -mr-16 w-32 h-32 bg-red-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-8 -ml-20 w-40 h-40 bg-red-500 rounded-full opacity-15"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            Возможности
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Всё что нужно для успешного проекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-red-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">
              Современный дизайн
            </h3>
            <p className="text-gray-600">
              Красивые интерфейсы с использованием актуальных трендов и красной
              цветовой палитры.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-red-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">
              Высокая скорость
            </h3>
            <p className="text-gray-600">
              Оптимизированная производительность и быстрая загрузка всех
              элементов.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-red-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">
              Адаптивность
            </h3>
            <p className="text-gray-600">
              Идеальное отображение на всех устройствах - от смартфонов до
              десктопов.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="text-center px-4 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Готовы начать?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Присоединяйтесь к тысячам пользователей, которые уже оценили красоту
            красного дизайна
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300">
              Попробовать бесплатно
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
              Узнать больше
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="text-center px-4 mx-auto max-w-7xl">
          <h3 className="text-2xl font-bold mb-4 font-montserrat text-red-400">
            Красный сайт
          </h3>
          <p className="text-gray-400 mb-8">Создано с ❤️ и красными красками</p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">© 2025 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
