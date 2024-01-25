import './card.component.css';
import tut1 from '../../assets/images/tut1.jpg';
import tut2 from '../../assets/images/tut2.jpg';
import tut3 from '../../assets/images/tut3.jpg';
import tut4 from '../../assets/images/tut4.jpg';
import res1 from '../../assets/images/res1.jpg';
import res2 from '../../assets/images/res2.jpg';
import res3 from '../../assets/images/res3.jpg';
import res4 from '../../assets/images/res4.jpg';

export function HomeCards() {
    return (
        <div>
            <h3 style={{ textAlign: "center" }} className='mpcategories-heading'> Explore Directory Categories</h3>
            <br></br>
            <h6 style={{ textAlign: "center" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, tempore ab? </h6>
            <div className='homecard container'>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="card ms-3 mt-4" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={tut1} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>English Tutor</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Abu Dhabi</h6>
                                <a href="#" className="btn btn-primary cards_button ">View Profile</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="card ms-3 mt-4" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={tut2} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Hindi Tutor</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Dubai</h6>
                                <a href="#" className="btn btn-primary cards_button">View Profile</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="card ms-3 mt-4" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={tut3} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Arabic Tutor</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Ajman</h6>
                                <a href="#" className="btn btn-primary cards_button">View Profile</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="card ms-3 mt-4" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={tut4} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Bengali Tutor</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Hatta</h6>
                                <a href="#" className="btn btn-primary cards_button">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homecard container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className="card mt-4 ms-3" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={res1} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Verde Beach Dubai</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Dubai</h6>
                                <a href="#" className="btn btn-primary cards_button">View Restaurant</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className="card mt-4 ms-3" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={res2} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Zenon</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Dubai</h6>
                                <a href="#" className="btn btn-primary cards_button">View Restaurant</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className="card mt-4 ms-3 " style={{ width: "18rem" }}>
                            <img className="card-img-top" src={res3} alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Lena</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Dubai</h6>
                                <a href="#" className="btn btn-primary cards_button">View Restaurant</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className="card mt-4 ms-3" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={res4} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Smoki Moto</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Dubai</h6>
                                <a href="#" className="btn btn-primary cards_button">View Restaurant</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}