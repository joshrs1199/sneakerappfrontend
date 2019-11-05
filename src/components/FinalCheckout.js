



import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class FinalCheckout extends React.Component {
  onToken = (token, addresses) => {
    this.props.backHome()
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_RsDaeNakjSsXJA84Jh3nNmgo00ibf8cbgH"
        token={this.onToken}
        billingAddress
        zipCode
        amount={this.props.total + '00'}
      />
    )
  }
}







//
// const FinalCheckout = () => {
//
//   return (
//     "FINAL CHECKOUT HERE"
//   )
// }
//
//
// export default FinalCheckout
