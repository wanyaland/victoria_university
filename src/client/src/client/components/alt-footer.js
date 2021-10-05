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
                <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=elFld1AV4L5eoI9oxn1qLKb1xoAAmYvZvWDiT81XlryapnR1ZPqwOuWdpKsH"></script></span>
                <section className="w3l-footer-16">
    <div className="w3l-footer-16-main py-5" id="fixer5">
        <div className="container">
			<br/>
            <div className="row">
                <div className="col-lg-12 column">
                    <div className="row text-center">
                        <div className="col-md-12 column">
                            <a className="logo-2 text-center" href="home.php" style={{marginRight: '0 !important'}}>
                                <label className="" style={{fontSize: '60px'}}><img src="/assets/images/fav.png" width="60" height="60" alt="img" /> Hub</label>
                            </a>
                        </div>
                        <div className="col-md-12 column">
                            <ul className="social text-center">
                                <li style={{borderRight: '#FFF 1px solid', padding: '8px'}}><a href="https://www.facebook.com/VUKampala" style={{background: 'none'}}><span className="fa fa-facebook" style={{fontSize: '28px'}} aria-hidden="true"></span><i></i></a>
                                </li>
                                <li style={{borderRight: '#FFF 1px solid', padding: '8px'}}><a href="https://www.linkedin.com/company/victoria-university-kampala/" style={{background: 'none'}}><span className="fa fa-linkedin" style={{fontSize: '28px'}} aria-hidden="true"></span><i></i></a>
                                </li>
                                <li style={{borderRight: '#FFF 1px solid', padding: '8px'}}><a href="https://twitter.com/VUKampala" style={{background: 'none'}}><span className="fa fa-twitter" style={{fontSize: '28px'}} aria-hidden="true"></span><i></i></a>
                                </li>
                                <li style={{borderRight: '#FFF 1px solid', padding: '8px'}}><a href="https://www.instagram.com/victoriauniversity_kampala/" style={{background: 'none'}}><span className="fa fa-instagram" style={{fontSize: '28px'}} aria-hidden="true"></span><i></i></a>
                                </li>
                                <li><a href="https://www.youtube.com/user/vukampala" style={{background: 'none'}}><span className="fa fa-youtube-play" style={{fontSize: '28px'}} aria-hidden="true"></span><i></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-4 mt-5" style={{padding: '0 !important', backgroundColor: '#033652', marginBottom: '0 !important', marginTop: '10px'}}>
            <table style={{width: '100%'}}>
            
                <tr>
                    <td style={{width: '50%', color: '#FFF'}}><a className="" href="home.php">
                        <label className="" style={{color: '#FFF', paddingLeft: '20px'}}><img src="assets/images/fav.png" width="40" height="40" alt="img"/> Visit main VU website</label></a></td>
                    <td className="text-right" style={{color: '#FFF', paddingRight: '20px'}}>© 2021 Victoria University. All rights reserved</td>
                </tr>
                
            </table>
        </div>
    </div>
    <button onClick={this.topFunction} id="movetop" title="Go to top">
        <span className="fa fa-angle-up"></span>
    </button>
    <button className="open-button" onClick={this.openForm}><span className="fa fa-comments text-center justify-content-center" title="Chat And Help"></span></button>
</section>
            </React.Fragment>
        )
    }
}

export default AltFooter;