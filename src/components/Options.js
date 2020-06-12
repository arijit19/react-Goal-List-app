import React from 'react';
import Option from './Option.js'

const Options = (props)=>{
    return(
        <div>
           <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
                <button onClick={props.removeAllHandler} 
                disabled={!props.hasOptions}
                className='button button--link'>Remove All</button>
           </div>
            {props.options.length === 0 && <p className='widget__message'>Add an item to get started!</p>}
            {
                props.options.map((option , index) => <Option key={index} optionText={option} 
                removeOptionHandle={props.removeOptionHandle}
                count={index+1}/>)
            }
        </div>
    );
}

export default Options;