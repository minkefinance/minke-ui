import { MainBg } from "@/components/MainBg";
import CardStack from "@/components/ui/card-stack";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { useInterval } from "react-use";
import pt from "/pt.png?url";
import sc from "/sc.svg?url";
import yt from "/yt.svg?url";
import mt from "/mt.svg?url";
import bgBullish from "/bg-bullish.png?url";
import bgMinke from "/bg-minke.png?url";
import { Footer } from "@/components/header-footer";

export const Route = createFileRoute("/")({
  component: App,
});

const launchItems: { icon: ReactNode; text: string; key: string }[] = [
  {
    key: "1",
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.5 6C20.6667 6 24 9.33333 24 13.5L27 16.5L30 13.5C30 6 24 0 16.5 0L19.5 2.83333L16.5 6ZM24 16.5C24 20.6667 20.6667 24 16.5 24L13.5 27L16.5 30C24 30 30 24 30 16.5L27.1667 19.5L24 16.5ZM13.5 24C9.33333 24 6 20.6667 6 16.5L3 13.5L0 16.5C0 24 6 30 13.5 30L10.5 27.1667L13.5 24ZM6 13.5C6 9.33333 9.33333 6 13.5 6L16.5 3L13.5 0C6 0 0 6 0 13.5L2.83333 10.5L6 13.5Z"
          fill="white"
        />
      </svg>
    ),
    text: `Single-sided and
Continuous liquidity`,
  },
  {
    key: "2",
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.25 10.068H17.0895C16.4025 10.068 15.846 10.6425 15.846 11.322C15.846 12.0285 16.4025 12.567 17.0895 12.567H20.1975L13.8255 18.939L10.1895 15.3015L10.1265 15.24C9.64049 14.763 8.85601 14.763 8.37 15.24L1.68899 21.924C2.08339 22.6814 2.54208 23.4036 3.06 24.0825L9.24299 17.8785L12.9585 21.576C13.4355 22.053 14.229 22.053 14.706 21.576L21.951 14.34V17.4195C21.951 18.099 22.5075 18.6645 23.196 18.6645C23.8755 18.6645 24.432 18.099 24.432 17.4195V11.322C24.4155 10.668 23.937 10.1385 23.2845 10.068H23.25ZM30 15C30 23.2845 23.2845 30 15 30C6.71549 30 0 23.2845 0 15C0 6.71549 6.71549 0 15 0C23.2845 0 30 6.71549 30 15ZM23.2035 10.0395V10.02H23.2395V10.0395H23.2035Z"
          fill="white"
        />
      </svg>
    ),
    text: `Zero Liquidity
Bootstrap`,
  },
  {
    key: "3",
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 0C15.2262 0 17.3956 0.436321 19.4431 1.29324L26 4.04088V12.3035C26.004 14.3593 25.6465 16.3836 24.9315 18.3215V18.3294C24.2206 20.2673 23.205 22.0794 21.9131 23.7068L21.9009 23.7225L21.8887 23.7382C20.5969 25.3813 19.0572 26.8082 17.2981 27.9678C15.9616 28.8483 14.5194 29.5283 12.9959 30C11.4644 29.5283 10.0181 28.8443 8.67751 27.956C6.91845 26.7925 5.37471 25.3695 4.0869 23.7186L4.07877 23.7068L4.07065 23.695C2.7869 22.0715 1.7794 20.2673 1.07253 18.3333L1.06847 18.3255L1.06441 18.3176C0.353471 16.3915 -0.00402825 14.3671 3.42359e-05 12.3113V4.04088L6.55283 1.29324C8.60032 0.436321 10.7697 0 13 0Z"
          fill="white"
        />
      </svg>
    ),
    text: `LP Delta 
Neutrality`,
  },
];
function LaunchApp() {
  const [items, setItems] = useState(launchItems);
  useInterval(() => {
    setItems((olds) => [olds[olds.length - 1], ...olds.slice(0, -1)]);
  }, 2000);
  const last = items[items.length - 1];
  return (
    <div className="relative flex items-center  text-[clamp(9rem,19.68vw,19.6875rem)] -left-[.25em]">
      <div
        style={{
          background: "linear-gradient(180deg, rgba(0, 136, 254, 0.05) 0%, rgba(89, 185, 255, 0.05) 100%)",
        }}
        className="rounded-full w-[1em] aspect-square flex z-10 relative shrink-0"
      >
        <div
          style={{
            background: "linear-gradient(180deg, rgba(0, 136, 254, .1) 0%, rgba(89, 185, 255, .1) 100%)",
          }}
          className="rounded-full w-[.75em] aspect-square flex mx-auto my-auto"
        >
          <div
            style={{
              background: "linear-gradient(180deg, rgba(55, 143, 245, 1) 0%, rgba(135, 191, 253, 1) 100%)",
            }}
            className="rounded-full w-[.5em] aspect-square flex mx-auto my-auto"
          >
            <div className="font-bold text-center text-[0.08em] text-white  mx-auto my-auto">Launch App</div>
          </div>
        </div>
      </div>

      <div className="rounded-full py-[.1em] pl-[.5em] pr-5 bg-white gap-8 flex items-center justify-end relative z-0 -left-[.5em]">
        <div className="flex items-center -gap-4">
          {items.map((item, i) => (
            <motion.div
              layout
              key={`launch_icon_${item.key}`}
              className={cn("rounded-full border-white border-[.028em] w-[.216em] aspect-square flex justify-center items-center", i > 0 && "-ml-[.06em]")}
              style={{
                background: "linear-gradient(180deg, #378FF5 0%, #87BFFD 100%)",
              }}
            >
              <div className="text-[.095em]">{item.icon}</div>
            </motion.div>
          ))}
        </div>
        <div className="whitespace-pre-wrap text-start w-[10em] font-lexend font-medium text-[.063em]">{last.text}</div>
      </div>
    </div>
  );
}

