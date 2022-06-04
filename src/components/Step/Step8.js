import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Step8() {
    return (
        <>
            <div className="custom-container">
                <div className="step-wrapper">
                    <div className="heading">
                        <span className="sub-heading">step 8</span>
                        <h1>Who do you want as your Successor Trustee</h1>
                        <p>A Successor trustee is the person responsible for administering your trust once you are no longer capable.</p>
                    </div>
                    <div className="form-wrapper">
                        <Form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Form.Group className="form-group m-0">
                                        <Form.Label>Add Successor Trustee</Form.Label>
                                        <Form.Select >
                                            <option> select</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                            <span className="add-more mb-4 mt-2"> <span className="icon fa fa-plus"></span>Add More</span>
                            <fieldset>
                                <legend class="form-title">If selected then gather info on</legend>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <Form.Group className="form-group" >
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-4">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Middle Name</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-4">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Email Address (Optional)</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Phone Number (Optional)</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Relationship</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Which Trustee</Form.Label>
                                            <Form.Select >
                                                <option> select</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Form.Group className="form-group" >
                                            <Form.Label>First Alternate</Form.Label>
                                            <Form.Select >
                                                <option> select</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Second Alternate</Form.Label>
                                            <Form.Select >
                                                <option> select</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>
                            </fieldset>

                        </Form>
                    </div>
                </div>
                <div className="action-btns">
                    <Link to="/step7" className="back"><span className="icon fa fa-arrow-left"></span>Back </Link>
                    <Link to="/step9" className="btn-orange">Continue <span className="icon fa fa-arrow-right"></span></Link>
                </div>
            </div>
        </>
    );
}

export default Step8;
