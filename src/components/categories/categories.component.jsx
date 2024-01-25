import './categories.component.css';
import { GiTeacher } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { FcElectricity } from "react-icons/fc";
import { MdOutlinePlumbing } from "react-icons/md";
import { MdOutlineEmojiTransportation } from "react-icons/md";
export function Popularcategories() {
    return (
        <div>
            <div className='Main-container'>
                <h1 className='mpcategories-heading '>Most Popular Categories</h1>
                <br></br>
                <div className='container'>
                    <div className='row'>
                        <div className='mt-4  col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1'>
                                <p className='resutrant-heading'> <GiTeacher /> &nbsp;Tutors</p>
                            </div>
                        </div>
                        <div className='mt-4  col-sm-12 col-md-6 col-lg-4 '>
                            <div className='box-1 '>
                                <p className='resutrant-heading'><FaHotel />&nbsp;Restaurants</p>
                            </div>
                        </div>
                        <div className='mt-4  col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 '>
                                <p className='resutrant-heading'><PiShoppingCart />&nbsp;Online Shopping</p>
                            </div>
                        </div>
                        <div className='mt-4  col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 '>
                                <p className='resutrant-heading'><FcElectricity />&nbsp;Electricans</p>
                            </div>
                        </div>
                        <div className='mt-4  col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1'>
                                <p className='resutrant-heading'><MdOutlinePlumbing />&nbsp;Pulmber</p>
                            </div>
                        </div>
                        <div className='mt-4  col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 '>
                                <p className='resutrant-heading'><MdOutlineEmojiTransportation />&nbsp;Transport</p>
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>

        </div>
    )
}