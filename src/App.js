import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import Header from './components/Header.js';
import Action from './components/Action.js';
import Options from './components/Options.js';
import AddOptions from './components/AddOption.js';
import OptionModal from './components/OptionModal.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.resultHandler = this.resultHandler.bind(this);
    this.removeAllHandler = this.removeAllHandler.bind(this);
    this.addOptionHandler = this.addOptionHandler.bind(this);
    this.removeOptionHandle = this.removeOptionHandle.bind(this);
    this.optionModalhandler = this.optionModalhandler.bind(this);
    this.state = {
      Options : [],
      selectedOption: undefined
    };
  }

  componentDidMount() {
    try{
      const json = localStorage.getItem('options');
      const Options = JSON.parse(json);

      if(Options){
        this.setState(()=>({Options}));
      }
    } catch(e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.Options.length !== this.state.Options.length){
      const json = JSON.stringify(this.state.Options);
      localStorage.setItem('options',json);
    }
  }

  componentWillUnmount(){

  }
  resultHandler(){
    const rand = Math.floor(Math.random() * this.state.Options.length);
    const option = this.state.Options[rand];
    // alert(option);
    this.setState(()=>({selectedOption: option}))
  }
  removeAllHandler(){
    this.setState(()=>({Options : []}));
  }
  addOptionHandler(option){
    if(!option)
      return 'Enter a valid option';
    else if(this.state.Options.indexOf(option)>-1)
      return 'Option already exits';

    this.setState((prevState)=>({Options : prevState.Options.concat(option)}));
  }
  removeOptionHandle(option){
    if(!option)
      return 'Option is not valid';
    else if(this.state.Options.indexOf(option)<0)
      return 'Option do not exits';

    this.setState((prevState)=>({Options: prevState.Options.filter((Option)=>Option !== option)}));
  }
  optionModalhandler(){
    this.setState(()=>({selectedOption: undefined}));
  }
  render() {
    
    const subTitle = 'Put you life in the hand of a computer';
    
    return (
      <div >
        <Header subTitle={subTitle}/>
        <div className='container'>
              <Action hasOptions={this.state.Options.length >0} resultHandler={this.resultHandler}/>
              <div className='widget'>
                <Options options={this.state.Options} removeAllHandler={this.removeAllHandler} 
                hasOptions={this.state.Options.length >0} removeOptionHandle={this.removeOptionHandle}/>
                <AddOptions addOptionHandler={this.addOptionHandler}/>
              </div>
          </div>
        <OptionModal selectOption={this.state.selectedOption} optionModalhandler={this.optionModalhandler}/>
      </div>
    );
  }
}

export default App;
