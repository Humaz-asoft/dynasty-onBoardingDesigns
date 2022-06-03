import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Step2() {
    return (
        <>
            <div className="custom-container">
                <div className="step-wrapper">
                    <div className="heading">
                        <span className="sub-heading">step 2</span>
                        <h1>We need to know about your marital status</h1>
                        <p>You can choose more than one</p>
                    </div>
                    <div className="custom-width">
                        <div className="step-images-cards ">
                            <div className=" row">
                                <div className=" col-md-4">
                                    <div className="item ">
                                        <div className="image">
                                            <img src="/images/single.svg" alt="" className="img-fluid" />
                                        </div>
                                        <p>Single</p>
                                    </div>
                                </div>
                                <div className=" col-md-4">
                                    <div className="item">
                                        <div className="image">
                                            <img src="/images/maried.svg" alt="" className="img-fluid" />
                                        </div>
                                        <p>Married</p>
                                    </div>
                                </div>
                                <div className=" col-md-4">
                                    <div className="item">
                                        <div className="image">
                                            <img src="/images/complicated.svg" alt="" className="img-fluid" />
                                        </div>
                                        <p>It’s Complicated</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-wrapper">
                            <Form>


                                <div className="row">
                                    <div className="col-lg-5">
                                        <Form.Group className="form-group" controlId="formBasicEmail">
                                            <Form.Label>Have you previously been divorced?</Form.Label>
                                            <div className="mb-3 inline-radio">
                                                <div class="rdio rdio-primary radio-inline"> <input name="divorced" id="radio1" type="radio" />
                                                    <label for="radio1">Yes</label>
                                                </div>
                                                <div class="rdio rdio-primary radio-inline"> <input name="divorced" id="radio2" type="radio" />
                                                    <label for="radio2">No</label>
                                                </div>

                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5">
                                    <Form.Group className="form-group inline">
                                        <Form.Label>How many times?</Form.Label>
                                        <Form.Select >
                                            <option> 1</option>
                                            <option> 2</option>
                                            <option> 3</option>
                                        </Form.Select>
                                    </Form.Group>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="action-btns">
                    <Link to="/step1" className="back"><span className="icon fa fa-arrow-left"></span>Back </Link>
                    <Link to="/step3" className="btn-orange">Continue <span className="icon fa fa-arrow-right"></span></Link>
                </div>
            </div>
        </>
    );
}

export default Step2;
