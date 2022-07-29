import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = inputValue.trim();
        if (newValue.length<=1) return;
        // setCategories(cat => [...cat,inputValue]);
        onNewCategory(newValue);
        setInputValue('')
    }

  return (
    <form onSubmit={(event)=> onSubmit(event)}>
        <input
            type="Text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
