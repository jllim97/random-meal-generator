import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { GLOBAL_STATE } from "../constants/state.constant";
import { SetIsMobile } from './global.action';

export interface GlobalStateModel {
  isMobile: boolean;
}
@State<GlobalStateModel>({
  name: GLOBAL_STATE,
  defaults: {
    isMobile: false
  }
})
@Injectable()
export class GlobalState {

  @Selector()
  isMobile(state: GlobalStateModel) {
    return state?.isMobile;
  }


  @Action(SetIsMobile)
  setIsMobile(ctx: StateContext<GlobalStateModel>, action: SetIsMobile) {
    ctx.setState({
      isMobile: action?.isMobile
    })
  }
}
