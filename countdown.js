// Countdown to Cooperstown Dreams Park - June 18, 2026
(function() {
    const targetDate = new Date('2026-06-18T00:00:00');

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            document.getElementById('countdown-days').textContent = "0";
            document.getElementById('countdown-label').textContent = "We're at Cooperstown!";
            return;
        }

        const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
        document.getElementById('countdown-days').textContent = days;
    }

    // Update immediately and then once per hour
    updateCountdown();
    setInterval(updateCountdown, 1000 * 60 * 60);
})();
