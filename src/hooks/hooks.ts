import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../stores/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
) => useSelector<RootState, TSelected>(selector);
export const useAppDispatch = () => useDispatch<AppDispatch>();
