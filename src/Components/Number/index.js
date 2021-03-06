import React from 'react';
import {connect} from 'react-redux';
 import { setFieldValue } from '../../store/action';

class Number extends React.Component {

    constructor(props) {
        super(props);
        this.state={value:''}
    }
    // if not arrow function you should bind handleChange in constructor => this.handleChange =  this.handleChange.bind(this)
    handleChange=(e)=>{

       this.props.dispatch(setFieldValue(this.props.accessor,e.target.value,this.props.storeIndex));
       this.setState({value:e.target.value});
    }
   
        render() {
            let value=this.props.item[this.props.accessor];
            return this.props.render({value,internalName:this.props.accessor,onChange:this.handleChange,isDisabled:this.props.isDisabled})
        } 
}
const mapStateToProps=(state,props)=>({
    item:state.item[props.storeIndex]
})

export default connect(mapStateToProps)(Number)