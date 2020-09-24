import React, {Component} from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import {Row, Col, Button} from 'reactstrap';
import '../App.css';

// const header = (props) => {
//     return (
//         <Jumbotron className='bg-primary text-warning pl-4' fluid>
//             <h1>{props.pageTitle}</h1>
//             <p>{props.subTitle}</p>
//         </Jumbotron>
//     )
// };

// export default header;


// const teacherList = (props) => {

//     // showId = (id) => {
//     //     alert('The id of this button is ' + id);
//     // }

    

//     return (
//         <div>
//             {displayedNames}
//         </div>
//     )

// }

class teacherList extends Component {

    constructor(props) {
        super();
        this.state = {
            teacher: null
        }
    }

    // Will look through array of teacher objects for whatever matches the 'teacher_id'
    // onClickedTeacher(teacher_id) {
        // console.log(this);


    // }

    onClickedTeacher = () => {
        //         let teacherArray = this.props.entries;
        // let ourTeacher = teacherArray.find(entry => entry.id === teacher_id);
        // this.setState({
        //     clickedTeacher: teacher
        // })


        this.props.click(this.state.teacher)
    }

    // displayTeacherId = (e, teacher_id) => {
    //     e.preventDefault();
    //     console.log("The id is " + teacher_id)
    // }

    // displayObject = () => {
    //     console.log(entry.id);
    // }

    render() {

        const displayedNames = this.props.entries.map(entry => {
            return (
                <div key={entry.id}>
                    <Row className='justify-content-center'>
                        {/* <Button color="link" id={entry.id} onClick={() => {
                            const alertId = entry.id;
                            alert('the id is ' + alertId);
                        }}> */} 
                        {/* <Button color='link' onClick={() => {
                            // const a = 1;
                            this.setState({
                                teacher: entry
                            }).bind(this)
                        }}> */}
{/*     
                        <Button color='link' onClick={this.onClickedTeacher(entry.id).bind(this)}>
                            {entry.name}
                        </Button> */}

                        {/* <Button color='link' onClick={this.displayObject}>
                            {entry.name}
                        </Button> */}


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
                            // console.log(this.state.teacher);
                            // console.log(ourTeacher);
                           
                        }}>
                            {entry.name}
                        </Button>


                        {/* <Button color='link'>{entry.name}</Button> */}
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