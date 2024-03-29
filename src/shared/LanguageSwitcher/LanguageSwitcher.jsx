import useLang from "../../shared/hooks/useLang";

import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
    const { lang, toggleLang } = useLang();

    return (
        <div>
            <span onClick={toggleLang} className={lang === "en" ? styles.currentLang : styles.lang}>EN</span>
            <span onClick={toggleLang} className={lang === "ua" ? styles.currentLang : styles.lang} >UA</span>
        </div>
    )
}

export default LanguageSwitcher;