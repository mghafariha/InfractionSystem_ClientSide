import React from 'react'
import {connect} from 'react-redux';
import moment from 'moment-jalaali';
import 'react-table/react-table.css';
import ReactTable from "react-table";
import { ReactTableDefaults } from "react-table";
import Workbook from 'react-excel-workbook';



  class Table extends React.Component{

    constructor(props){
        super(props);
        this.state={column:[]
        }
    }

      // handleCloseViolationModal =(e)=> {
      //   this.setState({ showViolationModal: false });
      //   this.props.dispatch(setItem({},this.props.storeIndex));
      //   this.setState({selectedItem:{}})
      // }
    // removeClick=(row)=>{
    //  removeItem(row['ID']).then((response)=>{
    //  this.props.dispatch(deleteItem(row))
    //   }).catch((e)=>console.log(e))
    // }
    componentDidMount=(e)=>{
          this.setState({itemIndex:this.props.itemIndex}) 
    }

  defaultFilterMethod = (filter, row, column) => {
    const id = filter.pivotId || filter.id;
     if(column.type=='DateTime')
      return (row[filter.id]!=null?moment(String(row[filter.id])).format('jYYYY/jMM/jDD').indexOf(filter.value)>=0:false) 
     else return String(row[filter.id]).indexOf(filter.value)>=0

  }
  render(){
    // const TagName = this.components[this.props.itemIndex || 'foo'];
   
    Object.assign(ReactTableDefaults, {
      defaultPageSize: 5,
      minRows: 3
      // etc...
    });

   
 let columns = this.props.fields;
 var clm=  columns.map((column)=>({
        Header: column.Header,
        id: column.accessor,
        type:column.type,
        // accessor:  props => <div> {moment(props.value).format('YY/MM/DD')} </div>
        accessor:column.accessor,
        Cell: ( row) => (
        <span>{
            row.value
            }                                                            
            </span>
            ) 

        }))
  return(
     <div className='data-grid' >
    
        <ReactTable
              data={this.props.items.map((itm,index)=>({...itm,key:index}))}
              noDataText="اطلاعاتی وجود ندارد"
              previousText={'قبل'}
              nextText={'بعد'}
              defaultFilterMethod={this.defaultFilterMethod}    
               // String(row[filter.id]).startsWith( filter.value)
         
              columns={clm}
              className="-striped -highlight"
              

              getTrProps={(state, rowInfo) => {
               console.log('ffjfd',this.props);
               console.log('row',rowInfo)
                        return {
                          style: {
                            // background:(rowInfo && !rowInfo.original.Status) ? '#f8e1e1':(rowInfo && rowInfo.original.Status==this.props.lastStep) ?'#a3f3a3':'#ececa9'
                          }
                        }
            }}
             
          />
          <div style={{marginTop: '10px' ,float:'right'}}>
                <Workbook filename={this.props.ReportName+ ".xlsx"}  element={<button className="fa fa-file-excel-o"  style={{'fontSize':'36px',color:'green'}}></button>}>
                <Workbook.Sheet data={this.props.items} name="Sheet A">
                {
                  columns.map((col)=><Workbook.Column  key={col.accessor} label={col.Header} value={col.accessor} />)
                }
                    {/* <Workbook.Column label="name" value="name"/>
                    <Workbook.Column label="age" value="age"/> */}
                </Workbook.Sheet>
                </Workbook>
                </div>
           </div>

             )

     }

}
const mapStateToProps=(state,props)=>({
  items:state.items[props.storeIndex]
  })
export default  connect(mapStateToProps)(Table)