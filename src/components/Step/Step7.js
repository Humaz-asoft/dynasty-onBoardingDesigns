import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Step7() {
    return (
        <>
            <div className="custom-container">
                <div className="step-wrapper">
                    <div className="heading">
                        <span className="sub-heading">step 7</span>
                        <h1>Now we need more details about your assets</h1>
                        <p>Tell us more about your real estate</p>
                    </div>
                    <div className="form-wrapper">
                        <Form>
                            <fieldset>
                                <legend class="form-title">Describe the Asset</legend>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Account Type</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </div>

                                    <div className="col-lg-6">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Account Type</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </div>

                                    <div className="col-lg-6">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Estimated Value</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Form.Group className="form-group" >
                                            <Form.Label>Photo Upload (Optional)</Form.Label>
                                            <div className="upload">
                                                <span className="overlay">Drag and drop or <span className="text-orange">browse</span></span>
                                                <Form.Control type="file" placeholder="" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                            </fieldset>

                            <span className="add-more"> <span className="icon fa fa-plus"></span>Add Another Asset</span>
                        </Form>
                    </div>
                </div>
                <div className="action-btns">
                    <Link to="/step6" className="back"><span className="icon fa fa-arrow-left"></span>Back </Link>
                    <Link to="/step8" className="btn-orange">Continue <span className="icon fa fa-arrow-right"></span></Link>
                </div>
            </div>
        </>
    );
}

export default Step7;
