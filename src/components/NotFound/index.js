import './index.css'
import Header from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? 'bg-dark' : 'bg-light'

      const heading = isDarkTheme ? 'dark' : 'light'

      const notFoundDescription = isDarkTheme ? 'dark' : 'light'

      return (
        <>
          <Header />
          <div className={`notFound-container ${bgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="notFound-img"
              alt="not found"
            />
            <h1 className={heading}>Lost Your Way?</h1>
            <p className={`notFound-description ${notFoundDescription}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
