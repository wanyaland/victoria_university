import React, { Component } from 'react';
import Data from './data/courses.json';


class CalculatorFees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: []
    }
  }
  dropCal() {
    var modal = document.getElementById("cal-myModal");
    modal.style.display = "none";
  }
  view_stud = () => {
    const progData = Data;
    var locRegfee = "50,000";
    var intRegfee = "16";
    var program = document.getElementById("prog_item").value;
    var studSelect = document.getElementById("stud_chk").value;
    if(program === '' || studSelect === ''){
      document.getElementById('status').innerHTML = "Please programme and student type";
    } else {
      document.getElementById("prog").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Program:</b> "+ progData[program].program +"</p>";
      document.getElementById("stud").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Student Type:</b> "+ studSelect +"</p>";
      if(studSelect === "Local"){
        document.getElementById("regfee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Registration Fees: UGX </b> "+ locRegfee +"</p>";
        document.getElementById("fee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: UGX </b> "+ progData[program].local_price +"</p>";
      } else {
        document.getElementById("regfee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Registration Fees: USD </b> "+ intRegfee +"</p>";
        document.getElementById("fee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: USD </b> "+ progData[program].int_price +"</p>";
      }
    }
  }
  render(){
        return(
          <React.Fragment>
            <div id="cal-myModal" class="cal-modal">
              <div class="cal-content">
                <div className="features-1-info col-lg-12 col-md-12" style={{height: '50px', width: '100%', padding: '0', marginBottom: '40px'}}>
                  <table style={{width: '100%', height: '100%'}}>
                    <tr>
                      <td className="text-center" style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px', width: '90%'}}>Course Fee Calculator</td><td style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px'}}><span class="cal-close" onClick={this.dropCal}>&times;</span></td>
                    </tr>
                  </table>
                  <div className="container_form">
                  {/*  */}
                  <p className="my-1" style={{fontSize: '15px'}}>
                  Use this calculator to determine the fees for an undergraduate course. If you have trouble using this calculator, please check out the <a href="/tuition-fees#trackdoc" className="underline">tuition and fees documentation.<span className="fa fa-external-link"></span></a>
                  </p>
                  <br/>
                  {/*  */}
                  <p className="my-1" style={{fontSize: '18px'}}>Please select Programme</p>
                    <form action="/action_page.php">
                      <div className="row_form" style={{marginBottom: '5px'}}>
                        <div className="col-75">
                          <select className="form_fields" id="prog_item" style={{padding: '10px'}}>
                            {/* <option></option> */}
                            { Data.map(prog => {
                              return(
                                <option value={prog.id}>{prog.program}</option>
                              )
                            }) }
                          </select>
                        </div>
                      </div>
                      <div className="row_form" style={{marginBottom: '5px'}}>
                        <div className="col-75">
                          <p className="text-left my-1" style={{fontSize:'18px'}}>Residence</p>
                          <select id="stud_chk" className="form_fields" onChange={this.view_stud} style={{padding: '10px'}}>
                            <option></option>
                            <option value="Local">Local Student</option>
                            <option value="International">International Student</option>
                          </select>
                        </div>
                      </div>
                      <p id="status" style={{color: 'red', fontWeight: '600'}}></p>
                    </form>
                    <p id="prog" className="my-1" style={{fontSize: '15px'}}></p>
                    <p id="stud" className="my-1" style={{fontSize: '15px'}}></p>
                    <p id="regfee" className="my-1" style={{fontSize: '15px'}}></p>
                    <p id="fee" className="my-4" style={{fontSize: '15px'}}></p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
    }
}

export default CalculatorFees;