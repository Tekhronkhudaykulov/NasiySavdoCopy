import {  notification,  } from 'antd';

export const errorNotification = (des: any) => {
    notification.error({
        message: "",
        description: des,
        placement: "topRight", 
      });
    };
  