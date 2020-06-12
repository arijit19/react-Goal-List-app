import React from 'react';

const Option = (props)=>{
    return(
        <div className='option'>
            <p className='option__message'>{props.count}. {props.optionText} </p> 
            <button onClick={(e)=> {
                e.preventDefault();
                props.removeOptionHandle(props.optionText);
            }}
            className='button button--link'>Remove</button>
        </div>
        );
}

export default Option;