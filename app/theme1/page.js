// app/theme1/page.js
import AboutUsSection from "../common/components/AboutUsSection";
import CarouselWrapper from "../common/components/Carousel";
import Heading from "../common/components/Heading";

export default function Theme1HomePage() {
  const carouselData = [
    { id: 1, content: "1", bgColor: "bg-red-300" },
    { id: 2, content: "2", bgColor: "bg-blue-300" },
    { id: 3, content: "3", bgColor: "bg-green-300" },
    { id: 4, content: "4", bgColor: "bg-yellow-300" },
    { id: 5, content: "5", bgColor: "bg-gray-300" },
    { id: 6, content: "6", bgColor: "bg-pink-300" },
  ];

  const aboutUsData = {
    heading: "About Us",
    paragraph:
      "Educase India is a one-stop solution to all the additional resources that a school/ preschool needs. A multi-functional service provider to boost your preschool admissions and keep it at par with the changing needs of techno freak society.",
    imageSrc:
      "https://media.jisethji.com/educase-india/website/page-content/home_1713526346.png",
    buttonText: "More About Us",
    buttonHref: "/about",
    sectionId: "about",
    backgroundColor: "rgb(255, 255, 255)",
    headingColor: "rgb(0, 185, 142)",
  };

  const ourTeamData = {
    heading: "Principle",
    paragraph:
      "Educase India is a one-stop solution to all the additional resources that a school/ preschool needs. A multi-functional service provider to boost your preschool admissions and keep it at par with the changing needs of techno freak society.",
    imageSrc:
      "https://media.jisethji.com/educase-india/website/page-content/home_1713526346.png",
    buttonText: "More About Us",
    buttonHref: "/about",
    sectionId: "about",
    backgroundColor: "rgb(255, 255, 255)",
    headingColor: "rgb(0, 185, 142)",
  };

  return (
    <div>
      {/* Carousel Section */}
      <CarouselWrapper
        options={{
          loop: true,
          nav: true,
          dots: true,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 1 },
          },
        }}
        className="owl-carousel"
      >
        {carouselData.map((item) => (
          <div key={item.id} className={`item ${item.bgColor} p-8`}>
            <h4>{item.content}</h4>
          </div>
        ))}
      </CarouselWrapper>

      {/* About Us Section */}
      <div className="container mx-auto">
        <AboutUsSection data={aboutUsData} />
      </div>
      {/* Our Team Section */}
      <div className="container mx-auto">
        <Heading title="Our Team"></Heading>
      <CarouselWrapper
        options={{
          loop: true,
          nav: true,
          dots: true,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 1 },
          },
        }}
        className="owl-carousel"
      >
        <AboutUsSection data={ourTeamData} />
        <AboutUsSection data={ourTeamData} />
        </CarouselWrapper>
      </div>
    </div>
  );
}
