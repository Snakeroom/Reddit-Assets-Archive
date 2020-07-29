// https://www.redditstatic.com/desktop2x/givePremiumTrackers.9f3efc86eeddf557cae7.js
// Retrieved at 7/28/2020, 10:42:45 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["givePremiumTrackers"], {
		"./src/reddit/helpers/trackers/givePremium.ts": function(e, n, i) {
			"use strict";
			i.r(n), i.d(n, "clickGivePremiumEvent", (function() {
				return u
			})), i.d(n, "viewGivePremiumModalEvent", (function() {
				return o
			})), i.d(n, "selectPremiumPackageEvent", (function() {
				return a
			})), i.d(n, "triggerAnonymousEvent", (function() {
				return m
			})), i.d(n, "clickMessageInputEvent", (function() {
				return g
			})), i.d(n, "typeMessageInputEvent", (function() {
				return d
			})), i.d(n, "clickConfirmEvent", (function() {
				return l
			})), i.d(n, "clickCloseModalEvent", (function() {
				return O
			}));
			var t = i("./src/reddit/selectors/telemetry.ts"),
				s = i("./src/reddit/helpers/correlationIdTracker.ts"),
				c = i("./src/reddit/selectors/gild.ts");
			const r = e => Object.assign(Object.assign({}, t.defaults(e)), {
					correlationId: Object(c.b)(e) || Object(s.d)(s.a.GiftPremiumFlow, !1),
					screen: t.screen(e),
					subreddit: t.subreddit(e)
				}),
				u = () => e => Object.assign(Object.assign({}, r(e)), {
					source: "profile",
					action: "click",
					noun: "give_premium"
				}),
				o = () => e => Object.assign(Object.assign({}, r(e)), {
					source: "give_premium",
					action: "view",
					noun: "modal"
				}),
				a = e => n => Object.assign(Object.assign({}, r(n)), {
					source: "give_premium",
					action: "select",
					noun: "premium_".concat(e.monthsOfPremium)
				}),
				m = e => n => Object.assign(Object.assign({}, r(n)), {
					source: "give_premium",
					action: e,
					noun: "anonymous"
				}),
				g = () => e => Object.assign(Object.assign({}, r(e)), {
					source: "give_premium",
					action: "click",
					noun: "message_input"
				}),
				d = () => e => Object.assign(Object.assign({}, r(e)), {
					source: "give_premium",
					action: "type",
					noun: "message_input"
				}),
				l = () => e => Object.assign(Object.assign({}, r(e)), {
					source: "give_premium",
					action: "click",
					noun: "confirm"
				}),
				O = () => e => Object.assign(Object.assign({}, r(e)), {
					source: "give_premium",
					action: "click",
					noun: "close"
				})
		}
	}
]);
//# sourceMappingURL=givePremiumTrackers.9f3efc86eeddf557cae7.js.map