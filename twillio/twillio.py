from twilio.rest import TwilioRestClient

account_sid = "ACb4d0d44125ecbb800ccd537708aa617e" # Your Account SID from www.twilio.com/console
auth_token  = "9e55cde46fc9c34ab4f95826ac7ba008"  # Your Auth Token from www.twilio.com/console

client = TwilioRestClient(account_sid, auth_token)

message = client.messages.create(body="Hello from Python",
        to="+5592984221000",    # Replace with your phone number
        from_="+551939578617") # Replace with your Twilio number

print(message.sid)
