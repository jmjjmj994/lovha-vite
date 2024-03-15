import { useEffect, useState } from 'react';

import Card from '../Card/Card';
import sanityClient from '../../../client/client';

function AppLayout() {
  const [test, setTest] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'game'] {
image
}`
      )
      .then((data) => setTest(data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex  flex-col items-center">
      <AppBanner />
      <div className="app-wrapper wrapper  h-full w-full flex flex-col justify-center items-center">
        <Card />
      </div>
    </div>
  );
}

function AppBanner() {
  return (
    <section className="bg-purple-500 w-full h-[50vh]">
      <img
        className="w-full h-full object-cover aspect-square"
        src="http://unsplash.it/1200/1200?random&gravity=center"
        alt=""
      />
    </section>
  );
}

export default AppLayout;
