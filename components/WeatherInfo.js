import styles from '../styles/WeatherInfo.module.scss'
import Image from 'next/image'

const WeatherInfo = ({ data }) => {
    if (!data) {
        return (
            <div className={styles.box}>
                <span>Search for city above...</span>
            </div>
        )
    }
    return (
        <div className={styles.box}>
            <h1><Image width="100px" height="100px" src="http://openweathermap.org/img/wn/10d@4x.png" /> {data.name} <p>{data.temperature}°C</p></h1>
        </div>
    );
}

export default WeatherInfo;