const isFunction = (functionToCheck) => {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

const StoreResult = () => {
  const lastResult = {}
  return {
    store(result){
      Object.assign(lastResult, result)
    },
    get(){
      return lastResult
    }
  }
}

const s = StoreResult();

const doX = action => action


//=============================================
// inject by pure function
//=============================================
const doPageX = page => action => ({page, action})
const doPageXNeedResult = lastResult => {
  console.log(lastResult)
  return doPageX
}

const run = () => {
  const page = {page: "pageX"}
  const action = {action: "actionX"}
  s.store(doPageX(page)(action))
  console.log(s.get())
}

run()