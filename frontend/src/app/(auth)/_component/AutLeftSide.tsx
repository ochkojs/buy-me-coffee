"use client";

import { motion } from "framer-motion";

export const AuthLeftSide = () => {
  return (
    <div className="flex flex-col bg-amber-400 h-screen w-[100%]">
      <div className="flex gap-2 pl-20 pt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M14.1667 6.6665H15C15.8841 6.6665 16.7319 7.01769 17.357 7.64281C17.9821 8.26794 18.3333 9.11578 18.3333 9.99984C18.3333 10.8839 17.9821 11.7317 17.357 12.3569C16.7319 12.982 15.8841 13.3332 15 13.3332H14.1667M14.1667 6.6665H2.5V14.1665C2.5 15.0506 2.85119 15.8984 3.47631 16.5235C4.10143 17.1486 4.94928 17.4998 5.83333 17.4998H10.8333C11.7174 17.4998 12.5652 17.1486 13.1904 16.5235C13.8155 15.8984 14.1667 15.0506 14.1667 14.1665V6.6665ZM5 1.6665V3.33317M8.33333 1.6665V3.33317M11.6667 1.6665V3.33317"
            stroke="#09090B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="tex-[16px] font-bold">Buy Me Coffee</p>
      </div>
      <div className="flex justify-center bg-amber-400 h-screen">
        <div className="flex flex-col justify-center items-center w-[710px] gap-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="241"
              height="240"
              viewBox="0 0 241 240"
              fill="none"
            >
              <mask
                id="mask0_1_4181"
                style={{ marginRight: "10px" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="241"
                height="240"
              >
                <circle cx="120.5" cy="120" r="120" fill="white" />
              </mask>
              <g mask="url(#mask0_1_4181)">
                <circle
                  opacity="0.5"
                  cx="120.5"
                  cy="120"
                  r="120"
                  fill="#D97706"
                />
                <path
                  d="M61.0874 116.025C61.5468 113.78 63.2354 111.987 65.4492 111.394L147.841 89.3173C150.054 88.7241 152.413 89.4326 153.934 91.1473L164.918 103.534L57.7684 132.244L61.0874 116.025Z"
                  fill="white"
                />
                <path
                  d="M51.9952 137.967C51.4186 135.815 52.6956 133.603 54.8475 133.026L167.841 102.75C169.993 102.173 172.205 103.45 172.782 105.602L175.914 117.291C176.49 119.443 175.213 121.655 173.061 122.231L60.0676 152.508C57.9157 153.085 55.7039 151.808 55.1273 149.656L51.9952 137.967Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M161.368 125.363L71.7489 149.376L111.963 250.311L177.008 232.882L161.368 125.363ZM69.6609 141.584C64.9955 142.834 62.4666 147.875 64.2543 152.362L104.469 253.297C105.983 257.097 110.101 259.162 114.051 258.104L179.096 240.675C183.047 239.616 185.581 235.769 184.992 231.721L169.351 124.202C168.656 119.422 163.945 116.32 159.28 117.57L69.6609 141.584Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M93.1942 63.729C94.5467 65.4993 94.208 68.0308 92.4378 69.3833C91.9237 69.7761 91.0331 70.9778 90.9165 72.1914C90.8693 72.683 90.9432 73.1937 91.2755 73.7669C91.6268 74.3727 92.3929 75.259 94.0683 76.2263C96.5561 77.6627 98.2799 79.5386 99.2115 81.7491C100.128 83.9227 100.123 86.0516 99.814 87.7699C99.5081 89.4694 98.8833 90.9015 98.3753 91.8688C98.1152 92.3639 97.8696 92.7678 97.6808 93.0591C97.586 93.2055 97.5042 93.3253 97.4406 93.4162C97.4087 93.4616 97.3812 93.5 97.3588 93.5309L97.329 93.5717L97.317 93.5879L97.3117 93.5949L97.3093 93.5982C97.3081 93.5997 97.307 93.6013 94.0788 91.1826L97.307 93.6013C95.9712 95.3842 93.443 95.7466 91.6601 94.4108C89.8861 93.0817 89.5184 90.5721 90.8306 88.7908C90.8316 88.7894 90.8328 88.7877 90.8343 88.7855C90.8459 88.769 90.8725 88.7303 90.9104 88.6719C90.987 88.5536 91.1041 88.3628 91.2329 88.1175C91.5026 87.604 91.7603 86.9726 91.8739 86.3412C91.9841 85.7285 91.936 85.2591 91.7772 84.8823C91.6339 84.5423 91.2517 83.9158 90.0344 83.2129C87.4456 81.7182 85.5149 79.9152 84.2963 77.8136C83.0587 75.6791 82.6896 73.4639 82.8859 71.4201C83.2563 67.5629 85.5986 64.4558 87.54 62.9726C89.3102 61.6201 91.8417 61.9588 93.1942 63.729Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M108.581 48.1314C109.933 49.9016 109.595 52.4331 107.824 53.7856C107.31 54.1784 106.42 55.3801 106.303 56.5937C106.256 57.0854 106.33 57.5961 106.662 58.1692C107.014 58.7751 107.78 59.6613 109.455 60.6286C111.943 62.065 113.667 63.941 114.598 66.1514C115.514 68.325 115.51 70.4539 115.201 72.1722C114.895 73.8718 114.27 75.3039 113.762 76.2711C113.502 76.7662 113.256 77.1701 113.068 77.4615C112.973 77.6078 112.891 77.7277 112.827 77.8185C112.795 77.864 112.768 77.9023 112.746 77.9332L112.716 77.9741L112.704 77.9903L112.698 77.9973L112.696 78.0005C112.695 78.0021 112.694 78.0036 109.466 75.5849L112.694 78.0036C111.358 79.7865 108.83 80.1489 107.047 78.8131C105.273 77.484 104.905 74.9744 106.217 73.1931C106.218 73.1918 106.22 73.19 106.221 73.1879C106.233 73.1713 106.259 73.1327 106.297 73.0742C106.374 72.956 106.491 72.7651 106.62 72.5199C106.889 72.0063 107.147 71.3749 107.261 70.7435C107.371 70.1309 107.323 69.6615 107.164 69.2846C107.021 68.9447 106.638 68.3181 105.421 67.6153C102.832 66.1206 100.902 64.3176 99.683 62.2159C98.4454 60.0815 98.0763 57.8662 98.2726 55.8225C98.6431 51.9653 100.985 48.8581 102.927 47.3749C104.697 46.0224 107.228 46.3611 108.581 48.1314Z"
                  fill="white"
                />
              </g>
            </svg>
          </motion.div>
          <div className="gap-3">
            <div className="text-[#09090B] text-center text-2xl font-[700]">
              Fund your creative work
            </div>

            <div className="text-[#09090B] text-center">
              Accept support. Start a membership. Setup a shop. It’s easier than
              you think.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
