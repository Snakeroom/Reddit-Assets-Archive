// https://www.redditstatic.com/desktop2x/Reddit.8a4915df57b57c77927a.js
// Retrieved at 5/15/2023, 7:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/RedditSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
		"./assets/fonts/redesignIcon2020/redesignFont2020.css": function(e, t, n) {},
		"./src/lib/activeUserCountByLiveChatId/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = 3e5;

			function r() {
				let e;
				return function(t, n) {
					return e && clearTimeout(e), e = setTimeout(t, n)
				}
			}
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			const r = 120 * s.nb;
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
						return !e || e <= r
					}
				})()), e
			}
		},
		"./src/lib/constants/colors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = {
				alien500: "#3690ea",
				alien600: "#006dc6",
				berry300: "#e4abff",
				berry500: "#b44ac0",
				berry600: "#9c3cac",
				mango500: "#ffd635",
				mango600: "#ff6600",
				mint600: "#009eaa",
				narwhal100: "#f1f23f5",
				narwhal200: "#e9ebed",
				narwhal300: "#d4d7d9",
				narwhal600: "#989ca0",
				narwhal700: "#898d90",
				orangeRed600: "#fb133a",
				orangeRed700: "#be0039",
				orca50: "#5a5c5e",
				orca200: "#464748",
				orca300: "#3a3a3a",
				orca600: "#242424",
				orca700: "#1E1E1E",
				periwinkle300: "#94b3ff",
				periwinkle500: "#6a5cff",
				periwinkle600: "#5349da",
				sakura500: "#ff3881",
				error: "#ea0027",
				white: "#ffffff",
				black: "#000000",
				nightTone1: "#282829",
				nightTone2: "#343536",
				nightTone3: "#3A3A3C",
				nightTone4: "#D8DADC",
				nightTone5: "#1A232C",
				nightTone6: "#29292A"
			}
		},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/lib/isSimpleClick/index.ts": function(e, t, n) {
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
		"./src/lib/pubsub/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class s {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e) {
					this.listenerMap[e] || (this.listenerMap[e] = []);
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					this.listenerMap[e].push(...n)
				}
				removeListeners(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const r = n.length,
						a = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - a === r
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/lib/safeBadgeUpdate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/throwDevError.ts");
			const r = e => {
				const t = null === window || void 0 === window ? void 0 : window.navigator;
				if (t && "setAppBadge" in t && "clearAppBadge" in t) {
					(e >= 0 ? t.setAppBadge(e) : t.clearAppBadge()).catch(e => Object(s.a)(e))
				}
			}
		},
		"./src/reddit/actions/alpha.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts");
			var i = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: d.pb.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			const p = e => async (t, n, s) => {
				let {
					apiContext: d
				} = s;
				(await
					function(e) {
						return Object(r.a)(Object(a.a)(e, [o.a]), {
							endpoint: `${e.apiUrl}/api/leave_redesign_beta`,
							method: "post",
							type: "json"
						})
					}(d())).ok ? (Object(i.b)(), await m(d(), !0), e && window.location.reload()) : (m(d(), !1), t(Object(c.f)({
					kind: l.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, n) => {
				let {
					apiContext: c
				} = n;
				Object(i.a)(),
					function(e) {
						Object(r.a)(Object(a.a)(e, [o.a]), {
							endpoint: `${e.apiUrl}/api/join_redesign_beta`,
							method: "post",
							type: "json"
						}).then(() => {
							const {
								pathname: e,
								search: t
							} = window.location, n = `${s.a.redditUrl}${e}${t}`;
							window.location.replace(n)
						})
					}(c())
			}
		},
		"./src/reddit/actions/economics/econManagement/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_SUCCESS",
				r = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_FAILED",
				a = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_STARTED",
				o = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_SUCCESS",
				i = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_FAILED",
				c = "ECON_MANAGEMENT_FETCH_ASSOCIATED_DATA_SUCCESS",
				l = "ECON_MANAGEMENT_FETCH_REDDITOR_INFO_SUCCESS",
				d = "ECON_MANAGEMENT_FETCH_VAULT_INFO_SUCCESS",
				u = "ECON_MANAGEMENT_UNLINK_VAULT_SUCCESS"
		},
		"./src/reddit/actions/economics/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return w
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "g", (function() {
				return L
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/config.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/lib/makeRequest/index.ts"),
				u = n("./src/redditGQL/operations/EconAdminPanelQuery.json"),
				m = n("./src/redditGQL/operations/GiveCoins.json"),
				p = n("./src/redditGQL/operations/PerformEconAdminAction.json"),
				b = n("./src/redditGQL/operations/RedditorsInfoByIds.json"),
				h = n("./src/redditGQL/operations/RemoveCoins.json"),
				g = n("./src/reddit/endpoints/governance/requester.ts");
			var f = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/routes/econManagement/index.ts"),
				O = n("./src/reddit/selectors/econManagement.ts"),
				C = n("./src/reddit/selectors/user.ts");
			const y = Object(s.a)(a.c),
				E = Object(s.a)(a.b),
				x = Object(s.a)(a.g),
				_ = Object(s.a)(a.h),
				j = Object(s.a)(a.f),
				P = Object(s.a)(a.a),
				S = Object(s.a)(a.d),
				k = Object(s.a)(a.e),
				N = Object(s.a)(a.i),
				w = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = t(),
						a = Object(C.m)(r);
					if (a && a.isEmployee) try {
						const t = await (async e => {
							const t = await Object(l.a)(e, {
								...u,
								variables: {
									query: "",
									queryName: "getEntityTypes"
								}
							});
							if (!t.ok) throw new Error("Unable to update the preferred achievement flair");
							const n = t.body.data.econAdminPanel.response;
							return JSON.parse(n)
						})(s());
						e(y(t))
					} catch (i) {
						e(E()), e(Object(o.f)({
							duration: o.a,
							kind: f.b.Error,
							text: i.message
						}))
					}
				}, M = e => async (t, n, s) => {
					let {
						gqlContext: a,
						apiContext: d
					} = s;
					const m = n(),
						p = Object(C.m)(m);
					if (!p || !p.isEmployee) return;
					if ("undefined" != typeof window) {
						const t = `?${v.b}=${e}`;
						window.history.pushState({
							path: t
						}, "", t)
					}
					let h;
					t(x());
					try {
						h = await (async (e, t) => {
							const n = await Object(l.a)(e, {
								...u,
								variables: {
									query: JSON.stringify({
										entityRef: t
									}),
									queryName: "getEntity"
								}
							});
							if (!n.ok) throw new Error(`Unable to fetch ${t}`);
							const s = n.body.data.econAdminPanel.response;
							return JSON.parse(s)
						})(a(), e), t(_(h))
					} catch (y) {
						r.c.captureException(y), t(j()), t(Object(o.f)({
							duration: o.a,
							kind: f.b.Error,
							text: y.message
						}))
					}
					try {
						const e = await (async (e, t) => {
							var n;
							const s = await Object(l.a)(e, {
								...b,
								variables: {
									ids: [t]
								}
							});
							if (!s.ok) throw new Error(`Unable to fetch ${t} redditor info`);
							return null === (n = s.body.data.redditorsInfoByIds) || void 0 === n ? void 0 : n[0]
						})(a(), h.entityId);
						t(S(e))
					} catch (y) {
						r.c.captureException(y), t(Object(o.f)({
							duration: o.a,
							kind: f.b.Error,
							text: y.message
						}))
					}
					const O = await
					function(e, t) {
						return Object(g.a)(e, {
							method: c.pb.GET,
							endpoint: `${i.a.metaUrl}/private/wallet/${t}`
						})
					}(d(), h.entityId);
					if (O.ok) {
						const {
							addresses: e
						} = O.body;
						t(k(e))
					}
				}, I = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const a = n(),
						i = Object(C.m)(a);
					if (!i || !i.isEmployee) return;
					const c = Object(O.b)(a);
					if (c) try {
						const n = await (async (e, t, n) => {
							const s = await Object(l.a)(e, {
								...u,
								variables: {
									query: JSON.stringify({
										contextEntityRef: t,
										entityType: n
									}),
									queryName: "getEntitiesBelongingTo"
								}
							});
							if (!s.ok) throw new Error(`Unable to fetch ${n} data for ${t}`);
							const r = s.body.data.econAdminPanel.response;
							return JSON.parse(r)
						})(r(), c.prefixedId, e);
						t(P({
							entity: n,
							type: e
						}))
					} catch (d) {
						t(Object(o.f)({
							duration: o.a,
							kind: f.b.Error,
							text: d.message
						}))
					}
				}, T = (e, t, n) => async (s, r, a) => {
					let {
						gqlContext: i
					} = a;
					var c;
					const d = r(),
						u = Object(C.m)(d);
					if (u && u.isEmployee && Object(O.b)(d)) try {
						await (async (e, t, n, s) => {
							const r = s ? {
								params: s
							} : {};
							if (!(await Object(l.a)(e, {
									...p,
									variables: {
										input: {
											name: n,
											args: JSON.stringify({
												entityRef: t,
												...r
											})
										}
									}
								})).ok) throw new Error(`Unable to perform ${n} on ${t} with ${JSON.stringify(r)}`)
						})(i(), e, t, n), s(Object(o.f)({
							duration: o.a,
							kind: f.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}));
						const r = null === (c = d.platform.currentPage) || void 0 === c ? void 0 : c.queryParams[v.b];
						r && s(M(r))
					} catch (m) {
						s(Object(o.f)({
							duration: o.a,
							kind: f.b.Error,
							text: m.message
						}))
					}
				}, A = (e, t) => async (n, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = s(),
						c = Object(C.m)(i);
					if (c && c.isEmployee) try {
						const s = await (async (e, t, n) => {
							const s = await Object(l.a)(e, {
								...m,
								variables: {
									input: {
										redditorId: t,
										amount: n
									}
								}
							});
							if (!Object(d.c)(s)) throw new Error(`Could not give ${n} coins to ${t}`);
							return s.body.data.giveCoins
						})(a(), e, t);
						n(Object(o.f)({
							duration: o.a,
							kind: f.b.SuccessAward,
							text: `Gave ${t} coins to ${e}. New balance: ${s.newBalance}.`
						}))
					} catch (u) {
						n(Object(o.f)({
							duration: o.a,
							kind: f.b.Error,
							text: u.message
						}))
					}
				}, R = (e, t) => async (n, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = s(),
						c = Object(C.m)(i);
					if (c && c.isEmployee) try {
						const s = await (async (e, t, n) => {
							const s = await Object(l.a)(e, {
								...h,
								variables: {
									input: {
										redditorId: t,
										amount: n
									}
								}
							});
							if (!Object(d.c)(s)) throw new Error(`Could not remove ${n} coins from ${t}`);
							return s.body.data.removeCoins
						})(a(), e, t);
						n(Object(o.f)({
							duration: o.a,
							kind: f.b.SuccessAward,
							text: `Removed ${t} coins from ${e}. New balance: ${s.newBalance}.`
						}))
					} catch (u) {
						n(Object(o.f)({
							duration: o.a,
							kind: f.b.Error,
							text: u.message
						}))
					}
				}, L = (e, t, n) => async (s, r, a) => {
					let {
						apiContext: l
					} = a;
					const d = r(),
						u = Object(C.m)(d);
					if (u && u.isEmployee) try {
						await
						function(e, t, n, s) {
							return Object(g.a)(e, {
								method: c.pb.POST,
								endpoint: `${i.a.metaUrl}/private/unlink/${t}/${n}?address=${s}`
							})
						}(l(), e, t, n), s(N()), s(Object(o.f)({
							duration: o.a,
							kind: f.b.SuccessCommunityGreen,
							text: "Successfully unlinked vault"
						}))
					} catch (m) {
						s(Object(o.f)({
							duration: o.a,
							kind: f.b.Error,
							text: m.message
						}))
					}
				}
		},
		"./src/reddit/actions/economics/marketplace/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");

			function r(e) {
				for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
				return function() {
					for (var t = arguments.length, s = new Array(t), r = 0; r < t; r++) s[r] = arguments[r];
					const a = e(...s);
					return n.forEach(e => e(a, ...s)), a
				}
			}
			var a = n("./src/reddit/actions/economics/marketplace/constants.ts"),
				o = n("./src/reddit/helpers/localStorage/index.ts");
			const i = Object(s.a)(a.e),
				c = Object(s.a)(a.d),
				l = r(Object(s.a)(a.b), e => {
					let {
						payload: {
							id: t,
							maxViews: n
						}
					} = e;
					Object(o.kb)({
						id: t,
						eventViews: (n + 1).toString(),
						lastInteractionTimestamp: (new Date).getTime().toString()
					})
				}),
				d = r(Object(s.a)(a.c), e => {
					let {
						payload: {
							id: t
						}
					} = e;
					const n = Object(o.B)();
					Object(o.kb)({
						id: t,
						eventViews: (n.id === t ? n.eventViews : 0).toString(),
						lastInteractionTimestamp: (new Date).getTime().toString()
					})
				}),
				u = r(Object(s.a)(a.f), e => {
					let {
						payload: {
							id: t
						}
					} = e;
					const n = Object(o.B)();
					Object(o.kb)({
						id: t,
						eventViews: (n.id === t ? n.eventViews + 1 : 0).toString(),
						lastInteractionTimestamp: (new Date).getTime().toString()
					})
				}),
				m = Object(s.a)(a.a)
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				a = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(i.a)(c.a),
				d = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						d = n();
					if (!d.economics.me.fetched || i && !d.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(o.a)(e, {
								method: "get",
								endpoint: `${a.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(r(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						a = n.economics.me.data;
					if (!a) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(d());
						const t = `https://${a.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(r.b)({
								endpoint: t,
								method: s.pb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/emailCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/once.js"),
				r = n.n(s),
				a = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				l = n("./src/reddit/components/Settings/modalIds.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = r()(d.d),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.z)()), Object(u.a)(t()) && e(Object(o.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(d.c)(), e(Object(o.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(a.g)(l.h))
				}
		},
		"./src/reddit/actions/emailVerification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/EmailSettings/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, r) => {
				let {
					apiContext: a
				} = r;
				switch (e) {
					case l.a.Success:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case l.a.AlreadyVerified:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case l.a.WrongUser:
						return void t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, m = e => async (t, n, s) => {
				let {
					apiContext: c
				} = s;
				const d = await ((e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
					method: r.pb.POST,
					endpoint: `${e.apiUrl}/api/v1/verify_email/${t}`,
					data: {}
				}))(c(), e);
				if (d.ok && d.body && d.body.success) return l.a.Success;
				switch (d.body.reason) {
					case l.a.AlreadyVerified:
						return l.a.AlreadyVerified;
					case l.a.WrongUser:
						return l.a.WrongUser;
					default:
						return l.a.Error
				}
			}
		},
		"./src/reddit/actions/framedGild/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/actions/gold/modals.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = e => async (t, n) => {
				const i = n(),
					c = e.params.thingId;
				t(Object(s.c)({
					correlationId: Object(a.d)(a.a.GildingFlow),
					thingId: c
				})), Object(o.S)(i) || await t(r.s());
				const l = n();
				if (!Object(o.S)(l)) return t(Object(s.f)())
			}
		},
		"./src/reddit/actions/framedModal/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => async (e, t) => {
				const n = t();
				Object(r.S)(n) || await e(s.s());
				const a = t();
				if (!Object(r.S)(a)) throw new Error("Failed to login")
			}
		},
		"./src/reddit/actions/gold/powerups.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/actions/login.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = () => async (e, t) => {
				const n = t();
				return Object(o.m)(n) ? e(Object(r.h)(a.a.ACHIEVEMENT_FLAIR)) : e(Object(s.openLoginModal)())
			}
		},
		"./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/env/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/sentry/index.ts"),
				o = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				l = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: l.a
				}
			});
			const d = Object(r.a)(i.s);
			class SpecialEventsError extends Error {
				constructor() {
					super(...arguments), this.response = null
				}
			}
			const u = () => async (e, t, n) => {
				let {
					gqlContext: r
				} = n;
				try {
					const t = await Object(o.b)(r());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(d(n))
					}
				} catch (i) {
					Object(s.b)() || console.error(i), a.c.withScope(e => {
						var t, n;
						e.setExtra("response", i.response), e.setExtra("status", null === (t = i.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = i.response) || void 0 === n ? void 0 : n.error), a.c.captureException(i)
					})
				}
			}
		},
		"./src/reddit/actions/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return _
			}));
			var s = n("./src/lib/cache/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeRequest/index.ts"),
				c = n("./src/lib/pageTitle/index.ts"),
				l = n("./src/reddit/actions/happeningNow/constants.ts"),
				d = n("./src/reddit/actions/platform.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/redditGQL/operations/GetIsLiveContentAvailable.json");
			var p = n("./src/reddit/reducers/features/happeningNow/index.ts"),
				b = n("./src/reddit/selectors/platform.ts"),
				h = n("./src/reddit/selectors/user.ts");
			Object(a.a)({
				features: {
					happeningNow: p.a
				}
			});
			const g = Object(o.a)(l.f),
				f = Object(o.a)(l.d),
				v = Object(o.a)(l.e),
				O = Object(o.a)(l.g),
				C = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = await (e => Object(u.a)(e, m))(s());
					if (!Object(i.c)(r)) return;
					const a = t();
					if (!!!r.body.data.isLiveContentAvailable) return;
					const o = Date.now();
					Object(b.h)(a) && e(f(o)), e(v(o));
					const c = Object(h.k)(a);
					c && !E(c) && e(O(!0))
				}, y = e => Object(s.c)(r.s.HAPPENING_NOW, r.A.HAPPENING_NOW_LIVE_CONTENT_AVAILABILITY_TOOLTIP_DISMISSED, e), E = e => {
					const t = y(e);
					return !!Object(s.b)(t)
				}, x = () => async (e, t) => {
					const n = t(),
						r = Object(h.k)(n);
					if (r && !E(r)) {
						const e = y(r);
						Object(s.d)(e, !0, s.a)
					}
				}, _ = () => async (e, t) => {
					e(d.n({
						title: c.g()
					})), e(f(Date.now()))
				}
		},
		"./src/reddit/actions/pages/avatar/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				o = n("./src/reddit/actions/economics/marketplace/index.ts"),
				i = n("./src/reddit/actions/login.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/config.ts"),
				d = n("./src/lib/avatarShareImages.ts"),
				u = n("./src/lib/pageTitle/index.ts");
			var m = n("./src/lib/makeGqlRequest/index.ts"),
				p = n("./src/lib/makeRequest/index.ts"),
				b = n("./src/lib/sentry/index.ts"),
				h = n("./src/redditGQL/operations/AvatarListingById.json"),
				g = n("./src/redditGQL/operations/GetArtistById.json"),
				f = n("./src/redditGQL/operations/GetDynamicLayout.json");
			const v = async e => {
				var t, n;
				try {
					const s = await Object(m.a)(e, {
						...f
					});
					if (Object(p.c)(s)) {
						const e = null === (n = null === (t = s.body.data.avatarStorefront) || void 0 === t ? void 0 : t.layout) || void 0 === n ? void 0 : n.layoutJson;
						return e ? JSON.parse(e) : null
					}
					return null
				} catch (s) {
					return b.c.captureException(s), null
				}
			};
			var O = n("./src/reddit/endpoints/redditor/index.ts");
			var C = async (e, t) => {
				const n = await Object(O.a)(e, {
					name: t
				});
				return n ? await (async (e, t) => {
					var n, s, r, a;
					try {
						const o = await Object(m.a)(e, {
							...g,
							variables: {
								id: t
							}
						});
						if (Object(p.c)(o)) {
							return (null === (a = null === (r = null === (s = null === (n = o.body.data.avatarStorefront) || void 0 === n ? void 0 : n.artists) || void 0 === s ? void 0 : s.edges) || void 0 === r ? void 0 : r[0]) || void 0 === a ? void 0 : a.node) || null
						}
						return null
					} catch (o) {
						return b.c.captureException(o), null
					}
				})(e, n) : null
			};
			var y = e => {
				var t;
				return (null === (t = null == e ? void 0 : e.profile) || void 0 === t ? void 0 : t.title) || (null == e ? void 0 : e.displayName)
			};
			var E = e => {
				let {
					categoryId: t,
					layout: n
				} = e;
				const s = (null == n ? void 0 : n.sections) || [];
				for (let r = 0; r < s.length; r++) {
					const e = s[r];
					if ("categoriesRow" === e.type) {
						const n = e.body.content.find(e => e.id === t);
						if (n) return {
							title: n.title,
							description: n.description,
							image: n.image
						}
					}
					if (e.id === t) return {
						title: e.body.title
					}
				}
				return null
			};
			var x = async e => {
				let {
					gqlContext: t,
					routeData: n
				} = e;
				var s, r, a, o, i, g, f, O, x, _, j;
				let P = Object(u.a)(),
					S = (() => c.fbt._("Build your own custom Reddit avatar with a signature look, gear, and accessories that show off your personality.", null, {
						hk: "1x3tTT"
					}))(),
					k = "https://i.redd.it/snoovatar/snoo_assets/runways/_3HgI2eMIEU_opengraph_link_preview_default_v2.png";
				const N = `${l.a.redditUrl}${n.url}`;
				switch (n.path) {
					case "/avatar/shop/category/:categoryId": {
						const e = await v(t),
							s = E({
								layout: e,
								categoryId: n.params.categoryId
							});
						(null == s ? void 0 : s.title) && (P = c.fbt._("{categoryName} - Collectible Avatars on Reddit", [c.fbt._param("categoryName", s.title)], {
							hk: "3S2oMO"
						})), (null == s ? void 0 : s.description) && (S = c.fbt._("{categoryDescription}", [c.fbt._param("categoryDescription", s.description)], {
							hk: "30GSvd"
						})), (null == s ? void 0 : s.image) && (k = s.image);
						break
					}
					case "/avatar/shop/categories/:sectionId": {
						const e = await v(t),
							a = null === (s = null == e ? void 0 : e.sections) || void 0 === s ? void 0 : s.find(e => {
								let {
									id: t
								} = e;
								return n.params.sectionId === t
							});
						(null === (r = null == a ? void 0 : a.body) || void 0 === r ? void 0 : r.title) && (P = c.fbt._("{sectionTitle} - Collectible Avatars on Reddit", [c.fbt._param("sectionTitle", a.body.title)], {
							hk: "2vlWnX"
						})), S = c.fbt._("Browse available collectibles, learn more about the creators, and set up your Reddit Vault so you can start your collection.", null, {
							hk: "45n9na"
						});
						break
					}
					case "/avatar/shop/product/:listingId": {
						const e = await (async (e, t) => {
								var n, s, r, a;
								try {
									const o = await Object(m.a)(e, {
										...h,
										variables: {
											id: t
										}
									});
									if (Object(p.c)(o)) {
										return (null === (a = null === (r = null === (s = null === (n = o.body.data.avatarStorefront) || void 0 === n ? void 0 : n.listings) || void 0 === s ? void 0 : s.edges) || void 0 === r ? void 0 : r[0]) || void 0 === a ? void 0 : a.node) || null
									}
									return null
								} catch (o) {
									return b.c.captureException(o), null
								}
							})(t, n.params.listingId),
							s = y(null === (a = null == e ? void 0 : e.artist) || void 0 === a ? void 0 : a.redditorInfo);
						(null === (i = null === (o = null == e ? void 0 : e.item) || void 0 === o ? void 0 : o.nft) || void 0 === i ? void 0 : i.title) && s && (P = c.fbt._("{collectibleName} by {artistName} - Collectible Avatars on Reddit", [c.fbt._param("collectibleName", e.item.nft.title), c.fbt._param("artistName", s)], {
							hk: "qSlRH"
						})), (null === (f = null === (g = null == e ? void 0 : e.item) || void 0 === g ? void 0 : g.nft) || void 0 === f ? void 0 : f.description) && (S = c.fbt._("{collectibleDescription}", [c.fbt._param("collectibleDescription", e.item.nft.description)], {
							hk: "4gQsRm"
						})), (null === (_ = null === (x = null === (O = null == e ? void 0 : e.item) || void 0 === O ? void 0 : O.images) || void 0 === x ? void 0 : x[0]) || void 0 === _ ? void 0 : _.url) && (k = e.item.images[0].url);
						break
					}
					case "/avatar/shop/artist/:artistDisplayName": {
						const e = await C(t, n.params.artistDisplayName),
							s = null == e ? void 0 : e.redditorInfo,
							r = y(s);
						r && (P = c.fbt._("{artistName} - Collectible Avatars on Reddit", [c.fbt._param("artistName", r)], {
							hk: "4bMg1j"
						})), (null === (j = null == s ? void 0 : s.profile) || void 0 === j ? void 0 : j.publicDescriptionText) ? S = c.fbt._("{artistDescription}", [c.fbt._param("artistDescription", s.profile.publicDescriptionText)], {
							hk: "4ljzVS"
						}) : r && (S = c.fbt._("Check out available collectibles made by {artistName}, learn more about them, and set up your Reddit Vault so you can start your collection.", [c.fbt._param("artistName", r)], {
							hk: "aqjuX"
						}));
						break
					}
					case "/avatar/shop/artists":
						P = c.fbt._("Creators of Collectible Avatars on Reddit", null, {
							hk: "2oP7Rl"
						}), S = c.fbt._("Learn more about the creators, see what collectibles are available, and set up your Reddit Vault so you can start your collection.", null, {
							hk: "2w3abk"
						});
						break;
					case "/avatar/shop/gallery":
						P = c.fbt._("Shop Collectible Avatars on Reddit", null, {
							hk: "47rJb8"
						}), S = c.fbt._("Check out available collectibles, learn more about the creators, and set up your Reddit Vault so you can start your collection.", null, {
							hk: "IsCNd"
						});
						break;
					case "/avatar/:username/:avatarId": {
						const {
							username: e,
							avatarId: t
						} = n.params;
						P = c.fbt._("Check out this avatar by {prefixed username}", [c.fbt._param("prefixed username", "u/" + e)], {
							hk: "4icz0Q"
						}), k = Object(d.a)(t);
						break
					}
				}
				return {
					title: P,
					description: S,
					image: k,
					url: N
				}
			};
			t.a = e => async (t, n, c) => {
				let {
					gqlContext: l
				} = c;
				const d = await x({
					routeData: e,
					gqlContext: l()
				});
				t(Object(s.n)({
					title: d.title
				})), t(Object(o.c)(d)), await t(Object(r.s)()), Object(a.S)(n()) || t(Object(i.openLoginModal)())
			}
		},
		"./src/reddit/actions/pages/econManagement.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/economics/econManagement/index.ts"),
				a = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				await e(Object(o.s)());
				const n = t(),
					l = Object(c.S)(n),
					d = Object(c.P)(n);
				l && d || await e(Object(s.c)("/")), e(Object(a.n)({
					title: "Econ control panel"
				})), await e(Object(r.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/econManagement2.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			n("./src/reddit/actions/economics/econManagement/index.ts");
			t.a = () => async (e, t) => {
				await e(Object(o.s)());
				const n = t(),
					l = Object(c.S)(n),
					d = Object(c.P)(n);
				l && d || await e(Object(r.c)("/")), e(Object(a.n)({
					title: s.fbt._("Econ control panel", null, {
						hk: "3DJjYu"
					})
				}));
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				a = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(a.n)({
					title: Object(s.d)()
				})), Object(i.S)(t()) || await e(Object(o.s)()), await e(Object(r.b)()).then(() => {
					if (t().economics.me.data) return e(Object(r.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/noGasPage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.n)({
					title: Object(s.i)()
				}))
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				r = n("./src/reddit/actions/economics/helpers/async.ts"),
				a = n("./src/reddit/actions/pages/subreddit.ts"),
				o = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t().platform.currentPage;
				if (n && n.routeMatch && n.routeMatch.match) {
					const l = (n.routeMatch.match.params || {}).subredditName;
					if (l) {
						const n = [],
							d = t();
						Object(c.S)(d) || n.push(e(Object(o.s)()));
						const u = Object(s.a)(l, null);
						n.push(e(Object(a.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.I)(t(), l);
						await e(Object(r.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/recap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/recap/constants.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/PersonalizedYearInReview.json");
			var i = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const l = Object(s.a)(r.f),
				d = Object(s.a)(r.e),
				u = Object(s.a)(r.d),
				m = Object(s.a)(r.k),
				p = Object(s.a)(r.j),
				b = Object(s.a)(r.i),
				h = (Object(s.a)(r.h), Object(s.a)(r.g), () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					var r, m;
					const p = t();
					if (!Object(c.S)(p)) return Object(i.a)(e, p);
					e(l());
					const b = await (async (e, t) => {
						return await Object(a.a)(e, {
							...o,
							variables: t
						})
					})(s(), {});
					if (!b.ok) {
						const t = b.error;
						return void e(u({
							error: t
						}))
					}
					const h = b.body,
						g = ((null === (m = null === (r = null == h ? void 0 : h.data) || void 0 === r ? void 0 : r.personalizedYearInReview) || void 0 === m ? void 0 : m.cards) || []).map((e, t) => ({
							...e,
							id: `wrapped_reddit${t}`
						}));
					e(d({
						cards: g
					}))
				}),
				g = Object(s.a)(r.c),
				f = Object(s.a)(r.l),
				v = Object(s.a)(r.b),
				O = Object(s.a)(r.a)
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/comment/authoring.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/trackers/lightbox.ts"),
				d = n("./src/reddit/helpers/trackers/shortcuts.ts"),
				u = n("./src/reddit/selectors/accountManager/modalData.ts"),
				m = n("./src/reddit/selectors/activeModal.ts"),
				p = n("./src/reddit/selectors/gild.ts"),
				b = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = n("./src/reddit/actions/shortcuts/utils.ts");
			const g = [b.v, b.p, e => !!Object(p.d)(e)],
				f = (e, t) => async (n, p, b) => {
					let {
						apiContext: f
					} = b;
					const v = p();
					for (const e of g)
						if (e(v)) return;
					const O = document.activeElement,
						C = v.shortcuts.activeCommentId,
						y = Object(h.c)(v),
						E = Object(m.b)(v),
						x = Object(u.a)(v),
						_ = [a.a.NsfwBlockingModal].includes(x),
						j = [i.a.NSFW_BLOCKING_MODAL_V2].includes(E),
						P = _ || j;
					if (O && "true" === O.contentEditable && C && y) n(r.b({
						parentCommentId: C,
						commentsPageKey: y
					})), Object(h.a)(C);
					else if (E && !P) Object(h.b)(c.b), n(Object(a.i)(E));
					else if (v.toaster[0]) Object(h.b)(c.b), n(Object(o.g)(v.toaster[0].id));
					else if (v.shortcuts.namespace === c.d.Lightbox && v.platform.currentPage) {
						const e = v.platform.currentPage.locationState.closeLocation;
						e && (Object(h.b)(c.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: S
					} = v.shortcuts;
					e(t && S ? l.b(S, "close", !0) : d.a)
				}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const r = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				a = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				o = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				l = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				d = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				CloseButton: "_1ryinm9ofYAx_k9dpdCbpq",
				closeButton: "_1ryinm9ofYAx_k9dpdCbpq",
				Close: "_14dkERGUnSwisNWFcFX-0T",
				close: "_14dkERGUnSwisNWFcFX-0T",
				mModalUpdate: "_65PqClMblfoNGy-m9_49f"
			}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/helpers.ts"),
				d = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/actions/nsfwBlocking/async.tsx"),
				h = n("./src/reddit/actions/preferences.ts"),
				g = n("./src/lib/makeActionCreator/index.ts"),
				f = n("./src/reddit/actions/sso/constants.ts");
			const v = Object(g.a)(f.a),
				O = Object(g.a)(f.b);
			var C = n("./src/reddit/actions/survey/index.ts"),
				y = n("./src/reddit/actions/toaster.ts"),
				E = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/accountManager.ts"),
				_ = n("./src/reddit/constants/history.ts"),
				j = n("./src/reddit/constants/modals.ts"),
				P = n("./src/reddit/constants/parameters.ts"),
				S = n("./src/reddit/helpers/counters/amModalDesignUpdate.ts"),
				k = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				N = n("./src/reddit/helpers/history/index.ts"),
				w = n("./src/reddit/helpers/sessionStorage/index.ts"),
				M = n("./src/reddit/helpers/trackers/blockingInterstitial.ts"),
				I = n("./src/reddit/helpers/trackers/onboarding.ts"),
				T = n("./src/reddit/icons/svgs/Close/index.tsx"),
				A = n("./src/reddit/models/Sso/index.ts"),
				R = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/selectors/accountManager/index.ts"),
				F = n("./src/reddit/selectors/accountManager/modalData.ts"),
				D = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				B = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				G = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				U = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				H = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				q = n("./src/reddit/selectors/experiments/survey.ts"),
				W = n("./src/reddit/selectors/telemetry.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				z = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				Q = n.n(z);
			const Z = m.a.iframe("IFrame", Q.a),
				K = m.a.button("CloseButton", Q.a),
				J = m.a.wrapped(T.a, "Close", Q.a),
				X = Object(c.c)({
					accountManagerSrc: L.a,
					actionSource: F.a,
					frontpageSignupVariant: G.a,
					isAmModalDesignUpdateEnabled: B.a,
					isBlockingInterstitialEnabled: U.b,
					isBlockingInterstitialV2Enabled: U.c,
					isBlurredPreview: H.b,
					isCommentBeforeSignUpEnabled: D.a,
					isDismissSurveyEnabled: q.a,
					isHardBlockingInterstitialEnabled: U.d,
					isLoggedIn: V.S,
					isRegularOnboardingEnabled: D.b,
					redirectUrl: F.b
				}),
				Y = Object(i.b)(X, (e, t) => ({
					onDismissSignupTrigger: () => e(Object(C.d)()),
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(W.o)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(k.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(h.z)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(v({
							linkedIdentity: n
						})), e(Object(p.g)(s)), e(Object(y.f)(Object(y.e)(t, R.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(O({
							linkedIdentity: n
						})), e(Object(p.g)(s)), e(Object(y.f)(Object(y.e)(t, R.b.SuccessCommunity)))
					},
					openNsfwModal: () => e(Object(b.a)()),
					showToast: (t, n) => {
						e(Object(y.f)(Object(y.e)(t, n)))
					}
				})),
				$ = e => {
					let {
						data: t,
						origin: n
					} = e;
					return t && t.success && (t.type === x.a.ChangePassword || t.type === x.a.Close || t.type === x.a.CreateAccount || t.type === x.a.GoogleOneTapDisplayed || t.type === x.a.GoogleOneTapFlowFailed || t.type === x.a.GoogleOneTapSkipped || t.type === x.a.Login || t.type === x.a.PreferenceStatus || t.type === x.a.Register || t.type === x.a.Resize || t.type === x.a.ShowStep || t.type === x.a.SSOLinkFail || t.type === x.a.SSOLinkSuccess || t.type === x.a.SSOUnlinkFail || t.type === x.a.SSOUnlinkSuccess || t.type === x.a.Subscribe || t.type === x.a.TwoFactorChanged) && n === s.a.accountManagerOrigin
				},
				ee = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class te extends o.a.Component {
				constructor() {
					var e;
					super(...arguments), e = this, this.iframeRef = o.a.createRef(), this.isAccountCreated = !1, this.isSignupModalDismissed = !1, this.isSignupModalSuccessful = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
						iframeStyles: {}
					}, this.focusFirstVisibleIframeInput = () => {
						try {
							if (!this.iframeRef.current) return;
							const e = this.iframeRef.current.contentWindow ? this.iframeRef.current.contentWindow.document : this.iframeRef.current.contentDocument;
							if (!e) return;
							const t = e.querySelector('input:not([type="hidden"])');
							t && t.focus()
						} catch (e) {}
					}, this.handleLinkSSOSuccess = e => {
						const t = e === A.a.Apple ? j.a.LINK_APPLE_SSO : j.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(r.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === A.a.Apple ? j.a.UNLINK_APPLE_SSO : j.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(r.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), e, t)
					}, this.setIframeStyles = e => {
						this.setState(t => ({
							iframeStyles: {
								...t.iframeStyles,
								...e
							}
						}))
					}, this.isOneTapSession = () => this.props.path === x.c.GoogleOneTap, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && $(e))
							if (t.type === x.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === x.a.Close) this.closedByUser();
						else if (t.type === x.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === x.a.Login) this.onLogIn();
						else if (t.type === x.a.ChangePassword) this.onChangePassword();
						else if (t.type === x.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === x.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === x.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === x.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === x.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === x.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === x.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === x.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === x.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === x.a.ShowStep ? this.onShowStep(t.step) : t.type === x.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp()
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== p.a.Reply && Object(w.a)(), this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(N.a)(_.b.JustLoggedIn, !0), this.isOneTapSession() ? this.redirectTo(window.location.href) : window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = () => {
						const {
							redirectUrl: e
						} = this.props;
						let t = "";
						t = e || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== p.a.Reply && Object(w.a)(), this.redirectTo(t, !0)
					}, this.onShowStep = e => {
						this.currentStep = e, (e === x.b.Subscribe || this.props.isAmModalDesignUpdateEnabled && this.props.path === x.c.GoogleOneTap && e === x.b.SelectAccount) && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || r.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), R.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(r.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), R.b.SuccessCommunity) : this.props.showToast(r.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), R.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = function(t) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						const s = {
							[P.t]: "true"
						};
						n && (e.props.isCommentBeforeSignUpEnabled ? e.props.isRegularOnboardingEnabled && (s[P.C] = "true") : s[P.C] = "true"), e.isSignupModalSuccessful && (s[P.D] = "true"), e.isOneTapSession() && (s[P.u] = "true"), window.location.replace(Object(d.a)(t, s))
					}, this.closedByUser = () => {
						const {
							actionSource: e,
							isBlockingInterstitialEnabled: t,
							isBlockingInterstitialV2Enabled: n,
							isBlurredPreview: s,
							isCommentBeforeSignUpEnabled: r,
							isDismissSurveyEnabled: a,
							onDismissSignupTrigger: o,
							openNsfwModal: i,
							sendEvent: c
						} = this.props;
						if (this.currentStep) {
							const e = ee[this.currentStep];
							e && c(Object(I.A)(e))
						}
						s && e === p.a.NsfwBlockingModal && i(), this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), (t || n) && e !== p.a.NsfwBlockingModal && c(Object(M.a)()), r && Object(w.a)(), this.close(), this.isSignupModalDismissed && a && o()
					}, this.close = () => {
						this.props.onClose && this.props.onClose(), this.props.isAmModalDesignUpdateEnabled && Object(S.b)(S.a.Dismiss);
						try {
							sessionStorage.removeItem("data"), sessionStorage.removeItem("initialData")
						} catch (e) {}
						this.isAccountCreated && this.onSignUp()
					}, this.isLoaded = !1, this.onIFrameLoad = e => {
						this.currentStep = null, this.isLoaded ? (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						}), this.props.onChange && this.props.onChange()) : this.isLoaded = !0
					}, this.isSignupSurveyTriggerSource = () => {
						const {
							actionSource: e
						} = this.props;
						return e && p.l.includes(e)
					}
				}
				componentDidMount() {
					const {
						actionSource: e,
						exposeIFrameElement: t,
						oniFrameLoaded: n,
						setRef: s
					} = this.props;
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						n(this.iframeRef.current, e), this.focusFirstVisibleIframeInput()
					}, s && s(this.iframeRef), t && t(this.iframeRef.current)), this.props.isBlurredPreview && this.props.actionSource === p.a.NsfwBlockingModal && Object(l.a)(), window.addEventListener("message", this.onMessage)
				}
				componentDidUpdate(e) {
					this.props.path !== e.path && e.path === x.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
						height: void 0,
						visibility: void 0,
						width: void 0
					})
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage), this.props.isBlurredPreview && this.props.actionSource === p.a.NsfwBlockingModal && Object(l.b)()
				}
				render() {
					const {
						accountManagerSrc: e,
						actionSource: t,
						className: n,
						isAmModalDesignUpdateEnabled: s,
						isHardBlockingInterstitialEnabled: r,
						path: a
					} = this.props, {
						iframeStyles: i
					} = this.state, c = (a === x.c.Index || a === x.c.Register) && (t === p.a.UserProfile || t === p.a.FeedPost || t === p.a.Comments || t === p.a.FeedScroll || t === p.a.CommentsScroll) && r, l = this.props.showCloseButton && !c;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Z, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: i,
						onLoad: this.onIFrameLoad
					}), l && o.a.createElement(K, {
						onClick: this.closedByUser
					}, o.a.createElement(J, {
						className: Object(u.a)({
							[Q.a.mModalUpdate]: s
						})
					})))
				}
			}
			t.a = Y(Object(E.c)(te))
		},
		"./src/reddit/components/AccountManagerModal/index.m.less": function(e, t, n) {
			e.exports = {
				Overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				IframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				iframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				small: "FBb4FZ4ng7CvLYrT6LBdp",
				ssoConfirmPassword: "_3CQoZKhSqrJrbOGJxp03DS",
				mResponsive: "_2CwLGmlfoqlHFJcOwm0RS-",
				linkActionSSOFail: "_1ALB_4jSDt6vPeELvg9lKL",
				linkActionSsoFail: "_1ALB_4jSDt6vPeELvg9lKL",
				mModalUpdate: "_13CJU7HQst3ucS6l2fTwdh",
				mGoogleOneTap: "_15Lh8Q9iPGbXdxumHm8cT9",
				mHiddenOverlay: "_233XfOVq91N_ugGQDBb_OT"
			}
		},
		"./src/reddit/components/AlertBanner/Wrapper.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "GfthJQJvWCHdUoMi6YjYa",
				wrapper: "GfthJQJvWCHdUoMi6YjYa"
			}
		},
		"./src/reddit/components/AlertBanner/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/AppRouter/index.m.less": function(e, t, n) {
			e.exports = {
				header: "cx1ohrUAq6ARaXTX2u8YN",
				showDeprecated: "_378Md-M6pOqwzEiV3lAwYk",
				showFPR: "_2P-zXcOfggYIWnL3EfXUHP",
				showFpr: "_2P-zXcOfggYIWnL3EfXUHP",
				showSuspended: "_3o7sV2ySJ76-f1ktwzclmi",
				offline: "_1OVuPhC0s89CZodD5qWMWP",
				navExperiment: "_32g3BKfzA1V3Y0eaczZbYl",
				overlayContentWrapper: "_2DJXORCrmcNpPTSq0LqL6i",
				mIsCommentsLightbox: "_26pbaCw90eAC80WRqUfICJ",
				mIsLargeCommentsLightbox: "_2zCdbqYzIDmabv-Dk_ILKk",
				overlayWrapper: "_2mIbM_6nl-2OnOGEbEMRXa",
				main: "_1nxEQl5D2Bx2jxDILRHemb",
				mShowingPaddedPinnedDescriptions: "_3x1dyL19KnZ4kI6i9TlRp4",
				removeTopPadding: "_33N4WmnRV24-NLLnXKccj3",
				pinnedSubscriptions: "zoWOQnp55WuhEugRSwfw1",
				inline: "_2aHCVoJEFfwy05xpKqUif2",
				withUpsell: "_1kFzDy0hQVq-CvguZsCcmV",
				lightboxHeaderWrapper: "_3obgdFz00GvpqpuX8QCsNK",
				lightboxHeaderWrapperExp: "_1k5guql3KcBJzH7i7UCr7Y",
				bottomAdContainer: "_2SL_DAWw1V6pxZysgrdeBe",
				sidebarFooter: "_2AJ0ZwpZtFJ10GdcU0CUew",
				sidebarFooterWithAd: "_1ht98h5gXjzYhFyRZgB0Pv",
				bottomSpacer: "_14-8KVF3BKuTNsLNWcOG2X",
				showEmailCollectionBanner: "_25N7Qd1z8aRQYtQhjEFyTC",
				overlayScrollContainer: "_29IbETWb5VVDcfk_-GumWz",
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym",
				popupContainer: "_13Vg6OZEIy5AcJ_DOw6jK0",
				offlineBanner: "_1C1Dn0NhEGQkEA9tDGKKSH"
			}
		},
		"./src/reddit/components/BackToSubreddit/index.m.less": function(e, t, n) {
			e.exports = {
				backToSubreddit: "_3aAvvioBKBNnlJqKytAVAd",
				innerContainer: "_3aVffPeM6Nkqs7D0RJ5FBs",
				back: "_17MxNCYEMmDof9NnT6ffxl",
				title: "_2VB8YvVdvxx0h0VGYVrpBX",
				subredditIcon: "_2Aw3HO2EUDcP7F481ZxyYl",
				content: "uhMLc-O1VODjzminrp8py"
			}
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					className: t,
					isActive: n,
					showEmpty: s,
					unreadCount: i,
					testId: l
				} = e;
				return n ? r.a.createElement("span", {
					className: Object(a.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: s || i < 1
					}),
					"data-testid": l
				}, s || i < 1 ? "" : Object(o.b)(i)) : null
			}
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const a = () => null;
			t.a = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(r.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class l extends r.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: r,
							dialogId: a
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (a && r(), !1)
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
					return r.a.createElement(o.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(a.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(o.i)(l))
		},
		"./src/reddit/components/Carousel/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ChangeUsernameModals/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameModals").then(n.bind(null, "./src/reddit/components/ChangeUsernameModals/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameModals/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameTooltip").then(n.bind(null, "./src/reddit/components/ChangeUsernameTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameTooltip/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Object(o.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PremiumPurchaseModal"), n.e("CoinPurchaseModal")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(a.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: d
				});
			Object(c.b)(l.a.ECON_COIN_PURCHASE, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				l = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(o.a)(e => {
				let {
					className: t,
					...n
				} = e;
				return r.a.createElement(i.a, d({}, n, {
					className: Object(a.a)(l.a.horizontalVotes, t),
					scoreClassName: Object(a.a)(l.a.customScoreStyles, n.scoreClassName),
					downvoteClassName: Object(i.b)(n) ? l.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/CreateAccountSection/index.m.less": function(e, t, n) {
			e.exports = {
				divider: "_2Dj4y3V6eat21HkRlbaeqL",
				createTitle: "_2FBcfa5LIJrKSNuRAA7WWa",
				createDesc: "_2gHNfZLuOuUSh3Ppfyc0JX",
				createButton: "_2XQ3s48lqlzodYPpT2s-Iu"
			}
		},
		"./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "ClaimFreeAwardModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ClaimFreeAwardModal").then(n.bind(null, "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx"
				}
			});
			Object(o.b)(i.a.ECON_CLAIM_FREE_AWARD_MODAL, e => a.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "GoldTargetedOfferModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx"
				}
			});
			Object(o.b)(i.a.ECON_COIN_PACKAGE_OFFER, e => a.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = () => Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), n.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), n.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), n.e("MarketplaceClaimModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx")),
				l = Object(s.a)(c, {
					ssr: !1
				});
			Object(o.b)(i.a.ECON_MARKETPLACE_CLAIM, e => a.a.createElement(l, {
				onClose: e
			}))
		},
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/ConfirmDismissModal.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/ConfirmUserActionModal/index.tsx");
			const {
				fbt: o
			} = n("./node_modules/fbt/lib/FbtPublic.js"), i = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return r.a.createElement(a.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: o._("Dismiss this collectible?", null, {
						hk: "22tGas"
					}),
					modalText: o._("Be sure, because you won't be able to claim this collectible later.", null, {
						hk: "1nu92h"
					}),
					cancelActionText: o._("Yes, Dismiss", null, {
						hk: "JKrSO"
					}),
					actionText: o._("Go Back", null, {
						hk: "4ckZOO"
					}),
					withOverlay: !0
				})
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "EconPowerupsFlairModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EconPowerupsFlairModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx"
				}
			});
			Object(o.b)(i.a.ACHIEVEMENT_FLAIR, e => a.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_3kFZWXar5EkIAbiKLZxwKw"
			}
		},
		"./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-CancelPredictionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-CancelPredictionModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx"
				}
			});
			Object(o.b)(i.a.ECON_PREDICTIONS_CANCEL_PREDICTION, () => a.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-ChangePredictionOutcomeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-ChangePredictionOutcomeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx"
				}
			});
			Object(o.b)(i.a.ECON_PREDICTIONS_CHANGE_OUTCOME, () => a.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-EndTimeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-EndTimeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx"
				}
			});
			Object(o.b)(i.a.ECON_PREDICTIONS_CHANGE_END_TIME, () => a.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-PremiumModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Premium~reddit-components-Econ-Prediction-PremiumModal"), n.e("reddit-components-Econ-Prediction-PremiumModal")]).then(n.bind(null, "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx"
				}
			});
			Object(o.b)(i.a.ECON_PREDICTIONS_PREMIUM_UPSELL, () => a.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EconTopAwardersModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("EconTopAwardersModal")]).then(n.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/TopAwardersModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(o.b)(i.a.ECON_TOP_AWARDERS, e => a.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EditCommunityDescriptionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EditCommunityDescriptionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EditCommunityDescriptionModal").then(n.bind(null, "./src/reddit/components/EditCommunityDescriptionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EditCommunityDescriptionModal/index.tsx"
				}
			});
			Object(o.b)(i.a.EDIT_DESCRIPTION_MODAL, e => a.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "EmailCollectionBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EmailCollectionBanner").then(n.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EmailCollection/Banner/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/EmailVerificationTooltip/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_23C-3j-0TrSZn_NJT8fcwU",
				container: "_23C-3j-0TrSZn_NJT8fcwU",
				Disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				Link: "EzRsHBU9A06NEXZnsJyWI",
				link: "EzRsHBU9A06NEXZnsJyWI"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = {},
				r = () => null;

			function a(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function o(e) {
				return e && e in s ? s[e] : r
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Gold/GildAnimationOverlay/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "SPARKLE_ASSET_PATH", (function() {
				return f
			})), n.d(t, "STARBURST_ASSET_PATH", (function() {
				return v
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/selectors/gold/awardIcon.ts"),
				b = n("./src/reddit/selectors/gold/giveAwards.ts"),
				h = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				g = n.n(h);
			const f = `${s.a.assetPath}/img/gold/animated-sparkle-256.png`,
				v = `${s.a.assetPath}/img/gold/animated-starburst-256.png`,
				O = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				C = Object(i.b)(O, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(l.a)(C(e => {
				const {
					award: t,
					awardIcon: n,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const a = r.fbt._("Animation of {award name} image", [r.fbt._param("award name", t.name)], {
					hk: "222osK"
				});
				return o.a.createElement("div", {
					className: g.a.gildAnimationContainer
				}, o.a.createElement("div", {
					className: Object(d.a)(g.a.animationComponent, g.a.starburst),
					style: {
						backgroundImage: `url(${v})`
					}
				}), o.a.createElement("img", {
					alt: a,
					className: Object(d.a)(g.a.animationComponent, g.a.awardAsset),
					src: n
				}), o.a.createElement("div", {
					className: Object(d.a)(g.a.animationComponent, g.a.sparkle),
					style: {
						backgroundImage: `url(${f})`
					}
				}))
			}))
		},
		"./src/reddit/components/GoogleOneTapIFrame/index.m.less": function(e, t, n) {
			e.exports = {
				loggedInGoogleOneTap: "_2qW2MlTCwrBhUAXSCWhbPD"
			}
		},
		"./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "GovernanceMainnetAnnouncementModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("GovernanceMainnetAnnouncementModal").then(n.bind(null, "./src/reddit/components/Governance/MainnetAnnouncementModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/MainnetAnnouncementModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(o.b)(i.a.GOVERNANCE_MAINNET_LAUNCH, e => a.a.createElement(c, {
				ignoreDefaultFocus: !0,
				withOverlay: !0,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-BurnPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(o.b)(i.a.CRYPTO_BURN_POINTS, e => a.a.createElement(c, null))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ConvertToCoinsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(o.b)(i.a.CONVERT_TO_COINS, e => a.a.createElement(c, null))
		},
		"./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1_-T-UyaTFWSKiU5qkmH4p",
				sparkle: "_3BW2xh05Xd6fPp8ewmG_zt",
				fadeIn: "_3EsU62vzG6DnMyeCR6qmsN",
				quickCreateGiftAnimation: "_2ayMLd0-DF3iBdcNu4Jyw9",
				sparkle1: "_2XTOJxs8_NUxZs7xO_yqD4",
				sparkle2: "DSsYeuIxRQ_6mpLKn7Znw",
				sparkle3: "egE_sRX5MzRyi9eJWBBvR"
			}
		},
		"./src/reddit/components/Header/AvatarStorefrontCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_3hna43Sh0DTnoV7v2NNc2r",
				sparkle: "_3VX6GfMQ01Q_1wsiZnQ2UN",
				fadeIn: "_2IZWjcaeEX-WJFI5gdPVK",
				sparkle1: "Y2DEjcFyO7_glQ5xOX4oz",
				sparkle2: "_1D5RCB-D8nMhwHbA6m6tDq",
				sparkle3: "Iupw9Lt8-wmCtxCgp5_m8"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1t5i5bNwZeJ7FuUXZ9rM-p",
				ctaContent: "jEUbSHJJx8vISKpWirlfx",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/models/Gold/ProductOffer.ts"),
				b = n("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				h = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/awards/overlayIds.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				x = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				_ = n.n(x);
			const j = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CoinPurchaseDropdown",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-CoinPurchaseDropdown").then(n.bind(null, "./src/reddit/components/CoinPurchaseDropdown/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CoinPurchaseDropdown/index.tsx"
					}
				}),
				P = Object(f.a)(),
				S = Object(l.c)({
					activeSaleConfig: y.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(P)(e),
					isFreeAwardEventEnabled: y.f
				}),
				k = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === P ? Object(m.i)() : Object(m.f)({
							tooltipId: P
						}))
					}
				}),
				N = Object(c.b)(S, k);
			class w extends i.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							activeSaleConfig: n,
							coinPurchaseDropdownIsOpen: s,
							isFreeAwardEventEnabled: r,
							sendEvent: a,
							toggleTooltip: o
						} = this.props;
						if (!s) {
							Object(v.d)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
							const e = n ? p.a.CoinSale : r ? p.a.StorefrontFreeAward : void 0;
							a(Object(O.d)("get_coins_cta", e))
						}
						o(t)
					}
				}
				componentDidMount() {
					const {
						activeSaleConfig: e,
						requestSpecialEvents: t
					} = this.props;
					e || t()
				}
				getButtonText() {
					const {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: t
					} = this.props;
					return e ? e.ctaText || r.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : t ? r.fbt._("Free", null, {
						hk: "2qYM7h"
					}) : r.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					})
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: s,
						isFreeAwardEventEnabled: r
					} = this.props, a = Object(d.a)(_.a.icon);
					return i.a.createElement("button", {
						className: Object(d.a)(t, _.a.ctaContainer),
						id: P,
						onClick: this.handleClick,
						"aria-label": "coin"
					}, i.a.createElement("div", {
						className: Object(d.a)(_.a.ctaContent)
					}, i.a.createElement(C.a, {
						name: "coins",
						className: a
					})), s && i.a.createElement(j, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: r,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: P
					}))
				}
			}
			t.a = N(Object(g.c)(w))
		},
		"./src/reddit/components/Header/MwebResponsiveHeader/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Header/NavBarIcon/index.m.less": function(e, t, n) {
			e.exports = {
				linkIcon: "_1CJrQqx8R1geiDbJFRZlgJ",
				navIcon: "_1qlK0UklDPcZgA7_wDEzl-"
			}
		},
		"./src/reddit/components/Header/NotificationsButton/index.m.less": function(e, t, n) {
			e.exports = {
				notificationInboxIconContainer: "_1Tdh9XCXmEOaXAlloLqrmH",
				welcomeTooltip: "_3OMmYPy8XZymvnsxBSK3c0",
				visible: "_1Ssw-NK4SzV_ZrK0hsAQZj",
				welcomeTooltipArrow: "_3Dl1lNOXSRFghRireQprSr"
			}
		},
		"./src/reddit/components/Header/QuickLinks/Timer.m.less": function(e, t, n) {
			e.exports = {
				timer: "_1RWqLcP0XUFojNUc0Mf0Yc"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				containerWithoutCoin: "_2t7TYn6HwRZQwKXG47kpQR",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				psBattlesIcon: "_3wyl6g2grDztg8KpnqxWiE",
				redditRecapIcon: "_1o57g3XSOeqm_QEQu824EP",
				isNightMode: "F6FHwO9Q2Pva6rdcMPWrm",
				customIconWrapper: "_3kwk6KUitnGpZ2JJUx_bOj",
				customIcon: "d7xjehjoXyiaQBuluGH0R",
				garlicBreadLink: "no2pS2p1GomZL7au3GeF",
				garlicBreadIcon: "_3JYbu1qs_Na8zfP23tSqyA",
				happeningNowLink: "_39XwvEX05Vwji7kFcISFuV",
				liveContentAvailabilityBadge: "-X88ACLia0m_vNacl1E1S"
			}
		},
		"./src/reddit/components/Header/Sparse.m.less": function(e, t, n) {
			e.exports = {
				Logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				Wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				HomeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				homeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				SparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				sparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				SparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN",
				sparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN"
			}
		},
		"./src/reddit/components/Header/Sparse.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/constants/elementIds.ts"),
				o = n("./src/reddit/contexts/NavbarExp.ts"),
				i = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				c = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Header/Sparse.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(i.a, "Logo", u.a),
				b = m.a.wrapped(c.a, "Wordmark", u.a),
				h = m.a.div("SparseContainer", u.a),
				g = m.a.div("SparseContainerExp", u.a),
				f = m.a.a("HomeExternalLink", u.a);
			t.a = function(e) {
				const t = Object(s.useContext)(o.a) ? g : h;
				return r.a.createElement(t, {
					id: a.d
				}, r.a.createElement(f, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, r.a.createElement(l.a, null, r.a.createElement(p, null), r.a.createElement(b, null))))
			}
		},
		"./src/reddit/components/Header/User/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3Wg53T10KuuPmyWOMWsY2F",
				icon: "_234aKY_LemFWuSTYVoshHn",
				link: "_2qcLS5et_OlJluP0WWDdsJ",
				loggedOut: "U3FRqDA_Qhr4icbaNXSuf",
				loggedOutRow: "_1JBkpB_FOZMZ7IPr3FyNfH",
				oldRedditLink: "_31lJpVPojF0SAR5usRZ36h",
				row: "_19oWd7e3z7-ztUGzdIoCR7",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b",
				buttonIcon: "_1vXK1WOmrEh97U366xznqT",
				iconWrapper: "_2QpF1Fkq_rr2nvPL1no0nN"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, n) {
			e.exports = {
				centeredRow: "_30BbATRhFv3V83DHNDjJAO",
				container: "_2GyPfdsi-MbQFyHRECo9GO",
				navbarHeightContainer: "lNoTgmppXfHyXXS-3aRDj",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
				navColor: "a35Fm2MurU14xdNybLiZp",
				layoutContainer: "_31IHoBZ9we7EzLMdkTaIR2",
				compactLayout: "Y4MkVr6trrdypfZVUkpIA",
				searchContainer: "_1iqnOY2Y57wmetu8MAjiId",
				explore: "_17gDYx5g5X6q--Lcmc9IvO",
				search: "_2dlTXDaX9JuL0bekTwhV18",
				snoo: "_1O4jTk-dZ-VIxsCuYB6OR8",
				snooExp: "_32hLJ8_m9mplK6bwNXysk8",
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
		"./src/reddit/components/HeaderIconContainer/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "PH-V9ggsF2mi5JTDmDqdR",
				button: "PH-V9ggsF2mi5JTDmDqdR",
				Container: "FOioVk_DUTmZIKKa82Mm1",
				container: "FOioVk_DUTmZIKKa82Mm1",
				isOpen: "_2DgzqfpTotjWrh91uFswuC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_26MVepkxZHzpNv1cuAA4JA",
				mFocused: "_7Xbismt11Yj8tq6BaRWFr",
				buttonContainer: "oiDWziAp_Bua6rb7oQKXs",
				icon: "cq0sTeCPC4GI78UNPdClD",
				text: "_1nBP1OfpQDgTmzRFqaVult",
				hasBadge: "_3JpLC8c1ezEsYuuoANyZgr",
				badge: "_15QIjcY6qqsms0FXyEsVe9"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_1Ok0AiXwAeYl2SsUBaxgPC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less": function(e, t, n) {
			e.exports = {
				filter: "_37tmRmxaFMjRRrvwcY2JmY",
				item: "_2MgAHlPDdKvXiG-Qbz5cbC",
				listHeader: "_2XRPX11qL4-HxWPuHAzOW5",
				headerButton: "_1ee4j8lY-1iIi8GkJdJ5RD"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, n) {
			e.exports = {
				caretDown: "_3CG2U_hX3HI-ibl5v2RCq1",
				container: "_3jiriKeNer8y0-1r6oWIFM",
				mOpen: "_24x5wRDxU1y38uXQXvLE4m",
				mNotPinned: "_3rS8YTDjcT7fs0k9W4rxDG",
				mPinned: "_3NgME2HFZvM-tgAE3s5hXS",
				containerExp: "_11HXvp3b_PzyK6RcoEr4bJ",
				containerText: "_1GieMuLljOrqnVpRAwz7VP",
				defaultIcon: "eZQ5o2PrhR59wkAtPbxMU",
				customFeedIcon: "_1r2uMQFZw5Hg53NkK6rsKv",
				happeningNowIcon: "_363_tmUTkPtgihAQcXPsQv",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				subredditIcon: "_3fvJBCH6c6P0NvMwoqK9MJ",
				unknownIcon: "_1hCoGzhwFdfF2vGbt8IjSy",
				userIcon: "E6V2eHU4CpJuLWzneTk0Z",
				wrappedRedditDropdown: "XUd7bCU9SM6ycr6f242KD",
				wrappedRedditLogoActive: "_3kzPDKtqN0MnLhOsSJVKHZ",
				coinIcon: "JisrPypso_3RK4iDgDdke",
				modQueueIcon: "_2L4XuYlbElLC5REx1XpdG_",
				premiumIcon: "_2ulegyMhoTE_WCFyBC-IBx",
				itemModQueue: "_1VemFsujoJ-6RR82VRSPeM",
				listContainer: "TMMvbwyeh9yuHKmQWHrE3",
				paddingBottom: "_2C3hDQLC8D1ZRSBAx93g1c",
				multiPlusButton: "_3mvXSuBIpYAdAsBJSB-1G5",
				multiPlusIcon: "_2T11xMsmkdwP6G_mY6eUBW",
				pin: "_2FVCfsIPxXtl6S-c69sXO4",
				disabled: "_371yhrlWAj7dxOsk1PWqG4",
				selector: "h-jI8r2f9ozTNqu_2TBeY",
				wrappedRedditLogo: "_29Am3nlgySiqDV_UaDXD69"
			}
		},
		"./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2I12Htze2UzJmmfnrgYJOn",
				icon: "_1jAt0x8BSB9mgoXbsDuKJ6",
				link: "_24UNt1hkbrZxLzs5vkvuDh",
				isNightMode: "_1dBtowHdRHcGyLbVEaOL8t",
				text: "_1vP7zMn-UGF6u5e-GPHAvN"
			}
		},
		"./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "nSJCQrnLY07CzwT8tTsNO",
				title: "csebgIdGwT3fBJ8kUT2aQ",
				subtitle: "rsZg2IAMPbcDGNPnNIBy_",
				description: "_3m-DocsNGlVUjAtAm7ZZLi",
				dismissBtn: "_3tJL-r-lrTcB_GkrrlZxEN"
			}
		},
		"./src/reddit/components/HeaderUserActions/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2zZ-KGHbWWqrwGlHWXR90y",
				postIcon: "_1aj2BqXAeeo2bHwArcJ5AT",
				moderateIcon: "_14ugEJZOmgrUDXYeFSSv9w",
				isLit: "_3ge8uSGq8pAK2qqs45Vzde",
				link: "_1x6pySZ2CoUnAfsFhGe7J1",
				headerLinks: "_20HfCAFz3ot1MW1o29ZoGZ",
				headerUserDropdown: "_1pA8z73SZ1olP5KMKFN4_Z",
				moderationDropdown: "_1luaIaEVRAlXWIwqbCOj2a",
				envelopeIcon: "_1V77mEI1g_5ZlCh_c2-Yab",
				isUnread: "_2Wgcbg0LNUiJf4L2fVQJ7O",
				notificationInboxIcon: "_2mR_VyuaB50nsX1FR6XERF",
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv",
				cornerModal: "_3yBCXICbzc12nPbAnZeJ54",
				modalOverlay: "jDNUjGbnBI3MbjQP-vMxG",
				liveChatAnnouncementText: "gTjw2SU9vOhjAAj_FayzC"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/AvatarPushcardBanner/Banner/index.m.less": function(e, t, n) {
			e.exports = {
				"sr-only": "_3Cv40_kOluVBAL091sOCxD",
				srOnly: "_3Cv40_kOluVBAL091sOCxD",
				banner: "_2BlCG_Fre5CwjrmCj-tn1q",
				icon: "H1fHPW-543ZCV3rP9cBCL",
				content: "_1KluuoHO1AUSycMrFg-Pes",
				body: "_1TDlO7WPuAmg6Bs3kOLrH9",
				title: "oLMif5Jj6X17CKHWVOYBZ"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/Components/AvatarPushCard/PushCard/index.m.less": function(e, t, n) {
			e.exports = {
				avatarPushCardContainer: "_1yPJhJHbop3b8ymORnDlBK",
				closeButton: "_3g1xz9MOUzi-gIHyX1hC81",
				closeButtonIcon: "_1Rt6re1Drdoq1Ln4u6i1OS",
				image: "_1X-eWVnYVCwPvAP6w20Ahb",
				ctaWrapper: "_1UTlx4irdeqqCLgD9M1iJg",
				cta: "IJhhlBRCIGMd5rHgYGsv_"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/Components/RecapLink/index.m.less": function(e, t, n) {
			e.exports = {
				recapLinkBody: "_1xqG70qc6pOtmdrQRLOqLA",
				marketingBadge: "_3_q3LTg22ze3wzCdYIyppX"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2CQ2c7khtd-m7uslH6Mz7J",
				collapsibleContainer: "_10IrsfRFg99DXaIMnqu-vj",
				navBasicLink: "_2KD6rqR9FU8VQKN4P42INe",
				navButtonOverride: "Yxq-GFO2Z9y82pMFEMLAf"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2gT-SgcGRQsJc7cLAzWT3r",
				headingContent: "_26v6JOihbU7MuezKAlj4JI",
				subredditIcon: "u_VVgOsrqJsUNbQ80sEby",
				title: "_3eGd1zitdF6RmAyLpSDjG6"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less": function(e, t, n) {
			e.exports = {
				button: "GCltVwsXPu5lE-gs4Nucu",
				category: "_3z4bYCMDgBrJ-Be0By6hNr",
				coinsLink: "_3zu1R6cDitNjrJaFA1VPXj",
				coinsTitle: "_6PPJ3peMr-B90dx0MQDhB",
				meta: "msJd1mFtK7HCAm9dasMIn"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less": function(e, t, n) {
			e.exports = {
				button: "_3fbofimxVp_hpVM6I1TGMS",
				heading: "_1pjbWqnK8P0fDmz8PgLxXY",
				secondLevelButton: "NiNJXib52w4C8FUidB5af",
				secondLevelSwitch: "nBh6t8H3UNZpI1Ce9s6yQ",
				headingContent: "f8nXLisWxOYzMMl1uIAP3",
				iconContainer: "_225mt8Dkk7IyfYILsMLk9t",
				title: "yloKeyD8bfd8UJ_Gi9rsR",
				collapseIcon: "_3MAMvvyd5hQy71OUfBGRkm",
				chevronIcon: "_3DRWid86ywqQiIYSK1e5mN",
				"m-expanded": "_1AFIV6eh63D9Ab_ml6uJ5j",
				mExpanded: "_1AFIV6eh63D9Ab_ml6uJ5j",
				contentContainer: "_3SDj_IT6ZaqCbKfC4eTjb2",
				noBottomDivider: "R2-Y-K1ZaSHnYA0gp7-nb",
				"m-collapsible": "sJncFX1AQ0-0SzCGc9V5L",
				mCollapsible: "sJncFX1AQ0-0SzCGc9V5L",
				isOpen: "_27B2PE8qRdRlQHbzPBidG6",
				innerLink: "_2ChaQYEC5d_hjd-mltzvQK",
				copyrightContainer: "_2XCnMY85ivEZUL6cAgK0nV",
				copyrightText: "_ttuvLVH4k74IkCGNFJSt",
				subredditIcon: "_3i89oiIrBc-3aoYCzDu8Dy",
				spanButton: "VeDtdPVW3ue8oUfGWbxqu"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/avatar.m.less": function(e, t, n) {
			e.exports = {
				avatarLinkBody: "_6opQAE7SUXi-Fy7P3vItL",
				marketingBadge: "_6qTe2HfpYA9trfOatbi74",
				marketingAsset: "_1lcNm4na-FCLir4IeIpM7w",
				sparkle: "_2thIi4nb9dgSv10ECKVHL4",
				fadeIn: "w8i-7IiMlCG-ncHyRHzxw",
				sparkle1: "_2XE_ejqL9tZ617JilWAoev",
				sparkle2: "RPtjfCh_RZnh_Lh-sTACB",
				sparkle3: "o03hgL0CTE9PaKw9A2nHD",
				sparkle4: "_16-T-fB2mGMlxyfbZjQvUG"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				accountCoins: "_2pXW42IYsGP59qZnjAnkAx",
				accountDisplayText: "DFKWwVItcycZV1bKUOyay",
				caretDownIcon: "_3x3dhQasGAuYcXVQ02QUzy",
				accountKarma: "Rz5N3cHNgTGZsIQJqBfgk",
				accountDetails: "_1pHyKCBktIf_9WFW9jjM3P",
				accountWrapper: "_3KfbpxpA8Esu_3UHTmIvfw",
				isLoggedOut: "_22SL37yETIW414yUiZj27w",
				isLoggedIn: "_2OFo5eaD2V6ZcJsYBuYned",
				button: "_1zZ3VDhRC38fXLLvVCHOwK",
				presenceToggle: "_3Axd0OX2sZP0PEIHdeocc3",
				buttonText: "_3m4MQxMy4WfgIkMhHh-UAg",
				coinFontIcon: "LyE1zRbUJlGravH4LHRfD",
				karmaIcon: "_2wYneOcJEB6o4mj1NedmsR",
				dropdownTriangle: "_50RxI-5rW1xzwoC42vhzM",
				imgIcon: "-z42jjKOFdAdFhdJ8mmI4",
				navbarLikeMweb: "_2XkHtsPtFuTExJyk9JQUAp",
				imgIconWrapper: "_1zyV-XmoYeSNGWjfZiXbPc",
				defaultProfileIcon: "_3-lF5kPDkSGfnVUW_GtvUV",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF",
				entrypointLink: "pszNQQxC761u1dbJ3aR-C"
			}
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				a = n("./src/lib/pubsub/index.ts"),
				o = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === o.b.Popular,
				l = e => e && e.toLowerCase() === o.b.All,
				d = e => e && e === i.c,
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, n, a, i, m, {
						listingName: p,
						subreddit: b,
						idCardWidget: h
					} = e;
					const g = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						f = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let v, O;
					return d(p) ? (t = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, a = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = o.c[o.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), i = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : l(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), a = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/all", m = o.c[o.b.All]) : c(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), a = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/popular", m = o.c[o.b.Popular]) : p && (n = h && h.description, a = u(""), i = b.displayText, m = b.url, O = h && h.subscribersCount, v = h && h.currentlyViewingCount), {
						snooBackground: a,
						description: n,
						titleText: i,
						url: m,
						subscribersCount: O,
						subscribersText: g,
						currentlyViewingText: f,
						currentlyViewingCount: v,
						...t ? {
							bannerBackgroundImage: t
						} : {}
					}
				},
				p = new a.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				g = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InboxBanner/CommonBanner.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "FjkUHssa96HMV17_qcQt6",
				wrapper: "FjkUHssa96HMV17_qcQt6",
				Content: "_27ZWqn-n6gBKDTqLbt0uk1",
				content: "_27ZWqn-n6gBKDTqLbt0uk1",
				Heading: "ZtxCbLGmd-U6DH5-RsBJV",
				heading: "ZtxCbLGmd-U6DH5-RsBJV",
				Title: "_2Iz2pxeBTmtn5cilveUdwj",
				title: "_2Iz2pxeBTmtn5cilveUdwj",
				TitleIcon: "_3wZ9NKCStyQ9_XMz6jRbkL",
				titleIcon: "_3wZ9NKCStyQ9_XMz6jRbkL",
				Body: "_2GYO5AeH0SYqV0W_IYw7C_",
				body: "_2GYO5AeH0SYqV0W_IYw7C_",
				BodyText: "_1Tw_Z3ZCizARHq8mDvXtJp",
				bodyText: "_1Tw_Z3ZCizARHq8mDvXtJp",
				Thumbnail: "_3VFSVmukKEY-C06RJldU7n",
				thumbnail: "_3VFSVmukKEY-C06RJldU7n",
				ActionButtons: "_45hSSzyMPM5pmBx74E25U",
				actionButtons: "_45hSSzyMPM5pmBx74E25U",
				noMargin: "aaIwLr1Mbi15Al1BCmB8w",
				CloseButton: "_3xbx2cMOI83xtKSIZfzaeW",
				closeButton: "_3xbx2cMOI83xtKSIZfzaeW",
				SecondaryButton: "_1cOP2U6TmJgXE_lLuvdAk",
				secondaryButton: "_1cOP2U6TmJgXE_lLuvdAk",
				CloseButtonIcon: "_3uR0NalufS44rp_5yMF15w",
				closeButtonIcon: "_3uR0NalufS44rp_5yMF15w"
			}
		},
		"./src/reddit/components/InboxBanner/CommonBanner.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/opener/index.ts"),
				c = n("./src/reddit/actions/inboxBanner/index.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/helpers/trackers/inbox.ts"),
				u = n("./src/reddit/helpers/localStorage/index.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/models/inboxBanner/index.ts");
			const h = e => e.notificationsInbox.banner,
				g = e => {
					return h(e).banners
				};
			var f = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/InboxBanner/CommonBanner.m.less"),
				O = n.n(v);
			const C = e => {
				let {
					isFromMiniInbox: t,
					banner: n,
					userId: g
				} = e;
				var f, v, C, y, E, x, _, j, P, S, k, N, w, M, I, T, A;
				const R = Object(a.d)(),
					L = Object(m.a)(),
					[F, D, B] = function(e, t, n) {
						const [r, a] = Object(s.useState)(Object(u.s)(e, t) || 0), o = Object(s.useCallback)(() => {
							a(r + 1), Object(u.Ab)(e, t, r + 1)
						}, []), i = Object(s.useCallback)(() => {
							n > 0 && (a(n), Object(u.Ab)(e, t, n))
						}, []);
						return [r, o, i]
					}(g, n.notificationName, (null === (f = n.persistence) || void 0 === f ? void 0 : f.maxViews) || 0),
					[G, U] = Object(s.useState)(!1),
					[H, q] = Object(s.useState)(!1),
					W = Object(a.e)(e => ((e, t) => {
						var n;
						return !!(null === (n = h(e).dismissedBanners) || void 0 === n ? void 0 : n.find(e => e === t))
					})(e, n.notificationName));
				Object(s.useEffect)(() => {
					D(), t ? (L(Object(d.y)(n.notificationName)), L(Object(d.z)(n.notificationName))) : (L(Object(d.o)(n.notificationName)), L(Object(d.p)(n.notificationName)))
				}, []);
				const V = null === (v = null == n ? void 0 : n.persistence) || void 0 === v ? void 0 : v.maxViews;
				if (!n || V && F > V) return null;
				const z = !!(null == n ? void 0 : n.primaryCta),
					Q = !!(null == n ? void 0 : n.secondaryCta),
					Z = !!(null == n ? void 0 : n.titleImage),
					K = !!(null == n ? void 0 : n.thumbnailImageUrl),
					J = () => {
						var e;
						(null === (e = n.persistence) || void 0 === e ? void 0 : e.isDismissible) && (B(), R(Object(c.a)(n.notificationName)))
					},
					X = {
						backgroundColor: G ? null === (C = null == n ? void 0 : n.primaryCta) || void 0 === C ? void 0 : C.colors.hoverHex : null === (y = null == n ? void 0 : n.primaryCta) || void 0 === y ? void 0 : y.colors.backgroundHex,
						color: null === (E = null == n ? void 0 : n.primaryCta) || void 0 === E ? void 0 : E.text.colorText,
						borderColor: null === (x = null == n ? void 0 : n.primaryCta) || void 0 === x ? void 0 : x.colors.borderHex
					},
					Y = {
						backgroundColor: H ? null === (_ = null == n ? void 0 : n.secondaryCta) || void 0 === _ ? void 0 : _.colors.hoverHex : null === (j = null == n ? void 0 : n.secondaryCta) || void 0 === j ? void 0 : j.colors.backgroundHex,
						color: null === (P = null == n ? void 0 : n.secondaryCta) || void 0 === P ? void 0 : P.text.colorText,
						borderColor: null === (S = null == n ? void 0 : n.secondaryCta) || void 0 === S ? void 0 : S.colors.borderHex
					};
				return W ? null : r.a.createElement("div", {
					className: O.a.Wrapper,
					style: {
						backgroundImage: `url(${n.bodyBackgroundImage})`
					},
					onClick: e => {
						e.stopPropagation(), Object(i.e)(n.linkUrl, "_blank"), J(), L(t ? Object(d.x)(n.notificationName, d.b.BANNER) : Object(d.n)(n.notificationName, d.b.BANNER))
					}
				}, r.a.createElement("div", {
					className: O.a.Content
				}, r.a.createElement("div", {
					className: O.a.Heading
				}, Z ? r.a.createElement("img", {
					className: O.a.TitleIcon,
					src: n.titleImage
				}) : r.a.createElement("div", {
					className: O.a.Title,
					style: {
						color: null === (k = n.titleText) || void 0 === k ? void 0 : k.colorText
					}
				}, null === (N = n.titleText) || void 0 === N ? void 0 : N.text)), r.a.createElement("div", {
					className: O.a.Body
				}, r.a.createElement("div", {
					className: O.a.BodyText,
					style: {
						color: null === (w = n.bodyText) || void 0 === w ? void 0 : w.colorText
					}
				}, null === (M = n.bodyText) || void 0 === M ? void 0 : M.text), K && r.a.createElement("img", {
					src: n.thumbnailImageUrl,
					className: O.a.Thumbnail
				})), z || Q && r.a.createElement("div", {
					className: Object(o.a)(O.a.ActionButtons, {
						[O.a.noMargin]: K
					})
				}, z && r.a.createElement(l.t, {
					text: null === (I = n.primaryCta) || void 0 === I ? void 0 : I.text.text,
					priority: l.c.Tertiary,
					size: l.d.XS,
					onClick: e => {
						var s;
						e.stopPropagation(), (null === (s = n.primaryCta) || void 0 === s ? void 0 : s.actionType) === b.a.GOTO && n.primaryCta.url && Object(i.e)(n.primaryCta.url, "_blank"), J(), L(t ? Object(d.x)(n.notificationName, d.b.CTA_1) : Object(d.n)(n.notificationName, d.b.CTA_1))
					},
					style: {
						...X
					},
					onMouseEnter: () => U(!0),
					onMouseLeave: () => U(!1)
				}), Q && r.a.createElement(l.t, {
					text: null === (T = n.secondaryCta) || void 0 === T ? void 0 : T.text.text,
					priority: l.c.Plain,
					size: l.d.XS,
					className: O.a.SecondaryButton,
					onClick: e => {
						e.stopPropagation(), (null == n ? void 0 : n.secondaryCta) && (n.secondaryCta.actionType === b.a.GOTO && n.secondaryCta.url && Object(i.e)(n.secondaryCta.url, "_blank"), J(), L(t ? Object(d.x)(n.notificationName, d.b.CTA_2) : Object(d.n)(n.notificationName, d.b.CTA_2)))
					},
					style: {
						...Y
					},
					onMouseEnter: () => q(!0),
					onMouseLeave: () => q(!1)
				}))), (null === (A = n.persistence) || void 0 === A ? void 0 : A.isDismissible) && r.a.createElement(l.t, {
					Icon: Object(p.b)("close_fill"),
					className: O.a.CloseButton,
					size: l.d.XXS,
					iconClassName: O.a.CloseButtonIcon,
					priority: l.c.Plain,
					onClick: e => {
						e.stopPropagation(), J(), L(t ? Object(d.x)(n.notificationName, d.b.DISMISS) : Object(d.n)(n.notificationName, d.b.DISMISS))
					}
				}))
			};
			t.a = e => {
				let {
					isFromMiniInbox: t
				} = e;
				const n = Object(a.e)(g),
					s = Object(a.e)(f.k);
				return (null == n ? void 0 : n.length) && s ? r.a.createElement(r.a.Fragment, null, null == n ? void 0 : n.map(e => r.a.createElement(C, {
					banner: e,
					isFromMiniInbox: t,
					key: e.notificationName,
					userId: s
				}))) : null
			}
		},
		"./src/reddit/components/InboxBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineLink: "_3vOO3WyD7yteL4Rr9E1i2y",
				banner: "_34mO86zNIysmcISYIe8gVT",
				bannerTitleContainer: "rh7yf_ejK6H75L6jZkb6C",
				bannerTitle: "V_VLkmdSrXqz92-5vad5F",
				bannerDescription: "_1vbdR0mal1nPuuTOZIemLg",
				closeButton: "-Fi_Lr4OQ6XfCIiufmgxa",
				bannerButtonsContainer: "_1a9VL63O5el1YN7RuPoDLy",
				button: "_1mejKTw8yWGmudymV6GufX",
				primaryButton: "_1mR2YFl21PdJDX9T7ykA7c",
				welcomeBanner: "_3QWgBcfZuqQ6TlxZa6uYkS",
				dnPromptBanner: "_3IIpKn1IlCXgko4sLMEie1",
				policyBanner: "GLgkxGZkPymWBWeRISXBe",
				modalHeader: "_2Ggqgl_RyXu2U-mPYZSaCk",
				modalTitle: "_2C3YUpN8pGzseZOBK0tl0I",
				modalCloseIcon: "_2BTQI8_1TIwwfdecOP_j6o",
				modalListItem: "-sXLpWAGj2HMFvzRvH_bC",
				modalListIcon: "_3UO2hA0CsOqKl1bYybPZGs",
				garlicBreadBanner: "SVn8TtBVFQ-GZUhog511q",
				bannerContainer: "V5Q75l1gWtGpBZEehJiGH",
				bannerDataContainer: "SIz6ozr7aqewYGVSLfSf6",
				bannerImage: "_2zetWw7f4W-0OWrUYJHPQ-"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return J
			})), n.d(t, "b", (function() {
				return ee
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/notifications/index.ts"),
				i = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				m = n("./node_modules/lodash/omit.js"),
				p = n.n(m),
				b = n("./src/reddit/components/InboxBanner/CommonBanner.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/trackers/inbox.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/components/InboxBanner/index.m.less"),
				C = n.n(O);
			var y = e => {
				let {
					className: t,
					closeButtonText: n,
					closeIcon: s,
					descriptionText: r,
					primaryButtonText: o,
					titleText: i,
					onClose: l,
					onClick: d
				} = e;
				const u = Object(f.a)();
				return a.a.createElement("div", {
					className: Object(c.a)(C.a.banner, t)
				}, a.a.createElement("div", {
					className: C.a.bannerTitleContainer
				}, i && a.a.createElement("h4", {
					className: C.a.bannerTitle
				}, i), s && a.a.createElement(h.t, {
					onClick: e => {
						l && l(e), u(Object(g.q)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(v.b)("close_fill"),
					className: Object(c.a)(C.a.closeIcon, C.a.closeButton),
					size: h.d.XXS,
					priority: h.c.Plain
				})), r && a.a.createElement("p", {
					className: C.a.bannerDescription
				}, r), a.a.createElement("div", {
					className: C.a.bannerButtonsContainer
				}, o && a.a.createElement(h.t, {
					text: o,
					priority: h.c.Tertiary,
					className: Object(c.a)(C.a.button, C.a.primaryButton),
					size: h.d.XS,
					onClick: e => {
						d && d(e), u(Object(g.q)({
							dnPromptAction: "cta"
						}))
					}
				}), n && a.a.createElement(h.t, {
					text: n,
					onClick: e => {
						l && l(e), u(Object(g.q)({
							dnPromptAction: "refuse"
						}))
					},
					priority: h.c.Plain,
					size: h.d.XS,
					className: Object(c.a)(C.a.button, C.a.closeButton)
				})))
			};
			const E = e => {
				let {
					onClose: t,
					onTurnOnBrowserNotifications: n
				} = e;
				return a.a.createElement(y, {
					className: C.a.dnPromptBanner,
					titleText: s.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: e => {
						e.stopPropagation(), t()
					},
					closeIcon: !0,
					primaryButtonText: s.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: s.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: e => {
						n(), t()
					}
				})
			};
			var x = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				_ = n("./src/reddit/components/ResizeSensor/index.tsx"),
				j = n("./src/reddit/components/InboxTooltip/index.m.less"),
				P = n.n(j);
			const S = 3;
			class k extends a.a.Component {
				constructor() {
					super(...arguments), this.ref = a.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= S) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: r,
						blockAwarder: o,
						index: i,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, p = i + 1 <= S;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						ref: this.ref,
						className: P.a.notificationResizeWrapper
					}, a.a.createElement(x.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: r,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: o
					}), !!p && a.a.createElement(_.a, {
						onResize: this.handleResize
					})))
				}
			}
			var N = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				w = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = {},
				T = "",
				A = 0,
				R = "200px",
				L = "250px",
				F = "270px",
				D = 100,
				B = .5,
				G = 5,
				U = 50,
				H = 55;
			class q extends a.a.Component {
				constructor() {
					super(...arguments), this.container = a.a.createRef(), this.state = {
						notificationHeights: I,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > A && this.props.setActiveOverflowMenuId(T)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: s
						} = this.props, r = t || n, a = window.innerHeight - U - 2 * H - (r ? D : 0);
						let o = 0;
						for (const i in e) o += e[i];
						return 0 === o ? r ? L : s ? R : F : (r && (o += D), a < o && (o = a + (r ? D : 0)), o)
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.updateCurrentCursorIndex = () => {
						const {
							notifications: e
						} = this.props, {
							currentNotificationCursorIndex: t
						} = this.state, n = t + G, s = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: s
						})
					}, this.renderNotifications = () => {
						const e = p()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: s,
								notifications: r
							} = this.props,
							o = r.length > n + G;
						return (s && r.length > 0 && o ? r.slice(0, n + 1) : r).map((n, s) => a.a.createElement(k, M({}, e, {
							index: s,
							key: s,
							notification: n,
							notificationHeight: t[s],
							setNotificationHeight: this.setNotificationHeight
						})))
					}, this.loadNotifications = e => {
						const {
							cursor: t,
							fetchNotifications: n,
							isInboxInfiniteScrollEnabled: s,
							notifications: r
						} = this.props;
						if (e.isIntersecting) {
							const e = r.length > this.state.currentNotificationCursorIndex + G;
							this.props.notifications.length > 0 && s && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: G
							})
						}
					}
				}
				componentDidMount() {
					const e = this.container && this.container.current;
					e && e.addEventListener("scroll", this.resetOverflowMenu)
				}
				componentWillUnmount() {
					const e = this.container && this.container.current;
					e && e.removeEventListener("scroll", this.resetOverflowMenu), this.resetOverflowMenu()
				}
				render() {
					const {
						hasNextPage: e,
						isDNInboxPromptBannerEnabled: t,
						isInboxInfiniteScrollEnabled: n,
						isPending: s,
						notifications: r,
						setDesktopNotificationsPromptSeen: o,
						showBrowserNotificationsPermissionSettings: i
					} = this.props, c = !(!r || !r.length), l = this.getContainerHeight(), d = r.length > this.state.currentNotificationCursorIndex + G;
					return a.a.createElement("div", {
						className: P.a.notificationList,
						ref: this.container,
						style: c ? {
							height: l,
							maxHeight: l
						} : {
							minHeight: R
						}
					}, !s && a.a.createElement("div", {
						className: P.a.notificationBannerContainer
					}, t && a.a.createElement(E, {
						onTurnOnBrowserNotifications: i,
						onClose: o
					}), a.a.createElement(b.a, {
						isFromMiniInbox: !0
					})), !c && s && a.a.createElement(N.a, null), !c && !s && a.a.createElement(w.a, {
						inTooltip: !0
					}), c && this.renderNotifications(), n && c && !s && (e || d) && a.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: B
					}, a.a.createElement("div", null)))
				}
			}
			var W = n("./src/reddit/constants/localStorage.ts"),
				V = n("./src/reddit/controls/InternalLink/index.tsx"),
				z = n("./src/reddit/hooks/useLocalStorage.ts");
			var Q = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				Z = n("./src/reddit/helpers/localStorage/index.ts");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const J = [],
				X = l.a.div("StyledDropdown", P.a),
				Y = e => {
					let {
						isLoggedIn: t,
						onMessagesClick: n,
						onBarClick: o,
						markAllAsRead: i,
						messagesBadgeCount: l,
						sendInboxClickSettings: u
					} = e;
					const m = !!l,
						p = Object(r.useCallback)(() => {
							n(), o()
						}, [n, o]),
						b = Object(r.useCallback)(() => {
							u(), o()
						}, [u, o]);
					return a.a.createElement("nav", {
						className: P.a.topNav
					}, a.a.createElement("span", {
						className: P.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && a.a.createElement("span", {
						className: P.a.topNavLinks
					}, a.a.createElement("span", {
						className: P.a.messagesLinkContainer
					}, a.a.createElement(V.default, {
						className: Object(c.a)(P.a.messagesLink, {
							[P.a.mActive]: m
						}),
						onClick: p,
						to: m ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					}), a.a.createElement(d.a, {
						className: P.a.badgeCount,
						isActive: m,
						unreadCount: l
					}))), a.a.createElement("button", {
						className: P.a.navLink,
						onClick: i
					}, a.a.createElement(v.a, {
						name: "mark_read",
						className: P.a.icon
					})), a.a.createElement(V.default, {
						className: P.a.navLink,
						onClick: b,
						to: "/settings/notifications"
					}, a.a.createElement(v.a, {
						name: "settings",
						className: P.a.icon
					}))))
				},
				$ = e => a.a.createElement("div", {
					className: P.a.bottomBar
				}, a.a.createElement(V.default, {
					className: P.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, s.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ee = e => {
					const t = Object(f.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isPending: c,
							messagesBadgeCount: l,
							notifications: d,
							hideTooltip: u,
							isGarlicBreadEnabled: m,
							isInboxPolicyBannerEnabled: p,
							isLoggedIn: b,
							isPushNotificationsSupported: h,
							userId: v
						} = e,
						[O, C] = Object(Q.a)(v),
						[y, E] = function(e) {
							const [t, n] = Object(r.useState)(() => Object(Z.w)(e));
							return [t, Object(r.useCallback)(() => {
								n(!0), Object(Z.Bb)(e)
							}, [e])]
						}(v),
						[x, _] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [s, r] = Object(z.a)(t, []);
							return [-1 !== s.indexOf(n), () => {
								r([...s, n])
							}]
						}({
							key: W.b.GARLIC_BREAD_BANNER_SEEN,
							userId: v
						}),
						j = !(!d || !d.length),
						S = Object(o.a)(),
						k = S === i.a.Closed || S === i.a.Default || S === i.a.Denied,
						N = h && k && !O;
					return a.a.createElement(X, null, a.a.createElement("div", {
						className: P.a.tooltipContainer
					}, a.a.createElement(Y, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(g.g)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: l,
						onMessagesClick: () => {
							t(Object(g.t)({
								badgeCount: s,
								tab: g.f.Messages
							})), t(Object(g.h)()), n()
						},
						sendInboxClickSettings: () => t(Object(g.m)(g.c.MiniInbox)),
						onBarClick: u,
						isLoggedIn: b
					}), a.a.createElement(q, K({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: C,
						isDNInboxPromptBannerEnabled: N,
						isInboxPrivacyPolicyBannerEnabled: p && !y,
						setInboxPrivacyPolicyBannerSeen: E,
						isGarlicBreadEnabled: m && !x,
						setGarlicBreadBannerSeen: _
					})), (j || c) && a.a.createElement($, {
						sendInboxClickSeeAll: () => t(Object(g.l)()),
						onBarClick: u
					})))
				}
		},
		"./src/reddit/components/InboxTooltip/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "InboxTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("InboxTooltip").then(n.bind(null, "./src/reddit/components/InboxTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InboxTooltip/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/InboxTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_3uJguwDAW5Ra1r4aegBvBq",
				visible: "_1TfMsQUAiVAqjXRo7s3R_t"
			}
		},
		"./src/reddit/components/InboxTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				carot: "_389RY3FytRs4F82-BLVEiq",
				StyledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				styledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				tooltipContainer: "_3oNU8Gzy2V3jDPhFfeEFbD",
				topNav: "F0hrtz76LlopbY9X0wtDo",
				topNavTitle: "wdFbe8PT7DInxaiHo2Me1",
				messagesLinkContainer: "_1581SeO-Xb1j1kfhIRrIyB",
				topNavLinks: "_1R0ZV71kh7uwDXo7fn1eDk",
				messagesLink: "_27rjoZBkLhiqLLjBu-xU_p",
				"m-active": "_29xCmtH_l8UtRn8IP08VLB",
				mActive: "_29xCmtH_l8UtRn8IP08VLB",
				badgeCount: "_1mrhJHegVozrNeTH7r5svN",
				navLink: "_2l1d6HSQ764u0JcvRSEJXD",
				notificationList: "_2MId4QR3fPm4RPlrSTZg_E",
				notificationResizeWrapper: "_3PWmWL3sMw23-xBHydcnPf",
				emptyState: "_17HPdVVhdV3LWBjzHwGlhA",
				emptyTitle: "_2CY3n2AMoj0af7gQhj9dfI",
				emptyDescription: "HxBuWRTAFa8y8bMiQKdSJ",
				bottomBar: "_8INvnNiEMHRndJ0M-LiY",
				bottomLink: "X1WC7m4hrFQNzINreBRsv",
				icon: "_3pDOQfbIbQuT4PBwPGp85E",
				BellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				bellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				notificationBannerContainer: "_2prSjBmU3TS_Liup8DFR-2",
				welcomeTooltipContainer: "_1OZgaZvEs6sdhMUCqaUCW_",
				closeButton: "_3fWRL_DhsIqXjpW4eXDwmR",
				CloseIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				closeIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				tooltipTitle: "_3EmopbfaUR0bemuuUcEcko",
				tooltipDescription: "_3MtkPXIDbG9Hf6YeNOxAxv"
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(d);
			const m = Object(r.createContext)(null),
				p = Object(r.createContext)(null);
			class b extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return a.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, a.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = i.f + 10,
				g = a.a.memo(() => {
					const [e, t] = Object(r.useState)("-500px"), n = Object(r.useContext)(c.a);
					return a.a.createElement(m.Consumer, null, r => r && a.a.createElement("div", {
						className: Object(o.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, a.a.createElement(l.t, {
						kind: l.b.Button,
						priority: l.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							r.focus(), r.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), a.a.createElement("div", {
						className: Object(o.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				f = a.a.memo(() => a.a.createElement(p.Consumer, null, e => a.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(e, t, n) {
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
				SubscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				subscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				visible: "_3hDL4MmXN5ibsBRoePashZ",
				CloseButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				closeButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				subredditName: "xP-T4vxk4aKEQTlxxGner",
				adaptive: "_34HwaRmVoDiPrSaCPUqpjx",
				srIcon: "_3LZZ1LMv49fbgZrji_1D8u"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/constants/icons.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/shortcuts/close.ts"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = n("./src/reddit/components/FlairWrapper/index.tsx"),
				h = n("./src/reddit/components/IdCard/helpers.ts"),
				g = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				v = n("./src/reddit/components/SubscribeButton/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				C = n("./src/reddit/constants/colors.ts"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/helpers/postCollection.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				P = n("./src/reddit/models/Vote/index.ts"),
				S = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				k = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				M = n("./src/reddit/selectors/telemetry.ts"),
				I = n("./src/reddit/contexts/Post/index.tsx"),
				T = n("./src/reddit/components/LightboxHeader/index.m.less"),
				A = n.n(T);
			const R = Object(i.c)({
					subreddit: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return null;
						const r = s || Object(N.n)(e, {
							page: n
						});
						return (null == r ? void 0 : r.belongsTo) ? Object(w.Q)(e, {
							identifier: r.belongsTo
						}) : null
					},
					post: N.n,
					joinOptimizationsLightboxHeaderEnabled: e => Object(S.a)(e) || Object(S.d)(e) || Object(S.c)(e),
					isVoteCountAnimation: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return !1;
						const r = n && Object(N.n)(e, {
							page: n
						}) || s;
						return !!r && Object(k.g)(e, {
							post: r
						})
					}
				}),
				L = Object(o.b)(R, (e, t) => {
					let {
						sendEvent: n
					} = t;
					return {
						close: () => {
							e(Object(m.a)(n, !0))
						},
						toggleVote: (t, n) => e(n === P.a.upvoted ? Object(u.ib)(t) : Object(u.v)(t))
					}
				}, (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const r = e.post || n.post;
						r && t.toggleVote(r.id, s)
					}
				})),
				F = {
					[j.o.GIFVIDEO]: d.a.gif_post,
					[j.o.IMAGE]: d.a.image_post,
					[j.o.TEXT]: d.a.text_post,
					[j.o.RTJSON]: d.a.text_post,
					[j.o.VIDEO]: d.a.video_post,
					[j.o.EMBED]: d.a.embed,
					[j.o.GALLERY]: d.a.media_gallery,
					[j.o.LIVEAUDIO]: d.a.audio
				},
				D = e => F[(null == e ? void 0 : e.media) ? e.media.type : j.o.EMBED];
			class B extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showSubscribeButton: !1
					}, this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}, this.handleSubscribeButtonVisible = () => {
						this.setState({
							showSubscribeButton: !1
						})
					}, this.handleSubscribeButtonNotVisible = () => {
						this.setState({
							showSubscribeButton: !0
						})
					}, this.handleSubscribeButtonClick = e => {
						e.stopPropagation(), this.props.subreddit && this.props.sendEvent(e => {
							const {
								subreddit: t,
								post: n
							} = this.props;
							return {
								source: "sticky_banner",
								action: "click",
								noun: (null == t ? void 0 : t.name) && Object(w.jb)(e, {
									identifier: {
										name: t.name,
										type: "subreddit"
									}
								}) ? "subscribe" : "unsubscribe",
								post: n ? M.K(e, n.id) : void 0,
								subreddit: t
							}
						})
					}
				}
				componentDidMount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.addListeners(h.b, this.handleSubscribeButtonVisible), h.h.addListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				componentWillUnmount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.removeListeners(h.b, this.handleSubscribeButtonVisible), h.h.removeListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				render() {
					var e;
					const {
						className: t,
						onCloseClick: n,
						onVoteClick: o,
						page: i,
						post: d,
						useAdaptiveStyles: u,
						isVoteCountAnimation: m
					} = this.props, h = D(d), O = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Tb.META_MEMBERSHIP_PAYWALL_PAGE, y = d ? I.a : function(e) {
						let {
							children: t,
							postId: n
						} = e;
						return t
					};
					return a.a.createElement("div", {
						className: Object(c.a)(A.a.container, t, {
							[A.a.isCollection]: d && Object(E.a)(d),
							[A.a.adaptive]: u
						})
					}, a.a.createElement(y, {
						postId: null == d ? void 0 : d.id
					}, a.a.createElement("div", {
						className: A.a.postDetails
					}, d && a.a.createElement(r.Fragment, null, m && !u ? void 0 : a.a.createElement(p.a, {
						className: A.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: d,
						onVoteClick: o,
						redditStyle: !0
					}), a.a.createElement(x.a, {
						name: h,
						className: A.a.mediaIcon
					}), a.a.createElement(g.c, {
						className: A.a.postTitle,
						post: d,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : C.a.lightboxHeaderText,
						titleLinkClassName: A.a.postTitleLink
					}), a.a.createElement(b.a, {
						post: d,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && a.a.createElement(a.a.Fragment, null, a.a.createElement(_.a, {
						className: A.a.srIcon
					}), a.a.createElement(f.a, {
						to: this.props.subreddit.url,
						className: A.a.subredditName
					}, this.props.subreddit.name))), O && i && i.urlParams.subredditName && a.a.createElement("div", {
						className: A.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), a.a.createElement("div", {
						className: A.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && a.a.createElement(v.a, {
						className: Object(c.a)(A.a.SubscribeButton, {
							[A.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: this.handleSubscribeButtonClick,
						small: !0
					}), !this.props.hideCloseButton && a.a.createElement(G, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const G = a.a.memo(e => a.a.createElement(y.t, {
				className: A.a.CloseButton,
				size: y.d.XS,
				onClick: e.onClick,
				priority: y.c.Plain,
				Icon: Object(x.b)("close"),
				text: s.fbt._("Close", null, {
					hk: "4gbyAA"
				}),
				title: s.fbt._("Close", null, {
					hk: "4gbyAA"
				}),
				"aria-label": s.fbt._("Close", null, {
					hk: "4gbyAA"
				})
			}));
			t.a = Object(O.c)(L(B))
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const a = "Header--Moderation",
				o = () => null;
			t.b = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const a = () => null;
			t.a = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(r.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "NotificationUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("NotificationUnit").then(n.bind(null, "./src/reddit/components/NotificationUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NotificationUnit/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/NotificationUnit/index.m.less"),
				o = n.n(a);
			const i = () => r.a.createElement("li", {
					className: o.a.placeholderWrapper
				}, r.a.createElement("span", {
					className: o.a.placeholderAvatar
				}), r.a.createElement("span", {
					className: o.a.placeholderContent
				})),
				c = () => r.a.createElement("ol", null, r.a.createElement(i, null), r.a.createElement(i, null), r.a.createElement(i, null))
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationItem: "_3mUSJN4kdLCGjq-K-JLJw",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
				isNightMode: "_3ds5pVvIyBrh1GgQ2O7AFd",
				contextContainer: "_3T3J7R8JnlSfiFdB5bxe5h",
				link: "_1tpiOc0IxpDU113wUs4zi1",
				inAppNotification: "_3U799isaNx88b2pVv1S7m1",
				avatarContainer: "_2WN4-UdVoyjpLQ8mpNTQA",
				avatar: "_12V0IULSx8mSJHxdpHwOGE",
				nsfwAvatar: "_1Bzw8F6BC4Vk8OzAgnU0z3",
				notificationIconContainer: "_3smo-GSstogGTGh6ArpwI0",
				NotifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				notifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				RedditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				redditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				Separator: "_1caKsZ5CCRPSfIgoh608Ej",
				separator: "_1caKsZ5CCRPSfIgoh608Ej",
				topBar: "_3mGSd8RyCZhF_eqyrV_Bvk",
				TitleWrapper: "_3D7vaSdKwBK4pdvYmH0ib",
				titleWrapper: "_3D7vaSdKwBK4pdvYmH0ib",
				title: "_180jOSBDwwE60X5UR8zt3-",
				"m-tooltip": "_2a8MIP8QlMF7KPqTup62Vt",
				mTooltip: "_2a8MIP8QlMF7KPqTup62Vt",
				timeAgo: "_2fQXbzOYQuzqlwMzxgtBKH",
				menuButton: "_8Q653FSGz7lD9Ux0AQsXY",
				isOpen: "WHFiF_asC8mzlevTdJv26",
				MenuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				menuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				contentContainer: "_3Q_e75oXJ8meqWwAQS36l2",
				body: "_2VDnxV3G5ZvEDq10Z-_fM9",
				ButtonIcon: "_25ecrisK-bGTesa4kIqyHR",
				buttonIcon: "_25ecrisK-bGTesa4kIqyHR",
				ReplyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				replyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				notificationButton: "_3doOacPPJ-LU-aBSoLl9TV",
				isFullWidth: "_36xH7NkS9uRrlN87iMo6Bw",
				isUnread: "_2svu3lh5YfWQmYfACdB2J5",
				replyIcon: "_3LbCSOW9yuZK_CHzTuR9M5",
				postIcon: "_102yZEdZMcXLlu2Ri0KD9O",
				postEmbedContainer: "_1cndvAxAFPMUr8IaWuw_we",
				postEmbedContent: "_2fsQOzhZpW9XNu1RXtgzqW",
				deleted: "LypGzp3NJwjpkpsRn9Ocn",
				postEmbedTitleContainer: "_2XT3C7unUlQXgaiyeYfIYv",
				postEmbedTitle: "_1SZwyv3jy4dBipT0yC1CcI",
				postEmbedMeta: "_1LcCO3y9JhylZFlKsgvzHs",
				postEmbedBlurredThumbnailContainer: "_2EmrjrpYxkgB5_ljritGbO",
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				postEmbedThumbnailBase: "_3CGVcVQDu97m9Oj_xs0n01",
				postEmbedBlurredThumbnail: "_2a0rc3KL05PEnGmVWcQI8W",
				postEmbedNSFWThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				postEmbedNsfwThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				WarningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				warningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				StyledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				styledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				overflowMenuContainer: "_2UKt6pQu-os9uxZnfhPydP",
				overflowMenuOption: "_1g8x_Z2KsTf65RBk7dRBZm",
				placeholderWrapper: "_2iacm7sPgvO9z8gO1W7FoY",
				placeholderAvatar: "_2_cDiTNVpitX7CtTmIambB",
				placeholderContent: "_2KpinIkIJ7VxNGQgUgzJCA",
				glimmer: "_27pfB7o_o_4F4TdujFhrNO",
				PostUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				postUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				StateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				stateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				Text: "_2bba9zuFqUwxMhGdswkU86",
				text: "_2bba9zuFqUwxMhGdswkU86"
			}
		},
		"./src/reddit/components/OfflineBanner/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "OEQgz7Lkj--3zFaLL7BUF",
				online: "_1HWVXJoazfrENIGlRprCVp",
				snoomoji: "_3BcAFuYpz37S0WFvgyWCUN",
				title: "_2hQKVL2Pm4yfkiqifapnBp",
				refresh: "_1E59q-NCGBwN0Aq_bPsPKb",
				hidden: "_2elztvdigLcbcRyu_4wcFW"
			}
		},
		"./src/reddit/components/Onboarding/UsernameConfirmationModals/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "UsernameConfirmationModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("UsernameConfirmationModals").then(n.bind(null, "./src/reddit/components/Onboarding/UsernameConfirmationModals/modalSwitcher.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Onboarding/UsernameConfirmationModals/modalSwitcher.tsx"
				}
			}, {
				ssr: !1
			})
		},
		"./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWrapper: "_1hLh4ExbW_Gl2pkGABn5Fq",
				commonBtn: "_3qX-j7T3VyXW0TBXQ7qkHK",
				primaryBtn: "_2FhXjIw1NMLaXYPWvrnUCg",
				secondaryBtn: "_3Nbznnag8RXkaF5nEep0Pk",
				withTopBorder: "_3brHkn8WaQ5H2a1LCn89uk",
				confirmContainer: "_24bis7_J1W0ONK7UsGGBZy",
				confirmToastContainer: "_3bv61QiJPtGfHcXPpyOpkc",
				confirmModalBody: "_2O5VCGnV4yRDRvGGGyH5T0",
				confirmModalHeader: "_28EAA6q-RnTJAGjzmgV3Ei",
				confirmModalDescription: "_1mjvXY5U1vwpsbbNYGJjul",
				mResponsive: "_1a2XFA9WQOHGxunCZN6IjZ",
				confirmModalIcon: "-JVIMQjsj_SPFhYYAQvsI",
				questionWrapper: "_3-s4mChdgxSWHNGzBUc0N4",
				questionIcon: "_1-mT11KLeK0Cj3V_xKgaTx",
				confirmModalTitle: "_3e3gGI61xrpfMpllnZxDrm",
				confirmToastTitle: "MYXaqAXi91ALzJTXm9rjA",
				welcomeBackModalTitle: "rTLLrliYnsQtx0zfqWuwt",
				usernameWrapper: "_2WW7LagVCdXCoAI0ts8mJr"
			}
		},
		"./src/reddit/components/PinnedSubscriptions/index.m.less": function(e, t, n) {
			e.exports = {
				title: "FRrbwuHy8Zmlubp3nowLZ",
				listHeader: "_3hELZctjzdizaWjW1al9DZ",
				unpin: "_2oY_N7NWiAv9m_mFIRdwVX",
				icon: "_3B-ny-D97ZKwdUyXAaWF19",
				Component: "_20fGT0XJD3MvX9yBsVeKMn",
				component: "_20fGT0XJD3MvX9yBsVeKMn",
				createAccountSection: "BtYn3oMRXzNwmNMkolecQ",
				withOverflow: "_3k3RwDkEsbX50bb-DBvuWj"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-PostCreationForm-PredictionEditor-InactivityModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-PostCreationForm-PredictionEditor-InactivityModal").then(n.bind(null, "./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx"
				}
			});
			Object(o.b)(i.a.ECON_PREDICTIONS_INACTIVITY_MODAL, () => a.a.createElement(c, null))
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal").then(n.bind(null, "./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx"
				}
			});
			Object(o.b)(i.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT, () => a.a.createElement(c, null))
		},
		"./src/reddit/components/PostFlowUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "PostFlowUpsellModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PostFlowUpsellModal").then(n.bind(null, "./src/reddit/components/PostFlowUpsellModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostFlowUpsellModal/index.tsx"
				}
			});
			Object(o.b)(i.a.POST_FLOW_UPSELL_MODAL_ID, e => a.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const d = () => Object(o.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PremiumPurchaseModal"), n.e("PremiumPurchaseModal")]).then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(l.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(a.a)({
					getComponent: d,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(i.b)(c.a.ECON_PREMIUM_PURCHASE, () => r.a.createElement(u, null))
		},
		"./src/reddit/components/PromptTooltip/TooltipHooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_2ukk2zBUtkijjIv8uGpGK",
				tooltip: "_21mjMOHMLOJXm_uLG6jmFe",
				visible: "bxlw8_5wUYitxHKlcuDhP"
			}
		},
		"./src/reddit/components/QrCodeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-QrCodeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("reddit-components-QrCodeModal")]).then(n.bind(null, "./src/reddit/components/QrCodeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/QrCodeModal/index.tsx"
				}
			});
			Object(o.b)(i.a.QR_CODE_MODAL, () => a.a.createElement(c, null))
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "AdminPanel",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~AdminPanel"), n.e("AdminPanel")]).then(n.bind(null, "./src/reddit/components/AdminPanel/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdminPanel/index.tsx"
				}
			});

			function u() {
				const e = Object(o.d)();
				return Object(r.useEffect)(() => {
					e(Object(i.a)())
				}, []), Object(o.e)(e => Object(c.b)(e) || Object(l.P)(e) || Object(l.O)(e)) ? a.a.createElement(d, null) : null
			}
		},
		"./src/reddit/components/Root/faceplate.less": function(e, t, n) {},
		"./src/reddit/components/Root/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL",
				containerExp: "KDkLHOpoLUZvoYQUBe9nF"
			}
		},
		"./src/reddit/components/Root/tailwind.css": function(e, t, n) {},
		"./src/reddit/components/ShortcutIndexModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ShortcutWrapper/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ShortcutWrapper",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ShortcutWrapper").then(n.bind(null, "./src/reddit/components/ShortcutWrapper/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ShortcutWrapper/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, n) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class o extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(a.a)(o);
			t.a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/SubredditCreationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SubredditCreation").then(n.bind(null, "./src/reddit/components/SubredditCreationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SubredditCreationModal/index.tsx"
				}
			});
			Object(o.b)(i.a.SUBREDDIT_CREATION_MODAL_ID, e => a.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : o.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: s,
						...r
					} = e;
					return a.a.createElement(o.t, u({}, r, {
						priority: m(o.c.Primary, t, n),
						className: Object(d.a)(r.className, l.a.BaseButton),
						size: s ? o.d.S : o.d.M
					}))
				},
				b = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = e => {
					let {
						buttonType: t,
						border: n,
						priority: s,
						small: r,
						...i
					} = e;
					return a.a.createElement(o.t, u({}, i, {
						priority: m(o.c.Secondary, n, s),
						className: Object(d.a)(i.className, l.a.BaseButton),
						size: r ? o.d.S : o.d.M,
						text: b(t)
					}))
				};
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: s,
						small: r = !1,
						isFullWidth: o = !1,
						style: c
					} = this.props, l = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
						isFullWidth: o,
						style: c
					};
					return this.props.userIsSubscriber ? a.a.createElement(h, u({}, l, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(p, u({}, l, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(a.a))
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return w
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return T
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				o = n("./node_modules/lodash/shuffle.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/endpoints/survey/index.ts");
			const b = async (e, t, n) => {
				const s = await Object(p.b)(t());
				if (s.ok) {
					const t = s.body,
						{
							activeSurveys: r
						} = t.data.customerSurveyConfig,
						a = r.find(t => t.experimentName === e.experimentName);
					a && n({
						...e,
						steps: a.steps
					})
				}
			};
			var h = n("./src/reddit/helpers/survey/index.ts"),
				g = n("./src/reddit/models/Survey/index.ts"),
				f = n("./src/reddit/selectors/survey.ts"),
				v = n("./src/reddit/selectors/telemetry.ts");
			const O = (e, t) => {
					const n = Object(f.c)(e),
						s = Object(f.a)(e),
						r = Object(f.e)(e);
					if (n && s || "" !== r) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const a = v.q(e, t);
					return a ? {
						experiment_name: a.name,
						experiment_variant: a.variant,
						experiment_version: a.version
					} : {}
				},
				C = e => {
					switch (e) {
						case g.a.CES:
							return "ces";
						case g.a.CSAT:
							return "csat";
						case g.a.NPS:
							return "nps";
						case g.a.MULTI_CHOICE:
							return "multi_choice"
					}
				},
				y = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...v.o(n),
					survey: O(n, e)
				}),
				E = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: r,
						questionId: a,
						questionParentId: o,
						type: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "rating",
						...v.o(e),
						survey: {
							type: C(i),
							min: i === g.a.NPS ? 0 : 1,
							max: i === g.a.NPS ? 10 : 7,
							question: s,
							question_id: a,
							parent_question_id: o,
							score: r,
							...O(e, n)
						}
					})
				},
				x = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						text: r,
						type: a,
						questionId: o,
						questionParentId: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "freeform_text",
						...v.o(e),
						survey: {
							question: s,
							type: C(a),
							text: r,
							question_id: o,
							parent_question_id: i,
							...O(e, n)
						}
					})
				},
				_ = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: r,
						type: a,
						questionId: o,
						questionParentId: i,
						max: c,
						text: l
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "multi_choice",
						...v.o(e),
						survey: {
							type: C(a),
							min: 0,
							max: c,
							text: l,
							question: s,
							score: r,
							question_id: o,
							parent_question_id: i,
							...O(e, n)
						}
					})
				};
			var j = n("./src/reddit/hooks/useGqlContext.ts"),
				P = n("./src/reddit/hooks/useTracking.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/experiments/index.ts"),
				N = n("./src/reddit/selectors/user.ts");
			const w = () => {
					const e = Object(l.d)(),
						t = Object(j.a)(),
						[n, s] = Object(c.useState)(null),
						r = Object(P.a)(),
						o = Object(l.e)(N.k),
						i = Object(l.e)(N.Hb),
						u = Object(l.e)(k.a, a.a),
						m = Object(l.e)(f.c),
						p = Object(l.e)(f.a),
						g = Object(l.e)(f.b),
						v = Object(l.e)(f.d),
						O = Object(l.e)(f.e),
						C = Object(c.useMemo)(() => {
							const e = Object(h.h)(),
								t = {};
							for (const n of e) t[n] = u[n];
							return t
						}, [u]),
						E = Object(c.useCallback)(e => {
							setTimeout(() => s(e), 500)
						}, []),
						x = Object(c.useCallback)(async e => {
							if (m) {
								const n = Object(h.f)({
									triggerName: e,
									isDemoEnabled: m,
									activeDemoTrigger: p,
									demoTriggerThreshold: g
								});
								return void(n && b(n, t, E))
							}
							const s = Object(h.e)({
								triggerName: e,
								surveyExperimentVariants: C,
								samplingId: o || i,
								isSampleFactorEnabled: v,
								surveyName: O
							});
							if (!s || s.experimentName === (null == n ? void 0 : n.experimentName)) return;
							const r = C[s.experimentName];
							(null == r ? void 0 : r.variant) && s.variants.find(e => e.variantName === r.variant) && b(s, t, E)
						}, [n, C, o, i, v, m, p, g, O, E, t]);
					return Object(c.useEffect)(() => {
						const e = Object(h.c)(),
							t = e.subscribe(x);
						return () => e.unsubscribe(t)
					}, [x]), Object(c.useEffect)(() => {
						if (!n) return;
						const t = Date.now();
						Object(h.j)(n, t), e(Object(d.G)({
							surveyLastSeenTime: t
						}, !1)), r(y(n.experimentName, "display"))
					}, [n, e, r]), {
						activeSurvey: n,
						setActiveSurvey: s
					}
				},
				M = e => {
					let {
						activeStepNum: t,
						activeSurvey: n,
						isFollowUp: r,
						textResponse: a,
						setTextResponse: o,
						setIsSurveyDismissed: i,
						uiStep: l
					} = e;
					(e => {
						let {
							isFollowUp: t,
							textResponse: n
						} = e;
						const r = Object(c.useCallback)(e => {
							if (t && n.length) return e.preventDefault(), e.returnValue = "sure?", s.fbt._("Are you sure?", null, {
								hk: "1B7lB5"
							})
						}, [t, n]);
						Object(c.useEffect)(() => (window.addEventListener("beforeunload", r), () => window.removeEventListener("beforeunload", r)), [r])
					})({
						isFollowUp: r,
						textResponse: a
					});
					const [d, u] = Object(c.useState)(!1), m = Object(P.a)(), p = n.experimentName, b = n.steps[t], h = null == b ? void 0 : b.type, f = null == b ? void 0 : b.question, v = Object(c.useCallback)(() => {
						t >= 0 ? u(!0) : (i(!0), m(y(n.experimentName, "dismiss")))
					}, [t, n, m, i]), O = Object(c.useCallback)(() => {
						o(""), i(!0);
						const e = {
							question: f,
							experimentName: p,
							type: h,
							action: "dismiss",
							questionId: l.toString(),
							questionParentId: b.type === g.a.MULTI_CHOICE && r ? `${l-1}` : null
						};
						m(r ? x(e) : b.type === g.a.MULTI_CHOICE ? _(e) : E(e))
					}, [p, r, f, b, m, i, o, h, l]);
					return {
						isLeavingModalShowing: d,
						onClose: v,
						onLeaveCancel: Object(c.useCallback)(() => u(!1), []),
						onLeaveConfirm: O
					}
				},
				I = e => {
					let {
						activeSurvey: t,
						selectedNumber: n,
						setIsSurveyDismissed: s,
						setSelectedNumber: r,
						setTextResponse: a,
						textResponse: o
					} = e;
					const [l, d] = Object(c.useState)(-1), [u, m] = Object(c.useState)(0), [p, b] = Object(c.useState)(!1), h = Object(P.a)(), [f, v] = Object(c.useState)(""), [O, C] = Object(c.useState)([]), j = Object(c.useCallback)(() => {
						var e, c;
						const O = t.experimentName,
							j = t.steps[l],
							P = null == j ? void 0 : j.type,
							S = null == j ? void 0 : j.question,
							k = null == j ? void 0 : j.followUpQuestion,
							N = t.steps[l + 1],
							w = null == N ? void 0 : N.type,
							M = null == N ? void 0 : N.question;
						if (m(u + 1), N && N.questionOptions && C(i()(N.questionOptions)), -1 === l) {
							h(y(O, "agree")), d(0);
							const e = {
								question: M,
								type: w,
								action: "display",
								experimentName: O,
								questionId: `${u+1}`.toString(),
								questionParentId: null
							};
							return void h(w === g.a.MULTI_CHOICE ? _({
								text: f,
								...e
							}) : E(e))
						}
						const I = {
							experimentName: O,
							type: P,
							action: "submit",
							questionId: u.toString(),
							questionParentId: j.type === g.a.MULTI_CHOICE && p ? `${u-1}` : null
						};
						if (h(p ? x({
								text: o,
								question: k,
								...I
							}) : P === g.a.MULTI_CHOICE ? _({
								question: S,
								max: null === (e = j.questionOptions) || void 0 === e ? void 0 : e.length,
								score: null === (c = j.questionOptions) || void 0 === c ? void 0 : c.findIndex(e => e === f),
								text: f,
								...I
							}) : E({
								question: S,
								score: n && n + (P === g.a.NPS ? 0 : 1),
								...I
							})), r(void 0), a(""), v(""), p || !k)
							if (b(!1), l + 1 >= t.steps.length) s(!0);
							else {
								d(l + 1);
								const e = {
									experimentName: O,
									action: "display",
									type: w,
									question: M,
									questionId: (u + 1).toString()
								};
								h(w === g.a.MULTI_CHOICE ? _({
									text: f,
									...e
								}) : E(e))
							}
						else b(!0), h(x({
							experimentName: O,
							action: "display",
							type: P,
							question: k,
							questionId: `${u+1}`,
							questionParentId: u.toString()
						}))
					}, [f, v, l, t, p, o, n, h, s, r, a, u]);
					return {
						questionOptions: O,
						selectedOption: f,
						setSelectedOption: v,
						activeStepNum: l,
						isFollowUp: p,
						onStepComplete: j,
						uiStep: u,
						setActiveStepNum: d,
						setUIStep: m,
						setIsFollowUp: b
					}
				},
				T = e => {
					let {
						isSurveyDismissed: t,
						setIsSurveyDismissed: n,
						setActiveStepNum: r,
						setActiveSurvey: a,
						setUIStep: o,
						setIsFollowUp: i,
						shouldMount: d,
						uiStep: p
					} = e;
					const b = Object(l.d)();
					Object(c.useEffect)(() => {
						t && !d && setTimeout(() => {
							r(-1), o(0), i(!1), a(null), b(Object(u.g)("")), p > 1 && b(Object(m.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: S.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [b, t, d, p, n, r, a, o, i])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/Survey/hooks.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "SurveyAsync",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SurveyAsync").then(n.bind(null, "./src/reddit/components/Survey/Async.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Survey/Async.tsx"
				}
			});

			function c() {
				const {
					activeSurvey: e,
					setActiveSurvey: t
				} = Object(o.d)();
				return e ? a.a.createElement(i, {
					activeSurvey: e,
					setActiveSurvey: t
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/objectSelector/index.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = n("./src/reddit/models/StructuredStyles/index.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/lib/CSSVariableProvider/index.tsx"),
				f = n("./src/lib/isAdHocMultireddit/index.ts");
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(d.r)(e, t);
			class O extends a.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return a.a.createElement(g.e, {
						theme: n,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const C = Object(o.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
				if (Object(p.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.i)(e)) return Object(p.f)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.i)(e) || Object(h.tb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.I)(e, n);
				if (!s) return;
				if (Object(h.sb)(e, {
						subredditId: s
					})) return;
				const r = e.structuredStyles.models[s];
				return r || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.z)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.Jb)(e).nightmode
			}, (e, t) => {
				const n = Object(h.Jb)(e);
				if (Object(h.S)(e)) return !n.hideNSFW;
				const s = v(e, t);
				if (s) {
					const t = Object(b.C)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const r = Object(d.e)(e, t);
				return !!r && r.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, r, a, o, i, c, l, d, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: l,
						isCommentsPage: p,
						isOverlay: d
					},
					h = a && a.length && !Object(f.a)(a) ? `subredditvars-r-${a.toLocaleLowerCase()}` : g.c;
				if (t && n && r) {
					const e = Object(u.h)(n, r);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(m.i)(e, b)
					}
				}
				if (o) {
					const e = Object(u.h)(o);
					let t;
					return {
						isRootOrUniqueClassName: h,
						theme: t = c ? Object(m.h)(e, b) : Object(m.i)(e, b)
					}
				}
				return {
					isRootOrUniqueClassName: h,
					theme: Object(s.merge)(e, {
						subredditContext: b
					})
				}
			}))(O);
			t.b = C;
			const y = Object(l.v)()(C)
		},
		"./src/reddit/components/Toaster/EuCookiePolicyToast.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				primaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				Bread: "_3RhWPJfjpsEoBw52x0fQp2",
				bread: "_3RhWPJfjpsEoBw52x0fQp2",
				EuCookiePolicyContainer: "n4AaEF3hCCYK665NCiJr8",
				euCookiePolicyContainer: "n4AaEF3hCCYK665NCiJr8",
				EuCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				euCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				EuCookiePolicyText: "DbXewCiis2PwiAq2jiL5k",
				euCookiePolicyText: "DbXewCiis2PwiAq2jiL5k",
				EuCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r",
				euCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r"
			}
		},
		"./src/reddit/components/Toaster/MilestoneToast.m.less": function(e, t, n) {
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
		"./src/reddit/components/Toaster/PlainBread.m.less": function(e, t, n) {
			e.exports = {
				PlainBread: "trdUvQxqQHHqQKOUBcgnr",
				plainBread: "trdUvQxqQHHqQKOUBcgnr"
			}
		},
		"./src/reddit/components/Toaster/StyledComponents.m.less": function(e, t, n) {
			e.exports = {
				Text: "_7JH6kQpO-bx66b9ajIZrz",
				text: "_7JH6kQpO-bx66b9ajIZrz"
			}
		},
		"./src/reddit/components/Toaster/UappBannerToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "NODQrxMsajJv0SMw0Glss",
				icon: "NODQrxMsajJv0SMw0Glss",
				PrimaryButton: "_-660JDG_NhSvu-lby-LYB",
				primaryButton: "_-660JDG_NhSvu-lby-LYB",
				Bread: "_3jUV8naze01hV-7EqsBdjm",
				bread: "_3jUV8naze01hV-7EqsBdjm"
			}
		},
		"./src/reddit/components/Toaster/index.m.less": function(e, t, n) {
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
				UnlockIcon: "tClrg2w16xkW4hmCj8nTo",
				unlockIcon: "tClrg2w16xkW4hmCj8nTo",
				LockIcon: "ZI0D2mGVpaunJEvFji7pm",
				lockIcon: "ZI0D2mGVpaunJEvFji7pm",
				RemoveIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				removeIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
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
		"./src/reddit/components/Upsell/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomCellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomCellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomSheetUpsellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomSheetUpsellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				})
		},
		"./src/reddit/components/UserFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "_2jjk9b3mpveU6Vpam4kPBm",
				rightSideButtons: "_1DUcff8CoMLomEzQZ1S6IX",
				clearButton: "_2HCY4xCLt3RKVIgnkh0ZgW",
				goBackButton: "saAxhszfFnlBT8m48Quv9",
				Section: "_3dGLI85CRTmDAbSQrDiQZl",
				section: "_3dGLI85CRTmDAbSQrDiQZl",
				CheckboxText: "_2pIwiaNLf5jaTR1EK7Nx09",
				checkboxText: "_2pIwiaNLf5jaTR1EK7Nx09"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(i.c)({
					currentUser: l.m,
					isNightMode: l.fb,
					isPresenceUserPrefEnabled: l.X,
					shouldHideNSFW: l.H
				}),
				f = Object(o.b)(g);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: r,
					wrapperClassName: o,
					...i
				} = e, l = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return a.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, o)
				}, l ? a.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : a.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && a.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = Object(r.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(o.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(l, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					requestCloseBlade: () => n && e(Object(a.h)(n))
				}
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, r, a, o;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "d", (function() {
					return a
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/", e.Onboarding = "/account/onboarding/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(r || (r = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(a || (a = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(o || (o = {}))
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(s || (s = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(r || (r = {}))
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = a.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js");
			const o = a.createContext({
				showPromo: r.a,
				dismissPromo: r.a,
				completePromo: r.a,
				promos: new Map
			});
			t.a = o
		},
		"./src/reddit/contexts/ThrottlingContext/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/constants/featureThrottling.ts"),
				o = n("./src/reddit/helpers/featureThrottling/store/index.ts");
			const i = {
					isThrottled: !1,
					resetFeature: () => {
						throw new Error("Component attempted to reset feature with no ThrottlingContext")
					},
					throttleFeature: () => {
						throw new Error("Component attempted to throttle feature with no ThrottlingContext")
					}
				},
				c = Object.keys(a.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class l extends r.a.Component {
				constructor(e) {
					super(e), this.onThrottlingDataChange = (e, t) => {
						if (t) {
							const e = o.a.isFeatureThrottled(t);
							this.setState(n => e === n[t].isThrottled ? null : {
								...n,
								[t]: {
									...n[t],
									isThrottled: e
								}
							})
						} else this.setState(e => {
							const t = Object.keys(a.a).reduce((t, n) => (o.a.isFeatureThrottled(n) && (t[n] = {
								...e[n],
								isThrottled: !0
							}), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const n = c[t];
						return r.a.createElement(n.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(a.a).reduce((e, t) => (e[t] = {
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
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(c);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(a.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, r.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? r.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : r.a.createElement(o.a, {
				className: l.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Link/index.m.less"),
				a = n.n(r);
			t.a = s.a.a("link", a.a)
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/Typography/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Typography/index.m.less"),
				a = n.n(r);
			s.a.h1("heading1", a.a), s.a.h2("heading2", a.a), s.a.h3("heading3", a.a), s.a.h4("heading4", a.a);
			const o = s.a.h5("heading5", a.a),
				i = (s.a.h6("heading6", a.a), s.a.p("body1", a.a), s.a.p("body2", a.a)),
				c = (s.a.p("actionFont", a.a), s.a.p("metadata", a.a));
			s.a.p("metadata3", a.a)
		},
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./src/lib/constants/index.ts"), n("./src/lib/makeApiRequest/index.ts");
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = (n("./src/lib/omitHeaders/index.ts"), n("./src/redditGQL/operations/ClaimAwardOffer.json")),
				a = n("./src/redditGQL/operations/FetchSpecialEvents.json");
			n("./src/reddit/constants/headers.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/endpoints/gold/purchase.ts");
			const o = e => Object(s.a)(e, {
					...a
				}),
				i = e => Object(s.a)(e, {
					...r,
					variables: {
						input: {
							offerId: "free_awards"
						}
					}
				})
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				c = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/helpers/genericServerError/index.ts"),
				u = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const m = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(u.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(d.a)()
				},
				p = async e => {
					let {
						coins: t,
						context: n,
						correlationId: a,
						offerContext: i,
						pennies: d,
						rememberCard: u,
						token: p,
						savedCardId: b
					} = e;
					const h = {
							token: p ? p.id : void 0,
							coins: t,
							offer_context: i,
							pennies: d,
							remember_card: u,
							card_id: b,
							correlation_id: a
						},
						g = `${n.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(l.a)(g);
					return Object(r.a)(Object(o.a)(n, [c.a]), {
						method: s.pb.POST,
						endpoint: f,
						data: h
					}).then(m)
				}, b = async e => {
					let {
						coins: t,
						context: n,
						correlationId: a,
						gildParams: i,
						isOldReddit: d,
						offerContext: u,
						pennies: p,
						rememberCard: b,
						thingId: h,
						token: g,
						savedCardId: f
					} = e;
					const {
						gildType: v,
						isAnonymous: O,
						message: C
					} = i, y = {
						token: g ? g.id : void 0,
						coins: t,
						offer_context: u,
						pennies: p,
						thing_id: h,
						gild_type: v,
						message: C ? C.trim() : "",
						is_anonymous: O,
						remember_card: b,
						card_id: f,
						correlation_id: a
					}, E = `${n.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, x = d ? E : Object(l.a)(E);
					return Object(r.a)(Object(o.a)(n, [c.a]), {
						method: s.pb.POST,
						endpoint: x,
						data: y
					}).then(m)
				}, h = async e => {
					let {
						context: t,
						correlationId: n,
						gildParams: a,
						isOldReddit: i,
						pennies: d,
						rememberCard: u,
						thingId: p,
						token: b,
						savedCardId: h
					} = e;
					const {
						gildType: g,
						isAnonymous: f,
						message: v
					} = a, O = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: g,
						message: v ? v.trim() : "",
						is_anonymous: f,
						pennies: d,
						remember_card: u,
						card_id: h,
						correlation_id: n
					}, C = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, y = i ? C : Object(l.a)(C);
					return Object(r.a)(Object(o.a)(t, [c.a]), {
						method: s.pb.POST,
						endpoint: y,
						data: O
					}).then(m)
				}, g = async e => {
					let {
						context: t,
						correlationId: n,
						pennies: a,
						token: i
					} = e;
					const d = {
							token: i.id,
							pennies: a,
							correlation_id: n
						},
						u = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(l.a)(u);
					return Object(r.a)(Object(o.a)(t, [c.a]), {
						method: s.pb.POST,
						endpoint: p,
						data: d
					}).then(m)
				}, f = "paymentInfoUpdated", v = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, s = new URLSearchParams({
						[f]: "true"
					}), r = await Object(a.a)(e, {
						...i,
						variables: {
							successUrl: `${n}?${s}`,
							cancelUrl: `${n}`
						}
					});
					if (!r.ok) throw new Error("Unable to update payment information");
					return r.body.data.changeStripePaymentMethod.sessionId
				}
		},
		"./src/reddit/helpers/awards/overlayIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = () => "COIN_PURCHASE_DROPDOWN_ID"
		},
		"./src/reddit/helpers/chat/isEmbeddedLiveChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			const s = ["true", "1"],
				r = e => {
					var t;
					return s.includes(null !== (t = new URLSearchParams(e).get("livechat_embed")) && void 0 !== t ? t : "")
				},
				a = e => {
					var t;
					return s.includes(null !== (t = e.queryParams.livechat_embed) && void 0 !== t ? t : "")
				}
		},
		"./src/reddit/helpers/counters/loggedOutOneFeed.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/telemetry/helpers/sendCounter.ts");
			const a = (e, t) => {
					Object(r.b)(s.o.Redesign, {
						type: r.a.FrontPageFailed,
						data: {
							errorType: e,
							pageType: t
						}
					})
				},
				o = e => {
					Object(r.b)(s.o.Redesign, {
						type: r.a.LoggedOutMenuRendered,
						data: {
							location: e
						}
					})
				}
		},
		"./src/reddit/helpers/counters/nsfwblocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/sample/index.ts"),
				a = n("./src/telemetry/helpers/sendCounter.ts");
			const o = () => !1;
			var i;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(i || (i = {}));
			const c = e => {
					o() || Object(a.b)(s.o.Redesign, {
						type: a.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				l = e => {
					!o() && e && Object(r.b)(10) && Object(a.b)(s.o.Redesign, {
						type: a.a.NsfwBlocking,
						data: {
							action: i.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/datadome.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s, r = n("./src/lib/constants/index.ts");
			! function(e) {
				e.Enabled = "datadome-bot-detection.enabled", e.Disabled = "datadome-bot-detection.disabled"
			}(s || (s = {}));
			const a = () => o() ? s.Enabled : s.Disabled,
				o = () => null !== document.getElementById(r.D)
		},
		"./src/reddit/helpers/frontpageCardPostCountExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s, r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/constants/postLayout.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");

			function d(e) {
				return Object(i.U)(e, {}) === a.g.Large && !Object(l.R)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(o.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: r.Yd
				})
			}

			function m(e) {
				switch (e) {
					case r.Zd.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case r.Zd.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/getAccountManagerMessageTarget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/config.ts");
			const r = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let r, a, o, i, c, l, d, u, m, p, b, h;
				return e ? e.quarantinedSubreddit ? (o = s.a.QuarantinedSubreddit, c = e.quarantineMessage, l = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = s.a.PrivateSubreddit, i = e.subredditDescription, u = e.isContributorRequestsDisabled, m = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = s.a.GoldSubreddit : e.subredditBanned ? (o = s.a.SubredditBanned, r = e.subredditBanMessage, a = e.subredditBanTitle) : e.subredditDoesNotExist ? o = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? o = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (o = s.a.GatedSubreddit, p = e.interstitialWarningMessage, b = e.interstitialWarningMessageHtml, h = e.interstitialWarningMessageRTJson) : t && (o = s.a.Nsfw), o && n ? {
					banMessage: r,
					banTitle: a,
					contentGateType: o,
					isContributorRequestsDisabled: u,
					isContributorRequestTimestamp: m,
					subredditDescription: i,
					subredditName: n,
					quarantineMessage: c,
					quarantineMessageHtml: l,
					quarantineRequiresEmail: d,
					interstitialWarningMessage: p,
					interstitialWarningMessageHtml: b,
					interstitialWarningMessageRTJson: h
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const r = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/karma.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = e => {
				if (!e || !e.karma) return 0;
				const {
					total: t,
					...n
				} = e.karma;
				return t || Object.values(n).reduce((e, t) => e + (t || 0), 0)
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				headingContent: "vLtBjS_8SMsuZByMrcgJH",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = n.n(c);
			const d = i.a.button("button", l.a),
				u = e => t => r.a.createElement("div", {
					className: t.className
				}, e);

			function m(e, t, n) {
				return b(e, t, !0, {
					...n
				})
			}

			function p(e, t, n) {
				return b(e, t, !1, {
					...n
				})
			}

			function b(e, t, n, s) {
				const i = e,
					c = "function" == typeof t ? t : u(t),
					{
						meta: d
					} = s,
					m = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(i, {
						className: Object(o.a)(l.a.icon, {
							[l.a.isLit]: e
						})
					}), r.a.createElement(c, {
						className: l.a.body
					}), d && r.a.createElement("div", {
						className: l.a.metaContainer
					}, d));
				return n ? e => r.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? r.a.createElement(a.a, {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : r.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(o.a)(e.className, l.a.button),
					onClick: e.onClick
				}, m(e.isLit))
			}
		},
		"./src/reddit/helpers/trackers/authControls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const o = e => {
					const t = Object(r.o)(e);
					return {
						actionInfo: Object(a.d)(e),
						post: t && Object(a.K)(e, t) || null,
						profile: Object(a.T)(e),
						screen: Object(a.cb)(e),
						subreddit: Object(a.lb)(e)
					}
				},
				i = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "login",
					...o(t)
				}),
				c = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "signup",
					...o(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: s.c.CLICK,
					noun: "login_signup",
					...o(e)
				})
		},
		"./src/reddit/helpers/trackers/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			const s = () => e => ({
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
				}),
				a = () => e => ({
					source: "banner",
					action: "view",
					noun: "lang_listing_site"
				}),
				o = () => e => ({
					source: "banner",
					action: "click",
					noun: "lang_listing_site"
				}),
				i = () => e => ({
					source: "banner",
					action: "dismiss",
					noun: "lang_listing_site"
				})
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => ({
					...Object(s.o)(t),
					customFeed: Object(s.n)(t, e),
					source: "custom_feeds"
				}),
				a = e => t => ({
					...r(e, t),
					action: "click",
					noun: "delete"
				}),
				o = e => t => ({
					...r(e, t),
					action: "click",
					noun: "follow"
				}),
				i = e => t => ({
					...r(e, t),
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => ({
					...r(e, t),
					action: "click",
					noun: "duplicate"
				}),
				l = e => t => ({
					...r(e, t),
					action: "click",
					noun: "share"
				}),
				d = e => t => ({
					...r(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...r(e, t),
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/garlicBread.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					...Object(r.o)(e),
					action: s.c.CLICK,
					noun: "preview",
					source: "garlic_bread"
				}),
				o = () => e => ({
					...Object(r.o)(e),
					action: s.c.CLICK,
					noun: "garlic_bread",
					source: "nav"
				})
		},
		"./src/reddit/helpers/trackers/goldTopNav.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const o = "gold_top_nav",
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						...Object(r.h)(e, t),
						correlationId: Object(s.d)(s.a.GoldPayment, !1),
						profile: a.T(e),
						subreddit: a.lb(e)
					}
				},
				c = (e, t) => n => ({
					source: o,
					action: "click",
					noun: e,
					...i(n, {
						offerContext: t
					})
				}),
				l = e => t => ({
					source: o,
					action: "click",
					noun: "coins_package",
					...i(t, {
						packageId: e
					})
				}),
				d = () => e => ({
					source: o,
					action: "click",
					noun: "premium",
					...i(e)
				}),
				u = () => e => ({
					source: o,
					action: "click",
					noun: "free_award_offer",
					...i(e)
				}),
				m = e => t => ({
					source: o,
					action: "view",
					noun: "dropdown",
					...i(t, {
						offerContext: e
					})
				})
		},
		"./src/reddit/helpers/trackers/happeningNow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "e", (function() {
				return v
			}));
			var s, r = n("./src/reddit/selectors/features/happeningNow/index.ts"),
				a = n("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/redditGQL/types.ts");
			! function(e) {
				e.TopNav = "top_nav", e.Dropdown = "home_drop_down", e.ChatTabEmptyState = "chat_tab_empty_state", e.LiveBar = "live_bar"
			}(s || (s = {}));
			const l = e => ({
					...Object(i.o)(e),
					geo: Object(i.t)(e)
				}),
				d = (e, t) => {
					const n = Object(o.U)(e, {
						postId: t
					});
					return n ? {
						isMod: Object(a.c)(e, {
							subredditId: n.id
						})
					} : {}
				},
				u = (e, t) => {
					const n = Object(o.U)(e, {
						postId: t
					});
					return n ? {
						name: n.name,
						id: n.id
					} : {}
				},
				m = (e, t) => {
					const n = Object(r.d)(e, t),
						s = (null == n ? void 0 : n.contentType) === c.t.Chat,
						a = Object(r.b)(e).indexOf(t),
						o = Object(r.c)(e),
						i = o.indexOf(t),
						l = -1 !== i;
					return {
						reason: l ? "recommended" : "popular",
						position: l ? i + 1 : o.length + a + 1,
						pageType: s ? "live_chat" : "liveaudio"
					}
				},
				p = e => t => ({
					...l(t),
					source: "live_chat",
					action: "click",
					noun: "discover_live",
					actionInfo: {
						pageType: "home",
						paneName: e
					}
				}),
				b = e => ({
					...l(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						reason: "discover_live",
						paneName: Object(r.e)(e)
					}
				}),
				h = e => t => ({
					...l(t),
					source: "discover_live",
					action: "view",
					noun: "discover_page_item",
					actionInfo: {
						paneName: Object(r.e)(t),
						...m(t, e)
					},
					post: Object(i.K)(t, e),
					subreddit: u(t, e),
					userSubreddit: d(t, e)
				}),
				g = e => t => ({
					...l(t),
					source: "discover_live",
					action: "click",
					noun: "discover_page_item",
					actionInfo: {
						paneName: Object(r.e)(t),
						...m(t, e)
					},
					post: Object(i.K)(t, e),
					subreddit: u(t, e),
					userSubreddit: d(t, e)
				}),
				f = e => t => ({
					...l(t),
					source: "discover_live",
					action: "click",
					noun: "tab",
					actionInfo: {
						paneName: e
					}
				}),
				v = e => t => ({
					...l(t),
					source: "discover_live",
					action: "click",
					noun: "create_post",
					actionInfo: {
						paneName: Object(r.e)(t)
					},
					correlationId: e
				})
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "g", (function() {
				return g
			}));
			var s = n("./src/reddit/selectors/avatarPushcard.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				i = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var c;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(c || (c = {}));
			const l = e => t => {
					const n = Object(r.o)(t);
					return {
						...n,
						source: "marketplace",
						action: "view",
						noun: "product_detail_page",
						actionInfo: {
							...n.actionInfo,
							reason: e,
							pageType: "product_detail_page"
						}
					}
				},
				d = (e, t, n) => a => {
					const o = Object(s.a)(a).id;
					return {
						...Object(r.o)(a),
						source: e,
						action: t,
						noun: n,
						goldPurchase: {
							offerContext: o
						}
					}
				},
				u = d("marketplace_top_nav", "view", "achievement_icon"),
				m = d("marketplace_top_nav", "click", "achievement_icon"),
				p = d("user_drawer", "view", "pushcard"),
				b = d("user_drawer", "click", "pushcard"),
				h = d("user_drawer", "dismiss", "pushcard"),
				g = d("user_drawer", "dismiss_confirm", "pushcard")
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.cb(e),
					profile: s.T(e),
					subreddit: s.lb(e)
				}),
				a = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...r(t)
				}),
				o = (e, t) => n => ({
					action: "click",
					source: "nav",
					noun: e,
					...r(n),
					topicMetadata: {
						displayName: t
					}
				}),
				i = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				l = e => t => ({
					...r(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "A", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "v", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "z", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "y", (function() {
				return O
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "s", (function() {
				return _
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "w", (function() {
				return P
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "E", (function() {
				return k
			})), n.d(t, "B", (function() {
				return N
			})), n.d(t, "D", (function() {
				return w
			})), n.d(t, "C", (function() {
				return M
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "c", (function() {
				return F
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "J", (function() {
				return G
			})), n.d(t, "I", (function() {
				return U
			})), n.d(t, "L", (function() {
				return H
			})), n.d(t, "K", (function() {
				return q
			})), n.d(t, "M", (function() {
				return W
			})), n.d(t, "H", (function() {
				return V
			})), n.d(t, "G", (function() {
				return z
			})), n.d(t, "F", (function() {
				return Q
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = [],
				o = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.ONBOARDING_LANGUAGE_SELECTION = "onboarding_language_collection", e.SETTINGS_LANGUAGE_COLLECTION = "settings_language_collection", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
					return t => ({
						...Object(r.o)(t),
						action: s.c.CLICK,
						noun: i.EXIT,
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: o
					})
				},
				l = () => e => ({
					...Object(r.o)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: o
				}),
				d = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: o
				}),
				u = e => t => ({
					...Object(r.o)(t),
					action: s.c.DISMISS,
					noun: e,
					source: o
				}),
				m = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = e => t => ({
					...Object(r.o)(t),
					source: o,
					action: s.c.VIEW,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				g = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				f = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				v = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				O = (e, t) => n => ({
					...Object(r.o)(n),
					source: o,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(n),
						reason: t,
						type: e
					}
				}),
				C = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				y = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				E = e => t => ({
					...Object(r.o)(t),
					source: o,
					action: s.c.SKIP,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				x = () => e => ({
					...Object(r.o)(e),
					source: o,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				_ = (e, t, n, a, c) => l => ({
					...Object(r.o)(l),
					source: o,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(l),
						reason: c
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: A(n),
						categoryId: a
					}
				}),
				j = (e, t, n, a, c, l) => d => ({
					...Object(r.o)(d),
					source: o,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(d),
						reason: l
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: A(t),
						categoryId: n,
						subredditName: a,
						subredditId: c
					}
				}),
				P = (e, t, n) => a => ({
					...Object(r.o)(a),
					source: o,
					action: n ? s.c.SELECT : s.c.DESELECT,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(a),
						reason: t,
						type: e
					}
				}),
				S = (e, t) => n => ({
					...Object(r.o)(n),
					source: o,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: A(e),
						categoryId: t
					}
				}),
				k = () => e => ({
					...Object(r.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				N = () => e => ({
					...Object(r.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				w = (e, t) => n => ({
					...Object(r.o)(n),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: A(e),
						categoryId: t
					}
				}),
				M = () => e => ({
					...Object(r.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				I = (e, t, n, a) => c => ({
					...Object(r.o)(c),
					source: o,
					action: s.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					actionInfo: {
						...Object(r.d)(c),
						reason: a
					},
					onboarding: {
						categoryName: A(t),
						categoryId: n
					}
				}),
				T = (e, t, n, a, c) => l => ({
					...Object(r.o)(l),
					source: o,
					action: s.c.VIEW,
					actionInfo: {
						...Object(r.d)(l),
						reason: c
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: A(e),
						categoryId: n,
						subredditName: t,
						subredditId: a
					}
				}),
				A = e => e.toLowerCase().replace(new RegExp("&", "g"), "and").replace(new RegExp(" ", "g"), "_").replace(new RegExp("[^-_a-z0-9]", "g"), "");
			var R, L, F;
			! function(e) {
				e.CONTINUE = "continue", e.LOGIN_ANOTHER_ACCOUNT = "login_another_account"
			}(R || (R = {})),
			function(e) {
				e.CHANGE_USERNAME = "change_username", e.KEEP_USERNAME = "keep_username"
			}(L || (L = {})),
			function(e) {
				e.GO_BACK = "go_back", e.YES_KEEP_USERNAME = "yes_keep_username"
			}(F || (F = {}));
			const D = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: o
				}),
				B = e => t => ({
					...Object(r.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: o
				}),
				G = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: o
				}),
				U = e => t => ({
					...Object(r.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: o
				}),
				H = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: o
				}),
				q = e => t => ({
					...Object(r.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: o
				}),
				W = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_TOOLTIP,
					source: o
				}),
				V = e => t => ({
					...Object(r.o)(t),
					source: "settings",
					action: s.c.VIEW,
					noun: i.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				z = e => t => ({
					...Object(r.o)(t),
					source: "settings",
					action: s.c.SUBMIT,
					noun: i.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				Q = (e, t, n) => a => ({
					...Object(r.o)(a),
					source: "settings",
					action: n ? s.c.SELECT : s.c.DESELECT,
					noun: i.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(r.d)(a),
						reason: t,
						type: e
					}
				})
		},
		"./src/reddit/helpers/trackers/recap.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return a
			})), n.d(t, "q", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "p", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "m", (function() {
				return E
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = "recap",
				a = () => e => ({
					...s.o(e),
					source: r,
					action: "view",
					noun: "recap",
					recap: s.Y(e)
				}),
				o = () => e => ({
					...s.o(e),
					source: r,
					action: "view",
					noun: "card",
					recap: s.Y(e)
				}),
				i = e => t => ({
					...s.o(t),
					noun: "subreddit",
					source: r,
					action: "click",
					recap: s.Y(t),
					subreddit: {
						id: e
					}
				}),
				c = (e, t) => n => ({
					...s.o(n),
					noun: "post",
					source: r,
					action: "click",
					recap: s.Y(n),
					post: {
						id: e,
						subredditId: t
					}
				}),
				l = (e, t) => n => ({
					...s.o(n),
					noun: "comment_unit",
					source: r,
					action: "click",
					recap: s.Y(n),
					comment: {
						id: e,
						postId: t
					}
				}),
				d = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "ability_card",
					recap: s.Y(e)
				}),
				u = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "learn_more",
					recap: s.Y(e)
				}),
				m = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "pn_enable",
					recap: s.Y(e)
				}),
				p = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "email_enable",
					recap: s.Y(e)
				}),
				b = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "email_verify",
					recap: s.Y(e)
				}),
				h = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "edit_snoovatar",
					recap: s.Y(e)
				}),
				g = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "hide_username",
					recap: s.Y(e)
				}),
				f = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "hide_avatar",
					recap: s.Y(e)
				}),
				v = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "share",
					recap: s.Y(e)
				}),
				O = (e, t, n) => a => ({
					...s.o(a),
					source: r,
					action: "click",
					noun: `${e?"subscribe":"unsubscribe"}`,
					recap: s.Y(a),
					subreddit: {
						id: n,
						name: t
					}
				}),
				C = () => e => ({
					...s.o(e),
					source: "nav",
					action: "click",
					noun: "recap",
					recap: s.Y(e)
				}),
				y = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "dismiss",
					recap: s.Y(e)
				}),
				E = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "place_timelapse",
					recap: s.Y(e)
				})
		},
		"./src/reddit/helpers/trackers/shortcuts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "t", (function() {
				return E
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "c", (function() {
				return S
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: s.K(n, t)
				}),
				o = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.h({
						state: n,
						commentId: t
					})
				}),
				i = r("show_panel"),
				c = r("esc_close"),
				l = e => a("enter_open_post", e),
				d = e => o("enter_comment_collapse", e),
				u = e => a("j_next", e),
				m = e => o("j_next", e),
				p = e => a("k_previous", e),
				b = e => o("k_previous", e),
				h = e => a("n_next", e),
				g = e => a("p_previous", e),
				f = e => a("s_save", e),
				v = e => o("s_save", e),
				O = e => a("h_hide", e),
				C = e => a("x_expando", e),
				y = e => a("a_upvote", e),
				E = e => o("a_upvote", e),
				x = e => a("z_downvote", e),
				_ = e => o("z_downvote", e),
				j = r("c_create_post"),
				P = e => a("l_go_to_link", e),
				S = e => o("r_comment", e);
			r("q_navigation")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const o = e => ({
					screen: r.cb(e),
					profile: r.T(e),
					subreddit: r.lb(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...o(t)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? r.v(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...o(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...o(e)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "advertise",
					...o(e)
				}),
				u = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
					...o(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...o(e)
				}),
				p = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(a.Cb)(t, {
							userName: e
						}).id
					},
					...r.o(t)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(a.Cb)(t, {
							userName: e
						}).id
					},
					...r.o(t)
				}),
				h = () => e => ({
					...o(e),
					source: "nav",
					action: "click",
					noun: "recap"
				})
		},
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts");

			function a(e) {
				const [t, n] = Object(s.useState)(Object(r.v)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(r.rb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js");
			const r = (e, t) => {
				Object(s.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			t.a = r
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: Object(a.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || o.a.gold
				}
			}), "CoinIcon", l.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return r.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(a.a)(i.a.checkbox, t)
				}, n), r.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, r.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), r.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), r.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), r.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), r.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), r.a.createElement("path", {
				d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
			}))
		},
		"./src/reddit/icons/svgs/GarlicBread/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "#ff4500"
			}, r.a.createElement("path", {
				d: "m6.4 0h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m12.8 0h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m19.2 0h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m25.6 0h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m32 6.4h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m32 12.8h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m32 19.2h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m32 25.6h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m19.2 25.6h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m25.6 25.6h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m6.4 25.6h-6.4v6.4h6.4z"
			})), r.a.createElement("path", {
				d: "m19.2 12.8h-6.4v6.4h6.4z",
				fill: "#000"
			}), r.a.createElement("g", {
				fill: "#ff4500"
			}, r.a.createElement("path", {
				d: "m6.4 19.2h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m6.4 12.8h-6.4v6.4h6.4z"
			}), r.a.createElement("path", {
				d: "m6.4 6.4h-6.4v6.4h6.4z"
			})), r.a.createElement("path", {
				d: "m19.2 6.4h-12.8v25.6h6.4v-6.4h12.8v-19.2zm0 12.8h-6.4v-6.4h6.4z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, r.a.createElement("g", null, r.a.createElement("circle", {
				fill: a.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, r.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#bluePinkGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: "bluePinkGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#6A5CFF"
				}), r.a.createElement("stop", {
					offset: "1",
					stopColor: "#E4ABFF"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				fill: "#737577",
				d: "M10 .38a9.62 9.62 0 100 19.24A9.62 9.62 0 0010 .38zm0 18A8.381 8.381 0 1114.6 3L9.41 15.55h1.35l4.87-11.73A8.36 8.36 0 0110 18.38z"
			}), r.a.createElement("path", {
				fill: "#737577",
				d: "M10.68 7.87l.66-1.56a1.649 1.649 0 00-.46-.15 3 3 0 00-.7-.07c-.502-.01-1 .09-1.46.29-.38.18-.72.436-1 .75V6.2H6.13v7.3h1.61V9.3A1.71 1.71 0 018 8.43a1.64 1.64 0 01.66-.59 2.12 2.12 0 011-.22 2.08 2.08 0 011.02.25z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(a.a)(e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: e.color || Object(i.a)(e).bodyText
			}, r.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), r.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), r.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), r.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), r.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), r.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), r.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = (n("./src/polyfill.ts"), n("./src/lib/constants/headers.ts")),
				a = n("./src/lib/performanceTimings/index.tsx"),
				o = n("./node_modules/@reddit/google-tag-manager/compiled.js"),
				i = n("./src/config.ts"),
				c = n("./node_modules/history/esm/history.js"),
				l = n("./node_modules/js-cookie/dist/js.cookie.js"),
				d = n.n(l),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				h = n("./src/lib/makeActionCreator/index.ts"),
				g = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				f = n("./src/lib/isFakeSubreddit/index.ts"),
				v = n("./src/lib/name/index.ts"),
				O = n("./src/reddit/selectors/user.ts");
			const C = (e, t) => async (n, s) => {
				var r;
				const a = s();
				if (Object(v.b)(t)) {
					const e = (null === (r = Object(O.m)(a)) || void 0 === r ? void 0 : r.displayText) || "";
					if (Object(v.c)(t, Object(v.a)(e))) return
				} else if (Object(f.a)(t)) return;
				n((e => ({
					payload: e,
					type: g.f
				}))(e))
			}, y = Object(h.a)(g.e), E = e => ({
				payload: {
					subreddits: e
				},
				type: g.b
			}), x = e => ({
				payload: e,
				type: g.a
			});
			var _ = n("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				j = n("./node_modules/redux-thunk/es/index.js"),
				P = n("./node_modules/request-idle-callback/index.js"),
				S = n("./src/lib/browser/isIncognito.ts"),
				k = n("./src/lib/constants/index.ts"),
				N = n("./src/lib/extractQueryParams/index.ts"),
				w = n("./src/lib/filterQueryParams/index.ts"),
				M = n("./src/lib/getParsedUserAgent/index.ts"),
				I = n("./src/lib/initializeClient/index.tsx"),
				T = n("./src/lib/loadableAction/index.ts"),
				A = n("./src/lib/matchRoute/index.ts"),
				R = n("./src/lib/performance.js"),
				L = n("./src/lib/reCaptchaEnterprise/index.ts"),
				F = n("./src/lib/safeJSONParse/index.ts"),
				D = n("./src/lib/serviceWorker/index.ts"),
				B = n("./src/reduxMiddleware/apiContext.ts"),
				G = n("./src/reduxMiddleware/gqlContext.ts"),
				U = n("./src/telemetry/index.ts"),
				H = n("./src/telemetry/helpers/sendEvent.ts"),
				q = n("./src/telemetry/models/Event.ts"),
				W = n("./src/telemetry/models/Timer.ts"),
				V = n("./src/reddit/actions/apiRequestHeaders.ts"),
				z = n("./src/reddit/actions/chat/toggle.ts"),
				Q = n("./src/lib/activeUserCountByLiveChatId/actions.ts"),
				Z = n("./src/lib/activeUserCountByLiveChatId/utils.ts"),
				K = n("./src/reddit/models/Post/index.ts"),
				J = n("./src/reddit/selectors/experiments/chat.ts");
			const X = Object(Z.b)(),
				Y = async (e, t, n) => {
					X(() => e(Y), Z.a);
					const s = function(e) {
						return Object.values(e.posts.models).filter(e => e.discussionType === K.b.Chat).map(e => e.id)
					}(t());
					Object(Q.b)(s, Object(J.e)(t()), Boolean(t().user.account), e, n)
				};
			var $ = n("./src/reddit/actions/comment/index.ts"),
				ee = n("./src/reddit/actions/emailCollection/index.ts"),
				te = n("./src/reddit/actions/emailVerification.ts"),
				ne = n("./src/reddit/actions/login.ts"),
				se = n("./src/reddit/selectors/activeModalId.ts"),
				re = n("./node_modules/reselect/es/index.js"),
				ae = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				oe = n("./src/reddit/selectors/meta.ts");
			const ie = Object(re.a)(oe.c, O.S, ae.d, ae.e, (e, t, n, s) => !(e || t || n && s)),
				ce = () => async (e, t) => {
					const n = t(),
						s = ie(n);
					!!!Object(se.a)(n) && s && e(Object(ne.openGoogleOneTapModal)())
				};
			var le = n("./src/reddit/actions/media.ts"),
				de = n("./src/lib/loadWithRetries/index.ts"),
				ue = () => Object(de.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				me = n("./src/reddit/actions/nps.ts");
			const pe = Object(T.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var be, he = n("./src/reddit/actions/platform.ts"),
				ge = n("./src/reddit/actions/post.ts"),
				fe = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				ve = n("./src/reddit/actions/session.ts"),
				Oe = n("./src/reddit/actions/survey/index.ts"),
				Ce = n("./src/reddit/actions/theme.ts"),
				ye = n("./src/reddit/actions/toaster.ts"),
				Ee = n("./src/reddit/actions/users.ts"),
				xe = n("./node_modules/react-redux/es/index.js"),
				_e = n("./node_modules/react-router/esm/react-router.js"),
				je = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/faceplate.less"), n("./src/reddit/components/Root/tailwind.css"), n("./src/reddit/components/Root/index.m.less")),
				Pe = n.n(je),
				Se = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				ke = n("./src/lib/classNames/index.ts"),
				Ne = n("./node_modules/lodash/isEqual.js"),
				we = n.n(Ne),
				Me = n("./node_modules/lodash/omit.js"),
				Ie = n.n(Me),
				Te = n("./node_modules/lodash/throttle.js"),
				Ae = n.n(Te),
				Re = n("./src/reddit/contexts/NavbarExp.ts"),
				Le = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Fe = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				De = n("./src/lib/fastdom/index.ts"),
				Be = n("./src/lib/FocusTrap/index.ts"),
				Ge = n("./src/lib/isEqualWithoutKey/index.ts"),
				Ue = n("./src/lib/isSimpleClick/index.ts"),
				He = n("./src/reddit/actions/header.ts"),
				qe = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				We = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				Ve = n("./node_modules/polished/dist/polished.es.js"),
				ze = n("./node_modules/react-motion/lib/react-motion.js"),
				Qe = n("./src/lib/lessComponent.tsx"),
				Ze = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				Ke = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Je = n("./src/reddit/constants/accountManager.ts"),
				Xe = n("./src/reddit/helpers/trackers/onboarding.ts"),
				Ye = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				$e = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				et = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				tt = n("./src/reddit/components/Carousel/index.m.less"),
				nt = n.n(tt);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(be || (be = {}));
			class st extends m.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === be.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
					}, this.handleNextFadePage = () => {
						this.setState((e, t) => ({
							...e,
							pageNumber: (e.pageNumber + 1) % t.items.length
						}))
					}, this.handleNextSlidePage = () => {
						this.setState((e, t) => {
							const n = 10 * t.items.length;
							return {
								...e,
								pageNumber: (e.pageNumber + 1) % n,
								items: e.pageNumber === n - 1 ? t.items : e.pageNumber === e.items.length - 1 ? e.items.concat(t.items) : e.items
							}
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
							style: n
						} = e;
						return m.a.createElement("img", {
							key: t,
							src: `${i.a.assetPath}/${t}`,
							style: n
						})
					}, this.renderItem = (e, t) => {
						const {
							animationType: n,
							itemWidth: s,
							shouldHandleMouseClicks: r
						} = this.props, {
							pageNumber: a
						} = this.state, o = n === be.Fade ? {
							opacity: t === a ? 1 : 0
						} : {
							marginLeft: 0 === t ? -s * a : void 0
						};
						return m.a.createElement("div", {
							className: Object(ke.a)(nt.a.item, nt.a[n]),
							key: `item-${t}`,
							style: {
								...o,
								backgroundImage: `url("${i.a.assetPath}/${e.img}")`,
								width: s
							},
							onClick: r ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(ke.a)(nt.a.indicator, {
							[nt.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						items: n
					} = this.props;
					return m.a.createElement("div", {
						className: Object(ke.a)(e, nt.a.container)
					}, m.a.createElement("article", {
						className: nt.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: nt.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var rt = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				at = n.n(rt);
			const ot = Qe.a.div("Container", at.a),
				it = Qe.a.wrapped(st, "Carousel", at.a),
				ct = Qe.a.div("Phone", at.a),
				lt = Qe.a.img("Frame", at.a),
				dt = `${i.a.assetPath}/img/frontpage-signup/android-frame.png`,
				ut = `${i.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				mt = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				pt = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var bt = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(ot, {
						className: t
					}, m.a.createElement(ct, {
						className: at.a.android
					}, m.a.createElement(it, {
						animationType: be.Fade,
						className: at.a.android,
						delay: 2500,
						items: mt,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(lt, {
						src: dt
					})), m.a.createElement(ct, {
						className: at.a.iphone
					}, m.a.createElement(it, {
						animationType: be.Fade,
						className: at.a.iphone,
						items: pt,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(lt, {
						src: ut
					})))
				},
				ht = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				gt = n.n(ht);
			const ft = Qe.a.div("Container", gt.a),
				vt = Qe.a.span("Disclaimer", gt.a),
				Ot = Qe.a.a("Link", gt.a);
			var Ct = e => m.a.createElement(ft, {
					className: e.className
				}, m.a.createElement(Ot, {
					href: "https://www.redditinc.com/"
				}, s.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(Ot, {
					href: "https://www.redditinc.com/advertising"
				}, s.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(Ot, {
					href: "http://www.redditblog.com/"
				}, s.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(Ot, {
					href: "https://www.redditinc.com/careers"
				}, s.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(Ot, {
					href: "https://www.reddithelp.com"
				}, s.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(Ot, {
					href: "https://www.redditinc.com/press"
				}, s.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(Ot, {
					href: "https://www.reddit.com/coins"
				}, s.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(Ot, {
					href: "https://redditgifts.com/"
				}, s.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(Ot, {
					href: "https://www.reddit.com/premium"
				}, s.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(Ot, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, s.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(Ot, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, s.fbt._("Mod policy", null, {
					hk: "1Hw2HM"
				})), m.a.createElement(vt, null, s.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				yt = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				Et = n.n(yt);
			const xt = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				_t = Qe.a.div("Container", Et.a),
				jt = Qe.a.wrapped(Ze.a, "IFrame", Et.a),
				Pt = Qe.a.wrapped(bt, "Images", Et.a),
				St = Qe.a.wrapped(Ct, "Links", Et.a),
				kt = Qe.a.div("MainContent", Et.a),
				Nt = Qe.a.div("MainContentColumn", Et.a),
				wt = Qe.a.button("NotReady", Et.a),
				Mt = Qe.a.span("NotReadyText", Et.a),
				It = Qe.a.wrapped(Ye.a, "NotReadyIcon", Et.a),
				Tt = Object(Le.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: r,
						onCloseClick: a,
						onVisibilityChange: o
					} = e, i = Object($e.a)(e).bodyText;
					return m.a.createElement(We.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: o
					}, m.a.createElement(_t, {
						className: t,
						innerRef: n
					}, m.a.createElement(kt, null, m.a.createElement(Nt, null, m.a.createElement(Pt, null, "Images Placeholder")), m.a.createElement(Nt, null, m.a.createElement(jt, {
						className: Object(ke.a)({
							[Et.a.fields]: Object(et.b)(r)
						}),
						path: Je.c.Register,
						uiMode: Je.d.Embed
					}))), m.a.createElement(wt, {
						onClick: a,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(Ve.i)(.8, i)
						}
					}, m.a.createElement(Mt, null, s.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(It, null)), m.a.createElement(St, null)))
				});
			class At extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Rt extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(Xe.d)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(At, {
							scrollTo: t
						})
					}
				}
				render() {
					const {
						className: e,
						frontpageSignupVariant: t
					} = this.props, {
						isClosed: n
					} = this.state, s = n && this.containerRef.current ? this.containerRef.current.offsetHeight : 0;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Tt, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(ze.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(ze.spring)(s, xt)
						}
					}, this.renderScroller))
				}
			}
			var Lt = Object(Ke.c)(Rt),
				Ft = n("./src/lib/localStorageAvailable/index.ts"),
				Dt = n("./src/reddit/actions/modal.ts"),
				Bt = n("./src/higherOrderComponents/makeAsync.tsx"),
				Gt = Object(Bt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				Ut = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Ht = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var qt = Object(Bt.a)({
				getComponent: () => Object(de.a)(() => n.e("NotificationsPermissionPromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPermissionPrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var Wt = Object(Bt.a)({
				getComponent: () => Object(de.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Vt = () => null;
			var zt = Object(Bt.a)({
					ErrorComponent: Vt,
					getComponent: () => Object(de.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Vt
				}),
				Qt = n("./src/higherOrderComponents/asModal/index.tsx"),
				Zt = n("./src/reddit/actions/structuredStyles/index.ts"),
				Kt = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Jt = n("./src/reddit/constants/modals.ts"),
				Xt = n("./src/reddit/controls/TextButton/index.tsx"),
				Yt = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: $t
			} = n("./node_modules/fbt/lib/FbtPublic.js"), en = Object(xe.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(Dt.i)(Jt.a.BLADE_NIGHTMODE)), e(Object(Zt.f)())
					},
					openBlade: () => {
						e(Object(Zt.e)(n))
					}
				}
			});
			var tn = Object(Qt.a)(en(e => m.a.createElement(Kt.e, null, m.a.createElement(Kt.i, null, m.a.createElement(Yt.a, null, m.a.createElement(Kt.q, null, $t._("Turning off Dark Mode", null, {
					hk: "2RVfrK"
				})), m.a.createElement(Xt.a, {
					onClick: e.closeModal
				}, m.a.createElement(Kt.b, null)))), m.a.createElement(Kt.l, null, m.a.createElement(Kt.o, null, $t._("In order to continue styling your community, Dark Mode must be turned off.", null, {
					hk: "2oiEiX"
				}))), m.a.createElement(Kt.g, null, m.a.createElement(Kt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, $t._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(Kt.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, $t._("Continue", null, {
					hk: "413jMZ"
				})))))),
				nn = n("./src/reddit/actions/authorFlair.ts"),
				sn = n("./src/reddit/actions/gold/powerups.ts"),
				rn = n("./src/reddit/actions/userFlair/index.ts"),
				an = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				on = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				cn = n("./src/reddit/components/FlairPreview/index.tsx"),
				ln = n("./src/reddit/components/FlairSearch/index.tsx"),
				dn = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				un = n("./src/reddit/controls/Button/index.tsx"),
				mn = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				pn = n("./src/reddit/layout/row/Inline/index.tsx"),
				bn = n("./src/reddit/models/Flair/index.ts"),
				hn = n("./src/reddit/models/User/index.ts"),
				gn = n("./src/reddit/selectors/authorFlair.ts"),
				fn = n("./src/reddit/selectors/moderatorPermissions.ts"),
				vn = n("./src/reddit/selectors/telemetry.ts"),
				On = n("./src/reddit/selectors/userFlair.ts"),
				Cn = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				yn = n.n(Cn);
			const En = e => e.flairModalContext && e.currentUser && Object(hn.e)(e.currentUser) === e.flairModalContext.username,
				xn = e => e.authorFlair || En(e) && e.userFlairData.applied || null,
				_n = Qe.a.wrapped(pn.a, "Section", yn.a),
				jn = Qe.a.div("CheckboxText", yn.a);
			class Pn extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(vn.mb)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						var e;
						const {
							props: t,
							state: n
						} = this, s = n.previewFlair ? n.previewFlair.templateId : void 0;
						t.activeFlairChanged(n.previewFlair, s, n.showFlair, t.flairModalContext), (null === (e = t.flairModalContext) || void 0 === e ? void 0 : e.isOpenedFromAchievementsModal) ? t.openAchiementFlairModal() : t.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: xn(e),
						showFlair: e.userFlairData.displaySettings.isUserEnabled
					}
				}
				canSave() {
					const {
						userFlairData: e
					} = this.props, {
						previewFlair: t
					} = this.state, {
						templates: n,
						permissions: s
					} = e, {
						isUserEnabled: r
					} = e.displaySettings, a = this.state.showFlair !== r, o = xn(this.props);
					if (!s.canUserChange) return a;
					const {
						canSave: i,
						reason: c
					} = Object(dn.b)(n, t, o);
					return !(i || c !== dn.a.NoChanges && c !== dn.a.InvalidTemplate || !a) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: r,
						flairModalContext: a
					} = e, o = n.permissions.canUserChange, i = n.permissions.canUserChange, c = null == a ? void 0 : a.isOpenedFromAchievementsModal, {
						templates: l,
						templateIds: d
					} = n, u = this.canSave(), p = En(e);
					return m.a.createElement(on.a, null, m.a.createElement(an.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(cn.a, {
						flair: t.previewFlair,
						flairTemplateType: bn.d.UserFlair,
						placeholderText: s.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(ln.a, {
						flair: t.previewFlair,
						flairTemplateType: bn.d.UserFlair,
						subredditId: r,
						templates: l,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(_n, null, m.a.createElement(mn.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(jn, null, s.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: yn.a.buttonsRow
					}, c && m.a.createElement(un.t, {
						className: yn.a.goBackButton,
						priority: un.c.Plain,
						onClick: e.openAchiementFlairModal
					}, s.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: yn.a.rightSideButtons
					}, o && m.a.createElement(un.o, {
						className: yn.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(un.l, {
						disabled: !u,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const Sn = Object(xe.b)(() => Object(re.c)({
				authorFlair: gn.b,
				currentUser: O.m,
				flairModalContext: gn.c,
				isMod: (e, t) => !!Object(fn.n)(e, t),
				userFlairData: On.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, r, a) => e(Object(rn.f)(n, s, r, a.username, t.subredditId)),
				closeModal: () => e(Object(nn.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(sn.a)())
			}))(Pn);
			var kn = Object(Qt.a)(Object(Ke.c)(Sn)),
				Nn = n("./src/reddit/selectors/bannedUser.ts"),
				wn = n("./src/reddit/selectors/muted.ts"),
				Mn = n("./src/reddit/selectors/notificationPrefs.ts"),
				In = n("./src/reddit/selectors/platform.ts"),
				Tn = n("./src/reddit/selectors/removalReasons.ts"),
				An = n("./src/reddit/constants/cookie.ts"),
				Rn = n("./src/reddit/featureFlags/index.ts"),
				Ln = n("./src/reddit/helpers/localStorage/index.ts"),
				Fn = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Dn = Object(re.c)({
				activeModalId: se.a,
				askNotificationsPrePromptIsOpen: Mn.c,
				authorContext: gn.c,
				badgePurchaseModalIsOpen: Object(se.b)(Jt.a.BADGE_PURCHASE),
				banContext: Nn.a,
				banModalIsOpen: Object(se.b)(Jt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(se.b)(Jt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				introModalFeatureEnabled: e => Rn.d.introModal(e),
				isOverlayOpen: In.i,
				moderatorPermissions: e => {
					const t = Object(In.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: wn.b,
				muteModalIsOpen: Object(se.b)(Jt.a.MUTE_USER),
				notificationsPrePromptIsOpen: Mn.e,
				removalReasonContext: Tn.b,
				removalReasonModalIsOpen: Object(se.b)(Jt.a.ADD_REMOVAL_REASON),
				subredditId: In.c,
				userFlairModalIsOpen: Object(se.b)(Jt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: O.C,
				userInRedesignBeta: O.J,
				userIsLoggedIn: O.S,
				userIsMod: O.T,
				userIsNew: O.W
			});
			class Bn extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Ft.a)()) return; {
						const e = d.a.get(An.a);
						e && d.a.remove(An.a, {
							domain: i.a.cookieDomain
						});
						const t = Object(Ln.K)(Jt.a.ALPHA_CONSUMER);
						t && Object(Ln.bb)(Jt.a.ALPHA_CONSUMER), (e || t) && Object(Ln.Mb)(Jt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Ln.K)(Jt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Ln.Mb)(Jt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate(e) {
					this.conditionalModalCheck(), e.activeModalId !== this.props.activeModalId && (Jt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Fn.a)(), 500) : setTimeout(() => Object(Fn.b)(), 500)))
				}
				render() {
					const {
						askNotificationsPrePromptIsOpen: e,
						authorContext: t,
						badgePurchaseModalIsOpen: n,
						banContext: s,
						banModalIsOpen: r,
						bladeNightmodeModalIsOpen: a,
						currentBadgePurchase: o,
						muteContext: i,
						muteModalIsOpen: c,
						notificationsPrePromptIsOpen: l,
						removalReasonContext: d,
						removalReasonModalIsOpen: p,
						sendEvent: b,
						subredditId: h,
						toggleBanModal: g,
						toggleMuteModal: f,
						toggleRemovalReasonsModal: v,
						userFlairModalIsOpen: O
					} = this.props, C = (e, t, n) => s => () => b(r => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(vn.h)({
							state: r,
							commentId: n
						}),
						post: n && Object(vn.K)(r, n),
						screen: Object(vn.cb)(r),
						subreddit: Object(vn.mb)(r, t)
					}));
					return m.a.createElement(u.Fragment, null, r && s && m.a.createElement(Ut.a, {
						contextId: s.contextId,
						subredditId: s.subredditId,
						toggleModal: g,
						trackAddEvent: C("banned", s.subredditId, s.contextId)("add_in_context"),
						trackEventWithName: C("banned", s.subredditId, s.contextId),
						username: s.username,
						withOverlay: !0
					}), c && i && m.a.createElement(Ht.a, {
						contextId: i.contextId,
						subredditId: i.subredditId,
						toggleModal: f,
						trackAddEvent: C("muted", i.subredditId, i.contextId)("add_in_context"),
						username: i.username,
						withOverlay: !0
					}), p && d && m.a.createElement(zt, {
						itemIds: d.itemIds,
						subredditId: d.subredditId,
						toggleModal: v
					}), a && h && m.a.createElement(tn, {
						subredditId: h
					}), O && t && t.subredditId && m.a.createElement(kn, {
						subredditId: t.subredditId,
						withOverlay: !0
					}), n && o && m.a.createElement(Gt, {
						withOverlay: !0,
						productId: o
					}), l && m.a.createElement(Wt, null), e && m.a.createElement(qt, null))
				}
			}
			var Gn = Object(xe.b)(Dn, e => ({
					markRedesignModalAsClosed: () => e(Object(Dt.j)()),
					toggleBanModal: () => e(Object(Dt.i)(Jt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(Dt.i)(Jt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(Dt.i)(Jt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(Dt.i)(Jt.a.ADD_REMOVAL_REASON))
				}))(Object(Ke.c)(Bn)),
				Un = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Hn = n("./src/reddit/constants/experiments.ts"),
				qn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Wn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Vn = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				zn = n("./src/reddit/selectors/responsiveSettings.ts"),
				Qn = n("./src/telemetry/helpers/sendCounter.ts"),
				Zn = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Kn = n.n(Zn);
			const Jn = Qe.a.div("Overlay", Kn.a),
				Xn = Qe.a.div("IframeContainer", Kn.a),
				Yn = {},
				$n = Object(qn.v)(),
				es = Object(re.c)({
					frontpageSignupVariant: et.a,
					isAmModalDesignUpdateEnabled: Vn.a,
					isResponsiveSettingsEnabled: zn.a
				}),
				ts = {
					[Je.c.ChangePassword]: Jt.a.CHANGE_PASSWORD_MODAL_ID,
					[Je.c.Index]: Jt.a.LOGIN_MODAL_ID,
					[Je.c.Register]: Jt.a.REGISTER_MODAL_ID,
					[Je.c.EnableTwoFactor]: Jt.a.ENABLE_TWO_FACTOR,
					[Je.c.DisableTwoFactor]: Jt.a.DISABLE_TWO_FACTOR,
					[Je.c.TwoFactorBackupCodes]: Jt.a.TWO_FACTOR_BACKUP_CODES,
					[Je.c.LinkAppleSSO]: Jt.a.LINK_APPLE_SSO,
					[Je.c.UnlinkAppleSSO]: Jt.a.UNLINK_APPLE_SSO,
					[Je.c.LinkGoogleSSO]: Jt.a.LINK_GOOGLE_SSO,
					[Je.c.UnlinkGoogleSSO]: Jt.a.UNLINK_GOOGLE_SSO,
					[Je.c.GoogleOneTap]: Jt.a.GOOGLE_ONE_TAP_MODAL_ID,
					[Je.c.Onboarding]: Jt.a.ONBOARDING_MODAL_ID
				};
			class ns extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === Je.c.Register && Object(et.f)(this.props.frontpageSignupVariant) && Wn.a.throttleFeature(Hn.rd), this.props.sendEvent(Object(Xe.d)(this.subscriptions))
					}, this.resizeContainer = e => {
						this.setState({
							containerSize: e
						})
					}, this.restoreContainerSize = () => {
						this.setState({
							containerSize: null
						})
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}, this.handleSSOLinkActionFail = () => {
						this.setState({
							isSSOLinkActionFailedModal: !0
						})
					}, this.restoreIFrameStyles = () => {
						this.setState({
							removeGoogleOneTapStyles: !0,
							removeHiddenOverlay: !0
						})
					}, this.onGoogleOneTapSkipped = e => {
						"user_cancel" === e && (this.props.sendEvent(Object(Xe.g)()), Object(Qn.b)(k.o.Redesign, {
							type: Qn.a.OneTapDismissed,
							data: {}
						}))
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(Xe.h)()), Object(Qn.b)(k.o.Redesign, {
							type: Qn.a.OneTapViewed,
							data: {}
						})
					}, this.onShowScreen = e => {
						const {
							isAmModalDesignUpdateEnabled: t,
							path: n
						} = this.props, s = n === Je.c.Index || n === Je.c.Register, r = n === Je.c.GoogleOneTap, a = () => {
							this.resizeContainer({
								height: 640,
								width: 400
							})
						};
						e === Je.b.SelectAccount ? s ? t ? a() : this.resizeContainer({
							height: 474,
							width: 416
						}) : r && (t && a(), this.setState({
							removeHiddenOverlay: !0
						})) : e === Je.b.Subscribe ? (s && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === Je.b.Email || e === Je.b.UsernameAndPassword ? s && this.restoreContainerSize() : e !== Je.b.EmailOptIn && e !== Je.b.GoogleUI || this.setState({
							removeHiddenOverlay: !1
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isAmModalDesignUpdateEnabled: t,
						isResponsiveSettingsEnabled: n,
						pageLayer: s,
						path: r
					} = this.props, {
						containerSize: a,
						isSSOLinkActionFailedModal: o,
						removeGoogleOneTapStyles: i,
						removeHiddenOverlay: c
					} = this.state, l = Object(et.c)(e) || Object(et.d)(e), d = r === Je.c.LinkAppleSSO || r === Je.c.LinkGoogleSSO || r === Je.c.UnlinkAppleSSO || r === Je.c.UnlinkGoogleSSO, u = r === Je.c.GoogleOneTap, p = Object(ke.a)({
						[Kn.a.mModalUpdate]: t,
						[Kn.a.small]: l,
						[Kn.a.ssoConfirmPassword]: d,
						[Kn.a.linkActionSSOFail]: o,
						[Kn.a.mResponsive]: n,
						[Kn.a.mGoogleOneTap]: u && !i
					}), b = Object(ke.a)({
						[Kn.a.mGoogleOneTap]: u && !i,
						[Kn.a.mHiddenOverlay]: u && !c
					}), h = !l && !o && !n;
					return m.a.createElement(Jn, {
						className: b
					}, m.a.createElement(Xn, {
						className: p,
						style: a || Yn
					}, m.a.createElement(Ze.a, {
						onChange: this.restoreContainerSize,
						onClose: this.closeModal,
						onGoogleOneTapSkipped: this.onGoogleOneTapSkipped,
						onGoogleOneTapUIViewed: this.onGoogleOneTapUIViewed,
						onShowScreen: this.onShowScreen,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: s,
						path: r,
						showCloseButton: h
					})))
				}
			}
			const ss = $n(Object(xe.b)(es, (e, t) => ({
				closeModal: t => {
					e(Object(Dt.g)(ts[t]))
				}
			}))(Object(Ke.c)(ns)));
			Object(Un.b)(Jt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(ss, {
				path: Je.c.ChangePassword
			})), Object(Un.b)(Jt.a.LOGIN_MODAL_ID, e => m.a.createElement(ss, {
				path: Je.c.Index
			})), Object(Un.b)(Jt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(ss, {
				path: Je.c.Onboarding
			})), Object(Un.b)(Jt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(ss, {
				path: Je.c.EnableTwoFactor
			})), Object(Un.b)(Jt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(ss, {
				path: Je.c.DisableTwoFactor
			})), Object(Un.b)(Jt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(ss, {
				path: Je.c.TwoFactorBackupCodes
			})), Object(Un.b)(Jt.a.REGISTER_MODAL_ID, e => m.a.createElement(ss, {
				path: Je.c.Register
			})), Object(Un.b)(Jt.a.LINK_APPLE_SSO, e => m.a.createElement(ss, {
				path: Je.c.LinkAppleSSO
			})), Object(Un.b)(Jt.a.LINK_GOOGLE_SSO, e => m.a.createElement(ss, {
				path: Je.c.LinkGoogleSSO
			})), Object(Un.b)(Jt.a.UNLINK_APPLE_SSO, e => m.a.createElement(ss, {
				path: Je.c.UnlinkAppleSSO
			})), Object(Un.b)(Jt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(ss, {
				path: Je.c.UnlinkGoogleSSO
			})), Object(Un.b)(Jt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(ss, {
				path: Je.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const rs = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(rs, {
				withOverlay: !0
			}));
			const as = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(as, {
				withOverlay: !0
			}));
			const os = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(os, {
				withOverlay: !0
			}));
			const is = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.CROWD_CONTROL, e => m.a.createElement(is, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const cs = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(cs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ls = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(ls, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const ds = Object(Bt.a)({
					getComponent: () => Object(de.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				us = e => () => {
					e()
				};
			Object(Un.b)(Jt.a.GOLD_GILD_MODAL, e => m.a.createElement(ds, {
				onOverlayClick: us(e),
				withOverlay: !0
			}));
			var ms = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				ps = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				bs = n.n(ps);
			const hs = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = ms.SPARKLE_ASSET_PATH, document.createElement("img").src = ms.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Un.b)(Jt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(hs, {
				withOverlay: !0,
				className: bs.a.modalBody,
				overlayClassName: bs.a.modalOverlay
			}));
			const gs = Object(Bt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				fs = e => () => {
					e()
				};
			Object(Un.b)(Jt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(gs, {
				onOverlayClick: fs(e),
				withOverlay: !0
			}));
			const vs = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(vs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Os = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(Os, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Cs = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(Cs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ys = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(ys, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx");
			const Es = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(Es, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const xs = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), n.e("GovernanceTransferPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.TRANSFER_POINTS, e => m.a.createElement(xs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const _s = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(_s, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const js = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(js, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ps = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(Ps, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ss = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.MULTIREDDIT_CREATE, e => m.a.createElement(Ss, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Un.b)(Jt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(Ss, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ks = Object(Bt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Un.b)(Jt.a.MULTIREDDIT_EDIT, e => m.a.createElement(ks, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ns = () => Promise.all([n.e(0), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				ws = Object(Bt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(de.a)(Ns).then(e => e.default)
				});
			Object(Un.b)(Jt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(ws, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const Ms = () => null,
				Is = Object(Bt.a)({
					ErrorComponent: Ms,
					getComponent: () => Object(de.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Ms
				});
			Object(Un.b)(Jt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Is, null));
			n("./src/reddit/components/QrCodeModal/async.tsx");
			var Ts = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				As = n.n(Ts);
			const Rs = Qe.a.h2("ColumnLabel", As.a),
				Ls = Qe.a.wrapped(pn.a, "ColumnWrapper", As.a),
				Fs = Qe.a.div("Column", As.a),
				Ds = Qe.a.div("Description", As.a),
				Bs = Qe.a.div("Key", As.a),
				Gs = Qe.a.wrapped(Kt.l, "ModalMain", As.a),
				Us = Qe.a.wrapped(Kt.e, "ModalBody", As.a),
				Hs = Qe.a.wrapped(un.l, "PrimaryButton", As.a),
				qs = Qe.a.wrapped(Xt.a, "TextButton", As.a),
				Ws = Object(xe.b)(null, e => ({
					closeModal: () => e(Object(Dt.i)(Jt.a.KEYBOARD_SHORTCUTS))
				})),
				Vs = Qe.a.wrapped(Object(Qt.a)(Ws(e => m.a.createElement(Us, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(Kt.i, null, m.a.createElement(Yt.a, null, m.a.createElement(Kt.q, null, s.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(qs, {
					onClick: e.closeModal
				}, m.a.createElement(Kt.b, null)))), m.a.createElement(Gs, null, m.a.createElement(Ls, null, m.a.createElement(Fs, null, m.a.createElement(pn.a, null, m.a.createElement(Rs, null, s.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Bs, null, "Shift + ?")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Bs, null, "J")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Bs, null, "K")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Bs, null, "N")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Bs, null, "P")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Bs, null, "Enter")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Bs, null, "X")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Bs, null, "L"))), m.a.createElement(Fs, null, m.a.createElement(pn.a, null, m.a.createElement(Rs, null, s.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Bs, null, "A")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Bs, null, "Z")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Bs, null, "C")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Bs, null, "R")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Bs, null, "Ctrl + Enter")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Bs, null, "S")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Bs, null, "H")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Bs, null, "Q")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Bs, null, "Enter"))))), m.a.createElement(Kt.g, null, m.a.createElement(Hs, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, s.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", As.a);
			Object(Un.b)(Jt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Vs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const zs = Object(Bt.a)({
					getComponent: () => Object(de.a)(() => Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), n.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), n.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), n.e("SnoovatarModal")]).then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Qs = e => () => {
					e()
				};
			Object(Un.b)(Jt.a.SNOOVATAR_MODAL, e => m.a.createElement(zs, {
				onOverlayClick: Qs(e),
				withOverlay: !0
			}));
			const {
				fbt: Zs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ks = Object(re.c)({
				allowNavigationCallback: In.a
			}), Js = Object(xe.b)(Ks, e => ({
				closeModal: () => e(Object(Dt.i)(Jt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Zt.a)())
			}));
			class Xs extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(Kt.e, null, m.a.createElement(Kt.i, null, m.a.createElement(Yt.a, null, m.a.createElement(Kt.q, null, Zs._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(Xt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(Kt.b, null)))), m.a.createElement(Kt.l, null, m.a.createElement(Kt.p, null, Zs._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(Kt.g, null, m.a.createElement(Kt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Zs._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(Kt.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Zs._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const Ys = Object(Qt.a)(Js(Xs));
			Object(Un.b)(Jt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Ys, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const $s = () => n.e("NsfwBlockingModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx")),
				er = Object(Bt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(de.a)($s).then(e => e.default)
				});
			Object(Un.b)(Jt.a.NSFW_BLOCKING_MODAL_V2, e => m.a.createElement(er, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const tr = () => n.e("NsfwSearchModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwSearch/Modal.tsx")),
				nr = Object(Bt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(de.a)(tr).then(e => e.default)
				});
			Object(Un.b)(Jt.a.NSFW_SEARCH_MODAL, e => m.a.createElement(nr, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const sr = Object(re.c)({
					activeModalId: se.a
				}),
				rr = Object(xe.b)(sr, e => ({
					toggleModal: t => e(Object(Dt.i)(t))
				})),
				ar = 500,
				or = () => {};
			class ir extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate(e) {
					e.activeModalId !== this.props.activeModalId && (Jt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Fn.a)(), ar) : setTimeout(() => Object(Fn.b)(), ar)))
				}
				componentWillUnmount() {
					Object(Fn.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Un.a)(e)(e ? this.toggleModal : or)
				}
			}
			var cr = rr(ir),
				lr = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				dr = n("./src/reddit/actions/cooldownTime.ts");

			function ur(e) {
				return `${e}`.padStart(2, "0")
			}
			class mr {
				constructor(e) {
					this.startAt = 0, this.expireAt = 0, this.interval = 1e3, this.timeoutId = 0, this.tick = () => {
						this.startAt += this.interval;
						const e = Date.now() - this.startAt,
							t = this.getRemainingSeconds();
						if (this.callback(t), !t) return this.stop();
						const n = Math.max(0, this.interval - e);
						this.timeoutId = window.setTimeout(this.tick, n)
					}, this.callback = t => e(t || this.getRemainingSeconds())
				}
				stop() {
					window.clearTimeout(this.timeoutId), this.timeoutId = 0
				}
				start(e) {
					this.stop(), this.startAt = Date.now(), this.expireAt = e, this.callback(), this.timeoutId = window.setTimeout(this.tick, this.interval)
				}
				getRemainingSeconds() {
					return Math.max(0, Math.round((this.expireAt - Date.now()) / this.interval))
				}
			}
			var pr = n("./src/reddit/selectors/experiments/garlicBread.ts"),
				br = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				hr = n.n(br);
			const gr = Object(re.c)({
				isEmbedSubredditPage: pr.c,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: In.b
			});
			class fr extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${ur(n)}` : `${n}:${ur(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new mr(this.drawTimer), this.state = {
						countdown: null
					}
				}
				componentDidMount() {
					this.updateTimer()
				}
				componentWillUnmount() {
					this.timer.stop()
				}
				componentDidUpdate(e) {
					let {
						currentPage: t,
						expiresAt: n
					} = e;
					this.props.currentPage === t && this.props.expiresAt === n || this.updateTimer()
				}
				updateTimer() {
					const {
						expiresAt: e
					} = this.props, t = e <= Date.now();
					e && !t ? this.timer.start(e) : this.props.fetchCooldownTimer()
				}
				render() {
					const {
						countdown: e
					} = this.state, {
						isRequestPending: t,
						isEmbedSubredditPage: n
					} = this.props;
					return t && !n || !e || n ? null : m.a.createElement("div", {
						className: hr.a.timer
					}, s.fbt._("{Time remaining}", [s.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var vr = Object(xe.b)(gr, e => ({
					fetchCooldownTimer: () => e(Object(dr.e)())
				}))(fr),
				Or = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Cr = n("./src/reddit/helpers/trackers/garlicBread.ts"),
				yr = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Er = n("./src/reddit/hooks/useTracking.ts"),
				xr = n("./src/reddit/icons/svgs/GarlicBread/index.tsx"),
				_r = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				jr = n.n(_r);
			var Pr = () => {
					const e = Object(Er.a)(),
						t = Object(u.useCallback)(() => {
							e(Object(Cr.a)())
						}, [e]),
						n = Object(yr.a)(),
						r = Object(xe.e)(pr.b);
					return Object(xe.e)(pr.a) ? m.a.createElement(m.a.Fragment, null, m.a.createElement(lr.a, {
						className: Object(ke.a)(jr.a.icon, jr.a.garlicBreadLink),
						innerRef: n.target.ref,
						to: `/r/${r}`,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						onClick: t
					}, m.a.createElement(xr.a, {
						className: jr.a.garlicBreadIcon
					}), m.a.createElement(vr, null)), m.a.createElement(Or.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, s.fbt._("Place your tile", null, {
						hk: "34X0pD"
					}))) : null
				},
				Sr = n("./src/reddit/actions/page.ts"),
				kr = n("./src/reddit/actions/shortcuts/utils.ts"),
				Nr = n("./src/reddit/icons/fonts/index.tsx"),
				wr = n("./src/reddit/selectors/header.ts"),
				Mr = n("./src/reddit/selectors/userPrefs.ts"),
				Ir = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				Tr = n("./src/reddit/components/SEOTitle/index.tsx"),
				Ar = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Rr = n("./src/reddit/components/UserIcon/index.tsx"),
				Lr = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx");

			function Fr() {
				return (Fr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Dr = e => m.a.createElement("svg", Fr({
				viewBox: "0 0 22 21",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), m.a.createElement("path", {
				d: "M11.6211 5.44189V11.8892",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeMiterlimit: "10",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), m.a.createElement("path", {
				d: "M7.93555 7.28394V10.0471",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeMiterlimit: "10",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), m.a.createElement("path", {
				d: "M15.3047 7.28418V10.0473",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeMiterlimit: "10",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), m.a.createElement("path", {
				d: "M15.257 1.5H6.97475C3.7723 1.5 1.23242 4.03988 1.23242 7.24233V10.4448C1.23242 13.6472 3.7723 16.1871 6.97475 16.1871H8.85205V19.5L12.1649 16.1871H15.257C18.4594 16.1871 20.9993 13.6472 20.9993 10.4448V7.24233C20.9993 4.03988 18.4594 1.5 15.257 1.5Z",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeMiterlimit: "10",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}));
			var Br, Gr = e => {
					const t = Object(xe.e)(O.fb);
					return m.a.createElement("svg", {
						className: e.className,
						id: e.id,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg",
						fill: (() => t ? t && e.isForMenu ? "inherit" : t && !e.isForMenu ? "#D7DADC" : void 0 : "#1c1c1c")()
					}, t ? m.a.createElement(m.a.Fragment, null, m.a.createElement("path", {
						d: "M10.3457,14.4642c-.4015,0-.7825-.1606-1.0636-.4407-.2811-.2909-.4407-.6621-.4407-1.0636,0-.4006,.1596-.7923,.4407-1.0626,.0705-.0705,.1508-.1303,.2311-.191,.0803-.0499,.1704-.0999,.2605-.1401,.0901-.0304,.1802-.0607,.2811-.0803,.4907-.0999,1.0029,.0597,1.3535,.4113,.2811,.2811,.4417,.6621,.4417,1.0626,0,.4015-.1606,.7727-.4417,1.0636-.2811,.2801-.6621,.4407-1.0626,.4407Z"
					}), m.a.createElement("path", {
						d: "M10.3457,14.4642c-.4015,0-.7825-.1606-1.0636-.4407-.2811-.2909-.4407-.6621-.4407-1.0636,0-.4006,.1596-.7923,.4407-1.0626,.0705-.0705,.1508-.1303,.2311-.191,.0803-.0499,.1704-.0999,.2605-.1401,.0901-.0304,.1802-.0607,.2811-.0803,.4907-.0999,1.0029,.0597,1.3535,.4113,.2811,.2811,.4417,.6621,.4417,1.0626,0,.4015-.1606,.7727-.4417,1.0636-.2811,.2801-.6621,.4407-1.0626,.4407Z"
					}), m.a.createElement("path", {
						d: "M19.8526,18.4503l-1.4988-2.7789c.4954-1.3675,.4514-2.8257,.3716-3.5919-.1929-1.8471-1.0156-3.4817-2.3172-4.6041-2.3006-1.9823-4.703-2.2183-6.4571-2.3907-.853-.0842-1.5807-.1557-2.091-.3947,.0548-.0451,.1038-.0891,.1449-.1293,1.2546-1.2546,1.4808-3.3926,.7414-4.135-.7414-.7385-2.8774-.5122-4.134,.7414l-.0255,.0274-.0264-.0274C3.3049-.0865,1.1699-.3147,.4265,.4267-.3129,1.1671-.0857,3.3051,1.1689,4.5607c.381,.381,1.0313,.7385,1.4965,.9657-.9253,2.9385-.3974,5.8627,.8085,8.0426l.0004-.0003c-1.0301,.9864-1.8753,2.3217-1.4092,3.3293,.3036,.6542,1.0597,1.0636,2.1282,1.1518,.1459,.0127,.2958,.0186,.4486,.0186,.9551,0,2.023-.2387,2.8314-.6883,1.3156,.731,2.7449,1.2327,4.178,1.4434,.4397,.0646,.9363,.1107,1.4603,.1107,.8086,0,1.6775-.1264,2.5032-.4451l2.8678,1.3971c.1636,.0803,.334,.1185,.5005,.1185,.2732,0,.5347-.1058,.7296-.3095,.3163-.3291,.3712-.8178,.1401-1.2448Zm-8.0192-.8668c-1.4151-.2082-2.8265-.7366-4.1095-1.5106l-.3203-.219c-.4084,.5964-1.8902,1.0391-3.1066,.9471-.6875-.0578-1.0186-.2674-1.094-.4299-.1694-.3653,.6572-1.6875,1.9548-2.565l-.7032-1.0381,.1691,.2497c-1.0926-1.9479-1.6809-4.7293-.5932-7.6019l.2135-.5671-.5582-.2331c-.4584-.192-1.3065-.617-1.6307-.9412-.8756-.8765-.8844-2.139-.759-2.3466,.0705-.046,.2282-.0784,.4388-.0784,.5083,0,1.3202,.1861,1.9382,.8051,.1547,.1538,.284,.3183,.4025,.4848l.5112,.7218,.5112-.7218c.1185-.1665,.2468-.331,.4006-.4848,.8765-.8756,2.138-.8834,2.3456-.759,.1577,.2409,.1489,1.5024-.7267,2.3779-.0901,.0911-.3957,.3114-.6268,.4642l-.5553,.3673,.4006,.5328c.7727,1.0274,2.0332,1.1508,3.4925,1.2947,1.7629,.1724,3.7618,.3692,5.7607,2.0929,1.0587,.9128,1.7296,2.2565,1.8882,3.7843,.0382,.3632,.0866,1.1246-.0325,1.9572-.4753-.5333-1.1185-.8866-1.8176-.9788-.7747-.1048-1.4985,.142-1.996,.6679-.4985,.5269-.7032,1.2703-.5631,2.0391,.1204,.6651,.4814,1.2621,.9932,1.7078-.8506,.1232-1.6738,.0609-2.2282-.0193Zm5.0983,.1532h0l-.5619-.2736-1.0841-.5279c-.5103-.2488-.8873-.7336-.9843-1.2644-.0402-.2184-.0617-.6337,.2409-.9529,.2292-.2429,.522-.2987,.7434-.2987,.0666,0,.1273,.0049,.1773,.0118,.5298,.0695,1.0274,.426,1.2996,.9304l1.6767,3.1095-1.5076-.7342Z"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement("path", {
						fill: "#fff",
						d: "M16.9317,17.7367h0l-.5619-.2736-1.0841-.5279c-.5103-.2488-.8873-.7336-.9843-1.2644-.0402-.2184-.0617-.6337,.2409-.9529,.2292-.2429,.522-.2987,.7434-.2987,.0666,0,.1273,.0049,.1773,.0118,.5298,.0695,1.0274,.426,1.2996,.9304l1.6767,3.1095-1.5076-.7342Z"
					}), m.a.createElement("g", null, m.a.createElement("path", {
						fill: "#00ccc0",
						d: "M11.8334,17.5835c-1.4151-.2082-2.8265-.7366-4.1095-1.5106l-.3203-.219c-.4084,.5964-1.8902,1.0391-3.1066,.9471-.6875-.0578-1.0186-.2674-1.094-.4299-.1694-.3653,.6572-1.6875,1.9548-2.565l-.7032-1.0381,.1691,.2497c-1.0926-1.9479-1.6809-4.7293-.5932-7.6019l.2135-.5671-.5582-.2331c-.4584-.192-1.3065-.617-1.6307-.9412-.8756-.8765-.8844-2.139-.759-2.3466,.0705-.046,.2282-.0784,.4388-.0784,.5083,0,1.3202,.1861,1.9382,.8051,.1547,.1538,.284,.3183,.4025,.4848l.5112,.7218,.5112-.7218c.1185-.1665,.2468-.331,.4006-.4848,.8765-.8756,2.138-.8834,2.3456-.759,.1577,.2409,.1489,1.5024-.7267,2.3779-.0901,.0911-.3957,.3114-.6268,.4642l-.5553,.3673,.4006,.5328c.7727,1.0274,2.0332,1.1508,3.4925,1.2947,1.7629,.1724,3.7618,.3692,5.7607,2.0929,1.0587,.9128,1.7296,2.2565,1.8882,3.7843,.0382,.3632,.0866,1.1246-.0325,1.9572-.4753-.5333-1.1185-.8866-1.8176-.9788-.7747-.1048-1.4985,.142-1.996,.6679-.4985,.5269-.7032,1.2703-.5631,2.0391,.1204,.6651,.4814,1.2621,.9932,1.7078-.8506,.1232-1.6738,.0609-2.2282-.0193Z"
					}), m.a.createElement("g", null, m.a.createElement("path", {
						d: "M10.3457,14.4642c-.4015,0-.7825-.1606-1.0636-.4407-.2811-.2909-.4407-.6621-.4407-1.0636,0-.4006,.1596-.7923,.4407-1.0626,.0705-.0705,.1508-.1303,.2311-.191,.0803-.0499,.1704-.0999,.2605-.1401,.0901-.0304,.1802-.0607,.2811-.0803,.4907-.0999,1.0029,.0597,1.3535,.4113,.2811,.2811,.4417,.6621,.4417,1.0626,0,.4015-.1606,.7727-.4417,1.0636-.2811,.2801-.6621,.4407-1.0626,.4407Z"
					}), m.a.createElement("path", {
						d: "M10.3457,14.4642c-.4015,0-.7825-.1606-1.0636-.4407-.2811-.2909-.4407-.6621-.4407-1.0636,0-.4006,.1596-.7923,.4407-1.0626,.0705-.0705,.1508-.1303,.2311-.191,.0803-.0499,.1704-.0999,.2605-.1401,.0901-.0304,.1802-.0607,.2811-.0803,.4907-.0999,1.0029,.0597,1.3535,.4113,.2811,.2811,.4417,.6621,.4417,1.0626,0,.4015-.1606,.7727-.4417,1.0636-.2811,.2801-.6621,.4407-1.0626,.4407Z"
					}), m.a.createElement("path", {
						d: "M19.8526,18.4503l-1.4988-2.7789c.4954-1.3675,.4514-2.8257,.3716-3.5919-.1929-1.8471-1.0156-3.4817-2.3172-4.6041-2.3006-1.9823-4.703-2.2183-6.4571-2.3907-.853-.0842-1.5807-.1557-2.091-.3947,.0548-.0451,.1038-.0891,.1449-.1293,1.2546-1.2546,1.4808-3.3926,.7414-4.135-.7414-.7385-2.8774-.5122-4.134,.7414l-.0255,.0274-.0264-.0274C3.3049-.0865,1.1699-.3147,.4265,.4267-.3129,1.1671-.0857,3.3051,1.1689,4.5607c.381,.381,1.0313,.7385,1.4965,.9657-.9253,2.9385-.3974,5.8627,.8085,8.0426l.0004-.0003c-1.0301,.9864-1.8753,2.3217-1.4092,3.3293,.3036,.6542,1.0597,1.0636,2.1282,1.1518,.1459,.0127,.2958,.0186,.4486,.0186,.9551,0,2.023-.2387,2.8314-.6883,1.3156,.731,2.7449,1.2327,4.178,1.4434,.4397,.0646,.9363,.1107,1.4603,.1107,.8086,0,1.6775-.1264,2.5032-.4451l2.8678,1.3971c.1636,.0803,.334,.1185,.5005,.1185,.2732,0,.5347-.1058,.7296-.3095,.3163-.3291,.3712-.8178,.1401-1.2448Zm-8.0192-.8668c-1.4151-.2082-2.8265-.7366-4.1095-1.5106l-.3203-.219c-.4084,.5964-1.8902,1.0391-3.1066,.9471-.6875-.0578-1.0186-.2674-1.094-.4299-.1694-.3653,.6572-1.6875,1.9548-2.565l-.7032-1.0381,.1691,.2497c-1.0926-1.9479-1.6809-4.7293-.5932-7.6019l.2135-.5671-.5582-.2331c-.4584-.192-1.3065-.617-1.6307-.9412-.8756-.8765-.8844-2.139-.759-2.3466,.0705-.046,.2282-.0784,.4388-.0784,.5083,0,1.3202,.1861,1.9382,.8051,.1547,.1538,.284,.3183,.4025,.4848l.5112,.7218,.5112-.7218c.1185-.1665,.2468-.331,.4006-.4848,.8765-.8756,2.138-.8834,2.3456-.759,.1577,.2409,.1489,1.5024-.7267,2.3779-.0901,.0911-.3957,.3114-.6268,.4642l-.5553,.3673,.4006,.5328c.7727,1.0274,2.0332,1.1508,3.4925,1.2947,1.7629,.1724,3.7618,.3692,5.7607,2.0929,1.0587,.9128,1.7296,2.2565,1.8882,3.7843,.0382,.3632,.0866,1.1246-.0325,1.9572-.4753-.5333-1.1185-.8866-1.8176-.9788-.7747-.1048-1.4985,.142-1.996,.6679-.4985,.5269-.7032,1.2703-.5631,2.0391,.1204,.6651,.4814,1.2621,.9932,1.7078-.8506,.1232-1.6738,.0609-2.2282-.0193Zm5.0983,.1532h0l-.5619-.2736-1.0841-.5279c-.5103-.2488-.8873-.7336-.9843-1.2644-.0402-.2184-.0617-.6337,.2409-.9529,.2292-.2429,.522-.2987,.7434-.2987,.0666,0,.1273,.0049,.1773,.0118,.5298,.0695,1.0274,.426,1.2996,.9304l1.6767,3.1095-1.5076-.7342Z"
					})))))
				},
				Ur = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Hr = n.n(Ur);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.HappeningNow = "HappeningNow", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Premium = "Premium", e.Recap = "Recap", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Br || (Br = {}));
			const qr = () => m.a.createElement(Gr, {
				className: Hr.a.wrappedRedditDropdown,
				isForMenu: !0
			});
			const Wr = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(Tr.b, {
					type: Tr.a.HeaderSelector
				}, s))
			};
			var Vr = n("./src/lib/objectSelector/index.ts"),
				zr = n("./src/reddit/constants/wiki.ts"),
				Qr = n("./src/reddit/selectors/frontpage.ts"),
				Zr = n("./src/reddit/selectors/subreddit.ts"),
				Kr = n("./src/reddit/selectors/topic.ts");
			var Jr = Object(Vr.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = Object(O.S)(e),
						r = Object(Qr.b)(e),
						a = Object(qn.bb)(n);
					switch (a) {
						case "avatar":
							return {
								type: Br.Avatar
							};
						case "index":
						case "listing":
							return s || r ? {
								type: Br.Home
							} : {
								type: Br.Popular
							};
						case "modListing":
							return {
								type: Br.ModListing
							};
						case "modQueuePages":
							return {
								type: Br.ModQueue
							};
						case "postCreation":
							return {
								type: Br.CreatePost
							};
						case "postDraft":
							return {
								type: Br.ViewDraft
							};
						case "recap":
							return {
								type: Br.Recap
							};
						case "subredditCreation":
							return {
								type: Br.SubredditCreation
							};
						case "coins":
							return {
								type: Br.Coins
							};
						case "internationalSitePage":
							return {
								type: Br.InternationalSite
							};
						case "happeningNow":
							return {
								type: Br.HappeningNow
							};
						case "premium":
							return {
								type: Br.Premium
							};
						case "acknowledgements":
							return {
								type: Br.Acknowledgements
							};
						case "appeal":
							return {
								type: Br.Appeal
							};
						case "report":
							return {
								type: Br.Report
							};
						case "userDataRequest":
							return {
								type: Br.UserDataRequest
							};
						case "geotagging":
							return {
								type: Br.Geotagging
							};
						case "notificationsInbox":
							return {
								type: Br.NotificationsInbox
							};
						case "topic": {
							const t = Object(qn.u)(n),
								s = t && Object(Kr.d)(e, t);
							if (s) return {
								type: Br.Topic,
								model: s
							}
						}
					}
					const o = e.user.account;
					if (o) switch (a) {
						case "inboxPages":
							return {
								type: Br.Inbox, model: o
							};
						case "settings":
							return {
								type: Br.Settings, model: o
							}
					}
					const i = Object(qn.V)(e, {
						pageLayer: n
					});
					if ("all" === i) return {
						type: Br.All
					};
					if ("popular" === i) return {
						type: Br.Popular
					};
					const c = Object(qn.s)(e, {
						pageLayer: n
					});
					if (c) return "searchResults" === a ? {
						type: Br.CommunitySearch,
						model: c
					} : {
						type: Br.Community,
						model: c
					};
					const l = Object(qn.e)(e, {
						pageLayer: n
					});
					if (l) return {
						type: Br.Multi,
						model: l
					};
					const d = Object(qn.l)(e, {
						pageLayer: n
					});
					if (d) return {
						type: Br.UserProfile,
						model: d
					};
					const u = Object(qn.j)(n);
					if (u) return {
						type: Br.UserProfileName,
						name: `u/${u}`
					};
					if (a && "searchResults" === a) return {
						type: Br.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(qn.p)(e, {
								pageLayer: n
							}) || zr.e,
							s = Object(Zr.C)(e, {
								subredditName: t
							});
						if (s) return {
							type: Br.Community,
							model: s
						}
					}
					return {
						type: Br.Unknown
					}
				}),
				Xr = n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				Yr = n.n(Xr);

			function $r() {
				return ($r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function ea(e) {
				const t = e.icon,
					n = e.text,
					s = e.badge,
					r = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Yr.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Object(ke.a)(Yr.a.text, {
								[Yr.a.hasBadge]: !!s
							})
						}), s && m.a.createElement(s, {
							className: Yr.a.badge
						})),
						className: Object(ke.a)(Yr.a.item, e.className, {
							[Yr.a.mFocused]: !!e.isFocused,
							[Yr.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return r["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", $r({}, r, {
					href: e.to,
					target: "_blank",
					rel: "noopener noreferrer"
				})) : m.a.createElement(lr.a, $r({}, r, {
					to: e.to
				})) : m.a.createElement("button", r)
			}
			var ta = n("./src/reddit/components/BadgeCounter/index.tsx"),
				na = n("./src/reddit/constants/localStorage.ts"),
				sa = n("./src/reddit/hooks/useIsClient.ts"),
				ra = n("./src/reddit/hooks/useLocalStorage.ts");
			const aa = e => {
					const t = Number(e);
					return isNaN(t) ? 0 : t
				},
				oa = e => {
					let {
						className: t
					} = e;
					const n = Object(sa.a)(),
						s = Object(xe.e)(In.g),
						r = Object(xe.e)(O.S),
						[a, o] = Object(ra.a)(na.b.LOGGED_OUT_HOME_SEEN, {}),
						i = Date.now(),
						c = aa(a.dismissed),
						l = aa(a.throttledUntil),
						d = !n || r || c >= 3 || s || i < l;
					return n && !r && s && c < 3 && i > l && o({
						dismissed: c + 1,
						throttledUntil: i + k.E
					}), d ? null : m.a.createElement(ta.a, {
						className: t,
						isActive: !0,
						unreadCount: -1
					})
				};
			var ia = n("./src/reddit/routes/modListing/index.ts"),
				ca = n("./src/reddit/selectors/countrySites.ts"),
				la = n("./src/reddit/selectors/experiments/econ/index.ts"),
				da = n("./src/reddit/selectors/experiments/happeningNow.ts"),
				ua = n("./src/reddit/selectors/multireddit.ts"),
				ma = n("./src/lib/LinkedListMap/index.ts"),
				pa = n("./src/reddit/routes/avatar/index.ts");

			function ba() {
				return (ba = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ha = Object(re.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(ua.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(ua.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				recentSubreddits: e => e.recentSubreddits.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var ga;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost", e[e.ExploreMenu = 11] = "ExploreMenu"
			}(ga || (ga = {}));
			const fa = [e => ({
					id: Br.Employee,
					type: ga.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(Nr.a, ba({
							name: "home"
						}, e)),
						text(e) {
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
				va = () => [e => ({
					id: Br.All,
					type: ga.GenericLink,
					model: {
						url: "/r/all/",
						displayText: s.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(Nr.a, ba({
							name: "all"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("All", null, {
								hk: "2M8nEy"
							}))
						}
					},
					telemetryNoun: "all"
				})],
				Oa = () => [e => ({
					id: "reddit-feeds",
					type: ga.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Br.Home,
					type: ga.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(Nr.a, ba({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: Br.Popular,
					type: ga.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(Nr.a, ba({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...va()],
				Ca = e => m.a.createElement(oa, {
					className: e.className
				}),
				ya = [e => ({
					id: "reddit-feeds",
					type: ga.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Br.Home,
					type: ga.GenericLink,
					model: {
						url: "/?feed=home",
						badge: Ca,
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(Nr.a, ba({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: Br.Popular,
					type: ga.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(Nr.a, ba({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				})],
				Ea = [e => ({
					id: "reddit-other",
					type: ga.Header,
					model: {
						displayText: s.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Br.Settings,
					type: ga.GenericLink,
					model: {
						url: "/settings",
						displayText: s.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(Lr.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("User Settings", null, {
								hk: "36WFGd"
							}))
						}
					},
					telemetryNoun: "settings"
				}), e => ({
					id: Br.Inbox,
					type: ga.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: s.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(Lr.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Messages", null, {
								hk: "43DUrY"
							}))
						}
					},
					telemetryNoun: "mail"
				})],
				xa = e => ({
					id: Br.Coins,
					type: ga.GenericLink,
					model: {
						url: "/coins",
						displayText: s.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(Nr.a, ba({
							name: "coins"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Coins", null, {
								hk: "ZFvDU"
							}))
						}
					},
					telemetryNoun: "coins"
				}),
				_a = e => ({
					id: Br.Premium,
					type: ga.GenericLink,
					model: {
						url: "/premium",
						displayText: s.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(Nr.a, ba({
							name: "premium"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Premium", null, {
								hk: "3i2C4T"
							}))
						}
					},
					telemetryNoun: "premium"
				}),
				ja = e => ({
					id: Br.Avatar,
					type: ga.GenericLink,
					model: {
						url: pa.a,
						displayText: s.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(Nr.a, ba({
							name: "avatar_style"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Avatar", null, {
								hk: "3coVk4"
							}))
						}
					},
					telemetryNoun: "avatar"
				}),
				Pa = [e => ({
					id: Br.ModQueue,
					type: ga.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: s.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(Nr.a, ba({
							name: "mod_queue"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Mod Queue", null, {
								hk: "12pTAg"
							}))
						}
					},
					telemetryNoun: "mod_queue"
				}), e => {
					return {
						id: Br.ModMail,
						type: ga.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: s.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(Nr.a, ba({
								name: "mod_mail"
							}, e)),
							text(e) {
								let {
									className: t
								} = e;
								return m.a.createElement("span", {
									className: t
								}, s.fbt._("Modmail", null, {
									hk: "2QQ3dU"
								}))
							}
						},
						telemetryNoun: "modmail_beta"
					}
				}];
			const Sa = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const r = {
						id: Br.CreateCommunity,
						telemetryNoun: "create_community"
					},
					a = {
						displayText: s.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(Nr.a, ba({
							name: "add"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Create Community", null, {
								hk: "41sjx"
							}).toString())
						}
					};
				e.push({
					...r,
					type: ga.GenericClickable,
					model: {
						...a,
						onClick: () => {
							n ? (t(Object(Dt.k)({
								actionSource: Dt.a.HeaderSignup
							})), t(Object(ne.openRegisterModal)())) : t(Object(Dt.h)(Jt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var ka = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				Na = n.n(ka);

			function wa(e) {
				return m.a.createElement("div", {
					className: Object(ke.a)(Na.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var Ma = n("./src/reddit/actions/subscription/index.ts"),
				Ia = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				Ta = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				Aa = n.n(Ta);

			function Ra() {
				return (Ra = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const La = Object(re.c)({
					currentUser: O.m,
					hideNSFWPref: O.H,
					isLoggedIn: O.S
				}),
				Fa = Object(xe.b)(La, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case ga.Subreddit:
								e(Object(Ma.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case ga.Profile:
								e(Object(Ma.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case ga.Multi:
								e(Object(Ma.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(Ia.f)(t.model.url)) : t.sendEvent(Object(Ia.c)(t.model.url))
						}
					}
				}));
			var Da = Object(Ke.c)(Fa((function(e) {
					const t = {
						className: Object(ke.a)(Aa.a.item, e.className, {
							[Aa.a.mFocused]: !!e.isFocused
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
						case ga.Subreddit:
							return m.a.createElement(lr.a, Ra({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Ar.b, {
								className: Aa.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: Aa.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Nr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ke.a)(Aa.a.favorite, {
									[Aa.a.mFavorite]: !!e.isFavorite
								})
							})));
						case ga.SubredditAutocomplete:
							return m.a.createElement(lr.a, Ra({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(Ar.b, {
								className: Aa.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: Aa.a.text
							}, e.model.name));
						case ga.Multi:
							return m.a.createElement(lr.a, Ra({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: Aa.a.customFeedIcon
							}), m.a.createElement("span", {
								className: Aa.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Nr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ke.a)(Aa.a.favorite, {
									[Aa.a.mFavorite]: !!e.isFavorite
								})
							})));
						case ga.Profile:
							return m.a.createElement(lr.a, Ra({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Rr.a, {
								className: Aa.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: Aa.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Nr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ke.a)(Aa.a.favorite, {
									[Aa.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Ba = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Ga = n.n(Ba);

			function Ua(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: Ga.a.header
				}), m.a.createElement("div", {
					className: Ga.a.item
				}), m.a.createElement("div", {
					className: Ga.a.item
				}), m.a.createElement("div", {
					className: Ga.a.item
				}), m.a.createElement("div", {
					className: Ga.a.item
				}))
			}
			var Ha = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				qa = n("./src/lib/sample/index.ts"),
				Wa = n("./src/reddit/actions/subreddit.ts"),
				Va = n("./src/reddit/controls/InternalLink/index.tsx");

			function za() {
				return (za = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Qa = e => {
					const {
						children: t,
						className: n,
						href: s = "#",
						onClick: r,
						rel: a
					} = e, o = {
						onClick: r,
						rel: a,
						className: n
					};
					return (s || "").startsWith("http") ? m.a.createElement("a", za({
						href: s
					}, o), t) : m.a.createElement(Va.default, za({
						to: s
					}, o), t)
				},
				Za = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				Ka = n.n(Za),
				Ja = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				Xa = n.n(Ja);
			class Ya extends m.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = e => {
						const t = "A" === e.target.tagName;
						this.props.children && !t && null == this.props.isOpen && this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !!e.defaultOpen
					}
				}
				render() {
					var e;
					const {
						buttonClassName: t,
						children: n,
						className: s,
						headingClassName: r,
						icon: a,
						noBottomDivider: o,
						onClick: i,
						title: c,
						url: l
					} = this.props, d = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: Object(ke.a)(Ka.a.button, Xa.a.button, t),
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof i) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								i(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: Object(ke.a)(Ka.a.headingContent, r),
						tabIndex: -1
					}, m.a.createElement("span", {
						className: Ka.a.iconContainer
					}, a), m.a.createElement("span", {
						className: Ka.a.title
					}, l ? m.a.createElement(Qa, {
						className: Ka.a.innerLink,
						href: l
					}, c) : m.a.createElement(m.a.Fragment, null, c)), m.a.createElement(Nr.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(ke.a)(Ka.a.chevronIcon, {
							[Ka.a["m-expanded"]]: d
						})
					}))), m.a.createElement("div", {
						className: Object(ke.a)(Ka.a.contentContainer, Ka.a["m-collapsible"], {
							[Ka.a.isOpen]: d,
							[Ka.a.noBottomDivider]: o
						}, s)
					}, n))
				}
			}
			var $a = Ya,
				eo = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				to = n("./src/reddit/constants/colors.ts");
			const no = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(ke.a)(Ka.a.title, n)
					}, t)
				},
				so = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(ke.a)(Ka.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(no, {
						title: s,
						titleClassName: r
					}))
				},
				ro = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: r,
						titleClassName: a,
						rel: o
					} = e;
					return m.a.createElement(Qa, {
						className: Object(ke.a)(Ka.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: o
					}, m.a.createElement(no, {
						title: r,
						titleClassName: a
					}))
				},
				ao = e => {
					const {
						className: t,
						href: n,
						iconClassName: s,
						iconUrl: r,
						onClick: a,
						rel: o,
						title: i,
						titleClassName: c
					} = e;
					return m.a.createElement(Qa, {
						className: Object(ke.a)(Ka.a.secondLevelButton, t),
						href: n,
						onClick: a,
						rel: o
					}, m.a.createElement(Ar.b, {
						"aria-hidden": !0,
						className: Object(ke.a)(Ka.a.subredditIcon, s),
						iconUrl: r,
						primaryColor: to.a.snoo
					}), m.a.createElement(no, {
						title: i,
						titleClassName: c
					}))
				},
				oo = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r,
						isEnabled: a
					} = e;
					return m.a.createElement("button", {
						className: Object(ke.a)(Ka.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(no, {
						title: s,
						titleClassName: r
					}), m.a.createElement(eo.a, {
						className: Ka.a.toggleSwitch,
						"data-redditstyle": !0,
						on: a,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var io = [{
					link: {
						icon: "topic_videogaming",
						noun: "gaming",
						title: "Gaming",
						url: "/t/gaming/"
					},
					sublinks: [{
						noun: "valheim",
						title: "Valheim",
						url: "/t/valheim/"
					}, {
						noun: "genshin_impact",
						title: "Genshin Impact",
						url: "/t/genshin_impact/"
					}, {
						noun: "minecraft",
						title: "Minecraft",
						url: "/t/minecraft/"
					}, {
						noun: "pokimane",
						title: "Pokimane",
						url: "/t/pokimane/"
					}, {
						noun: "halo_infinite",
						title: "Halo Infinite",
						url: "/t/halo_infinite/"
					}, {
						noun: "call_of_duty_warzone",
						title: "Call of Duty: Warzone",
						url: "/t/call_of_duty_warzone/"
					}, {
						noun: "path_of_exile",
						title: "Path of Exile",
						url: "/t/path_of_exile/"
					}, {
						noun: "hollow_knight_silksong",
						title: "Hollow Knight: Silksong",
						url: "/t/hollow_knight_silksong/"
					}, {
						noun: "escape_from_tarkov",
						title: "Escape from Tarkov",
						url: "/t/escape_from_tarkov/"
					}, {
						noun: "watch_dogs_legion",
						title: "Watch Dogs: Legion",
						url: "/t/watch_dogs_legion/"
					}]
				}, {
					link: {
						icon: "topic_sports",
						noun: "sports",
						title: "Sports",
						url: "/t/sports/"
					},
					sublinks: [{
						noun: "nfl",
						title: "NFL",
						url: "/t/nfl/"
					}, {
						noun: "nba",
						title: "NBA",
						url: "/t/nba/"
					}, {
						noun: "megan_anderson",
						title: "Megan Anderson",
						url: "/t/megan_anderson/"
					}, {
						noun: "atlanta_hawks",
						title: "Atlanta Hawks",
						url: "/t/atlanta_hawks/"
					}, {
						noun: "los_angeles_lakers",
						title: "Los Angeles Lakers",
						url: "/t/los_angeles_lakers/"
					}, {
						noun: "boston_celtics",
						title: "Boston Celtics",
						url: "/t/boston_celtics/"
					}, {
						noun: "arsenal_fc",
						title: "Arsenal F.C.",
						url: "/t/arsenal_fc/"
					}, {
						noun: "philadelphia_76ers",
						title: "Philadelphia 76ers",
						url: "/t/philadelphia_76ers/"
					}, {
						noun: "premier_league",
						title: "Premier League",
						url: "/t/premier_league/"
					}, {
						noun: "ufc",
						title: "UFC",
						url: "/t/ufc/"
					}]
				}, {
					link: {
						icon: "topic_business",
						noun: "business",
						title: "Business, Economics, and Finance",
						url: "/t/business_economics_and_finance/"
					},
					sublinks: [{
						noun: "gamestop",
						title: "GameStop",
						url: "/t/gamestop/"
					}, {
						noun: "moderna",
						title: "Moderna",
						url: "/t/moderna/"
					}, {
						noun: "pfizer",
						title: "Pfizer",
						url: "/t/pfizer/"
					}, {
						noun: "johnson_johnson",
						title: "Johnson & Johnson",
						url: "/t/johnson_johnson/"
					}, {
						noun: "astrazeneca",
						title: "AstraZeneca",
						url: "/t/astrazeneca/"
					}, {
						noun: "walgreens",
						title: "Walgreens",
						url: "/t/walgreens/"
					}, {
						noun: "best_buy",
						title: "Best Buy",
						url: "/t/best_buy/"
					}, {
						noun: "novavax",
						title: "Novavax",
						url: "/t/novavax/"
					}, {
						noun: "spacex",
						title: "SpaceX",
						url: "/t/spacex/"
					}, {
						noun: "tesla",
						title: "Tesla",
						url: "/t/tesla/"
					}]
				}, {
					link: {
						icon: "topic_crypto",
						noun: "crypto",
						title: "Crypto",
						url: "/t/cryptocurrency/"
					},
					sublinks: [{
						noun: "cardano",
						title: "Cardano",
						url: "/t/cardano/"
					}, {
						noun: "dogecoin",
						title: "Dogecoin",
						url: "/t/dogecoin/"
					}, {
						noun: "algorand",
						title: "Algorand",
						url: "/t/algorand/"
					}, {
						noun: "bitcoin",
						title: "Bitcoin",
						url: "/t/bitcoin/"
					}, {
						noun: "litecoin",
						title: "Litecoin",
						url: "/t/litecoin/"
					}, {
						noun: "basic_attention_token",
						title: "Basic Attention Token",
						url: "/t/basic_attention_token/"
					}, {
						noun: "bitcoin_cash",
						title: "Bitcoin Cash",
						url: "/t/bitcoin_cash/"
					}]
				}, {
					link: {
						icon: "topic_television",
						noun: "tv",
						title: "Television",
						url: "/t/television/"
					},
					sublinks: [{
						noun: "the_real_housewives_of_atlanta",
						title: "The Real Housewives of Atlanta",
						url: "/t/the_real_housewives_of_atlanta/"
					}, {
						noun: "the_bachelor",
						title: "The Bachelor",
						url: "/t/the_bachelor/"
					}, {
						noun: "sister_wives",
						title: "Sister Wives",
						url: "/t/sister_wives/"
					}, {
						noun: "90_day_fiance",
						title: "90 Day Fiance",
						url: "/t/90_day_fiance/"
					}, {
						noun: "wife_swap",
						title: "Wife Swap",
						url: "/t/wife_swap/"
					}, {
						noun: "the_amazing_race_australia",
						title: "The Amazing Race Australia",
						url: "/t/the_amazing_race_australia/"
					}, {
						noun: "married_at_first_sight",
						title: "Married at First Sight",
						url: "/t/married_at_first_sight/"
					}, {
						noun: "the_real_housewives_of_dallas",
						title: "The Real Housewives of Dallas",
						url: "/t/the_real_housewives_of_dallas/"
					}, {
						noun: "my_600lb_life",
						title: "My 600-lb Life",
						url: "/t/my_600lb_life/"
					}, {
						noun: "last_week_tonight_with_john_oliver",
						title: "Last Week Tonight with John Oliver",
						url: "/t/last_week_tonight_with_john_oliver/"
					}]
				}, {
					link: {
						icon: "topic_celebrity",
						noun: "celebrity",
						title: "Celebrity",
						url: "/t/celebrity/"
					},
					sublinks: [{
						noun: "kim_kardashian",
						title: "Kim Kardashian",
						url: "/t/kim_kardashian/"
					}, {
						noun: "doja_cat",
						title: "Doja Cat",
						url: "/t/doja_cat/"
					}, {
						noun: "iggy_azalea",
						title: "Iggy Azalea",
						url: "/t/iggy_azalea/"
					}, {
						noun: "anya_taylorjoy",
						title: "Anya Taylor-Joy",
						url: "/t/anya_taylor_joy/"
					}, {
						noun: "jamie_lee_curtis",
						title: "Jamie Lee Curtis",
						url: "/t/jamie_lee_curtis/"
					}, {
						noun: "natalie_portman",
						title: "Natalie Portman",
						url: "/t/natalie_portman/"
					}, {
						noun: "henry_cavill",
						title: "Henry Cavill",
						url: "/t/henry_cavill/"
					}, {
						noun: "millie_bobby_brown",
						title: "Millie Bobby Brown",
						url: "/t/millie_bobby_brown/"
					}, {
						noun: "tom_hiddleston",
						title: "Tom Hiddleston",
						url: "/t/tom_hiddleston/"
					}, {
						noun: "keanu_reeves",
						title: "Keanu Reeves",
						url: "/t/keanu_reeves/"
					}]
				}, {
					link: {
						icon: "overflow_horizontal",
						noun: "more_topics",
						title: "More Topics",
						url: "/topics/a-1/"
					},
					sublinks: [{
						noun: "animals_and_pets",
						title: "Animals and Pets",
						url: "/t/animals_and_pets/"
					}, {
						noun: "anime",
						title: "Anime",
						url: "/t/anime/"
					}, {
						noun: "art",
						title: "Art",
						url: "/t/art/"
					}, {
						noun: "cars_and_motor_vehicles",
						title: "Cars and Motor Vehicles",
						url: "/t/cars_and_motor_vehicles/"
					}, {
						noun: "crafts_and_diy",
						title: "Crafts and DIY",
						url: "/t/crafts_and_diy/"
					}, {
						noun: "culture_race_and_ethnicity",
						title: "Culture, Race, and Ethnicity",
						url: "/t/culture_race_and_ethnicity/"
					}, {
						noun: "ethics_and_philosophy",
						title: "Ethics and Philosophy",
						url: "/t/ethics_and_philosophy/"
					}, {
						noun: "fashion",
						title: "Fashion",
						url: "/t/fashion/"
					}, {
						noun: "food_and_drink",
						title: "Food and Drink",
						url: "/t/food_and_drink/"
					}, {
						noun: "history",
						title: "History",
						url: "/t/history/"
					}, {
						noun: "hobby",
						title: "Hobbies",
						url: "/t/hobby/"
					}, {
						noun: "law",
						title: "Law",
						url: "/t/law/"
					}, {
						noun: "learning_and_education",
						title: "Learning and Education",
						url: "/t/learning_and_education/"
					}, {
						noun: "military",
						title: "Military",
						url: "/t/military/"
					}, {
						noun: "movie",
						title: "Movies",
						url: "/t/movie/"
					}, {
						noun: "music",
						title: "Music",
						url: "/t/music/"
					}, {
						noun: "place",
						title: "Place",
						url: "/t/place/"
					}, {
						noun: "podcasts_and_streamers",
						title: "Podcasts and Streamers",
						url: "/t/podcasts_and_streamers/"
					}, {
						noun: "politics",
						title: "Politics",
						url: "/t/politics/"
					}, {
						noun: "programming",
						title: "Programming",
						url: "/t/programming/"
					}, {
						noun: "reading_writing_and_literature",
						title: "Reading, Writing, and Literature",
						url: "/t/reading_writing_and_literature/"
					}, {
						noun: "religion_and_spirituality",
						title: "Religion and Spirituality",
						url: "/t/religion_and_spirituality/"
					}, {
						noun: "science",
						title: "Science",
						url: "/t/science/"
					}, {
						noun: "tabletop_game",
						title: "Tabletop Games",
						url: "/t/tabletop_games/"
					}, {
						noun: "technology",
						title: "Technology",
						url: "/t/technology/"
					}, {
						noun: "travel",
						title: "Travel",
						url: "/t/travel/"
					}]
				}],
				co = n("./src/reddit/helpers/trackers/navigation.ts"),
				lo = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				uo = n.n(lo);
			const mo = e => {
				let {
					sendEvent: t,
					showIcons: n = !1,
					useNavStyles: s = !1
				} = e;
				const [r, a] = Object(u.useState)(null), o = e => () => {
					a(r === e ? null : e)
				};
				return m.a.createElement(m.a.Fragment, null, io.map((e, a) => ((e, t, n, s, r) => {
					let {
						link: a,
						sublinks: o
					} = e, {
						isOpen: i,
						onClick: c
					} = t;
					return m.a.createElement($a, {
						buttonClassName: r ? uo.a.navButtonOverride : "",
						className: uo.a.collapsibleContainer,
						icon: s && a.icon && m.a.createElement(Nr.a, {
							name: a.icon
						}),
						isOpen: i,
						key: a.url,
						onClick: (e, t) => {
							a.noun && n(Object(co.d)("topic" + (t ? "_chevron" : "_menu"), a.noun)), "function" == typeof c && c(e)
						},
						title: a.title,
						url: a.url
					}, o.map(e => m.a.createElement(ro, {
						className: r ? uo.a.navBasicLink : uo.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(co.d)("topic_menu", e.noun))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: o(e),
					isOpen: r === e
				}))(a), t, n, s)))
			};
			var po = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: r
					} = e;
					return m.a.createElement($a, {
						icon: m.a.createElement(Nr.a, {
							name: "discover"
						}),
						isOpen: t,
						onClick: (e, t) => {
							r(Object(co.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Explore", null, {
							hk: "4xNnBs"
						})
					}, m.a.createElement("span", null, m.a.createElement(mo, {
						sendEvent: r
					})))
				},
				bo = n("./src/reddit/constants/keycodes.ts"),
				ho = n("./src/reddit/helpers/correlationIdTracker.ts"),
				go = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				fo = n("./src/reddit/helpers/trackers/happeningNow.ts"),
				vo = n("./src/reddit/helpers/trackers/postComposer.ts"),
				Oo = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				Co = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				yo = n.n(Co);

			function Eo() {
				return (Eo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function xo(e) {
				return e.id === Br.ModMail || e.id === Br.CreateCommunity
			}

			function _o(e) {
				const t = new ma.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== ga.Header && e.type !== ga.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const jo = Object(re.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					isLoggedOutMenuRenderedCounterSampled: e => Object(qa.a)(e, {
						rate: 14
					}),
					unfilteredListBuilder: e => t => {
						const n = ha(e),
							r = new ma.a("id"),
							a = Object(O.S)(e),
							o = Object(ca.f)(e),
							i = Object(O.rb)(e),
							c = [],
							l = (e => Object(la.m)(e) ? [_a, xa, ja] : [xa, _a, ja])(e),
							d = c.length ? l.filter(e => !c.includes(e(null).id)) : l;
						if (a) {
							const a = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (r.push({
								id: "header-favorites",
								type: ga.Header,
								model: {
									displayText: s.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => r.push({
								id: "fav" + e.id,
								type: ga.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => r.push({
								id: "fav" + e.id,
								type: ga.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => r.push({
								id: "fav" + e.url,
								type: ga.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && r.push({
								id: "multis-pending",
								type: ga.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? r.push({
								id: "moderatingSubreddits-pending",
								type: ga.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (r.push({
								id: "header-moderating",
								type: ga.Header,
								model: {
									displayText: s.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), (null == a ? void 0 : a.isMod) && Pa.forEach(e => r.push(e(a))), r.push({
								id: Br.ModListing,
								type: ga.GenericLink,
								model: {
									url: ia.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(Nr.a, ba({
										name: "mod_queue"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, "r/Mod")
									}
								},
								telemetryNoun: "r_mod"
							}), n.moderatingSubreddits.forEach(e => r.push({
								id: "mod" + e.id,
								type: ga.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: ga.Header,
									model: {
										displayText: s.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button(e) {
											let {
												className: t,
												sendClickEvent: s
											} = e;
											return m.a.createElement("button", {
												onClick: () => {
													n(Object(Dt.h)(Jt.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(ke.a)(t, Hr.a.multiPlusButton)
											}, m.a.createElement(Nr.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: ga.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(r, n, t), n.subscriptionsPending ? r.push({
								id: "subscriptions-pending",
								type: ga.LoadingState,
								model: {
									displayText: ""
								}
							}) : function(e, t, n, r) {
								t.subscriptions.length && (e.push({
									id: "header-subscriptions",
									type: ga.Header,
									model: {
										displayText: s.fbt._("your communities", null, {
											hk: "BtF8C"
										}).toString()
									}
								}), n && Sa(e, r), t.subscriptions.forEach(t => e.push({
									id: "sub" + t.id,
									type: ga.Subreddit,
									model: t,
									telemetryNoun: "community"
								}))), t.profiles.length && (e.push({
									id: "header-profiles",
									type: ga.Header,
									model: {
										displayText: s.fbt._("following", null, {
											hk: "1kjEfv"
										}).toString()
									}
								}), t.profiles.forEach(t => e.push({
									id: "pro" + t.id,
									type: ga.Profile,
									model: t,
									telemetryNoun: "profile"
								})))
							}(r, n, i, t), ((e, t, n, r) => (Oa().forEach(e => t.push(e(n))), n.isEmployee && fa.forEach(e => t.push(e(n))), Object(da.a)(e) && t.push({
								id: Br.HappeningNow,
								type: ga.GenericLink,
								model: {
									url: "/now",
									displayText: s.fbt._("Happening Now", null, {
										hk: "1UsMvs"
									}).toString(),
									icon(e) {
										let {
											className: t
										} = e;
										return m.a.createElement(Dr, {
											className: t
										})
									},
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Happening Now", null, {
											hk: "1UsMvs"
										}))
									}
								},
								telemetryNoun: "happening_now"
							}), t))(e, r, a), Ea.forEach(e => r.push(e(a))), r.push((() => ({
								id: Br.CreatePost,
								type: ga.CreatePost,
								model: {
									url: "/submit",
									displayText: s.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement(Nr.a, ba({
										name: "add"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Create Post", null, {
											hk: "dGck6"
										}))
									}
								}
							}))()), (e => e.push({
								id: Br.NotificationsInbox,
								type: ga.GenericLink,
								model: {
									url: "/notifications",
									displayText: s.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(Nr.a, ba({
										name: "notification"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Notifications", null, {
											hk: "2xenVO"
										}))
									}
								},
								telemetryNoun: "inbox"
							}))(r), d.forEach(e => r.push(e(a)))
						} else n.subscriptions.length ? Oa().forEach(e => r.push(e(null))) : (ya.forEach(e => {
							if (!e) return;
							e(null).id === Br.Home && o || r.push(e(null))
						}), o || function(e, t) {
							t.recentSubreddits.length && (e.push({
								id: "header-subscriptions",
								type: ga.Header,
								model: {
									displayText: s.fbt._("recent", null, {
										hk: "3yjJ4f"
									}).toString()
								}
							}), t.recentSubreddits.slice(0, 3).forEach(t => e.push({
								id: "sub" + t.id,
								type: ga.Subreddit,
								model: t,
								telemetryNoun: "community"
							})))
						}(r, n), function(e) {
							e.push({
								id: "header-explore-menu",
								type: ga.Header,
								model: {
									displayText: s.fbt._("Topics", null, {
										hk: "1ue48g"
									}).toString()
								}
							}), e.push({
								id: "explore-menu",
								type: ga.ExploreMenu,
								model: {
									displayText: s.fbt._("Explore Menu", null, {
										hk: "1acYZN"
									}).toString()
								}
							})
						}(r));
						return r
					},
					isLoggedIn: O.S
				}),
				Po = e => ({
					onHomeClicked: () => e(Object(T.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(p.b)(t)),
					onSubredditsRequested: () => {
						e(Object(Ma.e)()), e(Object(Wa.q)()), e(Object(T.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				So = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class ko extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = _o(n),
							r = s.first();
						this.setState({
							focusOrder: s,
							renderableList: n,
							currentInputText: e.currentTarget.value,
							focusedItemId: r ? r.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === bo.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === bo.b.Tab && this.props.onClose && this.props.onClose(), e.key === bo.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== ga.Header && e.type !== ga.ExploreMenu && e.type !== ga.LoadingState && (this.fireTelemetryForListItem(e), e.type === ga.GenericClickable ? e.model.onClick() : xo(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === bo.b.ArrowDown && (e.preventDefault(), this.setState(e => {
							const t = this.findNextFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						})), e.key === bo.b.ArrowUp && (e.preventDefault(), this.setState(e => {
							const t = this.findPrevFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						}))
					}, this.fireTelemetryForListItem = e => {
						let t;
						switch (e.id) {
							case Br.Coins:
							case Br.Premium:
								Object(ho.d)(ho.a.GoldPayment, !0), t = Object(ho.c)(ho.a.GoldPayment)
						}
						switch (e.type) {
							case ga.Category:
							case ga.GenericLink:
							case ga.GenericClickable:
							case ga.Multi:
							case ga.Profile:
							case ga.Subreddit:
								this.props.sendEvent(n => ({
									...Object(vn.o)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === ga.Multi ? Object(vn.n)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								})), e.id === Br.HappeningNow && this.props.sendEvent(Object(fo.b)(fo.a.Dropdown));
								break;
							case ga.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(vn.o)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
							case ga.CreatePost:
								this.props.sendEvent(Object(vo.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: _o(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					const {
						canAutofocus: e,
						isLoggedOutMenuRenderedCounterSampled: t,
						isPinned: n,
						onSubredditsRequested: s
					} = this.props;
					"complete" === document.readyState ? s() : window.addEventListener("load", s), e && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus()), t && Object(go.b)(n ? Oo.c.LeftRail : Oo.c.NavDropdown)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = _o(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new ma.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case ga.Category:
								case ga.GenericLink:
								case ga.Multi:
								case ga.Profile:
								case ga.Subreddit:
								case ga.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case ga.Header: {
									const t = n.last();
									t && t.type === ga.Header && n.pop(), n.push(e);
									break
								}
								case ga.LoadingState:
							}
						});
						const r = n.last();
						return r && r.type === ga.Header && n.pop(), n
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
						"aria-label": t && t.model.displayText ? `${t.model.displayText} ${s.fbt._("selected",null,{hk:"QqrSS"})}` : ""
					}), this.props.isLoggedIn && m.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: yo.a.filter,
						id: "header-subreddit-filter",
						placeholder: s.fbt._("Filter", null, {
							hk: "oqdpz"
						}),
						onChange: this.onChange,
						onKeyDown: this.onKeyDown,
						ref: this.inputRef
					}), e.map((e, t) => {
						const n = {
							id: `focus-${e.id}`,
							isFocused: this.state.focusedItemId === e.id,
							key: `subreddit-list-key-${e.id}`,
							onFocus: () => this.onChangeFocusedListItemId(e.id),
							onMouseEnter: () => this.onChangeFocusedListItemId(e.id),
							onMouseLeave: () => this.onChangeFocusedListItemId(void 0),
							onClick: () => {
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Br.Home && this.props.onHomeClicked(), e.type === ga.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case ga.GenericClickable:
								return m.a.createElement(ea, Eo({}, n, {
									className: yo.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case ga.Category:
							case ga.GenericLink:
							case ga.CreatePost:
								return m.a.createElement(ea, Eo({}, n, {
									externalLink: xo(e),
									className: yo.a.item,
									to: e.model.url,
									badge: e.model.badge,
									icon: e.model.icon,
									text: e.model.text
								}));
							case ga.Header: {
								const n = e.model.button;
								return m.a.createElement(wa, {
									className: yo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: yo.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case ga.LoadingState:
								return m.a.createElement(Ua, {
									className: yo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case ga.Multi:
								return m.a.createElement(Da, Eo({}, n, {
									className: yo.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: ga.Multi
								}));
							case ga.Profile:
								return m.a.createElement(Da, Eo({}, n, {
									className: yo.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: ga.Profile
								}));
							case ga.Subreddit:
								return m.a.createElement(Da, Eo({}, n, {
									className: yo.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: ga.Subreddit
								}));
							case ga.ExploreMenu:
								return m.a.createElement(mo, Eo({}, n, {
									sendEvent: this.props.sendEvent,
									showIcons: !0,
									useNavStyles: !0
								}))
						}
					}))
				}
			}
			const No = Object(xe.b)(jo, Po, So)(Object(Ke.c)(ko)),
				wo = Object(xe.b)(jo, Po, So)(Object(Ke.c)(Object(Ha.b)(ko))),
				Mo = Object(qn.v)({
					pageLayer: e => e
				}),
				Io = Object(re.c)({
					currentPage: Jr,
					hideNSFWPref: O.H,
					isDropdownOpen: wr.a,
					isOverlayOpen: In.i,
					isPinnedSubscriptionsMenuDisabled: Mr.b,
					isSubscriptionsPinned: Mr.c
				});
			class To extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(kr.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(vn.o)(e),
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}, this.renderHeaderSubreddit = e => {
						const {
							currentPage: t,
							className: n,
							hideNSFWPref: r,
							isOverlayOpen: a
						} = this.props, o = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, i = a;
						return m.a.createElement("div", {
							"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(ke.a)(Hr.a.container, n, {
								[Hr.a.mOpen]: o,
								[Hr.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[Hr.a.mPinned]: this.props.isSubscriptionsPinned,
								[Hr.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: Hr.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: Hr.a.containerText
						}, function(e) {
							switch (e.type) {
								case Br.Acknowledgements:
									return Wr(s.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case Br.All:
									return Wr(s.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case Br.Appeal:
									return Wr(s.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case Br.Avatar:
									return Wr(s.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case Br.Coins:
									return Wr(s.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case Br.Community:
									return Wr(e.model.displayText, !0);
								case Br.CommunitySearch:
									return Wr(s.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case Br.CreateCommunity:
									return Wr(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Br.CreatePost:
									return Wr(s.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case Br.GlobalSearch:
									return Wr(s.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case Br.Geotagging:
									return Wr(s.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case Br.HappeningNow:
									return Wr(s.fbt._("Happening Now", null, {
										hk: "1eys21"
									}).toString());
								case Br.Home:
									return Wr(s.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case Br.Inbox:
									return Wr(s.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case Br.ModListing:
									return Wr("r/Mod");
								case Br.ModMail:
									return Wr(s.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case Br.ModQueue:
									return Wr(s.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case Br.Multi:
									return Wr(e.model.displayText, !0);
								case Br.NotificationsInbox:
									return Wr(s.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case Br.InternationalSite:
								case Br.Popular:
									return Wr(s.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case Br.Premium:
									return Wr(s.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case Br.Recap:
									return Wr(s.fbt._("Reddit Recap", null, {
										hk: "KZIbz"
									}).toString());
								case Br.Report:
									return Wr(s.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case Br.Settings:
									return Wr(s.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case Br.SubredditCreation:
									return Wr(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Br.Topic:
									return Wr(e.model);
								case Br.Unknown:
									return Wr("");
								case Br.UserDataRequest:
									return Wr(s.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case Br.UserProfile:
									return Wr(e.model.displayText, !0);
								case Br.UserProfileName:
									return Wr(e.name, !0);
								case Br.ViewDraft:
									return Wr(s.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t)), function(e, t) {
							const n = e => m.a.createElement(Nr.a, {
								name: e,
								isFilled: !0,
								className: Hr.a.defaultIcon
							});
							switch (e.type) {
								case Br.All:
									return n("all");
								case Br.Acknowledgements:
								case Br.Appeal:
									return n("edit");
								case Br.Avatar:
									return n("avatar_style");
								case Br.Coins:
									return n("coins");
								case Br.Community:
								case Br.CommunitySearch: {
									const n = Object(Ir.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Ar.b, {
										className: Hr.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case Br.CreateCommunity:
								case Br.CreatePost:
									return n("add");
								case Br.Geotagging:
									return n("custom_feed");
								case Br.GlobalSearch:
									return n("search");
								case Br.HappeningNow:
									return m.a.createElement(Dr, {
										className: Hr.a.happeningNowIcon
									});
								case Br.Home:
									return n("home");
								case Br.Inbox:
									return m.a.createElement(Lr.a, {
										wrapperClassName: Hr.a.userIcon
									});
								case Br.ModListing:
									return n("mod_queue");
								case Br.ModMail:
									return n("mod_mail");
								case Br.ModQueue:
									return n("mod_queue");
								case Br.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: Hr.a.customFeedIcon
									});
								case Br.NotificationsInbox:
									return n("notification");
								case Br.InternationalSite:
								case Br.Popular:
									return n("popular");
								case Br.Premium:
									return n("premium");
								case Br.Recap:
									return m.a.createElement(Gr, {
										className: Hr.a.wrappedRedditLogoActive
									});
								case Br.Report:
									return n("report");
								case Br.Settings:
									return m.a.createElement(Lr.a, {
										wrapperClassName: Hr.a.userIcon
									});
								case Br.SubredditCreation:
									return n("add");
								case Br.Topic:
									return n("custom_feed");
								case Br.Unknown:
									return m.a.createElement("div", {
										className: Hr.a.unknownIcon
									});
								case Br.UserDataRequest:
									return n("add");
								case Br.UserProfile: {
									const n = Object(Ir.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Rr.a, {
										className: Hr.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case Br.UserProfileName:
									return m.a.createElement("div", {
										className: Hr.a.defaultIcon
									});
								case Br.Unknown:
									return m.a.createElement("div", {
										className: Hr.a.unknownIcon
									});
								case Br.UserProfile: {
									const n = Object(Ir.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Rr.a, {
										className: Hr.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case Br.ViewDraft:
									return n("edit")
							}
						}(t, r), !this.props.isSubscriptionsPinned && m.a.createElement(Nr.a, {
							name: "caret_down",
							className: Hr.a.caretDown
						})), o && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(Nr.a, {
							name: "side_menu",
							className: Hr.a.pin,
							onClick: i ? void 0 : this.props.onPinSubscriptions
						}), o && m.a.createElement(wo, {
							canAutofocus: !0,
							className: Object(ke.a)(Hr.a.listContainer, Hr.a.paddingBottom),
							currentPage: t,
							onClose: this.close
						}))
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
					return m.a.createElement(Re.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var Ao = Mo(Object(xe.b)(Io, (e, t) => ({
					closeDropdown: () => e(Object(He.f)()),
					onLocationRefresh: (n, s) => e(Object(Sr.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(He.i)()), e(Object(He.f)())
					},
					openDropdown: () => e(Object(He.g)()),
					toggleDropdown: () => e(Object(He.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(Ke.c)(To))),
				Ro = n("./src/reddit/components/JumpToContent/index.tsx"),
				Lo = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Fo = n("./node_modules/lodash/isEmpty.js"),
				Do = n.n(Fo),
				Bo = n("./node_modules/lodash/pick.js"),
				Go = n.n(Bo),
				Uo = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				Ho = n("./src/lib/hooks/usePrevious.ts"),
				qo = n("./src/lib/makeSearchKey/index.ts"),
				Wo = n("./src/reddit/actions/search.ts"),
				Vo = n("./src/lib/makeGqlRequest/index.ts"),
				zo = n("./src/redditGQL/operations/SearchTypeahead.json"),
				Qo = n("./src/redditGQL/operations/SearchTypeaheadByType.json"),
				Zo = n("./src/telemetry/models/App.ts");
			var Ko = n("./node_modules/icepick/icepick.js"),
				Jo = n("./src/reddit/helpers/name/index.ts"),
				Xo = n("./src/reddit/models/Search/index.ts");
			var Yo = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				$o = n("./src/reddit/selectors/experiments/search/searchSingleVariant.ts");
			const ei = e => async (t, n, s) => {
				let {
					gqlContext: r
				} = s;
				const a = n(),
					o = Object($o.a)(a, Hn.Cf),
					i = vn.fb(a, Yo.a.Typeahead),
					c = Object(O.mb)(a);
				if (o) {
					const n = ((e, t) => {
						var n, s, r, a, o, i;
						const c = [],
							l = [],
							d = [],
							u = {},
							m = (e, n) => {
								var s, r, a;
								return Object(Ko.merge)({
									displayInfo: {
										iconUrl: (null === (s = e.styles) || void 0 === s ? void 0 : s.icon) || (null === (a = null === (r = e.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === a ? void 0 : a.url),
										isNSFW: e.isNsfw,
										publicDescription: e.publicDescriptionText || void 0
									},
									id: e.id,
									isTypeaheadSuggestion: !0,
									searchQuery: t,
									section: Xo.c.typeahead,
									type: Xo.b.subredditOrProfile
								}, n)
							};
						return null === (r = null === (s = null === (n = e.data.search) || void 0 === n ? void 0 : n.typeaheadByType) || void 0 === s ? void 0 : s.subreddits) || void 0 === r || r.forEach(e => {
							e.isNsfw ? d.push(e.id) : c.push(e.id), u[e.id] = m(e, {
								displayInfo: {
									isQuarantined: e.isQuarantined,
									subredditOrProfileName: Object(Jo.d)(e.name),
									subscribers: e.subscribersCount
								},
								isSubreddit: !0
							})
						}), null === (i = null === (o = null === (a = e.data.search) || void 0 === a ? void 0 : a.typeaheadByType) || void 0 === o ? void 0 : o.profiles) || void 0 === i || i.forEach(e => {
							var t, n;
							e.isNsfw ? d.push(e.id) : l.push(e.id), u[e.id] = m(e, {
								displayInfo: {
									karma: "Redditor" === e.redditorInfo.__typename ? null === (n = null === (t = e.redditorInfo) || void 0 === t ? void 0 : t.karma) || void 0 === n ? void 0 : n.total : void 0,
									subredditOrProfileName: Object(Jo.c)(e.name)
								},
								isProfile: !0
							})
						}), {
							order: {
								communities: c,
								people: l,
								nsfw: d
							},
							typeaheads: u
						}
					})((await (async (e, t, n, s) => {
						const r = {
							productSurface: Zo.TelemetryAppName.web2x,
							query: t,
							searchInput: {
								queryId: n
							},
							filters: s ? [{
								key: "nsfw",
								value: "1"
							}] : void 0,
							limit: 5
						};
						return await Object(Vo.a)(e, {
							...Qo,
							variables: r
						}, {
							traceRequestName: "search_typeahead_by_type"
						})
					})(r(), e, i, c)).body, e);
					(null == n ? void 0 : n.typeaheads) && (null == n ? void 0 : n.order) && t(Object(Wo.p)({
						typeaheadByTypeSuggestions: n.typeaheads,
						orderByType: n.order,
						searchQuery: e
					}))
				} else {
					const n = ((e, t) => {
						var n, s;
						const r = [],
							a = {};
						return null === (s = null === (n = e.data.search) || void 0 === n ? void 0 : n.typeahead) || void 0 === s || s.forEach(e => {
							var n, s, o, i, c;
							const l = e;
							let d, u, m, p, b, h;
							r.push(l.id), "Subreddit" === l.__typename ? (u = !0, m = l.isQuarantined, b = Object(Jo.d)(l.name), h = l.subscribersCount) : "Profile" === l.__typename && (d = !0, p = "Redditor" === l.redditorInfo.__typename ? null === (s = null === (n = l.redditorInfo) || void 0 === n ? void 0 : n.karma) || void 0 === s ? void 0 : s.total : void 0, b = Object(Jo.c)(l.name));
							const g = {
								displayInfo: {
									iconUrl: (null === (o = l.styles) || void 0 === o ? void 0 : o.icon) || (null === (c = null === (i = l.styles) || void 0 === i ? void 0 : i.legacyIcon) || void 0 === c ? void 0 : c.url),
									isNSFW: l.isNsfw,
									isQuarantined: m,
									karma: p,
									publicDescription: l.publicDescriptionText || void 0,
									subredditOrProfileName: b,
									subscribers: h
								},
								id: l.id,
								isProfile: d,
								isSubreddit: u,
								isTypeaheadSuggestion: !0,
								searchQuery: t,
								section: Xo.c.typeahead,
								type: Xo.b.subredditOrProfile
							};
							a[l.id] = g
						}), {
							order: r,
							typeaheads: a
						}
					})((await (async (e, t, n, s) => {
						const r = {
							productSurface: Zo.TelemetryAppName.web2x,
							query: t,
							searchInput: {
								queryId: n,
								isNsfwIncluded: s
							}
						};
						return await Object(Vo.a)(e, {
							...zo,
							variables: r
						}, {
							traceRequestName: "search_typeahead"
						})
					})(r(), e, i, c)).body, e);
					(null == n ? void 0 : n.typeaheads) && (null == n ? void 0 : n.order) && t(Object(Wo.p)({
						typeaheadSuggestions: n.typeaheads,
						order: n.order,
						searchQuery: e
					}))
				}
			};
			var ti = n("./src/reddit/actions/search/trending.ts"),
				ni = n("./src/reddit/components/SearchDropdown/index.tsx"),
				si = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				ri = n("./src/reddit/constants/parameters.ts"),
				ai = n("./src/reddit/helpers/clickSourceData/index.ts"),
				oi = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				ii = n("./src/reddit/helpers/isArrayEqual.ts"),
				ci = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				li = n("./src/reddit/helpers/trackers/screenview.ts"),
				di = n("./src/reddit/helpers/trackers/searchResults.ts"),
				ui = n("./src/reddit/hooks/usePageLayer.ts"),
				mi = n("./src/reddit/selectors/searchFix.ts"),
				pi = n("./src/reddit/selectors/searchResults.ts"),
				bi = n("./src/reddit/selectors/trending.ts"),
				hi = n("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				gi = n("./src/reddit/helpers/search/searchConversationId.ts"),
				fi = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				vi = n("./src/reddit/selectors/experiments/i18n/hideTrending.ts"),
				Oi = n("./src/reddit/controls/Search/index.m.less"),
				Ci = n.n(Oi),
				yi = n("./src/reddit/controls/Search/SearchBar/index.tsx"),
				Ei = n("./src/reddit/controls/Search/SearchScopePill/index.tsx");
			const xi = /r\/([0-9a-zA-Z]*)\s/gi;

			function _i(e) {
				let {
					className: t
				} = e;
				var n, s, r;
				const a = Object(ui.a)(),
					o = Object(qn.cb)(a),
					i = Object(qn.Z)(a),
					l = Object(xe.f)().getState(),
					{
						nsfwSessionSetting: d
					} = Object(si.b)(),
					[b, h] = Object(u.useState)(-1),
					[g, f] = Object(u.useState)([]),
					[v, C] = Object(u.useState)(!1),
					[y, E] = Object(u.useState)({}),
					[x, _] = Object(u.useState)([]),
					[j, P] = Object(u.useState)(null),
					[S, N] = Object(u.useState)(),
					w = Object(u.useRef)(null),
					M = Object(u.useRef)(null),
					I = Object(u.useRef)(!1),
					T = Object(Ke.b)(),
					A = Object(xe.d)(),
					R = Object(xe.e)(In.b),
					L = Object(xe.e)(In.d),
					F = Object(xe.e)(O.m),
					D = Object(xe.e)(pi.r),
					B = Object(xe.e)(pi.q),
					G = Object(xe.e)(O.S),
					U = Object(xe.e)(O.fb),
					H = Object(xe.e)(In.r),
					q = Object(xe.e)(e => Object(qn.s)(e, {
						pageLayer: a
					})),
					W = Object(xe.e)(e => Object(qn.e)(e, {
						pageLayer: a
					})),
					V = Object(xe.e)(pi.j),
					z = Object(xe.e)(e => Object(Zr.C)(e, {
						subredditName: S ? S.title.replace("r/", "") : ""
					})),
					Q = Object(xe.e)(e => Object(bi.a)(e, Xo.d.dropdown).slice(0, ni.d)),
					Z = Object(xe.e)(e => Object($o.a)(e, Hn.Cf)),
					K = Object(xe.e)(pi.E),
					J = Object(xe.e)(pi.D);
				let X = [];
				Z && J && (X = [...J.communities, ...J.people, ...J.nsfw]);
				const Y = Object(xe.e)(O.mb),
					$ = Object(Ho.a)(q) || null,
					ee = Object(Ho.a)(W) || null,
					te = Object(Ho.a)(S),
					ne = Object(Ho.a)(o),
					se = Object(Ho.a)(K),
					re = Object(Ho.a)(J),
					ae = Object(Ho.a)(Q),
					oe = ((null === (n = M.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					ie = Ie(oe),
					ce = R ? Object(vn.v)(R) : a ? Object(vn.v)(a) : void 0,
					le = y[oe],
					de = Object(qo.e)({
						...Go()(i || {}, ri.z),
						q: oe
					});
				Object(u.useEffect)(() => {
					ue()
				}, [ae, Q, ...Z ? [J, re] : [se, K]]), Object(u.useEffect)(() => {
					$ !== q ? be({
						type: k.ec.Subreddit,
						enabled: !!q,
						payload: q
					}) : ee !== W ? be({
						enabled: !!W,
						type: k.ec.Multireddit,
						payload: W
					}) : S !== te && be({
						enabled: !!S,
						type: k.ec.SyntaxScoped,
						payload: S
					})
				}, [S, W, q, te, ee, $]), Object(u.useEffect)(() => {
					V.enabled && V.type === k.ec.SyntaxScoped && z && be({
						enabled: !0,
						type: k.ec.Subreddit,
						payload: z
					})
				}, [z, V]), Object(u.useEffect)(() => {
					(Z ? Do()(X) : Do()(K)) || o ? ye(o || "") : Ce()
				}, [ne, o]);
				const ue = () => {
						const e = Z ? we()(re, J) : Object(ii.a)(se, K),
							t = Object(ii.a)(ae, Q);
						if (!e || !t)
							if (Z) {
								const e = X.length ? [...X, ie] : [...x, ...Q];
								f(e)
							} else {
								const e = K.length ? [...K, ie] : [...x, ...Q];
								f(e)
							}
					},
					me = e => A(Object(Wo.q)({
						searchQuery: e
					})),
					pe = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && fi.a.clear(Yo.a.Typeahead), A(Object(Wo.l)())
					},
					be = e => A(Object(Wo.o)(e)),
					he = (e, t, n) => {
						e.preventDefault(), ((e, t, n) => {
							A(Object(p.b)(Object(c.c)({
								pathname: e,
								search: t,
								state: n
							})))
						})(t.url, t.qs, {
							...n,
							routeName: H,
							subredditName: L
						})
					},
					fe = async () => {
						Q.length || v || (C(!0), await (() => A(Object(ti.b)(Xo.d.dropdown)))(), C(!1))
					}, ve = e => {
						G && F && _(Object(Ln.Ub)({
							...e,
							section: Xo.c.recent
						}, F.id))
					}, Oe = (e, t) => {
						var n;
						if (!M.current || V.enabled) return !1;
						const s = t.split(" ").filter(t => t !== e).join(" ");
						return M.current.value = s, null === (n = M.current) || void 0 === n || n.dispatchEvent(new Event("input", {
							bubbles: !0
						})), N({
							title: e,
							key: `syntax-${e}`
						}), !0
					}, Ce = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						h(-1), P(null), ye(""), me(""), e && fi.a.update(Yo.a.Typeahead), Ne()
					};

				function ye(e) {
					M.current && (M.current.value = e)
				}
				const Ee = (e, t, n, s, r) => {
						const a = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: oe,
							telemetrySource: Yo.a.Typeahead
						};
						hi.a.set(vn.a.SearchDropdown), T(Object(di.z)(s, a, r))
					},
					_e = (e, t, n) => {
						hi.a.set(vn.a.SearchBar), T(Object(di.B)(e, t, n))
					},
					je = (e, t, n, s) => {
						hi.a.set(vn.a.SearchDropdown), T(Object(di.D)(e, t, n, s))
					},
					Pe = () => {
						T(e => Object(di.g)(e, de, q)), (() => A(Object(Wo.k)()))(), fi.a.update(Yo.a.Typeahead)
					},
					Se = e => {
						const t = g[e] || null,
							n = t ? t.searchQuery : "";
						h(e), ye(n), P(t)
					},
					Ne = () => {
						if (!Q.length) {
							Object(vi.a)(l) || fe()
						}
						if (F) {
							const e = Object(Ln.S)(F.id);
							e.length > 0 && (_(G ? e : []), f([...e, ...Q]))
						}
					},
					Me = e => {
						!(!B || !B[e]) || (e ? (e => {
							y[e] || (y[e] = !0, E({
								...y
							}), A(ei(e)), y[e] = !1, E({
								...y
							}))
						})(e) : Ne())
					};

				function Ie(e) {
					var t;
					let n;
					if (V.enabled)
						if (V.type === k.ec.Subreddit) {
							const e = V.payload;
							n = {
								iconUrl: null === (t = e.icon) || void 0 === t ? void 0 : t.url,
								isNSFW: e.isNSFW,
								isQuarantined: e.isQuarantined || !1,
								scopeName: e.url
							}
						} else if (V.type === k.ec.Multireddit) {
						const e = V.payload;
						n = {
							iconUrl: e.icon,
							isNSFW: e.isNSFW,
							isQuarantined: !1,
							scopeName: e.url
						}
					} else if (V.type === k.ec.SyntaxScoped) {
						const e = V.payload;
						n = {
							iconUrl: e.icon,
							isNSFW: !1,
							isQuarantined: !1,
							scopeName: e.title
						}
					} else n = {
						isNSFW: !1,
						isQuarantined: !1
					};
					else n = {
						isNSFW: !1,
						isQuarantined: !1
					};
					return {
						id: Object(Uo.a)(),
						searchQuery: e,
						type: Xo.b.text,
						section: Xo.c.submit,
						subredditOrProfileRestrictedName: n.scopeName,
						displayInfo: {
							iconUrl: n.iconUrl,
							isNSFW: n.isNSFW,
							isQuarantined: n.isQuarantined
						}
					}
				}
				const Te = 0 === x.length && 0 === Q.length && !(null === (s = ie.searchQuery) || void 0 === s ? void 0 : s.trim()) && !v && !le;
				return m.a.createElement("div", {
					className: Object(ke.a)(Ci.a.relativeWrapper, Hr.a.container, t, {
						"m-open": D
					}),
					id: ni.b,
					ref: w
				}, m.a.createElement(yi.c, {
					inputRef: M,
					isOpen: !Te && D,
					onChange: e => {
						const t = e.trim(),
							n = xi.exec(e);
						fi.a.update(Yo.a.Typeahead), n && Oe(n[0].trim(), t) || (me(t), Me(t))
					},
					searchQuery: oe,
					onFormSubmit: e => {
						e.preventDefault(), oe.trim() && (async e => {
							var t, n, s;
							const r = (null === (t = M.current) || void 0 === t ? void 0 : t.value) || "";
							if (!r.trim()) return;
							gi.a.set(r), r !== oe && me(r);
							let o, i = {
									...Xo.a
								},
								c = {},
								l = !0;
							if (j && j.searchQuery === oe ? ((i = j).id || (i.id = Object(Uo.a)()), i.section === Xo.c.recent ? (c = Object(ai.c)(ai.a.SEARCH_DROPDOWN, ce, i.isProfile || i.isSubreddit), o = qo.a.Recent, _e(r, i, b)) : i.section === Xo.c.typeahead ? (c = Object(ai.c)(ai.a.SEARCH_DROPDOWN, ce), l = !1, je(r, i, b, b)) : i.section === Xo.c.trending ? (c = Object(ai.c)(ai.a.SEARCH_DROPDOWN, ce), o = (null === (n = i.post) || void 0 === n ? void 0 : n.isSponsored) ? qo.a.PromotedTrend : qo.a.Trending, A((e, t) => Object(ci.o)({
									state: t(),
									trendingSearch: i,
									telemetrySource: Yo.a.Typeahead
								}))) : Ee(r, r, vn.c.Search, di.a.RECENT)) : (i = Ie(r), hi.a.set(vn.a.SearchBar), T(Object(di.o)(di.a.FULL_SEARCH_BUTTON, Object(qo.e)({
									q: oe
								}), Yo.a.Typeahead, a || void 0))), ve(i), pe(l), !i.searchQuery) return;
							const u = Object(oi.a)({
								searchItem: i,
								searchOptions: {
									source: o
								},
								activeSearchScope: V,
								includeNsfwResults: Y && d
							});
							he(e, u, c), i.isTypeaheadSuggestion && Ce(l), null === (s = M.current) || void 0 === s || s.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(ho.c)(ho.a.SearchResults) || Object(ho.d)(ho.a.SearchResults), gi.a.update(), I.current = !0, fi.a.update(Yo.a.Typeahead), hi.a.set(vn.a.SearchBar), T(Object(di.o)(di.a.SEARCH_BAR, de, Yo.a.Typeahead, a || void 0)), D || ((() => A(Object(Wo.m)()))(), T(Object(li.s)(de, null != a ? a : void 0, Object(mi.b)({
							pageLayer: a
						})))), Me(oe)
					},
					onKeyDown: e => {
						if (e.key === bo.b.Escape || e.key === bo.b.Tab) pe();
						else if (e.key === bo.b.ArrowDown) {
							if (e.preventDefault(), 0 === g.length || !D) return;
							if (b >= g.length - 1) return;
							Se(b + 1)
						} else if (e.key === bo.b.ArrowUp) {
							if (e.preventDefault(), 0 === g.length || !D) return;
							if (-1 === b) return;
							Se(b - 1)
						} else e.key === bo.b.Backspace && !oe && V.enabled && Pe()
					},
					onClearSearchQuery: Ce,
					onClickDismissSearchScopePill: Pe,
					showSearchScopePill: V.enabled,
					searchScopePill: Object(Ei.c)(V)
				}), m.a.createElement(ni.c, {
					containerWidth: null === (r = w.current) || void 0 === r ? void 0 : r.offsetWidth,
					focusedItemIndex: b,
					searchOriginPage: ce,
					isOpen: D,
					isTrendingPending: v,
					isTypeaheadPending: le,
					itemList: g,
					nightmode: U,
					recentSearches: x,
					trendingItems: Q,
					searchItem: ie,
					typeaheadSuggestions: K,
					typeaheadByTypeSuggestions: J,
					onClearSearchQuery: Ce,
					onClose: pe,
					onRemoveRecentSearch: e => {
						F && 0 !== x.length && (Object(Ln.cb)(e, F.id), _(x.filter(t => t.searchQuery !== e.searchQuery)), h(-1))
					},
					onSendSearchClickRecentEvent: _e,
					onSendSearchClickTypeaheadEvent: je,
					onSetRecentSearch: ve,
					onUpdateSearchQuery: ye,
					fireAdPixelsOfType: (e, t) => A(Object(ge.y)(e, t))
				}))
			}
			var ji = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Pi = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				Si = n("./src/lib/combineRefs/index.tsx"),
				ki = n("./src/lib/hooks/useTooltip.ts"),
				Ni = n("./src/reddit/actions/recap/index.ts"),
				wi = n("./src/reddit/components/PromptTooltip/TooltipHooked.m.less"),
				Mi = n.n(wi);

			function Ii() {
				return (Ii = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Ti = m.a.memo((function(e) {
					let {
						visible: t,
						...n
					} = e;
					const [s, r] = Object(u.useState)(t);
					return Object(u.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, r(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), r(!1)
						}
					}, [t]), t ? n.styled ? m.a.createElement("div", Ii({
						className: Object(ke.a)(Mi.a.tooltip, {
							[Mi.a.visible]: s || n.isInstant
						})
					}, n.popperProps, {
						onMouseEnter: () => n.isCloseOnHover && n.hide()
					}), n.children, s && !n.noArrow && m.a.createElement("div", Ii({
						className: Mi.a.arrow
					}, n.arrowProps))) : m.a.createElement("div", n.popperProps, n.children) : null
				})),
				Ai = n("./src/reddit/helpers/trackers/recap.ts"),
				Ri = n("./src/reddit/routes/recap/index.ts"),
				Li = n("./src/reddit/selectors/experiments/recap.ts"),
				Fi = n("./src/reddit/pages/Recap/Components/NavbarIcon/index.m.less"),
				Di = n.n(Fi);
			var Bi = () => {
					const e = Object(Er.a)(),
						t = Object(xe.d)(),
						n = Object(yr.a)(),
						r = Object(xe.e)(Li.a),
						a = Object(xe.e)(Li.b),
						o = Object(xe.e)(Li.c),
						i = Object(xe.e)(O.m),
						c = Object(xe.e)(e => e.recap.bannerSeen),
						l = Object(ki.b)(),
						d = r && !c;
					Object(u.useEffect)(() => {
						!i || o || a || setTimeout(() => {
							t(Object(Ni.d)(Object(Ln.R)(null == i ? void 0 : i.id))), Object(Ln.Tb)(null == i ? void 0 : i.id)
						}, 1e3)
					}, [i, t, o, a]), Object(u.useEffect)(() => {
						!d || o || a ? l.hide() : l.show()
					}, [l, d, o, a]);
					const p = {
						...l.arrowProps,
						style: {
							...l.arrowProps.style,
							borderBottom: "5px solid #ff4500"
						}
					};
					return r && !a ? m.a.createElement(m.a.Fragment, null, m.a.createElement(lr.a, {
						className: Di.a.icon,
						innerRef: Object(Si.a)(n.target.ref, l.target.ref),
						to: Ri.a,
						onMouseEnter: () => {
							!l.visible && n.show()
						},
						onMouseLeave: n.hide,
						onClick: () => e(Object(Ai.l)())
					}, m.a.createElement(Gr, {
						className: Di.a.psBattlesIcon
					})), !o && m.a.createElement(m.a.Fragment, null, m.a.createElement(Or.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, s.fbt._("Reddit Recap", null, {
						hk: "4utP6e"
					})), m.a.createElement(Ti, {
						arrowProps: p,
						popperProps: l.popperProps,
						visible: l.visible,
						hide: l.hide,
						isInstant: !0,
						styled: !0
					}, m.a.createElement("div", {
						className: Di.a.tooltip,
						onMouseLeave: () => t(Object(Ni.d)(!0))
					}, s.fbt._("Read your Reddit Recap", null, {
						hk: "2CFR0A"
					}))))) : null
				},
				Gi = n("./src/reddit/selectors/experiments/shredditModNav.ts"),
				Ui = n("./src/reddit/selectors/responsivePage.ts"),
				Hi = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				qi = n.n(Hi);
			var Wi, Vi = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(ke.a)(qi.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": s.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: qi.a.HomeLink,
						href: i.a.redditUrl
					}, m.a.createElement(ji.a, {
						className: qi.a.Snoo
					}), m.a.createElement(Pi.a, {
						className: qi.a.Wordmark,
						color: "inherit"
					})))
				},
				zi = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				Qi = n("./src/reddit/components/Header/NavBarIcon/index.m.less"),
				Zi = n.n(Qi);
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(Wi || (Wi = {}));
			var Ki = e => {
					const {
						eventNoun: t,
						imageSource: n,
						navLink: s,
						tooltip: r
					} = e, a = Object(Er.a)(), o = Object(yr.a)(), [i, c] = Object(u.useState)(Wi.Hidden), l = Object(u.useCallback)(() => {
						Object(Ln.Ob)({
							clicked: !0
						}), a(e => ({
							...Object(vn.o)(e),
							source: "nav",
							action: "click",
							noun: t
						}))
					}, [a, t]);
					return Object(u.useEffect)(() => {
						const e = Object(Ln.M)();
						e ? 3 !== e.views || e.clicked ? !e.clicked && e.views ? (Object(Ln.Ob)({
							views: e.views + 1
						}), c(Wi.Visible)) : e.clicked && c(Wi.Visible) : c(Wi.Hidden) : (Object(Ln.Ob)({
							views: 1
						}), c(Wi.Visible))
					}, []), i === Wi.Hidden ? null : m.a.createElement(m.a.Fragment, null, m.a.createElement(lr.a, {
						className: `${jr.a.icon} ${Zi.a.linkIcon}`,
						innerRef: o.target.ref,
						to: s,
						onClick: l,
						onMouseEnter: o.show,
						onMouseLeave: o.hide
					}, m.a.createElement("img", {
						className: Zi.a.navIcon,
						src: n
					})), m.a.createElement(Or.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, r))
				},
				Ji = n("./src/lib/constants/colors.ts"),
				Xi = n("./src/reddit/actions/happeningNow/index.ts"),
				Yi = n("./src/reddit/constants/listings.ts"),
				$i = n("./src/reddit/selectors/features/happeningNow/index.ts");
			var ec = () => {
				const e = Object(xe.d)(),
					t = Object(Er.a)(),
					n = Object(xe.e)($i.f),
					r = Object(xe.e)(e => e.recap.bannerSeen && Object($i.g)(e)),
					a = Object(u.useCallback)(() => e(Object(Xi.d)(!1)), [e]),
					o = Object(yr.a)(),
					i = Object(u.useMemo)(() => r ? ((e, t) => {
						let {
							onClick: n
						} = t;
						return {
							...e,
							arrowProps: {
								...e.arrowProps,
								style: {
									...e.arrowProps.style,
									borderBottom: `3px solid ${Ji.a.alien600}`
								}
							},
							popperProps: {
								...e.popperProps,
								style: {
									...e.popperProps.style,
									background: Ji.a.alien600,
									padding: "8px",
									cursor: "pointer"
								},
								onClick: n
							},
							visible: !0
						}
					})(o, {
						onClick: a
					}) : o, [o, r, a]),
					c = Object(u.useCallback)(() => {
						t(Object(fo.b)(fo.a.TopNav)), a()
					}, [t, a]);
				return Object(u.useEffect)(() => {
					e(Object(Xi.a)())
				}, [e]), Object(u.useEffect)(() => {
					r && e(Object(Xi.e)())
				}, [e, r]), m.a.createElement(m.a.Fragment, null, m.a.createElement(lr.a, {
					className: Object(ke.a)(jr.a.icon, jr.a.happeningNowLink),
					innerRef: i.target.ref,
					to: Yi.c[Yi.b.HappeningNow],
					onClick: c,
					onMouseEnter: i.show,
					onMouseLeave: i.hide
				}, m.a.createElement(Dr, {
					className: jr.a.customIcon
				}), n && m.a.createElement("div", {
					className: jr.a.liveContentAvailabilityBadge
				})), m.a.createElement(Or.a, {
					arrowProps: i.arrowProps,
					popperProps: i.popperProps,
					visible: i.visible
				}, r ? s.fbt._("Find live chats and audio talks happening now", null, {
					hk: "nphMZ"
				}) : s.fbt._("Happening Now", null, {
					hk: "qEee0"
				})))
			};
			var tc = e => m.a.createElement("svg", {
					className: e.className,
					id: "flat",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20",
					fill: "#ff4500"
				}, m.a.createElement("path", {
					fill: "inherit",
					d: "M19.625.375H5.7812V1.8062H2.6089V3.75H.5127V19.625H14.0356V17.6816h2.0962V14.7988H19.625ZM14.8818,16.4316H12.7856V18.375H1.7627V5H3.8589V3.0562H5.7812V14.7988h9.1006Zm3.4932-2.8828H7.0312V1.625H18.375Z"
				}), m.a.createElement("path", {
					fill: "inherit",
					d: "M9.83,8.6869h.8086a2.5968,2.5968,0,0,0,1.2324-.2827,2.0363,2.0363,0,0,0,.8281-.7906,2.2972,2.2972,0,0,0,.2935-1.1709,2.1873,2.1873,0,0,0-.2872-1.1347,1.8957,1.8957,0,0,0-.8281-.749,2.9046,2.9046,0,0,0-1.2788-.2627H8.3815V10.807H9.83Zm0-3.1006h.68a1.1725,1.1725,0,0,1,.78.2427.8044.8044,0,0,1,.2852.6582.9157.9157,0,0,1-.124.4746.86.86,0,0,1-.3531.3291,1.1443,1.1443,0,0,1-.5346.12H9.83Z"
				}), m.a.createElement("path", {
					fill: "inherit",
					d: "M15.5881,9.7269a.6642.6642,0,0,1-.2827.0552.8486.8486,0,0,1-.5079-.1655,1.1369,1.1369,0,0,1-.3491-.3911l-1.122.4682a1.785,1.785,0,0,0,.4487.6143,2.18,2.18,0,0,0,.6909.4194,2.2847,2.2847,0,0,0,.8218.15,2.1,2.1,0,0,0,.8945-.19,1.5993,1.5993,0,0,0,.6494-.5323,1.325,1.325,0,0,0,.2407-.78,1.1177,1.1177,0,0,0-.2407-.7422,1.5127,1.5127,0,0,0-.519-.4151,3.6685,3.6685,0,0,0-.5923-.2119c-.2207-.0591-.3936-.11-.5186-.1548a1.0759,1.0759,0,0,1-.3159-.1679.3052.3052,0,0,1-.1284-.2471.3264.3264,0,0,1,.1392-.2671.547.547,0,0,1,.3466-.1084.6423.6423,0,0,1,.4156.1348,1.09,1.09,0,0,1,.2558.28l1.0694-.45a1.4624,1.4624,0,0,0-.3843-.53,1.9609,1.9609,0,0,0-.6294-.3755,2.1994,2.1994,0,0,0-.78-.1367,2.0044,2.0044,0,0,0-.8682.1831,1.4665,1.4665,0,0,0-.6069.5146,1.3217,1.3217,0,0,0-.2212.751,1.1947,1.1947,0,0,0,.3491.8857,2.0947,2.0947,0,0,0,.9322.51c.0146.0029.0556.0151.1235.0356a3.8108,3.8108,0,0,1,.669.2208q.2584.1192.2587.3178a.318.318,0,0,1-.06.1812A.4179.4179,0,0,1,15.5881,9.7269Z"
				})),
				nc = n("./src/reddit/selectors/avatarMarketing.ts"),
				sc = n("./src/lib/initializeClient/installReducer.ts"),
				rc = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(sc.a)({
				features: {
					avatar: rc.a
				}
			});
			const ac = e => 864e5 * e,
				oc = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				ic = e => {
					if (cc(e)) return !0;
					const t = oc(e),
						n = (new Date).getTime(),
						s = Object(Ln.C)();
					if (!(null == t ? void 0 : t.active) || !lc(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
					if (s && t) {
						const e = n > s.lastInteractionTimestamp + ac(null == t ? void 0 : t.min_days_since_last_event_interaction);
						return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
					}
					return !1
				},
				cc = e => {
					const t = Object(In.q)(e);
					return Boolean((null == t ? void 0 : t[ri.B]) && Object(F.a)(t[ri.B]))
				},
				lc = (e, t, n) => {
					var s;
					const r = !!(null === (s = Object(O.m)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return dc(e, t) && n === r
				},
				dc = (e, t) => {
					const n = Object(O.m)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > ac(t)
				};
			var uc = n("./src/reddit/helpers/chooseVariant/index.ts");
			const mc = e => {
					return Object(uc.c)(e, {
						experimentEligibilitySelector: uc.a,
						experimentName: Hn.Db
					}) === Hn.Td
				},
				pc = e => {
					return Object(uc.c)(e, {
						experimentEligibilitySelector: uc.a,
						experimentName: Hn.lf
					}) === Hn.Td
				};
			var bc = m.a.memo((function(e) {
				const t = Object(Er.a)(),
					n = Object(u.useCallback)(() => {
						t(e => ({
							...Object(vn.o)(e),
							source: "nav",
							action: "click",
							noun: "popular"
						}))
					}, [t]),
					r = Object(xe.e)(O.S),
					a = Object(xe.e)(mc),
					o = Object(xe.e)(pc),
					i = Object(xe.e)(ic),
					c = Object(xe.e)(la.c),
					l = Object(xe.e)(da.a),
					d = Object(xe.e)(nc.a),
					p = Object(yr.a)(),
					b = Object(yr.a)(),
					h = Object(yr.a)(),
					g = !(i || c && !!d) || e.isAvatarButtonClicked;
				return m.a.createElement("div", {
					className: Object(ke.a)(jr.a.container, e.className, {
						[jr.a.containerWithoutCoin]: !g
					})
				}, m.a.createElement("div", {
					className: jr.a.row
				}, m.a.createElement(lr.a, {
					className: jr.a.icon,
					innerRef: p.target.ref,
					to: r ? Yi.c[Yi.b.Popular] : Yi.c[Yi.b.Home],
					onClick: n,
					onMouseEnter: p.show,
					onMouseLeave: p.hide
				}, m.a.createElement(Nr.a, {
					name: "popular"
				})), m.a.createElement(Or.a, {
					arrowProps: p.arrowProps,
					popperProps: p.popperProps,
					visible: p.visible
				}, s.fbt._("Popular", null, {
					hk: "1Kx4va"
				})), g && m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					ref: h.target.ref,
					onMouseEnter: h.show,
					onMouseLeave: h.hide,
					className: jr.a.icon
				}, m.a.createElement(zi.a, null)), m.a.createElement(Or.a, {
					arrowProps: h.arrowProps,
					popperProps: h.popperProps,
					visible: h.visible
				}, s.fbt._("Coin", null, {
					hk: "zOcNq"
				}))), l && m.a.createElement(ec, null), o && m.a.createElement(m.a.Fragment, null, m.a.createElement(lr.a, {
					className: jr.a.icon,
					innerRef: b.target.ref,
					to: "/r/psbattleslive",
					onClick: () => {},
					onMouseEnter: b.show,
					onMouseLeave: b.hide
				}, m.a.createElement(tc, {
					className: jr.a.psBattlesIcon
				})), m.a.createElement(Or.a, {
					arrowProps: b.arrowProps,
					popperProps: b.popperProps,
					visible: b.visible
				}, s.fbt._("PsBattles Live in partnership with Adobe", null, {
					hk: "3mGYdM"
				}))), m.a.createElement(Bi, null), m.a.createElement(Pr, null), a && m.a.createElement(Ki, {
					eventNoun: "love_island",
					imageSource: "https://styles.redditmedia.com/t5_3lwmq/styles/communityIcon_7atioswvjm671.png?width=256&s=6096b8adbfa2d4911d9bc92afff25fd764987498",
					navLink: "/r/LoveIslandTV/",
					tooltip: s.fbt._("Visit r/LoveIslandTV for the latest!", null, {
						hk: "22mySr"
					})
				})))
			}));
			const hc = Object(T.a)(() => n.e("QrCodeActions").then(n.bind(null, "./src/reddit/actions/qrCode/index.ts")).then(e => e.default));
			var gc = n("./src/reddit/actions/tooltip.ts"),
				fc = n("./src/lib/hooks/useOnClickOutside.ts"),
				vc = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				Oc = n.n(vc);

			function Cc() {
				return (Cc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const yc = Qe.a.button("Button", Oc.a),
				Ec = Qe.a.div("Container", Oc.a);

			function xc(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(yc, Cc({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(Ec, {
					className: Object(ke.a)({
						[Oc.a.isOpen]: n
					})
				}, t))
			}
			var _c = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				jc = n.n(_c);
			var Pc = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(ta.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount,
					showEmpty: !e.unreadCount
				}), m.a.createElement(Nr.a, {
					name: "notification",
					className: jc.a.icon2020
				})),
				Sc = n("./src/reddit/components/InboxBanner/index.m.less"),
				kc = n.n(Sc);
			var Nc = Object(Qt.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(M.b)(navigator.userAgent);
					return m.a.createElement(Kt.e, null, m.a.createElement(Kt.i, {
						className: kc.a.modalHeader
					}, m.a.createElement(Kt.q, {
						className: kc.a.modalTitle
					}, s.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(un.t, {
						onClick: t,
						Icon: Object(Nr.b)("close_fill"),
						size: un.d.XXS,
						priority: un.c.Plain,
						className: kc.a.modalCloseIcon
					})), m.a.createElement(Kt.l, null, m.a.createElement("ul", {
						className: kc.a.modalList
					}, m.a.createElement("li", {
						className: kc.a.modalListItem
					}, m.a.createElement("span", null, "1"), s.fbt._("Click on {lockIcon} in your browser address bar", [s.fbt._param("lockIcon", m.a.createElement(Nr.a, {
						name: "lock_fill",
						className: kc.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: kc.a.modalListItem
					}, m.a.createElement("span", null, "2"), s.fbt._("Select {lockIcon} site settings", [s.fbt._param("lockIcon", m.a.createElement(Nr.a, {
						name: "settings_fill",
						className: kc.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: kc.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), s.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [s.fbt._param("lockIcon", m.a.createElement(Nr.a, {
						name: "notification_fill",
						className: kc.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(Kt.g, null, m.a.createElement(un.t, {
						text: s.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				wc = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				Mc = n.n(wc);

			function Ic() {
				return (Ic = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Tc = m.a.memo((function(e) {
					let {
						visible: t,
						...n
					} = e;
					const [s, r] = Object(u.useState)(t);
					return Object(u.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, r(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), r(!1)
						}
					}, [t]), t ? m.a.createElement("div", Ic({
						id: "INBOX--TOOLTIP",
						className: Object(ke.a)(Mc.a.tooltip, {
							[Mc.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				Ac = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				Rc = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts");
			const Lc = Object(Ko.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var Fc = n("./src/reddit/selectors/activeModal.ts"),
				Dc = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				Bc = n.n(Dc);
			const Gc = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				Uc = m.a.memo((function(e) {
					const t = Object(xe.d)(),
						n = Object(yr.a)(),
						r = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(ki.a)(e);
								return Object(Ko.updateIn)(t, ["modifiers"], e => Object(Ko.push)(e, Lc))
							}, [e]);
							return Object(ki.b)(t)
						}(),
						a = Object(ki.b)(Gc),
						[o, i] = Object(Rc.a)(e.userId),
						c = Object(xe.e)(Object(Fc.c)("browser_notifications_permission_settings")),
						l = Object(u.useCallback)(() => {
							r.hide(), n.hide(), o || i()
						}, [r, n, i, o]);
					Object(fc.a)("INBOX--TOOLTIP", l);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(Si.a)(n.target.ref, r.target.ref, a.target.ref)
					}, m.a.createElement(xc, {
						"aria-expanded": r.visible,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Bc.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), r.visible ? l() : r.show(), e.sendNavClickInbox()
						},
						isOpen: r.visible
					}, m.a.createElement(Pc, {
						unreadCount: e.unreadCount
					})), !r.visible && !a.visible && m.a.createElement(Or.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, s.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(Tc, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, m.a.createElement(Ac.a, {
						isOpen: r.visible,
						hideTooltip: l,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), c && m.a.createElement(Nc, {
						onClose: () => {
							t(Object(Dt.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var Hc = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				qc = n("./src/reddit/actions/snoovatarModal.ts"),
				Wc = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Vc = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				zc = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				Qc = n.n(zc);
			const {
				fbt: Zc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Kc(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(Ln.C)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(Ln.lb)(s)
				}
			}
			var Jc = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(xe.e)(oc),
						s = Object(xe.d)(),
						r = Object(Er.a)();
					Object(u.useEffect)(() => {
						r(Object(Wc.q)())
					}, [r]), Object(u.useEffect)(() => {
						n || s(Object(Hc.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						Kc(n)
					}, [n]);
					return m.a.createElement(un.k, {
						onClick: () => {
							r(Object(Wc.d)()), Kc(n, "click"), s(Object(qc.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: Qc.a.ctaContainer
					}, m.a.createElement("img", {
						className: Qc.a.quickCreateGiftAnimation,
						src: `${i.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: Zc._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Vc.a, {
						className: Object(ke.a)(Qc.a.sparkle, Qc.a.sparkle1)
					}), m.a.createElement(Vc.a, {
						className: Object(ke.a)(Qc.a.sparkle, Qc.a.sparkle2)
					}), m.a.createElement(Vc.a, {
						className: Object(ke.a)(Qc.a.sparkle, Qc.a.sparkle3)
					})), Zc._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				Xc = n("./src/reddit/components/Header/AvatarStorefrontCta/index.m.less"),
				Yc = n.n(Xc);
			const {
				fbt: $c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var el = e => {
					let {
						handleButtonClick: t
					} = e;
					const n = Object(xe.d)(),
						s = Object(Er.a)(),
						r = Object(xe.e)(nc.b);
					Object(u.useEffect)(() => {
						r || n(Object(Hc.a)())
					}, [r, n]);
					return m.a.createElement(un.a, {
						onClick: () => {
							n(Object(qc.b)({
								clickSource: "nav"
							})), s(Wc.c), t && t()
						},
						className: Object(ke.a)(Yc.a.ctaContainer)
					}, m.a.createElement(Vc.a, {
						className: Object(ke.a)(Yc.a.sparkle, Yc.a.sparkle1)
					}), m.a.createElement(Vc.a, {
						className: Object(ke.a)(Yc.a.sparkle, Yc.a.sparkle2)
					}), m.a.createElement(Vc.a, {
						className: Object(ke.a)(Yc.a.sparkle, Yc.a.sparkle3)
					}), $c._("Shop Avatars", null, {
						hk: "280YIG"
					}))
				},
				tl = n("./src/reddit/selectors/chat.ts"),
				nl = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				sl = n("./src/reddit/actions/changeUsername.ts"),
				rl = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				al = n("./src/reddit/actions/postCreation/general.ts"),
				ol = n("./src/reddit/actions/preferences.ts"),
				il = n("./src/reddit/components/BlockNavigation/index.tsx"),
				cl = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				ll = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var dl = Object(Bt.a)({
					getComponent: () => Object(de.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				ul = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ml = n("./src/reddit/components/Settings/modalIds.ts"),
				pl = n("./src/reddit/helpers/trackers/emailCollection.ts"),
				bl = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				hl = n("./src/reddit/icons/svgs/Close/index.tsx"),
				gl = n("./src/reddit/selectors/emailCollection.ts"),
				fl = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				vl = n.n(fl);
			var Ol = Object(ul.a)(e => {
					let {
						closeTooltip: t,
						email: n,
						resendEmail: r,
						toggleChangeEmailModal: a
					} = e;
					const o = Object(Ke.b)(),
						i = Object(xe.d)(),
						c = Object(xe.e)(gl.a);
					Object(u.useEffect)(() => {
						o(c ? Object(pl.f)(bl.a) : Object(bl.g)(bl.a))
					}, [o, c]);
					const {
						description: l,
						title: d
					} = (() => ({
						description: s.fbt._("Check your inbox email for Reddit’s confirmation email. A current email address helps ensure you don’t lose access to your account.", null, {
							hk: "2Rbv7G"
						}),
						title: s.fbt._("Confirm your email:", null, {
							hk: "3e6xW7"
						})
					}))();
					return m.a.createElement("div", {
						className: vl.a.container
					}, m.a.createElement("div", {
						className: vl.a.topLine
					}), m.a.createElement("button", {
						className: vl.a.closeWrapper,
						onClick: () => {
							o(c ? Object(pl.e)(bl.a) : Object(bl.c)(bl.a)), t()
						}
					}, m.a.createElement(hl.a, {
						className: vl.a.closeIcon
					})), m.a.createElement("h5", {
						className: vl.a.title
					}, d), m.a.createElement("p", {
						className: vl.a.subtitle
					}, n), m.a.createElement("p", {
						className: vl.a.description
					}, l), m.a.createElement("div", {
						className: vl.a.buttonWrapper
					}, c ? m.a.createElement(un.t, {
						onClick: () => {
							i(Object(Dt.h)(ml.h)), o(Object(pl.a)(bl.a))
						},
						priority: un.c.Secondary,
						isFullWidth: !0
					}, s.fbt._("Add email", null, {
						hk: "3DXT0n"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement(un.t, {
						priority: un.c.Secondary,
						onClick: e => {
							e.stopPropagation(), o(Object(bl.e)(bl.a, "update")), a()
						},
						isFullWidth: !0
					}, s.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(un.t, {
						isFullWidth: !0,
						onClick: () => {
							o(Object(bl.e)(bl.a, "confirm")), r(), t()
						}
					}, s.fbt._("Got it", null, {
						hk: "3IP9TO"
					})))))
				}, [Ha.a.Click, Ha.a.Keydown, Ha.a.Resize]),
				Cl = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				yl = n.n(Cl);
			const El = e => {
				let {
					exposeIFrameElement: t
				} = e;
				return m.a.createElement(Ze.a, {
					className: yl.a.loggedInGoogleOneTap,
					exposeIFrameElement: t,
					path: Je.c.GoogleOneTap
				})
			};
			var xl = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				_l = n.n(xl);
			const {
				fbt: jl
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Pl = e => {
					const {
						onCloseFlyout: t
					} = e;
					return m.a.createElement("div", {
						className: _l.a.container
					}, m.a.createElement("p", {
						className: _l.a.title
					}, jl._("New User Settings", null, {
						hk: "1Sziu9"
					})), m.a.createElement("h5", {
						className: _l.a.subtitle
					}, jl._("Like customizing Reddit?", null, {
						hk: "38eFal"
					})), m.a.createElement("p", {
						className: _l.a.description
					}, jl._("You can save how you sort and view your communities in user settings.", null, {
						hk: "XMkGT"
					})), m.a.createElement(un.o, {
						className: _l.a.dismissBtn,
						onClick: t
					}, jl._("Got it", null, {
						hk: "3IP9TO"
					})))
				},
				Sl = n("./node_modules/lodash/noop.js"),
				kl = n.n(Sl),
				Nl = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				wl = n("./src/lib/prettyPrintNumber/index.ts"),
				Ml = n("./src/realtime/GQLSubscription/async.tsx"),
				Il = n("./src/reddit/actions/alpha.ts"),
				Tl = n("./src/reddit/actions/economics/marketplace/index.ts"),
				Al = n("./src/reddit/actions/modMode.ts"),
				Rl = n("./src/reddit/actions/profile/index.ts"),
				Ll = n("./src/reddit/constants/elementClassNames.ts"),
				Fl = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				Dl = n("./src/reddit/helpers/karma.ts"),
				Bl = n("./src/reddit/hooks/useWindowEvent.ts"),
				Gl = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Ul = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Hl = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				ql = n("./src/reddit/selectors/avatarPushcard.ts");
			const Wl = e => Object(uc.c)(e, {
				experimentName: Hn.dg,
				experimentEligibilitySelector: uc.a
			}) === Hn.Td;
			var Vl = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				zl = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Ql = n("./src/reddit/selectors/modModeEnabled.ts"),
				Zl = n("./src/reddit/selectors/seo/index.ts"),
				Kl = n("./src/reddit/selectors/tooltip.ts");
			const Jl = () => {
				var e, t;
				const n = Object(xe.d)(),
					s = Object(xe.e)(nc.b),
					r = null !== (e = Object(xe.e)(ql.b)) && void 0 !== e ? e : null,
					a = null !== (t = Object(xe.e)(ql.c)) && void 0 !== t ? t : null,
					o = Object(xe.e)(e => e);
				return Object(u.useEffect)(() => {
					s || n(Object(Hc.a)()), r && Object(U.a)(Object(Nl.h)(o)), a && Object(U.a)(Object(Nl.i)(o))
				}, [n, s, r, a]), {
					avatarPushcardBanner: r,
					avatarPushcard: a
				}
			};
			var Xl = n("./src/reddit/components/HeaderUserDropdown/AvatarPushcardBanner/Banner/index.m.less"),
				Yl = n.n(Xl);
			var $l = e => {
				let {
					className: t,
					iconUrl: n,
					title: s,
					body: r
				} = e;
				return m.a.createElement("span", {
					className: Object(ke.a)(Yl.a.banner, t),
					role: "status",
					"aria-live": "polite"
				}, n && m.a.createElement("img", {
					className: Yl.a.icon,
					src: n,
					alt: "",
					role: "presentation"
				}), m.a.createElement("span", {
					className: Yl.a.content
				}, m.a.createElement("span", {
					className: Yl.a.title
				}, s), r && m.a.createElement("span", {
					className: Yl.a.body
				}, r)), m.a.createElement(Nr.a, {
					name: "caret_down"
				}))
			};
			var ed = () => {
					const {
						avatarPushcardBanner: e
					} = Jl();
					return e && m.a.createElement($l, e)
				},
				td = n("./src/higherOrderComponents/asTooltip.tsx"),
				nd = n("./src/lib/constants/icons.ts"),
				sd = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				rd = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				ad = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				od = n.n(ad);
			const id = (e, t) => e && m.a.createElement("div", {
				className: od.a.marketingBadge
			}, m.a.createElement(sd.a, {
				className: od.a.marketingAsset,
				headshot: e
			}), s.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Vc.a, {
				className: Object(ke.a)(od.a.sparkle, od.a.sparkle1)
			}), m.a.createElement(Vc.a, {
				className: Object(ke.a)(od.a.sparkle, od.a.sparkle2)
			}), m.a.createElement(Vc.a, {
				className: Object(ke.a)(od.a.sparkle, od.a.sparkle3)
			}), m.a.createElement(Vc.a, {
				className: Object(ke.a)(od.a.sparkle, od.a.sparkle4)
			})));
			var cd = e => {
					let {
						useNewButtonComponent: t,
						onClick: n
					} = e;
					var r;
					const a = Object(xe.d)(),
						o = Object(Er.a)(),
						i = Object(qn.ib)(),
						c = Object(xe.e)(e => e.user.account),
						l = Object(xe.e)(Mr.d),
						d = Object(xe.e)(nc.b),
						u = Object(xe.e)(nc.a),
						p = () => a(Object(qc.b)({
							clickSource: "nav"
						})),
						b = Object(xe.e)(oe.k).startsWith("en");
					if ((null === (r = null == i ? void 0 : i.meta) || void 0 === r ? void 0 : r.name) === k.Tb.AVATAR) return null;
					d || a(Object(Hc.a)()), u && o(Wc.o);
					const h = c && c.snoovatarFullBodyAsset ? s.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}) : s.fbt._("Create Avatar", null, {
							hk: "3kfCbX"
						}),
						g = () => {
							p(), u && o(Wc.c), null == n || n()
						};
					if (t) {
						const e = m.a.createElement(m.a.Fragment, null, h, b && id(u, l));
						return m.a.createElement(so, {
							onClick: g,
							title: e,
							titleClassName: od.a.avatarLinkBody
						})
					}
					const f = Object(rd.c)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? du("avatar_style") : du("add"), ((e, t, n, s) => r => m.a.createElement("div", {
						className: `${od.a.avatarLinkBody} ${r.className}`
					}, e, s && id(t, n)))(h, u, l, b));
					return m.a.createElement(f, {
						onClick: p
					})
				},
				ld = n("./src/reddit/helpers/trackers/user.ts"),
				dd = n("./src/reddit/components/HeaderUserDropdown/UserMenu/Components/RecapLink/index.m.less"),
				ud = n.n(dd);
			const {
				fbt: md
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var pd = () => {
				const e = Object(Er.a)(),
					t = Object(xe.e)(Li.a),
					n = Object(xe.e)(Li.d),
					s = Object(rd.c)(qr, (() => e => m.a.createElement("div", {
						className: `${ud.a.recapLinkBody} ${e.className}`
					}, md._("{=Reddit Recap}", [md._param("=Reddit Recap", m.a.createElement("p", null, md._("Reddit Recap", null, {
						hk: "4cvJVt"
					})))], {
						hk: "1Duk9x"
					}), m.a.createElement("div", {
						className: ud.a.marketingBadge
					}, md._("New", null, {
						hk: "2o3NMk"
					}))))());
				return t && !n ? m.a.createElement(s, {
					href: Ri.a,
					onClick: () => e(Object(ld.f)())
				}) : null
			};
			var bd = e => {
					const {
						title: t,
						children: n,
						icon: s
					} = e;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
						className: Object(ke.a)(Ka.a.heading, Xa.a.category)
					}, m.a.createElement("span", {
						className: Ka.a.headingContent
					}, m.a.createElement("span", {
						className: Ka.a.iconContainer
					}, s), m.a.createElement("span", {
						className: Ka.a.title
					}, t))), m.a.createElement("div", {
						className: Ka.a.contentContainer
					}, n))
				},
				hd = n("./src/reddit/helpers/trackers/modTools.ts");
			const gd = () => {
					const e = Object(xe.d)(),
						t = Object(Er.a)(),
						n = Object(xe.e)(O.fb);
					return m.a.createElement(oo, {
						isEnabled: n,
						onClick: () => {
							t(Object(ld.g)(n)), (t => e(Object(ol.y)(t)))(!n)
						},
						title: s.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				fd = () => {
					const e = Object(xe.d)(),
						t = Object(Er.a)(),
						n = Object(xe.e)(e => e.user.account),
						r = Object(xe.e)(Ql.a);
					return n && n.isMod ? m.a.createElement(oo, {
						isEnabled: r,
						onClick: () => {
							t(Object(hd.m)(!r)), (() => e(Object(Al.b)()))()
						},
						title: s.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				};
			var vd = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				Od = n.n(vd);
			const Cd = () => {
					const e = Object(xe.d)(),
						t = Object(Ke.b)(),
						n = Object(xe.e)(O.m),
						r = Object(xe.e)(O.X);
					return n ? m.a.createElement(bd, {
						icon: m.a.createElement(Nr.a, {
							name: "profile"
						}),
						title: s.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(oo, {
						title: s.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: r,
						onClick: () => {
							t(Object(ld.h)(!r)), (t => e(Object(ol.G)({
								showPresence: t
							})))(!r)
						}
					}), m.a.createElement(pd, null), m.a.createElement(ro, {
						title: s.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(co.c)("profile"))
					}), m.a.createElement(cd, {
						onClick: () => e(Object(gc.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(ro, {
						title: s.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(co.c)("settings"))
					})) : null
				},
				yd = () => {
					return Object(xe.e)(O.m) ? m.a.createElement(bd, {
						title: s.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(Nr.a, {
							name: "views"
						})
					}, m.a.createElement(fd, null), m.a.createElement(gd, null)) : null
				},
				Ed = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(xe.e)(O.m) ? null : m.a.createElement($a, {
						icon: m.a.createElement(Nr.a, {
							name: "settings"
						}),
						title: s.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(gd, null))
				},
				xd = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: r,
						useClassicUserMenuStyles: a = !1
					} = e;
					return m.a.createElement($a, {
						buttonClassName: a ? Od.a.button : "",
						headingClassName: a ? Od.a.headingContent : "",
						icon: m.a.createElement(Nr.a, {
							name: "rules"
						}),
						isOpen: t,
						noBottomDivider: a,
						onClick: (e, t) => {
							r(Object(co.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(ro, {
						className: a ? Od.a.basicLink : "",
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => r(Object(co.c)("user_agreement")),
						title: s.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(ro, {
						className: a ? Od.a.basicLink : "",
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => r(Object(co.c)("privacy_policy")),
						title: s.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(ro, {
						className: a ? Od.a.basicLink : "",
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => r(Object(co.c)("content_policy")),
						title: s.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(ro, {
						className: a ? Od.a.basicLink : "",
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => r(Object(co.c)("mod_policy")),
						title: s.fbt._("Moderator Code of Conduct", null, {
							hk: "vJzm8"
						})
					}))
				};
			var _d = n("./src/reddit/components/HiddenDiv.tsx"),
				jd = n("./src/reddit/controls/Dropdown/index.tsx"),
				Pd = n("./src/reddit/helpers/trackers/authControls.ts"),
				Sd = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				kd = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/ConfirmDismissModal.tsx"),
				Nd = n("./src/reddit/helpers/path/index.ts");
			var wd = e => {
					let {
						altText: t,
						className: n
					} = e;
					return m.a.createElement("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 20 20",
						className: n
					}, m.a.createElement("title", null, t || s.fbt._("Close", null, {
						hk: "1bitDC"
					})), m.a.createElement("polygon", {
						fill: "currentColor",
						points: "18.442 2.442 17.558 1.558 10 9.116 2.442 1.558 1.558 2.442 9.116 10 1.558 17.558 2.442 18.442 10 10.884 17.558 18.442 18.442 17.558 10.884 10 18.442 2.442"
					}))
				},
				Md = n("./src/reddit/components/HeaderUserDropdown/UserMenu/Components/AvatarPushCard/PushCard/index.m.less"),
				Id = n.n(Md);
			var Td = e => {
				let {
					avatarPushcard: t
				} = e;
				const n = Object(xe.d)(),
					s = Object(xe.e)(e => e),
					[r, a] = Object(u.useState)(!1);
				Object(u.useEffect)(() => {
					n(Object(Tl.f)(t))
				}, []);
				const {
					title: o,
					cta: i,
					imageUrl: c,
					deeplink: l
				} = t;
				return m.a.createElement("div", {
					className: Id.a.avatarPushCardContainer,
					onClick: () => {
						Object(U.a)(Object(Nl.c)(s)), window.location.href = Object(Nd.b)(l)
					}
				}, m.a.createElement("button", {
					className: Id.a.closeButton,
					onClick: e => {
						e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), Object(U.a)(Object(Nl.f)(s)), a(!0)
					}
				}, m.a.createElement(wd, {
					className: Id.a.closeButtonIcon
				})), m.a.createElement("img", {
					className: Id.a.image,
					src: c,
					alt: o
				}), (o || i) && m.a.createElement("div", {
					className: Id.a.ctaWrapper
				}, o && m.a.createElement("p", {
					className: Id.a.ctaDescription
				}, o), i && m.a.createElement("div", {
					className: Id.a.cta
				}, i)), r && m.a.createElement(kd.a, {
					onGoBack: e => {
						e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), a(!1)
					},
					onDismiss: () => {
						Object(U.a)(Object(Nl.g)(s)), n(Object(Tl.a)(t))
					}
				}))
			};
			const Ad = () => {
					const {
						avatarPushcard: e
					} = Jl();
					return e && m.a.createElement(Td, {
						avatarPushcard: e
					})
				},
				Rd = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: Ka.a.headingContent
					}, m.a.createElement("span", {
						className: Ka.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(ke.a)(Ka.a.title, s)
					}, n))
				},
				Ld = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: r,
						titleClassName: a
					} = e;
					return m.a.createElement("button", {
						className: Object(ke.a)(Ka.a.button, t),
						onClick: s
					}, m.a.createElement(Rd, {
						icon: n,
						title: r,
						titleClassName: a
					}))
				},
				Fd = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: r,
						rel: a,
						title: o,
						titleClassName: i
					} = e;
					return m.a.createElement(Qa, {
						className: Object(ke.a)(Ka.a.button, t),
						href: n,
						rel: a,
						onClick: r
					}, m.a.createElement(Rd, {
						icon: s,
						title: o,
						titleClassName: i
					}))
				},
				Dd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					const t = e.getFullYear(),
						n = e.getMonth();
					return `/posts/${n>=6?t:t-1}/`
				};
			var Bd = e => [{
				noun: "ios",
				rel: "nofollow",
				title: () => s.fbt._("Reddit iOS", null, {
					hk: "2W8O9q"
				}),
				url: "https://reddit.onelink.me/MRHZ/b3d845e"
			}, {
				noun: "android",
				rel: "nofollow",
				title: () => s.fbt._("Reddit Android", null, {
					hk: "SmUA3"
				}),
				url: "https://reddit.onelink.me/MRHZ/4c212f61"
			}, {
				noun: "rereddit",
				title: () => s.fbt._("Rereddit", null, {
					hk: "1DyKwo"
				}),
				url: Dd()
			}, {
				isHidden: !e,
				noun: "best_communities",
				title: () => s.fbt._("Best Communities", null, {
					hk: "3oZdW7"
				}),
				url: "https://www.reddit.com/best/communities/1/"
			}, {
				noun: "communities",
				title: () => s.fbt._("Communities", null, {
					hk: "9RIu9"
				}),
				url: "/subreddits/a-1/"
			}, {
				noun: "about_reddit",
				title: () => s.fbt._("About Reddit", null, {
					hk: "3cosfA"
				}),
				url: "https://www.redditinc.com"
			}, {
				noun: "blog",
				title: () => s.fbt._("Blog", null, {
					hk: "2PoxW5"
				}),
				url: "https://redditblog.com"
			}, {
				noun: "careers",
				title: () => s.fbt._("Careers", null, {
					hk: "g9gZP"
				}),
				url: "https://www.redditinc.com/careers"
			}, {
				noun: "press",
				title: () => s.fbt._("Press", null, {
					hk: "10XBDT"
				}),
				url: "https://www.redditinc.com/press"
			}];
			var Gd = e => {
					let {
						isCommunityLinkVisible: t,
						isLoggedIn: n,
						isOpen: r,
						onClick: a,
						sendEvent: o,
						url: i,
						useClassicUserMenuStyles: c = !1
					} = e;
					return m.a.createElement($a, {
						buttonClassName: c ? Od.a.button : "",
						headingClassName: c ? Od.a.headingContent : "",
						noBottomDivider: c,
						icon: m.a.createElement(Nr.a, {
							name: "info"
						}),
						title: s.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: r,
						onClick: (e, t) => {
							o(Object(co.c)(t ? "more_chevron" : "more_menu")), "function" == typeof a && a(e)
						}
					}, Bd(t).map(e => ((e, t) => {
						let {
							isHidden: n,
							noun: s,
							rel: r,
							title: a,
							url: o
						} = e;
						return !n && m.a.createElement(ro, {
							href: o,
							key: o,
							onClick: () => {
								s && t(Object(co.c)(s))
							},
							rel: r,
							title: a()
						})
					})(e, o)), n ? m.a.createElement(ro, {
						href: "https://old.reddit.com" + i,
						title: s.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							o(Object(co.c)("old_reddit")), o(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: vn.cb(e),
								subreddit: vn.lb(e)
							}))
						}
					}) : null)
				},
				Ud = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Hd = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				qd = n.n(Hd);
			var Wd = e => {
				let {
					isOpen: t,
					onClick: n
				} = e;
				const [{
					links: r,
					showAll: a
				}, o] = Object(u.useState)({
					links: Object(Ud.b)(),
					showAll: !1
				});
				if (Object(u.useEffect)(() => {
						t || o({
							links: r,
							showAll: !1
						})
					}, [r, t]), 0 === r.length) return null;
				const i = a ? r : r.slice(0, 3),
					c = () => o({
						links: r,
						showAll: !a
					});
				return m.a.createElement($a, {
					"aria-hidden": !0,
					icon: m.a.createElement(Nr.a, {
						name: "history"
					}),
					isOpen: t,
					title: s.fbt._("Recent Communities", null, {
						hk: "cJ4rl"
					}),
					onClick: n
				}, i.map(e => {
					var t, n;
					return m.a.createElement(ao, {
						className: qd.a.basicLink,
						href: e.url,
						iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : qd.a.subredditIcon,
						iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
						key: e.url,
						title: e.title,
						titleClassName: qd.a.title
					})
				}), r.length > 3 && (e => m.a.createElement("span", {
					className: Ka.a.spanButton,
					onClick: c
				}, m.a.createElement("span", {
					className: Object(ke.a)(Ka.a.headingContent, qd.a.headingContent)
				}, m.a.createElement("span", {
					className: Ka.a.title
				}, e))))(a ? s.fbt._("see less", null, {
					hk: "3tQWvR"
				}) : s.fbt._("see more", null, {
					hk: "1WV0AC"
				})))
			};

			function Vd() {
				return (Vd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const zd = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				Qd = e => {
					const t = e && e.coins || 0;
					return s.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [s.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var Zd;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(Zd || (Zd = {}));
			var Kd = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						isCommunityLinkVisible: r,
						isNsfwBlocking: a,
						logoutUser: o,
						onClick: i,
						openCommunityCreationModal: c,
						sendEvent: l,
						shouldShowCreateCommunityItem: d,
						url: p,
						user: b
					} = e, [h, g] = Object(u.useState)(Zd.TermsAndPolicies), f = e => () => {
						g(h === e ? null : e)
					}, v = e => ({
						onClick: f(e),
						isOpen: h === e
					}), O = !!b, C = () => {
						t(), n(a)
					}, y = () => m.a.createElement(Fd, {
						className: Xa.a.button,
						icon: m.a.createElement(Nr.a, {
							name: "topic_activism"
						}),
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => l(Object(ld.b)()),
						title: s.fbt._("Advertise on Reddit", null, {
							hk: "3R4KSI"
						})
					});
					return m.a.createElement("div", {
						onClick: zd
					}, m.a.createElement(Ad, null), m.a.createElement(Cd, null), m.a.createElement(yd, null), m.a.createElement(() => d ? m.a.createElement(Ld, {
						className: Xa.a.button,
						icon: m.a.createElement(Nr.a, {
							name: "community"
						}),
						onClick: () => {
							c(), l(Object(Sd.a)()), i()
						},
						title: s.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(Fd, {
						className: Xa.a.coinsLink,
						icon: m.a.createElement(Nr.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, s.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: Xa.a.meta
						}, Qd(b))),
						onClick: () => {
							Object(ho.d)(ho.a.GoldPayment, !0), e.sendEvent(Object(ld.d)())
						},
						titleClassName: Xa.a.coinsTitle
					}), null), m.a.createElement(() => m.a.createElement(Fd, {
						className: Xa.a.button,
						icon: m.a.createElement(Nr.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(ho.d)(ho.a.GoldPayment, !0), e.sendEvent(Object(ld.e)())
						},
						title: s.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), !O && m.a.createElement(Wd, v(Zd.RecentCommunitiesMenu)), m.a.createElement(po, Vd({}, v(Zd.ExploreMenu), {
						sendEvent: l
					})), m.a.createElement(Ed, v(Zd.Settings)), !O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(Fd, {
						className: Xa.a.button,
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(Nr.a, {
							name: "help"
						}),
						title: s.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(Gd, Vd({}, v(Zd.MoreMenu), {
						isCommunityLinkVisible: r,
						isLoggedIn: O,
						url: p,
						sendEvent: l
					})), m.a.createElement(xd, Vd({}, v(Zd.TermsAndPolicies), {
						sendEvent: l
					})), m.a.createElement(() => O ? m.a.createElement(Ld, {
						className: Xa.a.button,
						icon: m.a.createElement(Nr.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), o()
						},
						title: s.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(Ld, {
						className: Xa.a.button,
						icon: m.a.createElement(Nr.a, {
							name: "profile"
						}),
						onClick: C,
						title: s.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: Ka.a.copyrightContainer
					}, m.a.createElement("span", {
						className: Ka.a.copyrightText
					}, s.fbt._("Reddit, Inc. © {year}. All rights reserved.", [s.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "2U62k3"
					}))), null))
				},
				Jd = n("./src/reddit/selectors/experiments/shredditParity.ts"),
				Xd = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				Yd = n.n(Xd);

			function $d() {
				return ($d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const eu = Qe.a.wrapped(jd.a, "Dropdown", Yd.a),
				tu = Object(td.a)(eu),
				nu = e => m.a.createElement(rd.a, {
					className: Object(ke.a)(Yd.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: Yd.a.buttonText
				}, e.displayText), m.a.createElement(eo.a, {
					className: Yd.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				})),
				su = e => t => m.a.createElement(Nr.a, $d({
					name: e
				}, t)),
				ru = e => {
					let {
						nightmode: t,
						sendEvent: n,
						toggleNightmode: r
					} = e;
					return Object(xe.e)(Jd.a) ? null : m.a.createElement(nu, {
						displayText: s.fbt._("Dark Mode", null, {
							hk: "1Tx6hE"
						}),
						isEnabled: t,
						onClick: e => {
							null == e || e.nativeEvent.stopImmediatePropagation(), n(Object(ld.g)(t)), r(!t)
						}
					}, m.a.createElement(Nr.a, {
						name: "night",
						className: Yd.a.nightIcon
					}))
				},
				au = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(rd.b)(su(nd.a.help), s.fbt._("Help Center", null, {
						hk: "4sGjc0"
					}));
					return m.a.createElement(n, {
						href: "https://www.reddithelp.com",
						onClick: () => t(Object(co.c)("help_center"))
					})
				},
				ou = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(rd.b)(su(nd.a.topic_activism), s.fbt._("Advertise on Reddit", null, {
						hk: "3R4KSI"
					}));
					return m.a.createElement(n, {
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => t(Object(ld.b)())
					})
				},
				iu = e => {
					let {
						dispatchOpenLoginModal: t,
						isNsfwBlocking: n,
						sendEvent: r
					} = e;
					const a = Object(rd.c)(su(nd.a.logout), s.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					}));
					return m.a.createElement(a, {
						href: "#",
						onClick: e => {
							Object(Ue.a)(e) && (e.preventDefault(), e.stopPropagation(), t(n), r(Object(Pd.b)()))
						}
					})
				};
			var cu = Object(Ke.c)(e => {
				const {
					dispatchOpenLoginModal: t,
					isCrawler: n,
					isNsfwBlocking: s,
					nightmode: r,
					requestAwardKarma: a,
					sendEvent: o,
					user: i
				} = e, c = i && i.id, l = Object(xe.e)(O.S), [d, p] = Object(u.useState)(!1), b = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), p(!d)
				}, [d]), [h, g] = Object(u.useState)(!1), f = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), g(!h)
				}, [h]);
				return Object(u.useEffect)(() => {
					p(!1), g(!1)
				}, [e.isOpen]), Object(u.useEffect)(() => {
					a()
				}, [c]), n ? m.a.createElement(_d.a, null, m.a.createElement(Kd, e)) : l ? m.a.createElement(tu, {
					className: Yd.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(Kd, e)) : m.a.createElement(tu, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(ru, {
					nightmode: r,
					sendEvent: o,
					toggleNightmode: e.toggleNightmode
				}), m.a.createElement(au, {
					sendEvent: o
				}), m.a.createElement(Gd, {
					isOpen: h,
					onClick: f,
					isCommunityLinkVisible: e.isCommunityLinkVisible,
					isLoggedIn: l,
					url: e.url,
					sendEvent: o,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(xd, {
					isOpen: d,
					onClick: b,
					sendEvent: o,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(ou, {
					sendEvent: o
				}), m.a.createElement("div", {
					className: Yd.a.divider
				}), m.a.createElement(iu, {
					dispatchOpenLoginModal: t,
					isNsfwBlocking: s,
					sendEvent: o
				}))
			});

			function lu() {
				return (lu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const du = e => t => m.a.createElement(Nr.a, lu({
					name: e
				}, t)),
				uu = Object(xe.b)(() => Object(re.c)({
					avatarPushcardBanner: ql.b,
					isCrawler: e => !!Object(Zl.a)(e),
					isModModeEnabled: Ql.a,
					isNsfwBlocking: e => {
						const t = Object(ae.d)(e),
							n = Object(ae.e)(e);
						return t || n
					},
					isOpen: Object(Kl.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: zl.d,
					shouldShowCreateCommunityItem: O.rb,
					navbarLikeMweb: Vl.a,
					nightmode: O.fb,
					showPresence: O.X,
					url: In.s,
					isCommunityLinkVisible: Wl
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(gc.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					dismissAvatarPushcardBanner: t => e(Object(Tl.b)(t)),
					toggleNightmode: t => e(Object(ol.y)(t)),
					toggleShowPresence: t => e(Object(ol.G)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Il.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (d.a.get("rseor3") && d.a.remove("rseor3", {
							domain: i.a.cookieDomain
						}), e(Object(Il.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Rl.g)(Object(hn.e)(t.user)))
					},
					dispatchOpenLoginModal: t => {
						t && (e(Object(Dt.k)({
							actionSource: Dt.a.NsfwBlockingModal
						})), Object(Fl.c)(Fl.a.Login)), e(Object(ne.openLoginModal)())
					},
					toggleModMode: () => e(Object(Al.b)()),
					openCommunityCreationModal: () => e(Object(Dt.h)(Jt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var mu = Object(qn.v)({
					pageLayer: e => e
				})(uu(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: r,
						user: a
					} = e, o = Object(xe.e)(e => e), i = Object(xe.e)(zl.b), [c, l] = Object(u.useState)(!1), d = a && a.id;
					Object(u.useEffect)(() => {
						n()
					}, [d]);
					const p = Object(u.useMemo)(() => ({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "USER_IS_ONLINE",
									userID: d
								}
							}
						}), [d]),
						b = Object(u.useCallback)(() => {
							l("visible" === document.visibilityState)
						}, []);
					return Object(Bl.a)("visibilitychange", b), Object(u.useEffect)(() => {
						l("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(ke.a)(Yd.a.container, Ll.e)
					}, r && c && i && m.a.createElement(Ml.a, {
						variables: p,
						onData: kl.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Hl.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(ke.a)(e.className, Yd.a.inlineButton, {
							[Yd.a.dropdownOpen]: e.isOpen,
							[Yd.a.isLoggedOut]: !a,
							[Yd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon"), e.avatarPushcardBanner && (Object(U.a)(Object(Nl.b)(o)), e.dismissAvatarPushcardBanner(e.avatarPushcardBanner))
						}
					}, m.a.createElement(ed, null), m.a.createElement("span", {
						className: Yd.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(ke.a)(Yd.a.accountWrapper, Yd.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(m.a.Fragment, null, m.a.createElement(Lr.a, {
						className: Object(ke.a)(Yd.a.imgIcon, {
							[Yd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: Yd.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && r
					})), m.a.createElement("span", {
						className: Yd.a.accountDetails
					}, m.a.createElement("span", {
						className: Yd.a.username
					}, n.displayText, n.isGold && m.a.createElement(Ul.a, {
						className: Yd.a.premiumFontIcon,
						title: s.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: Yd.a.accountKarma
					}, m.a.createElement(Nr.a, {
						name: "karma",
						isFilled: !0,
						className: Yd.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Dl.a)(e),
							n = Object(wl.b)(t);
						return s.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [s.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: Yd.a.accountCoins
					}, m.a.createElement(Gl.a, {
						className: Yd.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(wl.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(ke.a)(Yd.a.accountWrapper, Yd.a.isLoggedOut)
					}, m.a.createElement(Nr.a, {
						name: "user",
						className: Yd.a.defaultProfileIcon
					})))(e.user), m.a.createElement(Nr.a, {
						className: Yd.a.caretDownIcon,
						name: "caret_down"
					})), m.a.createElement(Lo.a, null, s.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(cu, e))
				})),
				pu = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				bu = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less"),
				hu = n.n(bu);
			const gu = Object(ul.a)(e => m.a.createElement("div", {
				"aria-modal": !0,
				className: Object(ke.a)(e.className, hu.a.confirmContainer, hu.a.confirmToastContainer),
				role: "dialog"
			}, m.a.createElement("div", null, m.a.createElement("h2", {
				className: hu.a.confirmToastTitle
			}, s.fbt._("🎉 Nice name, {username}!", [s.fbt._param("username", e.username)], {
				hk: "2DEuit"
			}))), m.a.createElement("p", {
				className: hu.a.confirmModalDescription
			}, s.fbt._("May it serve you well", null, {
				hk: "1OmrGj"
			}))));
			var fu = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/Loader.tsx"),
				vu = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Ou = n("./src/reddit/helpers/trackers/inbox.ts"),
				Cu = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				yu = n("./src/reddit/routes/acknowledgements/index.ts"),
				Eu = n("./src/reddit/routes/appeal/index.ts");
			var xu = {
					action: () => async e => await e(Object(p.c)(pa.a)),
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				_u = n("./src/reddit/routes/coins/index.ts"),
				ju = n("./src/reddit/routes/coinsMobile/index.ts"),
				Pu = n("./src/reddit/routes/commentsPage/index.ts"),
				Su = n("./src/reddit/routes/countrySitePage/index.ts");
			n("./node_modules/@loadable/component/dist/loadable.esm.js");
			var ku = [],
				Nu = n("./src/reddit/routes/econManagement/index.ts"),
				wu = n("./src/reddit/routes/econManagement2/index.ts");
			var Mu = {
					action: Object(T.a)(() => n.e(5).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				Iu = n("./src/lib/addQueryParams/index.ts");
			var Tu = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							queryParams: a
						} = e;
						await t(Object(p.c)(Object(Iu.a)("/", a)))
					},
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [k.u.COMMENTS_PAGE, k.u.FRONTPAGE]
				},
				Au = n("./src/reddit/routes/followers/index.ts"),
				Ru = n("./src/reddit/routes/framedGild/index.ts"),
				Lu = n("./src/reddit/routes/framedModal/index.ts"),
				Fu = n("./src/reddit/routes/frontpage/index.ts"),
				Du = n("./src/reddit/routes/geotagging/index.ts"),
				Bu = n("./src/reddit/routes/happeningNow/index.ts"),
				Gu = n("./src/reddit/routes/inbox/index.ts"),
				Uu = n("./src/reddit/routes/meta/index.ts"),
				Hu = n("./src/reddit/routes/moderationPages/index.ts"),
				qu = n("./src/reddit/routes/modQueue/index.ts"),
				Wu = n("./src/reddit/routes/multireddit/index.ts"),
				Vu = n("./src/reddit/routes/notificationsInbox/index.ts"),
				zu = n("./src/reddit/routes/postCreation/constants.ts");
			const Qu = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(p.c)("/"))
				},
				chunk: k.u.EMPTY,
				exact: !0,
				meta: {
					name: k.Tb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var Zu = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(zu.b))
					},
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...Qu],
				Ku = n("./src/reddit/routes/postCreation/index.ts"),
				Ju = n("./src/reddit/routes/postDraft/index.ts"),
				Xu = n("./src/reddit/routes/postSetPage/index.ts");
			var Yu = {
					action: () => async () => {
						window.location.replace(window.location.origin)
					},
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.POWERUPS_REDIRECT
					},
					path: ["/powerup", "/powerups"]
				},
				$u = n("./src/reddit/routes/premium/index.ts"),
				em = n("./src/reddit/routes/profileComments/index.ts"),
				tm = n("./src/reddit/endpoints/me/index.ts"),
				nm = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				sm = n("./src/server/helpers/profileRedirect.ts");
			var rm = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							rest: a
						} = e.params, {
							path: o,
							queryParams: i
						} = e, c = await Object(tm.a)(r());
						if (!(c.ok && c.body && c.body.account)) {
							const e = n();
							return void Object(nm.a)(t, e)
						}
						const l = c.body.account.displayText,
							d = Object(sm.b)({
								path: o,
								profileName: l,
								queryParams: i,
								rest: a
							});
						await t(Object(p.c)(d))
					},
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				am = n("./src/reddit/routes/profileModSettings/index.ts"),
				om = n("./src/reddit/routes/profileOverview/index.ts"),
				im = n("./src/reddit/routes/profilePosts/index.ts");
			var cm = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: r,
							queryParams: a
						} = e, o = Object(sm.b)({
							path: r,
							profileName: n,
							queryParams: a,
							rest: s
						});
						t(Object(p.c)(o))
					},
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/posts", "/user/:profileName/posts/:rest(.*)"]
				},
				lm = n("./src/reddit/routes/profilePrivate/index.ts");
			var dm = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: r,
							queryParams: a
						} = e, o = Object(sm.b)({
							path: r,
							profileName: n,
							queryParams: a,
							rest: s
						});
						await t(Object(p.c)(o))
					},
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)", "/user/:profileName/moderation", "/u/:profileName/moderation"]
				},
				um = n("./src/reddit/routes/profileSnoobuilder/index.ts"),
				mm = n("./src/reddit/routes/report/index.ts"),
				pm = n("./src/reddit/routes/searchResults/index.ts"),
				bm = n("./src/reddit/routes/settings/index.ts");
			var hm = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(p.c)(s))
					},
					chunk: k.u.EMPTY,
					meta: {
						name: k.Tb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(p.c)("/settings/profile"))
					},
					chunk: k.u.EMPTY,
					meta: {
						name: k.Tb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				gm = n("./src/reddit/routes/subreddit/index.ts"),
				fm = n("./src/reddit/routes/subredditWiki/index.ts");
			var vm = {
					action: () => async e => {
						window.location.replace(window.location.origin)
					},
					chunk: k.u.TALK,
					exact: !0,
					meta: {
						name: k.Tb.TALK
					},
					path: "/talk"
				},
				Om = n("./src/reddit/routes/topic/index.ts");
			var Cm = [yu.a, Eu.a, pa.b, xu, _u.a, ju.a, Su.a, rm, dm, cm, ...Cu.a, ...Pu.b, Mu, ...Fu.a, Du.a, $u.a, vm, Nu.c, wu.a, Yu, Au.a, Ru.a, Lu.a, Ku.a, Ju.a, Xu.a, ...Zu, Tu, ...Uu.a, Wu.a, qu.a, ia.c, Vu.a, Gu.a, em.a, am.a, om.b, im.a, um.a, lm.a, Ri.b, ...bm.a, ...hm, pm.a, ...fm.a, Om.a, gm.b, Hu.a, mm.a, ...ku, Bu.a],
				ym = n("./src/reddit/selectors/appBadges.ts"),
				Em = n("./src/reddit/selectors/emailVerification.ts"),
				xm = n("./src/reddit/selectors/sso.ts");
			var _m = m.a.memo((function(e) {
					let {
						badgeCount: t,
						hasUnreadChatMessages: n,
						onClickChat: r
					} = e;
					const a = Object(yr.a)(),
						o = s.fbt._("Chat", null, {
							hk: "4nXRWH"
						});
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: jc.a.iconWrapper,
						onMouseEnter: () => {
							a.show()
						},
						onMouseLeave: a.hide,
						ref: a.target.ref
					}, m.a.createElement("a", {
						className: jc.a.link,
						href: `${i.a.redditUrl}/chat`,
						onClick: e => {
							e.preventDefault(), r()
						},
						"aria-label": o
					}, m.a.createElement(ta.a, {
						isActive: t > 0 || n,
						unreadCount: t
					}), m.a.createElement(Nr.a, {
						name: "chat",
						className: jc.a.icon2020
					}))), m.a.createElement(Or.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, o))
				})),
				jm = n("./src/reddit/actions/chat/liveChatTooltipShowState.ts"),
				Pm = n("./src/reddit/constants/chat.ts"),
				Sm = n("./src/reddit/selectors/eligibleUXExperiences.ts"),
				km = n("./src/redditGQL/types.ts");
			var Nm = m.a.memo((function(e) {
				let {
					badgeCount: t,
					hasUnreadChatMessages: n,
					onClickChat: r
				} = e;
				var a;
				const o = Object(xe.d)(),
					c = Object(xe.e)(O.k),
					l = Object(xe.e)(tl.b),
					d = Object(yr.a)(),
					p = null === (a = Object(xe.e)(e => Object(Sm.a)(e, {
						experience: km.ab.LiveChatVideoEdu
					}))) || void 0 === a ? void 0 : a.value,
					b = Object(u.useMemo)(() => l === Pm.b.IS_SHOWING, [l]),
					h = Object(u.useMemo)(() => b ? (e => ({
						...e,
						arrowProps: {
							...e.arrowProps,
							style: {
								...e.arrowProps.style,
								borderBottom: `3px solid ${Ji.a.alien600}`
							}
						},
						popperProps: {
							...e.popperProps,
							style: {
								...e.popperProps.style,
								background: Ji.a.alien600
							}
						},
						visible: !0
					}))(d) : d, [d, b]),
					g = Object(u.useCallback)(() => {
						b && c && o(Object(jm.c)(Pm.b.DISMISSED, c))
					}, [o, b, c]);
				Object(u.useEffect)(() => {
					c && o(Object(jm.b)(c))
				}, [o, c]), Object(u.useEffect)(() => {
					if (!b) return;
					const e = setTimeout(g, 3e3);
					return () => clearTimeout(e)
				}, [g, b]);
				const f = s.fbt._("Chat", null, {
					hk: "4nXRWH"
				});
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: jc.a.iconWrapper,
					onMouseEnter: () => {
						d.show()
					},
					onMouseLeave: d.hide,
					ref: d.target.ref
				}, m.a.createElement("a", {
					className: jc.a.link,
					href: `${i.a.redditUrl}/chat`,
					"aria-label": f,
					onClick: e => {
						e.preventDefault(), r(), g()
					}
				}, m.a.createElement(ta.a, {
					isActive: t > 0 || n || !!p,
					unreadCount: t
				}), m.a.createElement(Nr.a, {
					name: "chat",
					className: jc.a.icon2020
				}))), m.a.createElement(Or.a, {
					arrowProps: h.arrowProps,
					popperProps: h.popperProps,
					visible: h.visible
				}, b ? m.a.createElement("span", {
					className: jc.a.liveChatAnnouncementText,
					onClick: e => {
						e.preventDefault(), g()
					}
				}, s.fbt._("Live chats are here now", null, {
					hk: "10sA0h"
				})) : f))
			}));
			var wm = e => {
					let {
						onClickChat: t
					} = e;
					const n = Object(xe.e)(J.b),
						s = Object(xe.e)(ym.g),
						r = Object(xe.e)(J.k),
						a = Object(xe.e)(ym.f),
						o = Object(xe.e)(ym.e),
						i = r ? a + o : a;
					return n ? m.a.createElement(Nm, {
						badgeCount: i,
						hasUnreadChatMessages: s,
						onClickChat: t
					}) : m.a.createElement(_m, {
						badgeCount: i,
						hasUnreadChatMessages: s,
						onClickChat: t
					})
				},
				Mm = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				Im = n.n(Mm);
			var Tm = Object(Ke.c)(e => {
					let {
						className: t,
						sendEvent: n
					} = e;
					const r = Object(xe.e)(O.fb),
						a = Object(yr.a)(),
						o = s.fbt._("Advertise", null, {
							hk: "bW02l"
						}),
						[i, c] = m.a.useState(!1);
					return m.a.useEffect(() => {
						c(!Object(Ft.a)() || !localStorage.getItem("has_clicked_advertise_button"))
					}, []), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Object(ke.a)(t, Im.a.container, {
							[Im.a.isNightMode]: r
						})
					}, m.a.createElement("a", {
						className: Im.a.link,
						ref: a.target.ref,
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => {
							n(Object(ld.c)()), Object(Ft.a)() && !localStorage.getItem("has_clicked_advertise_button") && localStorage.setItem("has_clicked_advertise_button", "true"), c(!1)
						},
						onMouseEnter: a.show,
						onMouseLeave: a.hide,
						onBlur: a.hide,
						"aria-label": o
					}, m.a.createElement(Nr.a, {
						className: Im.a.icon,
						name: "topic_activism",
						style: {
							marginLeft: i ? "12px" : "7px"
						}
					}), i && m.a.createElement("span", {
						className: Im.a.text
					}, o))), !i && m.a.createElement(Or.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, o))
				}),
				Am = n("./src/reddit/actions/matrixChat/index.ts"),
				Rm = n("./src/lib/makeRequest/index.ts"),
				Lm = n("./src/redditGQL/operations/MatrixChatNotifications.json");
			const Fm = () => async (e, t, n) => {
				const s = await (async e => {
					var t, n, s, r, a, o, i, c;
					const l = await Object(Vo.a)(e, Lm);
					if (Object(Rm.c)(l) && !l.error && void 0 !== (null === (r = null === (s = null === (n = null === (t = null == l ? void 0 : l.body) || void 0 === t ? void 0 : t.data) || void 0 === n ? void 0 : n.identity) || void 0 === s ? void 0 : s.matrixNotifications) || void 0 === r ? void 0 : r.unreadCount)) return null === (c = null === (i = null === (o = null === (a = null == l ? void 0 : l.body) || void 0 === a ? void 0 : a.data) || void 0 === o ? void 0 : o.identity) || void 0 === i ? void 0 : i.matrixNotifications) || void 0 === c ? void 0 : c.unreadCount
				})(n.gqlContext());
				void 0 !== s && e(Object(Am.b)({
					count: s
				}))
			};
			var Dm = n("./src/reddit/reducers/features/matrixChat/index.ts"),
				Bm = n("./src/reddit/selectors/features/matrixChat/index.ts");
			const Gm = () => {
					const e = Object(yr.a)(),
						t = Object(xe.d)(),
						n = Object(xe.e)(Bm.c),
						r = Object(xe.e)(Bm.b),
						a = Object(xe.e)(Bm.a);
					return m.a.useEffect(() => {
						void 0 === a && r === Dm.b.CLOSED && t(Fm())
					}, [a, r, t]), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: jc.a.iconWrapper,
						onMouseEnter: () => {
							e.show()
						},
						onMouseLeave: e.hide,
						ref: e.target.ref,
						"data-testid": "reddit-chat-button"
					}, m.a.createElement("a", {
						className: jc.a.link,
						href: n,
						onClick: e => {
							const n = r !== Dm.b.NORMAL ? Dm.b.NORMAL : Dm.b.CLOSED;
							e.preventDefault(), t(Object(Am.c)({
								state: n
							}))
						}
					}, !!a && a > 0 && m.a.createElement(ta.a, {
						isActive: !0,
						unreadCount: a,
						testId: "reddit-chat-badge"
					}), m.a.createElement(Nr.a, {
						name: "chat",
						className: jc.a.icon2020
					}))), m.a.createElement(Or.a, {
						arrowProps: e.arrowProps,
						popperProps: e.popperProps,
						visible: e.visible
					}, s.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				},
				Um = "change-username-tooltip-id",
				Hm = "email-verification-tooltip-id",
				qm = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const r = Object(yr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: jc.a.iconWrapper,
						onMouseEnter: r.show,
						onMouseLeave: r.hide,
						ref: r.target.ref
					}, m.a.createElement(xc, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: pu.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(ta.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(Nr.a, {
						className: jc.a.icon2020,
						name: "mod"
					})), m.a.createElement(Or.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, s.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(pu.b, {
						className: jc.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				Wm = m.a.memo((function(e) {
					const t = Object(yr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: jc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: jc.a.link,
						"aria-label": s.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(Nr.a, {
						className: jc.a.icon2020,
						name: "add"
					}))), m.a.createElement(Or.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Vm = Object(qn.v)({
					pageLayer: e => e
				}),
				zm = Object(re.c)({
					activeDropdownId: Kl.a,
					activeModalId: Fc.b,
					appBadges: ym.b,
					email: O.p,
					inboxBadgeCount: ym.h,
					canViewQuickCreate: e => ic(e),
					isAvatarStorefrontEnabled: e => Object(la.c)(e) && !!Object(nc.a)(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					shouldShowEmailVerificationTooltip: Em.b,
					isLoggedIn: O.S,
					isModerator: fn.k,
					isNameEditable: O.U,
					isOneTapSession: oe.g,
					isResponsiveSettingsEnabled: zn.a,
					isSendbirdChatAvailable: tl.d,
					shouldOpenEmailVerificationTooltip: Em.a,
					shouldShowChangeUsernameModals: xm.c,
					unreadNotifications: O.Ab,
					usernameChangedModalOpen: Object(Fc.c)(ml.p)
				}),
				Qm = Object(xe.b)(zm, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(sl.changeUsernameTooltipClosed)()),
					closeEmailVerificationTooltip: () => e(Object(rl.b)()),
					showEmailVerificationTooltip: () => e(Object(rl.b)()),
					fetchAppBadges: () => e(Object(nl.c)()),
					logoutUser: t => {
						(null == t ? void 0 : t.contentWindow) && t.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(vu.a)()), e(Object(Ee.p)())
					},
					onChatClick: () => e(Object(z.f)()),
					onDismissCustomizeFlyout: () => e(Object(ol.t)()),
					onOpenModerationDropdown: () => {
						e(Object(gc.h)({
							tooltipId: pu.a
						})), e(Object(Wa.q)())
					},
					onOpenUserDropdown: () => e(Object(gc.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(Dt.h)(ml.b))
					},
					openKeepUsernameModal: () => {
						e(Object(Dt.h)(ml.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(rl.b)()), e(Object(Dt.i)(ml.a))
					},
					resendEmail: () => e(Object(Ee.v)(bl.a)),
					requestCreatePost: () => {
						t.pageLayer && e(al.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(p.b)(t);
						e(Object(sl.startChangeUsernameFlow)(n))
					}
				}));
			class Zm extends m.a.Component {
				constructor() {
					super(...arguments), this.googleOneTapIFrame = null, this.state = {
						confirmUsernameFlowStarted: !1,
						showNavBarEconCta: !0
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(Ou.A)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(co.c)(e)), this.logoutUser = () => {
						this.props.logoutUser(this.googleOneTapIFrame)
					}, this.onClickCreatePost = () => {
						this.props.sendEvent(Object(vo.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(A.a)(e.pathname, Cm),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== k.Tb.POST_CREATION && n !== k.Tb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.googleOneTapIFrame = e
					}, this.navBarEconCta = () => {
						const {
							canViewQuickCreate: e,
							isAvatarStorefrontEnabled: t,
							user: n,
							onAvatarButtonClick: s
						} = this.props, r = n && Object(hn.e)(n) || "", a = () => {
							this.setState({
								showNavBarEconCta: !1
							}), s && s()
						};
						return e ? m.a.createElement(Jc, {
							avatarUrlParams: {
								avatarId: "random",
								username: r
							}
						}) : t ? m.a.createElement(el, {
							handleButtonClick: a
						}) : void 0
					}
				}
				componentDidMount() {
					this.props.showEmailVerificationTooltip(), Do()(this.props.appBadges) && this.props.fetchAppBadges()
				}
				render() {
					const {
						activeDropdownId: e,
						className: t,
						closeChangeUsernameTooltip: n,
						closeEmailVerificationTooltip: s,
						email: r,
						inboxBadgeCount: a,
						isChangeUsernameTooltipShowing: o,
						isCustomizeFlyoutShowing: i,
						shouldShowEmailVerificationTooltip: c,
						isLoggedIn: l,
						isModerator: d,
						isNameEditable: p,
						isOneTapSession: b,
						isResponsiveSettingsEnabled: h,
						isSendbirdChatAvailable: g,
						onDismissCustomizeFlyout: f,
						onOpenUserDropdown: v,
						openChangeUsernameModal: O,
						openKeepUsernameModal: C,
						pageLayer: y,
						resendEmail: E,
						shouldOpenEmailVerificationTooltip: x,
						shouldShowChangeUsernameModals: _,
						toggleChangeEmailModal: j,
						unreadNotifications: P,
						user: S,
						usernameChangedModalOpen: k
					} = this.props, N = !(!P || !P.hasUnreadModmail), w = S && Object(hn.e)(S) || "", M = Object(ke.a)({
						[jc.a["m-responsive"]]: h
					}), I = _ && b;
					return m.a.createElement(pn.a, {
						id: Hm,
						ref: e => this.container = e,
						className: t
					}, m.a.createElement(pn.a, {
						className: jc.a.headerLinks,
						id: Um
					}, d && m.a.createElement(qm, {
						isModerateIconLit: N,
						moderationDropdownOpen: e === pu.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: P
					}), S && m.a.createElement(u.Fragment, null, !1 === g ? m.a.createElement(Gm, null) : m.a.createElement(wm, {
						onClickChat: this.onClickChat
					}), m.a.createElement(Uc, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: a,
						pageUrl: null == y ? void 0 : y.url,
						userId: S.id,
						isLoggedIn: l,
						iconWrapper: jc.a.iconWrapper
					}), m.a.createElement(Wm, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement(Tm, {
						className: jc.a.iconWrapper
					}), this.state.showNavBarEconCta && m.a.createElement("span", {
						className: jc.a.iconWrapper
					}, this.navBarEconCta()))), m.a.createElement(mu, {
						className: jc.a.headerUserDropdown,
						logoutUser: this.logoutUser,
						onClick: v,
						sendEventWithName: this.sendEventWithName,
						user: S
					}), l && m.a.createElement(El, {
						exposeIFrameElement: this.exposeIFrameElement
					}), i && m.a.createElement(Pl, {
						onCloseFlyout: f
					}), m.a.createElement(Ol, {
						closeTooltip: s,
						email: r,
						isOpen: x && c,
						resendEmail: E,
						toggleChangeEmailModal: j,
						tooltipId: Hm
					}), m.a.createElement(dl, {
						email: r,
						shouldOpenTooltip: x
					}), p && !h && !b && m.a.createElement(u.Fragment, null, m.a.createElement(ll.a, {
						closeTooltip: n,
						isOpen: o && !_,
						openChangeUsernameModal: O,
						openKeepUsernameModal: C,
						tooltipId: Um,
						username: w
					}), _ && m.a.createElement(cl.a, {
						isResponsiveSettingsEnabled: h,
						overlayClassName: M,
						username: w,
						withOverlay: !0
					}), m.a.createElement(il.a, {
						confirmNavigate: this.confirmNavigate
					})), I && !k && m.a.createElement(fu.a, {
						className: jc.a.cornerModal,
						isNameEditable: p,
						isOneTapSession: b,
						isResponsiveSettingsEnabled: h,
						logoutUser: this.logoutUser,
						overlayClassName: Object(ke.a)(M, jc.a.modalOverlay),
						username: w,
						withOverlay: !k
					}), I && k && m.a.createElement(gu, {
						className: jc.a.cornerModal,
						isOpen: !0,
						tooltipId: Um,
						username: w
					}))
				}
			}
			var Km = Object(Ke.c)(Vm(Qm(Zm)));
			var Jm = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Xm = n("./src/reddit/selectors/getAppQrCode.ts"),
				Ym = n("./src/reddit/components/Header/User/index.m.less"),
				$m = n.n(Ym);
			const {
				fbt: ep
			} = n("./node_modules/fbt/lib/FbtPublic.js"), tp = Object(re.c)({
				account: e => e.user.account,
				isNsfwBlur: e => {
					const t = Object(ae.d)(e),
						n = Object(ae.e)(e);
					return t || n
				},
				origin: oe.l,
				isShredditParityEnabled: Jd.a
			}), np = m.a.memo(e => m.a.createElement("div", {
				className: Object(ke.a)(e.className, $m.a.row)
			}, !e.account && m.a.createElement(sp, e), m.a.createElement(Km, {
				className: Object(ke.a)({
					[$m.a.loggedOut]: !e.account
				}),
				user: e.account,
				onAvatarButtonClick: e.onAvatarButtonClick
			}))), sp = e => {
				const t = Object(xe.e)(ym.h),
					n = Object(xe.e)(O.Hb),
					s = Object(xe.e)(Jm.c),
					r = Object(xe.e)(Xm.a),
					a = e.pageLayer,
					o = i.a.accountManagerOrigin,
					c = a ? a.url : "/",
					l = a && a.meta && a.meta.name === k.Tb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + c),
					d = !!e.isNsfwBlur,
					u = Object(xe.d)(),
					p = Object(Ke.b)(),
					b = e.isShredditParityEnabled ? un.k : un.t;
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(Uc, {
					sendNavClickInbox: () => e.sendEvent(Object(Ou.A)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: c,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: $m.a.iconWrapper
				}), m.a.createElement("div", {
					className: Object(ke.a)($m.a.loggedOutRow)
				}, r ? m.a.createElement(un.t, {
					Icon: Object(Nr.b)("qr_code"),
					iconClassName: $m.a.buttonIcon,
					kind: un.b.Button,
					priority: un.c.Secondary,
					onClick: e => {
						e.preventDefault(), u(hc()), p((() => e => ({
							...Object(vn.o)(e),
							source: "xpromo",
							action: "click",
							noun: "top_button"
						}))())
					},
					redditStyle: !e.isShredditParityEnabled,
					rplStyle: e.isShredditParityEnabled,
					className: Object(ke.a)($m.a.button, $m.a.separator)
				}, ep._("Get App", null, {
					hk: "4mMZ8i"
				})) : m.a.createElement(un.t, {
					kind: un.b.ExternalLink,
					priority: un.c.Secondary,
					redditStyle: !e.isShredditParityEnabled,
					rplStyle: e.isShredditParityEnabled,
					className: Object(ke.a)($m.a.button, $m.a.separator),
					href: `${o}/register/?dest=${l}`,
					onClick: t => {
						Object(Ue.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(d), e.sendEvent(Object(Pd.c)("nav")))
					}
				}, ep._("Sign Up", null, {
					hk: "2WZPuJ"
				})), m.a.createElement(b, {
					kind: un.b.ExternalLink,
					priority: un.c.Primary,
					redditStyle: !e.isShredditParityEnabled,
					rplStyle: e.isShredditParityEnabled,
					className: Object(ke.a)($m.a.button, $m.a.separator),
					href: `${o}/login/?dest=${l}`,
					onClick: t => {
						Object(Ue.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(d), e.sendEvent(Object(Pd.a)("nav")))
					}
				}, ep._("Log In", null, {
					hk: "4Cxw0g"
				}))))
			};
			var rp = Object(qn.v)()(Object(xe.b)(tp, e => ({
					onOpenLoginModal: t => {
						t ? (e(Object(Dt.k)({
							actionSource: Dt.a.NsfwBlockingModal
						})), Object(Fl.c)(Fl.a.Login)) : e(Object(Dt.k)({
							actionSource: Dt.a.HeaderLogin
						})), e(Object(ne.openLoginModal)())
					},
					onOpenRegisterModal: t => {
						t ? (e(Object(Dt.k)({
							actionSource: Dt.a.NsfwBlockingModal
						})), Object(Fl.c)(Fl.a.Signup)) : e(Object(Dt.k)({
							actionSource: Dt.a.HeaderSignup
						})), e(Object(ne.openRegisterModal)())
					},
					closeUserDropdown: () => e(Object(gc.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(Ke.c)(np))),
				ap = n("./src/reddit/components/Header/index.m.less"),
				op = n.n(ap);

			function ip() {
				return (ip = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const cp = Qe.a.header("HeaderDynamicStyles", op.a),
				lp = Object(re.c)({
					isLoggedIn: O.S,
					isNightMode: O.fb,
					isResponsiveSettingsEnabled: zn.a,
					isPageResponsive: Ui.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing,
					shouldShowModNavColor: e => {
						var t, n, s;
						const r = null === (s = null === (n = null === (t = e.platform) || void 0 === t ? void 0 : t.currentPage) || void 0 === n ? void 0 : n.meta) || void 0 === s ? void 0 : s.name;
						return ("moderationPages" === r || "modQueuePages" === r) && Object(Gi.a)(e, !0)
					}
				}),
				dp = Object(qn.v)({
					categoryName: qn.c,
					pageLayer: e => e
				}),
				up = e => {
					const t = Object(u.useContext)(Re.a),
						n = Object(xe.e)(ca.f),
						r = e.isLoggedIn || n ? "/" : "/?feed=home";
					return m.a.createElement("div", {
						className: op.a.left
					}, m.a.createElement(Lo.a, null, s.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(Ro.b, null), m.a.createElement(lr.a, {
						"aria-label": s.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: op.a.centeredRow,
						to: r,
						onClick: e.onReloadFrontpage
					}, m.a.createElement(ji.a, {
						className: Object(ke.a)(op.a.snoo, {
							[op.a.snooExp]: t
						})
					}), m.a.createElement(Pi.a, {
						className: op.a.wordmark
					})), e.children)
				},
				mp = e => m.a.createElement("div", {
					className: op.a.right
				}, e.children, m.a.createElement(rp, {
					onAvatarButtonClick: e.onAvatarButtonClick
				})),
				pp = e => {
					const t = Object(u.useContext)(Re.a),
						[n, s] = Object(u.useState)(!1);
					return m.a.createElement("div", {
						className: Object(ke.a)(e.shouldShowModNavColor && "bg-neutral-background border-b border-solid border-neutral-border-weak", op.a.layout, {
							[op.a.layoutContainer]: t,
							[op.a.navColor]: !e.shouldShowModNavColor
						})
					}, m.a.createElement(up, ip({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(Ao, null), m.a.createElement(_i, {
						className: op.a.search
					})), m.a.createElement(mp, {
						onAvatarButtonClick: () => {
							s(!0)
						}
					}, m.a.createElement(bc, {
						isAvatarButtonClicked: n,
						className: op.a.quickLinks
					})))
				},
				bp = e => {
					const t = Object(u.useContext)(Re.a),
						n = Object(xe.e)(Mr.c);
					return m.a.createElement("div", {
						className: Object(ke.a)(op.a.layout, op.a.navColor, {
							[op.a.layoutContainer]: t
						})
					}, m.a.createElement(up, ip({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), !n && m.a.createElement(Ao, null), m.a.createElement("div", {
						className: op.a.searchContainer
					}, m.a.createElement(_i, {
						className: op.a.search
					}))), m.a.createElement(mp, null, m.a.createElement(Bi, null), m.a.createElement(Pr, null)))
				};
			var hp = dp(Object(xe.b)(lp, e => ({
					onReloadFrontpage: () => e(Object(T.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(Re.a);
					return t = e.isLoggedIn ? pp : bp, m.a.createElement(cp, {
						"data-redditstyle": !0,
						className: Object(ke.a)(op.a.container, e.className, {
							[op.a.bladeIsOpen]: e.isBladeOpen,
							[op.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage,
						isLoggedIn: e.isLoggedIn,
						shouldShowModNavColor: e.shouldShowModNavColor
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Vi, {
						className: op.a.MwebResponsiveHeader
					}))
				}))),
				gp = n("./src/reddit/components/LightboxHeader/index.tsx");
			const fp = Object(Bt.a)({
				getComponent: () => Object(de.a)(() => n.e("MatrixChat").then(n.bind(null, "./src/reddit/components/MatrixChat/index.tsx"))).then(e => e.MatrixChat),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var vp = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Op = (e, t) => {
					let n = `${i.a.accountManagerOrigin}/${e}/`;
					return t && (n = `${n}?dest=${encodeURIComponent(t)}`), n
				};
			const Cp = () => e => ({
					...vn.o(e),
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				{
					fbt: yp
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				Ep = Object(re.c)({
					isLoggedIn: O.S,
					origin: oe.l,
					isShredditParityEnabled: Jd.a
				});
			class xp extends m.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(Ue.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(Cp()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						className: e,
						origin: t,
						isShredditParityEnabled: n
					} = this.props, s = n ? un.k : un.t;
					return m.a.createElement(s, {
						className: e,
						href: Op(Je.a.Register, t),
						onClick: this.onClick,
						isFullWidth: !0
					}, yp._("Join Reddit", null, {
						hk: "3pGxYq"
					}))
				}
			}
			var _p = Object(xe.b)(Ep, e => ({
					openRegisterModal: () => {
						e(Object(Dt.k)({
							actionSource: Dt.a.IdCard,
							redirectUrl: Yi.c[Yi.b.Home]
						})), e(Object(ne.openRegisterModal)())
					}
				}))(Object(Ke.c)(xp)),
				jp = n("./src/reddit/components/CreateAccountSection/index.m.less"),
				Pp = n.n(jp);
			const {
				fbt: Sp
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var kp = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: t
					}, m.a.createElement("div", {
						className: Pp.a.divider
					}), m.a.createElement("div", {
						className: Pp.a.createDesc
					}, Sp._("Create an account to follow your favorite communities and start taking part in conversations.", null, {
						hk: "z6A2K"
					})), m.a.createElement(_p, {
						className: Pp.a.createButton
					}))
				},
				Np = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				wp = n.n(Np);
			const {
				fbt: Mp
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ip = Object(re.c)({
				currentPage: Jr
			}), Tp = Object(xe.b)(Ip, e => ({
				onUnpinSubscriptions: () => e(Object(He.j)())
			})), Ap = Object(qn.v)();
			var Rp = Qe.a.wrapped(Ap(Tp(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, e.isLoggedIn && m.a.createElement("div", {
					className: wp.a.title
				}, m.a.createElement("div", {
					className: wp.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(Nr.a, {
					name: "close",
					className: wp.a.icon
				}))), m.a.createElement(No, {
					className: wp.a.withOverflow,
					currentPage: e.currentPage,
					isPinned: !0
				}), !e.isLoggedIn && m.a.createElement(kp, {
					className: wp.a.createAccountSection
				})))), "Component", wp.a),
				Lp = n("./src/reddit/components/Survey/index.tsx"),
				Fp = n("./src/reddit/components/ThemeProvider/index.tsx");
			const Dp = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Bp = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...vn.d(t),
						reason: "primary"
					}
				}),
				Gp = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...vn.d(t),
						reason: "secondary"
					}
				});
			var Up = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Hp = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				qp = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Wp = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Vp = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				zp = n("./src/reddit/models/Toast/index.ts"),
				Qp = n("./src/reddit/selectors/structuredStyles.ts"),
				Zp = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				Kp = n.n(Zp);

			function Jp() {
				return (Jp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Xp = e => {
				const t = to.a;
				switch (e.kind) {
					case zp.b.Error:
					case zp.b.AuthError:
					case zp.b.SuccessEndBroadcast:
						return t.warning;
					case zp.b.SuccessCommunity:
						return t.op;
					case zp.b.SuccessCommunityGreen:
					case zp.b.SuccessMod:
					case zp.b.SuccessUnlockComment:
						return t.approved;
					case zp.b.SuccessLockComment:
						return t.reported;
					case zp.b.EuCookiePolicy:
					case zp.b.UappBanner:
					case zp.b.Undo:
					default:
						return t.op
				}
			};
			class Yp extends m.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const {
						kind: e,
						sendEvent: t,
						...n
					} = this.props;
					return m.a.createElement("div", n)
				}
			}
			const $p = Qe.a.wrapped(Yp, "PlainBread", Kp.a);
			var eb = e => m.a.createElement($p, Jp({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": Xp(e)
					}
				})),
				tb = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				nb = n.n(tb);
			const sb = Qe.a.span("Text", nb.a);
			var rb = n("./src/reddit/components/Toaster/index.m.less"),
				ab = n.n(rb);
			const {
				fbt: ob
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ib = Qe.a.wrapped(qp.a, "AuthErrorToastIcon", ab.a), cb = Qe.a.wrapped(un.l, "AuthErrorToastPrimaryButton", ab.a);
			class lb extends m.a.Component {
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
					}, m.a.createElement(eb, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(ib, null), m.a.createElement(sb, null, ob._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(cb, {
						type: "submit"
					}, ob._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var db = lb,
				ub = n("./src/lib/cookieConsent/index.ts"),
				mb = n("./src/reddit/controls/Link/index.tsx"),
				pb = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				bb = n.n(pb);
			const {
				fbt: hb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), gb = Qe.a.wrapped(un.l, "PrimaryButton", bb.a), fb = Qe.a.wrapped(eb, "Bread", bb.a);
			class vb extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(ub.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(ub.b)({
							opted: !0,
							nonessential: !1
						}), this.props.onClose("allow-essential")
					}
				}
				componentDidMount() {
					this.props.sendViewEvent && this.props.sendViewEvent()
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("section", null, m.a.createElement(fb, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						},
						className: bb.a.EuCookiePolicyContainer
					}, m.a.createElement("section", {
						className: bb.a.EuCookiePolicyBody
					}, m.a.createElement("div", null, m.a.createElement(sb, {
						className: bb.a.EuCookiePolicyText
					}, hb._("Reddit and its partners use cookies and similar technologies to provide you with a better experience.", null, {
						hk: "PLhhw"
					})), m.a.createElement(sb, {
						className: bb.a.EuCookiePolicyText
					}, hb._("By accepting all cookies, you agree to our use of cookies to deliver and maintain our services and site, improve the quality of Reddit, personalize Reddit content and advertising, and measure the effectiveness of advertising.", null, {
						hk: "rCT68"
					})), m.a.createElement(sb, {
						className: bb.a.EuCookiePolicyText
					}, hb._("By rejecting non-essential cookies, Reddit may still use certain cookies to ensure the proper functionality of our platform.", null, {
						hk: "nao6F"
					}), hb._("For more information, please see our {=Cookie Notice} and our {=Privacy Policy} .", [hb._param("=Cookie Notice", m.a.createElement(mb.a, {
						href: "https://www.reddit.com/policies/cookies",
						target: "_blank"
					}, hb._("Cookie Notice", null, {
						hk: "387ZAi"
					}))), hb._param("=Privacy Policy", m.a.createElement(mb.a, {
						href: "https://www.reddit.com/policies/privacy-policy",
						target: "_blank"
					}, hb._("Privacy Policy", null, {
						hk: "2ddMNC"
					})))], {
						hk: "2Rqln2"
					})))), m.a.createElement("section", {
						className: bb.a.EuCookiePolicyOptions
					}, m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(gb, {
						type: "submit"
					}, hb._("Accept all", null, {
						hk: "1tnS6V"
					})))), m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(gb, {
						type: "submit"
					}, hb._("Reject non-essential", null, {
						hk: "M79jf"
					})))))))
				}
			}
			var Ob, Cb = vb;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Ob || (Ob = {}));
			var yb = n("./src/reddit/controls/Typography/index.tsx"),
				Eb = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				xb = n.n(Eb);

			function _b() {
				return (_b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const jb = Qe.a.div("Container", xb.a),
				Pb = Qe.a.img("SideImage", xb.a),
				Sb = Qe.a.div("Main", xb.a),
				kb = Qe.a.div("SubTitle", xb.a),
				Nb = yb.a,
				wb = Qe.a.wrapped(un.m, "PrimaryLinkButton", xb.a),
				Mb = Qe.a.wrapped(hl.a, "CloseIcon", xb.a);
			class Ib extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Bp(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Dp(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: r,
						subTitle: a,
						title: o
					} = this.props;
					return m.a.createElement(jb, {
						key: t,
						style: {
							...r,
							transform: `\n            translateY(${r.y}px)\n            scale(${r.x}, ${r.x})\n          `
						}
					}, m.a.createElement(Mb, {
						onClick: this.props.onClose
					}), m.a.createElement(Pb, {
						srcSet: n
					}), m.a.createElement(Sb, null, m.a.createElement(kb, null, a), m.a.createElement(yb.b, null, o), m.a.createElement(Nb, null, e), m.a.createElement(wb, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, s.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Tb = Object(xe.b)(null, e => ({
					onSignup: () => e(Object(ne.openRegisterModal)())
				}))(Object(Ke.c)(Ib)),
				Ab = `${Rb("subscribe-cap.png")} 1x,\n  ${Rb("subscribe-cap@2x.png")} 2x,`;

			function Rb(e) {
				return `${i.a.assetPath}/img/banner/${e}`
			}
			const Lb = 3;
			var Fb = n("./src/lib/permanentCookieOptions.ts");
			const Db = e => `${e}:1527210000`;
			var Bb = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Gb = n.n(Bb);
			const {
				fbt: Ub
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Hb = Qe.a.div("Icon", Gb.a), qb = () => m.a.createElement(Hb, {
				style: {
					backgroundImage: `url(${i.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Wb = Qe.a.wrapped(un.l, "PrimaryButton", Gb.a), Vb = Qe.a.wrapped(eb, "Bread", Gb.a);
			class zb extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), d.a.set(An.j, Db(Lb), Object(Fb.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Vb, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(qb, null), m.a.createElement(sb, null, Ub._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Ub._param("=User Agreement", m.a.createElement(mb.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Ub._("User Agreement", null, {
						hk: "XS57W"
					}))), Ub._param("=Privacy Policy", m.a.createElement(mb.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Ub._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(Wb, {
						type: "submit"
					}, Ub._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Qb = zb;

			function Zb() {
				return (Zb = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Kb = [],
				Jb = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Xb = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Yb = {
					opacity: Object(ze.spring)(0),
					x: Object(ze.spring)(.6),
					y: Object(ze.spring)(80, Jb)
				},
				$b = Qe.a.wrapped(qp.a, "SnooFacepalm", ab.a),
				eh = Qe.a.wrapped(Wp.a, "SnooHappy", ab.a),
				th = Qe.a.wrapped(Ar.b, "SubredditIcon", ab.a),
				nh = Qe.a.img("CustomIcon", ab.a),
				sh = Qe.a.div("Container", ab.a),
				rh = Qe.a.wrapped(hl.a, "Close", ab.a),
				ah = Qe.a.wrapped(Up.a, "LockIcon", ab.a),
				oh = Qe.a.wrapped(Vp.a, "UnlockIcon", ab.a),
				ih = Qe.a.wrapped(Hp.a, "RemoveIcon", ab.a),
				ch = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(rh, Zb({
					className: "CloseIcon"
				}, e))),
				lh = Qe.a.wrapped(eb, "Bread", ab.a),
				dh = Object(re.c)({
					subredditIcon: Qp.b,
					toastSlices: e => e.toaster
				}),
				uh = Object(xe.b)(dh, e => ({
					dismissToast: t => () => e(Object(ye.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(ye.g)(n))
					}
				}));
			class mh extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => ph(e, this.props.toastSlices), this.getWillEnterStyles = () => Xb, this.getWillLeaveStyles = () => Yb
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(ze.TransitionMotion, {
						defaultStyles: Kb,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(sh, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === zp.b.Custom && void 0 !== t.customToastType) {
							const s = hh[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === zp.b.UappBanner) return m.a.createElement(Qb, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === zp.b.EuCookiePolicy) return m.a.createElement(Cb, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(Dp("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(Bp("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Gp("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === zp.b.AuthError) return m.a.createElement(db, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === zp.b.Modal ? un.l : un.r,
							r = t.kind === zp.b.Modal ? un.o : un.r;
						return m.a.createElement(lh, {
							className: t.kind === zp.b.Modal ? ab.a.mModal : void 0,
							"data-testid": "toaster",
							key: e.key,
							kind: t.kind,
							sendEvent: t.name || t.onDisplay ? () => {
								t.name && this.props.sendEvent(Dp(t.name)), t.onDisplay && t.onDisplay()
							} : void 0,
							style: n
						}, m.a.createElement("div", {
							className: ab.a.ContentWrapper
						}, bh(t, this.props.subredditIcon), t.kind === zp.b.SuccessLockComment && m.a.createElement(ah, null), t.kind === zp.b.SuccessUnlockComment && m.a.createElement(oh, null), m.a.createElement(sb, null, t.text)), m.a.createElement("div", {
							className: ab.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Bp(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(r, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Gp(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(ch, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const ph = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(ze.spring)(1),
							x: Object(ze.spring)(1, Jb),
							y: Object(ze.spring)(0, Jb)
						}
					}))
				},
				bh = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(nh, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case zp.b.Error:
							return m.a.createElement($b, null);
						case zp.b.SuccessEndBroadcast:
							return m.a.createElement(ih, null);
						case zp.b.SuccessAward:
						case zp.b.SuccessCommunity:
						case zp.b.SuccessCommunityGreen:
							return m.a.createElement(eh, null);
						case zp.b.SuccessMod:
							return m.a.createElement(th, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				hh = {
					[zp.a.subscribeCap]: e => m.a.createElement(Tb, _b({
						name: Ob.LoggedOutMaxSubscriptions,
						sideImage: Ab,
						title: s.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: s.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var gh = uh(Object(Ke.c)(mh)),
				fh = n("./src/reddit/featureFlags/profileCollections.ts"),
				vh = n("./src/reddit/helpers/trackers/banners.ts"),
				Oh = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Ch = n.n(Oh);
			var yh = Qe.a.div("Wrapper", Ch.a),
				Eh = n("./src/reddit/components/AlertBanner/index.m.less"),
				xh = n.n(Eh);
			const {
				fbt: _h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), jh = () => m.a.createElement(yh, {
				className: Object(ke.a)(xh.a.wrapper, xh.a.suspended)
			}, m.a.createElement("span", null, _h._("Your account has been permanently suspended from Reddit.", null, {
				hk: "2hzFKt"
			}), " "), _h._("Click {=here} for more info.", [_h._param("=here", m.a.createElement("a", {
				className: xh.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360045734911"
			}, _h._("here", null, {
				hk: "49ZRXB"
			})))], {
				hk: "2jIHMO"
			})), Ph = e => {
				let {
					suspensionDaysLeft: t
				} = e;
				return m.a.createElement(yh, {
					className: Object(ke.a)(xh.a.wrapper, xh.a.suspended)
				}, m.a.createElement("span", null, _h._({
					"*": "Your account has been suspended from Reddit for {number of days} days.",
					_1: "Your account has been suspended from Reddit for 1 day."
				}, [_h._plural(t, "number of days")], {
					hk: "2Bwand"
				}), " "), _h._("Click {=here} for more info.", [_h._param("=here", m.a.createElement("a", {
					className: xh.a.underlineLink,
					href: "https://www.reddithelp.com/hc/en-us/articles/360045308832"
				}, _h._("here", null, {
					hk: "49ZRXB"
				})))], {
					hk: "lV57o"
				}))
			}, Sh = () => m.a.createElement(yh, {
				className: Object(ke.a)(xh.a.wrapper, xh.a.fpr)
			}, m.a.createElement("span", null, _h._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: xh.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, _h._("Learn more", null, {
				hk: "1OTc8q"
			}))), kh = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(yh, {
					className: Object(ke.a)(xh.a.wrapper, xh.a.deprecated)
				}, m.a.createElement("span", null, _h._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [_h._param("update your browser", m.a.createElement(Nh, {
					link: t
				}, _h._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, _h._("If you do not update your browser, we suggest you visit {old reddit} .", [_h._param("old reddit", m.a.createElement("a", {
					className: xh.a.underlineLink,
					href: i.a.oldRedditUrl,
					onClick: n
				}, _h._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, Nh = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: xh.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class wh extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(vh.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(vh.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n,
						suspensionDaysLeft: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(kh, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Sh, null) : n ? s || null != s ? m.a.createElement(Ph, {
						suspensionDaysLeft: s
					}) : m.a.createElement(jh, null) : null
				}
			}
			var Mh = Object(Ke.c)(wh);
			const Ih = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				Th = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				});
			var Ah = n("./src/reddit/components/OfflineBanner/index.m.less"),
				Rh = n.n(Ah);
			const {
				fbt: Lh
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Fh = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(ke.a)(e.className, Rh.a.banner, {
							[Rh.a.online]: e.online,
							[Rh.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: Rh.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: Rh.a.title
					}, e.online ? Lh._("Found the internet!", null, {
						hk: "fMghd"
					}) : Lh._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(Nr.a, {
						className: Rh.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				Dh = n("./src/reddit/components/Upsell/async.ts"),
				Bh = n("./src/reddit/constants/componentSizes.ts"),
				Gh = n("./src/reddit/constants/elementIds.ts"),
				Uh = n("./src/reddit/constants/history.ts"),
				Hh = n("./src/reddit/constants/posts.ts"),
				qh = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Wh = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				Vh = n("./src/reddit/constants/promo.ts"),
				zh = n("./src/reddit/contexts/Promo/index.ts");

			function Qh(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case Vh.a.Completed:
						return s === Vh.a.Shown ? new Map(e.set(n, Vh.a.Completed)) : e;
					case Vh.a.Dismissed:
						return s === Vh.a.Shown ? new Map(e.set(n, Vh.a.Dismissed)) : e;
					case Vh.a.Shown:
						return s ? e : new Map(e.set(n, Vh.a.Shown));
					default:
						throw new Error
				}
			}
			var Zh = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(Qh, new Map), r = u.useCallback(e => s({
						type: Vh.a.Completed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: Vh.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), o = u.useCallback(e => s({
						type: Vh.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: r,
						dismissPromo: a,
						promos: n,
						showPromo: o
					}), [r, a, n, o]);
					return u.createElement(zh.a.Provider, {
						value: i
					}, t)
				},
				Kh = n("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				Jh = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				Xh = n("./src/reddit/helpers/postCollection.ts"),
				Yh = n("./src/reddit/models/Theme/index.ts"),
				$h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				eg = n("./src/reddit/selectors/experiments/survey.ts"),
				tg = n("./src/reddit/selectors/notificationBanner.ts"),
				ng = n("./src/reddit/selectors/onboarding.ts"),
				sg = n("./src/reddit/selectors/posts.ts"),
				rg = n("./src/reddit/components/AppRouter/index.m.less"),
				ag = n.n(rg);

			function og() {
				return (og = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ig = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						location: s,
						...r
					} = e;
					const a = Object(u.useMemo)(() => Object(Kh.a)(s.search), [s.search]);
					return m.a.createElement("div", og({
						className: Object(ke.a)(ag.a.main, {
							[ag.a.mShowingPaddedPinnedDescriptions]: n,
							[ag.a.removeTopPadding]: a
						}, t),
						id: Gh.a
					}, r))
				},
				cg = Object(Le.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...r
					} = e;
					const a = Object($e.a)({
						theme: s,
						...r
					});
					return m.a.createElement("div", og({
						className: Object(ke.a)(ag.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Yh.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Fn.c)(n)}px`
						}
					}, r))
				}),
				lg = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const r = Object(u.useContext)(Re.a);
					return m.a.createElement("div", og({
						className: Object(ke.a)(ag.a.lightboxHeaderWrapper, t, {
							[ag.a.lightboxHeaderWrapperExp]: r
						})
					}, s, {
						ref: n
					}))
				},
				dg = Object(tg.a)(vp.a.EmailCollectionBannerId),
				ug = Object(xe.b)(() => Object(re.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					currentUserId: O.k,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(et.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: O.z,
					isBlockingInterstitialEnabled: $h.b,
					isBlockingInterstitialV2Enabled: $h.c,
					isLoggedIn: O.S,
					isRedditChatEnabled: e => !1 === Object(tl.d)(e),
					isRedditChatTryIframeEnabled: J.l,
					isNpsSurveyEnabled: eg.d,
					isOnboardingQueryParamEnabled: ng.c,
					isSubscriptionsPinned: Mr.c,
					isSuccessfulSurveyEnabled: eg.f,
					isSuspended: O.Z,
					isFPR: O.Q,
					posts: sg.I,
					profileCollectionsEnabled: fh.a,
					showEmailCollectionBanner: e => !Object(qn.P)(e.platform.currentPage) && dg(e),
					signUpModalIsOpen: Object(Fc.c)(Jt.a.REGISTER_MODAL_ID),
					suspensionDaysLeft: O.zb
				}), e => ({
					onClickOutsideOverlay: t => e(Object(p.b)(t)),
					onPinSubscriptions: () => e(Object(He.i)()),
					onPostDismissTrigger: () => e(Object(Oe.l)()),
					onSuccessfulSignupTrigger: () => e(Object(Oe.h)()),
					onUnpinSubscriptions: () => e(Object(He.j)())
				})),
				mg = (e, t) => !(!e.state || !e.state[Uh.b.IsOverlay] || t === e);
			class pg extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = Ae()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Bh.k ? this.props.onUnpinSubscriptions() : !this.props.isLoggedIn && !this.props.isSubscriptionsPinned && e >= Bh.k && this.props.onPinSubscriptions()
					}, k.N), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(qn.y)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								r = `${k.Ob.Post}_${s}`,
								a = t && s && t[r],
								o = a && a.belongsTo.type === Hh.a.PROFILE;
							return !(!a || !Object(Xh.a)(a) || o && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(et.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler);
					const {
						isOnboardingQueryParamEnabled: e,
						isSuccessfulSurveyEnabled: t,
						onSuccessfulSignupTrigger: n
					} = this.props;
					t && !e && n()
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						isNpsSurveyEnabled: t,
						location: n,
						onPostDismissTrigger: s
					} = this.props, r = n.state && n.state[Uh.b.IsOverlay], a = Object(Ge.a)(this.previousLocation, e.location);
					t && r && a && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const o = Object(Ge.a)(this.previousLocation, this.props.location),
						i = r ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === k.Tb.INDEX || t.name === k.Tb.SUBREDDIT && n.subredditName === Yi.b.Popular), r = Object(et.c)(this.props.frontpageSignupVariant), a = Object(et.c)(e.frontpageSignupVariant);
						s || r || !a ? r && !a && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || r || a || o || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), (this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && this.props.signUpModalIsOpen) return;
					const c = mg(e.location, this.previousLocation);
					De.a.write(() => {
						document.body.style.overflow = c ? "hidden" : ""
					})
				}
				componentDidUpdate() {
					this.didCountSurveyTrigger = !1
				}
				render() {
					const {
						connection: e,
						currentPage: t,
						currentUserId: n,
						frontpageSignupVariant: r,
						hasInvalidSession: a,
						isFPR: o,
						isLoggedIn: c,
						isRedditChatEnabled: l,
						isRedditChatTryIframeEnabled: d,
						isSubscriptionsPinned: p,
						isSuspended: b,
						location: h,
						onClickOutsideOverlay: g,
						routes: f,
						showEmailCollectionBanner: v,
						suspensionDaysLeft: O
					} = this.props, {
						isSignupUpsellDisplayed: C,
						isSignupUpsellHidden: y
					} = this.state, E = this.context, x = mg(h, this.previousLocation);
					h.state && h.state[Uh.b.IsOverlay] && !x ? h.state[Uh.b.IsOverlay] = !1 : h.state && (this.previousLocation === h || h.state[Uh.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[Uh.b.CloseLocation] && this.previousLocation.state[Uh.b.CloseLocation] === h.state[Uh.b.CloseLocation] ? h.state[Uh.b.CloseLocation] = {
						...this.previousLocation,
						state: Ie()(this.previousLocation.state, Uh.b.CloseLocation)
					} : h.state[Uh.b.CloseLocation] = this.previousLocation);
					const _ = Object(Ge.a)(this.previousLocation, h),
						j = x || _ ? this.previousLocation : h,
						P = x || _ ? this.previousPage : t,
						S = !(!(P && P.meta && P.meta.name === k.Tb.SEARCH_RESULTS && P && P.queryParams) || P.queryParams[ri.y]),
						N = !(!P || !P.meta || P.meta.name !== k.Tb.MODERATION_PAGES),
						w = Object(qn.y)(P),
						M = this.getIsPostCollection(),
						I = C && !y,
						T = e.showBanner;
					if (a) return s.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					});
					const A = m.a.createElement(hg, {
							browserInfo: E,
							frontpageSignupVariant: r,
							isCommentsPage: w,
							isInline: I,
							isLoggedIn: c,
							isSubscriptionsPinned: p,
							location: j,
							overlayIsOpen: x,
							page: P,
							routes: f,
							showEmailCollectionBanner: v,
							showFPR: o,
							showOffline: T,
							showSuspended: b
						}),
						R = `${i.a.matrixChatUrl}/try?redditUserId=${n}`;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(qn.a.Provider, {
						value: P
					}, m.a.createElement(Ro.c, {
						isOverlayOpen: x
					}, m.a.createElement(Fp.a, {
						forceRedditTheme: S
					}, C && m.a.createElement(Lt, {
						frontpageSignupVariant: r,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(bg, {
						browserInfo: E,
						connection: e,
						isFPR: o,
						isInline: I,
						isSuspended: b,
						showOffline: T,
						suspensionDaysLeft: O,
						location: j
					})), m.a.createElement(qh.a.Provider, {
						value: !1
					}, m.a.createElement(Fp.a, {
						forceRedditTheme: S || N,
						isCommentsPage: w
					}, m.a.createElement(Zh, null, A, m.a.createElement(Dh.b, null), m.a.createElement(Dh.a, null)))))), m.a.createElement(qn.a.Provider, {
						value: t
					}, x && m.a.createElement(qh.a.Provider, {
						value: !0
					}, m.a.createElement(Fp.a, {
						isOverlay: !0
					}, m.a.createElement(gg, {
						browserInfo: E,
						isPostCollection: M,
						location: h,
						onClickOutsideOverlay: g,
						page: t,
						routes: f,
						showEmailCollectionBanner: v,
						showFPR: o,
						showOffline: T,
						showSuspended: b
					}))), m.a.createElement(Fp.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(gh, null), m.a.createElement(Lp.a, null), v && m.a.createElement(qe.a, null), m.a.createElement(Gn, null), m.a.createElement(cr, null), l && m.a.createElement(fp, null), n && d && m.a.createElement("iframe", {
						className: "w-0 h-0",
						src: R,
						"data-testid": "reddit-chat-try-iframe-window"
					})))))
				}
			}
			pg.contextType = Fe.a;
			const bg = Object(Ke.c)(e => {
					const t = Object(qn.ib)(),
						n = Object(Wh.fb)(t),
						s = Object(u.useContext)(Re.a),
						r = Object(u.useMemo)(() => Object(Kh.a)(e.location.search), [e.location.search]),
						{
							browserInfo: a,
							connection: o,
							isFPR: i,
							isInline: c,
							showOffline: l,
							isSuspended: d,
							suspensionDaysLeft: p
						} = e,
						b = {
							browserInfo: a,
							showFPR: i,
							showSuspended: d,
							suspensionDaysLeft: p,
							showOffline: l,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(Mh, b), n && !r && m.a.createElement(hp, {
						className: Object(ke.a)(ag.a.header, Ih(ag.a, b), {
							"relative w-100": c
						}, "flex-grow-0 flex-shrink-0 top-0 left-0 right-0 fixed z-[80]")
					}), m.a.createElement(Fh, {
						className: Object(ke.a)(ag.a.offlineBanner, Ih(ag.a, b)),
						online: o.online,
						showBanner: o.showBanner
					}))
				}),
				hg = Object(Ke.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = Ie()(e, "key"),
							s = Ie()(t, "key");
						return we()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = Ie()(e, ["key", "locationState"]),
								s = Ie()(t, ["key", "locationState"]);
							return we()(n, s)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: n,
							overlayIsOpen: s,
							isInline: r,
							isSubscriptionsPinned: a,
							showEmailCollectionBanner: o
						} = this.props;
						return m.a.createElement(ig, {
							"aria-hidden": s,
							className: Object(ke.a)(Ih(ag.a, this.props), {
								[ag.a.withUpsell]: !!e,
								[ag.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: a,
							location: t
						}, a && m.a.createElement(Rp, {
							className: Object(ke.a)(ag.a.pinnedSubscriptions, {
								...Ih(ag.a, this.props)
							}),
							isLoggedIn: this.props.isLoggedIn,
							"data-redditstyle": !0
						}), m.a.createElement(_e.f, {
							location: t
						}, n), o && m.a.createElement("div", {
							className: Object(ke.a)(ag.a.bottomSpacer, Th(ag.a, this.props))
						}))
					}
				});
			class gg extends m.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => {
						this.setState({
							overlayScrollContainerEl: e
						})
					}, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(Ue.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[Uh.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Jh.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(Be.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Jh.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, r = !(!t || !t.meta || t.meta.name === k.Tb.SUBREDDIT_CREATION), a = e;
					return m.a.createElement(cg, {
						className: Object(ke.a)(Ih(ag.a, this.props), {
							[ag.a.mIsCommentsLightbox]: r,
							[ag.a.mIsLargeCommentsLightbox]: a
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(ke.a)(ag.a.overlayWrapper, Ih(ag.a, this.props))
					}, m.a.createElement("div", {
						className: Object(ke.a)(ag.a.overlayScrollContainer, {
							[ag.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Gh.e,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, r && m.a.createElement(lg, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(ke.a)(Ih(ag.a, this.props), {
							[ag.a.mIsLargeCommentsLightbox]: a
						}),
						tabIndex: -1
					}, m.a.createElement(gp.a, {
						page: t
					})), m.a.createElement(_e.f, null, n), m.a.createElement("div", {
						className: Object(ke.a)(ag.a.bottomSpacer, Th(ag.a, this.props))
					}))))
				}
			}
			var fg = ug(Object(Ke.c)(pg)),
				vg = n("./src/reddit/contexts/User/index.tsx");

			function Og(e) {
				return m.a.createElement(vg.b, null, e.children)
			}
			var Cg = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				yg = n("./src/reddit/constants/shortcuts.ts"),
				Eg = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				xg = n.n(Eg);
			var _g = e => {
				let {
					children: t
				} = e;
				return m.a.createElement("div", {
					className: xg.a.shortcutDiv,
					id: yg.b,
					tabIndex: -1
				}, m.a.Children.only(t))
			};
			let jg = [];
			const Pg = "https://w3-reporting.reddit.com/policy";
			let Sg = 1;
			const kg = !1;
			const Ng = kg ? Promise.resolve() : async function() {
				if (kg) return;
				const e = await fetch(Pg, {
						method: "HEAD"
					}),
					t = e.headers.get("report-to"),
					n = e.headers.get("x-reddit-w3reporting");
				if (t) try {
					const e = JSON.parse(`[${t}]`).find(e => {
						let {
							group: t
						} = e;
						return "w3-reporting" === t
					}).endpoints.map(e => e.url);
					e.length > 0 && (jg = e)
				} catch {}
				if (n) try {
					const e = JSON.parse(n).success_fraction;
					"number" == typeof e && (Sg = e)
				} catch {}
			}();

			function wg(e, t, n) {
				let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "gauge";
				kg ? console.error("w3-reporting is client-side only") : Mg.push({
					name: e,
					value: t,
					type: s,
					labels: n,
					createdAt: Date.now()
				})
			}
			let Mg = [];
			async function Ig(e) {
				if (0 === e.length || 0 === jg.length) return;
				if (Math.random() > Sg) return;
				await Ng;
				const t = e.map(Rg).filter(e => e.age < 3e5);
				try {
					const e = await fetch(Ag(), {
						method: "POST",
						body: JSON.stringify(t),
						mode: "no-cors"
					});
					await e.text()
				} catch (n) {
					console.error(null == n ? void 0 : n.stack)
				}
			}
			setInterval(() => {
				Ig([...Mg]), Mg = []
			}, 5e3), kg || document.addEventListener("visibilitychange", () => {
				"hidden" === document.visibilityState && (Ig([...Mg]), Mg = [])
			});
			let Tg = -1;
			const Ag = () => (Tg = (Tg + 1) % jg.length, jg[Tg]);

			function Rg(e) {
				const {
					name: t,
					value: n,
					type: s,
					labels: r,
					createdAt: a
				} = e;
				return {
					age: Date.now() - a,
					type: "reddit-w3reporting",
					url: "",
					user_agent: navigator.userAgent,
					body: {
						sampling_fraction: 1,
						type: s,
						name: t,
						value: n,
						labels: null != r ? r : {}
					}
				}
			}

			function Lg() {
				const e = Object(xe.e)(e => {
					const t = Object(In.b)(e);
					return t && Object(vn.v)(t) || "unknown"
				});
				return Object(u.useEffect)(() => {
					(async () => {
						const {
							onCLS: t,
							onFID: s,
							onINP: r,
							onLCP: a,
							onTTFB: o
						} = await n.e("webvitals").then(n.bind(null, "./node_modules/web-vitals/dist/web-vitals.js"));
						t(t => {
							wg("desktop2x_perf_cumulative_layout_shift", t.value, {
								page_type: e
							}, "histogram")
						}), s(t => {
							wg("desktop2x_perf_first_input_delay_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}), r(t => {
							wg("desktop2x_perf_interaction_next_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), a(t => {
							wg("desktop2x_perf_largest_contentful_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), o(t => {
							wg("desktop2x_perf_time_to_first_byte_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						})
					})()
				}, []), null
			}
			var Fg = n("./src/reddit/components/Header/Sparse.tsx"),
				Dg = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Bg = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Gg = n.n(Bg);
			const {
				fbt: Ug
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Hg = Object(re.c)({
				showError: Rn.d.showVerboseErrors
			}), qg = Object(xe.b)(Hg)(e => {
				const t = Object(u.useContext)(Re.a);
				return m.a.createElement(qh.a.Provider, {
					value: !1
				}, m.a.createElement(Fp.b, {
					subredditName: ""
				}, m.a.createElement("div", null, m.a.createElement(Fg.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), m.a.createElement("div", {
					className: Gg.a.container
				}, m.a.createElement("div", {
					className: Gg.a.mainContent
				}, m.a.createElement(Dg.a, {
					className: Gg.a.dizzySnoo
				}), m.a.createElement("h3", {
					className: Gg.a.title
				}, Ug._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), m.a.createElement("div", {
					className: Gg.a.subTitle
				}, Ug._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), m.a.createElement(un.l, {
					onClick: () => window.location.reload(!0)
				}, Ug._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: Gg.a.subTitle
				}, e.error.message), m.a.createElement("pre", null, m.a.createElement("code", null, e.error.stack)))), m.a.createElement("div", {
					className: Object(ke.a)(Gg.a.topImageContainer, {
						[Gg.a.topImageContainerExp]: t
					})
				}, m.a.createElement("img", {
					className: Gg.a.image,
					src: `${i.a.assetPath}/img/error/star_pattern.png`
				})), m.a.createElement("div", {
					className: Gg.a.bottomImageContainer
				}, m.a.createElement("img", {
					className: Gg.a.image,
					src: `${i.a.assetPath}/img/error/half_planet.png`
				}))))))
			});

			function Wg() {
				return (Wg = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Vg = Object(re.c)({
					isNavbarLikeMwebEnabled: Vl.a,
					isNightmode: O.fb,
					theme: e => e.themes.current
				}),
				zg = Object(xe.b)(Vg, {})(e => {
					let {
						children: t,
						theme: n,
						isNightmode: s,
						isNavbarLikeMwebEnabled: r
					} = e;
					const a = Object($e.a)({
						theme: n
					});
					return Object(u.useEffect)(() => {
						s ? (document.documentElement.classList.remove("theme-light"), document.documentElement.classList.add("theme-dark")) : (document.documentElement.classList.remove("theme-dark"), document.documentElement.classList.add("theme-light"))
					}, [s]), m.a.createElement(Re.a.Provider, {
						value: r
					}, m.a.createElement("div", {
						className: Object(ke.a)(Pe.a.container, {
							[Pe.a.containerExp]: r
						}, "theme-beta"),
						style: {
							"--background": a.body,
							"--canvas": a.canvas
						}
					}, t))
				});

			function Qg(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return m.a.createElement(Ke.a, null, m.a.createElement(zg, null, m.a.createElement(Og, null, m.a.createElement(Se.a, null), m.a.createElement(Cg.a, null), m.a.createElement(_g, null, m.a.createElement(t, null, m.a.createElement(_e.d, {
						component: Zg(n)
					}))), m.a.createElement(Lg, null))))
				}
				return m.a.createElement(qg, {
					error: e.error
				})
			}
			const Zg = e => t => m.a.createElement(fg, Wg({
					routes: e
				}, t)),
				Kg = 1e3;
			class Jg extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = Ae()(() => Object(Ln.Jb)(this.props.storageKey, this.props.value), Kg)
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
			Jg.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Xg = Object(re.a)(O.S, e => ({
				storageKey: na.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var Yg = Object(xe.b)(Xg)(Jg);
			var $g = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(Yg, null)),
				ef = n("./src/reddit/constants/headers.ts"),
				tf = n("./src/reddit/constants/jsapiEvents.ts"),
				nf = n("./src/reddit/constants/screenWidths.ts"),
				sf = n("./src/reddit/contexts/AdminEvents.ts"),
				rf = n("./src/reddit/contexts/ApiContext.tsx"),
				af = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				of = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const cf = () => e => t => e(t);
			var lf = n("./src/lib/safeBadgeUpdate.ts");

			function df(e) {
				const t = Object(ym.h)(e);
				Object(lf.a)(t)
			}
			var uf = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== of .b && n.type !== of .d || df(e.getState()), s
				} : cf,
				mf = n("./node_modules/brcast/dist/brcast.es.js"),
				pf = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var bf = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(mf.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(pf.b)(s) || Object(O.P)(s) || Object(O.O)(s)) && (e = !0, Object(H.e)(t)), s => r => {
								const a = s(r),
									o = n.getState();
								if (!Object(pf.b)(o)) {
									const n = Object(O.P)(o) || Object(O.O)(o);
									e && !n ? (e = !1, Object(H.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(H.e)(t), e = !0)
								}
								return a
							}
						}
					}
				} : () => ({
					broadcaster: Object(mf.a)([]),
					middleware: () => e => t => e(t)
				}),
				hf = n("./node_modules/lodash/debounce.js"),
				gf = n.n(hf),
				ff = n("./src/lib/domUtils/index.ts"),
				vf = n("./src/reddit/actions/adsSignals.ts");
			const Of = 30 * k.qb;
			let Cf = Date.now();
			const yf = () => {
					Cf = Date.now()
				},
				Ef = !!Object(ff.f)() && {
					passive: !0
				};
			window.addEventListener("click", yf, !1), window.addEventListener("wheel", gf()(yf, 250), Ef), window.addEventListener("mousemove", gf()(yf, 250), Ef), window.addEventListener("keydown", gf()(yf, 250), Ef);
			var xf = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Cf >= Of ? (e.dispatch(ve.h()), e.dispatch(vf.b()), yf()) : yf()
					})), e => t => e(t)
				},
				_f = n("./src/reddit/constants/preferences.ts"),
				jf = n("./src/reddit/helpers/cookies/index.ts");
			const Pf = new Set([ol.g, ol.i, Ce.b, ol.d, He.d, He.e, ol.q]);
			var Sf = e => t => n => {
					const s = t(n);
					if (Pf.has(n.type)) {
						const t = e.getState().user,
							n = Go()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", _f.b, _f.c]);
						Object(jf.a)({
							prefs: n
						})
					}
					return s
				},
				kf = n("./src/reddit/actions/tabBadging.ts"),
				Nf = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				wf = n("./src/reddit/selectors/removedPosts.ts"),
				Mf = n("./src/reddit/models/Subreddit/index.ts");
			const If = (e, t) => ((e, t) => {
					var n, s, r, a;
					const o = "subreddit" === (null === (n = null == t ? void 0 : t.belongsTo) || void 0 === n ? void 0 : n.type) ? null === (s = null == t ? void 0 : t.belongsTo) || void 0 === s ? void 0 : s.id : null;
					if (!o) return !1;
					const i = null === (a = null === (r = e.subreddits) || void 0 === r ? void 0 : r.models) || void 0 === a ? void 0 : a[o];
					return !!i && ((null == i ? void 0 : i.type) !== Mf.g.Private && (null == i || !i.isQuarantined))
				})(e, t) && Object(wf.b)(e) && (e => !!(e && e >= 5))(null == t ? void 0 : t.numComments) && (e => {
					return e > new Date(2016, 0, 1).getTime()
				})(t.created),
				Tf = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Af = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(In.r)(e), r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, a = Tf.has(r), o = Object(qn.m)(e, {
						pageLayer: n
					}), i = !(!o || !o.hideFromRobots), c = Rf(e), l = s === k.Tb.COMMENTS || s === k.Tb.COLLECTION_COMMENTS, d = !(!n || !n.urlParams.partialCommentId), u = s === k.Tb.SEARCH_RESULTS || l && d, m = Object(wf.d)(e) && !(e => {
						var t, n, s;
						const {
							currentPage: r
						} = e.platform;
						if (!Object(wf.d)(e)) return !1;
						const a = null === (t = null == r ? void 0 : r.urlParams) || void 0 === t ? void 0 : t.partialPostId,
							o = a && Object(K.y)(a),
							i = o && (null === (s = null === (n = e.posts) || void 0 === n ? void 0 : n.models) || void 0 === s ? void 0 : s[o]);
						return !!i && If(e, i)
					})(e) || u;
					return i || a || c || m ? u ? "noindex" : "noindex,nofollow" : null
				},
				Rf = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(O.h)(e, s);
						n = !!Object(Nf.a)(t, !1, s)
					}
					return n
				};
			var Lf = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const Ff = "theme-color",
				Df = `meta[name="${Ff}"]`;

			function Bf(e) {
				return e ? Lf.b.body : Lf.a.body
			}
			var Gf = "undefined" != typeof document ? e => t => n => {
				const s = t(n);
				if (n.type === he.g) {
					const t = e.getState(),
						s = Object(O.R)(t),
						{
							meta: r
						} = n.payload;
					s ? ((e, t) => {
						const n = Object(ym.j)(e);
						Object(kf.c)(n, t)
					})(t, r.title) : De.a.write(() => {
						document.title = r.title, ((e, t) => {
							if (t.head) {
								let n = t.querySelector("meta[name='robots']");
								const s = Af(e),
									{
										head: r
									} = t;
								s ? (n || ((n = t.createElement("meta")).name = "robots", r.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : r.removeChild && r.removeChild(n))
							}
						})(t, document)
					})
				} else if (n.type === ol.i) {
					! function(e) {
						De.a.write(() => {
							const t = document.head.querySelector(Df);
							if (t) {
								const n = Object(O.fb)(e);
								t.content = Bf(n)
							}
						})
					}(e.getState())
				}
				return s
			} : cf;

			function Uf(e) {
				return Object(J.e)(e) && function(e) {
					return Object.values(e.posts.models).some(t => void 0 === Object(tl.a)(e, t.id))
				}(e)
			}
			const Hf = (e => t => n => s => {
				const r = t.getState(),
					a = n(s),
					o = t.getState();
				for (const n of e) n.stateHasChanged(r, o) && n.handler(t, r);
				return a
			})([{
				stateHasChanged: function(e, t) {
					return e.posts.models !== t.posts.models
				},
				handler: function(e) {
					Uf(e.getState()) && e.dispatch(Y)
				}
			}]);
			var qf = n("./src/reddit/helpers/survey/index.ts");
			var Wf = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(qf.a).filter(t => t === e).length)(t.type) && Object(Ln.Y)(qf.a[t.type]), e(t)) : cf;
			const Vf = 5 * k.qb;
			var zf = e => {
					const t = Ae()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(ve.g())
					}, Vf);
					let n, s;
					const r = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const r = new Date(n.expires),
								a = s + Math.floor(.8 * (r.getTime() - s));
							Date.now() > a && t && t()
						},
						a = e => {
							s = Date.now();
							const r = new Date(e.expires).getTime() - s,
								a = .8 + .1 * Math.random(),
								o = Math.min(Math.floor(a * e.expiresIn * 1e3), Math.floor(a * r));
							n = setTimeout(t, o)
						},
						o = e.getState();
					return o.user.session && a(o.user.session), window.addEventListener("focus", r), window.addEventListener("touchend", r), document.body.addEventListener("mouseenter", r), e => t => (t.type !== ve.a && t.type !== ve.b && t.type !== ve.c && t.type !== ve.e || a(t.payload), t.type === ve.d && (clearTimeout(n), n = null), e(t))
				},
				Qf = n("./src/reddit/singleton/tracing/index.ts");
			var Zf = e => e => t => {
					const n = () => e(t);
					return Qf.b.isEnabled ? Qf.b.recordLocalSpan(t.type, n) : e(t)
				},
				Kf = n("./src/reddit/actions/frontpage/constants.ts"),
				Jf = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				Xf = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Yf = n("./src/reddit/actions/pages/profilePosts.ts"),
				$f = n("./src/reddit/actions/pages/search/index.ts"),
				ev = n("./src/reddit/actions/pages/subreddit.ts"),
				tv = n("./src/reddit/actions/tracking.ts"),
				nv = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				sv = n("./src/reddit/helpers/history/index.ts"),
				rv = n("./src/reddit/helpers/trackers/commentList.ts"),
				av = n("./src/reddit/helpers/trackers/postList.ts"),
				ov = n("./src/reddit/helpers/routeKey/index.ts");
			var iv = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(tv.c({
							routeKey: t
						}))
					};
					if (n.type === he.b) {
						const s = e.getState(),
							r = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(Zr.I)(s, r) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						o.trigger("pageview", {
							...Go()(n.payload.location, "pathname", "search", "hash"),
							subreddit: r,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(ov.b)(c, s, Object(nv.a)(s));
							if (e && U.c.has(e)) {
								const t = U.c.end(e);
								!Object(In.i)(s) && Object(sv.b)(Uh.b.IsOverlay) || Object(li.j)(c, s, W.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(nv.a)(s, l),
							u = Object(ov.b)(l, s, d);
						if (!u) return t(n);
						U.c.start(u)
					}
					const r = t(n);
					switch (n.type) {
						case Kf.c:
						case Xf.b:
						case Xf.e:
						case Yf.PROFILE_POSTS_LOADED:
						case Jf.e:
						case ev.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case $f.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case Kf.g:
						case Wa.i:
						case Yf.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: r
							} = n.payload;
							s(t);
							const a = e.getState();
							if (r.length) break;
							if (void 0 === a.listings.postOrder.endMarkers[t]) break;
							av.l(a, t);
							break
						}
						case Jf.b: {
							const {
								key: t,
								commentIds: r
							} = n.payload;
							if (s(t), r.length) break;
							const a = e.getState();
							if (void 0 === a.profileCommentsPage.endMarkers[t]) break;
							rv.a(a, t);
							break
						}
						case Wo.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return r
				},
				cv = n("./src/reddit/helpers/datadome.ts"),
				lv = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				dv = n("./src/reddit/helpers/trackers/global.ts");
			let uv = null;
			const mv = () => {
				uv && window.clearTimeout(uv), uv = null
			};
			var pv = e => {
					uv = window.setTimeout(() => {
						mv(), Object(U.a)(Object(dv.e)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", mv)
				},
				bv = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				hv = n("./src/reddit/actions/connection/constants.ts");
			const gv = Object(h.a)(hv.b),
				fv = Object(h.a)(hv.a),
				vv = Object(h.a)(hv.c);
			var Ov = n("./src/reddit/actions/meta.ts");
			const Cv = (e, t) => Object(U.a)({
					...vn.o(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(vn.d)(e, {
						type: t
					})
				}),
				yv = "(display-mode: minimal-ui)";
			const Ev = 3 * k.Yb;

			function xv(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(yv).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(Ov.i)());
				const t = window.matchMedia(yv);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(Ov.i)()) : e.dispatch(Object(Ov.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						df(t)
					}, 1e3), Cv(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(gv()), setTimeout(() => e.dispatch(vv()), Ev)
				}), window.addEventListener("offline", () => e.dispatch(fv()))
			}
			const _v = (e, t) => {
				if (!e) return;
				const n = (d.a.get(An.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						r = {
							name: An.g,
							value: s,
							cookieOptions: Object(Fb.a)(),
							cookieContext: t
						};
					Object(ub.c)(r)
				}
			};
			var jv = n("./src/reddit/layout/page/Listing/index.tsx"),
				Pv = n("./src/reddit/reducers/index.ts");
			var Sv = n("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				kv = n("./src/reddit/selectors/experiments/index.ts"),
				Nv = n("./src/reddit/selectors/experiments/utils.ts");
			const wv = e => !!Object(Nv.a)((e => Object(uc.c)(e, {
					experimentEligibilitySelector: kv.f,
					experimentName: Hn.Kc
				}))(e)),
				Mv = {
					displayDelay: 15,
					displayOnRoutes: [k.Tb.SUBREDDIT, k.Tb.COMMENTS],
					experimentName: Hn.he,
					experimentVariant: Hn.me.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Iv = e => {
					const {
						base_url: t
					} = Object(vn.bb)(e), n = Object(In.b)(e), s = n && n.urlParams.partialPostId, r = n && n.urlParams.subredditName;
					return {
						...t && {
							rbl: t
						},
						...r && {
							s: r
						},
						...s && {
							p: s
						}
					}
				},
				Tv = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(Mv, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(Mv)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(Mv, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(Mv, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(uc.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: uc.a
							}) === s
						})(Mv, e)) return {
						displayDelay: Mv.displayDelay,
						externalVars: Iv(e)
					}
				};
			var Av = n("./src/reddit/singleton/EventSystem.ts"),
				Rv = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				Lv = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				Fv = n("./src/reddit/reducers/features/categories/index.ts"),
				Dv = n("./src/lib/sentry/index.ts");
			const Bv = () => window.matchMedia("(prefers-color-scheme: dark)").matches,
				Gv = (e, t) => {
					const n = e();
					if ((e => Object(O.fb)(e) !== Bv())(n) && (e => {
							!Object(O.S)(e) && Object(qa.a)(e, {
								rate: 1
							}) && Object(U.a)({
								...vn.o(e),
								source: "global",
								noun: "theme_os_mismatch",
								action: "fail"
							})
						})(n), !Object(Jd.a)(n)) return;
					const s = Bv();
					s !== Object(O.fb)(n) && t(Object(ol.y)(s)), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", n => {
						n.matches !== Object(O.fb)(e()) && t(Object(ol.y)(n.matches))
					})
				};
			var Uv = n("./src/reddit/actions/global/constants.ts");
			Object(sc.a)({
				features: {
					categories: Fv.a
				}
			});
			const Hv = Object(h.a)(Uv.a),
				qv = /^\/account\/magic_link\/landing\/[^\/]+\/?$/,
				Wv = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return qv.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(ne.openD2xOnboardingModal)())
				};
			var Vv = n("./src/reddit/actions/notificationsInbox/index.ts"),
				zv = n("./src/reddit/actions/onboarding/index.ts"),
				Qv = n("./src/reddit/constants/countrySites.ts");
			const Zv = Qv.b ? `${Qv.a}/${Qv.b}` : `${Qv.a}`,
				Kv = (e, t) => {
					return !!Object(ca.e)(e) && !(t && !Object(ca.d)(t))
				},
				Jv = e => e.startsWith("/r/") ? e.replace("/r/", `/${Zv}/r/`) : e;
			var Xv = n("./src/reddit/selectors/experiments/countrySites.ts");
			var Yv = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts");
			Object(a.e)(a.b.EntryPointStart);
			const $v = Object(B.a)({
					actionDispatchers: {
						loidReceived: Ee.q,
						sessionTrackerReceived: Ee.x
					},
					authHeaders: {
						[ef.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						loidReceived: Ee.b,
						sessionTrackerReceived: Ee.j,
						userAuthenticated: ve.c,
						userLoggedOut: ve.d,
						userReauthenticated: ve.e,
						headersReceived: V.a
					},
					onBeforeRequestFactory: bv.a,
					statsAppName: k.o.Redesign
				}),
				eO = Object(G.a)($v.apiContext),
				tO = Object(G.a)($v.apiContext, i.a.gqlRealtimeUrl),
				nO = Object(G.a)($v.apiContext, i.a.gqlRealtime2Url),
				sO = bf();
			let rO;
			Object(I.a)({
				reducerMap: Pv.a,
				routes: Cm,
				apiContext: $v.apiContext,
				gqlContext: eO.gqlContext,
				gqlRealtime2Context: nO.gqlContext,
				appFactory: (e, t) => m.a.createElement(sf.a.Provider, {
					value: sO.broadcaster
				}, m.a.createElement(rf.a.Provider, {
					value: {
						apiContext: $v.apiContext,
						gqlContext: eO.gqlContext,
						gqlRealtime2Context: nO.gqlContext
					}
				}, m.a.createElement(af.b, null, m.a.createElement(Qg, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement($g, null)))),
				appName: k.o.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const n = rO;
						if (!n) return;
						n.dispatch(Object(he.m)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(he.l)())
							}
						}))
					}
				}),
				customMiddleware: [j.a.withExtraArgument({
					routes: Cm,
					apiContext: $v.apiContext,
					gqlContext: eO.gqlContext,
					gqlRealtimeContext: tO.gqlContext,
					gqlRealtime2Context: nO.gqlContext
				}), sO.middleware, xf, $v.middleware, eO.middleware, nO.middleware, zf, Sf, Hf, Zf, iv, Gf, Wf, Ud.a, uf, e => t => n => {
					let s, r;
					if (!Object(Xv.b)(e.getState()) || !n.payload) return t(n);
					r = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const a = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!Kv(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.belongsTo.id,
									t = Object(ca.d)(e);
								(n || t) && (r.permalink = r.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${Zv}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, r)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!Kv(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.subredditId,
									t = Object(ca.d)(e);
								(n || t) && (r.permalink = Jv(r.permalink))
							}
							return t
						})(e.getState(), n.payload.comments, r))
					} catch (o) {
						n.payload = {
							...a
						}
					}
					return t(n)
				}, e => t => n => {
					if (!Object(Xv.b)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === g.e ? n.payload = ((e, t) => {
							if (!Kv(e, t.name)) return t;
							const n = Object(ca.d)(t.id);
							if (t.name || n) {
								const e = Jv(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!Kv(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(ca.d)(s.id),
									r = Object(ca.d)(s.name);
								if (e || r) {
									const e = Jv(s.url),
										r = {
											...s,
											url: e
										};
									t[n] = r
								}
							}
							return t
						})(e.getState(), n.payload.subreddits))
					} catch (r) {
						n.payload = {
							...s
						}
					}
					return t(n)
				}],
				modifyInitialData: e => {
					let {
						initialData: t,
						browserHistory: n
					} = e;
					const s = t.platform.currentPage ? t.platform.currentPage.key : "";
					if (s) {
						const e = n.location.key;
						t.platform.currentPage && (t.platform.currentPage.key = e);
						for (const n of ["referrers", "metas"]) Object.keys(t.platform[n]).length && (t.platform[n] = {
							[e]: t.platform[n][s]
						})
					}
					return t
				},
				staticPages: {
					loading: m.a.createElement(jv.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: e => {
					let {
						browserHistory: t,
						routes: n,
						store: s
					} = e;
					window.addEventListener("message", e => {
						const t = i.a.mediaUrl;
						e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || s.dispatch(Object(le.j)({
							height: e.data.height || 0,
							isDeleted: e.data.isDeleted || !1,
							postId: `t3_${e.data.id36}`
						}))
					}), xv(s);
					const a = s.getState();
					s.dispatch(Object(V.b)({
							headers: {
								[r.a]: "1"
							}
						})), Object(H.d)("enabled" === Object(uc.c)(s.getState(), {
							experimentEligibilitySelector: uc.a,
							experimentName: Hn.Wf,
							expEventOverride: !1
						})), Object(H.c)("enabled" === Object(uc.c)(s.getState(), {
							experimentEligibilitySelector: uc.a,
							experimentName: Hn.Yf
						})), Object(H.h)("enabled" === Object(uc.c)(s.getState(), {
							experimentEligibilitySelector: uc.a,
							experimentName: Hn.Xf
						})), Object(H.f)((e => Object(uc.c)(e, {
							experimentEligibilitySelector: uc.a,
							experimentName: Hn.Cb
						}) === Hn.dd.Enabled)(a)), Object(H.g)(eO.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(dv.a)("tab_closed")(e),
								n = q.g(t),
								r = Object(Rv.a)(n),
								a = Object(Lv.b)(r);
							Object(D.b)("sendV2EventsData", {
								data: r,
								headers: a
							})
						}),
						function(e, t) {
							const n = String(e.split("/")[1]).toLowerCase(),
								s = "r" === n && Object(Kh.a)(t);
							return "framedgild" === n || "framedmodal" === n || s
						}(t.location.pathname, t.location.search) || s.dispatch(Object(he.i)());
					const o = Object(O.fb)(s.getState());
					s.dispatch(Object(Ce.c)({
						nightmode: o
					}));
					const l = (e => e.tracing.traceId)(s.getState());
					if (l && (e => Object(uc.c)(e, {
							experimentEligibilitySelector: uc.a,
							experimentName: Hn.H
						}) === Hn.S.Enabled)(s.getState())) {
						Qf.b.enableTracing(!0);
						const e = Qf.b.createTraceFromId(l);
						Qf.b.setParent(e)
					}
					s.dispatch(Object(he.j)(n));
					t.listen((e, t) => {
						const r = Object(A.a)(Object(c.e)(e), n, s.getState());
						s.dispatch(Object(he.k)(e, t, r))
					});
					const {
						currentPage: d
					} = a.platform;
					if (d) {
						const e = [ri.k];
						if (Object(In.j)(a) && e.push(ri.f), e.length > 0) {
							const t = Object(w.a)(d.url, e);
							t !== d.url && s.dispatch(Object(p.c)(t))
						}
					}
					return Wn.a.initialize(a), {
						localStorageData: Object(Ln.G)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: r,
						serverDocumentLength: c,
						store: l,
						localStorageData: d
					} = e;
					var u, m;
					rO = l;
					t.listen((e, t) => {
						const n = l.getState(),
							{
								urlParams: s,
								queryParams: r
							} = n.platform.currentPage,
							a = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: r
							},
							o = s.subredditName,
							i = Object(Zr.I)(n, o) || "";
						if (_v(i, {
								country: n.meta.country
							}), i) {
							l.dispatch(C(i, o));
							const e = Object(In.e)(n);
							e && l.dispatch(y(e))
						}
						Av.a.publish(tf.c, a, document)
					});
					const p = l.getState(),
						h = Object(Ud.b)();
					l.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(E(n)), t(x(Array.from(s)))
					})(h));
					const g = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						f = Object(Zr.I)(p, g) || "";
					if (g) {
						l.dispatch(C(f, g));
						const e = Object(In.e)(p);
						e && l.dispatch(y(e))
					}
					const v = Object(Zr.I)(p, g) || "",
						j = (p.subreddits.about[v] || {}).advertiserCategory;
					o.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: p.user.account ? p.user.account.id : p.user.loid.loid
						}
					}), o.trigger("pageview", {
						subreddit: g,
						advertiserCategory: j
					}), l.dispatch((e => async (t, n) => {
						const s = n();
						s.user.loid.loid || s.meta.isBot || Dv.c.withScope(e => {
							Object(Dv.a)(e, {
								serverLogging: !1
							}), Dv.c.captureMessage("User has no LOID set")
						});
						const {
							localStorageData: r
						} = e;
						r && t(Hv(r)), Gv(n, t)
					})({
						localStorageData: d
					}));
					const I = Object(ng.c)(p);
					I && (l.dispatch(pe()), history.replaceState(history.state, "", Object(w.a)(window.location.href, [ri.C]))), l.dispatch(Wv());
					const A = Object(In.q)(p),
						B = null == A ? void 0 : A[ri.u];
					B && (history.replaceState(history.state, "", Object(w.a)(window.location.href, [ri.u])), I || l.dispatch(Object(T.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/changeUsername.ts")).then(e => e.openWelcomeBackModalIfNeeded))())), (null == A ? void 0 : A[ri.A]) && (l.dispatch(Object(T.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/login.ts")).then(e => e.openLoginModal))()), history.replaceState(history.state, "", Object(w.a)(window.location.href, [ri.A]))), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: r
							} = e.platform,
							o = (r.urlParams.subredditName || "").toLowerCase(),
							i = Object(Zr.I)(e, o) || "";
						if (Object(D.a)(), _v(i, {
								country: e.meta.country
							}), r && r.meta) {
							const o = r.meta.name;
							if (Object(U.b)(k.o.Redesign, {
									page: o,
									type: "rum"
								}), Object(M.c)(e.meta.userAgent) && window.innerWidth > nf.b) {
								const t = Object(a.f)(c);
								R.a && R.a.timing && Qf.b.isEnabled && (Qf.b.recordPerformanceTimings(`${o}_time_to_first_byte`, R.a.timing.fetchStart, R.a.timing.responseStart), Qf.b.recordPerformanceTimings(`${o}_time_to_interactive`, R.a.timing.fetchStart, R.a.timing.domInteractive));
								const n = [Object(cv.a)()],
									s = !0;
								if (Object(In.g)(e)) {
									const t = Object(lv.a)(e);
									n.push(Object(lv.c)(t))
								}
								const r = {
									isLoggedIn: Object(O.S)(e),
									name: o,
									statsdPathsForExperiments: n
								};
								Object(a.g)(r, t, s)
							}
							const i = R.a.timing.domInteractive - R.a.timing.navigationStart;
							Object(li.j)(r.routeMatch, l.getState(), W.TimerType.Initial, i, r.urlParams);
							const d = Object(N.a)(window.location.href);
							d && d.get(ri.b) && history.replaceState(history.state, "", Object(w.a)(window.location.href, [ri.b])), Object(F.a)(d.get(ri.M)) && l.dispatch(Object(ye.f)({
								kind: zp.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), d.get(ri.N) && (l.dispatch(Object(te.a)(d.get(ri.N))), history.replaceState(history.state, "", Object(w.a)(window.location.href, [ri.N])));
							let u = !1;
							const m = Object(O.V)(e);
							(Object(sv.b)(Uh.b.JustLoggedIn) || m) && (l.dispatch(Object(ye.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object(sv.c)(Uh.b.JustLoggedIn), history.replaceState(history.state, "", Object(w.a)(window.location.href, [ri.t]))), Object(sv.b)(Uh.b.JustLoggedOut) && (u = !0, Object(sv.c)(Uh.b.JustLoggedOut)), ue().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return l.dispatch(t())
							});
							const p = () => l.dispatch(Object(zv.openReonboardingModalIfNeeded)());
							let b;
							ie(e) && (b = () => {
								const {
									dispatch: e
								} = l;
								t.listen(() => e(ce())), e(ce())
							});
							const h = wv(e);
							if (!B)
								if (h || !1 === Ln.Z()) h && b && b(), p();
								else {
									const t = () => {
											b && b(), p()
										},
										n = e => {
											ue().then(e => e.requestNotificationsPermissions).then(t => l.dispatch(t(u, !1, e)))
										};
									Object(Sv.a)(e) ? Object(O.S)(e) ? (n(), p()) : b && b() : n(t)
								} if (o === k.Tb.MULTIREDDIT && r.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = r.routeMatch.match.params;
								l.dispatch(Object(T.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(ee.c)())
						}
						const d = Object(O.S)(l.getState());
						d && !Object(Kh.a)(window.location.search) && l.dispatch(Object(z.d)()), Object(P.requestIdleCallback)(async () => {
							l.dispatch(Object(me.d)()), await Object(S.a)() && Object(dv.b)(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = Tv(e);
								t && (await (async e => {
									return (await Object(de.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), s && s())
							}, s = t.listen((t, n) => {
								"POP" !== n && e()
							});
							e()
						}), d && Object(_.c)(l.getState()) && l.dispatch(Object(b.a)()), document.addEventListener("visibilitychange", () => {
							var e;
							const t = l.getState(),
								{
									currentPage: n
								} = t.platform;
							if ("visible" !== document.visibilityState && (Ln.ac(Date.now()), Object(U.a)(Object(dv.a)("tab_backgrounded")(t))), (e => Object(uc.c)(e, {
									experimentEligibilitySelector: e => !Object(oe.d)(e),
									experimentName: Hn.Zc
								}) === Hn.qd.Enabled)(t) && "visible" === document.visibilityState && n && Object(li.j)(n.routeMatch, l.getState(), W.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Ln.z(),
									t = Ln.A(),
									n = Ln.N(),
									s = Ln.X();
								if (s && e && n) {
									const r = Date.now() - s;
									Object(U.a)(Object(dv.f)("tab_backgrounded", n)(l.getState(), r, e, t))
								}(s || e || n || t) && (Ln.eb(), Ln.ib(), Ln.gb(), Ln.fb())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && Yv.g[n.locationState.clickId] && !Yv.g[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(Yv.c)(n.locationState.clickId) : Object(Yv.d)(n.locationState.clickId))
						}), Object(oe.h)(l.getState()) && pv(l.getState), (e => {
							return Object(uc.c)(e, {
								experimentEligibilitySelector: uc.a,
								experimentName: Hn.Tc
							}) === Hn.Td
						})(l.getState()) && Object(Yv.b)(Ln.r(), l.getState), l.dispatch(Object(Oe.o)())
					}), window.history.scrollRestoration = "manual", Av.a.attachStore(l), l.dispatch(Object(fe.b)(L.a.PageLoad));
					const G = Ln.p(null === (u = l.getState().user.account) || void 0 === u ? void 0 : u.id),
						H = Ln.o(null === (m = l.getState().user.account) || void 0 === m ? void 0 : m.id);
					l.dispatch(Object(ge.B)({
						posts: null != G ? G : []
					})), l.dispatch(Object($.m)({
						comments: null != H ? H : []
					})), l.dispatch(Y), Object(Jm.e)(l.getState()) && l.dispatch(Object(Vv.e)()), Object(P.requestIdleCallback)(() => {
						const e = Ln.H();
						(!e || e && Date.now() - e.lastUpdated >= k.E) && l.dispatch(Object(Oe.f)())
					}), Object(Jd.b)(t, () => l.getState())
				},
				raven: {
					tags: {
						project: k.o.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(o.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: s,
					theme: o,
					...l
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(i.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return r.a.createElement("div", u({
					className: Object(a.a)(d.a.backgroundContainer, n),
					style: p
				}, l))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(l.v)(),
				h = Object(o.c)({
					isEditing: d.i,
					layout: (e, t) => t.forcedLayout || Object(l.U)(e, t)
				}),
				g = Object(a.b)(h);
			t.a = b(g(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: s,
					dispatch: a,
					fitPageToContent: o,
					forcedLayout: d,
					isCollectionLayout: u,
					isEditing: b,
					layout: h,
					pageLayer: g,
					...f
				} = e;
				return r.a.createElement("div", p({
					className: Object(i.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: h === c.g.Large || Object(l.R)(g),
						[m.a.mDisableFullScreen]: s && !u,
						[m.a.mClassicWidth]: u,
						[m.a.mIsEditing]: !!b,
						[m.a.mCanFlexFullWidth]: !o,
						[m.a.onlyChildMargin]: !n
					})
				}, f))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				o = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./node_modules/classnames/index.js"),
				p = n.n(m),
				b = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = n("./src/lib/constants/icons.ts"),
				g = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/components/BackToSubreddit/index.m.less"),
				O = n.n(v);
			var C = e => {
					const {
						subredditName: t
					} = e, n = `/${t}`;
					return r.a.createElement(b.a, {
						className: O.a.backToSubreddit,
						to: n
					}, r.a.createElement("div", {
						className: O.a.innerContainer
					}, r.a.createElement(f.a, {
						name: h.a.back,
						className: p()(O.a.content, O.a.back)
					}), r.a.createElement(g.b, {
						className: p()(O.a.content, O.a.subredditIcon)
					}), r.a.createElement("span", {
						className: p()(O.a.content, O.a.title)
					}, t)))
				},
				y = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				E = n("./src/reddit/layout/page/Listing/index.m.less"),
				x = n.n(E);
			t.a = e => {
				const {
					backgroundColor: t,
					backToSubredditName: n,
					className: m,
					containerRef: p,
					content: b,
					contentBanner: h,
					contentClassName: g,
					contentNavBar: f,
					disableFullscreen: v,
					fitPageToContent: O,
					forcedLayout: E,
					hideOnlyChildMargin: _,
					isCollectionLayout: j,
					isPageSwapped: P,
					maxWidth: S,
					navBar: k,
					redditStyle: N,
					sidebar: w,
					sidebars: M,
					trendingUnit: I,
					subredditId: T
				} = e, A = I ? "28px" : "0", R = P ? {
					marginRight: `${c.p}px`,
					marginTop: A
				} : {
					marginLeft: `${c.p}px`,
					marginTop: A
				}, L = w && r.a.createElement("div", {
					className: Object(i.a)(x.a.sidebar, j ? x.a["m-collectionLayout"] : x.a.defaultLayout),
					style: R
				}, w), F = r.a.createElement(o.a, {
					hideOnlyChildMargin: _,
					className: g,
					disableFullscreen: v,
					fitPageToContent: O,
					forcedLayout: E,
					isCollectionLayout: j
				}, h, n && r.a.createElement(C, {
					subredditName: n
				}), b);
				let D;
				D = M ? r.a.createElement(r.a.Fragment, null, M[0], F, M[1]) : P ? r.a.createElement(r.a.Fragment, null, L, F) : r.a.createElement(r.a.Fragment, null, F, L);
				const B = v ? `${S||d.a+2*c.l}px` : "100%",
					G = Object(s.useContext)(u.a);
				return r.a.createElement(y.a, {
					subredditId: T
				}, r.a.createElement("div", {
					className: Object(i.a)(x.a.outerContainer, l.i, m, {
						[x.a.outerContainerExp]: G
					}),
					ref: p
				}, r.a.createElement(a.a, {
					className: l.h,
					redditStyle: N,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: x.a.innerContainer
				}, k, f, (e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null)(e), r.a.createElement("div", {
					style: {
						maxWidth: B
					}
				}, I), r.a.createElement("div", {
					className: x.a.body,
					style: {
						maxWidth: B
					}
				}, D))))
			}
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(s || (s = {}))
		},
		"./src/reddit/models/EconManagement/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.hasOwnProperty("source")
			}

			function r(e) {
				return "object" != typeof e[0]
			}
			var a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Default = "default", e.Loading = "loading", e.Error = "error"
				}(a || (a = {}))
		},
		"./src/reddit/models/EmailSettings/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
				}(s || (s = {}))
		},
		"./src/reddit/models/HappeningNow/Filter/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.All = "all", e.Chat = "chat", e.Talk = "talk"
				}(s || (s = {}))
		},
		"./src/reddit/models/LoggedOutOneFeed/index.ts": function(e, t, n) {
			"use strict";
			var s, r, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.NavDropdown = "nav", e.LeftRail = "left"
				}(s || (s = {})),
				function(e) {
					e.XhrError = "xhr", e.ParseError = "parse"
				}(r || (r = {})),
				function(e) {
					e.LoggedIn = "loggedin", e.OneFeed = "onefeed", e.Popular = "popular"
				}(a || (a = {}))
		},
		"./src/reddit/models/Sso/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Apple = "https://appleid.apple.com", e.Google = "https://accounts.google.com"
				}(s || (s = {}))
		},
		"./src/reddit/models/Survey/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CES = "CES", e.CSAT = "CSAT", e.NPS = "NPS", e.MULTI_CHOICE = "multi_choice"
				}(s || (s = {}))
		},
		"./src/reddit/pages/InternalServerError/index.m.less": function(e, t, n) {
			e.exports = {
				dizzySnoo: "UaNg246yNIpwcq_Uhe6vC",
				container: "EXdERxzjUGqvBK511L1Eq",
				mainContent: "_3dyrEHC8cc6dIOTUPQmv1S",
				title: "_1PdcLVyQbMPVKRikIspqb_",
				subTitle: "_1YhiRkum1oGZUdm5i1mHFJ",
				image: "_1gTZDLeeF0VPQsS6Iz5boy",
				bottomImageContainer: "_3sveU8lpcXyGOpDXsXc9xg",
				imageContainer: "_2wX-WzezrtDmDaxm8BR4zz",
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR",
				topImageContainerExp: "_2NU2A-ZU5J-cxP78RF0oeb"
			}
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/helpers/trackers/inbox.ts"),
				o = n("./src/reddit/hooks/useTracking.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/config.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/InternalLink/index.tsx"),
				m = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less"),
				p = n.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ["r/somethingimade", "r/CasualConversation", "r/DoesAnybodyElse", "r/Old_Recipes"][Math.floor(100 * Math.random()) % 4];
			var g = e => {
				let {
					inTooltip: t,
					onBtnClick: n
				} = e;
				const s = `/${h}`,
					a = {
						to: s,
						kind: d.b.InternalLink
					},
					o = r.a.createElement(u.default, {
						to: s,
						target: "_blank",
						rel: "noopener noreferrer",
						className: p.a.subredditLinkR,
						onClick: n
					}, h);
				return r.a.createElement("div", {
					className: Object(c.a)(p.a.emptyState, p.a.karmaView, {
						[p.a.inNotificationsPage]: !t
					})
				}, r.a.createElement("img", {
					src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: i.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(c.a)(p.a.avatarImage, {
						[p.a.inTooltip]: t
					})
				}), r.a.createElement("h1", {
					className: Object(c.a)(p.a.emptyTitle, {
						[p.a.inTooltip]: t
					})
				}, i.fbt._("You don’t have any activity yet", null, {
					hk: "43tvWW"
				})), r.a.createElement("p", {
					className: p.a.emptyDescription
				}, i.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [i.fbt._param("Link: to popular subreddit", o)], {
					hk: "1WOK4T"
				})), r.a.createElement(d.t, b({
					className: p.a.emptyStateButton,
					onClick: n,
					text: `Visit ${h}`
				}, a)))
			};
			t.a = e => {
				let {
					inTooltip: t
				} = e;
				const n = Object(o.a)();
				return r.a.createElement(g, {
					inTooltip: t,
					onBtnClick: (e => () => n(Object(a.r)({
						actionInfoType: e
					})))(a.a.Karma)
				})
			}
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less": function(e, t, n) {
			e.exports = {
				emptyState: "_3B_EfQMwEiEzc_9vEdVplz",
				emptyStateLoggedOutContainer: "_3AcDG0KjCxs3H1UW_4ajNf",
				emptyStateDivider: "bfJNAfRJ7wvCVMJIHbVa-",
				karmaView: "_3eBLRjkIDT-8Hobfrj_UTz",
				inNotificationsPage: "_2upiES-f8azWSz_UdoeHE7",
				avatarImage: "mGm_bo7f-d7T6Ax_UEs_l",
				inTooltip: "JBKRJW6IC_gf5qQ_mqb4A",
				catsImageWrapper: "odMqhFpc4xkpus4jHz_9f",
				cat: "_13uS-SsNmI2cGGsq2rpP8O",
				top: "_29krHC0w9xxlGw1mBpwNHU",
				bottom: "_3VkvX9EbwQAVQJ3qEl_wzw",
				cloud: "_3yAL94u5AxUY-JhhHIPNuU",
				yummy: "_2TY8uYFieKTHl7jN_vmcYR",
				memesImageWrapper: "jaQ0krPJ6FkjLU-VDMGNq",
				shrek: "_1f1-1KlOtH3uQKPHzkGdDI",
				star: "_2mEU_pG_y9L4CaC7zihby0",
				inBottom: "_1kfecAwlZWu6be_WDfvh-P",
				inCenter: "_4DkJv1On5ORUXrwzznhqE",
				inTop: "_1lJAHwdJYzqn-69JkG-HJQ",
				emptyStateButton: "_1_kVxSQ5_eQNTfI-Y89mu4",
				loggedOutState: "_3uw_OsQCi8zOpS3fha4JEF",
				emptyStateWithBanner: "_1L4nSUqK39ZB-E1-MXtBve",
				emptyTitle: "_36brOzjH6sE_rgnTt-hcL1",
				emptyDescription: "Ae79bDDbZ2U_G-wqwA71z",
				subredditLinkR: "_9DV1fqkU31oi8pfSQxzjw",
				BellOutline: "_23NDu_VaLgaSWVzKHs-Gfa",
				bellOutline: "_23NDu_VaLgaSWVzKHs-Gfa"
			}
		},
		"./src/reddit/pages/Recap/Components/NavbarIcon/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1PvH4m9c5gT9_kN2ABo2zG",
				psBattlesIcon: "_3o_sZYSm7bb0JtNcA6cbSw",
				tooltip: "_3r9BIkFwDCS3l0qK9Tn7rI"
			}
		},
		"./src/reddit/reducers/features/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/happeningNow/constants.ts");
			const a = {
				error: null,
				loaded: !1,
				pending: !1
			};
			var o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.b:
						return {
							...e, pending: !0
						};
					case r.c:
						return {
							error: null, loaded: !0, pending: !1
						};
					case r.a:
						return {
							error: t.payload, loaded: !0, pending: !1
						};
					default:
						return e
				}
			};
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const i = e => e.reduce((e, t) => ({
					...e,
					[t.postId]: t
				}), {}),
				c = (e, t) => [...new Set([...e, ...t])],
				l = {};
			var d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c: {
						const {
							popularLiveContent: n,
							recommendedLiveContent: s
						} = t.payload;
						return {
							...e,
							...i(n),
							...i(s)
						}
					}
					default:
						return e
				}
			};
			const u = [];
			var m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c: {
						const {
							popularLiveContent: n
						} = t.payload, s = n.map(e => e.postId);
						return c(e, s)
					}
					default:
						return e
				}
			};
			const p = [];
			var b = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.c: {
							const {
								recommendedLiveContent: n
							} = t.payload, s = n.map(e => e.postId);
							return c(e, s)
						}
						default:
							return e
					}
				},
				h = n("./src/reddit/reducers/features/happeningNow/selectedFilter/index.ts");
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.g:
						return t.payload;
					default:
						return e
				}
			};
			const f = {
				lastReadTimestampMs: 0,
				latestUnreadContentTimestampMs: 0
			};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.e:
						return {
							...e, latestUnreadContentTimestampMs: t.payload
						};
					case r.d:
						return {
							...e, lastReadTimestampMs: t.payload
						};
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: o,
				models: d,
				popular: m,
				recommended: b,
				selectedFilter: h.b,
				showLiveContentAvailabilityTooltip: g,
				unread: v
			})
		},
		"./src/reddit/reducers/features/happeningNow/selectedFilter/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/actions/happeningNow/constants.ts");
			const r = n("./src/reddit/models/HappeningNow/Filter/index.ts").a.All;
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.f:
						return t.payload;
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/page.ts");
			const o = "/acknowledgements",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Acknowledgements",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Acknowledgements").then(n.bind(null, "./src/reddit/pages/Acknowledgements/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Acknowledgements/index.tsx"
					}
				}),
				c = {
					action: a.a,
					chunk: r.u.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.ACKNOWLEDGEMENTS
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/page.ts");
			const o = ["/appeal", "/appeals"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Appeal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Appeal").then(n.bind(null, "./src/reddit/pages/AppealPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/AppealPage/index.tsx"
					}
				}),
				c = {
					action: a.a,
					chunk: r.u.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.APPEAL
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/avatar/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/pages/avatar/index.ts");
			const o = "/avatar",
				i = [o, `${o}/shop`, `${o}/shop/artists`, `${o}/shop/artist/:artistDisplayName`, `${o}/shop/categories/:sectionId`, `${o}/shop/category/:categoryId`, `${o}/shop/gallery`, `${o}/shop/product/:listingId`, `${o}/:username`, `${o}/:username/:avatarId`, `${o}/nft/:chainId/:contractAddress/:tokenId`],
				c = {
					action: a.a,
					chunk: r.u.AVATAR,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Avatar",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), n.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), n.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), n.e("Avatar")]).then(n.bind(null, "./src/reddit/pages/Avatar/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Avatar/index.tsx"
						}
					}, {
						ssr: !1
					}),
					exact: !0,
					meta: {
						name: r.Tb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/page.ts");
			const o = "/coins",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Coins",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Coins").then(n.bind(null, "./src/reddit/pages/CoinsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsPage/index.tsx"
					}
				}),
				c = {
					action: a.c,
					chunk: r.u.COINS,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.COINS
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/page.ts");
			const o = "/coins/mobile",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "CoinsMobile",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CoinsMobile").then(n.bind(null, "./src/reddit/pages/CoinsMobilePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsMobilePage/index.tsx"
					}
				}),
				c = {
					action: a.b,
					chunk: r.u.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.COINS_MOBILE
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/countrySites/index.ts"),
				o = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/featureFlags/profileCollections.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CollectionCommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~SearchResults"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/CollectionCommentsPage/index.tsx"
				}
			});
			let l = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"];
			l = Object(a.c)(l);
			const d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~SearchResults"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: r.u.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: r.Tb.COLLECTION_COMMENTS
					},
					prefetches: [r.u.FRONTPAGE, r.u.COMMENTS_PAGE, r.u.SUBREDDIT]
				},
				m = {
					...u,
					path: l
				},
				p = {
					...u,
					path: d,
					routePredicate: i.a
				},
				b = [m, p];
			t.a = b
		},
		"./src/reddit/routes/countrySitePage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/countrySites/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CountryPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/pages/CountrySitePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CountrySitePage/index.tsx"
					}
				}),
				c = [""],
				l = {
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/actions/pages/countrySite/index.ts")).then(e => e.internationalSiteHomePageRequested)),
					chunk: r.u.INTERNATIONAL_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.INTERNATIONAL_SITE_PAGE
					},
					path: Object(a.c)(c, !1),
					prefetches: [r.u.SUBREDDIT]
				};
			t.a = l
		},
		"./src/reddit/routes/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/pages/econManagement.ts");
			const o = "/econ-management",
				i = "q",
				c = {
					action: a.a,
					chunk: r.u.ECON_MANAGEMENT,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "EconManagement",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("EconManagement").then(n.bind(null, "./src/reddit/pages/EconManagement/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/EconManagement/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Tb.ECON_MANAGEMENT
					},
					path: o
				};
			t.c = c
		},
		"./src/reddit/routes/econManagement2/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/pages/econManagement2.ts");
			const o = "/econ-management-2",
				i = {
					action: a.a,
					chunk: r.u.ECON_MANAGEMENT_2,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "EconManagement2",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("EconManagement2").then(n.bind(null, "./src/reddit/pages/EconManagement2/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/EconManagement2/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Tb.ECON_MANAGEMENT_2
					},
					path: o
				};
			t.a = i
		},
		"./src/reddit/routes/followers/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const o = "/user/:profileName/followers",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileFollowersPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileFollowersPage").then(n.bind(null, "./src/reddit/pages/Followers/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Followers/index.tsx"
					}
				}),
				c = {
					action: Object(a.a)(() => n.e("ProfileFollowersAction").then(n.bind(null, "./src/reddit/actions/pages/followers/index.ts")).then(e => e.followersPageRequested)),
					chunk: r.u.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.FOLLOWERS
					},
					path: o,
					prefetches: [r.u.PROFILE_OVERVIEW]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/framedGild/index.ts");
			const o = "/framedGild/:thingId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedGildPage/index.tsx"
					}
				}),
				c = {
					action: a.a,
					chunk: r.u.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.FRAMED_GILD
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/framedModal/index.ts");
			const o = "/framedModal/:type",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FramedModal").then(n.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedModalPage/index.tsx"
					}
				}),
				c = {
					action: a.a,
					chunk: r.u.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.FRAMED_MODAL
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/selectors/frontpage.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object.keys(o.cb).map(e => o.cb[e]).join("|"),
				u = "/",
				m = `/:sort(${d})?`,
				p = Object(a.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Frontpage/index.tsx"
					}
				}),
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: o.u.FRONTPAGE,
					component: p,
					exact: !0,
					prefetches: [o.u.COMMENTS_PAGE, o.u.SUBREDDIT]
				},
				h = {
					...b,
					path: u,
					meta: {
						name: o.Tb.INDEX,
						pageType: "home",
						canonicalPageType: "home"
					},
					routePredicate: e => Object(l.S)(e)
				},
				g = {
					...b,
					path: u,
					meta: {
						name: o.Tb.INDEX,
						pageType: "home",
						canonicalPageType: "home"
					},
					routePredicate: e => !Object(l.S)(e) && Object(c.b)(e)
				},
				f = {
					...b,
					path: u,
					meta: {
						name: o.Tb.INDEX,
						pageType: "popular",
						canonicalPageType: "home"
					},
					routePredicate: e => !Object(l.S)(e) && !Object(c.b)(e)
				},
				v = {
					...b,
					path: m,
					meta: {
						name: o.Tb.LISTING,
						pageType: "home",
						canonicalPageType: "home"
					},
					routePredicate: e => Object(l.S)(e)
				},
				O = {
					...b,
					path: m,
					meta: {
						name: o.Tb.LISTING,
						pageType: "popular",
						canonicalPageType: "home"
					},
					routePredicate: e => !Object(l.S)(e)
				},
				C = [h, g, f, v, O];
			t.a = C
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/pages/topic.ts"),
				o = n("./src/reddit/selectors/topic.ts");
			const i = "/label/subreddits",
				c = Object(s.a)({
					resolved: {},
					chunkName: () => "Geotagging",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Geotagging").then(n.bind(null, "./src/reddit/pages/Geotagging/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Geotagging/index.tsx"
					}
				}),
				l = {
					action: e => async (e, t, n) => {
						let s, {
							gqlContext: r
						} = n; {
							const e = t();
							if (Object(o.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							s = await Object(a.fetchTopicPage)(r(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(a.topicFailed)())
						}
						if (!s) return;
						const i = t();
						e(Object(a.topicLoaded)({
							...s,
							key: "tagging",
							meta: i.meta
						}))
					},
					chunk: r.u.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: r.Tb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = l
		},
		"./src/reddit/routes/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/happeningNow/index.ts");
			const o = "/now",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "HappeningNow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("HappeningNow")]).then(n.bind(null, "./src/reddit/pages/HappeningNow/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/HappeningNow/index.tsx"
					}
				}),
				c = {
					action: a.b,
					chunk: r.u.HAPPENING_NOW,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.HAPPENING_NOW
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(a.a)({
					resolved: {},
					chunkName: () => "InboxPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("InboxPages").then(n.bind(null, "./src/reddit/pages/RedditEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/RedditEmbed/index.tsx"
					}
				}),
				l = Object.keys(o.Y).map(e => o.Y[e]).join("|"),
				d = [`/message/:pageName(${l})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: o.u.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: o.Tb.INBOX_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/meta/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = "/community-points",
				r = "/community-point",
				a = "/community-points/documentation(.*)"
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				c = n("./src/reddit/actions/pages/meta/noGasPage.ts"),
				l = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts"),
				d = n("./src/reddit/actions/users.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/routes/meta/constants.ts");
			const g = {
					action: i.a,
					chunk: r.u.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "CommunityPointsLearnMore",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("CommunityPointsLearnMore").then(n.bind(null, "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Tb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
						isResponsive: !0
					},
					path: [h.b, h.c, h.a, "/vault", "/web/community-points"]
				},
				f = {
					action: l.a,
					chunk: r.u.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Tb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				v = {
					action: c.a,
					chunk: r.u.META_NO_GAS_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "NoGasPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("NoGasPage").then(n.bind(null, "./src/reddit/pages/meta/NoGasPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/NoGasPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Tb.META_NO_GAS_PAGE,
						isResponsive: !0
					},
					path: ["/web/vault/no-gas"]
				},
				O = e => async (t, n) => {
					const s = Object(p.a)(e.queryParams);
					Object(b.S)(n()) || await t(Object(d.s)()), s && setTimeout(async () => {
						await t(Object(a.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), m.d.spBurnLinks(n()) && t(Object(o.h)(u.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, C = {
					action: O,
					chunk: r.u.EMPTY,
					exact: !0,
					meta: {
						name: r.Tb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [g, f, v, C]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(a.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModQueuePages/index.tsx"
					}
				}),
				l = Object.keys(o.xb).map(e => o.xb[e]).join("|"),
				d = `/r/mod/about/:pageName(${l})?`,
				u = {
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: o.u.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: o.Tb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(a.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Multireddit/index.tsx"
					}
				}),
				l = "/me/m/:multiredditName",
				d = Object.keys(o.cb).map(e => `${l}/:sort(${o.cb[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(o.cb).map(e => `${u}/:sort(${o.cb[e]})?`),
				p = [l, u, ...d, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: o.u.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.Tb.MULTIREDDIT
					},
					path: p,
					prefetches: [o.u.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const o = "/notifications/",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "NotificationsInbox",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/pages/NotificationsInbox/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/NotificationsInbox/index.tsx"
					}
				}),
				c = {
					action: Object(a.a)(() => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/actions/pages/notificationsInbox.ts")).then(e => e.notificationsInboxPageRequested)),
					chunk: r.u.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.NOTIFICATIONS_INBOX
					},
					path: ["/notifications", o],
					prefetches: [r.u.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const o = "/user/:profileName/draft/:draftId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PostDraft/index.tsx"
					}
				}),
				c = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: r.u.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.POST_DRAFT
					},
					path: o,
					prefetches: [r.u.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/postSetPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const o = "/user/:profileName/set/:partialPostSetId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostSetPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("PostSetPage")]).then(n.bind(null, "./src/reddit/pages/PostSetPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PostSetPage/index.tsx"
					}
				}),
				c = {
					action: Object(a.a)(() => n.e("PostSetPageAction").then(n.bind(null, "./src/reddit/actions/pages/postSetPage/index.ts")).then(e => e.postSetPageRequested)),
					chunk: r.u.POST_SET_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.POST_SET
					},
					path: o,
					prefetches: [r.u.POST_SET_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const o = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileComments/index.tsx"
					}
				}),
				c = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: r.u.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.PROFILE_COMMENTS
					},
					path: o,
					prefetches: [r.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const o = "/user/:profileName/about/edit/moderation",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileModeration",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileModSettings/index.tsx"
					}
				}),
				c = {
					action: Object(a.a)(() => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/actions/pages/profileModSettings.ts")).then(e => e.profileModSettingsRequested)),
					chunk: r.u.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.PROFILE_MODERATION
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const o = "/user/:profileName",
				i = `${o}/display-collectibles`,
				c = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileOverview/index.tsx"
					}
				}),
				l = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: r.u.PROFILE_OVERVIEW,
					component: c,
					exact: !0,
					meta: {
						name: r.Tb.PROFILE_OVERVIEW
					},
					path: [o, i],
					prefetches: [r.u.COMMENTS_PAGE]
				};
			t.b = l
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const o = "/user/:profileName/submitted",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePosts/index.tsx"
					}
				}),
				c = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: r.u.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.PROFILE_POSTS
					},
					path: o,
					prefetches: [r.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/models/Profile/index.ts");
			const l = Object(a.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePrivate/index.tsx"
					}
				}),
				d = Object.keys(c.b).map(e => c.b[e]).join("|"),
				u = [`/user/:profileName/:listingType(${d})`, `/user/:profileName/gilded/:listingType(${c.b.GivenGildings})`],
				m = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: o.u.PROFILE_PRIVATE,
					component: l,
					exact: !0,
					meta: {
						name: o.Tb.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [o.u.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				o = n("./src/reddit/featureFlags/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileSnoobuilder/index.tsx"
					}
				}),
				c = "/user/:profileName/snoo",
				l = {
					path: c,
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: r.u.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.PROFILE_SNOOBUILDER
					},
					routePredicate: o.d.snoovatar30
				};
			t.a = l
		},
		"./src/reddit/routes/recap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				o = n("./src/reddit/selectors/experiments/recap.ts");
			const i = "/RedditRecap2022",
				c = "https://i.redd.it/8yb4biw7bf481.png",
				l = {
					action: Object(a.a)(() => n.e("Recap").then(n.bind(null, "./src/reddit/actions/pages/recap/index.ts")).then(e => e.recapPageRequested)),
					chunk: r.u.RECAP,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Recap",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Recap").then(n.bind(null, "./src/reddit/pages/Recap/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Recap/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Tb.RECAP
					},
					path: i,
					routePredicate: e => Object(o.a)(e)
				};
			t.b = l
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const o = "/report",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ReportPage").then(n.bind(null, "./src/reddit/pages/ReportPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ReportPage/index.tsx"
					}
				}),
				c = {
					action: Object(a.a)(() => n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested)),
					chunk: r.u.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.REPORT
					},
					path: o
				};
			t.a = c
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const o = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/index.tsx"
					}
				}),
				c = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: r.u.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.SEARCH_RESULTS
					},
					path: o,
					prefetches: [r.u.FRONTPAGE, r.u.SUBREDDIT, r.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(o.kc).map(e => o.kc[e]).join("|"),
				l = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings~SubredditWiki"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(a.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings~SubredditWiki"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Settings/index.tsx"
						}
					}),
					chunk: o.u.SETTINGS,
					exact: !0,
					meta: {
						name: o.Tb.SETTINGS
					},
					path: `/settings/:page(${c})?`
				}, {
					action: Object(i.a)(() => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/actions/userDataRequest.ts")).then(e => e.userDataRequestPageRequested)),
					component: Object(a.a)({
						resolved: {},
						chunkName: () => "UserDataRequestPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/pages/UserDataRequestPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/UserDataRequestPage/index.tsx"
						}
					}),
					chunk: o.u.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: o.Tb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = l
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/countrySites/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditWiki",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("Settings~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/SubredditWiki/index.tsx"
				}
			});
			let d = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+"];
			d = Object(o.c)(d), d.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName+", "/w/:wikiPageName+", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(r.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: a.u.EMPTY,
					exact: !0,
					meta: {
						name: a.Tb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("vendors~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("Settings~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: a.u.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: a.Tb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [a.u.SUBREDDIT]
				};
			t.a = [p, b]
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Topic/index.tsx"
					}
				}),
				i = ["/t/:topicSlug"],
				c = {
					path: i,
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: r.u.TOPIC,
					component: o,
					exact: !0,
					meta: {
						name: r.Tb.TOPIC
					},
					prefetches: [r.u.COMMENTS_PAGE, r.u.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = n("./src/config.ts"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/reddit/constants/accountManager.ts"),
				l = n("./src/reddit/constants/experiments.ts");
			var d;
			! function(e) {
				e.Enabled = "enabled"
			}(d || (d = {}));
			var u = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				m = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				p = n("./src/reddit/helpers/chooseVariant/index.ts"),
				b = n("./src/reddit/selectors/experiments/index.ts");
			const h = Object(o.a)(e => Object(p.c)(e, {
				experimentEligibilitySelector: b.f,
				experimentName: l.ee
			}), e => e === l.je.Enabled);
			var g = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = n("./src/reddit/selectors/experiments/magicLink.ts"),
				v = n("./src/lib/getParsedUserAgent/index.ts");
			const O = Object(o.a)(e => Object(p.c)(e, {
				experimentEligibilitySelector: e => Object(v.g)(e.meta.userAgent) && Object(b.f)(e),
				experimentName: l.Af
			}), e => e === l.Qf.Enabled);
			var C = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/actions/modal.ts"),
				E = n("./src/reddit/selectors/accountManager/modalData.ts");
			const x = Object(o.a)(b.f, C.b, E.a, (e, t, n) => e && "DE" === t && n === y.a.Report);
			var _ = n("./src/reddit/selectors/responsiveSettings.ts");
			const j = Object(o.c)({
					frontpageSignupVariant: m.a,
					isNetzDGComplianceEnabled: x,
					magicLinkVariant: f.a,
					ssoLoginLinkVariant: e => Object(p.c)(e, {
						experimentEligibilitySelector: e => !Object(b.e)(e),
						experimentName: l.Hf
					}),
					blockingInterstitialVariant: g.e,
					blockingInterstitialV2Variant: g.f
				}),
				P = Object(o.c)({
					isAmModalDesignUpdateEnabled: u.a,
					isBlockingInterstitialEnabled: g.b,
					isBlockingInterstitialV2Enabled: g.c,
					isGoogleSsoGisEnabled: h,
					isSafariOneTapEnabled: O
				}),
				S = Object(o.a)((e, t) => t.path, (e, t) => t.uiMode, e => Object(E.c)(e), E.a, _.a, C.k, j, P, (e, t, n, o, u, m, p, b) => {
					const {
						isNetzDGComplianceEnabled: h,
						blockingInterstitialVariant: g,
						blockingInterstitialV2Variant: f,
						frontpageSignupVariant: v,
						ssoLoginLinkVariant: O,
						magicLinkVariant: C
					} = p, {
						isAmModalDesignUpdateEnabled: y,
						isBlockingInterstitialEnabled: E,
						isBlockingInterstitialV2Enabled: x,
						isGoogleSsoGisEnabled: _,
						isSafariOneTapEnabled: j
					} = b;
					let P = `${a.a.accountManagerOrigin}${e}`;
					if (P = Object(i.a)(P, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), O && (P = Object(i.a)(P, {
							[`experiment_${l.Hf}`]: O
						})), _ && (P = Object(i.a)(P, {
							[`experiment_${l.ee}`]: "enabled"
						})), h && (P = Object(i.a)(P, {
							experiment_d2x_netzdg_compliance: d.Enabled,
							thing_id: n
						})), P = Object(i.a)(P, {
							experiment_d2x_onboarding: "enabled"
						}), j && (P = Object(i.a)(P, {
							[`experiment_${l.Af}`]: "enabled"
						})), E && (P = Object(i.a)(P, {
							[`experiment_${l.Ob}`]: g
						})), x && (P = Object(i.a)(P, {
							[`experiment_${l.Pb}`]: f
						})), y && (P = Object(i.a)(P, {
							[`experiment_${l.vb}`]: "enabled"
						})), v && (P = Object(i.a)(P, {
							[l.rd]: v,
							uiMode: t
						})), C && (P = Object(i.a)(P, {
							[`experiment_${l.Ae}`]: C
						})), u && (P = Object(i.a)(P, {
							mweb_responsive_settings: "treatment"
						})), m) {
						const e = Object(s.isoLocaleToR2Language)(m);
						m !== r.DEFAULT_LOCALE && e && (P = Object(i.a)(P, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? P : P = Object(i.a)(P, {
						actionSource: o
					})
				})
		},
		"./src/reddit/selectors/accountManager/modalData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			}));
			const s = e => e.accountManagerModalData.actionSource,
				r = e => e.accountManagerModalData.redirectUrl,
				a = e => e.accountManagerModalData.thingId
		},
		"./src/reddit/selectors/avatarPushcard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				i = n("./src/reddit/selectors/experiments/econ/index.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const c = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.pushcard
				},
				l = Object(s.a)(c, i.b, (e, t) => {
					if (!e || !t) return null;
					const {
						id: n,
						eventViews: s
					} = Object(a.B)();
					return n === e.id && s > e.maxViews ? null : e
				}),
				d = Object(s.a)(l, e => {
					if (!e) return null;
					const {
						id: t,
						lastInteractionTimestamp: n
					} = Object(a.B)();
					return t === e.id && n > 0 ? null : e.banner
				})
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				a = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.models[n]
				},
				c = (e, t) => {
					let {
						subredditId: n,
						username: s
					} = t;
					const r = Object(o.Cb)(e, {
						userName: s
					});
					if (!r) return;
					const a = i(e, {
						subredditId: n
					});
					return a ? a[r.id] : void 0
				},
				l = Object(s.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.features.banned.userOrder[n];
					return s ? s.map(t => e.features.banned.models[n][t]) : r.a
				}),
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = Object(a.e)(n);
					return e.features.banned.api.pending[s]
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.loadMore[n]
				},
				m = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/econManagement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/models/EconManagement/index.ts"),
				a = n("./src/reddit/actions/economics/econManagement/constants.ts");
			const o = e => e ? e.map(e => {
					let {
						backup_created_at: t,
						backup_modified_at: n,
						created_at: s,
						hidden_at: r,
						modified_at: a,
						...o
					} = e;
					return {
						...o,
						backupCreatedAt: t,
						backupModifiedAt: n,
						createdAt: s,
						hiddenAt: r,
						modifiedAt: a
					}
				}) : [],
				i = {
					displayState: r.a.Default,
					currentEntity: null,
					relatedData: {},
					entityTypes: {}
				};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.c:
						return {
							...e, entityTypes: t.payload.reduce((e, t) => ({
								...e,
								[t.typename]: t
							}), {})
						};
					case a.g:
						return {
							...i, entityTypes: e.entityTypes, displayState: r.a.Loading
						};
					case a.f:
						return {
							...i, entityTypes: e.entityTypes, displayState: r.a.Error
						};
					case a.h: {
						const n = t.payload,
							s = n.typename;
						return {
							...e,
							displayState: r.a.Default,
							currentEntity: {
								id: n.entityId || "",
								type: s,
								prefixedId: `${n.typename}:${n.entityId}`,
								details: n
							},
							relatedData: {}
						}
					}
					case a.a: {
						const n = t.payload,
							s = n.type;
						return {
							...e,
							relatedData: {
								...e.relatedData,
								[s]: n.entity
							}
						}
					}
					case a.d: {
						const n = t.payload;
						return {
							...e,
							redditorInfo: n
						}
					}
					case a.e: {
						const n = t.payload,
							s = o(n);
						return {
							...e,
							vaults: s
						}
					}
					default:
						return e;
					case a.i: {
						const {
							vaults: t
						} = e;
						if (!t) return e;
						const n = t.map(e => e.active ? {
							...e,
							active: !1
						} : e);
						return {
							...e,
							vaults: n
						}
					}
				}
			};
			Object(s.a)({
				pages: {
					econManagement: c
				}
			});
			const l = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.currentEntity) || null
				},
				d = e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.redditorInfo) && void 0 !== s ? s : void 0
				},
				u = e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.vaults) && void 0 !== s ? s : []
				},
				m = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.displayState) || r.a.Default
				},
				p = e => {
					var t, n;
					const s = l(e);
					if (!s) return [];
					const r = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.entityTypes[s.type];
					return r && r.externalRefs || []
				},
				b = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.relatedData[t]
				},
				h = (e, t) => {
					var n, s, r;
					return (null === (r = null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.entityTypes[t]) || void 0 === r ? void 0 : r.actions) || []
				}
		},
		"./src/reddit/selectors/experiments/delayDnPermission.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => s.cd.DnNoModal === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.Ab
			})
		},
		"./src/reddit/selectors/experiments/frontpageSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(l.bb, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return !n || Object(a.B)(n)
				}, c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(o.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: r.rd,
					throttledVariants: {
						[r.ae.CurrentThrottled]: r.rd
					}
				}), i.a),
				m = e => e === r.ae.CurrentThrottled,
				p = e => e === r.ae.CurrentThrottled || e === r.ae.CurrentUnthrottled || e === r.ae.CurrentUnthrottledCopy || e === r.ae.NewPopUnthrottledCopy,
				b = e => e === r.ae.NewPopUnthrottledCopy,
				h = e => e === r.ae.NewPageUnthrottledCopy || e === r.ae.NewPageUnthrottledCopyFields,
				g = e => e === r.ae.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/happeningNow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./node_modules/reselect/es/index.js");
			const o = Object(a.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.Eb
			}), e => e === s.ed.Enabled || e === s.ed.EnabledWithNux)
		},
		"./src/reddit/selectors/experiments/i18n/hideTrending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./node_modules/reselect/es/index.js");
			const o = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Nb
				}), e => e === s.pe.HideTrending),
				i = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Nb,
					expEventOverride: !1
				}), e => e === s.pe.HideTrending)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.te,
					experimentEligibilitySelector: o.e
				}), i.a),
				l = Object(s.a)(c, e => e === r.we.Enabled),
				d = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Dc,
					experimentEligibilitySelector: o.e
				}), i.a),
				u = Object(s.a)(d, e => e === r.od.Enabled),
				m = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Rb,
					experimentEligibilitySelector: o.e
				}), i.a),
				p = Object(s.a)(m, e => e === r.ue.ContinuousScroll),
				b = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Sb,
					experimentEligibilitySelector: o.e
				}), i.a),
				h = Object(s.a)(b, e => e === r.ve.Enabled),
				g = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.ec,
					experimentEligibilitySelector: () => !0
				}), i.a),
				f = Object(s.a)(g, e => e === r.kb.Enabled)
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Ub,
					experimentEligibilitySelector: o.e
				}), e => e === r.ab.Enabled),
				c = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Vb,
					experimentEligibilitySelector: o.e
				}), e => e === r.bb.Enabled),
				l = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Wb,
					experimentEligibilitySelector: o.e
				}), e => e === r.cb.Enabled),
				d = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Xb,
					experimentEligibilitySelector: o.e
				}), e => e === r.db.Enabled),
				u = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Zb,
					experimentEligibilitySelector: o.e
				}), e => e === r.fb.Enabled),
				m = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Yb,
					experimentEligibilitySelector: o.e
				}), e => e === r.eb.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => Object(r.c)(e, {
				experimentName: s.Me,
				experimentEligibilitySelector: r.a
			}) === s.Ve.Enabled
		},
		"./src/reddit/selectors/experiments/onlineIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/presence.ts");
			const o = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.kf
					}) === s.Td
				},
				i = e => {
					if (Object(a.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.jf
					}) === s.Td
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Ye
					}) === s.Td
				},
				l = e => {
					if (Object(a.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Xe
					}) === s.Td
				}
		},
		"./src/reddit/selectors/experiments/recap.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Fc
				}) === s.Td,
				o = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Gc
				}) === s.Td,
				i = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.xb
				}) === s.Td,
				c = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Ec
				}) === s.Td
		},
		"./src/reddit/selectors/experiments/shredditModNav.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const o = (e, t) => t && Object(r.c)(e, {
				experimentEligibilitySelector: a.S,
				experimentName: s.Ff
			}) === s.Td
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/selectors/user.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const c = Object(r.a)(e => Object(i.c)(e, {
					experimentName: "d2x_search_string_routing_killswitch",
					experimentEligibilitySelector: i.a
				}), e => e),
				l = Object(r.a)(c, e => e !== o.Td),
				d = Object(r.a)(a.S, e => !e),
				u = (e, t) => {
					const n = t();
					Object(a.S)(n) || e.block(e => {
						if ((e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname)) {
							Object(s.f)(n);
							const t = l(n) ? e.pathname + e.search : e.pathname;
							return window.location.href = t, !1
						}
					})
				}
		},
		"./src/reddit/selectors/experiments/uxtsIntegration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = e => {
					var t;
					return (null === (t = null == e ? void 0 : e.user.experiments.byName[r.Xc]) || void 0 === t ? void 0 : t.variant) === r.Td
				},
				c = Object(s.a)(e => Object(a.c)(e, {
					experimentEligibilitySelector: o.S,
					experimentName: r.ac
				}), e => e === r.id.BottomSheet),
				l = Object(s.a)(e => Object(a.c)(e, {
					experimentEligibilitySelector: o.S,
					experimentName: r.ac,
					expEventOverride: !1
				}), e => !!e)
		},
		"./src/reddit/selectors/features/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/models/HappeningNow/Filter/index.ts"),
				o = n("./src/reddit/reducers/features/happeningNow/index.ts"),
				i = n("./src/reddit/reducers/features/happeningNow/selectedFilter/index.ts"),
				c = n("./src/redditGQL/types.ts");
			Object(r.a)({
				features: {
					happeningNow: o.a
				}
			});
			const l = Object(s.a)(e => {
					var t, n, s, r;
					return null !== (r = null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.unread) || void 0 === s ? void 0 : s.lastReadTimestampMs) && void 0 !== r ? r : 0
				}, e => {
					var t, n, s, r;
					return null !== (r = null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.unread) || void 0 === s ? void 0 : s.latestUnreadContentTimestampMs) && void 0 !== r ? r : 0
				}, (e, t) => e < t),
				d = Object(s.a)(l, e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.showLiveContentAvailabilityTooltip)
				}, (e, t) => e && t),
				u = (e, t, n) => {
					switch (n) {
						case a.a.Chat:
							return t.filter(t => {
								var n;
								return (null === (n = p(e, t)) || void 0 === n ? void 0 : n.contentType) === c.t.Chat
							});
						case a.a.Talk:
							return t.filter(t => {
								var n;
								return (null === (n = p(e, t)) || void 0 === n ? void 0 : n.contentType) === c.t.Talk
							});
						case a.a.All:
						default:
							return t
					}
				},
				m = e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.selectedFilter) && void 0 !== s ? s : i.a
				},
				p = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.happeningNow) || void 0 === s ? void 0 : s.models[t]
				},
				b = Object(s.a)(e => e, e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.popular) && void 0 !== s ? s : []
				}, m, u),
				h = Object(s.a)(e => e, e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.recommended) && void 0 !== s ? s : []
				}, m, u),
				g = e => {
					var t, n, s;
					return null !== (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.happeningNow) || void 0 === n ? void 0 : n.api.loaded) && void 0 !== s && s
				}
		},
		"./src/reddit/selectors/features/matrixChat/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/matrixChat/index.ts");
			Object(s.a)({
				features: {
					matrixChat: r.c
				}
			});
			const a = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.url) || r.a.url
				},
				o = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.state) || r.a.state
				},
				i = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.notificationsCount
				},
				c = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.username
				}
		},
		"./src/reddit/selectors/getAppQrCode.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				o = n("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: a.f,
				experimentName: s.Jb
			}), e => e === s.Td)
		},
		"./src/reddit/selectors/muted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/SubredditModeration/index.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(a.a)({
				pages: {
					modHub: o.a
				}
			});
			const i = [],
				c = Object(s.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.pages.modHub.muted.userOrder[n];
					return s ? s.map(t => e.pages.modHub.muted.models[n][t]) : i
				}),
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = Object(r.e)(n);
					return !!e.pages.modHub.muted.api.pending[s]
				},
				d = (e, t, n) => !!e.pages.modHub.muted.models[t] && !!e.pages.modHub.muted.models[t][n],
				u = e => !!e.pages.modHub.muted.search.api.pending,
				m = e => e.pages.modHub.muted.search.result,
				p = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === s ? void 0 : s.inContext
				},
				b = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.muted.loadMore[n]
				}
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (e.features.removalReasons.reasonOrder[n]) {
						return e.features.removalReasons.reasonOrder[n].map(t => e.features.removalReasons.models[t])
					}
					return []
				},
				r = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				a = e => e.features.removalReasons.api.pending
		},
		"./src/reddit/selectors/searchFix.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx");
			const o = {},
				i = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState || o
				},
				c = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.subredditName),
				l = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.routeName),
				d = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState && t.locationState.searchSwitcherType
				},
				u = Object(s.a)(l, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(a.C)(n)
				}, (e, t) => t && (e === r.Tb.COMMENTS || e === r.Tb.SUBREDDIT))
		},
		"./src/reddit/selectors/sso.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/components/Settings/modalIds.ts"),
				a = n("./src/reddit/models/Sso/index.ts"),
				o = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.Gb, e => !(!e || !e.length));
			const c = Object(s.a)(i.E, e => !e),
				l = Object(s.a)(i.Gb, e => e && e.find(e => e === a.a.Apple)),
				d = Object(s.a)(i.Gb, e => !(!e || !e.includes(a.a.Google))),
				u = Object(s.a)(o.a, e => !!e && [r.b, r.d, r.e, r.g, r.p, r.r].includes(e))
		},
		"./src/redditGQL/operations/AvatarListingById.json": function(e) {
			e.exports = JSON.parse('{"id":"ecc344086626"}')
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		},
		"./src/redditGQL/operations/ClaimAwardOffer.json": function(e) {
			e.exports = JSON.parse('{"id":"7264b2ee2ded"}')
		},
		"./src/redditGQL/operations/EconAdminPanelQuery.json": function(e) {
			e.exports = JSON.parse('{"id":"d47c78bc4284"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"6c73f2f0b64f"}')
		},
		"./src/redditGQL/operations/GetArtistById.json": function(e) {
			e.exports = JSON.parse('{"id":"69cc2c455368"}')
		},
		"./src/redditGQL/operations/GetDynamicLayout.json": function(e) {
			e.exports = JSON.parse('{"id":"9d622b078536"}')
		},
		"./src/redditGQL/operations/GetIsLiveContentAvailable.json": function(e) {
			e.exports = JSON.parse('{"id":"fd06b588e238"}')
		},
		"./src/redditGQL/operations/GiveCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"385450867622"}')
		},
		"./src/redditGQL/operations/MatrixChatNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"2fe60a4b5c2a"}')
		},
		"./src/redditGQL/operations/PerformEconAdminAction.json": function(e) {
			e.exports = JSON.parse('{"id":"de8b0fb0be5d"}')
		},
		"./src/redditGQL/operations/PersonalizedYearInReview.json": function(e) {
			e.exports = JSON.parse('{"id":"157109a04b67"}')
		},
		"./src/redditGQL/operations/RedditorsInfoByIds.json": function(e) {
			e.exports = JSON.parse('{"id":"b722cdefdc5c"}')
		},
		"./src/redditGQL/operations/RemoveCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"1011718c41db"}')
		},
		"./src/redditGQL/operations/SearchTypeahead.json": function(e) {
			e.exports = JSON.parse('{"id":"26f251bf8753"}')
		},
		"./src/redditGQL/operations/SearchTypeaheadByType.json": function(e) {
			e.exports = JSON.parse('{"id":"e39d1d540f0a"}')
		},
		"./src/server/helpers/profileRedirect.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/addQueryParams/index.ts"),
				r = n("./src/server/helpers/canonicalUrl.tsx");
			const a = e => {
					let {
						path: t,
						profileName: n,
						rest: r,
						queryParams: a
					} = e;
					const i = t.includes("posts") ? `/user/${n}/submitted` : `/user/${n}`,
						c = o(`${i}/${r||""}`);
					return Object(s.a)(c, a)
				},
				o = e => Object(r.a)(e.replace("posts", "submitted")),
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return `/user/${e}/submitted${t?"/":""}`
				}
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e", "vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit", "CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81", "Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2", "Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435", "Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba", "Governance~ModListing~Reddit~ReportFlow", "Chat~Governance~Reddit", "Governance~Reddit~SubredditForkingCTA", "Governance~ModListing~Reddit", "ModListing~Reddit~StandalonePostPage", "Governance~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.8a4915df57b57c77927a.js.map