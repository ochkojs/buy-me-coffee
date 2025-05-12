import { AuthLeftSide } from "@/app/(auth)/_component/AutLeftSide";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">
      <div className="w-[50%] h-screen">
        <AuthLeftSide />
      </div>
      <div className="w-[50%] h-screen">{children}</div>
    </div>
  );
}
