import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const menuItems = [
    {
      name: "Дракон Ролл",
      description: "Угорь, авокадо, огурец, икра тобико",
      price: "890₽",
      image: "/img/dbe25856-f454-4244-bc76-3e2e5da5457d.jpg"
    },
    {
      name: "Черное Золото",
      description: "Тунец, лосось, черная икра, трюфель",
      price: "1290₽",
      image: "/img/155b329d-a74c-4817-b706-99fb223a3ee2.jpg"
    },
    {
      name: "Нефть Ролл",
      description: "Наш фирменный ролл с черным кунжутом",
      price: "1190₽",
      image: "/img/dbe25856-f454-4244-bc76-3e2e5da5457d.jpg"
    }
  ];

  const features = [
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "До 45 минут по всему городу"
    },
    {
      icon: "Star",
      title: "Премиум качество",
      description: "Только свежие ингредиенты"
    },
    {
      icon: "Phone",
      title: "24/7 поддержка",
      description: "Всегда готовы помочь"
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-black text-gold-400">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-luxury-black/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/img/443f16d6-8d09-4a71-83be-10f864a5677c.jpg" 
                alt="НЕФТЬ логотип"
                className="w-10 h-10 object-contain"
              />
              <h1 className="text-2xl font-bold text-gold">НЕФТЬ</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="hover-gold transition-colors">Меню</a>
              <a href="#about" className="hover-gold transition-colors">О нас</a>
              <a href="#delivery" className="hover-gold transition-colors">Доставка</a>
              <a href="#contact" className="hover-gold transition-colors">Контакты</a>
            </div>
            <Button className="bg-gold text-black hover:bg-gold/90 gold-glow">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/img/263c71f9-74fd-47c6-b3db-719466032fca.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/50 via-transparent to-luxury-black" />
        
        <div className="relative z-10 text-center space-y-8 px-4">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-gold mb-4 animate-gold-glow">
              НЕФТЬ
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light">
              Суши-бар премиум класса
            </p>
          </div>
          
          <div className="animate-slide-up space-y-4">
            <p className="text-lg text-gold/80 max-w-2xl mx-auto">
              Откройте для себя мир изысканной японской кухни. 
              Каждый ролл — произведение искусства, созданное мастерами своего дела.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gold text-black hover:bg-gold/90 gold-glow-strong font-semibold px-8 py-4"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Сделать заказ
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gold text-gold hover:bg-gold/10 px-8 py-4"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть меню
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-gold/60" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-luxury-black to-luxury-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-black/50 border-gold/20 hover:border-gold/40 transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-gold mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-luxury-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              Меню
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Откройте для себя изысканные вкусы нашей авторской японской кухни
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card 
                key={index}
                className="bg-black/70 border-gold/20 hover:border-gold/40 transition-all duration-300 hover:scale-105 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gold">{item.name}</h3>
                    <span className="text-2xl font-bold text-gold">{item.price}</span>
                  </div>
                  <p className="text-white/70 mb-4">{item.description}</p>
                  <Button className="w-full bg-gold/10 text-gold border border-gold/30 hover:bg-gold hover:text-black transition-colors">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-luxury-black via-luxury-gray to-luxury-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gold mb-6">
                История НЕФТИ
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Наш суши-бар был основан в 2018 году с простой идеей — создать место, 
                где традиционная японская кухня встречается с современным подходом к качеству и сервису.
              </p>
              <p className="text-white/70 mb-8">
                Мы используем только самые свежие ингредиенты, а наши повара — настоящие мастера 
                японской кулинарии с многолетним опытом работы в лучших ресторанах мира.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">6+</div>
                  <div className="text-white/70">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">15K+</div>
                  <div className="text-white/70">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">50+</div>
                  <div className="text-white/70">Видов роллов</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/263c71f9-74fd-47c6-b3db-719466032fca.jpg" 
                alt="Наш ресторан"
                className="w-full rounded-lg shadow-2xl border border-gold/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-luxury-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gold mb-4">
              Доставка
            </h2>
            <p className="text-xl text-white/70">
              Быстро, надежно, с заботой о качестве
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-2">Время доставки</h3>
                  <p className="text-white/70">От 30 до 45 минут в пределах города</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-2">Зона доставки</h3>
                  <p className="text-white/70">Весь центр города и основные районы</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="DollarSign" size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-2">Стоимость</h3>
                  <p className="text-white/70">Бесплатно при заказе от 1500₽</p>
                </div>
              </div>
            </div>

            <Card className="bg-black/50 border-gold/20 p-8">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-gold text-center mb-6">
                  Сделать заказ
                </h3>
                <Button className="w-full bg-gold text-black hover:bg-gold/90 gold-glow mb-4">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить: +7 (999) 123-45-67
                </Button>
                <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/10">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
                <div className="text-center text-white/60 text-sm pt-4">
                  Работаем ежедневно с 11:00 до 23:00
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-luxury-black to-luxury-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gold mb-4">
              Контакты
            </h2>
            <p className="text-xl text-white/70">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-gold/20 text-center">
              <CardContent className="p-8">
                <Icon name="MapPin" size={48} className="text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gold mb-2">Адрес</h3>
                <p className="text-white/70">
                  ул. Японская, 123<br />
                  Москва, Россия
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gold/20 text-center">
              <CardContent className="p-8">
                <Icon name="Phone" size={48} className="text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gold mb-2">Телефон</h3>
                <p className="text-white/70">
                  +7 (999) 123-45-67<br />
                  +7 (999) 123-45-68
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gold/20 text-center">
              <CardContent className="p-8">
                <Icon name="Mail" size={48} className="text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gold mb-2">Email</h3>
                <p className="text-white/70">
                  info@neft-sushi.ru<br />
                  order@neft-sushi.ru
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black border-t border-gold/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/img/443f16d6-8d09-4a71-83be-10f864a5677c.jpg" 
                alt="НЕФТЬ логотип"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-gold">НЕФТЬ</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Icon name="Phone" size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gold/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 НЕФТЬ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}