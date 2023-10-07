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
          <img
            src="https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABX6A6P7qXvE25swQSZWs1c_Do8UK0s0hs0e4GWKwJX4sdlrjhEx-N_3PE0N5E_GYquvfYyRZ5U2LNIh096EFcZo2zLvGzRG2Z6N-.webp?r=235"
            alt=""
          />
        </div>
        <div className="my-3 flex gap-4 justify-between items-start">
          <div className="flex-1">
            <div className="flex gap-2">
              <span>2020</span>
              <span>3 temporadas</span>
              <span className="px-1 py-[2px] border text-xs">HD</span>
            </div>
            <p className="mt-2 text-sm">
              <span className="border px-1 py-[2px] text-xs">16+</span>
              &nbsp;&nbsp;&nbsp;<span>lenguaje inapropiado, etc</span>
            </p>
            <h2 className="font-semibold text-2xl my-4">T:E1 Secretos</h2>
            <p className="text-sm">
              2019. La desaparición de un niño local aterroriza a los habitantes
              de Winden, un pueblito alemán con una historia tan trágica como
              extraña.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[30%]">
            <DetailListDescription
              title="Elenco"
              list={title.jawSummary.cast}
            />
            <DetailListDescription
              title="Géneros"
              list={title.jawSummary.genres}
            />
            <DetailListDescription
              title="Este titulo es"
              list={title.jawSummary.tags}
            />
          </div>
        </div>
      </div>
    </>
  );
}
