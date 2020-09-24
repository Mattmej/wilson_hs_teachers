import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import { Container, Row, Col, Button } from 'reactstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Header from './Components/Header';
import TeacherList from './Components/TeacherList';



class App extends Component {

  constructor() {
    super();
    this.state = {
      entries: [],
      teacher: null
    };
  }



  buildList = (data) => {

    let teacherEntries = [];
    let teacherObjectEntries = [];



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


    // Takes all info on each teacher and makes it an object. 
    teacherObjectEntries = teacherEntries.map(entry => {
      const obj = {
        id: entry[5],
        name: entry[0],
        email: entry[1],
        flipgrid: entry[2],
        classroom: entry[3]
      };
      return obj;
    });


    console.log(teacherObjectEntries);

    // Sets state
    this.setState({entries: teacherObjectEntries});

  }



  componentDidMount() {
    let url = 'https://spreadsheets.google.com/feeds/cells/1UnWSsGHeVk9ITccEx11U1SIx_YrBATyLTSI8_aJdAYs/1/public/full?alt=json'
    fetch(url)
    .then(response => response.json())
    .then(this.buildList);
  }

  storeTeacher = (clickedTeacher) => {


    this.setState({
      teacher: clickedTeacher
    }, () => {
      console.log('this is the state of the main app');
      console.log(this.state);
    })
  }

  goBack = () => {
    this.setState({
      teacher: null
    })
  }



  render() {

    let teacherIsSelected = this.state.teacher;



    return(
      // <div>Hello, world!</div>
      <Container fluid className='mx-0'>
        <Header 
          pageTitle='Wilson High School Teacher List'
          subTitle="Click on a teacher's name to view their info!"
        />

        {!teacherIsSelected 
        ? 
        <TeacherList entries={this.state.entries} click={this.storeTeacher.bind(this)}/>
        : 
        <div>
          <Row>
            <div className='d-flex justify-content-end col'>Name:</div>
            <div className='d-flex justify-content-start col'>{this.state.teacher.name}</div>
          </Row>
          <Row className='space'></Row>
          <Row>
            <div className='d-flex justify-content-end col'>Email:</div>
            <div className='d-flex justify-content-start col'>
              <a href={'mailto:' + this.state.teacher.email}>{this.state.teacher.email}</a>
            </div>
          </Row>
          <Row className='space'></Row>
          <Row>
            <div className='d-flex justify-content-end col'>Flipgrid:</div>
            <div className='d-flex justify-content-start col'>
              <a target='_blank' href={this.state.teacher.flipgrid}>{this.state.teacher.flipgrid}</a>
            </div>
          </Row>
          <Row className='space'></Row>
          <Row>
            <div className='d-flex justify-content-end col'>Classroom:</div>
            <div className='d-flex justify-content-start col'>
              <a target='_blank' href={this.state.teacher.classroom}>{this.state.teacher.classroom}</a>
            </div>
          </Row>
          <Row className='space'></Row>
          <Row>
            <div className='d-flex justify-content-center col px-auto'>
              <Button color='link' onClick={this.goBack}>Go Back</Button>
            </div>
          </Row>
        </div>

      }
        
      </Container>
    )
  }
}

export default App;
