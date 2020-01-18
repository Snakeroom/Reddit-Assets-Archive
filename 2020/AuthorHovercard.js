// https://www.redditstatic.com/desktop2x/AuthorHovercard.e457af7d96fd89ba0f43.js
// Retrieved at 1/17/2020, 11:00:23 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				d = r("./src/reddit/components/Hovercards/helpers.ts"),
				o = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = r("./src/reddit/helpers/isPost.ts"),
				c = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				a = r("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			const m = e => Object(i.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class p extends n.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(l.f)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(d.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: a.a,
						tooltipType: e.tooltipType
					}), r = "".concat(t, "-hover-id"), s = e.author || e.postOrComment.author;
					return n.a.createElement(o.a, {
						authorOrSubredditName: s,
						hoverId: r,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, n.a.createElement(c.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: r,
						sendEvent: e.sendEvent,
						subredditId: m(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: s
					}))
				}
			}
			t.default = Object(u.b)(p)
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				let {
					type: t
				} = e;
				return "subreddit" === t ? "subredditActions" : "profileActions"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/subscription/index.ts"),
				o = r("./src/reddit/selectors/monthsToMinutes.ts"),
				i = r("./src/reddit/selectors/subreddit.ts"),
				c = r("./src/reddit/selectors/user.ts");
			t.a = Object(s.b)(() => Object(n.c)({
				language: c.S,
				subscribeReminderTooltipId: o.C,
				subscribeTooltipId: o.D,
				userIsSubscriber: i.cb
			}), (e, t) => {
				let {
					identifier: r
				} = t;
				return {
					onSubscribe: () => e(d.d([r], !0)),
					onSubscriptionsRequested: () => e(d.e()),
					onUnsubscribe: () => e(d.d([r], !1))
				}
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			}));
			var s, n = r("./src/config.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case s.Ethereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function i(e, t, r) {
				return Object(d.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function c(e, t, r) {
				return await Object(d.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function a(e, t, r) {
				return await Object(d.a)(e, {
					method: "delete",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(s || (s = {}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				d = r("./src/reddit/i18n/components.tsx");
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("title", null, n.a.createElement(d.c, null, "Reddit Premium")), n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/selectors/platform.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const i = new Set(["pollstest", "whatssnoo"]),
				c = new Set([""]),
				a = e => i.has((Object(d.e)(e) || "").toLowerCase()) || c.has((Object(d.e)(e) || "").toLowerCase()) && Object(n.c)(e, {
					experimentEligibilitySelector: o.J,
					experimentName: s.cb
				}) === s.jb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "o", (function() {
				return h
			})), r.d(t, "p", (function() {
				return g
			})), r.d(t, "n", (function() {
				return w
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "l", (function() {
				return H
			})), r.d(t, "s", (function() {
				return y
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "q", (function() {
				return j
			})), r.d(t, "m", (function() {
				return C
			})), r.d(t, "r", (function() {
				return _
			}));
			var s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				n = r("./src/reddit/endpoints/governance/crypto.ts"),
				d = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/selectors/experiments/pollsGA.ts");
			const i = [],
				c = {},
				a = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const s = y(e, {
						subredditId: r
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.harberger ? s.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				l = (e, t) => {
					const r = I(e, t);
					if (r) return r.mainHeader
				},
				m = (e, t) => {
					const r = I(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				p = (e, t) => {
					const r = I(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : c
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				v = (e, t) => {
					if (Object(o.a)(e)) return !0;
					const r = d.d.spPolls(e) || d.d.spKarmaPoints(e),
						s = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (s) {
						const e = !!s.polls && !1 === s.polls.canCreate;
						return r && !e
					}
					return r
				},
				f = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				x = (e, t) => {
					const r = Object(s.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || i
				},
				h = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				g = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || a,
				w = (e, t) => {
					const r = j(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				I = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				H = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				y = (e, t) => {
					const r = H(e, t);
					return r && r.walletProvider
				},
				E = (e, t) => {
					const r = y(e, t),
						s = H(e, t);
					return r && r.provider || s && s.provider
				},
				O = (e, t) => {
					const r = E(e, t);
					return r === n.a.Ethereum || r === n.a.Rinkeby
				},
				j = (e, t) => {
					const r = y(e, t),
						s = E(e, t);
					if (r && !r.inTransition && s === n.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const d = r && r.extra && r.extra.contracts,
						o = d && d.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				C = (e, t) => {
					let {
						subredditId: r
					} = t;
					const s = y(e, {
						subredditId: r
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				_ = (e, t) => {
					const r = H(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=AuthorHovercard.e457af7d96fd89ba0f43.js.map