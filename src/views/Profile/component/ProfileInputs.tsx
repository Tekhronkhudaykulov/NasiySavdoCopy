import PhoneInput from "react-phone-input-2";
import { profileQuery } from "../../../hook/queries";

function ProfileInputs() {
  const { data, isLoading } = profileQuery();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-x-[14px] gap-x-[10px] gap-y-[16px] ">
      <input
        type="text"
        className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
        placeholder="Имя"
      />
      <input
        type="text"
        className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
        placeholder="Фамилия"
      />
      <input
        type="text"
        className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
        placeholder="Отчество"
      />
      <input
        type="text"
        className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
        placeholder="Дата рождение"
      />
      <PhoneInput
        country={"uz"}
        defaultMask={"(..) ...-..-.."}
        placeholder="+998"
        value={data?.phone}
        alwaysDefaultMask={true}
        specialLabel=""
        inputClass="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px] w-full"
      />
    </div>
  );
}

export default ProfileInputs;
