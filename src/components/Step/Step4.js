import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Step4() {
    return (
        <>
            <div className="custom-container">
                <div className="step-wrapper">
                    <div className="heading">
                        <span className="sub-heading">step 4</span>
                        <h1>Tell us about your Family</h1>
                        <p>Select all that apply</p>
                    </div>
                    <div className="custom-width">
                        <div className="step-images-cards ">
                            <div className=" row">
                                <div className=" col-md-4">
                                    <div className="item ">
                                        <div className="image">
                                            <img src="/images/single.svg" alt="" className="img-fluid" />
                                        </div>
                                        <p>Children</p>
                                    </div>
                                </div>
                                <div className=" col-md-4">
                                    <div className="item">
                                        <div className="image">
                                            <img src="/images/maried.svg" alt="" className="img-fluid" />
                                        </div>
                                        <p>Siblings</p>
                                    </div>
                                </div>
                                <div className=" col-md-4">
                                    <div className="item">
                                        <div className="image">
                                            <img src="/images/complicated.svg" alt="" className="img-fluid" />
                                        </div>
                                        <p>Parents</p>
                                    </div>
                                </div>
                                <div className=" col-md-4">
                                    <div className="item ">
                                        <div className="image">
                                            <img src="/images/single.svg" alt="" className="img-fluid" />
                                        </div>
                                        <p>Grandchildren</p>
                                    </div>
                                </div>
                                <div className=" col-md-4">
                                    <div className="item">
                                        <div className="image">
                                            <img src="/images/maried.svg" alt="" className="img-fluid" />
                                        </div>
                                        <p>Great Grandchildren</p>
                                    </div>
                                </div>
                                <div className=" col-md-4">
                                    <div className="item">
                                        <div className="image">
                                            <img src="/images/complicated.svg" alt="" className="img-fluid" />
                                        </div>
                                        <p>Other Beneficiaries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="action-btns">
                    <Link to="/step3" className="back"><span className="icon fa fa-arrow-left"></span>Back </Link>
                    <Link to="/step5" className="btn-orange">Continue <span className="icon fa fa-arrow-right"></span></Link>
                </div>
            </div>
        </>
    );
}

export default Step4;
