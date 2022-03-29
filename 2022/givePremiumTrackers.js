// https://www.redditstatic.com/desktop2x/givePremiumTrackers.aec4b30361e7f7e552cc.js
// Retrieved at 3/29/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["givePremiumTrackers"], {
		"./src/reddit/helpers/trackers/givePremium.ts": function(e, n, i) {
			"use strict";
			i.r(n), i.d(n, "clickGivePremiumEvent", (function() {
				return o
			})), i.d(n, "viewGivePremiumModalEvent", (function() {
				return s
			})), i.d(n, "selectPremiumPackageEvent", (function() {
				return m
			})), i.d(n, "triggerAnonymousEvent", (function() {
				return d
			})), i.d(n, "clickMessageInputEvent", (function() {
				return a
			})), i.d(n, "typeMessageInputEvent", (function() {
				return l
			})), i.d(n, "clickConfirmEvent", (function() {
				return v
			})), i.d(n, "clickCloseModalEvent", (function() {
				return _
			}));
			var r = i("./src/reddit/selectors/telemetry.ts"),
				t = i("./src/reddit/helpers/correlationIdTracker.ts"),
				c = i("./src/reddit/selectors/gild.ts");
			const u = e => ({
					...r.o(e),
					correlationId: Object(c.b)(e) || Object(t.e)(t.a.GiftPremiumFlow, !1),
					screen: r.Z(e),
					subreddit: r.hb(e)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/givePremiumTrackers.aec4b30361e7f7e552cc.js.map