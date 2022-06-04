import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Step10() {
    return (
        <>
            <div className="custom-container">
                <div className="step-wrapper">
                    <div className="heading">
                        <span className="sub-heading">step 10</span>
                        <h1>Do any of the following apply</h1>
                        <p>These are uncommon but must be asked</p>
                    </div>
                    <div className="form-wrapper">
                        <Form>
                            <div className="checkboxes-wrapper">
                                <Form.Group className="form-group" controlId="formBasicCheckbox1">
                                    <Form.Check type="checkbox" label="Do you want to disinherit anyone?" />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="formBasicCheckbox2">
                                    <Form.Check type="checkbox" label="Is anyone likely to contest your will?" />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="formBasicCheckbox3">
                                    <Form.Check type="checkbox" label="Is anyone on governmental assistance?" />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="formBasicCheckbox4">
                                    <Form.Check type="checkbox" label="Does anyone have special needs, disabilities or addictions?" />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="formBasicCheckbox5">
                                    <Form.Check type="checkbox" label="Will anyone need to enter a nursing home soon?" />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="formBasicCheckbox6">
                                    <Form.Check type="checkbox" label="Does anyone have creditor problems?" />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="formBasicCheckbox7">
                                    <Form.Check type="checkbox" label="Is divorce a concern for anyone?" />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="formBasicCheckbox8">
                                    <Form.Check type="checkbox" label="Specific family concerns?" />
                                </Form.Group>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="action-btns">
                    <Link to="/step9" className="back"><span className="icon fa fa-arrow-left"></span>Back </Link>
                    <Link to="/step11" className="btn-orange">Continue <span className="icon fa fa-arrow-right"></span></Link>
                </div>
            </div>
        </>
    );
}

export default Step10;
