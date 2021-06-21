import React from "react"
import "./BusinessList.css"
import Business from "../Business/Business"

class BusinessList extends React.Component {
    render() {
        return(
            <div className="BusinessList">
                {/* <Business/>
                <Business/>
                <Business/>
                <Business/>
                <Business/> */}
                {/* <Business business={this.props.businesses.map(business)}/> */}        
                {this.props.businesses.map((eachBusiness) => {
                    return <Business business={eachBusiness}/>
                })}
            </div>
        )
    }
}

export default BusinessList