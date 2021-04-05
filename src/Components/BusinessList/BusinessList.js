import React from "react"
import "./BusinessList.css"
import Business from "../Business/Business"

class BusinessList extends React.Component {
    render() {
        return(
            <div className="BusinessList">
                <h1>business list Component and business is inside me</h1>
                <Business/>
                <Business/>
                <Business/>
                <Business/>
                <Business/>
            </div>
        )
    }
}

export default BusinessList