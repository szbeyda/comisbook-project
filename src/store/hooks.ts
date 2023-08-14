import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootStateInstance } from "./reducer";

export const useAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateInstance> =
  useSelector;
