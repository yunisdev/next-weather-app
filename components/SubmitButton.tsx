import styles from '../styles/Home.module.scss'

type AppProps = {
    loading: boolean
}

const SubmitButton = ({ loading }: AppProps): JSX.Element => {
    return (
        <button className={loading ? styles.loading_button : ""} type="submit">{loading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-search"></i>}</button>
    );
}

export default SubmitButton;