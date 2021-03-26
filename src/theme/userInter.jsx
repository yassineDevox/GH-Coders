import React from 'react'
import '../assets/style.css'





export default function userInter() {
    return (
<div>
  <div >
    <div className="navbar">
      <div className="logo">
        <a href="index.html"><img src="https://i.ibb.co/kDVwgwp/logo.png" alt="RedStore" width="125px" /></a>
      </div>
      <nav>
        <ul id="MenuItems">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Account</a></li>
        </ul>
      </nav>
      <a href="#"><img src="https://i.ibb.co/PNjjx3y/cart.png" alt width="30px" height="30px" /></a>
      <img src="https://i.ibb.co/6XbqwjD/menu.png" alt className="menu-icon" onclick="menutoggle()" />
    </div>
  </div>



<div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" width="500" height="300" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" width="500" height="300" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" width="500" height="300" className="d-block w-100" alt="..." />
    </div>
  </div>
</div>



  <div className="small-container">
    <div className="row row-2">
      <h2>All Products</h2>
      <select>
        <option value>Categories</option>
        <option value>Short by price</option>
        <option value>Short by popularity</option>
        <option value>Short by rating</option>
        <option value>Short by sale</option>
      </select>
    </div>
    <div className="d-flex flex-wrap justify-content-around">
      <div className="col-4">
        <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/bQ5t8bR/product-5.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/vVpTyBD/product-6.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/hR5FGwH/product-7.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/QfCgdXZ/product-8.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/nw5xZwk/product-9.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/9HCsmjf/product-10.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/JQ2MBHR/product-11.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/nRZMs6Y/product-12.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
    </div>
    <div className="page-btn">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>→</span>
    </div>
  </div>
{/* Footer */}
<div className="footer">
  <div className="container-fluid">
    <div className="d-flex justify-content-around">
      <div className="footer-col-1">
        <h3>Download Our App</h3>
        <p>Download App for Android and iso mobile phone.</p>
        <div className="app-logo">
          <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt />
          <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt />
        </div>
      </div>
      <div className="footer-col-2">
        <img src="https://i.ibb.co/j3FNGj7/logo-white.png" alt />
        <p>
          Our Purpose Is To Sustainably Make the Pleasure and Benefits of
          Sports Accessible to the Many.
        </p>
      </div>
      <div className="footer-col-3">
        <h3>Useful Links</h3>
        <ul>
          <li>Coupons</li>
          <li>Blog Post</li>
          <li>Return Policy</li>
          <li>Join Affiliate</li>
        </ul>
      </div>
      <div className="footer-col-4">
        <h3>Follow us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>
   
  </div>
  <hr />
    <p className="copyright">Copyright © 2021 - Red Store</p>
</div>

</div>


    )
}
