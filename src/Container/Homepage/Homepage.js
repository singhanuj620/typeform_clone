import React from 'react'
import './Homepage.css'
import Button from '../../Component/Button/Button'

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="heading homepage-heading">Up-skilling requires time commitment</div>
            <div className="sub-heading homepage-subheading">The GrowthX experience is designed by keeping in mind the working hours founders & full time operators typically work in.
                <br></br>
                <br></br>
                You will spend
                <br></br>
                - 6 hours/week for the first 5 weeks
                <br></br>
                - 15 hours/week for the last 3 weeks
            </div>
            <div className="homepage-btn">
                <div><Button text={"I agree"} /></div>
                <div> &nbsp; &nbsp; press Enter ↵</div>
            </div>
        </div>
    )
}

export default Homepage