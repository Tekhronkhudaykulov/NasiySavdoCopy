import { Pagination } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface PaginationCompProps {
  current?: number;
  totalPages?: number;
  total?: number;
  limit?: number;
}
function PaginationComp({
  total,
  current,
  totalPages,
  limit,
}: PaginationCompProps) {
  const navigate = useNavigate();
  const { page } = useParams();
  const onChange = (page: number) => {
    const currentQueryString = window.location.search;
    const urlSearchParams = new URLSearchParams(currentQueryString);
    if (page !== 1) {
      urlSearchParams.set("page", page.toString());
    } else {
      urlSearchParams.delete("page");
    }
    const newQueryString = urlSearchParams.toString();

    navigate(`?${newQueryString}`);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);
  return (
    <div className="md:mt-[80px] mt-[20px] flex items-center justify-center gap-2">
      <Pagination
        className="md:gap-x-6 gap-x-2 rounded-[6px] bg-white"
        current={current}
        showQuickJumper={false}
        defaultPageSize={limit || 12}
        showSizeChanger={false}
        onChange={(page) => onChange(page)}
        total={total}
        hideOnSinglePage
        responsive={true}
        itemRender={(_, type, originalElement) => {
          if (type === "prev") {
            return (
              <button
                style={{
                  opacity: current == 1 ? 0.4 : 1,
                  pointerEvents: "none",
                }}
                className="hover:bg-gray-200 mr-[10px] text-[12px] font-medium capitalize md:mr-[22px] md:text-sm"
              >
                <svg
                  className="relative -top-[1px] mr-3 inline-flex rotate-180"
                  width="7.001953"
                  height="12.007812"
                  viewBox="0 0 7.00195 12.0078"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M1.00391 11.0039L6.00391 6.00391L1.00391 1.00391"
                    stroke="#0D0D0D"
                    strokeWidth="2.000000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="md:block hidden">назад</span>
              </button>
            );
          }
          if (type === "next") {
            return (
              <span
                style={{
                  opacity: current == totalPages ? 0.4 : 1,
                  pointerEvents: "none",
                }}
                className="hover:bg-gray-200 ml-[10px] rounded-lg bg-white font-[inter] text-[12px] text-sm font-medium capitalize md:ml-[22px] md:text-sm"
              >
                <span className="md:block hidden">вперёд</span>
                <svg
                  className="relative -top-[1px] ml-3 inline-flex"
                  width="7.001953"
                  height="12.007812"
                  viewBox="0 0 7.00195 12.0078"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M1.00391 11.0039L6.00391 6.00391L1.00391 1.00391"
                    stroke="#0D0D0D"
                    strokeWidth="2.000000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            );
          }
          return originalElement;
        }}
      />
    </div>
  );
}

export default PaginationComp;
