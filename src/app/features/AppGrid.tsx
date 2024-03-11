import { AppData, AppGridData } from './appGridData';
function AppGrid() {
  return (
    <div className="app-grid bg-orange-500 h-full w-full">
      <AppGridCards />
    </div>
  );
}

function AppGridCards() {
  return (
    <>
      {AppGridData.map(
        ({ id, image, path, label, title, content }: AppData) => (
          <article key={id} className="flex">
            <div className="max-w-[20rem] w-full">
              <img
                className="object-cover aspect-square h-full w-full"
                src="http://unsplash.it/800/800?random&gravity=center"
                alt=""
              />
            </div>

            <div className="bg-pink-500 flex grow flex-col relative">
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

export default AppGrid;
