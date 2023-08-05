import { useContext } from 'react';
import './App.css';
import FeatureContext from './FeatureContext';
import FeatureFlag from './FeatureFlag';
import PaymentButton from './components/PaymentButton';

const FEATURE_KEYS = {
  IS_GOOGLE_PAY_ENABLED: 'isGooglePayEnabled',
  IS_APPLE_PAY_ENABLED: 'isApplePayEnabled'
};

function App() {
  const { features } = useContext(FeatureContext);
  console.log(features);

  return (
    <>
      <div className='App'>
        <div style={{ padding: '32px', border: '1px solid #eee', textAlign: 'center', borderRadius: '8px' }}>
          <h2>Make payment to complete your order</h2>
          <p style={{ marginTop: '16px' }}>Choose from the options below</p>
          <div style={{ marginTop: '32px' }}>
            <FeatureFlag feature={FEATURE_KEYS.IS_GOOGLE_PAY_ENABLED}>
              <PaymentButton 
                text={'Pay with GooglePay'}
                bgColor={'#0ea5e9'}
                textColor={'white'}
              />
            </FeatureFlag>
            <br />
            <br />
            <FeatureFlag feature={FEATURE_KEYS.IS_APPLE_PAY_ENABLED}>
              <PaymentButton
                text={'Pay with ApplePay'}
                bgColor={'#020617'}
                textColor={'white'}
              />
            </FeatureFlag>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
