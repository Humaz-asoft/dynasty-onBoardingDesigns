import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Step6() {
    return (
        <>
            <div className="custom-container">
                <div className="step-wrapper">
                    <div className="heading">
                        <span className="sub-heading">step 1</span>
                        <h1>First, we need to know more about you</h1>
                    </div>
                    <div className="form-wrapper">
                        <Form>
                            <div className="row">
                                <div className="col-lg-5">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-2">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>M.I (Middle Initial)</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-5">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-lg-5">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Below 25 years of age?</Form.Label>
                                        <div className="mb-3 inline-radio">
                                            <div class="rdio rdio-primary radio-inline"> <input name="gender"  id="radio1" type="radio"  />
                                                <label for="radio1">Yes</label>
                                            </div>
                                            <div class="rdio rdio-primary radio-inline"> <input name="gender" id="radio2" type="radio"  />
                                                <label for="radio2">No</label>
                                            </div>
                                           
                                        </div>
                                    </Form.Group>
                                </div>

                                <div className="col-lg-7">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Relationship and to which trustee</Form.Label>
                                        <div className="mb-3 inline-radio">
                                            <div class="rdio rdio-primary radio-inline"> <input name="Status"  id="radio1" type="radio"  />
                                                <label for="radio1">Son</label>
                                            </div>
                                            <div class="rdio rdio-primary radio-inline"> <input name="Status" id="radio2" type="radio"  />
                                                <label for="radio2">Daughter</label>
                                            </div>
                                           
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Email Address (Optional)</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-6">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Phone Number (Optional)</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="action-btns">
                    <Link to="/step5" className="back"><span className="icon fa fa-arrow-left"></span>Back </Link>
                    <Link to="/step7" className="btn-orange">Continue <span className="icon fa fa-arrow-right"></span></Link>
                </div>
            </div>
        </>
    );
}

export default Step6;
