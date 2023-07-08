import React from "react";
import user from "../api/fake";
import profileholder from "../images/profileholder.svg"
import navarrow from "../images/navarrow.svg"
import rewardsicon from "../images/rewardsicon.svg"
import ordersicon from "../images/ordersicon.svg"
import returnicon from "../images/returnicon.svg"
import alerts from "../images/alerts.svg"
import creditcards from "../images/creditcards.svg"
import locationicon from "../images/locationicon.svg"
import "./Profile.css";
import ProfileInfo from "../components/profilecontainer/ProfileInfo"
import Rewards from "../components/profilecontainer/rewards";
import Orders from "../components/profilecontainer/orders"
import Credit from "../components/profilecontainer/cedit";

const subpages=[
  (<ProfileInfo/>),
  (<Rewards/>),
  (<Orders/>),
  (<Credit/>)
]
function Profile({path}) {
  return (
    <div className="wrapper">
      <nav className="navigation">
        <a href="/profile/">
          <div className="navmember">
            <div className="prof1">
              <div className="profpic">
                <img
                  src={profileholder}
                  alt="الملف الشخصي"
                />
              </div>
              <div className="profilenav">
                <div className="username">
                  {user.F_name} {user.L_name}
                </div>
                <div className="email">{user.Email}</div>
              </div>
            </div>
            <div>
              <img
                src={navarrow}
                className="navarrow" alt="<<"
              />
            </div>
          </div>
        </a>
        <a href="/my-rewards/">
          <div className="navmember">
            <div>
              <div className="navicons outline-icon">
                <img
                  src={rewardsicon}
                  alt="مكافآتي"
                />
              </div>
              <div className="navtext">مكافآتي</div>
            </div>
            <div>
              <img
                src={navarrow}
                className="navarrow" alt="<<"
              />
            </div>
          </div>
        </a>
        <a href="/orders/">
          <div className="navmember">
            <div>
              <div className="sc-kMjNwy navicons outline-icon">
                <img
                  src={ordersicon}
                  alt="طلباتي"
                ></img>
              </div>
              <div className="navtext">طلباتي</div>
            </div>
            <div>
              <img
                src={navarrow}
                className="navarrow" alt="<<"
              />
            </div>
          </div>
        </a>
        <a href="/returns/">
          <div className="navmember">
            <div>
              <div className="sc-kMjNwy navicons outline-icon">
                <img
                  src={returnicon}
                  alt="الإرجاع والاستبدال"
                />
              </div>
              <div className="navtext">الإرجاع والاستبدال</div>
            </div>
            <div>
              <img
                src={navarrow}
                className="navarrow" alt="<<"
              />
            </div>
          </div>
        </a>
      
        
        <a href="/cards/">
          <div className="navmember">
            <div>
              <div className="sc-kMjNwy navicons outline-icon">
                <img
                  src={creditcards}
                  alt="بطاقتي الائتمانية"
                />
              </div>
              <div className="navtext">بطاقتي الائتمانية</div>
            </div>
            <div>
              <img
                src={navarrow}
                className="navarrow" alt="<<"
              />
            </div>
          </div>
        </a>
        <a href="/address/">
          <div className="navmember">
            <div>
              <div className="sc-kMjNwy navicons outline-icon">
                <img
                  src={locationicon}
                  alt="عنواني"
                />
              </div>
              <div className="navtext">عنواني</div>
            </div>
            <div>
              <img
                src={navarrow}
                className="navarrow" alt="<<"
              />
            </div>
          </div>
        </a>
        
        <a href="/notifications/">
          <div className="navmember">
            <div>
              <div className="sc-kMjNwy navicons outline-icon">
                <img
                  src={alerts}
                  alt="الإخطارات والتنبيهات"
                />
              </div>
              <div className="navtext">الإخطارات والتنبيهات</div>
            </div>
            <div>
              <img
                src={navarrow}
                className="navarrow" alt="<<"
              />
            </div>
          </div>
        </a>
      </nav>
      <div className="Container">
        {subpages[path]}
      </div>
    </div>
  );
}

export default Profile;
