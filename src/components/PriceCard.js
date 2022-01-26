import React from "react";

// PriceCard Component
function PriceCard(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {props.type.product}
            </h5>
            <h6 className="card-price text-center">
              ${props.type.price}
              <span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li className={props.type.product === "Free" ? " " : "fw-bold"}>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.type.users}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.type.storage}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.type.publicProjects}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.type.communityAccess}
              </li>
              <li
                className={
                  props.type.privateProjectsEnabler ? " " : "text-muted"
                }
              >
                <span className="fa-li">
                  <i
                    className={
                      props.type.privateProjectsEnabler
                        ? "fas fa-check"
                        : "fas fa-times"
                    }
                  ></i>
                </span>
                {props.type.privateProjects}
              </li>
              <li
                className={props.type.phoneSupportEnabler ? " " : "text-muted"}
              >
                <span className="fa-li">
                  <i
                    className={
                      props.type.phoneSupportEnabler
                        ? "fas fa-check"
                        : "fas fa-times"
                    }
                  ></i>
                </span>
                {props.type.phoneSupport}
              </li>
              <li className={props.type.subDomianEnabler ? " " : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      props.type.subDomianEnabler
                        ? "fas fa-check"
                        : "fas fa-times"
                    }
                  ></i>
                </span>

                {props.type.product === "Pro" ? (
                  <>
                    <span className="fw-bold">Unlimited </span>
                    {props.type.subDomian}
                  </>
                ) : (
                  `${props.type.subDomian}`
                )}
              </li>
              <li className={props.type.reportsEnabler ? " " : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      props.type.reportsEnabler
                        ? "fas fa-check"
                        : "fas fa-times"
                    }
                  ></i>
                </span>
                {props.type.reports}
              </li>
            </ul>
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase">Button</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceCard;
