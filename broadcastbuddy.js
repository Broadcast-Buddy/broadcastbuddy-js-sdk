// BroadcastBuddy JavaScript SDK
// Provides functionality for interacting with the BroadcastBuddy API.

class BaseBroadcastBuddy {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.broadcastbuddy.app/v1/';
    }

    async makeRequest(endpoint, method = 'GET', data = null) {
        const url = `${this.baseUrl}${endpoint}`;
        const options = {
            method,
            headers: {
                'Authorization': `Bearer {this.apiKey}`,
                'Content-Type': 'application/json',
            },
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Request failed');
        }

        return response.json();
    }
}

class BroadcastBuddyWhatsApp extends BaseBroadcastBuddy {
    sessionStatus() {
        return this.makeRequest('whatsapp/session/status', 'GET');
    }

    sendMessage(recipient, message) {
        return this.makeRequest('whatsapp/compose/text', 'POST', { receiver_type: 'user', recipient: recipient, message: message });
    }

    sendMedia(recipient, caption, media_url) {
        return this.makeRequest('whatsapp/compose/image', 'POST', { receiver_type: 'user', recipient: recipient, caption: caption, media_url: media_url });
    }

    sendDocument(recipient, caption, media_url) {
        return this.makeRequest('whatsapp/compose/document', 'POST', { receiver_type: 'user', recipient: recipient, caption: caption, media_url: media_url });
    }

    sendPoll(recipient, poll_name, poll_options, allow_multiple_answers) {
        data = {
            'receiver_type': 'user',
            'recipient': recipient,
            'poll_name': poll_name,
            'poll_options': poll_options,
            'allow_multiple_answers': allow_multiple_answers
        };
        return this.makeRequest('whatsapp/compose/document', 'POST', data);
    }
}

class BroadcastBuddySMS extends BaseBroadcastBuddy {
    checkBalance() {
        return this.makeRequest('sms/balance?api_key=' + this.apiKey, 'GET');
    }

    sendSMS(recipient, message, senderId) {
        return this.makeRequest('sms/send?api_key=' + this.apiKey + '&contact=' + recipient + '&message=' + message + '&sender_id=' + senderId, 'GET');
    }
}

class BroadcastBuddyAccount extends BaseBroadcastBuddy {
    addContact(first_name, last_name, email, birthday, contact, group_id = '') {
        data = {
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'birthday': birthday,
            'group_id': group_id,
            'contact': contact,
        };
        return this.makeRequest('contacts/add', 'POST', data);
    }
}

class BroadcastBuddyOTP extends BaseBroadcastBuddy {
    generateOTP() {
        return this.makeRequest('otp/generate', 'GET');
    }

    verifyOTP(code) {
        return this.makeRequest('otp/verify', 'GET', { code: code });
    }
}

class BroadcastBuddyNotification extends BaseBroadcastBuddy {
    sendPushNotification(website, title, icon, click, text) {
        data = {
            'website': website,
            'title': title,
            'icon': icon,
            'click': click,
            'description': text,
        };
        return this.makeRequest('notification/push', 'POST', data);
    }
}

class BroadcastBuddyEmail extends BaseBroadcastBuddy {
    sendEmail(data) {
        return this.makeRequest('email/send', 'POST', {
            receiver: recipient,
            subject: subject,
            message: message
        });
    }
}