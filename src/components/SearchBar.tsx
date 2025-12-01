/* 
 Этот файл описывает форму поиска, которую можно ставить в разных секциях и на разных страницах.
 Она показывает поле ввода и кнопку, чтобы быстро найти материалы.
 Она помогает сразу перейти к нужной теме из любого места, где расположена.
*/
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <form className={styles.search} role="search">
      {/* Эта подпись объясняет, что можно искать статьи по запросу. */}
      <label className={styles.label} htmlFor="hero-search">
        Поиск по статьям
      </label>

      {/* Этот блок содержит поле ввода и кнопку отправки. */}
      <div className={styles.fields}>
        <input
          className={styles.input}
          id="hero-search"
          type="search"
          name="q"
          placeholder="Например: «обзор модели для текста»"
        />
        <button className={styles.button} type="submit">
          Найти
        </button>
      </div>
    </form>
  );
}
