import Styles from "./Styles.module.css";

const Button = ({label}) => {
    return (
      <div>
        <button type="submit" className={Styles.btn}>
          {label}
        </button>
      </div>
    );
};

export default Button;