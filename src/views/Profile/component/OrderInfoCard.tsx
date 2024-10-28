import { Accordion, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import ProductInMore from "./ProductInMore";
import OrderInfos from "./OrderInfos";
import { useState } from "react";

interface Product {
  name: string;
  quantity: number;
  price: string;
}

interface Order {
  id: string;
  status: "delivered" | "progress";
  orderDate: string;
  shipmentDate?: string;
  sentDate?: string;
  senderCity?: string;
  senderLocation?: string;
  productWeight?: string;
  productVolume?: string;
  deliveryLocation: string;
  price: string;
  products: Product[];
}
function OrderInfoCard({ order }: { order: Order }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };
  return (
    <div className="border-line border md:mt-[20px] mt-4 md:p-[20px] p-4 pb-0 rounded-[16px]">
      <p className="font-[500] text-[#212121] md:text-[16px] text-[14px]">
        ID заказа {order.id}
      </p>
      <OrderInfos order={order} />
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="w-full">
            <span className="text-[12px] text-[#03A5A5]">Подробнее</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="flex flex-col md:gap-4 gap-3">
              {order.products.map((_, index: number) => (
                <ProductInMore key={index} />
              ))}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default OrderInfoCard;
