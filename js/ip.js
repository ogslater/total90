
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const operatingSystem = navigator.platform;

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            
            const webhookData = {
                content: 'Informações do Usuário:',
                embeds: [
                    {
                        title: 'Site: vidarasa',
                        description: `Ip da Máquina: ${data.ip}
                        Resolução do Monitor: ${screenWidth}x${screenHeight}
                        Informações do Navegador: ${userAgent}
                        Linguagem do Navegador: ${language}
                        Sistema Operacional do PC: ${operatingSystem}`,
                        color: 8421504 
                    }
                ]
            };

         
            const webhookUrl = '';

          
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(webhookData),
            });
        });
