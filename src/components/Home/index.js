import Header from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? 'bg-dark' : 'bg-light'

      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const heading = isDarkTheme ? 'dark' : 'light'

      return (
        <>
          <Header />
          <div className={`home-container ${bgColor}`}>
            <img src={homeImg} className="home-img" alt="home" />
            <h1 className={heading}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
