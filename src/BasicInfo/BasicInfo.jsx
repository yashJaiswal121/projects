import React,{ Component } from 'react';
class BasicInfo extends React.Component{
    render(){
        return(
            <div>
            <fieldset>
                <legend>
                    Name:
                    </legend>
                    <input type='text' name='name' value={this.props.values.name} onChange={(e) => {this.props.handleChange(e)}} /><br/>
                    <legend>
                    password:
                    </legend>
                    <input type='text' name='password' value={this.props.values.password}  onChange={(e) => {this.props.handleChange(e)}}/><br/>
                    <legend>
                    email:
                    </legend>
                    <input type='text' name='email' value={this.props.values.email}  onChange={(e) => {this.props.handleChange(e)}}/><br/>
            </fieldset>
        </div> 
        );
    }
}
export default BasicInfo;