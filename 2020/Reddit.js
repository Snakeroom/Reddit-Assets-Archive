// https://www.redditstatic.com/desktop2x/Reddit.f4bdf3737cc6f81477dd.js
// Retrieved at 3/30/2020, 2:50:05 PM by Reddit Dataminer v1.0.0
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
					return t !== a.Ab.PROFILE && (Object(r.a)(e) ? s.push("frontpage") : s.push("r.".concat(e))), t === a.Ab.INDEX ? s.push(a.Ab.LISTING) : t && s.push(t), s.join("/")
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
						t.pubads().addEventListener("slotRequested", e.onRequest), t.pubads().addEventListener("impressionViewable", e.onAdView), t.pubads().disableInitialLoad(), t.enableServices()
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
				return E
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "c", (function() {
				return M
			}));
			const E = () => async (e, t, s) => {
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
			}, O = (e, t) => async (s, n, a) => {
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
			}, w = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				const o = s(),
					i = o.user.account,
					c = Object(f.g)(o, e.subredditId),
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
			}, j = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				await s(O(e, !0));
				const o = n().economics.subredditPremium[e];
				if (o && o.status === g.a.Fetched) {
					const n = o.data.userOwnedBadges.find(e => e.type === t.id);
					n && (s(w({
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
				if (await n(O(e, !0)), s && t) {
					const s = a(),
						r = Object(f.g)(s, e),
						o = Object(C.a)(s, t);
					if (!r[Object(h.d)(o.placement)] && o) {
						const t = Object(f.q)(s, {
							subredditId: e,
							badge: o
						});
						t && await n(w({
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
				c = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				l = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = s("./src/reddit/endpoints/gold/purchase.ts");
			const u = e => e.map(e => ({
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
				p = e => e.map(e => ({
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
				h = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null;

			function b(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: s,
					premium_packages: n
				} = e.body, a = {
					activeSaleConfig: h(t),
					coinPackages: u(s),
					premiumPackages: p(n)
				};
				return Object.assign({}, e, {
					body: a
				})
			}
			var g = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			s.d(t, "a", (function() {
				return v
			}));
			const f = Object(a.a)(g.g),
				C = Object(a.a)(g.h),
				P = Object(a.a)(g.f),
				v = () => async (e, t, s) => {
					let {
						apiContext: a
					} = s;
					e(f());
					try {
						const t = await (async e => {
							const t = "".concat(e.apiUrl, "/api/v2/gold/purchase_package_details"),
								s = Object(l.a)(t);
							return Object(i.b)(Object(c.a)(e, [d.a]), {
								method: o.cb.GET,
								endpoint: s
							}).then(m.c).then(b)
						})(a());
						if (!t.ok) throw new Error(t.error && t.error.type || "Unknown error");
						const s = t.body;
						e(C(s))
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
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			}));
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
						method: i.cb.GET
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
				}, C = Object(a.a)(p.k), P = Object(a.a)(p.j), v = Object(a.a)(p.i), x = e => async (t, s, a) => {
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
						method: i.cb.POST,
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
					g.ok ? (t(P()), t(Object(r.e)({
						kind: l.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "UBoVR"
						})
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
				return j
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
				E = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				O = s("./src/reddit/selectors/externalAccount.ts"),
				w = s("./src/reddit/selectors/user.ts");
			const j = e => async (t, s) => {
				await t(Object(P.u)());
				const j = [t(Object(b.x)(!0)), t(Object(m.a)())];
				s().economics.paymentSystems.status === E.a.NotFetched && j.push(t(Object(l.a)())), await Promise.all(j); {
					const e = s();
					if (!Object(w.G)(e)) return Object(y.a)(t, e)
				}
				const {
					page: S = r.Nb.Account
				} = e.params;
				if (S === r.Nb.Gold) return void t(Object(n.c)("/settings/premium"));
				const M = [];
				S === r.Nb.Profile && (M.push(t(Object(g.a)())), M.push(t(Object(f.e)()))), S === r.Nb.Account && M.push(t(Object(u.o)())), S === r.Nb.Notifications && M.push(t(Object(p.a)())), S !== r.Nb.Privacy && S !== r.Nb.Messaging || M.push(t(Object(d.b)())), await Promise.all(M); {
					const e = s(),
						r = e.platform.currentPage,
						{
							url: c
						} = r,
						d = Object(o.a)(c).get(v.c);
					if (d && (t(Object(n.c)(Object(i.a)(c, [v.c]))), Object(O.a)(e))) {
						const s = Object(w.O)(e),
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
					Object(h.b)(s()) || c !== m.m || t(Object(n.b)("/subreddits/leaderboard")), await t(P(c))
				}, P = e => async (t, s) => {
					await t(Object(r.h)());
					const n = s(),
						a = Object(g.H)(n),
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
						P = Object(b.d)(l, u, o);
					await Promise.all([t(Object(c.a)(C, P)), t(Object(d.u)())])
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
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym",
				popupContainer: "_13Vg6OZEIy5AcJ_DOw6jK0"
			}
		},
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, s) {
			"use strict";
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
				P = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				v = s("./src/lib/fastdom/index.ts"),
				x = s("./src/lib/FocusTrap/index.ts"),
				y = s("./src/lib/isEqualWithoutKey/index.ts"),
				E = s("./src/lib/isSimpleClick/index.ts"),
				O = s("./src/reddit/actions/header.ts"),
				w = s("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				j = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				S = s("./node_modules/polished/dist/polished.es.js"),
				M = s("./node_modules/react-motion/lib/react-motion.js"),
				k = s("./src/lib/lessComponent.tsx"),
				_ = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				I = s("./src/lib/addQueryParams/index.ts"),
				N = s("./src/reddit/actions/preferences.ts"),
				T = s("./src/reddit/constants/accountManager.ts"),
				R = s("./src/reddit/constants/history.ts"),
				A = s("./src/reddit/constants/listings.ts"),
				L = s("./src/reddit/constants/parameters.ts"),
				F = s("./src/reddit/helpers/history/index.ts"),
				D = s("./src/reddit/icons/svgs/Close/index.tsx"),
				B = s("./src/reddit/selectors/accountManager.ts"),
				U = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				H = s("./src/reddit/selectors/telemetry.ts"),
				G = s("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				q = s.n(G);
			const W = _.a.redditUrl,
				V = k.a.iframe("IFrame", q.a),
				Q = k.a.button("CloseButton", q.a),
				z = k.a.wrapped(D.a, "Close", q.a),
				Z = Object(b.c)({
					accountManagerSrc: B.c,
					actionSource: B.a,
					frontpageSignupVariant: U.a,
					redirectUrl: B.b
				}),
				K = Object(u.b)(Z, (e, t) => ({
					oniFrameLoaded: (t, s) => {
						e((e, n) => {
							t.contentWindow.postMessage({
								events: Object.assign({}, Object(H.defaults)(n()), {
									actionSource: s
								}),
								type: "eventData"
							}, W)
						})
					},
					onTwoFactorChanged: () => e(Object(N.x)(!1))
				})),
				Y = e => {
					let {
						data: t,
						origin: s
					} = e;
					return t && t.success && (t.type === T.a.ChangePassword || t.type === T.a.Close || t.type === T.a.CreateAccount || t.type === T.a.Login || t.type === T.a.Register || t.type === T.a.Resize || t.type === T.a.Subscribe || t.type === T.a.TwoFactorChanged) && s === _.a.accountManagerOrigin
				};
			class J extends m.a.Component {
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
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && Y(e))
							if (t.type === T.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === T.a.Close) this.close();
						else if (t.type === T.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === T.a.Login) this.onLogIn();
						else if (t.type === T.a.ChangePassword) this.onChangePassword();
						else if (t.type === T.a.Resize) {
							if (t.payload && this.iframeRef.current) {
								const e = t.payload;
								e.height && e.width && (this.iframeRef.current.style.height = "".concat(e.height, "px"), this.iframeRef.current.style.width = "".concat(e.width, "px"))
							}
						} else t.type === T.a.TwoFactorChanged ? this.props.onTwoFactorChanged() : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(F.a)(R.a.JustLoggedIn, !0), window.location.reload(!0))
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload(!0)
					}, this.onSignUp = (e, t) => {
						let s = "";
						if (this.props.redirectUrl) s = this.props.redirectUrl;
						else if ("/" !== window.location.pathname) s = window.location.href;
						else {
							const n = 0;
							s = (e || t && t.length || 0) > n ? A.c[A.b.Home] : A.c[A.b.Popular]
						}
						this.redirectTo(s)
					}, this.redirectTo = e => {
						window.location.replace(Object(I.a)(e, {
							[L.n]: "true"
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(V, {
						className: t,
						innerRef: this.iframeRef,
						src: e
					}), s && m.a.createElement(Q, {
						onClick: this.close
					}, m.a.createElement(z, null)))
				}
			}
			var X = K(J),
				$ = s("./src/reddit/components/TrackingHelper/index.tsx");
			const ee = [],
				te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee;
					return t => Object.assign({}, H.defaults(t), {
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
			var se = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				ne = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				ae = s("./src/reddit/components/Carousel/index.tsx"),
				re = s("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				oe = s.n(re);
			const ie = k.a.div("Container", oe.a),
				ce = k.a.wrapped(ae.b, "Carousel", oe.a),
				de = k.a.div("Phone", oe.a),
				le = k.a.img("Frame", oe.a),
				me = "".concat(_.a.assetPath, "/img/frontpage-signup/android-frame.png"),
				ue = "".concat(_.a.assetPath, "/img/frontpage-signup/iphone-frame.png"),
				pe = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				he = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var be = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(ie, {
						className: t
					}, m.a.createElement(de, {
						className: oe.a.android
					}, m.a.createElement(ce, {
						animationType: ae.a.Fade,
						className: oe.a.android,
						delay: 2500,
						items: pe,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(le, {
						src: me
					})), m.a.createElement(de, {
						className: oe.a.iphone
					}, m.a.createElement(ce, {
						animationType: ae.a.Fade,
						className: oe.a.iphone,
						items: he,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(le, {
						src: ue
					})))
				},
				ge = s("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				fe = s.n(ge);
			const Ce = k.a.div("Container", fe.a),
				Pe = k.a.span("Disclaimer", fe.a),
				ve = k.a.a("Link", fe.a);
			var xe = e => m.a.createElement(Ce, {
					className: e.className
				}, m.a.createElement(ve, {
					href: "https://about.reddit.com"
				}, n.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(ve, {
					href: "https://www.redditinc.com/advertising"
				}, n.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(ve, {
					href: "http://www.redditblog.com/"
				}, n.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(ve, {
					href: "https://about.reddit.com/careers/"
				}, n.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(ve, {
					href: "https://www.reddithelp.com"
				}, n.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(ve, {
					href: "https://about.reddit.com/press/"
				}, n.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(ve, {
					href: "https://www.reddit.com/mobile/download"
				}, n.fbt._("The Reddit App", null, {
					hk: "1N9ljJ"
				})), m.a.createElement(ve, {
					href: "https://www.reddit.com/coins"
				}, n.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(ve, {
					href: "http://redditgifts.com/"
				}, n.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(ve, {
					href: "https://www.reddit.com/premium"
				}, n.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(ve, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, n.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(ve, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, n.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), m.a.createElement(Pe, null, n.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				ye = s("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				Ee = s.n(ye);
			const Oe = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				we = k.a.div("Container", Ee.a),
				je = k.a.wrapped(X, "IFrame", Ee.a),
				Se = k.a.wrapped(be, "Images", Ee.a),
				Me = k.a.wrapped(xe, "Links", Ee.a),
				ke = k.a.div("MainContent", Ee.a),
				_e = k.a.div("MainContentColumn", Ee.a),
				Ie = k.a.button("NotReady", Ee.a),
				Ne = k.a.span("NotReadyText", Ee.a),
				Te = k.a.wrapped(se.a, "NotReadyIcon", Ee.a),
				Re = Object(C.a)(e => {
					const {
						className: t,
						containerRef: s,
						frontpageSignupVariant: a,
						onCloseClick: r,
						onVisibilityChange: o
					} = e, i = Object(ne.a)(e).bodyText;
					return m.a.createElement(j.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: o
					}, m.a.createElement(we, {
						className: t,
						innerRef: s
					}, m.a.createElement(ke, null, m.a.createElement(_e, null, m.a.createElement(Se, null, "Images Placeholder")), m.a.createElement(_e, null, m.a.createElement(je, {
						className: Object(g.a)({
							[Ee.a.fields]: Object(U.b)(a)
						}),
						path: T.b.Register,
						uiMode: T.c.Embed
					}))), m.a.createElement(Ie, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(S.m)(.8, i)
						}
					}, m.a.createElement(Ne, null, n.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(Te, null)), m.a.createElement(Me, null)))
				});
			class Ae extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Le extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(te()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = "-".concat(this.containerRef.current.offsetHeight, "px"), this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(Ae, {
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Re, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(M.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(M.spring)(n, Oe)
						}
					}, this.renderScroller))
				}
			}
			var Fe = Object($.c)(Le),
				De = s("./node_modules/js-cookie/src/js.cookie.js"),
				Be = s.n(De),
				Ue = s("./src/lib/localStorageAvailable/index.ts"),
				He = s("./src/reddit/actions/modal.ts"),
				Ge = s("./src/higherOrderComponents/makeAsync.tsx"),
				qe = Object(Ge.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("BadgePurchaseModal").then(s.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				We = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx");
			var Ve = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumPurchaseModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/PurchaseModal/index.tsx")).then(e => e.default)
			});
			var Qe = Object(Ge.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsSupportPaymentModal")]).then(s.bind(null, "./src/reddit/components/Economics/Support/PaymentModal/index.tsx")).then(e => e.default)
				}),
				ze = s("./src/lib/loadWithRetries/index.ts");
			const Ze = () => null;
			var Ke = Object(Ge.a)({
					ErrorComponent: Ze,
					getComponent: () => Object(ze.a)(() => s.e("ManageChatRoomsModal").then(s.bind(null, "./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.tsx"))).then(e => e.default),
					LoadingComponent: Ze
				}),
				Ye = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var Je = Object(Ge.a)({
				getComponent: () => Object(ze.a)(() => s.e("NotificationsPrePromptLoader").then(s.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Xe = () => null;
			var $e = Object(Ge.a)({
					ErrorComponent: Xe,
					getComponent: () => Object(ze.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Xe
				}),
				et = s("./src/higherOrderComponents/asModal/index.tsx"),
				tt = s("./src/reddit/actions/structuredStyles/index.ts"),
				st = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				nt = s("./src/reddit/constants/modals.ts"),
				at = s("./src/reddit/controls/TextButton/index.tsx"),
				rt = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: ot
			} = s("./node_modules/fbt/lib/FbtPublic.js"), it = Object(u.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					closeModal: () => {
						e(Object(He.i)(nt.a.BLADE_NIGHTMODE)), e(Object(tt.f)())
					},
					openBlade: () => {
						e(Object(tt.e)(s))
					}
				}
			});
			var ct = Object(et.a)(it(e => m.a.createElement(st.c, null, m.a.createElement(st.g, null, m.a.createElement(rt.a, null, m.a.createElement(st.n, null, ot._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), m.a.createElement(at.a, {
					onClick: e.closeModal
				}, m.a.createElement(st.b, null)))), m.a.createElement(st.j, null, m.a.createElement(st.l, null, ot._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), m.a.createElement(st.e, null, m.a.createElement(st.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, ot._("Cancel", null, {
					hk: "1f5Zk8"
				})), m.a.createElement(st.o, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, ot._("Continue", null, {
					hk: "413jMZ"
				})))))),
				dt = s("./src/reddit/actions/authorFlair.ts"),
				lt = s("./src/reddit/actions/userFlair.ts"),
				mt = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				ut = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				pt = s("./src/reddit/components/FlairPreview/index.tsx"),
				ht = s("./src/reddit/components/FlairSearch/index.tsx"),
				bt = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				gt = s("./src/reddit/controls/Button/index.tsx"),
				ft = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				Ct = s("./src/reddit/i18n/components.tsx"),
				Pt = s("./src/reddit/i18n/utils.ts"),
				vt = s("./src/reddit/layout/row/Inline/index.tsx"),
				xt = s("./src/reddit/models/Flair/index.ts"),
				yt = s("./src/reddit/models/User/index.ts"),
				Et = s("./src/reddit/selectors/authorFlair.ts"),
				Ot = s("./src/reddit/selectors/moderatorPermissions.ts"),
				wt = s("./src/reddit/selectors/user.ts"),
				jt = s("./src/reddit/selectors/userFlair.ts"),
				St = s("./src/reddit/components/UserFlairPicker/index.m.less"),
				Mt = s.n(St);
			const kt = e => e.inContextAuthor && e.currentUser && Object(yt.f)(e.currentUser) === e.inContextAuthor.username,
				_t = e => e.authorFlair || kt(e) && e.userFlairData.applied || null,
				It = k.a.wrapped(vt.a, "Section", Mt.a),
				Nt = k.a.div("CheckboxText", Mt.a);
			class Tt extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(H.subredditById)(t, this.props.subredditId)
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
						previewFlair: _t(e),
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
					} = e.displaySettings, r = this.state.showFlair !== a, o = _t(this.props);
					if (!n.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(bt.b)(s, t, o);
					return !(i || c !== bt.a.NoChanges || !r) || i
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
					} = s, c = this.canSave(), d = kt(e);
					return m.a.createElement(ut.a, null, m.a.createElement(mt.a, {
						onClosePressed: e.closeModal,
						title: Object(Pt.c)("Select your community flair")
					}), m.a.createElement(pt.a, {
						flair: t.previewFlair,
						flairTemplateType: xt.d.UserFlair,
						placeholderText: Object(Pt.c)("u/username")
					}), r && m.a.createElement(ht.a, {
						flair: t.previewFlair,
						flairTemplateType: xt.d.UserFlair,
						subredditId: n,
						templates: o,
						templateIds: i,
						onChange: this.setSelectedFlair
					}), d && m.a.createElement(It, null, m.a.createElement(ft.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(Nt, null, m.a.createElement(Ct.c, null, "Show my user flair on this community"))
					})), m.a.createElement("div", {
						className: Mt.a.buttonsRow
					}, m.a.createElement(gt.f, {
						disabled: !c,
						onClick: this.onApply
					}, Object(Pt.c)("Apply")), a && m.a.createElement(gt.i, {
						className: Mt.a.clearButton,
						onClick: this.onClear
					}, Object(Pt.c)("Clear Flair"))))
				}
			}
			const Rt = Object(u.b)(() => Object(b.c)({
				authorFlair: Et.b,
				currentUser: wt.i,
				inContextAuthor: Et.c,
				isMod: (e, t) => !!Object(Ot.j)(e, t),
				userFlairData: jt.c
			}), (e, t) => ({
				activeFlairChanged: (s, n, a, r) => e(Object(lt.o)(s, n, a, r.username, t.subredditId)),
				closeModal: () => e(Object(dt.b)({
					username: null,
					subredditId: null
				}))
			}))(Tt);
			var At = Object(et.a)(Object($.c)(Rt)),
				Lt = s("./src/reddit/selectors/activeModalId.ts"),
				Ft = s("./src/reddit/selectors/notificationPrefs.ts"),
				Dt = s("./src/reddit/selectors/platform.ts"),
				Bt = s("./src/reddit/selectors/removalReasons.ts"),
				Ut = s("./src/reddit/selectors/subredditModeration.ts"),
				Ht = s("./src/reddit/constants/cookie.ts"),
				Gt = s("./src/reddit/featureFlags/index.ts"),
				qt = s("./src/reddit/helpers/localStorage/index.ts"),
				Wt = s("./src/reddit/helpers/toggleBodyScroll/index.ts");

			function Vt() {
				return (Vt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Qt = Object(b.c)({
				anyModalIsOpen: e => !!e.activeModalId,
				authorContext: Et.c,
				badgePurchaseModalIsOpen: Object(Lt.b)(nt.a.BADGE_PURCHASE),
				banContext: Ut.f,
				banModalIsOpen: Object(Lt.b)(nt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Lt.b)(nt.a.BLADE_NIGHTMODE),
				chatroomSettingsModalIsOpen: Object(Lt.b)(nt.a.SUBREDDIT_CHAT_SETTINGS),
				createChatroomModalIsOpen: Object(Lt.b)(nt.a.CREATE_SUBREDDIT_CHAT),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				currentPaymentTarget: e => e.economics.currentPaymentTarget,
				currentSubredditPremiumCorrelationId: e => e.economics.currentModalArgs ? e.economics.currentModalArgs.correlationId : void 0,
				economicsSupportPaymentModalIsOpen: Object(Lt.b)(nt.a.ECONOMY_SUPPORT_MODAL),
				editChatroomModalIsOpen: Object(Lt.b)(nt.a.EDIT_SUBREDDIT_CHAT),
				deleteChatroomModalIsOpen: Object(Lt.b)(nt.a.DELETE_SUBREDDIT_CHAT),
				introModalFeatureEnabled: e => Gt.d.introModal(e),
				isOverlayOpen: Dt.h,
				manageChatroomModalIsOpen: Object(Lt.b)(nt.a.MANAGE_SUBREDDIT_CHAT),
				moderatorPermissions: e => {
					const t = Object(Dt.d)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Ut.C,
				muteModalIsOpen: Object(Lt.b)(nt.a.MUTE_USER),
				notificationsPrePromptIsOpen: Ft.c,
				removalReasonContext: Bt.b,
				removalReasonModalIsOpen: Object(Lt.b)(nt.a.ADD_REMOVAL_REASON),
				subredditId: Dt.d,
				subredditPremiumPurchaseModalOpen: Object(Lt.b)(nt.a.SUBREDDIT_PREMIUM_PURCHASE_MODAL),
				userFlairModalIsOpen: Object(Lt.b)(nt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: wt.u,
				userInRedesignBeta: wt.A,
				userIsLoggedIn: wt.G,
				userIsMod: wt.H,
				userIsNew: wt.I
			});
			class zt extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Ue.a)()) return; {
						const e = Be.a.get(Ht.a);
						e && Be.a.remove(Ht.a, {
							domain: _.a.cookieDomain
						});
						const t = Object(qt.r)(nt.a.ALPHA_CONSUMER);
						t && Object(qt.B)(nt.a.ALPHA_CONSUMER), (e || t) && Object(qt.R)(nt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, s = Object(qt.r)(nt.a.REDESIGN_MODAL);
					!e && s ? t() : e && !s && Object(qt.R)(nt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), this.props.anyModalIsOpen ? setTimeout(() => Object(Wt.a)(), 500) : setTimeout(() => Object(Wt.b)(), 500)
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
						removalReasonContext: P,
						removalReasonModalIsOpen: v,
						sendEvent: x,
						subredditId: y,
						subredditPremiumPurchaseModalOpen: E,
						toggleBanModal: O,
						toggleMuteModal: w,
						toggleRemovalReasonsModal: j,
						userFlairModalIsOpen: S
					} = this.props, M = (e, t, s) => n => () => x(a => ({
						source: e,
						action: "click",
						noun: n,
						comment: s && Object(H.comment)(a, s),
						post: s && Object(H.post)(a, s),
						screen: Object(H.screen)(a),
						subreddit: Object(H.subredditById)(a, t)
					}));
					return m.a.createElement(l.Fragment, null, n && s && m.a.createElement(We.a, {
						contextId: s.contextId,
						subredditId: s.subredditId,
						toggleModal: O,
						trackAddEvent: M("banned", s.subredditId, s.contextId)("add_in_context"),
						trackEventWithName: M("banned", s.subredditId, s.contextId),
						username: s.username
					}), f && g && m.a.createElement(Ye.a, {
						contextId: g.contextId,
						subredditId: g.subredditId,
						toggleModal: w,
						trackAddEvent: M("muted", g.subredditId, g.contextId)("add_in_context"),
						username: g.username
					}), (o || b || h || p || r) && y && m.a.createElement(Ke, {
						subredditId: y,
						withOverlay: !0
					}), v && P && m.a.createElement($e, {
						itemIds: P.itemIds,
						subredditId: P.subredditId,
						toggleModal: j,
						trackClick: M("removal_reasons", P.subredditId, 1 === P.itemIds.length ? P.itemIds[0] : void 0)
					}), a && y && m.a.createElement(ct, {
						subredditId: y
					}), S && e && e.subredditId && m.a.createElement(At, {
						subredditId: e.subredditId
					}), t && i && m.a.createElement(qe, {
						withOverlay: !0,
						productId: i
					}), C && m.a.createElement(Je, null), u && c && m.a.createElement(Qe, Vt({
						withOverlay: !0
					}, c)), E && m.a.createElement(Ve, {
						ignoreDefaultFocus: !0,
						withOverlay: !0,
						correlationId: d
					}))
				}
			}
			var Zt = Object(u.b)(Qt, e => ({
				markRedesignModalAsClosed: () => e(Object(He.j)()),
				toggleBanModal: () => e(Object(He.i)(nt.a.BAN_USER)),
				toggleBladeNightmodeModal: () => e(Object(He.i)(nt.a.BLADE_NIGHTMODE)),
				toggleMuteModal: () => e(Object(He.i)(nt.a.MUTE_USER)),
				toggleRemovalReasonsModal: () => e(Object(He.i)(nt.a.ADD_REMOVAL_REASON))
			}))(Object($.c)(zt));
			const Kt = {},
				Yt = () => null;

			function Jt(e, t) {
				if (e in Kt) throw new Error("Modal with id ".concat(e, " already registered!"));
				Kt[e] = t
			}
			var Xt = s("./src/reddit/constants/experiments.ts"),
				$t = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				es = s("./src/reddit/components/AccountManagerModal/index.m.less"),
				ts = s.n(es);
			const ss = k.a.div("Overlay", ts.a),
				ns = k.a.div("IframeContainer", ts.a),
				as = Object(b.c)({
					frontpageSignupVariant: U.a
				}),
				rs = {
					[T.b.ChangePassword]: nt.a.CHANGE_PASSWORD_MODAL_ID,
					[T.b.Index]: nt.a.LOGIN_MODAL_ID,
					[T.b.Register]: nt.a.REGISTER_MODAL_ID,
					[T.b.EnableTwoFactor]: nt.a.ENABLE_TWO_FACTOR,
					[T.b.DisableTwoFactor]: nt.a.DISABLE_TWO_FACTOR,
					[T.b.TwoFactorBackupCodes]: nt.a.TWO_FACTOR_BACKUP_CODES
				};
			class os extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === T.b.Register && Object(U.f)(this.props.frontpageSignupVariant) && $t.a.throttleFeature(Xt.H), this.props.sendEvent(te(this.subscriptions))
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						path: t
					} = this.props, s = Object(U.c)(e) || Object(U.d)(e);
					return m.a.createElement(ss, null, m.a.createElement(ns, {
						className: s && ts.a.small
					}, m.a.createElement(X, {
						onClose: this.closeModal,
						onSubscriptionsChanged: this.updateSubscriptions,
						path: t,
						showCloseButton: !s
					})))
				}
			}
			const is = Object(u.b)(as, (e, t) => ({
				closeModal: t => {
					e(Object(He.g)(rs[t]))
				}
			}))(Object($.c)(os));
			Jt(nt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(is, {
				path: T.b.ChangePassword
			})), Jt(nt.a.LOGIN_MODAL_ID, e => m.a.createElement(is, {
				path: T.b.Index
			})), Jt(nt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(is, {
				path: T.b.EnableTwoFactor
			})), Jt(nt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(is, {
				path: T.b.DisableTwoFactor
			})), Jt(nt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(is, {
				path: T.b.TwoFactorBackupCodes
			})), Jt(nt.a.REGISTER_MODAL_ID, e => m.a.createElement(is, {
				path: T.b.Register
			}));
			const cs = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("BadgePickerModal").then(s.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.BADGE_PICKER, e => m.a.createElement(cs, {
				withOverlay: !0
			}));
			const ds = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestPendingModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(ds, {
				withOverlay: !0
			}));
			const ls = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestRequestModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(ls, {
				withOverlay: !0
			}));
			const ms = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~EconHelperActions~SubredditPremiumBadgeManagement"), s.e("SubredditPremiumBadgeManagement")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(ms, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const us = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("SubredditPremiumUploadModal")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(us, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ps = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("HarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(ps, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const hs = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("HarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(hs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const bs = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("CryptoHarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(bs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const gs = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("CryptoHarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(gs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const fs = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceOptOutModal").then(s.bind(null, "./src/reddit/components/Governance/OptOutModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.GOVERNANCE_OPT_OUT, e => m.a.createElement(fs, null));
			const Cs = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~GovernanceReleaseNotesModal"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("GovernanceReleaseNotesModal")]).then(s.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(Cs, {
				withOverlay: !0
			}));
			const Ps = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("GovernanceTransferPointsModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.TRANSFER_POINTS, e => m.a.createElement(Ps, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const vs = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(vs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const xs = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ModToMemberShareModal").then(s.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(xs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ys = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditAddSubredditModal").then(s.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(ys, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Es = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditCreateModal").then(s.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.MULTIREDDIT_CREATE, e => m.a.createElement(Es, {
				onOverlayClick: e,
				withOverlay: !0
			})), Jt(nt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(Es, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Os = Object(Ge.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditEditModal").then(s.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Jt(nt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Os, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ws = Object(Ge.a)({
				getComponent: () => Object(ze.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("PainterModalLoader")]).then(s.bind(null, "./src/reddit/components/PainterModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			Jt(nt.a.PAINTER_MODAL, e => m.a.createElement(ws, {
				withOverlay: !0,
				toggleModal: e
			}));
			const js = () => null,
				Ss = Object(Ge.a)({
					ErrorComponent: js,
					getComponent: () => Object(ze.a)(() => s.e("GlobalModalContainer").then(s.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: js
				});
			Jt(nt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Ss, null));
			var Ms = s("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				ks = s.n(Ms);
			const {
				fbt: _s
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Is = k.a.h2("ColumnLabel", ks.a), Ns = k.a.wrapped(vt.a, "ColumnWrapper", ks.a), Ts = k.a.div("Column", ks.a), Rs = k.a.div("Description", ks.a), As = k.a.div("Key", ks.a), Ls = k.a.wrapped(st.j, "ModalMain", ks.a), Fs = k.a.wrapped(st.c, "ModalBody", ks.a), Ds = k.a.wrapped(gt.f, "PrimaryButton", ks.a), Bs = k.a.wrapped(at.a, "TextButton", ks.a), Us = Object(u.b)(null, e => ({
				closeModal: () => e(Object(He.i)(nt.a.KEYBOARD_SHORTCUTS))
			})), Hs = k.a.wrapped(Object(et.a)(Us(e => m.a.createElement(Fs, {
				onClick: e => e.stopPropagation()
			}, m.a.createElement(st.g, null, m.a.createElement(rt.a, null, m.a.createElement(st.n, null, _s._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), m.a.createElement(Bs, {
				onClick: e.closeModal
			}, m.a.createElement(st.b, null)))), m.a.createElement(Ls, null, m.a.createElement(Ns, null, m.a.createElement(Ts, null, m.a.createElement(vt.a, null, m.a.createElement(Is, null, _s._("Navigation", null, {
				hk: "3zSWEe"
			}))), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), m.a.createElement(As, null, "Shift + ?")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Next post or comment", null, {
				hk: "1m8s9z"
			})), m.a.createElement(As, null, "J")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), m.a.createElement(As, null, "K")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), m.a.createElement(As, null, "N")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), m.a.createElement(As, null, "P")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Open post", null, {
				hk: "2wD7mh"
			})), m.a.createElement(As, null, "Enter")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Open/close expando", null, {
				hk: "1yDst0"
			})), m.a.createElement(As, null, "X")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Go to post link", null, {
				hk: "c0TNr"
			})), m.a.createElement(As, null, "L"))), m.a.createElement(Ts, null, m.a.createElement(vt.a, null, m.a.createElement(Is, null, _s._("Action", null, {
				hk: "3QI6pT"
			}))), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Upvote", null, {
				hk: "5i9NP"
			})), m.a.createElement(As, null, "A")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Downvote", null, {
				hk: "1ef3YP"
			})), m.a.createElement(As, null, "Z")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("New post", null, {
				hk: "4dtNWf"
			})), m.a.createElement(As, null, "C")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Reply to comment", null, {
				hk: "G8AbT"
			})), m.a.createElement(As, null, "R")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Submit comment/post", null, {
				hk: "13agk7"
			})), m.a.createElement(As, null, "Ctrl + Enter")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Save", null, {
				hk: "3Dtwo5"
			})), m.a.createElement(As, null, "S")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Hide", null, {
				hk: "2Dn9GF"
			})), m.a.createElement(As, null, "H")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Open navigation", null, {
				hk: "QdGe2"
			})), m.a.createElement(As, null, "Q")), m.a.createElement(vt.a, null, m.a.createElement(Rs, null, _s._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), m.a.createElement(As, null, "Enter"))))), m.a.createElement(st.e, null, m.a.createElement(Ds, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, _s._("Close", null, {
				hk: "2R1HDp"
			})))))), "ConnectedModal", ks.a);
			Jt(nt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Hs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Gs = Object(Ge.a)({
				getComponent: () => Object(ze.a)(() => s.e("SpezModalLoader").then(s.bind(null, "./src/reddit/components/SpezModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			Jt(nt.a.SPEZ_MODAL, e => m.a.createElement(Gs, {
				withOverlay: !0,
				toggleModal: e
			}));
			const qs = Object(b.c)({
					allowNavigationCallback: Dt.a
				}),
				Ws = Object(u.b)(qs, e => ({
					closeModal: () => e(Object(He.i)(nt.a.BLADE_UNSAVED_CHANGES)),
					closeBlade: () => e(Object(tt.a)())
				}));
			class Vs extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(st.c, null, m.a.createElement(st.g, null, m.a.createElement(rt.a, null, m.a.createElement(st.n, null, m.a.createElement(Ct.c, null, "Discard unsaved changes before leaving?")), m.a.createElement(at.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(st.b, null)))), m.a.createElement(st.j, null, m.a.createElement(st.m, null, m.a.createElement(Ct.c, null, "You have made some changes to your community, do you wish to leave this menu without saving?"))), m.a.createElement(st.e, null, m.a.createElement(st.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, m.a.createElement(Ct.c, null, "Cancel")), m.a.createElement(st.o, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, m.a.createElement(Ct.c, null, "Discard"))))
				}
			}
			const Qs = Object(et.a)(Ws(Vs));
			Jt(nt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Qs, {
				withOverlay: !0
			}));
			const zs = Object(b.c)({
					activeModalId: Lt.a
				}),
				Zs = Object(u.b)(zs, e => ({
					toggleModal: t => e(Object(He.i)(t))
				})),
				Ks = 500,
				Ys = () => {};
			class Js extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					this.props.activeModalId ? setTimeout(() => Object(Wt.a)(), Ks) : setTimeout(() => Object(Wt.b)(), Ks)
				}
				componentWillUnmount() {
					Object(Wt.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					var t;
					return ((t = e) && t in Kt ? Kt[t] : Yt)(e ? this.toggleModal : Ys)
				}
			}
			var Xs = Zs(Js),
				$s = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				en = s("./src/reddit/actions/page.ts"),
				tn = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx")),
				sn = s("./src/reddit/components/ProfileIcon/index.m.less"),
				nn = s.n(sn);

			function an(e) {
				return m.a.createElement("img", {
					alt: Object(Pt.c)("Profile icon"),
					src: e.iconUrl || "".concat(_.a.assetPath, "/img/placeholder_gradient_light-280.png"),
					className: Object(g.a)(nn.a.img, e.className)
				})
			}
			var rn = s("./src/reddit/components/SEOTitle/index.tsx"),
				on = s("./src/reddit/components/SubredditIcon/index.tsx"),
				cn = s("./src/reddit/icons/svgs/All/index.tsx");

			function dn(e) {
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
			var ln = s("./src/reddit/icons/svgs/Coin/index.tsx"),
				mn = s("./src/reddit/icons/svgs/Envelope/index.tsx"),
				un = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				pn = s("./src/reddit/constants/colors.ts"),
				hn = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				},
				bn = Object(C.a)(e => {
					var {
						className: t,
						isBadged: s
					} = e, n = hn(e, ["className", "isBadged"]);
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
						fill: s ? Object(ne.a)(n).body : "none"
					}), m.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "3",
						fill: s ? pn.a.orangered : "none"
					}))
				}),
				gn = s("./src/reddit/icons/svgs/Moderate/index.tsx");

			function fn() {
				return (fn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Cn, Pn = e => m.a.createElement("svg", fn({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), m.a.createElement("path", {
					d: "M17,5H6A1,1,0,0,0,5,6V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V6A1,1,0,0,0,17,5ZM7,7.5A.5.5,0,0,1,7.5,7h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM15.5,16h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5H13a.5.5,0,0,1,0-1h2.5a.5.5,0,0,1,0,1Z"
				}), m.a.createElement("path", {
					d: "M6,4h9.47a2.09,2.09,0,0,1,.51.07V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H4.09A2.09,2.09,0,0,1,4,15.49V6A2,2,0,0,1,6,4Z"
				})),
				vn = e => {
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
				xn = s("./src/reddit/icons/svgs/Post/index.tsx"),
				yn = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				En = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				On = s("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				wn = s.n(On);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModMailBeta = "ModMailBeta", e.ModQueue = "ModQueue", e.Multi = "Multi", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Cn || (Cn = {}));
			const jn = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [s, n] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, s && "".concat(s, "/"), n && m.a.createElement(rn.b, {
					type: rn.a.HeaderSelector
				}, n))
			};
			var Sn = s("./src/lib/objectSelector/index.ts"),
				Mn = s("./src/reddit/constants/wiki.ts"),
				kn = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_n = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				In = s("./src/reddit/selectors/subreddit.ts"),
				Nn = s("./src/reddit/selectors/topic.ts");
			var Tn = Object(Sn.a)((e, t) => {
					let {
						pageLayer: s
					} = t;
					const n = !!e.user.account,
						a = Object(kn.T)(s);
					switch (a) {
						case "index":
						case "listing":
							return n ? {
								type: Cn.Home
							} : {
								type: Cn.Popular
							};
						case "modListing":
							return {
								type: Cn.ModListing
							};
						case "modQueuePages":
							return {
								type: Cn.ModQueue
							};
						case "postCreation":
							return {
								type: Cn.CreatePost
							};
						case "postDraft":
							return {
								type: Cn.ViewDraft
							};
						case "subredditCreation":
							return {
								type: Cn.SubredditCreation
							};
						case "coins":
							return {
								type: Cn.Coins
							};
						case "premium":
							return {
								type: Cn.Premium
							};
						case "acknowledgements":
							return {
								type: Cn.Acknowledgements
							};
						case "appeal":
							return {
								type: Cn.Appeal
							};
						case "report":
							return {
								type: Cn.Report
							};
						case "userDataRequest":
							return {
								type: Cn.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: Cn.DailyCharts
							};
						case "topic": {
							const t = Object(kn.s)(s),
								n = t && Object(Nn.c)(e, t, !0);
							if (n) return {
								type: Cn.Topic,
								model: n
							}
						}
					}
					const r = e.user.account;
					if (r) switch (a) {
						case "inboxPages":
							return {
								type: Cn.Inbox, model: r
							};
						case "settings":
							return {
								type: Cn.Settings, model: r
							}
					}
					const o = Object(kn.N)(e, {
						pageLayer: s
					});
					if ("all" === o) return {
						type: Cn.All
					};
					if ("popular" === o) return {
						type: Cn.Popular
					};
					const i = Object(kn.q)(e, {
						pageLayer: s
					});
					if (i) return "searchResults" === a ? {
						type: Cn.CommunitySearch,
						model: i
					} : {
						type: Cn.Community,
						model: i
					};
					const c = Object(kn.d)(e, {
						pageLayer: s
					});
					if (c) return {
						type: Cn.Multi,
						model: c
					};
					const d = Object(kn.j)(e, {
						pageLayer: s
					});
					if (d) return {
						type: Cn.UserProfile,
						model: d
					};
					const l = Object(kn.h)(s);
					if (l) return {
						type: Cn.UserProfileName,
						name: "u/".concat(l)
					};
					if (a && "searchResults" === a) return {
						type: Cn.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(kn.n)(e, {
								pageLayer: s
							}) || Mn.e,
							n = Object(In.y)(e, {
								subredditName: t
							});
						if (n) return {
							type: Cn.Community,
							model: n
						}
					}
					return "rpan" === a && Object(_n.a)(e) ? {
						type: Cn.PublicAccessNetwork
					} : {
						type: Cn.Unknown
					}
				}),
				Rn = (s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				An = s.n(Rn);

			function Ln() {
				return (Ln = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function Fn(e) {
				const t = e.icon,
					s = e.text,
					n = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: An.a.icon
						}), m.a.createElement(s, {
							className: An.a.text
						})),
						className: Object(g.a)(An.a.item, e.className, {
							[An.a.mFocused]: !!e.isFocused,
							[An.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return n["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Ln({}, n, {
					href: e.to,
					target: "_blank"
				})) : m.a.createElement($s.a, Ln({}, n, {
					to: e.to
				})) : m.a.createElement("button", n)
			}
			var Dn = s("./src/reddit/helpers/overlay/index.ts"),
				Bn = s("./src/reddit/routes/modListing/index.ts"),
				Un = s("./src/reddit/selectors/multireddit.ts"),
				Hn = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				Gn = s("./src/lib/LinkedListMap/index.ts");
			const qn = Object(b.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Un.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Un.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var Wn;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Wn || (Wn = {}));
			const Vn = [e => ({
					id: Cn.Employee,
					type: Wn.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(bn, {
								className: Object(g.a)(t, wn.a.itemIcon)
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
				Qn = [e => ({
					id: Cn.All,
					type: Wn.GenericLink,
					model: {
						url: "/r/all/",
						displayText: n.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(cn.a, {
								className: Object(g.a)(t, wn.a.itemIcon)
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
					id: Cn.DailyCharts,
					type: Wn.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: n.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(un.a, {
								className: Object(g.a)(t, wn.a.itemIcon)
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
				zn = [e => ({
					id: "reddit-feeds",
					type: Wn.Header,
					model: {
						displayText: n.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), (e, t) => ({
					id: Cn.Home,
					type: Wn.GenericLink,
					model: {
						url: "/",
						displayText: n.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => {
							let {
								className: s
							} = e;
							return m.a.createElement(bn, {
								className: Object(g.a)(s, wn.a.itemIcon),
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
					id: Cn.Popular,
					type: Wn.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: n.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(vn, {
								className: Object(g.a)(t, wn.a.itemIcon)
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
				}), ...Qn],
				Zn = [e => ({
					id: "reddit-feeds",
					type: Wn.Header,
					model: {
						displayText: n.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: Cn.Home,
					type: Wn.GenericLink,
					model: {
						url: "/",
						displayText: n.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(vn, {
								className: Object(g.a)(t, wn.a.itemIcon)
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
				}), ...Qn],
				Kn = [e => ({
					id: "reddit-other",
					type: Wn.Header,
					model: {
						displayText: n.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Cn.Settings,
					type: Wn.GenericLink,
					model: {
						url: "/settings",
						displayText: n.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon: t => {
							let {
								className: s
							} = t;
							return m.a.createElement(an, {
								className: s,
								iconUrl: e.accountIcon
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
					id: Cn.Inbox,
					type: Wn.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: n.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon: t => {
							let {
								className: s
							} = t;
							return m.a.createElement(an, {
								className: s,
								iconUrl: e.accountIcon
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
					id: Cn.CreatePost,
					type: Wn.GenericLink,
					model: {
						url: "/submit",
						displayText: n.fbt._("Create Post", null, {
							hk: "dGck6"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(xn.a, {
								className: Object(g.a)(t, wn.a.itemIcon)
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
				Yn = [e => ({
					id: Cn.Coins,
					type: Wn.GenericLink,
					model: {
						url: "/coins",
						displayText: n.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(ln.a, {
								className: Object(g.a)(t, wn.a.itemCoin)
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
					id: Cn.Premium,
					type: Wn.GenericLink,
					model: {
						url: "/premium",
						displayText: n.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(yn.a, {
								className: Object(g.a)(t, wn.a.itemPremium)
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
				Jn = [e => ({
					id: Cn.ModQueue,
					type: Wn.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: n.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(gn.a, {
								className: Object(g.a)(t, wn.a.itemModQueue)
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
					id: Cn.ModMailBeta,
					type: Wn.GenericLink,
					model: {
						url: "https://mod.reddit.com/mail/all",
						displayText: n.fbt._("Modmail Beta", null, {
							hk: "2CtXgY"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(mn.a, {
								className: Object(g.a)(t, wn.a.itemModQueue)
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
					id: Cn.ModMail,
					type: Wn.GenericLink,
					model: {
						url: "/message/moderator",
						displayText: n.fbt._("Modmail", null, {
							hk: "1gjb1m"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(mn.a, {
								className: Object(g.a)(t, wn.a.itemModQueue)
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

			function Xn(e, t) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Wn.Header,
					model: {
						displayText: n.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Wn.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Wn.Header,
					model: {
						displayText: n.fbt._("profiles", null, {
							hk: "bmbRq"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Wn.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var $n = s("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				ea = s.n($n);

			function ta(e) {
				return m.a.createElement("div", {
					className: Object(g.a)(ea.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var sa = s("./src/reddit/actions/subscription/index.ts"),
				na = s("./src/reddit/helpers/trackers/customFeeds.ts"),
				aa = e => {
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
				ra = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				oa = s.n(ra);

			function ia() {
				return (ia = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ca = Object(b.c)({
					currentUser: wt.i,
					hideNSFWPref: wt.y,
					isLoggedIn: wt.G
				}),
				da = Object(u.b)(ca, (e, t) => ({
					toggleFavorite: s => {
						switch (s.stopPropagation(), s.preventDefault(), t.type) {
							case Wn.Subreddit:
								e(Object(sa.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Wn.Profile:
								e(Object(sa.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Wn.Multi:
								e(Object(sa.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(na.f)(t.model.url)) : t.sendEvent(Object(na.c)(t.model.url))
						}
					}
				}));
			var la = Object($.c)(da((function(e) {
					const t = {
						className: Object(g.a)(oa.a.item, e.className, {
							[oa.a.mFocused]: !!e.isFocused
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
						case Wn.Subreddit:
							return m.a.createElement($s.a, ia({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(on.b, {
								className: oa.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: oa.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(aa, {
								className: Object(g.a)(oa.a.favorite, {
									[oa.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Wn.SubredditAutocomplete:
							return m.a.createElement($s.a, ia({}, t, {
								"aria-label": e.model.name,
								to: "/r/".concat(e.model.name, "/")
							}), m.a.createElement(on.b, {
								className: oa.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: oa.a.text
							}, e.model.name));
						case Wn.Multi:
							return m.a.createElement($s.a, ia({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: oa.a.customFeedIcon
							}), m.a.createElement("span", {
								className: oa.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(aa, {
								className: Object(g.a)(oa.a.favorite, {
									[oa.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Wn.Profile:
							return m.a.createElement($s.a, ia({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(an, {
								className: oa.a.icon,
								iconUrl: e.hideNSFWPref ? "".concat(_.a.assetPath, "/img/avatar_over18_square.png") : e.model.icon.url
							}), m.a.createElement("span", {
								className: oa.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(aa, {
								className: Object(g.a)(oa.a.favorite, {
									[oa.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				ma = s("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				ua = s.n(ma);

			function pa(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: ua.a.header
				}), m.a.createElement("div", {
					className: ua.a.item
				}), m.a.createElement("div", {
					className: ua.a.item
				}), m.a.createElement("div", {
					className: ua.a.item
				}), m.a.createElement("div", {
					className: ua.a.item
				}))
			}
			var ha = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				ba = s("./src/reddit/actions/multireddit/index.ts"),
				ga = s("./src/reddit/actions/subreddit.ts"),
				fa = s("./src/reddit/constants/keycodes.ts"),
				Ca = s("./src/reddit/helpers/trackers/coins.ts"),
				Pa = s("./src/reddit/helpers/trackers/premium.ts"),
				va = s("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				xa = s.n(va);

			function ya() {
				return (ya = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function Ea(e) {
				return e.id === Cn.ModMail || (e.id === Cn.ModMailBeta || e.id === Cn.CreateCommunity)
			}

			function Oa(e) {
				const t = new Gn.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Wn.Header && e.type !== Wn.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const wa = Object(b.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const s = qn(e),
							a = new Gn.a("id");
						if (s.account) {
							const r = s.account;
							zn.forEach(e => a.push(e(r))), r.isEmployee && Vn.forEach(e => a.push(e(r))), Object(_n.a)(e) && a.push({
								id: Cn.PublicAccessNetwork,
								type: Wn.GenericClickable,
								model: {
									onClick: () => {
										t(Object(Dn.a)(A.c[A.b.Rpan]))
									},
									displayText: n.fbt._("Reddit Public Access Network", null, {
										hk: "3p4s8f"
									}).toString(),
									icon: e => {
										let {
											className: t
										} = e;
										return m.a.createElement(En.a, {
											className: Object(g.a)(t, wn.a.itemPublicAccessNetwork)
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
								type: Wn.Header,
								model: {
									displayText: n.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), s.favoriteSubreddits.forEach(e => a.push({
								id: "fav" + e.id,
								type: Wn.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteProfiles.forEach(e => a.push({
								id: "fav" + e.id,
								type: Wn.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteMultireddits.forEach(e => a.push({
								id: "fav" + e.url,
								type: Wn.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.multisPending ? a.push({
								id: "multis-pending",
								type: Wn.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.multis.length > 0 && (a.push({
								id: "header-multis",
								type: Wn.Header,
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
												t(Object(He.i)(nt.a.MULTIREDDIT_CREATE)), n()
											},
											className: Object(g.a)(s, wn.a.multiPlusButton)
										}, m.a.createElement(Hn.a, {
											className: wn.a.multiPlusIcon
										}))
									},
									buttonTelemetryNoun: "create_new_custom_feed"
								}
							}), s.multis.forEach(e => a.push({
								id: e.url,
								type: Wn.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.moderatingSubredditsPending ? a.push({
								id: "moderatingSubreddits-pending",
								type: Wn.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.moderatingSubreddits.length && (a.push({
								id: "header-moderating",
								type: Wn.Header,
								model: {
									displayText: n.fbt._("moderating subreddits", null, {
										hk: "2z4AZS"
									}).toString()
								}
							}), a.push({
								id: Cn.ModListing,
								type: Wn.GenericLink,
								model: {
									url: Bn.a,
									displayText: "r/Mod",
									icon: e => {
										let {
											className: t
										} = e;
										return m.a.createElement(gn.a, {
											className: Object(g.a)(t, wn.a.itemModQueue)
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
								type: Wn.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), s.subscriptionsPending ? a.push({
								id: "subscriptions-pending",
								type: Wn.LoadingState,
								model: {
									displayText: ""
								}
							}) : Xn(a, s), Kn.forEach(e => a.push(e(r))), Object(wt.Y)(e) && a.push({
								id: Cn.CreateCommunity,
								type: Wn.GenericLink,
								model: {
									url: "https://www.reddit.com/subreddits/create",
									displayText: n.fbt._("Create Community", null, {
										hk: "41sjx"
									}).toString(),
									icon: e => {
										let {
											className: t
										} = e;
										return m.a.createElement(xn.a, {
											className: Object(g.a)(t, wn.a.itemIcon)
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
							}), Yn.forEach(e => a.push(e(r))), r.isMod && Jn.forEach(e => a.push(e(r)))
						} else s.subscriptions.length || Object(wt.G)(e) ? zn.forEach(e => a.push(e(null))) : Zn.forEach(e => a.push(e(null))), a.push({
							id: "reddit-other",
							type: Wn.Header,
							model: {
								displayText: n.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), Yn.forEach(e => a.push(e(null))), Xn(a, s);
						return a
					}
				}),
				ja = e => ({
					onHomeClicked: () => e(Object(en.x)()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(sa.e)()), e(Object(ga.q)()), e(Object(ba.g)())
					},
					onActionDispatched: t => e(t)
				}),
				Sa = (e, t, s) => Object.assign({}, e, t, s, {
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Ma extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							s = this.getList(t, this.props),
							n = Oa(s),
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
						if (e.key === fa.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === fa.b.Tab && this.props.onClose && this.props.onClose(), e.key === fa.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Wn.Header && e.type !== Wn.LoadingState && (this.fireTelemetryForListItem(e), e.type === Wn.GenericClickable ? e.model.onClick() : Ea(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === fa.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === fa.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case Cn.Coins:
								Ca.f(), t = Ca.e();
								break;
							case Cn.Premium:
								Pa.g(), t = Pa.f()
						}
						switch (e.type) {
							case Wn.Category:
							case Wn.GenericLink:
							case Wn.GenericClickable:
							case Wn.Multi:
							case Wn.Profile:
							case Wn.Subreddit:
								this.props.sendEvent(s => Object.assign({}, Object(H.defaults)(s), t ? {
									correlationId: t
								} : null, {
									customFeed: e.type === Wn.Multi ? Object(H.customFeedByPath)(s, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Wn.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => Object.assign({}, Object(H.defaults)(e), {
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
						focusOrder: Oa(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						s = this.getList(t, e),
						n = Oa(s);
					this.setState({
						focusOrder: n,
						renderableList: s
					})
				}
				getList(e, t) {
					if (e) {
						const s = new Gn.a("id"),
							n = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Wn.Category:
								case Wn.GenericLink:
								case Wn.Multi:
								case Wn.Profile:
								case Wn.Subreddit:
									e.model.displayText.match(n) && s.push(e);
									break;
								case Wn.Header: {
									const t = s.last();
									t && t.type === Wn.Header && s.pop(), s.push(e);
									break
								}
								case Wn.LoadingState:
							}
						});
						const a = s.last();
						return a && a.type === Wn.Header && s.pop(), s
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
						className: xa.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Cn.Home && this.props.onHomeClicked(), e.type === Wn.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case Wn.GenericClickable:
								return m.a.createElement(Fn, ya({}, s, {
									className: xa.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Wn.Category:
							case Wn.GenericLink:
								return m.a.createElement(Fn, ya({}, s, {
									externalLink: Ea(e),
									className: xa.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Wn.Header: {
								const s = e.model.button;
								return m.a.createElement(ta, {
									className: xa.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								}, e.model.displayText, s && m.a.createElement(s, {
									className: xa.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Wn.LoadingState:
								return m.a.createElement(pa, {
									className: xa.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								});
							case Wn.Multi:
								return m.a.createElement(la, ya({}, s, {
									className: xa.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Wn.Multi
								}));
							case Wn.Profile:
								return m.a.createElement(la, ya({}, s, {
									className: xa.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Wn.Profile
								}));
							case Wn.Subreddit:
								return m.a.createElement(la, ya({}, s, {
									className: xa.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Wn.Subreddit
								}))
						}
					}))
				}
			}
			const ka = Object(u.b)(wa, ja, Sa)(Object($.c)(Ma)),
				_a = Object(u.b)(wa, ja, Sa)(Object($.c)(Object(ha.b)(Ma)));
			var Ia = s("./src/reddit/actions/shortcuts.ts"),
				Na = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Ta = e => m.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, m.a.createElement("path", {
					d: "M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z"
				}), m.a.createElement("path", {
					d: "M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z"
				}));
			var Ra = s("./src/reddit/selectors/userPrefs.ts");
			const Aa = Object(kn.t)({
					isCommentsPage: kn.w,
					pageLayer: e => e
				}),
				La = Object(b.c)({
					currentPage: Tn,
					hideNSFWPref: wt.y,
					isDropdownOpen: e => e.header.isSubscriptionsDropdownOpen,
					isLoggedIn: wt.G,
					isOverlayOpen: Dt.h,
					isPinnedSubscriptionsMenuDisabled: Ra.a,
					isSubscriptionsPinned: Ra.b
				});
			class Fa extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Ia.r)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => Object.assign({}, Object(H.defaults)(e), {
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
						"aria-label": Object(Pt.c)("Start typing to filter your communities or use up and down to select."),
						className: Object(g.a)(wn.a.container, t, {
							[wn.a.mOpen]: i,
							[wn.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[wn.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, m.a.createElement("button", {
						className: wn.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, m.a.createElement("span", {
						className: wn.a.containerText
					}, function(e) {
						switch (e.type) {
							case Cn.Acknowledgements:
								return jn(n.fbt._("Acknowledgements", null, {
									hk: "32JBVF"
								}).toString());
							case Cn.All:
								return jn(n.fbt._("All", null, {
									hk: "2gaHOy"
								}).toString());
							case Cn.Appeal:
								return jn(n.fbt._("Appeal", null, {
									hk: "2dMFkN"
								}).toString());
							case Cn.Coins:
								return jn(n.fbt._("Coins", null, {
									hk: "3ZpUbG"
								}).toString());
							case Cn.Community:
								return jn(e.model.displayText, !0);
							case Cn.CommunitySearch:
								return jn(n.fbt._("Subreddit Results", null, {
									hk: "19qRVH"
								}).toString());
							case Cn.CreateCommunity:
								return jn(n.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case Cn.CreatePost:
								return jn(n.fbt._("Create Post", null, {
									hk: "30V40V"
								}).toString());
							case Cn.DailyCharts:
								return jn(n.fbt._("Top Communities", null, {
									hk: "1sWIEu"
								}).toString());
							case Cn.GlobalSearch:
								return jn(n.fbt._("Search Results", null, {
									hk: "scJwR"
								}).toString());
							case Cn.Home:
								return jn(n.fbt._("Home", null, {
									hk: "amHQd"
								}).toString());
							case Cn.Inbox:
								return jn(n.fbt._("Messages", null, {
									hk: "25MBSp"
								}).toString());
							case Cn.ModListing:
								return jn("r/Mod");
							case Cn.ModMail:
								return jn(n.fbt._("Modmail", null, {
									hk: "of9AC"
								}).toString());
							case Cn.ModMailBeta:
								return jn(n.fbt._("Modmail Beta", null, {
									hk: "2zsXji"
								}).toString());
							case Cn.ModQueue:
								return jn(n.fbt._("Mod Queue", null, {
									hk: "3hdHhb"
								}).toString());
							case Cn.Multi:
								return jn(e.model.displayText, !0);
							case Cn.Popular:
								return jn(n.fbt._("Popular", null, {
									hk: "1rTNHl"
								}).toString());
							case Cn.Premium:
								return jn(n.fbt._("Premium", null, {
									hk: "x0xKv"
								}).toString());
							case Cn.PublicAccessNetwork:
								return jn(n.fbt._("Reddit Public Access Network", null, {
									hk: "3agn8V"
								}).toString());
							case Cn.Report:
								return jn(n.fbt._("Report", null, {
									hk: "1PLTqR"
								}).toString());
							case Cn.Settings:
								return jn(n.fbt._("User Settings", null, {
									hk: "hcLHW"
								}).toString());
							case Cn.SubredditCreation:
								return jn(n.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case Cn.Topic:
								return jn(e.model);
							case Cn.Unknown:
								return jn("");
							case Cn.UserDataRequest:
								return jn(n.fbt._("Request your Reddit data", null, {
									hk: "3LqHku"
								}).toString());
							case Cn.UserProfile:
								return jn(e.model.displayText, !0);
							case Cn.UserProfileName:
								return jn(e.name, !0);
							case Cn.ViewDraft:
								return jn(n.fbt._("View Draft", null, {
									hk: "3k2k9a"
								}).toString())
						}
					}(e)), function(e, t) {
						switch (e.type) {
							case Cn.Acknowledgements:
								return m.a.createElement(xn.a, {
									className: wn.a.defaultIcon
								});
							case Cn.All:
								return m.a.createElement(cn.a, {
									className: wn.a.defaultIcon
								});
							case Cn.Appeal:
								return m.a.createElement(xn.a, {
									className: wn.a.defaultIcon
								});
							case Cn.Coins:
								return m.a.createElement(ln.a, {
									className: wn.a.coinIcon
								});
							case Cn.Community:
							case Cn.CommunitySearch: {
								const s = Object(tn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return m.a.createElement(on.b, {
									className: wn.a.subredditIcon,
									iconUrl: s.url,
									primaryColor: s.color
								})
							}
							case Cn.CreateCommunity:
							case Cn.CreatePost:
								return m.a.createElement(xn.a, {
									className: wn.a.defaultIcon
								});
							case Cn.DailyCharts:
								return m.a.createElement(un.a, {
									className: wn.a.defaultIcon
								});
							case Cn.GlobalSearch:
								return m.a.createElement(dn, {
									className: wn.a.defaultIcon
								});
							case Cn.Home:
								return m.a.createElement(bn, {
									className: wn.a.defaultIcon
								});
							case Cn.Inbox:
							case Cn.Settings:
								return m.a.createElement(an, {
									className: wn.a.icon,
									iconUrl: e.model.accountIcon
								});
							case Cn.ModListing:
								return m.a.createElement(gn.a, {
									className: wn.a.modQueueIcon
								});
							case Cn.SubredditCreation:
								return m.a.createElement(xn.a, {
									className: wn.a.defaultIcon
								});
							case Cn.ModMail:
							case Cn.ModMailBeta:
								return m.a.createElement(mn.a, {
									className: wn.a.modQueueIcon
								});
							case Cn.ModQueue:
								return m.a.createElement(gn.a, {
									className: wn.a.modQueueIcon
								});
							case Cn.Multi:
								return m.a.createElement("img", {
									src: e.model.icon,
									className: wn.a.customFeedIcon
								});
							case Cn.Popular:
								return m.a.createElement(vn, {
									className: wn.a.defaultIcon
								});
							case Cn.Premium:
								return m.a.createElement(yn.a, {
									className: wn.a.premiumIcon
								});
							case Cn.PublicAccessNetwork:
								return m.a.createElement(En.a, {
									className: wn.a.publicAccessNetworkIcon
								});
							case Cn.Report:
								return m.a.createElement(xn.a, {
									className: wn.a.defaultIcon
								});
							case Cn.Unknown:
								return m.a.createElement("div", {
									className: wn.a.unknownIcon
								});
							case Cn.UserDataRequest:
								return m.a.createElement(xn.a, {
									className: wn.a.defaultIcon
								});
							case Cn.UserProfile: {
								const s = Object(tn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return m.a.createElement(an, {
									className: wn.a.icon,
									iconUrl: s.url
								})
							}
							case Cn.UserProfileName:
								return m.a.createElement("div", {
									className: wn.a.defaultIcon
								});
							case Cn.ViewDraft:
								return m.a.createElement(xn.a, {
									className: wn.a.defaultIcon
								});
							case Cn.Topic:
								return m.a.createElement(Pn, {
									className: wn.a.defaultIcon
								})
						}
					}(e, s), !this.props.isSubscriptionsPinned && m.a.createElement(Na.b, {
						className: wn.a.caretDown
					})), i && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(Ta, {
						className: Object(g.a)(wn.a.pin, {
							[wn.a.disabled]: c
						}),
						onClick: c ? void 0 : this.props.onPinSubscriptions
					}), i && m.a.createElement(_a, {
						canAutofocus: !0,
						className: wn.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var Da = Aa(Object(u.b)(La, (e, t) => ({
					closeDropdown: () => e(Object(O.f)()),
					onLocationRefresh: (s, n) => e(Object(en.F)(s, t.pageLayer, n)),
					onPinSubscriptions: () => {
						e(Object(O.i)()), e(Object(O.f)())
					},
					openDropdown: () => e(Object(O.g)()),
					toggleDropdown: () => e(Object(O.h)())
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onLocationClick: s => t.onLocationRefresh(s, e.isOverlayOpen)
				}))(Object($.c)(Fa))),
				Ba = s("./src/reddit/components/JumpToContent/index.tsx"),
				Ua = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Ha = s("./node_modules/history/esm/history.js"),
				Ga = s("./node_modules/lodash/debounce.js"),
				qa = s.n(Ga),
				Wa = s("./node_modules/uuid/v4.js"),
				Va = s.n(Wa),
				Qa = s("./src/lib/makeSearchKey/index.ts"),
				za = s("./src/reddit/actions/post.ts"),
				Za = s("./src/reddit/actions/search.ts"),
				Ka = s("./src/reddit/actions/search/trending.ts"),
				Ya = s("./src/reddit/actions/tooltip.ts"),
				Ja = s("./src/higherOrderComponents/asTooltip.tsx"),
				Xa = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				$a = s("./src/lib/search/index.ts"),
				er = s("./src/reddit/models/Search/index.ts");
			var tr = (e, t, s, n, a, r) => {
					let o, i;
					if ("" !== n.searchQuery) {
						if (n.isTypeaheadSuggestion) o = "/".concat(n.searchQuery);
						else {
							if (i = "".concat(L.o, "=").concat(Object($a.b)(n.rawQuery || n.searchQuery)), o = "/search/", n.section === er.c.trending && a && a.source && (i += "&source=".concat(a.source)), e && r ? (o = "/r/".concat(e.name).concat(o), i = "".concat(i, "&").concat(L.p, "=1")) : !e && n.subredditOrProfileRestrictedName && (o = "/".concat(n.subredditOrProfileRestrictedName).concat(o), i = "".concat(i, "&").concat(L.p, "=1")), t) {
								const e = t.url.split("/")[2];
								o = "/user/".concat(e, "/m/").concat(t.name).concat(o), i = "".concat(i, "&").concat(L.p, "=1&").concat(L.i, "=1")
							}
							a && a.category && (i = "".concat(i, "&").concat(L.a, "=").concat(a.category))
						}
						return {
							url: o,
							qs: i
						}
					}
				},
				sr = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				nr = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				ar = s("./src/reddit/icons/svgs/Search/index.tsx"),
				rr = s("./src/reddit/components/SearchDropdown/index.m.less"),
				or = s.n(rr);
			const ir = Object(Ja.a)(Xa.b);
			class cr extends m.a.Component {
				constructor() {
					super(...arguments), this.onRecentSearchItemClick = () => {
						this.props.recentSearch.isTypeaheadSuggestion ? this.props.onClearSearchQuery() : this.props.onUpdateSearchQuery(this.props.recentSearch.searchQuery), this.props.onSendDropdownClickEvent(this.props.recentSearch.searchQuery, this.props.recentSearch.searchQuery, H.StructureType.Recent, H.SearchDropdownNouns.Recent)
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
					} = e, c = tr(null, null, null, o), d = c && c.url, l = c && c.qs, u = l ? "".concat(d, "?").concat(l) : d, p = this.generateFullSearchQuery(o);
					let h;
					return a && (h = this.generateFullSearchQuery(a)), m.a.createElement($s.a, {
						"aria-label": o.searchQuery,
						className: Object(g.a)(or.a.listItem, oa.a.item, s, {
							[or.a.mFocused]: !(!a || a.section !== er.c.recent || h !== p)
						}),
						onClick: this.onRecentSearchItemClick,
						key: p,
						role: "link",
						tabIndex: -1,
						to: u || ""
					}, o.displayInfo && o.isTypeaheadSuggestion ? o.displayInfo.iconUrl ? m.a.createElement("div", {
						className: or.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(o.displayInfo.iconUrl, "')")
						}
					}) : m.a.createElement(sr.a, {
						className: or.a.planetIcon
					}) : m.a.createElement(ar.a, {
						className: Object(g.a)(or.a.listItemIcon, oa.a.icon)
					}), m.a.createElement("span", {
						className: oa.a.text
					}, p), m.a.createElement("div", {
						onMouseEnter: () => i(p),
						onMouseLeave: () => i(null),
						id: p
					}, m.a.createElement(nr.a, {
						className: Object(g.a)(or.a.listItemIcon, or.a.mHoverable, oa.a.icon),
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), r(o)
						}
					}), m.a.createElement(ir, {
						className: or.a.fixedTextTooltip,
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
			var dr = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				lr = s("./src/reddit/components/PostTitle/index.tsx"),
				mr = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				ur = s("./src/reddit/constants/adEvents.ts"),
				pr = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				hr = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				br = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			class gr extends m.a.Component {
				constructor() {
					super(...arguments), this.transformTrendingToRecentSearch = () => {
						const e = this.props.trendingItem,
							{
								post: t,
								subredditInfo: s,
								subredditOccurrences: n
							} = e;
						return br(e, ["post", "subredditInfo", "subredditOccurrences"])
					}, this.onTrendingItemClick = () => {
						this.props.onUpdateSearchQuery(this.props.trendingItem.searchQuery);
						const e = this.transformTrendingToRecentSearch();
						if (this.props.onSetRecentSearch(e), this.props.onSendDropdownClickEvent(this.props.trendingItem.searchQuery, this.props.trendingItem.rawQuery || "", H.StructureType.Trending, H.SearchDropdownNouns.Trending), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							this.props.fireAdPixelsOfType(e, ur.a.Click)
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
					} = this.props, a = this.isSponsored(), r = tr(null, null, null, s, {
						source: a ? Qa.a.PromotedTrend : Qa.a.Trending
					}), o = r && r.url, i = r && r.qs, c = i ? "".concat(o, "?").concat(i) : o, d = m.a.createElement($s.a, {
						"aria-label": s.searchQuery,
						className: Object(g.a)(or.a.listItem, or.a.mTrending, oa.a.item, oa.a.trending, e, {
							[or.a.mFocused]: !(!t || t.section !== er.c.trending || s.searchQuery !== t.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: "trending-".concat(s.searchQuery),
						role: "link",
						tabIndex: -1,
						to: c || ""
					}, m.a.createElement("div", {
						className: oa.a.trendingContent
					}, a && m.a.createElement("div", {
						className: oa.a.promoted
					}, n.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), m.a.createElement("div", null, m.a.createElement(vn, {
						className: Object(g.a)(or.a.listItemIcon, or.a.mTrending, oa.a.icon, oa.a.trending)
					}), m.a.createElement("span", null, m.a.createElement(lr.a, {
						className: Object(g.a)(or.a.listItemText, or.a.mTrending, oa.a.text, oa.a.trending),
						redditStyle: !0,
						size: lr.b.Small
					}, s.searchQuery)), s.post && m.a.createElement("div", {
						className: or.a.postTitle
					}, s.post.title)), s.subredditInfo && m.a.createElement(pr.a, {
						className: Object(g.a)(oa.a.relatedSubredditMetaData, or.a.listItemSubtext, {
							[or.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: n.fbt._("{subreddit name} and more", [n.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(hr.a)(s.post) && m.a.createElement(dr.a, {
						post: s.post,
						removeLink: !0,
						usePreview: a
					}));
					return a ? m.a.createElement(mr.a, {
						post: s.post
					}, d) : d
				}
			}
			var fr = s("./src/reddit/components/Flair/index.tsx");
			class Cr extends m.a.Component {
				constructor() {
					super(...arguments), this.onTypeaheadSuggestionClick = () => {
						this.props.onSetRecentSearch(this.props.item), this.props.onSendDropdownClickEvent(this.props.item.searchQuery, this.props.item.searchQuery, H.StructureType.Search, this.props.item.isProfile ? H.SearchDropdownNouns.TypeaheadProfile : H.SearchDropdownNouns.TypeaheadSubreddit), this.props.onClearSearchQuery()
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
					return m.a.createElement($s.a, {
						"aria-label": a.searchQuery,
						className: Object(g.a)(or.a.listItem, or.a.mTypeahead, oa.a.item, t, {
							[or.a.mFocused]: !(!s || s.searchQuery !== a.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: a.searchQuery,
						role: "link",
						tabIndex: -1,
						to: "/".concat(a.searchQuery)
					}, a.displayInfo && a.displayInfo.iconUrl ? m.a.createElement("div", {
						className: or.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(a.displayInfo.iconUrl, "')")
						}
					}) : m.a.createElement(sr.a, {
						className: or.a.planetIcon
					}), m.a.createElement("div", null, a.displayInfo && a.displayInfo.subredditOrProfileName && m.a.createElement("div", {
						className: Object(g.a)(or.a.listItemText, or.a.mTypeahead, oa.a.text)
					}, a.displayInfo.subredditOrProfileName), m.a.createElement("div", null, a.displayInfo && null != a.displayInfo.subscribers && m.a.createElement("div", {
						className: Object(g.a)(or.a.listItemSubtext, oa.a.subText)
					}, n.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [n.fbt._plural(a.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), a.displayInfo && a.displayInfo.isNSFW && m.a.createElement(fr.b, {
						flair: {
							type: xt.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var Pr = s("./src/reddit/constants/zIndex.ts"),
				vr = s("./src/reddit/controls/Dropdown/index.tsx");
			const {
				fbt: xr
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yr = "SearchDropdown", Er = 5, Or = Object(Ja.a)(vr.a);
			class wr extends m.a.Component {
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
					e.isFixed && (a.zIndex = Pr.h);
					const r = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending;
					return m.a.createElement(Or, {
						className: Object(g.a)(or.a.dropdown, wn.a.listContainer),
						isFixed: s,
						isOpen: e.isOpen,
						isOverlay: n,
						tooltipId: yr,
						noFocus: !0,
						style: a
					}, e.typeaheadSuggestions.map(t => m.a.createElement(Cr, {
						focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
						item: t,
						key: t.id,
						onClearSearchQuery: e.onClearSearchQuery,
						onSendDropdownClickEvent: e.onSendDropdownClickEvent,
						onSetRecentSearch: e.onSetRecentSearch,
						fireAdPixelsOfType: e.fireAdPixelsOfType
					})), r && e.recentSearches.map(s => m.a.createElement(cr, {
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
					})), r && e.isInTrendingExperiment && !e.isTrendingPending && e.trendingItems && m.a.createElement("div", {
						className: Object(g.a)(oa.a.title, or.a.listItemTitle, {
							[or.a.mWithBorder]: !!e.recentSearches.length
						})
					}, xr._("Trending today", null, {
						hk: "3nAMpY"
					})), (e.isTypeaheadPending || e.isTrendingPending) && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
						className: Object(g.a)(or.a.loadingItem, ua.a.item)
					}), m.a.createElement("div", {
						className: Object(g.a)(or.a.loadingItem, ua.a.item)
					}), m.a.createElement("div", {
						className: Object(g.a)(or.a.loadingItem, ua.a.item)
					}), m.a.createElement("div", {
						className: Object(g.a)(or.a.loadingItem, ua.a.item)
					}), m.a.createElement("div", {
						className: Object(g.a)(or.a.loadingItem, ua.a.item)
					})), r && e.isInTrendingExperiment && e.trendingItems.slice(0, Er).map(t => m.a.createElement(gr, {
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
			var jr = s("./src/reddit/contexts/ApiContext.tsx"),
				Sr = s("./src/lib/makeApiRequest/index.ts"),
				Mr = s("./src/lib/omitHeaders/index.ts"),
				kr = s("./src/reddit/constants/headers.ts");
			const _r = (e, t) => Object(Sr.b)(Object(Mr.a)(e, [kr.a]), {
				endpoint: "".concat(e.apiUrl, "/api/subreddit_autocomplete_v2.json"),
				method: f.cb.GET,
				data: {
					query: t
				}
			});
			var Ir = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				Nr = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const Tr = e => {
				const t = [],
					s = {};
				return e.forEach(e => {
					const n = e.data,
						a = e.kind;
					a === f.xb.Subreddit ? (t.push(n.name), s[n.name] = Object(Nr.a)(n)) : a === f.xb.Account && (t.push(n.subreddit.name), s[n.subreddit.name] = Object(Ir.a)(n.subreddit, n.name))
				}), {
					data: s,
					order: t
				}
			};
			var Rr = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Ar = s("./src/reddit/helpers/isArrayEqual.ts"),
				Lr = s("./src/reddit/helpers/trackers/searchResults.ts"),
				Fr = s("./src/reddit/selectors/experiments/trending.ts"),
				Dr = s("./src/reddit/helpers/chooseVariant/index.ts");
			const Br = e => Object(wt.D)(e) || Xt.Rb.Treatment1 === Object(Dr.c)(e, {
				experimentEligibilitySelector: Dr.a,
				experimentName: Xt.Ob
			});
			var Ur = s("./src/reddit/selectors/searchResults.ts"),
				Hr = s("./src/reddit/selectors/tooltip.ts"),
				Gr = s("./src/reddit/selectors/trending.ts"),
				qr = s("./src/reddit/controls/Search/index.m.less"),
				Wr = s.n(qr);
			const Vr = Object(kn.t)({
					searchQuery: kn.U,
					pageLayer: e => e
				}),
				Qr = (e, t, s) => e(e => Object.assign({}, Object(Lr.c)(e), {
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(Rr.c)(Rr.a.SearchResults),
					actionInfo: H.actionInfo(e),
					search: H.search(e, s)
				})),
				zr = Object(u.b)(() => Object(b.c)({
					currentSubredditName: Dt.e,
					currentUser: wt.i,
					dropdownIsOpen: Object(Hr.b)(yr),
					typeaheadIdsByQuery: Ur.c,
					isInTrendingExperiment: Fr.a,
					isInTypeaheadExperiment: Br,
					isLoggedIn: wt.G,
					isSubredditSearchAllowed: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(kn.K)(s)
					},
					language: wt.O,
					multireddit: kn.d,
					routeName: Dt.q,
					subreddit: kn.q,
					trendingItems: Gr.a,
					typeaheadSuggestions: Ur.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(Ka.b)()),
					fireAdPixelsOfType: (t, s) => e(Object(za.B)(t, s)),
					onChange: t => e(Object(Za.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(Za.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(h.b)(t)),
					onSearch: (t, s, n) => {
						e(Object(h.b)(Object(Ha.c)({
							pathname: t,
							search: s,
							state: {
								fromPage: n
							}
						})))
					},
					onToggleDropdown: () => e(Object(Ya.h)({
						tooltipId: yr
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(Za.i)(t))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onSearch: (n, a) => {
						n.preventDefault();
						const {
							currentUser: r = null
						} = e, o = tr(e.subreddit, e.multireddit, r, a, s.searchOptions, e.isSubredditSearchAllowed);
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
						Object(Rr.c)(Rr.a.SearchResults) || Object(Rr.d)(Rr.a.SearchResults);
						const e = s.searchOptions || Object(Qa.c)({});
						Qr(s.sendEvent, H.OriginElement.SearchBar, e)
					}
				}));
			class Zr extends m.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await _r(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = Tr(e.body.data.children);
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
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(qt.C)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(qt.W)(Object.assign({}, e, {
								section: er.c.recent
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
					}, this.onFetchTypeaheadSuggestions = qa()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery) {
							let t = Object.assign({}, er.a);
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = Va()()), this.props.typeaheadSuggestions && t.isTypeaheadSuggestion ? this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, H.StructureType.Search, t.isProfile ? H.SearchDropdownNouns.TypeaheadProfile : H.SearchDropdownNouns.TypeaheadSubreddit) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, H.StructureType.Search, H.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									s = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									n = !!this.props.subreddit && this.props.subreddit.isNSFW,
									a = er.b.text;
								t = {
									id: Va()(),
									searchQuery: this.state.searchQuery,
									type: a,
									section: er.c.recent,
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
						this.props.sendEvent(Object(Lr.m)(n, a))
					}, this.onSendDropdownViewEvent = (e, t, s, n) => {
						const a = {
							displayQuery: s,
							rawQuery: n || s,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(Lr.n)(e, a))
					}, this.onKeyDown = e => {
						if (e.key === fa.b.Escape && this.close(), e.key === fa.b.Tab && this.close(), e.key === fa.b.ArrowDown) {
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
						if (e.key === fa.b.ArrowUp) {
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
								const e = Object(qt.w)(this.props.currentUser.id);
								e.length > 0 && (this.setState({
									recentSearches: this.props.isLoggedIn ? e : [],
									itemList: [...e, ...this.props.trendingItems]
								}), e.forEach(e => {
									this.onSendDropdownViewEvent(H.SearchDropdownNouns.Recent, H.StructureType.Recent, e.searchQuery)
								})), this.props.trendingItems.length > 0 && this.props.trendingItems.forEach(e => {
									this.onSendDropdownViewEvent(H.SearchDropdownNouns.Trending, H.StructureType.Trending, e.searchQuery)
								})
							}
							this.props.onToggleDropdown()
						}
					}, this.onFormSubmit = e => {
						e.preventDefault(), this.onSearch(e);
						const t = this.props.searchOptions || Object(Qa.c)({});
						t.q || (t.q = this.state.searchQuery), Qr(this.props.sendEvent, "full_search_button", t)
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
					const t = Object(Ar.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						s = Object(Ar.a)(e.trendingItems, this.props.trendingItems);
					if (this.props.searchQuery !== e.searchQuery || !t || !s) {
						const n = this.props.typeaheadSuggestions.length ? this.props.typeaheadSuggestions : [...this.state.recentSearches, ...this.props.trendingItems];
						this.setState(() => {
							const t = {
								itemList: n
							};
							return this.props.searchQuery !== e.searchQuery && (t.searchQuery = this.props.searchQuery || ""), t
						}), !t && this.props.typeaheadSuggestions.length && this.props.typeaheadSuggestions.forEach(e => {
							this.onSendDropdownViewEvent(e.isProfile ? H.SearchDropdownNouns.TypeaheadProfile : H.SearchDropdownNouns.TypeaheadSubreddit, H.StructureType.Search, e.searchQuery)
						}), !s && this.props.trendingItems.length && this.state.fetchedTrending && this.props.trendingItems.forEach(e => {
							this.onSendDropdownViewEvent(H.SearchDropdownNouns.Trending, H.StructureType.Trending, e.searchQuery)
						})
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return m.a.createElement("div", {
						className: Object(g.a)(Wr.a.relativeWrapper, wn.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: yr,
						ref: this.setContainerRef
					}, m.a.createElement("label", {
						className: Wr.a.iconContainer,
						htmlFor: "header-search-bar"
					}, m.a.createElement(ar.a, {
						className: Wr.a.icon
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
						className: Wr.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: n.fbt._("Search", null, {
							hk: "44xF6n"
						}),
						type: "search",
						value: this.state.searchQuery
					})), !e.subreddit && m.a.createElement(wr, {
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
			var Kr = Object($.c)(Vr(Object(jr.b)(zr(Zr)))),
				Yr = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Jr = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				Xr = s("./src/reddit/selectors/experiments/responsiveSettings.ts"),
				$r = s("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				eo = s.n($r);
			var to = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(g.a)(eo.a.Container, t),
						id: "mweb-responsive-header-id"
					}, m.a.createElement("a", {
						"aria-label": n.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: eo.a.HomeLink,
						href: _.a.redditUrl
					}, m.a.createElement(Yr.a, {
						className: eo.a.Snoo
					}), m.a.createElement(Jr.a, {
						className: eo.a.Wordmark,
						color: "inherit"
					})))
				},
				so = s("./src/reddit/icons/svgs/LayerLogo/index.m.less"),
				no = s.n(so);

			function ao() {
				return (ao = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ro, oo = e => m.a.createElement("svg", ao({
					viewBox: "0 0 80 80",
					className: no.a.icon
				}, e), m.a.createElement("path", {
					d: "M76.4 55.5l-1.7-.9L44 70c-2.2 1.1-5.9 1.1-8.1 0L5.3 54.7l-1.7.9c-2.2 1.1-2.2 2.9 0 4L36 75.7c2.2 1.1 5.9 1.1 8.1 0l32.4-16.2c2.1-1.1 2.1-2.9-.1-4z"
				}), m.a.createElement("path", {
					d: "M77.3 41l-15.4-7.7 15.4-7c2.5-1.2 2.8-2.9 2.8-3.6 0-.7-.3-2.4-2.8-3.6L44.8 4.4c-2.8-1.3-6.9-1.3-9.7 0L2.8 19.1C.3 20.2 0 22 0 22.7c0 .7.3 2.4 2.8 3.6l15.4 7L2.7 41C1 41.8 0 43.2 0 44.7s1 2.9 2.7 3.7l32.4 16.2c1.4.7 3.2 1 4.9 1s3.5-.4 4.9-1l32.4-16.2c1.7-.9 2.7-2.2 2.7-3.7s-1-2.9-2.7-3.7zM4.2 22.7c.1 0 .1-.1.2-.1L36.8 7.9c1.7-.8 4.8-.8 6.5 0l32.4 14.7c.1 0 .1.1.2.1-.1 0-.1.1-.2.1L43.2 37.5c-1.7.8-4.8.8-6.5 0L4.4 22.7h-.2z"
				})),
				io = s("./src/reddit/components/Header/QuickLinks/index.m.less"),
				co = s.n(io);
			! function(e) {
				e.All = "header-quicklinks-all", e.Popular = "header-quicklinks-popular", e.News = "header-quicklinks-news", e.Rpan = "header-quicklinks-rpan", e.Layer = "header-quicklinks-layer"
			}(ro || (ro = {}));
			const lo = Object(b.c)({
				isLoggedIn: e => !!e.user.account,
				showRPANlogo: _n.a,
				showLayersEmbedLogo: Gt.d.layersEmbedQuickLink
			});
			var mo = Object(u.b)(lo, e => ({
					openStream: () => e(Object(Dn.a)(A.c[A.b.Rpan])),
					toggleTooltip: t => e(Object(Ya.h)({
						tooltipId: t
					}))
				}))(Object($.c)((function(e) {
					return m.a.createElement("div", {
						className: Object(g.a)(co.a.container, e.className)
					}, m.a.createElement("div", {
						className: co.a.row
					}, m.a.createElement($s.a, {
						className: co.a.icon,
						id: ro.Popular,
						to: e.isLoggedIn ? A.c[A.b.Popular] : A.c[A.b.Home],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(H.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "popular"
						})),
						onMouseEnter: () => e.toggleTooltip(ro.Popular),
						onMouseLeave: () => e.toggleTooltip(ro.Popular)
					}, m.a.createElement(vn, null), m.a.createElement(Xa.c, {
						caretOnTop: !0,
						tooltipId: ro.Popular,
						text: n.fbt._("Popular", null, {
							hk: "1Kx4va"
						})
					})), m.a.createElement($s.a, {
						className: co.a.icon,
						id: ro.All,
						to: A.c[A.b.All],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(H.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "all"
						})),
						onMouseEnter: () => e.toggleTooltip(ro.All),
						onMouseLeave: () => e.toggleTooltip(ro.All)
					}, m.a.createElement(cn.a, null), m.a.createElement(Xa.c, {
						caretOnTop: !0,
						tooltipId: ro.All,
						text: n.fbt._("All", null, {
							hk: "1Rk1yU"
						})
					})), e.showRPANlogo && m.a.createElement($s.a, {
						className: co.a.icon,
						id: ro.Rpan,
						to: A.c[A.b.Rpan],
						onClick: t => {
							(t => {
								t.stopPropagation(), t.preventDefault(), e.openStream()
							})(t), e.sendEvent(e => Object.assign({}, Object(H.defaults)(e), {
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						},
						onMouseEnter: () => e.toggleTooltip(ro.Rpan),
						onMouseLeave: () => e.toggleTooltip(ro.Rpan)
					}, m.a.createElement(En.a, null), m.a.createElement(Xa.c, {
						caretOnTop: !0,
						tooltipId: ro.Rpan,
						text: n.fbt._("Reddit Public Access Network", null, {
							hk: "38uXOo"
						})
					})), e.showLayersEmbedLogo && m.a.createElement($s.a, {
						className: co.a.icon,
						id: ro.Layer,
						to: A.c[A.b.Layer],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(H.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "layer"
						})),
						onMouseEnter: () => e.toggleTooltip(ro.Layer),
						onMouseLeave: () => e.toggleTooltip(ro.Layer)
					}, m.a.createElement(oo, null), m.a.createElement(Xa.c, {
						caretOnTop: !0,
						tooltipId: ro.Layer,
						text: n.fbt._("r/Layer in partnership with Adobe", null, {
							hk: "36V7Nc"
						})
					}))))
				}))),
				uo = s("./src/reddit/actions/login.ts"),
				po = s("./src/reddit/helpers/trackers/authControls.ts"),
				ho = s("./src/reddit/selectors/meta.ts"),
				bo = s("./src/chat/helpers/dom.ts"),
				go = s("./src/reddit/actions/chat/toggle.ts"),
				fo = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				Co = s("./src/reddit/actions/postCreation/general.ts"),
				Po = s("./src/reddit/actions/users.ts"),
				vo = s("./src/reddit/components/Settings/modalIds.ts");
			var xo = Object(Ge.a)({
					getComponent: () => Object(ze.a)(() => s.e("EmailVerificationModals").then(s.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				yo = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Eo = s("./src/reddit/components/Translated/index.tsx"),
				Oo = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				wo = s("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				jo = s.n(wo);
			class So extends m.a.Component {
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
					So.shouldSendViewEvent && (So.shouldSendViewEvent = !1, this.props.sendEvent(Object(Oo.g)(Oo.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: jo.a.container
					}, m.a.createElement("div", {
						className: jo.a.topLine
					}), m.a.createElement("button", {
						className: jo.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(D.a, {
						className: jo.a.closeIcon
					})), m.a.createElement("h5", {
						className: jo.a.title
					}, m.a.createElement(Eo.a, {
						msgId: "header.emailVerificationTooltip.title"
					})), m.a.createElement("p", {
						className: jo.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: jo.a.description
					}, m.a.createElement(Eo.a, {
						msgId: "header.emailVerificationTooltip.description"
					})), m.a.createElement("div", {
						className: jo.a.buttonWrapper
					}, m.a.createElement(gt.i, {
						className: jo.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, m.a.createElement(Eo.a, {
						msgId: "header.emailVerificationTooltip.buttons.updateEmail"
					})), m.a.createElement(gt.f, {
						className: Object(g.a)(jo.a.commonBtn, jo.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, m.a.createElement(Eo.a, {
						msgId: "header.emailVerificationTooltip.buttons.gotIt"
					}))))
				}
			}
			So.shouldSendViewEvent = !0;
			const Mo = Object(yo.a)(So, [ha.a.Click, ha.a.Keydown, ha.a.Resize]);
			var ko = Object($.c)(Mo),
				_o = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				Io = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts")),
				No = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				To = s("./src/reddit/controls/LoadingIcon/index.tsx");
			let Ro;
			const Ao = () => Ro,
				Lo = () => Ro = Va()(),
				Fo = "gold_top_nav",
				Do = e => t => Object.assign({
					source: "gold_top_nav",
					action: "click",
					noun: e
				}, (e => ({
					screen: H.screen(e),
					profile: H.profile(e),
					subreddit: H.subreddit(e)
				}))(t)),
				Bo = e => t => Object.assign({
					source: Fo,
					action: "click",
					noun: "coins_".concat(e),
					correlationId: Ao()
				}, H.defaults(t)),
				Uo = () => e => Object.assign({
					source: Fo,
					action: "click",
					noun: "premium",
					correlationId: Ao()
				}, H.defaults(e)),
				Ho = () => e => Object.assign({
					source: Fo,
					action: "view",
					noun: "dropdown",
					correlationId: Ao()
				}, H.defaults(e));
			var Go = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				qo = s("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				Wo = s.n(qo);
			var Vo = e => {
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
					} = e, l = r ? gt.c : gt.f;
					return m.a.createElement("div", {
						className: Object(g.a)(t, Wo.a.CompactCoinPurchaseListItem)
					}, m.a.createElement("div", {
						className: Wo.a.productSection
					}, m.a.createElement("span", {
						className: Wo.a.primaryText
					}, i), m.a.createElement("span", {
						className: Object(g.a)(Wo.a.subtext, {
							[Wo.a.crossout]: d
						})
					}, Array.isArray(c) ? c.map((e, t) => m.a.createElement("p", {
						key: t
					}, e)) : c)), m.a.createElement("div", {
						className: Wo.a.priceSection
					}, m.a.createElement(l, {
						className: Object(g.a)(Wo.a.button, {
							[Wo.a.goldStyle]: r
						}),
						redditStyle: !0,
						onClick: o
					}, a), m.a.createElement("span", {
						className: Object(g.a)(Wo.a.buttonSubtext, {
							[Wo.a.crossout]: n
						})
					}, s)))
				},
				Qo = s("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				zo = s.n(Qo);
			const Zo = Object(b.c)({
				coinPackages: Go.b,
				isPremiumSubscriber: wt.q,
				premiumPackages: Go.c,
				purchaseCatalogError: Go.d,
				purchaseCatalogPending: Go.e
			});
			class Ko extends m.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: s,
							sendEvent: n
						} = this.props;
						t && t(), n(Bo(e.coins)), s(e)
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
							l = n.fbt._("{number of coins of non-sale pacakge} Coins", [n.fbt._param("number of coins of non-sale pacakge", e)], {
								hk: "30VbQ4"
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
						className: zo.a.loaderContainer
					}, m.a.createElement(To.a, {
						sizePx: 80
					}))) : s || !t.length ? m.a.createElement("div", {
						className: e
					}, m.a.createElement("div", {
						className: zo.a.errorContainer
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
						return m.a.createElement(Vo, {
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
			var Yo = Object(u.b)(Zo, e => ({
					onClickCoinPackage: t => e(Object(Io.f)({
						coinsToPurchase: t.coins
					})),
					onClickPremiumPackage: () => e(Object(No.f)(Ao())),
					requestPurchaseCatalog: () => e(Object(_o.a)())
				}))(Object($.c)(Ko)),
				Jo = s("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				Xo = s.n(Jo);
			const {
				fbt: $o
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ei = Object(Ja.a)(vr.a);
			class ti extends m.a.Component {
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
					e(Ho())
				}
				renderDefaultHeader() {
					return m.a.createElement("div", {
						className: Xo.a.header
					}, m.a.createElement("span", {
						className: Xo.a.headerText
					}, $o._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), m.a.createElement($s.a, {
						className: Xo.a.headerLink,
						to: "/coins"
					}, $o._("What are Coins?", null, {
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
						className: Object(g.a)(Xo.a.header, Xo.a.activeSale)
					}, s && m.a.createElement("img", {
						className: Object(g.a)(Xo.a.saleHeaderImage, Xo.a.activeSale),
						src: s
					}), m.a.createElement("span", {
						className: Xo.a.headerText
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
					return m.a.createElement(ei, {
						className: Object(g.a)(t, Xo.a.CoinPurchaseDropdown, {
							[Xo.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: s,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: a
					}, e ? this.renderSaleHeader() : this.renderDefaultHeader(), m.a.createElement(Yo, {
						className: Xo.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			var si = Object($.c)(ti),
				ni = s("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				ai = s("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			var ri = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				oi = s("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				ii = s.n(oi);
			const ci = "COIN_PURCHASE_DROPDOWN_ID",
				di = Object(b.c)({
					activeSaleConfig: Go.a,
					activeTooltipId: Hr.a,
					coinPackages: Go.b,
					coinPurchaseDropdownIsOpen: e => Object(Hr.b)(ci)(e),
					coinPurchaseModalIsOpen: ri.q,
					premiumPurchaseModalIsOpen: ri.n,
					purchaseCatalogPending: Go.e
				});
			class li extends m.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							coinPurchaseDropdownIsOpen: s,
							sendEvent: n,
							toggleTooltip: a
						} = this.props;
						s || (Lo(), Object(ni.b)(), Object(ai.b)(), n(Do("get_coins_cta"))), a(t)
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
						className: Object(g.a)(t, ii.a.ctaContainer, {
							[ii.a.activeSale]: !!e
						}),
						id: ci,
						onClick: this.handleClick
					}, m.a.createElement("div", {
						className: Object(g.a)(ii.a.ctaContent, {
							[ii.a.activeSale]: !!e
						})
					}, m.a.createElement(ln.a, {
						className: Object(g.a)(ii.a.icon, {
							[ii.a.activeSale]: !!e
						})
					}), m.a.createElement("span", {
						className: ii.a.text
					}, i)), m.a.createElement(si, {
						activeSaleConfig: e,
						isOpen: a,
						onCloseTooltip: s,
						tooltipId: ci
					}), r && m.a.createElement(ni.a, {
						isCompletePaypal: !1
					}), o && m.a.createElement(ai.a, null))
				}
			}
			var mi = Object(u.b)(di, (e, t) => ({
					closeTooltip: () => e(Object(Ya.i)()),
					requestPurchaseCatalog: () => e(Object(_o.a)()),
					toggleTooltip: t => {
						e(t === ci ? Object(Ya.i)() : Object(Ya.f)({
							tooltipId: ci
						}))
					}
				}))(Object($.c)(li)),
				ui = s("./src/reddit/components/HeaderIconContainer/index.m.less"),
				pi = s.n(ui);

			function hi() {
				return (hi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var bi = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const gi = k.a.button("Button", pi.a),
				fi = k.a.div("Container", pi.a);
			var Ci = e => {
					const {
						children: t,
						isOpen: s
					} = e, n = bi(e, ["children", "isOpen"]);
					return m.a.createElement(gi, hi({}, n, {
						id: e.id,
						onClick: e.onClick
					}), m.a.createElement(fi, {
						className: Object(g.a)({
							[pi.a.isOpen]: s
						})
					}, t))
				},
				Pi = s("./src/chat/helpers/unreadCount.ts"),
				vi = s("./src/chat/models/Promo/index.ts"),
				xi = s("./src/lib/prettyPrintNumber/index.ts"),
				yi = s("./src/reddit/components/HeaderUserActions/index.m.less"),
				Ei = s.n(yi);
			var Oi = e => {
					let {
						className: t,
						isActive: s,
						unreadCount: n
					} = e;
					return s ? m.a.createElement("span", {
						className: Object(g.a)(t, Ei.a.counter, {
							[Ei.a.isHighlighted]: s && n <= 0
						})
					}, n > 0 && Object(xi.b)(n)) : null
				},
				wi = s("./src/reddit/helpers/trackers/chat.ts"),
				ji = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				Si = s("./src/reddit/selectors/chat.ts");
			const Mi = Object(b.c)({
				promos: Si.b,
				unreadCount: Si.d
			});
			class ki extends l.Component {
				componentDidMount() {
					this.props.promos[vi.a.SubredditChatFtux] && this.props.sendEvent(Object(wi.j)())
				}
				render() {
					const {
						promos: e,
						unreadCount: t
					} = this.props, {
						count: s,
						unread: n
					} = Object(Pi.a)(t, e);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Oi, {
						isActive: n,
						unreadCount: s
					}), m.a.createElement(ji.a, {
						className: Object(g.a)(Ei.a.chatIcon, {
							[Ei.a.isActive]: n
						})
					}))
				}
			}
			var _i = Object(u.b)(Mi)(Object($.c)(ki)),
				Ii = s("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Ni = s.n(Ii);
			var Ti = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: Ni.a.container
				}, m.a.createElement("p", {
					className: Ni.a.title
				}, m.a.createElement(Eo.a, {
					msgId: "header.customizeFlyout.title"
				})), m.a.createElement("h5", {
					className: Ni.a.subtitle
				}, m.a.createElement(Eo.a, {
					msgId: "header.customizeFlyout.subtitle"
				})), m.a.createElement("p", {
					className: Ni.a.description
				}, m.a.createElement(Eo.a, {
					msgId: "header.customizeFlyout.description"
				})), m.a.createElement(gt.i, {
					className: Ni.a.dismissBtn,
					onClick: t
				}, m.a.createElement(Eo.a, {
					msgId: "header.customizeFlyout.dismiss"
				})))
			};
			var Ri = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Oi, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(mn.a, {
					className: Object(g.a)(Ei.a.envelopeIcon, {
						[Ei.a.isUnread]: !!e.unreadCount
					})
				})),
				Ai = s("./src/reddit/actions/alpha.ts"),
				Li = s("./src/reddit/actions/modMode.ts"),
				Fi = s("./src/reddit/constants/elementClassNames.ts"),
				Di = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Bi = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Ui = s("./src/reddit/helpers/trackers/modTools.ts");
			const Hi = e => ({
				screen: H.screen(e),
				profile: H.profile(e),
				subreddit: H.subreddit(e)
			});
			var Gi = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				qi = s("./src/reddit/icons/fonts/Premium/index.tsx"),
				Wi = s("./src/reddit/icons/svgs/Help/index.tsx"),
				Vi = s("./src/reddit/icons/svgs/KarmaGray/index.m.less"),
				Qi = s.n(Vi);
			var zi = e => m.a.createElement("svg", {
					className: Object(g.a)(Qi.a.karma, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("path", {
					d: "M3.37,2.75a5.9,5.9,0,0,1,5.49,3.7.62.62,0,0,1-.29.79A3.16,3.16,0,0,0,7.24,8.57a.63.63,0,0,1-.79.29,5.89,5.89,0,0,1-3.7-5.49A.62.62,0,0,1,3.37,2.75Zm8.06,4.49a.63.63,0,0,1-.29-.79,5.89,5.89,0,0,1,5.49-3.7.61.61,0,0,1,.62.6v0a5.89,5.89,0,0,1-3.7,5.49.62.62,0,0,1-.79-.29A3.16,3.16,0,0,0,11.43,7.24Zm2.12,3.9a5.89,5.89,0,0,1,3.7,5.49.62.62,0,0,1-.62.62h0a5.89,5.89,0,0,1-5.49-3.7.63.63,0,0,1,.29-.79,3.16,3.16,0,0,0,1.33-1.33A.62.62,0,0,1,13.55,11.14Zm-5,1.62a.62.62,0,0,1,.29.79,5.89,5.89,0,0,1-5.49,3.7.62.62,0,0,1-.62-.62h0a5.9,5.9,0,0,1,3.7-5.49.62.62,0,0,1,.79.29,3.1,3.1,0,0,0,1.35,1.33ZM10,5.93A7.23,7.23,0,0,0,7.51,2.82,5,5,0,0,1,9.68.09a.61.61,0,0,1,.64,0,5,5,0,0,1,2.17,2.73A7.23,7.23,0,0,0,10,5.93Zm9.91,3.75a.61.61,0,0,1,0,.64,5,5,0,0,1-2.73,2.17A7.23,7.23,0,0,0,14.07,10a7.36,7.36,0,0,0,3.11-2.49A5,5,0,0,1,19.91,9.68ZM10,14.07a7.18,7.18,0,0,0,2.5,3.11,5,5,0,0,1-2.18,2.73.61.61,0,0,1-.64,0,5,5,0,0,1-2.17-2.73A7.23,7.23,0,0,0,10,14.07ZM5.93,10a7.23,7.23,0,0,0-3.11,2.49A5,5,0,0,1,.09,10.32a.61.61,0,0,1,0-.64A5,5,0,0,1,2.82,7.51,7.23,7.23,0,0,0,5.93,10Z"
				})),
				Zi = e => m.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("g", {
					fill: "inherit"
				}, m.a.createElement("path", {
					d: "M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"
				})));
			var Ki = e => m.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, m.a.createElement("path", {
					d: "M10,8 C8.619,8 7.5,9.5 7.5,9.5 C7.5,9.5 8.619,11 10,11 C11.381,11 12.5,9.5 12.5,9.5 C12.5,9.5 11.381,8 10,8 M15.1338,14 L4.8658,14 C4.4818,14 4.2398,13.583 4.4328,13.25 L9.5678,4.357 C9.7598,4.024 10.2398,4.024 10.4328,4.357 L15.5678,13.25 C15.7598,13.583 15.5188,14 15.1338,14 M17.2748,3.038 L10.2748,1.038 C10.0948,0.987 9.9048,0.987 9.7258,1.038 L2.7258,3.038 C2.2958,3.161 1.9998,3.554 1.9998,4 L1.9998,11 C1.9998,16.688 9.4098,18.871 9.7258,18.962 C9.8158,18.987 9.9068,19 9.9998,19 C10.0928,19 10.1848,18.987 10.2748,18.962 C10.5898,18.871 17.9998,16.688 17.9998,11 L17.9998,4 C17.9998,3.554 17.7038,3.161 17.2748,3.038"
				})),
				Yi = e => m.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("g", {
					fill: "inherit"
				}, m.a.createElement("path", {
					d: "M15,15.5 L5,15.5 C4.724,15.5 4.5,15.276 4.5,15 C4.5,12.755 6.326,10.929 8.571,10.929 L11.429,10.929 C13.674,10.929 15.5,12.755 15.5,15 C15.5,15.276 15.276,15.5 15,15.5 M10,4.5 C11.405,4.5 12.547,5.643 12.547,7.048 C12.547,8.452 11.405,9.595 10,9.595 C8.595,9.595 7.453,8.452 7.453,7.048 C7.453,5.643 8.595,4.5 10,4.5 M16,2 L4,2 C2.897,2 2,2.897 2,4 L2,16 C2,17.103 2.897,18 4,18 L16,18 C17.103,18 18,17.103 18,16 L18,4 C18,2.897 17.103,2 16,2"
				}))),
				Ji = e => m.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, m.a.createElement("g", {
					fill: "inherit"
				}, m.a.createElement("path", {
					d: "M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"
				}))),
				Xi = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				$i = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				ec = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				tc = e => m.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("g", {
					fill: "inherit"
				}, m.a.createElement("path", {
					d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
				}))),
				sc = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				nc = s("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				ac = s.n(nc);
			const rc = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				oc = k.a.wrapped(vr.a, "Dropdown", ac.a),
				ic = Object(Ja.a)(oc),
				cc = e => m.a.createElement(Bi.a, {
					className: ac.a.button,
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: ac.a.buttonText
				}, e.displayText), m.a.createElement(Di.a, {
					className: ac.a.toggleSwitch,
					"data-redditstyle": !0,
					on: e.isEnabled
				})),
				dc = Object(u.b)(() => Object(b.c)({
					isModModeEnabled: Ut.t,
					isOpen: Object(Hr.b)("USER_DROPDOWN_ID"),
					nightmode: wt.Q,
					url: Dt.r
				}), e => ({
					toggleNightmode: t => e(Object(N.w)(t)),
					onOptIntoRedesign: () => e(Object(Ai.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Be.a.get("rseor3") && Be.a.remove("rseor3", {
							domain: _.a.cookieDomain
						}), e(Object(Ai.b)(!0))) : window.location.host = "old.reddit.com"
					},
					dispatchOpenLoginModal: () => e(Object(uo.e)()),
					logoutUser: () => e(Object(Po.s)()),
					toggleModMode: () => e(Object(Li.b)())
				}));
			var lc = Object(kn.t)({
					pageLayer: e => e
				})(dc(Object($.c)(e => {
					const {
						logoutUser: t,
						dispatchOpenLoginModal: s,
						isModModeEnabled: a,
						nightmode: r,
						toggleModMode: o,
						user: i
					} = e, c = Object(Bi.b)(ec.a, n.fbt._("User Settings", null, {
						hk: "46J4vT"
					}), !1), d = Object(Bi.b)(Wi.a, n.fbt._("Help Center", null, {
						hk: "4sGjc0"
					}), !0), u = Object(Bi.b)(Xi.a, n.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					}), !0), p = Object(Bi.b)(Zi, n.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					})), h = Object(Bi.b)(Zi, n.fbt._("Log Out", null, {
						hk: "2SjIc8"
					})), b = Object(Bi.b)(tc, n.fbt._("Opt In to New Reddit", null, {
						hk: "4jiTxA"
					}), !1), f = (e => {
						const t = e && e.coins || 0;
						return n.fbt._({
							"*": "{number of coins} coins",
							_1: "1 coin"
						}, [n.fbt._plural(t, "number of coins")], {
							hk: "qmnnm"
						})
					})(i), C = Object(Bi.b)(ln.a, n.fbt._("Reddit Coins", null, {
						hk: "3jj6Cb"
					}), !1, f), P = Object(Bi.b)(yn.a, n.fbt._("Reddit Premium", null, {
						hk: "3FNqVS"
					}), !1);
					return m.a.createElement("div", {
						className: Object(g.a)(ac.a.container, Fi.e)
					}, m.a.createElement(sc.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(g.a)(e.className, ac.a.inlineButton, {
							[ac.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("user")
						}
					}, m.a.createElement("span", {
						className: ac.a.accountDisplayText
					}, (e => e ? m.a.createElement("span", {
						className: Object(g.a)(ac.a.accountWrapper, ac.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && m.a.createElement("img", {
						alt: n.fbt._("Account icon", null, {
							hk: "3AlfP3"
						}),
						className: ac.a.imgIcon,
						src: e.accountIcon
					}), m.a.createElement("span", {
						className: ac.a.accountDetails
					}, m.a.createElement("span", {
						className: ac.a.username
					}, e.displayText, e.isGold && m.a.createElement(qi.a, {
						className: ac.a.premiumFontIcon,
						title: n.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						})
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ac.a.accountKarma
					}, m.a.createElement(zi, null), m.a.createElement("span", null, (e => {
						const t = e.commentKarma + e.postKarma,
							s = Object(xi.b)(t);
						return n.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [n.fbt._plural(t, "karma count", s)], {
							hk: "ndlXe"
						})
					})(e))), !!e.coins && m.a.createElement("span", {
						className: ac.a.accountCoins
					}, m.a.createElement(Gi.a, {
						className: ac.a.coinFontIcon
					}), m.a.createElement("span", null, (e => Object(xi.b)(e.coins || 0))(e)))))) : m.a.createElement("span", {
						className: Object(g.a)(ac.a.accountWrapper, ac.a.isLoggedOut)
					}, m.a.createElement($i.a, {
						className: ac.a.myProfileIcon
					})))(e.user), m.a.createElement(Na.b, {
						className: ac.a.dropdownTriangle
					})), m.a.createElement(Ua.a, null, n.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(ic, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, i && m.a.createElement(l.Fragment, null, m.a.createElement("h3", {
						className: ac.a.sectionHeader,
						role: "heading"
					}, n.fbt._("My Stuff", null, {
						hk: "47vhMb"
					})), (e => {
						const t = n.fbt._("My Profile", null, {
								hk: "4AoYxT"
							}),
							s = Object(Bi.b)(Yi, t, !1);
						return m.a.createElement(s, {
							href: e.url
						})
					})(i), m.a.createElement(c, {
						href: "/settings"
					})), m.a.createElement("h3", {
						className: ac.a.sectionHeader,
						role: "heading"
					}, n.fbt._("View Options", null, {
						hk: "3bZPKB"
					})), i && i.isMod && m.a.createElement(cc, {
						displayText: n.fbt._("Mod Mode", null, {
							hk: "3Rb4sj"
						}),
						isEnabled: a,
						onClick: () => {
							e.sendEvent(Object(Ui.h)(!a)), o()
						}
					}, m.a.createElement(Ki, {
						className: ac.a.modModeIcon
					})), m.a.createElement(cc, {
						displayText: "Night Mode",
						isEnabled: r,
						onClick: () => {
							e.sendEvent((e => t => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: e ? "night_mode_off" : "night_mode_on"
							}, Hi(t)))(r)), e.toggleNightmode(!r)
						}
					}, m.a.createElement(Ji, {
						className: ac.a.nightIcon
					})), m.a.createElement("h3", {
						className: ac.a.sectionHeader,
						role: "heading"
					}, n.fbt._("More Stuff", null, {
						hk: "4Gad8T"
					})), m.a.createElement(l.Fragment, null, m.a.createElement(C, {
						href: "/coins",
						onClick: () => {
							Ca.f(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: Ca.e()
							}, Hi(e)))())
						}
					}), m.a.createElement(P, {
						href: "/premium",
						onClick: () => {
							Pa.g(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: Pa.f()
							}, Hi(e)))())
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
								screen: H.screen(e),
								subreddit: H.subreddit(e)
							}))
						}
					}), !rc && i && m.a.createElement(b, {
						href: "",
						onClick: () => {
							e.sendEvent(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_opt_in",
								screen: H.screen(e),
								subreddit: H.subreddit(e)
							})), e.onOptIntoRedesign()
						}
					}), m.a.createElement("div", {
						className: ac.a.divider
					}), i ? m.a.createElement(h, {
						href: "#",
						onClick: e => {
							t(), e.preventDefault()
						}
					}) : m.a.createElement(p, {
						href: "#",
						onClick: t => {
							Object(E.a)(t) && (t.preventDefault(), t.stopPropagation(), s(), e.sendEvent(Object(po.b)()))
						}
					})))
				}))),
				mc = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				uc = s("./src/reddit/helpers/trackers/navigation.ts");
			const pc = "HeaderUserActions--Chat",
				hc = "email-verification-tooltip-id",
				bc = "HeaderUserActions--Messages",
				gc = "HeaderUserActions--Moderation",
				fc = "HeaderUserActions--NewPost",
				Cc = Object(kn.t)({
					pageLayer: e => e
				}),
				Pc = Object(b.c)({
					activeDropdownId: Hr.a,
					email: wt.l,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isModerator: Ot.h,
					shouldOpenEmailVerificationTooltip: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(kn.J)(s) && !!Object(wt.l)(e) && !Object(wt.w)(e) && Object(wt.G)(e) && !Object(wt.E)(e)
					},
					unreadNotifications: wt.bb
				}),
				vc = Object(u.b)(Pc, (e, t) => ({
					closeEmailVerificationTooltip: () => e(Object(fo.b)()),
					onChatClick: () => e(Object(go.c)()),
					onDismissCustomizeFlyout: () => e(Object(N.s)()),
					onOpenModerationDropdown: () => e(Object(Ya.h)({
						tooltipId: mc.a
					})),
					onOpenUserDropdown: () => e(Object(Ya.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleChangeEmailModal: () => {
						e(Object(fo.b)()), e(Object(He.i)(vo.a))
					},
					toggleTooltip: t => e(Object(Ya.h)({
						tooltipId: t
					})),
					resendEmail: () => e(Object(Po.y)(Oo.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Co.p(t.pageLayer))
					}
				}));
			class xc extends m.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => this.props.sendEvent(Object(uc.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
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
						user: P
					} = this.props, v = !(!C || !C.hasUnreadModmail && !C.hasUnreadOldModmail), x = (e, t) => m.a.createElement(Xa.c, {
						caretOnTop: !0,
						tooltipId: e,
						text: t
					});
					return m.a.createElement(vt.a, {
						id: hc,
						ref: e => this.container = e,
						className: t
					}, m.a.createElement(vt.a, {
						className: Ei.a.headerLinks
					}, i && m.a.createElement(l.Fragment, null, m.a.createElement("span", {
						className: Ei.a.iconWrapper,
						id: gc,
						key: gc,
						onMouseEnter: () => b(gc),
						onMouseLeave: () => e === gc && b(gc)
					}, m.a.createElement(Ci, {
						"aria-expanded": e === mc.a,
						"aria-haspopup": !0,
						"aria-label": n.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: mc.a,
						onClick: this.onOpenModerationDropdown,
						isOpen: e === mc.a
					}, m.a.createElement(gn.a, {
						className: Object(g.a)(Ei.a.moderateIcon, {
							[Ei.a.isLit]: v
						})
					})), x(gc, n.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(mc.b, {
						className: Ei.a.moderationDropdown,
						isOpen: e === mc.a,
						key: mc.a,
						unreadNotifications: C,
						sendEventWithName: this.sendEventWithName
					})), P && m.a.createElement(l.Fragment, null, m.a.createElement("span", {
						className: Ei.a.iconWrapper,
						id: pc,
						key: pc,
						onMouseEnter: () => b(pc),
						onMouseLeave: () => e === pc && b(pc)
					}, m.a.createElement("a", {
						className: Ei.a.link,
						href: "".concat(_.a.redditUrl, "/chat"),
						onClick: Object(bo.a)(this.onClickChat)
					}, m.a.createElement(_i, null)), x(pc, n.fbt._("Chat", null, {
						hk: "4nXRWH"
					}))), m.a.createElement("span", {
						className: Ei.a.iconWrapper,
						id: bc,
						key: bc,
						onMouseEnter: () => b(bc),
						onMouseLeave: () => e === bc && b(bc)
					}, m.a.createElement("a", {
						className: Ei.a.link,
						href: C && C.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: this.onClickMail
					}, m.a.createElement(Ri, {
						unreadCount: C && C.inboxCount || 0
					})), x(bc, n.fbt._("Messages", null, {
						hk: "Txokh"
					}))), m.a.createElement("span", {
						className: Ei.a.iconWrapper,
						id: fc,
						key: fc,
						onMouseEnter: () => b(fc),
						onMouseLeave: () => e === fc && b(fc)
					}, m.a.createElement("button", {
						className: Ei.a.link,
						"aria-label": n.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: this.onClickCreatePost
					}, m.a.createElement(xn.a, {
						className: Ei.a.postIcon
					})), x(fc, n.fbt._("Create Post", null, {
						hk: "1TvNGq"
					}))), m.a.createElement("span", {
						className: Ei.a.iconWrapper
					}, m.a.createElement(mi, null)))), m.a.createElement(lc, {
						className: Ei.a.headerUserDropdown,
						onClick: u,
						user: P,
						sendEventWithName: this.sendEventWithName
					}), r && m.a.createElement(Ti, {
						onCloseFlyout: d
					}), m.a.createElement(ko, {
						closeTooltip: s,
						email: a,
						isOpen: h && o,
						resendEmail: p,
						toggleChangeEmailModal: f,
						tooltipId: hc
					}), m.a.createElement(xo, {
						email: a,
						language: c,
						shouldOpenTooltip: h
					}))
				}
			}
			var yc = Object($.c)(Cc(vc(xc))),
				Ec = s("./src/reddit/components/Header/User/index.m.less"),
				Oc = s.n(Ec);
			const wc = Object(b.c)({
					account: e => e.user.account,
					language: e => e.user.language,
					origin: ho.h
				}),
				jc = m.a.memo(e => m.a.createElement("div", {
					className: Object(g.a)(e.className, Oc.a.row)
				}, !e.account && function(e) {
					const t = e.pageLayer,
						s = _.a.accountManagerOrigin,
						n = t ? t.url : "/",
						a = t && t.meta && t.meta.name === f.Ab.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + n);
					return m.a.createElement("div", {
						className: Oc.a.loggedOutRow
					}, m.a.createElement(gt.j, {
						redditStyle: !0,
						className: Object(g.a)(Oc.a.login, Oc.a.button),
						href: "".concat(s, "/login/?dest=").concat(a),
						onClick: t => {
							Object(E.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(po.a)("nav")))
						}
					}, m.a.createElement(Ct.c, null, "log in")), m.a.createElement(gt.g, {
						redditStyle: !0,
						className: Object(g.a)(Oc.a.separator, Oc.a.register, Oc.a.button),
						href: "".concat(s, "/register/?dest=").concat(a),
						onClick: t => {
							Object(E.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(po.c)("nav")))
						}
					}, m.a.createElement(Ct.c, null, "sign up")))
				}(e), m.a.createElement(yc, {
					className: Object(g.a)({
						[Oc.a.loggedOut]: !e.account
					}),
					language: e.language,
					user: e.account
				})));
			var Sc = Object(kn.t)()(Object(u.b)(wc, e => ({
					onOpenLoginModal: () => {
						e(Object(He.k)({
							actionSource: He.a.HeaderLogin
						})), e(Object(uo.e)())
					},
					onOpenRegisterModal: () => {
						e(Object(He.k)({
							actionSource: He.a.HeaderSignup
						})), e(Object(uo.f)())
					}
				}))(Object($.c)(jc))),
				Mc = s("./src/reddit/components/Header/index.m.less"),
				kc = s.n(Mc);

			function _c() {
				return (_c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ic = k.a.header("HeaderDynamicStyles", kc.a),
				Nc = Object(b.c)({
					isLoggedIn: wt.G,
					isNightmode: wt.Q,
					isResponsiveSettingsEnabled: Xr.a,
					language: e => e.user.language,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Tc = Object(kn.t)({
					categoryName: kn.b,
					pageLayer: e => e
				}),
				Rc = e => m.a.createElement("div", {
					className: kc.a.left
				}, m.a.createElement(Ua.a, null, n.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
					hk: "ToBNc"
				})), m.a.createElement(Ba.b, null), m.a.createElement($s.a, {
					"aria-label": n.fbt._("Home", null, {
						hk: "3PmGmU"
					}),
					className: kc.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, m.a.createElement(Yr.a, {
					className: kc.a.snoo
				}), m.a.createElement(Jr.a, {
					className: kc.a.wordmark
				})), e.children),
				Ac = e => m.a.createElement("div", {
					className: kc.a.right
				}, e.children, m.a.createElement(Sc, null)),
				Lc = e => m.a.createElement("div", {
					className: kc.a.layout
				}, m.a.createElement(Rc, _c({}, e, {
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), m.a.createElement(Da, null), m.a.createElement(Kr, {
					className: kc.a.search
				})), m.a.createElement(Ac, null, m.a.createElement(mo, {
					className: kc.a.quickLinks
				}))),
				Fc = e => m.a.createElement("div", {
					className: kc.a.layout
				}, m.a.createElement(Rc, _c({}, e, {
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), m.a.createElement("div", {
					className: kc.a.searchContainer
				}, m.a.createElement(Kr, {
					className: kc.a.search
				}))), m.a.createElement(Ac, null));
			var Dc = Tc(Object(u.b)(Nc, e => ({
					onReloadFrontpage: () => e(Object(en.x)(!0))
				}))((function(e) {
					let t;
					return t = e.isLoggedIn ? Lc : Fc, m.a.createElement(Ic, {
						"data-redditstyle": !0,
						className: Object(g.a)(kc.a.container, e.className, {
							[kc.a.bladeIsOpen]: e.isBladeOpen
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						language: e.language,
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isResponsiveSettingsEnabled && m.a.createElement(to, {
						className: kc.a.MwebResponsiveHeader
					}))
				}))),
				Bc = s("./src/reddit/components/LightboxHeader/index.tsx"),
				Uc = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Hc = s("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Gc = s.n(Hc);
			const qc = Object(u.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(O.j)())
			}));
			var Wc = k.a.wrapped(qc((function(e) {
					return m.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, m.a.createElement("div", {
						className: Gc.a.title
					}, m.a.createElement(ta, {
						className: Gc.a.listHeader
					}, m.a.createElement(Ct.c, null, "My Communities")), m.a.createElement("div", {
						className: Gc.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, m.a.createElement(D.a, {
						className: Gc.a.icon
					}))), m.a.createElement(ka, null))
				})), "Component", Gc.a),
				Vc = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Qc = s("./src/reddit/actions/toaster.ts");
			const zc = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Zc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, H.actionInfo(t), {
						reason: "primary"
					})
				}),
				Kc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, H.actionInfo(t), {
						reason: "secondary"
					})
				});
			var Yc = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Jc = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Xc = s("./src/reddit/models/Toast/index.ts"),
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
				const t = pn.a;
				switch (e.kind) {
					case Xc.b.Error:
					case Xc.b.AuthError:
						return t.warning;
					case Xc.b.SuccessCommunity:
						return t.op;
					case Xc.b.SuccessCommunityGreen:
					case Xc.b.SuccessMod:
						return t.approved;
					case Xc.b.EuCookiePolicy:
					case Xc.b.UappBanner:
					case Xc.b.Undo:
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
			const od = k.a.wrapped(rd, "PlainBread", td.a);
			var id = e => m.a.createElement(od, sd({}, e, {
					style: Object.assign({}, e.style || {}, {
						"--Toaster-indicatorColor": ad(e)
					})
				})),
				cd = s("./src/reddit/components/Toaster/StyledComponents.m.less"),
				dd = s.n(cd);
			const ld = k.a.span("Text", dd.a);
			var md = s("./src/reddit/components/Toaster/index.m.less"),
				ud = s.n(md);
			const {
				fbt: pd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), hd = k.a.wrapped(Yc.a, "AuthErrorToastIcon", ud.a), bd = k.a.wrapped(gt.f, "AuthErrorToastPrimaryButton", ud.a);
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
				Pd = s("./src/lib/permanentCookieOptions.ts"),
				vd = s("./src/reddit/controls/Link/index.tsx"),
				xd = s("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				yd = s.n(xd);
			const {
				fbt: Ed
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Od = k.a.div("Icon", yd.a), wd = () => m.a.createElement(Od, {
				style: {
					backgroundImage: "url(".concat(_.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), jd = k.a.wrapped(gt.f, "PrimaryButton", yd.a), Sd = k.a.wrapped(id, "Bread", yd.a);
			class Md extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Be.a.set(Ht.b, Cd.b.toString(), Object(Pd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Sd, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, m.a.createElement(wd, null), m.a.createElement(ld, null, Ed._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", m.a.createElement(vd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Ed._("Learn More", null, {
						hk: "1fsN6Z"
					})), "."), m.a.createElement(jd, {
						type: "submit"
					}, Ed._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var kd, _d = Md;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(kd || (kd = {}));
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
			const Ad = k.a.div("Container", Td.a),
				Ld = k.a.img("SideImage", Td.a),
				Fd = k.a.div("Main", Td.a),
				Dd = k.a.div("SubTitle", Td.a),
				Bd = Id.c,
				Ud = k.a.wrapped(gt.g, "PrimaryLinkButton", Td.a),
				Hd = k.a.wrapped(D.a, "CloseIcon", Td.a);
			class Gd extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Zc(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(zc(this.props.name))
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
					return m.a.createElement(Ad, {
						key: t,
						style: Object.assign({}, a, {
							transform: "\n            translateY(".concat(a.y, "px)\n            scale(").concat(a.x, ", ").concat(a.x, ")\n          ")
						})
					}, m.a.createElement(Hd, {
						onClick: this.props.onClose
					}), m.a.createElement(Ld, {
						srcSet: s
					}), m.a.createElement(Fd, null, m.a.createElement(Dd, null, r), m.a.createElement(Id.d, null, o), m.a.createElement(Bd, null, e), m.a.createElement(Ud, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, n.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const qd = Object(u.b)(null, e => ({
					onSignup: () => e(Object(uo.f)())
				}))(Object($.c)(Gd)),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Jd = k.a.div("Icon", Kd.a), Xd = () => m.a.createElement(Jd, {
				style: {
					backgroundImage: "url(".concat(_.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), $d = k.a.wrapped(gt.f, "PrimaryButton", Kd.a), el = k.a.wrapped(id, "Bread", Kd.a);
			class tl extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Be.a.set(Ht.i, zd(Qd), Object(Pd.a)(10)), this.props.onClose()
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
					}, m.a.createElement(Xd, null), m.a.createElement(ld, null, Yd._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Yd._param("=User Agreement", m.a.createElement(vd.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Yd._("User Agreement", null, {
						hk: "XS57W"
					}))), Yd._param("=Privacy Policy", m.a.createElement(vd.a, {
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
					opacity: Object(M.spring)(0),
					x: Object(M.spring)(.6),
					y: Object(M.spring)(80, rl)
				},
				cl = k.a.wrapped(Yc.a, "SnooFacepalm", ud.a),
				dl = k.a.wrapped(Jc.a, "SnooHappy", ud.a),
				ll = k.a.wrapped(on.b, "SubredditIcon", ud.a),
				ml = k.a.div("Container", ud.a),
				ul = k.a.wrapped(D.a, "Close", ud.a),
				pl = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(ul, nl({
					className: "CloseIcon"
				}, e))),
				hl = k.a.wrapped(id, "Bread", ud.a),
				bl = Object(b.c)({
					subredditIcon: $c.c,
					toastSlices: e => e.toaster
				}),
				gl = Object(u.b)(bl, e => ({
					dismissToast: t => () => e(Object(Qc.f)(t)),
					onButtonClick: (t, s) => () => {
						e(t), e(Object(Qc.f)(s))
					}
				}));
			class fl extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Cl(e, this.props.toastSlices), this.getWillEnterStyles = () => ol, this.getWillLeaveStyles = () => il
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(M.TransitionMotion, {
						defaultStyles: al,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(ml, null, e.map(e => {
						const t = e.data,
							s = Object.assign({}, e.style, {
								transform: "\n                  translateY(".concat(e.style.y, "px)\n                  scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n                ")
							});
						if (t.kind === Xc.b.Custom && void 0 !== t.customToastType) {
							const n = vl[t.customToastType];
							return m.a.createElement(n, {
								key: e.key,
								toast: t,
								style: s,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Xc.b.UappBanner) return m.a.createElement(sl, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Xc.b.EuCookiePolicy) return m.a.createElement(_d, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Xc.b.AuthError) return m.a.createElement(fd, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						const n = t.kind === Xc.b.Modal ? gt.f : gt.n,
							a = t.kind === Xc.b.Modal ? gt.i : gt.n;
						return m.a.createElement(hl, {
							className: t.kind === Xc.b.Modal ? ud.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(zc(t.name)) : void 0,
							style: s
						}, m.a.createElement("div", {
							className: ud.a.ContentWrapper
						}, Pl(t, this.props.subredditIcon), m.a.createElement(ld, null, t.text)), m.a.createElement("div", {
							className: ud.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(n, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Zc(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(a, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Kc(t.name))
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
							opacity: Object(M.spring)(1),
							x: Object(M.spring)(1, rl),
							y: Object(M.spring)(0, rl)
						}
					}))
				},
				Pl = (e, t) => {
					switch (e.kind) {
						case Xc.b.Error:
							return m.a.createElement(cl, null);
						case Xc.b.SuccessCommunity:
						case Xc.b.SuccessCommunityGreen:
							return m.a.createElement(dl, null);
						case Xc.b.SuccessMod:
							return m.a.createElement(ll, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				vl = {
					[Xc.a.subscribeCap]: e => m.a.createElement(qd, Rd({
						name: kd.LoggedOutMaxSubscriptions,
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
			var xl = gl(Object($.c)(fl)),
				yl = s("./src/reddit/featureFlags/profileCollections.ts"),
				El = s("./src/reddit/helpers/trackers/banners.ts"),
				Ol = s("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				wl = s.n(Ol);
			var jl = k.a.div("Wrapper", wl.a),
				Sl = s("./src/reddit/components/AlertBanner/index.m.less"),
				Ml = s.n(Sl);
			const {
				fbt: kl
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _l = () => m.a.createElement(jl, {
				className: Object(g.a)(Ml.a.wrapper, Ml.a.suspended)
			}, m.a.createElement("span", null, kl._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), m.a.createElement("a", {
				className: Ml.a.underlineLink,
				href: "https://www.reddithelp.com/en/node/851"
			}, kl._("Learn more", null, {
				hk: "1OTc8q"
			}))), Il = () => m.a.createElement(jl, {
				className: Object(g.a)(Ml.a.wrapper, Ml.a.fpr)
			}, m.a.createElement("span", null, kl._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: Ml.a.underlineLink,
				href: "https://www.reddithelp.com/en/categories/using-reddit/your-reddit-account/my-account-was-disabled"
			}, kl._("Learn more", null, {
				hk: "1OTc8q"
			}))), Nl = e => {
				let {
					updateLink: t,
					onClickOldReddit: s
				} = e;
				return m.a.createElement(jl, {
					className: Object(g.a)(Ml.a.wrapper, Ml.a.deprecated)
				}, m.a.createElement("span", null, kl._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [kl._param("update your browser", m.a.createElement(Tl, {
					link: t
				}, kl._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, kl._("If you do not update your browser, we suggest you visit {old reddit} .", [kl._param("old reddit", m.a.createElement("a", {
					className: Ml.a.underlineLink,
					href: _.a.oldRedditUrl,
					onClick: s
				}, kl._("old reddit", null, {
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
					className: Ml.a.underlineLink,
					href: s
				}, t) : m.a.createElement("span", null, t)
			};
			class Rl extends m.a.PureComponent {
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
					return e && e.isDeprecated ? m.a.createElement(Nl, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Il, null) : s ? m.a.createElement(_l, null) : null
				}
			}
			var Al = Object($.c)(Rl),
				Ll = s("./src/reddit/components/AlertBanner/heights.ts"),
				Fl = s("./src/reddit/components/PopupPortal/index.tsx"),
				Dl = s("./src/reddit/constants/componentSizes.ts"),
				Bl = s("./src/reddit/constants/elementIds.ts"),
				Ul = s("./src/reddit/constants/posts.ts"),
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
			s.d(t, "a", (function() {
				return em
			}));
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
					const a = Object(ne.a)(Object.assign({
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
				tm = Object(Ql.a)(Uc.a.EmailCollectionBannerId),
				sm = Object(u.b)(() => Object(b.c)({
					currentPage: Dt.b,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(U.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: wt.s,
					language: e => e.user.language,
					isLoggedIn: wt.G,
					isSubscriptionsPinned: Ra.b,
					isSuspended: wt.K,
					isFPR: wt.E,
					posts: zl.P,
					profileCollectionsEnabled: yl.a,
					showEmailCollectionBanner: e => !Object(kn.I)(Object(Dt.b)(e)) && tm(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onUnpinSubscriptions: () => e(Object(O.j)())
				})),
				nm = (e, t) => !(!e.state || !e.state[R.a.IsOverlay] || t === e);
			class am extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.resizeHandler = d()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Dl.l && this.props.onUnpinSubscriptions()
					}, f.G), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: s
						} = this.props;
						if (Object(kn.w)(e)) {
							const n = e && e.urlParams && e.urlParams.partialPostId,
								a = "".concat(f.xb.Post, "_").concat(n),
								r = t && n && t[a],
								o = r && r.belongsTo.type === Ul.a.PROFILE;
							return !(!r || !Object(Wl.a)(r) || o && !s)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(U.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						location: t
					} = this.props, s = t.state && t.state[R.a.IsOverlay], n = Object(y.a)(this.previousLocation, e.location), a = Object(y.a)(this.previousLocation, this.props.location), r = s ? this.previousPage : this.props.currentPage;
					if (r) {
						const {
							meta: t,
							urlParams: s
						} = r, n = t && (t.name === f.Ab.INDEX || t.name === f.Ab.SUBREDDIT && s.subredditName === A.b.Popular), a = Object(U.c)(this.props.frontpageSignupVariant), o = Object(U.c)(e.frontpageSignupVariant);
						n || a || !o ? a && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || n || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const o = nm(e.location, this.previousLocation);
					v.a.write(() => {
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
					} = this.state, P = this.context, v = nm(u, this.previousLocation);
					u.state && u.state[R.a.IsOverlay] && !v ? u.state[R.a.IsOverlay] = !1 : u.state && (this.previousLocation === u || u.state[R.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[R.a.CloseLocation] && this.previousLocation.state[R.a.CloseLocation] === u.state[R.a.CloseLocation] ? u.state[R.a.CloseLocation] = Object.assign({}, this.previousLocation, {
						state: i()(this.previousLocation.state, R.a.CloseLocation)
					}) : u.state[R.a.CloseLocation] = this.previousLocation);
					const x = Object(y.a)(this.previousLocation, u),
						E = v || x ? this.previousLocation : u,
						O = v || x ? this.previousPage : e,
						j = !(!(O && O.meta && O.meta.name === f.Ab.SEARCH_RESULTS && O && O.queryParams) || O.queryParams[L.p]),
						S = !(!O || !O.meta || O.meta.name !== f.Ab.MODERATION_PAGES),
						M = Object(kn.w)(O),
						k = this.getIsPostCollection(),
						_ = g && !C;
					return s ? n.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(Gl.a.Provider, {
						value: d
					}, m.a.createElement(kn.a.Provider, {
						value: O
					}, m.a.createElement(Ba.c, {
						isOverlayOpen: v
					}, m.a.createElement(Vc.a, {
						forceRedditTheme: j
					}, g && m.a.createElement(Fe, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(rm, {
						browserInfo: P,
						isFPR: a,
						isInline: _,
						isSuspended: c
					})), m.a.createElement(Hl.a.Provider, {
						value: !1
					}, m.a.createElement(Vc.a, {
						forceRedditTheme: j || S,
						isCommentsPage: M
					}, m.a.createElement(om, {
						frontpageSignupVariant: t,
						isCommentsPage: M,
						isInline: _,
						isLoggedIn: r,
						isSubscriptionsPinned: o,
						location: E,
						overlayIsOpen: v,
						page: O,
						routes: h,
						showEmailCollectionBanner: b,
						browserInfo: P,
						showFPR: a,
						showSuspended: c
					}))))), m.a.createElement(kn.a.Provider, {
						value: e
					}, v && m.a.createElement(Hl.a.Provider, {
						value: !0
					}, m.a.createElement(Vc.a, {
						isOverlay: !0
					}, m.a.createElement(im, {
						isPostCollection: k,
						location: u,
						onClickOutsideOverlay: p,
						page: e,
						routes: h,
						showEmailCollectionBanner: b,
						browserInfo: P,
						showFPR: a,
						showSuspended: c
					}))), m.a.createElement(Vc.a, null, m.a.createElement(l.Fragment, null, m.a.createElement("div", {
						id: Fl.a,
						className: Kl.a.popupContainer
					}), m.a.createElement(xl, null), b && m.a.createElement(w.a, null), m.a.createElement(Zt, null), m.a.createElement(Xs, null)))))
				}
			}
			am.contextType = P.a;
			const rm = Object($.c)(e => {
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
					return m.a.createElement(l.Fragment, null, m.a.createElement(Al, r), m.a.createElement(Dc, {
						className: Object(g.a)(Kl.a.header, Object(Ll.b)(Kl.a, r), {
							[Kl.a.inline]: n
						})
					}))
				}),
				om = Object($.c)(class extends m.a.Component {
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
							className: Object(g.a)(Object(Ll.b)(Kl.a, this.props), {
								[Kl.a.withUpsell]: !!e,
								[Kl.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && m.a.createElement(Wc, {
							className: Object(g.a)(Kl.a.pinnedSubscriptions, Object(Ll.b)(Kl.a, this.props)),
							"data-redditstyle": !0
						}), m.a.createElement(p.f, {
							location: t
						}, s), c && m.a.createElement("div", {
							className: Object(g.a)(Kl.a.bottomSpacer, Object(Ll.a)(Kl.a, this.props))
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
						if (this.mouseDownInWrapper && Object(E.a)(e) && 0 === e.button && e.target === this.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[R.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = ql.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(x.a).focus()
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
					} = this.props, n = !(!t || !t.meta || t.meta.name === f.Ab.SUBREDDIT_CREATION || t.meta.name === f.Ab.PUBLIC_ACCESS_NETWORK), a = e;
					return m.a.createElement($l, {
						className: Object(g.a)(Object(Ll.b)(Kl.a, this.props), {
							[Kl.a.mIsCommentsLightbox]: n,
							[Kl.a.mIsLargeCommentsLightbox]: a
						})
					}, n && m.a.createElement(em, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(g.a)(Kl.a.mTopBannerAdjustments, Object(Ll.b)(Kl.a, this.props), {
							[Kl.a.mIsLargeCommentsLightbox]: a
						}),
						tabIndex: -1
					}, m.a.createElement(Bc.a, {
						page: t
					})), m.a.createElement("div", {
						className: Object(g.a)(Kl.a.overlayWrapper, Object(Ll.b)(Kl.a, this.props))
					}, m.a.createElement("div", {
						className: Object(g.a)(Kl.a.overlayScrollContainer, {
							[Kl.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Bl.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, m.a.createElement(p.f, null, s), m.a.createElement("div", {
						className: Object(g.a)(Kl.a.bottomSpacer, Object(Ll.a)(Kl.a, this.props))
					}))))
				}
			}
			t.b = sm(Object($.c)(am))
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
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), s.e("CoinsPurchaseModal~PennyPurchaseModal"), s.e("CoinsPurchaseModal")]).then(s.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(r.c)()])).then(e => e[0].default),
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
				subtext: "_1K7tfdKlu_H-Eljz3TrNc8",
				buttonSubtext: "_2Mm_ve0iAKMLDXgbbvVmSD",
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
				E = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				O = s("./src/reddit/icons/fonts/Text/index.tsx"),
				w = s("./src/reddit/icons/svgs/Close/index.tsx"),
				j = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/selectors/experiments/categories.ts"),
				k = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/components/LightboxHeader/index.m.less"),
				I = s.n(_);
			const N = Object(o.c)({
					isInCategoriesExperiment: M.a,
					post: k.m
				}),
				T = Object(r.b)(N, (e, t) => {
					let {
						sendEvent: s
					} = t;
					return {
						close: () => {
							e(Object(l.d)(s, !0))
						},
						toggleVote: (t, s) => e(s === S.a.upvoted ? Object(d.cb)(t) : Object(d.x)(t))
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
					} = this.props, d = A[o && o.media ? o.media.type : j.n.EMBED], l = !o && r && r.meta && r.meta.name === c.Ab.META_MEMBERSHIP_PAYWALL_PAGE;
					return a.a.createElement("div", {
						className: Object(i.a)(I.a.container, e, {
							[I.a.isCollection]: o && Object(f.a)(o)
						})
					}, a.a.createElement("div", {
						className: I.a.postDetails
					}, o && a.a.createElement(n.Fragment, null, a.a.createElement(m.a, {
						className: I.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: o,
						onVoteClick: s,
						redditStyle: !0
					}), a.a.createElement(d, {
						className: I.a.mediaIcon
					}), a.a.createElement(p.c, {
						className: I.a.postTitle,
						post: o,
						size: p.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: b.a.lightboxHeaderText,
						titleLinkClassName: I.a.postTitleLink,
						showCategoryTag: !0
					}), a.a.createElement(u.a, {
						post: o,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), l && r && r.urlParams.subredditName && a.a.createElement("div", {
						className: I.a.membershipPaywallTitle
					}, Object(P.c)("r/".concat(Object(P.b)("communityName", r.urlParams.subredditName), " Special Membership")))), a.a.createElement("div", {
						className: I.a.actions
					}, a.a.createElement(g.n, {
						className: I.a.close,
						onClick: t || this.closeLightbox,
						title: Object(P.c)("Close"),
						"aria-label": Object(P.c)("Close")
					}, a.a.createElement(w.a, null), a.a.createElement("span", {
						className: I.a.closeText
					}, a.a.createElement(C.c, null, "Close")))))
				}
			}
			const A = {
				[j.n.GIFVIDEO]: x.a,
				[j.n.IMAGE]: E.a,
				[j.n.TEXT]: O.a,
				[j.n.RTJSON]: O.a,
				[j.n.VIDEO]: v.a,
				[j.n.EMBED]: y.a,
				[j.n.LIVEVIDEO]: v.a
			};
			t.a = Object(h.c)(T(R))
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
				getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
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
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), s.e("PremiumPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(r.c)()])).then(e => e[0].default),
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
				if (Object(p.j)(e) || Object(b.ab)(e)) return;
				const s = C(e, t);
				if (!s) return;
				const n = Object(h.D)(e, s);
				if (!n) return;
				if (Object(b.Z)(e, {
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
				return Object(b.gb)(e).nightmode
			}, (e, t) => {
				if (!Object(b.gb)(e).hideNSFW) return !0;
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
				i = e => t => {
					const s = e.slot.getSlotId().getDomId(),
						r = -1 !== s.indexOf(n.c.ABOVE_THE_FOLD) ? n.c.ABOVE_THE_FOLD : n.c.BELOW_THE_FOLD,
						o = document.querySelector("#" + s);
					let i, c;
					if (o && (i = n.g.HOUSE_AD, -1 !== o.innerHTML.indexOf("google_ads_iframe") && (i = n.g.PROGRAMMATIC_AD), o.children && o.children.length > 0)) {
						const e = o.children[0];
						c = "".concat(e.offsetWidth, "x").concat(e.offsetHeight)
					}
					return Object.assign({
						source: "post",
						action: "view",
						noun: "programmatic_ad"
					}, a.defaults(t), {
						subreddit: a.subreddit(t),
						programmatic: {
							adUnit: c ? "DESKTOP ".concat(c, " ").concat(r) : "DESKTOP ".concat(r),
							count: 1,
							type: i
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
				P = s("./src/lib/filterQueryParams/index.ts"),
				v = s("./src/lib/getParsedUserAgent/index.ts"),
				x = s("./src/lib/initializeClient/index.tsx"),
				y = s("./src/lib/matchRoute/index.ts"),
				E = s("./src/lib/performance.js"),
				O = s("./src/lib/safeJSONParse/index.ts"),
				w = s("./src/reddit/customMiddleware/gqlContext.ts"),
				j = s("./src/reduxMiddleware/apiContext.ts"),
				S = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				k = s("./src/reddit/actions/apiRequestHeaders.ts"),
				_ = s("./src/reddit/actions/chat/unreadCount.ts"),
				I = s("./src/reddit/actions/emailCollection/index.ts"),
				N = s("./src/lib/makeApiRequest/index.ts"),
				T = s("./src/lib/omitHeaders/index.ts"),
				R = s("./src/reddit/constants/headers.ts"),
				A = s("./src/reddit/actions/toaster.ts");
			! function(e) {
				e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
			}(n || (n = {}));
			var L = s("./src/reddit/models/Toast/index.ts");
			const F = e => async (t, s, a) => {
				let {
					apiContext: r
				} = a;
				const o = await ((e, t) => Object(N.b)(Object(T.a)(e, [R.a]), {
					method: f.cb.POST,
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
				B = s("./src/reddit/actions/multireddit/index.ts"),
				U = s("./src/reddit/actions/notifications/loader.ts"),
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
					shouldEnable: e => Object(ee.b)(e) || Object(te.D)(e)
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
				region: le.i
			});
			class ue extends u.a.Component {
				constructor(e) {
					super(e), Object(ie.f)({
						limitDataProcessing: "CA" === this.props.region,
						onRequest: () => this.props.sendEvent(Object(de.b)()),
						onAdView: e => {
							Math.random() <= i.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(de.c)(e))
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
				Pe = s("./node_modules/react-shortcuts/lib/index.js"),
				ve = s("./src/reddit/constants/shortcuts.ts");
			var xe = s("./src/reddit/selectors/structuredStyles.ts");
			const ye = {
					[ve.c.OpenIndex]: {
						osx: ["cmd + ?", "?"],
						windows: ["ctrl + ?", "?"],
						linux: ["ctrl + ?", "?"],
						other: ["ctrl + ?", "?"]
					},
					[ve.c.Close]: "esc",
					[ve.c.Konami]: "up up down down left right left right b a enter"
				},
				Ee = {
					[ve.c.Upvote]: "a",
					[ve.c.Downvote]: "z",
					[ve.c.Save]: "s",
					[ve.c.Hide]: "h",
					[ve.c.OpenLink]: "l"
				},
				Oe = {
					[ve.c.CollapseOrLoad]: "enter",
					[ve.c.NextComment]: "j",
					[ve.c.PrevComment]: "k",
					[ve.c.Reply]: "r"
				};
			var we = {
					[ve.d.CommentPage]: Object.assign({}, ye, Ee, Oe),
					[ve.d.Global]: Object.assign({}, ye),
					[ve.d.Lightbox]: Object.assign({}, ye, Ee, Oe, {
						[ve.c.NextPost]: "n",
						[ve.c.PrevPost]: "p"
					}),
					[ve.d.Listing]: Object.assign({}, ye, Ee, {
						[ve.c.OpenLightbox]: "enter",
						[ve.c.NextPost]: "j",
						[ve.c.PrevPost]: "k",
						[ve.c.Expando]: "x",
						[ve.c.NewPost]: "c",
						Reserved: ["n", "p", "r"]
					}),
					[ve.d.Modqueue]: Object.assign({}, ye, Ee, {
						[ve.c.OpenLightbox]: "enter",
						[ve.c.NextPost]: "j",
						[ve.c.PrevPost]: "k",
						[ve.c.Expando]: "x",
						[ve.c.NewPost]: "c"
					})
				},
				je = s("./src/reddit/actions/shortcuts.ts");
			const Se = {
					[ve.c.Close]: je.d,
					[ve.c.CollapseOrLoad]: je.e,
					[ve.c.Downvote]: je.f,
					[ve.c.Expando]: je.g,
					[ve.c.Hide]: je.h,
					[ve.c.NextComment]: je.j,
					[ve.c.NextPost]: je.k,
					[ve.c.NewPost]: je.i,
					[ve.c.OpenIndex]: je.l,
					[ve.c.OpenLightbox]: je.m,
					[ve.c.OpenLink]: je.n,
					[ve.c.PrevComment]: je.o,
					[ve.c.PrevPost]: je.p,
					[ve.c.Reply]: je.q,
					[ve.c.Save]: je.s,
					[ve.c.Upvote]: je.t,
					[ve.c.Konami]: null
				},
				Me = (e, t) => (s, n) => {
					if (!document.activeElement) return;
					const a = document.activeElement.nodeName;
					if ("INPUT" === a || "TEXTAREA" === a || "BUTTON" === a && ve.a.includes(n.which)) return;
					const r = Se[s];
					r && e(r(t))
				};
			var ke = s("./src/reddit/components/ShortcutWrapper/index.m.less"),
				_e = s.n(ke);
			const Ie = e => {
					let {
						children: t
					} = e;
					return u.a.createElement("div", {
						className: _e.a.shortcutDiv,
						id: ve.b,
						tabIndex: -1
					}, u.a.Children.only(t))
				},
				Ne = new Pe.ShortcutManager(we),
				Te = Object(K.c)({
					isBladeOpen: xe.j,
					namespace: e => e.activeModalId ? ve.d.Global : e.shortcuts.namespace
				}),
				Re = Object(z.b)(Te, e => ({
					dispatchAction: t => e(t)
				}));
			class Ae extends m.Component {
				getChildContext() {
					return {
						shortcuts: Ne
					}
				}
				componentDidMount() {
					const e = document.getElementById(ve.b);
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
					return u.a.createElement(Pe.Shortcuts, {
						handler: s ? ge.a : Me(t, a),
						isolate: !0,
						name: n
					}, u.a.createElement(Ie, null, e))
				}
			}
			Ae.childContextTypes = {
				shortcuts: Ce.a.object.isRequired
			};
			var Le = Re(Object(ce.c)(Ae)),
				Fe = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				De = s("./src/reddit/components/Header/Sparse.tsx"),
				Be = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Ue = s("./src/reddit/contexts/InsideOverlay.tsx"),
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
			}), Ze = Object(z.b)(ze)(e => u.a.createElement(Ue.a.Provider, {
				value: !1
			}, u.a.createElement(Be.b, {
				subredditName: ""
			}, u.a.createElement("div", null, u.a.createElement(De.a, null), u.a.createElement("div", {
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
			var Ke = s("./src/reddit/selectors/theme.ts");

			function Ye() {
				return (Ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Je = Object(K.c)({
					theme: Ke.b
				}),
				Xe = Object(z.b)(Je, {})(e => {
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
			var $e = e => {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: s
					} = e;
					return u.a.createElement(ce.a, null, u.a.createElement(Xe, null, u.a.createElement(pe, null), u.a.createElement(oe, null), u.a.createElement(Le, null, u.a.createElement(t, null, u.a.createElement(Z.d, {
						component: et(s)
					})))))
				}
				return u.a.createElement(Ze, {
					error: e.error
				})
			};
			const et = e => t => u.a.createElement(he.b, Ye({
				routes: e
			}, t));
			var tt = s("./src/reddit/constants/localStorage.ts"),
				st = s("./node_modules/lodash/throttle.js"),
				nt = s.n(st),
				at = s("./src/reddit/helpers/localStorage/index.ts");
			const rt = 1e3;
			class ot extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = nt()(() => Object(at.O)(this.props.storageKey, this.props.value), rt)
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
			ot.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const it = Object(K.a)(te.G, e => ({
				storageKey: tt.p,
				value: {},
				enabled: !e
			}));
			var ct = Object(z.b)(it)(ot);
			var dt = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(ct, null)),
				lt = s("./src/reddit/constants/history.ts"),
				mt = s("./src/reddit/constants/jsapiEvents.ts"),
				ut = s("./src/reddit/constants/parameters.ts"),
				pt = s("./src/reddit/constants/screenWidths.ts"),
				ht = s("./src/reddit/contexts/AdminEvents.ts"),
				bt = s("./src/reddit/contexts/ApiContext.tsx"),
				gt = s("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				ft = s("./node_modules/brcast/dist/brcast.es.js"),
				Ct = s("./src/telemetry/helpers/sendEvent.ts");
			var Pt = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(ft.a)([]);
					return {
						broadcaster: t,
						middleware: s => {
							const n = s.getState();
							return (Object(ee.b)(n) || Object(te.D)(n)) && (e = !0, Object(Ct.c)(t)), n => a => {
								const r = n(a),
									o = s.getState();
								if (!Object(ee.b)(o)) {
									const s = Object(te.D)(o);
									e && !s ? (e = !1, Object(Ct.c)(void 0), t.setState([])) : s && !e && (t.setState([]), Object(Ct.c)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(ft.a)([]),
					middleware: () => e => t => e(t)
				}),
				vt = s("./node_modules/lodash/pick.js"),
				xt = s.n(vt),
				yt = s("./src/reddit/actions/header.ts"),
				Et = s("./src/reddit/actions/preferences.ts"),
				Ot = s("./src/reddit/constants/cookie.ts"),
				wt = s("./src/reddit/constants/preferences.ts");
			const jt = new Set([Et.f, Et.h, V.b, Q.b, Et.c, Et.n, yt.d, yt.e, Et.q]);
			var St = e => t => s => {
					const n = t(s);
					if (jt.has(s.type)) {
						const t = e.getState().user,
							s = {
								prefs: xt()(t.prefs, ["hamburgerTray", "globalTheme", "featuresViewedHistory", "collapsedTraySections", "nightmode", "subscriptionsPinned", wt.b, wt.d, wt.e]),
								language: t.language
							},
							n = new Date;
						n.setFullYear(n.getFullYear() + 2), l.a.set(Ot.j, btoa(JSON.stringify(s)), {
							expires: n,
							domain: i.a.cookieDomain
						})
					}
					return n
				},
				Mt = s("./src/lib/fastdom/index.ts"),
				kt = s("./src/reddit/actions/redditEmbed.ts"),
				_t = s("./src/reddit/actions/tabBadging.ts"),
				It = s("./src/reddit/helpers/tabBadging/index.ts"),
				Nt = s("./src/reddit/selectors/chat.ts"),
				Tt = s("./src/reddit/selectors/experiments/badging.ts");
			const Rt = (e, t) => {
				e <= 0 ? Mt.a.write(() => {
					Object(It.b)(!1), window.document.title = t
				}) : Mt.a.write(() => {
					Object(It.b)(), window.document.title = "(".concat(e, ") ").concat(t)
				})
			};
			var At = e => {
					const t = window.document.title;
					return s => n => {
						switch (n.type) {
							case _.a.SYNC:
							case _.a.REQUEST_SUCCESS: {
								const s = e.getState(),
									{
										dispatch: a
									} = e;
								if (!Object(Tt.a)(s)) break;
								const r = Object(Nt.a)(s),
									o = n.payload && n.payload.basicChannelCount,
									i = Object(te.B)(s),
									c = o + i;
								if (Rt(c, t), a(Object(_t.b)({
										hasUnreadMessages: !!c
									})), r !== o) {
									const e = {
										basicChannelCount: o,
										inboxCount: i
									};
									Object(It.c)(e)
								}
								break
							}
							case kt.b: {
								const s = e.getState(),
									{
										dispatch: a
									} = e;
								if (!Object(Tt.a)(s)) break;
								const r = Object(te.B)(s),
									o = n.payload.account && n.payload.account.inboxCount,
									i = Object(Nt.a)(s),
									c = o && o + i;
								if (!c) break;
								if (Rt(c, t), a(Object(_t.b)({
										hasUnreadMessages: !!c
									})), r !== o) {
									const e = {
										basicChannelCount: i,
										inboxCount: o
									};
									Object(It.c)(e)
								}
							}
						}
						return s(n)
					}
				},
				Lt = s("./src/server/helpers/seoMetadata.tsx");
			var Ft = "undefined" != typeof document ? e => t => s => {
				const n = t(s);
				if (s.type === q.e) {
					const t = e.getState(),
						n = Object(Tt.a)(t),
						{
							meta: a
						} = s.payload;
					n ? ((e, t) => {
						const s = Object(te.B)(e) || 0,
							n = Object(Nt.a)(e);
						Rt(n + s, t)
					})(t, a.title) : Mt.a.write(() => {
						document.title = a.title, Object(Lt.b)(t, document)
					})
				}
				return n
			} : () => e => t => e(t);
			const Dt = 5 * f.db;
			var Bt = e => {
					const t = nt()(() => {
						const t = e.getState().user.session,
							s = new Date(t.expires),
							n = new Date;
						s.getTime() - n.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(W.g())
					}, Dt);
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
				Ut = s("./src/reddit/actions/frontpage.ts"),
				Ht = s("./src/reddit/actions/page.ts"),
				Gt = s("./src/reddit/actions/pages/profileComments.ts"),
				qt = s("./src/reddit/actions/pages/profileOverview.ts"),
				Wt = s("./src/reddit/actions/pages/profilePosts.ts"),
				Vt = s("./src/reddit/actions/pages/search.ts"),
				Qt = s("./src/reddit/actions/pages/subreddit.ts"),
				zt = s("./src/reddit/actions/search.ts"),
				Zt = s("./src/reddit/actions/subreddit.ts"),
				Kt = s("./src/reddit/actions/tracking.ts"),
				Yt = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				Jt = s("./src/reddit/helpers/history/index.ts"),
				Xt = s("./src/reddit/helpers/trackers/commentList.ts"),
				$t = s("./src/reddit/helpers/trackers/postList.ts"),
				es = s("./src/reddit/helpers/trackers/screenview.ts"),
				ts = s("./src/reddit/selectors/platform.ts"),
				ss = s("./src/reddit/selectors/subreddit.ts"),
				ns = s("./src/reddit/helpers/routeKey/index.ts");
			var as = e => t => s => {
					const n = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(Kt.c({
							routeKey: t
						}))
					};
					if (s.type === q.a) {
						const n = e.getState(),
							a = (n.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							r = Object(ss.D)(n, a) || "",
							i = (n.subreddits.about[r] || {}).advertiserCategory;
						o.trigger("pageview", Object.assign({}, xt()(s.payload.location, "pathname", "search", "hash"), {
							subreddit: a,
							advertiserCategory: i
						}));
						const c = n.platform.currentPage && n.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(ns.b)(c, n, Object(Yt.a)(n));
							if (e && S.c.has(e)) {
								const t = S.c.end(e);
								!Object(ts.h)(n) && Object(Jt.b)(lt.a.IsOverlay) || Object(es.g)(c, n, M.TimerType.UserCancelled, t)
							}
						}
						const d = s.payload.routeMatch;
						if (!d) return t(s);
						const l = Object(Yt.a)(n, d),
							m = Object(ns.b)(d, n, l);
						if (!m) return t(s);
						S.c.start(m)
					}
					const a = t(s);
					switch (s.type) {
						case Ht.g:
						case qt.b:
						case qt.e:
						case Wt.e:
						case Gt.e:
						case Qt.c: {
							const {
								key: e,
								token: t
							} = s.payload;
							t || n(e);
							break
						}
						case Vt.c: {
							const {
								key: e,
								tokens: t
							} = s.payload;
							t.posts || n(e);
							break
						}
						case Ut.b:
						case Zt.i:
						case Wt.b: {
							const {
								key: t,
								postIds: a
							} = s.payload;
							n(t);
							const r = e.getState();
							if (a.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							$t.j(r, t);
							break
						}
						case Gt.b: {
							const {
								key: t,
								commentIds: a
							} = s.payload;
							if (n(t), a.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							Xt.a(r, t);
							break
						}
						case zt.c: {
							const {
								key: e
							} = s.payload;
							n(e);
							break
						}
					}
					return a
				},
				rs = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				os = s("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				is = s("./src/lib/permanentCookieOptions.ts");
			const cs = e => {
				if (!e) return;
				const t = (l.a.get(Ot.h) || "").split(",");
				if (!t.includes(e)) {
					t.unshift(e);
					const s = t.slice(0, 10).join(","),
						n = Object(is.a)();
					l.a.set(Ot.h, s, n)
				}
			};
			var ds = s("./src/reddit/layout/page/Listing/index.tsx"),
				ls = s("./src/reddit/reducers/index.ts"),
				ms = s("./src/reddit/routes/collectionCommentsPage/index.ts"),
				us = s("./src/reddit/routes/acknowledgements/index.ts"),
				ps = s("./src/reddit/routes/appeal/index.ts"),
				hs = s("./src/reddit/routes/coins/index.ts"),
				bs = s("./src/reddit/routes/coinsMobile/index.ts"),
				gs = s("./src/reddit/routes/commentsPage/index.ts");
			s("./node_modules/@loadable/component/dist/loadable.esm.js");
			var fs = [],
				Cs = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				Ps = s("./src/reddit/helpers/trackers/emailVerification.ts");
			var vs = {
					action: e => async (t, s) => {
						await t(Et.x());
						const a = s(),
							r = e.params.verificationToken,
							o = e.queryParams && e.queryParams.source;
						if (o && Object(S.a)(Object(Ps.b)(o)(a)), !Object(te.G)(a)) return Object(Cs.a)(t, a);
						const i = await t(F(r));
						i === n.Success && Object(S.a)(Object(Ps.d)()(a)), t(Object(p.c)("/?verifiedEmail=".concat(i)))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				xs = s("./src/lib/addQueryParams/index.ts");
			var ys = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							queryParams: r
						} = e;
						await t(Object(p.c)(Object(xs.a)("/", r)))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [f.p.COMMENTS_PAGE, f.p.FRONTPAGE]
				},
				Es = s("./src/reddit/routes/framedGild/index.ts"),
				Os = s("./src/reddit/routes/framedModal/index.ts"),
				ws = s("./src/reddit/routes/frontpage/index.ts"),
				js = s("./src/reddit/routes/inbox/index.ts");
			var Ss = {
					action: e => async e => {
						await e(Object(p.c)("/r/layer"))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.LAYER_REDIRECT
					},
					path: ["/layer", "/layer/"]
				},
				Ms = s("./src/reddit/routes/meta/index.ts"),
				ks = s("./src/reddit/routes/moderationPages/index.ts"),
				_s = s("./src/reddit/routes/modListing/index.ts"),
				Is = s("./src/reddit/routes/modQueue/index.ts"),
				Ns = s("./src/reddit/routes/multireddit/index.ts"),
				Ts = s("./src/reddit/routes/postCreation/constants.ts");
			const Rs = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(p.c)("/"))
				},
				chunk: f.p.EMPTY,
				exact: !0,
				meta: {
					name: f.Ab.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var As = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(Ts.b))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...Rs],
				Ls = s("./src/reddit/routes/postCreation/index.ts"),
				Fs = s("./src/reddit/routes/postDraft/index.ts"),
				Ds = s("./src/reddit/routes/premium/index.ts"),
				Bs = s("./src/reddit/routes/profileComments/index.ts"),
				Us = s("./src/reddit/endpoints/me/index.ts");
			var Hs = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							rest: r
						} = e.params, {
							queryParams: o
						} = e, i = await Object(Us.a)(a());
						if (!(i.ok && i.body && i.body.account)) {
							const e = s();
							return void Object(Cs.a)(t, e)
						}
						const c = i.body.account.displayText,
							d = r ? "/user/".concat(c, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(r)) : "/user/".concat(c, "/"),
							l = Object(xs.a)(d, o);
						await t(Object(p.c)(l))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				Gs = s("./src/reddit/routes/profileModSettings/index.ts"),
				qs = s("./src/reddit/routes/profileOverview/index.ts"),
				Ws = s("./src/reddit/routes/profilePosts/index.ts"),
				Vs = s("./src/reddit/routes/profilePrivate/index.ts");
			var Qs = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(n)) : "/user/".concat(s, "/"), o = Object(xs.a)(r, a);
						await t(Object(p.c)(o))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				zs = s("./src/reddit/routes/profileSnoobuilder/index.ts");
			var Zs = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/posts/").concat(n) : "/user/".concat(s, "/posts"), o = Object(xs.a)(r, a);
						t(Object(p.c)(o))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				Ks = s("./src/reddit/routes/publicAccessNetwork/index.ts"),
				Ys = s("./src/reddit/routes/report/index.ts"),
				Js = s("./src/reddit/routes/searchResults/index.ts"),
				Xs = s("./src/reddit/routes/settings/index.ts");
			var $s = [{
					action: e => async t => {
						const {
							page: s
						} = e.params, n = s && "blocked" === s ? "/settings/privacy" : "/settings/";
						await t(Object(p.c)(n))
					},
					chunk: f.p.EMPTY,
					meta: {
						name: f.Ab.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(p.c)("/settings/profile"))
					},
					chunk: f.p.EMPTY,
					meta: {
						name: f.Ab.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				en = s("./src/reddit/routes/subreddit/index.ts"),
				tn = s("./src/reddit/routes/subredditCreation/index.ts"),
				sn = s("./src/reddit/routes/subredditLeaderboard/index.ts"),
				nn = s("./src/reddit/routes/subredditWiki/index.ts"),
				an = s("./src/reddit/routes/topic/index.ts");
			var rn = [us.a, ps.a, hs.a, bs.a, Hs, Qs, Zs, ...ms.a, ...gs.a, vs, ...ws.a, Ds.a, Es.a, Os.a, Ls.a, Fs.a, ...As, ys, Ss, Ms.a, Ns.a, Is.a, _s.c, js.a, Bs.a, Gs.a, qs.a, Ws.a, zs.a, Vs.a, Ks.a, ...Xs.a, ...$s, Js.a, ...nn.a, an.a, en.a, tn.a, sn.a, ks.a, Ys.a, ...fs],
				on = s("./src/reddit/constants/experiments.ts"),
				cn = s("./src/reddit/helpers/chooseVariant/index.ts");
			var dn = s("./src/reddit/selectors/telemetry.ts");
			const ln = {
					displayDelay: 15,
					displayOnRoutes: [f.Ab.SUBREDDIT, f.Ab.COMMENTS],
					experimentName: on.V,
					experimentVariant: on.bb.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				mn = e => {
					const {
						base_url: t
					} = Object(dn.requestWithParams)(e), s = Object(ts.b)(e), n = s && s.urlParams.partialPostId, a = s && s.urlParams.subredditName;
					return Object.assign({}, t && {
						rbl: t
					}, a && {
						s: a
					}, n && {
						p: n
					})
				},
				un = e => {
					if ((((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return t.experimentOverrides[s] === n
						})(ln, e) || (e => {
							let {
								samplingRate: t,
								seed: s
							} = e;
							return !!s && 0 === Math.floor(s * t)
						})(ln)) && ((e, t) => {
							let {
								displayOnRoutes: s
							} = e;
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && s.includes(n)
						})(ln, e) && ((e, t) => {
							let {
								isSEOOnly: s
							} = e;
							return !s || t.meta.isSessionSeo
						})(ln, e) && ((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return Object(cn.c)(t, {
								experimentName: s,
								experimentEligibilitySelector: cn.a
							}) === n
						})(ln, e)) return {
						displayDelay: ln.displayDelay,
						externalVars: mn(e)
					}
				};
			var pn = s("./src/reddit/singleton/EventSystem.ts"),
				hn = s("./src/reddit/singleton/tracing/index.ts"),
				bn = s("./src/reddit/actions/global.ts");
			Object(r.e)(r.b.EntryPointStart);
			const gn = Object(j.a)({
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
						headersReceived: k.a
					},
					onBeforeRequestFactory: os.a,
					statsAppName: f.l.Redesign
				}),
				fn = Object(w.a)(gn.apiContext),
				Cn = Pt();
			let Pn;
			Object(x.a)({
				reducers: ls.a,
				routes: rn,
				apiContext: gn.apiContext,
				gqlContext: fn.gqlContext,
				appFactory: (e, t) => u.a.createElement(ht.a.Provider, {
					value: Cn.broadcaster
				}, u.a.createElement(bt.a.Provider, {
					value: {
						apiContext: gn.apiContext,
						gqlContext: fn.gqlContext
					}
				}, u.a.createElement(gt.b, null, u.a.createElement($e, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(dt, null)))),
				appName: f.l.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const s = Pn;
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
					routes: rn,
					apiContext: gn.apiContext,
					gqlContext: fn.gqlContext
				}), Cn.middleware, gn.middleware, fn.middleware, Bt, St, as, Ft, At],
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
					loading: u.a.createElement(ds.a, {
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
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || n.dispatch(Object(q.g)());
					const a = Object(te.Q)(n.getState());
					n.dispatch(Object(V.c)({
						nightmode: a
					}));
					const r = (e => e.tracing.traceId)(n.getState());
					if (r && (e => Object(cn.c)(e, {
							experimentEligibilitySelector: cn.a,
							experimentName: on.k
						}) === on.q.Enabled)(n.getState())) {
						hn.b.enableTracing(!0);
						const e = hn.b.createTraceFromId(r);
						hn.b.setParent(e)
					}
					n.dispatch(Object(q.h)(s));
					t.listen((e, t) => {
						const a = Object(y.a)(Object(c.e)(e), s);
						n.dispatch(Object(q.i)(e, t, a))
					});
					const o = n.getState(),
						{
							currentPage: d
						} = o.platform;
					if (d) {
						const e = [];
						Object(ts.i)(o) && e.push(ut.d), e.length > 0 && n.dispatch(Object(p.c)(Object(P.a)(d.url, e)))
					}
					return rs.a.initialize(), {
						localStorageData: Object(at.o)()
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
							i = Object(ss.D)(s, o) || "";
						cs(i), pn.a.publish(mt.c, r, document)
					});
					const u = l.getState(),
						p = (u.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						h = Object(ss.D)(u, p) || "",
						x = (u.subreddits.about[h] || {}).advertiserCategory;
					o.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: u.user.account ? u.user.account.id : u.user.loid.loid
						}
					}), o.trigger("pageview", {
						subreddit: p,
						advertiserCategory: x
					}), l.dispatch(Object(bn.b)({
						localStorageData: m
					})), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: o
							} = e.platform,
							i = (o.urlParams.subredditName || "").toLowerCase(),
							c = Object(ss.D)(e, i) || "";
						if (cs(c), o && o.meta) {
							const t = o.meta.name;
							if (Object(S.b)(f.l.Redesign, {
									page: t,
									type: "rum"
								}), Object(v.c)(e.meta.userAgent) && window.innerWidth > pt.b) {
								const s = Object(r.f)(d);
								E.a && E.a.timing && hn.b.isEnabled && (hn.b.recordPerformanceTimings("time_to_first_byte", E.a.timing.fetchStart, E.a.timing.responseStart), hn.b.recordPerformanceTimings("time_to_interactive", E.a.timing.fetchStart, E.a.timing.domInteractive));
								const n = [],
									a = {
										isLoggedIn: Object(te.G)(e),
										name: t,
										statsdPathsForExperiments: n
									};
								Object(r.g)(a, s)
							}
							const s = E.a.timing.domInteractive - E.a.timing.navigationStart;
							Object(es.g)(o.routeMatch, l.getState(), M.TimerType.Initial, s);
							const i = Object(C.a)(window.location.href);
							Object(O.a)(i.get(ut.u)) && l.dispatch(Object(A.e)({
								kind: L.b.SuccessCommunity,
								text: a.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), i.get(ut.v) && (l.dispatch((e => async (t, s, r) => {
								let {
									apiContext: o
								} = r;
								switch (e) {
									case n.Success:
										t(Object(A.e)({
											kind: L.b.SuccessCommunity,
											text: a.fbt._("Email verification complete", null, {
												hk: "vp6R2"
											})
										}));
										break;
									case n.AlreadyVerified:
										t(Object(A.e)({
											kind: L.b.SuccessCommunity,
											text: a.fbt._("Your email address has already been verified.", null, {
												hk: "7ro41"
											})
										}));
										break;
									case n.WrongUser:
										return void t(Object(A.e)({
											kind: L.b.Error,
											text: a.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
												hk: "1NrK5a"
											})
										}));
									default:
										t(Object(A.e)({
											kind: L.b.Error,
											text: a.fbt._("Something went wrong.", null, {
												hk: "JbBLl"
											})
										}))
								}
							})(i.get(ut.v))), history.replaceState(history.state, "", Object(P.a)(window.location.href, [ut.v])));
							let c = !1;
							if ((Object(Jt.b)(lt.a.JustLoggedIn) || i && i.get(ut.n) && Object(O.a)(i.get(ut.n))) && (l.dispatch(Object(A.e)({
									text: a.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), c = !0, Object(Jt.c)(lt.a.JustLoggedIn), history.replaceState(history.state, "", Object(P.a)(window.location.href, [ut.n]))), Object(Jt.b)(lt.a.JustLoggedOut) && (c = !0, Object(Jt.c)(lt.a.JustLoggedOut)), Object(H.b)(e), !1 !== at.y() && Object(U.a)().then(e => e.requestNotificationsPermissions).then(e => l.dispatch(e(c, !1))), t === f.Ab.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								l.dispatch(Object(B.h)({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(I.c)())
						}
						Object(te.G)(l.getState()) && l.dispatch(Object(_.d)()), Object(b.requestIdleCallback)(async () => {
							l.dispatch(Object(G.d)()), await Object(g.a)() && (e => Object(S.a)(Object.assign({}, dn.defaults(e), {
								screen: dn.screen(e),
								source: "global",
								action: "view",
								noun: "empty"
							})))(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = un(e);
								t && (await (async e => {
									return (await Object($.a)(() => s.e("UserZoomIntegration").then(s.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), n && n())
							}, n = t.listen((t, s) => {
								"POP" !== s && e()
							});
							e()
						})
					}), window.history.scrollRestoration = "manual", pn.a.attachStore(l)
				},
				raven: {
					tags: {
						project: f.l.Redesign
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
					chunk: a.p.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: a.Ab.ACKNOWLEDGEMENTS
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
					chunk: a.p.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: a.Ab.APPEAL
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
						name: a.Ab.COINS
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
						name: a.Ab.COINS_MOBILE
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
					chunk: a.p.COLLECTION_COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: a.Ab.COLLECTION_COMMENTS
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
					chunk: a.p.COMMENTS_PAGE,
					component: o,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [a.p.FRONTPAGE, a.p.SUBREDDIT]
				}),
				m = [l(a.Ab.COMMENTS, i), l(a.Ab.DUPLICATES, c), l(a.Ab.COMMENTS, d)];
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
						name: a.Ab.FRAMED_GILD
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
					importAsync: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("FramedModal")]).then(s.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
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
						name: a.Ab.FRAMED_MODAL
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Frontpage~SubredditWiki"), s.e("FrontpageSidebar"), s.e("Frontpage")]).then(s.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
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
						name: o.Ab.INDEX
					}
				}),
				h = Object.assign({}, u, {
					path: l,
					meta: {
						name: o.Ab.LISTING
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
						name: o.Ab.INBOX_PAGES
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
						name: a.Ab.META_MEMBERSHIP_PAYWALL_PAGE
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
						name: o.Ab.MODQUEUE_PAGES
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
			const c = Object.keys(i.Pb).map(e => i.Pb[e]).join("|"),
				d = e => "/".concat(e, "/about/scheduledposts"),
				l = e => "/".concat(e, "/about/eventposts"),
				m = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested);
						await r(e)(t, n, a)
					},
					chunk: i.p.MODERATION_PAGES,
					component: m,
					exact: !0,
					meta: {
						name: i.Ab.MODERATION_PAGES
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~Multireddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("Multireddit")]).then(s.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
						name: o.Ab.MULTIREDDIT
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
					chunk: a.p.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: a.Ab.POST_DRAFT
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
						name: a.Ab.PREMIUM
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
					chunk: a.p.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: a.Ab.PROFILE_COMMENTS
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
						name: a.Ab.PROFILE_MODERATION
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
					chunk: a.p.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: a.Ab.PROFILE_OVERVIEW
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("ProfilePosts")]).then(s.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
						name: a.Ab.PROFILE_POSTS
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
					chunk: o.p.PROFILE_PRIVATE,
					component: c,
					exact: !0,
					meta: {
						name: o.Ab.PROFILE_PRIVATE
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
						name: a.Ab.PROFILE_SNOOBUILDER
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
						name: a.Ab.PUBLIC_ACCESS_NETWORK
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
						name: a.Ab.REPORT
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
					chunk: a.p.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: a.Ab.SEARCH_RESULTS
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
			const d = Object.keys(o.Nb).map(e => o.Nb[e]).join("|"),
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
						name: o.Ab.SETTINGS
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
						name: o.Ab.USER_DATA_REQUEST
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("Subreddit")]).then(s.bind(null, "./src/reddit/pages/Subreddit/index.tsx")),
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
						name: o.Ab.SUBREDDIT
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
						name: a.Ab.SUBREDDIT_CREATION
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
						name: a.Ab.SUBREDDIT_LEADERBOARD
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("Frontpage~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
						name: r.Ab.SUBREDDIT_WIKI
					},
					path: d
				}, u = {
					action: e => async (t, n, a) => {
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("Frontpage~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested);
						await r(e)(t, n, a)
					},
					chunk: r.p.SUBREDDIT_WIKI,
					component: i,
					exact: !0,
					meta: {
						name: r.Ab.SUBREDDIT_WIKI
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
					chunk: a.p.TOPIC,
					component: o,
					exact: !0,
					meta: {
						name: a.Ab.TOPIC
					},
					prefetches: [a.p.COMMENTS_PAGE, a.p.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager.ts": function(e, t, s) {
			"use strict";
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
					experimentName: i.w,
					experimentEligibilitySelector: e => !Object(u.F)(e)
				}), m.a),
				h = Object(a.a)(p, e => e === i.C.SSO);
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return f
			}));
			const b = e => e.accountManagerModalData.actionSource,
				g = e => e.accountManagerModalData.redirectUrl,
				f = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, b, c.a, h, d.b, (e, t, s, a, c, d) => {
					let l = "".concat(n.a.accountManagerOrigin).concat(e);
					return a && (l = Object(r.a)(l, {
						[i.H]: a,
						uiMode: t
					})), c && (l = Object(r.a)(l, {
						[i.w]: c
					})), d && (l = Object(r.a)(l, {
						[i.jb]: d
					})), e === o.b.Index || e === o.b.ChangePassword ? l : l = Object(r.a)(l, {
						actionSource: s
					})
				})
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
					experimentName: a.x,
					experimentEligibilitySelector: i.F
				}), o.a),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentName: a.y,
					experimentEligibilitySelector: e => !Object(i.F)(e)
				}), o.a),
				l = Object(n.a)(c, d, (e, t) => e || t),
				m = e => e === a.E.BadgeCounterBottom || e === a.E.BadgeOnlyBottom || e === a.F.BadgeOnlyBottom,
				u = e => e === a.E.BadgeCounterTop || e === a.F.BadgeOnlyTop,
				p = e => {
					const t = c(e);
					return t === a.E.BadgeCounterBottom || t === a.E.BadgeCounterTop
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
				return Object(r.D)(e) || n.n.Treatment1 === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.g
				})
			}
		},
		"./src/reddit/selectors/experiments/responsiveSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/contexts/PageLayer/index.tsx"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/experiments/utils.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = Object(n.a)((e, t) => Object(o.c)(e, {
					experimentName: a.jb,
					experimentEligibilitySelector: e => (Object(c.F)(e) || Object(c.G)(e)) && Object(r.I)(t.pageLayer)
				}), i.a),
				l = Object(n.a)(d, e => e === a.lb.Treatment)
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => Object(r.D)(e) || !(n.Qb.Holdout === Object(a.c)(e, {
				experimentEligibilitySelector: a.a,
				experimentName: n.Nb
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
			const r = e => n.Tb.All === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.Sb
				}),
				o = ["52weeksofcooking", "advancedrunning", "amateur_boxing", "animation", "bathandbodyworks", "bbq", "beer", "beerporn", "blacksmith", "boostedboards", "campinggear", "chipotle", "cookingforbeginners", "decidingtobebetter", "declutter", "dermatology", "dominos", "eczema", "engagementrings", "family", "fermentation", "findfashion", "fitbit", "fixit", "fondanthate", "foodhacks", "glossier", "healthyfood", "homegym", "hotdogs", "hotpeppers", "hotsauce", "howto", "instantpot", "interiordesign", "internetparents", "jeffreestarcosmetics", "knifemaking", "kombucha", "love", "makeupflatlays", "makeuplounge", "malegrooming", "mead", "moissanite", "mommit", "muaythai", "nanny", "narcissisticparents", "outdoors", "ramen", "rawdenim", "recipes", "redwingshoes", "rowing", "sarahsnark", "skincare_addiction", "skookum", "slowcooking", "spicy", "starbucksbaristas", "steak", "swimming", "tacobell", "talesfromthepizzaguy", "traderjoes", "triathlon", "veganfoodporn", "veganrecipes", "weddingsunder10k", "whiskeytribe", "whiskyporn", "wicked_edge", "womenshealth", "xxketo4u2", "yeezys"]
		},
		"./src/reddit/selectors/gold/purchaseCatalog.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			}));
			const n = e => e.goldPurchase.purchaseCatalog.activeSaleConfig,
				a = e => e.goldPurchase.purchaseCatalog.coinPackages,
				r = e => e.goldPurchase.purchaseCatalog.premiumPackages,
				o = e => e.goldPurchase.purchaseCatalog.pending,
				i = e => e.goldPurchase.purchaseCatalog.errorMessage
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
		"./src/reddit/selectors/theme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/Theme/index.ts");
			const a = e => e.themes.current,
				r = e => e.themes.current === n.b
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
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a", "vendors~Chat~Governance~Reddit", "vendors~Governance~Reddit", "vendors~Reddit", "Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3", "Chat~Governance~Reddit", "Governance~Reddit", "ModListing~Reddit"]
	]
]);
//# sourceMappingURL=Reddit.f4bdf3737cc6f81477dd.js.map