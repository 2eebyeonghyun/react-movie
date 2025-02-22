import MainSwiper from "@components/layout/SwiperSlide";

function MainPage() {
  return (
    <main className="main main-page">
      <section className="section section01">
        <div className="slide-wrap">
          <h2 className="a11y-hidden">메인 슬라이드 영역</h2>
          <MainSwiper />
        </div>
      </section>
    </main>
  );
}

export default MainPage;
