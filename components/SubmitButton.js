import styles from '../styles/Home.module.scss'

const SubmitButton = ({ loading }) => {
    return (
        <button className={loading ? styles.loading_button : ""} type="submit">{loading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-search"></i>}</button>
    );
}

export default SubmitButton;