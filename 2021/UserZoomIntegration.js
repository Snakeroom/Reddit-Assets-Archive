// https://www.redditstatic.com/desktop2x/UserZoomIntegration.e14a378bfc910ff0887f.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UserZoomIntegration"], {
		"./src/reddit/helpers/userzoom/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "embedFrame", (function() {
				return r
			}));
			var o = n("./src/config.ts"),
				i = n("./src/lib/addQueryParams/index.ts"),
				s = n("./node_modules/@r/frames/compiled.js"),
				d = function(e) {
					document.body.appendChild(function(e) {
						let t, n;
						return function() {
							return t = function() {
								const t = document.createElement("iframe");
								return t.src = e, t.setAttribute("allowTransparency", "true"), t.style.display = "block", t.style.position = "fixed", t.style.width = "100%", t.style.height = "100%", t.style.background = "transparent", t.style.border = "none", t.style.visibility = "hidden", t.style.zIndex = "-1", t
							}(), s.listen("embedjail"), s.receiveMessage(t.contentWindow, "open.embedjail", () => void(t && (t.style.top = 0, t.style.left = 0, t.style.zIndex = 2147483647, t.style.visibility = "visible", n = document.body.style.overflow, document.body.style.overflow = "hidden"))), s.receiveMessage(t.contentWindow, "close.embedjail", () => void(t && (t.parentElement.removeChild(t), s.stopListening("embedjail"), t = void 0, document.body.style.overflow = n))), t
						}
					}(e)())
				};
			const r = e => {
				setTimeout(() => {
					const t = Object(i.a)(`${o.a.mediaUrl}/jail/userzoom`, e.externalVars);
					d(t)
				}, 1e3 * e.displayDelay)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UserZoomIntegration.e14a378bfc910ff0887f.js.map