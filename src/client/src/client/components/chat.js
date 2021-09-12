import React, { Component } from 'react';

class Chat extends Component{
	closeForm(){
        document.getElementById("myForm").style.display = "none";
    }
	openModal(){
	var modal = document.getElementById("ChatModal");
	modal.style.display = "block";
	}

	closeModal(){
		var modal = document.getElementById("ChatModal");
		modal.style.display = "none";
	}
    render(){
        return(
            <React.Fragment>
				<div className="chat-popup" id="myForm">
	<form action="/action_page" className="form-container">
		<div className="chat_head">
			<table style={{width: '100%',padding: 'none'}}>
			
				<tr>
					<td className="hover-chat-btns" style={{width: '2%', textAlign: 'center'}}>
						<span className="fa fa-bars" style={{color: '#FFF'}} onClick={this.chatSettings} title="Close Chat"></span>
					</td>
					<td style={{width: '25%', textAlign: 'center'}}>
						<span className="" style={{color: '#FFF', textAlign: 'center'}}>Chat&nbsp;</span>
					</td>
					<td className="hover-chat-btns" style={{width: '2%', textAlign: 'center'}} onClick={this.closeForm}>
						<span className="fa fa-angle-down" style={{color: '#FFF'}} title="Minimize"></span>
					</td>
					<td className="hover-chat-btns" style={{width: '2%', textAlign: 'center'}}  onClick={this.openModal}>
						<span className="fa fa-times" style={{color: '#FFF'}} title="Close Chat"></span>
					</td>
				</tr>
				
			</table>
		</div>
		<div className="chat-area">
			<div className="text-box" id="agent">
				<span className="text-left">Hi, Am John Doe and I'm your vitual agent</span>
			</div>
			<div className="text-box" id="agent">
				<span className="text-left" style={{width: 'auto'}}>How can I help you?</span>
			</div>
			<div className="text-box-user" id="agent">
				<span className="text-left" style={{width: 'auto'}}>Are you live yet?</span>
			</div>
			<div id="ChatModal" className="chat-modal">
				<div className="chat-modal-content">
					<p>End this Chat?</p>
					<table style={{width: '100%'}}>
					
						<tr>
							<td style={{width: '50%', textAlign: 'center'}}>
								<button  className="chat-modal_btns" onClick={this.closeForm}>Yes</button>
							</td>
							<td style={{width: '50%', textAlign: 'center'}}>
								<button  className="chat-modal_btns" onClick={this.closeModal} style={{backgroundColor: '#2dc076'}}>No</button>
							</td>
						</tr>
						
					</table>
				</div>
			</div>
		</div>
		
		<div className="chat_foot">
			<textarea placeholder="Type message.." name="msg" required></textarea>&nbsp;
			<button type="submit" className="btn" style={{width: '20%'}}>Send</button>
		</div>
	</form>
</div>
            </React.Fragment>
        )
    }
}

export default Chat;