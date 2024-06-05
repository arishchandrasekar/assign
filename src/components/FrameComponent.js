import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[1200px] flex flex-row items-start justify-center py-0 pr-0 pl-[3px] box-border max-w-full text-left text-smi text-black font-inter ${className}`}
    >
      <div className="w-[631px] flex flex-row flex-wrap items-end justify-start gap-[16px] max-w-full">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
          <div className="w-9 h-3.5 relative">
            <img
              className="absolute top-[0px] left-[21px] w-[15px] h-3.5 object-cover"
              loading="lazy"
              alt=""
              src="/star-1@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[15px] h-3.5 object-cover"
              loading="lazy"
              alt=""
              src="/star-1@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[20.7px] min-w-[376px] max-w-full mq450:min-w-full mq675:flex-wrap">
          <div className="w-[251.3px] flex flex-col items-start justify-start gap-[15px]">
            <div className="relative font-semibold">
              Modern wall DecorFramed painting
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-5xl font-barlow">
              <b className="relative font-semibold inline-block min-w-[80px] whitespace-nowrap mq450:text-lgi">
                $199.99
              </b>
              <div className="w-[95px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
                  <img
                    className="h-3.5 w-[15px] relative object-cover min-h-[14px]"
                    loading="lazy"
                    alt=""
                    src="/star-2-1@2x.png"
                  />
                  <img
                    className="h-3.5 w-[15px] relative object-cover min-h-[14px]"
                    loading="lazy"
                    alt=""
                    src="/star-2-1@2x.png"
                  />
                  <img
                    className="h-3.5 w-[15px] relative object-cover min-h-[14px]"
                    loading="lazy"
                    alt=""
                    src="/star-2-1@2x.png"
                  />
                  <img
                    className="h-3.5 w-[15px] relative object-cover min-h-[14px]"
                    loading="lazy"
                    alt=""
                    src="/star-2-1@2x.png"
                  />
                  <img
                    className="h-3.5 w-[15px] relative object-cover min-h-[14px]"
                    alt=""
                    src="/star-2-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[200px]">
            <div className="relative font-semibold">
              Modern wall DecorFramed painting
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-5xl font-barlow">
              <b className="relative font-semibold inline-block min-w-[80px] whitespace-nowrap mq450:text-lgi">
                $199.99
              </b>
              <div className="w-[150.7px] flex flex-row items-start justify-start gap-[20.7px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
                    <img
                      className="h-3.5 w-[15px] relative object-cover min-h-[14px]"
                      alt=""
                      src="/star-2-1@2x.png"
                    />
                    <img
                      className="h-3.5 w-[15px] relative object-cover min-h-[14px]"
                      alt=""
                      src="/star-2-1@2x.png"
                    />
                    <img
                      className="h-3.5 w-[15px] relative object-cover min-h-[14px]"
                      alt=""
                      src="/star-2-1@2x.png"
                    />
                    <img
                      className="h-3.5 w-[15px] relative object-cover min-h-[14px]"
                      alt=""
                      src="/star-2-1@2x.png"
                    />
                    <img
                      className="h-3.5 w-[15px] relative object-cover min-h-[14px]"
                      alt=""
                      src="/star-2-1@2x.png"
                    />
                  </div>
                </div>
                <b className="relative font-semibold inline-block min-w-[35px] whitespace-nowrap mq450:text-lgi">
                  $19
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
