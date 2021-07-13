import React, { Component } from 'react';

class PayPop extends Component{
    dropPay(){
        var modal = document.getElementById("pay-myModal");
        modal.style.display = "none";
    }
    render(){
        return(
            <React.Fragment>
                <div id="pay-myModal" class="pay-modal">
                    <div class="pay-modal-content">
                        <span class="pay-close" onClick={this.dropPay}>&times;</span>
                        <p className="my-4" style={{fontSize: '18px'}}>Please select payment method</p>
                        <div className="text-center" style={{display: 'flex', alignItems: 'center'}}>
                            <a href="https://payments.pesapal.com/victoriauniversity" className="pay-btn">PesaPal</a>&nbsp;
                            <a href="https://eportal.vu.ac.ug/cooperp/mobile/cardpay.aspx" className="pay-btn">GTPay</a>&nbsp;
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PayPop;