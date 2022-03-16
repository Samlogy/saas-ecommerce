import { useRouter } from "next/router";

import { useLocale } from "../lib/hooks";

const SelectLanguage = () => {
    const router = useRouter();

    const { locale } = useLocale()

    const changeLanguage = (e: any) => {
      const locale = e.target.value;
      router.push(router.pathname, router.asPath, { locale });
    };

    return(
      <select onChange={changeLanguage} defaultValue={locale} className='select-language'>
        <option className="text-black" value="en"> EN </option>
        <option className="text-black" value="fr"> FR </option>
      </select>
    )
}

export default SelectLanguage;