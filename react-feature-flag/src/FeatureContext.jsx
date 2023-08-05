import { createContext, useEffect, useState } from "react";

const FeatureContext = createContext(null);

export function FeatureContexProvider({ children }) {
  const [features, setFeatures] = useState({});

  const getFeatures = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const features = {
          isGooglePayEnabled: true,
          isApplePayEnabled: false
        }
        resolve({ features: features });
      }, 0);
    });
  }

  useEffect(() => {
    getFeatures()
      .then(response => {
        setFeatures(response?.features);
      })
      .catch(err => {
        console.log('Error is getting features');
      });
  }, []);

  return (
    <FeatureContext.Provider value={{ features }}>
      {children}
    </FeatureContext.Provider>
  )
}

export default FeatureContext;