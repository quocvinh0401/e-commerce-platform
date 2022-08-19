import React from "react";
import Header from "../header/Header";
import ElectronicDeviceLeft from "./ElectronicDeviceLeft";
import ElectronicDeviceRight from "./ElectronicDeviceRight";
import "./ElectronicDevice.css";

function ElectronicDevice() {
  return (
    <div className="electronicDevice">
      <Header />
      <div className="electronicDevice__body">
        <ElectronicDeviceLeft />
        <ElectronicDeviceRight />
      </div>
    </div>
  );
}

export default ElectronicDevice;
