import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
            <div className="wrapper">
            <h1 className='title'>Find Your Dream Home</h1>
            <p>Want to explore your dream place to live? We are here to help you find the perfect home.</p>
            <SearchBar />
            <div className="boxes">
                <div className="box">
                    <h1>2000+</h1>
                    <h2>Properties</h2>
                </div>
                <div className="box">
                    <h1>80+</h1>
                    <h2>Awards</h2>
                </div>
                <div className="box">
                    <h1>20+</h1>
                    <h2>Years Of Experience</h2>
                </div>
            </div>
            </div>
            </div>
            <div className="imgContainer">
            <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage