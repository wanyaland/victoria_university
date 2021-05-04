import React, { Component } from 'react';

class Chat extends Component{
	closeForm(){
        document.getElementById("myForm").style.display = "none";
    }
    render(){
        return(
            <React.Fragment>
				<div class="chat-popup" id="myForm">
			<form action="/action_page" class="form-container">
		<div className="chat_head">
			<div style={{color: '#FFF'}}>
				<span class="fa fa-bars" style={{color: '#FFF'}}></span>&nbsp;
				<span class="" style={{margin: '0 auto'}}>Chat</span>&nbsp;
				<span class="fa fa-angle-down" style={{color: '#FFF'}}></span>&nbsp;
				<span class="fa fa-times" style={{color: '#FFF', fontWeight: '100', cursor: 'pointer'}} onClick={this.closeForm} title="Close Chat"></span>
			</div>
		</div>
		<div class="area" style={{height: '300px'}}>

		</div>
		<div className="chat_foot">
			<textarea placeholder="Type message..." name="msg" required></textarea>&nbsp;
			<button type="submit" class="btn">Send</button>
		</div>
	</form>
</div>
            </React.Fragment>
        )
    }
}

export default Chat;