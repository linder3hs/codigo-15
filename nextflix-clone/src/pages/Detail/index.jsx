import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailListDescription } from "../../components";

export default function Detail() {
  const { titleId } = useParams();

  const title = useSelector((state) =>
    state.netflix.titles.find(
      (title) => title.jawSummary.id === Number(titleId)
    )
  );

  console.log(title);

  return (
    <>
      <div className="max-w-3xl m-auto">
        <div>
          <img src={title.jawSummary.backgroundImage.url} alt="" />
        </div>
        <div className="my-3 flex gap-4 justify-between items-start">
          <div className="flex-1">
            <div className="flex gap-2">
              <span>{title.jawSummary.releaseYear}</span>
              <span>{title.jawSummary.numSeasonsLabel}</span>
              {title.jawSummary.delivery.hasHD && (
                <span className="px-1 py-[2px] border text-xs">HD</span>
              )}
            </div>
            <p className="mt-2 text-sm">
              <span className="border px-1 py-[2px] text-xs">
                {title.jawSummary.maturity.rating.value}
              </span>
              &nbsp;&nbsp;&nbsp;
              <span>
                {title.jawSummary.maturity.rating.specificRatingReason}
              </span>
            </p>
            <h2 className="font-semibold text-2xl my-4">T:E1 Secretos</h2>
            <p className="text-sm">
              {title.jawSummary.currentContextualSynopsis.text}
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[30%]">
            <DetailListDescription
              title="Cast"
              list={title.jawSummary.cast}
            />
            <DetailListDescription
              title="Genres"
              list={title.jawSummary.genres}
            />
            <DetailListDescription
              title="This title is"
              list={title.jawSummary.tags}
            />
          </div>
        </div>
      </div>
    </>
  );
}
