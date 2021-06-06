"use strict"
const lights = document.querySelectorAll(".light");
      const btn = document.querySelector("button");

      let step = 0;
      const states = {
        0: "red",
        1: "red yellow",
        2: "yellow",
        3: "green",
      };

      function changeColor() {
        const currentState = states[step];

        for (const light of lights) {
          if (currentState.includes(light.dataset.color)) {
            light.classList.add("active");
          } else {
            light.classList.remove("active");
          }
        }
      }

      btn.addEventListener("click", () => {
        if (step === 3) {
          step = 0;
        } else {
          step += 1;
        }

        changeColor();
      });

      changeColor();