import { notification } from "antd";

export const successNotification = (title: any) => {
  notification.success({
    message: "",
    description: title,
    placement: "topRight", // to'g'ri `placement` qiymatini kiriting
  });
};

export const errorNotification = (des: any) => {
  console.log(des, 'des');
  
  notification.error({
    message: "",
    description: des,
    placement: "topRight", // to'g'ri `placement` qiymatini kiriting
  });
};
