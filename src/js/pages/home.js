import setActiveMenu from "../behaviours/setActiveMenu.js";
import setTitle from "../behaviours/setTitle.js";
import trackUrl from "../behaviours/trackUrl.js";
import Home from "../components/Home.js";
import modalInteraction from "../behaviours/modalInteraction.js";

export default function (ctx) {
  setActiveMenu(ctx.path);
  setTitle(ctx);
  document.querySelector('main').appendChild(Home());
  trackUrl(ctx);
  modalInteraction();
}