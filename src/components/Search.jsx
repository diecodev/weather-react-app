import getDate from "./getDate";
import "./search.scss";
import "./api-data.scss";
import { useState } from "react";
import Api from "./Api"

const Search = () => {

    const dates = getDate(new Date());

    const [query, setQuery] = useState('');
    const [info, setInfo] = useState({})

    const fetchAPI = () => {
        const { link, key } = Api

        fetch(`${link}${query}&units=metric&appid=${key}`)
            .then(res => res.json())
            .then(data => setInfo({
                name: `${data.name}`,
                country: `${data.sys.country}`,
                temperature: `${Math.floor(data.main.temp)}`,
                description: `${data.weather[0].description}`
            }))
            .catch(err => setInfo({ message: "couldn't find this city." }))
    }

    const getData = (e) => {
        if (e.key === "Enter" && document.getElementById("search").value) {
            fetchAPI()
            setQuery('')
            document.getElementById("search").value = '';
        } else if (e.key === " ") {
            setQuery(query + '%20')
        } else {
            setQuery(query + e.key)
        }
    }

    const deleteWord = (e) => {
        if (e.key === "Backspace" && query[query.length - 1] === "0") {
            setQuery(query.substring(0, query.length - 3))
        } else if (e.key === "Backspace") {
            setQuery(query.substring(0, query.length - 1))
        }

    }

    return (
        <div className="global-container">
            <main>
                <div className="search-input-container">
                    <div className="animation">
                        <input
                            type="text"
                            name="search city"
                            className="search-input"
                            id="search"
                            required
                            autoFocus
                            onChange={() => console.log(query)}
                            onKeyPress={getData}
                            onKeyDownCapture={deleteWord}
                            autoComplete="off"
                        />
                        <label htmlFor="search" className="placeholder">
                            <span>City, Country Abbreviation</span>
                        </label>
                    </div>
                    <i onClick={() => {
                        if (document.getElementById("search").value) {
                            fetchAPI()
                            setQuery('')
                            document.getElementById("search").value = '';
                        }
                    }}>
                        <svg x="0px" y="0px" width="32" height="32" viewBox="0 0 512.005 512.005"><path fill="currentcolor" d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667 S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6 c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z" /></svg>
                    </i>
                </div>

                {(info.name && info.country && info.temperature && info.description)
                    ? <div className="city-searched">
                        <div className="city-container">
                            <div className="location">
                                <div className="city-name">{`${info.name}, ${info.country}`}</div>
                            </div>
                            <div className="date">{dates}</div>
                            <div className="temperture-card">{info.temperature}ºC</div>
                            <div className="date">{info.description}</div>

                        </div>
                    </div>
                    : <div className="city-searched">
                        <div className="city-container">
                            <p className="date">{info.message}</p>
                        </div>
                    </div>}
            </main>
        </div>
    )
}

export default Search
