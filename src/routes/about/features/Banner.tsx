import imgAlle from '../../../assets/alle.jpg';
function AboutBanner() {
  return (
    <div className='h-[30vh] bg-orange-500'>
      <img className='object-cover aspect-square h-full w-full' src={imgAlle} alt="Image of the Lovha Studio team members" />
    </div>
  );
}
export default AboutBanner;
