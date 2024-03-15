import { AppData, AppLayoutData } from '../data';
import dummy from '../../../assets/luis-vasconcelos-wxj729MaPRY-unsplash.jpg';
function AppCards() {
  return (
    <>
      {AppData.map(
        ({ id, image, path, label, title, content }: AppLayoutData) => (
          <article
            key={id}
            className="bg-bg-secondary-clr  relative flex max-w-[40rem] h-[15rem] w-full mt-20  test"
          >
            <img
              src={dummy}
              className="absolute w-full h-full object-cover aspect-auto"
              alt=""
            />
            <div className=" w-full z-[1]  flex-col flex items-center justify-center  h-full">
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
