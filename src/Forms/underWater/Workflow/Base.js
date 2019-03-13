import React from 'react';
import {connect}from 'react-redux';
import Modal from 'react-modal';
import {Ezafe,AdamNasb,Mansubat,EnteghalAb,KafShekani,AdamTamdid,AbForoushi,TaghirKarbari,Plumb,Masloub,TaghirMahal,AbShirin} from './steps';
import UnderWaterItem from '../../underWater/item'
import {updateItem,saveItem} from '../../../api';
import Step from './Step';
import Field from '../../../Components/Field';
import { setItem ,setAllItems} from '../../../store/action';
import Loader from '../../../Components/Loader';
import {getAllItem} from '../../../api';
const customStyles = {
    content : {
      position: 'absolute',
      top: '60px',
      left: '60px',
      right: '75%',
      bottom: '30%',
      border: '1px solid rgb(204, 204, 204)',
      background: 'rgb(255, 255, 255)',
      overflow: 'auto',
      
      outline: 'none',
      padding: '20px'
  }
   
    }
    

class Base extends React.Component{
     constructor(props){
         super(props);
         this.state={loading:true,showStepModal: false,step:{},showStep:false,currentItem:{},stepItems:[],canEdit:false}
     }
      handleOpenStepModal =(e)=> {
        this.setState({ showStepModal: true });
      }
      
      handleCloseStepModal =(e)=> {
        this.setState({ showStepModal: false });
       
        this.props.dispatch(setItem(this.props.storeIndex+'Workflow',{}));
        console.log('stepitems',this.props.items);
        
      }
     onShowClick=(e,step)=>{

        // this.setState({ showStep:false});
        
      
        // this.props.dispatch(setItem(this.props.storeIndex,{}));
        
         this.setState({step:step,currentItem:this.props.items.find(a=>a.Step==step.accessor)});
        
         this.props.dispatch(setItem(this.props.storeIndex+'Workflow',this.props.items.find(a=>a.Step==step.accessor)));
         console.log('hfhfjdj',this.state.stepItems);
         this.setState({loading:false,showStep:true,showStepModal:true});
           
        }
     componentDidMount=(e)=>{
        getAllItem(this.props.table +"Workflow?$filter=ViolationId eq " + this.props.selectedItem.ID + " and InfractionType eq '"+ this.props.type +"'").then((result)=>{

            console.log('titemmmm',result);
           this.setState({stepItems:result.data.map(a=>a.File?{...a,className:'green'}:{...a,className:'red'})})
           
           this.props.dispatch(setAllItems('UnderWaterWorkflow',result.data.map(a=>a.File?{...a,className:'green'}:{...a,className:'red'})));
           console.log('titemmmm',this.props.items)
         })
          this.props.dispatch(setItem(this.props.storeIndex+'Workflow',{}));
        // let itmId=getUrlVars()['ID'];
 
         this.setState({loading:false})
         console.log('infractType',this.props);
         
     }
     render(){
       
        let steps=[];
    
        switch(this.props.infractionType){
            case 'Ezafe':
                 steps=Ezafe;
                 break;
            case 'AdamNasb':
                 steps=AdamNasb;
                 break;
            case  'Mansubat':
                 steps=Mansubat;
                 break;
            case 'EnteghalAb':
                 steps=EnteghalAb;
                 break;
            case 'KafShekani':
                 steps=KafShekani;
                 break;
             case 'AdamTamdid':
                 steps=AdamTamdid;
                 break;
             case 'AbForoushi':
                 steps=AbForoushi;
                 break;
            case 'TaghirMahal':
                 steps=TaghirMahal;
                 break;
             case 'AbShirin':
                 steps=AbShirin;
                 break;
                 
             case 'TaghirKarbari':
                 steps=TaghirKarbari;
                 break;
             case 'Plumb':
                  steps=Plumb;
                  break;
             case 'Masloub':
                  steps=Masloub;
                  break;
             default :
                  steps=[];
             

        }
        console.log('ppp',this.props.items);
      steps=  steps.map(step=> 
            ( this.props.items.find(a=>a.Step==step.accessor) &&  this.props.items.find(a=>a.Step==step.accessor)['File']?
            {...step,Files:this.props.items.find(a=>a.Step==step.accessor)['File'].split('|').map(a=>({path:a,filename:a.substring(a.lastIndexOf('/')+1)}))}:
            {...step,Files:[]}))
        
        console.log('steps',steps);
          return(<div className='warper-form'>
                    <div className="row-items">
               
                         <UnderWaterItem formName={this.state.canEdit?'Edit':'Display'} {...this.props}  formTitle='تخلف' className='form-contents' fieldClassName='field-workflow-item' table={this.props.table} />
                         {!this.state.canEdit? <input type='button'  className='edit-button btn btn-primary' onClick={event => this.setState({canEdit:true})}  value='ویرایش' />: <input type='button' className='edit-button btn btn-success' onClick={event => this.setState({canEdit:false})}  value='مشاهده' />}
                      </div>
                      <div className="row-workflow-items">
                      <h1> گردش کار</h1>
                        <div className='form-workflow-contents'>
                        {steps.map((step,index)=><div className="field-item" key={step.Header}>
                                                 <fieldset  onClick={event => this.onShowClick(event,step)}>

                                                      <h3> {step.Header}</h3>
                                                      <div> { step.Files.map((file,index)=><div key={index}>
                                                                                                    <a href={file.path}  target='_blank' >{file.filename}</a>
                                                                                                </div>)}
                                                                                                </div>
                                                     {/* <input  key={step.Header} type='button' onClick={event => this.onShowClick(event,step)}  value='ثبت تخلف' /> */}
                                                 </fieldset>
                                                 </div>)}
                        

                        </div>        {/* {steps.map((step,index)=><input  key={step.Header} type='button' onClick={event => this.onShowClick(event,step)} className={'green'} value={step.Header}/>)} */}
                      </div>
                     

           { this.state.showStepModal? <div>
               <Modal
                 style={customStyles}
                  isOpen={this.state.showStepModal}
                  contentLabel="onRequestClose Example"
                  onRequestClose={this.handleCloseStepModal}
                  shouldCloseOnOverlayClick={false}
               >
                <div className='close-btt' onClick={this.handleCloseStepModal}>✖</div>
                 <Step   lookupId={this.props.selectedItem.ID} table={this.props.table} storeIndex={this.props.storeIndex} type={this.props.type}  step={this.state.step}  index={this.props.selectedItem.Index} currentItem={this.state.currentItem}  closeAfterSave={this.handleCloseStepModal} />
                 
               </Modal> 
               </div>:null}


                      {/* {this.state.showStep ?    <Step  lookupId={this.props.selectedItem.ID} table={this.props.table} storeIndex={this.props.storeIndex} type={this.props.type}  step={this.state.step} index={this.props.selectedItem.Index} currentItem={this.state.currentItem} />:<div>loading</div>} */}
                     
                 </div>)
           
         }

 }
 const mapStateToProps=(state,props)=>({
    
    stepItem:state.item[props.storeIndex+'Workflow'],
     items:state.items['UnderWaterWorkflow'].map(a=>(a.File?{...a,className:'green'}:{...a,className:null}))
 })
 export default connect(mapStateToProps)(Base)