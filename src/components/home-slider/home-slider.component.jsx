import './home-slider.component.css';
import image1 from '../../assets/images/image1.avif';
import image2 from '../../assets/images/image2.avif';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.avif';
import image5 from '../../assets/images/image5.avif';
import resaurent from '../../assets/images/resaurent.jpg';
import hotel from "../../assets/images/hotel.avif";
import school from "../../assets/images/school.webp";
import college from "../../assets/images/college.jpg";

export function HomeSliderComponent() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block  image  " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block image" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block image" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image4} className="d-block image" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image5} className="d-block image" alt="..." />
                    </div>


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
        </div>
    )
}