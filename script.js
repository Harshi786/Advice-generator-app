

function advicecall() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((res) => {
        console.log(res);
        document.getElementById('aid').innerText = res.slip.id;
        document.getElementById('advicetxt').innerText = res.slip.advice;
        // document.getElementById('advicetxt').style.setProperty('--characters', res.slip.advice.length );
    })
    .catch((error) => {
        console.log(error);
    })
};

advicecall();