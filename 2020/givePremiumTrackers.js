// https://www.redditstatic.com/desktop2x/givePremiumTrackers.629c04e6f537c074415e.js
// Retrieved at 6/30/2020, 1:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["givePremiumTrackers"], {
		"./src/reddit/helpers/trackers/givePremium.ts": function(e, n, i) {
			"use strict";
			i.r(n), i.d(n, "clickGivePremiumEvent", (function() {
				return u
			})), i.d(n, "viewGivePremiumModalEvent", (function() {
				return o
			})), i.d(n, "selectPremiumPackageEvent", (function() {
				return m
			})), i.d(n, "triggerAnonymousEvent", (function() {
				return a
			})), i.d(n, "clickMessageInputEvent", (function() {
				return d
			})), i.d(n, "typeMessageInputEvent", (function() {
				return g
			})), i.d(n, "clickConfirmEvent", (function() {
				return l
			})), i.d(n, "clickCloseModalEvent", (function() {
				return v
			}));
			var t = i("./src/reddit/selectors/telemetry.ts"),
				r = i("./src/reddit/helpers/correlationIdTracker.ts"),
				c = i("./src/reddit/selectors/gild.ts");
			const s = e => Object.assign({}, t.defaults(e), {
					correlationId: Object(c.b)(e) || Object(r.d)(r.a.GiftPremiumFlow, !1),
					screen: t.screen(e),
					subreddit: t.subreddit(e)
				}),
				u = () => e => Object.assign({}, s(e), {
					source: "profile",
					action: "click",
					noun: "give_premium"
				}),
				o = () => e => Object.assign({}, s(e), {
					source: "give_premium",
					action: "view",
					noun: "modal"
				}),
				m = e => n => Object.assign({}, s(n), {
					source: "give_premium",
					action: "select",
					noun: "premium_".concat(e.monthsOfPremium)
				}),
				a = e => n => Object.assign({}, s(n), {
					source: "give_premium",
					action: e,
					noun: "anonymous"
				}),
				d = () => e => Object.assign({}, s(e), {
					source: "give_premium",
					action: "click",
					noun: "message_input"
				}),
				g = () => e => Object.assign({}, s(e), {
					source: "give_premium",
					action: "type",
					noun: "message_input"
				}),
				l = () => e => Object.assign({}, s(e), {
					source: "give_premium",
					action: "click",
					noun: "confirm"
				}),
				v = () => e => Object.assign({}, s(e), {
					source: "give_premium",
					action: "click",
					noun: "close"
				})
		}
	}
]);
//# sourceMappingURL=givePremiumTrackers.629c04e6f537c074415e.js.map