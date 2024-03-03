# BroadcastBuddy API Wrapper for Javascript

This is a PHP wrapper for the BroadcastBuddy API, which allows developers to easily integrate multi-channel messaging functionality into their applications. With BroadcastBuddy, you can send messages via WhatsApp and SMS to engage with your customer/user base effortlessly.

## Getting Started

To get started with the BroadcastBuddy API Wrapper, follow these steps:

1. **Sign Up**: Visit [BroadcastBuddy](https://broadcastbuddy.app) and sign up for an account to obtain your API key.

2. **Installation**: Include the `broadcastbuddy.js` file in your HTML project and instantiate the `BroadcastBuddy` class with your API key.

3. **Usage**: You can now use the wrapper to send messages via WhatsApp or SMS.

## Usage Examples

### WhatsApp

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BroadcastBuddy API Test</title>
</head>
<body>
    <button onclick="sendMessage()">Send Message</button>

    <script src="broadcastBuddy.js"></script>
    <script>
        async function sendMessage() {
            const apiKey = 'API_KEY';
            const buddyWA = new BroadcastBuddy(apiKey);
            const whatsapp = buddyWA.whatsapp();

            const contact = '233500598571';
            const message = 'Test From JavaScript Quick';
            const contact_type = 'user';
            const quick = 1;

            try {
                const response = await whatsapp.sendMessage(contact, message, contact_type, quick);
                console.log(response);
                alert('Message sent successfully!');
            } catch (error) {
                console.error(error);
                alert('Failed to send message');
            }
        }
    </script>
</body>
</html>

```

## Documentation

For more information on available methods and parameters, refer to the [BroadcastBuddy API documentation](https://api.broadcastbuddy.app/v1).

## Support

If you encounter any issues or have any questions, please contact support@broadcastbuddy.app.

## License

This wrapper is open-source software licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
