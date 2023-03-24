export function sendMessageRequest(data: { [key: string]: string }) {
    if (data["email"].trim() == '' || data["subject"].trim() == ''
            || data["body"].trim() == '' || data["signature"].trim() == ''
            || data["category"].trim() == ''    
        ) {
            let message = document.querySelector('#message') as HTMLDivElement;
            message.classList.remove('message-hidden');
        } else {
            alert('Письмо успешно отправлено!');
            document.location = '/profile';
        }
}