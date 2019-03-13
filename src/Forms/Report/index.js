import React from 'react';
import {connect} from 'react-redux';
import {getReportData} from '../../api';
import {setAllItems} from '../../store/action';
import Table from './Components/DataGrid';
import ParameterReport from './Components/ParameterReport'
class Report extends React.Component{
        constructor(props){
              super(props);
        }
        componentDidMount=()=>{
            this.props.dispatch(setAllItems('Report',[]));
            
               getReportData({ReportName:this.props.ReportName}).then((response)=>{
                this.props.dispatch(setAllItems('Report',response.data));
                console.log('datta',response.data);
                  console.log(response);
               })
            
        }
        render(){
            return(<div>
                 <div class="box-header with-border bg-yellow">
                    <p className="text-center" style={{fontSize:"14px"}} >{this.props.displayName}</p>
                 </div>
             { this.props.parameters? <ParameterReport storeIndex='Report' {...this.props}  style={{'margin-top': '1%'}}/> :null}
             { this.props.items?  <Table storeIndex='Report' {...this.props} showDisplay={false} />: null }
              </div>
               );
        }

}
const mapStateToProps=(state)=>({
    items:state.items['Report'],
    
})
export default connect(mapStateToProps)(Report)