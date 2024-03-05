import useLang from "../../shared/hooks/useLang";

import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
    const { lang, toggleLang } = useLang();

    return (
        <div>
            <span onClick={toggleLang} className={lang === "en" ? styles.currentLang : styles.lang}>EN</span>
            <span onClick={toggleLang} className={lang === "es" ? styles.currentLang : styles.lang} >ES</span>
        </div>
    )
}

export default LanguageSwitcher;