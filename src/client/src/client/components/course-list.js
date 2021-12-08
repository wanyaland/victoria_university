import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = (props) => {
    return(
        <React.Fragment>
            {props.courses.map((item) => (
                <div className="col-md-4 filter photo" key={item.id} style={{marginTop: '.6em'}}>
                    <div className="shadow-hover" style={{border: '#CCC 1px solid', padding: '0em', borderRadius: '5px'}}>
                        <div className="each-item">
                            <Link to={`/view-program/${item.program}`}><img className="port-image img-fuild" src="/assets/images/cap.png" alt="" /></Link>
                        </div>
                        <div className="course-content" style={{minHeight: '6.5rem'}}>
                            <div className="course-info">
                                <Link to="/events-hub" className="course-title-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">{item.program}</h3>
                                </Link>
                            </div>
                            <div className="course-divider">
                                <div className="course-meta grid"><span className="course-students" title="">UGX {item.local_price}</span>
                                    <span className="course-reviews" title=""></span>

                                </div>
                                <Link to={`/view-program/${item.program}`} className="course-more"> More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}             
        </React.Fragment>
    )
}

export default CourseList