const gameState = (() => {
  class GameState {
    constructor(eventDispatcherEnabled) {
      this.eventDispatcherEnabled = eventDispatcherEnabled;
      this.mode = "INIT";
      this.positions = {
        PACMAN: { r: undefined, c: undefined },
        G1: { r: undefined, c: undefined },
        G2: { r: undefined, c: undefined },
        G3: { r: undefined, c: undefined },
        G4: { r: undefined, c: undefined },
      };
    }

    setEventDispatch(enabled) {
      this.eventDispatcherEnabled = enabled;
    }

    dispatchStateEvent(event) {
      if (this.eventDispatcherEnabled) {
        const setPositionEvent = new CustomEvent(event, {
          detail: { newState: this },
        });
        window.dispatchEvent(setPositionEvent);
      }
    }

    setMode(mode) {
      this.mode = mode;
      this.dispatchStateEvent("gameState.mode.set");
    }

    setPositionByKey(key, position) {
      if (key in this.positions) {
        const { r, c } = position;
        this.positions[key].r = r;
        this.positions[key].c = c;
        this.dispatchStateEvent("gameState.position.set");
      }
    }
  }
  return new GameState(false);
})();
