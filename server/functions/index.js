
/**
 * Firebase functions listeners
 */

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Core library
 * ---------------------------------------------------------------------------------------------------------------------
 */
const functions = require('firebase-functions');
const admin = require('firebase-admin');

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Variable initialization
 * ---------------------------------------------------------------------------------------------------------------------
 */
//Database initialization
admin.initializeApp(functions.config().firebase);
const db = admin.database();

///ask-genius/request/{requestId}
//https://gullychat-3f64a.firebaseio.com/business/-KxlP4ipLPmAsrCeA8zm/images/-KxlP4lF22SLxuXrx3AT/imageUrl
exports.pushNotification = functions.database.ref('/timePeriod/')
    .onWrite(event => {
        // This registration token comes from the client FCM SDKs.
        var registrationToken = "cuGBmcXMrjM:APA91bEZdtEng5gA1ExH1KvAg-6ipkqdLM5s45WFeHjYTd8CnTNqQq7yekkERzE2WIn4lm6Eclf1xpNOBNEFPE_fLo6fUSVBMPJAMA6TvlAMlK5oAGxeWUilwh0dacSGY4tXxHDPhdjh";
        

        const original=event.data.val()

        console.log('event****');
        console.log(original);
// See the "Defining the message payload" section below for details
// on how to define a message payload.
        var payload = {
            notification: {
                title: 'You have been invited to a trip.',
                body: 'Tap here to check it out!'
            }
        };

// Send a message to the device corresponding to the provided
// registration token.
        admin.messaging().sendToDevice(registrationToken, payload)
            .then(function(response) {
                 //See the MessagingDevicesResponse reference documentation for
                 //the contents of response.
                console.log("Successfully sent message:", response);
            })
            .catch(function(error) {
                console.log("Error sending message:", error);
            });
    });

