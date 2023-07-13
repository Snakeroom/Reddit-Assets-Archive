// https://www.redditstatic.com/desktop2x/Reddit.119849188eae7b444185.js
// Retrieved at 7/13/2023, 7:00:04 PM by Reddit Dataminer v1.0.0
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
			const r = 120 * s.mb;
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
					method: d.ob.POST,
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
				j = Object(s.a)(a.h),
				_ = Object(s.a)(a.f),
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
						})(a(), e), t(j(h))
					} catch (y) {
						r.c.captureException(y), t(_()), t(Object(o.f)({
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
							method: c.ob.GET,
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
								method: c.ob.POST,
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
					Object(o.mb)({
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
					const n = Object(o.C)();
					Object(o.mb)({
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
					const n = Object(o.C)();
					Object(o.mb)({
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
								method: s.ob.GET
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
					method: r.ob.POST,
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
				return j
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
				}, y = e => Object(s.c)(r.r.HAPPENING_NOW, r.z.HAPPENING_NOW_LIVE_CONTENT_AVAILABILITY_TOOLTIP_DISMISSED, e), E = e => {
					const t = y(e);
					return !!Object(s.b)(t)
				}, x = () => async (e, t) => {
					const n = t(),
						r = Object(h.k)(n);
					if (r && !E(r)) {
						const e = y(r);
						Object(s.d)(e, !0, s.a)
					}
				}, j = () => async (e, t) => {
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
				var s, r, a, o, i, g, f, O, x, j, _;
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
						})), (null === (j = null === (x = null === (O = null == e ? void 0 : e.item) || void 0 === O ? void 0 : O.images) || void 0 === x ? void 0 : x[0]) || void 0 === j ? void 0 : j.url) && (k = e.item.images[0].url);
						break
					}
					case "/avatar/shop/artist/:artistDisplayName": {
						const e = await C(t, n.params.artistDisplayName),
							s = null == e ? void 0 : e.redditorInfo,
							r = y(s);
						r && (P = c.fbt._("{artistName} - Collectible Avatars on Reddit", [c.fbt._param("artistName", r)], {
							hk: "4bMg1j"
						})), (null === (_ = null == s ? void 0 : s.profile) || void 0 === _ ? void 0 : _.publicDescriptionText) ? S = c.fbt._("{artistDescription}", [c.fbt._param("artistDescription", s.profile.publicDescriptionText)], {
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
				a = n("./src/reddit/actions/pages/subreddit/index.ts"),
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
						j = [a.a.NsfwBlockingModal].includes(x),
						_ = [i.a.NSFW_BLOCKING_MODAL_V2].includes(E),
						P = j || _;
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
				j = n("./src/reddit/constants/history.ts"),
				_ = n("./src/reddit/constants/modals.ts"),
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
				J = m.a.button("CloseButton", Q.a),
				K = m.a.wrapped(T.a, "Close", Q.a),
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
									...Object(W.p)(s()),
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
						const t = e === A.a.Apple ? _.a.LINK_APPLE_SSO : _.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(r.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === A.a.Apple ? _.a.UNLINK_APPLE_SSO : _.a.UNLINK_GOOGLE_SSO;
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
						this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== p.a.Reply && Object(w.a)(), this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(N.a)(j.b.JustLoggedIn, !0), this.isOneTapSession() ? this.redirectTo(window.location.href) : window.location.reload())
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
							[P.s]: "true"
						};
						n && (e.props.isCommentBeforeSignUpEnabled ? e.props.isRegularOnboardingEnabled && (s[P.B] = "true") : s[P.B] = "true"), e.isSignupModalSuccessful && (s[P.C] = "true"), e.isOneTapSession() && (s[P.t] = "true"), window.location.replace(Object(d.a)(t, s))
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
					}), l && o.a.createElement(J, {
						onClick: this.closedByUser
					}, o.a.createElement(K, {
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
		"./src/reddit/components/CCM/PrivateCommunityAccessModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "PrivateCommunityAccessModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PrivateCommunityAccessModal").then(n.bind(null, "./src/reddit/components/CCM/PrivateCommunityAccessModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CCM/PrivateCommunityAccessModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(o.b)(i.a.PRIVATE_COMMUNITY_ACCESS_MODAL, () => a.a.createElement(c, {
				withOverlay: !0
			}))
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
				j = n.n(x);
			const _ = Object(s.a)({
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
					} = this.props, a = Object(d.a)(j.a.icon);
					return i.a.createElement("button", {
						className: Object(d.a)(t, j.a.ctaContainer),
						id: P,
						onClick: this.handleClick,
						"aria-label": "coin"
					}, i.a.createElement("div", {
						className: Object(d.a)(j.a.ctaContent)
					}, i.a.createElement(C.a, {
						name: "coins",
						className: a
					})), s && i.a.createElement(_, {
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
				chatButtonTooltipText: "_14aBSrrNL6xgbliD2eP2gM"
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
				var f, v, C, y, E, x, j, _, P, S, k, N, w, M, I, T, A;
				const R = Object(a.d)(),
					L = Object(m.a)(),
					[F, D, B] = function(e, t, n) {
						const [r, a] = Object(s.useState)(Object(u.s)(e, t) || 0), o = Object(s.useCallback)(() => {
							a(r + 1), Object(u.Cb)(e, t, r + 1)
						}, []), i = Object(s.useCallback)(() => {
							n > 0 && (a(n), Object(u.Cb)(e, t, n))
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
					J = !!(null == n ? void 0 : n.thumbnailImageUrl),
					K = () => {
						var e;
						(null === (e = n.persistence) || void 0 === e ? void 0 : e.isDismissible) && (B(), R(Object(c.a)(n.notificationName)))
					},
					X = {
						backgroundColor: G ? null === (C = null == n ? void 0 : n.primaryCta) || void 0 === C ? void 0 : C.colors.hoverHex : null === (y = null == n ? void 0 : n.primaryCta) || void 0 === y ? void 0 : y.colors.backgroundHex,
						color: null === (E = null == n ? void 0 : n.primaryCta) || void 0 === E ? void 0 : E.text.colorText,
						borderColor: null === (x = null == n ? void 0 : n.primaryCta) || void 0 === x ? void 0 : x.colors.borderHex
					},
					Y = {
						backgroundColor: H ? null === (j = null == n ? void 0 : n.secondaryCta) || void 0 === j ? void 0 : j.colors.hoverHex : null === (_ = null == n ? void 0 : n.secondaryCta) || void 0 === _ ? void 0 : _.colors.backgroundHex,
						color: null === (P = null == n ? void 0 : n.secondaryCta) || void 0 === P ? void 0 : P.text.colorText,
						borderColor: null === (S = null == n ? void 0 : n.secondaryCta) || void 0 === S ? void 0 : S.colors.borderHex
					};
				return W ? null : r.a.createElement("div", {
					className: O.a.Wrapper,
					style: {
						backgroundImage: `url(${n.bodyBackgroundImage})`
					},
					onClick: e => {
						e.stopPropagation(), Object(i.e)(n.linkUrl, "_blank"), K(), L(t ? Object(d.x)(n.notificationName, d.b.BANNER) : Object(d.n)(n.notificationName, d.b.BANNER))
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
				}, null === (M = n.bodyText) || void 0 === M ? void 0 : M.text), J && r.a.createElement("img", {
					src: n.thumbnailImageUrl,
					className: O.a.Thumbnail
				})), z || Q && r.a.createElement("div", {
					className: Object(o.a)(O.a.ActionButtons, {
						[O.a.noMargin]: J
					})
				}, z && r.a.createElement(l.t, {
					text: null === (I = n.primaryCta) || void 0 === I ? void 0 : I.text.text,
					priority: l.c.Tertiary,
					size: l.d.XS,
					onClick: e => {
						var s;
						e.stopPropagation(), (null === (s = n.primaryCta) || void 0 === s ? void 0 : s.actionType) === b.a.GOTO && n.primaryCta.url && Object(i.e)(n.primaryCta.url, "_blank"), K(), L(t ? Object(d.x)(n.notificationName, d.b.CTA_1) : Object(d.n)(n.notificationName, d.b.CTA_1))
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
						e.stopPropagation(), (null == n ? void 0 : n.secondaryCta) && (n.secondaryCta.actionType === b.a.GOTO && n.secondaryCta.url && Object(i.e)(n.secondaryCta.url, "_blank"), K(), L(t ? Object(d.x)(n.notificationName, d.b.CTA_2) : Object(d.n)(n.notificationName, d.b.CTA_2)))
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
						e.stopPropagation(), K(), L(t ? Object(d.x)(n.notificationName, d.b.DISMISS) : Object(d.n)(n.notificationName, d.b.DISMISS))
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
				return K
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
				j = n("./src/reddit/components/ResizeSensor/index.tsx"),
				_ = n("./src/reddit/components/InboxTooltip/index.m.less"),
				P = n.n(_);
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
					}), !!p && a.a.createElement(j.a, {
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

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const K = [],
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
								n(!0), Object(Z.Db)(e)
							}, [e])]
						}(v),
						[x, j] = function(e) {
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
						_ = !(!d || !d.length),
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
					}), a.a.createElement(q, J({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: C,
						isDNInboxPromptBannerEnabled: N,
						isInboxPrivacyPolicyBannerEnabled: p && !y,
						setInboxPrivacyPolicyBannerSeen: E,
						isGarlicBreadEnabled: m && !x,
						setGarlicBreadBannerSeen: j
					})), (_ || c) && a.a.createElement($, {
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
				j = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				_ = n("./src/reddit/models/Media/index.ts"),
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
					[_.o.GIFVIDEO]: d.a.gif_post,
					[_.o.IMAGE]: d.a.image_post,
					[_.o.TEXT]: d.a.text_post,
					[_.o.RTJSON]: d.a.text_post,
					[_.o.VIDEO]: d.a.video_post,
					[_.o.EMBED]: d.a.embed,
					[_.o.GALLERY]: d.a.media_gallery,
					[_.o.LIVEAUDIO]: d.a.audio
				},
				D = e => F[(null == e ? void 0 : e.media) ? e.media.type : _.o.EMBED];
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
								post: n ? M.L(e, n.id) : void 0,
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
					}), this.props.showSubreddit && this.props.subreddit && a.a.createElement(a.a.Fragment, null, a.a.createElement(j.a, {
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
		"./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less": function(e, t, n) {
			e.exports = {
				searchNSFWToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNsfwToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNSFWToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9",
				searchNsfwToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9"
			}
		},
		"./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return M
			})), n.d(t, "a", (function() {
				return I
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/history/esm/history.js"),
				o = n("./node_modules/js-cookie/dist/js.cookie.js"),
				i = n.n(o),
				c = n("./src/lib/addQueryParams/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/colors/constants.ts"),
				u = n("./src/lib/constants/colors.ts"),
				m = n("./node_modules/react/index.js"),
				p = n.n(m),
				b = n("./node_modules/react-redux/es/index.js"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/reddit/actions/search.ts"),
				f = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				v = n("./src/reddit/constants/cookie.ts"),
				O = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				C = n("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				y = n("./src/reddit/helpers/trackers/searchResults.ts"),
				E = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				x = n("./src/reddit/hooks/usePageLayer.ts"),
				j = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/helpers/localStorage/index.ts");
			const S = e => {
				const [t, n] = Object(m.useState)(!1);
				return Object(m.useEffect)(() => {
					const t = Object(P.G)("should-show-tooltip") || {
						showTooltipOn: !0,
						showTooltipOff: !0
					};
					e ? (n(t.showTooltipOn), t.showTooltipOn && Object(P.Lb)("should-show-tooltip", {
						...t,
						showTooltipOn: !1
					})) : (n(t.showTooltipOff), t.showTooltipOff && Object(P.Lb)("should-show-tooltip", {
						...t,
						showTooltipOff: !1
					}))
				}, []), {
					shouldShowTooltip: t,
					resetShowTooltip() {
						t && n(!1)
					}
				}
			};
			var k = n("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				N = n.n(k);
			const w = "safe-search-toggle",
				M = () => {
					const e = new Date;
					e.setFullYear(e.getFullYear() + 2), i.a.set(v.h, !0, {
						expires: e,
						domain: s.a.cookieDomain,
						path: "/"
					})
				};

			function I(e) {
				let {
					searchOptions: t
				} = e;
				const n = Object(j.a)(),
					o = Object(b.d)(),
					P = Object(b.e)(e => Object(_.rb)(e)),
					[k, I] = Object(m.useState)(P),
					T = Object(E.a)({}),
					{
						shouldShowTooltip: A,
						resetShowTooltip: R
					} = S(!k);
				Object(m.useEffect)(() => {
					if (A) return window.addEventListener("click", R), () => {
						window.removeEventListener("click", R)
					}
				}, [A]);
				const L = Object(x.a)();
				return T.arrowProps.style = {
					...T.arrowProps.style,
					borderBottom: `3px solid ${u.a.alien600}`
				}, T.popperProps.style = {
					...T.popperProps.style,
					backgroundColor: u.a.alien600,
					top: "4px",
					maxWidth: "360px",
					textAlign: "center"
				}, p.a.createElement("div", {
					className: Object(l.a)(N.a.searchNSFWToggle),
					"data-testid": w,
					onMouseEnter: T.show,
					onMouseLeave: T.hide
				}, p.a.createElement("label", {
					htmlFor: w,
					className: Object(l.a)(N.a.searchNSFWToggleLabel)
				}, r.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), p.a.createElement(O.a, {
					activeColorOverride: d.a,
					id: w,
					on: !k,
					onToggle: function() {
						var e;
						k ? (I(!1), i.a.remove(v.h, {
							domain: s.a.cookieDomain,
							path: "/"
						})) : (I(!0), M()), n(Object(y.h)(k, t, L)), o(Object(g.l)({
							searchOver18: !k
						})), o(Object(h.b)(Object(a.c)({
							pathname: (null === (e = null == L ? void 0 : L.routeMatch) || void 0 === e ? void 0 : e.match.url) || C.a,
							search: Object(c.a)("", (null == L ? void 0 : L.queryParams) || {})
						})))
					},
					redditStyle: !0,
					ref: T.target.ref
				}), p.a.createElement(f.a, {
					visible: A || T.visible,
					arrowProps: T.arrowProps,
					popperProps: T.popperProps
				}, k ? r.fbt._("You'll see adult and Not Safe for Work (NSFW) search results unless you turn Safe Search on", null, {
					hk: "tQoEJ"
				}) : r.fbt._("You won't see adult or Not Safe for Work (NSFW) search results unless you turn Safe Search off", null, {
					hk: "2FiDyW"
				})))
			}
		},
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
					const a = v.r(e, t);
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
					...v.p(n),
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
						...v.p(e),
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
						...v.p(e),
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
				j = e => {
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
						...v.p(e),
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
			var _ = n("./src/reddit/hooks/useGqlContext.ts"),
				P = n("./src/reddit/hooks/useTracking.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/experiments/index.ts"),
				N = n("./src/reddit/selectors/user.ts");
			const w = () => {
					const e = Object(l.d)(),
						t = Object(_.a)(),
						[n, s] = Object(c.useState)(null),
						r = Object(P.a)(),
						o = Object(l.e)(N.k),
						i = Object(l.e)(N.Ib),
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
						m(r ? x(e) : b.type === g.a.MULTI_CHOICE ? j(e) : E(e))
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
					const [l, d] = Object(c.useState)(-1), [u, m] = Object(c.useState)(0), [p, b] = Object(c.useState)(!1), h = Object(P.a)(), [f, v] = Object(c.useState)(""), [O, C] = Object(c.useState)([]), _ = Object(c.useCallback)(() => {
						var e, c;
						const O = t.experimentName,
							_ = t.steps[l],
							P = null == _ ? void 0 : _.type,
							S = null == _ ? void 0 : _.question,
							k = null == _ ? void 0 : _.followUpQuestion,
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
							return void h(w === g.a.MULTI_CHOICE ? j({
								text: f,
								...e
							}) : E(e))
						}
						const I = {
							experimentName: O,
							type: P,
							action: "submit",
							questionId: u.toString(),
							questionParentId: _.type === g.a.MULTI_CHOICE && p ? `${u-1}` : null
						};
						if (h(p ? x({
								text: o,
								question: k,
								...I
							}) : P === g.a.MULTI_CHOICE ? j({
								question: S,
								max: null === (e = _.questionOptions) || void 0 === e ? void 0 : e.length,
								score: null === (c = _.questionOptions) || void 0 === c ? void 0 : c.findIndex(e => e === f),
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
								h(w === g.a.MULTI_CHOICE ? j({
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
						onStepComplete: _,
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
				if (Object(p.i)(e) || Object(h.ub)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.I)(e, n);
				if (!s) return;
				if (Object(h.tb)(e, {
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
				return Object(h.Kb)(e).nightmode
			}, (e, t) => {
				const n = Object(h.Kb)(e);
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
						method: s.ob.POST,
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
						method: s.ob.POST,
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
						method: s.ob.POST,
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
						method: s.ob.POST,
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
		"./src/reddit/endpoints/redditor/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				a = n("./src/redditGQL/operations/RedditorIdByName.json"),
				o = n("./src/redditGQL/operations/RedditorNameById.json");
			const i = async (e, t) => {
				var n;
				const o = await Object(s.a)(e, {
					...a,
					variables: t
				});
				return Object(r.c)(o) && (null === (n = o.body.data.redditorInfoByName) || void 0 === n ? void 0 : n.id) || null
			}, c = async (e, t) => {
				const n = await Object(s.a)(e, {
					...o,
					variables: t
				});
				return Object(r.c)(n) && n.body.data.redditorInfoById.name || null
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
					Object(r.b)(s.n.Redesign, {
						type: r.a.FrontPageFailed,
						data: {
							errorType: e,
							pageType: t
						}
					})
				},
				o = e => {
					Object(r.b)(s.n.Redesign, {
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
					o() || Object(a.b)(s.n.Redesign, {
						type: a.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				l = e => {
					!o() && e && Object(r.b)(10) && Object(a.b)(s.n.Redesign, {
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
				o = () => null !== document.getElementById(r.C)
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
					experimentName: r.de
				})
			}

			function m(e) {
				switch (e) {
					case r.ee.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case r.ee.Enabled:
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
		"./src/reddit/helpers/search/searchResultsTabTo.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/addQueryParams/index.ts"),
				r = n("./src/reddit/constants/history.ts"),
				a = n("./src/reddit/helpers/history/index.ts");
			const o = "/search/",
				i = e => {
					let {
						searchType: t,
						pageLayer: n
					} = e;
					var i;
					const {
						type: c,
						...l
					} = (null == n ? void 0 : n.queryParams) || {}, d = {
						...l,
						type: t,
						sort: void 0,
						t: void 0
					};
					return {
						pathname: (null === (i = null == n ? void 0 : n.routeMatch) || void 0 === i ? void 0 : i.match.url) || o,
						search: Object(s.a)("", {
							...d
						}),
						state: {
							[r.b.SearchOriginPage]: Object(a.b)(r.b.SearchOriginPage)
						}
					}
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
						post: t && Object(a.L)(e, t) || null,
						profile: Object(a.U)(e),
						screen: Object(a.db)(e),
						subreddit: Object(a.mb)(e)
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
					...Object(s.p)(t),
					customFeed: Object(s.o)(t, e),
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
					...Object(r.p)(e),
					action: s.c.CLICK,
					noun: "preview",
					source: "garlic_bread"
				}),
				o = () => e => ({
					...Object(r.p)(e),
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
						profile: a.U(e),
						subreddit: a.mb(e)
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
					...Object(i.p)(e),
					geo: Object(i.u)(e)
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
						s = (null == n ? void 0 : n.contentType) === c.v.Chat,
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
					...Object(i.p)(e, {
						isGVSEvent: !0
					}),
					geo: Object(i.u)(e),
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
					post: Object(i.L)(t, e),
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
					post: Object(i.L)(t, e),
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
					...Object(r.p)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(r.p)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				i = () => e => ({
					...Object(r.p)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var c;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(c || (c = {}));
			const l = e => t => {
					const n = Object(r.p)(t);
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
						...Object(r.p)(a),
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
					screen: s.db(e),
					profile: s.U(e),
					subreddit: s.mb(e)
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
				return j
			})), n.d(t, "i", (function() {
				return _
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
						...Object(r.p)(t),
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
					...Object(r.p)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: o
				}),
				d = () => e => ({
					...Object(r.p)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: o
				}),
				u = e => t => ({
					...Object(r.p)(t),
					action: s.c.DISMISS,
					noun: e,
					source: o
				}),
				m = () => e => ({
					...Object(r.p)(e),
					source: o,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(r.p)(e),
					source: o,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(r.p)(e),
					source: o,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = e => t => ({
					...Object(r.p)(t),
					source: o,
					action: s.c.VIEW,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				g = () => e => ({
					...Object(r.p)(e),
					source: o,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				f = () => e => ({
					...Object(r.p)(e),
					source: o,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				v = () => e => ({
					...Object(r.p)(e),
					source: o,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				O = (e, t) => n => ({
					...Object(r.p)(n),
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
					...Object(r.p)(e),
					source: o,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				y = () => e => ({
					...Object(r.p)(e),
					source: o,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				E = e => t => ({
					...Object(r.p)(t),
					source: o,
					action: s.c.SKIP,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				x = () => e => ({
					...Object(r.p)(e),
					source: o,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				j = (e, t, n, a, c) => l => ({
					...Object(r.p)(l),
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
				_ = (e, t, n, a, c, l) => d => ({
					...Object(r.p)(d),
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
					...Object(r.p)(a),
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
					...Object(r.p)(n),
					source: o,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: A(e),
						categoryId: t
					}
				}),
				k = () => e => ({
					...Object(r.p)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				N = () => e => ({
					...Object(r.p)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				w = (e, t) => n => ({
					...Object(r.p)(n),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: A(e),
						categoryId: t
					}
				}),
				M = () => e => ({
					...Object(r.p)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				I = (e, t, n, a) => c => ({
					...Object(r.p)(c),
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
					...Object(r.p)(l),
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
					...Object(r.p)(e),
					action: s.c.VIEW,
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: o
				}),
				B = e => t => ({
					...Object(r.p)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: o
				}),
				G = () => e => ({
					...Object(r.p)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: o
				}),
				U = e => t => ({
					...Object(r.p)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: o
				}),
				H = () => e => ({
					...Object(r.p)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: o
				}),
				q = e => t => ({
					...Object(r.p)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: o
				}),
				W = () => e => ({
					...Object(r.p)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_TOOLTIP,
					source: o
				}),
				V = e => t => ({
					...Object(r.p)(t),
					source: "settings",
					action: s.c.VIEW,
					noun: i.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				z = e => t => ({
					...Object(r.p)(t),
					source: "settings",
					action: s.c.SUBMIT,
					noun: i.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				Q = (e, t, n) => a => ({
					...Object(r.p)(a),
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
					...s.p(e),
					source: r,
					action: "view",
					noun: "recap",
					recap: s.Z(e)
				}),
				o = () => e => ({
					...s.p(e),
					source: r,
					action: "view",
					noun: "card",
					recap: s.Z(e)
				}),
				i = e => t => ({
					...s.p(t),
					noun: "subreddit",
					source: r,
					action: "click",
					recap: s.Z(t),
					subreddit: {
						id: e
					}
				}),
				c = (e, t) => n => ({
					...s.p(n),
					noun: "post",
					source: r,
					action: "click",
					recap: s.Z(n),
					post: {
						id: e,
						subredditId: t
					}
				}),
				l = (e, t) => n => ({
					...s.p(n),
					noun: "comment_unit",
					source: r,
					action: "click",
					recap: s.Z(n),
					comment: {
						id: e,
						postId: t
					}
				}),
				d = () => e => ({
					...s.p(e),
					source: r,
					action: "click",
					noun: "ability_card",
					recap: s.Z(e)
				}),
				u = () => e => ({
					...s.p(e),
					source: r,
					action: "click",
					noun: "learn_more",
					recap: s.Z(e)
				}),
				m = () => e => ({
					...s.p(e),
					source: r,
					action: "click",
					noun: "pn_enable",
					recap: s.Z(e)
				}),
				p = () => e => ({
					...s.p(e),
					source: r,
					action: "click",
					noun: "email_enable",
					recap: s.Z(e)
				}),
				b = () => e => ({
					...s.p(e),
					source: r,
					action: "click",
					noun: "email_verify",
					recap: s.Z(e)
				}),
				h = () => e => ({
					...s.p(e),
					source: r,
					action: "click",
					noun: "edit_snoovatar",
					recap: s.Z(e)
				}),
				g = () => e => ({
					...s.p(e),
					source: r,
					action: "click",
					noun: "hide_username",
					recap: s.Z(e)
				}),
				f = () => e => ({
					...s.p(e),
					source: r,
					action: "click",
					noun: "hide_avatar",
					recap: s.Z(e)
				}),
				v = () => e => ({
					...s.p(e),
					source: r,
					action: "click",
					noun: "share",
					recap: s.Z(e)
				}),
				O = (e, t, n) => a => ({
					...s.p(a),
					source: r,
					action: "click",
					noun: `${e?"subscribe":"unsubscribe"}`,
					recap: s.Z(a),
					subreddit: {
						id: n,
						name: t
					}
				}),
				C = () => e => ({
					...s.p(e),
					source: "nav",
					action: "click",
					noun: "recap",
					recap: s.Z(e)
				}),
				y = () => e => ({
					...s.p(e),
					source: r,
					action: "click",
					noun: "dismiss",
					recap: s.Z(e)
				}),
				E = () => e => ({
					...s.p(e),
					source: r,
					action: "click",
					noun: "place_timelapse",
					recap: s.Z(e)
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
				return j
			})), n.d(t, "d", (function() {
				return _
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
					post: s.L(n, t)
				}),
				o = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.i({
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
				j = e => o("z_downvote", e),
				_ = r("c_create_post"),
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
					screen: r.db(e),
					profile: r.U(e),
					subreddit: r.mb(e)
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
						pageType: t.platform.currentPage ? r.w(t.platform.currentPage) : void 0,
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
						id: Object(a.Db)(t, {
							userName: e
						}).id
					},
					...r.p(t)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(a.Db)(t, {
							userName: e
						}).id
					},
					...r.p(t)
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
					n(!0), Object(r.tb)(e)
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
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js");
			const r = (e, t, n) => {
				Object(s.useEffect)(() => (window.addEventListener(e, t, n), () => window.removeEventListener(e, t)), [e, t, n])
			};
			t.a = r;
			const a = (e, t) => r("keydown", e, t)
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
			var j = n("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				_ = n("./node_modules/redux-thunk/es/index.js"),
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
				L = n("./src/lib/safeJSONParse/index.ts"),
				F = n("./src/lib/serviceWorker/index.ts"),
				D = n("./src/reduxMiddleware/apiContext.ts"),
				B = n("./src/reduxMiddleware/gqlContext.ts"),
				G = n("./src/telemetry/index.ts"),
				U = n("./src/telemetry/helpers/sendEvent.ts"),
				H = n("./src/telemetry/models/Event.ts"),
				q = n("./src/telemetry/models/Timer.ts"),
				W = n("./src/reddit/actions/apiRequestHeaders.ts"),
				V = n("./src/reddit/actions/chat/toggle.ts"),
				z = n("./src/lib/activeUserCountByLiveChatId/actions.ts"),
				Q = n("./src/lib/activeUserCountByLiveChatId/utils.ts"),
				Z = n("./src/reddit/models/Post/index.ts"),
				J = n("./src/reddit/selectors/experiments/chat.ts");
			const K = Object(Q.b)(),
				X = async (e, t, n) => {
					K(() => e(X), Q.a);
					const s = function(e) {
						return Object.values(e.posts.models).filter(e => e.discussionType === Z.b.Chat).map(e => e.id)
					}(t());
					Object(z.b)(s, Object(J.f)(t()), Boolean(t().user.account), e, n)
				};
			var Y = n("./src/reddit/actions/comment/index.ts"),
				$ = n("./src/reddit/actions/emailCollection/index.ts"),
				ee = n("./src/reddit/actions/emailVerification.ts"),
				te = n("./src/reddit/actions/login.ts"),
				ne = n("./src/reddit/selectors/activeModalId.ts"),
				se = n("./node_modules/reselect/es/index.js"),
				re = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ae = n("./src/reddit/selectors/meta.ts");
			const oe = Object(se.a)(ae.c, O.S, re.d, re.e, (e, t, n, s) => !(e || t || n && s)),
				ie = () => async (e, t) => {
					const n = t(),
						s = oe(n);
					!!!Object(ne.a)(n) && s && e(Object(te.openGoogleOneTapModal)())
				};
			var ce = n("./src/reddit/actions/media.ts"),
				le = n("./src/lib/loadWithRetries/index.ts"),
				de = () => Object(le.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				ue = n("./src/reddit/actions/nps.ts");
			const me = Object(T.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var pe, be = n("./src/reddit/actions/platform.ts"),
				he = n("./src/reddit/actions/post.ts"),
				ge = n("./src/reddit/actions/search.ts"),
				fe = n("./src/reddit/actions/session.ts"),
				ve = n("./src/reddit/actions/survey/index.ts"),
				Oe = n("./src/reddit/actions/theme.ts"),
				Ce = n("./src/reddit/actions/toaster.ts"),
				ye = n("./src/reddit/actions/users.ts"),
				Ee = n("./node_modules/react-redux/es/index.js"),
				xe = n("./node_modules/react-router/esm/react-router.js"),
				je = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/faceplate.less"), n("./src/reddit/components/Root/tailwind.css"), n("./src/reddit/components/Root/index.m.less")),
				_e = n.n(je),
				Pe = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				Se = n("./src/lib/classNames/index.ts"),
				ke = n("./node_modules/lodash/isEqual.js"),
				Ne = n.n(ke),
				we = n("./node_modules/lodash/omit.js"),
				Me = n.n(we),
				Ie = n("./node_modules/lodash/throttle.js"),
				Te = n.n(Ie),
				Ae = n("./src/reddit/contexts/NavbarExp.ts"),
				Re = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Le = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				Fe = n("./src/lib/fastdom/index.ts"),
				De = n("./src/lib/FocusTrap/index.ts"),
				Be = n("./src/lib/isEqualWithoutKey/index.ts"),
				Ge = n("./src/lib/isSimpleClick/index.ts"),
				Ue = n("./src/reddit/actions/header.ts"),
				He = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				qe = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				We = n("./node_modules/polished/dist/polished.es.js"),
				Ve = n("./node_modules/react-motion/lib/react-motion.js"),
				ze = n("./src/lib/lessComponent.tsx"),
				Qe = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				Ze = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Je = n("./src/reddit/constants/accountManager.ts"),
				Ke = n("./src/reddit/helpers/trackers/onboarding.ts"),
				Xe = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ye = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				$e = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				et = n("./src/reddit/components/Carousel/index.m.less"),
				tt = n.n(et);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(pe || (pe = {}));
			class nt extends m.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === pe.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
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
						} = this.state, o = n === pe.Fade ? {
							opacity: t === a ? 1 : 0
						} : {
							marginLeft: 0 === t ? -s * a : void 0
						};
						return m.a.createElement("div", {
							className: Object(Se.a)(tt.a.item, tt.a[n]),
							key: `item-${t}`,
							style: {
								...o,
								backgroundImage: `url("${i.a.assetPath}/${e.img}")`,
								width: s
							},
							onClick: r ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(Se.a)(tt.a.indicator, {
							[tt.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						className: Object(Se.a)(e, tt.a.container)
					}, m.a.createElement("article", {
						className: tt.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: tt.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var st = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				rt = n.n(st);
			const at = ze.a.div("Container", rt.a),
				ot = ze.a.wrapped(nt, "Carousel", rt.a),
				it = ze.a.div("Phone", rt.a),
				ct = ze.a.img("Frame", rt.a),
				lt = `${i.a.assetPath}/img/frontpage-signup/android-frame.png`,
				dt = `${i.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				ut = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				mt = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var pt = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(at, {
						className: t
					}, m.a.createElement(it, {
						className: rt.a.android
					}, m.a.createElement(ot, {
						animationType: pe.Fade,
						className: rt.a.android,
						delay: 2500,
						items: ut,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(ct, {
						src: lt
					})), m.a.createElement(it, {
						className: rt.a.iphone
					}, m.a.createElement(ot, {
						animationType: pe.Fade,
						className: rt.a.iphone,
						items: mt,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(ct, {
						src: dt
					})))
				},
				bt = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				ht = n.n(bt);
			const gt = ze.a.div("Container", ht.a),
				ft = ze.a.span("Disclaimer", ht.a),
				vt = ze.a.a("Link", ht.a);
			var Ot = e => m.a.createElement(gt, {
					className: e.className
				}, m.a.createElement(vt, {
					href: "https://www.redditinc.com/"
				}, s.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(vt, {
					href: "https://www.redditinc.com/advertising"
				}, s.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(vt, {
					href: "http://www.redditblog.com/"
				}, s.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(vt, {
					href: "https://www.redditinc.com/careers"
				}, s.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(vt, {
					href: "https://www.reddithelp.com"
				}, s.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(vt, {
					href: "https://www.redditinc.com/press"
				}, s.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(vt, {
					href: "https://redditgifts.com/"
				}, s.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(vt, {
					href: "https://www.reddit.com/premium"
				}, s.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(vt, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, s.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(vt, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, s.fbt._("Mod policy", null, {
					hk: "1Hw2HM"
				})), m.a.createElement(ft, null, s.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				Ct = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				yt = n.n(Ct);
			const Et = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				xt = ze.a.div("Container", yt.a),
				jt = ze.a.wrapped(Qe.a, "IFrame", yt.a),
				_t = ze.a.wrapped(pt, "Images", yt.a),
				Pt = ze.a.wrapped(Ot, "Links", yt.a),
				St = ze.a.div("MainContent", yt.a),
				kt = ze.a.div("MainContentColumn", yt.a),
				Nt = ze.a.button("NotReady", yt.a),
				wt = ze.a.span("NotReadyText", yt.a),
				Mt = ze.a.wrapped(Xe.a, "NotReadyIcon", yt.a),
				It = Object(Re.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: r,
						onCloseClick: a,
						onVisibilityChange: o
					} = e, i = Object(Ye.a)(e).bodyText;
					return m.a.createElement(qe.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: o
					}, m.a.createElement(xt, {
						className: t,
						innerRef: n
					}, m.a.createElement(St, null, m.a.createElement(kt, null, m.a.createElement(_t, null, "Images Placeholder")), m.a.createElement(kt, null, m.a.createElement(jt, {
						className: Object(Se.a)({
							[yt.a.fields]: Object($e.b)(r)
						}),
						path: Je.c.Register,
						uiMode: Je.d.Embed
					}))), m.a.createElement(Nt, {
						onClick: a,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(We.i)(.8, i)
						}
					}, m.a.createElement(wt, null, s.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(Mt, null)), m.a.createElement(Pt, null)))
				});
			class Tt extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class At extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(Ke.d)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(Tt, {
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(It, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(Ve.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(Ve.spring)(s, Et)
						}
					}, this.renderScroller))
				}
			}
			var Rt = Object(Ze.c)(At),
				Lt = n("./src/lib/localStorageAvailable/index.ts"),
				Ft = n("./src/reddit/actions/modal.ts"),
				Dt = n("./src/higherOrderComponents/makeAsync.tsx"),
				Bt = Object(Dt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				Gt = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Ut = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var Ht = Object(Dt.a)({
				getComponent: () => Object(le.a)(() => n.e("NotificationsPermissionPromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPermissionPrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var qt = Object(Dt.a)({
				getComponent: () => Object(le.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Wt = () => null;
			var Vt = Object(Dt.a)({
					ErrorComponent: Wt,
					getComponent: () => Object(le.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Wt
				}),
				zt = n("./src/higherOrderComponents/asModal/index.tsx"),
				Qt = n("./src/reddit/actions/structuredStyles/index.ts"),
				Zt = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Jt = n("./src/reddit/constants/modals.ts"),
				Kt = n("./src/reddit/controls/TextButton/index.tsx"),
				Xt = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Yt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $t = Object(Ee.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(Ft.i)(Jt.a.BLADE_NIGHTMODE)), e(Object(Qt.f)())
					},
					openBlade: () => {
						e(Object(Qt.e)(n))
					}
				}
			});
			var en = Object(zt.a)($t(e => m.a.createElement(Zt.e, null, m.a.createElement(Zt.i, null, m.a.createElement(Xt.a, null, m.a.createElement(Zt.q, null, Yt._("Turning off Dark Mode", null, {
					hk: "2RVfrK"
				})), m.a.createElement(Kt.a, {
					onClick: e.closeModal
				}, m.a.createElement(Zt.b, null)))), m.a.createElement(Zt.l, null, m.a.createElement(Zt.o, null, Yt._("In order to continue styling your community, Dark Mode must be turned off.", null, {
					hk: "2oiEiX"
				}))), m.a.createElement(Zt.g, null, m.a.createElement(Zt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, Yt._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(Zt.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, Yt._("Continue", null, {
					hk: "413jMZ"
				})))))),
				tn = n("./src/reddit/actions/authorFlair.ts"),
				nn = n("./src/reddit/actions/gold/powerups.ts"),
				sn = n("./src/reddit/actions/userFlair/index.ts"),
				rn = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				an = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				on = n("./src/reddit/components/FlairPreview/index.tsx"),
				cn = n("./src/reddit/components/FlairSearch/index.tsx"),
				ln = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				dn = n("./src/reddit/controls/Button/index.tsx"),
				un = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				mn = n("./src/reddit/layout/row/Inline/index.tsx"),
				pn = n("./src/reddit/models/Flair/index.ts"),
				bn = n("./src/reddit/models/User/index.ts"),
				hn = n("./src/reddit/selectors/authorFlair.ts"),
				gn = n("./src/reddit/selectors/moderatorPermissions.ts"),
				fn = n("./src/reddit/selectors/telemetry.ts"),
				vn = n("./src/reddit/selectors/userFlair.ts"),
				On = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				Cn = n.n(On);
			const yn = e => e.flairModalContext && e.currentUser && Object(bn.e)(e.currentUser) === e.flairModalContext.username,
				En = e => e.authorFlair || yn(e) && e.userFlairData.applied || null,
				xn = ze.a.wrapped(mn.a, "Section", Cn.a),
				jn = ze.a.div("CheckboxText", Cn.a);
			class _n extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(fn.nb)(t, this.props.subredditId)
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
						previewFlair: En(e),
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
					} = e.displaySettings, a = this.state.showFlair !== r, o = En(this.props);
					if (!s.canUserChange) return a;
					const {
						canSave: i,
						reason: c
					} = Object(ln.b)(n, t, o);
					return !(i || c !== ln.a.NoChanges && c !== ln.a.InvalidTemplate || !a) || i
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
					} = n, u = this.canSave(), p = yn(e);
					return m.a.createElement(an.a, null, m.a.createElement(rn.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(on.a, {
						flair: t.previewFlair,
						flairTemplateType: pn.d.UserFlair,
						placeholderText: s.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(cn.a, {
						flair: t.previewFlair,
						flairTemplateType: pn.d.UserFlair,
						subredditId: r,
						templates: l,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(xn, null, m.a.createElement(un.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(jn, null, s.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: Cn.a.buttonsRow
					}, c && m.a.createElement(dn.t, {
						className: Cn.a.goBackButton,
						priority: dn.c.Plain,
						onClick: e.openAchiementFlairModal
					}, s.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: Cn.a.rightSideButtons
					}, o && m.a.createElement(dn.o, {
						className: Cn.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(dn.l, {
						disabled: !u,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const Pn = Object(Ee.b)(() => Object(se.c)({
				authorFlair: hn.b,
				currentUser: O.m,
				flairModalContext: hn.c,
				isMod: (e, t) => !!Object(gn.n)(e, t),
				userFlairData: vn.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, r, a) => e(Object(sn.f)(n, s, r, a.username, t.subredditId)),
				closeModal: () => e(Object(tn.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(nn.a)())
			}))(_n);
			var Sn = Object(zt.a)(Object(Ze.c)(Pn)),
				kn = n("./src/reddit/selectors/bannedUser.ts"),
				Nn = n("./src/reddit/selectors/muted.ts"),
				wn = n("./src/reddit/selectors/notificationPrefs.ts"),
				Mn = n("./src/reddit/selectors/platform.ts"),
				In = n("./src/reddit/selectors/removalReasons.ts"),
				Tn = n("./src/reddit/constants/cookie.ts"),
				An = n("./src/reddit/featureFlags/index.ts"),
				Rn = n("./src/reddit/helpers/localStorage/index.ts"),
				Ln = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Fn = Object(se.c)({
				activeModalId: ne.a,
				askNotificationsPrePromptIsOpen: wn.c,
				authorContext: hn.c,
				badgePurchaseModalIsOpen: Object(ne.b)(Jt.a.BADGE_PURCHASE),
				banContext: kn.a,
				banModalIsOpen: Object(ne.b)(Jt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(ne.b)(Jt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				introModalFeatureEnabled: e => An.d.introModal(e),
				isOverlayOpen: Mn.i,
				moderatorPermissions: e => {
					const t = Object(Mn.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Nn.b,
				muteModalIsOpen: Object(ne.b)(Jt.a.MUTE_USER),
				notificationsPrePromptIsOpen: wn.e,
				removalReasonContext: In.b,
				removalReasonModalIsOpen: Object(ne.b)(Jt.a.ADD_REMOVAL_REASON),
				subredditId: Mn.c,
				userFlairModalIsOpen: Object(ne.b)(Jt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: O.C,
				userInRedesignBeta: O.J,
				userIsLoggedIn: O.S,
				userIsMod: O.T,
				userIsNew: O.W
			});
			class Dn extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Lt.a)()) return; {
						const e = d.a.get(Tn.a);
						e && d.a.remove(Tn.a, {
							domain: i.a.cookieDomain
						});
						const t = Object(Rn.L)(Jt.a.ALPHA_CONSUMER);
						t && Object(Rn.cb)(Jt.a.ALPHA_CONSUMER), (e || t) && Object(Rn.Ob)(Jt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Rn.L)(Jt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Rn.Ob)(Jt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate(e) {
					this.conditionalModalCheck(), e.activeModalId !== this.props.activeModalId && (Jt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Ln.a)(), 500) : setTimeout(() => Object(Ln.b)(), 500)))
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
						comment: n && Object(fn.i)({
							state: r,
							commentId: n
						}),
						post: n && Object(fn.L)(r, n),
						screen: Object(fn.db)(r),
						subreddit: Object(fn.nb)(r, t)
					}));
					return m.a.createElement(u.Fragment, null, r && s && m.a.createElement(Gt.a, {
						contextId: s.contextId,
						subredditId: s.subredditId,
						toggleModal: g,
						trackAddEvent: C("banned", s.subredditId, s.contextId)("add_in_context"),
						trackEventWithName: C("banned", s.subredditId, s.contextId),
						username: s.username,
						withOverlay: !0
					}), c && i && m.a.createElement(Ut.a, {
						contextId: i.contextId,
						subredditId: i.subredditId,
						toggleModal: f,
						trackAddEvent: C("muted", i.subredditId, i.contextId)("add_in_context"),
						username: i.username,
						withOverlay: !0
					}), p && d && m.a.createElement(Vt, {
						itemIds: d.itemIds,
						subredditId: d.subredditId,
						toggleModal: v
					}), a && h && m.a.createElement(en, {
						subredditId: h
					}), O && t && t.subredditId && m.a.createElement(Sn, {
						subredditId: t.subredditId,
						withOverlay: !0
					}), n && o && m.a.createElement(Bt, {
						withOverlay: !0,
						productId: o
					}), l && m.a.createElement(qt, null), e && m.a.createElement(Ht, null))
				}
			}
			var Bn = Object(Ee.b)(Fn, e => ({
					markRedesignModalAsClosed: () => e(Object(Ft.j)()),
					toggleBanModal: () => e(Object(Ft.i)(Jt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(Ft.i)(Jt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(Ft.i)(Jt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(Ft.i)(Jt.a.ADD_REMOVAL_REASON))
				}))(Object(Ze.c)(Dn)),
				Gn = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Un = n("./src/reddit/constants/experiments.ts"),
				Hn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				qn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Wn = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				Vn = n("./src/reddit/selectors/responsiveSettings.ts"),
				zn = n("./src/telemetry/helpers/sendCounter.ts"),
				Qn = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Zn = n.n(Qn);
			const Jn = ze.a.div("Overlay", Zn.a),
				Kn = ze.a.div("IframeContainer", Zn.a),
				Xn = {},
				Yn = Object(Hn.v)(),
				$n = Object(se.c)({
					frontpageSignupVariant: $e.a,
					isAmModalDesignUpdateEnabled: Wn.a,
					isResponsiveSettingsEnabled: Vn.a
				}),
				es = {
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
			class ts extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === Je.c.Register && Object($e.f)(this.props.frontpageSignupVariant) && qn.a.throttleFeature(Un.wd), this.props.sendEvent(Object(Ke.d)(this.subscriptions))
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
						"user_cancel" === e && (this.props.sendEvent(Object(Ke.g)()), Object(zn.b)(k.n.Redesign, {
							type: zn.a.OneTapDismissed,
							data: {}
						}))
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(Ke.h)()), Object(zn.b)(k.n.Redesign, {
							type: zn.a.OneTapViewed,
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
					} = this.state, l = Object($e.c)(e) || Object($e.d)(e), d = r === Je.c.LinkAppleSSO || r === Je.c.LinkGoogleSSO || r === Je.c.UnlinkAppleSSO || r === Je.c.UnlinkGoogleSSO, u = r === Je.c.GoogleOneTap, p = Object(Se.a)({
						[Zn.a.mModalUpdate]: t,
						[Zn.a.small]: l,
						[Zn.a.ssoConfirmPassword]: d,
						[Zn.a.linkActionSSOFail]: o,
						[Zn.a.mResponsive]: n,
						[Zn.a.mGoogleOneTap]: u && !i
					}), b = Object(Se.a)({
						[Zn.a.mGoogleOneTap]: u && !i,
						[Zn.a.mHiddenOverlay]: u && !c
					}), h = !l && !o && !n;
					return m.a.createElement(Jn, {
						className: b
					}, m.a.createElement(Kn, {
						className: p,
						style: a || Xn
					}, m.a.createElement(Qe.a, {
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
			const ns = Yn(Object(Ee.b)($n, (e, t) => ({
				closeModal: t => {
					e(Object(Ft.g)(es[t]))
				}
			}))(Object(Ze.c)(ts)));
			Object(Gn.b)(Jt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(ns, {
				path: Je.c.ChangePassword
			})), Object(Gn.b)(Jt.a.LOGIN_MODAL_ID, e => m.a.createElement(ns, {
				path: Je.c.Index
			})), Object(Gn.b)(Jt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(ns, {
				path: Je.c.Onboarding
			})), Object(Gn.b)(Jt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(ns, {
				path: Je.c.EnableTwoFactor
			})), Object(Gn.b)(Jt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(ns, {
				path: Je.c.DisableTwoFactor
			})), Object(Gn.b)(Jt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(ns, {
				path: Je.c.TwoFactorBackupCodes
			})), Object(Gn.b)(Jt.a.REGISTER_MODAL_ID, e => m.a.createElement(ns, {
				path: Je.c.Register
			})), Object(Gn.b)(Jt.a.LINK_APPLE_SSO, e => m.a.createElement(ns, {
				path: Je.c.LinkAppleSSO
			})), Object(Gn.b)(Jt.a.LINK_GOOGLE_SSO, e => m.a.createElement(ns, {
				path: Je.c.LinkGoogleSSO
			})), Object(Gn.b)(Jt.a.UNLINK_APPLE_SSO, e => m.a.createElement(ns, {
				path: Je.c.UnlinkAppleSSO
			})), Object(Gn.b)(Jt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(ns, {
				path: Je.c.UnlinkGoogleSSO
			})), Object(Gn.b)(Jt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(ns, {
				path: Je.c.GoogleOneTap
			}));
			n("./src/reddit/components/CCM/PrivateCommunityAccessModal/async.tsx"), n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const ss = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(ss, {
				withOverlay: !0
			}));
			const rs = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(rs, {
				withOverlay: !0
			}));
			const as = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(as, {
				withOverlay: !0
			}));
			const os = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.CROWD_CONTROL, e => m.a.createElement(os, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const is = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(is, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const cs = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(cs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const ls = Object(Dt.a)({
					getComponent: () => Object(le.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				ds = e => () => {
					e()
				};
			Object(Gn.b)(Jt.a.GOLD_GILD_MODAL, e => m.a.createElement(ls, {
				onOverlayClick: ds(e),
				withOverlay: !0
			}));
			var us = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				ms = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				ps = n.n(ms);
			const bs = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = us.SPARKLE_ASSET_PATH, document.createElement("img").src = us.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Gn.b)(Jt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(bs, {
				withOverlay: !0,
				className: ps.a.modalBody,
				overlayClassName: ps.a.modalOverlay
			}));
			const hs = Object(Dt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				gs = e => () => {
					e()
				};
			Object(Gn.b)(Jt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(hs, {
				onOverlayClick: gs(e),
				withOverlay: !0
			}));
			const fs = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(fs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const vs = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(vs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Os = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(Os, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Cs = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(Cs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx");
			const ys = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(ys, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const Es = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), n.e("GovernanceTransferPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.TRANSFER_POINTS, e => m.a.createElement(Es, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const xs = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(xs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const js = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(js, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const _s = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(_s, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ps = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.MULTIREDDIT_CREATE, e => m.a.createElement(Ps, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Gn.b)(Jt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(Ps, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ss = Object(Dt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Gn.b)(Jt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Ss, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ks = () => Promise.all([n.e(0), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				Ns = Object(Dt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(le.a)(ks).then(e => e.default)
				});
			Object(Gn.b)(Jt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(Ns, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const ws = () => null,
				Ms = Object(Dt.a)({
					ErrorComponent: ws,
					getComponent: () => Object(le.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: ws
				});
			Object(Gn.b)(Jt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Ms, null));
			n("./src/reddit/components/QrCodeModal/async.tsx");
			var Is = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Ts = n.n(Is);
			const As = ze.a.h2("ColumnLabel", Ts.a),
				Rs = ze.a.wrapped(mn.a, "ColumnWrapper", Ts.a),
				Ls = ze.a.div("Column", Ts.a),
				Fs = ze.a.div("Description", Ts.a),
				Ds = ze.a.div("Key", Ts.a),
				Bs = ze.a.wrapped(Zt.l, "ModalMain", Ts.a),
				Gs = ze.a.wrapped(Zt.e, "ModalBody", Ts.a),
				Us = ze.a.wrapped(dn.l, "PrimaryButton", Ts.a),
				Hs = ze.a.wrapped(Kt.a, "TextButton", Ts.a),
				qs = Object(Ee.b)(null, e => ({
					closeModal: () => e(Object(Ft.i)(Jt.a.KEYBOARD_SHORTCUTS))
				})),
				Ws = ze.a.wrapped(Object(zt.a)(qs(e => m.a.createElement(Gs, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(Zt.i, null, m.a.createElement(Xt.a, null, m.a.createElement(Zt.q, null, s.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Hs, {
					onClick: e.closeModal
				}, m.a.createElement(Zt.b, null)))), m.a.createElement(Bs, null, m.a.createElement(Rs, null, m.a.createElement(Ls, null, m.a.createElement(mn.a, null, m.a.createElement(As, null, s.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Ds, null, "Shift + ?")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Ds, null, "J")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Ds, null, "K")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Ds, null, "N")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Ds, null, "P")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Ds, null, "Enter")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Ds, null, "X")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Ds, null, "L"))), m.a.createElement(Ls, null, m.a.createElement(mn.a, null, m.a.createElement(As, null, s.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Ds, null, "A")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Ds, null, "Z")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Ds, null, "C")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Ds, null, "R")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Ds, null, "Ctrl + Enter")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Ds, null, "S")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Ds, null, "H")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Ds, null, "Q")), m.a.createElement(mn.a, null, m.a.createElement(Fs, null, s.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Ds, null, "Enter"))))), m.a.createElement(Zt.g, null, m.a.createElement(Us, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, s.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", Ts.a);
			Object(Gn.b)(Jt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Ws, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Vs = Object(Dt.a)({
					getComponent: () => Object(le.a)(() => Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), n.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), n.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), n.e("SnoovatarModal")]).then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				zs = e => () => {
					e()
				};
			Object(Gn.b)(Jt.a.SNOOVATAR_MODAL, e => m.a.createElement(Vs, {
				onOverlayClick: zs(e),
				withOverlay: !0
			}));
			const {
				fbt: Qs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Zs = Object(se.c)({
				allowNavigationCallback: Mn.a
			}), Js = Object(Ee.b)(Zs, e => ({
				closeModal: () => e(Object(Ft.i)(Jt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Qt.a)())
			}));
			class Ks extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(Zt.e, null, m.a.createElement(Zt.i, null, m.a.createElement(Xt.a, null, m.a.createElement(Zt.q, null, Qs._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(Kt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(Zt.b, null)))), m.a.createElement(Zt.l, null, m.a.createElement(Zt.p, null, Qs._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(Zt.g, null, m.a.createElement(Zt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Qs._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(Zt.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Qs._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const Xs = Object(zt.a)(Js(Ks));
			Object(Gn.b)(Jt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Xs, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const Ys = () => n.e("NsfwBlockingModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx")),
				$s = Object(Dt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(le.a)(Ys).then(e => e.default)
				});
			Object(Gn.b)(Jt.a.NSFW_BLOCKING_MODAL_V2, e => m.a.createElement($s, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const er = () => n.e("NsfwSearchModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwSearch/Modal.tsx")),
				tr = Object(Dt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(le.a)(er).then(e => e.default)
				});
			Object(Gn.b)(Jt.a.NSFW_SEARCH_MODAL, e => m.a.createElement(tr, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const nr = Object(se.c)({
					activeModalId: ne.a
				}),
				sr = Object(Ee.b)(nr, e => ({
					toggleModal: t => e(Object(Ft.i)(t))
				})),
				rr = 500,
				ar = () => {};
			class or extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate(e) {
					e.activeModalId !== this.props.activeModalId && (Jt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Ln.a)(), rr) : setTimeout(() => Object(Ln.b)(), rr)))
				}
				componentWillUnmount() {
					Object(Ln.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Gn.a)(e)(e ? this.toggleModal : ar)
				}
			}
			var ir = sr(or),
				cr = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				lr = n("./src/reddit/actions/cooldownTime.ts");

			function dr(e) {
				return `${e}`.padStart(2, "0")
			}
			class ur {
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
			var mr = n("./src/reddit/selectors/experiments/garlicBread.ts"),
				pr = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				br = n.n(pr);
			const hr = Object(se.c)({
				isEmbedSubredditPage: mr.c,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: Mn.b
			});
			class gr extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${dr(n)}` : `${n}:${dr(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new ur(this.drawTimer), this.state = {
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
						className: br.a.timer
					}, s.fbt._("{Time remaining}", [s.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var fr = Object(Ee.b)(hr, e => ({
					fetchCooldownTimer: () => e(Object(lr.e)())
				}))(gr),
				vr = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Or = n("./src/reddit/helpers/trackers/garlicBread.ts"),
				Cr = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				yr = n("./src/reddit/hooks/useTracking.ts"),
				Er = n("./src/reddit/icons/svgs/GarlicBread/index.tsx"),
				xr = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				jr = n.n(xr);
			var _r = () => {
					const e = Object(yr.a)(),
						t = Object(u.useCallback)(() => {
							e(Object(Or.a)())
						}, [e]),
						n = Object(Cr.a)(),
						r = Object(Ee.e)(mr.b);
					return Object(Ee.e)(mr.a) ? m.a.createElement(m.a.Fragment, null, m.a.createElement(cr.a, {
						className: Object(Se.a)(jr.a.icon, jr.a.garlicBreadLink),
						innerRef: n.target.ref,
						to: `/r/${r}`,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						onClick: t
					}, m.a.createElement(Er.a, {
						className: jr.a.garlicBreadIcon
					}), m.a.createElement(fr, null)), m.a.createElement(vr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, s.fbt._("Place your pixel", null, {
						hk: "1Giu1S"
					}))) : null
				},
				Pr = n("./src/reddit/actions/page.ts"),
				Sr = n("./src/reddit/actions/shortcuts/utils.ts"),
				kr = n("./src/reddit/icons/fonts/index.tsx"),
				Nr = n("./src/reddit/selectors/header.ts"),
				wr = n("./src/reddit/selectors/userPrefs.ts"),
				Mr = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				Ir = n("./src/reddit/components/SEOTitle/index.tsx"),
				Tr = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Ar = n("./src/reddit/components/UserIcon/index.tsx"),
				Rr = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx");

			function Lr() {
				return (Lr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Fr = e => m.a.createElement("svg", Lr({
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
			var Dr, Br = e => {
					const t = Object(Ee.e)(O.fb);
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
				Gr = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Ur = n.n(Gr);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.HappeningNow = "HappeningNow", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Premium = "Premium", e.Recap = "Recap", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Dr || (Dr = {}));
			const Hr = () => m.a.createElement(Br, {
				className: Ur.a.wrappedRedditDropdown,
				isForMenu: !0
			});
			const qr = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(Ir.b, {
					type: Ir.a.HeaderSelector
				}, s))
			};
			var Wr = n("./src/lib/objectSelector/index.ts"),
				Vr = n("./src/reddit/constants/wiki.ts"),
				zr = n("./src/reddit/selectors/frontpage.ts"),
				Qr = n("./src/reddit/selectors/subreddit.ts"),
				Zr = n("./src/reddit/selectors/topic.ts");
			var Jr = Object(Wr.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = Object(O.S)(e),
						r = Object(zr.b)(e),
						a = Object(Hn.bb)(n);
					switch (a) {
						case "avatar":
							return {
								type: Dr.Avatar
							};
						case "index":
						case "listing":
							return s || r ? {
								type: Dr.Home
							} : {
								type: Dr.Popular
							};
						case "modListing":
							return {
								type: Dr.ModListing
							};
						case "modQueuePages":
							return {
								type: Dr.ModQueue
							};
						case "postCreation":
							return {
								type: Dr.CreatePost
							};
						case "postDraft":
							return {
								type: Dr.ViewDraft
							};
						case "recap":
							return {
								type: Dr.Recap
							};
						case "subredditCreation":
							return {
								type: Dr.SubredditCreation
							};
						case "coins":
							return {
								type: Dr.Coins
							};
						case "internationalSitePage":
							return {
								type: Dr.InternationalSite
							};
						case "happeningNow":
							return {
								type: Dr.HappeningNow
							};
						case "premium":
							return {
								type: Dr.Premium
							};
						case "acknowledgements":
							return {
								type: Dr.Acknowledgements
							};
						case "appeal":
							return {
								type: Dr.Appeal
							};
						case "report":
							return {
								type: Dr.Report
							};
						case "userDataRequest":
							return {
								type: Dr.UserDataRequest
							};
						case "geotagging":
							return {
								type: Dr.Geotagging
							};
						case "notificationsInbox":
							return {
								type: Dr.NotificationsInbox
							};
						case "topic": {
							const t = Object(Hn.u)(n),
								s = t && Object(Zr.d)(e, t);
							if (s) return {
								type: Dr.Topic,
								model: s
							}
						}
					}
					const o = e.user.account;
					if (o) switch (a) {
						case "inboxPages":
							return {
								type: Dr.Inbox, model: o
							};
						case "settings":
							return {
								type: Dr.Settings, model: o
							}
					}
					const i = Object(Hn.V)(e, {
						pageLayer: n
					});
					if ("all" === i) return {
						type: Dr.All
					};
					if ("popular" === i) return {
						type: Dr.Popular
					};
					const c = Object(Hn.s)(e, {
						pageLayer: n
					});
					if (c) return "searchResults" === a ? {
						type: Dr.CommunitySearch,
						model: c
					} : {
						type: Dr.Community,
						model: c
					};
					const l = Object(Hn.e)(e, {
						pageLayer: n
					});
					if (l) return {
						type: Dr.Multi,
						model: l
					};
					const d = Object(Hn.l)(e, {
						pageLayer: n
					});
					if (d) return {
						type: Dr.UserProfile,
						model: d
					};
					const u = Object(Hn.j)(n);
					if (u) return {
						type: Dr.UserProfileName,
						name: `u/${u}`
					};
					if (a && "searchResults" === a) return {
						type: Dr.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(Hn.p)(e, {
								pageLayer: n
							}) || Vr.e,
							s = Object(Qr.C)(e, {
								subredditName: t
							});
						if (s) return {
							type: Dr.Community,
							model: s
						}
					}
					return {
						type: Dr.Unknown
					}
				}),
				Kr = n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				Xr = n.n(Kr);

			function Yr() {
				return (Yr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function $r(e) {
				const t = e.icon,
					n = e.text,
					s = e.badge,
					r = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Xr.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Object(Se.a)(Xr.a.text, {
								[Xr.a.hasBadge]: !!s
							})
						}), s && m.a.createElement(s, {
							className: Xr.a.badge
						})),
						className: Object(Se.a)(Xr.a.item, e.className, {
							[Xr.a.mFocused]: !!e.isFocused,
							[Xr.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return r["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Yr({}, r, {
					href: e.to,
					target: "_blank",
					rel: "noopener noreferrer"
				})) : m.a.createElement(cr.a, Yr({}, r, {
					to: e.to
				})) : m.a.createElement("button", r)
			}
			var ea = n("./src/reddit/components/BadgeCounter/index.tsx"),
				ta = n("./src/reddit/constants/localStorage.ts"),
				na = n("./src/reddit/hooks/useIsClient.ts"),
				sa = n("./src/reddit/hooks/useLocalStorage.ts");
			const ra = e => {
					const t = Number(e);
					return isNaN(t) ? 0 : t
				},
				aa = e => {
					let {
						className: t
					} = e;
					const n = Object(na.a)(),
						s = Object(Ee.e)(Mn.g),
						r = Object(Ee.e)(O.S),
						[a, o] = Object(sa.a)(ta.b.LOGGED_OUT_HOME_SEEN, {}),
						i = Date.now(),
						c = ra(a.dismissed),
						l = ra(a.throttledUntil),
						d = !n || r || c >= 3 || s || i < l;
					return n && !r && s && c < 3 && i > l && o({
						dismissed: c + 1,
						throttledUntil: i + k.D
					}), d ? null : m.a.createElement(ea.a, {
						className: t,
						isActive: !0,
						unreadCount: -1
					})
				};
			var oa = n("./src/reddit/routes/modListing/index.ts"),
				ia = n("./src/reddit/selectors/countrySites.ts"),
				ca = n("./src/reddit/selectors/experiments/econ/index.ts"),
				la = n("./src/reddit/selectors/experiments/happeningNow.ts"),
				da = n("./src/reddit/selectors/multireddit.ts"),
				ua = n("./src/lib/LinkedListMap/index.ts"),
				ma = n("./src/reddit/routes/avatar/index.ts");

			function pa() {
				return (pa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ba = Object(se.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(da.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(da.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				recentSubreddits: e => e.recentSubreddits.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var ha;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost", e[e.ExploreMenu = 11] = "ExploreMenu"
			}(ha || (ha = {}));
			const ga = [e => ({
					id: Dr.Employee,
					type: ha.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(kr.a, pa({
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
				fa = () => [e => ({
					id: Dr.All,
					type: ha.GenericLink,
					model: {
						url: "/r/all/",
						displayText: s.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(kr.a, pa({
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
				va = () => [e => ({
					id: "reddit-feeds",
					type: ha.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Dr.Home,
					type: ha.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(kr.a, pa({
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
					id: Dr.Popular,
					type: ha.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(kr.a, pa({
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
				}), ...fa()],
				Oa = e => m.a.createElement(aa, {
					className: e.className
				}),
				Ca = [e => ({
					id: "reddit-feeds",
					type: ha.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Dr.Home,
					type: ha.GenericLink,
					model: {
						url: "/?feed=home",
						badge: Oa,
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(kr.a, pa({
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
					id: Dr.Popular,
					type: ha.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(kr.a, pa({
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
				ya = [e => ({
					id: "reddit-other",
					type: ha.Header,
					model: {
						displayText: s.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Dr.Settings,
					type: ha.GenericLink,
					model: {
						url: "/settings",
						displayText: s.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(Rr.a, {
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
					id: Dr.Inbox,
					type: ha.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: s.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(Rr.a, {
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
				Ea = e => ({
					id: Dr.Coins,
					type: ha.GenericLink,
					model: {
						url: "/coins",
						displayText: s.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(kr.a, pa({
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
				xa = e => ({
					id: Dr.Premium,
					type: ha.GenericLink,
					model: {
						url: "/premium",
						displayText: s.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(kr.a, pa({
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
					id: Dr.Avatar,
					type: ha.GenericLink,
					model: {
						url: ma.a,
						displayText: s.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(kr.a, pa({
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
				_a = [e => ({
					id: Dr.ModQueue,
					type: ha.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: s.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(kr.a, pa({
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
						id: Dr.ModMail,
						type: ha.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: s.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(kr.a, pa({
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
			const Pa = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const r = {
						id: Dr.CreateCommunity,
						telemetryNoun: "create_community"
					},
					a = {
						displayText: s.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(kr.a, pa({
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
					type: ha.GenericClickable,
					model: {
						...a,
						onClick: () => {
							n ? (t(Object(Ft.k)({
								actionSource: Ft.a.HeaderSignup
							})), t(Object(te.openRegisterModal)())) : t(Object(Ft.h)(Jt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var Sa = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				ka = n.n(Sa);

			function Na(e) {
				return m.a.createElement("div", {
					className: Object(Se.a)(ka.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var wa = n("./src/reddit/actions/subscription/index.ts"),
				Ma = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				Ia = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				Ta = n.n(Ia);

			function Aa() {
				return (Aa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ra = Object(se.c)({
					currentUser: O.m,
					hideNSFWPref: O.H,
					isLoggedIn: O.S
				}),
				La = Object(Ee.b)(Ra, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case ha.Subreddit:
								e(Object(wa.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case ha.Profile:
								e(Object(wa.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case ha.Multi:
								e(Object(wa.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(Ma.f)(t.model.url)) : t.sendEvent(Object(Ma.c)(t.model.url))
						}
					}
				}));
			var Fa = Object(Ze.c)(La((function(e) {
					const t = {
						className: Object(Se.a)(Ta.a.item, e.className, {
							[Ta.a.mFocused]: !!e.isFocused
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
						case ha.Subreddit:
							return m.a.createElement(cr.a, Aa({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Tr.b, {
								className: Ta.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: Ta.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(kr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(Se.a)(Ta.a.favorite, {
									[Ta.a.mFavorite]: !!e.isFavorite
								})
							})));
						case ha.SubredditAutocomplete:
							return m.a.createElement(cr.a, Aa({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(Tr.b, {
								className: Ta.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: Ta.a.text
							}, e.model.name));
						case ha.Multi:
							return m.a.createElement(cr.a, Aa({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: Ta.a.customFeedIcon
							}), m.a.createElement("span", {
								className: Ta.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(kr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(Se.a)(Ta.a.favorite, {
									[Ta.a.mFavorite]: !!e.isFavorite
								})
							})));
						case ha.Profile:
							return m.a.createElement(cr.a, Aa({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Ar.a, {
								className: Ta.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: Ta.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(kr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(Se.a)(Ta.a.favorite, {
									[Ta.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Da = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Ba = n.n(Da);

			function Ga(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: Ba.a.header
				}), m.a.createElement("div", {
					className: Ba.a.item
				}), m.a.createElement("div", {
					className: Ba.a.item
				}), m.a.createElement("div", {
					className: Ba.a.item
				}), m.a.createElement("div", {
					className: Ba.a.item
				}))
			}
			var Ua = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Ha = n("./src/lib/sample/index.ts"),
				qa = n("./src/reddit/actions/subreddit.ts"),
				Wa = n("./src/reddit/controls/InternalLink/index.tsx");

			function Va() {
				return (Va = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var za = e => {
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
					return (s || "").startsWith("http") ? m.a.createElement("a", Va({
						href: s
					}, o), t) : m.a.createElement(Wa.default, Va({
						to: s
					}, o), t)
				},
				Qa = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				Za = n.n(Qa),
				Ja = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				Ka = n.n(Ja);
			class Xa extends m.a.Component {
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
						className: Object(Se.a)(Za.a.button, Ka.a.button, t),
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof i) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								i(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: Object(Se.a)(Za.a.headingContent, r),
						tabIndex: -1
					}, m.a.createElement("span", {
						className: Za.a.iconContainer
					}, a), m.a.createElement("span", {
						className: Za.a.title
					}, l ? m.a.createElement(za, {
						className: Za.a.innerLink,
						href: l
					}, c) : m.a.createElement(m.a.Fragment, null, c)), m.a.createElement(kr.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(Se.a)(Za.a.chevronIcon, {
							[Za.a["m-expanded"]]: d
						})
					}))), m.a.createElement("div", {
						className: Object(Se.a)(Za.a.contentContainer, Za.a["m-collapsible"], {
							[Za.a.isOpen]: d,
							[Za.a.noBottomDivider]: o
						}, s)
					}, n))
				}
			}
			var Ya = Xa,
				$a = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				eo = n("./src/reddit/constants/colors.ts");
			const to = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(Se.a)(Za.a.title, n)
					}, t)
				},
				no = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(Se.a)(Za.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(to, {
						title: s,
						titleClassName: r
					}))
				},
				so = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: r,
						titleClassName: a,
						rel: o
					} = e;
					return m.a.createElement(za, {
						className: Object(Se.a)(Za.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: o
					}, m.a.createElement(to, {
						title: r,
						titleClassName: a
					}))
				},
				ro = e => {
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
					return m.a.createElement(za, {
						className: Object(Se.a)(Za.a.secondLevelButton, t),
						href: n,
						onClick: a,
						rel: o
					}, m.a.createElement(Tr.b, {
						"aria-hidden": !0,
						className: Object(Se.a)(Za.a.subredditIcon, s),
						iconUrl: r,
						primaryColor: eo.a.snoo
					}), m.a.createElement(to, {
						title: i,
						titleClassName: c
					}))
				},
				ao = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r,
						isEnabled: a
					} = e;
					return m.a.createElement("button", {
						className: Object(Se.a)(Za.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(to, {
						title: s,
						titleClassName: r
					}), m.a.createElement($a.a, {
						className: Za.a.toggleSwitch,
						"data-redditstyle": !0,
						on: a,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var oo = [{
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
				io = n("./src/reddit/helpers/trackers/navigation.ts"),
				co = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				lo = n.n(co);
			const uo = e => {
				let {
					sendEvent: t,
					showIcons: n = !1,
					useNavStyles: s = !1
				} = e;
				const [r, a] = Object(u.useState)(null), o = e => () => {
					a(r === e ? null : e)
				};
				return m.a.createElement(m.a.Fragment, null, oo.map((e, a) => ((e, t, n, s, r) => {
					let {
						link: a,
						sublinks: o
					} = e, {
						isOpen: i,
						onClick: c
					} = t;
					return m.a.createElement(Ya, {
						buttonClassName: r ? lo.a.navButtonOverride : "",
						className: lo.a.collapsibleContainer,
						icon: s && a.icon && m.a.createElement(kr.a, {
							name: a.icon
						}),
						isOpen: i,
						key: a.url,
						onClick: (e, t) => {
							a.noun && n(Object(io.d)("topic" + (t ? "_chevron" : "_menu"), a.noun)), "function" == typeof c && c(e)
						},
						title: a.title,
						url: a.url
					}, o.map(e => m.a.createElement(so, {
						className: r ? lo.a.navBasicLink : lo.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(io.d)("topic_menu", e.noun))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: o(e),
					isOpen: r === e
				}))(a), t, n, s)))
			};
			var mo = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: r
					} = e;
					return m.a.createElement(Ya, {
						icon: m.a.createElement(kr.a, {
							name: "discover"
						}),
						isOpen: t,
						onClick: (e, t) => {
							r(Object(io.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Explore", null, {
							hk: "4xNnBs"
						})
					}, m.a.createElement("span", null, m.a.createElement(uo, {
						sendEvent: r
					})))
				},
				po = n("./src/reddit/constants/keycodes.ts"),
				bo = n("./src/reddit/helpers/correlationIdTracker.ts"),
				ho = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				go = n("./src/reddit/helpers/trackers/happeningNow.ts"),
				fo = n("./src/reddit/helpers/trackers/postComposer.ts"),
				vo = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				Oo = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Co = n.n(Oo);

			function yo() {
				return (yo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Eo(e) {
				return e.id === Dr.ModMail || e.id === Dr.CreateCommunity
			}

			function xo(e) {
				const t = new ua.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== ha.Header && e.type !== ha.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const jo = Object(se.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					isLoggedOutMenuRenderedCounterSampled: e => Object(Ha.a)(e, {
						rate: 14
					}),
					unfilteredListBuilder: e => t => {
						const n = ba(e),
							r = new ua.a("id"),
							a = Object(O.S)(e),
							o = Object(ia.f)(e),
							i = Object(ca.d)(e),
							c = Object(O.sb)(e),
							l = [];
						i && l.push(Dr.Coins);
						const d = (e => Object(ca.m)(e) ? [xa, Ea, ja] : [Ea, xa, ja])(e),
							u = l.length ? d.filter(e => !l.includes(e(null).id)) : d;
						if (a) {
							const a = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (r.push({
								id: "header-favorites",
								type: ha.Header,
								model: {
									displayText: s.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => r.push({
								id: "fav" + e.id,
								type: ha.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => r.push({
								id: "fav" + e.id,
								type: ha.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => r.push({
								id: "fav" + e.url,
								type: ha.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && r.push({
								id: "multis-pending",
								type: ha.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? r.push({
								id: "moderatingSubreddits-pending",
								type: ha.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (r.push({
								id: "header-moderating",
								type: ha.Header,
								model: {
									displayText: s.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), (null == a ? void 0 : a.isMod) && _a.forEach(e => r.push(e(a))), r.push({
								id: Dr.ModListing,
								type: ha.GenericLink,
								model: {
									url: oa.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(kr.a, pa({
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
								type: ha.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: ha.Header,
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
													n(Object(Ft.h)(Jt.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(Se.a)(t, Ur.a.multiPlusButton)
											}, m.a.createElement(kr.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: ha.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(r, n, t), n.subscriptionsPending ? r.push({
								id: "subscriptions-pending",
								type: ha.LoadingState,
								model: {
									displayText: ""
								}
							}) : function(e, t, n, r) {
								t.subscriptions.length && (e.push({
									id: "header-subscriptions",
									type: ha.Header,
									model: {
										displayText: s.fbt._("your communities", null, {
											hk: "BtF8C"
										}).toString()
									}
								}), n && Pa(e, r), t.subscriptions.forEach(t => e.push({
									id: "sub" + t.id,
									type: ha.Subreddit,
									model: t,
									telemetryNoun: "community"
								}))), t.profiles.length && (e.push({
									id: "header-profiles",
									type: ha.Header,
									model: {
										displayText: s.fbt._("following", null, {
											hk: "1kjEfv"
										}).toString()
									}
								}), t.profiles.forEach(t => e.push({
									id: "pro" + t.id,
									type: ha.Profile,
									model: t,
									telemetryNoun: "profile"
								})))
							}(r, n, c, t), ((e, t, n, r) => (va().forEach(e => t.push(e(n))), n.isEmployee && ga.forEach(e => t.push(e(n))), Object(la.a)(e) && t.push({
								id: Dr.HappeningNow,
								type: ha.GenericLink,
								model: {
									url: "/now",
									displayText: s.fbt._("Happening Now", null, {
										hk: "1UsMvs"
									}).toString(),
									icon(e) {
										let {
											className: t
										} = e;
										return m.a.createElement(Fr, {
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
							}), t))(e, r, a), ya.forEach(e => r.push(e(a))), r.push((() => ({
								id: Dr.CreatePost,
								type: ha.CreatePost,
								model: {
									url: "/submit",
									displayText: s.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement(kr.a, pa({
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
								id: Dr.NotificationsInbox,
								type: ha.GenericLink,
								model: {
									url: "/notifications",
									displayText: s.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(kr.a, pa({
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
							}))(r), u.forEach(e => r.push(e(a)))
						} else n.subscriptions.length ? va().forEach(e => r.push(e(null))) : (Ca.forEach(e => {
							if (!e) return;
							e(null).id === Dr.Home && o || r.push(e(null))
						}), o || function(e, t) {
							t.recentSubreddits.length && (e.push({
								id: "header-subscriptions",
								type: ha.Header,
								model: {
									displayText: s.fbt._("recent", null, {
										hk: "3yjJ4f"
									}).toString()
								}
							}), t.recentSubreddits.slice(0, 3).forEach(t => e.push({
								id: "sub" + t.id,
								type: ha.Subreddit,
								model: t,
								telemetryNoun: "community"
							})))
						}(r, n), function(e) {
							e.push({
								id: "header-explore-menu",
								type: ha.Header,
								model: {
									displayText: s.fbt._("Topics", null, {
										hk: "1ue48g"
									}).toString()
								}
							}), e.push({
								id: "explore-menu",
								type: ha.ExploreMenu,
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
				_o = e => ({
					onHomeClicked: () => e(Object(T.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(p.b)(t)),
					onSubredditsRequested: () => {
						e(Object(wa.e)()), e(Object(qa.q)()), e(Object(T.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				Po = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class So extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = xo(n),
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
						if (e.key === po.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === po.b.Tab && this.props.onClose && this.props.onClose(), e.key === po.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== ha.Header && e.type !== ha.ExploreMenu && e.type !== ha.LoadingState && (this.fireTelemetryForListItem(e), e.type === ha.GenericClickable ? e.model.onClick() : Eo(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === po.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === po.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case Dr.Coins:
							case Dr.Premium:
								Object(bo.d)(bo.a.GoldPayment, !0), t = Object(bo.c)(bo.a.GoldPayment)
						}
						switch (e.type) {
							case ha.Category:
							case ha.GenericLink:
							case ha.GenericClickable:
							case ha.Multi:
							case ha.Profile:
							case ha.Subreddit:
								this.props.sendEvent(n => ({
									...Object(fn.p)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === ha.Multi ? Object(fn.o)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								})), e.id === Dr.HappeningNow && this.props.sendEvent(Object(go.b)(go.a.Dropdown));
								break;
							case ha.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(fn.p)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
							case ha.CreatePost:
								this.props.sendEvent(Object(fo.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: xo(e.unfilteredList),
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
					"complete" === document.readyState ? s() : window.addEventListener("load", s), e && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus()), t && Object(ho.b)(n ? vo.c.LeftRail : vo.c.NavDropdown)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = xo(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new ua.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case ha.Category:
								case ha.GenericLink:
								case ha.Multi:
								case ha.Profile:
								case ha.Subreddit:
								case ha.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case ha.Header: {
									const t = n.last();
									t && t.type === ha.Header && n.pop(), n.push(e);
									break
								}
								case ha.LoadingState:
							}
						});
						const r = n.last();
						return r && r.type === ha.Header && n.pop(), n
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
						className: Co.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Dr.Home && this.props.onHomeClicked(), e.type === ha.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case ha.GenericClickable:
								return m.a.createElement($r, yo({}, n, {
									className: Co.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case ha.Category:
							case ha.GenericLink:
							case ha.CreatePost:
								return m.a.createElement($r, yo({}, n, {
									externalLink: Eo(e),
									className: Co.a.item,
									to: e.model.url,
									badge: e.model.badge,
									icon: e.model.icon,
									text: e.model.text
								}));
							case ha.Header: {
								const n = e.model.button;
								return m.a.createElement(Na, {
									className: Co.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: Co.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case ha.LoadingState:
								return m.a.createElement(Ga, {
									className: Co.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case ha.Multi:
								return m.a.createElement(Fa, yo({}, n, {
									className: Co.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: ha.Multi
								}));
							case ha.Profile:
								return m.a.createElement(Fa, yo({}, n, {
									className: Co.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: ha.Profile
								}));
							case ha.Subreddit:
								return m.a.createElement(Fa, yo({}, n, {
									className: Co.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: ha.Subreddit
								}));
							case ha.ExploreMenu:
								return m.a.createElement(uo, yo({}, n, {
									sendEvent: this.props.sendEvent,
									showIcons: !0,
									useNavStyles: !0
								}))
						}
					}))
				}
			}
			const ko = Object(Ee.b)(jo, _o, Po)(Object(Ze.c)(So)),
				No = Object(Ee.b)(jo, _o, Po)(Object(Ze.c)(Object(Ua.b)(So))),
				wo = Object(Hn.v)({
					pageLayer: e => e
				}),
				Mo = Object(se.c)({
					currentPage: Jr,
					hideNSFWPref: O.H,
					isDropdownOpen: Nr.a,
					isOverlayOpen: Mn.i,
					isPinnedSubscriptionsMenuDisabled: wr.b,
					isSubscriptionsPinned: wr.c
				});
			class Io extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Sr.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(fn.p)(e),
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
							className: Object(Se.a)(Ur.a.container, n, {
								[Ur.a.mOpen]: o,
								[Ur.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[Ur.a.mPinned]: this.props.isSubscriptionsPinned,
								[Ur.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: Ur.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: Ur.a.containerText
						}, function(e) {
							switch (e.type) {
								case Dr.Acknowledgements:
									return qr(s.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case Dr.All:
									return qr(s.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case Dr.Appeal:
									return qr(s.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case Dr.Avatar:
									return qr(s.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case Dr.Coins:
									return qr(s.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case Dr.Community:
									return qr(e.model.displayText, !0);
								case Dr.CommunitySearch:
									return qr(s.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case Dr.CreateCommunity:
									return qr(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Dr.CreatePost:
									return qr(s.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case Dr.GlobalSearch:
									return qr(s.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case Dr.Geotagging:
									return qr(s.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case Dr.HappeningNow:
									return qr(s.fbt._("Happening Now", null, {
										hk: "1eys21"
									}).toString());
								case Dr.Home:
									return qr(s.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case Dr.Inbox:
									return qr(s.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case Dr.ModListing:
									return qr("r/Mod");
								case Dr.ModMail:
									return qr(s.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case Dr.ModQueue:
									return qr(s.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case Dr.Multi:
									return qr(e.model.displayText, !0);
								case Dr.NotificationsInbox:
									return qr(s.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case Dr.InternationalSite:
								case Dr.Popular:
									return qr(s.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case Dr.Premium:
									return qr(s.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case Dr.Recap:
									return qr(s.fbt._("Reddit Recap", null, {
										hk: "KZIbz"
									}).toString());
								case Dr.Report:
									return qr(s.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case Dr.Settings:
									return qr(s.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case Dr.SubredditCreation:
									return qr(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Dr.Topic:
									return qr(e.model);
								case Dr.Unknown:
									return qr("");
								case Dr.UserDataRequest:
									return qr(s.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case Dr.UserProfile:
									return qr(e.model.displayText, !0);
								case Dr.UserProfileName:
									return qr(e.name, !0);
								case Dr.ViewDraft:
									return qr(s.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t)), function(e, t) {
							const n = e => m.a.createElement(kr.a, {
								name: e,
								isFilled: !0,
								className: Ur.a.defaultIcon
							});
							switch (e.type) {
								case Dr.All:
									return n("all");
								case Dr.Acknowledgements:
								case Dr.Appeal:
									return n("edit");
								case Dr.Avatar:
									return n("avatar_style");
								case Dr.Coins:
									return n("coins");
								case Dr.Community:
								case Dr.CommunitySearch: {
									const n = Object(Mr.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Tr.b, {
										className: Ur.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case Dr.CreateCommunity:
								case Dr.CreatePost:
									return n("add");
								case Dr.Geotagging:
									return n("custom_feed");
								case Dr.GlobalSearch:
									return n("search");
								case Dr.HappeningNow:
									return m.a.createElement(Fr, {
										className: Ur.a.happeningNowIcon
									});
								case Dr.Home:
									return n("home");
								case Dr.Inbox:
									return m.a.createElement(Rr.a, {
										wrapperClassName: Ur.a.userIcon
									});
								case Dr.ModListing:
									return n("mod_queue");
								case Dr.ModMail:
									return n("mod_mail");
								case Dr.ModQueue:
									return n("mod_queue");
								case Dr.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: Ur.a.customFeedIcon
									});
								case Dr.NotificationsInbox:
									return n("notification");
								case Dr.InternationalSite:
								case Dr.Popular:
									return n("popular");
								case Dr.Premium:
									return n("premium");
								case Dr.Recap:
									return m.a.createElement(Br, {
										className: Ur.a.wrappedRedditLogoActive
									});
								case Dr.Report:
									return n("report");
								case Dr.Settings:
									return m.a.createElement(Rr.a, {
										wrapperClassName: Ur.a.userIcon
									});
								case Dr.SubredditCreation:
									return n("add");
								case Dr.Topic:
									return n("custom_feed");
								case Dr.Unknown:
									return m.a.createElement("div", {
										className: Ur.a.unknownIcon
									});
								case Dr.UserDataRequest:
									return n("add");
								case Dr.UserProfile: {
									const n = Object(Mr.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Ar.a, {
										className: Ur.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case Dr.UserProfileName:
									return m.a.createElement("div", {
										className: Ur.a.defaultIcon
									});
								case Dr.Unknown:
									return m.a.createElement("div", {
										className: Ur.a.unknownIcon
									});
								case Dr.UserProfile: {
									const n = Object(Mr.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Ar.a, {
										className: Ur.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case Dr.ViewDraft:
									return n("edit")
							}
						}(t, r), !this.props.isSubscriptionsPinned && m.a.createElement(kr.a, {
							name: "caret_down",
							className: Ur.a.caretDown
						})), o && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(kr.a, {
							name: "side_menu",
							className: Ur.a.pin,
							onClick: i ? void 0 : this.props.onPinSubscriptions
						}), o && m.a.createElement(No, {
							canAutofocus: !0,
							className: Object(Se.a)(Ur.a.listContainer, Ur.a.paddingBottom),
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
					return m.a.createElement(Ae.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var To = wo(Object(Ee.b)(Mo, (e, t) => ({
					closeDropdown: () => e(Object(Ue.f)()),
					onLocationRefresh: (n, s) => e(Object(Pr.g)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(Ue.i)()), e(Object(Ue.f)())
					},
					openDropdown: () => e(Object(Ue.g)()),
					toggleDropdown: () => e(Object(Ue.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(Ze.c)(Io))),
				Ao = n("./src/reddit/components/JumpToContent/index.tsx"),
				Ro = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Lo = n("./node_modules/lodash/isEmpty.js"),
				Fo = n.n(Lo),
				Do = n("./node_modules/lodash/pick.js"),
				Bo = n.n(Do),
				Go = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				Uo = n("./src/lib/hooks/usePrevious.ts"),
				Ho = n("./src/lib/makeSearchKey/index.ts"),
				qo = n("./src/lib/makeGqlRequest/index.ts"),
				Wo = n("./src/redditGQL/operations/SearchTypeahead.json"),
				Vo = n("./src/redditGQL/operations/SearchTypeaheadByType.json"),
				zo = n("./src/telemetry/models/App.ts");
			var Qo = n("./node_modules/icepick/icepick.js"),
				Zo = n("./src/reddit/helpers/name/index.ts"),
				Jo = n("./src/reddit/models/Search/index.ts");
			var Ko = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Xo = n("./src/reddit/selectors/experiments/search/searchSingleVariant.ts");
			const Yo = e => async (t, n, s) => {
				let {
					gqlContext: r
				} = s;
				const a = n(),
					o = Object(Xo.a)(a, Un.Kf),
					i = fn.gb(a, Ko.a.Typeahead),
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
								return Object(Qo.merge)({
									displayInfo: {
										iconUrl: (null === (s = e.styles) || void 0 === s ? void 0 : s.icon) || (null === (a = null === (r = e.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === a ? void 0 : a.url),
										isNSFW: e.isNsfw,
										publicDescription: e.publicDescriptionText || void 0
									},
									id: e.id,
									isTypeaheadSuggestion: !0,
									searchQuery: t,
									section: Jo.c.typeahead,
									type: Jo.b.subredditOrProfile
								}, n)
							};
						return null === (r = null === (s = null === (n = e.data.search) || void 0 === n ? void 0 : n.typeaheadByType) || void 0 === s ? void 0 : s.subreddits) || void 0 === r || r.forEach(e => {
							e.isNsfw ? d.push(e.id) : c.push(e.id), u[e.id] = m(e, {
								displayInfo: {
									isQuarantined: e.isQuarantined,
									subredditOrProfileName: Object(Zo.d)(e.name),
									subscribers: e.subscribersCount
								},
								isSubreddit: !0
							})
						}), null === (i = null === (o = null === (a = e.data.search) || void 0 === a ? void 0 : a.typeaheadByType) || void 0 === o ? void 0 : o.profiles) || void 0 === i || i.forEach(e => {
							var t, n;
							e.isNsfw ? d.push(e.id) : l.push(e.id), u[e.id] = m(e, {
								displayInfo: {
									karma: "Redditor" === e.redditorInfo.__typename ? null === (n = null === (t = e.redditorInfo) || void 0 === t ? void 0 : t.karma) || void 0 === n ? void 0 : n.total : void 0,
									subredditOrProfileName: Object(Zo.c)(e.name)
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
							productSurface: zo.TelemetryAppName.web2x,
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
						return await Object(qo.a)(e, {
							...Vo,
							variables: r
						}, {
							traceRequestName: "search_typeahead_by_type"
						})
					})(r(), e, i, c)).body, e);
					(null == n ? void 0 : n.typeaheads) && (null == n ? void 0 : n.order) && t(Object(ge.r)({
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
							r.push(l.id), "Subreddit" === l.__typename ? (u = !0, m = l.isQuarantined, b = Object(Zo.d)(l.name), h = l.subscribersCount) : "Profile" === l.__typename && (d = !0, p = "Redditor" === l.redditorInfo.__typename ? null === (s = null === (n = l.redditorInfo) || void 0 === n ? void 0 : n.karma) || void 0 === s ? void 0 : s.total : void 0, b = Object(Zo.c)(l.name));
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
								section: Jo.c.typeahead,
								type: Jo.b.subredditOrProfile
							};
							a[l.id] = g
						}), {
							order: r,
							typeaheads: a
						}
					})((await (async (e, t, n, s) => {
						const r = {
							productSurface: zo.TelemetryAppName.web2x,
							query: t,
							searchInput: {
								queryId: n,
								isNsfwIncluded: s
							}
						};
						return await Object(qo.a)(e, {
							...Wo,
							variables: r
						}, {
							traceRequestName: "search_typeahead"
						})
					})(r(), e, i, c)).body, e);
					(null == n ? void 0 : n.typeaheads) && (null == n ? void 0 : n.order) && t(Object(ge.r)({
						typeaheadSuggestions: n.typeaheads,
						order: n.order,
						searchQuery: e
					}))
				}
			};
			var $o = n("./src/reddit/actions/search/trending.ts"),
				ei = n("./src/reddit/components/SearchDropdown/index.tsx"),
				ti = n("./src/reddit/constants/parameters.ts"),
				ni = n("./src/reddit/helpers/clickSourceData/index.ts"),
				si = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				ri = n("./src/reddit/helpers/isArrayEqual.ts"),
				ai = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				oi = n("./src/reddit/helpers/trackers/screenview.ts"),
				ii = n("./src/reddit/helpers/trackers/searchResults.ts"),
				ci = n("./src/reddit/hooks/usePageLayer.ts"),
				li = n("./src/reddit/selectors/searchFix.ts"),
				di = n("./src/reddit/selectors/searchResults.ts"),
				ui = n("./src/reddit/selectors/trending.ts"),
				mi = n("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				pi = n("./src/reddit/helpers/search/searchConversationId.ts"),
				bi = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				hi = n("./src/reddit/selectors/experiments/i18n/hideTrending.ts"),
				gi = n("./src/reddit/controls/Search/index.m.less"),
				fi = n.n(gi),
				vi = n("./src/reddit/controls/Search/SearchBar/index.tsx"),
				Oi = n("./src/reddit/controls/Search/SearchScopePill/index.tsx");
			const Ci = /r\/([0-9a-zA-Z]*)\s/gi;

			function yi(e) {
				let {
					className: t
				} = e;
				var n, s, r;
				const a = Object(ci.a)(),
					o = Object(Hn.cb)(a),
					i = Object(Hn.Z)(a),
					l = Object(Ee.f)().getState(),
					[d, b] = Object(u.useState)(-1),
					[h, g] = Object(u.useState)([]),
					[f, v] = Object(u.useState)(!1),
					[C, y] = Object(u.useState)({}),
					[E, x] = Object(u.useState)([]),
					[j, _] = Object(u.useState)(null),
					[P, S] = Object(u.useState)(),
					N = Object(u.useRef)(null),
					w = Object(u.useRef)(null),
					M = Object(u.useRef)(!1),
					I = Object(Ze.b)(),
					T = Object(Ee.d)(),
					A = Object(Ee.e)(Mn.b),
					R = Object(Ee.e)(Mn.d),
					L = Object(Ee.e)(O.m),
					F = Object(Ee.e)(di.r),
					D = Object(Ee.e)(di.q),
					B = Object(Ee.e)(O.S),
					G = Object(Ee.e)(O.fb),
					U = Object(Ee.e)(Mn.r),
					H = Object(Ee.e)(e => Object(Hn.s)(e, {
						pageLayer: a
					})),
					q = Object(Ee.e)(e => Object(Hn.e)(e, {
						pageLayer: a
					})),
					W = Object(Ee.e)(di.j),
					V = Object(Ee.e)(e => Object(Qr.C)(e, {
						subredditName: P ? P.title.replace("r/", "") : ""
					})),
					z = Object(Ee.e)(e => Object(ui.a)(e, Jo.d.dropdown).slice(0, ei.d)),
					Q = Object(Ee.e)(e => Object(Xo.a)(e, Un.Kf)),
					Z = Object(Ee.e)(di.E),
					J = Object(Ee.e)(di.D);
				let K = [];
				Q && J && (K = [...J.communities, ...J.people, ...J.nsfw]);
				const X = Object(Uo.a)(H) || null,
					Y = Object(Uo.a)(q) || null,
					$ = Object(Uo.a)(P),
					ee = Object(Uo.a)(o),
					te = Object(Uo.a)(Z),
					ne = Object(Uo.a)(J),
					se = Object(Uo.a)(z),
					re = ((null === (n = w.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					ae = Me(re),
					oe = A ? Object(fn.w)(A) : a ? Object(fn.w)(a) : void 0,
					ie = C[re],
					ce = Object(Ho.e)({
						...Bo()(i || {}, ti.y),
						q: re
					});
				Object(u.useEffect)(() => {
					le()
				}, [se, z, ...Q ? [J, ne] : [te, Z]]), Object(u.useEffect)(() => {
					X !== H ? me({
						type: k.dc.Subreddit,
						enabled: !!H,
						payload: H
					}) : Y !== q ? me({
						enabled: !!q,
						type: k.dc.Multireddit,
						payload: q
					}) : P !== $ && me({
						enabled: !!P,
						type: k.dc.SyntaxScoped,
						payload: P
					})
				}, [P, q, H, $, Y, X]), Object(u.useEffect)(() => {
					W.enabled && W.type === k.dc.SyntaxScoped && V && me({
						enabled: !0,
						type: k.dc.Subreddit,
						payload: V
					})
				}, [V, W]), Object(u.useEffect)(() => {
					(Q ? Fo()(K) : Fo()(Z)) || o ? Ce(o || "") : Oe()
				}, [ee, o]);
				const le = () => {
						const e = Q ? Ne()(ne, J) : Object(ri.a)(te, Z),
							t = Object(ri.a)(se, z);
						if (!e || !t)
							if (Q) {
								const e = K.length ? [...K, ae] : [...E, ...z];
								g(e)
							} else {
								const e = Z.length ? [...Z, ae] : [...E, ...z];
								g(e)
							}
					},
					de = e => T(Object(ge.s)({
						searchQuery: e
					})),
					ue = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && bi.a.clear(Ko.a.Typeahead), T(Object(ge.n)())
					},
					me = e => T(Object(ge.q)(e)),
					pe = (e, t, n) => {
						e.preventDefault(), ((e, t, n) => {
							T(Object(p.b)(Object(c.c)({
								pathname: e,
								search: t,
								state: n
							})))
						})(t.url, t.qs, {
							...n,
							routeName: U,
							subredditName: R
						})
					},
					be = async () => {
						z.length || f || (v(!0), await (() => T(Object($o.b)(Jo.d.dropdown)))(), v(!1))
					}, fe = e => {
						B && L && x(Object(Rn.Wb)({
							...e,
							section: Jo.c.recent
						}, L.id))
					}, ve = (e, t) => {
						var n;
						if (!w.current || W.enabled) return !1;
						const s = t.split(" ").filter(t => t !== e).join(" ");
						return w.current.value = s, null === (n = w.current) || void 0 === n || n.dispatchEvent(new Event("input", {
							bubbles: !0
						})), S({
							title: e,
							key: `syntax-${e}`
						}), !0
					}, Oe = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						b(-1), _(null), Ce(""), de(""), e && bi.a.update(Ko.a.Typeahead), ke()
					};

				function Ce(e) {
					w.current && (w.current.value = e)
				}
				const ye = (e, t, n, s, r) => {
						const a = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: re,
							telemetrySource: Ko.a.Typeahead
						};
						mi.a.set(fn.a.SearchDropdown), I(Object(ii.z)(s, a, r))
					},
					xe = (e, t, n) => {
						mi.a.set(fn.a.SearchBar), I(Object(ii.B)(e, t, n))
					},
					je = (e, t, n, s) => {
						mi.a.set(fn.a.SearchDropdown), I(Object(ii.D)(e, t, n, s))
					},
					_e = () => {
						I(e => Object(ii.g)(e, ce, H)), (() => T(Object(ge.m)()))(), bi.a.update(Ko.a.Typeahead)
					},
					Pe = e => {
						const t = h[e] || null,
							n = t ? t.searchQuery : "";
						b(e), Ce(n), _(t)
					},
					ke = () => {
						if (!z.length) {
							Object(hi.a)(l) || be()
						}
						if (L) {
							const e = Object(Rn.T)(L.id);
							e.length > 0 && (x(B ? e : []), g([...e, ...z]))
						}
					},
					we = e => {
						!(!D || !D[e]) || (e ? (e => {
							C[e] || (C[e] = !0, y({
								...C
							}), T(Yo(e)), C[e] = !1, y({
								...C
							}))
						})(e) : ke())
					};

				function Me(e) {
					var t;
					let n;
					if (W.enabled)
						if (W.type === k.dc.Subreddit) {
							const e = W.payload;
							n = {
								iconUrl: null === (t = e.icon) || void 0 === t ? void 0 : t.url,
								isNSFW: e.isNSFW,
								isQuarantined: e.isQuarantined || !1,
								scopeName: e.url
							}
						} else if (W.type === k.dc.Multireddit) {
						const e = W.payload;
						n = {
							iconUrl: e.icon,
							isNSFW: e.isNSFW,
							isQuarantined: !1,
							scopeName: e.url
						}
					} else if (W.type === k.dc.SyntaxScoped) {
						const e = W.payload;
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
						id: Object(Go.a)(),
						searchQuery: e,
						type: Jo.b.text,
						section: Jo.c.submit,
						subredditOrProfileRestrictedName: n.scopeName,
						displayInfo: {
							iconUrl: n.iconUrl,
							isNSFW: n.isNSFW,
							isQuarantined: n.isQuarantined
						}
					}
				}
				const Ie = 0 === E.length && 0 === z.length && !(null === (s = ae.searchQuery) || void 0 === s ? void 0 : s.trim()) && !f && !ie;
				return m.a.createElement("div", {
					className: Object(Se.a)(fi.a.relativeWrapper, Ur.a.container, t, {
						"m-open": F
					}),
					id: ei.b,
					ref: N
				}, m.a.createElement(vi.c, {
					inputRef: w,
					isOpen: !Ie && F,
					onChange: e => {
						const t = e.trim(),
							n = Ci.exec(e);
						bi.a.update(Ko.a.Typeahead), n && ve(n[0].trim(), t) || (de(t), we(t))
					},
					searchQuery: re,
					onFormSubmit: e => {
						e.preventDefault(), re.trim() && (async e => {
							var t, n, s;
							const r = (null === (t = w.current) || void 0 === t ? void 0 : t.value) || "";
							if (!r.trim()) return;
							pi.a.set(r), r !== re && de(r);
							let o, i = {
									...Jo.a
								},
								c = {},
								l = !0;
							if (j && j.searchQuery === re ? ((i = j).id || (i.id = Object(Go.a)()), i.section === Jo.c.recent ? (c = Object(ni.c)(ni.a.SEARCH_DROPDOWN, oe, i.isProfile || i.isSubreddit), o = Ho.a.Recent, xe(r, i, d)) : i.section === Jo.c.typeahead ? (c = Object(ni.c)(ni.a.SEARCH_DROPDOWN, oe), l = !1, je(r, i, d, d)) : i.section === Jo.c.trending ? (c = Object(ni.c)(ni.a.SEARCH_DROPDOWN, oe), o = (null === (n = i.post) || void 0 === n ? void 0 : n.isSponsored) ? Ho.a.PromotedTrend : Ho.a.Trending, T((e, t) => Object(ai.o)({
									state: t(),
									trendingSearch: i,
									telemetrySource: Ko.a.Typeahead
								}))) : ye(r, r, fn.c.Search, ii.a.RECENT)) : (i = Me(r), mi.a.set(fn.a.SearchBar), I(Object(ii.o)(ii.a.FULL_SEARCH_BUTTON, Object(Ho.e)({
									q: re
								}), Ko.a.Typeahead, a || void 0))), fe(i), ue(l), !i.searchQuery) return;
							const u = Object(si.a)({
								searchItem: i,
								searchOptions: {
									source: o
								},
								activeSearchScope: W
							});
							pe(e, u, c), i.isTypeaheadSuggestion && Oe(l), null === (s = w.current) || void 0 === s || s.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(bo.c)(bo.a.SearchResults) || Object(bo.d)(bo.a.SearchResults), pi.a.update(), M.current = !0, bi.a.update(Ko.a.Typeahead), mi.a.set(fn.a.SearchBar), I(Object(ii.o)(ii.a.SEARCH_BAR, ce, Ko.a.Typeahead, a || void 0)), F || ((() => T(Object(ge.o)()))(), I(Object(oi.s)(ce, null != a ? a : void 0, Object(li.b)({
							pageLayer: a
						})))), we(re)
					},
					onKeyDown: e => {
						if (e.key === po.b.Escape || e.key === po.b.Tab) ue();
						else if (e.key === po.b.ArrowDown) {
							if (e.preventDefault(), 0 === h.length || !F) return;
							if (d >= h.length - 1) return;
							Pe(d + 1)
						} else if (e.key === po.b.ArrowUp) {
							if (e.preventDefault(), 0 === h.length || !F) return;
							if (-1 === d) return;
							Pe(d - 1)
						} else e.key === po.b.Backspace && !re && W.enabled && _e()
					},
					onClearSearchQuery: Oe,
					onClickDismissSearchScopePill: _e,
					showSearchScopePill: W.enabled,
					searchScopePill: Object(Oi.c)(W)
				}), m.a.createElement(ei.c, {
					containerWidth: null === (r = N.current) || void 0 === r ? void 0 : r.offsetWidth,
					focusedItemIndex: d,
					searchOriginPage: oe,
					isOpen: F,
					isTrendingPending: f,
					isTypeaheadPending: ie,
					itemList: h,
					nightmode: G,
					recentSearches: E,
					trendingItems: z,
					searchItem: ae,
					typeaheadSuggestions: Z,
					typeaheadByTypeSuggestions: J,
					onClearSearchQuery: Oe,
					onClose: ue,
					onRemoveRecentSearch: e => {
						L && 0 !== E.length && (Object(Rn.db)(e, L.id), x(E.filter(t => t.searchQuery !== e.searchQuery)), b(-1))
					},
					onSendSearchClickRecentEvent: xe,
					onSendSearchClickTypeaheadEvent: je,
					onSetRecentSearch: fe,
					onUpdateSearchQuery: Ce,
					fireAdPixelsOfType: (e, t) => T(Object(he.y)(e, t))
				}))
			}
			var Ei = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				xi = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				ji = n("./src/lib/combineRefs/index.tsx"),
				_i = n("./src/lib/hooks/useTooltip.ts"),
				Pi = n("./src/reddit/actions/recap/index.ts"),
				Si = n("./src/reddit/components/PromptTooltip/TooltipHooked.m.less"),
				ki = n.n(Si);

			function Ni() {
				return (Ni = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var wi = m.a.memo((function(e) {
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
					}, [t]), t ? n.styled ? m.a.createElement("div", Ni({
						className: Object(Se.a)(ki.a.tooltip, {
							[ki.a.visible]: s || n.isInstant
						})
					}, n.popperProps, {
						onMouseEnter: () => n.isCloseOnHover && n.hide()
					}), n.children, s && !n.noArrow && m.a.createElement("div", Ni({
						className: ki.a.arrow
					}, n.arrowProps))) : m.a.createElement("div", n.popperProps, n.children) : null
				})),
				Mi = n("./src/reddit/helpers/trackers/recap.ts"),
				Ii = n("./src/reddit/routes/recap/index.ts"),
				Ti = n("./src/reddit/selectors/experiments/recap.ts"),
				Ai = n("./src/reddit/pages/Recap/Components/NavbarIcon/index.m.less"),
				Ri = n.n(Ai);
			var Li = () => {
					const e = Object(yr.a)(),
						t = Object(Ee.d)(),
						n = Object(Cr.a)(),
						r = Object(Ee.e)(Ti.a),
						a = Object(Ee.e)(Ti.b),
						o = Object(Ee.e)(Ti.c),
						i = Object(Ee.e)(O.m),
						c = Object(Ee.e)(e => e.recap.bannerSeen),
						l = Object(_i.b)(),
						d = r && !c;
					Object(u.useEffect)(() => {
						!i || o || a || setTimeout(() => {
							t(Object(Pi.d)(Object(Rn.S)(null == i ? void 0 : i.id))), Object(Rn.Vb)(null == i ? void 0 : i.id)
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
					return r && !a ? m.a.createElement(m.a.Fragment, null, m.a.createElement(cr.a, {
						className: Ri.a.icon,
						innerRef: Object(ji.a)(n.target.ref, l.target.ref),
						to: Ii.a,
						onMouseEnter: () => {
							!l.visible && n.show()
						},
						onMouseLeave: n.hide,
						onClick: () => e(Object(Mi.l)())
					}, m.a.createElement(Br, {
						className: Ri.a.psBattlesIcon
					})), !o && m.a.createElement(m.a.Fragment, null, m.a.createElement(vr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, s.fbt._("Reddit Recap", null, {
						hk: "4utP6e"
					})), m.a.createElement(wi, {
						arrowProps: p,
						popperProps: l.popperProps,
						visible: l.visible,
						hide: l.hide,
						isInstant: !0,
						styled: !0
					}, m.a.createElement("div", {
						className: Ri.a.tooltip,
						onMouseLeave: () => t(Object(Pi.d)(!0))
					}, s.fbt._("Read your Reddit Recap", null, {
						hk: "2CFR0A"
					}))))) : null
				},
				Fi = n("./src/reddit/selectors/experiments/shredditModNav.ts"),
				Di = n("./src/reddit/selectors/responsivePage.ts"),
				Bi = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Gi = n.n(Bi);
			var Ui, Hi = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(Se.a)(Gi.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": s.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Gi.a.HomeLink,
						href: i.a.redditUrl
					}, m.a.createElement(Ei.a, {
						className: Gi.a.Snoo
					}), m.a.createElement(xi.a, {
						className: Gi.a.Wordmark,
						color: "inherit"
					})))
				},
				qi = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				Wi = n("./src/reddit/components/Header/NavBarIcon/index.m.less"),
				Vi = n.n(Wi);
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(Ui || (Ui = {}));
			var zi = e => {
					const {
						eventNoun: t,
						imageSource: n,
						navLink: s,
						tooltip: r
					} = e, a = Object(yr.a)(), o = Object(Cr.a)(), [i, c] = Object(u.useState)(Ui.Hidden), l = Object(u.useCallback)(() => {
						Object(Rn.Qb)({
							clicked: !0
						}), a(e => ({
							...Object(fn.p)(e),
							source: "nav",
							action: "click",
							noun: t
						}))
					}, [a, t]);
					return Object(u.useEffect)(() => {
						const e = Object(Rn.N)();
						e ? 3 !== e.views || e.clicked ? !e.clicked && e.views ? (Object(Rn.Qb)({
							views: e.views + 1
						}), c(Ui.Visible)) : e.clicked && c(Ui.Visible) : c(Ui.Hidden) : (Object(Rn.Qb)({
							views: 1
						}), c(Ui.Visible))
					}, []), i === Ui.Hidden ? null : m.a.createElement(m.a.Fragment, null, m.a.createElement(cr.a, {
						className: `${jr.a.icon} ${Vi.a.linkIcon}`,
						innerRef: o.target.ref,
						to: s,
						onClick: l,
						onMouseEnter: o.show,
						onMouseLeave: o.hide
					}, m.a.createElement("img", {
						className: Vi.a.navIcon,
						src: n
					})), m.a.createElement(vr.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, r))
				},
				Qi = n("./src/lib/constants/colors.ts"),
				Zi = n("./src/reddit/actions/happeningNow/index.ts"),
				Ji = n("./src/reddit/constants/listings.ts"),
				Ki = n("./src/reddit/selectors/features/happeningNow/index.ts");
			var Xi = () => {
				const e = Object(Ee.d)(),
					t = Object(yr.a)(),
					n = Object(Ee.e)(Ki.f),
					r = Object(Ee.e)(e => e.recap.bannerSeen && Object(Ki.g)(e)),
					a = Object(u.useCallback)(() => e(Object(Zi.d)(!1)), [e]),
					o = Object(Cr.a)(),
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
									borderBottom: `3px solid ${Qi.a.alien600}`
								}
							},
							popperProps: {
								...e.popperProps,
								style: {
									...e.popperProps.style,
									background: Qi.a.alien600,
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
						t(Object(go.b)(go.a.TopNav)), a()
					}, [t, a]);
				return Object(u.useEffect)(() => {
					e(Object(Zi.a)())
				}, [e]), Object(u.useEffect)(() => {
					r && e(Object(Zi.e)())
				}, [e, r]), m.a.createElement(m.a.Fragment, null, m.a.createElement(cr.a, {
					className: Object(Se.a)(jr.a.icon, jr.a.happeningNowLink),
					innerRef: i.target.ref,
					to: Ji.c[Ji.b.HappeningNow],
					onClick: c,
					onMouseEnter: i.show,
					onMouseLeave: i.hide
				}, m.a.createElement(Fr, {
					className: jr.a.customIcon
				}), n && m.a.createElement("div", {
					className: jr.a.liveContentAvailabilityBadge
				})), m.a.createElement(vr.a, {
					arrowProps: i.arrowProps,
					popperProps: i.popperProps,
					visible: i.visible
				}, r ? s.fbt._("Find live chats and audio talks happening now", null, {
					hk: "nphMZ"
				}) : s.fbt._("Happening Now", null, {
					hk: "qEee0"
				})))
			};
			var Yi = e => m.a.createElement("svg", {
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
				$i = n("./src/reddit/selectors/avatarMarketing.ts"),
				ec = n("./src/lib/initializeClient/installReducer.ts"),
				tc = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(ec.a)({
				features: {
					avatar: tc.a
				}
			});
			const nc = e => 864e5 * e,
				sc = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				rc = e => {
					if (ac(e)) return !0;
					const t = sc(e),
						n = (new Date).getTime(),
						s = Object(Rn.D)();
					if (!(null == t ? void 0 : t.active) || !oc(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
					if (s && t) {
						const e = n > s.lastInteractionTimestamp + nc(null == t ? void 0 : t.min_days_since_last_event_interaction);
						return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
					}
					return !1
				},
				ac = e => {
					const t = Object(Mn.q)(e);
					return Boolean((null == t ? void 0 : t[ti.A]) && Object(L.a)(t[ti.A]))
				},
				oc = (e, t, n) => {
					var s;
					const r = !!(null === (s = Object(O.m)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return ic(e, t) && n === r
				},
				ic = (e, t) => {
					const n = Object(O.m)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > nc(t)
				};
			var cc = n("./src/reddit/helpers/chooseVariant/index.ts");
			const lc = e => {
					return Object(cc.c)(e, {
						experimentEligibilitySelector: cc.a,
						experimentName: Un.Eb
					}) === Un.Yd
				},
				dc = e => {
					return Object(cc.c)(e, {
						experimentEligibilitySelector: cc.a,
						experimentName: Un.uf
					}) === Un.Yd
				};
			var uc = m.a.memo((function(e) {
				const t = Object(yr.a)(),
					n = Object(u.useCallback)(() => {
						t(e => ({
							...Object(fn.p)(e),
							source: "nav",
							action: "click",
							noun: "popular"
						}))
					}, [t]),
					r = Object(Ee.e)(O.S),
					a = Object(Ee.e)(lc),
					o = Object(Ee.e)(dc),
					i = Object(Ee.e)(rc),
					c = Object(Ee.e)(ca.c),
					l = Object(Ee.e)(ca.d),
					d = Object(Ee.e)(la.a),
					p = Object(Ee.e)($i.a),
					b = Object(Cr.a)(),
					h = Object(Cr.a)(),
					g = Object(Cr.a)(),
					f = !l && (!(i || c && !!p) || e.isAvatarButtonClicked);
				return m.a.createElement("div", {
					className: Object(Se.a)(jr.a.container, e.className, {
						[jr.a.containerWithoutCoin]: !f
					})
				}, m.a.createElement("div", {
					className: jr.a.row
				}, m.a.createElement(cr.a, {
					className: jr.a.icon,
					innerRef: b.target.ref,
					to: r ? Ji.c[Ji.b.Popular] : Ji.c[Ji.b.Home],
					onClick: n,
					onMouseEnter: b.show,
					onMouseLeave: b.hide
				}, m.a.createElement(kr.a, {
					name: "popular"
				})), m.a.createElement(vr.a, {
					arrowProps: b.arrowProps,
					popperProps: b.popperProps,
					visible: b.visible
				}, s.fbt._("Popular", null, {
					hk: "1Kx4va"
				})), f && m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					ref: g.target.ref,
					onMouseEnter: g.show,
					onMouseLeave: g.hide,
					className: jr.a.icon
				}, m.a.createElement(qi.a, null)), m.a.createElement(vr.a, {
					arrowProps: g.arrowProps,
					popperProps: g.popperProps,
					visible: g.visible
				}, s.fbt._("Coin", null, {
					hk: "zOcNq"
				}))), d && m.a.createElement(Xi, null), o && m.a.createElement(m.a.Fragment, null, m.a.createElement(cr.a, {
					className: jr.a.icon,
					innerRef: h.target.ref,
					to: "/r/psbattleslive",
					onClick: () => {},
					onMouseEnter: h.show,
					onMouseLeave: h.hide
				}, m.a.createElement(Yi, {
					className: jr.a.psBattlesIcon
				})), m.a.createElement(vr.a, {
					arrowProps: h.arrowProps,
					popperProps: h.popperProps,
					visible: h.visible
				}, s.fbt._("PsBattles Live in partnership with Adobe", null, {
					hk: "3mGYdM"
				}))), m.a.createElement(Li, null), m.a.createElement(_r, null), a && m.a.createElement(zi, {
					eventNoun: "love_island",
					imageSource: "https://styles.redditmedia.com/t5_3lwmq/styles/communityIcon_7atioswvjm671.png?width=256&s=6096b8adbfa2d4911d9bc92afff25fd764987498",
					navLink: "/r/LoveIslandTV/",
					tooltip: s.fbt._("Visit r/LoveIslandTV for the latest!", null, {
						hk: "22mySr"
					})
				})))
			}));
			const mc = Object(T.a)(() => n.e("QrCodeActions").then(n.bind(null, "./src/reddit/actions/qrCode/index.ts")).then(e => e.default));
			var pc = n("./src/reddit/actions/tooltip.ts"),
				bc = n("./src/lib/hooks/useOnClickOutside.ts"),
				hc = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				gc = n.n(hc);

			function fc() {
				return (fc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const vc = ze.a.button("Button", gc.a),
				Oc = ze.a.div("Container", gc.a);

			function Cc(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(vc, fc({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(Oc, {
					className: Object(Se.a)({
						[gc.a.isOpen]: n
					})
				}, t))
			}
			var yc = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				Ec = n.n(yc);
			var xc = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(ea.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount,
					showEmpty: !e.unreadCount
				}), m.a.createElement(kr.a, {
					name: "notification",
					className: Ec.a.icon2020
				})),
				jc = n("./src/reddit/components/InboxBanner/index.m.less"),
				_c = n.n(jc);
			var Pc = Object(zt.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(M.b)(navigator.userAgent);
					return m.a.createElement(Zt.e, null, m.a.createElement(Zt.i, {
						className: _c.a.modalHeader
					}, m.a.createElement(Zt.q, {
						className: _c.a.modalTitle
					}, s.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(dn.t, {
						onClick: t,
						Icon: Object(kr.b)("close_fill"),
						size: dn.d.XXS,
						priority: dn.c.Plain,
						className: _c.a.modalCloseIcon
					})), m.a.createElement(Zt.l, null, m.a.createElement("ul", {
						className: _c.a.modalList
					}, m.a.createElement("li", {
						className: _c.a.modalListItem
					}, m.a.createElement("span", null, "1"), s.fbt._("Click on {lockIcon} in your browser address bar", [s.fbt._param("lockIcon", m.a.createElement(kr.a, {
						name: "lock_fill",
						className: _c.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: _c.a.modalListItem
					}, m.a.createElement("span", null, "2"), s.fbt._("Select {lockIcon} site settings", [s.fbt._param("lockIcon", m.a.createElement(kr.a, {
						name: "settings_fill",
						className: _c.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: _c.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), s.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [s.fbt._param("lockIcon", m.a.createElement(kr.a, {
						name: "notification_fill",
						className: _c.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(Zt.g, null, m.a.createElement(dn.t, {
						text: s.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				Sc = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				kc = n.n(Sc);

			function Nc() {
				return (Nc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var wc = m.a.memo((function(e) {
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
					}, [t]), t ? m.a.createElement("div", Nc({
						id: "INBOX--TOOLTIP",
						className: Object(Se.a)(kc.a.tooltip, {
							[kc.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				Mc = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				Ic = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts");
			const Tc = Object(Qo.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var Ac = n("./src/reddit/selectors/activeModal.ts"),
				Rc = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				Lc = n.n(Rc);
			const Fc = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				Dc = m.a.memo((function(e) {
					const t = Object(Ee.d)(),
						n = Object(Cr.a)(),
						r = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(_i.a)(e);
								return Object(Qo.updateIn)(t, ["modifiers"], e => Object(Qo.push)(e, Tc))
							}, [e]);
							return Object(_i.b)(t)
						}(),
						a = Object(_i.b)(Fc),
						[o, i] = Object(Ic.a)(e.userId),
						c = Object(Ee.e)(Object(Ac.c)("browser_notifications_permission_settings")),
						l = Object(u.useCallback)(() => {
							r.hide(), n.hide(), o || i()
						}, [r, n, i, o]);
					Object(bc.a)("INBOX--TOOLTIP", l);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(ji.a)(n.target.ref, r.target.ref, a.target.ref)
					}, m.a.createElement(Cc, {
						"aria-expanded": r.visible,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Lc.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), r.visible ? l() : r.show(), e.sendNavClickInbox()
						},
						isOpen: r.visible
					}, m.a.createElement(xc, {
						unreadCount: e.unreadCount
					})), !r.visible && !a.visible && m.a.createElement(vr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, s.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(wc, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, m.a.createElement(Mc.a, {
						isOpen: r.visible,
						hideTooltip: l,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), c && m.a.createElement(Pc, {
						onClose: () => {
							t(Object(Ft.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var Bc = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				Gc = n("./src/reddit/actions/snoovatarModal.ts"),
				Uc = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Hc = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				qc = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				Wc = n.n(qc);
			const {
				fbt: Vc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function zc(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(Rn.D)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(Rn.nb)(s)
				}
			}
			var Qc = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(Ee.e)(sc),
						s = Object(Ee.d)(),
						r = Object(yr.a)();
					Object(u.useEffect)(() => {
						r(Object(Uc.q)())
					}, [r]), Object(u.useEffect)(() => {
						n || s(Object(Bc.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						zc(n)
					}, [n]);
					return m.a.createElement(dn.k, {
						onClick: () => {
							r(Object(Uc.d)()), zc(n, "click"), s(Object(Gc.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: Wc.a.ctaContainer
					}, m.a.createElement("img", {
						className: Wc.a.quickCreateGiftAnimation,
						src: `${i.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: Vc._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Hc.a, {
						className: Object(Se.a)(Wc.a.sparkle, Wc.a.sparkle1)
					}), m.a.createElement(Hc.a, {
						className: Object(Se.a)(Wc.a.sparkle, Wc.a.sparkle2)
					}), m.a.createElement(Hc.a, {
						className: Object(Se.a)(Wc.a.sparkle, Wc.a.sparkle3)
					})), Vc._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				Zc = n("./src/reddit/components/Header/AvatarStorefrontCta/index.m.less"),
				Jc = n.n(Zc);
			const {
				fbt: Kc
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Xc = e => {
					let {
						handleButtonClick: t
					} = e;
					const n = Object(Ee.d)(),
						s = Object(yr.a)(),
						r = Object(Ee.e)($i.b);
					Object(u.useEffect)(() => {
						r || n(Object(Bc.a)())
					}, [r, n]);
					return m.a.createElement(dn.a, {
						onClick: () => {
							n(Object(Gc.b)({
								clickSource: "nav"
							})), s(Uc.c), t && t()
						},
						className: Object(Se.a)(Jc.a.ctaContainer)
					}, m.a.createElement(Hc.a, {
						className: Object(Se.a)(Jc.a.sparkle, Jc.a.sparkle1)
					}), m.a.createElement(Hc.a, {
						className: Object(Se.a)(Jc.a.sparkle, Jc.a.sparkle2)
					}), m.a.createElement(Hc.a, {
						className: Object(Se.a)(Jc.a.sparkle, Jc.a.sparkle3)
					}), Kc._("Shop Avatars", null, {
						hk: "280YIG"
					}))
				},
				Yc = n("./src/reddit/selectors/chat.ts"),
				$c = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				el = n("./src/reddit/actions/changeUsername.ts"),
				tl = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				nl = n("./src/reddit/actions/postCreation/general.ts"),
				sl = n("./src/reddit/actions/preferences.ts"),
				rl = n("./src/reddit/components/BlockNavigation/index.tsx"),
				al = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				ol = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var il = Object(Dt.a)({
					getComponent: () => Object(le.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				cl = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ll = n("./src/reddit/components/Settings/modalIds.ts"),
				dl = n("./src/reddit/helpers/trackers/emailCollection.ts"),
				ul = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				ml = n("./src/reddit/icons/svgs/Close/index.tsx"),
				pl = n("./src/reddit/selectors/emailCollection.ts"),
				bl = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				hl = n.n(bl);
			var gl = Object(cl.a)(e => {
					let {
						closeTooltip: t,
						email: n,
						resendEmail: r,
						toggleChangeEmailModal: a
					} = e;
					const o = Object(Ze.b)(),
						i = Object(Ee.d)(),
						c = Object(Ee.e)(pl.a);
					Object(u.useEffect)(() => {
						o(c ? Object(dl.f)(ul.a) : Object(ul.g)(ul.a))
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
						className: hl.a.container
					}, m.a.createElement("div", {
						className: hl.a.topLine
					}), m.a.createElement("button", {
						className: hl.a.closeWrapper,
						onClick: () => {
							o(c ? Object(dl.e)(ul.a) : Object(ul.c)(ul.a)), t()
						}
					}, m.a.createElement(ml.a, {
						className: hl.a.closeIcon
					})), m.a.createElement("h5", {
						className: hl.a.title
					}, d), m.a.createElement("p", {
						className: hl.a.subtitle
					}, n), m.a.createElement("p", {
						className: hl.a.description
					}, l), m.a.createElement("div", {
						className: hl.a.buttonWrapper
					}, c ? m.a.createElement(dn.t, {
						onClick: () => {
							i(Object(Ft.h)(ll.h)), o(Object(dl.a)(ul.a))
						},
						priority: dn.c.Secondary,
						isFullWidth: !0
					}, s.fbt._("Add email", null, {
						hk: "3DXT0n"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement(dn.t, {
						priority: dn.c.Secondary,
						onClick: e => {
							e.stopPropagation(), o(Object(ul.e)(ul.a, "update")), a()
						},
						isFullWidth: !0
					}, s.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(dn.t, {
						isFullWidth: !0,
						onClick: () => {
							o(Object(ul.e)(ul.a, "confirm")), r(), t()
						}
					}, s.fbt._("Got it", null, {
						hk: "3IP9TO"
					})))))
				}, [Ua.a.Click, Ua.a.Keydown, Ua.a.Resize]),
				fl = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				vl = n.n(fl);
			const Ol = e => {
				let {
					exposeIFrameElement: t
				} = e;
				return m.a.createElement(Qe.a, {
					className: vl.a.loggedInGoogleOneTap,
					exposeIFrameElement: t,
					path: Je.c.GoogleOneTap
				})
			};
			var Cl = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				yl = n.n(Cl);
			const {
				fbt: El
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var xl = e => {
					const {
						onCloseFlyout: t
					} = e;
					return m.a.createElement("div", {
						className: yl.a.container
					}, m.a.createElement("p", {
						className: yl.a.title
					}, El._("New User Settings", null, {
						hk: "1Sziu9"
					})), m.a.createElement("h5", {
						className: yl.a.subtitle
					}, El._("Like customizing Reddit?", null, {
						hk: "38eFal"
					})), m.a.createElement("p", {
						className: yl.a.description
					}, El._("You can save how you sort and view your communities in user settings.", null, {
						hk: "XMkGT"
					})), m.a.createElement(dn.o, {
						className: yl.a.dismissBtn,
						onClick: t
					}, El._("Got it", null, {
						hk: "3IP9TO"
					})))
				},
				jl = n("./node_modules/lodash/noop.js"),
				_l = n.n(jl),
				Pl = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				Sl = n("./src/lib/prettyPrintNumber/index.ts"),
				kl = n("./src/realtime/GQLSubscription/async.tsx"),
				Nl = n("./src/reddit/actions/alpha.ts"),
				wl = n("./src/reddit/actions/economics/marketplace/index.ts"),
				Ml = n("./src/reddit/actions/modMode.ts"),
				Il = n("./src/reddit/actions/profile/index.ts"),
				Tl = n("./src/reddit/constants/elementClassNames.ts"),
				Al = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				Rl = n("./src/reddit/helpers/karma.ts"),
				Ll = n("./src/reddit/hooks/useWindowEvent.ts"),
				Fl = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Dl = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Bl = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Gl = n("./src/reddit/selectors/avatarPushcard.ts");
			const Ul = e => Object(cc.c)(e, {
				experimentName: Un.tg,
				experimentEligibilitySelector: cc.a
			}) === Un.Yd;
			var Hl = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				ql = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Wl = n("./src/reddit/selectors/modModeEnabled.ts"),
				Vl = n("./src/reddit/selectors/seo/index.ts"),
				zl = n("./src/reddit/selectors/tooltip.ts");
			const Ql = () => {
				var e, t;
				const n = Object(Ee.d)(),
					s = Object(Ee.e)($i.b),
					r = null !== (e = Object(Ee.e)(Gl.b)) && void 0 !== e ? e : null,
					a = null !== (t = Object(Ee.e)(Gl.c)) && void 0 !== t ? t : null,
					o = Object(Ee.e)(e => e);
				return Object(u.useEffect)(() => {
					s || n(Object(Bc.a)()), r && Object(G.a)(Object(Pl.h)(o)), a && Object(G.a)(Object(Pl.i)(o))
				}, [n, s, r, a]), {
					avatarPushcardBanner: r,
					avatarPushcard: a
				}
			};
			var Zl = n("./src/reddit/components/HeaderUserDropdown/AvatarPushcardBanner/Banner/index.m.less"),
				Jl = n.n(Zl);
			var Kl = e => {
				let {
					className: t,
					iconUrl: n,
					title: s,
					body: r
				} = e;
				return m.a.createElement("span", {
					className: Object(Se.a)(Jl.a.banner, t),
					role: "status",
					"aria-live": "polite"
				}, n && m.a.createElement("img", {
					className: Jl.a.icon,
					src: n,
					alt: "",
					role: "presentation"
				}), m.a.createElement("span", {
					className: Jl.a.content
				}, m.a.createElement("span", {
					className: Jl.a.title
				}, s), r && m.a.createElement("span", {
					className: Jl.a.body
				}, r)), m.a.createElement(kr.a, {
					name: "caret_down"
				}))
			};
			var Xl = () => {
					const {
						avatarPushcardBanner: e
					} = Ql();
					return e && m.a.createElement(Kl, e)
				},
				Yl = n("./src/higherOrderComponents/asTooltip.tsx"),
				$l = n("./src/lib/constants/icons.ts"),
				ed = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				td = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				nd = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				sd = n.n(nd);
			const rd = (e, t) => e && m.a.createElement("div", {
				className: sd.a.marketingBadge
			}, m.a.createElement(ed.a, {
				className: sd.a.marketingAsset,
				headshot: e
			}), s.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Hc.a, {
				className: Object(Se.a)(sd.a.sparkle, sd.a.sparkle1)
			}), m.a.createElement(Hc.a, {
				className: Object(Se.a)(sd.a.sparkle, sd.a.sparkle2)
			}), m.a.createElement(Hc.a, {
				className: Object(Se.a)(sd.a.sparkle, sd.a.sparkle3)
			}), m.a.createElement(Hc.a, {
				className: Object(Se.a)(sd.a.sparkle, sd.a.sparkle4)
			})));
			var ad = e => {
					let {
						useNewButtonComponent: t,
						onClick: n
					} = e;
					var r;
					const a = Object(Ee.d)(),
						o = Object(yr.a)(),
						i = Object(Hn.ib)(),
						c = Object(Ee.e)(e => e.user.account),
						l = Object(Ee.e)(wr.d),
						d = Object(Ee.e)($i.b),
						u = Object(Ee.e)($i.a),
						p = () => a(Object(Gc.b)({
							clickSource: "nav"
						})),
						b = Object(Ee.e)(ae.k).startsWith("en");
					if ((null === (r = null == i ? void 0 : i.meta) || void 0 === r ? void 0 : r.name) === k.Tb.AVATAR) return null;
					d || a(Object(Bc.a)()), u && o(Uc.o);
					const h = c && c.snoovatarFullBodyAsset ? s.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}) : s.fbt._("Create Avatar", null, {
							hk: "3kfCbX"
						}),
						g = () => {
							p(), u && o(Uc.c), null == n || n()
						};
					if (t) {
						const e = m.a.createElement(m.a.Fragment, null, h, b && rd(u, l));
						return m.a.createElement(no, {
							onClick: g,
							title: e,
							titleClassName: sd.a.avatarLinkBody
						})
					}
					const f = Object(td.c)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? iu("avatar_style") : iu("add"), ((e, t, n, s) => r => m.a.createElement("div", {
						className: `${sd.a.avatarLinkBody} ${r.className}`
					}, e, s && rd(t, n)))(h, u, l, b));
					return m.a.createElement(f, {
						onClick: p
					})
				},
				od = n("./src/reddit/helpers/trackers/user.ts"),
				id = n("./src/reddit/components/HeaderUserDropdown/UserMenu/Components/RecapLink/index.m.less"),
				cd = n.n(id);
			const {
				fbt: ld
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var dd = () => {
				const e = Object(yr.a)(),
					t = Object(Ee.e)(Ti.a),
					n = Object(Ee.e)(Ti.d),
					s = Object(td.c)(Hr, (() => e => m.a.createElement("div", {
						className: `${cd.a.recapLinkBody} ${e.className}`
					}, ld._("{=Reddit Recap}", [ld._param("=Reddit Recap", m.a.createElement("p", null, ld._("Reddit Recap", null, {
						hk: "4cvJVt"
					})))], {
						hk: "1Duk9x"
					}), m.a.createElement("div", {
						className: cd.a.marketingBadge
					}, ld._("New", null, {
						hk: "2o3NMk"
					}))))());
				return t && !n ? m.a.createElement(s, {
					href: Ii.a,
					onClick: () => e(Object(od.f)())
				}) : null
			};
			var ud = e => {
					const {
						title: t,
						children: n,
						icon: s
					} = e;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
						className: Object(Se.a)(Za.a.heading, Ka.a.category)
					}, m.a.createElement("span", {
						className: Za.a.headingContent
					}, m.a.createElement("span", {
						className: Za.a.iconContainer
					}, s), m.a.createElement("span", {
						className: Za.a.title
					}, t))), m.a.createElement("div", {
						className: Za.a.contentContainer
					}, n))
				},
				md = n("./src/reddit/helpers/trackers/modTools.ts");
			const pd = () => {
					const e = Object(Ee.d)(),
						t = Object(yr.a)(),
						n = Object(Ee.e)(O.fb);
					return m.a.createElement(ao, {
						isEnabled: n,
						onClick: () => {
							t(Object(od.g)(n)), (t => e(Object(sl.y)(t)))(!n)
						},
						title: s.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				bd = () => {
					const e = Object(Ee.d)(),
						t = Object(yr.a)(),
						n = Object(Ee.e)(e => e.user.account),
						r = Object(Ee.e)(Wl.a);
					return n && n.isMod ? m.a.createElement(ao, {
						isEnabled: r,
						onClick: () => {
							t(Object(md.m)(!r)), (() => e(Object(Ml.b)()))()
						},
						title: s.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				};
			var hd = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				gd = n.n(hd);
			const fd = () => {
					const e = Object(Ee.d)(),
						t = Object(Ze.b)(),
						n = Object(Ee.e)(O.m),
						r = Object(Ee.e)(O.X);
					return n ? m.a.createElement(ud, {
						icon: m.a.createElement(kr.a, {
							name: "profile"
						}),
						title: s.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(ao, {
						title: s.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: r,
						onClick: () => {
							t(Object(od.h)(!r)), (t => e(Object(sl.G)({
								showPresence: t
							})))(!r)
						}
					}), m.a.createElement(dd, null), m.a.createElement(so, {
						title: s.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(io.c)("profile"))
					}), m.a.createElement(ad, {
						onClick: () => e(Object(pc.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(so, {
						title: s.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(io.c)("settings"))
					})) : null
				},
				vd = () => {
					return Object(Ee.e)(O.m) ? m.a.createElement(ud, {
						title: s.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(kr.a, {
							name: "views"
						})
					}, m.a.createElement(bd, null), m.a.createElement(pd, null)) : null
				},
				Od = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(Ee.e)(O.m) ? null : m.a.createElement(Ya, {
						icon: m.a.createElement(kr.a, {
							name: "settings"
						}),
						title: s.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(pd, null))
				},
				Cd = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: r,
						useClassicUserMenuStyles: a = !1
					} = e;
					return m.a.createElement(Ya, {
						buttonClassName: a ? gd.a.button : "",
						headingClassName: a ? gd.a.headingContent : "",
						icon: m.a.createElement(kr.a, {
							name: "rules"
						}),
						isOpen: t,
						noBottomDivider: a,
						onClick: (e, t) => {
							r(Object(io.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(so, {
						className: a ? gd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => r(Object(io.c)("user_agreement")),
						title: s.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(so, {
						className: a ? gd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => r(Object(io.c)("privacy_policy")),
						title: s.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(so, {
						className: a ? gd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => r(Object(io.c)("content_policy")),
						title: s.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(so, {
						className: a ? gd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => r(Object(io.c)("mod_policy")),
						title: s.fbt._("Moderator Code of Conduct", null, {
							hk: "vJzm8"
						})
					}))
				};
			var yd = n("./src/reddit/components/HiddenDiv.tsx"),
				Ed = n("./src/reddit/controls/Dropdown/index.tsx"),
				xd = n("./src/reddit/helpers/trackers/authControls.ts"),
				jd = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				_d = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/ConfirmDismissModal.tsx"),
				Pd = n("./src/reddit/helpers/path/index.ts");
			var Sd = e => {
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
				kd = n("./src/reddit/components/HeaderUserDropdown/UserMenu/Components/AvatarPushCard/PushCard/index.m.less"),
				Nd = n.n(kd);
			var wd = e => {
				let {
					avatarPushcard: t
				} = e;
				const n = Object(Ee.d)(),
					s = Object(Ee.e)(e => e),
					[r, a] = Object(u.useState)(!1);
				Object(u.useEffect)(() => {
					n(Object(wl.f)(t))
				}, []);
				const {
					title: o,
					cta: i,
					imageUrl: c,
					deeplink: l
				} = t;
				return m.a.createElement("div", {
					className: Nd.a.avatarPushCardContainer,
					onClick: () => {
						Object(G.a)(Object(Pl.c)(s)), window.location.href = Object(Pd.b)(l)
					}
				}, m.a.createElement("button", {
					className: Nd.a.closeButton,
					onClick: e => {
						e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), Object(G.a)(Object(Pl.f)(s)), a(!0)
					}
				}, m.a.createElement(Sd, {
					className: Nd.a.closeButtonIcon
				})), m.a.createElement("img", {
					className: Nd.a.image,
					src: c,
					alt: o
				}), (o || i) && m.a.createElement("div", {
					className: Nd.a.ctaWrapper
				}, o && m.a.createElement("p", {
					className: Nd.a.ctaDescription
				}, o), i && m.a.createElement("div", {
					className: Nd.a.cta
				}, i)), r && m.a.createElement(_d.a, {
					onGoBack: e => {
						e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), a(!1)
					},
					onDismiss: () => {
						Object(G.a)(Object(Pl.g)(s)), n(Object(wl.a)(t))
					}
				}))
			};
			const Md = () => {
					const {
						avatarPushcard: e
					} = Ql();
					return e && m.a.createElement(wd, {
						avatarPushcard: e
					})
				},
				Id = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: Za.a.headingContent
					}, m.a.createElement("span", {
						className: Za.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(Se.a)(Za.a.title, s)
					}, n))
				},
				Td = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: r,
						titleClassName: a
					} = e;
					return m.a.createElement("button", {
						className: Object(Se.a)(Za.a.button, t),
						onClick: s
					}, m.a.createElement(Id, {
						icon: n,
						title: r,
						titleClassName: a
					}))
				},
				Ad = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: r,
						rel: a,
						title: o,
						titleClassName: i
					} = e;
					return m.a.createElement(za, {
						className: Object(Se.a)(Za.a.button, t),
						href: n,
						rel: a,
						onClick: r
					}, m.a.createElement(Id, {
						icon: s,
						title: o,
						titleClassName: i
					}))
				},
				Rd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					const t = e.getFullYear(),
						n = e.getMonth();
					return `/posts/${n>=6?t:t-1}/`
				};
			var Ld = e => [{
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
				url: Rd()
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
			var Fd = e => {
					let {
						isCommunityLinkVisible: t,
						isLoggedIn: n,
						isOpen: r,
						onClick: a,
						sendEvent: o,
						url: i,
						useClassicUserMenuStyles: c = !1
					} = e;
					return m.a.createElement(Ya, {
						buttonClassName: c ? gd.a.button : "",
						headingClassName: c ? gd.a.headingContent : "",
						noBottomDivider: c,
						icon: m.a.createElement(kr.a, {
							name: "info"
						}),
						title: s.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: r,
						onClick: (e, t) => {
							o(Object(io.c)(t ? "more_chevron" : "more_menu")), "function" == typeof a && a(e)
						}
					}, Ld(t).map(e => ((e, t) => {
						let {
							isHidden: n,
							noun: s,
							rel: r,
							title: a,
							url: o
						} = e;
						return !n && m.a.createElement(so, {
							href: o,
							key: o,
							onClick: () => {
								s && t(Object(io.c)(s))
							},
							rel: r,
							title: a()
						})
					})(e, o)), n ? m.a.createElement(so, {
						href: "https://old.reddit.com" + i,
						title: s.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							o(Object(io.c)("old_reddit")), o(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: fn.db(e),
								subreddit: fn.mb(e)
							}))
						}
					}) : null)
				},
				Dd = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Bd = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				Gd = n.n(Bd);
			var Ud = e => {
				let {
					isOpen: t,
					onClick: n
				} = e;
				const [{
					links: r,
					showAll: a
				}, o] = Object(u.useState)({
					links: Object(Dd.b)(),
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
				return m.a.createElement(Ya, {
					"aria-hidden": !0,
					icon: m.a.createElement(kr.a, {
						name: "history"
					}),
					isOpen: t,
					title: s.fbt._("Recent Communities", null, {
						hk: "cJ4rl"
					}),
					onClick: n
				}, i.map(e => {
					var t, n;
					return m.a.createElement(ro, {
						className: Gd.a.basicLink,
						href: e.url,
						iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : Gd.a.subredditIcon,
						iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
						key: e.url,
						title: e.title,
						titleClassName: Gd.a.title
					})
				}), r.length > 3 && (e => m.a.createElement("span", {
					className: Za.a.spanButton,
					onClick: c
				}, m.a.createElement("span", {
					className: Object(Se.a)(Za.a.headingContent, Gd.a.headingContent)
				}, m.a.createElement("span", {
					className: Za.a.title
				}, e))))(a ? s.fbt._("see less", null, {
					hk: "3tQWvR"
				}) : s.fbt._("see more", null, {
					hk: "1WV0AC"
				})))
			};

			function Hd() {
				return (Hd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const qd = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				Wd = e => {
					const t = e && e.coins || 0;
					return s.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [s.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var Vd;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(Vd || (Vd = {}));
			var zd = e => {
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
					} = e, [h, g] = Object(u.useState)(Vd.TermsAndPolicies), f = e => () => {
						g(h === e ? null : e)
					}, v = e => ({
						onClick: f(e),
						isOpen: h === e
					}), O = !!b, C = () => {
						t(), n(a)
					}, y = () => m.a.createElement(Ad, {
						className: Ka.a.button,
						icon: m.a.createElement(kr.a, {
							name: "topic_activism"
						}),
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => l(Object(od.b)()),
						title: s.fbt._("Advertise on Reddit", null, {
							hk: "3R4KSI"
						})
					});
					return m.a.createElement("div", {
						onClick: qd
					}, m.a.createElement(Md, null), m.a.createElement(fd, null), m.a.createElement(vd, null), m.a.createElement(() => d ? m.a.createElement(Td, {
						className: Ka.a.button,
						icon: m.a.createElement(kr.a, {
							name: "community"
						}),
						onClick: () => {
							c(), l(Object(jd.a)()), i()
						},
						title: s.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(Ad, {
						className: Ka.a.coinsLink,
						icon: m.a.createElement(kr.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, s.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: Ka.a.meta
						}, Wd(b))),
						onClick: () => {
							Object(bo.d)(bo.a.GoldPayment, !0), e.sendEvent(Object(od.d)())
						},
						titleClassName: Ka.a.coinsTitle
					}), null), m.a.createElement(() => m.a.createElement(Ad, {
						className: Ka.a.button,
						icon: m.a.createElement(kr.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(bo.d)(bo.a.GoldPayment, !0), e.sendEvent(Object(od.e)())
						},
						title: s.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), !O && m.a.createElement(Ud, v(Vd.RecentCommunitiesMenu)), m.a.createElement(mo, Hd({}, v(Vd.ExploreMenu), {
						sendEvent: l
					})), m.a.createElement(Od, v(Vd.Settings)), !O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(Ad, {
						className: Ka.a.button,
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(kr.a, {
							name: "help"
						}),
						title: s.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(Fd, Hd({}, v(Vd.MoreMenu), {
						isCommunityLinkVisible: r,
						isLoggedIn: O,
						url: p,
						sendEvent: l
					})), m.a.createElement(Cd, Hd({}, v(Vd.TermsAndPolicies), {
						sendEvent: l
					})), m.a.createElement(() => O ? m.a.createElement(Td, {
						className: Ka.a.button,
						icon: m.a.createElement(kr.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), o()
						},
						title: s.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(Td, {
						className: Ka.a.button,
						icon: m.a.createElement(kr.a, {
							name: "profile"
						}),
						onClick: C,
						title: s.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: Za.a.copyrightContainer
					}, m.a.createElement("span", {
						className: Za.a.copyrightText
					}, s.fbt._("Reddit, Inc. © {year}. All rights reserved.", [s.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "2U62k3"
					}))), null))
				},
				Qd = n("./src/reddit/selectors/experiments/shredditParity.ts"),
				Zd = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				Jd = n.n(Zd);

			function Kd() {
				return (Kd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Xd = ze.a.wrapped(Ed.a, "Dropdown", Jd.a),
				Yd = Object(Yl.a)(Xd),
				$d = e => m.a.createElement(td.a, {
					className: Object(Se.a)(Jd.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: Jd.a.buttonText
				}, e.displayText), m.a.createElement($a.a, {
					className: Jd.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				})),
				eu = e => t => m.a.createElement(kr.a, Kd({
					name: e
				}, t)),
				tu = e => {
					let {
						nightmode: t,
						sendEvent: n,
						toggleNightmode: r
					} = e;
					return Object(Ee.e)(Qd.a) ? null : m.a.createElement($d, {
						displayText: s.fbt._("Dark Mode", null, {
							hk: "1Tx6hE"
						}),
						isEnabled: t,
						onClick: e => {
							null == e || e.nativeEvent.stopImmediatePropagation(), n(Object(od.g)(t)), r(!t)
						}
					}, m.a.createElement(kr.a, {
						name: "night",
						className: Jd.a.nightIcon
					}))
				},
				nu = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(td.b)(eu($l.a.help), s.fbt._("Help Center", null, {
						hk: "4sGjc0"
					}));
					return m.a.createElement(n, {
						href: "https://www.reddithelp.com",
						onClick: () => t(Object(io.c)("help_center"))
					})
				},
				su = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(td.b)(eu($l.a.topic_activism), s.fbt._("Advertise on Reddit", null, {
						hk: "3R4KSI"
					}));
					return m.a.createElement(n, {
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => t(Object(od.b)())
					})
				},
				ru = e => {
					let {
						dispatchOpenLoginModal: t,
						isNsfwBlocking: n,
						sendEvent: r
					} = e;
					const a = Object(td.c)(eu($l.a.logout), s.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					}));
					return m.a.createElement(a, {
						href: "#",
						onClick: e => {
							Object(Ge.a)(e) && (e.preventDefault(), e.stopPropagation(), t(n), r(Object(xd.b)()))
						}
					})
				};
			var au = Object(Ze.c)(e => {
				const {
					dispatchOpenLoginModal: t,
					isCrawler: n,
					isNsfwBlocking: s,
					nightmode: r,
					requestAwardKarma: a,
					sendEvent: o,
					user: i
				} = e, c = i && i.id, l = Object(Ee.e)(O.S), [d, p] = Object(u.useState)(!1), b = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), p(!d)
				}, [d]), [h, g] = Object(u.useState)(!1), f = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), g(!h)
				}, [h]);
				return Object(u.useEffect)(() => {
					p(!1), g(!1)
				}, [e.isOpen]), Object(u.useEffect)(() => {
					a()
				}, [c]), n ? m.a.createElement(yd.a, null, m.a.createElement(zd, e)) : l ? m.a.createElement(Yd, {
					className: Jd.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(zd, e)) : m.a.createElement(Yd, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(tu, {
					nightmode: r,
					sendEvent: o,
					toggleNightmode: e.toggleNightmode
				}), m.a.createElement(nu, {
					sendEvent: o
				}), m.a.createElement(Fd, {
					isOpen: h,
					onClick: f,
					isCommunityLinkVisible: e.isCommunityLinkVisible,
					isLoggedIn: l,
					url: e.url,
					sendEvent: o,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(Cd, {
					isOpen: d,
					onClick: b,
					sendEvent: o,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(su, {
					sendEvent: o
				}), m.a.createElement("div", {
					className: Jd.a.divider
				}), m.a.createElement(ru, {
					dispatchOpenLoginModal: t,
					isNsfwBlocking: s,
					sendEvent: o
				}))
			});

			function ou() {
				return (ou = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const iu = e => t => m.a.createElement(kr.a, ou({
					name: e
				}, t)),
				cu = Object(Ee.b)(() => Object(se.c)({
					avatarPushcardBanner: Gl.b,
					isCrawler: e => !!Object(Vl.a)(e),
					isModModeEnabled: Wl.a,
					isNsfwBlocking: e => {
						const t = Object(re.d)(e),
							n = Object(re.e)(e);
						return t || n
					},
					isOpen: Object(zl.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: ql.d,
					shouldShowCreateCommunityItem: O.sb,
					navbarLikeMweb: Hl.a,
					nightmode: O.fb,
					showPresence: O.X,
					url: Mn.s,
					isCommunityLinkVisible: Ul
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(pc.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					dismissAvatarPushcardBanner: t => e(Object(wl.b)(t)),
					toggleNightmode: t => e(Object(sl.y)(t)),
					toggleShowPresence: t => e(Object(sl.G)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Nl.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (d.a.get("rseor3") && d.a.remove("rseor3", {
							domain: i.a.cookieDomain
						}), e(Object(Nl.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Il.g)(Object(bn.e)(t.user)))
					},
					dispatchOpenLoginModal: t => {
						t && (e(Object(Ft.k)({
							actionSource: Ft.a.NsfwBlockingModal
						})), Object(Al.c)(Al.a.Login)), e(Object(te.openLoginModal)())
					},
					toggleModMode: () => e(Object(Ml.b)()),
					openCommunityCreationModal: () => e(Object(Ft.h)(Jt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var lu = Object(Hn.v)({
					pageLayer: e => e
				})(cu(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: r,
						user: a
					} = e, o = Object(Ee.e)(e => e), i = Object(Ee.e)(ql.b), [c, l] = Object(u.useState)(!1), d = a && a.id;
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
					return Object(Ll.a)("visibilitychange", b), Object(u.useEffect)(() => {
						l("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(Se.a)(Jd.a.container, Tl.e)
					}, r && c && i && m.a.createElement(kl.a, {
						variables: p,
						onData: _l.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Bl.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(Se.a)(e.className, Jd.a.inlineButton, {
							[Jd.a.dropdownOpen]: e.isOpen,
							[Jd.a.isLoggedOut]: !a,
							[Jd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon"), e.avatarPushcardBanner && (Object(G.a)(Object(Pl.b)(o)), e.dismissAvatarPushcardBanner(e.avatarPushcardBanner))
						}
					}, m.a.createElement(Xl, null), m.a.createElement("span", {
						className: Jd.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(Se.a)(Jd.a.accountWrapper, Jd.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(m.a.Fragment, null, m.a.createElement(Rr.a, {
						className: Object(Se.a)(Jd.a.imgIcon, {
							[Jd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: Jd.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && r
					})), m.a.createElement("span", {
						className: Jd.a.accountDetails
					}, m.a.createElement("span", {
						className: Jd.a.username
					}, n.displayText, n.isGold && m.a.createElement(Dl.a, {
						className: Jd.a.premiumFontIcon,
						title: s.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: Jd.a.accountKarma
					}, m.a.createElement(kr.a, {
						name: "karma",
						isFilled: !0,
						className: Jd.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Rl.a)(e),
							n = Object(Sl.b)(t);
						return s.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [s.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: Jd.a.accountCoins
					}, m.a.createElement(Fl.a, {
						className: Jd.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(Sl.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(Se.a)(Jd.a.accountWrapper, Jd.a.isLoggedOut)
					}, m.a.createElement(kr.a, {
						name: "user",
						className: Jd.a.defaultProfileIcon
					})))(e.user), m.a.createElement(kr.a, {
						className: Jd.a.caretDownIcon,
						name: "caret_down"
					})), m.a.createElement(Ro.a, null, s.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(au, e))
				})),
				du = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				uu = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less"),
				mu = n.n(uu);
			const pu = Object(cl.a)(e => m.a.createElement("div", {
				"aria-modal": !0,
				className: Object(Se.a)(e.className, mu.a.confirmContainer, mu.a.confirmToastContainer),
				role: "dialog"
			}, m.a.createElement("div", null, m.a.createElement("h2", {
				className: mu.a.confirmToastTitle
			}, s.fbt._("🎉 Nice name, {username}!", [s.fbt._param("username", e.username)], {
				hk: "2DEuit"
			}))), m.a.createElement("p", {
				className: mu.a.confirmModalDescription
			}, s.fbt._("May it serve you well", null, {
				hk: "1OmrGj"
			}))));
			var bu = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/Loader.tsx"),
				hu = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				gu = n("./src/reddit/helpers/trackers/inbox.ts"),
				fu = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				vu = n("./src/reddit/routes/acknowledgements/index.ts"),
				Ou = n("./src/reddit/routes/appeal/index.ts");
			var Cu = {
					action: () => async e => await e(Object(p.c)(ma.a)),
					chunk: k.t.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				yu = n("./src/reddit/routes/coins/index.ts"),
				Eu = n("./src/reddit/routes/coinsMobile/index.ts"),
				xu = n("./src/reddit/routes/commentsPage/index.ts"),
				ju = n("./src/reddit/routes/countrySitePage/index.ts");
			n("./node_modules/@loadable/component/dist/loadable.esm.js");
			var _u = [],
				Pu = n("./src/reddit/routes/econManagement/index.ts"),
				Su = n("./src/reddit/routes/econManagement2/index.ts");
			var ku = {
					action: Object(T.a)(() => n.e(10).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: k.t.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				Nu = n("./src/lib/addQueryParams/index.ts");
			var wu = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							queryParams: a
						} = e;
						await t(Object(p.c)(Object(Nu.a)("/", a)))
					},
					chunk: k.t.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [k.t.COMMENTS_PAGE, k.t.FRONTPAGE]
				},
				Mu = n("./src/reddit/routes/followers/index.ts"),
				Iu = n("./src/reddit/routes/framedGild/index.ts"),
				Tu = n("./src/reddit/routes/framedModal/index.ts"),
				Au = n("./src/reddit/routes/frontpage/index.ts"),
				Ru = n("./src/reddit/routes/geotagging/index.ts"),
				Lu = n("./src/reddit/routes/happeningNow/index.ts"),
				Fu = n("./src/reddit/routes/inbox/index.ts"),
				Du = n("./src/reddit/routes/meta/index.ts"),
				Bu = n("./src/reddit/routes/moderationPages/index.ts"),
				Gu = n("./src/reddit/routes/modQueue/index.ts"),
				Uu = n("./src/reddit/routes/multireddit/index.ts"),
				Hu = n("./src/reddit/routes/notificationsInbox/index.ts"),
				qu = n("./src/reddit/routes/postCreation/constants.ts");
			const Wu = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(p.c)("/"))
				},
				chunk: k.t.EMPTY,
				exact: !0,
				meta: {
					name: k.Tb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var Vu = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(qu.b))
					},
					chunk: k.t.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...Wu],
				zu = n("./src/reddit/routes/postCreation/index.ts"),
				Qu = n("./src/reddit/routes/postDraft/index.ts"),
				Zu = n("./src/reddit/routes/postSetPage/index.ts");
			var Ju = {
					action: () => async () => {
						window.location.replace(window.location.origin)
					},
					chunk: k.t.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.POWERUPS_REDIRECT
					},
					path: ["/powerup", "/powerups"]
				},
				Ku = n("./src/reddit/routes/premium/index.ts"),
				Xu = n("./src/reddit/routes/profileComments/index.ts"),
				Yu = n("./src/reddit/endpoints/me/index.ts"),
				$u = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				em = n("./src/server/helpers/profileRedirect.ts");
			var tm = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							rest: a
						} = e.params, {
							path: o,
							queryParams: i
						} = e, c = await Object(Yu.a)(r());
						if (!(c.ok && c.body && c.body.account)) {
							const e = n();
							return void Object($u.a)(t, e)
						}
						const l = c.body.account.displayText,
							d = Object(em.b)({
								path: o,
								profileName: l,
								queryParams: i,
								rest: a
							});
						await t(Object(p.c)(d))
					},
					chunk: k.t.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				nm = n("./src/reddit/routes/profileModSettings/index.ts"),
				sm = n("./src/reddit/routes/profileOverview/index.ts"),
				rm = n("./src/reddit/routes/profilePosts/index.ts");
			var am = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: r,
							queryParams: a
						} = e, o = Object(em.b)({
							path: r,
							profileName: n,
							queryParams: a,
							rest: s
						});
						t(Object(p.c)(o))
					},
					chunk: k.t.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/posts", "/user/:profileName/posts/:rest(.*)"]
				},
				om = n("./src/reddit/routes/profilePrivate/index.ts");
			var im = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: r,
							queryParams: a
						} = e, o = Object(em.b)({
							path: r,
							profileName: n,
							queryParams: a,
							rest: s
						});
						await t(Object(p.c)(o))
					},
					chunk: k.t.EMPTY,
					exact: !0,
					meta: {
						name: k.Tb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)", "/user/:profileName/moderation", "/u/:profileName/moderation"]
				},
				cm = n("./src/reddit/routes/profileSnoobuilder/index.ts"),
				lm = n("./src/reddit/routes/report/index.ts"),
				dm = n("./src/reddit/routes/searchResults/index.ts"),
				um = n("./src/reddit/routes/settings/index.ts");
			var mm = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(p.c)(s))
					},
					chunk: k.t.EMPTY,
					meta: {
						name: k.Tb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(p.c)("/settings/profile"))
					},
					chunk: k.t.EMPTY,
					meta: {
						name: k.Tb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				pm = n("./src/reddit/routes/subreddit/index.ts"),
				bm = n("./src/reddit/routes/subredditWiki/index.ts");
			var hm = {
					action: () => async e => {
						window.location.replace(window.location.origin)
					},
					chunk: k.t.TALK,
					exact: !0,
					meta: {
						name: k.Tb.TALK
					},
					path: "/talk"
				},
				gm = n("./src/reddit/routes/topic/index.ts");
			var fm = [vu.a, Ou.b, Ou.a, ma.b, Cu, yu.a, Eu.a, ju.a, tm, im, am, ...fu.a, ...xu.b, ku, ...Au.a, Ru.a, Ku.a, hm, Pu.c, Su.a, Ju, Mu.a, Iu.a, Tu.a, zu.a, Qu.a, Zu.a, ...Vu, wu, ...Du.a, Uu.a, Gu.a, oa.c, Hu.a, Fu.a, Xu.a, nm.a, sm.b, rm.a, cm.a, om.a, Ii.b, ...um.a, ...mm, dm.a, ...bm.a, gm.a, pm.b, Bu.a, lm.a, ..._u, Lu.a],
				vm = n("./src/reddit/selectors/appBadges.ts"),
				Om = n("./src/reddit/selectors/emailVerification.ts"),
				Cm = n("./src/reddit/selectors/sso.ts");
			var ym = m.a.memo((function(e) {
					let {
						badgeCount: t,
						hasUnreadChatMessages: n,
						onClickChat: r
					} = e;
					const a = Object(Cr.a)(),
						o = s.fbt._("Chat", null, {
							hk: "4nXRWH"
						});
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ec.a.iconWrapper,
						onMouseEnter: () => {
							a.show()
						},
						onMouseLeave: a.hide,
						ref: a.target.ref
					}, m.a.createElement("a", {
						className: Ec.a.link,
						href: `${i.a.redditUrl}/chat`,
						onClick: e => {
							e.preventDefault(), r()
						},
						"aria-label": o
					}, m.a.createElement(ea.a, {
						isActive: t > 0 || n,
						unreadCount: t
					}), m.a.createElement(kr.a, {
						name: "chat",
						className: Ec.a.icon2020
					}))), m.a.createElement(vr.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, o))
				})),
				Em = n("./src/reddit/actions/chat/showChatChannelDiscoveryTooltip.ts");
			var xm = m.a.memo((function(e) {
				let {
					badgeCount: t,
					hasUnreadChatMessages: n,
					onClickChat: r
				} = e;
				const a = Object(Ee.d)(),
					o = Object(Ee.e)(O.k),
					c = Object(Ee.e)(Yc.c),
					l = Object(Cr.a)(),
					d = Object(u.useMemo)(() => c ? (e => ({
						...e,
						arrowProps: {
							...e.arrowProps,
							style: {
								...e.arrowProps.style,
								borderBottom: `3px solid ${Qi.a.alien600}`
							}
						},
						popperProps: {
							...e.popperProps,
							style: {
								...e.popperProps.style,
								background: Qi.a.alien600
							}
						},
						visible: !0
					}))(l) : l, [l, c]),
					p = Object(u.useCallback)(e => {
						e.preventDefault(), r(), c && (a(Object(Em.d)(!1)), l.hide())
					}, [c, a, r, l]);
				Object(u.useEffect)(() => {
					o && a(Object(Em.b)(o))
				}, [o, a]), Object(u.useEffect)(() => {
					o && c && Object(Em.c)(o)
				}, [o, c]);
				const b = s.fbt._("Chat", null, {
					hk: "4nXRWH"
				});
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: Ec.a.iconWrapper,
					onMouseEnter: () => {
						l.show()
					},
					onMouseLeave: l.hide,
					ref: l.target.ref
				}, m.a.createElement("a", {
					className: Ec.a.link,
					href: `${i.a.redditUrl}/chat`,
					"aria-label": b,
					onClick: p
				}, m.a.createElement(ea.a, {
					isActive: t > 0 || n,
					unreadCount: t
				}), m.a.createElement(kr.a, {
					name: "chat",
					className: Ec.a.icon2020
				}))), m.a.createElement(vr.a, {
					arrowProps: d.arrowProps,
					popperProps: d.popperProps,
					visible: d.visible
				}, c ? m.a.createElement("span", {
					className: Ec.a.chatButtonTooltipText,
					onClick: e => {
						e.preventDefault(), a(Object(Em.d)(!1))
					}
				}, s.fbt._("NEW! Chat with your community", null, {
					hk: "ym9yE"
				})) : b))
			}));
			var jm = e => {
					let {
						onClickChat: t
					} = e;
					const n = Object(Ee.e)(J.a),
						s = Object(Ee.e)(vm.g),
						r = Object(Ee.e)(J.l),
						a = Object(Ee.e)(vm.f),
						o = Object(Ee.e)(vm.e),
						i = r ? a + o : a;
					return n ? m.a.createElement(xm, {
						badgeCount: i,
						hasUnreadChatMessages: s,
						onClickChat: t
					}) : m.a.createElement(ym, {
						badgeCount: i,
						hasUnreadChatMessages: s,
						onClickChat: t
					})
				},
				_m = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				Pm = n.n(_m);
			var Sm = Object(Ze.c)(e => {
					let {
						className: t,
						sendEvent: n
					} = e;
					const r = Object(Ee.e)(O.fb),
						a = Object(Cr.a)(),
						o = s.fbt._("Advertise", null, {
							hk: "bW02l"
						}),
						[i, c] = m.a.useState(!1);
					return m.a.useEffect(() => {
						c(!Object(Lt.a)() || !localStorage.getItem("has_clicked_advertise_button"))
					}, []), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Object(Se.a)(t, Pm.a.container, {
							[Pm.a.isNightMode]: r
						})
					}, m.a.createElement("a", {
						className: Pm.a.link,
						ref: a.target.ref,
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => {
							n(Object(od.c)()), Object(Lt.a)() && !localStorage.getItem("has_clicked_advertise_button") && localStorage.setItem("has_clicked_advertise_button", "true"), c(!1)
						},
						onMouseEnter: a.show,
						onMouseLeave: a.hide,
						onBlur: a.hide,
						"aria-label": o
					}, m.a.createElement(kr.a, {
						className: Pm.a.icon,
						name: "topic_activism",
						style: {
							marginLeft: i ? "12px" : "7px"
						}
					}), i && m.a.createElement("span", {
						className: Pm.a.text
					}, o))), !i && m.a.createElement(vr.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, o))
				}),
				km = n("./src/reddit/actions/matrixChat/index.ts"),
				Nm = n("./src/lib/makeRequest/index.ts"),
				wm = n("./src/redditGQL/operations/MatrixChatNotifications.json");
			const Mm = () => async (e, t, n) => {
				const s = await (async e => {
					var t, n, s, r, a, o, i, c;
					const l = await Object(qo.a)(e, wm);
					if (Object(Nm.c)(l) && !l.error && void 0 !== (null === (r = null === (s = null === (n = null === (t = null == l ? void 0 : l.body) || void 0 === t ? void 0 : t.data) || void 0 === n ? void 0 : n.identity) || void 0 === s ? void 0 : s.matrixNotifications) || void 0 === r ? void 0 : r.unreadCount)) return null === (c = null === (i = null === (o = null === (a = null == l ? void 0 : l.body) || void 0 === a ? void 0 : a.data) || void 0 === o ? void 0 : o.identity) || void 0 === i ? void 0 : i.matrixNotifications) || void 0 === c ? void 0 : c.unreadCount
				})(n.gqlContext());
				void 0 !== s && e(Object(km.c)({
					count: s
				}))
			};
			var Im = n("./src/reddit/reducers/features/matrixChat/index.ts"),
				Tm = n("./src/reddit/selectors/features/matrixChat/index.ts");
			const Am = () => {
					const e = Object(Cr.a)(),
						t = Object(Ee.d)(),
						n = Object(Ee.e)(Tm.c),
						r = Object(Ee.e)(Tm.b),
						a = Object(Ee.e)(Tm.a);
					return m.a.useEffect(() => {
						void 0 === a && r === Im.b.CLOSED && t(Mm())
					}, [a, r, t]), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ec.a.iconWrapper,
						onMouseEnter: () => {
							e.show()
						},
						onMouseLeave: e.hide,
						ref: e.target.ref,
						"data-testid": "reddit-chat-button"
					}, m.a.createElement("a", {
						className: Ec.a.link,
						href: n,
						onClick: e => {
							const n = r !== Im.b.NORMAL ? Im.b.NORMAL : Im.b.CLOSED;
							e.preventDefault(), t(Object(km.d)({
								state: n
							}))
						}
					}, !!a && a > 0 && m.a.createElement(ea.a, {
						isActive: !0,
						unreadCount: a,
						testId: "reddit-chat-badge"
					}), m.a.createElement(kr.a, {
						name: "chat",
						className: Ec.a.icon2020
					}))), m.a.createElement(vr.a, {
						arrowProps: e.arrowProps,
						popperProps: e.popperProps,
						visible: e.visible
					}, s.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				},
				Rm = "change-username-tooltip-id",
				Lm = "email-verification-tooltip-id",
				Fm = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const r = Object(Cr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ec.a.iconWrapper,
						onMouseEnter: r.show,
						onMouseLeave: r.hide,
						ref: r.target.ref
					}, m.a.createElement(Cc, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: du.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(ea.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(kr.a, {
						className: Ec.a.icon2020,
						name: "mod"
					})), m.a.createElement(vr.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, s.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(du.b, {
						className: Ec.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				Dm = m.a.memo((function(e) {
					const t = Object(Cr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ec.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: Ec.a.link,
						"aria-label": s.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(kr.a, {
						className: Ec.a.icon2020,
						name: "add"
					}))), m.a.createElement(vr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Bm = Object(Hn.v)({
					pageLayer: e => e
				}),
				Gm = Object(se.c)({
					activeDropdownId: zl.a,
					activeModalId: Ac.b,
					appBadges: vm.b,
					email: O.p,
					inboxBadgeCount: vm.h,
					canViewQuickCreate: e => rc(e),
					isAvatarStorefrontEnabled: e => Object(ca.c)(e) && !!Object($i.a)(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					shouldShowEmailVerificationTooltip: Om.b,
					isLoggedIn: O.S,
					isModerator: gn.k,
					isNameEditable: O.U,
					isOneTapSession: ae.g,
					isResponsiveSettingsEnabled: Vn.a,
					isSendbirdChatAvailable: Yc.e,
					shouldOpenEmailVerificationTooltip: Om.a,
					shouldShowChangeUsernameModals: Cm.c,
					unreadNotifications: O.Bb,
					usernameChangedModalOpen: Object(Ac.c)(ll.p)
				}),
				Um = Object(Ee.b)(Gm, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(el.changeUsernameTooltipClosed)()),
					closeEmailVerificationTooltip: () => e(Object(tl.b)()),
					showEmailVerificationTooltip: () => e(Object(tl.b)()),
					fetchAppBadges: () => e(Object($c.c)()),
					logoutUser: t => {
						(null == t ? void 0 : t.contentWindow) && t.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(hu.a)()), e(Object(ye.p)())
					},
					onChatClick: () => e(Object(V.f)()),
					onDismissCustomizeFlyout: () => e(Object(sl.t)()),
					onOpenModerationDropdown: () => {
						e(Object(pc.h)({
							tooltipId: du.a
						})), e(Object(qa.q)())
					},
					onOpenUserDropdown: () => e(Object(pc.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(Ft.h)(ll.b))
					},
					openKeepUsernameModal: () => {
						e(Object(Ft.h)(ll.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(tl.b)()), e(Object(Ft.i)(ll.a))
					},
					resendEmail: () => e(Object(ye.v)(ul.a)),
					requestCreatePost: () => {
						t.pageLayer && e(nl.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(p.b)(t);
						e(Object(el.startChangeUsernameFlow)(n))
					}
				}));
			class Hm extends m.a.Component {
				constructor() {
					super(...arguments), this.googleOneTapIFrame = null, this.state = {
						confirmUsernameFlowStarted: !1,
						showNavBarEconCta: !0
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(gu.A)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(io.c)(e)), this.logoutUser = () => {
						this.props.logoutUser(this.googleOneTapIFrame)
					}, this.onClickCreatePost = () => {
						this.props.sendEvent(Object(fo.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(A.a)(e.pathname, fm),
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
						} = this.props, r = n && Object(bn.e)(n) || "", a = () => {
							this.setState({
								showNavBarEconCta: !1
							}), s && s()
						};
						return e ? m.a.createElement(Qc, {
							avatarUrlParams: {
								avatarId: "random",
								username: r
							}
						}) : t ? m.a.createElement(Xc, {
							handleButtonClick: a
						}) : void 0
					}
				}
				componentDidMount() {
					this.props.showEmailVerificationTooltip(), Fo()(this.props.appBadges) && this.props.fetchAppBadges()
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
						shouldShowChangeUsernameModals: j,
						toggleChangeEmailModal: _,
						unreadNotifications: P,
						user: S,
						usernameChangedModalOpen: k
					} = this.props, N = !(!P || !P.hasUnreadModmail), w = S && Object(bn.e)(S) || "", M = Object(Se.a)({
						[Ec.a["m-responsive"]]: h
					}), I = j && b;
					return m.a.createElement(mn.a, {
						id: Lm,
						ref: e => this.container = e,
						className: t
					}, m.a.createElement(mn.a, {
						className: Ec.a.headerLinks,
						id: Rm
					}, d && m.a.createElement(Fm, {
						isModerateIconLit: N,
						moderationDropdownOpen: e === du.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: P
					}), S && m.a.createElement(u.Fragment, null, !1 === g ? m.a.createElement(Am, null) : m.a.createElement(jm, {
						onClickChat: this.onClickChat
					}), m.a.createElement(Dc, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: a,
						pageUrl: null == y ? void 0 : y.url,
						userId: S.id,
						isLoggedIn: l,
						iconWrapper: Ec.a.iconWrapper
					}), m.a.createElement(Dm, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement(Sm, {
						className: Ec.a.iconWrapper
					}), this.state.showNavBarEconCta && m.a.createElement("span", {
						className: Ec.a.iconWrapper
					}, this.navBarEconCta()))), m.a.createElement(lu, {
						className: Ec.a.headerUserDropdown,
						logoutUser: this.logoutUser,
						onClick: v,
						sendEventWithName: this.sendEventWithName,
						user: S
					}), l && m.a.createElement(Ol, {
						exposeIFrameElement: this.exposeIFrameElement
					}), i && m.a.createElement(xl, {
						onCloseFlyout: f
					}), m.a.createElement(gl, {
						closeTooltip: s,
						email: r,
						isOpen: x && c,
						resendEmail: E,
						toggleChangeEmailModal: _,
						tooltipId: Lm
					}), m.a.createElement(il, {
						email: r,
						shouldOpenTooltip: x
					}), p && !h && !b && m.a.createElement(u.Fragment, null, m.a.createElement(ol.a, {
						closeTooltip: n,
						isOpen: o && !j,
						openChangeUsernameModal: O,
						openKeepUsernameModal: C,
						tooltipId: Rm,
						username: w
					}), j && m.a.createElement(al.a, {
						isResponsiveSettingsEnabled: h,
						overlayClassName: M,
						username: w,
						withOverlay: !0
					}), m.a.createElement(rl.a, {
						confirmNavigate: this.confirmNavigate
					})), I && !k && m.a.createElement(bu.a, {
						className: Ec.a.cornerModal,
						isNameEditable: p,
						isOneTapSession: b,
						isResponsiveSettingsEnabled: h,
						logoutUser: this.logoutUser,
						overlayClassName: Object(Se.a)(M, Ec.a.modalOverlay),
						username: w,
						withOverlay: !k
					}), I && k && m.a.createElement(pu, {
						className: Ec.a.cornerModal,
						isOpen: !0,
						tooltipId: Rm,
						username: w
					}))
				}
			}
			var qm = Object(Ze.c)(Bm(Um(Hm)));
			var Wm = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Vm = n("./src/reddit/selectors/getAppQrCode.ts"),
				zm = n("./src/reddit/components/Header/User/index.m.less"),
				Qm = n.n(zm);
			const {
				fbt: Zm
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Jm = Object(se.c)({
				account: e => e.user.account,
				isNsfwBlur: e => {
					const t = Object(re.d)(e),
						n = Object(re.e)(e);
					return t || n
				},
				origin: ae.l,
				isShredditParityEnabled: Qd.a
			}), Km = m.a.memo(e => m.a.createElement("div", {
				className: Object(Se.a)(e.className, Qm.a.row)
			}, !e.account && m.a.createElement(Xm, e), m.a.createElement(qm, {
				className: Object(Se.a)({
					[Qm.a.loggedOut]: !e.account
				}),
				user: e.account,
				onAvatarButtonClick: e.onAvatarButtonClick
			}))), Xm = e => {
				const t = Object(Ee.e)(vm.h),
					n = Object(Ee.e)(O.Ib),
					s = Object(Ee.e)(Wm.c),
					r = Object(Ee.e)(Vm.a),
					a = e.pageLayer,
					o = i.a.accountManagerOrigin,
					c = a ? a.url : "/",
					l = a && a.meta && a.meta.name === k.Tb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + c),
					d = !!e.isNsfwBlur,
					u = Object(Ee.d)(),
					p = Object(Ze.b)(),
					b = e.isShredditParityEnabled ? dn.k : dn.t;
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(Dc, {
					sendNavClickInbox: () => e.sendEvent(Object(gu.A)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: c,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: Qm.a.iconWrapper
				}), m.a.createElement("div", {
					className: Object(Se.a)(Qm.a.loggedOutRow)
				}, r ? m.a.createElement(dn.t, {
					Icon: Object(kr.b)("qr_code"),
					iconClassName: Qm.a.buttonIcon,
					kind: dn.b.Button,
					priority: dn.c.Secondary,
					onClick: e => {
						e.preventDefault(), u(mc()), p((() => e => ({
							...Object(fn.p)(e),
							source: "xpromo",
							action: "click",
							noun: "top_button"
						}))())
					},
					redditStyle: !e.isShredditParityEnabled,
					rplStyle: e.isShredditParityEnabled,
					className: Object(Se.a)(Qm.a.button, Qm.a.separator)
				}, Zm._("Get App", null, {
					hk: "4mMZ8i"
				})) : m.a.createElement(dn.t, {
					kind: dn.b.ExternalLink,
					priority: dn.c.Secondary,
					redditStyle: !e.isShredditParityEnabled,
					rplStyle: e.isShredditParityEnabled,
					className: Object(Se.a)(Qm.a.button, Qm.a.separator),
					href: `${o}/register/?dest=${l}`,
					onClick: t => {
						Object(Ge.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(d), e.sendEvent(Object(xd.c)("nav")))
					}
				}, Zm._("Sign Up", null, {
					hk: "2WZPuJ"
				})), m.a.createElement(b, {
					kind: dn.b.ExternalLink,
					priority: dn.c.Primary,
					redditStyle: !e.isShredditParityEnabled,
					rplStyle: e.isShredditParityEnabled,
					className: Object(Se.a)(Qm.a.button, Qm.a.separator),
					href: `${o}/login/?dest=${l}`,
					onClick: t => {
						Object(Ge.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(d), e.sendEvent(Object(xd.a)("nav")))
					}
				}, Zm._("Log In", null, {
					hk: "4Cxw0g"
				}))))
			};
			var Ym = Object(Hn.v)()(Object(Ee.b)(Jm, e => ({
					onOpenLoginModal: t => {
						t ? (e(Object(Ft.k)({
							actionSource: Ft.a.NsfwBlockingModal
						})), Object(Al.c)(Al.a.Login)) : e(Object(Ft.k)({
							actionSource: Ft.a.HeaderLogin
						})), e(Object(te.openLoginModal)())
					},
					onOpenRegisterModal: t => {
						t ? (e(Object(Ft.k)({
							actionSource: Ft.a.NsfwBlockingModal
						})), Object(Al.c)(Al.a.Signup)) : e(Object(Ft.k)({
							actionSource: Ft.a.HeaderSignup
						})), e(Object(te.openRegisterModal)())
					},
					closeUserDropdown: () => e(Object(pc.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(Ze.c)(Km))),
				$m = n("./src/reddit/components/Header/index.m.less"),
				ep = n.n($m);

			function tp() {
				return (tp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const np = ze.a.header("HeaderDynamicStyles", ep.a),
				sp = Object(se.c)({
					isLoggedIn: O.S,
					isNightMode: O.fb,
					isResponsiveSettingsEnabled: Vn.a,
					isPageResponsive: Di.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing,
					shouldShowModNavColor: e => {
						var t, n, s;
						const r = null === (s = null === (n = null === (t = e.platform) || void 0 === t ? void 0 : t.currentPage) || void 0 === n ? void 0 : n.meta) || void 0 === s ? void 0 : s.name;
						return ("moderationPages" === r || "modQueuePages" === r) && Object(Fi.a)(e, !0)
					}
				}),
				rp = Object(Hn.v)({
					categoryName: Hn.c,
					pageLayer: e => e
				}),
				ap = e => {
					const t = Object(u.useContext)(Ae.a),
						n = Object(Ee.e)(ia.f),
						r = e.isLoggedIn || n ? "/" : "/?feed=home";
					return m.a.createElement("div", {
						className: ep.a.left
					}, m.a.createElement(Ro.a, null, s.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(Ao.b, null), m.a.createElement(cr.a, {
						"aria-label": s.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: ep.a.centeredRow,
						to: r,
						onClick: e.onReloadFrontpage
					}, m.a.createElement(Ei.a, {
						className: Object(Se.a)(ep.a.snoo, {
							[ep.a.snooExp]: t
						})
					}), m.a.createElement(xi.a, {
						className: ep.a.wordmark
					})), e.children)
				},
				op = e => m.a.createElement("div", {
					className: ep.a.right
				}, e.children, m.a.createElement(Ym, {
					onAvatarButtonClick: e.onAvatarButtonClick
				})),
				ip = e => {
					const t = Object(u.useContext)(Ae.a),
						[n, s] = Object(u.useState)(!1);
					return m.a.createElement("div", {
						className: Object(Se.a)(e.shouldShowModNavColor && "bg-neutral-background border-b border-solid border-neutral-border-weak", ep.a.layout, {
							[ep.a.layoutContainer]: t,
							[ep.a.navColor]: !e.shouldShowModNavColor
						})
					}, m.a.createElement(ap, tp({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(To, null), m.a.createElement(yi, {
						className: ep.a.search
					})), m.a.createElement(op, {
						onAvatarButtonClick: () => {
							s(!0)
						}
					}, m.a.createElement(uc, {
						isAvatarButtonClicked: n,
						className: ep.a.quickLinks
					})))
				},
				cp = e => {
					const t = Object(u.useContext)(Ae.a),
						n = Object(Ee.e)(wr.c);
					return m.a.createElement("div", {
						className: Object(Se.a)(ep.a.layout, ep.a.navColor, {
							[ep.a.layoutContainer]: t
						})
					}, m.a.createElement(ap, tp({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), !n && m.a.createElement(To, null), m.a.createElement("div", {
						className: ep.a.searchContainer
					}, m.a.createElement(yi, {
						className: ep.a.search
					}))), m.a.createElement(op, null, m.a.createElement(Li, null), m.a.createElement(_r, null)))
				};
			var lp = rp(Object(Ee.b)(sp, e => ({
					onReloadFrontpage: () => e(Object(T.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(Ae.a);
					return t = e.isLoggedIn ? ip : cp, m.a.createElement(np, {
						"data-redditstyle": !0,
						className: Object(Se.a)(ep.a.container, e.className, {
							[ep.a.bladeIsOpen]: e.isBladeOpen,
							[ep.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage,
						isLoggedIn: e.isLoggedIn,
						shouldShowModNavColor: e.shouldShowModNavColor
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Hi, {
						className: ep.a.MwebResponsiveHeader
					}))
				}))),
				dp = n("./src/reddit/components/LightboxHeader/index.tsx");
			const up = Object(Dt.a)({
				getComponent: () => Object(le.a)(() => n.e("MatrixChat").then(n.bind(null, "./src/reddit/components/MatrixChat/index.tsx"))).then(e => e.MatrixChat),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var mp = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				pp = (e, t) => {
					let n = `${i.a.accountManagerOrigin}/${e}/`;
					return t && (n = `${n}?dest=${encodeURIComponent(t)}`), n
				};
			const bp = () => e => ({
					...fn.p(e),
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				{
					fbt: hp
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				gp = Object(se.c)({
					isLoggedIn: O.S,
					origin: ae.l,
					isShredditParityEnabled: Qd.a
				});
			class fp extends m.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(Ge.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(bp()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						className: e,
						origin: t,
						isShredditParityEnabled: n
					} = this.props, s = n ? dn.k : dn.t;
					return m.a.createElement(s, {
						className: e,
						href: pp(Je.a.Register, t),
						onClick: this.onClick,
						isFullWidth: !0
					}, hp._("Join Reddit", null, {
						hk: "3pGxYq"
					}))
				}
			}
			var vp = Object(Ee.b)(gp, e => ({
					openRegisterModal: () => {
						e(Object(Ft.k)({
							actionSource: Ft.a.IdCard,
							redirectUrl: Ji.c[Ji.b.Home]
						})), e(Object(te.openRegisterModal)())
					}
				}))(Object(Ze.c)(fp)),
				Op = n("./src/reddit/components/CreateAccountSection/index.m.less"),
				Cp = n.n(Op);
			const {
				fbt: yp
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ep = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: t
					}, m.a.createElement("div", {
						className: Cp.a.divider
					}), m.a.createElement("div", {
						className: Cp.a.createDesc
					}, yp._("Create an account to follow your favorite communities and start taking part in conversations.", null, {
						hk: "z6A2K"
					})), m.a.createElement(vp, {
						className: Cp.a.createButton
					}))
				},
				xp = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				jp = n.n(xp);
			const {
				fbt: _p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pp = Object(se.c)({
				currentPage: Jr
			}), Sp = Object(Ee.b)(Pp, e => ({
				onUnpinSubscriptions: () => e(Object(Ue.j)())
			})), kp = Object(Hn.v)();
			var Np = ze.a.wrapped(kp(Sp(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, e.isLoggedIn && m.a.createElement("div", {
					className: jp.a.title
				}, m.a.createElement("div", {
					className: jp.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(kr.a, {
					name: "close",
					className: jp.a.icon
				}))), m.a.createElement(ko, {
					className: jp.a.withOverflow,
					currentPage: e.currentPage,
					isPinned: !0
				}), !e.isLoggedIn && m.a.createElement(Ep, {
					className: jp.a.createAccountSection
				})))), "Component", jp.a),
				wp = n("./src/reddit/components/Survey/index.tsx"),
				Mp = n("./src/reddit/components/ThemeProvider/index.tsx");
			const Ip = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Tp = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...fn.d(t),
						reason: "primary"
					}
				}),
				Ap = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...fn.d(t),
						reason: "secondary"
					}
				});
			var Rp = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Lp = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Fp = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Dp = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Bp = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Gp = n("./src/reddit/models/Toast/index.ts"),
				Up = n("./src/reddit/selectors/structuredStyles.ts"),
				Hp = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				qp = n.n(Hp);

			function Wp() {
				return (Wp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Vp = e => {
				const t = eo.a;
				switch (e.kind) {
					case Gp.b.Error:
					case Gp.b.AuthError:
					case Gp.b.SuccessEndBroadcast:
						return t.warning;
					case Gp.b.SuccessCommunity:
						return t.op;
					case Gp.b.SuccessCommunityGreen:
					case Gp.b.SuccessMod:
					case Gp.b.SuccessUnlockComment:
						return t.approved;
					case Gp.b.SuccessLockComment:
						return t.reported;
					case Gp.b.EuCookiePolicy:
					case Gp.b.UappBanner:
					case Gp.b.Undo:
					default:
						return t.op
				}
			};
			class zp extends m.a.Component {
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
			const Qp = ze.a.wrapped(zp, "PlainBread", qp.a);
			var Zp = e => m.a.createElement(Qp, Wp({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": Vp(e)
					}
				})),
				Jp = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Kp = n.n(Jp);
			const Xp = ze.a.span("Text", Kp.a);
			var Yp = n("./src/reddit/components/Toaster/index.m.less"),
				$p = n.n(Yp);
			const {
				fbt: eb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), tb = ze.a.wrapped(Fp.a, "AuthErrorToastIcon", $p.a), nb = ze.a.wrapped(dn.l, "AuthErrorToastPrimaryButton", $p.a);
			class sb extends m.a.Component {
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
					}, m.a.createElement(Zp, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(tb, null), m.a.createElement(Xp, null, eb._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(nb, {
						type: "submit"
					}, eb._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var rb = sb,
				ab = n("./src/lib/cookieConsent/index.ts"),
				ob = n("./src/reddit/controls/Link/index.tsx"),
				ib = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				cb = n.n(ib);
			const {
				fbt: lb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), db = ze.a.wrapped(dn.l, "PrimaryButton", cb.a), ub = ze.a.wrapped(Zp, "Bread", cb.a);
			class mb extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(ab.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(ab.b)({
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
					return m.a.createElement("section", null, m.a.createElement(ub, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						},
						className: cb.a.EuCookiePolicyContainer
					}, m.a.createElement("section", {
						className: cb.a.EuCookiePolicyBody
					}, m.a.createElement("div", null, m.a.createElement(Xp, {
						className: cb.a.EuCookiePolicyText
					}, lb._("Reddit and its partners use cookies and similar technologies to provide you with a better experience.", null, {
						hk: "PLhhw"
					})), m.a.createElement(Xp, {
						className: cb.a.EuCookiePolicyText
					}, lb._("By accepting all cookies, you agree to our use of cookies to deliver and maintain our services and site, improve the quality of Reddit, personalize Reddit content and advertising, and measure the effectiveness of advertising.", null, {
						hk: "rCT68"
					})), m.a.createElement(Xp, {
						className: cb.a.EuCookiePolicyText
					}, lb._("By rejecting non-essential cookies, Reddit may still use certain cookies to ensure the proper functionality of our platform.", null, {
						hk: "nao6F"
					}), lb._("For more information, please see our {=Cookie Notice} and our {=Privacy Policy} .", [lb._param("=Cookie Notice", m.a.createElement(ob.a, {
						href: "https://www.reddit.com/policies/cookies",
						target: "_blank"
					}, lb._("Cookie Notice", null, {
						hk: "387ZAi"
					}))), lb._param("=Privacy Policy", m.a.createElement(ob.a, {
						href: "https://www.reddit.com/policies/privacy-policy",
						target: "_blank"
					}, lb._("Privacy Policy", null, {
						hk: "2ddMNC"
					})))], {
						hk: "2Rqln2"
					})))), m.a.createElement("section", {
						className: cb.a.EuCookiePolicyOptions
					}, m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(db, {
						type: "submit"
					}, lb._("Accept all", null, {
						hk: "1tnS6V"
					})))), m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(db, {
						type: "submit"
					}, lb._("Reject non-essential", null, {
						hk: "M79jf"
					})))))))
				}
			}
			var pb, bb = mb;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(pb || (pb = {}));
			var hb = n("./src/reddit/controls/Typography/index.tsx"),
				gb = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				fb = n.n(gb);

			function vb() {
				return (vb = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ob = ze.a.div("Container", fb.a),
				Cb = ze.a.img("SideImage", fb.a),
				yb = ze.a.div("Main", fb.a),
				Eb = ze.a.div("SubTitle", fb.a),
				xb = hb.a,
				jb = ze.a.wrapped(dn.m, "PrimaryLinkButton", fb.a),
				_b = ze.a.wrapped(ml.a, "CloseIcon", fb.a);
			class Pb extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Tp(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Ip(this.props.name))
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
					return m.a.createElement(Ob, {
						key: t,
						style: {
							...r,
							transform: `\n            translateY(${r.y}px)\n            scale(${r.x}, ${r.x})\n          `
						}
					}, m.a.createElement(_b, {
						onClick: this.props.onClose
					}), m.a.createElement(Cb, {
						srcSet: n
					}), m.a.createElement(yb, null, m.a.createElement(Eb, null, a), m.a.createElement(hb.b, null, o), m.a.createElement(xb, null, e), m.a.createElement(jb, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, s.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Sb = Object(Ee.b)(null, e => ({
					onSignup: () => e(Object(te.openRegisterModal)())
				}))(Object(Ze.c)(Pb)),
				kb = `${Nb("subscribe-cap.png")} 1x,\n  ${Nb("subscribe-cap@2x.png")} 2x,`;

			function Nb(e) {
				return `${i.a.assetPath}/img/banner/${e}`
			}
			const wb = 3;
			var Mb = n("./src/lib/permanentCookieOptions.ts");
			const Ib = e => `${e}:1527210000`;
			var Tb = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Ab = n.n(Tb);
			const {
				fbt: Rb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Lb = ze.a.div("Icon", Ab.a), Fb = () => m.a.createElement(Lb, {
				style: {
					backgroundImage: `url(${i.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Db = ze.a.wrapped(dn.l, "PrimaryButton", Ab.a), Bb = ze.a.wrapped(Zp, "Bread", Ab.a);
			class Gb extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), d.a.set(Tn.k, Ib(wb), Object(Mb.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Bb, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Fb, null), m.a.createElement(Xp, null, Rb._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Rb._param("=User Agreement", m.a.createElement(ob.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Rb._("User Agreement", null, {
						hk: "XS57W"
					}))), Rb._param("=Privacy Policy", m.a.createElement(ob.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Rb._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(Db, {
						type: "submit"
					}, Rb._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Ub = Gb;

			function Hb() {
				return (Hb = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const qb = [],
				Wb = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Vb = {
					opacity: .5,
					x: .5,
					y: 50
				},
				zb = {
					opacity: Object(Ve.spring)(0),
					x: Object(Ve.spring)(.6),
					y: Object(Ve.spring)(80, Wb)
				},
				Qb = ze.a.wrapped(Fp.a, "SnooFacepalm", $p.a),
				Zb = ze.a.wrapped(Dp.a, "SnooHappy", $p.a),
				Jb = ze.a.wrapped(Tr.b, "SubredditIcon", $p.a),
				Kb = ze.a.img("CustomIcon", $p.a),
				Xb = ze.a.div("Container", $p.a),
				Yb = ze.a.wrapped(ml.a, "Close", $p.a),
				$b = ze.a.wrapped(Rp.a, "LockIcon", $p.a),
				eh = ze.a.wrapped(Bp.a, "UnlockIcon", $p.a),
				th = ze.a.wrapped(Lp.a, "RemoveIcon", $p.a),
				nh = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Yb, Hb({
					className: "CloseIcon"
				}, e))),
				sh = ze.a.wrapped(Zp, "Bread", $p.a),
				rh = Object(se.c)({
					subredditIcon: Up.b,
					toastSlices: e => e.toaster
				}),
				ah = Object(Ee.b)(rh, e => ({
					dismissToast: t => () => e(Object(Ce.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(Ce.g)(n))
					}
				}));
			class oh extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => ih(e, this.props.toastSlices), this.getWillEnterStyles = () => Vb, this.getWillLeaveStyles = () => zb
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(Ve.TransitionMotion, {
						defaultStyles: qb,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(Xb, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === Gp.b.Custom && void 0 !== t.customToastType) {
							const s = lh[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Gp.b.UappBanner) return m.a.createElement(Ub, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Gp.b.EuCookiePolicy) return m.a.createElement(bb, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(Ip("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(Tp("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Ap("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === Gp.b.AuthError) return m.a.createElement(rb, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === Gp.b.Modal ? dn.l : dn.r,
							r = t.kind === Gp.b.Modal ? dn.o : dn.r;
						return m.a.createElement(sh, {
							className: t.kind === Gp.b.Modal ? $p.a.mModal : void 0,
							"data-testid": "toaster",
							key: e.key,
							kind: t.kind,
							sendEvent: t.name || t.onDisplay ? () => {
								t.name && this.props.sendEvent(Ip(t.name)), t.onDisplay && t.onDisplay()
							} : void 0,
							style: n
						}, m.a.createElement("div", {
							className: $p.a.ContentWrapper
						}, ch(t, this.props.subredditIcon), t.kind === Gp.b.SuccessLockComment && m.a.createElement($b, null), t.kind === Gp.b.SuccessUnlockComment && m.a.createElement(eh, null), m.a.createElement(Xp, null, t.text)), m.a.createElement("div", {
							className: $p.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Tp(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(r, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Ap(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(nh, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const ih = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(Ve.spring)(1),
							x: Object(Ve.spring)(1, Wb),
							y: Object(Ve.spring)(0, Wb)
						}
					}))
				},
				ch = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(Kb, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case Gp.b.Error:
							return m.a.createElement(Qb, null);
						case Gp.b.SuccessEndBroadcast:
							return m.a.createElement(th, null);
						case Gp.b.SuccessAward:
						case Gp.b.SuccessCommunity:
						case Gp.b.SuccessCommunityGreen:
							return m.a.createElement(Zb, null);
						case Gp.b.SuccessMod:
							return m.a.createElement(Jb, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				lh = {
					[Gp.a.subscribeCap]: e => m.a.createElement(Sb, vb({
						name: pb.LoggedOutMaxSubscriptions,
						sideImage: kb,
						title: s.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: s.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var dh = ah(Object(Ze.c)(oh)),
				uh = n("./src/reddit/featureFlags/profileCollections.ts"),
				mh = n("./src/reddit/helpers/trackers/banners.ts"),
				ph = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				bh = n.n(ph);
			var hh = ze.a.div("Wrapper", bh.a),
				gh = n("./src/reddit/components/AlertBanner/index.m.less"),
				fh = n.n(gh);
			const {
				fbt: vh
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Oh = () => m.a.createElement(hh, {
				className: Object(Se.a)(fh.a.wrapper, fh.a.suspended)
			}, m.a.createElement("span", null, vh._("Your account has been permanently suspended from Reddit.", null, {
				hk: "2hzFKt"
			}), " "), vh._("Click {=here} for more info.", [vh._param("=here", m.a.createElement("a", {
				className: fh.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360045734911"
			}, vh._("here", null, {
				hk: "49ZRXB"
			})))], {
				hk: "2jIHMO"
			})), Ch = e => {
				let {
					suspensionDaysLeft: t
				} = e;
				return m.a.createElement(hh, {
					className: Object(Se.a)(fh.a.wrapper, fh.a.suspended)
				}, m.a.createElement("span", null, vh._({
					"*": "Your account has been suspended from Reddit for {number of days} days.",
					_1: "Your account has been suspended from Reddit for 1 day."
				}, [vh._plural(t, "number of days")], {
					hk: "2Bwand"
				}), " "), vh._("Click {=here} for more info.", [vh._param("=here", m.a.createElement("a", {
					className: fh.a.underlineLink,
					href: "https://www.reddithelp.com/hc/en-us/articles/360045308832"
				}, vh._("here", null, {
					hk: "49ZRXB"
				})))], {
					hk: "lV57o"
				}))
			}, yh = () => m.a.createElement(hh, {
				className: Object(Se.a)(fh.a.wrapper, fh.a.fpr)
			}, m.a.createElement("span", null, vh._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: fh.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, vh._("Learn more", null, {
				hk: "1OTc8q"
			}))), Eh = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(hh, {
					className: Object(Se.a)(fh.a.wrapper, fh.a.deprecated)
				}, m.a.createElement("span", null, vh._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [vh._param("update your browser", m.a.createElement(xh, {
					link: t
				}, vh._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, vh._("If you do not update your browser, we suggest you visit {old reddit} .", [vh._param("old reddit", m.a.createElement("a", {
					className: fh.a.underlineLink,
					href: i.a.oldRedditUrl,
					onClick: n
				}, vh._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, xh = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: fh.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class jh extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(mh.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(mh.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n,
						suspensionDaysLeft: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(Eh, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(yh, null) : n ? s || null != s ? m.a.createElement(Ch, {
						suspensionDaysLeft: s
					}) : m.a.createElement(Oh, null) : null
				}
			}
			var _h = Object(Ze.c)(jh);
			const Ph = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				Sh = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				});
			var kh = n("./src/reddit/components/BoostPost/index.ts");
			var Nh = n("./src/reddit/components/OfflineBanner/index.m.less"),
				wh = n.n(Nh);
			const {
				fbt: Mh
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ih = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(Se.a)(e.className, wh.a.banner, {
							[wh.a.online]: e.online,
							[wh.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: wh.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: wh.a.title
					}, e.online ? Mh._("Found the internet!", null, {
						hk: "fMghd"
					}) : Mh._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(kr.a, {
						className: wh.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				Th = n("./src/reddit/components/Upsell/async.ts"),
				Ah = n("./src/reddit/constants/componentSizes.ts"),
				Rh = n("./src/reddit/constants/elementIds.ts"),
				Lh = n("./src/reddit/constants/history.ts"),
				Fh = n("./src/reddit/constants/posts.ts"),
				Dh = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Bh = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				Gh = n("./src/reddit/constants/promo.ts"),
				Uh = n("./src/reddit/contexts/Promo/index.ts");

			function Hh(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case Gh.a.Completed:
						return s === Gh.a.Shown ? new Map(e.set(n, Gh.a.Completed)) : e;
					case Gh.a.Dismissed:
						return s === Gh.a.Shown ? new Map(e.set(n, Gh.a.Dismissed)) : e;
					case Gh.a.Shown:
						return s ? e : new Map(e.set(n, Gh.a.Shown));
					default:
						throw new Error
				}
			}
			var qh = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(Hh, new Map), r = u.useCallback(e => s({
						type: Gh.a.Completed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: Gh.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), o = u.useCallback(e => s({
						type: Gh.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: r,
						dismissPromo: a,
						promos: n,
						showPromo: o
					}), [r, a, n, o]);
					return u.createElement(Uh.a.Provider, {
						value: i
					}, t)
				},
				Wh = n("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				Vh = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				zh = n("./src/reddit/helpers/postCollection.ts"),
				Qh = n("./src/reddit/models/Theme/index.ts"),
				Zh = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Jh = n("./src/reddit/selectors/experiments/survey.ts"),
				Kh = n("./src/reddit/selectors/notificationBanner.ts"),
				Xh = n("./src/reddit/selectors/onboarding.ts"),
				Yh = n("./src/reddit/selectors/posts.ts"),
				$h = n("./src/reddit/components/AppRouter/index.m.less"),
				eg = n.n($h);

			function tg() {
				return (tg = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ng = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						location: s,
						...r
					} = e;
					const a = Object(u.useMemo)(() => Object(Wh.a)(s.search), [s.search]);
					return m.a.createElement("div", tg({
						className: Object(Se.a)(eg.a.main, {
							[eg.a.mShowingPaddedPinnedDescriptions]: n,
							[eg.a.removeTopPadding]: a
						}, t),
						id: Rh.a
					}, r))
				},
				sg = Object(Re.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...r
					} = e;
					const a = Object(Ye.a)({
						theme: s,
						...r
					});
					return m.a.createElement("div", tg({
						className: Object(Se.a)(eg.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Qh.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Ln.c)(n)}px`
						}
					}, r))
				}),
				rg = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const r = Object(u.useContext)(Ae.a);
					return m.a.createElement("div", tg({
						className: Object(Se.a)(eg.a.lightboxHeaderWrapper, t, {
							[eg.a.lightboxHeaderWrapperExp]: r
						})
					}, s, {
						ref: n
					}))
				},
				ag = Object(Kh.a)(mp.a.EmailCollectionBannerId),
				og = Object(Ee.b)(() => Object(se.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object($e.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: O.z,
					isBlockingInterstitialEnabled: Zh.b,
					isBlockingInterstitialV2Enabled: Zh.c,
					isLoggedIn: O.S,
					isRedditChatEnabled: e => !1 === Object(Yc.e)(e),
					isNpsSurveyEnabled: Jh.d,
					isOnboardingQueryParamEnabled: Xh.c,
					isSubscriptionsPinned: wr.c,
					isSuccessfulSurveyEnabled: Jh.f,
					isSuspended: O.Z,
					isFPR: O.Q,
					posts: Yh.I,
					profileCollectionsEnabled: uh.a,
					showEmailCollectionBanner: e => !Object(Hn.P)(e.platform.currentPage) && ag(e),
					signUpModalIsOpen: Object(Ac.c)(Jt.a.REGISTER_MODAL_ID),
					suspensionDaysLeft: O.Ab
				}), e => ({
					onClickOutsideOverlay: t => e(Object(p.b)(t)),
					onPinSubscriptions: () => e(Object(Ue.i)()),
					onPostDismissTrigger: () => e(Object(ve.l)()),
					onSuccessfulSignupTrigger: () => e(Object(ve.h)()),
					onUnpinSubscriptions: () => e(Object(Ue.j)())
				})),
				ig = (e, t) => !(!e.state || !e.state[Lh.b.IsOverlay] || t === e);
			class cg extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = Te()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Ah.k ? this.props.onUnpinSubscriptions() : !this.props.isLoggedIn && !this.props.isSubscriptionsPinned && e >= Ah.k && this.props.onPinSubscriptions()
					}, k.M), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(Hn.y)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								r = `${k.Ob.Post}_${s}`,
								a = t && s && t[r],
								o = a && a.belongsTo.type === Fh.a.PROFILE;
							return !(!a || !Object(zh.a)(a) || o && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object($e.c)(e.frontpageSignupVariant),
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
					} = this.props, r = n.state && n.state[Lh.b.IsOverlay], a = Object(Be.a)(this.previousLocation, e.location);
					t && r && a && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const o = Object(Be.a)(this.previousLocation, this.props.location),
						i = r ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === k.Tb.INDEX || t.name === k.Tb.SUBREDDIT && n.subredditName === Ji.b.Popular), r = Object($e.c)(this.props.frontpageSignupVariant), a = Object($e.c)(e.frontpageSignupVariant);
						s || r || !a ? r && !a && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || r || a || o || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), (this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && this.props.signUpModalIsOpen) return;
					const c = ig(e.location, this.previousLocation);
					Fe.a.write(() => {
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
						frontpageSignupVariant: n,
						hasInvalidSession: r,
						isFPR: a,
						isLoggedIn: o,
						isRedditChatEnabled: i,
						isSubscriptionsPinned: c,
						isSuspended: l,
						location: d,
						onClickOutsideOverlay: p,
						routes: b,
						showEmailCollectionBanner: h,
						suspensionDaysLeft: g
					} = this.props, {
						isSignupUpsellDisplayed: f,
						isSignupUpsellHidden: v
					} = this.state, O = this.context, C = ig(d, this.previousLocation);
					d.state && d.state[Lh.b.IsOverlay] && !C ? d.state[Lh.b.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[Lh.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[Lh.b.CloseLocation] && this.previousLocation.state[Lh.b.CloseLocation] === d.state[Lh.b.CloseLocation] ? d.state[Lh.b.CloseLocation] = {
						...this.previousLocation,
						state: Me()(this.previousLocation.state, Lh.b.CloseLocation)
					} : d.state[Lh.b.CloseLocation] = this.previousLocation);
					const y = Object(Be.a)(this.previousLocation, d),
						E = C || y ? this.previousLocation : d,
						x = C || y ? this.previousPage : t,
						j = !(!(x && x.meta && x.meta.name === k.Tb.SEARCH_RESULTS && x && x.queryParams) || x.queryParams[ti.x]),
						_ = !(!x || !x.meta || x.meta.name !== k.Tb.MODERATION_PAGES),
						P = Object(Hn.y)(x),
						S = this.getIsPostCollection(),
						N = f && !v,
						w = e.showBanner;
					if (r) return s.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					});
					const M = m.a.createElement(dg, {
						browserInfo: O,
						frontpageSignupVariant: n,
						isCommentsPage: P,
						isInline: N,
						isLoggedIn: o,
						isSubscriptionsPinned: c,
						location: E,
						overlayIsOpen: C,
						page: x,
						routes: b,
						showEmailCollectionBanner: h,
						showFPR: a,
						showOffline: w,
						showSuspended: l
					});
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(kh.b, null, m.a.createElement(Hn.a.Provider, {
						value: x
					}, m.a.createElement(kh.c, null, m.a.createElement(Ao.c, {
						isOverlayOpen: C
					}, m.a.createElement(Mp.a, {
						forceRedditTheme: j
					}, f && m.a.createElement(Rt, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(lg, {
						browserInfo: O,
						connection: e,
						isFPR: a,
						isInline: N,
						isSuspended: l,
						showOffline: w,
						suspensionDaysLeft: g,
						location: E
					})), m.a.createElement(Dh.a.Provider, {
						value: !1
					}, m.a.createElement(Mp.a, {
						forceRedditTheme: j || _,
						isCommentsPage: P
					}, m.a.createElement(qh, null, M, m.a.createElement(Th.b, null), m.a.createElement(Th.a, null))))))), m.a.createElement(Hn.a.Provider, {
						value: t
					}, C && m.a.createElement(Dh.a.Provider, {
						value: !0
					}, m.a.createElement(Mp.a, {
						isOverlay: !0
					}, m.a.createElement(ug, {
						browserInfo: O,
						isPostCollection: S,
						location: d,
						onClickOutsideOverlay: p,
						page: t,
						routes: b,
						showEmailCollectionBanner: h,
						showFPR: a,
						showOffline: w,
						showSuspended: l
					}))), m.a.createElement(Mp.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(dh, null), m.a.createElement(wp.a, null), h && m.a.createElement(He.a, null), m.a.createElement(Bn, null), m.a.createElement(ir, null), i && m.a.createElement(up, null))))))
				}
			}
			cg.contextType = Le.a;
			const lg = Object(Ze.c)(e => {
					const t = Object(Hn.ib)(),
						n = Object(Bh.fb)(t),
						s = Object(u.useContext)(Ae.a),
						r = Object(u.useMemo)(() => Object(Wh.a)(e.location.search), [e.location.search]),
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
					return m.a.createElement(u.Fragment, null, m.a.createElement(_h, b), n && !r && m.a.createElement(lp, {
						className: Object(Se.a)(eg.a.header, Ph(eg.a, b), {
							"relative w-100": c
						}, "flex-grow-0 flex-shrink-0 top-0 left-0 right-0 fixed z-[80]")
					}), m.a.createElement(Ih, {
						className: Object(Se.a)(eg.a.offlineBanner, Ph(eg.a, b)),
						online: o.online,
						showBanner: o.showBanner
					}))
				}),
				dg = Object(Ze.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = Me()(e, "key"),
							s = Me()(t, "key");
						return Ne()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = Me()(e, ["key", "locationState"]),
								s = Me()(t, ["key", "locationState"]);
							return Ne()(n, s)
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
						return m.a.createElement(ng, {
							"aria-hidden": s,
							className: Object(Se.a)(Ph(eg.a, this.props), {
								[eg.a.withUpsell]: !!e,
								[eg.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: a,
							location: t
						}, a && m.a.createElement(Np, {
							className: Object(Se.a)(eg.a.pinnedSubscriptions, {
								...Ph(eg.a, this.props)
							}),
							isLoggedIn: this.props.isLoggedIn,
							"data-redditstyle": !0
						}), m.a.createElement(xe.f, {
							location: t
						}, n), o && m.a.createElement("div", {
							className: Object(Se.a)(eg.a.bottomSpacer, Sh(eg.a, this.props))
						}))
					}
				});
			class ug extends m.a.Component {
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
						if (this.mouseDownInWrapper && Object(Ge.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[Lh.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Vh.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(De.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Vh.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, r = !(!t || !t.meta || t.meta.name === k.Tb.SUBREDDIT_CREATION), a = e;
					return m.a.createElement(sg, {
						className: Object(Se.a)(Ph(eg.a, this.props), {
							[eg.a.mIsCommentsLightbox]: r,
							[eg.a.mIsLargeCommentsLightbox]: a
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(Se.a)(eg.a.overlayWrapper, Ph(eg.a, this.props))
					}, m.a.createElement("div", {
						className: Object(Se.a)(eg.a.overlayScrollContainer, {
							[eg.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Rh.e,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, r && m.a.createElement(rg, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(Se.a)(Ph(eg.a, this.props), {
							[eg.a.mIsLargeCommentsLightbox]: a
						}),
						tabIndex: -1
					}, m.a.createElement(dp.a, {
						page: t
					})), m.a.createElement(xe.f, null, n), m.a.createElement("div", {
						className: Object(Se.a)(eg.a.bottomSpacer, Sh(eg.a, this.props))
					}))))
				}
			}
			var mg = og(Object(Ze.c)(cg)),
				pg = n("./src/reddit/contexts/User/index.tsx");

			function bg(e) {
				return m.a.createElement(pg.b, null, e.children)
			}
			var hg = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				gg = n("./src/reddit/constants/shortcuts.ts"),
				fg = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				vg = n.n(fg);
			var Og = e => {
				let {
					children: t
				} = e;
				return m.a.createElement("div", {
					className: vg.a.shortcutDiv,
					id: gg.b,
					tabIndex: -1
				}, m.a.Children.only(t))
			};
			let Cg = [];
			const yg = "https://w3-reporting.reddit.com/policy";
			let Eg = 1;
			const xg = !1;
			const jg = xg ? Promise.resolve() : async function() {
				if (xg) return;
				const e = await fetch(yg, {
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
					e.length > 0 && (Cg = e)
				} catch {}
				if (n) try {
					const e = JSON.parse(n).success_fraction;
					"number" == typeof e && (Eg = e)
				} catch {}
			}();

			function _g(e, t, n) {
				let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "gauge";
				xg ? console.error("w3-reporting is client-side only") : Pg.push({
					name: e,
					value: t,
					type: s,
					labels: n,
					createdAt: Date.now()
				})
			}
			let Pg = [];
			async function Sg(e) {
				if (0 === e.length || 0 === Cg.length) return;
				if (Math.random() > Eg) return;
				await jg;
				const t = e.map(wg).filter(e => e.age < 3e5);
				try {
					const e = await fetch(Ng(), {
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
				Sg([...Pg]), Pg = []
			}, 5e3), xg || document.addEventListener("visibilitychange", () => {
				"hidden" === document.visibilityState && (Sg([...Pg]), Pg = [])
			});
			let kg = -1;
			const Ng = () => (kg = (kg + 1) % Cg.length, Cg[kg]);

			function wg(e) {
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

			function Mg() {
				const e = Object(Ee.e)(e => {
					const t = Object(Mn.b)(e);
					return t && Object(fn.w)(t) || "unknown"
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
							_g("desktop2x_perf_cumulative_layout_shift", t.value, {
								page_type: e
							}, "histogram")
						}), s(t => {
							_g("desktop2x_perf_first_input_delay_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}), r(t => {
							_g("desktop2x_perf_interaction_next_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), a(t => {
							_g("desktop2x_perf_largest_contentful_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), o(t => {
							_g("desktop2x_perf_time_to_first_byte_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						})
					})()
				}, []), null
			}
			var Ig = n("./src/reddit/components/Header/Sparse.tsx"),
				Tg = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Ag = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Rg = n.n(Ag);
			const {
				fbt: Lg
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Fg = Object(se.c)({
				showError: An.d.showVerboseErrors
			}), Dg = Object(Ee.b)(Fg)(e => {
				const t = Object(u.useContext)(Ae.a);
				return m.a.createElement(Dh.a.Provider, {
					value: !1
				}, m.a.createElement(Mp.b, {
					subredditName: ""
				}, m.a.createElement("div", null, m.a.createElement(Ig.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), m.a.createElement("div", {
					className: Rg.a.container
				}, m.a.createElement("div", {
					className: Rg.a.mainContent
				}, m.a.createElement(Tg.a, {
					className: Rg.a.dizzySnoo
				}), m.a.createElement("h3", {
					className: Rg.a.title
				}, Lg._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), m.a.createElement("div", {
					className: Rg.a.subTitle
				}, Lg._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), m.a.createElement(dn.l, {
					onClick: () => window.location.reload(!0)
				}, Lg._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: Rg.a.subTitle
				}, e.error.message), m.a.createElement("pre", null, m.a.createElement("code", null, e.error.stack)))), m.a.createElement("div", {
					className: Object(Se.a)(Rg.a.topImageContainer, {
						[Rg.a.topImageContainerExp]: t
					})
				}, m.a.createElement("img", {
					className: Rg.a.image,
					src: `${i.a.assetPath}/img/error/star_pattern.png`
				})), m.a.createElement("div", {
					className: Rg.a.bottomImageContainer
				}, m.a.createElement("img", {
					className: Rg.a.image,
					src: `${i.a.assetPath}/img/error/half_planet.png`
				}))))))
			});

			function Bg() {
				return (Bg = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Gg = Object(se.c)({
					isNavbarLikeMwebEnabled: Hl.a,
					isNightmode: O.fb,
					theme: e => e.themes.current
				}),
				Ug = Object(Ee.b)(Gg, {})(e => {
					let {
						children: t,
						theme: n,
						isNightmode: s,
						isNavbarLikeMwebEnabled: r
					} = e;
					const a = Object(Ye.a)({
						theme: n
					});
					return Object(u.useEffect)(() => {
						s ? (document.documentElement.classList.remove("theme-light"), document.documentElement.classList.add("theme-dark")) : (document.documentElement.classList.remove("theme-dark"), document.documentElement.classList.add("theme-light"))
					}, [s]), m.a.createElement(Ae.a.Provider, {
						value: r
					}, m.a.createElement("div", {
						className: Object(Se.a)(_e.a.container, {
							[_e.a.containerExp]: r
						}, "theme-beta"),
						style: {
							"--background": a.body,
							"--canvas": a.canvas
						}
					}, t))
				});

			function Hg(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return m.a.createElement(Ze.a, null, m.a.createElement(Ug, null, m.a.createElement(bg, null, m.a.createElement(Pe.a, null), m.a.createElement(hg.a, null), m.a.createElement(Og, null, m.a.createElement(t, null, m.a.createElement(xe.d, {
						component: qg(n)
					}))), m.a.createElement(Mg, null))))
				}
				return m.a.createElement(Dg, {
					error: e.error
				})
			}
			const qg = e => t => m.a.createElement(mg, Bg({
				routes: e
			}, t));
			var Wg = n("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.tsx");
			const Vg = 1e3;
			class zg extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = Te()(() => Object(Rn.Lb)(this.props.storageKey, this.props.value), Vg)
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
			zg.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Qg = Object(se.a)(O.S, e => ({
				storageKey: ta.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var Zg = Object(Ee.b)(Qg)(zg);
			var Jg = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(Zg, null)),
				Kg = n("./src/reddit/constants/headers.ts"),
				Xg = n("./src/reddit/constants/jsapiEvents.ts"),
				Yg = n("./src/reddit/constants/screenWidths.ts"),
				$g = n("./src/reddit/contexts/AdminEvents.ts"),
				ef = n("./src/reddit/contexts/ApiContext.tsx"),
				tf = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				nf = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const sf = () => e => t => e(t);
			var rf = n("./src/lib/safeBadgeUpdate.ts");

			function af(e) {
				const t = Object(vm.h)(e);
				Object(rf.a)(t)
			}
			var of = "undefined" != typeof document ? e => t => n => {
				const s = t(n);
				return n.type !== nf.b && n.type !== nf.d || af(e.getState()), s
			} : sf, cf = n("./node_modules/brcast/dist/brcast.es.js"), lf = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var df = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(cf.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(lf.b)(s) || Object(O.P)(s) || Object(O.O)(s)) && (e = !0, Object(U.e)(t)), s => r => {
								const a = s(r),
									o = n.getState();
								if (!Object(lf.b)(o)) {
									const n = Object(O.P)(o) || Object(O.O)(o);
									e && !n ? (e = !1, Object(U.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(U.e)(t), e = !0)
								}
								return a
							}
						}
					}
				} : () => ({
					broadcaster: Object(cf.a)([]),
					middleware: () => e => t => e(t)
				}),
				uf = n("./node_modules/lodash/debounce.js"),
				mf = n.n(uf),
				pf = n("./src/lib/domUtils/index.ts"),
				bf = n("./src/reddit/actions/adsSignals.ts");
			const hf = 30 * k.pb;
			let gf = Date.now();
			const ff = () => {
					gf = Date.now()
				},
				vf = !!Object(pf.f)() && {
					passive: !0
				};
			window.addEventListener("click", ff, !1), window.addEventListener("wheel", mf()(ff, 250), vf), window.addEventListener("mousemove", mf()(ff, 250), vf), window.addEventListener("keydown", mf()(ff, 250), vf);
			var Of = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - gf >= hf ? (e.dispatch(fe.h()), e.dispatch(bf.b()), ff()) : ff()
					})), e => t => e(t)
				},
				Cf = n("./src/reddit/constants/preferences.ts"),
				yf = n("./src/reddit/helpers/cookies/index.ts");
			const Ef = new Set([sl.g, sl.i, Oe.b, sl.d, Ue.d, Ue.e, sl.q]);
			var xf = e => t => n => {
					const s = t(n);
					if (Ef.has(n.type)) {
						const t = e.getState().user,
							n = Bo()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", Cf.b, Cf.c]);
						Object(yf.a)({
							prefs: n
						})
					}
					return s
				},
				jf = n("./src/reddit/actions/tabBadging.ts"),
				_f = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Pf = n("./src/reddit/selectors/removedPosts.ts"),
				Sf = n("./src/reddit/models/Subreddit/index.ts");
			const kf = (e, t) => ((e, t) => {
					var n, s, r, a;
					const o = "subreddit" === (null === (n = null == t ? void 0 : t.belongsTo) || void 0 === n ? void 0 : n.type) ? null === (s = null == t ? void 0 : t.belongsTo) || void 0 === s ? void 0 : s.id : null;
					if (!o) return !1;
					const i = null === (a = null === (r = e.subreddits) || void 0 === r ? void 0 : r.models) || void 0 === a ? void 0 : a[o];
					return !!i && ((null == i ? void 0 : i.type) !== Sf.g.Private && (null == i || !i.isQuarantined))
				})(e, t) && Object(Pf.b)(e) && (e => !!(e && e >= 5))(null == t ? void 0 : t.numComments) && (e => {
					return e > new Date(2016, 0, 1).getTime()
				})(t.created),
				Nf = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				wf = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(Mn.r)(e), r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, a = Nf.has(r), o = Object(Hn.m)(e, {
						pageLayer: n
					}), i = !(!o || !o.hideFromRobots), c = Mf(e), l = s === k.Tb.COMMENTS || s === k.Tb.COLLECTION_COMMENTS, d = !(!n || !n.urlParams.partialCommentId), u = s === k.Tb.SEARCH_RESULTS || l && d, m = Object(Pf.d)(e) && !(e => {
						var t, n, s;
						const {
							currentPage: r
						} = e.platform;
						if (!Object(Pf.d)(e)) return !1;
						const a = null === (t = null == r ? void 0 : r.urlParams) || void 0 === t ? void 0 : t.partialPostId,
							o = a && Object(Z.y)(a),
							i = o && (null === (s = null === (n = e.posts) || void 0 === n ? void 0 : n.models) || void 0 === s ? void 0 : s[o]);
						return !!i && kf(e, i)
					})(e) || u;
					return i || a || c || m ? u ? "noindex" : "noindex,nofollow" : null
				},
				Mf = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(O.h)(e, s);
						n = !!Object(_f.a)(t, !1, s)
					}
					return n
				};
			var If = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const Tf = "theme-color",
				Af = `meta[name="${Tf}"]`;

			function Rf(e) {
				return e ? If.b.body : If.a.body
			}
			var Lf = "undefined" != typeof document ? e => t => n => {
				const s = t(n);
				if (n.type === be.g) {
					const t = e.getState(),
						s = Object(O.R)(t),
						{
							meta: r
						} = n.payload;
					s ? ((e, t) => {
						const n = Object(vm.j)(e);
						Object(jf.c)(n, t)
					})(t, r.title) : Fe.a.write(() => {
						document.title = r.title, ((e, t) => {
							if (t.head) {
								let n = t.querySelector("meta[name='robots']");
								const s = wf(e),
									{
										head: r
									} = t;
								s ? (n || ((n = t.createElement("meta")).name = "robots", r.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : r.removeChild && r.removeChild(n))
							}
						})(t, document)
					})
				} else if (n.type === sl.i) {
					! function(e) {
						Fe.a.write(() => {
							const t = document.head.querySelector(Af);
							if (t) {
								const n = Object(O.fb)(e);
								t.content = Rf(n)
							}
						})
					}(e.getState())
				}
				return s
			} : sf;

			function Ff(e) {
				return Object(J.f)(e) && function(e) {
					return Object.values(e.posts.models).some(t => void 0 === Object(Yc.a)(e, t.id))
				}(e)
			}
			const Df = (e => t => n => s => {
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
					Ff(e.getState()) && e.dispatch(X)
				}
			}]);
			var Bf = n("./src/reddit/helpers/survey/index.ts");
			var Gf = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Bf.a).filter(t => t === e).length)(t.type) && Object(Rn.Z)(Bf.a[t.type]), e(t)) : sf;
			const Uf = 5 * k.pb;
			var Hf = e => {
					const t = Te()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(fe.g())
					}, Uf);
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
					return o.user.session && a(o.user.session), window.addEventListener("focus", r), window.addEventListener("touchend", r), document.body.addEventListener("mouseenter", r), e => t => (t.type !== fe.a && t.type !== fe.b && t.type !== fe.c && t.type !== fe.e || a(t.payload), t.type === fe.d && (clearTimeout(n), n = null), e(t))
				},
				qf = n("./src/reddit/singleton/tracing/index.ts");
			var Wf = e => e => t => {
					const n = () => e(t);
					return qf.b.isEnabled ? qf.b.recordLocalSpan(t.type, n) : e(t)
				},
				Vf = n("./src/reddit/actions/frontpage/constants.ts"),
				zf = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				Qf = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Zf = n("./src/reddit/actions/pages/profilePosts.ts"),
				Jf = n("./src/reddit/actions/pages/search/index.ts"),
				Kf = n("./src/reddit/actions/pages/subreddit/index.ts"),
				Xf = n("./src/reddit/actions/tracking.ts"),
				Yf = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				$f = n("./src/reddit/helpers/history/index.ts"),
				ev = n("./src/reddit/helpers/trackers/commentList.ts"),
				tv = n("./src/reddit/helpers/trackers/postList.ts"),
				nv = n("./src/reddit/helpers/routeKey/index.ts");
			var sv = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(Xf.c({
							routeKey: t
						}))
					};
					if (n.type === be.b) {
						const s = e.getState(),
							r = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(Qr.I)(s, r) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						o.trigger("pageview", {
							...Bo()(n.payload.location, "pathname", "search", "hash"),
							subreddit: r,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(nv.b)(c, s, Object(Yf.a)(s));
							if (e && G.c.has(e)) {
								const t = G.c.end(e);
								!Object(Mn.i)(s) && Object($f.b)(Lh.b.IsOverlay) || Object(oi.j)(c, s, q.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(Yf.a)(s, l),
							u = Object(nv.b)(l, s, d);
						if (!u) return t(n);
						G.c.start(u)
					}
					const r = t(n);
					switch (n.type) {
						case Vf.c:
						case Qf.b:
						case Qf.e:
						case Zf.PROFILE_POSTS_LOADED:
						case zf.e:
						case Kf.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case Jf.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case Vf.g:
						case qa.i:
						case Zf.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: r
							} = n.payload;
							s(t);
							const a = e.getState();
							if (r.length) break;
							if (void 0 === a.listings.postOrder.endMarkers[t]) break;
							tv.l(a, t);
							break
						}
						case zf.b: {
							const {
								key: t,
								commentIds: r
							} = n.payload;
							if (s(t), r.length) break;
							const a = e.getState();
							if (void 0 === a.profileCommentsPage.endMarkers[t]) break;
							ev.a(a, t);
							break
						}
						case ge.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return r
				},
				rv = n("./src/reddit/helpers/datadome.ts"),
				av = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				ov = n("./src/reddit/helpers/trackers/global.ts");
			let iv = null;
			const cv = () => {
				iv && window.clearTimeout(iv), iv = null
			};
			var lv = e => {
					iv = window.setTimeout(() => {
						cv(), Object(G.a)(Object(ov.e)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", cv)
				},
				dv = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				uv = n("./src/reddit/actions/connection/constants.ts");
			const mv = Object(h.a)(uv.b),
				pv = Object(h.a)(uv.a),
				bv = Object(h.a)(uv.c);
			var hv = n("./src/reddit/actions/meta.ts");
			const gv = (e, t) => Object(G.a)({
					...fn.p(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(fn.d)(e, {
						type: t
					})
				}),
				fv = "(display-mode: minimal-ui)";
			const vv = 3 * k.Xb;

			function Ov(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(fv).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(hv.i)());
				const t = window.matchMedia(fv);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(hv.i)()) : e.dispatch(Object(hv.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						af(t)
					}, 1e3), gv(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(mv()), setTimeout(() => e.dispatch(bv()), vv)
				}), window.addEventListener("offline", () => e.dispatch(pv()))
			}
			const Cv = (e, t) => {
				if (!e) return;
				const n = (d.a.get(Tn.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						r = {
							name: Tn.g,
							value: s,
							cookieOptions: Object(Mb.a)(),
							cookieContext: t
						};
					Object(ab.c)(r)
				}
			};
			var yv = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ev = n("./src/reddit/reducers/index.ts");
			var xv = n("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				jv = n("./src/reddit/selectors/experiments/index.ts"),
				_v = n("./src/reddit/selectors/experiments/utils.ts");
			const Pv = e => !!Object(_v.a)((e => Object(cc.c)(e, {
					experimentEligibilitySelector: jv.f,
					experimentName: Un.Oc
				}))(e)),
				Sv = {
					displayDelay: 15,
					displayOnRoutes: [k.Tb.SUBREDDIT, k.Tb.COMMENTS],
					experimentName: Un.me,
					experimentVariant: Un.re.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				kv = e => {
					const {
						base_url: t
					} = Object(fn.cb)(e), n = Object(Mn.b)(e), s = n && n.urlParams.partialPostId, r = n && n.urlParams.subredditName;
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
				Nv = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(Sv, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(Sv)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(Sv, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(Sv, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(cc.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: cc.a
							}) === s
						})(Sv, e)) return {
						displayDelay: Sv.displayDelay,
						externalVars: kv(e)
					}
				};
			var wv = n("./src/reddit/singleton/EventSystem.ts"),
				Mv = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				Iv = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				Tv = n("./src/reddit/reducers/features/categories/index.ts"),
				Av = n("./src/lib/sentry/index.ts");
			const Rv = () => window.matchMedia("(prefers-color-scheme: dark)").matches,
				Lv = (e, t) => {
					const n = e();
					if ((e => Object(O.fb)(e) !== Rv())(n) && (e => {
							!Object(O.S)(e) && Object(Ha.a)(e, {
								rate: 1
							}) && Object(G.a)({
								...fn.p(e),
								source: "global",
								noun: "theme_os_mismatch",
								action: "fail"
							})
						})(n), !Object(Qd.a)(n)) return;
					const s = Rv();
					s !== Object(O.fb)(n) && t(Object(sl.y)(s)), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", n => {
						n.matches !== Object(O.fb)(e()) && t(Object(sl.y)(n.matches))
					})
				};
			var Fv = n("./src/reddit/actions/global/constants.ts");
			Object(ec.a)({
				features: {
					categories: Tv.a
				}
			});
			const Dv = Object(h.a)(Fv.a),
				Bv = /^\/account\/magic_link\/landing\/[^\/]+\/?$/,
				Gv = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return Bv.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(te.openD2xOnboardingModal)())
				};
			var Uv = n("./src/reddit/actions/notificationsInbox/index.ts"),
				Hv = n("./src/reddit/actions/onboarding/index.ts"),
				qv = n("./src/reddit/constants/countrySites.ts");
			const Wv = qv.b ? `${qv.a}/${qv.b}` : `${qv.a}`,
				Vv = (e, t) => {
					return !!Object(ia.e)(e) && !(t && !Object(ia.d)(t))
				},
				zv = e => e.startsWith("/r/") ? e.replace("/r/", `/${Wv}/r/`) : e;
			var Qv = n("./src/reddit/selectors/experiments/countrySites.ts");
			var Zv = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts");
			Object(a.e)(a.b.EntryPointStart);
			const Jv = Object(D.a)({
					actionDispatchers: {
						loidReceived: ye.q,
						sessionTrackerReceived: ye.x
					},
					authHeaders: {
						[Kg.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						loidReceived: ye.b,
						sessionTrackerReceived: ye.j,
						userAuthenticated: fe.c,
						userLoggedOut: fe.d,
						userReauthenticated: fe.e,
						headersReceived: W.a
					},
					onBeforeRequestFactory: dv.a,
					statsAppName: k.n.Redesign
				}),
				Kv = Object(B.a)(Jv.apiContext),
				Xv = Object(B.a)(Jv.apiContext, i.a.gqlRealtimeUrl),
				Yv = Object(B.a)(Jv.apiContext, i.a.gqlRealtime2Url),
				$v = df();
			let eO;
			Object(I.a)({
				reducerMap: Ev.a,
				routes: fm,
				apiContext: Jv.apiContext,
				gqlContext: Kv.gqlContext,
				gqlRealtime2Context: Yv.gqlContext,
				appFactory: (e, t) => m.a.createElement($g.a.Provider, {
					value: $v.broadcaster
				}, m.a.createElement(ef.a.Provider, {
					value: {
						apiContext: Jv.apiContext,
						gqlContext: Kv.gqlContext,
						gqlRealtime2Context: Yv.gqlContext
					}
				}, m.a.createElement(tf.b, null, m.a.createElement(Hg, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(Jg, null)))),
				appName: k.n.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const n = eO;
						if (!n) return;
						n.dispatch(Object(be.m)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(be.l)())
							}
						}))
					}
				}),
				customMiddleware: [_.a.withExtraArgument({
					routes: fm,
					apiContext: Jv.apiContext,
					gqlContext: Kv.gqlContext,
					gqlRealtimeContext: Xv.gqlContext,
					gqlRealtime2Context: Yv.gqlContext
				}), $v.middleware, Of, Jv.middleware, Kv.middleware, Yv.middleware, Hf, xf, Df, Wf, sv, Lf, Gf, Dd.a, of , e => t => n => {
					let s, r;
					if (!Object(Qv.b)(e.getState()) || !n.payload) return t(n);
					r = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const a = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!Vv(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.belongsTo.id,
									t = Object(ia.d)(e);
								(n || t) && (r.permalink = r.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${Wv}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, r)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!Vv(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.subredditId,
									t = Object(ia.d)(e);
								(n || t) && (r.permalink = zv(r.permalink))
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
					if (!Object(Qv.b)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === g.e ? n.payload = ((e, t) => {
							if (!Vv(e, t.name)) return t;
							const n = Object(ia.d)(t.id);
							if (t.name || n) {
								const e = zv(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!Vv(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(ia.d)(s.id),
									r = Object(ia.d)(s.name);
								if (e || r) {
									const e = zv(s.url),
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
					loading: m.a.createElement(yv.a, {
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
						e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || s.dispatch(Object(ce.j)({
							height: e.data.height || 0,
							isDeleted: e.data.isDeleted || !1,
							postId: `t3_${e.data.id36}`
						}))
					}), Ov(s);
					const a = s.getState();
					s.dispatch(Object(W.b)({
							headers: {
								[r.a]: "1"
							}
						})), Object(U.d)("enabled" === Object(cc.c)(s.getState(), {
							experimentEligibilitySelector: cc.a,
							experimentName: Un.mg,
							expEventOverride: !1
						})), Object(U.c)("enabled" === Object(cc.c)(s.getState(), {
							experimentEligibilitySelector: cc.a,
							experimentName: Un.og
						})), Object(U.h)("enabled" === Object(cc.c)(s.getState(), {
							experimentEligibilitySelector: cc.a,
							experimentName: Un.ng
						})), Object(U.f)((e => Object(cc.c)(e, {
							experimentEligibilitySelector: cc.a,
							experimentName: Un.Db
						}) === Un.id.Enabled)(a)), Object(U.g)(Kv.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(ov.a)("tab_closed")(e),
								n = H.g(t),
								r = Object(Mv.a)(n),
								a = Object(Iv.b)(r);
							Object(F.b)("sendV2EventsData", {
								data: r,
								headers: a
							})
						}),
						function(e, t) {
							const n = String(e.split("/")[1]).toLowerCase(),
								s = "r" === n && Object(Wh.a)(t);
							return "framedgild" === n || "framedmodal" === n || s
						}(t.location.pathname, t.location.search) || s.dispatch(Object(be.i)());
					const o = Object(O.fb)(s.getState());
					s.dispatch(Object(Oe.c)({
						nightmode: o
					}));
					const l = (e => e.tracing.traceId)(s.getState());
					if (l && (e => Object(cc.c)(e, {
							experimentEligibilitySelector: cc.a,
							experimentName: Un.G
						}) === Un.R.Enabled)(s.getState())) {
						qf.b.enableTracing(!0);
						const e = qf.b.createTraceFromId(l);
						qf.b.setParent(e)
					}
					s.dispatch(Object(be.j)(n));
					t.listen((e, t) => {
						const r = Object(A.a)(Object(c.e)(e), n, s.getState());
						s.dispatch(Object(be.k)(e, t, r))
					});
					const {
						currentPage: d
					} = a.platform;
					if (d) {
						const e = [ti.k];
						if (Object(Mn.j)(a) && e.push(ti.f), e.length > 0) {
							const t = Object(w.a)(d.url, e);
							t !== d.url && s.dispatch(Object(p.c)(t))
						}
					}
					return qn.a.initialize(a), {
						localStorageData: Object(Rn.H)()
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
					eO = l;
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
							i = Object(Qr.I)(n, o) || "";
						if (Cv(i, {
								country: n.meta.country
							}), i) {
							l.dispatch(C(i, o));
							const e = Object(Mn.e)(n);
							e && l.dispatch(y(e))
						}
						wv.a.publish(Xg.c, a, document)
					});
					const p = l.getState(),
						h = Object(Dd.b)();
					l.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(E(n)), t(x(Array.from(s)))
					})(h));
					const g = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						f = Object(Qr.I)(p, g) || "";
					if (g) {
						l.dispatch(C(f, g));
						const e = Object(Mn.e)(p);
						e && l.dispatch(y(e))
					}
					const v = Object(Qr.I)(p, g) || "",
						_ = (p.subreddits.about[v] || {}).advertiserCategory;
					o.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: p.user.account ? p.user.account.id : p.user.loid.loid
						}
					}), o.trigger("pageview", {
						subreddit: g,
						advertiserCategory: _
					}), l.dispatch((e => async (t, n) => {
						const s = n();
						s.user.loid.loid || s.meta.isBot || Av.c.withScope(e => {
							Object(Av.a)(e, {
								serverLogging: !1
							}), Av.c.captureMessage("User has no LOID set")
						});
						const {
							localStorageData: r
						} = e;
						r && t(Dv(r)), Lv(n, t)
					})({
						localStorageData: d
					}));
					const I = Object(Xh.c)(p);
					I && (l.dispatch(me()), history.replaceState(history.state, "", Object(w.a)(window.location.href, [ti.B]))), l.dispatch(Gv());
					const A = Object(Mn.q)(p),
						D = null == A ? void 0 : A[ti.t];
					D && (history.replaceState(history.state, "", Object(w.a)(window.location.href, [ti.t])), I || l.dispatch(Object(T.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/changeUsername.ts")).then(e => e.openWelcomeBackModalIfNeeded))())), (null == A ? void 0 : A[ti.z]) && (l.dispatch(Object(T.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/login.ts")).then(e => e.openLoginModal))()), history.replaceState(history.state, "", Object(w.a)(window.location.href, [ti.z]))), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: r
							} = e.platform,
							o = (r.urlParams.subredditName || "").toLowerCase(),
							i = Object(Qr.I)(e, o) || "";
						if (Object(F.a)(), Cv(i, {
								country: e.meta.country
							}), r && r.meta) {
							const o = r.meta.name;
							if (Object(G.b)(k.n.Redesign, {
									page: o,
									type: "rum"
								}), Object(M.c)(e.meta.userAgent) && window.innerWidth > Yg.b) {
								const t = Object(a.f)(c);
								R.a && R.a.timing && qf.b.isEnabled && (qf.b.recordPerformanceTimings(`${o}_time_to_first_byte`, R.a.timing.fetchStart, R.a.timing.responseStart), qf.b.recordPerformanceTimings(`${o}_time_to_interactive`, R.a.timing.fetchStart, R.a.timing.domInteractive));
								const n = [Object(rv.a)()],
									s = !0;
								if (Object(Mn.g)(e)) {
									const t = Object(av.a)(e);
									n.push(Object(av.c)(t))
								}
								const r = {
									isLoggedIn: Object(O.S)(e),
									name: o,
									statsdPathsForExperiments: n
								};
								Object(a.g)(r, t, s)
							}
							const i = R.a.timing.domInteractive - R.a.timing.navigationStart;
							Object(oi.j)(r.routeMatch, l.getState(), q.TimerType.Initial, i, r.urlParams);
							const d = Object(N.a)(window.location.href);
							d && d.get(ti.b) && history.replaceState(history.state, "", Object(w.a)(window.location.href, [ti.b])), Object(L.a)(d.get(ti.K)) && l.dispatch(Object(Ce.f)({
								kind: Gp.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), d.get(ti.L) && (l.dispatch(Object(ee.a)(d.get(ti.L))), history.replaceState(history.state, "", Object(w.a)(window.location.href, [ti.L])));
							let u = !1;
							const m = Object(O.V)(e);
							(Object($f.b)(Lh.b.JustLoggedIn) || m) && (l.dispatch(Object(Ce.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object($f.c)(Lh.b.JustLoggedIn), history.replaceState(history.state, "", Object(w.a)(window.location.href, [ti.s]))), Object($f.b)(Lh.b.JustLoggedOut) && (u = !0, Object($f.c)(Lh.b.JustLoggedOut)), de().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return l.dispatch(t())
							});
							const p = () => l.dispatch(Object(Hv.openReonboardingModalIfNeeded)());
							let b;
							oe(e) && (b = () => {
								const {
									dispatch: e
								} = l;
								t.listen(() => e(ie())), e(ie())
							});
							const h = Pv(e);
							if (!D)
								if (h || !1 === Rn.ab()) h && b && b(), p();
								else {
									const t = () => {
											b && b(), p()
										},
										n = e => {
											de().then(e => e.requestNotificationsPermissions).then(t => l.dispatch(t(u, !1, e)))
										};
									Object(xv.a)(e) ? Object(O.S)(e) ? (n(), p()) : b && b() : n(t)
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
							l.dispatch(Object($.c)())
						}
						const d = Object(O.S)(l.getState());
						d && !Object(Wh.a)(window.location.search) && l.dispatch(Object(V.d)()), Object(P.requestIdleCallback)(async () => {
							l.dispatch(Object(ue.d)()), await Object(S.a)() && Object(ov.b)(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = Nv(e);
								t && (await (async e => {
									return (await Object(le.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), s && s())
							}, s = t.listen((t, n) => {
								"POP" !== n && e()
							});
							e()
						}), d && Object(j.c)(l.getState()) && l.dispatch(Object(b.a)()), document.addEventListener("visibilitychange", () => {
							var e;
							const t = l.getState(),
								{
									currentPage: n
								} = t.platform;
							if ("visible" !== document.visibilityState && (Rn.cc(Date.now()), Object(G.a)(Object(ov.a)("tab_backgrounded")(t))), (e => Object(cc.c)(e, {
									experimentEligibilitySelector: e => !Object(ae.d)(e),
									experimentName: Un.ed
								}) === Un.vd.Enabled)(t) && "visible" === document.visibilityState && n && Object(oi.j)(n.routeMatch, l.getState(), q.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Rn.A(),
									t = Rn.B(),
									n = Rn.O(),
									s = Rn.Y();
								if (s && e && n) {
									const r = Date.now() - s;
									Object(G.a)(Object(ov.f)("tab_backgrounded", n)(l.getState(), r, e, t))
								}(s || e || n || t) && (Rn.gb(), Rn.kb(), Rn.ib(), Rn.hb())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && Zv.g[n.locationState.clickId] && !Zv.g[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(Zv.c)(n.locationState.clickId) : Object(Zv.d)(n.locationState.clickId))
						}), Object(ae.h)(l.getState()) && lv(l.getState), (e => {
							return Object(cc.c)(e, {
								experimentEligibilitySelector: cc.a,
								experimentName: Un.Xc
							}) === Un.Yd
						})(l.getState()) && Object(Zv.b)(Rn.r(), l.getState), l.dispatch(Object(ve.o)())
					}), window.history.scrollRestoration = "manual", wv.a.attachStore(l);
					const B = Rn.p(null === (u = l.getState().user.account) || void 0 === u ? void 0 : u.id),
						U = Rn.o(null === (m = l.getState().user.account) || void 0 === m ? void 0 : m.id);
					l.dispatch(Object(he.B)({
						posts: null != B ? B : []
					})), l.dispatch(Object(Y.m)({
						comments: null != U ? U : []
					})), l.dispatch(X), Object(Wm.e)(l.getState()) && l.dispatch(Object(Uv.e)()), Object(P.requestIdleCallback)(() => {
						const e = Rn.I();
						(!e || e && Date.now() - e.lastUpdated >= k.D) && l.dispatch(Object(ve.f)())
					}), Object(Qd.b)(t, () => l.getState()), Rn.z() && (l.dispatch(Object(ge.l)({
						searchOver18: !0
					})), Object(Wg.b)(), Rn.eb())
				},
				raven: {
					tags: {
						project: k.n.Redesign
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
					hideOnlyChildMargin: j,
					isCollectionLayout: _,
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
					className: Object(i.a)(x.a.sidebar, _ ? x.a["m-collectionLayout"] : x.a.defaultLayout),
					style: R
				}, w), F = r.a.createElement(o.a, {
					hideOnlyChildMargin: j,
					className: g,
					disableFullscreen: v,
					fitPageToContent: O,
					forcedLayout: E,
					isCollectionLayout: _
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
					chunk: r.t.ACKNOWLEDGEMENTS,
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
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/page.ts");
			const o = ["/appeal", "/appeals"],
				i = ["/appeal/:id", "/appeals/:id"],
				c = Object(s.a)({
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
				l = Object(s.a)({
					resolved: {},
					chunkName: () => "Appeal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Appeal").then(n.bind(null, "./src/reddit/pages/AppealUniquePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/AppealUniquePage/index.tsx"
					}
				}),
				d = {
					action: a.a,
					chunk: r.t.APPEAL,
					component: c,
					exact: !0,
					meta: {
						name: r.Tb.APPEAL
					},
					path: o
				},
				u = {
					action: a.b,
					chunk: r.t.APPEAL,
					component: l,
					exact: !0,
					meta: {
						name: r.Tb.APPEAL
					},
					path: i
				};
			t.b = d
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
					chunk: r.t.AVATAR,
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
					action: a.d,
					chunk: r.t.COINS,
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
					action: a.c,
					chunk: r.t.COINS_MOBILE,
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
					chunk: r.t.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: r.Tb.COLLECTION_COMMENTS
					},
					prefetches: [r.t.FRONTPAGE, r.t.COMMENTS_PAGE, r.t.SUBREDDIT]
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
					chunk: r.t.INTERNATIONAL_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.INTERNATIONAL_SITE_PAGE
					},
					path: Object(a.c)(c, !1),
					prefetches: [r.t.SUBREDDIT]
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
					chunk: r.t.ECON_MANAGEMENT,
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
					chunk: r.t.ECON_MANAGEMENT_2,
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
					chunk: r.t.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.FOLLOWERS
					},
					path: o,
					prefetches: [r.t.PROFILE_OVERVIEW]
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
					chunk: r.t.FRAMED_GILD,
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
					chunk: r.t.FRAMED_MODAL,
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
			const d = Object.keys(o.bb).map(e => o.bb[e]).join("|"),
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
					chunk: o.t.FRONTPAGE,
					component: p,
					exact: !0,
					prefetches: [o.t.COMMENTS_PAGE, o.t.SUBREDDIT]
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
					chunk: r.t.GEOTAGGING,
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
					chunk: r.t.HAPPENING_NOW,
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
				l = Object.keys(o.X).map(e => o.X[e]).join("|"),
				d = [`/message/:pageName(${l})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.e,
					chunk: o.t.INBOX_PAGES,
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
					chunk: r.t.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
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
					chunk: r.t.META_MEMBERSHIP_PAYWALL_PAGE,
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
					chunk: r.t.META_NO_GAS_PAGE,
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
					chunk: r.t.EMPTY,
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
				l = Object.keys(o.wb).map(e => o.wb[e]).join("|"),
				d = `/r/mod/about/:pageName(${l})?`,
				u = {
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: o.t.MODQUEUE_PAGES,
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
				d = Object.keys(o.bb).map(e => `${l}/:sort(${o.bb[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(o.bb).map(e => `${u}/:sort(${o.bb[e]})?`),
				p = [l, u, ...d, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: o.t.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: o.Tb.MULTIREDDIT
					},
					path: p,
					prefetches: [o.t.SUBREDDIT]
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
					chunk: r.t.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.NOTIFICATIONS_INBOX
					},
					path: ["/notifications", o],
					prefetches: [r.t.FRONTPAGE]
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
					chunk: r.t.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.POST_DRAFT
					},
					path: o,
					prefetches: [r.t.POST_DRAFT]
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
					chunk: r.t.POST_SET_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.POST_SET
					},
					path: o,
					prefetches: [r.t.POST_SET_PAGE]
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
					chunk: r.t.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.PROFILE_COMMENTS
					},
					path: o,
					prefetches: [r.t.COMMENTS_PAGE]
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
					chunk: r.t.PROFILE_MODERATION,
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
					chunk: r.t.PROFILE_OVERVIEW,
					component: c,
					exact: !0,
					meta: {
						name: r.Tb.PROFILE_OVERVIEW
					},
					path: [o, i],
					prefetches: [r.t.COMMENTS_PAGE]
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
					chunk: r.t.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.PROFILE_POSTS
					},
					path: o,
					prefetches: [r.t.COMMENTS_PAGE]
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
					chunk: o.t.PROFILE_PRIVATE,
					component: l,
					exact: !0,
					meta: {
						name: o.Tb.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [o.t.COMMENTS_PAGE]
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
					chunk: r.t.PROFILE_SNOOBUILDER,
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
					chunk: r.t.RECAP,
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
					chunk: r.t.REPORT_PAGE,
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
					chunk: r.t.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Tb.SEARCH_RESULTS
					},
					path: o,
					prefetches: [r.t.FRONTPAGE, r.t.SUBREDDIT, r.t.COMMENTS_PAGE]
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
			const c = Object.keys(o.jc).map(e => o.jc[e]).join("|"),
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
					chunk: o.t.SETTINGS,
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
					chunk: o.t.USER_DATA_REQUEST,
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
					chunk: a.t.EMPTY,
					exact: !0,
					meta: {
						name: a.Tb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("vendors~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("Settings~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: a.t.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: a.Tb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [a.t.SUBREDDIT]
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
					chunk: r.t.TOPIC,
					component: o,
					exact: !0,
					meta: {
						name: r.Tb.TOPIC
					},
					prefetches: [r.t.COMMENTS_PAGE, r.t.FRONTPAGE]
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
				experimentName: l.je
			}), e => e === l.oe.Enabled);
			var g = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = n("./src/reddit/selectors/experiments/magicLink.ts"),
				v = n("./src/lib/getParsedUserAgent/index.ts");
			const O = Object(o.a)(e => Object(p.c)(e, {
				experimentEligibilitySelector: e => Object(v.g)(e.meta.userAgent) && Object(b.f)(e),
				experimentName: l.If
			}), e => e === l.fg.Enabled);
			var C = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/actions/modal.ts"),
				E = n("./src/reddit/selectors/accountManager/modalData.ts");
			const x = Object(o.a)(b.f, C.b, E.a, (e, t, n) => e && "DE" === t && n === y.a.Report);
			var j = n("./src/reddit/selectors/responsiveSettings.ts");
			const _ = Object(o.c)({
					frontpageSignupVariant: m.a,
					isNetzDGComplianceEnabled: x,
					magicLinkVariant: f.a,
					ssoLoginLinkVariant: e => Object(p.c)(e, {
						experimentEligibilitySelector: e => !Object(b.e)(e),
						experimentName: l.Wf
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
				S = Object(o.a)((e, t) => t.path, (e, t) => t.uiMode, e => Object(E.c)(e), E.a, j.a, C.k, _, P, (e, t, n, o, u, m, p, b) => {
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
						isGoogleSsoGisEnabled: j,
						isSafariOneTapEnabled: _
					} = b;
					let P = `${a.a.accountManagerOrigin}${e}`;
					if (P = Object(i.a)(P, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), P = Object(i.a)(P, {
							use_accountmanager: "true"
						}), O && (P = Object(i.a)(P, {
							[`experiment_${l.Wf}`]: O
						})), j && (P = Object(i.a)(P, {
							[`experiment_${l.je}`]: "enabled"
						})), h && (P = Object(i.a)(P, {
							experiment_d2x_netzdg_compliance: d.Enabled,
							thing_id: n
						})), P = Object(i.a)(P, {
							experiment_d2x_onboarding: "enabled"
						}), _ && (P = Object(i.a)(P, {
							[`experiment_${l.If}`]: "enabled"
						})), E && (P = Object(i.a)(P, {
							[`experiment_${l.Pb}`]: g
						})), x && (P = Object(i.a)(P, {
							[`experiment_${l.Qb}`]: f
						})), y && (P = Object(i.a)(P, {
							[`experiment_${l.ub}`]: "enabled"
						})), v && (P = Object(i.a)(P, {
							[l.wd]: v,
							uiMode: t
						})), C && (P = Object(i.a)(P, {
							[`experiment_${l.Ie}`]: C
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
					} = Object(a.C)();
					return n === e.id && s > e.maxViews ? null : e
				}),
				d = Object(s.a)(l, e => {
					if (!e) return null;
					const {
						id: t,
						lastInteractionTimestamp: n
					} = Object(a.C)();
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
					const r = Object(o.Db)(e, {
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
			const a = e => s.hd.DnNoModal === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.Bb
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
					experimentName: r.wd,
					throttledVariants: {
						[r.fe.CurrentThrottled]: r.wd
					}
				}), i.a),
				m = e => e === r.fe.CurrentThrottled,
				p = e => e === r.fe.CurrentThrottled || e === r.fe.CurrentUnthrottled || e === r.fe.CurrentUnthrottledCopy || e === r.fe.NewPopUnthrottledCopy,
				b = e => e === r.fe.NewPopUnthrottledCopy,
				h = e => e === r.fe.NewPageUnthrottledCopy || e === r.fe.NewPageUnthrottledCopyFields,
				g = e => e === r.fe.NewPageUnthrottledCopyFields
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
				experimentName: s.Fb
			}), e => e === s.jd.Enabled || e === s.jd.EnabledWithNux)
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
					experimentName: s.Ob
				}), e => e === s.xe.HideTrending),
				i = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Ob,
					expEventOverride: !1
				}), e => e === s.xe.HideTrending)
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
					experimentName: r.Be,
					experimentEligibilitySelector: o.e
				}), i.a),
				l = Object(s.a)(c, e => e === r.Ee.Enabled),
				d = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Hc,
					experimentEligibilitySelector: o.e
				}), i.a),
				u = Object(s.a)(d, e => e === r.td.Enabled),
				m = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Sb,
					experimentEligibilitySelector: o.e
				}), i.a),
				p = Object(s.a)(m, e => e === r.Ce.ContinuousScroll),
				b = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Tb,
					experimentEligibilitySelector: o.e
				}), i.a),
				h = Object(s.a)(b, e => e === r.De.Enabled),
				g = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.fc,
					experimentEligibilitySelector: () => !0
				}), i.a),
				f = Object(s.a)(g, e => e === r.jb.Enabled)
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
					experimentName: r.Vb,
					experimentEligibilitySelector: o.e
				}), e => e === r.Z.Enabled),
				c = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Wb,
					experimentEligibilitySelector: o.e
				}), e => e === r.ab.Enabled),
				l = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Xb,
					experimentEligibilitySelector: o.e
				}), e => e === r.bb.Enabled),
				d = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Yb,
					experimentEligibilitySelector: o.e
				}), e => e === r.cb.Enabled),
				u = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.ac,
					experimentEligibilitySelector: o.e
				}), e => e === r.eb.Enabled),
				m = Object(s.a)(e => Object(a.c)(e, {
					experimentName: r.Zb,
					experimentEligibilitySelector: o.e
				}), e => e === r.db.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => Object(r.c)(e, {
				experimentName: s.Ue,
				experimentEligibilitySelector: r.a
			}) === s.df.Enabled
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
						experimentName: s.tf
					}) === s.Yd
				},
				i = e => {
					if (Object(a.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.sf
					}) === s.Yd
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.gf
					}) === s.Yd
				},
				l = e => {
					if (Object(a.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.ff
					}) === s.Yd
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
					experimentName: s.Jc
				}) === s.Yd,
				o = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Kc
				}) === s.Yd,
				i = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.yb
				}) === s.Yd,
				c = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Ic
				}) === s.Yd
		},
		"./src/reddit/selectors/experiments/shredditMigration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "g", (function() {
				return E
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const o = /^\/?(new|top|hot|controversial|rising|best)?\/?$/,
				i = /^\/r\/all\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				c = /^\/r\/popular\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				l = /^\/r\/[^/]+\/?((controversial|new|about|top)\/?)?$/,
				d = /^\/r\/[^/]+\/w(iki)?\/?([^/]+\/?)?$/,
				u = /^\/u(?:ser)?\/[^/]+(\/[^/]+)?\/?$/,
				m = e => !!e.match(o) || !!e.match(c),
				p = e => !e.match(c) && (!e.match(i) && (!!e.match(l) || !!e.match(d))),
				b = (e, t) => !!m(t) && [s.hg.Enabled, s.hg.HardReload].includes(Object(r.c)(e, {
					experimentEligibilitySelector: a.f,
					experimentName: s.Qf
				})),
				h = (e, t) => !!t.match(i) && [s.hg.Enabled, s.hg.HardReload].includes(Object(r.c)(e, {
					experimentEligibilitySelector: a.f,
					experimentName: s.Of
				})),
				g = (e, t) => !!p(t) && [s.hg.Enabled, s.hg.HardReload].includes(Object(r.c)(e, {
					experimentEligibilitySelector: a.f,
					experimentName: s.Pf
				})),
				f = (e, t) => !(!p(t) && !m(t)) && Object(r.c)(e, {
					experimentEligibilitySelector: a.f,
					experimentName: s.we
				}) === s.Yd,
				v = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: a.f,
						experimentName: s.Nf
					})
				},
				O = (e, t) => !!(e => {
					return /^(?:\/r\/[^\/]+)?\/search\/?$/i.test(e) || /^\/u(?:ser)?\/[^\/]+\/m\/[^\/]+\/search\/?$/i.test(e)
				})(t) && (v(e) === s.hg.Enabled || v(e) === s.hg.HardReload),
				C = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: a.f,
						experimentName: s.Rf
					})
				},
				y = (e, t) => !!(e => !!e.match(u))(t) && (C(e) === s.hg.Enabled || C(e) === s.hg.HardReload),
				E = (e, t) => !!(e => !!(e.match(i) || e.match(o) || e.match(c) || e.match(u) || e.match(l) || e.match(d)))(t) && (e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: a.e,
						experimentName: s.Uf
					})
				})(e) === s.hg.Enabled
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
				experimentName: s.Sf
			}) === s.Yd
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/selectors/user.ts"),
				o = n("./src/reddit/selectors/experiments/shredditMigration.ts");
			const i = Object(r.a)(a.S, e => !e),
				c = (e, t) => {
					const n = t();
					e.block(e => {
						let t = !1;
						if (Object(a.S)(n)) {
							Object(o.g)(n, e.pathname) && (t = !0)
						} else {
							const s = (e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname),
								r = Object(o.b)(n, e.pathname),
								a = Object(o.e)(n, e.pathname),
								i = Object(o.c)(n, e.pathname),
								c = Object(o.d)(n, e.pathname),
								l = Object(o.h)(n, e.pathname),
								d = Object(o.f)(n, e.pathname);
							(r || s || a || i || c || l || d) && (t = !0)
						}
						if (t) {
							const t = e.pathname + e.search;
							return Object(s.f)(n), window.location.href = t, !1
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
					return (null === (t = null == e ? void 0 : e.user.experiments.byName[r.cd]) || void 0 === t ? void 0 : t.variant) === r.Yd
				},
				c = Object(s.a)(e => Object(a.c)(e, {
					experimentEligibilitySelector: o.S,
					experimentName: r.bc
				}), e => e === r.nd.BottomSheet),
				l = Object(s.a)(e => Object(a.c)(e, {
					experimentEligibilitySelector: o.S,
					experimentName: r.bc,
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
								return (null === (n = p(e, t)) || void 0 === n ? void 0 : n.contentType) === c.v.Chat
							});
						case a.a.Talk:
							return t.filter(t => {
								var n;
								return (null === (n = p(e, t)) || void 0 === n ? void 0 : n.contentType) === c.v.Talk
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
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.activeUserId
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
				experimentName: s.Kb
			}), e => e === s.Yd)
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
			Object(s.a)(i.Hb, e => !(!e || !e.length));
			const c = Object(s.a)(i.E, e => !e),
				l = Object(s.a)(i.Hb, e => e && e.find(e => e === a.a.Apple)),
				d = Object(s.a)(i.Hb, e => !(!e || !e.includes(a.a.Google))),
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
		"./src/redditGQL/operations/RedditorIdByName.json": function(e) {
			e.exports = JSON.parse('{"id":"a24cf5c8adf7"}')
		},
		"./src/redditGQL/operations/RedditorNameById.json": function(e) {
			e.exports = JSON.parse('{"id":"7206aafc3965"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.119849188eae7b444185.js.map