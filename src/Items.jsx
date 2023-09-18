import React from "react";

const Items = ({ data, setResolved }) => {
  const [popover, setPopover] = React.useState(null);

  return (
    <div className="max-h-[400px] overflow-y-auto w-10/12 lg:w-6/12 2xl:w-3/12 mx-auto px-[8px]">
      <div className="flex flex-col justify-center items-center gap-[32px]">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex items-center mx-auto w-full bg-white/25 border-[1px] border-white ${
                item.resolved ? "resolved" : ""
              } `}
            >
              <button
                onClick={() => {
                  setResolved([...data], (data[index].resolved = true));
                }}
                className="w-[60px] py-[16px] text-white 
              font-extralight"
                disabled={item.resolved}
              >
                {item.resolved ? "X" : ""}
              </button>
              <p className="grow p-[16px] uppercase font-extralight text-white text-start border-x-[1px]">
                {item.item}
              </p>
              <button
                onMouseEnter={() => setPopover(true)}
                onMouseLeave={() => setPopover(false)}
                onClick={() =>
                  setResolved(
                    data.filter((current, currentIndex) =>
                      index === currentIndex ? null : current
                    )
                  )
                }
                className="w-[32px] py-[16px] hover:w-[72px] hover:bg-white hover:animate-pulse stroke-white hover:stroke-asteroid-100 duration-300 relative"
                disabled={item.resolved}
              >
                <svg
                  className="block mx-auto "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=""
                    d="M4 6.17647H20M9 3H15M10 16.7647V10.4118M14 16.7647V10.4118M15.5 21H8.5C7.39543 21 6.5 20.0519 6.5 18.8824L6.0434 7.27937C6.01973 6.67783 6.47392 6.17647 7.04253 6.17647H16.9575C17.5261 6.17647 17.9803 6.67783 17.9566 7.27937L17.5 18.8824C17.5 20.0519 16.6046 21 15.5 21Z"
                    stroke="inherit"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
