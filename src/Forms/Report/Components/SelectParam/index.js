import React from 'react'
import {connect} from 'react-redux';
import {setFieldValue} from '../../../../store/action'

import Select from 'react-select';

class SelectParam extends React.Component{
    constructor(props){
        super(props);
        this.state={ selectedOption:null}
    }
    componentDidMount=(e)=>{
            this.setState({selectedOption:this.props.Options.split(',').map(opt=>({value: opt, label: opt}))[0]})
    }
    handleChange=(selectedOption)=>{
        this.setState({ selectedOption });
       var options = selectedOption;
        if(Array.isArray(options))
        {
            var value = "";
          
         value=  options.reduce((acc, itm)=> {
            return acc + itm.value + ",";
          }, '');
            value.slice(0, -1);
            console.log('reduce',value)
            this.props.dispatch(setFieldValue(this.props.accessor, value.slice(0, -1),this.props.storeIndex))
            
         }
        else {
             this.props.dispatch(setFieldValue(this.props.accessor,selectedOption.value,this.props.storeIndex))
             if(selectedOption.value=='ندارد')
                {
                }
                else 
                {  
                }
              
         }
         console.log('field disable',this.props.fields)
    }


    render(){
       let options=this.props.Options.split(',').map(opt=>({value: opt, label: opt}))
       const { selectedOption } = this.state;
        console.log('selectprops',this.props)
        return (<Select
          
              onChange={this.handleChange}
              isMulti={this.props.multiple}
              value={selectedOption}
              options={options}
              placeholder='انتخاب ...'
                    
       />
    
    )
    }
} 
const mapStateToProps=(state,props)=>({
    item:state.item[props.storeIndex]
})
export default connect(mapStateToProps)(SelectParam)