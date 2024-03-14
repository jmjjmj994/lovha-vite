import imgS from '../../../assets/alle-mobile.webp';
import imgM from '../../../assets/alle-tablet.webp';
import imgL from '../../../assets/alle-desktop.webp';
function AboutBanner() {
  return (
    <div className="lovha-team    bg-orange-500">
      <img
        className="h-full w-full object-cover"
        src={imgL}
        alt=""
        srcSet={`${imgS} 480w, ${imgM} 800w, ${imgL} 1200w`}
      />
    </div>
  );
}
export default AboutBanner;
