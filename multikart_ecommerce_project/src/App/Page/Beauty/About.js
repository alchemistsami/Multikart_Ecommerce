import React from "react";
import makeupKit from "../../../Assets/Image/makeup-kit.jpg";

const About = () => {
  return (
    <section className="pb-0">
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <img src={makeupKit} />
          </div>
          <div className="col-7 p-2 about-text">
            <h2>ABOUT US</h2>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium <br /> doloremque laudantium, totam rem aperiam.sit
              voluptatem accusantium <br /> doloremque laudantium,totam rem
              aperiam.
            </p>

            <div>
              <div className="d-flex justify-content-between m-2 pt-5  ">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxNh2AaZRnRl8fdwtx4cfkPALg8bR3OhJspLvkO42NfqtLY0n"
                    width={60}
                    className="pb-3"
                  />
                  <h5> Free Shipping</h5>
                </div>

                <div>
                  <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvXV5ZOi8VkzZ7FzZGosS7DzIWrkAGUSMZjsVr2nUlHzK4vmQ4"
                    width={60}
                    className="pb-3"
                  />
                  <h5> 24 X 7 Service </h5>
                </div>

                <div>
                  <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQiY5SVLc0-WVrcN4Bk_k-tzY5js-YKqk6efLFBv-UEX6-94GoC"
                    width={60}
                    className="pb-3"
                  />
                  <h5> Festival Offer</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center middle-div">
        <p> Special Offer</p>
        <h2>NEW PRODUCTS</h2>
      </div>

      {/* <div className="text-center middle-div">
        <p> Special Offer</p>
        <h2>PRODUCT TUTORIAL</h2>
      </div> */}

    </section>
  );
};

export default About;
