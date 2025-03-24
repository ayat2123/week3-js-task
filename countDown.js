function startCountdown(seconds) {
    let counter = seconds;
    const counterInterval = setInterval(() => {
        console.log(counter);
        counter--;

        if (counter < 0) { 
            clearInterval(counterInterval);
        }
    }, 1000);
}

startCountdown(10);
