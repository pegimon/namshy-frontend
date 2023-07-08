import React from "react";
import editicon from"../../images/editicon.svg"
import "./styles/ProfileInfo.css";
import user from '../../api/fake'

const ProfileInfo = () => {

  var {
    Email,
  F_name,
  L_name,
  Gender,
  DOB,
  Phone}=user
return( 
    
    <div >
    <div className="HEAD">
      <div className="headtext">الملف الشخصي</div>
    </div>
    <div style={{marginBottom:"15px"}}>
      <a href="/my-rewards/">
        <div className="LoyaltyCard">
          <div class="Rewards">
            <div class="Rewards__title">مكافآتي</div>
            <div class="Rewards__level">المستوى الفضي : المستوى الحالي</div>
            </div>
            </div></a></div>
    <div className="Settings">
      <div className="holder">
        <div className="infogridholder">
          <form action="#" style={{width: "100%"}}>
            <div className="infogrid">
              <div className="infofeild">
                <label for="firstName" className="input-label">
                  الاسم الأول
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  value={F_name}
                />
              </div>
              <div className="infofeild">
                <label for="lastName" className="input-label">
                  اسم العائلة
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  value={L_name}
                />
              </div>
              
              <div className="infofeild">
                <label for="birthday" className="input-label">
                  تاريخ الميلاد
                </label>
                <div>
                  <input name="birthday" type="date" value={DOB} />
                </div>
              </div>
              <div className="infofeild">
                <label for="email" className="input-label">
                  البريد الإلكتروني
                </label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  disabled={true}
                  value={Email}
                />
              </div>
            </div>
            <div>
              <button type="submit" className="updatebutton">
                تحديث
              </button>
            </div>
            <div className="FormMessage">
              هناك شيء خاطئ. الرجاء معاودة المحاولة في وقت لاحق.
            </div>
          </form>
        </div>
        <div className="reset">
          <p>تحديث كلمة السر?</p>
          <button type="button" className="resetbutton">
            إعادة ضبط كلمة المرور
          </button>
        </div>
        <div>
          <div>
            <h3 className="phone_number-title">رقم الهاتف المتحرك</h3>
            <div className="numberline">
              <div className="feildsize">
                <div className="numinput">
                  
                  <input
                    className="number-field"
                    name="mobile_number"
                    type="tel"
                    autocomplete="off"
                    value={Phone}
                    data-intl-tel-input-id="1"

                  />
                </div>
              </div>
              <button type="button" className="updatebutton">
                تحديث
              </button>
            </div>
          </div>
        </div>
        <div>
          <a className="MySizesCard" href="/my-size/">
            <div className="AccountCard Card">
              <div className="AccountCard__title">
                <strong>مقاسي</strong>
                <button className="Button Button--account ">
                  <img src={editicon} />
                </button>
              </div>
              <div className="AccountCard__children">
                <div className="MySizeCard__content">
                  <div className="MySizeCard__item">
                    <span>قمصان وبلايز:</span>
                    <span>6</span>
                  </div>
                  <div className="MySizeCard__item">
                    <span>بناطيل وشورتات:</span>
                    <span>XS</span>
                  </div>
                  <div className="MySizeCard__item">
                    <span>حذاء:</span>
                    <span>2.5</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <div className="AccountCard Card">
            <div className="AccountCard__title">
              <strong>المتجر التلقائي</strong>
              <button className="Button Button--account ">
                <img src={editicon} />
              </button>
            </div>
            <div className="AccountCard__children">
              <div>الأطفال</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="settingsButtonBar">
      <button className="Button Button--greenTransparent ">
        <strong>حذف حسابي</strong>
      </button>
      <button className="Button Button--greenFilled ">
        <strong>الخروج</strong>
      </button>
    </div>
  </div>
)};
export default ProfileInfo;
