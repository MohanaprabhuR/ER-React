import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [heroHeight, setHeroHeight] = useState(1000);

  useEffect(() => {
    const updateHeroHeight = () => {
      const heroSection = document.querySelector(".heigth-section");
      if (heroSection) {
        setHeroHeight(heroSection.offsetHeight);
      }
    };

    updateHeroHeight();
    window.addEventListener("resize", updateHeroHeight);

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < heroHeight
      );
      setPrevScrollPos(currentScrollPos);
      setScrolled(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeroHeight);
    };
  }, [prevScrollPos, heroHeight]);

  return (
    <>
      <header
        className={`
          navbar-home fixed z-50 w-full shadow-3xl
          transition-all duration-300 ease-in-out
          ${visible ? "translate-y-0" : "-translate-y-full"}
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-sm"
              : location.pathname === "/"
              ? "bg-transparent"
              : "bg-white"
          }
          max-md:!overflow-scroll max-md:py-4 max-sm:py-3
        `}
      >
        <div className="relative z-10 mx-auto flex w-full max-w-[1142px] items-center justify-between px-4 text-center max-xl:max-w-full max-lg:justify-between max-md:flex-wrap max-md:justify-between max-sm:max-w-full">
          <div className="flex items-center justify-between w-full">
            <Link
              to="/"
              className="site-logo flex h-9 w-[172px] items-center max-md:order-1 max-sm:h-8 max-sm:w-[120px]"
            >
              {location.pathname === "/" && !scrolled ? (
                <figure>
                  <img
                    src="../../images/svg/elasticrun-logo-white.svg"
                    alt="ER Logo"
                    className="transition-opacity duration-300"
                  />
                </figure>
              ) : (
                <figure>
                  <img
                    src="../../images/svg/elasticrun-logo.svg"
                    alt="ER Logo"
                    className="transition-opacity duration-300"
                  />
                </figure>
              )}
            </Link>
            <ul className="flex items-center justify-end gap-[0_25px] max-xl:gap-[0_20px] max-lg:gap-[0_16px] max-md:flex-col max-md:items-start max-md:gap-0">
              <li className="cursor-pointer py-[26px] max-xl:py-5 max-lg:py-4 max-md:w-full max-md:border-b max-md:border-solid max-md:border-b-[#9CAADD] max-md:py-5 max-md:text-left max-sm:w-full max-sm:text-left active">
                <Link
                  className={`${
                    location.pathname === "/" && !scrolled
                      ? "opacity-70 text-white hover:opacity-100"
                      : "text-gray-900 hover:text-[#F96D44]"
                  } nav-link-home text-center font-sans text-base leading-6 tracking-[-0.08px] transition-all duration-300 font-wght-510 active`}
                  to="/"
                >
                  Platform
                </Link>
              </li>
              <li className="cursor-pointer py-[26px] max-xl:py-5 max-lg:py-4 max-md:w-full max-md:border-b max-md:border-solid max-md:border-b-[#9CAADD] max-md:py-5 max-md:text-left max-sm:w-full max-sm:text-left active">
                <Link
                  className={`${
                    location.pathname === "/" && !scrolled
                      ? "opacity-70 text-white hover:opacity-100"
                      : "text-gray-900 hover:text-[#F96D44]"
                  } nav-link-home text-center font-sans text-base leading-6 tracking-[-0.08px] transition-all duration-300 font-wght-510 active`}
                  to="/allmile"
                >
                  AllMile
                </Link>
              </li>
              <li className="cursor-pointer py-[26px] max-xl:py-5 max-lg:py-4 max-md:w-full max-md:border-b max-md:border-solid max-md:border-b-[#9CAADD] max-md:py-5 max-md:text-left max-sm:w-full max-sm:text-left active">
                <Link
                  className={`${
                    location.pathname === "/" && !scrolled
                      ? "opacity-70 text-white hover:opacity-100"
                      : "text-gray-900 hover:text-[#F96D44]"
                  } nav-link-home text-center font-sans text-base leading-6 tracking-[-0.08px] transition-all duration-300 font-wght-510 active`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="cursor-pointer py-[26px] max-xl:py-5 max-lg:py-4 max-md:w-full max-md:border-b max-md:border-solid max-md:border-b-[#9CAADD] max-md:py-5 max-md:text-left max-sm:w-full max-sm:text-left active">
                <Link
                  className={`${
                    location.pathname === "/" && !scrolled
                      ? "opacity-70 text-white hover:opacity-100"
                      : "text-gray-900 hover:text-[#F96D44]"
                  } nav-link-home text-center font-sans text-base leading-6 tracking-[-0.08px] transition-all duration-300 font-wght-510 active`}
                  to="/career"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
