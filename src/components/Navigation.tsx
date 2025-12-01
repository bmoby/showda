/* 
 Этот файл описывает панель навигации сайта.
 Она показывает название проекта и список ссылок по разделам.
 Она помогает быстро перейти в нужный раздел.
*/
"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navigation.module.css";

type NavigationLink = {
  label: string;
  href: string;
  iconSrc?: string;
};

// Этот список хранит пункты меню и значки, которые видно в шапке...
const navigationLinks: NavigationLink[] = [
  { label: "Новости", href: "/", iconSrc: "/icons/news-icon.png" },
  { label: "Обзоры", href: "/obzory", iconSrc: "/icons/test-icon.png" },
  { label: "Гайды", href: "#", iconSrc: "/icons/rating-icon.png" },
];

export default function Navigation() {
  /* Эта переменная открывает и закрывает мобильное меню по клику... */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /* Этот путь помогает подсветить активный пункт меню. */
  const pathname = usePathname();

  /* Эта функция переключает меню, когда человек нажимает на кнопку. */
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navId = "main-navigation";
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {/* Эта строка показывает название проекта. */}
        <div className={styles.brandRow}>
          <strong className={styles.brand}>ИИ-N</strong>
          <button
            type="button"
            className={styles.menuToggle}
            aria-controls={navId}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            {isMenuOpen ? "Закрыть" : "Меню"}
          </button>
        </div>

        {/* Этот блок выводит основные ссылки по разделам. */}
        <nav
          id={navId}
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          aria-label="Основная навигация"
        >
          <ul className={styles.navList}>
            {navigationLinks.map((link) => (
              <li key={link.label} className={styles.navItem}>
                <a
                  className={`${styles.navLink} ${
                    pathname === link.href ? styles.navLinkActive : ""
                  }`}
                  href={link.href}
                >
                  {link.iconSrc && (
                    <Image
                      className={styles.navIcon}
                      src={link.iconSrc}
                      alt=""
                      width={18}
                      height={18}
                      aria-hidden="true"
                    />
                  )}
                  <span className={styles.navText}>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// versiya 2
// versiya 2 ++

// versiya 3
