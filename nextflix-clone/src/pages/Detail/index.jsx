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
      <h1>Detalle de Pelicula/Serie {titleId}</h1>
    </>
  );
}
