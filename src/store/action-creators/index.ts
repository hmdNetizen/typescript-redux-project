import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories = (searchTerm: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });
    try {
      const { data } = await axios.get(
        `http://registry.npmjs.org/-/v1/search`,
        {
          params: {
            text: searchTerm,
          },
        }
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_FAILURE,
        payload: error.message,
      });
    }
  };
};
