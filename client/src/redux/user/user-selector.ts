import { RootState } from "../store";

export const selectIsCandidate = (state: RootState) => state.user.isCandidate;