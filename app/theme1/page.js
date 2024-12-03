// app/theme1/page.js
import CarouselWrapper from "../common/components/Carousel";

export default function Theme1HomePage() {
    return (
      <div>
        <CarouselWrapper
          options={{
            loop: true,
            nav: true,
            dots: true,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            },
          }}
          className="owl-carousel"
        >
          <div className="item bg-red-300 p-8">
            <h4>1</h4>
          </div>
          <div className="item bg-blue-300 p-8">
            <h4>2</h4>
          </div>
          <div className="item bg-green-300 p-8">
            <h4>3</h4>
          </div>
          <div className="item bg-yellow-300 p-8">
            <h4>4</h4>
          </div>
          <div className="item bg-gray-300 p-8">
            <h4>5</h4>
          </div>
          <div className="item bg-pink-300 p-8">
            <h4>6</h4>
          </div>
        </CarouselWrapper>
        <div className="container">
          
        </div>
    </div>
    );
}
