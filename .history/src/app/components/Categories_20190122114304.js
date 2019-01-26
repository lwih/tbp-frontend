import React from 'react'
import {navigate} from 'gatsby';
import Select from 'react-select'

const categories = [
    {
        id: "-9109897367476786307",
        name: "Familienspiele"
    }, {
        id: "9131738488879247561",
        name: "Bau und Konstruktionsspielzeug"
    }, {
        id: "8659051837278983098",
        name: "Holzpuzzles"
    }, {
        id: "-3519349273568919066",
        name: "LEGO friends"
    }, {
        id: "1372286699979324054",
        name: "Lerncomputer und Zubehör"
    }, {
        id: "-6286302371660159254",
        name: "Basteln und Malen"
    }, {
        id: "-6955237598935953877",
        name: "Kinderspiele"
    }, {
        id: "-7826175491335263611",
        name: "Stricken"
    }, {
        id: "-8805887483976030775",
        name: "Buntstifte"
    }, {
        id: "2967678565405430742",
        name: "Adventskalender"
    }, {
        id: "-7030023372869128068",
        name: "Spiele"
    }
]

class Categories extends React.Component {

    _updateCategories = e => {
        debugger
    }

    render() {
        return (
            <React.Fragment>
                <select onChange={(e) => this._updateCategories(e)}>
                    {categories.map((cat) => {
                        return (
                            <option
                                key={`${cat.age_from}-${cat.age_until}`}
                                value={`${cat.age_from}-${cat.age_until}`}>
                                {displayFormattedAge(cat)}
                            </option>
                        )
                    })}
                </select>
            </React.Fragment>
        )
    }
}

export default Categories