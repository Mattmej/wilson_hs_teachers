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


const teacherList = (props) => {

    // showId = (id) => {
    //     alert('The id of this button is ' + id);
    // }

    const displayedNames = props.entries.map(entry => {
        return (
            <div key={entry.id}>
                <Row className='justify-content-center'>
                    <Button color="link" id={entry.id} onClick={() => {
                        const alertId = entry.id;
                        alert('the id is ' + alertId);
                    }}>
                        {entry.name}
                    </Button>
                </Row>
                <Row className='space'></Row>
            </div>
        
        )
    })


    return (
        <div>
            {displayedNames}
        </div>
    )

}

// class teacherList extends Component {
//     render() {
//         return(
//             <div>{this.props.entry}</div>
//         )
//     }
// }

export default teacherList;