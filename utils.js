export const wait = time => new Promise(r => setTimeout(() => r(), time));

export const log = console.log