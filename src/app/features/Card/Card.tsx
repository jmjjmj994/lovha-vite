import { AppData, AppLayoutData } from '../data';
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
export default AppCards;