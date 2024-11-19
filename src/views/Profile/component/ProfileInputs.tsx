import { useEffect, useState } from "react";
import { editProfile, profileQuery } from "../../../hook/queries";
import PhoneInput from "react-phone-input-2";
import InputMask from "react-input-mask";
import { Button } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";


function ProfileInputs() {
  const { data } = profileQuery();

  const queryClient = useQueryClient();


  const [payload, setPayload] = useState({
    phone: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    birthday: ""
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target || { name: 'phone', value: e };    
    setPayload((prevPayload) => ({
      ...prevPayload,
      [name]: value,
    }));
  };

  


  useEffect(() => {
    if (data) {
      const [year, month, day] = data.birthday.split("-"); // "2002-03-30" formatini "30.03.2002" formatiga o'tkazish
      const formattedBirthday = `${day}.${month}.${year}`; // Yangi format

      setPayload({
        phone: data.phone || "",
        first_name: data.first_name || "",
        last_name: data.last_name || "",
        middle_name: data.middle_name || "",
        birthday: formattedBirthday || "", // Formatlangan sanani qo'shamiz
      });
    }
  }, [data]);



  const editProfileFunc = useMutation({
    mutationFn: editProfile,
    onSuccess:() => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });

    }
  });

  const handleAddToBasket = () => {
    const [day, month, year] = payload.birthday.split(".");
    const formattedBirthday = `${year}-${month}-${day}`;

    editProfileFunc.mutate({first_name: payload.first_name,last_name: payload.last_name, middle_name: payload.middle_name, birthday: formattedBirthday, phone: payload.phone });
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-x-[14px] gap-x-[10px] gap-y-[16px] ">
      <input
        type="text"
        className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
        placeholder="Имя"
        name="first_name"
        onChange={handleChange}
        value={payload.first_name}
      
      />
      <input
        type="text"
        className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
        placeholder="Фамилия"
        name="last_name"
        value={payload.last_name}
        onChange={handleChange}
      />
      <input
        type="text"
        className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
        placeholder="Отчество"
        name="middle_name"
        value={payload.middle_name}
        onChange={handleChange}
      />
       <InputMask
        mask="99.99.9999"
        name="birthday"
        className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
        onChange={handleChange}
        value={payload.birthday}
        placeholder="dd.mm.yyyy"
      >

        {
          // @ts-ignore
        (inputProps) => <input {...inputProps} type="text" />
        }
      </InputMask>
      
        <PhoneInput
            country={"uz"}
            onlyCountries={["uz"]}
            dropdownStyle={{display: "none"}}
            
            onChange={handleChange}
            value={data?.phone}
            inputClass="!h-[60px] !rounded-[10px] !bg-buttonBg !outline-none !border-none !pl-[25px] !w-full"
            masks={{ uz: "(..) ...-..-.." }}
            placeholder="+998 (__) ___-__-__"
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
          />
           <Button
           onClick={handleAddToBasket}
            className="!bg-darkGreen  !text-white w-full md:h-[56px] h-[46px] rounded-[8px] text-[14px] md:text-[16px] font-[500]"
            type="default"
          >
            Отправить
          </Button>
    </div>
  );
}

export default ProfileInputs;
