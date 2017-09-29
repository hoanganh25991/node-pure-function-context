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


// const injectPage = page => callback => args => callback(page)(args)
// ABOVE function not good, it should do single thing
// if doPageX need page, it should like
// const doPageX = page => action => ({page, action})
// Then self call
// doPageX(page)(action)
// injectPage mess up thing
// injectPage(page)(doPageX)(action) <=== extra injectPage make this happens
//
// if doAction not only need page, but also need lastResult
// it will look like
// const doPageXNeedResult = lastResult => {
//   console.log(lastResult)
//   return doPageX
// }
// but if independency use lastResult is not enough
// >>> have to declare new function, which touch on lastResult
// to do whole new logic

//=======================================================================
// IN SHORT, WE CANT PASS RESULT INTO CONTEXT OF ANOTHER PURE FUNCTION
//=======================================================================

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