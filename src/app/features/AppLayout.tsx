import { useEffect, useState } from 'react';
import { AppData, AppLayoutData } from './data';
import sanityClient from '../../client/client';

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
  console.log(test);
  return (
    <div className="flex  flex-col items-center">
      <AppBanner />
      <div className="app-layout app-wrapper wrapper bg-orange-500 h-full w-full">
        <AppCards />
      </div>
    </div>
  );
}

function AppCards() {
  return (
    <>
      {AppData.map(
        ({ id, image, path, label, title, content }: AppLayoutData) => (
          <article key={id} className="flex max-w-[60rem] w-full mt-20 h-auto">
            <div className="max-w-[18rem] w-full">
              <img
                className="object-cover aspect-square h-full w-full"
                src="http://unsplash.it/800/800?random&gravity=center"
                alt=""
              />
            </div>

            <div className="bg-pink-500 flex grow flex-col relative align-middle">
              <h2>{title}</h2>
              <p>{content}</p>
              <a className="absolute bottom-0" href={path}>
                {label}
              </a>
            </div>
          </article>
        )
      )}
    </>
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
