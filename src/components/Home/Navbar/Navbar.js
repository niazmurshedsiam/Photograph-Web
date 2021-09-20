import React, { useEffect, useState } from "react";
import "../Home.css";

const Navbar = () => {
    const [fixedTop, setScroll] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 10);
		});
	}, []);

  return (
    <div>
      <nav
        class={`navbar navbar-expand-lg fixed-top navbar-light topNavbarCustom scroll${fixedTop}`}
      >
        <div class="container">
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 fl-right mb-lg-0">
              <li class="nav-item ">
                <a
                  to=""
                  class="nav-link navItemCustom"
                  aria-current="page"
                  href="/home"
                >
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a
                  to=""
                  class="nav-link navItemCustom"
                  aria-current="page"
                  href="/about"
                >
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a
                  to=""
                  class="nav-link navItemCustom"
                  aria-current="page"
                  href="#"
                >
                  SERVICES & PACKAGE
                </a>
              </li>
              <li class="nav-item">
                <a
                  to=""
                  class="nav-link navItemCustom"
                  aria-current="page"
                  href="#"
                >
                  GALLERY
                </a>
              </li>
              <li class="nav-item">
                <a
                  to=""
                  class="nav-link navItemCustom"
                  aria-current="page"
                  href="#"
                >
                  PACKAGE
                </a>
              </li>
              <li class="nav-item">
                <a
                  to=""
                  class="nav-link navItemCustom"
                  aria-current="page"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a
                  to=""
                  class="nav-link navItemCustom"
                  aria-current="page"
                  href="#"
                >
                  CONTACT
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
