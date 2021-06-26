import React, { useEffect } from "react";
import ImageZoom from "react-medium-image-zoom";
import Carousel from "react-elastic-carousel";
import "styled-components";

// import car1 from ("https://res.cloudinary.com/ahum/image/upload/v1624519173/Ahum/collage1_h0ailx.jpg");
// import car2 from "https://res.cloudinary.com/ahum/image/upload/v1624519174/Ahum/collage2_kglhum.jpg";
// import car3 from "https://res.cloudinary.com/ahum/image/upload/v1624519796/Ahum/collage3_n13s1l.jpg";
// import car4 from "https://res.cloudinary.com/ahum/image/upload/v1624519177/Ahum/collage4_pkzzxg.jpg";
// import car5 from "https://res.cloudinary.com/ahum/image/upload/v1624519178/Ahum/collage5_je5r2a.jpg";
// import car6 from "https://res.cloudinary.com/ahum/image/upload/v1624519175/Ahum/collage6_ulbfvt.jpg";

function About() {
  const isMob = window.innerWidth < 767;

  return (
    <div class="wrapper">
      <div className="p-0 md:ml-20">
        <div class="container-fluid justify-content-center px-0">
          <div>
            {isMob ? (
              <div className="  w-screen justify-center bg-ahum-brown-collage py-4">
                <Carousel
                  itemsToShow={1}
                  className=" h-96 w-screen justify-center items-center"
                >
                  <div className="mt-20">
                    <ImageZoom
                      image={{
                        src: "https://res.cloudinary.com/ahum/image/upload/v1624519173/Ahum/collage1_h0ailx.jpg",
                        alt: "Golden Gate Bridge",
                      }}
                    />
                  </div>

                  <div className="mt-12">
                    <ImageZoom
                      image={{
                        src: "https://res.cloudinary.com/ahum/image/upload/v1624519174/Ahum/collage2_kglhum.jpg",
                        alt: "Golden Gate Bridge",
                      }}
                    />
                  </div>
                  <div className="mt-16">
                    <ImageZoom
                      image={{
                        src: "https://res.cloudinary.com/ahum/image/upload/v1624519796/Ahum/collage3_n13s1l.jpg",
                        alt: "Golden Gate Bridge",
                      }}
                    />
                  </div>

                  <div className="mt-14">
                    <ImageZoom
                      image={{
                        src: "https://res.cloudinary.com/ahum/image/upload/v1624519177/Ahum/collage4_pkzzxg.jpg",
                        alt: "Golden Gate Bridge",
                      }}
                    />
                  </div>

                  <div className="mt-14">
                    <ImageZoom
                      image={{
                        src: "https://res.cloudinary.com/ahum/image/upload/v1624519178/Ahum/collage5_je5r2a.jpg",
                        alt: "Golden Gate Bridge",
                      }}
                    />
                  </div>

                  <div className="mt-14">
                    <ImageZoom
                      image={{
                        src: "https://res.cloudinary.com/ahum/image/upload/v1624519175/Ahum/collage6_ulbfvt.jpg",
                        alt: "Golden Gate Bridge",
                      }}
                    />
                  </div>
                </Carousel>
              </div>
            ) : (
              <div className="bg-ahum-brown-collage md:block flex mt-10 md:h-max md:pl-24 py-10 lg:py-20">
                <div className="lg:mx-32 mx-10 ">
                  <div className="flex flex-row justify-center bg-gray-400 items-center">
                    <div className="mr-4">
                      <ImageZoom
                        image={{
                          src: "https://res.cloudinary.com/ahum/image/upload/v1624519173/Ahum/collage1_h0ailx.jpg",
                          alt: "Golden Gate Bridge",
                        }}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex flex-row justify-center items-center">
                        <div className="mr-4">
                          <ImageZoom
                            image={{
                              src: "https://res.cloudinary.com/ahum/image/upload/v1624519174/Ahum/collage2_kglhum.jpg",
                              alt: "Golden Gate Bridge",
                            }}
                          />
                        </div>
                        <div className="mr-4">
                          <ImageZoom
                            image={{
                              src: "https://res.cloudinary.com/ahum/image/upload/v1624519796/Ahum/collage3_n13s1l.jpg",
                              alt: "Golden Gate Bridge",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="mr-4">
                          <ImageZoom
                            image={{
                              src: "https://res.cloudinary.com/ahum/image/upload/v1624519177/Ahum/collage4_pkzzxg.jpg",
                              alt: "Golden Gate Bridge",
                            }}
                          />
                        </div>
                        <div className="mr-4">
                          <ImageZoom
                            image={{
                              src: "https://res.cloudinary.com/ahum/image/upload/v1624519178/Ahum/collage5_je5r2a.jpg",
                              alt: "Golden Gate Bridge",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <ImageZoom
                        image={{
                          src: "https://res.cloudinary.com/ahum/image/upload/v1624519175/Ahum/collage6_ulbfvt.jpg",
                          alt: "Golden Gate Bridge",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p class="text-justify customp text-gray-700">
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
            <p className="customp7">
              <br />I am a Bharatanatyam dancer and have trained under
              Padmabhushan Dr. Saroja Vaidyanathan at Ganesa Natyalaya. Being an
              'A' graded artist of Delhi Doordarshan and an empanelled artist of
              ICCR, I have been dancing professionally for the past twenty
              years. Some of the productions choreographed by me are: "Pratham
              Parth", Jananyey Namah", "Vaidehi", “Stories Unearthed”, a site-
              specific work, 6 feet land and us & Female Gaze. I have been an
              Artist in residence at TUIDA (South Korea) and OMI ( York). Under
              ICCR, I performed in Sarajevo, Poland, Germany, Denmark and
              Luxembourg. Academically, I am a gold medalist in Mphil- Cultural
              Studies from Jain University. With this background, it was natural
              for me to create a platform where I could bring art and society
              closer in together and try and create a beautiful community. Ahum
              was born out of this desire.
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
                arts. This engagement deepened after marrying Anu and when Anu
                decided to start ahum, he was a natural partner. With his 20+
                years of corporate experience, Natarajan believes that the
                ecosystem of arts will benefit from a dash of corporate
                organization. He believes that arts matter because more than any
                other human endeavor it possesses the capacity of move us, which
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
