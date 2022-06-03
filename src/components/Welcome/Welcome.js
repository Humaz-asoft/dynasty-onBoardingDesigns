import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <>
            <div className="custom-container">
                <div className="step-wrapper">
                    <div className="heading">
                        <h1>Welcome, we are happy to help you setup your estate</h1>
                        <p>Here’s what we’ll do together right now</p>
                    </div>
                    <div className="steps-information">
                        <div className="item">
                            <div className="image">
                                <img src="/images/welcome1.svg" alt="" className="img-fluid" />
                            </div>
                            <p>We’ll ask you some questions</p>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="/images/welcome2.svg" alt="" className="img-fluid" />
                            </div>
                            <p>Gather details based on your answers</p>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="/images/welcome3.svg" alt="" className="img-fluid" />
                            </div>
                            <p>Review your plan and digitally notarize</p>
                        </div>
                    </div>
                </div>
                <div className="action-btns justify-content-end">
                    <Link to="/step1" className="btn-orange">Get Started <span className="icon fa fa-arrow-right"></span></Link>
                </div>
            </div>
        </>
    );
}

export default Welcome;
