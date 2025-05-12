import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex h-screen w-[100%]">
      <div className="flex w-[100%] justify-end pr-20 pt-8">
        <a href="/signup">
          <Button className="bg-secondary text-black hover:bg-secondary hover:cursor-pointer">
            Sign up
          </Button>
        </a>
      </div>
    </div>
  );
}
