<script>
    let attemptCount = 0;

    function handleLogin(event) {
        // This prevents the form from refreshing the page
        event.preventDefault(); 
        
        attemptCount++;

        // Grab whatever she typed into the input boxes
        const enteredUser = document.getElementById('username').value;
        const enteredPass = document.getElementById('password').value;

        // ---------------------------------------------------------
        // SET YOUR REAL USERNAME AND PASSWORD RIGHT HERE:
        // ---------------------------------------------------------
        const realUsername = "happybirthdaysayang";     // <-- Change "sayang" to your desired username
        const realPassword = "ke23hehedahtua";   // <-- Change "birthday" to your desired password
        // ---------------------------------------------------------

        if (attemptCount === 1) {
            alert("hehe salah sayangg");
        } else if (attemptCount === 2) {
            alert("takmo marah marah sayangg birthday girl kannn");
        } else if (attemptCount === 3) {
            alert("hehe cuba minta babiey leklokk manja manjaa");
        } else if (attemptCount >= 4) {
            
            // On the 4th try (and beyond), we finally check if the credentials match!
            if (enteredUser === realUsername && enteredPass === realPassword) {
                alert("hehe dah bolehhh tekan button bawah ni sayangg");
                
                // Hide the login form and show the real button
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('proceedBtn').style.display = 'inline-block';
                
                // Change the title
                document.querySelector('h2').innerText = "Access Granted 💖";
            } else {
                // If she gets it wrong on the 4th try or later
                alert("Alololo salah lagi, cuba masukkan betul-betul kali ni ❤️");
            }
        }
    }
</script>