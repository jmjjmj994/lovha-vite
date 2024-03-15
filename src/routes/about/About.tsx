import AboutLayout from './features/Layout/AboutLayout';
import { Helmet } from 'react-helmet-async';
function About() {
  return (
    <>
      <Helmet>
        <title>Lovha Studio | Om oss</title>
        <meta name="description" content="Om Lovha Studio" />
      </Helmet>
      <div className=" about-wrapper wrapper min-h-[100vh] m-auto flex flex-col justify-between ">
        <AboutLayout />
      </div>
    </>
  );
}
export default About;
