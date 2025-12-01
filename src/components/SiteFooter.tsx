/* 
 Этот файл описывает подвал сайта.
 Он показывает служебные ссылки и короткое описание проекта.
 Он помогает быстро перейти к основным страницам о проекте.
*/
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer} aria-label="Служебные ссылки">
      <div className={styles.content}>
        {/* Этот абзац кратко описывает проект и его цель. */}
        <p className={styles.text}>
          © Проект проверенных ИИ-новостей. Актуальные и честные материалы об искусственном интеллекте.
        </p>

        {/* Этот список дает ссылки на служебные разделы. */}
        <nav>
          <ul className={styles.linkList}>
            <li>
              <a className={styles.link} href="#">
                О проекте
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                Редполитика
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                Контакты
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                Политика конфиденциальности
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
