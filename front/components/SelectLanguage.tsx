import { Select } from "@chakra-ui/react";

const SelectLanguage = () => {
    return(
      <Select w="4.5rem" border="none">
        <option value="en"> EN </option>
        <option value="fr"> FR </option>
      </Select>
    )
  }

export default SelectLanguage;