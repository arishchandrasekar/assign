import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SurfaceBook = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="w-full relative bg-whitesmoke box-border overflow-hidden flex flex-col items-center justify-start pt-[38px] px-5 pb-[134px] gap-[14px] leading-[normal] tracking-[normal] border-[1px] border-solid border-black">
      <main className="w-[1200px] flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full text-left text-[32px] text-black font-inter">
        <div className="w-[260px] flex flex-col items-start justify-start gap-[30px]">
          <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-row items-start justify-start pt-5 px-6 pb-[21px]">
            <a className="[text-decoration:none] relative inline-block italic font-semibold text-[inherit] min-w-[91px] mq450:text-lgi mq900:text-[26px]">
              LOGO
            </a>
          </div>
          <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-11 px-[37px] pb-[137px] gap-[107px] text-base mq900:pt-[29px] mq900:pb-[89px] mq900:box-border">
            <div className="w-[147px] flex flex-col items-start justify-start gap-[34px]">
              <div className="w-[97px] flex flex-row items-start justify-start py-0 px-1 box-border">
                <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <img
                    className="h-[17px] w-4 relative object-contain"
                    loading="lazy"
                    alt=""
                    src="/home-1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <b className="relative font-bold inline-block min-w-[46px]">
                      Home
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[37px]">
                <div className="flex flex-row items-start justify-start py-0 px-1">
                  <div className="flex flex-row items-start justify-start gap-[28px]">
                    <img
                      className="h-[18px] w-[15px] relative object-contain"
                      loading="lazy"
                      alt=""
                      src="/notification-1@2x.png"
                    />
                    <div className="relative inline-block min-w-[96px]">
                      Notifications
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[34px]">
                  <div className="w-[89px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <img
                          className="w-4 h-3.5 relative object-cover"
                          alt=""
                          src="/heart-1@2x.png"
                        />
                      </div>
                      <div className="relative inline-block min-w-[39px]">
                        Shop
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1">
                    <div className="flex flex-row items-start justify-start gap-[25px]">
                      <img
                        className="h-4 w-[18px] relative object-contain"
                        loading="lazy"
                        alt=""
                        src="/message-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative inline-block min-w-[100px]">
                          Conversation
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[99px] flex flex-row items-start justify-start py-0 px-1 box-border">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <input
                        className="m-0 h-[15px] w-[18px] relative"
                        type="checkbox"
                      />
                      <div className="relative inline-block min-w-[47px]">
                        Wallet
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-px">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[37px]">
                      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                        <div className="flex flex-row items-start justify-start gap-[24px]">
                          <img
                            className="h-[19px] w-[19px] relative object-contain"
                            loading="lazy"
                            alt=""
                            src="/favorite-1@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <div className="relative inline-block min-w-[95px]">
                              Subscription
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[123px] flex flex-row items-start justify-between gap-[20px]">
                        <img
                          className="h-4 w-[13px] relative object-contain"
                          alt=""
                          src="/profile-1@2x.png"
                        />
                        <div className="relative inline-block min-w-[76px]">
                          My Profile
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[111px] flex flex-row items-start justify-between gap-[20px]">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-[17px] h-[18px] relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/setting-1@2x.png"
                      />
                    </div>
                    <div className="relative inline-block min-w-[63px]">
                      Settings
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[29px] text-cadetblue-100">
              <img
                className="h-[15px] w-[19px] relative object-contain"
                alt=""
                src="/logout-1@2x.png"
              />
              <div
                onClick={handleLoginClick}
                className="relative inline-block min-w-[61px] cursor-pointer"
              >
                Login
              </div>
            </div>
          </div>
        </div>
        <FrameComponent3 />
        <FrameComponent1 />
      </main>
      <FrameComponent />
    </div>
  );
};

export default SurfaceBook;
