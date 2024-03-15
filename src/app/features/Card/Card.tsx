import { AppData, AppLayoutData } from '../data';
function AppCards() {
  return (
    <>
      {AppData.map(
        ({ id, image, path, label, title, content }: AppLayoutData) => (
          <article
            key={id}
            className="bg-bg-secondary-clr flex max-w-[50rem] h-[15rem] w-full mt-20  test"
          >
            <div className="max-w-[18rem] w-full">
              <img
                className="object-cover aspect-square h-full w-full"
                src="http://unsplash.it/800/800?random&gravity=center"
                alt=""
              />
            </div>

            <div className=" flex grow flex-col relative align-middle">
              <h2>{title}</h2>
              <p>{content}</p>
              <a
                role="button"
                className="absolute bottom-0 lg:static bg-blue-B100"
                href={path}
              >
                {label}
              </a>
            </div>
          </article>
        )
      )}
    </>
  );
}
export default AppCards;
