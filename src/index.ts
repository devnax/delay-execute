const timers: any = {};
const delayExecute = (callback: Function, miliseconds = 400) => {
  const key = callback.toString() + miliseconds
  if (timers[key]) clearTimeout(timers[key])
  timers[key] = setTimeout(callback, miliseconds)
}

export default delayExecute