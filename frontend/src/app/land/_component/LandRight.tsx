import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export const LandRightComponent = () => {
  return (
    <div className="w-full h-100 border rounded-2xl p-5">
      <div>
        <Button className="bg-black text-white items-center py-1 px-4 rounded-[6px]">
          <Copy /> Share page link
        </Button>
      </div>
    </div>
  );
};
