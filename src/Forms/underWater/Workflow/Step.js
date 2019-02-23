import React from 'react';
import {connect} from 'react-redux';
import Field from '../../../Components/Field';
import Loader from '../../../Components/Loader';
import { setItem,changeItem,addItem } from '../../../store/action';
import '../../../styles/style.css';


import {saveItem,updateItem} from '../../../api';
  class Step extends React.Component{
    constructor(props){

        super(props);
        this.state={ loading:true }
    }
    componentDidMount(){
     console.log('inftype',this.props);
      // getAllItem(this.props.table +"Workflow?$filter=ViolationId eq " + this.props.lookupId + "& Step eq  "+ this.props.step.accessor).then((result)=>{
      //   console.log('result',result)
      //   this.setState({stepItems:result.data})
      // })
     //   this.props.dispatch(setItem(this.props.storeIndex,this.props.currentItem));
      
        this.setState({loading:false})
     
    }
   
    handleSubmit=(e)=>{
        this.setState({loading:true})
          e.preventDefault();
          console.log('saveWorkFlow',this.props.item);
          let saveItm={...this.props.item,ViolationId:this.props.lookupId,Step:this.props.step.accessor,InfractionType:this.props.type};
          if(!this.props.item['ID'])
          {
          saveItem(saveItm,this.props.table + 'Workflow').then((response)=>{
        //    this.props.dispatch(changeItem(this.props.item,this.props.storeIndex));
        console.log('response',response);
          alert('اطلاعات با موفقیت ذخیره شد');
          
          this.props.dispatch(addItem(response.data,'UnderWaterWorkflow'));
          this.props.dispatch(setItem(this.props.storeIndex+'Workflow',{}));
          this.setState({loading:false});
          if (!!this.props.closeAfterSave) {
            this.props.closeAfterSave();
          }
          }).catch(error=>console.log('error :',error))
        }
        else {
           //   let saveItm=Object.keys(this.props.item).reduce((result,key)=>{if(typeof(this.props.item[key])!='object') result[key]=this.props.item[key] ;return result;},{});
           updateItem(saveItm,this.props.table+'Workflow').then((response)=>{
             
            alert('آیتم با موفقیت بروزرسانی شد');
    
            this.props.dispatch(changeItem(this.props.item,'UnderWaterWorkflow'));
           
            if (!!this.props.closeAfterSave) {
              this.props.closeAfterSave();
            }
            //this.getTitle.value='';
          //  this.getDescription.value='';
          this.props.dispatch(setItem(this.props.storeIndex+'Workflow',{}));
           this.setState({loading:false});
        }).catch((error)=>console.log(error));
        }
    }
   
    handleChange=(e)=>{

    //  this.setState({isChecked: !this.state.isChecked})
    }

    render(){
     let path=this.props.type +"/" +this.props.index+"/" + this.props.step.Header;
     let step=this.props.step;
     console.log('steps',this.props);
      return(!this.state.loading? <form onSubmit={this.handleSubmit}> 
      <h1>{ this.props.step.Header}</h1>
         <div className='step-form'>
       {step.Fields.map((field,index)=><Field
                                                        key={field.accessor}
                                                        accessor={field.accessor}
                                                        Header={field.Header}
                                                        type ={field.type}
                                                        storeIndex={this.props.storeIndex+'Workflow'}
                                                        value={this.props.item[field.accessor]}
                                                        path={path}
                                                        formName='New' 
                                                        step={step.accessor}
                                                        IsMulti={field.IsMulti}
                                                        />)}
         
           </div>   <button  type="submit">ذخیره</button>
            </form>:<div className='sweet-loading'>
        <Loader
        
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>  )
        
    }
  }
  const mapStateToProps=(state,props)=>({
  item:state.item[props.storeIndex+'Workflow']
  })
  export default connect(mapStateToProps)(Step)