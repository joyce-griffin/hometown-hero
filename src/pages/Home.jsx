import React, { useRef } from 'react';
import CarouselSlider from '../components/CarouselSlider';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';


const Home = () => {
  const videoRef = useRef(null);
  const { t } = useTranslation();

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <>
      {/* First Section */}
      <section className="bg-black min-h-screen flex flex-col items-center justify-center p-8">
        <CarouselSlider
          data={Array(5).fill({ name: t('coming_soon'), image: '/question-mark.jpeg' })}
        />

        <h1 className='text-[6.875rem] text-center uppercase font-extrabold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-5'>
          {t('furious_title')}
        </h1>

        <p className="text-xl text-center font-medium text-[#adadad] max-w-[1523px] mx-auto pb-10">
          {t('furious_description')}
        </p>

        <p className="text-xl text-center font-medium text-[#adadad] max-w-[1523px] mx-auto pb-10">
          {t('furious_extra')}
        </p>

        <h4 className="text-[52px] font-extrabold text-center bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent">
          {t('athletes_partnered_with')}
        </h4>

        <h2 className="text-[130px] font-semibold text-white text-center mb-12 mt-[-30px]">10,023</h2>

        <Link to='explore-athletes' className="bg-[#d4bc6d] font-extrabold px-[23px] py-[14px] text-[1.156rem] rounded-[11.6px] mt-[-25px]">
          {t('view_marketplace')}
        </Link>
      </section>

      {/* Second Section */}
      <section className="pt-[105px]">
        <div className="flex gap-[22px] justify-center">
          <h2 className="text-[5.9rem] font-extrabold text-center bg-[url(/texture.png)] bg-no-repeat bg-center bg-cover bg-clip-text text-transparent mb-8">
            {t('your_story')}
          </h2>
          <h2 className="text-[5.9rem] font-extrabold text-center bg-[url(/texture.png)] bg-no-repeat bg-center bg-cover bg-clip-text text-transparent mb-8">
            {t('your_brand')}
          </h2>
          <h2 className="text-[5.9rem] font-extrabold text-center bg-[url(/texture.png)] bg-no-repeat bg-center bg-cover bg-clip-text text-transparent mb-8">
            {t('your_legacy')}
          </h2>
        </div>
      </section>

      {/* Third Section */}
      <section className="pt-[195px] pb-[98px]">
        <div className="2xl:max-w-[1764px] lg:max-w-[1284px] m-auto">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-[4.588rem] capitalize bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-10">
                {t('launch_title')}
              </h2>
              <p className="text-[1.125rem] text-white mb-10">
                {t('launch_text')}
              </p>
              <Link to='/athlete-signup' className="bg-[#d4bc6d] rounded-full px-[38px] py-[13px] text-black font-medium text-[0.875rem] mb-9">
                {t('join_family')}
              </Link>
            </div>
            <div>
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-black flex items-center justify-center">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="max-h-full max-w-full object-contain"
                >
                  <source src="/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="pt-[195px] pb-[98px]">
        <div className="2xl:max-w-[1764px] lg:max-w-[1284px] m-auto">
          <div className="grid grid-cols-2 gap-20 items-center justify-between">
            <div>
              <span className="inline-block bg-[#3b3b3b] text-[#d4bc6d] text-[0.875rem] font-medium px-5 py-2 rounded-[8px] mb-9 tracking-wider uppercase">
                {t('about_us')}
              </span>

              <h2 className="text-[4.588rem] capitalize bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-10">
                {t('about_title')}
              </h2>
              <p className="text-[1.125rem] text-white mb-10">
                {t('about_text')}
              </p>
              <Link to='/our-team' className="bg-[#d4bc6d] rounded-full px-[38px] py-[13px] text-black font-medium text-[0.875rem] mb-9">
                {t('learn_more')}
              </Link>
            </div>
            <div>
              <img src="/alek.jpeg" alt="about us" className="w-[650px] h-auto object-fill object-top rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="w-full h-[100dvh] bg-black">
        <div className="flex items-center justify-center h-full w-full">
          <div className="text-center">
            <span className="inline-block bg-[#3b3b3b] text-[#d4bc6d] text-[0.875rem] font-medium px-5 py-2 rounded-[8px] mb-9 tracking-wider uppercase">
              {t('why_join_us')}
            </span>
            <h2 className="text-[7.5rem] capitalize font-medium bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-10">
              {t('brand_marketplace')}
            </h2>
            <Link to='/athlete-signup' className="bg-[#d4bc6d] rounded-full px-[38px] py-[13px] text-black font-medium text-[0.875rem] mb-9">
              {t('join_family')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
