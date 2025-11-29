function startCountdown() {
    // 🎯 Đặt deadline: 23:59:59 ngày 06/12 năm nay
    let currentYear = new Date().getFullYear();
    let deadline = new Date(`${currentYear}-12-06T23:59:59`);

    function updateTimer() {
        let now = new Date().getTime();
        let distance = deadline - now;

        if (distance <= 0) {
            document.getElementById("cd-days").innerText = "00";
            document.getElementById("cd-hours").innerText = "00";
            document.getElementById("cd-mins").innerText = "00";
            document.getElementById("cd-secs").innerText = "00";
            return;
        }

        let days  = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins  = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let secs  = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("cd-days").innerText  = days.toString().padStart(2, '0');
        document.getElementById("cd-hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("cd-mins").innerText  = mins.toString().padStart(2, '0');
        document.getElementById("cd-secs").innerText  = secs.toString().padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

startCountdown();
