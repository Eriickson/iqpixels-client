import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

// actions
import * as marketAction from "./reducers/market.reducers";
import * as productAction from "./reducers/product.reducers";

export function useAction() {
  const dispatch = useDispatch();

  return bindActionCreators({ ...marketAction, ...productAction }, dispatch);
}
