// https://www.redditstatic.com/desktop2x/Reddit.e81b52757b72246788ba.js
// Retrieved at 3/24/2020, 7:30:06 PM by Reddit Dataminer v1.0.0
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
						const t = Object(f.p)(s, {
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
					if (d && (t(Object(n.c)(Object(i.a)(c, [v.c]))), Object(E.a)(e))) {
						const s = Object(j.O)(e),
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
			var n, a, r, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/isEqual.js"),
				c = s.n(i),
				d = s("./node_modules/lodash/omit.js"),
				l = s.n(d),
				m = s("./node_modules/lodash/throttle.js"),
				u = s.n(m),
				p = s("./node_modules/react/index.js"),
				h = s.n(p),
				b = s("./node_modules/react-redux/es/index.js"),
				g = s("./node_modules/react-router/esm/react-router.js"),
				f = s("./node_modules/react-router-redux/es/index.js"),
				C = s("./node_modules/reselect/es/index.js"),
				P = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				y = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				O = s("./src/lib/fastdom/index.ts"),
				E = s("./src/lib/FocusTrap/index.ts"),
				j = s("./src/lib/isEqualWithoutKey/index.ts"),
				w = s("./src/lib/isSimpleClick/index.ts"),
				S = s("./src/reddit/actions/header.ts"),
				M = s("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				I = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				k = s("./node_modules/polished/dist/polished.es.js"),
				N = s("./node_modules/react-motion/lib/react-motion.js"),
				_ = s("./src/lib/lessComponent.tsx"),
				T = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				R = s("./src/lib/addQueryParams/index.ts"),
				A = s("./src/reddit/actions/preferences.ts");
			! function(e) {
				e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/"
			}(n || (n = {})),
			function(e) {
				e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.Login = "login", e.Register = "register", e.Resize = "resize", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
			}(a || (a = {})),
			function(e) {
				e.Embed = "embed", e.Modal = "modal"
			}(r || (r = {}));
			var L = s("./src/reddit/constants/experiments.ts"),
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
			const z = Object(C.a)(e => Object(W.c)(e, {
					experimentName: L.w,
					experimentEligibilitySelector: e => !Object(Q.F)(e)
				}), V.a),
				Z = Object(C.a)(z, e => e === L.C.SSO);
			var K = s("./src/reddit/selectors/meta.ts"),
				Y = s("./src/reddit/selectors/telemetry.ts"),
				J = s("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				X = s.n(J);
			const $ = T.a.redditUrl,
				ee = _.a.iframe("IFrame", X.a),
				te = _.a.button("CloseButton", X.a),
				se = _.a.wrapped(H.a, "Close", X.a),
				ne = Object(C.a)((e, t) => t.path, (e, t) => t.uiMode, G, K.b, q.a, Z, (e, t, s, a, r, o) => {
					let i = "".concat(T.a.accountManagerOrigin).concat(e);
					return r && (i = Object(R.a)(i, {
						[L.G]: r,
						uiMode: t
					})), o && (i = Object(R.a)(i, {
						[L.w]: o
					})), e === n.Index || e === n.ChangePassword ? i : i = Object(R.a)(i, {
						actionSource: s
					})
				}),
				ae = Object(C.c)({
					accountManagerSrc: ne,
					actionSource: G,
					frontpageSignupVariant: q.a,
					redirectUrl: e => e.accountManagerModalData.redirectUrl
				}),
				re = Object(b.b)(ae, (e, t) => ({
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
					onTwoFactorChanged: () => e(Object(A.x)(!1))
				})),
				oe = e => {
					let {
						data: t,
						origin: s
					} = e;
					return t && t.success && (t.type === a.ChangePassword || t.type === a.Close || t.type === a.CreateAccount || t.type === a.Login || t.type === a.Register || t.type === a.Resize || t.type === a.Subscribe || t.type === a.TwoFactorChanged) && s === T.a.accountManagerOrigin
				};
			class ie extends h.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = h.a.createRef(), this.isAccountCreated = !1, this.focusFirstVisibleIframeInput = () => {
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
							if (t.type === a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === a.Close) this.close();
						else if (t.type === a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === a.Login) this.onLogIn();
						else if (t.type === a.ChangePassword) this.onChangePassword();
						else if (t.type === a.Resize) {
							if (t.payload && this.iframeRef.current) {
								const e = t.payload;
								e.height && e.width && (this.iframeRef.current.style.height = "".concat(e.height, "px"), this.iframeRef.current.style.width = "".concat(e.width, "px"))
							}
						} else t.type === a.TwoFactorChanged ? this.props.onTwoFactorChanged() : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(U.a)(F.a.JustLoggedIn, !0), window.location.reload(!0))
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload(!0)
					}, this.onSignUp = (e, t) => {
						let s = "";
						if (this.props.redirectUrl) s = this.props.redirectUrl;
						else if ("/" !== window.location.pathname) s = window.location.href;
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
					return h.a.createElement(h.a.Fragment, null, h.a.createElement(ee, {
						className: t,
						innerRef: this.iframeRef,
						src: e
					}), s && h.a.createElement(te, {
						onClick: this.close
					}, h.a.createElement(se, null)))
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
					return h.a.createElement(Ce, {
						className: t
					}, h.a.createElement(ve, {
						className: fe.a.android
					}, h.a.createElement(Pe, {
						animationType: be.a.Fade,
						className: fe.a.android,
						delay: 2500,
						items: Ee,
						itemTime: 5e3,
						itemWidth: 240
					}), h.a.createElement(xe, {
						src: ye
					})), h.a.createElement(ve, {
						className: fe.a.iphone
					}, h.a.createElement(Pe, {
						animationType: be.a.Fade,
						className: fe.a.iphone,
						items: je,
						itemTime: 5e3,
						itemWidth: 232
					}), h.a.createElement(xe, {
						src: Oe
					})))
				},
				Se = s("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				Me = s.n(Se);
			const Ie = _.a.div("Container", Me.a),
				ke = _.a.span("Disclaimer", Me.a),
				Ne = _.a.a("Link", Me.a);
			var _e = e => h.a.createElement(Ie, {
					className: e.className
				}, h.a.createElement(Ne, {
					href: "https://about.reddit.com"
				}, o.fbt._("about", null, {
					hk: "4n6gdA"
				})), h.a.createElement(Ne, {
					href: "https://www.redditinc.com/advertising"
				}, o.fbt._("advertise", null, {
					hk: "3M40BX"
				})), h.a.createElement(Ne, {
					href: "http://www.redditblog.com/"
				}, o.fbt._("blog", null, {
					hk: "iEUEu"
				})), h.a.createElement(Ne, {
					href: "https://about.reddit.com/careers/"
				}, o.fbt._("careers", null, {
					hk: "1nRiZW"
				})), h.a.createElement(Ne, {
					href: "https://www.reddithelp.com"
				}, o.fbt._("help", null, {
					hk: "3CJ8k2"
				})), h.a.createElement(Ne, {
					href: "https://about.reddit.com/press/"
				}, o.fbt._("press", null, {
					hk: "x8wb0"
				})), h.a.createElement(Ne, {
					href: "https://www.reddit.com/mobile/download"
				}, o.fbt._("The Reddit App", null, {
					hk: "1N9ljJ"
				})), h.a.createElement(Ne, {
					href: "https://www.reddit.com/coins"
				}, o.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), h.a.createElement(Ne, {
					href: "http://redditgifts.com/"
				}, o.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), h.a.createElement(Ne, {
					href: "https://www.reddit.com/premium"
				}, o.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), h.a.createElement(Ne, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, o.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), h.a.createElement(Ne, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, o.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), h.a.createElement(ke, null, o.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				Te = s("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				Re = s.n(Te);
			const Ae = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				Le = _.a.div("Container", Re.a),
				Fe = _.a.wrapped(ce, "IFrame", Re.a),
				De = _.a.wrapped(we, "Images", Re.a),
				Be = _.a.wrapped(_e, "Links", Re.a),
				Ue = _.a.div("MainContent", Re.a),
				He = _.a.div("MainContentColumn", Re.a),
				Ge = _.a.button("NotReady", Re.a),
				qe = _.a.span("NotReadyText", Re.a),
				We = _.a.wrapped(pe.a, "NotReadyIcon", Re.a),
				Ve = Object(x.a)(e => {
					const {
						className: t,
						containerRef: s,
						frontpageSignupVariant: a,
						onCloseClick: o,
						onVisibilityChange: i
					} = e, c = Object(he.a)(e).bodyText;
					return h.a.createElement(I.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: i
					}, h.a.createElement(Le, {
						className: t,
						innerRef: s
					}, h.a.createElement(Ue, null, h.a.createElement(He, null, h.a.createElement(De, null, "Images Placeholder")), h.a.createElement(He, null, h.a.createElement(Fe, {
						className: Object(P.a)({
							[Re.a.fields]: Object(q.b)(a)
						}),
						path: n.Register,
						uiMode: r.Embed
					}))), h.a.createElement(Ge, {
						onClick: o,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(k.m)(.8, c)
						}
					}, h.a.createElement(qe, null, h.a.createElement(ue.c, null, "Not ready to sign up yet?")), h.a.createElement(We, null)), h.a.createElement(Be, null)))
				});
			class Qe extends h.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class ze extends h.a.Component {
				constructor() {
					super(...arguments), this.containerRef = h.a.createRef(), this.state = {
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
						return h.a.createElement(Qe, {
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
					return h.a.createElement(h.a.Fragment, null, h.a.createElement(Ve, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), h.a.createElement(N.Motion, {
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
			var Ze = Object(de.c)(ze),
				Ke = s("./node_modules/js-cookie/src/js.cookie.js"),
				Ye = s.n(Ke),
				Je = s("./src/lib/localStorageAvailable/index.ts"),
				Xe = s("./src/reddit/actions/modal.ts"),
				$e = s("./src/higherOrderComponents/makeAsync.tsx"),
				et = Object($e.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("BadgePurchaseModal").then(s.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				tt = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx");
			var st = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumPurchaseModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/PurchaseModal/index.tsx")).then(e => e.default)
			});
			var nt = Object($e.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsSupportPaymentModal")]).then(s.bind(null, "./src/reddit/components/Economics/Support/PaymentModal/index.tsx")).then(e => e.default)
				}),
				at = s("./src/lib/loadWithRetries/index.ts");
			const rt = () => null;
			var ot = Object($e.a)({
					ErrorComponent: rt,
					getComponent: () => Object(at.a)(() => s.e("ManageChatRoomsModal").then(s.bind(null, "./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.tsx"))).then(e => e.default),
					LoadingComponent: rt
				}),
				it = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var ct = Object($e.a)({
				getComponent: () => Object(at.a)(() => s.e("NotificationsPrePromptLoader").then(s.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const dt = () => null;
			var lt = Object($e.a)({
					ErrorComponent: dt,
					getComponent: () => Object(at.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: dt
				}),
				mt = s("./src/higherOrderComponents/asModal/index.tsx"),
				ut = s("./src/reddit/actions/structuredStyles/index.ts"),
				pt = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ht = s("./src/reddit/constants/modals.ts"),
				bt = s("./src/reddit/controls/TextButton/index.tsx"),
				gt = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const ft = Object(b.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					closeModal: () => {
						e(Object(Xe.i)(ht.a.BLADE_NIGHTMODE)), e(Object(ut.f)())
					},
					openBlade: () => {
						e(Object(ut.e)(s))
					}
				}
			});
			var Ct = Object(mt.a)(ft(e => h.a.createElement(pt.c, null, h.a.createElement(pt.g, null, h.a.createElement(gt.a, null, h.a.createElement(pt.n, null, h.a.createElement(ue.c, null, "Turning off Night Mode")), h.a.createElement(bt.a, {
					onClick: e.closeModal
				}, h.a.createElement(pt.b, null)))), h.a.createElement(pt.j, null, h.a.createElement(pt.l, null, h.a.createElement(ue.c, null, "In order to continue styling your community, Night Mode must be turned off."))), h.a.createElement(pt.e, null, h.a.createElement(pt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, h.a.createElement(ue.c, null, "Cancel")), h.a.createElement(pt.o, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, h.a.createElement(ue.c, null, "Continue")))))),
				Pt = s("./src/reddit/actions/authorFlair.ts"),
				vt = s("./src/reddit/actions/userFlair.ts"),
				xt = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				yt = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				Ot = s("./src/reddit/components/FlairPreview/index.tsx"),
				Et = s("./src/reddit/components/FlairSearch/index.tsx"),
				jt = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				wt = s("./src/reddit/controls/Button/index.tsx"),
				St = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				Mt = s("./src/reddit/i18n/utils.ts"),
				It = s("./src/reddit/layout/row/Inline/index.tsx"),
				kt = s("./src/reddit/models/Flair/index.ts"),
				Nt = s("./src/reddit/models/User/index.ts"),
				_t = s("./src/reddit/selectors/authorFlair.ts"),
				Tt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Rt = s("./src/reddit/selectors/userFlair.ts"),
				At = s("./src/reddit/components/UserFlairPicker/index.m.less"),
				Lt = s.n(At);
			const Ft = e => e.inContextAuthor && e.currentUser && Object(Nt.f)(e.currentUser) === e.inContextAuthor.username,
				Dt = e => e.authorFlair || Ft(e) && e.userFlairData.applied || null,
				Bt = _.a.wrapped(It.a, "Section", Lt.a),
				Ut = _.a.div("CheckboxText", Lt.a);
			class Ht extends h.a.Component {
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
						previewFlair: Dt(e),
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
					} = e.displaySettings, r = this.state.showFlair !== a, o = Dt(this.props);
					if (!n.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(jt.b)(s, t, o);
					return !(i || c !== jt.a.NoChanges || !r) || i
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
					} = s, c = this.canSave(), d = Ft(e);
					return h.a.createElement(yt.a, null, h.a.createElement(xt.a, {
						onClosePressed: e.closeModal,
						title: Object(Mt.c)("Select your community flair")
					}), h.a.createElement(Ot.a, {
						flair: t.previewFlair,
						flairTemplateType: kt.d.UserFlair,
						placeholderText: Object(Mt.c)("u/username")
					}), r && h.a.createElement(Et.a, {
						flair: t.previewFlair,
						flairTemplateType: kt.d.UserFlair,
						subredditId: n,
						templates: o,
						templateIds: i,
						onChange: this.setSelectedFlair
					}), d && h.a.createElement(Bt, null, h.a.createElement(St.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: h.a.createElement(Ut, null, h.a.createElement(ue.c, null, "Show my user flair on this community"))
					})), h.a.createElement("div", {
						className: Lt.a.buttonsRow
					}, h.a.createElement(wt.f, {
						disabled: !c,
						onClick: this.onApply
					}, Object(Mt.c)("Apply")), a && h.a.createElement(wt.i, {
						className: Lt.a.clearButton,
						onClick: this.onClear
					}, Object(Mt.c)("Clear Flair"))))
				}
			}
			const Gt = Object(b.b)(() => Object(C.c)({
				authorFlair: _t.b,
				currentUser: Q.i,
				inContextAuthor: _t.c,
				isMod: (e, t) => !!Object(Tt.j)(e, t),
				userFlairData: Rt.c
			}), (e, t) => ({
				activeFlairChanged: (s, n, a, r) => e(Object(vt.o)(s, n, a, r.username, t.subredditId)),
				closeModal: () => e(Object(Pt.b)({
					username: null,
					subredditId: null
				}))
			}))(Ht);
			var qt = Object(mt.a)(Object(de.c)(Gt)),
				Wt = s("./src/reddit/selectors/activeModalId.ts"),
				Vt = s("./src/reddit/selectors/notificationPrefs.ts"),
				Qt = s("./src/reddit/selectors/platform.ts"),
				zt = s("./src/reddit/selectors/removalReasons.ts"),
				Zt = s("./src/reddit/selectors/subredditModeration.ts"),
				Kt = s("./src/reddit/constants/cookie.ts"),
				Yt = s("./src/reddit/featureFlags/index.ts"),
				Jt = s("./src/reddit/helpers/localStorage/index.ts"),
				Xt = s("./src/reddit/helpers/toggleBodyScroll/index.ts");

			function $t() {
				return ($t = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const es = Object(C.c)({
				anyModalIsOpen: e => !!e.activeModalId,
				authorContext: _t.c,
				badgePurchaseModalIsOpen: Object(Wt.b)(ht.a.BADGE_PURCHASE),
				banContext: Zt.f,
				banModalIsOpen: Object(Wt.b)(ht.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Wt.b)(ht.a.BLADE_NIGHTMODE),
				chatroomSettingsModalIsOpen: Object(Wt.b)(ht.a.SUBREDDIT_CHAT_SETTINGS),
				createChatroomModalIsOpen: Object(Wt.b)(ht.a.CREATE_SUBREDDIT_CHAT),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				currentPaymentTarget: e => e.economics.currentPaymentTarget,
				currentSubredditPremiumCorrelationId: e => e.economics.currentModalArgs ? e.economics.currentModalArgs.correlationId : void 0,
				economicsSupportPaymentModalIsOpen: Object(Wt.b)(ht.a.ECONOMY_SUPPORT_MODAL),
				editChatroomModalIsOpen: Object(Wt.b)(ht.a.EDIT_SUBREDDIT_CHAT),
				deleteChatroomModalIsOpen: Object(Wt.b)(ht.a.DELETE_SUBREDDIT_CHAT),
				introModalFeatureEnabled: e => Yt.d.introModal(e),
				isOverlayOpen: Qt.h,
				manageChatroomModalIsOpen: Object(Wt.b)(ht.a.MANAGE_SUBREDDIT_CHAT),
				moderatorPermissions: e => {
					const t = Object(Qt.d)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Zt.C,
				muteModalIsOpen: Object(Wt.b)(ht.a.MUTE_USER),
				notificationsPrePromptIsOpen: Vt.c,
				removalReasonContext: zt.b,
				removalReasonModalIsOpen: Object(Wt.b)(ht.a.ADD_REMOVAL_REASON),
				subredditId: Qt.d,
				subredditPremiumPurchaseModalOpen: Object(Wt.b)(ht.a.SUBREDDIT_PREMIUM_PURCHASE_MODAL),
				userFlairModalIsOpen: Object(Wt.b)(ht.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: Q.u,
				userInRedesignBeta: Q.A,
				userIsLoggedIn: Q.G,
				userIsMod: Q.H,
				userIsNew: Q.I
			});
			class ts extends h.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Je.a)()) return; {
						const e = Ye.a.get(Kt.a);
						e && Ye.a.remove(Kt.a, {
							domain: T.a.cookieDomain
						});
						const t = Object(Jt.r)(ht.a.ALPHA_CONSUMER);
						t && Object(Jt.B)(ht.a.ALPHA_CONSUMER), (e || t) && Object(Jt.R)(ht.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, s = Object(Jt.r)(ht.a.REDESIGN_MODAL);
					!e && s ? t() : e && !s && Object(Jt.R)(ht.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), this.props.anyModalIsOpen ? setTimeout(() => Object(Xt.a)(), 500) : setTimeout(() => Object(Xt.b)(), 500)
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
						economicsSupportPaymentModalIsOpen: l,
						editChatroomModalIsOpen: m,
						deleteChatroomModalIsOpen: u,
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
					return h.a.createElement(p.Fragment, null, n && s && h.a.createElement(tt.a, {
						contextId: s.contextId,
						subredditId: s.subredditId,
						toggleModal: E,
						trackAddEvent: M("banned", s.subredditId, s.contextId)("add_in_context"),
						trackEventWithName: M("banned", s.subredditId, s.contextId),
						username: s.username
					}), f && g && h.a.createElement(it.a, {
						contextId: g.contextId,
						subredditId: g.subredditId,
						toggleModal: j,
						trackAddEvent: M("muted", g.subredditId, g.contextId)("add_in_context"),
						username: g.username
					}), (o || b || u || m || r) && y && h.a.createElement(ot, {
						subredditId: y,
						withOverlay: !0
					}), v && P && h.a.createElement(lt, {
						itemIds: P.itemIds,
						subredditId: P.subredditId,
						toggleModal: w,
						trackClick: M("removal_reasons", P.subredditId, 1 === P.itemIds.length ? P.itemIds[0] : void 0)
					}), a && y && h.a.createElement(Ct, {
						subredditId: y
					}), S && e && e.subredditId && h.a.createElement(qt, {
						subredditId: e.subredditId
					}), t && i && h.a.createElement(et, {
						withOverlay: !0,
						productId: i
					}), C && h.a.createElement(ct, null), l && c && h.a.createElement(nt, $t({
						withOverlay: !0
					}, c)), O && h.a.createElement(st, {
						ignoreDefaultFocus: !0,
						withOverlay: !0,
						correlationId: d
					}))
				}
			}
			var ss = Object(b.b)(es, e => ({
				markRedesignModalAsClosed: () => e(Object(Xe.j)()),
				toggleBanModal: () => e(Object(Xe.i)(ht.a.BAN_USER)),
				toggleBladeNightmodeModal: () => e(Object(Xe.i)(ht.a.BLADE_NIGHTMODE)),
				toggleMuteModal: () => e(Object(Xe.i)(ht.a.MUTE_USER)),
				toggleRemovalReasonsModal: () => e(Object(Xe.i)(ht.a.ADD_REMOVAL_REASON))
			}))(Object(de.c)(ts));
			const ns = {},
				as = () => null;

			function rs(e, t) {
				if (e in ns) throw new Error("Modal with id ".concat(e, " already registered!"));
				ns[e] = t
			}
			var os = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				is = s("./src/reddit/components/AccountManagerModal/index.m.less"),
				cs = s.n(is);
			const ds = _.a.div("Overlay", cs.a),
				ls = _.a.div("IframeContainer", cs.a),
				ms = Object(C.c)({
					frontpageSignupVariant: q.a
				}),
				us = {
					[n.ChangePassword]: ht.a.CHANGE_PASSWORD_MODAL_ID,
					[n.Index]: ht.a.LOGIN_MODAL_ID,
					[n.Register]: ht.a.REGISTER_MODAL_ID,
					[n.EnableTwoFactor]: ht.a.ENABLE_TWO_FACTOR,
					[n.DisableTwoFactor]: ht.a.DISABLE_TWO_FACTOR,
					[n.TwoFactorBackupCodes]: ht.a.TWO_FACTOR_BACKUP_CODES
				};
			class ps extends h.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === n.Register && Object(q.f)(this.props.frontpageSignupVariant) && os.a.throttleFeature(L.G), this.props.sendEvent(me(this.subscriptions))
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						path: t
					} = this.props, s = Object(q.c)(e) || Object(q.d)(e);
					return h.a.createElement(ds, null, h.a.createElement(ls, {
						className: s && cs.a.small
					}, h.a.createElement(ce, {
						onClose: this.closeModal,
						onSubscriptionsChanged: this.updateSubscriptions,
						path: t,
						showCloseButton: !s
					})))
				}
			}
			const hs = Object(b.b)(ms, (e, t) => ({
				closeModal: t => {
					e(Object(Xe.g)(us[t]))
				}
			}))(Object(de.c)(ps));
			rs(ht.a.CHANGE_PASSWORD_MODAL_ID, e => h.a.createElement(hs, {
				path: n.ChangePassword
			})), rs(ht.a.LOGIN_MODAL_ID, e => h.a.createElement(hs, {
				path: n.Index
			})), rs(ht.a.ENABLE_TWO_FACTOR, e => h.a.createElement(hs, {
				path: n.EnableTwoFactor
			})), rs(ht.a.DISABLE_TWO_FACTOR, e => h.a.createElement(hs, {
				path: n.DisableTwoFactor
			})), rs(ht.a.TWO_FACTOR_BACKUP_CODES, e => h.a.createElement(hs, {
				path: n.TwoFactorBackupCodes
			})), rs(ht.a.REGISTER_MODAL_ID, e => h.a.createElement(hs, {
				path: n.Register
			}));
			const bs = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("BadgePickerModal").then(s.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.BADGE_PICKER, e => h.a.createElement(bs, {
				withOverlay: !0
			}));
			const gs = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestPendingModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.CONTRIBUTOR_REQUEST_PENDING, e => h.a.createElement(gs, {
				withOverlay: !0
			}));
			const fs = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestRequestModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.CONTRIBUTOR_REQUEST, e => h.a.createElement(fs, {
				withOverlay: !0
			}));
			const Cs = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~EconHelperActions~SubredditPremiumBadgeManagement"), s.e("SubredditPremiumBadgeManagement")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => h.a.createElement(Cs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ps = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("SubredditPremiumUploadModal")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => h.a.createElement(Ps, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const vs = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("HarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.HARBERGER_TAX_BANNER_MANAGE, e => h.a.createElement(vs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const xs = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("HarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.HARBERGER_TAX_BANNER_PURCHASE, e => h.a.createElement(xs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ys = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("CryptoHarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => h.a.createElement(ys, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Os = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("CryptoHarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => h.a.createElement(Os, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Es = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceOptOutModal").then(s.bind(null, "./src/reddit/components/Governance/OptOutModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.GOVERNANCE_OPT_OUT, e => h.a.createElement(Es, null));
			const js = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~GovernanceReleaseNotesModal"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("GovernanceReleaseNotesModal")]).then(s.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.GOVERNANCE_RELEASE_NOTES, e => h.a.createElement(js, {
				withOverlay: !0
			}));
			const ws = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("GovernanceTransferPointsModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.TRANSFER_POINTS, e => h.a.createElement(ws, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ss = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.WALLET_REGISTRATION_MODAL, e => h.a.createElement(Ss, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ms = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ModToMemberShareModal").then(s.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.MOD_TO_MEMBER_SHARE, e => h.a.createElement(Ms, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Is = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditAddSubredditModal").then(s.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.MULTIREDDIT_ADD_SUBREDDIT, e => h.a.createElement(Is, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ks = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditCreateModal").then(s.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.MULTIREDDIT_CREATE, e => h.a.createElement(ks, {
				onOverlayClick: e,
				withOverlay: !0
			})), rs(ht.a.MULTIREDDIT_DUPLICATE, e => h.a.createElement(ks, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ns = Object($e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditEditModal").then(s.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			rs(ht.a.MULTIREDDIT_EDIT, e => h.a.createElement(Ns, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const _s = Object($e.a)({
				getComponent: () => Object(at.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("PainterModalLoader")]).then(s.bind(null, "./src/reddit/components/PainterModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			rs(ht.a.PAINTER_MODAL, e => h.a.createElement(_s, {
				withOverlay: !0,
				toggleModal: e
			}));
			const Ts = () => null,
				Rs = Object($e.a)({
					ErrorComponent: Ts,
					getComponent: () => Object(at.a)(() => s.e("GlobalModalContainer").then(s.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Ts
				});
			rs(ht.a.PINNED_POSTS_LIMIT_REACHED, e => h.a.createElement(Rs, null));
			var As = s("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Ls = s.n(As);
			const {
				fbt: Fs
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ds = _.a.h2("ColumnLabel", Ls.a), Bs = _.a.wrapped(It.a, "ColumnWrapper", Ls.a), Us = _.a.div("Column", Ls.a), Hs = _.a.div("Description", Ls.a), Gs = _.a.div("Key", Ls.a), qs = _.a.wrapped(pt.j, "ModalMain", Ls.a), Ws = _.a.wrapped(pt.c, "ModalBody", Ls.a), Vs = _.a.wrapped(wt.f, "PrimaryButton", Ls.a), Qs = _.a.wrapped(bt.a, "TextButton", Ls.a), zs = Object(b.b)(null, e => ({
				closeModal: () => e(Object(Xe.i)(ht.a.KEYBOARD_SHORTCUTS))
			})), Zs = _.a.wrapped(Object(mt.a)(zs(e => h.a.createElement(Ws, {
				onClick: e => e.stopPropagation()
			}, h.a.createElement(pt.g, null, h.a.createElement(gt.a, null, h.a.createElement(pt.n, null, Fs._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), h.a.createElement(Qs, {
				onClick: e.closeModal
			}, h.a.createElement(pt.b, null)))), h.a.createElement(qs, null, h.a.createElement(Bs, null, h.a.createElement(Us, null, h.a.createElement(It.a, null, h.a.createElement(Ds, null, Fs._("Navigation", null, {
				hk: "3zSWEe"
			}))), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), h.a.createElement(Gs, null, "Shift + ?")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Next post or comment", null, {
				hk: "1m8s9z"
			})), h.a.createElement(Gs, null, "J")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), h.a.createElement(Gs, null, "K")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), h.a.createElement(Gs, null, "N")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), h.a.createElement(Gs, null, "P")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Open post", null, {
				hk: "2wD7mh"
			})), h.a.createElement(Gs, null, "Enter")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Open/close expando", null, {
				hk: "1yDst0"
			})), h.a.createElement(Gs, null, "X")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Go to post link", null, {
				hk: "c0TNr"
			})), h.a.createElement(Gs, null, "L"))), h.a.createElement(Us, null, h.a.createElement(It.a, null, h.a.createElement(Ds, null, Fs._("Action", null, {
				hk: "3QI6pT"
			}))), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Upvote", null, {
				hk: "5i9NP"
			})), h.a.createElement(Gs, null, "A")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Downvote", null, {
				hk: "1ef3YP"
			})), h.a.createElement(Gs, null, "Z")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("New post", null, {
				hk: "4dtNWf"
			})), h.a.createElement(Gs, null, "C")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Reply to comment", null, {
				hk: "G8AbT"
			})), h.a.createElement(Gs, null, "R")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Submit comment/post", null, {
				hk: "13agk7"
			})), h.a.createElement(Gs, null, "Ctrl + Enter")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Save", null, {
				hk: "3Dtwo5"
			})), h.a.createElement(Gs, null, "S")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Hide", null, {
				hk: "2Dn9GF"
			})), h.a.createElement(Gs, null, "H")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Open navigation", null, {
				hk: "QdGe2"
			})), h.a.createElement(Gs, null, "Q")), h.a.createElement(It.a, null, h.a.createElement(Hs, null, Fs._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), h.a.createElement(Gs, null, "Enter"))))), h.a.createElement(pt.e, null, h.a.createElement(Vs, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, Fs._("Close", null, {
				hk: "2R1HDp"
			})))))), "ConnectedModal", Ls.a);
			rs(ht.a.KEYBOARD_SHORTCUTS, e => h.a.createElement(Zs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ks = Object($e.a)({
				getComponent: () => Object(at.a)(() => s.e("SpezModalLoader").then(s.bind(null, "./src/reddit/components/SpezModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			rs(ht.a.SPEZ_MODAL, e => h.a.createElement(Ks, {
				withOverlay: !0,
				toggleModal: e
			}));
			const Ys = Object(C.c)({
					allowNavigationCallback: Qt.a
				}),
				Js = Object(b.b)(Ys, e => ({
					closeModal: () => e(Object(Xe.i)(ht.a.BLADE_UNSAVED_CHANGES)),
					closeBlade: () => e(Object(ut.a)())
				}));
			class Xs extends h.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return h.a.createElement(pt.c, null, h.a.createElement(pt.g, null, h.a.createElement(gt.a, null, h.a.createElement(pt.n, null, h.a.createElement(ue.c, null, "Discard unsaved changes before leaving?")), h.a.createElement(bt.a, {
						onClick: this.onCancelClick
					}, h.a.createElement(pt.b, null)))), h.a.createElement(pt.j, null, h.a.createElement(pt.m, null, h.a.createElement(ue.c, null, "You have made some changes to your community, do you wish to leave this menu without saving?"))), h.a.createElement(pt.e, null, h.a.createElement(pt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, h.a.createElement(ue.c, null, "Cancel")), h.a.createElement(pt.o, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, h.a.createElement(ue.c, null, "Discard"))))
				}
			}
			const $s = Object(mt.a)(Js(Xs));
			rs(ht.a.BLADE_UNSAVED_CHANGES, e => h.a.createElement($s, {
				withOverlay: !0
			}));
			const en = Object(C.c)({
					activeModalId: Wt.a
				}),
				tn = Object(b.b)(en, e => ({
					toggleModal: t => e(Object(Xe.i)(t))
				})),
				sn = 500,
				nn = () => {};
			class an extends h.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					this.props.activeModalId ? setTimeout(() => Object(Xt.a)(), sn) : setTimeout(() => Object(Xt.b)(), sn)
				}
				componentWillUnmount() {
					Object(Xt.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					var t;
					return ((t = e) && t in ns ? ns[t] : as)(e ? this.toggleModal : nn)
				}
			}
			var rn = tn(an),
				on = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				cn = s("./src/reddit/actions/page.ts"),
				dn = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/app/strings/index.ts")),
				ln = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				mn = s("./src/reddit/components/ProfileIcon/index.m.less"),
				un = s.n(mn);

			function pn(e) {
				return h.a.createElement("img", {
					alt: Object(Mt.c)("Profile icon"),
					src: e.iconUrl || "".concat(T.a.assetPath, "/img/placeholder_gradient_light-280.png"),
					className: Object(P.a)(un.a.img, e.className)
				})
			}
			var hn = s("./src/reddit/components/SEOTitle/index.tsx"),
				bn = s("./src/reddit/components/SubredditIcon/index.tsx"),
				gn = s("./src/reddit/icons/svgs/All/index.tsx");

			function fn(e) {
				return h.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, h.a.createElement("g", null, h.a.createElement("path", {
					d: "M14,4V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V13a1,1,0,0,0,1,1H4V6A2,2,0,0,1,6,4Z"
				}), h.a.createElement("path", {
					d: "M16,5H6A1,1,0,0,0,5,6V16a1,1,0,0,0,1,1h4a5,5,0,0,1-1-3,5,5,0,0,1,5-5,5,5,0,0,1,3,1V6A1,1,0,0,0,16,5Z"
				}), h.a.createElement("path", {
					d: "M19.21,17.79,17.43,16A4,4,0,0,0,18,14a4,4,0,1,0-4,4,4,4,0,0,0,2-.57l1.77,1.77a1,1,0,0,0,1.41-1.41ZM14,16a2,2,0,1,1,2-2A2,2,0,0,1,14,16Z"
				})))
			}
			var Cn = s("./src/reddit/icons/svgs/Coin/index.tsx"),
				Pn = s("./src/reddit/icons/svgs/Envelope/index.tsx"),
				vn = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				xn = s("./src/reddit/constants/colors.ts"),
				yn = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				},
				On = Object(x.a)(e => {
					var {
						className: t,
						isBadged: s
					} = e, n = yn(e, ["className", "isBadged"]);
					return h.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg"
					}, h.a.createElement("path", {
						d: "M15,9.9V8A5,5,0,0,0,5,8V9.9c-2.41.45-4,1.24-4,2.13,0,1.41,4,2.56,9,2.56s9-1.15,9-2.56C19,11.14,17.41,10.35,15,9.9Zm-2,.94a9.62,9.62,0,0,1-3,.39,9.62,9.62,0,0,1-3-.39V8a3,3,0,0,1,6,0Z"
					}), h.a.createElement("path", {
						d: "M2.74,14.6l3,2.12a7.39,7.39,0,0,0,8.6,0l3-2.12a24.63,24.63,0,0,1-7.26,1A24.63,24.63,0,0,1,2.74,14.6Z"
					}), h.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "4",
						fill: s ? Object(he.a)(n).body : "none"
					}), h.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "3",
						fill: s ? xn.a.orangered : "none"
					}))
				}),
				En = s("./src/reddit/icons/svgs/Moderate/index.tsx");

			function jn() {
				return (jn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var wn, Sn = e => h.a.createElement("svg", jn({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), h.a.createElement("path", {
					d: "M17,5H6A1,1,0,0,0,5,6V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V6A1,1,0,0,0,17,5ZM7,7.5A.5.5,0,0,1,7.5,7h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM15.5,16h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5H13a.5.5,0,0,1,0-1h2.5a.5.5,0,0,1,0,1Z"
				}), h.a.createElement("path", {
					d: "M6,4h9.47a2.09,2.09,0,0,1,.51.07V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H4.09A2.09,2.09,0,0,1,4,15.49V6A2,2,0,0,1,6,4Z"
				})),
				Mn = e => {
					let {
						className: t
					} = e;
					return h.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg"
					}, h.a.createElement("polygon", {
						points: "12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6"
					}))
				},
				In = s("./src/reddit/icons/svgs/Post/index.tsx"),
				kn = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				Nn = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				_n = s("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Tn = s.n(_n);
			! function(e) {
				e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModMailBeta = "ModMailBeta", e.ModQueue = "ModQueue", e.Multi = "Multi", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(wn || (wn = {}));
			const Rn = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [s, n] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return h.a.createElement(h.a.Fragment, null, s && "".concat(s, "/"), n && h.a.createElement(hn.b, {
					type: hn.a.HeaderSelector
				}, n))
			};
			var An = s("./src/lib/objectSelector/index.ts"),
				Ln = s("./src/reddit/constants/wiki.ts"),
				Fn = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Dn = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Bn = s("./src/reddit/selectors/subreddit.ts"),
				Un = s("./src/reddit/selectors/topic.ts");
			var Hn = Object(An.a)((e, t) => {
					let {
						pageLayer: s
					} = t;
					const n = !!e.user.account,
						a = Object(Fn.S)(s);
					switch (a) {
						case "index":
						case "listing":
							return n ? {
								type: wn.Home
							} : {
								type: wn.Popular
							};
						case "modListing":
							return {
								type: wn.ModListing
							};
						case "modQueuePages":
							return {
								type: wn.ModQueue
							};
						case "postCreation":
							return {
								type: wn.CreatePost
							};
						case "postDraft":
							return {
								type: wn.ViewDraft
							};
						case "subredditCreation":
							return {
								type: wn.SubredditCreation
							};
						case "coins":
							return {
								type: wn.Coins
							};
						case "premium":
							return {
								type: wn.Premium
							};
						case "appeal":
							return {
								type: wn.Appeal
							};
						case "report":
							return {
								type: wn.Report
							};
						case "userDataRequest":
							return {
								type: wn.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: wn.DailyCharts
							};
						case "topic": {
							const t = Object(Fn.s)(s),
								n = t && Object(Un.c)(e, t, !0);
							if (n) return {
								type: wn.Topic,
								model: n
							}
						}
					}
					const r = e.user.account;
					if (r) switch (a) {
						case "inboxPages":
							return {
								type: wn.Inbox, model: r
							};
						case "settings":
							return {
								type: wn.Settings, model: r
							}
					}
					const o = Object(Fn.M)(e, {
						pageLayer: s
					});
					if ("all" === o) return {
						type: wn.All
					};
					if ("popular" === o) return {
						type: wn.Popular
					};
					const i = Object(Fn.q)(e, {
						pageLayer: s
					});
					if (i) return "searchResults" === a ? {
						type: wn.CommunitySearch,
						model: i
					} : {
						type: wn.Community,
						model: i
					};
					const c = Object(Fn.d)(e, {
						pageLayer: s
					});
					if (c) return {
						type: wn.Multi,
						model: c
					};
					const d = Object(Fn.j)(e, {
						pageLayer: s
					});
					if (d) return {
						type: wn.UserProfile,
						model: d
					};
					const l = Object(Fn.h)(s);
					if (l) return {
						type: wn.UserProfileName,
						name: "u/".concat(l)
					};
					if (a && "searchResults" === a) return {
						type: wn.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(Fn.n)(e, {
								pageLayer: s
							}) || Ln.e,
							n = Object(Bn.y)(e, {
								subredditName: t
							});
						if (n) return {
							type: wn.Community,
							model: n
						}
					}
					return "rpan" === a && Object(Dn.a)(e) ? {
						type: wn.PublicAccessNetwork
					} : {
						type: wn.Unknown
					}
				}),
				Gn = (s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				qn = s.n(Gn);

			function Wn() {
				return (Wn = Object.assign || function(e) {
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
						children: h.a.createElement(h.a.Fragment, null, h.a.createElement(t, {
							className: qn.a.icon
						}), h.a.createElement(s, {
							className: qn.a.text
						})),
						className: Object(P.a)(qn.a.item, e.className, {
							[qn.a.mFocused]: !!e.isFocused,
							[qn.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return n["aria-label"] = e.to || e.label, e.to ? e.externalLink ? h.a.createElement("a", Wn({}, n, {
					href: e.to,
					target: "_blank"
				})) : h.a.createElement(on.a, Wn({}, n, {
					to: e.to
				})) : h.a.createElement("button", n)
			}
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var Qn = s("./src/reddit/helpers/overlay/index.ts"),
				zn = s("./src/reddit/routes/modListing/index.ts"),
				Zn = s("./src/reddit/selectors/multireddit.ts"),
				Kn = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				Yn = s("./src/lib/LinkedListMap/index.ts");
			const Jn = Object(C.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Zn.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				language: e => e.user.language,
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Zn.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var Xn;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Xn || (Xn = {}));
			const $n = [(e, t) => ({
					id: wn.Employee,
					type: Xn.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(On, {
								className: Object(P.a)(t, Tn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, "Employee Communities")
						}
					},
					telemetryNoun: "employee"
				})],
				ea = [(e, t) => ({
					id: wn.All,
					type: Xn.GenericLink,
					model: {
						url: "/r/all/",
						displayText: Object(dn.a)(t, "subscriptions.all"),
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(gn.a, {
								className: Object(P.a)(t, Tn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, h.a.createElement(ue.c, null, "All"))
						}
					},
					telemetryNoun: "all"
				}), (e, t) => ({
					id: wn.DailyCharts,
					type: Xn.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: o.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(vn.a, {
								className: Object(P.a)(t, Tn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, o.fbt._("Top Communities", null, {
								hk: "1KzP9v"
							}))
						}
					},
					telemetryNoun: "daily_charts"
				})],
				ta = [(e, t) => ({
					id: "reddit-feeds",
					type: Xn.Header,
					model: {
						displayText: Object(dn.a)(t, "subscriptions.redditFeeds")
					}
				}), (e, t, s) => ({
					id: wn.Home,
					type: Xn.GenericLink,
					model: {
						url: "/",
						displayText: Object(dn.a)(t, "header.home"),
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(On, {
								className: Object(P.a)(t, Tn.a.itemIcon),
								isBadged: s && s.isBadged
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, h.a.createElement(ue.c, null, "Home"))
						}
					},
					telemetryNoun: "home"
				}), (e, t) => ({
					id: wn.Popular,
					type: Xn.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: Object(dn.a)(t, "subscriptions.popular"),
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(Mn, {
								className: Object(P.a)(t, Tn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, h.a.createElement(ue.c, null, "Popular"))
						}
					},
					telemetryNoun: "popular"
				}), ...ea],
				sa = [(e, t) => ({
					id: "reddit-feeds",
					type: Xn.Header,
					model: {
						displayText: Object(dn.a)(t, "subscriptions.redditFeeds")
					}
				}), () => ({
					id: wn.Home,
					type: Xn.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Popular", null, {
							hk: "BiNJj"
						}),
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(Mn, {
								className: Object(P.a)(t, Tn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, o.fbt._("Popular", null, {
								hk: "BiNJj"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...ea],
				na = [(e, t) => ({
					id: "reddit-other",
					type: Xn.Header,
					model: {
						displayText: Object(dn.a)(t, "subscriptions.otherFeeds")
					}
				}), (e, t) => ({
					id: wn.Settings,
					type: Xn.GenericLink,
					model: {
						url: "/settings",
						displayText: Object(dn.a)(t, "header.settings"),
						icon: t => {
							let {
								className: s
							} = t;
							return h.a.createElement(pn, {
								className: s,
								iconUrl: e.accountIcon
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, h.a.createElement(ue.c, null, "User Settings"))
						}
					},
					telemetryNoun: "settings"
				}), (e, t) => ({
					id: wn.Inbox,
					type: Xn.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: Object(dn.a)(t, "header.messages"),
						icon: t => {
							let {
								className: s
							} = t;
							return h.a.createElement(pn, {
								className: s,
								iconUrl: e.accountIcon
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, h.a.createElement(ue.c, null, "Messages"))
						}
					},
					telemetryNoun: "mail"
				}), (e, t) => ({
					id: wn.CreatePost,
					type: Xn.GenericLink,
					model: {
						url: "/submit",
						displayText: Object(dn.a)(t, "header.newPost"),
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(In.a, {
								className: Object(P.a)(t, Tn.a.itemIcon)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, h.a.createElement(ue.c, null, "Create Post"))
						}
					},
					telemetryNoun: "create_post"
				})],
				aa = [(e, t) => ({
					id: wn.Coins,
					type: Xn.GenericLink,
					model: {
						url: "/coins",
						displayText: Object(dn.a)(t, "header.coins"),
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(Cn.a, {
								className: Object(P.a)(t, Tn.a.itemCoin)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, h.a.createElement(ue.c, null, "Coins"))
						}
					},
					telemetryNoun: "coins"
				}), (e, t) => ({
					id: wn.Premium,
					type: Xn.GenericLink,
					model: {
						url: "/premium",
						displayText: Object(dn.a)(t, "header.premium"),
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(kn.a, {
								className: Object(P.a)(t, Tn.a.itemPremium)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, h.a.createElement(ue.c, null, "Premium"))
						}
					},
					telemetryNoun: "premium"
				})],
				ra = [(e, t) => ({
					id: wn.ModQueue,
					type: Xn.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: Object(dn.a)(t, "header.modQueue"),
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(En.a, {
								className: Object(P.a)(t, Tn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, h.a.createElement(ue.c, null, "Mod Queue"))
						}
					},
					telemetryNoun: "mod_queue"
				}), (e, t) => ({
					id: wn.ModMailBeta,
					type: Xn.GenericLink,
					model: {
						url: "https://mod.reddit.com/mail/all",
						displayText: Object(dn.a)(t, "header.modMailBeta"),
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(Pn.a, {
								className: Object(P.a)(t, Tn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, h.a.createElement(ue.c, null, "Modmail Beta"))
						}
					},
					telemetryNoun: "modmail_beta"
				}), (e, t) => ({
					id: wn.ModMail,
					type: Xn.GenericLink,
					model: {
						url: "/message/moderator",
						displayText: Object(dn.a)(t, "header.modMail"),
						icon: e => {
							let {
								className: t
							} = e;
							return h.a.createElement(Pn.a, {
								className: Object(P.a)(t, Tn.a.itemModQueue)
							})
						},
						text: e => {
							let {
								className: t
							} = e;
							return h.a.createElement("span", {
								className: t
							}, h.a.createElement(ue.c, null, "Modmail"))
						}
					},
					telemetryNoun: "modmail"
				})];

			function oa(e, t, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Xn.Header,
					model: {
						displayText: Object(dn.a)(s, "subscriptions.subscriptions")
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Xn.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Xn.Header,
					model: {
						displayText: Object(dn.a)(s, "subscriptions.profiles")
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Xn.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var ia = s("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				ca = s.n(ia);

			function da(e) {
				return h.a.createElement("div", {
					className: Object(P.a)(ca.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var la = s("./src/reddit/actions/subscription/index.ts"),
				ma = s("./src/reddit/helpers/trackers/customFeeds.ts"),
				ua = e => {
					let {
						className: t
					} = e;
					return h.a.createElement("svg", {
						className: t,
						viewBox: "0 0 20 20"
					}, h.a.createElement("g", {
						fill: "inherit",
						fillRule: "evenodd"
					}, h.a.createElement("polygon", {
						points: "15.437 17.594 10.189 14.837 4.941 17.594 5.944 11.755 1.698 7.619 7.565 6.767 10.189 1.454 12.813 6.767 18.68 7.619 14.434 11.755"
					})))
				},
				pa = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				ha = s.n(pa);

			function ba() {
				return (ba = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ga = Object(C.c)({
					currentUser: Q.i,
					hideNSFWPref: Q.y,
					isLoggedIn: Q.G
				}),
				fa = Object(b.b)(ga, (e, t) => ({
					toggleFavorite: s => {
						switch (s.stopPropagation(), s.preventDefault(), t.type) {
							case Xn.Subreddit:
								e(Object(la.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Xn.Profile:
								e(Object(la.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Xn.Multi:
								e(Object(la.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(ma.f)(t.model.url)) : t.sendEvent(Object(ma.c)(t.model.url))
						}
					}
				}));
			var Ca = Object(de.c)(fa((function(e) {
					const t = {
						className: Object(P.a)(ha.a.item, e.className, {
							[ha.a.mFocused]: !!e.isFocused
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
						case Xn.Subreddit:
							return h.a.createElement(on.a, ba({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), h.a.createElement(bn.b, {
								className: ha.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), h.a.createElement("span", {
								className: ha.a.text
							}, e.model.displayText), e.isLoggedIn && h.a.createElement("div", {
								onClick: e.toggleFavorite
							}, h.a.createElement(ua, {
								className: Object(P.a)(ha.a.favorite, {
									[ha.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Xn.SubredditAutocomplete:
							return h.a.createElement(on.a, ba({}, t, {
								"aria-label": e.model.name,
								to: "/r/".concat(e.model.name, "/")
							}), h.a.createElement(bn.b, {
								className: ha.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), h.a.createElement("span", {
								className: ha.a.text
							}, e.model.name));
						case Xn.Multi:
							return h.a.createElement(on.a, ba({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), h.a.createElement("img", {
								src: e.model.icon,
								className: ha.a.customFeedIcon
							}), h.a.createElement("span", {
								className: ha.a.text
							}, e.model.displayText), e.isLoggedIn && h.a.createElement("div", {
								onClick: e.toggleFavorite
							}, h.a.createElement(ua, {
								className: Object(P.a)(ha.a.favorite, {
									[ha.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Xn.Profile:
							return h.a.createElement(on.a, ba({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), h.a.createElement(pn, {
								className: ha.a.icon,
								iconUrl: e.hideNSFWPref ? "".concat(T.a.assetPath, "/img/avatar_over18_square.png") : e.model.icon.url
							}), h.a.createElement("span", {
								className: ha.a.text
							}, e.model.displayText), e.isLoggedIn && h.a.createElement("div", {
								onClick: e.toggleFavorite
							}, h.a.createElement(ua, {
								className: Object(P.a)(ha.a.favorite, {
									[ha.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Pa = s("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				va = s.n(Pa);

			function xa(e) {
				return h.a.createElement("div", {
					className: e.className
				}, h.a.createElement("div", {
					className: va.a.header
				}), h.a.createElement("div", {
					className: va.a.item
				}), h.a.createElement("div", {
					className: va.a.item
				}), h.a.createElement("div", {
					className: va.a.item
				}), h.a.createElement("div", {
					className: va.a.item
				}))
			}
			var ya = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Oa = s("./src/reddit/actions/multireddit/index.ts"),
				Ea = s("./src/reddit/actions/subreddit.ts"),
				ja = s("./src/reddit/constants/keycodes.ts"),
				wa = s("./src/reddit/helpers/trackers/coins.ts"),
				Sa = s("./src/reddit/helpers/trackers/premium.ts"),
				Ma = s("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Ia = s.n(Ma);

			function ka() {
				return (ka = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function Na(e) {
				return e.id === wn.ModMail || (e.id === wn.ModMailBeta || e.id === wn.CreateCommunity)
			}

			function _a(e) {
				const t = new Yn.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Xn.Header && e.type !== Xn.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const Ta = Object(C.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const s = Jn(e),
							n = s.language,
							a = new Yn.a("id");
						if (s.account) {
							const r = s.account;
							ta.forEach(e => a.push(e(r, n))), r.isEmployee && $n.forEach(e => a.push(e(r, n))), Object(Dn.a)(e) && a.push({
								id: wn.PublicAccessNetwork,
								type: Xn.GenericClickable,
								model: {
									onClick: () => {
										t(Object(Qn.a)(D.c[D.b.Rpan]))
									},
									displayText: Object(dn.a)(n, "header.publicAccessNetwork"),
									icon: e => {
										let {
											className: t
										} = e;
										return h.a.createElement(Nn.a, {
											className: Object(P.a)(t, Tn.a.itemPublicAccessNetwork)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return h.a.createElement("span", {
											className: t
										}, h.a.createElement(ue.c, null, "Reddit Public Access Network"))
									}
								},
								telemetryNoun: "rpan"
							}), (s.favoriteSubreddits.length || s.favoriteProfiles.length || s.favoriteMultireddits.length) && (a.push({
								id: "header-favorites",
								type: Xn.Header,
								model: {
									displayText: Object(dn.a)(n, "subscriptions.favorites")
								}
							}), s.favoriteSubreddits.forEach(e => a.push({
								id: "fav" + e.id,
								type: Xn.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteProfiles.forEach(e => a.push({
								id: "fav" + e.id,
								type: Xn.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteMultireddits.forEach(e => a.push({
								id: "fav" + e.url,
								type: Xn.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.multisPending ? a.push({
								id: "multis-pending",
								type: Xn.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.multis.length > 0 && (a.push({
								id: "header-multis",
								type: Xn.Header,
								model: {
									displayText: Object(Mt.c)("Custom feeds"),
									button: e => {
										let {
											className: s,
											sendClickEvent: n
										} = e;
										return h.a.createElement("button", {
											onClick: () => {
												t(Object(Xe.i)(ht.a.MULTIREDDIT_CREATE)), n()
											},
											className: Object(P.a)(s, Tn.a.multiPlusButton)
										}, h.a.createElement(Kn.a, {
											className: Tn.a.multiPlusIcon
										}))
									},
									buttonTelemetryNoun: "create_new_custom_feed"
								}
							}), s.multis.forEach(e => a.push({
								id: e.url,
								type: Xn.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.moderatingSubredditsPending ? a.push({
								id: "moderatingSubreddits-pending",
								type: Xn.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.moderatingSubreddits.length && (a.push({
								id: "header-moderating",
								type: Xn.Header,
								model: {
									displayText: Object(dn.a)(n, "subscriptions.moderatingFull")
								}
							}), a.push({
								id: wn.ModListing,
								type: Xn.GenericLink,
								model: {
									url: zn.a,
									displayText: Object(dn.a)(n, "header.modListing"),
									icon: e => {
										let {
											className: t
										} = e;
										return h.a.createElement(En.a, {
											className: Object(P.a)(t, Tn.a.itemModQueue)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return h.a.createElement("span", {
											className: t
										}, h.a.createElement(ue.c, null, "r/Mod"))
									}
								},
								telemetryNoun: "r_mod"
							}), s.moderatingSubreddits.forEach(e => a.push({
								id: "mod" + e.id,
								type: Xn.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), s.subscriptionsPending ? a.push({
								id: "subscriptions-pending",
								type: Xn.LoadingState,
								model: {
									displayText: ""
								}
							}) : oa(a, s, n), na.forEach(e => a.push(e(r, n))), Object(Q.Y)(e) && a.push({
								id: wn.CreateCommunity,
								type: Xn.GenericLink,
								model: {
									url: "https://www.reddit.com/subreddits/create",
									displayText: Object(dn.a)(n, "header.createCommunity"),
									icon: e => {
										let {
											className: t
										} = e;
										return h.a.createElement(In.a, {
											className: Object(P.a)(t, Tn.a.itemIcon)
										})
									},
									text: e => {
										let {
											className: t
										} = e;
										return h.a.createElement("span", {
											className: t
										}, h.a.createElement(ue.c, null, "Create Community"))
									}
								},
								telemetryNoun: "create_community"
							}), aa.forEach(e => a.push(e(r, n))), r.isMod && ra.forEach(e => a.push(e(r, n)))
						} else s.subscriptions.length || Object(Q.G)(e) ? ta.forEach(e => a.push(e(null, n))) : sa.forEach(e => a.push(e(null, n))), a.push({
							id: "reddit-other",
							type: Xn.Header,
							model: {
								displayText: Object(dn.a)(n, "subscriptions.otherFeeds")
							}
						}), aa.forEach(e => a.push(e(null, n))), oa(a, s, n);
						return a
					}
				}),
				Ra = e => ({
					onHomeClicked: () => e(Object(cn.x)()),
					onGotoUrl: t => e(Object(f.b)(t)),
					onSubredditsRequested: () => {
						e(Object(la.e)()), e(Object(Ea.q)()), e(Object(Oa.g)())
					},
					onActionDispatched: t => e(t)
				}),
				Aa = (e, t, s) => Object.assign({}, e, t, s, {
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class La extends h.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							s = this.getList(t, this.props),
							n = _a(s),
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
						if (e.key === ja.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === ja.b.Tab && this.props.onClose && this.props.onClose(), e.key === ja.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Xn.Header && e.type !== Xn.LoadingState && (this.fireTelemetryForListItem(e), e.type === Xn.GenericClickable ? e.model.onClick() : Na(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === ja.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === ja.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case wn.Coins:
								wa.f(), t = wa.e();
								break;
							case wn.Premium:
								Sa.g(), t = Sa.f()
						}
						switch (e.type) {
							case Xn.Category:
							case Xn.GenericLink:
							case Xn.GenericClickable:
							case Xn.Multi:
							case Xn.Profile:
							case Xn.Subreddit:
								this.props.sendEvent(s => Object.assign({}, Object(Y.defaults)(s), t ? {
									correlationId: t
								} : null, {
									customFeed: e.type === Xn.Multi ? Object(Y.customFeedByPath)(s, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Xn.Header: {
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
						focusOrder: _a(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = h.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						s = this.getList(t, e),
						n = _a(s);
					this.setState({
						focusOrder: n,
						renderableList: s
					})
				}
				getList(e, t) {
					if (e) {
						const s = new Yn.a("id"),
							n = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Xn.Category:
								case Xn.GenericLink:
								case Xn.Multi:
								case Xn.Profile:
								case Xn.Subreddit:
									e.model.displayText.match(n) && s.push(e);
									break;
								case Xn.Header: {
									const t = s.last();
									t && t.type === Xn.Header && s.pop(), s.push(e);
									break
								}
								case Xn.LoadingState:
							}
						});
						const a = s.last();
						return a && a.type === Xn.Header && s.pop(), s
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
					return h.a.createElement("div", {
						role: "menu",
						className: this.props.className
					}, h.a.createElement("div", {
						"aria-live": "assertive",
						"aria-label": t && t.model.displayText ? "".concat(t.model.displayText, " ").concat(o.fbt._("selected", null, {
							hk: "QqrSS"
						})) : ""
					}), h.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": o.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: Ia.a.filter,
						id: "header-subreddit-filter",
						placeholder: o.fbt._("Filter", null, {
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === wn.Home && this.props.onHomeClicked(), e.type === Xn.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case Xn.GenericClickable:
								return h.a.createElement(Vn, ka({}, s, {
									className: Ia.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Xn.Category:
							case Xn.GenericLink:
								return h.a.createElement(Vn, ka({}, s, {
									externalLink: Na(e),
									className: Ia.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Xn.Header: {
								const s = e.model.button;
								return h.a.createElement(da, {
									className: Ia.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								}, e.model.displayText, s && h.a.createElement(s, {
									className: Ia.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Xn.LoadingState:
								return h.a.createElement(xa, {
									className: Ia.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								});
							case Xn.Multi:
								return h.a.createElement(Ca, ka({}, s, {
									className: Ia.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Xn.Multi
								}));
							case Xn.Profile:
								return h.a.createElement(Ca, ka({}, s, {
									className: Ia.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Xn.Profile
								}));
							case Xn.Subreddit:
								return h.a.createElement(Ca, ka({}, s, {
									className: Ia.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Xn.Subreddit
								}))
						}
					}))
				}
			}
			const Fa = Object(b.b)(Ta, Ra, Aa)(Object(de.c)(La)),
				Da = Object(b.b)(Ta, Ra, Aa)(Object(de.c)(Object(ya.b)(La)));
			var Ba = s("./src/reddit/actions/shortcuts.ts"),
				Ua = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Ha = e => h.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, h.a.createElement("path", {
					d: "M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z"
				}), h.a.createElement("path", {
					d: "M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z"
				}));
			var Ga = s("./src/reddit/selectors/userPrefs.ts");
			const qa = Object(Fn.t)({
					isCommentsPage: Fn.w,
					pageLayer: e => e
				}),
				Wa = Object(C.c)({
					currentPage: Hn,
					hideNSFWPref: Q.y,
					isDropdownOpen: e => e.header.isSubscriptionsDropdownOpen,
					isLoggedIn: Q.G,
					isOverlayOpen: Qt.h,
					isPinnedSubscriptionsMenuDisabled: Ga.a,
					isSubscriptionsPinned: Ga.b,
					language: e => e.user.language
				});
			class Va extends h.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Ba.r)()
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
					return h.a.createElement("div", {
						"aria-label": Object(Mt.c)("Start typing to filter your communities or use up and down to select."),
						className: Object(P.a)(Tn.a.container, t, {
							[Tn.a.mOpen]: i,
							[Tn.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[Tn.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, h.a.createElement("button", {
						className: Tn.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, h.a.createElement("span", {
						className: Tn.a.containerText
					}, function(e, t) {
						switch (e.type) {
							case wn.All:
								return Rn(Object(dn.a)(t, "subscriptions.all"));
							case wn.Appeal:
								return Rn(Object(dn.a)(t, "header.appeal"));
							case wn.Coins:
								return Rn(Object(dn.a)(t, "header.coins"));
							case wn.Community:
								return Rn(e.model.displayText, !0);
							case wn.CommunitySearch:
								return Rn(Object(dn.a)(t, "search.restrictToSubreddit"));
							case wn.CreateCommunity:
								return Rn(Object(dn.a)(t, "header.createCommunity"));
							case wn.CreatePost:
								return Rn(Object(dn.a)(t, "header.newPost"));
							case wn.DailyCharts:
								return Rn(Object(Mt.c)("Top Communities"));
							case wn.GlobalSearch:
								return Rn(Object(dn.a)(t, "search.globalName"));
							case wn.Home:
								return Rn(Object(dn.a)(t, "header.home"));
							case wn.Inbox:
								return Rn(Object(dn.a)(t, "header.messages"));
							case wn.ModListing:
								return Rn(Object(dn.a)(t, "header.modListing"));
							case wn.ModMail:
								return Rn(Object(dn.a)(t, "header.modMail"));
							case wn.ModMailBeta:
								return Rn(Object(dn.a)(t, "header.modMailBeta"));
							case wn.ModQueue:
								return Rn(Object(dn.a)(t, "header.modQueue"));
							case wn.Multi:
								return Rn(e.model.displayText, !0);
							case wn.Popular:
								return Rn(Object(dn.a)(t, "subscriptions.popular"));
							case wn.Premium:
								return Rn(Object(dn.a)(t, "header.premium"));
							case wn.PublicAccessNetwork:
								return Rn(Object(dn.a)(t, "header.publicAccessNetwork"));
							case wn.Report:
								return Rn(Object(dn.a)(t, "header.report"));
							case wn.Settings:
								return Rn(Object(dn.a)(t, "header.settings"));
							case wn.SubredditCreation:
								return Rn(Object(dn.a)(t, "header.subredditCreation"));
							case wn.Topic:
								return Rn(e.model);
							case wn.Unknown:
								return Rn("");
							case wn.UserDataRequest:
								return Rn(Object(dn.a)(t, "header.userDataRequest"));
							case wn.UserProfile:
								return Rn(e.model.displayText, !0);
							case wn.UserProfileName:
								return Rn(e.name, !0);
							case wn.ViewDraft:
								return Rn(Object(dn.a)(t, "header.viewDraft"))
						}
					}(e, o)), function(e, t) {
						switch (e.type) {
							case wn.All:
								return h.a.createElement(gn.a, {
									className: Tn.a.defaultIcon
								});
							case wn.Appeal:
								return h.a.createElement(In.a, {
									className: Tn.a.defaultIcon
								});
							case wn.Coins:
								return h.a.createElement(Cn.a, {
									className: Tn.a.coinIcon
								});
							case wn.Community:
							case wn.CommunitySearch: {
								const s = Object(ln.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return h.a.createElement(bn.b, {
									className: Tn.a.subredditIcon,
									iconUrl: s.url,
									primaryColor: s.color
								})
							}
							case wn.CreateCommunity:
							case wn.CreatePost:
								return h.a.createElement(In.a, {
									className: Tn.a.defaultIcon
								});
							case wn.DailyCharts:
								return h.a.createElement(vn.a, {
									className: Tn.a.defaultIcon
								});
							case wn.GlobalSearch:
								return h.a.createElement(fn, {
									className: Tn.a.defaultIcon
								});
							case wn.Home:
								return h.a.createElement(On, {
									className: Tn.a.defaultIcon
								});
							case wn.Inbox:
							case wn.Settings:
								return h.a.createElement(pn, {
									className: Tn.a.icon,
									iconUrl: e.model.accountIcon
								});
							case wn.ModListing:
								return h.a.createElement(En.a, {
									className: Tn.a.modQueueIcon
								});
							case wn.SubredditCreation:
								return h.a.createElement(In.a, {
									className: Tn.a.defaultIcon
								});
							case wn.ModMail:
							case wn.ModMailBeta:
								return h.a.createElement(Pn.a, {
									className: Tn.a.modQueueIcon
								});
							case wn.ModQueue:
								return h.a.createElement(En.a, {
									className: Tn.a.modQueueIcon
								});
							case wn.Multi:
								return h.a.createElement("img", {
									src: e.model.icon,
									className: Tn.a.customFeedIcon
								});
							case wn.Popular:
								return h.a.createElement(Mn, {
									className: Tn.a.defaultIcon
								});
							case wn.Premium:
								return h.a.createElement(kn.a, {
									className: Tn.a.premiumIcon
								});
							case wn.PublicAccessNetwork:
								return h.a.createElement(Nn.a, {
									className: Tn.a.publicAccessNetworkIcon
								});
							case wn.Report:
								return h.a.createElement(In.a, {
									className: Tn.a.defaultIcon
								});
							case wn.Unknown:
								return h.a.createElement("div", {
									className: Tn.a.unknownIcon
								});
							case wn.UserDataRequest:
								return h.a.createElement(In.a, {
									className: Tn.a.defaultIcon
								});
							case wn.UserProfile: {
								const s = Object(ln.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return h.a.createElement(pn, {
									className: Tn.a.icon,
									iconUrl: s.url
								})
							}
							case wn.UserProfileName:
								return h.a.createElement("div", {
									className: Tn.a.defaultIcon
								});
							case wn.ViewDraft:
								return h.a.createElement(In.a, {
									className: Tn.a.defaultIcon
								});
							case wn.Topic:
								return h.a.createElement(Sn, {
									className: Tn.a.defaultIcon
								})
						}
					}(e, s), !this.props.isSubscriptionsPinned && h.a.createElement(Ua.b, {
						className: Tn.a.caretDown
					})), i && !this.props.isPinnedSubscriptionsMenuDisabled && h.a.createElement(Ha, {
						className: Object(P.a)(Tn.a.pin, {
							[Tn.a.disabled]: c
						}),
						onClick: c ? void 0 : this.props.onPinSubscriptions
					}), i && h.a.createElement(Da, {
						canAutofocus: !0,
						className: Tn.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var Qa = qa(Object(b.b)(Wa, (e, t) => ({
					closeDropdown: () => e(Object(S.f)()),
					onLocationRefresh: (s, n) => e(Object(cn.F)(s, t.pageLayer, n)),
					onPinSubscriptions: () => {
						e(Object(S.i)()), e(Object(S.f)())
					},
					openDropdown: () => e(Object(S.g)()),
					toggleDropdown: () => e(Object(S.h)())
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onLocationClick: s => t.onLocationRefresh(s, e.isOverlayOpen)
				}))(Object(de.c)(Va))),
				za = s("./src/reddit/components/JumpToContent/index.tsx"),
				Za = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Ka = s("./node_modules/history/esm/history.js"),
				Ya = s("./node_modules/lodash/debounce.js"),
				Ja = s.n(Ya),
				Xa = s("./node_modules/uuid/v4.js"),
				$a = s.n(Xa),
				er = s("./src/lib/makeSearchKey/index.ts"),
				tr = s("./src/reddit/actions/post.ts"),
				sr = s("./src/reddit/actions/search.ts"),
				nr = s("./src/reddit/actions/search/trending.ts"),
				ar = s("./src/reddit/actions/tooltip.ts"),
				rr = s("./src/higherOrderComponents/asTooltip.tsx"),
				or = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ir = s("./src/lib/search/index.ts"),
				cr = s("./src/reddit/models/Search/index.ts");
			var dr = (e, t, s, n, a, r) => {
					let o, i;
					if ("" !== n.searchQuery) {
						if (n.isTypeaheadSuggestion) o = "/".concat(n.searchQuery);
						else {
							if (i = "".concat(B.o, "=").concat(Object(ir.b)(n.rawQuery || n.searchQuery)), o = "/search/", n.section === cr.c.trending && a && a.source && (i += "&source=".concat(a.source)), e && r ? (o = "/r/".concat(e.name).concat(o), i = "".concat(i, "&").concat(B.p, "=1")) : !e && n.subredditOrProfileRestrictedName && (o = "/".concat(n.subredditOrProfileRestrictedName).concat(o), i = "".concat(i, "&").concat(B.p, "=1")), t) {
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
				lr = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				mr = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				ur = s("./src/reddit/icons/svgs/Search/index.tsx"),
				pr = s("./src/reddit/components/SearchDropdown/index.m.less"),
				hr = s.n(pr);
			const br = Object(rr.a)(or.b);
			class gr extends h.a.Component {
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
						toggleTooltip: i
					} = e, c = dr(null, null, null, r), d = c && c.url, l = c && c.qs, m = l ? "".concat(d, "?").concat(l) : d, u = this.generateFullSearchQuery(r);
					let p;
					return n && (p = this.generateFullSearchQuery(n)), h.a.createElement(on.a, {
						"aria-label": r.searchQuery,
						className: Object(P.a)(hr.a.listItem, ha.a.item, s, {
							[hr.a.mFocused]: !(!n || n.section !== cr.c.recent || p !== u)
						}),
						onClick: this.onRecentSearchItemClick,
						key: u,
						role: "link",
						tabIndex: -1,
						to: m || ""
					}, r.displayInfo && r.isTypeaheadSuggestion ? r.displayInfo.iconUrl ? h.a.createElement("div", {
						className: hr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(r.displayInfo.iconUrl, "')")
						}
					}) : h.a.createElement(lr.a, {
						className: hr.a.planetIcon
					}) : h.a.createElement(ur.a, {
						className: Object(P.a)(hr.a.listItemIcon, ha.a.icon)
					}), h.a.createElement("span", {
						className: ha.a.text
					}, u), h.a.createElement("div", {
						onMouseEnter: () => i(u),
						onMouseLeave: () => i(null),
						id: u
					}, h.a.createElement(mr.a, {
						className: Object(P.a)(hr.a.listItemIcon, hr.a.mHoverable, ha.a.icon),
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), a(r)
						}
					}), h.a.createElement(br, {
						className: hr.a.fixedTextTooltip,
						isOpen: t === u,
						text: o.fbt._("Remove", null, {
							hk: "2P57BY"
						}),
						tooltipId: u,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					})))
				}
			}
			var fr = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Cr = s("./src/reddit/components/PostTitle/index.tsx"),
				Pr = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				vr = s("./src/reddit/constants/adEvents.ts"),
				xr = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				yr = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				Or = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			class Er extends h.a.Component {
				constructor() {
					super(...arguments), this.transformTrendingToRecentSearch = () => {
						const e = this.props.trendingItem,
							{
								post: t,
								subredditInfo: s,
								subredditOccurrences: n
							} = e;
						return Or(e, ["post", "subredditInfo", "subredditOccurrences"])
					}, this.onTrendingItemClick = () => {
						this.props.onUpdateSearchQuery(this.props.trendingItem.searchQuery);
						const e = this.transformTrendingToRecentSearch();
						if (this.props.onSetRecentSearch(e), this.props.onSendDropdownClickEvent(this.props.trendingItem.searchQuery, this.props.trendingItem.rawQuery || "", Y.StructureType.Trending, Y.SearchDropdownNouns.Trending), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							this.props.fireAdPixelsOfType(e, vr.a.Click)
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
					} = this.props, n = this.isSponsored(), a = dr(null, null, null, s, {
						source: n ? er.a.PromotedTrend : er.a.Trending
					}), r = a && a.url, i = a && a.qs, c = i ? "".concat(r, "?").concat(i) : r, d = h.a.createElement(on.a, {
						"aria-label": s.searchQuery,
						className: Object(P.a)(hr.a.listItem, hr.a.mTrending, ha.a.item, ha.a.trending, e, {
							[hr.a.mFocused]: !(!t || t.section !== cr.c.trending || s.searchQuery !== t.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: "trending-".concat(s.searchQuery),
						role: "link",
						tabIndex: -1,
						to: c || ""
					}, h.a.createElement("div", {
						className: ha.a.trendingContent
					}, n && h.a.createElement("div", {
						className: ha.a.promoted
					}, o.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), h.a.createElement("div", null, h.a.createElement(Mn, {
						className: Object(P.a)(hr.a.listItemIcon, hr.a.mTrending, ha.a.icon, ha.a.trending)
					}), h.a.createElement("span", null, h.a.createElement(Cr.a, {
						className: Object(P.a)(hr.a.listItemText, hr.a.mTrending, ha.a.text, ha.a.trending),
						redditStyle: !0,
						size: Cr.b.Small
					}, s.searchQuery)), s.post && h.a.createElement("div", {
						className: hr.a.postTitle
					}, s.post.title)), s.subredditInfo && h.a.createElement(xr.a, {
						className: Object(P.a)(ha.a.relatedSubredditMetaData, hr.a.listItemSubtext, {
							[hr.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: o.fbt._("{subreddit name} and more", [o.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(yr.a)(s.post) && h.a.createElement(fr.a, {
						post: s.post,
						removeLink: !0,
						usePreview: n
					}));
					return n ? h.a.createElement(Pr.a, {
						post: s.post
					}, d) : d
				}
			}
			var jr = s("./src/reddit/components/Flair/index.tsx");
			class wr extends h.a.Component {
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
					return h.a.createElement(on.a, {
						"aria-label": n.searchQuery,
						className: Object(P.a)(hr.a.listItem, hr.a.mTypeahead, ha.a.item, t, {
							[hr.a.mFocused]: !(!s || s.searchQuery !== n.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: n.searchQuery,
						role: "link",
						tabIndex: -1,
						to: "/".concat(n.searchQuery)
					}, n.displayInfo && n.displayInfo.iconUrl ? h.a.createElement("div", {
						className: hr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(n.displayInfo.iconUrl, "')")
						}
					}) : h.a.createElement(lr.a, {
						className: hr.a.planetIcon
					}), h.a.createElement("div", null, n.displayInfo && n.displayInfo.subredditOrProfileName && h.a.createElement("div", {
						className: Object(P.a)(hr.a.listItemText, hr.a.mTypeahead, ha.a.text)
					}, n.displayInfo.subredditOrProfileName), h.a.createElement("div", null, n.displayInfo && null != n.displayInfo.subscribers && h.a.createElement("div", {
						className: Object(P.a)(hr.a.listItemSubtext, ha.a.subText)
					}, o.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [o.fbt._plural(n.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), n.displayInfo && n.displayInfo.isNSFW && h.a.createElement(jr.b, {
						flair: {
							type: kt.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var Sr = s("./src/reddit/constants/zIndex.ts"),
				Mr = s("./src/reddit/controls/Dropdown/index.tsx");
			const {
				fbt: Ir
			} = s("./node_modules/fbt/lib/FbtPublic.js"), kr = "SearchDropdown", Nr = 5, _r = Object(rr.a)(Mr.a);
			class Tr extends h.a.Component {
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
					e.isFixed && (a.zIndex = Sr.h);
					const r = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending;
					return h.a.createElement(_r, {
						className: Object(P.a)(hr.a.dropdown, Tn.a.listContainer),
						isFixed: s,
						isOpen: e.isOpen,
						isOverlay: n,
						tooltipId: kr,
						noFocus: !0,
						style: a
					}, e.typeaheadSuggestions.map(t => h.a.createElement(wr, {
						focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
						item: t,
						key: t.id,
						onClearSearchQuery: e.onClearSearchQuery,
						onSendDropdownClickEvent: e.onSendDropdownClickEvent,
						onSetRecentSearch: e.onSetRecentSearch,
						fireAdPixelsOfType: e.fireAdPixelsOfType
					})), r && e.recentSearches.map(s => h.a.createElement(gr, {
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
					})), r && e.isInTrendingExperiment && !e.isTrendingPending && e.trendingItems && h.a.createElement("div", {
						className: Object(P.a)(ha.a.title, hr.a.listItemTitle, {
							[hr.a.mWithBorder]: !!e.recentSearches.length
						})
					}, Ir._("Trending today", null, {
						hk: "3nAMpY"
					})), (e.isTypeaheadPending || e.isTrendingPending) && h.a.createElement(h.a.Fragment, null, h.a.createElement("div", {
						className: Object(P.a)(hr.a.loadingItem, va.a.item)
					}), h.a.createElement("div", {
						className: Object(P.a)(hr.a.loadingItem, va.a.item)
					}), h.a.createElement("div", {
						className: Object(P.a)(hr.a.loadingItem, va.a.item)
					}), h.a.createElement("div", {
						className: Object(P.a)(hr.a.loadingItem, va.a.item)
					}), h.a.createElement("div", {
						className: Object(P.a)(hr.a.loadingItem, va.a.item)
					})), r && e.isInTrendingExperiment && e.trendingItems.slice(0, Nr).map(t => h.a.createElement(Er, {
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
			var Rr = s("./src/reddit/contexts/ApiContext.tsx"),
				Ar = s("./src/lib/makeApiRequest/index.ts"),
				Lr = s("./src/lib/omitHeaders/index.ts"),
				Fr = s("./src/reddit/constants/headers.ts");
			const Dr = (e, t) => Object(Ar.b)(Object(Lr.a)(e, [Fr.a]), {
				endpoint: "".concat(e.apiUrl, "/api/subreddit_autocomplete_v2.json"),
				method: v.cb.GET,
				data: {
					query: t
				}
			});
			var Br = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				Ur = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const Hr = e => {
				const t = [],
					s = {};
				return e.forEach(e => {
					const n = e.data,
						a = e.kind;
					a === v.xb.Subreddit ? (t.push(n.name), s[n.name] = Object(Ur.a)(n)) : a === v.xb.Account && (t.push(n.subreddit.name), s[n.subreddit.name] = Object(Br.a)(n.subreddit, n.name))
				}), {
					data: s,
					order: t
				}
			};
			var Gr = s("./src/reddit/helpers/correlationIdTracker.ts"),
				qr = s("./src/reddit/helpers/isArrayEqual.ts"),
				Wr = s("./src/reddit/helpers/trackers/searchResults.ts"),
				Vr = s("./src/reddit/selectors/experiments/trending.ts");
			const Qr = e => Object(Q.D)(e) || L.Nb.Treatment1 === Object(W.c)(e, {
				experimentEligibilitySelector: W.a,
				experimentName: L.Kb
			});
			var zr = s("./src/reddit/selectors/searchResults.ts"),
				Zr = s("./src/reddit/selectors/tooltip.ts"),
				Kr = s("./src/reddit/selectors/trending.ts"),
				Yr = s("./src/reddit/controls/Search/index.m.less"),
				Jr = s.n(Yr);
			const Xr = Object(Fn.t)({
					searchQuery: Fn.T,
					pageLayer: e => e
				}),
				$r = (e, t, s) => e(e => Object.assign({}, Object(Wr.c)(e), {
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(Gr.c)(Gr.a.SearchResults),
					actionInfo: Y.actionInfo(e),
					search: Y.search(e, s)
				})),
				eo = Object(b.b)(() => Object(C.c)({
					currentSubredditName: Qt.e,
					currentUser: Q.i,
					dropdownIsOpen: Object(Zr.b)(kr),
					typeaheadIdsByQuery: zr.c,
					isInTrendingExperiment: Vr.a,
					isInTypeaheadExperiment: Qr,
					isLoggedIn: Q.G,
					isSubredditSearchAllowed: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(Fn.J)(s)
					},
					language: Q.O,
					multireddit: Fn.d,
					routeName: Qt.q,
					subreddit: Fn.q,
					trendingItems: Kr.a,
					typeaheadSuggestions: zr.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(nr.b)()),
					fireAdPixelsOfType: (t, s) => e(Object(tr.B)(t, s)),
					onChange: t => e(Object(sr.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(sr.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(f.b)(t)),
					onSearch: (t, s, n) => {
						e(Object(f.b)(Object(Ka.c)({
							pathname: t,
							search: s,
							state: {
								fromPage: n
							}
						})))
					},
					onToggleDropdown: () => e(Object(ar.h)({
						tooltipId: kr
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(sr.i)(t))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onSearch: (n, a) => {
						n.preventDefault();
						const {
							currentUser: r = null
						} = e, o = dr(e.subreddit, e.multireddit, r, a, s.searchOptions, e.isSubredditSearchAllowed);
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
						Object(Gr.c)(Gr.a.SearchResults) || Object(Gr.d)(Gr.a.SearchResults);
						const e = s.searchOptions || Object(er.c)({});
						$r(s.sendEvent, Y.OriginElement.SearchBar, e)
					}
				}));
			class to extends h.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await Dr(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = Hr(e.body.data.children);
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
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(Jt.C)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(Jt.W)(Object.assign({}, e, {
								section: cr.c.recent
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
					}, this.onFetchTypeaheadSuggestions = Ja()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery) {
							let t = Object.assign({}, cr.a);
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = $a()()), this.props.typeaheadSuggestions && t.isTypeaheadSuggestion ? this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, Y.StructureType.Search, t.isProfile ? Y.SearchDropdownNouns.TypeaheadProfile : Y.SearchDropdownNouns.TypeaheadSubreddit) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, Y.StructureType.Search, Y.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									s = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									n = !!this.props.subreddit && this.props.subreddit.isNSFW,
									a = cr.b.text;
								t = {
									id: $a()(),
									searchQuery: this.state.searchQuery,
									type: a,
									section: cr.c.recent,
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
						this.props.sendEvent(Object(Wr.m)(n, a))
					}, this.onSendDropdownViewEvent = (e, t, s, n) => {
						const a = {
							displayQuery: s,
							rawQuery: n || s,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(Wr.n)(e, a))
					}, this.onKeyDown = e => {
						if (e.key === ja.b.Escape && this.close(), e.key === ja.b.Tab && this.close(), e.key === ja.b.ArrowDown) {
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
						if (e.key === ja.b.ArrowUp) {
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
								const e = Object(Jt.w)(this.props.currentUser.id);
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
						const t = this.props.searchOptions || Object(er.c)({});
						t.q || (t.q = this.state.searchQuery), $r(this.props.sendEvent, "full_search_button", t)
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
					const t = Object(qr.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						s = Object(qr.a)(e.trendingItems, this.props.trendingItems);
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
					return h.a.createElement("div", {
						className: Object(P.a)(Jr.a.relativeWrapper, Tn.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: kr,
						ref: this.setContainerRef
					}, h.a.createElement("label", {
						className: Jr.a.iconContainer,
						htmlFor: "header-search-bar"
					}, h.a.createElement(ur.a, {
						className: Jr.a.icon
					})), h.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						method: "get",
						onSubmit: this.onFormSubmit,
						onFocus: e.onFocusSearchBar,
						role: "search"
					}, h.a.createElement("input", {
						id: "header-search-bar",
						name: "q",
						className: Jr.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: o.fbt._("Search", null, {
							hk: "44xF6n"
						}),
						type: "search",
						value: this.state.searchQuery
					})), !e.subreddit && h.a.createElement(Tr, {
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
			var so = Object(de.c)(Xr(Object(Rr.b)(eo(to)))),
				no = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				ao = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				ro = s("./src/reddit/icons/svgs/LayerLogo/index.m.less"),
				oo = s.n(ro);

			function io() {
				return (io = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var co, lo = e => h.a.createElement("svg", io({
					viewBox: "0 0 80 80",
					className: oo.a.icon
				}, e), h.a.createElement("path", {
					d: "M76.4 55.5l-1.7-.9L44 70c-2.2 1.1-5.9 1.1-8.1 0L5.3 54.7l-1.7.9c-2.2 1.1-2.2 2.9 0 4L36 75.7c2.2 1.1 5.9 1.1 8.1 0l32.4-16.2c2.1-1.1 2.1-2.9-.1-4z"
				}), h.a.createElement("path", {
					d: "M77.3 41l-15.4-7.7 15.4-7c2.5-1.2 2.8-2.9 2.8-3.6 0-.7-.3-2.4-2.8-3.6L44.8 4.4c-2.8-1.3-6.9-1.3-9.7 0L2.8 19.1C.3 20.2 0 22 0 22.7c0 .7.3 2.4 2.8 3.6l15.4 7L2.7 41C1 41.8 0 43.2 0 44.7s1 2.9 2.7 3.7l32.4 16.2c1.4.7 3.2 1 4.9 1s3.5-.4 4.9-1l32.4-16.2c1.7-.9 2.7-2.2 2.7-3.7s-1-2.9-2.7-3.7zM4.2 22.7c.1 0 .1-.1.2-.1L36.8 7.9c1.7-.8 4.8-.8 6.5 0l32.4 14.7c.1 0 .1.1.2.1-.1 0-.1.1-.2.1L43.2 37.5c-1.7.8-4.8.8-6.5 0L4.4 22.7h-.2z"
				})),
				mo = s("./src/reddit/components/Header/QuickLinks/index.m.less"),
				uo = s.n(mo);
			! function(e) {
				e.All = "header-quicklinks-all", e.Popular = "header-quicklinks-popular", e.News = "header-quicklinks-news", e.Rpan = "header-quicklinks-rpan", e.Layer = "header-quicklinks-layer"
			}(co || (co = {}));
			const po = Object(C.c)({
				isLoggedIn: e => !!e.user.account,
				showRPANlogo: Dn.a,
				showLayersEmbedLogo: Yt.d.layersEmbedQuickLink
			});
			var ho = Object(b.b)(po, e => ({
					openStream: () => e(Object(Qn.a)(D.c[D.b.Rpan])),
					toggleTooltip: t => e(Object(ar.h)({
						tooltipId: t
					}))
				}))(Object(de.c)((function(e) {
					return h.a.createElement("div", {
						className: Object(P.a)(uo.a.container, e.className)
					}, h.a.createElement("div", {
						className: uo.a.row
					}, h.a.createElement(on.a, {
						className: uo.a.icon,
						id: co.Popular,
						to: e.isLoggedIn ? D.c[D.b.Popular] : D.c[D.b.Home],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "popular"
						})),
						onMouseEnter: () => e.toggleTooltip(co.Popular),
						onMouseLeave: () => e.toggleTooltip(co.Popular)
					}, h.a.createElement(Mn, null), h.a.createElement(or.c, {
						caretOnTop: !0,
						tooltipId: co.Popular,
						text: o.fbt._("Popular", null, {
							hk: "1Kx4va"
						})
					})), h.a.createElement(on.a, {
						className: uo.a.icon,
						id: co.All,
						to: D.c[D.b.All],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "all"
						})),
						onMouseEnter: () => e.toggleTooltip(co.All),
						onMouseLeave: () => e.toggleTooltip(co.All)
					}, h.a.createElement(gn.a, null), h.a.createElement(or.c, {
						caretOnTop: !0,
						tooltipId: co.All,
						text: o.fbt._("All", null, {
							hk: "1Rk1yU"
						})
					})), e.showRPANlogo && h.a.createElement(on.a, {
						className: uo.a.icon,
						id: co.Rpan,
						to: D.c[D.b.Rpan],
						onClick: t => {
							(t => {
								t.stopPropagation(), t.preventDefault(), e.openStream()
							})(t), e.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						},
						onMouseEnter: () => e.toggleTooltip(co.Rpan),
						onMouseLeave: () => e.toggleTooltip(co.Rpan)
					}, h.a.createElement(Nn.a, null), h.a.createElement(or.c, {
						caretOnTop: !0,
						tooltipId: co.Rpan,
						text: o.fbt._("Reddit Public Access Network", null, {
							hk: "38uXOo"
						})
					})), e.showLayersEmbedLogo && h.a.createElement(on.a, {
						className: uo.a.icon,
						id: co.Layer,
						to: D.c[D.b.Layer],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "layer"
						})),
						onMouseEnter: () => e.toggleTooltip(co.Layer),
						onMouseLeave: () => e.toggleTooltip(co.Layer)
					}, h.a.createElement(lo, null), h.a.createElement(or.c, {
						caretOnTop: !0,
						tooltipId: co.Layer,
						text: o.fbt._("r/Layer in partnership with Adobe", null, {
							hk: "36V7Nc"
						})
					}))))
				}))),
				bo = s("./src/reddit/actions/login.ts"),
				go = s("./src/reddit/helpers/trackers/authControls.ts"),
				fo = s("./src/chat/helpers/dom.ts"),
				Co = s("./src/reddit/actions/chat/toggle.ts"),
				Po = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				vo = s("./src/reddit/actions/postCreation/general.ts"),
				xo = s("./src/reddit/actions/users.ts"),
				yo = s("./src/reddit/components/Settings/modalIds.ts");
			var Oo = Object($e.a)({
					getComponent: () => Object(at.a)(() => s.e("EmailVerificationModals").then(s.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Eo = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				jo = s("./src/reddit/components/Translated/index.tsx"),
				wo = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				So = s("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				Mo = s.n(So);
			class Io extends h.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(wo.e)(wo.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(wo.c)(wo.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(wo.e)(wo.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					Io.shouldSendViewEvent && (Io.shouldSendViewEvent = !1, this.props.sendEvent(Object(wo.g)(wo.a)))
				}
				render() {
					return h.a.createElement("div", {
						className: Mo.a.container
					}, h.a.createElement("div", {
						className: Mo.a.topLine
					}), h.a.createElement("button", {
						className: Mo.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, h.a.createElement(H.a, {
						className: Mo.a.closeIcon
					})), h.a.createElement("h5", {
						className: Mo.a.title
					}, h.a.createElement(jo.a, {
						msgId: "header.emailVerificationTooltip.title"
					})), h.a.createElement("p", {
						className: Mo.a.subtitle
					}, this.props.email), h.a.createElement("p", {
						className: Mo.a.description
					}, h.a.createElement(jo.a, {
						msgId: "header.emailVerificationTooltip.description"
					})), h.a.createElement("div", {
						className: Mo.a.buttonWrapper
					}, h.a.createElement(wt.i, {
						className: Mo.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, h.a.createElement(jo.a, {
						msgId: "header.emailVerificationTooltip.buttons.updateEmail"
					})), h.a.createElement(wt.f, {
						className: Object(P.a)(Mo.a.commonBtn, Mo.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, h.a.createElement(jo.a, {
						msgId: "header.emailVerificationTooltip.buttons.gotIt"
					}))))
				}
			}
			Io.shouldSendViewEvent = !0;
			const ko = Object(Eo.a)(Io, [ya.a.Click, ya.a.Keydown, ya.a.Resize]);
			var No = Object(de.c)(ko),
				_o = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				To = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts")),
				Ro = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				Ao = s("./src/reddit/controls/LoadingIcon/index.tsx");
			let Lo;
			const Fo = () => Lo,
				Do = () => Lo = $a()(),
				Bo = "gold_top_nav",
				Uo = e => t => Object.assign({
					source: "gold_top_nav",
					action: "click",
					noun: e
				}, (e => ({
					screen: Y.screen(e),
					profile: Y.profile(e),
					subreddit: Y.subreddit(e)
				}))(t)),
				Ho = e => t => Object.assign({
					source: Bo,
					action: "click",
					noun: "coins_".concat(e),
					correlationId: Fo()
				}, Y.defaults(t)),
				Go = () => e => Object.assign({
					source: Bo,
					action: "click",
					noun: "premium",
					correlationId: Fo()
				}, Y.defaults(e)),
				qo = () => e => Object.assign({
					source: Bo,
					action: "view",
					noun: "dropdown",
					correlationId: Fo()
				}, Y.defaults(e));
			var Wo = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				Vo = s("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				Qo = s.n(Vo);
			var zo = e => {
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
					} = e, l = r ? wt.c : wt.f;
					return h.a.createElement("div", {
						className: Object(P.a)(t, Qo.a.CompactCoinPurchaseListItem)
					}, h.a.createElement("div", {
						className: Qo.a.productSection
					}, h.a.createElement("span", {
						className: Qo.a.primaryText
					}, i), h.a.createElement("span", {
						className: Object(P.a)(Qo.a.subtext, {
							[Qo.a.crossout]: d
						})
					}, Array.isArray(c) ? c.map((e, t) => h.a.createElement("p", {
						key: t
					}, e)) : c)), h.a.createElement("div", {
						className: Qo.a.priceSection
					}, h.a.createElement(l, {
						className: Object(P.a)(Qo.a.button, {
							[Qo.a.goldStyle]: r
						}),
						redditStyle: !0,
						onClick: o
					}, a), h.a.createElement("span", {
						className: Object(P.a)(Qo.a.buttonSubtext, {
							[Qo.a.crossout]: n
						})
					}, s)))
				},
				Zo = s("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				Ko = s.n(Zo);
			const Yo = Object(C.c)({
				coinPackages: Wo.b,
				isPremiumSubscriber: Q.q,
				premiumPackages: Wo.c,
				purchaseCatalogError: Wo.d,
				purchaseCatalogPending: Wo.e
			});
			class Jo extends h.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: s,
							sendEvent: n
						} = this.props;
						t && t(), n(Ho(e.coins)), s(e)
					}, this.handleClickBuyPremium = () => {
						const {
							onClick: e,
							onClickPremiumPackage: t,
							sendEvent: s
						} = this.props;
						e && e(), s(Go()), t()
					}, e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog()
				}
				getListItemData() {
					const {
						coinPackages: e,
						isPremiumSubscriber: t,
						premiumPackages: s,
						sorted: n
					} = this.props, a = e.map(e => {
						const {
							baselineCoins: t,
							baselinePennies: s,
							coins: n,
							pennies: a,
							bonusPct: r
						} = e, i = n.toLocaleString(), c = o.fbt._("{number of coins} Coins", [o.fbt._param("number of coins", i)], {
							hk: "1bO7gz"
						}), d = "$".concat(a / 100);
						let l, m;
						if (n !== t) {
							const e = t.toLocaleString();
							l = o.fbt._("{number of coins of non-sale pacakge} Coins", [o.fbt._param("number of coins of non-sale pacakge", e)], {
								hk: "30VbQ4"
							})
						}
						return {
							buttonSubtext: m = a !== s ? "$".concat(s / 100) : r ? o.fbt._("{percent bonus}% Bonus", [o.fbt._param("percent bonus", r.toLocaleString())], {
								hk: "2zgjZ1"
							}) : void 0,
							buttonText: d,
							coinPackage: e,
							primaryText: c,
							subtext: l
						}
					});
					n && a.sort((e, t) => {
						return (e.coinPackage ? e.coinPackage.coins : 0) - (t.coinPackage ? t.coinPackage.coins : 0)
					});
					const r = s.length ? s[0] : void 0;
					if (t || !r) return a;
					const {
						pennies: i,
						periodicalCoins: c,
						signupBonusCoins: d
					} = r, l = d ? d.toLocaleString() : void 0, m = "$".concat((i / 100).toLocaleString()), u = c.toLocaleString(), p = {
						buttonSubtext: l ? o.fbt._("{number of bonus coins} Bonus Coins", [o.fbt._param("number of bonus coins", l)], {
							hk: "3qu4dU"
						}) : void 0,
						buttonText: o.fbt._("{premium price}/mo", [o.fbt._param("premium price", m)], {
							hk: "4Cwbsj"
						}),
						isGoldStyle: !0,
						primaryText: o.fbt._("Premium", null, {
							hk: "45A9gK"
						}),
						subtext: [o.fbt._("{monthly coins} Coins/mo", [o.fbt._param("monthly coins", u)], {
							hk: "2fh3lO"
						}), o.fbt._("Ads free & more", null, {
							hk: "wO4Wc"
						})]
					};
					return a.concat(p)
				}
				render() {
					const {
						className: e,
						coinPackages: t,
						purchaseCatalogError: s,
						purchaseCatalogPending: n
					} = this.props;
					return n ? h.a.createElement("div", {
						className: e
					}, h.a.createElement("div", {
						className: Ko.a.loaderContainer
					}, h.a.createElement(Ao.a, {
						sizePx: 80
					}))) : s || !t.length ? h.a.createElement("div", {
						className: e
					}, h.a.createElement("div", {
						className: Ko.a.errorContainer
					}, o.fbt._("Oops, something went wrong", null, {
						hk: "4EQRS8"
					}))) : h.a.createElement("div", {
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
						return h.a.createElement(zo, {
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
			var Xo = Object(b.b)(Yo, e => ({
					onClickCoinPackage: t => e(Object(To.f)({
						coinsToPurchase: t.coins
					})),
					onClickPremiumPackage: () => e(Object(Ro.f)(Fo())),
					requestPurchaseCatalog: () => e(Object(_o.a)())
				}))(Object(de.c)(Jo)),
				$o = s("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				ei = s.n($o);
			const {
				fbt: ti
			} = s("./node_modules/fbt/lib/FbtPublic.js"), si = Object(rr.a)(Mr.a);
			class ni extends h.a.Component {
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
					e(qo())
				}
				renderDefaultHeader() {
					return h.a.createElement("div", {
						className: ei.a.header
					}, h.a.createElement("span", {
						className: ei.a.headerText
					}, ti._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), h.a.createElement(on.a, {
						className: ei.a.headerLink,
						to: "/coins"
					}, ti._("What are Coins?", null, {
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
					return h.a.createElement("div", {
						className: Object(P.a)(ei.a.header, ei.a.activeSale)
					}, s && h.a.createElement("img", {
						className: Object(P.a)(ei.a.saleHeaderImage, ei.a.activeSale),
						src: s
					}), h.a.createElement("span", {
						className: ei.a.headerText
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
					return h.a.createElement(si, {
						className: Object(P.a)(t, ei.a.CoinPurchaseDropdown, {
							[ei.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: s,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: a
					}, e ? this.renderSaleHeader() : this.renderDefaultHeader(), h.a.createElement(Xo, {
						className: ei.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			var ai = Object(de.c)(ni),
				ri = s("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				oi = s("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			var ii = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				ci = s("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				di = s.n(ci);
			const li = "COIN_PURCHASE_DROPDOWN_ID",
				mi = Object(C.c)({
					activeSaleConfig: Wo.a,
					activeTooltipId: Zr.a,
					coinPackages: Wo.b,
					coinPurchaseDropdownIsOpen: e => Object(Zr.b)(li)(e),
					coinPurchaseModalIsOpen: ii.q,
					premiumPurchaseModalIsOpen: ii.n,
					purchaseCatalogPending: Wo.e
				});
			class ui extends h.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							coinPurchaseDropdownIsOpen: s,
							sendEvent: n,
							toggleTooltip: a
						} = this.props;
						s || (Do(), Object(ri.b)(), Object(oi.b)(), n(Uo("get_coins_cta"))), a(t)
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
						coinPurchaseDropdownIsOpen: n,
						coinPurchaseModalIsOpen: a,
						premiumPurchaseModalIsOpen: r
					} = this.props, i = e ? e.ctaText ? e.ctaText : o.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : o.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					});
					return h.a.createElement("button", {
						className: Object(P.a)(t, di.a.ctaContainer, {
							[di.a.activeSale]: !!e
						}),
						id: li,
						onClick: this.handleClick
					}, h.a.createElement("div", {
						className: Object(P.a)(di.a.ctaContent, {
							[di.a.activeSale]: !!e
						})
					}, h.a.createElement(Cn.a, {
						className: Object(P.a)(di.a.icon, {
							[di.a.activeSale]: !!e
						})
					}), h.a.createElement("span", {
						className: di.a.text
					}, i)), h.a.createElement(ai, {
						activeSaleConfig: e,
						isOpen: n,
						onCloseTooltip: s,
						tooltipId: li
					}), a && h.a.createElement(ri.a, {
						isCompletePaypal: !1
					}), r && h.a.createElement(oi.a, null))
				}
			}
			var pi = Object(b.b)(mi, (e, t) => ({
					closeTooltip: () => e(Object(ar.i)()),
					requestPurchaseCatalog: () => e(Object(_o.a)()),
					toggleTooltip: t => {
						e(t === li ? Object(ar.i)() : Object(ar.f)({
							tooltipId: li
						}))
					}
				}))(Object(de.c)(ui)),
				hi = s("./src/reddit/components/HeaderIconContainer/index.m.less"),
				bi = s.n(hi);

			function gi() {
				return (gi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var fi = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Ci = _.a.button("Button", bi.a),
				Pi = _.a.div("Container", bi.a);
			var vi = e => {
					const {
						children: t,
						isOpen: s
					} = e, n = fi(e, ["children", "isOpen"]);
					return h.a.createElement(Ci, gi({}, n, {
						id: e.id,
						onClick: e.onClick
					}), h.a.createElement(Pi, {
						className: Object(P.a)({
							[bi.a.isOpen]: s
						})
					}, t))
				},
				xi = s("./src/chat/helpers/unreadCount.ts"),
				yi = s("./src/chat/models/Promo/index.ts"),
				Oi = s("./src/lib/prettyPrintNumber/index.ts"),
				Ei = s("./src/reddit/components/HeaderUserActions/index.m.less"),
				ji = s.n(Ei);
			var wi = e => {
					let {
						className: t,
						isActive: s,
						unreadCount: n
					} = e;
					return s ? h.a.createElement("span", {
						className: Object(P.a)(t, ji.a.counter, {
							[ji.a.isHighlighted]: s && n <= 0
						})
					}, n > 0 && Object(Oi.b)(n)) : null
				},
				Si = s("./src/reddit/helpers/trackers/chat.ts"),
				Mi = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				Ii = s("./src/reddit/selectors/chat.ts");
			const ki = Object(C.c)({
				promos: Ii.b,
				unreadCount: Ii.d
			});
			class Ni extends p.Component {
				componentDidMount() {
					this.props.promos[yi.a.SubredditChatFtux] && this.props.sendEvent(Object(Si.j)())
				}
				render() {
					const {
						promos: e,
						unreadCount: t
					} = this.props, {
						count: s,
						unread: n
					} = Object(xi.a)(t, e);
					return h.a.createElement(h.a.Fragment, null, h.a.createElement(wi, {
						isActive: n,
						unreadCount: s
					}), h.a.createElement(Mi.a, {
						className: Object(P.a)(ji.a.chatIcon, {
							[ji.a.isActive]: n
						})
					}))
				}
			}
			var _i = Object(b.b)(ki)(Object(de.c)(Ni)),
				Ti = s("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Ri = s.n(Ti);
			var Ai = e => {
				const {
					onCloseFlyout: t
				} = e;
				return h.a.createElement("div", {
					className: Ri.a.container
				}, h.a.createElement("p", {
					className: Ri.a.title
				}, h.a.createElement(jo.a, {
					msgId: "header.customizeFlyout.title"
				})), h.a.createElement("h5", {
					className: Ri.a.subtitle
				}, h.a.createElement(jo.a, {
					msgId: "header.customizeFlyout.subtitle"
				})), h.a.createElement("p", {
					className: Ri.a.description
				}, h.a.createElement(jo.a, {
					msgId: "header.customizeFlyout.description"
				})), h.a.createElement(wt.i, {
					className: Ri.a.dismissBtn,
					onClick: t
				}, h.a.createElement(jo.a, {
					msgId: "header.customizeFlyout.dismiss"
				})))
			};
			var Li = e => h.a.createElement(h.a.Fragment, null, h.a.createElement(wi, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), h.a.createElement(Pn.a, {
					className: Object(P.a)(ji.a.envelopeIcon, {
						[ji.a.isUnread]: !!e.unreadCount
					})
				})),
				Fi = s("./src/reddit/actions/alpha.ts"),
				Di = s("./src/reddit/actions/modMode.ts"),
				Bi = s("./src/reddit/constants/elementClassNames.ts"),
				Ui = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Hi = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Gi = s("./src/reddit/helpers/trackers/modTools.ts");
			const qi = e => ({
				screen: Y.screen(e),
				profile: Y.profile(e),
				subreddit: Y.subreddit(e)
			});
			var Wi = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				Vi = s("./src/reddit/icons/fonts/Premium/index.tsx"),
				Qi = s("./src/reddit/icons/svgs/Help/index.tsx"),
				zi = s("./src/reddit/icons/svgs/KarmaGray/index.m.less"),
				Zi = s.n(zi);
			var Ki = e => h.a.createElement("svg", {
					className: Object(P.a)(Zi.a.karma, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, h.a.createElement("path", {
					d: "M3.37,2.75a5.9,5.9,0,0,1,5.49,3.7.62.62,0,0,1-.29.79A3.16,3.16,0,0,0,7.24,8.57a.63.63,0,0,1-.79.29,5.89,5.89,0,0,1-3.7-5.49A.62.62,0,0,1,3.37,2.75Zm8.06,4.49a.63.63,0,0,1-.29-.79,5.89,5.89,0,0,1,5.49-3.7.61.61,0,0,1,.62.6v0a5.89,5.89,0,0,1-3.7,5.49.62.62,0,0,1-.79-.29A3.16,3.16,0,0,0,11.43,7.24Zm2.12,3.9a5.89,5.89,0,0,1,3.7,5.49.62.62,0,0,1-.62.62h0a5.89,5.89,0,0,1-5.49-3.7.63.63,0,0,1,.29-.79,3.16,3.16,0,0,0,1.33-1.33A.62.62,0,0,1,13.55,11.14Zm-5,1.62a.62.62,0,0,1,.29.79,5.89,5.89,0,0,1-5.49,3.7.62.62,0,0,1-.62-.62h0a5.9,5.9,0,0,1,3.7-5.49.62.62,0,0,1,.79.29,3.1,3.1,0,0,0,1.35,1.33ZM10,5.93A7.23,7.23,0,0,0,7.51,2.82,5,5,0,0,1,9.68.09a.61.61,0,0,1,.64,0,5,5,0,0,1,2.17,2.73A7.23,7.23,0,0,0,10,5.93Zm9.91,3.75a.61.61,0,0,1,0,.64,5,5,0,0,1-2.73,2.17A7.23,7.23,0,0,0,14.07,10a7.36,7.36,0,0,0,3.11-2.49A5,5,0,0,1,19.91,9.68ZM10,14.07a7.18,7.18,0,0,0,2.5,3.11,5,5,0,0,1-2.18,2.73.61.61,0,0,1-.64,0,5,5,0,0,1-2.17-2.73A7.23,7.23,0,0,0,10,14.07ZM5.93,10a7.23,7.23,0,0,0-3.11,2.49A5,5,0,0,1,.09,10.32a.61.61,0,0,1,0-.64A5,5,0,0,1,2.82,7.51,7.23,7.23,0,0,0,5.93,10Z"
				})),
				Yi = e => h.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, h.a.createElement("g", {
					fill: "inherit"
				}, h.a.createElement("path", {
					d: "M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"
				})));
			var Ji = e => h.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, h.a.createElement("path", {
					d: "M10,8 C8.619,8 7.5,9.5 7.5,9.5 C7.5,9.5 8.619,11 10,11 C11.381,11 12.5,9.5 12.5,9.5 C12.5,9.5 11.381,8 10,8 M15.1338,14 L4.8658,14 C4.4818,14 4.2398,13.583 4.4328,13.25 L9.5678,4.357 C9.7598,4.024 10.2398,4.024 10.4328,4.357 L15.5678,13.25 C15.7598,13.583 15.5188,14 15.1338,14 M17.2748,3.038 L10.2748,1.038 C10.0948,0.987 9.9048,0.987 9.7258,1.038 L2.7258,3.038 C2.2958,3.161 1.9998,3.554 1.9998,4 L1.9998,11 C1.9998,16.688 9.4098,18.871 9.7258,18.962 C9.8158,18.987 9.9068,19 9.9998,19 C10.0928,19 10.1848,18.987 10.2748,18.962 C10.5898,18.871 17.9998,16.688 17.9998,11 L17.9998,4 C17.9998,3.554 17.7038,3.161 17.2748,3.038"
				})),
				Xi = e => h.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, h.a.createElement("g", {
					fill: "inherit"
				}, h.a.createElement("path", {
					d: "M15,15.5 L5,15.5 C4.724,15.5 4.5,15.276 4.5,15 C4.5,12.755 6.326,10.929 8.571,10.929 L11.429,10.929 C13.674,10.929 15.5,12.755 15.5,15 C15.5,15.276 15.276,15.5 15,15.5 M10,4.5 C11.405,4.5 12.547,5.643 12.547,7.048 C12.547,8.452 11.405,9.595 10,9.595 C8.595,9.595 7.453,8.452 7.453,7.048 C7.453,5.643 8.595,4.5 10,4.5 M16,2 L4,2 C2.897,2 2,2.897 2,4 L2,16 C2,17.103 2.897,18 4,18 L16,18 C17.103,18 18,17.103 18,16 L18,4 C18,2.897 17.103,2 16,2"
				}))),
				$i = e => h.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, h.a.createElement("g", {
					fill: "inherit"
				}, h.a.createElement("path", {
					d: "M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"
				}))),
				ec = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				tc = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				sc = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				nc = e => h.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, h.a.createElement("g", {
					fill: "inherit"
				}, h.a.createElement("path", {
					d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
				}))),
				ac = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				rc = s("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				oc = s.n(rc);
			const ic = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				cc = _.a.wrapped(Mr.a, "Dropdown", oc.a),
				dc = Object(rr.a)(cc),
				lc = e => h.a.createElement(Hi.a, {
					className: oc.a.button,
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, h.a.createElement("div", {
					className: oc.a.buttonText
				}, e.displayText), h.a.createElement(Ui.a, {
					className: oc.a.toggleSwitch,
					"data-redditstyle": !0,
					on: e.isEnabled
				})),
				mc = Object(b.b)(() => Object(C.c)({
					language: e => e.user.language,
					isModModeEnabled: Zt.t,
					isOpen: Object(Zr.b)("USER_DROPDOWN_ID"),
					nightmode: Q.Q,
					url: Qt.r
				}), e => ({
					toggleNightmode: t => e(Object(A.w)(t)),
					onOptIntoRedesign: () => e(Object(Fi.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Ye.a.get("rseor3") && Ye.a.remove("rseor3", {
							domain: T.a.cookieDomain
						}), e(Object(Fi.b)(!0))) : window.location.host = "old.reddit.com"
					},
					dispatchOpenLoginModal: () => e(Object(bo.e)()),
					logoutUser: () => e(Object(xo.s)()),
					toggleModMode: () => e(Object(Di.b)())
				}));
			var uc = Object(Fn.t)({
					pageLayer: e => e
				})(mc(Object(de.c)(e => {
					const {
						language: t,
						logoutUser: s,
						dispatchOpenLoginModal: n,
						isModModeEnabled: a,
						nightmode: r,
						toggleModMode: o,
						user: i
					} = e, c = Object(Hi.b)(sc.a, Object(dn.a)(t, "headerDropdown.userSettings"), !1), d = Object(Hi.b)(Qi.a, Object(dn.a)(t, "headerDropdown.helpCenter"), !0), l = Object(Hi.b)(ec.a, Object(dn.a)(t, "headerDropdown.visitOldReddit"), !0), m = Object(Hi.b)(Yi, Object(dn.a)(t, "headerDropdown.loginSignup")), u = Object(Hi.b)(Yi, Object(dn.a)(t, "headerDropdown.logout")), b = Object(Hi.b)(nc, Object(dn.a)(t, "headerDropdown.optIn"), !1), g = (e => {
						const s = e && e.coins || 0;
						return Object(dn.a)(t, "gold.coinsNum", {
							num: s.toLocaleString()
						})
					})(i), f = Object(Hi.b)(Cn.a, Object(dn.a)(t, "headerDropdown.coins"), !1, g), C = Object(Hi.b)(kn.a, Object(dn.a)(t, "headerDropdown.premium"), !1);
					return h.a.createElement("div", {
						className: Object(P.a)(oc.a.container, Bi.e)
					}, h.a.createElement(ac.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(P.a)(e.className, oc.a.inlineButton, {
							[oc.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("user")
						}
					}, h.a.createElement("span", {
						className: oc.a.accountDisplayText
					}, (e => e ? h.a.createElement("span", {
						className: Object(P.a)(oc.a.accountWrapper, oc.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && h.a.createElement("img", {
						alt: Object(Mt.c)("Account icon"),
						className: oc.a.imgIcon,
						src: e.accountIcon
					}), h.a.createElement("span", {
						className: oc.a.accountDetails
					}, h.a.createElement("span", {
						className: oc.a.username
					}, e.displayText, e.isGold && h.a.createElement(Vi.a, {
						className: oc.a.premiumFontIcon,
						title: Object(Mt.c)("Reddit Premium")
					})), h.a.createElement(h.a.Fragment, null, h.a.createElement("span", {
						className: oc.a.accountKarma
					}, h.a.createElement(Ki, null), h.a.createElement("span", null, (e => {
						const s = e.commentKarma + e.postKarma,
							n = Object(Oi.b)(s);
						return Object(dn.a)(t, "account.karmaTotal", {
							karma: n
						})
					})(e))), !!e.coins && h.a.createElement("span", {
						className: oc.a.accountCoins
					}, h.a.createElement(Wi.a, {
						className: oc.a.coinFontIcon
					}), h.a.createElement("span", null, (e => Object(Oi.b)(e.coins || 0))(e)))))) : h.a.createElement("span", {
						className: Object(P.a)(oc.a.accountWrapper, oc.a.isLoggedOut)
					}, h.a.createElement(tc.a, {
						className: oc.a.myProfileIcon
					})))(e.user), h.a.createElement(Ua.b, {
						className: oc.a.dropdownTriangle
					})), h.a.createElement(Za.a, null, h.a.createElement(ue.c, null, "User account menu"))), h.a.createElement(dc, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, i && h.a.createElement(p.Fragment, null, h.a.createElement("h3", {
						className: oc.a.sectionHeader,
						role: "heading"
					}, h.a.createElement(ue.c, null, "My Stuff")), ((e, t) => {
						const s = Object(dn.a)(t, "headerDropdown.myProfile"),
							n = Object(Hi.b)(Xi, s, !1);
						return h.a.createElement(n, {
							href: e.url
						})
					})(i, t), h.a.createElement(c, {
						href: "/settings"
					})), h.a.createElement("h3", {
						className: oc.a.sectionHeader,
						role: "heading"
					}, h.a.createElement(ue.c, null, "View Options")), i && i.isMod && h.a.createElement(lc, {
						displayText: Object(Mt.c)("Mod Mode"),
						isEnabled: a,
						onClick: () => {
							e.sendEvent(Object(Gi.h)(!a)), o()
						}
					}, h.a.createElement(Ji, {
						className: oc.a.modModeIcon
					})), h.a.createElement(lc, {
						displayText: "Night Mode",
						isEnabled: r,
						onClick: () => {
							e.sendEvent((e => t => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: e ? "night_mode_off" : "night_mode_on"
							}, qi(t)))(r)), e.toggleNightmode(!r)
						}
					}, h.a.createElement($i, {
						className: oc.a.nightIcon
					})), h.a.createElement("h3", {
						className: oc.a.sectionHeader,
						role: "heading"
					}, h.a.createElement(ue.c, null, "More Stuff")), h.a.createElement(p.Fragment, null, h.a.createElement(f, {
						href: "/coins",
						onClick: () => {
							wa.f(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: wa.e()
							}, qi(e)))())
						}
					}), h.a.createElement(C, {
						href: "/premium",
						onClick: () => {
							Sa.g(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: Sa.f()
							}, qi(e)))())
						}
					})), h.a.createElement(d, {
						href: "https://www.reddithelp.com"
					}), i && h.a.createElement(l, {
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
					}), !ic && i && h.a.createElement(b, {
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
					}), h.a.createElement("div", {
						className: oc.a.divider
					}), i ? h.a.createElement(u, {
						href: "#",
						onClick: e => {
							s(), e.preventDefault()
						}
					}) : h.a.createElement(m, {
						href: "#",
						onClick: t => {
							Object(w.a)(t) && (t.preventDefault(), t.stopPropagation(), n(), e.sendEvent(Object(go.b)()))
						}
					})))
				}))),
				pc = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				hc = s("./src/reddit/helpers/trackers/navigation.ts");
			const bc = "HeaderUserActions--Chat",
				gc = "email-verification-tooltip-id",
				fc = "HeaderUserActions--Messages",
				Cc = "HeaderUserActions--Moderation",
				Pc = "HeaderUserActions--NewPost",
				vc = Object(Fn.t)({
					pageLayer: e => e
				}),
				xc = Object(C.c)({
					activeDropdownId: Zr.a,
					email: Q.l,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isModerator: Tt.h,
					shouldOpenEmailVerificationTooltip: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(Fn.I)(s) && !!Object(Q.l)(e) && !Object(Q.w)(e) && Object(Q.G)(e) && !Object(Q.E)(e)
					},
					unreadNotifications: Q.bb
				}),
				yc = Object(b.b)(xc, (e, t) => ({
					closeEmailVerificationTooltip: () => e(Object(Po.b)()),
					onChatClick: () => e(Object(Co.c)()),
					onDismissCustomizeFlyout: () => e(Object(A.s)()),
					onOpenModerationDropdown: () => e(Object(ar.h)({
						tooltipId: pc.a
					})),
					onOpenUserDropdown: () => e(Object(ar.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleChangeEmailModal: () => {
						e(Object(Po.b)()), e(Object(Xe.i)(yo.a))
					},
					toggleTooltip: t => e(Object(ar.h)({
						tooltipId: t
					})),
					resendEmail: () => e(Object(xo.y)(wo.a)),
					requestCreatePost: () => {
						t.pageLayer && e(vo.p(t.pageLayer))
					}
				}));
			class Oc extends h.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => this.props.sendEvent(Object(hc.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
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
						onOpenUserDropdown: d,
						resendEmail: l,
						shouldOpenEmailVerificationTooltip: m,
						toggleTooltip: u,
						toggleChangeEmailModal: b,
						unreadNotifications: g,
						user: f
					} = this.props, C = !(!g || !g.hasUnreadModmail && !g.hasUnreadOldModmail), v = (e, t) => h.a.createElement(or.c, {
						caretOnTop: !0,
						tooltipId: e,
						text: t
					});
					return h.a.createElement(It.a, {
						id: gc,
						ref: e => this.container = e,
						className: t
					}, h.a.createElement(It.a, {
						className: ji.a.headerLinks
					}, o && h.a.createElement(p.Fragment, null, h.a.createElement("span", {
						className: ji.a.iconWrapper,
						id: Cc,
						key: Cc,
						onMouseEnter: () => u(Cc),
						onMouseLeave: () => e === Cc && u(Cc)
					}, h.a.createElement(vi, {
						"aria-expanded": e === pc.a,
						"aria-haspopup": !0,
						"aria-label": Object(Mt.c)("Moderation"),
						id: pc.a,
						onClick: this.onOpenModerationDropdown,
						isOpen: e === pc.a
					}, h.a.createElement(En.a, {
						className: Object(P.a)(ji.a.moderateIcon, {
							[ji.a.isLit]: C
						})
					})), v(Cc, Object(dn.a)(i, "header.moderation"))), h.a.createElement(pc.b, {
						className: ji.a.moderationDropdown,
						isOpen: e === pc.a,
						key: pc.a,
						unreadNotifications: g,
						sendEventWithName: this.sendEventWithName
					})), f && h.a.createElement(p.Fragment, null, h.a.createElement("span", {
						className: ji.a.iconWrapper,
						id: bc,
						key: bc,
						onMouseEnter: () => u(bc),
						onMouseLeave: () => e === bc && u(bc)
					}, h.a.createElement("a", {
						className: ji.a.link,
						href: "".concat(T.a.redditUrl, "/chat"),
						onClick: Object(fo.a)(this.onClickChat)
					}, h.a.createElement(_i, null)), v(bc, Object(dn.a)(i, "header.chat"))), h.a.createElement("span", {
						className: ji.a.iconWrapper,
						id: fc,
						key: fc,
						onMouseEnter: () => u(fc),
						onMouseLeave: () => e === fc && u(fc)
					}, h.a.createElement("a", {
						className: ji.a.link,
						href: g && g.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: this.onClickMail
					}, h.a.createElement(Li, {
						unreadCount: g && g.inboxCount || 0
					})), v(fc, Object(dn.a)(i, "header.messages"))), h.a.createElement("span", {
						className: ji.a.iconWrapper,
						id: Pc,
						key: Pc,
						onMouseEnter: () => u(Pc),
						onMouseLeave: () => e === Pc && u(Pc)
					}, h.a.createElement("button", {
						className: ji.a.link,
						"aria-label": Object(Mt.c)("Create Post"),
						onClick: this.onClickCreatePost
					}, h.a.createElement(In.a, {
						className: ji.a.postIcon
					})), v(Pc, Object(dn.a)(i, "header.newPost"))), h.a.createElement("span", {
						className: ji.a.iconWrapper
					}, h.a.createElement(pi, null)))), h.a.createElement(uc, {
						className: ji.a.headerUserDropdown,
						onClick: d,
						user: f,
						sendEventWithName: this.sendEventWithName
					}), a && h.a.createElement(Ai, {
						onCloseFlyout: c
					}), h.a.createElement(No, {
						closeTooltip: s,
						email: n,
						isOpen: m && r,
						resendEmail: l,
						toggleChangeEmailModal: b,
						tooltipId: gc
					}), h.a.createElement(Oo, {
						email: n,
						language: i,
						shouldOpenTooltip: m
					}))
				}
			}
			var Ec = Object(de.c)(vc(yc(Oc))),
				jc = s("./src/reddit/components/Header/User/index.m.less"),
				wc = s.n(jc);
			const Sc = Object(C.c)({
					account: e => e.user.account,
					language: e => e.user.language,
					origin: K.h
				}),
				Mc = h.a.memo(e => h.a.createElement("div", {
					className: Object(P.a)(e.className, wc.a.row)
				}, !e.account && function(e) {
					const t = e.pageLayer,
						s = T.a.accountManagerOrigin,
						n = t ? t.url : "/",
						a = t && t.meta && t.meta.name === v.Ab.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + n);
					return h.a.createElement("div", {
						className: wc.a.loggedOutRow
					}, h.a.createElement(wt.j, {
						redditStyle: !0,
						className: Object(P.a)(wc.a.login, wc.a.button),
						href: "".concat(s, "/login/?dest=").concat(a),
						onClick: t => {
							Object(w.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(go.a)("nav")))
						}
					}, h.a.createElement(ue.c, null, "log in")), h.a.createElement(wt.g, {
						redditStyle: !0,
						className: Object(P.a)(wc.a.separator, wc.a.register, wc.a.button),
						href: "".concat(s, "/register/?dest=").concat(a),
						onClick: t => {
							Object(w.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(go.c)("nav")))
						}
					}, h.a.createElement(ue.c, null, "sign up")))
				}(e), h.a.createElement(Ec, {
					className: Object(P.a)({
						[wc.a.loggedOut]: !e.account
					}),
					language: e.language,
					user: e.account
				})));
			var Ic = Object(Fn.t)()(Object(b.b)(Sc, e => ({
					onOpenLoginModal: () => {
						e(Object(Xe.k)({
							actionSource: Xe.a.HeaderLogin
						})), e(Object(bo.e)())
					},
					onOpenRegisterModal: () => {
						e(Object(Xe.k)({
							actionSource: Xe.a.HeaderSignup
						})), e(Object(bo.f)())
					}
				}))(Object(de.c)(Mc))),
				kc = s("./src/reddit/components/Header/index.m.less"),
				Nc = s.n(kc);

			function _c() {
				return (_c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Tc = _.a.header("HeaderDynamicStyles", Nc.a),
				Rc = Object(C.c)({
					isLoggedIn: Q.G,
					isNightmode: Q.Q,
					language: e => e.user.language,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Ac = Object(Fn.t)({
					categoryName: Fn.b,
					pageLayer: e => e
				}),
				Lc = e => h.a.createElement("div", {
					className: Nc.a.left
				}, h.a.createElement(Za.a, null, h.a.createElement(ue.c, null, "Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts")), h.a.createElement(za.b, null), h.a.createElement(on.a, {
					"aria-label": Object(Mt.c)("Home"),
					className: Nc.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, h.a.createElement(no.a, {
					className: Nc.a.snoo
				}), h.a.createElement(ao.a, {
					className: Nc.a.wordmark
				})), e.children),
				Fc = e => h.a.createElement("div", {
					className: Nc.a.right
				}, e.children, h.a.createElement(Ic, null)),
				Dc = e => h.a.createElement("div", {
					className: Nc.a.layout
				}, h.a.createElement(Lc, _c({}, e, {
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), h.a.createElement(Qa, null), h.a.createElement(so, {
					className: Nc.a.search
				})), h.a.createElement(Fc, null, h.a.createElement(ho, {
					className: Nc.a.quickLinks
				}))),
				Bc = e => h.a.createElement("div", {
					className: Nc.a.layout
				}, h.a.createElement(Lc, _c({}, e, {
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), h.a.createElement("div", {
					className: Nc.a.searchContainer
				}, h.a.createElement(so, {
					className: Nc.a.search
				}))), h.a.createElement(Fc, null));
			var Uc = Ac(Object(b.b)(Rc, e => ({
					onReloadFrontpage: () => e(Object(cn.x)(!0))
				}))((function(e) {
					let t;
					return t = e.isLoggedIn ? Dc : Bc, h.a.createElement(Tc, {
						"data-redditstyle": !0,
						className: Object(P.a)(Nc.a.container, e.className, {
							[Nc.a.bladeIsOpen]: e.isBladeOpen
						})
					}, h.a.createElement(t, {
						categoryName: e.categoryName,
						language: e.language,
						onReloadFrontpage: e.onReloadFrontpage
					}))
				}))),
				Hc = s("./src/reddit/components/LightboxHeader/index.tsx"),
				Gc = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				qc = s("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Wc = s.n(qc);
			const Vc = Object(b.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(S.j)())
			}));
			var Qc = _.a.wrapped(Vc((function(e) {
					return h.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, h.a.createElement("div", {
						className: Wc.a.title
					}, h.a.createElement(da, {
						className: Wc.a.listHeader
					}, h.a.createElement(ue.c, null, "My Communities")), h.a.createElement("div", {
						className: Wc.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, h.a.createElement(H.a, {
						className: Wc.a.icon
					}))), h.a.createElement(Fa, null))
				})), "Component", Wc.a),
				zc = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Zc = s("./src/reddit/actions/toaster.ts");
			const Kc = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Yc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, Y.actionInfo(t), {
						reason: "primary"
					})
				}),
				Jc = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, Y.actionInfo(t), {
						reason: "secondary"
					})
				});
			var Xc = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				$c = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				ed = s("./src/reddit/models/Toast/index.ts"),
				td = s("./src/reddit/selectors/structuredStyles.ts"),
				sd = s("./src/reddit/components/Toaster/PlainBread.m.less"),
				nd = s.n(sd);

			function ad() {
				return (ad = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var rd = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const od = e => {
				const t = xn.a;
				switch (e.kind) {
					case ed.b.Error:
					case ed.b.AuthError:
						return t.warning;
					case ed.b.SuccessCommunity:
						return t.op;
					case ed.b.SuccessCommunityGreen:
					case ed.b.SuccessMod:
						return t.approved;
					case ed.b.EuCookiePolicy:
					case ed.b.UappBanner:
					case ed.b.Undo:
					default:
						return t.op
				}
			};
			class id extends h.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const e = this.props,
						{
							kind: t,
							sendEvent: s
						} = e,
						n = rd(e, ["kind", "sendEvent"]);
					return h.a.createElement("div", n)
				}
			}
			const cd = _.a.wrapped(id, "PlainBread", nd.a);
			var dd = e => h.a.createElement(cd, ad({}, e, {
					style: Object.assign({}, e.style || {}, {
						"--Toaster-indicatorColor": od(e)
					})
				})),
				ld = s("./src/reddit/components/Toaster/StyledComponents.m.less"),
				md = s.n(ld);
			const ud = _.a.span("Text", md.a);
			var pd = s("./src/reddit/components/Toaster/index.m.less"),
				hd = s.n(pd);
			const {
				fbt: bd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), gd = _.a.wrapped(Xc.a, "AuthErrorToastIcon", hd.a), fd = _.a.wrapped(wt.f, "AuthErrorToastPrimaryButton", hd.a);
			class Cd extends h.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), window.location.reload(!0)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return h.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, h.a.createElement(dd, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, h.a.createElement(gd, null), h.a.createElement(ud, null, bd._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), h.a.createElement(fd, {
						type: "submit"
					}, bd._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Pd = Cd,
				vd = s("./src/lib/constants/euCookiePolicy.ts"),
				xd = s("./src/lib/permanentCookieOptions.ts"),
				yd = s("./src/reddit/controls/Link/index.tsx"),
				Od = s("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Ed = s.n(Od);
			const {
				fbt: jd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), wd = _.a.div("Icon", Ed.a), Sd = () => h.a.createElement(wd, {
				style: {
					backgroundImage: "url(".concat(T.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), Md = _.a.wrapped(wt.f, "PrimaryButton", Ed.a), Id = _.a.wrapped(dd, "Bread", Ed.a);
			class kd extends h.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ye.a.set(Kt.b, vd.b.toString(), Object(xd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return h.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, h.a.createElement(Id, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, h.a.createElement(Sd, null), h.a.createElement(ud, null, jd._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", h.a.createElement(yd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, jd._("Learn More", null, {
						hk: "1fsN6Z"
					})), "."), h.a.createElement(Md, {
						type: "submit"
					}, jd._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var Nd, _d = kd;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Nd || (Nd = {}));
			var Td = s("./src/reddit/controls/Typography/index.tsx"),
				Rd = s("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Ad = s.n(Rd);

			function Ld() {
				return (Ld = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Fd = _.a.div("Container", Ad.a),
				Dd = _.a.img("SideImage", Ad.a),
				Bd = _.a.div("Main", Ad.a),
				Ud = _.a.div("SubTitle", Ad.a),
				Hd = Td.c,
				Gd = _.a.wrapped(wt.g, "PrimaryLinkButton", Ad.a),
				qd = _.a.wrapped(H.a, "CloseIcon", Ad.a);
			class Wd extends h.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Yc(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Kc(this.props.name))
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
					return h.a.createElement(Fd, {
						key: t,
						style: Object.assign({}, n, {
							transform: "\n            translateY(".concat(n.y, "px)\n            scale(").concat(n.x, ", ").concat(n.x, ")\n          ")
						})
					}, h.a.createElement(qd, {
						onClick: this.props.onClose
					}), h.a.createElement(Dd, {
						srcSet: s
					}), h.a.createElement(Bd, null, h.a.createElement(Ud, null, a), h.a.createElement(Td.d, null, r), h.a.createElement(Hd, null, e), h.a.createElement(Gd, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, o.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Vd = Object(b.b)(null, e => ({
					onSignup: () => e(Object(bo.f)())
				}))(Object(de.c)(Wd)),
				Qd = "".concat(zd("subscribe-cap.png"), " 1x,\n  ").concat(zd("subscribe-cap@2x.png"), " 2x,");

			function zd(e) {
				return "".concat(T.a.assetPath, "/img/banner/").concat(e)
			}
			const Zd = 3,
				Kd = e => "".concat(e, ":").concat(152721e4);
			var Yd = s("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Jd = s.n(Yd);
			const {
				fbt: Xd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), $d = _.a.div("Icon", Jd.a), el = () => h.a.createElement($d, {
				style: {
					backgroundImage: "url(".concat(T.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), tl = _.a.wrapped(wt.f, "PrimaryButton", Jd.a), sl = _.a.wrapped(dd, "Bread", Jd.a);
			class nl extends h.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ye.a.set(Kt.i, Kd(Zd), Object(xd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return h.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, h.a.createElement(sl, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, h.a.createElement(el, null), h.a.createElement(ud, null, Xd._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Xd._param("=User Agreement", h.a.createElement(yd.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Xd._("User Agreement", null, {
						hk: "XS57W"
					}))), Xd._param("=Privacy Policy", h.a.createElement(yd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Xd._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), h.a.createElement(tl, {
						type: "submit"
					}, Xd._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var al = nl;

			function rl() {
				return (rl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ol = [],
				il = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				cl = {
					opacity: .5,
					x: .5,
					y: 50
				},
				dl = {
					opacity: Object(N.spring)(0),
					x: Object(N.spring)(.6),
					y: Object(N.spring)(80, il)
				},
				ll = _.a.wrapped(Xc.a, "SnooFacepalm", hd.a),
				ml = _.a.wrapped($c.a, "SnooHappy", hd.a),
				ul = _.a.wrapped(bn.b, "SubredditIcon", hd.a),
				pl = _.a.div("Container", hd.a),
				hl = _.a.wrapped(H.a, "Close", hd.a),
				bl = e => h.a.createElement(h.a.Fragment, null, h.a.createElement(hl, rl({
					className: "CloseIcon"
				}, e))),
				gl = _.a.wrapped(dd, "Bread", hd.a),
				fl = Object(C.c)({
					subredditIcon: td.c,
					toastSlices: e => e.toaster
				}),
				Cl = Object(b.b)(fl, e => ({
					dismissToast: t => () => e(Object(Zc.f)(t)),
					onButtonClick: (t, s) => () => {
						e(t), e(Object(Zc.f)(s))
					}
				}));
			class Pl extends h.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => vl(e, this.props.toastSlices), this.getWillEnterStyles = () => cl, this.getWillLeaveStyles = () => dl
				}
				render() {
					return this.props.toastSlices.length ? h.a.createElement(N.TransitionMotion, {
						defaultStyles: ol,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => h.a.createElement(pl, null, e.map(e => {
						const t = e.data,
							s = Object.assign({}, e.style, {
								transform: "\n                  translateY(".concat(e.style.y, "px)\n                  scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n                ")
							});
						if (t.kind === ed.b.Custom && void 0 !== t.customToastType) {
							const n = yl[t.customToastType];
							return h.a.createElement(n, {
								key: e.key,
								toast: t,
								style: s,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === ed.b.UappBanner) return h.a.createElement(al, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === ed.b.EuCookiePolicy) return h.a.createElement(_d, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === ed.b.AuthError) return h.a.createElement(Pd, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						const n = t.kind === ed.b.Modal ? wt.f : wt.n,
							a = t.kind === ed.b.Modal ? wt.i : wt.n;
						return h.a.createElement(gl, {
							className: t.kind === ed.b.Modal ? hd.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(Kc(t.name)) : void 0,
							style: s
						}, h.a.createElement("div", {
							className: hd.a.ContentWrapper
						}, xl(t, this.props.subredditIcon), h.a.createElement(ud, null, t.text)), h.a.createElement("div", {
							className: hd.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && h.a.createElement(n, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Yc(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && h.a.createElement(a, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Jc(t.name))
							}
						}, t.secondButtonText)), h.a.createElement(bl, {
							onClick: this.props.dismissToast(t.id)
						}))
					}))) : null
				}
			}
			const vl = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(N.spring)(1),
							x: Object(N.spring)(1, il),
							y: Object(N.spring)(0, il)
						}
					}))
				},
				xl = (e, t) => {
					switch (e.kind) {
						case ed.b.Error:
							return h.a.createElement(ll, null);
						case ed.b.SuccessCommunity:
						case ed.b.SuccessCommunityGreen:
							return h.a.createElement(ml, null);
						case ed.b.SuccessMod:
							return h.a.createElement(ul, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				yl = {
					[ed.a.subscribeCap]: e => h.a.createElement(Vd, Ld({
						name: Nd.LoggedOutMaxSubscriptions,
						sideImage: Qd,
						title: o.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: o.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Ol = Cl(Object(de.c)(Pl)),
				El = s("./src/reddit/featureFlags/profileCollections.ts"),
				jl = s("./src/reddit/helpers/trackers/banners.ts"),
				wl = s("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Sl = s.n(wl);
			var Ml = _.a.div("Wrapper", Sl.a),
				Il = s("./src/reddit/components/AlertBanner/index.m.less"),
				kl = s.n(Il);
			const {
				fbt: Nl
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _l = () => h.a.createElement(Ml, {
				className: Object(P.a)(kl.a.wrapper, kl.a.suspended)
			}, h.a.createElement("span", null, Nl._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), h.a.createElement("a", {
				className: kl.a.underlineLink,
				href: "https://www.reddithelp.com/en/node/851"
			}, Nl._("Learn more", null, {
				hk: "1OTc8q"
			}))), Tl = () => h.a.createElement(Ml, {
				className: Object(P.a)(kl.a.wrapper, kl.a.fpr)
			}, h.a.createElement("span", null, Nl._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), h.a.createElement("a", {
				className: kl.a.underlineLink,
				href: "https://www.reddithelp.com/en/categories/using-reddit/your-reddit-account/my-account-was-disabled"
			}, Nl._("Learn more", null, {
				hk: "1OTc8q"
			}))), Rl = e => {
				let {
					updateLink: t,
					onClickOldReddit: s
				} = e;
				return h.a.createElement(Ml, {
					className: Object(P.a)(kl.a.wrapper, kl.a.deprecated)
				}, h.a.createElement("span", null, Nl._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [Nl._param("update your browser", h.a.createElement(Al, {
					link: t
				}, Nl._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), h.a.createElement("span", null, Nl._("If you do not update your browser, we suggest you visit {old reddit} .", [Nl._param("old reddit", h.a.createElement("a", {
					className: kl.a.underlineLink,
					href: T.a.oldRedditUrl,
					onClick: s
				}, Nl._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, Al = e => {
				let {
					children: t,
					link: s
				} = e;
				return null !== s ? h.a.createElement("a", {
					className: kl.a.underlineLink,
					href: s
				}, t) : h.a.createElement("span", null, t)
			};
			class Ll extends h.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(jl.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(jl.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: s
					} = this.props;
					return e && e.isDeprecated ? h.a.createElement(Rl, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? h.a.createElement(Tl, null) : s ? h.a.createElement(_l, null) : null
				}
			}
			var Fl = Object(de.c)(Ll),
				Dl = s("./src/reddit/components/AlertBanner/heights.ts"),
				Bl = s("./src/reddit/components/PopupPortal/index.tsx"),
				Ul = s("./src/reddit/constants/componentSizes.ts"),
				Hl = s("./src/reddit/constants/elementIds.ts"),
				Gl = s("./src/reddit/constants/posts.ts"),
				ql = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Wl = s("./src/reddit/contexts/Language.tsx"),
				Vl = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Ql = s("./src/reddit/helpers/postCollection.ts"),
				zl = s("./src/reddit/models/Theme/index.ts"),
				Zl = s("./src/reddit/selectors/notificationBanner.ts"),
				Kl = s("./src/reddit/selectors/posts.ts"),
				Yl = s("./src/reddit/components/AppRouter/index.m.less"),
				Jl = s.n(Yl);

			function Xl() {
				return (Xl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return sm
			}));
			var $l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const em = e => {
					var {
						className: t,
						shouldDisplayPinnedSubscriptions: s
					} = e, n = $l(e, ["className", "shouldDisplayPinnedSubscriptions"]);
					return h.a.createElement("div", Xl({
						className: Object(P.a)(Jl.a.main, {
							[Jl.a.mShowingPaddedPinnedDescriptions]: s
						}, t)
					}, n))
				},
				tm = Object(x.a)(e => {
					var {
						className: t,
						theme: s
					} = e, n = $l(e, ["className", "theme"]);
					const a = Object(he.a)(Object.assign({
						theme: s
					}, n));
					return h.a.createElement("div", Xl({
						className: Object(P.a)(Jl.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(zl.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition)
						}
					}, n))
				}),
				sm = e => {
					var {
						className: t,
						divRef: s
					} = e, n = $l(e, ["className", "divRef"]);
					return h.a.createElement("div", Xl({
						className: Object(P.a)(Jl.a.lightboxHeaderWrapper, t)
					}, n, {
						ref: s
					}))
				},
				nm = Object(b.b)(() => Object(C.c)({
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
					isSubscriptionsPinned: Ga.b,
					isSuspended: Q.K,
					isFPR: Q.E,
					posts: Kl.P,
					profileCollectionsEnabled: El.a,
					showEmailCollectionBanner: Object(Zl.a)(Gc.a.EmailCollectionBannerId)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(f.b)(t)),
					onUnpinSubscriptions: () => e(Object(S.j)())
				})),
				am = (e, t) => !(!e.state || !e.state[F.a.IsOverlay] || t === e);
			class rm extends h.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.resizeHandler = u()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Ul.l && this.props.onUnpinSubscriptions()
					}, v.G), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: s
						} = this.props;
						if (Object(Fn.w)(e)) {
							const n = e && e.urlParams && e.urlParams.partialPostId,
								a = "".concat(v.xb.Post, "_").concat(n),
								r = t && n && t[a],
								o = r && r.belongsTo.type === Gl.a.PROFILE;
							return !(!r || !Object(Ql.a)(r) || o && !s)
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
					} = this.props, s = t.state && t.state[F.a.IsOverlay], n = Object(j.a)(this.previousLocation, e.location), a = Object(j.a)(this.previousLocation, this.props.location), r = s ? this.previousPage : this.props.currentPage;
					if (r) {
						const {
							meta: t,
							urlParams: s
						} = r, n = t && (t.name === v.Ab.INDEX || t.name === v.Ab.SUBREDDIT && s.subredditName === D.b.Popular), a = Object(q.c)(this.props.frontpageSignupVariant), o = Object(q.c)(e.frontpageSignupVariant);
						n || a || !o ? a && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || n || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const o = am(e.location, this.previousLocation);
					O.a.write(() => {
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
						location: d,
						onClickOutsideOverlay: m,
						routes: u,
						showEmailCollectionBanner: b
					} = this.props, {
						isSignupUpsellDisplayed: g,
						isSignupUpsellHidden: f
					} = this.state, C = this.context, P = am(d, this.previousLocation);
					d.state && d.state[F.a.IsOverlay] && !P ? d.state[F.a.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[F.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[F.a.CloseLocation] && this.previousLocation.state[F.a.CloseLocation] === d.state[F.a.CloseLocation] ? d.state[F.a.CloseLocation] = Object.assign({}, this.previousLocation, {
						state: l()(this.previousLocation.state, F.a.CloseLocation)
					}) : d.state[F.a.CloseLocation] = this.previousLocation);
					const x = Object(j.a)(this.previousLocation, d),
						y = P || x ? this.previousLocation : d,
						O = P || x ? this.previousPage : e,
						E = !(!(O && O.meta && O.meta.name === v.Ab.SEARCH_RESULTS && O && O.queryParams) || O.queryParams[B.p]),
						w = !(!O || !O.meta || O.meta.name !== v.Ab.MODERATION_PAGES),
						S = Object(Fn.w)(O),
						I = this.getIsPostCollection(),
						k = g && !f;
					return s ? o.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : h.a.createElement(Wl.a.Provider, {
						value: c
					}, h.a.createElement(Fn.a.Provider, {
						value: O
					}, h.a.createElement(za.c, {
						isOverlayOpen: P
					}, h.a.createElement(zc.a, {
						forceRedditTheme: E
					}, g && h.a.createElement(Ze, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), h.a.createElement(om, {
						browserInfo: C,
						isFPR: n,
						isInline: k,
						isSuspended: i
					})), h.a.createElement(ql.a.Provider, {
						value: !1
					}, h.a.createElement(zc.a, {
						forceRedditTheme: E || w,
						isCommentsPage: S
					}, h.a.createElement(im, {
						frontpageSignupVariant: t,
						isCommentsPage: S,
						isInline: k,
						isLoggedIn: a,
						isSubscriptionsPinned: r,
						location: y,
						overlayIsOpen: P,
						page: O,
						routes: u,
						showEmailCollectionBanner: b,
						browserInfo: C,
						showFPR: n,
						showSuspended: i
					}))))), h.a.createElement(Fn.a.Provider, {
						value: e
					}, P && h.a.createElement(ql.a.Provider, {
						value: !0
					}, h.a.createElement(zc.a, {
						isOverlay: !0
					}, h.a.createElement(cm, {
						isPostCollection: I,
						location: d,
						onClickOutsideOverlay: m,
						page: e,
						routes: u,
						showEmailCollectionBanner: b,
						browserInfo: C,
						showFPR: n,
						showSuspended: i
					}))), h.a.createElement(zc.a, null, h.a.createElement(p.Fragment, null, h.a.createElement("div", {
						id: Bl.a,
						className: Jl.a.popupContainer
					}), h.a.createElement(Ol, null), b && h.a.createElement(M.a, null), h.a.createElement(ss, null), h.a.createElement(rn, null)))))
				}
			}
			rm.contextType = y.a;
			const om = Object(de.c)(e => {
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
					return h.a.createElement(p.Fragment, null, h.a.createElement(Fl, r), h.a.createElement(Uc, {
						className: Object(P.a)(Jl.a.header, Object(Dl.b)(Jl.a, r), {
							[Jl.a.inline]: n
						})
					}))
				}),
				im = Object(de.c)(class extends h.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline
					}
					locationsEqual(e, t) {
						const s = l()(e, "key"),
							n = l()(t, "key");
						return c()(s, n)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const s = l()(e, ["key", "locationState"]),
								n = l()(t, ["key", "locationState"]);
							return c()(s, n)
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
						return h.a.createElement(em, {
							"aria-hidden": n,
							className: Object(P.a)(Object(Dl.b)(Jl.a, this.props), {
								[Jl.a.withUpsell]: !!e,
								[Jl.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && h.a.createElement(Qc, {
							className: Object(P.a)(Jl.a.pinnedSubscriptions, Object(Dl.b)(Jl.a, this.props)),
							"data-redditstyle": !0
						}), h.a.createElement(g.f, {
							location: t
						}, s), c && h.a.createElement("div", {
							className: Object(P.a)(Jl.a.bottomSpacer, Object(Dl.a)(Jl.a, this.props))
						}))
					}
				});
			class cm extends h.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => this.overlayScrollContainerEl = e, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(w.a)(e) && 0 === e.button && e.target === this.overlayScrollContainerEl) {
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
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Vl.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(E.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Vl.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: s
					} = this.props, n = !(!t || !t.meta || t.meta.name === v.Ab.SUBREDDIT_CREATION || t.meta.name === v.Ab.PUBLIC_ACCESS_NETWORK), a = e;
					return h.a.createElement(tm, {
						className: Object(P.a)(Object(Dl.b)(Jl.a, this.props), {
							[Jl.a.mIsCommentsLightbox]: n,
							[Jl.a.mIsLargeCommentsLightbox]: a
						})
					}, n && h.a.createElement(sm, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(P.a)(Jl.a.mTopBannerAdjustments, Object(Dl.b)(Jl.a, this.props), {
							[Jl.a.mIsLargeCommentsLightbox]: a
						}),
						tabIndex: -1
					}, h.a.createElement(Hc.a, {
						page: t
					})), h.a.createElement("div", {
						className: Object(P.a)(Jl.a.overlayWrapper, Object(Dl.b)(Jl.a, this.props))
					}, h.a.createElement("div", {
						className: Object(P.a)(Jl.a.overlayScrollContainer, {
							[Jl.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Hl.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, h.a.createElement(g.f, null, s), h.a.createElement("div", {
						className: Object(P.a)(Jl.a.bottomSpacer, Object(Dl.a)(Jl.a, this.props))
					}))))
				}
			}
			t.b = nm(Object(de.c)(rm))
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
					} = this.props, d = A[o && o.media ? o.media.type : w.n.EMBED], l = !o && r && r.meta && r.meta.name === c.Ab.META_MEMBERSHIP_PAYWALL_PAGE;
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
			const A = {
				[w.n.GIFVIDEO]: x.a,
				[w.n.IMAGE]: O.a,
				[w.n.TEXT]: E.a,
				[w.n.RTJSON]: E.a,
				[w.n.VIDEO]: v.a,
				[w.n.EMBED]: y.a,
				[w.n.LIVEVIDEO]: v.a
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
				h = s("./node_modules/redux-thunk/es/index.js"),
				b = s("./node_modules/request-idle-callback/index.js"),
				g = s("./src/lib/browser/isIncognito.ts"),
				f = s("./src/lib/constants/index.ts"),
				C = s("./src/lib/extractQueryParams/index.ts"),
				P = s("./src/lib/filterQueryParams/index.ts"),
				v = s("./src/lib/getParsedUserAgent/index.ts"),
				x = s("./src/lib/initializeClient/index.tsx"),
				y = s("./src/lib/matchRoute/index.ts"),
				O = s("./src/lib/performance.js"),
				E = s("./src/lib/safeJSONParse/index.ts"),
				j = s("./src/reddit/customMiddleware/gqlContext.ts"),
				w = s("./src/reduxMiddleware/apiContext.ts"),
				S = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				I = s("./src/reddit/actions/apiRequestHeaders.ts"),
				k = s("./src/reddit/actions/chat/unreadCount.ts"),
				N = s("./src/reddit/actions/emailCollection/index.ts"),
				_ = s("./src/lib/makeApiRequest/index.ts"),
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
				const o = await ((e, t) => Object(_.b)(Object(T.a)(e, [R.a]), {
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
				Oe = {
					[ve.c.Upvote]: "a",
					[ve.c.Downvote]: "z",
					[ve.c.Save]: "s",
					[ve.c.Hide]: "h",
					[ve.c.OpenLink]: "l"
				},
				Ee = {
					[ve.c.CollapseOrLoad]: "enter",
					[ve.c.NextComment]: "j",
					[ve.c.PrevComment]: "k",
					[ve.c.Reply]: "r"
				};
			var je = {
					[ve.d.CommentPage]: Object.assign({}, ye, Oe, Ee),
					[ve.d.Global]: Object.assign({}, ye),
					[ve.d.Lightbox]: Object.assign({}, ye, Oe, Ee, {
						[ve.c.NextPost]: "n",
						[ve.c.PrevPost]: "p"
					}),
					[ve.d.Listing]: Object.assign({}, ye, Oe, {
						[ve.c.OpenLightbox]: "enter",
						[ve.c.NextPost]: "j",
						[ve.c.PrevPost]: "k",
						[ve.c.Expando]: "x",
						[ve.c.NewPost]: "c",
						Reserved: ["n", "p", "r"]
					}),
					[ve.d.Modqueue]: Object.assign({}, ye, Oe, {
						[ve.c.OpenLightbox]: "enter",
						[ve.c.NextPost]: "j",
						[ve.c.PrevPost]: "k",
						[ve.c.Expando]: "x",
						[ve.c.NewPost]: "c"
					})
				},
				we = s("./src/reddit/actions/shortcuts.ts");
			const Se = {
					[ve.c.Close]: we.d,
					[ve.c.CollapseOrLoad]: we.e,
					[ve.c.Downvote]: we.f,
					[ve.c.Expando]: we.g,
					[ve.c.Hide]: we.h,
					[ve.c.NextComment]: we.j,
					[ve.c.NextPost]: we.k,
					[ve.c.NewPost]: we.i,
					[ve.c.OpenIndex]: we.l,
					[ve.c.OpenLightbox]: we.m,
					[ve.c.OpenLink]: we.n,
					[ve.c.PrevComment]: we.o,
					[ve.c.PrevPost]: we.p,
					[ve.c.Reply]: we.q,
					[ve.c.Save]: we.s,
					[ve.c.Upvote]: we.t,
					[ve.c.Konami]: null
				},
				Me = (e, t) => (s, n) => {
					if (!document.activeElement) return;
					const a = document.activeElement.nodeName;
					if ("INPUT" === a || "TEXTAREA" === a || "BUTTON" === a && ve.a.includes(n.which)) return;
					const r = Se[s];
					r && e(r(t))
				};
			var Ie = s("./src/reddit/components/ShortcutWrapper/index.m.less"),
				ke = s.n(Ie);
			const Ne = e => {
					let {
						children: t
					} = e;
					return u.a.createElement("div", {
						className: ke.a.shortcutDiv,
						id: ve.b,
						tabIndex: -1
					}, u.a.Children.only(t))
				},
				_e = new Pe.ShortcutManager(je),
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
						shortcuts: _e
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
					}, u.a.createElement(Ne, null, e))
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
				Ot = s("./src/reddit/actions/preferences.ts"),
				Et = s("./src/reddit/constants/cookie.ts"),
				jt = s("./src/reddit/constants/preferences.ts");
			const wt = new Set([Ot.f, Ot.h, V.b, Q.b, Ot.c, Ot.n, yt.d, yt.e, Ot.q]);
			var St = e => t => s => {
					const n = t(s);
					if (wt.has(s.type)) {
						const t = e.getState().user,
							s = {
								prefs: xt()(t.prefs, ["hamburgerTray", "globalTheme", "featuresViewedHistory", "collapsedTraySections", "nightmode", "subscriptionsPinned", jt.b, jt.d, jt.e]),
								language: t.language
							},
							n = new Date;
						n.setFullYear(n.getFullYear() + 2), l.a.set(Et.j, btoa(JSON.stringify(s)), {
							expires: n,
							domain: i.a.cookieDomain
						})
					}
					return n
				},
				Mt = s("./src/lib/fastdom/index.ts"),
				It = s("./src/reddit/actions/redditEmbed.ts"),
				kt = s("./src/reddit/actions/tabBadging.ts"),
				Nt = s("./src/reddit/helpers/tabBadging/index.ts"),
				_t = s("./src/reddit/selectors/chat.ts"),
				Tt = s("./src/reddit/selectors/experiments/badging.ts");
			const Rt = (e, t) => {
				e <= 0 ? Mt.a.write(() => {
					Object(Nt.b)(!1), window.document.title = t
				}) : Mt.a.write(() => {
					Object(Nt.b)(), window.document.title = "(".concat(e, ") ").concat(t)
				})
			};
			var At = e => {
					const t = window.document.title;
					return s => n => {
						switch (n.type) {
							case k.a.SYNC:
							case k.a.REQUEST_SUCCESS: {
								const s = e.getState(),
									{
										dispatch: a
									} = e;
								if (!Object(Tt.a)(s)) break;
								const r = Object(_t.a)(s),
									o = n.payload && n.payload.basicChannelCount,
									i = Object(te.B)(s),
									c = o + i;
								if (Rt(c, t), a(Object(kt.b)({
										hasUnreadMessages: !!c
									})), r !== o) {
									const e = {
										basicChannelCount: o,
										inboxCount: i
									};
									Object(Nt.c)(e)
								}
								break
							}
							case It.b: {
								const s = e.getState(),
									{
										dispatch: a
									} = e;
								if (!Object(Tt.a)(s)) break;
								const r = Object(te.B)(s),
									o = n.payload.account && n.payload.account.inboxCount,
									i = Object(_t.a)(s),
									c = o && o + i;
								if (!c) break;
								if (Rt(c, t), a(Object(kt.b)({
										hasUnreadMessages: !!c
									})), r !== o) {
									const e = {
										basicChannelCount: i,
										inboxCount: o
									};
									Object(Nt.c)(e)
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
							n = Object(_t.a)(e);
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
				const t = (l.a.get(Et.h) || "").split(",");
				if (!t.includes(e)) {
					t.unshift(e);
					const s = t.slice(0, 10).join(","),
						n = Object(is.a)();
					l.a.set(Et.h, s, n)
				}
			};
			var ds = s("./src/reddit/layout/page/Listing/index.tsx"),
				ls = s("./src/reddit/reducers/index.ts"),
				ms = s("./src/reddit/routes/collectionCommentsPage/index.ts"),
				us = s("./src/reddit/routes/appeal/index.ts"),
				ps = s("./src/reddit/routes/coins/index.ts"),
				hs = s("./src/reddit/routes/coinsMobile/index.ts"),
				bs = s("./src/reddit/routes/commentsPage/index.ts");
			s("./node_modules/@loadable/component/dist/loadable.esm.js");
			var gs = [],
				fs = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				Cs = s("./src/reddit/helpers/trackers/emailVerification.ts");
			var Ps = {
					action: e => async (t, s) => {
						await t(Ot.x());
						const a = s(),
							r = e.params.verificationToken,
							o = e.queryParams && e.queryParams.source;
						if (o && Object(S.a)(Object(Cs.b)(o)(a)), !Object(te.G)(a)) return Object(fs.a)(t, a);
						const i = await t(F(r));
						i === n.Success && Object(S.a)(Object(Cs.d)()(a)), t(Object(p.c)("/?verifiedEmail=".concat(i)))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				vs = s("./src/lib/addQueryParams/index.ts");
			var xs = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							queryParams: r
						} = e;
						await t(Object(p.c)(Object(vs.a)("/", r)))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [f.p.COMMENTS_PAGE, f.p.FRONTPAGE]
				},
				ys = s("./src/reddit/routes/framedGild/index.ts"),
				Os = s("./src/reddit/routes/framedModal/index.ts"),
				Es = s("./src/reddit/routes/frontpage/index.ts"),
				js = s("./src/reddit/routes/inbox/index.ts");
			var ws = {
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
				Ss = s("./src/reddit/routes/meta/index.ts"),
				Ms = s("./src/reddit/routes/moderationPages/index.ts"),
				Is = s("./src/reddit/routes/modListing/index.ts"),
				ks = s("./src/reddit/routes/modQueue/index.ts"),
				Ns = s("./src/reddit/routes/multireddit/index.ts"),
				_s = s("./src/reddit/routes/postCreation/constants.ts");
			const Ts = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
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
			var Rs = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(_s.b))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...Ts],
				As = s("./src/reddit/routes/postCreation/index.ts"),
				Ls = s("./src/reddit/routes/postDraft/index.ts"),
				Fs = s("./src/reddit/routes/premium/index.ts"),
				Ds = s("./src/reddit/routes/profileComments/index.ts"),
				Bs = s("./src/reddit/endpoints/me/index.ts");
			var Us = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							rest: r
						} = e.params, {
							queryParams: o
						} = e, i = await Object(Bs.a)(a());
						if (!(i.ok && i.body && i.body.account)) {
							const e = s();
							return void Object(fs.a)(t, e)
						}
						const c = i.body.account.displayText,
							d = r ? "/user/".concat(c, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(r)) : "/user/".concat(c, "/"),
							l = Object(vs.a)(d, o);
						await t(Object(p.c)(l))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				Hs = s("./src/reddit/routes/profileModSettings/index.ts"),
				Gs = s("./src/reddit/routes/profileOverview/index.ts"),
				qs = s("./src/reddit/routes/profilePosts/index.ts"),
				Ws = s("./src/reddit/routes/profilePrivate/index.ts");
			var Vs = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(n)) : "/user/".concat(s, "/"), o = Object(vs.a)(r, a);
						await t(Object(p.c)(o))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Qs = s("./src/reddit/routes/profileSnoobuilder/index.ts");
			var zs = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/posts/").concat(n) : "/user/".concat(s, "/posts"), o = Object(vs.a)(r, a);
						t(Object(p.c)(o))
					},
					chunk: f.p.EMPTY,
					exact: !0,
					meta: {
						name: f.Ab.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				Zs = s("./src/reddit/routes/publicAccessNetwork/index.ts"),
				Ks = s("./src/reddit/routes/report/index.ts"),
				Ys = s("./src/reddit/routes/searchResults/index.ts"),
				Js = s("./src/reddit/routes/settings/index.ts");
			var Xs = [{
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
				$s = s("./src/reddit/routes/subreddit/index.ts"),
				en = s("./src/reddit/routes/subredditCreation/index.ts"),
				tn = s("./src/reddit/routes/subredditLeaderboard/index.ts"),
				sn = s("./src/reddit/routes/subredditWiki/index.ts"),
				nn = s("./src/reddit/routes/topic/index.ts");
			var an = [us.a, ps.a, hs.a, Us, Vs, zs, ...ms.a, ...bs.a, Ps, ...Es.a, Fs.a, ys.a, Os.a, As.a, Ls.a, ...Rs, xs, ws, Ss.a, Ns.a, ks.a, Is.c, js.a, Ds.a, Hs.a, Gs.a, qs.a, Qs.a, Ws.a, Zs.a, ...Js.a, ...Xs, Ys.a, ...sn.a, nn.a, $s.a, en.a, tn.a, Ms.a, Ks.a, ...gs],
				rn = s("./src/reddit/constants/experiments.ts"),
				on = s("./src/reddit/helpers/chooseVariant/index.ts");
			var cn = s("./src/reddit/selectors/telemetry.ts");
			const dn = {
					displayDelay: 15,
					displayOnRoutes: [f.Ab.SUBREDDIT, f.Ab.COMMENTS],
					experimentName: rn.T,
					experimentVariant: rn.Z.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				ln = e => {
					const {
						base_url: t
					} = Object(cn.requestWithParams)(e), s = Object(ts.b)(e), n = s && s.urlParams.partialPostId, a = s && s.urlParams.subredditName;
					return Object.assign({}, t && {
						rbl: t
					}, a && {
						s: a
					}, n && {
						p: n
					})
				},
				mn = e => {
					if ((((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return t.experimentOverrides[s] === n
						})(dn, e) || (e => {
							let {
								samplingRate: t,
								seed: s
							} = e;
							return !!s && 0 === Math.floor(s * t)
						})(dn)) && ((e, t) => {
							let {
								displayOnRoutes: s
							} = e;
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && s.includes(n)
						})(dn, e) && ((e, t) => {
							let {
								isSEOOnly: s
							} = e;
							return !s || t.meta.isSessionSeo
						})(dn, e) && ((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return Object(on.c)(t, {
								experimentName: s,
								experimentEligibilitySelector: on.a
							}) === n
						})(dn, e)) return {
						displayDelay: dn.displayDelay,
						externalVars: ln(e)
					}
				};
			var un = s("./src/reddit/singleton/EventSystem.ts"),
				pn = s("./src/reddit/singleton/tracing/index.ts"),
				hn = s("./src/reddit/actions/global.ts");
			Object(r.e)(r.b.EntryPointStart);
			const bn = Object(w.a)({
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
						headersReceived: I.a
					},
					onBeforeRequestFactory: os.a,
					statsAppName: f.l.Redesign
				}),
				gn = Object(j.a)(bn.apiContext),
				fn = Pt();
			let Cn;
			Object(x.a)({
				reducers: ls.a,
				routes: an,
				apiContext: bn.apiContext,
				gqlContext: gn.gqlContext,
				appFactory: (e, t) => u.a.createElement(ht.a.Provider, {
					value: fn.broadcaster
				}, u.a.createElement(bt.a.Provider, {
					value: {
						apiContext: bn.apiContext,
						gqlContext: gn.gqlContext
					}
				}, u.a.createElement(gt.b, null, u.a.createElement($e, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(dt, null)))),
				appName: f.l.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const s = Cn;
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
					routes: an,
					apiContext: bn.apiContext,
					gqlContext: gn.gqlContext
				}), fn.middleware, bn.middleware, gn.middleware, Bt, St, as, Ft, At],
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
					if (r && (e => Object(on.c)(e, {
							experimentEligibilitySelector: on.a,
							experimentName: rn.k
						}) === rn.q.Enabled)(n.getState())) {
						pn.b.enableTracing(!0);
						const e = pn.b.createTraceFromId(r);
						pn.b.setParent(e)
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
					Cn = l;
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
						cs(i), un.a.publish(mt.c, r, document)
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
					}), l.dispatch(Object(hn.b)({
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
								O.a && O.a.timing && pn.b.isEnabled && (pn.b.recordPerformanceTimings("time_to_first_byte", O.a.timing.fetchStart, O.a.timing.responseStart), pn.b.recordPerformanceTimings("time_to_interactive", O.a.timing.fetchStart, O.a.timing.domInteractive));
								const n = [],
									a = {
										isLoggedIn: Object(te.G)(e),
										name: t,
										statsdPathsForExperiments: n
									};
								Object(r.g)(a, s)
							}
							const s = O.a.timing.domInteractive - O.a.timing.navigationStart;
							Object(es.g)(o.routeMatch, l.getState(), M.TimerType.Initial, s);
							const i = Object(C.a)(window.location.href);
							Object(E.a)(i.get(ut.u)) && l.dispatch(Object(A.e)({
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
							if ((Object(Jt.b)(lt.a.JustLoggedIn) || i && i.get(ut.n) && Object(E.a)(i.get(ut.n))) && (l.dispatch(Object(A.e)({
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
							l.dispatch(Object(N.c)())
						}
						Object(te.G)(l.getState()) && l.dispatch(Object(k.d)()), Object(b.requestIdleCallback)(async () => {
							l.dispatch(Object(G.d)()), await Object(g.a)() && (e => Object(S.a)(Object.assign({}, cn.defaults(e), {
								screen: cn.screen(e),
								source: "global",
								action: "view",
								noun: "empty"
							})))(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = mn(e);
								t && (await (async e => {
									return (await Object($.a)(() => s.e("UserZoomIntegration").then(s.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), n && n())
							}, n = t.listen((t, s) => {
								"POP" !== s && e()
							});
							e()
						})
					}), window.history.scrollRestoration = "manual", un.a.attachStore(l)
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
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => Object(r.D)(e) || !(n.Mb.Holdout === Object(a.c)(e, {
				experimentEligibilitySelector: a.a,
				experimentName: n.Jb
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
			const r = e => n.Pb.All === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.Ob
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
//# sourceMappingURL=Reddit.e81b52757b72246788ba.js.map