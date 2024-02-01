import './card.component.css';
import tut1 from '../../assets/images/tut1.jpg';
import tut2 from '../../assets/images/tut2.jpg';
import tut3 from '../../assets/images/tut3.jpg';
import tut4 from '../../assets/images/tut4.jpg';
import tut5 from '../../assets/images/tut5.jpg';
import tut6 from '../../assets/images/tut6.jpg';
import res1 from '../../assets/images/res1.jpg';
import res2 from '../../assets/images/res2.jpg';
import res3 from '../../assets/images/res3.jpg';
import res4 from '../../assets/images/res4.jpg';
import res5 from '../../assets/images/res5.jpg';
import res6 from '../../assets/images/res6.jpg';
import shop1 from '../../assets/images/shop1.jpg';
import shop2 from '../../assets/images/shop2.jpg';
import electric1 from '../../assets/images/electric1.jpg';
import electric2 from '../../assets/images/electric2.jpg';
import plum1 from '../../assets/images/plumb1.jpg';
import plum2 from '../../assets/images/plumb2.jpg';
import trans1 from '../../assets/images/trans1.jpg';
import trans2 from '../../assets/images/trans2.jpg';

import { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';

export function HomeCards() {
  const [selectedCategory, setSelectedCategory] = useState('tutor');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = {
    tutor: [
      {
        imageUrl: tut1,
        heading4: 'English Tutor',
        heading6: 'Abu Dhabi',
        atag: 'View Profile',
      },
      {
        imageUrl: tut2,
        heading4: 'Hindi Tutor',
        heading6: 'Dubai',
        atag: 'View Profile',
      },
      {
        imageUrl: tut3,
        heading4: 'Arabic Tutor',
        heading6: 'Ajman',
        atag: 'View Profile',
      },
      {
        imageUrl: tut4,
        heading4: 'Bengali Tutor',
        heading6: 'Dubai',
        atag: 'View Profile',
      },
      // {
      //   imageUrl: tut5,
      //   heading4: 'Maths Tutor',
      //   heading6: 'Ajman',
      //   atag: 'View Profile',
      // },
      // {
      //   imageUrl: tut6,
      //   heading4: 'Arabic Tutor',
      //   heading6: 'Abu Dhabi',
      //   atag: 'View Profile',
      // }

    ],
    restaurant: [
      {
        imageUrl: res1,
        heading4: 'Verde Beach Dubai',
        heading6: 'Dubai',
        atag: 'View Restaurant',
      },
      {
        imageUrl: res2,
        heading4: 'Zenon',
        heading6: 'Dubai',
        atag: 'View Restaurant',
      },
      {
        imageUrl: res3,
        heading4: 'Lena',
        heading6: 'Order Online',
        atag: 'View Restaurant',
      },
      {
        imageUrl: res4,
        heading4: 'Smoki Moto',
        heading6: 'Dubai',
        atag: 'View Restaurant',
      },
      // {
      //   imageUrl: res5,
      //   heading4: 'CE LA VI',
      //   heading6: 'Dubai',
      //   atag: 'View Restaurant',
      // },
      // {
      //   imageUrl: res6,
      //   heading4: 'Cala Vista',
      //   heading6: 'Dubai',
      //   atag: 'View Restaurant',
      // }

    ],
    onlineShopping: [
      {
        imageUrl: shop1,
        heading4: 'Dubai Mall',
        heading6: 'Dubai',
        atag: 'View Mall',
      },
      {
        imageUrl: shop2,
        heading4: 'Mall of Emirates',
        heading6: 'Dubai',
        atag: 'View Mall',
      },

    ],
    electricians: [
      {
        imageUrl: electric1,
        heading4: 'Abu Dhabi',
        atag: 'Menu',
      },
      {
        imageUrl: electric2,
        heading4: 'Dubai',
        atag: 'Menu',
      }

    ],
    plumber: [
      {
        imageUrl: plum1,
        heading4: 'Dubai',
        atag: 'Menu',
      }
      ,
      {
        imageUrl: plum2,
        heading4: 'Dubai',
        atag: 'Menu',
      },
    ],
    transport: [
      {
        imageUrl: trans1,
        heading4: 'Dubai',
        atag: 'Book Taxi',
      }
      ,
      {
        imageUrl: trans2,
        heading4: 'Dubai',
        atag: 'Book Taxi',
      },
    ]
  };


  useEffect(() => {

    const defaultItems = categories[selectedCategory];

  }, [selectedCategory]);


  const [rating, setRating] = useState(0);



  const handleRatingClick = (value) => {
    setRating(value);
  };
  return (
   
      <div>
        <h3 className="mpcategories-heading">Explore Directory Catergory</h3>
        <div className="mt-5 directory-catergory">
          <Row className="mt-3" xs={12} md={6} lg={6} style={{ textAlign: "center" ,width:'100%'}}>
            <Col>
              <Button onClick={() => handleCategoryClick('tutor')}>Tutor</Button>
            </Col>
            <Col>
              <Button onClick={() => handleCategoryClick('restaurant')}>Restaurant</Button>
            </Col>
            <Col>
              <Button onClick={() => handleCategoryClick('onlineShopping')}>Shopping</Button>
            </Col>
            <Col>
              <Button onClick={() => handleCategoryClick('electricians')}>Electricians</Button>
            </Col>
            <Col>
              <Button onClick={() => handleCategoryClick('plumber')}>Plumber</Button>
            </Col>
            <Col>
              <Button onClick={() => handleCategoryClick('transport')}>Transport</Button>
            </Col>

          </Row>
          <div style={{marginLeft:'23px'}}>
          <Row className="mt-5" style={{width:'100%'}}>
            {categories[selectedCategory].map((item, index) => (
              <Col key={index} xs={12} md={6} lg={3} className="mb-3">
                <div className="card ">

                  <img src={item.imageUrl} className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title" style={{ textAlign: "center" }}>{item.heading4}</h4>
                    <h6 className="card-text mt-4" style={{ textAlign: "center" }}>{item.heading6}</h6>
                    <a href="#" className="btn btn-primary cards_button " style={{ marginLeft: '36%' }}>{item.atag}</a>
                  </div>

                  <div style={{ textAlign: 'center', marginLeft: '0px' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        onClick={() => handleRatingClick(star)}
                        style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                      >
                        ★ 
                      </span>
                    ))}
                    <p style={{ display: 'none' }}>Selected rating: {rating}</p>
                  </div>

                </div>


              </Col>
            ))}

          </Row>
          </div>
        </div>
      </div>
    
  )
}

{/* <div>
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
</div> */}