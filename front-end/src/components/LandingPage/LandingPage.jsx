import React from 'react';
import './LandingPage.css';
import Coverflow from 'react-coverflow';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { StyleRoot } from 'radium';
import Hair1 from '../images/hair1.jpg';
import Hair2 from '../images/hair2.jpg';
import Hair3 from '../images/hair3.jpg';
import Hair4 from '../images/hair4.jpg';
import Hair5 from '../images/hair5.jpg';


class LandingPage extends React.Component {

    render() {
        return (
            <div className="LandingPage">
                <nav className="App-header">
                    <Link className="link signup" to="/SignUp" style={{textDecoration: 'none'}}> Sign Up </Link>
                    <Link className="link signin" to="/SignIn" style={{textDecoration: 'none'}}> Sign In </Link>
                    <Link className="link DAsignin" to="/Admin/Schedule" style={{textDecoration: 'none'}}> Demo Admin </Link>
                </nav>
                <header className="LandingTitle">Lambda Hair School</header>
                <div className="carousel">
                    <StyleRoot>
                        <Coverflow 
                            displayQuantityOfSide={1} 
                            navigation={true}
                            enableHeading={false}
                            infiniteScroll={true} 
                            media={{
                                '@media (max-width: 900px)': {
                                    width: '500px',
                                    height: '420px'
                                },
                               
                                '@media (min-width: 900px)': {
                                    width: '860px',
                                    height: '320px'
                                }
                            }}>
                                <img src={Hair1} alt='Photo1'/>
                                <img src={Hair2} alt='Photo1'/>
                                <img src={Hair3} alt='Photo1'/>
                                <img src={Hair4} alt='Photo1'/>
                                <img src={Hair5} alt='Photo1'/>
                        </Coverflow>
                    </StyleRoot>
                </div>
                <Button className="scheduleButton" color="purple" size="lg"><Link className="link signin" to="/SignIn" style={{textDecoration: 'none'}}> Schedule </Link></Button>
            </div>
        )
    }
}

export default LandingPage;