import React from 'react';
import './App.css';

import {connect} from 'react-redux';
import * as helloActionCreators from './Redux/Actions/hello';
import * as apiActionCreators from './Redux/Actions/api';

function App(props) {

  return (
    <div className="App">
      <h1>{props.hellox}</h1>

      <div style={{cursor: 'pointer', border: '1px solid black'}} onClick={props.hello}>CLICK</div>
      <div style={{cursor: 'pointer', border: '1px solid black'}} onClick={props.apiCall}>CLICK ME</div>

      <div>
        {props.apiData.map((elem, key) => {
          return <p key={key}>{elem.title}</p>
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    hellox: state.hello.hello,
    apiData: state.api.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hello: () => dispatch(helloActionCreators.requestHelloWorld()),
    apiCall: () => dispatch(apiActionCreators.fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
