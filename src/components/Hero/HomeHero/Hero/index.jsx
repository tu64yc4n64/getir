import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
const Hero = ({ slides }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        style: { height: "500px" },
        autoplay: true,         // Autoplay özelliği
        autoplaySpeed: 3000,
        draggable: false,
        pauseOnHover: false
    };


    return (



        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index}><img className="w-[100%] h-[100%]" src={slide.img} alt="" /></div>
            ))}
        </Slider>

    );
};
export default Hero