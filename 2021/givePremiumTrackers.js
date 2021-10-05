// https://www.redditstatic.com/desktop2x/givePremiumTrackers.e4fba3c98b24b6139c73.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["givePremiumTrackers"], {
		"./src/reddit/helpers/trackers/givePremium.ts": function(e, n, r) {
			"use strict";
			r.r(n), r.d(n, "clickGivePremiumEvent", (function() {
				return o
			})), r.d(n, "viewGivePremiumModalEvent", (function() {
				return s
			})), r.d(n, "selectPremiumPackageEvent", (function() {
				return m
			})), r.d(n, "triggerAnonymousEvent", (function() {
				return d
			})), r.d(n, "clickMessageInputEvent", (function() {
				return a
			})), r.d(n, "typeMessageInputEvent", (function() {
				return l
			})), r.d(n, "clickConfirmEvent", (function() {
				return v
			})), r.d(n, "clickCloseModalEvent", (function() {
				return _
			}));
			var i = r("./src/reddit/selectors/telemetry.ts"),
				t = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/selectors/gild.ts");
			const u = e => ({
					...i.defaults(e),
					correlationId: Object(c.b)(e) || Object(t.d)(t.a.GiftPremiumFlow, !1),
					screen: i.screen(e),
					subreddit: i.subreddit(e)
				}),
				o = () => e => ({
					...u(e),
					source: "profile",
					action: "click",
					noun: "give_premium"
				}),
				s = () => e => ({
					...u(e),
					source: "give_premium",
					action: "view",
					noun: "modal"
				}),
				m = e => n => ({
					...u(n),
					source: "give_premium",
					action: "select",
					noun: `premium_${e.monthsOfPremium}`
				}),
				d = e => n => ({
					...u(n),
					source: "give_premium",
					action: e,
					noun: "anonymous"
				}),
				a = () => e => ({
					...u(e),
					source: "give_premium",
					action: "click",
					noun: "message_input"
				}),
				l = () => e => ({
					...u(e),
					source: "give_premium",
					action: "type",
					noun: "message_input"
				}),
				v = () => e => ({
					...u(e),
					source: "give_premium",
					action: "click",
					noun: "confirm"
				}),
				_ = () => e => ({
					...u(e),
					source: "give_premium",
					action: "click",
					noun: "close"
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/givePremiumTrackers.e4fba3c98b24b6139c73.js.map