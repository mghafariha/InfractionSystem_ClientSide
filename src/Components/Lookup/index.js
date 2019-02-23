import React from 'react';
import {connect} from 'react-redux';
import {setFieldValue} from '../../store/action';
import {getAllItem} from '../../api';
 class Lookup extends  React.Component{
constructor(props){
     super(props);
     this.state={
         options:[],
          value:0,
         selectedText:''
     }
}
    handleChange = (e) => {
       
        const {options, selectedIndex} = e.target;
    //console.log(options[selectedIndex].innerHTML);
       this.setState({value:e.target.value,selectedText:options[selectedIndex].innerHTML})
        // if (this.props.multiple) {
        //     var options = e.target.options;
        //     var value = "";
        //     for (var i = 0, l = options.length; i < l; i++) {
        //         if (options[i].selected) {
        //             value += (options[i].value) + ",";
        //         }
                
        //     }
        //     value.slice(0, -1);
        //     this.props.dispatch(changeField(this.props.internalName,value))
        // }
        // else {
            this.props.dispatch(setFieldValue(this.props.accessor +"Id",e.target.value,this.props.storeIndex))
            this.props.dispatch(setFieldValue(this.props.accessor,{'ID':e.target.value,[this.props.TitleField]:options[selectedIndex].innerHTML},this.props.storeIndex))
    }
componentDidMount(){

    let field=this.props;
    
    getAllItem(field.Options,'ID,'+field.TitleField).then((result)=>{

       this.setState({options:result.data,value:this.props.value,selectedText:this.props.lookupField? result.data.find(a=>a.ID==this.props.value)['Title']:''});
        console.log('options',result);
       this.props.dispatch(setFieldValue(this.props.accessor+'Id',this.state.value,this.props.storeIndex));
       this.props.dispatch(setFieldValue(this.props.accessor,{'ID':this.state.value,'Title':this.state.selectedText},this.props.storeIndex));

    }).catch(error=>console.log('error lookup',error));

}
render(){
    
  return this.props.render({value:this.state.value,internalName:this.props.accessor,multiple:this.props.IsMulti,options:this.state.options,titleField:this.props.TitleField, onChange: this.handleChange,formName:this.props.formName })
}

 }
 const mapStateToProps=(state,props)=>(console.log('lookupfield', state.item[props.storeIndex][props.accessor.substring(0,props.accessor.length-2)]),{
   
    item:state.item[props.storeIndex],
   
    lookupField:state.item[props.storeIndex][props.accessor+'Id'],
    value:state.item[props.storeIndex][props.accessor+'Id']
 })
 export default connect(mapStateToProps)(Lookup)

