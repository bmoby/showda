/* 
 Этот файл задает стартовую страницу.
 Он показывает панель навигации, герой-блок с миссией проекта и ключевые разделы.
 Здесь можно добавлять новые блоки после вступительной части.
*/
import styles from "./page.module.css";
import SearchBar from "../components/SearchBar";
import SiteSections from "../components/SiteSections";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Этот блок показывает главное сообщение и объясняет смысл проекта. */}
      <section
        className={`${styles.section} ${styles.hero}`}
        aria-labelledby="hero-title"
      >
        {/* Этот контейнер выравнивает содержимое по одной вертикали. */}
        <div className={`${styles.sectionContent} ${styles.heroContent}`}>
          {/* Эта строка помогает понять, к какой теме относится текст ниже. */}
          <p className={styles.sectionKicker}>Миссия проекта</p>

          {/* Этот заголовок заявляет ключевое обещание страницы. */}
          <h1 className={styles.heroTitle} id="hero-title">
            Только проверенные ИИ-новинки. Мы тестируем – вы узнаёте правду.
          </h1>

          {/* Этот абзац кратко описывает, что пользователь получает от проекта. */}
          <p className={styles.leadText}>
            Публикуем новости и обзоры без хайпа – с фактами, источниками и
            честными выводами. Здесь вы быстро понимаете, что в ИИ действительно
            работает, а что — просто маркетинг.
          </p>

          {/* Этот текст уточняет, что именно есть на главной странице. */}
          <p className={styles.subText}>
            На главной — свежие новости и обзоры, рекомендованные материалы и
            удобная навигация по разделам.
          </p>

          {/* Эта форма дает быстрый поиск материалов прямо из любой секции. */}
          <div className={styles.heroSearch}>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Этот блок показывает свежие новости и обзоры. */}
      <section className={styles.section} aria-labelledby="updates-title">
        {/* Этот контейнер выравнивает блоки в одну колонку. */}
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="updates-title">
              Последние обновления
            </h2>
            <p className={styles.sectionText}>
              Живой поток свежих материалов: последние новости ИИ и честные
              обзоры инструментов.
            </p>
          </div>

          <div className={styles.stack}>
            {/* Этот блок содержит ленту новостей. */}
            <section
              className={styles.columnSection}
              aria-labelledby="news-title"
            >
              <h3 className={styles.columnTitle} id="news-title">
                Последние новости ИИ
              </h3>
              <p className={styles.sectionText}>
                Обновляем ленту по мере выхода важных новостей. Даты у каждой
                статьи подчёркивают актуальность.
              </p>

              <ul className={styles.contentList}>
                <li className={styles.contentCard}>
                  <p className={styles.contentMeta}>14 ноября 2025</p>
                  <h4>
                    <a className={styles.contentLink} href="#">
                      Крупное обновление генеративной модели от крупного вендора
                    </a>
                  </h4>
                  <p>
                    Разбираем, что на самом деле изменилось в новой версии:
                    качество ответов, безопасность, ограничения и реальная
                    польза для пользователей.
                  </p>
                </li>
                <li className={styles.contentCard}>
                  <p className={styles.contentMeta}>13 ноября 2025</p>
                  <h4>
                    <a className={styles.contentLink} href="#">
                      Регуляторы выпустили новые рекомендации по использованию
                      ИИ
                    </a>
                  </h4>
                  <p>
                    Кратко и по делу: что важно знать продуктовым командам и
                    исследователям, чтобы не столкнуться с юридическими рисками.
                  </p>
                </li>
                <li className={styles.contentCard}>
                  <p className={styles.contentMeta}>12 ноября 2025</p>
                  <h4>
                    <a className={styles.contentLink} href="#">
                      Новый сервис для генерации изображений: тестируем качества
                      и ограничения
                    </a>
                  </h4>
                  <p>
                    Показываем реальные примеры, сравниваем с альтернативами и
                    честно рассказываем, где инструмент проваливается.
                  </p>
                </li>
              </ul>
            </section>

            {/* Этот блок показывает новые обзоры. */}
            <section
              className={styles.columnSection}
              aria-labelledby="reviews-title"
            >
              <h3 className={styles.columnTitle} id="reviews-title">
                Новые обзоры
              </h3>
              <p className={styles.sectionText}>
                Детальные разборы ИИ-продуктов: сценарии использования,
                ограничения и кому инструмент действительно полезен.
              </p>

              <ul className={styles.contentList}>
                <li className={styles.contentCard}>
                  <p className={styles.contentMeta}>Обзор · 10 минут чтения</p>
                  <h4>
                    <a className={styles.contentLink} href="#">
                      Обзор ИИ-ассистента для программистов: стоит ли подключать
                      команду?
                    </a>
                  </h4>
                  <p>
                    Мы проверили, как ассистент ведёт себя в реальных задачах:
                    рефакторинг, поиск багов, помощь джунам и экономия времени
                    сеньоров.
                  </p>
                </li>
                <li className={styles.contentCard}>
                  <p className={styles.contentMeta}>Обзор · 7 минут чтения</p>
                  <h4>
                    <a className={styles.contentLink} href="#">
                      Генератор текстов для маркетинга: честный тест без
                      промо-хайпа
                    </a>
                  </h4>
                  <p>
                    Проверяем качество текстов, уникальность, удобство
                    интерфейса и насколько сервис помогает маркетинг-командам в
                    повседневной работе.
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      {/* Этот блок выделяет рекомендуемые и популярные материалы. */}
      <section className={styles.section} aria-labelledby="featured-title">
        {/* Этот контейнер собирает все материалы в одну вертикальную ленту. */}
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="featured-title">
              Рекомендуем и популярное
            </h2>
            <p className={styles.sectionText}>
              Выделяем обзоры и статьи, которые команда оценила высоко, а также
              материалы, набравшие внимание читателей.
            </p>
          </div>

          <div className={styles.stack}>
            {/* Этот блок выделяет главный материал. */}
            <article
              className={styles.highlightPanel}
              aria-labelledby="highlight-title"
            >
              <p className={styles.sectionKicker}>Протестировано командой</p>
              <h3 className={styles.columnTitle} id="highlight-title">
                Глубокий обзор инновационного ИИ-продукта: сильные и слабые
                стороны без маркетинга
              </h3>
              <p>
                Мы тщательно протестировали продукт на реальных сценариях: от
                рабочих задач до граничных кейсов. В обзоре — честный разбор
                возможностей, ограничений и того, кому инструмент действительно
                имеет смысл внедрять.
              </p>
              <p>
                В тексте вы найдёте метрики, примеры запросов и ответы,
                сравнение с конкурентами и отдельно отмеченные риски.
              </p>
              <a className={styles.contentLink} href="#">
                Читать подробный обзор
              </a>
            </article>

            {/* Этот список показывает популярные материалы. */}
            <aside
              className={styles.popularList}
              aria-label="Популярные материалы"
            >
              <h3 className={styles.columnTitle}>Популярное среди читателей</h3>
              <ul className={styles.contentList}>
                <li className={styles.contentCard}>
                  <p className={styles.columnTitle}>
                    7 ошибок при внедрении ИИ-инструментов в компании
                  </p>
                  <p className={styles.contentMeta}>
                    Аналитика · часто сохраняют в закладки
                  </p>
                </li>
                <li className={styles.contentCard}>
                  <p className={styles.columnTitle}>
                    Как оценить качество ответа от модели: практическое
                    руководство
                  </p>
                  <p className={styles.contentMeta}>
                    Гайд · подходит продукт-менеджерам и разработчикам
                  </p>
                </li>
                <li className={styles.contentCard}>
                  <p className={styles.columnTitle}>
                    Подборка инструментов для продвинутой работы с текстом и
                    кодом
                  </p>
                  <p className={styles.contentMeta}>
                    Справочник · обновляется по мере выхода новых сервисов
                  </p>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Этот блок показывает карту разделов и быстрый поиск. */}
      <SiteSections />

      {/* Этот блок завершает страницу служебными ссылками. */}
      <SiteFooter />
    </main>
  );
}
