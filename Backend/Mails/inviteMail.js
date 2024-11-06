const inviteMail = (email, hostName, token, webUrl, hostEmail) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to AlumniSuite</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Pacifico&family=Poppins:wght@600&display=swap"
        rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            /* font-family: Arial, sans-serif; */
            margin: 0;
            padding: 0;
            color: #14213D;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #FFFFFF;
            /* border: 2px solid #14213D;
            border-radius: 10px; */
            padding: 20px;
            /* box-shadow: 0 4px 8px #3658a1; */
        }

        

        .header {
            text-align: center;
            padding: 10px;
            /* background-color: #FFFFFF; */
            /* color: #FFFFFF; */
            /* border-radius: 10px 10px 0 0; */
            display: flex;
            /* flex-direction: row; */
            align-items: center;
            justify-content: center;
        }

        .golden-text {
            color: #FCA311;
        }

        .message {
            /* padding: 5px; */
            text-align: left;
            font-size: 16px;
            line-height: 1.5;
            color: #14213D;
        }

        .message p {
            /* margin: 10px 0; */
            margin: 0 0 1.5em 0;
            line-height: 1;
        }

        .message span {
            font-weight: bold;
            line-height: 1.5;
            color: #14213D;
        }

        .link {
            text-decoration: none;
            font-weight: bold;
        }

        .link:hover {
            color: #14213D;
            text-decoration: underline;
        }

        .footer {
            text-align: center;
            width: 100%;
            /* padding: 0.5px; */
            background-color: #FCA311;
            color: #14213D;
            font-size: 12px;
            border-radius: 0 0 10px 10px;
        }

        .logo {
            width: 150px;
            height: auto;
            margin: 10px auto;
            padding: 0;
            display: block;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <!-- <h1>Alumni<span class="golden-text">Suite</span></h1> -->
            <img class="logo" src="./alumnisuite_logo_-removebg-preview.png" alt="logo">
        </div>
        <div class="body">
            <div class="message">
                <p>Hello User,</p>
                <p><strong>Welcome to <span style="font-family: 'pacifico'; color: #FCA311;">AlumniSuite!</span></strong></p>
                <p>Greetings from <span class="golden-text">${hostName}!</span> We're excited to invite you to join our new AlumniSuite—your
                    exclusive
                    connection to fellow alumni, current students, and the institute.</p>
                <p>
                    <strong>Why Join the AlumniSuite?</strong> <br>
                <p></p>
                <span style="color: #FCA311;">Reconnect & Network:</span> Build valuable relationships with alumni and students.<br>
                <span style="color: #FCA311;">Advance Your Career:</span> Discover exclusive job opportunities and resources.<br>
                <span style="color: #FCA311;">Stay Engaged:</span> Get invites to special events, workshops, and networking sessions.<br>
                <span style="color: #FCA311;">Give Back:</span> Make a meaningful impact by supporting students and institute initiatives.<br>
                </p>
                <p>Ready to join? Click the link below to explore everything AlumniSuite has to offer!</p>
                <p>This Link is valid for 7 Days.</p>
                <p>Join AlumniSuite: <a href="${webUrl}/invite/${token}" class="link">${webUrl}/invite/${token}</a></p>
                <p>We're thrilled to welcome you back into the fold. Let’s make a difference together!</p>
                <p style="line-height: 0.2;">Warm Regards,</p>
                <p>Alumni Relations Team</p>
                <p style="line-height: 0.2;"><strong>${hostName}</strong></p>
                <p style="color: #124ecf; line-height: 0;"><strong>${hostEmail}</strong></p>
            </div>
        </div>
        <div class="footer">
            <p style="font-size: medium;">&copy; 2024 AlumniSuite. All rights reserved.</p>
            <!-- <p style="font-size: medium;">copyright <strong>&COPY;</strong> 2024 AlumniSuite. All rights reserved.</p> -->
        </div>
    </div>
</body>
</html>`;
}

module.exports = inviteMail;