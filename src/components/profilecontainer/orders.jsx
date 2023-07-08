import React from "react";
import "./styles/orders.css";

const Orders = () => {
    return(
  <div>
    <div class="head">
      <div class="headtext">طلباتي</div>
    </div>
    <br />
    <div class="error-card">
      <div class="error-card__title">ليس لديك طلبيات حتى يتم عرضها</div>
      <div class="error-card__text">
        <p>سترى سجل مشترياتك عندما تكمل اول عملية</p>
      </div>
      <div class="error-card__image">
        <img src="https://a.namshicdn.com/my/assets/a7b0983c6815247b524b.svg" alt="لا يوجد سجل طلبيات" />
      </div>
    </div>
  </div>
    )
};
export default Orders
