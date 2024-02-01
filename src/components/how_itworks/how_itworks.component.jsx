import './how_itworks.component.css';
import howitworkimg1 from '../../assets/images/howitworksimg1.png';
import howitworkimg2 from '../../assets/images/howitworksimg2.png';
import howitworkimg3 from '../../assets/images/howitworksimg3.png';
export function HowitWorks() {
    return (
        <div className='how-it-works-main'>
            <div className='how-it-works-title'>
                <h1>How It Work</h1>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <div className='how-it-works-body mt-3'>
                        <div>
                            <img src={howitworkimg1}></img>
                        </div>
                        <div>
                            <h3>Choose What To Do</h3>
                            <p style={{color:'#949494'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur atque neque fugiat rem vitae sint.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <div className='how-it-works-body  mt-3'>
                        <div>
                            <img src={howitworkimg2}></img>
                        </div>
                        <div>
                            <h3>Find What You Want</h3>
                            <p style={{color:'#949494'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur atque neque fugiat rem vitae sint.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <div className='how-it-works-body  mt-3'>
                        <div>
                            <img src={howitworkimg3}></img>
                        </div>
                        <div>
                            <h3>Explore Amazing Places</h3>
                            <p style={{color:'#949494'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur atque neque fugiat rem vitae sint.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}