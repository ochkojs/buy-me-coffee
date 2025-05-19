import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { uploadImage } from "@/app/utils/image-uploads";
import { ImageUpload } from "@/components/myComponents/Imageuploads";

export const ProfileDetailComponents = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const [file, setFile] = useState<File>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };
  console.log(file);

  const handleOnClick = async (file?: File) => {
    if (!file) {
      console.log("Зургаа оруулна уу");
      return;
    }
    const imageUrl = await uploadImage(file);
    console.log(imageUrl, "Imageurl");
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Card className="w-[510px] border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl">Complete your profile page</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Add photo</Label>
                <div className="flex justify-center w-40 h-40 rounded-full border-2 border-dashed">
                  {/* <ImageUpload file={file} handleFileChange={} /> */}
                  {/* <Input
                    id="pic"
                    type="file"
                    onChange={handleFileChange}
                    className="flex justify-center w-40 h-40 border-none shadow-none"
                  /> */}
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name here" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">About</Label>
                <Textarea
                  className="h-24"
                  placeholder="Write about yourself here"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Social media URL</Label>
                <Input id="name" placeholder="http://" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="w-50" onClick={() => handleOnClick(file)}>
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
