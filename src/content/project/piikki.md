---
name: Oscar Piikki
shortName: piikki
shortDescription: Mobile application for accounting
languages: ['JavaScript', 'Java', 'Swift']
frameworks: ['React Native', 'Spring']
type: work
start: 2019-05
---

# Oscar Piikki

A mobile application for sending receipts to accounting. Take a picture, fill in the information about the purchase and send
to accounting for approval. Available for Android and iOS.

[View on Play Store](https://play.google.com/store/apps/details?id=fi.oscar.piikki)  
  
Related article in Finnish:  
[Oscar Akatemiassa kehitytään oman alan ammattilaisiksi](https://www.oscar.fi/oscar-akatemiassa-kehitytaan-oman-alan-ammattilaisiksi/)

## Work

Working as a full stack developer in the development team. 3 members on the initial development, and after switching to maintenance
mode, I worked on the app itself mostly alone. Others did help with the backend maintenance. Releasing the app to production was part
of the job.

## Technical specs

[React Native](https://reactnative.dev/) application, using [Expo](https://expo.dev/) at the beginning. The application was exported from Expo
when the need for native code came.

The app communicated through own API service, written with Java and using Spring Boot. 

Stack:
- React Native + JavaScript
- Java
- Swift
- Spring Boot

## Notable features

Bigger features, where I was the main contributor.

### AI features

Automatic image cropping / rectangle detection, using OpenCV on Android and Metal on iOS. Implemented as a [native
module](https://reactnative.dev/docs/native-modules-intro), using JS, Java and Swift. Reasoning for this is that there
was no existing implementation for our use case at the time. I learned a lot about RN native modules and 
image manipulation libraries. 

Optical character recognition with [Google ML Kit](https://developers.google.com/ml-kit/vision/text-recognition/v2). 
Automatically recognize text from the receipt and try to fill in the
information. Native implementations for both platforms and text parsing logic written in JavaScript. The "AI" was written
mostly by experimenting with different receipts, looking at formatting and positions of elements, and positioning relative
to others. So instead of machine learning I had to learn myself. I wanted to implement machine learning for this, but
I lacked the expertise. The final implementation worked pretty well though for parsing the total price and place of
purchase.

### Firebase & Push Notifications

Push notification feature for both platforms. Native implementations for both platforms, as well as JavaScript for 
React Native side. Written as an external library and not directly in to the app. Application side was mostly
wrapping the [Firebase libraries](https://firebase.google.com/docs/cloud-messaging) into a native module and adding configuration. 
Some additional features were written to Piikki, opening a receipt's information straight from the notification for example. 

To send push notifications, Firebase integration was implemented into Oscar Cloud. This was the bigger part
of this feature, and deepened my knowledge in Spring Boot and contexts. 
