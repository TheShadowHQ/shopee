import styles from "./Carousel.module.scss";

const Carousel = () => {
  const categoryItems = [
    {
      key: "bao-ve-suc-khoe",
      image: "images/bao-ve-suc-khoe.png",
      text: "Bảo vệ sức khỏe",
    },
    {
      key: "gi-cung-re",
      image: "images/gi-cung-re.png",
      text: "Gì Cũng Rẻ - Mua Là Freeship",
    },
    {
      key: "khung-gio-san-sale",
      image: "images/khung-gio-san-sale.png",
      text: "Khung Giờ Săn Sale",
    },
    {
      key: "thu-4-freeship",
      image: "images/thu-4-freeship.png",
      text: "Thứ 4 Freeship - x4 Ưu Đãi",
    },
    {
      key: "hoan-xu-10%",
      image: "images/hoan-xu-10.png",
      text: "Hoàn Xu 10% - Lên Đến 50K",
    },
    {
      key: "hang-hieu-50%",
      image: "images/hang-hieu-50.png",
      text: "Hàng Hiệu -50%",
    },
    {
      key: "hang-quoc-te",
      image: "images/hang-quoc-te.png",
      text: "Hàng Quốc Tế - Deal Sốc 9K",
    },
    {
      key: "deal-soc",
      image: "images/deal-soc.png",
      text: "Deal Sốc Từ 1K",
    },
    {
      key: "nap-the",
      image: "images/nap-the.png",
      text: "Nạp Thẻ & Dịch Vụ",
    },
  ];

  return (
    <>
      <section className={`d-flex wrapper ${styles.carouselSection}`}>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/slide-1.png"
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/slide-2.png"
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/slide-3.png"
                className="d-block w-100"
                alt="Slide 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div
          className={`${styles.carouselAside} ms-2 d-flex flex-column justify-content-between`}
        >
          <img
            src="images/slide-aside-1.png"
            alt=""
            className="d-block w-100"
          />
          <img
            src="images/slide-aside-2.png"
            alt=""
            className="d-block w-100"
          />
        </div>
      </section>

      <section className="wrapper d-flex justify-content-around mt-3">
        {categoryItems.map((item) => {
          return (
            <div
              className={`${styles.carouselCategoryItem} d-flex flex-column align-items-center`}
              key={item.key}
            >
              <img
                src={item.image}
                alt=""
                className={`d-block ${styles.carouselCategoryItemImg}`}
              />
              <p className={`text-center mt-2 ${styles.carouselCategoryItemP}`}>
                {item.text}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Carousel;
