import React, { Component } from 'react';
import Data from './data/courses.json';


class CalculatorFees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: []
    }
  }
  refreshPage() {
    window.location.reload(false);
  }
  dropCal() {
    var modal = document.getElementById("cal-myModal");
    modal.style.display = "none";
  }
  view_stud = (stud) => {
    const progData = Data;
    var res_chk = document.getElementById("res_chk")
    var progr = document.getElementById("prog")
    var stude = document.getElementById("stud")
    var regfee = document.getElementById("regfee")
    var profee = document.getElementById("profee")
    var funcfee = document.getElementById("funcfee")
    var fee = document.getElementById("fee")
    var locRegfee = "50,000";
    var intRegfee = "16";
    var locProfee = "160,000"
    var intProfee = "51"
    //var reset = document.getElementById('reseter');
    var program = document.getElementById("prog_item").value;
    var year = document.getElementById("year").value
    var semester = document.getElementById("semester").value
    var studSelect = document.getElementById(stud).value;
    var reg_status = document.getElementById('reg_status').value
    if(program === '' || year === '' || semester === '' || studSelect === ''){
      document.getElementById('status').innerHTML = "Please select all information";
    } else {
     // reset.style.display = "block";
      res_chk.style.display = "block"
      progr.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Program:</b> "+ progData[program].program +"</p>";
      stude.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Nationality:</b> "+ studSelect +"</p>";
      if(studSelect === "Ugandan"){
        if(progData[program].level === "Professional Development"){
          regfee.style.display = "none";
          profee.style.display = "none";
          funcfee.style.display = "none";
          fee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: UGX </b> "+ progData[program].local_price +" (Paid once)</p>";
        } else {
          if(semester === 'First' && reg_status === 'No'){
            regfee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Application Fee: UGX </b> "+ locRegfee +" (Paid once)</p>";
            profee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Registration Fee: UGX </b> "+ locProfee +" (Paid once)</p>";
            funcfee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Functional Fee: UGX </b> "+ progData[program].local_func_fee +" (Paid in every first semester per year)</p>";
            fee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: UGX </b> "+ progData[program].local_price +" (Paid per semester)</p>";
          } else {
            regfee.style.display = "none";
            profee.style.display = "none";
            funcfee.style.display = "none";
            fee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: UGX </b> "+ progData[program].local_price +" (Paid per semester)</p>";
          }
        }
      } else {
        
        if(progData[program].level === "Professional Development"){
          regfee.style.display = "none";
            profee.style.display = "none";
            funcfee.style.display = "none";
          fee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: UGX </b> "+ progData[program].local_price +" (Paid per semester)</p>";
        } else {
          if(semester === 'First' === "No"){
            regfee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Application Fee: USD </b> "+ intRegfee +" (Paid once)</p>";
            profee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Registration Fee: USD </b> "+ intProfee +" (Paid once)</p>";
            funcfee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Functional Fee: USD </b> "+ progData[program].int_func_fee +" (Paid in every first semester per year)</p>";
            fee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: USD </b> "+ progData[program].int_price +" (Paid per semester)</p>";
          } else{
            regfee.style.display = "none";
            profee.style.display = "none";
            funcfee.style.display = "none";
            fee.innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: USD </b> "+ progData[program].int_price +" (Paid per semester)</p>";
          }
        }
      }
    }
  }
  /* reseter = () => {
    var reset = document.getElementById('reseter');
    var program = document.getElementById("prog_item")
    var studL = document.getElementById("local")
    var studI = document.getElementById("int")
    var prog = document.getElementById("prog")
    var stud = document.getElementById("stud")
    var regfee = document.getElementById("regfee")
    var fee = document.getElementById("fee")
    var res_chk = document.getElementById("res_chk")

    program.value = ""
    studL.value = ""
    studI.value = ""
    prog.innerHTML = ""
    stud.innerHTML = ""
    regfee.innerHTML = ""
    fee.innerHTML = ""
    res_chk.style.display = "none"
    reset.style.display = "none"
  } */
  render(){
        return(
          <React.Fragment>
            <div id="cal-myModal" class="cal-modal">
              <div class="cal-content">
                <div className="features-1-info col-lg-12 col-md-12" style={{height: '50px', width: '100%', padding: '0', marginBottom: '40px'}}>
                  <table style={{width: '100%', height: '100%'}}>
                    <tr>
                      <td className="text-left" style={{backgroundColor: '#FFF', textAlign: 'center', color: '#444', paddingLeft: '10px', fontSize: '28px', width: '90%'}}>Course Fee Calculator</td><td style={{backgroundColor: '#FFF', textAlign: 'center', paddingLeft: '10px', fontSize: '28px'}}><span class="cal-close" onClick={this.dropCal} style={{color: '#444'}}>&times;</span></td>
                    </tr>
                  </table>
                  <div className="container_form">
                  {/*  */}
                  <p className="my-1" style={{fontSize: '15px'}}>
                  Use this calculator to determine the fees for an undergraduate course. If you have trouble using this calculator, please check out the <a href="/tuition-fees#trackdoc" className="underline" style={{fontWeight: '500'}}>tuition and fees documentation.<span className="fa fa-external-link"></span></a>
                  </p>
                  
                  <hr />
                  {/*  */}
                  {/* <p id="reseter" style={{padding: '5px'}}>
                    <span href="tune" className="cal-btn" onClick={this.refreshPage}>Start Over</span>&nbsp;
                  </p> */}
                  <div  style={{padding: '5px',display: 'flex'}}>
                    <a href="#item1" className="cal-btn">Step 1: Choose Program</a>&nbsp;
                    <a href="#item2" className="cal-btn">Step 2: Student Status</a>&nbsp;
                    <a href="#item3" className="cal-btn">Step 3: Nationality</a>&nbsp;
                  </div>

                  <div class="items">
                    <section id="item1">
                      <p className="my-1" style={{fontSize: '15px'}}>Please select Programme</p>
                      <div className="row_form" style={{marginBottom: '5px'}}>
                        <div className="col-75">
                          <select className="form_fields" id="prog_item" style={{padding: '10px'}}>
                            <option></option>
                            { Data.map(prog => {
                              return(
                                <option value={prog.id}>{prog.program}</option>
                              )
                            }) }
                          </select>
                        </div>
                      </div>
                      <p className="my-1" style={{fontSize: '15px'}}>Please select year</p>
                      <div className="row_form" style={{marginBottom: '5px'}}>
                        <div className="col-75">
                          <select className="form_fields" id="year" style={{padding: '10px'}}>
                            <option></option>
                            <option>First</option>
                            <option>Second</option>
                            <option>Third</option>
                          </select>
                        </div>
                      </div>
                      <p className="my-1" style={{fontSize: '18px'}}>Please select semester</p>
                      <div className="row_form" style={{marginBottom: '5px'}}>
                        <div className="col-75">
                          <select className="form_fields" id="semester" style={{padding: '10px'}}>
                            <option></option>
                            <option>First</option>
                            <option>Second</option>
                          </select>
                        </div>
                      </div>
                    </section>
                    <section id="item2">
                      <p className="my-1" style={{fontSize: '15px'}}>Are you a registration student</p>
                      <div className="row_form" style={{marginBottom: '5px'}}>
                        <div className="col-75">
                          <select className="form_fields" id="reg_status" style={{padding: '10px'}}>
                            <option></option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                    </section>
                    <section id="item3">
                      <div className="row_form" style={{marginBottom: '5px'}}>
                        <div className="col-75">
                          <table style={{width: '100%', height: '100%'}}>
                            <tr>
                              <td className="text-left" style={{backgroundColor: '#EEE', textAlign: 'center', color: '#444', padding: '10px', width: '100%', border: '#777 1px solid'}}>Are you a Ugandan?</td>
                            </tr>
                            <tr>
                              <td className="text-left" style={{backgroundColor: '#FFF', textAlign: 'center', color: '#444', padding: '10px', width: '100%', border: '#777 1px solid'}}>
                                <input type="radio" id="local" name="fav_language" value="Ugandan" onChange={this.view_stud.bind(this, "local")}/>
                                <span for="Local">Yes</span><br/>
                                <input type="radio" id="int" name="fav_language" value="International" onChange={this.view_stud.bind(this, "int")}/>
                                <span for="International">No</span>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <p id="status" style={{color: 'red', fontWeight: '600'}}></p>
                    </section>
                  </div>
                  <div id="res_chk" className="res_out">
                    <p id="prog" className="my-1" style={{fontSize: '12px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
                    <p id="stud" className="my-1" style={{fontSize: '12px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
                    <p id="regfee" className="my-1" style={{fontSize: '12px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
                    <p id="profee" className="my-1" style={{fontSize: '12px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
                    <p id="funcfee" className="my-1" style={{fontSize: '12px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
                    <p id="fee" className="my-1" style={{fontSize: '12px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
  
          </React.Fragment>
        )
    }
}

export default CalculatorFees;