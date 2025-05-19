import { LandLeftComponent } from "./_component/LandLeft";

export default function LandLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-[1440px] m-auto">
      <div className="flex justify-between py-10 items-center">
        <div className="flex gap-2">
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
        <div>ACCOUNT PROFILE</div>
      </div>
      <div className="flex gap-20">
        <div className="w-[25%] h-screen">
          <LandLeftComponent />
        </div>
        <div className="w-750%] h-screen">{children}</div>
      </div>
    </div>
  );
}
