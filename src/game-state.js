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
        COIN: [],
        POWER: [],
      };
      this.packManDirection = undefined;
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
        if (!Array.isArray(this.positions[key])) {
          this.positions[key].r = r;
          this.positions[key].c = c;
        } else {
          const found = this.positions[key].findIndex(
            (p) => p.r === r && p.c === c
          );
          if (found === -1) this.positions[key].push({ r, c });
        }

        this.dispatchStateEvent("gameState.position.set");
      }
    }

    setPacmanDirection(direction) {
      if (this.packManDirection === direction) return;

      this.packManDirection = direction;
      this.dispatchStateEvent("gameState.pacman.direction.set");
    }
  }
  return new GameState(false);
})();
