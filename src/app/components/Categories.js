import React from 'react'
import {navigate} from 'gatsby';
import Select from 'react-select'
import _get from 'lodash/get'
import {colors} from '../../design-system/theme';

const styles = {
    control: (base) => ({
        ...base,
        borderRadius: '4px',
        minHeight: '40px'
    }),
    container: (base) => ({
        ...base,
        borderRadius: '4px',
        background: colors.white
    }),
    input: (base) => ({
        ...base,
        width: '100%',
        borderRadius: '0'
    }),
    menu: (base) => ({
        ...base,
        margin: '0',
        borderRadius: '0 0 4px 4px'
    })
}

const defaultCategory = {
    id: '*',
    name: 'Alle Kategorien'
}

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

    state = {
        selectedCategory: _get(this.props.locationState, 'search.category')
    }

    _updateCategories = selectedCategory => {
        this.setState({selectedCategory})
        const newSearch = Object.assign({}, this.props.locationState.search, {
            category: selectedCategory,
            id: undefined
        })
        const state = Object.assign({}, this.props.locationState, {
            search: newSearch,
            selectedItem: undefined
        })
        navigate('/app/results', {state})
    }

    render() {
        return (
            <React.Fragment>
                <Select
                    value={this.state.selectedCategory}
                    defaultValue={defaultCategory}
                    options={categories}
                    getOptionLabel={option => option.name}
                    getOptionValue={option => option.name}
                    onChange={this._updateCategories}
                    styles={styles}/>
            </React.Fragment>
        )
    }
}

export default Categories