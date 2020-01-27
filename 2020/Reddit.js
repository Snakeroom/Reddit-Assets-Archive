// https://www.redditstatic.com/desktop2x/Reddit.fd592640f149cacd041b.js
// Retrieved at 1/27/2020, 1:40:18 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, s) {},
		"./assets/fonts/VCR/font.less": function(e, t, s) {},
		"./src/chat/actions/promo/checkPromoInLocalStorage.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/cache/index.ts"),
				a = s("./src/chat/constants/promos.ts"),
				r = s("./src/chat/models/Promo/index.ts");
			t.a = e => {
				const t = Object(n.b)(a.a) || [];
				return e = (e => {
					switch (e) {
						case r.c.LegacySubredditChatFtux:
							return r.a.SubredditChatFtux;
						case r.c.LegacyNSFWWarning:
							return r.b.NSFWWarning;
						default:
							return e
					}
				})(e), t.includes(e)
			}
		},
		"./src/chat/constants/promos.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "chat.promo"
		},
		"./src/chat/helpers/dom.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				a = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts");
			const a = 120 * n.Z;
			t.a = async () => {
				let e = await (async () => await new Promise(e => {
					const t = window.RequestFileSystem || window.webkitRequestFileSystem;
					t ? t(0, 100, () => e(!1), () => e(!0)) : e(void 0)
				}))();
				return e || (e = await (async () => {
					if ("storage" in navigator && "estimate" in navigator.storage) {
						const {
							quota: e
						} = await navigator.storage.estimate();
						return !e || e <= a
					}
				})()), e
			}
		},
		"./src/lib/doubleclickForPublishers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/isFakeSubreddit/index.ts"),
				o = s("./src/lib/fastdom/index.ts");
			const i = new Map,
				c = (e, t) => {
					const s = [n.a.dfpSlotPrefix];
					return t !== a.xb.PROFILE && (Object(r.a)(e) ? s.push("frontpage") : s.push("r.".concat(e))), t === a.xb.INDEX ? s.push(a.xb.LISTING) : t && s.push(t), s.join("/")
				},
				d = (e, t) => {
					e.setTargeting("keywords", t.keywords);
					for (const s in t.properties) e.setTargeting(s, t.properties[s])
				},
				l = (e, t) => {
					p(e);
					const {
						id: s,
						slot: n,
						sizes: a
					} = t, r = window.googletag = window.googletag || {};
					return r.cmd = r.cmd || [], new Promise(c => {
						r.cmd.push(() => {
							o.a.write(() => {
								const o = r.defineSlot(n, a, s);
								if (!o) return c();
								o.addService(r.pubads()), i.set(e, o), o.setCollapseEmptyDiv(!0), d(o, t), r.display(s), c()
							})
						})
					})
				},
				m = (e, t) => {
					const s = i.get(e);
					if (!s) return;
					const n = window.googletag = window.googletag || {};
					n.cmd = n.cmd || [], n.cmd.push(() => {
						Object.keys(t).forEach(e => s.setTargeting(e, t[e]))
					})
				},
				u = (e, t) => {
					const s = i.get(e);
					if (!s) return;
					d(s, t);
					const n = window.googletag = window.googletag || {};
					n.cmd = n.cmd || [], window.aax && window.aax.cmd.push(() => {
						window.aax.getAbpStatus && window.aax.getAbpStatus() && n.cmd.push(() => {
							n.pubads().refresh([s])
						})
					}), window.apstag.fetchBids({
						slots: [{
							slotID: t.id,
							slotName: [t.slot, t.id].join("/"),
							sizes: t.sizes
						}],
						timeout: 2e3
					}, () => {
						n.cmd.push(() => {
							window.apstag.setDisplayBids(), n.pubads().refresh([s])
						})
					})
				},
				p = e => {
					const t = i.get(e);
					if (!t) return;
					const s = window.googletag = window.googletag || {};
					s.cmd = s.cmd || [], s.cmd.push(() => {
						o.a.write(() => {
							s.destroySlots([t]), i.delete(e)
						})
					})
				},
				h = e => {
					const t = () => {
						const t = document.createElement("script");
						t.src = e, t.async = !0;
						const s = document.getElementsByTagName("script")[0];
						s && s.parentNode && s.parentNode.insertBefore(t, s)
					};
					if (document.head && (() => {
							const {
								relList: e
							} = document.createElement("link");
							if (!e || !e.supports) return !1;
							try {
								return e.supports("preload")
							} catch (t) {
								return !1
							}
						})()) {
						const s = document.createElement("link");
						s.href = e, s.rel = "preload", s.as = "script", s.onload = t, document.head.insertBefore(s, document.head.firstChild)
					} else t()
				},
				b = e => {
					const t = window.googletag = window.googletag || {};
					t.cmd = t.cmd || [], h("//www.googletagservices.com/tag/js/gpt.js"), t.cmd.push(() => {
						t.pubads().addEventListener("slotRequested", e.onRequest), t.pubads().disableInitialLoad(), t.enableServices()
					}), window.apstag || (window.apstag = {
						_Q: []
					}, window.apstag.init = function() {
						for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
						window.apstag._Q.push(["i", t])
					}, window.apstag.fetchBids = function() {
						for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
						window.apstag._Q.push(["f", t])
					}, h("//c.amazon-adsystem.com/aax2/apstag.js"), window.apstag.init({
						pubID: "3379",
						adServer: "googletag",
						bidTimeout: 2e3,
						params: {
							aps_privacy: e.limitDataProcessing ? "1YY" : "1--"
						}
					})), window.aax || (window.aax = {
						pubId: "AAX763KC6",
						ver: 1.2,
						initTime: (new Date).getTime(),
						hst: location.hostname,
						deliverExchangeDemand: () => {},
						cmd: [],
						execute: [() => window.aax.limitDataProcessing(e.limitDataProcessing)]
					}, h("//c.aaxads.com/aax.js?pub=".concat(window.aax.pubId, "&hst=").concat(window.aax.hst, "&ver=").concat(window.aax.ver)))
				}
		},
		"./src/lib/isSimpleClick/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				if (e && e.target && (e => {
						let t = e;
						for (; t && t !== window.document.body;) {
							if ("A" === t.nodeName) return !0;
							t = t.parentElement
						}
						return !1
					})(e.target)) {
					if (e.ctrlKey) return !1;
					if (e.altKey) return !1;
					if (e.metaKey) return !1;
					if (e.shiftKey) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/alpha.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./src/config.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				r = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts");
			var i = s("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeRequest/index.ts");
			async function u(e, t) {
				return await Object(m.b)({
					method: l.bb.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			}));
			const p = e => async (t, s, n) => {
				let {
					apiContext: l
				} = n;
				(await
					function(e) {
						return Object(a.b)(Object(r.a)(e, [o.a]), {
							endpoint: "".concat(e.apiUrl, "/api/leave_redesign_beta"),
							method: "post",
							type: "json"
						})
					}(l())).ok ? (Object(i.b)(), await u(l(), !0), e && window.location.reload()) : (u(l(), !1), t(Object(c.e)({
					kind: d.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, h = () => async (e, t, s) => {
				let {
					apiContext: c
				} = s;
				Object(i.a)(),
					function(e) {
						Object(a.b)(Object(r.a)(e, [o.a]), {
							endpoint: "".concat(e.apiUrl, "/api/join_redesign_beta"),
							method: "post",
							type: "json"
						}).then(() => {
							const {
								pathname: e,
								search: t
							} = window.location, s = "".concat(n.a.redditUrl).concat(e).concat(t);
							window.location.replace(s)
						})
					}(c())
			}
		},
		"./src/reddit/actions/chat/promo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/chat/actions/promo/checkPromoInLocalStorage.ts"),
				r = s("./src/chat/actions/promo/constants.ts"),
				o = s("./src/chat/models/Promo/index.ts"),
				i = s("./src/reddit/selectors/chat.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = Object(n.a)(r.a),
				l = Object(n.a)(r.b),
				m = () => async (e, t) => {
					const s = t(),
						n = Object(a.a)(o.a.SubredditChatFtux),
						r = Object(c.cb)(s),
						l = Object(c.n)(s),
						m = Object(i.f)(s);
					!n && !r && l && m && e(d(o.a.SubredditChatFtux))
				}
		},
		"./src/reddit/actions/economics/helpers/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchAll", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/curry.js"),
				a = s.n(n),
				r = s("./src/reddit/actions/badge.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				i = s("./src/reddit/actions/economics/tips/thunkedActions.ts"),
				c = s("./src/reddit/actions/governance/communityDetails.ts"),
				d = s("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				l = s("./src/reddit/featureFlags/index.ts");
			const m = {
					badgesroyaletest: "t5_socj8",
					ethtrader: "t5_37jgj",
					fortnitebr: "t5_3oeyf",
					funkygoose: "t5_kzsl3"
				},
				u = a()((e, t) => t.some(t => l.d[t](e))),
				p = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const {
						commentIds: l = [],
						postIds: p = [],
						skip: h = []
					} = e;
					let b = e.subredditId;
					if (!b) {
						e.subredditName && (b = m[e.subredditName.toLowerCase()])
					}
					if (!b) return;
					const g = [],
						f = p.concat(l),
						x = s(),
						P = u(x),
						C = x.comments.models,
						v = x.posts.models,
						E = new Set(x.user.account ? [x.user.account.id] : []);
					p.forEach(e => {
						const t = v[e];
						t && E.add(t.authorId)
					}), l.forEach(e => {
						const t = C[e];
						t && E.add(t.authorId)
					});
					const O = Array.from(E);
					!h.includes("badges") && O.length && P(["spBadges", "spLoadtest", "spPremium"]) && g.push(t(Object(r.l)({
						subredditId: b,
						userIds: O
					}))), !h.includes("communityDetails") && P(["spKarmaPoints", "spLoadtest", "spPoints", "spSupport"]) && g.push(t(Object(c.a)({
						subredditId: b
					}))), !h.includes("subscription") && P(["spLoadtest", "spPremium"]) && g.push(t(Object(o.f)(b))), !h.includes("tips") && f.length && P(["spLoadtest", "spSupport"]) && g.push(t(Object(i.a)({
						subredditId: b,
						contentIds: f
					}))), !h.includes("wallets") && O.length && P(["spKarmaPoints", "spLoadtest", "spPoints"]) && g.push(t(Object(d.a)({
						subredditId: b,
						userIds: O
					}))), await Promise.all(g)
				}
		},
		"./src/reddit/actions/economics/paymentSystems/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const r = Object(n.a)(a.a),
				o = Object(n.a)(a.e),
				i = Object(n.a)(a.b),
				c = Object(n.a)(a.c),
				d = Object(n.a)(a.d)
		},
		"./src/reddit/actions/economics/paymentSystems/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/endpoints/economics/paymentSystems.ts"),
				a = s("./src/reddit/actions/economics/paymentSystems/actionCreators.ts");
			const r = () => async (e, t, s) => {
				let {
					apiContext: r
				} = s;
				e(Object(a.d)());
				const o = await Object(n.d)(r());
				o.ok ? e(Object(a.c)(o.body)) : e(Object(a.b)({
					error: o.error
				}))
			}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forOwn.js"),
				a = s.n(n),
				r = s("./src/reddit/actions/governance/errorToast.ts"),
				o = s("./src/reddit/endpoints/economics/emojis.ts"),
				i = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = s("./src/reddit/endpoints/economics/subredditPremium.ts"),
				d = s("./src/reddit/endpoints/governance/badges.ts"),
				l = s("./src/config.ts"),
				m = s("./src/reddit/endpoints/governance/requester.ts");

			function u(e, t, s) {
				return Object(m.a)(e, {
					method: "get",
					endpoint: "".concat(l.a.metaUrl, "/products/").concat(t, "?owners=").concat(s) + "&types=emotes_pack,giphy"
				})
			}
			var p = s("./src/reddit/models/Badge/index.ts"),
				h = s("./src/reddit/models/Badge/managementPage.ts"),
				b = s("./src/reddit/models/Product/index.ts"),
				g = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = s("./src/reddit/selectors/economics.ts"),
				x = s("./src/reddit/selectors/products.ts"),
				P = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function C(e) {
				return !!e && "removeBadge" === e.type
			}

			function v(e) {
				if (!C(e)) return e
			}
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "c", (function() {
				return S
			}));
			const E = () => async (e, t, s) => {
				let {
					apiContext: n
				} = s;
				const a = t().user.account,
					r = !t().economics.specialMemberships.allSubscriptionsFetched;
				if (a && r) {
					const t = await Object(i.b)(n());
					if (t.ok) {
						e(Object(P.a)(t.body));
						const s = Object.keys(t.body);
						if (s.length) {
							const t = await Object(i.e)(n(), s);
							t.ok && e(Object(P.g)(t.body))
						}
					}
				}
			}, O = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				const o = n().user.account,
					i = n().economics.subredditPremium[e],
					d = !i || i.status !== g.a.Fetched || t;
				if (o && d) {
					const t = await Object(c.a)(r(), e, o.id);
					s(Object(P.i)(t))
				}
			}, y = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				const o = s(),
					i = o.user.account,
					c = Object(f.f)(o, e.subredditId),
					l = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (i && e.badge) {
					let s, n;
					s = e.placement === p.a.First ? c[h.a.Loyalty] : e.placement === p.a.Second ? c[h.a.Achievement] : c[h.a.Cosmetic], t(Object(P.b)(Object.assign({}, e, {
						badge: v(e.badge),
						currentAppliedBadges: l,
						userId: i.id
					}))), C(e.badge) && s ? n = await Object(d.a)(a(), e.subredditId, s.id, !1) : C(e.badge) || (n = await Object(d.a)(a(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(P.b)(Object.assign({}, e, {
						badge: s,
						currentAppliedBadges: l,
						userId: i.id
					}))), Object(r.a)(t, n.error))
				}
			}, j = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				await s(O(e, !0));
				const o = n().economics.subredditPremium[e];
				if (o && o.status === g.a.Fetched) {
					const n = o.data.userOwnedBadges.find(e => e.type === t.id);
					n && (s(y({
						badge: n,
						subredditId: e,
						placement: n.placement
					})), s(Object(P.e)(h.c.MyBadges)))
				}
			}, w = e => async (t, s, n) => {
				let {
					apiContext: i
				} = n;
				const c = s().user.account,
					d = !s().economics.emotes[e],
					l = !s().economics.gifs[e];
				if (c && (d || l)) {
					const [s, n] = await Promise.all([Object(o.b)(i(), e), u(i(), e, c.id)]);
					if (!n.ok) return void Object(r.a)(t, n.error);
					const d = {
						emotes: [],
						emoteCollections: s.ok ? s.body : {},
						giphy: []
					};
					a()(n.body, e => {
						e.type === b.a.EmotesPack ? d.emotes.push(e) : e.type === b.a.Giphy && d.giphy.push(e)
					}), t(Object(P.f)({
						subredditId: e,
						products: d
					}))
				}
			}, S = (e, t, s) => async (n, a, r) => {
				let {
					apiContext: o
				} = r;
				if (await n(O(e, !0)), s && t) {
					const s = a(),
						r = Object(f.f)(s, e),
						o = Object(x.a)(s, t);
					if (!r[Object(h.d)(o.placement)] && o) {
						const t = Object(f.l)(s, {
							subredditId: e,
							badge: o
						});
						t && await n(y({
							badge: t,
							subredditId: e
						}))
					}
					n(Object(P.d)({
						subredditId: e,
						initialView: h.c.MyBadges
					}))
				}
			}
		},
		"./src/reddit/actions/economics/tips/thunkedActions.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/endpoints/economics/tips.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/economics/tips/constants.ts");
			const o = Object(a.a)(r.a);
			s.d(t, "a", (function() {
				return i
			}));
			const i = e => async (t, s, a) => {
				let {
					apiContext: r
				} = a;
				const i = await Object(n.a)(r(), e);
				i.ok && t(o({
					subredditId: e.subredditId,
					tipData: i.body
				}))
			}
		},
		"./src/reddit/actions/emailCollection/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return b
			}));
			var n = s("./node_modules/lodash/once.js"),
				a = s.n(n),
				r = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/notificationBanner.ts"),
				i = s("./src/reddit/actions/preferences.ts"),
				c = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				d = s("./src/reddit/components/Settings/modalIds.ts"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/selectors/emailCollection.ts");
			const u = a()(l.c),
				p = () => async (e, t) => {
					const s = t();
					u(), Object(m.a)(s) && (await e(Object(i.x)()), Object(m.a)(t()) && e(Object(o.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					const s = t();
					Object(m.a)(s) && (Object(l.b)(), e(Object(o.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					e(Object(r.g)(d.c))
				}
		},
		"./src/reddit/actions/notifications/loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/loadWithRetries/index.ts");
			t.a = () => Object(n.a)(() => s.e("PushNotifications").then(s.bind(null, "./src/reddit/actions/notifications/index.ts")))
		},
		"./src/reddit/actions/notifications/preferences.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				r = s("./src/config.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/notificationPrefs.ts"),
				u = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/actions/notifications/constants.ts");
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			}));
			const h = Object(n.a)(p.d),
				b = Object(n.a)(p.c),
				g = Object(n.a)(p.b),
				f = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const a = t();
					if (!Object(u.i)(a)) return;
					const d = Object(m.b)(a),
						l = Object(m.a)(a);
					if (d || l) return;
					e(h());
					const p = await (e => Object(i.b)(e, {
						endpoint: Object(c.a)("".concat(r.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: o.bb.GET
					}))(n());
					if (p.ok) {
						const t = (e => ({
							chatMessages: !(!e.chat_message && !e.chat_request),
							communityRecommendations: !!e.subreddit_recommendation,
							liveEvent: !!e.live_event,
							trendingPosts: !!e.lifecycle_post_suggestions,
							unreadMessages: !!(e.comment_reply || e.post_reply || e.private_message || e.username_mention),
							upvotedComments: !!e.upvote_comment,
							upvotedPosts: !!e.upvote_post
						}))(p.body);
						e(b({
							preferences: t
						}))
					} else e(g(p.error))
				}, x = Object(n.a)(p.k), P = Object(n.a)(p.j), C = Object(n.a)(p.i), v = e => async (t, s, n) => {
					let {
						apiContext: p
					} = n;
					const h = s();
					if (!Object(u.i)(h)) return;
					if (Object(m.e)(h)) return;
					const b = Object(m.d)(h);
					t(x({
						preferences: e
					}));
					const g = await ((e, t) => Object(i.b)(e, {
						endpoint: Object(c.a)("".concat(r.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: o.bb.POST,
						data: {
							preferences: JSON.stringify({
								chat_message: t.chatMessages,
								chat_request: t.chatMessages,
								comment_reply: t.unreadMessages,
								lifecycle_post_suggestions: t.trendingPosts,
								live_event: t.liveEvent,
								post_reply: t.unreadMessages,
								private_message: t.unreadMessages,
								subreddit_recommendation: t.communityRecommendations,
								username_mention: t.unreadMessages,
								upvote_comment: t.upvotedComments,
								upvote_post: t.upvotedPosts
							})
						}
					}))(p(), e);
					g.ok ? (t(P()), t(Object(a.e)({
						kind: l.b.SuccessCommunity,
						text: Object(d.c)("Changes saved")
					}))) : t(C({
						error: g.error,
						preferences: b
					}))
				}
		},
		"./src/reddit/actions/notifications/state.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/actions/notifications/constants.ts"),
				a = s("./src/reddit/actions/notifications/utils.ts");
			const r = {
					isEnabled: !1,
					isSubscriptionActive: !1,
					permission: n.a.Default
				},
				o = {
					denied: n.a.Denied,
					granted: n.a.Granted
				};
			const i = new class {
					constructor() {
						this.isInitializing = !1, this.isReady = !1, this.isSubscriptionActive = !1, this.permission = n.a.Default, this.listeners = new Set, this.initialize = async e => {
							if (this.isReady || this.isInitializing) return;
							await Object(a.a)(e) === n.f.NotificationsSupported && (this.isInitializing = !0, await this.subscribeToPermissionsChange(), await this.updateIsSubscriptionEnabled(), this.isInitializing = !1, this.isReady = !0, this.notifyAll())
						}, this.updatePermission = () => {
							this.permission = o[Notification.permission] || n.a.Default
						}, this.updateIsSubscriptionEnabled = async () => {
							const e = await window.navigator.serviceWorker.getRegistrations();
							for (const t of e) {
								if (await t.pushManager.getSubscription()) return void(this.isSubscriptionActive = !0)
							}
						}, this.recalculate = async () => {
							this.isReady && (this.updatePermission(), await this.updateIsSubscriptionEnabled(), this.notifyAll())
						}, this.getCurrentState = () => {
							return {
								isEnabled: this.isSubscriptionActive && this.permission === n.a.Granted,
								isSubscriptionActive: this.isSubscriptionActive,
								permission: this.permission
							}
						}, this.subscribe = e => {
							this.listeners.has(e) || this.listeners.add(e), this.isReady && e(this.getCurrentState())
						}, this.unsubscribe = e => {
							this.listeners.delete(e)
						}
					}
					async subscribeToPermissionsChange() {
						if (!window.navigator.permissions || !window.navigator.permissions.query) return;
						const e = await window.navigator.permissions.query({
							name: "notifications"
						});
						this.updatePermission(), e.onchange = () => {
							this.updatePermission(), this.notifyAll()
						}
					}
					notifyAll() {
						this.isReady && this.listeners.forEach(e => {
							e(this.getCurrentState())
						})
					}
				},
				c = i.subscribe,
				d = i.unsubscribe,
				l = i.initialize,
				m = i.recalculate
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/localStorageAvailable/index.ts"),
				a = s("./src/reddit/actions/notifications/constants.ts"),
				r = s("./src/reddit/featureFlags/index.ts");
			const o = e => r.d.pushNotificationsBrowserSupported(e) ? Object(n.a)() ? window.Notification && window.ServiceWorker && window.PushManager && window.navigator.serviceWorker ? a.f.NotificationsSupported : a.f.NotAllRequiredAPIsSupported : a.f.LocalStorageUnavailable : a.f.BrowserUnsupported
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/reddit/actions/economics/helpers/index.ts"),
				r = s("./src/reddit/actions/pages/subreddit.ts"),
				o = s("./src/reddit/actions/users.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				c = s("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const s = t().platform.currentPage;
				if (s && s.routeMatch && s.routeMatch.match) {
					const d = (s.routeMatch.match.params || {}).subredditName;
					if (d) {
						const s = [],
							l = t();
						Object(c.J)(l) || s.push(e(Object(o.u)()));
						const m = Object(n.a)(d, null);
						s.push(e(Object(r.i)(m, d, {}))), await Promise.all(s);
						const u = Object(i.G)(t(), d);
						await e(Object(a.fetchAll)({
							subredditId: u,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/extractQueryParams/index.ts"),
				i = s("./src/lib/filterQueryParams/index.ts"),
				c = s("./src/reddit/actions/chat/userSettings.ts"),
				d = s("./src/reddit/actions/economics/paymentSystems/thunkedActions.ts"),
				l = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				m = s("./src/reddit/actions/externalAccount.ts"),
				u = s("./src/reddit/actions/notifications/preferences.ts"),
				p = s("./src/reddit/actions/platform.ts"),
				h = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/actions/profile/index.ts"),
				g = s("./src/reddit/actions/subredditSettings.ts"),
				f = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/actions/users.ts"),
				P = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/helpers/externalAccount/index.tsx"),
				v = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				E = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				O = s("./src/reddit/selectors/externalAccount.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/actions/pages/shared.ts");
			const w = e => async (t, s) => {
				await t(Object(x.u)());
				const w = [t(Object(h.x)(!0)), t(Object(l.a)())];
				s().economics.paymentSystems.status === E.a.NotFetched && w.push(t(Object(d.a)())), await Promise.all(w); {
					const e = s();
					if (!Object(y.J)(e)) return Object(v.a)(t, e)
				}
				const {
					page: S = r.Kb.Account
				} = e.params;
				if (S === r.Kb.Gold) return void t(Object(n.c)("/settings/premium"));
				const M = [];
				S === r.Kb.Profile && (M.push(t(Object(b.a)())), M.push(t(Object(g.e)()))), S === r.Kb.Account && M.push(t(Object(m.o)())), S === r.Kb.Notifications && M.push(t(Object(u.a)())), S !== r.Kb.Privacy && S !== r.Kb.Messaging || M.push(t(Object(c.b)())), await Promise.all(M); {
					const e = s(),
						r = e.platform.currentPage,
						{
							url: c
						} = r,
						d = Object(o.a)(c).get(P.c);
					if (d && (t(Object(n.c)(Object(i.a)(c, [P.c]))), Object(O.a)(e))) {
						const s = Object(y.S)(e),
							n = Object(a.a)(s, "settings.accountForm.connectedAccounts.twitterConnected.toast");
						t(Object(f.e)({
							text: n
						})), Object(C.b)(d)
					}
				}
				t(Object(p.l)({
					title: Object(j.b)(s(), "settings")
				}))
			}
		},
		"./src/reddit/actions/pages/subredditCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/actions/platform.ts"),
				r = s("./src/reddit/actions/tags/index.ts"),
				o = s("./src/reddit/actions/users.ts"),
				i = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = () => async (e, t) => {
				let s = t();
				e(a.l({
					title: Object(n.a)(s.user.language, "title.subredditCreation")
				})), await e(Object(o.u)()), s = t(), Object(c.J)(s) ? await e(Object(r.e)()) : Object(i.a)(e, s)
			}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, s) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU"
			}
		},
		"./src/reddit/components/AccountManagerModal/index.m.less": function(e, t, s) {
			e.exports = {
				Overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				IframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				iframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				small: "FBb4FZ4ng7CvLYrT6LBdp",
				CloseButton: "MwlhXQb0KInl56DKx-Vgr",
				closeButton: "MwlhXQb0KInl56DKx-Vgr",
				Close: "_24ByKZGON4_gdr3vEJ9Was",
				close: "_24ByKZGON4_gdr3vEJ9Was"
			}
		},
		"./src/reddit/components/AlertBanner/Wrapper.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "GfthJQJvWCHdUoMi6YjYa",
				wrapper: "GfthJQJvWCHdUoMi6YjYa"
			}
		},
		"./src/reddit/components/AlertBanner/heights.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			}));
			const n = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showM2MTopBanner]: !!t.showM2MTopBanner,
					[e.showSuspended]: !!t.showSuspended
				}),
				a = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				})
		},
		"./src/reddit/components/AlertBanner/index.m.less": function(e, t, s) {
			e.exports = {
				underlineLink: "vOGtEDdh1mVbkqinhg3Ov",
				underlineButton: "_1uQwMnfXrOfzkL_CFxH6fd",
				wrapper: "_3el1HrJryfAxBUzu4HsIhE",
				deprecated: "_2s1xq3Ji1Oj7oZtdSqWznV",
				fpr: "_36j6vvbAY0wIrxbyXuNQhn",
				suspended: "_1ivoPEQV9lryC0mH-f_uGY",
				closeButton: "_1oAzKCYwbVOQ-AbuRZfMg2",
				closeIcon: "_6aklZuhHMm1XJcsi8dEeP"
			}
		},
		"./src/reddit/components/AppRouter/index.m.less": function(e, t, s) {
			e.exports = {
				header: "cx1ohrUAq6ARaXTX2u8YN",
				showDeprecated: "_378Md-M6pOqwzEiV3lAwYk",
				showFPR: "_2P-zXcOfggYIWnL3EfXUHP",
				showFpr: "_2P-zXcOfggYIWnL3EfXUHP",
				showM2MTopBanner: "lFh-yJxFAehr1v_mfimce",
				showSuspended: "_3o7sV2ySJ76-f1ktwzclmi",
				inline: "_2aHCVoJEFfwy05xpKqUif2",
				overlayContentWrapper: "_2DJXORCrmcNpPTSq0LqL6i",
				mIsCommentsLightbox: "_26pbaCw90eAC80WRqUfICJ",
				mIsLargeCommentsLightbox: "_2zCdbqYzIDmabv-Dk_ILKk",
				overlayWrapper: "_2mIbM_6nl-2OnOGEbEMRXa",
				main: "_1nxEQl5D2Bx2jxDILRHemb",
				mShowingPaddedPinnedDescriptions: "_3x1dyL19KnZ4kI6i9TlRp4",
				pinnedSubscriptions: "zoWOQnp55WuhEugRSwfw1",
				withUpsell: "_1kFzDy0hQVq-CvguZsCcmV",
				lightboxHeaderWrapper: "_3obgdFz00GvpqpuX8QCsNK",
				mTopBannerAdjustments: "_36-AorT6BJ2gKt8J8gGOU1",
				bottomAdContainer: "_2SL_DAWw1V6pxZysgrdeBe",
				sidebarFooter: "_2AJ0ZwpZtFJ10GdcU0CUew",
				sidebarFooterWithAd: "_1ht98h5gXjzYhFyRZgB0Pv",
				bottomSpacer: "_14-8KVF3BKuTNsLNWcOG2X",
				showEmailCollectionBanner: "_25N7Qd1z8aRQYtQhjEFyTC",
				overlayScrollContainer: "_29IbETWb5VVDcfk_-GumWz",
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym"
			}
		},
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/isEqual.js"),
				a = s.n(n),
				r = s("./node_modules/lodash/omit.js"),
				o = s.n(r),
				i = s("./node_modules/lodash/throttle.js"),
				c = s.n(i),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router/esm/react-router.js"),
				p = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				b = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				P = s("./src/lib/fastdom/index.ts"),
				C = s("./src/lib/FocusTrap/index.ts"),
				v = s("./src/lib/isSimpleClick/index.ts"),
				E = s("./src/reddit/actions/header.ts"),
				O = s("./src/reddit/actions/monthsToMinutes/initHomeFeed.ts"),
				y = s("./src/higherOrderComponents/makeAsync.tsx"),
				j = s("./src/lib/loadWithRetries/index.ts");
			var w = Object(y.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(j.a)(() => s.e("EmailCollectionBanner").then(s.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx"))).then(e => e.default),
					LoadingComponent: () => null
				}),
				S = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				M = s("./node_modules/polished/dist/polished.es.js"),
				I = s("./node_modules/react-motion/lib/react-motion.js"),
				N = s("./src/lib/lessComponent.tsx"),
				k = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				_ = s("./src/lib/addQueryParams/index.ts"),
				T = s("./src/reddit/actions/preferences.ts"),
				L = s("./src/reddit/constants/accountManager.ts"),
				R = s("./src/reddit/constants/experiments.ts"),
				A = s("./src/reddit/constants/history.ts"),
				F = s("./src/reddit/constants/listings.ts"),
				D = s("./src/reddit/constants/parameters.ts"),
				B = s("./src/reddit/helpers/history/index.ts"),
				U = s("./src/reddit/helpers/monthsToMinutes/index.ts");
			const H = e => e.accountManagerModalData.actionSource;
			var V = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				W = s("./src/reddit/selectors/meta.ts"),
				Q = s("./src/reddit/selectors/monthsToMinutes.ts"),
				G = s("./src/reddit/selectors/telemetry.ts"),
				q = s("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				z = s.n(q);
			const Z = k.a.redditUrl,
				K = N.a.iframe("IFrame", z.a),
				J = Object(h.a)((e, t) => t.path, (e, t) => t.uiMode, Q.w, Q.i, H, W.b, V.a, (e, t, s, n, a, r, o) => {
					let i = "".concat(k.a.accountManagerOrigin).concat(e);
					if (o && (i = Object(_.a)(i, {
							[R.x]: o,
							uiMode: t
						})), e === L.b.Index || e === L.b.ChangePassword) return i;
					const c = s && n.length > 0;
					if (i = Object(_.a)(i, {
							actionSource: a
						}), c) {
						const e = n.map(e => e.id).join(",");
						i = Object(_.a)(i, {
							subredditIds: e
						})
					}
					return i
				}),
				Y = Object(h.c)({
					accountManagerSrc: J,
					actionSource: H,
					frontpageSignupVariant: V.a,
					redirectUrl: e => e.accountManagerModalData.redirectUrl
				}),
				X = Object(m.b)(Y, (e, t) => ({
					oniFrameLoaded: (t, s) => {
						e((e, n) => {
							t.contentWindow.postMessage({
								events: Object.assign({}, Object(G.defaults)(n()), {
									actionSource: s
								}),
								type: "eventData"
							}, Z)
						})
					},
					onTwoFactorChanged: () => e(Object(T.x)(!1))
				})),
				$ = e => {
					let {
						data: t,
						origin: s
					} = e;
					return t && t.success && (t.type === L.a.ChangePassword || t.type === L.a.Close || t.type === L.a.CreateAccount || t.type === L.a.Login || t.type === L.a.Register || t.type === L.a.Resize || t.type === L.a.Subscribe || t.type === L.a.TwoFactorChanged) && s === k.a.accountManagerOrigin
				};
			class ee extends l.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = l.a.createRef(), this.isAccountCreated = !1, this.focusFirstVisibleIframeInput = () => {
						try {
							if (!this.iframeRef.current) return;
							const e = this.iframeRef.current.contentWindow ? this.iframeRef.current.contentWindow.document : this.iframeRef.current.contentDocument;
							if (!e) return;
							const t = e.querySelector('input:not([type="hidden"])');
							t && t.focus()
						} catch (e) {}
					}, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && $(e))
							if (t.type === L.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === L.a.Close) this.close();
						else if (t.type === L.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === L.a.Login) Object(U.b)(), this.onLogIn();
						else if (t.type === L.a.ChangePassword) this.onChangePassword();
						else if (t.type === L.a.Resize) {
							if (t.payload && this.iframeRef.current) {
								const e = t.payload;
								e.height && e.width && (this.iframeRef.current.style.height = "".concat(e.height, "px"), this.iframeRef.current.style.width = "".concat(e.width, "px"))
							}
						} else t.type === L.a.TwoFactorChanged ? this.props.onTwoFactorChanged() : (Object(U.b)(), this.onSignUp(t.numberSubredditsSelected, t.subredditIds))
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(B.a)(A.a.JustLoggedIn, !0), window.location.reload(!0))
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload(!0)
					}, this.onSignUp = (e, t) => {
						let s = "";
						if (this.props.redirectUrl) s = this.props.redirectUrl;
						else if ("/" !== window.location.pathname) s = window.location.pathname;
						else {
							const n = 0;
							s = (e || t && t.length || 0) > n ? F.c[F.b.Home] : F.c[F.b.Popular]
						}
						this.redirectTo(s)
					}, this.redirectTo = e => {
						window.location.replace(Object(_.a)(e, {
							[D.n]: "true"
						}))
					}, this.close = () => {
						this.props.onClose && this.props.onClose();
						try {
							sessionStorage.removeItem("data"), sessionStorage.removeItem("initialData")
						} catch (e) {}
						this.isAccountCreated && this.onSignUp()
					}
				}
				componentDidMount() {
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						this.props.oniFrameLoaded(this.iframeRef.current, this.props.actionSource), this.focusFirstVisibleIframeInput()
					}), window.addEventListener("message", this.onMessage)
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage)
				}
				render() {
					const {
						accountManagerSrc: e,
						className: t
					} = this.props;
					return l.a.createElement(K, {
						className: t,
						innerRef: this.iframeRef,
						src: e
					})
				}
			}
			var te = X(ee),
				se = s("./src/reddit/components/TrackingHelper/index.tsx");
			const ne = [],
				ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne;
					return t => Object.assign({}, G.defaults(t), {
						action: "click",
						noun: "exit",
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: "onboarding"
					})
				};
			var re = s("./src/reddit/i18n/components.tsx"),
				oe = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				ie = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				ce = s("./src/reddit/components/Carousel/index.tsx"),
				de = s("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				le = s.n(de);
			const me = N.a.div("Container", le.a),
				ue = N.a.wrapped(ce.b, "Carousel", le.a),
				pe = N.a.div("Phone", le.a),
				he = N.a.img("Frame", le.a),
				be = "".concat(k.a.assetPath, "/img/frontpage-signup/android-frame.png"),
				ge = "".concat(k.a.assetPath, "/img/frontpage-signup/iphone-frame.png"),
				fe = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				xe = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var Pe = e => {
					const {
						className: t
					} = e;
					return l.a.createElement(me, {
						className: t
					}, l.a.createElement(pe, {
						className: le.a.android
					}, l.a.createElement(ue, {
						animationType: ce.a.Fade,
						className: le.a.android,
						delay: 2500,
						items: fe,
						itemTime: 5e3,
						itemWidth: 240
					}), l.a.createElement(he, {
						src: be
					})), l.a.createElement(pe, {
						className: le.a.iphone
					}, l.a.createElement(ue, {
						animationType: ce.a.Fade,
						className: le.a.iphone,
						items: xe,
						itemTime: 5e3,
						itemWidth: 232
					}), l.a.createElement(he, {
						src: ge
					})))
				},
				Ce = s("./src/reddit/i18n/utils.ts"),
				ve = s("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				Ee = s.n(ve);
			const Oe = N.a.div("Container", Ee.a),
				ye = N.a.span("Disclaimer", Ee.a),
				je = N.a.a("Link", Ee.a);
			var we = e => l.a.createElement(Oe, {
					className: e.className
				}, l.a.createElement(je, {
					href: "https://about.reddit.com"
				}, Object(Ce.c)("about")), l.a.createElement(je, {
					href: "https://www.redditinc.com/advertising"
				}, Object(Ce.c)("advertise")), l.a.createElement(je, {
					href: "http://www.redditblog.com/"
				}, Object(Ce.c)("blog")), l.a.createElement(je, {
					href: "https://about.reddit.com/careers/"
				}, Object(Ce.c)("careers")), l.a.createElement(je, {
					href: "https://www.reddithelp.com"
				}, Object(Ce.c)("help")), l.a.createElement(je, {
					href: "https://about.reddit.com/press/"
				}, Object(Ce.c)("press")), l.a.createElement(je, {
					href: "https://www.reddit.com/mobile/download"
				}, Object(Ce.c)("The Reddit App")), l.a.createElement(je, {
					href: "https://www.reddit.com/coins"
				}, Object(Ce.c)("Reddit coins")), l.a.createElement(je, {
					href: "http://redditgifts.com/"
				}, Object(Ce.c)("Reddit gifts")), l.a.createElement(je, {
					href: "https://www.reddit.com/premium"
				}, Object(Ce.c)("Reddit premium")), l.a.createElement(je, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, Object(Ce.c)("User agreement")), l.a.createElement(je, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, Object(Ce.c)("Mod policy")), l.a.createElement(ye, null, Object(Ce.c)("© 2019 Reddit, Inc. All rights reserved"))),
				Se = s("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				Me = s.n(Se);
			const Ie = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				Ne = N.a.div("Container", Me.a),
				ke = N.a.wrapped(te, "IFrame", Me.a),
				_e = N.a.wrapped(Pe, "Images", Me.a),
				Te = N.a.wrapped(we, "Links", Me.a),
				Le = N.a.div("MainContent", Me.a),
				Re = N.a.div("MainContentColumn", Me.a),
				Ae = N.a.button("NotReady", Me.a),
				Fe = N.a.span("NotReadyText", Me.a),
				De = N.a.wrapped(oe.a, "NotReadyIcon", Me.a),
				Be = Object(f.a)(e => {
					const {
						className: t,
						containerRef: s,
						frontpageSignupVariant: n,
						onCloseClick: a,
						onVisibilityChange: r
					} = e, o = Object(ie.a)(e).bodyText;
					return l.a.createElement(S.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: r
					}, l.a.createElement(Ne, {
						className: t,
						innerRef: s
					}, l.a.createElement(Le, null, l.a.createElement(Re, null, l.a.createElement(_e, null, "Images Placeholder")), l.a.createElement(Re, null, l.a.createElement(ke, {
						className: Object(b.a)({
							[Me.a.fields]: Object(V.b)(n)
						}),
						path: L.b.Register,
						uiMode: L.c.Embed
					}))), l.a.createElement(Ae, {
						onClick: a,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(M.m)(.8, o)
						}
					}, l.a.createElement(Fe, null, l.a.createElement(re.c, null, "Not ready to sign up yet?")), l.a.createElement(De, null)), l.a.createElement(Te, null)))
				});
			class Ue extends l.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class He extends l.a.Component {
				constructor() {
					super(...arguments), this.containerRef = l.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(ae()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = "-".concat(this.containerRef.current.offsetHeight, "px"), this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return l.a.createElement(Ue, {
							scrollTo: t
						})
					}
				}
				render() {
					const {
						className: e,
						frontpageSignupVariant: t
					} = this.props, {
						isClosed: s
					} = this.state, n = s && this.containerRef.current ? this.containerRef.current.offsetHeight : 0;
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(Be, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), l.a.createElement(I.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(I.spring)(n, Ie)
						}
					}, this.renderScroller))
				}
			}
			var Ve = Object(se.b)(He),
				We = s("./node_modules/js-cookie/src/js.cookie.js"),
				Qe = s.n(We),
				Ge = s("./src/lib/localStorageAvailable/index.ts"),
				qe = s("./src/reddit/actions/modal.ts"),
				ze = Object(y.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("BadgePurchaseModal").then(s.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				Ze = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx");
			var Ke = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumPurchaseModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/PurchaseModal/index.tsx")).then(e => e.default)
			});
			var Je = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsSupportPaymentModal")]).then(s.bind(null, "./src/reddit/components/Economics/Support/PaymentModal/index.tsx")).then(e => e.default)
			});
			const Ye = () => null;
			var Xe = Object(y.a)({
					ErrorComponent: Ye,
					getComponent: () => Object(j.a)(() => s.e("ManageChatRoomsModal").then(s.bind(null, "./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.tsx"))).then(e => e.default),
					LoadingComponent: Ye
				}),
				$e = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var et = Object(y.a)({
				getComponent: () => Object(j.a)(() => s.e("NotificationsPrePromptLoader").then(s.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const tt = () => null;
			var st = Object(y.a)({
					ErrorComponent: tt,
					getComponent: () => Object(j.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~ModerationPages~SubredditWiki"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: tt
				}),
				nt = s("./src/higherOrderComponents/asModal/index.tsx"),
				at = s("./src/reddit/actions/structuredStyles/index.ts"),
				rt = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ot = s("./src/reddit/constants/modals.ts"),
				it = s("./src/reddit/controls/TextButton/index.tsx"),
				ct = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const dt = Object(m.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					closeModal: () => {
						e(Object(qe.i)(ot.a.BLADE_NIGHTMODE)), e(Object(at.f)())
					},
					openBlade: () => {
						e(Object(at.e)(s))
					}
				}
			});
			var lt = Object(nt.a)(dt(e => l.a.createElement(rt.c, null, l.a.createElement(rt.g, null, l.a.createElement(ct.a, null, l.a.createElement(rt.n, null, l.a.createElement(re.c, null, "Turning off Night Mode")), l.a.createElement(it.a, {
					onClick: e.closeModal
				}, l.a.createElement(rt.b, null)))), l.a.createElement(rt.j, null, l.a.createElement(rt.l, null, l.a.createElement(re.c, null, "In order to continue styling your community, Night Mode must be turned off."))), l.a.createElement(rt.e, null, l.a.createElement(rt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, l.a.createElement(re.c, null, "Cancel")), l.a.createElement(rt.o, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, l.a.createElement(re.c, null, "Continue")))))),
				mt = s("./src/reddit/actions/authorFlair.ts"),
				ut = s("./src/reddit/actions/userFlair.ts"),
				pt = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				ht = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				bt = s("./src/reddit/components/FlairPreview/index.tsx"),
				gt = s("./src/reddit/components/FlairSearch/index.tsx"),
				ft = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				xt = s("./src/reddit/controls/Button/index.tsx"),
				Pt = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				Ct = s("./src/reddit/layout/row/Inline/index.tsx"),
				vt = s("./src/reddit/models/Flair/index.ts"),
				Et = s("./src/reddit/models/User/index.ts"),
				Ot = s("./src/reddit/selectors/authorFlair.ts"),
				yt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				jt = s("./src/reddit/selectors/user.ts"),
				wt = s("./src/reddit/selectors/userFlair.ts"),
				St = s("./src/reddit/components/UserFlairPicker/index.m.less"),
				Mt = s.n(St);
			const It = e => e.inContextAuthor && e.currentUser && Object(Et.f)(e.currentUser) === e.inContextAuthor.username,
				Nt = e => e.authorFlair || It(e) && e.userFlairData.applied || null,
				kt = N.a.wrapped(Ct.a, "Section", Mt.a),
				_t = N.a.div("CheckboxText", Mt.a);
			class Tt extends l.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(G.subredditById)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						const {
							props: e,
							state: t
						} = this, s = t.previewFlair ? t.previewFlair.templateId : void 0;
						e.activeFlairChanged(t.previewFlair, s, t.showFlair, e.inContextAuthor), e.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: Nt(e),
						showFlair: e.userFlairData.displaySettings.isUserEnabled
					}
				}
				canSave() {
					const {
						userFlairData: e
					} = this.props, {
						previewFlair: t
					} = this.state, {
						templates: s,
						permissions: n
					} = e, {
						isUserEnabled: a
					} = e.displaySettings, r = this.state.showFlair !== a, o = Nt(this.props);
					if (!n.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(ft.b)(s, t, o);
					return !(i || c !== ft.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: s,
						subredditId: n
					} = e, a = s.permissions.canUserChange, r = s.permissions.canUserChange, {
						templates: o,
						templateIds: i
					} = s, c = this.canSave(), d = It(e);
					return l.a.createElement(ht.a, null, l.a.createElement(pt.a, {
						onClosePressed: e.closeModal,
						title: Object(Ce.c)("Select your community flair")
					}), l.a.createElement(bt.a, {
						flair: t.previewFlair,
						flairTemplateType: vt.d.UserFlair,
						placeholderText: Object(Ce.c)("u/username")
					}), r && l.a.createElement(gt.a, {
						flair: t.previewFlair,
						flairTemplateType: vt.d.UserFlair,
						subredditId: n,
						templates: o,
						templateIds: i,
						onChange: this.setSelectedFlair
					}), d && l.a.createElement(kt, null, l.a.createElement(Pt.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: l.a.createElement(_t, null, l.a.createElement(re.c, null, "Show my user flair on this community"))
					})), l.a.createElement("div", {
						className: Mt.a.buttonsRow
					}, l.a.createElement(xt.f, {
						disabled: !c,
						onClick: this.onApply
					}, Object(Ce.c)("Apply")), a && l.a.createElement(xt.i, {
						className: Mt.a.clearButton,
						onClick: this.onClear
					}, Object(Ce.c)("Clear Flair"))))
				}
			}
			const Lt = Object(m.b)(() => Object(h.c)({
				authorFlair: Ot.b,
				currentUser: jt.i,
				inContextAuthor: Ot.c,
				isMod: (e, t) => !!Object(yt.j)(e, t),
				userFlairData: wt.c
			}), (e, t) => ({
				activeFlairChanged: (s, n, a, r) => e(Object(ut.o)(s, n, a, r.username, t.subredditId)),
				closeModal: () => e(Object(mt.b)({
					username: null,
					subredditId: null
				}))
			}))(Tt);
			var Rt = Object(nt.a)(Object(se.b)(Lt)),
				At = s("./src/reddit/selectors/activeModalId.ts"),
				Ft = s("./src/reddit/selectors/notificationPrefs.ts"),
				Dt = s("./src/reddit/selectors/platform.ts"),
				Bt = s("./src/reddit/selectors/removalReasons.ts"),
				Ut = s("./src/reddit/selectors/subredditModeration.ts"),
				Ht = s("./src/reddit/constants/cookie.ts"),
				Vt = s("./src/reddit/featureFlags/index.ts"),
				Wt = s("./src/reddit/helpers/localStorage/index.ts"),
				Qt = s("./src/reddit/helpers/toggleBodyScroll/index.ts");

			function Gt() {
				return (Gt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const qt = Object(h.c)({
				anyModalIsOpen: e => !!e.activeModalId,
				authorContext: Ot.c,
				badgePurchaseModalIsOpen: Object(At.b)(ot.a.BADGE_PURCHASE),
				banContext: Ut.f,
				banModalIsOpen: Object(At.b)(ot.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(At.b)(ot.a.BLADE_NIGHTMODE),
				chatroomSettingsModalIsOpen: Object(At.b)(ot.a.SUBREDDIT_CHAT_SETTINGS),
				createChatroomModalIsOpen: Object(At.b)(ot.a.CREATE_SUBREDDIT_CHAT),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				currentPaymentTarget: e => e.economics.currentPaymentTarget,
				currentSubredditPremiumCorrelationId: e => e.economics.currentModalArgs ? e.economics.currentModalArgs.correlationId : void 0,
				economicsSupportPaymentModalIsOpen: Object(At.b)(ot.a.ECONOMY_SUPPORT_MODAL),
				editChatroomModalIsOpen: Object(At.b)(ot.a.EDIT_SUBREDDIT_CHAT),
				deleteChatroomModalIsOpen: Object(At.b)(ot.a.DELETE_SUBREDDIT_CHAT),
				introModalFeatureEnabled: e => Vt.d.introModal(e),
				isOverlayOpen: Dt.i,
				manageChatroomModalIsOpen: Object(At.b)(ot.a.MANAGE_SUBREDDIT_CHAT),
				moderatorPermissions: e => {
					const t = Object(Dt.d)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Ut.C,
				muteModalIsOpen: Object(At.b)(ot.a.MUTE_USER),
				notificationsPrePromptIsOpen: Ft.c,
				removalReasonContext: Bt.b,
				removalReasonModalIsOpen: Object(At.b)(ot.a.ADD_REMOVAL_REASON),
				subredditId: Dt.d,
				subredditPremiumPurchaseModalOpen: Object(At.b)(ot.a.SUBREDDIT_PREMIUM_PURCHASE_MODAL),
				userFlairModalIsOpen: Object(At.b)(ot.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: jt.v,
				userInRedesignBeta: jt.D,
				userIsLoggedIn: jt.J,
				userIsMod: jt.K,
				userIsNew: jt.L
			});
			class zt extends l.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Ge.a)()) return; {
						const e = Qe.a.get(Ht.a);
						e && Qe.a.remove(Ht.a, {
							domain: k.a.cookieDomain
						});
						const t = Object(Wt.r)(ot.a.ALPHA_CONSUMER);
						t && Object(Wt.C)(ot.a.ALPHA_CONSUMER), (e || t) && Object(Wt.T)(ot.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, s = Object(Wt.r)(ot.a.REDESIGN_MODAL);
					!e && s ? t() : e && !s && Object(Wt.T)(ot.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), this.props.anyModalIsOpen ? setTimeout(() => Object(Qt.a)(), 500) : setTimeout(() => Object(Qt.b)(), 500)
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: s,
						banModalIsOpen: n,
						bladeNightmodeModalIsOpen: a,
						chatroomSettingsModalIsOpen: r,
						createChatroomModalIsOpen: o,
						currentBadgePurchase: i,
						currentPaymentTarget: c,
						currentSubredditPremiumCorrelationId: m,
						economicsSupportPaymentModalIsOpen: u,
						editChatroomModalIsOpen: p,
						deleteChatroomModalIsOpen: h,
						manageChatroomModalIsOpen: b,
						muteContext: g,
						muteModalIsOpen: f,
						notificationsPrePromptIsOpen: x,
						removalReasonContext: P,
						removalReasonModalIsOpen: C,
						sendEvent: v,
						subredditId: E,
						subredditPremiumPurchaseModalOpen: O,
						toggleBanModal: y,
						toggleMuteModal: j,
						toggleRemovalReasonsModal: w,
						userFlairModalIsOpen: S
					} = this.props, M = (e, t, s) => n => () => v(a => ({
						source: e,
						action: "click",
						noun: n,
						comment: s && Object(G.comment)(a, s),
						post: s && Object(G.post)(a, s),
						screen: Object(G.screen)(a),
						subreddit: Object(G.subredditById)(a, t)
					}));
					return l.a.createElement(d.Fragment, null, n && s && l.a.createElement(Ze.a, {
						contextId: s.contextId,
						subredditId: s.subredditId,
						toggleModal: y,
						trackAddEvent: M("banned", s.subredditId, s.contextId)("add_in_context"),
						trackEventWithName: M("banned", s.subredditId, s.contextId),
						username: s.username
					}), f && g && l.a.createElement($e.a, {
						contextId: g.contextId,
						subredditId: g.subredditId,
						toggleModal: j,
						trackAddEvent: M("muted", g.subredditId, g.contextId)("add_in_context"),
						username: g.username
					}), (o || b || h || p || r) && E && l.a.createElement(Xe, {
						subredditId: E,
						withOverlay: !0
					}), C && P && l.a.createElement(st, {
						itemIds: P.itemIds,
						subredditId: P.subredditId,
						toggleModal: w,
						trackClick: M("removal_reasons", P.subredditId, 1 === P.itemIds.length ? P.itemIds[0] : void 0)
					}), a && E && l.a.createElement(lt, {
						subredditId: E
					}), S && e && e.subredditId && l.a.createElement(Rt, {
						subredditId: e.subredditId
					}), t && i && l.a.createElement(ze, {
						withOverlay: !0,
						productId: i
					}), x && l.a.createElement(et, null), u && c && l.a.createElement(Je, Gt({
						withOverlay: !0
					}, c)), O && l.a.createElement(Ke, {
						ignoreDefaultFocus: !0,
						withOverlay: !0,
						correlationId: m
					}))
				}
			}
			var Zt = Object(m.b)(qt, e => ({
				markRedesignModalAsClosed: () => e(Object(qe.j)()),
				toggleBanModal: () => e(Object(qe.i)(ot.a.BAN_USER)),
				toggleBladeNightmodeModal: () => e(Object(qe.i)(ot.a.BLADE_NIGHTMODE)),
				toggleMuteModal: () => e(Object(qe.i)(ot.a.MUTE_USER)),
				toggleRemovalReasonsModal: () => e(Object(qe.i)(ot.a.ADD_REMOVAL_REASON))
			}))(Object(se.b)(zt));
			const Kt = {},
				Jt = () => null;

			function Yt(e, t) {
				if (e in Kt) throw new Error("Modal with id ".concat(e, " already registered!"));
				Kt[e] = t
			}
			var Xt = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				$t = s("./src/reddit/icons/svgs/Close/index.tsx"),
				es = s("./src/reddit/components/AccountManagerModal/index.m.less"),
				ts = s.n(es);
			const ss = N.a.div("Overlay", ts.a),
				ns = N.a.div("IframeContainer", ts.a),
				as = N.a.button("CloseButton", ts.a),
				rs = N.a.wrapped($t.a, "Close", ts.a),
				os = Object(h.c)({
					frontpageSignupVariant: V.a
				}),
				is = {
					[L.b.ChangePassword]: ot.a.CHANGE_PASSWORD_MODAL_ID,
					[L.b.Index]: ot.a.LOGIN_MODAL_ID,
					[L.b.Register]: ot.a.REGISTER_MODAL_ID,
					[L.b.EnableTwoFactor]: ot.a.ENABLE_TWO_FACTOR,
					[L.b.DisableTwoFactor]: ot.a.DISABLE_TWO_FACTOR,
					[L.b.TwoFactorBackupCodes]: ot.a.TWO_FACTOR_BACKUP_CODES
				};
			class cs extends l.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === L.b.Register && Object(V.f)(this.props.frontpageSignupVariant) && Xt.a.throttleFeature(R.x), this.props.sendEvent(ae(this.subscriptions))
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						path: t
					} = this.props, s = Object(V.c)(e) || Object(V.d)(e);
					return l.a.createElement(ss, null, l.a.createElement(ns, {
						className: s && ts.a.small
					}, !s && l.a.createElement(as, {
						onClick: this.closeModal
					}, l.a.createElement(rs, null)), l.a.createElement(te, {
						onClose: this.closeModal,
						onSubscriptionsChanged: this.updateSubscriptions,
						path: t
					})))
				}
			}
			const ds = Object(m.b)(os, (e, t) => ({
				closeModal: t => {
					e(Object(qe.g)(is[t]))
				}
			}))(Object(se.b)(cs));
			Yt(ot.a.CHANGE_PASSWORD_MODAL_ID, e => l.a.createElement(ds, {
				path: L.b.ChangePassword
			})), Yt(ot.a.LOGIN_MODAL_ID, e => l.a.createElement(ds, {
				path: L.b.Index
			})), Yt(ot.a.ENABLE_TWO_FACTOR, e => l.a.createElement(ds, {
				path: L.b.EnableTwoFactor
			})), Yt(ot.a.DISABLE_TWO_FACTOR, e => l.a.createElement(ds, {
				path: L.b.DisableTwoFactor
			})), Yt(ot.a.TWO_FACTOR_BACKUP_CODES, e => l.a.createElement(ds, {
				path: L.b.TwoFactorBackupCodes
			})), Yt(ot.a.REGISTER_MODAL_ID, e => l.a.createElement(ds, {
				path: L.b.Register
			}));
			const ls = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("BadgePickerModal").then(s.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.BADGE_PICKER, e => l.a.createElement(ls, {
				withOverlay: !0
			}));
			const ms = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestPendingModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.CONTRIBUTOR_REQUEST_PENDING, e => l.a.createElement(ms, {
				withOverlay: !0
			}));
			const us = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestRequestModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.CONTRIBUTOR_REQUEST, e => l.a.createElement(us, {
				withOverlay: !0
			}));
			const ps = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumBadgeManagement").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => l.a.createElement(ps, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const hs = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("SubredditPremiumUploadModal")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => l.a.createElement(hs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const bs = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("HarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.HARBERGER_TAX_BANNER_MANAGE, e => l.a.createElement(bs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const gs = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("HarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.HARBERGER_TAX_BANNER_PURCHASE, e => l.a.createElement(gs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const fs = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("CryptoHarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => l.a.createElement(fs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const xs = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("CryptoHarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => l.a.createElement(xs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ps = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceOptOutModal").then(s.bind(null, "./src/reddit/components/Governance/OptOutModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.GOVERNANCE_OPT_OUT, e => l.a.createElement(Ps, null));
			const Cs = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("GovernanceReleaseNotesModal")]).then(s.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.GOVERNANCE_RELEASE_NOTES, e => l.a.createElement(Cs, {
				withOverlay: !0
			}));
			const vs = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("GovernanceTransferPointsModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.TRANSFER_POINTS, e => l.a.createElement(vs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Es = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.WALLET_REGISTRATION_MODAL, e => l.a.createElement(Es, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Os = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditAddSubredditModal").then(s.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.MULTIREDDIT_ADD_SUBREDDIT, e => l.a.createElement(Os, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ys = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditCreateModal").then(s.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.MULTIREDDIT_CREATE, e => l.a.createElement(ys, {
				onOverlayClick: e,
				withOverlay: !0
			})), Yt(ot.a.MULTIREDDIT_DUPLICATE, e => l.a.createElement(ys, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const js = Object(y.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditEditModal").then(s.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Yt(ot.a.MULTIREDDIT_EDIT, e => l.a.createElement(js, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ws = Object(y.a)({
				getComponent: () => Object(j.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("PainterModalLoader")]).then(s.bind(null, "./src/reddit/components/PainterModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			Yt(ot.a.PAINTER_MODAL, e => l.a.createElement(ws, {
				withOverlay: !0,
				toggleModal: e
			}));
			const Ss = () => null,
				Ms = Object(y.a)({
					ErrorComponent: Ss,
					getComponent: () => Object(j.a)(() => s.e("GlobalModalContainer").then(s.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Ss
				});
			Yt(ot.a.PINNED_POSTS_LIMIT_REACHED, e => l.a.createElement(Ms, null));
			var Is = s("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Ns = s.n(Is);
			const {
				fbt: ks
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _s = N.a.h2("ColumnLabel", Ns.a), Ts = N.a.wrapped(Ct.a, "ColumnWrapper", Ns.a), Ls = N.a.div("Column", Ns.a), Rs = N.a.div("Description", Ns.a), As = N.a.div("Key", Ns.a), Fs = N.a.wrapped(rt.j, "ModalMain", Ns.a), Ds = N.a.wrapped(rt.c, "ModalBody", Ns.a), Bs = N.a.wrapped(xt.f, "PrimaryButton", Ns.a), Us = N.a.wrapped(it.a, "TextButton", Ns.a), Hs = Object(m.b)(null, e => ({
				closeModal: () => e(Object(qe.i)(ot.a.KEYBOARD_SHORTCUTS))
			})), Vs = N.a.wrapped(Object(nt.a)(Hs(e => l.a.createElement(Ds, {
				onClick: e => e.stopPropagation()
			}, l.a.createElement(rt.g, null, l.a.createElement(ct.a, null, l.a.createElement(rt.n, null, ks._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), l.a.createElement(Us, {
				onClick: e.closeModal
			}, l.a.createElement(rt.b, null)))), l.a.createElement(Fs, null, l.a.createElement(Ts, null, l.a.createElement(Ls, null, l.a.createElement(Ct.a, null, l.a.createElement(_s, null, ks._("Navigation", null, {
				hk: "3zSWEe"
			}))), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), l.a.createElement(As, null, "Shift + ?")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Next post or comment", null, {
				hk: "1m8s9z"
			})), l.a.createElement(As, null, "J")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), l.a.createElement(As, null, "K")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), l.a.createElement(As, null, "N")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), l.a.createElement(As, null, "P")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Open post", null, {
				hk: "2wD7mh"
			})), l.a.createElement(As, null, "Enter")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Open/close expando", null, {
				hk: "1yDst0"
			})), l.a.createElement(As, null, "X")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Go to post link", null, {
				hk: "c0TNr"
			})), l.a.createElement(As, null, "L"))), l.a.createElement(Ls, null, l.a.createElement(Ct.a, null, l.a.createElement(_s, null, ks._("Action", null, {
				hk: "3QI6pT"
			}))), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Upvote", null, {
				hk: "5i9NP"
			})), l.a.createElement(As, null, "A")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Downvote", null, {
				hk: "1ef3YP"
			})), l.a.createElement(As, null, "Z")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("New post", null, {
				hk: "4dtNWf"
			})), l.a.createElement(As, null, "C")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Reply to comment", null, {
				hk: "G8AbT"
			})), l.a.createElement(As, null, "R")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Submit comment/post", null, {
				hk: "13agk7"
			})), l.a.createElement(As, null, "Ctrl + Enter")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Save", null, {
				hk: "3Dtwo5"
			})), l.a.createElement(As, null, "S")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Hide", null, {
				hk: "2Dn9GF"
			})), l.a.createElement(As, null, "H")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Open navigation", null, {
				hk: "QdGe2"
			})), l.a.createElement(As, null, "Q")), l.a.createElement(Ct.a, null, l.a.createElement(Rs, null, ks._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), l.a.createElement(As, null, "Enter"))))), l.a.createElement(rt.e, null, l.a.createElement(Bs, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, ks._("Close", null, {
				hk: "2R1HDp"
			})))))), "ConnectedModal", Ns.a);
			Yt(ot.a.KEYBOARD_SHORTCUTS, e => l.a.createElement(Vs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ws = Object(y.a)({
				getComponent: () => Object(j.a)(() => s.e("SpezModalLoader").then(s.bind(null, "./src/reddit/components/SpezModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			Yt(ot.a.SPEZ_MODAL, e => l.a.createElement(Ws, {
				withOverlay: !0,
				toggleModal: e
			}));
			const Qs = Object(h.c)({
					allowNavigationCallback: Dt.a
				}),
				Gs = Object(m.b)(Qs, e => ({
					closeModal: () => e(Object(qe.i)(ot.a.BLADE_UNSAVED_CHANGES)),
					closeBlade: () => e(Object(at.a)())
				}));
			class qs extends l.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return l.a.createElement(rt.c, null, l.a.createElement(rt.g, null, l.a.createElement(ct.a, null, l.a.createElement(rt.n, null, l.a.createElement(re.c, null, "Discard unsaved changes before leaving?")), l.a.createElement(it.a, {
						onClick: this.onCancelClick
					}, l.a.createElement(rt.b, null)))), l.a.createElement(rt.j, null, l.a.createElement(rt.m, null, l.a.createElement(re.c, null, "You have made some changes to your community, do you wish to leave this menu without saving?"))), l.a.createElement(rt.e, null, l.a.createElement(rt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, l.a.createElement(re.c, null, "Cancel")), l.a.createElement(rt.o, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, l.a.createElement(re.c, null, "Discard"))))
				}
			}
			const zs = Object(nt.a)(Gs(qs));
			Yt(ot.a.BLADE_UNSAVED_CHANGES, e => l.a.createElement(zs, {
				withOverlay: !0
			}));
			const Zs = Object(h.c)({
					activeModalId: At.a
				}),
				Ks = Object(m.b)(Zs, e => ({
					toggleModal: t => e(Object(qe.i)(t))
				})),
				Js = 500,
				Ys = () => {};
			class Xs extends l.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					this.props.activeModalId ? setTimeout(() => Object(Qt.a)(), Js) : setTimeout(() => Object(Qt.b)(), Js)
				}
				componentWillUnmount() {
					Object(Qt.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					var t;
					return ((t = e) && t in Kt ? Kt[t] : Jt)(e ? this.toggleModal : Ys)
				}
			}
			var $s = Ks(Xs),
				en = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				tn = s("./src/reddit/actions/page.ts"),
				sn = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/app/strings/index.ts")),
				nn = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				an = s("./src/reddit/components/ProfileIcon/index.m.less"),
				rn = s.n(an);

			function on(e) {
				return l.a.createElement("img", {
					alt: Object(Ce.c)("Profile icon"),
					src: e.iconUrl || "".concat(k.a.assetPath, "/img/placeholder_gradient_light-280.png"),
					className: Object(b.a)(rn.a.img, e.className)
				})
			}
			var cn = s("./src/reddit/components/SEOTitle/index.tsx"),
				dn = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ln = s("./src/reddit/icons/svgs/All/index.tsx");

			function mn(e) {
				return l.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, l.a.createElement("g", null, l.a.createElement("path", {
					d: "M14,4V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V13a1,1,0,0,0,1,1H4V6A2,2,0,0,1,6,4Z"
				}), l.a.createElement("path", {
					d: "M16,5H6A1,1,0,0,0,5,6V16a1,1,0,0,0,1,1h4a5,5,0,0,1-1-3,5,5,0,0,1,5-5,5,5,0,0,1,3,1V6A1,1,0,0,0,16,5Z"
				}), l.a.createElement("path", {
					d: "M19.21,17.79,17.43,16A4,4,0,0,0,18,14a4,4,0,1,0-4,4,4,4,0,0,0,2-.57l1.77,1.77a1,1,0,0,0,1.41-1.41ZM14,16a2,2,0,1,1,2-2A2,2,0,0,1,14,16Z"
				})))
			}
			var un = s("./src/reddit/icons/svgs/Coin/index.tsx"),
				pn = s("./src/reddit/icons/svgs/Envelope/index.tsx");
			var hn = e => l.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 14 14",
					version: "1.1"
				}, l.a.createElement("path", {
					d: "M4.863 8.963a1.6 1.6 0 0 0 .586.585L3.332 10.77a.804.804 0 0 1-.607.079.8.8 0 0 1-.486-.372L.708 7.824A.8.8 0 0 1 1 6.732l2.12-1.224c-.001.273.065.55.21.802l1.533 2.653zm8.43-3.983a.8.8 0 0 1-.372 1.133L6.57 8.896a.8.8 0 0 1-1.014-.333L4.025 5.91a.8.8 0 0 1 .218-1.045L9.829.755A.799.799 0 0 1 10.995 1l2.298 3.98zM7.666 9.756l1.6 2.4a.8.8 0 0 1-1.331.888L7 11.642l-.934 1.402a.8.8 0 0 1-1.331-.887l1.6-2.4c.296-.446 1.034-.446 1.33 0z",
					fill: "currentColor",
					fillRule: "evenodd"
				})),
				bn = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				gn = s("./src/reddit/constants/colors.ts"),
				fn = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				},
				xn = Object(f.a)(e => {
					var {
						className: t,
						isBadged: s
					} = e, n = fn(e, ["className", "isBadged"]);
					return l.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg"
					}, l.a.createElement("path", {
						d: "M15,9.9V8A5,5,0,0,0,5,8V9.9c-2.41.45-4,1.24-4,2.13,0,1.41,4,2.56,9,2.56s9-1.15,9-2.56C19,11.14,17.41,10.35,15,9.9Zm-2,.94a9.62,9.62,0,0,1-3,.39,9.62,9.62,0,0,1-3-.39V8a3,3,0,0,1,6,0Z"
					}), l.a.createElement("path", {
						d: "M2.74,14.6l3,2.12a7.39,7.39,0,0,0,8.6,0l3-2.12a24.63,24.63,0,0,1-7.26,1A24.63,24.63,0,0,1,2.74,14.6Z"
					}), l.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "4",
						fill: s ? Object(ie.a)(n).body : "none"
					}), l.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "3",
						fill: s ? gn.a.orangered : "none"
					}))
				}),
				Pn = s("./src/reddit/icons/svgs/Moderate/index.tsx");

			function Cn() {
				return (Cn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var vn, En = e => l.a.createElement("svg", Cn({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), l.a.createElement("path", {
					d: "M17,5H6A1,1,0,0,0,5,6V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V6A1,1,0,0,0,17,5ZM7,7.5A.5.5,0,0,1,7.5,7h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM15.5,16h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5H13a.5.5,0,0,1,0-1h2.5a.5.5,0,0,1,0,1Z"
				}), l.a.createElement("path", {
					d: "M6,4h9.47a2.09,2.09,0,0,1,.51.07V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H4.09A2.09,2.09,0,0,1,4,15.49V6A2,2,0,0,1,6,4Z"
				})),
				On = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				yn = s("./src/reddit/icons/svgs/Post/index.tsx"),
				jn = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				wn = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				Sn = s("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Mn = s.n(Sn);
			! function(e) {
				e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.Explore = "Explore", e.GlobalSearch = "GlobalSearch", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModMailBeta = "ModMailBeta", e.ModQueue = "ModQueue", e.Multi = "Multi", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(vn || (vn = {}));
			const In = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [s, n] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return l.a.createElement(l.a.Fragment, null, s && "".concat(s, "/"), n && l.a.createElement(cn.b, {
					type: cn.a.HeaderSelector
				}, n))
			};
			var Nn = s("./src/lib/objectSelector/index.ts"),
				kn = s("./src/reddit/constants/wiki.ts"),
				_n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Tn = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				Ln = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Rn = s("./src/reddit/selectors/subreddit.ts"),
				An = s("./src/reddit/selectors/topic.ts");
			var Fn = Object(Nn.a)((e, t) => {
					let {
						pageLayer: s
					} = t;
					const n = !!e.user.account,
						a = Object(_n.T)(s);
					switch (a) {
						case "index":
						case "listing": {
							const t = Object(Q.g)(e) && Object(Q.n)(e);
							return n || t ? {
								type: vn.Home
							} : {
								type: vn.Popular
							}
						}
						case "modListing":
							return {
								type: vn.ModListing
							};
						case "modQueuePages":
							return {
								type: vn.ModQueue
							};
						case "postCreation":
							return {
								type: vn.CreatePost
							};
						case "postDraft":
							return {
								type: vn.ViewDraft
							};
						case "subredditCreation":
							return {
								type: vn.SubredditCreation
							};
						case "coins":
							return {
								type: vn.Coins
							};
						case "premium":
							return {
								type: vn.Premium
							};
						case "appeal":
							return {
								type: vn.Appeal
							};
						case "explore":
							return {
								type: vn.Explore
							};
						case "report":
							return {
								type: vn.Report
							};
						case "userDataRequest":
							return {
								type: vn.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: vn.DailyCharts
							};
						case "topic": {
							const t = Object(_n.s)(s),
								n = t && Object(An.b)(e, t, !0);
							if (n) return {
								type: vn.Topic,
								model: n
							}
						}
					}
					const r = e.user.account;
					if (r) switch (a) {
						case "inboxPages":
							return {
								type: vn.Inbox, model: r
							};
						case "settings":
							return {
								type: vn.Settings, model: r
							}
					}
					const o = Object(_n.N)(e, {
						pageLayer: s
					});
					if ("all" === o) return {
						type: vn.All
					};
					if ("popular" === o) return {
						type: vn.Popular
					};
					const i = Object(_n.q)(e, {
						pageLayer: s
					});
					if (i) return "searchResults" === a ? {
						type: vn.CommunitySearch,
						model: i
					} : {
						type: vn.Community,
						model: i
					};
					const c = Object(_n.d)(e, {
						pageLayer: s
					});
					if (c) return {
						type: vn.Multi,
						model: c
					};
					if (Object(_n.l)(e, {
							pageLayer: s
						}) && Object(Tn.a)(e, {
							expEventOverride: !1
						})) return {
						type: vn.Explore
					};
					const d = Object(_n.j)(e, {
						pageLayer: s
					});
					if (d) return {
						type: vn.UserProfile,
						model: d
					};
					const l = Object(_n.h)(s);
					if (l) return {
						type: vn.UserProfileName,
						name: "u/".concat(l)
					};
					if (a && "searchResults" === a) return {
						type: vn.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(_n.n)(e, {
								pageLayer: s
							}) || kn.e,
							n = Object(Rn.B)(e, {
								subredditName: t
							});
						if (n) return {
							type: vn.Community,
							model: n
						}
					}
					return "rpan" === a && Object(Ln.a)(e) ? {
						type: vn.PublicAccessNetwork
					} : {
						type: vn.Unknown
					}
				}),
				Dn = (s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				Bn = s("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				Un = s.n(Bn);

			function Hn() {
				return (Hn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function Vn(e) {
				const t = e.icon,
					s = e.text,
					n = {
						id: e.id,
						role: "menuitem",
						children: l.a.createElement(l.a.Fragment, null, l.a.createElement(t, {
							className: Un.a.icon
						}), l.a.createElement(s, {
							className: Un.a.text
						})),
						className: Object(b.a)(Un.a.item, e.className, {
							[Un.a.mFocused]: !!e.isFocused,
							[Un.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return n["aria-label"] = e.to || e.label, e.to ? e.externalLink ? l.a.createElement("a", Hn({}, n, {
					href: e.to,
					target: "_blank"
				})) : l.a.createElement(en.a, Hn({}, n, {
					to: e.to
				})) : l.a.createElement("button", n)
			}
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var Wn = s("./src/reddit/helpers/overlay/index.ts"),
				Qn = s("./src/reddit/routes/modListing/index.ts"),
				Gn = s("./src/reddit/selectors/multireddit.ts"),
				qn = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				zn = s("./src/lib/LinkedListMap/index.ts");
			const Zn = Object(h.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Gn.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				language: e => e.user.language,
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Gn.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var Kn;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Kn || (Kn = {}));
			const Jn = [(e, t) => ({
					id: vn.Employee,
					type: Kn.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(xn, {
								className: Object(b.a)(t, Mn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, "Employee Communities")
						}
					},
					telemetryNoun: "employee"
				})],
				Yn = [(e, t) => ({
					id: vn.All,
					type: Kn.GenericLink,
					model: {
						url: "/r/all/",
						displayText: Object(sn.a)(t, "subscriptions.all"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(ln.a, {
								className: Object(b.a)(t, Mn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(re.c, null, "All"))
						}
					},
					telemetryNoun: "all"
				}), (e, t) => ({
					id: vn.DailyCharts,
					type: Kn.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: Dn.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(bn.a, {
								className: Object(b.a)(t, Mn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, Dn.fbt._("Top Communities", null, {
								hk: "1KzP9v"
							}))
						}
					},
					telemetryNoun: "daily_charts"
				})],
				Xn = [(e, t) => ({
					id: "reddit-feeds",
					type: Kn.Header,
					model: {
						displayText: Object(sn.a)(t, "subscriptions.redditFeeds")
					}
				}), (e, t, s) => ({
					id: vn.Home,
					type: Kn.GenericLink,
					model: {
						url: "/",
						displayText: Object(sn.a)(t, "header.home"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(xn, {
								className: Object(b.a)(t, Mn.a.itemIcon),
								isBadged: s && s.isBadged
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(re.c, null, "Home"))
						}
					},
					telemetryNoun: "home"
				}), (e, t) => ({
					id: vn.Popular,
					type: Kn.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: Object(sn.a)(t, "subscriptions.popular"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(On.a, {
								className: Object(b.a)(t, Mn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(re.c, null, "Popular"))
						}
					},
					telemetryNoun: "popular"
				}), ...Yn],
				$n = [(e, t) => ({
					id: "reddit-feeds",
					type: Kn.Header,
					model: {
						displayText: Object(sn.a)(t, "subscriptions.redditFeeds")
					}
				}), (e, t, s) => {
					const n = !s.exploreV2Variant;
					return {
						id: n ? vn.Home : vn.Popular,
						type: Kn.GenericLink,
						model: {
							url: n ? "/" : "/r/popular/",
							displayText: Object(sn.a)(t, "subscriptions.popular"),
							icon: e => {
								let {
									className: t
								} = e;
								return l.a.createElement(On.a, {
									className: Object(b.a)(t, Mn.a.itemIcon)
								})
							},
							text: e => {
								let {
									className: t
								} = e;
								return l.a.createElement("span", {
									className: t
								}, l.a.createElement(re.c, null, "Popular"))
							}
						},
						telemetryNoun: "popular"
					}
				}, ...Yn],
				ea = [(e, t) => ({
					id: "reddit-other",
					type: Kn.Header,
					model: {
						displayText: Object(sn.a)(t, "subscriptions.otherFeeds")
					}
				}), (e, t) => ({
					id: vn.Settings,
					type: Kn.GenericLink,
					model: {
						url: "/settings",
						displayText: Object(sn.a)(t, "header.settings"),
						icon: t => {
							let {
								className: s
							} = t;
							return l.a.createElement(on, {
								className: s,
								iconUrl: e.accountIcon
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(re.c, null, "User Settings"))
						}
					},
					telemetryNoun: "settings"
				}), (e, t) => ({
					id: vn.Inbox,
					type: Kn.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: Object(sn.a)(t, "header.messages"),
						icon: t => {
							let {
								className: s
							} = t;
							return l.a.createElement(on, {
								className: s,
								iconUrl: e.accountIcon
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(re.c, null, "Messages"))
						}
					},
					telemetryNoun: "mail"
				}), (e, t) => ({
					id: vn.CreatePost,
					type: Kn.GenericLink,
					model: {
						url: "/submit",
						displayText: Object(sn.a)(t, "header.newPost"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(yn.a, {
								className: Object(b.a)(t, Mn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(re.c, null, "Create Post"))
						}
					},
					telemetryNoun: "create_post"
				})],
				ta = [(e, t) => ({
					id: vn.Coins,
					type: Kn.GenericLink,
					model: {
						url: "/coins",
						displayText: Object(sn.a)(t, "header.coins"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(un.a, {
								className: Object(b.a)(t, Mn.a.itemCoin)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(re.c, null, "Coins"))
						}
					},
					telemetryNoun: "coins"
				}), (e, t) => ({
					id: vn.Premium,
					type: Kn.GenericLink,
					model: {
						url: "/premium",
						displayText: Object(sn.a)(t, "header.premium"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(jn.a, {
								className: Object(b.a)(t, Mn.a.itemPremium)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(re.c, null, "Premium"))
						}
					},
					telemetryNoun: "premium"
				})],
				sa = [(e, t) => ({
					id: vn.ModQueue,
					type: Kn.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: Object(sn.a)(t, "header.modQueue"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(Pn.a, {
								className: Object(b.a)(t, Mn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(re.c, null, "Mod Queue"))
						}
					},
					telemetryNoun: "mod_queue"
				}), (e, t) => ({
					id: vn.ModMailBeta,
					type: Kn.GenericLink,
					model: {
						url: "https://mod.reddit.com/mail/all",
						displayText: Object(sn.a)(t, "header.modMailBeta"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(pn.a, {
								className: Object(b.a)(t, Mn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(re.c, null, "Modmail Beta"))
						}
					},
					telemetryNoun: "modmail_beta"
				}), (e, t) => ({
					id: vn.ModMail,
					type: Kn.GenericLink,
					model: {
						url: "/message/moderator",
						displayText: Object(sn.a)(t, "header.modMail"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(pn.a, {
								className: Object(b.a)(t, Mn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(re.c, null, "Modmail"))
						}
					},
					telemetryNoun: "modmail"
				})];

			function na(e, t, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Kn.Header,
					model: {
						displayText: Object(sn.a)(s, "subscriptions.subscriptions")
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Kn.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Kn.Header,
					model: {
						displayText: Object(sn.a)(s, "subscriptions.profiles")
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Kn.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var aa = s("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				ra = s.n(aa);

			function oa(e) {
				return l.a.createElement("div", {
					className: Object(b.a)(ra.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var ia = s("./src/reddit/actions/subscription/index.ts"),
				ca = s("./src/reddit/helpers/trackers/customFeeds.ts"),
				da = e => {
					let {
						className: t
					} = e;
					return l.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20"
					}, l.a.createElement("g", {
						fill: "inherit",
						fillRule: "evenodd"
					}, l.a.createElement("polygon", {
						points: "15.437 17.594 10.189 14.837 4.941 17.594 5.944 11.755 1.698 7.619 7.565 6.767 10.189 1.454 12.813 6.767 18.68 7.619 14.434 11.755"
					})))
				},
				la = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				ma = s.n(la);

			function ua() {
				return (ua = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const pa = Object(h.c)({
					currentUser: jt.i,
					hideNSFWPref: jt.z,
					isLoggedIn: jt.J
				}),
				ha = Object(m.b)(pa, (e, t) => ({
					toggleFavorite: s => {
						switch (s.stopPropagation(), s.preventDefault(), t.type) {
							case Kn.Subreddit:
								e(Object(ia.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Kn.Profile:
								e(Object(ia.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Kn.Multi:
								e(Object(ia.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(ca.f)(t.model.url)) : t.sendEvent(Object(ca.c)(t.model.url))
						}
					}
				}));
			var ba = Object(se.b)(ha((function(e) {
					const t = {
						className: Object(b.a)(ma.a.item, e.className, {
							[ma.a.mFocused]: !!e.isFocused
						}),
						id: e.id,
						role: "menuitem",
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
					switch (e.type) {
						case Kn.Subreddit:
							return l.a.createElement(en.a, ua({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), l.a.createElement(dn.b, {
								className: ma.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), l.a.createElement("span", {
								className: ma.a.text
							}, e.model.displayText), e.isLoggedIn && l.a.createElement("div", {
								onClick: e.toggleFavorite
							}, l.a.createElement(da, {
								className: Object(b.a)(ma.a.favorite, {
									[ma.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Kn.SubredditAutocomplete:
							return l.a.createElement(en.a, ua({}, t, {
								"aria-label": e.model.name,
								to: "/r/".concat(e.model.name, "/")
							}), l.a.createElement(dn.b, {
								className: ma.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), l.a.createElement("span", {
								className: ma.a.text
							}, e.model.name));
						case Kn.Multi:
							return l.a.createElement(en.a, ua({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), l.a.createElement("img", {
								src: e.model.icon,
								className: ma.a.customFeedIcon
							}), l.a.createElement("span", {
								className: ma.a.text
							}, e.model.displayText), e.isLoggedIn && l.a.createElement("div", {
								onClick: e.toggleFavorite
							}, l.a.createElement(da, {
								className: Object(b.a)(ma.a.favorite, {
									[ma.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Kn.Profile:
							return l.a.createElement(en.a, ua({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), l.a.createElement(on, {
								className: ma.a.icon,
								iconUrl: e.hideNSFWPref ? "".concat(k.a.assetPath, "/img/avatar_over18_square.png") : e.model.icon.url
							}), l.a.createElement("span", {
								className: ma.a.text
							}, e.model.displayText), e.isLoggedIn && l.a.createElement("div", {
								onClick: e.toggleFavorite
							}, l.a.createElement(da, {
								className: Object(b.a)(ma.a.favorite, {
									[ma.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				ga = s("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				fa = s.n(ga);

			function xa(e) {
				return l.a.createElement("div", {
					className: e.className
				}, l.a.createElement("div", {
					className: fa.a.header
				}), l.a.createElement("div", {
					className: fa.a.item
				}), l.a.createElement("div", {
					className: fa.a.item
				}), l.a.createElement("div", {
					className: fa.a.item
				}), l.a.createElement("div", {
					className: fa.a.item
				}))
			}
			var Pa = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Ca = s("./src/reddit/actions/multireddit/index.ts"),
				va = s("./src/reddit/actions/subreddit.ts"),
				Ea = s("./src/reddit/constants/keycodes.ts"),
				Oa = s("./src/reddit/helpers/trackers/coins.ts"),
				ya = s("./src/reddit/helpers/trackers/premium.ts"),
				ja = s("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				wa = s.n(ja);

			function Sa() {
				return (Sa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function Ma(e) {
				return e.id === vn.ModMail || (e.id === vn.ModMailBeta || e.id === vn.CreateCommunity)
			}

			function Ia(e) {
				const t = new zn.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Kn.Header && e.type !== Kn.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const Na = Object(h.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const s = Zn(e),
							n = s.language,
							a = new zn.a("id");
						if (s.account) {
							const r = s.account;
							Xn.forEach(e => a.push(e(r, n))), r.isEmployee && Jn.forEach(e => a.push(e(r, n))), Object(Ln.a)(e) && a.push({
								id: vn.PublicAccessNetwork,
								type: Kn.GenericClickable,
								model: {
									onClick: () => {
										t(Object(Wn.a)(F.c[F.b.Rpan]))
									},
									displayText: Object(sn.a)(n, "header.publicAccessNetwork"),
									icon: e => {
										let {
											className: t
										} = e;
										return l.a.createElement(wn.a, {
											className: Object(b.a)(t, Mn.a.itemPublicAccessNetwork)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return l.a.createElement("span", {
											className: t
										}, l.a.createElement(re.c, null, "Reddit Public Access Network"))
									}
								},
								telemetryNoun: "public_access_network"
							}), (s.favoriteSubreddits.length || s.favoriteProfiles.length || s.favoriteMultireddits.length) && (a.push({
								id: "header-favorites",
								type: Kn.Header,
								model: {
									displayText: Object(sn.a)(n, "subscriptions.favorites")
								}
							}), s.favoriteSubreddits.forEach(e => a.push({
								id: "fav" + e.id,
								type: Kn.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteProfiles.forEach(e => a.push({
								id: "fav" + e.id,
								type: Kn.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteMultireddits.forEach(e => a.push({
								id: "fav" + e.url,
								type: Kn.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.multisPending ? a.push({
								id: "multis-pending",
								type: Kn.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.multis.length > 0 && (a.push({
								id: "header-multis",
								type: Kn.Header,
								model: {
									displayText: Object(Ce.c)("Custom feeds"),
									button: e => {
										let {
											className: s,
											sendClickEvent: n
										} = e;
										return l.a.createElement("button", {
											onClick: () => {
												t(Object(qe.i)(ot.a.MULTIREDDIT_CREATE)), n()
											},
											className: Object(b.a)(s, Mn.a.multiPlusButton)
										}, l.a.createElement(qn.a, {
											className: Mn.a.multiPlusIcon
										}))
									},
									buttonTelemetryNoun: "create_new_custom_feed"
								}
							}), s.multis.forEach(e => a.push({
								id: e.url,
								type: Kn.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.moderatingSubredditsPending ? a.push({
								id: "moderatingSubreddits-pending",
								type: Kn.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.moderatingSubreddits.length && (a.push({
								id: "header-moderating",
								type: Kn.Header,
								model: {
									displayText: Object(sn.a)(n, "subscriptions.moderatingFull")
								}
							}), a.push({
								id: vn.ModListing,
								type: Kn.GenericLink,
								model: {
									url: Qn.a,
									displayText: Object(sn.a)(n, "header.modListing"),
									icon: e => {
										let {
											className: t
										} = e;
										return l.a.createElement(Pn.a, {
											className: Object(b.a)(t, Mn.a.itemModQueue)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return l.a.createElement("span", {
											className: t
										}, l.a.createElement(re.c, null, "r/Mod"))
									}
								},
								telemetryNoun: "r_mod"
							}), s.moderatingSubreddits.forEach(e => a.push({
								id: "mod" + e.id,
								type: Kn.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), s.subscriptionsPending ? a.push({
								id: "subscriptions-pending",
								type: Kn.LoadingState,
								model: {
									displayText: ""
								}
							}) : na(a, s, n), ea.forEach(e => a.push(e(r, n))), Object(jt.db)(e) && a.push({
								id: vn.CreateCommunity,
								type: Kn.GenericLink,
								model: {
									url: "https://www.reddit.com/subreddits/create",
									displayText: Object(sn.a)(n, "header.createCommunity"),
									icon: e => {
										let {
											className: t
										} = e;
										return l.a.createElement(yn.a, {
											className: Object(b.a)(t, Mn.a.itemIcon)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return l.a.createElement("span", {
											className: t
										}, l.a.createElement(re.c, null, "Create Community"))
									}
								},
								telemetryNoun: "create_community"
							}), ta.forEach(e => a.push(e(r, n))), r.isMod && sa.forEach(e => a.push(e(r, n)))
						} else {
							const t = Object(Tn.a)(e, {
								expEventOverride: !1
							});
							s.subscriptions.length || Object(Q.g)(e) ? Xn.forEach(e => a.push(e(null, n, {
								exploreV2Variant: t
							}))) : $n.forEach(e => a.push(e(null, n, {
								exploreV2Variant: t
							}))), t && a.push(((e, t) => ({
								id: vn.Explore,
								type: Kn.GenericLink,
								model: {
									url: "/explore/",
									displayText: Object(sn.a)(t, "header.explore"),
									icon: e => {
										let {
											className: t
										} = e;
										return l.a.createElement(hn, {
											className: Object(b.a)(t, Mn.a.itemIcon)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return l.a.createElement("span", {
											className: t
										}, l.a.createElement(re.c, null, "Explore"))
									}
								},
								telemetryNoun: "explore"
							}))(0, n)), a.push({
								id: "reddit-other",
								type: Kn.Header,
								model: {
									displayText: Object(sn.a)(n, "subscriptions.otherFeeds")
								}
							}), ta.forEach(e => a.push(e(null, n))), na(a, s, n)
						}
						return a
					}
				}),
				ka = e => ({
					onHomeClicked: () => e(Object(tn.x)()),
					onGotoUrl: t => e(Object(p.b)(t)),
					onSubredditsRequested: () => {
						e(Object(ia.e)()), e(Object(va.q)()), e(Object(Ca.g)())
					},
					onActionDispatched: t => e(t)
				}),
				_a = (e, t, s) => Object.assign({}, e, t, s, {
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Ta extends l.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							s = this.getList(t, this.props),
							n = Ia(s),
							a = n.first();
						this.setState({
							focusOrder: n,
							renderableList: s,
							currentInputText: e.currentTarget.value,
							focusedItemId: a ? a.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === Ea.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === Ea.b.Tab && this.props.onClose && this.props.onClose(), e.key === Ea.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Kn.Header && e.type !== Kn.LoadingState && (this.fireTelemetryForListItem(e), e.type === Kn.GenericClickable ? e.model.onClick() : Ma(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === Ea.b.ArrowDown && (e.preventDefault(), this.setState(e => {
							const t = this.findNextFocusableItem(),
								s = t ? e.renderableList.get(t) : void 0,
								n = s ? s.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById("focus-".concat(t));
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: n,
								focusedItemId: t
							}
						})), e.key === Ea.b.ArrowUp && (e.preventDefault(), this.setState(e => {
							const t = this.findPrevFocusableItem(),
								s = t ? e.renderableList.get(t) : void 0,
								n = s ? s.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById("focus-".concat(t));
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: n,
								focusedItemId: t
							}
						}))
					}, this.fireTelemetryForListItem = e => {
						let t;
						switch (e.id) {
							case vn.Coins:
								Oa.f(), t = Oa.e();
								break;
							case vn.Premium:
								ya.g(), t = ya.f()
						}
						switch (e.type) {
							case Kn.Category:
							case Kn.GenericLink:
							case Kn.GenericClickable:
							case Kn.Multi:
							case Kn.Profile:
							case Kn.Subreddit:
								this.props.sendEvent(s => Object.assign({}, Object(G.defaults)(s), t ? {
									correlationId: t
								} : null, {
									customFeed: e.type === Kn.Multi ? Object(G.customFeedByPath)(s, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Kn.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: Ia(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = l.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						s = this.getList(t, e),
						n = Ia(s);
					this.setState({
						focusOrder: n,
						renderableList: s
					})
				}
				getList(e, t) {
					if (e) {
						const s = new zn.a("id"),
							n = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Kn.Category:
								case Kn.GenericLink:
								case Kn.Multi:
								case Kn.Profile:
								case Kn.Subreddit:
									e.model.displayText.match(n) && s.push(e);
									break;
								case Kn.Header: {
									const t = s.last();
									t && t.type === Kn.Header && s.pop(), s.push(e);
									break
								}
								case Kn.LoadingState:
							}
						});
						const a = s.last();
						return a && a.type === Kn.Header && s.pop(), s
					}
					return t.unfilteredList
				}
				findNextFocusableItem() {
					const e = this.state.focusOrder.first();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.next ? t.next.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				findPrevFocusableItem() {
					const e = this.state.focusOrder.last();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.prev ? t.prev.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				render() {
					const e = this.state.renderableList.toArray(),
						t = this.state.focusedItemId ? this.state.renderableList.get(this.state.focusedItemId) : null;
					return l.a.createElement("div", {
						role: "menu",
						className: this.props.className
					}, l.a.createElement("div", {
						"aria-live": "assertive",
						"aria-label": t && t.model.displayText ? "".concat(t.model.displayText, " ").concat(Dn.fbt._("selected", null, {
							hk: "QqrSS"
						})) : ""
					}), l.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": Dn.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: wa.a.filter,
						id: "header-subreddit-filter",
						placeholder: Dn.fbt._("Filter", null, {
							hk: "oqdpz"
						}),
						onChange: this.onChange,
						onKeyDown: this.onKeyDown,
						ref: this.inputRef
					}), e.map((e, t) => {
						const s = {
							id: "focus-".concat(e.id),
							isFocused: this.state.focusedItemId === e.id,
							key: "subreddit-list-key-".concat(e.id),
							onFocus: () => this.onChangeFocusedListItemId(e.id),
							onMouseEnter: () => this.onChangeFocusedListItemId(e.id),
							onMouseLeave: () => this.onChangeFocusedListItemId(void 0),
							onClick: () => {
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === vn.Home && this.props.onHomeClicked(), e.type === Kn.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case Kn.GenericClickable:
								return l.a.createElement(Vn, Sa({}, s, {
									className: wa.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Kn.Category:
							case Kn.GenericLink:
								return l.a.createElement(Vn, Sa({}, s, {
									externalLink: Ma(e),
									className: wa.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Kn.Header: {
								const s = e.model.button;
								return l.a.createElement(oa, {
									className: wa.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								}, e.model.displayText, s && l.a.createElement(s, {
									className: wa.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Kn.LoadingState:
								return l.a.createElement(xa, {
									className: wa.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								});
							case Kn.Multi:
								return l.a.createElement(ba, Sa({}, s, {
									className: wa.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Kn.Multi
								}));
							case Kn.Profile:
								return l.a.createElement(ba, Sa({}, s, {
									className: wa.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Kn.Profile
								}));
							case Kn.Subreddit:
								return l.a.createElement(ba, Sa({}, s, {
									className: wa.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Kn.Subreddit
								}))
						}
					}))
				}
			}
			const La = Object(m.b)(Na, ka, _a)(Object(se.b)(Ta)),
				Ra = Object(m.b)(Na, ka, _a)(Object(se.b)(Object(Pa.b)(Ta)));
			var Aa = s("./src/reddit/actions/shortcuts.ts"),
				Fa = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Da = e => l.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, l.a.createElement("path", {
					d: "M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z"
				}), l.a.createElement("path", {
					d: "M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z"
				}));
			var Ba = s("./src/reddit/selectors/userPrefs.ts");
			const Ua = Object(_n.t)({
					isCommentsPage: _n.w,
					pageLayer: e => e
				}),
				Ha = Object(h.c)({
					currentPage: Fn,
					hideNSFWPref: jt.z,
					isDropdownOpen: e => e.header.isSubscriptionsDropdownOpen,
					isLoggedIn: jt.J,
					isOverlayOpen: Dt.i,
					isPinnedSubscriptionsMenuDisabled: Ba.a,
					isSubscriptionsPinned: Ba.b,
					language: e => e.user.language
				});
			class Va extends l.a.Component {
				constructor(e) {
					super(e), this.state = {
						preventFocus: !1
					}, this.handleKeyboardShortcut = e => {
						if ("q" === e.key && !this.props.isSubscriptionsPinned) {
							if (document.activeElement && ("input" === document.activeElement.tagName.toLowerCase() || "textarea" === document.activeElement.tagName.toLowerCase() || "true" === document.activeElement.getAttribute("contenteditable"))) return;
							this.props.openDropdown()
						}
					}, this.enablePreventFocus = () => this.setState({
						preventFocus: !0
					}), this.disablePreventFocus = () => setTimeout(() => this.setState({
						preventFocus: !1
					})), this.close = e => {
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Aa.r)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}
				}
				componentDidMount() {
					document.addEventListener("keyup", this.handleKeyboardShortcut)
				}
				componentWillUnmount() {
					document.removeEventListener("keyup", this.handleKeyboardShortcut)
				}
				shouldComponentUpdate(e, t) {
					return this.state.preventFocus !== t.preventFocus || (!(!this.props.isDropdownOpen && !e.isDropdownOpen) || (e.currentPage !== this.props.currentPage || e.isSubscriptionsPinned !== this.props.isSubscriptionsPinned || e.isBlueLayout !== this.props.isBlueLayout))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						currentPage: e,
						className: t,
						hideNSFWPref: s,
						isBlueLayout: n,
						isCommentsPage: a,
						isLoggedIn: r,
						isOverlayOpen: o,
						language: i
					} = this.props, c = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, d = o || !r && a;
					return l.a.createElement("div", {
						"aria-label": Object(Ce.c)("Start typing to filter your communities or use up and down to select."),
						className: Object(b.a)(Mn.a.container, t, {
							[Mn.a.mBlue]: n,
							[Mn.a.mOpen]: c,
							[Mn.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[Mn.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, l.a.createElement("button", {
						className: Mn.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, l.a.createElement("span", {
						className: Mn.a.containerText
					}, function(e, t) {
						switch (e.type) {
							case vn.All:
								return In(Object(sn.a)(t, "subscriptions.all"));
							case vn.Appeal:
								return In(Object(sn.a)(t, "header.appeal"));
							case vn.Coins:
								return In(Object(sn.a)(t, "header.coins"));
							case vn.Community:
								return In(e.model.displayText, !0);
							case vn.CommunitySearch:
								return In(Object(sn.a)(t, "search.restrictToSubreddit"));
							case vn.CreateCommunity:
								return In(Object(sn.a)(t, "header.createCommunity"));
							case vn.CreatePost:
								return In(Object(sn.a)(t, "header.newPost"));
							case vn.DailyCharts:
								return In(Object(Ce.c)("Top Communities"));
							case vn.Explore:
								return In(Object(sn.a)(t, "header.explore"));
							case vn.GlobalSearch:
								return In(Object(sn.a)(t, "search.globalName"));
							case vn.Home:
								return In(Object(sn.a)(t, "header.home"));
							case vn.Inbox:
								return In(Object(sn.a)(t, "header.messages"));
							case vn.ModListing:
								return In(Object(sn.a)(t, "header.modListing"));
							case vn.ModMail:
								return In(Object(sn.a)(t, "header.modMail"));
							case vn.ModMailBeta:
								return In(Object(sn.a)(t, "header.modMailBeta"));
							case vn.ModQueue:
								return In(Object(sn.a)(t, "header.modQueue"));
							case vn.Multi:
								return In(e.model.displayText, !0);
							case vn.Popular:
								return In(Object(sn.a)(t, "subscriptions.popular"));
							case vn.Premium:
								return In(Object(sn.a)(t, "header.premium"));
							case vn.PublicAccessNetwork:
								return In(Object(sn.a)(t, "header.publicAccessNetwork"));
							case vn.Report:
								return In(Object(sn.a)(t, "header.report"));
							case vn.Settings:
								return In(Object(sn.a)(t, "header.settings"));
							case vn.SubredditCreation:
								return In(Object(sn.a)(t, "header.subredditCreation"));
							case vn.Topic:
								return In(e.model);
							case vn.Unknown:
								return In("");
							case vn.UserDataRequest:
								return In(Object(sn.a)(t, "header.userDataRequest"));
							case vn.UserProfile:
								return In(e.model.displayText, !0);
							case vn.UserProfileName:
								return In(e.name, !0);
							case vn.ViewDraft:
								return In(Object(sn.a)(t, "header.viewDraft"))
						}
					}(e, i)), function(e, t) {
						switch (e.type) {
							case vn.All:
								return l.a.createElement(ln.a, {
									className: Mn.a.defaultIcon
								});
							case vn.Appeal:
								return l.a.createElement(yn.a, {
									className: Mn.a.defaultIcon
								});
							case vn.Coins:
								return l.a.createElement(un.a, {
									className: Mn.a.coinIcon
								});
							case vn.Community:
							case vn.CommunitySearch: {
								const s = Object(nn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return l.a.createElement(dn.b, {
									className: Mn.a.subredditIcon,
									iconUrl: s.url,
									primaryColor: s.color
								})
							}
							case vn.CreateCommunity:
							case vn.CreatePost:
								return l.a.createElement(yn.a, {
									className: Mn.a.defaultIcon
								});
							case vn.DailyCharts:
								return l.a.createElement(bn.a, {
									className: Mn.a.defaultIcon
								});
							case vn.Explore:
								return l.a.createElement(hn, {
									className: Mn.a.defaultIcon
								});
							case vn.GlobalSearch:
								return l.a.createElement(mn, {
									className: Mn.a.defaultIcon
								});
							case vn.Home:
								return l.a.createElement(xn, {
									className: Mn.a.defaultIcon
								});
							case vn.Inbox:
							case vn.Settings:
								return l.a.createElement(on, {
									className: Mn.a.icon,
									iconUrl: e.model.accountIcon
								});
							case vn.ModListing:
								return l.a.createElement(Pn.a, {
									className: Mn.a.modQueueIcon
								});
							case vn.SubredditCreation:
								return l.a.createElement(yn.a, {
									className: Mn.a.defaultIcon
								});
							case vn.ModMail:
							case vn.ModMailBeta:
								return l.a.createElement(pn.a, {
									className: Mn.a.modQueueIcon
								});
							case vn.ModQueue:
								return l.a.createElement(Pn.a, {
									className: Mn.a.modQueueIcon
								});
							case vn.Multi:
								return l.a.createElement("img", {
									src: e.model.icon,
									className: Mn.a.customFeedIcon
								});
							case vn.Popular:
								return l.a.createElement(On.a, {
									className: Mn.a.defaultIcon
								});
							case vn.Premium:
								return l.a.createElement(jn.a, {
									className: Mn.a.premiumIcon
								});
							case vn.PublicAccessNetwork:
								return l.a.createElement(wn.a, {
									className: Mn.a.publicAccessNetworkIcon
								});
							case vn.Report:
								return l.a.createElement(yn.a, {
									className: Mn.a.defaultIcon
								});
							case vn.Unknown:
								return l.a.createElement("div", {
									className: Mn.a.unknownIcon
								});
							case vn.UserDataRequest:
								return l.a.createElement(yn.a, {
									className: Mn.a.defaultIcon
								});
							case vn.UserProfile: {
								const s = Object(nn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return l.a.createElement(on, {
									className: Mn.a.icon,
									iconUrl: s.url
								})
							}
							case vn.UserProfileName:
								return l.a.createElement("div", {
									className: Mn.a.defaultIcon
								});
							case vn.ViewDraft:
								return l.a.createElement(yn.a, {
									className: Mn.a.defaultIcon
								});
							case vn.Topic:
								return l.a.createElement(En, {
									className: Mn.a.defaultIcon
								})
						}
					}(e, s), !this.props.isSubscriptionsPinned && l.a.createElement(Fa.b, {
						className: Mn.a.caretDown
					})), c && !this.props.isPinnedSubscriptionsMenuDisabled && l.a.createElement(Da, {
						className: Object(b.a)(Mn.a.pin, {
							[Mn.a.disabled]: d
						}),
						onClick: d ? void 0 : this.props.onPinSubscriptions
					}), c && l.a.createElement(Ra, {
						canAutofocus: !0,
						className: Mn.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var Wa = Ua(Object(m.b)(Ha, (e, t) => ({
					closeDropdown: () => e(Object(E.f)()),
					onLocationRefresh: (s, n) => e(Object(tn.G)(s, t.pageLayer, n)),
					onPinSubscriptions: () => {
						e(Object(E.i)()), e(Object(E.f)())
					},
					openDropdown: () => e(Object(E.g)()),
					toggleDropdown: () => e(Object(E.h)())
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onLocationClick: s => t.onLocationRefresh(s, e.isOverlayOpen)
				}))(Object(se.b)(Va))),
				Qa = s("./src/reddit/controls/InternalLink/index.tsx"),
				Ga = s("./src/reddit/helpers/trackers/monthsToMinutes.ts"),
				qa = s("./src/reddit/components/HeaderSubredditSelector/Compact/Tooltip.tsx"),
				za = s("./src/reddit/components/HeaderSubredditSelector/Compact/index.m.less"),
				Za = s.n(za);
			const Ka = "home-tooltip",
				Ja = Object(h.c)({
					currentPage: Fn,
					frontpageIsHome: e => Object(Q.g)(e, {
						expEventOverride: !1
					}),
					homeTooltipIsOpen: Q.j,
					isBannerVisible: Q.k,
					isHomeVisited: Q.n
				}),
				Ya = Object(m.b)(Ja, e => ({
					visitPopulatedHome: () => e(Object(O.b)({}))
				}));
			class Xa extends l.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isTooltipOpen: !1
					}, this.onHomeClick = e => {
						e.preventDefault();
						const {
							isBannerVisible: t,
							isHomeVisited: s,
							frontpageIsHome: n
						} = this.props;
						(t || s || n) && (this.props.visitPopulatedHome(), this.props.sendEvent(Object(Ga.h)("home")))
					}, this.trackPopularClick = () => {
						this.props.sendEvent(Object(Ga.h)("popular"))
					}, this.showTooltip = () => {
						this.setState(e => e.isTooltipOpen ? null : {
							isTooltipOpen: !0
						})
					}, this.hideTooltip = () => {
						this.setState(e => e.isTooltipOpen ? {
							isTooltipOpen: !1
						} : null)
					}
				}
				render() {
					const {
						className: e,
						currentPage: t,
						frontpageIsHome: s,
						homeTooltipIsOpen: n,
						isBannerVisible: a,
						isHomeVisited: r
					} = this.props, {
						isTooltipOpen: o
					} = this.state, i = a || r || s;
					return l.a.createElement("div", {
						"aria-label": Dn.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: Object(b.a)(Za.a.container, e),
						role: "navigation"
					}, l.a.createElement(Qa.a, {
						className: Object(b.a)(Za.a.link, {
							[Za.a.mActive]: t.type === vn.Home,
							[Za.a.mDisabled]: !i,
							[Za.a.mHighlighted]: n
						}),
						"data-redditstyle": !0,
						id: Ka,
						onMouseDown: this.onHomeClick,
						onMouseEnter: this.showTooltip,
						onMouseLeave: this.hideTooltip,
						onMouseMove: this.showTooltip,
						to: F.c[F.b.Home]
					}, l.a.createElement(xn, {
						className: Za.a.icon
					}), l.a.createElement("span", {
						className: Za.a.text
					}, Dn.fbt._("Home", null, {
						hk: "45k7H0"
					})), i && !r && l.a.createElement("div", {
						className: Za.a.badge
					}), !i && l.a.createElement(qa.a, {
						isOpen: o,
						tooltipId: Ka
					})), l.a.createElement(Qa.a, {
						className: Object(b.a)(Za.a.link, {
							[Za.a.mActive]: t.type === vn.Popular
						}),
						"data-redditstyle": !0,
						onMouseDown: this.trackPopularClick,
						to: s ? F.c[F.b.Popular] : F.c[F.b.Home]
					}, l.a.createElement(On.a, {
						className: Za.a.icon
					}), l.a.createElement("span", {
						className: Za.a.text
					}, Dn.fbt._("Popular", null, {
						hk: "2dT0XE"
					}))), n && l.a.createElement("div", {
						className: Za.a.overlay
					}))
				}
			}
			var $a = Object(_n.t)()(Ya(Object(se.b)(Xa))),
				er = s("./src/reddit/components/JumpToContent/index.tsx"),
				tr = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				sr = s("./src/reddit/controls/Search/index.tsx"),
				nr = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				ar = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				rr = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				or = s("./src/reddit/selectors/experiments/generalCleanup.ts"),
				ir = s("./src/reddit/actions/tooltip.ts"),
				cr = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				dr = s("./src/reddit/icons/svgs/LayerLogo/index.m.less"),
				lr = s.n(dr);

			function mr() {
				return (mr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ur, pr = e => l.a.createElement("svg", mr({
					viewBox: "0 0 80 80",
					className: lr.a.icon
				}, e), l.a.createElement("path", {
					d: "M76.4 55.5l-1.7-.9L44 70c-2.2 1.1-5.9 1.1-8.1 0L5.3 54.7l-1.7.9c-2.2 1.1-2.2 2.9 0 4L36 75.7c2.2 1.1 5.9 1.1 8.1 0l32.4-16.2c2.1-1.1 2.1-2.9-.1-4z"
				}), l.a.createElement("path", {
					d: "M77.3 41l-15.4-7.7 15.4-7c2.5-1.2 2.8-2.9 2.8-3.6 0-.7-.3-2.4-2.8-3.6L44.8 4.4c-2.8-1.3-6.9-1.3-9.7 0L2.8 19.1C.3 20.2 0 22 0 22.7c0 .7.3 2.4 2.8 3.6l15.4 7L2.7 41C1 41.8 0 43.2 0 44.7s1 2.9 2.7 3.7l32.4 16.2c1.4.7 3.2 1 4.9 1s3.5-.4 4.9-1l32.4-16.2c1.7-.9 2.7-2.2 2.7-3.7s-1-2.9-2.7-3.7zM4.2 22.7c.1 0 .1-.1.2-.1L36.8 7.9c1.7-.8 4.8-.8 6.5 0l32.4 14.7c.1 0 .1.1.2.1-.1 0-.1.1-.2.1L43.2 37.5c-1.7.8-4.8.8-6.5 0L4.4 22.7h-.2z"
				})),
				hr = s("./src/reddit/components/Header/QuickLinks/index.m.less"),
				br = s.n(hr);
			! function(e) {
				e.All = "header-quicklinks-all", e.Popular = "header-quicklinks-popular", e.News = "header-quicklinks-news", e.Rpan = "header-quicklinks-rpan", e.Layer = "header-quicklinks-layer"
			}(ur || (ur = {}));
			const gr = Object(h.c)({
				isLoggedIn: e => !!e.user.account,
				showRPANlogo: Ln.a,
				showLayersEmbedLogo: Vt.d.layersEmbedQuickLink
			});
			var fr = Object(m.b)(gr, e => ({
					openStream: () => e(Object(Wn.a)(F.c[F.b.Rpan])),
					toggleTooltip: t => e(Object(ir.g)({
						tooltipId: t
					}))
				}))(Object(se.b)((function(e) {
					return l.a.createElement("div", {
						className: Object(b.a)(br.a.container, {
							[br.a.blue]: e.isBlueLayout
						}, e.className)
					}, l.a.createElement("div", {
						className: br.a.row
					}, l.a.createElement(en.a, {
						className: br.a.icon,
						id: ur.Popular,
						to: e.isLoggedIn ? F.c[F.b.Popular] : F.c[F.b.Home],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "popular"
						})),
						onMouseEnter: () => e.toggleTooltip(ur.Popular),
						onMouseLeave: () => e.toggleTooltip(ur.Popular)
					}, l.a.createElement(On.a, null), l.a.createElement(cr.c, {
						caretOnTop: !0,
						tooltipId: ur.Popular,
						text: Dn.fbt._("Popular", null, {
							hk: "1Kx4va"
						})
					})), l.a.createElement(en.a, {
						className: br.a.icon,
						id: ur.All,
						to: F.c[F.b.All],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "all"
						})),
						onMouseEnter: () => e.toggleTooltip(ur.All),
						onMouseLeave: () => e.toggleTooltip(ur.All)
					}, l.a.createElement(ln.a, null), l.a.createElement(cr.c, {
						caretOnTop: !0,
						tooltipId: ur.All,
						text: Dn.fbt._("All", null, {
							hk: "1Rk1yU"
						})
					})), e.showRPANlogo && l.a.createElement(en.a, {
						className: br.a.icon,
						id: ur.Rpan,
						to: F.c[F.b.Rpan],
						onClick: t => {
							(t => {
								t.stopPropagation(), t.preventDefault(), e.openStream()
							})(t), e.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
								source: "nav",
								action: "click",
								noun: "public_access_network"
							}))
						},
						onMouseEnter: () => e.toggleTooltip(ur.Rpan),
						onMouseLeave: () => e.toggleTooltip(ur.Rpan)
					}, l.a.createElement(wn.a, null), l.a.createElement(cr.c, {
						caretOnTop: !0,
						tooltipId: ur.Rpan,
						text: Dn.fbt._("Reddit Public Access Network", null, {
							hk: "38uXOo"
						})
					})), e.showLayersEmbedLogo && l.a.createElement(en.a, {
						className: br.a.icon,
						id: ur.Layer,
						to: F.c[F.b.Layer],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(G.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "layer"
						})),
						onMouseEnter: () => e.toggleTooltip(ur.Layer),
						onMouseLeave: () => e.toggleTooltip(ur.Layer)
					}, l.a.createElement(pr, null), l.a.createElement(cr.c, {
						caretOnTop: !0,
						tooltipId: ur.Layer,
						text: Dn.fbt._("r/Layer in partnership with Adobe", null, {
							hk: "36V7Nc"
						})
					}))))
				}))),
				xr = s("./src/reddit/actions/login.ts"),
				Pr = s("./src/reddit/helpers/trackers/authControls.ts"),
				Cr = s("./src/chat/helpers/dom.ts"),
				vr = s("./src/reddit/actions/chat/toggle.ts"),
				Er = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				Or = s("./src/reddit/actions/postCreation/general.ts"),
				yr = s("./src/reddit/actions/users.ts"),
				jr = s("./src/reddit/components/Settings/modalIds.ts");
			var wr = Object(y.a)({
					getComponent: () => Object(j.a)(() => s.e("EmailVerificationModals").then(s.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Sr = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Mr = s("./src/reddit/components/Translated/index.tsx"),
				Ir = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				Nr = s("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				kr = s.n(Nr);
			class _r extends l.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(Ir.e)(Ir.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(Ir.c)(Ir.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(Ir.e)(Ir.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					_r.shouldSendViewEvent && (_r.shouldSendViewEvent = !1, this.props.sendEvent(Object(Ir.g)(Ir.a)))
				}
				render() {
					return l.a.createElement("div", {
						className: kr.a.container
					}, l.a.createElement("div", {
						className: kr.a.topLine
					}), l.a.createElement("button", {
						className: kr.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, l.a.createElement($t.a, {
						className: kr.a.closeIcon
					})), l.a.createElement("h5", {
						className: kr.a.title
					}, l.a.createElement(Mr.a, {
						msgId: "header.emailVerificationTooltip.title"
					})), l.a.createElement("p", {
						className: kr.a.subtitle
					}, this.props.email), l.a.createElement("p", {
						className: kr.a.description
					}, l.a.createElement(Mr.a, {
						msgId: "header.emailVerificationTooltip.description"
					})), l.a.createElement("div", {
						className: kr.a.buttonWrapper
					}, l.a.createElement(xt.i, {
						className: kr.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, l.a.createElement(Mr.a, {
						msgId: "header.emailVerificationTooltip.buttons.updateEmail"
					})), l.a.createElement(xt.f, {
						className: Object(b.a)(kr.a.commonBtn, kr.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, l.a.createElement(Mr.a, {
						msgId: "header.emailVerificationTooltip.buttons.gotIt"
					}))))
				}
			}
			_r.shouldSendViewEvent = !0;
			const Tr = Object(Sr.a)(_r, [Pa.a.Click, Pa.a.Keydown, Pa.a.Resize]);
			var Lr = Object(se.b)(Tr),
				Rr = s("./src/higherOrderComponents/asTooltip.tsx"),
				Ar = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				Fr = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				Dr = s("./node_modules/uuid/v4.js"),
				Br = s.n(Dr);
			let Ur;
			const Hr = () => Ur,
				Vr = "gold_top_nav",
				Wr = e => t => Object.assign({
					source: "gold_top_nav",
					action: "click",
					noun: e
				}, (e => ({
					screen: G.screen(e),
					profile: G.profile(e),
					subreddit: G.subreddit(e)
				}))(t)),
				Qr = e => t => Object.assign({
					source: Vr,
					action: "click",
					noun: "coins_".concat(e),
					correlationId: Hr()
				}, G.defaults(t)),
				Gr = () => e => Object.assign({
					source: Vr,
					action: "click",
					noun: "premium",
					correlationId: Hr()
				}, G.defaults(e)),
				qr = () => e => Object.assign({
					source: Vr,
					action: "view",
					noun: "dropdown",
					correlationId: Hr()
				}, G.defaults(e));
			var zr = s("./src/reddit/models/Gold/Coins/index.ts"),
				Zr = s("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				Kr = s.n(Zr);
			class Jr extends l.a.Component {
				render() {
					const {
						className: e,
						buttonSubText: t,
						buttonText: s,
						goldStyle: n,
						onClick: a,
						primaryText: r,
						subText: o
					} = this.props, i = n ? xt.c : xt.f;
					return l.a.createElement("div", {
						className: Object(b.a)(e, Kr.a.CompactCoinPurchaseListItem)
					}, l.a.createElement("div", {
						className: Kr.a.productSection
					}, l.a.createElement("span", {
						className: Kr.a.primaryText
					}, r), l.a.createElement("span", {
						className: Kr.a.subText
					}, Array.isArray(o) ? o.map((e, t) => l.a.createElement("p", {
						key: t
					}, e)) : o)), l.a.createElement("div", {
						className: Kr.a.priceSection
					}, l.a.createElement(i, {
						className: Object(b.a)(Kr.a.button, {
							[Kr.a.goldStyle]: n
						}),
						redditStyle: !0,
						onClick: a
					}, s), l.a.createElement("span", {
						className: Kr.a.buttonSubText
					}, t)))
				}
			}
			var Yr = Jr;
			const Xr = Object(h.c)({
				isPremiumSubscriber: jt.r
			});
			class $r extends l.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: s,
							sendEvent: n
						} = this.props;
						t && t(), n(Qr(e.coins)), s(e)
					}, this.handleClickBuyPremium = () => {
						const {
							onClick: e,
							onClickPremiumPackage: t,
							sendEvent: s
						} = this.props;
						e && e(), s(Gr()), t()
					}, this.listItemData = this.getListItemData()
				}
				getListItemData() {
					const {
						isPremiumSubscriber: e
					} = this.props, t = [zr.a.coins500, zr.a.coins1100, zr.a.coins1800, zr.a.coins7200, zr.a.coins40000].map(e => {
						const {
							coins: t,
							pennies: s,
							percentBonus: n
						} = e, a = t.toLocaleString(), r = Object(Ce.c)("".concat(Object(Ce.b)("number of coins", a), " Coins")), o = Math.floor(t / 100), i = Object(Ce.c)("Up to ".concat(Object(Ce.b)("number of awards", o), " Awards")), c = "$".concat(s / 100);
						return {
							buttonSubText: n ? Object(Ce.c)("".concat(Object(Ce.b)("percent bonus", n), "% Bonus")) : void 0,
							buttonText: c,
							coinPackage: e,
							primaryText: r,
							subText: i
						}
					});
					if (e) return t;
					const s = 1e3.toLocaleString(),
						n = {
							buttonSubText: Object(Ce.c)("".concat(Object(Ce.b)("number of bonus coins", s), " Bonus Coins")),
							buttonText: Object(Ce.c)("$".concat(Object(Ce.b)("premium price", 5.99), "/mo")),
							isGoldStyle: !0,
							primaryText: Object(Ce.c)("Premium"),
							subText: [Object(Ce.c)("".concat(Object(Ce.b)("monthly coins", 700), " Coins/mo")), Object(Ce.c)("Ads free & more")]
						};
					return t.concat(n)
				}
				render() {
					const {
						className: e
					} = this.props;
					return l.a.createElement("div", {
						className: e
					}, this.listItemData.map(e => l.a.createElement(Yr, {
						buttonSubText: e.buttonSubText,
						buttonText: e.buttonText,
						goldStyle: e.isGoldStyle,
						key: e.primaryText,
						onClick: e.coinPackage ? () => this.handleClickBuyCoins(e.coinPackage) : this.handleClickBuyPremium,
						primaryText: e.primaryText,
						subText: e.subText
					})))
				}
			}
			var eo = Object(m.b)(Xr, e => ({
					onClickCoinPackage: t => e(Object(Ar.i)({
						coinPackage: t,
						correlationId: Hr()
					})),
					onClickPremiumPackage: () => e(Object(Fr.f)(Hr()))
				}))(Object(se.b)($r)),
				to = s("./src/reddit/controls/Dropdown/index.tsx"),
				so = s("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				no = s.n(so);
			const ao = Object(Rr.a)(to.a);
			class ro extends l.a.Component {
				constructor() {
					super(...arguments), this.timer = void 0, this.handleMouseEnter = () => {
						this.timer && clearTimeout(this.timer)
					}, this.handleMouseLeave = () => {
						const {
							onCloseTooltip: e
						} = this.props;
						this.timer = setTimeout(e, 700)
					}
				}
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(qr())
				}
				render() {
					const {
						className: e,
						isOpen: t,
						onCloseTooltip: s,
						tooltipId: n
					} = this.props;
					return l.a.createElement(ao, {
						className: Object(b.a)(e, no.a.CoinPurchaseDropdown),
						isFixed: !0,
						isOpen: t,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: n
					}, l.a.createElement("div", {
						className: no.a.header
					}, l.a.createElement("span", {
						className: no.a.headerText
					}, l.a.createElement(re.c, null, "Give Gold, Silver, Platinum, and more with Coins")), l.a.createElement(en.a, {
						className: no.a.headerLink,
						to: "/coins"
					}, l.a.createElement(re.c, null, "What are Coins?"))), l.a.createElement(eo, {
						className: no.a.purchaseList,
						onClick: s
					}))
				}
			}
			var oo = Object(se.b)(ro),
				io = s("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				co = s("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			var lo = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				mo = s("./src/reddit/selectors/tooltip.ts"),
				uo = s("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				po = s.n(uo);
			const ho = Object(h.c)({
				activeTooltipId: mo.a,
				coinPurchaseDropdownIsOpen: e => Object(mo.b)("COIN_PURCHASE_DROPDOWN_ID")(e),
				coinPurchaseModalIsOpen: lo.d,
				premiumPurchaseModalIsOpen: lo.q
			});
			var bo = Object(m.b)(ho, (e, t) => ({
					closeTooltip: () => e(Object(ir.h)()),
					toggleTooltip: t => {
						e("COIN_PURCHASE_DROPDOWN_ID" === t ? Object(ir.h)() : Object(ir.f)({
							tooltipId: "COIN_PURCHASE_DROPDOWN_ID"
						}))
					}
				}))(Object(se.b)(e => {
					const {
						activeTooltipId: t,
						className: s,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: a,
						coinPurchaseModalIsOpen: r,
						premiumPurchaseModalIsOpen: o,
						sendEvent: i,
						toggleTooltip: c
					} = e;
					return l.a.createElement("button", {
						className: Object(b.a)(s, po.a.ctaContainer),
						id: "COIN_PURCHASE_DROPDOWN_ID",
						onClick: () => {
							c(t), (() => Ur = Br()())(), Object(io.b)(), Object(co.b)(), i(Wr("get_coins_cta"))
						}
					}, l.a.createElement("div", {
						className: po.a.ctaContent
					}, l.a.createElement(un.a, {
						className: po.a.icon
					}), l.a.createElement("span", {
						className: po.a.text
					}, l.a.createElement(re.c, null, "Get Coins"))), l.a.createElement(oo, {
						isOpen: a,
						onCloseTooltip: n,
						tooltipId: "COIN_PURCHASE_DROPDOWN_ID"
					}), r && l.a.createElement(io.a, {
						isCompletePaypal: !1
					}), o && l.a.createElement(co.a, null))
				})),
				go = s("./src/reddit/components/HeaderIconContainer/index.m.less"),
				fo = s.n(go);

			function xo() {
				return (xo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Po = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Co = N.a.button("Button", fo.a),
				vo = N.a.div("Container", fo.a);
			var Eo = e => {
					const {
						children: t,
						isOpen: s
					} = e, n = Po(e, ["children", "isOpen"]);
					return l.a.createElement(Co, xo({}, n, {
						id: e.id,
						onClick: e.onClick
					}), l.a.createElement(vo, {
						className: Object(b.a)({
							[fo.a.isOpen]: s
						})
					}, t))
				},
				Oo = s("./src/chat/helpers/unreadCount.ts"),
				yo = s("./src/chat/models/Promo/index.ts"),
				jo = s("./src/lib/prettyPrintNumber/index.ts"),
				wo = s("./src/reddit/components/HeaderUserActions/index.m.less"),
				So = s.n(wo);
			var Mo = e => {
					let {
						className: t,
						isActive: s,
						unreadCount: n
					} = e;
					return s ? l.a.createElement("span", {
						className: Object(b.a)(t, So.a.counter, {
							[So.a.isHighlighted]: s && n <= 0
						})
					}, n > 0 && Object(jo.b)(n)) : null
				},
				Io = s("./src/reddit/helpers/trackers/chat.ts"),
				No = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				ko = s("./src/reddit/selectors/chat.ts");
			const _o = Object(h.c)({
				promos: ko.a,
				unreadCount: ko.c
			});
			class To extends d.Component {
				componentDidMount() {
					this.props.promos[yo.a.SubredditChatFtux] && this.props.sendEvent(Object(Io.j)())
				}
				render() {
					const {
						promos: e,
						unreadCount: t
					} = this.props, {
						count: s,
						unread: n
					} = Object(Oo.a)(t, e);
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(Mo, {
						isActive: n,
						unreadCount: s
					}), l.a.createElement(No.a, {
						className: Object(b.a)(So.a.chatIcon, {
							[So.a.isActive]: n
						})
					}))
				}
			}
			var Lo = Object(m.b)(_o)(Object(se.b)(To)),
				Ro = s("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Ao = s.n(Ro);
			var Fo = e => {
				const {
					onCloseFlyout: t
				} = e;
				return l.a.createElement("div", {
					className: Ao.a.container
				}, l.a.createElement("p", {
					className: Ao.a.title
				}, l.a.createElement(Mr.a, {
					msgId: "header.customizeFlyout.title"
				})), l.a.createElement("h5", {
					className: Ao.a.subtitle
				}, l.a.createElement(Mr.a, {
					msgId: "header.customizeFlyout.subtitle"
				})), l.a.createElement("p", {
					className: Ao.a.description
				}, l.a.createElement(Mr.a, {
					msgId: "header.customizeFlyout.description"
				})), l.a.createElement(xt.i, {
					className: Ao.a.dismissBtn,
					onClick: t
				}, l.a.createElement(Mr.a, {
					msgId: "header.customizeFlyout.dismiss"
				})))
			};
			var Do = e => l.a.createElement(l.a.Fragment, null, l.a.createElement(Mo, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), l.a.createElement(pn.a, {
					className: Object(b.a)(So.a.envelopeIcon, {
						[So.a.isUnread]: !!e.unreadCount
					})
				})),
				Bo = s("./src/reddit/actions/alpha.ts"),
				Uo = s("./src/reddit/actions/modMode.ts"),
				Ho = s("./src/reddit/constants/elementClassNames.ts"),
				Vo = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Wo = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Qo = s("./src/reddit/helpers/trackers/modTools.ts");
			const Go = e => ({
				screen: G.screen(e),
				profile: G.profile(e),
				subreddit: G.subreddit(e)
			});
			var qo = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				zo = s("./src/reddit/icons/fonts/Premium/index.tsx"),
				Zo = s("./src/reddit/icons/svgs/Help/index.tsx"),
				Ko = s("./src/reddit/icons/svgs/KarmaGray/index.m.less"),
				Jo = s.n(Ko);
			var Yo = e => l.a.createElement("svg", {
					className: Object(b.a)(Jo.a.karma, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("path", {
					d: "M3.37,2.75a5.9,5.9,0,0,1,5.49,3.7.62.62,0,0,1-.29.79A3.16,3.16,0,0,0,7.24,8.57a.63.63,0,0,1-.79.29,5.89,5.89,0,0,1-3.7-5.49A.62.62,0,0,1,3.37,2.75Zm8.06,4.49a.63.63,0,0,1-.29-.79,5.89,5.89,0,0,1,5.49-3.7.61.61,0,0,1,.62.6v0a5.89,5.89,0,0,1-3.7,5.49.62.62,0,0,1-.79-.29A3.16,3.16,0,0,0,11.43,7.24Zm2.12,3.9a5.89,5.89,0,0,1,3.7,5.49.62.62,0,0,1-.62.62h0a5.89,5.89,0,0,1-5.49-3.7.63.63,0,0,1,.29-.79,3.16,3.16,0,0,0,1.33-1.33A.62.62,0,0,1,13.55,11.14Zm-5,1.62a.62.62,0,0,1,.29.79,5.89,5.89,0,0,1-5.49,3.7.62.62,0,0,1-.62-.62h0a5.9,5.9,0,0,1,3.7-5.49.62.62,0,0,1,.79.29,3.1,3.1,0,0,0,1.35,1.33ZM10,5.93A7.23,7.23,0,0,0,7.51,2.82,5,5,0,0,1,9.68.09a.61.61,0,0,1,.64,0,5,5,0,0,1,2.17,2.73A7.23,7.23,0,0,0,10,5.93Zm9.91,3.75a.61.61,0,0,1,0,.64,5,5,0,0,1-2.73,2.17A7.23,7.23,0,0,0,14.07,10a7.36,7.36,0,0,0,3.11-2.49A5,5,0,0,1,19.91,9.68ZM10,14.07a7.18,7.18,0,0,0,2.5,3.11,5,5,0,0,1-2.18,2.73.61.61,0,0,1-.64,0,5,5,0,0,1-2.17-2.73A7.23,7.23,0,0,0,10,14.07ZM5.93,10a7.23,7.23,0,0,0-3.11,2.49A5,5,0,0,1,.09,10.32a.61.61,0,0,1,0-.64A5,5,0,0,1,2.82,7.51,7.23,7.23,0,0,0,5.93,10Z"
				})),
				Xo = e => l.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"
				})));
			var $o = e => l.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, l.a.createElement("path", {
					d: "M10,8 C8.619,8 7.5,9.5 7.5,9.5 C7.5,9.5 8.619,11 10,11 C11.381,11 12.5,9.5 12.5,9.5 C12.5,9.5 11.381,8 10,8 M15.1338,14 L4.8658,14 C4.4818,14 4.2398,13.583 4.4328,13.25 L9.5678,4.357 C9.7598,4.024 10.2398,4.024 10.4328,4.357 L15.5678,13.25 C15.7598,13.583 15.5188,14 15.1338,14 M17.2748,3.038 L10.2748,1.038 C10.0948,0.987 9.9048,0.987 9.7258,1.038 L2.7258,3.038 C2.2958,3.161 1.9998,3.554 1.9998,4 L1.9998,11 C1.9998,16.688 9.4098,18.871 9.7258,18.962 C9.8158,18.987 9.9068,19 9.9998,19 C10.0928,19 10.1848,18.987 10.2748,18.962 C10.5898,18.871 17.9998,16.688 17.9998,11 L17.9998,4 C17.9998,3.554 17.7038,3.161 17.2748,3.038"
				})),
				ei = e => l.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15,15.5 L5,15.5 C4.724,15.5 4.5,15.276 4.5,15 C4.5,12.755 6.326,10.929 8.571,10.929 L11.429,10.929 C13.674,10.929 15.5,12.755 15.5,15 C15.5,15.276 15.276,15.5 15,15.5 M10,4.5 C11.405,4.5 12.547,5.643 12.547,7.048 C12.547,8.452 11.405,9.595 10,9.595 C8.595,9.595 7.453,8.452 7.453,7.048 C7.453,5.643 8.595,4.5 10,4.5 M16,2 L4,2 C2.897,2 2,2.897 2,4 L2,16 C2,17.103 2.897,18 4,18 L16,18 C17.103,18 18,17.103 18,16 L18,4 C18,2.897 17.103,2 16,2"
				}))),
				ti = e => l.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"
				}))),
				si = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				ni = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				ai = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				ri = e => l.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
				}))),
				oi = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				ii = s("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				ci = s.n(ii);
			const di = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				li = N.a.wrapped(to.a, "Dropdown", ci.a),
				mi = Object(Rr.a)(li),
				ui = e => l.a.createElement(Wo.a, {
					className: ci.a.button,
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, l.a.createElement("div", {
					className: ci.a.buttonText
				}, e.displayText), l.a.createElement(Vo.a, {
					className: ci.a.toggleSwitch,
					"data-redditstyle": !0,
					on: e.isEnabled
				})),
				pi = Object(m.b)(() => Object(h.c)({
					language: e => e.user.language,
					isModModeEnabled: Ut.t,
					isOpen: Object(mo.b)("USER_DROPDOWN_ID"),
					nightmode: jt.U,
					url: Dt.s
				}), e => ({
					toggleNightmode: t => e(Object(T.w)(t)),
					onOptIntoRedesign: () => e(Object(Bo.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Qe.a.get("rseor3") && Qe.a.remove("rseor3", {
							domain: k.a.cookieDomain
						}), e(Object(Bo.b)(!0))) : window.location.host = "old.reddit.com"
					},
					dispatchOpenLoginModal: () => e(Object(xr.e)()),
					logoutUser: () => e(Object(yr.s)()),
					toggleModMode: () => e(Object(Uo.b)())
				}));
			var hi = Object(_n.t)({
					pageLayer: e => e
				})(pi(Object(se.b)(e => {
					const {
						language: t,
						logoutUser: s,
						dispatchOpenLoginModal: n,
						isBlueLayout: a,
						isModModeEnabled: r,
						nightmode: o,
						toggleModMode: i,
						user: c
					} = e, m = Object(Wo.b)(ai.a, Object(sn.a)(t, "headerDropdown.userSettings"), !1), u = Object(Wo.b)(Zo.a, Object(sn.a)(t, "headerDropdown.helpCenter"), !0), p = Object(Wo.b)(si.a, Object(sn.a)(t, "headerDropdown.visitOldReddit"), !0), h = Object(Wo.b)(Xo, Object(sn.a)(t, "headerDropdown.loginSignup")), g = Object(Wo.b)(Xo, Object(sn.a)(t, "headerDropdown.logout")), f = Object(Wo.b)(ri, Object(sn.a)(t, "headerDropdown.optIn"), !1), x = (e => {
						const s = e && e.coins || 0;
						return Object(sn.a)(t, "gold.coinsNum", {
							num: s.toLocaleString()
						})
					})(c), P = Object(Wo.b)(un.a, Object(sn.a)(t, "headerDropdown.coins"), !1, x), C = Object(Wo.b)(jn.a, Object(sn.a)(t, "headerDropdown.premium"), !1);
					return l.a.createElement("div", {
						className: Object(b.a)(ci.a.container, {
							[ci.a.blue]: a
						}, Ho.f)
					}, l.a.createElement(oi.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(b.a)(e.className, ci.a.inlineButton, {
							[ci.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("user")
						}
					}, l.a.createElement("span", {
						className: ci.a.accountDisplayText
					}, (e => e ? l.a.createElement("span", {
						className: Object(b.a)(ci.a.accountWrapper, ci.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && l.a.createElement("img", {
						alt: Object(Ce.c)("Account icon"),
						className: ci.a.imgIcon,
						src: e.accountIcon
					}), l.a.createElement("span", {
						className: ci.a.accountDetails
					}, l.a.createElement("span", {
						className: ci.a.username
					}, e.displayText, e.isGold && l.a.createElement(zo.a, {
						className: ci.a.premiumFontIcon,
						title: Object(Ce.c)("Reddit Premium")
					})), l.a.createElement(l.a.Fragment, null, l.a.createElement("span", {
						className: ci.a.accountKarma
					}, l.a.createElement(Yo, null), l.a.createElement("span", null, (e => {
						const s = e.commentKarma + e.postKarma,
							n = Object(jo.b)(s);
						return Object(sn.a)(t, "account.karmaTotal", {
							karma: n
						})
					})(e))), !!e.coins && l.a.createElement("span", {
						className: ci.a.accountCoins
					}, l.a.createElement(qo.a, {
						className: ci.a.coinFontIcon
					}), l.a.createElement("span", null, (e => Object(jo.b)(e.coins || 0))(e)))))) : l.a.createElement("span", {
						className: Object(b.a)(ci.a.accountWrapper, ci.a.isLoggedOut)
					}, l.a.createElement(ni.a, {
						className: ci.a.myProfileIcon
					})))(e.user), l.a.createElement(Fa.b, {
						className: ci.a.dropdownTriangle
					})), l.a.createElement(tr.a, null, l.a.createElement(re.c, null, "User account menu"))), l.a.createElement(mi, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, c && l.a.createElement(d.Fragment, null, l.a.createElement("h3", {
						className: ci.a.sectionHeader,
						role: "heading"
					}, l.a.createElement(re.c, null, "My Stuff")), ((e, t) => {
						const s = Object(sn.a)(t, "headerDropdown.myProfile"),
							n = Object(Wo.b)(ei, s, !1);
						return l.a.createElement(n, {
							href: e.url
						})
					})(c, t), l.a.createElement(m, {
						href: "/settings"
					})), l.a.createElement("h3", {
						className: ci.a.sectionHeader,
						role: "heading"
					}, l.a.createElement(re.c, null, "View Options")), c && c.isMod && l.a.createElement(ui, {
						displayText: Object(Ce.c)("Mod Mode"),
						isEnabled: r,
						onClick: () => {
							e.sendEvent(Object(Qo.h)(!r)), i()
						}
					}, l.a.createElement($o, {
						className: ci.a.modModeIcon
					})), l.a.createElement(ui, {
						displayText: "Night Mode",
						isEnabled: o,
						onClick: () => {
							e.sendEvent((e => t => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: e ? "night_mode_off" : "night_mode_on"
							}, Go(t)))(o)), e.toggleNightmode(!o)
						}
					}, l.a.createElement(ti, {
						className: ci.a.nightIcon
					})), l.a.createElement("h3", {
						className: ci.a.sectionHeader,
						role: "heading"
					}, l.a.createElement(re.c, null, "More Stuff")), l.a.createElement(d.Fragment, null, l.a.createElement(P, {
						href: "/coins",
						onClick: () => {
							Oa.f(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: Oa.e()
							}, Go(e)))())
						}
					}), l.a.createElement(C, {
						href: "/premium",
						onClick: () => {
							ya.g(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: ya.f()
							}, Go(e)))())
						}
					})), l.a.createElement(u, {
						href: "https://www.reddithelp.com"
					}), c && l.a.createElement(p, {
						href: "https://old.reddit.com" + e.url,
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: G.screen(e),
								subreddit: G.subreddit(e)
							}))
						}
					}), !di && c && l.a.createElement(f, {
						href: "",
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_opt_in",
								screen: G.screen(e),
								subreddit: G.subreddit(e)
							})), e.onOptIntoRedesign()
						}
					}), l.a.createElement("div", {
						className: ci.a.divider
					}), c ? l.a.createElement(g, {
						href: "#",
						onClick: e => {
							s(), e.preventDefault()
						}
					}) : l.a.createElement(h, {
						href: "#",
						onClick: t => {
							Object(v.a)(t) && (t.preventDefault(), t.stopPropagation(), n(), e.sendEvent(Object(Pr.b)()))
						}
					})))
				}))),
				bi = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				gi = s("./src/reddit/helpers/trackers/navigation.ts");
			const fi = "HeaderUserActions--Chat",
				xi = "email-verification-tooltip-id",
				Pi = "HeaderUserActions--Messages",
				Ci = "HeaderUserActions--Moderation",
				vi = "HeaderUserActions--NewPost",
				Ei = Object(_n.t)({
					pageLayer: e => e
				}),
				Oi = Object(h.c)({
					activeDropdownId: mo.a,
					email: jt.l,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isModerator: yt.h,
					shouldOpenEmailVerificationTooltip: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(_n.J)(s) && !!Object(jt.l)(e) && !Object(jt.x)(e) && Object(jt.J)(e) && !Object(jt.H)(e)
					},
					unreadNotifications: jt.gb
				}),
				yi = Object(m.b)(Oi, (e, t) => ({
					closeEmailVerificationTooltip: () => e(Object(Er.b)()),
					onChatClick: () => e(Object(vr.c)()),
					onDismissCustomizeFlyout: () => e(Object(T.s)()),
					onOpenModerationDropdown: () => e(Object(ir.g)({
						tooltipId: bi.a
					})),
					onOpenUserDropdown: () => e(Object(ir.g)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleChangeEmailModal: () => {
						e(Object(Er.b)()), e(Object(qe.i)(jr.a))
					},
					toggleTooltip: t => e(Object(ir.g)({
						tooltipId: t
					})),
					resendEmail: () => e(Object(yr.y)(Ir.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Or.p(t.pageLayer))
					}
				}));
			class ji extends l.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => this.props.sendEvent(Object(gi.e)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}
				}
				render() {
					const {
						activeDropdownId: e,
						className: t,
						closeEmailVerificationTooltip: s,
						email: n,
						isBlueLayout: a,
						isCustomizeFlyoutShowing: r,
						isEmailVerificationTooltipShowing: o,
						isModerator: i,
						language: c,
						onDismissCustomizeFlyout: m,
						onOpenUserDropdown: u,
						resendEmail: p,
						shouldOpenEmailVerificationTooltip: h,
						toggleTooltip: g,
						toggleChangeEmailModal: f,
						unreadNotifications: x,
						user: P
					} = this.props, C = !(!x || !x.hasUnreadModmail && !x.hasUnreadOldModmail), v = (e, t) => l.a.createElement(cr.c, {
						caretOnTop: !0,
						tooltipId: e,
						text: t
					});
					return l.a.createElement(Ct.a, {
						id: xi,
						ref: e => this.container = e,
						className: t
					}, l.a.createElement(Ct.a, {
						className: So.a.headerLinks
					}, i && l.a.createElement(d.Fragment, null, l.a.createElement("span", {
						className: So.a.iconWrapper,
						id: Ci,
						key: Ci,
						onMouseEnter: () => g(Ci),
						onMouseLeave: () => e === Ci && g(Ci)
					}, l.a.createElement(Eo, {
						"aria-expanded": e === bi.a,
						"aria-haspopup": !0,
						"aria-label": Object(Ce.c)("Moderation"),
						id: bi.a,
						onClick: this.onOpenModerationDropdown,
						isOpen: e === bi.a
					}, l.a.createElement(Pn.a, {
						className: Object(b.a)(So.a.moderateIcon, {
							[So.a.isLit]: C
						})
					})), v(Ci, Object(sn.a)(c, "header.moderation"))), l.a.createElement(bi.b, {
						className: So.a.moderationDropdown,
						isOpen: e === bi.a,
						key: bi.a,
						unreadNotifications: x,
						sendEventWithName: this.sendEventWithName
					})), P && l.a.createElement(d.Fragment, null, l.a.createElement("span", {
						className: So.a.iconWrapper,
						id: fi,
						key: fi,
						onMouseEnter: () => g(fi),
						onMouseLeave: () => e === fi && g(fi)
					}, l.a.createElement("a", {
						className: So.a.link,
						href: "".concat(k.a.redditUrl, "/chat"),
						onClick: Object(Cr.a)(this.onClickChat)
					}, l.a.createElement(Lo, null)), v(fi, Object(sn.a)(c, "header.chat"))), l.a.createElement("span", {
						className: So.a.iconWrapper,
						id: Pi,
						key: Pi,
						onMouseEnter: () => g(Pi),
						onMouseLeave: () => e === Pi && g(Pi)
					}, l.a.createElement("a", {
						className: So.a.link,
						href: x && x.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: this.onClickMail
					}, l.a.createElement(Do, {
						unreadCount: x && x.inboxCount || 0
					})), v(Pi, Object(sn.a)(c, "header.messages"))), l.a.createElement("span", {
						className: So.a.iconWrapper,
						id: vi,
						key: vi,
						onMouseEnter: () => g(vi),
						onMouseLeave: () => e === vi && g(vi)
					}, l.a.createElement("button", {
						className: So.a.link,
						"aria-label": Object(Ce.c)("Create Post"),
						onClick: this.onClickCreatePost
					}, l.a.createElement(yn.a, {
						className: So.a.postIcon
					})), v(vi, Object(sn.a)(c, "header.newPost"))), l.a.createElement("span", {
						className: So.a.iconWrapper
					}, l.a.createElement(bo, null)))), l.a.createElement(hi, {
						className: So.a.headerUserDropdown,
						isBlueLayout: a,
						onClick: u,
						user: P,
						sendEventWithName: this.sendEventWithName
					}), r && l.a.createElement(Fo, {
						onCloseFlyout: m
					}), l.a.createElement(Lr, {
						closeTooltip: s,
						email: n,
						isOpen: h && o,
						resendEmail: p,
						toggleChangeEmailModal: f,
						tooltipId: xi
					}), l.a.createElement(wr, {
						email: n,
						language: c,
						shouldOpenTooltip: h
					}))
				}
			}
			var wi = Object(se.b)(Ei(yi(ji))),
				Si = s("./src/reddit/components/Header/User/index.m.less"),
				Mi = s.n(Si);
			const Ii = Object(h.c)({
					account: e => e.user.account,
					language: e => e.user.language,
					origin: W.g
				}),
				Ni = l.a.memo(e => l.a.createElement("div", {
					className: Object(b.a)(e.className, Mi.a.row, {
						[Mi.a.blue]: e.isBlueLayout
					})
				}, !e.account && function(e) {
					const t = e.pageLayer,
						s = k.a.accountManagerOrigin,
						n = t ? t.url : "/",
						a = t && t.meta && t.meta.name === g.xb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + n);
					return l.a.createElement("div", {
						className: Object(b.a)(Mi.a.loggedOutRow, {
							[Mi.a.blue]: e.isBlueLayout
						})
					}, l.a.createElement(xt.j, {
						redditStyle: !0,
						className: Object(b.a)(Mi.a.login, Mi.a.button),
						href: "".concat(s, "/login/?dest=").concat(a),
						onClick: t => {
							Object(v.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(Pr.a)("nav")))
						}
					}, l.a.createElement(re.c, null, "log in")), l.a.createElement(xt.g, {
						redditStyle: !0,
						className: Object(b.a)(Mi.a.separator, Mi.a.register, Mi.a.button),
						href: "".concat(s, "/register/?dest=").concat(a),
						onClick: t => {
							Object(v.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(Pr.c)("nav")))
						}
					}, l.a.createElement(re.c, null, "sign up")))
				}(e), l.a.createElement(wi, {
					className: Object(b.a)({
						[Mi.a.loggedOut]: !e.account
					}),
					isBlueLayout: e.isBlueLayout,
					language: e.language,
					user: e.account
				})));
			var ki = Object(_n.t)()(Object(m.b)(Ii, e => ({
					onOpenLoginModal: () => {
						e(Object(qe.k)({
							actionSource: qe.a.HeaderLogin
						})), e(Object(xr.e)())
					},
					onOpenRegisterModal: () => {
						e(Object(qe.k)({
							actionSource: qe.a.HeaderSignup
						})), e(Object(xr.f)())
					}
				}))(Object(se.b)(Ni))),
				_i = s("./src/reddit/components/Header/index.m.less"),
				Ti = s.n(_i);

			function Li() {
				return (Li = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ri = N.a.header("HeaderDynamicStyles", Ti.a),
				Ai = Object(h.c)({
					categoriesPlacementVariant: rr.g,
					exploreV2Variant: e => Object(Tn.a)(e, {
						expEventOverride: !1
					}),
					generalCleanupVariant: or.a,
					isLoggedIn: jt.J,
					isM2MEnabled: Q.w,
					isNightmode: jt.U,
					language: e => e.user.language,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Fi = Object(_n.t)({
					categoryName: _n.b,
					isExplore: _n.x,
					pageLayer: e => e
				}),
				Di = e => l.a.createElement("div", {
					className: Ti.a.left
				}, l.a.createElement(tr.a, null, l.a.createElement(re.c, null, "Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts")), l.a.createElement(er.b, null), l.a.createElement(en.a, {
					"aria-label": Object(Ce.c)("Home"),
					className: Ti.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, l.a.createElement(nr.a, {
					className: Ti.a.snoo
				}), l.a.createElement(ar.a, {
					className: Ti.a.wordmark
				})), e.children),
				Bi = e => l.a.createElement("div", {
					className: Ti.a.right
				}, e.children, l.a.createElement(ki, {
					isBlueLayout: e.isBlue,
					isExplore: e.isExplore
				})),
				Ui = e => l.a.createElement("div", {
					className: Ti.a.layout
				}, l.a.createElement(Di, Li({}, e, {
					isBlue: e.isBlue,
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), l.a.createElement(Wa, {
					isBlueLayout: e.isBlue
				}), l.a.createElement(sr.a, {
					className: Ti.a.search
				})), l.a.createElement(Bi, {
					isBlue: e.isBlue
				}, l.a.createElement(fr, {
					className: Ti.a.quickLinks,
					isBlueLayout: e.isBlue
				}))),
				Hi = e => l.a.createElement("div", {
					className: Ti.a.layout
				}, l.a.createElement(Di, Li({}, e, {
					isBlue: e.isBlue,
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), e.isM2MEnabled && l.a.createElement($a, null), l.a.createElement("div", {
					className: Object(b.a)(Ti.a.searchContainer, !!e.generalCleanupVariant && Ti.a.cleanup)
				}, l.a.createElement(sr.a, {
					className: Ti.a.search
				}))), l.a.createElement(Bi, {
					isBlue: e.isBlue
				})),
				Vi = e => {
					const t = !!e.categoryName || !Object(Tn.e)(e.exploreV2Variant);
					return l.a.createElement("div", {
						className: Ti.a.layout
					}, l.a.createElement(Di, Li({}, e, {
						isBlue: e.isBlue,
						language: e.language,
						onReloadFrontpage: e.onReloadFrontpage
					}), l.a.createElement(Wa, {
						isBlueLayout: e.isBlue
					}), t && l.a.createElement("div", {
						className: Object(b.a)(Ti.a.searchContainer, Ti.a.explore)
					}, l.a.createElement(sr.a, {
						className: Ti.a.search
					}))), l.a.createElement(Bi, {
						isBlue: e.isBlue,
						isExplore: !0
					}))
				};
			var Wi = Fi(Object(m.b)(Ai, e => ({
					onReloadFrontpage: () => e(Object(tn.x)(!0))
				}))((function(e) {
					let t;
					t = e.isM2MEnabled && !e.isLoggedIn || Object(or.c)(e.generalCleanupVariant) ? Hi : e.isExplore ? Vi : Ui;
					const s = Object(rr.c)(e.categoriesPlacementVariant) && !e.isNightmode;
					return l.a.createElement(Ri, {
						"data-redditstyle": !0,
						className: Object(b.a)(Ti.a.container, e.className, {
							[Ti.a.bladeIsOpen]: e.isBladeOpen,
							[Ti.a.blue]: s
						})
					}, l.a.createElement(t, {
						categoryName: e.categoryName,
						exploreV2Variant: e.exploreV2Variant,
						generalCleanupVariant: e.generalCleanupVariant,
						isBlue: s,
						isM2MEnabled: e.isM2MEnabled,
						language: e.language,
						onReloadFrontpage: e.onReloadFrontpage
					}))
				}))),
				Qi = s("./src/reddit/components/LightboxHeader/index.tsx");
			const Gi = () => null;
			var qi = Object(y.a)({
					ErrorComponent: Gi,
					getComponent: () => Object(j.a)(() => s.e("MonthsToMinutes").then(s.bind(null, "./src/reddit/components/M2M/ACBanner/index.tsx"))).then(e => e.default),
					LoadingComponent: Gi
				}),
				zi = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Zi = s("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Ki = s.n(Zi);
			const Ji = Object(m.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(E.j)())
			}));
			var Yi = N.a.wrapped(Ji((function(e) {
					return l.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, l.a.createElement("div", {
						className: Ki.a.title
					}, l.a.createElement(oa, {
						className: Ki.a.listHeader
					}, l.a.createElement(re.c, null, "My Communities")), l.a.createElement("div", {
						className: Ki.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, l.a.createElement($t.a, {
						className: Ki.a.icon
					}))), l.a.createElement(La, null))
				})), "Component", Ki.a),
				Xi = s("./src/reddit/components/ThemeProvider/index.tsx"),
				$i = s("./src/reddit/actions/toaster.ts");
			const ec = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				tc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, G.actionInfo(t), {
						reason: "primary"
					})
				}),
				sc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, G.actionInfo(t), {
						reason: "secondary"
					})
				});
			var nc = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				ac = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				rc = s("./src/reddit/models/Toast/index.ts"),
				oc = s("./src/reddit/selectors/structuredStyles.ts"),
				ic = s("./src/reddit/components/Toaster/PlainBread.m.less"),
				cc = s.n(ic);

			function dc() {
				return (dc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var lc = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const mc = e => {
				const t = gn.a;
				switch (e.kind) {
					case rc.b.Error:
					case rc.b.AuthError:
						return t.warning;
					case rc.b.SuccessCommunity:
						return t.op;
					case rc.b.SuccessCommunityGreen:
					case rc.b.SuccessMod:
						return t.approved;
					case rc.b.EuCookiePolicy:
					case rc.b.UappBanner:
					case rc.b.Undo:
					default:
						return t.op
				}
			};
			class uc extends l.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const e = this.props,
						{
							kind: t,
							sendEvent: s
						} = e,
						n = lc(e, ["kind", "sendEvent"]);
					return l.a.createElement("div", n)
				}
			}
			const pc = N.a.wrapped(uc, "PlainBread", cc.a);
			var hc = e => l.a.createElement(pc, dc({}, e, {
					style: Object.assign({}, e.style || {}, {
						"--Toaster-indicatorColor": mc(e)
					})
				})),
				bc = s("./src/reddit/components/Toaster/StyledComponents.m.less"),
				gc = s.n(bc);
			const fc = N.a.span("Text", gc.a);
			var xc = s("./src/reddit/components/Toaster/index.m.less"),
				Pc = s.n(xc);
			const {
				fbt: Cc
			} = s("./node_modules/fbt/lib/FbtPublic.js"), vc = N.a.wrapped(nc.a, "AuthErrorToastIcon", Pc.a), Ec = N.a.wrapped(xt.f, "AuthErrorToastPrimaryButton", Pc.a);
			class Oc extends l.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), window.location.reload(!0)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return l.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, l.a.createElement(hc, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, l.a.createElement(vc, null), l.a.createElement(fc, null, Cc._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), l.a.createElement(Ec, {
						type: "submit"
					}, Cc._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var yc = Oc;
			const jc = 3;
			var wc = s("./src/lib/permanentCookieOptions.ts"),
				Sc = s("./src/reddit/controls/Link/index.tsx"),
				Mc = s("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Ic = s.n(Mc);
			const {
				fbt: Nc
			} = s("./node_modules/fbt/lib/FbtPublic.js"), kc = N.a.div("Icon", Ic.a), _c = () => l.a.createElement(kc, {
				style: {
					backgroundImage: "url(".concat(k.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), Tc = N.a.wrapped(xt.f, "PrimaryButton", Ic.a), Lc = N.a.wrapped(hc, "Bread", Ic.a);
			class Rc extends l.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Qe.a.set(Ht.b, jc.toString(), Object(wc.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return l.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, l.a.createElement(Lc, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, l.a.createElement(_c, null), l.a.createElement(fc, null, Nc._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", l.a.createElement(Sc.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Nc._("Learn More", null, {
						hk: "1fsN6Z"
					})), "."), l.a.createElement(Tc, {
						type: "submit"
					}, Nc._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var Ac, Fc = Rc;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Ac || (Ac = {}));
			var Dc = s("./src/reddit/controls/Typography/index.tsx"),
				Bc = s("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Uc = s.n(Bc);

			function Hc() {
				return (Hc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Vc = N.a.div("Container", Uc.a),
				Wc = N.a.img("SideImage", Uc.a),
				Qc = N.a.div("Main", Uc.a),
				Gc = N.a.div("SubTitle", Uc.a),
				qc = Dc.c,
				zc = N.a.wrapped(xt.g, "PrimaryLinkButton", Uc.a),
				Zc = N.a.wrapped($t.a, "CloseIcon", Uc.a);
			class Kc extends l.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(tc(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(ec(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: s,
						style: n,
						subTitle: a,
						title: r
					} = this.props;
					return l.a.createElement(Vc, {
						key: t,
						style: Object.assign({}, n, {
							transform: "\n            translateY(".concat(n.y, "px)\n            scale(").concat(n.x, ", ").concat(n.x, ")\n          ")
						})
					}, l.a.createElement(Zc, {
						onClick: this.props.onClose
					}), l.a.createElement(Wc, {
						srcSet: s
					}), l.a.createElement(Qc, null, l.a.createElement(Gc, null, a), l.a.createElement(Dc.d, null, r), l.a.createElement(qc, null, e), l.a.createElement(zc, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, Dn.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Jc = Object(m.b)(null, e => ({
					onSignup: () => e(Object(xr.f)())
				}))(Object(se.b)(Kc)),
				Yc = "".concat(Xc("subscribe-cap.png"), " 1x,\n  ").concat(Xc("subscribe-cap@2x.png"), " 2x,");

			function Xc(e) {
				return "".concat(k.a.assetPath, "/img/banner/").concat(e)
			}
			const $c = 3,
				ed = e => "".concat(e, ":").concat(152721e4);
			var td = s("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				sd = s.n(td);
			const {
				fbt: nd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ad = N.a.div("Icon", sd.a), rd = () => l.a.createElement(ad, {
				style: {
					backgroundImage: "url(".concat(k.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), od = N.a.wrapped(xt.f, "PrimaryButton", sd.a), id = N.a.wrapped(hc, "Bread", sd.a);
			class cd extends l.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Qe.a.set(Ht.j, ed($c), Object(wc.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return l.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, l.a.createElement(id, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, l.a.createElement(rd, null), l.a.createElement(fc, null, nd._("Reddit is updating its {=User Agreement} and {=Privacy Policy}.", [nd._param("=User Agreement", l.a.createElement(Sc.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, nd._("User Agreement", null, {
						hk: "3YDd1R"
					}))), nd._param("=Privacy Policy", l.a.createElement(Sc.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, nd._("Privacy Policy", null, {
						hk: "4EAMzY"
					})))], {
						hk: "1Oj4Vk"
					}), " "), l.a.createElement(od, {
						type: "submit"
					}, nd._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var dd = cd;

			function ld() {
				return (ld = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const md = [],
				ud = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				pd = {
					opacity: .5,
					x: .5,
					y: 50
				},
				hd = {
					opacity: Object(I.spring)(0),
					x: Object(I.spring)(.6),
					y: Object(I.spring)(80, ud)
				},
				bd = N.a.wrapped(nc.a, "SnooFacepalm", Pc.a),
				gd = N.a.wrapped(ac.a, "SnooHappy", Pc.a),
				fd = N.a.wrapped(dn.b, "SubredditIcon", Pc.a),
				xd = N.a.div("Container", Pc.a),
				Pd = N.a.wrapped($t.a, "Close", Pc.a),
				Cd = e => l.a.createElement(l.a.Fragment, null, l.a.createElement(Pd, ld({
					className: "CloseIcon"
				}, e))),
				vd = N.a.wrapped(hc, "Bread", Pc.a),
				Ed = Object(h.c)({
					subredditIcon: oc.c,
					toastSlices: e => e.toaster
				}),
				Od = Object(m.b)(Ed, e => ({
					dismissToast: t => () => e(Object($i.f)(t)),
					onButtonClick: (t, s) => () => {
						e(t), e(Object($i.f)(s))
					}
				}));
			class yd extends l.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => jd(e, this.props.toastSlices), this.getWillEnterStyles = () => pd, this.getWillLeaveStyles = () => hd
				}
				render() {
					return this.props.toastSlices.length ? l.a.createElement(I.TransitionMotion, {
						defaultStyles: md,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => l.a.createElement(xd, null, e.map(e => {
						const t = e.data,
							s = Object.assign({}, e.style, {
								transform: "\n                  translateY(".concat(e.style.y, "px)\n                  scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n                ")
							});
						if (t.kind === rc.b.Custom && void 0 !== t.customToastType) {
							const n = Sd[t.customToastType];
							return l.a.createElement(n, {
								key: e.key,
								toast: t,
								style: s,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === rc.b.UappBanner) return l.a.createElement(dd, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === rc.b.EuCookiePolicy) return l.a.createElement(Fc, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === rc.b.AuthError) return l.a.createElement(yc, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						const n = t.kind === rc.b.Modal ? xt.f : xt.n,
							a = t.kind === rc.b.Modal ? xt.i : xt.n;
						return l.a.createElement(vd, {
							className: t.kind === rc.b.Modal ? Pc.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(ec(t.name)) : void 0,
							style: s
						}, l.a.createElement("div", {
							className: Pc.a.ContentWrapper
						}, wd(t, this.props.subredditIcon), l.a.createElement(fc, null, t.text)), l.a.createElement("div", {
							className: Pc.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && l.a.createElement(n, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(tc(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && l.a.createElement(a, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(sc(t.name))
							}
						}, t.secondButtonText)), l.a.createElement(Cd, {
							onClick: this.props.dismissToast(t.id)
						}))
					}))) : null
				}
			}
			const jd = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(I.spring)(1),
							x: Object(I.spring)(1, ud),
							y: Object(I.spring)(0, ud)
						}
					}))
				},
				wd = (e, t) => {
					switch (e.kind) {
						case rc.b.Error:
							return l.a.createElement(bd, null);
						case rc.b.SuccessCommunity:
						case rc.b.SuccessCommunityGreen:
							return l.a.createElement(gd, null);
						case rc.b.SuccessMod:
							return l.a.createElement(fd, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Sd = {
					[rc.a.subscribeCap]: e => l.a.createElement(Jc, Hc({
						name: Ac.LoggedOutMaxSubscriptions,
						sideImage: Yc,
						title: Dn.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: Dn.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Md = Od(Object(se.b)(yd)),
				Id = s("./src/reddit/featureFlags/profileCollections.ts"),
				Nd = s("./src/reddit/helpers/trackers/banners.ts"),
				kd = s("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				_d = s.n(kd);
			var Td = N.a.div("Wrapper", _d.a),
				Ld = s("./src/reddit/components/AlertBanner/index.m.less"),
				Rd = s.n(Ld);
			const Ad = () => l.a.createElement(Td, {
					className: Object(b.a)(Rd.a.wrapper, Rd.a.suspended)
				}, l.a.createElement("span", null, l.a.createElement(re.c, null, "Your account has been suspended."), " "), l.a.createElement("a", {
					className: Rd.a.underlineLink,
					href: "https://www.reddithelp.com/en/node/851"
				}, l.a.createElement(re.c, null, "Learn more"))),
				Fd = () => l.a.createElement(Td, {
					className: Object(b.a)(Rd.a.wrapper, Rd.a.fpr)
				}, l.a.createElement("span", null, l.a.createElement(re.c, null, "Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password."), " "), l.a.createElement("a", {
					className: Rd.a.underlineLink,
					href: "https://www.reddithelp.com/en/categories/using-reddit/your-reddit-account/my-account-was-disabled"
				}, l.a.createElement(re.c, null, "Learn more"))),
				Dd = e => {
					let {
						updateLink: t,
						onClickOldReddit: s
					} = e;
					return l.a.createElement(Td, {
						className: Object(b.a)(Rd.a.wrapper, Rd.a.deprecated)
					}, l.a.createElement("span", null, l.a.createElement(re.c, null, "Looks like you're using new Reddit on an old browser. The site may not work properly if you don't"), " "), l.a.createElement(Bd, {
						link: t
					}, l.a.createElement(re.c, null, "update your browser")), l.a.createElement("span", null, "!  ", l.a.createElement(re.c, null, "If you do not update your browser, we suggest you visit"), " "), l.a.createElement("a", {
						className: Rd.a.underlineLink,
						href: k.a.oldRedditUrl,
						onClick: s
					}, l.a.createElement(re.c, null, "old reddit")), l.a.createElement("span", null, "."))
				},
				Bd = e => {
					let {
						children: t,
						link: s
					} = e;
					return null !== s ? l.a.createElement("a", {
						className: Rd.a.underlineLink,
						href: s
					}, t) : l.a.createElement("span", null, t)
				};
			class Ud extends l.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(Nd.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(Nd.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: s
					} = this.props;
					return e && e.isDeprecated ? l.a.createElement(Dd, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? l.a.createElement(Fd, null) : s ? l.a.createElement(Ad, null) : null
				}
			}
			var Hd = Object(se.b)(Ud),
				Vd = s("./src/reddit/components/AlertBanner/heights.ts"),
				Wd = s("./src/reddit/constants/componentSizes.ts"),
				Qd = s("./src/reddit/constants/elementIds.ts"),
				Gd = s("./src/reddit/constants/posts.ts"),
				qd = s("./src/reddit/contexts/InsideOverlay.tsx"),
				zd = s("./src/reddit/contexts/Language.tsx"),
				Zd = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Kd = s("./src/reddit/helpers/postCollection.ts"),
				Jd = s("./src/reddit/models/Theme/index.ts"),
				Yd = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				Xd = s("./src/reddit/selectors/notificationBanner.ts"),
				$d = s("./src/reddit/selectors/posts.ts"),
				el = s("./src/reddit/components/AppRouter/index.m.less"),
				tl = s.n(el);

			function sl() {
				return (sl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return ol
			}));
			var nl = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const al = e => {
					var {
						className: t,
						shouldDisplayPinnedSubscriptions: s
					} = e, n = nl(e, ["className", "shouldDisplayPinnedSubscriptions"]);
					return l.a.createElement("div", sl({
						className: Object(b.a)(tl.a.main, {
							[tl.a.mShowingPaddedPinnedDescriptions]: s
						}, t)
					}, n))
				},
				rl = Object(f.a)(e => {
					var {
						className: t,
						theme: s
					} = e, n = nl(e, ["className", "theme"]);
					const a = Object(ie.a)(Object.assign({
						theme: s
					}, n));
					return l.a.createElement("div", sl({
						className: Object(b.a)(tl.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Jd.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition)
						}
					}, n))
				}),
				ol = e => {
					var {
						className: t,
						divRef: s
					} = e, n = nl(e, ["className", "divRef"]);
					return l.a.createElement("div", sl({
						className: Object(b.a)(tl.a.lightboxHeaderWrapper, t)
					}, n, {
						ref: s
					}))
				},
				il = Object(m.b)(() => Object(h.c)({
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(V.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: jt.t,
					language: e => e.user.language,
					isLoggedIn: jt.J,
					isSubscriptionsPinned: Ba.b,
					isSuspended: jt.O,
					isFPR: jt.H,
					isM2MTopBannerVariant: Yd.c,
					posts: $d.L,
					profileCollectionsEnabled: Id.a,
					shouldRedirectToHome: e => Object(Q.z)(e) && Object(Yd.d)(Object(Yd.f)(e)),
					showAccountCompletenessBanner: e => Object(Yd.c)(e) && Object(Q.k)(e),
					showEmailCollectionBanner: Object(Xd.a)(zi.a.EmailCollectionBannerId)
				}), e => ({
					goToHome: () => e(Object(O.b)({
						shouldPrepareData: !1
					})),
					onClickOutsideOverlay: t => e(Object(p.b)(t)),
					onUnpinSubscriptions: () => e(Object(E.j)())
				})),
				cl = (e, t) => !(!e.state || !e.state[A.a.IsOverlay] || t === e),
				dl = (e, t) => {
					const {
						key: s
					} = e, n = nl(e, ["key"]), {
						key: r
					} = t, o = nl(t, ["key"]);
					return a()(n, o)
				};
			class ll extends l.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.shouldRedirectToHome = !1, this.resizeHandler = c()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Wd.m && this.props.onUnpinSubscriptions()
					}, g.F), this.onClickOutsideOverlay = e => {
						this.shouldRedirectToHome ? (this.shouldRedirectToHome = !1, this.props.goToHome()) : this.props.onClickOutsideOverlay(e)
					}, this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: s
						} = this.props;
						if (Object(_n.w)(e)) {
							const n = e && e.urlParams && e.urlParams.partialPostId,
								a = "".concat(g.vb.Post, "_").concat(n),
								r = t && n && t[a],
								o = r && r.belongsTo.type === Gd.a.PROFILE;
							return !(!r || !Object(Kd.a)(r) || o && !s)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(V.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				componentWillUpdate(e) {
					const {
						location: t,
						shouldRedirectToHome: s,
						showAccountCompletenessBanner: n
					} = this.props, a = t.state && t.state[A.a.IsOverlay], r = dl(this.previousLocation, e.location), o = dl(this.previousLocation, this.props.location), i = a ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: s
						} = i, n = t && (t.name === g.xb.INDEX || t.name === g.xb.SUBREDDIT && s.subredditName === F.b.Popular), a = Object(V.c)(this.props.frontpageSignupVariant), r = Object(V.c)(e.frontpageSignupVariant);
						n || a || !r ? a && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || a || r || o || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), s && !a && n && e.location.state && e.location.state[A.a.IsOverlay] && (this.shouldRedirectToHome = !0);
					const c = cl(e.location, this.previousLocation);
					P.a.write(() => {
						document.body.style.overflow = c ? "hidden" : ""
					})
				}
				render() {
					const {
						currentPage: e,
						frontpageSignupVariant: t,
						hasInvalidSession: s,
						isFPR: n,
						isLoggedIn: a,
						isM2MTopBannerVariant: r,
						isSubscriptionsPinned: i,
						isSuspended: c,
						language: m,
						location: u,
						routes: p,
						showAccountCompletenessBanner: h,
						showEmailCollectionBanner: b
					} = this.props, {
						isSignupUpsellDisplayed: f,
						isSignupUpsellHidden: x
					} = this.state, P = this.context, C = cl(u, this.previousLocation);
					u.state && u.state[A.a.IsOverlay] && !C ? u.state[A.a.IsOverlay] = !1 : u.state && (this.previousLocation === u || u.state[A.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[A.a.CloseLocation] && this.previousLocation.state[A.a.CloseLocation] === u.state[A.a.CloseLocation] ? u.state[A.a.CloseLocation] = Object.assign({}, this.previousLocation, {
						state: o()(this.previousLocation.state, A.a.CloseLocation)
					}) : u.state[A.a.CloseLocation] = this.previousLocation);
					const v = dl(this.previousLocation, u),
						E = C || v ? this.previousLocation : u,
						O = C || v ? this.previousPage : e,
						y = !(!(O && O.meta && O.meta.name === g.xb.SEARCH_RESULTS && O && O.queryParams) || O.queryParams[D.p]),
						j = !(!O || !O.meta || O.meta.name !== g.xb.MODERATION_PAGES),
						S = Object(_n.w)(O),
						M = this.getIsPostCollection(),
						I = r && h,
						N = f && !x;
					return s ? Object(Ce.c)("Sorry, we have failed you. Try refreshing!") : l.a.createElement(zd.a.Provider, {
						value: m
					}, l.a.createElement(_n.a.Provider, {
						value: O
					}, l.a.createElement(er.c, {
						isOverlayOpen: C
					}, l.a.createElement(Xi.a, {
						forceRedditTheme: y
					}, f && l.a.createElement(Ve, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), l.a.createElement(ml, {
						browserInfo: P,
						isFPR: n,
						isInline: N,
						isSuspended: c
					})), l.a.createElement(qd.a.Provider, {
						value: !1
					}, l.a.createElement(Xi.a, {
						forceRedditTheme: y || j,
						isCommentsPage: S
					}, l.a.createElement(ul, {
						frontpageSignupVariant: t,
						isCommentsPage: S,
						isInline: N,
						isLoggedIn: a,
						isSubscriptionsPinned: i,
						location: E,
						overlayIsOpen: C,
						page: O,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: P,
						showFPR: n,
						showM2MTopBanner: I,
						showSuspended: c
					}))))), l.a.createElement(_n.a.Provider, {
						value: e
					}, C && l.a.createElement(qd.a.Provider, {
						value: !0
					}, l.a.createElement(Xi.a, {
						isOverlay: !0
					}, l.a.createElement(pl, {
						isPostCollection: M,
						location: u,
						onClickOutsideOverlay: this.onClickOutsideOverlay,
						page: e,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: P,
						showFPR: n,
						showM2MTopBanner: I,
						showSuspended: c
					}))), l.a.createElement(Xi.a, null, l.a.createElement(d.Fragment, null, l.a.createElement(Md, null), b && l.a.createElement(w, null), h && l.a.createElement(qi, null), l.a.createElement(Zt, null), l.a.createElement($s, null)))))
				}
			}
			ll.contextType = x.a;
			const ml = Object(se.b)(e => {
					const {
						browserInfo: t,
						isFPR: s,
						isInline: n,
						isSuspended: a
					} = e, r = {
						browserInfo: t,
						showFPR: s,
						showSuspended: a
					};
					return l.a.createElement(d.Fragment, null, l.a.createElement(Hd, r), l.a.createElement(Wi, {
						className: Object(b.a)(tl.a.header, Object(Vd.b)(tl.a, r), {
							[tl.a.inline]: n
						})
					}))
				}),
				ul = Object(se.b)(class extends l.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.showM2MTopBanner !== e.showM2MTopBanner || this.props.isInline !== e.isInline
					}
					locationsEqual(e, t) {
						const s = o()(e, "key"),
							n = o()(t, "key");
						return a()(s, n)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const s = o()(e, ["key", "locationState"]),
								n = o()(t, ["key", "locationState"]);
							return a()(s, n)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: s,
							overlayIsOpen: n,
							isCommentsPage: a,
							isInline: r,
							isLoggedIn: o,
							isSubscriptionsPinned: i,
							showEmailCollectionBanner: c
						} = this.props, d = i && !(!o && !n && a);
						return l.a.createElement(al, {
							"aria-hidden": n,
							className: Object(b.a)(Object(Vd.b)(tl.a, this.props), {
								[tl.a.withUpsell]: !!e,
								[tl.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && l.a.createElement(Yi, {
							className: Object(b.a)(tl.a.pinnedSubscriptions, Object(Vd.b)(tl.a, this.props)),
							"data-redditstyle": !0
						}), l.a.createElement(u.f, {
							location: t
						}, s), c && l.a.createElement("div", {
							className: Object(b.a)(tl.a.bottomSpacer, Object(Vd.a)(tl.a, this.props))
						}))
					}
				});
			class pl extends l.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => this.overlayScrollContainerEl = e, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(v.a)(e) && 0 === e.button && e.target === this.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[A.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Zd.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(C.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Zd.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: s
					} = this.props, n = !(!t || !t.meta || t.meta.name === g.xb.SUBREDDIT_CREATION || t.meta.name === g.xb.PUBLIC_ACCESS_NETWORK), a = e;
					return l.a.createElement(rl, {
						className: Object(b.a)(Object(Vd.b)(tl.a, this.props), {
							[tl.a.mIsCommentsLightbox]: n,
							[tl.a.mIsLargeCommentsLightbox]: a
						})
					}, n && l.a.createElement(ol, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(b.a)(tl.a.mTopBannerAdjustments, Object(Vd.b)(tl.a, this.props), {
							[tl.a.mIsLargeCommentsLightbox]: a
						}),
						tabIndex: -1
					}, l.a.createElement(Qi.a, {
						page: t
					})), l.a.createElement("div", {
						className: Object(b.a)(tl.a.overlayWrapper, Object(Vd.b)(tl.a, this.props))
					}, l.a.createElement("div", {
						className: Object(b.a)(tl.a.overlayScrollContainer, {
							[tl.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Qd.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, l.a.createElement(u.f, null, s), l.a.createElement("div", {
						className: Object(b.a)(tl.a.bottomSpacer, Object(Vd.a)(tl.a, this.props))
					}))))
				}
			}
			t.b = il(Object(se.b)(ll))
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(a.a)(() => s.e("BannedUserModal").then(s.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "BlankPost", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/AdViewability/index.tsx"),
				i = s("./src/reddit/connectors/PostViewable/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/lib/classNames/index.ts");
			const l = Object(i.a)(() => Object(r.c)({
					post: c.I
				})),
				m = e => {
					let {
						className: t,
						post: s,
						onPostViewable: n
					} = e;
					return s.isSponsored ? a.a.createElement(o.a, {
						onViewable: e => n(s, e),
						children: a.a.createElement("div", {
							className: Object(d.a)(t, "Blank ".concat(s.id))
						}),
						trackVideoMetrics: !1
					}) : null
				};
			t.default = l(m)
		},
		"./src/reddit/components/Carousel/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FR0eEUi22u9saLEyWWJGS",
				indicators: "_3YoS4yX_XBXWbj-eYFW6MS",
				indicator: "_1mwHqJp51wXFI7rjTonkz5",
				indicatorSelected: "_2ol4vy2ml1IZ6lfT2n775g",
				items: "_26qHHOV6EkP4whoc4ySt3l",
				item: "_2gs-hGAB6w3q4Gc8mSyG5Z",
				fade: "uAUBkt8dAygLJNIsiAmad",
				slide: "_4S2XTVURHpoKNNEuKzJbH"
			}
		},
		"./src/reddit/components/Carousel/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return l
			}));
			var n, a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Carousel/index.m.less"),
				d = s.n(c);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(n || (n = {}));
			class l extends r.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === n.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
					}, this.handleNextFadePage = () => {
						this.setState((e, t) => Object.assign({}, e, {
							pageNumber: (e.pageNumber + 1) % t.items.length
						}))
					}, this.handleNextSlidePage = () => {
						this.setState((e, t) => {
							const s = 10 * t.items.length;
							return Object.assign({}, e, {
								pageNumber: (e.pageNumber + 1) % s,
								items: e.pageNumber === s - 1 ? t.items : e.pageNumber === e.items.length - 1 ? e.items.concat(t.items) : e.items
							})
						})
					}, this.clearPageInterval = () => {
						this.timeoutNumber && window.clearTimeout(this.timeoutNumber)
					}, this.setPageInterval = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						t.clearPageInterval(), t.timeoutNumber = window.setTimeout(t.handleNextPage, t.props.itemTime + e)
					}, this.handleItemClick = () => {
						this.clearPageInterval(), this.handleNextPage()
					}, this.renderItemExtra = e => {
						let {
							img: t,
							style: s
						} = e;
						return r.a.createElement("img", {
							key: t,
							src: "".concat(o.a.assetPath, "/").concat(t),
							style: s
						})
					}, this.renderItem = (e, t) => {
						const {
							animationType: s,
							itemWidth: a,
							shouldHandleMouseClicks: c
						} = this.props, {
							pageNumber: l
						} = this.state, m = s === n.Fade ? {
							opacity: t === l ? 1 : 0
						} : {
							marginLeft: 0 === t ? -a * l : void 0
						};
						return r.a.createElement("div", {
							className: Object(i.a)(d.a.item, d.a[s]),
							key: "item-".concat(t),
							style: Object.assign({}, m, {
								backgroundImage: 'url("'.concat(o.a.assetPath, "/").concat(e.img, '")'),
								width: a
							}),
							onClick: c ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => r.a.createElement("div", {
						className: Object(i.a)(d.a.indicator, {
							[d.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
						}),
						key: t
					}), this.state = {
						items: e.items,
						pageNumber: 0
					}
				}
				componentDidMount() {
					this.setPageInterval(this.props.delay)
				}
				componentWillUnmount() {
					this.clearPageInterval()
				}
				render() {
					const {
						className: e,
						shouldShowIndicators: t,
						items: s
					} = this.props;
					return r.a.createElement("div", {
						className: Object(i.a)(e, d.a.container)
					}, r.a.createElement("article", {
						className: d.a.items
					}, this.state.items.map(this.renderItem)), t && r.a.createElement("footer", {
						className: d.a.indicators
					}, s.map(this.renderIndicator)))
				}
			}
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/ClassicPost/index.m.less"),
				c = s.n(i);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: s,
					crosspost: n,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: m,
					removeLink: u,
					templatePlaceholderImage: p,
					thumbnailContainerClassName: h,
					url: b,
					usePreview: g
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(c.a.thumbnailContainer, t)
				}, a.a.createElement(o.a, {
					className: Object(r.a)(c.a.thumbnail, s),
					containerClassName: h,
					crosspost: n,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: m,
					removeLink: u,
					templatePlaceholderImage: p,
					url: u ? void 0 : b,
					usePreview: g
				}))
			}
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, s) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				crosspostMediaWrapper: "_1qc1-Anfrhr6APGcBKFk8M",
				expandoContainer: "_3r40yytzBnldjGGOrs2mCw",
				flatlist: "ssgs3QQidkqeycI33hlBa",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
				flatlistSeparator: "_1wDt70OnYnqsrm0XIsNn8v",
				horizontalVotes: "_3ytybPoFoY12sGn375PMy1",
				leftExpando: "_35zWJjb5RJMIMkexZ2Prus",
				mainBody: "_2XDITKxlj4y3M99thqyCsO",
				rightExpando: "_2Ddj1d6vOe9NlJqkdothNe",
				spacer: "iRkLLvxarfGu_2c7HxhW0",
				titleWithPoll: "_2FcpdQwjwRwk7X_NiZub8x",
				thumbnail: "_2e9Lv1I3dOmICVO9fg3uTG",
				thumbnailContainer: "_38EcSQ9jzVrdtzkXO1cydX",
				eventMeta: "rmPDRyja27ULjwD3rW14H",
				chain: "sfueWOUNVDpNGfP_Ow2yN",
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				CoinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				coinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				header: "_11NEHYc92BkrvsxyhXvs1u",
				headerText: "_1vG6msVYgq5OQBCLLzIt82",
				headerLink: "_1c3Ogz8fnJBxW2EndGIWfX",
				purchaseList: "_310fLrnWkOCPEaTfEufxkJ"
			}
		},
		"./src/reddit/components/CoinPurchaseModal/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				r = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("CoinsPurchaseModal")]).then(s.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(r.c)()])).then(e => e[0].default),
				i = Object(n.a)({
					getComponent: o,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = i
		},
		"./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less": function(e, t, s) {
			e.exports = {
				CompactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				compactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				productSection: "_2VkRnsOobI-4VlOs4ID5Vy",
				primaryText: "_4cdfLigUWzeeVcPzzbe78",
				subText: "_2rMDMrhhjRzyi7pNFku1dh",
				buttonSubText: "_3qTmR_nZBIBLXk2J3z7RWs",
				priceSection: "_49wuP84YuCbFBmZg2KI5s",
				button: "_2s6F0RDk744nqzZtEK_6Og",
				goldStyle: "_2fGxX7IQlng74vsW862Y--"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const u = Object(o.a)(e => {
				var {
					className: t
				} = e, s = m(e, ["className"]);
				return a.a.createElement(i.a, l({}, s, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: d.a.customScoreStyles,
					downvoteClassName: Object(i.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/EmailVerificationTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				closeIcon: "_2lPBwpVCWIEI428aTPAwZx",
				closeWrapper: "_1_Rq-E5LCS_6JTARElGK12",
				container: "_2IHh1GBfUxJVQQX0dJvAry",
				topLine: "_1l7oRxdMdQQ7NG2BqRCukJ",
				title: "_3tEYeY-LfC8l7tb0sWeImJ",
				subtitle: "_42_eHTHzRRdWB7Fg8R_QS",
				description: "_33SFF8h93OHkDyAJ59D1nc",
				buttonWrapper: "_9wv2Od0X3vE5kIG9M0Ic",
				commonBtn: "_193xt0mDvkWqbClnP3Aj6T",
				primaryBtn: "BwIqd_kQSoiSr3qEDtdp_"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1DtVp1OCzoJt6rVu4kqyST",
				container: "_1DtVp1OCzoJt6rVu4kqyST",
				Phone: "_20m5B-2NHmUmXVUYC1gymo",
				phone: "_20m5B-2NHmUmXVUYC1gymo",
				android: "_2jgq6Cm4n7c3NNl8VpFltS",
				iphone: "_2ocrsCliWP9UUmx5ZL374w",
				Carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				Frame: "_3P_iHJEXRll3mWyuqNik3I",
				frame: "_3P_iHJEXRll3mWyuqNik3I"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_23C-3j-0TrSZn_NJT8fcwU",
				container: "_23C-3j-0TrSZn_NJT8fcwU",
				Disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				Link: "EzRsHBU9A06NEXZnsJyWI",
				link: "EzRsHBU9A06NEXZnsJyWI"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				MainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				mainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				MainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				mainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				Images: "_19dEFhHhbDgVJWuOq0KZlf",
				images: "_19dEFhHhbDgVJWuOq0KZlf",
				IFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				iFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				fields: "g5DNTyz0K4p8Qe1KemhqM",
				NotReady: "W6BMDJ-zjJbsEwxbpvU5r",
				notReady: "W6BMDJ-zjJbsEwxbpvU5r",
				NotReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				notReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				NotReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				notReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				Links: "_1etyEGrcHpnkE1UMtQIjpV",
				links: "_1etyEGrcHpnkE1UMtQIjpV",
				Carousel: "_3OBSZQIgZx2ksSzBQmYOeO",
				carousel: "_3OBSZQIgZx2ksSzBQmYOeO"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.m.less": function(e, t, s) {
			e.exports = {
				ctaContainer: "_1t5i5bNwZeJ7FuUXZ9rM-p",
				ctaContent: "jEUbSHJJx8vISKpWirlfx",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_1vXXD2qKLnHetdKvisFzBD",
				container: "x0hiXHicn7r3BG9m1FJH4",
				blue: "_1LTur9Gkvle8-nyvm8p-_2",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6"
			}
		},
		"./src/reddit/components/Header/Sparse.m.less": function(e, t, s) {
			e.exports = {
				Logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				Wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				HomeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				homeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				SparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				sparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj"
			}
		},
		"./src/reddit/components/Header/Sparse.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/elementIds.ts"),
				o = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				i = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/components/Header/Sparse.m.less"),
				l = s.n(d),
				m = s("./src/lib/lessComponent.tsx");
			const u = m.a.wrapped(o.a, "Logo", l.a),
				p = m.a.wrapped(i.a, "Wordmark", l.a),
				h = m.a.div("SparseContainer", l.a),
				b = m.a.a("HomeExternalLink", l.a);

			function g() {
				return a.a.createElement(h, {
					id: r.c
				}, a.a.createElement(b, {
					href: "#",
					onClick: () => window.location.reload(!0)
				}, a.a.createElement(c.a, null, a.a.createElement(u, null), a.a.createElement(p, null))))
			}
		},
		"./src/reddit/components/Header/User/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_3Wg53T10KuuPmyWOMWsY2F",
				icon: "_234aKY_LemFWuSTYVoshHn",
				link: "_2qcLS5et_OlJluP0WWDdsJ",
				loggedOut: "U3FRqDA_Qhr4icbaNXSuf",
				loggedOutRow: "_1JBkpB_FOZMZ7IPr3FyNfH",
				blue: "_2V4tnJay0i-PDDIUT5HMD_",
				login: "_2v9O1a_TWErxU2ZPvQ5jwC",
				register: "_1QsvbCwaVtdQIYepgPK7Bu",
				active: "_2JBA0rAVvh8drt9hJ_hEzo",
				oldRedditLink: "_31lJpVPojF0SAR5usRZ36h",
				row: "_19oWd7e3z7-ztUGzdIoCR7",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, s) {
			e.exports = {
				centeredRow: "_30BbATRhFv3V83DHNDjJAO",
				container: "_2GyPfdsi-MbQFyHRECo9GO",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
				compactLayout: "Y4MkVr6trrdypfZVUkpIA",
				blue: "e6QCPHG7i4YmXDTbRtkhC",
				wordmark: "_1bWuGs_1sq4Pqy099x_yy-",
				searchContainer: "_1iqnOY2Y57wmetu8MAjiId",
				explore: "_17gDYx5g5X6q--Lcmc9IvO",
				cleanup: "_2lfatUsYCvTN2T6AyKYTPM",
				search: "_2dlTXDaX9JuL0bekTwhV18",
				snoo: "_1O4jTk-dZ-VIxsCuYB6OR8",
				left: "_3dnbqz69WJTFCss8wl7Wlk",
				quickLinks: "_23q1waDr4n_2fR5A7zcZzb",
				right: "_2u8LqkbMtzd0lpblMFbJq5",
				HeaderDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				headerDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				bladeIsOpen: "_1z0T-r2uyIYQr2tLUWs4M2"
			}
		},
		"./src/reddit/components/HeaderIconContainer/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "PH-V9ggsF2mi5JTDmDqdR",
				button: "PH-V9ggsF2mi5JTDmDqdR",
				Container: "FOioVk_DUTmZIKKa82Mm1",
				container: "FOioVk_DUTmZIKKa82Mm1",
				isOpen: "_2DgzqfpTotjWrh91uFswuC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/Compact/Tooltip.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/components/HelpfulTooltip/index.m.less"),
				u = s.n(m);
			class p extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(l.a, {
						className: Object(a.a)(u.a.dropdown, e.className),
						"data-redditstyle": !0,
						isFixed: e.isFixed,
						style: e.style
					}, !e.hideCloseButton && o.a.createElement("button", {
						className: u.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(d.b, {
						className: u.a.closeIcon
					})), o.a.createElement("div", {
						className: u.a.text
					}, e.text))
				}
			}
			var h = p,
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/components/HeaderSubredditSelector/Compact/index.m.less"),
				f = s.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = ["left", "bottom"],
				C = ["left", "top"],
				v = () => {},
				E = Object(c.a)(Object(b.b)(e => o.a.createElement(h, x({}, e, {
					className: Object(a.a)(e.className, f.a.helpfulTooltip),
					text: n.fbt._("Check out more posts to unlock your home.", null, {
						hk: "2OUelE"
					})
				}))), [i.a.Click, i.a.Keydown, i.a.Resize]);
			t.a = e => o.a.createElement(E, x({}, e, {
				hideCloseButton: !0,
				isFixed: !1,
				onCloseClick: v,
				targetPosition: P,
				tooltipPosition: C
			}))
		},
		"./src/reddit/components/HeaderSubredditSelector/Compact/index.m.less": function(e, t, s) {
			e.exports = {
				container: "wbuVa6YG7M8XkqaQ7Jh2I",
				link: "_2dqQ0-lgXxJq7S-QgupMNE",
				mActive: "h2t6HsuO8p5AANK2EXPCI",
				icon: "_2vaxHFhEXUi8w9mcExfLrx",
				mHighlighted: "_3XEXjC_xXkOB4UNICkrBd7",
				mDisabled: "_3fcnmbaPnv6Nn1Gjo4C6q4",
				text: "kYSum1Wd7yU21JxlhEpQf",
				badge: "_2rWvOyeOipRn46kEPRRe-K",
				overlay: "_24l8oamR3PHwMxXhdqxV3P",
				helpfulTooltip: "pfIkqX2VjSpAPOyzf8g-N"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less": function(e, t, s) {
			e.exports = {
				item: "_26MVepkxZHzpNv1cuAA4JA",
				mFocused: "_7Xbismt11Yj8tq6BaRWFr",
				buttonContainer: "oiDWziAp_Bua6rb7oQKXs",
				icon: "cq0sTeCPC4GI78UNPdClD",
				text: "_1nBP1OfpQDgTmzRFqaVult"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_1Ok0AiXwAeYl2SsUBaxgPC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, s) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				icon: "_3HTtcITrR-crvsRovLrijl",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				trending: "_2H51id1RX9dGNrtrAIOMGK",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				multi: "_3Hhjob0kyyqVjBXut8STgU",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				trendingContent: "BNJ5Y52EyQmTHFZJwjoXJ",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less": function(e, t, s) {
			e.exports = {
				filter: "_37tmRmxaFMjRRrvwcY2JmY",
				item: "_2MgAHlPDdKvXiG-Qbz5cbC",
				listHeader: "_2XRPX11qL4-HxWPuHAzOW5",
				headerButton: "_1ee4j8lY-1iIi8GkJdJ5RD"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, s) {
			e.exports = {
				caretDown: "_3CG2U_hX3HI-ibl5v2RCq1",
				container: "_3jiriKeNer8y0-1r6oWIFM",
				mOpen: "_24x5wRDxU1y38uXQXvLE4m",
				mNotPinned: "_3rS8YTDjcT7fs0k9W4rxDG",
				mPinned: "_3NgME2HFZvM-tgAE3s5hXS",
				mBlue: "_3b5MSH50QHbieebRqimGxS",
				pin: "_2FVCfsIPxXtl6S-c69sXO4",
				selector: "h-jI8r2f9ozTNqu_2TBeY",
				defaultIcon: "eZQ5o2PrhR59wkAtPbxMU",
				itemIcon: "_139PgjqaVJ8tq4kF4QznMX",
				containerText: "_1GieMuLljOrqnVpRAwz7VP",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				customFeedIcon: "_1r2uMQFZw5Hg53NkK6rsKv",
				itemModQueue: "_1VemFsujoJ-6RR82VRSPeM",
				listContainer: "TMMvbwyeh9yuHKmQWHrE3",
				itemCoin: "_334CPGEglbIA_2CwQAn43P",
				coinIcon: "JisrPypso_3RK4iDgDdke",
				itemPremium: "yeM4RoZW6FtJxVPe3Z84C",
				premiumIcon: "_2ulegyMhoTE_WCFyBC-IBx",
				itemPublicAccessNetwork: "_16Lm-ZR49L-1nxQV124cD-",
				publicAccessNetworkIcon: "_3jFEC4X3IL9Zr-pzUzyCp7",
				modQueueIcon: "_2L4XuYlbElLC5REx1XpdG_",
				multiPlusButton: "_3mvXSuBIpYAdAsBJSB-1G5",
				multiPlusIcon: "_2T11xMsmkdwP6G_mY6eUBW",
				disabled: "_371yhrlWAj7dxOsk1PWqG4",
				subredditIcon: "_3fvJBCH6c6P0NvMwoqK9MJ",
				unknownIcon: "_1hCoGzhwFdfF2vGbt8IjSy"
			}
		},
		"./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "nSJCQrnLY07CzwT8tTsNO",
				title: "csebgIdGwT3fBJ8kUT2aQ",
				subtitle: "rsZg2IAMPbcDGNPnNIBy_",
				description: "_3m-DocsNGlVUjAtAm7ZZLi",
				dismissBtn: "_3tJL-r-lrTcB_GkrrlZxEN"
			}
		},
		"./src/reddit/components/HeaderUserActions/index.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "_2zZ-KGHbWWqrwGlHWXR90y",
				chatIcon: "ra_3TRn5G7dbrfbhx8kYi",
				isActive: "_3aintJ344BVk82tG06NQea",
				postIcon: "_1aj2BqXAeeo2bHwArcJ5AT",
				moderateIcon: "_14ugEJZOmgrUDXYeFSSv9w",
				isLit: "_3ge8uSGq8pAK2qqs45Vzde",
				link: "_1x6pySZ2CoUnAfsFhGe7J1",
				headerLinks: "_20HfCAFz3ot1MW1o29ZoGZ",
				headerUserDropdown: "_1pA8z73SZ1olP5KMKFN4_Z",
				moderationDropdown: "_1luaIaEVRAlXWIwqbCOj2a",
				counter: "_1YxELUk4ufCJBs-VhKVmA6",
				isHighlighted: "oKcz3mxVRK0Q74EoLhY-",
				envelopeIcon: "_1V77mEI1g_5ZlCh_c2-Yab",
				isUnread: "_2Wgcbg0LNUiJf4L2fVQJ7O"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				accountCoins: "_2pXW42IYsGP59qZnjAnkAx",
				accountDisplayText: "DFKWwVItcycZV1bKUOyay",
				accountKarma: "Rz5N3cHNgTGZsIQJqBfgk",
				accountDetails: "_1pHyKCBktIf_9WFW9jjM3P",
				accountWrapper: "_3KfbpxpA8Esu_3UHTmIvfw",
				isLoggedOut: "_22SL37yETIW414yUiZj27w",
				isLoggedIn: "_2OFo5eaD2V6ZcJsYBuYned",
				button: "_1zZ3VDhRC38fXLLvVCHOwK",
				buttonText: "_3m4MQxMy4WfgIkMhHh-UAg",
				coinFontIcon: "LyE1zRbUJlGravH4LHRfD",
				dropdownTriangle: "_50RxI-5rW1xzwoC42vhzM",
				imgIcon: "-z42jjKOFdAdFhdJ8mmI4",
				myProfileIcon: "VIlSggfRUkuuHTKa_h8jp",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				container: "_3CDDvp7qc_4HVXpd_mIXZg",
				blue: "_1liUbnjDeLgMIp81inXfeS",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				toggleSwitch: "_179edq2yfZswDIo3NdeebM",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF"
			}
		},
		"./src/reddit/components/HelpfulTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "_3BDdVSPxdZJLjHX4ZYcIYm",
				"slide-bottom": "_1pIwWwWEoz9hK1fg2pLIK4",
				slideBottom: "_1pIwWwWEoz9hK1fg2pLIK4",
				"fade-in": "_14yJ3z91W9LFHPh6yI-ZXR",
				fadeIn: "_14yJ3z91W9LFHPh6yI-ZXR",
				closeButton: "CHjT7_PzdkN9DWAktqA7Z",
				closeIcon: "_2akJUHWkANhP-XtUfMZcNk",
				text: "BYxtYA3CXG1Zn0QakTGaw"
			}
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "K4Eem3pMbRbAYioOfqN5E",
				isCollection: "_1_ihtgX_FgdbtB-rbz84r6",
				postDetails: "-DOLBAFWXMQX1Q3ErGO8I",
				mediaIcon: "_33YMDoIltkTaZemWTS7Yki",
				postTitle: "P9Qd6oTCWgLr3ackKg0I5",
				postTitleLink: "_1iZHnGYX-Wc90AM6BQQemg",
				membershipPaywallTitle: "SHwEfOV-Wq0AnI-uha8Ci",
				horizontalVotes: "_15Igkrvvp7jIfVHt0eKzFd",
				actions: "_25ONQRwoX20oeRXFl_FZXt",
				close: "c_rRg_d32D6ZO5sV8DmMM",
				closeText: "C9XkFfcvNxFrFRVdKxc8x"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/shortcuts.ts"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				u = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/colors.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/postCollection.ts"),
				x = s("./src/reddit/i18n/components.tsx"),
				P = s("./src/reddit/i18n/utils.ts"),
				C = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				v = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				E = s("./src/reddit/icons/fonts/Link/index.tsx"),
				O = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				y = s("./src/reddit/icons/fonts/Text/index.tsx"),
				j = s("./src/reddit/icons/svgs/Close/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/selectors/experiments/categories.ts"),
				I = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				N = s("./src/reddit/selectors/monthsToMinutes.ts"),
				k = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/components/LightboxHeader/index.m.less"),
				T = s.n(_);
			const L = Object(o.c)({
					isInCategoriesExperiment: M.a,
					post: k.n,
					shouldRedirectToHome: e => Object(N.z)(e) && Object(I.d)(Object(I.f)(e))
				}),
				R = Object(r.b)(L, (e, t) => {
					let {
						sendEvent: s
					} = t;
					return {
						close: t => {
							e(Object(l.d)(s, !0, t))
						},
						toggleVote: (t, s) => e(s === S.a.upvoted ? Object(d.N)(t) : Object(d.o)(t))
					}
				}, (e, t, s) => Object.assign({}, e, t, s, {
					onVoteClick: n => {
						const a = e.post || s.post;
						a && t.toggleVote(a.id, n)
					}
				}));
			class A extends a.a.Component {
				constructor(e) {
					super(e), this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close(this.state.shouldRedirectToHome)
					}, this.state = {
						shouldRedirectToHome: e.shouldRedirectToHome
					}
				}
				render() {
					const {
						className: e,
						onCloseClick: t,
						onVoteClick: s,
						page: r,
						post: o
					} = this.props, d = F[o && o.media ? o.media.type : w.n.EMBED], l = !o && r && r.meta && r.meta.name === c.xb.META_MEMBERSHIP_PAYWALL_PAGE;
					return a.a.createElement("div", {
						className: Object(i.a)(T.a.container, e, {
							[T.a.isCollection]: o && Object(f.a)(o)
						})
					}, a.a.createElement("div", {
						className: T.a.postDetails
					}, o && a.a.createElement(n.Fragment, null, a.a.createElement(m.a, {
						className: T.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: o,
						onVoteClick: s,
						redditStyle: !0
					}), a.a.createElement(d, {
						className: T.a.mediaIcon
					}), a.a.createElement(p.c, {
						className: T.a.postTitle,
						post: o,
						size: p.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: b.a.lightboxHeaderText,
						titleLinkClassName: T.a.postTitleLink,
						showCategoryTag: !0
					}), a.a.createElement(u.a, {
						post: o,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), l && r && r.urlParams.subredditName && a.a.createElement("div", {
						className: T.a.membershipPaywallTitle
					}, Object(P.c)("r/".concat(Object(P.b)("communityName", r.urlParams.subredditName), " Special Membership")))), a.a.createElement("div", {
						className: T.a.actions
					}, a.a.createElement(g.n, {
						className: T.a.close,
						onClick: t || this.closeLightbox,
						title: Object(P.c)("Close"),
						"aria-label": Object(P.c)("Close")
					}, a.a.createElement(j.a, null), a.a.createElement("span", {
						className: T.a.closeText
					}, a.a.createElement(x.c, null, "Close")))))
				}
			}
			const F = {
				[w.n.GIFVIDEO]: v.a,
				[w.n.IMAGE]: O.a,
				[w.n.TEXT]: y.a,
				[w.n.RTJSON]: y.a,
				[w.n.VIDEO]: C.a,
				[w.n.EMBED]: E.a
			};
			t.a = Object(h.b)(R(A))
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				o = () => null;
			t.b = Object(n.a)({
				ErrorComponent: o,
				getComponent: () => Object(a.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~ModerationPages~SubredditWiki"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/PinnedSubscriptions/index.m.less": function(e, t, s) {
			e.exports = {
				title: "FRrbwuHy8Zmlubp3nowLZ",
				listHeader: "_3hELZctjzdizaWjW1al9DZ",
				unpin: "_2oY_N7NWiAv9m_mFIRdwVX",
				icon: "_3B-ny-D97ZKwdUyXAaWF19",
				Component: "_20fGT0XJD3MvX9yBsVeKMn",
				component: "_20fGT0XJD3MvX9yBsVeKMn"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				r = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("PremiumPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(r.c)()])).then(e => e[0].default),
				i = Object(n.a)({
					getComponent: o,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = i
		},
		"./src/reddit/components/ProfileIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_165RkdCO9QoaErMgkkAsEc"
			}
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL"
			}
		},
		"./src/reddit/components/Root/redesignFont.less": function(e, t, s) {},
		"./src/reddit/components/SearchDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				listItemIcon: "fcDVF0HYfR8ZcZgQVT0oo",
				mTrending: "cuK0QQebBI_tpWwN_YN9M",
				listItemTitle: "_3HPgggOIyY0x9kiADxwwaj",
				mWithBorder: "_2Uets9AVOC4pygPHGHCAAM",
				listItem: "_20OHBqoDD71_8fv7tuG6u6",
				mHoverable: "_1IJwm0Qscr8yPuyii8YsSS",
				mFocused: "_1NDuQGNA_7Cuo411jRXLVg",
				mTypeahead: "_3NseKdP3_1HONmKk_kK3_l",
				listItemText: "_17mZueOafzj0Dlja0Wc9os",
				listItemSubtext: "_1CCbYggNpm1_k3lDTmKgSW",
				mNoPostTitle: "_3etfe7dx7ViSNcYo4Q--LD",
				loadingItem: "_3wwag2ZgVLfNKLCuEuXF7h",
				dropdown: "_1HnfZtTmYelxTj6QL6aaXS",
				fixedTextTooltip: "_1U-nknzRP43RdLab5D4_lK",
				subredditIconStyles: "_26nS8Ogzm0pqOjlwfGRgJR",
				subredditIcon: "_3uBNO7SvsRGN4W794WAO_p",
				planetIcon: "_2Tfe4NhLJlRQkuO1yhzqR2",
				postTitle: "YeMwUP22Up8CVxmgTayyQ"
			}
		},
		"./src/reddit/components/ShortcutIndexModal/index.m.less": function(e, t, s) {
			e.exports = {
				ColumnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				columnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				ColumnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				columnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				Column: "_3O97w7RY6RBkLbc3u-Mg4u",
				column: "_3O97w7RY6RBkLbc3u-Mg4u",
				Description: "_2rgXACgxMtUDCuKcGDK6tL",
				description: "_2rgXACgxMtUDCuKcGDK6tL",
				Key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				ModalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				modalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				ModalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				modalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				PrimaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				primaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				TextButton: "_1RrzHtukV58ONGeHXBNR7t",
				textButton: "_1RrzHtukV58ONGeHXBNR7t",
				ConnectedModal: "_1qRgDlLw5wytfgHvP96-gS",
				connectedModal: "_1qRgDlLw5wytfgHvP96-gS"
			}
		},
		"./src/reddit/components/ShortcutWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				shortcutDiv: "_1gsAk1ihQliBnDybgyjghy"
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				m = s("./src/reddit/models/StructuredStyles/index.ts"),
				u = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/selectors/structuredStyles.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/lib/CSSVariableProvider/index.tsx"),
				f = s("./src/lib/isAdHocMultireddit/index.ts");
			const x = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.n)(e, t);
			class P extends r.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: s
					} = this.props;
					return r.a.createElement(g.e, {
						theme: s,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const C = Object(o.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.j)(e), e => {
				if (Object(p.j)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.j)(e)) return Object(p.g)(e, t)
			}, x, Object(c.a)((e, t) => {
				if (Object(p.j)(e) || Object(b.fb)(e)) return;
				const s = x(e, t);
				if (!s) return;
				const n = Object(h.G)(e, s);
				if (!n) return;
				if (Object(b.eb)(e, {
						subredditId: n
					})) return;
				const a = e.structuredStyles.models[n];
				return a || void 0
			}), (e, t) => {
				const s = x(e, t);
				if (!s) return;
				const n = Object(h.y)(e, {
					subredditName: s
				});
				return n ? n.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(b.lb)(e).nightmode
			}, (e, t) => {
				if (!Object(b.lb)(e).hideNSFW) return !0;
				const s = x(e, t);
				if (s) {
					const t = Object(h.B)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const n = Object(l.d)(e, t);
				return !!n && n.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, s, a, r, o, i, c, d, l, p) => {
				const h = Object.assign({}, i ? {
						emojiWidth: i[0],
						emojiHeight: i[1]
					} : {}, {
						shouldShowNSFWContent: d,
						isCommentsPage: p,
						isOverlay: l
					}),
					b = r && r.length && !Object(f.a)(r) ? "SubredditVars-r-".concat(r) : g.c;
				if (t && s && a) {
					const e = Object(m.h)(s, a);
					return {
						isRootOrUniqueClassName: b,
						theme: Object(u.j)(e, h)
					}
				}
				if (o) {
					const e = Object(m.h)(o);
					let t;
					return {
						isRootOrUniqueClassName: b,
						theme: t = c ? Object(u.i)(e, h) : Object(u.j)(e, h)
					}
				}
				return {
					isRootOrUniqueClassName: b,
					theme: Object(n.merge)(e, {
						subredditContext: h
					})
				}
			}))(P);
			t.b = C;
			const v = Object(d.t)()(C)
		},
		"./src/reddit/components/Toaster/EuCookiePolicyToast.m.less": function(e, t, s) {
			e.exports = {
				Icon: "_2pPCvXlD2wzNO9taY3pzqw",
				icon: "_2pPCvXlD2wzNO9taY3pzqw",
				PrimaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				primaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				Bread: "_3RhWPJfjpsEoBw52x0fQp2",
				bread: "_3RhWPJfjpsEoBw52x0fQp2"
			}
		},
		"./src/reddit/components/Toaster/MilestoneToast.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3Cb-J_TUgYhl23GF1E8ueS",
				container: "_3Cb-J_TUgYhl23GF1E8ueS",
				SideImage: "_3noiB6ClBZxqX-VfENVYha",
				sideImage: "_3noiB6ClBZxqX-VfENVYha",
				Main: "_2uE5iMLmEfZ_HNjn85c1NP",
				main: "_2uE5iMLmEfZ_HNjn85c1NP",
				SubTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				subTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				PrimaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				primaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				CloseIcon: "_1kI4teIozhxDil2omCIIs5",
				closeIcon: "_1kI4teIozhxDil2omCIIs5"
			}
		},
		"./src/reddit/components/Toaster/PlainBread.m.less": function(e, t, s) {
			e.exports = {
				PlainBread: "trdUvQxqQHHqQKOUBcgnr",
				plainBread: "trdUvQxqQHHqQKOUBcgnr"
			}
		},
		"./src/reddit/components/Toaster/StyledComponents.m.less": function(e, t, s) {
			e.exports = {
				Text: "_7JH6kQpO-bx66b9ajIZrz",
				text: "_7JH6kQpO-bx66b9ajIZrz"
			}
		},
		"./src/reddit/components/Toaster/UappBannerToast.m.less": function(e, t, s) {
			e.exports = {
				Icon: "NODQrxMsajJv0SMw0Glss",
				icon: "NODQrxMsajJv0SMw0Glss",
				PrimaryButton: "_-660JDG_NhSvu-lby-LYB",
				primaryButton: "_-660JDG_NhSvu-lby-LYB",
				Bread: "_3jUV8naze01hV-7EqsBdjm",
				bread: "_3jUV8naze01hV-7EqsBdjm"
			}
		},
		"./src/reddit/components/Toaster/index.m.less": function(e, t, s) {
			e.exports = {
				AuthErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				authErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				AuthErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				authErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				SnooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				snooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				SnooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				snooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				SubredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				subredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				Container: "_3q-XSJ2vokDQrvdG6mR__k",
				container: "_3q-XSJ2vokDQrvdG6mR__k",
				Bread: "EjdBJNEwygtHMKiHd3Bnv",
				bread: "EjdBJNEwygtHMKiHd3Bnv",
				mModal: "_29WPjLJ0vRIyLIUC_lQ4a8",
				ButtonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				buttonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				ContentWrapper: "_21oJwLzDt5kLN6scufKBab",
				contentWrapper: "_21oJwLzDt5kLN6scufKBab"
			}
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/AdViewability/index.tsx"),
				o = s("./src/reddit/components/BlankPost/index.tsx"),
				i = s("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(i.a)(null);
			class d extends a.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: s
					} = this.props;
					if (t) return t.isBlank ? a.a.createElement(o.BlankPost, {
						post: t,
						onPostViewable: s
					}) : a.a.createElement(r.a, {
						onViewable: e => s(t, e),
						children: e,
						trackVideoMetrics: !1
					})
				}
			}
			t.a = c(d)
		},
		"./src/reddit/components/UserFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "_2jjk9b3mpveU6Vpam4kPBm",
				clearButton: "_2HCY4xCLt3RKVIgnkh0ZgW",
				Section: "_3dGLI85CRTmDAbSQrDiQZl",
				section: "_3dGLI85CRTmDAbSQrDiQZl",
				CheckboxText: "_2pIwiaNLf5jaTR1EK7Nx09",
				checkboxText: "_2pIwiaNLf5jaTR1EK7Nx09"
			}
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, s) {
			"use strict";
			var n, a, r;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return a
				})), s.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/"
				}(n || (n = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.Login = "login", e.Register = "register", e.Resize = "resize", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(a || (a = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(r || (r = {}))
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/brcast/dist/brcast.es.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = r.a.createContext(Object(n.a)([]))
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const o = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(n.createContext)(o);

			function c(e) {
				return t => a.a.createElement(i.Consumer, null, s => {
					let {
						apiContext: n,
						gqlContext: o
					} = s;
					return a.a.createElement(e, r({
						apiContext: n,
						gqlContext: o
					}, t))
				})
			}
		},
		"./src/reddit/contexts/ThrottlingContext/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/featureThrottling.ts"),
				o = s("./src/reddit/helpers/featureThrottling/store/index.ts");
			const i = {
					isThrottled: !1,
					resetFeature: () => {
						throw new Error("Component attempted to reset feature with no ThrottlingContext")
					},
					throttleFeature: () => {
						throw new Error("Component attempted to throttle feature with no ThrottlingContext")
					}
				},
				c = Object.keys(r.a).reduce((e, t) => (e[t] = Object(n.createContext)(i), e), {});
			class d extends a.a.Component {
				constructor(e) {
					super(e), this.onThrottlingDataChange = (e, t) => {
						if (t) {
							const e = o.a.isFeatureThrottled(t);
							this.setState(s => e === s[t].isThrottled ? null : Object.assign({}, s, {
								[t]: Object.assign({}, s[t], {
									isThrottled: e
								})
							}))
						} else this.setState(e => {
							const t = Object.keys(r.a).reduce((t, s) => (o.a.isFeatureThrottled(s) && (t[s] = Object.assign({}, e[s], {
								isThrottled: !0
							})), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const s = c[t];
						return a.a.createElement(s.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(r.a).reduce((e, t) => (e[t] = {
						isThrottled: !1,
						resetFeature: o.a.resetFeature.bind(o.a, t),
						throttleFeature: o.a.throttleFeature.bind(o.a, t)
					}, e), {})
				}
				componentDidMount() {
					o.a.subscribe(this.onThrottlingDataChange)
				}
				componentWilUnmount() {
					o.a.unsubscribe(this.onThrottlingDataChange)
				}
				render() {
					return Object.keys(c).reduce(this.renderContextProvider, this.props.children)
				}
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, s) {
			e.exports = {
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = s("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				d = s.n(c);
			t.a = e => a.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(d.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, a.a.createElement("span", {
				tabIndex: -1,
				className: d.a.labelContent
			}, e.isSelected ? a.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : a.a.createElement(o.a, {
				className: d.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.m.less": function(e, t, s) {
			e.exports = {
				invisibleText: "_1RIl585IYPW6cmNXwgRz0J"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				r = s.n(a);
			t.a = n.a.span("invisibleText", r.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, s) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Link/index.m.less"),
				r = s.n(a);
			t.a = n.a.a("link", r.a)
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = s.n(u),
				h = s("./src/reddit/controls/Search/index.m.less"),
				b = s.n(h);
			const g = Object(r.b)(() => Object(o.c)({
				subredditsByName: Object(c.a)((e, t) => {
					const s = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						s[t.subredditName] = Object(m.B)(e, {
							subredditName: t.subredditName
						})
					}), s
				})
			}));
			t.a = g(e => a.a.createElement("div", {
				className: Object(i.a)(p.a.subText, b.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => a.a.createElement(d.a, {
				key: "".concat(t.subredditName, "-hoverCard"),
				subredditName: t.subredditName
			}, a.a.createElement(l.b, {
				className: Object(i.a)(b.a.subredditIcon, b.a.isHeaderIcon, e.iconClassName),
				linkTo: "/r/".concat(t.subredditName, "/"),
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : a.a.createElement(l.b, {
				className: Object(i.a)(b.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && a.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_2xQx4j6lBnDGQ8QsRnJEJa",
				iconContainer: "_2QGKgHKTtOwKHI4B_LI0YM",
				icon: "_1hdDhVEGWEdVJcgy2XQ2Eq",
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ"
			}
		},
		"./src/reddit/controls/Search/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/history/esm/history.js"),
				a = s("./node_modules/lodash/debounce.js"),
				r = s.n(a),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./node_modules/uuid/v4.js"),
				u = s.n(m),
				p = s("./src/app/strings/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/makeSearchKey/index.ts"),
				g = s("./src/reddit/actions/category.ts"),
				f = s("./src/reddit/actions/search.ts"),
				x = s("./src/reddit/actions/search/trending.ts"),
				P = s("./src/reddit/actions/tooltip.ts"),
				C = s("./src/higherOrderComponents/asTooltip.tsx"),
				v = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				O = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = s("./src/reddit/helpers/getSearchUrl/index.ts"),
				j = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				w = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				S = s("./src/reddit/icons/svgs/Search/index.tsx"),
				M = s("./src/reddit/models/Search/index.ts"),
				I = s("./src/reddit/selectors/telemetry.ts"),
				N = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				k = s.n(N),
				_ = s("./src/reddit/components/SearchDropdown/index.m.less"),
				T = s.n(_);
			const L = Object(C.a)(O.b);
			class R extends i.a.Component {
				constructor() {
					super(...arguments), this.onRecentSearchItemClick = () => {
						this.props.recentSearch.isTypeaheadSuggestion ? this.props.onClearSearchQuery() : this.props.onUpdateSearchQuery(this.props.recentSearch.searchQuery), this.props.onSendDropdownClickEvent(this.props.recentSearch.searchQuery, this.props.recentSearch.searchQuery, I.StructureType.Recent, I.SearchDropdownNouns.Recent)
					}, this.generateFullSearchQuery = e => e.subredditOrProfileRestrictedName ? "".concat(e.subredditOrProfileRestrictedName, " ").concat(e.searchQuery) : e.searchQuery
				}
				render() {
					const {
						props: e
					} = this, {
						activeTooltipId: t,
						className: s,
						focusedItem: n,
						onRemoveRecentSearch: a,
						recentSearch: r,
						toggleTooltip: o
					} = e, c = Object(y.a)(null, null, null, r), d = c && c.url, l = c && c.qs, m = l ? "".concat(d, "?").concat(l) : d, u = this.generateFullSearchQuery(r);
					let p;
					return n && (p = this.generateFullSearchQuery(n)), i.a.createElement(E.a, {
						"aria-label": r.searchQuery,
						className: Object(h.a)(T.a.listItem, k.a.item, s, {
							[T.a.mFocused]: !(!n || n.section !== M.c.recent || p !== u)
						}),
						onClick: this.onRecentSearchItemClick,
						key: u,
						role: "link",
						tabIndex: -1,
						to: m || ""
					}, r.displayInfo && r.isTypeaheadSuggestion ? r.displayInfo.iconUrl ? i.a.createElement("div", {
						className: T.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(r.displayInfo.iconUrl, "')")
						}
					}) : i.a.createElement(j.a, {
						className: T.a.planetIcon
					}) : i.a.createElement(S.a, {
						className: Object(h.a)(T.a.listItemIcon, k.a.icon)
					}), i.a.createElement("span", {
						className: k.a.text
					}, u), i.a.createElement("div", {
						onMouseEnter: () => o(u),
						onMouseLeave: () => o(null),
						id: u
					}, i.a.createElement(w.a, {
						className: Object(h.a)(T.a.listItemIcon, T.a.mHoverable, k.a.icon),
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), a(r)
						}
					}), i.a.createElement(L, {
						className: T.a.fixedTextTooltip,
						isOpen: t === u,
						text: v.fbt._("Remove", null, {
							hk: "2P57BY"
						}),
						tooltipId: u,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					})))
				}
			}
			s("./node_modules/core-js/modules/es6.symbol.js");
			var A = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				F = s("./src/reddit/components/PostTitle/index.tsx"),
				D = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				B = s("./src/reddit/constants/adEvents.ts"),
				U = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				H = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				V = s("./src/reddit/helpers/pixels.ts"),
				W = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				Q = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			class G extends i.a.Component {
				constructor() {
					super(...arguments), this.transformTrendingToRecentSearch = () => {
						const e = this.props.trendingItem,
							{
								post: t,
								subredditInfo: s,
								subredditOccurrences: n
							} = e;
						return Q(e, ["post", "subredditInfo", "subredditOccurrences"])
					}, this.onTrendingItemClick = () => {
						this.props.onUpdateSearchQuery(this.props.trendingItem.searchQuery);
						const e = this.transformTrendingToRecentSearch();
						if (this.props.onSetRecentSearch(e), this.props.onSendDropdownClickEvent(this.props.trendingItem.searchQuery, this.props.trendingItem.rawQuery || "", I.StructureType.Trending, I.SearchDropdownNouns.Trending), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							Object(V.a)(e.events, B.a.Click)
						}
					}, this.isSponsored = () => {
						const {
							trendingItem: e
						} = this.props;
						return !(!e.post || !e.post.isSponsored)
					}
				}
				render() {
					const {
						className: e,
						focusedItem: t,
						trendingItem: s
					} = this.props, n = this.isSponsored(), a = Object(y.a)(null, null, null, s, {
						source: n ? b.a.PromotedTrend : b.a.Trending
					}), r = a && a.url, o = a && a.qs, c = o ? "".concat(r, "?").concat(o) : r, d = i.a.createElement(E.a, {
						"aria-label": s.searchQuery,
						className: Object(h.a)(T.a.listItem, T.a.mTrending, k.a.item, k.a.trending, e, {
							[T.a.mFocused]: !(!t || t.section !== M.c.trending || s.searchQuery !== t.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: "trending-".concat(s.searchQuery),
						role: "link",
						tabIndex: -1,
						to: c || ""
					}, i.a.createElement("div", {
						className: k.a.trendingContent
					}, n && i.a.createElement("div", {
						className: k.a.promoted
					}, v.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), i.a.createElement("div", null, i.a.createElement(W.a, {
						className: Object(h.a)(T.a.listItemIcon, T.a.mTrending, k.a.icon, k.a.trending)
					}), i.a.createElement("span", null, i.a.createElement(F.a, {
						className: Object(h.a)(T.a.listItemText, T.a.mTrending, k.a.text, k.a.trending),
						redditStyle: !0,
						size: F.b.Small
					}, s.searchQuery)), s.post && i.a.createElement("div", {
						className: T.a.postTitle
					}, s.post.title)), s.subredditInfo && i.a.createElement(U.a, {
						className: Object(h.a)(k.a.relatedSubredditMetaData, T.a.listItemSubtext, {
							[T.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: v.fbt._("{subreddit name} and more", [v.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(H.a)(s.post) && i.a.createElement(A.a, {
						post: s.post,
						removeLink: !0,
						usePreview: n
					}));
					return n ? i.a.createElement(D.a, {
						post: s.post,
						children: d
					}) : d
				}
			}
			var q = s("./src/reddit/components/Flair/index.tsx"),
				z = s("./src/reddit/models/Flair/index.ts");
			class Z extends i.a.Component {
				constructor() {
					super(...arguments), this.onTypeaheadSuggestionClick = () => {
						this.props.onSetRecentSearch(this.props.item), this.props.onSendDropdownClickEvent(this.props.item.searchQuery, this.props.item.searchQuery, I.StructureType.Search, this.props.item.isProfile ? I.SearchDropdownNouns.TypeaheadProfile : I.SearchDropdownNouns.TypeaheadSubreddit), this.props.onClearSearchQuery()
					}
				}
				render() {
					const {
						props: e
					} = this, {
						className: t,
						focusedItem: s,
						item: n
					} = e;
					return i.a.createElement(E.a, {
						"aria-label": n.searchQuery,
						className: Object(h.a)(T.a.listItem, T.a.mTypeahead, k.a.item, t, {
							[T.a.mFocused]: !(!s || s.searchQuery !== n.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: n.searchQuery,
						role: "link",
						tabIndex: -1,
						to: "/".concat(n.searchQuery)
					}, n.displayInfo && n.displayInfo.iconUrl ? i.a.createElement("div", {
						className: T.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(n.displayInfo.iconUrl, "')")
						}
					}) : i.a.createElement(j.a, {
						className: T.a.planetIcon
					}), i.a.createElement("div", null, n.displayInfo && n.displayInfo.subredditOrProfileName && i.a.createElement("div", {
						className: Object(h.a)(T.a.listItemText, T.a.mTypeahead, k.a.text)
					}, n.displayInfo.subredditOrProfileName), i.a.createElement("div", null, n.displayInfo && null != n.displayInfo.subscribers && i.a.createElement("div", {
						className: Object(h.a)(T.a.listItemSubtext, k.a.subText)
					}, v.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [v.fbt._plural(n.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), n.displayInfo && n.displayInfo.isNSFW && i.a.createElement(q.b, {
						flair: {
							type: z.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var K = s("./src/reddit/constants/zIndex.ts"),
				J = s("./src/reddit/controls/Dropdown/index.tsx"),
				Y = s("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				X = s.n(Y),
				$ = s("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = "SearchDropdown", ne = 5, ae = Object(C.a)(J.a);
			class re extends i.a.Component {
				constructor(e) {
					super(e), this.toggleTooltip = e => {
						this.setState({
							activeTooltipId: e
						})
					}, this.state = {
						activeTooltipId: null
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						isFixed: s = !0,
						isOverlay: n = !0
					} = e, a = {
						width: e.container ? "".concat(e.container.offsetWidth, "px") : "inherit",
						marginTop: "7px",
						overflow: "scroll"
					};
					e.isFixed && (a.zIndex = K.g);
					const r = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending;
					return i.a.createElement(ae, {
						className: Object(h.a)(T.a.dropdown, X.a.listContainer),
						isFixed: s,
						isOpen: e.isOpen,
						isOverlay: n,
						tooltipId: se,
						noFocus: !0,
						style: a
					}, e.typeaheadSuggestions.map(t => i.a.createElement(Z, {
						focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
						item: t,
						key: t.id,
						onClearSearchQuery: e.onClearSearchQuery,
						onSendDropdownClickEvent: e.onSendDropdownClickEvent,
						onSetRecentSearch: e.onSetRecentSearch
					})), r && e.recentSearches.map(s => i.a.createElement(R, {
						activeTooltipId: t.activeTooltipId,
						focusedItem: e.itemList[e.focusedItemIndex],
						key: s.id,
						onClearSearchQuery: e.onClearSearchQuery,
						onRemoveRecentSearch: e.onRemoveRecentSearch,
						onSendDropdownClickEvent: e.onSendDropdownClickEvent,
						onSetRecentSearch: e.onSetRecentSearch,
						onUpdateSearchQuery: e.onUpdateSearchQuery,
						recentSearch: s,
						toggleTooltip: this.toggleTooltip
					})), r && e.isInTrendingExperiment && !e.isTrendingPending && e.trendingItems && i.a.createElement("div", {
						className: Object(h.a)(k.a.title, T.a.listItemTitle, {
							[T.a.mWithBorder]: !!e.recentSearches.length
						})
					}, te._("Trending today", null, {
						hk: "3nAMpY"
					})), (e.isTypeaheadPending || e.isTrendingPending) && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(h.a)(T.a.loadingItem, ee.a.item)
					}), i.a.createElement("div", {
						className: Object(h.a)(T.a.loadingItem, ee.a.item)
					}), i.a.createElement("div", {
						className: Object(h.a)(T.a.loadingItem, ee.a.item)
					}), i.a.createElement("div", {
						className: Object(h.a)(T.a.loadingItem, ee.a.item)
					}), i.a.createElement("div", {
						className: Object(h.a)(T.a.loadingItem, ee.a.item)
					})), r && e.isInTrendingExperiment && e.trendingItems.slice(0, ne).map(t => i.a.createElement(G, {
						key: t.id,
						focusedItem: e.itemList[e.focusedItemIndex],
						onSendDropdownClickEvent: e.onSendDropdownClickEvent,
						onSetRecentSearch: e.onSetRecentSearch,
						onUpdateSearchQuery: e.onUpdateSearchQuery,
						trendingItem: t
					})))
				}
			}
			var oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = s("./src/reddit/constants/keycodes.ts"),
				ce = s("./src/reddit/contexts/ApiContext.tsx"),
				de = s("./src/reddit/contexts/PageLayer/index.tsx"),
				le = s("./src/reddit/endpoints/category/categoryList.ts"),
				me = s("./src/lib/constants/index.ts"),
				ue = s("./src/lib/makeApiRequest/index.ts"),
				pe = s("./src/lib/omitHeaders/index.ts"),
				he = s("./src/reddit/constants/headers.ts");
			const be = (e, t) => Object(ue.b)(Object(pe.a)(e, [he.a]), {
				endpoint: "".concat(e.apiUrl, "/api/subreddit_autocomplete_v2.json"),
				method: me.bb.GET,
				data: {
					query: t
				}
			});
			var ge = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				fe = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const xe = e => {
				const t = [],
					s = {};
				return e.forEach(e => {
					const n = e.data,
						a = e.kind;
					a === me.vb.Subreddit ? (t.push(n.name), s[n.name] = Object(fe.a)(n)) : a === me.vb.Account && (t.push(n.subreddit.name), s[n.subreddit.name] = Object(ge.a)(n.subreddit, n.name))
				}), {
					data: s,
					order: t
				}
			};
			var Pe = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Ce = s("./node_modules/lodash/isEqual.js"),
				ve = s.n(Ce),
				Ee = s("./node_modules/lodash/xorWith.js"),
				Oe = s.n(Ee),
				ye = (e, t) => {
					const s = Oe()(e, t, ve.a);
					return !(!s || 0 !== s.length)
				},
				je = s("./src/reddit/helpers/localStorage/index.ts"),
				we = s("./src/reddit/helpers/name/index.ts"),
				Se = s("./src/reddit/helpers/trackers/searchResults.ts"),
				Me = s("./src/reddit/i18n/utils.ts"),
				Ie = s("./src/reddit/selectors/category.ts"),
				Ne = s("./src/reddit/selectors/experiments/categories.ts"),
				ke = s("./src/reddit/selectors/experiments/searchFix.ts"),
				_e = s("./src/reddit/selectors/experiments/trending.ts"),
				Te = s("./src/reddit/constants/experiments.ts"),
				Le = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Re = s("./src/reddit/selectors/user.ts");
			const Ae = e => Object(Re.G)(e) || Te.Ob.Treatment1 === Object(Le.c)(e, {
				experimentEligibilitySelector: Le.a,
				experimentName: Te.Lb
			});
			var Fe = s("./src/reddit/selectors/platform.ts"),
				De = s("./src/reddit/selectors/searchResults.ts"),
				Be = s("./src/reddit/selectors/tooltip.ts"),
				Ue = s("./src/reddit/selectors/trending.ts"),
				He = s("./src/reddit/controls/Search/index.m.less"),
				Ve = s.n(He);
			const We = Object(de.t)({
					searchQuery: de.U,
					pageLayer: e => e
				}),
				Qe = (e, t, s) => e(e => Object.assign({}, Object(Se.b)(e), {
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(Pe.c)(Pe.a.SearchResults),
					actionInfo: I.actionInfo(e),
					search: I.search(e, s)
				})),
				Ge = Object(c.b)(() => Object(l.c)({
					categoriesLoaded: Ie.i,
					categoriesNameToId: Ie.k,
					currentSubredditName: Fe.e,
					currentUser: Re.i,
					dropdownIsOpen: Object(Be.b)(se),
					typeaheadIdsByQuery: De.c,
					isInCategoriesExperiment: Ne.a,
					isInTrendingExperiment: _e.a,
					isInTypeaheadExperiment: Ae,
					isLoggedIn: Re.J,
					isSearchFixActiveVariant: e => {
						const t = Object(ke.c)(e);
						return Object(ke.b)(t)
					},
					isSubredditSearchAllowed: ke.f,
					language: Re.S,
					multireddit: de.d,
					routeName: Fe.r,
					subreddit: de.q,
					trendingItems: Ue.a,
					typeaheadSuggestions: De.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(x.b)()),
					onChange: t => e(Object(f.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(f.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(d.b)(t)),
					onDispatchSearch: (t, s, a) => {
						e(Object(d.b)(Object(n.c)({
							pathname: t,
							search: s,
							state: {
								fromPage: a
							}
						})))
					},
					onToggleDropdown: () => e(Object(P.g)({
						tooltipId: se
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(f.i)(t))
					},
					onListLoaded: t => {
						let {
							categories: s,
							categoryIds: n
						} = t;
						e(Object(g.l)({
							categories: s,
							categoryIds: n
						}))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onSearch: (n, a, r) => {
						n.preventDefault();
						const {
							currentUser: o = null
						} = e, i = Object(y.a)(e.subreddit, e.multireddit, o, a, s.searchOptions, r, e.isSearchFixActiveVariant, e.isSubredditSearchAllowed);
						if (!i) return;
						const c = i.url,
							d = i.qs,
							l = {
								routeName: e.routeName,
								subredditName: e.currentSubredditName
							};
						t.onDispatchSearch(c, d, l)
					},
					onFocusSearchBar: () => {
						Object(Pe.c)(Pe.a.SearchResults) || Object(Pe.d)(Pe.a.SearchResults);
						const e = s.searchOptions || Object(b.c)({});
						Qe(s.sendEvent, I.OriginElement.SearchBar, e)
					}
				})),
				qe = e => {
					let {
						isSearchFixActiveVariant: t,
						language: s,
						multireddit: n,
						subreddit: a
					} = e;
					return t ? Object(Me.c)("Search") : a ? Object(p.a)(s, "header.searchSubreddit", {
						subreddit: a.name
					}) : n ? Object(p.a)(s, "header.searchMultireddit", {
						multireddit: n.name
					}) : Object(Me.c)("Search Reddit")
				};
			class ze extends i.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeCategoriesApiRequest = async e => {
						const t = await Object(le.a)(this.props.apiContext());
						if (t.ok) {
							const {
								categories: e,
								categoryIds: s
							} = Object(le.b)(t.body);
							this.props.onListLoaded({
								categories: e,
								categoryIds: s
							})
						}
					}, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await be(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = xe(e.body.data.children);
								t && t.data && t.order && this.props.onTypeaheadSuggestionsSuccess({
									typeaheadSuggestions: t.data,
									order: t.order,
									searchQuery: this.state.searchQuery
								})
							}
							this.setState({
								isTypeaheadPending: !1,
								fetchedTrending: !0
							})
						} else this.setState({
							isTypeaheadPending: !1
						})
					}, this.makeTrendingApiRequest = async () => {
						this.props.trendingItems.length || this.state.isTrendingPending || (this.setState({
							isTrendingPending: !0
						}), await this.props.fetchTrendingItems(), this.setState({
							isTrendingPending: !1
						}))
					}, this.setContainerRef = e => {
						this.container = e
					}, this.close = () => {
						this.props.dropdownIsOpen && this.props.onToggleDropdown()
					}, this.onRemoveRecentSearch = e => {
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(je.D)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(je.Y)(Object.assign({}, e, {
								section: M.c.recent
							}), this.props.currentUser.id)
						})
					}, this.onChange = e => {
						const t = e.currentTarget.value,
							s = {
								searchQuery: t
							};
						if (this.setState(s), this.props.onChange(t), this.props.isInTypeaheadExperiment) {
							if (!(!this.props.typeaheadIdsByQuery || !this.props.typeaheadIdsByQuery[t]) || !t) return;
							this.onFetchTypeaheadSuggestions()
						}
					}, this.onFetchTypeaheadSuggestions = r()(() => {
						this.makeTypeaheadApiRequest()
					}, 50), this.onSearch = async e => {
						if (this.close(), !this.props.categoriesLoaded && this.props.isInCategoriesExperiment && await this.makeCategoriesApiRequest(e), this.state.searchQuery) {
							let t, s = Object.assign({}, M.a);
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(s = this.state.selectedItem).id || (s.id = u()()), this.props.typeaheadSuggestions && s.isTypeaheadSuggestion ? this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, I.StructureType.Search, s.isProfile ? I.SearchDropdownNouns.TypeaheadProfile : I.SearchDropdownNouns.TypeaheadSubreddit) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, I.StructureType.Search, I.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									t = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									n = !!this.props.subreddit && this.props.subreddit.isNSFW,
									a = M.b.text;
								s = {
									id: u()(),
									searchQuery: this.state.searchQuery,
									type: a,
									section: M.c.recent,
									subredditOrProfileRestrictedName: t,
									displayInfo: {
										iconUrl: e,
										isNSFW: n
									}
								}
							}
							this.props.isInCategoriesExperiment && this.props.categoriesLoaded && (t = this.props.categoriesNameToId[Object(we.f)(s.searchQuery)]), t || this.onSetRecentSearch(s), this.props.onSearch(e, s, t), this.onClearSearchQuery()
						}
					}, this.onClearSearchQuery = () => {
						this.setState({
							focusedItemIndex: -1,
							selectedItem: null,
							searchQuery: ""
						}), this.props.onClearSearchQuery()
					}, this.onSendDropdownClickEvent = (e, t, s, n) => {
						const a = {
							displayQuery: e,
							rawQuery: t,
							structureType: s,
							searchQuery: this.props.searchQuery
						};
						this.props.sendEvent(Object(Se.l)(n, a))
					}, this.onSendDropdownViewEvent = (e, t, s, n) => {
						const a = {
							displayQuery: s,
							rawQuery: n || s,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(Se.m)(e, a))
					}, this.onKeyDown = e => {
						if (e.key === ie.b.Escape && this.close(), e.key === ie.b.Tab && this.close(), e.key === ie.b.ArrowDown) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (this.state.focusedItemIndex >= this.state.itemList.length - 1) return;
							const t = this.state.focusedItemIndex + 1,
								s = this.state.itemList[t] || null,
								n = s ? s.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: n,
								selectedItem: s
							})
						}
						if (e.key === ie.b.ArrowUp) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (-1 === this.state.focusedItemIndex) return;
							const t = this.state.focusedItemIndex - 1,
								s = this.state.itemList[t] || null,
								n = s ? s.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: n,
								selectedItem: s
							})
						}
					}, this.toggleDropdownAndGetTrending = () => {
						if (this.props.dropdownIsOpen || !this.props.subreddit) {
							if (!this.props.trendingItems.length && this.props.isInTrendingExperiment && this.makeTrendingApiRequest(), this.props.currentUser && !this.props.subreddit) {
								const e = Object(je.w)(this.props.currentUser.id);
								e.length > 0 && (this.setState({
									recentSearches: this.props.isLoggedIn ? e : [],
									itemList: [...e, ...this.props.trendingItems]
								}), e.forEach(e => {
									this.onSendDropdownViewEvent(I.SearchDropdownNouns.Recent, I.StructureType.Recent, e.searchQuery)
								})), this.props.trendingItems.length > 0 && this.props.trendingItems.forEach(e => {
									this.onSendDropdownViewEvent(I.SearchDropdownNouns.Trending, I.StructureType.Trending, e.searchQuery)
								})
							}
							this.props.onToggleDropdown()
						}
					}, this.onFormSubmit = e => {
						e.preventDefault(), this.onSearch(e);
						const t = this.props.searchOptions || Object(b.c)({});
						t.q || (t.q = this.state.searchQuery), Qe(this.props.sendEvent, "full_search_button", t)
					}, this.state = {
						fetchedTrending: !1,
						focusedItemIndex: -1,
						itemList: [],
						isTrendingPending: !1,
						isTypeaheadPending: !1,
						recentSearches: [],
						searchQuery: this.props.searchQuery || "",
						selectedItem: null
					}
				}
				componentDidUpdate(e) {
					const t = ye(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						s = ye(e.trendingItems, this.props.trendingItems);
					if (this.props.searchQuery !== e.searchQuery || !t || !s) {
						const n = this.props.typeaheadSuggestions.length ? this.props.typeaheadSuggestions : [...this.state.recentSearches, ...this.props.trendingItems];
						this.setState(() => {
							const t = {
								itemList: n
							};
							return this.props.searchQuery !== e.searchQuery && (t.searchQuery = this.props.searchQuery || ""), t
						}), !t && this.props.typeaheadSuggestions.length && this.props.typeaheadSuggestions.forEach(e => {
							this.onSendDropdownViewEvent(e.isProfile ? I.SearchDropdownNouns.TypeaheadProfile : I.SearchDropdownNouns.TypeaheadSubreddit, I.StructureType.Search, e.searchQuery)
						}), !s && this.props.trendingItems.length && this.state.fetchedTrending && this.props.trendingItems.forEach(e => {
							this.onSendDropdownViewEvent(I.SearchDropdownNouns.Trending, I.StructureType.Trending, e.searchQuery)
						})
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return i.a.createElement("div", {
						className: Object(h.a)(Ve.a.relativeWrapper, X.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: se,
						ref: this.setContainerRef
					}, i.a.createElement("label", {
						className: Ve.a.iconContainer,
						htmlFor: "header-search-bar"
					}, i.a.createElement(S.a, {
						className: Ve.a.icon
					})), i.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						method: "get",
						onSubmit: this.onFormSubmit,
						onFocus: e.onFocusSearchBar,
						role: "search"
					}, i.a.createElement("input", {
						id: "header-search-bar",
						name: "q",
						className: Ve.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: qe(e),
						type: "search",
						value: this.state.searchQuery
					})), !e.subreddit && i.a.createElement(re, {
						container: this.container,
						focusedItemIndex: t.focusedItemIndex,
						isFixed: e.isFixed,
						isInTrendingExperiment: e.isInTrendingExperiment,
						isOpen: e.dropdownIsOpen,
						isTrendingPending: t.isTrendingPending,
						isTypeaheadPending: t.isTypeaheadPending,
						itemList: t.itemList,
						language: e.language,
						onClearSearchQuery: this.onClearSearchQuery,
						onClose: this.close,
						onRemoveRecentSearch: this.onRemoveRecentSearch,
						onSendDropdownClickEvent: this.onSendDropdownClickEvent,
						onSetRecentSearch: this.onSetRecentSearch,
						onUpdateSearchQuery: this.onUpdateSearchQuery,
						recentSearches: t.recentSearches,
						trendingItems: e.trendingItems,
						typeaheadSuggestions: e.typeaheadSuggestions
					}))
				}
			}
			t.a = Object(oe.b)(We(Object(ce.b)(Ge(ze))))
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/ToggleSwitch/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("button", {
				"aria-checked": e.on,
				className: Object(r.a)(i.a.toggleSwitch, e.className, {
					[i.a.mActive]: e.on && !e.disabled,
					[i.a.mDisabled]: e.disabled
				}),
				style: e.on && !e.disabled && e.activeColorOverride ? {
					backgroundColor: e.activeColorOverride
				} : void 0,
				id: e.id,
				role: "switch",
				tabIndex: e.tabIndex,
				type: "button",
				onClick: () => !e.disabled && e.onToggle && e.onToggle()
			}, a.a.createElement("div", {
				className: i.a.toggleDisplay
			}))
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, s) {
			e.exports = {
				heading1: "_37JeV292IJA7_x1qej_-2H",
				heading2: "p13k-tsMcatGBlVpJBZmw",
				heading3: "_1nHvvYpmn7q9eWDAGzKcce",
				heading4: "_1-rwUWsB5F8WmYI8F66dai",
				heading5: "_22RKdGqihAj6MFumW6DuRV",
				heading6: "_4xqrI_N1UdqsK9E1RSisG",
				body1: "_2HJOIn4SJm4z1NeCv_hNFu",
				body2: "_3ImIPX9rfoPmUrZ1R8KGqS",
				actionFont: "_3uShGanwyVFBaTiPMFzfAC",
				metadata: "_2nyJGeaFJbXTqTh9OGwxfu",
				metadata3: "_3BIqvjJkJKZfH4vtC11dGF"
			}
		},
		"./src/reddit/controls/Typography/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Typography/index.m.less"),
				r = s.n(a);
			n.a.h1("heading1", r.a), n.a.h2("heading2", r.a), n.a.h3("heading3", r.a), n.a.h4("heading4", r.a);
			const o = n.a.h5("heading5", r.a),
				i = n.a.h6("heading6", r.a),
				c = n.a.p("body1", r.a),
				d = n.a.p("body2", r.a),
				l = n.a.p("actionFont", r.a),
				m = n.a.p("metadata", r.a);
			n.a.p("metadata3", r.a)
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/orders"),
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				o = (e, t) => Object(a.a)(e, {
					method: "get",
					endpoint: "".concat(n.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/paymentSystems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");

			function r(e) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/stripe-connect-links"),
					method: "post"
				})
			}

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me"),
					method: "patch",
					data: {
						stripe: {
							authorization: Object.assign({}, t, {
								scope: "read_write"
							})
						}
					}
				})
			}

			function i(e) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me"),
					method: "get"
				})
			}

			function c(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/stripe-sources/").concat(t),
					method: "delete"
				})
			}

			function d(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/braintree-sources/").concat(t),
					method: "delete"
				})
			}
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			}));
			var n = s("./src/config.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				r = s("./src/reddit/constants/headers.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts"),
				i = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function c(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function d(e) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/users/me"),
					method: "get"
				}).then(e => e.ok ? e.body.specialMemberships ? Object.assign({}, e, {
					body: e.body.specialMemberships
				}) : Object.assign({}, e, {
					body: {}
				}) : e)
			}

			function l(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function m(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/orders"),
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.trial ? "trial_membership" : "membership",
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function u(e, t) {
				return Object(o.a)(Object(a.a)(e, [r.a]), {
					endpoint: "".concat(e.apiUrl, "/api/info?id=").concat(t.join(",")),
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(i.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign({}, e, {
							body: t
						})
					}
					return e
				})
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/merge.js"),
				a = s.n(n),
				r = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/badges.ts"),
				i = s("./src/reddit/endpoints/governance/community.ts"),
				c = s("./src/reddit/endpoints/governance/products/badges.ts"),
				d = s("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, s) {
				const n = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					l = function(e, t) {
						return Object(d.a)(e, {
							method: "get",
							endpoint: "".concat(r.a.metaUrl, "/product-collections/").concat(t, "?types=badge")
						})
					}(e, t),
					m = Object(i.a)(e, {
						subredditId: t
					}),
					u = Object(c.b)(e, t),
					p = Object(o.c)(e, t, s),
					[h, b, g, f] = await Promise.all([l, m, u, p]);
				if (h.ok ? n.collections = h.body : n.errors.collections = h.error, b.ok) {
					const e = b.body;
					n.subscription = e.specialMemberships, n.communityRaw = e
				}
				return g.ok ? n.products = g.body : n.errors.products = g.error, f.ok ? (a()(n.badges, f.body.badges), n.userOwnedBadges = f.body.userOwnedBadges) : n.errors.userBadges = f.error, n
			}
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			}));
			const m = (e, t) => Object(d.a)(e, {
				endpoint: "".concat(r.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/thumbnails.ts");

			function a(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === n.a.SELF || e.thumbnail.url === n.a.NSFW)
			}
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = () => new BroadcastChannel("external_account"),
				a = e => {
					const t = n();
					t.postMessage({
						type: "connected",
						provider: e
					}), t.close()
				}
		},
		"./src/reddit/helpers/getSearchUrl/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./src/lib/search/index.ts"),
				a = s("./src/reddit/constants/parameters.ts"),
				r = s("./src/reddit/models/Search/index.ts");
			t.a = (e, t, s, o, i, c, d, l) => {
				let m, u;
				if ("" !== o.searchQuery) {
					if (c) return {
						url: "/search/",
						qs: "".concat(a.o, "=*:*&").concat(a.b, "=").concat(o.searchQuery, "&").concat(a.a, "=").concat(c)
					};
					if (o.isTypeaheadSuggestion) m = "/".concat(o.searchQuery);
					else {
						if (u = "".concat(a.o, "=").concat(Object(n.b)(o.rawQuery || o.searchQuery)), m = "/search/", o.section === r.c.trending && i && i.source && (u += "&source=".concat(i.source)), e ? (d && l || !d) && (m = "/r/".concat(e.name).concat(m), u = "".concat(u, "&").concat(a.p, "=1")) : o.subredditOrProfileRestrictedName && (m = "/".concat(o.subredditOrProfileRestrictedName).concat(m), u = "".concat(u, "&").concat(a.p, "=1")), t) {
							const e = t.url.split("/")[2];
							m = "/user/".concat(e, "/m/").concat(t.name).concat(m), u = "".concat(u, "&").concat(a.p, "=1&").concat(a.i, "=1")
						}
						i && i.category && (u = "".concat(u, "&").concat(a.a, "=").concat(i.category))
					}
					return {
						url: m,
						qs: u
					}
				}
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./src/lib/fastdom/index.ts");
			const r = "https://js.stripe.com/v3/",
				o = "https://www.paypalobjects.com/api/checkout.js",
				i = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: "https://www.paypal.com/sdk/js?client-id=".concat(n.a.paypal.braintreeApiKey) + "&currency=USD&vault=true"
				};

			function c(e, t) {
				return t() ? Promise.resolve() : new Promise((s, n) => a.a.write(() => {
					t() && s();
					const n = document.head;
					let a = n.querySelector("script[src='".concat(e, "']"));
					a || ((a = document.createElement("script")).src = e, n.appendChild(a)), a.addEventListener("load", (function e() {
						this.removeEventListener("load", e), s()
					}))
				}))
			}

			function d() {
				return c(r, () => "undefined" != typeof Stripe)
			}

			function l() {
				return c(o, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function m() {
				return Promise.all(Object.keys(i).map(e => {
					const t = "__" + e;
					return c(i[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, s) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				d = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = s.n(d);
			const m = i.a.button("button", l.a),
				u = e => t => a.a.createElement("div", {
					className: t.className
				}, e);
			t.b = function(e, t, s, n) {
				const i = e,
					d = "string" == typeof t ? u(t) : t;
				return s ? e => a.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank"
				}, a.a.createElement(i, {
					className: Object(o.a)(l.a.icon, {
						[l.a.isLit]: e.isLit
					})
				}), a.a.createElement(d, {
					className: l.a.body
				}), n && a.a.createElement("div", {
					className: l.a.metaContainer
				}, n), a.a.createElement(c.a, {
					className: l.a.outboundLink
				})) : e => e.href ? a.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, a.a.createElement(i, {
					className: Object(o.a)(l.a.icon, {
						[l.a.isLit]: !!e.isLit
					})
				}), a.a.createElement(d, {
					className: l.a.body
				}), n && a.a.createElement("div", {
					className: l.a.metaContainer
				}, n)) : a.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.button),
					onClick: e.onClick
				}, a.a.createElement(i, {
					className: Object(o.a)(l.a.icon, {
						[l.a.isLit]: e.isLit
					})
				}), a.a.createElement(d, null))
			}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = () => e => Object.assign({
					source: "dfp",
					action: "request",
					noun: "ad"
				}, n.defaults(e), {
					subreddit: n.subreddit(e)
				}),
				r = () => e => Object.assign({
					source: "dfp",
					action: "define",
					noun: "ad"
				}, n.defaults(e), {
					subreddit: n.subreddit(e)
				})
		},
		"./src/reddit/helpers/trackers/authControls.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => {
					const t = Object(a.o)(e);
					return {
						actionInfo: Object(r.actionInfo)(e),
						post: t && Object(r.post)(e, t) || null,
						profile: Object(r.profile)(e),
						screen: Object(r.screen)(e),
						subreddit: Object(r.subreddit)(e)
					}
				},
				i = e => t => Object.assign({
					source: e,
					action: n.c.CLICK,
					noun: "login"
				}, o(t)),
				c = e => t => Object.assign({
					source: e,
					action: n.c.CLICK,
					noun: "signup"
				}, o(t)),
				d = () => e => Object.assign({
					source: "user_dropdown",
					action: n.c.CLICK,
					noun: "login_signup"
				}, o(e))
		},
		"./src/reddit/helpers/trackers/banners.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			const n = e => t => ({
					source: "announcement",
					noun: "announcement",
					action: "view",
					liveThread: {
						id: e,
						isAnnouncement: !0
					}
				}),
				a = e => t => ({
					source: "announcement",
					noun: "announcement",
					action: "dismiss",
					liveThread: {
						id: e,
						isAnnouncement: !0
					}
				}),
				r = e => t => ({
					source: "announcement",
					noun: "announcement",
					action: "click",
					liveThread: {
						id: e,
						isAnnouncement: !0
					}
				}),
				o = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				i = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				})
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = (e, t) => Object.assign({}, Object(n.defaults)(t), {
					customFeed: Object(n.customFeedByPath)(t, e),
					source: "custom_feeds"
				}),
				r = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "delete"
				}),
				o = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "follow"
				}),
				i = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "duplicate"
				}),
				d = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "share"
				}),
				l = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				m = e => t => Object.assign({}, a(e, t), {
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/monthsToMinutes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "f", (function() {
				return b
			}));
			var n = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, a.defaults(e), {
					actionInfo: a.actionInfo(e, {
						settingValue: "top_banner"
					}),
					noun: "account_complete",
					source: "banner"
				}),
				o = () => e => Object.assign({}, r(e), {
					action: "view"
				}),
				i = e => t => Object.assign({}, r(t), {
					action: "click",
					banner: {
						id: e,
						buttonText: e
					}
				}),
				c = e => Object.assign({}, a.defaults(e), {
					source: "community_manager"
				}),
				d = e => t => Object.assign({}, c(t), {
					action: "click",
					noun: "subreddit_name",
					subreddit: {
						id: Object(n.G)(t, e),
						name: e
					}
				}),
				l = e => t => Object.assign({}, c(t), {
					action: "click",
					noun: "remove_subreddit",
					subreddit: {
						id: Object(n.G)(t, e),
						name: e
					}
				}),
				m = () => e => Object.assign({}, a.defaults(e), {
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				u = e => t => Object.assign({}, a.defaults(t), {
					action: "click",
					noun: e,
					source: "community_nav"
				}),
				p = e => Object.assign({}, a.defaults(e), {
					noun: "starter_home",
					source: "banner"
				}),
				h = () => e => Object.assign({}, p(e), {
					action: "view"
				}),
				b = () => e => Object.assign({}, p(e), {
					action: "click",
					actionInfo: a.actionInfo(e, {
						reason: "close"
					})
				})
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/constants/wiki.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = "/wiki";
				return e.subredditName && (s = "/r/".concat(e.subredditName, t ? "/about/wiki" : "/wiki"), e.wikiSubRoute && (s += "/".concat(e.wikiSubRoute))), e.wikiPageName ? s += "/".concat(e.wikiPageName.toLowerCase()) : e.wikiSubRoute || (s += "/".concat(n.i)), s
			}
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, s) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(o.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || r.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, s) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoMediaVideo"), " ").concat(e.className)
			}), "TextMediaIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/All/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M1.25,17.5V7.5h5v10Zm11.25,0h-5V5H5l5-5,5,5H12.5Zm1.25,0v-5h5v5Z"
			}))
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, a.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M10,1.5 C14.687,1.5 18.5,5.313 18.5,10 C18.5,14.687 14.687,18.5 10,18.5 C5.314,18.5 1.5,14.687 1.5,10 C1.5,5.313 5.314,1.5 10,1.5 Z M7.879,12.122 C6.709,10.952 6.709,9.049 7.879,7.879 C9.012,6.746 10.988,6.746 12.121,7.879 C12.512,8.269 13.145,8.269 13.535,7.879 C13.926,7.489 13.926,6.855 13.535,6.465 C12.591,5.52 11.336,5 10,5 C8.664,5 7.409,5.52 6.465,6.465 C4.516,8.414 4.516,11.586 6.465,13.536 C7.409,14.48 8.664,15 10,15 C11.336,15 12.591,14.48 13.535,13.536 C13.926,13.145 13.926,12.512 13.535,12.122 C13.145,11.731 12.512,11.731 12.121,12.122 C10.988,13.255 9.012,13.255 7.879,12.122 Z"
			}))
		},
		"./src/reddit/icons/svgs/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"
			}), a.a.createElement("path", {
				d: "M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1fQOXfyxB1SmgMOi7sihQV"
			}
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), a.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), a.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), a.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), a.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), a.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/KarmaGray/index.m.less": function(e, t, s) {
			e.exports = {
				karma: "_2HCuqd3NYACKYaSTmrITE3"
			}
		},
		"./src/reddit/icons/svgs/LayerLogo/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "w4jKpFw5UZHHzTBhRZojH"
			}
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), a.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Popular/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("polygon", {
					points: "12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6"
				}))
			}
		},
		"./src/reddit/icons/svgs/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M5,15a1,1,0,0,1-1-1V11.17a1,1,0,0,1,.29-.7l8.09-8.09a1,1,0,0,1,1.41,0l2.83,2.83a1,1,0,0,1,0,1.41L8.54,14.71a1,1,0,0,1-.71.29Zm12,1a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/i18n/components.tsx");
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("title", null, a.a.createElement(r.c, null, "Reddit Premium")), a.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			const r = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, a.a.createElement("path", {
				d: "M2.3 5.4v1.7c0 .3-.1.5-.3.7-.3.2-.5.3-.9.3-.3 0-.5-.1-.8-.3-.2-.2-.3-.4-.3-.7V1C0 .7.1.5.3.3.6.1.8 0 1.1 0h3c1 0 1.7.2 2.3.6.7.5 1 1.2 1 2.1 0 .8-.3 1.4-1 2 0 .1-.2.1-.3.2l1.2 1.7c.1.1.2.3.2.5 0 .3-.1.5-.3.7-.3.2-.6.3-.9.3-.4 0-.8-.2-1-.5L3.9 5.4H2.3zM4 1.8H2.3v1.9H4c.3 0 .5-.1.8-.2.2-.2.3-.4.3-.8 0-.3-.1-.6-.3-.7-.2-.2-.5-.2-.8-.2zM9.9 0h2.9c.9 0 1.6.2 2.2.6.6.6 1 1.3 1 2.3 0 1-.4 1.8-1.2 2.3-.5.4-1.2.6-2 .6H11v1.4c0 .3-.1.5-.3.7-.2.1-.5.2-.8.2s-.6-.1-.8-.3c-.3-.2-.4-.4-.4-.7V1c0-.3.1-.5.3-.7.3-.2.6-.3.9-.3zm3.8 2.9c0-.4-.2-.7-.5-.9-.2-.1-.5-.2-.8-.2H11V4h1.4c.3 0 .6-.1.8-.2.3-.2.5-.5.5-.9zM7.4 11.3v3.8c0 .3-.1.5-.3.7-.3.1-.6.2-.9.2-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.7v-1.3H2.3V15c0 .3-.1.5-.3.7-.3.2-.5.3-.9.3-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.6v-3.8c0-.5.1-1 .4-1.4s.6-.8 1-1.1c.6-.4 1.4-.6 2.3-.6.9 0 1.7.2 2.3.6.5.3.8.7 1 1.1s.4.9.4 1.4zM3.7 10c-.4 0-.7.1-.9.3-.3.2-.5.6-.5 1.1v.6h2.8v-.6c0-.5-.2-.9-.5-1.1-.2-.2-.5-.3-.9-.3zm8.4 0c-.6 0-1 .2-1.3.5-.2.2-.3.6-.3 1.1v3.6c0 .3-.1.5-.3.7-.2 0-.5.1-.8.1-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.7v-3.8c0-.8.3-1.5.8-2.1.7-.7 1.7-1.1 3.1-1.1 1.4 0 2.4.4 3.1 1.1.5.5.8 1.2.8 2.1V15c0 .3-.1.5-.3.7-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.7v-3.6c0-.5-.1-.8-.3-1.1-.5-.2-.9-.3-1.5-.3z"
			}))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 250 250",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"
			})))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts");
			t.a = e => a.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, a.a.createElement("g", null, a.a.createElement("circle", {
				fill: r.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), a.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/constants/colors.ts"),
				i = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(r.a)(e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				fill: Object(i.a)(e).bodyText
			}, a.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), a.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), a.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), a.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), a.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), a.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), a.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n, a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = (s("./src/polyfill.ts"), s("./src/lib/performanceTimings/index.tsx")),
				o = s("./node_modules/@r/google-tag-manager/compiled.js"),
				i = s("./src/config.ts"),
				c = s("./node_modules/history/esm/history.js"),
				d = s("./node_modules/js-cookie/src/js.cookie.js"),
				l = s.n(d),
				m = s("./node_modules/react/index.js"),
				u = s.n(m),
				p = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./node_modules/redux-thunk/lib/index.js"),
				b = s.n(h),
				g = s("./node_modules/request-idle-callback/index.js"),
				f = s("./src/lib/browser/isIncognito.ts"),
				x = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/extractQueryParams/index.ts"),
				C = s("./src/lib/filterQueryParams/index.ts"),
				v = s("./src/lib/getParsedUserAgent/index.ts"),
				E = s("./src/lib/initializeClient/index.tsx"),
				O = s("./src/lib/matchRoute/index.ts"),
				y = s("./src/lib/performance.js"),
				j = s("./src/lib/safeJSONParse/index.ts"),
				w = s("./src/reddit/customMiddleware/gqlContext.ts"),
				S = s("./src/reduxMiddleware/apiContext.ts"),
				M = s("./src/telemetry/index.ts"),
				I = s("./src/telemetry/models/Timer.ts"),
				N = s("./src/reddit/actions/apiRequestHeaders.ts"),
				k = s("./src/reddit/actions/chat/promo.ts"),
				_ = s("./src/reddit/actions/chat/sendbirdProxy.ts"),
				T = s("./src/reddit/actions/chat/unreadCount.ts"),
				L = s("./src/reddit/actions/emailCollection/index.ts"),
				R = s("./src/lib/makeApiRequest/index.ts"),
				A = s("./src/lib/omitHeaders/index.ts"),
				F = s("./src/reddit/constants/headers.ts"),
				D = s("./src/reddit/actions/toaster.ts"),
				B = s("./src/reddit/i18n/utils.ts");
			! function(e) {
				e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
			}(n || (n = {}));
			var U = s("./src/reddit/models/Toast/index.ts");
			const H = e => async (t, s, a) => {
				let {
					apiContext: r
				} = a;
				const o = await ((e, t) => Object(R.b)(Object(A.a)(e, [F.a]), {
					method: x.bb.POST,
					endpoint: "".concat(e.apiUrl, "/api/v1/verify_email/").concat(t),
					data: {}
				}))(r(), e);
				if (o.ok && o.body && o.body.success) return n.Success;
				switch (o.body.reason) {
					case n.AlreadyVerified:
						return n.AlreadyVerified;
					case n.WrongUser:
						return n.WrongUser;
					default:
						return n.Error
				}
			};
			var V = s("./src/reddit/actions/media.ts"),
				W = s("./src/reddit/actions/monthsToMinutes/accountCompleteness.ts"),
				Q = s("./src/reddit/actions/monthsToMinutes/homeFeed.ts"),
				G = s("./src/reddit/actions/monthsToMinutes/post.ts"),
				q = s("./src/reddit/actions/multireddit/index.ts"),
				z = s("./src/reddit/actions/notifications/loader.ts"),
				Z = s("./src/reddit/actions/notifications/state.ts"),
				K = s("./src/reddit/actions/nps.ts"),
				J = s("./src/reddit/actions/platform.ts"),
				Y = s("./src/reddit/actions/session.ts"),
				X = s("./src/reddit/actions/theme.ts"),
				$ = s("./src/reddit/actions/users.ts"),
				ee = s("./node_modules/react-redux/es/index.js"),
				te = s("./node_modules/react-router/esm/react-router.js"),
				se = s("./node_modules/reselect/es/index.js"),
				ne = (s("./src/reddit/components/Root/redesignFont.less"), s("./assets/fonts/BentonSans/font.less"), s("./assets/fonts/IBMPlexSans/font.less"), s("./assets/fonts/NotoMono/font.less"), s("./assets/fonts/NotoSans/font.less"), s("./assets/fonts/VCR/font.less"), s("./src/reddit/components/Root/index.m.less")),
				ae = s.n(ne),
				re = s("./src/higherOrderComponents/makeAsync.tsx"),
				oe = s("./src/lib/loadWithRetries/index.ts"),
				ie = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				ce = s("./src/reddit/selectors/user.ts");
			const de = Object(se.c)({
					shouldEnable: e => Object(ie.b)(e) || Object(ce.G)(e)
				}),
				le = Object(ee.b)(de),
				me = () => u.a.createElement(m.Fragment, null);
			class ue extends u.a.Component {
				constructor(e) {
					super(e), this.state = {
						component: me
					}
				}
				componentWillMount() {
					this.props.shouldEnable && this.loadAdminPanel()
				}
				componentWillReceiveProps(e) {
					e.shouldEnable && ue.adminPanel === me ? this.loadAdminPanel() : this.props.shouldEnable && !e.shouldEnable && this.setComponent(me)
				}
				loadAdminPanel() {
					if (ue.adminPanel === me) {
						const e = Object(re.a)({
							ErrorComponent: me,
							getComponent: () => Object(oe.a)(() => s.e("AdminPanel").then(s.bind(null, "./src/reddit/components/AdminPanel/index.tsx")).then(e => e.default)),
							LoadingComponent: me
						});
						this.setComponent(e)
					}
				}
				render() {
					const e = this.state.component;
					return u.a.createElement(e, null)
				}
				setComponent(e) {
					ue.adminPanel = e, this.setState({
						component: e
					})
				}
			}
			ue.adminPanel = me;
			var pe = le(ue),
				he = s("./src/lib/doubleclickForPublishers/index.ts"),
				be = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ge = s("./src/reddit/helpers/trackers/ads.ts"),
				fe = s("./src/reddit/selectors/meta.ts");
			const xe = Object(se.c)({
				region: fe.h
			});
			class Pe extends u.a.Component {
				constructor(e) {
					super(e), Object(he.f)({
						limitDataProcessing: "CA" === this.props.region,
						onRequest: () => this.props.sendEvent(Object(ge.b)())
					})
				}
				shouldComponentUpdate() {
					return !1
				}
				render() {
					return null
				}
			}
			var Ce = Object(ee.b)(xe)(Object(be.b)(Pe)),
				ve = s("./src/reddit/components/AppRouter/index.tsx"),
				Ee = s("./node_modules/lodash/noop.js"),
				Oe = s.n(Ee),
				ye = s("./node_modules/prop-types/index.js"),
				je = s.n(ye),
				we = s("./node_modules/react-shortcuts/lib/index.js"),
				Se = s("./src/reddit/constants/shortcuts.ts");
			var Me = s("./src/reddit/selectors/structuredStyles.ts");
			const Ie = {
					[Se.c.OpenIndex]: {
						osx: ["cmd + ?", "?"],
						windows: ["ctrl + ?", "?"],
						linux: ["ctrl + ?", "?"],
						other: ["ctrl + ?", "?"]
					},
					[Se.c.Close]: "esc",
					[Se.c.Konami]: "up up down down left right left right b a enter"
				},
				Ne = {
					[Se.c.Upvote]: "a",
					[Se.c.Downvote]: "z",
					[Se.c.Save]: "s",
					[Se.c.Hide]: "h",
					[Se.c.OpenLink]: "l"
				},
				ke = {
					[Se.c.CollapseOrLoad]: "enter",
					[Se.c.NextComment]: "j",
					[Se.c.PrevComment]: "k",
					[Se.c.Reply]: "r"
				};
			var _e = {
					[Se.d.CommentPage]: Object.assign({}, Ie, Ne, ke),
					[Se.d.Global]: Object.assign({}, Ie),
					[Se.d.Lightbox]: Object.assign({}, Ie, Ne, ke, {
						[Se.c.NextPost]: "n",
						[Se.c.PrevPost]: "p"
					}),
					[Se.d.Listing]: Object.assign({}, Ie, Ne, {
						[Se.c.OpenLightbox]: "enter",
						[Se.c.NextPost]: "j",
						[Se.c.PrevPost]: "k",
						[Se.c.Expando]: "x",
						[Se.c.NewPost]: "c",
						Reserved: ["n", "p", "r"]
					}),
					[Se.d.Modqueue]: Object.assign({}, Ie, Ne, {
						[Se.c.OpenLightbox]: "enter",
						[Se.c.NextPost]: "j",
						[Se.c.PrevPost]: "k",
						[Se.c.Expando]: "x",
						[Se.c.NewPost]: "c"
					})
				},
				Te = s("./src/reddit/actions/shortcuts.ts");
			const Le = {
					[Se.c.Close]: Te.d,
					[Se.c.CollapseOrLoad]: Te.e,
					[Se.c.Downvote]: Te.f,
					[Se.c.Expando]: Te.g,
					[Se.c.Hide]: Te.h,
					[Se.c.NextComment]: Te.j,
					[Se.c.NextPost]: Te.k,
					[Se.c.NewPost]: Te.i,
					[Se.c.OpenIndex]: Te.l,
					[Se.c.OpenLightbox]: Te.m,
					[Se.c.OpenLink]: Te.n,
					[Se.c.PrevComment]: Te.o,
					[Se.c.PrevPost]: Te.p,
					[Se.c.Reply]: Te.q,
					[Se.c.Save]: Te.s,
					[Se.c.Upvote]: Te.t,
					[Se.c.Konami]: null
				},
				Re = (e, t) => (s, n) => {
					if (!document.activeElement) return;
					const a = document.activeElement.nodeName;
					if ("INPUT" === a || "TEXTAREA" === a || "BUTTON" === a && Se.a.includes(n.which)) return;
					const r = Le[s];
					r && e(r(t))
				};
			var Ae = s("./src/reddit/components/ShortcutWrapper/index.m.less"),
				Fe = s.n(Ae);
			const De = e => {
					let {
						children: t
					} = e;
					return u.a.createElement("div", {
						className: Fe.a.shortcutDiv,
						id: Se.b,
						tabIndex: -1
					}, u.a.Children.only(t))
				},
				Be = new we.ShortcutManager(_e),
				Ue = Object(se.c)({
					isBladeOpen: Me.j,
					namespace: e => e.activeModalId ? Se.d.Global : e.shortcuts.namespace
				}),
				He = Object(ee.b)(Ue, e => ({
					dispatchAction: t => e(t)
				}));
			class Ve extends m.Component {
				getChildContext() {
					return {
						shortcuts: Be
					}
				}
				componentDidMount() {
					const e = document.getElementById(Se.b);
					if (e) {
						const t = window.scrollX,
							s = window.scrollY;
						e.focus(), window.scrollTo(t, s)
					}
				}
				render() {
					const {
						children: e,
						dispatchAction: t,
						isBladeOpen: s,
						namespace: n,
						sendEvent: a
					} = this.props;
					return u.a.createElement(we.Shortcuts, {
						handler: s ? Oe.a : Re(t, a),
						isolate: !0,
						name: n
					}, u.a.createElement(De, null, e))
				}
			}
			Ve.childContextTypes = {
				shortcuts: je.a.object.isRequired
			};
			var We = He(Object(be.b)(Ve)),
				Qe = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Ge = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/components/Header/Sparse.tsx")),
				qe = s("./src/reddit/components/ThemeProvider/index.tsx"),
				ze = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Ze = s("./src/reddit/controls/Button/index.tsx"),
				Ke = s("./src/reddit/featureFlags/index.ts"),
				Je = s("./src/reddit/i18n/components.tsx"),
				Ye = e => u.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 52 52"
				}, u.a.createElement("path", {
					d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
				}), u.a.createElement("path", {
					fill: "#fff",
					d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
				}), u.a.createElement("path", {
					d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
				}), u.a.createElement("path", {
					d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
				}), u.a.createElement("path", {
					d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
				}), u.a.createElement("path", {
					d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
				}), u.a.createElement("path", {
					fill: "#fff",
					d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
				}), u.a.createElement("path", {
					d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
				})),
				Xe = s("./src/reddit/pages/InternalServerError/index.m.less"),
				$e = s.n(Xe),
				et = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const tt = Object(se.c)({
					language: ce.S,
					showError: Ke.d.showVerboseErrors
				}),
				st = Object(ee.b)(tt)(e => {
					var {
						language: t
					} = e, s = et(e, ["language"]);
					return u.a.createElement(ze.a.Provider, {
						value: !1
					}, u.a.createElement(qe.b, {
						subredditName: ""
					}, u.a.createElement("div", null, u.a.createElement(Ge.a, null), u.a.createElement("div", {
						className: $e.a.container
					}, u.a.createElement("div", {
						className: $e.a.mainContent
					}, u.a.createElement(Ye, {
						className: $e.a.dizzySnoo
					}), u.a.createElement("h3", {
						className: $e.a.title
					}, u.a.createElement(Je.c, null, "Sorry, for some reason reddit can't be reached.")), u.a.createElement("div", {
						className: $e.a.subTitle
					}, u.a.createElement(Je.c, null, "Give us a few minutes to fix the problem. Sorry!")), u.a.createElement(Ze.f, {
						onClick: () => window.location.reload(!0)
					}, u.a.createElement(Je.c, null, "Reload Page")), s.showError && u.a.createElement("div", {
						className: $e.a.subTitle
					}, s.error.message)), u.a.createElement("div", {
						className: $e.a.topImageContainer
					}, u.a.createElement("img", {
						className: $e.a.image,
						src: "".concat(i.a.assetPath, "/img/error/star_pattern.png")
					})), u.a.createElement("div", {
						className: $e.a.bottomImageContainer
					}, u.a.createElement("img", {
						className: $e.a.image,
						src: "".concat(i.a.assetPath, "/img/error/half_planet.png")
					}))))))
				});

			function nt() {
				return (nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const at = Object(se.c)({
					theme: e => e.themes.current
				}),
				rt = Object(ee.b)(at, {})(e => {
					let {
						children: t,
						theme: s
					} = e;
					const n = Object(Qe.a)({
						theme: s
					});
					return u.a.createElement("div", {
						className: ae.a.container,
						children: t,
						style: {
							"--background": n.body,
							"--canvas": n.canvas
						}
					})
				});
			var ot = e => {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: s
					} = e;
					return u.a.createElement(be.a, null, u.a.createElement(rt, null, u.a.createElement(Ce, null), u.a.createElement(pe, null), u.a.createElement(We, null, u.a.createElement(t, null, u.a.createElement(te.d, {
						component: it(s)
					})))))
				}
				return u.a.createElement(st, {
					error: e.error
				})
			};
			const it = e => t => u.a.createElement(ve.b, nt({
				routes: e
			}, t));
			var ct = s("./src/reddit/constants/localStorage.ts"),
				dt = s("./node_modules/lodash/throttle.js"),
				lt = s.n(dt),
				mt = s("./src/reddit/helpers/localStorage/index.ts");
			const ut = 1e3;
			class pt extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = lt()(() => Object(mt.Q)(this.props.storageKey, this.props.value), ut)
				}
				componentDidMount() {
					this.props.syncOnMount && this.sync()
				}
				componentDidUpdate() {
					this.sync()
				}
				sync() {
					this.props.enabled && this.flush()
				}
				render() {
					return null
				}
			}
			pt.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const ht = Object(se.a)(ce.J, e => ({
				storageKey: ct.q,
				value: {},
				enabled: !e
			}));
			var bt = Object(ee.b)(ht)(pt),
				gt = s("./src/reddit/selectors/index.ts"),
				ft = s("./src/reddit/actions/monthsToMinutes.ts"),
				xt = s("./src/reddit/selectors/monthsToMinutes.ts"),
				Pt = s("./src/reddit/selectors/subscriptions.ts");
			const Ct = Object(gt.a)(xt.d, xt.B, xt.q, xt.t, xt.u, xt.v, xt.b, xt.E, Pt.e, xt.w, (e, t, s, n, a, r, o, i, c, d) => {
				const l = {
					accountCompleteness: o,
					homeFeed: s,
					postsCount: n,
					subreddits: t,
					subscriptions: Object.keys(c),
					tooltip: i,
					views: a,
					votes: r
				};
				return {
					storageKey: ct.u,
					value: {
						loggedOutV5: d ? l : Object(ft.g)(l)
					},
					enabled: e,
					syncOnMount: !1
				}
			});
			var vt = Object(ee.b)(Ct)(pt);
			var Et = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(vt, null), u.a.createElement(bt, null)),
				Ot = s("./src/reddit/constants/history.ts"),
				yt = s("./src/reddit/constants/jsapiEvents.ts"),
				jt = s("./src/reddit/constants/parameters.ts"),
				wt = s("./src/reddit/constants/screenWidths.ts"),
				St = s("./src/reddit/contexts/AdminEvents.ts"),
				Mt = s("./src/reddit/contexts/ApiContext.tsx"),
				It = s("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				Nt = s("./node_modules/brcast/dist/brcast.es.js"),
				kt = s("./src/telemetry/helpers/sendEvent.ts");
			var _t = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(Nt.a)([]);
					return {
						broadcaster: t,
						middleware: s => {
							const n = s.getState();
							return (Object(ie.b)(n) || Object(ce.G)(n)) && (e = !0, Object(kt.c)(t)), n => a => {
								const r = n(a),
									o = s.getState();
								if (!Object(ie.b)(o)) {
									const s = Object(ce.G)(o);
									e && !s ? (e = !1, Object(kt.c)(void 0), t.setState([])) : s && !e && (t.setState([]), Object(kt.c)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(Nt.a)([]),
					middleware: () => e => t => e(t)
				}),
				Tt = s("./node_modules/lodash/pick.js"),
				Lt = s.n(Tt),
				Rt = s("./src/reddit/actions/header.ts"),
				At = s("./src/reddit/actions/preferences.ts"),
				Ft = s("./src/reddit/constants/cookie.ts"),
				Dt = s("./src/reddit/constants/preferences.ts");
			const Bt = new Set([At.f, At.h, X.b, $.b, At.c, At.n, Rt.d, Rt.e, At.q]);
			var Ut = e => t => s => {
					const n = t(s);
					if (Bt.has(s.type)) {
						const t = e.getState().user,
							s = {
								prefs: Lt()(t.prefs, ["hamburgerTray", "globalTheme", "featuresViewedHistory", "collapsedTraySections", "nightmode", "subscriptionsPinned", Dt.b, Dt.d, Dt.e]),
								language: t.language
							},
							n = new Date;
						n.setFullYear(n.getFullYear() + 2), l.a.set(Ft.k, btoa(JSON.stringify(s)), {
							expires: n,
							domain: i.a.cookieDomain
						})
					}
					return n
				},
				Ht = s("./src/lib/fastdom/index.ts"),
				Vt = s("./src/server/helpers/seoMetadata.tsx");
			var Wt = "undefined" != typeof document ? e => t => s => {
					const n = t(s);
					if (s.type === J.e) {
						const t = e.getState(),
							{
								meta: n
							} = s.payload;
						Ht.a.write(() => {
							document.title = n.title, Object(Vt.b)(t, document)
						})
					}
					return n
				} : () => e => t => e(t),
				Qt = s("./src/reddit/actions/frontpage.ts"),
				Gt = s("./src/reddit/actions/multireddit/constants.ts"),
				qt = s("./src/reddit/actions/page.ts"),
				zt = s("./src/reddit/actions/pages/collectionCommentsPage.ts"),
				Zt = s("./src/reddit/actions/pages/profileComments.ts"),
				Kt = s("./src/reddit/actions/pages/profileOverview.ts"),
				Jt = s("./src/reddit/actions/pages/profilePosts.ts"),
				Yt = s("./src/reddit/actions/pages/search.ts"),
				Xt = s("./src/reddit/actions/pages/subreddit.ts"),
				$t = s("./src/reddit/actions/profileConversations.ts"),
				es = s("./src/reddit/actions/profileOverviewChrono.ts"),
				ts = s("./src/reddit/actions/recommendations.ts"),
				ss = s("./src/reddit/actions/search.ts"),
				ns = s("./src/reddit/actions/subreddit.ts");
			const as = new Set([zt.b, qt.b, Zt.b, Zt.e, Kt.e, Kt.b, Jt.e, Jt.b, Xt.b, qt.g, qt.l, Gt.r, Qt.b, $t.e, ts.b, ns.i, ss.c, es.b, Yt.c]);
			var rs = e => t => s => {
				const n = t(s),
					a = e.getState();
				return as.has(s.type) && a.user.loggedOutData && Object(xt.w)(a) && e.dispatch(Object(ft.i)(a.user.loggedOutData.votes)), n
			};
			const os = 5 * x.cb;
			var is = e => {
					const t = lt()(() => {
						const t = e.getState().user.session,
							s = new Date(t.expires),
							n = new Date;
						s.getTime() - n.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(Y.g())
					}, os);
					let s, n;
					const a = () => {
							const s = e.getState().user.session;
							if (!s || !n) return;
							const a = new Date(s.expires),
								r = n + Math.floor(.8 * (a.getTime() - n));
							Date.now() > r && t && t()
						},
						r = e => {
							n = Date.now();
							const a = new Date(e.expires).getTime() - n,
								r = .8 + .1 * Math.random(),
								o = Math.min(Math.floor(r * e.expiresIn * 1e3), Math.floor(r * a));
							s = setTimeout(t, o)
						},
						o = e.getState();
					return o.user.session && r(o.user.session), window.addEventListener("focus", a), window.addEventListener("touchend", a), document.body.addEventListener("mouseenter", a), e => t => (t.type !== Y.a && t.type !== Y.b && t.type !== Y.c && t.type !== Y.e || r(t.payload), t.type === Y.d && (clearTimeout(s), s = null), e(t))
				},
				cs = s("./src/reddit/actions/tracking.ts"),
				ds = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				ls = s("./src/reddit/helpers/history/index.ts"),
				ms = s("./src/reddit/helpers/trackers/commentList.ts"),
				us = s("./src/reddit/helpers/trackers/postList.ts"),
				ps = s("./src/reddit/helpers/trackers/screenview.ts"),
				hs = s("./src/reddit/selectors/platform.ts"),
				bs = s("./src/reddit/selectors/subreddit.ts"),
				gs = s("./src/reddit/helpers/routeKey/index.ts");
			var fs = e => t => s => {
					const n = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(cs.c({
							routeKey: t
						}))
					};
					if (s.type === J.a) {
						const n = e.getState(),
							a = (n.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							r = Object(bs.G)(n, a) || "",
							i = (n.subreddits.about[r] || {}).advertiserCategory;
						o.trigger("pageview", Object.assign({}, Lt()(s.payload.location, "pathname", "search", "hash"), {
							subreddit: a,
							advertiserCategory: i
						}));
						const c = n.platform.currentPage && n.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(gs.c)(c, n, Object(ds.a)(n));
							if (e && M.c.has(e)) {
								const t = M.c.end(e);
								!Object(hs.i)(n) && Object(ls.b)(Ot.a.IsOverlay) || Object(ps.g)(c, n, I.TimerType.UserCancelled, t)
							}
						}
						const d = s.payload.routeMatch;
						if (!d) return t(s);
						const l = Object(ds.a)(n, d),
							m = Object(gs.c)(d, n, l);
						if (!m) return t(s);
						M.c.start(m)
					}
					const a = t(s);
					switch (s.type) {
						case qt.g:
						case Kt.b:
						case Kt.e:
						case Jt.e:
						case Zt.e:
						case Xt.b: {
							const {
								key: e,
								token: t
							} = s.payload;
							t || n(e);
							break
						}
						case Yt.c: {
							const {
								key: e,
								tokens: t
							} = s.payload;
							t.posts || n(e);
							break
						}
						case Qt.b:
						case ns.i:
						case Jt.b: {
							const {
								key: t,
								postIds: a
							} = s.payload;
							n(t);
							const r = e.getState();
							if (a.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							us.j(r, t);
							break
						}
						case Zt.b: {
							const {
								key: t,
								commentIds: a
							} = s.payload;
							if (n(t), a.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							ms.a(r, t);
							break
						}
						case ss.c: {
							const {
								key: e
							} = s.payload;
							n(e);
							break
						}
					}
					return a
				},
				xs = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Ps = s("./src/reddit/helpers/monthsToMinutes/index.ts"),
				Cs = s("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				vs = s("./src/lib/permanentCookieOptions.ts");
			const Es = e => {
				if (!e) return;
				const t = (l.a.get(Ft.i) || "").split(",");
				if (!t.includes(e)) {
					t.unshift(e);
					const s = t.slice(0, 10).join(","),
						n = Object(vs.a)();
					l.a.set(Ft.i, s, n)
				}
			};
			var Os = s("./src/reddit/layout/page/Listing/index.tsx"),
				ys = s("./src/reddit/reducers/index.ts"),
				js = s("./src/reddit/routes/collectionCommentsPage/index.ts"),
				ws = s("./src/reddit/routes/appeal/index.ts"),
				Ss = s("./src/reddit/routes/coins/index.ts"),
				Ms = s("./src/reddit/routes/coinsMobile/index.ts"),
				Is = s("./src/reddit/routes/commentsPage/index.ts");
			s("./node_modules/@loadable/component/dist/loadable.esm.js");
			var Ns = [],
				ks = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				_s = s("./src/reddit/helpers/trackers/emailVerification.ts");
			var Ts = {
					action: e => async (t, s) => {
						await t(At.x());
						const a = s(),
							r = e.params.verificationToken,
							o = e.queryParams && e.queryParams.source;
						if (o && Object(M.a)(Object(_s.b)(o)(a)), !Object(ce.J)(a)) return Object(ks.a)(t, a);
						const i = await t(H(r));
						i === n.Success && Object(M.a)(Object(_s.d)()(a)), t(Object(p.c)("/?verifiedEmail=".concat(i)))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.xb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				Ls = s("./src/reddit/routes/explore/index.ts"),
				Rs = s("./src/reddit/routes/framedGild/index.ts"),
				As = s("./src/reddit/routes/framedModal/index.ts"),
				Fs = s("./src/reddit/routes/frontpage/index.ts"),
				Ds = s("./src/reddit/routes/inbox/index.ts");
			var Bs = {
					action: e => async e => {
						await e(Object(p.c)("/r/layer"))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.xb.LAYER_REDIRECT
					},
					path: ["/layer", "/layer/"]
				},
				Us = s("./src/reddit/routes/meta/index.ts"),
				Hs = s("./src/reddit/routes/moderationPages/index.ts"),
				Vs = s("./src/reddit/routes/modListing/index.ts"),
				Ws = s("./src/reddit/routes/modQueue/index.ts"),
				Qs = s("./src/reddit/routes/multireddit/index.ts"),
				Gs = s("./src/reddit/routes/postCreation/constants.ts");
			const qs = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(p.c)("/"))
				},
				chunk: x.o.EMPTY,
				exact: !0,
				meta: {
					name: x.xb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var zs = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(Gs.b))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.xb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...qs],
				Zs = s("./src/reddit/routes/postCreation/index.ts"),
				Ks = s("./src/reddit/routes/postDraft/index.ts"),
				Js = s("./src/reddit/routes/premium/index.ts"),
				Ys = s("./src/reddit/routes/profileComments/index.ts"),
				Xs = s("./src/lib/addQueryParams/index.ts"),
				$s = s("./src/reddit/endpoints/me/index.ts");
			var en = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							rest: r
						} = e.params, {
							queryParams: o
						} = e, i = await Object($s.a)(a());
						if (!(i.ok && i.body && i.body.account)) {
							const e = s();
							return void Object(ks.a)(t, e)
						}
						const c = i.body.account.displayText,
							d = r ? "/user/".concat(c, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(r)) : "/user/".concat(c, "/"),
							l = Object(Xs.a)(d, o);
						await t(Object(p.c)(l))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.xb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				tn = s("./src/reddit/routes/profileModSettings/index.ts"),
				sn = s("./src/reddit/routes/profileOverview/index.ts"),
				nn = s("./src/reddit/routes/profilePosts/index.ts"),
				an = s("./src/reddit/routes/profilePrivate/index.ts");
			var rn = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(n)) : "/user/".concat(s, "/"), o = Object(Xs.a)(r, a);
						await t(Object(p.c)(o))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.xb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				on = s("./src/reddit/routes/profileSnoobuilder/index.ts");
			var cn = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/posts/").concat(n) : "/user/".concat(s, "/posts"), o = Object(Xs.a)(r, a);
						t(Object(p.c)(o))
					},
					chunk: x.o.EMPTY,
					exact: !0,
					meta: {
						name: x.xb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				dn = s("./src/reddit/routes/publicAccessNetwork/index.ts"),
				ln = s("./src/reddit/routes/report/index.ts"),
				mn = s("./src/reddit/routes/searchResults/index.ts"),
				un = s("./src/reddit/routes/settings/index.ts");
			var pn = [{
					action: e => async t => {
						const {
							page: s
						} = e.params, n = s && "blocked" === s ? "/settings/privacy" : "/settings/";
						await t(Object(p.c)(n))
					},
					chunk: x.o.EMPTY,
					meta: {
						name: x.xb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(p.c)("/settings/profile"))
					},
					chunk: x.o.EMPTY,
					meta: {
						name: x.xb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				hn = s("./src/reddit/routes/subreddit/index.ts"),
				bn = s("./src/reddit/routes/subredditCreation/index.ts"),
				gn = s("./src/reddit/routes/subredditLeaderboard/index.ts"),
				fn = s("./src/reddit/routes/subredditWiki/index.ts"),
				xn = s("./src/reddit/routes/topic/index.ts");
			var Pn = [ws.a, Ss.a, Ms.a, en, rn, cn, ...js.a, ...Is.a, Ts, ...Fs.a, Js.a, Rs.a, As.a, Zs.a, Ks.a, ...zs, Ls.a, Bs, Us.a, Qs.a, Ws.a, Vs.c, Ds.a, Ys.a, tn.a, sn.a, nn.a, on.a, an.a, dn.a, ...un.a, ...pn, mn.a, ...fn.a, xn.a, hn.a, bn.a, gn.a, Hs.a, ln.a, ...Ns],
				Cn = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				vn = s("./src/reddit/constants/experiments.ts"),
				En = s("./src/reddit/helpers/chooseVariant/index.ts"),
				On = s("./src/reddit/selectors/telemetry.ts");
			const yn = {
					displayDelay: 15,
					displayOnRoutes: [x.xb.SUBREDDIT, x.xb.COMMENTS],
					experimentName: vn.O,
					experimentVariant: vn.V.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				jn = e => {
					const {
						base_url: t
					} = Object(On.requestWithParams)(e), s = Object(hs.b)(e), n = s && s.urlParams.partialPostId, a = s && s.urlParams.subredditName;
					return Object.assign({}, t && {
						rbl: t
					}, a && {
						s: a
					}, n && {
						p: n
					})
				},
				wn = e => {
					if ((((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return t.experimentOverrides[s] === n
						})(yn, e) || (e => {
							let {
								samplingRate: t,
								seed: s
							} = e;
							return !!s && 0 === Math.floor(s * t)
						})(yn)) && ((e, t) => {
							let {
								displayOnRoutes: s
							} = e;
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && s.includes(n)
						})(yn, e) && ((e, t) => {
							let {
								isSEOOnly: s
							} = e;
							return !s || t.meta.isSessionSeo
						})(yn, e) && ((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return Object(En.c)(t, {
								experimentName: s,
								experimentEligibilitySelector: En.a
							}) === n
						})(yn, e)) return {
						displayDelay: yn.displayDelay,
						externalVars: jn(e)
					}
				};
			var Sn = s("./src/reddit/singleton/EventSystem.ts"),
				Mn = s("./src/reddit/actions/global.ts");
			var In = s("./src/reddit/models/MonthsToMinutes/index.ts");
			Object(r.e)(r.b.EntryPointStart);
			const Nn = Object(S.a)({
					actionDispatchers: {
						reddaidReceived: $.v,
						loidReceived: $.t,
						sessionTrackerReceived: $.A
					},
					authHeaders: {
						[F.a]: "desktop2x"
					},
					cookies: l.a,
					receivedActions: {
						reddaidReceived: $.f,
						loidReceived: $.d,
						sessionTrackerReceived: $.m,
						userAuthenticated: Y.c,
						userLoggedOut: Y.d,
						userReauthenticated: Y.e,
						headersReceived: N.a
					},
					onBeforeRequestFactory: Cs.a,
					statsAppName: x.l.Redesign
				}),
				kn = Object(w.a)(Nn.apiContext),
				_n = _t();
			let Tn;
			Object(E.a)({
				reducers: ys.a,
				routes: Pn,
				apiContext: Nn.apiContext,
				gqlContext: kn.gqlContext,
				appFactory: (e, t) => u.a.createElement(St.a.Provider, {
					value: _n.broadcaster
				}, u.a.createElement(Mt.a.Provider, {
					value: {
						apiContext: Nn.apiContext,
						gqlContext: kn.gqlContext
					}
				}, u.a.createElement(It.b, null, u.a.createElement(ot, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(Et, null)))),
				appName: x.l.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const s = Tn;
						if (!s) return;
						s.dispatch(Object(J.k)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), s.dispatch(Object(J.j)())
							}
						}))
					}
				}),
				customMiddleware: [b.a.withExtraArgument({
					routes: Pn,
					apiContext: Nn.apiContext,
					gqlContext: kn.gqlContext
				}), _n.middleware, Nn.middleware, kn.middleware, is, Ut, fs, Wt, rs],
				modifyInitialData: e => {
					let {
						initialData: t,
						browserHistory: s
					} = e;
					const n = t.platform.currentPage ? t.platform.currentPage.key : "";
					if (n) {
						const e = s.location.key;
						t.platform.currentPage && (t.platform.currentPage.key = e);
						for (const s of ["referrers", "metas"]) Object.keys(t.platform[s]).length && (t.platform[s] = {
							[e]: t.platform[s][n]
						})
					}
					return t
				},
				staticPages: {
					loading: u.a.createElement(Os.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: e => {
					let {
						browserHistory: t,
						routes: s,
						store: n
					} = e;
					window.addEventListener("message", e => {
							const t = i.a.mediaUrl;
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(V.f)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: "t3_".concat(e.data.id36)
							}))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || n.dispatch(Object(J.g)());
					const a = Object(ce.U)(n.getState());
					n.dispatch(Object(X.c)({
						nightmode: a
					})), n.dispatch(Object(J.h)(s));
					t.listen((e, t) => {
						const a = Object(O.a)(Object(c.e)(e), s);
						n.dispatch(Object(J.i)(e, t, a))
					});
					const r = n.getState(),
						{
							currentPage: o
						} = r.platform;
					if (o) {
						const e = [];
						Object(hs.j)(r) && e.push(jt.d), e.length > 0 && n.dispatch(Object(p.c)(Object(C.a)(o.url, e)))
					}
					return xs.a.initialize(), {
						localStorageData: Object(mt.o)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: c,
						serverDocumentLength: d,
						store: l,
						localStorageData: m
					} = e;
					Tn = l;
					t.listen((e, t) => {
						const s = l.getState(),
							{
								urlParams: n,
								queryParams: a
							} = s.platform.currentPage,
							r = {
								action: t,
								location: e,
								urlParams: n,
								queryParams: a
							},
							o = n.subredditName,
							i = Object(bs.G)(s, o) || "";
						Es(i), Sn.a.publish(yt.c, r, document)
					});
					const u = l.getState(),
						p = (u.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						h = Object(bs.G)(u, p) || "",
						b = (u.subreddits.about[h] || {}).advertiserCategory;
					o.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: u.user.account ? u.user.account.id : u.user.loid.loid
						}
					}), o.trigger("pageview", {
						subreddit: p,
						advertiserCategory: b
					}), l.dispatch(Object(Mn.b)({
						localStorageData: m
					})), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: o
							} = e.platform,
							i = (o.urlParams.subredditName || "").toLowerCase(),
							c = Object(bs.G)(e, i) || "";
						if (Es(c), o && o.meta) {
							const t = o.meta.name;
							if (Object(M.b)(x.l.Redesign, {
									page: t,
									type: "rum"
								}), Object(v.c)(e.meta.userAgent) && window.innerWidth > wt.b) {
								const s = Object(r.f)(d),
									n = [],
									a = {
										isLoggedIn: Object(ce.J)(e),
										name: t,
										statsdPathsForExperiments: n
									};
								Object(r.g)(a, s)
							}
							const s = y.a.timing.domInteractive - y.a.timing.navigationStart;
							Object(ps.g)(o.routeMatch, l.getState(), I.TimerType.Initial, s);
							const i = Object(P.a)(window.location.href);
							Object(j.a)(i.get(jt.u)) && l.dispatch(Object(D.e)({
								kind: U.b.SuccessCommunity,
								text: a.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), i.get(jt.v) && (l.dispatch((e => async (t, s, a) => {
								let {
									apiContext: r
								} = a;
								switch (e) {
									case n.Success:
										t(Object(D.e)({
											kind: U.b.SuccessCommunity,
											text: Object(B.c)("Email verification complete")
										}));
										break;
									case n.AlreadyVerified:
										t(Object(D.e)({
											kind: U.b.SuccessCommunity,
											text: Object(B.c)("Your email address has already been verified.")
										}));
										break;
									case n.WrongUser:
										return void t(Object(D.e)({
											kind: U.b.Error,
											text: Object(B.c)("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.")
										}));
									default:
										t(Object(D.e)({
											kind: U.b.Error,
											text: Object(B.c)("Something went wrong.")
										}))
								}
							})(i.get(jt.v))), history.replaceState(history.state, "", Object(C.a)(window.location.href, [jt.v])));
							let c = !1;
							if ((Object(ls.b)(Ot.a.JustLoggedIn) || i && i.get(jt.n) && Object(j.a)(i.get(jt.n))) && (l.dispatch(Object(D.e)({
									text: a.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), c = !0, Object(ls.c)(Ot.a.JustLoggedIn), history.replaceState(history.state, "", Object(C.a)(window.location.href, [jt.n]))), Object(ls.b)(Ot.a.JustLoggedOut) && (c = !0, Object(ls.c)(Ot.a.JustLoggedOut)), Object(Z.b)(e), !1 !== mt.z() && Object(z.a)().then(e => e.requestNotificationsPermissions).then(e => l.dispatch(e(c, !1))), Object(xt.w)(e)) {
								Object(Cn.c)(e) && Object(Ps.c)() && Object(hs.h)(e) && l.dispatch(Object(W.b)(In.a.HomeVisited)), l.dispatch(Object(Q.f)());
								const {
									activePostId: t
								} = e.shortcuts, s = o.meta.name === x.xb.COMMENTS, n = o.meta.name === x.xb.DUPLICATES;
								(s || n) && t && l.dispatch(Object(G.b)(t))
							}
							if (t === x.xb.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								l.dispatch(Object(q.h)({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(L.c)())
						}
						Object(ce.J)(l.getState()) && (l.dispatch(Object(T.c)()), l.dispatch(Object(_.b)()).then(() => l.dispatch(Object(k.a)()))), Object(g.requestIdleCallback)(async () => {
							l.dispatch(Object(K.d)()), await Object(f.a)() && (e => Object(M.a)(Object.assign({}, On.defaults(e), {
								screen: On.screen(e),
								source: "global",
								action: "view",
								noun: "empty"
							})))(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = wn(e);
								t && (await (async e => {
									return (await Object(oe.a)(() => s.e("UserZoomIntegration").then(s.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), n && n())
							}, n = t.listen((t, s) => {
								"POP" !== s && e()
							});
							e()
						})
					}), window.history.scrollRestoration = "manual", Sn.a.attachStore(l)
				},
				raven: {
					tags: {
						project: x.l.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/pages/InternalServerError/index.m.less": function(e, t, s) {
			e.exports = {
				dizzySnoo: "UaNg246yNIpwcq_Uhe6vC",
				container: "EXdERxzjUGqvBK511L1Eq",
				mainContent: "_3dyrEHC8cc6dIOTUPQmv1S",
				title: "_1PdcLVyQbMPVKRikIspqb_",
				subTitle: "_1YhiRkum1oGZUdm5i1mHFJ",
				image: "_1gTZDLeeF0VPQsS6Iz5boy",
				imageContainer: "_2wX-WzezrtDmDaxm8BR4zz",
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR",
				bottomImageContainer: "_3sveU8lpcXyGOpDXsXc9xg"
			}
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = ["/appeal", "/appeals"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Appeal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Appeal").then(s.bind(null, "./src/reddit/pages/AppealPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/AppealPage/index.tsx"
					}
				}),
				c = {
					action: r.o,
					chunk: a.o.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.APPEAL
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/coins",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Coins",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Coins").then(s.bind(null, "./src/reddit/pages/CoinsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsPage/index.tsx"
					}
				}),
				c = {
					action: r.q,
					chunk: a.o.COINS,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.COINS
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/coins/mobile",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "CoinsMobile",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CoinsMobile").then(s.bind(null, "./src/reddit/pages/CoinsMobilePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsMobilePage/index.tsx"
					}
				}),
				c = {
					action: r.p,
					chunk: a.o.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.COINS_MOBILE
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/collectionCommentsPage.ts"),
				o = s("./src/reddit/featureFlags/profileCollections.ts");
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "CollectionCommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CollectionCommentsPage~CommentsPage"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("CollectionCommentsPage")]).then(s.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CollectionCommentsPage/index.tsx"
					}
				}),
				c = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"],
				d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				l = {
					action: r.e,
					chunk: a.o.COLLECTION_COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.COLLECTION_COMMENTS
					},
					prefetches: [a.o.FRONTPAGE, a.o.COMMENTS_PAGE, a.o.SUBREDDIT]
				},
				m = Object.assign({}, l, {
					path: c
				}),
				u = Object.assign({}, l, {
					path: d,
					routePredicate: o.a
				}),
				p = [m, u];
			t.a = p
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "CommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CollectionCommentsPage~CommentsPage"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("CommentsPage")]).then(s.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/index.tsx"
					}
				}),
				i = ["/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle?", "/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/comments/:partialPostId/:urlSafePostTitle?"],
				c = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				l = (e, t) => ({
					action: r.u,
					chunk: a.o.COMMENTS_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [a.o.FRONTPAGE, a.o.SUBREDDIT]
				}),
				m = [l(a.xb.COMMENTS, i), l(a.xb.DUPLICATES, c), l(a.xb.COMMENTS, d)];
			t.a = m
		},
		"./src/reddit/routes/explore/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/explore.ts");
			const o = ["/explore", "/explore/:categoryName"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Explore",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("Explore~Multireddit"), s.e("Explore")]).then(s.bind(null, "./src/reddit/pages/Explore/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Explore/index.tsx"
					}
				}),
				c = {
					action: r.e,
					chunk: a.o.EXPLORE,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.EXPLORE
					},
					path: o,
					prefetches: [a.o.COMMENTS_PAGE, a.o.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/framedGild/:thingId",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("FramedGild~GildModal"), s.e("FramedGild")]).then(s.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedGildPage/index.tsx"
					}
				}),
				c = {
					action: r.v,
					chunk: a.o.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.FRAMED_GILD
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/framedModal/:type",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "FramedModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("FramedModal")]).then(s.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedModalPage/index.tsx"
					}
				}),
				c = {
					action: r.w,
					chunk: a.o.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.FRAMED_MODAL
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts");
			const c = Object.keys(o.N).map(e => o.N[e]).join("|"),
				d = "/",
				l = "/:sort(".concat(c, ")?"),
				m = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("Frontpage")]).then(s.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Frontpage/index.tsx"
					}
				}),
				u = {
					action: i.y,
					chunk: o.o.FRONTPAGE,
					component: m,
					exact: !0,
					prefetches: [o.o.COMMENTS_PAGE, o.o.SUBREDDIT]
				},
				p = Object.assign({}, u, {
					path: d,
					meta: {
						name: o.xb.INDEX
					}
				}),
				h = Object.assign({}, u, {
					path: l,
					meta: {
						name: o.xb.LISTING
					}
				}),
				b = [p, h];
			t.a = b
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "InboxPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("InboxPages").then(s.bind(null, "./src/reddit/pages/RedditEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/RedditEmbed/index.tsx"
					}
				}),
				d = Object.keys(o.K).map(e => o.K[e]).join("|"),
				l = "/message/:pageName(".concat(d, ")/:rest(.+)?"),
				m = {
					action: i.A,
					chunk: o.o.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: o.xb.INBOX_PAGES
					},
					path: l
				};
			t.a = m
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts");
			const o = ["/web/special-membership/:subredditName", "/web/membership/:subredditName"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "MembershipPaywallPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("MembershipPaywallPage")]).then(s.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: a.o.META_MEMBERSHIP_PAYWALL_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts");
			const i = Object(r.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("ModListing~ModQueuePages~Multireddit~ProfilePosts~SearchResults~Topic"), s.e("ChatPost~ModQueuePages"), s.e("ModQueue~ModQueuePages"), s.e("ModQueuePages")]).then(s.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ModQueuePages/index.tsx"
					}
				}),
				c = Object.keys(o.fb).map(e => o.fb[e]).join("|"),
				d = "/r/mod/about/:pageName(".concat(c, ")?"),
				l = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("ModQueue~ModQueuePages"), s.e("ModQueue")]).then(s.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested);
						await r(e)(t, n, a)
					},
					chunk: o.o.MODQUEUE_PAGES,
					component: i,
					exact: !0,
					meta: {
						name: o.xb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = l
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./src/lib/constants/index.ts");
			const c = Object.keys(i.Mb).map(e => i.Mb[e]).join("|"),
				d = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~ModerationPages~SubredditWiki"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ModHub/index.tsx"
					}
				}),
				l = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"],
				m = ["/r/:subredditName/about", "/r/:subredditName/about/:pageName(".concat(c, ")"), ...l],
				u = e => !!Object(o.h)(e, {
					path: "/r/:subredditName/about"
				}),
				p = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~ModerationPages~SubredditWiki"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested);
						await r(e)(t, n, a)
					},
					chunk: i.o.MODERATION_PAGES,
					component: d,
					exact: !0,
					meta: {
						name: i.xb.MODERATION_PAGES
					},
					path: m,
					prefetches: [i.o.SUBREDDIT]
				};
			t.a = p
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("ModListing~ModQueuePages~Multireddit~ProfilePosts~SearchResults~Topic"), s.e("ModListing~Multireddit~ProfilePosts"), s.e("Explore~Multireddit"), s.e("Multireddit")]).then(s.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Multireddit/index.tsx"
					}
				}),
				d = "/me/m/:multiredditName",
				l = Object.keys(o.N).map(e => "".concat(d, "/:sort(").concat(o.N[e], ")?")),
				m = "/user/:username/m/:multiredditName",
				u = Object.keys(o.N).map(e => "".concat(m, "/:sort(").concat(o.N[e], ")?")),
				p = [d, m, ...l, ...u],
				h = {
					action: i.C,
					chunk: o.o.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.xb.MULTIREDDIT
					},
					path: p,
					prefetches: [o.o.SUBREDDIT]
				};
			t.a = h
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/postDraft.ts");
			const o = "/user/:profileName/draft/:draftId",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("PostDraft~ProfilePosts~ProfileSnoobuilder"), s.e("PostDraft")]).then(s.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PostDraft/index.tsx"
					}
				}),
				c = {
					action: r.b,
					chunk: a.o.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.POST_DRAFT
					},
					path: o,
					prefetches: [a.o.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/premium",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Premium",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Premium").then(s.bind(null, "./src/reddit/pages/Premium/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Premium/index.tsx"
					}
				}),
				c = {
					action: r.E,
					chunk: a.o.PREMIUM,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.PREMIUM
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profileComments.ts");
			const o = "/user/:profileName/comments",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("ProfileComments")]).then(s.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileComments/index.tsx"
					}
				}),
				c = {
					action: r.h,
					chunk: a.o.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.PROFILE_COMMENTS
					},
					path: o,
					prefetches: [a.o.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profileModSettings.ts");
			const o = "/user/:profileName/about/edit/moderation",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileModeration",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ProfileModeration~Settings~SubredditCreation"), s.e("ProfileModeration")]).then(s.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileModSettings/index.tsx"
					}
				}),
				c = {
					action: r.b,
					chunk: a.o.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.PROFILE_MODERATION
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profileOverview.ts");
			const o = "/user/:profileName",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("ProfileOverview")]).then(s.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileOverview/index.tsx"
					}
				}),
				c = {
					action: r.g,
					chunk: a.o.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.PROFILE_OVERVIEW
					},
					path: o,
					prefetches: [a.o.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/profilePosts.ts");
			const o = "/user/:profileName/posts",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("ModListing~ModQueuePages~Multireddit~ProfilePosts~SearchResults~Topic"), s.e("ModListing~Multireddit~ProfilePosts"), s.e("PostDraft~ProfilePosts~ProfileSnoobuilder"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfilePosts")]).then(s.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePosts/index.tsx"
					}
				}),
				c = {
					action: r.h,
					chunk: a.o.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.PROFILE_POSTS
					},
					path: o,
					prefetches: [a.o.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/models/Profile/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePrivate/index.tsx"
					}
				}),
				d = Object.keys(i.a).map(e => i.a[e]).join("|"),
				l = ["/user/:profileName/:listingType(".concat(d, ")"), "/user/:profileName/gilded/:listingType(".concat(i.a.GivenGildings, ")")],
				m = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested);
						await r(e)(t, n, a)
					},
					chunk: o.o.PROFILE_PRIVATE,
					component: c,
					exact: !0,
					meta: {
						name: o.xb.PROFILE_PRIVATE
					},
					path: l,
					prefetches: [o.o.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("PostDraft~ProfilePosts~ProfileSnoobuilder"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileSnoobuilder/index.tsx"
					}
				}),
				i = "/user/:profileName/snoo",
				c = {
					path: i,
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("PostDraft~ProfilePosts~ProfileSnoobuilder"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested);
						await r(e)(t, n, a)
					},
					chunk: a.o.PROFILE_SNOOBUILDER,
					component: o,
					exact: !0,
					meta: {
						name: a.xb.PROFILE_SNOOBUILDER
					},
					routePredicate: r.d.snoovatar30
				};
			t.a = c
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~PublicAccessNetwork"), s.e("PublicAccessNetwork")]).then(s.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PublicAccessNetwork/index.tsx"
					}
				}),
				i = {
					action: r.F,
					chunk: a.o.PUBLIC_ACCESS_NETWORK,
					component: o,
					exact: !0,
					meta: {
						name: a.xb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subreddit/:streamId?", "/rpan/:streamId?"],
					prefetches: [a.o.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts");
			const r = "/report/:rest(.+)?",
				o = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportPage")]).then(s.bind(null, "./src/reddit/pages/ReportPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/ReportPage/index.tsx"
					}
				}),
				i = {
					action: e => async (t, n, a) => {
						const r = await s.e("Report").then(s.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested);
						await r(e)(t, n, a)
					},
					chunk: a.o.REPORT_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: a.xb.REPORT
					},
					path: r
				};
			t.a = i
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/search.ts");
			const o = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("ModListing~ModQueuePages~Multireddit~ProfilePosts~SearchResults~Topic"), s.e("SearchResults")]).then(s.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/index.tsx"
					}
				}),
				c = {
					action: r.e,
					chunk: a.o.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.SEARCH_RESULTS
					},
					path: o,
					prefetches: [a.o.FRONTPAGE, a.o.SUBREDDIT, a.o.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/page.ts"),
				c = s("./src/reddit/actions/pages/settings.ts");
			const d = Object.keys(o.Kb).map(e => o.Kb[e]).join("|"),
				l = [{
					action: c.a,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("ProfileModeration~Settings~SubredditCreation"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("Settings")]).then(s.bind(null, "./src/reddit/pages/Settings/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/Settings/index.tsx"
						}
					}),
					chunk: o.o.SETTINGS,
					exact: !0,
					meta: {
						name: o.xb.SETTINGS
					},
					path: "/settings/:page(".concat(d, ")?")
				}, {
					action: i.I,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "UserDataRequestPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => s.e("UserDataRequestPage").then(s.bind(null, "./src/reddit/pages/UserDataRequestPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/UserDataRequestPage/index.tsx"
						}
					}),
					chunk: o.o.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: o.xb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = l
		},
		"./src/reddit/routes/subreddit/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "Subreddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Subreddit"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("Subreddit")]).then(s.bind(null, "./src/reddit/pages/Subreddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Subreddit/index.tsx"
					}
				}),
				d = Object.keys(o.N).map(e => "/r/:subredditName/:sort(".concat(o.N[e], ")?")),
				l = ["/r/:subredditName", ...d],
				m = {
					action: i.k,
					chunk: o.o.SUBREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.xb.SUBREDDIT
					},
					path: l,
					prefetches: [o.o.COMMENTS_PAGE, o.o.FRONTPAGE]
				};
			t.a = m
		},
		"./src/reddit/routes/subredditCreation/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/subredditCreation.ts");
			const o = "/subreddits/create",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ProfileModeration~Settings~SubredditCreation"), s.e("SubredditCreation")]).then(s.bind(null, "./src/reddit/pages/SubredditCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditCreation/index.tsx"
					}
				}),
				c = {
					action: r.a,
					component: i,
					chunk: a.o.SUBREDDIT_CREATION,
					exact: !0,
					meta: {
						name: a.xb.SUBREDDIT_CREATION
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/subredditLeaderboard.ts");
			const o = ["/subreddits/leaderboard", "/subreddits/leaderboard/:categoryName/"],
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditLeaderboard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("SubredditLeaderboard~Topic"), s.e("SubredditLeaderboard")]).then(s.bind(null, "./src/reddit/pages/SubredditLeaderboard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditLeaderboard/index.tsx"
					}
				}),
				c = {
					action: r.c,
					chunk: a.o.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: a.xb.SUBREDDIT_LEADERBOARD
					},
					path: o,
					prefetches: [a.o.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditWiki",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ModerationPages~SubredditWiki"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditWiki/index.tsx"
					}
				}),
				c = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+", "/wiki/:wikiPageName+"],
				d = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				l = e => async t => {
					await t(Object(a.c)(Object(o.a)(e.url, e.params)))
				}, m = {
					action: l,
					chunk: r.o.EMPTY,
					exact: !0,
					meta: {
						name: r.xb.SUBREDDIT_WIKI
					},
					path: d
				}, u = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~ModerationPages~SubredditWiki"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("Explore~Frontpage~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSno~9cebee36"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested);
						await r(e)(t, n, a)
					},
					chunk: r.o.SUBREDDIT_WIKI,
					component: i,
					exact: !0,
					meta: {
						name: r.xb.SUBREDDIT_WIKI
					},
					path: c,
					prefetches: [r.o.SUBREDDIT]
				};
			t.a = [m, u]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/url/url.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/wiki.ts"),
				o = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = s("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const s = t.wikiSubRoute === r.l.Settings,
					n = Object(o.a)(t, Object(i.b)(e) || s),
					c = a.a.parse(e);
				return (c.pathname || "").replace(/\/$/, "") !== n ? (c.pathname = n, a.a.format(c)) : e
			}
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/topic.ts");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~f56e25d5"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"), s.e("ModListing~ModQueuePages~Multireddit~ProfilePosts~SearchResults~Topic"), s.e("SubredditLeaderboard~Topic"), s.e("Topic")]).then(s.bind(null, "./src/reddit/pages/Topic/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Topic/index.tsx"
					}
				}),
				i = ["/t/:topicSlug"],
				c = {
					path: i,
					action: r.h,
					chunk: a.o.TOPIC,
					component: o,
					exact: !0,
					meta: {
						name: a.xb.TOPIC
					},
					prefetches: [a.o.COMMENTS_PAGE, a.o.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => {
				return Object(r.G)(e) || n.i.Treatment1 === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.c
				})
			}
		},
		"./src/reddit/selectors/experiments/generalCleanup.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/utils.ts");
			const i = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !e.user.temporaryGQL.isLoggedIn,
					experimentName: a.y
				}), o.a),
				c = e => e === a.P.TopBanner || e === a.P.All,
				d = e => e === a.P.SortView || e === a.P.All
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => Object(r.G)(e) || !(n.Nb.Holdout === Object(a.c)(e, {
				experimentEligibilitySelector: a.a,
				experimentName: n.Kb
			}))
		},
		"./src/reddit/selectors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/lodash/isEqual.js"),
				a = s.n(n),
				r = s("./node_modules/reselect/es/index.js");
			const o = Object(r.b)(r.d, a.a)
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			}));
			const n = e => e.user.notificationPrefs.api.getPreferences.loaded,
				a = e => e.user.notificationPrefs.api.getPreferences.pending,
				r = e => e.user.notificationPrefs.api.setPreferences.pending,
				o = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible
		},
		"./src/reddit/selectors/products.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/Product/index.ts");
			const a = (e, t) => {
					const s = e.products.models[t];
					if (s && s.type === n.a.Badge) return s
				},
				r = (e, t) => {
					let {
						productId: s
					} = t;
					const n = e.products.models[s];
					if (n) {
						const t = n.subredditId,
							a = Object.keys(e.user.ownedBadges[t] || {}),
							r = e.badges.models,
							o = Date.now();
						let i = !1;
						return a.forEach(e => {
							const t = r[e];
							t && t.type === s && t.endsAt > o && (i = !0)
						}), i
					}
					return !1
				}
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = (e, t) => {
					let {
						subredditId: s
					} = t;
					if (e.removalReasons.reasonOrder[s]) {
						return e.removalReasons.reasonOrder[s].map(t => e.removalReasons.models[t])
					}
					return []
				},
				a = e => e.removalReasons.removedItemIds && e.removalReasons.removedItemIds.itemIds.length ? e.removalReasons.removedItemIds : null,
				r = e => e.removalReasons.api.pending
		},
		"./src/reddit/selectors/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.trending.models
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a", "vendors~Chat~Governance~Reddit", "vendors~Governance~Reddit", "vendors~EconHelperActions~Reddit", "vendors~Reddit", "Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34", "Chat~Governance~Reddit", "Governance~Reddit", "ModListing~Reddit"]
	]
]);
//# sourceMappingURL=Reddit.fd592640f149cacd041b.js.map