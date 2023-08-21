import { ActionType } from "../action-types";

interface SearhRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
};

interface SearhRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
};

interface SearhRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
};

export type Action =  
  | SearhRepositoriesAction 
  | SearhRepositoriesSuccessAction 
  | SearhRepositoriesErrorAction;