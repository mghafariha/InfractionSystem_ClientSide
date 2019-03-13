import React from 'react';
class Card extends React.Component{

    constructor(props){
        super(props);
        this.state={displayTitle:'تخلفات پیشبینی شده',value:'32,740',percent:'90%' ,className:'info-box bg-yellow',classNumber:'col-md-3'}
    }
    componentDidMount=(e)=>{
        this.setState({displayTitle:this.props.displayTitle,value:this.props.value,percent:this.props.percent, classStyle:this.props.className,classNumber:this.props.classNumber})

       
    }
    render(){
        //"col-md-3 col-sm-6 col-xs-12"
        return <div className={this.state.classNumber +" col-sm-6 col-xs-12" }  >  
           <div className={this.state.classStyle}>
                <span className="info-box-icon"><i className="ion ion-ios-book"></i></span>

                <div className="info-box-content">
                <span className="info-box-text">{this.state.displayTitle}</span>
                <span className="info-box-number" style={{marginTop: '20px'}}>{this.state.value}</span>

                {/* <div className="progress">
                    <div className="progress-bar"  style={{width:this.state.percent}}></div>
                </div>
                <span className="progress-description">
                        {this.state.percent}%
                    </span> */}
                </div>

     </div>
             
         </div> 
        
        
        
        
        
        
       
    }
}
export default Card