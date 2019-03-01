import React, { Component } from 'react';
import './App.css';
import Scheduler from './components/Scheduler'
import { Provider } from 'react-redux';
import  store  from './store'

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	      <Scheduler></Scheduler>
	     </Provider>
    );
  }
}

export default App;
