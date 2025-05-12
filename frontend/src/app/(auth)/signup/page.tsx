import { Button } from "@/components/ui/button";

export default function SignUp() {
  return (
    <div className="flex h-screen w-[100%]">
      <div className="flex w-[100%] justify-end pr-20 pt-8">
        <a href="/login">
          <Button className="bg-secondary text-black hover:bg-secondary hover:cursor-pointer">
            Login
          </Button>
        </a>
      </div>
    </div>
  );
}
