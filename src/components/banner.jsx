import bannerImage from '../assets/banner.png';

function Banner() {
    return (
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
      </div>
    );
  }
  
export default Banner;