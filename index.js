// const log = console.log
// const injectPage = page => callback => {console.log(page); return callback}
// const doAction = action => console.log(action)
//
// injectPage({page: "pageA"})(doAction)({action: "goToUrl"})
//
// var attitude = (original, replacement) => source => source.replace(original, replacement)
// var snakify = attitude(/millenials/ig, "Snake People");
// var hippify = attitude(/baby boomers/ig, "Aging Hippies");
//
// console.log(snakify("The Millenials are always up to something."));

const storeResult = lastResult => callback => {
  const callback2 = async (args) => {
    const result = await callback(args);
    return Object.assign({}, lastResult, result)
  }
  return callback2
}

const doX = async action => {return action}

const run = async () => {
  const result = await storeResult({last: "anh"})(doX)({action: "click"})
  console.log(result)
}

run()