(() => {
  const EMPTY = "E";
  const BLOCK = "B";
  const COIN = "C";
  const POWER = "P";
  const TUNNEL = "T";
  const PACMAN = "PACMAN";
  const GHOST_BLINKY = "G1";
  const GHOST_PINKY = "G2";
  const GHOST_INKY = "G3";
  const GHOST_CLYED = "G4";

  const map = [
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: POWER },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: POWER },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: EMPTY },
      { value: BLOCK },
      { value: EMPTY },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: GHOST_BLINKY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
    ],
    [
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
    ],
    [
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: COIN },
      { value: EMPTY },
      { value: EMPTY },
      { value: BLOCK },
      { value: GHOST_PINKY },
      { value: GHOST_INKY },
      { value: GHOST_CLYED },
      { value: BLOCK },
      { value: EMPTY },
      { value: EMPTY },
      { value: COIN },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
    ],
    [
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
    ],
    [
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: POWER },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: PACMAN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: POWER },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
    ],

    [
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: COIN },
      { value: BLOCK },
      { value: EMPTY },
    ],
    [
      { value: EMPTY },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: BLOCK },
      { value: EMPTY },
    ],
  ];

  const GHOST_TO_SVG = {
    G1: BLINKY,
    G2: PINKY,
    G3: INKY,
    G4: CLYED,
  };

  const createMap = () => {
    const svg = document.getElementById("svg-container");
    if (!svg) return;

    map.forEach((r, i) => {
      r.forEach((c, j) => {
        const rect = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        rect.setAttribute("width", "30");
        rect.setAttribute("height", "30");
        c.value !== BLOCK
          ? rect.setAttribute("fill", "black")
          : rect.setAttribute("fill", "green");
        const left = j * 30;
        const top = i * 30;

        rect.setAttribute("x", left);
        rect.setAttribute("y", top);
        svg.appendChild(rect);

        if (c.value in gameState.positions) {
          gameState.setPositionByKey(c.value, { r: i, c: j });
        }
      });
    });

    map.forEach((r, i) => {
      r.forEach((c, j) => {
        let top = 0;
        let left = 0;
        switch (c.value) {
          case COIN:
            const coin = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "rect"
            );
            coin.setAttribute("id", `coin-${i}.${j}`);
            coin.setAttribute("width", "5");
            coin.setAttribute("height", "5");
            coin.setAttribute("fill", "yellow");

            left = j * 30 + 12.5;
            top = i * 30 + 12.5;
            coin.setAttribute("x", left);
            coin.setAttribute("y", top);
            svg.appendChild(coin);
            break;
          case POWER:
            const powerBall = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "circle"
            );
            powerBall.setAttribute("id", `powerball-${i}.${j}`);
            powerBall.setAttribute("r", "10");
            powerBall.setAttribute("fill", "white");

            left = j * 30 + 15;
            top = i * 30 + 15;
            powerBall.setAttribute("cx", left);
            powerBall.setAttribute("cy", top);
            svg.appendChild(powerBall);
            break;
          case GHOST_BLINKY:
          case GHOST_PINKY:
          case GHOST_INKY:
          case GHOST_CLYED:
            const ghost = GHOST_TO_SVG[c.value];
            svg.insertAdjacentHTML("beforeend", ghost);
            break;
          default:
            break;
        }
      });
    });
    svg.insertAdjacentHTML("beforeend", PACMAN_NORMAL);
    gameState.setEventDispatch(true);
  };

  createMap();
})();
