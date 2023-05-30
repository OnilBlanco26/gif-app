import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onAddCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form className="w-full flex items-center justify-center" onSubmit={onSubmit} action="">
      <input
        type="text"
        placeholder="Search GIFS..."
        className="rounded-md input input-bordered input-warning w-full max-w-sm text-white font-bold"
        value={inputValue}
        onChange={handleOnChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}

export default AddCategory;
