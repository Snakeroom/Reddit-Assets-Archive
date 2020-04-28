// https://www.redditstatic.com/desktop2x/Reddit.800d2a16ce2da0b386b1.js
// Retrieved at 4/28/2020, 1:10:05 PM by Reddit Dataminer v1.0.0
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
		"./src/graphql/operations/SubredditModels.json": function(e) {
			e.exports = JSON.parse('{"id":"d98849822078"}')
		},
		"./src/graphql/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"9e9ef4c82a00"}')
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts");
			const a = 120 * n.Y;
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
					return t !== a.yb.PROFILE && (Object(r.a)(e) ? s.push("frontpage") : s.push("r.".concat(e))), t === a.yb.INDEX ? s.push(a.yb.LISTING) : t && s.push(t), s.join("/")
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
						t.pubads().addEventListener("slotRequested", e.onRequest), t.pubads().addEventListener("impressionViewable", t => e.onAdView(t, !1)), t.pubads().disableInitialLoad(), t.enableServices()
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
						cmd: [() => window.aax.addEventListener("impressionViewable", t => e.onAdView(t, !0))],
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
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			}));
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
					method: l.ab.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
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
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");

			function r(e, t) {
				return Object(a.a)(e, {
					method: "get",
					endpoint: "".concat(n.a.metaUrl, "/users/me").concat(t ? "?fields=specialMemberships" : "")
				})
			}
			var o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/economics/me/constants.ts");
			const c = Object(o.a)(i.a),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const o = s().user.account,
							i = s(),
							d = !i.economics.me.fetched || e && !i.economics.me.data.specialMemberships;
						if (o && d) {
							const s = await r(a(), e);
							if (s.ok) {
								const n = s.body;
								e && !n.specialMemberships && (n.specialMemberships = {}), t(c(n))
							}
						}
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
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "c", (function() {
				return k
			}));
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
				v = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				y = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function P(e) {
				return !!e && "removeBadge" === e.type
			}

			function x(e) {
				if (!P(e)) return e
			}
			const O = () => async (e, t, s) => {
				let {
					apiContext: n
				} = s;
				if (!t().user.account) return;
				await e(Object(v.a)(!0));
				const a = t().economics.me.data.specialMemberships || {},
					r = Object.keys(a);
				if (r.length) {
					const t = await Object(i.d)(n(), r);
					t.ok && e(Object(y.f)(t.body))
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
					s(Object(y.h)(t))
				}
			}, S = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				const o = s(),
					i = o.user.account,
					c = Object(f.g)(o, e.subredditId),
					l = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (i && e.badge) {
					let s, n;
					s = e.placement === p.a.First ? c[h.a.Loyalty] : e.placement === p.a.Second ? c[h.a.Achievement] : c[h.a.Cosmetic], t(Object(y.a)(Object.assign({}, e, {
						badge: x(e.badge),
						currentAppliedBadges: l,
						userId: i.id
					}))), P(e.badge) && s ? n = await Object(d.a)(a(), e.subredditId, s.id, !1) : P(e.badge) || (n = await Object(d.a)(a(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(y.a)(Object.assign({}, e, {
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
					n && (s(S({
						badge: n,
						subredditId: e,
						placement: n.placement
					})), s(Object(y.d)(h.c.MyBadges)))
				}
			}, j = e => async (t, s, n) => {
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
					}), t(Object(y.e)({
						subredditId: e,
						products: d
					}))
				}
			}, k = (e, t, s) => async (n, a, r) => {
				let {
					apiContext: o
				} = r;
				if (await n(E(e, !0)), s && t) {
					const s = a(),
						r = Object(f.g)(s, e),
						o = Object(C.a)(s, t);
					if (!r[Object(h.d)(o.placement)] && o) {
						const t = Object(f.q)(s, {
							subredditId: e,
							badge: o
						});
						t && await n(S({
							badge: t,
							subredditId: e
						}))
					}
					n(Object(y.c)({
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
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				l = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = s("./src/reddit/endpoints/gold/purchase.ts");
			const u = e => ({
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
				}),
				p = e => e.map(u),
				h = e => e.map(e => {
					const t = u(e);
					return Object.assign({}, t, {
						dealInfo: {
							type: e.deal_info.type,
							title: e.deal_info.title,
							subtitle: e.deal_info.subtitle,
							displayDelay: e.deal_info.display_delay
						}
					})
				}),
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
				g = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null;

			function f(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: s,
					deals: n,
					premium_packages: a
				} = e.body, r = {
					activeSaleConfig: g(t),
					coinPackages: p(s),
					dealCoinPackages: h(n),
					premiumPackages: b(a)
				};
				return Object.assign({}, e, {
					body: r
				})
			}
			var C = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const v = Object(a.a)(C.g),
				y = Object(a.a)(C.h),
				P = Object(a.a)(C.f),
				x = () => async (e, t, s) => {
					let {
						apiContext: a
					} = s;
					e(v());
					try {
						const t = await (async e => {
							const t = "".concat(e.apiUrl, "/api/v2/gold/purchase_package_details"),
								s = Object(l.a)(t);
							return Object(i.b)(Object(c.a)(e, [d.a]), {
								method: o.ab.GET,
								endpoint: s
							}).then(m.c).then(f)
						})(a());
						if (!t.ok) throw new Error(t.error && t.error.type || "Unknown error");
						const s = t.body;
						e(y(s))
					} catch (u) {
						r.c.captureException(u);
						const t = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						e(P(t))
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
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var l = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/notificationPrefs.ts"),
				u = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/actions/notifications/constants.ts");
			const h = Object(a.a)(p.d),
				b = Object(a.a)(p.c),
				g = Object(a.a)(p.b),
				f = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const a = t();
					if (!Object(u.i)(a)) return;
					const r = Object(m.b)(a),
						l = Object(m.a)(a);
					if (r || l) return;
					e(h());
					const p = await (e => Object(c.b)(e, {
						endpoint: Object(d.a)("".concat(o.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: i.ab.GET
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
				}, C = Object(a.a)(p.k), v = Object(a.a)(p.j), y = Object(a.a)(p.i), P = e => async (t, s, a) => {
					let {
						apiContext: p
					} = a;
					const h = s();
					if (!Object(u.i)(h)) return;
					if (Object(m.e)(h)) return;
					const b = Object(m.d)(h);
					t(C({
						preferences: e
					}));
					const g = await ((e, t) => Object(c.b)(e, {
						endpoint: Object(d.a)("".concat(o.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: i.ab.POST,
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
					g.ok ? (t(v()), t(Object(r.e)({
						kind: l.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "UBoVR"
						})
					}))) : t(y({
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
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/actions/users.ts"),
				r = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				o = s("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				let s = t();
				Object(o.H)(s) || await e(Object(a.u)()), s = t(), Object(o.H)(s) ? await e(Object(n.e)()) : Object(r.a)(e, s)
			}
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
						Object(c.H)(l) || s.push(e(Object(o.u)()));
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
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
				v = s("./src/reddit/actions/users.ts"),
				y = s("./src/reddit/constants/parameters.ts"),
				P = s("./src/reddit/helpers/externalAccount/index.tsx"),
				x = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				O = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				E = s("./src/reddit/selectors/externalAccount.ts"),
				S = s("./src/reddit/selectors/user.ts");
			const w = e => async (t, s) => {
				await t(Object(v.u)());
				const w = [t(Object(b.x)(!0)), t(Object(m.a)())];
				s().economics.paymentSystems.status === O.a.NotFetched && w.push(t(Object(l.a)())), await Promise.all(w); {
					const e = s();
					if (!Object(S.H)(e)) return Object(x.a)(t, e)
				}
				const {
					page: j = r.Lb.Account
				} = e.params;
				if (j === r.Lb.Gold) return void t(Object(a.c)("/settings/premium"));
				const k = [];
				j === r.Lb.Profile && (k.push(t(Object(g.a)())), k.push(t(Object(f.e)()))), j === r.Lb.Account && k.push(t(Object(u.o)())), j === r.Lb.Notifications && k.push(t(Object(p.a)())), j !== r.Lb.Privacy && j !== r.Lb.Messaging || k.push(t(Object(d.b)())), await Promise.all(k); {
					const e = s(),
						r = e.platform.currentPage,
						{
							url: c
						} = r,
						d = Object(o.a)(c).get(y.c);
					if (d && (t(Object(a.c)(Object(i.a)(c, [y.c]))), Object(E.a)(e))) {
						const e = n.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(C.e)({
							text: e
						})), Object(P.b)(d)
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
				Object(c.H)(s) ? await e(Object(r.f)()) : Object(i.a)(e, s)
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
				a = s("./src/lib/pageTitle.ts"),
				r = s("./src/reddit/actions/category.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/platform.ts"),
				c = s("./src/reddit/actions/subreddit/topSubreddits.ts"),
				d = s("./src/reddit/actions/users.ts"),
				l = s("./src/reddit/constants/listings.ts"),
				m = s("./src/reddit/constants/subredditLeaderboard.ts"),
				u = s("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				h = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts"),
				b = s("./src/reddit/selectors/subredditLeaderboard.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const f = (e, t) => t && e === m.h,
				C = e => async (t, s) => {
					t(Object(o.k)({
						actionSource: o.a.SubredditLeaderboard,
						redirectUrl: l.c[l.b.SubredditLeaderboard]
					})), t(i.l({
						title: Object(a.j)()
					}));
					const r = e.params && e.params.categoryName,
						c = r && Object(u.b)(r);
					Object(h.b)(s()) || c !== m.m || t(Object(n.b)("/subreddits/leaderboard")), await t(v(c))
				}, v = e => async (t, s) => {
					await t(Object(r.h)());
					const n = s(),
						a = Object(g.I)(n),
						o = Object(h.b)(n) && e === m.m;
					if (Object(b.a)(n, e)) return;
					const i = e && Object(p.f)(n, {
							categoryName: e
						}),
						l = i && i.id || m.d,
						u = f(e, a),
						C = ((e, t) => ({
							categoryId: e,
							isOnlyModIncluded: t
						}))(l, u),
						v = Object(b.d)(l, u, o);
					await Promise.all([t(Object(c.a)(C, v)), t(Object(d.u)())])
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
					if (t === i.l) return void(Object(m.b)(n()) && s(v()));
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
				}, v = () => async (e, t, s) => {
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
							subreddits: v
						} = Object(l.a)(f);
					e(b({
						subreddits: v
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
				small: "FBb4FZ4ng7CvLYrT6LBdp",
				linkSSO: "_1tkWI8llrZeOKvpC2V8tlV",
				linkSso: "_1tkWI8llrZeOKvpC2V8tlV",
				linkSSOFail: "_3AjwpUOSJodTzxQVB71-yC",
				linkSsoFail: "_3AjwpUOSJodTzxQVB71-yC",
				unlinkSSO: "_2TMy4J7EMLqOVL5X_cBjGa",
				unlinkSso: "_2TMy4J7EMLqOVL5X_cBjGa"
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
				underlineButton: "_1uQwMnfXrOfzkL_CFxH6fd",
				underlineLink: "vOGtEDdh1mVbkqinhg3Ov",
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
				bottomAdContainer: "_2SL_DAWw1V6pxZysgrdeBe",
				sidebarFooter: "_2AJ0ZwpZtFJ10GdcU0CUew",
				sidebarFooterWithAd: "_1ht98h5gXjzYhFyRZgB0Pv",
				bottomSpacer: "_14-8KVF3BKuTNsLNWcOG2X",
				showEmailCollectionBanner: "_25N7Qd1z8aRQYtQhjEFyTC",
				overlayScrollContainer: "_29IbETWb5VVDcfk_-GumWz",
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym",
				popupContainer: "_13Vg6OZEIy5AcJ_DOw6jK0"
			}
		},
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return em
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/isEqual.js"),
				r = s.n(a),
				o = s("./node_modules/lodash/omit.js"),
				i = s.n(o),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				u = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/react-router/esm/react-router.js"),
				h = s("./node_modules/react-router-redux/es/index.js"),
				b = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				C = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				v = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				y = s("./src/lib/fastdom/index.ts"),
				P = s("./src/lib/FocusTrap/index.ts"),
				x = s("./src/lib/isEqualWithoutKey/index.ts"),
				O = s("./src/lib/isSimpleClick/index.ts"),
				E = s("./src/reddit/actions/header.ts"),
				S = s("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				w = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				j = s("./node_modules/polished/dist/polished.es.js"),
				k = s("./node_modules/react-motion/lib/react-motion.js"),
				M = s("./src/lib/lessComponent.tsx"),
				_ = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				I = s("./src/lib/addQueryParams/index.ts"),
				N = s("./src/reddit/actions/preferences.ts"),
				T = s("./src/lib/makeActionCreator/index.ts"),
				R = s("./src/reddit/actions/sso/constants.ts");
			const L = Object(T.a)(R.a),
				A = Object(T.a)(R.b);
			var F = s("./src/reddit/actions/toaster.ts"),
				D = s("./src/reddit/constants/accountManager.ts"),
				U = s("./src/reddit/constants/history.ts"),
				B = s("./src/reddit/constants/listings.ts"),
				H = s("./src/reddit/constants/parameters.ts"),
				G = s("./src/reddit/helpers/history/index.ts"),
				q = s("./src/reddit/icons/svgs/Close/index.tsx"),
				W = s("./src/reddit/models/Toast/index.ts"),
				V = s("./src/reddit/selectors/accountManager.ts"),
				Q = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				z = s("./src/reddit/selectors/telemetry.ts"),
				Z = s("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				K = s.n(Z);
			const Y = _.a.redditUrl,
				J = M.a.iframe("IFrame", K.a),
				X = M.a.button("CloseButton", K.a),
				$ = M.a.wrapped(q.a, "Close", K.a),
				ee = Object(b.c)({
					accountManagerSrc: V.c,
					actionSource: V.a,
					frontpageSignupVariant: Q.a,
					redirectUrl: V.b
				}),
				te = Object(u.b)(ee, (e, t) => ({
					oniFrameLoaded: (t, s) => {
						e((e, n) => {
							t.contentWindow.postMessage({
								events: Object.assign({}, Object(z.defaults)(n()), {
									actionSource: s
								}),
								type: "eventData"
							}, Y)
						})
					},
					onTwoFactorChanged: () => e(Object(N.x)(!1)),
					onSSOLinkSuccess: (t, s) => {
						e(L({
							linkedIdentity: s
						})), e(Object(F.e)(Object(F.d)(t, W.b.SuccessCommunity)))
					},
					onSSOUnlinkFail: t => e(Object(F.e)(Object(F.d)(t, W.b.Error))),
					onSSOUnlinkSuccess: (t, s) => {
						e(A({
							linkedIdentity: s
						})), e(Object(F.e)(Object(F.d)(t, W.b.SuccessCommunity)))
					}
				})),
				se = e => {
					let {
						data: t,
						origin: s
					} = e;
					return t && t.success && (t.type === D.a.ChangePassword || t.type === D.a.Close || t.type === D.a.CreateAccount || t.type === D.a.Login || t.type === D.a.Register || t.type === D.a.Resize || t.type === D.a.SSOLinkFail || t.type === D.a.SSOLinkSuccess || t.type === D.a.SSOUnlinkFail || t.type === D.a.SSOUnlinkSuccess || t.type === D.a.Subscribe || t.type === D.a.TwoFactorChanged) && s === _.a.accountManagerOrigin
				};
			class ne extends m.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = m.a.createRef(), this.isAccountCreated = !1, this.focusFirstVisibleIframeInput = () => {
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
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && se(e))
							if (t.type === D.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === D.a.Close) this.close();
						else if (t.type === D.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === D.a.Login) this.onLogIn();
						else if (t.type === D.a.ChangePassword) this.onChangePassword();
						else if (t.type === D.a.Resize) {
							if (t.payload && this.iframeRef.current) {
								const e = t.payload;
								e.height && e.width && (this.iframeRef.current.style.height = "".concat(e.height, "px"), this.iframeRef.current.style.width = "".concat(e.width, "px"))
							}
						} else t.type === D.a.TwoFactorChanged ? this.props.onTwoFactorChanged() : t.type === D.a.SSOLinkFail ? this.props.onSSOLinkFail && this.props.onSSOLinkFail() : t.type === D.a.SSOLinkSuccess ? this.props.onSSOLinkSuccess(n.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), t.payload) : t.type === D.a.SSOUnlinkFail ? this.props.onSSOUnlinkFail(n.fbt._("Could not disconnect. Please try again", null, {
							hk: "RtOkn"
						})) : t.type === D.a.SSOUnlinkSuccess ? this.props.onSSOUnlinkSuccess(n.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), t.payload) : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(G.a)(U.a.JustLoggedIn, !0), window.location.reload(!0))
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload(!0)
					}, this.onSignUp = (e, t) => {
						let s = "";
						if (this.props.redirectUrl) s = this.props.redirectUrl;
						else if ("/" !== window.location.pathname) s = window.location.href;
						else {
							const n = 0;
							s = (e || t && t.length || 0) > n ? B.c[B.b.Home] : B.c[B.b.Popular]
						}
						this.redirectTo(s)
					}, this.redirectTo = e => {
						window.location.replace(Object(I.a)(e, {
							[H.n]: "true"
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(J, {
						className: t,
						innerRef: this.iframeRef,
						src: e
					}), s && m.a.createElement(X, {
						onClick: this.close
					}, m.a.createElement($, null)))
				}
			}
			var ae = te(ne),
				re = s("./src/reddit/components/TrackingHelper/index.tsx");
			const oe = [],
				ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe;
					return t => Object.assign({}, z.defaults(t), {
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
			var ce = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				de = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				le = s("./src/reddit/components/Carousel/index.tsx"),
				me = s("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				ue = s.n(me);
			const pe = M.a.div("Container", ue.a),
				he = M.a.wrapped(le.b, "Carousel", ue.a),
				be = M.a.div("Phone", ue.a),
				ge = M.a.img("Frame", ue.a),
				fe = "".concat(_.a.assetPath, "/img/frontpage-signup/android-frame.png"),
				Ce = "".concat(_.a.assetPath, "/img/frontpage-signup/iphone-frame.png"),
				ve = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				ye = [{
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
					return m.a.createElement(pe, {
						className: t
					}, m.a.createElement(be, {
						className: ue.a.android
					}, m.a.createElement(he, {
						animationType: le.a.Fade,
						className: ue.a.android,
						delay: 2500,
						items: ve,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(ge, {
						src: fe
					})), m.a.createElement(be, {
						className: ue.a.iphone
					}, m.a.createElement(he, {
						animationType: le.a.Fade,
						className: ue.a.iphone,
						items: ye,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(ge, {
						src: Ce
					})))
				},
				xe = s("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				Oe = s.n(xe);
			const Ee = M.a.div("Container", Oe.a),
				Se = M.a.span("Disclaimer", Oe.a),
				we = M.a.a("Link", Oe.a);
			var je = e => m.a.createElement(Ee, {
					className: e.className
				}, m.a.createElement(we, {
					href: "https://about.reddit.com"
				}, n.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(we, {
					href: "https://www.redditinc.com/advertising"
				}, n.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(we, {
					href: "http://www.redditblog.com/"
				}, n.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(we, {
					href: "https://about.reddit.com/careers/"
				}, n.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(we, {
					href: "https://www.reddithelp.com"
				}, n.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(we, {
					href: "https://about.reddit.com/press/"
				}, n.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(we, {
					href: "https://www.reddit.com/mobile/download"
				}, n.fbt._("The Reddit App", null, {
					hk: "1N9ljJ"
				})), m.a.createElement(we, {
					href: "https://www.reddit.com/coins"
				}, n.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(we, {
					href: "http://redditgifts.com/"
				}, n.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(we, {
					href: "https://www.reddit.com/premium"
				}, n.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(we, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, n.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(we, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, n.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), m.a.createElement(Se, null, n.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				ke = s("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				Me = s.n(ke);
			const _e = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				Ie = M.a.div("Container", Me.a),
				Ne = M.a.wrapped(ae, "IFrame", Me.a),
				Te = M.a.wrapped(Pe, "Images", Me.a),
				Re = M.a.wrapped(je, "Links", Me.a),
				Le = M.a.div("MainContent", Me.a),
				Ae = M.a.div("MainContentColumn", Me.a),
				Fe = M.a.button("NotReady", Me.a),
				De = M.a.span("NotReadyText", Me.a),
				Ue = M.a.wrapped(ce.a, "NotReadyIcon", Me.a),
				Be = Object(C.a)(e => {
					const {
						className: t,
						containerRef: s,
						frontpageSignupVariant: a,
						onCloseClick: r,
						onVisibilityChange: o
					} = e, i = Object(de.a)(e).bodyText;
					return m.a.createElement(w.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: o
					}, m.a.createElement(Ie, {
						className: t,
						innerRef: s
					}, m.a.createElement(Le, null, m.a.createElement(Ae, null, m.a.createElement(Te, null, "Images Placeholder")), m.a.createElement(Ae, null, m.a.createElement(Ne, {
						className: Object(g.a)({
							[Me.a.fields]: Object(Q.b)(a)
						}),
						path: D.b.Register,
						uiMode: D.c.Embed
					}))), m.a.createElement(Fe, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(j.j)(.8, i)
						}
					}, m.a.createElement(De, null, n.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(Ue, null)), m.a.createElement(Re, null)))
				});
			class He extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Ge extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(ie()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = "-".concat(this.containerRef.current.offsetHeight, "px"), this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(He, {
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Be, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(k.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(k.spring)(n, _e)
						}
					}, this.renderScroller))
				}
			}
			var qe = Object(re.c)(Ge),
				We = s("./node_modules/js-cookie/src/js.cookie.js"),
				Ve = s.n(We),
				Qe = s("./src/lib/localStorageAvailable/index.ts"),
				ze = s("./src/reddit/actions/modal.ts"),
				Ze = s("./src/higherOrderComponents/makeAsync.tsx"),
				Ke = Object(Ze.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("BadgePurchaseModal").then(s.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				Ye = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx");
			var Je = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumPurchaseModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/PurchaseModal/index.tsx")).then(e => e.default)
			});
			var Xe = Object(Ze.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e3dfa4ce"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~d7fcad44"), s.e("EconomicsSupportPaymentModal")]).then(s.bind(null, "./src/reddit/components/Economics/Support/PaymentModal/index.tsx")).then(e => e.default)
				}),
				$e = s("./src/lib/loadWithRetries/index.ts");
			const et = () => null;
			var tt = Object(Ze.a)({
					ErrorComponent: et,
					getComponent: () => Object($e.a)(() => s.e("ManageChatRoomsModal").then(s.bind(null, "./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.tsx"))).then(e => e.default),
					LoadingComponent: et
				}),
				st = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var nt = Object(Ze.a)({
				getComponent: () => Object($e.a)(() => s.e("NotificationsPrePromptLoader").then(s.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const at = () => null;
			var rt = Object(Ze.a)({
					ErrorComponent: at,
					getComponent: () => Object($e.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: at
				}),
				ot = s("./src/higherOrderComponents/asModal/index.tsx"),
				it = s("./src/reddit/actions/structuredStyles/index.ts"),
				ct = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				dt = s("./src/reddit/constants/modals.ts"),
				lt = s("./src/reddit/controls/TextButton/index.tsx"),
				mt = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: ut
			} = s("./node_modules/fbt/lib/FbtPublic.js"), pt = Object(u.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					closeModal: () => {
						e(Object(ze.i)(dt.a.BLADE_NIGHTMODE)), e(Object(it.f)())
					},
					openBlade: () => {
						e(Object(it.e)(s))
					}
				}
			});
			var ht = Object(ot.a)(pt(e => m.a.createElement(ct.c, null, m.a.createElement(ct.g, null, m.a.createElement(mt.a, null, m.a.createElement(ct.n, null, ut._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), m.a.createElement(lt.a, {
					onClick: e.closeModal
				}, m.a.createElement(ct.b, null)))), m.a.createElement(ct.j, null, m.a.createElement(ct.l, null, ut._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), m.a.createElement(ct.e, null, m.a.createElement(ct.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, ut._("Cancel", null, {
					hk: "1f5Zk8"
				})), m.a.createElement(ct.o, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, ut._("Continue", null, {
					hk: "413jMZ"
				})))))),
				bt = s("./src/reddit/actions/authorFlair.ts"),
				gt = s("./src/reddit/actions/userFlair.ts"),
				ft = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				Ct = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				vt = s("./src/reddit/components/FlairPreview/index.tsx"),
				yt = s("./src/reddit/components/FlairSearch/index.tsx"),
				Pt = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				xt = s("./src/reddit/controls/Button/index.tsx"),
				Ot = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				Et = s("./src/reddit/layout/row/Inline/index.tsx"),
				St = s("./src/reddit/models/Flair/index.ts"),
				wt = s("./src/reddit/models/User/index.ts"),
				jt = s("./src/reddit/selectors/authorFlair.ts"),
				kt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Mt = s("./src/reddit/selectors/user.ts"),
				_t = s("./src/reddit/selectors/userFlair.ts"),
				It = s("./src/reddit/components/UserFlairPicker/index.m.less"),
				Nt = s.n(It);
			const Tt = e => e.inContextAuthor && e.currentUser && Object(wt.f)(e.currentUser) === e.inContextAuthor.username,
				Rt = e => e.authorFlair || Tt(e) && e.userFlairData.applied || null,
				Lt = M.a.wrapped(Et.a, "Section", Nt.a),
				At = M.a.div("CheckboxText", Nt.a);
			class Ft extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(z.subredditById)(t, this.props.subredditId)
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
						previewFlair: Rt(e),
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
					} = e.displaySettings, r = this.state.showFlair !== a, o = Rt(this.props);
					if (!n.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(Pt.b)(s, t, o);
					return !(i || c !== Pt.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: s,
						subredditId: a
					} = e, r = s.permissions.canUserChange, o = s.permissions.canUserChange, {
						templates: i,
						templateIds: c
					} = s, d = this.canSave(), l = Tt(e);
					return m.a.createElement(Ct.a, null, m.a.createElement(ft.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(vt.a, {
						flair: t.previewFlair,
						flairTemplateType: St.d.UserFlair,
						placeholderText: n.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), o && m.a.createElement(yt.a, {
						flair: t.previewFlair,
						flairTemplateType: St.d.UserFlair,
						subredditId: a,
						templates: i,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), l && m.a.createElement(Lt, null, m.a.createElement(Ot.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(At, null, n.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: Nt.a.buttonsRow
					}, m.a.createElement(xt.f, {
						disabled: !d,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "ZvO9n"
					})), r && m.a.createElement(xt.i, {
						className: Nt.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "23i2at"
					}))))
				}
			}
			const Dt = Object(u.b)(() => Object(b.c)({
				authorFlair: jt.b,
				currentUser: Mt.i,
				inContextAuthor: jt.c,
				isMod: (e, t) => !!Object(kt.j)(e, t),
				userFlairData: _t.c
			}), (e, t) => ({
				activeFlairChanged: (s, n, a, r) => e(Object(gt.o)(s, n, a, r.username, t.subredditId)),
				closeModal: () => e(Object(bt.b)({
					username: null,
					subredditId: null
				}))
			}))(Ft);
			var Ut = Object(ot.a)(Object(re.c)(Dt)),
				Bt = s("./src/reddit/selectors/activeModalId.ts"),
				Ht = s("./src/reddit/selectors/notificationPrefs.ts"),
				Gt = s("./src/reddit/selectors/platform.ts"),
				qt = s("./src/reddit/selectors/removalReasons.ts"),
				Wt = s("./src/reddit/selectors/subredditModeration.ts"),
				Vt = s("./src/reddit/constants/cookie.ts"),
				Qt = s("./src/reddit/featureFlags/index.ts"),
				zt = s("./src/reddit/helpers/localStorage/index.ts"),
				Zt = s("./src/reddit/helpers/toggleBodyScroll/index.ts");

			function Kt() {
				return (Kt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Yt = Object(b.c)({
				anyModalIsOpen: e => !!e.activeModalId,
				authorContext: jt.c,
				badgePurchaseModalIsOpen: Object(Bt.b)(dt.a.BADGE_PURCHASE),
				banContext: Wt.f,
				banModalIsOpen: Object(Bt.b)(dt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Bt.b)(dt.a.BLADE_NIGHTMODE),
				chatroomSettingsModalIsOpen: Object(Bt.b)(dt.a.SUBREDDIT_CHAT_SETTINGS),
				createChatroomModalIsOpen: Object(Bt.b)(dt.a.CREATE_SUBREDDIT_CHAT),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				currentPaymentTarget: e => e.economics.currentPaymentTarget,
				currentSubredditPremiumCorrelationId: e => e.economics.currentModalArgs ? e.economics.currentModalArgs.correlationId : void 0,
				economicsSupportPaymentModalIsOpen: Object(Bt.b)(dt.a.ECONOMY_SUPPORT_MODAL),
				editChatroomModalIsOpen: Object(Bt.b)(dt.a.EDIT_SUBREDDIT_CHAT),
				deleteChatroomModalIsOpen: Object(Bt.b)(dt.a.DELETE_SUBREDDIT_CHAT),
				introModalFeatureEnabled: e => Qt.d.introModal(e),
				isOverlayOpen: Gt.h,
				manageChatroomModalIsOpen: Object(Bt.b)(dt.a.MANAGE_SUBREDDIT_CHAT),
				moderatorPermissions: e => {
					const t = Object(Gt.d)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Wt.C,
				muteModalIsOpen: Object(Bt.b)(dt.a.MUTE_USER),
				notificationsPrePromptIsOpen: Ht.c,
				removalReasonContext: qt.b,
				removalReasonModalIsOpen: Object(Bt.b)(dt.a.ADD_REMOVAL_REASON),
				subredditId: Gt.d,
				subredditPremiumPurchaseModalOpen: Object(Bt.b)(dt.a.SUBREDDIT_PREMIUM_PURCHASE_MODAL),
				userFlairModalIsOpen: Object(Bt.b)(dt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: Mt.u,
				userInRedesignBeta: Mt.B,
				userIsLoggedIn: Mt.H,
				userIsMod: Mt.I,
				userIsNew: Mt.J
			});
			class Jt extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Qe.a)()) return; {
						const e = Ve.a.get(Vt.a);
						e && Ve.a.remove(Vt.a, {
							domain: _.a.cookieDomain
						});
						const t = Object(zt.q)(dt.a.ALPHA_CONSUMER);
						t && Object(zt.A)(dt.a.ALPHA_CONSUMER), (e || t) && Object(zt.P)(dt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, s = Object(zt.q)(dt.a.REDESIGN_MODAL);
					!e && s ? t() : e && !s && Object(zt.P)(dt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), this.props.anyModalIsOpen ? setTimeout(() => Object(Zt.a)(), 500) : setTimeout(() => Object(Zt.b)(), 500)
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
						currentSubredditPremiumCorrelationId: d,
						economicsSupportPaymentModalIsOpen: u,
						editChatroomModalIsOpen: p,
						deleteChatroomModalIsOpen: h,
						manageChatroomModalIsOpen: b,
						muteContext: g,
						muteModalIsOpen: f,
						notificationsPrePromptIsOpen: C,
						removalReasonContext: v,
						removalReasonModalIsOpen: y,
						sendEvent: P,
						subredditId: x,
						subredditPremiumPurchaseModalOpen: O,
						toggleBanModal: E,
						toggleMuteModal: S,
						toggleRemovalReasonsModal: w,
						userFlairModalIsOpen: j
					} = this.props, k = (e, t, s) => n => () => P(a => ({
						source: e,
						action: "click",
						noun: n,
						comment: s && Object(z.comment)(a, s),
						post: s && Object(z.post)(a, s),
						screen: Object(z.screen)(a),
						subreddit: Object(z.subredditById)(a, t)
					}));
					return m.a.createElement(l.Fragment, null, n && s && m.a.createElement(Ye.a, {
						contextId: s.contextId,
						subredditId: s.subredditId,
						toggleModal: E,
						trackAddEvent: k("banned", s.subredditId, s.contextId)("add_in_context"),
						trackEventWithName: k("banned", s.subredditId, s.contextId),
						username: s.username
					}), f && g && m.a.createElement(st.a, {
						contextId: g.contextId,
						subredditId: g.subredditId,
						toggleModal: S,
						trackAddEvent: k("muted", g.subredditId, g.contextId)("add_in_context"),
						username: g.username
					}), (o || b || h || p || r) && x && m.a.createElement(tt, {
						subredditId: x,
						withOverlay: !0
					}), y && v && m.a.createElement(rt, {
						itemIds: v.itemIds,
						subredditId: v.subredditId,
						toggleModal: w,
						trackClick: k("removal_reasons", v.subredditId, 1 === v.itemIds.length ? v.itemIds[0] : void 0)
					}), a && x && m.a.createElement(ht, {
						subredditId: x
					}), j && e && e.subredditId && m.a.createElement(Ut, {
						subredditId: e.subredditId
					}), t && i && m.a.createElement(Ke, {
						withOverlay: !0,
						productId: i
					}), C && m.a.createElement(nt, null), u && c && m.a.createElement(Xe, Kt({
						withOverlay: !0
					}, c)), O && m.a.createElement(Je, {
						ignoreDefaultFocus: !0,
						withOverlay: !0,
						correlationId: d
					}))
				}
			}
			var Xt = Object(u.b)(Yt, e => ({
				markRedesignModalAsClosed: () => e(Object(ze.j)()),
				toggleBanModal: () => e(Object(ze.i)(dt.a.BAN_USER)),
				toggleBladeNightmodeModal: () => e(Object(ze.i)(dt.a.BLADE_NIGHTMODE)),
				toggleMuteModal: () => e(Object(ze.i)(dt.a.MUTE_USER)),
				toggleRemovalReasonsModal: () => e(Object(ze.i)(dt.a.ADD_REMOVAL_REASON))
			}))(Object(re.c)(Jt));
			const $t = {},
				es = () => null;

			function ts(e, t) {
				if (e in $t) throw new Error("Modal with id ".concat(e, " already registered!"));
				$t[e] = t
			}
			var ss = s("./src/reddit/constants/experiments.ts"),
				ns = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				as = s("./src/reddit/components/AccountManagerModal/index.m.less"),
				rs = s.n(as);
			const os = M.a.div("Overlay", rs.a),
				is = M.a.div("IframeContainer", rs.a),
				cs = Object(b.c)({
					frontpageSignupVariant: Q.a
				}),
				ds = {
					[D.b.ChangePassword]: dt.a.CHANGE_PASSWORD_MODAL_ID,
					[D.b.Index]: dt.a.LOGIN_MODAL_ID,
					[D.b.Register]: dt.a.REGISTER_MODAL_ID,
					[D.b.EnableTwoFactor]: dt.a.ENABLE_TWO_FACTOR,
					[D.b.DisableTwoFactor]: dt.a.DISABLE_TWO_FACTOR,
					[D.b.TwoFactorBackupCodes]: dt.a.TWO_FACTOR_BACKUP_CODES,
					[D.b.LinkAppleSSO]: dt.a.LINK_APPLE_SSO,
					[D.b.UnlinkAppleSSO]: dt.a.UNLINK_APPLE_SSO,
					[D.b.LinkGoogleSSO]: dt.a.LINK_GOOGLE_SSO,
					[D.b.UnlinkGoogleSSO]: dt.a.UNLINK_GOOGLE_SSO
				};
			class ls extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						isSSOLinkFailedModal: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === D.b.Register && Object(Q.f)(this.props.frontpageSignupVariant) && ns.a.throttleFeature(ss.O), this.props.sendEvent(ie(this.subscriptions))
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}, this.handleSSOLinkFail = () => {
						this.setState({
							isSSOLinkFailedModal: !0
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						path: t
					} = this.props, {
						isSSOLinkFailedModal: s
					} = this.state, n = Object(Q.c)(e) || Object(Q.d)(e), a = t === D.b.LinkAppleSSO || t === D.b.LinkGoogleSSO, r = t === D.b.UnlinkAppleSSO || t === D.b.UnlinkGoogleSSO, o = Object(g.a)({
						[rs.a.small]: n,
						[rs.a.linkSSO]: a,
						[rs.a.unlinkSSO]: r,
						[rs.a.linkSSOFail]: s
					});
					return r ? (() => m.a.createElement(is, {
						className: o
					}, m.a.createElement(ae, {
						onClose: this.closeModal,
						path: t
					})))() : (() => m.a.createElement(os, null, m.a.createElement(is, {
						className: o
					}, m.a.createElement(ae, {
						onClose: this.closeModal,
						onSSOLinkFail: this.handleSSOLinkFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						path: t,
						showCloseButton: !n && !s
					}))))()
				}
			}
			const ms = Object(u.b)(cs, (e, t) => ({
				closeModal: t => {
					e(Object(ze.g)(ds[t]))
				}
			}))(Object(re.c)(ls));
			ts(dt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(ms, {
				path: D.b.ChangePassword
			})), ts(dt.a.LOGIN_MODAL_ID, e => m.a.createElement(ms, {
				path: D.b.Index
			})), ts(dt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(ms, {
				path: D.b.EnableTwoFactor
			})), ts(dt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(ms, {
				path: D.b.DisableTwoFactor
			})), ts(dt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(ms, {
				path: D.b.TwoFactorBackupCodes
			})), ts(dt.a.REGISTER_MODAL_ID, e => m.a.createElement(ms, {
				path: D.b.Register
			})), ts(dt.a.LINK_APPLE_SSO, e => m.a.createElement(ms, {
				path: D.b.LinkAppleSSO
			})), ts(dt.a.LINK_GOOGLE_SSO, e => m.a.createElement(ms, {
				path: D.b.LinkGoogleSSO
			})), ts(dt.a.UNLINK_APPLE_SSO, e => m.a.createElement(ms, {
				path: D.b.UnlinkAppleSSO
			})), ts(dt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(ms, {
				path: D.b.UnlinkGoogleSSO
			}));
			const us = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("BadgePickerModal").then(s.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.BADGE_PICKER, e => m.a.createElement(us, {
				withOverlay: !0
			}));
			const ps = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestPendingModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(ps, {
				withOverlay: !0
			}));
			const hs = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestRequestModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(hs, {
				withOverlay: !0
			}));
			const bs = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~EconHelperActions~SubredditPremiumBadgeManagement"), s.e("SubredditPremiumBadgeManagement")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(bs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const gs = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("SubredditPremiumUploadModal")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(gs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			var fs = s("./src/reddit/helpers/correlationIdTracker.ts");
			const Cs = Object(Ze.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("GoldTargetedOfferModal").then(s.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				vs = e => () => {
					e(), Object(fs.b)(fs.a.GoldPayment)
				};
			ts(dt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(Cs, {
				onOverlayClick: vs(e),
				withOverlay: !0
			}));
			const ys = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("HarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(ys, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ps = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("HarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(Ps, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const xs = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("CryptoHarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(xs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Os = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("CryptoHarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(Os, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Es = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceOptOutModal").then(s.bind(null, "./src/reddit/components/Governance/OptOutModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.GOVERNANCE_OPT_OUT, e => m.a.createElement(Es, null));
			const Ss = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~GovernanceReleaseNotesModal"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("GovernanceReleaseNotesModal")]).then(s.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(Ss, {
				withOverlay: !0
			}));
			const ws = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("GovernanceTransferPointsModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.TRANSFER_POINTS, e => m.a.createElement(ws, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const js = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(js, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ks = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ModToMemberShareModal").then(s.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(ks, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ms = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditAddSubredditModal").then(s.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(Ms, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const _s = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditCreateModal").then(s.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.MULTIREDDIT_CREATE, e => m.a.createElement(_s, {
				onOverlayClick: e,
				withOverlay: !0
			})), ts(dt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(_s, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Is = Object(Ze.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditEditModal").then(s.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			ts(dt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Is, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ns = () => null,
				Ts = Object(Ze.a)({
					ErrorComponent: Ns,
					getComponent: () => Object($e.a)(() => s.e("GlobalModalContainer").then(s.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Ns
				});
			ts(dt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Ts, null));
			var Rs = s("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Ls = s.n(Rs);
			const {
				fbt: As
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Fs = M.a.h2("ColumnLabel", Ls.a), Ds = M.a.wrapped(Et.a, "ColumnWrapper", Ls.a), Us = M.a.div("Column", Ls.a), Bs = M.a.div("Description", Ls.a), Hs = M.a.div("Key", Ls.a), Gs = M.a.wrapped(ct.j, "ModalMain", Ls.a), qs = M.a.wrapped(ct.c, "ModalBody", Ls.a), Ws = M.a.wrapped(xt.f, "PrimaryButton", Ls.a), Vs = M.a.wrapped(lt.a, "TextButton", Ls.a), Qs = Object(u.b)(null, e => ({
				closeModal: () => e(Object(ze.i)(dt.a.KEYBOARD_SHORTCUTS))
			})), zs = M.a.wrapped(Object(ot.a)(Qs(e => m.a.createElement(qs, {
				onClick: e => e.stopPropagation()
			}, m.a.createElement(ct.g, null, m.a.createElement(mt.a, null, m.a.createElement(ct.n, null, As._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), m.a.createElement(Vs, {
				onClick: e.closeModal
			}, m.a.createElement(ct.b, null)))), m.a.createElement(Gs, null, m.a.createElement(Ds, null, m.a.createElement(Us, null, m.a.createElement(Et.a, null, m.a.createElement(Fs, null, As._("Navigation", null, {
				hk: "3zSWEe"
			}))), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), m.a.createElement(Hs, null, "Shift + ?")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Next post or comment", null, {
				hk: "1m8s9z"
			})), m.a.createElement(Hs, null, "J")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), m.a.createElement(Hs, null, "K")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), m.a.createElement(Hs, null, "N")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), m.a.createElement(Hs, null, "P")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Open post", null, {
				hk: "2wD7mh"
			})), m.a.createElement(Hs, null, "Enter")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Open/close expando", null, {
				hk: "1yDst0"
			})), m.a.createElement(Hs, null, "X")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Go to post link", null, {
				hk: "c0TNr"
			})), m.a.createElement(Hs, null, "L"))), m.a.createElement(Us, null, m.a.createElement(Et.a, null, m.a.createElement(Fs, null, As._("Action", null, {
				hk: "3QI6pT"
			}))), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Upvote", null, {
				hk: "5i9NP"
			})), m.a.createElement(Hs, null, "A")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Downvote", null, {
				hk: "1ef3YP"
			})), m.a.createElement(Hs, null, "Z")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("New post", null, {
				hk: "4dtNWf"
			})), m.a.createElement(Hs, null, "C")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Reply to comment", null, {
				hk: "G8AbT"
			})), m.a.createElement(Hs, null, "R")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Submit comment/post", null, {
				hk: "13agk7"
			})), m.a.createElement(Hs, null, "Ctrl + Enter")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Save", null, {
				hk: "3Dtwo5"
			})), m.a.createElement(Hs, null, "S")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Hide", null, {
				hk: "2Dn9GF"
			})), m.a.createElement(Hs, null, "H")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Open navigation", null, {
				hk: "QdGe2"
			})), m.a.createElement(Hs, null, "Q")), m.a.createElement(Et.a, null, m.a.createElement(Bs, null, As._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), m.a.createElement(Hs, null, "Enter"))))), m.a.createElement(ct.e, null, m.a.createElement(Ws, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, As._("Close", null, {
				hk: "2R1HDp"
			})))))), "ConnectedModal", Ls.a);
			ts(dt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(zs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var Zs = s("./src/reddit/i18n/components.tsx");
			const Ks = Object(b.c)({
					allowNavigationCallback: Gt.a
				}),
				Ys = Object(u.b)(Ks, e => ({
					closeModal: () => e(Object(ze.i)(dt.a.BLADE_UNSAVED_CHANGES)),
					closeBlade: () => e(Object(it.a)())
				}));
			class Js extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(ct.c, null, m.a.createElement(ct.g, null, m.a.createElement(mt.a, null, m.a.createElement(ct.n, null, m.a.createElement(Zs.c, null, "Discard unsaved changes before leaving?")), m.a.createElement(lt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(ct.b, null)))), m.a.createElement(ct.j, null, m.a.createElement(ct.m, null, m.a.createElement(Zs.c, null, "You have made some changes to your community, do you wish to leave this menu without saving?"))), m.a.createElement(ct.e, null, m.a.createElement(ct.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, m.a.createElement(Zs.c, null, "Cancel")), m.a.createElement(ct.o, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, m.a.createElement(Zs.c, null, "Discard"))))
				}
			}
			const Xs = Object(ot.a)(Ys(Js));
			ts(dt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Xs, {
				withOverlay: !0
			}));
			const $s = Object(b.c)({
					activeModalId: Bt.a
				}),
				en = Object(u.b)($s, e => ({
					toggleModal: t => e(Object(ze.i)(t))
				})),
				tn = 500,
				sn = () => {};
			class nn extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					this.props.activeModalId ? setTimeout(() => Object(Zt.a)(), tn) : setTimeout(() => Object(Zt.b)(), tn)
				}
				componentWillUnmount() {
					Object(Zt.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					var t;
					return ((t = e) && t in $t ? $t[t] : es)(e ? this.toggleModal : sn)
				}
			}
			var an = en(nn),
				rn = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				on = s("./src/reddit/actions/page.ts"),
				cn = s("./src/reddit/actions/shortcuts.ts"),
				dn = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ln = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				mn = e => m.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, m.a.createElement("path", {
					d: "M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z"
				}), m.a.createElement("path", {
					d: "M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z"
				}));
			var un = s("./src/reddit/selectors/userPrefs.ts"),
				pn = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx")),
				hn = s("./src/reddit/components/SEOTitle/index.tsx"),
				bn = s("./src/reddit/components/SubredditIcon/index.tsx"),
				gn = s("./src/reddit/components/UserIcon/index.tsx"),
				fn = s("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				Cn = s("./src/reddit/icons/svgs/All/index.tsx");

			function vn(e) {
				return m.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, m.a.createElement("g", null, m.a.createElement("path", {
					d: "M14,4V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V13a1,1,0,0,0,1,1H4V6A2,2,0,0,1,6,4Z"
				}), m.a.createElement("path", {
					d: "M16,5H6A1,1,0,0,0,5,6V16a1,1,0,0,0,1,1h4a5,5,0,0,1-1-3,5,5,0,0,1,5-5,5,5,0,0,1,3,1V6A1,1,0,0,0,16,5Z"
				}), m.a.createElement("path", {
					d: "M19.21,17.79,17.43,16A4,4,0,0,0,18,14a4,4,0,1,0-4,4,4,4,0,0,0,2-.57l1.77,1.77a1,1,0,0,0,1.41-1.41ZM14,16a2,2,0,1,1,2-2A2,2,0,0,1,14,16Z"
				})))
			}
			var yn = s("./src/reddit/icons/svgs/Coin/index.tsx"),
				Pn = s("./src/reddit/icons/svgs/Envelope/index.tsx"),
				xn = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				On = s("./src/reddit/constants/colors.ts"),
				En = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				},
				Sn = Object(C.a)(e => {
					var {
						className: t,
						isBadged: s
					} = e, n = En(e, ["className", "isBadged"]);
					return m.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg"
					}, m.a.createElement("path", {
						d: "M15,9.9V8A5,5,0,0,0,5,8V9.9c-2.41.45-4,1.24-4,2.13,0,1.41,4,2.56,9,2.56s9-1.15,9-2.56C19,11.14,17.41,10.35,15,9.9Zm-2,.94a9.62,9.62,0,0,1-3,.39,9.62,9.62,0,0,1-3-.39V8a3,3,0,0,1,6,0Z"
					}), m.a.createElement("path", {
						d: "M2.74,14.6l3,2.12a7.39,7.39,0,0,0,8.6,0l3-2.12a24.63,24.63,0,0,1-7.26,1A24.63,24.63,0,0,1,2.74,14.6Z"
					}), m.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "4",
						fill: s ? Object(de.a)(n).body : "none"
					}), m.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "3",
						fill: s ? On.a.orangered : "none"
					}))
				}),
				wn = s("./src/reddit/icons/svgs/Moderate/index.tsx");

			function jn() {
				return (jn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var kn, Mn = e => m.a.createElement("svg", jn({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), m.a.createElement("path", {
					d: "M17,5H6A1,1,0,0,0,5,6V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V6A1,1,0,0,0,17,5ZM7,7.5A.5.5,0,0,1,7.5,7h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM15.5,16h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5H13a.5.5,0,0,1,0-1h2.5a.5.5,0,0,1,0,1Z"
				}), m.a.createElement("path", {
					d: "M6,4h9.47a2.09,2.09,0,0,1,.51.07V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H4.09A2.09,2.09,0,0,1,4,15.49V6A2,2,0,0,1,6,4Z"
				})),
				_n = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg"
					}, m.a.createElement("polygon", {
						points: "12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6"
					}))
				},
				In = s("./src/reddit/icons/svgs/Post/index.tsx"),
				Nn = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				Tn = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				Rn = s("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Ln = s.n(Rn);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModMailBeta = "ModMailBeta", e.ModQueue = "ModQueue", e.Multi = "Multi", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(kn || (kn = {}));
			const An = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [s, n] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, s && "".concat(s, "/"), n && m.a.createElement(hn.b, {
					type: hn.a.HeaderSelector
				}, n))
			};
			var Fn = s("./src/lib/objectSelector/index.ts"),
				Dn = s("./src/reddit/constants/wiki.ts"),
				Un = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Bn = s("./src/reddit/selectors/subreddit.ts"),
				Hn = s("./src/reddit/selectors/topic.ts");
			var Gn = Object(Fn.a)((e, t) => {
					let {
						pageLayer: s
					} = t;
					const n = !!e.user.account,
						a = Object(dn.T)(s);
					switch (a) {
						case "index":
						case "listing":
							return n ? {
								type: kn.Home
							} : {
								type: kn.Popular
							};
						case "modListing":
							return {
								type: kn.ModListing
							};
						case "modQueuePages":
							return {
								type: kn.ModQueue
							};
						case "postCreation":
							return {
								type: kn.CreatePost
							};
						case "postDraft":
							return {
								type: kn.ViewDraft
							};
						case "subredditCreation":
							return {
								type: kn.SubredditCreation
							};
						case "coins":
							return {
								type: kn.Coins
							};
						case "premium":
							return {
								type: kn.Premium
							};
						case "acknowledgements":
							return {
								type: kn.Acknowledgements
							};
						case "appeal":
							return {
								type: kn.Appeal
							};
						case "report":
							return {
								type: kn.Report
							};
						case "userDataRequest":
							return {
								type: kn.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: kn.DailyCharts
							};
						case "topic": {
							const t = Object(dn.s)(s),
								n = t && Object(Hn.c)(e, t, !0);
							if (n) return {
								type: kn.Topic,
								model: n
							}
						}
					}
					const r = e.user.account;
					if (r) switch (a) {
						case "inboxPages":
							return {
								type: kn.Inbox, model: r
							};
						case "settings":
							return {
								type: kn.Settings, model: r
							}
					}
					const o = Object(dn.N)(e, {
						pageLayer: s
					});
					if ("all" === o) return {
						type: kn.All
					};
					if ("popular" === o) return {
						type: kn.Popular
					};
					const i = Object(dn.q)(e, {
						pageLayer: s
					});
					if (i) return "searchResults" === a ? {
						type: kn.CommunitySearch,
						model: i
					} : {
						type: kn.Community,
						model: i
					};
					const c = Object(dn.d)(e, {
						pageLayer: s
					});
					if (c) return {
						type: kn.Multi,
						model: c
					};
					const d = Object(dn.j)(e, {
						pageLayer: s
					});
					if (d) return {
						type: kn.UserProfile,
						model: d
					};
					const l = Object(dn.h)(s);
					if (l) return {
						type: kn.UserProfileName,
						name: "u/".concat(l)
					};
					if (a && "searchResults" === a) return {
						type: kn.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(dn.n)(e, {
								pageLayer: s
							}) || Dn.e,
							n = Object(Bn.y)(e, {
								subredditName: t
							});
						if (n) return {
							type: kn.Community,
							model: n
						}
					}
					return "rpan" === a && Object(Un.a)(e) ? {
						type: kn.PublicAccessNetwork
					} : {
						type: kn.Unknown
					}
				}),
				qn = (s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				Wn = s.n(qn);

			function Vn() {
				return (Vn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function Qn(e) {
				const t = e.icon,
					s = e.text,
					n = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Wn.a.icon
						}), m.a.createElement(s, {
							className: Wn.a.text
						})),
						className: Object(g.a)(Wn.a.item, e.className, {
							[Wn.a.mFocused]: !!e.isFocused,
							[Wn.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return n["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Vn({}, n, {
					href: e.to,
					target: "_blank"
				})) : m.a.createElement(rn.a, Vn({}, n, {
					to: e.to
				})) : m.a.createElement("button", n)
			}
			var zn = s("./src/reddit/helpers/overlay/index.ts"),
				Zn = s("./src/reddit/routes/modListing/index.ts"),
				Kn = s("./src/reddit/selectors/multireddit.ts"),
				Yn = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				Jn = s("./src/lib/LinkedListMap/index.ts");
			const Xn = Object(b.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Kn.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Kn.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var $n;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}($n || ($n = {}));
			const ea = [e => ({
					id: kn.Employee,
					type: $n.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Sn, {
								className: Object(g.a)(t, Ln.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, "Employee Communities")
						}
					},
					telemetryNoun: "employee"
				})],
				ta = [e => ({
					id: kn.All,
					type: $n.GenericLink,
					model: {
						url: "/r/all/",
						displayText: n.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Cn.a, {
								className: Object(g.a)(t, Ln.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("All", null, {
								hk: "2M8nEy"
							}))
						}
					},
					telemetryNoun: "all"
				}), e => ({
					id: kn.DailyCharts,
					type: $n.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: n.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(xn.a, {
								className: Object(g.a)(t, Ln.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("Top Communities", null, {
								hk: "1KzP9v"
							}))
						}
					},
					telemetryNoun: "daily_charts"
				})],
				sa = [e => ({
					id: "reddit-feeds",
					type: $n.Header,
					model: {
						displayText: n.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), (e, t) => ({
					id: kn.Home,
					type: $n.GenericLink,
					model: {
						url: "/",
						displayText: n.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => {
							let {
								className: s
							} = e;
							return m.a.createElement(Sn, {
								className: Object(g.a)(s, Ln.a.itemIcon),
								isBadged: t && t.isBadged
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: kn.Popular,
					type: $n.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: n.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(_n, {
								className: Object(g.a)(t, Ln.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...ta],
				na = [e => ({
					id: "reddit-feeds",
					type: $n.Header,
					model: {
						displayText: n.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: kn.Home,
					type: $n.GenericLink,
					model: {
						url: "/",
						displayText: n.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(_n, {
								className: Object(g.a)(t, Ln.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...ta],
				aa = [e => ({
					id: "reddit-other",
					type: $n.Header,
					model: {
						displayText: n.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: kn.Settings,
					type: $n.GenericLink,
					model: {
						url: "/settings",
						displayText: n.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(fn.a, {
								className: Object(g.a)(Ln.a.userIcon, t)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("User Settings", null, {
								hk: "36WFGd"
							}))
						}
					},
					telemetryNoun: "settings"
				}), e => ({
					id: kn.Inbox,
					type: $n.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: n.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(fn.a, {
								className: Object(g.a)(Ln.a.userIcon, t)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("Messages", null, {
								hk: "43DUrY"
							}))
						}
					},
					telemetryNoun: "mail"
				}), e => ({
					id: kn.CreatePost,
					type: $n.GenericLink,
					model: {
						url: "/submit",
						displayText: n.fbt._("Create Post", null, {
							hk: "dGck6"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(In.a, {
								className: Object(g.a)(t, Ln.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("Create Post", null, {
								hk: "dGck6"
							}))
						}
					},
					telemetryNoun: "create_post"
				})],
				ra = [e => ({
					id: kn.Coins,
					type: $n.GenericLink,
					model: {
						url: "/coins",
						displayText: n.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(yn.a, {
								className: Object(g.a)(t, Ln.a.itemCoin)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("Coins", null, {
								hk: "ZFvDU"
							}))
						}
					},
					telemetryNoun: "coins"
				}), e => ({
					id: kn.Premium,
					type: $n.GenericLink,
					model: {
						url: "/premium",
						displayText: n.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Nn.a, {
								className: Object(g.a)(t, Ln.a.itemPremium)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("Premium", null, {
								hk: "3i2C4T"
							}))
						}
					},
					telemetryNoun: "premium"
				})],
				oa = [e => ({
					id: kn.ModQueue,
					type: $n.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: n.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(wn.a, {
								className: Object(g.a)(t, Ln.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("Mod Queue", null, {
								hk: "12pTAg"
							}))
						}
					},
					telemetryNoun: "mod_queue"
				}), e => ({
					id: kn.ModMailBeta,
					type: $n.GenericLink,
					model: {
						url: "https://mod.reddit.com/mail/all",
						displayText: n.fbt._("Modmail Beta", null, {
							hk: "2CtXgY"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Pn.a, {
								className: Object(g.a)(t, Ln.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("Modmail Beta", null, {
								hk: "2CtXgY"
							}))
						}
					},
					telemetryNoun: "modmail_beta"
				}), e => ({
					id: kn.ModMail,
					type: $n.GenericLink,
					model: {
						url: "/message/moderator",
						displayText: n.fbt._("Modmail", null, {
							hk: "1gjb1m"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Pn.a, {
								className: Object(g.a)(t, Ln.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, n.fbt._("Modmail", null, {
								hk: "1gjb1m"
							}))
						}
					},
					telemetryNoun: "modmail"
				})];

			function ia(e, t) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: $n.Header,
					model: {
						displayText: n.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: $n.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: $n.Header,
					model: {
						displayText: n.fbt._("profiles", null, {
							hk: "bmbRq"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: $n.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var ca = s("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				da = s.n(ca);

			function la(e) {
				return m.a.createElement("div", {
					className: Object(g.a)(da.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var ma = s("./src/reddit/actions/subscription/index.ts"),
				ua = s("./src/reddit/helpers/trackers/customFeeds.ts"),
				pa = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20"
					}, m.a.createElement("g", {
						fill: "inherit",
						fillRule: "evenodd"
					}, m.a.createElement("polygon", {
						points: "15.437 17.594 10.189 14.837 4.941 17.594 5.944 11.755 1.698 7.619 7.565 6.767 10.189 1.454 12.813 6.767 18.68 7.619 14.434 11.755"
					})))
				},
				ha = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				ba = s.n(ha);

			function ga() {
				return (ga = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const fa = Object(b.c)({
					currentUser: Mt.i,
					hideNSFWPref: Mt.z,
					isLoggedIn: Mt.H
				}),
				Ca = Object(u.b)(fa, (e, t) => ({
					toggleFavorite: s => {
						switch (s.stopPropagation(), s.preventDefault(), t.type) {
							case $n.Subreddit:
								e(Object(ma.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case $n.Profile:
								e(Object(ma.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case $n.Multi:
								e(Object(ma.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(ua.f)(t.model.url)) : t.sendEvent(Object(ua.c)(t.model.url))
						}
					}
				}));
			var va = Object(re.c)(Ca((function(e) {
					const t = {
						className: Object(g.a)(ba.a.item, e.className, {
							[ba.a.mFocused]: !!e.isFocused
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
						case $n.Subreddit:
							return m.a.createElement(rn.a, ga({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(bn.b, {
								className: ba.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: ba.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(pa, {
								className: Object(g.a)(ba.a.favorite, {
									[ba.a.mFavorite]: !!e.isFavorite
								})
							})));
						case $n.SubredditAutocomplete:
							return m.a.createElement(rn.a, ga({}, t, {
								"aria-label": e.model.name,
								to: "/r/".concat(e.model.name, "/")
							}), m.a.createElement(bn.b, {
								className: ba.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: ba.a.text
							}, e.model.name));
						case $n.Multi:
							return m.a.createElement(rn.a, ga({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: ba.a.customFeedIcon
							}), m.a.createElement("span", {
								className: ba.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(pa, {
								className: Object(g.a)(ba.a.favorite, {
									[ba.a.mFavorite]: !!e.isFavorite
								})
							})));
						case $n.Profile:
							return m.a.createElement(rn.a, ga({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(gn.a, {
								className: ba.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: ba.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(pa, {
								className: Object(g.a)(ba.a.favorite, {
									[ba.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				ya = s("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Pa = s.n(ya);

			function xa(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: Pa.a.header
				}), m.a.createElement("div", {
					className: Pa.a.item
				}), m.a.createElement("div", {
					className: Pa.a.item
				}), m.a.createElement("div", {
					className: Pa.a.item
				}), m.a.createElement("div", {
					className: Pa.a.item
				}))
			}
			var Oa = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Ea = s("./src/reddit/actions/multireddit/index.ts"),
				Sa = s("./src/reddit/actions/subreddit.ts"),
				wa = s("./src/reddit/constants/keycodes.ts"),
				ja = s("./src/reddit/helpers/trackers/coins.ts"),
				ka = s("./src/reddit/helpers/trackers/premium.ts"),
				Ma = s("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				_a = s.n(Ma);

			function Ia() {
				return (Ia = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function Na(e) {
				return e.id === kn.ModMail || (e.id === kn.ModMailBeta || e.id === kn.CreateCommunity)
			}

			function Ta(e) {
				const t = new Jn.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== $n.Header && e.type !== $n.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const Ra = Object(b.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const s = Xn(e),
							a = new Jn.a("id");
						if (s.account) {
							const r = s.account;
							sa.forEach(e => a.push(e(r))), r.isEmployee && ea.forEach(e => a.push(e(r))), Object(Un.a)(e) && a.push({
								id: kn.PublicAccessNetwork,
								type: $n.GenericClickable,
								model: {
									onClick: () => {
										t(Object(zn.a)(B.c[B.b.Rpan]))
									},
									displayText: n.fbt._("Reddit Public Access Network", null, {
										hk: "3p4s8f"
									}).toString(),
									icon: e => {
										let {
											className: t
										} = e;
										return m.a.createElement(Tn.a, {
											className: Object(g.a)(t, Ln.a.itemPublicAccessNetwork)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, n.fbt._("Reddit Public Access Network", null, {
											hk: "3p4s8f"
										}))
									}
								},
								telemetryNoun: "rpan"
							}), (s.favoriteSubreddits.length || s.favoriteProfiles.length || s.favoriteMultireddits.length) && (a.push({
								id: "header-favorites",
								type: $n.Header,
								model: {
									displayText: n.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), s.favoriteSubreddits.forEach(e => a.push({
								id: "fav" + e.id,
								type: $n.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteProfiles.forEach(e => a.push({
								id: "fav" + e.id,
								type: $n.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteMultireddits.forEach(e => a.push({
								id: "fav" + e.url,
								type: $n.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.multisPending ? a.push({
								id: "multis-pending",
								type: $n.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.multis.length > 0 && (a.push({
								id: "header-multis",
								type: $n.Header,
								model: {
									displayText: n.fbt._("Custom feeds", null, {
										hk: "3K02MA"
									}).toString(),
									button: e => {
										let {
											className: s,
											sendClickEvent: n
										} = e;
										return m.a.createElement("button", {
											onClick: () => {
												t(Object(ze.i)(dt.a.MULTIREDDIT_CREATE)), n()
											},
											className: Object(g.a)(s, Ln.a.multiPlusButton)
										}, m.a.createElement(Yn.a, {
											className: Ln.a.multiPlusIcon
										}))
									},
									buttonTelemetryNoun: "create_new_custom_feed"
								}
							}), s.multis.forEach(e => a.push({
								id: e.url,
								type: $n.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.moderatingSubredditsPending ? a.push({
								id: "moderatingSubreddits-pending",
								type: $n.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.moderatingSubreddits.length && (a.push({
								id: "header-moderating",
								type: $n.Header,
								model: {
									displayText: n.fbt._("moderating subreddits", null, {
										hk: "2z4AZS"
									}).toString()
								}
							}), a.push({
								id: kn.ModListing,
								type: $n.GenericLink,
								model: {
									url: Zn.a,
									displayText: "r/Mod",
									icon: e => {
										let {
											className: t
										} = e;
										return m.a.createElement(wn.a, {
											className: Object(g.a)(t, Ln.a.itemModQueue)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, "r/Mod")
									}
								},
								telemetryNoun: "r_mod"
							}), s.moderatingSubreddits.forEach(e => a.push({
								id: "mod" + e.id,
								type: $n.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), s.subscriptionsPending ? a.push({
								id: "subscriptions-pending",
								type: $n.LoadingState,
								model: {
									displayText: ""
								}
							}) : ia(a, s), aa.forEach(e => a.push(e(r))), Object(Mt.Z)(e) && a.push({
								id: kn.CreateCommunity,
								type: $n.GenericLink,
								model: {
									url: "https://www.reddit.com/subreddits/create",
									displayText: n.fbt._("Create Community", null, {
										hk: "41sjx"
									}).toString(),
									icon: e => {
										let {
											className: t
										} = e;
										return m.a.createElement(In.a, {
											className: Object(g.a)(t, Ln.a.itemIcon)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, n.fbt._("Create Community", null, {
											hk: "41sjx"
										}))
									}
								},
								telemetryNoun: "create_community"
							}), ra.forEach(e => a.push(e(r))), r.isMod && oa.forEach(e => a.push(e(r)))
						} else s.subscriptions.length || Object(Mt.H)(e) ? sa.forEach(e => a.push(e(null))) : na.forEach(e => a.push(e(null))), a.push({
							id: "reddit-other",
							type: $n.Header,
							model: {
								displayText: n.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), ra.forEach(e => a.push(e(null))), ia(a, s);
						return a
					}
				}),
				La = e => ({
					onHomeClicked: () => e(Object(on.x)()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(ma.e)()), e(Object(Sa.q)()), e(Object(Ea.g)())
					},
					onActionDispatched: t => e(t)
				}),
				Aa = (e, t, s) => Object.assign({}, e, t, s, {
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Fa extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							s = this.getList(t, this.props),
							n = Ta(s),
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
						if (e.key === wa.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === wa.b.Tab && this.props.onClose && this.props.onClose(), e.key === wa.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== $n.Header && e.type !== $n.LoadingState && (this.fireTelemetryForListItem(e), e.type === $n.GenericClickable ? e.model.onClick() : Na(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === wa.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === wa.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case kn.Coins:
								ja.f(), t = ja.e();
								break;
							case kn.Premium:
								ka.g(), t = ka.f()
						}
						switch (e.type) {
							case $n.Category:
							case $n.GenericLink:
							case $n.GenericClickable:
							case $n.Multi:
							case $n.Profile:
							case $n.Subreddit:
								this.props.sendEvent(s => Object.assign({}, Object(z.defaults)(s), t ? {
									correlationId: t
								} : null, {
									customFeed: e.type === $n.Multi ? Object(z.customFeedByPath)(s, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case $n.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => Object.assign({}, Object(z.defaults)(e), {
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
						focusOrder: Ta(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						s = this.getList(t, e),
						n = Ta(s);
					this.setState({
						focusOrder: n,
						renderableList: s
					})
				}
				getList(e, t) {
					if (e) {
						const s = new Jn.a("id"),
							n = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case $n.Category:
								case $n.GenericLink:
								case $n.Multi:
								case $n.Profile:
								case $n.Subreddit:
									e.model.displayText.match(n) && s.push(e);
									break;
								case $n.Header: {
									const t = s.last();
									t && t.type === $n.Header && s.pop(), s.push(e);
									break
								}
								case $n.LoadingState:
							}
						});
						const a = s.last();
						return a && a.type === $n.Header && s.pop(), s
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
					return m.a.createElement("div", {
						role: "menu",
						className: this.props.className
					}, m.a.createElement("div", {
						"aria-live": "assertive",
						"aria-label": t && t.model.displayText ? "".concat(t.model.displayText, " ").concat(n.fbt._("selected", null, {
							hk: "QqrSS"
						})) : ""
					}), m.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": n.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: _a.a.filter,
						id: "header-subreddit-filter",
						placeholder: n.fbt._("Filter", null, {
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === kn.Home && this.props.onHomeClicked(), e.type === $n.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case $n.GenericClickable:
								return m.a.createElement(Qn, Ia({}, s, {
									className: _a.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case $n.Category:
							case $n.GenericLink:
								return m.a.createElement(Qn, Ia({}, s, {
									externalLink: Na(e),
									className: _a.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case $n.Header: {
								const s = e.model.button;
								return m.a.createElement(la, {
									className: _a.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								}, e.model.displayText, s && m.a.createElement(s, {
									className: _a.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case $n.LoadingState:
								return m.a.createElement(xa, {
									className: _a.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								});
							case $n.Multi:
								return m.a.createElement(va, Ia({}, s, {
									className: _a.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: $n.Multi
								}));
							case $n.Profile:
								return m.a.createElement(va, Ia({}, s, {
									className: _a.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: $n.Profile
								}));
							case $n.Subreddit:
								return m.a.createElement(va, Ia({}, s, {
									className: _a.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: $n.Subreddit
								}))
						}
					}))
				}
			}
			const Da = Object(u.b)(Ra, La, Aa)(Object(re.c)(Fa)),
				Ua = Object(u.b)(Ra, La, Aa)(Object(re.c)(Object(Oa.b)(Fa))),
				Ba = Object(dn.t)({
					isCommentsPage: dn.w,
					pageLayer: e => e
				}),
				Ha = Object(b.c)({
					currentPage: Gn,
					hideNSFWPref: Mt.z,
					isDropdownOpen: e => e.header.isSubscriptionsDropdownOpen,
					isLoggedIn: Mt.H,
					isOverlayOpen: Gt.h,
					isPinnedSubscriptionsMenuDisabled: un.a,
					isSubscriptionsPinned: un.b
				});
			class Ga extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(cn.r)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => Object.assign({}, Object(z.defaults)(e), {
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
						isCommentsPage: a,
						isLoggedIn: r,
						isOverlayOpen: o
					} = this.props, i = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, c = o || !r && a;
					return m.a.createElement("div", {
						"aria-label": n.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "2PXR4j"
						}),
						className: Object(g.a)(Ln.a.container, t, {
							[Ln.a.mOpen]: i,
							[Ln.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[Ln.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, m.a.createElement("button", {
						className: Ln.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, m.a.createElement("span", {
						className: Ln.a.containerText
					}, function(e) {
						switch (e.type) {
							case kn.Acknowledgements:
								return An(n.fbt._("Acknowledgements", null, {
									hk: "32JBVF"
								}).toString());
							case kn.All:
								return An(n.fbt._("All", null, {
									hk: "2gaHOy"
								}).toString());
							case kn.Appeal:
								return An(n.fbt._("Appeal", null, {
									hk: "2dMFkN"
								}).toString());
							case kn.Coins:
								return An(n.fbt._("Coins", null, {
									hk: "3ZpUbG"
								}).toString());
							case kn.Community:
								return An(e.model.displayText, !0);
							case kn.CommunitySearch:
								return An(n.fbt._("Subreddit Results", null, {
									hk: "19qRVH"
								}).toString());
							case kn.CreateCommunity:
								return An(n.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case kn.CreatePost:
								return An(n.fbt._("Create Post", null, {
									hk: "30V40V"
								}).toString());
							case kn.DailyCharts:
								return An(n.fbt._("Top Communities", null, {
									hk: "1sWIEu"
								}).toString());
							case kn.GlobalSearch:
								return An(n.fbt._("Search Results", null, {
									hk: "scJwR"
								}).toString());
							case kn.Home:
								return An(n.fbt._("Home", null, {
									hk: "amHQd"
								}).toString());
							case kn.Inbox:
								return An(n.fbt._("Messages", null, {
									hk: "25MBSp"
								}).toString());
							case kn.ModListing:
								return An("r/Mod");
							case kn.ModMail:
								return An(n.fbt._("Modmail", null, {
									hk: "of9AC"
								}).toString());
							case kn.ModMailBeta:
								return An(n.fbt._("Modmail Beta", null, {
									hk: "2zsXji"
								}).toString());
							case kn.ModQueue:
								return An(n.fbt._("Mod Queue", null, {
									hk: "3hdHhb"
								}).toString());
							case kn.Multi:
								return An(e.model.displayText, !0);
							case kn.Popular:
								return An(n.fbt._("Popular", null, {
									hk: "1rTNHl"
								}).toString());
							case kn.Premium:
								return An(n.fbt._("Premium", null, {
									hk: "x0xKv"
								}).toString());
							case kn.PublicAccessNetwork:
								return An(n.fbt._("Reddit Public Access Network", null, {
									hk: "3agn8V"
								}).toString());
							case kn.Report:
								return An(n.fbt._("Report", null, {
									hk: "1PLTqR"
								}).toString());
							case kn.Settings:
								return An(n.fbt._("User Settings", null, {
									hk: "hcLHW"
								}).toString());
							case kn.SubredditCreation:
								return An(n.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case kn.Topic:
								return An(e.model);
							case kn.Unknown:
								return An("");
							case kn.UserDataRequest:
								return An(n.fbt._("Request your Reddit data", null, {
									hk: "3LqHku"
								}).toString());
							case kn.UserProfile:
								return An(e.model.displayText, !0);
							case kn.UserProfileName:
								return An(e.name, !0);
							case kn.ViewDraft:
								return An(n.fbt._("View Draft", null, {
									hk: "3k2k9a"
								}).toString())
						}
					}(e)), function(e, t) {
						switch (e.type) {
							case kn.Acknowledgements:
								return m.a.createElement(In.a, {
									className: Ln.a.defaultIcon
								});
							case kn.All:
								return m.a.createElement(Cn.a, {
									className: Ln.a.defaultIcon
								});
							case kn.Appeal:
								return m.a.createElement(In.a, {
									className: Ln.a.defaultIcon
								});
							case kn.Coins:
								return m.a.createElement(yn.a, {
									className: Ln.a.coinIcon
								});
							case kn.Community:
							case kn.CommunitySearch: {
								const s = Object(pn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return m.a.createElement(bn.b, {
									className: Ln.a.subredditIcon,
									iconUrl: s.url,
									primaryColor: s.color
								})
							}
							case kn.CreateCommunity:
							case kn.CreatePost:
								return m.a.createElement(In.a, {
									className: Ln.a.defaultIcon
								});
							case kn.DailyCharts:
								return m.a.createElement(xn.a, {
									className: Ln.a.defaultIcon
								});
							case kn.GlobalSearch:
								return m.a.createElement(vn, {
									className: Ln.a.defaultIcon
								});
							case kn.Home:
								return m.a.createElement(Sn, {
									className: Ln.a.defaultIcon
								});
							case kn.Inbox:
							case kn.Settings:
								return m.a.createElement(fn.a, {
									className: Object(g.a)(Ln.a.icon, Ln.a.userIcon)
								});
							case kn.ModListing:
								return m.a.createElement(wn.a, {
									className: Ln.a.modQueueIcon
								});
							case kn.SubredditCreation:
								return m.a.createElement(In.a, {
									className: Ln.a.defaultIcon
								});
							case kn.ModMail:
							case kn.ModMailBeta:
								return m.a.createElement(Pn.a, {
									className: Ln.a.modQueueIcon
								});
							case kn.ModQueue:
								return m.a.createElement(wn.a, {
									className: Ln.a.modQueueIcon
								});
							case kn.Multi:
								return m.a.createElement("img", {
									src: e.model.icon,
									className: Ln.a.customFeedIcon
								});
							case kn.Popular:
								return m.a.createElement(_n, {
									className: Ln.a.defaultIcon
								});
							case kn.Premium:
								return m.a.createElement(Nn.a, {
									className: Ln.a.premiumIcon
								});
							case kn.PublicAccessNetwork:
								return m.a.createElement(Tn.a, {
									className: Ln.a.publicAccessNetworkIcon
								});
							case kn.Report:
								return m.a.createElement(In.a, {
									className: Ln.a.defaultIcon
								});
							case kn.Unknown:
								return m.a.createElement("div", {
									className: Ln.a.unknownIcon
								});
							case kn.UserDataRequest:
								return m.a.createElement(In.a, {
									className: Ln.a.defaultIcon
								});
							case kn.UserProfile: {
								const s = Object(pn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return m.a.createElement(gn.a, {
									className: Object(g.a)(Ln.a.icon, Ln.a.userIcon),
									iconUrl: s.url,
									isNSFW: e.model.isNSFW,
									userName: e.model.name
								})
							}
							case kn.UserProfileName:
								return m.a.createElement("div", {
									className: Ln.a.defaultIcon
								});
							case kn.ViewDraft:
								return m.a.createElement(In.a, {
									className: Ln.a.defaultIcon
								});
							case kn.Topic:
								return m.a.createElement(Mn, {
									className: Ln.a.defaultIcon
								})
						}
					}(e, s), !this.props.isSubscriptionsPinned && m.a.createElement(ln.b, {
						className: Ln.a.caretDown
					})), i && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(mn, {
						className: Object(g.a)(Ln.a.pin, {
							[Ln.a.disabled]: c
						}),
						onClick: c ? void 0 : this.props.onPinSubscriptions
					}), i && m.a.createElement(Ua, {
						canAutofocus: !0,
						className: Ln.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var qa = Ba(Object(u.b)(Ha, (e, t) => ({
					closeDropdown: () => e(Object(E.f)()),
					onLocationRefresh: (s, n) => e(Object(on.F)(s, t.pageLayer, n)),
					onPinSubscriptions: () => {
						e(Object(E.i)()), e(Object(E.f)())
					},
					openDropdown: () => e(Object(E.g)()),
					toggleDropdown: () => e(Object(E.h)())
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onLocationClick: s => t.onLocationRefresh(s, e.isOverlayOpen)
				}))(Object(re.c)(Ga))),
				Wa = s("./src/reddit/components/JumpToContent/index.tsx"),
				Va = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Qa = s("./node_modules/history/esm/history.js"),
				za = s("./node_modules/lodash/debounce.js"),
				Za = s.n(za),
				Ka = s("./node_modules/uuid/v4.js"),
				Ya = s.n(Ka),
				Ja = s("./src/lib/makeSearchKey/index.ts"),
				Xa = s("./src/reddit/actions/post.ts"),
				$a = s("./src/reddit/actions/search.ts"),
				er = s("./src/reddit/actions/search/trending.ts"),
				tr = s("./src/reddit/actions/tooltip.ts"),
				sr = s("./src/higherOrderComponents/asTooltip.tsx"),
				nr = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ar = s("./src/lib/search/index.ts"),
				rr = s("./src/reddit/models/Search/index.ts");
			var or = (e, t, s, n, a, r) => {
					let o, i;
					if ("" !== n.searchQuery) {
						if (n.isTypeaheadSuggestion) o = "/".concat(n.searchQuery);
						else {
							if (i = "".concat(H.o, "=").concat(Object(ar.b)(n.rawQuery || n.searchQuery)), o = "/search/", n.section === rr.c.trending && a && a.source && (i += "&source=".concat(a.source)), e && r ? (o = "/r/".concat(e.name).concat(o), i = "".concat(i, "&").concat(H.p, "=1")) : !e && n.subredditOrProfileRestrictedName && (o = "/".concat(n.subredditOrProfileRestrictedName).concat(o), i = "".concat(i, "&").concat(H.p, "=1")), t) {
								const e = t.url.split("/")[2];
								o = "/user/".concat(e, "/m/").concat(t.name).concat(o), i = "".concat(i, "&").concat(H.p, "=1&").concat(H.i, "=1")
							}
							a && a.category && (i = "".concat(i, "&").concat(H.a, "=").concat(a.category))
						}
						return {
							url: o,
							qs: i
						}
					}
				},
				ir = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				cr = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				dr = s("./src/reddit/icons/svgs/Search/index.tsx"),
				lr = s("./src/reddit/components/SearchDropdown/index.m.less"),
				mr = s.n(lr);
			const ur = Object(sr.a)(nr.b);
			class pr extends m.a.Component {
				constructor() {
					super(...arguments), this.onRecentSearchItemClick = () => {
						this.props.recentSearch.isTypeaheadSuggestion ? this.props.onClearSearchQuery() : this.props.onUpdateSearchQuery(this.props.recentSearch.searchQuery), this.props.onSendDropdownClickEvent(this.props.recentSearch.searchQuery, this.props.recentSearch.searchQuery, z.StructureType.Recent, z.SearchDropdownNouns.Recent)
					}, this.generateFullSearchQuery = e => e.subredditOrProfileRestrictedName ? "".concat(e.subredditOrProfileRestrictedName, " ").concat(e.searchQuery) : e.searchQuery
				}
				render() {
					const {
						props: e
					} = this, {
						activeTooltipId: t,
						className: s,
						focusedItem: a,
						onRemoveRecentSearch: r,
						recentSearch: o,
						toggleTooltip: i
					} = e, c = or(null, null, null, o), d = c && c.url, l = c && c.qs, u = l ? "".concat(d, "?").concat(l) : d, p = this.generateFullSearchQuery(o);
					let h;
					return a && (h = this.generateFullSearchQuery(a)), m.a.createElement(rn.a, {
						"aria-label": o.searchQuery,
						className: Object(g.a)(mr.a.listItem, ba.a.item, s, {
							[mr.a.mFocused]: !(!a || a.section !== rr.c.recent || h !== p)
						}),
						onClick: this.onRecentSearchItemClick,
						key: p,
						role: "link",
						tabIndex: -1,
						to: u || ""
					}, o.displayInfo && o.isTypeaheadSuggestion ? o.displayInfo.iconUrl ? m.a.createElement("div", {
						className: mr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(o.displayInfo.iconUrl, "')")
						}
					}) : m.a.createElement(ir.a, {
						className: mr.a.planetIcon
					}) : m.a.createElement(dr.a, {
						className: Object(g.a)(mr.a.listItemIcon, ba.a.icon)
					}), m.a.createElement("span", {
						className: ba.a.text
					}, p), m.a.createElement("div", {
						onMouseEnter: () => i(p),
						onMouseLeave: () => i(null),
						id: p
					}, m.a.createElement(cr.a, {
						className: Object(g.a)(mr.a.listItemIcon, mr.a.mHoverable, ba.a.icon),
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), r(o)
						}
					}), m.a.createElement(ur, {
						className: mr.a.fixedTextTooltip,
						isOpen: t === p,
						text: n.fbt._("Remove", null, {
							hk: "2P57BY"
						}),
						tooltipId: p,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					})))
				}
			}
			var hr = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				br = s("./src/reddit/components/PostTitle/index.tsx"),
				gr = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				fr = s("./src/reddit/constants/adEvents.ts"),
				Cr = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				vr = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				yr = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			class Pr extends m.a.Component {
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
						if (this.props.onSetRecentSearch(e), this.props.onSendDropdownClickEvent(this.props.trendingItem.searchQuery, this.props.trendingItem.rawQuery || "", z.StructureType.Trending, z.SearchDropdownNouns.Trending), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							this.props.fireAdPixelsOfType(e, fr.a.Click)
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
					} = this.props, a = this.isSponsored(), r = or(null, null, null, s, {
						source: a ? Ja.a.PromotedTrend : Ja.a.Trending
					}), o = r && r.url, i = r && r.qs, c = i ? "".concat(o, "?").concat(i) : o, d = m.a.createElement(rn.a, {
						"aria-label": s.searchQuery,
						className: Object(g.a)(mr.a.listItem, mr.a.mTrending, ba.a.item, ba.a.trending, e, {
							[mr.a.mFocused]: !(!t || t.section !== rr.c.trending || s.searchQuery !== t.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: "trending-".concat(s.searchQuery),
						role: "link",
						tabIndex: -1,
						to: c || ""
					}, m.a.createElement("div", {
						className: ba.a.trendingContent
					}, a && m.a.createElement("div", {
						className: ba.a.promoted
					}, n.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), m.a.createElement("div", null, m.a.createElement(_n, {
						className: Object(g.a)(mr.a.listItemIcon, mr.a.mTrending, ba.a.icon, ba.a.trending)
					}), m.a.createElement("span", null, m.a.createElement(br.a, {
						className: Object(g.a)(mr.a.listItemText, mr.a.mTrending, ba.a.text, ba.a.trending),
						redditStyle: !0,
						size: br.b.Small
					}, s.searchQuery)), s.post && m.a.createElement("div", {
						className: mr.a.postTitle
					}, s.post.title)), s.subredditInfo && m.a.createElement(Cr.a, {
						className: Object(g.a)(ba.a.relatedSubredditMetaData, mr.a.listItemSubtext, {
							[mr.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: n.fbt._("{subreddit name} and more", [n.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(vr.a)(s.post) && m.a.createElement(hr.a, {
						post: s.post,
						removeLink: !0,
						usePreview: a
					}));
					return a ? m.a.createElement(gr.a, {
						post: s.post
					}, d) : d
				}
			}
			var xr = s("./src/reddit/components/Flair/index.tsx");
			class Or extends m.a.Component {
				constructor() {
					super(...arguments), this.onTypeaheadSuggestionClick = () => {
						this.props.onSetRecentSearch(this.props.item), this.props.onSendDropdownClickEvent(this.props.item.searchQuery, this.props.item.searchQuery, z.StructureType.Search, this.props.item.isProfile ? z.SearchDropdownNouns.TypeaheadProfile : z.SearchDropdownNouns.TypeaheadSubreddit), this.props.onClearSearchQuery()
					}
				}
				render() {
					const {
						props: e
					} = this, {
						className: t,
						focusedItem: s,
						item: a
					} = e;
					return m.a.createElement(rn.a, {
						"aria-label": a.searchQuery,
						className: Object(g.a)(mr.a.listItem, mr.a.mTypeahead, ba.a.item, t, {
							[mr.a.mFocused]: !(!s || s.searchQuery !== a.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: a.searchQuery,
						role: "link",
						tabIndex: -1,
						to: "/".concat(a.searchQuery)
					}, a.displayInfo && a.displayInfo.iconUrl ? m.a.createElement("div", {
						className: mr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(a.displayInfo.iconUrl, "')")
						}
					}) : m.a.createElement(ir.a, {
						className: mr.a.planetIcon
					}), m.a.createElement("div", null, a.displayInfo && a.displayInfo.subredditOrProfileName && m.a.createElement("div", {
						className: Object(g.a)(mr.a.listItemText, mr.a.mTypeahead, ba.a.text)
					}, a.displayInfo.subredditOrProfileName), m.a.createElement("div", null, a.displayInfo && null != a.displayInfo.subscribers && m.a.createElement("div", {
						className: Object(g.a)(mr.a.listItemSubtext, ba.a.subText)
					}, n.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [n.fbt._plural(a.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), a.displayInfo && a.displayInfo.isNSFW && m.a.createElement(xr.b, {
						flair: {
							type: St.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var Er = s("./src/reddit/constants/zIndex.ts"),
				Sr = s("./src/reddit/controls/Dropdown/index.tsx");
			const {
				fbt: wr
			} = s("./node_modules/fbt/lib/FbtPublic.js"), jr = "SearchDropdown", kr = 5, Mr = Object(sr.a)(Sr.a);

			function _r(e) {
				const {
					isFixed: t = !0,
					isOverlay: s = !0
				} = e, [n, a] = Object(l.useState)(null), r = function(e) {
					const [t, s] = Object(l.useState)(null), n = Object(l.useCallback)(() => {
						e && s(e.offsetWidth)
					}, [e]);
					return Object(l.useLayoutEffect)(n, [n]), Object(l.useEffect)(() => (window.addEventListener("resize", n), () => window.removeEventListener("resize", n)), [n]), t
				}(e.container), o = {
					width: r ? "".concat(r, "px") : "inherit",
					marginTop: "7px",
					overflow: "scroll"
				};
				e.isFixed && (o.zIndex = Er.h);
				const i = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending;
				return m.a.createElement(Mr, {
					className: Object(g.a)(mr.a.dropdown, Ln.a.listContainer),
					isFixed: t,
					isOpen: e.isOpen,
					isOverlay: s,
					tooltipId: jr,
					noFocus: !0,
					style: o
				}, e.typeaheadSuggestions.map(t => m.a.createElement(Or, {
					focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
					item: t,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onSendDropdownClickEvent: e.onSendDropdownClickEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					fireAdPixelsOfType: e.fireAdPixelsOfType
				})), i && e.recentSearches.map(t => m.a.createElement(pr, {
					activeTooltipId: n,
					focusedItem: e.itemList[e.focusedItemIndex],
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onRemoveRecentSearch: e.onRemoveRecentSearch,
					onSendDropdownClickEvent: e.onSendDropdownClickEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					recentSearch: t,
					toggleTooltip: a
				})), i && e.isInTrendingExperiment && !e.isTrendingPending && e.trendingItems && m.a.createElement("div", {
					className: Object(g.a)(ba.a.title, mr.a.listItemTitle, {
						[mr.a.mWithBorder]: !!e.recentSearches.length
					})
				}, wr._("Trending today", null, {
					hk: "3nAMpY"
				})), (e.isTypeaheadPending || e.isTrendingPending) && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: Object(g.a)(mr.a.loadingItem, Pa.a.item)
				}), m.a.createElement("div", {
					className: Object(g.a)(mr.a.loadingItem, Pa.a.item)
				}), m.a.createElement("div", {
					className: Object(g.a)(mr.a.loadingItem, Pa.a.item)
				}), m.a.createElement("div", {
					className: Object(g.a)(mr.a.loadingItem, Pa.a.item)
				}), m.a.createElement("div", {
					className: Object(g.a)(mr.a.loadingItem, Pa.a.item)
				})), i && e.isInTrendingExperiment && e.trendingItems.slice(0, kr).map(t => m.a.createElement(Pr, {
					key: t.id,
					focusedItem: e.itemList[e.focusedItemIndex],
					fireAdPixelsOfType: e.fireAdPixelsOfType,
					onSendDropdownClickEvent: e.onSendDropdownClickEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					trendingItem: t
				})))
			}
			var Ir = s("./src/reddit/contexts/ApiContext.tsx"),
				Nr = s("./src/lib/makeApiRequest/index.ts"),
				Tr = s("./src/lib/omitHeaders/index.ts"),
				Rr = s("./src/reddit/constants/headers.ts");
			const Lr = (e, t) => Object(Nr.b)(Object(Tr.a)(e, [Rr.a]), {
				endpoint: "".concat(e.apiUrl, "/api/subreddit_autocomplete_v2.json"),
				method: f.ab.GET,
				data: {
					query: t
				}
			});
			var Ar = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				Fr = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const Dr = e => {
				const t = [],
					s = {};
				return e.forEach(e => {
					const n = e.data,
						a = e.kind;
					a === f.vb.Subreddit ? (t.push(n.name), s[n.name] = Object(Fr.a)(n)) : a === f.vb.Account && (t.push(n.subreddit.name), s[n.subreddit.name] = Object(Ar.a)(n.subreddit, n.name))
				}), {
					data: s,
					order: t
				}
			};
			var Ur = s("./src/reddit/helpers/isArrayEqual.ts"),
				Br = s("./src/reddit/helpers/trackers/searchResults.ts"),
				Hr = s("./src/reddit/selectors/experiments/trending.ts"),
				Gr = s("./src/reddit/helpers/chooseVariant/index.ts");
			const qr = e => Object(Mt.E)(e) || ss.ac.Treatment1 === Object(Gr.c)(e, {
				experimentEligibilitySelector: Gr.a,
				experimentName: ss.Xb
			});
			var Wr = s("./src/reddit/selectors/searchResults.ts"),
				Vr = s("./src/reddit/selectors/tooltip.ts"),
				Qr = s("./src/reddit/selectors/trending.ts"),
				zr = s("./src/reddit/controls/Search/index.m.less"),
				Zr = s.n(zr);
			const Kr = Object(dn.t)({
					searchQuery: dn.U,
					pageLayer: e => e
				}),
				Yr = (e, t, s) => e(e => Object.assign({}, Object(Br.c)(e), {
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(fs.c)(fs.a.SearchResults),
					actionInfo: z.actionInfo(e),
					search: z.search(e, s)
				})),
				Jr = Object(u.b)(() => Object(b.c)({
					currentSubredditName: Gt.e,
					currentUser: Mt.i,
					dropdownIsOpen: Object(Vr.b)(jr),
					typeaheadIdsByQuery: Wr.c,
					isInTrendingExperiment: Hr.a,
					isInTypeaheadExperiment: qr,
					isLoggedIn: Mt.H,
					isSubredditSearchAllowed: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(dn.K)(s)
					},
					language: Mt.P,
					multireddit: dn.d,
					routeName: Gt.q,
					subreddit: dn.q,
					trendingItems: Qr.a,
					typeaheadSuggestions: Wr.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(er.b)()),
					fireAdPixelsOfType: (t, s) => e(Object(Xa.z)(t, s)),
					onChange: t => e(Object($a.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object($a.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(h.b)(t)),
					onSearch: (t, s, n) => {
						e(Object(h.b)(Object(Qa.c)({
							pathname: t,
							search: s,
							state: {
								fromPage: n
							}
						})))
					},
					onToggleDropdown: () => e(Object(tr.h)({
						tooltipId: jr
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object($a.i)(t))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onSearch: (n, a) => {
						n.preventDefault();
						const {
							currentUser: r = null
						} = e, o = or(e.subreddit, e.multireddit, r, a, s.searchOptions, e.isSubredditSearchAllowed);
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
						Object(fs.c)(fs.a.SearchResults) || Object(fs.d)(fs.a.SearchResults);
						const e = s.searchOptions || Object(Ja.c)({});
						Yr(s.sendEvent, z.OriginElement.SearchBar, e)
					}
				}));
			class Xr extends m.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await Lr(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = Dr(e.body.data.children);
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
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(zt.B)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(zt.U)(Object.assign({}, e, {
								section: rr.c.recent
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
					}, this.onFetchTypeaheadSuggestions = Za()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery) {
							let t = Object.assign({}, rr.a);
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = Ya()()), this.props.typeaheadSuggestions && t.isTypeaheadSuggestion ? this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, z.StructureType.Search, t.isProfile ? z.SearchDropdownNouns.TypeaheadProfile : z.SearchDropdownNouns.TypeaheadSubreddit) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, z.StructureType.Search, z.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									s = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									n = !!this.props.subreddit && this.props.subreddit.isNSFW,
									a = rr.b.text;
								t = {
									id: Ya()(),
									searchQuery: this.state.searchQuery,
									type: a,
									section: rr.c.recent,
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
						this.props.sendEvent(Object(Br.m)(n, a))
					}, this.onSendDropdownViewEvent = (e, t, s, n) => {
						const a = {
							displayQuery: s,
							rawQuery: n || s,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(Br.n)(e, a))
					}, this.onKeyDown = e => {
						if (e.key === wa.b.Escape && this.close(), e.key === wa.b.Tab && this.close(), e.key === wa.b.ArrowDown) {
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
						if (e.key === wa.b.ArrowUp) {
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
						if (!this.props.trendingItems.length && this.props.isInTrendingExperiment && this.makeTrendingApiRequest(), this.props.currentUser) {
							const e = Object(zt.v)(this.props.currentUser.id);
							e.length > 0 && (this.setState({
								recentSearches: this.props.isLoggedIn ? e : [],
								itemList: [...e, ...this.props.trendingItems]
							}), e.forEach(e => {
								this.onSendDropdownViewEvent(z.SearchDropdownNouns.Recent, z.StructureType.Recent, e.searchQuery)
							})), this.props.trendingItems.length > 0 && this.props.trendingItems.forEach(e => {
								this.onSendDropdownViewEvent(z.SearchDropdownNouns.Trending, z.StructureType.Trending, e.searchQuery)
							})
						}
						this.props.onToggleDropdown()
					}, this.onFormSubmit = e => {
						e.preventDefault(), this.onSearch(e);
						const t = this.props.searchOptions || Object(Ja.c)({});
						t.q || (t.q = this.state.searchQuery), Yr(this.props.sendEvent, "full_search_button", t)
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
					const t = Object(Ur.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						s = Object(Ur.a)(e.trendingItems, this.props.trendingItems);
					if (this.props.searchQuery !== e.searchQuery || !t || !s) {
						const n = this.props.typeaheadSuggestions.length ? this.props.typeaheadSuggestions : [...this.state.recentSearches, ...this.props.trendingItems];
						this.setState(() => {
							const t = {
								itemList: n
							};
							return this.props.searchQuery !== e.searchQuery && (t.searchQuery = this.props.searchQuery || ""), t
						}), !t && this.props.typeaheadSuggestions.length && this.props.typeaheadSuggestions.forEach(e => {
							this.onSendDropdownViewEvent(e.isProfile ? z.SearchDropdownNouns.TypeaheadProfile : z.SearchDropdownNouns.TypeaheadSubreddit, z.StructureType.Search, e.searchQuery)
						}), !s && this.props.trendingItems.length && this.state.fetchedTrending && this.props.trendingItems.forEach(e => {
							this.onSendDropdownViewEvent(z.SearchDropdownNouns.Trending, z.StructureType.Trending, e.searchQuery)
						})
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return m.a.createElement("div", {
						className: Object(g.a)(Zr.a.relativeWrapper, Ln.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: jr,
						ref: this.setContainerRef
					}, m.a.createElement("label", {
						className: Zr.a.iconContainer,
						htmlFor: "header-search-bar"
					}, m.a.createElement(dr.a, {
						className: Zr.a.icon
					})), m.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						method: "get",
						onSubmit: this.onFormSubmit,
						onFocus: e.onFocusSearchBar,
						role: "search"
					}, m.a.createElement("input", {
						id: "header-search-bar",
						name: "q",
						className: Zr.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: n.fbt._("Search", null, {
							hk: "44xF6n"
						}),
						type: "search",
						value: this.state.searchQuery
					})), m.a.createElement(_r, {
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
			var $r = Object(re.c)(Kr(Object(Ir.b)(Jr(Xr)))),
				eo = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				to = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				so = s("./src/reddit/selectors/experiments/responsiveSettings.ts"),
				no = s("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				ao = s.n(no);
			var ro, oo = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(g.a)(ao.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": n.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: ao.a.HomeLink,
						href: _.a.redditUrl
					}, m.a.createElement(eo.a, {
						className: ao.a.Snoo
					}), m.a.createElement(to.a, {
						className: ao.a.Wordmark,
						color: "inherit"
					})))
				},
				io = s("./src/reddit/components/Header/QuickLinks/index.m.less"),
				co = s.n(io);
			! function(e) {
				e.All = "header-quicklinks-all", e.Popular = "header-quicklinks-popular", e.News = "header-quicklinks-news", e.Rpan = "header-quicklinks-rpan"
			}(ro || (ro = {}));
			const lo = Object(b.c)({
				isLoggedIn: e => !!e.user.account,
				showRPANlogo: Un.a
			});
			var mo = Object(u.b)(lo, e => ({
					openStream: () => e(Object(zn.a)(B.c[B.b.Rpan])),
					toggleTooltip: t => e(Object(tr.h)({
						tooltipId: t
					}))
				}))(Object(re.c)((function(e) {
					return m.a.createElement("div", {
						className: Object(g.a)(co.a.container, e.className)
					}, m.a.createElement("div", {
						className: co.a.row
					}, m.a.createElement(rn.a, {
						className: co.a.icon,
						id: ro.Popular,
						to: e.isLoggedIn ? B.c[B.b.Popular] : B.c[B.b.Home],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(z.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "popular"
						})),
						onMouseEnter: () => e.toggleTooltip(ro.Popular),
						onMouseLeave: () => e.toggleTooltip(ro.Popular)
					}, m.a.createElement(_n, null), m.a.createElement(nr.c, {
						caretOnTop: !0,
						tooltipId: ro.Popular,
						text: n.fbt._("Popular", null, {
							hk: "1Kx4va"
						})
					})), m.a.createElement(rn.a, {
						className: co.a.icon,
						id: ro.All,
						to: B.c[B.b.All],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(z.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "all"
						})),
						onMouseEnter: () => e.toggleTooltip(ro.All),
						onMouseLeave: () => e.toggleTooltip(ro.All)
					}, m.a.createElement(Cn.a, null), m.a.createElement(nr.c, {
						caretOnTop: !0,
						tooltipId: ro.All,
						text: n.fbt._("All", null, {
							hk: "1Rk1yU"
						})
					})), e.showRPANlogo && m.a.createElement(rn.a, {
						className: co.a.icon,
						id: ro.Rpan,
						to: B.c[B.b.Rpan],
						onClick: t => {
							(t => {
								t.stopPropagation(), t.preventDefault(), e.openStream()
							})(t), e.sendEvent(e => Object.assign({}, Object(z.defaults)(e), {
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						},
						onMouseEnter: () => e.toggleTooltip(ro.Rpan),
						onMouseLeave: () => e.toggleTooltip(ro.Rpan)
					}, m.a.createElement(Tn.a, null), m.a.createElement(nr.c, {
						caretOnTop: !0,
						tooltipId: ro.Rpan,
						text: n.fbt._("Reddit Public Access Network", null, {
							hk: "38uXOo"
						})
					}))))
				}))),
				uo = s("./src/reddit/actions/login.ts"),
				po = s("./src/reddit/helpers/trackers/authControls.ts"),
				ho = s("./src/chat/helpers/dom.ts"),
				bo = s("./src/reddit/actions/chat/toggle.ts"),
				go = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				fo = s("./src/reddit/actions/postCreation/general.ts"),
				Co = s("./src/reddit/actions/users.ts"),
				vo = s("./src/reddit/components/Settings/modalIds.ts");
			var yo = Object(Ze.a)({
					getComponent: () => Object($e.a)(() => s.e("EmailVerificationModals").then(s.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Po = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				xo = s("./src/reddit/components/Translated/index.tsx"),
				Oo = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				Eo = s("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				So = s.n(Eo);
			class wo extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(Oo.e)(Oo.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(Oo.c)(Oo.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(Oo.e)(Oo.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					wo.shouldSendViewEvent && (wo.shouldSendViewEvent = !1, this.props.sendEvent(Object(Oo.g)(Oo.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: So.a.container
					}, m.a.createElement("div", {
						className: So.a.topLine
					}), m.a.createElement("button", {
						className: So.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(q.a, {
						className: So.a.closeIcon
					})), m.a.createElement("h5", {
						className: So.a.title
					}, m.a.createElement(xo.a, {
						msgId: "header.emailVerificationTooltip.title"
					})), m.a.createElement("p", {
						className: So.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: So.a.description
					}, m.a.createElement(xo.a, {
						msgId: "header.emailVerificationTooltip.description"
					})), m.a.createElement("div", {
						className: So.a.buttonWrapper
					}, m.a.createElement(xt.i, {
						className: So.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, m.a.createElement(xo.a, {
						msgId: "header.emailVerificationTooltip.buttons.updateEmail"
					})), m.a.createElement(xt.f, {
						className: Object(g.a)(So.a.commonBtn, So.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, m.a.createElement(xo.a, {
						msgId: "header.emailVerificationTooltip.buttons.gotIt"
					}))))
				}
			}
			wo.shouldSendViewEvent = !0;
			const jo = Object(Po.a)(wo, [Oa.a.Click, Oa.a.Keydown, Oa.a.Resize]);
			var ko = Object(re.c)(jo),
				Mo = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				_o = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts")),
				Io = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				No = s("./src/reddit/controls/LoadingIcon/index.tsx");
			let To;
			const Ro = () => To,
				Lo = () => To = Ya()(),
				Ao = "gold_top_nav",
				Fo = e => t => Object.assign({
					source: "gold_top_nav",
					action: "click",
					noun: e
				}, (e => ({
					screen: z.screen(e),
					profile: z.profile(e),
					subreddit: z.subreddit(e)
				}))(t)),
				Do = e => t => Object.assign({
					source: Ao,
					action: "click",
					noun: "coins_".concat(e),
					correlationId: Ro()
				}, z.defaults(t)),
				Uo = () => e => Object.assign({
					source: Ao,
					action: "click",
					noun: "premium",
					correlationId: Ro()
				}, z.defaults(e)),
				Bo = () => e => Object.assign({
					source: Ao,
					action: "view",
					noun: "dropdown",
					correlationId: Ro()
				}, z.defaults(e));
			var Ho = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				Go = s("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				qo = s.n(Go);
			var Wo = e => {
					const {
						className: t,
						buttonSubtext: s,
						buttonSubtextCrossout: n,
						buttonText: a,
						goldStyle: r,
						onClick: o,
						primaryText: i,
						subtext: c,
						subtextCrossout: d
					} = e, l = r ? xt.c : xt.f;
					return m.a.createElement("div", {
						className: Object(g.a)(t, qo.a.CompactCoinPurchaseListItem)
					}, m.a.createElement("div", {
						className: qo.a.productSection
					}, m.a.createElement("span", {
						className: qo.a.primaryText
					}, i), m.a.createElement("span", {
						className: Object(g.a)(qo.a.subtext, {
							[qo.a.crossout]: d
						})
					}, Array.isArray(c) ? c.map((e, t) => m.a.createElement("p", {
						key: t
					}, e)) : c)), m.a.createElement("div", {
						className: qo.a.priceSection
					}, m.a.createElement(l, {
						className: Object(g.a)(qo.a.button, {
							[qo.a.goldStyle]: r
						}),
						redditStyle: !0,
						onClick: o
					}, a), m.a.createElement("span", {
						className: Object(g.a)(qo.a.buttonSubtext, {
							[qo.a.crossout]: n
						})
					}, s)))
				},
				Vo = s("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				Qo = s.n(Vo);
			const zo = Object(b.c)({
				coinPackages: Ho.b,
				isPremiumSubscriber: Mt.q,
				premiumPackages: Ho.e,
				purchaseCatalogError: Ho.f,
				purchaseCatalogPending: Ho.g
			});
			class Zo extends m.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: s,
							sendEvent: n
						} = this.props;
						t && t(), n(Do(e.coins)), s(e)
					}, this.handleClickBuyPremium = () => {
						const {
							onClick: e,
							onClickPremiumPackage: t,
							sendEvent: s
						} = this.props;
						e && e(), s(Uo()), t()
					}, e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog()
				}
				getListItemData() {
					const {
						coinPackages: e,
						isPremiumSubscriber: t,
						premiumPackages: s,
						sorted: a
					} = this.props, r = e.map(e => {
						const {
							baselineCoins: t,
							baselinePennies: s,
							coins: a,
							pennies: r,
							bonusPct: o
						} = e, i = a.toLocaleString(), c = n.fbt._("{number of coins} Coins", [n.fbt._param("number of coins", i)], {
							hk: "1bO7gz"
						}), d = "$".concat(r / 100);
						let l, m;
						if (a !== t) {
							const e = t.toLocaleString();
							l = n.fbt._("{number of coins of non-sale package} Coins", [n.fbt._param("number of coins of non-sale package", e)], {
								hk: "owZrf"
							})
						}
						return {
							buttonSubtext: m = r !== s ? "$".concat(s / 100) : o ? n.fbt._("{percent bonus}% Bonus", [n.fbt._param("percent bonus", o.toLocaleString())], {
								hk: "2zgjZ1"
							}) : void 0,
							buttonText: d,
							coinPackage: e,
							primaryText: c,
							subtext: l
						}
					});
					a && r.sort((e, t) => {
						return (e.coinPackage ? e.coinPackage.coins : 0) - (t.coinPackage ? t.coinPackage.coins : 0)
					});
					const o = s.length ? s[0] : void 0;
					if (t || !o) return r;
					const {
						pennies: i,
						periodicalCoins: c,
						signupBonusCoins: d
					} = o, l = d ? d.toLocaleString() : void 0, m = "$".concat((i / 100).toLocaleString()), u = c.toLocaleString(), p = {
						buttonSubtext: l ? n.fbt._("{number of bonus coins} Bonus Coins", [n.fbt._param("number of bonus coins", l)], {
							hk: "3qu4dU"
						}) : void 0,
						buttonText: n.fbt._("{premium price}/mo", [n.fbt._param("premium price", m)], {
							hk: "4Cwbsj"
						}),
						isGoldStyle: !0,
						primaryText: n.fbt._("Premium", null, {
							hk: "45A9gK"
						}),
						subtext: [n.fbt._("{monthly coins} Coins/mo", [n.fbt._param("monthly coins", u)], {
							hk: "2fh3lO"
						}), n.fbt._("Ads free & more", null, {
							hk: "wO4Wc"
						})]
					};
					return r.concat(p)
				}
				render() {
					const {
						className: e,
						coinPackages: t,
						purchaseCatalogError: s,
						purchaseCatalogPending: a
					} = this.props;
					return a ? m.a.createElement("div", {
						className: e
					}, m.a.createElement("div", {
						className: Qo.a.loaderContainer
					}, m.a.createElement(No.a, {
						sizePx: 80
					}))) : s || !t.length ? m.a.createElement("div", {
						className: e
					}, m.a.createElement("div", {
						className: Qo.a.errorContainer
					}, n.fbt._("Oops, something went wrong", null, {
						hk: "4EQRS8"
					}))) : m.a.createElement("div", {
						className: e
					}, this.getListItemData().map(e => {
						const {
							buttonSubtext: t,
							buttonText: s,
							coinPackage: n,
							isGoldStyle: a,
							primaryText: r,
							subtext: o
						} = e, i = n && n.coins !== n.baselineCoins, c = n && n.pennies !== n.baselinePennies;
						return m.a.createElement(Wo, {
							buttonSubtext: t,
							buttonSubtextCrossout: c,
							buttonText: s,
							goldStyle: a,
							key: r,
							onClick: n ? () => this.handleClickBuyCoins(n) : this.handleClickBuyPremium,
							primaryText: r,
							subtext: o,
							subtextCrossout: i
						})
					}))
				}
			}
			var Ko = Object(u.b)(zo, e => ({
					onClickCoinPackage: t => e(Object(_o.f)({
						packageId: t.mobileId
					})),
					onClickPremiumPackage: () => e(Object(Io.f)(Ro())),
					requestPurchaseCatalog: () => e(Object(Mo.a)())
				}))(Object(re.c)(Zo)),
				Yo = s("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				Jo = s.n(Yo);
			const {
				fbt: Xo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), $o = Object(sr.a)(Sr.a);
			class ei extends m.a.Component {
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
					e(Bo())
				}
				renderDefaultHeader() {
					return m.a.createElement("div", {
						className: Jo.a.header
					}, m.a.createElement("span", {
						className: Jo.a.headerText
					}, Xo._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), m.a.createElement(rn.a, {
						className: Jo.a.headerLink,
						to: "/coins"
					}, Xo._("What are Coins?", null, {
						hk: "DNBPx"
					})))
				}
				renderSaleHeader() {
					const {
						activeSaleConfig: e
					} = this.props;
					if (!e) return this.renderDefaultHeader();
					const {
						dropdownHeaderText: t,
						dropdownHeaderBackgroundAsset: s
					} = e;
					return m.a.createElement("div", {
						className: Object(g.a)(Jo.a.header, Jo.a.activeSale)
					}, s && m.a.createElement("img", {
						className: Object(g.a)(Jo.a.saleHeaderImage, Jo.a.activeSale),
						src: s
					}), m.a.createElement("span", {
						className: Jo.a.headerText
					}, t))
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: a
					} = this.props;
					return m.a.createElement($o, {
						className: Object(g.a)(t, Jo.a.CoinPurchaseDropdown, {
							[Jo.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: s,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: a
					}, e ? this.renderSaleHeader() : this.renderDefaultHeader(), m.a.createElement(Ko, {
						className: Jo.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			var ti = Object(re.c)(ei),
				si = s("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				ni = s("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			var ai = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				ri = s("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				oi = s.n(ri);
			const ii = "COIN_PURCHASE_DROPDOWN_ID",
				ci = Object(b.c)({
					activeSaleConfig: Ho.a,
					activeTooltipId: Vr.a,
					coinPackages: Ho.b,
					coinPurchaseDropdownIsOpen: e => Object(Vr.b)(ii)(e),
					coinPurchaseModalIsOpen: ai.a,
					premiumPurchaseModalIsOpen: ai.n,
					purchaseCatalogPending: Ho.g
				});
			class di extends m.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							coinPurchaseDropdownIsOpen: s,
							sendEvent: n,
							toggleTooltip: a
						} = this.props;
						s || (Lo(), Object(si.b)(), Object(ni.b)(), n(Fo("get_coins_cta"))), a(t)
					}
				}
				componentDidMount() {
					const {
						activeSaleConfig: e,
						coinPackages: t,
						purchaseCatalogPending: s,
						requestPurchaseCatalog: n
					} = this.props;
					e || t.length || s || n()
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: s,
						coinPurchaseDropdownIsOpen: a,
						coinPurchaseModalIsOpen: r,
						premiumPurchaseModalIsOpen: o
					} = this.props, i = e ? e.ctaText ? e.ctaText : n.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : n.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					});
					return m.a.createElement("button", {
						className: Object(g.a)(t, oi.a.ctaContainer, {
							[oi.a.activeSale]: !!e
						}),
						id: ii,
						onClick: this.handleClick
					}, m.a.createElement("div", {
						className: Object(g.a)(oi.a.ctaContent, {
							[oi.a.activeSale]: !!e
						})
					}, m.a.createElement(yn.a, {
						className: Object(g.a)(oi.a.icon, {
							[oi.a.activeSale]: !!e
						})
					}), m.a.createElement("span", {
						className: oi.a.text
					}, i)), m.a.createElement(ti, {
						activeSaleConfig: e,
						isOpen: a,
						onCloseTooltip: s,
						tooltipId: ii
					}), r && m.a.createElement(si.a, {
						isCompletePaypal: !1
					}), o && m.a.createElement(ni.a, null))
				}
			}
			var li = Object(u.b)(ci, (e, t) => ({
					closeTooltip: () => e(Object(tr.i)()),
					requestPurchaseCatalog: () => e(Object(Mo.a)()),
					toggleTooltip: t => {
						e(t === ii ? Object(tr.i)() : Object(tr.f)({
							tooltipId: ii
						}))
					}
				}))(Object(re.c)(di)),
				mi = s("./src/reddit/components/HeaderIconContainer/index.m.less"),
				ui = s.n(mi);

			function pi() {
				return (pi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var hi = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const bi = M.a.button("Button", ui.a),
				gi = M.a.div("Container", ui.a);
			var fi = e => {
					const {
						children: t,
						isOpen: s
					} = e, n = hi(e, ["children", "isOpen"]);
					return m.a.createElement(bi, pi({}, n, {
						id: e.id,
						onClick: e.onClick
					}), m.a.createElement(gi, {
						className: Object(g.a)({
							[ui.a.isOpen]: s
						})
					}, t))
				},
				Ci = s("./src/chat/helpers/unreadCount.ts"),
				vi = s("./src/chat/models/Promo/index.ts"),
				yi = s("./src/lib/prettyPrintNumber/index.ts"),
				Pi = s("./src/reddit/components/HeaderUserActions/index.m.less"),
				xi = s.n(Pi);
			var Oi = e => {
					let {
						className: t,
						isActive: s,
						unreadCount: n
					} = e;
					return s ? m.a.createElement("span", {
						className: Object(g.a)(t, xi.a.counter, {
							[xi.a.isHighlighted]: s && n <= 0
						})
					}, n > 0 && Object(yi.b)(n)) : null
				},
				Ei = s("./src/reddit/helpers/trackers/chat.ts"),
				Si = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				wi = s("./src/reddit/selectors/chat.ts");
			const ji = Object(b.c)({
				promos: wi.b,
				unreadCount: wi.d
			});
			class ki extends l.Component {
				componentDidMount() {
					this.props.promos[vi.a.SubredditChatFtux] && this.props.sendEvent(Object(Ei.j)())
				}
				render() {
					const {
						promos: e,
						unreadCount: t
					} = this.props, {
						count: s,
						unread: n
					} = Object(Ci.a)(t, e);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Oi, {
						isActive: n,
						unreadCount: s
					}), m.a.createElement(Si.a, {
						className: Object(g.a)(xi.a.chatIcon, {
							[xi.a.isActive]: n
						})
					}))
				}
			}
			var Mi = Object(u.b)(ji)(Object(re.c)(ki)),
				_i = s("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Ii = s.n(_i);
			var Ni = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: Ii.a.container
				}, m.a.createElement("p", {
					className: Ii.a.title
				}, m.a.createElement(xo.a, {
					msgId: "header.customizeFlyout.title"
				})), m.a.createElement("h5", {
					className: Ii.a.subtitle
				}, m.a.createElement(xo.a, {
					msgId: "header.customizeFlyout.subtitle"
				})), m.a.createElement("p", {
					className: Ii.a.description
				}, m.a.createElement(xo.a, {
					msgId: "header.customizeFlyout.description"
				})), m.a.createElement(xt.i, {
					className: Ii.a.dismissBtn,
					onClick: t
				}, m.a.createElement(xo.a, {
					msgId: "header.customizeFlyout.dismiss"
				})))
			};
			var Ti = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Oi, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(Pn.a, {
					className: Object(g.a)(xi.a.envelopeIcon, {
						[xi.a.isUnread]: !!e.unreadCount
					})
				})),
				Ri = s("./src/reddit/actions/alpha.ts"),
				Li = s("./src/reddit/actions/modMode.ts"),
				Ai = s("./src/reddit/constants/elementClassNames.ts"),
				Fi = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Di = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Ui = s("./src/reddit/helpers/trackers/modTools.ts");
			const Bi = e => ({
				screen: z.screen(e),
				profile: z.profile(e),
				subreddit: z.subreddit(e)
			});
			var Hi = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				Gi = s("./src/reddit/icons/fonts/Premium/index.tsx"),
				qi = s("./src/reddit/icons/svgs/Help/index.tsx"),
				Wi = s("./src/reddit/icons/svgs/KarmaGray/index.m.less"),
				Vi = s.n(Wi);
			var Qi = e => m.a.createElement("svg", {
					className: Object(g.a)(Vi.a.karma, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("path", {
					d: "M3.37,2.75a5.9,5.9,0,0,1,5.49,3.7.62.62,0,0,1-.29.79A3.16,3.16,0,0,0,7.24,8.57a.63.63,0,0,1-.79.29,5.89,5.89,0,0,1-3.7-5.49A.62.62,0,0,1,3.37,2.75Zm8.06,4.49a.63.63,0,0,1-.29-.79,5.89,5.89,0,0,1,5.49-3.7.61.61,0,0,1,.62.6v0a5.89,5.89,0,0,1-3.7,5.49.62.62,0,0,1-.79-.29A3.16,3.16,0,0,0,11.43,7.24Zm2.12,3.9a5.89,5.89,0,0,1,3.7,5.49.62.62,0,0,1-.62.62h0a5.89,5.89,0,0,1-5.49-3.7.63.63,0,0,1,.29-.79,3.16,3.16,0,0,0,1.33-1.33A.62.62,0,0,1,13.55,11.14Zm-5,1.62a.62.62,0,0,1,.29.79,5.89,5.89,0,0,1-5.49,3.7.62.62,0,0,1-.62-.62h0a5.9,5.9,0,0,1,3.7-5.49.62.62,0,0,1,.79.29,3.1,3.1,0,0,0,1.35,1.33ZM10,5.93A7.23,7.23,0,0,0,7.51,2.82,5,5,0,0,1,9.68.09a.61.61,0,0,1,.64,0,5,5,0,0,1,2.17,2.73A7.23,7.23,0,0,0,10,5.93Zm9.91,3.75a.61.61,0,0,1,0,.64,5,5,0,0,1-2.73,2.17A7.23,7.23,0,0,0,14.07,10a7.36,7.36,0,0,0,3.11-2.49A5,5,0,0,1,19.91,9.68ZM10,14.07a7.18,7.18,0,0,0,2.5,3.11,5,5,0,0,1-2.18,2.73.61.61,0,0,1-.64,0,5,5,0,0,1-2.17-2.73A7.23,7.23,0,0,0,10,14.07ZM5.93,10a7.23,7.23,0,0,0-3.11,2.49A5,5,0,0,1,.09,10.32a.61.61,0,0,1,0-.64A5,5,0,0,1,2.82,7.51,7.23,7.23,0,0,0,5.93,10Z"
				})),
				zi = e => m.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("g", {
					fill: "inherit"
				}, m.a.createElement("path", {
					d: "M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"
				})));
			var Zi = e => m.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, m.a.createElement("path", {
					d: "M10,8 C8.619,8 7.5,9.5 7.5,9.5 C7.5,9.5 8.619,11 10,11 C11.381,11 12.5,9.5 12.5,9.5 C12.5,9.5 11.381,8 10,8 M15.1338,14 L4.8658,14 C4.4818,14 4.2398,13.583 4.4328,13.25 L9.5678,4.357 C9.7598,4.024 10.2398,4.024 10.4328,4.357 L15.5678,13.25 C15.7598,13.583 15.5188,14 15.1338,14 M17.2748,3.038 L10.2748,1.038 C10.0948,0.987 9.9048,0.987 9.7258,1.038 L2.7258,3.038 C2.2958,3.161 1.9998,3.554 1.9998,4 L1.9998,11 C1.9998,16.688 9.4098,18.871 9.7258,18.962 C9.8158,18.987 9.9068,19 9.9998,19 C10.0928,19 10.1848,18.987 10.2748,18.962 C10.5898,18.871 17.9998,16.688 17.9998,11 L17.9998,4 C17.9998,3.554 17.7038,3.161 17.2748,3.038"
				})),
				Ki = s("./src/reddit/icons/svgs/MyProfile/index.tsx"),
				Yi = e => m.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, m.a.createElement("g", {
					fill: "inherit"
				}, m.a.createElement("path", {
					d: "M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"
				}))),
				Ji = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				Xi = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				$i = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				ec = e => m.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("g", {
					fill: "inherit"
				}, m.a.createElement("path", {
					d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
				}))),
				tc = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				sc = s("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				nc = s.n(sc);
			const ac = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				rc = M.a.wrapped(Sr.a, "Dropdown", nc.a),
				oc = Object(sr.a)(rc),
				ic = e => m.a.createElement(Di.a, {
					className: nc.a.button,
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: nc.a.buttonText
				}, e.displayText), m.a.createElement(Fi.a, {
					className: nc.a.toggleSwitch,
					"data-redditstyle": !0,
					on: e.isEnabled
				})),
				cc = Object(u.b)(() => Object(b.c)({
					isModModeEnabled: Wt.t,
					isOpen: Object(Vr.b)("USER_DROPDOWN_ID"),
					nightmode: Mt.R,
					url: Gt.r
				}), e => ({
					toggleNightmode: t => e(Object(N.w)(t)),
					onOptIntoRedesign: () => e(Object(Ri.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Ve.a.get("rseor3") && Ve.a.remove("rseor3", {
							domain: _.a.cookieDomain
						}), e(Object(Ri.b)(!0))) : window.location.host = "old.reddit.com"
					},
					dispatchOpenLoginModal: () => e(Object(uo.g)()),
					logoutUser: () => e(Object(Co.s)()),
					toggleModMode: () => e(Object(Li.b)())
				}));
			var dc = Object(dn.t)({
					pageLayer: e => e
				})(cc(Object(re.c)(e => {
					const {
						logoutUser: t,
						dispatchOpenLoginModal: s,
						isModModeEnabled: a,
						nightmode: r,
						toggleModMode: o,
						user: i
					} = e, c = Object(Di.b)($i.a, n.fbt._("User Settings", null, {
						hk: "46J4vT"
					}), !1), d = Object(Di.b)(qi.a, n.fbt._("Help Center", null, {
						hk: "4sGjc0"
					}), !0), u = Object(Di.b)(Ji.a, n.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					}), !0), p = Object(Di.b)(zi, n.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					})), h = Object(Di.b)(zi, n.fbt._("Log Out", null, {
						hk: "2SjIc8"
					})), b = Object(Di.b)(ec, n.fbt._("Opt In to New Reddit", null, {
						hk: "4jiTxA"
					}), !1), f = (e => {
						const t = e && e.coins || 0;
						return n.fbt._({
							"*": "{number of coins} coins",
							_1: "1 coin"
						}, [n.fbt._plural(t, "number of coins")], {
							hk: "qmnnm"
						})
					})(i), C = Object(Di.b)(yn.a, n.fbt._("Reddit Coins", null, {
						hk: "3jj6Cb"
					}), !1, f), v = Object(Di.b)(Nn.a, n.fbt._("Reddit Premium", null, {
						hk: "3FNqVS"
					}), !1);
					return m.a.createElement("div", {
						className: Object(g.a)(nc.a.container, Ai.e)
					}, m.a.createElement(tc.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(g.a)(e.className, nc.a.inlineButton, {
							[nc.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("user")
						}
					}, m.a.createElement("span", {
						className: nc.a.accountDisplayText
					}, (e => e ? m.a.createElement("span", {
						className: Object(g.a)(nc.a.accountWrapper, nc.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && m.a.createElement(fn.a, {
						className: nc.a.imgIcon
					}), m.a.createElement("span", {
						className: nc.a.accountDetails
					}, m.a.createElement("span", {
						className: nc.a.username
					}, e.displayText, e.isGold && m.a.createElement(Gi.a, {
						className: nc.a.premiumFontIcon,
						title: n.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						})
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: nc.a.accountKarma
					}, m.a.createElement(Qi, null), m.a.createElement("span", null, (e => {
						const t = e.commentKarma + e.postKarma,
							s = Object(yi.b)(t);
						return n.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [n.fbt._plural(t, "karma count", s)], {
							hk: "ndlXe"
						})
					})(e))), !!e.coins && m.a.createElement("span", {
						className: nc.a.accountCoins
					}, m.a.createElement(Hi.a, {
						className: nc.a.coinFontIcon
					}), m.a.createElement("span", null, (e => Object(yi.b)(e.coins || 0))(e)))))) : m.a.createElement("span", {
						className: Object(g.a)(nc.a.accountWrapper, nc.a.isLoggedOut)
					}, m.a.createElement(Xi.a, {
						className: nc.a.myProfileIcon
					})))(e.user), m.a.createElement(ln.b, {
						className: nc.a.dropdownTriangle
					})), m.a.createElement(Va.a, null, n.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(oc, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, i && m.a.createElement(l.Fragment, null, m.a.createElement("h3", {
						className: nc.a.sectionHeader,
						role: "heading"
					}, n.fbt._("My Stuff", null, {
						hk: "47vhMb"
					})), (e => {
						const t = n.fbt._("My Profile", null, {
								hk: "4AoYxT"
							}),
							s = Object(Di.b)(Ki.a, t, !1);
						return m.a.createElement(s, {
							href: e.url
						})
					})(i), m.a.createElement(c, {
						href: "/settings"
					})), m.a.createElement("h3", {
						className: nc.a.sectionHeader,
						role: "heading"
					}, n.fbt._("View Options", null, {
						hk: "3bZPKB"
					})), i && i.isMod && m.a.createElement(ic, {
						displayText: n.fbt._("Mod Mode", null, {
							hk: "3Rb4sj"
						}),
						isEnabled: a,
						onClick: () => {
							e.sendEvent(Object(Ui.h)(!a)), o()
						}
					}, m.a.createElement(Zi, {
						className: nc.a.modModeIcon
					})), m.a.createElement(ic, {
						displayText: "Night Mode",
						isEnabled: r,
						onClick: () => {
							e.sendEvent((e => t => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: e ? "night_mode_off" : "night_mode_on"
							}, Bi(t)))(r)), e.toggleNightmode(!r)
						}
					}, m.a.createElement(Yi, {
						className: nc.a.nightIcon
					})), m.a.createElement("h3", {
						className: nc.a.sectionHeader,
						role: "heading"
					}, n.fbt._("More Stuff", null, {
						hk: "4Gad8T"
					})), m.a.createElement(l.Fragment, null, m.a.createElement(C, {
						href: "/coins",
						onClick: () => {
							ja.f(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: ja.e()
							}, Bi(e)))())
						}
					}), m.a.createElement(v, {
						href: "/premium",
						onClick: () => {
							ka.g(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: ka.f()
							}, Bi(e)))())
						}
					})), m.a.createElement(d, {
						href: "https://www.reddithelp.com"
					}), i && m.a.createElement(u, {
						href: "https://old.reddit.com" + e.url,
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: z.screen(e),
								subreddit: z.subreddit(e)
							}))
						}
					}), !ac && i && m.a.createElement(b, {
						href: "",
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_opt_in",
								screen: z.screen(e),
								subreddit: z.subreddit(e)
							})), e.onOptIntoRedesign()
						}
					}), m.a.createElement("div", {
						className: nc.a.divider
					}), i ? m.a.createElement(h, {
						href: "#",
						onClick: e => {
							t(), e.preventDefault()
						}
					}) : m.a.createElement(p, {
						href: "#",
						onClick: t => {
							Object(O.a)(t) && (t.preventDefault(), t.stopPropagation(), s(), e.sendEvent(Object(po.b)()))
						}
					})))
				}))),
				lc = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				mc = s("./src/reddit/helpers/trackers/navigation.ts");
			const uc = "HeaderUserActions--Chat",
				pc = "email-verification-tooltip-id",
				hc = "HeaderUserActions--Messages",
				bc = "HeaderUserActions--Moderation",
				gc = "HeaderUserActions--NewPost",
				fc = Object(dn.t)({
					pageLayer: e => e
				}),
				Cc = Object(b.c)({
					activeDropdownId: Vr.a,
					email: Mt.l,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isModerator: kt.h,
					shouldOpenEmailVerificationTooltip: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(dn.J)(s) && !!Object(Mt.l)(e) && !Object(Mt.x)(e) && Object(Mt.H)(e) && !Object(Mt.F)(e)
					},
					unreadNotifications: Mt.cb
				}),
				vc = Object(u.b)(Cc, (e, t) => ({
					closeEmailVerificationTooltip: () => e(Object(go.b)()),
					onChatClick: () => e(Object(bo.c)()),
					onDismissCustomizeFlyout: () => e(Object(N.s)()),
					onOpenModerationDropdown: () => e(Object(tr.h)({
						tooltipId: lc.a
					})),
					onOpenUserDropdown: () => e(Object(tr.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleChangeEmailModal: () => {
						e(Object(go.b)()), e(Object(ze.i)(vo.a))
					},
					toggleTooltip: t => e(Object(tr.h)({
						tooltipId: t
					})),
					resendEmail: () => e(Object(Co.y)(Oo.a)),
					requestCreatePost: () => {
						t.pageLayer && e(fo.p(t.pageLayer))
					}
				}));
			class yc extends m.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => this.props.sendEvent(Object(mc.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
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
						email: a,
						isCustomizeFlyoutShowing: r,
						isEmailVerificationTooltipShowing: o,
						isModerator: i,
						language: c,
						onDismissCustomizeFlyout: d,
						onOpenUserDropdown: u,
						resendEmail: p,
						shouldOpenEmailVerificationTooltip: h,
						toggleTooltip: b,
						toggleChangeEmailModal: f,
						unreadNotifications: C,
						user: v
					} = this.props, y = !(!C || !C.hasUnreadModmail && !C.hasUnreadOldModmail), P = (e, t) => m.a.createElement(nr.c, {
						caretOnTop: !0,
						tooltipId: e,
						text: t
					});
					return m.a.createElement(Et.a, {
						id: pc,
						ref: e => this.container = e,
						className: t
					}, m.a.createElement(Et.a, {
						className: xi.a.headerLinks
					}, i && m.a.createElement(l.Fragment, null, m.a.createElement("span", {
						className: xi.a.iconWrapper,
						id: bc,
						key: bc,
						onMouseEnter: () => b(bc),
						onMouseLeave: () => e === bc && b(bc)
					}, m.a.createElement(fi, {
						"aria-expanded": e === lc.a,
						"aria-haspopup": !0,
						"aria-label": n.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: lc.a,
						onClick: this.onOpenModerationDropdown,
						isOpen: e === lc.a
					}, m.a.createElement(wn.a, {
						className: Object(g.a)(xi.a.moderateIcon, {
							[xi.a.isLit]: y
						})
					})), P(bc, n.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(lc.b, {
						className: xi.a.moderationDropdown,
						isOpen: e === lc.a,
						key: lc.a,
						unreadNotifications: C,
						sendEventWithName: this.sendEventWithName
					})), v && m.a.createElement(l.Fragment, null, m.a.createElement("span", {
						className: xi.a.iconWrapper,
						id: uc,
						key: uc,
						onMouseEnter: () => b(uc),
						onMouseLeave: () => e === uc && b(uc)
					}, m.a.createElement("a", {
						className: xi.a.link,
						href: "".concat(_.a.redditUrl, "/chat"),
						onClick: Object(ho.a)(this.onClickChat)
					}, m.a.createElement(Mi, null)), P(uc, n.fbt._("Chat", null, {
						hk: "4nXRWH"
					}))), m.a.createElement("span", {
						className: xi.a.iconWrapper,
						id: hc,
						key: hc,
						onMouseEnter: () => b(hc),
						onMouseLeave: () => e === hc && b(hc)
					}, m.a.createElement("a", {
						className: xi.a.link,
						href: C && C.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: this.onClickMail
					}, m.a.createElement(Ti, {
						unreadCount: C && C.inboxCount || 0
					})), P(hc, n.fbt._("Messages", null, {
						hk: "Txokh"
					}))), m.a.createElement("span", {
						className: xi.a.iconWrapper,
						id: gc,
						key: gc,
						onMouseEnter: () => b(gc),
						onMouseLeave: () => e === gc && b(gc)
					}, m.a.createElement("button", {
						className: xi.a.link,
						"aria-label": n.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: this.onClickCreatePost
					}, m.a.createElement(In.a, {
						className: xi.a.postIcon
					})), P(gc, n.fbt._("Create Post", null, {
						hk: "1TvNGq"
					}))), m.a.createElement("span", {
						className: xi.a.iconWrapper
					}, m.a.createElement(li, null)))), m.a.createElement(dc, {
						className: xi.a.headerUserDropdown,
						onClick: u,
						user: v,
						sendEventWithName: this.sendEventWithName
					}), r && m.a.createElement(Ni, {
						onCloseFlyout: d
					}), m.a.createElement(ko, {
						closeTooltip: s,
						email: a,
						isOpen: h && o,
						resendEmail: p,
						toggleChangeEmailModal: f,
						tooltipId: pc
					}), m.a.createElement(yo, {
						email: a,
						language: c,
						shouldOpenTooltip: h
					}))
				}
			}
			var Pc = Object(re.c)(fc(vc(yc))),
				xc = s("./src/reddit/selectors/meta.ts"),
				Oc = s("./src/reddit/components/Header/User/index.m.less"),
				Ec = s.n(Oc);
			const {
				fbt: Sc
			} = s("./node_modules/fbt/lib/FbtPublic.js"), wc = Object(b.c)({
				account: e => e.user.account,
				language: e => e.user.language,
				origin: xc.j
			}), jc = m.a.memo(e => m.a.createElement("div", {
				className: Object(g.a)(e.className, Ec.a.row)
			}, !e.account && function(e) {
				const t = e.pageLayer,
					s = _.a.accountManagerOrigin,
					n = t ? t.url : "/",
					a = t && t.meta && t.meta.name === f.yb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + n);
				return m.a.createElement("div", {
					className: Ec.a.loggedOutRow
				}, m.a.createElement(xt.j, {
					redditStyle: !0,
					className: Object(g.a)(Ec.a.login, Ec.a.button),
					href: "".concat(s, "/login/?dest=").concat(a),
					onClick: t => {
						Object(O.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(po.a)("nav")))
					}
				}, Sc._("log in", null, {
					hk: "1uFKdt"
				})), m.a.createElement(xt.g, {
					redditStyle: !0,
					className: Object(g.a)(Ec.a.separator, Ec.a.register, Ec.a.button),
					href: "".concat(s, "/register/?dest=").concat(a),
					onClick: t => {
						Object(O.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(po.c)("nav")))
					}
				}, Sc._("sign up", null, {
					hk: "47v4we"
				})))
			}(e), m.a.createElement(Pc, {
				className: Object(g.a)({
					[Ec.a.loggedOut]: !e.account
				}),
				language: e.language,
				user: e.account
			})));
			var kc = Object(dn.t)()(Object(u.b)(wc, e => ({
					onOpenLoginModal: () => {
						e(Object(ze.k)({
							actionSource: ze.a.HeaderLogin
						})), e(Object(uo.g)())
					},
					onOpenRegisterModal: () => {
						e(Object(ze.k)({
							actionSource: ze.a.HeaderSignup
						})), e(Object(uo.h)())
					}
				}))(Object(re.c)(jc))),
				Mc = s("./src/reddit/components/Header/index.m.less"),
				_c = s.n(Mc);

			function Ic() {
				return (Ic = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Nc = M.a.header("HeaderDynamicStyles", _c.a),
				Tc = Object(b.c)({
					isLoggedIn: Mt.H,
					isNightmode: Mt.R,
					isResponsiveSettingsEnabled: so.a,
					language: e => e.user.language,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Rc = Object(dn.t)({
					categoryName: dn.b,
					pageLayer: e => e
				}),
				Lc = e => m.a.createElement("div", {
					className: _c.a.left
				}, m.a.createElement(Va.a, null, n.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
					hk: "ToBNc"
				})), m.a.createElement(Wa.b, null), m.a.createElement(rn.a, {
					"aria-label": n.fbt._("Home", null, {
						hk: "3PmGmU"
					}),
					className: _c.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, m.a.createElement(eo.a, {
					className: _c.a.snoo
				}), m.a.createElement(to.a, {
					className: _c.a.wordmark
				})), e.children),
				Ac = e => m.a.createElement("div", {
					className: _c.a.right
				}, e.children, m.a.createElement(kc, null)),
				Fc = e => m.a.createElement("div", {
					className: _c.a.layout
				}, m.a.createElement(Lc, Ic({}, e, {
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), m.a.createElement(qa, null), m.a.createElement($r, {
					className: _c.a.search
				})), m.a.createElement(Ac, null, m.a.createElement(mo, {
					className: _c.a.quickLinks
				}))),
				Dc = e => m.a.createElement("div", {
					className: _c.a.layout
				}, m.a.createElement(Lc, Ic({}, e, {
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), m.a.createElement("div", {
					className: _c.a.searchContainer
				}, m.a.createElement($r, {
					className: _c.a.search
				}))), m.a.createElement(Ac, null));
			var Uc = Rc(Object(u.b)(Tc, e => ({
					onReloadFrontpage: () => e(Object(on.x)(!0))
				}))((function(e) {
					let t;
					return t = e.isLoggedIn ? Fc : Dc, m.a.createElement(Nc, {
						"data-redditstyle": !0,
						className: Object(g.a)(_c.a.container, e.className, {
							[_c.a.bladeIsOpen]: e.isBladeOpen
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						language: e.language,
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isResponsiveSettingsEnabled && m.a.createElement(oo, {
						className: _c.a.MwebResponsiveHeader
					}))
				}))),
				Bc = s("./src/reddit/components/LightboxHeader/index.tsx"),
				Hc = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Gc = s("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				qc = s.n(Gc);
			const {
				fbt: Wc
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const Vc = Object(u.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(E.j)())
			}));
			var Qc = M.a.wrapped(Vc((function(e) {
					return m.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, m.a.createElement("div", {
						className: qc.a.title
					}, m.a.createElement(la, {
						className: qc.a.listHeader
					}, Wc._("My Communities", null, {
						hk: "1CmPOc"
					})), m.a.createElement("div", {
						className: qc.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, m.a.createElement(q.a, {
						className: qc.a.icon
					}))), m.a.createElement(Da, null))
				})), "Component", qc.a),
				zc = s("./src/reddit/components/ThemeProvider/index.tsx");
			const Zc = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Kc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, z.actionInfo(t), {
						reason: "primary"
					})
				}),
				Yc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, z.actionInfo(t), {
						reason: "secondary"
					})
				});
			var Jc = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Xc = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				$c = s("./src/reddit/selectors/structuredStyles.ts"),
				ed = s("./src/reddit/components/Toaster/PlainBread.m.less"),
				td = s.n(ed);

			function sd() {
				return (sd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var nd = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const ad = e => {
				const t = On.a;
				switch (e.kind) {
					case W.b.Error:
					case W.b.AuthError:
						return t.warning;
					case W.b.SuccessCommunity:
						return t.op;
					case W.b.SuccessCommunityGreen:
					case W.b.SuccessMod:
						return t.approved;
					case W.b.EuCookiePolicy:
					case W.b.UappBanner:
					case W.b.Undo:
					default:
						return t.op
				}
			};
			class rd extends m.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const e = this.props,
						{
							kind: t,
							sendEvent: s
						} = e,
						n = nd(e, ["kind", "sendEvent"]);
					return m.a.createElement("div", n)
				}
			}
			const od = M.a.wrapped(rd, "PlainBread", td.a);
			var id = e => m.a.createElement(od, sd({}, e, {
					style: Object.assign({}, e.style || {}, {
						"--Toaster-indicatorColor": ad(e)
					})
				})),
				cd = s("./src/reddit/components/Toaster/StyledComponents.m.less"),
				dd = s.n(cd);
			const ld = M.a.span("Text", dd.a);
			var md = s("./src/reddit/components/Toaster/index.m.less"),
				ud = s.n(md);
			const {
				fbt: pd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), hd = M.a.wrapped(Jc.a, "AuthErrorToastIcon", ud.a), bd = M.a.wrapped(xt.f, "AuthErrorToastPrimaryButton", ud.a);
			class gd extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), window.location.reload(!0)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(id, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, m.a.createElement(hd, null), m.a.createElement(ld, null, pd._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(bd, {
						type: "submit"
					}, pd._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var fd = gd,
				Cd = s("./src/lib/constants/euCookiePolicy.ts"),
				vd = s("./src/lib/permanentCookieOptions.ts"),
				yd = s("./src/reddit/controls/Link/index.tsx"),
				Pd = s("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				xd = s.n(Pd);
			const {
				fbt: Od
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ed = M.a.div("Icon", xd.a), Sd = () => m.a.createElement(Ed, {
				style: {
					backgroundImage: "url(".concat(_.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), wd = M.a.wrapped(xt.f, "PrimaryButton", xd.a), jd = M.a.wrapped(id, "Bread", xd.a);
			class kd extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ve.a.set(Vt.b, Cd.b.toString(), Object(vd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(jd, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, m.a.createElement(Sd, null), m.a.createElement(ld, null, Od._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", m.a.createElement(yd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Od._("Learn More", null, {
						hk: "1fsN6Z"
					})), "."), m.a.createElement(wd, {
						type: "submit"
					}, Od._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var Md, _d = kd;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Md || (Md = {}));
			var Id = s("./src/reddit/controls/Typography/index.tsx"),
				Nd = s("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Td = s.n(Nd);

			function Rd() {
				return (Rd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ld = M.a.div("Container", Td.a),
				Ad = M.a.img("SideImage", Td.a),
				Fd = M.a.div("Main", Td.a),
				Dd = M.a.div("SubTitle", Td.a),
				Ud = Id.a,
				Bd = M.a.wrapped(xt.g, "PrimaryLinkButton", Td.a),
				Hd = M.a.wrapped(q.a, "CloseIcon", Td.a);
			class Gd extends m.a.Component {
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
						style: a,
						subTitle: r,
						title: o
					} = this.props;
					return m.a.createElement(Ld, {
						key: t,
						style: Object.assign({}, a, {
							transform: "\n            translateY(".concat(a.y, "px)\n            scale(").concat(a.x, ", ").concat(a.x, ")\n          ")
						})
					}, m.a.createElement(Hd, {
						onClick: this.props.onClose
					}), m.a.createElement(Ad, {
						srcSet: s
					}), m.a.createElement(Fd, null, m.a.createElement(Dd, null, r), m.a.createElement(Id.b, null, o), m.a.createElement(Ud, null, e), m.a.createElement(Bd, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, n.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const qd = Object(u.b)(null, e => ({
					onSignup: () => e(Object(uo.h)())
				}))(Object(re.c)(Gd)),
				Wd = "".concat(Vd("subscribe-cap.png"), " 1x,\n  ").concat(Vd("subscribe-cap@2x.png"), " 2x,");

			function Vd(e) {
				return "".concat(_.a.assetPath, "/img/banner/").concat(e)
			}
			const Qd = 3,
				zd = e => "".concat(e, ":").concat(152721e4);
			var Zd = s("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Kd = s.n(Zd);
			const {
				fbt: Yd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Jd = M.a.div("Icon", Kd.a), Xd = () => m.a.createElement(Jd, {
				style: {
					backgroundImage: "url(".concat(_.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), $d = M.a.wrapped(xt.f, "PrimaryButton", Kd.a), el = M.a.wrapped(id, "Bread", Kd.a);
			class tl extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ve.a.set(Vt.i, zd(Qd), Object(vd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(el, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, m.a.createElement(Xd, null), m.a.createElement(ld, null, Yd._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Yd._param("=User Agreement", m.a.createElement(yd.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Yd._("User Agreement", null, {
						hk: "XS57W"
					}))), Yd._param("=Privacy Policy", m.a.createElement(yd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Yd._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement($d, {
						type: "submit"
					}, Yd._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var sl = tl;

			function nl() {
				return (nl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const al = [],
				rl = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				ol = {
					opacity: .5,
					x: .5,
					y: 50
				},
				il = {
					opacity: Object(k.spring)(0),
					x: Object(k.spring)(.6),
					y: Object(k.spring)(80, rl)
				},
				cl = M.a.wrapped(Jc.a, "SnooFacepalm", ud.a),
				dl = M.a.wrapped(Xc.a, "SnooHappy", ud.a),
				ll = M.a.wrapped(bn.b, "SubredditIcon", ud.a),
				ml = M.a.div("Container", ud.a),
				ul = M.a.wrapped(q.a, "Close", ud.a),
				pl = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(ul, nl({
					className: "CloseIcon"
				}, e))),
				hl = M.a.wrapped(id, "Bread", ud.a),
				bl = Object(b.c)({
					subredditIcon: $c.c,
					toastSlices: e => e.toaster
				}),
				gl = Object(u.b)(bl, e => ({
					dismissToast: t => () => e(Object(F.f)(t)),
					onButtonClick: (t, s) => () => {
						e(t), e(Object(F.f)(s))
					}
				}));
			class fl extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Cl(e, this.props.toastSlices), this.getWillEnterStyles = () => ol, this.getWillLeaveStyles = () => il
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(k.TransitionMotion, {
						defaultStyles: al,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(ml, null, e.map(e => {
						const t = e.data,
							s = Object.assign({}, e.style, {
								transform: "\n                  translateY(".concat(e.style.y, "px)\n                  scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n                ")
							});
						if (t.kind === W.b.Custom && void 0 !== t.customToastType) {
							const n = yl[t.customToastType];
							return m.a.createElement(n, {
								key: e.key,
								toast: t,
								style: s,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === W.b.UappBanner) return m.a.createElement(sl, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === W.b.EuCookiePolicy) return m.a.createElement(_d, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === W.b.AuthError) return m.a.createElement(fd, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						const n = t.kind === W.b.Modal ? xt.f : xt.n,
							a = t.kind === W.b.Modal ? xt.i : xt.n;
						return m.a.createElement(hl, {
							className: t.kind === W.b.Modal ? ud.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(Zc(t.name)) : void 0,
							style: s
						}, m.a.createElement("div", {
							className: ud.a.ContentWrapper
						}, vl(t, this.props.subredditIcon), m.a.createElement(ld, null, t.text)), m.a.createElement("div", {
							className: ud.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(n, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Kc(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(a, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Yc(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(pl, {
							onClick: this.props.dismissToast(t.id)
						}))
					}))) : null
				}
			}
			const Cl = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(k.spring)(1),
							x: Object(k.spring)(1, rl),
							y: Object(k.spring)(0, rl)
						}
					}))
				},
				vl = (e, t) => {
					switch (e.kind) {
						case W.b.Error:
							return m.a.createElement(cl, null);
						case W.b.SuccessCommunity:
						case W.b.SuccessCommunityGreen:
							return m.a.createElement(dl, null);
						case W.b.SuccessMod:
							return m.a.createElement(ll, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				yl = {
					[W.a.subscribeCap]: e => m.a.createElement(qd, Rd({
						name: Md.LoggedOutMaxSubscriptions,
						sideImage: Wd,
						title: n.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: n.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Pl = gl(Object(re.c)(fl)),
				xl = s("./src/reddit/featureFlags/profileCollections.ts"),
				Ol = s("./src/reddit/helpers/trackers/banners.ts"),
				El = s("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Sl = s.n(El);
			var wl = M.a.div("Wrapper", Sl.a),
				jl = s("./src/reddit/components/AlertBanner/index.m.less"),
				kl = s.n(jl);
			const {
				fbt: Ml
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _l = () => m.a.createElement(wl, {
				className: Object(g.a)(kl.a.wrapper, kl.a.suspended)
			}, m.a.createElement("span", null, Ml._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), m.a.createElement("a", {
				className: kl.a.underlineLink,
				href: "https://www.reddithelp.com/en/node/851"
			}, Ml._("Learn more", null, {
				hk: "1OTc8q"
			}))), Il = () => m.a.createElement(wl, {
				className: Object(g.a)(kl.a.wrapper, kl.a.fpr)
			}, m.a.createElement("span", null, Ml._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: kl.a.underlineLink,
				href: "https://www.reddithelp.com/en/categories/using-reddit/your-reddit-account/my-account-was-disabled"
			}, Ml._("Learn more", null, {
				hk: "1OTc8q"
			}))), Nl = e => {
				let {
					updateLink: t,
					onClickOldReddit: s
				} = e;
				return m.a.createElement(wl, {
					className: Object(g.a)(kl.a.wrapper, kl.a.deprecated)
				}, m.a.createElement("span", null, Ml._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [Ml._param("update your browser", m.a.createElement(Tl, {
					link: t
				}, Ml._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, Ml._("If you do not update your browser, we suggest you visit {old reddit} .", [Ml._param("old reddit", m.a.createElement("a", {
					className: kl.a.underlineLink,
					href: _.a.oldRedditUrl,
					onClick: s
				}, Ml._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, Tl = e => {
				let {
					children: t,
					link: s
				} = e;
				return null !== s ? m.a.createElement("a", {
					className: kl.a.underlineLink,
					href: s
				}, t) : m.a.createElement("span", null, t)
			};
			class Rl extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(Ol.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(Ol.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(Nl, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Il, null) : s ? m.a.createElement(_l, null) : null
				}
			}
			var Ll = Object(re.c)(Rl),
				Al = s("./src/reddit/components/AlertBanner/heights.ts"),
				Fl = s("./src/reddit/components/PopupPortal/index.tsx"),
				Dl = s("./src/reddit/constants/componentSizes.ts"),
				Ul = s("./src/reddit/constants/elementIds.ts"),
				Bl = s("./src/reddit/constants/posts.ts"),
				Hl = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Gl = s("./src/reddit/contexts/Language.tsx"),
				ql = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Wl = s("./src/reddit/helpers/postCollection.ts"),
				Vl = s("./src/reddit/models/Theme/index.ts"),
				Ql = s("./src/reddit/selectors/notificationBanner.ts"),
				zl = s("./src/reddit/selectors/posts.ts"),
				Zl = s("./src/reddit/components/AppRouter/index.m.less"),
				Kl = s.n(Zl);

			function Yl() {
				return (Yl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Jl = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Xl = e => {
					var {
						className: t,
						shouldDisplayPinnedSubscriptions: s
					} = e, n = Jl(e, ["className", "shouldDisplayPinnedSubscriptions"]);
					return m.a.createElement("div", Yl({
						className: Object(g.a)(Kl.a.main, {
							[Kl.a.mShowingPaddedPinnedDescriptions]: s
						}, t)
					}, n))
				},
				$l = Object(C.a)(e => {
					var {
						className: t,
						theme: s
					} = e, n = Jl(e, ["className", "theme"]);
					const a = Object(de.a)(Object.assign({
						theme: s
					}, n));
					return m.a.createElement("div", Yl({
						className: Object(g.a)(Kl.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Vl.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition)
						}
					}, n))
				}),
				em = e => {
					var {
						className: t,
						divRef: s
					} = e, n = Jl(e, ["className", "divRef"]);
					return m.a.createElement("div", Yl({
						className: Object(g.a)(Kl.a.lightboxHeaderWrapper, t)
					}, n, {
						ref: s
					}))
				},
				tm = Object(Ql.a)(Hc.a.EmailCollectionBannerId),
				sm = Object(u.b)(() => Object(b.c)({
					currentPage: Gt.b,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(Q.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: Mt.s,
					language: e => e.user.language,
					isLoggedIn: Mt.H,
					isSubscriptionsPinned: un.b,
					isSuspended: Mt.L,
					isFPR: Mt.F,
					posts: zl.Q,
					profileCollectionsEnabled: xl.a,
					showEmailCollectionBanner: e => !Object(dn.I)(Object(Gt.b)(e)) && tm(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onUnpinSubscriptions: () => e(Object(E.j)())
				})),
				nm = (e, t) => !(!e.state || !e.state[U.a.IsOverlay] || t === e);
			class am extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.resizeHandler = d()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Dl.l && this.props.onUnpinSubscriptions()
					}, f.E), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: s
						} = this.props;
						if (Object(dn.w)(e)) {
							const n = e && e.urlParams && e.urlParams.partialPostId,
								a = "".concat(f.vb.Post, "_").concat(n),
								r = t && n && t[a],
								o = r && r.belongsTo.type === Bl.a.PROFILE;
							return !(!r || !Object(Wl.a)(r) || o && !s)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(Q.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						location: t
					} = this.props, s = t.state && t.state[U.a.IsOverlay], n = Object(x.a)(this.previousLocation, e.location), a = Object(x.a)(this.previousLocation, this.props.location), r = s ? this.previousPage : this.props.currentPage;
					if (r) {
						const {
							meta: t,
							urlParams: s
						} = r, n = t && (t.name === f.yb.INDEX || t.name === f.yb.SUBREDDIT && s.subredditName === B.b.Popular), a = Object(Q.c)(this.props.frontpageSignupVariant), o = Object(Q.c)(e.frontpageSignupVariant);
						n || a || !o ? a && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || n || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const o = nm(e.location, this.previousLocation);
					y.a.write(() => {
						document.body.style.overflow = o ? "hidden" : ""
					})
				}
				render() {
					const {
						currentPage: e,
						frontpageSignupVariant: t,
						hasInvalidSession: s,
						isFPR: a,
						isLoggedIn: r,
						isSubscriptionsPinned: o,
						isSuspended: c,
						language: d,
						location: u,
						onClickOutsideOverlay: p,
						routes: h,
						showEmailCollectionBanner: b
					} = this.props, {
						isSignupUpsellDisplayed: g,
						isSignupUpsellHidden: C
					} = this.state, v = this.context, y = nm(u, this.previousLocation);
					u.state && u.state[U.a.IsOverlay] && !y ? u.state[U.a.IsOverlay] = !1 : u.state && (this.previousLocation === u || u.state[U.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[U.a.CloseLocation] && this.previousLocation.state[U.a.CloseLocation] === u.state[U.a.CloseLocation] ? u.state[U.a.CloseLocation] = Object.assign({}, this.previousLocation, {
						state: i()(this.previousLocation.state, U.a.CloseLocation)
					}) : u.state[U.a.CloseLocation] = this.previousLocation);
					const P = Object(x.a)(this.previousLocation, u),
						O = y || P ? this.previousLocation : u,
						E = y || P ? this.previousPage : e,
						w = !(!(E && E.meta && E.meta.name === f.yb.SEARCH_RESULTS && E && E.queryParams) || E.queryParams[H.p]),
						j = !(!E || !E.meta || E.meta.name !== f.yb.MODERATION_PAGES),
						k = Object(dn.w)(E),
						M = this.getIsPostCollection(),
						_ = g && !C;
					return s ? n.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(Gl.a.Provider, {
						value: d
					}, m.a.createElement(dn.a.Provider, {
						value: E
					}, m.a.createElement(Wa.c, {
						isOverlayOpen: y
					}, m.a.createElement(zc.a, {
						forceRedditTheme: w
					}, g && m.a.createElement(qe, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(rm, {
						browserInfo: v,
						isFPR: a,
						isInline: _,
						isSuspended: c
					})), m.a.createElement(Hl.a.Provider, {
						value: !1
					}, m.a.createElement(zc.a, {
						forceRedditTheme: w || j,
						isCommentsPage: k
					}, m.a.createElement(om, {
						frontpageSignupVariant: t,
						isCommentsPage: k,
						isInline: _,
						isLoggedIn: r,
						isSubscriptionsPinned: o,
						location: O,
						overlayIsOpen: y,
						page: E,
						routes: h,
						showEmailCollectionBanner: b,
						browserInfo: v,
						showFPR: a,
						showSuspended: c
					}))))), m.a.createElement(dn.a.Provider, {
						value: e
					}, y && m.a.createElement(Hl.a.Provider, {
						value: !0
					}, m.a.createElement(zc.a, {
						isOverlay: !0
					}, m.a.createElement(im, {
						isPostCollection: M,
						location: u,
						onClickOutsideOverlay: p,
						page: e,
						routes: h,
						showEmailCollectionBanner: b,
						browserInfo: v,
						showFPR: a,
						showSuspended: c
					}))), m.a.createElement(zc.a, null, m.a.createElement(l.Fragment, null, m.a.createElement("div", {
						id: Fl.a,
						className: Kl.a.popupContainer
					}), m.a.createElement(Pl, null), b && m.a.createElement(S.a, null), m.a.createElement(Xt, null), m.a.createElement(an, null)))))
				}
			}
			am.contextType = v.a;
			const rm = Object(re.c)(e => {
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
					return m.a.createElement(l.Fragment, null, m.a.createElement(Ll, r), m.a.createElement(Uc, {
						className: Object(g.a)(Kl.a.header, Object(Al.b)(Kl.a, r), {
							[Kl.a.inline]: n
						})
					}))
				}),
				om = Object(re.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline
					}
					locationsEqual(e, t) {
						const s = i()(e, "key"),
							n = i()(t, "key");
						return r()(s, n)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const s = i()(e, ["key", "locationState"]),
								n = i()(t, ["key", "locationState"]);
							return r()(s, n)
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
						return m.a.createElement(Xl, {
							"aria-hidden": n,
							className: Object(g.a)(Object(Al.b)(Kl.a, this.props), {
								[Kl.a.withUpsell]: !!e,
								[Kl.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && m.a.createElement(Qc, {
							className: Object(g.a)(Kl.a.pinnedSubscriptions, Object(Al.b)(Kl.a, this.props)),
							"data-redditstyle": !0
						}), m.a.createElement(p.f, {
							location: t
						}, s), c && m.a.createElement("div", {
							className: Object(g.a)(Kl.a.bottomSpacer, Object(Al.a)(Kl.a, this.props))
						}))
					}
				});
			class im extends m.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => this.overlayScrollContainerEl = e, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(O.a)(e) && 0 === e.button && e.target === this.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[U.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = ql.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(P.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && ql.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: s
					} = this.props, n = !(!t || !t.meta || t.meta.name === f.yb.SUBREDDIT_CREATION || t.meta.name === f.yb.PUBLIC_ACCESS_NETWORK), a = e;
					return m.a.createElement($l, {
						className: Object(g.a)(Object(Al.b)(Kl.a, this.props), {
							[Kl.a.mIsCommentsLightbox]: n,
							[Kl.a.mIsLargeCommentsLightbox]: a
						})
					}, m.a.createElement("div", {
						className: Object(g.a)(Kl.a.overlayWrapper, Object(Al.b)(Kl.a, this.props))
					}, m.a.createElement("div", {
						className: Object(g.a)(Kl.a.overlayScrollContainer, {
							[Kl.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Ul.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, n && m.a.createElement(em, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(g.a)(Object(Al.b)(Kl.a, this.props), {
							[Kl.a.mIsLargeCommentsLightbox]: a
						}),
						tabIndex: -1
					}, m.a.createElement(Bc.a, {
						page: t
					})), m.a.createElement(p.f, null, s), m.a.createElement("div", {
						className: Object(g.a)(Kl.a.bottomSpacer, Object(Al.a)(Kl.a, this.props))
					}))))
				}
			}
			t.b = sm(Object(re.c)(am))
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
					post: c.N
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
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e3dfa4ce"), s.e("CoinsPurchaseModal~PennyPurchaseModal"), s.e("CoinsPurchaseModal")]).then(s.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(r.c)()])).then(e => e[0].default),
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
				buttonSubtext: "_2Mm_ve0iAKMLDXgbbvVmSD",
				subtext: "_1K7tfdKlu_H-Eljz3TrNc8",
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
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "EmailCollectionBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("EmailCollectionBanner").then(s.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/EmailCollection/Banner/index.tsx"
				}
			});
			t.a = a
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
		"./src/reddit/components/Header/MwebResponsiveHeader/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oBkxkI9Ae3Qs71WqfDicM",
				container: "_1oBkxkI9Ae3Qs71WqfDicM",
				HomeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				homeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				Snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				Wordmark: "_1rivc6IIexuAqsRVeptXuq",
				wordmark: "_1rivc6IIexuAqsRVeptXuq"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, s) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
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

			function g(e) {
				return a.a.createElement(h, {
					id: r.c
				}, a.a.createElement(b, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
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
				compactLayout: "Y4MkVr6trrdypfZVUkpIA",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
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
				bladeIsOpen: "_1z0T-r2uyIYQr2tLUWs4M2",
				MwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA",
				mwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA"
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
				userIcon: "E6V2eHU4CpJuLWzneTk0Z",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				itemIcon: "_139PgjqaVJ8tq4kF4QznMX",
				customFeedIcon: "_1r2uMQFZw5Hg53NkK6rsKv",
				itemModQueue: "_1VemFsujoJ-6RR82VRSPeM",
				listContainer: "TMMvbwyeh9yuHKmQWHrE3",
				coinIcon: "JisrPypso_3RK4iDgDdke",
				itemCoin: "_334CPGEglbIA_2CwQAn43P",
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
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/shortcuts.ts"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/FlairWrapper/index.tsx"),
				h = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/colors.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/helpers/postCollection.ts"),
				v = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				y = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				P = s("./src/reddit/icons/fonts/Link/index.tsx"),
				x = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				O = s("./src/reddit/icons/fonts/Text/index.tsx"),
				E = s("./src/reddit/icons/svgs/Close/index.tsx"),
				S = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/models/Vote/index.ts"),
				j = s("./src/reddit/selectors/experiments/categories.ts"),
				k = s("./src/reddit/selectors/platform.ts"),
				M = s("./src/reddit/components/LightboxHeader/index.m.less"),
				_ = s.n(M);
			const I = Object(i.c)({
					isInCategoriesExperiment: j.a,
					post: k.m
				}),
				N = Object(o.b)(I, (e, t) => {
					let {
						sendEvent: s
					} = t;
					return {
						close: () => {
							e(Object(m.d)(s, !0))
						},
						toggleVote: (t, s) => e(s === w.a.upvoted ? Object(l.ab)(t) : Object(l.w)(t))
					}
				}, (e, t, s) => Object.assign({}, e, t, s, {
					onVoteClick: n => {
						const a = e.post || s.post;
						a && t.toggleVote(a.id, n)
					}
				}));
			class T extends r.a.Component {
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
						page: o,
						post: i
					} = this.props, l = R[i && i.media ? i.media.type : S.n.EMBED], m = !i && o && o.meta && o.meta.name === d.yb.META_MEMBERSHIP_PAYWALL_PAGE;
					return r.a.createElement("div", {
						className: Object(c.a)(_.a.container, e, {
							[_.a.isCollection]: i && Object(C.a)(i)
						})
					}, r.a.createElement("div", {
						className: _.a.postDetails
					}, i && r.a.createElement(a.Fragment, null, r.a.createElement(u.a, {
						className: _.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: i,
						onVoteClick: s,
						redditStyle: !0
					}), r.a.createElement(l, {
						className: _.a.mediaIcon
					}), r.a.createElement(h.c, {
						className: _.a.postTitle,
						post: i,
						size: h.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: g.a.lightboxHeaderText,
						titleLinkClassName: _.a.postTitleLink,
						showCategoryTag: !0
					}), r.a.createElement(p.a, {
						post: i,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), m && o && o.urlParams.subredditName && r.a.createElement("div", {
						className: _.a.membershipPaywallTitle
					}, n.fbt._("{communityName} Special Membership", [n.fbt._param("communityName", "r/".concat(o.urlParams.subredditName))], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: _.a.actions
					}, r.a.createElement(f.n, {
						className: _.a.close,
						onClick: t || this.closeLightbox,
						title: n.fbt._("Close", null, {
							hk: "3BrQGj"
						}),
						"aria-label": n.fbt._("Close", null, {
							hk: "QApwN"
						})
					}, r.a.createElement(E.a, null), r.a.createElement("span", {
						className: _.a.closeText
					}, n.fbt._("Close", null, {
						hk: "4CZebl"
					})))))
				}
			}
			const R = {
				[S.n.GIFVIDEO]: y.a,
				[S.n.IMAGE]: x.a,
				[S.n.TEXT]: O.a,
				[S.n.RTJSON]: O.a,
				[S.n.VIDEO]: v.a,
				[S.n.EMBED]: P.a,
				[S.n.LIVEVIDEO]: v.a
			};
			t.a = Object(b.c)(N(T))
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
				getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
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
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e3dfa4ce"), s.e("PremiumPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(r.c)()])).then(e => e[0].default),
				i = Object(n.a)({
					getComponent: o,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = i
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
				planetIcon: "_2Tfe4NhLJlRQkuO1yhzqR2",
				subredditIcon: "_3uBNO7SvsRGN4W794WAO_p",
				subredditIconStyles: "_26nS8Ogzm0pqOjlwfGRgJR",
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
				return P
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
			class v extends r.a.Component {
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
			const y = Object(o.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.j)(e), e => {
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
				return Object(b.jb)(e).nightmode
			}, (e, t) => {
				if (!Object(b.jb)(e).hideNSFW) return !0;
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
			}))(v);
			t.b = y;
			const P = Object(d.t)()(y)
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
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/UserIcon/UserIcon.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const m = Object(o.c)({
					currentUser: i.i,
					shouldHideNSFW: i.z
				}),
				u = Object(r.b)(m);
			t.a = u(e => {
				const {
					currentUser: t
				} = e, s = l(e, ["currentUser"]);
				return a.a.createElement(c.a, d({}, s, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				}))
			})
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
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google"
				}(n || (n = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.Login = "login", e.Register = "register", e.Resize = "resize", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(a || (a = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(r || (r = {}))
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
			})), s.d(t, "n", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "i", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			}));
			const n = "DEFAULT",
				a = "",
				r = "All Communities",
				o = "top",
				i = "MOD",
				c = "moderating",
				d = "UPANDCOMING",
				l = "up-and-coming",
				m = "Around the World",
				u = "/subreddits/leaderboard/",
				p = {
					id: a,
					name: a
				},
				h = {
					id: d,
					name: l
				},
				b = [{
					name: "Sports",
					id: "c1015",
					path: "".concat(u, "sports/")
				}, {
					name: "News",
					id: "c1009",
					path: "".concat(u, "news/")
				}, {
					name: "Gaming",
					id: "c1005",
					path: "".concat(u, "gaming/")
				}, {
					name: "Aww",
					id: "c1000",
					path: "".concat(u, "aww/")
				}],
				g = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
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
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
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
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Typography/index.m.less"),
				r = s.n(a);
			n.a.h1("heading1", r.a), n.a.h2("heading2", r.a), n.a.h3("heading3", r.a), n.a.h4("heading4", r.a);
			const o = n.a.h5("heading5", r.a),
				i = (n.a.h6("heading6", r.a), n.a.p("body1", r.a), n.a.p("body2", r.a)),
				c = (n.a.p("actionFont", r.a), n.a.p("metadata", r.a));
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
							productId: t.productId,
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
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			}));
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
					d = "function" == typeof t ? t : u(t);
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
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const r = () => e => Object.assign({
					source: "dfp",
					action: "request",
					noun: "ad"
				}, a.defaults(e), {
					subreddit: a.subreddit(e)
				}),
				o = () => e => Object.assign({
					source: "dfp",
					action: "define",
					noun: "ad"
				}, a.defaults(e), {
					subreddit: a.subreddit(e)
				}),
				i = (e, t) => s => {
					const r = t ? e.dfpDetails.slot.getSlotId().getDomId() : e.slot.getSlotId().getDomId(),
						o = -1 !== r.indexOf(n.c.ABOVE_THE_FOLD) ? n.c.ABOVE_THE_FOLD : n.c.BELOW_THE_FOLD,
						i = document.querySelector("#" + r);
					let c, d;
					if (i && (c = n.f.HOUSE_AD, -1 !== i.innerHTML.indexOf("google_ads_iframe") && (c = n.f.PROGRAMMATIC_AD), i.children && i.children.length > 0)) {
						const e = i.children[0];
						d = "".concat(e.offsetWidth, "x").concat(e.offsetHeight)
					}
					const l = t ? "aax" : void 0;
					return Object.assign({
						source: "post",
						action: "view",
						noun: "programmatic_ad"
					}, a.defaults(s), {
						subreddit: a.subreddit(s),
						programmatic: {
							adUnit: d ? "DESKTOP ".concat(d, " ").concat(o) : "DESKTOP ".concat(o),
							count: 1,
							partner: l,
							type: c
						}
					})
				}
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
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
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
				fill: e.color || Object(i.a)(e).bodyText
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
				h = s("./node_modules/redux-thunk/es/index.js"),
				b = s("./node_modules/request-idle-callback/index.js"),
				g = s("./src/lib/browser/isIncognito.ts"),
				f = s("./src/lib/constants/index.ts"),
				C = s("./src/lib/extractQueryParams/index.ts"),
				v = s("./src/lib/filterQueryParams/index.ts"),
				y = s("./src/lib/getParsedUserAgent/index.ts"),
				P = s("./src/lib/initializeClient/index.tsx"),
				x = s("./src/lib/matchRoute/index.ts"),
				O = s("./src/lib/performance.js"),
				E = s("./src/lib/safeJSONParse/index.ts"),
				S = s("./src/reddit/customMiddleware/gqlContext.ts"),
				w = s("./src/reduxMiddleware/apiContext.ts"),
				j = s("./src/telemetry/index.ts"),
				k = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/actions/apiRequestHeaders.ts"),
				_ = s("./src/reddit/actions/chat/unreadCount.ts"),
				I = s("./src/reddit/actions/emailCollection/index.ts"),
				N = s("./src/lib/makeApiRequest/index.ts"),
				T = s("./src/lib/omitHeaders/index.ts"),
				R = s("./src/reddit/constants/headers.ts"),
				L = s("./src/reddit/actions/toaster.ts");
			! function(e) {
				e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
			}(n || (n = {}));
			var A = s("./src/reddit/models/Toast/index.ts");
			const F = e => async (t, s, a) => {
				let {
					apiContext: r
				} = a;
				const o = await ((e, t) => Object(N.b)(Object(T.a)(e, [R.a]), {
					method: f.ab.POST,
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
			var D = s("./src/reddit/actions/media.ts"),
				U = s("./src/reddit/actions/multireddit/index.ts"),
				B = s("./src/reddit/actions/notifications/loader.ts"),
				H = s("./src/reddit/actions/notifications/state.ts"),
				G = s("./src/reddit/actions/nps.ts"),
				q = s("./src/reddit/actions/platform.ts"),
				W = s("./src/reddit/actions/session.ts"),
				V = s("./src/reddit/actions/theme.ts"),
				Q = s("./src/reddit/actions/users.ts"),
				z = s("./node_modules/react-redux/es/index.js"),
				Z = s("./node_modules/react-router/esm/react-router.js"),
				K = s("./node_modules/reselect/es/index.js"),
				Y = (s("./src/reddit/components/Root/redesignFont.less"), s("./assets/fonts/BentonSans/font.less"), s("./assets/fonts/IBMPlexSans/font.less"), s("./assets/fonts/NotoMono/font.less"), s("./assets/fonts/NotoSans/font.less"), s("./assets/fonts/VCR/font.less"), s("./src/reddit/components/Root/index.m.less")),
				J = s.n(Y),
				X = s("./src/higherOrderComponents/makeAsync.tsx"),
				$ = s("./src/lib/loadWithRetries/index.ts"),
				ee = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				te = s("./src/reddit/selectors/user.ts");
			const se = Object(K.c)({
					shouldEnable: e => Object(ee.b)(e) || Object(te.E)(e)
				}),
				ne = Object(z.b)(se),
				ae = () => u.a.createElement(m.Fragment, null);
			class re extends u.a.Component {
				constructor(e) {
					super(e), this.state = {
						component: ae
					}
				}
				componentWillMount() {
					this.props.shouldEnable && this.loadAdminPanel()
				}
				componentWillReceiveProps(e) {
					e.shouldEnable && re.adminPanel === ae ? this.loadAdminPanel() : this.props.shouldEnable && !e.shouldEnable && this.setComponent(ae)
				}
				loadAdminPanel() {
					if (re.adminPanel === ae) {
						const e = Object(X.a)({
							ErrorComponent: ae,
							getComponent: () => Object($.a)(() => s.e("AdminPanel").then(s.bind(null, "./src/reddit/components/AdminPanel/index.tsx")).then(e => e.default)),
							LoadingComponent: ae
						});
						this.setComponent(e)
					}
				}
				render() {
					const e = this.state.component;
					return u.a.createElement(e, null)
				}
				setComponent(e) {
					re.adminPanel = e, this.setState({
						component: e
					})
				}
			}
			re.adminPanel = ae;
			var oe = ne(re),
				ie = s("./src/lib/doubleclickForPublishers/index.ts"),
				ce = s("./src/reddit/components/TrackingHelper/index.tsx"),
				de = s("./src/reddit/helpers/trackers/ads.ts"),
				le = s("./src/reddit/selectors/meta.ts");
			const me = Object(K.c)({
				region: le.k
			});
			class ue extends u.a.Component {
				constructor(e) {
					super(e), Object(ie.f)({
						limitDataProcessing: "CA" === this.props.region,
						onRequest: () => this.props.sendEvent(Object(de.b)()),
						onAdView: (e, t) => {
							Math.random() <= i.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(de.c)(e, t))
						}
					})
				}
				shouldComponentUpdate() {
					return !1
				}
				render() {
					return null
				}
			}
			var pe = Object(z.b)(me)(Object(ce.c)(ue)),
				he = s("./src/reddit/components/AppRouter/index.tsx"),
				be = s("./node_modules/lodash/noop.js"),
				ge = s.n(be),
				fe = s("./node_modules/prop-types/index.js"),
				Ce = s.n(fe),
				ve = s("./node_modules/react-shortcuts/lib/index.js"),
				ye = s("./src/reddit/constants/shortcuts.ts");
			var Pe = s("./src/reddit/selectors/structuredStyles.ts");
			const xe = {
					[ye.c.OpenIndex]: {
						osx: ["cmd + ?", "?"],
						windows: ["ctrl + ?", "?"],
						linux: ["ctrl + ?", "?"],
						other: ["ctrl + ?", "?"]
					},
					[ye.c.Close]: "esc",
					[ye.c.Konami]: "up up down down left right left right b a enter"
				},
				Oe = {
					[ye.c.Upvote]: "a",
					[ye.c.Downvote]: "z",
					[ye.c.Save]: "s",
					[ye.c.Hide]: "h",
					[ye.c.OpenLink]: "l"
				},
				Ee = {
					[ye.c.CollapseOrLoad]: "enter",
					[ye.c.NextComment]: "j",
					[ye.c.PrevComment]: "k",
					[ye.c.Reply]: "r"
				};
			var Se = {
					[ye.d.CommentPage]: Object.assign({}, xe, Oe, Ee),
					[ye.d.Global]: Object.assign({}, xe),
					[ye.d.Lightbox]: Object.assign({}, xe, Oe, Ee, {
						[ye.c.NextPost]: "n",
						[ye.c.PrevPost]: "p"
					}),
					[ye.d.Listing]: Object.assign({}, xe, Oe, {
						[ye.c.OpenLightbox]: "enter",
						[ye.c.NextPost]: "j",
						[ye.c.PrevPost]: "k",
						[ye.c.Expando]: "x",
						[ye.c.NewPost]: "c",
						Reserved: ["n", "p", "r"]
					}),
					[ye.d.Modqueue]: Object.assign({}, xe, Oe, {
						[ye.c.OpenLightbox]: "enter",
						[ye.c.NextPost]: "j",
						[ye.c.PrevPost]: "k",
						[ye.c.Expando]: "x",
						[ye.c.NewPost]: "c"
					})
				},
				we = s("./src/reddit/actions/shortcuts.ts");
			const je = {
					[ye.c.Close]: we.d,
					[ye.c.CollapseOrLoad]: we.e,
					[ye.c.Downvote]: we.f,
					[ye.c.Expando]: we.g,
					[ye.c.Hide]: we.h,
					[ye.c.NextComment]: we.j,
					[ye.c.NextPost]: we.k,
					[ye.c.NewPost]: we.i,
					[ye.c.OpenIndex]: we.l,
					[ye.c.OpenLightbox]: we.m,
					[ye.c.OpenLink]: we.n,
					[ye.c.PrevComment]: we.o,
					[ye.c.PrevPost]: we.p,
					[ye.c.Reply]: we.q,
					[ye.c.Save]: we.s,
					[ye.c.Upvote]: we.t,
					[ye.c.Konami]: null
				},
				ke = (e, t) => (s, n) => {
					if (!document.activeElement) return;
					const a = document.activeElement.nodeName;
					if ("INPUT" === a || "TEXTAREA" === a || "BUTTON" === a && ye.a.includes(n.which)) return;
					const r = je[s];
					r && e(r(t))
				};
			var Me = s("./src/reddit/components/ShortcutWrapper/index.m.less"),
				_e = s.n(Me);
			const Ie = e => {
					let {
						children: t
					} = e;
					return u.a.createElement("div", {
						className: _e.a.shortcutDiv,
						id: ye.b,
						tabIndex: -1
					}, u.a.Children.only(t))
				},
				Ne = new ve.ShortcutManager(Se),
				Te = Object(K.c)({
					isBladeOpen: Pe.j,
					namespace: e => e.activeModalId ? ye.d.Global : e.shortcuts.namespace
				}),
				Re = Object(z.b)(Te, e => ({
					dispatchAction: t => e(t)
				}));
			class Le extends m.Component {
				getChildContext() {
					return {
						shortcuts: Ne
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
					return u.a.createElement(ve.Shortcuts, {
						handler: s ? ge.a : ke(t, a),
						isolate: !0,
						name: n
					}, u.a.createElement(Ie, null, e))
				}
			}
			Le.childContextTypes = {
				shortcuts: Ce.a.object.isRequired
			};
			var Ae = Re(Object(ce.c)(Le)),
				Fe = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				De = s("./src/reddit/components/Header/Sparse.tsx"),
				Ue = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Be = s("./src/reddit/contexts/InsideOverlay.tsx"),
				He = s("./src/reddit/controls/Button/index.tsx"),
				Ge = s("./src/reddit/featureFlags/index.ts"),
				qe = e => u.a.createElement("svg", {
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
				We = s("./src/reddit/pages/InternalServerError/index.m.less"),
				Ve = s.n(We);
			const {
				fbt: Qe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ze = Object(K.c)({
				showError: Ge.d.showVerboseErrors
			}), Ze = Object(z.b)(ze)(e => u.a.createElement(Be.a.Provider, {
				value: !1
			}, u.a.createElement(Ue.b, {
				subredditName: ""
			}, u.a.createElement("div", null, u.a.createElement(De.a, {
				logoHref: "#",
				logoOnClick: () => window.location.reload(!0)
			}), u.a.createElement("div", {
				className: Ve.a.container
			}, u.a.createElement("div", {
				className: Ve.a.mainContent
			}, u.a.createElement(qe, {
				className: Ve.a.dizzySnoo
			}), u.a.createElement("h3", {
				className: Ve.a.title
			}, Qe._("Sorry, for some reason reddit can't be reached.", null, {
				hk: "2yRKWG"
			})), u.a.createElement("div", {
				className: Ve.a.subTitle
			}, Qe._("Give us a few minutes to fix the problem. Sorry!", null, {
				hk: "1c7Mg0"
			})), u.a.createElement(He.f, {
				onClick: () => window.location.reload(!0)
			}, Qe._("Reload Page", null, {
				hk: "S79U1"
			})), e.showError && u.a.createElement("div", {
				className: Ve.a.subTitle
			}, e.error.message)), u.a.createElement("div", {
				className: Ve.a.topImageContainer
			}, u.a.createElement("img", {
				className: Ve.a.image,
				src: "".concat(i.a.assetPath, "/img/error/star_pattern.png")
			})), u.a.createElement("div", {
				className: Ve.a.bottomImageContainer
			}, u.a.createElement("img", {
				className: Ve.a.image,
				src: "".concat(i.a.assetPath, "/img/error/half_planet.png")
			})))))));

			function Ke() {
				return (Ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ye = Object(K.c)({
					theme: e => e.themes.current
				}),
				Je = Object(z.b)(Ye, {})(e => {
					let {
						children: t,
						theme: s
					} = e;
					const n = Object(Fe.a)({
						theme: s
					});
					return u.a.createElement("div", {
						className: J.a.container,
						children: t,
						style: {
							"--background": n.body,
							"--canvas": n.canvas
						}
					})
				});
			var Xe = e => {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: s
					} = e;
					return u.a.createElement(ce.a, null, u.a.createElement(Je, null, u.a.createElement(pe, null), u.a.createElement(oe, null), u.a.createElement(Ae, null, u.a.createElement(t, null, u.a.createElement(Z.d, {
						component: $e(s)
					})))))
				}
				return u.a.createElement(Ze, {
					error: e.error
				})
			};
			const $e = e => t => u.a.createElement(he.b, Ke({
				routes: e
			}, t));
			var et = s("./src/reddit/constants/localStorage.ts"),
				tt = s("./node_modules/lodash/throttle.js"),
				st = s.n(tt),
				nt = s("./src/reddit/helpers/localStorage/index.ts");
			const at = 1e3;
			class rt extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = st()(() => Object(nt.M)(this.props.storageKey, this.props.value), at)
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
			rt.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const ot = Object(K.a)(te.H, e => ({
				storageKey: et.n,
				value: {},
				enabled: !e
			}));
			var it = Object(z.b)(ot)(rt);
			var ct = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(it, null)),
				dt = s("./src/reddit/constants/history.ts"),
				lt = s("./src/reddit/constants/jsapiEvents.ts"),
				mt = s("./src/reddit/constants/parameters.ts"),
				ut = s("./src/reddit/constants/screenWidths.ts"),
				pt = s("./src/reddit/contexts/AdminEvents.ts"),
				ht = s("./src/reddit/contexts/ApiContext.tsx"),
				bt = s("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				gt = s("./node_modules/brcast/dist/brcast.es.js"),
				ft = s("./src/telemetry/helpers/sendEvent.ts");
			var Ct = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(gt.a)([]);
					return {
						broadcaster: t,
						middleware: s => {
							const n = s.getState();
							return (Object(ee.b)(n) || Object(te.E)(n)) && (e = !0, Object(ft.c)(t)), n => a => {
								const r = n(a),
									o = s.getState();
								if (!Object(ee.b)(o)) {
									const s = Object(te.E)(o);
									e && !s ? (e = !1, Object(ft.c)(void 0), t.setState([])) : s && !e && (t.setState([]), Object(ft.c)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(gt.a)([]),
					middleware: () => e => t => e(t)
				}),
				vt = s("./node_modules/lodash/debounce.js"),
				yt = s.n(vt),
				Pt = s("./src/lib/domUtils/index.ts");
			const xt = 30 * f.bb;
			let Ot = Date.now();
			const Et = () => {
					Ot = Date.now()
				},
				St = !!Object(Pt.f)() && {
					passive: !0
				};
			window.addEventListener("click", Et, !1), window.addEventListener("wheel", yt()(Et, 250), St), window.addEventListener("mousemove", yt()(Et, 250), St), window.addEventListener("keydown", yt()(Et, 250), St);
			var wt = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Ot >= xt ? (e.dispatch(W.h()), Et()) : Et()
					})), e => t => e(t)
				},
				jt = s("./node_modules/lodash/pick.js"),
				kt = s.n(jt),
				Mt = s("./src/reddit/actions/header.ts"),
				_t = s("./src/reddit/actions/preferences.ts"),
				It = s("./src/reddit/constants/cookie.ts"),
				Nt = s("./src/reddit/constants/preferences.ts");
			const Tt = new Set([_t.f, _t.h, V.b, Q.b, _t.c, _t.n, Mt.d, Mt.e, _t.q]);
			var Rt = e => t => s => {
					const n = t(s);
					if (Tt.has(s.type)) {
						const t = e.getState().user,
							s = {
								prefs: kt()(t.prefs, ["hamburgerTray", "globalTheme", "featuresViewedHistory", "collapsedTraySections", "nightmode", "subscriptionsPinned", Nt.b, Nt.d, Nt.e]),
								language: t.language
							},
							n = new Date;
						n.setFullYear(n.getFullYear() + 2), l.a.set(It.j, btoa(JSON.stringify(s)), {
							expires: n,
							domain: i.a.cookieDomain
						})
					}
					return n
				},
				Lt = s("./src/lib/fastdom/index.ts"),
				At = s("./src/reddit/actions/redditEmbed.ts"),
				Ft = s("./src/reddit/actions/tabBadging.ts"),
				Dt = s("./src/reddit/helpers/tabBadging/index.ts"),
				Ut = s("./src/reddit/selectors/chat.ts");
			const Bt = (e, t) => {
				e <= 0 ? Lt.a.write(() => {
					Object(Dt.b)(!1), window.document.title = t
				}) : Lt.a.write(() => {
					Object(Dt.b)(), window.document.title = "(".concat(e, ") ").concat(t)
				})
			};
			var Ht = e => {
					const t = window.document.title;
					return s => n => {
						switch (n.type) {
							case _.a.SYNC:
							case _.a.REQUEST_SUCCESS: {
								const s = e.getState(),
									{
										dispatch: a
									} = e;
								if (!Object(te.G)(s)) break;
								const r = Object(Ut.a)(s),
									o = n.payload && n.payload.basicChannelCount,
									i = Object(te.C)(s),
									c = o + i;
								if (Bt(c, t), a(Object(Ft.b)({
										hasUnreadMessages: !!c
									})), r !== o) {
									const e = {
										basicChannelCount: o,
										inboxCount: i
									};
									Object(Dt.c)(e)
								}
								break
							}
							case At.b: {
								const s = e.getState(),
									{
										dispatch: a
									} = e;
								if (!Object(te.G)(s)) break;
								const r = Object(te.C)(s),
									o = n.payload.account && n.payload.account.inboxCount,
									i = Object(Ut.a)(s),
									c = o && o + i;
								if (!c) break;
								if (Bt(c, t), a(Object(Ft.b)({
										hasUnreadMessages: !!c
									})), r !== o) {
									const e = {
										basicChannelCount: i,
										inboxCount: o
									};
									Object(Dt.c)(e)
								}
							}
						}
						return s(n)
					}
				},
				Gt = s("./src/server/helpers/seoMetadata.tsx");
			var qt = "undefined" != typeof document ? e => t => s => {
				const n = t(s);
				if (s.type === q.e) {
					const t = e.getState(),
						n = Object(te.G)(t),
						{
							meta: a
						} = s.payload;
					n ? ((e, t) => {
						const s = Object(te.C)(e) || 0,
							n = Object(Ut.a)(e);
						Bt(n + s, t)
					})(t, a.title) : Lt.a.write(() => {
						document.title = a.title, Object(Gt.b)(t, document)
					})
				}
				return n
			} : () => e => t => e(t);
			const Wt = 5 * f.bb;
			var Vt = e => {
					const t = st()(() => {
						const t = e.getState().user.session,
							s = new Date(t.expires),
							n = new Date;
						s.getTime() - n.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(W.g())
					}, Wt);
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
					return o.user.session && r(o.user.session), window.addEventListener("focus", a), window.addEventListener("touchend", a), document.body.addEventListener("mouseenter", a), e => t => (t.type !== W.a && t.type !== W.b && t.type !== W.c && t.type !== W.e || r(t.payload), t.type === W.d && (clearTimeout(s), s = null), e(t))
				},
				Qt = s("./src/reddit/actions/frontpage.ts"),
				zt = s("./src/reddit/actions/page.ts"),
				Zt = s("./src/reddit/actions/pages/profileComments.ts"),
				Kt = s("./src/reddit/actions/pages/profileOverview.ts"),
				Yt = s("./src/reddit/actions/pages/profilePosts.ts"),
				Jt = s("./src/reddit/actions/pages/search.ts"),
				Xt = s("./src/reddit/actions/pages/subreddit.ts"),
				$t = s("./src/reddit/actions/search.ts"),
				es = s("./src/reddit/actions/subreddit.ts"),
				ts = s("./src/reddit/actions/tracking.ts"),
				ss = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				ns = s("./src/reddit/helpers/history/index.ts"),
				as = s("./src/reddit/helpers/trackers/commentList.ts"),
				rs = s("./src/reddit/helpers/trackers/postList.ts"),
				os = s("./src/reddit/helpers/trackers/screenview.ts"),
				is = s("./src/reddit/selectors/platform.ts"),
				cs = s("./src/reddit/selectors/subreddit.ts"),
				ds = s("./src/reddit/helpers/routeKey/index.ts");
			var ls = e => t => s => {
					const n = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(ts.c({
							routeKey: t
						}))
					};
					if (s.type === q.a) {
						const n = e.getState(),
							a = (n.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							r = Object(cs.D)(n, a) || "",
							i = (n.subreddits.about[r] || {}).advertiserCategory;
						o.trigger("pageview", Object.assign({}, kt()(s.payload.location, "pathname", "search", "hash"), {
							subreddit: a,
							advertiserCategory: i
						}));
						const c = n.platform.currentPage && n.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(ds.b)(c, n, Object(ss.a)(n));
							if (e && j.c.has(e)) {
								const t = j.c.end(e);
								!Object(is.h)(n) && Object(ns.b)(dt.a.IsOverlay) || Object(os.g)(c, n, k.TimerType.UserCancelled, t)
							}
						}
						const d = s.payload.routeMatch;
						if (!d) return t(s);
						const l = Object(ss.a)(n, d),
							m = Object(ds.b)(d, n, l);
						if (!m) return t(s);
						j.c.start(m)
					}
					const a = t(s);
					switch (s.type) {
						case zt.g:
						case Kt.b:
						case Kt.e:
						case Yt.e:
						case Zt.e:
						case Xt.c: {
							const {
								key: e,
								token: t
							} = s.payload;
							t || n(e);
							break
						}
						case Jt.c: {
							const {
								key: e,
								tokens: t
							} = s.payload;
							t.posts || n(e);
							break
						}
						case Qt.b:
						case es.i:
						case Yt.b: {
							const {
								key: t,
								postIds: a
							} = s.payload;
							n(t);
							const r = e.getState();
							if (a.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							rs.j(r, t);
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
							as.a(r, t);
							break
						}
						case $t.c: {
							const {
								key: e
							} = s.payload;
							n(e);
							break
						}
					}
					return a
				},
				ms = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				us = s("./src/reddit/helpers/onBeforeRequestFactory/index.ts");
			var ps = s("./src/lib/permanentCookieOptions.ts");
			const hs = e => {
				if (!e) return;
				const t = (l.a.get(It.h) || "").split(",");
				if (!t.includes(e)) {
					t.unshift(e);
					const s = t.slice(0, 10).join(","),
						n = Object(ps.a)();
					l.a.set(It.h, s, n)
				}
			};
			var bs = s("./src/reddit/layout/page/Listing/index.tsx"),
				gs = s("./src/reddit/reducers/index.ts"),
				fs = s("./src/reddit/routes/collectionCommentsPage/index.ts"),
				Cs = s("./src/reddit/routes/acknowledgements/index.ts"),
				vs = s("./src/reddit/routes/appeal/index.ts"),
				ys = s("./src/reddit/routes/coins/index.ts"),
				Ps = s("./src/reddit/routes/coinsMobile/index.ts"),
				xs = s("./src/reddit/routes/commentsPage/index.ts");
			s("./node_modules/@loadable/component/dist/loadable.esm.js");
			var Os = [],
				Es = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				Ss = s("./src/reddit/helpers/trackers/emailVerification.ts");
			var ws = {
					action: e => async (t, s) => {
						await t(_t.x());
						const a = s(),
							r = e.params.verificationToken,
							o = e.queryParams && e.queryParams.source;
						if (o && Object(j.a)(Object(Ss.b)(o)(a)), !Object(te.H)(a)) return Object(Es.a)(t, a);
						const i = await t(F(r));
						i === n.Success && Object(j.a)(Object(Ss.d)()(a)), t(Object(p.c)("/?verifiedEmail=".concat(i)))
					},
					chunk: f.o.EMPTY,
					exact: !0,
					meta: {
						name: f.yb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				js = s("./src/lib/addQueryParams/index.ts");
			var ks = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							queryParams: r
						} = e;
						await t(Object(p.c)(Object(js.a)("/", r)))
					},
					chunk: f.o.EMPTY,
					exact: !0,
					meta: {
						name: f.yb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [f.o.COMMENTS_PAGE, f.o.FRONTPAGE]
				},
				Ms = s("./src/reddit/routes/framedGild/index.ts"),
				_s = s("./src/reddit/routes/framedModal/index.ts"),
				Is = s("./src/reddit/routes/frontpage/index.ts"),
				Ns = s("./src/reddit/routes/inbox/index.ts"),
				Ts = s("./src/reddit/routes/meta/index.ts"),
				Rs = s("./src/reddit/routes/moderationPages/index.ts"),
				Ls = s("./src/reddit/routes/modListing/index.ts"),
				As = s("./src/reddit/routes/modQueue/index.ts"),
				Fs = s("./src/reddit/routes/multireddit/index.ts"),
				Ds = s("./src/reddit/routes/postCreation/constants.ts");
			const Us = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(p.c)("/"))
				},
				chunk: f.o.EMPTY,
				exact: !0,
				meta: {
					name: f.yb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var Bs = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(Ds.b))
					},
					chunk: f.o.EMPTY,
					exact: !0,
					meta: {
						name: f.yb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...Us],
				Hs = s("./src/reddit/routes/postCreation/index.ts"),
				Gs = s("./src/reddit/routes/postDraft/index.ts"),
				qs = s("./src/reddit/routes/premium/index.ts"),
				Ws = s("./src/reddit/routes/profileComments/index.ts"),
				Vs = s("./src/reddit/endpoints/me/index.ts");
			var Qs = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							rest: r
						} = e.params, {
							queryParams: o
						} = e, i = await Object(Vs.a)(a());
						if (!(i.ok && i.body && i.body.account)) {
							const e = s();
							return void Object(Es.a)(t, e)
						}
						const c = i.body.account.displayText,
							d = r ? "/user/".concat(c, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(r)) : "/user/".concat(c, "/"),
							l = Object(js.a)(d, o);
						await t(Object(p.c)(l))
					},
					chunk: f.o.EMPTY,
					exact: !0,
					meta: {
						name: f.yb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				zs = s("./src/reddit/routes/profileModSettings/index.ts"),
				Zs = s("./src/reddit/routes/profileOverview/index.ts"),
				Ks = s("./src/reddit/routes/profilePosts/index.ts"),
				Ys = s("./src/reddit/routes/profilePrivate/index.ts");
			var Js = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(n)) : "/user/".concat(s, "/"), o = Object(js.a)(r, a);
						await t(Object(p.c)(o))
					},
					chunk: f.o.EMPTY,
					exact: !0,
					meta: {
						name: f.yb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Xs = s("./src/reddit/routes/profileSnoobuilder/index.ts");
			var $s = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/posts/").concat(n) : "/user/".concat(s, "/posts"), o = Object(js.a)(r, a);
						t(Object(p.c)(o))
					},
					chunk: f.o.EMPTY,
					exact: !0,
					meta: {
						name: f.yb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				en = s("./src/reddit/routes/publicAccessNetwork/index.ts"),
				tn = s("./src/reddit/routes/report/index.ts"),
				sn = s("./src/reddit/routes/searchResults/index.ts"),
				nn = s("./src/reddit/routes/settings/index.ts");
			var an = [{
					action: e => async t => {
						const {
							page: s
						} = e.params, n = s && "blocked" === s ? "/settings/privacy" : "/settings/";
						await t(Object(p.c)(n))
					},
					chunk: f.o.EMPTY,
					meta: {
						name: f.yb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(p.c)("/settings/profile"))
					},
					chunk: f.o.EMPTY,
					meta: {
						name: f.yb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				rn = s("./src/reddit/routes/subreddit/index.ts"),
				on = s("./src/reddit/routes/subredditCreation/index.ts"),
				cn = s("./src/reddit/routes/subredditLeaderboard/index.ts"),
				dn = s("./src/reddit/routes/subredditWiki/index.ts"),
				ln = s("./src/reddit/routes/topic/index.ts");
			var mn = [Cs.a, vs.a, ys.a, Ps.a, Qs, Js, $s, ...fs.a, ...xs.a, ws, ...Is.a, qs.a, Ms.a, _s.a, Hs.a, Gs.a, ...Bs, ks, ...Ts.a, Fs.a, As.a, Ls.c, Ns.a, Ws.a, zs.a, Zs.a, Ks.a, Xs.a, Ys.a, en.a, ...nn.a, ...an, sn.a, ...dn.a, ln.a, rn.a, on.a, cn.a, Rs.a, tn.a, ...Os],
				un = s("./src/reddit/constants/experiments.ts"),
				pn = s("./src/reddit/helpers/chooseVariant/index.ts"),
				hn = s("./src/reddit/selectors/experiments/utils.ts");
			const bn = Object(K.a)(e => Object(pn.c)(e, {
					experimentEligibilitySelector: pn.a,
					experimentName: un.f,
					expEventOverride: !1
				}), hn.a),
				gn = Object(K.a)(bn, e => e === un.i.Enabled);
			var fn = s("./src/reddit/selectors/telemetry.ts");
			const Cn = {
					displayDelay: 15,
					displayOnRoutes: [f.yb.SUBREDDIT, f.yb.COMMENTS],
					experimentName: un.ib,
					experimentVariant: un.pb.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				vn = e => {
					const {
						base_url: t
					} = Object(fn.requestWithParams)(e), s = Object(is.b)(e), n = s && s.urlParams.partialPostId, a = s && s.urlParams.subredditName;
					return Object.assign({}, t && {
						rbl: t
					}, a && {
						s: a
					}, n && {
						p: n
					})
				},
				yn = e => {
					if ((((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return t.experimentOverrides[s] === n
						})(Cn, e) || (e => {
							let {
								samplingRate: t,
								seed: s
							} = e;
							return !!s && 0 === Math.floor(s * t)
						})(Cn)) && ((e, t) => {
							let {
								displayOnRoutes: s
							} = e;
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && s.includes(n)
						})(Cn, e) && ((e, t) => {
							let {
								isSEOOnly: s
							} = e;
							return !s || t.meta.isSessionSeo
						})(Cn, e) && ((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return Object(pn.c)(t, {
								experimentName: s,
								experimentEligibilitySelector: pn.a
							}) === n
						})(Cn, e)) return {
						displayDelay: Cn.displayDelay,
						externalVars: vn(e)
					}
				};
			var Pn = s("./src/reddit/singleton/EventSystem.ts"),
				xn = s("./src/reddit/singleton/tracing/index.ts"),
				On = s("./src/reddit/actions/global.ts");
			const En = e => t => Object.assign({}, fn.defaults(t), {
				action: "leave",
				actionInfo: fn.actionInfo(t, {
					reason: e
				}),
				noun: "app",
				source: "global"
			});
			var Sn = s("./src/telemetry/models/Event.ts");
			Object(r.e)(r.b.EntryPointStart);
			const wn = Object(w.a)({
					actionDispatchers: {
						reddaidReceived: Q.v,
						loidReceived: Q.t,
						sessionTrackerReceived: Q.A
					},
					authHeaders: {
						[R.a]: "desktop2x"
					},
					cookies: l.a,
					receivedActions: {
						reddaidReceived: Q.f,
						loidReceived: Q.d,
						sessionTrackerReceived: Q.m,
						userAuthenticated: W.c,
						userLoggedOut: W.d,
						userReauthenticated: W.e,
						headersReceived: M.a
					},
					onBeforeRequestFactory: us.a,
					statsAppName: f.k.Redesign
				}),
				jn = Object(S.a)(wn.apiContext),
				kn = Ct();
			let Mn;
			Object(P.a)({
				reducers: gs.a,
				routes: mn,
				apiContext: wn.apiContext,
				gqlContext: jn.gqlContext,
				appFactory: (e, t) => u.a.createElement(pt.a.Provider, {
					value: kn.broadcaster
				}, u.a.createElement(ht.a.Provider, {
					value: {
						apiContext: wn.apiContext,
						gqlContext: jn.gqlContext
					}
				}, u.a.createElement(bt.b, null, u.a.createElement(Xe, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(ct, null)))),
				appName: f.k.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const s = Mn;
						if (!s) return;
						s.dispatch(Object(q.k)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), s.dispatch(Object(q.j)())
							}
						}))
					}
				}),
				customMiddleware: [h.a.withExtraArgument({
					routes: mn,
					apiContext: wn.apiContext,
					gqlContext: jn.gqlContext
				}), kn.middleware, wt, wn.middleware, jn.middleware, Vt, Rt, ls, qt, Ht],
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
					loading: u.a.createElement(bs.a, {
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
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(D.f)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: "t3_".concat(e.data.id36)
							}))
						}), gn(n.getState()) && window.addEventListener("beforeunload", () => {
							const e = n.getState();
							((e, t) => {
								navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
									command: e,
									payload: t
								})
							})("sendV2Event", Sn.f(En("tab_closed")(e)))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || n.dispatch(Object(q.g)());
					const a = Object(te.R)(n.getState());
					n.dispatch(Object(V.c)({
						nightmode: a
					}));
					const r = (e => e.tracing.traceId)(n.getState());
					if (r && (e => Object(pn.c)(e, {
							experimentEligibilitySelector: pn.a,
							experimentName: un.q
						}) === un.x.Enabled)(n.getState())) {
						xn.b.enableTracing(!0);
						const e = xn.b.createTraceFromId(r);
						xn.b.setParent(e)
					}
					n.dispatch(Object(q.h)(s));
					t.listen((e, t) => {
						const a = Object(x.a)(Object(c.e)(e), s);
						n.dispatch(Object(q.i)(e, t, a))
					});
					const o = n.getState(),
						{
							currentPage: d
						} = o.platform;
					if (d) {
						const e = [];
						Object(is.i)(o) && e.push(mt.d), e.length > 0 && n.dispatch(Object(p.c)(Object(v.a)(d.url, e)))
					}
					return ms.a.initialize(), {
						localStorageData: Object(nt.n)()
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
					Mn = l;
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
							i = Object(cs.D)(s, o) || "";
						hs(i), Pn.a.publish(lt.c, r, document)
					});
					const u = l.getState(),
						p = (u.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						h = Object(cs.D)(u, p) || "",
						P = (u.subreddits.about[h] || {}).advertiserCategory;
					o.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: u.user.account ? u.user.account.id : u.user.loid.loid
						}
					}), o.trigger("pageview", {
						subreddit: p,
						advertiserCategory: P
					}), l.dispatch(Object(On.b)({
						localStorageData: m
					})), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: o
							} = e.platform,
							i = (o.urlParams.subredditName || "").toLowerCase(),
							c = Object(cs.D)(e, i) || "";
						if (hs(c), o && o.meta) {
							const t = o.meta.name;
							if (Object(j.b)(f.k.Redesign, {
									page: t,
									type: "rum"
								}), Object(y.c)(e.meta.userAgent) && window.innerWidth > ut.b) {
								const s = Object(r.f)(d);
								O.a && O.a.timing && xn.b.isEnabled && (xn.b.recordPerformanceTimings("time_to_first_byte", O.a.timing.fetchStart, O.a.timing.responseStart), xn.b.recordPerformanceTimings("time_to_interactive", O.a.timing.fetchStart, O.a.timing.domInteractive));
								const n = [],
									a = {
										isLoggedIn: Object(te.H)(e),
										name: t,
										statsdPathsForExperiments: n
									};
								Object(r.g)(a, s)
							}
							const s = O.a.timing.domInteractive - O.a.timing.navigationStart;
							Object(os.g)(o.routeMatch, l.getState(), k.TimerType.Initial, s);
							const i = Object(C.a)(window.location.href);
							Object(E.a)(i.get(mt.u)) && l.dispatch(Object(L.e)({
								kind: A.b.SuccessCommunity,
								text: a.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), i.get(mt.v) && (l.dispatch((e => async (t, s, r) => {
								let {
									apiContext: o
								} = r;
								switch (e) {
									case n.Success:
										t(Object(L.e)({
											kind: A.b.SuccessCommunity,
											text: a.fbt._("Email verification complete", null, {
												hk: "vp6R2"
											})
										}));
										break;
									case n.AlreadyVerified:
										t(Object(L.e)({
											kind: A.b.SuccessCommunity,
											text: a.fbt._("Your email address has already been verified.", null, {
												hk: "7ro41"
											})
										}));
										break;
									case n.WrongUser:
										return void t(Object(L.e)({
											kind: A.b.Error,
											text: a.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
												hk: "1NrK5a"
											})
										}));
									default:
										t(Object(L.e)({
											kind: A.b.Error,
											text: a.fbt._("Something went wrong.", null, {
												hk: "JbBLl"
											})
										}))
								}
							})(i.get(mt.v))), history.replaceState(history.state, "", Object(v.a)(window.location.href, [mt.v])));
							let c = !1;
							if ((Object(ns.b)(dt.a.JustLoggedIn) || i && i.get(mt.n) && Object(E.a)(i.get(mt.n))) && (l.dispatch(Object(L.e)({
									text: a.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), c = !0, Object(ns.c)(dt.a.JustLoggedIn), history.replaceState(history.state, "", Object(v.a)(window.location.href, [mt.n]))), Object(ns.b)(dt.a.JustLoggedOut) && (c = !0, Object(ns.c)(dt.a.JustLoggedOut)), Object(H.b)(e), !1 !== nt.w() && Object(B.a)().then(e => e.requestNotificationsPermissions).then(e => l.dispatch(e(c, !1))), t === f.yb.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								l.dispatch(Object(U.h)({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(I.c)())
						}
						Object(te.H)(l.getState()) && l.dispatch(Object(_.d)()), Object(b.requestIdleCallback)(async () => {
							l.dispatch(Object(G.d)()), await Object(g.a)() && (e => Object(j.a)(Object.assign({}, fn.defaults(e), {
								source: "global",
								action: "view",
								noun: "empty"
							})))(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = yn(e);
								t && (await (async e => {
									return (await Object($.a)(() => s.e("UserZoomIntegration").then(s.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), n && n())
							}, n = t.listen((t, s) => {
								"POP" !== s && e()
							});
							e()
						}), gn(l.getState()) && document.addEventListener("visibilitychange", () => {
							"visible" !== document.visibilityState && Object(j.a)(En("tab_backgrounded")(l.getState()))
						})
					}), window.history.scrollRestoration = "manual", Pn.a.attachStore(l)
				},
				raven: {
					tags: {
						project: f.k.Redesign
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
				bottomImageContainer: "_3sveU8lpcXyGOpDXsXc9xg",
				imageContainer: "_2wX-WzezrtDmDaxm8BR4zz",
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR"
			}
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/page.ts");
			const o = "/acknowledgements",
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "Acknowledgements",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Acknowledgements").then(s.bind(null, "./src/reddit/pages/Acknowledgements/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Acknowledgements/index.tsx"
					}
				}),
				c = {
					action: r.n,
					chunk: a.o.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.ACKNOWLEDGEMENTS
					},
					path: o
				};
			t.a = c
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
					chunk: a.o.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.APPEAL
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
					chunk: a.o.COINS,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.COINS
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
					chunk: a.o.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.COINS_MOBILE
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("CollectionCommentsPage")]).then(s.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
						name: a.yb.COLLECTION_COMMENTS
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("CommentsPage")]).then(s.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
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
					chunk: a.o.COMMENTS_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [a.o.FRONTPAGE, a.o.SUBREDDIT]
				}),
				m = [l(a.yb.COMMENTS, i), l(a.yb.DUPLICATES, c), l(a.yb.COMMENTS, d)];
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
					chunk: a.o.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.FRAMED_GILD
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
					importAsync: () => s.e("FramedModal").then(s.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
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
					chunk: a.o.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.FRAMED_MODAL
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
			const c = Object.keys(o.M).map(e => o.M[e]).join("|"),
				d = "/",
				l = "/:sort(".concat(c, ")?"),
				m = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Frontpage~Subreddit~SubredditWiki"), s.e("FrontpageSidebar"), s.e("Frontpage")]).then(s.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
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
						name: o.yb.INDEX
					}
				}),
				h = Object.assign({}, u, {
					path: l,
					meta: {
						name: o.yb.LISTING
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
				d = Object.keys(o.J).map(e => o.J[e]).join("|"),
				l = "/message/:pageName(".concat(d, ")/:rest(.+)?"),
				m = {
					action: i.A,
					chunk: o.o.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: o.yb.INBOX_PAGES
					},
					path: l
				};
			t.a = m
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				o = s("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts");
			const i = {
					action: r.a,
					chunk: a.o.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
					component: Object(n.a)({
						resolved: {},
						chunkName: () => "CommunityPointsLearnMore",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => Promise.all([s.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~851e9c33"), s.e("CommunityPointsLearnMore")]).then(s.bind(null, "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: a.yb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE
					},
					path: ["/community-points/", "/web/community-points/"]
				},
				c = {
					action: o.a,
					chunk: a.o.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(n.a)({
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
					exact: !0,
					meta: {
						name: a.yb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				};
			t.a = [i, c]
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
					importAsync: () => Promise.all([s.e("vendors~ModQueuePages"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), s.e("ChatPost~ModQueuePages"), s.e("ModQueue~ModQueuePages"), s.e("ModQueuePages")]).then(s.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
				c = Object.keys(o.eb).map(e => o.eb[e]).join("|"),
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
						name: o.yb.MODQUEUE_PAGES
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
			const c = Object.keys(i.Nb).map(e => i.Nb[e]).join("|"),
				d = e => "/".concat(e, "/about/scheduledposts"),
				l = e => "/".concat(e, "/about/eventposts"),
				m = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested);
						await r(e)(t, n, a)
					},
					chunk: i.o.MODERATION_PAGES,
					component: m,
					exact: !0,
					meta: {
						name: i.yb.MODERATION_PAGES
					},
					path: p,
					prefetches: [i.o.SUBREDDIT]
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~Multireddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), s.e("Multireddit")]).then(s.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
				l = Object.keys(o.M).map(e => "".concat(d, "/:sort(").concat(o.M[e], ")?")),
				m = "/user/:username/m/:multiredditName",
				u = Object.keys(o.M).map(e => "".concat(m, "/:sort(").concat(o.M[e], ")?")),
				p = [d, m, ...l, ...u],
				h = {
					action: i.C,
					chunk: o.o.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.yb.MULTIREDDIT
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("PostDraft")]).then(s.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
						name: a.yb.POST_DRAFT
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
					action: r.D,
					chunk: a.o.PREMIUM,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.PREMIUM
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("ProfileComments")]).then(s.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
						name: a.yb.PROFILE_COMMENTS
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
						name: a.yb.PROFILE_MODERATION
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("ProfileOverview")]).then(s.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
						name: a.yb.PROFILE_OVERVIEW
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfilePosts")]).then(s.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
						name: a.yb.PROFILE_POSTS
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
					importAsync: () => Promise.all([s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested);
						await r(e)(t, n, a)
					},
					chunk: o.o.PROFILE_PRIVATE,
					component: c,
					exact: !0,
					meta: {
						name: o.yb.PROFILE_PRIVATE
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested);
						await r(e)(t, n, a)
					},
					chunk: a.o.PROFILE_SNOOBUILDER,
					component: o,
					exact: !0,
					meta: {
						name: a.yb.PROFILE_SNOOBUILDER
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
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("LiveVideoPlayer~PublicAccessNetwork"), s.e("PublicAccessNetwork")]).then(s.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
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
					chunk: a.o.PUBLIC_ACCESS_NETWORK,
					component: o,
					exact: !0,
					meta: {
						name: a.yb.PUBLIC_ACCESS_NETWORK
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
						name: a.yb.REPORT
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
					importAsync: () => Promise.all([s.e("vendors~SearchResults"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("SearchResults")]).then(s.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
						name: a.yb.SEARCH_RESULTS
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
			const d = Object.keys(o.Lb).map(e => o.Lb[e]).join("|"),
				l = [{
					action: c.a,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~851e9c33"), s.e("ProfileModeration~Settings~SubredditCreation"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("Settings~reddit-components-ProfileIdCard"), s.e("Settings")]).then(s.bind(null, "./src/reddit/pages/Settings/index.tsx")),
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
						name: o.yb.SETTINGS
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
					chunk: o.o.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: o.yb.USER_DATA_REQUEST
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Frontpage~Subreddit~SubredditWiki"), s.e("Subreddit")]).then(s.bind(null, "./src/reddit/pages/Subreddit/index.tsx")),
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
				d = Object.keys(o.M).map(e => "/r/:subredditName/:sort(".concat(o.M[e], ")?")),
				l = ["/r/:subredditName", ...d],
				m = {
					action: i.l,
					chunk: o.o.SUBREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.yb.SUBREDDIT
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
					chunk: a.o.SUBREDDIT_CREATION,
					exact: !0,
					meta: {
						name: a.yb.SUBREDDIT_CREATION
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
					chunk: a.o.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: a.yb.SUBREDDIT_LEADERBOARD
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("Frontpage~Subreddit~SubredditWiki"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("IdCard~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
						name: r.yb.SUBREDDIT_WIKI
					},
					path: d
				}, u = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("Frontpage~Subreddit~SubredditWiki"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("IdCard~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested);
						await r(e)(t, n, a)
					},
					chunk: r.o.SUBREDDIT_WIKI,
					component: i,
					exact: !0,
					meta: {
						name: r.yb.SUBREDDIT_WIKI
					},
					path: c,
					prefetches: [r.o.SUBREDDIT]
				};
			t.a = [m, u]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/wiki.ts"),
				o = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = s("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const s = t.wikiSubRoute === r.m.Settings,
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Topic")]).then(s.bind(null, "./src/reddit/pages/Topic/index.tsx")),
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
						name: a.yb.TOPIC
					},
					prefetches: [a.o.COMMENTS_PAGE, a.o.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return f
			}));
			var n = s("./src/config.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/reddit/constants/accountManager.ts"),
				i = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				d = s("./src/reddit/selectors/experiments/responsiveSettings.ts"),
				l = s("./src/reddit/helpers/chooseVariant/index.ts"),
				m = s("./src/reddit/selectors/experiments/utils.ts"),
				u = s("./src/reddit/selectors/user.ts");
			const p = Object(a.a)(e => Object(l.c)(e, {
					experimentName: i.G,
					experimentEligibilitySelector: e => !Object(u.G)(e)
				}), m.a),
				h = Object(a.a)(p, e => e === i.L.SSO),
				b = e => e.accountManagerModalData.actionSource,
				g = e => e.accountManagerModalData.redirectUrl,
				f = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, b, c.a, h, d.b, (e, t, s, a, c, d) => {
					let l = "".concat(n.a.accountManagerOrigin).concat(e);
					return a && (l = Object(r.a)(l, {
						[i.O]: a,
						uiMode: t
					})), c && (l = Object(r.a)(l, {
						[i.G]: c
					})), d && (l = Object(r.a)(l, {
						[i.tb]: d
					})), e === o.b.Index || e === o.b.ChangePassword ? l : l = Object(r.a)(l, {
						actionSource: s
					})
				})
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
				return Object(r.E)(e) || n.u.Treatment1 === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.m
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
			const o = e => Object(r.E)(e) || !(n.Zb.Holdout === Object(a.c)(e, {
				experimentEligibilitySelector: a.a,
				experimentName: n.Wb
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
			const r = e => n.cc.All === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.bc
				}),
				o = ["gwinnett", "broomfield", "bakersfield", "northampton", "newjersey", "mankato", "statenisland", "brampton", "gnv", "inlandempire", "lincoln", "alameda", "abbotsford", "montana", "juneau", "barrie", "newhampshire", "lascruces", "williamsport", "charlotte", "fortwayne", "collinsbeach", "desmoines", "minnesota", "metaquebec", "berkeley", "ohio", "joplinmo", "westchester", "pueblo", "virginia", "oregon", "fortworth", "houston", "washington", "cincinnati", "florenceal", "cedarrapids", "detroit", "bowlinggreen", "greeley", "ames", "newarkohio", "fortcollins", "kingstonontario", "santafe", "fargomoorhead", "daytonabeach", "wilmingtonde", "berkeleyca", "redmond", "panamacity", "maine", "texarkana", "hawaii", "idaho", "edmonton", "hillsboro", "timmins", "everett", "america", "boulder", "humboldt", "coachellavalley", "bayridge", "antelopevalley", "plano", "frisco", "stcharlesmo", "nwt", "rochester", "orlando", "triangle", "guelph", "lehighvalley", "daltonga", "escondido", "lancaster", "hollandmichigan", "peoriail", "asheville", "ventura", "eastside", "orangecounty", "nebraska", "stgeorge", "santabarbara", "kamloops", "algonquinpark", "tahoe", "marin", "tampa", "ozarks", "arlington", "chattanooga", "benicia", "fremont", "elkgrove", "kenosha", "milton", "longmont", "logan", "augusta", "clarksville", "pei", "grandcanyon", "airdrie", "sanjose", "southernillinois", "greenbay", "boston", "cary", "victoriabc", "tempe", "mississippi", "halifax", "destin", "lafayette", "delaware", "dtla", "twincitiessocial", "pflugerville", "harrisonburg", "durango", "cascadia", "albuquerque", "minneapolis", "macon", "corpus", "laredo", "kentwa", "redding", "arkansas", "anaheim", "mobileal", "newyork", "norfolk", "santamonica", "fresno", "somerville", "idahofalls", "indianapolis", "tallahassee", "renton", "lexington", "austin", "ontario", "nyc", "sudbury", "illinois", "puyallupwa", "evanston", "bend", "fairbanks", "westchesterpa", "denver", "readingpa", "venturacounty", "aspen", "keywest", "lakewood", "brownsville", "peterborough", "richmondhill", "staugustine", "moncton", "santaclarita", "huntingtonbeach", "pacifica", "greenville", "roseville", "albany", "southdakota", "waco", "salem", "nwi", "cleveland", "kzoo", "biloxi", "hudsonvalley", "scottsdale", "normanok", "longisland", "kitsap", "yakima", "reno", "beaverton", "medicinehat", "vancouverwa", "salemma", "westvirginia", "southbend", "wisconsin", "lawrence", "seattle", "columbiasc", "columbusga", "roanoke", "texas", "toledo", "brooklyn", "murfreesboro", "rockland", "atlanta", "corpuschristi", "delco", "yellowstone", "bloomington", "corvallis", "vermont", "joshuatree", "vancouver", "jacksonhole", "myrtlebeach", "modesto", "bentonville", "grandforks", "eau_claire", "toronto", "springfieldil", "memphis", "fargo", "siouxfalls", "denton", "stpetersburgfl", "nunavut", "johnstown", "springfieldmo", "quadcities", "durham", "pennsylvania", "southjersey", "spartanburg", "northdakota", "321", "asburypark", "california", "stlouis", "burlington", "seattlewa", "syracuse", "chicago", "fortlauderdale", "ithaca", "twinfalls", "moab", "bloomingtonnormal", "hiltonhead", "riverside", "saginaw", "fayettenam", "maui", "losangeles", "providence", "whistler", "corona", "reddeer", "glendale", "montgomerycountymd", "vancouverisland", "montco", "olympia", "nola", "littlerock", "bronx", "coloradosprings", "vegas", "niagara", "broward", "napa", "springfield", "santarosa", "newbrunswicknj", "columbus", "rhodeisland", "fortmcmurray", "san_angelo", "porttownsend", "yuma", "pasadena", "milwaukee", "ogden", "riograndevalley", "clemson", "tacoma", "camaswashington", "regina", "cypresstx", "novascotia", "plattsburgh", "bullcity", "omaha", "lakeland", "dayton", "auburn", "newhaven", "vaughan", "martinsburg", "maryland", "siliconvalley", "newmexico", "pickering", "hamptonroads", "collegestation", "rolla"]
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
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/constants/index.ts");
			const a = e => !r(e) && !!e.user.prefs.subscriptionsPinned,
				r = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.yb.MODERATION_PAGES)
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a", "vendors~Chat~Governance~Reddit", "vendors~Governance~Reddit", "vendors~Reddit", "Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3", "Chat~Governance~Reddit", "Governance~Reddit", "ModListing~Reddit"]
	]
]);
//# sourceMappingURL=Reddit.800d2a16ce2da0b386b1.js.map