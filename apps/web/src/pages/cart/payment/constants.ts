import succesImg from 'public/images/payment-success.png';
import failureImg from 'public/images/payment-failed.png';

export const PaymentStatus = {
  success: {
    img: succesImg,
    alt: 'succeded',
    title: 'Payment Successfull',
    description: ['Hooray, you have completed your payment!'],
  },
  failure: {
    img: failureImg,
    alt: 'failed',
    title: 'Payment Failed',
    description: ['Sorry, your payment failed.', '', 'Would you like to try again?'],
  },

};
