import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Step3() {
    return (
        <>
            <div className="custom-container">
                <div className="step-wrapper">
                    <div className="heading">
                        <span className="sub-heading">step 3</span>
                        <h1>Now, a little about your marriage</h1>
                    </div>
                    <div className="form-wrapper">
                        <Form>
                            <div className="row">
                                <div className="col-lg-3">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Will your spouse be a co-trustee?</Form.Label>
                                        <div className="mb-3 inline-radio">
                                            <div class="rdio rdio-primary radio-inline"> <input name="gender" id="radio1" type="radio" />
                                                <label for="radio1">Yes</label>
                                            </div>
                                            <div class="rdio rdio-primary radio-inline"> <input name="gender" id="radio2" type="radio" />
                                                <label for="radio2">No</label>
                                            </div>

                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-3">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Spouse of U.S Citizen?</Form.Label>
                                        <div className="mb-3 inline-radio">
                                            <div class="rdio rdio-primary radio-inline"> <input name="gender" id="radio1" type="radio" />
                                                <label for="radio1">Yes</label>
                                            </div>
                                            <div class="rdio rdio-primary radio-inline"> <input name="gender" id="radio2" type="radio" />
                                                <label for="radio2">No</label>
                                            </div>

                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-3">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Spouse of U.S Citizen?</Form.Label>
                                        <div className="mb-3 inline-radio">
                                            <div class="rdio rdio-primary radio-inline"> <input name="gender" id="radio1" type="radio" />
                                                <label for="radio1">Yes</label>
                                            </div>
                                            <div class="rdio rdio-primary radio-inline"> <input name="gender" id="radio2" type="radio" />
                                                <label for="radio2">No</label>
                                            </div>

                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Spouse’s First name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-2">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Spouse’s M.I </Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-5">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Spouse’s Last name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-2">
                                    <Form.Group className="form-group">
                                        <Form.Label>State of Residency</Form.Label>
                                        <Form.Select >
                                            <option> select</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-5">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Social Security Number</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-4">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Spouse’s Social Security Number</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-4">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Spouse’s Email Address (Optional)</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-4">
                                    <Form.Group className="form-group" controlId="formBasicEmail">
                                        <Form.Label>Spouse’s Phone Number (Optional)</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="action-btns">
                    <Link to="/step2" className="back"><span className="icon fa fa-arrow-left"></span>Back </Link>
                    <Link to="/step4" className="btn-orange">Continue <span className="icon fa fa-arrow-right"></span></Link>
                </div>
            </div>
        </>
    );
}

export default Step3;
