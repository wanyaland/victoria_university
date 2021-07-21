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
  view_stud = (stud) => {
    const progData = Data;
    var locRegfee = "50,000";
    var intRegfee = "16";
    var locProfee = "160,000"
    var intProfee = "51"
    //var reset = document.getElementById('reseter');
    var program = document.getElementById("prog_item").value;
    
    var studSelect = document.getElementById(stud).value;
    if(program === '' || studSelect === ''){
      document.getElementById('status').innerHTML = "Please programme and student type";
    } else {
      //reset.style.display = "block";
      document.getElementById("res_chk").style.display = "block"
      document.getElementById("prog").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Program:</b> "+ progData[program].program +"</p>";
      document.getElementById("stud").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Student Type:</b> "+ studSelect +"</p>";
      if(studSelect === "Local"){
        if(progData[program].level === "Professional Development"){
          document.getElementById("regfee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Application Fee: UGX </b> 0</p>";
          document.getElementById("profee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Registration Fee: UGX </b> 0</p>";
          document.getElementById("funcfee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Functional Fee: UGX </b> 0</p>";
          document.getElementById("fee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: UGX </b> "+ progData[program].local_price +"</p>";
        } else {
        document.getElementById("regfee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Application Fee: UGX </b> "+ locRegfee +"</p>";
        document.getElementById("profee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Registration Fee: UGX </b> "+ locProfee +"</p>";
        document.getElementById("funcfee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Functional Fee: UGX </b> "+ progData[program].local_func_fee +"</p>";
        document.getElementById("fee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: UGX </b> "+ progData[program].local_price +"</p>";
        }
      } else {
        
        if(progData[program].level === "Professional Development"){
          document.getElementById("regfee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Application Fee: USD </b> 0</p>";
          document.getElementById("profee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Registration Fee: USD </b> 0</p>";
          document.getElementById("funcfee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Functional Fee: USD </b> 0</p>";
          document.getElementById("fee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: UGX </b> "+ progData[program].local_price +"</p>";
        } else {
          document.getElementById("regfee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Application Fee: USD </b> "+ intRegfee +"</p>";
          document.getElementById("profee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Registration Fee: USD </b> "+ intProfee +"</p>";
          document.getElementById("funcfee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Functional Fee: USD </b> "+ progData[program].int_func_fee +"</p>";
          document.getElementById("fee").innerHTML = "<p className='my-4'><b style='font-weight: 600;'>Tuition: USD </b> "+ progData[program].int_price +"</p>";
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
                    <span href="tune" className="cal-btn">Start Over</spa>&nbsp;
                  </p> */}
                  <p  style={{padding: '5px'}}>
                    <a href="#item1" className="cal-btn">Step 1: Choose Program</a>&nbsp;
                    <a href="#item2" className="cal-btn">Step 2: Nationality</a>&nbsp;
                  </p>

                  <div class="items">
                    <section id="item1">
                      <p className="my-1" style={{fontSize: '18px'}}>Please select Programme</p>
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
                    </section>
                    <section id="item2">
                      <div className="row_form" style={{marginBottom: '5px'}}>
                        <div className="col-75">
                          <table style={{width: '100%', height: '100%'}}>
                            <tr>
                              <td className="text-left" style={{backgroundColor: '#EEE', textAlign: 'center', color: '#444', padding: '10px', width: '100%', border: '#777 1px solid'}}>Are you a Ugandan?</td>
                            </tr>
                            <tr>
                              <td className="text-left" style={{backgroundColor: '#FFF', textAlign: 'center', color: '#444', padding: '10px', width: '100%', border: '#777 1px solid'}}>
                                <input type="radio" id="local" name="fav_language" value="Local" onChange={this.view_stud.bind(this, "local")}/>
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
                    <p id="prog" className="my-1" style={{fontSize: '13px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
                    <p id="stud" className="my-1" style={{fontSize: '13px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
                    <p id="regfee" className="my-1" style={{fontSize: '13px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
                    <p id="profee" className="my-1" style={{fontSize: '13px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
                    <p id="funcfee" className="my-1" style={{fontSize: '13px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
                    <p id="fee" className="my-1" style={{fontSize: '13px', borderBottom: '#888 1px solid', padding: '0 5px 0 5px'}}></p>
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