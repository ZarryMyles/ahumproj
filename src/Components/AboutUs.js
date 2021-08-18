import React from "react";
import "styled-components";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

function About() {
  return (
    <div class="font-montserrat">
      <div className="p-0 md:ml-20">
        <div class="container-fluid justify-content-center px-0">
          <div className="aboutUsCarouselImage md:w-full flex items-center justify-center py-4 overflow-hidden">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              loop={true}
              navigation={true}
              className="md:h-auto flex md:w-9/12 w-10/12 justify-center content-center items-center"
            >
              <SwiperSlide className=" flex justify-center ">
                <img
                  src="https://res.cloudinary.com/dtfecnt6o/image/upload/v1626613970/AboutUs/collage5_je5r2a-min_i4ip6b.webp"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide className=" flex justify-center ">
                <img
                  src="https://res.cloudinary.com/dtfecnt6o/image/upload/v1626613970/AboutUs/collage2_kglhum_i361jg.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className=" flex justify-center ">
                <img
                  src="https://res.cloudinary.com/dtfecnt6o/image/upload/v1626613971/AboutUs/collage3_n13s1l-min-min_kbccyw.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className=" flex justify-center ">
                <img
                  src="https://res.cloudinary.com/dtfecnt6o/image/upload/v1626613970/AboutUs/collage4_pkzzxg-min_lznyc8.webp"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide className=" flex justify-center ">
                <img
                  src="https://res.cloudinary.com/dtfecnt6o/image/upload/v1626613970/AboutUs/collage6_ulbfvt-min_vdebma.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className=" flex justify-center ">
                {/* <div className="w-3/10  "></div> */}
                <img
                  src="https://res.cloudinary.com/dtfecnt6o/image/upload/v1628674701/AboutUs/aboutP_zqiqyr.webp"
                  alt=""
                />
                {/* <div className="w-3/10"></div> */}
              </SwiperSlide>
            </Swiper>
          </div>

          <p class="text-justify customp    text-gray-700">
            ahum - art heart u and mind is a trust which was founded in 2015
            with the aim of connecting art and community. Today this has become
            very important. Though we are moving towards a more civilized world,
            we seem to be losing the innate quality of being humane. There is an
            extreme amount of stress, impatience and aggression in the
            transactional nature of our daily life. Participating in artistic
            pursuits, as an artist or as a connoisseur, helps us pause, reflect
            and introspect. It puts us in touch with our sensitive sides and
            builds a more humane and understanding society. ahum is working
            towards bringing this connection through various activities. To name
            a few:
            <ol className="mt-2">
              <li>Workshops</li>
              <li>Art Residencies</li>
              <li>Community Outreach programs with the underprivileged</li>
              <li>Curated performances</li>
              <li>Immersive cultural experiences</li>
            </ol>
          </p>
        </div>

        <div
          className="row justify-content-center align-items-center mx-0 py-5"
          style={{
            background: "#D7CEC7",
            minHeight: "xxx",
            overflow: "hidden",
          }}
        >
          <div className="col-md-1"></div>
          <div className="col-md-4 md:justify-content-end md:align-self-center md:pr-5">
            <div className="squarepic1"></div>
          </div>

          <div className="col-md-6 nattext  " id="block1">
            <h5 className="pt-4 pb-1 text-lg" style={{ fontWeight: "600" }}>
              About Anuradha Venkataraman
            </h5>
            <h5 style={{ fontWeight: "400" }}>
              Founder, Dancer, Choreographer
            </h5>
            <p className="customp7 ">
              <br />
              Anuradha is a Bharatanatyam dancer and has trained under
              Padmabhushan Dr. Saroja Vaidyanathan at Ganesa Natyalaya. Being an
              'A' graded artist of Delhi Doordarshan and an empanelled artist of
              ICCR, she has been dancing professionally for the past twenty
              years. Some of the productions choreographed by her are: "Pratham
              Parth", Jananyey Namah", "Vaidehi", “Stories Unearthed”, a site-
              specific work, 6 feet land and us & Female Gaze. Anuradha has been
              an Artist in residence at TUIDA (South Korea) and OMI ( York).
              Under ICCR, she has performed in Sarajevo, Poland, Germany,
              Denmark and Luxembourg. Academically, she is a gold medalist in
              Mphil- Cultural Studies from Jain University. With this
              background, it was natural for her to create a platform where she
              could bring art and society closer in together and try and create
              a beautiful community. Ahum was born out of this desire.
            </p>
          </div>
          <div className="col-md-1"></div>
          <div
            className="row justify-content-center align-items-center mx-0 py-5"
            style={{
              background: "#D7CEC7",
              minHeight: "xxx",
              overflow: "hidden",
            }}
          >
            <div className="col-md-1"></div>
            <div className="col-md-4  justify-content-end align-self-center pr-5">
              <div className="squarepic2 "></div>
            </div>

            <div className="col-md-6 nattext" id="block1">
              <h5 className="pt-4 pb-1 text-lg" style={{ fontWeight: "600" }}>
                About Natarajan Ramamurthy
              </h5>
              <h5 style={{ fontWeight: "400" }}>Founder</h5>
              <p className="customp7">
                <br />
                An engineer by profession, Natarajan has always been a patron of
                arts. This engagement deepened after marrying Anuradha and when
                she decided to start ahum, he was a natural partner. With his
                20+ years of corporate experience, Natarajan believes that the
                ecosystem of arts will benefit from a dash of corporate
                organization. He believes that arts matter because more than any
                other human endeavor it possesses the capacity to move us, which
                brings out the best in us humans.
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
