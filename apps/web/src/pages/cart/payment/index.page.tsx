import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { CartPayment } from 'components';

import { PaymentStatus } from './constants';

const Payment: NextPage = () => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  useEffect(() => { setIsPaymentSuccess(true); }, []);

  return (
    <CartPayment {...isPaymentSuccess ? PaymentStatus.success : PaymentStatus.failure} />
  );
};

export default Payment;
