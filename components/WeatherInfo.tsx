import styles from '../styles/WeatherInfo.module.scss'
import Image from 'next/image'
import WeatherData from '../types/WeatherData'

type AppProps = {
    data: WeatherData
}

const WeatherInfo = ({ data }: AppProps): JSX.Element => {
    if (!data) {
        return (
            <div className={styles.box}>
                <span>Search for city above...</span>
            </div>
        )
    }
    return (
        <div className={styles.box}>
            <h1><Image width="100px" height="100px" src="http://openweathermap.org/img/wn/10d@4x.png" /> {data.name}, {data.country} <p>{data.temperature} °C</p></h1>
            <div className={ styles.data_list_fragment }>
                <ul className={styles.data_list}>
                    <li><h3>Feels Like:</h3> <p>{data.feels_like} °C</p></li>
                    <li><h3>Weather:</h3> <p>{data.weather_type}</p></li>
                    <li><h3>Description:</h3> <p>{data.weather_type_desc}</p></li>
                </ul>
                <ul className={styles.data_list}>
                    <li><h3>Pressure:</h3> <p>{data.pressure} hPa</p></li>
                    <li><h3>Humidity:</h3> <p>{data.humidity} %</p></li>
                    <li><h3>Cloudiness:</h3> <p>{data.cloudiness} %</p></li>
                </ul>
            </div>
        </div>
    );
}

export default WeatherInfo;