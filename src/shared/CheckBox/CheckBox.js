import css from './checkbox.module.css';

const CheckBox = ({ onChange, checked }) => {
  return (
    <label className={css.checkboxContainer}>
      <input
        className={css.customCheckbox}
        checked={checked}
        onChange={onChange}
        type="checkbox"
      />
      <span className={css.checkmark}></span>
    </label>
  );
};

export default CheckBox;