import React from 'react'
import './UserRegister.css'

const CreateProduct = (props) => {

    return (
        <div>
            <form onSubmit={props.submitData}>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text"
                           className="form-control"
                           placeholder="First name"
                           key={props.id}
                           value={props.firstName}
                           onChange={props.onFieldChange('firstName')}/>
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Last name"
                           key={props.id}
                           value={props.lastName}
                           onChange={props.onFieldChange('lastName')}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text"
                           className="form-control"
                           placeholder="email@email.com"
                           value={props.image}
                           onChange={props.onFieldChange('email')}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text"
                           className="form-control"
                           placeholder="password"
                           value={props.description}
                           onChange={props.onFieldChange('password')}/>
                </div>
                {/*<div className="form-group">*/}
                    {/*<label>Repeat password</label>*/}
                    {/*<input type="text"*/}
                           {/*className="form-control"*/}
                           {/*placeholder="repeat password"*/}
                           {/*value={props.repeatPassword}*/}
                           {/*onChange={props.onFieldChange('repeatPassword')}/>*/}
                {/*</div>*/}
                <input id="buttonCreate" type="submit" className="btn btn-success" value="Register"/>
            </form>
            <button id="buttonCancel" className="btn btn-warning" onClick={props.cancelCreate}>Cancel</button>
        </div>
    )
};

export default CreateProduct;