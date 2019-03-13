import React from 'react';
import {connect} from 'react-redux';
import {getReportData} from '../../../../api';
import {setAllItems} from '../../../../store/action';
import SelectParam from '../SelectParam';
class ParameterReport extends React.Component{


    constructor(props){
        super(props);
    }
    handleClick=(e)=>{
        this.props.dispatch(setAllItems('Report',[]));
       let params= Object.values(this.props.item).join(',');
        getReportData({ReportName:this.props.ReportName+','+ params}).then((response)=>{
         this.props.dispatch(setAllItems('Report',response.data));
         console.log('datta',response.data);
           console.log(response);
        }).catch(error=>console.log(error))
       
    }
    render(){
        return(<div className={this.props.className?this.props.className:'form-contents'}  >
                  { 
                    this.props.parameters.map((field,index)=>(<SelectParam  key={index} {...field}   formName='New' storeIndex={this.props.storeIndex}   />))
                  }
                
                 <button  onClick={this.handleClick} className="btn btn-success"  style={{width:"30%"}}>مشاهده گزارش</button>
                    </div>)
    }
}
const mapStateToProps=(state,props)=>({
    item:state.item[props.storeIndex]
})
export default connect(mapStateToProps)(ParameterReport)