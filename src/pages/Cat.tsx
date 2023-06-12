import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import "../styles/Cat-Calendar.css"
import { useState } from "react";
import { catData } from "./Adopt";

const DATA: catData[] = [
    {
        id: 1,
        name: 'snowy',
        gender: '/female.png',
        image: '/cat.png'
    },
    {
        id: 2,
        name: 'snowy',
        gender: '/female.png',
        image: '/cat1.png'
    },
    {
        id: 3,
        name: 'Tiger',
        gender: '/male.png',
        image: '/cat3.png'
    },
    {
        id: 4,
        name: 'Rex',
        gender: '/male.png',
        image: '/cat4.png'
    },
    {
        id: 5,
        name: 'snowy',
        gender: '/female.png',
        image: '/cat5.png'
    },
    {
        id: 6,
        name: 'snowy',
        gender: '/female.png',
        image: '/cat6.png'
    },
    {
        id: 7,
        name: 'snowy',
        gender: '/female.png',
        image: '/cat7.png'
    },
    {
        id: 8,
        name: 'Ash',
        gender: '/male.png',
        image: '/cat8.png'
    },
]

export function Cat() {

    //make cat data context, usecontext and filter by id from params and map the below batata

    const { id } = useParams()
    const [value, setValue] = useState(new Date());
    const [hour, setHour] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [buttonToggle, setButtonToggle] = useState("AM")
    function parseTime(e: React.ChangeEvent<HTMLInputElement>, type: string) {
        const inputs = document.getElementsByClassName("time-input") as HTMLCollectionOf<Element>
        const minutes = inputs[1] as HTMLInputElement
        if (type === "hour") {
            if ((e.target as HTMLInputElement).value.match(/^([1-9]|1[012])$/)) {
                if (parseInt(e.target.value.charAt(0)) > 1) {
                    setHour("0" + (e.target as HTMLInputElement).value)
                    minutes?.focus()
                    minutes.selectionStart = 0
                }
                else
                    setHour((e.target as HTMLInputElement).value)
                if (e.target.selectionEnd === 2) {
                    minutes?.focus()
                    minutes.selectionStart = 0
                }
            }
        }
        if (type == "minutes") {
            if ((e.target as HTMLInputElement).value.match(/^[0-5]?[0-9]$/))
                setMinutes((e.target as HTMLInputElement).value)
        }
        if (type == "focusoutminute") {
            if (e.target.value.length === 1)
                setMinutes("0" + (e.target as HTMLInputElement).value)
        }
        if (type == "focusouthour") {
            if (e.target.value.length === 1) {
                setHour("0" + (e.target as HTMLInputElement).value)

            }
        }
    }

    function onChange(nextValue: Date) {
        setValue(nextValue);
    }

    console.log(value)

    function filterData() {
        return DATA.filter((cat) => { if (id === undefined) { return } else return parseInt(id) === cat.id })
    }
    const filteredData = filterData()

    return <>
        {filteredData.map((i) => (<div className="cat-content-container" key={i.id}>
            <div className="back-arrow-container" >
                <Link to=".." relative="path">
                    <img src="/back-arrow.png" alt="" />
                </Link>
            </div>
            <div className="cat-main-content-container">

                <div className="cat-main-content-left">
                    <img src={i.image} alt="" />
                </div>
                <div className="cat-main-content-top">
                    <div className="cat-main-content-right">
                        <div className="cat-main-content-right-info-left">
                            <div className="cat-main-content-right-info-left-top">
                                <h1>Meet {i.name}!</h1>
                            </div>
                            <div className="cat-main-content-right-info-left-bottom">
                                <div className="cat-age">
                                    <span>3 years</span>
                                    <span>Age</span>
                                </div>
                                <div className="cat-weight">
                                    <span>5.2 KG</span>
                                    <span>Weight</span>
                                </div>
                                <div className="cat-info-gender">
                                    <img src={i.gender} alt="" />
                                    <span>Gender</span>

                                </div>
                            </div>
                        </div>
                        <div className="cat-main-content-right-info-right">
                            <div className="cat-main-content-right-info-right-top">
                                <h4>More about {i.name}</h4>
                            </div>
                            <div className="cat-main-content-right-info-right-bottom">
                                <ul>
                                    <li> <span className="check-span">&#x2713;</span> spayed</li>
                                    <li><span className="check-span">&#x2713;</span> Vaccinated</li>
                                    <li><span className="check-span">&#x2713;</span> Dewormed</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="cat-main-content-middle">
                        <Calendar onClickDay={onChange}
                            value={value} />
                    </div>

                    <div className="cat-main-content-bottom">
                        <p>Time: </p>
                        <div className="cat-main-content-bottom-time-container">
                            <input type="text" value={hour} onChange={(e) =>
                                parseTime(e, "hour")
                            } onClick={(e: any) => e.target.select()} onBlur={(e) => parseTime(e, "focusouthour")} maxLength={2} name="" id="" className="time-input" />
                            <span>:</span>
                            <input type="text" value={minutes} onChange={(e) =>
                                parseTime(e, "minutes")
                            } onClick={(e: any) => e.target.select()} onBlur={(e) => parseTime(e, "focusoutminute")} maxLength={2} name="" id="" className="time-input" />
                        </div>
                        <div className="am-pm-buttons">
                            <button className={buttonToggle === "AM" ? "" : "hidden"} onClick={() => setButtonToggle("PM")}>AM</button>
                            <button className={buttonToggle === "PM" ? "" : "hidden"} onClick={() => setButtonToggle("AM")}>PM</button>
                        </div>
                    </div>
                    <div className="reserve-button-container">
                        <button>Reserve instore meeting</button>

                    </div>
                </div>
            </div>

        </div>))}
    </>
}