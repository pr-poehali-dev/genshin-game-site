import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/a3463ffc-226b-412b-a57f-123213b47db3/files/78188b14-bb15-4d95-bc6e-4a0c44fa248f.jpg';

const services = [
  {
    icon: 'Map',
    element: 'Гидро',
    title: 'Открытие карты на 100%',
    desc: 'Полностью откроем вам карту во всех регионах Тейвата: точки телепортации, сбор окулов, печатей, прохождение заданий, сбор сундуков и др.',
    price: 'от 1500 ₽',
  },
  {
    icon: 'Crown',
    element: 'Анемо',
    title: 'Прохождение ивентов',
    desc: 'Закроем все временные события и получим максимум наград, пока ивент активен.',
    price: 'от 790 ₽',
  },
  {
    icon: 'ShieldCheck',
    element: 'Крио',
    title: 'Уход за аккаунтом',
    desc: 'Ежедневные поручения, награды, выполнение боссов, слив смолы, боссы — держим аккаунт в форме.',
    price: 'от 1400 ₽/нед',
  },
  {
    icon: 'Eye',
    element: 'Гео',
    title: 'Сбор окулусов и печатей',
    desc: 'Собираем Анемокулы, Геокулы и все виды печатей во всех открытых регионах.',
    price: 'от 990 ₽',
  },
  {
    icon: 'Gem',
    element: 'Электро',
    title: 'Сбор круток (примогемы)',
    desc: 'Фарм примогемов через сундуки, квесты и испытания — копим на баннер быстрее.',
    price: 'от 690 ₽',
  },
];

const reviews = [
  {
    name: 'Артём К.',
    tag: 'AR 58 · Пиро',
    text: 'Закрыли Бездну на 36 звёзд за вечер. Всё честно, аккаунт в целости. Рекомендую!',
    rating: 5,
  },
  {
    name: 'Виктория М.',
    tag: 'AR 45 · Гидро',
    text: 'Прокачали Фурину под мету, собрали артефакты. DPS вырос в 2 раза, я в восторге ✨',
    rating: 5,
  },
  {
    name: 'Дмитрий С.',
    tag: 'AR 60 · Электро',
    text: 'Открыли карту Фонтейна на 100%, все окулусы и сундуки. Быстро и без вопросов.',
    rating: 5,
  },
  {
    name: 'Елена П.',
    tag: 'AR 52 · Крио',
    text: 'Фарм ресурсов на возвышение — сэкономила кучу времени. Общались через чат, отвечали моментально.',
    rating: 5,
  },
];

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Привет, Путешественник! Я на связи. Какую услугу хочешь заказать?' },
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { from: 'me', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: 'bot', text: 'Принял! Бустер скоро ответит и рассчитает стоимость ✨' },
      ]);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-border/40 card-glass">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <Icon name="Compass" className="text-primary" size={26} />
            <span className="font-display text-2xl font-bold text-gold-gradient">Teyvat Boost</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Прайс</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button onClick={() => setChatOpen(true)} className="bg-primary text-primary-foreground hover:opacity-90 font-semibold">
            <Icon name="MessageCircle" size={18} /> Чат
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Тейват" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="container relative z-10 pt-24">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm mb-6">
              <Icon name="Star" size={16} /> Бустинг Genshin Impact №1
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Забота о твоём аккаунте в <span className="text-gold-gradient">Тейвате</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Открытие карты, ивенты, окулусы, печати и примогемы — берём рутину на себя, пока ты занят своими делами.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services">
                <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 font-semibold glow-gold">
                  Смотреть услуги <Icon name="ArrowRight" size={18} />
                </Button>
              </a>
              <Button size="lg" variant="outline" onClick={() => setChatOpen(true)} className="border-secondary text-secondary hover:bg-secondary/10 font-semibold">
                <Icon name="MessageCircle" size={18} /> Написать в чат
              </Button>
            </div>
            <div className="flex gap-8 mt-12">
              {[['2000+', 'заказов'], ['4.9★', 'рейтинг'], ['24/7', 'на связи']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-gold-gradient">{n}</div>
                  <div className="text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES + PRICING */}
      <section id="services" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-widest text-sm uppercase">Услуги и прайс</span>
            <h2 id="pricing" className="font-display text-4xl md:text-5xl font-bold mt-2">
              Что мы <span className="text-gold-gradient">прокачаем</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group card-glass rounded-2xl p-7 border border-border/50 hover:border-primary/60 transition-all hover:-translate-y-1.5 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center group-hover:glow-gold transition-all">
                    <Icon name={s.icon} className="text-primary" size={26} />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-gold-gradient">{s.price}</span>
                  <Button size="sm" onClick={() => setChatOpen(true)} className="bg-primary/90 text-primary-foreground hover:opacity-90 font-semibold">
                    Заказать
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-widest text-sm uppercase">Отзывы</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Что говорят <span className="text-gold-gradient">Путешественники</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className="card-glass rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1.5 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Icon key={k} name="Star" className="text-primary fill-primary" size={16} />
                  ))}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed mb-6">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-display font-bold text-primary">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{r.name}</div>
                    <div className="text-xs text-secondary">{r.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 relative">
        <div className="container">
          <div className="card-glass rounded-3xl border border-border/50 p-10 md:p-16 relative overflow-hidden">
            <Icon name="Compass" className="absolute -right-10 -bottom-10 text-primary/5 animate-float-slow" size={220} />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-secondary font-semibold tracking-widest text-sm uppercase">Контакты</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
                  Готов <span className="text-gold-gradient">начать</span>?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Напиши в чат или в мессенджеры — рассчитаем стоимость и стартуем в течение часа.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: 'Send', label: 'Telegram', val: '@teyvat_boost' },
                    { icon: 'MessageCircle', label: 'Discord', val: 'teyvatboost' },
                    { icon: 'Mail', label: 'Почта', val: 'hello@teyvat-boost.gg' },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-lg bg-secondary/15 flex items-center justify-center">
                        <Icon name={c.icon} className="text-secondary" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{c.label}</div>
                        <div className="font-medium">{c.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <Icon name="Sparkles" className="text-primary mx-auto mb-4 animate-float-slow" size={56} />
                <p className="font-display text-2xl mb-6">Онлайн-чат работает 24/7</p>
                <Button size="lg" onClick={() => setChatOpen(true)} className="bg-primary text-primary-foreground hover:opacity-90 font-semibold glow-gold">
                  <Icon name="MessageCircle" size={20} /> Открыть чат
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        Teyvat Boost — бустинг Genshin Impact. Не является официальным сервисом HoYoverse.
      </footer>

      {/* CHAT WIDGET */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-gold hover:scale-105 transition-transform animate-float-slow"
          aria-label="Открыть чат"
        >
          <Icon name="MessageCircle" size={28} />
        </button>
      )}

      {chatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] max-w-sm rounded-2xl border border-primary/40 card-glass shadow-2xl overflow-hidden animate-fade-up">
          <div className="flex items-center justify-between px-5 py-4 bg-primary/10 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Icon name="Compass" className="text-primary" size={24} />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full ring-2 ring-background" />
              </div>
              <div>
                <div className="font-semibold text-sm">Поддержка Teyvat Boost</div>
                <div className="text-xs text-green-400">онлайн</div>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-muted-foreground hover:text-foreground">
              <Icon name="X" size={20} />
            </button>
          </div>
          <div className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    m.from === 'me'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-muted text-foreground rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border/50 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ваше сообщение..."
              className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button onClick={send} size="icon" className="bg-primary text-primary-foreground shrink-0 rounded-xl">
              <Icon name="Send" size={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;