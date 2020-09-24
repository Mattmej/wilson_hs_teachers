import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import { Container, Row, Col } from 'reactstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Header from './Components/Header';
import TeacherList from './Components/TeacherList';



class App extends Component {

  state = {
    entries: []
  }

  buildList = (data) => {

    let teacherEntries = [];
    let teacherObjectEntries = [];


    /*
    Function to sort alphabetically an array of objects by some specific key.
 
    @param {String} property Key of the object to sort.
    */

    // function dynamicSort(property) {
    //   var sortOrder = 1;

    //   if(property[0] === "-") {
    //       sortOrder = -1;
    //       property = property.substr(1);
    //   }

    //   return function (a,b) {
    //       if(sortOrder == -1){
    //           return b[property].localeCompare(a[property]);
    //       }else{
    //           return a[property].localeCompare(b[property]);
    //       }        
    //   }
    // }



    // Takes JSON from Google Sheets and makes it easier to organize.
    // Col 1: Employee name
    // Col 2: Email Address
    // Col 3: Flipgrid
    // Col 4: Virtual Classroom
    // Col 5: Missing
    for (let i = 0; i < 83; i++) {
      teacherEntries[i] = [data.feed.entry[(5*i) + 5].content.$t, 
                            data.feed.entry[(5*i) + 6].content.$t, 
                            data.feed.entry[(5*i) + 7].content.$t, 
                            data.feed.entry[(5*i) + 8].content.$t, 
                            data.feed.entry[(5*i) + 9].content.$t,
                            i]
    }


    // Takes all info on each teacher and makes it an object. Then sorts alphabetically.
    // teacherObjectEntries = teacherEntries.map(entry => {
    //   const obj = {
    //     id: entry[5],
    //     name: entry[0],
    //     email: entry[1],
    //     flipgrid: entry[2],
    //     classroom: entry[3]
    //   };
    //   return obj;
    // });

    // for (let i=0; i<teacherObjectEntries.length; i++) {
    //   teacherObjectEntries[i]["key"] = i;
    // }

    // console.log(teacherObjectEntries);
    console.log(teacherEntries);

    // Sets state
    // this.setState({entries: teacherObjectEntries});

  }



  componentDidMount() {
    // let url = 'https://spreadsheets.google.com/feeds/cells/1SsnIbFx8sdT-lMr0TmCBBqbUjodyYZAth4m8tl7RHnw/1/public/full?alt=json';
    let url = 'https://spreadsheets.google.com/feeds/cells/1UnWSsGHeVk9ITccEx11U1SIx_YrBATyLTSI8_aJdAYs/1/public/full?alt=json'
    fetch(url)
    .then(response => response.json())
    .then(this.buildList);
  }



  render() {

    // storeData = (teacher) => {

    // }



    return(
      // <div>Hello, world!</div>
      <Container fluid className='mx-0'>
        <Header 
          pageTitle='Wilson High School Teacher List'
          // subTitle='Use the search bar to find a teacher, or display a list of all teachers!'
        />
        {/* <TeacherList entries={this.state.entries}/> */}
      </Container>
    )
  }
}

export default App;
