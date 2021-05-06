import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import WeatherInfo from '../components/WeatherInfo'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: null,
      search: '',
      title: null
    }
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value })
  }

  async handleSearchSubmit(e) {
    e.preventDefault()
    this.setState({ title: this.state.search })
    fetch('/api/weather?name=' + this.state.search)
      .then(res => {
        res.json()
          .then(data => {
            this.setState({ weatherData: data })
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
              <input placeholder="Search..." type="text" value={this.state.search} onChange={(e) => { this.handleSearchChange(e) }} />
              <button onClick={(e) => { this.handleSearchSubmit(e) }}><i className="fas fa-search"></i></button>
            </div>
          </div>
          <WeatherInfo data={this.state.weatherData} />
        </div>
      </>
    )
  }
}

export default Home