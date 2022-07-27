import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const { colorMode: mode } = useColorMode()

  const changeLanguage = (e: any) => {
    const locale = e.target.value
    //const locale = lang.toLowerCase()
    i18n.changeLanguage(locale)
  }

  return (
    <select
      onChange={changeLanguage}
      defaultValue={'fr'}
      className={mode === 'light' ? 'select-language' : 'select-language dark'}
    >
      {i18n.options.supportedLngs &&
        i18n.options.supportedLngs.map(
          (lang: string, idx: number) =>
            lang !== 'cimode' && (
              <option key={idx} value={lang}>
                {lang}
              </option>
            )
        )}
    </select>
  )
}
