import React from 'react';
import Counter from "./Counter"
import './App.css';

import MyHeader from './MyHeader'
import Container from './container';

function App() {

  const countProps = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    initialValue:5
  }
  return (
    <Container>
    <div>
      <MyHeader/>
      <Counter {...countProps}/>
    </div>
    </Container>
  );
}

export default App;
