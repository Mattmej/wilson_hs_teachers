import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import { Container, Row, Col } from 'reactstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Header from './Components/Header';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  state = {
    entries: []
  }

  buildList = (data) => {
    // console.log(data.feed.entry);
    // this.setState({list: data});
    let teacherEntries = [];
    let teacherObjectEntries = [];
    for (let i = 0; i < 55; i++) {
      teacherEntries[i] = [data.feed.entry[(4*i) + 4].content.$t, data.feed.entry[(4*i) + 5].content.$t, data.feed.entry[(4*i) + 6].content.$t, data.feed.entry[(4*i) + 7].content.$t]
    }
    // console.log(teacherEntries);
    // this.setState({entries: teacherEntries});
    // console.log(this.state.entries);

    teacherObjectEntries = teacherEntries.map(entry => {
      const obj = {
        lastName: entry[1],
        firstName: entry[0],
        email: entry[2],
        flipgrid: entry[3]
      };
      return obj;
    });

    console.log(teacherObjectEntries);
    this.setState({entries: teacherObjectEntries});

  }

  componentDidMount() {
    let url = 'https://spreadsheets.google.com/feeds/cells/1SsnIbFx8sdT-lMr0TmCBBqbUjodyYZAth4m8tl7RHnw/1/public/full?alt=json';
    fetch(url)
    .then(response => response.json())
    .then(this.buildList);
  }

  render() {
    return(
      // <div>Hello, world!</div>
      <Container fluid className='mx-0'>
        <Header 
          pageTitle='Wilson High School Teacher List'
          // subTitle='Use the search bar to find a teacher, or display a list of all teachers!'
        />
      </Container>
    )
  }
}

export default App;
