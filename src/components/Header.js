import React from 'react';

const Header = (props)=>{
    return(
        <div className='header'>
           <div className='container'>
                <h1 className='header__title'>{props.title}</h1>
                {props.subTitle && <p className='header__subtitle'>{props.subTitle}</p>}
           </div>
        </div>
    );
}

Header.defaultProps = {
    title : 'Decisiveness'
}
export default Header;