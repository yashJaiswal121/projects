import React,{ Component } from 'react';
class AddressInfo extends React.Component{
    

    render(){




        return(
            <div>
            <fieldset>
                <legend>
                    Locality:
                    </legend>
                    <input type='text' name='locality' value={this.props.values.locality} onChange={(e)=>{this.props.handleChange(e);}} /><br/>
                    <legend>
                    City:
                    </legend>
                    <input type='text' name='city' value={this.props.values.city} onChange={(e)=>{this.props.handleChange(e);}} /><br/>
                    <legend>
                    State:
                    </legend>
                        <select name="stat" onChange={(e)=>{this.props.handleChange(e);}}>
                            <option value="UttarPradesh" >UttarPradesh</option>
                            <option value="Delhi" >Delhi</option>
                            <option value="Maharastra" >Maharastra</option>

                        </select>

                </fieldset>

        </div> 
        );

    }


}
export default AddressInfo;