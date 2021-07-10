import React, { Component } from 'react';

class CalculatorFees extends Component {
    dropCal() {
        var modal = document.getElementById("cal-myModal");
        modal.style.display = "none";
      }
    view_fee(){
      var x = document.getElementById("prog_item").value;
      document.getElementById("output").innerHTML = "Total Fees: UGX " + x;
    }
    render(){
        return(
<React.Fragment>
  <div id="cal-myModal" class="cal-modal">
    <div class="cal-content">
      <div className="features-1-info col-lg-12 col-md-12" style={{height: '70px', width: '100%', padding: '0', marginBottom: '40px'}}>
        <table style={{width: '100%', height: '100%'}}>
          <tr>
            <td className="text-center" style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px', width: '90%'}}>Fees Calculator</td><td style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px'}}><span class="cal-close" onClick={this.dropCal}>&times;</span></td>
          </tr>
        </table>
        <div className="container_form">
        <p className="my-4">Please select Programme</p>
          <form action="/action_page.php">
            <div className="row_form">
              <div className="col-75">
                <select className="form_fields" id="prog_item" onChange={this.view_fee} placeholder="">
                    <option></option>
                    <option value="1,608,500">Master of Business Administration (MBA Generic)</option>
                    <option value="1,608,500">Master of Business Administration (MBA Accounting and Finance)</option>
                    <option value="1,608,500">Master of Business Administration (MBA Human Resource Management )</option>
                    <option value="1,608,500">Master of Business Administration (MBA Marketing )</option>
                    <option value="1,608,500">Master of Business Administration (MBA Real Estate and Propoerty Management )</option>
                    <option value="1,608,500">Masters of Monitoring & Evaluation</option>
                    <option value="1,608,500">Master of Science in Information Technology</option>
                    <option value="1,608,500">Master of Science in Big Data Analytics</option>
                    <option value="1,608,500">Master of Science in Global Health Nutrition (Full-Time)</option>
                    <option value="1,608,500">Master of Science in Global Health Nutrition (Part-Time)</option>
                    <option value="1,608,500">Master of Science in Public Health (Full-Time)</option>
                    <option value="1,608,500">Master of Science in Public Health (Part-Time)</option>
                    <option value="1,608,500">Masters of Science in Sexual and Reproductive Health</option>
                    <option value="1,608,500">Masters of Science in Health Service Management</option>
                    <option value="1,608,500">Master of Arts in Public Administration and Management (MA-PAM)</option>
                    <option value="1,608,500">Masters of Arts in Mass Communication</option>
                    <option value="1,608,500">Masters in Diplomacy and Global Studies</option>
                    <option value="1,608,500">Masters of Education (M.Ed) in Advanced Teaching (Full-Time)</option>
                    <option value="1,608,500">Masters of Education (M.Ed) in Advanced Teaching (Part-Time)</option>
                    <option value="1,608,500">Masters of Educational Administration and leadership and Management</option>
                    <option value="1,608,500">Post Graduate Diploma Monitoring $ Evaluation</option>
                    <option value="1,608,500">Post Graduate Diploma in Nutrition and Leadership</option>
                    <option value="1,608,500">Post Graduate Diploma in Human Nutrition (Course Work)</option>
                    <option value="1,608,500">Post Graduate Diploma + Masters in Human Nutrition (Course work + Research)</option>
                    <option value="1,608,500">Bachelor of Business Administration</option>
                    <option value="1,608,500">Bachelor of Business Administration (Real Estate and Property Management)</option>
                    <option value="1,608,500">Bachelor od Science in Banking and Finance</option>
                    <option value="1,608,500">Bachelor of Procurement & Logistics Management</option>
                    <option value="1,608,500">Bachelor of Tourism and Hopitality Management</option>
                    <option value="1,608,500">Bachelor of International Business</option>
                    <option value="1,608,500">Bachelor of Science in Oil and Gas Accounting</option>
                    <option value="1,608,500">Bachelor of Arts in Human Resource Management</option>
                    <option value="1,608,500">Bachelor of Hotel and Hospitality Management</option>
                    <option value="1,608,500">Bachelor of Tourism Management</option>
                    <option value="1,608,500">Bachelor of Events Management</option>
                    <option value="1,608,500">Bachelor of Science in Computer Science</option>
                    <option value="1,608,500">Bachelor of Business Information Systems</option>
                    <option value="1,608,500">Bachelor of Information Technology</option>
                    <option value="1,608,500">Bachelor of Art & Industrial Design</option>
                    <option value="1,608,500">Bachelor Agriculture & Rural Innovation</option>
                    <option value="1,608,500">Bachelor of Science in Animation and Visual Effects</option>
                    <option value="1,608,500">Bachelor of Science in Public Health (Full-Time)</option>
                    <option value="1,608,500">Bachelor of Science in Public Health (Part-Time)</option>
                    <option value="1,608,500">Bachelor of Midwifrey Science (TOP-UP)</option>
                    <option value="1,608,500">Bachelor of Nursing Science (DIRECT)</option>
                    <option value="1,608,500">Bachelor of Nursing Science (TOP-UP)</option>
                    <option value="1,608,500">Bachelor of Science in Human Nutrition and Dietetics</option>
                    <option value="1,608,500">Bachelor of Public Administration & Management</option>
                    <option value="1,608,500">Bachelor of Social work and Social Administration</option>
                    <option value="1,608,500">Bachelor of Arts in Journalism and Media Studies</option>
                    <option value="1,608,500">Bachelor of Development Studies</option>
                    <option value="1,608,500">Bachelor of Arts in International Relations & Diplomatic Studies</option>
                    <option value="1,608,500">Bachelor of Arts in Education (BA. Ed)</option>
                    <option value="1,608,500">Bachelor of Science in Education (BSC. Ed)</option>
                    <option value="1,608,500">Bachelor of Education (BEd) - In-Service</option>
                    <option value="1,608,500">Bachelor of Laws</option>
                    <option value="1,608,500">Bachelors of Criminal Justice and Law Enforcement</option>
                    <option value="1,608,500">Diploma in Procurement & Logistics Management</option>
                    <option value="1,608,500">Diploma in Banking and Finanace</option>
                    <option value="1,608,500">Diploma In Business and Administration</option>
                    <option value="1,608,500">Diploma in Tourism and Hopitality Management</option>
                    <option value="1,608,500">Diploma in Human Resource Management</option>
                    <option value="1,608,500">Diploma in Real Estate and Property Management</option>
                    <option value="1,608,500">Diploma in Events and Management</option>
                    <option value="1,608,500">Diploma in Tourism Management</option>
                    <option value="1,608,500">Diploma in Hotel and Hospitality</option>
                    <option value="1,608,500">Diploma in Information Technology</option>
                    <option value="1,608,500">Diploma in Social work and Social Administration</option>
                    <option value="1,608,500">Diploma in International Relations & Diplomatic Studies</option>
                    <option value="1,608,500">Diploma in Journalism and Media Studies</option>
                    <option value="1,608,500">Higher Education Certificate (HEC) in Biological Science</option>
                    <option value="1,608,500">Higher Education Certificate (HEC) - General</option>
                    <option value="1,608,500">Digital Marketing and Social Media Specialist</option>
                    <option value="1,608,500">Entrepreneurial Development Studies</option>
                    <option value="1,608,500">Export Trade Promotion</option>
                    <option value="1,608,500">Sustainable Microfinance</option>
                    <option value="1,608,500">Introduction to Oil and Gas Industry</option>
                    <option value="1,608,500">Oil and Gas Supply Chain and Logistics Management</option>
                    <option value="1,608,500">Oil and Gas Project Management</option>
                    <option value="1,608,500">Health, Safety and Environmental Management in the Oil and Gas Industry</option>
                    <option value="1,608,500">House Keeping in the Hospitality Industry</option>
                    <option value="1,608,500">Customer Service in the Hospitality Industry</option>
                    <option value="1,608,500">Front Office Management in the Hospitality Industry</option>
                    <option value="1,608,500">Chartered Institute of Logistics and Transport (CILT)</option>
                    <option value="1,608,500">CISCO-CCNA</option>
                    <option value="1,608,500">Cisco-IT Essentials</option>
                    <option value="1,608,500">Basic Computer Applications</option>
                    <option value="1,608,500">CCTV Controller</option>
                    <option value="1,608,500">Cyber Security Essentials</option>
                    <option value="1,608,500">PCAP Programming Essentials in Python</option>
                    <option value="1,608,500">CCNA Security</option>
                    <option value="1,608,500">Artificial Intelligence with Python</option>
                    <option value="1,608,500">Comprehensive Management of STI’s, HIV</option>
                    <option value="1,608,500">First Aid</option>
                    <option value="1,608,500">Resource Mobilisation and Project ProposalWriting for Health workers</option>
                    <option value="1,608,500">SPSS - Statistical Package For Social Sciences</option>
                    <option value="1,608,500">Public Health Nutrition</option>
                    <option value="1,608,500">Presentation and Public Speaking</option>
                    <option value="1,608,500">Coaching aand Mentoring</option>
                    <option value="1,608,500">Graphics Designing</option>
                    <option value="1,608,500">Filmmaking (Video/Audio production/Editing)</option>
                    <option value="1,608,500">Radio Production</option>
                    <option value="1,608,500">English Language (Beginner, Intermediate and Advanced)</option>
                </select>
              </div>
            </div>
          </form>
          <p id="output" className="my-4"></p>
        </div>
      </div>
    </div>
  </div>
</React.Fragment>
        )
    }
}

export default CalculatorFees;