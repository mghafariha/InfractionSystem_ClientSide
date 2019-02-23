import React from 'react';
import { connect } from 'react-redux';
import ItemForm from '../../../Components/ItemForm';
import {AllowedViolations,NotAllowedViolations}  from '../fields'
import { setFieldsItem } from '../../../store/action';

class UnderWaterItem extends React.Component{

    constructor(props){
        super(props);
    }
   
    render(){
        return (<div>
                <ItemForm  className={this.props.className} {...this.props}  />
              
                </div>
        )
    }
}
const mapStateToProps =(state,props)=>(console.log('item',state.item[props.storeIndex]),{

    item:state.item[props.storeIndex]
})
export default connect(mapStateToProps)(UnderWaterItem)