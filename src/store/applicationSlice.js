import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    fromExchange: "",
    inExchange: "",
    fromSum: "",
    inSum: "",
    userMail: "",
    userFullName: "",
    userRequisites: "",
    idForm: null,
    isLoading: false,
    applications: [],
    step: 1
  },
  reducers: {
    setFromExchange(state, action) {
      state.fromExchange = action.payload;
    },
    setInExchange(state, action) {
      state.inExchange = action.payload;
    },
    setFromSum(state, action) {
      state.fromSum = action.payload;
    },
    setInSum(state, action) {
      state.inSum = action.payload;
    },
    setUserMail(state, action) {
      state.userMail = action.payload;
    },
    setUserFullName(state, action) {
      state.userFullName = action.payload;
    },
    setUserRequisites(state, action) {
      state.userRequisites = action.payload;
    },
    setApplicationIdForm(state, action) {
      state.idForm = action.payload;
    },
    setIsLoadingForm(state, action) {
      state.isLoading = action.payload;
    },
    setApplications(state, action) {
      state.applications = action.payload;
    },

    setStep(state, action) {
      state.step = action.payload;
    },

    setInitialState(state, action) {
      state.fromExchange = "";
      state.inExchange = "";
      state.fromSum = "";
      state.inSum = "";
      state.userMail = "";
      state.userFullName = "";
      state.userRequisites = "";
      state.idForm = null;
      state.isLoading = false;
      state.applications = [];
      state.step = 1;
    }
  }
});

export default applicationSlice.reducer;
export const {
  setFromExchange,
  setFromSum,
  setInExchange,
  setInSum,
  setUserFullName,
  setUserMail,
  setUserRequisites,
  setApplicationIdForm,
  setIsLoadingForm,
  setApplications,
  setStep,
  setInitialState
} = applicationSlice.actions;