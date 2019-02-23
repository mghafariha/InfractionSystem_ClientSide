
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
        super();  
    }
    
    render(){
        
        
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    {/* <h3 className="box-title">Monthly Recap Report</h3> */}
                                </div>
                                <div className="box-body">
                                
                                    <div className="row">
                                        <div className="col-md-10">
                         
                                                    <Route path="/DataTableAbForoushi" component={() => <DataTable type='آب فروشی' fields={AbForoushi} table='AllowedViolations' infractionType='AbForoushi' lastStep='DocumentAF' />} />
                                                    <Route path="/DataTableEzafeh" component={() => <DataTable type='اضافه برداشت' fields={Ezafe} table='AllowedViolations'  infractionType='Ezafe' lastStep='DocumentE'  />} />
                                                    <Route path="/DataTableAdamNasb" component={() => <DataTable type='عدم نصب' fields={AdamNasb} table='AllowedViolations'  infractionType='AdamNasb' lastStep='DocumentA' />} />
                                                    <Route path="/DataTableMansubat" component={() => <DataTable type='منصوبات' fields={Mansubat} table='AllowedViolations'  infractionType='Mansubat' lastStep='DocumentM' />} />
                                                    <Route path="/DataTableEnteghalAb" component={() => <DataTable type='انتقال آب' fields={EnteghalAb} table='AllowedViolations'  infractionType='EnteghalAb' lastStep='DocumentEn' />} />
                                                    <Route path="/DataTableKafShekani" component={() => <DataTable type='کف شکنی' fields={KafShekani}  table='AllowedViolations'  infractionType='KafShekani' lastStep='DocumentK'  />} />
                                                    <Route path="/DataTableTaghirKarbari" component={() => <DataTable type='تغییر کاربری' fields={TaghirKarbari} table='AllowedViolations'  infractionType='TaghirKarbari' lastStep='DocumentTK' />} />
                                                    <Route path="/DataTableAdamTamdid" component={() => <DataTable type='عدم تمدید' fields={AdamTamdid} table='AllowedViolations'  infractionType='AdamTamdid'  lastStep='DocumentAT' />  }/>
                                                    <Route path="/DataTableTaghirMahal" component={() => <DataTable type='تغییر محل' fields={TaghirMahal} table='AllowedViolations'  infractionType='TaghirMahal' lastStep='DocumentTM'  />} />
                                                    <Route path="/DataTableAbShirin" component={() => <DataTable type='آب شیرین کن' fields={AbShirin} table='AllowedViolations'  infractionType='AbShirin' lastStep='DocumentAbShirin' />  }/>
                                                    
                                                    <Route path="/DataGridPlumb" component={()=><DataTable type='پلمپ' fields={Plumb} table='NotAllowedViolations' infractionType='Plumb'   lastStep='DocumentP'/>  }/>
                                                    <Route path="/DataTableMasloub" component={()=><DataTable type='پر و مسلوب المنفعه بودن' fields={Masloub} table='NotAllowedViolations' infractionType='Masloub' lastStep='FullDocumentM'  />  }/>
                                                    <Route path="/UnderWaterNew" component={UnderWaterNew}  />
                                                    <Route path="/ReportEzafe" component={()=><Report ReportName='EzafehBardasht' fields={EzafeReport}  />}  />
                                                    <Route path="/ReportInfraction" component={()=><Report ReportName='AllViolation' fields={AllViolationReport}  parameters={AllViolationParameters} />} />
                                                    <Route path="/HighChart" component={()=><HighChart ReportName='ViolationChart' parameters={AllViolationParameters} />} />
                                                    <Route path="/Home" component={Home} />
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
        )
    }
}
export default Content