import { DocumentWithShield } from "../../../assets/icon";
import { profileQuery } from "../../../hook/queries";

function ProfileSuccess() {

  const { data } = profileQuery();
  
  return (
    <div className="p-[18px] flex bg-green rounded-[10px] text-[16px] text-darkGreen items-center gap-4">
      <DocumentWithShield />
      {data?.is_identified ? (
         <p>Идентифицированный пользователь</p>
      ): (
        <p>Неидентифицированный пользователь</p>
      )}
    
    </div>
  );
}

export default ProfileSuccess;
