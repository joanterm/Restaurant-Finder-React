import React from "react"
import "./SearchBar.css"

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
}

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {//creates an array of sortByOptions 
            let sortByOptionsValue = sortByOptions[sortByOption];
            return(
                <li key={sortByOptionsValue}>{sortByOption}</li>
            )
        })
    }
    render() {
        console.log(this.renderSortByOptions())
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Business"/>
                    <input placeholder="Where?"/>
                </div>
                <div className="SearchBar-submit">
                    <button>Let's Go!</button>
                </div>
            </div>
        )
    }
}

export default SearchBar