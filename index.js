const storeResult = lastResult => callback => {
  const callback2 = (args) => {
    const result = callback(args);
    return Object.assign({}, lastResult, result)
  }
  return callback2
}

const doX = action => action

const run = () => {
  const result = storeResult({last: "anh"})(doX)({action: "click"})
  console.log(result)
}

run()