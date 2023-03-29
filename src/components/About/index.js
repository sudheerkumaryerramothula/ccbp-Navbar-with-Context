import Header from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? 'bg-dark' : 'bg-light'

      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const heading = isDarkTheme ? 'dark' : 'light'

      return (
        <>
          <Header />
          <div className={`about-container ${bgColor}`}>
            <img src={aboutImg} className="about-img" alt="about" />
            <h1 className={heading}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
