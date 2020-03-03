// https://www.redditstatic.com/desktop2x/givePremiumTrackers.2f2c6c1eae1502af0484.js
// Retrieved at 3/3/2020, 6:36:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["givePremiumTrackers"], {
		"./src/reddit/helpers/trackers/givePremium.ts": function(e, n, i) {
			"use strict";
			i.r(n), i.d(n, "clickGivePremiumEvent", (function() {
				return s
			})), i.d(n, "viewGivePremiumModalEvent", (function() {
				return u
			})), i.d(n, "selectPremiumPackageEvent", (function() {
				return o
			})), i.d(n, "triggerAnonymousEvent", (function() {
				return m
			})), i.d(n, "clickMessageInputEvent", (function() {
				return a
			})), i.d(n, "typeMessageInputEvent", (function() {
				return d
			})), i.d(n, "clickConfirmEvent", (function() {
				return g
			})), i.d(n, "clickCloseModalEvent", (function() {
				return l
			}));
			var t = i("./src/reddit/selectors/telemetry.ts"),
				c = i("./src/reddit/helpers/correlationIdTracker.ts");
			const r = e => Object.assign({}, t.defaults(e), {
					correlationId: Object(c.c)(c.a.GiftPremiumFlow),
					screen: t.screen(e),
					subreddit: t.subreddit(e)
				}),
				s = () => e => Object.assign({}, r(e), {
					source: "profile",
					action: "click",
					noun: "give_premium"
				}),
				u = () => e => Object.assign({}, r(e), {
					source: "give_premium",
					action: "view",
					noun: "modal"
				}),
				o = e => n => Object.assign({}, r(n), {
					source: "give_premium",
					action: "select",
					noun: "premium_".concat(e.monthsOfPremium)
				}),
				m = e => n => Object.assign({}, r(n), {
					source: "give_premium",
					action: e,
					noun: "anonymous"
				}),
				a = () => e => Object.assign({}, r(e), {
					source: "give_premium",
					action: "click",
					noun: "message_input"
				}),
				d = () => e => Object.assign({}, r(e), {
					source: "give_premium",
					action: "type",
					noun: "message_input"
				}),
				g = () => e => Object.assign({}, r(e), {
					source: "give_premium",
					action: "click",
					noun: "confirm"
				}),
				l = () => e => Object.assign({}, r(e), {
					source: "give_premium",
					action: "click",
					noun: "close"
				})
		}
	}
]);
//# sourceMappingURL=givePremiumTrackers.2f2c6c1eae1502af0484.js.map