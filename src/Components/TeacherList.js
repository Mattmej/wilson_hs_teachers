import React, {Component} from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import {Row, Col} from 'reactstrap';
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

    const displayedNames = props.entries.map(entry => {
        return (
            <div>
                <Row>{entry.lastName}, {entry.firstName}</Row>
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