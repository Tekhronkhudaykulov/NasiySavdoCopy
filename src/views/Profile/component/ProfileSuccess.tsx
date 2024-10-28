import { DocumentWithShield } from "../../../assets/icon";

function ProfileSuccess() {
  return (
    <div className="p-[18px] flex bg-green rounded-[10px] text-[16px] text-darkGreen items-center gap-4">
      <DocumentWithShield />
      <p>Идентифицированный пользователь</p>
    </div>
  );
}

export default ProfileSuccess;
