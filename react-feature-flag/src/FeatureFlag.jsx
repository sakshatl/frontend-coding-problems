import { useContext, useEffect, useState } from "react";
import FeatureContext from "./FeatureContext";

export default function FeatureFlag(props) {
  const { feature, children } = props;
  const { features } = useContext(FeatureContext);

  return features[feature] ? children : null;
}