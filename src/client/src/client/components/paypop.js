import React, { Component } from 'react';

class PayPop extends Component{
    dropPay(){
        var modal = document.getElementById("pay-myModal");
        modal.style.display = "none";
    }
    toPesa = () => {
        window.location.href = "https://payments.pesapal.com/victoriauniversity"
    }
    toGTpay = () => {
        window.location.href = "https://eportal.vu.ac.ug/cooperp/mobile/cardpay.aspx"
    }
    render(){
        return(
            <React.Fragment>
                
                <section className="w3l-specification-6 pay-modal" id="pay-myModal">
                    <div className="specification-content py-5 pay-modal-content">
                        <div className="container py-lg-5">
                            <span className="pay-close" onClick={this.dropPay}>&times;</span>
                            <p className="my-4" style={{fontSize: '18px'}}>Please select payment method</p>
                            <div className="mission-grids-info row">
                                <div className="mission-gd-right col-lg-6 pl-lg-4">
                                    <button onClick={this.toPesa} className="pay-btn" title="PesaPal">PesaPal</button>&nbsp;
                                </div>
                                <div className="mission-gd-right col-lg-6 pl-lg-4">
                                    <button onClick={this.toGTpay} className="pay-btn" title="GTPay">GTPay</button>&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default PayPop;