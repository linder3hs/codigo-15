import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
          <img
            src="https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABX6A6P7qXvE25swQSZWs1c_Do8UK0s0hs0e4GWKwJX4sdlrjhEx-N_3PE0N5E_GYquvfYyRZ5U2LNIh096EFcZo2zLvGzRG2Z6N-.webp?r=235"
            alt=""
          />
        </div>
        <div className="my-3 flex gap-2">
          <span>2020</span>
          <span>3 temporadas</span>
          <span className="border px-1 py-[2px]">HD</span>
        </div>
      </div>
    </>
  );
}
