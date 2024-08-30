export function NumberDisplay() {
  return (
    <div className="flex flex-col items-center">
      <button className="bg-gray-200 w-28 h-14 bg-white border border-black">
        Prev
      </button>
      <div className="flex">
        <div className="border border-black  text-4xl w-16 h-16 flex justify-center items-center">
          0
        </div>
        <div className="border border-black  text-4xl w-16 h-16 flex justify-center items-center">
          1
        </div>
        <div className="border border-black  text-4xl w-16 h-16 flex justify-center items-center">
          2
        </div>
        <div className="border border-black  text-4xl w-16 h-16 flex justify-center items-center">
          3
        </div>
        <div className="border border-black text-4xl  w-16 h-16 flex justify-center items-center">
          4
        </div>
        <div className="border border-black  text-4xl w-16 h-16 flex justify-center items-center">
          5
        </div>
      </div>
      <button className="bg-gray-200 w-28 h-14 bg-white border border-black">
        Next
      </button>
    </div>
  );
}
