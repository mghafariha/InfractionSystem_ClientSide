import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import '../../../styles/style.css';
import SelectWid from '../../../Components/Select/widget'

import {AllowedViolations,NotAllowedViolations,wellTypes,infractionTypesLegal,infractionTypesIllegal} from '../fields';
import Field from '../../../Components/Field';
import CheckboxContainer from './components/Checkbox/container';
import { setFieldValue, setTypes, setItem } from '../../../store/action';
import {saveItem} from '../../../api'
import InfractionContainer from './components/InfractionContainer';

class UnderWaterNew extends React.Component
{
    constructor(props){
        super(props);
        this.state={showCommonFields:false,commonFields:[],fields:[],wellType:'',isSave:false,formName:'New'}
    }

    
    handleChangeType=(selectedOption)=>{
        console.log('e',selectedOption.value);
       if (selectedOption.value!=null)
       {
        this.setState({showCommonFields:true,wellType:selectedOption}) ;

        selectedOption.value=='legal'?this.setState({commonFields:AllowedViolations.filter(a=>a.group=='Moshtarak'),checkBoxTypes:infractionTypesLegal,fields:AllowedViolations.filter(a=>a.group!='Moshtarak')}):this.setState({commonFields:NotAllowedViolations.filter(a=>a.group=='MoshtarakGhair'),checkBoxTypes:infractionTypesIllegal,fields:NotAllowedViolations.filter(a=>a.group!='MoshtarakGhair')});
        this.props.dispatch(setTypes('UnderWater', selectedOption.value=='legal'?infractionTypesLegal:infractionTypesIllegal));
       }
      }
      handleSubmit=(e)=>{

        this.setState({loading:true})
        e.preventDefault();
        
        console.log('item',this.props.item);
       console.log('infractionType',this.props.infractionTypes);
 
         let saveItm=Object.keys(this.props.item).reduce((result,key)=>{if(typeof(this.props.item[key])!='object') result[key]=this.props.item[key] ;return result;},{});
            saveItm={...saveItm,'InfractionType':this.props.infractionTypes};
            console.log('saveItem',this.props.item);
           
        if(!this.props.item['ID'])
        {   
          //  let saveItm=Object.keys(this.props.item).reduce((result,key)=>{result[key]=(lookupFields.find(itm=>itm.accessor==key)?{ID:this.props.item[key].option[value]}:this.props.item[key]); return result;},{})
     
           //console.log('saveItem',saveItm);
      
            console.log('item',{...this.props.item,'InfractionType':this.props.infractionTypes})

      
            saveItem(saveItm, this.state.wellType.value=='legal'?'AllowedViolations':'NotAllowedViolations').then((response)=>{
            alert('آیتم جدید با موفقیت ذخیره شد');
            this.setState({isSave:true});
            this.props.dispatch(setItem('UnderWater',{}));
             }).catch((error)=>console.log(error));
        }
      
    }
    render()
    {
        if (this.state.isSave) {
            return <Redirect to='/' />;
          }
       console.log('test')
        let options = wellTypes.map(option => ({label: option.value, value: option.key}));
      
        // let commonFields=fields.filter(a=>a.group=='');
        return (<form onSubmit={this.handleSubmit}>
                     <h1></h1>
              <div className='leg-head-form' style={{backgroundColor:'#1d78a0'}}>
               <div className='labale-form myrow '> نوع چاه </div> 

                  <div className='cod-input myrow' style={{width:"20%"}}>
                  
                       <SelectWid value={this.state.wellType} internalName={this.props.accessor} multiple={this.props.IsMulti} options={options} onChange={this.handleChangeType} />
                  </div>
                </div>

           
             {/* <div><Field field={accessor:'WellType', type:'Select' Options="چاه مجاز , چاه غیر مجاز" Header='نوع چاه' onChange={this.WellTypeChange} ></Field></div> */}
             {this.state.showCommonFields?<div> <div className='form-contents'>{this.state.commonFields.map((a,index)=><Field  key={index}
                                                                                                                              {...a}
                                                                                                                       formName={this.props.formName} storeIndex='UnderWater'></Field>)}</div>
                                                <fieldset > <legend>نوع تخلف</legend>
                                                <CheckboxContainer style={{backgroundColor:"#1d78a0"}}  storeIndex='UnderWater' accessor='InfractionType'/>
                                                </fieldset>
                                                    <InfractionContainer fields={this.state.fields} formName='New'/>
                                                   
                                                    <button className="btn btn-primary" type='submit'>ذخیره</button>
                                                </div> :null}
                                                
                                         
                                          
                                            {/* <div >
                                            {this.state.fields.filter(a=>a.group.indexOf(this.props.infractionTypes)!=-1).map((a,index)=><Field key={index} {...a} storeIndex='UnderWater'></Field>)}
                                            </div> */}
                                               </form>);
    }
    
}
const mapStateToProps=(state,props)=>(console.log('iternm',state.item['UnderWater']),{
    item:state.item['UnderWater'],
    infractionTypes:state.types['UnderWater'].filter(a=>a.isChecked).map(a=>(a.Header)).join(',')
 })

export default connect(mapStateToProps)(UnderWaterNew);
