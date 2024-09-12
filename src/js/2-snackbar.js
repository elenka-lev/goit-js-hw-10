import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form');
const input = document.querySelector('[type="number"]');
const btn = document.querySelector('[type="submit"]');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = parseInt(input.value, 10);
    const state = document.querySelector('[name="state"]:checked');

    form.reset();

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state.value === 'fulfilled' || !state) {
                resolve(delay);
            } else if (state.value === 'rejected') {
                reject(delay);
            }
        }, delay)
    })
        .then((resolvedDelay) => {
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
                backgroundColor: '#4caf50',
                progressBarColor: '#388e3c',
                messageColor: 'white'
            });
        })
        .catch((rejectedDelay) => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${rejectedDelay}ms`,
                backgroundColor: '#f44336',
                progressBarColor: '#d32f2f',
                position: 'topRight',
                messageColor: 'white'
            });
        });
    
});
        