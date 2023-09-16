const containerInputBill = document.querySelector("#container-input-bill");
const containerPercentage = document.querySelector("#container-percentage");

function setFocusInput(element) {
  element.children[1].focus();
}

function renderItemPercentage(value) {
  return `<div
            class="bg-[#00494d] hover:bg-green-100 hover:text-green-950 cursor-pointer text-white font-semibold text-xl rounded-md p-3 text-center"
          >
            <span>${value}</span>
          </div>`;
}

function renderInput(icon, placeholder, name) {
  return `<div
          class="flex items-center p-3 rounded-md bg-green-100/50 cursor-text"
          onclick="setFocusInput(this)"
        >
          <img src="${icon}" alt="" />
          <input
            type="text"
            name="${name}"
            placeholder="${placeholder}"
            class="w-full text-right outline-none bg-transparent text-green-900 text-xl font-semibold"
          />
        </div>`;
}

function generatePercentageList() {
  const percentages = ["5%", "10%", "15%", "25%", "50%"];

  percentages.forEach((percentage) => {
    containerPercentage.innerHTML += renderItemPercentage(percentage);
  });

  containerPercentage.innerHTML += renderInput(null, "Custom", "custom");
}

generatePercentageList();

containerInputBill.innerHTML = renderInput(
  "./assets/icon-dollar.svg",
  "0.0",
  "input-bill"
);
