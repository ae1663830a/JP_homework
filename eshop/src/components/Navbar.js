import React from 'react'
import {Link} from 'react-router'
import './Navbar.css'

const navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="active" ><Link onClick={props.home}>Home</Link></li>
                        <li><Link onClick={props.admin}>Admin</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link href="#"><span className="glyphicon glyphicon-shopping-cart"> Items</span></Link>
                        </li>
                    </ul>
                    <form className="navbar-form navbar-left">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" name="search"/>
                            <input type="text" className="form-control" placeholder="Password" name="search"/>
                        </div>
                        <button onClick={props.login} className="btn btn-default">Login</button>
                        <button onClick={props.register} className="btn btn-default">Register</button>
                    </form>
                </div>
            </nav>
        </div>
    )
};

export default navbar;