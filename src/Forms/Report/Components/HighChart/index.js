import React from 'react'
import {connect} from 'react-redux';
import ParameterReport from '../ParameterReport';
import {getReportData} from '../../../../api'
import {setAllItems} from '../../../../store/action';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'

// const options = {
//   title: {
//     text: 'My chart'
//   },
//   xAxis: {
//     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// },

// series: [{
//     data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
// }, {
//     data: [216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5],
//     lineWidth: 5
// }]
// }
 
class HighchartsWrapper extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={categories:null}
  }
  componentDidMount=(e)=>{
    this.props.dispatch(setAllItems('Report',[]));
            
               getReportData({ReportName:this.props.ReportName}).then((response)=>{
                this.props.dispatch(setAllItems('Report',response.data));
                this.setState({categoreis:this.props.items.map(a=>(a.month))})
                console.log('datta',response.data);
                  console.log(response);
               })
  
    
  }
  render(){
   const {categoreis}=this.state;
    console.log('cat',categoreis);


    const options = {
      credits: {
        enabled: false
    },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.props.items.map(a=>(a.month))
       },
       yAxis: {
          title: {
              text: 'تعداد'
          },
          tickInterval:1
       },
    series: [{
      type:'column',
        name:'پلمپ شده',
        data: this.props.items.map(a=>(a.polopm)),
        lineWidth:2
          //[29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }, {
      type:'column',
        name:'رفع تخلفات انجام شده',
        data:this.props.items.map(a=>a.Document), //[216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5],
         lineWidth: 5
    },{
      type:'column',
      name:'تعداد تخلفات شناسایی شده',
      data:this.props.items.map(a=>a.ReportNumber),
      lineWidth: 5 
    }]
    }
    console.log('props',this.props);
    return(<div>
      <div class="box-header with-border label-primary">
              <p className="text-center" style={{fontSize:"14px"}} >نمودار تخلفات</p>
            </div>
            {this.props.parameters?<ParameterReport  storeIndex='Report' {...this.props} />:null}
            { this.props.items?<HighchartsReact
                highcharts={Highcharts}
                options={options}
                oneToOne={true}
                constructorType={'chart'}
            />:null}
            </div>
          )
    }
}
const mapStateToProps=(state)=>({
    items:state.items['Report']
})
export default connect(mapStateToProps)(HighchartsWrapper);