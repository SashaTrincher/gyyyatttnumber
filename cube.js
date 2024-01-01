const trigger = document.getElementById('triggerNumber');
const container = document.querySelector('.cube');
const target = document.querySelector('.number');

let isPlaying = false;



function generateNumber () {
    
    if (isPlaying !== true) {
        isPlaying = true;

        console.log(isPlaying);

        const randomNumber = Math.floor(Math.random(1) * 6) + 1;

        target.style.fontSize = "18px";
        target.innerHTML = '';

        container.classList.add('animation');
        target.innerHTML = 'generating...'

        setTimeout(() => {
            container.classList.remove('animation');
            target.style.fontSize = "40px";
            target.innerHTML = randomNumber;

            if (randomNumber === 6) {
                alert('svyat is annoying bitch')
            }

            isPlaying = false;

            console.log(isPlaying);
        }, 1300);
    }
};