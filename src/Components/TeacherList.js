import React, {Component} from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import {Row, Col, Button} from 'reactstrap';
import '../App.css';


class teacherList extends Component {

    constructor(props) {
        super();
        this.state = {
            teacher: null
        }
    }


    onClickedTeacher = () => {

        this.props.click(this.state.teacher)
    }


    render() {

        const displayedNames = this.props.entries.map(entry => {
            return (
                <div key={entry.id}>
                    <Row className='justify-content-center'>

                        <Button color='link' id={entry.id} onClick={() => {
                            const thisId = entry.id;
                            const ourTeacher = this.props.entries.find(entry => entry.id === thisId);
                            this.setState({
                                teacher: ourTeacher
                            }, () => {
                                console.log('this is the state of TeacherList');
                                console.log(this.state.teacher);
                                this.onClickedTeacher(ourTeacher);
                            })
                           
                        }}>
                            {entry.name}
                        </Button>


                    </Row>
                    <Row className='space'></Row>
                </div>
            
            )
        })
    
        return(
            <div>{displayedNames}</div>
        )
    }
}

export default teacherList;