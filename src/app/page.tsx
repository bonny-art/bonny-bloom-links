import Image from "next/image";
import { Instagram, Facebook, Youtube, AtSign, Globe } from "lucide-react";

export default function Home() {
  // 👇👇👇 ВАШІ ПОСИЛАННЯ ТУТ 👇👇👇
  const socialLinks = [
    {
      title: "Instagram",
      url: "https://www.instagram.com/bonny.bloom.studio/",
      icon: <Instagram size={24} />,
      image: null,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/bonny.bloom.studio",
      icon: <Facebook size={24} />,
      image: null,
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com/@BonnyArt",
      icon: <Youtube size={24} />,
      image: null,
    },
    {
      title: "Threads",
      url: "https://www.threads.com/@bonny.bloom.studio",
      icon: <AtSign size={24} />,
      image: null,
    },
    // Можна додати ще, наприклад Etsy або Telegram:
    /*
    {
      title: "Etsy Shop",
      url: "https://etsy.com/shop/ваша_назва",
      icon: <Globe size={24} />,
      image: null,
    },
    */
  ];

  return (
    <main className="min-h-screen bg-[#F3E5E5] flex justify-center py-10 px-4 font-sans text-slate-800">
      <div className="w-full max-w-md space-y-8">
        {/* Верхня частина: Лого та Опис */}
        <header className="flex flex-col items-center text-center space-y-4">
          {/* Логотип */}
          <div className="relative w-32 h-32 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Bonny Bloom Logo"
              fill
              className="object-cover"
            />
          </div>

          {/* Назва та Біо */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Bonny Bloom Studio
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed max-w-xs mx-auto">
              ✨ Bonny Bloom — настрій у стібках <br />
              🌸 Схеми для вишивки, що закохують <br />
              🌿 Легкі сюжети, теплі емоції
            </p>
          </div>

          {/* Ряд соціальних іконок (маленькі) */}
          <div className="flex gap-6 text-gray-700 mt-2">
            <a
              href="https://www.instagram.com/bonny.bloom.studio/"
              target="_blank"
              className="hover:text-black transition transform hover:scale-110"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://www.youtube.com/@BonnyArt"
              target="_blank"
              className="hover:text-black transition transform hover:scale-110"
            >
              <Youtube size={28} />
            </a>
            <a
              href="https://www.facebook.com/bonny.bloom.studio"
              target="_blank"
              className="hover:text-black transition transform hover:scale-110"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://www.threads.com/@bonny.bloom.studio"
              target="_blank"
              className="hover:text-black transition transform hover:scale-110"
            >
              <AtSign size={28} />
            </a>
          </div>
        </header>

        {/* Список посилань (великі кнопки) */}
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              {link.image ? (
                // Блок з картинкою (якщо колись знадобиться)
                <div className="flex flex-col">
                  <div className="relative w-full h-48">
                    <Image
                      src={link.image}
                      alt={link.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-center">
                    <span className="font-medium">{link.title}</span>
                  </div>
                </div>
              ) : (
                // Стандартна кнопка (без трикрапок)
                <div className="flex items-center p-4">
                  <div className="bg-gray-100 p-2 rounded-full mr-4 text-gray-800">
                    {link.icon || <Globe size={20} />}
                  </div>
                  {/* Текст тепер центрується вільно */}
                  <span className="font-medium grow text-center">
                    {link.title}
                  </span>
                  {/* Пустий блок справа для балансу (щоб текст був візуально по центру), 
                      бо зліва є іконка ~40px. Можна прибрати, якщо не подобається. */}
                  <div className="w-10"></div>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Футер */}
        <footer className="text-center pt-8 pb-4">
          <a
            href="#"
            className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase tracking-widest opacity-70 hover:opacity-100 transition"
          >
            <div className="w-8 h-8 relative">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="rounded-full object-cover"
              />
            </div>
            Bonny Bloom Studio
          </a>
        </footer>
      </div>
    </main>
  );
}
