import { BankCardComponent } from "./_component/BankCard";
import { ProfileDetailComponents } from "./_component/ProfileDetails";

export default function profilePage() {
  return (
    <div>
      <ProfileDetailComponents />
      <BankCardComponent />
    </div>
  );
}
