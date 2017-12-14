

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
exports.pushNotification = functions.database.ref('/timePeriod/{pushnId}/')
    .onWrite(event => {
        // This registration token comes from the client FCM SDKs.
        var registrationToken = "fbay37nfnG4:APA91bEz7LTlQGHByC-tFgeK3cKWd5LEVCez8rG0bdv8WPsZvuvL1iGdO3OHSg0t18Kz3f3uj0d0wCXUc3Q9_FeN_kGWBSb8jH2_utiK-RwGt_aExYp0yxPVwM9aVSfIA1y4jDsFQdh8";
        
        const original=event.data
        var boolean=event.data.previous.exists()
        console.log("boolean",boolean)
        console.log(event.params.pushnId);
        var name=!boolean?original.name:null;
        var login_time=!boolean?new Date(original.timeIn+18000000).toLocaleTimeString():null
        console.log("name",name)
        console.log("login time",time)        
        console.log(original);
// See the "Defining the message payload" section below for details
// on how to define a message payload.
        var payload = {
            notification: {
                title: name,
                body: "logged in at "+time
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

