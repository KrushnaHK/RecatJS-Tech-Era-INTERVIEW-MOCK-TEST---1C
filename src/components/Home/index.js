/* eslint-disable react/button-has-type */
import {Component} from 'react'
import TailSpin from 'react-loader-spinner'
import Header from '../Header'
import Courses from '../Courses'

class Home extends Component {
  state = {
    isLoading: true,
    isFailed: false,
    isSuccess: false,
    coursesList: [],
  }

  componentDidMount() {
    this.getCourseData()
  }

  getCourseData = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      const updatedData = data.courses.map(each => ({
        id: each.id,
        logoUrl: each.logo_url,
        name: each.name,
      }))

      this.setState({
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        coursesList: updatedData,
      })
    } else {
      this.setState({
        isLoading: false,
        isSuccess: false,
        isFailed: true,
      })
    }
  }

  render() {
    const {isLoading, isSuccess, isFailed, coursesList} = this.state
    return (
      <div>
        <Header />
        <div className="app-container">
          {isLoading && (
            <div data-testid="loader" className="spinner">
              <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}
          {isSuccess && (
            <div>
              <h1 className="home-heading">Courses</h1>
              <ul>
                {coursesList.map(each => (
                  <Courses key={each.id} details={each} />
                ))}
              </ul>
            </div>
          )}

          {isFailed && (
            <div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png "
                  alt="failure view"
                />
              </div>
              <h1>Oops! Something Went Wrong</h1>
              <p>We cannot seem to find the page you are looking for</p>
              <div>
                <button onClick={this.getCourseData}>Retry</button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
