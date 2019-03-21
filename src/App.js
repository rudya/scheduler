import React, { Component } from 'react';
import './App.css';
import Scheduler from './components/Scheduler'
import Admin from './components/Admin'
import { Provider } from 'react-redux';
import  store  from './store'

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	      {/*<Scheduler></Scheduler>*/}
	      <Admin />
	     </Provider>
    );
  }
}

export default App;
