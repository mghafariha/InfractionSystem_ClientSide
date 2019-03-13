import React from 'react';
import HighChart from '../Forms/Report/Components/HighChart';
import {AllViolationParameters} from '../Forms/Report/fields';
import {getReportData} from '../api'
class Home extends React.Component{

    constructor(props){
     super(props);
     this.state={data:{}}
    }
componentDidMount=(e)=>{
          
  getReportData({ReportName:'SumViolation'}).then((response)=>{
            let item=response.data[0];
            this.setState({data:{...item,percentDocument:Math.floor(item.Document*100/item.Kol),percentReport:Math.floor(item.Report*100/item.Kol),percentPolomp:Math.floor(item.Polomp*100/item.Kol)}})
            console.log('data',this.state.data);
  })
}

    render(){
     
        return ( <div >  
        <div className="row">
            <div className="col-md-12">
                <div className="box">
                    {/* <div classNameName="box-header with-border">
                        <h3 classNameName="box-title">Monthly Recap Report</h3>
                    </div> */}
                    <div className="box-body">
                        <div className="row">

                           <div className="col-md-3 col-sm-6 col-xs-12">
                           <div className="info-box bg-yellow">
                            <span className="info-box-icon"><i className="ion ion-ios-pricetag"></i></span>

                            <div className="info-box-content">
                            <span className="info-box-text">کل تخلفات</span>
                            <span className="info-box-number">{this.state.data.Kol} </span>

                            <div className="progress">
                                <div className="progress-bar"  style={{width:"100%"}}></div>
                            </div>
                            <span className="progress-description">
                                    100% 
                                </span>
                            </div>

                        </div>
                                
                            </div>  
                         <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-aqua">
                                <span className="info-box-icon"><i className="ion ion-ios-book"></i></span>

                                <div className="info-box-content">
                                  <span className="info-box-text">تخلفات پلمپ شده</span>
                                  <span className="info-box-number"> {this.state.data.Polomp}</span>

                                  <div className="progress">
                                    <div className="progress-bar" style={{width:this.state.data.percentPolomp}} ></div>
                                  </div>
                                  <span className="progress-description">
                                        {this.state.data.percentPolomp}%
                                      </span>
                                </div>
                               
                              </div>
                                
                            </div>  


<div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-red">
                              <span className="info-box-icon"><i className="ion ion-ios-cloud-download"></i></span>

                              <div className="info-box-content">
                                <span className="info-box-text">تخلفات رفع شده</span>
                                <span className="info-box-number">{this.state.data.Document}</span>

                                <div className="progress">
                                       <div className="progress-bar" style={{width:this.state.data.percentDocument}} ></div>
                                </div>
                                <span className="progress-description">
                                     {this.state.data.percentDocument}%
                                    </span>
                              </div>
                            
                            </div>
                                
                            </div>  


                        <div className="col-md-3 col-sm-6 col-xs-12">
                              <div className="info-box bg-green">
                                <span className="info-box-icon"><i className="ion ion-ios-analytics"></i></span>

                                <div className="info-box-content">
                                <span className="info-box-text">تخلفات شناسایی شده</span>
                                <span className="info-box-number">{this.state.data.Report}</span>

                                <div className="progress">
                                        <div className="progress-bar" style={{width:this.state.data.percentReport}}></div>
                                </div>
                                <span className="progress-description">
                                    {this.state.data.percentReport}%
                                    </span>
                                </div>

                             </div>
                                
                            </div>  

                     
                           
                         
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    
    
       <div className="row">
        <div className="col-md-12">
          <div className="box">
            {/* <div className="box-header with-border">
            <p className="text-center">
                   نمودار تخلفات
                  </p>
            </div> */}
            
            <div className="box-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="chart">
                    
                  <HighChart ReportName='ViolationChart' parameters={AllViolationParameters} />
                  </div>
                  
                  </div>
              </div>
              
            </div>
            
            {/* <div className="box-footer">
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                    <h5 className="description-header">$35,210.43</h5>
                    <span className="description-text">TOTAL REVENUE</span>
                  </div>
                  
                </div>
                
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-yellow"><i className="fa fa-caret-left"></i> 0%</span>
                    <h5 className="description-header">$10,390.90</h5>
                    <span className="description-text">TOTAL COST</span>
                  </div>
                  
                </div>
                
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 20%</span>
                    <h5 className="description-header">$24,813.53</h5>
                    <span className="description-text">TOTAL PROFIT</span>
                  </div>
                  
                </div>
                
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block">
                    <span className="description-percentage text-red"><i className="fa fa-caret-down"></i> 18%</span>
                    <h5 className="description-header">1200</h5>
                    <span className="description-text">GOAL COMPLETIONS</span>
                  </div>
                  
                </div>
              </div>
             
            </div> */}
            
          </div>
         
        </div>
        
      </div>

</div>
       )
    }
}
export default Home