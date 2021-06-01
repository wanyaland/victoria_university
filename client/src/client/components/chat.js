import React, { Component } from 'react';

class Chat extends Component{
	closeForm(){
        document.getElementById("myForm").style.display = "none";
    }
	openModal(){
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
	}

	closeModal(){
		var modal = document.getElementById("myModal");
		modal.style.display = "none";
	}
    render(){
        return(
            <React.Fragment>
				<div class="chat-popup" id="myForm">
	<form action="/action_page" class="form-container">
		<div class="chat_head">
			<table style={{width: '100%',padding: 'none'}}>
				<tr>
					<td class="hover-chat-btns" style={{width: '2%', textAlign: 'center'}}>
						<span class="fa fa-bars" style={{color: '#FFF'}} onclick={this.chatSettings} title="Close Chat"></span>
					</td>
					<td style={{width: '25%', textAlign: 'center'}}>
						<span class="" style={{color: '#FFF', textAlign: 'center'}}>Chat&nbsp;</span>
					</td>
					<td class="hover-chat-btns" style={{width: '2%', textAlign: 'center'}} onClick={this.closeForm}>
						<span class="fa fa-angle-down" style={{color: '#FFF'}} title="Minimize"></span>
					</td>
					<td class="hover-chat-btns" style={{width: '2%', textAlign: 'center'}}  onClick={this.openModal}>
						<span class="fa fa-times" style={{color: '#FFF'}} title="Close Chat"></span>
					</td>
				</tr>
			</table>
		</div>
		<div class="area" style={{height: '400px'}}>
		<div id="myModal" class="modal">
				<div class="modal-content">
					<p>End this Chat?</p>
					<table style={{width: '100%'}}>
						<tr>
							<td style={{width: '50%', textAlign: 'center'}}>
								<button  class="modal_btns" onClick={this.closeForm}>Yes</button>
							</td>
							<td style={{width: '50%', textAlign: 'center'}}>
								<button  class="modal_btns" onClick={this.closeModal} style={{backgroundColor: '#2dc076'}}>No</button>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		
		<div class="chat_foot">
			<textarea placeholder="Type message.." name="msg" required></textarea>&nbsp;
			<button type="submit" class="btn" style={{width: '20%'}}>Send</button>
		</div>
	</form>
</div>
            </React.Fragment>
        )
    }
}

export default Chat;