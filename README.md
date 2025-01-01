# BroadcastBuddy JavaScript SDK

This document provides instructions for installing and using the BroadcastBuddy JavaScript SDK, enabling seamless interaction with the BroadcastBuddy API.

## Installation

### Requirements
1. Node.js (version 14 or higher).
2. An active API key from BroadcastBuddy.

### Steps

1. **Clone or Download the SDK**
   Download or clone the SDK repository into your project directory:
   ```bash
   git clone https://github.com/your-repo/broadcastbuddy-js-sdk.git
   ```

2. **Install Dependencies**
   Navigate to the SDK directory and install the dependencies:
   ```bash
   npm install
   ```

3. **Include the SDK in Your Project**
   Import the required classes into your JavaScript project:
   ```javascript
   const { BroadcastBuddyWhatsApp, BroadcastBuddySMS, BroadcastBuddyAccount, BroadcastBuddyOTP, BroadcastBuddyNotification, BroadcastBuddyEmail, BroadcastBuddyUltimate } = require('./BroadcastBuddy');
   ```

## Usage Examples

### Initialize the SDK
Start by creating an instance of any class with your API key:
```javascript
const apiKey = 'your_api_key_here';
const whatsapp = new BroadcastBuddyWhatsApp(apiKey);
```

### Examples of Operations

#### WhatsApp Integration
```javascript
// WhatsApp session Status
const startResponse = await whatsapp.sessionStatus();
console.log('WhatsApp Session Status:', statusResponse);

// Send a WhatsApp message
const messageResponse = await whatsapp.sendMessage('recipient_id', 'Hello, World!');
console.log('Message Sent:', messageResponse);
```

#### SMS Integration
```javascript
const sms = new BroadcastBuddySMS(apiKey);

// Check SMS balance
const balanceResponse = await sms.checkBalance();
console.log('SMS Balance:', balanceResponse);

// Send an SMS
const smsResponse = await sms.sendSMS('recipient_number', 'Your OTP is 12345', 'SenderID');
console.log('SMS Sent:', smsResponse);
```

#### Account Management
```javascript
const account = new BroadcastBuddyAccount(apiKey);

// Update account details
const updatedAccount = await account.addContact({ name: 'New Name', email: 'new@example.com' });
console.log('Account Updated:', updatedAccount);
```

#### OTP Handling
```javascript
const otp = new BroadcastBuddyOTP(apiKey);

// Generate an OTP
const otpResponse = await otp.generateOTP();
console.log('Generated OTP:', otpResponse);

// Verify an OTP
const verifyResponse = await otp.verifyOTP('123456');
console.log('OTP Verified:', verifyResponse);
```

#### Email Management
```javascript
const email = new BroadcastBuddyEmail(apiKey);

// Compose and send an email
const emailResponse = await email.composeEmail('recipient@example.com', 'Subject', 'Message Body');
console.log('Email Sent:', emailResponse);
```

#### Notifications
```javascript
const notification = new BroadcastBuddyNotification(apiKey);

// Send a push notification
const notificationResponse = await notification.sendPushNotification({ title: 'Alert', message: 'This is a test notification' });
console.log('Notification Sent:', notificationResponse);
```

## Error Handling
Handle API errors gracefully by wrapping requests in try-catch blocks:
```javascript
try {
    const response = await someMethod();
    console.log('Success:', response);
} catch (error) {
    console.error('Error:', error.message);
}
```

## Support
For further assistance, contact the development team or refer to the [BroadcastBuddy API Documentation](https://api.broadcastbuddy.app/docs).
