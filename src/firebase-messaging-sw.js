importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyBQYj7C-qNqTiF_30Pwhl-SqDXyfFgAudA",
  authDomain: "fivemeals.firebaseapp.com",
  projectId: "fivemeals",
  storageBucket: "fivemeals.appspot.com",
  messagingSenderId: "554072201893",
  appId: "1:554072201893:web:8d5c4dc545fecf010a0b4c",
  measurementId: "G-45TK7G9PSM",
  vapidKey: "BNnlwD7FgxN9L5i8fChsNpfngxiKaAt3bFHm0TInlAad7j3VxKb-zP-p7h53PrNreJXgK2AQcf01fSFCdMe4RZA"
});
const messaging = firebase.messaging();
