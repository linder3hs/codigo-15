export default function Summary() {
  return (
    <div className="bg-primary rounded-md text-white px-5 py-10 my-5">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Tip Amount</h3>
          <p className="text-gray-300">/ person</p>
        </div>
        <div>
          <h4 className="text-3xl text-green-200 font-semibold" id="tip-amount">
            $0.00
          </h4>
        </div>
      </div>

      <div className="flex justify-between items-center mt-7">
        <div>
          <h3 className="font-semibold">Total</h3>
          <p className="text-gray-300">/ person</p>
        </div>
        <div>
          <h4 className="text-3xl text-green-200 font-semibold" id="total">
            $0.00
          </h4>
        </div>
      </div>
      <div className="mt-10 text-center">
        <button
          id="btn-reset"
          className="w-full text-green-950 bg-green-100 p-3 rounded-md font-semibold text-xl"
        >
          RESET
        </button>
      </div>
    </div>
  );
}
