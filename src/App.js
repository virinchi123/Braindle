import React from 'react';
import './App.css';
import Cells from './containers/Cells/Cells';
import Layout from './components/UI/Layout/Layout';


function App() {
  return (
    <div className="App">
      <Layout>
        <Cells /> 
      </Layout>
    </div>
  );
}

export default App;
