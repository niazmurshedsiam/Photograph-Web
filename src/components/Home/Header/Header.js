import React from "react";
import "../Home.css";
import sliderOne from "../../../images/slider/sliderOne.jpg";
import sliderTwo from "../../../images/slider/sliderTwo.jpg";

const Header = () => {
	return (
		<div>
			<div
				id="carouselExampleCaptions"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active sliderBlack">
						<img src={sliderOne} class="d-block w-100 sliderImg" alt="..." />
						<div class="carousel-caption  d-md-block">
							<div className="sliderText">
								<h3 className="text-start">A picture is worth a thousand words</h3>
								
								<p className="mb-5 text-start">
								It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.
								</p>
							</div>
							<a href=""> <button className="btn btn-outline-danger position-absolute  start-0" style={{color:'white' }}>View Gallery</button></a>
						</div>
					</div>
					<div class="carousel-item sliderBlack">
						<img src={sliderTwo} class="d-block w-100 sliderImg" alt="..." />
						<div class="carousel-caption  d-md-block">
							<div className="sliderText">
								<h3 className="text-start">A picture is worth a thousand words</h3>
								<p className="mb-5 text-start">
								It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.
								</p>
							</div>
							<a href=""> <button className="btn btn-outline-danger position-absolute  start-0" style={{color:'white'}}>View Gallery</button></a>
						</div>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Header;
