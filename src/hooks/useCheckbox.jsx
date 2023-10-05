import { useState } from "react";

export const useCheckbox = (formState, setFormState) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleChangeCheckbox = ({ target: { name, value } }) => {
    if (selectedCheckbox === value) {
      setSelectedCheckbox(null);
    } else {
      setSelectedCheckbox(value);
      setFormState({ ...formState, [name]: value });
    }
  };

  return { handleChangeCheckbox, selectedCheckbox };
};
