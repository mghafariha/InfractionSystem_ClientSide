
import React from 'react';
import { Route } from 'react-router-dom';
import DataTable from '../../Forms/underWater/DataGrid';
import UnderWaterNew from '../../Forms/underWater/new';
import Report from '../../Forms/Report'
import HighChart from '../../Forms/Report/Components/HighChart'
//import 'moment/locale/fa';
import Home from '../../Home';
import {AbForoushi,Ezafe,AdamNasb,Mansubat,EnteghalAb,KafShekani,TaghirKarbari,AdamTamdid,TaghirMahal,AbShirin,Plumb,Masloub} from '../../Forms/underWater/fields';
import {EzafeReport,AllViolationReport,AllViolationParameters} from '../../Forms/Report/fields';
// import Profile from '../../Forms/Well/Profile';
// import Visit from '../../Forms/Well/Visit';
// import VisitWithoutProfile from '../../Forms/Well/VisitWithoutProfile';
// import Home from '../../Home';
// import Violation from '../../Forms/Well/Violation';

class Content extends React.Component {
    constructor(props){
        super(props);  
    }
    
    render(){
    
        return (
            
            <div className="content-wrapper">
             
                <section className="content">
                    
                        <div className="col-md-12">
                       
                            <div className="box">
                                
                                <div className="box-body">
                         
                                                    <Route path="/DataTableAbForoushi" component={() => <DataTable type='آب فروشی' fields={AbForoushi} table='AllowedViolations' infractionType='AbForoushi' lastStep='Document' cardInfo={[{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'},{displayTitle:'دستور قضایی',value:4,percent:'30%',className:'info-box bg-green',accessor:'Dastur'},{displayTitle:'صورتجلسه پلمپ چاه',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'plomp'}]} />} />
                                                    <Route path="/DataTableEzafeh" component={() => <DataTable type='اضافه برداشت' fields={Ezafe} table='AllowedViolations'  infractionType='Ezafe' lastStep='Document'  cardInfo={[{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'},{displayTitle:'دستور قضایی',value:4,percent:'30%',className:'info-box bg-green',accessor:'Dastur'},{displayTitle:'صورتجلسه پلمپ چاه',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'plomp'},{displayTitle:'صورتحساب',value:4,percent:'30%',className:'info-box bg-aqua',accessor:'Bill'}]}  />} />
                                                    <Route path="/DataTableAdamNasb" component={() => <DataTable type='عدم نصب کنتور' fields={AdamNasb} table='AllowedViolations'  infractionType='AdamNasb' lastStep='Document' cardInfo={[{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'},{displayTitle:'دستور قضایی',value:4,percent:'30%',className:'info-box bg-green',accessor:'Dastur'},{displayTitle:'صورتجلسه پلمپ چاه',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'plomp'},{displayTitle:'صورتجلسه نصب کنتور',value:4,percent:'30%',className:'info-box bg-aqua',accessor:'Install'}]} />} />
                                                    <Route path="/DataTableMansubat" component={() => <DataTable type='منصوبات' fields={Mansubat} table='AllowedViolations'  infractionType='Mansubat' lastStep='Document' cardInfo={[{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'},{displayTitle:'دستور قضایی',value:4,percent:'30%',className:'info-box bg-green',accessor:'Dastur'},{displayTitle:'صورتجلسه پلمپ چاه',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'plomp'},{displayTitle:'صورتجلسه جمع آوری منصوبات',value:4,percent:'30%',className:'info-box bg-aqua',accessor:'Collect'}]} />} />
                                                    <Route path="/DataTableEnteghalAb" component={() => <DataTable type='انتقال آب' fields={EnteghalAb} table='AllowedViolations'  infractionType='EnteghalAb' lastStep='Document' cardInfo={[{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'},{displayTitle:'دستور قضایی',value:4,percent:'30%',className:'info-box bg-green',accessor:'Dastur'},{displayTitle:'صورتجلسه پلمپ چاه',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'plomp'},{displayTitle:'صورتجلسه جمع آوری یا تخریب خط انتقال',value:4,percent:'30%',className:'info-box bg-aqua',accessor:'Destruction'}]} />} />
                                                    <Route path="/DataTableKafShekani" component={() => <DataTable type='کف شکنی' fields={KafShekani}  table='AllowedViolations'  infractionType='KafShekani' lastStep='Document' cardInfo={[{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'},{displayTitle:'دستور قضایی',value:4,percent:'30%',className:'info-box bg-green',accessor:'Dastur'},{displayTitle:'صورتجلسه پلمپ چاه',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'plomp'}]} />} />
                                                    <Route path="/DataTableTaghirKarbari" component={() => <DataTable type='تغییر کاربری' fields={TaghirKarbari} table='AllowedViolations'  infractionType='TaghirKarbari' lastStep='Document' cardInfo={[{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'},{displayTitle:'دستور قضایی',value:4,percent:'30%',className:'info-box bg-green',accessor:'Dastur'},{displayTitle:'صورتجلسه پلمپ چاه',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'plomp'}]}/>} />
                                                    <Route path="/DataTableAdamTamdid" component={() => <DataTable type='عدم تمدید' fields={AdamTamdid} table='AllowedViolations'  infractionType='AdamTamdid'  lastStep='Document' cardInfo={[{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'},{displayTitle:'دستور قضایی',value:4,percent:'30%',className:'info-box bg-green',accessor:'Dastur'},{displayTitle:'صورتجلسه پلمپ چاه',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'plomp'}]}/>  }/>
                                                    <Route path="/DataTableTaghirMahal" component={() => <DataTable type='تغییر محل' fields={TaghirMahal} table='AllowedViolations'  infractionType='TaghirMahal' lastStep='Document'  cardInfo={[{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'},{displayTitle:'دستور قضایی',value:4,percent:'30%',className:'info-box bg-green',accessor:'Dastur'},{displayTitle:'صورتجلسه پلمپ چاه',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'plomp'}]}/>} />
                                                    <Route path="/DataTableAbShirin" component={() => <DataTable type='آب شیرین کن' fields={AbShirin} table='AllowedViolations'  infractionType='AbShirin' lastStep='Document' cardInfo={[{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'},{displayTitle:'دستور قضایی',value:4,percent:'30%',className:'info-box bg-green',accessor:'Dastur'},{displayTitle:'صورتجلسه پلمپ چاه',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'plomp'}]}/>  }/>
                                                    
                                                    <Route path="/DataGridPlumb" component={()=><DataTable type='پلمپ' fields={Plumb} table='NotAllowedViolations' infractionType='Plumb'   lastStep='Document' cardInfo={[{displayTitle:'شکواییه و دستور قضایی',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'OrderPlumb'},{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-green',accessor:'DocumentViolation'},{displayTitle:'مستندات پلمپ منصوبات چاه',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'}]}/>  }/>
                                                    <Route path="/DataTableMasloub" component={()=><DataTable type='پر و مسلوب المنفعه بودن' fields={Masloub} table='NotAllowedViolations' infractionType='Masloub' lastStep='FullDocument' cardInfo={[{displayTitle:'شکواییه و دستور قضایی',value:4,percent:'30%',className:'info-box bg-yellow',accessor:'OrderPlumb'},{displayTitle:'مستند رفع تخلف یا نامه کتبی امور',value:4,percent:'30%',className:'info-box bg-green',accessor:'DocumentViolation'},{displayTitle:'مستندات پلمپ منصوبات چاه',value:4,percent:'30%',className:'info-box bg-red',accessor:'Document'},{displayTitle:'صورتجلسه پرو مسلوب و...',value:4,percent:'30%',className:'info-box bg-aqua',accessor:'FullDocument'}]} />  }/>
                                                    <Route path="/UnderWaterNew" component={UnderWaterNew}  />
                                                    <Route path="/ReportEzafe" component={()=><Report ReportName='EzafehBardasht' fields={EzafeReport} displayName='گزارش اضافه برداشت'  />}  />
                                                    <Route path="/ReportInfraction" component={()=><Report ReportName='AllViolation' fields={AllViolationReport}  parameters={AllViolationParameters}  displayName='خلاصه گزارش تخلفات'/>} />
                                                    <Route path="/HighChart" component={()=><HighChart ReportName='ViolationChart' parameters={AllViolationParameters} />} />
                                                    <Route path="/" exact={true} component={Home} />
                                        </div>
                                    </div>
                                </div>
                </section>
              
            </div>
        )
    }
}
export default Content