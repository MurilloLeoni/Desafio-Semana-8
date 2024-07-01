import img from "../assets/img/cover.png";

const Tvshow = () => {
  return (
    <div>
      <h1>Episódios</h1>
      <div className="bg-neutral-600 pb-11 ">
        <div className="ml-16 pt-2">
          <div className="grid grid-cols-2 gap-20   md:grid-cols-2  max-w-[1316px] p-2 ">
            <button className="bg-opacity-white-10 w-[640px] rounded-lg flex  mb-4 md:flex-row flex-col">
              <img
                src={img}
                alt={`Cover `}
                className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full md:w-[180px] h-auto md:h-full"
              />
              <div className="flex flex-col  py-2 px-4">
                <div className="flex items-center justify-between w-full">
                  <h3 className=" body-review-bold text-neutral-100 ">
                    Glorious Purpose
                  </h3>
                  <p className=" text-neutral-200 body-small">50 min</p>
                </div>
                <p className="body-small text-neutral-200 self-end">
                  description Mobius puts Loki to work, but not everyone at TVA
                  is thrilled about the God of Mischiefs presence.
                </p>

              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tvshow;
