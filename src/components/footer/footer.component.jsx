// import { BsEnvelope, BsPhone } from 'react-icons/bs'
// import './footer.component.css'
// import { MdLocationOn } from 'react-icons/md'


// export function Footer() {
//     return (
//             <div>
//                 <footer className='footer'>
//                     <div class="d-flex justify-content-around f-d1">

//                             <div className="f-d">

//                                 <h3>About US</h3>
//                                 <hr style={{color:"greenyellow"}}></hr>
//                                 <p className="f-p1 ">
//                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                                     when an unknown printer took a galley of Lorem Ipsum is simply dummy text of
//                                     the printing and... View More
//                                 </p>
//                             </div>
//                             <div className="f-d">
//                                 <h3>Popular Cities</h3>
//                                 <hr style={{color:"greenyellow"}}></hr>                                
//                                 <ul className="f-p1">
//                                     <li className='fli'>Mumbau</li>
//                                     <li className='fli'>Pune</li>
//                                     <li className='fli'>Hyderabad</li>
//                                     <li className='fli'>Chennai</li>
//                                     <li className='fli'>Bangalore</li>
//                                     <li className='fli'>New Delhi</li>
//                                     <li className='fli'>Kolkatha</li>
//                                 </ul>
//                             </div>

//                             <div className="f-d">
//                                 <h3>Quick Link</h3>
//                                 <hr style={{color:"greenyellow"}}></hr>                                
//                                 <ul className="f-p1">
//                                    <li  className='fli'>About Us</li>
//                                    <li className='fli'>Terms & Conditions</li>
//                                    <li className='fli'>Privacy Policy</li>
//                                    <li className='fli'>Contact us</li>
//                                    <li className='fli'>FAQs</li>
//                                 </ul>
//                             </div>
//                             <div className="f-d">
//                                 <h3>Contact US</h3>
//                                 <hr style={{color:"greenyellow"}}></hr>                                
//                                 <ul className="f-p1">
//                                    <li className='fli fli1' ><BsEnvelope></BsEnvelope> Email : .....@gmail.com</li>
//                                    <li className='fli fli1'><BsPhone></BsPhone> Phone : ****</li>
//                                    <li className='fli fli1'><MdLocationOn></MdLocationOn> Address: **</li>

//                                 </ul>
//                             </div>
//                     </div>
//                 </footer>
//             </div>

//     )
// }

import { Facebook, Google, GooglePlay, Twitter, Youtube } from 'react-bootstrap-icons';
import './footer.component.css';
export function Footer() {
    return (
        <div>
            <footer id="footer" className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row cols-xs-space cols-sm-space cols-md-space">
                            <div className="col-md-6 col-lg-4">
                                <div className="col text-center">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
                                        alt="logo"
                                        className="header-logo-image"
                                    />
                                    &nbsp; <p className="mt-3 header-website-name">Find Dubai</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="col" style={{ textAlign: 'center' }}>
                                    <h4 className="heading heading-xs strong-600 text-uppercase mb-1">
                                        Main Menu                        </h4>
                                    <br></br>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="/home" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Home                                </a>
                                        </li>
                                        <li>
                                            <a href="/doctors" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Categories                               </a>
                                        </li>
                                        <li>
                                            <a href="/appointments" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Service Listing                             </a>
                                        </li>
                                        <li>
                                            <a href="/login" target="_blank" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Whislist                              </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="col" style={{ textAlign: 'center' }}>
                                    <h4 className="heading heading-xs strong-600 text-uppercase mb-1">
                                        Help And Support                        </h4>
                                    <br></br>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="contactus" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Contact Us                                </a>
                                        </li>
                                        <li>
                                            <a href="/aboutus" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                About Us                                </a>
                                        </li>
                                        <li>
                                            <a href="/blog" style={{ color: '#FFFFFFB3', textDecoration: 'none' }}>
                                                Login                               </a>
                                        </li>
                                    </ul>
                                    <br></br>
                                    <span>
                                        <Facebook></Facebook>
                                    </span>&nbsp;&nbsp;
                                    <span>
                                        <Twitter></Twitter>
                                    </span>&nbsp;&nbsp;
                                    <span>
                                        <Google></Google>
                                    </span>&nbsp;&nbsp;
                                    <span>
                                        <Youtube></Youtube>
                                    </span>&nbsp;&nbsp;
                                    {/* <div className="col col-sm-5 col-xs-12 mt-5 ">
                                        <div className="text-xs-center text-sm-right">

                                            <div className="row social-media">
                                                <div className="col-12 ">
                                                    <span>
                                                        <Facebook></Facebook>
                                                    </span>&nbsp;&nbsp;
                                                    <span>
                                                        <Twitter></Twitter>
                                                    </span>&nbsp;&nbsp;
                                                    <span>
                                                        <Google></Google>
                                                    </span>&nbsp;&nbsp;
                                                    <span>
                                                        <Youtube></Youtube>
                                                    </span>&nbsp;&nbsp;

                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="footer-bottom">
                    <div className="container">
                        <div className="row row-cols-xs-spaced flex flex-items-xs-middle">
                            <div className="col col-sm-7 col-xs-12">
                                <div className="copyright text-xs-center text-sm-left">
                                    copyright@creativeitem | 2017                    </div>
                            </div>

                            <div className="col col-sm-5 col-xs-12 ">
                                <div className="text-xs-center text-sm-right">

                                    <div className="row social-media">
                                        <div className="col-12 ">
                                            <span>
                                                <Facebook></Facebook>
                                            </span>&nbsp;&nbsp;
                                            <span>
                                                <Twitter></Twitter>
                                            </span>&nbsp;&nbsp;
                                            <span>
                                                <Google></Google>
                                            </span>&nbsp;&nbsp;
                                            <span>
                                                <Youtube></Youtube>
                                            </span>&nbsp;&nbsp;

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </footer>
        </div>
    )
}