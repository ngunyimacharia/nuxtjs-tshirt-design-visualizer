export const state = () => ({
    frontTemplate: "nuxtjs-tshirt-design-visualizer/assets/tshirt-template-front",
    backTemplate: "nuxtjs-tshirt-design-visualizer/assets/tshirt-template-back",
    sideTemplate: "nuxtjs-tshirt-design-visualizer/assets/tshirt-template-side",
    frontDesign: "nuxtjs-tshirt-design-visualizer/uploads/defaults/default-front",
    backDesign: "nuxtjs-tshirt-design-visualizer/uploads/defaults/default-back",
    sideDesign: "nuxtjs-tshirt-design-visualizer/uploads/defaults/default-side",
});

export const getters = {
    frontTemplate: state => state.frontTemplate,
    backTemplate: state => state.backTemplate,
    sideTemplate: state => state.sideTemplate,
    frontDesign: state => state.frontDesign,
    backDesign: state => state.backDesign,
    sideDesign: state => state.sideDesign,
};

export const mutations = {
    updateFrontDesign(state, public_id) {
        state.frontDesign = public_id;
        return state.frontDesign;
    },
    updateBackDesign(state, public_id) {
        state.backDesign = public_id;
        return state.backDesign;
    },
    updateSideDesign(state, public_id) {
        state.sideDesign = public_id;
        return state.sideDesign;
    }
}

export const actions = {
    updateFrontDesign({ commit }, public_id) {
        return commit('updateFrontDesign', public_id);
    },
    updateBackDesign({ commit }, public_id) {
        return commit('updateBackDesign', public_id);
    },
    updateSideDesign({ commit }, public_id) {
        return commit('updateSideDesign', public_id);
    }
}