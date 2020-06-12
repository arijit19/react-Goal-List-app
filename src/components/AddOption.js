import React from 'react';

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.addOptionHandler = this.addOptionHandler.bind(this);
        this.state = {
            error : undefined
        }
    }

    addOptionHandler(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOptionHandler(option);

        this.setState(()=>({error}));

        if(!error){
            e.target.elements.option.value = '';
        }

    }
    render(){
        return(
            <div>
                {this.state.error && <p className='addOptionError'>{this.state.error}</p>}
                <form onSubmit={this.addOptionHandler} >
                <div className='addOption'>
                    <input type="text" name="option" className='addOption__input'></input>
                    <button className='button'>Add Option</button>
                </div>
                </form>
            </div>
        );
    }
};

export default AddOption;