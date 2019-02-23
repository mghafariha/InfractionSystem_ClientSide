import React from 'react';
import {connect} from 'react-redux';
import {setItem,addItem,changeItem} from '../../store/action';
import Field from '../Field';
import Loader from '../Loader';
import {saveItem,updateItem} from '../../api';

class ItemForm extends React.Component{

        constructor(props)
        {
            super(props);
            this.state={loading:true}
        }
       
        handleSubmit=(e)=>{
            e.preventDefault();
            console.log('item',this.props);
            console.log('saveItem',this.props.item);
            let saveItm=Object.keys(this.props.item).reduce((result,key)=>{if(typeof(this.props.item[key])!='object' && (key=='ID' ||key=='InfractionType' || this.props.fieldsItem.find(a=>a.accessor==key ||a.accessor+'Id'==key) )) result[key]=this.props.item[key] ;return result;},{});//|| this.props.fieldsItem.find(a=>a.accessor==key)
            if(!this.props.item['ID'])
            {
                this.setState({loading:true});
                console.log('item',this.props.item)
                saveItem(saveItm,this.props.table).then((response)=>{
                    console.log('response',response);
                    alert('اطلاعات با موفقیت ذخیره شد');
                    
                    this.props.dispatch(addItem(response.data,this.props.item));
                    this.props.dispatch(setItem(this.props.storeIndex,{}));
                    this.setState({loading:false});
                    if (!!this.props.closeAfterSave) {
                      this.props.closeAfterSave();
                    }
                    }).catch(error=>console.log('error :',error))
            }
        else{
            //   let saveItm=Object.keys(this.props.item).reduce((result,key)=>{if(typeof(this.props.item[key])!='object') result[key]=this.props.item[key] ;return result;},{});
            updateItem(saveItm,this.props.table).then((response)=>{
                alert('آیتم با موفقیت بروزرسانی شد');
        console.log('saveItem',saveItm);
            
                    this.props.dispatch(changeItem(saveItm,this.props.storeIndex));
                   
                    if (!!this.props.closeAfterSave) {
                      this.props.closeAfterSave();
                    }
                    //this.getTitle.value='';
                  //  this.getDescription.value='';
                  this.props.dispatch(setItem(this.props.storeIndex,{}));
                  // this.setState({loading:false});
                }).catch((error)=>{
                    console.log(error)
                    alert('خطا' + error);
                }
            );
          
        } 
    }
        

        componentDidMount=(e)=>{
                                                                        
            this.props.dispatch(setItem(this.props.storeIndex,this.props.selectedItem));
         
           this.setState({loading:false});
            
        }
        render(){
            return(!this.state.loading?
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formTitle}</h1>
                <div className={this.props.className?this.props.className:'form-contents'}  >
                 { 
                     this.props.fieldsItem.map((field,index)=>(<Field  key={field.accessor} {...field}   formName={this.props.formName} storeIndex={this.props.storeIndex}  fieldClassName={this.props.fieldClassName} />))
                    }
                      </div>
                    {this.props.formName!='Display'?  <button  type="submit">ذخیره</button>:null}
            </form>:<div className='sweet-loading'>
                                    <Loader
                                    
                                    sizeUnit={"px"}
                                    size={150}
                                    color={'#123abc'}
                                    loading={this.state.loading}
                                    />
         </div> )
        }
}
const mapStateToProps=(state,props)=>({
                item:state.item[props.storeIndex],
                fieldsItem:state.fieldsItem[props.storeIndex],
                modal:true
});
export default connect(mapStateToProps)(ItemForm);