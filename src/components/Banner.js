import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
            >
                <div>
                    <img loading='lazy' src="/images/banner1.jpg" alt="banner1" />
                </div>
                <div>
                    <img loading='lazy' src="/images/banner3.jpg" alt="banner3" />
                </div>
                <div>
                    <img loading='lazy' src="/images/banner4.jpg" alt="banner4" />
                </div>
                <div>
                    <img loading='lazy' src="/images/banner5.jpg" alt="banner5" />
                </div>
                <div>
                    <img loading='lazy' src="/images/banner6.jpg" alt="banner6" />
                </div>
                <div>
                    <img loading='lazy' src="/images/banner7.jpg" alt="banner7" />
                </div>
                

            </Carousel>
        </div>
    )
}

export default Banner
