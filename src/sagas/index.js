import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

export function* helloSaga() {
    console.log('Hello Sagas!');
}


// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
    console.log('isRegister?')
    yield delay(1000)
    console.log('> delayOver')

    yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
    console.log('> listening to increment')
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}


export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}