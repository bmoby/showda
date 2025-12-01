/* 
 Этот файл описывает раздел с картой сайта и быстрым поиском.
 Он показывает список разделов и форму, чтобы быстро найти материалы.
 Он помогает человеку выбрать направление или сразу найти запрос.
*/
import styles from "./SiteSections.module.css";
import SearchBar from "./SearchBar";

// Этот список хранит основные разделы материалов.
const siteSections = [
  {
    title: "Новости",
    description:
      "Последние события в мире ИИ: кратко, с проверенными источниками и ссылками на исследования.",
  },
  {
    title: "Обзоры",
    description:
      "Честные разборы ИИ-инструментов: возможности, цена и реальная польза в ежедневной работе.",
  },
  {
    title: "Гайды",
    description:
      "Пошаговые инструкции и практические руководства по работе с моделями, сервисами и инструментами.",
  },
  {
    title: "Аналитика",
    description:
      "Глубокие статьи и разборы тенденций, влияния ИИ на индустрии и процессы внутри компаний.",
  },
];

export default function SiteSections() {
  return (
    <section className={styles.section} aria-labelledby="navigation-title">
      <div className={styles.content}>
        {/* Этот блок вводит тему раздела и объясняет пользу. */}
        <div className={styles.header}>
          <h2 className={styles.title} id="navigation-title">
            Разделы сайта и быстрый поиск
          </h2>
          <p className={styles.text}>
            Видите структуру ресурса сразу: выберите нужный раздел или найдите конкретный запрос через поиск.
          </p>
        </div>

        <div className={styles.stack}>
          {/* Этот список показывает основные разделы материалов. */}
          <nav aria-label="Разделы материалов">
            <ul className={styles.cardList}>
              {siteSections.map((item) => (
                <li key={item.title} className={styles.card}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.text}>{item.description}</p>
                </li>
              ))}
            </ul>
          </nav>

          {/* Эта форма использует общий компонент поиска, чтобы искать статьи. */}
          <div className={styles.searchPanel}>
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}
