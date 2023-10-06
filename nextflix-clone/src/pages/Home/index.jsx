import { useSelector } from "react-redux";

export default function Home() {
  const titles = useSelector((state) => state.netflix.titles);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-2 gap-y-3 md:gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {titles.length > 0 &&
          titles.map((title) => (
            <div key={title.jawSummary.id}>
              <img
                className="rounded hover:scale-125 md:hover:scale-150 transition duration-500 cursor-pointer object-cover"
                src={title.jawSummary.backgroundImage.url}
              />
            </div>
          ))}
      </div>
    </>
  );
}
