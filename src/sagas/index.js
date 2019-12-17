import { delay } from 'redux-saga'
import { put, takeEvery, all, take, select } from 'redux-saga/effects'

export function* helloSaga() {
    console.log('Hello Sagas!');
}


// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
    yield delay(1000)
    console.log('> delayOver')

    yield put({ type: 'INCREMENT' })
}
export function* otherIncrementAsync() {
    while(1){
        let action = yield take('*');
        console.log(`action => `, action)
        console.log(`state  => `, yield select())

    }

       // alert(1)
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
    console.log('> listening to increment')
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}





export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        otherIncrementAsync(),
    ])
}