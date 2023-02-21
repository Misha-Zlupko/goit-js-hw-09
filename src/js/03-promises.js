function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        return resolve({ position, delay });
      } else {
        return reject({ position, delay });
      }
    });
  }, delay);
}

const formEl = document.querySelector('.form');

function onFormSubmit(evt) {
  evt.preventDefault();

  const { target } = evt;

  const delay = target.delay.value;
  const step = target.step.value;
  const amount = target.amount.value;

  for (let i = 0; i < amount; i++) {
    const resoultingDelay = Number(delay) + step * i;
    createPromise(i + 1, resoultingDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

formEl.addEventListener('submit', onFormSubmit);
