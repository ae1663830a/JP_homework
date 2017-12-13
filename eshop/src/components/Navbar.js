import React from 'react'

const navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="active" onClick={props.home}><a href="#">Home</a></li>
                        <li><a onClick={props.create}>Admin</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#"><span className="glyphicon glyphicon-shopping-cart"> Items</span></a>
                        </li>
                    </ul>
                    <form className="navbar-form navbar-left">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" name="search"/>
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                </div>
            </nav>
        </div>
    )
};

export default navbar;