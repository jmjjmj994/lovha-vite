import { AppData, AppLayoutData } from '../data';
import dummy from '../../../assets/luis-vasconcelos-wxj729MaPRY-unsplash.jpg';
function AppCards() {
  return (
    <>
      {AppData.map(
        ({ id, image, path, label, title, content }: AppLayoutData) => (
          <article
            key={id}
            className="bg-bg-secondary-clr  relative flex max-w-[70%] w-full  mt-20  test"
          >
            <div className="w-full max-h-[30rem]">
              <img
                src={dummy}
                className="w-full  h-full object-cover aspect-auto"
                alt=""
              />
            </div>

            <div className="absolute w-full z-[1]  flex-col flex items-center justify-center  h-full">
              <h1 className="text-white">Kort</h1>
              <button className="bg-blue-B500 px-[20px] py–[20px] text-white text-xl">
                Les mer
              </button>
            </div>
          </article>
        )
      )}
    </>
  );
}
export default AppCards;
