import Image from "next/image";
import {
  Instagram,
  Facebook,
  Youtube,
  AtSign,
  Globe,
  Mail,
  BookOpen,
  Palette,
  Sparkles,
} from "lucide-react";

type LinkData = {
  title: React.ReactNode | string;
  url: string;
  icon: React.ReactNode;
};

export default function Home() {
  const artLinks: LinkData[] = [
    {
      title: (
        <span className="flex items-center justify-center gap-2">
          Каталог (UA)
          <Image
            src="/ua-flag.png"
            alt="UA Flag"
            width={20}
            height={15}
            className="object-contain"
          />
        </span>
      ),
      url: "https://drive.google.com/drive/u/2/folders/1dfnZDVd_LkGo-ES1OPvgZ07Og8Pubn7b",
      icon: <BookOpen size={24} />,
    },
    {
      title: (
        <span className="flex items-center justify-center gap-2">
          Catalog (EN)
          <Image
            src="/en-flag.png"
            alt="EN Flag"
            width={20}
            height={15}
            className="object-contain"
          />
        </span>
      ),
      url: "https://drive.google.com/drive/u/2/folders/1dfnZDVd_LkGo-ES1OPvgZ07Og8Pubn7b", // todo: Твій лінк на EN каталог Bonny Art
      icon: <BookOpen size={24} />,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/bonny.art/",
      icon: <Instagram size={24} />,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/BonnyArtStitch",
      icon: <Facebook size={24} />,
    },
    {
      title: "Threads",
      url: "https://www.threads.com/@bonny.art",
      icon: <AtSign size={24} />,
    },
  ];

  // 🌸 Двері №2: Світ Bonny Bloom
  const bloomLinks: LinkData[] = [
    {
      title: (
        <span className="flex items-center justify-center gap-2">
          Каталог (UA)
          <Image
            src="/ua-flag.png"
            alt="UA Flag"
            width={20}
            height={15}
            className="object-contain"
          />
        </span>
      ),
      url: "https://drive.google.com/drive/folders/10Nwcpf4IAzT4U37dGG5c1giRrcLvJkIy",
      icon: <BookOpen size={24} />,
    },
    {
      title: (
        <span className="flex items-center justify-center gap-2">
          Catalog (EN)
          <Image
            src="/en-flag.png"
            alt="EN Flag"
            width={20}
            height={15}
            className="object-contain"
          />
        </span>
      ),
      url: "https://drive.google.com/drive/folders/1GwMM35A5ZrdgCsGiWZu-BRYXtkzF3S-h",
      icon: <BookOpen size={24} />,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/bonny.bloom.studio/",
      icon: <Instagram size={24} />,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/bonny.bloom.studio",
      icon: <Facebook size={24} />,
    },
    {
      title: "Threads",
      url: "https://www.threads.com/@bonny.bloom.studio",
      icon: <AtSign size={24} />,
    },
  ];

  // ✉️ Спільний простір: Контакти
  const generalLinks: LinkData[] = [
    {
      title: "YouTube канал",
      url: "https://www.youtube.com/@BonnyArt",
      icon: <Youtube size={24} />,
    },
    {
      title: "Написати мені на пошту",
      url: "mailto:bonnybloom.com.ua@gmail.com",
      icon: <Mail size={24} />,
    },
  ];

  // Компонент для відмальовки кнопок. Тепер він знає, що 'link' має тип 'LinkData'
  const LinkButton = ({ link }: { link: LinkData }) => (
    <a
      href={link.url}
      target={
        link.url.startsWith("mailto:") || link.url === "#" ? "_self" : "_blank"
      }
      rel="noopener noreferrer"
      className="flex items-center p-4 bg-white/95 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-transparent hover:border-gray-200"
    >
      <div className="bg-gray-50 p-2 rounded-full mr-4 text-gray-800 group-hover:bg-gray-100 transition-colors">
        {link.icon || <Globe size={20} />}
      </div>
      <span className="font-medium grow text-center text-gray-800 group-hover:text-black transition-colors">
        {link.title}
      </span>
      <div className="w-10"></div>
    </a>
  );

  return (
    <main className="min-h-screen bg-slate-50 flex justify-center py-12 px-4 font-sans text-slate-800 overflow-x-hidden">
      {/* Ось вона, наша нова чиста магія!
        До 374px - тягнеться (w-full).
        Від 375 до 767px - зафіксовано 375px.
        Від 768 до 1439px - зафіксовано 768px.
        Від 1440px і далі - зафіксовано 1440px.
      */}
      <div className="xs:w-[343px] md:w-176 2xl:w-7xl flex flex-col items-center space-y-10">
        {/* ГОЛОВНИЙ ВХІД (ШАПКА) */}
        <header className="flex flex-col items-center text-center space-y-5">
          <div className="relative w-36 h-36 overflow-hidden rounded-full shadow-lg border-4 border-white">
            <Image
              src="/avatar.png"
              alt="Svitlanka - Bonny Studio"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Bonny Studio
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm mx-auto font-medium">
              One creator — two cross stitch worlds. <br />
              <span className="font-normal opacity-80 mt-1 block">
                Від милих сюжетів до масштабних картин.
              </span>
            </p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-6">
          {/* БЛОК 1: BONNY ART */}
          <section className="bg-amber-50/40 p-5 rounded-2xl shadow-sm border border-amber-100/50 space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Palette size={20} className="text-amber-600" />
              <h2 className="text-xl font-semibold text-gray-800">Bonny Art</h2>
            </div>
            <p className="text-xs text-center text-gray-600 mb-4">
              Мої великі багатоколірні шедеври
            </p>

            <div className="space-y-3">
              {artLinks.map((link, index) => (
                <LinkButton key={`art-${index}`} link={link} />
              ))}
            </div>
          </section>

          {/* БЛОК 2: BONNY BLOOM */}
          <section className="bg-rose-50/40 p-5 rounded-2xl shadow-sm border border-rose-100/50 space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles size={20} className="text-rose-400" />
              <h2 className="text-xl font-semibold text-gray-800">
                Bonny Bloom
              </h2>
            </div>
            <p className="text-xs text-center text-gray-600 mb-4">
              Мої милі та затишні сюжети
            </p>

            <div className="space-y-3">
              {bloomLinks.map((link, index) => (
                <LinkButton key={`bloom-${index}`} link={link} />
              ))}
            </div>
          </section>
        </div>

        {/* БЛОК 3: СПІЛЬНІ КОНТАКТИ */}
        {/* Фіксуємо ширину для контактів, щоб вони не розповзалися на всю сторінку на планшеті */}
        <section className="pt-4 space-y-3 w-full xs:w-[375px] md:w-100">
          {generalLinks.map((link, index) => (
            <LinkButton key={`gen-${index}`} link={link} />
          ))}
        </section>

        {/* ПІДВАЛ */}
        <footer className="text-center pt-8 pb-4">
          <p className="text-gray-500 text-xs uppercase tracking-widest opacity-70">
            Made with warmth in Ukraine 🌸
          </p>
        </footer>
      </div>
    </main>
  );
}
