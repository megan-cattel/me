import React from "react";
import cartoon from "../images/newcartoon.png"

function Home() {
  return (
    <div className="vh-100">
        <div className="row justify-content-center vh-100 p-lg-5 p-md-3">
            <div className="col col-12 col-md-8 home align-items-center my-auto">
                <img src={cartoon} className="img-fluid pt-5 pb-5" alt="homepage_picture" />
                <div className="text-left">
                  <div className="intro-home">
                    <p className="p-2"><b><span className="intro-red">Hi, I’m <a href={process.env.PUBLIC_URL + "/#/about"}>Megan</a></span>, a freelance journalist and audio producer based in NYC.</b></p>
                    <p className="p-2"><b>→ Here are links to my published <a href={process.env.PUBLIC_URL + "/#/writing"}>writing</a>, <a href={process.env.PUBLIC_URL + "/#/audio"}>audio</a> and <a href={process.env.PUBLIC_URL + "/#/fact-checking"}>fact-checking</a> work.</b></p>
                  </div> 
                    <p className="p-2">↳ My reporting can be found at <a href="https://www.wbur.org/inside/staff/megan-cattel">WBUR</a>, <a href="https://www.teenvogue.com/contributor/megan-cattel">Teen Vogue</a>, <a href="https://www.goldthread2.com/author/megan-cattel">Goldthread</a> (a South China Morning Post imprint), <a href="https://news.stlpublicradio.org/people/megan-cattel">St. Louis Public Radio</a>, <a href="https://supchina.com/author/megancattel/">SupChina</a>, and <a href="https://megancattel.contently.com/">elsewhere</a>. I’ve also taken research assignments for iHeartMedia’s podcast division.</p>
                    <p className="p-2">↳ I serve as board member and head podcast editor at <a href="https://nuvoices.com/">NüVoices</a>, a collective which supports marginalized voices publishing work about China, Taiwan, and Hong Kong.</p>
                    <p className="p-2">Thank you for visiting my website!</p>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;