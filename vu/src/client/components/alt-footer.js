import React, { Component } from 'react';
import Chat from './chat';

class AltFooter extends Component {
    topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
    openForm(){
        document.getElementById("myForm").style.display = "block";
    }
    render(){
        return(
            <React.Fragment>
                <Chat />
                <section class="w3l-footer-16">
    <div class="w3l-footer-16-main py-5" id="fixer5">
        <div class="container">
			<br/>
            <div class="row">
                <div class="col-lg-12 column">
                    <div class="row text-center">
                        <div class="col-md-12 column">
                            <a class="logo-2 text-center" href="home.php" style={{marginRight: '0 !important'}}>
                                <label class="" style={{fontSize: '60px'}}><img src="assets/images/fav.png" width="60" height="60" alt="img" /> Hub</label>
                            </a>
                        </div>
                        <div class="col-md-12 column">
                            <ul class="social text-center">
                                <li style={{borderRight: '#FFF 1px solid', padding: '8px'}}><a href="https://www.facebook.com/VUKampala" style={{background: 'none'}}><span class="fa fa-facebook" style={{fontSize: '28px'}} aria-hidden="true"></span><i></i></a>
                                </li>
                                <li style={{borderRight: '#FFF 1px solid', padding: '8px'}}><a href="https://www.linkedin.com/company/victoria-university-kampala/" style={{background: 'none'}}><span class="fa fa-linkedin" style={{fontSize: '28px'}} aria-hidden="true"></span><i></i></a>
                                </li>
                                <li style={{borderRight: '#FFF 1px solid', padding: '8px'}}><a href="https://twitter.com/VUKampala" style={{background: 'none'}}><span class="fa fa-twitter" style={{fontSize: '28px'}} aria-hidden="true"></span><i></i></a>
                                </li>
                                <li style={{borderRight: '#FFF 1px solid', padding: '8px'}}><a href="https://www.instagram.com/victoriauniversity_kampala/" style={{background: 'none'}}><span class="fa fa-instagram" style={{fontSize: '28px'}} aria-hidden="true"></span><i></i></a>
                                </li>
                                <li><a href="https://www.youtube.com/user/vukampala" style={{background: 'none'}}><span class="fa fa-youtube-play" style={{fontSize: '28px'}} aria-hidden="true"></span><i></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-4 mt-5" style={{padding: '0 !important', backgroundColor: '#033652', marginBottom: '0 !important', marginTop: '10px'}}>
            <table style={{width: '100%'}}>
                <tr>
                    <td style={{width: '50%', color: '#FFF'}}><a class="" href="home.php">
                        <label class="" style={{color: '#FFF', paddingLeft: '20px'}}><img src="assets/images/fav.png" width="40" height="40" alt="img"/> Visit main VU website</label></a></td>
                    <td class="text-right" style={{color: '#FFF', paddingRight: '20px'}}>© 2021 Victoria University. All rights reserved</td>
                </tr>
            </table>
        </div>
    </div>
    <button onClick={this.topFunction} id="movetop" title="Go to top">
        <span class="fa fa-angle-up"></span>
    </button>
    <button class="open-button" onClick={this.openForm}><span class="fa fa-comments text-center justify-content-center" title="Chat And Help"></span></button>
</section>
            </React.Fragment>
        )
    }
}

export default AltFooter;