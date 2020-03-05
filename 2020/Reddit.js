// https://www.redditstatic.com/desktop2x/Reddit.2bf2484c51d421d26cbb.js
// Retrieved at 3/5/2020, 2:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, s) {},
		"./assets/fonts/VCR/font.less": function(e, t, s) {},
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
		"./src/graphql/operations/FetchActiveCoinSale.json": function(e) {
			e.exports = JSON.parse('{"id":"2459112779ff"}')
		},
		"./src/graphql/operations/SubredditModels.json": function(e) {
			e.exports = JSON.parse('{"id":"d98849822078"}')
		},
		"./src/graphql/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"9e9ef4c82a00"}')
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts");
			const a = 120 * n.ab;
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
					return t !== a.zb.PROFILE && (Object(r.a)(e) ? s.push("frontpage") : s.push("r.".concat(e))), t === a.zb.INDEX ? s.push(a.zb.LISTING) : t && s.push(t), s.join("/")
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
					method: l.cb.POST,
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
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");
			var r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/economics/me/constants.ts");
			const i = Object(r.a)(o.a);
			s.d(t, "a", (function() {
				return c
			}));
			const c = () => async (e, t, s) => {
				let {
					apiContext: r
				} = s;
				const o = t().user.account,
					c = !t().economics.me.fetched;
				if (o && c) {
					const t = await
					function(e) {
						return Object(a.a)(e, {
							method: "get",
							endpoint: "".concat(n.a.metaUrl, "/users/me")
						})
					}(r());
					t.ok && e(i(t.body))
				}
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
				C = s("./src/reddit/selectors/products.ts"),
				P = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				v = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function x(e) {
				return !!e && "removeBadge" === e.type
			}

			function y(e) {
				if (!x(e)) return e
			}
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "c", (function() {
				return M
			}));
			const O = () => async (e, t, s) => {
				let {
					apiContext: n
				} = s;
				if (!t().user.account) return;
				await e(Object(P.a)());
				const a = t().economics.me.data.specialMemberships || {},
					r = Object.keys(a);
				if (r.length) {
					const t = await Object(i.d)(n(), r);
					t.ok && e(Object(v.f)(t.body))
				}
			}, E = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				const o = n().user.account,
					i = n().economics.subredditPremium[e],
					d = !i || i.status !== g.a.Fetched || t;
				if (o && d) {
					const t = await Object(c.a)(r(), e, o.id);
					s(Object(v.h)(t))
				}
			}, j = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				const o = s(),
					i = o.user.account,
					c = Object(f.f)(o, e.subredditId),
					l = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (i && e.badge) {
					let s, n;
					s = e.placement === p.a.First ? c[h.a.Loyalty] : e.placement === p.a.Second ? c[h.a.Achievement] : c[h.a.Cosmetic], t(Object(v.a)(Object.assign({}, e, {
						badge: y(e.badge),
						currentAppliedBadges: l,
						userId: i.id
					}))), x(e.badge) && s ? n = await Object(d.a)(a(), e.subredditId, s.id, !1) : x(e.badge) || (n = await Object(d.a)(a(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(v.a)(Object.assign({}, e, {
						badge: s,
						currentAppliedBadges: l,
						userId: i.id
					}))), Object(r.a)(t, n.error))
				}
			}, w = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				await s(E(e, !0));
				const o = n().economics.subredditPremium[e];
				if (o && o.status === g.a.Fetched) {
					const n = o.data.userOwnedBadges.find(e => e.type === t.id);
					n && (s(j({
						badge: n,
						subredditId: e,
						placement: n.placement
					})), s(Object(v.d)(h.c.MyBadges)))
				}
			}, S = e => async (t, s, n) => {
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
					}), t(Object(v.e)({
						subredditId: e,
						products: d
					}))
				}
			}, M = (e, t, s) => async (n, a, r) => {
				let {
					apiContext: o
				} = r;
				if (await n(E(e, !0)), s && t) {
					const s = a(),
						r = Object(f.f)(s, e),
						o = Object(C.a)(s, t);
					if (!r[Object(h.d)(o.placement)] && o) {
						const t = Object(f.o)(s, {
							subredditId: e,
							badge: o
						});
						t && await n(j({
							badge: t,
							subredditId: e
						}))
					}
					n(Object(v.c)({
						subredditId: e,
						initialView: h.c.MyBadges
					}))
				}
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
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/graphql/operations/FetchActiveCoinSale.json"),
				m = s("./src/reddit/constants/headers.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/endpoints/gold/purchase.ts");
			const h = e => e.map(e => ({
					baselineCoins: e.baseline_coins || e.coins,
					baselinePennies: e.baseline_pennies || e.pennies,
					bonusPct: e.bonus_pct,
					coins: e.coins,
					description: e.description,
					featured: e.featured,
					featuredLabel: e.featured_label,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					pennies: e.pennies
				})),
				b = e => e.map(e => ({
					description: e.description,
					frequency: e.frequency,
					frequencyDays: e.frequency_days,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					mobilePennies: e.mobile_pennies,
					pennies: e.pennies,
					periodicalCoins: e.periodical_coins,
					signupBonusCoins: e.signup_bonus_coins
				})),
				g = e => null;

			function f(e) {
				if (!e.ok) return e;
				const {
					active_coin_sale: t,
					coin_packages: s,
					premium_packages: n
				} = e.body, a = {
					activeSale: g(t),
					coinPackages: h(s),
					premiumPackages: b(n)
				};
				return Object.assign({}, e, {
					body: a
				})
			}
			var C = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return E
			}));
			const P = Object(a.a)(C.f),
				v = () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const a = await (e => Object(c.a)(e, Object.assign({}, l)))(n());
					if (a.ok) {
						const t = a.body.data.coinSale;
						await e(P(t))
					}
				}, x = Object(a.a)(C.h), y = Object(a.a)(C.i), O = Object(a.a)(C.g), E = () => async (e, t, s) => {
					let {
						apiContext: a
					} = s;
					e(x());
					try {
						const t = await (async e => {
							const t = "".concat(e.apiUrl, "/api/v2/gold/purchase_package_details"),
								s = Object(u.a)(t);
							return Object(i.b)(Object(d.a)(e, [m.a]), {
								method: o.cb.GET,
								endpoint: s
							}).then(p.c).then(f)
						})(a());
						if (!t.ok) throw new Error(t.error && t.error.type || "Unknown error");
						const s = t.body;
						e(y(s))
					} catch (c) {
						r.c.captureException(c);
						const t = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						e(O(t))
					}
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
				return x
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
						method: o.cb.GET
					}))(n());
					if (p.ok) {
						const t = (e => ({
							chatMessages: !!e.chat_message,
							chatRequests: !!e.chat_request,
							commentReplies: !!e.comment_reply,
							communityRecommendations: !!e.subreddit_recommendation,
							liveEvent: !!e.live_event,
							postReplies: !!e.post_reply,
							privateMessages: !!e.private_message,
							threadReplies: !!e.thread_replies,
							topLevelComment: !!e.top_level_comment,
							trendingPosts: !!e.lifecycle_post_suggestions,
							upvotedComments: !!e.upvote_comment,
							upvotedPosts: !!e.upvote_post,
							usernameMentions: !!e.username_mention,
							userNewFollowers: !!e.user_new_follower
						}))(p.body);
						e(b({
							preferences: t
						}))
					} else e(g(p.error))
				}, C = Object(n.a)(p.k), P = Object(n.a)(p.j), v = Object(n.a)(p.i), x = e => async (t, s, n) => {
					let {
						apiContext: p
					} = n;
					const h = s();
					if (!Object(u.i)(h)) return;
					if (Object(m.e)(h)) return;
					const b = Object(m.d)(h);
					t(C({
						preferences: e
					}));
					const g = await ((e, t) => Object(i.b)(e, {
						endpoint: Object(c.a)("".concat(r.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: o.cb.POST,
						data: {
							preferences: JSON.stringify({
								chat_message: t.chatMessages,
								chat_request: t.chatRequests,
								comment_reply: t.commentReplies,
								lifecycle_post_suggestions: t.trendingPosts,
								live_event: t.liveEvent,
								post_reply: t.postReplies,
								private_message: t.privateMessages,
								subreddit_recommendation: t.communityRecommendations,
								thread_replies: t.threadReplies,
								top_level_comment: t.topLevelComment,
								username_mention: t.usernameMentions,
								upvote_comment: t.upvotedComments,
								upvote_post: t.upvotedPosts,
								user_new_follower: t.userNewFollowers
							})
						}
					}))(p(), e);
					g.ok ? (t(P()), t(Object(a.e)({
						kind: l.b.SuccessCommunity,
						text: Object(d.c)("Changes saved")
					}))) : t(v({
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
				a = s("./src/reddit/actions/economics/helpers/async.ts"),
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
						Object(c.G)(l) || s.push(e(Object(o.u)()));
						const m = Object(n.a)(d, null);
						s.push(e(Object(r.i)(m, d, {}))), await Promise.all(s);
						const u = Object(i.D)(t(), d);
						await e(Object(a.a)({
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
				c = s("./src/lib/pageTitle.ts"),
				d = s("./src/reddit/actions/chat/userSettings.ts"),
				l = s("./src/reddit/actions/economics/paymentSystems/thunkedActions.ts"),
				m = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				u = s("./src/reddit/actions/externalAccount.ts"),
				p = s("./src/reddit/actions/notifications/preferences.ts"),
				h = s("./src/reddit/actions/platform.ts"),
				b = s("./src/reddit/actions/preferences.ts"),
				g = s("./src/reddit/actions/profile/index.ts"),
				f = s("./src/reddit/actions/subredditSettings.ts"),
				C = s("./src/reddit/actions/toaster.ts"),
				P = s("./src/reddit/actions/users.ts"),
				v = s("./src/reddit/constants/parameters.ts"),
				x = s("./src/reddit/helpers/externalAccount/index.tsx"),
				y = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				O = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				E = s("./src/reddit/selectors/externalAccount.ts"),
				j = s("./src/reddit/selectors/user.ts");
			const w = e => async (t, s) => {
				await t(Object(P.u)());
				const w = [t(Object(b.x)(!0)), t(Object(m.a)())];
				s().economics.paymentSystems.status === O.a.NotFetched && w.push(t(Object(l.a)())), await Promise.all(w); {
					const e = s();
					if (!Object(j.G)(e)) return Object(y.a)(t, e)
				}
				const {
					page: S = r.Mb.Account
				} = e.params;
				if (S === r.Mb.Gold) return void t(Object(n.c)("/settings/premium"));
				const M = [];
				S === r.Mb.Profile && (M.push(t(Object(g.a)())), M.push(t(Object(f.e)()))), S === r.Mb.Account && M.push(t(Object(u.o)())), S === r.Mb.Notifications && M.push(t(Object(p.a)())), S !== r.Mb.Privacy && S !== r.Mb.Messaging || M.push(t(Object(d.b)())), await Promise.all(M); {
					const e = s(),
						r = e.platform.currentPage,
						{
							url: c
						} = r,
						d = Object(o.a)(c).get(v.c);
					if (d && (t(Object(n.c)(Object(i.a)(c, [v.c]))), Object(E.a)(e))) {
						const s = Object(j.P)(e),
							n = Object(a.a)(s, "settings.accountForm.connectedAccounts.twitterConnected.toast");
						t(Object(C.e)({
							text: n
						})), Object(x.b)(d)
					}
				}
				t(Object(h.l)({
					title: Object(c.g)()
				}))
			}
		},
		"./src/reddit/actions/pages/subredditCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/pageTitle.ts"),
				a = s("./src/reddit/actions/platform.ts"),
				r = s("./src/reddit/actions/tags/index.ts"),
				o = s("./src/reddit/actions/users.ts"),
				i = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = () => async (e, t) => {
				e(a.l({
					title: Object(n.i)()
				})), await e(Object(o.u)());
				const s = t();
				Object(c.G)(s) ? await e(Object(r.f)()) : Object(i.a)(e, s)
			}
		},
		"./src/reddit/actions/pages/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/reddit/actions/category.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/platform.ts"),
				i = s("./src/reddit/actions/subreddit/topSubreddits.ts"),
				c = s("./src/reddit/actions/users.ts"),
				d = s("./src/reddit/constants/listings.ts"),
				l = s("./src/reddit/constants/subredditLeaderboard.ts"),
				m = s("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				u = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				h = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts"),
				b = s("./src/reddit/selectors/subredditLeaderboard.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const f = (e, t) => t && e === l.h,
				C = e => async (t, s) => {
					t(Object(r.k)({
						actionSource: r.a.SubredditLeaderboard,
						redirectUrl: d.c[d.b.SubredditLeaderboard]
					})), t(o.l({
						title: Object(u.c)("Today’s Top Communities")
					}));
					const a = e.params && e.params.categoryName,
						i = a && Object(m.b)(a);
					Object(h.b)(s()) || i !== l.m || t(Object(n.b)("/subreddits/leaderboard")), await t(P(i))
				}, P = e => async (t, s) => {
					await t(Object(a.h)());
					const n = s(),
						r = Object(g.H)(n),
						o = Object(h.b)(n) && e === l.m;
					if (Object(b.a)(n, e)) return;
					const d = e && Object(p.f)(n, {
							categoryName: e
						}),
						m = d && d.id || l.d,
						u = f(e, r),
						C = ((e, t) => ({
							categoryId: e,
							isOnlyModIncluded: t
						}))(m, u),
						P = Object(b.d)(m, u, o);
					await Promise.all([t(Object(i.a)(C, P)), t(Object(c.u)())])
				}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/lodash/sampleSize.js"),
				a = s.n(n),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/subreddit/constants.ts"),
				i = s("./src/reddit/constants/subredditLeaderboard.ts"),
				c = s("./src/reddit/endpoints/subreddit/models.ts"),
				d = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				l = s("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				m = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts");
			const u = Object(r.a)(o.k),
				p = Object(r.a)(o.j),
				h = Object(r.a)(o.i),
				b = Object(r.a)(o.a),
				g = Object(r.a)(o.b),
				f = Object(r.a)(o.c),
				C = (e, t) => async (s, n, a) => {
					let {
						gqlContext: r
					} = a;
					if (t === i.l) return void(Object(m.b)(n()) && s(P()));
					s(u());
					const o = await Object(d.a)(r(), e);
					if (o.ok) {
						const e = o.body,
							n = e && e.data && e.data.subredditLeaderboard,
							{
								pageInfo: a,
								rankings: r,
								subreddits: i
							} = Object(l.b)(n);
						s(b({
							subreddits: i
						})), s(g({
							categoryRankingsKey: t,
							rankings: r
						})), s(f({
							categoryRankingsKey: t,
							pageInfo: a
						})), s(p())
					} else {
						const e = o.error;
						s(h({
							error: e
						}))
					}
				}, P = () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const r = a()(m.a, 25);
					e(u());
					const o = await Object(c.a)(n(), {
						names: r
					});
					if (!o.ok) {
						const t = o.error;
						return void e(h({
							error: t
						}))
					}
					const d = o.body,
						f = d && d.data && d.data.subredditsInfoByNames,
						{
							rankings: C,
							subreddits: P
						} = Object(l.a)(f);
					e(b({
						subreddits: P
					})), e(g({
						categoryRankingsKey: i.l,
						rankings: C
					})), e(p())
				}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, s) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				CloseButton: "_1ryinm9ofYAx_k9dpdCbpq",
				closeButton: "_1ryinm9ofYAx_k9dpdCbpq",
				Close: "_14dkERGUnSwisNWFcFX-0T",
				close: "_14dkERGUnSwisNWFcFX-0T"
			}
		},
		"./src/reddit/components/AccountManagerModal/index.m.less": function(e, t, s) {
			e.exports = {
				Overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				IframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				iframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				small: "FBb4FZ4ng7CvLYrT6LBdp"
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
				C = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				P = s("./src/lib/fastdom/index.ts"),
				v = s("./src/lib/FocusTrap/index.ts"),
				x = s("./src/lib/isSimpleClick/index.ts"),
				y = s("./src/reddit/actions/header.ts"),
				O = s("./src/higherOrderComponents/makeAsync.tsx"),
				E = s("./src/lib/loadWithRetries/index.ts");
			var j, w, S, M = Object(O.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(E.a)(() => s.e("EmailCollectionBanner").then(s.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx"))).then(e => e.default),
					LoadingComponent: () => null
				}),
				I = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				k = s("./node_modules/polished/dist/polished.es.js"),
				N = s("./node_modules/react-motion/lib/react-motion.js"),
				_ = s("./src/lib/lessComponent.tsx"),
				T = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				R = s("./src/lib/addQueryParams/index.ts"),
				L = s("./src/reddit/actions/preferences.ts");
			! function(e) {
				e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/"
			}(j || (j = {})),
			function(e) {
				e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.Login = "login", e.Register = "register", e.Resize = "resize", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
			}(w || (w = {})),
			function(e) {
				e.Embed = "embed", e.Modal = "modal"
			}(S || (S = {}));
			var A = s("./src/reddit/constants/experiments.ts"),
				F = s("./src/reddit/constants/history.ts"),
				D = s("./src/reddit/constants/listings.ts"),
				B = s("./src/reddit/constants/parameters.ts"),
				U = s("./src/reddit/helpers/history/index.ts"),
				H = s("./src/reddit/icons/svgs/Close/index.tsx");
			const G = e => e.accountManagerModalData.actionSource;
			var q = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				W = s("./src/reddit/helpers/chooseVariant/index.ts"),
				V = s("./src/reddit/selectors/experiments/utils.ts"),
				Q = s("./src/reddit/selectors/user.ts");
			const z = Object(h.a)(e => Object(W.c)(e, {
					experimentName: A.s,
					experimentEligibilitySelector: e => !Object(Q.F)(e)
				}), V.a),
				Z = Object(h.a)(z, e => e === A.y.SSO);
			var K = s("./src/reddit/selectors/meta.ts"),
				Y = s("./src/reddit/selectors/telemetry.ts"),
				J = s("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				X = s.n(J);
			const $ = T.a.redditUrl,
				ee = _.a.iframe("IFrame", X.a),
				te = _.a.button("CloseButton", X.a),
				se = _.a.wrapped(H.a, "Close", X.a),
				ne = Object(h.a)((e, t) => t.path, (e, t) => t.uiMode, G, K.b, q.a, Z, (e, t, s, n, a, r) => {
					let o = "".concat(T.a.accountManagerOrigin).concat(e);
					return a && (o = Object(R.a)(o, {
						[A.C]: a,
						uiMode: t
					})), r && (o = Object(R.a)(o, {
						[A.s]: r
					})), e === j.Index || e === j.ChangePassword ? o : o = Object(R.a)(o, {
						actionSource: s
					})
				}),
				ae = Object(h.c)({
					accountManagerSrc: ne,
					actionSource: G,
					frontpageSignupVariant: q.a,
					redirectUrl: e => e.accountManagerModalData.redirectUrl
				}),
				re = Object(m.b)(ae, (e, t) => ({
					oniFrameLoaded: (t, s) => {
						e((e, n) => {
							t.contentWindow.postMessage({
								events: Object.assign({}, Object(Y.defaults)(n()), {
									actionSource: s
								}),
								type: "eventData"
							}, $)
						})
					},
					onTwoFactorChanged: () => e(Object(L.x)(!1))
				})),
				oe = e => {
					let {
						data: t,
						origin: s
					} = e;
					return t && t.success && (t.type === w.ChangePassword || t.type === w.Close || t.type === w.CreateAccount || t.type === w.Login || t.type === w.Register || t.type === w.Resize || t.type === w.Subscribe || t.type === w.TwoFactorChanged) && s === T.a.accountManagerOrigin
				};
			class ie extends l.a.Component {
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
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && oe(e))
							if (t.type === w.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === w.Close) this.close();
						else if (t.type === w.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === w.Login) this.onLogIn();
						else if (t.type === w.ChangePassword) this.onChangePassword();
						else if (t.type === w.Resize) {
							if (t.payload && this.iframeRef.current) {
								const e = t.payload;
								e.height && e.width && (this.iframeRef.current.style.height = "".concat(e.height, "px"), this.iframeRef.current.style.width = "".concat(e.width, "px"))
							}
						} else t.type === w.TwoFactorChanged ? this.props.onTwoFactorChanged() : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(U.a)(F.a.JustLoggedIn, !0), window.location.reload(!0))
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload(!0)
					}, this.onSignUp = (e, t) => {
						let s = "";
						if (this.props.redirectUrl) s = this.props.redirectUrl;
						else if ("/" !== window.location.pathname) s = window.location.pathname;
						else {
							const n = 0;
							s = (e || t && t.length || 0) > n ? D.c[D.b.Home] : D.c[D.b.Popular]
						}
						this.redirectTo(s)
					}, this.redirectTo = e => {
						window.location.replace(Object(R.a)(e, {
							[B.n]: "true"
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
						className: t,
						showCloseButton: s
					} = this.props;
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(ee, {
						className: t,
						innerRef: this.iframeRef,
						src: e
					}), s && l.a.createElement(te, {
						onClick: this.close
					}, l.a.createElement(se, null)))
				}
			}
			var ce = re(ie),
				de = s("./src/reddit/components/TrackingHelper/index.tsx");
			const le = [],
				me = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le;
					return t => Object.assign({}, Y.defaults(t), {
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
			var ue = s("./src/reddit/i18n/components.tsx"),
				pe = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				he = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				be = s("./src/reddit/components/Carousel/index.tsx"),
				ge = s("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				fe = s.n(ge);
			const Ce = _.a.div("Container", fe.a),
				Pe = _.a.wrapped(be.b, "Carousel", fe.a),
				ve = _.a.div("Phone", fe.a),
				xe = _.a.img("Frame", fe.a),
				ye = "".concat(T.a.assetPath, "/img/frontpage-signup/android-frame.png"),
				Oe = "".concat(T.a.assetPath, "/img/frontpage-signup/iphone-frame.png"),
				Ee = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				je = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var we = e => {
					const {
						className: t
					} = e;
					return l.a.createElement(Ce, {
						className: t
					}, l.a.createElement(ve, {
						className: fe.a.android
					}, l.a.createElement(Pe, {
						animationType: be.a.Fade,
						className: fe.a.android,
						delay: 2500,
						items: Ee,
						itemTime: 5e3,
						itemWidth: 240
					}), l.a.createElement(xe, {
						src: ye
					})), l.a.createElement(ve, {
						className: fe.a.iphone
					}, l.a.createElement(Pe, {
						animationType: be.a.Fade,
						className: fe.a.iphone,
						items: je,
						itemTime: 5e3,
						itemWidth: 232
					}), l.a.createElement(xe, {
						src: Oe
					})))
				},
				Se = s("./src/reddit/i18n/utils.ts"),
				Me = s("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				Ie = s.n(Me);
			const ke = _.a.div("Container", Ie.a),
				Ne = _.a.span("Disclaimer", Ie.a),
				_e = _.a.a("Link", Ie.a);
			var Te = e => l.a.createElement(ke, {
					className: e.className
				}, l.a.createElement(_e, {
					href: "https://about.reddit.com"
				}, Object(Se.c)("about")), l.a.createElement(_e, {
					href: "https://www.redditinc.com/advertising"
				}, Object(Se.c)("advertise")), l.a.createElement(_e, {
					href: "http://www.redditblog.com/"
				}, Object(Se.c)("blog")), l.a.createElement(_e, {
					href: "https://about.reddit.com/careers/"
				}, Object(Se.c)("careers")), l.a.createElement(_e, {
					href: "https://www.reddithelp.com"
				}, Object(Se.c)("help")), l.a.createElement(_e, {
					href: "https://about.reddit.com/press/"
				}, Object(Se.c)("press")), l.a.createElement(_e, {
					href: "https://www.reddit.com/mobile/download"
				}, Object(Se.c)("The Reddit App")), l.a.createElement(_e, {
					href: "https://www.reddit.com/coins"
				}, Object(Se.c)("Reddit coins")), l.a.createElement(_e, {
					href: "http://redditgifts.com/"
				}, Object(Se.c)("Reddit gifts")), l.a.createElement(_e, {
					href: "https://www.reddit.com/premium"
				}, Object(Se.c)("Reddit premium")), l.a.createElement(_e, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, Object(Se.c)("User agreement")), l.a.createElement(_e, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, Object(Se.c)("Mod policy")), l.a.createElement(Ne, null, Object(Se.c)("© 2019 Reddit, Inc. All rights reserved"))),
				Re = s("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				Le = s.n(Re);
			const Ae = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				Fe = _.a.div("Container", Le.a),
				De = _.a.wrapped(ce, "IFrame", Le.a),
				Be = _.a.wrapped(we, "Images", Le.a),
				Ue = _.a.wrapped(Te, "Links", Le.a),
				He = _.a.div("MainContent", Le.a),
				Ge = _.a.div("MainContentColumn", Le.a),
				qe = _.a.button("NotReady", Le.a),
				We = _.a.span("NotReadyText", Le.a),
				Ve = _.a.wrapped(pe.a, "NotReadyIcon", Le.a),
				Qe = Object(f.a)(e => {
					const {
						className: t,
						containerRef: s,
						frontpageSignupVariant: n,
						onCloseClick: a,
						onVisibilityChange: r
					} = e, o = Object(he.a)(e).bodyText;
					return l.a.createElement(I.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: r
					}, l.a.createElement(Fe, {
						className: t,
						innerRef: s
					}, l.a.createElement(He, null, l.a.createElement(Ge, null, l.a.createElement(Be, null, "Images Placeholder")), l.a.createElement(Ge, null, l.a.createElement(De, {
						className: Object(b.a)({
							[Le.a.fields]: Object(q.b)(n)
						}),
						path: j.Register,
						uiMode: S.Embed
					}))), l.a.createElement(qe, {
						onClick: a,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(k.m)(.8, o)
						}
					}, l.a.createElement(We, null, l.a.createElement(ue.c, null, "Not ready to sign up yet?")), l.a.createElement(Ve, null)), l.a.createElement(Ue, null)))
				});
			class ze extends l.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Ze extends l.a.Component {
				constructor() {
					super(...arguments), this.containerRef = l.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(me()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = "-".concat(this.containerRef.current.offsetHeight, "px"), this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return l.a.createElement(ze, {
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
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(Qe, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), l.a.createElement(N.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(N.spring)(n, Ae)
						}
					}, this.renderScroller))
				}
			}
			var Ke = Object(de.b)(Ze),
				Ye = s("./node_modules/js-cookie/src/js.cookie.js"),
				Je = s.n(Ye),
				Xe = s("./src/lib/localStorageAvailable/index.ts"),
				$e = s("./src/reddit/actions/modal.ts"),
				et = Object(O.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("BadgePurchaseModal").then(s.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				tt = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx");
			var st = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumPurchaseModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/PurchaseModal/index.tsx")).then(e => e.default)
			});
			var nt = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsSupportPaymentModal")]).then(s.bind(null, "./src/reddit/components/Economics/Support/PaymentModal/index.tsx")).then(e => e.default)
			});
			const at = () => null;
			var rt = Object(O.a)({
					ErrorComponent: at,
					getComponent: () => Object(E.a)(() => s.e("ManageChatRoomsModal").then(s.bind(null, "./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.tsx"))).then(e => e.default),
					LoadingComponent: at
				}),
				ot = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var it = Object(O.a)({
				getComponent: () => Object(E.a)(() => s.e("NotificationsPrePromptLoader").then(s.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const ct = () => null;
			var dt = Object(O.a)({
					ErrorComponent: ct,
					getComponent: () => Object(E.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("vendors~ModerationPages"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: ct
				}),
				lt = s("./src/higherOrderComponents/asModal/index.tsx"),
				mt = s("./src/reddit/actions/structuredStyles/index.ts"),
				ut = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				pt = s("./src/reddit/constants/modals.ts"),
				ht = s("./src/reddit/controls/TextButton/index.tsx"),
				bt = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const gt = Object(m.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					closeModal: () => {
						e(Object($e.i)(pt.a.BLADE_NIGHTMODE)), e(Object(mt.f)())
					},
					openBlade: () => {
						e(Object(mt.e)(s))
					}
				}
			});
			var ft = Object(lt.a)(gt(e => l.a.createElement(ut.c, null, l.a.createElement(ut.g, null, l.a.createElement(bt.a, null, l.a.createElement(ut.n, null, l.a.createElement(ue.c, null, "Turning off Night Mode")), l.a.createElement(ht.a, {
					onClick: e.closeModal
				}, l.a.createElement(ut.b, null)))), l.a.createElement(ut.j, null, l.a.createElement(ut.l, null, l.a.createElement(ue.c, null, "In order to continue styling your community, Night Mode must be turned off."))), l.a.createElement(ut.e, null, l.a.createElement(ut.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, l.a.createElement(ue.c, null, "Cancel")), l.a.createElement(ut.o, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, l.a.createElement(ue.c, null, "Continue")))))),
				Ct = s("./src/reddit/actions/authorFlair.ts"),
				Pt = s("./src/reddit/actions/userFlair.ts"),
				vt = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				xt = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				yt = s("./src/reddit/components/FlairPreview/index.tsx"),
				Ot = s("./src/reddit/components/FlairSearch/index.tsx"),
				Et = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				jt = s("./src/reddit/controls/Button/index.tsx"),
				wt = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				St = s("./src/reddit/layout/row/Inline/index.tsx"),
				Mt = s("./src/reddit/models/Flair/index.ts"),
				It = s("./src/reddit/models/User/index.ts"),
				kt = s("./src/reddit/selectors/authorFlair.ts"),
				Nt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_t = s("./src/reddit/selectors/userFlair.ts"),
				Tt = s("./src/reddit/components/UserFlairPicker/index.m.less"),
				Rt = s.n(Tt);
			const Lt = e => e.inContextAuthor && e.currentUser && Object(It.f)(e.currentUser) === e.inContextAuthor.username,
				At = e => e.authorFlair || Lt(e) && e.userFlairData.applied || null,
				Ft = _.a.wrapped(St.a, "Section", Rt.a),
				Dt = _.a.div("CheckboxText", Rt.a);
			class Bt extends l.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(Y.subredditById)(t, this.props.subredditId)
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
						previewFlair: At(e),
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
					} = e.displaySettings, r = this.state.showFlair !== a, o = At(this.props);
					if (!n.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(Et.b)(s, t, o);
					return !(i || c !== Et.a.NoChanges || !r) || i
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
					} = s, c = this.canSave(), d = Lt(e);
					return l.a.createElement(xt.a, null, l.a.createElement(vt.a, {
						onClosePressed: e.closeModal,
						title: Object(Se.c)("Select your community flair")
					}), l.a.createElement(yt.a, {
						flair: t.previewFlair,
						flairTemplateType: Mt.d.UserFlair,
						placeholderText: Object(Se.c)("u/username")
					}), r && l.a.createElement(Ot.a, {
						flair: t.previewFlair,
						flairTemplateType: Mt.d.UserFlair,
						subredditId: n,
						templates: o,
						templateIds: i,
						onChange: this.setSelectedFlair
					}), d && l.a.createElement(Ft, null, l.a.createElement(wt.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: l.a.createElement(Dt, null, l.a.createElement(ue.c, null, "Show my user flair on this community"))
					})), l.a.createElement("div", {
						className: Rt.a.buttonsRow
					}, l.a.createElement(jt.f, {
						disabled: !c,
						onClick: this.onApply
					}, Object(Se.c)("Apply")), a && l.a.createElement(jt.i, {
						className: Rt.a.clearButton,
						onClick: this.onClear
					}, Object(Se.c)("Clear Flair"))))
				}
			}
			const Ut = Object(m.b)(() => Object(h.c)({
				authorFlair: kt.b,
				currentUser: Q.i,
				inContextAuthor: kt.c,
				isMod: (e, t) => !!Object(Nt.j)(e, t),
				userFlairData: _t.c
			}), (e, t) => ({
				activeFlairChanged: (s, n, a, r) => e(Object(Pt.o)(s, n, a, r.username, t.subredditId)),
				closeModal: () => e(Object(Ct.b)({
					username: null,
					subredditId: null
				}))
			}))(Bt);
			var Ht = Object(lt.a)(Object(de.b)(Ut)),
				Gt = s("./src/reddit/selectors/activeModalId.ts"),
				qt = s("./src/reddit/selectors/notificationPrefs.ts"),
				Wt = s("./src/reddit/selectors/platform.ts"),
				Vt = s("./src/reddit/selectors/removalReasons.ts"),
				Qt = s("./src/reddit/selectors/subredditModeration.ts"),
				zt = s("./src/reddit/constants/cookie.ts"),
				Zt = s("./src/reddit/featureFlags/index.ts"),
				Kt = s("./src/reddit/helpers/localStorage/index.ts"),
				Yt = s("./src/reddit/helpers/toggleBodyScroll/index.ts");

			function Jt() {
				return (Jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Xt = Object(h.c)({
				anyModalIsOpen: e => !!e.activeModalId,
				authorContext: kt.c,
				badgePurchaseModalIsOpen: Object(Gt.b)(pt.a.BADGE_PURCHASE),
				banContext: Qt.f,
				banModalIsOpen: Object(Gt.b)(pt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Gt.b)(pt.a.BLADE_NIGHTMODE),
				chatroomSettingsModalIsOpen: Object(Gt.b)(pt.a.SUBREDDIT_CHAT_SETTINGS),
				createChatroomModalIsOpen: Object(Gt.b)(pt.a.CREATE_SUBREDDIT_CHAT),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				currentPaymentTarget: e => e.economics.currentPaymentTarget,
				currentSubredditPremiumCorrelationId: e => e.economics.currentModalArgs ? e.economics.currentModalArgs.correlationId : void 0,
				economicsSupportPaymentModalIsOpen: Object(Gt.b)(pt.a.ECONOMY_SUPPORT_MODAL),
				editChatroomModalIsOpen: Object(Gt.b)(pt.a.EDIT_SUBREDDIT_CHAT),
				deleteChatroomModalIsOpen: Object(Gt.b)(pt.a.DELETE_SUBREDDIT_CHAT),
				introModalFeatureEnabled: e => Zt.d.introModal(e),
				isOverlayOpen: Wt.h,
				manageChatroomModalIsOpen: Object(Gt.b)(pt.a.MANAGE_SUBREDDIT_CHAT),
				moderatorPermissions: e => {
					const t = Object(Wt.d)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Qt.C,
				muteModalIsOpen: Object(Gt.b)(pt.a.MUTE_USER),
				notificationsPrePromptIsOpen: qt.c,
				removalReasonContext: Vt.b,
				removalReasonModalIsOpen: Object(Gt.b)(pt.a.ADD_REMOVAL_REASON),
				subredditId: Wt.d,
				subredditPremiumPurchaseModalOpen: Object(Gt.b)(pt.a.SUBREDDIT_PREMIUM_PURCHASE_MODAL),
				userFlairModalIsOpen: Object(Gt.b)(pt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: Q.u,
				userInRedesignBeta: Q.A,
				userIsLoggedIn: Q.G,
				userIsMod: Q.H,
				userIsNew: Q.I
			});
			class $t extends l.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Xe.a)()) return; {
						const e = Je.a.get(zt.a);
						e && Je.a.remove(zt.a, {
							domain: T.a.cookieDomain
						});
						const t = Object(Kt.r)(pt.a.ALPHA_CONSUMER);
						t && Object(Kt.C)(pt.a.ALPHA_CONSUMER), (e || t) && Object(Kt.T)(pt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, s = Object(Kt.r)(pt.a.REDESIGN_MODAL);
					!e && s ? t() : e && !s && Object(Kt.T)(pt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), this.props.anyModalIsOpen ? setTimeout(() => Object(Yt.a)(), 500) : setTimeout(() => Object(Yt.b)(), 500)
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
						notificationsPrePromptIsOpen: C,
						removalReasonContext: P,
						removalReasonModalIsOpen: v,
						sendEvent: x,
						subredditId: y,
						subredditPremiumPurchaseModalOpen: O,
						toggleBanModal: E,
						toggleMuteModal: j,
						toggleRemovalReasonsModal: w,
						userFlairModalIsOpen: S
					} = this.props, M = (e, t, s) => n => () => x(a => ({
						source: e,
						action: "click",
						noun: n,
						comment: s && Object(Y.comment)(a, s),
						post: s && Object(Y.post)(a, s),
						screen: Object(Y.screen)(a),
						subreddit: Object(Y.subredditById)(a, t)
					}));
					return l.a.createElement(d.Fragment, null, n && s && l.a.createElement(tt.a, {
						contextId: s.contextId,
						subredditId: s.subredditId,
						toggleModal: E,
						trackAddEvent: M("banned", s.subredditId, s.contextId)("add_in_context"),
						trackEventWithName: M("banned", s.subredditId, s.contextId),
						username: s.username
					}), f && g && l.a.createElement(ot.a, {
						contextId: g.contextId,
						subredditId: g.subredditId,
						toggleModal: j,
						trackAddEvent: M("muted", g.subredditId, g.contextId)("add_in_context"),
						username: g.username
					}), (o || b || h || p || r) && y && l.a.createElement(rt, {
						subredditId: y,
						withOverlay: !0
					}), v && P && l.a.createElement(dt, {
						itemIds: P.itemIds,
						subredditId: P.subredditId,
						toggleModal: w,
						trackClick: M("removal_reasons", P.subredditId, 1 === P.itemIds.length ? P.itemIds[0] : void 0)
					}), a && y && l.a.createElement(ft, {
						subredditId: y
					}), S && e && e.subredditId && l.a.createElement(Ht, {
						subredditId: e.subredditId
					}), t && i && l.a.createElement(et, {
						withOverlay: !0,
						productId: i
					}), C && l.a.createElement(it, null), u && c && l.a.createElement(nt, Jt({
						withOverlay: !0
					}, c)), O && l.a.createElement(st, {
						ignoreDefaultFocus: !0,
						withOverlay: !0,
						correlationId: m
					}))
				}
			}
			var es = Object(m.b)(Xt, e => ({
				markRedesignModalAsClosed: () => e(Object($e.j)()),
				toggleBanModal: () => e(Object($e.i)(pt.a.BAN_USER)),
				toggleBladeNightmodeModal: () => e(Object($e.i)(pt.a.BLADE_NIGHTMODE)),
				toggleMuteModal: () => e(Object($e.i)(pt.a.MUTE_USER)),
				toggleRemovalReasonsModal: () => e(Object($e.i)(pt.a.ADD_REMOVAL_REASON))
			}))(Object(de.b)($t));
			const ts = {},
				ss = () => null;

			function ns(e, t) {
				if (e in ts) throw new Error("Modal with id ".concat(e, " already registered!"));
				ts[e] = t
			}
			var as = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				rs = s("./src/reddit/components/AccountManagerModal/index.m.less"),
				os = s.n(rs);
			const is = _.a.div("Overlay", os.a),
				cs = _.a.div("IframeContainer", os.a),
				ds = Object(h.c)({
					frontpageSignupVariant: q.a
				}),
				ls = {
					[j.ChangePassword]: pt.a.CHANGE_PASSWORD_MODAL_ID,
					[j.Index]: pt.a.LOGIN_MODAL_ID,
					[j.Register]: pt.a.REGISTER_MODAL_ID,
					[j.EnableTwoFactor]: pt.a.ENABLE_TWO_FACTOR,
					[j.DisableTwoFactor]: pt.a.DISABLE_TWO_FACTOR,
					[j.TwoFactorBackupCodes]: pt.a.TWO_FACTOR_BACKUP_CODES
				};
			class ms extends l.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === j.Register && Object(q.f)(this.props.frontpageSignupVariant) && as.a.throttleFeature(A.C), this.props.sendEvent(me(this.subscriptions))
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						path: t
					} = this.props, s = Object(q.c)(e) || Object(q.d)(e);
					return l.a.createElement(is, null, l.a.createElement(cs, {
						className: s && os.a.small
					}, l.a.createElement(ce, {
						onClose: this.closeModal,
						onSubscriptionsChanged: this.updateSubscriptions,
						path: t,
						showCloseButton: !s
					})))
				}
			}
			const us = Object(m.b)(ds, (e, t) => ({
				closeModal: t => {
					e(Object($e.g)(ls[t]))
				}
			}))(Object(de.b)(ms));
			ns(pt.a.CHANGE_PASSWORD_MODAL_ID, e => l.a.createElement(us, {
				path: j.ChangePassword
			})), ns(pt.a.LOGIN_MODAL_ID, e => l.a.createElement(us, {
				path: j.Index
			})), ns(pt.a.ENABLE_TWO_FACTOR, e => l.a.createElement(us, {
				path: j.EnableTwoFactor
			})), ns(pt.a.DISABLE_TWO_FACTOR, e => l.a.createElement(us, {
				path: j.DisableTwoFactor
			})), ns(pt.a.TWO_FACTOR_BACKUP_CODES, e => l.a.createElement(us, {
				path: j.TwoFactorBackupCodes
			})), ns(pt.a.REGISTER_MODAL_ID, e => l.a.createElement(us, {
				path: j.Register
			}));
			const ps = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("BadgePickerModal").then(s.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.BADGE_PICKER, e => l.a.createElement(ps, {
				withOverlay: !0
			}));
			const hs = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestPendingModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.CONTRIBUTOR_REQUEST_PENDING, e => l.a.createElement(hs, {
				withOverlay: !0
			}));
			const bs = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestRequestModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.CONTRIBUTOR_REQUEST, e => l.a.createElement(bs, {
				withOverlay: !0
			}));
			const gs = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~EconHelperActions~SubredditPremiumBadgeManagement"), s.e("SubredditPremiumBadgeManagement")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => l.a.createElement(gs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const fs = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("SubredditPremiumUploadModal")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => l.a.createElement(fs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Cs = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("HarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.HARBERGER_TAX_BANNER_MANAGE, e => l.a.createElement(Cs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ps = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("HarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.HARBERGER_TAX_BANNER_PURCHASE, e => l.a.createElement(Ps, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const vs = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("CryptoHarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => l.a.createElement(vs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const xs = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("CryptoHarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => l.a.createElement(xs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ys = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceOptOutModal").then(s.bind(null, "./src/reddit/components/Governance/OptOutModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.GOVERNANCE_OPT_OUT, e => l.a.createElement(ys, null));
			const Os = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~GovernanceReleaseNotesModal"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("GovernanceReleaseNotesModal")]).then(s.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.GOVERNANCE_RELEASE_NOTES, e => l.a.createElement(Os, {
				withOverlay: !0
			}));
			const Es = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("GovernanceTransferPointsModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.TRANSFER_POINTS, e => l.a.createElement(Es, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const js = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.WALLET_REGISTRATION_MODAL, e => l.a.createElement(js, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ws = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ModToMemberShareModal").then(s.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.MOD_TO_MEMBER_SHARE, e => l.a.createElement(ws, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ss = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditAddSubredditModal").then(s.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.MULTIREDDIT_ADD_SUBREDDIT, e => l.a.createElement(Ss, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ms = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditCreateModal").then(s.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.MULTIREDDIT_CREATE, e => l.a.createElement(Ms, {
				onOverlayClick: e,
				withOverlay: !0
			})), ns(pt.a.MULTIREDDIT_DUPLICATE, e => l.a.createElement(Ms, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Is = Object(O.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditEditModal").then(s.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			ns(pt.a.MULTIREDDIT_EDIT, e => l.a.createElement(Is, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ks = Object(O.a)({
				getComponent: () => Object(E.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("PainterModalLoader")]).then(s.bind(null, "./src/reddit/components/PainterModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			ns(pt.a.PAINTER_MODAL, e => l.a.createElement(ks, {
				withOverlay: !0,
				toggleModal: e
			}));
			const Ns = () => null,
				_s = Object(O.a)({
					ErrorComponent: Ns,
					getComponent: () => Object(E.a)(() => s.e("GlobalModalContainer").then(s.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Ns
				});
			ns(pt.a.PINNED_POSTS_LIMIT_REACHED, e => l.a.createElement(_s, null));
			var Ts = s("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Rs = s.n(Ts);
			const {
				fbt: Ls
			} = s("./node_modules/fbt/lib/FbtPublic.js"), As = _.a.h2("ColumnLabel", Rs.a), Fs = _.a.wrapped(St.a, "ColumnWrapper", Rs.a), Ds = _.a.div("Column", Rs.a), Bs = _.a.div("Description", Rs.a), Us = _.a.div("Key", Rs.a), Hs = _.a.wrapped(ut.j, "ModalMain", Rs.a), Gs = _.a.wrapped(ut.c, "ModalBody", Rs.a), qs = _.a.wrapped(jt.f, "PrimaryButton", Rs.a), Ws = _.a.wrapped(ht.a, "TextButton", Rs.a), Vs = Object(m.b)(null, e => ({
				closeModal: () => e(Object($e.i)(pt.a.KEYBOARD_SHORTCUTS))
			})), Qs = _.a.wrapped(Object(lt.a)(Vs(e => l.a.createElement(Gs, {
				onClick: e => e.stopPropagation()
			}, l.a.createElement(ut.g, null, l.a.createElement(bt.a, null, l.a.createElement(ut.n, null, Ls._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), l.a.createElement(Ws, {
				onClick: e.closeModal
			}, l.a.createElement(ut.b, null)))), l.a.createElement(Hs, null, l.a.createElement(Fs, null, l.a.createElement(Ds, null, l.a.createElement(St.a, null, l.a.createElement(As, null, Ls._("Navigation", null, {
				hk: "3zSWEe"
			}))), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), l.a.createElement(Us, null, "Shift + ?")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Next post or comment", null, {
				hk: "1m8s9z"
			})), l.a.createElement(Us, null, "J")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), l.a.createElement(Us, null, "K")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), l.a.createElement(Us, null, "N")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), l.a.createElement(Us, null, "P")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Open post", null, {
				hk: "2wD7mh"
			})), l.a.createElement(Us, null, "Enter")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Open/close expando", null, {
				hk: "1yDst0"
			})), l.a.createElement(Us, null, "X")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Go to post link", null, {
				hk: "c0TNr"
			})), l.a.createElement(Us, null, "L"))), l.a.createElement(Ds, null, l.a.createElement(St.a, null, l.a.createElement(As, null, Ls._("Action", null, {
				hk: "3QI6pT"
			}))), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Upvote", null, {
				hk: "5i9NP"
			})), l.a.createElement(Us, null, "A")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Downvote", null, {
				hk: "1ef3YP"
			})), l.a.createElement(Us, null, "Z")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("New post", null, {
				hk: "4dtNWf"
			})), l.a.createElement(Us, null, "C")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Reply to comment", null, {
				hk: "G8AbT"
			})), l.a.createElement(Us, null, "R")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Submit comment/post", null, {
				hk: "13agk7"
			})), l.a.createElement(Us, null, "Ctrl + Enter")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Save", null, {
				hk: "3Dtwo5"
			})), l.a.createElement(Us, null, "S")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Hide", null, {
				hk: "2Dn9GF"
			})), l.a.createElement(Us, null, "H")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Open navigation", null, {
				hk: "QdGe2"
			})), l.a.createElement(Us, null, "Q")), l.a.createElement(St.a, null, l.a.createElement(Bs, null, Ls._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), l.a.createElement(Us, null, "Enter"))))), l.a.createElement(ut.e, null, l.a.createElement(qs, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, Ls._("Close", null, {
				hk: "2R1HDp"
			})))))), "ConnectedModal", Rs.a);
			ns(pt.a.KEYBOARD_SHORTCUTS, e => l.a.createElement(Qs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const zs = Object(O.a)({
				getComponent: () => Object(E.a)(() => s.e("SpezModalLoader").then(s.bind(null, "./src/reddit/components/SpezModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			ns(pt.a.SPEZ_MODAL, e => l.a.createElement(zs, {
				withOverlay: !0,
				toggleModal: e
			}));
			const Zs = Object(h.c)({
					allowNavigationCallback: Wt.a
				}),
				Ks = Object(m.b)(Zs, e => ({
					closeModal: () => e(Object($e.i)(pt.a.BLADE_UNSAVED_CHANGES)),
					closeBlade: () => e(Object(mt.a)())
				}));
			class Ys extends l.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return l.a.createElement(ut.c, null, l.a.createElement(ut.g, null, l.a.createElement(bt.a, null, l.a.createElement(ut.n, null, l.a.createElement(ue.c, null, "Discard unsaved changes before leaving?")), l.a.createElement(ht.a, {
						onClick: this.onCancelClick
					}, l.a.createElement(ut.b, null)))), l.a.createElement(ut.j, null, l.a.createElement(ut.m, null, l.a.createElement(ue.c, null, "You have made some changes to your community, do you wish to leave this menu without saving?"))), l.a.createElement(ut.e, null, l.a.createElement(ut.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, l.a.createElement(ue.c, null, "Cancel")), l.a.createElement(ut.o, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, l.a.createElement(ue.c, null, "Discard"))))
				}
			}
			const Js = Object(lt.a)(Ks(Ys));
			ns(pt.a.BLADE_UNSAVED_CHANGES, e => l.a.createElement(Js, {
				withOverlay: !0
			}));
			const Xs = Object(h.c)({
					activeModalId: Gt.a
				}),
				$s = Object(m.b)(Xs, e => ({
					toggleModal: t => e(Object($e.i)(t))
				})),
				en = 500,
				tn = () => {};
			class sn extends l.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					this.props.activeModalId ? setTimeout(() => Object(Yt.a)(), en) : setTimeout(() => Object(Yt.b)(), en)
				}
				componentWillUnmount() {
					Object(Yt.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					var t;
					return ((t = e) && t in ts ? ts[t] : ss)(e ? this.toggleModal : tn)
				}
			}
			var nn = $s(sn),
				an = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				rn = s("./src/reddit/actions/page.ts"),
				on = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/app/strings/index.ts")),
				cn = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				dn = s("./src/reddit/components/ProfileIcon/index.m.less"),
				ln = s.n(dn);

			function mn(e) {
				return l.a.createElement("img", {
					alt: Object(Se.c)("Profile icon"),
					src: e.iconUrl || "".concat(T.a.assetPath, "/img/placeholder_gradient_light-280.png"),
					className: Object(b.a)(ln.a.img, e.className)
				})
			}
			var un = s("./src/reddit/components/SEOTitle/index.tsx"),
				pn = s("./src/reddit/components/SubredditIcon/index.tsx"),
				hn = s("./src/reddit/icons/svgs/All/index.tsx");

			function bn(e) {
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
			var gn = s("./src/reddit/icons/svgs/Coin/index.tsx"),
				fn = s("./src/reddit/icons/svgs/Envelope/index.tsx"),
				Cn = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				Pn = s("./src/reddit/constants/colors.ts"),
				vn = function(e, t) {
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
					} = e, n = vn(e, ["className", "isBadged"]);
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
						fill: s ? Object(he.a)(n).body : "none"
					}), l.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "3",
						fill: s ? Pn.a.orangered : "none"
					}))
				}),
				yn = s("./src/reddit/icons/svgs/Moderate/index.tsx");

			function On() {
				return (On = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var En, jn = e => l.a.createElement("svg", On({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), l.a.createElement("path", {
					d: "M17,5H6A1,1,0,0,0,5,6V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V6A1,1,0,0,0,17,5ZM7,7.5A.5.5,0,0,1,7.5,7h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM15.5,16h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5H13a.5.5,0,0,1,0-1h2.5a.5.5,0,0,1,0,1Z"
				}), l.a.createElement("path", {
					d: "M6,4h9.47a2.09,2.09,0,0,1,.51.07V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H4.09A2.09,2.09,0,0,1,4,15.49V6A2,2,0,0,1,6,4Z"
				})),
				wn = e => {
					let {
						className: t
					} = e;
					return l.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg"
					}, l.a.createElement("polygon", {
						points: "12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6"
					}))
				},
				Sn = s("./src/reddit/icons/svgs/Post/index.tsx"),
				Mn = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				In = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				kn = s("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Nn = s.n(kn);
			! function(e) {
				e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModMailBeta = "ModMailBeta", e.ModQueue = "ModQueue", e.Multi = "Multi", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(En || (En = {}));
			const _n = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [s, n] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return l.a.createElement(l.a.Fragment, null, s && "".concat(s, "/"), n && l.a.createElement(un.b, {
					type: un.a.HeaderSelector
				}, n))
			};
			var Tn = s("./src/lib/objectSelector/index.ts"),
				Rn = s("./src/reddit/constants/wiki.ts"),
				Ln = s("./src/reddit/contexts/PageLayer/index.tsx"),
				An = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Fn = s("./src/reddit/selectors/subreddit.ts"),
				Dn = s("./src/reddit/selectors/topic.ts");
			var Bn = Object(Tn.a)((e, t) => {
					let {
						pageLayer: s
					} = t;
					const n = !!e.user.account,
						a = Object(Ln.S)(s);
					switch (a) {
						case "index":
						case "listing":
							return n ? {
								type: En.Home
							} : {
								type: En.Popular
							};
						case "modListing":
							return {
								type: En.ModListing
							};
						case "modQueuePages":
							return {
								type: En.ModQueue
							};
						case "postCreation":
							return {
								type: En.CreatePost
							};
						case "postDraft":
							return {
								type: En.ViewDraft
							};
						case "subredditCreation":
							return {
								type: En.SubredditCreation
							};
						case "coins":
							return {
								type: En.Coins
							};
						case "premium":
							return {
								type: En.Premium
							};
						case "appeal":
							return {
								type: En.Appeal
							};
						case "report":
							return {
								type: En.Report
							};
						case "userDataRequest":
							return {
								type: En.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: En.DailyCharts
							};
						case "topic": {
							const t = Object(Ln.s)(s),
								n = t && Object(Dn.c)(e, t, !0);
							if (n) return {
								type: En.Topic,
								model: n
							}
						}
					}
					const r = e.user.account;
					if (r) switch (a) {
						case "inboxPages":
							return {
								type: En.Inbox, model: r
							};
						case "settings":
							return {
								type: En.Settings, model: r
							}
					}
					const o = Object(Ln.M)(e, {
						pageLayer: s
					});
					if ("all" === o) return {
						type: En.All
					};
					if ("popular" === o) return {
						type: En.Popular
					};
					const i = Object(Ln.q)(e, {
						pageLayer: s
					});
					if (i) return "searchResults" === a ? {
						type: En.CommunitySearch,
						model: i
					} : {
						type: En.Community,
						model: i
					};
					const c = Object(Ln.d)(e, {
						pageLayer: s
					});
					if (c) return {
						type: En.Multi,
						model: c
					};
					const d = Object(Ln.j)(e, {
						pageLayer: s
					});
					if (d) return {
						type: En.UserProfile,
						model: d
					};
					const l = Object(Ln.h)(s);
					if (l) return {
						type: En.UserProfileName,
						name: "u/".concat(l)
					};
					if (a && "searchResults" === a) return {
						type: En.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(Ln.n)(e, {
								pageLayer: s
							}) || Rn.e,
							n = Object(Fn.y)(e, {
								subredditName: t
							});
						if (n) return {
							type: En.Community,
							model: n
						}
					}
					return "rpan" === a && Object(An.a)(e) ? {
						type: En.PublicAccessNetwork
					} : {
						type: En.Unknown
					}
				}),
				Un = (s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				Hn = s("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				Gn = s.n(Hn);

			function qn() {
				return (qn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function Wn(e) {
				const t = e.icon,
					s = e.text,
					n = {
						id: e.id,
						role: "menuitem",
						children: l.a.createElement(l.a.Fragment, null, l.a.createElement(t, {
							className: Gn.a.icon
						}), l.a.createElement(s, {
							className: Gn.a.text
						})),
						className: Object(b.a)(Gn.a.item, e.className, {
							[Gn.a.mFocused]: !!e.isFocused,
							[Gn.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return n["aria-label"] = e.to || e.label, e.to ? e.externalLink ? l.a.createElement("a", qn({}, n, {
					href: e.to,
					target: "_blank"
				})) : l.a.createElement(an.a, qn({}, n, {
					to: e.to
				})) : l.a.createElement("button", n)
			}
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var Vn = s("./src/reddit/helpers/overlay/index.ts"),
				Qn = s("./src/reddit/routes/modListing/index.ts"),
				zn = s("./src/reddit/selectors/multireddit.ts"),
				Zn = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				Kn = s("./src/lib/LinkedListMap/index.ts");
			const Yn = Object(h.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(zn.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				language: e => e.user.language,
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(zn.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var Jn;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Jn || (Jn = {}));
			const Xn = [(e, t) => ({
					id: En.Employee,
					type: Jn.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(xn, {
								className: Object(b.a)(t, Nn.a.itemIcon)
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
				$n = [(e, t) => ({
					id: En.All,
					type: Jn.GenericLink,
					model: {
						url: "/r/all/",
						displayText: Object(on.a)(t, "subscriptions.all"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(hn.a, {
								className: Object(b.a)(t, Nn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ue.c, null, "All"))
						}
					},
					telemetryNoun: "all"
				}), (e, t) => ({
					id: En.DailyCharts,
					type: Jn.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: Un.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(Cn.a, {
								className: Object(b.a)(t, Nn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, Un.fbt._("Top Communities", null, {
								hk: "1KzP9v"
							}))
						}
					},
					telemetryNoun: "daily_charts"
				})],
				ea = [(e, t) => ({
					id: "reddit-feeds",
					type: Jn.Header,
					model: {
						displayText: Object(on.a)(t, "subscriptions.redditFeeds")
					}
				}), (e, t, s) => ({
					id: En.Home,
					type: Jn.GenericLink,
					model: {
						url: "/",
						displayText: Object(on.a)(t, "header.home"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(xn, {
								className: Object(b.a)(t, Nn.a.itemIcon),
								isBadged: s && s.isBadged
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ue.c, null, "Home"))
						}
					},
					telemetryNoun: "home"
				}), (e, t) => ({
					id: En.Popular,
					type: Jn.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: Object(on.a)(t, "subscriptions.popular"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(wn, {
								className: Object(b.a)(t, Nn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ue.c, null, "Popular"))
						}
					},
					telemetryNoun: "popular"
				}), ...$n],
				ta = [(e, t) => ({
					id: "reddit-feeds",
					type: Jn.Header,
					model: {
						displayText: Object(on.a)(t, "subscriptions.redditFeeds")
					}
				}), () => ({
					id: En.Home,
					type: Jn.GenericLink,
					model: {
						url: "/",
						displayText: Un.fbt._("Popular", null, {
							hk: "BiNJj"
						}),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(wn, {
								className: Object(b.a)(t, Nn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, Un.fbt._("Popular", null, {
								hk: "BiNJj"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...$n],
				sa = [(e, t) => ({
					id: "reddit-other",
					type: Jn.Header,
					model: {
						displayText: Object(on.a)(t, "subscriptions.otherFeeds")
					}
				}), (e, t) => ({
					id: En.Settings,
					type: Jn.GenericLink,
					model: {
						url: "/settings",
						displayText: Object(on.a)(t, "header.settings"),
						icon: t => {
							let {
								className: s
							} = t;
							return l.a.createElement(mn, {
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
							}, l.a.createElement(ue.c, null, "User Settings"))
						}
					},
					telemetryNoun: "settings"
				}), (e, t) => ({
					id: En.Inbox,
					type: Jn.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: Object(on.a)(t, "header.messages"),
						icon: t => {
							let {
								className: s
							} = t;
							return l.a.createElement(mn, {
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
							}, l.a.createElement(ue.c, null, "Messages"))
						}
					},
					telemetryNoun: "mail"
				}), (e, t) => ({
					id: En.CreatePost,
					type: Jn.GenericLink,
					model: {
						url: "/submit",
						displayText: Object(on.a)(t, "header.newPost"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(Sn.a, {
								className: Object(b.a)(t, Nn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ue.c, null, "Create Post"))
						}
					},
					telemetryNoun: "create_post"
				})],
				na = [(e, t) => ({
					id: En.Coins,
					type: Jn.GenericLink,
					model: {
						url: "/coins",
						displayText: Object(on.a)(t, "header.coins"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(gn.a, {
								className: Object(b.a)(t, Nn.a.itemCoin)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ue.c, null, "Coins"))
						}
					},
					telemetryNoun: "coins"
				}), (e, t) => ({
					id: En.Premium,
					type: Jn.GenericLink,
					model: {
						url: "/premium",
						displayText: Object(on.a)(t, "header.premium"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(Mn.a, {
								className: Object(b.a)(t, Nn.a.itemPremium)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ue.c, null, "Premium"))
						}
					},
					telemetryNoun: "premium"
				})],
				aa = [(e, t) => ({
					id: En.ModQueue,
					type: Jn.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: Object(on.a)(t, "header.modQueue"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(yn.a, {
								className: Object(b.a)(t, Nn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ue.c, null, "Mod Queue"))
						}
					},
					telemetryNoun: "mod_queue"
				}), (e, t) => ({
					id: En.ModMailBeta,
					type: Jn.GenericLink,
					model: {
						url: "https://mod.reddit.com/mail/all",
						displayText: Object(on.a)(t, "header.modMailBeta"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(fn.a, {
								className: Object(b.a)(t, Nn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ue.c, null, "Modmail Beta"))
						}
					},
					telemetryNoun: "modmail_beta"
				}), (e, t) => ({
					id: En.ModMail,
					type: Jn.GenericLink,
					model: {
						url: "/message/moderator",
						displayText: Object(on.a)(t, "header.modMail"),
						icon: e => {
							let {
								className: t
							} = e;
							return l.a.createElement(fn.a, {
								className: Object(b.a)(t, Nn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return l.a.createElement("span", {
								className: t
							}, l.a.createElement(ue.c, null, "Modmail"))
						}
					},
					telemetryNoun: "modmail"
				})];

			function ra(e, t, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Jn.Header,
					model: {
						displayText: Object(on.a)(s, "subscriptions.subscriptions")
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Jn.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Jn.Header,
					model: {
						displayText: Object(on.a)(s, "subscriptions.profiles")
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Jn.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var oa = s("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				ia = s.n(oa);

			function ca(e) {
				return l.a.createElement("div", {
					className: Object(b.a)(ia.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var da = s("./src/reddit/actions/subscription/index.ts"),
				la = s("./src/reddit/helpers/trackers/customFeeds.ts"),
				ma = e => {
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
				ua = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				pa = s.n(ua);

			function ha() {
				return (ha = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ba = Object(h.c)({
					currentUser: Q.i,
					hideNSFWPref: Q.y,
					isLoggedIn: Q.G
				}),
				ga = Object(m.b)(ba, (e, t) => ({
					toggleFavorite: s => {
						switch (s.stopPropagation(), s.preventDefault(), t.type) {
							case Jn.Subreddit:
								e(Object(da.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Jn.Profile:
								e(Object(da.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Jn.Multi:
								e(Object(da.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(la.f)(t.model.url)) : t.sendEvent(Object(la.c)(t.model.url))
						}
					}
				}));
			var fa = Object(de.b)(ga((function(e) {
					const t = {
						className: Object(b.a)(pa.a.item, e.className, {
							[pa.a.mFocused]: !!e.isFocused
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
						case Jn.Subreddit:
							return l.a.createElement(an.a, ha({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), l.a.createElement(pn.b, {
								className: pa.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), l.a.createElement("span", {
								className: pa.a.text
							}, e.model.displayText), e.isLoggedIn && l.a.createElement("div", {
								onClick: e.toggleFavorite
							}, l.a.createElement(ma, {
								className: Object(b.a)(pa.a.favorite, {
									[pa.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Jn.SubredditAutocomplete:
							return l.a.createElement(an.a, ha({}, t, {
								"aria-label": e.model.name,
								to: "/r/".concat(e.model.name, "/")
							}), l.a.createElement(pn.b, {
								className: pa.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), l.a.createElement("span", {
								className: pa.a.text
							}, e.model.name));
						case Jn.Multi:
							return l.a.createElement(an.a, ha({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), l.a.createElement("img", {
								src: e.model.icon,
								className: pa.a.customFeedIcon
							}), l.a.createElement("span", {
								className: pa.a.text
							}, e.model.displayText), e.isLoggedIn && l.a.createElement("div", {
								onClick: e.toggleFavorite
							}, l.a.createElement(ma, {
								className: Object(b.a)(pa.a.favorite, {
									[pa.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Jn.Profile:
							return l.a.createElement(an.a, ha({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), l.a.createElement(mn, {
								className: pa.a.icon,
								iconUrl: e.hideNSFWPref ? "".concat(T.a.assetPath, "/img/avatar_over18_square.png") : e.model.icon.url
							}), l.a.createElement("span", {
								className: pa.a.text
							}, e.model.displayText), e.isLoggedIn && l.a.createElement("div", {
								onClick: e.toggleFavorite
							}, l.a.createElement(ma, {
								className: Object(b.a)(pa.a.favorite, {
									[pa.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Ca = s("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Pa = s.n(Ca);

			function va(e) {
				return l.a.createElement("div", {
					className: e.className
				}, l.a.createElement("div", {
					className: Pa.a.header
				}), l.a.createElement("div", {
					className: Pa.a.item
				}), l.a.createElement("div", {
					className: Pa.a.item
				}), l.a.createElement("div", {
					className: Pa.a.item
				}), l.a.createElement("div", {
					className: Pa.a.item
				}))
			}
			var xa = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				ya = s("./src/reddit/actions/multireddit/index.ts"),
				Oa = s("./src/reddit/actions/subreddit.ts"),
				Ea = s("./src/reddit/constants/keycodes.ts"),
				ja = s("./src/reddit/helpers/trackers/coins.ts"),
				wa = s("./src/reddit/helpers/trackers/premium.ts"),
				Sa = s("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Ma = s.n(Sa);

			function Ia() {
				return (Ia = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function ka(e) {
				return e.id === En.ModMail || (e.id === En.ModMailBeta || e.id === En.CreateCommunity)
			}

			function Na(e) {
				const t = new Kn.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Jn.Header && e.type !== Jn.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const _a = Object(h.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const s = Yn(e),
							n = s.language,
							a = new Kn.a("id");
						if (s.account) {
							const r = s.account;
							ea.forEach(e => a.push(e(r, n))), r.isEmployee && Xn.forEach(e => a.push(e(r, n))), Object(An.a)(e) && a.push({
								id: En.PublicAccessNetwork,
								type: Jn.GenericClickable,
								model: {
									onClick: () => {
										t(Object(Vn.a)(D.c[D.b.Rpan]))
									},
									displayText: Object(on.a)(n, "header.publicAccessNetwork"),
									icon: e => {
										let {
											className: t
										} = e;
										return l.a.createElement(In.a, {
											className: Object(b.a)(t, Nn.a.itemPublicAccessNetwork)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return l.a.createElement("span", {
											className: t
										}, l.a.createElement(ue.c, null, "Reddit Public Access Network"))
									}
								},
								telemetryNoun: "public_access_network"
							}), (s.favoriteSubreddits.length || s.favoriteProfiles.length || s.favoriteMultireddits.length) && (a.push({
								id: "header-favorites",
								type: Jn.Header,
								model: {
									displayText: Object(on.a)(n, "subscriptions.favorites")
								}
							}), s.favoriteSubreddits.forEach(e => a.push({
								id: "fav" + e.id,
								type: Jn.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteProfiles.forEach(e => a.push({
								id: "fav" + e.id,
								type: Jn.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteMultireddits.forEach(e => a.push({
								id: "fav" + e.url,
								type: Jn.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.multisPending ? a.push({
								id: "multis-pending",
								type: Jn.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.multis.length > 0 && (a.push({
								id: "header-multis",
								type: Jn.Header,
								model: {
									displayText: Object(Se.c)("Custom feeds"),
									button: e => {
										let {
											className: s,
											sendClickEvent: n
										} = e;
										return l.a.createElement("button", {
											onClick: () => {
												t(Object($e.i)(pt.a.MULTIREDDIT_CREATE)), n()
											},
											className: Object(b.a)(s, Nn.a.multiPlusButton)
										}, l.a.createElement(Zn.a, {
											className: Nn.a.multiPlusIcon
										}))
									},
									buttonTelemetryNoun: "create_new_custom_feed"
								}
							}), s.multis.forEach(e => a.push({
								id: e.url,
								type: Jn.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.moderatingSubredditsPending ? a.push({
								id: "moderatingSubreddits-pending",
								type: Jn.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.moderatingSubreddits.length && (a.push({
								id: "header-moderating",
								type: Jn.Header,
								model: {
									displayText: Object(on.a)(n, "subscriptions.moderatingFull")
								}
							}), a.push({
								id: En.ModListing,
								type: Jn.GenericLink,
								model: {
									url: Qn.a,
									displayText: Object(on.a)(n, "header.modListing"),
									icon: e => {
										let {
											className: t
										} = e;
										return l.a.createElement(yn.a, {
											className: Object(b.a)(t, Nn.a.itemModQueue)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return l.a.createElement("span", {
											className: t
										}, l.a.createElement(ue.c, null, "r/Mod"))
									}
								},
								telemetryNoun: "r_mod"
							}), s.moderatingSubreddits.forEach(e => a.push({
								id: "mod" + e.id,
								type: Jn.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), s.subscriptionsPending ? a.push({
								id: "subscriptions-pending",
								type: Jn.LoadingState,
								model: {
									displayText: ""
								}
							}) : ra(a, s, n), sa.forEach(e => a.push(e(r, n))), Object(Q.Z)(e) && a.push({
								id: En.CreateCommunity,
								type: Jn.GenericLink,
								model: {
									url: "https://www.reddit.com/subreddits/create",
									displayText: Object(on.a)(n, "header.createCommunity"),
									icon: e => {
										let {
											className: t
										} = e;
										return l.a.createElement(Sn.a, {
											className: Object(b.a)(t, Nn.a.itemIcon)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return l.a.createElement("span", {
											className: t
										}, l.a.createElement(ue.c, null, "Create Community"))
									}
								},
								telemetryNoun: "create_community"
							}), na.forEach(e => a.push(e(r, n))), r.isMod && aa.forEach(e => a.push(e(r, n)))
						} else s.subscriptions.length || Object(Q.G)(e) ? ea.forEach(e => a.push(e(null, n))) : ta.forEach(e => a.push(e(null, n))), a.push({
							id: "reddit-other",
							type: Jn.Header,
							model: {
								displayText: Object(on.a)(n, "subscriptions.otherFeeds")
							}
						}), na.forEach(e => a.push(e(null, n))), ra(a, s, n);
						return a
					}
				}),
				Ta = e => ({
					onHomeClicked: () => e(Object(rn.x)()),
					onGotoUrl: t => e(Object(p.b)(t)),
					onSubredditsRequested: () => {
						e(Object(da.e)()), e(Object(Oa.q)()), e(Object(ya.g)())
					},
					onActionDispatched: t => e(t)
				}),
				Ra = (e, t, s) => Object.assign({}, e, t, s, {
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class La extends l.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							s = this.getList(t, this.props),
							n = Na(s),
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
								e && e.type !== Jn.Header && e.type !== Jn.LoadingState && (this.fireTelemetryForListItem(e), e.type === Jn.GenericClickable ? e.model.onClick() : ka(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
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
							case En.Coins:
								ja.f(), t = ja.e();
								break;
							case En.Premium:
								wa.g(), t = wa.f()
						}
						switch (e.type) {
							case Jn.Category:
							case Jn.GenericLink:
							case Jn.GenericClickable:
							case Jn.Multi:
							case Jn.Profile:
							case Jn.Subreddit:
								this.props.sendEvent(s => Object.assign({}, Object(Y.defaults)(s), t ? {
									correlationId: t
								} : null, {
									customFeed: e.type === Jn.Multi ? Object(Y.customFeedByPath)(s, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Jn.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
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
						focusOrder: Na(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = l.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						s = this.getList(t, e),
						n = Na(s);
					this.setState({
						focusOrder: n,
						renderableList: s
					})
				}
				getList(e, t) {
					if (e) {
						const s = new Kn.a("id"),
							n = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Jn.Category:
								case Jn.GenericLink:
								case Jn.Multi:
								case Jn.Profile:
								case Jn.Subreddit:
									e.model.displayText.match(n) && s.push(e);
									break;
								case Jn.Header: {
									const t = s.last();
									t && t.type === Jn.Header && s.pop(), s.push(e);
									break
								}
								case Jn.LoadingState:
							}
						});
						const a = s.last();
						return a && a.type === Jn.Header && s.pop(), s
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
						"aria-label": t && t.model.displayText ? "".concat(t.model.displayText, " ").concat(Un.fbt._("selected", null, {
							hk: "QqrSS"
						})) : ""
					}), l.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": Un.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: Ma.a.filter,
						id: "header-subreddit-filter",
						placeholder: Un.fbt._("Filter", null, {
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === En.Home && this.props.onHomeClicked(), e.type === Jn.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case Jn.GenericClickable:
								return l.a.createElement(Wn, Ia({}, s, {
									className: Ma.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Jn.Category:
							case Jn.GenericLink:
								return l.a.createElement(Wn, Ia({}, s, {
									externalLink: ka(e),
									className: Ma.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Jn.Header: {
								const s = e.model.button;
								return l.a.createElement(ca, {
									className: Ma.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								}, e.model.displayText, s && l.a.createElement(s, {
									className: Ma.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Jn.LoadingState:
								return l.a.createElement(va, {
									className: Ma.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								});
							case Jn.Multi:
								return l.a.createElement(fa, Ia({}, s, {
									className: Ma.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Jn.Multi
								}));
							case Jn.Profile:
								return l.a.createElement(fa, Ia({}, s, {
									className: Ma.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Jn.Profile
								}));
							case Jn.Subreddit:
								return l.a.createElement(fa, Ia({}, s, {
									className: Ma.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Jn.Subreddit
								}))
						}
					}))
				}
			}
			const Aa = Object(m.b)(_a, Ta, Ra)(Object(de.b)(La)),
				Fa = Object(m.b)(_a, Ta, Ra)(Object(de.b)(Object(xa.b)(La)));
			var Da = s("./src/reddit/actions/shortcuts.ts"),
				Ba = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Ua = e => l.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, l.a.createElement("path", {
					d: "M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z"
				}), l.a.createElement("path", {
					d: "M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z"
				}));
			var Ha = s("./src/reddit/selectors/userPrefs.ts");
			const Ga = Object(Ln.t)({
					isCommentsPage: Ln.w,
					pageLayer: e => e
				}),
				qa = Object(h.c)({
					currentPage: Bn,
					hideNSFWPref: Q.y,
					isDropdownOpen: e => e.header.isSubscriptionsDropdownOpen,
					isLoggedIn: Q.G,
					isOverlayOpen: Wt.h,
					isPinnedSubscriptionsMenuDisabled: Ha.a,
					isSubscriptionsPinned: Ha.b,
					language: e => e.user.language
				});
			class Wa extends l.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Da.r)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
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
					return this.state.preventFocus !== t.preventFocus || (!(!this.props.isDropdownOpen && !e.isDropdownOpen) || (e.currentPage !== this.props.currentPage || e.isSubscriptionsPinned !== this.props.isSubscriptionsPinned))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						currentPage: e,
						className: t,
						hideNSFWPref: s,
						isCommentsPage: n,
						isLoggedIn: a,
						isOverlayOpen: r,
						language: o
					} = this.props, i = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, c = r || !a && n;
					return l.a.createElement("div", {
						"aria-label": Object(Se.c)("Start typing to filter your communities or use up and down to select."),
						className: Object(b.a)(Nn.a.container, t, {
							[Nn.a.mOpen]: i,
							[Nn.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[Nn.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, l.a.createElement("button", {
						className: Nn.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, l.a.createElement("span", {
						className: Nn.a.containerText
					}, function(e, t) {
						switch (e.type) {
							case En.All:
								return _n(Object(on.a)(t, "subscriptions.all"));
							case En.Appeal:
								return _n(Object(on.a)(t, "header.appeal"));
							case En.Coins:
								return _n(Object(on.a)(t, "header.coins"));
							case En.Community:
								return _n(e.model.displayText, !0);
							case En.CommunitySearch:
								return _n(Object(on.a)(t, "search.restrictToSubreddit"));
							case En.CreateCommunity:
								return _n(Object(on.a)(t, "header.createCommunity"));
							case En.CreatePost:
								return _n(Object(on.a)(t, "header.newPost"));
							case En.DailyCharts:
								return _n(Object(Se.c)("Top Communities"));
							case En.GlobalSearch:
								return _n(Object(on.a)(t, "search.globalName"));
							case En.Home:
								return _n(Object(on.a)(t, "header.home"));
							case En.Inbox:
								return _n(Object(on.a)(t, "header.messages"));
							case En.ModListing:
								return _n(Object(on.a)(t, "header.modListing"));
							case En.ModMail:
								return _n(Object(on.a)(t, "header.modMail"));
							case En.ModMailBeta:
								return _n(Object(on.a)(t, "header.modMailBeta"));
							case En.ModQueue:
								return _n(Object(on.a)(t, "header.modQueue"));
							case En.Multi:
								return _n(e.model.displayText, !0);
							case En.Popular:
								return _n(Object(on.a)(t, "subscriptions.popular"));
							case En.Premium:
								return _n(Object(on.a)(t, "header.premium"));
							case En.PublicAccessNetwork:
								return _n(Object(on.a)(t, "header.publicAccessNetwork"));
							case En.Report:
								return _n(Object(on.a)(t, "header.report"));
							case En.Settings:
								return _n(Object(on.a)(t, "header.settings"));
							case En.SubredditCreation:
								return _n(Object(on.a)(t, "header.subredditCreation"));
							case En.Topic:
								return _n(e.model);
							case En.Unknown:
								return _n("");
							case En.UserDataRequest:
								return _n(Object(on.a)(t, "header.userDataRequest"));
							case En.UserProfile:
								return _n(e.model.displayText, !0);
							case En.UserProfileName:
								return _n(e.name, !0);
							case En.ViewDraft:
								return _n(Object(on.a)(t, "header.viewDraft"))
						}
					}(e, o)), function(e, t) {
						switch (e.type) {
							case En.All:
								return l.a.createElement(hn.a, {
									className: Nn.a.defaultIcon
								});
							case En.Appeal:
								return l.a.createElement(Sn.a, {
									className: Nn.a.defaultIcon
								});
							case En.Coins:
								return l.a.createElement(gn.a, {
									className: Nn.a.coinIcon
								});
							case En.Community:
							case En.CommunitySearch: {
								const s = Object(cn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return l.a.createElement(pn.b, {
									className: Nn.a.subredditIcon,
									iconUrl: s.url,
									primaryColor: s.color
								})
							}
							case En.CreateCommunity:
							case En.CreatePost:
								return l.a.createElement(Sn.a, {
									className: Nn.a.defaultIcon
								});
							case En.DailyCharts:
								return l.a.createElement(Cn.a, {
									className: Nn.a.defaultIcon
								});
							case En.GlobalSearch:
								return l.a.createElement(bn, {
									className: Nn.a.defaultIcon
								});
							case En.Home:
								return l.a.createElement(xn, {
									className: Nn.a.defaultIcon
								});
							case En.Inbox:
							case En.Settings:
								return l.a.createElement(mn, {
									className: Nn.a.icon,
									iconUrl: e.model.accountIcon
								});
							case En.ModListing:
								return l.a.createElement(yn.a, {
									className: Nn.a.modQueueIcon
								});
							case En.SubredditCreation:
								return l.a.createElement(Sn.a, {
									className: Nn.a.defaultIcon
								});
							case En.ModMail:
							case En.ModMailBeta:
								return l.a.createElement(fn.a, {
									className: Nn.a.modQueueIcon
								});
							case En.ModQueue:
								return l.a.createElement(yn.a, {
									className: Nn.a.modQueueIcon
								});
							case En.Multi:
								return l.a.createElement("img", {
									src: e.model.icon,
									className: Nn.a.customFeedIcon
								});
							case En.Popular:
								return l.a.createElement(wn, {
									className: Nn.a.defaultIcon
								});
							case En.Premium:
								return l.a.createElement(Mn.a, {
									className: Nn.a.premiumIcon
								});
							case En.PublicAccessNetwork:
								return l.a.createElement(In.a, {
									className: Nn.a.publicAccessNetworkIcon
								});
							case En.Report:
								return l.a.createElement(Sn.a, {
									className: Nn.a.defaultIcon
								});
							case En.Unknown:
								return l.a.createElement("div", {
									className: Nn.a.unknownIcon
								});
							case En.UserDataRequest:
								return l.a.createElement(Sn.a, {
									className: Nn.a.defaultIcon
								});
							case En.UserProfile: {
								const s = Object(cn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return l.a.createElement(mn, {
									className: Nn.a.icon,
									iconUrl: s.url
								})
							}
							case En.UserProfileName:
								return l.a.createElement("div", {
									className: Nn.a.defaultIcon
								});
							case En.ViewDraft:
								return l.a.createElement(Sn.a, {
									className: Nn.a.defaultIcon
								});
							case En.Topic:
								return l.a.createElement(jn, {
									className: Nn.a.defaultIcon
								})
						}
					}(e, s), !this.props.isSubscriptionsPinned && l.a.createElement(Ba.b, {
						className: Nn.a.caretDown
					})), i && !this.props.isPinnedSubscriptionsMenuDisabled && l.a.createElement(Ua, {
						className: Object(b.a)(Nn.a.pin, {
							[Nn.a.disabled]: c
						}),
						onClick: c ? void 0 : this.props.onPinSubscriptions
					}), i && l.a.createElement(Fa, {
						canAutofocus: !0,
						className: Nn.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var Va = Ga(Object(m.b)(qa, (e, t) => ({
					closeDropdown: () => e(Object(y.f)()),
					onLocationRefresh: (s, n) => e(Object(rn.F)(s, t.pageLayer, n)),
					onPinSubscriptions: () => {
						e(Object(y.i)()), e(Object(y.f)())
					},
					openDropdown: () => e(Object(y.g)()),
					toggleDropdown: () => e(Object(y.h)())
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onLocationClick: s => t.onLocationRefresh(s, e.isOverlayOpen)
				}))(Object(de.b)(Wa))),
				Qa = s("./src/reddit/components/JumpToContent/index.tsx"),
				za = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Za = s("./node_modules/history/esm/history.js"),
				Ka = s("./node_modules/lodash/debounce.js"),
				Ya = s.n(Ka),
				Ja = s("./node_modules/uuid/v4.js"),
				Xa = s.n(Ja),
				$a = s("./src/lib/makeSearchKey/index.ts"),
				er = s("./src/reddit/actions/post.ts"),
				tr = s("./src/reddit/actions/search.ts"),
				sr = s("./src/reddit/actions/search/trending.ts"),
				nr = s("./src/reddit/actions/tooltip.ts"),
				ar = s("./src/higherOrderComponents/asTooltip.tsx"),
				rr = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				or = s("./src/lib/search/index.ts"),
				ir = s("./src/reddit/models/Search/index.ts");
			var cr = (e, t, s, n, a, r) => {
					let o, i;
					if ("" !== n.searchQuery) {
						if (n.isTypeaheadSuggestion) o = "/".concat(n.searchQuery);
						else {
							if (i = "".concat(B.o, "=").concat(Object(or.b)(n.rawQuery || n.searchQuery)), o = "/search/", n.section === ir.c.trending && a && a.source && (i += "&source=".concat(a.source)), e && r ? (o = "/r/".concat(e.name).concat(o), i = "".concat(i, "&").concat(B.p, "=1")) : !e && n.subredditOrProfileRestrictedName && (o = "/".concat(n.subredditOrProfileRestrictedName).concat(o), i = "".concat(i, "&").concat(B.p, "=1")), t) {
								const e = t.url.split("/")[2];
								o = "/user/".concat(e, "/m/").concat(t.name).concat(o), i = "".concat(i, "&").concat(B.p, "=1&").concat(B.i, "=1")
							}
							a && a.category && (i = "".concat(i, "&").concat(B.a, "=").concat(a.category))
						}
						return {
							url: o,
							qs: i
						}
					}
				},
				dr = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				lr = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				mr = s("./src/reddit/icons/svgs/Search/index.tsx"),
				ur = s("./src/reddit/components/SearchDropdown/index.m.less"),
				pr = s.n(ur);
			const hr = Object(ar.a)(rr.b);
			class br extends l.a.Component {
				constructor() {
					super(...arguments), this.onRecentSearchItemClick = () => {
						this.props.recentSearch.isTypeaheadSuggestion ? this.props.onClearSearchQuery() : this.props.onUpdateSearchQuery(this.props.recentSearch.searchQuery), this.props.onSendDropdownClickEvent(this.props.recentSearch.searchQuery, this.props.recentSearch.searchQuery, Y.StructureType.Recent, Y.SearchDropdownNouns.Recent)
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
					} = e, i = cr(null, null, null, r), c = i && i.url, d = i && i.qs, m = d ? "".concat(c, "?").concat(d) : c, u = this.generateFullSearchQuery(r);
					let p;
					return n && (p = this.generateFullSearchQuery(n)), l.a.createElement(an.a, {
						"aria-label": r.searchQuery,
						className: Object(b.a)(pr.a.listItem, pa.a.item, s, {
							[pr.a.mFocused]: !(!n || n.section !== ir.c.recent || p !== u)
						}),
						onClick: this.onRecentSearchItemClick,
						key: u,
						role: "link",
						tabIndex: -1,
						to: m || ""
					}, r.displayInfo && r.isTypeaheadSuggestion ? r.displayInfo.iconUrl ? l.a.createElement("div", {
						className: pr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(r.displayInfo.iconUrl, "')")
						}
					}) : l.a.createElement(dr.a, {
						className: pr.a.planetIcon
					}) : l.a.createElement(mr.a, {
						className: Object(b.a)(pr.a.listItemIcon, pa.a.icon)
					}), l.a.createElement("span", {
						className: pa.a.text
					}, u), l.a.createElement("div", {
						onMouseEnter: () => o(u),
						onMouseLeave: () => o(null),
						id: u
					}, l.a.createElement(lr.a, {
						className: Object(b.a)(pr.a.listItemIcon, pr.a.mHoverable, pa.a.icon),
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), a(r)
						}
					}), l.a.createElement(hr, {
						className: pr.a.fixedTextTooltip,
						isOpen: t === u,
						text: Un.fbt._("Remove", null, {
							hk: "2P57BY"
						}),
						tooltipId: u,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					})))
				}
			}
			var gr = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				fr = s("./src/reddit/components/PostTitle/index.tsx"),
				Cr = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				Pr = s("./src/reddit/constants/adEvents.ts"),
				vr = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				xr = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				yr = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			class Or extends l.a.Component {
				constructor() {
					super(...arguments), this.transformTrendingToRecentSearch = () => {
						const e = this.props.trendingItem,
							{
								post: t,
								subredditInfo: s,
								subredditOccurrences: n
							} = e;
						return yr(e, ["post", "subredditInfo", "subredditOccurrences"])
					}, this.onTrendingItemClick = () => {
						this.props.onUpdateSearchQuery(this.props.trendingItem.searchQuery);
						const e = this.transformTrendingToRecentSearch();
						if (this.props.onSetRecentSearch(e), this.props.onSendDropdownClickEvent(this.props.trendingItem.searchQuery, this.props.trendingItem.rawQuery || "", Y.StructureType.Trending, Y.SearchDropdownNouns.Trending), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							this.props.fireAdPixelsOfType(e, Pr.a.Click)
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
					} = this.props, n = this.isSponsored(), a = cr(null, null, null, s, {
						source: n ? $a.a.PromotedTrend : $a.a.Trending
					}), r = a && a.url, o = a && a.qs, i = o ? "".concat(r, "?").concat(o) : r, c = l.a.createElement(an.a, {
						"aria-label": s.searchQuery,
						className: Object(b.a)(pr.a.listItem, pr.a.mTrending, pa.a.item, pa.a.trending, e, {
							[pr.a.mFocused]: !(!t || t.section !== ir.c.trending || s.searchQuery !== t.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: "trending-".concat(s.searchQuery),
						role: "link",
						tabIndex: -1,
						to: i || ""
					}, l.a.createElement("div", {
						className: pa.a.trendingContent
					}, n && l.a.createElement("div", {
						className: pa.a.promoted
					}, Un.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), l.a.createElement("div", null, l.a.createElement(wn, {
						className: Object(b.a)(pr.a.listItemIcon, pr.a.mTrending, pa.a.icon, pa.a.trending)
					}), l.a.createElement("span", null, l.a.createElement(fr.a, {
						className: Object(b.a)(pr.a.listItemText, pr.a.mTrending, pa.a.text, pa.a.trending),
						redditStyle: !0,
						size: fr.b.Small
					}, s.searchQuery)), s.post && l.a.createElement("div", {
						className: pr.a.postTitle
					}, s.post.title)), s.subredditInfo && l.a.createElement(vr.a, {
						className: Object(b.a)(pa.a.relatedSubredditMetaData, pr.a.listItemSubtext, {
							[pr.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: Un.fbt._("{subreddit name} and more", [Un.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(xr.a)(s.post) && l.a.createElement(gr.a, {
						post: s.post,
						removeLink: !0,
						usePreview: n
					}));
					return n ? l.a.createElement(Cr.a, {
						post: s.post,
						children: c
					}) : c
				}
			}
			var Er = s("./src/reddit/components/Flair/index.tsx");
			class jr extends l.a.Component {
				constructor() {
					super(...arguments), this.onTypeaheadSuggestionClick = () => {
						this.props.onSetRecentSearch(this.props.item), this.props.onSendDropdownClickEvent(this.props.item.searchQuery, this.props.item.searchQuery, Y.StructureType.Search, this.props.item.isProfile ? Y.SearchDropdownNouns.TypeaheadProfile : Y.SearchDropdownNouns.TypeaheadSubreddit), this.props.onClearSearchQuery()
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
					return l.a.createElement(an.a, {
						"aria-label": n.searchQuery,
						className: Object(b.a)(pr.a.listItem, pr.a.mTypeahead, pa.a.item, t, {
							[pr.a.mFocused]: !(!s || s.searchQuery !== n.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: n.searchQuery,
						role: "link",
						tabIndex: -1,
						to: "/".concat(n.searchQuery)
					}, n.displayInfo && n.displayInfo.iconUrl ? l.a.createElement("div", {
						className: pr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(n.displayInfo.iconUrl, "')")
						}
					}) : l.a.createElement(dr.a, {
						className: pr.a.planetIcon
					}), l.a.createElement("div", null, n.displayInfo && n.displayInfo.subredditOrProfileName && l.a.createElement("div", {
						className: Object(b.a)(pr.a.listItemText, pr.a.mTypeahead, pa.a.text)
					}, n.displayInfo.subredditOrProfileName), l.a.createElement("div", null, n.displayInfo && null != n.displayInfo.subscribers && l.a.createElement("div", {
						className: Object(b.a)(pr.a.listItemSubtext, pa.a.subText)
					}, Un.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [Un.fbt._plural(n.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), n.displayInfo && n.displayInfo.isNSFW && l.a.createElement(Er.b, {
						flair: {
							type: Mt.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var wr = s("./src/reddit/constants/zIndex.ts"),
				Sr = s("./src/reddit/controls/Dropdown/index.tsx");
			const {
				fbt: Mr
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ir = "SearchDropdown", kr = 5, Nr = Object(ar.a)(Sr.a);
			class _r extends l.a.Component {
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
					e.isFixed && (a.zIndex = wr.g);
					const r = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending;
					return l.a.createElement(Nr, {
						className: Object(b.a)(pr.a.dropdown, Nn.a.listContainer),
						isFixed: s,
						isOpen: e.isOpen,
						isOverlay: n,
						tooltipId: Ir,
						noFocus: !0,
						style: a
					}, e.typeaheadSuggestions.map(t => l.a.createElement(jr, {
						focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
						item: t,
						key: t.id,
						onClearSearchQuery: e.onClearSearchQuery,
						onSendDropdownClickEvent: e.onSendDropdownClickEvent,
						onSetRecentSearch: e.onSetRecentSearch,
						fireAdPixelsOfType: e.fireAdPixelsOfType
					})), r && e.recentSearches.map(s => l.a.createElement(br, {
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
					})), r && e.isInTrendingExperiment && !e.isTrendingPending && e.trendingItems && l.a.createElement("div", {
						className: Object(b.a)(pa.a.title, pr.a.listItemTitle, {
							[pr.a.mWithBorder]: !!e.recentSearches.length
						})
					}, Mr._("Trending today", null, {
						hk: "3nAMpY"
					})), (e.isTypeaheadPending || e.isTrendingPending) && l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: Object(b.a)(pr.a.loadingItem, Pa.a.item)
					}), l.a.createElement("div", {
						className: Object(b.a)(pr.a.loadingItem, Pa.a.item)
					}), l.a.createElement("div", {
						className: Object(b.a)(pr.a.loadingItem, Pa.a.item)
					}), l.a.createElement("div", {
						className: Object(b.a)(pr.a.loadingItem, Pa.a.item)
					}), l.a.createElement("div", {
						className: Object(b.a)(pr.a.loadingItem, Pa.a.item)
					})), r && e.isInTrendingExperiment && e.trendingItems.slice(0, kr).map(t => l.a.createElement(Or, {
						key: t.id,
						focusedItem: e.itemList[e.focusedItemIndex],
						fireAdPixelsOfType: e.fireAdPixelsOfType,
						onSendDropdownClickEvent: e.onSendDropdownClickEvent,
						onSetRecentSearch: e.onSetRecentSearch,
						onUpdateSearchQuery: e.onUpdateSearchQuery,
						trendingItem: t
					})))
				}
			}
			var Tr = s("./src/reddit/contexts/ApiContext.tsx"),
				Rr = s("./src/lib/makeApiRequest/index.ts"),
				Lr = s("./src/lib/omitHeaders/index.ts"),
				Ar = s("./src/reddit/constants/headers.ts");
			const Fr = (e, t) => Object(Rr.b)(Object(Lr.a)(e, [Ar.a]), {
				endpoint: "".concat(e.apiUrl, "/api/subreddit_autocomplete_v2.json"),
				method: g.cb.GET,
				data: {
					query: t
				}
			});
			var Dr = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				Br = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const Ur = e => {
				const t = [],
					s = {};
				return e.forEach(e => {
					const n = e.data,
						a = e.kind;
					a === g.wb.Subreddit ? (t.push(n.name), s[n.name] = Object(Br.a)(n)) : a === g.wb.Account && (t.push(n.subreddit.name), s[n.subreddit.name] = Object(Dr.a)(n.subreddit, n.name))
				}), {
					data: s,
					order: t
				}
			};
			var Hr = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Gr = s("./src/reddit/helpers/isArrayEqual.ts"),
				qr = s("./src/reddit/helpers/trackers/searchResults.ts"),
				Wr = s("./src/reddit/selectors/experiments/trending.ts");
			const Vr = e => Object(Q.D)(e) || A.Ib.Treatment1 === Object(W.c)(e, {
				experimentEligibilitySelector: W.a,
				experimentName: A.Fb
			});
			var Qr = s("./src/reddit/selectors/searchResults.ts"),
				zr = s("./src/reddit/selectors/tooltip.ts"),
				Zr = s("./src/reddit/selectors/trending.ts"),
				Kr = s("./src/reddit/controls/Search/index.m.less"),
				Yr = s.n(Kr);
			const Jr = Object(Ln.t)({
					searchQuery: Ln.T,
					pageLayer: e => e
				}),
				Xr = (e, t, s) => e(e => Object.assign({}, Object(qr.b)(e), {
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(Hr.c)(Hr.a.SearchResults),
					actionInfo: Y.actionInfo(e),
					search: Y.search(e, s)
				})),
				$r = Object(m.b)(() => Object(h.c)({
					currentSubredditName: Wt.e,
					currentUser: Q.i,
					dropdownIsOpen: Object(zr.b)(Ir),
					typeaheadIdsByQuery: Qr.c,
					isInTrendingExperiment: Wr.a,
					isInTypeaheadExperiment: Vr,
					isLoggedIn: Q.G,
					isSubredditSearchAllowed: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(Ln.J)(s)
					},
					language: Q.P,
					multireddit: Ln.d,
					routeName: Wt.q,
					subreddit: Ln.q,
					trendingItems: Zr.a,
					typeaheadSuggestions: Qr.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(sr.b)()),
					fireAdPixelsOfType: (t, s) => e(Object(er.y)(t, s)),
					onChange: t => e(Object(tr.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(tr.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(p.b)(t)),
					onSearch: (t, s, n) => {
						e(Object(p.b)(Object(Za.c)({
							pathname: t,
							search: s,
							state: {
								fromPage: n
							}
						})))
					},
					onToggleDropdown: () => e(Object(nr.h)({
						tooltipId: Ir
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(tr.i)(t))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onSearch: (n, a) => {
						n.preventDefault();
						const {
							currentUser: r = null
						} = e, o = cr(e.subreddit, e.multireddit, r, a, s.searchOptions, e.isSubredditSearchAllowed);
						if (!o) return;
						const i = o.url,
							c = o.qs,
							d = {
								routeName: e.routeName,
								subredditName: e.currentSubredditName
							};
						t.onSearch(i, c, d)
					},
					onFocusSearchBar: () => {
						Object(Hr.c)(Hr.a.SearchResults) || Object(Hr.d)(Hr.a.SearchResults);
						const e = s.searchOptions || Object($a.c)({});
						Xr(s.sendEvent, Y.OriginElement.SearchBar, e)
					}
				}));
			class eo extends l.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await Fr(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = Ur(e.body.data.children);
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
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(Kt.D)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(Kt.Y)(Object.assign({}, e, {
								section: ir.c.recent
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
					}, this.onFetchTypeaheadSuggestions = Ya()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery) {
							let t = Object.assign({}, ir.a);
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = Xa()()), this.props.typeaheadSuggestions && t.isTypeaheadSuggestion ? this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, Y.StructureType.Search, t.isProfile ? Y.SearchDropdownNouns.TypeaheadProfile : Y.SearchDropdownNouns.TypeaheadSubreddit) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, Y.StructureType.Search, Y.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									s = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									n = !!this.props.subreddit && this.props.subreddit.isNSFW,
									a = ir.b.text;
								t = {
									id: Xa()(),
									searchQuery: this.state.searchQuery,
									type: a,
									section: ir.c.recent,
									subredditOrProfileRestrictedName: s,
									displayInfo: {
										iconUrl: e,
										isNSFW: n
									}
								}
							}
							this.onSetRecentSearch(t), this.close(), this.props.onSearch(e, t)
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
						this.props.sendEvent(Object(qr.l)(n, a))
					}, this.onSendDropdownViewEvent = (e, t, s, n) => {
						const a = {
							displayQuery: s,
							rawQuery: n || s,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(qr.m)(e, a))
					}, this.onKeyDown = e => {
						if (e.key === Ea.b.Escape && this.close(), e.key === Ea.b.Tab && this.close(), e.key === Ea.b.ArrowDown) {
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
						if (e.key === Ea.b.ArrowUp) {
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
								const e = Object(Kt.w)(this.props.currentUser.id);
								e.length > 0 && (this.setState({
									recentSearches: this.props.isLoggedIn ? e : [],
									itemList: [...e, ...this.props.trendingItems]
								}), e.forEach(e => {
									this.onSendDropdownViewEvent(Y.SearchDropdownNouns.Recent, Y.StructureType.Recent, e.searchQuery)
								})), this.props.trendingItems.length > 0 && this.props.trendingItems.forEach(e => {
									this.onSendDropdownViewEvent(Y.SearchDropdownNouns.Trending, Y.StructureType.Trending, e.searchQuery)
								})
							}
							this.props.onToggleDropdown()
						}
					}, this.onFormSubmit = e => {
						e.preventDefault(), this.onSearch(e);
						const t = this.props.searchOptions || Object($a.c)({});
						t.q || (t.q = this.state.searchQuery), Xr(this.props.sendEvent, "full_search_button", t)
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
					const t = Object(Gr.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						s = Object(Gr.a)(e.trendingItems, this.props.trendingItems);
					if (this.props.searchQuery !== e.searchQuery || !t || !s) {
						const n = this.props.typeaheadSuggestions.length ? this.props.typeaheadSuggestions : [...this.state.recentSearches, ...this.props.trendingItems];
						this.setState(() => {
							const t = {
								itemList: n
							};
							return this.props.searchQuery !== e.searchQuery && (t.searchQuery = this.props.searchQuery || ""), t
						}), !t && this.props.typeaheadSuggestions.length && this.props.typeaheadSuggestions.forEach(e => {
							this.onSendDropdownViewEvent(e.isProfile ? Y.SearchDropdownNouns.TypeaheadProfile : Y.SearchDropdownNouns.TypeaheadSubreddit, Y.StructureType.Search, e.searchQuery)
						}), !s && this.props.trendingItems.length && this.state.fetchedTrending && this.props.trendingItems.forEach(e => {
							this.onSendDropdownViewEvent(Y.SearchDropdownNouns.Trending, Y.StructureType.Trending, e.searchQuery)
						})
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return l.a.createElement("div", {
						className: Object(b.a)(Yr.a.relativeWrapper, Nn.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: Ir,
						ref: this.setContainerRef
					}, l.a.createElement("label", {
						className: Yr.a.iconContainer,
						htmlFor: "header-search-bar"
					}, l.a.createElement(mr.a, {
						className: Yr.a.icon
					})), l.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						method: "get",
						onSubmit: this.onFormSubmit,
						onFocus: e.onFocusSearchBar,
						role: "search"
					}, l.a.createElement("input", {
						id: "header-search-bar",
						name: "q",
						className: Yr.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: Un.fbt._("Search", null, {
							hk: "44xF6n"
						}),
						type: "search",
						value: this.state.searchQuery
					})), !e.subreddit && l.a.createElement(_r, {
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
						typeaheadSuggestions: e.typeaheadSuggestions,
						fireAdPixelsOfType: e.fireAdPixelsOfType
					}))
				}
			}
			var to = Object(de.b)(Jr(Object(Tr.b)($r(eo)))),
				so = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				no = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				ao = s("./src/reddit/icons/svgs/LayerLogo/index.m.less"),
				ro = s.n(ao);

			function oo() {
				return (oo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var io, co = e => l.a.createElement("svg", oo({
					viewBox: "0 0 80 80",
					className: ro.a.icon
				}, e), l.a.createElement("path", {
					d: "M76.4 55.5l-1.7-.9L44 70c-2.2 1.1-5.9 1.1-8.1 0L5.3 54.7l-1.7.9c-2.2 1.1-2.2 2.9 0 4L36 75.7c2.2 1.1 5.9 1.1 8.1 0l32.4-16.2c2.1-1.1 2.1-2.9-.1-4z"
				}), l.a.createElement("path", {
					d: "M77.3 41l-15.4-7.7 15.4-7c2.5-1.2 2.8-2.9 2.8-3.6 0-.7-.3-2.4-2.8-3.6L44.8 4.4c-2.8-1.3-6.9-1.3-9.7 0L2.8 19.1C.3 20.2 0 22 0 22.7c0 .7.3 2.4 2.8 3.6l15.4 7L2.7 41C1 41.8 0 43.2 0 44.7s1 2.9 2.7 3.7l32.4 16.2c1.4.7 3.2 1 4.9 1s3.5-.4 4.9-1l32.4-16.2c1.7-.9 2.7-2.2 2.7-3.7s-1-2.9-2.7-3.7zM4.2 22.7c.1 0 .1-.1.2-.1L36.8 7.9c1.7-.8 4.8-.8 6.5 0l32.4 14.7c.1 0 .1.1.2.1-.1 0-.1.1-.2.1L43.2 37.5c-1.7.8-4.8.8-6.5 0L4.4 22.7h-.2z"
				})),
				lo = s("./src/reddit/components/Header/QuickLinks/index.m.less"),
				mo = s.n(lo);
			! function(e) {
				e.All = "header-quicklinks-all", e.Popular = "header-quicklinks-popular", e.News = "header-quicklinks-news", e.Rpan = "header-quicklinks-rpan", e.Layer = "header-quicklinks-layer"
			}(io || (io = {}));
			const uo = Object(h.c)({
				isLoggedIn: e => !!e.user.account,
				showRPANlogo: An.a,
				showLayersEmbedLogo: Zt.d.layersEmbedQuickLink
			});
			var po = Object(m.b)(uo, e => ({
					openStream: () => e(Object(Vn.a)(D.c[D.b.Rpan])),
					toggleTooltip: t => e(Object(nr.h)({
						tooltipId: t
					}))
				}))(Object(de.b)((function(e) {
					return l.a.createElement("div", {
						className: Object(b.a)(mo.a.container, e.className)
					}, l.a.createElement("div", {
						className: mo.a.row
					}, l.a.createElement(an.a, {
						className: mo.a.icon,
						id: io.Popular,
						to: e.isLoggedIn ? D.c[D.b.Popular] : D.c[D.b.Home],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "popular"
						})),
						onMouseEnter: () => e.toggleTooltip(io.Popular),
						onMouseLeave: () => e.toggleTooltip(io.Popular)
					}, l.a.createElement(wn, null), l.a.createElement(rr.c, {
						caretOnTop: !0,
						tooltipId: io.Popular,
						text: Un.fbt._("Popular", null, {
							hk: "1Kx4va"
						})
					})), l.a.createElement(an.a, {
						className: mo.a.icon,
						id: io.All,
						to: D.c[D.b.All],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "all"
						})),
						onMouseEnter: () => e.toggleTooltip(io.All),
						onMouseLeave: () => e.toggleTooltip(io.All)
					}, l.a.createElement(hn.a, null), l.a.createElement(rr.c, {
						caretOnTop: !0,
						tooltipId: io.All,
						text: Un.fbt._("All", null, {
							hk: "1Rk1yU"
						})
					})), e.showRPANlogo && l.a.createElement(an.a, {
						className: mo.a.icon,
						id: io.Rpan,
						to: D.c[D.b.Rpan],
						onClick: t => {
							(t => {
								t.stopPropagation(), t.preventDefault(), e.openStream()
							})(t), e.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
								source: "nav",
								action: "click",
								noun: "public_access_network"
							}))
						},
						onMouseEnter: () => e.toggleTooltip(io.Rpan),
						onMouseLeave: () => e.toggleTooltip(io.Rpan)
					}, l.a.createElement(In.a, null), l.a.createElement(rr.c, {
						caretOnTop: !0,
						tooltipId: io.Rpan,
						text: Un.fbt._("Reddit Public Access Network", null, {
							hk: "38uXOo"
						})
					})), e.showLayersEmbedLogo && l.a.createElement(an.a, {
						className: mo.a.icon,
						id: io.Layer,
						to: D.c[D.b.Layer],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "layer"
						})),
						onMouseEnter: () => e.toggleTooltip(io.Layer),
						onMouseLeave: () => e.toggleTooltip(io.Layer)
					}, l.a.createElement(co, null), l.a.createElement(rr.c, {
						caretOnTop: !0,
						tooltipId: io.Layer,
						text: Un.fbt._("r/Layer in partnership with Adobe", null, {
							hk: "36V7Nc"
						})
					}))))
				}))),
				ho = s("./src/reddit/actions/login.ts"),
				bo = s("./src/reddit/helpers/trackers/authControls.ts"),
				go = s("./src/chat/helpers/dom.ts"),
				fo = s("./src/reddit/actions/chat/toggle.ts"),
				Co = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				Po = s("./src/reddit/actions/postCreation/general.ts"),
				vo = s("./src/reddit/actions/users.ts"),
				xo = s("./src/reddit/components/Settings/modalIds.ts");
			var yo = Object(O.a)({
					getComponent: () => Object(E.a)(() => s.e("EmailVerificationModals").then(s.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Oo = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Eo = s("./src/reddit/components/Translated/index.tsx"),
				jo = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				wo = s("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				So = s.n(wo);
			class Mo extends l.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(jo.e)(jo.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(jo.c)(jo.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(jo.e)(jo.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					Mo.shouldSendViewEvent && (Mo.shouldSendViewEvent = !1, this.props.sendEvent(Object(jo.g)(jo.a)))
				}
				render() {
					return l.a.createElement("div", {
						className: So.a.container
					}, l.a.createElement("div", {
						className: So.a.topLine
					}), l.a.createElement("button", {
						className: So.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, l.a.createElement(H.a, {
						className: So.a.closeIcon
					})), l.a.createElement("h5", {
						className: So.a.title
					}, l.a.createElement(Eo.a, {
						msgId: "header.emailVerificationTooltip.title"
					})), l.a.createElement("p", {
						className: So.a.subtitle
					}, this.props.email), l.a.createElement("p", {
						className: So.a.description
					}, l.a.createElement(Eo.a, {
						msgId: "header.emailVerificationTooltip.description"
					})), l.a.createElement("div", {
						className: So.a.buttonWrapper
					}, l.a.createElement(jt.i, {
						className: So.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, l.a.createElement(Eo.a, {
						msgId: "header.emailVerificationTooltip.buttons.updateEmail"
					})), l.a.createElement(jt.f, {
						className: Object(b.a)(So.a.commonBtn, So.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, l.a.createElement(Eo.a, {
						msgId: "header.emailVerificationTooltip.buttons.gotIt"
					}))))
				}
			}
			Mo.shouldSendViewEvent = !0;
			const Io = Object(Oo.a)(Mo, [xa.a.Click, xa.a.Keydown, xa.a.Resize]);
			var ko = Object(de.b)(Io),
				No = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				_o = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts")),
				To = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				Ro = s("./src/reddit/controls/LoadingIcon/index.tsx");
			let Lo;
			const Ao = () => Lo,
				Fo = () => Lo = Xa()(),
				Do = "gold_top_nav",
				Bo = e => t => Object.assign({
					source: "gold_top_nav",
					action: "click",
					noun: e
				}, (e => ({
					screen: Y.screen(e),
					profile: Y.profile(e),
					subreddit: Y.subreddit(e)
				}))(t)),
				Uo = e => t => Object.assign({
					source: Do,
					action: "click",
					noun: "coins_".concat(e),
					correlationId: Ao()
				}, Y.defaults(t)),
				Ho = () => e => Object.assign({
					source: Do,
					action: "click",
					noun: "premium",
					correlationId: Ao()
				}, Y.defaults(e)),
				Go = () => e => Object.assign({
					source: Do,
					action: "view",
					noun: "dropdown",
					correlationId: Ao()
				}, Y.defaults(e));
			var qo = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				Wo = s("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				Vo = s.n(Wo);
			var Qo = e => {
					const {
						className: t,
						buttonSubText: s,
						buttonText: n,
						goldStyle: a,
						onClick: r,
						primaryText: o,
						subText: i,
						subtextCrossout: c
					} = e, d = a ? jt.c : jt.f;
					return l.a.createElement("div", {
						className: Object(b.a)(t, Vo.a.CompactCoinPurchaseListItem)
					}, l.a.createElement("div", {
						className: Vo.a.productSection
					}, l.a.createElement("span", {
						className: Vo.a.primaryText
					}, o), l.a.createElement("span", {
						className: Object(b.a)(Vo.a.subText, {
							[Vo.a.crossout]: c
						})
					}, Array.isArray(i) ? i.map((e, t) => l.a.createElement("p", {
						key: t
					}, e)) : i)), l.a.createElement("div", {
						className: Vo.a.priceSection
					}, l.a.createElement(d, {
						className: Object(b.a)(Vo.a.button, {
							[Vo.a.goldStyle]: a
						}),
						redditStyle: !0,
						onClick: r
					}, n), l.a.createElement("span", {
						className: Vo.a.buttonSubText
					}, s)))
				},
				zo = s("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				Zo = s.n(zo);
			const Ko = Object(h.c)({
				coinPackages: qo.b,
				isPremiumSubscriber: Q.q,
				purchaseCatalogError: qo.c,
				purchaseCatalogPending: qo.d
			});
			class Yo extends l.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: s,
							sendEvent: n
						} = this.props;
						t && t(), n(Uo(e.coins)), s(e)
					}, this.handleClickBuyPremium = () => {
						const {
							onClick: e,
							onClickPremiumPackage: t,
							sendEvent: s
						} = this.props;
						e && e(), s(Ho()), t()
					}, e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog()
				}
				getListItemData() {
					const {
						coinPackages: e,
						isPremiumSubscriber: t,
						sorted: s
					} = this.props, n = e.map(e => {
						const {
							baselineCoins: t,
							coins: s,
							pennies: n,
							bonusPct: a
						} = e, r = s.toLocaleString(), o = Un.fbt._("{number of coins} Coins", [Un.fbt._param("number of coins", r)], {
							hk: "1bO7gz"
						}), i = "$".concat(n / 100), c = a ? Un.fbt._("{percent bonus}% Bonus", [Un.fbt._param("percent bonus", a.toLocaleString())], {
							hk: "2zgjZ1"
						}) : void 0;
						let d;
						if (s !== t) {
							const e = t.toLocaleString();
							d = Un.fbt._("{number of coins of non-sale pacakge} Coins", [Un.fbt._param("number of coins of non-sale pacakge", e)], {
								hk: "30VbQ4"
							})
						}
						return {
							buttonSubText: c,
							buttonText: i,
							coinPackage: e,
							primaryText: o,
							subText: d
						}
					});
					if (s && n.sort((e, t) => {
							return (e.coinPackage ? e.coinPackage.coins : 0) - (t.coinPackage ? t.coinPackage.coins : 0)
						}), t) return n;
					const a = 1e3.toLocaleString(),
						r = 5.99.toLocaleString(),
						o = 700..toLocaleString(),
						i = {
							buttonSubText: Un.fbt._("{number of bonus coins} Bonus Coins", [Un.fbt._param("number of bonus coins", a)], {
								hk: "3qu4dU"
							}),
							buttonText: Un.fbt._("${premium price}/mo", [Un.fbt._param("premium price", r)], {
								hk: "21Ct3P"
							}),
							isGoldStyle: !0,
							primaryText: Un.fbt._("Premium", null, {
								hk: "45A9gK"
							}),
							subText: [Un.fbt._("{monthly coins} Coins/mo", [Un.fbt._param("monthly coins", o)], {
								hk: "2fh3lO"
							}), Un.fbt._("Ads free & more", null, {
								hk: "wO4Wc"
							})]
						};
					return n.concat(i)
				}
				render() {
					const {
						className: e,
						coinPackages: t,
						purchaseCatalogError: s,
						purchaseCatalogPending: n
					} = this.props;
					return n ? l.a.createElement("div", {
						className: e
					}, l.a.createElement("div", {
						className: Zo.a.loaderContainer
					}, l.a.createElement(Ro.a, {
						sizePx: 80
					}))) : s || !t.length ? l.a.createElement("div", {
						className: e
					}, l.a.createElement("div", {
						className: Zo.a.errorContainer
					}, Un.fbt._("Oops, something went wrong", null, {
						hk: "4EQRS8"
					}))) : l.a.createElement("div", {
						className: e
					}, this.getListItemData().map(e => {
						const {
							buttonSubText: t,
							buttonText: s,
							coinPackage: n,
							isGoldStyle: a,
							primaryText: r,
							subText: o
						} = e, i = n && n.coins !== n.baselineCoins;
						return l.a.createElement(Qo, {
							buttonSubText: t,
							buttonText: s,
							goldStyle: a,
							key: r,
							onClick: n ? () => this.handleClickBuyCoins(n) : this.handleClickBuyPremium,
							primaryText: r,
							subText: o,
							subtextCrossout: i
						})
					}))
				}
			}
			var Jo = Object(m.b)(Ko, e => ({
					onClickCoinPackage: t => e(Object(_o.f)({
						coinsToPurchase: t.coins
					})),
					onClickPremiumPackage: () => e(Object(To.f)(Ao())),
					requestPurchaseCatalog: () => e(Object(No.b)())
				}))(Object(de.b)(Yo)),
				Xo = s("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				$o = s.n(Xo);
			const {
				fbt: ei
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ti = Object(ar.a)(Sr.a);
			class si extends l.a.Component {
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
					e(Go())
				}
				renderDefaultHeader() {
					return l.a.createElement("div", {
						className: $o.a.header
					}, l.a.createElement("span", {
						className: $o.a.headerText
					}, ei._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), l.a.createElement(an.a, {
						className: $o.a.headerLink,
						to: "/coins"
					}, ei._("What are Coins?", null, {
						hk: "DNBPx"
					})))
				}
				renderSaleHeader() {
					const {
						activeCoinSale: e
					} = this.props;
					if (!e) return this.renderDefaultHeader();
					const {
						dropdownHeaderText: t,
						dropdownHeaderBackgroundAsset: s
					} = e;
					return l.a.createElement("div", {
						className: Object(b.a)($o.a.header, $o.a.activeSale)
					}, s && l.a.createElement("img", {
						className: Object(b.a)($o.a.saleHeaderImage, $o.a.activeSale),
						src: s
					}), l.a.createElement("span", {
						className: $o.a.headerText
					}, t))
				}
				render() {
					const {
						activeCoinSale: e,
						className: t,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: a
					} = this.props;
					return l.a.createElement(ti, {
						className: Object(b.a)(t, $o.a.CoinPurchaseDropdown, {
							[$o.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: s,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: a
					}, e ? this.renderSaleHeader() : this.renderDefaultHeader(), l.a.createElement(Jo, {
						className: $o.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			var ni = Object(de.b)(si),
				ai = s("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				ri = s("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			var oi = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				ii = s("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				ci = s.n(ii);
			const di = "COIN_PURCHASE_DROPDOWN_ID",
				li = Object(h.c)({
					activeCoinSale: qo.a,
					activeTooltipId: zr.a,
					coinPurchaseDropdownIsOpen: e => Object(zr.b)(di)(e),
					coinPurchaseModalIsOpen: oi.c,
					premiumPurchaseModalIsOpen: oi.q,
					shouldRequestCoinSale: e => {
						const t = Object(W.c)(e, {
							experimentEligibilitySelector: Q.G,
							experimentName: A.K
						});
						return !!t && !Object(A.Ob)(t)
					}
				});
			class mi extends l.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							coinPurchaseDropdownIsOpen: s,
							sendEvent: n,
							toggleTooltip: a
						} = this.props;
						s || (Fo(), Object(ai.b)(), Object(ri.b)(), n(Bo("get_coins_cta"))), a(t)
					}
				}
				componentDidMount() {
					const {
						requestActiveCoinSale: e,
						shouldRequestCoinSale: t
					} = this.props;
					t && e()
				}
				render() {
					const {
						activeCoinSale: e,
						className: t,
						closeTooltip: s,
						coinPurchaseDropdownIsOpen: n,
						coinPurchaseModalIsOpen: a,
						premiumPurchaseModalIsOpen: r
					} = this.props, o = e ? e.ctaText ? e.ctaText : Un.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : Un.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					});
					return l.a.createElement("button", {
						className: Object(b.a)(t, ci.a.ctaContainer, {
							[ci.a.activeSale]: !!e
						}),
						id: di,
						onClick: this.handleClick
					}, l.a.createElement("div", {
						className: Object(b.a)(ci.a.ctaContent, {
							[ci.a.activeSale]: !!e
						})
					}, l.a.createElement(gn.a, {
						className: Object(b.a)(ci.a.icon, {
							[ci.a.activeSale]: !!e
						})
					}), l.a.createElement("span", {
						className: ci.a.text
					}, o)), l.a.createElement(ni, {
						activeCoinSale: e,
						isOpen: n,
						onCloseTooltip: s,
						tooltipId: di
					}), a && l.a.createElement(ai.a, {
						isCompletePaypal: !1
					}), r && l.a.createElement(ri.a, null))
				}
			}
			var ui = Object(m.b)(li, (e, t) => ({
					closeTooltip: () => e(Object(nr.i)()),
					requestActiveCoinSale: () => e(Object(No.a)()),
					toggleTooltip: t => {
						e(t === di ? Object(nr.i)() : Object(nr.f)({
							tooltipId: di
						}))
					}
				}))(Object(de.b)(mi)),
				pi = s("./src/reddit/components/HeaderIconContainer/index.m.less"),
				hi = s.n(pi);

			function bi() {
				return (bi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var gi = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const fi = _.a.button("Button", hi.a),
				Ci = _.a.div("Container", hi.a);
			var Pi = e => {
					const {
						children: t,
						isOpen: s
					} = e, n = gi(e, ["children", "isOpen"]);
					return l.a.createElement(fi, bi({}, n, {
						id: e.id,
						onClick: e.onClick
					}), l.a.createElement(Ci, {
						className: Object(b.a)({
							[hi.a.isOpen]: s
						})
					}, t))
				},
				vi = s("./src/chat/helpers/unreadCount.ts"),
				xi = s("./src/chat/models/Promo/index.ts"),
				yi = s("./src/lib/prettyPrintNumber/index.ts"),
				Oi = s("./src/reddit/components/HeaderUserActions/index.m.less"),
				Ei = s.n(Oi);
			var ji = e => {
					let {
						className: t,
						isActive: s,
						unreadCount: n
					} = e;
					return s ? l.a.createElement("span", {
						className: Object(b.a)(t, Ei.a.counter, {
							[Ei.a.isHighlighted]: s && n <= 0
						})
					}, n > 0 && Object(yi.b)(n)) : null
				},
				wi = s("./src/reddit/helpers/trackers/chat.ts"),
				Si = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				Mi = s("./src/reddit/selectors/chat.ts");
			const Ii = Object(h.c)({
				promos: Mi.b,
				unreadCount: Mi.d
			});
			class ki extends d.Component {
				componentDidMount() {
					this.props.promos[xi.a.SubredditChatFtux] && this.props.sendEvent(Object(wi.j)())
				}
				render() {
					const {
						promos: e,
						unreadCount: t
					} = this.props, {
						count: s,
						unread: n
					} = Object(vi.a)(t, e);
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(ji, {
						isActive: n,
						unreadCount: s
					}), l.a.createElement(Si.a, {
						className: Object(b.a)(Ei.a.chatIcon, {
							[Ei.a.isActive]: n
						})
					}))
				}
			}
			var Ni = Object(m.b)(Ii)(Object(de.b)(ki)),
				_i = s("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Ti = s.n(_i);
			var Ri = e => {
				const {
					onCloseFlyout: t
				} = e;
				return l.a.createElement("div", {
					className: Ti.a.container
				}, l.a.createElement("p", {
					className: Ti.a.title
				}, l.a.createElement(Eo.a, {
					msgId: "header.customizeFlyout.title"
				})), l.a.createElement("h5", {
					className: Ti.a.subtitle
				}, l.a.createElement(Eo.a, {
					msgId: "header.customizeFlyout.subtitle"
				})), l.a.createElement("p", {
					className: Ti.a.description
				}, l.a.createElement(Eo.a, {
					msgId: "header.customizeFlyout.description"
				})), l.a.createElement(jt.i, {
					className: Ti.a.dismissBtn,
					onClick: t
				}, l.a.createElement(Eo.a, {
					msgId: "header.customizeFlyout.dismiss"
				})))
			};
			var Li = e => l.a.createElement(l.a.Fragment, null, l.a.createElement(ji, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), l.a.createElement(fn.a, {
					className: Object(b.a)(Ei.a.envelopeIcon, {
						[Ei.a.isUnread]: !!e.unreadCount
					})
				})),
				Ai = s("./src/reddit/actions/alpha.ts"),
				Fi = s("./src/reddit/actions/modMode.ts"),
				Di = s("./src/reddit/constants/elementClassNames.ts"),
				Bi = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Ui = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Hi = s("./src/reddit/helpers/trackers/modTools.ts");
			const Gi = e => ({
				screen: Y.screen(e),
				profile: Y.profile(e),
				subreddit: Y.subreddit(e)
			});
			var qi = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				Wi = s("./src/reddit/icons/fonts/Premium/index.tsx"),
				Vi = s("./src/reddit/icons/svgs/Help/index.tsx"),
				Qi = s("./src/reddit/icons/svgs/KarmaGray/index.m.less"),
				zi = s.n(Qi);
			var Zi = e => l.a.createElement("svg", {
					className: Object(b.a)(zi.a.karma, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("path", {
					d: "M3.37,2.75a5.9,5.9,0,0,1,5.49,3.7.62.62,0,0,1-.29.79A3.16,3.16,0,0,0,7.24,8.57a.63.63,0,0,1-.79.29,5.89,5.89,0,0,1-3.7-5.49A.62.62,0,0,1,3.37,2.75Zm8.06,4.49a.63.63,0,0,1-.29-.79,5.89,5.89,0,0,1,5.49-3.7.61.61,0,0,1,.62.6v0a5.89,5.89,0,0,1-3.7,5.49.62.62,0,0,1-.79-.29A3.16,3.16,0,0,0,11.43,7.24Zm2.12,3.9a5.89,5.89,0,0,1,3.7,5.49.62.62,0,0,1-.62.62h0a5.89,5.89,0,0,1-5.49-3.7.63.63,0,0,1,.29-.79,3.16,3.16,0,0,0,1.33-1.33A.62.62,0,0,1,13.55,11.14Zm-5,1.62a.62.62,0,0,1,.29.79,5.89,5.89,0,0,1-5.49,3.7.62.62,0,0,1-.62-.62h0a5.9,5.9,0,0,1,3.7-5.49.62.62,0,0,1,.79.29,3.1,3.1,0,0,0,1.35,1.33ZM10,5.93A7.23,7.23,0,0,0,7.51,2.82,5,5,0,0,1,9.68.09a.61.61,0,0,1,.64,0,5,5,0,0,1,2.17,2.73A7.23,7.23,0,0,0,10,5.93Zm9.91,3.75a.61.61,0,0,1,0,.64,5,5,0,0,1-2.73,2.17A7.23,7.23,0,0,0,14.07,10a7.36,7.36,0,0,0,3.11-2.49A5,5,0,0,1,19.91,9.68ZM10,14.07a7.18,7.18,0,0,0,2.5,3.11,5,5,0,0,1-2.18,2.73.61.61,0,0,1-.64,0,5,5,0,0,1-2.17-2.73A7.23,7.23,0,0,0,10,14.07ZM5.93,10a7.23,7.23,0,0,0-3.11,2.49A5,5,0,0,1,.09,10.32a.61.61,0,0,1,0-.64A5,5,0,0,1,2.82,7.51,7.23,7.23,0,0,0,5.93,10Z"
				})),
				Ki = e => l.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"
				})));
			var Yi = e => l.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, l.a.createElement("path", {
					d: "M10,8 C8.619,8 7.5,9.5 7.5,9.5 C7.5,9.5 8.619,11 10,11 C11.381,11 12.5,9.5 12.5,9.5 C12.5,9.5 11.381,8 10,8 M15.1338,14 L4.8658,14 C4.4818,14 4.2398,13.583 4.4328,13.25 L9.5678,4.357 C9.7598,4.024 10.2398,4.024 10.4328,4.357 L15.5678,13.25 C15.7598,13.583 15.5188,14 15.1338,14 M17.2748,3.038 L10.2748,1.038 C10.0948,0.987 9.9048,0.987 9.7258,1.038 L2.7258,3.038 C2.2958,3.161 1.9998,3.554 1.9998,4 L1.9998,11 C1.9998,16.688 9.4098,18.871 9.7258,18.962 C9.8158,18.987 9.9068,19 9.9998,19 C10.0928,19 10.1848,18.987 10.2748,18.962 C10.5898,18.871 17.9998,16.688 17.9998,11 L17.9998,4 C17.9998,3.554 17.7038,3.161 17.2748,3.038"
				})),
				Ji = e => l.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15,15.5 L5,15.5 C4.724,15.5 4.5,15.276 4.5,15 C4.5,12.755 6.326,10.929 8.571,10.929 L11.429,10.929 C13.674,10.929 15.5,12.755 15.5,15 C15.5,15.276 15.276,15.5 15,15.5 M10,4.5 C11.405,4.5 12.547,5.643 12.547,7.048 C12.547,8.452 11.405,9.595 10,9.595 C8.595,9.595 7.453,8.452 7.453,7.048 C7.453,5.643 8.595,4.5 10,4.5 M16,2 L4,2 C2.897,2 2,2.897 2,4 L2,16 C2,17.103 2.897,18 4,18 L16,18 C17.103,18 18,17.103 18,16 L18,4 C18,2.897 17.103,2 16,2"
				}))),
				Xi = e => l.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"
				}))),
				$i = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				ec = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				tc = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				sc = e => l.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("g", {
					fill: "inherit"
				}, l.a.createElement("path", {
					d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
				}))),
				nc = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				ac = s("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				rc = s.n(ac);
			const oc = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				ic = _.a.wrapped(Sr.a, "Dropdown", rc.a),
				cc = Object(ar.a)(ic),
				dc = e => l.a.createElement(Ui.a, {
					className: rc.a.button,
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, l.a.createElement("div", {
					className: rc.a.buttonText
				}, e.displayText), l.a.createElement(Bi.a, {
					className: rc.a.toggleSwitch,
					"data-redditstyle": !0,
					on: e.isEnabled
				})),
				lc = Object(m.b)(() => Object(h.c)({
					language: e => e.user.language,
					isModModeEnabled: Qt.t,
					isOpen: Object(zr.b)("USER_DROPDOWN_ID"),
					nightmode: Q.R,
					url: Wt.r
				}), e => ({
					toggleNightmode: t => e(Object(L.w)(t)),
					onOptIntoRedesign: () => e(Object(Ai.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Je.a.get("rseor3") && Je.a.remove("rseor3", {
							domain: T.a.cookieDomain
						}), e(Object(Ai.b)(!0))) : window.location.host = "old.reddit.com"
					},
					dispatchOpenLoginModal: () => e(Object(ho.e)()),
					logoutUser: () => e(Object(vo.s)()),
					toggleModMode: () => e(Object(Fi.b)())
				}));
			var mc = Object(Ln.t)({
					pageLayer: e => e
				})(lc(Object(de.b)(e => {
					const {
						language: t,
						logoutUser: s,
						dispatchOpenLoginModal: n,
						isModModeEnabled: a,
						nightmode: r,
						toggleModMode: o,
						user: i
					} = e, c = Object(Ui.b)(tc.a, Object(on.a)(t, "headerDropdown.userSettings"), !1), m = Object(Ui.b)(Vi.a, Object(on.a)(t, "headerDropdown.helpCenter"), !0), u = Object(Ui.b)($i.a, Object(on.a)(t, "headerDropdown.visitOldReddit"), !0), p = Object(Ui.b)(Ki, Object(on.a)(t, "headerDropdown.loginSignup")), h = Object(Ui.b)(Ki, Object(on.a)(t, "headerDropdown.logout")), g = Object(Ui.b)(sc, Object(on.a)(t, "headerDropdown.optIn"), !1), f = (e => {
						const s = e && e.coins || 0;
						return Object(on.a)(t, "gold.coinsNum", {
							num: s.toLocaleString()
						})
					})(i), C = Object(Ui.b)(gn.a, Object(on.a)(t, "headerDropdown.coins"), !1, f), P = Object(Ui.b)(Mn.a, Object(on.a)(t, "headerDropdown.premium"), !1);
					return l.a.createElement("div", {
						className: Object(b.a)(rc.a.container, Di.e)
					}, l.a.createElement(nc.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(b.a)(e.className, rc.a.inlineButton, {
							[rc.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("user")
						}
					}, l.a.createElement("span", {
						className: rc.a.accountDisplayText
					}, (e => e ? l.a.createElement("span", {
						className: Object(b.a)(rc.a.accountWrapper, rc.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && l.a.createElement("img", {
						alt: Object(Se.c)("Account icon"),
						className: rc.a.imgIcon,
						src: e.accountIcon
					}), l.a.createElement("span", {
						className: rc.a.accountDetails
					}, l.a.createElement("span", {
						className: rc.a.username
					}, e.displayText, e.isGold && l.a.createElement(Wi.a, {
						className: rc.a.premiumFontIcon,
						title: Object(Se.c)("Reddit Premium")
					})), l.a.createElement(l.a.Fragment, null, l.a.createElement("span", {
						className: rc.a.accountKarma
					}, l.a.createElement(Zi, null), l.a.createElement("span", null, (e => {
						const s = e.commentKarma + e.postKarma,
							n = Object(yi.b)(s);
						return Object(on.a)(t, "account.karmaTotal", {
							karma: n
						})
					})(e))), !!e.coins && l.a.createElement("span", {
						className: rc.a.accountCoins
					}, l.a.createElement(qi.a, {
						className: rc.a.coinFontIcon
					}), l.a.createElement("span", null, (e => Object(yi.b)(e.coins || 0))(e)))))) : l.a.createElement("span", {
						className: Object(b.a)(rc.a.accountWrapper, rc.a.isLoggedOut)
					}, l.a.createElement(ec.a, {
						className: rc.a.myProfileIcon
					})))(e.user), l.a.createElement(Ba.b, {
						className: rc.a.dropdownTriangle
					})), l.a.createElement(za.a, null, l.a.createElement(ue.c, null, "User account menu"))), l.a.createElement(cc, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, i && l.a.createElement(d.Fragment, null, l.a.createElement("h3", {
						className: rc.a.sectionHeader,
						role: "heading"
					}, l.a.createElement(ue.c, null, "My Stuff")), ((e, t) => {
						const s = Object(on.a)(t, "headerDropdown.myProfile"),
							n = Object(Ui.b)(Ji, s, !1);
						return l.a.createElement(n, {
							href: e.url
						})
					})(i, t), l.a.createElement(c, {
						href: "/settings"
					})), l.a.createElement("h3", {
						className: rc.a.sectionHeader,
						role: "heading"
					}, l.a.createElement(ue.c, null, "View Options")), i && i.isMod && l.a.createElement(dc, {
						displayText: Object(Se.c)("Mod Mode"),
						isEnabled: a,
						onClick: () => {
							e.sendEvent(Object(Hi.h)(!a)), o()
						}
					}, l.a.createElement(Yi, {
						className: rc.a.modModeIcon
					})), l.a.createElement(dc, {
						displayText: "Night Mode",
						isEnabled: r,
						onClick: () => {
							e.sendEvent((e => t => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: e ? "night_mode_off" : "night_mode_on"
							}, Gi(t)))(r)), e.toggleNightmode(!r)
						}
					}, l.a.createElement(Xi, {
						className: rc.a.nightIcon
					})), l.a.createElement("h3", {
						className: rc.a.sectionHeader,
						role: "heading"
					}, l.a.createElement(ue.c, null, "More Stuff")), l.a.createElement(d.Fragment, null, l.a.createElement(C, {
						href: "/coins",
						onClick: () => {
							ja.f(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: ja.e()
							}, Gi(e)))())
						}
					}), l.a.createElement(P, {
						href: "/premium",
						onClick: () => {
							wa.g(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: wa.f()
							}, Gi(e)))())
						}
					})), l.a.createElement(m, {
						href: "https://www.reddithelp.com"
					}), i && l.a.createElement(u, {
						href: "https://old.reddit.com" + e.url,
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: Y.screen(e),
								subreddit: Y.subreddit(e)
							}))
						}
					}), !oc && i && l.a.createElement(g, {
						href: "",
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_opt_in",
								screen: Y.screen(e),
								subreddit: Y.subreddit(e)
							})), e.onOptIntoRedesign()
						}
					}), l.a.createElement("div", {
						className: rc.a.divider
					}), i ? l.a.createElement(h, {
						href: "#",
						onClick: e => {
							s(), e.preventDefault()
						}
					}) : l.a.createElement(p, {
						href: "#",
						onClick: t => {
							Object(x.a)(t) && (t.preventDefault(), t.stopPropagation(), n(), e.sendEvent(Object(bo.b)()))
						}
					})))
				}))),
				uc = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				pc = s("./src/reddit/helpers/trackers/navigation.ts");
			const hc = "HeaderUserActions--Chat",
				bc = "email-verification-tooltip-id",
				gc = "HeaderUserActions--Messages",
				fc = "HeaderUserActions--Moderation",
				Cc = "HeaderUserActions--NewPost",
				Pc = Object(Ln.t)({
					pageLayer: e => e
				}),
				vc = Object(h.c)({
					activeDropdownId: zr.a,
					email: Q.l,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isModerator: Nt.h,
					shouldOpenEmailVerificationTooltip: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(Ln.I)(s) && !!Object(Q.l)(e) && !Object(Q.w)(e) && Object(Q.G)(e) && !Object(Q.E)(e)
					},
					unreadNotifications: Q.cb
				}),
				xc = Object(m.b)(vc, (e, t) => ({
					closeEmailVerificationTooltip: () => e(Object(Co.b)()),
					onChatClick: () => e(Object(fo.c)()),
					onDismissCustomizeFlyout: () => e(Object(L.s)()),
					onOpenModerationDropdown: () => e(Object(nr.h)({
						tooltipId: uc.a
					})),
					onOpenUserDropdown: () => e(Object(nr.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleChangeEmailModal: () => {
						e(Object(Co.b)()), e(Object($e.i)(xo.a))
					},
					toggleTooltip: t => e(Object(nr.h)({
						tooltipId: t
					})),
					resendEmail: () => e(Object(vo.y)(jo.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Po.p(t.pageLayer))
					}
				}));
			class yc extends l.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => this.props.sendEvent(Object(pc.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
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
						isCustomizeFlyoutShowing: a,
						isEmailVerificationTooltipShowing: r,
						isModerator: o,
						language: i,
						onDismissCustomizeFlyout: c,
						onOpenUserDropdown: m,
						resendEmail: u,
						shouldOpenEmailVerificationTooltip: p,
						toggleTooltip: h,
						toggleChangeEmailModal: g,
						unreadNotifications: f,
						user: C
					} = this.props, P = !(!f || !f.hasUnreadModmail && !f.hasUnreadOldModmail), v = (e, t) => l.a.createElement(rr.c, {
						caretOnTop: !0,
						tooltipId: e,
						text: t
					});
					return l.a.createElement(St.a, {
						id: bc,
						ref: e => this.container = e,
						className: t
					}, l.a.createElement(St.a, {
						className: Ei.a.headerLinks
					}, o && l.a.createElement(d.Fragment, null, l.a.createElement("span", {
						className: Ei.a.iconWrapper,
						id: fc,
						key: fc,
						onMouseEnter: () => h(fc),
						onMouseLeave: () => e === fc && h(fc)
					}, l.a.createElement(Pi, {
						"aria-expanded": e === uc.a,
						"aria-haspopup": !0,
						"aria-label": Object(Se.c)("Moderation"),
						id: uc.a,
						onClick: this.onOpenModerationDropdown,
						isOpen: e === uc.a
					}, l.a.createElement(yn.a, {
						className: Object(b.a)(Ei.a.moderateIcon, {
							[Ei.a.isLit]: P
						})
					})), v(fc, Object(on.a)(i, "header.moderation"))), l.a.createElement(uc.b, {
						className: Ei.a.moderationDropdown,
						isOpen: e === uc.a,
						key: uc.a,
						unreadNotifications: f,
						sendEventWithName: this.sendEventWithName
					})), C && l.a.createElement(d.Fragment, null, l.a.createElement("span", {
						className: Ei.a.iconWrapper,
						id: hc,
						key: hc,
						onMouseEnter: () => h(hc),
						onMouseLeave: () => e === hc && h(hc)
					}, l.a.createElement("a", {
						className: Ei.a.link,
						href: "".concat(T.a.redditUrl, "/chat"),
						onClick: Object(go.a)(this.onClickChat)
					}, l.a.createElement(Ni, null)), v(hc, Object(on.a)(i, "header.chat"))), l.a.createElement("span", {
						className: Ei.a.iconWrapper,
						id: gc,
						key: gc,
						onMouseEnter: () => h(gc),
						onMouseLeave: () => e === gc && h(gc)
					}, l.a.createElement("a", {
						className: Ei.a.link,
						href: f && f.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: this.onClickMail
					}, l.a.createElement(Li, {
						unreadCount: f && f.inboxCount || 0
					})), v(gc, Object(on.a)(i, "header.messages"))), l.a.createElement("span", {
						className: Ei.a.iconWrapper,
						id: Cc,
						key: Cc,
						onMouseEnter: () => h(Cc),
						onMouseLeave: () => e === Cc && h(Cc)
					}, l.a.createElement("button", {
						className: Ei.a.link,
						"aria-label": Object(Se.c)("Create Post"),
						onClick: this.onClickCreatePost
					}, l.a.createElement(Sn.a, {
						className: Ei.a.postIcon
					})), v(Cc, Object(on.a)(i, "header.newPost"))), l.a.createElement("span", {
						className: Ei.a.iconWrapper
					}, l.a.createElement(ui, null)))), l.a.createElement(mc, {
						className: Ei.a.headerUserDropdown,
						onClick: m,
						user: C,
						sendEventWithName: this.sendEventWithName
					}), a && l.a.createElement(Ri, {
						onCloseFlyout: c
					}), l.a.createElement(ko, {
						closeTooltip: s,
						email: n,
						isOpen: p && r,
						resendEmail: u,
						toggleChangeEmailModal: g,
						tooltipId: bc
					}), l.a.createElement(yo, {
						email: n,
						language: i,
						shouldOpenTooltip: p
					}))
				}
			}
			var Oc = Object(de.b)(Pc(xc(yc))),
				Ec = s("./src/reddit/components/Header/User/index.m.less"),
				jc = s.n(Ec);
			const wc = Object(h.c)({
					account: e => e.user.account,
					language: e => e.user.language,
					origin: K.h
				}),
				Sc = l.a.memo(e => l.a.createElement("div", {
					className: Object(b.a)(e.className, jc.a.row)
				}, !e.account && function(e) {
					const t = e.pageLayer,
						s = T.a.accountManagerOrigin,
						n = t ? t.url : "/",
						a = t && t.meta && t.meta.name === g.zb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + n);
					return l.a.createElement("div", {
						className: jc.a.loggedOutRow
					}, l.a.createElement(jt.j, {
						redditStyle: !0,
						className: Object(b.a)(jc.a.login, jc.a.button),
						href: "".concat(s, "/login/?dest=").concat(a),
						onClick: t => {
							Object(x.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(bo.a)("nav")))
						}
					}, l.a.createElement(ue.c, null, "log in")), l.a.createElement(jt.g, {
						redditStyle: !0,
						className: Object(b.a)(jc.a.separator, jc.a.register, jc.a.button),
						href: "".concat(s, "/register/?dest=").concat(a),
						onClick: t => {
							Object(x.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(bo.c)("nav")))
						}
					}, l.a.createElement(ue.c, null, "sign up")))
				}(e), l.a.createElement(Oc, {
					className: Object(b.a)({
						[jc.a.loggedOut]: !e.account
					}),
					language: e.language,
					user: e.account
				})));
			var Mc = Object(Ln.t)()(Object(m.b)(wc, e => ({
					onOpenLoginModal: () => {
						e(Object($e.k)({
							actionSource: $e.a.HeaderLogin
						})), e(Object(ho.e)())
					},
					onOpenRegisterModal: () => {
						e(Object($e.k)({
							actionSource: $e.a.HeaderSignup
						})), e(Object(ho.f)())
					}
				}))(Object(de.b)(Sc))),
				Ic = s("./src/reddit/components/Header/index.m.less"),
				kc = s.n(Ic);

			function Nc() {
				return (Nc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _c = _.a.header("HeaderDynamicStyles", kc.a),
				Tc = Object(h.c)({
					isLoggedIn: Q.G,
					isNightmode: Q.R,
					language: e => e.user.language,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Rc = Object(Ln.t)({
					categoryName: Ln.b,
					pageLayer: e => e
				}),
				Lc = e => l.a.createElement("div", {
					className: kc.a.left
				}, l.a.createElement(za.a, null, l.a.createElement(ue.c, null, "Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts")), l.a.createElement(Qa.b, null), l.a.createElement(an.a, {
					"aria-label": Object(Se.c)("Home"),
					className: kc.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, l.a.createElement(so.a, {
					className: kc.a.snoo
				}), l.a.createElement(no.a, {
					className: kc.a.wordmark
				})), e.children),
				Ac = e => l.a.createElement("div", {
					className: kc.a.right
				}, e.children, l.a.createElement(Mc, null)),
				Fc = e => l.a.createElement("div", {
					className: kc.a.layout
				}, l.a.createElement(Lc, Nc({}, e, {
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), l.a.createElement(Va, null), l.a.createElement(to, {
					className: kc.a.search
				})), l.a.createElement(Ac, null, l.a.createElement(po, {
					className: kc.a.quickLinks
				}))),
				Dc = e => l.a.createElement("div", {
					className: kc.a.layout
				}, l.a.createElement(Lc, Nc({}, e, {
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), l.a.createElement("div", {
					className: kc.a.searchContainer
				}, l.a.createElement(to, {
					className: kc.a.search
				}))), l.a.createElement(Ac, null));
			var Bc = Rc(Object(m.b)(Tc, e => ({
					onReloadFrontpage: () => e(Object(rn.x)(!0))
				}))((function(e) {
					let t;
					return t = e.isLoggedIn ? Fc : Dc, l.a.createElement(_c, {
						"data-redditstyle": !0,
						className: Object(b.a)(kc.a.container, e.className, {
							[kc.a.bladeIsOpen]: e.isBladeOpen
						})
					}, l.a.createElement(t, {
						categoryName: e.categoryName,
						language: e.language,
						onReloadFrontpage: e.onReloadFrontpage
					}))
				}))),
				Uc = s("./src/reddit/components/LightboxHeader/index.tsx"),
				Hc = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Gc = s("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				qc = s.n(Gc);
			const Wc = Object(m.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(y.j)())
			}));
			var Vc = _.a.wrapped(Wc((function(e) {
					return l.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, l.a.createElement("div", {
						className: qc.a.title
					}, l.a.createElement(ca, {
						className: qc.a.listHeader
					}, l.a.createElement(ue.c, null, "My Communities")), l.a.createElement("div", {
						className: qc.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, l.a.createElement(H.a, {
						className: qc.a.icon
					}))), l.a.createElement(Aa, null))
				})), "Component", qc.a),
				Qc = s("./src/reddit/components/ThemeProvider/index.tsx"),
				zc = s("./src/reddit/actions/toaster.ts");
			const Zc = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Kc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, Y.actionInfo(t), {
						reason: "primary"
					})
				}),
				Yc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, Y.actionInfo(t), {
						reason: "secondary"
					})
				});
			var Jc = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Xc = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				$c = s("./src/reddit/models/Toast/index.ts"),
				ed = s("./src/reddit/selectors/structuredStyles.ts"),
				td = s("./src/reddit/components/Toaster/PlainBread.m.less"),
				sd = s.n(td);

			function nd() {
				return (nd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ad = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const rd = e => {
				const t = Pn.a;
				switch (e.kind) {
					case $c.b.Error:
					case $c.b.AuthError:
						return t.warning;
					case $c.b.SuccessCommunity:
						return t.op;
					case $c.b.SuccessCommunityGreen:
					case $c.b.SuccessMod:
						return t.approved;
					case $c.b.EuCookiePolicy:
					case $c.b.UappBanner:
					case $c.b.Undo:
					default:
						return t.op
				}
			};
			class od extends l.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const e = this.props,
						{
							kind: t,
							sendEvent: s
						} = e,
						n = ad(e, ["kind", "sendEvent"]);
					return l.a.createElement("div", n)
				}
			}
			const id = _.a.wrapped(od, "PlainBread", sd.a);
			var cd = e => l.a.createElement(id, nd({}, e, {
					style: Object.assign({}, e.style || {}, {
						"--Toaster-indicatorColor": rd(e)
					})
				})),
				dd = s("./src/reddit/components/Toaster/StyledComponents.m.less"),
				ld = s.n(dd);
			const md = _.a.span("Text", ld.a);
			var ud = s("./src/reddit/components/Toaster/index.m.less"),
				pd = s.n(ud);
			const {
				fbt: hd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), bd = _.a.wrapped(Jc.a, "AuthErrorToastIcon", pd.a), gd = _.a.wrapped(jt.f, "AuthErrorToastPrimaryButton", pd.a);
			class fd extends l.a.Component {
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
					}, l.a.createElement(cd, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, l.a.createElement(bd, null), l.a.createElement(md, null, hd._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), l.a.createElement(gd, {
						type: "submit"
					}, hd._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Cd = fd,
				Pd = s("./src/lib/constants/euCookiePolicy.ts"),
				vd = s("./src/lib/permanentCookieOptions.ts"),
				xd = s("./src/reddit/controls/Link/index.tsx"),
				yd = s("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Od = s.n(yd);
			const {
				fbt: Ed
			} = s("./node_modules/fbt/lib/FbtPublic.js"), jd = _.a.div("Icon", Od.a), wd = () => l.a.createElement(jd, {
				style: {
					backgroundImage: "url(".concat(T.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), Sd = _.a.wrapped(jt.f, "PrimaryButton", Od.a), Md = _.a.wrapped(cd, "Bread", Od.a);
			class Id extends l.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Je.a.set(zt.b, Pd.b.toString(), Object(vd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return l.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, l.a.createElement(Md, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, l.a.createElement(wd, null), l.a.createElement(md, null, Ed._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", l.a.createElement(xd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Ed._("Learn More", null, {
						hk: "1fsN6Z"
					})), "."), l.a.createElement(Sd, {
						type: "submit"
					}, Ed._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var kd, Nd = Id;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(kd || (kd = {}));
			var _d = s("./src/reddit/controls/Typography/index.tsx"),
				Td = s("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Rd = s.n(Td);

			function Ld() {
				return (Ld = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ad = _.a.div("Container", Rd.a),
				Fd = _.a.img("SideImage", Rd.a),
				Dd = _.a.div("Main", Rd.a),
				Bd = _.a.div("SubTitle", Rd.a),
				Ud = _d.c,
				Hd = _.a.wrapped(jt.g, "PrimaryLinkButton", Rd.a),
				Gd = _.a.wrapped(H.a, "CloseIcon", Rd.a);
			class qd extends l.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Kc(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Zc(this.props.name))
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
					return l.a.createElement(Ad, {
						key: t,
						style: Object.assign({}, n, {
							transform: "\n            translateY(".concat(n.y, "px)\n            scale(").concat(n.x, ", ").concat(n.x, ")\n          ")
						})
					}, l.a.createElement(Gd, {
						onClick: this.props.onClose
					}), l.a.createElement(Fd, {
						srcSet: s
					}), l.a.createElement(Dd, null, l.a.createElement(Bd, null, a), l.a.createElement(_d.d, null, r), l.a.createElement(Ud, null, e), l.a.createElement(Hd, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, Un.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Wd = Object(m.b)(null, e => ({
					onSignup: () => e(Object(ho.f)())
				}))(Object(de.b)(qd)),
				Vd = "".concat(Qd("subscribe-cap.png"), " 1x,\n  ").concat(Qd("subscribe-cap@2x.png"), " 2x,");

			function Qd(e) {
				return "".concat(T.a.assetPath, "/img/banner/").concat(e)
			}
			const zd = 3,
				Zd = e => "".concat(e, ":").concat(152721e4);
			var Kd = s("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Yd = s.n(Kd);
			const {
				fbt: Jd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Xd = _.a.div("Icon", Yd.a), $d = () => l.a.createElement(Xd, {
				style: {
					backgroundImage: "url(".concat(T.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), el = _.a.wrapped(jt.f, "PrimaryButton", Yd.a), tl = _.a.wrapped(cd, "Bread", Yd.a);
			class sl extends l.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Je.a.set(zt.i, Zd(zd), Object(vd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return l.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, l.a.createElement(tl, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, l.a.createElement($d, null), l.a.createElement(md, null, Jd._("Reddit is updating its {=User Agreement} and {=Privacy Policy}.", [Jd._param("=User Agreement", l.a.createElement(xd.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Jd._("User Agreement", null, {
						hk: "3YDd1R"
					}))), Jd._param("=Privacy Policy", l.a.createElement(xd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Jd._("Privacy Policy", null, {
						hk: "4EAMzY"
					})))], {
						hk: "1Oj4Vk"
					}), " "), l.a.createElement(el, {
						type: "submit"
					}, Jd._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var nl = sl;

			function al() {
				return (al = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const rl = [],
				ol = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				il = {
					opacity: .5,
					x: .5,
					y: 50
				},
				cl = {
					opacity: Object(N.spring)(0),
					x: Object(N.spring)(.6),
					y: Object(N.spring)(80, ol)
				},
				dl = _.a.wrapped(Jc.a, "SnooFacepalm", pd.a),
				ll = _.a.wrapped(Xc.a, "SnooHappy", pd.a),
				ml = _.a.wrapped(pn.b, "SubredditIcon", pd.a),
				ul = _.a.div("Container", pd.a),
				pl = _.a.wrapped(H.a, "Close", pd.a),
				hl = e => l.a.createElement(l.a.Fragment, null, l.a.createElement(pl, al({
					className: "CloseIcon"
				}, e))),
				bl = _.a.wrapped(cd, "Bread", pd.a),
				gl = Object(h.c)({
					subredditIcon: ed.c,
					toastSlices: e => e.toaster
				}),
				fl = Object(m.b)(gl, e => ({
					dismissToast: t => () => e(Object(zc.f)(t)),
					onButtonClick: (t, s) => () => {
						e(t), e(Object(zc.f)(s))
					}
				}));
			class Cl extends l.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Pl(e, this.props.toastSlices), this.getWillEnterStyles = () => il, this.getWillLeaveStyles = () => cl
				}
				render() {
					return this.props.toastSlices.length ? l.a.createElement(N.TransitionMotion, {
						defaultStyles: rl,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => l.a.createElement(ul, null, e.map(e => {
						const t = e.data,
							s = Object.assign({}, e.style, {
								transform: "\n                  translateY(".concat(e.style.y, "px)\n                  scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n                ")
							});
						if (t.kind === $c.b.Custom && void 0 !== t.customToastType) {
							const n = xl[t.customToastType];
							return l.a.createElement(n, {
								key: e.key,
								toast: t,
								style: s,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === $c.b.UappBanner) return l.a.createElement(nl, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === $c.b.EuCookiePolicy) return l.a.createElement(Nd, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === $c.b.AuthError) return l.a.createElement(Cd, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						const n = t.kind === $c.b.Modal ? jt.f : jt.n,
							a = t.kind === $c.b.Modal ? jt.i : jt.n;
						return l.a.createElement(bl, {
							className: t.kind === $c.b.Modal ? pd.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(Zc(t.name)) : void 0,
							style: s
						}, l.a.createElement("div", {
							className: pd.a.ContentWrapper
						}, vl(t, this.props.subredditIcon), l.a.createElement(md, null, t.text)), l.a.createElement("div", {
							className: pd.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && l.a.createElement(n, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Kc(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && l.a.createElement(a, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Yc(t.name))
							}
						}, t.secondButtonText)), l.a.createElement(hl, {
							onClick: this.props.dismissToast(t.id)
						}))
					}))) : null
				}
			}
			const Pl = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(N.spring)(1),
							x: Object(N.spring)(1, ol),
							y: Object(N.spring)(0, ol)
						}
					}))
				},
				vl = (e, t) => {
					switch (e.kind) {
						case $c.b.Error:
							return l.a.createElement(dl, null);
						case $c.b.SuccessCommunity:
						case $c.b.SuccessCommunityGreen:
							return l.a.createElement(ll, null);
						case $c.b.SuccessMod:
							return l.a.createElement(ml, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				xl = {
					[$c.a.subscribeCap]: e => l.a.createElement(Wd, Ld({
						name: kd.LoggedOutMaxSubscriptions,
						sideImage: Vd,
						title: Un.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: Un.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var yl = fl(Object(de.b)(Cl)),
				Ol = s("./src/reddit/featureFlags/profileCollections.ts"),
				El = s("./src/reddit/helpers/trackers/banners.ts"),
				jl = s("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				wl = s.n(jl);
			var Sl = _.a.div("Wrapper", wl.a),
				Ml = s("./src/reddit/components/AlertBanner/index.m.less"),
				Il = s.n(Ml);
			const kl = () => l.a.createElement(Sl, {
					className: Object(b.a)(Il.a.wrapper, Il.a.suspended)
				}, l.a.createElement("span", null, l.a.createElement(ue.c, null, "Your account has been suspended."), " "), l.a.createElement("a", {
					className: Il.a.underlineLink,
					href: "https://www.reddithelp.com/en/node/851"
				}, l.a.createElement(ue.c, null, "Learn more"))),
				Nl = () => l.a.createElement(Sl, {
					className: Object(b.a)(Il.a.wrapper, Il.a.fpr)
				}, l.a.createElement("span", null, l.a.createElement(ue.c, null, "Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password."), " "), l.a.createElement("a", {
					className: Il.a.underlineLink,
					href: "https://www.reddithelp.com/en/categories/using-reddit/your-reddit-account/my-account-was-disabled"
				}, l.a.createElement(ue.c, null, "Learn more"))),
				_l = e => {
					let {
						updateLink: t,
						onClickOldReddit: s
					} = e;
					return l.a.createElement(Sl, {
						className: Object(b.a)(Il.a.wrapper, Il.a.deprecated)
					}, l.a.createElement("span", null, l.a.createElement(ue.c, null, "Looks like you're using new Reddit on an old browser. The site may not work properly if you don't"), " "), l.a.createElement(Tl, {
						link: t
					}, l.a.createElement(ue.c, null, "update your browser")), l.a.createElement("span", null, "!  ", l.a.createElement(ue.c, null, "If you do not update your browser, we suggest you visit"), " "), l.a.createElement("a", {
						className: Il.a.underlineLink,
						href: T.a.oldRedditUrl,
						onClick: s
					}, l.a.createElement(ue.c, null, "old reddit")), l.a.createElement("span", null, "."))
				},
				Tl = e => {
					let {
						children: t,
						link: s
					} = e;
					return null !== s ? l.a.createElement("a", {
						className: Il.a.underlineLink,
						href: s
					}, t) : l.a.createElement("span", null, t)
				};
			class Rl extends l.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(El.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(El.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: s
					} = this.props;
					return e && e.isDeprecated ? l.a.createElement(_l, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? l.a.createElement(Nl, null) : s ? l.a.createElement(kl, null) : null
				}
			}
			var Ll = Object(de.b)(Rl),
				Al = s("./src/reddit/components/AlertBanner/heights.ts"),
				Fl = s("./src/reddit/constants/componentSizes.ts"),
				Dl = s("./src/reddit/constants/elementIds.ts"),
				Bl = s("./src/reddit/constants/posts.ts"),
				Ul = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Hl = s("./src/reddit/contexts/Language.tsx"),
				Gl = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				ql = s("./src/reddit/helpers/postCollection.ts"),
				Wl = s("./src/reddit/models/Theme/index.ts"),
				Vl = s("./src/reddit/selectors/notificationBanner.ts"),
				Ql = s("./src/reddit/selectors/posts.ts"),
				zl = s("./src/reddit/components/AppRouter/index.m.less"),
				Zl = s.n(zl);

			function Kl() {
				return (Kl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return $l
			}));
			var Yl = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Jl = e => {
					var {
						className: t,
						shouldDisplayPinnedSubscriptions: s
					} = e, n = Yl(e, ["className", "shouldDisplayPinnedSubscriptions"]);
					return l.a.createElement("div", Kl({
						className: Object(b.a)(Zl.a.main, {
							[Zl.a.mShowingPaddedPinnedDescriptions]: s
						}, t)
					}, n))
				},
				Xl = Object(f.a)(e => {
					var {
						className: t,
						theme: s
					} = e, n = Yl(e, ["className", "theme"]);
					const a = Object(he.a)(Object.assign({
						theme: s
					}, n));
					return l.a.createElement("div", Kl({
						className: Object(b.a)(Zl.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Wl.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition)
						}
					}, n))
				}),
				$l = e => {
					var {
						className: t,
						divRef: s
					} = e, n = Yl(e, ["className", "divRef"]);
					return l.a.createElement("div", Kl({
						className: Object(b.a)(Zl.a.lightboxHeaderWrapper, t)
					}, n, {
						ref: s
					}))
				},
				em = Object(m.b)(() => Object(h.c)({
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(q.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: Q.s,
					language: e => e.user.language,
					isLoggedIn: Q.G,
					isSubscriptionsPinned: Ha.b,
					isSuspended: Q.L,
					isFPR: Q.E,
					posts: Ql.P,
					profileCollectionsEnabled: Ol.a,
					showEmailCollectionBanner: Object(Vl.a)(Hc.a.EmailCollectionBannerId)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(p.b)(t)),
					onUnpinSubscriptions: () => e(Object(y.j)())
				})),
				tm = (e, t) => !(!e.state || !e.state[F.a.IsOverlay] || t === e),
				sm = (e, t) => {
					const {
						key: s
					} = e, n = Yl(e, ["key"]), {
						key: r
					} = t, o = Yl(t, ["key"]);
					return a()(n, o)
				};
			class nm extends l.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.resizeHandler = c()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Fl.l && this.props.onUnpinSubscriptions()
					}, g.G), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: s
						} = this.props;
						if (Object(Ln.w)(e)) {
							const n = e && e.urlParams && e.urlParams.partialPostId,
								a = "".concat(g.wb.Post, "_").concat(n),
								r = t && n && t[a],
								o = r && r.belongsTo.type === Bl.a.PROFILE;
							return !(!r || !Object(ql.a)(r) || o && !s)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(q.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				componentWillUpdate(e) {
					const {
						location: t
					} = this.props, s = t.state && t.state[F.a.IsOverlay], n = sm(this.previousLocation, e.location), a = sm(this.previousLocation, this.props.location), r = s ? this.previousPage : this.props.currentPage;
					if (r) {
						const {
							meta: t,
							urlParams: s
						} = r, n = t && (t.name === g.zb.INDEX || t.name === g.zb.SUBREDDIT && s.subredditName === D.b.Popular), a = Object(q.c)(this.props.frontpageSignupVariant), o = Object(q.c)(e.frontpageSignupVariant);
						n || a || !o ? a && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || n || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const o = tm(e.location, this.previousLocation);
					P.a.write(() => {
						document.body.style.overflow = o ? "hidden" : ""
					})
				}
				render() {
					const {
						currentPage: e,
						frontpageSignupVariant: t,
						hasInvalidSession: s,
						isFPR: n,
						isLoggedIn: a,
						isSubscriptionsPinned: r,
						isSuspended: i,
						language: c,
						location: m,
						onClickOutsideOverlay: u,
						routes: p,
						showEmailCollectionBanner: h
					} = this.props, {
						isSignupUpsellDisplayed: b,
						isSignupUpsellHidden: f
					} = this.state, C = this.context, P = tm(m, this.previousLocation);
					m.state && m.state[F.a.IsOverlay] && !P ? m.state[F.a.IsOverlay] = !1 : m.state && (this.previousLocation === m || m.state[F.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[F.a.CloseLocation] && this.previousLocation.state[F.a.CloseLocation] === m.state[F.a.CloseLocation] ? m.state[F.a.CloseLocation] = Object.assign({}, this.previousLocation, {
						state: o()(this.previousLocation.state, F.a.CloseLocation)
					}) : m.state[F.a.CloseLocation] = this.previousLocation);
					const v = sm(this.previousLocation, m),
						x = P || v ? this.previousLocation : m,
						y = P || v ? this.previousPage : e,
						O = !(!(y && y.meta && y.meta.name === g.zb.SEARCH_RESULTS && y && y.queryParams) || y.queryParams[B.p]),
						E = !(!y || !y.meta || y.meta.name !== g.zb.MODERATION_PAGES),
						j = Object(Ln.w)(y),
						w = this.getIsPostCollection(),
						S = b && !f;
					return s ? Object(Se.c)("Sorry, we have failed you. Try refreshing!") : l.a.createElement(Hl.a.Provider, {
						value: c
					}, l.a.createElement(Ln.a.Provider, {
						value: y
					}, l.a.createElement(Qa.c, {
						isOverlayOpen: P
					}, l.a.createElement(Qc.a, {
						forceRedditTheme: O
					}, b && l.a.createElement(Ke, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), l.a.createElement(am, {
						browserInfo: C,
						isFPR: n,
						isInline: S,
						isSuspended: i
					})), l.a.createElement(Ul.a.Provider, {
						value: !1
					}, l.a.createElement(Qc.a, {
						forceRedditTheme: O || E,
						isCommentsPage: j
					}, l.a.createElement(rm, {
						frontpageSignupVariant: t,
						isCommentsPage: j,
						isInline: S,
						isLoggedIn: a,
						isSubscriptionsPinned: r,
						location: x,
						overlayIsOpen: P,
						page: y,
						routes: p,
						showEmailCollectionBanner: h,
						browserInfo: C,
						showFPR: n,
						showSuspended: i
					}))))), l.a.createElement(Ln.a.Provider, {
						value: e
					}, P && l.a.createElement(Ul.a.Provider, {
						value: !0
					}, l.a.createElement(Qc.a, {
						isOverlay: !0
					}, l.a.createElement(om, {
						isPostCollection: w,
						location: m,
						onClickOutsideOverlay: u,
						page: e,
						routes: p,
						showEmailCollectionBanner: h,
						browserInfo: C,
						showFPR: n,
						showSuspended: i
					}))), l.a.createElement(Qc.a, null, l.a.createElement(d.Fragment, null, l.a.createElement(yl, null), h && l.a.createElement(M, null), l.a.createElement(es, null), l.a.createElement(nn, null)))))
				}
			}
			nm.contextType = C.a;
			const am = Object(de.b)(e => {
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
					return l.a.createElement(d.Fragment, null, l.a.createElement(Ll, r), l.a.createElement(Bc, {
						className: Object(b.a)(Zl.a.header, Object(Al.b)(Zl.a, r), {
							[Zl.a.inline]: n
						})
					}))
				}),
				rm = Object(de.b)(class extends l.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline
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
						return l.a.createElement(Jl, {
							"aria-hidden": n,
							className: Object(b.a)(Object(Al.b)(Zl.a, this.props), {
								[Zl.a.withUpsell]: !!e,
								[Zl.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && l.a.createElement(Vc, {
							className: Object(b.a)(Zl.a.pinnedSubscriptions, Object(Al.b)(Zl.a, this.props)),
							"data-redditstyle": !0
						}), l.a.createElement(u.f, {
							location: t
						}, s), c && l.a.createElement("div", {
							className: Object(b.a)(Zl.a.bottomSpacer, Object(Al.a)(Zl.a, this.props))
						}))
					}
				});
			class om extends l.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => this.overlayScrollContainerEl = e, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(x.a)(e) && 0 === e.button && e.target === this.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[F.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Gl.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(v.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Gl.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: s
					} = this.props, n = !(!t || !t.meta || t.meta.name === g.zb.SUBREDDIT_CREATION || t.meta.name === g.zb.PUBLIC_ACCESS_NETWORK), a = e;
					return l.a.createElement(Xl, {
						className: Object(b.a)(Object(Al.b)(Zl.a, this.props), {
							[Zl.a.mIsCommentsLightbox]: n,
							[Zl.a.mIsLargeCommentsLightbox]: a
						})
					}, n && l.a.createElement($l, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(b.a)(Zl.a.mTopBannerAdjustments, Object(Al.b)(Zl.a, this.props), {
							[Zl.a.mIsLargeCommentsLightbox]: a
						}),
						tabIndex: -1
					}, l.a.createElement(Uc.a, {
						page: t
					})), l.a.createElement("div", {
						className: Object(b.a)(Zl.a.overlayWrapper, Object(Al.b)(Zl.a, this.props))
					}, l.a.createElement("div", {
						className: Object(b.a)(Zl.a.overlayScrollContainer, {
							[Zl.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Dl.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, l.a.createElement(u.f, null, s), l.a.createElement("div", {
						className: Object(b.a)(Zl.a.bottomSpacer, Object(Al.a)(Zl.a, this.props))
					}))))
				}
			}
			t.b = em(Object(de.b)(nm))
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
					post: c.M
				})),
				m = e => {
					let {
						className: t,
						post: s,
						onPostViewable: n,
						pixelPostHasEnteredView: r,
						pixelPostHasExitedView: i
					} = e;
					return s.isSponsored ? a.a.createElement(o.a, {
						onViewable: e => n(s, e),
						pixelPostHasEnteredView: e => r(s, e),
						pixelPostHasExitedView: e => i(s, e),
						trackVideoMetrics: !1
					}, a.a.createElement("div", {
						className: Object(d.a)(t, "Blank ".concat(s.id))
					})) : null
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
				activeSale: "_2MCszvETQ_Z6kv8AZ0mhCe",
				header: "_11NEHYc92BkrvsxyhXvs1u",
				headerText: "_1vG6msVYgq5OQBCLLzIt82",
				headerLink: "_1c3Ogz8fnJBxW2EndGIWfX",
				saleHeaderImage: "_2uc3aprTjiTxA7wN8pS51w",
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
				goldStyle: "_2fGxX7IQlng74vsW862Y--",
				crossout: "_3LPal_LVAaPThYFSl8Vav3"
			}
		},
		"./src/reddit/components/CompactCoinPurchaseList/index.m.less": function(e, t, s) {
			e.exports = {
				errorContainer: "_3dCfx1TJ9381ixSTRcnyT-",
				loaderContainer: "xqaZPpbD8_8ATMQOxTIB_"
			}
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
				activeSale: "_24moloPNpotQ_Incvvxwtt",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_1vXXD2qKLnHetdKvisFzBD",
				container: "x0hiXHicn7r3BG9m1FJH4",
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
				searchContainer: "_1iqnOY2Y57wmetu8MAjiId",
				explore: "_17gDYx5g5X6q--Lcmc9IvO",
				search: "_2dlTXDaX9JuL0bekTwhV18",
				snoo: "_1O4jTk-dZ-VIxsCuYB6OR8",
				wordmark: "_1bWuGs_1sq4Pqy099x_yy-",
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
				containerText: "_1GieMuLljOrqnVpRAwz7VP",
				defaultIcon: "eZQ5o2PrhR59wkAtPbxMU",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				itemIcon: "_139PgjqaVJ8tq4kF4QznMX",
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
				pin: "_2FVCfsIPxXtl6S-c69sXO4",
				disabled: "_371yhrlWAj7dxOsk1PWqG4",
				selector: "h-jI8r2f9ozTNqu_2TBeY",
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
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				toggleSwitch: "_179edq2yfZswDIo3NdeebM",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF"
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
				C = s("./src/reddit/i18n/components.tsx"),
				P = s("./src/reddit/i18n/utils.ts"),
				v = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				x = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				y = s("./src/reddit/icons/fonts/Link/index.tsx"),
				O = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				E = s("./src/reddit/icons/fonts/Text/index.tsx"),
				j = s("./src/reddit/icons/svgs/Close/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/selectors/experiments/categories.ts"),
				I = s("./src/reddit/selectors/platform.ts"),
				k = s("./src/reddit/components/LightboxHeader/index.m.less"),
				N = s.n(k);
			const _ = Object(o.c)({
					isInCategoriesExperiment: M.a,
					post: I.m
				}),
				T = Object(r.b)(_, (e, t) => {
					let {
						sendEvent: s
					} = t;
					return {
						close: () => {
							e(Object(l.d)(s, !0))
						},
						toggleVote: (t, s) => e(s === S.a.upvoted ? Object(d.X)(t) : Object(d.u)(t))
					}
				}, (e, t, s) => Object.assign({}, e, t, s, {
					onVoteClick: n => {
						const a = e.post || s.post;
						a && t.toggleVote(a.id, n)
					}
				}));
			class R extends a.a.Component {
				constructor() {
					super(...arguments), this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}
				}
				render() {
					const {
						className: e,
						onCloseClick: t,
						onVoteClick: s,
						page: r,
						post: o
					} = this.props, d = L[o && o.media ? o.media.type : w.n.EMBED], l = !o && r && r.meta && r.meta.name === c.zb.META_MEMBERSHIP_PAYWALL_PAGE;
					return a.a.createElement("div", {
						className: Object(i.a)(N.a.container, e, {
							[N.a.isCollection]: o && Object(f.a)(o)
						})
					}, a.a.createElement("div", {
						className: N.a.postDetails
					}, o && a.a.createElement(n.Fragment, null, a.a.createElement(m.a, {
						className: N.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: o,
						onVoteClick: s,
						redditStyle: !0
					}), a.a.createElement(d, {
						className: N.a.mediaIcon
					}), a.a.createElement(p.c, {
						className: N.a.postTitle,
						post: o,
						size: p.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: b.a.lightboxHeaderText,
						titleLinkClassName: N.a.postTitleLink,
						showCategoryTag: !0
					}), a.a.createElement(u.a, {
						post: o,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), l && r && r.urlParams.subredditName && a.a.createElement("div", {
						className: N.a.membershipPaywallTitle
					}, Object(P.c)("r/".concat(Object(P.b)("communityName", r.urlParams.subredditName), " Special Membership")))), a.a.createElement("div", {
						className: N.a.actions
					}, a.a.createElement(g.n, {
						className: N.a.close,
						onClick: t || this.closeLightbox,
						title: Object(P.c)("Close"),
						"aria-label": Object(P.c)("Close")
					}, a.a.createElement(j.a, null), a.a.createElement("span", {
						className: N.a.closeText
					}, a.a.createElement(C.c, null, "Close")))))
				}
			}
			const L = {
				[w.n.GIFVIDEO]: x.a,
				[w.n.IMAGE]: O.a,
				[w.n.TEXT]: E.a,
				[w.n.RTJSON]: E.a,
				[w.n.VIDEO]: v.a,
				[w.n.EMBED]: y.a,
				[w.n.LIVEVIDEO]: v.a
			};
			t.a = Object(h.b)(T(R))
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
				getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("vendors~ModerationPages"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
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
				return x
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
			const C = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.n)(e, t);
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
			const v = Object(o.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.j)(e), e => {
				if (Object(p.j)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.j)(e)) return Object(p.g)(e, t)
			}, C, Object(c.a)((e, t) => {
				if (Object(p.j)(e) || Object(b.bb)(e)) return;
				const s = C(e, t);
				if (!s) return;
				const n = Object(h.D)(e, s);
				if (!n) return;
				if (Object(b.ab)(e, {
						subredditId: n
					})) return;
				const a = e.structuredStyles.models[n];
				return a || void 0
			}), (e, t) => {
				const s = C(e, t);
				if (!s) return;
				const n = Object(h.v)(e, {
					subredditName: s
				});
				return n ? n.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(b.hb)(e).nightmode
			}, (e, t) => {
				if (!Object(b.hb)(e).hideNSFW) return !0;
				const s = C(e, t);
				if (s) {
					const t = Object(h.y)(e, {
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
						theme: Object(u.i)(e, h)
					}
				}
				if (o) {
					const e = Object(m.h)(o);
					let t;
					return {
						isRootOrUniqueClassName: b,
						theme: t = c ? Object(u.h)(e, h) : Object(u.i)(e, h)
					}
				}
				return {
					isRootOrUniqueClassName: b,
					theme: Object(n.merge)(e, {
						subredditContext: h
					})
				}
			}))(P);
			t.b = v;
			const x = Object(d.t)()(v)
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
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t,
						children: s,
						post: n,
						onPostViewable: i
					} = this.props;
					if (n) return n.isBlank ? a.a.createElement(o.BlankPost, {
						post: n,
						onPostViewable: i,
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t
					}) : a.a.createElement(r.a, {
						onViewable: e => i(n, e),
						pixelPostHasEnteredView: t => e(n, t),
						pixelPostHasExitedView: e => t(n, e),
						trackVideoMetrics: !1
					}, s)
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
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "l", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "f", (function() {
				return b
			}));
			const n = "DEFAULT",
				a = "",
				r = "All Communities",
				o = "top",
				i = "MOD",
				c = "moderating",
				d = "UPANDCOMING",
				l = "up-and-coming",
				m = "/subreddits/leaderboard/",
				u = {
					id: a,
					name: a
				},
				p = {
					id: d,
					name: l
				},
				h = [{
					name: "Sports",
					id: "c1015",
					path: "".concat(m, "sports/")
				}, {
					name: "News",
					id: "c1009",
					path: "".concat(m, "news/")
				}, {
					name: "Gaming",
					id: "c1005",
					path: "".concat(m, "gaming/")
				}, {
					name: "Aww",
					id: "c1000",
					path: "".concat(m, "aww/")
				}],
				b = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
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
						s[t.subredditName] = Object(m.y)(e, {
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

			function d(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function l(e, t) {
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

			function m(e, t) {
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
		"./src/reddit/endpoints/subreddit/models.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/graphql/operations/SubredditModels.json"),
				a = s("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(a.a)(e, Object.assign({}, n, {
				variables: t
			}))
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/graphql/operations/TopSubreddits.json"),
				a = s("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(a.a)(e, Object.assign({}, n, {
				variables: t
			}))
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
		"./src/reddit/helpers/categoryPickerWidget/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./src/reddit/helpers/name/index.ts");
			const a = (e, t) => t.map(t => {
					const s = Object(n.f)(t.name),
						a = s.split(" & ").join("_and_");
					return Object.assign({}, t, {
						name: s,
						path: t.path || "".concat(e).concat(a, "/")
					})
				}),
				r = e => Object(n.f)(e).split("_and_").join(" & ")
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
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/isEmpty.js"),
				a = s.n(n),
				r = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				o = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const i = e => {
					let {
						edges: t,
						pageInfo: s
					} = e;
					const n = {},
						a = [];
					for (let i of t) {
						const {
							node: e
						} = i, t = o(i, ["node"]), s = Object(r.a)(e);
						n[s.id] = s, a.push(t)
					}
					return {
						pageInfo: s,
						rankings: a,
						subreddits: n
					}
				},
				c = e => {
					let {
						edges: t
					} = e;
					const s = {},
						n = [];
					for (let a of t) {
						const {
							node: e
						} = a, t = o(a, ["node"]), i = Object(r.a)(e);
						s[i.id] = Object.assign({}, i, {
							bannerBackgroundImage: e && e.styles && e.styles.bannerBackgroundImage
						}), n.push(t)
					}
					return {
						rankings: n,
						subreddits: s
					}
				},
				d = e => {
					const t = {},
						s = [];
					for (let n = 0; n < e.length; n++) {
						const o = e[n];
						if (a()(o)) continue;
						const i = Object(r.a)(o);
						t[i.id] = i, s.push({
							id: i.id,
							rank: n,
							rankDelta: 0,
							cursor: ""
						})
					}
					return {
						rankings: s,
						subreddits: t
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
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			}));
			var n = s("./src/config.ts");
			const a = "".concat(n.a.assetPath, "/img/favicon/badged-favicon-32x32.png"),
				r = "".concat(n.a.assetPath, "/img/favicon/badged-favicon-16x16.png"),
				o = "".concat(n.a.assetPath, "/img/favicon/favicon-32x32.png"),
				i = "".concat(n.a.assetPath, "/img/favicon/favicon-16x16.png"),
				c = "badgeCountSync",
				d = e => window.document.querySelector('link[href="'.concat(e, '"]')),
				l = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const t = d(e ? o : a),
						s = d(e ? i : r);
					t && s && (t.href = e ? a : o, s.href = e ? r : i)
				},
				m = e => {
					navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: c,
						badgeCounts: e
					})
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
					const t = Object(a.n)(e);
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
				C = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/extractQueryParams/index.ts"),
				v = s("./src/lib/filterQueryParams/index.ts"),
				x = s("./src/lib/getParsedUserAgent/index.ts"),
				y = s("./src/lib/initializeClient/index.tsx"),
				O = s("./src/lib/matchRoute/index.ts"),
				E = s("./src/lib/performance.js"),
				j = s("./src/lib/safeJSONParse/index.ts"),
				w = s("./src/reddit/customMiddleware/gqlContext.ts"),
				S = s("./src/reduxMiddleware/apiContext.ts"),
				M = s("./src/telemetry/index.ts"),
				I = s("./src/telemetry/models/Timer.ts"),
				k = s("./src/reddit/actions/apiRequestHeaders.ts"),
				N = s("./src/reddit/actions/chat/unreadCount.ts"),
				_ = s("./src/reddit/actions/emailCollection/index.ts"),
				T = s("./src/lib/makeApiRequest/index.ts"),
				R = s("./src/lib/omitHeaders/index.ts"),
				L = s("./src/reddit/constants/headers.ts"),
				A = s("./src/reddit/actions/toaster.ts"),
				F = s("./src/reddit/i18n/utils.ts");
			! function(e) {
				e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
			}(n || (n = {}));
			var D = s("./src/reddit/models/Toast/index.ts");
			const B = e => async (t, s, a) => {
				let {
					apiContext: r
				} = a;
				const o = await ((e, t) => Object(T.b)(Object(R.a)(e, [L.a]), {
					method: C.cb.POST,
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
			var U = s("./src/reddit/actions/media.ts"),
				H = s("./src/reddit/actions/multireddit/index.ts"),
				G = s("./src/reddit/actions/notifications/loader.ts"),
				q = s("./src/reddit/actions/notifications/state.ts"),
				W = s("./src/reddit/actions/nps.ts"),
				V = s("./src/reddit/actions/platform.ts"),
				Q = s("./src/reddit/actions/session.ts"),
				z = s("./src/reddit/actions/theme.ts"),
				Z = s("./src/reddit/actions/users.ts"),
				K = s("./node_modules/react-redux/es/index.js"),
				Y = s("./node_modules/react-router/esm/react-router.js"),
				J = s("./node_modules/reselect/es/index.js"),
				X = (s("./src/reddit/components/Root/redesignFont.less"), s("./assets/fonts/BentonSans/font.less"), s("./assets/fonts/IBMPlexSans/font.less"), s("./assets/fonts/NotoMono/font.less"), s("./assets/fonts/NotoSans/font.less"), s("./assets/fonts/VCR/font.less"), s("./src/reddit/components/Root/index.m.less")),
				$ = s.n(X),
				ee = s("./src/higherOrderComponents/makeAsync.tsx"),
				te = s("./src/lib/loadWithRetries/index.ts"),
				se = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				ne = s("./src/reddit/selectors/user.ts");
			const ae = Object(J.c)({
					shouldEnable: e => Object(se.b)(e) || Object(ne.D)(e)
				}),
				re = Object(K.b)(ae),
				oe = () => u.a.createElement(m.Fragment, null);
			class ie extends u.a.Component {
				constructor(e) {
					super(e), this.state = {
						component: oe
					}
				}
				componentWillMount() {
					this.props.shouldEnable && this.loadAdminPanel()
				}
				componentWillReceiveProps(e) {
					e.shouldEnable && ie.adminPanel === oe ? this.loadAdminPanel() : this.props.shouldEnable && !e.shouldEnable && this.setComponent(oe)
				}
				loadAdminPanel() {
					if (ie.adminPanel === oe) {
						const e = Object(ee.a)({
							ErrorComponent: oe,
							getComponent: () => Object(te.a)(() => s.e("AdminPanel").then(s.bind(null, "./src/reddit/components/AdminPanel/index.tsx")).then(e => e.default)),
							LoadingComponent: oe
						});
						this.setComponent(e)
					}
				}
				render() {
					const e = this.state.component;
					return u.a.createElement(e, null)
				}
				setComponent(e) {
					ie.adminPanel = e, this.setState({
						component: e
					})
				}
			}
			ie.adminPanel = oe;
			var ce = re(ie),
				de = s("./src/lib/doubleclickForPublishers/index.ts"),
				le = s("./src/reddit/components/TrackingHelper/index.tsx"),
				me = s("./src/reddit/helpers/trackers/ads.ts"),
				ue = s("./src/reddit/selectors/meta.ts");
			const pe = Object(J.c)({
				region: ue.i
			});
			class he extends u.a.Component {
				constructor(e) {
					super(e), Object(de.f)({
						limitDataProcessing: "CA" === this.props.region,
						onRequest: () => this.props.sendEvent(Object(me.b)())
					})
				}
				shouldComponentUpdate() {
					return !1
				}
				render() {
					return null
				}
			}
			var be = Object(K.b)(pe)(Object(le.b)(he)),
				ge = s("./src/reddit/components/AppRouter/index.tsx"),
				fe = s("./node_modules/lodash/noop.js"),
				Ce = s.n(fe),
				Pe = s("./node_modules/prop-types/index.js"),
				ve = s.n(Pe),
				xe = s("./node_modules/react-shortcuts/lib/index.js"),
				ye = s("./src/reddit/constants/shortcuts.ts");
			var Oe = s("./src/reddit/selectors/structuredStyles.ts");
			const Ee = {
					[ye.c.OpenIndex]: {
						osx: ["cmd + ?", "?"],
						windows: ["ctrl + ?", "?"],
						linux: ["ctrl + ?", "?"],
						other: ["ctrl + ?", "?"]
					},
					[ye.c.Close]: "esc",
					[ye.c.Konami]: "up up down down left right left right b a enter"
				},
				je = {
					[ye.c.Upvote]: "a",
					[ye.c.Downvote]: "z",
					[ye.c.Save]: "s",
					[ye.c.Hide]: "h",
					[ye.c.OpenLink]: "l"
				},
				we = {
					[ye.c.CollapseOrLoad]: "enter",
					[ye.c.NextComment]: "j",
					[ye.c.PrevComment]: "k",
					[ye.c.Reply]: "r"
				};
			var Se = {
					[ye.d.CommentPage]: Object.assign({}, Ee, je, we),
					[ye.d.Global]: Object.assign({}, Ee),
					[ye.d.Lightbox]: Object.assign({}, Ee, je, we, {
						[ye.c.NextPost]: "n",
						[ye.c.PrevPost]: "p"
					}),
					[ye.d.Listing]: Object.assign({}, Ee, je, {
						[ye.c.OpenLightbox]: "enter",
						[ye.c.NextPost]: "j",
						[ye.c.PrevPost]: "k",
						[ye.c.Expando]: "x",
						[ye.c.NewPost]: "c",
						Reserved: ["n", "p", "r"]
					}),
					[ye.d.Modqueue]: Object.assign({}, Ee, je, {
						[ye.c.OpenLightbox]: "enter",
						[ye.c.NextPost]: "j",
						[ye.c.PrevPost]: "k",
						[ye.c.Expando]: "x",
						[ye.c.NewPost]: "c"
					})
				},
				Me = s("./src/reddit/actions/shortcuts.ts");
			const Ie = {
					[ye.c.Close]: Me.d,
					[ye.c.CollapseOrLoad]: Me.e,
					[ye.c.Downvote]: Me.f,
					[ye.c.Expando]: Me.g,
					[ye.c.Hide]: Me.h,
					[ye.c.NextComment]: Me.j,
					[ye.c.NextPost]: Me.k,
					[ye.c.NewPost]: Me.i,
					[ye.c.OpenIndex]: Me.l,
					[ye.c.OpenLightbox]: Me.m,
					[ye.c.OpenLink]: Me.n,
					[ye.c.PrevComment]: Me.o,
					[ye.c.PrevPost]: Me.p,
					[ye.c.Reply]: Me.q,
					[ye.c.Save]: Me.s,
					[ye.c.Upvote]: Me.t,
					[ye.c.Konami]: null
				},
				ke = (e, t) => (s, n) => {
					if (!document.activeElement) return;
					const a = document.activeElement.nodeName;
					if ("INPUT" === a || "TEXTAREA" === a || "BUTTON" === a && ye.a.includes(n.which)) return;
					const r = Ie[s];
					r && e(r(t))
				};
			var Ne = s("./src/reddit/components/ShortcutWrapper/index.m.less"),
				_e = s.n(Ne);
			const Te = e => {
					let {
						children: t
					} = e;
					return u.a.createElement("div", {
						className: _e.a.shortcutDiv,
						id: ye.b,
						tabIndex: -1
					}, u.a.Children.only(t))
				},
				Re = new xe.ShortcutManager(Se),
				Le = Object(J.c)({
					isBladeOpen: Oe.j,
					namespace: e => e.activeModalId ? ye.d.Global : e.shortcuts.namespace
				}),
				Ae = Object(K.b)(Le, e => ({
					dispatchAction: t => e(t)
				}));
			class Fe extends m.Component {
				getChildContext() {
					return {
						shortcuts: Re
					}
				}
				componentDidMount() {
					const e = document.getElementById(ye.b);
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
					return u.a.createElement(xe.Shortcuts, {
						handler: s ? Ce.a : ke(t, a),
						isolate: !0,
						name: n
					}, u.a.createElement(Te, null, e))
				}
			}
			Fe.childContextTypes = {
				shortcuts: ve.a.object.isRequired
			};
			var De = Ae(Object(le.b)(Fe)),
				Be = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Ue = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/components/Header/Sparse.tsx")),
				He = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Ge = s("./src/reddit/contexts/InsideOverlay.tsx"),
				qe = s("./src/reddit/controls/Button/index.tsx"),
				We = s("./src/reddit/featureFlags/index.ts"),
				Ve = s("./src/reddit/i18n/components.tsx"),
				Qe = e => u.a.createElement("svg", {
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
				ze = s("./src/reddit/pages/InternalServerError/index.m.less"),
				Ze = s.n(ze),
				Ke = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Ye = Object(J.c)({
					language: ne.P,
					showError: We.d.showVerboseErrors
				}),
				Je = Object(K.b)(Ye)(e => {
					var {
						language: t
					} = e, s = Ke(e, ["language"]);
					return u.a.createElement(Ge.a.Provider, {
						value: !1
					}, u.a.createElement(He.b, {
						subredditName: ""
					}, u.a.createElement("div", null, u.a.createElement(Ue.a, null), u.a.createElement("div", {
						className: Ze.a.container
					}, u.a.createElement("div", {
						className: Ze.a.mainContent
					}, u.a.createElement(Qe, {
						className: Ze.a.dizzySnoo
					}), u.a.createElement("h3", {
						className: Ze.a.title
					}, u.a.createElement(Ve.c, null, "Sorry, for some reason reddit can't be reached.")), u.a.createElement("div", {
						className: Ze.a.subTitle
					}, u.a.createElement(Ve.c, null, "Give us a few minutes to fix the problem. Sorry!")), u.a.createElement(qe.f, {
						onClick: () => window.location.reload(!0)
					}, u.a.createElement(Ve.c, null, "Reload Page")), s.showError && u.a.createElement("div", {
						className: Ze.a.subTitle
					}, s.error.message)), u.a.createElement("div", {
						className: Ze.a.topImageContainer
					}, u.a.createElement("img", {
						className: Ze.a.image,
						src: "".concat(i.a.assetPath, "/img/error/star_pattern.png")
					})), u.a.createElement("div", {
						className: Ze.a.bottomImageContainer
					}, u.a.createElement("img", {
						className: Ze.a.image,
						src: "".concat(i.a.assetPath, "/img/error/half_planet.png")
					}))))))
				});

			function Xe() {
				return (Xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const $e = Object(J.c)({
					theme: e => e.themes.current
				}),
				et = Object(K.b)($e, {})(e => {
					let {
						children: t,
						theme: s
					} = e;
					const n = Object(Be.a)({
						theme: s
					});
					return u.a.createElement("div", {
						className: $.a.container,
						children: t,
						style: {
							"--background": n.body,
							"--canvas": n.canvas
						}
					})
				});
			var tt = e => {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: s
					} = e;
					return u.a.createElement(le.a, null, u.a.createElement(et, null, u.a.createElement(be, null), u.a.createElement(ce, null), u.a.createElement(De, null, u.a.createElement(t, null, u.a.createElement(Y.d, {
						component: st(s)
					})))))
				}
				return u.a.createElement(Je, {
					error: e.error
				})
			};
			const st = e => t => u.a.createElement(ge.b, Xe({
				routes: e
			}, t));
			var nt = s("./src/reddit/constants/localStorage.ts"),
				at = s("./node_modules/lodash/throttle.js"),
				rt = s.n(at),
				ot = s("./src/reddit/helpers/localStorage/index.ts");
			const it = 1e3;
			class ct extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = rt()(() => Object(ot.Q)(this.props.storageKey, this.props.value), it)
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
			ct.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const dt = Object(J.a)(ne.G, e => ({
				storageKey: nt.q,
				value: {},
				enabled: !e
			}));
			var lt = Object(K.b)(dt)(ct);
			var mt = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(lt, null)),
				ut = s("./src/reddit/constants/history.ts"),
				pt = s("./src/reddit/constants/jsapiEvents.ts"),
				ht = s("./src/reddit/constants/parameters.ts"),
				bt = s("./src/reddit/constants/screenWidths.ts"),
				gt = s("./src/reddit/contexts/AdminEvents.ts"),
				ft = s("./src/reddit/contexts/ApiContext.tsx"),
				Ct = s("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				Pt = s("./node_modules/brcast/dist/brcast.es.js"),
				vt = s("./src/telemetry/helpers/sendEvent.ts");
			var xt = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(Pt.a)([]);
					return {
						broadcaster: t,
						middleware: s => {
							const n = s.getState();
							return (Object(se.b)(n) || Object(ne.D)(n)) && (e = !0, Object(vt.c)(t)), n => a => {
								const r = n(a),
									o = s.getState();
								if (!Object(se.b)(o)) {
									const s = Object(ne.D)(o);
									e && !s ? (e = !1, Object(vt.c)(void 0), t.setState([])) : s && !e && (t.setState([]), Object(vt.c)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(Pt.a)([]),
					middleware: () => e => t => e(t)
				}),
				yt = s("./node_modules/lodash/pick.js"),
				Ot = s.n(yt),
				Et = s("./src/reddit/actions/header.ts"),
				jt = s("./src/reddit/actions/preferences.ts"),
				wt = s("./src/reddit/constants/cookie.ts"),
				St = s("./src/reddit/constants/preferences.ts");
			const Mt = new Set([jt.f, jt.h, z.b, Z.b, jt.c, jt.n, Et.d, Et.e, jt.q]);
			var It = e => t => s => {
					const n = t(s);
					if (Mt.has(s.type)) {
						const t = e.getState().user,
							s = {
								prefs: Ot()(t.prefs, ["hamburgerTray", "globalTheme", "featuresViewedHistory", "collapsedTraySections", "nightmode", "subscriptionsPinned", St.b, St.d, St.e]),
								language: t.language
							},
							n = new Date;
						n.setFullYear(n.getFullYear() + 2), l.a.set(wt.j, btoa(JSON.stringify(s)), {
							expires: n,
							domain: i.a.cookieDomain
						})
					}
					return n
				},
				kt = s("./src/lib/fastdom/index.ts"),
				Nt = s("./src/reddit/actions/redditEmbed.ts"),
				_t = s("./src/reddit/actions/tabBadging.ts"),
				Tt = s("./src/reddit/helpers/tabBadging/index.ts"),
				Rt = s("./src/reddit/selectors/chat.ts"),
				Lt = s("./src/reddit/selectors/experiments/badging.ts");
			const At = (e, t) => {
				e <= 0 ? kt.a.write(() => {
					Object(Tt.b)(!1), window.document.title = t
				}) : kt.a.write(() => {
					Object(Tt.b)(), window.document.title = "(".concat(e, ") ").concat(t)
				})
			};
			var Ft = e => {
					const t = window.document.title;
					return s => n => {
						switch (n.type) {
							case N.a.SYNC:
							case N.a.REQUEST_SUCCESS: {
								const s = e.getState(),
									{
										dispatch: a
									} = e;
								if (!Object(Lt.a)(s)) break;
								const r = Object(Rt.a)(s),
									o = n.payload && n.payload.basicChannelCount,
									i = Object(ne.B)(s),
									c = o + i;
								if (At(c, t), a(Object(_t.b)({
										hasUnreadMessages: !!c
									})), r !== o) {
									const e = {
										basicChannelCount: o,
										inboxCount: i
									};
									Object(Tt.c)(e)
								}
								break
							}
							case Nt.b: {
								const s = e.getState(),
									{
										dispatch: a
									} = e;
								if (!Object(Lt.a)(s)) break;
								const r = Object(ne.B)(s),
									o = n.payload.account && n.payload.account.inboxCount,
									i = Object(Rt.a)(s),
									c = o && o + i;
								if (!c) break;
								if (At(c, t), a(Object(_t.b)({
										hasUnreadMessages: !!c
									})), r !== o) {
									const e = {
										basicChannelCount: i,
										inboxCount: o
									};
									Object(Tt.c)(e)
								}
							}
						}
						return s(n)
					}
				},
				Dt = s("./src/server/helpers/seoMetadata.tsx");
			var Bt = "undefined" != typeof document ? e => t => s => {
				const n = t(s);
				if (s.type === V.e) {
					const t = e.getState(),
						n = Object(Lt.a)(t),
						{
							meta: a
						} = s.payload;
					n ? ((e, t) => {
						const s = Object(ne.B)(e) || 0,
							n = Object(Rt.a)(e);
						At(n + s, t)
					})(t, a.title) : kt.a.write(() => {
						document.title = a.title, Object(Dt.b)(t, document)
					})
				}
				return n
			} : () => e => t => e(t);
			const Ut = 5 * C.db;
			var Ht = e => {
					const t = rt()(() => {
						const t = e.getState().user.session,
							s = new Date(t.expires),
							n = new Date;
						s.getTime() - n.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(Q.g())
					}, Ut);
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
					return o.user.session && r(o.user.session), window.addEventListener("focus", a), window.addEventListener("touchend", a), document.body.addEventListener("mouseenter", a), e => t => (t.type !== Q.a && t.type !== Q.b && t.type !== Q.c && t.type !== Q.e || r(t.payload), t.type === Q.d && (clearTimeout(s), s = null), e(t))
				},
				Gt = s("./src/reddit/actions/frontpage.ts"),
				qt = s("./src/reddit/actions/page.ts"),
				Wt = s("./src/reddit/actions/pages/profileComments.ts"),
				Vt = s("./src/reddit/actions/pages/profileOverview.ts"),
				Qt = s("./src/reddit/actions/pages/profilePosts.ts"),
				zt = s("./src/reddit/actions/pages/search.ts"),
				Zt = s("./src/reddit/actions/pages/subreddit.ts"),
				Kt = s("./src/reddit/actions/search.ts"),
				Yt = s("./src/reddit/actions/subreddit.ts"),
				Jt = s("./src/reddit/actions/tracking.ts"),
				Xt = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				$t = s("./src/reddit/helpers/history/index.ts"),
				es = s("./src/reddit/helpers/trackers/commentList.ts"),
				ts = s("./src/reddit/helpers/trackers/postList.ts"),
				ss = s("./src/reddit/helpers/trackers/screenview.ts"),
				ns = s("./src/reddit/selectors/platform.ts"),
				as = s("./src/reddit/selectors/subreddit.ts"),
				rs = s("./src/reddit/helpers/routeKey/index.ts");
			var os = e => t => s => {
					const n = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(Jt.c({
							routeKey: t
						}))
					};
					if (s.type === V.a) {
						const n = e.getState(),
							a = (n.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							r = Object(as.D)(n, a) || "",
							i = (n.subreddits.about[r] || {}).advertiserCategory;
						o.trigger("pageview", Object.assign({}, Ot()(s.payload.location, "pathname", "search", "hash"), {
							subreddit: a,
							advertiserCategory: i
						}));
						const c = n.platform.currentPage && n.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(rs.b)(c, n, Object(Xt.a)(n));
							if (e && M.c.has(e)) {
								const t = M.c.end(e);
								!Object(ns.h)(n) && Object($t.b)(ut.a.IsOverlay) || Object(ss.g)(c, n, I.TimerType.UserCancelled, t)
							}
						}
						const d = s.payload.routeMatch;
						if (!d) return t(s);
						const l = Object(Xt.a)(n, d),
							m = Object(rs.b)(d, n, l);
						if (!m) return t(s);
						M.c.start(m)
					}
					const a = t(s);
					switch (s.type) {
						case qt.g:
						case Vt.b:
						case Vt.e:
						case Qt.e:
						case Wt.e:
						case Zt.c: {
							const {
								key: e,
								token: t
							} = s.payload;
							t || n(e);
							break
						}
						case zt.c: {
							const {
								key: e,
								tokens: t
							} = s.payload;
							t.posts || n(e);
							break
						}
						case Gt.b:
						case Yt.i:
						case Qt.b: {
							const {
								key: t,
								postIds: a
							} = s.payload;
							n(t);
							const r = e.getState();
							if (a.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							ts.j(r, t);
							break
						}
						case Wt.b: {
							const {
								key: t,
								commentIds: a
							} = s.payload;
							if (n(t), a.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							es.a(r, t);
							break
						}
						case Kt.c: {
							const {
								key: e
							} = s.payload;
							n(e);
							break
						}
					}
					return a
				},
				is = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				cs = s("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				ds = s("./src/lib/permanentCookieOptions.ts");
			const ls = e => {
				if (!e) return;
				const t = (l.a.get(wt.h) || "").split(",");
				if (!t.includes(e)) {
					t.unshift(e);
					const s = t.slice(0, 10).join(","),
						n = Object(ds.a)();
					l.a.set(wt.h, s, n)
				}
			};
			var ms = s("./src/reddit/layout/page/Listing/index.tsx"),
				us = s("./src/reddit/reducers/index.ts"),
				ps = s("./src/reddit/routes/collectionCommentsPage/index.ts"),
				hs = s("./src/reddit/routes/appeal/index.ts"),
				bs = s("./src/reddit/routes/coins/index.ts"),
				gs = s("./src/reddit/routes/coinsMobile/index.ts"),
				fs = s("./src/reddit/routes/commentsPage/index.ts");
			s("./node_modules/@loadable/component/dist/loadable.esm.js");
			var Cs = [],
				Ps = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				vs = s("./src/reddit/helpers/trackers/emailVerification.ts");
			var xs = {
					action: e => async (t, s) => {
						await t(jt.x());
						const a = s(),
							r = e.params.verificationToken,
							o = e.queryParams && e.queryParams.source;
						if (o && Object(M.a)(Object(vs.b)(o)(a)), !Object(ne.G)(a)) return Object(Ps.a)(t, a);
						const i = await t(B(r));
						i === n.Success && Object(M.a)(Object(vs.d)()(a)), t(Object(p.c)("/?verifiedEmail=".concat(i)))
					},
					chunk: C.p.EMPTY,
					exact: !0,
					meta: {
						name: C.zb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				ys = s("./src/lib/addQueryParams/index.ts");
			var Os = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							queryParams: r
						} = e;
						await t(Object(p.c)(Object(ys.a)("/", r)))
					},
					chunk: C.p.EMPTY,
					exact: !0,
					meta: {
						name: C.zb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [C.p.COMMENTS_PAGE, C.p.FRONTPAGE]
				},
				Es = s("./src/reddit/routes/framedGild/index.ts"),
				js = s("./src/reddit/routes/framedModal/index.ts"),
				ws = s("./src/reddit/routes/frontpage/index.ts"),
				Ss = s("./src/reddit/routes/inbox/index.ts");
			var Ms = {
					action: e => async e => {
						await e(Object(p.c)("/r/layer"))
					},
					chunk: C.p.EMPTY,
					exact: !0,
					meta: {
						name: C.zb.LAYER_REDIRECT
					},
					path: ["/layer", "/layer/"]
				},
				Is = s("./src/reddit/routes/meta/index.ts"),
				ks = s("./src/reddit/routes/moderationPages/index.ts"),
				Ns = s("./src/reddit/routes/modListing/index.ts"),
				_s = s("./src/reddit/routes/modQueue/index.ts"),
				Ts = s("./src/reddit/routes/multireddit/index.ts"),
				Rs = s("./src/reddit/routes/postCreation/constants.ts");
			const Ls = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(p.c)("/"))
				},
				chunk: C.p.EMPTY,
				exact: !0,
				meta: {
					name: C.zb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var As = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(Rs.b))
					},
					chunk: C.p.EMPTY,
					exact: !0,
					meta: {
						name: C.zb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...Ls],
				Fs = s("./src/reddit/routes/postCreation/index.ts"),
				Ds = s("./src/reddit/routes/postDraft/index.ts"),
				Bs = s("./src/reddit/routes/premium/index.ts"),
				Us = s("./src/reddit/routes/profileComments/index.ts"),
				Hs = s("./src/reddit/endpoints/me/index.ts");
			var Gs = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							rest: r
						} = e.params, {
							queryParams: o
						} = e, i = await Object(Hs.a)(a());
						if (!(i.ok && i.body && i.body.account)) {
							const e = s();
							return void Object(Ps.a)(t, e)
						}
						const c = i.body.account.displayText,
							d = r ? "/user/".concat(c, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(r)) : "/user/".concat(c, "/"),
							l = Object(ys.a)(d, o);
						await t(Object(p.c)(l))
					},
					chunk: C.p.EMPTY,
					exact: !0,
					meta: {
						name: C.zb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				qs = s("./src/reddit/routes/profileModSettings/index.ts"),
				Ws = s("./src/reddit/routes/profileOverview/index.ts"),
				Vs = s("./src/reddit/routes/profilePosts/index.ts"),
				Qs = s("./src/reddit/routes/profilePrivate/index.ts");
			var zs = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(n)) : "/user/".concat(s, "/"), o = Object(ys.a)(r, a);
						await t(Object(p.c)(o))
					},
					chunk: C.p.EMPTY,
					exact: !0,
					meta: {
						name: C.zb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Zs = s("./src/reddit/routes/profileSnoobuilder/index.ts");
			var Ks = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/posts/").concat(n) : "/user/".concat(s, "/posts"), o = Object(ys.a)(r, a);
						t(Object(p.c)(o))
					},
					chunk: C.p.EMPTY,
					exact: !0,
					meta: {
						name: C.zb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				Ys = s("./src/reddit/routes/publicAccessNetwork/index.ts"),
				Js = s("./src/reddit/routes/report/index.ts"),
				Xs = s("./src/reddit/routes/searchResults/index.ts"),
				$s = s("./src/reddit/routes/settings/index.ts");
			var en = [{
					action: e => async t => {
						const {
							page: s
						} = e.params, n = s && "blocked" === s ? "/settings/privacy" : "/settings/";
						await t(Object(p.c)(n))
					},
					chunk: C.p.EMPTY,
					meta: {
						name: C.zb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(p.c)("/settings/profile"))
					},
					chunk: C.p.EMPTY,
					meta: {
						name: C.zb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				tn = s("./src/reddit/routes/subreddit/index.ts"),
				sn = s("./src/reddit/routes/subredditCreation/index.ts"),
				nn = s("./src/reddit/routes/subredditLeaderboard/index.ts"),
				an = s("./src/reddit/routes/subredditWiki/index.ts"),
				rn = s("./src/reddit/routes/topic/index.ts");
			var on = [hs.a, bs.a, gs.a, Gs, zs, Ks, ...ps.a, ...fs.a, xs, ...ws.a, Bs.a, Es.a, js.a, Fs.a, Ds.a, ...As, Os, Ms, Is.a, Ts.a, _s.a, Ns.c, Ss.a, Us.a, qs.a, Ws.a, Vs.a, Zs.a, Qs.a, Ys.a, ...$s.a, ...en, Xs.a, ...an.a, rn.a, tn.a, sn.a, nn.a, ks.a, Js.a, ...Cs],
				cn = s("./src/reddit/constants/experiments.ts"),
				dn = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ln = s("./src/reddit/selectors/telemetry.ts");
			const mn = {
					displayDelay: 15,
					displayOnRoutes: [C.zb.SUBREDDIT, C.zb.COMMENTS],
					experimentName: cn.Q,
					experimentVariant: cn.W.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				un = e => {
					const {
						base_url: t
					} = Object(ln.requestWithParams)(e), s = Object(ns.b)(e), n = s && s.urlParams.partialPostId, a = s && s.urlParams.subredditName;
					return Object.assign({}, t && {
						rbl: t
					}, a && {
						s: a
					}, n && {
						p: n
					})
				},
				pn = e => {
					if ((((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return t.experimentOverrides[s] === n
						})(mn, e) || (e => {
							let {
								samplingRate: t,
								seed: s
							} = e;
							return !!s && 0 === Math.floor(s * t)
						})(mn)) && ((e, t) => {
							let {
								displayOnRoutes: s
							} = e;
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && s.includes(n)
						})(mn, e) && ((e, t) => {
							let {
								isSEOOnly: s
							} = e;
							return !s || t.meta.isSessionSeo
						})(mn, e) && ((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return Object(dn.c)(t, {
								experimentName: s,
								experimentEligibilitySelector: dn.a
							}) === n
						})(mn, e)) return {
						displayDelay: mn.displayDelay,
						externalVars: un(e)
					}
				};
			var hn = s("./src/reddit/singleton/EventSystem.ts"),
				bn = s("./src/reddit/actions/global.ts");
			Object(r.e)(r.b.EntryPointStart);
			const gn = Object(S.a)({
					actionDispatchers: {
						reddaidReceived: Z.v,
						loidReceived: Z.t,
						sessionTrackerReceived: Z.A
					},
					authHeaders: {
						[L.a]: "desktop2x"
					},
					cookies: l.a,
					receivedActions: {
						reddaidReceived: Z.f,
						loidReceived: Z.d,
						sessionTrackerReceived: Z.m,
						userAuthenticated: Q.c,
						userLoggedOut: Q.d,
						userReauthenticated: Q.e,
						headersReceived: k.a
					},
					onBeforeRequestFactory: cs.a,
					statsAppName: C.l.Redesign
				}),
				fn = Object(w.a)(gn.apiContext),
				Cn = xt();
			let Pn;
			Object(y.a)({
				reducers: us.a,
				routes: on,
				apiContext: gn.apiContext,
				gqlContext: fn.gqlContext,
				appFactory: (e, t) => u.a.createElement(gt.a.Provider, {
					value: Cn.broadcaster
				}, u.a.createElement(ft.a.Provider, {
					value: {
						apiContext: gn.apiContext,
						gqlContext: fn.gqlContext
					}
				}, u.a.createElement(Ct.b, null, u.a.createElement(tt, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(mt, null)))),
				appName: C.l.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const s = Pn;
						if (!s) return;
						s.dispatch(Object(V.k)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), s.dispatch(Object(V.j)())
							}
						}))
					}
				}),
				customMiddleware: [b.a.withExtraArgument({
					routes: on,
					apiContext: gn.apiContext,
					gqlContext: fn.gqlContext
				}), Cn.middleware, gn.middleware, fn.middleware, Ht, It, os, Bt, Ft],
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
					loading: u.a.createElement(ms.a, {
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
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(U.f)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: "t3_".concat(e.data.id36)
							}))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || n.dispatch(Object(V.g)());
					const a = Object(ne.R)(n.getState());
					n.dispatch(Object(z.c)({
						nightmode: a
					})), n.dispatch(Object(V.h)(s));
					t.listen((e, t) => {
						const a = Object(O.a)(Object(c.e)(e), s);
						n.dispatch(Object(V.i)(e, t, a))
					});
					const r = n.getState(),
						{
							currentPage: o
						} = r.platform;
					if (o) {
						const e = [];
						Object(ns.i)(r) && e.push(ht.d), e.length > 0 && n.dispatch(Object(p.c)(Object(v.a)(o.url, e)))
					}
					return is.a.initialize(), {
						localStorageData: Object(ot.o)()
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
					Pn = l;
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
							i = Object(as.D)(s, o) || "";
						ls(i), hn.a.publish(pt.c, r, document)
					});
					const u = l.getState(),
						p = (u.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						h = Object(as.D)(u, p) || "",
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
					}), l.dispatch(Object(bn.b)({
						localStorageData: m
					})), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: o
							} = e.platform,
							i = (o.urlParams.subredditName || "").toLowerCase(),
							c = Object(as.D)(e, i) || "";
						if (ls(c), o && o.meta) {
							const t = o.meta.name;
							if (Object(M.b)(C.l.Redesign, {
									page: t,
									type: "rum"
								}), Object(x.c)(e.meta.userAgent) && window.innerWidth > bt.b) {
								const s = Object(r.f)(d),
									n = [],
									a = {
										isLoggedIn: Object(ne.G)(e),
										name: t,
										statsdPathsForExperiments: n
									};
								Object(r.g)(a, s)
							}
							const s = E.a.timing.domInteractive - E.a.timing.navigationStart;
							Object(ss.g)(o.routeMatch, l.getState(), I.TimerType.Initial, s);
							const i = Object(P.a)(window.location.href);
							Object(j.a)(i.get(ht.u)) && l.dispatch(Object(A.e)({
								kind: D.b.SuccessCommunity,
								text: a.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), i.get(ht.v) && (l.dispatch((e => async (t, s, a) => {
								let {
									apiContext: r
								} = a;
								switch (e) {
									case n.Success:
										t(Object(A.e)({
											kind: D.b.SuccessCommunity,
											text: Object(F.c)("Email verification complete")
										}));
										break;
									case n.AlreadyVerified:
										t(Object(A.e)({
											kind: D.b.SuccessCommunity,
											text: Object(F.c)("Your email address has already been verified.")
										}));
										break;
									case n.WrongUser:
										return void t(Object(A.e)({
											kind: D.b.Error,
											text: Object(F.c)("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.")
										}));
									default:
										t(Object(A.e)({
											kind: D.b.Error,
											text: Object(F.c)("Something went wrong.")
										}))
								}
							})(i.get(ht.v))), history.replaceState(history.state, "", Object(v.a)(window.location.href, [ht.v])));
							let c = !1;
							if ((Object($t.b)(ut.a.JustLoggedIn) || i && i.get(ht.n) && Object(j.a)(i.get(ht.n))) && (l.dispatch(Object(A.e)({
									text: a.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), c = !0, Object($t.c)(ut.a.JustLoggedIn), history.replaceState(history.state, "", Object(v.a)(window.location.href, [ht.n]))), Object($t.b)(ut.a.JustLoggedOut) && (c = !0, Object($t.c)(ut.a.JustLoggedOut)), Object(q.b)(e), !1 !== ot.z() && Object(G.a)().then(e => e.requestNotificationsPermissions).then(e => l.dispatch(e(c, !1))), t === C.zb.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								l.dispatch(Object(H.h)({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(_.c)())
						}
						Object(ne.G)(l.getState()) && l.dispatch(Object(N.d)()), Object(g.requestIdleCallback)(async () => {
							l.dispatch(Object(W.d)()), await Object(f.a)() && (e => Object(M.a)(Object.assign({}, ln.defaults(e), {
								screen: ln.screen(e),
								source: "global",
								action: "view",
								noun: "empty"
							})))(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = pn(e);
								t && (await (async e => {
									return (await Object(te.a)(() => s.e("UserZoomIntegration").then(s.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), n && n())
							}, n = t.listen((t, s) => {
								"POP" !== s && e()
							});
							e()
						})
					}), window.history.scrollRestoration = "manual", hn.a.attachStore(l)
				},
				raven: {
					tags: {
						project: C.l.Redesign
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
					action: r.n,
					chunk: a.p.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.APPEAL
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
					action: r.p,
					chunk: a.p.COINS,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.COINS
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
					action: r.o,
					chunk: a.p.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.COINS_MOBILE
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187"), s.e("CollectionCommentsPage")]).then(s.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
					chunk: a.p.COLLECTION_COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.COLLECTION_COMMENTS
					},
					prefetches: [a.p.FRONTPAGE, a.p.COMMENTS_PAGE, a.p.SUBREDDIT]
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187"), s.e("CommentsPage")]).then(s.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
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
					action: r.t,
					chunk: a.p.COMMENTS_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [a.p.FRONTPAGE, a.p.SUBREDDIT]
				}),
				m = [l(a.zb.COMMENTS, i), l(a.zb.DUPLICATES, c), l(a.zb.COMMENTS, d)];
			t.a = m
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
					action: r.u,
					chunk: a.p.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.FRAMED_GILD
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
					action: r.v,
					chunk: a.p.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.FRAMED_MODAL
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
			const c = Object.keys(o.O).map(e => o.O[e]).join("|"),
				d = "/",
				l = "/:sort(".concat(c, ")?"),
				m = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Frontpage~SubredditWiki"), s.e("FrontpageSidebar"), s.e("Frontpage")]).then(s.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
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
					chunk: o.p.FRONTPAGE,
					component: m,
					exact: !0,
					prefetches: [o.p.COMMENTS_PAGE, o.p.SUBREDDIT]
				},
				p = Object.assign({}, u, {
					path: d,
					meta: {
						name: o.zb.INDEX
					}
				}),
				h = Object.assign({}, u, {
					path: l,
					meta: {
						name: o.zb.LISTING
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
				d = Object.keys(o.L).map(e => o.L[e]).join("|"),
				l = "/message/:pageName(".concat(d, ")/:rest(.+)?"),
				m = {
					action: i.A,
					chunk: o.p.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: o.zb.INBOX_PAGES
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~MembershipPaywallPage"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("MembershipPaywallPage")]).then(s.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
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
					chunk: a.p.META_MEMBERSHIP_PAYWALL_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.META_MEMBERSHIP_PAYWALL_PAGE
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
					importAsync: () => Promise.all([s.e("vendors~ModQueuePages"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("ChatPost~ModQueuePages"), s.e("ModQueue~ModQueuePages"), s.e("ModQueuePages")]).then(s.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
				c = Object.keys(o.gb).map(e => o.gb[e]).join("|"),
				d = "/r/mod/about/:pageName(".concat(c, ")?"),
				l = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("ModQueue~ModQueuePages"), s.e("ModQueue")]).then(s.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested);
						await r(e)(t, n, a)
					},
					chunk: o.p.MODQUEUE_PAGES,
					component: i,
					exact: !0,
					meta: {
						name: o.zb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = l
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return h
			}));
			var n = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./src/lib/constants/index.ts");
			const c = Object.keys(i.Ob).map(e => i.Ob[e]).join("|"),
				d = e => "/".concat(e, "/about/scheduledposts"),
				l = e => "/".concat(e, "/about/eventposts"),
				m = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("vendors~ModerationPages"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
				u = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"],
				p = ["/r/:subredditName/about", "/r/:subredditName/about/:pageName(".concat(c, ")"), ...u],
				h = e => !!Object(o.h)(e, {
					path: "/r/:subredditName/about"
				}),
				b = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("vendors~ModerationPages"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested);
						await r(e)(t, n, a)
					},
					chunk: i.p.MODERATION_PAGES,
					component: m,
					exact: !0,
					meta: {
						name: i.zb.MODERATION_PAGES
					},
					path: p,
					prefetches: [i.p.SUBREDDIT]
				};
			t.a = b
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~Multireddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("Multireddit")]).then(s.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
				l = Object.keys(o.O).map(e => "".concat(d, "/:sort(").concat(o.O[e], ")?")),
				m = "/user/:username/m/:multiredditName",
				u = Object.keys(o.O).map(e => "".concat(m, "/:sort(").concat(o.O[e], ")?")),
				p = [d, m, ...l, ...u],
				h = {
					action: i.C,
					chunk: o.p.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.zb.MULTIREDDIT
					},
					path: p,
					prefetches: [o.p.SUBREDDIT]
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187"), s.e("PostDraft")]).then(s.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
					chunk: a.p.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.POST_DRAFT
					},
					path: o,
					prefetches: [a.p.POST_DRAFT]
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
					action: r.D,
					chunk: a.p.PREMIUM,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.PREMIUM
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187"), s.e("ProfileComments")]).then(s.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					chunk: a.p.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.PROFILE_COMMENTS
					},
					path: o,
					prefetches: [a.p.COMMENTS_PAGE]
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
					chunk: a.p.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.PROFILE_MODERATION
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187"), s.e("ProfileOverview")]).then(s.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					chunk: a.p.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.PROFILE_OVERVIEW
					},
					path: o,
					prefetches: [a.p.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("ProfilePosts")]).then(s.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					chunk: a.p.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.PROFILE_POSTS
					},
					path: o,
					prefetches: [a.p.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187"), s.e("Poll~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~reddit-components-Co~d2dc8995"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187"), s.e("Poll~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~reddit-components-Co~d2dc8995"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested);
						await r(e)(t, n, a)
					},
					chunk: o.p.PROFILE_PRIVATE,
					component: c,
					exact: !0,
					meta: {
						name: o.zb.PROFILE_PRIVATE
					},
					path: l,
					prefetches: [o.p.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested);
						await r(e)(t, n, a)
					},
					chunk: a.p.PROFILE_SNOOBUILDER,
					component: o,
					exact: !0,
					meta: {
						name: a.zb.PROFILE_SNOOBUILDER
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
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("PublicAccessNetwork")]).then(s.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
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
					action: r.E,
					chunk: a.p.PUBLIC_ACCESS_NETWORK,
					component: o,
					exact: !0,
					meta: {
						name: a.zb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subreddit/:streamId?", "/rpan/:streamId?"],
					prefetches: [a.p.PUBLIC_ACCESS_NETWORK]
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
					chunk: a.p.REPORT_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: a.zb.REPORT
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
					importAsync: () => Promise.all([s.e("vendors~SearchResults"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187"), s.e("Poll~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~reddit-components-Co~d2dc8995"), s.e("SearchResults")]).then(s.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
					chunk: a.p.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.SEARCH_RESULTS
					},
					path: o,
					prefetches: [a.p.FRONTPAGE, a.p.SUBREDDIT, a.p.COMMENTS_PAGE]
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
			const d = Object.keys(o.Mb).map(e => o.Mb[e]).join("|"),
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
					chunk: o.p.SETTINGS,
					exact: !0,
					meta: {
						name: o.zb.SETTINGS
					},
					path: "/settings/:page(".concat(d, ")?")
				}, {
					action: i.H,
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
					chunk: o.p.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: o.zb.USER_DATA_REQUEST
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("Subreddit")]).then(s.bind(null, "./src/reddit/pages/Subreddit/index.tsx")),
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
				d = Object.keys(o.O).map(e => "/r/:subredditName/:sort(".concat(o.O[e], ")?")),
				l = ["/r/:subredditName", ...d],
				m = {
					action: i.l,
					chunk: o.p.SUBREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.zb.SUBREDDIT
					},
					path: l,
					prefetches: [o.p.COMMENTS_PAGE, o.p.FRONTPAGE]
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
					importAsync: () => Promise.all([s.e("ProfileModeration~Settings~SubredditCreation"), s.e("SubredditCreation~SubredditInlineEditing"), s.e("SubredditCreation")]).then(s.bind(null, "./src/reddit/pages/SubredditCreation/index.tsx")),
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
					chunk: a.p.SUBREDDIT_CREATION,
					exact: !0,
					meta: {
						name: a.zb.SUBREDDIT_CREATION
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
					importAsync: () => s.e("SubredditLeaderboard").then(s.bind(null, "./src/reddit/pages/SubredditLeaderboard/index.tsx")),
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
					action: r.b,
					chunk: a.p.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: a.zb.SUBREDDIT_LEADERBOARD
					},
					path: o,
					prefetches: [a.p.FRONTPAGE]
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("Frontpage~SubredditWiki"), s.e("IdCard~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
					chunk: r.p.EMPTY,
					exact: !0,
					meta: {
						name: r.zb.SUBREDDIT_WIKI
					},
					path: d
				}, u = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("Frontpage~SubredditWiki"), s.e("IdCard~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested);
						await r(e)(t, n, a)
					},
					chunk: r.p.SUBREDDIT_WIKI,
					component: i,
					exact: !0,
					meta: {
						name: r.zb.SUBREDDIT_WIKI
					},
					path: c,
					prefetches: [r.p.SUBREDDIT]
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
					n = Object(o.a)(t, Object(i.c)(e) || s),
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileComments~P~cd1c01d9"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Topic")]).then(s.bind(null, "./src/reddit/pages/Topic/index.tsx")),
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
					chunk: a.p.TOPIC,
					component: o,
					exact: !0,
					meta: {
						name: a.zb.TOPIC
					},
					prefetches: [a.p.COMMENTS_PAGE, a.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/experiments/badging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/utils.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const c = Object(n.a)(e => Object(r.c)(e, {
					experimentName: a.t,
					experimentEligibilitySelector: i.F
				}), o.a),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentName: a.u,
					experimentEligibilitySelector: e => !Object(i.F)(e)
				}), o.a),
				l = Object(n.a)(c, d, (e, t) => e || t),
				m = e => e === a.A.BadgeCounterBottom || e === a.A.BadgeOnlyBottom || e === a.B.BadgeOnlyBottom,
				u = e => e === a.A.BadgeCounterTop || e === a.B.BadgeOnlyTop,
				p = e => {
					const t = c(e);
					return t === a.A.BadgeCounterBottom || t === a.A.BadgeCounterTop
				}
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
				return Object(r.D)(e) || n.k.Treatment1 === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.e
				})
			}
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => Object(r.D)(e) || !(n.Hb.Holdout === Object(a.c)(e, {
				experimentEligibilitySelector: a.a,
				experimentName: n.Eb
			}))
		},
		"./src/reddit/selectors/experiments/upAndComingLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => n.Kb.All === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.Jb
				}),
				o = ["52weeksofcooking", "advancedrunning", "amateur_boxing", "animation", "bathandbodyworks", "bbq", "beer", "beerporn", "blacksmith", "boostedboards", "campinggear", "chipotle", "cookingforbeginners", "decidingtobebetter", "declutter", "dermatology", "dominos", "eczema", "engagementrings", "family", "fermentation", "findfashion", "fitbit", "fixit", "fondanthate", "foodhacks", "glossier", "healthyfood", "homegym", "hotdogs", "hotpeppers", "hotsauce", "howto", "instantpot", "interiordesign", "internetparents", "jeffreestarcosmetics", "knifemaking", "kombucha", "love", "makeupflatlays", "makeuplounge", "malegrooming", "mead", "moissanite", "mommit", "muaythai", "nanny", "narcissisticparents", "outdoors", "ramen", "rawdenim", "recipes", "redwingshoes", "rowing", "sarahsnark", "skincare_addiction", "skookum", "slowcooking", "spicy", "starbucksbaristas", "steak", "swimming", "tacobell", "talesfromthepizzaguy", "traderjoes", "triathlon", "veganfoodporn", "veganrecipes", "weddingsunder10k", "whiskeytribe", "whiskyporn", "wicked_edge", "womenshealth", "xxketo4u2", "yeezys"]
		},
		"./src/reddit/selectors/gold/purchaseCatalog.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			}));
			const n = e => e.goldPurchase.purchaseCatalog.activeCoinSale,
				a = e => e.goldPurchase.purchaseCatalog.coinPackages,
				r = e => e.goldPurchase.purchaseCatalog.pending,
				o = e => e.goldPurchase.purchaseCatalog.errorMessage
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
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/subredditLeaderboard.ts"),
				a = s("./src/reddit/selectors/category.ts"),
				r = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts");
			const o = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				i = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				c = (e, t, s) => t ? n.g : s ? n.l : e || n.a,
				d = (e, t) => {
					const s = e.subreddits.rankings,
						o = t && Object(a.f)(e, {
							categoryName: t
						}),
						i = s[c(o && o.id || null, t === n.h, Object(r.b)(e) && t === n.m)];
					return !(!i || !i.length)
				}
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
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a", "vendors~Chat~Governance~Reddit", "vendors~Governance~Reddit", "vendors~Poll~Reddit", "vendors~Reddit", "Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3", "Chat~Governance~Reddit", "Governance~Reddit", "ModListing~Reddit"]
	]
]);
//# sourceMappingURL=Reddit.2bf2484c51d421d26cbb.js.map