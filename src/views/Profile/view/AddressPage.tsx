import { useState } from "react";
import { addAdress, adresList, cities, regions } from "../../../hook/queries";

import { Button } from "antd";
import { useFormContext } from "../../../context/FormContext";
import { useMutation } from "@tanstack/react-query";
import ProfileSuccess from "../component/ProfileSuccess";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../router";

function AddAdressPage() {
  const { formData, setFormData } = useFormContext();

  const navigate = useNavigate();
  const { data: citiesItems } = cities();

  const [regionsId, setRegionsId] = useState();

  const { data: regionsItems } = regions(regionsId);

  const addAdressFunction = useMutation({
    mutationFn: addAdress,
    onSuccess: () => {
      navigate(`${APP_ROUTES.PROFILE}/${APP_ROUTES.PROFILE_ADRESS}`);
    },
  });

  const handleAddToBasket = () => {
    console.log(formData);

    addAdressFunction.mutate(formData);
  };

  return (
    <div className="border border-line rounded-[18px] h-max xl:p-[36px] md:p-[26px] p-4">
      <p className="text-[#212121] font-[600] text-[20px] mb-[30px]">
        Добавить адрес
      </p>

      <div className="flex flex-col xl:gap-[60px] gap-[40px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-x-[14px] gap-x-[10px] gap-y-[16px] ">
          <select
            onChange={(e: any) => {
              setRegionsId(e.target.value);
              setFormData("region_id", e.target.value);
            }}
            className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
          >
            {citiesItems?.map((item: any, ind: any) => (
              <option key={ind} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <select
            onChange={(e: any) => {
              setFormData("city_id", e.target.value);
            }}
            className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
          >
            {regionsItems?.map((item: any, ind: any) => (
              <option key={ind} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
            placeholder="Дом"
            name="home"
            onChange={(e: any) => {
              setFormData("home", e.target.value);
            }}
          />
          <input
            type="text"
            className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
            placeholder="Улица"
            name="street"
            onChange={(e: any) => {
              setFormData("street", e.target.value);
              setFormData("address", e.target.value);
            }}
          />

          <input
            type="text"
            className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
            placeholder="Квартира"
            name="street"
            onChange={(e: any) => {
              setFormData("house_number", e.target.value);
            }}
          />

          <input
            type="text"
            className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
            placeholder="Подъезд"
            name="street"
            onChange={(e: any) => {
              setFormData("entrance", e.target.value);
            }}
          />
          <input
            type="text"
            className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
            placeholder="Этаж"
            name="street"
            onChange={(e: any) => {
              setFormData("floor", e.target.value);
            }}
          />
          <input
            type="text"
            className="h-[60px] rounded-[10px] bg-buttonBg outline-none border-none pl-[25px]"
            placeholder="Домофон"
            name="street"
            onChange={(e: any) => {
              setFormData("intercom_code", e.target.value);
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
      </div>
    </div>
  );
}

export default AddAdressPage;
