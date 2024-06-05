import { useMemo } from "react";
import PropTypes from "prop-types";

const Chris = ({
  className = "",
  pexelsPixabay1644552,
  pexelsAnastasiaShuraeva44,
  emilieJones,
  propBorderRadius,
  propBackgroundImage,
  propBorderRadius1,
  propMinWidth,
}) => {
  const chrisStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundImage: propBackgroundImage,
    };
  }, [propBorderRadius, propBackgroundImage]);

  const pexelsPixabay1644552IconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  const emilieJonesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`w-[244px] rounded-3xs flex flex-row items-end justify-start pt-[62px] px-3.5 pb-3.5 box-border gap-[14px] bg-[url('/public/pexelspixabay164455-2@2x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-white font-inter ${className}`}
      style={chrisStyle}
    >
      <img
        className="h-[126px] w-[244px] relative rounded-3xs object-cover hidden"
        alt=""
        src={pexelsPixabay1644552}
        style={pexelsPixabay1644552IconStyle}
      />
      <div className="h-[50px] w-12 relative">
        <img
          className="absolute top-[2px] left-[0px] w-12 h-12 object-cover z-[2]"
          loading="lazy"
          alt=""
          src={pexelsAnastasiaShuraeva44}
        />
        <div className="absolute top-[0px] left-[36px] rounded-[50%] bg-limegreen box-border w-3 h-3 z-[3] border-[0px] border-solid border-white" />
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
        <div className="flex flex-col items-start justify-start gap-[7px]">
          <b
            className="relative font-semibold inline-block min-w-[97px] z-[1]"
            style={emilieJonesStyle}
          >
            {emilieJones}
          </b>
          <b className="relative text-xs font-semibold inline-block min-w-[102px] z-[1]">
            @thewildwithyou
          </b>
        </div>
      </div>
    </div>
  );
};

Chris.propTypes = {
  className: PropTypes.string,
  pexelsPixabay1644552: PropTypes.string,
  pexelsAnastasiaShuraeva44: PropTypes.string,
  emilieJones: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propBorderRadius1: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Chris;
