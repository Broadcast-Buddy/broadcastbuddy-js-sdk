/**
 * BroadcastBuddy API Wrapper
 *
 * @link https://broadcastbuddy.app
 * @link https://github.com/broadcastbuddy
 */
class BroadcastBuddy {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiBaseUrl = "https://api.broadcastbuddy.app/v1";
    }

    async sendRequest(endpoint, method = 'GET', data = {}) {
        const url = this.apiBaseUrl + endpoint;
        const headers = {
            'Content-Type': 'application/json',
            'X-Authorization': this.apiKey,
        };

        const options = {
            method: method,
            headers: headers,
        };

        if (method === 'POST' || method === 'PUT') {
            options.body = JSON.stringify(data);
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Failed to send request');
            }
            return await response.json();
        } catch (error) {
            console.error('Error in sendRequest:', error.message);
            return false;
        }
    }

    /**
     * Get WhatsApp instance
     */
    whatsapp() {
        const broadcastBuddy = this;

        return {
            logout: () => broadcastBuddy.sendRequest('/whatsapp/logout'),
            getContacts: () => broadcastBuddy.sendRequest('/whatsapp/contacts'),
            getInstance: () => broadcastBuddy.sendRequest('/whatsapp/settings'),
            sendMessage: (contact, message, contact_type, quick = null) => {
                const data = {
                    'contact': contact,
                    'message': message,
                    'contact_type': contact_type,
                };
                if (quick !== null) {
                    data['quick'] = quick;
                }
                return broadcastBuddy.sendRequest('/whatsapp/compose/text', 'POST', data);
            },
            sendMedia: (contact, media, caption, contact_type, media_type = 'image', quick = null) => {
                const data = {
                    'contact': contact,
                    'media': media,
                    'message': caption,
                    'contact_type': contact_type,
                };
                if (quick !== null) {
                    data['quick'] = quick;
                }
                return broadcastBuddy.sendRequest(`/whatsapp/compose/${media_type}`, 'POST', data);
            }
        };
    }

    sms() {
        const broadcastBuddy = this;

        return {
            compose: (recipients, sender, message) => {
                const data = {
                    'contacts': recipients,
                    'sender_id': sender,
                    'message': message,
                };
                return broadcastBuddy.sendRequest('/sms/compose', 'POST', data);
            }
        };
    }
}
