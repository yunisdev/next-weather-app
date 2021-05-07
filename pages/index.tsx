import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import WeatherInfo from '../components/WeatherInfo'
import React from 'react'
import SubmitButton from '../components/SubmitButton'
import WeatherData from '../types/WeatherData'

type HomeProps = {

}

type HomeState = {
  weatherData: WeatherData,
  search: string,
  loading: boolean,
  title: string
}

class Home extends React.Component<HomeProps, HomeState> {
  state: HomeState = {
    weatherData: null,
    search: '',
    title: null,
    loading: false
  }
  constructor(props: HomeProps) {
    super(props)
  }

  handleSearchChange(event: any): void {
    this.setState({ search: event.target.value })
  }

  handleSearchSubmit(e): void {
    e.preventDefault()
    this.setState({ title: this.state.search, loading: true })
    fetch('/api/weather?name=' + this.state.search)
      .then(res => {
        res.json()
          .then((data: WeatherData) => {
            this.setState({ weatherData: data, loading: false })
          })
          .catch(e => alert(e))
      })
      .catch(e => alert(e))
  }

  render() {
    return (
      <>
        <Head>
          <title>Weather{this.state.title ? ` | ${this.state.title}` : ""}</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.search_box}>
            <div>
              <form onSubmit={(e) => { this.handleSearchSubmit(e) }}>
                <input placeholder="Search..." type="text" value={this.state.search} onChange={(e) => { this.handleSearchChange(e) }} />
                <SubmitButton loading={this.state.loading} />
              </form>
            </div>
          </div>
          <WeatherInfo data={this.state.weatherData} />
        </div>
      </>
    )
  }
}

export default Home