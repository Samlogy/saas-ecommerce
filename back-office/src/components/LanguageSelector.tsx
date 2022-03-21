import { useTranslation } from 'react-i18next'

function LanguageSelector() {
  const { i18n } = useTranslation()

  const changeLanguage = (e: any) => {
    const locale = e.target.value
    i18n.changeLanguage(locale)
  }

  return (
    <select onChange={changeLanguage} defaultValue={i18n.language} className="select-language">
      {i18n.options.supportedLngs &&
        i18n.options.supportedLngs.map(
          (lang: string) =>
            lang !== 'cimode' && (
              <option key={lang} value={lang}>
                {lang}
              </option>
            )
        )}
    </select>
  )
}

export default LanguageSelector
