import React from 'react';

const SearchBox = ({Robotchange}) => {
    return (

        <div className='Pa2'>
        <input className='pa3 ba b--green bg-lightest-blue' 
        type="search" 
        placeholder="search robot"
        onChange={Robotchange} 
        />
        </div>
 
    );
}

export default SearchBox;