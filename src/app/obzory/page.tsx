/* 
 Этот файл задает страницу «Обзоры».
 Он показывает навигацию, заголовок раздела и временный текст.
 Здесь человек может читать обзоры, а позже мы добавим список материалов.
*/
import styles from "./page.module.css";
import SiteFooter from "../../components/SiteFooter";

export default function ReviewsPage() {
  return (
    <main className={styles.page}>
      {/* Этот блок показывает заголовок страницы и описание раздела. */}
      <section className={styles.section} aria-labelledby="reviews-title">
        <div className={styles.sectionContent}>
          <p className={styles.sectionKicker}>Раздел</p>
          <h1 className={styles.pageTitle} id="reviews-title">
            Обзоры
          </h1>
          <p className={styles.leadText}>
            Здесь будет лента свежих обзоров ИИ-инструментов. Пока мы готовим
            контент, можете оставить страницу открытой и вернуться позже.
          </p>
        </div>
      </section>

      {/* Этот блок завершает страницу служебными ссылками. */}
      <SiteFooter />
    </main>
  );
}
