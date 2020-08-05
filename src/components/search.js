import React from 'react'

const Search = props => {
    const {searchValue, onHandleChange} = props

    return (
        <div>
            <form>
                <input
                placeholder='Search'
                name='searchValue'
                id='search'
                type='text'
                onChange={onHandleChange}
                value={searchValue}
                ></input>
                <button>Fetch User</button>
            </form>
        </div>
    )
}

export default Search