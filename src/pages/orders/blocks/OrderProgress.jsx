import { useEffect, useState } from "react";

function OrderProgress({ order_current_status, resetOrderProgress }) {
  const [status, setStatus] = useState(false);
  const [orderStatuses, setOrderStatuses] = useState([
    {
      status: "Ordered",
      flag: false,
      ActiveIcon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.17188 7.44L12.0019 12.55L20.7719 7.47M12.0019 21.61V12.54"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.93062 2.48L4.59063 5.45C3.38063 6.12 2.39062 7.8 2.39062 9.18V14.83C2.39062 16.21 3.38063 17.89 4.59063 18.56L9.93062 21.53C11.0706 22.16 12.9406 22.16 14.0806 21.53L19.4206 18.56C20.6306 17.89 21.6206 16.21 21.6206 14.83V9.18C21.6206 7.8 20.6306 6.12 19.4206 5.45L14.0806 2.48C12.9306 1.84 11.0706 1.84 9.93062 2.48Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0017 13.24V9.58001L7.51172 4.10001"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      inactiveIcon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.17188 7.44L12.0019 12.55L20.7719 7.47M12.0019 21.61V12.54"
            stroke="#A7A9A2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.93062 2.48L4.59063 5.45C3.38063 6.12 2.39062 7.8 2.39062 9.18V14.83C2.39062 16.21 3.38063 17.89 4.59063 18.56L9.93062 21.53C11.0706 22.16 12.9406 22.16 14.0806 21.53L19.4206 18.56C20.6306 17.89 21.6206 16.21 21.6206 14.83V9.18C21.6206 7.8 20.6306 6.12 19.4206 5.45L14.0806 2.48C12.9306 1.84 11.0706 1.84 9.93062 2.48Z"
            stroke="#A7A9A2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0017 13.24V9.58001L7.51172 4.10001"
            stroke="#A7A9A2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      status: "Processing",
      flag: false,
      ActiveIcon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.17188 7.44L12.0019 12.55L20.7719 7.47M12.0019 21.61V12.54"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6106 12.83V9.17C21.6106 7.79 20.6206 6.11 19.4106 5.44L14.0706 2.48C12.9306 1.84 11.0706 1.84 9.93062 2.48L4.59063 5.44C3.38063 6.11 2.39062 7.79 2.39062 9.17V14.83C2.39062 16.21 3.38063 17.89 4.59063 18.56L9.93062 21.52C10.5006 21.84 11.2506 22 12.0006 22C12.7506 22 13.5006 21.84 14.0706 21.52"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 22L22 21M19.2 21.4C20.0487 21.4 20.8626 21.0629 21.4627 20.4627C22.0629 19.8626 22.4 19.0487 22.4 18.2C22.4 17.3513 22.0629 16.5374 21.4627 15.9373C20.8626 15.3371 20.0487 15 19.2 15C18.3513 15 17.5374 15.3371 16.9373 15.9373C16.3371 16.5374 16 17.3513 16 18.2C16 19.0487 16.3371 19.8626 16.9373 20.4627C17.5374 21.0629 18.3513 21.4 19.2 21.4Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      inactiveIcon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.17188 7.44L12.0019 12.55L20.7719 7.47M12.0019 21.61V12.54"
            stroke="#A7A9A2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6106 12.83V9.17C21.6106 7.79 20.6206 6.11 19.4106 5.44L14.0706 2.48C12.9306 1.84 11.0706 1.84 9.93062 2.48L4.59063 5.44C3.38063 6.11 2.39062 7.79 2.39062 9.17V14.83C2.39062 16.21 3.38063 17.89 4.59063 18.56L9.93062 21.52C10.5006 21.84 11.2506 22 12.0006 22C12.7506 22 13.5006 21.84 14.0706 21.52"
            stroke="#A7A9A2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 22L22 21M19.2 21.4C20.0487 21.4 20.8626 21.0629 21.4627 20.4627C22.0629 19.8626 22.4 19.0487 22.4 18.2C22.4 17.3513 22.0629 16.5374 21.4627 15.9373C20.8626 15.3371 20.0487 15 19.2 15C18.3513 15 17.5374 15.3371 16.9373 15.9373C16.3371 16.5374 16 17.3513 16 18.2C16 19.0487 16.3371 19.8626 16.9373 20.4627C17.5374 21.0629 18.3513 21.4 19.2 21.4Z"
            stroke="#A7A9A2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      status: "Shipping",
      flag: false,
      ActiveIcon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39 18.58 6.01L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 22C8.53043 22 9.03914 21.7893 9.41421 21.4142C9.78929 21.0391 10 20.5304 10 20C10 19.4696 9.78929 18.9609 9.41421 18.5858C9.03914 18.2107 8.53043 18 8 18C7.46957 18 6.96086 18.2107 6.58579 18.5858C6.21071 18.9609 6 19.4696 6 20C6 20.5304 6.21071 21.0391 6.58579 21.4142C6.96086 21.7893 7.46957 22 8 22ZM16 22C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20C18 19.4696 17.7893 18.9609 17.4142 18.5858C17.0391 18.2107 16.5304 18 16 18C15.4696 18 14.9609 18.2107 14.5858 18.5858C14.2107 18.9609 14 19.4696 14 20C14 20.5304 14.2107 21.0391 14.5858 21.4142C14.9609 21.7893 15.4696 22 16 22ZM22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      inactiveIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z"
            stroke="#A7A9A2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39 18.58 6.01L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z"
            stroke="#A7A9A2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 22C8.53043 22 9.03914 21.7893 9.41421 21.4142C9.78929 21.0391 10 20.5304 10 20C10 19.4696 9.78929 18.9609 9.41421 18.5858C9.03914 18.2107 8.53043 18 8 18C7.46957 18 6.96086 18.2107 6.58579 18.5858C6.21071 18.9609 6 19.4696 6 20C6 20.5304 6.21071 21.0391 6.58579 21.4142C6.96086 21.7893 7.46957 22 8 22ZM16 22C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20C18 19.4696 17.7893 18.9609 17.4142 18.5858C17.0391 18.2107 16.5304 18 16 18C15.4696 18 14.9609 18.2107 14.5858 18.5858C14.2107 18.9609 14 19.4696 14 20C14 20.5304 14.2107 21.0391 14.5858 21.4142C14.9609 21.7893 15.4696 22 16 22ZM22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
            stroke="#A7A9A2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      status: "Delivery",
      flag: false,
      ActiveIcon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0693 2.82L3.13929 8.37C2.35929 8.99 1.85929 10.3 2.02929 11.28L3.35929 19.24C3.59929 20.66 4.95929 21.81 6.39929 21.81H17.5993C19.0293 21.81 20.3993 20.65 20.6393 19.24L21.9693 11.28C22.1293 10.3 21.6293 8.99 20.8593 8.37L13.9293 2.83C12.8593 1.97 11.1293 1.97 10.0693 2.82Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15.5C12.663 15.5 13.2989 15.2366 13.7678 14.7678C14.2366 14.2989 14.5 13.663 14.5 13C14.5 12.337 14.2366 11.7011 13.7678 11.2322C13.2989 10.7634 12.663 10.5 12 10.5C11.337 10.5 10.7011 10.7634 10.2322 11.2322C9.76339 11.7011 9.5 12.337 9.5 13C9.5 13.663 9.76339 14.2989 10.2322 14.7678C10.7011 15.2366 11.337 15.5 12 15.5Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      inactiveIcon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0693 2.82L3.13929 8.37C2.35929 8.99 1.85929 10.3 2.02929 11.28L3.35929 19.24C3.59929 20.66 4.95929 21.81 6.39929 21.81H17.5993C19.0293 21.81 20.3993 20.65 20.6393 19.24L21.9693 11.28C22.1293 10.3 21.6293 8.99 20.8593 8.37L13.9293 2.83C12.8593 1.97 11.1293 1.97 10.0693 2.82Z"
            stroke="#A7A9A2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15.5C12.663 15.5 13.2989 15.2366 13.7678 14.7678C14.2366 14.2989 14.5 13.663 14.5 13C14.5 12.337 14.2366 11.7011 13.7678 11.2322C13.2989 10.7634 12.663 10.5 12 10.5C11.337 10.5 10.7011 10.7634 10.2322 11.2322C9.76339 11.7011 9.5 12.337 9.5 13C9.5 13.663 9.76339 14.2989 10.2322 14.7678C10.7011 15.2366 11.337 15.5 12 15.5Z"
            stroke="#A7A9A2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]);

  const statusIndex = { Ordered: 0, Processing: 1, Shipping: 2, Delivery: 3 };

  useEffect(() => {
    orderStatuses?.forEach((orderStatus) => {
      orderStatus.flag = false;
    });
    let copyOrderStatuses = orderStatuses;
    copyOrderStatuses?.forEach((orderStatus, index) => {
      if (parseInt(index) <= parseInt(statusIndex[order_current_status])) {
        orderStatus.flag = true;
      }
    });
    setOrderStatuses(copyOrderStatuses);
    setStatus(!status);
    console.log("orderStatuses", order_current_status);
  }, [resetOrderProgress]);
  return (
    <div className="row order-top-row">
      {orderStatuses?.map((orderStatus, index) => {
        return (
          <div className="col-md-2 col-3" key={index}>
            {orderStatus.flag === true
              ? orderStatus?.ActiveIcon
              : orderStatus?.inactiveIcon}
            <label className={!orderStatus.flag ? "order_status_disable" : ""}>
              {orderStatus?.status}
            </label>
            {orderStatuses.length - 1 !== index ? (
              <span className="float-end">{"/"}</span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
export default OrderProgress;
