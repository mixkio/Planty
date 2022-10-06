import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPopularPlant,
  fetchPetSafetyPlants,
  fetchKeywordRecommend,
  fetchPlantWordcup,
  fetchUserRecommend,
} from './recommendActions';

const initialState = {
  loading: false,
  success: false,
  error: null,
  popularPlants: [],
  petsafePlants: [],
  keywordPlants: [],
  WorldcupList: [],
  userRecommend: [],
  recommendSuccess: false,
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: {
    // 인기식물
    [fetchPopularPlant.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [fetchPopularPlant.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.popularPlants = payload.slice(4).sort(() => Math.random() - 0.5);
    },
    [fetchPopularPlant.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // 반려동물 안전 식물
    [fetchPetSafetyPlants.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [fetchPetSafetyPlants.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.petsafePlants = payload.sort(() => Math.random() - 0.5);
    },
    [fetchPetSafetyPlants.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // 키워드 검색
    [fetchKeywordRecommend.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [fetchKeywordRecommend.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.keywordPlants = payload;
    },
    [fetchKeywordRecommend.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // 식물 이상형 월드컵
    [fetchPlantWordcup.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.WorldcupList = payload;
    },
    // 유저 추천
    [fetchUserRecommend.fulfilled]: (state, { payload }) => {
      state.userRecommend = payload;
      state.recommendSuccess = true;
    },
  },
});

export default recommendSlice.reducer;
