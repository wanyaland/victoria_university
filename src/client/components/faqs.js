import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import LabNav from './lab_nav'
import { Link } from 'react-router-dom';
import LibBanner from './lib_banner';

class Faqs extends Component {
    componentDidMount(){
        var coll = document.getElementsByClassName("collapsible");
		var i;
		
		for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("activer");
			var content = this.nextElementSibling;
			if (content.style.maxHeight){
			content.style.maxHeight = null;
			} else {
			content.style.maxHeight = content.scrollHeight + "px";
			} 
		});
		}
    }
		change_icon(id, id2) {
		var element = document.getElementById(id);
		element.classList.add("hider");
		var element2 = document.getElementById(id2);
		element2.classList.add("block");
	 }
	 change_icon2(id, id2){
		var element = document.getElementById(id);
		element.classList.remove("hider");
		var element2 = document.getElementById(id2);
		element2.classList.remove("block");
		console.log('HI4')
	 }
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <LibBanner />
                <section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
                <div className="" style={{color: '#EEE'}}>
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
                Victoria University 
                </span></Link>&nbsp;/&nbsp;
                <Link to="/library"><span className="underline" style={{color: "#EEE"}}>
                Research At VU 
                </span></Link>&nbsp;
                <span style={{color: '#EEE'}}>/ FAQs</span>
                </div>
            </div>
		</div>
	</div>
</section>
<section className="w3l-team-main">
	<div className="team py-5">
		<div className="py-lg-5" >
			<div className="justify-content-center"  style={{display: 'flex'}}>
				<LabNav />
				<div className="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Faqs</h6>
						<br/>
                        <p className="my-4">Here is a list of solutions to various queries usually asked by our users. Feel free to add your personal query at our comment section and our qualified staff will immediately get back to you. Make sure you have first gone through the rest of our have here to be sure that your question has not been answered elsewhere.</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>Frequently Asked Questions</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>1. How to access e-books and e-journals on and off the campus network?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">If you are a first-time user of the Library’s E-Resources Platform, you will be required to register with the library so that your given a username and Password to use. Once your registration is approved you will receive an e-mail containing information about how to log in, set your password, and other details. Click on the link provided in the registration approval mail to set the password you will be using to log in to the system (MYLOFT) <br/>NB: You are required to use your Victoria University’s email for the registration</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>2. How can I register for a university email?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Go to the IT department and have an Institutional email assigned to you. Follow instructions as provided. Incase of difficulties seek help.</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>3. How to connect to Library’s Wifi?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Before trying to connect to Vu’s lib wifif, ensure you get your login credentials from Librarian’s Support desk. It is easy to connect to Vu’s lib wifi just use one of the guides Please note: you will be asked for login credentials when accessing the wifi.</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>4. How can I find a book on a certain topic?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Visit our library catalog. From there click ‘Advanced search’. Under ‘Search for’ enter your search then scroll down to the ‘Limit to any of the following’ section. In that section tick ‘Title, Author’. After that scroll down and click search. This search will show you the various titles we have in the Library</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>5. I would like to know more about the library account for students. I have often seen this Log in box whenever I open the Library catalog. How I can log in such account.</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Logging in the library catalog, all you need is to register in the library integrated management system called KOHA. Note: Searching for information materials in the library catalog is however still possible without logging in</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>6. What do i do to renew a book?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">All you need is to come back to the Library Circulation Desk and request more time to stay with the book. However, a book cannot be renewed more than one time. The second time you will need to first return the book and it stays in the Library for more 7 days, just in case there was a user who has been searching for it</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>7. I have noticed there are some books that come with DVDs that contain the entire notes on the same book. Can students ever get access to these DVDs?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Our thesis and dissertation are available in the Library, but we are working on having them accessed online with plans of setting up an Institutional Repository</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>8. What’s the process & requirement for registering with the library in order to start using the library ser-vices?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">For a VU student to use the library, they need to come with their student ID. In a case where you don’t have one you can come with your national ID and admission letter, until the student ID is provided to you. The only service you cannot access without your student ID is borrowing of library materials.</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>9. How can CISCO students access the library as they are normally not issued with School ID cards which are needed so as to access the library?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">CISCO students can access the library using their Cisco registration forms. They can however not borrow books.</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>10. How many hours or minutes should people take in the computer room?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Each user is given 2hours to use the computer labs. You should first register to use the computers and you can also book for space after every 2hrs from 9 a.m.</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>11. How can I access the Discussion rooms in the Library?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Discussion rooms are accessed after booking with the Library Staff at the Circulation Desk and your only allowed to use them for 1 hours strictly.</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>12. How can I get a job in the library?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">The way to get a job with us is to send your application and CV to the Human Resource (or drop it at and when there is a vacancy the university will contact you.</span></li>
                            </ul>
						</p>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>13. Is it possible to get an attachment in the library?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Attachments in the library are applied through the Human resource office. However, if you are student from VU, you apply through your Department Dean and then the Dean forwards the application to the Human Resource officer.</span></li>
                            </ul>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Faqs;