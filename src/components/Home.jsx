import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech'S mart</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore laudantium distinctio aut deserunt consequatur consequuntur accusamus, omnis cupiditate placeat fugit ea laborum iure obcaecati natus? Odio animi ex aliquid quae nam dolorem eaque, rerum repellat eum perspiciatis quaerat doloremque neque est maxime, eligendi nobis atque esse aliquam pariatur cupiditate asperiores aspernatur quam et eius. Ipsam quam ut illo blanditiis cumque odit nemo atque maxime. Molestiae, deleniti in quas similique blanditiis eos porro rerum necessitatibus iste ea sed enim natus, reiciendis voluptates nobis dolorum, hic ipsam et fugit impedit eius mollitia voluptatibus neque dicta? Dicta eaque vero aliquid velit fugiat consectetur ipsa doloribus, saepe porro eligendi deserunt placeat. Aperiam debitis repellendus necessitatibus quod eum soluta iure aut, commodi assumenda corrupti praesentium quam illo ducimus iste, velit tempora aliquam ipsam. Magni maxime eius nihil praesentium illo fuga earum perferendis soluta at blanditiis ipsa sint, alias quod adipisci architecto quasi tempora. Dignissimos libero veritatis sint reprehenderit laudantium natus dolor adipisci distinctio eum aspernatur doloremque quas, aperiam provident accusantium at tempora repudiandae sit temporibus alias et aliquid? Doloremque sit deleniti facilis aliquam amet beatae veniam. Vero alias nobis aperiam sapiente consequatur, architecto, cupiditate quia quidem deserunt dignissimos beatae enim error obcaecati incidunt qui voluptas.</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>

    </>

  )
}

export default Home
