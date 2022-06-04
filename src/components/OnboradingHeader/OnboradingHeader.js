import "./OnboradingHeader.css";
import Dropdown from "react-bootstrap/Dropdown";
function OnboradingHeader() {
    return (
        <>
            <header id="on-board-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </div>
                        <div className="col-md-8 d-flex align-items-center justify-content-end">
                            <div className="d-flex button-holder">
                                <a href="/">
                                    <button type="submit" class="header-theme-btns btn btn-primary me-md-3 me-1">
                                        <span class="me-2">
                                            <i class="fa fa-floppy-o" aria-hidden="true"></i>
                                        </span>
                                        Save
                                    </button>
                                </a>
                                <a href="/">
                                    <button type="submit" class="header-theme-btns btn btn-primary me-md-3 me-1">
                                        <span class="me-2">
                                            <i class="fa fa-clipboard" aria-hidden="true"></i>
                                        </span>
                                        Draft changes
                                    </button>
                                </a>
                            </div>
                            <div className="notification-holder">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <i class="fa fa-bell-o" aria-hidden="true"></i>
                                        <span className="notify-circle">
                                            <i class="fa fa-circle" aria-hidden="true"></i>
                                        </span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default OnboradingHeader;
