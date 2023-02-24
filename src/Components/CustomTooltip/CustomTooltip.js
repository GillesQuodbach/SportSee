import React from "react";
import "./CustomTooltip.css";

export default function CustomTooltip({ active, payload }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip-kilo">Test kg</p>
        <p className="custom-tooltip-calo">Tes Kcal</p>
      </div>
    );
  }
}
