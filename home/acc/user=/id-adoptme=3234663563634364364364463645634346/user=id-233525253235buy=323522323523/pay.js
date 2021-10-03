function onGooglePayLoaded() {
    const googlePayClient =
       new google.payments.api.PaymentsClient({
          enviroment: 'TEST'
       });
}

const clientConfiguration = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [cardPaymentMethod]
};

 googlePayClient.isReadyToPay(clientConfiguration)
          .then(function(response) {
              if (response.result) {
                  // add a Google Pay button
              }
          }).catch(function(err) {
            //log error in developer console
        });

 googlePayClient.createButton({
    //defaults to black if default or omitted
    buttonColor: 'default',
    //default to long if omitted
    buttonType:'Long',
    onclick: onGooglePaymentsButtonClicked
 });


  const paymentDataRequest = Object.assign({},
    clientConfiguration);

    paymentDataRequest.transactionInfo = {
       totalPriceStatus:'FINAL',
       totalPrice:'2,50',
       currencyCode:'EUR',    
    };
    paymentDataRequest.merchantInfo = {
        merchantId:'0123456789',
        merchantName:'Example Merchant',
    };

    const cardPaymentMethod = {
        type:'CARD',
        tokenizationSpecification: tokenizationSpec,
        paramenters: {
            alowedCardNewtworks: ['VISA','AMEX','MASTERCARD'],
            allowedAuthMethods: ['PAN_ONLY','CRYPTOGRAM_3DS'],
            billingAddresssRequierd: false,
            billingAddresssParameters: {
                format: 'FULL',
                phoneNumberRequired: false,
            }
        }
    };

    const tokenizationSpec = {
        type: 'PAYMENT_GATEWAY',
        paramenters: {
            gateway: 'example',
            gatewayMerchantId: 'gatewayMerchantId',
        }
    };

    googlePayClient
        .loadPaymentData(paymentDataRequest)
        .then(function(paymentData) {
            processPayment(paymentData);
        }).catch(function (err) {
            //log  error in developer console
        });

        function functionthx(){
            document.getElementById('box-1').style.display = 'none'
        };

