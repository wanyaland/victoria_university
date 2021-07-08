import React, { Component } from 'react';

class CalculatorFees extends Component {
    dropCal() {
        var modal = document.getElementById("cal-myModal");
        modal.style.display = "none";
      }
    render(){
        return(
            <React.Fragment>
<div id="cal-myModal" class="cal-modal">
<div class="cal-content">
  <span class="cal-close" onClick={this.dropCal}>&times;</span>
  <h1>Fees Calculator</h1>
  <p>Fees calculator coming soon...</p>
</div>

</div>
            </React.Fragment>
        )
    }
}

export default CalculatorFees;