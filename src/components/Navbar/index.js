import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      const navbarBgColor = isDarkTheme ? 'navBar-bg-dark' : 'navBar-bg-light'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navItemColor = isDarkTheme ? 'nav-item-dark' : 'nav-item-light'

      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={`nav-container ${navbarBgColor}`}>
          <div className="nav-items-container">
            <Link to="/">
              <img
                src={websiteLogo}
                className="website-logo"
                alt="website logo"
              />
            </Link>
            <ul className="nav-item-container">
              <Link to="/" className="nav-item">
                <li className={`nav-item ${navItemColor}`}>Home</li>
              </Link>
              <Link to="/about" className="nav-item">
                <li className={`nav-item ${navItemColor}`}>About</li>
              </Link>
            </ul>
            <button
              className="theme-button"
              data-testid="theme"
              type="button"
              onClick={onChangeTheme}
            >
              <img src={themeImage} className="theme-img" alt="theme" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
