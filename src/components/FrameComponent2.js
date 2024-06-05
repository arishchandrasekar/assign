import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = ({
  className = "",
  thomas,
  pexelsAnastasiaShuraeva44,
  thomasEdward,
  propAlignSelf,
  propWidth,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const thomasEdwardStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-end justify-start pt-[62px] px-3.5 pb-3.5 relative gap-[13.5px] text-left text-base text-white font-inter ${className}`}
      style={frameDivStyle}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={thomas}
      />
      <div className="h-[50px] w-[48.5px] relative">
        <img
          className="absolute top-[2px] left-[0px] w-12 h-12 object-cover z-[1]"
          loading="lazy"
          alt=""
          src={pexelsAnastasiaShuraeva44}
        />
        <div className="absolute top-[0px] left-[36.5px] rounded-[50%] bg-limegreen box-border w-3 h-3 z-[2] border-[0px] border-solid border-white" />
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
        <div className="flex flex-col items-start justify-start gap-[6px]">
          <b
            className="relative font-semibold inline-block min-w-[125px] z-[1]"
            style={thomasEdwardStyle}
          >
            {thomasEdward}
          </b>
          <b className="relative text-xs font-semibold inline-block min-w-[102px] z-[1]">
            @thewildwithyou
          </b>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  thomas: PropTypes.string,
  pexelsAnastasiaShuraeva44: PropTypes.string,
  thomasEdward: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent2;
