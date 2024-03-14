import Banner from './Banner';
import Content from './Content';
import Members from './Members';
function AboutLayout() {
  return (
    <div className="about-wrapper wrapper">
      <Banner />
      <Content />
      <Members />
    </div>
  );
}
export default AboutLayout;
