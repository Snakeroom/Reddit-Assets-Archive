// https://www.redditstatic.com/desktop2x/Reddit.c57fe61fb653d016c16d.js
// Retrieved at 6/2/2020, 5:00:07 PM by Reddit Dataminer v1.0.0
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
				c = (e, t, s) => {
					if (t === a.yb.SUBREDDIT && e === n.a.dfpRefreshSlotTestSubreddit && s === a.c.BELOW_THE_FOLD) return n.a.dfpRefreshSlotId;
					const o = [n.a.dfpSlotPrefix];
					return t !== a.yb.PROFILE && (Object(r.a)(e) ? o.push("frontpage") : o.push("r.".concat(e))), t === a.yb.INDEX ? o.push(a.yb.LISTING) : t && o.push(t), o.join("/")
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
						return Object(a.a)(Object(r.a)(e, [o.a]), {
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
						Object(a.a)(Object(r.a)(e, [o.a]), {
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
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeRequest/index.ts"),
				r = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(o.a)(e, {
					method: "get",
					endpoint: "".concat(r.a.metaUrl, "/users/me").concat(t ? "?fields=specialMemberships" : "")
				})
			}
			var c = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(c.a)(d.a),
				m = Object(c.a)(d.b),
				u = Object(c.a)(d.c),
				p = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const r = s();
						if (!r.economics.me.fetched || e && !r.economics.me.data.specialMemberships) {
							const s = await i(a(), e);
							if (s.ok) {
								const n = s.body;
								e && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
							}
						}
					}
				},
				h = () => async (e, t) => {
					const s = t(),
						r = s.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!s.economics.pointsCopy.fetched) {
						e(m());
						const t = "https://".concat(r.pointsDocsBaseUrl, "v1.json?web"),
							s = await Object(a.b)({
								endpoint: t,
								method: n.ab.GET
							});
						s.ok && s.body && e(u(s.body))
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
				return j
			})), s.d(t, "e", (function() {
				return w
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
				await e(Object(v.b)(!0));
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
			}, j = (e, t) => async (s, n, a) => {
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
					u(), Object(m.a)(s) && (await e(Object(i.z)()), Object(m.a)(t()) && e(Object(o.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					const s = t();
					Object(m.a)(s) && (Object(l.b)(), e(Object(o.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					e(Object(r.g)(d.g))
				}
		},
		"./src/reddit/actions/emailVerification.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/models/EmailSettings/index.ts"),
				l = s("./src/reddit/models/Toast/index.ts");
			const m = e => async (t, s, a) => {
				let {
					apiContext: r
				} = a;
				switch (e) {
					case d.a.Success:
						t(Object(c.e)({
							kind: l.b.SuccessCommunity,
							text: n.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case d.a.AlreadyVerified:
						t(Object(c.e)({
							kind: l.b.SuccessCommunity,
							text: n.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case d.a.WrongUser:
						return void t(Object(c.e)({
							kind: l.b.Error,
							text: n.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.e)({
							kind: l.b.Error,
							text: n.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, u = e => async (t, s, n) => {
				let {
					apiContext: c
				} = n;
				const l = await ((e, t) => Object(r.a)(Object(o.a)(e, [i.a]), {
					method: a.ab.POST,
					endpoint: "".concat(e.apiUrl, "/api/v1/verify_email/").concat(t),
					data: {}
				}))(c(), e);
				if (l.ok && l.body && l.body.success) return d.a.Success;
				switch (l.body.reason) {
					case d.a.AlreadyVerified:
						return d.a.AlreadyVerified;
					case d.a.WrongUser:
						return d.a.WrongUser;
					default:
						return d.a.Error
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
					const p = await (e => Object(c.a)(e, {
						endpoint: Object(d.a)("".concat(o.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: i.ab.GET
					}))(n());
					if (p.ok) {
						const t = (e => ({
							broadcastFollower: !!e.broadcast_follower,
							broadcastRecommendation: !!e.broadcast_recommendation,
							chatMessages: !!e.chat_message,
							chatRequests: !!e.chat_request,
							commentReplies: !!e.comment_reply,
							communityRecommendations: !!e.subreddit_recommendation,
							liveEvent: !!e.live_event,
							postFlairAdded: !!e.post_flair_added,
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
					const g = await ((e, t) => Object(c.a)(e, {
						endpoint: Object(d.a)("".concat(o.a.gatewayUrl, "/redditmobile/1/push/preferences")),
						method: i.ab.POST,
						data: {
							preferences: JSON.stringify({
								broadcast_follower: t.broadcastFollower,
								broadcast_recommendation: t.broadcastRecommendation,
								chat_message: t.chatMessages,
								chat_request: t.chatRequests,
								post_flair_added: t.postFlairAdded,
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
			var n = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				a = s("./src/reddit/actions/users.ts"),
				r = s("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				Object(r.H)(t()) || await e(Object(a.r)()), await e(Object(n.b)()).then(() => {
					if (t().economics.me.data) return e(Object(n.a)())
				})
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
						Object(c.H)(l) || s.push(e(Object(o.r)()));
						const m = Object(n.a)(d, null);
						s.push(e(Object(r.i)(m, d, {}))), await Promise.all(s);
						const u = Object(i.E)(t(), d);
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
				p = s("./src/reddit/actions/gold/powerups.ts"),
				h = s("./src/reddit/actions/notifications/preferences.ts"),
				b = s("./src/reddit/actions/platform.ts"),
				g = s("./src/reddit/actions/preferences.ts"),
				f = s("./src/reddit/actions/profile/index.ts"),
				C = s("./src/reddit/actions/subredditSettings.ts"),
				v = s("./src/reddit/actions/toaster.ts"),
				y = s("./src/reddit/actions/users.ts"),
				P = s("./src/reddit/constants/parameters.ts"),
				x = s("./src/reddit/helpers/externalAccount/index.tsx"),
				O = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				E = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				S = s("./src/reddit/selectors/externalAccount.ts"),
				j = s("./src/reddit/selectors/user.ts");
			const w = e => async (t, s) => {
				await t(Object(y.r)());
				const w = [t(Object(g.z)(!0)), t(Object(m.a)())];
				s().economics.paymentSystems.status === E.a.NotFetched && w.push(t(Object(l.a)())), await Promise.all(w); {
					const e = s();
					if (!Object(j.H)(e)) return Object(O.a)(t, e)
				}
				const {
					page: k = r.Lb.Account
				} = e.params;
				if (k === r.Lb.Gold) return void t(Object(a.c)("/settings/premium"));
				const _ = [];
				k === r.Lb.Profile && (_.push(t(Object(f.a)())), _.push(t(Object(C.e)()))), k === r.Lb.Account && _.push(t(Object(u.o)())), k === r.Lb.Notifications && _.push(t(Object(h.a)())), k !== r.Lb.Privacy && k !== r.Lb.Messaging || _.push(t(Object(d.b)())), k === r.Lb.Premium && (_.push(t(Object(f.a)())), _.push(t(Object(p.e)()))), await Promise.all(_); {
					const e = s(),
						r = e.platform.currentPage,
						{
							url: c
						} = r,
						d = Object(o.a)(c).get(P.c);
					if (d && (t(Object(a.c)(Object(i.a)(c, [P.c]))), Object(S.a)(e))) {
						const e = n.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(v.e)({
							text: e
						})), Object(x.b)(d)
					}
				}
				t(Object(b.l)({
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
				})), await e(Object(o.r)());
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
					await Promise.all([t(Object(c.a)(C, v)), t(Object(d.r)())])
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/reddit/actions/comment/index.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/reddit/constants/shortcuts.ts"),
				c = s("./src/reddit/helpers/trackers/lightbox.ts"),
				d = s("./src/reddit/helpers/trackers/shortcuts.ts"),
				l = s("./src/reddit/selectors/gild.ts"),
				m = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = s("./src/reddit/actions/shortcuts/utils.ts");
			const p = [m.r, m.n, e => !!Object(l.d)(e)],
				h = (e, t) => async (s, l, m) => {
					let {
						apiContext: h
					} = m;
					const b = l();
					for (const e of p)
						if (e(b)) return;
					const g = document.activeElement,
						f = b.shortcuts.activeCommentId,
						C = Object(u.c)(b);
					if (g && "true" === g.contentEditable && f && C) s(a.O({
						parentCommentId: f,
						commentsPageKey: C
					})), Object(u.a)(f);
					else if (b.activeModalId) Object(u.b)(i.b), s(Object(r.i)(b.activeModalId));
					else if (b.toaster[0]) Object(u.b)(i.b), s(Object(o.f)(b.toaster[0].id));
					else if (b.shortcuts.namespace === i.d.Lightbox && b.platform.currentPage) {
						const e = b.platform.currentPage.locationState.closeLocation;
						e && (Object(u.b)(i.b), s(Object(n.b)(e)))
					}
					const {
						activePostId: v
					} = b.shortcuts;
					e(t && v ? c.b(v, "close", !0) : d.a)
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
				ssoConfirmPassword: "_3CQoZKhSqrJrbOGJxp03DS",
				mResponsive: "_2CwLGmlfoqlHFJcOwm0RS-",
				linkActionSSOFail: "_1ALB_4jSDt6vPeELvg9lKL",
				linkActionSsoFail: "_1ALB_4jSDt6vPeELvg9lKL"
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
				return Tm
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
				j = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				w = s("./node_modules/polished/dist/polished.es.js"),
				k = s("./node_modules/react-motion/lib/react-motion.js"),
				_ = s("./src/lib/lessComponent.tsx"),
				M = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				I = s("./src/lib/addQueryParams/index.ts"),
				N = s("./src/reddit/actions/modal.ts"),
				T = s("./src/reddit/actions/preferences.ts"),
				R = s("./src/lib/makeActionCreator/index.ts"),
				L = s("./src/reddit/actions/sso/constants.ts");
			const A = Object(R.a)(L.a),
				F = Object(R.a)(L.b);
			var D = s("./src/reddit/actions/toaster.ts"),
				U = s("./src/reddit/constants/accountManager.ts"),
				G = s("./src/reddit/constants/history.ts"),
				B = s("./src/reddit/constants/listings.ts"),
				H = s("./src/reddit/constants/modals.ts"),
				q = s("./src/reddit/constants/parameters.ts"),
				W = s("./src/reddit/helpers/history/index.ts"),
				V = s("./src/reddit/icons/svgs/Close/index.tsx"),
				Q = s("./src/reddit/models/Sso/index.ts"),
				z = s("./src/reddit/models/Toast/index.ts"),
				Z = s("./src/reddit/selectors/accountManager.ts"),
				K = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				Y = s("./src/reddit/selectors/telemetry.ts"),
				J = s("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				X = s.n(J);
			const $ = M.a.redditUrl,
				ee = _.a.iframe("IFrame", X.a),
				te = _.a.button("CloseButton", X.a),
				se = _.a.wrapped(V.a, "Close", X.a),
				ne = Object(b.c)({
					accountManagerSrc: Z.c,
					actionSource: Z.a,
					frontpageSignupVariant: K.a,
					redirectUrl: Z.b
				}),
				ae = Object(u.b)(ne, (e, t) => ({
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
					onTwoFactorChanged: () => e(Object(T.z)(!1)),
					onSSOLinkSuccess: (t, s, n) => {
						e(A({
							linkedIdentity: s
						})), e(Object(N.g)(n)), e(Object(D.e)(Object(D.d)(t, z.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, s, n) => {
						e(F({
							linkedIdentity: s
						})), e(Object(N.g)(n)), e(Object(D.e)(Object(D.d)(t, z.b.SuccessCommunity)))
					}
				})),
				re = e => {
					let {
						data: t,
						origin: s
					} = e;
					return t && t.success && (t.type === U.a.ChangePassword || t.type === U.a.Close || t.type === U.a.CreateAccount || t.type === U.a.Login || t.type === U.a.Register || t.type === U.a.Resize || t.type === U.a.SSOLinkFail || t.type === U.a.SSOLinkSuccess || t.type === U.a.SSOUnlinkFail || t.type === U.a.SSOUnlinkSuccess || t.type === U.a.Subscribe || t.type === U.a.TwoFactorChanged) && s === M.a.accountManagerOrigin
				};
			class oe extends m.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = m.a.createRef(), this.isAccountCreated = !1, this.focusFirstVisibleIframeInput = () => {
						try {
							if (!this.iframeRef.current) return;
							const e = this.iframeRef.current.contentWindow ? this.iframeRef.current.contentWindow.document : this.iframeRef.current.contentDocument;
							if (!e) return;
							const t = e.querySelector('input:not([type="hidden"])');
							t && t.focus()
						} catch (e) {}
					}, this.handleLinkSSOSuccess = e => {
						const t = e === Q.a.Apple ? H.a.LINK_APPLE_SSO : H.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(n.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === Q.a.Apple ? H.a.UNLINK_APPLE_SSO : H.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(n.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), e, t)
					}, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && re(e))
							if (t.type === U.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === U.a.Close) this.close();
						else if (t.type === U.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === U.a.Login) this.onLogIn();
						else if (t.type === U.a.ChangePassword) this.onChangePassword();
						else if (t.type === U.a.Resize) {
							if (t.payload && this.iframeRef.current) {
								const e = t.payload;
								e.height && e.width && (this.iframeRef.current.style.height = "".concat(e.height, "px"), this.iframeRef.current.style.width = "".concat(e.width, "px"))
							}
						} else if (t.type === U.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === U.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === U.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === U.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === U.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(W.a)(G.a.JustLoggedIn, !0), window.location.reload(!0))
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
							[q.n]: "true"
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(ee, {
						className: t,
						innerRef: this.iframeRef,
						src: e
					}), s && m.a.createElement(te, {
						onClick: this.close
					}, m.a.createElement(se, null)))
				}
			}
			var ie = ae(oe),
				ce = s("./src/reddit/components/TrackingHelper/index.tsx");
			const de = [],
				le = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de;
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
			var me = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				ue = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				pe = s("./src/reddit/components/Carousel/index.tsx"),
				he = s("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				be = s.n(he);
			const ge = _.a.div("Container", be.a),
				fe = _.a.wrapped(pe.b, "Carousel", be.a),
				Ce = _.a.div("Phone", be.a),
				ve = _.a.img("Frame", be.a),
				ye = "".concat(M.a.assetPath, "/img/frontpage-signup/android-frame.png"),
				Pe = "".concat(M.a.assetPath, "/img/frontpage-signup/iphone-frame.png"),
				xe = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				Oe = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var Ee = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(ge, {
						className: t
					}, m.a.createElement(Ce, {
						className: be.a.android
					}, m.a.createElement(fe, {
						animationType: pe.a.Fade,
						className: be.a.android,
						delay: 2500,
						items: xe,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(ve, {
						src: ye
					})), m.a.createElement(Ce, {
						className: be.a.iphone
					}, m.a.createElement(fe, {
						animationType: pe.a.Fade,
						className: be.a.iphone,
						items: Oe,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(ve, {
						src: Pe
					})))
				},
				Se = s("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				je = s.n(Se);
			const we = _.a.div("Container", je.a),
				ke = _.a.span("Disclaimer", je.a),
				_e = _.a.a("Link", je.a);
			var Me = e => m.a.createElement(we, {
					className: e.className
				}, m.a.createElement(_e, {
					href: "https://about.reddit.com"
				}, n.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(_e, {
					href: "https://www.redditinc.com/advertising"
				}, n.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(_e, {
					href: "http://www.redditblog.com/"
				}, n.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(_e, {
					href: "https://about.reddit.com/careers/"
				}, n.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(_e, {
					href: "https://www.reddithelp.com"
				}, n.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(_e, {
					href: "https://about.reddit.com/press/"
				}, n.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(_e, {
					href: "https://www.reddit.com/mobile/download"
				}, n.fbt._("The Reddit App", null, {
					hk: "1N9ljJ"
				})), m.a.createElement(_e, {
					href: "https://www.reddit.com/coins"
				}, n.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(_e, {
					href: "http://redditgifts.com/"
				}, n.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(_e, {
					href: "https://www.reddit.com/premium"
				}, n.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(_e, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, n.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(_e, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, n.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), m.a.createElement(ke, null, n.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				Ie = s("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				Ne = s.n(Ie);
			const Te = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				Re = _.a.div("Container", Ne.a),
				Le = _.a.wrapped(ie, "IFrame", Ne.a),
				Ae = _.a.wrapped(Ee, "Images", Ne.a),
				Fe = _.a.wrapped(Me, "Links", Ne.a),
				De = _.a.div("MainContent", Ne.a),
				Ue = _.a.div("MainContentColumn", Ne.a),
				Ge = _.a.button("NotReady", Ne.a),
				Be = _.a.span("NotReadyText", Ne.a),
				He = _.a.wrapped(me.a, "NotReadyIcon", Ne.a),
				qe = Object(C.a)(e => {
					const {
						className: t,
						containerRef: s,
						frontpageSignupVariant: a,
						onCloseClick: r,
						onVisibilityChange: o
					} = e, i = Object(ue.a)(e).bodyText;
					return m.a.createElement(j.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: o
					}, m.a.createElement(Re, {
						className: t,
						innerRef: s
					}, m.a.createElement(De, null, m.a.createElement(Ue, null, m.a.createElement(Ae, null, "Images Placeholder")), m.a.createElement(Ue, null, m.a.createElement(Le, {
						className: Object(g.a)({
							[Ne.a.fields]: Object(K.b)(a)
						}),
						path: U.b.Register,
						uiMode: U.c.Embed
					}))), m.a.createElement(Ge, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(w.j)(.8, i)
						}
					}, m.a.createElement(Be, null, n.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(He, null)), m.a.createElement(Fe, null)))
				});
			class We extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Ve extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(le()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = "-".concat(this.containerRef.current.offsetHeight, "px"), this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(We, {
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(qe, {
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
							scrollTo: Object(k.spring)(n, Te)
						}
					}, this.renderScroller))
				}
			}
			var Qe = Object(ce.c)(Ve),
				ze = s("./node_modules/js-cookie/src/js.cookie.js"),
				Ze = s.n(ze),
				Ke = s("./src/lib/localStorageAvailable/index.ts"),
				Ye = s("./src/higherOrderComponents/makeAsync.tsx"),
				Je = Object(Ye.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("BadgePurchaseModal").then(s.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				Xe = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				$e = s("./src/higherOrderComponents/asModal/index.tsx"),
				et = s("./src/reddit/controls/Button/index.tsx"),
				tt = s("./src/reddit/selectors/activeModalId.ts"),
				st = s("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				nt = s.n(st);
			const {
				fbt: at
			} = s("./node_modules/fbt/lib/FbtPublic.js"), rt = _.a.button("CloseButton", nt.a), ot = _.a.wrapped(V.a, "Close", nt.a), it = _.a.div("Container", nt.a), ct = _.a.p("Description", nt.a), dt = _.a.div("Footer", nt.a), lt = _.a.h3("Heading", nt.a), mt = _.a.img("SnooImage", nt.a), ut = _.a.div("Wrapper", nt.a), pt = Object(b.c)({
				activeModalId: tt.a
			});
			class ht extends m.a.Component {
				constructor() {
					super(...arguments), this.onCloseButtonClick = () => {
						const {
							modalToggled: e,
							activeModalId: t
						} = this.props;
						t && e(t)
					}
				}
				render() {
					return m.a.createElement(ut, null, m.a.createElement(it, null, m.a.createElement(lt, null, at._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), m.a.createElement(ct, null, at._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), m.a.createElement(mt, {
						src: "".concat(M.a.assetPath, "/img/magnifying-glass-snoo.png")
					})), m.a.createElement(dt, null, m.a.createElement(et.f, {
						onClick: this.onCloseButtonClick
					}, at._("Sounds good", null, {
						hk: "1OMLn5"
					}))), m.a.createElement(rt, {
						onClick: this.onCloseButtonClick
					}, m.a.createElement(ot, null)))
				}
			}
			var bt = Object(u.b)(pt, e => ({
				modalToggled: t => e(Object(N.i)(t))
			}))(Object($e.a)(Object(ce.c)(ht)));
			var gt = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumPurchaseModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/PurchaseModal/index.tsx")).then(e => e.default)
			});
			var ft = Object(Ye.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconPowerupsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCo~264e7f7d"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~d7fcad44"), s.e("EconomicsSupportPaymentModal")]).then(s.bind(null, "./src/reddit/components/Economics/Support/PaymentModal/index.tsx")).then(e => e.default)
				}),
				Ct = s("./src/lib/loadWithRetries/index.ts");
			const vt = () => null;
			var yt = Object(Ye.a)({
					ErrorComponent: vt,
					getComponent: () => Object(Ct.a)(() => s.e("ManageChatRoomsModal").then(s.bind(null, "./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.tsx"))).then(e => e.default),
					LoadingComponent: vt
				}),
				Pt = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var xt = Object(Ye.a)({
				getComponent: () => Object(Ct.a)(() => s.e("NotificationsPrePromptLoader").then(s.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Ot = () => null;
			var Et = Object(Ye.a)({
					ErrorComponent: Ot,
					getComponent: () => Object(Ct.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Ot
				}),
				St = s("./src/reddit/actions/structuredStyles/index.ts"),
				jt = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				wt = s("./src/reddit/controls/TextButton/index.tsx"),
				kt = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: _t
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Mt = Object(u.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					closeModal: () => {
						e(Object(N.i)(H.a.BLADE_NIGHTMODE)), e(Object(St.f)())
					},
					openBlade: () => {
						e(Object(St.e)(s))
					}
				}
			});
			var It = Object($e.a)(Mt(e => m.a.createElement(jt.d, null, m.a.createElement(jt.h, null, m.a.createElement(kt.a, null, m.a.createElement(jt.p, null, _t._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), m.a.createElement(wt.a, {
					onClick: e.closeModal
				}, m.a.createElement(jt.b, null)))), m.a.createElement(jt.k, null, m.a.createElement(jt.n, null, _t._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), m.a.createElement(jt.f, null, m.a.createElement(jt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, _t._("Cancel", null, {
					hk: "1f5Zk8"
				})), m.a.createElement(jt.q, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, _t._("Continue", null, {
					hk: "413jMZ"
				})))))),
				Nt = s("./src/reddit/actions/authorFlair.ts"),
				Tt = s("./src/reddit/actions/userFlair.ts"),
				Rt = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				Lt = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				At = s("./src/reddit/components/FlairPreview/index.tsx"),
				Ft = s("./src/reddit/components/FlairSearch/index.tsx"),
				Dt = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				Ut = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				Gt = s("./src/reddit/layout/row/Inline/index.tsx"),
				Bt = s("./src/reddit/models/Flair/index.ts"),
				Ht = s("./src/reddit/models/User/index.ts"),
				qt = s("./src/reddit/selectors/authorFlair.ts"),
				Wt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Vt = s("./src/reddit/selectors/user.ts"),
				Qt = s("./src/reddit/selectors/userFlair.ts"),
				zt = s("./src/reddit/components/UserFlairPicker/index.m.less"),
				Zt = s.n(zt);
			const Kt = e => e.inContextAuthor && e.currentUser && Object(Ht.e)(e.currentUser) === e.inContextAuthor.username,
				Yt = e => e.authorFlair || Kt(e) && e.userFlairData.applied || null,
				Jt = _.a.wrapped(Gt.a, "Section", Zt.a),
				Xt = _.a.div("CheckboxText", Zt.a);
			class $t extends m.a.Component {
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
						previewFlair: Yt(e),
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
					} = e.displaySettings, r = this.state.showFlair !== a, o = Yt(this.props);
					if (!n.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(Dt.b)(s, t, o);
					return !(i || c !== Dt.a.NoChanges || !r) || i
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
					} = s, d = this.canSave(), l = Kt(e);
					return m.a.createElement(Lt.a, null, m.a.createElement(Rt.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(At.a, {
						flair: t.previewFlair,
						flairTemplateType: Bt.d.UserFlair,
						placeholderText: n.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), o && m.a.createElement(Ft.a, {
						flair: t.previewFlair,
						flairTemplateType: Bt.d.UserFlair,
						subredditId: a,
						templates: i,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), l && m.a.createElement(Jt, null, m.a.createElement(Ut.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(Xt, null, n.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: Zt.a.buttonsRow
					}, m.a.createElement(et.f, {
						disabled: !d,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "ZvO9n"
					})), r && m.a.createElement(et.i, {
						className: Zt.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "23i2at"
					}))))
				}
			}
			const es = Object(u.b)(() => Object(b.c)({
				authorFlair: qt.b,
				currentUser: Vt.i,
				inContextAuthor: qt.c,
				isMod: (e, t) => !!Object(Wt.j)(e, t),
				userFlairData: Qt.c
			}), (e, t) => ({
				activeFlairChanged: (s, n, a, r) => e(Object(Tt.o)(s, n, a, r.username, t.subredditId)),
				closeModal: () => e(Object(Nt.b)({
					username: null,
					subredditId: null
				}))
			}))($t);
			var ts = Object($e.a)(Object(ce.c)(es)),
				ss = s("./src/reddit/selectors/notificationPrefs.ts"),
				ns = s("./src/reddit/selectors/platform.ts"),
				as = s("./src/reddit/selectors/removalReasons.ts"),
				rs = s("./src/reddit/selectors/subredditModeration.ts"),
				os = s("./src/reddit/constants/cookie.ts"),
				is = s("./src/reddit/featureFlags/index.ts"),
				cs = s("./src/reddit/helpers/localStorage/index.ts"),
				ds = s("./src/reddit/helpers/toggleBodyScroll/index.ts");

			function ls() {
				return (ls = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ms = Object(b.c)({
				anyModalIsOpen: e => !!e.activeModalId,
				authorContext: qt.c,
				badgePurchaseModalIsOpen: Object(tt.b)(H.a.BADGE_PURCHASE),
				banContext: rs.f,
				banModalIsOpen: Object(tt.b)(H.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(tt.b)(H.a.BLADE_NIGHTMODE),
				chatroomSettingsModalIsOpen: Object(tt.b)(H.a.SUBREDDIT_CHAT_SETTINGS),
				createChatroomModalIsOpen: Object(tt.b)(H.a.CREATE_SUBREDDIT_CHAT),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				currentPaymentTarget: e => e.economics.currentPaymentTarget,
				currentSubredditPremiumCorrelationId: e => e.economics.currentModalArgs ? e.economics.currentModalArgs.correlationId : void 0,
				economicsSupportPaymentModalIsOpen: Object(tt.b)(H.a.ECONOMY_SUPPORT_MODAL),
				editChatroomModalIsOpen: Object(tt.b)(H.a.EDIT_SUBREDDIT_CHAT),
				deleteChatroomModalIsOpen: Object(tt.b)(H.a.DELETE_SUBREDDIT_CHAT),
				downToChatPendingModalIsOpen: Object(tt.b)(H.a.DOWN_TO_CHAT_PENDING_MODAL),
				introModalFeatureEnabled: e => is.d.introModal(e),
				isOverlayOpen: ns.h,
				manageChatroomModalIsOpen: Object(tt.b)(H.a.MANAGE_SUBREDDIT_CHAT),
				moderatorPermissions: e => {
					const t = Object(ns.d)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: rs.C,
				muteModalIsOpen: Object(tt.b)(H.a.MUTE_USER),
				notificationsPrePromptIsOpen: ss.c,
				removalReasonContext: as.b,
				removalReasonModalIsOpen: Object(tt.b)(H.a.ADD_REMOVAL_REASON),
				subredditId: ns.d,
				subredditPremiumPurchaseModalOpen: Object(tt.b)(H.a.SUBREDDIT_PREMIUM_PURCHASE_MODAL),
				userFlairModalIsOpen: Object(tt.b)(H.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: Vt.u,
				userInRedesignBeta: Vt.B,
				userIsLoggedIn: Vt.H,
				userIsMod: Vt.I,
				userIsNew: Vt.K
			});
			class us extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Ke.a)()) return; {
						const e = Ze.a.get(os.a);
						e && Ze.a.remove(os.a, {
							domain: M.a.cookieDomain
						});
						const t = Object(cs.s)(H.a.ALPHA_CONSUMER);
						t && Object(cs.D)(H.a.ALPHA_CONSUMER), (e || t) && Object(cs.U)(H.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, s = Object(cs.s)(H.a.REDESIGN_MODAL);
					!e && s ? t() : e && !s && Object(cs.U)(H.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), this.props.anyModalIsOpen ? setTimeout(() => Object(ds.a)(), 500) : setTimeout(() => Object(ds.b)(), 500)
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
						downToChatPendingModalIsOpen: b,
						manageChatroomModalIsOpen: g,
						muteContext: f,
						muteModalIsOpen: C,
						notificationsPrePromptIsOpen: v,
						removalReasonContext: y,
						removalReasonModalIsOpen: P,
						sendEvent: x,
						subredditId: O,
						subredditPremiumPurchaseModalOpen: E,
						toggleBanModal: S,
						toggleMuteModal: j,
						toggleRemovalReasonsModal: w,
						userFlairModalIsOpen: k
					} = this.props, _ = (e, t, s) => n => () => x(a => ({
						source: e,
						action: "click",
						noun: n,
						comment: s && Object(Y.comment)(a, s),
						post: s && Object(Y.post)(a, s),
						screen: Object(Y.screen)(a),
						subreddit: Object(Y.subredditById)(a, t)
					}));
					return m.a.createElement(l.Fragment, null, n && s && m.a.createElement(Xe.a, {
						contextId: s.contextId,
						subredditId: s.subredditId,
						toggleModal: S,
						trackAddEvent: _("banned", s.subredditId, s.contextId)("add_in_context"),
						trackEventWithName: _("banned", s.subredditId, s.contextId),
						username: s.username
					}), C && f && m.a.createElement(Pt.a, {
						contextId: f.contextId,
						subredditId: f.subredditId,
						toggleModal: j,
						trackAddEvent: _("muted", f.subredditId, f.contextId)("add_in_context"),
						username: f.username
					}), (o || g || h || p || r) && O && m.a.createElement(yt, {
						subredditId: O,
						withOverlay: !0
					}), P && y && m.a.createElement(Et, {
						itemIds: y.itemIds,
						subredditId: y.subredditId,
						toggleModal: w,
						trackClick: _("removal_reasons", y.subredditId, 1 === y.itemIds.length ? y.itemIds[0] : void 0)
					}), a && O && m.a.createElement(It, {
						subredditId: O
					}), k && e && e.subredditId && m.a.createElement(ts, {
						subredditId: e.subredditId
					}), t && i && m.a.createElement(Je, {
						withOverlay: !0,
						productId: i
					}), v && m.a.createElement(xt, null), u && c && m.a.createElement(ft, ls({
						withOverlay: !0
					}, c)), E && m.a.createElement(gt, {
						ignoreDefaultFocus: !0,
						withOverlay: !0,
						correlationId: d
					}), b && m.a.createElement(bt, {
						withOverlay: !0
					}))
				}
			}
			var ps = Object(u.b)(ms, e => ({
				markRedesignModalAsClosed: () => e(Object(N.j)()),
				toggleBanModal: () => e(Object(N.i)(H.a.BAN_USER)),
				toggleBladeNightmodeModal: () => e(Object(N.i)(H.a.BLADE_NIGHTMODE)),
				toggleMuteModal: () => e(Object(N.i)(H.a.MUTE_USER)),
				toggleRemovalReasonsModal: () => e(Object(N.i)(H.a.ADD_REMOVAL_REASON))
			}))(Object(ce.c)(us));
			const hs = {},
				bs = () => null;

			function gs(e, t) {
				if (e in hs) throw new Error("Modal with id ".concat(e, " already registered!"));
				hs[e] = t
			}
			var fs = s("./src/reddit/constants/experiments.ts"),
				Cs = s("./src/reddit/contexts/PageLayer/index.tsx"),
				vs = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				ys = s("./src/reddit/selectors/responsiveSettings.ts"),
				Ps = s("./src/reddit/components/AccountManagerModal/index.m.less"),
				xs = s.n(Ps);
			const Os = _.a.div("Overlay", xs.a),
				Es = _.a.div("IframeContainer", xs.a),
				Ss = Object(Cs.t)(),
				js = Object(b.c)({
					frontpageSignupVariant: K.a,
					isResponsiveSettingsEnabled: ys.a
				}),
				ws = {
					[U.b.ChangePassword]: H.a.CHANGE_PASSWORD_MODAL_ID,
					[U.b.Index]: H.a.LOGIN_MODAL_ID,
					[U.b.Register]: H.a.REGISTER_MODAL_ID,
					[U.b.EnableTwoFactor]: H.a.ENABLE_TWO_FACTOR,
					[U.b.DisableTwoFactor]: H.a.DISABLE_TWO_FACTOR,
					[U.b.TwoFactorBackupCodes]: H.a.TWO_FACTOR_BACKUP_CODES,
					[U.b.LinkAppleSSO]: H.a.LINK_APPLE_SSO,
					[U.b.UnlinkAppleSSO]: H.a.UNLINK_APPLE_SSO,
					[U.b.LinkGoogleSSO]: H.a.LINK_GOOGLE_SSO,
					[U.b.UnlinkGoogleSSO]: H.a.UNLINK_GOOGLE_SSO
				};
			class ks extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						isSSOLinkActionFailedModal: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === U.b.Register && Object(K.f)(this.props.frontpageSignupVariant) && vs.a.throttleFeature(fs.Q), this.props.sendEvent(le(this.subscriptions))
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}, this.handleSSOLinkActionFail = () => {
						this.setState({
							isSSOLinkActionFailedModal: !0
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isResponsiveSettingsEnabled: t,
						pageLayer: s,
						path: n
					} = this.props, {
						isSSOLinkActionFailedModal: a
					} = this.state, r = Object(K.c)(e) || Object(K.d)(e), o = n === U.b.LinkAppleSSO || n === U.b.LinkGoogleSSO || n === U.b.UnlinkAppleSSO || n === U.b.UnlinkGoogleSSO, i = Object(g.a)({
						[xs.a.small]: r,
						[xs.a.ssoConfirmPassword]: o,
						[xs.a.linkActionSSOFail]: a,
						[xs.a.mResponsive]: t
					}), c = !r && !a && !t;
					return m.a.createElement(Os, null, m.a.createElement(Es, {
						className: i
					}, m.a.createElement(ie, {
						onClose: this.closeModal,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: s,
						path: n,
						showCloseButton: c
					})))
				}
			}
			const _s = Ss(Object(u.b)(js, (e, t) => ({
				closeModal: t => {
					e(Object(N.g)(ws[t]))
				}
			}))(Object(ce.c)(ks)));
			gs(H.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(_s, {
				path: U.b.ChangePassword
			})), gs(H.a.LOGIN_MODAL_ID, e => m.a.createElement(_s, {
				path: U.b.Index
			})), gs(H.a.ENABLE_TWO_FACTOR, e => m.a.createElement(_s, {
				path: U.b.EnableTwoFactor
			})), gs(H.a.DISABLE_TWO_FACTOR, e => m.a.createElement(_s, {
				path: U.b.DisableTwoFactor
			})), gs(H.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(_s, {
				path: U.b.TwoFactorBackupCodes
			})), gs(H.a.REGISTER_MODAL_ID, e => m.a.createElement(_s, {
				path: U.b.Register
			})), gs(H.a.LINK_APPLE_SSO, e => m.a.createElement(_s, {
				path: U.b.LinkAppleSSO
			})), gs(H.a.LINK_GOOGLE_SSO, e => m.a.createElement(_s, {
				path: U.b.LinkGoogleSSO
			})), gs(H.a.UNLINK_APPLE_SSO, e => m.a.createElement(_s, {
				path: U.b.UnlinkAppleSSO
			})), gs(H.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(_s, {
				path: U.b.UnlinkGoogleSSO
			}));
			const Ms = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("BadgePickerModal").then(s.bind(null, "./src/reddit/components/Badges/PickerModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.BADGE_PICKER, e => m.a.createElement(Ms, {
				withOverlay: !0
			}));
			const Is = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestPendingModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(Is, {
				withOverlay: !0
			}));
			const Ns = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ContributorRequestRequestModal").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(Ns, {
				withOverlay: !0
			}));
			const Ts = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("CrowdControlModal")]).then(s.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.CROWD_CONTROL, e => m.a.createElement(Ts, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var Rs = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const Ls = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(Ct.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconPowerupsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCo~264e7f7d"), s.e("CoinsPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), s.e("EconPowerupsPurchaseModal")]).then(s.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(Rs.d)()])).then(e => e[0].default)
			});
			gs(H.a.ECON_POWERUPS_PURCHASE, e => m.a.createElement(Ls, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const As = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~EconHelperActions~SubredditPremiumBadgeManagement"), s.e("SubredditPremiumBadgeManagement")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(As, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Fs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("SubredditPremiumUploadModal")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(Fs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			var Ds = s("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				Us = s("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				Gs = s.n(Us);
			const Bs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = Ds.SPARKLE_ASSET_PATH, document.createElement("img").src = Ds.STARBURST_ASSET_PATH, Promise.resolve().then(s.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			gs(H.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(Bs, {
				withOverlay: !0,
				className: Gs.a.modalBody,
				overlayClassName: Gs.a.modalOverlay
			}));
			var Hs = s("./src/reddit/helpers/correlationIdTracker.ts");
			const qs = Object(Ye.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("GoldTargetedOfferModal").then(s.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				Ws = e => () => {
					e(), Object(Hs.b)(Hs.a.GoldPayment)
				};
			gs(H.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(qs, {
				onOverlayClick: Ws(e),
				withOverlay: !0
			}));
			const Vs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("HarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(Vs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Qs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("HarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(Qs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const zs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"), s.e("CryptoHarbergerTaxManageModal")]).then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(zs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Zs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("CryptoHarbergerTaxPurchaseModal").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(Zs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Ks = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~GovernanceReleaseNotesModal"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("GovernanceReleaseNotesModal")]).then(s.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(Ks, {
				withOverlay: !0
			}));
			const Ys = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("GovernanceTransferPointsModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.TRANSFER_POINTS, e => m.a.createElement(Ys, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Js = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			gs(H.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(Js, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Xs = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("ModToMemberShareModal").then(s.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(Xs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const $s = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditAddSubredditModal").then(s.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement($s, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const en = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditCreateModal").then(s.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.MULTIREDDIT_CREATE, e => m.a.createElement(en, {
				onOverlayClick: e,
				withOverlay: !0
			})), gs(H.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(en, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const tn = Object(Ye.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("MultiredditEditModal").then(s.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			gs(H.a.MULTIREDDIT_EDIT, e => m.a.createElement(tn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const sn = () => null,
				nn = Object(Ye.a)({
					ErrorComponent: sn,
					getComponent: () => Object(Ct.a)(() => s.e("GlobalModalContainer").then(s.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: sn
				});
			gs(H.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(nn, null));
			var an = s("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				rn = s.n(an);
			const {
				fbt: on
			} = s("./node_modules/fbt/lib/FbtPublic.js"), cn = _.a.h2("ColumnLabel", rn.a), dn = _.a.wrapped(Gt.a, "ColumnWrapper", rn.a), ln = _.a.div("Column", rn.a), mn = _.a.div("Description", rn.a), un = _.a.div("Key", rn.a), pn = _.a.wrapped(jt.k, "ModalMain", rn.a), hn = _.a.wrapped(jt.d, "ModalBody", rn.a), bn = _.a.wrapped(et.f, "PrimaryButton", rn.a), gn = _.a.wrapped(wt.a, "TextButton", rn.a), fn = Object(u.b)(null, e => ({
				closeModal: () => e(Object(N.i)(H.a.KEYBOARD_SHORTCUTS))
			})), Cn = _.a.wrapped(Object($e.a)(fn(e => m.a.createElement(hn, {
				onClick: e => e.stopPropagation()
			}, m.a.createElement(jt.h, null, m.a.createElement(kt.a, null, m.a.createElement(jt.p, null, on._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), m.a.createElement(gn, {
				onClick: e.closeModal
			}, m.a.createElement(jt.b, null)))), m.a.createElement(pn, null, m.a.createElement(dn, null, m.a.createElement(ln, null, m.a.createElement(Gt.a, null, m.a.createElement(cn, null, on._("Navigation", null, {
				hk: "3zSWEe"
			}))), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), m.a.createElement(un, null, "Shift + ?")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Next post or comment", null, {
				hk: "1m8s9z"
			})), m.a.createElement(un, null, "J")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), m.a.createElement(un, null, "K")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), m.a.createElement(un, null, "N")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), m.a.createElement(un, null, "P")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Open post", null, {
				hk: "2wD7mh"
			})), m.a.createElement(un, null, "Enter")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Open/close expando", null, {
				hk: "1yDst0"
			})), m.a.createElement(un, null, "X")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Go to post link", null, {
				hk: "c0TNr"
			})), m.a.createElement(un, null, "L"))), m.a.createElement(ln, null, m.a.createElement(Gt.a, null, m.a.createElement(cn, null, on._("Action", null, {
				hk: "3QI6pT"
			}))), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Upvote", null, {
				hk: "5i9NP"
			})), m.a.createElement(un, null, "A")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Downvote", null, {
				hk: "1ef3YP"
			})), m.a.createElement(un, null, "Z")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("New post", null, {
				hk: "4dtNWf"
			})), m.a.createElement(un, null, "C")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Reply to comment", null, {
				hk: "G8AbT"
			})), m.a.createElement(un, null, "R")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Submit comment/post", null, {
				hk: "13agk7"
			})), m.a.createElement(un, null, "Ctrl + Enter")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Save", null, {
				hk: "3Dtwo5"
			})), m.a.createElement(un, null, "S")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Hide", null, {
				hk: "2Dn9GF"
			})), m.a.createElement(un, null, "H")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Open navigation", null, {
				hk: "QdGe2"
			})), m.a.createElement(un, null, "Q")), m.a.createElement(Gt.a, null, m.a.createElement(mn, null, on._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), m.a.createElement(un, null, "Enter"))))), m.a.createElement(jt.f, null, m.a.createElement(bn, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, on._("Close", null, {
				hk: "2R1HDp"
			})))))), "ConnectedModal", rn.a);
			gs(H.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Cn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const {
				fbt: vn
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yn = Object(b.c)({
				allowNavigationCallback: ns.a
			}), Pn = Object(u.b)(yn, e => ({
				closeModal: () => e(Object(N.i)(H.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(St.a)())
			}));
			class xn extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(jt.d, null, m.a.createElement(jt.h, null, m.a.createElement(kt.a, null, m.a.createElement(jt.p, null, vn._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(wt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(jt.b, null)))), m.a.createElement(jt.k, null, m.a.createElement(jt.o, null, vn._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(jt.f, null, m.a.createElement(jt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, vn._("Cancel", null, {
						hk: "D28iw"
					})), m.a.createElement(jt.q, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, vn._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const On = Object($e.a)(Pn(xn));
			gs(H.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(On, {
				withOverlay: !0
			}));
			const En = Object(b.c)({
					activeModalId: tt.a
				}),
				Sn = Object(u.b)(En, e => ({
					toggleModal: t => e(Object(N.i)(t))
				})),
				jn = 500,
				wn = () => {};
			class kn extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					this.props.activeModalId ? setTimeout(() => Object(ds.a)(), jn) : setTimeout(() => Object(ds.b)(), jn)
				}
				componentWillUnmount() {
					Object(ds.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					var t;
					return ((t = e) && t in hs ? hs[t] : bs)(e ? this.toggleModal : wn)
				}
			}
			var _n = Sn(kn),
				Mn = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				In = s("./src/reddit/actions/page.ts"),
				Nn = s("./src/reddit/actions/shortcuts/utils.ts"),
				Tn = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Rn = e => m.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, m.a.createElement("path", {
					d: "M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z"
				}), m.a.createElement("path", {
					d: "M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z"
				})),
				Ln = s("./src/reddit/selectors/header.ts"),
				An = s("./src/reddit/selectors/userPrefs.ts"),
				Fn = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx")),
				Dn = s("./src/reddit/components/SEOTitle/index.tsx"),
				Un = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Gn = s("./src/reddit/components/UserIcon/index.tsx"),
				Bn = s("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				Hn = s("./src/reddit/icons/svgs/All/index.tsx");

			function qn(e) {
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
			var Wn = s("./src/reddit/icons/svgs/Coin/index.tsx"),
				Vn = s("./src/reddit/icons/svgs/Envelope/index.tsx"),
				Qn = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				zn = s("./src/reddit/constants/colors.ts"),
				Zn = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				},
				Kn = Object(C.a)(e => {
					var {
						className: t,
						isBadged: s
					} = e, n = Zn(e, ["className", "isBadged"]);
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
						fill: s ? Object(ue.a)(n).body : "none"
					}), m.a.createElement("circle", {
						cx: "16",
						cy: "4",
						r: "3",
						fill: s ? zn.a.orangered : "none"
					}))
				}),
				Yn = s("./src/reddit/icons/svgs/Moderate/index.tsx");

			function Jn() {
				return (Jn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Xn, $n = e => m.a.createElement("svg", Jn({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), m.a.createElement("path", {
					d: "M17,5H6A1,1,0,0,0,5,6V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V6A1,1,0,0,0,17,5ZM7,7.5A.5.5,0,0,1,7.5,7h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM15.5,16h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5h-8a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-2.5H13a.5.5,0,0,1,0-1h2.5a.5.5,0,0,1,0,1Z"
				}), m.a.createElement("path", {
					d: "M6,4h9.47a2.09,2.09,0,0,1,.51.07V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H4.09A2.09,2.09,0,0,1,4,15.49V6A2,2,0,0,1,6,4Z"
				})),
				ea = e => {
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
				ta = s("./src/reddit/icons/svgs/Post/index.tsx"),
				sa = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				na = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				aa = s("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				ra = s.n(aa);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModMailBeta = "ModMailBeta", e.ModQueue = "ModQueue", e.Multi = "Multi", e.Popular = "Popular", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Xn || (Xn = {}));
			const oa = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [s, n] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, s && "".concat(s, "/"), n && m.a.createElement(Dn.b, {
					type: Dn.a.HeaderSelector
				}, n))
			};
			var ia = s("./src/lib/objectSelector/index.ts"),
				ca = s("./src/reddit/constants/wiki.ts"),
				da = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				la = s("./src/reddit/selectors/subreddit.ts"),
				ma = s("./src/reddit/selectors/topic.ts");
			var ua = Object(ia.a)((e, t) => {
					let {
						pageLayer: s
					} = t;
					const n = !!e.user.account,
						a = Object(Cs.U)(s);
					switch (a) {
						case "index":
						case "listing":
							return n ? {
								type: Xn.Home
							} : {
								type: Xn.Popular
							};
						case "modListing":
							return {
								type: Xn.ModListing
							};
						case "modQueuePages":
							return {
								type: Xn.ModQueue
							};
						case "postCreation":
							return {
								type: Xn.CreatePost
							};
						case "postDraft":
							return {
								type: Xn.ViewDraft
							};
						case "subredditCreation":
							return {
								type: Xn.SubredditCreation
							};
						case "coins":
							return {
								type: Xn.Coins
							};
						case "premium":
							return {
								type: Xn.Premium
							};
						case "acknowledgements":
							return {
								type: Xn.Acknowledgements
							};
						case "appeal":
							return {
								type: Xn.Appeal
							};
						case "report":
							return {
								type: Xn.Report
							};
						case "userDataRequest":
							return {
								type: Xn.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: Xn.DailyCharts
							};
						case "geotagging":
							return {
								type: Xn.Geotagging
							};
						case "topic": {
							const t = Object(Cs.s)(s),
								n = t && Object(ma.c)(e, t, !0);
							if (n) return {
								type: Xn.Topic,
								model: n
							}
						}
					}
					const r = e.user.account;
					if (r) switch (a) {
						case "inboxPages":
							return {
								type: Xn.Inbox, model: r
							};
						case "settings":
							return {
								type: Xn.Settings, model: r
							}
					}
					const o = Object(Cs.O)(e, {
						pageLayer: s
					});
					if ("all" === o) return {
						type: Xn.All
					};
					if ("popular" === o) return {
						type: Xn.Popular
					};
					const i = Object(Cs.q)(e, {
						pageLayer: s
					});
					if (i) return "searchResults" === a ? {
						type: Xn.CommunitySearch,
						model: i
					} : {
						type: Xn.Community,
						model: i
					};
					const c = Object(Cs.d)(e, {
						pageLayer: s
					});
					if (c) return {
						type: Xn.Multi,
						model: c
					};
					const d = Object(Cs.j)(e, {
						pageLayer: s
					});
					if (d) return {
						type: Xn.UserProfile,
						model: d
					};
					const l = Object(Cs.h)(s);
					if (l) return {
						type: Xn.UserProfileName,
						name: "u/".concat(l)
					};
					if (a && "searchResults" === a) return {
						type: Xn.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(Cs.n)(e, {
								pageLayer: s
							}) || ca.e,
							n = Object(la.z)(e, {
								subredditName: t
							});
						if (n) return {
							type: Xn.Community,
							model: n
						}
					}
					return "rpan" === a && Object(da.a)(e) ? {
						type: Xn.PublicAccessNetwork
					} : {
						type: Xn.Unknown
					}
				}),
				pa = (s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
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

			function ga(e) {
				const t = e.icon,
					s = e.text,
					n = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: ha.a.icon
						}), m.a.createElement(s, {
							className: ha.a.text
						})),
						className: Object(g.a)(ha.a.item, e.className, {
							[ha.a.mFocused]: !!e.isFocused,
							[ha.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return n["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", ba({}, n, {
					href: e.to,
					target: "_blank"
				})) : m.a.createElement(Mn.a, ba({}, n, {
					to: e.to
				})) : m.a.createElement("button", n)
			}
			var fa = s("./src/reddit/helpers/overlay/index.ts"),
				Ca = s("./src/reddit/routes/modListing/index.ts"),
				va = s("./src/reddit/selectors/multireddit.ts"),
				ya = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				Pa = s("./src/lib/LinkedListMap/index.ts");
			const xa = Object(b.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(va.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(va.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched,
				trendingSubreddits: e => e.subreddits.trending.map(t => e.subreddits.models[t]).filter(Boolean)
			});
			var Oa;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Oa || (Oa = {}));
			const Ea = [e => ({
					id: Xn.Employee,
					type: Oa.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Kn, {
								className: Object(g.a)(t, ra.a.itemIcon)
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
				Sa = [e => ({
					id: Xn.All,
					type: Oa.GenericLink,
					model: {
						url: "/r/all/",
						displayText: n.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Hn.a, {
								className: Object(g.a)(t, ra.a.itemIcon)
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
					id: Xn.DailyCharts,
					type: Oa.GenericLink,
					model: {
						url: "/subreddits/leaderboard/",
						displayText: n.fbt._("Top Communities", null, {
							hk: "1KzP9v"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Qn.a, {
								className: Object(g.a)(t, ra.a.itemIcon)
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
				ja = [e => ({
					id: "reddit-feeds",
					type: Oa.Header,
					model: {
						displayText: n.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), (e, t) => ({
					id: Xn.Home,
					type: Oa.GenericLink,
					model: {
						url: "/",
						displayText: n.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => {
							let {
								className: s
							} = e;
							return m.a.createElement(Kn, {
								className: Object(g.a)(s, ra.a.itemIcon),
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
					id: Xn.Popular,
					type: Oa.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: n.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(ea, {
								className: Object(g.a)(t, ra.a.itemIcon)
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
				}), ...Sa],
				wa = [e => ({
					id: "reddit-feeds",
					type: Oa.Header,
					model: {
						displayText: n.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: Xn.Home,
					type: Oa.GenericLink,
					model: {
						url: "/",
						displayText: n.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(ea, {
								className: Object(g.a)(t, ra.a.itemIcon)
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
				}), ...Sa],
				ka = [e => ({
					id: "reddit-other",
					type: Oa.Header,
					model: {
						displayText: n.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Xn.Settings,
					type: Oa.GenericLink,
					model: {
						url: "/settings",
						displayText: n.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Bn.a, {
								className: Object(g.a)(ra.a.userIcon, t)
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
					id: Xn.Inbox,
					type: Oa.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: n.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Bn.a, {
								className: Object(g.a)(ra.a.userIcon, t)
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
					id: Xn.CreatePost,
					type: Oa.GenericLink,
					model: {
						url: "/submit",
						displayText: n.fbt._("Create Post", null, {
							hk: "dGck6"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(ta.a, {
								className: Object(g.a)(t, ra.a.itemIcon)
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
				_a = [e => ({
					id: Xn.Coins,
					type: Oa.GenericLink,
					model: {
						url: "/coins",
						displayText: n.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Wn.a, {
								className: Object(g.a)(t, ra.a.itemCoin)
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
					id: Xn.Premium,
					type: Oa.GenericLink,
					model: {
						url: "/premium",
						displayText: n.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(sa.a, {
								className: Object(g.a)(t, ra.a.itemPremium)
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
				Ma = [e => ({
					id: Xn.ModQueue,
					type: Oa.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: n.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Yn.a, {
								className: Object(g.a)(t, ra.a.itemModQueue)
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
					id: Xn.ModMailBeta,
					type: Oa.GenericLink,
					model: {
						url: "https://mod.reddit.com/mail/all",
						displayText: n.fbt._("Modmail Beta", null, {
							hk: "2CtXgY"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Vn.a, {
								className: Object(g.a)(t, ra.a.itemModQueue)
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
					id: Xn.ModMail,
					type: Oa.GenericLink,
					model: {
						url: "/message/moderator",
						displayText: n.fbt._("Modmail", null, {
							hk: "1gjb1m"
						}).toString(),
						icon: e => {
							let {
								className: t
							} = e;
							return m.a.createElement(Vn.a, {
								className: Object(g.a)(t, ra.a.itemModQueue)
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

			function Ia(e, t) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Oa.Header,
					model: {
						displayText: n.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Oa.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Oa.Header,
					model: {
						displayText: n.fbt._("profiles", null, {
							hk: "bmbRq"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Oa.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			var Na = s("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				Ta = s.n(Na);

			function Ra(e) {
				return m.a.createElement("div", {
					className: Object(g.a)(Ta.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var La = s("./src/reddit/actions/subscription/index.ts"),
				Aa = s("./src/reddit/helpers/trackers/customFeeds.ts"),
				Fa = e => {
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
				Da = s("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				Ua = s.n(Da);

			function Ga() {
				return (Ga = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ba = Object(b.c)({
					currentUser: Vt.i,
					hideNSFWPref: Vt.z,
					isLoggedIn: Vt.H
				}),
				Ha = Object(u.b)(Ba, (e, t) => ({
					toggleFavorite: s => {
						switch (s.stopPropagation(), s.preventDefault(), t.type) {
							case Oa.Subreddit:
								e(Object(La.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Oa.Profile:
								e(Object(La.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Oa.Multi:
								e(Object(La.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(Aa.f)(t.model.url)) : t.sendEvent(Object(Aa.c)(t.model.url))
						}
					}
				}));
			var qa = Object(ce.c)(Ha((function(e) {
					const t = {
						className: Object(g.a)(Ua.a.item, e.className, {
							[Ua.a.mFocused]: !!e.isFocused
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
						case Oa.Subreddit:
							return m.a.createElement(Mn.a, Ga({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Un.b, {
								className: Ua.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: Ua.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Fa, {
								className: Object(g.a)(Ua.a.favorite, {
									[Ua.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Oa.SubredditAutocomplete:
							return m.a.createElement(Mn.a, Ga({}, t, {
								"aria-label": e.model.name,
								to: "/r/".concat(e.model.name, "/")
							}), m.a.createElement(Un.b, {
								className: Ua.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: Ua.a.text
							}, e.model.name));
						case Oa.Multi:
							return m.a.createElement(Mn.a, Ga({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: Ua.a.customFeedIcon
							}), m.a.createElement("span", {
								className: Ua.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Fa, {
								className: Object(g.a)(Ua.a.favorite, {
									[Ua.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Oa.Profile:
							return m.a.createElement(Mn.a, Ga({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Gn.a, {
								className: Ua.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: Ua.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Fa, {
								className: Object(g.a)(Ua.a.favorite, {
									[Ua.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Wa = s("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Va = s.n(Wa);

			function Qa(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: Va.a.header
				}), m.a.createElement("div", {
					className: Va.a.item
				}), m.a.createElement("div", {
					className: Va.a.item
				}), m.a.createElement("div", {
					className: Va.a.item
				}), m.a.createElement("div", {
					className: Va.a.item
				}))
			}
			var za = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Za = s("./src/reddit/actions/multireddit/index.ts"),
				Ka = s("./src/reddit/actions/subreddit.ts"),
				Ya = s("./src/reddit/constants/keycodes.ts"),
				Ja = s("./src/reddit/helpers/trackers/coins.ts"),
				Xa = s("./src/reddit/helpers/trackers/premium.ts"),
				$a = s("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				er = s.n($a);

			function tr() {
				return (tr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function sr(e) {
				return e.id === Xn.ModMail || (e.id === Xn.ModMailBeta || e.id === Xn.CreateCommunity)
			}

			function nr(e) {
				const t = new Pa.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Oa.Header && e.type !== Oa.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const ar = Object(b.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const s = xa(e),
							a = new Pa.a("id");
						if (s.account) {
							const r = s.account;
							ja.forEach(e => a.push(e(r))), r.isEmployee && Ea.forEach(e => a.push(e(r))), Object(da.a)(e) && a.push({
								id: Xn.PublicAccessNetwork,
								type: Oa.GenericClickable,
								model: {
									onClick: () => {
										t(Object(fa.a)(B.c[B.b.Rpan]))
									},
									displayText: n.fbt._("Reddit Public Access Network", null, {
										hk: "3p4s8f"
									}).toString(),
									icon: e => {
										let {
											className: t
										} = e;
										return m.a.createElement(na.a, {
											className: Object(g.a)(t, ra.a.itemPublicAccessNetwork)
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
								type: Oa.Header,
								model: {
									displayText: n.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), s.favoriteSubreddits.forEach(e => a.push({
								id: "fav" + e.id,
								type: Oa.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteProfiles.forEach(e => a.push({
								id: "fav" + e.id,
								type: Oa.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), s.favoriteMultireddits.forEach(e => a.push({
								id: "fav" + e.url,
								type: Oa.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.multisPending ? a.push({
								id: "multis-pending",
								type: Oa.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.multis.length > 0 && (a.push({
								id: "header-multis",
								type: Oa.Header,
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
												t(Object(N.h)(H.a.MULTIREDDIT_CREATE)), n()
											},
											className: Object(g.a)(s, ra.a.multiPlusButton)
										}, m.a.createElement(ya.a, {
											className: ra.a.multiPlusIcon
										}))
									},
									buttonTelemetryNoun: "create_new_custom_feed"
								}
							}), s.multis.forEach(e => a.push({
								id: e.url,
								type: Oa.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), s.moderatingSubredditsPending ? a.push({
								id: "moderatingSubreddits-pending",
								type: Oa.LoadingState,
								model: {
									displayText: ""
								}
							}) : s.moderatingSubreddits.length && (a.push({
								id: "header-moderating",
								type: Oa.Header,
								model: {
									displayText: n.fbt._("moderating subreddits", null, {
										hk: "2z4AZS"
									}).toString()
								}
							}), a.push({
								id: Xn.ModListing,
								type: Oa.GenericLink,
								model: {
									url: Ca.a,
									displayText: "r/Mod",
									icon: e => {
										let {
											className: t
										} = e;
										return m.a.createElement(Yn.a, {
											className: Object(g.a)(t, ra.a.itemModQueue)
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
								type: Oa.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), s.subscriptionsPending ? a.push({
								id: "subscriptions-pending",
								type: Oa.LoadingState,
								model: {
									displayText: ""
								}
							}) : Ia(a, s), ka.forEach(e => a.push(e(r))), Object(Vt.ab)(e) && a.push({
								id: Xn.CreateCommunity,
								type: Oa.GenericLink,
								model: {
									url: "/subreddits/create",
									displayText: n.fbt._("Create Community", null, {
										hk: "41sjx"
									}).toString(),
									icon: e => {
										let {
											className: t
										} = e;
										return m.a.createElement(ta.a, {
											className: Object(g.a)(t, ra.a.itemIcon)
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
							}), _a.forEach(e => a.push(e(r))), r.isMod && Ma.forEach(e => a.push(e(r)))
						} else s.subscriptions.length || Object(Vt.H)(e) ? ja.forEach(e => a.push(e(null))) : wa.forEach(e => a.push(e(null))), a.push({
							id: "reddit-other",
							type: Oa.Header,
							model: {
								displayText: n.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), _a.forEach(e => a.push(e(null))), Ia(a, s);
						return a
					}
				}),
				rr = e => ({
					onHomeClicked: () => e(Object(In.x)()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(La.e)()), e(Object(Ka.q)()), e(Object(Za.g)())
					},
					onActionDispatched: t => e(t)
				}),
				or = (e, t, s) => Object.assign({}, e, t, s, {
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class ir extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							s = this.getList(t, this.props),
							n = nr(s),
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
						if (e.key === Ya.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === Ya.b.Tab && this.props.onClose && this.props.onClose(), e.key === Ya.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Oa.Header && e.type !== Oa.LoadingState && (this.fireTelemetryForListItem(e), e.type === Oa.GenericClickable ? e.model.onClick() : sr(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === Ya.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === Ya.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case Xn.Coins:
								Ja.f(), t = Ja.e();
								break;
							case Xn.Premium:
								Xa.g(), t = Xa.f()
						}
						switch (e.type) {
							case Oa.Category:
							case Oa.GenericLink:
							case Oa.GenericClickable:
							case Oa.Multi:
							case Oa.Profile:
							case Oa.Subreddit:
								this.props.sendEvent(s => Object.assign({}, Object(Y.defaults)(s), t ? {
									correlationId: t
								} : null, {
									customFeed: e.type === Oa.Multi ? Object(Y.customFeedByPath)(s, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Oa.Header: {
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
						focusOrder: nr(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						s = this.getList(t, e),
						n = nr(s);
					this.setState({
						focusOrder: n,
						renderableList: s
					})
				}
				getList(e, t) {
					if (e) {
						const s = new Pa.a("id"),
							n = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Oa.Category:
								case Oa.GenericLink:
								case Oa.Multi:
								case Oa.Profile:
								case Oa.Subreddit:
									e.model.displayText.match(n) && s.push(e);
									break;
								case Oa.Header: {
									const t = s.last();
									t && t.type === Oa.Header && s.pop(), s.push(e);
									break
								}
								case Oa.LoadingState:
							}
						});
						const a = s.last();
						return a && a.type === Oa.Header && s.pop(), s
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
						className: er.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Xn.Home && this.props.onHomeClicked(), e.type === Oa.GenericClickable && e.model.onClick()
							}
						};
						switch (e.type) {
							case Oa.GenericClickable:
								return m.a.createElement(ga, tr({}, s, {
									className: er.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Oa.Category:
							case Oa.GenericLink:
								return m.a.createElement(ga, tr({}, s, {
									externalLink: sr(e),
									className: er.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Oa.Header: {
								const s = e.model.button;
								return m.a.createElement(Ra, {
									className: er.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								}, e.model.displayText, s && m.a.createElement(s, {
									className: er.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Oa.LoadingState:
								return m.a.createElement(Qa, {
									className: er.a.listHeader,
									key: "subreddit-list-key-nomodel".concat(t)
								});
							case Oa.Multi:
								return m.a.createElement(qa, tr({}, s, {
									className: er.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Oa.Multi
								}));
							case Oa.Profile:
								return m.a.createElement(qa, tr({}, s, {
									className: er.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Oa.Profile
								}));
							case Oa.Subreddit:
								return m.a.createElement(qa, tr({}, s, {
									className: er.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Oa.Subreddit
								}))
						}
					}))
				}
			}
			const cr = Object(u.b)(ar, rr, or)(Object(ce.c)(ir)),
				dr = Object(u.b)(ar, rr, or)(Object(ce.c)(Object(za.b)(ir))),
				lr = Object(Cs.t)({
					isCommentsPage: Cs.w,
					pageLayer: e => e
				}),
				mr = Object(b.c)({
					currentPage: ua,
					hideNSFWPref: Vt.z,
					isDropdownOpen: Ln.a,
					isLoggedIn: Vt.H,
					isOverlayOpen: ns.h,
					isPinnedSubscriptionsMenuDisabled: An.a,
					isSubscriptionsPinned: An.b
				});
			class ur extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Nn.d)()
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
						isCommentsPage: a,
						isLoggedIn: r,
						isOverlayOpen: o
					} = this.props, i = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, c = o || !r && a;
					return m.a.createElement("div", {
						"aria-label": n.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "2PXR4j"
						}),
						className: Object(g.a)(ra.a.container, t, {
							[ra.a.mOpen]: i,
							[ra.a.mNotPinned]: !this.props.isSubscriptionsPinned,
							[ra.a.mPinned]: this.props.isSubscriptionsPinned
						}),
						onClickCapture: this.stopPropagation,
						role: "navigation"
					}, m.a.createElement("button", {
						className: ra.a.selector,
						onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
						onFocus: this.onButtonFocus,
						tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
					}, m.a.createElement("span", {
						className: ra.a.containerText
					}, function(e) {
						switch (e.type) {
							case Xn.Acknowledgements:
								return oa(n.fbt._("Acknowledgements", null, {
									hk: "32JBVF"
								}).toString());
							case Xn.All:
								return oa(n.fbt._("All", null, {
									hk: "2gaHOy"
								}).toString());
							case Xn.Appeal:
								return oa(n.fbt._("Appeal", null, {
									hk: "2dMFkN"
								}).toString());
							case Xn.Coins:
								return oa(n.fbt._("Coins", null, {
									hk: "3ZpUbG"
								}).toString());
							case Xn.Community:
								return oa(e.model.displayText, !0);
							case Xn.CommunitySearch:
								return oa(n.fbt._("Subreddit Results", null, {
									hk: "19qRVH"
								}).toString());
							case Xn.CreateCommunity:
								return oa(n.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case Xn.CreatePost:
								return oa(n.fbt._("Create Post", null, {
									hk: "30V40V"
								}).toString());
							case Xn.DailyCharts:
								return oa(n.fbt._("Top Communities", null, {
									hk: "1sWIEu"
								}).toString());
							case Xn.GlobalSearch:
								return oa(n.fbt._("Search Results", null, {
									hk: "scJwR"
								}).toString());
							case Xn.Geotagging:
								return oa(n.fbt._("Help Out", null, {
									hk: "1RN9v2"
								}).toString());
							case Xn.Home:
								return oa(n.fbt._("Home", null, {
									hk: "amHQd"
								}).toString());
							case Xn.Inbox:
								return oa(n.fbt._("Messages", null, {
									hk: "25MBSp"
								}).toString());
							case Xn.ModListing:
								return oa("r/Mod");
							case Xn.ModMail:
								return oa(n.fbt._("Modmail", null, {
									hk: "of9AC"
								}).toString());
							case Xn.ModMailBeta:
								return oa(n.fbt._("Modmail Beta", null, {
									hk: "2zsXji"
								}).toString());
							case Xn.ModQueue:
								return oa(n.fbt._("Mod Queue", null, {
									hk: "3hdHhb"
								}).toString());
							case Xn.Multi:
								return oa(e.model.displayText, !0);
							case Xn.Popular:
								return oa(n.fbt._("Popular", null, {
									hk: "1rTNHl"
								}).toString());
							case Xn.Premium:
								return oa(n.fbt._("Premium", null, {
									hk: "x0xKv"
								}).toString());
							case Xn.PublicAccessNetwork:
								return oa(n.fbt._("Reddit Public Access Network", null, {
									hk: "3agn8V"
								}).toString());
							case Xn.Report:
								return oa(n.fbt._("Report", null, {
									hk: "1PLTqR"
								}).toString());
							case Xn.Settings:
								return oa(n.fbt._("User Settings", null, {
									hk: "hcLHW"
								}).toString());
							case Xn.SubredditCreation:
								return oa(n.fbt._("Create Community", null, {
									hk: "2UKjpW"
								}).toString());
							case Xn.Topic:
								return oa(e.model);
							case Xn.Unknown:
								return oa("");
							case Xn.UserDataRequest:
								return oa(n.fbt._("Request your Reddit data", null, {
									hk: "3LqHku"
								}).toString());
							case Xn.UserProfile:
								return oa(e.model.displayText, !0);
							case Xn.UserProfileName:
								return oa(e.name, !0);
							case Xn.ViewDraft:
								return oa(n.fbt._("View Draft", null, {
									hk: "3k2k9a"
								}).toString())
						}
					}(e)), function(e, t) {
						switch (e.type) {
							case Xn.Acknowledgements:
								return m.a.createElement(ta.a, {
									className: ra.a.defaultIcon
								});
							case Xn.All:
								return m.a.createElement(Hn.a, {
									className: ra.a.defaultIcon
								});
							case Xn.Appeal:
								return m.a.createElement(ta.a, {
									className: ra.a.defaultIcon
								});
							case Xn.Coins:
								return m.a.createElement(Wn.a, {
									className: ra.a.coinIcon
								});
							case Xn.Community:
							case Xn.CommunitySearch: {
								const s = Object(Fn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return m.a.createElement(Un.b, {
									className: ra.a.subredditIcon,
									iconUrl: s.url,
									primaryColor: s.color
								})
							}
							case Xn.CreateCommunity:
							case Xn.CreatePost:
								return m.a.createElement(ta.a, {
									className: ra.a.defaultIcon
								});
							case Xn.DailyCharts:
								return m.a.createElement(Qn.a, {
									className: ra.a.defaultIcon
								});
							case Xn.GlobalSearch:
								return m.a.createElement(qn, {
									className: ra.a.defaultIcon
								});
							case Xn.Home:
								return m.a.createElement(Kn, {
									className: ra.a.defaultIcon
								});
							case Xn.Inbox:
							case Xn.Settings:
								return m.a.createElement(Bn.a, {
									className: Object(g.a)(ra.a.icon, ra.a.userIcon)
								});
							case Xn.ModListing:
								return m.a.createElement(Yn.a, {
									className: ra.a.modQueueIcon
								});
							case Xn.SubredditCreation:
								return m.a.createElement(ta.a, {
									className: ra.a.defaultIcon
								});
							case Xn.ModMail:
							case Xn.ModMailBeta:
								return m.a.createElement(Vn.a, {
									className: ra.a.modQueueIcon
								});
							case Xn.ModQueue:
								return m.a.createElement(Yn.a, {
									className: ra.a.modQueueIcon
								});
							case Xn.Multi:
								return m.a.createElement("img", {
									src: e.model.icon,
									className: ra.a.customFeedIcon
								});
							case Xn.Popular:
								return m.a.createElement(ea, {
									className: ra.a.defaultIcon
								});
							case Xn.Premium:
								return m.a.createElement(sa.a, {
									className: ra.a.premiumIcon
								});
							case Xn.PublicAccessNetwork:
								return m.a.createElement(na.a, {
									className: ra.a.publicAccessNetworkIcon
								});
							case Xn.Report:
								return m.a.createElement(ta.a, {
									className: ra.a.defaultIcon
								});
							case Xn.Unknown:
								return m.a.createElement("div", {
									className: ra.a.unknownIcon
								});
							case Xn.UserDataRequest:
								return m.a.createElement(ta.a, {
									className: ra.a.defaultIcon
								});
							case Xn.UserProfile: {
								const s = Object(Fn.a)({
									shouldHideNsfwIcon: t,
									subredditOrProfile: e.model
								});
								return m.a.createElement(Gn.a, {
									className: Object(g.a)(ra.a.icon, ra.a.userIcon),
									iconUrl: s.url,
									isNSFW: e.model.isNSFW,
									userName: e.model.name
								})
							}
							case Xn.UserProfileName:
								return m.a.createElement("div", {
									className: ra.a.defaultIcon
								});
							case Xn.ViewDraft:
								return m.a.createElement(ta.a, {
									className: ra.a.defaultIcon
								});
							case Xn.Geotagging:
							case Xn.Topic:
								return m.a.createElement($n, {
									className: ra.a.defaultIcon
								})
						}
					}(e, s), !this.props.isSubscriptionsPinned && m.a.createElement(Tn.b, {
						className: ra.a.caretDown
					})), i && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(Rn, {
						className: Object(g.a)(ra.a.pin, {
							[ra.a.disabled]: c
						}),
						onClick: c ? void 0 : this.props.onPinSubscriptions
					}), i && m.a.createElement(dr, {
						canAutofocus: !0,
						className: ra.a.listContainer,
						onClose: this.close
					}))
				}
			}
			var pr = lr(Object(u.b)(mr, (e, t) => ({
					closeDropdown: () => e(Object(E.f)()),
					onLocationRefresh: (s, n) => e(Object(In.F)(s, t.pageLayer, n)),
					onPinSubscriptions: () => {
						e(Object(E.i)()), e(Object(E.f)())
					},
					openDropdown: () => e(Object(E.g)()),
					toggleDropdown: () => e(Object(E.h)())
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onLocationClick: s => t.onLocationRefresh(s, e.isOverlayOpen)
				}))(Object(ce.c)(ur))),
				hr = s("./src/reddit/components/JumpToContent/index.tsx"),
				br = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				gr = s("./node_modules/history/esm/history.js"),
				fr = s("./node_modules/lodash/debounce.js"),
				Cr = s.n(fr),
				vr = s("./node_modules/uuid/v4.js"),
				yr = s.n(vr),
				Pr = s("./src/lib/makeSearchKey/index.ts"),
				xr = s("./src/reddit/actions/post.ts"),
				Or = s("./src/reddit/actions/search.ts"),
				Er = s("./src/reddit/actions/search/trending.ts"),
				Sr = s("./src/reddit/actions/tooltip.ts"),
				jr = s("./src/higherOrderComponents/asTooltip.tsx"),
				wr = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				kr = s("./src/lib/search/index.ts"),
				_r = s("./src/reddit/models/Search/index.ts");
			var Mr = (e, t, s, n, a, r) => {
					let o, i;
					if ("" !== n.searchQuery) {
						if (n.isTypeaheadSuggestion) o = "/".concat(n.isProfile ? n.searchQuery.replace("u/", "user/") : n.searchQuery);
						else {
							if (i = "".concat(q.o, "=").concat(Object(kr.b)(n.rawQuery || n.searchQuery)), o = "/search/", n.section === _r.c.trending && a && a.source && (i += "&source=".concat(a.source)), e && r ? (o = "/r/".concat(e.name).concat(o), i = "".concat(i, "&").concat(q.p, "=1")) : !e && n.subredditOrProfileRestrictedName && (o = "/".concat(n.subredditOrProfileRestrictedName).concat(o), i = "".concat(i, "&").concat(q.p, "=1")), t) {
								const e = t.url.split("/")[2];
								o = "/user/".concat(e, "/m/").concat(t.name).concat(o), i = "".concat(i, "&").concat(q.p, "=1&").concat(q.i, "=1")
							}
							a && a.category && (i = "".concat(i, "&").concat(q.a, "=").concat(a.category))
						}
						return {
							url: o,
							qs: i
						}
					}
				},
				Ir = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				Nr = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Tr = s("./src/reddit/icons/svgs/Search/index.tsx"),
				Rr = s("./src/reddit/components/SearchDropdown/index.m.less"),
				Lr = s.n(Rr);
			const Ar = Object(jr.a)(wr.b);
			class Fr extends m.a.Component {
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
						focusedItem: a,
						onRemoveRecentSearch: r,
						recentSearch: o,
						toggleTooltip: i
					} = e, c = Mr(null, null, null, o), d = c && c.url, l = c && c.qs, u = l ? "".concat(d, "?").concat(l) : d, p = this.generateFullSearchQuery(o);
					let h;
					return a && (h = this.generateFullSearchQuery(a)), m.a.createElement(Mn.a, {
						"aria-label": o.searchQuery,
						className: Object(g.a)(Lr.a.listItem, Ua.a.item, s, {
							[Lr.a.mFocused]: !(!a || a.section !== _r.c.recent || h !== p)
						}),
						onClick: this.onRecentSearchItemClick,
						key: p,
						role: "link",
						tabIndex: -1,
						to: u || ""
					}, o.displayInfo && o.isTypeaheadSuggestion ? o.displayInfo.iconUrl ? m.a.createElement("div", {
						className: Lr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(o.displayInfo.iconUrl, "')")
						}
					}) : m.a.createElement(Ir.a, {
						className: Lr.a.planetIcon
					}) : m.a.createElement(Tr.a, {
						className: Object(g.a)(Lr.a.listItemIcon, Ua.a.icon)
					}), m.a.createElement("span", {
						className: Ua.a.text
					}, p), m.a.createElement("div", {
						onMouseEnter: () => i(p),
						onMouseLeave: () => i(null),
						id: p
					}, m.a.createElement(Nr.a, {
						className: Object(g.a)(Lr.a.listItemIcon, Lr.a.mHoverable, Ua.a.icon),
						onClick: e => {
							e.stopPropagation(), e.preventDefault(), r(o)
						}
					}), m.a.createElement(Ar, {
						className: Lr.a.fixedTextTooltip,
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
			var Dr = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Ur = s("./src/reddit/components/PostTitle/index.tsx"),
				Gr = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				Br = s("./src/reddit/constants/adEvents.ts"),
				Hr = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				qr = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				Wr = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			class Vr extends m.a.Component {
				constructor() {
					super(...arguments), this.transformTrendingToRecentSearch = () => {
						const e = this.props.trendingItem,
							{
								post: t,
								subredditInfo: s,
								subredditOccurrences: n
							} = e;
						return Wr(e, ["post", "subredditInfo", "subredditOccurrences"])
					}, this.onTrendingItemClick = () => {
						this.props.onUpdateSearchQuery(this.props.trendingItem.searchQuery);
						const e = this.transformTrendingToRecentSearch();
						if (this.props.onSetRecentSearch(e), this.props.onSendDropdownClickEvent(this.props.trendingItem.searchQuery, this.props.trendingItem.rawQuery || "", Y.StructureType.Trending, Y.SearchDropdownNouns.Trending), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							this.props.fireAdPixelsOfType(e, Br.a.Click)
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
					} = this.props, a = this.isSponsored(), r = Mr(null, null, null, s, {
						source: a ? Pr.a.PromotedTrend : Pr.a.Trending
					}), o = r && r.url, i = r && r.qs, c = i ? "".concat(o, "?").concat(i) : o, d = m.a.createElement(Mn.a, {
						"aria-label": s.searchQuery,
						className: Object(g.a)(Lr.a.listItem, Lr.a.mTrending, Ua.a.item, Ua.a.trending, e, {
							[Lr.a.mFocused]: !(!t || t.section !== _r.c.trending || s.searchQuery !== t.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: "trending-".concat(s.searchQuery),
						role: "link",
						tabIndex: -1,
						to: c || ""
					}, m.a.createElement("div", {
						className: Ua.a.trendingContent
					}, a && m.a.createElement("div", {
						className: Ua.a.promoted
					}, n.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), m.a.createElement("div", null, m.a.createElement(ea, {
						className: Object(g.a)(Lr.a.listItemIcon, Lr.a.mTrending, Ua.a.icon, Ua.a.trending)
					}), m.a.createElement("span", null, m.a.createElement(Ur.a, {
						className: Object(g.a)(Lr.a.listItemText, Lr.a.mTrending, Ua.a.text, Ua.a.trending),
						redditStyle: !0,
						size: Ur.b.Small
					}, s.searchQuery)), s.post && m.a.createElement("div", {
						className: Lr.a.postTitle
					}, s.post.title)), s.subredditInfo && m.a.createElement(Hr.a, {
						className: Object(g.a)(Ua.a.relatedSubredditMetaData, Lr.a.listItemSubtext, {
							[Lr.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: n.fbt._("{subreddit name} and more", [n.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(qr.a)(s.post) && m.a.createElement(Dr.a, {
						post: s.post,
						removeLink: !0,
						usePreview: a
					}));
					return a ? m.a.createElement(Gr.a, {
						post: s.post
					}, d) : d
				}
			}
			var Qr = s("./src/reddit/components/Flair/index.tsx");
			class zr extends m.a.Component {
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
						item: a
					} = e;
					return m.a.createElement(Mn.a, {
						"aria-label": a.searchQuery,
						className: Object(g.a)(Lr.a.listItem, Lr.a.mTypeahead, Ua.a.item, t, {
							[Lr.a.mFocused]: !(!s || s.searchQuery !== a.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: a.searchQuery,
						role: "link",
						tabIndex: -1,
						to: "/".concat(a.isProfile ? a.searchQuery.replace("u/", "user/") : a.searchQuery)
					}, a.displayInfo && a.displayInfo.iconUrl ? m.a.createElement("div", {
						className: Lr.a.subredditIcon,
						style: {
							backgroundImage: "url('".concat(a.displayInfo.iconUrl, "')")
						}
					}) : m.a.createElement(Ir.a, {
						className: Lr.a.planetIcon
					}), m.a.createElement("div", null, a.displayInfo && a.displayInfo.subredditOrProfileName && m.a.createElement("div", {
						className: Object(g.a)(Lr.a.listItemText, Lr.a.mTypeahead, Ua.a.text)
					}, a.displayInfo.subredditOrProfileName), m.a.createElement("div", null, a.displayInfo && null != a.displayInfo.subscribers && m.a.createElement("div", {
						className: Object(g.a)(Lr.a.listItemSubtext, Ua.a.subText)
					}, n.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [n.fbt._plural(a.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), a.displayInfo && a.displayInfo.isNSFW && m.a.createElement(Qr.b, {
						flair: {
							type: Bt.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var Zr = s("./src/reddit/constants/zIndex.ts"),
				Kr = s("./src/reddit/controls/Dropdown/index.tsx");
			const {
				fbt: Yr
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Jr = "SearchDropdown", Xr = 5, $r = Object(jr.a)(Kr.a);

			function eo(e) {
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
				e.isFixed && (o.zIndex = Zr.h);
				const i = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending;
				return m.a.createElement($r, {
					className: Object(g.a)(Lr.a.dropdown, ra.a.listContainer),
					isFixed: t,
					isOpen: e.isOpen,
					isOverlay: s,
					tooltipId: Jr,
					noFocus: !0,
					style: o
				}, e.typeaheadSuggestions.map(t => m.a.createElement(zr, {
					focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
					item: t,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onSendDropdownClickEvent: e.onSendDropdownClickEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					fireAdPixelsOfType: e.fireAdPixelsOfType
				})), i && e.recentSearches.map(t => m.a.createElement(Fr, {
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
					className: Object(g.a)(Ua.a.title, Lr.a.listItemTitle, {
						[Lr.a.mWithBorder]: !!e.recentSearches.length
					})
				}, Yr._("Trending today", null, {
					hk: "3nAMpY"
				})), (e.isTypeaheadPending || e.isTrendingPending) && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: Object(g.a)(Lr.a.loadingItem, Va.a.item)
				}), m.a.createElement("div", {
					className: Object(g.a)(Lr.a.loadingItem, Va.a.item)
				}), m.a.createElement("div", {
					className: Object(g.a)(Lr.a.loadingItem, Va.a.item)
				}), m.a.createElement("div", {
					className: Object(g.a)(Lr.a.loadingItem, Va.a.item)
				}), m.a.createElement("div", {
					className: Object(g.a)(Lr.a.loadingItem, Va.a.item)
				})), i && e.isInTrendingExperiment && e.trendingItems.slice(0, Xr).map(t => m.a.createElement(Vr, {
					key: t.id,
					focusedItem: e.itemList[e.focusedItemIndex],
					fireAdPixelsOfType: e.fireAdPixelsOfType,
					onSendDropdownClickEvent: e.onSendDropdownClickEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					trendingItem: t
				})))
			}
			var to = s("./src/reddit/contexts/ApiContext.tsx"),
				so = s("./src/lib/makeApiRequest/index.ts"),
				no = s("./src/lib/omitHeaders/index.ts"),
				ao = s("./src/reddit/constants/headers.ts");
			const ro = (e, t) => Object(so.a)(Object(no.a)(e, [ao.a]), {
				endpoint: "".concat(e.apiUrl, "/api/subreddit_autocomplete_v2.json"),
				method: f.ab.GET,
				data: {
					query: t
				}
			});
			var oo = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				io = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const co = e => {
				const t = [],
					s = {};
				return e.forEach(e => {
					const n = e.data,
						a = e.kind;
					a === f.vb.Subreddit ? (t.push(n.name), s[n.name] = Object(io.a)(n)) : a === f.vb.Account && (t.push(n.subreddit.name), s[n.subreddit.name] = Object(oo.a)(n.subreddit, n.name))
				}), {
					data: s,
					order: t
				}
			};
			var lo = s("./src/reddit/helpers/isArrayEqual.ts"),
				mo = s("./src/reddit/helpers/trackers/searchResults.ts"),
				uo = s("./src/reddit/selectors/experiments/trending.ts"),
				po = s("./src/reddit/helpers/chooseVariant/index.ts");
			const ho = e => Object(Vt.E)(e) || fs.sc.Treatment1 === Object(po.c)(e, {
				experimentEligibilitySelector: po.a,
				experimentName: fs.pc
			});
			var bo = s("./src/reddit/selectors/searchResults.ts"),
				go = s("./src/reddit/selectors/tooltip.ts"),
				fo = s("./src/reddit/selectors/trending.ts"),
				Co = s("./src/reddit/controls/Search/index.m.less"),
				vo = s.n(Co);
			const yo = Object(Cs.t)({
					searchQuery: Cs.V,
					pageLayer: e => e
				}),
				Po = (e, t, s) => e(e => Object.assign({}, Object(mo.c)(e), {
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(Hs.c)(Hs.a.SearchResults),
					actionInfo: Y.actionInfo(e),
					search: Y.search(e, s)
				})),
				xo = Object(u.b)(() => Object(b.c)({
					currentSubredditName: ns.e,
					currentUser: Vt.i,
					dropdownIsOpen: Object(go.b)(Jr),
					typeaheadIdsByQuery: bo.c,
					isInTrendingExperiment: uo.a,
					isInTypeaheadExperiment: ho,
					isLoggedIn: Vt.H,
					isSubredditSearchAllowed: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(Cs.L)(s)
					},
					language: Vt.Q,
					multireddit: Cs.d,
					routeName: ns.q,
					subreddit: Cs.q,
					trendingItems: fo.a,
					typeaheadSuggestions: bo.i
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(Er.b)()),
					fireAdPixelsOfType: (t, s) => e(Object(xr.B)(t, s)),
					onChange: t => e(Object(Or.j)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(Or.j)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(h.b)(t)),
					onSearch: (t, s, n) => {
						e(Object(h.b)(Object(gr.c)({
							pathname: t,
							search: s,
							state: {
								fromPage: n
							}
						})))
					},
					onToggleDropdown: () => e(Object(Sr.h)({
						tooltipId: Jr
					})),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(Or.i)(t))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					onSearch: (n, a) => {
						n.preventDefault();
						const {
							currentUser: r = null
						} = e, o = Mr(e.subreddit, e.multireddit, r, a, s.searchOptions, e.isSubredditSearchAllowed);
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
						Object(Hs.c)(Hs.a.SearchResults) || Object(Hs.d)(Hs.a.SearchResults);
						const e = s.searchOptions || Object(Pr.c)({});
						Po(s.sendEvent, Y.OriginElement.SearchBar, e)
					}
				}));
			class Oo extends m.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await ro(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = co(e.body.data.children);
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
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(cs.E)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(cs.Z)(Object.assign({}, e, {
								section: _r.c.recent
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
					}, this.onFetchTypeaheadSuggestions = Cr()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery) {
							let t = Object.assign({}, _r.a);
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = yr()()), this.props.typeaheadSuggestions && t.isTypeaheadSuggestion ? this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, Y.StructureType.Search, t.isProfile ? Y.SearchDropdownNouns.TypeaheadProfile : Y.SearchDropdownNouns.TypeaheadSubreddit) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, Y.StructureType.Search, Y.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									s = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									n = !!this.props.subreddit && this.props.subreddit.isNSFW,
									a = _r.b.text;
								t = {
									id: yr()(),
									searchQuery: this.state.searchQuery,
									type: a,
									section: _r.c.recent,
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
						this.props.sendEvent(Object(mo.m)(n, a))
					}, this.onSendDropdownViewEvent = (e, t, s, n) => {
						const a = {
							displayQuery: s,
							rawQuery: n || s,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(mo.n)(e, a))
					}, this.onKeyDown = e => {
						if (e.key === Ya.b.Escape && this.close(), e.key === Ya.b.Tab && this.close(), e.key === Ya.b.ArrowDown) {
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
						if (e.key === Ya.b.ArrowUp) {
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
							const e = Object(cs.x)(this.props.currentUser.id);
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
					}, this.onFormSubmit = e => {
						e.preventDefault(), this.onSearch(e);
						const t = this.props.searchOptions || Object(Pr.c)({});
						t.q || (t.q = this.state.searchQuery), Po(this.props.sendEvent, "full_search_button", t)
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
					const t = Object(lo.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						s = Object(lo.a)(e.trendingItems, this.props.trendingItems);
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
					return m.a.createElement("div", {
						className: Object(g.a)(vo.a.relativeWrapper, ra.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: Jr,
						ref: this.setContainerRef
					}, m.a.createElement("label", {
						className: vo.a.iconContainer,
						htmlFor: "header-search-bar"
					}, m.a.createElement(Tr.a, {
						className: vo.a.icon
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
						className: vo.a.input,
						onChange: this.onChange,
						onClick: this.toggleDropdownAndGetTrending,
						onKeyDown: this.onKeyDown,
						key: e.searchQuery,
						placeholder: n.fbt._("Search", null, {
							hk: "44xF6n"
						}),
						type: "search",
						value: this.state.searchQuery
					})), m.a.createElement(eo, {
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
			var Eo = Object(ce.c)(yo(Object(to.b)(xo(Oo)))),
				So = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				jo = s("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				wo = s("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				ko = s.n(wo);
			var _o, Mo = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(g.a)(ko.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": n.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: ko.a.HomeLink,
						href: M.a.redditUrl
					}, m.a.createElement(So.a, {
						className: ko.a.Snoo
					}), m.a.createElement(jo.a, {
						className: ko.a.Wordmark,
						color: "inherit"
					})))
				},
				Io = s("./src/reddit/components/Header/QuickLinks/index.m.less"),
				No = s.n(Io);
			! function(e) {
				e.All = "header-quicklinks-all", e.Popular = "header-quicklinks-popular", e.News = "header-quicklinks-news", e.Rpan = "header-quicklinks-rpan"
			}(_o || (_o = {}));
			const To = Object(b.c)({
				isLoggedIn: e => !!e.user.account,
				showRPANlogo: da.a
			});
			var Ro = Object(u.b)(To, e => ({
					openStream: () => e(Object(fa.a)(B.c[B.b.Rpan])),
					toggleTooltip: t => e(Object(Sr.h)({
						tooltipId: t
					}))
				}))(Object(ce.c)((function(e) {
					return m.a.createElement("div", {
						className: Object(g.a)(No.a.container, e.className)
					}, m.a.createElement("div", {
						className: No.a.row
					}, m.a.createElement(Mn.a, {
						className: No.a.icon,
						id: _o.Popular,
						to: e.isLoggedIn ? B.c[B.b.Popular] : B.c[B.b.Home],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "popular"
						})),
						onMouseEnter: () => e.toggleTooltip(_o.Popular),
						onMouseLeave: () => e.toggleTooltip(_o.Popular)
					}, m.a.createElement(ea, null), m.a.createElement(wr.c, {
						caretOnTop: !0,
						tooltipId: _o.Popular,
						text: n.fbt._("Popular", null, {
							hk: "1Kx4va"
						})
					})), m.a.createElement(Mn.a, {
						className: No.a.icon,
						id: _o.All,
						to: B.c[B.b.All],
						onClick: () => e.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
							source: "nav",
							action: "click",
							noun: "all"
						})),
						onMouseEnter: () => e.toggleTooltip(_o.All),
						onMouseLeave: () => e.toggleTooltip(_o.All)
					}, m.a.createElement(Hn.a, null), m.a.createElement(wr.c, {
						caretOnTop: !0,
						tooltipId: _o.All,
						text: n.fbt._("All", null, {
							hk: "1Rk1yU"
						})
					})), e.showRPANlogo && m.a.createElement(Mn.a, {
						className: No.a.icon,
						id: _o.Rpan,
						to: B.c[B.b.Rpan],
						onClick: t => {
							(t => {
								t.stopPropagation(), t.preventDefault(), e.openStream()
							})(t), e.sendEvent(e => Object.assign({}, Object(Y.defaults)(e), {
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						},
						onMouseEnter: () => e.toggleTooltip(_o.Rpan),
						onMouseLeave: () => e.toggleTooltip(_o.Rpan)
					}, m.a.createElement(na.a, null), m.a.createElement(wr.c, {
						caretOnTop: !0,
						tooltipId: _o.Rpan,
						text: n.fbt._("Reddit Public Access Network", null, {
							hk: "38uXOo"
						})
					}))))
				}))),
				Lo = s("./src/reddit/actions/login.ts"),
				Ao = s("./src/reddit/helpers/trackers/authControls.ts"),
				Fo = s("./src/lib/matchRoute/index.ts"),
				Do = s("./src/chat/helpers/dom.ts"),
				Uo = s("./src/reddit/actions/changeUsername.ts"),
				Go = s("./src/reddit/actions/chat/toggle.ts"),
				Bo = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				Ho = s("./src/reddit/actions/postCreation/general.ts"),
				qo = s("./src/reddit/actions/users.ts"),
				Wo = s("./src/reddit/components/Settings/modalIds.ts"),
				Vo = s("./src/reddit/components/BlockNavigation/index.tsx"),
				Qo = s("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				zo = s("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var Zo = Object(Ye.a)({
					getComponent: () => Object(Ct.a)(() => s.e("EmailVerificationModals").then(s.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Ko = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Yo = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				Jo = s("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				Xo = s.n(Jo);
			class $o extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(Yo.e)(Yo.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(Yo.c)(Yo.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(Yo.e)(Yo.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					$o.shouldSendViewEvent && ($o.shouldSendViewEvent = !1, this.props.sendEvent(Object(Yo.g)(Yo.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: Xo.a.container
					}, m.a.createElement("div", {
						className: Xo.a.topLine
					}), m.a.createElement("button", {
						className: Xo.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(V.a, {
						className: Xo.a.closeIcon
					})), m.a.createElement("h5", {
						className: Xo.a.title
					}, n.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), m.a.createElement("p", {
						className: Xo.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: Xo.a.description
					}, n.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), m.a.createElement("div", {
						className: Xo.a.buttonWrapper
					}, m.a.createElement(et.i, {
						className: Xo.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen
					}, n.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(et.f, {
						className: Object(g.a)(Xo.a.commonBtn, Xo.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick
					}, n.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			$o.shouldSendViewEvent = !0;
			const ei = Object(Ko.a)($o, [za.a.Click, za.a.Keydown, za.a.Resize]);
			var ti = Object(ce.c)(ei),
				si = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				ni = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts")),
				ai = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				ri = s("./src/reddit/controls/LoadingIcon/index.tsx");
			let oi;
			const ii = () => oi,
				ci = () => oi = yr()(),
				di = "gold_top_nav",
				li = e => t => Object.assign({
					source: "gold_top_nav",
					action: "click",
					noun: e
				}, (e => ({
					screen: Y.screen(e),
					profile: Y.profile(e),
					subreddit: Y.subreddit(e)
				}))(t)),
				mi = e => t => Object.assign({
					source: di,
					action: "click",
					noun: "coins_".concat(e),
					correlationId: ii()
				}, Y.defaults(t)),
				ui = () => e => Object.assign({
					source: di,
					action: "click",
					noun: "premium",
					correlationId: ii()
				}, Y.defaults(e)),
				pi = () => e => Object.assign({
					source: di,
					action: "view",
					noun: "dropdown",
					correlationId: ii()
				}, Y.defaults(e));
			var hi = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				bi = s("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				gi = s.n(bi);
			var fi = e => {
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
					} = e, l = r ? et.c : et.f;
					return m.a.createElement("div", {
						className: Object(g.a)(t, gi.a.CompactCoinPurchaseListItem)
					}, m.a.createElement("div", {
						className: gi.a.productSection
					}, m.a.createElement("span", {
						className: gi.a.primaryText
					}, i), m.a.createElement("span", {
						className: Object(g.a)(gi.a.subtext, {
							[gi.a.crossout]: d
						})
					}, Array.isArray(c) ? c.map((e, t) => m.a.createElement("p", {
						key: t
					}, e)) : c)), m.a.createElement("div", {
						className: gi.a.priceSection
					}, m.a.createElement(l, {
						className: Object(g.a)(gi.a.button, {
							[gi.a.goldStyle]: r
						}),
						redditStyle: !0,
						onClick: o
					}, a), m.a.createElement("span", {
						className: Object(g.a)(gi.a.buttonSubtext, {
							[gi.a.crossout]: n
						})
					}, s)))
				},
				Ci = s("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				vi = s.n(Ci);
			const yi = Object(b.c)({
				coinPackages: hi.b,
				isPremiumSubscriber: Vt.q,
				premiumPackages: hi.e,
				purchaseCatalogError: hi.f,
				purchaseCatalogPending: hi.g
			});
			class Pi extends m.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: s,
							sendEvent: n
						} = this.props;
						t && t(), n(mi(e.coins)), s(e)
					}, this.handleClickBuyPremium = () => {
						const {
							onClick: e,
							onClickPremiumPackage: t,
							sendEvent: s
						} = this.props;
						e && e(), s(ui()), t()
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
						className: vi.a.loaderContainer
					}, m.a.createElement(ri.a, {
						sizePx: 80
					}))) : s || !t.length ? m.a.createElement("div", {
						className: e
					}, m.a.createElement("div", {
						className: vi.a.errorContainer
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
						return m.a.createElement(fi, {
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
			var xi = Object(u.b)(yi, e => ({
					onClickCoinPackage: t => e(Object(ni.f)({
						packageId: t.mobileId
					})),
					onClickPremiumPackage: () => e(Object(ai.f)(ii())),
					requestPurchaseCatalog: () => e(Object(si.a)())
				}))(Object(ce.c)(Pi)),
				Oi = s("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				Ei = s.n(Oi);
			const {
				fbt: Si
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ji = Object(jr.a)(Kr.a);
			class wi extends m.a.Component {
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
					e(pi())
				}
				renderDefaultHeader() {
					return m.a.createElement("div", {
						className: Ei.a.header
					}, m.a.createElement("span", {
						className: Ei.a.headerText
					}, Si._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), m.a.createElement(Mn.a, {
						className: Ei.a.headerLink,
						to: "/coins"
					}, Si._("What are Coins?", null, {
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
						className: Object(g.a)(Ei.a.header, Ei.a.activeSale)
					}, s && m.a.createElement("img", {
						className: Object(g.a)(Ei.a.saleHeaderImage, Ei.a.activeSale),
						src: s
					}), m.a.createElement("span", {
						className: Ei.a.headerText
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
					return m.a.createElement(ji, {
						className: Object(g.a)(t, Ei.a.CoinPurchaseDropdown, {
							[Ei.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: s,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: a
					}, e ? this.renderSaleHeader() : this.renderDefaultHeader(), m.a.createElement(xi, {
						className: Ei.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			var ki = Object(ce.c)(wi),
				_i = s("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				Mi = s("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			var Ii = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				Ni = s("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				Ti = s.n(Ni);
			const Ri = "COIN_PURCHASE_DROPDOWN_ID",
				Li = Object(b.c)({
					activeSaleConfig: hi.a,
					activeTooltipId: go.a,
					coinPackages: hi.b,
					coinPurchaseDropdownIsOpen: e => Object(go.b)(Ri)(e),
					coinPurchaseModalIsOpen: Ii.a,
					premiumPurchaseModalIsOpen: Ii.n,
					purchaseCatalogPending: hi.g
				});
			class Ai extends m.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							coinPurchaseDropdownIsOpen: s,
							sendEvent: n,
							toggleTooltip: a
						} = this.props;
						s || (ci(), Object(_i.b)(), Object(Mi.b)(), n(li("get_coins_cta"))), a(t)
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
						className: Object(g.a)(t, Ti.a.ctaContainer, {
							[Ti.a.activeSale]: !!e
						}),
						id: Ri,
						onClick: this.handleClick
					}, m.a.createElement("div", {
						className: Object(g.a)(Ti.a.ctaContent, {
							[Ti.a.activeSale]: !!e
						})
					}, m.a.createElement(Wn.a, {
						className: Object(g.a)(Ti.a.icon, {
							[Ti.a.activeSale]: !!e
						})
					}), m.a.createElement("span", {
						className: Ti.a.text
					}, i)), m.a.createElement(ki, {
						activeSaleConfig: e,
						isOpen: a,
						onCloseTooltip: s,
						tooltipId: Ri
					}), r && m.a.createElement(_i.a, {
						isCompletePaypal: !1
					}), o && m.a.createElement(Mi.a, null))
				}
			}
			var Fi = Object(u.b)(Li, (e, t) => ({
					closeTooltip: () => e(Object(Sr.i)()),
					requestPurchaseCatalog: () => e(Object(si.a)()),
					toggleTooltip: t => {
						e(t === Ri ? Object(Sr.i)() : Object(Sr.f)({
							tooltipId: Ri
						}))
					}
				}))(Object(ce.c)(Ai)),
				Di = s("./src/reddit/components/HeaderIconContainer/index.m.less"),
				Ui = s.n(Di);

			function Gi() {
				return (Gi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Bi = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Hi = _.a.button("Button", Ui.a),
				qi = _.a.div("Container", Ui.a);
			var Wi = e => {
					const {
						children: t,
						isOpen: s
					} = e, n = Bi(e, ["children", "isOpen"]);
					return m.a.createElement(Hi, Gi({}, n, {
						id: e.id,
						onClick: e.onClick
					}), m.a.createElement(qi, {
						className: Object(g.a)({
							[Ui.a.isOpen]: s
						})
					}, t))
				},
				Vi = s("./src/chat/helpers/unreadCount.ts"),
				Qi = s("./src/chat/models/Promo/index.ts"),
				zi = s("./src/lib/prettyPrintNumber/index.ts"),
				Zi = s("./src/reddit/components/HeaderUserActions/index.m.less"),
				Ki = s.n(Zi);
			var Yi = e => {
					let {
						className: t,
						isActive: s,
						unreadCount: n
					} = e;
					return s ? m.a.createElement("span", {
						className: Object(g.a)(t, Ki.a.counter, {
							[Ki.a.isHighlighted]: s && n <= 0
						})
					}, n > 0 && Object(zi.b)(n)) : null
				},
				Ji = s("./src/reddit/helpers/trackers/chat.ts"),
				Xi = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				$i = s("./src/reddit/selectors/chat.ts");
			const ec = Object(b.c)({
				promos: $i.b,
				unreadCount: $i.d
			});
			class tc extends l.Component {
				componentDidMount() {
					this.props.promos[Qi.a.SubredditChatFtux] && this.props.sendEvent(Object(Ji.j)())
				}
				render() {
					const {
						promos: e,
						unreadCount: t
					} = this.props, {
						count: s,
						unread: n
					} = Object(Vi.a)(t, e);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Yi, {
						isActive: n,
						unreadCount: s
					}), m.a.createElement(Xi.a, {
						className: Object(g.a)(Ki.a.chatIcon, {
							[Ki.a.isActive]: n
						})
					}))
				}
			}
			var sc = Object(u.b)(ec)(Object(ce.c)(tc)),
				nc = s("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				ac = s.n(nc);
			const {
				fbt: rc
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var oc = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: ac.a.container
				}, m.a.createElement("p", {
					className: ac.a.title
				}, rc._("New User Settings", null, {
					hk: "1Sziu9"
				})), m.a.createElement("h5", {
					className: ac.a.subtitle
				}, rc._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), m.a.createElement("p", {
					className: ac.a.description
				}, rc._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), m.a.createElement(et.i, {
					className: ac.a.dismissBtn,
					onClick: t
				}, rc._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var ic = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Yi, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(Vn.a, {
					className: Object(g.a)(Ki.a.envelopeIcon, {
						[Ki.a.isUnread]: !!e.unreadCount
					})
				})),
				cc = s("./src/reddit/actions/alpha.ts"),
				dc = s("./src/reddit/actions/modMode.ts"),
				lc = s("./src/reddit/actions/profile/index.ts"),
				mc = s("./src/reddit/constants/elementClassNames.ts"),
				uc = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				pc = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				hc = s("./src/reddit/helpers/trackers/modTools.ts");
			const bc = e => ({
				screen: Y.screen(e),
				profile: Y.profile(e),
				subreddit: Y.subreddit(e)
			});
			var gc = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				fc = s("./src/reddit/icons/fonts/Premium/index.tsx"),
				Cc = s("./src/reddit/icons/svgs/Help/index.tsx"),
				vc = s("./src/reddit/icons/svgs/KarmaGray/index.m.less"),
				yc = s.n(vc);
			var Pc = e => m.a.createElement("svg", {
					className: Object(g.a)(yc.a.karma, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("path", {
					d: "M3.37,2.75a5.9,5.9,0,0,1,5.49,3.7.62.62,0,0,1-.29.79A3.16,3.16,0,0,0,7.24,8.57a.63.63,0,0,1-.79.29,5.89,5.89,0,0,1-3.7-5.49A.62.62,0,0,1,3.37,2.75Zm8.06,4.49a.63.63,0,0,1-.29-.79,5.89,5.89,0,0,1,5.49-3.7.61.61,0,0,1,.62.6v0a5.89,5.89,0,0,1-3.7,5.49.62.62,0,0,1-.79-.29A3.16,3.16,0,0,0,11.43,7.24Zm2.12,3.9a5.89,5.89,0,0,1,3.7,5.49.62.62,0,0,1-.62.62h0a5.89,5.89,0,0,1-5.49-3.7.63.63,0,0,1,.29-.79,3.16,3.16,0,0,0,1.33-1.33A.62.62,0,0,1,13.55,11.14Zm-5,1.62a.62.62,0,0,1,.29.79,5.89,5.89,0,0,1-5.49,3.7.62.62,0,0,1-.62-.62h0a5.9,5.9,0,0,1,3.7-5.49.62.62,0,0,1,.79.29,3.1,3.1,0,0,0,1.35,1.33ZM10,5.93A7.23,7.23,0,0,0,7.51,2.82,5,5,0,0,1,9.68.09a.61.61,0,0,1,.64,0,5,5,0,0,1,2.17,2.73A7.23,7.23,0,0,0,10,5.93Zm9.91,3.75a.61.61,0,0,1,0,.64,5,5,0,0,1-2.73,2.17A7.23,7.23,0,0,0,14.07,10a7.36,7.36,0,0,0,3.11-2.49A5,5,0,0,1,19.91,9.68ZM10,14.07a7.18,7.18,0,0,0,2.5,3.11,5,5,0,0,1-2.18,2.73.61.61,0,0,1-.64,0,5,5,0,0,1-2.17-2.73A7.23,7.23,0,0,0,10,14.07ZM5.93,10a7.23,7.23,0,0,0-3.11,2.49A5,5,0,0,1,.09,10.32a.61.61,0,0,1,0-.64A5,5,0,0,1,2.82,7.51,7.23,7.23,0,0,0,5.93,10Z"
				})),
				xc = e => m.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("g", {
					fill: "inherit"
				}, m.a.createElement("path", {
					d: "M15,2 L5,2 C4.447,2 4,2.447 4,3 L4,9 L9.586,9 L8.293,7.707 C7.902,7.316 7.902,6.684 8.293,6.293 C8.684,5.902 9.316,5.902 9.707,6.293 L12.707,9.293 C13.098,9.684 13.098,10.316 12.707,10.707 L9.707,13.707 C9.512,13.902 9.256,14 9,14 C8.744,14 8.488,13.902 8.293,13.707 C7.902,13.316 7.902,12.684 8.293,12.293 L9.586,11 L4,11 L4,17 C4,17.553 4.447,18 5,18 L15,18 C15.553,18 16,17.553 16,17 L16,3 C16,2.447 15.553,2 15,2"
				})));
			var Oc = e => m.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, m.a.createElement("path", {
					d: "M10,8 C8.619,8 7.5,9.5 7.5,9.5 C7.5,9.5 8.619,11 10,11 C11.381,11 12.5,9.5 12.5,9.5 C12.5,9.5 11.381,8 10,8 M15.1338,14 L4.8658,14 C4.4818,14 4.2398,13.583 4.4328,13.25 L9.5678,4.357 C9.7598,4.024 10.2398,4.024 10.4328,4.357 L15.5678,13.25 C15.7598,13.583 15.5188,14 15.1338,14 M17.2748,3.038 L10.2748,1.038 C10.0948,0.987 9.9048,0.987 9.7258,1.038 L2.7258,3.038 C2.2958,3.161 1.9998,3.554 1.9998,4 L1.9998,11 C1.9998,16.688 9.4098,18.871 9.7258,18.962 C9.8158,18.987 9.9068,19 9.9998,19 C10.0928,19 10.1848,18.987 10.2748,18.962 C10.5898,18.871 17.9998,16.688 17.9998,11 L17.9998,4 C17.9998,3.554 17.7038,3.161 17.2748,3.038"
				})),
				Ec = e => m.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("g", {
					fill: "inherit"
				}, m.a.createElement("path", {
					d: "M15,15.5 L5,15.5 C4.724,15.5 4.5,15.276 4.5,15 C4.5,12.755 6.326,10.929 8.571,10.929 L11.429,10.929 C13.674,10.929 15.5,12.755 15.5,15 C15.5,15.276 15.276,15.5 15,15.5 M10,4.5 C11.405,4.5 12.547,5.643 12.547,7.048 C12.547,8.452 11.405,9.595 10,9.595 C8.595,9.595 7.453,8.452 7.453,7.048 C7.453,5.643 8.595,4.5 10,4.5 M16,2 L4,2 C2.897,2 2,2.897 2,4 L2,16 C2,17.103 2.897,18 4,18 L16,18 C17.103,18 18,17.103 18,16 L18,4 C18,2.897 17.103,2 16,2"
				}))),
				Sc = e => m.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, m.a.createElement("g", {
					fill: "inherit"
				}, m.a.createElement("path", {
					d: "M15.992 14.898A5.014 5.014 0 0 1 12 10a5.014 5.014 0 0 1 3.992-4.899.998.998 0 0 0 .343-1.819A7.965 7.965 0 0 0 12 2c-4.41 0-8 3.588-8 8 0 4.411 3.59 8 8 8a7.966 7.966 0 0 0 4.335-1.283 1 1 0 0 0-.343-1.819"
				}))),
				jc = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				wc = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				kc = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				_c = e => m.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, m.a.createElement("g", {
					fill: "inherit"
				}, m.a.createElement("path", {
					d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
				}))),
				Mc = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				Ic = s("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				Nc = s.n(Ic);
			const Tc = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				Rc = _.a.wrapped(Kr.a, "Dropdown", Nc.a),
				Lc = Object(jr.a)(Rc),
				Ac = e => m.a.createElement(pc.a, {
					className: Nc.a.button,
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: Nc.a.buttonText
				}, e.displayText), m.a.createElement(uc.a, {
					className: Nc.a.toggleSwitch,
					"data-redditstyle": !0,
					on: e.isEnabled
				})),
				Fc = Object(u.b)(() => Object(b.c)({
					isModModeEnabled: rs.t,
					isOpen: Object(go.b)("USER_DROPDOWN_ID"),
					nightmode: Vt.S,
					url: ns.r
				}), (e, t) => {
					let {
						user: s
					} = t;
					return {
						toggleNightmode: t => e(Object(T.y)(t)),
						onOptIntoRedesign: () => e(Object(cc.a)()),
						onOptOutOfRedesign: () => {
							"new.reddit.com" !== window.location.host ? (Ze.a.get("rseor3") && Ze.a.remove("rseor3", {
								domain: M.a.cookieDomain
							}), e(Object(cc.b)(!0))) : window.location.host = "old.reddit.com"
						},
						requestAwardKarma: () => {
							s && e(Object(lc.e)(Object(Ht.e)(s)))
						},
						dispatchOpenLoginModal: () => e(Object(Lo.g)()),
						logoutUser: () => e(Object(qo.p)()),
						toggleModMode: () => e(Object(dc.b)())
					}
				});
			var Dc = Object(Cs.t)({
					pageLayer: e => e
				})(Fc(Object(ce.c)(e => {
					const {
						logoutUser: t,
						dispatchOpenLoginModal: s,
						isModModeEnabled: a,
						nightmode: r,
						requestAwardKarma: o,
						toggleModMode: i,
						user: c
					} = e, d = c && c.id;
					Object(l.useEffect)(() => {
						o()
					}, [d]);
					const u = Object(pc.b)(kc.a, n.fbt._("User Settings", null, {
							hk: "46J4vT"
						}), !1),
						p = Object(pc.b)(Cc.a, n.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}), !0),
						h = Object(pc.b)(jc.a, n.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}), !0),
						b = Object(pc.b)(xc, n.fbt._("Log In / Sign Up", null, {
							hk: "4xbfvS"
						})),
						f = Object(pc.b)(xc, n.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})),
						C = Object(pc.b)(_c, n.fbt._("Opt In to New Reddit", null, {
							hk: "4jiTxA"
						}), !1),
						v = (e => {
							const t = e && e.coins || 0;
							return n.fbt._({
								"*": "{number of coins} coins",
								_1: "1 coin"
							}, [n.fbt._plural(t, "number of coins")], {
								hk: "qmnnm"
							})
						})(c),
						y = Object(pc.b)(Wn.a, n.fbt._("Reddit Coins", null, {
							hk: "3jj6Cb"
						}), !1, v),
						P = Object(pc.b)(sa.a, n.fbt._("Reddit Premium", null, {
							hk: "3FNqVS"
						}), !1);
					return m.a.createElement("div", {
						className: Object(g.a)(Nc.a.container, mc.e)
					}, m.a.createElement(Mc.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(g.a)(e.className, Nc.a.inlineButton, {
							[Nc.a.dropdownOpen]: e.isOpen
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("user")
						}
					}, m.a.createElement("span", {
						className: Nc.a.accountDisplayText
					}, (e => e ? m.a.createElement("span", {
						className: Object(g.a)(Nc.a.accountWrapper, Nc.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && m.a.createElement(Bn.a, {
						className: Nc.a.imgIcon
					}), m.a.createElement("span", {
						className: Nc.a.accountDetails
					}, m.a.createElement("span", {
						className: Nc.a.username
					}, e.displayText, e.isGold && m.a.createElement(fc.a, {
						className: Nc.a.premiumFontIcon,
						title: n.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						})
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Nc.a.accountKarma
					}, m.a.createElement(Pc, null), m.a.createElement("span", null, (e => {
						const t = e.totalKarma || e.postKarma + e.commentKarma,
							s = Object(zi.b)(t);
						return n.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [n.fbt._plural(t, "karma count", s)], {
							hk: "ndlXe"
						})
					})(e))), !!e.coins && m.a.createElement("span", {
						className: Nc.a.accountCoins
					}, m.a.createElement(gc.a, {
						className: Nc.a.coinFontIcon
					}), m.a.createElement("span", null, (e => Object(zi.b)(e.coins || 0))(e)))))) : m.a.createElement("span", {
						className: Object(g.a)(Nc.a.accountWrapper, Nc.a.isLoggedOut)
					}, m.a.createElement(wc.a, {
						className: Nc.a.myProfileIcon
					})))(e.user), m.a.createElement(Tn.b, {
						className: Nc.a.dropdownTriangle
					})), m.a.createElement(br.a, null, n.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(Lc, {
						isFixed: !0,
						isOpen: e.isOpen,
						tooltipId: "USER_DROPDOWN_ID"
					}, c && m.a.createElement(l.Fragment, null, m.a.createElement("h3", {
						className: Nc.a.sectionHeader,
						role: "heading"
					}, n.fbt._("My Stuff", null, {
						hk: "47vhMb"
					})), (e => {
						const t = n.fbt._("My Profile", null, {
								hk: "4AoYxT"
							}),
							s = Object(pc.b)(Ec, t, !1);
						return m.a.createElement(s, {
							href: e.url
						})
					})(c), m.a.createElement(u, {
						href: "/settings"
					})), m.a.createElement("h3", {
						className: Nc.a.sectionHeader,
						role: "heading"
					}, n.fbt._("View Options", null, {
						hk: "3bZPKB"
					})), c && c.isMod && m.a.createElement(Ac, {
						displayText: n.fbt._("Mod Mode", null, {
							hk: "3Rb4sj"
						}),
						isEnabled: a,
						onClick: () => {
							e.sendEvent(Object(hc.h)(!a)), i()
						}
					}, m.a.createElement(Oc, {
						className: Nc.a.modModeIcon
					})), m.a.createElement(Ac, {
						displayText: "Night Mode",
						isEnabled: r,
						onClick: () => {
							e.sendEvent((e => t => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: e ? "night_mode_off" : "night_mode_on"
							}, bc(t)))(r)), e.toggleNightmode(!r)
						}
					}, m.a.createElement(Sc, {
						className: Nc.a.nightIcon
					})), m.a.createElement("h3", {
						className: Nc.a.sectionHeader,
						role: "heading"
					}, n.fbt._("More Stuff", null, {
						hk: "4Gad8T"
					})), m.a.createElement(l.Fragment, null, m.a.createElement(y, {
						href: "/coins",
						onClick: () => {
							Ja.f(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "coins",
								correlationId: Ja.e()
							}, bc(e)))())
						}
					}), m.a.createElement(P, {
						href: "/premium",
						onClick: () => {
							Xa.g(), e.sendEvent((() => e => Object.assign({
								source: "user_dropdown",
								action: "click",
								noun: "premium",
								correlationId: Xa.f()
							}, bc(e)))())
						}
					})), m.a.createElement(p, {
						href: "https://www.reddithelp.com"
					}), c && m.a.createElement(h, {
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
					}), !Tc && c && m.a.createElement(C, {
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
					}), m.a.createElement("div", {
						className: Nc.a.divider
					}), c ? m.a.createElement(f, {
						href: "#",
						onClick: e => {
							t(), e.preventDefault()
						}
					}) : m.a.createElement(b, {
						href: "#",
						onClick: t => {
							Object(O.a)(t) && (t.preventDefault(), t.stopPropagation(), s(), e.sendEvent(Object(Ao.b)()))
						}
					})))
				}))),
				Uc = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				Gc = s("./src/reddit/helpers/trackers/navigation.ts"),
				Bc = s("./src/reddit/routes/index.ts");
			var Hc = s("./src/reddit/selectors/experiments/sso.ts");
			const qc = "change-username-tooltip-id",
				Wc = "HeaderUserActions--Chat",
				Vc = "email-verification-tooltip-id",
				Qc = "HeaderUserActions--Messages",
				zc = "HeaderUserActions--Moderation",
				Zc = "HeaderUserActions--NewPost",
				Kc = Object(Cs.t)({
					pageLayer: e => e
				}),
				Yc = Object(b.c)({
					activeDropdownId: go.a,
					email: Vt.l,
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isModerator: Wt.h,
					isNameEditable: Vt.J,
					isResponsiveSettingsEnabled: ys.a,
					shouldOpenEmailVerificationTooltip: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(Cs.K)(s) && !!Object(Vt.l)(e) && !Object(Vt.x)(e) && Object(Vt.H)(e) && !Object(Vt.F)(e)
					},
					shouldShowChangeUsernameModals: Hc.c,
					unreadNotifications: Vt.db
				}),
				Jc = Object(u.b)(Yc, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(Uo.d)()),
					closeEmailVerificationTooltip: () => e(Object(Bo.b)()),
					onChatClick: () => e(Object(Go.d)()),
					onDismissCustomizeFlyout: () => e(Object(T.t)()),
					onOpenModerationDropdown: () => e(Object(Sr.h)({
						tooltipId: Uc.a
					})),
					onOpenUserDropdown: () => e(Object(Sr.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(N.h)(Wo.b))
					},
					openKeepUsernameModal: () => {
						e(Object(N.h)(Wo.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(Bo.b)()), e(Object(N.i)(Wo.a))
					},
					toggleTooltip: t => e(Object(Sr.h)({
						tooltipId: t
					})),
					resendEmail: () => e(Object(qo.v)(Yo.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Ho.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const s = Object(h.b)(t);
						e(Object(Uo.f)(s))
					}
				}));
			class Xc extends m.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => this.props.sendEvent(Object(Gc.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(Fo.a)(e.pathname, Bc.a),
							s = t && t.route && t.route.meta && t.route.meta.name;
						return !s || s !== f.yb.POST_CREATION || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}
				}
				render() {
					const {
						activeDropdownId: e,
						className: t,
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: a,
						email: r,
						isChangeUsernameTooltipShowing: o,
						isCustomizeFlyoutShowing: i,
						isEmailVerificationTooltipShowing: c,
						isModerator: d,
						isNameEditable: u,
						isResponsiveSettingsEnabled: p,
						language: h,
						onDismissCustomizeFlyout: b,
						onOpenUserDropdown: f,
						openChangeUsernameModal: C,
						openKeepUsernameModal: v,
						resendEmail: y,
						shouldOpenEmailVerificationTooltip: P,
						shouldShowChangeUsernameModals: x,
						toggleChangeEmailModal: O,
						toggleTooltip: E,
						unreadNotifications: S,
						user: j
					} = this.props, w = !(!S || !S.hasUnreadModmail && !S.hasUnreadOldModmail), k = (e, t) => m.a.createElement(wr.c, {
						caretOnTop: !0,
						tooltipId: e,
						text: t
					}), _ = j && Object(Ht.e)(j) || "", I = Object(g.a)({
						[Ki.a["m-responsive"]]: p
					});
					return m.a.createElement(Gt.a, {
						id: Vc,
						ref: e => this.container = e,
						className: t
					}, m.a.createElement(Gt.a, {
						className: Ki.a.headerLinks,
						id: qc
					}, d && m.a.createElement(l.Fragment, null, m.a.createElement("span", {
						className: Ki.a.iconWrapper,
						id: zc,
						key: zc,
						onMouseEnter: () => E(zc),
						onMouseLeave: () => e === zc && E(zc)
					}, m.a.createElement(Wi, {
						"aria-expanded": e === Uc.a,
						"aria-haspopup": !0,
						"aria-label": n.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Uc.a,
						onClick: this.onOpenModerationDropdown,
						isOpen: e === Uc.a
					}, m.a.createElement(Yn.a, {
						className: Object(g.a)(Ki.a.moderateIcon, {
							[Ki.a.isLit]: w
						})
					})), k(zc, n.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(Uc.b, {
						className: Ki.a.moderationDropdown,
						isOpen: e === Uc.a,
						key: Uc.a,
						unreadNotifications: S,
						sendEventWithName: this.sendEventWithName
					})), j && m.a.createElement(l.Fragment, null, m.a.createElement("span", {
						className: Ki.a.iconWrapper,
						id: Wc,
						key: Wc,
						onMouseEnter: () => E(Wc),
						onMouseLeave: () => e === Wc && E(Wc)
					}, m.a.createElement("a", {
						className: Ki.a.link,
						href: "".concat(M.a.redditUrl, "/chat"),
						onClick: Object(Do.a)(this.onClickChat)
					}, m.a.createElement(sc, null)), k(Wc, n.fbt._("Chat", null, {
						hk: "4nXRWH"
					}))), m.a.createElement("span", {
						className: Ki.a.iconWrapper,
						id: Qc,
						key: Qc,
						onMouseEnter: () => E(Qc),
						onMouseLeave: () => e === Qc && E(Qc)
					}, m.a.createElement("a", {
						className: Ki.a.link,
						href: S && S.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: this.onClickMail
					}, m.a.createElement(ic, {
						unreadCount: S && S.inboxCount || 0
					})), k(Qc, n.fbt._("Messages", null, {
						hk: "Txokh"
					}))), m.a.createElement("span", {
						className: Ki.a.iconWrapper,
						id: Zc,
						key: Zc,
						onMouseEnter: () => E(Zc),
						onMouseLeave: () => e === Zc && E(Zc)
					}, m.a.createElement("button", {
						className: Ki.a.link,
						"aria-label": n.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: this.onClickCreatePost
					}, m.a.createElement(ta.a, {
						className: Ki.a.postIcon
					})), k(Zc, n.fbt._("Create Post", null, {
						hk: "1TvNGq"
					}))), m.a.createElement("span", {
						className: Ki.a.iconWrapper
					}, m.a.createElement(Fi, null)))), m.a.createElement(Dc, {
						className: Ki.a.headerUserDropdown,
						onClick: f,
						user: j,
						sendEventWithName: this.sendEventWithName
					}), i && m.a.createElement(oc, {
						onCloseFlyout: b
					}), m.a.createElement(ti, {
						closeTooltip: a,
						email: r,
						isOpen: P && c,
						resendEmail: y,
						toggleChangeEmailModal: O,
						tooltipId: Vc
					}), m.a.createElement(Zo, {
						email: r,
						language: h,
						shouldOpenTooltip: P
					}), u && !p && m.a.createElement(l.Fragment, null, m.a.createElement(zo.a, {
						closeTooltip: s,
						isOpen: o && !x,
						openChangeUsernameModal: C,
						openKeepUsernameModal: v,
						tooltipId: qc,
						username: _
					}), x && m.a.createElement(Qo.a, {
						isResponsiveSettingsEnabled: p,
						overlayClassName: I,
						username: _,
						withOverlay: !0
					}), m.a.createElement(Vo.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var $c = Object(ce.c)(Kc(Jc(Xc))),
				ed = s("./src/reddit/selectors/meta.ts"),
				td = s("./src/reddit/components/Header/User/index.m.less"),
				sd = s.n(td);
			const {
				fbt: nd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ad = Object(b.c)({
				account: e => e.user.account,
				language: e => e.user.language,
				origin: ed.k
			}), rd = m.a.memo(e => m.a.createElement("div", {
				className: Object(g.a)(e.className, sd.a.row)
			}, !e.account && function(e) {
				const t = e.pageLayer,
					s = M.a.accountManagerOrigin,
					n = t ? t.url : "/",
					a = t && t.meta && t.meta.name === f.yb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + n);
				return m.a.createElement("div", {
					className: sd.a.loggedOutRow
				}, m.a.createElement(et.j, {
					redditStyle: !0,
					className: Object(g.a)(sd.a.login, sd.a.button),
					href: "".concat(s, "/login/?dest=").concat(a),
					onClick: t => {
						Object(O.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenLoginModal(), e.sendEvent(Object(Ao.a)("nav")))
					}
				}, nd._("Log in", null, {
					hk: "odEG4"
				})), m.a.createElement(et.g, {
					redditStyle: !0,
					className: Object(g.a)(sd.a.separator, sd.a.register, sd.a.button),
					href: "".concat(s, "/register/?dest=").concat(a),
					onClick: t => {
						Object(O.a)(t) && (t.stopPropagation(), t.preventDefault(), e.onOpenRegisterModal(), e.sendEvent(Object(Ao.c)("nav")))
					}
				}, nd._("sign up", null, {
					hk: "47v4we"
				})))
			}(e), m.a.createElement($c, {
				className: Object(g.a)({
					[sd.a.loggedOut]: !e.account
				}),
				language: e.language,
				user: e.account
			})));
			var od = Object(Cs.t)()(Object(u.b)(ad, e => ({
					onOpenLoginModal: () => {
						e(Object(N.k)({
							actionSource: N.a.HeaderLogin
						})), e(Object(Lo.g)())
					},
					onOpenRegisterModal: () => {
						e(Object(N.k)({
							actionSource: N.a.HeaderSignup
						})), e(Object(Lo.h)())
					}
				}))(Object(ce.c)(rd))),
				id = s("./src/reddit/components/Header/index.m.less"),
				cd = s.n(id);

			function dd() {
				return (dd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ld = _.a.header("HeaderDynamicStyles", cd.a),
				md = Object(b.c)({
					isLoggedIn: Vt.H,
					isNightmode: Vt.S,
					isResponsiveSettingsEnabled: ys.a,
					language: e => e.user.language,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				ud = Object(Cs.t)({
					categoryName: Cs.b,
					pageLayer: e => e
				}),
				pd = e => m.a.createElement("div", {
					className: cd.a.left
				}, m.a.createElement(br.a, null, n.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
					hk: "ToBNc"
				})), m.a.createElement(hr.b, null), m.a.createElement(Mn.a, {
					"aria-label": n.fbt._("Home", null, {
						hk: "3PmGmU"
					}),
					className: cd.a.centeredRow,
					to: "/",
					onClick: e.onReloadFrontpage
				}, m.a.createElement(So.a, {
					className: cd.a.snoo
				}), m.a.createElement(jo.a, {
					className: cd.a.wordmark
				})), e.children),
				hd = e => m.a.createElement("div", {
					className: cd.a.right
				}, e.children, m.a.createElement(od, null)),
				bd = e => m.a.createElement("div", {
					className: cd.a.layout
				}, m.a.createElement(pd, dd({}, e, {
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), m.a.createElement(pr, null), m.a.createElement(Eo, {
					className: cd.a.search
				})), m.a.createElement(hd, null, m.a.createElement(Ro, {
					className: cd.a.quickLinks
				}))),
				gd = e => m.a.createElement("div", {
					className: cd.a.layout
				}, m.a.createElement(pd, dd({}, e, {
					language: e.language,
					onReloadFrontpage: e.onReloadFrontpage
				}), m.a.createElement("div", {
					className: cd.a.searchContainer
				}, m.a.createElement(Eo, {
					className: cd.a.search
				}))), m.a.createElement(hd, null));
			var fd = ud(Object(u.b)(md, e => ({
					onReloadFrontpage: () => e(Object(In.x)(!0))
				}))((function(e) {
					let t;
					return t = e.isLoggedIn ? bd : gd, m.a.createElement(ld, {
						"data-redditstyle": !0,
						className: Object(g.a)(cd.a.container, e.className, {
							[cd.a.bladeIsOpen]: e.isBladeOpen
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						language: e.language,
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isResponsiveSettingsEnabled && m.a.createElement(Mo, {
						className: cd.a.MwebResponsiveHeader
					}))
				}))),
				Cd = s("./src/reddit/components/LightboxHeader/index.tsx"),
				vd = s("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				yd = s("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Pd = s.n(yd);
			const {
				fbt: xd
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const Od = Object(u.b)(null, e => ({
				onUnpinSubscriptions: () => e(Object(E.j)())
			}));
			var Ed = _.a.wrapped(Od((function(e) {
					return m.a.createElement("div", {
						"data-redditstyle": !0,
						className: e.className
					}, m.a.createElement("div", {
						className: Pd.a.title
					}, m.a.createElement(Ra, {
						className: Pd.a.listHeader
					}, xd._("My Communities", null, {
						hk: "1CmPOc"
					})), m.a.createElement("div", {
						className: Pd.a.unpin,
						onClick: e.onUnpinSubscriptions
					}, m.a.createElement(V.a, {
						className: Pd.a.icon
					}))), m.a.createElement(cr, null))
				})), "Component", Pd.a),
				Sd = s("./src/reddit/components/ThemeProvider/index.tsx");
			const jd = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				wd = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, Y.actionInfo(t), {
						reason: "primary"
					})
				}),
				kd = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: Object.assign({}, Y.actionInfo(t), {
						reason: "secondary"
					})
				});
			var _d = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Md = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Id = s("./src/reddit/selectors/structuredStyles.ts"),
				Nd = s("./src/reddit/components/Toaster/PlainBread.m.less"),
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
			var Ld = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Ad = e => {
				const t = zn.a;
				switch (e.kind) {
					case z.b.Error:
					case z.b.AuthError:
						return t.warning;
					case z.b.SuccessCommunity:
						return t.op;
					case z.b.SuccessCommunityGreen:
					case z.b.SuccessMod:
						return t.approved;
					case z.b.EuCookiePolicy:
					case z.b.UappBanner:
					case z.b.Undo:
					default:
						return t.op
				}
			};
			class Fd extends m.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const e = this.props,
						{
							kind: t,
							sendEvent: s
						} = e,
						n = Ld(e, ["kind", "sendEvent"]);
					return m.a.createElement("div", n)
				}
			}
			const Dd = _.a.wrapped(Fd, "PlainBread", Td.a);
			var Ud = e => m.a.createElement(Dd, Rd({}, e, {
					style: Object.assign({}, e.style || {}, {
						"--Toaster-indicatorColor": Ad(e)
					})
				})),
				Gd = s("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Bd = s.n(Gd);
			const Hd = _.a.span("Text", Bd.a);
			var qd = s("./src/reddit/components/Toaster/index.m.less"),
				Wd = s.n(qd);
			const {
				fbt: Vd
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Qd = _.a.wrapped(_d.a, "AuthErrorToastIcon", Wd.a), zd = _.a.wrapped(et.f, "AuthErrorToastPrimaryButton", Wd.a);
			class Zd extends m.a.Component {
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
					}, m.a.createElement(Ud, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, m.a.createElement(Qd, null), m.a.createElement(Hd, null, Vd._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(zd, {
						type: "submit"
					}, Vd._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Kd = Zd,
				Yd = s("./src/lib/constants/euCookiePolicy.ts"),
				Jd = s("./src/lib/permanentCookieOptions.ts"),
				Xd = s("./src/reddit/controls/Link/index.tsx"),
				$d = s("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				el = s.n($d);
			const {
				fbt: tl
			} = s("./node_modules/fbt/lib/FbtPublic.js"), sl = _.a.div("Icon", el.a), nl = () => m.a.createElement(sl, {
				style: {
					backgroundImage: "url(".concat(M.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), al = _.a.wrapped(et.f, "PrimaryButton", el.a), rl = _.a.wrapped(Ud, "Bread", el.a);
			class ol extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ze.a.set(os.b, Yd.b.toString(), Object(Jd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(rl, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, m.a.createElement(nl, null), m.a.createElement(Hd, null, tl._("Cookies help us deliver our Services. By using our Services or clicking I agree, you agree to our use of cookies.", null, {
						hk: "31CdDx"
					}), " ", m.a.createElement(Xd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, tl._("Learn More", null, {
						hk: "1fsN6Z"
					})), "."), m.a.createElement(al, {
						type: "submit"
					}, tl._("I Agree", null, {
						hk: "33M4qf"
					}))))
				}
			}
			var il, cl = ol;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(il || (il = {}));
			var dl = s("./src/reddit/controls/Typography/index.tsx"),
				ll = s("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				ml = s.n(ll);

			function ul() {
				return (ul = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const pl = _.a.div("Container", ml.a),
				hl = _.a.img("SideImage", ml.a),
				bl = _.a.div("Main", ml.a),
				gl = _.a.div("SubTitle", ml.a),
				fl = dl.a,
				Cl = _.a.wrapped(et.g, "PrimaryLinkButton", ml.a),
				vl = _.a.wrapped(V.a, "CloseIcon", ml.a);
			class yl extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(wd(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(jd(this.props.name))
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
					return m.a.createElement(pl, {
						key: t,
						style: Object.assign({}, a, {
							transform: "\n            translateY(".concat(a.y, "px)\n            scale(").concat(a.x, ", ").concat(a.x, ")\n          ")
						})
					}, m.a.createElement(vl, {
						onClick: this.props.onClose
					}), m.a.createElement(hl, {
						srcSet: s
					}), m.a.createElement(bl, null, m.a.createElement(gl, null, r), m.a.createElement(dl.b, null, o), m.a.createElement(fl, null, e), m.a.createElement(Cl, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, n.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Pl = Object(u.b)(null, e => ({
					onSignup: () => e(Object(Lo.h)())
				}))(Object(ce.c)(yl)),
				xl = "".concat(Ol("subscribe-cap.png"), " 1x,\n  ").concat(Ol("subscribe-cap@2x.png"), " 2x,");

			function Ol(e) {
				return "".concat(M.a.assetPath, "/img/banner/").concat(e)
			}
			const El = 3,
				Sl = e => "".concat(e, ":").concat(152721e4);
			var jl = s("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				wl = s.n(jl);
			const {
				fbt: kl
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _l = _.a.div("Icon", wl.a), Ml = () => m.a.createElement(_l, {
				style: {
					backgroundImage: "url(".concat(M.a.assetPath, "/img/snoo-upvote.png)")
				}
			}), Il = _.a.wrapped(et.f, "PrimaryButton", wl.a), Nl = _.a.wrapped(Ud, "Bread", wl.a);
			class Tl extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Ze.a.set(os.i, Sl(El), Object(Jd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Nl, {
						key: e.key,
						kind: e.toast.kind,
						style: Object.assign({}, e.style, {
							transform: "\n              translateY(".concat(e.style.y, "px)\n              scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n            ")
						})
					}, m.a.createElement(Ml, null), m.a.createElement(Hd, null, kl._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [kl._param("=User Agreement", m.a.createElement(Xd.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, kl._("User Agreement", null, {
						hk: "XS57W"
					}))), kl._param("=Privacy Policy", m.a.createElement(Xd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, kl._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(Il, {
						type: "submit"
					}, kl._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Rl = Tl;

			function Ll() {
				return (Ll = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Al = [],
				Fl = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Dl = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Ul = {
					opacity: Object(k.spring)(0),
					x: Object(k.spring)(.6),
					y: Object(k.spring)(80, Fl)
				},
				Gl = _.a.wrapped(_d.a, "SnooFacepalm", Wd.a),
				Bl = _.a.wrapped(Md.a, "SnooHappy", Wd.a),
				Hl = _.a.wrapped(Un.b, "SubredditIcon", Wd.a),
				ql = _.a.img("CustomIcon", Wd.a),
				Wl = _.a.div("Container", Wd.a),
				Vl = _.a.wrapped(V.a, "Close", Wd.a),
				Ql = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Vl, Ll({
					className: "CloseIcon"
				}, e))),
				zl = _.a.wrapped(Ud, "Bread", Wd.a),
				Zl = Object(b.c)({
					subredditIcon: Id.c,
					toastSlices: e => e.toaster
				}),
				Kl = Object(u.b)(Zl, e => ({
					dismissToast: t => () => e(Object(D.f)(t)),
					onButtonClick: (t, s) => () => {
						e(t), e(Object(D.f)(s))
					}
				}));
			class Yl extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Jl(e, this.props.toastSlices), this.getWillEnterStyles = () => Dl, this.getWillLeaveStyles = () => Ul
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(k.TransitionMotion, {
						defaultStyles: Al,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(Wl, null, e.map(e => {
						const t = e.data,
							s = Object.assign({}, e.style, {
								transform: "\n                  translateY(".concat(e.style.y, "px)\n                  scale(").concat(e.style.x, ", ").concat(e.style.x, ")\n                ")
							});
						if (t.kind === z.b.Custom && void 0 !== t.customToastType) {
							const n = $l[t.customToastType];
							return m.a.createElement(n, {
								key: e.key,
								toast: t,
								style: s,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === z.b.UappBanner) return m.a.createElement(Rl, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === z.b.EuCookiePolicy) return m.a.createElement(cl, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === z.b.AuthError) return m.a.createElement(Kd, {
							key: e.key,
							toast: t,
							style: s,
							onClose: this.props.dismissToast(t.id)
						});
						const n = t.kind === z.b.Modal ? et.f : et.n,
							a = t.kind === z.b.Modal ? et.i : et.n;
						return m.a.createElement(zl, {
							className: t.kind === z.b.Modal ? Wd.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(jd(t.name)) : void 0,
							style: s
						}, m.a.createElement("div", {
							className: Wd.a.ContentWrapper
						}, Xl(t, this.props.subredditIcon), m.a.createElement(Hd, null, t.text)), m.a.createElement("div", {
							className: Wd.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(n, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(wd(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(a, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(kd(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(Ql, {
							onClick: this.props.dismissToast(t.id)
						}))
					}))) : null
				}
			}
			const Jl = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(k.spring)(1),
							x: Object(k.spring)(1, Fl),
							y: Object(k.spring)(0, Fl)
						}
					}))
				},
				Xl = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(ql, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case z.b.Error:
							return m.a.createElement(Gl, null);
						case z.b.SuccessAward:
						case z.b.SuccessCommunity:
						case z.b.SuccessCommunityGreen:
							return m.a.createElement(Bl, null);
						case z.b.SuccessMod:
							return m.a.createElement(Hl, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				$l = {
					[z.a.subscribeCap]: e => m.a.createElement(Pl, ul({
						name: il.LoggedOutMaxSubscriptions,
						sideImage: xl,
						title: n.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: n.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var em = Kl(Object(ce.c)(Yl)),
				tm = s("./src/reddit/featureFlags/profileCollections.ts"),
				sm = s("./src/reddit/helpers/trackers/banners.ts"),
				nm = s("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				am = s.n(nm);
			var rm = _.a.div("Wrapper", am.a),
				om = s("./src/reddit/components/AlertBanner/index.m.less"),
				im = s.n(om);
			const {
				fbt: cm
			} = s("./node_modules/fbt/lib/FbtPublic.js"), dm = () => m.a.createElement(rm, {
				className: Object(g.a)(im.a.wrapper, im.a.suspended)
			}, m.a.createElement("span", null, cm._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), m.a.createElement("a", {
				className: im.a.underlineLink,
				href: "https://www.reddithelp.com/en/node/851"
			}, cm._("Learn more", null, {
				hk: "1OTc8q"
			}))), lm = () => m.a.createElement(rm, {
				className: Object(g.a)(im.a.wrapper, im.a.fpr)
			}, m.a.createElement("span", null, cm._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: im.a.underlineLink,
				href: "https://www.reddithelp.com/en/categories/using-reddit/your-reddit-account/my-account-was-disabled"
			}, cm._("Learn more", null, {
				hk: "1OTc8q"
			}))), mm = e => {
				let {
					updateLink: t,
					onClickOldReddit: s
				} = e;
				return m.a.createElement(rm, {
					className: Object(g.a)(im.a.wrapper, im.a.deprecated)
				}, m.a.createElement("span", null, cm._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [cm._param("update your browser", m.a.createElement(um, {
					link: t
				}, cm._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, cm._("If you do not update your browser, we suggest you visit {old reddit} .", [cm._param("old reddit", m.a.createElement("a", {
					className: im.a.underlineLink,
					href: M.a.oldRedditUrl,
					onClick: s
				}, cm._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, um = e => {
				let {
					children: t,
					link: s
				} = e;
				return null !== s ? m.a.createElement("a", {
					className: im.a.underlineLink,
					href: s
				}, t) : m.a.createElement("span", null, t)
			};
			class pm extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(sm.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(sm.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(mm, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(lm, null) : s ? m.a.createElement(dm, null) : null
				}
			}
			var hm = Object(ce.c)(pm),
				bm = s("./src/reddit/components/AlertBanner/heights.ts"),
				gm = s("./src/reddit/components/PopupPortal/index.tsx"),
				fm = s("./src/reddit/constants/componentSizes.ts"),
				Cm = s("./src/reddit/constants/elementIds.ts"),
				vm = s("./src/reddit/constants/posts.ts"),
				ym = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Pm = s("./src/reddit/contexts/Language.tsx"),
				xm = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Om = s("./src/reddit/helpers/postCollection.ts"),
				Em = s("./src/reddit/models/Theme/index.ts"),
				Sm = s("./src/reddit/selectors/notificationBanner.ts"),
				jm = s("./src/reddit/selectors/posts.ts"),
				wm = s("./src/reddit/components/AppRouter/index.m.less"),
				km = s.n(wm);

			function _m() {
				return (_m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Mm = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const Im = e => {
					var {
						className: t,
						shouldDisplayPinnedSubscriptions: s
					} = e, n = Mm(e, ["className", "shouldDisplayPinnedSubscriptions"]);
					return m.a.createElement("div", _m({
						className: Object(g.a)(km.a.main, {
							[km.a.mShowingPaddedPinnedDescriptions]: s
						}, t)
					}, n))
				},
				Nm = Object(C.a)(e => {
					var {
						className: t,
						theme: s
					} = e, n = Mm(e, ["className", "theme"]);
					const a = Object(ue.a)(Object.assign({
						theme: s
					}, n));
					return m.a.createElement("div", _m({
						className: Object(g.a)(km.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Em.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition)
						}
					}, n))
				}),
				Tm = e => {
					var {
						className: t,
						divRef: s
					} = e, n = Mm(e, ["className", "divRef"]);
					return m.a.createElement("div", _m({
						className: Object(g.a)(km.a.lightboxHeaderWrapper, t)
					}, n, {
						ref: s
					}))
				},
				Rm = Object(Sm.a)(vd.a.EmailCollectionBannerId),
				Lm = Object(u.b)(() => Object(b.c)({
					currentPage: ns.b,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(K.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: Vt.s,
					language: e => e.user.language,
					isLoggedIn: Vt.H,
					isSubscriptionsPinned: An.b,
					isSuspended: Vt.M,
					isFPR: Vt.F,
					posts: jm.R,
					profileCollectionsEnabled: tm.a,
					showEmailCollectionBanner: e => !Object(Cs.J)(Object(ns.b)(e)) && Rm(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onUnpinSubscriptions: () => e(Object(E.j)())
				})),
				Am = (e, t) => !(!e.state || !e.state[G.a.IsOverlay] || t === e);
			class Fm extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.resizeHandler = d()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < fm.l && this.props.onUnpinSubscriptions()
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
						if (Object(Cs.w)(e)) {
							const n = e && e.urlParams && e.urlParams.partialPostId,
								a = "".concat(f.vb.Post, "_").concat(n),
								r = t && n && t[a],
								o = r && r.belongsTo.type === vm.a.PROFILE;
							return !(!r || !Object(Om.a)(r) || o && !s)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(K.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						location: t
					} = this.props, s = t.state && t.state[G.a.IsOverlay], n = Object(x.a)(this.previousLocation, e.location), a = Object(x.a)(this.previousLocation, this.props.location), r = s ? this.previousPage : this.props.currentPage;
					if (r) {
						const {
							meta: t,
							urlParams: s
						} = r, n = t && (t.name === f.yb.INDEX || t.name === f.yb.SUBREDDIT && s.subredditName === B.b.Popular), a = Object(K.c)(this.props.frontpageSignupVariant), o = Object(K.c)(e.frontpageSignupVariant);
						n || a || !o ? a && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || n || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const o = Am(e.location, this.previousLocation);
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
					} = this.state, v = this.context, y = Am(u, this.previousLocation);
					u.state && u.state[G.a.IsOverlay] && !y ? u.state[G.a.IsOverlay] = !1 : u.state && (this.previousLocation === u || u.state[G.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[G.a.CloseLocation] && this.previousLocation.state[G.a.CloseLocation] === u.state[G.a.CloseLocation] ? u.state[G.a.CloseLocation] = Object.assign({}, this.previousLocation, {
						state: i()(this.previousLocation.state, G.a.CloseLocation)
					}) : u.state[G.a.CloseLocation] = this.previousLocation);
					const P = Object(x.a)(this.previousLocation, u),
						O = y || P ? this.previousLocation : u,
						E = y || P ? this.previousPage : e,
						j = !(!(E && E.meta && E.meta.name === f.yb.SEARCH_RESULTS && E && E.queryParams) || E.queryParams[q.p]),
						w = !(!E || !E.meta || E.meta.name !== f.yb.MODERATION_PAGES),
						k = Object(Cs.w)(E),
						_ = this.getIsPostCollection(),
						M = g && !C;
					return s ? n.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(Pm.a.Provider, {
						value: d
					}, m.a.createElement(Cs.a.Provider, {
						value: E
					}, m.a.createElement(hr.c, {
						isOverlayOpen: y
					}, m.a.createElement(Sd.a, {
						forceRedditTheme: j
					}, g && m.a.createElement(Qe, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Dm, {
						browserInfo: v,
						isFPR: a,
						isInline: M,
						isSuspended: c
					})), m.a.createElement(ym.a.Provider, {
						value: !1
					}, m.a.createElement(Sd.a, {
						forceRedditTheme: j || w,
						isCommentsPage: k
					}, m.a.createElement(Um, {
						frontpageSignupVariant: t,
						isCommentsPage: k,
						isInline: M,
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
					}))))), m.a.createElement(Cs.a.Provider, {
						value: e
					}, y && m.a.createElement(ym.a.Provider, {
						value: !0
					}, m.a.createElement(Sd.a, {
						isOverlay: !0
					}, m.a.createElement(Gm, {
						isPostCollection: _,
						location: u,
						onClickOutsideOverlay: p,
						page: e,
						routes: h,
						showEmailCollectionBanner: b,
						browserInfo: v,
						showFPR: a,
						showSuspended: c
					}))), m.a.createElement(Sd.a, null, m.a.createElement(l.Fragment, null, m.a.createElement("div", {
						id: gm.a,
						className: km.a.popupContainer
					}), m.a.createElement(em, null), b && m.a.createElement(S.a, null), m.a.createElement(ps, null), m.a.createElement(_n, null)))))
				}
			}
			Fm.contextType = v.a;
			const Dm = Object(ce.c)(e => {
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
					return m.a.createElement(l.Fragment, null, m.a.createElement(hm, r), m.a.createElement(fd, {
						className: Object(g.a)(km.a.header, Object(bm.b)(km.a, r), {
							[km.a.inline]: n
						})
					}))
				}),
				Um = Object(ce.c)(class extends m.a.Component {
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
						return m.a.createElement(Im, {
							"aria-hidden": n,
							className: Object(g.a)(Object(bm.b)(km.a, this.props), {
								[km.a.withUpsell]: !!e,
								[km.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && m.a.createElement(Ed, {
							className: Object(g.a)(km.a.pinnedSubscriptions, Object(bm.b)(km.a, this.props)),
							"data-redditstyle": !0
						}), m.a.createElement(p.f, {
							location: t
						}, s), c && m.a.createElement("div", {
							className: Object(g.a)(km.a.bottomSpacer, Object(bm.a)(km.a, this.props))
						}))
					}
				});
			class Gm extends m.a.Component {
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
							t(e.state[G.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = xm.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(P.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && xm.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: s
					} = this.props, n = !(!t || !t.meta || t.meta.name === f.yb.SUBREDDIT_CREATION || t.meta.name === f.yb.PUBLIC_ACCESS_NETWORK), a = e;
					return m.a.createElement(Nm, {
						className: Object(g.a)(Object(bm.b)(km.a, this.props), {
							[km.a.mIsCommentsLightbox]: n,
							[km.a.mIsLargeCommentsLightbox]: a
						})
					}, m.a.createElement("div", {
						className: Object(g.a)(km.a.overlayWrapper, Object(bm.b)(km.a, this.props))
					}, m.a.createElement("div", {
						className: Object(g.a)(km.a.overlayScrollContainer, {
							[km.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Cm.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, n && m.a.createElement(Tm, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(g.a)(Object(bm.b)(km.a, this.props), {
							[km.a.mIsLargeCommentsLightbox]: a
						}),
						tabIndex: -1
					}, m.a.createElement(Cd.a, {
						page: t
					})), m.a.createElement(p.f, null, s), m.a.createElement("div", {
						className: Object(g.a)(km.a.bottomSpacer, Object(bm.a)(km.a, this.props))
					}))))
				}
			}
			t.b = Lm(Object(ce.c)(Fm))
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
					post: c.O
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
						post: s,
						trackDisplay: !0
					}, a.a.createElement("div", {
						className: Object(d.a)(t, "Blank ".concat(s.id))
					})) : null
				};
			t.default = l(m)
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class d extends a.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: s = !0,
							location: n,
							showModal: a,
							dialogId: r
						} = this.props;
						return !(!s || e.pathname !== n.pathname) || (r && a(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return a.a.createElement(o.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(r.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(o.i)(d))
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
		"./src/reddit/components/ChangeUsernameModals/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ChangeUsernameModals").then(s.bind(null, "./src/reddit/components/ChangeUsernameModals/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameModals/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ChangeUsernameTooltip").then(s.bind(null, "./src/reddit/components/ChangeUsernameTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameTooltip/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
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
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconPowerupsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCo~264e7f7d"), s.e("CoinsPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), s.e("CoinsPurchaseModal")]).then(s.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(r.d)()])).then(e => e[0].default),
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
					scoreClassName: Object(r.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(i.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "O258FYaW9n8M2K5BGX4v_",
				wrapper: "O258FYaW9n8M2K5BGX4v_",
				backgroundAnimation: "_3wgpIyg-y7kAJzTXM19iIz",
				Container: "WWLVFaNE0_QzzlHV-5_2A",
				container: "WWLVFaNE0_QzzlHV-5_2A",
				Heading: "_2mCl3hzhnrbUnRSV0Hlgvv",
				heading: "_2mCl3hzhnrbUnRSV0Hlgvv",
				Description: "_3cd3ufhq0Jp8vxXTPbHKEa",
				description: "_3cd3ufhq0Jp8vxXTPbHKEa",
				SnooImage: "_1cU9WVsnegf986qVbdoocd",
				snooImage: "_1cU9WVsnegf986qVbdoocd",
				Footer: "_31ILosdTcnxgP48mu3YbxG",
				footer: "_31ILosdTcnxgP48mu3YbxG",
				CloseButton: "_3YTTOYNjRB1X9HCvysTDbc",
				closeButton: "_3YTTOYNjRB1X9HCvysTDbc",
				Close: "pJrd2o-GcLr7Nf-roRIFH",
				close: "pJrd2o-GcLr7Nf-roRIFH"
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
		"./src/reddit/components/Gold/GildAnimationOverlay/index.m.less": function(e, t, s) {
			e.exports = {
				modalOverlay: "_3b88NBdFAQ04N7cULqQvPh",
				fadeOut: "_3ktYxYLY8M4ue26GyBBjpt",
				modalBody: "_2W0vYckM4OsrrANQqi_sir",
				gildAnimationContainer: "_3xD0e6RJGug4SSLnVIPeh2",
				awardScaleIn: "_231us7lszsy_R3tzl2GqL1",
				awardScaleOut: "eC2A2qBG6f2mU9XPlMMcZ",
				animationComponent: "_2KBRcm-P0k4_mVHu1UroF6",
				starburst: "_3xKR2QByGO_30UN1TJJ9qF",
				awardAsset: "Ju8wOr8Uag5VUdjYF6E_m",
				sparkle: "_28LAx64oVvQTCvxl2mvkX4"
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SPARKLE_ASSET_PATH", (function() {
				return g
			})), s.d(t, "STARBURST_ASSET_PATH", (function() {
				return f
			}));
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/selectors/gold/giveAwards.ts"),
				h = s("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				b = s.n(h);
			const g = "".concat(n.a.assetPath, "/img/gold/animated-sparkle-256.png"),
				f = "".concat(n.a.assetPath, "/img/gold/animated-starburst-256.png"),
				C = Object(c.c)({
					award: p.a
				}),
				v = Object(i.b)(C, e => ({
					onClose: () => e(Object(m.g)(u.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(d.a)(v(e => {
				const {
					award: t,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const n = t.icon.url,
					r = a.fbt._("Animation of {award name} image", [a.fbt._param("award name", t.name)], {
						hk: "222osK"
					});
				return o.a.createElement("div", {
					className: b.a.gildAnimationContainer
				}, o.a.createElement("div", {
					className: Object(l.a)(b.a.animationComponent, b.a.starburst),
					style: {
						backgroundImage: "url(".concat(f, ")")
					}
				}), o.a.createElement("img", {
					alt: r,
					className: Object(l.a)(b.a.animationComponent, b.a.awardAsset),
					src: n
				}), o.a.createElement("div", {
					className: Object(l.a)(b.a.animationComponent, b.a.sparkle),
					style: {
						backgroundImage: "url(".concat(g, ")")
					}
				}))
			}))
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
				m = s("./src/reddit/actions/shortcuts/close.ts"),
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
				j = s("./src/reddit/models/Vote/index.ts"),
				w = s("./src/reddit/selectors/experiments/categories.ts"),
				k = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/components/LightboxHeader/index.m.less"),
				M = s.n(_);
			const I = Object(i.c)({
					isInCategoriesExperiment: w.a,
					post: k.m
				}),
				N = Object(o.b)(I, (e, t) => {
					let {
						sendEvent: s
					} = t;
					return {
						close: () => {
							e(Object(m.a)(s, !0))
						},
						toggleVote: (t, s) => e(s === j.a.upvoted ? Object(l.cb)(t) : Object(l.y)(t))
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
						className: Object(c.a)(M.a.container, e, {
							[M.a.isCollection]: i && Object(C.a)(i)
						})
					}, r.a.createElement("div", {
						className: M.a.postDetails
					}, i && r.a.createElement(a.Fragment, null, r.a.createElement(u.a, {
						className: M.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: i,
						onVoteClick: s,
						redditStyle: !0
					}), r.a.createElement(l, {
						className: M.a.mediaIcon
					}), r.a.createElement(h.c, {
						className: M.a.postTitle,
						post: i,
						size: h.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: g.a.lightboxHeaderText,
						titleLinkClassName: M.a.postTitleLink,
						showCategoryTag: !0
					}), r.a.createElement(p.a, {
						post: i,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), m && o && o.urlParams.subredditName && r.a.createElement("div", {
						className: M.a.membershipPaywallTitle
					}, n.fbt._("{communityName} Special Membership", [n.fbt._param("communityName", "r/".concat(o.urlParams.subredditName))], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: M.a.actions
					}, r.a.createElement(f.n, {
						className: M.a.close,
						onClick: t || this.closeLightbox,
						title: n.fbt._("Close", null, {
							hk: "3BrQGj"
						}),
						"aria-label": n.fbt._("Close", null, {
							hk: "QApwN"
						})
					}, r.a.createElement(E.a, null), r.a.createElement("span", {
						className: M.a.closeText
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
				getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
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
			const o = () => Object(a.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconPowerupsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCo~264e7f7d"), s.e("PremiumPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(r.d)()])).then(e => e[0].default),
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
		"./src/reddit/components/ShortcutWrapper/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "ShortcutWrapper",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~ShortcutWrapper"), s.e("ShortcutWrapper")]).then(s.bind(null, "./src/reddit/components/ShortcutWrapper/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ShortcutWrapper/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, s) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
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
			const C = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.o)(e, t);
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
				if (Object(p.j)(e) || Object(b.cb)(e)) return;
				const s = C(e, t);
				if (!s) return;
				const n = Object(h.E)(e, s);
				if (!n) return;
				if (Object(b.bb)(e, {
						subredditId: n
					})) return;
				const a = e.structuredStyles.models[n];
				return a || void 0
			}), (e, t) => {
				const s = C(e, t);
				if (!s) return;
				const n = Object(h.w)(e, {
					subredditName: s
				});
				return n ? n.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(b.kb)(e).nightmode
			}, (e, t) => {
				if (!Object(b.kb)(e).hideNSFW) return !0;
				const s = C(e, t);
				if (s) {
					const t = Object(h.z)(e, {
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
				CustomIcon: "_3F4cPSBsBgzFOcnpe466x-",
				customIcon: "_3F4cPSBsBgzFOcnpe466x-",
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
						post: n,
						trackDisplay: !0
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
					isNightMode: i.S,
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
		"./src/reddit/contexts/Language.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js");
			const a = Object(n.createContext)("en")
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
						s[t.subredditName] = Object(m.z)(e, {
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
					[i.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
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
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = (e, t) => s => Object.assign({
					source: "announcement",
					noun: "announcement",
					action: "dismiss",
					liveThread: {
						id: e,
						isAnnouncement: !0
					}
				}, t && {
					announcement: {
						id: t.id,
						title: t.title,
						body: t.description || ""
					}
				}),
				a = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				r = () => e => ({
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
		"./src/reddit/helpers/trackers/shortcuts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "s", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "o", (function() {
				return p
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "l", (function() {
				return b
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "r", (function() {
				return f
			})), s.d(t, "q", (function() {
				return C
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "u", (function() {
				return P
			})), s.d(t, "t", (function() {
				return x
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "c", (function() {
				return w
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				r = (e, t) => s => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: n.post(s, t)
				}),
				o = (e, t) => s => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: n.comment(s, t)
				}),
				i = a("show_panel"),
				c = a("esc_close"),
				d = e => r("enter_open_post", e),
				l = e => o("enter_comment_collapse", e),
				m = e => r("j_next", e),
				u = e => o("j_next", e),
				p = e => r("k_previous", e),
				h = e => o("k_previous", e),
				b = e => r("n_next", e),
				g = e => r("p_previous", e),
				f = e => r("s_save", e),
				C = e => o("s_save", e),
				v = e => r("h_hide", e),
				y = e => r("x_expando", e),
				P = e => r("a_upvote", e),
				x = e => o("a_upvote", e),
				O = e => r("z_downvote", e),
				E = e => o("z_downvote", e),
				S = a("c_create_post"),
				j = e => r("l_go_to_link", e),
				w = e => o("r_comment", e);
			a("q_navigation")
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = (s("./src/polyfill.ts"), s("./src/lib/performanceTimings/index.tsx")),
				r = s("./node_modules/@r/google-tag-manager/compiled.js"),
				o = s("./src/config.ts"),
				i = s("./node_modules/history/esm/history.js"),
				c = s("./node_modules/js-cookie/src/js.cookie.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				u = s("./node_modules/react-router-redux/es/index.js"),
				p = s("./node_modules/redux-thunk/es/index.js"),
				h = s("./node_modules/request-idle-callback/index.js"),
				b = s("./src/lib/browser/isIncognito.ts"),
				g = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/extractQueryParams/index.ts"),
				C = s("./src/lib/filterQueryParams/index.ts"),
				v = s("./src/lib/getParsedUserAgent/index.ts"),
				y = s("./src/lib/initializeClient/index.tsx"),
				P = s("./src/lib/matchRoute/index.ts"),
				x = s("./src/lib/performance.js"),
				O = s("./src/lib/reCaptchaEnterprise/index.ts"),
				E = s("./src/lib/safeJSONParse/index.ts"),
				S = s("./src/reduxMiddleware/apiContext.ts"),
				j = s("./src/telemetry/index.ts"),
				w = s("./src/telemetry/models/Timer.ts"),
				k = s("./src/reddit/actions/apiRequestHeaders.ts"),
				_ = s("./src/reddit/actions/chat/toggle.ts"),
				M = s("./src/reddit/actions/chat/unreadCount.ts"),
				I = s("./src/reddit/actions/emailCollection/index.ts"),
				N = s("./src/reddit/actions/emailVerification.ts"),
				T = s("./src/reddit/actions/media.ts"),
				R = s("./src/reddit/actions/multireddit/index.ts"),
				L = s("./src/reddit/actions/notifications/loader.ts"),
				A = s("./src/reddit/actions/notifications/state.ts"),
				F = s("./src/reddit/actions/nps.ts"),
				D = s("./src/reddit/actions/platform.ts"),
				U = s("./src/reddit/actions/reCaptchaEnterprise.ts"),
				G = s("./src/reddit/actions/session.ts"),
				B = s("./src/reddit/actions/theme.ts"),
				H = s("./src/reddit/actions/toaster.ts"),
				q = s("./src/reddit/actions/users.ts"),
				W = s("./node_modules/react-redux/es/index.js"),
				V = s("./node_modules/react-router/esm/react-router.js"),
				Q = s("./node_modules/reselect/es/index.js"),
				z = (s("./src/reddit/components/Root/redesignFont.less"), s("./assets/fonts/BentonSans/font.less"), s("./assets/fonts/IBMPlexSans/font.less"), s("./assets/fonts/NotoMono/font.less"), s("./assets/fonts/NotoSans/font.less"), s("./assets/fonts/VCR/font.less"), s("./src/reddit/components/Root/index.m.less")),
				Z = s.n(z),
				K = s("./src/higherOrderComponents/makeAsync.tsx"),
				Y = s("./src/lib/loadWithRetries/index.ts"),
				J = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				X = s("./src/reddit/selectors/user.ts");
			const $ = Object(Q.c)({
					shouldEnable: e => Object(J.b)(e) || Object(X.E)(e)
				}),
				ee = Object(W.b)($),
				te = () => m.a.createElement(l.Fragment, null);
			class se extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						component: te
					}
				}
				componentWillMount() {
					this.props.shouldEnable && this.loadAdminPanel()
				}
				componentWillReceiveProps(e) {
					e.shouldEnable && se.adminPanel === te ? this.loadAdminPanel() : this.props.shouldEnable && !e.shouldEnable && this.setComponent(te)
				}
				loadAdminPanel() {
					if (se.adminPanel === te) {
						const e = Object(K.a)({
							ErrorComponent: te,
							getComponent: () => Object(Y.a)(() => s.e("AdminPanel").then(s.bind(null, "./src/reddit/components/AdminPanel/index.tsx")).then(e => e.default)),
							LoadingComponent: te
						});
						this.setComponent(e)
					}
				}
				render() {
					const e = this.state.component;
					return m.a.createElement(e, null)
				}
				setComponent(e) {
					se.adminPanel = e, this.setState({
						component: e
					})
				}
			}
			se.adminPanel = te;
			var ne = ee(se),
				ae = s("./src/lib/doubleclickForPublishers/index.ts"),
				re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				oe = s("./src/reddit/helpers/trackers/ads.ts"),
				ie = s("./src/reddit/selectors/meta.ts");
			const ce = Object(Q.c)({
				region: ie.l
			});
			class de extends m.a.Component {
				constructor(e) {
					super(e), Object(ae.f)({
						limitDataProcessing: "CA" === this.props.region,
						onRequest: () => this.props.sendEvent(Object(oe.b)()),
						onAdView: (e, t) => {
							Math.random() <= o.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(oe.c)(e, t))
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
			var le = Object(W.b)(ce)(Object(re.c)(de)),
				me = s("./src/reddit/components/AppRouter/index.tsx"),
				ue = s("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				pe = s("./src/reddit/constants/shortcuts.ts"),
				he = s("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				be = s.n(he);
			var ge = e => {
					let {
						children: t
					} = e;
					return m.a.createElement("div", {
						className: be.a.shortcutDiv,
						id: pe.b,
						tabIndex: -1
					}, m.a.Children.only(t))
				},
				fe = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Ce = s("./src/reddit/components/Header/Sparse.tsx"),
				ve = s("./src/reddit/components/ThemeProvider/index.tsx"),
				ye = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Pe = s("./src/reddit/controls/Button/index.tsx"),
				xe = s("./src/reddit/featureFlags/index.ts"),
				Oe = e => m.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 52 52"
				}, m.a.createElement("path", {
					d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
				}), m.a.createElement("path", {
					fill: "#fff",
					d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
				}), m.a.createElement("path", {
					d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
				}), m.a.createElement("path", {
					d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
				}), m.a.createElement("path", {
					d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
				}), m.a.createElement("path", {
					d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
				}), m.a.createElement("path", {
					fill: "#fff",
					d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
				}), m.a.createElement("path", {
					d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
				})),
				Ee = s("./src/reddit/pages/InternalServerError/index.m.less"),
				Se = s.n(Ee);
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), we = Object(Q.c)({
				showError: xe.d.showVerboseErrors
			}), ke = Object(W.b)(we)(e => m.a.createElement(ye.a.Provider, {
				value: !1
			}, m.a.createElement(ve.b, {
				subredditName: ""
			}, m.a.createElement("div", null, m.a.createElement(Ce.a, {
				logoHref: "#",
				logoOnClick: () => window.location.reload(!0)
			}), m.a.createElement("div", {
				className: Se.a.container
			}, m.a.createElement("div", {
				className: Se.a.mainContent
			}, m.a.createElement(Oe, {
				className: Se.a.dizzySnoo
			}), m.a.createElement("h3", {
				className: Se.a.title
			}, je._("Sorry, for some reason reddit can't be reached.", null, {
				hk: "2yRKWG"
			})), m.a.createElement("div", {
				className: Se.a.subTitle
			}, je._("Give us a few minutes to fix the problem. Sorry!", null, {
				hk: "1c7Mg0"
			})), m.a.createElement(Pe.f, {
				onClick: () => window.location.reload(!0)
			}, je._("Reload Page", null, {
				hk: "S79U1"
			})), e.showError && m.a.createElement("div", {
				className: Se.a.subTitle
			}, e.error.message)), m.a.createElement("div", {
				className: Se.a.topImageContainer
			}, m.a.createElement("img", {
				className: Se.a.image,
				src: "".concat(o.a.assetPath, "/img/error/star_pattern.png")
			})), m.a.createElement("div", {
				className: Se.a.bottomImageContainer
			}, m.a.createElement("img", {
				className: Se.a.image,
				src: "".concat(o.a.assetPath, "/img/error/half_planet.png")
			})))))));

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Me = Object(Q.c)({
					theme: e => e.themes.current
				}),
				Ie = Object(W.b)(Me, {})(e => {
					let {
						children: t,
						theme: s
					} = e;
					const n = Object(fe.a)({
						theme: s
					});
					return m.a.createElement("div", {
						className: Z.a.container,
						style: {
							"--background": n.body,
							"--canvas": n.canvas
						}
					}, t)
				});
			var Ne = e => {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: s
					} = e;
					return m.a.createElement(re.a, null, m.a.createElement(Ie, null, m.a.createElement(le, null), m.a.createElement(ne, null), m.a.createElement(ue.a, null), m.a.createElement(ge, null, m.a.createElement(t, null, m.a.createElement(V.d, {
						component: Te(s)
					})))))
				}
				return m.a.createElement(ke, {
					error: e.error
				})
			};
			const Te = e => t => m.a.createElement(me.b, _e({
				routes: e
			}, t));
			var Re = s("./src/reddit/constants/localStorage.ts"),
				Le = s("./node_modules/lodash/throttle.js"),
				Ae = s.n(Le),
				Fe = s("./src/reddit/helpers/localStorage/index.ts");
			const De = 1e3;
			class Ue extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = Ae()(() => Object(Fe.R)(this.props.storageKey, this.props.value), De)
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
			Ue.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Ge = Object(Q.a)(X.H, e => ({
				storageKey: Re.p,
				value: {},
				enabled: !e
			}));
			var Be = Object(W.b)(Ge)(Ue);
			var He = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(Be, null)),
				qe = s("./src/reddit/constants/headers.ts"),
				We = s("./src/reddit/constants/history.ts"),
				Ve = s("./src/reddit/constants/jsapiEvents.ts"),
				Qe = s("./src/reddit/constants/parameters.ts"),
				ze = s("./src/reddit/constants/screenWidths.ts"),
				Ze = s("./src/reddit/contexts/AdminEvents.ts"),
				Ke = s("./src/reddit/contexts/ApiContext.tsx"),
				Ye = s("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				Je = s("./node_modules/brcast/dist/brcast.es.js"),
				Xe = s("./src/telemetry/helpers/sendEvent.ts");
			var $e = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(Je.a)([]);
					return {
						broadcaster: t,
						middleware: s => {
							const n = s.getState();
							return (Object(J.b)(n) || Object(X.E)(n)) && (e = !0, Object(Xe.c)(t)), n => a => {
								const r = n(a),
									o = s.getState();
								if (!Object(J.b)(o)) {
									const s = Object(X.E)(o);
									e && !s ? (e = !1, Object(Xe.c)(void 0), t.setState([])) : s && !e && (t.setState([]), Object(Xe.c)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(Je.a)([]),
					middleware: () => e => t => e(t)
				}),
				et = s("./src/reddit/customMiddleware/gqlContext.ts"),
				tt = s("./node_modules/lodash/debounce.js"),
				st = s.n(tt),
				nt = s("./src/lib/domUtils/index.ts");
			const at = 30 * g.bb;
			let rt = Date.now();
			const ot = () => {
					rt = Date.now()
				},
				it = !!Object(nt.f)() && {
					passive: !0
				};
			window.addEventListener("click", ot, !1), window.addEventListener("wheel", st()(ot, 250), it), window.addEventListener("mousemove", st()(ot, 250), it), window.addEventListener("keydown", st()(ot, 250), it);
			var ct = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - rt >= at ? (e.dispatch(G.h()), ot()) : ot()
					})), e => t => e(t)
				},
				dt = s("./node_modules/lodash/pick.js"),
				lt = s.n(dt),
				mt = s("./src/reddit/actions/header.ts"),
				ut = s("./src/reddit/actions/preferences.ts"),
				pt = s("./src/reddit/constants/cookie.ts"),
				ht = s("./src/reddit/constants/preferences.ts");
			const bt = new Set([ut.f, ut.i, B.b, ut.c, ut.o, mt.d, mt.e, ut.r]);
			var gt = e => t => s => {
					const n = t(s);
					if (bt.has(s.type)) {
						const t = e.getState().user,
							s = {
								prefs: lt()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", ht.b, ht.d, ht.e]),
								language: t.language
							},
							n = new Date;
						n.setFullYear(n.getFullYear() + 2), d.a.set(pt.j, btoa(JSON.stringify(s)), {
							expires: n,
							domain: o.a.cookieDomain
						})
					}
					return n
				},
				ft = s("./src/lib/fastdom/index.ts"),
				Ct = s("./src/reddit/actions/tabBadging.ts"),
				vt = s("./src/reddit/selectors/chat.ts"),
				yt = s("./src/server/helpers/seoMetadata.tsx");
			var Pt = "undefined" != typeof document ? e => t => s => {
				const n = t(s);
				if (s.type === D.e) {
					const t = e.getState(),
						n = Object(X.G)(t),
						{
							meta: a
						} = s.payload;
					n ? ((e, t) => {
						const s = Object(X.C)(e) || 0,
							n = Object(vt.a)(e) + s;
						Object(Ct.b)(n, t)
					})(t, a.title) : ft.a.write(() => {
						document.title = a.title, Object(yt.b)(t, document)
					})
				}
				return n
			} : () => e => t => e(t);
			const xt = 5 * g.bb;
			var Ot = e => {
					const t = Ae()(() => {
						const t = e.getState().user.session,
							s = new Date(t.expires),
							n = new Date;
						s.getTime() - n.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(G.g())
					}, xt);
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
					return o.user.session && r(o.user.session), window.addEventListener("focus", a), window.addEventListener("touchend", a), document.body.addEventListener("mouseenter", a), e => t => (t.type !== G.a && t.type !== G.b && t.type !== G.c && t.type !== G.e || r(t.payload), t.type === G.d && (clearTimeout(s), s = null), e(t))
				},
				Et = s("./src/reddit/actions/page.ts"),
				St = s("./src/reddit/singleton/tracing/index.ts");
			var jt = e => e => t => {
					const s = () => e(t);
					switch (t.type) {
						case Et.b:
							return St.b.recordLocalSpan(t.type, s)
					}
					return e(t)
				},
				wt = s("./src/reddit/actions/frontpage.ts"),
				kt = s("./src/reddit/actions/pages/profileComments.ts"),
				_t = s("./src/reddit/actions/pages/profileOverview.ts"),
				Mt = s("./src/reddit/actions/pages/profilePosts.ts"),
				It = s("./src/reddit/actions/pages/search.ts"),
				Nt = s("./src/reddit/actions/pages/subreddit.ts"),
				Tt = s("./src/reddit/actions/search.ts"),
				Rt = s("./src/reddit/actions/subreddit.ts"),
				Lt = s("./src/reddit/actions/tracking.ts"),
				At = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				Ft = s("./src/reddit/helpers/history/index.ts"),
				Dt = s("./src/reddit/helpers/trackers/commentList.ts"),
				Ut = s("./src/reddit/helpers/trackers/postList.ts"),
				Gt = s("./src/reddit/helpers/trackers/screenview.ts"),
				Bt = s("./src/reddit/selectors/platform.ts"),
				Ht = s("./src/reddit/selectors/subreddit.ts"),
				qt = s("./src/reddit/helpers/routeKey/index.ts");
			var Wt = e => t => s => {
					const n = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(Lt.c({
							routeKey: t
						}))
					};
					if (s.type === D.a) {
						const n = e.getState(),
							a = (n.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							o = Object(Ht.E)(n, a) || "",
							i = (n.subreddits.about[o] || {}).advertiserCategory;
						r.trigger("pageview", Object.assign({}, lt()(s.payload.location, "pathname", "search", "hash"), {
							subreddit: a,
							advertiserCategory: i
						}));
						const c = n.platform.currentPage && n.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(qt.b)(c, n, Object(At.a)(n));
							if (e && j.c.has(e)) {
								const t = j.c.end(e);
								!Object(Bt.h)(n) && Object(Ft.b)(We.a.IsOverlay) || Object(Gt.h)(c, n, w.TimerType.UserCancelled, t)
							}
						}
						const d = s.payload.routeMatch;
						if (!d) return t(s);
						const l = Object(At.a)(n, d),
							m = Object(qt.b)(d, n, l);
						if (!m) return t(s);
						j.c.start(m)
					}
					const a = t(s);
					switch (s.type) {
						case Et.g:
						case _t.b:
						case _t.e:
						case Mt.e:
						case kt.e:
						case Nt.c: {
							const {
								key: e,
								token: t
							} = s.payload;
							t || n(e);
							break
						}
						case It.c: {
							const {
								key: e,
								tokens: t
							} = s.payload;
							t.posts || n(e);
							break
						}
						case wt.b:
						case Rt.i:
						case Mt.b: {
							const {
								key: t,
								postIds: a
							} = s.payload;
							n(t);
							const r = e.getState();
							if (a.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							Ut.j(r, t);
							break
						}
						case kt.b: {
							const {
								key: t,
								commentIds: a
							} = s.payload;
							if (n(t), a.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							Dt.a(r, t);
							break
						}
						case Tt.c: {
							const {
								key: e
							} = s.payload;
							n(e);
							break
						}
					}
					return a
				},
				Vt = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Qt = s("./src/reddit/selectors/telemetry.ts");
			const zt = e => t => Object.assign({}, Qt.defaults(t), {
				action: "leave",
				actionInfo: Qt.actionInfo(t, {
					reason: e
				}),
				noun: "app",
				source: "global"
			});
			let Zt = null;
			const Kt = () => {
				Zt && window.clearTimeout(Zt), Zt = null
			};
			var Yt = e => {
					Zt = window.setTimeout(() => {
						Kt(), Object(j.a)((e => t => Object.assign({}, Qt.defaults(t), {
							action: "view",
							noun: "heartbeat",
							source: "global",
							timer: {
								type: w.TimerType.GoodVisit,
								millis: e
							}
						}))(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", Kt)
				},
				Jt = s("./src/reddit/helpers/onBeforeRequestFactory/index.ts");
			var Xt = s("./src/lib/permanentCookieOptions.ts");
			const $t = e => {
				if (!e) return;
				const t = (d.a.get(pt.h) || "").split(",");
				if (!t.includes(e)) {
					t.unshift(e);
					const s = t.slice(0, 10).join(","),
						n = Object(Xt.a)();
					d.a.set(pt.h, s, n)
				}
			};
			var es = s("./src/reddit/layout/page/Listing/index.tsx"),
				ts = s("./src/reddit/models/Toast/index.ts"),
				ss = s("./src/reddit/reducers/index.ts"),
				ns = s("./src/reddit/routes/index.ts"),
				as = s("./src/reddit/constants/experiments.ts"),
				rs = s("./src/reddit/helpers/chooseVariant/index.ts"),
				os = s("./src/reddit/selectors/experiments/utils.ts");
			const is = Object(Q.a)(e => Object(rs.c)(e, {
					experimentEligibilitySelector: rs.a,
					experimentName: as.g,
					expEventOverride: !1
				}), os.a),
				cs = Object(Q.a)(is, e => e === as.k.Enabled),
				ds = {
					displayDelay: 15,
					displayOnRoutes: [g.yb.SUBREDDIT, g.yb.COMMENTS],
					experimentName: as.tb,
					experimentVariant: as.Cb.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				ls = e => {
					const {
						base_url: t
					} = Object(Qt.requestWithParams)(e), s = Object(Bt.b)(e), n = s && s.urlParams.partialPostId, a = s && s.urlParams.subredditName;
					return Object.assign({}, t && {
						rbl: t
					}, a && {
						s: a
					}, n && {
						p: n
					})
				},
				ms = e => {
					if ((((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return t.experimentOverrides[s] === n
						})(ds, e) || (e => {
							let {
								samplingRate: t,
								seed: s
							} = e;
							return !!s && 0 === Math.floor(s * t)
						})(ds)) && ((e, t) => {
							let {
								displayOnRoutes: s
							} = e;
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && s.includes(n)
						})(ds, e) && ((e, t) => {
							let {
								isSEOOnly: s
							} = e;
							return !s || t.meta.isSessionSeo
						})(ds, e) && ((e, t) => {
							let {
								experimentName: s,
								experimentVariant: n
							} = e;
							return Object(rs.c)(t, {
								experimentName: s,
								experimentEligibilitySelector: rs.a
							}) === n
						})(ds, e)) return {
						displayDelay: ds.displayDelay,
						externalVars: ls(e)
					}
				};
			var us = s("./src/reddit/singleton/EventSystem.ts"),
				ps = s("./src/reddit/actions/global.ts");
			Object(a.e)(a.b.EntryPointStart);
			const hs = Object(S.a)({
					actionDispatchers: {
						reddaidReceived: q.s,
						loidReceived: q.q,
						sessionTrackerReceived: q.x
					},
					authHeaders: {
						[qe.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: q.d,
						loidReceived: q.b,
						sessionTrackerReceived: q.k,
						userAuthenticated: G.c,
						userLoggedOut: G.d,
						userReauthenticated: G.e,
						headersReceived: k.a
					},
					onBeforeRequestFactory: Jt.a,
					statsAppName: g.k.Redesign
				}),
				bs = Object(et.a)(hs.apiContext),
				gs = $e();
			let fs;
			Object(y.a)({
				reducers: ss.a,
				routes: ns.a,
				apiContext: hs.apiContext,
				gqlContext: bs.gqlContext,
				appFactory: (e, t) => m.a.createElement(Ze.a.Provider, {
					value: gs.broadcaster
				}, m.a.createElement(Ke.a.Provider, {
					value: {
						apiContext: hs.apiContext,
						gqlContext: bs.gqlContext
					}
				}, m.a.createElement(Ye.b, null, m.a.createElement(Ne, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(He, null)))),
				appName: g.k.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const s = fs;
						if (!s) return;
						s.dispatch(Object(D.k)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), s.dispatch(Object(D.j)())
							}
						}))
					}
				}),
				customMiddleware: [p.a.withExtraArgument({
					routes: ns.a,
					apiContext: hs.apiContext,
					gqlContext: bs.gqlContext
				}), gs.middleware, ct, hs.middleware, bs.middleware, Ot, gt, jt, Wt, Pt],
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
					loading: m.a.createElement(es.a, {
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
							const t = o.a.mediaUrl;
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(T.f)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: "t3_".concat(e.data.id36)
							}))
						}), cs(n.getState()) && window.addEventListener("beforeunload", () => {
							const e = n.getState();
							((e, t) => {
								navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
									command: e,
									payload: t
								})
							})("sendV2Event", zt("tab_closed")(e))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || n.dispatch(Object(D.g)());
					const a = Object(X.S)(n.getState());
					n.dispatch(Object(B.c)({
						nightmode: a
					}));
					const r = (e => e.tracing.traceId)(n.getState());
					if (r && (e => Object(rs.c)(e, {
							experimentEligibilitySelector: rs.a,
							experimentName: as.s
						}) === as.z.Enabled)(n.getState())) {
						St.b.enableTracing(!0);
						const e = St.b.createTraceFromId(r);
						St.b.setParent(e)
					}
					n.dispatch(Object(D.h)(s));
					t.listen((e, t) => {
						const a = Object(P.a)(Object(i.e)(e), s);
						n.dispatch(Object(D.i)(e, t, a))
					});
					const c = n.getState(),
						{
							currentPage: d
						} = c.platform;
					if (d) {
						const e = [];
						Object(Bt.i)(c) && e.push(Qe.d), e.length > 0 && n.dispatch(Object(u.c)(Object(C.a)(d.url, e)))
					}
					return Vt.a.initialize(), {
						localStorageData: Object(Fe.p)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: i,
						serverDocumentLength: c,
						store: d,
						localStorageData: l
					} = e;
					fs = d;
					t.listen((e, t) => {
						const s = d.getState(),
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
							i = Object(Ht.E)(s, o) || "";
						$t(i), us.a.publish(Ve.c, r, document)
					});
					const m = d.getState(),
						u = (m.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						p = Object(Ht.E)(m, u) || "",
						y = (m.subreddits.about[p] || {}).advertiserCategory;
					r.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: o.a.gtmContainerId,
						payload: {
							user: m.user.account ? m.user.account.id : m.user.loid.loid
						}
					}), r.trigger("pageview", {
						subreddit: u,
						advertiserCategory: y
					}), d.dispatch(Object(ps.b)({
						localStorageData: l
					})), window.addEventListener("load", () => {
						const e = d.getState(),
							{
								currentPage: r
							} = e.platform,
							o = (r.urlParams.subredditName || "").toLowerCase(),
							i = Object(Ht.E)(e, o) || "";
						if ($t(i), r && r.meta) {
							const t = r.meta.name;
							if (Object(j.b)(g.k.Redesign, {
									page: t,
									type: "rum"
								}), Object(v.c)(e.meta.userAgent) && window.innerWidth > ze.b) {
								const s = Object(a.f)(c);
								x.a && x.a.timing && St.b.isEnabled && (St.b.recordPerformanceTimings("".concat(t, "_time_to_first_byte"), x.a.timing.fetchStart, x.a.timing.responseStart), St.b.recordPerformanceTimings("".concat(t, "_time_to_interactive"), x.a.timing.fetchStart, x.a.timing.domInteractive));
								const n = [],
									r = {
										isLoggedIn: Object(X.H)(e),
										name: t,
										statsdPathsForExperiments: n
									};
								Object(a.g)(r, s)
							}
							const s = x.a.timing.domInteractive - x.a.timing.navigationStart;
							Object(Gt.h)(r.routeMatch, d.getState(), w.TimerType.Initial, s);
							const o = Object(f.a)(window.location.href);
							Object(E.a)(o.get(Qe.u)) && d.dispatch(Object(H.e)({
								kind: ts.b.SuccessCommunity,
								text: n.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), o.get(Qe.v) && (d.dispatch(Object(N.a)(o.get(Qe.v))), history.replaceState(history.state, "", Object(C.a)(window.location.href, [Qe.v])));
							let i = !1;
							if ((Object(Ft.b)(We.a.JustLoggedIn) || o && o.get(Qe.n) && Object(E.a)(o.get(Qe.n))) && (d.dispatch(Object(H.e)({
									text: n.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), i = !0, Object(Ft.c)(We.a.JustLoggedIn), history.replaceState(history.state, "", Object(C.a)(window.location.href, [Qe.n]))), Object(Ft.b)(We.a.JustLoggedOut) && (i = !0, Object(Ft.c)(We.a.JustLoggedOut)), Object(A.b)(e), !1 !== Fe.z() && Object(L.a)().then(e => e.requestNotificationsPermissions).then(e => d.dispatch(e(i, !1))), t === g.yb.MULTIREDDIT && r.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = r.routeMatch.match.params;
								d.dispatch(Object(R.h)({
									multiredditName: e,
									username: t
								}))
							}
							d.dispatch(Object(I.c)())
						}
						Object(X.H)(d.getState()) && (d.dispatch(Object(M.d)()), d.dispatch(Object(_.c)())), Object(h.requestIdleCallback)(async () => {
							d.dispatch(Object(F.d)()), await Object(b.a)() && (e => Object(j.a)(Object.assign({}, Qt.defaults(e), {
								source: "global",
								action: "view",
								noun: "empty"
							})))(d.getState());
							const e = async () => {
								const e = d.getState(),
									t = ms(e);
								t && (await (async e => {
									return (await Object(Y.a)(() => s.e("UserZoomIntegration").then(s.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), n && n())
							}, n = t.listen((t, s) => {
								"POP" !== s && e()
							});
							e()
						}), cs(d.getState()) && document.addEventListener("visibilitychange", () => {
							"visible" !== document.visibilityState && Object(j.a)(zt("tab_backgrounded")(d.getState()))
						}), Object(ie.i)(d.getState()) && Yt(d.getState)
					}), window.history.scrollRestoration = "manual", us.a.attachStore(d), d.dispatch(Object(U.b)(O.a.PageLoad))
				},
				raven: {
					tags: {
						project: g.k.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/models/EmailSettings/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
				}(n || (n = {}))
		},
		"./src/reddit/models/Sso/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Apple = "https://appleid.apple.com", e.Google = "https://accounts.google.com"
				}(n || (n = {}))
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("CollectionCommentsPage")]).then(s.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("CommentsPage")]).then(s.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("FramedGild~GildModal"), s.e("FramedGild")]).then(s.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
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
		"./src/reddit/routes/geotagging/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/actions/pages/topic.ts"),
				o = s("./src/reddit/selectors/topic.ts");
			const i = "/label/subreddits",
				c = Object(n.a)({
					resolved: {},
					chunkName: () => "Geotagging",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Geotagging~Topic"), s.e("Geotagging")]).then(s.bind(null, "./src/reddit/pages/Geotagging/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/Geotagging/index.tsx"
					}
				}),
				d = {
					action: e => async (e, t, s) => {
						let n, {
							gqlContext: a
						} = s; {
							const e = t();
							if (Object(o.a)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							n = await Object(r.g)(a(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1
							})
						} catch (c) {
							return void e(Object(r.i)())
						}
						if (!n) return;
						const i = t();
						e(Object(r.j)(Object.assign({}, n, {
							key: "tagging",
							meta: i.meta
						})))
					},
					chunk: a.o.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: a.yb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = d
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
		"./src/reddit/routes/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/routes/collectionCommentsPage/index.ts"),
				a = s("./src/reddit/routes/acknowledgements/index.ts"),
				r = s("./src/reddit/routes/appeal/index.ts"),
				o = s("./src/reddit/routes/coins/index.ts"),
				i = s("./src/reddit/routes/coinsMobile/index.ts"),
				c = s("./src/reddit/routes/commentsPage/index.ts"),
				d = (s("./node_modules/@loadable/component/dist/loadable.esm.js"), s("./src/lib/constants/index.ts"));
			s("./src/reddit/actions/page.ts");
			var l = [],
				m = s("./node_modules/react-router-redux/es/index.js"),
				u = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				h = s("./src/reddit/helpers/trackers/emailVerification.ts"),
				b = s("./src/reddit/models/EmailSettings/index.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/telemetry/index.ts"),
				C = s("./src/reddit/actions/emailVerification.ts");
			var v = {
					action: e => async (t, s) => {
						await t(u.z());
						const n = s(),
							a = e.params.verificationToken,
							r = e.queryParams && e.queryParams.source;
						if (r && Object(f.a)(Object(h.b)(r)(n)), !Object(g.H)(n)) return Object(p.a)(t, n);
						const o = await t(Object(C.b)(a));
						o === b.a.Success && Object(f.a)(Object(h.d)()(n)), t(Object(m.c)("/?verifiedEmail=".concat(o)))
					},
					chunk: d.o.EMPTY,
					exact: !0,
					meta: {
						name: d.yb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				y = s("./src/lib/addQueryParams/index.ts");
			var P = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							queryParams: r
						} = e;
						await t(Object(m.c)(Object(y.a)("/", r)))
					},
					chunk: d.o.EMPTY,
					exact: !0,
					meta: {
						name: d.yb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [d.o.COMMENTS_PAGE, d.o.FRONTPAGE]
				},
				x = s("./src/reddit/routes/framedGild/index.ts"),
				O = s("./src/reddit/routes/framedModal/index.ts"),
				E = s("./src/reddit/routes/frontpage/index.ts"),
				S = s("./src/reddit/routes/geotagging/index.ts"),
				j = s("./src/reddit/routes/inbox/index.ts"),
				w = s("./src/reddit/routes/meta/index.ts"),
				k = s("./src/reddit/routes/moderationPages/index.ts"),
				_ = s("./src/reddit/routes/modListing/index.ts"),
				M = s("./src/reddit/routes/modQueue/index.ts"),
				I = s("./src/reddit/routes/multireddit/index.ts"),
				N = s("./src/reddit/routes/postCreation/constants.ts");
			const T = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(m.c)("/"))
				},
				chunk: d.o.EMPTY,
				exact: !0,
				meta: {
					name: d.yb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var R = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(m.c)(N.b))
					},
					chunk: d.o.EMPTY,
					exact: !0,
					meta: {
						name: d.yb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...T],
				L = s("./src/reddit/routes/postCreation/index.ts"),
				A = s("./src/reddit/routes/postDraft/index.ts"),
				F = s("./src/reddit/routes/premium/index.ts"),
				D = s("./src/reddit/routes/profileComments/index.ts"),
				U = s("./src/reddit/endpoints/me/index.ts");
			var G = {
					action: e => async (t, s, n) => {
						let {
							apiContext: a
						} = n;
						const {
							rest: r
						} = e.params, {
							queryParams: o
						} = e, i = await Object(U.a)(a());
						if (!(i.ok && i.body && i.body.account)) {
							const e = s();
							return void Object(p.a)(t, e)
						}
						const c = i.body.account.displayText,
							d = r ? "/user/".concat(c, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(r)) : "/user/".concat(c, "/"),
							l = Object(y.a)(d, o);
						await t(Object(m.c)(l))
					},
					chunk: d.o.EMPTY,
					exact: !0,
					meta: {
						name: d.yb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				B = s("./src/reddit/routes/profileModSettings/index.ts"),
				H = s("./src/reddit/routes/profileOverview/index.ts"),
				q = s("./src/reddit/routes/profilePosts/index.ts"),
				W = s("./src/reddit/routes/profilePrivate/index.ts");
			var V = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/").concat((e => e.endsWith("/") ? e : "".concat(e, "/"))(n)) : "/user/".concat(s, "/"), o = Object(y.a)(r, a);
						await t(Object(m.c)(o))
					},
					chunk: d.o.EMPTY,
					exact: !0,
					meta: {
						name: d.yb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Q = s("./src/reddit/routes/profileSnoobuilder/index.ts");
			var z = {
					action: e => async t => {
						const {
							profileName: s,
							rest: n
						} = e.params, {
							queryParams: a
						} = e, r = n ? "/user/".concat(s, "/posts/").concat(n) : "/user/".concat(s, "/posts"), o = Object(y.a)(r, a);
						t(Object(m.c)(o))
					},
					chunk: d.o.EMPTY,
					exact: !0,
					meta: {
						name: d.yb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				Z = s("./src/reddit/routes/publicAccessNetwork/index.ts"),
				K = s("./src/reddit/routes/report/index.ts"),
				Y = s("./src/reddit/routes/searchResults/index.ts"),
				J = s("./src/reddit/routes/settings/index.ts");
			var X = [{
					action: e => async t => {
						const {
							page: s
						} = e.params, n = s && "blocked" === s ? "/settings/privacy" : "/settings/";
						await t(Object(m.c)(n))
					},
					chunk: d.o.EMPTY,
					meta: {
						name: d.yb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(m.c)("/settings/profile"))
					},
					chunk: d.o.EMPTY,
					meta: {
						name: d.yb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				$ = s("./src/reddit/routes/subreddit/index.ts"),
				ee = s("./src/reddit/routes/subredditCreation/index.ts"),
				te = s("./src/reddit/routes/subredditLeaderboard/index.ts"),
				se = s("./src/reddit/routes/subredditWiki/index.ts"),
				ne = s("./src/reddit/routes/topic/index.ts");
			const ae = [a.a, r.a, o.a, i.a, G, V, z, ...n.a, ...c.a, v, ...E.a, S.a, F.a, x.a, O.a, L.a, A.a, ...R, P, ...w.a, I.a, M.a, _.c, j.a, D.a, B.a, H.a, q.a, Q.a, W.a, Z.a, ...J.a, ...X, Y.a, ...se.a, ne.a, $.a, ee.a, te.a, k.a, K.a, ...l];
			t.a = ae
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
					path: ["/community-points/", "/vault/", "/web/community-points/"]
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
						importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~MembershipPaywallPage"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("GovernanceTransferPointsModal~MembershipPaywallPage"), s.e("MembershipPaywallPage")]).then(s.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~ModQueuePages"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), s.e("ChatPost~ModQueuePages"), s.e("ModQueue~ModQueuePages"), s.e("ModQueuePages")]).then(s.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("ModerationPages")]).then(s.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested);
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~Multireddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), s.e("Multireddit")]).then(s.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("PostDraft")]).then(s.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("ProfileComments")]).then(s.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					importAsync: () => Promise.all([s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("ProfileModeration")]).then(s.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("ProfileOverview")]).then(s.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfilePosts")]).then(s.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("ProfilePrivate")]).then(s.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested);
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("ProfilePosts~ProfileSnoobuilder"), s.e("ProfileSnoobuilder")]).then(s.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested);
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
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~PublicAccessNetwork"), s.e("LiveVideoPlayer~PublicAccessNetwork"), s.e("PublicAccessNetwork")]).then(s.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
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
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
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
					importAsync: () => Promise.all([s.e("vendors~SearchResults"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("SearchResults")]).then(s.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
						importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~851e9c33"), s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("Settings~reddit-components-ProfileIdCard"), s.e("Settings")]).then(s.bind(null, "./src/reddit/pages/Settings/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit"), s.e("Frontpage~Subreddit~SubredditWiki"), s.e("Subreddit")]).then(s.bind(null, "./src/reddit/pages/Subreddit/index.tsx")),
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
					importAsync: () => Promise.all([s.e("CrowdControlModal~ProfileModeration~Settings~SubredditCreation"), s.e("SubredditCreation~SubredditInlineEditing"), s.e("SubredditCreation")]).then(s.bind(null, "./src/reddit/pages/SubredditCreation/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("Frontpage~Subreddit~SubredditWiki"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("IdCard~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
						const r = await Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~SubredditWiki"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("Frontpage~Subreddit~SubredditWiki"), s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("IdCard~SubredditWiki"), s.e("SubredditWiki")]).then(s.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested);
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~Moderat~cabdb502"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"), s.e("Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"), s.e("Geotagging~Topic"), s.e("Topic")]).then(s.bind(null, "./src/reddit/pages/Topic/index.tsx")),
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
					action: r.k,
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
				return m
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/config.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/reddit/constants/accountManager.ts"),
				i = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				d = s("./src/reddit/selectors/experiments/sso.ts"),
				l = s("./src/reddit/selectors/responsiveSettings.ts");
			const m = e => e.accountManagerModalData.actionSource,
				u = e => e.accountManagerModalData.redirectUrl,
				p = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, m, c.a, d.d, l.a, (e, t, s, a, c, l) => {
					let m = "".concat(n.a.accountManagerOrigin).concat(e);
					if (a && (m = Object(r.a)(m, {
							[i.Q]: a,
							uiMode: t
						})), c) {
						const e = Object(d.a)(c) || c;
						m = Object(r.a)(m, {
							[i.I]: e
						})
					}
					return l && (m = Object(r.a)(m, {
						mweb_responsive_settings: "treatment"
					})), e === o.b.Index || e === o.b.ChangePassword ? m : m = Object(r.a)(m, {
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
				return Object(r.E)(e) || n.w.Treatment1 === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.o
				})
			}
		},
		"./src/reddit/selectors/experiments/sso.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return h
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/Settings/modalIds.ts"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/activeModalId.ts"),
				c = s("./src/reddit/selectors/experiments/utils.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = Object(n.a)(e => Object(o.c)(e, {
					experimentName: r.I,
					experimentEligibilitySelector: e => !Object(d.G)(e)
				}), c.a),
				m = e => e === r.N.SSO,
				u = Object(n.a)(e => Object(o.c)(e, {
					experimentName: r.J,
					experimentEligibilitySelector: e => Object(d.G)(e) || Object(d.H)(e)
				}), c.a),
				p = Object(n.a)(u, e => e === r.C.SSO),
				h = Object(n.a)(i.a, e => !!e && [a.b, a.d, a.e, a.f].includes(e))
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => Object(r.E)(e) || !(n.rc.Holdout === Object(a.c)(e, {
				experimentEligibilitySelector: a.a,
				experimentName: n.oc
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
			const r = e => n.uc.All === Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.tc
				}),
				o = ["gwinnett", "broomfield", "bakersfield", "northampton", "newjersey", "mankato", "statenisland", "brampton", "gnv", "inlandempire", "lincoln", "alameda", "abbotsford", "montana", "juneau", "barrie", "newhampshire", "lascruces", "williamsport", "charlotte", "fortwayne", "collinsbeach", "desmoines", "minnesota", "metaquebec", "berkeley", "ohio", "joplinmo", "westchester", "pueblo", "virginia", "oregon", "fortworth", "houston", "washington", "cincinnati", "florenceal", "cedarrapids", "detroit", "bowlinggreen", "greeley", "ames", "newarkohio", "fortcollins", "kingstonontario", "santafe", "fargomoorhead", "daytonabeach", "wilmingtonde", "berkeleyca", "redmond", "panamacity", "maine", "texarkana", "hawaii", "idaho", "edmonton", "hillsboro", "timmins", "everett", "america", "boulder", "humboldt", "coachellavalley", "bayridge", "antelopevalley", "plano", "frisco", "stcharlesmo", "nwt", "rochester", "orlando", "triangle", "guelph", "lehighvalley", "daltonga", "escondido", "lancaster", "hollandmichigan", "peoriail", "asheville", "ventura", "eastside", "orangecounty", "nebraska", "stgeorge", "santabarbara", "kamloops", "algonquinpark", "tahoe", "marin", "tampa", "ozarks", "arlington", "chattanooga", "benicia", "fremont", "elkgrove", "kenosha", "milton", "longmont", "logan", "augusta", "clarksville", "pei", "grandcanyon", "airdrie", "sanjose", "southernillinois", "greenbay", "boston", "cary", "victoriabc", "tempe", "mississippi", "halifax", "destin", "lafayette", "delaware", "dtla", "twincitiessocial", "pflugerville", "harrisonburg", "durango", "cascadia", "albuquerque", "minneapolis", "macon", "corpus", "laredo", "kentwa", "redding", "arkansas", "anaheim", "mobileal", "newyork", "norfolk", "santamonica", "fresno", "somerville", "idahofalls", "indianapolis", "tallahassee", "renton", "lexington", "austin", "ontario", "nyc", "sudbury", "illinois", "puyallupwa", "evanston", "bend", "fairbanks", "westchesterpa", "denver", "readingpa", "venturacounty", "aspen", "keywest", "lakewood", "brownsville", "peterborough", "richmondhill", "staugustine", "moncton", "santaclarita", "huntingtonbeach", "pacifica", "greenville", "roseville", "albany", "southdakota", "waco", "salem", "nwi", "cleveland", "kzoo", "biloxi", "hudsonvalley", "scottsdale", "normanok", "longisland", "kitsap", "yakima", "reno", "beaverton", "medicinehat", "vancouverwa", "salemma", "westvirginia", "southbend", "wisconsin", "lawrence", "seattle", "columbiasc", "columbusga", "roanoke", "texas", "toledo", "brooklyn", "murfreesboro", "rockland", "atlanta", "corpuschristi", "delco", "yellowstone", "bloomington", "corvallis", "vermont", "joshuatree", "vancouver", "jacksonhole", "myrtlebeach", "modesto", "bentonville", "grandforks", "eau_claire", "toronto", "springfieldil", "memphis", "fargo", "siouxfalls", "denton", "stpetersburgfl", "nunavut", "johnstown", "springfieldmo", "quadcities", "durham", "pennsylvania", "southjersey", "spartanburg", "northdakota", "321", "asburypark", "california", "stlouis", "burlington", "seattlewa", "syracuse", "chicago", "fortlauderdale", "ithaca", "twinfalls", "moab", "bloomingtonnormal", "hiltonhead", "riverside", "saginaw", "fayettenam", "maui", "losangeles", "providence", "whistler", "corona", "reddeer", "glendale", "montgomerycountymd", "vancouverisland", "montco", "olympia", "nola", "littlerock", "bronx", "coloradosprings", "vegas", "niagara", "broward", "napa", "springfield", "santarosa", "newbrunswicknj", "columbus", "rhodeisland", "fortmcmurray", "san_angelo", "porttownsend", "yuma", "pasadena", "milwaukee", "ogden", "riograndevalley", "clemson", "tacoma", "camaswashington", "regina", "cypresstx", "novascotia", "plattsburgh", "bullcity", "omaha", "lakeland", "dayton", "auburn", "newhaven", "vaughan", "martinsburg", "maryland", "siliconvalley", "newmexico", "pickering", "hamptonroads", "collegestation", "rolla"]
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.gild.selectedAward
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
			})), s.d(t, "c", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts");
			const a = e => !r(e) && !!e.user.prefs.subscriptionsPinned,
				r = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.yb.MODERATION_PAGES),
				o = e => e.user.prefs.reduceAnimationsFromAwards
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a", "vendors~Chat~Governance~Reddit", "vendors~Governance~Reddit", "vendors~Reddit", "Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34", "Chat~Governance~Reddit", "Governance~Reddit", "ModListing~Reddit"]
	]
]);
//# sourceMappingURL=Reddit.c57fe61fb653d016c16d.js.map