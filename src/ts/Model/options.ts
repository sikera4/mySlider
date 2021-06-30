type Options = {
  min: number,
  max: number,
  step: number,
  value: number,
}

const defaultOptions: Options = {
  min: 0,
  max: 10,
  step: 1,
  value: 5,
}

export {Options, defaultOptions};