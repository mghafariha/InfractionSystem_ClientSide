import React from 'react';
import {connect} from 'react-redux';
import Table from '../../Components/DataGrid/Table';
import {getAllItemWithParam,getReportData} from '../../api';
import {setAllItems, setFieldsItem} from '../../store/action';
import UnderWaterItem from './item'
import { AllowedViolations,NotAllowedViolations } from './fields';

import UnderWaterWorkflow from './Workflow';
import Base from './Workflow/Base';
import Card from '../../Components/Card';
class DataGrid extends React.Component{
        constructor(props){
            super(props);
            this.state={cardInfo:[]}
            
        }
        componentDidMount(){
          
         //   http://localhost:45420/api/AllowedViolations?$filter=substringof('آب فروشی',InfractionType)
                                             // $filter=substringof('"+ this.props.type+"',InfractionType)"
           getAllItemWithParam(this.props.table,this.props.type).then((response)=>{
               this.props.dispatch(setAllItems('UnderWater',response.data));
               console.log('datta',response.data);
           });
           getReportData({ReportName:'ViolationMasterPage,' + this.props.type }).then((response)=>{
              let item=response.data[0];
              console.log('data0',item);
              let sum=Object.keys(item).reduce((sum,key)=>sum+parseFloat(item[key]||0),0);
             let newCardInfo=this.props.cardInfo.map((itm)=>({...itm,value:item[itm.accessor],percent: sum!=0?Math.floor(item[itm.accessor]*100/sum):0}))
             console.log('data1',newCardInfo);
              this.setState({cardInfo:newCardInfo});
            console.log('data2',this.state.cardInfo);
  })

      
          if( this.props.table=='AllowedViolations')
            {
                let fields= AllowedViolations.filter(a=>a.group=='Moshtarak' || a.group==this.props.infractionType )
                this.props.dispatch(setFieldsItem('UnderWater',fields ));
                getReportData({ReportName:'ViolationMasterPage,' + this.props.type }).then((response)=>{
                    let item=response.data[0];
                    let sum=Object.keys(item).reduce((sum,key)=>sum+parseFloat(item[key]||0),0);
                    let newCardInfo=this.props.cardInfo.map((itm)=>({...itm,value:item[itm.accessor],percent: sum!=0?Math.floor(item[itm.accessor]*100/sum):0}))
                    this.setState({cardInfo:newCardInfo});
                  
                  })
             }
            else if(this.props.table=='NotAllowedViolations')
            {
                let fields= NotAllowedViolations.filter(a=>a.group=='MoshtarakGhair' || a.group==this.props.infractionType )
                this.props.dispatch(setFieldsItem('UnderWater',fields ));

                getReportData({ReportName:'NotViolationMasterPage,' + this.props.type }).then((response)=>{
                    let item=response.data[0];
                    console.log('data0',item);
                    let sum=Object.keys(item).reduce((sum,key)=>sum+parseFloat(item[key]||0),0);
                   let newCardInfo=this.props.cardInfo.map((itm)=>({...itm,value:item[itm.accessor],percent: sum!=0?Math.floor(item[itm.accessor]*100/sum):0}))
                   console.log('data1',newCardInfo);
                   this.setState({cardInfo:newCardInfo});
                })
            }
          
        }
    render(){
        
        let  numberCard= Math.floor(12/this.props.cardInfo.length);
        console.log('nnnnnn',numberCard);
       
        return(<div>
             <div className="row">
                <div className="col-md-12">
                    <div className="box">
                        {/* <div className="box-header with-border">
                            <h3 className="box-title">Monthly Recap Report</h3>
                        </div> */}
                            <div className="box-body">
                            <div className="row">
                            {this.state.cardInfo.map((card,index)=><Card key={index} {...card} classNumber={'col-md-'+numberCard}/>

                        )}
                    </div>
                    </div>
                    </div>
                </div>
            </div>
           <Table   storeIndex='UnderWater' {...this.props}  showNew={true} workFlow={Base} itemIndex={UnderWaterItem}  />  
        </div>)
    }
}
const mapStateToProps=(state)=>({
    items:state.items['UnderWater'],
    fieldsItem:state.fieldsItem['UnderWater']
})
export default connect(mapStateToProps)(DataGrid)