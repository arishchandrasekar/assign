import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[403px] max-w-full text-left text-base text-black font-inter mq675:min-w-full ${className}`}
    >
      <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-row items-start justify-between pt-[25px] pb-5 pr-[38px] pl-[35px] gap-[20px] text-3xl mq450:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <img
            className="h-[30px] w-[30px] relative object-cover min-h-[30px]"
            loading="lazy"
            alt=""
            src="/component-32-1@2x.png"
          />
          <a className="[text-decoration:none] relative text-[inherit] mq450:text-lg">
            Search here...
          </a>
        </div>
        <div className="flex flex-row items-start justify-start gap-[19px]">
          <img
            className="h-[35px] w-[35px] relative object-cover"
            loading="lazy"
            alt=""
            src="/component-39-2-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[64px] mq450:text-lg">
              Filters
            </a>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-[30px] pb-[42px] pr-[18px] pl-[30px] box-border gap-[52px] max-w-full mq675:gap-[26px] mq675:pt-5 mq675:pb-[27px] mq675:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[33px] max-w-full mq675:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="w-[558px] flex flex-row items-start justify-start gap-[14px] max-w-full mq675:flex-wrap">
              <img
                className="h-12 w-12 relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/pexelsalipazani2613260-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[298px] max-w-full">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <b className="relative tracking-[0.01em] font-semibold inline-block min-w-[96px]">
                    Lara Leones
                  </b>
                  <div className="relative text-sm inline-block min-w-[80px]">
                    @thewallart
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/dotsverticaloutline.svg"
                />
              </div>
            </div>
            <p className="m-0 relative text-sm font-medium">
              <span className="block">
                <span>{`It is a long established fact that a reader will be distracted by the readable content of `}</span>
              </span>
              <span className="block">
                <span>{`a page looking as its layout. `}</span>
                <span className="text-lime">Read More</span>
                <span className="text-black">{` `}</span>
              </span>
            </p>
          </div>
          <div className="w-[560px] h-[306px] flex flex-row items-start justify-end py-[22px] px-[26px] box-border bg-[url('/public/pexelshumphreymuleba2045248-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <img
              className="h-[306px] w-[560px] relative object-cover hidden max-w-full"
              alt=""
              src="/pexelshumphreymuleba2045248-1@2x.png"
            />
            <img
              className="h-[22px] w-6 relative object-contain z-[1]"
              alt=""
              src="/heart-2@2x.png"
            />
          </div>
        </div>
        <div className="w-[319px] flex flex-row items-start justify-start py-0 px-1 box-border text-xl">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-6 h-[22px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/heart-3@2x.png"
                />
              </div>
              <div className="relative font-medium inline-block min-w-[42px] mq450:text-base">
                9.8k
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="h-[23px] w-[23px] relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/comment-1@2x.png"
                />
                <div className="relative font-medium inline-block min-w-[42px] mq450:text-base">
                  8.8k
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-5 h-[18px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/share-1@2x.png"
                />
              </div>
              <div className="relative font-medium inline-block min-w-[42px] mq450:text-base">
                4.8k
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[600px] rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[30px] pb-[42px] pr-0 pl-[30px] box-border relative gap-[30px] max-w-full mq450:pb-5 mq450:box-border mq675:h-auto mq675:gap-[15px] mq900:pt-5 mq900:pb-[27px] mq900:box-border">
        <img
          className="w-6 h-[22px] absolute !m-[0] top-[-428px] right-[56px] object-contain"
          loading="lazy"
          alt=""
          src="/heart-2@2x.png"
        />
        <div className="w-[558px] flex flex-row items-start justify-start gap-[14px] max-w-full mq675:flex-wrap">
          <img
            className="h-12 w-12 relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/pexelsimadclicks9810659-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[298px] max-w-full">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <b className="relative tracking-[0.01em] font-semibold inline-block min-w-[81px]">
                Thomas J.
              </b>
              <div className="relative text-sm">@thecustomcreator</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/dotsverticaloutline.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full shrink-0 text-sm">
          <p className="m-0 relative font-medium">
            <span className="block">
              <span>{`It is a long established fact that a reader will be distracted by the readable content of `}</span>
            </span>
            <span className="block">
              <span>{`a page looking as its layout. `}</span>
              <span className="text-lime">Read More</span>
              <span className="text-black">{` `}</span>
            </span>
          </p>
        </div>
        <div className="w-[560px] h-[328px] flex flex-row items-start justify-start pt-0 px-0 pb-[22px] box-border max-w-full shrink-0">
          <div className="self-stretch flex-1 flex flex-row items-start justify-end p-6 box-border bg-[url('/public/pexelstobiasbjrkli2236382-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
            <img
              className="h-[306px] w-[560px] relative object-cover hidden max-w-full"
              alt=""
              src="/pexelstobiasbjrkli2236382-1@2x.png"
            />
            <img
              className="h-[22px] w-6 relative object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/heart-2@2x.png"
            />
          </div>
        </div>
        <div className="w-[319px] flex flex-row items-start justify-start pt-0 px-1 pb-[236px] box-border text-xl">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-6 h-[22px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/heart-3@2x.png"
                />
              </div>
              <div className="relative font-medium inline-block min-w-[42px] mq450:text-base">
                9.8k
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="h-[23px] w-[23px] relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/comment-1@2x.png"
                />
                <div className="relative font-medium inline-block min-w-[42px] mq450:text-base">
                  8.8k
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-5 h-[18px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/share-1@2x.png"
                />
              </div>
              <div className="relative font-medium inline-block min-w-[42px] mq450:text-base">
                4.8k
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-4 flex flex-row items-start justify-end shrink-0 text-smi">
          <b className="self-stretch w-7 relative font-semibold inline-block">
            Mod
          </b>
        </div>
      </div>
      <div className="flex flex-row items-start justify-center gap-[20px] mq675:flex-wrap">
        <img
          className="self-stretch w-7 relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none max-h-full object-cover min-h-[180px]"
          loading="lazy"
          alt=""
          src="/pexelspixabay164455-1@2x.png"
        />
        <img
          className="self-stretch w-[252px] relative rounded-3xs max-h-full object-cover min-h-[180px]"
          loading="lazy"
          alt=""
          src="/image-40-1@2x.png"
        />
        <img
          className="self-stretch w-[252px] relative rounded-3xs max-h-full object-cover min-h-[180px]"
          loading="lazy"
          alt=""
          src="/image-39-1@2x.png"
        />
        <img
          className="self-stretch w-7 relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs max-h-full object-cover min-h-[180px]"
          loading="lazy"
          alt=""
          src="/pexelsmaxvakhtbovych6782342-1@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
