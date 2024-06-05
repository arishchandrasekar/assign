import FrameComponent2 from "./FrameComponent2";
import Chris from "./Chris";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[260px] flex flex-col items-start justify-start gap-[30px] text-left text-lg text-black font-inter ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
        <button className="cursor-pointer [border:none] pt-[26px] px-[46px] pb-[27px] bg-cadetblue-100 rounded-3xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-cadetblue-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <a className="[text-decoration:none] relative text-3xl font-inter text-black text-left">
            Become a Seller
          </a>
        </button>
      </div>
      <div className="w-[244px] flex flex-col items-start justify-start gap-[20px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[59px]">
            Artists
          </a>
          <b className="relative font-semibold text-gray inline-block min-w-[112px]">
            Photographs
          </b>
        </div>
        <FrameComponent2
          thomas="/thomas@2x.png"
          pexelsAnastasiaShuraeva44="/pexelsanastasiashuraeva4406721-1@2x.png"
          thomasEdward="Thomas Edward"
        />
      </div>
      <FrameComponent2
        thomas="/chris@2x.png"
        pexelsAnastasiaShuraeva44="/pexelsanastasiashuraeva4406721-2@2x.png"
        thomasEdward="Chris Doe"
        propAlignSelf="unset"
        propWidth="244px"
        propMinWidth="76px"
      />
      <Chris
        pexelsPixabay1644552="/pexelspixabay164455-2@2x.png"
        pexelsAnastasiaShuraeva44="/pexelsanastasiashuraeva4406721-2@2x.png"
        emilieJones="Emilie Jones"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-3xs">
        <Chris
          pexelsPixabay1644552="/pexelsstevejohnson1269968-1@2x.png"
          pexelsAnastasiaShuraeva44="/pexelsanastasiashuraeva4406721-4@2x.png"
          emilieJones="Jessica Williams"
          propBorderRadius="unset"
          propBackgroundImage="url('/pexelsstevejohnson1269968-1@2x.png')"
          propBorderRadius1="unset"
          propMinWidth="128px"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
          <img
            className="w-[244px] h-[38px] relative rounded-t-3xs rounded-b-none object-cover"
            loading="lazy"
            alt=""
            src="/pexelsfionaart5022849-1@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[21px]">
            <div className="flex-1 relative font-semibold whitespace-pre-wrap">
              Privacy Terms of Service Cookie Notice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
