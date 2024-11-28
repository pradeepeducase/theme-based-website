// app/theme1/page.js
import Carousel from "../common/components/Carousel";

export default function Theme1HomePage() {
    const testimonials = [
        {
          id: 1,
          image:"https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU=",
          content: <p>"Great service! Highly recommend."</p>,
        },
        {
          id: 2,
          image:"https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU=",
          content: <p>"Amazing experience, will come back for sure!"</p>,
        },
        {
          id: 3,
          image:"https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU=",
          content: <p>"Top-notch support and quality."</p>,
        },
      ];
    return (
        <div>
             <Carousel items={testimonials} />;
             <div className="container">
                
             </div>
        </div>
    );
}
