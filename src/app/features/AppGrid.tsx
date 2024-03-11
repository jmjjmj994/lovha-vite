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
          <article key={id}>
            <img
              src="http://unsplash.it/800/800?random&gravity=center"
              alt=""
            />
            <div>
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
            <a href={path}>{label}</a>
          </article>
        )
      )}
    </>
  );
}

export default AppGrid;
