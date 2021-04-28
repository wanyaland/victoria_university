import React, { Component } from 'react';

class Chat extends Component{
	closeForm(){
		console.log("WE OUT");
        document.getElementById("myForm").style.display = "none";
    }
    render(){
        return(
            <React.Fragment>
                	<div class="chat-popup" id="myForm">
	<form action="/action_page" class="form-container">
		<h1>Chat</h1>

		<label for="msg"><b>Message</b></label>
		<textarea placeholder="Type message.." name="msg" required></textarea>

		<button type="submit" class="btn">Send</button>
		<button type="button" class="btn cancel" onClick={this.closeForm}>Close</button>
	</form>
	</div>
            </React.Fragment>
        )
    }
}

export default Chat;