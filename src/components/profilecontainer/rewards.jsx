import React from "react";
import './styles/rewards.css'
const Rewards = () => {
  return (
    <div class="Loyalty">
      <div class="HEAD">
        <div class="headtext">مكافآتي</div>
      </div>
      <div class="Loyalty__grid">
        <div class="Loyalty__grid">
          <div class="LoyaltyDashboard">
            <div class="LoyaltyCard LoyaltyCard--no-hover">
              <div class="Rewards">
                <div class="Rewards__title">المستوى الفضي</div>
              </div>
            </div>
            <div class="LoyaltyDashboard__rewards section section--no-padding">
              <div class="">
                <div class="LD-rewards-title">
                  <strong>مكافآتي</strong>
                </div>
              </div>
              <div class="LD-rewards-panel">
                <div class="LD-reward-tier">
                  <div class="LD-reward-tier-promotions">
                    <div class="LD-reward-block">
                      <div class="LD-reward-block-details">
                        <strong id="loyalty-reward-block-amount">
                          خصم 25%
                        </strong>
                        <p id="loyalty-reward-block-duration">
                          على طلبيتك الأولى
                        </p>
                      </div>
                      <div class="LD-reward-block-button">
                        <strong id="loyalty-reward-block-activation">
                          قم بتفعيل المكافأة
                        </strong>
                      </div>
                    </div>
                    <div class="LD-reward-block">
                      <div class="LD-reward-block-details">
                        <strong id="loyalty-reward-block-amount">
                          خصم 10%
                        </strong>
                        <p id="loyalty-reward-block-duration">
                          على طلبيتك القادمة لمدة 24 ساعة
                        </p>
                      </div>
                      <div class="LD-reward-block-button">
                        <strong id="loyalty-reward-block-activation">
                          قم بتفعيل المكافأة
                        </strong>
                      </div>
                    </div>
                    <div class="LD-reward-block">
                      <div class="LD-reward-block-details">
                        <strong id="loyalty-reward-block-amount">
                          خصم يصل 20%
                        </strong>
                        <p id="loyalty-reward-block-duration">انفق ووفّر</p>
                      </div>
                      <div class="LD-reward-block-button">
                        <strong id="loyalty-reward-block-activation">
                          قم بتفعيل المكافأة
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rewards;