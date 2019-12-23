
const state = {
    storesIndex: 0,
    tabHeight: []
}

// getters
const getters = {
    getStoresIndex: (state) => {
        return state.storesIndex;
    }
}

// actions
const actions = {
    // store.dispatch('setStoresIndex') 页面通过这种方法触发事件
    setStoresIndex (context, payload) {
        context.commit({
            type:'setStoresIndex',
            storesIndex: payload.storesIndex
        }); //取到数据之后再走mutations的同步操作
    },
    setTabHeight(context, payload) {
        context.commit({
            type:'setTabHeight',
            tabHeight: payload.tabHeight
        });
    },
}

// mutations
const mutations = {
    setStoresIndex (state, payload) {
        // console.log('mutations setKeeperType', payload)
        // 变更状态
        state.storesIndex = payload.storesIndex;
    },
    setTabHeight (state, payload) {
        state.tabHeight = payload.tabHeight;
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}