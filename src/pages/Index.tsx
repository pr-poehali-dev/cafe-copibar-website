import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";

const Index = () => {
  const { toast } = useToast();
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2"
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Бронирование отправлено!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения.",
    });
    setBookingData({ name: "", phone: "", date: "", time: "", guests: "2" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { name: "Капучино", price: "250₽", category: "Кофе" },
    { name: "Латте", price: "280₽", category: "Кофе" },
    { name: "Эспрессо", price: "180₽", category: "Кофе" },
    { name: "Чизкейк", price: "320₽", category: "Десерты" },
    { name: "Брауни", price: "280₽", category: "Десерты" },
    { name: "Панкейки", price: "350₽", category: "Завтраки" },
  ];

  const capybaras = [
    { name: "Бублик", age: "3 года", personality: "Спокойный и дружелюбный" },
    { name: "Пончик", age: "2 года", personality: "Игривый и любопытный" },
    { name: "Ватрушка", age: "4 года", personality: "Мудрый и степенный" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">CAPYBARA CAFÉ</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition">Главная</button>
            <button onClick={() => scrollToSection("menu")} className="text-foreground hover:text-primary transition">Меню</button>
            <button onClick={() => scrollToSection("capybaras")} className="text-foreground hover:text-primary transition">Капибары</button>
            <button onClick={() => scrollToSection("gallery")} className="text-foreground hover:text-primary transition">Галерея</button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition">Контакты</button>
            <button onClick={() => scrollToSection("booking")} className="text-foreground hover:text-primary transition">Бронирование</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Кафе с капибарами</h2>
              <p className="text-xl text-muted-foreground mb-8">Уютное место, где вы можете насладиться отличным кофе в компании самых спокойных животных на планете</p>
              <Button onClick={() => scrollToSection("booking")} size="lg" className="gap-2">
                Забронировать столик
                <Icon name="ArrowRight" size={20} />
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/0ae505d8-f435-4f4c-a7d8-d450a9835863/files/0cd1a61e-6417-416f-8daf-0e6049417b0e.jpg"
                alt="Capybara in cafe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Наше меню</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {menuItems.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="capybaras" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Познакомьтесь с нашими капибарами</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {capybaras.map((capy, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl">🦫</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{capy.name}</h3>
                  <p className="text-muted-foreground mb-2">{capy.age}</p>
                  <p className="text-sm text-muted-foreground">{capy.personality}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Галерея</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/0ae505d8-f435-4f4c-a7d8-d450a9835863/files/204038ba-f20f-40e1-a7d7-2c58fbb37503.jpg"
                alt="Capybara relaxing"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/0ae505d8-f435-4f4c-a7d8-d450a9835863/files/a67e8521-4f44-4387-9ac3-137bc8c3bb75.jpg"
                alt="Capybaras in cafe"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Бронирование столика</h2>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleBooking} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      required
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      required
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Дата</Label>
                      <Input
                        id="date"
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Время</Label>
                      <Input
                        id="time"
                        type="time"
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="guests">Количество гостей</Label>
                    <Select value={bookingData.guests} onValueChange={(value) => setBookingData({ ...bookingData, guests: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 гость</SelectItem>
                        <SelectItem value="2">2 гостя</SelectItem>
                        <SelectItem value="3">3 гостя</SelectItem>
                        <SelectItem value="4">4 гостя</SelectItem>
                        <SelectItem value="5">5+ гостей</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Забронировать
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Контакты</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2 text-foreground">Адрес</h3>
              <p className="text-muted-foreground">ул. Капибарская, 42<br/>Москва</p>
            </div>
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2 text-foreground">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Clock" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2 text-foreground">Часы работы</h3>
              <p className="text-muted-foreground">Пн-Вс: 10:00 - 22:00</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Capybara Café. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
