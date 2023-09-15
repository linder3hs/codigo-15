const containerBill = document.querySelector("#container-bill");
const inputBill = document.querySelector("#input-bill");
const containerPercentage = document.querySelector("#container-percentage");

containerBill.onclick = () => inputBill.focus();

function renderItemPercentage(value) {
  return `<div
            class="bg-[#00494d] hover:bg-green-100 hover:text-green-950 cursor-pointer text-white font-semibold text-xl rounded-md p-2 text-center"
          >
            <span>${value}</span>
          </div>`;
}

function generatePercentageList() {
  const percentages = ["5%", "10%", "15%", "25%", "50%"];

  percentages.forEach((percentage) => {
    containerPercentage.innerHTML += renderItemPercentage(percentage);
  });

  containerPercentage.innerHTML += "<input placeholder='custom' />";
}

generatePercentageList();
