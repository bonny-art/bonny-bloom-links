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
      url: "https://drive.google.com/drive/u/2/folders/1dfnZDVd_LkGo-ES1OPvgZ07Og8Pubn7b",
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
    {
      title: (
        <span className="flex flex-col items-center justify-center space-y-0.5">
          <span className="font-semibold text-[15px]">
            Order pattern via Email
          </span>
          <span className="text-xs font-normal text-gray-500">
            Написати для замовлення
          </span>
        </span>
      ),
      url: "mailto:bonnyart.com.ua@gmail.com",
      icon: <Mail size={24} />,
    },
  ];

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
    {
      title: (
        <span className="flex flex-col items-center justify-center space-y-0.5">
          <span className="font-semibold text-[15px]">
            Order pattern via Email
          </span>
          <span className="text-xs font-normal text-gray-500">
            Написати для замовлення
          </span>
        </span>
      ),
      url: "mailto:bonnybloom.com.ua@gmail.com",
      icon: <Mail size={24} />,
    },
  ];

  const generalLinks: LinkData[] = [
    {
      title: "TikTok",
      url: "https://www.tiktok.com/@svitlana.otenko.studio",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 461 512.235"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <g fillRule="nonzero">
            <path
              fill="#2DCCD3"
              d="M370.934 98.964c19.378 19.981 43.543 32.158 67.898 37.7v-15.005c-22.884-1.621-46.823-8.822-67.898-22.695zM230.952 0v335.533c0 43.959-31.593 72.234-70.009 72.234-12.743 0-24.844-2.978-35.363-8.483 13.346 17.041 34.421 26.843 57.531 26.843 38.417 0 70.01-28.275 70.01-72.272V18.322h60.886C312.348 12.479 310.99 6.371 309.934 0h-78.982zM181 195.062v-16.627c-7.691-1.281-15.382-1.696-21.753-1.696C72.573 176.739 0 246.296 0 332.555c0 56.626 27.559 105.033 69.444 133.685-29.18-28.953-47.276-69.481-47.276-115.362 0-86.109 72.347-155.628 158.832-155.816z"
            />
            <path
              fill="#F1204A"
              d="M318.87 329.991c0 107.144-81.96 163.921-159.209 163.921-33.44 0-64.505-10.103-90.217-27.672 28.879 28.652 68.616 45.995 112.385 45.995 77.248 0 159.208-56.777 159.208-163.921V173.723c-7.69-5.203-15.08-11.272-22.167-18.36v174.628zm-193.289 69.294c-9.426-11.914-15.043-27.334-15.043-45.43 0-50.782 39.698-77.624 92.629-72.045v-85.052c-7.69-1.282-15.381-1.697-21.79-1.697H181v68.389c-52.931-5.542-92.63 21.263-92.63 72.083 0 29.707 15.193 52.252 37.211 63.752zm313.251-262.621v63.525c-35.174 0-68.464-6.711-97.795-26.466 34.157 34.157 75.59 44.826 119.963 44.826v-78.567a137.713 137.713 0 01-22.168-3.318zm-67.898-37.701c-18.737-19.265-33.026-45.806-38.832-80.641h-18.095c10.329 37.663 31.592 63.94 56.927 80.641z"
            />
            <path
              fill="currentColor"
              d="M159.661 493.912c77.248 0 159.209-56.777 159.209-163.921V155.364c7.088 7.087 14.477 13.157 22.168 18.359 29.33 19.755 62.62 26.466 97.794 26.466v-63.525c-24.354-5.542-48.52-17.72-67.898-37.7-25.335-16.702-46.597-42.979-56.928-80.641H253.12v335.533c0 43.996-31.593 72.271-70.009 72.271-23.111 0-44.185-9.801-57.531-26.842-22.017-11.499-37.21-34.044-37.21-63.751 0-50.821 39.698-77.626 92.63-72.084v-68.388c-86.485.189-158.832 69.708-158.832 155.815 0 45.882 18.096 86.409 47.277 115.363 25.711 17.569 56.776 27.672 90.216 27.672z"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "YouTube канал",
      url: "https://www.youtube.com/@BonnyArt",
      icon: <Youtube size={24} />,
    },
  ];

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
      <div className="xs:w-[343px] md:w-176 2xl:w-7xl flex flex-col items-center space-y-10">
        {/* ШАПКА */}
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

          {/* Плашка з інструкцією */}
          <div className="bg-white px-5 py-4 rounded-2xl shadow-sm border border-gray-100 max-w-sm w-full space-y-1.5 mt-2">
            <p className="text-sm font-semibold text-gray-800">
              👇 How to buy: Choose a PDF pattern in the Catalog and email me!
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Як купити: оберіть PDF-схему в каталозі та напишіть мені на пошту
            </p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-6">
          {/* BONNY ART */}
          <section className="bg-amber-50/40 p-5 rounded-2xl shadow-sm border border-amber-100/50 space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Palette size={20} className="text-amber-600" />
              <h2 className="text-xl font-semibold text-gray-800">Bonny Art</h2>
            </div>

            <div className="text-center mb-5 space-y-1">
              <p className="text-sm font-medium text-gray-800">
                My full-coverage multicolor masterpieces
              </p>
              <p className="text-xs text-gray-500">
                Мої великі багатоколірні шедеври
              </p>
            </div>

            <div className="space-y-3">
              {artLinks.map((link, index) => (
                <LinkButton key={`art-${index}`} link={link} />
              ))}
            </div>
          </section>

          {/* BONNY BLOOM */}
          <section className="bg-rose-50/40 p-5 rounded-2xl shadow-sm border border-rose-100/50 space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles size={20} className="text-rose-400" />
              <h2 className="text-xl font-semibold text-gray-800">
                Bonny Bloom
              </h2>
            </div>

            <div className="text-center mb-5 space-y-1">
              <p className="text-sm font-medium text-gray-800">
                My cute and cozy designs
              </p>
              <p className="text-xs text-gray-500">
                Мої милі та затишні сюжети
              </p>
            </div>

            <div className="space-y-3">
              {bloomLinks.map((link, index) => (
                <LinkButton key={`bloom-${index}`} link={link} />
              ))}
            </div>
          </section>
        </div>

        {/* СПІЛЬНІ КОНТАКТИ */}
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