function CardItem({ imgUrl, title, icon, texts, className }: { className?: string; imgUrl: string; title: string; icon?: ReactNode; texts: string[] }) {
  return (
    <div style={{ boxShadow: "0px -11px 31px 0px #EDEFF57A" }} className={cn("flex bg-white items-start p-8 rounded-4xl gap-8 overflow-hidden", className)}>
      <img src={imgUrl} className="w-[clamp(19rem,37.5vw,37.5rem)] h-auto" />
      <div className="flex flex-col items-start gap-5 py-4">
        <div className="flex items-center gap-2 text-[2rem]">
          {icon ?? <svg width="1.09em" height="1.09em" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.4164 16.4132C19.8634 16.4197 20.3072 16.3373 20.7221 16.1708C21.1369 16.0042 21.5145 15.7568 21.8329 15.443C22.1513 15.1292 22.4041 14.7553 22.5766 14.3429C22.7492 13.9305 22.838 13.4879 22.8379 13.0409V13.0409C22.8379 12.1465 22.4826 11.2887 21.8502 10.6563C21.2178 10.0239 20.36 9.66858 19.4656 9.66858H14.2718C13.9454 9.66858 13.6323 9.79825 13.4015 10.0291C13.1707 10.2599 13.041 10.5729 13.041 10.8993V23.207C13.041 23.5335 13.1707 23.8465 13.4015 24.0773C13.6323 24.3081 13.9454 24.4378 14.2718 24.4378H19.4164C20.474 24.4378 21.4883 24.0177 22.2361 23.2698C22.984 22.522 23.4041 21.5077 23.4041 20.4501C23.4041 19.3925 22.984 18.3782 22.2361 17.6304C21.4883 16.8826 20.474 16.4624 19.4164 16.4624V16.4132Z"
              stroke="#001849"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M19.4656 16.4132H13.041" stroke="#001849" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.3793 9.66842V7.40381" stroke="#001849" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.1702 9.66842V7.40381" stroke="#001849" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.3793 27.0962V24.3885" stroke="#001849" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.1702 27.0962V24.3885" stroke="#001849" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M17.25 33.25C26.0866 33.25 33.25 26.0866 33.25 17.25C33.25 8.41344 26.0866 1.25 17.25 1.25C8.41344 1.25 1.25 8.41344 1.25 17.25C1.25 26.0866 8.41344 33.25 17.25 33.25Z"
              stroke="#001849"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>}
          {title}
        </div>
        <div className="flex flex-col text-start gap-2 font-lexend text-xl">
          {texts.map((item, i) => (
            <div key={`card_text_${i}`}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto ">
      <div className="w-full h-max flex flex-col items-center gap-5 justify-center text-black relative">
        <MainBg />
        <div className="flex flex-col gap-5 w-full max-w-350 z-10 pt-60 pb-20 px-4 md:px-6">
          <div className="text-[clamp(2rem,5.75vw,5.75rem)] font-bold">Minke Finance</div>
          <div className="text-[clamp(1rem,2.5vw,2.625rem)] font-medium">
            Unleashing Asset Potential with
            <br />
            Structured Protocol
          </div>
          <LaunchApp />
        </div>
      </div>
      <ScrollVelocity velocity={-3}>
        {[1, 2, 3].map((item) => (
          <div key={`item_${item}`}>
            <div className="flex flex-row flex-nowrap items-center gap-5 px-20 py-8 text-[clamp(3rem,7.5vw,7.5rem)] text-[#EDEFF5]">
              <svg width="1.31em" height="1em" viewBox="0 0 158 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_82_145)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M111.03 54.0631C108.728 53.112 106.248 55.3127 105.84 57.1296C105.138 60.2559 108.099 63.1262 110.754 62.2988C111.192 62.1623 111.775 61.8894 112.175 61.6463C114.136 60.4435 114.672 57.6073 113.515 55.7051C112.894 54.6858 112.038 54.4811 111.03 54.0631ZM51.8796 104.045C48.71 103.175 42.6856 98.0566 39.9074 95.9582C33.6234 91.2112 25.876 80.28 23.0807 72.4026C21.0386 66.6491 19.4984 62.3159 19.3665 55.9099C19.1666 46.1345 20.4472 45.9255 21.7363 38.048C22.8723 31.1132 21.6512 28.2641 16.2054 24.1655C12.7465 21.5638 7.24118 19.1285 4.70975 15.4777C3.10579 13.1618 1.98685 11.7927 1.07639 9.01193C0.340363 6.76428 -0.446732 2.18367 0.302063 -0.00427246C0.587112 -0.00427246 3.09303 2.23485 3.75249 2.65709C4.95651 3.42905 6.95613 3.94085 8.36012 4.2394C12.8656 5.1905 21.9576 4.48677 27.2374 10.3511C29.1307 12.4538 31.3473 15.7506 31.2962 18.6849C31.9812 18.2329 32.7045 16.9363 34.2191 15.4137C36.1719 13.4433 39.4351 11.4387 42.0814 10.8928C43.3025 10.6412 46.4466 10.0867 47.5059 10.2317C48.493 10.3682 49.5992 10.3511 50.4586 10.5047L58.0444 12.087C63.9199 13.2684 66.2003 11.0506 68.1829 10.88C66.5066 15.9298 65.2005 18.4163 61.265 22.0884C58.0231 25.1123 53.4708 26.9889 49.1567 27.8632C42.9621 29.1214 41.3071 28.9508 36.2017 33.0196C30.875 37.2633 28.9179 50.2886 39.5883 57.232C43.7705 59.9531 49.8246 59.5991 54.4493 58.4305C64.073 55.9952 69.8804 49.3076 76.3388 44.3133C79.5212 41.8524 82.7504 38.3509 85.8987 35.7535C97.9347 25.8203 105.184 19.9346 121.675 17.6571C126.044 17.0557 133.303 18.1006 137.417 19.8024C145.777 23.2613 151.937 29.3005 155.358 37.8774C157.57 43.4347 158 47.1922 158 53.1419C154.984 53.1419 151.542 54.0333 148.785 54.6986C141.956 56.3491 131.962 60.3028 126.202 63.9835C124.062 65.3483 121.641 66.5254 119.569 68.1504C117.654 69.6559 115.378 70.9738 113.383 72.4922C111.532 73.8996 102.215 80.7961 100.717 81.1586C101.487 79.4782 101.721 74.0489 100.794 71.8951C99.7642 69.5067 97.0711 67.6599 94.5311 67.6087C95.1012 69.9843 95.6883 70.5004 95.6756 73.3494C95.6543 79.0475 94.0759 84.4128 91.4764 89.582C84.0948 104.249 70.2591 117.509 53.7388 119.51C43.9917 120.691 45.1319 119.356 41.3752 119.288L45.4255 117.607C50.9181 115.023 59.1803 107.947 63.0349 103.337C63.0349 103.337 63.2391 103.089 63.2434 103.085C66.8299 98.7987 67.7957 98.0438 71.3865 92.6443C72.8884 90.3838 74.2966 87.9357 75.59 85.6028C77.4152 82.2974 81.3932 72.8845 81.6995 69.2166C77.1174 70.3042 74.6838 74.7654 72.6118 78.7105C71.5354 80.762 70.3442 82.6684 69.1742 84.6815C67.4937 87.5689 67.6426 88.0381 65.6685 88.0551C64.6133 88.0637 64.4474 88.2172 63.605 88.2812C60.0695 88.5499 53.709 88.3068 50.2969 87.6116C46.2806 86.7927 43.6301 85.9141 39.8478 84.3062C37.695 83.3892 34.2999 81.2951 33.8191 81.1629C34.8828 83.2869 42.7068 89.4157 45.0511 90.8018C47.9101 92.4907 56.4787 96.9477 59.4781 97.0116C59.0101 98.3253 53.2453 103.362 51.8796 104.045Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M144.075 84.8905C152.656 75.8402 154.367 69.8777 155.707 68.2997C154.205 76.3648 150.116 82.8561 145.398 89.2024C143.181 92.1837 140.484 94.6147 137.787 97.1908C128.525 106.019 113.315 112.656 100.896 114.417C98.5984 114.741 96.1478 114.865 93.8248 115.138C88.1493 115.803 82.5674 114.519 79.1978 114.49L83.9841 110.097C99.1387 110.276 115.821 106.271 128.537 97.7964C135.306 93.284 138.54 90.7336 144.075 84.8905Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M130.963 88.9722C130.184 90.6057 124.257 94.602 122.441 95.8175C113.579 101.742 98.0453 106.659 87.4303 106.659C87.5877 106.066 90.5063 102.782 91.1488 102.121C91.7742 102.053 92.3145 102.108 92.9271 102.066L97.1093 101.434C106.188 99.6261 106.648 99.4385 115.412 96.3549C116.131 96.1032 117.089 95.762 117.748 95.4806C119.314 94.8109 120.756 94.0731 122.347 93.4291C125.33 92.2221 128.176 90.7976 130.963 88.9722Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_82_145">
                    <rect width="158" height="120" fill="white" transform="matrix(-1 0 0 1 158 0)" />
                  </clipPath>
                </defs>
              </svg>
              <div className="font-lexend font-semibold text-[1em] leading-none uppercase">Structured tranching of any asset.</div>
            </div>
          </div>
        ))}
      </ScrollVelocity>
      <div className=" py-8 flex flex-col w-full bg-[#EDEFF5]">
        <div className="flex flex-col max-w-410 px-5 mx-auto w-full gap-20">
          <div className="text-[clamp(2rem,4.5vw,4.5rem)] font-bold">Risk Off</div>
          <CardStack>
            <CardItem
              imgUrl={pt}
              title="Principal Token"
              texts={[
                "A fixed-value security representing the core notional principal of the underlying yield-bearing asset, redeemable at par value upon maturity.",
                "It functions as a zero-coupon bond equivalent, shielding holders from yield volatility while enabling capital efficiency—ideal for conservative strategies like hedging or stable parking in lending pools.",
                "By tranching out yields, PTs provide predictable redemption without exposure to interest rate fluctuations.",
              ]}
            />
            <CardItem
              imgUrl={sc}
              title="Stable Coin"
              texts={[
                "A pegged, low-volatility token derived from over-collateralized positions, acting as a delta-neutral representation of the base asset's stable value.",
                "It anchors portfolios against market drawdowns, enabling seamless use in borrowing, payments, or yield generation with minimal price risk—transforming volatile holdings into reliable liquidity without liquidation threats.",
              ]}
            />
          </CardStack>
        </div>
      </div>
      <div className="py-8 flex flex-col w-full">
        <div className="flex flex-col max-w-410 px-5 mx-auto w-full gap-20">
          <div className="text-[clamp(2rem,4.5vw,4.5rem)] font-bold">Risk On</div>
          <CardStack>
            <CardItem
              className="border border-gray-100"
              imgUrl={mt}
              title="Margin Token"
              texts={[
                "A high-beta instrument embedding the leveraged upside of collateralized positions, such as excess margin in perpetuals or derivatives.",
                "MTs capture amplified returns from volatility or directional bets, tradable as synthetic longs for aggressive trading.",
                "They pair with Stable Coins to stratify risk, boosting capital velocity in margin-heavy DeFi applications like futures or options markets.",
              ]}
            />
            <CardItem
              className="border border-gray-100"
              imgUrl={yt}
              title="Yield Token"
              texts={[
                "An income-focused derivative that isolates and captures the entire yield stream from the original asset, tradable separately for leveraged yield farming or speculation.",
                "YTs offer pure-play exposure to returns without principal risk, allowing users to amplify APYs through composability while the underlying asset remains structured for liquidity release.",
              ]}
            />
          </CardStack>
        </div>
      </div>
      <div className="py-8 flex flex-col w-full">
        <div className="flex flex-wrap max-w-410 px-5 mx-auto w-full relative">
          <div
            style={{ background: `center/contain no-repeat url(${bgBullish})` }}
            className="h-[clamp(18rem,36.5vw,37.5rem)] aspect-987/600 flex flex-col justify-center items-center gap-8 px-5 py-20 relative text-[clamp(1.8rem,3.75vw,3.75rem)] font-lexend font-medium text-white"
          >
            <span>Bullish or Bearish？</span>
            <span>You Decide</span>
            <span className="text-[.4em]">--Shape Your Strategy with Minke Finance</span>
          </div>
          <div style={{ background: `center/contain no-repeat  url(${bgMinke})` }} className="absolute top-0 right-5 h-[clamp(18rem,36.5vw,37.5rem)] aspect-703/600 " />
        </div>
      </div>
      <Footer />
    </div>
  );
}
