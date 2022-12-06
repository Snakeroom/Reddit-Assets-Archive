// https://www.redditstatic.com/desktop2x/Reddit.941e3a8f786838a66bdb.js
// Retrieved at 12/6/2022, 5:50:04 PM by Reddit Dataminer v1.0.0
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
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
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
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(s.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(r.useState)(null), [a, c] = Object(r.useState)(null), [l, d] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), b = Object(r.useCallback)(() => m(!1), []), h = Object(r.useCallback)(() => m(!u), [u]), g = Object(r.useMemo)(() => {
					const t = i(e);
					return l ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: l
						}
					})) : t
				}, [l, e]), {
					attributes: f,
					styles: v,
					update: O
				} = Object(o.a)(t, a, g);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: d,
						style: v.arrow,
						...f.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: v.popper,
						...f.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: h,
					visible: u,
					update: O
				}), [d, f, c, b, p, v, t, n, h, u, O])
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
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - o === r
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
				o = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
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
						return Object(r.a)(Object(o.a)(e, [a.a]), {
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
						Object(r.a)(Object(o.a)(e, [a.a]), {
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
				return o
			})), n.d(t, "h", (function() {
				return a
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
				o = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_STARTED",
				a = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_SUCCESS",
				i = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_FAILED",
				c = "ECON_MANAGEMENT_FETCH_ASSOCIATED_DATA_SUCCESS",
				l = "ECON_MANAGEMENT_FETCH_REDDITOR_INFO_SUCCESS",
				d = "ECON_MANAGEMENT_FETCH_VAULT_INFO_SUCCESS",
				u = "ECON_MANAGEMENT_UNLINK_VAULT_SUCCESS"
		},
		"./src/reddit/actions/economics/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return M
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "g", (function() {
				return L
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				o = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
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
			const E = Object(s.a)(o.c),
				y = Object(s.a)(o.b),
				x = Object(s.a)(o.g),
				_ = Object(s.a)(o.h),
				j = Object(s.a)(o.f),
				S = Object(s.a)(o.a),
				P = Object(s.a)(o.d),
				k = Object(s.a)(o.e),
				N = Object(s.a)(o.i),
				M = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = t(),
						o = Object(C.m)(r);
					if (o && o.isEmployee) try {
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
						e(E(t))
					} catch (i) {
						e(y()), e(Object(a.f)({
							duration: a.a,
							kind: f.b.Error,
							text: i.message
						}))
					}
				}, w = e => async (t, n, s) => {
					let {
						gqlContext: o,
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
						})(o(), e), t(_(h))
					} catch (E) {
						r.c.captureException(E), t(j()), t(Object(a.f)({
							duration: a.a,
							kind: f.b.Error,
							text: E.message
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
						})(o(), h.entityId);
						t(P(e))
					} catch (E) {
						r.c.captureException(E), t(Object(a.f)({
							duration: a.a,
							kind: f.b.Error,
							text: E.message
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
					const o = n(),
						i = Object(C.m)(o);
					if (!i || !i.isEmployee) return;
					const c = Object(O.b)(o);
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
						t(S({
							entity: n,
							type: e
						}))
					} catch (d) {
						t(Object(a.f)({
							duration: a.a,
							kind: f.b.Error,
							text: d.message
						}))
					}
				}, A = (e, t, n) => async (s, r, o) => {
					let {
						gqlContext: i
					} = o;
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
						})(i(), e, t, n), s(Object(a.f)({
							duration: a.a,
							kind: f.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}));
						const r = null === (c = d.platform.currentPage) || void 0 === c ? void 0 : c.queryParams[v.b];
						r && s(w(r))
					} catch (m) {
						s(Object(a.f)({
							duration: a.a,
							kind: f.b.Error,
							text: m.message
						}))
					}
				}, T = (e, t) => async (n, s, r) => {
					let {
						gqlContext: o
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
						})(o(), e, t);
						n(Object(a.f)({
							duration: a.a,
							kind: f.b.SuccessAward,
							text: `Gave ${t} coins to ${e}. New balance: ${s.newBalance}.`
						}))
					} catch (u) {
						n(Object(a.f)({
							duration: a.a,
							kind: f.b.Error,
							text: u.message
						}))
					}
				}, R = (e, t) => async (n, s, r) => {
					let {
						gqlContext: o
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
						})(o(), e, t);
						n(Object(a.f)({
							duration: a.a,
							kind: f.b.SuccessAward,
							text: `Removed ${t} coins from ${e}. New balance: ${s.newBalance}.`
						}))
					} catch (u) {
						n(Object(a.f)({
							duration: a.a,
							kind: f.b.Error,
							text: u.message
						}))
					}
				}, L = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const l = s(),
						d = Object(C.m)(l);
					if (d && d.isEmployee) try {
						await
						function(e, t, n) {
							return Object(g.a)(e, {
								method: c.ob.POST,
								endpoint: `${i.a.metaUrl}/private/unlink/${t}/${n}`
							})
						}(o(), e, t), n(N()), n(Object(a.f)({
							duration: a.a,
							kind: f.b.SuccessCommunityGreen,
							text: "Successfully unlinked vault"
						}))
					} catch (u) {
						n(Object(a.f)({
							duration: a.a,
							kind: f.b.Error,
							text: u.message
						}))
					}
				}
		},
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			}));
			const s = "ECON__MARKETPLACE_ITEM_CLAIMED",
				r = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK",
				o = "X__MARKETPLACE_DISMISS_AVATAR_PUSHCARD",
				a = "X__MARKETPLACE_DISMISS_AVATAR_PUSHCARD_BANNER",
				i = "X__MARKETPLACE_VIEW_AVATAR_PUSHCARD"
		},
		"./src/reddit/actions/economics/marketplace/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/withActionSideEffects/index.ts"),
				o = n("./src/reddit/actions/economics/marketplace/constants.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts");
			const i = Object(s.a)(o.d),
				c = Object(s.a)(o.c),
				l = Object(r.a)(Object(s.a)(o.a), e => {
					let {
						payload: {
							id: t,
							maxViews: n
						}
					} = e;
					Object(a.ob)({
						id: t,
						eventViews: (n + 1).toString(),
						lastInteractionTimestamp: (new Date).getTime().toString()
					})
				}),
				d = Object(r.a)(Object(s.a)(o.b), e => {
					let {
						payload: {
							id: t
						}
					} = e;
					const n = Object(a.y)();
					Object(a.ob)({
						id: t,
						eventViews: (n.id === t ? n.eventViews : 0).toString(),
						lastInteractionTimestamp: (new Date).getTime().toString()
					})
				}),
				u = Object(r.a)(Object(s.a)(o.e), e => {
					let {
						payload: {
							id: t
						}
					} = e;
					const n = Object(a.y)();
					Object(a.ob)({
						id: t,
						eventViews: (n.id === t ? n.eventViews + 1 : 0).toString(),
						lastInteractionTimestamp: (new Date).getTime().toString()
					})
				})
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
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
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
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(r(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						o = n.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(d());
						const t = `https://${o.pointsDocsBaseUrl}v1.json?web`,
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
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				l = n("./src/reddit/components/Settings/modalIds.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = r()(d.d),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.B)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(d.c)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(o.g)(l.h))
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
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/EmailSettings/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, r) => {
				let {
					apiContext: o
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
				const d = await ((e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
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
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => async (t, n) => {
				const i = n(),
					c = e.params.thingId;
				t(Object(s.c)({
					correlationId: Object(o.d)(o.a.GildingFlow),
					thingId: c
				})), Object(a.S)(i) || await t(r.s());
				const l = n();
				if (!Object(a.S)(l)) return t(Object(s.f)())
			}
		},
		"./src/reddit/actions/framedModal/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const o = e => async (e, t) => {
				const n = t();
				Object(r.S)(n) || await e(s.s());
				const o = t();
				if (!Object(r.S)(o)) throw new Error("Failed to login")
			}
		},
		"./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/env/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
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
					const t = await Object(a.b)(r());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(d(n))
					}
				} catch (i) {
					Object(s.b)() || console.error(i), o.c.withScope(e => {
						var t, n;
						e.setExtra("response", i.response), e.setExtra("status", null === (t = i.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = i.response) || void 0 === n ? void 0 : n.error), o.c.captureException(i)
					})
				}
			}
		},
		"./src/reddit/actions/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return g
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			}));
			var s = n("./src/lib/cache/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeRequest/index.ts"),
				c = n("./src/lib/pageTitle/index.ts"),
				l = n("./src/reddit/actions/happeningNow/constants.ts"),
				d = n("./src/reddit/actions/platform.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/redditGQL/operations/GetIsLiveContentAvailable.json");
			var p = n("./src/reddit/reducers/features/happeningNow/index.ts"),
				b = n("./src/reddit/selectors/platform.ts"),
				h = n("./src/reddit/selectors/user.ts");
			Object(o.a)({
				features: {
					happeningNow: p.a
				}
			});
			const g = Object(a.a)(l.f),
				f = Object(a.a)(l.d),
				v = Object(a.a)(l.e),
				O = Object(a.a)(l.g),
				C = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = await (e => Object(u.a)(e, m))(s());
					if (!Object(i.c)(r)) return;
					const o = t();
					if (!!!r.body.data.isLiveContentAvailable) return;
					const a = Date.now();
					Object(b.h)(o) && e(f(a)), e(v(a));
					const c = Object(h.k)(o);
					c && !y(c) && e(O(!0))
				}, E = e => Object(s.c)(r.s.HAPPENING_NOW, r.A.HAPPENING_NOW_LIVE_CONTENT_AVAILABILITY_TOOLTIP_DISMISSED, e), y = e => {
					const t = E(e);
					return !!Object(s.b)(t)
				}, x = () => async (e, t) => {
					const n = t(),
						r = Object(h.k)(n);
					if (r) {
						const e = E(r);
						Object(s.d)(e, !0, s.a)
					}
					e(O(!1))
				}, _ = () => async (e, t) => {
					e(d.m({
						title: c.h()
					})), e(f(Date.now()))
				}
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.a)()
				})), await e(Object(o.s)()), Object(a.S)(t()) || e(Object(i.openLoginModal)())
			}
		},
		"./src/reddit/actions/pages/communityHubs.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.m)({
					title: Object(s.d)()
				}))
			}
		},
		"./src/reddit/actions/pages/econManagement.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/economics/econManagement/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.s)());
				const n = t(),
					l = Object(c.S)(n),
					d = Object(c.P)(n);
				l && d || await e(Object(s.c)("/")), e(Object(o.m)({
					title: "Econ control panel"
				})), await e(Object(r.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/econManagement2.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			n("./src/reddit/actions/economics/econManagement/index.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.s)());
				const n = t(),
					l = Object(c.S)(n),
					d = Object(c.P)(n);
				l && d || await e(Object(r.c)("/")), e(Object(o.m)({
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
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.e)()
				})), Object(i.S)(t()) || await e(Object(a.s)()), await e(Object(r.b)()).then(() => {
					if (t().economics.me.data) return e(Object(r.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/noGasPage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.m)({
					title: Object(s.j)()
				}))
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				r = n("./src/reddit/actions/economics/helpers/async.ts"),
				o = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t().platform.currentPage;
				if (n && n.routeMatch && n.routeMatch.match) {
					const l = (n.routeMatch.match.params || {}).subredditName;
					if (l) {
						const n = [],
							d = t();
						Object(c.S)(d) || n.push(e(Object(a.s)()));
						const u = Object(s.a)(l, null);
						n.push(e(Object(o.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.I)(t(), l);
						await e(Object(r.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/predictions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.l)()
				})), await e(Object(a.s)()), Object(i.S)(t()) && await e(Object(o.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.m)({
					title: Object(s.s)()
				}))
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
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/PersonalizedYearInReview.json");
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
						return await Object(o.a)(e, {
							...a,
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
		"./src/reddit/actions/recapGame.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "RECAP__GAME_TOGGLED", (function() {
				return l
			})), n.d(t, "RECAP__GAME_START", (function() {
				return d
			})), n.d(t, "RECAP__GAME_CLOSE", (function() {
				return u
			})), n.d(t, "RECAP__SET_ORIGINAL_NIGHT_MODE", (function() {
				return m
			})), n.d(t, "recapGameToggleAction", (function() {
				return p
			})), n.d(t, "recapGameStartAction", (function() {
				return b
			})), n.d(t, "recapGameCloseAction", (function() {
				return h
			})), n.d(t, "recapGameSetOriginalNightModeAction", (function() {
				return g
			})), n.d(t, "recapGameToggle", (function() {
				return f
			})), n.d(t, "recapGameClose", (function() {
				return v
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/reddit/reducers/features/recapGame/index.ts"),
				i = n("./src/reddit/selectors/experiments/recapLeadUpGame.ts"),
				c = n("./src/reddit/selectors/recapGame.ts");
			Object(s.a)({
				features: {
					recapGame: a.b
				}
			});
			const l = "RECAP__GAME_TOGGLED",
				d = "RECAP__GAME_START",
				u = "RECAP__GAME_CLOSE",
				m = "RECAP__SET_ORIGINAL_NIGHT_MODE",
				p = Object(r.a)(l),
				b = Object(r.a)(d),
				h = Object(r.a)(u),
				g = Object(r.a)(m),
				f = () => async (e, t) => {
					const n = t(),
						s = n.platform.currentPage,
						r = Object(i.b)(n),
						o = Object(i.a)(n, {
							pageLayer: s
						});
					(r || o) && e(p())
				}, v = () => async (e, t) => {
					const n = Object(c.a)(t());
					e(h()), e(Object(o.A)({
						nightmode: n.isNightModeOriginal
					}))
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/comment/authoring.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
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
						E = Object(h.c)(v),
						y = Object(m.b)(v),
						x = Object(u.a)(v),
						_ = [o.a.NsfwBlockingModal].includes(x),
						j = [i.a.NSFW_BLOCKING_MODAL_V2].includes(y),
						S = _ || j;
					if (O && "true" === O.contentEditable && C && E) n(r.b({
						parentCommentId: C,
						commentsPageKey: E
					})), Object(h.a)(C);
					else if (y && !S) Object(h.b)(c.b), n(Object(o.i)(y));
					else if (v.toaster[0]) Object(h.b)(c.b), n(Object(a.g)(v.toaster[0].id));
					else if (v.shortcuts.namespace === c.d.Lightbox && v.platform.currentPage) {
						const e = v.platform.currentPage.locationState.closeLocation;
						e && (Object(h.b)(c.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: P
					} = v.shortcuts;
					e(t && P ? l.b(P, "close", !0) : d.a)
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return C
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/config.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts");
			var u = n("./src/reddit/reducers/features/avatar/index.ts"),
				m = n("./src/reddit/selectors/avatar.ts"),
				p = n("./src/reddit/actions/users.ts");
			Object(s.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				h = Object(r.a)(b),
				g = "RANDOM_AVATAR_LOADED",
				f = Object(r.a)(g),
				v = (e, t, n) => async (s, r, o) => {
					let {
						apiContext: u
					} = o;
					var b, h, g, f;
					const v = Object(m.b)(r()),
						O = await (async (e, t, n, s, r) => Object(c.a)(Object(l.a)(e, [d.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: i.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": r || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...s
							}
						}))(u(), e, t, n, v);
					if (!O.ok) throw new Error("User avatar failed to save");
					return s(Object(p.y)(O.body)), {
						accountIcon: null === (h = null === (b = O.body) || void 0 === b ? void 0 : b.avatar) || void 0 === h ? void 0 : h.headshot_image_url,
						fullBodySnoovatar: null === (f = null === (g = O.body) || void 0 === g ? void 0 : g.avatar) || void 0 === f ? void 0 : f.image_url
					}
				}, O = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(l.a)(e, [d.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/account`,
							method: i.ob.GET
						}))(s());
						t.ok && e(h(t.body))
					} catch (r) {
						o.c.captureException(r)
					}
				}, C = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(l.a)(e, [d.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.ob.GET
						}))(s());
						t.ok && e(f(t.body))
					} catch (r) {
						o.c.captureException(r)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/reddit/actions/login.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/telemetry/index.ts");
			const d = () => async (e, t) => {
				const n = t();
				Object(l.a)(Object(i.l)(n)), e(Object(o.s)({
					forceFetch: !0
				})), await e(Object(r.g)(a.a.SNOOVATAR_MODAL))
			};

			function u() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n) => {
					const {
						clickSource: o,
						share: d,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: h
					} = e, g = n();
					o && Object(l.a)(Object(i.g)(o)(g)), Object(c.S)(g) ? await t(Object(r.h)(a.a.SNOOVATAR_MODAL, {
						share: d,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: h
					})) : await t(Object(s.openLoginModal)())
				}
			}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
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
				o = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				a = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
				E = n("./src/reddit/actions/toaster.ts"),
				y = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/accountManager.ts"),
				_ = n("./src/reddit/constants/history.ts"),
				j = n("./src/reddit/constants/modals.ts"),
				S = n("./src/reddit/constants/parameters.ts"),
				P = n("./src/reddit/helpers/counters/amModalDesignUpdate.ts"),
				k = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				N = n("./src/reddit/helpers/history/index.ts"),
				M = n("./src/reddit/helpers/sessionStorage/index.ts"),
				w = n("./src/reddit/helpers/trackers/blockingInterstitial.ts"),
				I = n("./src/reddit/helpers/trackers/onboarding.ts"),
				A = n("./src/reddit/icons/svgs/Close/index.tsx"),
				T = n("./src/reddit/models/Sso/index.ts"),
				R = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/selectors/accountManager/index.ts"),
				D = n("./src/reddit/selectors/accountManager/modalData.ts"),
				F = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				G = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				U = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				B = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				H = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				q = n("./src/reddit/selectors/experiments/survey.ts"),
				V = n("./src/reddit/selectors/telemetry.ts"),
				W = n("./src/reddit/selectors/user.ts"),
				z = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				Q = n.n(z);
			const K = m.a.iframe("IFrame", Q.a),
				Z = m.a.button("CloseButton", Q.a),
				X = m.a.wrapped(A.a, "Close", Q.a),
				Y = Object(c.c)({
					accountManagerSrc: L.a,
					actionSource: D.a,
					frontpageSignupVariant: U.a,
					isAmModalDesignUpdateEnabled: G.a,
					isBlockingInterstitialEnabled: B.b,
					isBlockingInterstitialV2Enabled: B.c,
					isBlurredPreview: H.b,
					isCommentBeforeSignUpEnabled: F.a,
					isDismissSurveyEnabled: q.a,
					isHardBlockingInterstitialEnabled: B.d,
					isLoggedIn: W.S,
					isRegularOnboardingEnabled: F.b,
					redirectUrl: D.b
				}),
				J = Object(i.b)(Y, (e, t) => ({
					onDismissSignupTrigger: () => e(Object(C.d)()),
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(V.o)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(k.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(h.B)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(v({
							linkedIdentity: n
						})), e(Object(p.g)(s)), e(Object(E.f)(Object(E.e)(t, R.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(O({
							linkedIdentity: n
						})), e(Object(p.g)(s)), e(Object(E.f)(Object(E.e)(t, R.b.SuccessCommunity)))
					},
					openNsfwModal: () => e(Object(b.a)()),
					showToast: (t, n) => {
						e(Object(E.f)(Object(E.e)(t, n)))
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
			class te extends a.a.Component {
				constructor() {
					var e;
					super(...arguments), e = this, this.iframeRef = a.a.createRef(), this.isAccountCreated = !1, this.isSignupModalDismissed = !1, this.isSignupModalSuccessful = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
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
						const t = e === T.a.Apple ? j.a.LINK_APPLE_SSO : j.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(r.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === T.a.Apple ? j.a.UNLINK_APPLE_SSO : j.a.UNLINK_GOOGLE_SSO;
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
						this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== p.a.Reply && Object(M.a)(), this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(N.a)(_.b.JustLoggedIn, !0), this.isOneTapSession() ? this.redirectTo(window.location.href) : window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = () => {
						const {
							redirectUrl: e
						} = this.props;
						let t = "";
						t = e || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== p.a.Reply && Object(M.a)(), this.redirectTo(t, !0)
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
							[S.v]: "true"
						};
						n && (e.props.isCommentBeforeSignUpEnabled ? e.props.isRegularOnboardingEnabled && (s[S.G] = "true") : s[S.G] = "true"), e.isSignupModalSuccessful && (s[S.H] = "true"), e.isOneTapSession() && (s[S.w] = "true"), window.location.replace(Object(d.a)(t, s))
					}, this.closedByUser = () => {
						const {
							actionSource: e,
							isBlockingInterstitialEnabled: t,
							isBlockingInterstitialV2Enabled: n,
							isBlurredPreview: s,
							isCommentBeforeSignUpEnabled: r,
							isDismissSurveyEnabled: o,
							onDismissSignupTrigger: a,
							openNsfwModal: i,
							sendEvent: c
						} = this.props;
						if (this.currentStep) {
							const e = ee[this.currentStep];
							e && c(Object(I.A)(e))
						}
						s && e === p.a.NsfwBlockingModal && i(), this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), (t || n) && e !== p.a.NsfwBlockingModal && c(Object(w.a)()), r && Object(M.a)(), this.close(), this.isSignupModalDismissed && o && a()
					}, this.close = () => {
						this.props.onClose && this.props.onClose(), this.props.isAmModalDesignUpdateEnabled && Object(P.b)(P.a.Dismiss);
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
						path: o
					} = this.props, {
						iframeStyles: i
					} = this.state, c = (o === x.c.Index || o === x.c.Register) && (t === p.a.UserProfile || t === p.a.FeedPost || t === p.a.Comments || t === p.a.FeedScroll || t === p.a.CommentsScroll) && r, l = this.props.showCloseButton && !c;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(K, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: i,
						onLoad: this.onIFrameLoad
					}), l && a.a.createElement(Z, {
						onClick: this.closedByUser
					}, a.a.createElement(X, {
						className: Object(u.a)({
							[Q.a.mModalUpdate]: s
						})
					})))
				}
			}
			t.a = J(Object(y.c)(te))
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
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
					className: Object(o.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: s || i < 1
					}),
					"data-testid": l
				}, s || i < 1 ? "" : Object(a.b)(i)) : null
			}
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
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
							dialogId: o
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (o && r(), !1)
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
					return r.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(o.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(a.i)(l))
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
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PremiumPurchaseModal"), n.e("CoinPurchaseModal")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(o.a)({
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
			const u = Object(a.a)(e => {
				let {
					className: t,
					...n
				} = e;
				return r.a.createElement(i.a, d({}, n, {
					className: Object(o.a)(l.a.horizontalVotes, t),
					scoreClassName: Object(o.a)(l.a.customScoreStyles, n.scoreClassName),
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
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.ECON_CLAIM_FREE_AWARD_MODAL, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.ECON_COIN_PACKAGE_OFFER, e => o.a.createElement(c, {
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
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e("MarketplaceClaimModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx")),
				l = Object(s.a)(c, {
					ssr: !1
				});
			Object(a.b)(i.a.ECON_MARKETPLACE_CLAIM, e => o.a.createElement(l, {
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
				o = n("./src/reddit/components/ConfirmUserActionModal/index.tsx");
			const {
				fbt: a
			} = n("./node_modules/fbt/lib/FbtPublic.js"), i = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return r.a.createElement(o.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: a._("Dismiss this collectible?", null, {
						hk: "22tGas"
					}),
					modalText: a._("Be sure, because you won't be able to claim this collectible later.", null, {
						hk: "1nu92h"
					}),
					cancelActionText: a._("Yes, Dismiss", null, {
						hk: "JKrSO"
					}),
					actionText: a._("Go Back", null, {
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
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => o.a.createElement(d, {
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
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CANCEL_PREDICTION, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_OUTCOME, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_END_TIME, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_PREMIUM_UPSELL, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EconTopAwardersModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("EconTopAwardersModal")]).then(n.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
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
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EditCommunityDescriptionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.EDIT_DESCRIPTION_MODAL, e => o.a.createElement(c, {
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
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {},
				r = () => null;

			function o(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function a(e) {
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
				const o = r.fbt._("Animation of {award name} image", [r.fbt._param("award name", t.name)], {
					hk: "222osK"
				});
				return a.a.createElement("div", {
					className: g.a.gildAnimationContainer
				}, a.a.createElement("div", {
					className: Object(d.a)(g.a.animationComponent, g.a.starburst),
					style: {
						backgroundImage: `url(${v})`
					}
				}), a.a.createElement("img", {
					alt: o,
					className: Object(d.a)(g.a.animationComponent, g.a.awardAsset),
					src: n
				}), a.a.createElement("div", {
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
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.GOVERNANCE_MAINNET_LAUNCH, e => o.a.createElement(c, {
				ignoreDefaultFocus: !0,
				withOverlay: !0,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-BurnPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
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
			Object(a.b)(i.a.CRYPTO_BURN_POINTS, e => o.a.createElement(c, null))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ConvertToCoinsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
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
			Object(a.b)(i.a.CONVERT_TO_COINS, e => o.a.createElement(c, null))
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
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
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
				E = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				y = n("./src/reddit/selectors/tooltip.ts"),
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
				S = Object(f.a)(),
				P = Object(l.c)({
					activeSaleConfig: E.a,
					activeTooltipId: y.a,
					coinPurchaseDropdownIsOpen: e => Object(y.b)(S)(e),
					isFreeAwardEventEnabled: E.g
				}),
				k = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === S ? Object(m.i)() : Object(m.f)({
							tooltipId: S
						}))
					}
				}),
				N = Object(c.b)(P, k);
			class M extends i.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							activeSaleConfig: n,
							coinPurchaseDropdownIsOpen: s,
							isFreeAwardEventEnabled: r,
							sendEvent: o,
							toggleTooltip: a
						} = this.props;
						if (!s) {
							Object(v.d)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
							const e = n ? p.a.CoinSale : r ? p.a.StorefrontFreeAward : void 0;
							o(Object(O.d)("get_coins_cta", e))
						}
						a(t)
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
					} = this.props, o = Object(d.a)(_.a.icon);
					return i.a.createElement("button", {
						className: Object(d.a)(t, _.a.ctaContainer),
						id: S,
						onClick: this.handleClick,
						"aria-label": "coin"
					}, i.a.createElement("div", {
						className: Object(d.a)(_.a.ctaContent)
					}, i.a.createElement(C.a, {
						name: "coins",
						className: o
					})), s && i.a.createElement(j, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: r,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: S
					}))
				}
			}
			t.a = N(Object(g.c)(M))
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
				hotPotatoLink: "_1o0rv7Kcd4-rywKyuwuS4d",
				hotPotatoIcon: "_3hPJyNn7eKE2V1QllrneKU",
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
				o = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/NavbarExp.ts"),
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
				const t = Object(s.useContext)(a.a) ? g : h;
				return r.a.createElement(t, {
					id: o.d
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
				swapAuthNavButtons: "_7VG2x81knsMK1KQ0w7xKy",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b",
				iconWrapper: "_2QpF1Fkq_rr2nvPL1no0nN"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, n) {
			e.exports = {
				centeredRow: "_30BbATRhFv3V83DHNDjJAO",
				container: "_2GyPfdsi-MbQFyHRECo9GO",
				navbarHeightContainer: "lNoTgmppXfHyXXS-3aRDj",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
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
				publicAccessNetworkIcon: "_3jFEC4X3IL9Zr-pzUzyCp7",
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
				o = n("./src/lib/pubsub/index.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === a.b.Popular,
				l = e => e && e.toLowerCase() === a.b.All,
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
					let t, n, o, i, m, {
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
					return d(p) ? (t = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), i = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : l(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/all", m = a.c[a.b.All]) : c(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, o = u(""), i = b.displayText, m = b.url, O = h && h.subscribersCount, v = h && h.currentlyViewingCount), {
						snooBackground: o,
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
				p = new o.a,
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
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
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
				var f, v, C, E, y, x, _, j, S, P, k, N, M, w, I, A, T;
				const R = Object(o.d)(),
					L = Object(m.a)(),
					[D, F, G] = function(e, t, n) {
						const [r, o] = Object(s.useState)(Object(u.r)(e, t) || 0), a = Object(s.useCallback)(() => {
							o(r + 1), Object(u.Db)(e, t, r + 1)
						}, []), i = Object(s.useCallback)(() => {
							n > 0 && (o(n), Object(u.Db)(e, t, n))
						}, []);
						return [r, a, i]
					}(g, n.notificationName, (null === (f = n.persistence) || void 0 === f ? void 0 : f.maxViews) || 0),
					[U, B] = Object(s.useState)(!1),
					[H, q] = Object(s.useState)(!1),
					V = Object(o.e)(e => ((e, t) => {
						var n;
						return !!(null === (n = h(e).dismissedBanners) || void 0 === n ? void 0 : n.find(e => e === t))
					})(e, n.notificationName));
				Object(s.useEffect)(() => {
					F(), t ? (L(Object(d.B)(n.notificationName)), L(Object(d.C)(n.notificationName))) : (L(Object(d.p)(n.notificationName)), L(Object(d.q)(n.notificationName)))
				}, []);
				const W = null === (v = null == n ? void 0 : n.persistence) || void 0 === v ? void 0 : v.maxViews;
				if (!n || W && D > W) return null;
				const z = !!(null == n ? void 0 : n.primaryCta),
					Q = !!(null == n ? void 0 : n.secondaryCta),
					K = !!(null == n ? void 0 : n.titleImage),
					Z = !!(null == n ? void 0 : n.thumbnailImageUrl),
					X = () => {
						var e;
						(null === (e = n.persistence) || void 0 === e ? void 0 : e.isDismissible) && (G(), R(Object(c.a)(n.notificationName)))
					},
					Y = {
						backgroundColor: U ? null === (C = null == n ? void 0 : n.primaryCta) || void 0 === C ? void 0 : C.colors.hoverHex : null === (E = null == n ? void 0 : n.primaryCta) || void 0 === E ? void 0 : E.colors.backgroundHex,
						color: null === (y = null == n ? void 0 : n.primaryCta) || void 0 === y ? void 0 : y.text.colorText,
						borderColor: null === (x = null == n ? void 0 : n.primaryCta) || void 0 === x ? void 0 : x.colors.borderHex
					},
					J = {
						backgroundColor: H ? null === (_ = null == n ? void 0 : n.secondaryCta) || void 0 === _ ? void 0 : _.colors.hoverHex : null === (j = null == n ? void 0 : n.secondaryCta) || void 0 === j ? void 0 : j.colors.backgroundHex,
						color: null === (S = null == n ? void 0 : n.secondaryCta) || void 0 === S ? void 0 : S.text.colorText,
						borderColor: null === (P = null == n ? void 0 : n.secondaryCta) || void 0 === P ? void 0 : P.colors.borderHex
					};
				return V ? null : r.a.createElement("div", {
					className: O.a.Wrapper,
					style: {
						backgroundImage: `url(${n.bodyBackgroundImage})`
					},
					onClick: e => {
						e.stopPropagation(), Object(i.e)(n.linkUrl, "_blank"), X(), L(t ? Object(d.A)(n.notificationName, d.b.BANNER) : Object(d.o)(n.notificationName, d.b.BANNER))
					}
				}, r.a.createElement("div", {
					className: O.a.Content
				}, r.a.createElement("div", {
					className: O.a.Heading
				}, K ? r.a.createElement("img", {
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
						color: null === (M = n.bodyText) || void 0 === M ? void 0 : M.colorText
					}
				}, null === (w = n.bodyText) || void 0 === w ? void 0 : w.text), Z && r.a.createElement("img", {
					src: n.thumbnailImageUrl,
					className: O.a.Thumbnail
				})), z || Q && r.a.createElement("div", {
					className: Object(a.a)(O.a.ActionButtons, {
						[O.a.noMargin]: Z
					})
				}, z && r.a.createElement(l.t, {
					text: null === (I = n.primaryCta) || void 0 === I ? void 0 : I.text.text,
					priority: l.c.Tertiary,
					size: l.d.XS,
					onClick: e => {
						var s;
						e.stopPropagation(), (null === (s = n.primaryCta) || void 0 === s ? void 0 : s.actionType) === b.a.GOTO && n.primaryCta.url && Object(i.e)(n.primaryCta.url, "_blank"), X(), L(t ? Object(d.A)(n.notificationName, d.b.CTA_1) : Object(d.o)(n.notificationName, d.b.CTA_1))
					},
					style: {
						...Y
					},
					onMouseEnter: () => B(!0),
					onMouseLeave: () => B(!1)
				}), Q && r.a.createElement(l.t, {
					text: null === (A = n.secondaryCta) || void 0 === A ? void 0 : A.text.text,
					priority: l.c.Plain,
					size: l.d.XS,
					className: O.a.SecondaryButton,
					onClick: e => {
						e.stopPropagation(), (null == n ? void 0 : n.secondaryCta) && (n.secondaryCta.actionType === b.a.GOTO && n.secondaryCta.url && Object(i.e)(n.secondaryCta.url, "_blank"), X(), L(t ? Object(d.A)(n.notificationName, d.b.CTA_2) : Object(d.o)(n.notificationName, d.b.CTA_2)))
					},
					style: {
						...J
					},
					onMouseEnter: () => q(!0),
					onMouseLeave: () => q(!1)
				}))), (null === (T = n.persistence) || void 0 === T ? void 0 : T.isDismissible) && r.a.createElement(l.t, {
					Icon: Object(p.b)("close_fill"),
					className: O.a.CloseButton,
					size: l.d.XXS,
					iconClassName: O.a.CloseButtonIcon,
					priority: l.c.Plain,
					onClick: e => {
						e.stopPropagation(), X(), L(t ? Object(d.A)(n.notificationName, d.b.DISMISS) : Object(d.o)(n.notificationName, d.b.DISMISS))
					}
				}))
			};
			t.a = e => {
				let {
					isFromMiniInbox: t
				} = e;
				const n = Object(o.e)(g),
					s = Object(o.e)(f.k);
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
				hotPotatoBanner: "_2oy7Xi4NUleUcHtb8YDZh7",
				bannerContainer: "V5Q75l1gWtGpBZEehJiGH",
				bannerDataContainer: "SIz6ozr7aqewYGVSLfSf6",
				bannerImage: "_2zetWw7f4W-0OWrUYJHPQ-"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return X
			})), n.d(t, "b", (function() {
				return ee
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/notifications/index.ts"),
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
			var E = e => {
				let {
					className: t,
					closeButtonText: n,
					closeIcon: s,
					descriptionText: r,
					primaryButtonText: a,
					titleText: i,
					onClose: l,
					onClick: d
				} = e;
				const u = Object(f.a)();
				return o.a.createElement("div", {
					className: Object(c.a)(C.a.banner, t)
				}, o.a.createElement("div", {
					className: C.a.bannerTitleContainer
				}, i && o.a.createElement("h4", {
					className: C.a.bannerTitle
				}, i), s && o.a.createElement(h.t, {
					onClick: e => {
						l && l(e), u(Object(g.r)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(v.b)("close_fill"),
					className: Object(c.a)(C.a.closeIcon, C.a.closeButton),
					size: h.d.XXS,
					priority: h.c.Plain
				})), r && o.a.createElement("p", {
					className: C.a.bannerDescription
				}, r), o.a.createElement("div", {
					className: C.a.bannerButtonsContainer
				}, a && o.a.createElement(h.t, {
					text: a,
					priority: h.c.Tertiary,
					className: Object(c.a)(C.a.button, C.a.primaryButton),
					size: h.d.XS,
					onClick: e => {
						d && d(e), u(Object(g.r)({
							dnPromptAction: "cta"
						}))
					}
				}), n && o.a.createElement(h.t, {
					text: n,
					onClick: e => {
						l && l(e), u(Object(g.r)({
							dnPromptAction: "refuse"
						}))
					},
					priority: h.c.Plain,
					size: h.d.XS,
					className: Object(c.a)(C.a.button, C.a.closeButton)
				})))
			};
			const y = e => {
				let {
					onClose: t,
					onTurnOnBrowserNotifications: n
				} = e;
				return o.a.createElement(E, {
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
				S = n.n(j);
			const P = 3;
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = o.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= P) {
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
						blockAwarder: a,
						index: i,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, p = i + 1 <= P;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.ref,
						className: S.a.notificationResizeWrapper
					}, o.a.createElement(x.a, {
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
						blockAwarder: a
					}), !!p && o.a.createElement(_.a, {
						onResize: this.handleResize
					})))
				}
			}
			var N = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				M = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = {},
				A = "",
				T = 0,
				R = "200px",
				L = "250px",
				D = "270px",
				F = 100,
				G = .5,
				U = 5,
				B = 50,
				H = 55;
			class q extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: I,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > T && this.props.setActiveOverflowMenuId(A)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: s
						} = this.props, r = t || n, o = window.innerHeight - B - 2 * H - (r ? F : 0);
						let a = 0;
						for (const i in e) a += e[i];
						return 0 === a ? r ? L : s ? R : D : (r && (a += F), o < a && (a = o + (r ? F : 0)), a)
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
						} = this.state, n = t + U, s = n > e.length ? n : e.length - 1;
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
							a = r.length > n + U;
						return (s && r.length > 0 && a ? r.slice(0, n + 1) : r).map((n, s) => o.a.createElement(k, w({}, e, {
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
							const e = r.length > this.state.currentNotificationCursorIndex + U;
							this.props.notifications.length > 0 && s && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: U
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
						setDesktopNotificationsPromptSeen: a,
						showBrowserNotificationsPermissionSettings: i
					} = this.props, c = !(!r || !r.length), l = this.getContainerHeight(), d = r.length > this.state.currentNotificationCursorIndex + U;
					return o.a.createElement("div", {
						className: S.a.notificationList,
						ref: this.container,
						style: c ? {
							height: l,
							maxHeight: l
						} : {
							minHeight: R
						}
					}, !s && o.a.createElement("div", {
						className: S.a.notificationBannerContainer
					}, t && o.a.createElement(y, {
						onTurnOnBrowserNotifications: i,
						onClose: a
					}), o.a.createElement(b.a, {
						isFromMiniInbox: !0
					})), !c && s && o.a.createElement(N.a, null), !c && !s && o.a.createElement(M.a, {
						inTooltip: !0
					}), c && this.renderNotifications(), n && c && !s && (e || d) && o.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: G
					}, o.a.createElement("div", null)))
				}
			}
			var V = n("./src/reddit/constants/localStorage.ts"),
				W = n("./src/reddit/controls/InternalLink/index.tsx"),
				z = n("./src/reddit/hooks/useLocalStorage.ts");
			var Q = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				K = n("./src/reddit/helpers/localStorage/index.ts");

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const X = [],
				Y = l.a.div("StyledDropdown", S.a),
				J = e => {
					let {
						isLoggedIn: t,
						onMessagesClick: n,
						onBarClick: a,
						markAllAsRead: i,
						messagesBadgeCount: l,
						sendInboxClickSettings: u
					} = e;
					const m = !!l,
						p = Object(r.useCallback)(() => {
							n(), a()
						}, [n, a]),
						b = Object(r.useCallback)(() => {
							u(), a()
						}, [u, a]);
					return o.a.createElement("nav", {
						className: S.a.topNav
					}, o.a.createElement("span", {
						className: S.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && o.a.createElement("span", {
						className: S.a.topNavLinks
					}, o.a.createElement("span", {
						className: S.a.messagesLinkContainer
					}, o.a.createElement(W.default, {
						className: Object(c.a)(S.a.messagesLink, {
							[S.a.mActive]: m
						}),
						onClick: p,
						to: m ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					}), o.a.createElement(d.a, {
						className: S.a.badgeCount,
						isActive: m,
						unreadCount: l
					}))), o.a.createElement("button", {
						className: S.a.navLink,
						onClick: i
					}, o.a.createElement(v.a, {
						name: "mark_read",
						className: S.a.icon
					})), o.a.createElement(W.default, {
						className: S.a.navLink,
						onClick: b,
						to: "/settings/notifications"
					}, o.a.createElement(v.a, {
						name: "settings",
						className: S.a.icon
					}))))
				},
				$ = e => o.a.createElement("div", {
					className: S.a.bottomBar
				}, o.a.createElement(W.default, {
					className: S.a.bottomLink,
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
							isHotPotatoEnabled: m,
							isInboxPolicyBannerEnabled: p,
							isLoggedIn: b,
							isPushNotificationsSupported: h,
							userId: v
						} = e,
						[O, C] = Object(Q.a)(v),
						[E, y] = function(e) {
							const [t, n] = Object(r.useState)(() => Object(K.u)(e));
							return [t, Object(r.useCallback)(() => {
								n(!0), Object(K.Eb)(e)
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
							key: V.b.HOT_POTATO_BANNER_SEEN,
							userId: v
						}),
						j = !(!d || !d.length),
						P = Object(a.a)(),
						k = P === i.a.Closed || P === i.a.Default || P === i.a.Denied,
						N = h && k && !O;
					return o.a.createElement(Y, null, o.a.createElement("div", {
						className: S.a.tooltipContainer
					}, o.a.createElement(J, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(g.h)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: l,
						onMessagesClick: () => {
							t(Object(g.w)({
								badgeCount: s,
								tab: g.f.Messages
							})), t(Object(g.i)()), n()
						},
						sendInboxClickSettings: () => t(Object(g.n)(g.c.MiniInbox)),
						onBarClick: u,
						isLoggedIn: b
					}), o.a.createElement(q, Z({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: C,
						isDNInboxPromptBannerEnabled: N,
						isInboxPrivacyPolicyBannerEnabled: p && !E,
						setInboxPrivacyPolicyBannerSeen: y,
						isHotPotatoEnabled: m && !x,
						setHotPotatoBannerSeen: _
					})), (j || c) && o.a.createElement($, {
						sendInboxClickSeeAll: () => t(Object(g.m)()),
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
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
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
				E = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/helpers/postCollection.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/reddit/models/Vote/index.ts"),
				P = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				k = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/telemetry.ts"),
				I = n("./src/reddit/contexts/Post/index.tsx"),
				A = n("./src/reddit/components/LightboxHeader/index.m.less"),
				T = n.n(A);
			const R = Object(i.c)({
					subreddit: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return null;
						const r = s || Object(N.o)(e, {
							page: n
						});
						return (null == r ? void 0 : r.belongsTo) ? Object(M.Q)(e, {
							identifier: r.belongsTo
						}) : null
					},
					post: N.o,
					joinOptimizationsLightboxHeaderEnabled: e => Object(P.a)(e) || Object(P.d)(e) || Object(P.c)(e),
					isVoteCountAnimation: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return !1;
						const r = n && Object(N.o)(e, {
							page: n
						}) || s;
						return !!r && Object(k.g)(e, {
							post: r
						})
					}
				}),
				L = Object(a.b)(R, (e, t) => {
					let {
						sendEvent: n
					} = t;
					return {
						close: () => {
							e(Object(m.a)(n, !0))
						},
						toggleVote: (t, n) => e(n === S.a.upvoted ? Object(u.jb)(t) : Object(u.v)(t))
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
				D = {
					[j.o.GIFVIDEO]: d.a.gif_post,
					[j.o.IMAGE]: d.a.image_post,
					[j.o.TEXT]: d.a.text_post,
					[j.o.RTJSON]: d.a.text_post,
					[j.o.VIDEO]: d.a.video_post,
					[j.o.EMBED]: d.a.embed,
					[j.o.LIVEVIDEO]: d.a.video_live,
					[j.o.GALLERY]: d.a.media_gallery,
					[j.o.LIVEAUDIO]: d.a.audio
				},
				F = e => D[(null == e ? void 0 : e.media) ? e.media.type : j.o.EMBED];
			class G extends o.a.Component {
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
								noun: (null == t ? void 0 : t.name) && Object(M.kb)(e, {
									identifier: {
										name: t.name,
										type: "subreddit"
									}
								}) ? "subscribe" : "unsubscribe",
								post: n ? w.K(e, n.id) : void 0,
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
						onVoteClick: a,
						page: i,
						post: d,
						useAdaptiveStyles: u,
						isVoteCountAnimation: m
					} = this.props, h = F(d), O = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Sb.META_MEMBERSHIP_PAYWALL_PAGE, E = d ? I.a : function(e) {
						let {
							children: t,
							postId: n
						} = e;
						return t
					};
					return o.a.createElement("div", {
						className: Object(c.a)(T.a.container, t, {
							[T.a.isCollection]: d && Object(y.a)(d),
							[T.a.adaptive]: u
						})
					}, o.a.createElement(E, {
						postId: null == d ? void 0 : d.id
					}, o.a.createElement("div", {
						className: T.a.postDetails
					}, d && o.a.createElement(r.Fragment, null, m && !u ? void 0 : o.a.createElement(p.a, {
						className: T.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: d,
						onVoteClick: a,
						redditStyle: !0
					}), o.a.createElement(x.a, {
						name: h,
						className: T.a.mediaIcon
					}), o.a.createElement(g.c, {
						className: T.a.postTitle,
						post: d,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : C.a.lightboxHeaderText,
						titleLinkClassName: T.a.postTitleLink
					}), o.a.createElement(b.a, {
						post: d,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && o.a.createElement(o.a.Fragment, null, o.a.createElement(_.a, {
						className: T.a.srIcon
					}), o.a.createElement(f.a, {
						to: this.props.subreddit.url,
						className: T.a.subredditName
					}, this.props.subreddit.name))), O && i && i.urlParams.subredditName && o.a.createElement("div", {
						className: T.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), o.a.createElement("div", {
						className: T.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && o.a.createElement(v.a, {
						className: Object(c.a)(T.a.SubscribeButton, {
							[T.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: this.handleSubscribeButtonClick,
						small: !0
					}), !this.props.hideCloseButton && o.a.createElement(U, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const U = o.a.memo(e => o.a.createElement(E.t, {
				className: T.a.CloseButton,
				size: E.d.XS,
				onClick: e.onClick,
				priority: E.c.Plain,
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
			t.a = Object(O.c)(L(G))
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(r.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
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
				o = n("./src/reddit/components/NotificationUnit/index.m.less"),
				a = n.n(o);
			const i = () => r.a.createElement("li", {
					className: a.a.placeholderWrapper
				}, r.a.createElement("span", {
					className: a.a.placeholderAvatar
				}), r.a.createElement("span", {
					className: a.a.placeholderContent
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
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_INACTIVITY_MODAL, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/PostFlowUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.POST_FLOW_UPSELL_MODAL_ID, e => o.a.createElement(c, {
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
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const d = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PremiumPurchaseModal"), n.e("PremiumPurchaseModal")]).then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(l.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(o.a)({
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
		"./src/reddit/components/RecapGame/index.banana.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_3YGVu7VOHOQjmcKEvnnKy",
				img: "_1-tRk0M55julmEhf9bnnfe"
			}
		},
		"./src/reddit/components/RecapGame/index.m.less": function(e, t, n) {
			e.exports = {
				gameWrapper: "_1_YyUS3sbPzkPOkzhXb0Bl",
				recapModal: "_21Db_ASsopNZ3VTZtCovpO",
				recapModalClose: "_3ODVd8KqTGBoNTuR76h_QL",
				closeIcon: "_1cVpHFE91qtzVm85gZMEeS",
				recapModalInner: "_2YnSZRPv7AZ-a55EDasXdC",
				recapModalText: "_180UJgqRSBQW6C2_1L05LP",
				red: "_14HTi9Z5fA9FmS5LQE4pJj",
				recapModalEndText: "_266fsXW9irZyXQR99x3L0d",
				recapModalSnoo: "ZgfEyA0nIEcUi0bCNFeYt",
				end: "_25gIzEs5idbqVDHUtXRl8T",
				recapModalButton: "_3IZU5rgSRVWGfdkEvRae0j",
				recapModalScore: "_33jWiq9zBdG5K_KdKUVs3s",
				recapModalScoreTitle: "_1gdr0pQ5G9SDBt8OzopWSd",
				recapModalScoreValue: "_17jEiPFI8l9ywFSusUYV0C",
				controls: "_1Og6MguA1ZHm6pAsI9mXsK"
			}
		},
		"./src/reddit/components/RecapGame/index.navbar.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3e4dfZYayy-758ojKno9hM",
				loggedIn: "_1qHs2_HkZuQQtmEi15VoHn",
				recapLeadUpGameLink: "_3DMSA0AgiHoLE2bdecVoX3",
				recapLeadUpGameIcon: "_4q-DzCQAmXCdp9brnZeFX"
			}
		},
		"./src/reddit/components/RecapGame/index.scoreboard.m.less": function(e, t, n) {
			e.exports = {
				score: "KzCKBKIM-8HOMkcOQnjnC",
				timer: "_1BQXJ1BNEsxxrVh-C58z7B",
				scoreboard: "_4YtR3Z1OLvONYQ4N6iAso",
				scoreboardwrapper: "_2cp9kv8c5YWmjdHqlgSm9p"
			}
		},
		"./src/reddit/components/RecapGame/index.snoo.m.less": function(e, t, n) {
			e.exports = {
				snoo: "_1Nv5-fUNZeW0ugJMAqP1Ua",
				snooimg: "_2K275U5PdnFZ7O8m3t3O7s"
			}
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
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
				const e = Object(a.d)();
				return Object(r.useEffect)(() => {
					e(Object(i.a)())
				}, []), Object(a.e)(e => Object(c.b)(e) || Object(l.P)(e) || Object(l.O)(e)) ? o.a.createElement(d, null) : null
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
		"./src/reddit/components/SubredditCreationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
			Object(a.b)(i.a.SUBREDDIT_CREATION_MODAL_ID, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				r = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", o.a);
			t.a = a
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
				o = n.n(r),
				a = n("./src/reddit/controls/Button/index.tsx"),
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
			const m = (e, t, n) => null != n ? n : t ? e : a.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: s,
						...r
					} = e;
					return o.a.createElement(a.t, u({}, r, {
						priority: m(a.c.Primary, t, n),
						className: Object(d.a)(r.className, l.a.BaseButton),
						size: s ? a.d.S : a.d.M
					}))
				},
				b = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
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
					return o.a.createElement(a.t, u({}, i, {
						priority: m(a.c.Secondary, n, s),
						className: Object(d.a)(i.className, l.a.BaseButton),
						size: r ? a.d.S : a.d.M,
						text: b(t)
					}))
				};
			class g extends o.a.Component {
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
						isFullWidth: a = !1,
						style: c
					} = this.props, l = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
						isFullWidth: a,
						style: c
					};
					return this.props.userIsSubscriber ? o.a.createElement(h, u({}, l, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(p, u({}, l, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = e => {
					let {
						type: t,
						key: n
					} = e;
					return o[r({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(o.a))
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return M
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return A
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				a = n("./node_modules/lodash/shuffle.js"),
				i = n.n(a),
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
						o = r.find(t => t.experimentName === e.experimentName);
					o && n({
						...e,
						steps: o.steps
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
					const o = v.q(e, t);
					return o ? {
						experiment_name: o.name,
						experiment_variant: o.variant,
						experiment_version: o.version
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
				E = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...v.o(n),
					survey: O(n, e)
				}),
				y = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: r,
						questionId: o,
						questionParentId: a,
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
							question_id: o,
							parent_question_id: a,
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
						type: o,
						questionId: a,
						questionParentId: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "freeform_text",
						...v.o(e),
						survey: {
							question: s,
							type: C(o),
							text: r,
							question_id: a,
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
						type: o,
						questionId: a,
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
							type: C(o),
							min: 0,
							max: c,
							text: l,
							question: s,
							score: r,
							question_id: a,
							parent_question_id: i,
							...O(e, n)
						}
					})
				};
			var j = n("./src/reddit/hooks/useGqlContext.ts"),
				S = n("./src/reddit/hooks/useTracking.ts"),
				P = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/experiments/index.ts"),
				N = n("./src/reddit/selectors/user.ts");
			const M = () => {
					const e = Object(l.d)(),
						t = Object(j.a)(),
						[n, s] = Object(c.useState)(null),
						r = Object(S.a)(),
						a = Object(l.e)(N.k),
						i = Object(l.e)(N.Hb),
						u = Object(l.e)(k.a, o.a),
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
						y = Object(c.useCallback)(e => {
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
								return void(n && b(n, t, y))
							}
							const s = Object(h.e)({
								triggerName: e,
								surveyExperimentVariants: C,
								samplingId: a || i,
								isSampleFactorEnabled: v,
								surveyName: O
							});
							if (!s || s.experimentName === (null == n ? void 0 : n.experimentName)) return;
							const r = C[s.experimentName];
							(null == r ? void 0 : r.variant) && s.variants.find(e => e.variantName === r.variant) && b(s, t, y)
						}, [n, C, a, i, v, m, p, g, O, y, t]);
					return Object(c.useEffect)(() => {
						const e = Object(h.c)(),
							t = e.subscribe(x);
						return () => e.unsubscribe(t)
					}, [x]), Object(c.useEffect)(() => {
						if (!n) return;
						const t = Date.now();
						Object(h.j)(n, t), e(Object(d.J)({
							surveyLastSeenTime: t
						}, !1)), r(E(n.experimentName, "display"))
					}, [n, e, r]), {
						activeSurvey: n,
						setActiveSurvey: s
					}
				},
				w = e => {
					let {
						activeStepNum: t,
						activeSurvey: n,
						isFollowUp: r,
						textResponse: o,
						setTextResponse: a,
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
						textResponse: o
					});
					const [d, u] = Object(c.useState)(!1), m = Object(S.a)(), p = n.experimentName, b = n.steps[t], h = null == b ? void 0 : b.type, f = null == b ? void 0 : b.question, v = Object(c.useCallback)(() => {
						t >= 0 ? u(!0) : (i(!0), m(E(n.experimentName, "dismiss")))
					}, [t, n, m, i]), O = Object(c.useCallback)(() => {
						a(""), i(!0);
						const e = {
							question: f,
							experimentName: p,
							type: h,
							action: "dismiss",
							questionId: l.toString(),
							questionParentId: b.type === g.a.MULTI_CHOICE && r ? `${l-1}` : null
						};
						m(r ? x(e) : b.type === g.a.MULTI_CHOICE ? _(e) : y(e))
					}, [p, r, f, b, m, i, a, h, l]);
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
						setTextResponse: o,
						textResponse: a
					} = e;
					const [l, d] = Object(c.useState)(-1), [u, m] = Object(c.useState)(0), [p, b] = Object(c.useState)(!1), h = Object(S.a)(), [f, v] = Object(c.useState)(""), [O, C] = Object(c.useState)([]), j = Object(c.useCallback)(() => {
						var e, c;
						const O = t.experimentName,
							j = t.steps[l],
							S = null == j ? void 0 : j.type,
							P = null == j ? void 0 : j.question,
							k = null == j ? void 0 : j.followUpQuestion,
							N = t.steps[l + 1],
							M = null == N ? void 0 : N.type,
							w = null == N ? void 0 : N.question;
						if (m(u + 1), N && N.questionOptions && C(i()(N.questionOptions)), -1 === l) {
							h(E(O, "agree")), d(0);
							const e = {
								question: w,
								type: M,
								action: "display",
								experimentName: O,
								questionId: `${u+1}`.toString(),
								questionParentId: null
							};
							return void h(M === g.a.MULTI_CHOICE ? _({
								text: f,
								...e
							}) : y(e))
						}
						const I = {
							experimentName: O,
							type: S,
							action: "submit",
							questionId: u.toString(),
							questionParentId: j.type === g.a.MULTI_CHOICE && p ? `${u-1}` : null
						};
						if (h(p ? x({
								text: a,
								question: k,
								...I
							}) : S === g.a.MULTI_CHOICE ? _({
								question: P,
								max: null === (e = j.questionOptions) || void 0 === e ? void 0 : e.length,
								score: null === (c = j.questionOptions) || void 0 === c ? void 0 : c.findIndex(e => e === f),
								text: f,
								...I
							}) : y({
								question: P,
								score: n && n + (S === g.a.NPS ? 0 : 1),
								...I
							})), r(void 0), o(""), v(""), p || !k)
							if (b(!1), l + 1 >= t.steps.length) s(!0);
							else {
								d(l + 1);
								const e = {
									experimentName: O,
									action: "display",
									type: M,
									question: w,
									questionId: (u + 1).toString()
								};
								h(M === g.a.MULTI_CHOICE ? _({
									text: f,
									...e
								}) : y(e))
							}
						else b(!0), h(x({
							experimentName: O,
							action: "display",
							type: S,
							question: k,
							questionId: `${u+1}`,
							questionParentId: u.toString()
						}))
					}, [f, v, l, t, p, a, n, h, s, r, o, u]);
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
				A = e => {
					let {
						isSurveyDismissed: t,
						setIsSurveyDismissed: n,
						setActiveStepNum: r,
						setActiveSurvey: o,
						setUIStep: a,
						setIsFollowUp: i,
						shouldMount: d,
						uiStep: p
					} = e;
					const b = Object(l.d)();
					Object(c.useEffect)(() => {
						t && !d && setTimeout(() => {
							r(-1), a(0), i(!1), o(null), b(Object(u.g)("")), p > 1 && b(Object(m.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: P.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [b, t, d, p, n, r, o, a, i])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/Survey/hooks.ts");
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
				} = Object(a.d)();
				return e ? o.a.createElement(i, {
					activeSurvey: e,
					setActiveSurvey: t
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
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
			class O extends o.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return o.a.createElement(g.e, {
						theme: n,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const C = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
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
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, r, o, a, i, c, l, d, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: l,
						isCommentsPage: p,
						isOverlay: d
					},
					h = o && o.length && !Object(f.a)(o) ? `subredditvars-r-${o.toLocaleLowerCase()}` : g.c;
				if (t && n && r) {
					const e = Object(u.h)(n, r);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(m.i)(e, b)
					}
				}
				if (a) {
					const e = Object(u.h)(a);
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
			const E = Object(l.v)()(C)
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
				return o
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
				o = Object(s.a)({
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
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
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
				f = Object(a.b)(g);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: r,
					wrapperClassName: a,
					...i
				} = e, l = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return o.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, l ? o.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : o.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && o.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledVoteIcon: "mvlZFfW9BWm1bmljE_0Rg"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				m = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				f = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				v = n("./src/reddit/components/VerticalVotes/index.m.less"),
				O = n.n(v);
			const C = Object(i.c)({
					isNightMode: g.fb,
					isAnimatingUpvotePostId: h.k
				}),
				E = Object(a.b)(C),
				y = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				x = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: b.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.upvoted), this.setState({
							voted: e !== b.a.upvoted ? b.a.upvoted : b.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.downvoted), this.setState({
							voted: e !== b.a.downvoted ? b.a.downvoted : b.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isCountAnimShadowTestEnabled: n,
							isNightMode: r,
							isAnimatingUpvotePostId: a,
							shouldShowUpvoteRatioOnHover: i,
							isVoteCountAnimation: l,
							shouldShowScore: p = !0,
							upvoteButtonClassName: h,
							containerRef: g,
							model: v,
							postId: C
						} = e,
						E = y(e),
						_ = x(e),
						j = v.voteState,
						S = a === C;
					return o.a.createElement("div", {
						className: Object(c.a)(O.a.votesContainer, e.className),
						id: `vote-arrows-${v.id}`,
						ref: g
					}, E ? o.a.createElement(m.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": j === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": f.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: r,
						onClick: this.onUpvote,
						voteState: j
					}) : o.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": j === b.a.upvoted,
						className: Object(c.a)(d.n, h, {
							[O.a.bounceUp]: S
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": f.b.UPVOTE,
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: j
					})), !e.compact && p && o.a.createElement(u.a, {
						className: Object(c.a)(O.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: j,
						shouldShowUpvoteRatioOnHover: i,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!l,
						isCountAnimShadowTestEnabled: !!n,
						postId: C
					}), _ ? o.a.createElement(m.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": j === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": f.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: r,
						onClick: this.onDownvote,
						voteState: j
					}) : o.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": j === b.a.downvoted,
						className: Object(c.a)(d.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": f.b.DOWNVOTE
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: j
					})))
				}
			}
			const j = Object(l.a)(E(_));
			t.a = j
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: a.kb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(o.d([n], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([n], !1))
				}
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, r, o, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "d", (function() {
					return o
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/", e.Onboarding = "/account/onboarding/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(r || (r = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(o || (o = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(a || (a = {}))
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = "reddit",
				r = "reddit.ready",
				o = "reddit.urlChanged"
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
				o = n.n(r);
			t.a = o.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js");
			const a = o.createContext({
				showPromo: r.a,
				dismissPromo: r.a,
				completePromo: r.a,
				promos: new Map
			});
			t.a = a
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
				o = n("./src/reddit/constants/featureThrottling.ts"),
				a = n("./src/reddit/helpers/featureThrottling/store/index.ts");
			const i = {
					isThrottled: !1,
					resetFeature: () => {
						throw new Error("Component attempted to reset feature with no ThrottlingContext")
					},
					throttleFeature: () => {
						throw new Error("Component attempted to throttle feature with no ThrottlingContext")
					}
				},
				c = Object.keys(o.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class l extends r.a.Component {
				constructor(e) {
					super(e), this.onThrottlingDataChange = (e, t) => {
						if (t) {
							const e = a.a.isFeatureThrottled(t);
							this.setState(n => e === n[t].isThrottled ? null : {
								...n,
								[t]: {
									...n[t],
									isThrottled: e
								}
							})
						} else this.setState(e => {
							const t = Object.keys(o.a).reduce((t, n) => (a.a.isFeatureThrottled(n) && (t[n] = {
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
					}, this.state = Object.keys(o.a).reduce((e, t) => (e[t] = {
						isThrottled: !1,
						resetFeature: a.a.resetFeature.bind(a.a, t),
						throttleFeature: a.a.throttleFeature.bind(a.a, t)
					}, e), {})
				}
				componentDidMount() {
					a.a.subscribe(this.onThrottlingDataChange)
				}
				componentWilUnmount() {
					a.a.unsubscribe(this.onThrottlingDataChange)
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(c);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(o.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, r.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? r.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : r.a.createElement(a.a, {
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
				o = n.n(r);
			t.a = s.a.a("link", o.a)
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
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Typography/index.m.less"),
				o = n.n(r);
			s.a.h1("heading1", o.a), s.a.h2("heading2", o.a), s.a.h3("heading3", o.a), s.a.h4("heading4", o.a);
			const a = s.a.h5("heading5", o.a),
				i = (s.a.h6("heading6", o.a), s.a.p("body1", o.a), s.a.p("body2", o.a)),
				c = (s.a.p("actionFont", o.a), s.a.p("metadata", o.a));
			s.a.p("metadata3", o.a)
		},
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./src/lib/constants/index.ts"), n("./src/lib/makeApiRequest/index.ts");
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = (n("./src/lib/omitHeaders/index.ts"), n("./src/redditGQL/operations/ClaimAwardOffer.json")),
				o = n("./src/redditGQL/operations/FetchSpecialEvents.json");
			n("./src/reddit/constants/headers.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/endpoints/gold/purchase.ts");
			const a = e => Object(s.a)(e, {
					...o
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
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
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
						correlationId: o,
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
							correlation_id: o
						},
						g = `${n.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(l.a)(g);
					return Object(r.a)(Object(a.a)(n, [c.a]), {
						method: s.ob.POST,
						endpoint: f,
						data: h
					}).then(m)
				}, b = async e => {
					let {
						coins: t,
						context: n,
						correlationId: o,
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
					} = i, E = {
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
						correlation_id: o
					}, y = `${n.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, x = d ? y : Object(l.a)(y);
					return Object(r.a)(Object(a.a)(n, [c.a]), {
						method: s.ob.POST,
						endpoint: x,
						data: E
					}).then(m)
				}, h = async e => {
					let {
						context: t,
						correlationId: n,
						gildParams: o,
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
					} = o, O = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: g,
						message: v ? v.trim() : "",
						is_anonymous: f,
						pennies: d,
						remember_card: u,
						card_id: h,
						correlation_id: n
					}, C = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, E = i ? C : Object(l.a)(C);
					return Object(r.a)(Object(a.a)(t, [c.a]), {
						method: s.ob.POST,
						endpoint: E,
						data: O
					}).then(m)
				}, g = async e => {
					let {
						context: t,
						correlationId: n,
						pennies: o,
						token: i
					} = e;
					const d = {
							token: i.id,
							pennies: o,
							correlation_id: n
						},
						u = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(l.a)(u);
					return Object(r.a)(Object(a.a)(t, [c.a]), {
						method: s.ob.POST,
						endpoint: p,
						data: d
					}).then(m)
				}, f = "paymentInfoUpdated", v = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, s = new URLSearchParams({
						[f]: "true"
					}), r = await Object(o.a)(e, {
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
				return o
			}));
			const s = ["true", "1"],
				r = e => {
					var t;
					return s.includes(null !== (t = new URLSearchParams(e).get("livechat_embed")) && void 0 !== t ? t : "")
				},
				o = e => {
					var t;
					return s.includes(null !== (t = e.queryParams.livechat_embed) && void 0 !== t ? t : "")
				}
		},
		"./src/reddit/helpers/counters/loggedOutOneFeed.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/telemetry/helpers/sendCounter.ts");
			const o = (e, t) => {
					Object(r.b)(s.o.Redesign, {
						type: r.a.FrontPageFailed,
						data: {
							errorType: e,
							pageType: t
						}
					})
				},
				a = e => {
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
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/sample/index.ts"),
				o = n("./src/telemetry/helpers/sendCounter.ts");
			const a = () => !1;
			var i;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(i || (i = {}));
			const c = e => {
					a() || Object(o.b)(s.o.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				l = e => {
					!a() && e && Object(r.b)(10) && Object(o.b)(s.o.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: i.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} = e;
				return t && n && s && r ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/datadome.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s, r = n("./src/lib/constants/index.ts");
			! function(e) {
				e.Enabled = "datadome-bot-detection.enabled", e.Disabled = "datadome-bot-detection.disabled"
			}(s || (s = {}));
			const o = () => a() ? s.Enabled : s.Disabled,
				a = () => null !== document.getElementById(r.D)
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
				o = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");

			function d(e) {
				return Object(i.U)(e, {}) === o.g.Large && !Object(l.R)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: r.Td
				})
			}

			function m(e) {
				switch (e) {
					case r.Ud.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case r.Ud.Enabled:
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
				let r, o, a, i, c, l, d, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (o = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, l = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = s.a.PrivateSubreddit, a = e.subredditDescription, d = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = s.a.GoldSubreddit : e.subredditBanned ? (o = s.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? o = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? o = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (o = s.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (o = s.a.Nsfw), o && n ? {
					banMessage: r,
					contentGateType: o,
					isContributorRequestsDisabled: d,
					isContributorRequestTimestamp: u,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: l,
					interstitialWarningMessage: m,
					interstitialWarningMessageHtml: p,
					interstitialWarningMessageRTJson: b
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
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
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
						className: Object(a.a)(l.a.icon, {
							[l.a.isLit]: e
						})
					}), r.a.createElement(c, {
						className: l.a.body
					}), d && r.a.createElement("div", {
						className: l.a.metaContainer
					}, d));
				return n ? e => r.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? r.a.createElement(o.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : r.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.button),
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
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(r.p)(e);
					return {
						actionInfo: Object(o.d)(e),
						post: t && Object(o.K)(e, t) || null,
						profile: Object(o.T)(e),
						screen: Object(o.cb)(e),
						subreddit: Object(o.kb)(e)
					}
				},
				i = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "login",
					...a(t)
				}),
				c = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "signup",
					...a(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: s.c.CLICK,
					noun: "login_signup",
					...a(e)
				})
		},
		"./src/reddit/helpers/trackers/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
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
				o = () => e => ({
					source: "banner",
					action: "view",
					noun: "lang_listing_site"
				}),
				a = () => e => ({
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
				return o
			})), n.d(t, "d", (function() {
				return a
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
				o = e => t => ({
					...r(e, t),
					action: "click",
					noun: "delete"
				}),
				a = e => t => ({
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
		"./src/reddit/helpers/trackers/features/recapGame.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
					source: "nav",
					action: "click",
					noun: "recap",
					...s.o(e)
				}),
				o = () => e => ({
					source: "recap",
					action: "click",
					noun: "game_intro",
					...s.o(e)
				}),
				a = () => e => ({
					source: "recap",
					action: "view",
					noun: "game_start",
					...s.o(e)
				}),
				i = () => e => ({
					source: "recap",
					action: "click",
					noun: "game_dismiss",
					...s.o(e)
				}),
				c = () => e => ({
					source: "recap",
					action: "view",
					noun: "game_complete",
					...s.o(e)
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
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						...Object(r.h)(e, t),
						correlationId: Object(s.d)(s.a.GoldPayment, !1),
						profile: o.T(e),
						subreddit: o.kb(e)
					}
				},
				c = (e, t) => n => ({
					source: a,
					action: "click",
					noun: e,
					...i(n, {
						offerContext: t
					})
				}),
				l = e => t => ({
					source: a,
					action: "click",
					noun: "coins_package",
					...i(t, {
						packageId: e
					})
				}),
				d = () => e => ({
					source: a,
					action: "click",
					noun: "premium",
					...i(e)
				}),
				u = () => e => ({
					source: a,
					action: "click",
					noun: "free_award_offer",
					...i(e)
				}),
				m = e => t => ({
					source: a,
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
				o = n("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
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
					const n = Object(a.V)(e, {
						postId: t
					});
					return n ? {
						isMod: Object(o.c)(e, {
							subredditId: n.id
						})
					} : {}
				},
				u = (e, t) => {
					const n = Object(a.V)(e, {
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
						o = Object(r.b)(e).indexOf(t),
						a = Object(r.c)(e),
						i = a.indexOf(t),
						l = -1 !== i;
					return {
						reason: l ? "recommended" : "popular",
						position: l ? i + 1 : a.length + o + 1,
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
		"./src/reddit/helpers/trackers/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(r.o)(e),
					action: s.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				a = () => e => ({
					...Object(r.o)(e),
					action: s.c.CLICK,
					noun: "hot_potato",
					source: "nav"
				})
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
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
			const o = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				a = () => e => ({
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
				d = (e, t, n) => o => {
					const a = Object(s.a)(o).id;
					return {
						...Object(r.o)(o),
						source: e,
						action: t,
						noun: n,
						goldPurchase: {
							offerContext: a
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
				return E
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "s", (function() {
				return _
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "w", (function() {
				return S
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "E", (function() {
				return k
			})), n.d(t, "B", (function() {
				return N
			})), n.d(t, "D", (function() {
				return M
			})), n.d(t, "C", (function() {
				return w
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "m", (function() {
				return A
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "J", (function() {
				return U
			})), n.d(t, "I", (function() {
				return B
			})), n.d(t, "L", (function() {
				return H
			})), n.d(t, "K", (function() {
				return q
			})), n.d(t, "M", (function() {
				return V
			})), n.d(t, "H", (function() {
				return W
			})), n.d(t, "G", (function() {
				return z
			})), n.d(t, "F", (function() {
				return Q
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.ONBOARDING_LANGUAGE_SELECTION = "onboarding_language_collection", e.SETTINGS_LANGUAGE_COLLECTION = "settings_language_collection", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
					return t => ({
						...Object(r.o)(t),
						action: s.c.CLICK,
						noun: i.EXIT,
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: a
					})
				},
				l = () => e => ({
					...Object(r.o)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				d = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(r.o)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = e => t => ({
					...Object(r.o)(t),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				g = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				f = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				v = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				O = (e, t) => n => ({
					...Object(r.o)(n),
					source: a,
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
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				E = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				y = e => t => ({
					...Object(r.o)(t),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				x = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				_ = (e, t, n, o, c) => l => ({
					...Object(r.o)(l),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(l),
						reason: c
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: T(n),
						categoryId: o
					}
				}),
				j = (e, t, n, o, c, l) => d => ({
					...Object(r.o)(d),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(d),
						reason: l
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: T(t),
						categoryId: n,
						subredditName: o,
						subredditId: c
					}
				}),
				S = (e, t, n) => o => ({
					...Object(r.o)(o),
					source: a,
					action: n ? s.c.SELECT : s.c.DESELECT,
					noun: i.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(o),
						reason: t,
						type: e
					}
				}),
				P = (e, t) => n => ({
					...Object(r.o)(n),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: T(e),
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
				M = (e, t) => n => ({
					...Object(r.o)(n),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: T(e),
						categoryId: t
					}
				}),
				w = () => e => ({
					...Object(r.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				I = (e, t, n, o) => c => ({
					...Object(r.o)(c),
					source: a,
					action: s.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					actionInfo: {
						...Object(r.d)(c),
						reason: o
					},
					onboarding: {
						categoryName: T(t),
						categoryId: n
					}
				}),
				A = (e, t, n, o, c) => l => ({
					...Object(r.o)(l),
					source: a,
					action: s.c.VIEW,
					actionInfo: {
						...Object(r.d)(l),
						reason: c
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: T(e),
						categoryId: n,
						subredditName: t,
						subredditId: o
					}
				}),
				T = e => e.toLowerCase().replace(new RegExp("&", "g"), "and").replace(new RegExp(" ", "g"), "_").replace(new RegExp("[^-_a-z0-9]", "g"), "");
			var R, L, D;
			! function(e) {
				e.CONTINUE = "continue", e.LOGIN_ANOTHER_ACCOUNT = "login_another_account"
			}(R || (R = {})),
			function(e) {
				e.CHANGE_USERNAME = "change_username", e.KEEP_USERNAME = "keep_username"
			}(L || (L = {})),
			function(e) {
				e.GO_BACK = "go_back", e.YES_KEEP_USERNAME = "yes_keep_username"
			}(D || (D = {}));
			const F = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				G = e => t => ({
					...Object(r.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				U = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				B = e => t => ({
					...Object(r.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				H = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				q = e => t => ({
					...Object(r.o)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				V = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_TOOLTIP,
					source: a
				}),
				W = e => t => ({
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
				Q = (e, t, n) => o => ({
					...Object(r.o)(o),
					source: "settings",
					action: n ? s.c.SELECT : s.c.DESELECT,
					noun: i.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(r.d)(o),
						reason: t,
						type: e
					}
				})
		},
		"./src/reddit/helpers/trackers/recap.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return o
			})), n.d(t, "q", (function() {
				return a
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
				return E
			})), n.d(t, "m", (function() {
				return y
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = "recap",
				o = () => e => ({
					...s.o(e),
					source: r,
					action: "view",
					noun: "recap",
					recap: s.Y(e)
				}),
				a = () => e => ({
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
				O = (e, t, n) => o => ({
					...s.o(o),
					source: r,
					action: "click",
					noun: `${e?"subscribe":"unsubscribe"}`,
					recap: s.Y(o),
					subreddit: {
						id: n,
						name: t
					}
				}),
				C = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "recap",
					recap: s.Y(e)
				}),
				E = () => e => ({
					...s.o(e),
					source: r,
					action: "click",
					noun: "dismiss",
					recap: s.Y(e)
				}),
				y = () => e => ({
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
				return E
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "c", (function() {
				return P
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				o = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: s.K(n, t)
				}),
				a = (e, t) => n => ({
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
				l = e => o("enter_open_post", e),
				d = e => a("enter_comment_collapse", e),
				u = e => o("j_next", e),
				m = e => a("j_next", e),
				p = e => o("k_previous", e),
				b = e => a("k_previous", e),
				h = e => o("n_next", e),
				g = e => o("p_previous", e),
				f = e => o("s_save", e),
				v = e => a("s_save", e),
				O = e => o("h_hide", e),
				C = e => o("x_expando", e),
				E = e => o("a_upvote", e),
				y = e => a("a_upvote", e),
				x = e => o("z_downvote", e),
				_ = e => a("z_downvote", e),
				j = r("c_create_post"),
				S = e => o("l_go_to_link", e),
				P = e => a("r_comment", e);
			r("q_navigation")
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "o", (function() {
				return N
			}));
			var s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				r = n("./src/reddit/selectors/avatarMarketing.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				c = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.o(t)
					};
					return Object(r.a)(t) && Object.assign(n, i), n
				},
				l = (e, t) => n => {
					const {
						id: s
					} = Object(a.Cb)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...o.o(n),
						snoovatar: {
							userGenerated: s
						}
					}
				},
				d = e => ({
					...o.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: o.ib(e)
				}),
				u = e => ({
					...o.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.ib(e)
				}),
				m = e => ({
					...o.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.ib(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.o(e),
					...i
				}),
				b = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...o.o(e),
					...i
				}),
				h = e => t => ({
					...o.o(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				g = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...o.o(n),
					snoovatar: o.ib(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				f = g("view"),
				v = g("click"),
				O = g("dismiss"),
				C = (e, t, n) => () => s => ({
					source: e,
					action: t,
					noun: n,
					...o.o(s),
					snoovatar: o.ib(s)
				}),
				E = C("anniversary_achievement", "view", "anniversary_achievement"),
				y = C("anniversary_achievement", "click", "close"),
				x = C("anniversary_achievement", "click", "equip"),
				_ = e => () => t => ({
					...o.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				j = _("view"),
				S = _("click"),
				P = (e, t, n) => s => ({
					source: e,
					action: t,
					noun: n,
					...o.o(s),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: o.ib(s)
				}),
				k = e => P("onboarding", "click", e),
				N = () => P("avatar", "view", "onboarding")
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
				o = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: r.cb(e),
					profile: r.T(e),
					subreddit: r.kb(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...a(t)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? r.v(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...a(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				u = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				p = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(o.Cb)(t, {
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
						id: Object(o.Cb)(t, {
							userName: e
						}).id
					},
					...r.o(t)
				}),
				h = () => e => ({
					...a(e),
					source: "nav",
					action: "click",
					noun: "recap"
				})
		},
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(s.useState)(Object(r.t)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(r.ub)(e)
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: Object(o.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", l.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a)
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(a);

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
					className: Object(o.a)(i.a.checkbox, t)
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

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
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
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, r.a.createElement("g", null, r.a.createElement("circle", {
				fill: o.a.snoo,
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
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o(e) {
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
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(o.a)(e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: e.color || Object(i.a)(e).bodyText
			}, r.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), r.a.createElement("circle", {
				fill: a.a.snoo,
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
				o = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./node_modules/@reddit/google-tag-manager/compiled.js"),
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
				const o = s();
				if (Object(v.b)(t)) {
					const e = (null === (r = Object(O.m)(o)) || void 0 === r ? void 0 : r.displayText) || "";
					if (Object(v.c)(t, Object(v.a)(e))) return
				} else if (Object(f.a)(t)) return;
				n((e => ({
					payload: e,
					type: g.f
				}))(e))
			}, E = Object(h.a)(g.e), y = e => ({
				payload: {
					subreddits: e
				},
				type: g.b
			}), x = e => ({
				payload: e,
				type: g.a
			});
			var _ = n("./src/reddit/constants/experiments.ts");
			var j = n("./node_modules/redux-thunk/es/index.js"),
				S = n("./node_modules/request-idle-callback/index.js"),
				P = n("./src/lib/browser/isIncognito.ts"),
				k = n("./src/lib/constants/index.ts"),
				N = n("./src/lib/extractQueryParams/index.ts"),
				M = n("./src/lib/filterQueryParams/index.ts"),
				w = n("./src/lib/getParsedUserAgent/index.ts"),
				I = n("./src/lib/initializeClient/index.tsx"),
				A = n("./src/lib/loadableAction/index.ts"),
				T = n("./src/lib/matchRoute/index.ts"),
				R = n("./src/lib/performance.js"),
				L = n("./src/lib/reCaptchaEnterprise/index.ts"),
				D = n("./src/lib/safeJSONParse/index.ts"),
				F = n("./src/lib/serviceWorker/index.ts"),
				G = n("./src/reduxMiddleware/apiContext.ts"),
				U = n("./src/reduxMiddleware/gqlContext.ts"),
				B = n("./src/telemetry/index.ts"),
				H = n("./src/telemetry/helpers/sendEvent.ts"),
				q = n("./src/telemetry/models/Event.ts"),
				V = n("./src/telemetry/models/Timer.ts"),
				W = n("./src/reddit/actions/apiRequestHeaders.ts"),
				z = n("./src/reddit/actions/chat/toggle.ts"),
				Q = n("./src/lib/activeUserCountByLiveChatId/actions.ts"),
				K = n("./src/lib/activeUserCountByLiveChatId/utils.ts"),
				Z = n("./src/reddit/models/Post/index.ts"),
				X = n("./src/reddit/selectors/experiments/chat.ts");
			const Y = Object(K.b)(),
				J = async (e, t, n) => {
					Y(() => e(J), K.a);
					const s = function(e) {
						return Object.values(e.posts.models).filter(e => e.discussionType === Z.b.Chat).map(e => e.id)
					}(t());
					Object(Q.b)(s, Object(X.f)(t()), Boolean(t().user.account), e, n)
				};
			var $ = n("./src/reddit/actions/comment/index.ts"),
				ee = n("./src/reddit/actions/emailCollection/index.ts"),
				te = n("./src/reddit/actions/emailVerification.ts"),
				ne = n("./src/reddit/actions/login.ts"),
				se = n("./src/reddit/selectors/activeModalId.ts"),
				re = n("./node_modules/reselect/es/index.js"),
				oe = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ae = n("./src/reddit/selectors/meta.ts");
			const ie = Object(re.a)(ae.c, O.S, oe.d, oe.e, (e, t, n, s) => !(e || t || n && s)),
				ce = () => async (e, t) => {
					const n = t(),
						s = ie(n);
					!!!Object(se.a)(n) && s && e(Object(ne.openGoogleOneTapModal)())
				};
			var le = n("./src/reddit/actions/media.ts"),
				de = n("./src/lib/loadWithRetries/index.ts"),
				ue = () => Object(de.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				me = n("./src/reddit/actions/nps.ts");
			const pe = Object(A.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var be, he = n("./src/reddit/actions/platform.ts"),
				ge = n("./src/reddit/actions/post.ts"),
				fe = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				ve = n("./src/reddit/actions/session.ts"),
				Oe = n("./src/reddit/actions/survey/index.ts"),
				Ce = n("./src/reddit/actions/theme.ts"),
				Ee = n("./src/reddit/actions/toaster.ts"),
				ye = n("./src/reddit/actions/users.ts"),
				xe = n("./node_modules/react-redux/es/index.js"),
				_e = n("./node_modules/react-router/esm/react-router.js"),
				je = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/faceplate.less"), n("./src/reddit/components/Root/tailwind.css"), n("./src/reddit/components/Root/index.m.less")),
				Se = n.n(je),
				Pe = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				ke = n("./src/lib/classNames/index.ts"),
				Ne = n("./node_modules/lodash/isEqual.js"),
				Me = n.n(Ne),
				we = n("./node_modules/lodash/omit.js"),
				Ie = n.n(we),
				Ae = n("./node_modules/lodash/throttle.js"),
				Te = n.n(Ae),
				Re = n("./src/reddit/contexts/NavbarExp.ts"),
				Le = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				De = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				Fe = n("./src/lib/fastdom/index.ts"),
				Ge = n("./src/lib/FocusTrap/index.ts"),
				Ue = n("./src/lib/isEqualWithoutKey/index.ts"),
				Be = n("./src/lib/isSimpleClick/index.ts"),
				He = n("./src/reddit/actions/header.ts"),
				qe = n("./src/reddit/actions/recapGame.ts"),
				Ve = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				We = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				ze = n("./node_modules/polished/dist/polished.es.js"),
				Qe = n("./node_modules/react-motion/lib/react-motion.js"),
				Ke = n("./src/lib/lessComponent.tsx"),
				Ze = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				Xe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Ye = n("./src/reddit/constants/accountManager.ts"),
				Je = n("./src/reddit/helpers/trackers/onboarding.ts"),
				$e = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				et = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				tt = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				nt = n("./src/reddit/components/Carousel/index.m.less"),
				st = n.n(nt);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(be || (be = {}));
			class rt extends m.a.Component {
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
							pageNumber: o
						} = this.state, a = n === be.Fade ? {
							opacity: t === o ? 1 : 0
						} : {
							marginLeft: 0 === t ? -s * o : void 0
						};
						return m.a.createElement("div", {
							className: Object(ke.a)(st.a.item, st.a[n]),
							key: `item-${t}`,
							style: {
								...a,
								backgroundImage: `url("${i.a.assetPath}/${e.img}")`,
								width: s
							},
							onClick: r ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(ke.a)(st.a.indicator, {
							[st.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						className: Object(ke.a)(e, st.a.container)
					}, m.a.createElement("article", {
						className: st.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: st.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var ot = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				at = n.n(ot);
			const it = Ke.a.div("Container", at.a),
				ct = Ke.a.wrapped(rt, "Carousel", at.a),
				lt = Ke.a.div("Phone", at.a),
				dt = Ke.a.img("Frame", at.a),
				ut = `${i.a.assetPath}/img/frontpage-signup/android-frame.png`,
				mt = `${i.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				pt = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				bt = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var ht = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(it, {
						className: t
					}, m.a.createElement(lt, {
						className: at.a.android
					}, m.a.createElement(ct, {
						animationType: be.Fade,
						className: at.a.android,
						delay: 2500,
						items: pt,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(dt, {
						src: ut
					})), m.a.createElement(lt, {
						className: at.a.iphone
					}, m.a.createElement(ct, {
						animationType: be.Fade,
						className: at.a.iphone,
						items: bt,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(dt, {
						src: mt
					})))
				},
				gt = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				ft = n.n(gt);
			const vt = Ke.a.div("Container", ft.a),
				Ot = Ke.a.span("Disclaimer", ft.a),
				Ct = Ke.a.a("Link", ft.a);
			var Et = e => m.a.createElement(vt, {
					className: e.className
				}, m.a.createElement(Ct, {
					href: "https://www.redditinc.com/"
				}, s.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(Ct, {
					href: "https://www.redditinc.com/advertising"
				}, s.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(Ct, {
					href: "http://www.redditblog.com/"
				}, s.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(Ct, {
					href: "https://www.redditinc.com/careers"
				}, s.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(Ct, {
					href: "https://www.reddithelp.com"
				}, s.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(Ct, {
					href: "https://www.redditinc.com/press"
				}, s.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(Ct, {
					href: "https://www.reddit.com/coins"
				}, s.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(Ct, {
					href: "https://redditgifts.com/"
				}, s.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(Ct, {
					href: "https://www.reddit.com/premium"
				}, s.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(Ct, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, s.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(Ct, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, s.fbt._("Mod policy", null, {
					hk: "1Hw2HM"
				})), m.a.createElement(Ot, null, s.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				yt = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				xt = n.n(yt);
			const _t = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				jt = Ke.a.div("Container", xt.a),
				St = Ke.a.wrapped(Ze.a, "IFrame", xt.a),
				Pt = Ke.a.wrapped(ht, "Images", xt.a),
				kt = Ke.a.wrapped(Et, "Links", xt.a),
				Nt = Ke.a.div("MainContent", xt.a),
				Mt = Ke.a.div("MainContentColumn", xt.a),
				wt = Ke.a.button("NotReady", xt.a),
				It = Ke.a.span("NotReadyText", xt.a),
				At = Ke.a.wrapped($e.a, "NotReadyIcon", xt.a),
				Tt = Object(Le.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: r,
						onCloseClick: o,
						onVisibilityChange: a
					} = e, i = Object(et.a)(e).bodyText;
					return m.a.createElement(We.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(jt, {
						className: t,
						innerRef: n
					}, m.a.createElement(Nt, null, m.a.createElement(Mt, null, m.a.createElement(Pt, null, "Images Placeholder")), m.a.createElement(Mt, null, m.a.createElement(St, {
						className: Object(ke.a)({
							[xt.a.fields]: Object(tt.b)(r)
						}),
						path: Ye.c.Register,
						uiMode: Ye.d.Embed
					}))), m.a.createElement(wt, {
						onClick: o,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(ze.i)(.8, i)
						}
					}, m.a.createElement(It, null, s.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(At, null)), m.a.createElement(kt, null)))
				});
			class Rt extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Lt extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(Je.d)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(Rt, {
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
					}), m.a.createElement(Qe.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(Qe.spring)(s, _t)
						}
					}, this.renderScroller))
				}
			}
			var Dt = Object(Xe.c)(Lt),
				Ft = n("./src/lib/localStorageAvailable/index.ts"),
				Gt = n("./src/reddit/actions/modal.ts"),
				Ut = n("./src/higherOrderComponents/makeAsync.tsx"),
				Bt = Object(Ut.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				Ht = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				qt = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var Vt = Object(Ut.a)({
				getComponent: () => Object(de.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Wt = () => null;
			var zt = Object(Ut.a)({
					ErrorComponent: Wt,
					getComponent: () => Object(de.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Wt
				}),
				Qt = n("./src/higherOrderComponents/asModal/index.tsx"),
				Kt = n("./src/reddit/actions/structuredStyles/index.ts"),
				Zt = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Xt = n("./src/reddit/constants/modals.ts"),
				Yt = n("./src/reddit/controls/TextButton/index.tsx"),
				Jt = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: $t
			} = n("./node_modules/fbt/lib/FbtPublic.js"), en = Object(xe.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(Gt.i)(Xt.a.BLADE_NIGHTMODE)), e(Object(Kt.f)())
					},
					openBlade: () => {
						e(Object(Kt.e)(n))
					}
				}
			});
			var tn = Object(Qt.a)(en(e => m.a.createElement(Zt.e, null, m.a.createElement(Zt.i, null, m.a.createElement(Jt.a, null, m.a.createElement(Zt.q, null, $t._("Turning off Dark Mode", null, {
					hk: "2RVfrK"
				})), m.a.createElement(Yt.a, {
					onClick: e.closeModal
				}, m.a.createElement(Zt.b, null)))), m.a.createElement(Zt.l, null, m.a.createElement(Zt.o, null, $t._("In order to continue styling your community, Dark Mode must be turned off.", null, {
					hk: "2oiEiX"
				}))), m.a.createElement(Zt.g, null, m.a.createElement(Zt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, $t._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(Zt.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, $t._("Continue", null, {
					hk: "413jMZ"
				})))))),
				nn = n("./src/reddit/actions/authorFlair.ts"),
				sn = n("./src/reddit/actions/gold/powerups.ts"),
				rn = n("./src/reddit/actions/userFlair/index.ts"),
				on = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				an = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
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
				En = n.n(Cn);
			const yn = e => e.flairModalContext && e.currentUser && Object(hn.e)(e.currentUser) === e.flairModalContext.username,
				xn = e => e.authorFlair || yn(e) && e.userFlairData.applied || null,
				_n = Ke.a.wrapped(pn.a, "Section", En.a),
				jn = Ke.a.div("CheckboxText", En.a);
			class Sn extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(vn.lb)(t, this.props.subredditId)
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
					} = e.displaySettings, o = this.state.showFlair !== r, a = xn(this.props);
					if (!s.canUserChange) return o;
					const {
						canSave: i,
						reason: c
					} = Object(dn.b)(n, t, a);
					return !(i || c !== dn.a.NoChanges || !o) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: r,
						flairModalContext: o
					} = e, a = n.permissions.canUserChange, i = n.permissions.canUserChange, c = null == o ? void 0 : o.isOpenedFromAchievementsModal, {
						templates: l,
						templateIds: d
					} = n, u = this.canSave(), p = yn(e);
					return m.a.createElement(an.a, null, m.a.createElement(on.a, {
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
						className: En.a.buttonsRow
					}, c && m.a.createElement(un.t, {
						className: En.a.goBackButton,
						priority: un.c.Plain,
						onClick: e.openAchiementFlairModal
					}, s.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: En.a.rightSideButtons
					}, a && m.a.createElement(un.o, {
						className: En.a.clearButton,
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
			const Pn = Object(xe.b)(() => Object(re.c)({
				authorFlair: gn.b,
				currentUser: O.m,
				flairModalContext: gn.c,
				isMod: (e, t) => !!Object(fn.n)(e, t),
				userFlairData: On.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, r, o) => e(Object(rn.f)(n, s, r, o.username, t.subredditId)),
				closeModal: () => e(Object(nn.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(sn.c)())
			}))(Sn);
			var kn = Object(Qt.a)(Object(Xe.c)(Pn)),
				Nn = n("./src/reddit/selectors/bannedUser.ts"),
				Mn = n("./src/reddit/selectors/muted.ts"),
				wn = n("./src/reddit/selectors/notificationPrefs.ts"),
				In = n("./src/reddit/selectors/platform.ts"),
				An = n("./src/reddit/selectors/removalReasons.ts"),
				Tn = n("./src/reddit/constants/cookie.ts"),
				Rn = n("./src/reddit/featureFlags/index.ts"),
				Ln = n("./src/reddit/helpers/localStorage/index.ts"),
				Dn = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Fn = Object(re.c)({
				activeModalId: se.a,
				authorContext: gn.c,
				badgePurchaseModalIsOpen: Object(se.b)(Xt.a.BADGE_PURCHASE),
				banContext: Nn.a,
				banModalIsOpen: Object(se.b)(Xt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(se.b)(Xt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				introModalFeatureEnabled: e => Rn.d.introModal(e),
				isOverlayOpen: In.j,
				moderatorPermissions: e => {
					const t = Object(In.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Mn.b,
				muteModalIsOpen: Object(se.b)(Xt.a.MUTE_USER),
				notificationsPrePromptIsOpen: wn.d,
				removalReasonContext: An.b,
				removalReasonModalIsOpen: Object(se.b)(Xt.a.ADD_REMOVAL_REASON),
				subredditId: In.c,
				userFlairModalIsOpen: Object(se.b)(Xt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: O.C,
				userInRedesignBeta: O.J,
				userIsLoggedIn: O.S,
				userIsMod: O.T,
				userIsNew: O.W
			});
			class Gn extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Ft.a)()) return; {
						const e = d.a.get(Tn.a);
						e && d.a.remove(Tn.a, {
							domain: i.a.cookieDomain
						});
						const t = Object(Ln.G)(Xt.a.ALPHA_CONSUMER);
						t && Object(Ln.eb)(Xt.a.ALPHA_CONSUMER), (e || t) && Object(Ln.Mb)(Xt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Ln.G)(Xt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Ln.Mb)(Xt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate(e) {
					this.conditionalModalCheck(), e.activeModalId !== this.props.activeModalId && (Xt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Dn.a)(), 500) : setTimeout(() => Object(Dn.b)(), 500)))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: r,
						currentBadgePurchase: o,
						muteContext: a,
						muteModalIsOpen: i,
						notificationsPrePromptIsOpen: c,
						removalReasonContext: l,
						removalReasonModalIsOpen: d,
						sendEvent: p,
						subredditId: b,
						toggleBanModal: h,
						toggleMuteModal: g,
						toggleRemovalReasonsModal: f,
						userFlairModalIsOpen: v
					} = this.props, O = (e, t, n) => s => () => p(r => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(vn.h)({
							state: r,
							commentId: n
						}),
						post: n && Object(vn.K)(r, n),
						screen: Object(vn.cb)(r),
						subreddit: Object(vn.lb)(r, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(Ht.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: h,
						trackAddEvent: O("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: O("banned", n.subredditId, n.contextId),
						username: n.username,
						withOverlay: !0
					}), i && a && m.a.createElement(qt.a, {
						contextId: a.contextId,
						subredditId: a.subredditId,
						toggleModal: g,
						trackAddEvent: O("muted", a.subredditId, a.contextId)("add_in_context"),
						username: a.username,
						withOverlay: !0
					}), d && l && m.a.createElement(zt, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: f
					}), r && b && m.a.createElement(tn, {
						subredditId: b
					}), v && e && e.subredditId && m.a.createElement(kn, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && o && m.a.createElement(Bt, {
						withOverlay: !0,
						productId: o
					}), c && m.a.createElement(Vt, null))
				}
			}
			var Un = Object(xe.b)(Fn, e => ({
					markRedesignModalAsClosed: () => e(Object(Gt.j)()),
					toggleBanModal: () => e(Object(Gt.i)(Xt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(Gt.i)(Xt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(Gt.i)(Xt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(Gt.i)(Xt.a.ADD_REMOVAL_REASON))
				}))(Object(Xe.c)(Gn)),
				Bn = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Hn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				qn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Vn = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				Wn = n("./src/reddit/selectors/responsiveSettings.ts"),
				zn = n("./src/telemetry/helpers/sendCounter.ts"),
				Qn = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Kn = n.n(Qn);
			const Zn = Ke.a.div("Overlay", Kn.a),
				Xn = Ke.a.div("IframeContainer", Kn.a),
				Yn = {},
				Jn = Object(Hn.v)(),
				$n = Object(re.c)({
					frontpageSignupVariant: tt.a,
					isAmModalDesignUpdateEnabled: Vn.a,
					isResponsiveSettingsEnabled: Wn.a
				}),
				es = {
					[Ye.c.ChangePassword]: Xt.a.CHANGE_PASSWORD_MODAL_ID,
					[Ye.c.Index]: Xt.a.LOGIN_MODAL_ID,
					[Ye.c.Register]: Xt.a.REGISTER_MODAL_ID,
					[Ye.c.EnableTwoFactor]: Xt.a.ENABLE_TWO_FACTOR,
					[Ye.c.DisableTwoFactor]: Xt.a.DISABLE_TWO_FACTOR,
					[Ye.c.TwoFactorBackupCodes]: Xt.a.TWO_FACTOR_BACKUP_CODES,
					[Ye.c.LinkAppleSSO]: Xt.a.LINK_APPLE_SSO,
					[Ye.c.UnlinkAppleSSO]: Xt.a.UNLINK_APPLE_SSO,
					[Ye.c.LinkGoogleSSO]: Xt.a.LINK_GOOGLE_SSO,
					[Ye.c.UnlinkGoogleSSO]: Xt.a.UNLINK_GOOGLE_SSO,
					[Ye.c.GoogleOneTap]: Xt.a.GOOGLE_ONE_TAP_MODAL_ID,
					[Ye.c.Onboarding]: Xt.a.ONBOARDING_MODAL_ID
				};
			class ts extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === Ye.c.Register && Object(tt.f)(this.props.frontpageSignupVariant) && qn.a.throttleFeature(_.id), this.props.sendEvent(Object(Je.d)(this.subscriptions))
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
						"user_cancel" === e && (this.props.sendEvent(Object(Je.g)()), Object(zn.b)(k.o.Redesign, {
							type: zn.a.OneTapDismissed,
							data: {}
						}))
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(Je.h)()), Object(zn.b)(k.o.Redesign, {
							type: zn.a.OneTapViewed,
							data: {}
						})
					}, this.onShowScreen = e => {
						const {
							isAmModalDesignUpdateEnabled: t,
							path: n
						} = this.props, s = n === Ye.c.Index || n === Ye.c.Register, r = n === Ye.c.GoogleOneTap, o = () => {
							this.resizeContainer({
								height: 640,
								width: 400
							})
						};
						e === Ye.b.SelectAccount ? s ? t ? o() : this.resizeContainer({
							height: 474,
							width: 416
						}) : r && (t && o(), this.setState({
							removeHiddenOverlay: !0
						})) : e === Ye.b.Subscribe ? (s && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === Ye.b.Email || e === Ye.b.UsernameAndPassword ? s && this.restoreContainerSize() : e !== Ye.b.EmailOptIn && e !== Ye.b.GoogleUI || this.setState({
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
						containerSize: o,
						isSSOLinkActionFailedModal: a,
						removeGoogleOneTapStyles: i,
						removeHiddenOverlay: c
					} = this.state, l = Object(tt.c)(e) || Object(tt.d)(e), d = r === Ye.c.LinkAppleSSO || r === Ye.c.LinkGoogleSSO || r === Ye.c.UnlinkAppleSSO || r === Ye.c.UnlinkGoogleSSO, u = r === Ye.c.GoogleOneTap, p = Object(ke.a)({
						[Kn.a.mModalUpdate]: t,
						[Kn.a.small]: l,
						[Kn.a.ssoConfirmPassword]: d,
						[Kn.a.linkActionSSOFail]: a,
						[Kn.a.mResponsive]: n,
						[Kn.a.mGoogleOneTap]: u && !i
					}), b = Object(ke.a)({
						[Kn.a.mGoogleOneTap]: u && !i,
						[Kn.a.mHiddenOverlay]: u && !c
					}), h = !l && !a && !n;
					return m.a.createElement(Zn, {
						className: b
					}, m.a.createElement(Xn, {
						className: p,
						style: o || Yn
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
			const ns = Jn(Object(xe.b)($n, (e, t) => ({
				closeModal: t => {
					e(Object(Gt.g)(es[t]))
				}
			}))(Object(Xe.c)(ts)));
			Object(Bn.b)(Xt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(ns, {
				path: Ye.c.ChangePassword
			})), Object(Bn.b)(Xt.a.LOGIN_MODAL_ID, e => m.a.createElement(ns, {
				path: Ye.c.Index
			})), Object(Bn.b)(Xt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(ns, {
				path: Ye.c.Onboarding
			})), Object(Bn.b)(Xt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(ns, {
				path: Ye.c.EnableTwoFactor
			})), Object(Bn.b)(Xt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(ns, {
				path: Ye.c.DisableTwoFactor
			})), Object(Bn.b)(Xt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(ns, {
				path: Ye.c.TwoFactorBackupCodes
			})), Object(Bn.b)(Xt.a.REGISTER_MODAL_ID, e => m.a.createElement(ns, {
				path: Ye.c.Register
			})), Object(Bn.b)(Xt.a.LINK_APPLE_SSO, e => m.a.createElement(ns, {
				path: Ye.c.LinkAppleSSO
			})), Object(Bn.b)(Xt.a.LINK_GOOGLE_SSO, e => m.a.createElement(ns, {
				path: Ye.c.LinkGoogleSSO
			})), Object(Bn.b)(Xt.a.UNLINK_APPLE_SSO, e => m.a.createElement(ns, {
				path: Ye.c.UnlinkAppleSSO
			})), Object(Bn.b)(Xt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(ns, {
				path: Ye.c.UnlinkGoogleSSO
			})), Object(Bn.b)(Xt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(ns, {
				path: Ye.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const ss = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(ss, {
				withOverlay: !0
			}));
			const rs = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(rs, {
				withOverlay: !0
			}));
			const os = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(os, {
				withOverlay: !0
			}));
			const as = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.CROWD_CONTROL, e => m.a.createElement(as, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const is = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(is, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const cs = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(cs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const ls = Object(Ut.a)({
					getComponent: () => Object(de.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				ds = e => () => {
					e()
				};
			Object(Bn.b)(Xt.a.GOLD_GILD_MODAL, e => m.a.createElement(ls, {
				onOverlayClick: ds(e),
				withOverlay: !0
			}));
			var us = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				ms = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				ps = n.n(ms);
			const bs = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = us.SPARKLE_ASSET_PATH, document.createElement("img").src = us.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Bn.b)(Xt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(bs, {
				withOverlay: !0,
				className: ps.a.modalBody,
				overlayClassName: ps.a.modalOverlay
			}));
			const hs = Object(Ut.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				gs = e => () => {
					e()
				};
			Object(Bn.b)(Xt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(hs, {
				onOverlayClick: gs(e),
				withOverlay: !0
			}));
			const fs = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(fs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const vs = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(vs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Os = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(Os, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Cs = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(Cs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx");
			const Es = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(Es, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const ys = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("GovernanceTransferPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.TRANSFER_POINTS, e => m.a.createElement(ys, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const xs = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(xs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const _s = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(_s, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const js = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(js, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ss = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.MULTIREDDIT_CREATE, e => m.a.createElement(Ss, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Bn.b)(Xt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(Ss, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ps = Object(Ut.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Bn.b)(Xt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Ps, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ks = () => Promise.all([n.e(0), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				Ns = Object(Ut.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(de.a)(ks).then(e => e.default)
				});
			Object(Bn.b)(Xt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(Ns, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const Ms = () => null,
				ws = Object(Ut.a)({
					ErrorComponent: Ms,
					getComponent: () => Object(de.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Ms
				});
			Object(Bn.b)(Xt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(ws, null));
			var Is = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				As = n.n(Is);
			const Ts = Ke.a.h2("ColumnLabel", As.a),
				Rs = Ke.a.wrapped(pn.a, "ColumnWrapper", As.a),
				Ls = Ke.a.div("Column", As.a),
				Ds = Ke.a.div("Description", As.a),
				Fs = Ke.a.div("Key", As.a),
				Gs = Ke.a.wrapped(Zt.l, "ModalMain", As.a),
				Us = Ke.a.wrapped(Zt.e, "ModalBody", As.a),
				Bs = Ke.a.wrapped(un.l, "PrimaryButton", As.a),
				Hs = Ke.a.wrapped(Yt.a, "TextButton", As.a),
				qs = Object(xe.b)(null, e => ({
					closeModal: () => e(Object(Gt.i)(Xt.a.KEYBOARD_SHORTCUTS))
				})),
				Vs = Ke.a.wrapped(Object(Qt.a)(qs(e => m.a.createElement(Us, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(Zt.i, null, m.a.createElement(Jt.a, null, m.a.createElement(Zt.q, null, s.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Hs, {
					onClick: e.closeModal
				}, m.a.createElement(Zt.b, null)))), m.a.createElement(Gs, null, m.a.createElement(Rs, null, m.a.createElement(Ls, null, m.a.createElement(pn.a, null, m.a.createElement(Ts, null, s.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Fs, null, "Shift + ?")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Fs, null, "J")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Fs, null, "K")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Fs, null, "N")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Fs, null, "P")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Fs, null, "Enter")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Fs, null, "X")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Fs, null, "L"))), m.a.createElement(Ls, null, m.a.createElement(pn.a, null, m.a.createElement(Ts, null, s.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Fs, null, "A")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Fs, null, "Z")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Fs, null, "C")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Fs, null, "R")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Fs, null, "Ctrl + Enter")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Fs, null, "S")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Fs, null, "H")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Fs, null, "Q")), m.a.createElement(pn.a, null, m.a.createElement(Ds, null, s.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Fs, null, "Enter"))))), m.a.createElement(Zt.g, null, m.a.createElement(Bs, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, s.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", As.a);
			Object(Bn.b)(Xt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Vs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ws = Object(Ut.a)({
					getComponent: () => Object(de.a)(() => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e("SnoovatarModal")]).then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				zs = e => () => {
					e()
				};
			Object(Bn.b)(Xt.a.SNOOVATAR_MODAL, e => m.a.createElement(Ws, {
				onOverlayClick: zs(e),
				withOverlay: !0
			}));
			const {
				fbt: Qs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ks = Object(re.c)({
				allowNavigationCallback: In.a
			}), Zs = Object(xe.b)(Ks, e => ({
				closeModal: () => e(Object(Gt.i)(Xt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Kt.a)())
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
					return m.a.createElement(Zt.e, null, m.a.createElement(Zt.i, null, m.a.createElement(Jt.a, null, m.a.createElement(Zt.q, null, Qs._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(Yt.a, {
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
			const Ys = Object(Qt.a)(Zs(Xs));
			Object(Bn.b)(Xt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Ys, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const Js = () => n.e("NsfwBlockingModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx")),
				$s = Object(Ut.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(de.a)(Js).then(e => e.default)
				});
			Object(Bn.b)(Xt.a.NSFW_BLOCKING_MODAL_V2, e => m.a.createElement($s, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const er = Object(re.c)({
					activeModalId: se.a
				}),
				tr = Object(xe.b)(er, e => ({
					toggleModal: t => e(Object(Gt.i)(t))
				})),
				nr = 500,
				sr = () => {};
			class rr extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate(e) {
					e.activeModalId !== this.props.activeModalId && (Xt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Dn.a)(), nr) : setTimeout(() => Object(Dn.b)(), nr)))
				}
				componentWillUnmount() {
					Object(Dn.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Bn.a)(e)(e ? this.toggleModal : sr)
				}
			}
			var or = tr(rr),
				ar = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ir = n("./src/reddit/actions/page.ts"),
				cr = n("./src/reddit/actions/shortcuts/utils.ts"),
				lr = n("./src/reddit/icons/fonts/index.tsx"),
				dr = n("./src/reddit/selectors/header.ts"),
				ur = n("./src/reddit/selectors/userPrefs.ts"),
				mr = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				pr = n("./src/reddit/pages/CommunityHubs/constants.ts"),
				br = n("./src/reddit/pages/CommunityHubs/CommunityHubIcon.m.less"),
				hr = n.n(br);
			var gr = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("img", {
						className: Object(ke.a)(hr.a.icon, t),
						src: `${pr.a}fan-communities-icon.png`
					})
				},
				fr = n("./src/reddit/components/SEOTitle/index.tsx"),
				vr = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Or = n("./src/reddit/components/UserIcon/index.tsx"),
				Cr = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx");

			function Er() {
				return (Er = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var yr = e => m.a.createElement("svg", Er({
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
			var xr, _r = e => {
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
				jr = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Sr = n.n(jr);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunityHubs = "CommunityHubs", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.HappeningNow = "HappeningNow", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Recap = "Recap", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(xr || (xr = {}));
			const Pr = () => m.a.createElement(_r, {
				className: Sr.a.wrappedRedditDropdown,
				isForMenu: !0
			});
			const kr = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(fr.b, {
					type: fr.a.HeaderSelector
				}, s))
			};
			var Nr = n("./src/lib/objectSelector/index.ts"),
				Mr = n("./src/reddit/constants/wiki.ts"),
				wr = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ir = n("./src/reddit/selectors/frontpage.ts"),
				Ar = n("./src/reddit/selectors/subreddit.ts"),
				Tr = n("./src/reddit/selectors/topic.ts");
			var Rr = Object(Nr.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = Object(In.n)(e),
						r = Object(O.S)(e),
						o = Object(Ir.b)(e),
						a = Object(Hn.bb)(n);
					switch (a) {
						case "avatar":
							return {
								type: xr.Avatar
							};
						case "communityHubs":
							return {
								type: xr.CommunityHubs
							};
						case "index":
						case "listing":
							return r || o || s ? {
								type: xr.Home
							} : {
								type: xr.Popular
							};
						case "modListing":
							return {
								type: xr.ModListing
							};
						case "modQueuePages":
							return {
								type: xr.ModQueue
							};
						case "postCreation":
							return {
								type: xr.CreatePost
							};
						case "postDraft":
							return {
								type: xr.ViewDraft
							};
						case "recap":
							return {
								type: xr.Recap
							};
						case "subredditCreation":
							return {
								type: xr.SubredditCreation
							};
						case "coins":
							return {
								type: xr.Coins
							};
						case "internationalSitePage":
							return {
								type: xr.InternationalSite
							};
						case "happeningNow":
							return {
								type: xr.HappeningNow
							};
						case "predictions":
							return {
								type: xr.Predictions
							};
						case "premium":
							return {
								type: xr.Premium
							};
						case "acknowledgements":
							return {
								type: xr.Acknowledgements
							};
						case "appeal":
							return {
								type: xr.Appeal
							};
						case "report":
							return {
								type: xr.Report
							};
						case "userDataRequest":
							return {
								type: xr.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: xr.DailyCharts
							};
						case "geotagging":
							return {
								type: xr.Geotagging
							};
						case "notificationsInbox":
							return {
								type: xr.NotificationsInbox
							};
						case "talk":
							return {
								type: xr.Talk
							};
						case "topic": {
							const t = Object(Hn.u)(n),
								s = t && Object(Tr.d)(e, t);
							if (s) return {
								type: xr.Topic,
								model: s
							}
						}
					}
					const i = e.user.account;
					if (i) switch (a) {
						case "inboxPages":
							return {
								type: xr.Inbox, model: i
							};
						case "settings":
							return {
								type: xr.Settings, model: i
							}
					}
					const c = Object(Hn.V)(e, {
						pageLayer: n
					});
					if ("all" === c) return {
						type: xr.All
					};
					if ("popular" === c) return {
						type: xr.Popular
					};
					const l = Object(Hn.s)(e, {
						pageLayer: n
					});
					if (l) return "searchResults" === a ? {
						type: xr.CommunitySearch,
						model: l
					} : {
						type: xr.Community,
						model: l
					};
					const d = Object(Hn.e)(e, {
						pageLayer: n
					});
					if (d) return {
						type: xr.Multi,
						model: d
					};
					const u = Object(Hn.l)(e, {
						pageLayer: n
					});
					if (u) return {
						type: xr.UserProfile,
						model: u
					};
					const m = Object(Hn.j)(n);
					if (m) return {
						type: xr.UserProfileName,
						name: `u/${m}`
					};
					if (a && "searchResults" === a) return {
						type: xr.GlobalSearch
					};
					if ("subredditWiki" === a) {
						const t = Object(Hn.p)(e, {
								pageLayer: n
							}) || Mr.e,
							s = Object(Ar.C)(e, {
								subredditName: t
							});
						if (s) return {
							type: xr.Community,
							model: s
						}
					}
					return "rpan" === a && Object(wr.a)(e) ? {
						type: xr.PublicAccessNetwork
					} : {
						type: xr.Unknown
					}
				}),
				Lr = n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				Dr = n.n(Lr);

			function Fr() {
				return (Fr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Gr(e) {
				const t = e.icon,
					n = e.text,
					s = e.badge,
					r = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Dr.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Object(ke.a)(Dr.a.text, {
								[Dr.a.hasBadge]: !!s
							})
						}), s && m.a.createElement(s, {
							className: Dr.a.badge
						})),
						className: Object(ke.a)(Dr.a.item, e.className, {
							[Dr.a.mFocused]: !!e.isFocused,
							[Dr.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return r["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Fr({}, r, {
					href: e.to,
					target: "_blank",
					rel: "noopener noreferrer"
				})) : m.a.createElement(ar.a, Fr({}, r, {
					to: e.to
				})) : m.a.createElement("button", r)
			}
			var Ur = n("./src/reddit/components/BadgeCounter/index.tsx"),
				Br = n("./src/reddit/constants/localStorage.ts"),
				Hr = n("./src/reddit/hooks/useIsClient.ts"),
				qr = n("./src/reddit/hooks/useLocalStorage.ts");
			const Vr = e => {
					const t = Number(e);
					return isNaN(t) ? 0 : t
				},
				Wr = e => {
					let {
						className: t
					} = e;
					const n = Object(Hr.a)(),
						s = Object(xe.e)(In.g),
						r = Object(xe.e)(O.S),
						[o, a] = Object(qr.a)(Br.b.LOGGED_OUT_HOME_SEEN, {}),
						i = Date.now(),
						c = Vr(o.dismissed),
						l = Vr(o.throttledUntil),
						d = !n || r || c >= 3 || s || i < l;
					return n && !r && s && c < 3 && i > l && a({
						dismissed: c + 1,
						throttledUntil: i + k.E
					}), d ? null : m.a.createElement(Ur.a, {
						className: t,
						isActive: !0,
						unreadCount: -1
					})
				};
			var zr = n("./src/reddit/constants/listings.ts"),
				Qr = n("./src/reddit/helpers/overlay/index.ts"),
				Kr = n("./src/reddit/routes/communityHubs/index.ts"),
				Zr = n("./src/reddit/routes/modListing/index.ts"),
				Xr = n("./src/reddit/routes/predictions/index.ts"),
				Yr = n("./src/reddit/routes/talk/index.ts"),
				Jr = n("./src/reddit/selectors/countrySites.ts"),
				$r = n("./src/reddit/selectors/experiments/econ/index.ts"),
				eo = n("./src/reddit/selectors/experiments/happeningNow.ts"),
				to = n("./src/reddit/selectors/multireddit.ts"),
				no = n("./src/lib/LinkedListMap/index.ts"),
				so = n("./src/reddit/routes/avatar/index.ts");

			function ro() {
				return (ro = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const oo = Object(re.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(to.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(to.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				recentSubreddits: e => e.recentSubreddits.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var ao;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost", e[e.ExploreMenu = 11] = "ExploreMenu"
			}(ao || (ao = {}));
			const io = [e => ({
					id: xr.Employee,
					type: ao.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(lr.a, ro({
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
				co = () => [e => ({
					id: xr.All,
					type: ao.GenericLink,
					model: {
						url: "/r/all/",
						displayText: s.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
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
				lo = () => [e => ({
					id: "reddit-feeds",
					type: ao.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: xr.Home,
					type: ao.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
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
					id: xr.Popular,
					type: ao.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
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
				}), ...co()],
				uo = e => m.a.createElement(Wr, {
					className: e.className
				}),
				mo = [e => ({
					id: "reddit-feeds",
					type: ao.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: xr.Home,
					type: ao.GenericLink,
					model: {
						url: "/",
						badge: uo,
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
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
					id: xr.Popular,
					type: ao.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
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
				po = [e => ({
					id: "reddit-other",
					type: ao.Header,
					model: {
						displayText: s.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: xr.Settings,
					type: ao.GenericLink,
					model: {
						url: "/settings",
						displayText: s.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(Cr.a, {
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
					id: xr.Inbox,
					type: ao.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: s.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(Cr.a, {
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
				bo = e => ({
					id: xr.Coins,
					type: ao.GenericLink,
					model: {
						url: "/coins",
						displayText: s.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
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
				ho = e => ({
					id: xr.Premium,
					type: ao.GenericLink,
					model: {
						url: "/premium",
						displayText: s.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
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
				go = e => ({
					id: xr.Avatar,
					type: ao.GenericLink,
					model: {
						url: so.a,
						displayText: s.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
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
				fo = e => ({
					id: xr.Talk,
					type: ao.GenericLink,
					model: {
						url: Yr.a,
						displayText: s.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
							name: "live"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Talk", null, {
								hk: "31Avul"
							}))
						}
					},
					telemetryNoun: "talk"
				}),
				vo = e => ({
					id: xr.Predictions,
					type: ao.GenericLink,
					model: {
						url: Xr.a,
						displayText: s.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
							name: "prediction"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Predictions", null, {
								hk: "3lUrcj"
							}))
						}
					},
					telemetryNoun: "predictions"
				}),
				Oo = [e => ({
					id: xr.ModQueue,
					type: ao.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: s.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
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
						id: xr.ModMail,
						type: ao.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: s.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(lr.a, ro({
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
			const Co = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const r = {
						id: xr.CreateCommunity,
						telemetryNoun: "create_community"
					},
					o = {
						displayText: s.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(lr.a, ro({
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
					type: ao.GenericClickable,
					model: {
						...o,
						onClick: () => {
							n ? (t(Object(Gt.k)({
								actionSource: Gt.a.HeaderSignup
							})), t(Object(ne.openRegisterModal)())) : t(Object(Gt.h)(Xt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var Eo = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				yo = n.n(Eo);

			function xo(e) {
				return m.a.createElement("div", {
					className: Object(ke.a)(yo.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var _o = n("./src/reddit/actions/subscription/index.ts"),
				jo = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				So = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				Po = n.n(So);

			function ko() {
				return (ko = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const No = Object(re.c)({
					currentUser: O.m,
					hideNSFWPref: O.H,
					isLoggedIn: O.S
				}),
				Mo = Object(xe.b)(No, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case ao.Subreddit:
								e(Object(_o.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case ao.Profile:
								e(Object(_o.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case ao.Multi:
								e(Object(_o.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(jo.f)(t.model.url)) : t.sendEvent(Object(jo.c)(t.model.url))
						}
					}
				}));
			var wo = Object(Xe.c)(Mo((function(e) {
					const t = {
						className: Object(ke.a)(Po.a.item, e.className, {
							[Po.a.mFocused]: !!e.isFocused
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
						case ao.Subreddit:
							return m.a.createElement(ar.a, ko({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(vr.b, {
								className: Po.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: Po.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(lr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ke.a)(Po.a.favorite, {
									[Po.a.mFavorite]: !!e.isFavorite
								})
							})));
						case ao.SubredditAutocomplete:
							return m.a.createElement(ar.a, ko({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(vr.b, {
								className: Po.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: Po.a.text
							}, e.model.name));
						case ao.Multi:
							return m.a.createElement(ar.a, ko({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: Po.a.customFeedIcon
							}), m.a.createElement("span", {
								className: Po.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(lr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ke.a)(Po.a.favorite, {
									[Po.a.mFavorite]: !!e.isFavorite
								})
							})));
						case ao.Profile:
							return m.a.createElement(ar.a, ko({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Or.a, {
								className: Po.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: Po.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(lr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ke.a)(Po.a.favorite, {
									[Po.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Io = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Ao = n.n(Io);

			function To(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: Ao.a.header
				}), m.a.createElement("div", {
					className: Ao.a.item
				}), m.a.createElement("div", {
					className: Ao.a.item
				}), m.a.createElement("div", {
					className: Ao.a.item
				}), m.a.createElement("div", {
					className: Ao.a.item
				}))
			}
			var Ro = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Lo = n("./src/lib/sample/index.ts"),
				Do = n("./src/reddit/actions/subreddit.ts"),
				Fo = n("./src/reddit/controls/InternalLink/index.tsx");

			function Go() {
				return (Go = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Uo = e => {
					const {
						children: t,
						className: n,
						href: s = "#",
						onClick: r,
						rel: o
					} = e, a = {
						onClick: r,
						rel: o,
						className: n
					};
					return (s || "").startsWith("http") ? m.a.createElement("a", Go({
						href: s
					}, a), t) : m.a.createElement(Fo.default, Go({
						to: s
					}, a), t)
				},
				Bo = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				Ho = n.n(Bo),
				qo = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				Vo = n.n(qo);
			class Wo extends m.a.Component {
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
						icon: o,
						noBottomDivider: a,
						onClick: i,
						title: c,
						url: l
					} = this.props, d = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: Object(ke.a)(Ho.a.button, Vo.a.button, t),
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof i) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								i(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: Object(ke.a)(Ho.a.headingContent, r),
						tabIndex: -1
					}, m.a.createElement("span", {
						className: Ho.a.iconContainer
					}, o), m.a.createElement("span", {
						className: Ho.a.title
					}, l ? m.a.createElement(Uo, {
						className: Ho.a.innerLink,
						href: l
					}, c) : m.a.createElement(m.a.Fragment, null, c)), m.a.createElement(lr.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(ke.a)(Ho.a.chevronIcon, {
							[Ho.a["m-expanded"]]: d
						})
					}))), m.a.createElement("div", {
						className: Object(ke.a)(Ho.a.contentContainer, Ho.a["m-collapsible"], {
							[Ho.a.isOpen]: d,
							[Ho.a.noBottomDivider]: a
						}, s)
					}, n))
				}
			}
			var zo = Wo,
				Qo = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Ko = n("./src/reddit/constants/colors.ts");
			const Zo = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(ke.a)(Ho.a.title, n)
					}, t)
				},
				Xo = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(ke.a)(Ho.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(Zo, {
						title: s,
						titleClassName: r
					}))
				},
				Yo = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: r,
						titleClassName: o,
						rel: a
					} = e;
					return m.a.createElement(Uo, {
						className: Object(ke.a)(Ho.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(Zo, {
						title: r,
						titleClassName: o
					}))
				},
				Jo = e => {
					const {
						className: t,
						href: n,
						iconClassName: s,
						iconUrl: r,
						onClick: o,
						rel: a,
						title: i,
						titleClassName: c
					} = e;
					return m.a.createElement(Uo, {
						className: Object(ke.a)(Ho.a.secondLevelButton, t),
						href: n,
						onClick: o,
						rel: a
					}, m.a.createElement(vr.b, {
						"aria-hidden": !0,
						className: Object(ke.a)(Ho.a.subredditIcon, s),
						iconUrl: r,
						primaryColor: Ko.a.snoo
					}), m.a.createElement(Zo, {
						title: i,
						titleClassName: c
					}))
				},
				$o = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r,
						isEnabled: o
					} = e;
					return m.a.createElement("button", {
						className: Object(ke.a)(Ho.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(Zo, {
						title: s,
						titleClassName: r
					}), m.a.createElement(Qo.a, {
						className: Ho.a.toggleSwitch,
						"data-redditstyle": !0,
						on: o,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var ea = [{
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
				ta = n("./src/reddit/helpers/trackers/navigation.ts"),
				na = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				sa = n.n(na);
			const ra = e => {
				let {
					sendEvent: t,
					showIcons: n = !1,
					useNavStyles: s = !1
				} = e;
				const [r, o] = Object(u.useState)(null), a = e => () => {
					o(r === e ? null : e)
				};
				return m.a.createElement(m.a.Fragment, null, ea.map((e, o) => ((e, t, n, s, r) => {
					let {
						link: o,
						sublinks: a
					} = e, {
						isOpen: i,
						onClick: c
					} = t;
					return m.a.createElement(zo, {
						buttonClassName: r ? sa.a.navButtonOverride : "",
						className: sa.a.collapsibleContainer,
						icon: s && o.icon && m.a.createElement(lr.a, {
							name: o.icon
						}),
						isOpen: i,
						key: o.url,
						onClick: (e, t) => {
							o.noun && n(Object(ta.c)(o.noun + (t ? "_chevron" : "_menu"))), "function" == typeof c && c(e)
						},
						title: o.title,
						url: o.url
					}, a.map(e => m.a.createElement(Yo, {
						className: r ? sa.a.navBasicLink : sa.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(ta.c)(e.noun + "_menu"))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: a(e),
					isOpen: r === e
				}))(o), t, n, s)))
			};
			var oa = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: r
					} = e;
					return m.a.createElement(zo, {
						icon: m.a.createElement(lr.a, {
							name: "discover"
						}),
						isOpen: t,
						onClick: (e, t) => {
							r(Object(ta.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Explore", null, {
							hk: "4xNnBs"
						})
					}, m.a.createElement("span", null, m.a.createElement(ra, {
						sendEvent: r
					})))
				},
				aa = n("./src/reddit/constants/keycodes.ts"),
				ia = n("./src/reddit/helpers/correlationIdTracker.ts"),
				ca = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				la = n("./src/reddit/helpers/trackers/happeningNow.ts"),
				da = n("./src/reddit/helpers/trackers/postComposer.ts"),
				ua = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				ma = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				pa = n.n(ma);

			function ba() {
				return (ba = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function ha(e) {
				return e.id === xr.ModMail || e.id === xr.CreateCommunity
			}

			function ga(e) {
				const t = new no.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== ao.Header && e.type !== ao.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const fa = Object(re.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					isLoggedOutMenuRenderedCounterSampled: e => Object(Lo.a)(e, {
						rate: 14
					}),
					unfilteredListBuilder: e => t => {
						const n = oo(e),
							r = new no.a("id"),
							o = Object(O.S)(e),
							a = Object(Jr.f)(e),
							i = Object(O.rb)(e),
							c = [],
							l = (e => Object($r.m)(e) ? [ho, bo, go, fo, vo] : [bo, ho, go, fo, vo])(e),
							d = c.length ? l.filter(e => !c.includes(e(null).id)) : l;
						if (o) {
							const o = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (r.push({
								id: "header-favorites",
								type: ao.Header,
								model: {
									displayText: s.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => r.push({
								id: "fav" + e.id,
								type: ao.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => r.push({
								id: "fav" + e.id,
								type: ao.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => r.push({
								id: "fav" + e.url,
								type: ao.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && r.push({
								id: "multis-pending",
								type: ao.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? r.push({
								id: "moderatingSubreddits-pending",
								type: ao.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (r.push({
								id: "header-moderating",
								type: ao.Header,
								model: {
									displayText: s.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), (null == o ? void 0 : o.isMod) && Oo.forEach(e => r.push(e(o))), r.push({
								id: xr.ModListing,
								type: ao.GenericLink,
								model: {
									url: Zr.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(lr.a, ro({
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
								type: ao.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: ao.Header,
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
													n(Object(Gt.h)(Xt.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(ke.a)(t, Sr.a.multiPlusButton)
											}, m.a.createElement(lr.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: ao.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(r, n, t), n.subscriptionsPending ? r.push({
								id: "subscriptions-pending",
								type: ao.LoadingState,
								model: {
									displayText: ""
								}
							}) : function(e, t, n, r) {
								t.subscriptions.length && (e.push({
									id: "header-subscriptions",
									type: ao.Header,
									model: {
										displayText: s.fbt._("your communities", null, {
											hk: "BtF8C"
										}).toString()
									}
								}), n && Co(e, r), t.subscriptions.forEach(t => e.push({
									id: "sub" + t.id,
									type: ao.Subreddit,
									model: t,
									telemetryNoun: "community"
								}))), t.profiles.length && (e.push({
									id: "header-profiles",
									type: ao.Header,
									model: {
										displayText: s.fbt._("following", null, {
											hk: "1kjEfv"
										}).toString()
									}
								}), t.profiles.forEach(t => e.push({
									id: "pro" + t.id,
									type: ao.Profile,
									model: t,
									telemetryNoun: "profile"
								})))
							}(r, n, i, t), ((e, t, n, r) => (lo().forEach(e => t.push(e(n))), n.isEmployee && io.forEach(e => t.push(e(n))), Object(eo.a)(e) ? t.push({
								id: xr.HappeningNow,
								type: ao.GenericLink,
								model: {
									url: "/now",
									displayText: s.fbt._("Happening Now", null, {
										hk: "1UsMvs"
									}).toString(),
									icon(e) {
										let {
											className: t
										} = e;
										return m.a.createElement(yr, {
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
							}) : Object(wr.a)(e) && t.push({
								id: xr.PublicAccessNetwork,
								type: ao.GenericClickable,
								model: {
									onClick: () => {
										r(Object(Qr.a)(zr.c[zr.b.Rpan]))
									},
									displayText: s.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(lr.a, ro({
										name: "video_live"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Reddit Live", null, {
											hk: "93lry"
										}))
									}
								},
								telemetryNoun: "rpan"
							}), t))(e, r, o, t), po.forEach(e => r.push(e(o))), r.push((() => ({
								id: xr.CreatePost,
								type: ao.CreatePost,
								model: {
									url: "/submit",
									displayText: s.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement(lr.a, ro({
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
							}))()), r.push((() => ({
								id: xr.DailyCharts,
								type: ao.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: s.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(lr.a, ro({
										name: "list_numbered"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Top Communities", null, {
											hk: "1KzP9v"
										}))
									}
								},
								telemetryNoun: "daily_charts"
							}))()), (e => e.push({
								id: xr.NotificationsInbox,
								type: ao.GenericLink,
								model: {
									url: "/notifications",
									displayText: s.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(lr.a, ro({
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
							}))(r), r.push({
								id: xr.CommunityHubs,
								type: ao.GenericLink,
								model: {
									url: Kr.a,
									displayText: s.fbt._("Community Hubs", null, {
										hk: "PDnbC"
									}).toString(),
									icon: () => m.a.createElement(gr, null),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Community Hubs", null, {
											hk: "1G8PON"
										}))
									}
								},
								telemetryNoun: "community_hubs_landing_page"
							}), d.forEach(e => r.push(e(o)))
						} else n.subscriptions.length ? lo().forEach(e => r.push(e(null))) : (mo.forEach(e => {
							if (!e) return;
							e(null).id === xr.Home && a || r.push(e(null))
						}), a || function(e, t) {
							t.recentSubreddits.length && (e.push({
								id: "header-subscriptions",
								type: ao.Header,
								model: {
									displayText: s.fbt._("recent", null, {
										hk: "3yjJ4f"
									}).toString()
								}
							}), t.recentSubreddits.slice(0, 3).forEach(t => e.push({
								id: "sub" + t.id,
								type: ao.Subreddit,
								model: t,
								telemetryNoun: "community"
							})))
						}(r, n), function(e) {
							e.push({
								id: "header-explore-menu",
								type: ao.Header,
								model: {
									displayText: s.fbt._("Topics", null, {
										hk: "1ue48g"
									}).toString()
								}
							}), e.push({
								id: "explore-menu",
								type: ao.ExploreMenu,
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
				va = e => ({
					onHomeClicked: () => e(Object(A.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(p.b)(t)),
					onSubredditsRequested: () => {
						e(Object(_o.e)()), e(Object(Do.q)()), e(Object(A.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				Oa = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Ca extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = ga(n),
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
						if (e.key === aa.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === aa.b.Tab && this.props.onClose && this.props.onClose(), e.key === aa.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== ao.Header && e.type !== ao.ExploreMenu && e.type !== ao.LoadingState && (this.fireTelemetryForListItem(e), e.type === ao.GenericClickable ? e.model.onClick() : ha(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === aa.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === aa.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case xr.Coins:
							case xr.Premium:
								Object(ia.d)(ia.a.GoldPayment, !0), t = Object(ia.c)(ia.a.GoldPayment)
						}
						switch (e.type) {
							case ao.Category:
							case ao.GenericLink:
							case ao.GenericClickable:
							case ao.Multi:
							case ao.Profile:
							case ao.Subreddit:
								this.props.sendEvent(n => ({
									...Object(vn.o)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === ao.Multi ? Object(vn.n)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								})), e.id === xr.HappeningNow && this.props.sendEvent(Object(la.b)(la.a.Dropdown));
								break;
							case ao.Header: {
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
							case ao.CreatePost:
								this.props.sendEvent(Object(da.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: ga(e.unfilteredList),
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
					"complete" === document.readyState ? s() : window.addEventListener("load", s), e && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus()), t && Object(ca.b)(n ? ua.c.LeftRail : ua.c.NavDropdown)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = ga(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new no.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case ao.Category:
								case ao.GenericLink:
								case ao.Multi:
								case ao.Profile:
								case ao.Subreddit:
								case ao.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case ao.Header: {
									const t = n.last();
									t && t.type === ao.Header && n.pop(), n.push(e);
									break
								}
								case ao.LoadingState:
							}
						});
						const r = n.last();
						return r && r.type === ao.Header && n.pop(), n
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
						className: pa.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === xr.Home && this.props.onHomeClicked(), e.type === ao.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case ao.GenericClickable:
								return m.a.createElement(Gr, ba({}, n, {
									className: pa.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case ao.Category:
							case ao.GenericLink:
							case ao.CreatePost:
								return m.a.createElement(Gr, ba({}, n, {
									externalLink: ha(e),
									className: pa.a.item,
									to: e.model.url,
									badge: e.model.badge,
									icon: e.model.icon,
									text: e.model.text
								}));
							case ao.Header: {
								const n = e.model.button;
								return m.a.createElement(xo, {
									className: pa.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: pa.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case ao.LoadingState:
								return m.a.createElement(To, {
									className: pa.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case ao.Multi:
								return m.a.createElement(wo, ba({}, n, {
									className: pa.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: ao.Multi
								}));
							case ao.Profile:
								return m.a.createElement(wo, ba({}, n, {
									className: pa.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: ao.Profile
								}));
							case ao.Subreddit:
								return m.a.createElement(wo, ba({}, n, {
									className: pa.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: ao.Subreddit
								}));
							case ao.ExploreMenu:
								return m.a.createElement(ra, ba({}, n, {
									sendEvent: this.props.sendEvent,
									showIcons: !0,
									useNavStyles: !0
								}))
						}
					}))
				}
			}
			const Ea = Object(xe.b)(fa, va, Oa)(Object(Xe.c)(Ca)),
				ya = Object(xe.b)(fa, va, Oa)(Object(Xe.c)(Object(Ro.b)(Ca))),
				xa = Object(Hn.v)({
					pageLayer: e => e
				}),
				_a = Object(re.c)({
					currentPage: Rr,
					hideNSFWPref: O.H,
					isDropdownOpen: dr.a,
					isOverlayOpen: In.j,
					isPinnedSubscriptionsMenuDisabled: ur.b,
					isSubscriptionsPinned: ur.c
				});
			class ja extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(cr.d)()
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
							isOverlayOpen: o
						} = this.props, a = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, i = o;
						return m.a.createElement("div", {
							"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(ke.a)(Sr.a.container, n, {
								[Sr.a.mOpen]: a,
								[Sr.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[Sr.a.mPinned]: this.props.isSubscriptionsPinned,
								[Sr.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: Sr.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: Sr.a.containerText
						}, function(e) {
							switch (e.type) {
								case xr.Acknowledgements:
									return kr(s.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case xr.All:
									return kr(s.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case xr.Appeal:
									return kr(s.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case xr.Avatar:
									return kr(s.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case xr.Coins:
									return kr(s.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case xr.Community:
									return kr(e.model.displayText, !0);
								case xr.CommunityHubs:
									return kr(s.fbt._("Community Hubs", null, {
										hk: "jl2El"
									}).toString());
								case xr.CommunitySearch:
									return kr(s.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case xr.CreateCommunity:
									return kr(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case xr.CreatePost:
									return kr(s.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case xr.DailyCharts:
									return kr(s.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case xr.GlobalSearch:
									return kr(s.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case xr.Geotagging:
									return kr(s.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case xr.HappeningNow:
									return kr(s.fbt._("Happening Now", null, {
										hk: "1eys21"
									}).toString());
								case xr.Home:
									return kr(s.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case xr.Inbox:
									return kr(s.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case xr.ModListing:
									return kr("r/Mod");
								case xr.ModMail:
									return kr(s.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case xr.ModQueue:
									return kr(s.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case xr.Multi:
									return kr(e.model.displayText, !0);
								case xr.NotificationsInbox:
									return kr(s.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case xr.InternationalSite:
								case xr.Popular:
									return kr(s.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case xr.Predictions:
									return kr(s.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case xr.Premium:
									return kr(s.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case xr.PublicAccessNetwork:
									return kr(s.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case xr.Recap:
									return kr(s.fbt._("Reddit Recap", null, {
										hk: "KZIbz"
									}).toString());
								case xr.Report:
									return kr(s.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case xr.Settings:
									return kr(s.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case xr.SubredditCreation:
									return kr(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case xr.Talk:
									return kr(s.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case xr.Topic:
									return kr(e.model);
								case xr.Unknown:
									return kr("");
								case xr.UserDataRequest:
									return kr(s.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case xr.UserProfile:
									return kr(e.model.displayText, !0);
								case xr.UserProfileName:
									return kr(e.name, !0);
								case xr.ViewDraft:
									return kr(s.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t)), function(e, t) {
							const n = e => m.a.createElement(lr.a, {
								name: e,
								isFilled: !0,
								className: Sr.a.defaultIcon
							});
							switch (e.type) {
								case xr.All:
									return n("all");
								case xr.Acknowledgements:
								case xr.Appeal:
									return n("edit");
								case xr.Avatar:
									return n("avatar_style");
								case xr.Coins:
									return n("coins");
								case xr.Community:
								case xr.CommunitySearch: {
									const n = Object(mr.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(vr.b, {
										className: Sr.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case xr.CommunityHubs:
									return m.a.createElement(gr, {
										className: Sr.a.icon
									});
								case xr.CreateCommunity:
								case xr.CreatePost:
									return n("add");
								case xr.DailyCharts:
									return n("list_numbered");
								case xr.Geotagging:
									return n("custom_feed");
								case xr.GlobalSearch:
									return n("search");
								case xr.HappeningNow:
									return m.a.createElement(yr, {
										className: Sr.a.happeningNowIcon
									});
								case xr.Home:
									return n("home");
								case xr.Inbox:
									return m.a.createElement(Cr.a, {
										wrapperClassName: Sr.a.userIcon
									});
								case xr.ModListing:
									return n("mod_queue");
								case xr.ModMail:
									return n("mod_mail");
								case xr.ModQueue:
									return n("mod_queue");
								case xr.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: Sr.a.customFeedIcon
									});
								case xr.NotificationsInbox:
									return n("notification");
								case xr.InternationalSite:
								case xr.Popular:
									return n("popular");
								case xr.Predictions:
									return n("prediction");
								case xr.Premium:
									return n("premium");
								case xr.Recap:
									return m.a.createElement(_r, {
										className: Sr.a.wrappedRedditLogoActive
									});
								case xr.PublicAccessNetwork:
									return n("video_live");
								case xr.Report:
									return n("report");
								case xr.Settings:
									return m.a.createElement(Cr.a, {
										wrapperClassName: Sr.a.userIcon
									});
								case xr.SubredditCreation:
									return n("add");
								case xr.Talk:
									return n("live");
								case xr.Topic:
									return n("custom_feed");
								case xr.Unknown:
									return m.a.createElement("div", {
										className: Sr.a.unknownIcon
									});
								case xr.UserDataRequest:
									return n("add");
								case xr.UserProfile: {
									const n = Object(mr.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Or.a, {
										className: Sr.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case xr.UserProfileName:
									return m.a.createElement("div", {
										className: Sr.a.defaultIcon
									});
								case xr.Unknown:
									return m.a.createElement("div", {
										className: Sr.a.unknownIcon
									});
								case xr.UserProfile: {
									const n = Object(mr.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Or.a, {
										className: Sr.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case xr.ViewDraft:
									return n("edit")
							}
						}(t, r), !this.props.isSubscriptionsPinned && m.a.createElement(lr.a, {
							name: "caret_down",
							className: Sr.a.caretDown
						})), a && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(lr.a, {
							name: "side_menu",
							className: Sr.a.pin,
							onClick: i ? void 0 : this.props.onPinSubscriptions
						}), a && m.a.createElement(ya, {
							canAutofocus: !0,
							className: Object(ke.a)(Sr.a.listContainer, Sr.a.paddingBottom),
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
			var Sa = xa(Object(xe.b)(_a, (e, t) => ({
					closeDropdown: () => e(Object(He.f)()),
					onLocationRefresh: (n, s) => e(Object(ir.f)(n, t.pageLayer, s)),
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
				}))(Object(Xe.c)(ja))),
				Pa = n("./src/reddit/components/JumpToContent/index.tsx"),
				ka = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Na = n("./node_modules/lodash/isEmpty.js"),
				Ma = n.n(Na),
				wa = n("./node_modules/lodash/pick.js"),
				Ia = n.n(wa),
				Aa = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				Ta = n("./src/lib/hooks/usePrevious.ts"),
				Ra = n("./src/lib/makeSearchKey/index.ts"),
				La = n("./src/reddit/actions/search.ts"),
				Da = n("./src/lib/makeGqlRequest/index.ts"),
				Fa = n("./src/redditGQL/operations/SearchTypeahead.json"),
				Ga = n("./src/redditGQL/operations/SearchTypeaheadByType.json"),
				Ua = n("./src/telemetry/models/App.ts");
			var Ba = n("./node_modules/icepick/icepick.js"),
				Ha = n("./src/reddit/helpers/name/index.ts"),
				qa = n("./src/reddit/models/Search/index.ts");
			var Va = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Wa = n("./src/reddit/selectors/experiments/searchSingleVariant.ts");
			const za = e => async (t, n, s) => {
				let {
					gqlContext: r
				} = s;
				const o = n(),
					a = Object(Wa.a)(o, _.Gf),
					i = vn.eb(o, Va.a.Typeahead),
					c = Object(O.mb)(o);
				if (a) {
					const n = ((e, t) => {
						var n, s, r, o, a, i;
						const c = [],
							l = [],
							d = [],
							u = {},
							m = (e, n) => {
								var s, r, o;
								return Object(Ba.merge)({
									displayInfo: {
										iconUrl: (null === (s = e.styles) || void 0 === s ? void 0 : s.icon) || (null === (o = null === (r = e.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === o ? void 0 : o.url),
										isNSFW: e.isNsfw,
										publicDescription: e.publicDescriptionText || void 0
									},
									id: e.id,
									isTypeaheadSuggestion: !0,
									searchQuery: t,
									section: qa.c.typeahead,
									type: qa.b.subredditOrProfile
								}, n)
							};
						return null === (r = null === (s = null === (n = e.data.search) || void 0 === n ? void 0 : n.typeaheadByType) || void 0 === s ? void 0 : s.subreddits) || void 0 === r || r.forEach(e => {
							e.isNsfw ? d.push(e.id) : c.push(e.id), u[e.id] = m(e, {
								displayInfo: {
									isQuarantined: e.isQuarantined,
									subredditOrProfileName: Object(Ha.d)(e.name),
									subscribers: e.subscribersCount
								},
								isSubreddit: !0
							})
						}), null === (i = null === (a = null === (o = e.data.search) || void 0 === o ? void 0 : o.typeaheadByType) || void 0 === a ? void 0 : a.profiles) || void 0 === i || i.forEach(e => {
							var t, n;
							e.isNsfw ? d.push(e.id) : l.push(e.id), u[e.id] = m(e, {
								displayInfo: {
									karma: "Redditor" === e.redditorInfo.__typename ? null === (n = null === (t = e.redditorInfo) || void 0 === t ? void 0 : t.karma) || void 0 === n ? void 0 : n.total : void 0,
									subredditOrProfileName: Object(Ha.c)(e.name)
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
							productSurface: Ua.TelemetryAppName.web2x,
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
						return await Object(Da.a)(e, {
							...Ga,
							variables: r
						}, {
							traceRequestName: "search_typeahead_by_type"
						})
					})(r(), e, i, c)).body, e);
					(null == n ? void 0 : n.typeaheads) && (null == n ? void 0 : n.order) && t(Object(La.p)({
						typeaheadByTypeSuggestions: n.typeaheads,
						orderByType: n.order,
						searchQuery: e
					}))
				} else {
					const n = ((e, t) => {
						var n, s;
						const r = [],
							o = {};
						return null === (s = null === (n = e.data.search) || void 0 === n ? void 0 : n.typeahead) || void 0 === s || s.forEach(e => {
							var n, s, a, i, c;
							const l = e;
							let d, u, m, p, b, h;
							r.push(l.id), "Subreddit" === l.__typename ? (u = !0, m = l.isQuarantined, b = Object(Ha.d)(l.name), h = l.subscribersCount) : "Profile" === l.__typename && (d = !0, p = "Redditor" === l.redditorInfo.__typename ? null === (s = null === (n = l.redditorInfo) || void 0 === n ? void 0 : n.karma) || void 0 === s ? void 0 : s.total : void 0, b = Object(Ha.c)(l.name));
							const g = {
								displayInfo: {
									iconUrl: (null === (a = l.styles) || void 0 === a ? void 0 : a.icon) || (null === (c = null === (i = l.styles) || void 0 === i ? void 0 : i.legacyIcon) || void 0 === c ? void 0 : c.url),
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
								section: qa.c.typeahead,
								type: qa.b.subredditOrProfile
							};
							o[l.id] = g
						}), {
							order: r,
							typeaheads: o
						}
					})((await (async (e, t, n, s) => {
						const r = {
							productSurface: Ua.TelemetryAppName.web2x,
							query: t,
							searchInput: {
								queryId: n,
								isNsfwIncluded: s
							}
						};
						return await Object(Da.a)(e, {
							...Fa,
							variables: r
						}, {
							traceRequestName: "search_typeahead"
						})
					})(r(), e, i, c)).body, e);
					(null == n ? void 0 : n.typeaheads) && (null == n ? void 0 : n.order) && t(Object(La.p)({
						typeaheadSuggestions: n.typeaheads,
						order: n.order,
						searchQuery: e
					}))
				}
			};
			var Qa = n("./src/reddit/actions/search/trending.ts"),
				Ka = n("./src/reddit/components/SearchDropdown/index.tsx"),
				Za = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				Xa = n("./src/reddit/constants/parameters.ts"),
				Ya = n("./src/reddit/helpers/clickSourceData/index.ts"),
				Ja = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				$a = n("./src/reddit/helpers/isArrayEqual.ts"),
				ei = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				ti = n("./src/reddit/helpers/trackers/screenview.ts"),
				ni = n("./src/reddit/helpers/trackers/searchResults.ts"),
				si = n("./src/reddit/hooks/usePageLayer.ts"),
				ri = n("./src/reddit/selectors/searchFix.ts"),
				oi = n("./src/reddit/selectors/searchResults.ts"),
				ai = n("./src/reddit/selectors/trending.ts"),
				ii = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				ci = n("./src/reddit/controls/Search/index.m.less"),
				li = n.n(ci),
				di = n("./src/reddit/controls/Search/SearchBar/index.tsx"),
				ui = n("./src/reddit/controls/Search/SearchScopePill/index.tsx");
			const mi = /r\/([0-9a-zA-Z]*)\s/gi;

			function pi(e) {
				let {
					className: t
				} = e;
				var n, s;
				const r = Object(si.a)(),
					o = Object(Hn.cb)(r),
					a = Object(Hn.Z)(r),
					{
						nsfwSessionSetting: i
					} = Object(Za.b)(),
					[l, d] = Object(u.useState)(-1),
					[b, h] = Object(u.useState)([]),
					[g, f] = Object(u.useState)(!1),
					[v, C] = Object(u.useState)({}),
					[E, y] = Object(u.useState)([]),
					[x, j] = Object(u.useState)(null),
					[S, P] = Object(u.useState)(),
					N = Object(u.useRef)(null),
					M = Object(u.useRef)(null),
					w = Object(Xe.b)(),
					I = Object(xe.d)(),
					A = Object(xe.e)(In.b),
					T = Object(xe.e)(In.d),
					R = Object(xe.e)(O.m),
					L = Object(xe.e)(oi.s),
					D = Object(xe.e)(oi.r),
					F = Object(xe.e)(O.S),
					G = Object(xe.e)(O.fb),
					U = Object(xe.e)(In.s),
					B = Object(xe.e)(e => Object(Hn.s)(e, {
						pageLayer: r
					})),
					H = Object(xe.e)(e => Object(Hn.e)(e, {
						pageLayer: r
					})),
					q = Object(xe.e)(oi.j),
					V = Object(xe.e)(e => Object(Ar.C)(e, {
						subredditName: S ? S.title.replace("r/", "") : ""
					})),
					W = Object(xe.e)(e => Object(ai.a)(e, qa.d.dropdown).slice(0, Ka.d)),
					z = Object(xe.e)(e => Object(Wa.a)(e, _.Gf)),
					Q = Object(xe.e)(oi.F),
					K = Object(xe.e)(oi.E);
				let Z = [];
				z && K && (Z = [...K.communities, ...K.people, ...K.nsfw]);
				const X = Object(xe.e)(O.mb),
					Y = Object(Ta.a)(B) || null,
					J = Object(Ta.a)(H) || null,
					$ = Object(Ta.a)(S),
					ee = Object(Ta.a)(o),
					te = Object(Ta.a)(Q),
					ne = Object(Ta.a)(K),
					se = Object(Ta.a)(W),
					re = ((null === (n = M.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					oe = Ne(re),
					ae = A ? Object(vn.v)(A) : r ? Object(vn.v)(r) : void 0,
					ie = v[re],
					ce = Object(Ra.e)({
						...Ia()(a || {}, Xa.D),
						q: re
					});
				Object(u.useEffect)(() => {
					le()
				}, [se, W, ...z ? [K, ne] : [te, Q]]), Object(u.useEffect)(() => {
					Y !== B ? me({
						type: k.dc.Subreddit,
						enabled: !!B,
						payload: B
					}) : J !== H ? me({
						enabled: !!H,
						type: k.dc.Multireddit,
						payload: H
					}) : S !== $ && me({
						enabled: !!S,
						type: k.dc.SyntaxScoped,
						payload: S
					})
				}, [S, H, B, $, J, Y]), Object(u.useEffect)(() => {
					q.enabled && q.type === k.dc.SyntaxScoped && V && me({
						enabled: !0,
						type: k.dc.Subreddit,
						payload: V
					})
				}, [V, q]), Object(u.useEffect)(() => {
					(z ? Ma()(Z) : Ma()(Q)) || o ? Oe(o || "") : ve()
				}, [ee, o]);
				const le = () => {
						const e = z ? Me()(ne, K) : Object($a.a)(te, Q),
							t = Object($a.a)(se, W);
						if (!e || !t)
							if (z) {
								const e = Z.length ? [...Z, oe] : [...E, ...W];
								h(e)
							} else {
								const e = Q.length ? [...Q, oe] : [...E, ...W];
								h(e)
							}
					},
					de = e => I(Object(La.q)({
						searchQuery: e
					})),
					ue = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && ii.a.clear(Va.a.Typeahead), I(Object(La.l)())
					},
					me = e => I(Object(La.o)(e)),
					pe = (e, t, n) => {
						e.preventDefault(), ((e, t, n) => {
							I(Object(p.b)(Object(c.c)({
								pathname: e,
								search: t,
								state: n
							})))
						})(t.url, t.qs, {
							...n,
							routeName: U,
							subredditName: T
						})
					},
					be = async () => {
						W.length || g || (f(!0), await (() => I(Object(Qa.b)(qa.d.dropdown)))(), f(!1))
					}, he = e => {
						F && R && y(Object(Ln.Yb)({
							...e,
							section: qa.c.recent
						}, R.id))
					}, fe = (e, t) => {
						var n;
						if (!M.current || q.enabled) return !1;
						const s = t.split(" ").filter(t => t !== e).join(" ");
						return M.current.value = s, null === (n = M.current) || void 0 === n || n.dispatchEvent(new Event("input", {
							bubbles: !0
						})), P({
							title: e,
							key: `syntax-${e}`
						}), !0
					}, ve = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						d(-1), j(null), Oe(""), de(""), e && ii.a.update(Va.a.Typeahead), Se()
					};

				function Oe(e) {
					M.current && (M.current.value = e)
				}
				const Ce = (e, t, n, s, r) => {
						const o = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: re
						};
						w(Object(ni.z)(s, o, r))
					},
					Ee = (e, t, n) => {
						w(Object(ni.B)(e, t, n))
					},
					ye = (e, t, n, s) => {
						w(Object(ni.D)(e, t, n, s))
					},
					_e = () => {
						w(e => Object(ni.h)(e, ce, B)), (() => I(Object(La.k)()))(), ii.a.update(Va.a.Typeahead)
					},
					je = e => {
						const t = b[e] || null,
							n = t ? t.searchQuery : "";
						d(e), Oe(n), j(t)
					},
					Se = () => {
						if (W.length || be(), R) {
							const e = Object(Ln.S)(R.id);
							e.length > 0 && (y(F ? e : []), h([...e, ...W]))
						}
					},
					Pe = e => {
						!(!D || !D[e]) || (e ? (e => {
							v[e] || (v[e] = !0, C({
								...v
							}), I(za(e)), v[e] = !1, C({
								...v
							}))
						})(e) : Se())
					};

				function Ne(e) {
					var t;
					let n;
					if (q.enabled)
						if (q.type === k.dc.Subreddit) {
							const e = q.payload;
							n = {
								iconUrl: null === (t = e.icon) || void 0 === t ? void 0 : t.url,
								isNSFW: e.isNSFW,
								isQuarantined: e.isQuarantined || !1,
								scopeName: e.url
							}
						} else if (q.type === k.dc.Multireddit) {
						const e = q.payload;
						n = {
							iconUrl: e.icon,
							isNSFW: e.isNSFW,
							isQuarantined: !1,
							scopeName: e.url
						}
					} else if (q.type === k.dc.SyntaxScoped) {
						const e = q.payload;
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
						id: Object(Aa.a)(),
						searchQuery: e,
						type: qa.b.text,
						section: qa.c.recent,
						subredditOrProfileRestrictedName: n.scopeName,
						displayInfo: {
							iconUrl: n.iconUrl,
							isNSFW: n.isNSFW,
							isQuarantined: n.isQuarantined
						}
					}
				}
				return m.a.createElement("div", {
					className: Object(ke.a)(li.a.relativeWrapper, Sr.a.container, t, {
						"m-open": L
					}),
					id: Ka.b,
					ref: N
				}, m.a.createElement(di.c, {
					inputRef: M,
					isOpen: L,
					onChange: e => {
						const t = e.trim(),
							n = mi.exec(e);
						ii.a.update(Va.a.Typeahead), n && fe(n[0].trim(), t) || (de(t), Pe(t))
					},
					searchQuery: re,
					onFormSubmit: e => {
						e.preventDefault(), re.trim() && (async e => {
							var t, n, s;
							const o = (null === (t = M.current) || void 0 === t ? void 0 : t.value) || "";
							if (!o.trim()) return;
							o !== re && de(o);
							let a, c = {
									...qa.a
								},
								d = {},
								u = !0;
							if (x && x.searchQuery === re ? ((c = x).id || (c.id = Object(Aa.a)()), c.section === qa.c.recent ? (d = Object(Ya.c)(Ya.a.SEARCH_DROPDOWN, ae, c.isProfile || c.isSubreddit), a = Ra.a.Recent, Ee(o, c, l)) : c.section === qa.c.typeahead ? (d = Object(Ya.c)(Ya.a.TYPEAHEAD, ae), u = !1, ye(o, c, l, l)) : c.section === qa.c.trending ? (d = Object(Ya.c)(Ya.a.TYPEAHEAD, ae), a = (null === (n = c.post) || void 0 === n ? void 0 : n.isSponsored) ? Ra.a.PromotedTrend : Ra.a.Trending, I((e, t) => Object(ei.o)({
									state: t(),
									trendingSearch: c,
									telemetrySource: Va.a.Typeahead
								}))) : Ce(o, o, vn.c.Search, ni.a.RECENT)) : (c = Ne(o), w(Object(ni.p)(vn.a.FullSearchButton, Object(Ra.e)({
									q: re
								}), Va.a.Typeahead, r || void 0))), he(c), ue(u), !c.searchQuery) return;
							const m = Object(Ja.a)({
								searchItem: c,
								searchOptions: {
									source: a
								},
								activeSearchScope: q,
								includeNsfwResults: X && i
							});
							pe(e, m, d), c.isTypeaheadSuggestion && ve(u), null === (s = M.current) || void 0 === s || s.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(ia.c)(ia.a.SearchResults) || Object(ia.d)(ia.a.SearchResults), ii.a.update(Va.a.Typeahead), w(Object(ni.p)(vn.a.SearchBar, ce, Va.a.Typeahead, r || void 0)), L || ((() => I(Object(La.m)()))(), w(Object(ti.u)(ce, null != r ? r : void 0, Object(ri.b)({
							pageLayer: r
						})))), Pe(re)
					},
					onKeyDown: e => {
						if (e.key === aa.b.Escape || e.key === aa.b.Tab) ue();
						else if (e.key === aa.b.ArrowDown) {
							if (e.preventDefault(), 0 === b.length || !L) return;
							if (l >= b.length - 1) return;
							je(l + 1)
						} else if (e.key === aa.b.ArrowUp) {
							if (e.preventDefault(), 0 === b.length || !L) return;
							if (-1 === l) return;
							je(l - 1)
						} else e.key === aa.b.Backspace && !re && q.enabled && _e()
					},
					onClearSearchQuery: ve,
					onClickDismissSearchScopePill: _e,
					showSearchScopePill: q.enabled,
					searchScopePill: Object(ui.c)(q),
					searchOriginPage: ae
				}), m.a.createElement(Ka.c, {
					containerWidth: null === (s = N.current) || void 0 === s ? void 0 : s.offsetWidth,
					focusedItemIndex: l,
					searchOriginPage: ae,
					isOpen: L,
					isTrendingPending: g,
					isTypeaheadPending: ie,
					itemList: b,
					nightmode: G,
					recentSearches: E,
					trendingItems: W,
					searchItem: oe,
					typeaheadSuggestions: Q,
					typeaheadByTypeSuggestions: K,
					onClearSearchQuery: ve,
					onClose: ue,
					onRemoveRecentSearch: e => {
						R && 0 !== E.length && (Object(Ln.gb)(e, R.id), y(E.filter(t => t.searchQuery !== e.searchQuery)), d(-1))
					},
					onSendSearchClickRecentEvent: Ee,
					onSendSearchClickTypeaheadEvent: ye,
					onSetRecentSearch: he,
					onUpdateSearchQuery: Oe,
					fireAdPixelsOfType: (e, t) => I(Object(ge.y)(e, t))
				}))
			}
			var bi = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				hi = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				gi = n("./src/lib/combineRefs/index.tsx"),
				fi = n("./src/lib/hooks/useTooltip.ts"),
				vi = n("./src/reddit/actions/recap/index.ts"),
				Oi = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Ci = n("./src/reddit/components/PromptTooltip/TooltipHooked.m.less"),
				Ei = n.n(Ci);

			function yi() {
				return (yi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var xi = m.a.memo((function(e) {
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
					}, [t]), t ? n.styled ? m.a.createElement("div", yi({
						className: Object(ke.a)(Ei.a.tooltip, {
							[Ei.a.visible]: s || n.isInstant
						})
					}, n.popperProps, {
						onMouseEnter: () => n.isCloseOnHover && n.hide()
					}), n.children, s && !n.noArrow && m.a.createElement("div", yi({
						className: Ei.a.arrow
					}, n.arrowProps))) : m.a.createElement("div", n.popperProps, n.children) : null
				})),
				_i = n("./src/reddit/helpers/trackers/recap.ts"),
				ji = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Si = n("./src/reddit/hooks/useTracking.ts"),
				Pi = n("./src/reddit/routes/recap/index.ts"),
				ki = n("./src/reddit/selectors/experiments/recap.ts"),
				Ni = n("./src/reddit/pages/Recap/Components/NavbarIcon/index.m.less"),
				Mi = n.n(Ni);
			var wi = () => {
					const e = Object(Si.a)(),
						t = Object(xe.d)(),
						n = Object(ji.a)(),
						r = Object(xe.e)(ki.a),
						o = Object(xe.e)(ki.b),
						a = Object(xe.e)(ki.c),
						i = Object(xe.e)(O.m),
						c = Object(xe.e)(e => e.recap.bannerSeen),
						l = Object(fi.b)(),
						d = r && !c;
					Object(u.useEffect)(() => {
						!i || a || o || setTimeout(() => {
							t(Object(vi.d)(Object(Ln.P)(null == i ? void 0 : i.id))), Object(Ln.Vb)(null == i ? void 0 : i.id)
						}, 1e3)
					}, [i, t, a, o]), Object(u.useEffect)(() => {
						!d || a || o ? l.hide() : l.show()
					}, [l, d, a, o]);
					const p = {
						...l.arrowProps,
						style: {
							...l.arrowProps.style,
							borderBottom: "5px solid #ff4500"
						}
					};
					return r && !o ? m.a.createElement(m.a.Fragment, null, m.a.createElement(ar.a, {
						className: Mi.a.icon,
						innerRef: Object(gi.a)(n.target.ref, l.target.ref),
						to: Pi.a,
						onMouseEnter: () => {
							!l.visible && n.show()
						},
						onMouseLeave: n.hide,
						onClick: () => e(Object(_i.l)())
					}, m.a.createElement(_r, {
						className: Mi.a.psBattlesIcon
					})), !a && m.a.createElement(m.a.Fragment, null, m.a.createElement(Oi.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, s.fbt._("Reddit Recap", null, {
						hk: "4utP6e"
					})), m.a.createElement(xi, {
						arrowProps: p,
						popperProps: l.popperProps,
						visible: l.visible,
						hide: l.hide,
						isInstant: !0,
						styled: !0
					}, m.a.createElement("div", {
						className: Mi.a.tooltip,
						onMouseLeave: () => t(Object(vi.d)(!0))
					}, s.fbt._("Read your Reddit Recap", null, {
						hk: "2CFR0A"
					}))))) : null
				},
				Ii = n("./src/reddit/selectors/responsivePage.ts"),
				Ai = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Ti = n.n(Ai);
			var Ri, Li = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(ke.a)(Ti.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": s.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Ti.a.HomeLink,
						href: i.a.redditUrl
					}, m.a.createElement(bi.a, {
						className: Ti.a.Snoo
					}), m.a.createElement(hi.a, {
						className: Ti.a.Wordmark,
						color: "inherit"
					})))
				},
				Di = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				Fi = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Gi = n.n(Fi),
				Ui = n("./src/reddit/components/Header/NavBarIcon/index.m.less"),
				Bi = n.n(Ui);
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(Ri || (Ri = {}));
			var Hi = e => {
					const {
						eventNoun: t,
						imageSource: n,
						navLink: s,
						tooltip: r
					} = e, o = Object(Si.a)(), a = Object(ji.a)(), [i, c] = Object(u.useState)(Ri.Hidden), l = Object(u.useCallback)(() => {
						Object(Ln.Ob)({
							clicked: !0
						}), o(e => ({
							...Object(vn.o)(e),
							source: "nav",
							action: "click",
							noun: t
						}))
					}, [o, t]);
					return Object(u.useEffect)(() => {
						const e = Object(Ln.I)();
						e ? 3 !== e.views || e.clicked ? !e.clicked && e.views ? (Object(Ln.Ob)({
							views: e.views + 1
						}), c(Ri.Visible)) : e.clicked && c(Ri.Visible) : c(Ri.Hidden) : (Object(Ln.Ob)({
							views: 1
						}), c(Ri.Visible))
					}, []), i === Ri.Hidden ? null : m.a.createElement(m.a.Fragment, null, m.a.createElement(ar.a, {
						className: `${Gi.a.icon} ${Bi.a.linkIcon}`,
						innerRef: a.target.ref,
						to: s,
						onClick: l,
						onMouseEnter: a.show,
						onMouseLeave: a.hide
					}, m.a.createElement("img", {
						className: Bi.a.navIcon,
						src: n
					})), m.a.createElement(Oi.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, r))
				},
				qi = n("./src/lib/constants/colors.ts"),
				Vi = n("./src/reddit/actions/happeningNow/index.ts"),
				Wi = n("./src/reddit/selectors/features/happeningNow/index.ts");
			var zi = () => {
					const e = Object(xe.d)(),
						t = Object(Si.a)(),
						n = Object(xe.e)(Wi.f),
						r = Object(xe.e)(e => e.recap.bannerSeen && Object(Wi.g)(e)),
						o = Object(u.useCallback)(() => e(Object(Vi.a)()), [e]),
						a = Object(ji.a)(),
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
										borderBottom: `3px solid ${qi.a.alien600}`
									}
								},
								popperProps: {
									...e.popperProps,
									style: {
										...e.popperProps.style,
										background: qi.a.alien600,
										padding: "8px",
										cursor: "pointer"
									},
									onClick: n
								},
								visible: !0
							}
						})(a, {
							onClick: o
						}) : a, [a, r, o]),
						c = Object(u.useCallback)(() => {
							t(Object(la.b)(la.a.TopNav)), o()
						}, [t, o]);
					return Object(u.useEffect)(() => {
						e(Object(Vi.b)())
					}, [e]), m.a.createElement(m.a.Fragment, null, m.a.createElement(ar.a, {
						className: Object(ke.a)(Gi.a.icon, Gi.a.happeningNowLink),
						innerRef: i.target.ref,
						to: zr.c[zr.b.HappeningNow],
						onClick: c,
						onMouseEnter: i.show,
						onMouseLeave: i.hide
					}, m.a.createElement(yr, {
						className: Gi.a.customIcon
					}), n && m.a.createElement("div", {
						className: Gi.a.liveContentAvailabilityBadge
					})), m.a.createElement(Oi.a, {
						arrowProps: i.arrowProps,
						popperProps: i.popperProps,
						visible: i.visible
					}, r ? s.fbt._("Find live chats and audio talks happening now", null, {
						hk: "nphMZ"
					}) : s.fbt._("Happening Now", null, {
						hk: "qEee0"
					})))
				},
				Qi = n("./src/reddit/actions/cooldownTime.ts");

			function Ki(e) {
				return `${e}`.padStart(2, "0")
			}
			class Zi {
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
			var Xi = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				Yi = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				Ji = n.n(Yi);
			const $i = Object(re.c)({
				isEmbedSubredditPage: Xi.c,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: In.b
			});
			class ec extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${Ki(n)}` : `${n}:${Ki(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new Zi(this.drawTimer), this.state = {
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
					return t && !n ? null : !e || n ? m.a.createElement(Ur.a, {
						isActive: !0,
						unreadCount: -1,
						showEmpty: !0
					}) : m.a.createElement("div", {
						className: Ji.a.timer
					}, s.fbt._("{Time remaining}", [s.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var tc = Object(xe.b)($i, e => ({
					fetchCooldownTimer: () => e(Object(Qi.e)())
				}))(ec),
				nc = n("./src/reddit/helpers/trackers/features/recapGame.ts");
			var sc = e => {
					const t = Object(xe.e)(O.fb);
					return m.a.createElement("svg", {
						className: e.className,
						id: e.id,
						viewBox: "0 0 20 20",
						xmlns: "http://www.w3.org/2000/svg"
					}, t ? m.a.createElement(m.a.Fragment, null, m.a.createElement("path", {
						fill: "#D7DADC",
						d: "M17.8837,15.1105c-.6211-.5029-1.375-1.0479-2.1729-1.624-1.1832-.8549-2.512-1.8215-3.7875-2.9136,.1809,.003,.3718,.0117,.5746,.021,.8086,.0381,1.7246,.0811,2.7344-.2285,.4424-.1367,.7588-.5039,.8262-.959,.0654-.4473-.127-.8828-.5039-1.1348-.2305-.1553-.4873-.3535-.7676-.5693-1.5137-1.1695-4.0327-3.1045-6.6442-1.1925-.7437-.97-1.4081-1.9233-2.0052-2.786C4.6376,1.5568,3.6454,.1242,2.4784,.0294,2.164,.0001,1.6728,.0734,1.1962,.5666,.5234,1.2628,.2011,2.4816,.2665,4.09c.0809,2.0095,.8107,4.6588,2.191,7.2161l.0004-.0002c-.0544,.0448-.1119,.0787-.165,.1279-2.4531,2.2666-.9316,5.127-.0225,6.8359,.166,.3125,.3193,.5996,.4326,.8525,.1865,.4141,.583,.6777,1.0352,.6875l.0273,.001c.4492,0,.8525-.249,1.0566-.6553,.4736-.9434,.585-1.8535,.6836-2.6572,.0402-.329,.0812-.6225,.138-.8911,.2499,.2628,.4957,.5087,.7116,.6987,3.502,3.084,6.9404,3.6621,9.0254,3.6621,.7383,0,1.3076-.0732,1.6494-.1328,1.2651-.2205,2.2037-.6692,2.541-1.2058,.0088-.0126,.0184-.0237,.0263-.037l.0099-.014c.791-1.4316-.9072-2.8066-1.7236-3.4678ZM7.8526,9.5233c.0085-.1071,.0189-.213,.0359-.3171,.0132-.0797,.0311-.1567,.0497-.2342,.0261-.1094,.0587-.2156,.0966-.3199,.025-.0686,.0505-.1366,.0809-.2026,.0513-.1116,.1152-.2166,.1834-.3197,.0338-.051,.0627-.1045,.1009-.1532,.1154-.147,.2465-.2856,.4055-.4082,.5654-.4355,1.1211-.6182,1.6768-.6182,1.1553,0,2.3086,.79,3.541,1.7412,.249,.1914,.4805,.3701,.6943,.5205-.749,.1992-1.4668,.166-2.1611,.1328-.0968-.0045-.1938-.0089-.2908-.0128-.0324-.0013-.0648-.002-.0972-.0031-.0657-.0023-.1315-.0045-.1971-.0058-.0417-.0008-.0832-.0004-.1248-.0007-.0563-.0003-.1126-.0008-.1688,0-.0451,.0007-.09,.0029-.1349,.0046-.0522,.0019-.1044,.0037-.1565,.0071-.0472,.0031-.0941,.0078-.1411,.0123-.0496,.0046-.0992,.0095-.1486,.0159-.0478,.0062-.0953,.0142-.1428,.0222-.0477,.008-.0953,.0165-.1428,.0264-.0484,.0102-.0964,.0222-.1445,.0345-.0458,.0118-.0916,.0246-.137,.0386-.0483,.0149-.0963,.0314-.1441,.049-.0443,.0162-.0882,.0341-.132,.0527-.0482,.0206-.0963,.0424-.1439,.0662-.0423,.0211-.0842,.0444-.126,.0681-.0476,.027-.095,.0548-.142,.0854-.0409,.0267-.0812,.0564-.1216,.086-.0468,.0343-.0935,.0687-.1395,.1071-.0388,.0323-.0768,.0687-.1151,.1041-.046,.0426-.0921,.0846-.1372,.1318-.0372,.0389-.0734,.083-.1099,.1252-.0446,.0516-.0895,.1014-.1332,.1581-.0344,.0446-.0676,.0954-.1014,.1433-.0443,.0629-.0891,.1234-.1323,.1922-.0294,.0469-.0575,.1009-.0864,.1506-.115,.198-.2266,.4132-.3322,.6594-.0752,.1753-.1482,.3614-.2181,.5633-.192-.6772-.3547-1.4454-.3752-2.1862-.0024-.0839-.0076-.168-.006-.2509,.0019-.0903,.0119-.1776,.0191-.2664ZM1.5155,4.0392c-.0498-1.2227,.1621-2.1719,.5791-2.6035,.1641-.1699,.2559-.167,.2822-.1602,.5781,.0469,1.6738,1.6299,2.7334,3.1602,.6368,.9202,1.3482,1.9408,2.1526,2.9805l.0002-.0003c-.6752,1.0078-.7518,2.2477-.6306,3.3252-.9521-.2743-2.0648-.4027-3.0941-.0455h.0002c-1.2745-2.3636-1.9489-4.8051-2.0232-6.6563Zm3.0757,10.6832l-.0056,.0152c-.0601,.166-.108,.3361-.1475,.509l-.0056,.0258c-.0383,.1718-.0692,.3459-.0953,.5212l-.0034,.024c-.0258,.176-.0479,.3529-.0695,.5292-.085,.6914-.1719,1.4043-.4932,2.1084-.1123-.2354-.25-.4951-.3975-.7725-1.082-2.0342-1.8467-3.8398-.2334-5.3311,.5-.4609,1.1074-.6367,1.748-.6367,.2145,0,.4326,.026,.6513,.0621,.0782,.0125,.1553,.0272,.2336,.0435,.1323,.0282,.2639,.0616,.3956,.0991,.5746,.1604,1.1385,.3903,1.6385,.6332-.2747,.0465-.5194,.1044-.7512,.1673-1.5093,.4095-2.1515,1.1489-2.4651,2.0023Zm11.6782,3.9574c-1.4268,.1465-5.1846,.125-9.0879-3.3115-.2683-.2363-.5949-.5766-.9188-.9308,.394-.3315,1.0314-.5594,2.075-.697,1.2078,1.383,3.7637,3.4199,8.9479,4.7631-.2884,.072-.6232,.1354-1.0162,.1763Zm-6.9681-5.748c.3376-1.0962,.7023-1.691,1.1412-2.0081,.1417,.1348,.2871,.2742,.4089,.3811,1.3936,1.2188,2.8457,2.2686,4.127,3.1943,.7842,.5664,1.5244,1.1016,2.1182,1.582,.7284,.5904,1.1811,1.063,1.3647,1.4141-5.4612-1.2592-8.038-3.2958-9.16-4.5635Z"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement("path", {
						d: "M17.8837,15.1105c-.6211-.5029-1.375-1.0479-2.1729-1.624-1.1832-.8549-2.512-1.8215-3.7875-2.9136,.1809,.003,.3718,.0117,.5746,.021,.8086,.0381,1.7246,.0811,2.7344-.2285,.4424-.1367,.7588-.5039,.8262-.959,.0654-.4473-.127-.8828-.5039-1.1348-.2305-.1553-.4873-.3535-.7676-.5693-1.5137-1.1695-4.0327-3.1045-6.6442-1.1925-.7437-.97-1.4081-1.9233-2.0052-2.786C4.6376,1.5568,3.6454,.1242,2.4784,.0294,2.164,.0001,1.6728,.0734,1.1962,.5666,.5234,1.2628,.2011,2.4816,.2665,4.09c.0809,2.0095,.8107,4.6588,2.191,7.2161l.0004-.0002c-.0544,.0448-.1119,.0787-.165,.1279-2.4531,2.2666-.9316,5.127-.0225,6.8359,.166,.3125,.3193,.5996,.4326,.8525,.1865,.4141,.583,.6777,1.0352,.6875l.0273,.001c.4492,0,.8525-.249,1.0566-.6553,.4736-.9434,.585-1.8535,.6836-2.6572,.0402-.329,.0812-.6225,.138-.8911,.2499,.2628,.4957,.5087,.7116,.6987,3.502,3.084,6.9404,3.6621,9.0254,3.6621,.7383,0,1.3076-.0732,1.6494-.1328,1.2651-.2205,2.2037-.6692,2.541-1.2058,.0088-.0126,.0184-.0237,.0263-.037l.0099-.014c.791-1.4316-.9072-2.8066-1.7236-3.4678ZM7.8526,9.5233c.0085-.1071,.0189-.213,.0359-.3171,.0132-.0797,.0311-.1567,.0497-.2342,.0261-.1094,.0587-.2156,.0966-.3199,.025-.0686,.0505-.1366,.0809-.2026,.0513-.1116,.1152-.2166,.1834-.3197,.0338-.051,.0627-.1045,.1009-.1532,.1154-.147,.2465-.2856,.4055-.4082,.5654-.4355,1.1211-.6182,1.6768-.6182,1.1553,0,2.3086,.79,3.541,1.7412,.249,.1914,.4805,.3701,.6943,.5205-.749,.1992-1.4668,.166-2.1611,.1328-.0968-.0045-.1938-.0089-.2908-.0128-.0324-.0013-.0648-.002-.0972-.0031-.0657-.0023-.1315-.0045-.1971-.0058-.0417-.0008-.0832-.0004-.1248-.0007-.0563-.0003-.1126-.0008-.1688,0-.0451,.0007-.09,.0029-.1349,.0046-.0522,.0019-.1044,.0037-.1565,.0071-.0472,.0031-.0941,.0078-.1411,.0123-.0496,.0046-.0992,.0095-.1486,.0159-.0478,.0062-.0953,.0142-.1428,.0222-.0477,.008-.0953,.0165-.1428,.0264-.0484,.0102-.0964,.0222-.1445,.0345-.0458,.0118-.0916,.0246-.137,.0386-.0483,.0149-.0963,.0314-.1441,.049-.0443,.0162-.0882,.0341-.132,.0527-.0482,.0206-.0963,.0424-.1439,.0662-.0423,.0211-.0842,.0444-.126,.0681-.0476,.027-.095,.0548-.142,.0854-.0409,.0267-.0812,.0564-.1216,.086-.0468,.0343-.0935,.0687-.1395,.1071-.0388,.0323-.0768,.0687-.1151,.1041-.046,.0426-.0921,.0846-.1372,.1318-.0372,.0389-.0734,.083-.1099,.1252-.0446,.0516-.0895,.1014-.1332,.1581-.0344,.0446-.0676,.0954-.1014,.1433-.0443,.0629-.0891,.1234-.1323,.1922-.0294,.0469-.0575,.1009-.0864,.1506-.115,.198-.2266,.4132-.3322,.6594-.0752,.1753-.1482,.3614-.2181,.5633-.192-.6772-.3547-1.4454-.3752-2.1862-.0024-.0839-.0076-.168-.006-.2509,.0019-.0903,.0119-.1776,.0191-.2664ZM1.5155,4.0392c-.0498-1.2227,.1621-2.1719,.5791-2.6035,.1641-.1699,.2559-.167,.2822-.1602,.5781,.0469,1.6738,1.6299,2.7334,3.1602,.6368,.9202,1.3482,1.9408,2.1526,2.9805l.0002-.0003c-.6752,1.0078-.7518,2.2477-.6306,3.3252-.9521-.2743-2.0648-.4027-3.0941-.0455h.0002c-1.2745-2.3636-1.9489-4.8051-2.0232-6.6563Zm3.0757,10.6832l-.0056,.0152c-.0601,.166-.108,.3361-.1475,.509l-.0056,.0258c-.0383,.1718-.0692,.3459-.0953,.5212l-.0034,.024c-.0258,.176-.0479,.3529-.0695,.5292-.085,.6914-.1719,1.4043-.4932,2.1084-.1123-.2354-.25-.4951-.3975-.7725-1.082-2.0342-1.8467-3.8398-.2334-5.3311,.5-.4609,1.1074-.6367,1.748-.6367,.2145,0,.4326,.026,.6513,.0621,.0782,.0125,.1553,.0272,.2336,.0435,.1323,.0282,.2639,.0616,.3956,.0991,.5746,.1604,1.1385,.3903,1.6385,.6332-.2747,.0465-.5194,.1044-.7512,.1673-1.5093,.4095-2.1515,1.1489-2.4651,2.0023Zm11.6782,3.9574c-1.4268,.1465-5.1846,.125-9.0879-3.3115-.2683-.2363-.5949-.5766-.9188-.9308,.394-.3315,1.0314-.5594,2.075-.697,1.2078,1.383,3.7637,3.4199,8.9479,4.7631-.2884,.072-.6232,.1354-1.0162,.1763Zm-6.9681-5.748c.3376-1.0962,.7023-1.691,1.1412-2.0081,.1417,.1348,.2871,.2742,.4089,.3811,1.3936,1.2188,2.8457,2.2686,4.127,3.1943,.7842,.5664,1.5244,1.1016,2.1182,1.582,.7284,.5904,1.1811,1.063,1.3647,1.4141-5.4612-1.2592-8.038-3.2958-9.16-4.5635Z"
					}), m.a.createElement("g", null, m.a.createElement("path", {
						fill: "#ffd637",
						d: "M3.3739,17.6828c.1475,.2773,.2852,.5371,.3975,.7725,.3213-.7041,.4082-1.417,.4932-2.1084,.1963-1.6045,.3984-3.2617,3.543-3.7939-.8721-.4238-1.9355-.8379-2.9189-.8379-.6406,0-1.248,.1758-1.748,.6367-1.6133,1.4912-.8486,3.2969,.2334,5.3311Z"
					}), m.a.createElement("path", {
						fill: "#ffd637",
						d: "M12.5566,9.3449c.6943,.0332,1.4121,.0664,2.1611-.1328-.2139-.1504-.4453-.3291-.6943-.5205-1.2324-.9512-2.3857-1.7412-3.541-1.7412-.5557,0-1.1113,.1826-1.6768,.6182-1.3682,1.0547-1.0322,3.1016-.5908,4.6582,1.0518-3.0371,2.7197-2.957,4.3418-2.8818Z"
					}), m.a.createElement("path", {
						fill: "#fffde1",
						d: "M5.0481,10.4842c.0221,.0007,.0444-.0036,.0665-.0027,.5258,.0217,1.0421,.1224,1.5181,.2596-.0303-.2693-.0483-.5488-.0476-.8323,.0001-.0459,.0093-.0926,.0104-.1387,.0195-.8077,.1887-1.6389,.6675-2.3538-.8044-1.0397-1.5159-2.0602-2.1526-2.9805-1.0596-1.5303-2.1553-3.1133-2.7334-3.1602-.0264-.0068-.1182-.0098-.2822,.1602-.417,.4316-.6289,1.3809-.5791,2.6035,.0743,1.8513,.7487,4.2927,2.0232,6.6562,.493-.1711,1.0049-.2257,1.5093-.2112Z"
					}), m.a.createElement("path", {
						fill: "#ffd637",
						d: "M8.3334,13.7394c-1.0439,.1374-1.6766,.3666-2.0706,.6981,.3239,.3542,.6505,.6945,.9188,.9308,3.9033,3.4365,7.6611,3.458,9.0879,3.3115,.3931-.0408,.7278-.1042,1.0162-.1763-5.1826-1.3428-7.744-3.3816-8.9523-4.7642Z"
					}), m.a.createElement("path", {
						fill: "#ffd637",
						d: "M17.0966,16.0812c-.5938-.4805-1.334-1.0156-2.1182-1.582-1.2812-.9258-2.7334-1.9756-4.127-3.1943-.1231-.1081-.2701-.2491-.4134-.3853-.4377,.3183-.8,.9164-1.1373,2.0116,1.1216,1.2677,3.6981,3.3047,9.1605,4.5642-.1837-.3511-.6364-.8237-1.3647-1.4141Z"
					}))))
				},
				rc = n("./src/reddit/selectors/experiments/recapLeadUpGame.ts"),
				oc = n("./src/reddit/components/RecapGame/index.navbar.m.less"),
				ac = n.n(oc);
			var ic = e => {
					let {
						isLoggedIn: t
					} = e;
					const n = Object(xe.d)(),
						r = Object(Xe.b)(),
						o = Object(ji.a)(),
						a = Object(xe.e)(rc.b),
						i = Object(xe.e)(e => Object(rc.a)(e, {
							pageLayer: e.platform.currentPage
						}));
					return a || i ? m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: Object(ke.a)(ac.a.icon, ac.a.recapLeadUpGameLink, {
							[ac.a.loggedIn]: t
						}),
						ref: o.target.ref,
						onClick: () => {
							n(Object(qe.recapGameToggle)()), r(Object(nc.a)())
						},
						onMouseEnter: o.show,
						onMouseLeave: o.hide
					}, m.a.createElement(sc, {
						className: ac.a.recapLeadUpGameIcon
					})), m.a.createElement(Oi.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, s.fbt._("Spooky Bananas", null, {
						hk: "3TnY2e"
					}))) : null
				},
				cc = n("./src/reddit/helpers/trackers/hotPotato.ts");
			var lc = e => m.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg"
			}, m.a.createElement("g", {
				fill: "#ff4500"
			}, m.a.createElement("path", {
				d: "m6.4 0h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m12.8 0h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m19.2 0h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m25.6 0h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m32 6.4h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m32 12.8h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m32 19.2h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m32 25.6h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m19.2 25.6h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m25.6 25.6h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m6.4 25.6h-6.4v6.4h6.4z"
			})), m.a.createElement("path", {
				d: "m19.2 12.8h-6.4v6.4h6.4z",
				fill: "#000"
			}), m.a.createElement("g", {
				fill: "#ff4500"
			}, m.a.createElement("path", {
				d: "m6.4 19.2h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m6.4 12.8h-6.4v6.4h6.4z"
			}), m.a.createElement("path", {
				d: "m6.4 6.4h-6.4v6.4h6.4z"
			})), m.a.createElement("path", {
				d: "m19.2 6.4h-12.8v25.6h6.4v-6.4h12.8v-19.2zm0 12.8h-6.4v-6.4h6.4z",
				fill: "#fff"
			}));
			var dc = e => m.a.createElement("svg", {
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
				uc = n("./src/reddit/selectors/avatarMarketing.ts"),
				mc = n("./src/lib/initializeClient/installReducer.ts"),
				pc = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(mc.a)({
				features: {
					avatar: pc.a
				}
			});
			const bc = e => 864e5 * e,
				hc = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				gc = e => {
					if (fc(e)) return !0;
					const t = hc(e),
						n = (new Date).getTime(),
						s = Object(Ln.z)();
					if (!(null == t ? void 0 : t.active) || !vc(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
					if (s && t) {
						const e = n > s.lastInteractionTimestamp + bc(null == t ? void 0 : t.min_days_since_last_event_interaction);
						return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
					}
					return !1
				},
				fc = e => {
					const t = Object(In.r)(e);
					return Boolean((null == t ? void 0 : t[Xa.F]) && Object(D.a)(t[Xa.F]))
				},
				vc = (e, t, n) => {
					var s;
					const r = !!(null === (s = Object(O.m)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return Oc(e, t) && n === r
				},
				Oc = (e, t) => {
					const n = Object(O.m)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > bc(t)
				};
			var Cc = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Ec = e => {
					return Object(Cc.c)(e, {
						experimentEligibilitySelector: Cc.a,
						experimentName: _.vb
					}) === _.Nd
				},
				yc = e => {
					return Object(Cc.c)(e, {
						experimentEligibilitySelector: Cc.a,
						experimentName: _.gf
					}) === _.Nd
				};
			var xc = m.a.memo((function(e) {
					const t = Object(Si.a)(),
						n = Object(u.useCallback)(() => {
							t(e => ({
								...Object(vn.o)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(u.useCallback)(() => {
							t(Object(cc.a)())
						}, [t]),
						o = Object(xe.e)(O.S),
						a = Object(xe.e)(Ec),
						i = Object(xe.e)(yc),
						c = Object(xe.e)(Xi.a),
						l = Object(xe.e)(Xi.b),
						d = Object(xe.e)(gc),
						p = Object(xe.e)($r.c),
						b = Object(xe.e)(eo.a),
						h = Object(xe.e)(uc.a),
						g = Object(ji.a)(),
						f = Object(ji.a)(),
						v = Object(ji.a)(),
						C = Object(ji.a)(),
						E = !(d || p && !!h) || e.isAvatarButtonClicked;
					return m.a.createElement("div", {
						className: Object(ke.a)(Gi.a.container, e.className, {
							[Gi.a.containerWithoutCoin]: !E
						})
					}, m.a.createElement("div", {
						className: Gi.a.row
					}, m.a.createElement(ar.a, {
						className: Gi.a.icon,
						innerRef: g.target.ref,
						to: o ? zr.c[zr.b.Popular] : zr.c[zr.b.Home],
						onClick: n,
						onMouseEnter: g.show,
						onMouseLeave: g.hide
					}, m.a.createElement(lr.a, {
						name: "popular"
					})), m.a.createElement(Oi.a, {
						arrowProps: g.arrowProps,
						popperProps: g.popperProps,
						visible: g.visible
					}, s.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), E && m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						ref: C.target.ref,
						onMouseEnter: C.show,
						onMouseLeave: C.hide,
						className: Gi.a.icon
					}, m.a.createElement(Di.a, null)), m.a.createElement(Oi.a, {
						arrowProps: C.arrowProps,
						popperProps: C.popperProps,
						visible: C.visible
					}, s.fbt._("Coin", null, {
						hk: "zOcNq"
					}))), b && m.a.createElement(zi, null), i && m.a.createElement(m.a.Fragment, null, m.a.createElement(ar.a, {
						className: Gi.a.icon,
						innerRef: f.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: f.show,
						onMouseLeave: f.hide
					}, m.a.createElement(dc, {
						className: Gi.a.psBattlesIcon
					})), m.a.createElement(Oi.a, {
						arrowProps: f.arrowProps,
						popperProps: f.popperProps,
						visible: f.visible
					}, s.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), m.a.createElement(wi, null), c && m.a.createElement(m.a.Fragment, null, m.a.createElement(ar.a, {
						className: Object(ke.a)(Gi.a.icon, Gi.a.hotPotatoLink),
						innerRef: v.target.ref,
						to: `/r/${l}`,
						onMouseEnter: v.show,
						onMouseLeave: v.hide,
						onClick: r
					}, m.a.createElement(lc, {
						className: Gi.a.hotPotatoIcon
					}), m.a.createElement(tc, null)), m.a.createElement(Oi.a, {
						arrowProps: v.arrowProps,
						popperProps: v.popperProps,
						visible: v.visible
					}, s.fbt._("Place your tile", null, {
						hk: "2ZCdRE"
					}))), m.a.createElement(ic, {
						isLoggedIn: !0
					}), a && m.a.createElement(Hi, {
						eventNoun: "love_island",
						imageSource: "https://styles.redditmedia.com/t5_3lwmq/styles/communityIcon_7atioswvjm671.png?width=256&s=6096b8adbfa2d4911d9bc92afff25fd764987498",
						navLink: "/r/LoveIslandTV/",
						tooltip: s.fbt._("Visit r/LoveIslandTV for the latest!", null, {
							hk: "22mySr"
						})
					})))
				})),
				_c = n("./src/reddit/actions/tooltip.ts"),
				jc = n("./src/lib/hooks/useOnClickOutside.ts"),
				Sc = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				Pc = n.n(Sc);

			function kc() {
				return (kc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Nc = Ke.a.button("Button", Pc.a),
				Mc = Ke.a.div("Container", Pc.a);

			function wc(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(Nc, kc({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(Mc, {
					className: Object(ke.a)({
						[Pc.a.isOpen]: n
					})
				}, t))
			}
			var Ic = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				Ac = n.n(Ic);
			var Tc = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Ur.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount,
					showEmpty: !e.unreadCount
				}), m.a.createElement(lr.a, {
					name: "notification",
					className: Ac.a.icon2020
				})),
				Rc = n("./src/reddit/components/InboxBanner/index.m.less"),
				Lc = n.n(Rc);
			var Dc = Object(Qt.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(w.b)(navigator.userAgent);
					return m.a.createElement(Zt.e, null, m.a.createElement(Zt.i, {
						className: Lc.a.modalHeader
					}, m.a.createElement(Zt.q, {
						className: Lc.a.modalTitle
					}, s.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(un.t, {
						onClick: t,
						Icon: Object(lr.b)("close_fill"),
						size: un.d.XXS,
						priority: un.c.Plain,
						className: Lc.a.modalCloseIcon
					})), m.a.createElement(Zt.l, null, m.a.createElement("ul", {
						className: Lc.a.modalList
					}, m.a.createElement("li", {
						className: Lc.a.modalListItem
					}, m.a.createElement("span", null, "1"), s.fbt._("Click on {lockIcon} in your browser address bar", [s.fbt._param("lockIcon", m.a.createElement(lr.a, {
						name: "lock_fill",
						className: Lc.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: Lc.a.modalListItem
					}, m.a.createElement("span", null, "2"), s.fbt._("Select {lockIcon} site settings", [s.fbt._param("lockIcon", m.a.createElement(lr.a, {
						name: "settings_fill",
						className: Lc.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: Lc.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), s.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [s.fbt._param("lockIcon", m.a.createElement(lr.a, {
						name: "notification_fill",
						className: Lc.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(Zt.g, null, m.a.createElement(un.t, {
						text: s.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				Fc = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				Gc = n.n(Fc);

			function Uc() {
				return (Uc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Bc = m.a.memo((function(e) {
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
					}, [t]), t ? m.a.createElement("div", Uc({
						id: "INBOX--TOOLTIP",
						className: Object(ke.a)(Gc.a.tooltip, {
							[Gc.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				Hc = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				qc = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts");
			const Vc = Object(Ba.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var Wc = n("./src/reddit/selectors/activeModal.ts"),
				zc = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				Qc = n.n(zc);
			const Kc = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				Zc = m.a.memo((function(e) {
					const t = Object(xe.d)(),
						n = Object(ji.a)(),
						r = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(fi.a)(e);
								return Object(Ba.updateIn)(t, ["modifiers"], e => Object(Ba.push)(e, Vc))
							}, [e]);
							return Object(fi.b)(t)
						}(),
						o = Object(fi.b)(Kc),
						[a, i] = Object(qc.a)(e.userId),
						c = Object(xe.e)(Object(Wc.c)("browser_notifications_permission_settings")),
						l = Object(u.useCallback)(() => {
							r.hide(), n.hide(), a || i()
						}, [r, n, i, a]);
					Object(jc.a)("INBOX--TOOLTIP", l);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(gi.a)(n.target.ref, r.target.ref, o.target.ref)
					}, m.a.createElement(wc, {
						"aria-expanded": r.visible,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Qc.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), r.visible ? l() : r.show(), e.sendNavClickInbox()
						},
						isOpen: r.visible
					}, m.a.createElement(Tc, {
						unreadCount: e.unreadCount
					})), !r.visible && !o.visible && m.a.createElement(Oi.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, s.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(Bc, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, m.a.createElement(Hc.a, {
						isOpen: r.visible,
						hideTooltip: l,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), c && m.a.createElement(Dc, {
						onClose: () => {
							t(Object(Gt.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var Xc = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				Yc = n("./src/reddit/actions/snoovatarModal.ts"),
				Jc = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				$c = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				el = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				tl = n.n(el);
			const {
				fbt: nl
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function sl(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(Ln.z)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(Ln.pb)(s)
				}
			}
			var rl = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(xe.e)(hc),
						s = Object(xe.d)(),
						r = Object(Si.a)();
					Object(u.useEffect)(() => {
						r(Object(Jc.p)())
					}, [r]), Object(u.useEffect)(() => {
						n || s(Object(Xc.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						sl(n)
					}, [n]);
					return m.a.createElement(un.k, {
						onClick: () => {
							r(Object(Jc.d)()), sl(n, "click"), s(Object(Yc.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: tl.a.ctaContainer
					}, m.a.createElement("img", {
						className: tl.a.quickCreateGiftAnimation,
						src: `${i.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: nl._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement($c.a, {
						className: Object(ke.a)(tl.a.sparkle, tl.a.sparkle1)
					}), m.a.createElement($c.a, {
						className: Object(ke.a)(tl.a.sparkle, tl.a.sparkle2)
					}), m.a.createElement($c.a, {
						className: Object(ke.a)(tl.a.sparkle, tl.a.sparkle3)
					})), nl._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				ol = n("./src/reddit/components/Header/AvatarStorefrontCta/index.m.less"),
				al = n.n(ol);
			const {
				fbt: il
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var cl = e => {
					let {
						handleButtonClick: t
					} = e;
					const n = Object(xe.d)(),
						s = Object(Si.a)(),
						r = Object(xe.e)(uc.b);
					Object(u.useEffect)(() => {
						r || n(Object(Xc.a)())
					}, [r, n]);
					return m.a.createElement(un.a, {
						onClick: () => {
							n(Object(Yc.b)({
								clickSource: "nav"
							})), s(Jc.c), t && t()
						},
						className: Object(ke.a)(al.a.ctaContainer)
					}, m.a.createElement($c.a, {
						className: Object(ke.a)(al.a.sparkle, al.a.sparkle1)
					}), m.a.createElement($c.a, {
						className: Object(ke.a)(al.a.sparkle, al.a.sparkle2)
					}), m.a.createElement($c.a, {
						className: Object(ke.a)(al.a.sparkle, al.a.sparkle3)
					}), il._("Shop Avatars", null, {
						hk: "280YIG"
					}))
				},
				ll = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				dl = n("./src/reddit/actions/changeUsername.ts"),
				ul = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				ml = n("./src/reddit/actions/postCreation/general.ts"),
				pl = n("./src/reddit/actions/preferences.ts"),
				bl = n("./src/reddit/components/BlockNavigation/index.tsx"),
				hl = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				gl = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var fl = Object(Ut.a)({
					getComponent: () => Object(de.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				vl = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Ol = n("./src/reddit/components/Settings/modalIds.ts"),
				Cl = n("./src/reddit/helpers/trackers/emailCollection.ts"),
				El = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				yl = n("./src/reddit/icons/svgs/Close/index.tsx"),
				xl = n("./src/reddit/selectors/emailCollection.ts"),
				_l = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				jl = n.n(_l);
			var Sl = Object(vl.a)(e => {
					let {
						closeTooltip: t,
						email: n,
						resendEmail: r,
						toggleChangeEmailModal: o
					} = e;
					const a = Object(Xe.b)(),
						i = Object(xe.d)(),
						c = Object(xe.e)(xl.a);
					Object(u.useEffect)(() => {
						a(c ? Object(Cl.f)(El.a) : Object(El.g)(El.a))
					}, [a, c]);
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
						className: jl.a.container
					}, m.a.createElement("div", {
						className: jl.a.topLine
					}), m.a.createElement("button", {
						className: jl.a.closeWrapper,
						onClick: () => {
							a(c ? Object(Cl.e)(El.a) : Object(El.c)(El.a)), t()
						}
					}, m.a.createElement(yl.a, {
						className: jl.a.closeIcon
					})), m.a.createElement("h5", {
						className: jl.a.title
					}, d), m.a.createElement("p", {
						className: jl.a.subtitle
					}, n), m.a.createElement("p", {
						className: jl.a.description
					}, l), m.a.createElement("div", {
						className: jl.a.buttonWrapper
					}, c ? m.a.createElement(un.t, {
						onClick: () => {
							i(Object(Gt.h)(Ol.h)), a(Object(Cl.a)(El.a))
						},
						priority: un.c.Secondary,
						isFullWidth: !0
					}, s.fbt._("Add email", null, {
						hk: "3DXT0n"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement(un.t, {
						priority: un.c.Secondary,
						onClick: e => {
							e.stopPropagation(), a(Object(El.e)(El.a, "update")), o()
						},
						isFullWidth: !0
					}, s.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(un.t, {
						isFullWidth: !0,
						onClick: () => {
							a(Object(El.e)(El.a, "confirm")), r(), t()
						}
					}, s.fbt._("Got it", null, {
						hk: "3IP9TO"
					})))))
				}, [Ro.a.Click, Ro.a.Keydown, Ro.a.Resize]),
				Pl = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				kl = n.n(Pl);
			const Nl = e => {
				let {
					exposeIFrameElement: t
				} = e;
				return m.a.createElement(Ze.a, {
					className: kl.a.loggedInGoogleOneTap,
					exposeIFrameElement: t,
					path: Ye.c.GoogleOneTap
				})
			};
			var Ml = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				wl = n.n(Ml);
			const {
				fbt: Il
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Al = e => {
					const {
						onCloseFlyout: t
					} = e;
					return m.a.createElement("div", {
						className: wl.a.container
					}, m.a.createElement("p", {
						className: wl.a.title
					}, Il._("New User Settings", null, {
						hk: "1Sziu9"
					})), m.a.createElement("h5", {
						className: wl.a.subtitle
					}, Il._("Like customizing Reddit?", null, {
						hk: "38eFal"
					})), m.a.createElement("p", {
						className: wl.a.description
					}, Il._("You can save how you sort and view your communities in user settings.", null, {
						hk: "XMkGT"
					})), m.a.createElement(un.o, {
						className: wl.a.dismissBtn,
						onClick: t
					}, Il._("Got it", null, {
						hk: "3IP9TO"
					})))
				},
				Tl = n("./node_modules/lodash/noop.js"),
				Rl = n.n(Tl),
				Ll = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				Dl = n("./src/lib/prettyPrintNumber/index.ts"),
				Fl = n("./src/realtime/GQLSubscription/async.tsx"),
				Gl = n("./src/reddit/actions/alpha.ts"),
				Ul = n("./src/reddit/actions/economics/marketplace/index.ts"),
				Bl = n("./src/reddit/actions/modMode.ts"),
				Hl = n("./src/reddit/actions/profile/index.ts"),
				ql = n("./src/reddit/constants/elementClassNames.ts"),
				Vl = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				Wl = n("./src/reddit/helpers/karma.ts"),
				zl = n("./src/reddit/hooks/useWindowEvent.ts"),
				Ql = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Kl = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Zl = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Xl = n("./src/reddit/selectors/avatarPushcard.ts");
			const Yl = e => Object(Cc.c)(e, {
				experimentName: _.gg,
				experimentEligibilitySelector: Cc.a
			}) === _.Nd;
			var Jl = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				$l = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				ed = n("./src/reddit/selectors/modModeEnabled.ts"),
				td = n("./src/reddit/selectors/seo/index.ts"),
				nd = n("./src/reddit/selectors/tooltip.ts");
			const sd = () => {
				var e, t;
				const n = Object(xe.d)(),
					s = Object(xe.e)(uc.b),
					r = null !== (e = Object(xe.e)(Xl.b)) && void 0 !== e ? e : null,
					o = null !== (t = Object(xe.e)(Xl.c)) && void 0 !== t ? t : null,
					a = Object(xe.e)(e => e);
				return Object(u.useEffect)(() => {
					s || n(Object(Xc.a)()), r && Object(B.a)(Object(Ll.h)(a)), o && Object(B.a)(Object(Ll.i)(a))
				}, [n, s, r, o]), {
					avatarPushcardBanner: r,
					avatarPushcard: o
				}
			};
			var rd = n("./src/reddit/components/HeaderUserDropdown/AvatarPushcardBanner/Banner/index.m.less"),
				od = n.n(rd);
			var ad = e => {
				let {
					className: t,
					iconUrl: n,
					title: s,
					body: r
				} = e;
				return m.a.createElement("span", {
					className: Object(ke.a)(od.a.banner, t),
					role: "status",
					"aria-live": "polite"
				}, n && m.a.createElement("img", {
					className: od.a.icon,
					src: n,
					alt: "",
					role: "presentation"
				}), m.a.createElement("span", {
					className: od.a.content
				}, m.a.createElement("span", {
					className: od.a.title
				}, s), r && m.a.createElement("span", {
					className: od.a.body
				}, r)), m.a.createElement(lr.a, {
					name: "caret_down"
				}))
			};
			var id = () => {
					const {
						avatarPushcardBanner: e
					} = sd();
					return e && m.a.createElement(ad, e)
				},
				cd = n("./src/higherOrderComponents/asTooltip.tsx"),
				ld = n("./src/lib/constants/icons.ts"),
				dd = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				ud = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				md = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				pd = n.n(md);
			const bd = (e, t) => e && m.a.createElement("div", {
				className: pd.a.marketingBadge
			}, m.a.createElement(dd.a, {
				className: pd.a.marketingAsset,
				headshot: e
			}), s.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement($c.a, {
				className: Object(ke.a)(pd.a.sparkle, pd.a.sparkle1)
			}), m.a.createElement($c.a, {
				className: Object(ke.a)(pd.a.sparkle, pd.a.sparkle2)
			}), m.a.createElement($c.a, {
				className: Object(ke.a)(pd.a.sparkle, pd.a.sparkle3)
			}), m.a.createElement($c.a, {
				className: Object(ke.a)(pd.a.sparkle, pd.a.sparkle4)
			})));
			var hd = e => {
					let {
						useNewButtonComponent: t,
						onClick: n
					} = e;
					var r;
					const o = Object(xe.d)(),
						a = Object(Si.a)(),
						i = Object(Hn.gb)(),
						c = Object(xe.e)(e => e.user.account),
						l = Object(xe.e)(ur.d),
						d = Object(xe.e)(uc.b),
						u = Object(xe.e)(uc.a),
						p = () => o(Object(Yc.b)({
							clickSource: "nav"
						})),
						b = Object(xe.e)(ae.j).startsWith("en");
					if ((null === (r = null == i ? void 0 : i.meta) || void 0 === r ? void 0 : r.name) === k.Sb.AVATAR) return null;
					d || o(Object(Xc.a)()), u && a(Jc.n);
					const h = c && c.snoovatarFullBodyAsset ? s.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}) : s.fbt._("Create Avatar", null, {
							hk: "3kfCbX"
						}),
						g = () => {
							p(), u && a(Jc.c), null == n || n()
						};
					if (t) {
						const e = m.a.createElement(m.a.Fragment, null, h, b && bd(u, l));
						return m.a.createElement(Xo, {
							onClick: g,
							title: e,
							titleClassName: pd.a.avatarLinkBody
						})
					}
					const f = Object(ud.c)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? fu("avatar_style") : fu("add"), ((e, t, n, s) => r => m.a.createElement("div", {
						className: `${pd.a.avatarLinkBody} ${r.className}`
					}, e, s && bd(t, n)))(h, u, l, b));
					return m.a.createElement(f, {
						onClick: p
					})
				},
				gd = n("./src/reddit/helpers/trackers/user.ts"),
				fd = n("./src/reddit/components/HeaderUserDropdown/UserMenu/Components/RecapLink/index.m.less"),
				vd = n.n(fd);
			const {
				fbt: Od
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Cd = () => {
				const e = Object(Si.a)(),
					t = Object(xe.e)(ki.a),
					n = Object(xe.e)(ki.d),
					s = Object(ud.c)(Pr, (() => e => m.a.createElement("div", {
						className: `${vd.a.recapLinkBody} ${e.className}`
					}, Od._("{=Reddit Recap}", [Od._param("=Reddit Recap", m.a.createElement("p", null, Od._("Reddit Recap", null, {
						hk: "4cvJVt"
					})))], {
						hk: "1Duk9x"
					}), m.a.createElement("div", {
						className: vd.a.marketingBadge
					}, Od._("New", null, {
						hk: "2o3NMk"
					}))))());
				return t && !n ? m.a.createElement(s, {
					href: Pi.a,
					onClick: () => e(Object(gd.f)())
				}) : null
			};
			var Ed = e => {
					const {
						title: t,
						children: n,
						icon: s
					} = e;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
						className: Object(ke.a)(Ho.a.heading, Vo.a.category)
					}, m.a.createElement("span", {
						className: Ho.a.headingContent
					}, m.a.createElement("span", {
						className: Ho.a.iconContainer
					}, s), m.a.createElement("span", {
						className: Ho.a.title
					}, t))), m.a.createElement("div", {
						className: Ho.a.contentContainer
					}, n))
				},
				yd = n("./src/reddit/helpers/trackers/modTools.ts");
			const xd = () => {
					const e = Object(xe.d)(),
						t = Object(Si.a)(),
						n = Object(xe.e)(O.fb);
					return m.a.createElement($o, {
						isEnabled: n,
						onClick: () => {
							t(Object(gd.g)(n)), (t => e(Object(pl.z)(t)))(!n)
						},
						title: s.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				_d = () => {
					const e = Object(xe.d)(),
						t = Object(Si.a)(),
						n = Object(xe.e)(e => e.user.account),
						r = Object(xe.e)(ed.a);
					return n && n.isMod ? m.a.createElement($o, {
						isEnabled: r,
						onClick: () => {
							t(Object(yd.l)(!r)), (() => e(Object(Bl.b)()))()
						},
						title: s.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				};
			var jd = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				Sd = n.n(jd);
			const Pd = () => {
					const e = Object(xe.d)(),
						t = Object(Xe.b)(),
						n = Object(xe.e)(O.m),
						r = Object(xe.e)(O.X);
					return n ? m.a.createElement(Ed, {
						icon: m.a.createElement(lr.a, {
							name: "profile"
						}),
						title: s.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement($o, {
						title: s.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: r,
						onClick: () => {
							t(Object(gd.h)(!r)), (t => e(Object(pl.J)({
								showPresence: t
							})))(!r)
						}
					}), m.a.createElement(Cd, null), m.a.createElement(Yo, {
						title: s.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(ta.c)("profile"))
					}), m.a.createElement(hd, {
						onClick: () => e(Object(_c.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(Yo, {
						title: s.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(ta.c)("settings"))
					})) : null
				},
				kd = () => {
					return Object(xe.e)(O.m) ? m.a.createElement(Ed, {
						title: s.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(lr.a, {
							name: "views"
						})
					}, m.a.createElement(_d, null), m.a.createElement(xd, null)) : null
				},
				Nd = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(xe.e)(O.m) ? null : m.a.createElement(zo, {
						icon: m.a.createElement(lr.a, {
							name: "settings"
						}),
						title: s.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(xd, null))
				},
				Md = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: r,
						useClassicUserMenuStyles: o = !1
					} = e;
					return m.a.createElement(zo, {
						buttonClassName: o ? Sd.a.button : "",
						headingClassName: o ? Sd.a.headingContent : "",
						icon: m.a.createElement(lr.a, {
							name: "rules"
						}),
						isOpen: t,
						noBottomDivider: o,
						onClick: (e, t) => {
							r(Object(ta.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(Yo, {
						className: o ? Sd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => r(Object(ta.c)("user_agreement")),
						title: s.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(Yo, {
						className: o ? Sd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => r(Object(ta.c)("privacy_policy")),
						title: s.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(Yo, {
						className: o ? Sd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => r(Object(ta.c)("content_policy")),
						title: s.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(Yo, {
						className: o ? Sd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => r(Object(ta.c)("mod_policy")),
						title: s.fbt._("Moderator Code of Conduct", null, {
							hk: "vJzm8"
						})
					}))
				};
			var wd = n("./src/reddit/components/HiddenDiv.tsx"),
				Id = n("./src/reddit/controls/Dropdown/index.tsx"),
				Ad = n("./src/reddit/helpers/trackers/authControls.ts"),
				Td = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				Rd = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/ConfirmDismissModal.tsx"),
				Ld = n("./src/reddit/helpers/path/index.ts");
			var Dd = e => {
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
				Fd = n("./src/reddit/components/HeaderUserDropdown/UserMenu/Components/AvatarPushCard/PushCard/index.m.less"),
				Gd = n.n(Fd);
			var Ud = e => {
				let {
					avatarPushcard: t
				} = e;
				const n = Object(xe.d)(),
					s = Object(xe.e)(e => e),
					[r, o] = Object(u.useState)(!1);
				Object(u.useEffect)(() => {
					n(Object(Ul.e)(t))
				}, []);
				const {
					title: a,
					cta: i,
					imageUrl: c,
					deeplink: l
				} = t;
				return m.a.createElement("div", {
					className: Gd.a.avatarPushCardContainer,
					onClick: () => {
						Object(B.a)(Object(Ll.c)(s)), window.location.href = Object(Ld.b)(l)
					}
				}, m.a.createElement("button", {
					className: Gd.a.closeButton,
					onClick: e => {
						e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), Object(B.a)(Object(Ll.f)(s)), o(!0)
					}
				}, m.a.createElement(Dd, {
					className: Gd.a.closeButtonIcon
				})), m.a.createElement("img", {
					className: Gd.a.image,
					src: c,
					alt: a
				}), (a || i) && m.a.createElement("div", {
					className: Gd.a.ctaWrapper
				}, a && m.a.createElement("p", {
					className: Gd.a.ctaDescription
				}, a), i && m.a.createElement("div", {
					className: Gd.a.cta
				}, i)), r && m.a.createElement(Rd.a, {
					onGoBack: e => {
						e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), o(!1)
					},
					onDismiss: () => {
						Object(B.a)(Object(Ll.g)(s)), n(Object(Ul.a)(t))
					}
				}))
			};
			const Bd = () => {
					const {
						avatarPushcard: e
					} = sd();
					return e && m.a.createElement(Ud, {
						avatarPushcard: e
					})
				},
				Hd = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: Ho.a.headingContent
					}, m.a.createElement("span", {
						className: Ho.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(ke.a)(Ho.a.title, s)
					}, n))
				},
				qd = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: r,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(ke.a)(Ho.a.button, t),
						onClick: s
					}, m.a.createElement(Hd, {
						icon: n,
						title: r,
						titleClassName: o
					}))
				},
				Vd = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: r,
						rel: o,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(Uo, {
						className: Object(ke.a)(Ho.a.button, t),
						href: n,
						rel: o,
						onClick: r
					}, m.a.createElement(Hd, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				},
				Wd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					const t = e.getFullYear(),
						n = e.getMonth();
					return `/posts/${n>=6?t:t-1}/`
				};
			var zd = e => [{
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
				url: Wd()
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
			var Qd = e => {
					let {
						isCommunityLinkVisible: t,
						isLoggedIn: n,
						isOpen: r,
						onClick: o,
						sendEvent: a,
						url: i,
						useClassicUserMenuStyles: c = !1
					} = e;
					return m.a.createElement(zo, {
						buttonClassName: c ? Sd.a.button : "",
						headingClassName: c ? Sd.a.headingContent : "",
						noBottomDivider: c,
						icon: m.a.createElement(lr.a, {
							name: "info"
						}),
						title: s.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: r,
						onClick: (e, t) => {
							a(Object(ta.c)(t ? "more_chevron" : "more_menu")), "function" == typeof o && o(e)
						}
					}, zd(t).map(e => ((e, t) => {
						let {
							isHidden: n,
							noun: s,
							rel: r,
							title: o,
							url: a
						} = e;
						return !n && m.a.createElement(Yo, {
							href: a,
							key: a,
							onClick: () => {
								s && t(Object(ta.c)(s))
							},
							rel: r,
							title: o()
						})
					})(e, a)), n ? m.a.createElement(Yo, {
						href: "https://old.reddit.com" + i,
						title: s.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							a(Object(ta.c)("old_reddit")), a(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: vn.cb(e),
								subreddit: vn.kb(e)
							}))
						}
					}) : null)
				},
				Kd = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Zd = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				Xd = n.n(Zd);
			var Yd = e => {
				let {
					isOpen: t,
					onClick: n
				} = e;
				const [{
					links: r,
					showAll: o
				}, a] = Object(u.useState)({
					links: Object(Kd.b)(),
					showAll: !1
				});
				if (Object(u.useEffect)(() => {
						t || a({
							links: r,
							showAll: !1
						})
					}, [r, t]), 0 === r.length) return null;
				const i = o ? r : r.slice(0, 3),
					c = () => a({
						links: r,
						showAll: !o
					});
				return m.a.createElement(zo, {
					"aria-hidden": !0,
					icon: m.a.createElement(lr.a, {
						name: "history"
					}),
					isOpen: t,
					title: s.fbt._("Recent Communities", null, {
						hk: "cJ4rl"
					}),
					onClick: n
				}, i.map(e => {
					var t, n;
					return m.a.createElement(Jo, {
						className: Xd.a.basicLink,
						href: e.url,
						iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : Xd.a.subredditIcon,
						iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
						key: e.url,
						title: e.title,
						titleClassName: Xd.a.title
					})
				}), r.length > 3 && (e => m.a.createElement("span", {
					className: Ho.a.spanButton,
					onClick: c
				}, m.a.createElement("span", {
					className: Object(ke.a)(Ho.a.headingContent, Xd.a.headingContent)
				}, m.a.createElement("span", {
					className: Ho.a.title
				}, e))))(o ? s.fbt._("see less", null, {
					hk: "3tQWvR"
				}) : s.fbt._("see more", null, {
					hk: "1WV0AC"
				})))
			};

			function Jd() {
				return (Jd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const $d = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				eu = e => {
					const t = e && e.coins || 0;
					return s.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [s.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var tu;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(tu || (tu = {}));
			var nu = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						isCommunityLinkVisible: r,
						isNsfwBlocking: o,
						logoutUser: a,
						onClick: i,
						openCommunityCreationModal: c,
						sendEvent: l,
						shouldShowCreateCommunityItem: d,
						url: p,
						user: b
					} = e, [h, g] = Object(u.useState)(tu.TermsAndPolicies), f = e => () => {
						g(h === e ? null : e)
					}, v = e => ({
						onClick: f(e),
						isOpen: h === e
					}), O = !!b, C = () => {
						t(), n(o)
					}, E = () => m.a.createElement(Vd, {
						className: Vo.a.button,
						icon: m.a.createElement(lr.a, {
							name: "topic_activism"
						}),
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => l(Object(gd.b)()),
						title: s.fbt._("Advertise on Reddit", null, {
							hk: "3R4KSI"
						})
					});
					return m.a.createElement("div", {
						onClick: $d
					}, m.a.createElement(Bd, null), m.a.createElement(Pd, null), m.a.createElement(kd, null), m.a.createElement(() => d ? m.a.createElement(qd, {
						className: Vo.a.button,
						icon: m.a.createElement(lr.a, {
							name: "community"
						}),
						onClick: () => {
							c(), l(Object(Td.a)()), i()
						},
						title: s.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), O && m.a.createElement(E, null), m.a.createElement(() => m.a.createElement(Vd, {
						className: Vo.a.coinsLink,
						icon: m.a.createElement(lr.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, s.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: Vo.a.meta
						}, eu(b))),
						onClick: () => {
							Object(ia.d)(ia.a.GoldPayment, !0), e.sendEvent(Object(gd.d)())
						},
						titleClassName: Vo.a.coinsTitle
					}), null), m.a.createElement(() => m.a.createElement(Vd, {
						className: Vo.a.button,
						icon: m.a.createElement(lr.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(ia.d)(ia.a.GoldPayment, !0), e.sendEvent(Object(gd.e)())
						},
						title: s.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(Vd, {
						className: Vo.a.button,
						icon: m.a.createElement(lr.a, {
							name: "live"
						}),
						href: Yr.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: s.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !O && m.a.createElement(Yd, v(tu.RecentCommunitiesMenu)), m.a.createElement(oa, Jd({}, v(tu.ExploreMenu), {
						sendEvent: l
					})), m.a.createElement(Nd, v(tu.Settings)), !O && m.a.createElement(E, null), m.a.createElement(() => m.a.createElement(Vd, {
						className: Vo.a.button,
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(lr.a, {
							name: "help"
						}),
						title: s.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(Qd, Jd({}, v(tu.MoreMenu), {
						isCommunityLinkVisible: r,
						isLoggedIn: O,
						url: p,
						sendEvent: l
					})), m.a.createElement(Md, Jd({}, v(tu.TermsAndPolicies), {
						sendEvent: l
					})), m.a.createElement(() => O ? m.a.createElement(qd, {
						className: Vo.a.button,
						icon: m.a.createElement(lr.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), a()
						},
						title: s.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(qd, {
						className: Vo.a.button,
						icon: m.a.createElement(lr.a, {
							name: "profile"
						}),
						onClick: C,
						title: s.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: Ho.a.copyrightContainer
					}, m.a.createElement("span", {
						className: Ho.a.copyrightText
					}, s.fbt._("© {year} Reddit, Inc. All rights reserved", [s.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				su = n("./src/reddit/selectors/experiments/shredditParity.ts"),
				ru = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				ou = n.n(ru);

			function au() {
				return (au = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const iu = Ke.a.wrapped(Id.a, "Dropdown", ou.a),
				cu = Object(cd.a)(iu),
				lu = e => m.a.createElement(ud.a, {
					className: Object(ke.a)(ou.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: ou.a.buttonText
				}, e.displayText), m.a.createElement(Qo.a, {
					className: ou.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				})),
				du = e => t => m.a.createElement(lr.a, au({
					name: e
				}, t)),
				uu = e => {
					let {
						nightmode: t,
						sendEvent: n,
						toggleNightmode: r
					} = e;
					return Object(xe.e)(su.a) ? null : m.a.createElement(lu, {
						displayText: s.fbt._("Dark Mode", null, {
							hk: "1Tx6hE"
						}),
						isEnabled: t,
						onClick: e => {
							null == e || e.nativeEvent.stopImmediatePropagation(), n(Object(gd.g)(t)), r(!t)
						}
					}, m.a.createElement(lr.a, {
						name: "night",
						className: ou.a.nightIcon
					}))
				},
				mu = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(ud.b)(du(ld.a.help), s.fbt._("Help Center", null, {
						hk: "4sGjc0"
					}));
					return m.a.createElement(n, {
						href: "https://www.reddithelp.com",
						onClick: () => t(Object(ta.c)("help_center"))
					})
				},
				pu = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(ud.b)(du(ld.a.topic_activism), s.fbt._("Advertise on Reddit", null, {
						hk: "3R4KSI"
					}));
					return m.a.createElement(n, {
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => t(Object(gd.b)())
					})
				},
				bu = e => {
					let {
						dispatchOpenLoginModal: t,
						isNsfwBlocking: n,
						sendEvent: r
					} = e;
					const o = Object(ud.c)(du(ld.a.logout), s.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					}));
					return m.a.createElement(o, {
						href: "#",
						onClick: e => {
							Object(Be.a)(e) && (e.preventDefault(), e.stopPropagation(), t(n), r(Object(Ad.b)()))
						}
					})
				};
			var hu = Object(Xe.c)(e => {
				const {
					dispatchOpenLoginModal: t,
					isCrawler: n,
					isNsfwBlocking: s,
					nightmode: r,
					requestAwardKarma: o,
					sendEvent: a,
					user: i
				} = e, c = i && i.id, l = Object(xe.e)(O.S), [d, p] = Object(u.useState)(!1), b = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), p(!d)
				}, [d]), [h, g] = Object(u.useState)(!1), f = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), g(!h)
				}, [h]);
				return Object(u.useEffect)(() => {
					p(!1), g(!1)
				}, [e.isOpen]), Object(u.useEffect)(() => {
					o()
				}, [c]), n ? m.a.createElement(wd.a, null, m.a.createElement(nu, e)) : l ? m.a.createElement(cu, {
					className: ou.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(nu, e)) : m.a.createElement(cu, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(uu, {
					nightmode: r,
					sendEvent: a,
					toggleNightmode: e.toggleNightmode
				}), m.a.createElement(mu, {
					sendEvent: a
				}), m.a.createElement(Qd, {
					isOpen: h,
					onClick: f,
					isCommunityLinkVisible: e.isCommunityLinkVisible,
					isLoggedIn: l,
					url: e.url,
					sendEvent: a,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(Md, {
					isOpen: d,
					onClick: b,
					sendEvent: a,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(pu, {
					sendEvent: a
				}), m.a.createElement("div", {
					className: ou.a.divider
				}), m.a.createElement(bu, {
					dispatchOpenLoginModal: t,
					isNsfwBlocking: s,
					sendEvent: a
				}))
			});

			function gu() {
				return (gu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const fu = e => t => m.a.createElement(lr.a, gu({
					name: e
				}, t)),
				vu = Object(xe.b)(() => Object(re.c)({
					avatarPushcardBanner: Xl.b,
					isCrawler: e => !!Object(td.a)(e),
					isModModeEnabled: ed.a,
					isNsfwBlocking: e => {
						const t = Object(oe.d)(e),
							n = Object(oe.e)(e);
						return t || n
					},
					isOpen: Object(nd.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: $l.d,
					shouldShowCreateCommunityItem: O.rb,
					navbarLikeMweb: Jl.a,
					nightmode: O.fb,
					showPresence: O.X,
					url: In.t,
					isCommunityLinkVisible: Yl
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(_c.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					dismissAvatarPushcardBanner: t => e(Object(Ul.b)(t)),
					toggleNightmode: t => e(Object(pl.z)(t)),
					toggleShowPresence: t => e(Object(pl.J)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Gl.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (d.a.get("rseor3") && d.a.remove("rseor3", {
							domain: i.a.cookieDomain
						}), e(Object(Gl.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Hl.g)(Object(hn.e)(t.user)))
					},
					dispatchOpenLoginModal: t => {
						t && (e(Object(Gt.k)({
							actionSource: Gt.a.NsfwBlockingModal
						})), Object(Vl.c)(Vl.a.Login)), e(Object(ne.openLoginModal)())
					},
					toggleModMode: () => e(Object(Bl.b)()),
					openCommunityCreationModal: () => e(Object(Gt.h)(Xt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var Ou = Object(Hn.v)({
					pageLayer: e => e
				})(vu(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: r,
						user: o
					} = e, a = Object(xe.e)(e => e), i = Object(xe.e)($l.b), [c, l] = Object(u.useState)(!1), d = o && o.id;
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
					return Object(zl.a)("visibilitychange", b), Object(u.useEffect)(() => {
						l("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(ke.a)(ou.a.container, ql.e)
					}, r && c && i && m.a.createElement(Fl.a, {
						variables: p,
						onData: Rl.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Zl.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(ke.a)(e.className, ou.a.inlineButton, {
							[ou.a.dropdownOpen]: e.isOpen,
							[ou.a.isLoggedOut]: !o,
							[ou.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon"), e.avatarPushcardBanner && (Object(B.a)(Object(Ll.b)(a)), e.dismissAvatarPushcardBanner(e.avatarPushcardBanner))
						}
					}, m.a.createElement(id, null), m.a.createElement("span", {
						className: ou.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(ke.a)(ou.a.accountWrapper, ou.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(m.a.Fragment, null, m.a.createElement(Cr.a, {
						className: Object(ke.a)(ou.a.imgIcon, {
							[ou.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: ou.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && r
					})), m.a.createElement("span", {
						className: ou.a.accountDetails
					}, m.a.createElement("span", {
						className: ou.a.username
					}, n.displayText, n.isGold && m.a.createElement(Kl.a, {
						className: ou.a.premiumFontIcon,
						title: s.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: ou.a.accountKarma
					}, m.a.createElement(lr.a, {
						name: "karma",
						isFilled: !0,
						className: ou.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Wl.a)(e),
							n = Object(Dl.b)(t);
						return s.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [s.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: ou.a.accountCoins
					}, m.a.createElement(Ql.a, {
						className: ou.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(Dl.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(ke.a)(ou.a.accountWrapper, ou.a.isLoggedOut)
					}, m.a.createElement(lr.a, {
						name: "user",
						className: ou.a.defaultProfileIcon
					})))(e.user), m.a.createElement(lr.a, {
						className: ou.a.caretDownIcon,
						name: "caret_down"
					})), m.a.createElement(ka.a, null, s.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(hu, e))
				})),
				Cu = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				Eu = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less"),
				yu = n.n(Eu);
			const xu = Object(vl.a)(e => m.a.createElement("div", {
				"aria-modal": !0,
				className: Object(ke.a)(e.className, yu.a.confirmContainer, yu.a.confirmToastContainer),
				role: "dialog"
			}, m.a.createElement("div", null, m.a.createElement("h2", {
				className: yu.a.confirmToastTitle
			}, s.fbt._("🎉 Nice name, {username}!", [s.fbt._param("username", e.username)], {
				hk: "2DEuit"
			}))), m.a.createElement("p", {
				className: yu.a.confirmModalDescription
			}, s.fbt._("May it serve you well", null, {
				hk: "1OmrGj"
			}))));
			var _u = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/Loader.tsx"),
				ju = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Su = n("./src/reddit/helpers/trackers/inbox.ts"),
				Pu = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				ku = n("./src/reddit/routes/acknowledgements/index.ts"),
				Nu = n("./src/reddit/routes/appeal/index.ts");
			var Mu = {
					action: () => async e => await e(Object(p.c)(so.a)),
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Sb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				wu = n("./src/reddit/routes/coins/index.ts"),
				Iu = n("./src/reddit/routes/coinsMobile/index.ts"),
				Au = n("./src/reddit/routes/commentsPage/index.ts"),
				Tu = n("./src/reddit/routes/countrySitePage/index.ts");
			n("./node_modules/@loadable/component/dist/loadable.esm.js");
			var Ru = [],
				Lu = n("./src/reddit/routes/econManagement/index.ts"),
				Du = n("./src/reddit/routes/econManagement2/index.ts");
			var Fu = {
					action: Object(A.a)(() => n.e(5).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Sb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				Gu = n("./src/lib/addQueryParams/index.ts");
			var Uu = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							queryParams: o
						} = e;
						await t(Object(p.c)(Object(Gu.a)("/", o)))
					},
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Sb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [k.u.COMMENTS_PAGE, k.u.FRONTPAGE]
				},
				Bu = n("./src/reddit/routes/followers/index.ts"),
				Hu = n("./src/reddit/routes/framedGild/index.ts"),
				qu = n("./src/reddit/routes/framedModal/index.ts"),
				Vu = n("./src/reddit/routes/frontpage/index.ts"),
				Wu = n("./src/reddit/routes/geotagging/index.ts"),
				zu = n("./src/reddit/routes/happeningNow/index.ts"),
				Qu = n("./src/reddit/routes/inbox/index.ts"),
				Ku = n("./src/reddit/routes/meta/index.ts"),
				Zu = n("./src/reddit/routes/moderationPages/index.ts"),
				Xu = n("./src/reddit/routes/modQueue/index.ts"),
				Yu = n("./src/reddit/routes/multireddit/index.ts"),
				Ju = n("./src/reddit/routes/notificationsInbox/index.ts"),
				$u = n("./src/reddit/routes/postCreation/constants.ts");
			const em = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(p.c)("/"))
				},
				chunk: k.u.EMPTY,
				exact: !0,
				meta: {
					name: k.Sb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var tm = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)($u.b))
					},
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Sb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...em],
				nm = n("./src/reddit/routes/postCreation/index.ts"),
				sm = n("./src/reddit/routes/postDraft/index.ts"),
				rm = n("./src/reddit/routes/postSetPage/index.ts");
			var om = {
				action: () => async () => {
					window.location.replace(window.location.origin)
				},
				chunk: k.u.EMPTY,
				exact: !0,
				meta: {
					name: k.Sb.POWERUPS_REDIRECT
				},
				path: ["/powerup", "/powerups"]
			};
			var am = {
					action: () => async e => await e(Object(p.c)(Xr.a)),
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Sb.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				im = n("./src/reddit/routes/premium/index.ts"),
				cm = n("./src/reddit/routes/profileComments/index.ts"),
				lm = n("./src/reddit/endpoints/me/index.ts"),
				dm = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				um = n("./src/server/helpers/profileRedirect.ts");
			var mm = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							rest: o
						} = e.params, {
							path: a,
							queryParams: i
						} = e, c = await Object(lm.a)(r());
						if (!(c.ok && c.body && c.body.account)) {
							const e = n();
							return void Object(dm.a)(t, e)
						}
						const l = c.body.account.displayText,
							d = Object(um.b)({
								path: a,
								profileName: l,
								queryParams: i,
								rest: o
							});
						await t(Object(p.c)(d))
					},
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Sb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				pm = n("./src/reddit/routes/profileModSettings/index.ts"),
				bm = n("./src/reddit/routes/profileOverview/index.ts"),
				hm = n("./src/reddit/routes/profilePosts/index.ts");
			var gm = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: r,
							queryParams: o
						} = e, a = Object(um.b)({
							path: r,
							profileName: n,
							queryParams: o,
							rest: s
						});
						t(Object(p.c)(a))
					},
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Sb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/posts", "/user/:profileName/posts/:rest(.*)"]
				},
				fm = n("./src/reddit/routes/profilePrivate/index.ts");
			var vm = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: r,
							queryParams: o
						} = e, a = Object(um.b)({
							path: r,
							profileName: n,
							queryParams: o,
							rest: s
						});
						await t(Object(p.c)(a))
					},
					chunk: k.u.EMPTY,
					exact: !0,
					meta: {
						name: k.Sb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)", "/user/:profileName/moderation", "/u/:profileName/moderation"]
				},
				Om = n("./src/reddit/routes/profileSnoobuilder/index.ts"),
				Cm = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				Em = n("./src/reddit/routes/report/index.ts"),
				ym = n("./src/reddit/routes/searchResults/index.ts"),
				xm = n("./src/reddit/routes/settings/index.ts");
			var _m = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(p.c)(s))
					},
					chunk: k.u.EMPTY,
					meta: {
						name: k.Sb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(p.c)("/settings/profile"))
					},
					chunk: k.u.EMPTY,
					meta: {
						name: k.Sb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				jm = n("./src/reddit/routes/subreddit/index.ts"),
				Sm = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				Pm = n("./src/reddit/routes/subredditWiki/index.ts"),
				km = n("./src/reddit/routes/topic/index.ts");
			var Nm = [ku.a, Nu.a, so.b, Mu, wu.a, Iu.a, Tu.a, mm, vm, gm, ...Pu.a, ...Au.b, Fu, ...Vu.a, Wu.a, im.a, Xr.b, Yr.b, Lu.c, Du.a, om, am, Bu.a, Hu.a, qu.a, nm.a, sm.a, rm.a, ...tm, Uu, ...Ku.a, Yu.a, Xu.a, Zr.c, Kr.b, Ju.a, Qu.a, cm.a, pm.a, bm.a, hm.a, Om.a, fm.a, Cm.a, Pi.b, ...xm.a, ..._m, ym.a, ...Pm.a, km.a, jm.c, Sm.a, Zu.a, Em.a, ...Ru, zu.a],
				Mm = n("./src/reddit/selectors/appBadges.ts"),
				wm = n("./src/reddit/selectors/emailVerification.ts"),
				Im = n("./src/reddit/selectors/sso.ts");
			var Am = m.a.memo((function(e) {
					let {
						badgeCount: t,
						hasUnreadChatMessages: n,
						onClickChat: r
					} = e;
					const o = Object(ji.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ac.a.iconWrapper,
						onMouseEnter: () => {
							o.show()
						},
						onMouseLeave: o.hide,
						ref: o.target.ref
					}, m.a.createElement("a", {
						className: Ac.a.link,
						href: `${i.a.redditUrl}/chat`,
						onClick: e => {
							e.preventDefault(), r()
						}
					}, m.a.createElement(Ur.a, {
						isActive: t > 0 || n,
						unreadCount: t
					}), m.a.createElement(lr.a, {
						name: "chat",
						className: Ac.a.icon2020
					}))), m.a.createElement(Oi.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, s.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				Tm = n("./src/reddit/actions/chat/liveChatTooltipShowState.ts"),
				Rm = n("./src/reddit/constants/chat.ts"),
				Lm = n("./src/reddit/selectors/chat.ts"),
				Dm = n("./src/reddit/selectors/eligibleUXExperiences.ts"),
				Fm = n("./src/redditGQL/types.ts");
			var Gm = m.a.memo((function(e) {
				let {
					badgeCount: t,
					hasUnreadChatMessages: n,
					onClickChat: r
				} = e;
				var o;
				const a = Object(xe.d)(),
					c = Object(xe.e)(O.k),
					l = Object(xe.e)(Lm.b),
					d = Object(ji.a)(),
					p = null === (o = Object(xe.e)(e => Object(Dm.a)(e, {
						experience: Fm.Z.LiveChatVideoEdu
					}))) || void 0 === o ? void 0 : o.value,
					b = Object(u.useMemo)(() => l === Rm.b.IS_SHOWING, [l]),
					h = Object(u.useMemo)(() => b ? (e => ({
						...e,
						arrowProps: {
							...e.arrowProps,
							style: {
								...e.arrowProps.style,
								borderBottom: `3px solid ${qi.a.alien600}`
							}
						},
						popperProps: {
							...e.popperProps,
							style: {
								...e.popperProps.style,
								background: qi.a.alien600
							}
						},
						visible: !0
					}))(d) : d, [d, b]),
					g = Object(u.useCallback)(() => {
						b && c && a(Object(Tm.c)(Rm.b.DISMISSED, c))
					}, [a, b, c]);
				return Object(u.useEffect)(() => {
					c && a(Object(Tm.b)(c))
				}, [a, c]), Object(u.useEffect)(() => {
					if (!b) return;
					const e = setTimeout(g, 3e3);
					return () => clearTimeout(e)
				}, [g, b]), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: Ac.a.iconWrapper,
					onMouseEnter: () => {
						d.show()
					},
					onMouseLeave: d.hide,
					ref: d.target.ref
				}, m.a.createElement("a", {
					className: Ac.a.link,
					href: `${i.a.redditUrl}/chat`,
					onClick: e => {
						e.preventDefault(), r(), g()
					}
				}, m.a.createElement(Ur.a, {
					isActive: t > 0 || n || !!p,
					unreadCount: t
				}), m.a.createElement(lr.a, {
					name: "chat",
					className: Ac.a.icon2020
				}))), m.a.createElement(Oi.a, {
					arrowProps: h.arrowProps,
					popperProps: h.popperProps,
					visible: h.visible
				}, b ? m.a.createElement("span", {
					className: Ac.a.liveChatAnnouncementText,
					onClick: e => {
						e.preventDefault(), g()
					}
				}, s.fbt._("Live chats are here now", null, {
					hk: "10sA0h"
				})) : s.fbt._("Chat", null, {
					hk: "4nXRWH"
				})))
			}));
			var Um = e => {
					return Object(xe.e)(X.c) ? m.a.createElement(Gm, e) : m.a.createElement(Am, e)
				},
				Bm = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				Hm = n.n(Bm);
			var qm = Object(Xe.c)(e => {
					let {
						className: t,
						sendEvent: n
					} = e;
					const r = Object(xe.e)(O.fb),
						o = Object(ji.a)(),
						a = s.fbt._("Advertise", null, {
							hk: "bW02l"
						}),
						[i, c] = m.a.useState(!1);
					return m.a.useEffect(() => {
						c(!Object(Ft.a)() || !localStorage.getItem("has_clicked_advertise_button"))
					}, []), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Object(ke.a)(t, Hm.a.container, {
							[Hm.a.isNightMode]: r
						})
					}, m.a.createElement("a", {
						className: Hm.a.link,
						ref: o.target.ref,
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => {
							n(Object(gd.c)()), Object(Ft.a)() && !localStorage.getItem("has_clicked_advertise_button") && localStorage.setItem("has_clicked_advertise_button", "true"), c(!1)
						},
						onMouseEnter: o.show,
						onMouseLeave: o.hide,
						onBlur: o.hide,
						"aria-label": a
					}, m.a.createElement(lr.a, {
						className: Hm.a.icon,
						name: "topic_activism",
						style: {
							marginLeft: i ? "12px" : "7px"
						}
					}), i && m.a.createElement("span", {
						className: Hm.a.text
					}, a))), !i && m.a.createElement(Oi.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, a))
				}),
				Vm = n("./src/lib/makeRequest/index.ts"),
				Wm = n("./src/redditGQL/operations/MatrixChatNotifications.json");
			var zm = n("./src/reddit/actions/matrixChat/index.ts");
			const Qm = () => async (e, t, n) => {
				const s = await (async e => {
					var t, n, s, r, o, a, i, c;
					const l = await Object(Da.a)(e, Wm);
					if (Object(Vm.c)(l) && !l.error && void 0 !== (null === (r = null === (s = null === (n = null === (t = null == l ? void 0 : l.body) || void 0 === t ? void 0 : t.data) || void 0 === n ? void 0 : n.identity) || void 0 === s ? void 0 : s.matrixNotifications) || void 0 === r ? void 0 : r.unreadCount)) return null === (c = null === (i = null === (a = null === (o = null == l ? void 0 : l.body) || void 0 === o ? void 0 : o.data) || void 0 === a ? void 0 : a.identity) || void 0 === i ? void 0 : i.matrixNotifications) || void 0 === c ? void 0 : c.unreadCount
				})(n.gqlContext());
				void 0 !== s && e(Object(zm.b)({
					count: s
				}))
			};
			var Km = n("./src/reddit/reducers/features/matrixChat/index.ts"),
				Zm = n("./src/reddit/selectors/features/matrixChat/index.ts");
			const Xm = () => {
					const e = Object(ji.a)(),
						t = Object(xe.d)(),
						n = Object(xe.e)(Zm.c),
						r = Object(xe.e)(Zm.b),
						o = Object(xe.e)(Zm.a);
					return m.a.useEffect(() => {
						void 0 === o && r === Km.b.CLOSED && t(Qm())
					}, [o, r, t]), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ac.a.iconWrapper,
						onMouseEnter: () => {
							e.show()
						},
						onMouseLeave: e.hide,
						ref: e.target.ref,
						"data-testid": "matrix-chat-button"
					}, m.a.createElement("a", {
						className: Ac.a.link,
						href: n,
						onClick: e => {
							const n = r !== Km.b.NORMAL ? Km.b.NORMAL : Km.b.CLOSED;
							e.preventDefault(), t(Object(zm.c)({
								state: n
							}))
						}
					}, !!o && o > 0 && m.a.createElement(Ur.a, {
						isActive: !0,
						unreadCount: o,
						testId: "matrix-chat-badge"
					}), m.a.createElement(lr.a, {
						name: "chat_group",
						className: Ac.a.icon2020
					}))), m.a.createElement(Oi.a, {
						arrowProps: e.arrowProps,
						popperProps: e.popperProps,
						visible: e.visible
					}, s.fbt._("Matrix Chat", null, {
						hk: "1cv14m"
					})))
				},
				Ym = "change-username-tooltip-id",
				Jm = "email-verification-tooltip-id",
				$m = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const r = Object(ji.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ac.a.iconWrapper,
						onMouseEnter: r.show,
						onMouseLeave: r.hide,
						ref: r.target.ref
					}, m.a.createElement(wc, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Cu.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(Ur.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(lr.a, {
						className: Ac.a.icon2020,
						name: "mod"
					})), m.a.createElement(Oi.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, s.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(Cu.b, {
						className: Ac.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				ep = m.a.memo((function(e) {
					const t = Object(ji.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: Ac.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: Ac.a.link,
						"aria-label": s.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(lr.a, {
						className: Ac.a.icon2020,
						name: "add"
					}))), m.a.createElement(Oi.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				tp = Object(Hn.v)({
					pageLayer: e => e
				}),
				np = Object(re.c)({
					activeDropdownId: nd.a,
					activeModalId: Wc.b,
					appBadges: Mm.b,
					chatDirectMessagesCount: Mm.e,
					email: O.p,
					hasUnreadChatMessages: Mm.f,
					inboxBadgeCount: Mm.g,
					canViewQuickCreate: e => gc(e),
					isAvatarStorefrontEnabled: e => Object($r.c)(e) && !!Object(uc.a)(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					shouldShowEmailVerificationTooltip: wm.b,
					isLoggedIn: O.S,
					isModerator: fn.k,
					isNameEditable: O.U,
					isOneTapSession: ae.g,
					isResponsiveSettingsEnabled: Wn.a,
					isChatMatrixClientEnabled: X.b,
					shouldOpenEmailVerificationTooltip: wm.a,
					shouldShowChangeUsernameModals: Im.c,
					unreadNotifications: O.Ab,
					usernameChangedModalOpen: Object(Wc.c)(Ol.p)
				}),
				sp = Object(xe.b)(np, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(dl.changeUsernameTooltipClosed)()),
					closeEmailVerificationTooltip: () => e(Object(ul.b)()),
					showEmailVerificationTooltip: () => e(Object(ul.b)()),
					fetchAppBadges: () => e(Object(ll.c)()),
					logoutUser: t => {
						(null == t ? void 0 : t.contentWindow) && t.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(ju.a)()), e(Object(ye.p)())
					},
					onChatClick: () => e(Object(z.f)()),
					onDismissCustomizeFlyout: () => e(Object(pl.u)()),
					onOpenModerationDropdown: () => {
						e(Object(_c.h)({
							tooltipId: Cu.a
						})), e(Object(Do.q)())
					},
					onOpenUserDropdown: () => e(Object(_c.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(Gt.h)(Ol.b))
					},
					openKeepUsernameModal: () => {
						e(Object(Gt.h)(Ol.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(ul.b)()), e(Object(Gt.i)(Ol.a))
					},
					resendEmail: () => e(Object(ye.v)(El.a)),
					requestCreatePost: () => {
						t.pageLayer && e(ml.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(p.b)(t);
						e(Object(dl.startChangeUsernameFlow)(n))
					}
				}));
			class rp extends m.a.Component {
				constructor() {
					super(...arguments), this.googleOneTapIFrame = null, this.state = {
						confirmUsernameFlowStarted: !1,
						showNavBarEconCta: !0
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(Su.D)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(ta.c)(e)), this.logoutUser = () => {
						this.props.logoutUser(this.googleOneTapIFrame)
					}, this.onClickCreatePost = () => {
						this.props.sendEvent(Object(da.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(T.a)(e.pathname, Nm),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== k.Sb.POST_CREATION && n !== k.Sb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.googleOneTapIFrame = e
					}, this.navBarEconCta = () => {
						const {
							canViewQuickCreate: e,
							isAvatarStorefrontEnabled: t,
							user: n,
							onAvatarButtonClick: s
						} = this.props, r = n && Object(hn.e)(n) || "", o = () => {
							this.setState({
								showNavBarEconCta: !1
							}), s && s()
						};
						return e ? m.a.createElement(rl, {
							avatarUrlParams: {
								avatarId: "random",
								username: r
							}
						}) : t ? m.a.createElement(cl, {
							handleButtonClick: o
						}) : void 0
					}
				}
				componentDidMount() {
					this.props.showEmailVerificationTooltip(), Ma()(this.props.appBadges) && this.props.fetchAppBadges()
				}
				render() {
					const {
						activeDropdownId: e,
						chatDirectMessagesCount: t,
						className: n,
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: r,
						email: o,
						hasUnreadChatMessages: a,
						inboxBadgeCount: i,
						isChangeUsernameTooltipShowing: c,
						isCustomizeFlyoutShowing: l,
						shouldShowEmailVerificationTooltip: d,
						isLoggedIn: p,
						isModerator: b,
						isNameEditable: h,
						isOneTapSession: g,
						isResponsiveSettingsEnabled: f,
						isChatMatrixClientEnabled: v,
						onDismissCustomizeFlyout: O,
						onOpenUserDropdown: C,
						openChangeUsernameModal: E,
						openKeepUsernameModal: y,
						pageLayer: x,
						resendEmail: _,
						shouldOpenEmailVerificationTooltip: j,
						shouldShowChangeUsernameModals: S,
						toggleChangeEmailModal: P,
						unreadNotifications: k,
						user: N,
						usernameChangedModalOpen: M
					} = this.props, w = !(!k || !k.hasUnreadModmail), I = N && Object(hn.e)(N) || "", A = Object(ke.a)({
						[Ac.a["m-responsive"]]: f
					}), T = S && g;
					return m.a.createElement(pn.a, {
						id: Jm,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(pn.a, {
						className: Ac.a.headerLinks,
						id: Ym
					}, b && m.a.createElement($m, {
						isModerateIconLit: w,
						moderationDropdownOpen: e === Cu.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: k
					}), N && m.a.createElement(u.Fragment, null, m.a.createElement(Um, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), v && m.a.createElement(Xm, null), m.a.createElement(Zc, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == x ? void 0 : x.url,
						userId: N.id,
						isLoggedIn: p,
						iconWrapper: Ac.a.iconWrapper
					}), m.a.createElement(ep, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement(qm, {
						className: Ac.a.iconWrapper
					}), this.state.showNavBarEconCta && m.a.createElement("span", {
						className: Ac.a.iconWrapper
					}, this.navBarEconCta()))), m.a.createElement(Ou, {
						className: Ac.a.headerUserDropdown,
						logoutUser: this.logoutUser,
						onClick: C,
						sendEventWithName: this.sendEventWithName,
						user: N
					}), p && m.a.createElement(Nl, {
						exposeIFrameElement: this.exposeIFrameElement
					}), l && m.a.createElement(Al, {
						onCloseFlyout: O
					}), m.a.createElement(Sl, {
						closeTooltip: r,
						email: o,
						isOpen: j && d,
						resendEmail: _,
						toggleChangeEmailModal: P,
						tooltipId: Jm
					}), m.a.createElement(fl, {
						email: o,
						shouldOpenTooltip: j
					}), h && !f && !g && m.a.createElement(u.Fragment, null, m.a.createElement(gl.a, {
						closeTooltip: s,
						isOpen: c && !S,
						openChangeUsernameModal: E,
						openKeepUsernameModal: y,
						tooltipId: Ym,
						username: I
					}), S && m.a.createElement(hl.a, {
						isResponsiveSettingsEnabled: f,
						overlayClassName: A,
						username: I,
						withOverlay: !0
					}), m.a.createElement(bl.a, {
						confirmNavigate: this.confirmNavigate
					})), T && !M && m.a.createElement(_u.a, {
						className: Ac.a.cornerModal,
						isNameEditable: h,
						isOneTapSession: g,
						isResponsiveSettingsEnabled: f,
						logoutUser: this.logoutUser,
						overlayClassName: Object(ke.a)(A, Ac.a.modalOverlay),
						username: I,
						withOverlay: !M
					}), T && M && m.a.createElement(xu, {
						className: Ac.a.cornerModal,
						isOpen: !0,
						tooltipId: Ym,
						username: I
					}))
				}
			}
			var op = Object(Xe.c)(tp(sp(rp))),
				ap = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				ip = n("./src/reddit/selectors/experiments/index.ts");
			const cp = e => Object(Cc.c)(e, {
				experimentName: _.Nc,
				experimentEligibilitySelector: ip.f
			}) === _.lb.Enabled;
			var lp = n("./src/reddit/components/Header/User/index.m.less"),
				dp = n.n(lp);
			const {
				fbt: up
			} = n("./node_modules/fbt/lib/FbtPublic.js"), mp = Object(re.c)({
				account: e => e.user.account,
				isNsfwBlur: e => {
					const t = Object(oe.d)(e),
						n = Object(oe.e)(e);
					return t || n
				},
				origin: ae.k,
				isShredditParityEnabled: su.a
			}), pp = m.a.memo(e => m.a.createElement("div", {
				className: Object(ke.a)(e.className, dp.a.row)
			}, !e.account && m.a.createElement(bp, e), m.a.createElement(op, {
				className: Object(ke.a)({
					[dp.a.loggedOut]: !e.account
				}),
				user: e.account,
				onAvatarButtonClick: e.onAvatarButtonClick
			}))), bp = e => {
				const t = Object(xe.e)(Mm.g),
					n = Object(xe.e)(O.Hb),
					s = Object(xe.e)(ap.c),
					r = Object(xe.e)(cp),
					o = e.pageLayer,
					a = i.a.accountManagerOrigin,
					c = o ? o.url : "/",
					l = o && o.meta && o.meta.name === k.Sb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + c),
					d = !!e.isNsfwBlur,
					u = e.isShredditParityEnabled ? un.k : un.t;
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(Zc, {
					sendNavClickInbox: () => e.sendEvent(Object(Su.D)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: c,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: dp.a.iconWrapper
				}), m.a.createElement("div", {
					className: Object(ke.a)(dp.a.loggedOutRow, r ? dp.a.swapAuthNavButtons : "")
				}, m.a.createElement(u, {
					kind: un.b.ExternalLink,
					priority: r ? un.c.Primary : un.c.Secondary,
					redditStyle: !0,
					className: Object(ke.a)(r ? dp.a.separator : "", dp.a.button),
					rplStyle: e.isShredditParityEnabled,
					href: `${a}/login/?dest=${l}`,
					onClick: t => {
						Object(Be.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(d), e.sendEvent(Object(Ad.a)("nav")))
					}
				}, up._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(un.t, {
					kind: un.b.ExternalLink,
					priority: r ? un.c.Secondary : un.c.Primary,
					redditStyle: !e.isShredditParityEnabled,
					rplStyle: e.isShredditParityEnabled,
					className: Object(ke.a)(dp.a.button, r ? "" : dp.a.separator),
					href: `${a}/register/?dest=${l}`,
					onClick: t => {
						Object(Be.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(d), e.sendEvent(Object(Ad.c)("nav")))
					}
				}, up._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var hp = Object(Hn.v)()(Object(xe.b)(mp, e => ({
					onOpenLoginModal: t => {
						t ? (e(Object(Gt.k)({
							actionSource: Gt.a.NsfwBlockingModal
						})), Object(Vl.c)(Vl.a.Login)) : e(Object(Gt.k)({
							actionSource: Gt.a.HeaderLogin
						})), e(Object(ne.openLoginModal)())
					},
					onOpenRegisterModal: t => {
						t ? (e(Object(Gt.k)({
							actionSource: Gt.a.NsfwBlockingModal
						})), Object(Vl.c)(Vl.a.Signup)) : e(Object(Gt.k)({
							actionSource: Gt.a.HeaderSignup
						})), e(Object(ne.openRegisterModal)())
					},
					closeUserDropdown: () => e(Object(_c.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(Xe.c)(pp))),
				gp = n("./src/reddit/components/Header/index.m.less"),
				fp = n.n(gp);

			function vp() {
				return (vp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Op = Ke.a.header("HeaderDynamicStyles", fp.a),
				Cp = Object(re.c)({
					isLoggedIn: O.S,
					isNightMode: O.fb,
					isResponsiveSettingsEnabled: Wn.a,
					isPageResponsive: Ii.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Ep = Object(Hn.v)({
					categoryName: Hn.c,
					pageLayer: e => e
				}),
				yp = e => {
					const t = Object(u.useContext)(Re.a);
					return m.a.createElement("div", {
						className: fp.a.left
					}, m.a.createElement(ka.a, null, s.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(Pa.b, null), m.a.createElement(ar.a, {
						"aria-label": s.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: fp.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(bi.a, {
						className: Object(ke.a)(fp.a.snoo, {
							[fp.a.snooExp]: t
						})
					}), m.a.createElement(hi.a, {
						className: fp.a.wordmark
					})), e.children)
				},
				xp = e => m.a.createElement("div", {
					className: fp.a.right
				}, e.children, m.a.createElement(hp, {
					onAvatarButtonClick: e.onAvatarButtonClick
				})),
				_p = e => {
					const t = Object(u.useContext)(Re.a),
						[n, s] = Object(u.useState)(!1);
					return m.a.createElement("div", {
						className: Object(ke.a)(fp.a.layout, {
							[fp.a.layoutContainer]: t
						})
					}, m.a.createElement(yp, vp({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(Sa, null), m.a.createElement(pi, {
						className: fp.a.search
					})), m.a.createElement(xp, {
						onAvatarButtonClick: () => {
							s(!0)
						}
					}, m.a.createElement(xc, {
						isAvatarButtonClicked: n,
						className: fp.a.quickLinks
					})))
				},
				jp = e => {
					const t = Object(u.useContext)(Re.a),
						n = Object(xe.e)(ur.c);
					return m.a.createElement("div", {
						className: Object(ke.a)(fp.a.layout, {
							[fp.a.layoutContainer]: t
						})
					}, m.a.createElement(yp, vp({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), !n && m.a.createElement(Sa, null), m.a.createElement("div", {
						className: fp.a.searchContainer
					}, m.a.createElement(pi, {
						className: fp.a.search
					}))), m.a.createElement(xp, null, m.a.createElement(ic, null), m.a.createElement(wi, null)))
				};
			var Sp = Ep(Object(xe.b)(Cp, e => ({
					onReloadFrontpage: () => e(Object(A.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(Re.a);
					return t = e.isLoggedIn ? _p : jp, m.a.createElement(Op, {
						"data-redditstyle": !0,
						className: Object(ke.a)(fp.a.container, e.className, {
							[fp.a.bladeIsOpen]: e.isBladeOpen,
							[fp.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Li, {
						className: fp.a.MwebResponsiveHeader
					}))
				}))),
				Pp = n("./src/reddit/components/LightboxHeader/index.tsx");
			const kp = Object(Ut.a)({
				getComponent: () => Object(de.a)(() => n.e("MatrixChat").then(n.bind(null, "./src/reddit/components/MatrixChat/index.tsx"))).then(e => e.MatrixChat),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var Np = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Mp = (e, t) => {
					let n = `${i.a.accountManagerOrigin}/${e}/`;
					return t && (n = `${n}?dest=${encodeURIComponent(t)}`), n
				};
			const wp = () => e => ({
					...vn.o(e),
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				{
					fbt: Ip
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				Ap = Object(re.c)({
					isLoggedIn: O.S,
					origin: ae.k,
					isShredditParityEnabled: su.a
				});
			class Tp extends m.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(Be.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(wp()), this.props.openRegisterModal())
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
						href: Mp(Ye.a.Register, t),
						onClick: this.onClick,
						isFullWidth: !0
					}, Ip._("Join Reddit", null, {
						hk: "3pGxYq"
					}))
				}
			}
			var Rp = Object(xe.b)(Ap, e => ({
					openRegisterModal: () => {
						e(Object(Gt.k)({
							actionSource: Gt.a.IdCard,
							redirectUrl: zr.c[zr.b.Home]
						})), e(Object(ne.openRegisterModal)())
					}
				}))(Object(Xe.c)(Tp)),
				Lp = n("./src/reddit/components/CreateAccountSection/index.m.less"),
				Dp = n.n(Lp);
			const {
				fbt: Fp
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Gp = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: t
					}, m.a.createElement("div", {
						className: Dp.a.divider
					}), m.a.createElement("div", {
						className: Dp.a.createDesc
					}, Fp._("Create an account to follow your favorite communities and start taking part in conversations.", null, {
						hk: "z6A2K"
					})), m.a.createElement(Rp, {
						className: Dp.a.createButton
					}))
				},
				Up = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Bp = n.n(Up);
			const {
				fbt: Hp
			} = n("./node_modules/fbt/lib/FbtPublic.js"), qp = Object(re.c)({
				currentPage: Rr
			}), Vp = Object(xe.b)(qp, e => ({
				onUnpinSubscriptions: () => e(Object(He.j)())
			})), Wp = Object(Hn.v)();
			var zp = Ke.a.wrapped(Wp(Vp(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, e.isLoggedIn && m.a.createElement("div", {
					className: Bp.a.title
				}, m.a.createElement("div", {
					className: Bp.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(lr.a, {
					name: "close",
					className: Bp.a.icon
				}))), m.a.createElement(Ea, {
					className: Bp.a.withOverflow,
					currentPage: e.currentPage,
					isPinned: !0
				}), !e.isLoggedIn && m.a.createElement(Gp, {
					className: Bp.a.createAccountSection
				})))), "Component", Bp.a),
				Qp = n("./src/reddit/components/Survey/index.tsx"),
				Kp = n("./src/reddit/components/ThemeProvider/index.tsx");
			const Zp = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Xp = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...vn.d(t),
						reason: "primary"
					}
				}),
				Yp = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...vn.d(t),
						reason: "secondary"
					}
				});
			var Jp = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				$p = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				eb = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				tb = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				nb = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				sb = n("./src/reddit/models/Toast/index.ts"),
				rb = n("./src/reddit/selectors/structuredStyles.ts"),
				ob = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				ab = n.n(ob);

			function ib() {
				return (ib = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const cb = e => {
				const t = Ko.a;
				switch (e.kind) {
					case sb.b.Error:
					case sb.b.AuthError:
					case sb.b.SuccessEndBroadcast:
						return t.warning;
					case sb.b.SuccessCommunity:
						return t.op;
					case sb.b.SuccessCommunityGreen:
					case sb.b.SuccessMod:
					case sb.b.SuccessUnlockComment:
						return t.approved;
					case sb.b.SuccessLockComment:
						return t.reported;
					case sb.b.EuCookiePolicy:
					case sb.b.UappBanner:
					case sb.b.Undo:
					default:
						return t.op
				}
			};
			class lb extends m.a.Component {
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
			const db = Ke.a.wrapped(lb, "PlainBread", ab.a);
			var ub = e => m.a.createElement(db, ib({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": cb(e)
					}
				})),
				mb = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				pb = n.n(mb);
			const bb = Ke.a.span("Text", pb.a);
			var hb = n("./src/reddit/components/Toaster/index.m.less"),
				gb = n.n(hb);
			const {
				fbt: fb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), vb = Ke.a.wrapped(eb.a, "AuthErrorToastIcon", gb.a), Ob = Ke.a.wrapped(un.l, "AuthErrorToastPrimaryButton", gb.a);
			class Cb extends m.a.Component {
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
					}, m.a.createElement(ub, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(vb, null), m.a.createElement(bb, null, fb._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(Ob, {
						type: "submit"
					}, fb._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Eb = Cb,
				yb = n("./src/lib/cookieConsent/index.ts"),
				xb = n("./src/reddit/controls/Link/index.tsx"),
				_b = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				jb = n.n(_b);
			const {
				fbt: Sb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pb = Ke.a.wrapped(un.l, "PrimaryButton", jb.a), kb = Ke.a.wrapped(ub, "Bread", jb.a);
			class Nb extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(yb.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(yb.b)({
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
					return m.a.createElement("section", null, m.a.createElement(kb, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						},
						className: jb.a.EuCookiePolicyContainer
					}, m.a.createElement("section", {
						className: jb.a.EuCookiePolicyBody
					}, m.a.createElement("div", null, m.a.createElement(bb, {
						className: jb.a.EuCookiePolicyText
					}, Sb._("Reddit and its partners use cookies and similar technologies to provide you with a better experience.", null, {
						hk: "PLhhw"
					})), m.a.createElement(bb, {
						className: jb.a.EuCookiePolicyText
					}, Sb._("By accepting all cookies, you agree to our use of cookies to deliver and maintain our services and site, improve the quality of Reddit, personalize Reddit content and advertising, and measure the effectiveness of advertising.", null, {
						hk: "rCT68"
					})), m.a.createElement(bb, {
						className: jb.a.EuCookiePolicyText
					}, Sb._("By rejecting non-essential cookies, Reddit may still use certain cookies to ensure the proper functionality of our platform.", null, {
						hk: "nao6F"
					}), Sb._("For more information, please see our {=Cookie Notice} and our {=Privacy Policy} .", [Sb._param("=Cookie Notice", m.a.createElement(xb.a, {
						href: "https://www.reddit.com/policies/cookies",
						target: "_blank"
					}, Sb._("Cookie Notice", null, {
						hk: "387ZAi"
					}))), Sb._param("=Privacy Policy", m.a.createElement(xb.a, {
						href: "https://www.reddit.com/policies/privacy-policy",
						target: "_blank"
					}, Sb._("Privacy Policy", null, {
						hk: "2ddMNC"
					})))], {
						hk: "2Rqln2"
					})))), m.a.createElement("section", {
						className: jb.a.EuCookiePolicyOptions
					}, m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(Pb, {
						type: "submit"
					}, Sb._("Accept all", null, {
						hk: "1tnS6V"
					})))), m.a.createElement("section", null, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(Pb, {
						type: "submit"
					}, Sb._("Reject non-essential", null, {
						hk: "M79jf"
					})))))))
				}
			}
			var Mb, wb = Nb;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Mb || (Mb = {}));
			var Ib = n("./src/reddit/controls/Typography/index.tsx"),
				Ab = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Tb = n.n(Ab);

			function Rb() {
				return (Rb = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Lb = Ke.a.div("Container", Tb.a),
				Db = Ke.a.img("SideImage", Tb.a),
				Fb = Ke.a.div("Main", Tb.a),
				Gb = Ke.a.div("SubTitle", Tb.a),
				Ub = Ib.a,
				Bb = Ke.a.wrapped(un.m, "PrimaryLinkButton", Tb.a),
				Hb = Ke.a.wrapped(yl.a, "CloseIcon", Tb.a);
			class qb extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Xp(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Zp(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: r,
						subTitle: o,
						title: a
					} = this.props;
					return m.a.createElement(Lb, {
						key: t,
						style: {
							...r,
							transform: `\n            translateY(${r.y}px)\n            scale(${r.x}, ${r.x})\n          `
						}
					}, m.a.createElement(Hb, {
						onClick: this.props.onClose
					}), m.a.createElement(Db, {
						srcSet: n
					}), m.a.createElement(Fb, null, m.a.createElement(Gb, null, o), m.a.createElement(Ib.b, null, a), m.a.createElement(Ub, null, e), m.a.createElement(Bb, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, s.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Vb = Object(xe.b)(null, e => ({
					onSignup: () => e(Object(ne.openRegisterModal)())
				}))(Object(Xe.c)(qb)),
				Wb = `${zb("subscribe-cap.png")} 1x,\n  ${zb("subscribe-cap@2x.png")} 2x,`;

			function zb(e) {
				return `${i.a.assetPath}/img/banner/${e}`
			}
			const Qb = 3;
			var Kb = n("./src/lib/permanentCookieOptions.ts");
			const Zb = e => `${e}:1527210000`;
			var Xb = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Yb = n.n(Xb);
			const {
				fbt: Jb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $b = Ke.a.div("Icon", Yb.a), eh = () => m.a.createElement($b, {
				style: {
					backgroundImage: `url(${i.a.assetPath}/img/snoo-upvote.png)`
				}
			}), th = Ke.a.wrapped(un.l, "PrimaryButton", Yb.a), nh = Ke.a.wrapped(ub, "Bread", Yb.a);
			class sh extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), d.a.set(Tn.j, Zb(Qb), Object(Kb.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(nh, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(eh, null), m.a.createElement(bb, null, Jb._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Jb._param("=User Agreement", m.a.createElement(xb.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Jb._("User Agreement", null, {
						hk: "XS57W"
					}))), Jb._param("=Privacy Policy", m.a.createElement(xb.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Jb._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(th, {
						type: "submit"
					}, Jb._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var rh = sh;

			function oh() {
				return (oh = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ah = [],
				ih = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				ch = {
					opacity: .5,
					x: .5,
					y: 50
				},
				lh = {
					opacity: Object(Qe.spring)(0),
					x: Object(Qe.spring)(.6),
					y: Object(Qe.spring)(80, ih)
				},
				dh = Ke.a.wrapped(eb.a, "SnooFacepalm", gb.a),
				uh = Ke.a.wrapped(tb.a, "SnooHappy", gb.a),
				mh = Ke.a.wrapped(vr.b, "SubredditIcon", gb.a),
				ph = Ke.a.img("CustomIcon", gb.a),
				bh = Ke.a.div("Container", gb.a),
				hh = Ke.a.wrapped(yl.a, "Close", gb.a),
				gh = Ke.a.wrapped(Jp.a, "LockIcon", gb.a),
				fh = Ke.a.wrapped(nb.a, "UnlockIcon", gb.a),
				vh = Ke.a.wrapped($p.a, "RemoveIcon", gb.a),
				Oh = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(hh, oh({
					className: "CloseIcon"
				}, e))),
				Ch = Ke.a.wrapped(ub, "Bread", gb.a),
				Eh = Object(re.c)({
					subredditIcon: rb.b,
					toastSlices: e => e.toaster
				}),
				yh = Object(xe.b)(Eh, e => ({
					dismissToast: t => () => e(Object(Ee.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(Ee.g)(n))
					}
				}));
			class xh extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => _h(e, this.props.toastSlices), this.getWillEnterStyles = () => ch, this.getWillLeaveStyles = () => lh
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(Qe.TransitionMotion, {
						defaultStyles: ah,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(bh, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === sb.b.Custom && void 0 !== t.customToastType) {
							const s = Sh[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === sb.b.UappBanner) return m.a.createElement(rh, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === sb.b.EuCookiePolicy) return m.a.createElement(wb, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(Zp("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(Xp("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Yp("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === sb.b.AuthError) return m.a.createElement(Eb, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === sb.b.Modal ? un.l : un.r,
							r = t.kind === sb.b.Modal ? un.o : un.r;
						return m.a.createElement(Ch, {
							className: t.kind === sb.b.Modal ? gb.a.mModal : void 0,
							"data-testid": "toaster",
							key: e.key,
							kind: t.kind,
							sendEvent: t.name || t.onDisplay ? () => {
								t.name && this.props.sendEvent(Zp(t.name)), t.onDisplay && t.onDisplay()
							} : void 0,
							style: n
						}, m.a.createElement("div", {
							className: gb.a.ContentWrapper
						}, jh(t, this.props.subredditIcon), t.kind === sb.b.SuccessLockComment && m.a.createElement(gh, null), t.kind === sb.b.SuccessUnlockComment && m.a.createElement(fh, null), m.a.createElement(bb, null, t.text)), m.a.createElement("div", {
							className: gb.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Xp(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(r, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Yp(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(Oh, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const _h = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(Qe.spring)(1),
							x: Object(Qe.spring)(1, ih),
							y: Object(Qe.spring)(0, ih)
						}
					}))
				},
				jh = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(ph, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case sb.b.Error:
							return m.a.createElement(dh, null);
						case sb.b.SuccessEndBroadcast:
							return m.a.createElement(vh, null);
						case sb.b.SuccessAward:
						case sb.b.SuccessCommunity:
						case sb.b.SuccessCommunityGreen:
							return m.a.createElement(uh, null);
						case sb.b.SuccessMod:
							return m.a.createElement(mh, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Sh = {
					[sb.a.subscribeCap]: e => m.a.createElement(Vb, Rb({
						name: Mb.LoggedOutMaxSubscriptions,
						sideImage: Wb,
						title: s.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: s.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Ph = yh(Object(Xe.c)(xh)),
				kh = n("./src/reddit/featureFlags/profileCollections.ts"),
				Nh = n("./src/reddit/helpers/trackers/banners.ts"),
				Mh = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				wh = n.n(Mh);
			var Ih = Ke.a.div("Wrapper", wh.a),
				Ah = n("./src/reddit/components/AlertBanner/index.m.less"),
				Th = n.n(Ah);
			const {
				fbt: Rh
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Lh = () => m.a.createElement(Ih, {
				className: Object(ke.a)(Th.a.wrapper, Th.a.suspended)
			}, m.a.createElement("span", null, Rh._("Your account has been permanently suspended from Reddit.", null, {
				hk: "2hzFKt"
			}), " "), Rh._("Click {=here} for more info.", [Rh._param("=here", m.a.createElement("a", {
				className: Th.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360045734911"
			}, Rh._("here", null, {
				hk: "49ZRXB"
			})))], {
				hk: "2jIHMO"
			})), Dh = e => {
				let {
					suspensionDaysLeft: t
				} = e;
				return m.a.createElement(Ih, {
					className: Object(ke.a)(Th.a.wrapper, Th.a.suspended)
				}, m.a.createElement("span", null, Rh._({
					"*": "Your account has been suspended from Reddit for {number of days} days.",
					_1: "Your account has been suspended from Reddit for 1 day."
				}, [Rh._plural(t, "number of days")], {
					hk: "2Bwand"
				}), " "), Rh._("Click {=here} for more info.", [Rh._param("=here", m.a.createElement("a", {
					className: Th.a.underlineLink,
					href: "https://www.reddithelp.com/hc/en-us/articles/360045308832"
				}, Rh._("here", null, {
					hk: "49ZRXB"
				})))], {
					hk: "lV57o"
				}))
			}, Fh = () => m.a.createElement(Ih, {
				className: Object(ke.a)(Th.a.wrapper, Th.a.fpr)
			}, m.a.createElement("span", null, Rh._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: Th.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Rh._("Learn more", null, {
				hk: "1OTc8q"
			}))), Gh = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(Ih, {
					className: Object(ke.a)(Th.a.wrapper, Th.a.deprecated)
				}, m.a.createElement("span", null, Rh._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [Rh._param("update your browser", m.a.createElement(Uh, {
					link: t
				}, Rh._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, Rh._("If you do not update your browser, we suggest you visit {old reddit} .", [Rh._param("old reddit", m.a.createElement("a", {
					className: Th.a.underlineLink,
					href: i.a.oldRedditUrl,
					onClick: n
				}, Rh._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, Uh = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: Th.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class Bh extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(Nh.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(Nh.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n,
						suspensionDaysLeft: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(Gh, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Fh, null) : n ? s || null != s ? m.a.createElement(Dh, {
						suspensionDaysLeft: s
					}) : m.a.createElement(Lh, null) : null
				}
			}
			var Hh = Object(Xe.c)(Bh);
			const qh = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				Vh = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				});
			var Wh = n("./src/reddit/components/OfflineBanner/index.m.less"),
				zh = n.n(Wh);
			const {
				fbt: Qh
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Kh = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(ke.a)(e.className, zh.a.banner, {
							[zh.a.online]: e.online,
							[zh.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: zh.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: zh.a.title
					}, e.online ? Qh._("Found the internet!", null, {
						hk: "fMghd"
					}) : Qh._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(lr.a, {
						className: zh.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				Zh = n("./node_modules/lodash/debounce.js"),
				Xh = n.n(Zh),
				Yh = n("./src/reddit/components/RecapGame/index.banana.m.less"),
				Jh = n.n(Yh);
			var $h = e => m.a.createElement("div", {
					className: Jh.a.wrapper,
					style: {
						left: e.left,
						top: e.top
					}
				}, m.a.createElement("img", {
					src: `${i.a.assetPath}/img/snoosweek/banana.gif`,
					className: Jh.a.img
				})),
				eg = n("./src/reddit/components/RecapGame/index.m.less"),
				tg = n.n(eg);
			const {
				fbt: ng
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var sg = e => {
				const t = Object(xe.d)(),
					n = Object(Xe.b)(),
					s = e.score.toString();
				return Object(u.useEffect)(() => {
					n(Object(nc.d)())
				}, [n]), m.a.createElement("div", {
					className: tg.a.recapModal
				}, m.a.createElement("div", {
					className: tg.a.recapModalInner,
					style: {
						backgroundImage: `url(${i.a.assetPath}/img/snoosweek/exit_modal.svg)`
					}
				}), m.a.createElement("p", {
					className: tg.a.recapModalEndText
				}, ng._("your future is ripe with opportunity", null, {
					hk: "2JMA75"
				})), m.a.createElement("img", {
					className: Object(ke.a)(tg.a.recapModalSnoo, tg.a.end),
					src: `${i.a.assetPath}/img/snoosweek/ghost_static_end.png`
				}), m.a.createElement("div", {
					className: tg.a.recapModalScore
				}, m.a.createElement("span", {
					className: tg.a.recapModalScoreTitle
				}, ng._("score", null, {
					hk: "2IP3HQ"
				})), m.a.createElement("span", {
					className: tg.a.recapModalScoreValue
				}, s)), m.a.createElement("div", {
					className: tg.a.controls
				}, m.a.createElement(un.t, {
					className: tg.a.recapModalButton,
					priority: un.c.Secondary,
					onClick: () => {
						e.onRestart && e.onRestart()
					}
				}, ng._("play again", null, {
					hk: "1GHFMt"
				})), m.a.createElement(un.t, {
					className: tg.a.recapModalButton,
					priority: un.c.Secondary,
					onClick: () => {
						t(Object(qe.recapGameClose)())
					}
				}, ng._("say goodbye", null, {
					hk: "4xsOLo"
				}))))
			};
			const {
				fbt: rg
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var og = e => {
					let {
						handler: t
					} = e;
					const n = Object(xe.d)(),
						s = Object(Xe.b)(),
						r = Object(xe.e)(O.fb),
						o = Object(xe.e)(O.S),
						a = Object(xe.e)(e => Object(rc.a)(e, {
							pageLayer: e.platform.currentPage
						})),
						[c, l] = Object(u.useState)(!1);
					return Object(u.useEffect)(() => {
						a && Object(Ln.Wb)(), l(Object(Ln.R)()), n(Object(qe.recapGameSetOriginalNightModeAction)(r)), o && Object(Ln.fb)()
					}, [o, s, n, r, a]), m.a.createElement("div", {
						className: tg.a.recapModal
					}, m.a.createElement("div", {
						className: tg.a.recapModalInner,
						style: {
							backgroundImage: `url(${i.a.assetPath}/img/snoosweek/IntroModal.svg)`
						}
					}), m.a.createElement(un.t, {
						Icon: Object(lr.b)("close"),
						className: tg.a.recapModalClose,
						priority: un.c.Plain,
						iconClassName: tg.a.closeIcon,
						onClick: () => {
							n(Object(qe.recapGameClose)()), s(Object(nc.c)())
						}
					}), m.a.createElement("img", {
						className: tg.a.recapModalSnoo,
						src: `${i.a.assetPath}/img/snoosweek/ghost_static.png`
					}), m.a.createElement("p", {
						className: tg.a.recapModalText
					}, rg._("Try moving Snoo with your keyboard {=WASD}. Press {=ESC} to exit at any time. Collect the maximum bananas before time runs out.", [rg._param("=WASD", m.a.createElement("span", {
						className: tg.a.red
					}, rg._("WASD", null, {
						hk: "3q3XTJ"
					}))), rg._param("=ESC", m.a.createElement("span", {
						className: tg.a.red
					}, rg._("ESC", null, {
						hk: "3N5wI5"
					})))], {
						hk: "zrn6R"
					})), m.a.createElement("div", {
						className: tg.a.controls
					}, m.a.createElement(un.t, {
						className: tg.a.recapModalButton,
						priority: un.c.Secondary,
						onClick: () => {
							o ? (r || n(Object(pl.A)({
								nightmode: !0
							})), t && t(), s(Object(nc.e)())) : (n(Object(Gt.k)({
								actionSource: Gt.a.HeaderLogin
							})), n(Object(ne.openLoginModal)()), Object(Ln.Xb)()), !c && s(Object(nc.b)())
						}
					}, rg._("start", null, {
						hk: "29i0Wc"
					}))))
				},
				ag = n("./src/reddit/components/RecapGame/index.scoreboard.m.less"),
				ig = n.n(ag);
			var cg = e => {
					let {
						isTransparent: t = !1,
						timeLeft: n,
						score: s
					} = e;
					return m.a.createElement("div", {
						className: ig.a.scoreboardwrapper,
						style: t ? {
							opacity: .3
						} : {}
					}, m.a.createElement("p", {
						className: ig.a.score
					}, s), m.a.createElement("p", {
						className: ig.a.timer
					}, n), m.a.createElement("div", {
						className: ig.a.scoreboard,
						style: {
							backgroundImage: `url(${i.a.assetPath}/img/snoosweek/score_wasd.svg)`
						}
					}))
				},
				lg = n("./src/reddit/components/RecapGame/index.snoo.m.less"),
				dg = n.n(lg);
			var ug = e => {
				let {
					direction: t,
					top: n,
					left: s
				} = e;
				const r = `${i.a.assetPath}/img/snoosweek/ghost_${t}.gif`;
				return m.a.createElement("div", {
					className: dg.a.snoo,
					style: {
						left: s,
						top: n
					}
				}, m.a.createElement("img", {
					src: r,
					alt: "snoo-player",
					className: dg.a.snooimg
				}))
			};
			class mg extends m.a.Component {
				constructor(e) {
					super(e), this.snooSize = 140, this.tokenSize = 48, this.snooMargin = 20, this.toolbarHeight = 50, this.gameSpeed = 15, this.scoreBoardWidth = 220, this.scoreBoardHeigh = 310, this.onResize = Xh()(() => {
						this.handleResize()
					}, 300), this.handleResize = () => {
						const {
							innerHeight: e,
							innerWidth: t
						} = window;
						this.setState({
							height: e,
							width: t
						})
					}, this.keyHandler = e => {
						e.preventDefault(), e.repeat || e.key in this.keyAction && e.type in this.keyAction[e.key] && this.keyAction[e.key][e.type]()
					}, this.resetSnooIf = e => {
						this.state.snooDirection === e && this.setState({
							snooDirection: "none"
						})
					}, this.keyAction = {
						w: {
							keydown: () => {
								this.setState({
									snooDirection: "up"
								})
							},
							keyup: () => {
								this.resetSnooIf("up")
							}
						},
						a: {
							keydown: () => {
								this.setState({
									snooDirection: "left"
								})
							},
							keyup: () => {
								this.resetSnooIf("left")
							}
						},
						s: {
							keydown: () => {
								this.setState({
									snooDirection: "down"
								})
							},
							keyup: () => {
								this.resetSnooIf("down")
							}
						},
						d: {
							keydown: () => {
								this.setState({
									snooDirection: "right"
								})
							},
							keyup: () => {
								this.resetSnooIf("right")
							}
						}
					}, this.checkForCollision = () => {
						const {
							tokens: e,
							snooX: t,
							snooY: n
						} = this.state;
						for (const s in e) {
							const r = e[s].x,
								o = e[s].y;
							if (r < t + this.snooSize && r + this.tokenSize > t && o < n + this.snooSize && this.tokenSize + o > n) return Number(s)
						}
						return -1
					}, this.updateTokenState = () => {
						const {
							tokenLifeMinSeconds: e,
							tokenLifeMaxSeconds: t,
							fps: n
						} = this.props, {
							tokens: s,
							score: r,
							frameNo: o,
							width: a,
							height: i,
							status: c
						} = this.state;
						if ("in_play" !== c) return;
						let l = !1,
							d = !1;
						if (o % n == 0) {
							l = !0;
							for (const e in s) s[e].lifetime > 0 && s[e].lifetime--;
							for (const n in s)
								if (s[n].lifetime <= 0) {
									s[n].lifetime = Math.floor(Math.random() * (t - e + 1) + e), s[n].x = Math.floor(Math.random() * (a - 2 * this.tokenSize + 4)) + this.tokenSize, s[n].y = Math.floor(Math.random() * (i - 2 * this.tokenSize + 4)) + this.tokenSize;
									break
								}
						}
						const u = this.checkForCollision(); - 1 !== u && s[u].lifetime > 0 && (s[u].lifetime = 0, l = !0, d = !0), l && this.setState({
							tokens: s
						}, () => {
							d && this.setState({
								score: r + 1
							})
						})
					}, this.updateSnooState = () => {
						let {
							snooX: e,
							snooY: t
						} = this.state;
						const {
							status: n
						} = this.state;
						if ("in_play" !== n) return;
						const {
							snooDirection: s,
							height: r,
							width: o
						} = this.state;
						"left" === s && e > -this.snooMargin ? e -= this.gameSpeed : "right" === s && e + this.snooSize + this.snooMargin < o ? e += this.gameSpeed : "up" === s && t > this.toolbarHeight ? t -= this.gameSpeed : "down" === s && t + this.snooSize + this.snooMargin < r && (t += this.gameSpeed), this.setState({
							snooX: e,
							snooY: t
						})
					}, this.updateTimerAndCheckGameEnd = () => {
						const {
							timeLeft: e
						} = this.state;
						this.setState({
							timeLeft: e - 1
						}, () => {
							e <= 1 && this.setState({
								status: "game_over",
								tokens: {}
							})
						})
					}, this.updateFrame = () => {
						const {
							fps: e
						} = this.props, {
							frameNo: t
						} = this.state;
						this.setState({
							frameNo: (t + 1) % e
						}, () => {
							this.updateSnooState(), this.updateTokenState(), t % e == 0 && this.updateTimerAndCheckGameEnd()
						})
					}, this.startGamePlay = () => {
						const {
							fps: e
						} = this.props;
						"new_game" === this.state.status && this.setState({
							status: "in_play"
						}, () => {
							const t = setInterval(this.updateFrame, 1e3 / e);
							this.setState({
								refreshLoopID: t
							})
						})
					}, this.endGamePlay = () => {
						const {
							refreshLoopID: e,
							status: t
						} = this.state, {
							fps: n,
							tokenMax: s
						} = this.props;
						if ("game_over" === t) {
							void 0 !== e && clearInterval(e);
							const t = {};
							for (let e = 0; e < s; e++) t[e] = {
								x: 0,
								y: 0,
								lifetime: 0
							};
							this.setState({
								status: "in_play",
								score: 0,
								timeLeft: 60,
								snooY: window.innerHeight / 2 - this.snooSize / 2,
								snooX: window.innerWidth / 2 - this.snooSize,
								snooDirection: "none",
								tokens: t
							});
							const r = setInterval(this.updateFrame, 1e3 / n);
							this.setState({
								refreshLoopID: r
							})
						}
					}, this.isSnooOnScoreboard = (e, t, n) => e >= n - (this.scoreBoardWidth + this.snooSize + this.snooMargin) && t <= this.scoreBoardHeigh + 45, this.containerRef = m.a.createRef();
					const t = {};
					for (let n = 0; n < e.tokenMax; n++) t[n] = {
						x: 0,
						y: 0,
						lifetime: 0
					};
					this.state = {
						score: 0,
						timeLeft: e.timeMax,
						frameNo: 0,
						snooX: -25,
						snooY: 45,
						snooDirection: "none",
						tokens: t,
						status: "new_game",
						height: 1,
						width: 1
					}
				}
				componentDidUpdate(e, t) {
					const n = this.containerRef.current;
					n && n.focus()
				}
				componentDidMount() {
					this.handleResize(), window.addEventListener("resize", this.onResize), this.setState(e => ({
						snooY: window.innerHeight / 2 - this.snooSize / 2,
						snooX: window.innerWidth / 2 - this.snooSize
					}))
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.onResize)
				}
				renderTokens() {
					const {
						tokens: e
					} = this.state, t = [];
					for (const n in e) {
						const s = e[n];
						s.lifetime > 0 && t.push(m.a.createElement($h, {
							key: n,
							left: `${s.x}px`,
							top: `${s.y}px`
						}))
					}
					return t
				}
				render() {
					const {
						snooX: e,
						snooY: t,
						snooDirection: n,
						status: s,
						score: r,
						timeLeft: o,
						width: a
					} = this.state;
					let c = m.a.createElement(m.a.Fragment, null);
					return "new_game" === s ? c = m.a.createElement(og, {
						handler: this.startGamePlay
					}) : "in_play" === s ? c = m.a.createElement(m.a.Fragment, null, this.renderTokens(), m.a.createElement(cg, {
						score: r,
						timeLeft: o,
						isTransparent: this.isSnooOnScoreboard(e, t, a)
					}), m.a.createElement(ug, {
						left: `${e}px`,
						top: `${t}px`,
						direction: n
					})) : "game_over" === s && (c = m.a.createElement(sg, {
						onRestart: this.endGamePlay,
						score: r
					})), m.a.createElement("div", {
						tabIndex: 0,
						onKeyDown: this.keyHandler,
						onKeyUp: this.keyHandler,
						ref: this.containerRef
					}, ["up", "down", "left", "right", "none"].map(e => m.a.createElement("img", {
						key: e,
						style: {
							display: "none"
						},
						src: `${i.a.assetPath}/img/snoosweek/ghost_${e}.gif`
					})), m.a.createElement("div", {
						className: tg.a.gameWrapper
					}, c), m.a.createElement("div", {
						className: tg.a.recapoverlay
					}, this.props.children))
				}
			}
			mg.defaultProps = {
				tokenMax: 10,
				timeMax: 60,
				tokenLifeMinSeconds: 5,
				tokenLifeMaxSeconds: 15,
				fps: 20
			};
			var pg = mg,
				bg = n("./src/reddit/components/Upsell/async.ts"),
				hg = n("./src/reddit/constants/componentSizes.ts"),
				gg = n("./src/reddit/constants/elementIds.ts"),
				fg = n("./src/reddit/constants/history.ts"),
				vg = n("./src/reddit/constants/posts.ts"),
				Og = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Cg = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				Eg = n("./src/reddit/constants/promo.ts"),
				yg = n("./src/reddit/contexts/Promo/index.ts");

			function xg(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case Eg.a.Completed:
						return s === Eg.a.Shown ? new Map(e.set(n, Eg.a.Completed)) : e;
					case Eg.a.Dismissed:
						return s === Eg.a.Shown ? new Map(e.set(n, Eg.a.Dismissed)) : e;
					case Eg.a.Shown:
						return s ? e : new Map(e.set(n, Eg.a.Shown));
					default:
						throw new Error
				}
			}
			var _g = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(xg, new Map), r = u.useCallback(e => s({
						type: Eg.a.Completed,
						payload: {
							promoName: e
						}
					}), []), o = u.useCallback(e => s({
						type: Eg.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: Eg.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: r,
						dismissPromo: o,
						promos: n,
						showPromo: a
					}), [r, o, n, a]);
					return u.createElement(yg.a.Provider, {
						value: i
					}, t)
				},
				jg = n("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				Sg = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				Pg = n("./src/reddit/helpers/postCollection.ts"),
				kg = n("./src/reddit/models/Theme/index.ts"),
				Ng = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Mg = n("./src/reddit/selectors/experiments/survey.ts"),
				wg = n("./src/reddit/selectors/notificationBanner.ts"),
				Ig = n("./src/reddit/selectors/onboarding.ts"),
				Ag = n("./src/reddit/selectors/posts.ts"),
				Tg = n("./src/reddit/selectors/recapGame.ts"),
				Rg = n("./src/reddit/components/AppRouter/index.m.less"),
				Lg = n.n(Rg);

			function Dg() {
				return (Dg = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Fg = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						location: s,
						...r
					} = e;
					const o = Object(u.useMemo)(() => Object(jg.a)(s.search), [s.search]);
					return m.a.createElement("div", Dg({
						className: Object(ke.a)(Lg.a.main, {
							[Lg.a.mShowingPaddedPinnedDescriptions]: n,
							[Lg.a.removeTopPadding]: o
						}, t),
						id: gg.a
					}, r))
				},
				Gg = Object(Le.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...r
					} = e;
					const o = Object(et.a)({
						theme: s,
						...r
					});
					return m.a.createElement("div", Dg({
						className: Object(ke.a)(Lg.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(kg.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Dn.c)(n)}px`
						}
					}, r))
				}),
				Ug = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const r = Object(u.useContext)(Re.a);
					return m.a.createElement("div", Dg({
						className: Object(ke.a)(Lg.a.lightboxHeaderWrapper, t, {
							[Lg.a.lightboxHeaderWrapperExp]: r
						})
					}, s, {
						ref: n
					}))
				},
				Bg = Object(wg.a)(Np.a.EmailCollectionBannerId),
				Hg = Object(xe.b)(() => Object(re.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(tt.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: O.z,
					isBlockingInterstitialEnabled: Ng.b,
					isBlockingInterstitialV2Enabled: Ng.c,
					isLoggedIn: O.S,
					isMatrixChatEnabled: X.b,
					isNpsSurveyEnabled: Mg.d,
					isOnboardingQueryParamEnabled: Ig.c,
					isSubscriptionsPinned: ur.c,
					isSuccessfulSurveyEnabled: Mg.f,
					isSuspended: O.Z,
					isFPR: O.Q,
					posts: Ag.J,
					profileCollectionsEnabled: kh.a,
					isRecapGameOn: e => {
						return "on" === Object(Tg.a)(e).recapGameState
					},
					showEmailCollectionBanner: e => !Object(Hn.P)(e.platform.currentPage) && Bg(e),
					signUpModalIsOpen: Object(Wc.c)(Xt.a.REGISTER_MODAL_ID),
					suspensionDaysLeft: O.zb
				}), e => ({
					onClickOutsideOverlay: t => e(Object(p.b)(t)),
					onPinSubscriptions: () => e(Object(He.i)()),
					onPostDismissTrigger: () => e(Object(Oe.l)()),
					onSuccessfulSignupTrigger: () => e(Object(Oe.h)()),
					onUnpinSubscriptions: () => e(Object(He.j)()),
					onRecapGameTrigger: () => {
						e(Object(qe.recapGameToggleAction)())
					}
				})),
				qg = (e, t) => !(!e.state || !e.state[fg.b.IsOverlay] || t === e);
			class Vg extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = Te()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < hg.k ? this.props.onUnpinSubscriptions() : !this.props.isLoggedIn && !this.props.isSubscriptionsPinned && e >= hg.k && this.props.onPinSubscriptions()
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
						if (Object(Hn.y)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								r = `${k.Nb.Post}_${s}`,
								o = t && s && t[r],
								a = o && o.belongsTo.type === vg.a.PROFILE;
							return !(!o || !Object(Pg.a)(o) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(tt.c)(e.frontpageSignupVariant),
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
					} = this.props, r = n.state && n.state[fg.b.IsOverlay], o = Object(Ue.a)(this.previousLocation, e.location);
					t && r && o && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(Ue.a)(this.previousLocation, this.props.location),
						i = r ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === k.Sb.INDEX || t.name === k.Sb.SUBREDDIT && n.subredditName === zr.b.Popular), r = Object(tt.c)(this.props.frontpageSignupVariant), o = Object(tt.c)(e.frontpageSignupVariant);
						s || r || !o ? r && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || r || o || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), (this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && this.props.signUpModalIsOpen) return;
					const c = qg(e.location, this.previousLocation);
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
						isFPR: o,
						isLoggedIn: a,
						isMatrixChatEnabled: i,
						isRecapGameOn: c,
						isSubscriptionsPinned: l,
						isSuspended: d,
						location: p,
						onClickOutsideOverlay: b,
						routes: h,
						showEmailCollectionBanner: g,
						suspensionDaysLeft: f
					} = this.props, {
						isSignupUpsellDisplayed: v,
						isSignupUpsellHidden: O
					} = this.state, C = this.context, E = qg(p, this.previousLocation);
					p.state && p.state[fg.b.IsOverlay] && !E ? p.state[fg.b.IsOverlay] = !1 : p.state && (this.previousLocation === p || p.state[fg.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[fg.b.CloseLocation] && this.previousLocation.state[fg.b.CloseLocation] === p.state[fg.b.CloseLocation] ? p.state[fg.b.CloseLocation] = {
						...this.previousLocation,
						state: Ie()(this.previousLocation.state, fg.b.CloseLocation)
					} : p.state[fg.b.CloseLocation] = this.previousLocation);
					const y = Object(Ue.a)(this.previousLocation, p),
						x = E || y ? this.previousLocation : p,
						_ = E || y ? this.previousPage : t,
						j = !(!(_ && _.meta && _.meta.name === k.Sb.SEARCH_RESULTS && _ && _.queryParams) || _.queryParams[Xa.C]),
						S = !(!_ || !_.meta || _.meta.name !== k.Sb.MODERATION_PAGES),
						P = Object(Hn.y)(_),
						N = this.getIsPostCollection(),
						M = v && !O,
						w = e.showBanner;
					if (r) return s.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					});
					const I = m.a.createElement(zg, {
						browserInfo: C,
						frontpageSignupVariant: n,
						isCommentsPage: P,
						isInline: M,
						isLoggedIn: a,
						isSubscriptionsPinned: l,
						location: x,
						overlayIsOpen: E,
						page: _,
						routes: h,
						showEmailCollectionBanner: g,
						showFPR: o,
						showOffline: w,
						showSuspended: d
					});
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Hn.a.Provider, {
						value: _
					}, m.a.createElement(Pa.c, {
						isOverlayOpen: E
					}, m.a.createElement(Kp.a, {
						forceRedditTheme: j
					}, v && m.a.createElement(Dt, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Wg, {
						browserInfo: C,
						connection: e,
						isFPR: o,
						isInline: M,
						isSuspended: d,
						showOffline: w,
						suspensionDaysLeft: f,
						location: x
					})), m.a.createElement(Og.a.Provider, {
						value: !1
					}, m.a.createElement(Kp.a, {
						forceRedditTheme: j || S,
						isCommentsPage: P
					}, m.a.createElement(_g, null, c && m.a.createElement(pg, null, I), !c && I, m.a.createElement(bg.b, null), m.a.createElement(bg.a, null)))))), m.a.createElement(Hn.a.Provider, {
						value: t
					}, E && m.a.createElement(Og.a.Provider, {
						value: !0
					}, m.a.createElement(Kp.a, {
						isOverlay: !0
					}, m.a.createElement(Qg, {
						browserInfo: C,
						isPostCollection: N,
						location: p,
						onClickOutsideOverlay: b,
						page: t,
						routes: h,
						showEmailCollectionBanner: g,
						showFPR: o,
						showOffline: w,
						showSuspended: d
					}))), m.a.createElement(Kp.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(Ph, null), m.a.createElement(Qp.a, null), g && m.a.createElement(Ve.a, null), m.a.createElement(Un, null), m.a.createElement(or, null), i && m.a.createElement(kp, null)))))
				}
			}
			Vg.contextType = De.a;
			const Wg = Object(Xe.c)(e => {
					const t = Object(Hn.gb)(),
						n = Object(Cg.fb)(t),
						s = Object(u.useContext)(Re.a),
						r = Object(u.useMemo)(() => Object(jg.a)(e.location.search), [e.location.search]),
						{
							browserInfo: o,
							connection: a,
							isFPR: i,
							isInline: c,
							showOffline: l,
							isSuspended: d,
							suspensionDaysLeft: p
						} = e,
						b = {
							browserInfo: o,
							showFPR: i,
							showSuspended: d,
							suspensionDaysLeft: p,
							showOffline: l,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(Hh, b), n && !r && m.a.createElement(Sp, {
						className: Object(ke.a)(Lg.a.header, qh(Lg.a, b), {
							"relative w-100": c
						}, "flex-grow-0 flex-shrink-0 top-0 left-0 right-0 fixed z-[80]")
					}), m.a.createElement(Kh, {
						className: Object(ke.a)(Lg.a.offlineBanner, qh(Lg.a, b)),
						online: a.online,
						showBanner: a.showBanner
					}))
				}),
				zg = Object(Xe.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = Ie()(e, "key"),
							s = Ie()(t, "key");
						return Me()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = Ie()(e, ["key", "locationState"]),
								s = Ie()(t, ["key", "locationState"]);
							return Me()(n, s)
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
							isSubscriptionsPinned: o,
							showEmailCollectionBanner: a
						} = this.props;
						return m.a.createElement(Fg, {
							"aria-hidden": s,
							className: Object(ke.a)(qh(Lg.a, this.props), {
								[Lg.a.withUpsell]: !!e,
								[Lg.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: o,
							location: t
						}, o && m.a.createElement(zp, {
							className: Object(ke.a)(Lg.a.pinnedSubscriptions, {
								...qh(Lg.a, this.props)
							}),
							isLoggedIn: this.props.isLoggedIn,
							"data-redditstyle": !0
						}), m.a.createElement(_e.f, {
							location: t
						}, n), a && m.a.createElement("div", {
							className: Object(ke.a)(Lg.a.bottomSpacer, Vh(Lg.a, this.props))
						}))
					}
				});
			class Qg extends m.a.Component {
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
						if (this.mouseDownInWrapper && Object(Be.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[fg.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Sg.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(Ge.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Sg.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, r = !(!t || !t.meta || t.meta.name === k.Sb.SUBREDDIT_CREATION || t.meta.name === k.Sb.PUBLIC_ACCESS_NETWORK), o = e;
					return m.a.createElement(Gg, {
						className: Object(ke.a)(qh(Lg.a, this.props), {
							[Lg.a.mIsCommentsLightbox]: r,
							[Lg.a.mIsLargeCommentsLightbox]: o
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(ke.a)(Lg.a.overlayWrapper, qh(Lg.a, this.props))
					}, m.a.createElement("div", {
						className: Object(ke.a)(Lg.a.overlayScrollContainer, {
							[Lg.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: gg.e,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, r && m.a.createElement(Ug, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(ke.a)(qh(Lg.a, this.props), {
							[Lg.a.mIsLargeCommentsLightbox]: o
						}),
						tabIndex: -1
					}, m.a.createElement(Pp.a, {
						page: t
					})), m.a.createElement(_e.f, null, n), m.a.createElement("div", {
						className: Object(ke.a)(Lg.a.bottomSpacer, Vh(Lg.a, this.props))
					}))))
				}
			}
			var Kg = Hg(Object(Xe.c)(Vg)),
				Zg = n("./src/reddit/contexts/User/index.tsx");

			function Xg(e) {
				return m.a.createElement(Zg.b, null, e.children)
			}
			var Yg = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				Jg = n("./src/reddit/constants/shortcuts.ts"),
				$g = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				ef = n.n($g);
			var tf = e => {
				let {
					children: t
				} = e;
				return m.a.createElement("div", {
					className: ef.a.shortcutDiv,
					id: Jg.b,
					tabIndex: -1
				}, m.a.Children.only(t))
			};
			let nf = [];
			const sf = "https://w3-reporting.reddit.com/policy";
			let rf = 1;
			const of = !1;
			const af = of ? Promise.resolve() : async function() {
				if ( of ) return;
				const e = await fetch(sf, {
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
					e.length > 0 && (nf = e)
				} catch {}
				if (n) try {
					const e = JSON.parse(n).success_fraction;
					"number" == typeof e && (rf = e)
				} catch {}
			}();

			function cf(e, t, n) {
				let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "gauge"; of ? console.error("w3-reporting is client-side only"): lf.push({
					name: e,
					value: t,
					type: s,
					labels: n,
					createdAt: Date.now()
				})
			}
			let lf = [];
			async function df(e) {
				if (0 === e.length || 0 === nf.length) return;
				if (Math.random() > rf) return;
				await af;
				const t = e.map(pf).filter(e => e.age < 3e5);
				try {
					const e = await fetch(mf(), {
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
				df([...lf]), lf = []
			}, 5e3), of || document.addEventListener("visibilitychange", () => {
				"hidden" === document.visibilityState && (df([...lf]), lf = [])
			});
			let uf = -1;
			const mf = () => (uf = (uf + 1) % nf.length, nf[uf]);

			function pf(e) {
				const {
					name: t,
					value: n,
					type: s,
					labels: r,
					createdAt: o
				} = e;
				return {
					age: Date.now() - o,
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

			function bf() {
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
							onLCP: o,
							onTTFB: a
						} = await n.e("webvitals").then(n.bind(null, "./node_modules/web-vitals/dist/web-vitals.js"));
						t(t => {
							cf("desktop2x_perf_cumulative_layout_shift", t.value, {
								page_type: e
							}, "histogram")
						}), s(t => {
							cf("desktop2x_perf_first_input_delay_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}), r(t => {
							cf("desktop2x_perf_interaction_next_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), o(t => {
							cf("desktop2x_perf_largest_contentful_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), a(t => {
							cf("desktop2x_perf_time_to_first_byte_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						})
					})()
				}, []), null
			}
			var hf = n("./src/reddit/components/Header/Sparse.tsx"),
				gf = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				ff = n("./src/reddit/pages/InternalServerError/index.m.less"),
				vf = n.n(ff);
			const {
				fbt: Of
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Cf = Object(re.c)({
				showError: Rn.d.showVerboseErrors
			}), Ef = Object(xe.b)(Cf)(e => {
				const t = Object(u.useContext)(Re.a);
				return m.a.createElement(Og.a.Provider, {
					value: !1
				}, m.a.createElement(Kp.b, {
					subredditName: ""
				}, m.a.createElement("div", null, m.a.createElement(hf.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), m.a.createElement("div", {
					className: vf.a.container
				}, m.a.createElement("div", {
					className: vf.a.mainContent
				}, m.a.createElement(gf.a, {
					className: vf.a.dizzySnoo
				}), m.a.createElement("h3", {
					className: vf.a.title
				}, Of._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), m.a.createElement("div", {
					className: vf.a.subTitle
				}, Of._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), m.a.createElement(un.l, {
					onClick: () => window.location.reload(!0)
				}, Of._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: vf.a.subTitle
				}, e.error.message), m.a.createElement("pre", null, m.a.createElement("code", null, e.error.stack)))), m.a.createElement("div", {
					className: Object(ke.a)(vf.a.topImageContainer, {
						[vf.a.topImageContainerExp]: t
					})
				}, m.a.createElement("img", {
					className: vf.a.image,
					src: `${i.a.assetPath}/img/error/star_pattern.png`
				})), m.a.createElement("div", {
					className: vf.a.bottomImageContainer
				}, m.a.createElement("img", {
					className: vf.a.image,
					src: `${i.a.assetPath}/img/error/half_planet.png`
				}))))))
			});

			function yf() {
				return (yf = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const xf = Object(re.c)({
					isNavbarLikeMwebEnabled: Jl.a,
					isNightmode: O.fb,
					theme: e => e.themes.current
				}),
				_f = Object(xe.b)(xf, {})(e => {
					let {
						children: t,
						theme: n,
						isNightmode: s,
						isNavbarLikeMwebEnabled: r
					} = e;
					const o = Object(et.a)({
						theme: n
					});
					return Object(u.useEffect)(() => {
						s ? (document.documentElement.classList.remove("theme-light"), document.documentElement.classList.add("theme-dark")) : (document.documentElement.classList.remove("theme-dark"), document.documentElement.classList.add("theme-light"))
					}, [s]), m.a.createElement(Re.a.Provider, {
						value: r
					}, m.a.createElement("div", {
						className: Object(ke.a)(Se.a.container, {
							[Se.a.containerExp]: r
						}, "theme-beta"),
						style: {
							"--background": o.body,
							"--canvas": o.canvas
						}
					}, t))
				});

			function jf(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return m.a.createElement(Xe.a, null, m.a.createElement(_f, null, m.a.createElement(Xg, null, m.a.createElement(Pe.a, null), m.a.createElement(Yg.a, null), m.a.createElement(tf, null, m.a.createElement(t, null, m.a.createElement(_e.d, {
						component: Sf(n)
					}))), m.a.createElement(bf, null))))
				}
				return m.a.createElement(Ef, {
					error: e.error
				})
			}
			const Sf = e => t => m.a.createElement(Kg, yf({
					routes: e
				}, t)),
				Pf = 1e3;
			class kf extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = Te()(() => Object(Ln.Kb)(this.props.storageKey, this.props.value), Pf)
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
			kf.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Nf = Object(re.a)(O.S, e => ({
				storageKey: Br.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var Mf = Object(xe.b)(Nf)(kf);
			var wf = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(Mf, null)),
				If = n("./src/reddit/constants/headers.ts"),
				Af = n("./src/reddit/constants/jsapiEvents.ts"),
				Tf = n("./src/reddit/constants/screenWidths.ts"),
				Rf = n("./src/reddit/contexts/AdminEvents.ts"),
				Lf = n("./src/reddit/contexts/ApiContext.tsx"),
				Df = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				Ff = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const Gf = () => e => t => e(t);
			var Uf = n("./src/lib/safeBadgeUpdate.ts");

			function Bf(e) {
				const t = Object(Mm.g)(e);
				Object(Uf.a)(t)
			}
			var Hf = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== Ff.b && n.type !== Ff.d || Bf(e.getState()), s
				} : Gf,
				qf = n("./node_modules/brcast/dist/brcast.es.js"),
				Vf = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var Wf = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(qf.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(Vf.b)(s) || Object(O.P)(s) || Object(O.O)(s)) && (e = !0, Object(H.e)(t)), s => r => {
								const o = s(r),
									a = n.getState();
								if (!Object(Vf.b)(a)) {
									const n = Object(O.P)(a) || Object(O.O)(a);
									e && !n ? (e = !1, Object(H.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(H.e)(t), e = !0)
								}
								return o
							}
						}
					}
				} : () => ({
					broadcaster: Object(qf.a)([]),
					middleware: () => e => t => e(t)
				}),
				zf = n("./src/lib/domUtils/index.ts"),
				Qf = n("./src/reddit/actions/adsSignals.ts");
			const Kf = 30 * k.pb;
			let Zf = Date.now();
			const Xf = () => {
					Zf = Date.now()
				},
				Yf = !!Object(zf.f)() && {
					passive: !0
				};
			window.addEventListener("click", Xf, !1), window.addEventListener("wheel", Xh()(Xf, 250), Yf), window.addEventListener("mousemove", Xh()(Xf, 250), Yf), window.addEventListener("keydown", Xh()(Xf, 250), Yf);
			var Jf = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Zf >= Kf ? (e.dispatch(ve.h()), e.dispatch(Qf.b()), Xf()) : Xf()
					})), e => t => e(t)
				},
				$f = n("./src/reddit/constants/preferences.ts"),
				ev = n("./src/reddit/helpers/cookies/index.ts");
			const tv = new Set([pl.g, pl.i, Ce.b, pl.d, pl.o, He.d, He.e, pl.r]);
			var nv = e => t => n => {
					const s = t(n);
					if (tv.has(n.type)) {
						const t = e.getState().user,
							n = Ia()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", $f.b, $f.d, $f.e]);
						Object(ev.a)({
							prefs: n
						})
					}
					return s
				},
				sv = n("./src/reddit/actions/tabBadging.ts"),
				rv = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ov = n("./src/reddit/selectors/removedPosts.ts"),
				av = n("./src/reddit/models/Subreddit/index.ts");
			const iv = (e, t) => ((e, t) => {
					var n, s, r, o;
					const a = "subreddit" === (null === (n = null == t ? void 0 : t.belongsTo) || void 0 === n ? void 0 : n.type) ? null === (s = null == t ? void 0 : t.belongsTo) || void 0 === s ? void 0 : s.id : null;
					if (!a) return !1;
					const i = null === (o = null === (r = e.subreddits) || void 0 === r ? void 0 : r.models) || void 0 === o ? void 0 : o[a];
					return !!i && ((null == i ? void 0 : i.type) !== av.g.Private && (null == i || !i.isQuarantined))
				})(e, t) && Object(ov.b)(e) && (e => !!(e && e >= 5))(null == t ? void 0 : t.numComments) && (e => {
					return e > new Date(2016, 0, 1).getTime()
				})(t.created),
				cv = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				lv = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(In.s)(e), r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, o = cv.has(r), a = Object(Hn.m)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = dv(e), l = s === k.Sb.COMMENTS || s === k.Sb.COLLECTION_COMMENTS, d = !(!n || !n.urlParams.partialCommentId), u = s === k.Sb.SEARCH_RESULTS || s === k.Sb.SUBREDDIT_LEADERBOARD || l && d, m = Object(ov.d)(e) && !(e => {
						var t, n, s;
						const {
							currentPage: r
						} = e.platform;
						if (!Object(ov.d)(e)) return !1;
						const o = null === (t = null == r ? void 0 : r.urlParams) || void 0 === t ? void 0 : t.partialPostId,
							a = o && Object(Z.z)(o),
							i = a && (null === (s = null === (n = e.posts) || void 0 === n ? void 0 : n.models) || void 0 === s ? void 0 : s[a]);
						return !!i && iv(e, i)
					})(e) || u;
					return i || o || c || m ? u ? "noindex" : "noindex,nofollow" : null
				},
				dv = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(O.h)(e, s);
						n = !!Object(rv.a)(t, !1, s)
					}
					return n
				};
			var uv = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const mv = "theme-color",
				pv = `meta[name="${mv}"]`;

			function bv(e) {
				return e ? uv.b.body : uv.a.body
			}
			var hv = "undefined" != typeof document ? e => t => n => {
				const s = t(n);
				if (n.type === he.f) {
					const t = e.getState(),
						s = Object(O.R)(t),
						{
							meta: r
						} = n.payload;
					s ? ((e, t) => {
						const n = Object(Mm.i)(e);
						Object(sv.c)(n, t)
					})(t, r.title) : Fe.a.write(() => {
						document.title = r.title, ((e, t) => {
							if (t.head) {
								let n = t.querySelector("meta[name='robots']");
								const s = lv(e),
									{
										head: r
									} = t;
								s ? (n || ((n = t.createElement("meta")).name = "robots", r.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : r.removeChild && r.removeChild(n))
							}
						})(t, document)
					})
				} else if (n.type === pl.i) {
					! function(e) {
						Fe.a.write(() => {
							const t = document.head.querySelector(pv);
							if (t) {
								const n = Object(O.fb)(e);
								t.content = bv(n)
							}
						})
					}(e.getState())
				}
				return s
			} : Gf;

			function gv(e) {
				return Object(X.f)(e) && function(e) {
					return Object.values(e.posts.models).some(t => void 0 === Object(Lm.a)(e, t.id))
				}(e)
			}
			const fv = (e => t => n => s => {
				const r = t.getState(),
					o = n(s),
					a = t.getState();
				for (const n of e) n.stateHasChanged(r, a) && n.handler(t, r);
				return o
			})([{
				stateHasChanged: function(e, t) {
					return e.posts.models !== t.posts.models
				},
				handler: function(e) {
					gv(e.getState()) && e.dispatch(J)
				}
			}]);
			var vv = n("./src/reddit/helpers/survey/index.ts");
			var Ov = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(vv.a).filter(t => t === e).length)(t.type) && Object(Ln.Z)(vv.a[t.type]), e(t)) : Gf;
			const Cv = 5 * k.pb;
			var Ev = e => {
					const t = Te()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(ve.g())
					}, Cv);
					let n, s;
					const r = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const r = new Date(n.expires),
								o = s + Math.floor(.8 * (r.getTime() - s));
							Date.now() > o && t && t()
						},
						o = e => {
							s = Date.now();
							const r = new Date(e.expires).getTime() - s,
								o = .8 + .1 * Math.random(),
								a = Math.min(Math.floor(o * e.expiresIn * 1e3), Math.floor(o * r));
							n = setTimeout(t, a)
						},
						a = e.getState();
					return a.user.session && o(a.user.session), window.addEventListener("focus", r), window.addEventListener("touchend", r), document.body.addEventListener("mouseenter", r), e => t => (t.type !== ve.a && t.type !== ve.b && t.type !== ve.c && t.type !== ve.e || o(t.payload), t.type === ve.d && (clearTimeout(n), n = null), e(t))
				},
				yv = n("./src/reddit/singleton/tracing/index.ts");
			var xv = e => e => t => {
					const n = () => e(t);
					return yv.b.isEnabled ? yv.b.recordLocalSpan(t.type, n) : e(t)
				},
				_v = n("./src/reddit/actions/frontpage/constants.ts"),
				jv = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				Sv = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Pv = n("./src/reddit/actions/pages/profilePosts.ts"),
				kv = n("./src/reddit/actions/pages/search/index.ts"),
				Nv = n("./src/reddit/actions/pages/subreddit.ts"),
				Mv = n("./src/reddit/actions/tracking.ts"),
				wv = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				Iv = n("./src/reddit/helpers/history/index.ts"),
				Av = n("./src/reddit/helpers/trackers/commentList.ts"),
				Tv = n("./src/reddit/helpers/trackers/postList.ts"),
				Rv = n("./src/reddit/helpers/routeKey/index.ts");
			var Lv = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(Mv.c({
							routeKey: t
						}))
					};
					if (n.type === he.b) {
						const s = e.getState(),
							r = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							o = Object(Ar.I)(s, r) || "",
							i = (s.subreddits.about[o] || {}).advertiserCategory;
						a.trigger("pageview", {
							...Ia()(n.payload.location, "pathname", "search", "hash"),
							subreddit: r,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(Rv.b)(c, s, Object(wv.a)(s));
							if (e && B.c.has(e)) {
								const t = B.c.end(e);
								!Object(In.j)(s) && Object(Iv.b)(fg.b.IsOverlay) || Object(ti.k)(c, s, V.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(wv.a)(s, l),
							u = Object(Rv.b)(l, s, d);
						if (!u) return t(n);
						B.c.start(u)
					}
					const r = t(n);
					switch (n.type) {
						case _v.c:
						case Sv.b:
						case Sv.e:
						case Pv.PROFILE_POSTS_LOADED:
						case jv.e:
						case Nv.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case kv.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case _v.g:
						case Do.i:
						case Pv.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: r
							} = n.payload;
							s(t);
							const o = e.getState();
							if (r.length) break;
							if (void 0 === o.listings.postOrder.endMarkers[t]) break;
							Tv.l(o, t);
							break
						}
						case jv.b: {
							const {
								key: t,
								commentIds: r
							} = n.payload;
							if (s(t), r.length) break;
							const o = e.getState();
							if (void 0 === o.profileCommentsPage.endMarkers[t]) break;
							Av.a(o, t);
							break
						}
						case La.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return r
				},
				Dv = n("./src/reddit/helpers/datadome.ts"),
				Fv = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				Gv = n("./src/reddit/helpers/trackers/global.ts");
			let Uv = null;
			const Bv = () => {
				Uv && window.clearTimeout(Uv), Uv = null
			};
			var Hv = e => {
					Uv = window.setTimeout(() => {
						Bv(), Object(B.a)(Object(Gv.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", Bv)
				},
				qv = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				Vv = n("./src/reddit/actions/connection/constants.ts");
			const Wv = Object(h.a)(Vv.b),
				zv = Object(h.a)(Vv.a),
				Qv = Object(h.a)(Vv.c);
			var Kv = n("./src/reddit/actions/meta.ts");
			const Zv = (e, t) => Object(B.a)({
					...vn.o(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(vn.d)(e, {
						type: t
					})
				}),
				Xv = "(display-mode: minimal-ui)";
			const Yv = 3 * k.Xb;

			function Jv(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(Xv).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(Kv.i)());
				const t = window.matchMedia(Xv);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(Kv.i)()) : e.dispatch(Object(Kv.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						Bf(t)
					}, 1e3), Zv(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(Wv()), setTimeout(() => e.dispatch(Qv()), Yv)
				}), window.addEventListener("offline", () => e.dispatch(zv()))
			}
			const $v = (e, t) => {
				if (!e) return;
				const n = (d.a.get(Tn.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						r = {
							name: Tn.g,
							value: s,
							cookieOptions: Object(Kb.a)(),
							cookieContext: t
						};
					Object(yb.c)(r)
				}
			};
			var eO = n("./src/reddit/layout/page/Listing/index.tsx"),
				tO = n("./src/reddit/reducers/index.ts");
			var nO = n("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				sO = n("./src/reddit/selectors/experiments/utils.ts");
			const rO = e => !!Object(sO.a)((e => Object(Cc.c)(e, {
					experimentEligibilitySelector: ip.f,
					experimentName: _.Fc
				}))(e)),
				oO = {
					displayDelay: 15,
					displayOnRoutes: [k.Sb.SUBREDDIT, k.Sb.COMMENTS],
					experimentName: _.ae,
					experimentVariant: _.ee.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				aO = e => {
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
				iO = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(oO, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(oO)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(oO, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(oO, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(Cc.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: Cc.a
							}) === s
						})(oO, e)) return {
						displayDelay: oO.displayDelay,
						externalVars: aO(e)
					}
				};
			var cO = n("./src/reddit/singleton/EventSystem.ts"),
				lO = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				dO = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				uO = n("./src/reddit/reducers/features/categories/index.ts"),
				mO = n("./src/lib/sentry/index.ts"),
				pO = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const bO = Object(h.a)(pO.C),
				hO = () => {
					return Object(Ln.C)(Br.b.RPAN_USER_SETTINGS_STORE) || void 0
				},
				gO = () => window.matchMedia("(prefers-color-scheme: dark)").matches,
				fO = (e, t) => {
					const n = e();
					if ((e => Object(O.fb)(e) !== gO())(n) && (e => {
							!Object(O.S)(e) && Object(Lo.a)(e, {
								rate: 1
							}) && Object(B.a)({
								...vn.o(e),
								source: "global",
								noun: "theme_os_mismatch",
								action: "fail"
							})
						})(n), !Object(su.a)(n)) return;
					const s = gO();
					s !== Object(O.fb)(n) && t(Object(pl.z)(s)), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", n => {
						n.matches !== Object(O.fb)(e()) && t(Object(pl.z)(n.matches))
					})
				};
			var vO = n("./src/reddit/actions/global/constants.ts");
			Object(mc.a)({
				features: {
					categories: uO.a
				}
			});
			const OO = Object(h.a)(vO.a),
				CO = e => async (t, n) => {
					t((() => async e => {
						const t = hO();
						t && e(bO(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || mO.c.withScope(e => {
						Object(mO.a)(e, {
							serverLogging: !1
						}), mO.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: r
					} = e;
					r && t(OO(r)), fO(n, t)
				}, EO = /^\/account\/magic_link\/landing\/[^\/]+\/?$/, yO = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return EO.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(ne.openD2xOnboardingModal)())
				};
			var xO = n("./src/reddit/actions/notificationsInbox/index.ts"),
				_O = n("./src/reddit/actions/onboarding/index.ts"),
				jO = n("./src/reddit/constants/countrySites.ts");
			const SO = jO.b ? `${jO.a}/${jO.b}` : `${jO.a}`,
				PO = (e, t) => {
					return !!Object(Jr.e)(e) && !(t && !Object(Jr.d)(t))
				},
				kO = e => e.startsWith("/r/") ? e.replace("/r/", `/${SO}/r/`) : e;
			var NO = n("./src/reddit/selectors/experiments/countrySites.ts");
			var MO = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts");
			Object(o.e)(o.b.EntryPointStart);
			const wO = Object(G.a)({
					actionDispatchers: {
						loidReceived: ye.q,
						sessionTrackerReceived: ye.x
					},
					authHeaders: {
						[If.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						loidReceived: ye.b,
						sessionTrackerReceived: ye.j,
						userAuthenticated: ve.c,
						userLoggedOut: ve.d,
						userReauthenticated: ve.e,
						headersReceived: W.a
					},
					onBeforeRequestFactory: qv.a,
					statsAppName: k.o.Redesign
				}),
				IO = Object(U.a)(wO.apiContext),
				AO = Object(U.a)(wO.apiContext, i.a.gqlRealtimeUrl),
				TO = Object(U.a)(wO.apiContext, i.a.gqlRealtime2Url),
				RO = Wf();
			let LO;
			Object(I.a)({
				reducerMap: tO.a,
				routes: Nm,
				apiContext: wO.apiContext,
				gqlContext: IO.gqlContext,
				gqlRealtime2Context: TO.gqlContext,
				appFactory: (e, t) => m.a.createElement(Rf.a.Provider, {
					value: RO.broadcaster
				}, m.a.createElement(Lf.a.Provider, {
					value: {
						apiContext: wO.apiContext,
						gqlContext: IO.gqlContext,
						gqlRealtime2Context: TO.gqlContext
					}
				}, m.a.createElement(Df.b, null, m.a.createElement(jf, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(wf, null)))),
				appName: k.o.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const n = LO;
						if (!n) return;
						n.dispatch(Object(he.l)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(he.k)())
							}
						}))
					}
				}),
				customMiddleware: [j.a.withExtraArgument({
					routes: Nm,
					apiContext: wO.apiContext,
					gqlContext: IO.gqlContext,
					gqlRealtimeContext: AO.gqlContext,
					gqlRealtime2Context: TO.gqlContext
				}), RO.middleware, Jf, wO.middleware, IO.middleware, TO.middleware, Ev, nv, fv, xv, Lv, hv, Ov, Kd.a, Hf, e => t => n => {
					let s, r;
					if (!Object(NO.b)(e.getState()) || !n.payload) return t(n);
					r = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const o = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!PO(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.belongsTo.id,
									t = Object(Jr.d)(e);
								(n || t) && (r.permalink = r.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${SO}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, r)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!PO(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.subredditId,
									t = Object(Jr.d)(e);
								(n || t) && (r.permalink = kO(r.permalink))
							}
							return t
						})(e.getState(), n.payload.comments, r))
					} catch (a) {
						n.payload = {
							...o
						}
					}
					return t(n)
				}, e => t => n => {
					if (!Object(NO.b)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === g.e ? n.payload = ((e, t) => {
							if (!PO(e, t.name)) return t;
							const n = Object(Jr.d)(t.id);
							if (t.name || n) {
								const e = kO(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!PO(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(Jr.d)(s.id),
									r = Object(Jr.d)(s.name);
								if (e || r) {
									const e = kO(s.url),
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
					loading: m.a.createElement(eO.a, {
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
					}), Jv(s);
					const o = s.getState();
					s.dispatch(Object(W.b)({
							headers: {
								[r.a]: "1"
							}
						})), Object(H.d)("enabled" === Object(Cc.c)(s.getState(), {
							experimentEligibilitySelector: Cc.a,
							experimentName: _.Zf,
							expEventOverride: !1
						})), Object(H.c)("enabled" === Object(Cc.c)(s.getState(), {
							experimentEligibilitySelector: Cc.a,
							experimentName: _.bg
						})), Object(H.g)("enabled" === Object(Cc.c)(s.getState(), {
							experimentEligibilitySelector: Cc.a,
							experimentName: _.ag
						})), Object(H.f)(IO.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(Gv.a)("tab_closed")(e),
								n = q.g(t),
								r = Object(lO.a)(n),
								o = Object(dO.b)(r);
							Object(F.b)("sendV2EventsData", {
								data: r,
								headers: o
							})
						}),
						function(e, t) {
							const n = String(e.split("/")[1]).toLowerCase(),
								s = "r" === n && Object(jg.a)(t);
							return "framedgild" === n || "framedmodal" === n || s
						}(t.location.pathname, t.location.search) || s.dispatch(Object(he.h)());
					const a = Object(O.fb)(s.getState());
					s.dispatch(Object(Ce.c)({
						nightmode: a
					}));
					const l = (e => e.tracing.traceId)(s.getState());
					if (l && (e => Object(Cc.c)(e, {
							experimentEligibilitySelector: Cc.a,
							experimentName: _.z
						}) === _.L.Enabled)(s.getState())) {
						yv.b.enableTracing(!0);
						const e = yv.b.createTraceFromId(l);
						yv.b.setParent(e)
					}
					s.dispatch(Object(he.i)(n));
					t.listen((e, t) => {
						const r = Object(T.a)(Object(c.e)(e), n, s.getState());
						s.dispatch(Object(he.j)(e, t, r))
					});
					const {
						currentPage: d
					} = o.platform;
					if (d) {
						const e = [Xa.k];
						if (Object(In.k)(o) && e.push(Xa.f), e.length > 0) {
							const t = Object(M.a)(d.url, e);
							t !== d.url && s.dispatch(Object(p.c)(t))
						}
					}
					return qn.a.initialize(o), {
						localStorageData: Object(Ln.D)()
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
					LO = l;
					t.listen((e, t) => {
						const n = l.getState(),
							{
								urlParams: s,
								queryParams: r
							} = n.platform.currentPage,
							o = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: r
							},
							a = s.subredditName,
							i = Object(Ar.I)(n, a) || "";
						if ($v(i, {
								country: n.meta.country
							}), i) {
							l.dispatch(C(i, a));
							const e = Object(In.e)(n);
							e && l.dispatch(E(e))
						}
						cO.a.publish(Af.c, o, document)
					});
					const p = l.getState(),
						h = Object(Kd.b)();
					l.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(y(n)), t(x(Array.from(s)))
					})(h));
					const g = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						f = Object(Ar.I)(p, g) || "";
					if (g) {
						l.dispatch(C(f, g));
						const e = Object(In.e)(p);
						e && l.dispatch(E(e))
					}
					const v = Object(Ar.I)(p, g) || "",
						j = (p.subreddits.about[v] || {}).advertiserCategory;
					a.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: p.user.account ? p.user.account.id : p.user.loid.loid
						}
					}), a.trigger("pageview", {
						subreddit: g,
						advertiserCategory: j
					}), l.dispatch(CO({
						localStorageData: d
					}));
					const I = Object(Ig.c)(p);
					I && (l.dispatch(pe()), history.replaceState(history.state, "", Object(M.a)(window.location.href, [Xa.G]))), l.dispatch(yO());
					const T = Object(In.r)(p),
						G = null == T ? void 0 : T[Xa.w];
					G && (history.replaceState(history.state, "", Object(M.a)(window.location.href, [Xa.w])), I || l.dispatch(Object(A.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/changeUsername.ts")).then(e => e.openWelcomeBackModalIfNeeded))()));
					const U = Ln.R() && Object(O.S)(p),
						H = Object(rc.a)(p, {
							pageLayer: p.platform.currentPage
						}) && !Ln.Q(),
						q = (null == T ? void 0 : T[Xa.c]) && (Object(rc.a)(p, {
							pageLayer: p.platform.currentPage
						}) || Object(rc.b)(p));
					(U || H || q) && (l.dispatch(Object(A.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/recapGame.ts")).then(e => e.recapGameToggle))()), q && history.replaceState(history.state, "", Object(M.a)(window.location.href, [Xa.c]))), (null == T ? void 0 : T[Xa.E]) && (l.dispatch(Object(A.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/login.ts")).then(e => e.openLoginModal))()), history.replaceState(history.state, "", Object(M.a)(window.location.href, [Xa.E]))), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: r
							} = e.platform,
							a = (r.urlParams.subredditName || "").toLowerCase(),
							i = Object(Ar.I)(e, a) || "";
						if (Object(F.a)(), $v(i, {
								country: e.meta.country
							}), r && r.meta) {
							const a = r.meta.name;
							if (Object(B.b)(k.o.Redesign, {
									page: a,
									type: "rum"
								}), Object(w.c)(e.meta.userAgent) && window.innerWidth > Tf.b) {
								const t = Object(o.f)(c);
								R.a && R.a.timing && yv.b.isEnabled && (yv.b.recordPerformanceTimings(`${a}_time_to_first_byte`, R.a.timing.fetchStart, R.a.timing.responseStart), yv.b.recordPerformanceTimings(`${a}_time_to_interactive`, R.a.timing.fetchStart, R.a.timing.domInteractive));
								const n = [Object(Dv.a)()],
									s = !0;
								if (Object(In.g)(e)) {
									const t = Object(Fv.a)(e);
									n.push(Object(Fv.c)(t))
								}
								const r = {
									isLoggedIn: Object(O.S)(e),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(o.g)(r, t, s)
							}
							const i = R.a.timing.domInteractive - R.a.timing.navigationStart;
							Object(ti.k)(r.routeMatch, l.getState(), V.TimerType.Initial, i, r.urlParams);
							const d = Object(N.a)(window.location.href);
							d && d.get(Xa.b) && history.replaceState(history.state, "", Object(M.a)(window.location.href, [Xa.b])), Object(D.a)(d.get(Xa.R)) && l.dispatch(Object(Ee.f)({
								kind: sb.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), d.get(Xa.S) && (l.dispatch(Object(te.a)(d.get(Xa.S))), history.replaceState(history.state, "", Object(M.a)(window.location.href, [Xa.S])));
							let u = !1;
							const m = Object(O.V)(e);
							(Object(Iv.b)(fg.b.JustLoggedIn) || m) && (l.dispatch(Object(Ee.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object(Iv.c)(fg.b.JustLoggedIn), history.replaceState(history.state, "", Object(M.a)(window.location.href, [Xa.v]))), Object(Iv.b)(fg.b.JustLoggedOut) && (u = !0, Object(Iv.c)(fg.b.JustLoggedOut)), ue().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return l.dispatch(t())
							});
							const p = () => l.dispatch(Object(_O.openReonboardingModalIfNeeded)());
							let b;
							ie(e) && (b = () => {
								const {
									dispatch: e
								} = l;
								t.listen(() => e(ce())), e(ce())
							});
							const h = rO(e);
							if (!G)
								if (h || !1 === Ln.ab()) h && b && b(), p();
								else {
									const t = () => {
											b && b(), p()
										},
										n = e => {
											ue().then(e => e.requestNotificationsPermissions).then(t => l.dispatch(t(u, !1, e)))
										};
									Object(nO.a)(e) ? Object(O.S)(e) ? (n(), p()) : b && b() : n(t)
								} if (a === k.Sb.MULTIREDDIT && r.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = r.routeMatch.match.params;
								l.dispatch(Object(A.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(ee.c)())
						}
						const d = Object(O.S)(l.getState());
						d && !Object(jg.a)(window.location.search) && l.dispatch(Object(z.d)()), Object(S.requestIdleCallback)(async () => {
							l.dispatch(Object(me.d)()), await Object(P.a)() && Object(Gv.b)(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = iO(e);
								t && (await (async e => {
									return (await Object(de.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), s && s())
							}, s = t.listen((t, n) => {
								"POP" !== n && e()
							});
							e()
						}), d && (e => {
							var t;
							return (null === (t = null == e ? void 0 : e.user.experiments.byName[_.Qc]) || void 0 === t ? void 0 : t.variant) === _.Nd
						})(l.getState()) && l.dispatch(Object(b.a)()), document.addEventListener("visibilitychange", () => {
							var e;
							const t = l.getState(),
								{
									currentPage: n
								} = t.platform;
							if ("visible" !== document.visibilityState && (Ln.gc(Date.now()), Object(B.a)(Object(Gv.a)("tab_backgrounded")(t))), (e => Object(Cc.c)(e, {
									experimentEligibilitySelector: e => !Object(ae.d)(e),
									experimentName: _.Sc
								}) === _.hd.Enabled)(t) && "visible" === document.visibilityState && n && Object(ti.k)(n.routeMatch, l.getState(), V.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Ln.w(),
									t = Ln.x(),
									n = Ln.J(),
									s = Ln.Y();
								if (s && e && n) {
									const r = Date.now() - s;
									Object(B.a)(Object(Gv.e)("tab_backgrounded", n)(l.getState(), r, e, t))
								}(s || e || n || t) && (Ln.ib(), Ln.mb(), Ln.kb(), Ln.jb())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && MO.d[n.locationState.clickId] && !MO.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(MO.b)(n.locationState.clickId) : Object(MO.c)(n.locationState.clickId))
						}), Object(ae.h)(l.getState()) && Hv(l.getState), l.dispatch(Object(Oe.o)())
					}), window.history.scrollRestoration = "manual", cO.a.attachStore(l), l.dispatch(Object(fe.b)(L.a.PageLoad));
					const W = Ln.p(null === (u = l.getState().user.account) || void 0 === u ? void 0 : u.id),
						Q = Ln.o(null === (m = l.getState().user.account) || void 0 === m ? void 0 : m.id);
					l.dispatch(Object(ge.B)({
						posts: null != W ? W : []
					})), l.dispatch(Object($.m)({
						comments: null != Q ? Q : []
					})), l.dispatch(J), Object(ap.e)(l.getState()) && l.dispatch(Object(xO.e)()), Object(S.requestIdleCallback)(() => {
						const e = Ln.E();
						(!e || e && Date.now() - e.lastUpdated >= k.E) && l.dispatch(Object(Oe.f)())
					}), Object(su.b)(t, l.getState())
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
			var o;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Default = "default", e.Loading = "loading", e.Error = "error"
				}(o || (o = {}))
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
			var s, r, o;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.NavDropdown = "nav", e.LeftRail = "left"
				}(s || (s = {})),
				function(e) {
					e.XhrError = "xhr", e.ParseError = "parse"
				}(r || (r = {})),
				function(e) {
					e.LoggedIn = "loggedin", e.OneFeed = "onefeed", e.Popular = "popular"
				}(o || (o = {}))
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
		"./src/reddit/pages/CommunityHubs/CommunityHubIcon.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3yXgOVql6GKfKL-p1JMEjT"
			}
		},
		"./src/reddit/pages/CommunityHubs/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/config.ts");
			const {
				fbt: r
			} = n("./node_modules/fbt/lib/FbtPublic.js"), o = `${s.a.assetPath}/img/community-hubs/`, a = "https://forms.gle/yaTi9Ppnjwt3tNhk6", i = "https://forms.gle/4tkRUUsxa7CmWCin7"
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
				o = n("./src/reddit/helpers/trackers/inbox.ts"),
				a = n("./src/reddit/hooks/useTracking.ts"),
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
					o = {
						to: s,
						kind: d.b.InternalLink
					},
					a = r.a.createElement(u.default, {
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
				}, i.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [i.fbt._param("Link: to popular subreddit", a)], {
					hk: "1WOK4T"
				})), r.a.createElement(d.t, b({
					className: p.a.emptyStateButton,
					onClick: n,
					text: `Visit ${h}`
				}, o)))
			};
			t.a = e => {
				let {
					inTooltip: t
				} = e;
				const n = Object(a.a)();
				return r.a.createElement(g, {
					inTooltip: t,
					onBtnClick: (e => () => n(Object(o.s)({
						actionInfoType: e
					})))(o.a.Karma)
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
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var s, r, o = n("./node_modules/redux/es/redux.js"),
				a = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(s || (s = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(r || (r = {}));
			const i = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [s.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const l = {
					marketingEvent: {
						active: !1,
						assetUrls: null,
						experimentRequired: null
					},
					quickCreateV1: {
						id: "-1",
						active: !1,
						text: "",
						min_days_on_reddit: 0,
						should_have_avatar: !1,
						max_event_views: 0,
						min_days_since_last_event_interaction: 0,
						webAssetUrls: []
					},
					pushcard: null
				},
				d = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_pushcard",
				p = "avatar_promo_archived";
			var b;
			! function(e) {
				e.MaxEventViews = "targeting:max_event_views", e.Title = "copy:pushcard_title", e.Cta = "copy:pushcard_cta", e.BannerTitle = "copy:banner_title", e.BannerBody = "copy:banner_body", e.Deeplink = "deeplink"
			}(b || (b = {}));
			const h = e => {
					let {
						startsAt: t,
						endsAt: n
					} = e;
					const s = t && new Date(t) <= new Date,
						r = !!n && new Date(n) < new Date;
					return !!s && !r
				},
				g = e => {
					const {
						id: t,
						tags: n,
						webAssetUrls: s
					} = e, [r, o] = s, a = n.reduce((e, t) => {
						if (!t) return e;
						const n = Object.values(b).find(e => t.startsWith(e));
						return n ? (e[n] = t.slice(n.length + 1), e) : e
					}, {});
					return {
						id: t,
						maxViews: parseInt(a[b.MaxEventViews], 10),
						banner: {
							id: t,
							iconUrl: r,
							title: a[b.BannerTitle],
							body: a[b.BannerBody]
						},
						imageUrl: o,
						title: a[b.Title],
						cta: a[b.Cta],
						deeplink: a[b.Deeplink]
					}
				},
				f = e => {
					const t = {};
					return null == e || e.forEach(e => {
						if (null == e ? void 0 : e.startsWith("targeting:")) {
							const n = e.split(":");
							if (!n.length && n.length < 3) return null;
							try {
								t[n[1]] = JSON.parse(n[2])
							} catch {
								t[n[1]] = n[2]
							}
						}
					}), t
				};

			function v(e) {
				const t = {};
				return e.forEach(e => {
					var n;
					const {
						webAssetUrls: s,
						tags: r
					} = e;
					if (!(null == r ? void 0 : r.includes(p))) {
						if ((null == r ? void 0 : r.includes(m)) && s && s.length >= 2 && (t.pushcard = g(e)), null == r ? void 0 : r.includes(d)) {
							const {
								text: n,
								id: o
							} = e, a = s || null, i = f(r);
							t.quickCreateV1 = {
								...i,
								id: o,
								text: n,
								active: h(e) && !!a,
								webAssetUrls: a
							}
						}
						if (null == r ? void 0 : r.includes(u)) {
							const o = s || null,
								a = (null === (n = r.find(e => (null == e ? void 0 : e.startsWith("feature:")) && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
							t.marketingEvent = {
								active: h(e) && !!o,
								assetUrls: o,
								experimentRequired: a
							}
						}
					}
				}), t
			}
			var O = n("./src/reddit/actions/economics/marketplace/constants.ts"),
				C = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				E = n("./src/reddit/actions/modal.ts"),
				y = n("./src/reddit/constants/modals.ts");
			var x = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, s;
				switch (t.type) {
					case C.s:
						const {
							avatarMarketingEvents: r
						} = t.payload;
						return r ? {
							...l,
							...v(r)
						} : l;
					case O.a:
					case O.b:
					case O.e:
						return (null == e ? void 0 : e.pushcard) ? {
							...e,
							pushcard: {
								...e.pushcard
							}
						} : e;
					case E.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === y.a.SNOOVATAR_MODAL ? {
							...l,
							pushcard: null !== (s = null == e ? void 0 : e.pushcard) && void 0 !== s ? s : null
						} : e;
					default:
						return e
				}
			};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.a: {
						const {
							image: e,
							accessory_ids: n
						} = t.payload;
						return {
							image: e,
							accessoryIds: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				marketing: x,
				avatarUser: c,
				randomAvatar: _
			})
		},
		"./src/reddit/reducers/features/happeningNow/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/happeningNow/constants.ts");
			const o = {
				error: null,
				loaded: !1,
				pending: !1
			};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
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
				api: a,
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
		"./src/reddit/reducers/features/recapGame/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/actions/recapGame.ts");
			const r = {
				recapGameState: "off",
				isNightModeOriginal: !1
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.RECAP__GAME_START:
						return {
							...e, recapGameState: "on"
						};
					case s.RECAP__GAME_TOGGLED:
						const n = "on" === e.recapGameState ? "off" : "on";
						return {
							...e, recapGameState: n
						};
					case s.RECAP__GAME_CLOSE:
						return {
							...e, recapGameState: "off"
						};
					case s.RECAP__SET_ORIGINAL_NIGHT_MODE:
						return {
							...e, isNightModeOriginal: t.payload
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/acknowledgements",
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
					action: o.a,
					chunk: r.u.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.ACKNOWLEDGEMENTS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = ["/appeal", "/appeals"],
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
					action: o.a,
					chunk: r.u.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.APPEAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/avatar/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/avatar.ts");
			const a = "/avatar",
				i = [a, `${a}/shop`, `${a}/shop/artists`, `${a}/shop/artist/:artistId`, `${a}/shop/categories/:sectionId`, `${a}/shop/category/:categoryId`, `${a}/shop/gallery`, `${a}/shop/product/:listingId`, `${a}/:username`, `${a}/:username/:avatarId`, `${a}/nft/:chainId/:contractAddress/:tokenId`],
				c = {
					action: o.a,
					chunk: r.u.AVATAR,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Avatar",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e("Avatar")]).then(n.bind(null, "./src/reddit/pages/Avatar/index.tsx")),
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
						name: r.Sb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/coins",
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
					action: o.c,
					chunk: r.u.COINS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.COINS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/coins/mobile",
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
					action: o.b,
					chunk: r.u.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/featureFlags/profileCollections.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CollectionCommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
			l = Object(o.c)(l);
			const d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: r.u.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: r.Sb.COLLECTION_COMMENTS
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
		"./src/reddit/routes/communityHubs/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/communityHubs.ts");
			const a = "/hubs",
				i = {
					action: o.a,
					chunk: r.u.COMMUNITY_HUBS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "CommunityHubs",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("CommunityHubs").then(n.bind(null, "./src/reddit/pages/CommunityHubs/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/CommunityHubs/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Sb.COMMUNITY_HUBS
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/countrySitePage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CountryPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/pages/CountrySitePage/index.tsx")),
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
				c = ["/"],
				l = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/actions/pages/countrySite/index.ts")).then(e => e.internationalSiteHomePageRequested)),
					chunk: r.u.INTERNATIONAL_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.INTERNATIONAL_SITE_PAGE
					},
					path: Object(o.c)(c, !1),
					prefetches: [r.u.SUBREDDIT]
				};
			t.a = l
		},
		"./src/reddit/routes/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/econManagement.ts");
			const a = "/econ-management",
				i = "q",
				c = {
					action: o.a,
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
						name: r.Sb.ECON_MANAGEMENT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/routes/econManagement2/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/econManagement2.ts");
			const a = "/econ-management-2",
				i = {
					action: o.a,
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
						name: r.Sb.ECON_MANAGEMENT_2
					},
					path: a
				};
			t.a = i
		},
		"./src/reddit/routes/followers/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/followers",
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
					action: Object(o.a)(() => n.e("ProfileFollowersAction").then(n.bind(null, "./src/reddit/actions/pages/followers/index.ts")).then(e => e.followersPageRequested)),
					chunk: r.u.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.FOLLOWERS
					},
					path: a,
					prefetches: [r.u.PROFILE_OVERVIEW]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/framedGild/index.ts");
			const a = "/framedGild/:thingId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
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
					action: o.a,
					chunk: r.u.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.FRAMED_GILD
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/framedModal/index.ts");
			const a = "/framedModal/:type",
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
					action: o.a,
					chunk: r.u.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.FRAMED_MODAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const l = Object.keys(a.bb).map(e => a.bb[e]).join("|"),
				d = "/",
				u = `/:sort(${l})?`,
				m = Object(o.a)({
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
				p = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.u.FRONTPAGE,
					component: m,
					exact: !0,
					prefetches: [a.u.COMMENTS_PAGE, a.u.SUBREDDIT]
				},
				b = {
					...p,
					path: d,
					meta: {
						name: a.Sb.INDEX
					},
					routePredicate: c.S
				},
				h = {
					...p,
					path: d,
					meta: {
						name: a.Sb.INDEX,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(c.S)(e)
				},
				g = {
					...p,
					path: u,
					meta: {
						name: a.Sb.LISTING
					},
					routePredicate: c.S
				},
				f = {
					...p,
					path: u,
					meta: {
						name: a.Sb.LISTING,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(c.S)(e)
				},
				v = [b, h, g, f];
			t.a = v
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/topic.ts"),
				a = n("./src/reddit/selectors/topic.ts");
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
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							s = await Object(o.fetchTopicPage)(r(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(o.topicFailed)())
						}
						if (!s) return;
						const i = t();
						e(Object(o.topicLoaded)({
							...s,
							key: "tagging",
							meta: i.meta
						}))
					},
					chunk: r.u.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: r.Sb.GEOTAGGING
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
				o = n("./src/reddit/actions/happeningNow/index.ts");
			const a = "/now",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "HappeningNow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("HappeningNow")]).then(n.bind(null, "./src/reddit/pages/HappeningNow/index.tsx")),
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
					action: o.c,
					chunk: r.u.HAPPENING_NOW,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.HAPPENING_NOW
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(o.a)({
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
				l = Object.keys(a.X).map(e => a.X[e]).join("|"),
				d = [`/message/:pageName(${l})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.u.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Sb.INBOX_PAGES
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
				return o
			}));
			const s = "/community-points",
				r = "/community-point",
				o = "/community-points/documentation(.*)"
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
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
					action: () => async (e, t) => {
						Object(b.S)(t()) || await e(Object(d.s)())
					},
					chunk: r.u.META_ARBITRUM_POINTS_MIGRATION_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "reddit-pages-meta-ArbitrumPointsMigrationPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("reddit-pages-meta-ArbitrumPointsMigrationPage")]).then(n.bind(null, "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Sb.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration"]
				},
				f = {
					action: () => async (e, t) => {
						Object(b.S)(t()) || await e(Object(d.s)())
					},
					chunk: r.u.META_MAINNET_POINTS_MIGRATION_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "reddit-pages-meta-MainnetPointsMigrationPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("reddit-pages-meta-MainnetPointsMigrationPage")]).then(n.bind(null, "./src/reddit/pages/meta/MainnetPointsMigrationPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/MainnetPointsMigrationPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Sb.META_MAINNET_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/mainnet"]
				},
				v = {
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
						name: r.Sb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
						isResponsive: !0
					},
					path: [h.b, h.c, h.a, "/vault", "/web/community-points"]
				},
				O = {
					action: l.a,
					chunk: r.u.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
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
						name: r.Sb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				C = {
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
						name: r.Sb.META_NO_GAS_PAGE,
						isResponsive: !0
					},
					path: ["/web/vault/no-gas"]
				},
				E = e => async (t, n) => {
					const s = Object(p.a)(e.queryParams);
					Object(b.S)(n()) || await t(Object(d.s)()), s && setTimeout(async () => {
						await t(Object(o.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), m.d.spBurnLinks(n()) && t(Object(a.h)(u.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, y = {
					action: E,
					chunk: r.u.EMPTY,
					exact: !0,
					meta: {
						name: r.Sb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [g, f, v, O, C, y]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
				l = Object.keys(a.wb).map(e => a.wb[e]).join("|"),
				d = `/r/mod/about/:pageName(${l})?`,
				u = {
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.u.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Sb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
				d = Object.keys(a.bb).map(e => `${l}/:sort(${a.bb[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.bb).map(e => `${u}/:sort(${a.bb[e]})?`),
				p = [l, u, ...d, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.u.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Sb.MULTIREDDIT
					},
					path: p,
					prefetches: [a.u.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/notifications/",
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
					action: Object(o.a)(() => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/actions/pages/notificationsInbox.ts")).then(e => e.notificationsInboxPageRequested)),
					chunk: r.u.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.NOTIFICATIONS_INBOX
					},
					path: ["/notifications", a],
					prefetches: [r.u.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/draft/:draftId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: r.u.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.POST_DRAFT
					},
					path: a,
					prefetches: [r.u.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/postSetPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/set/:partialPostSetId",
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
					action: Object(o.a)(() => n.e("PostSetPageAction").then(n.bind(null, "./src/reddit/actions/pages/postSetPage/index.ts")).then(e => e.postSetPageRequested)),
					chunk: r.u.POST_SET_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.POST_SET
					},
					path: a,
					prefetches: [r.u.POST_SET_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/predictions.ts");
			const a = "/predictions",
				i = {
					action: o.a,
					chunk: r.u.PREDICTIONS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Predictions",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Predictions").then(n.bind(null, "./src/reddit/pages/Predictions/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Predictions/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Sb.PREDICTIONS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: r.u.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [r.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/about/edit/moderation",
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
					action: Object(o.a)(() => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/actions/pages/profileModSettings.ts")).then(e => e.profileModSettingsRequested)),
					chunk: r.u.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.PROFILE_MODERATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
				c = {
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: r.u.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [r.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/submitted",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: r.u.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.PROFILE_POSTS
					},
					path: a,
					prefetches: [r.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/models/Profile/index.ts");
			const l = Object(o.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.u.PROFILE_PRIVATE,
					component: l,
					exact: !0,
					meta: {
						name: a.Sb.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [a.u.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/featureFlags/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: r.u.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = l
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit~shreddit-player"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PublicAccessNetwork/index.tsx"
					}
				}),
				i = {
					action: Object(o.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit~shreddit-player"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: r.u.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: r.Sb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [r.u.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/recap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/selectors/experiments/recap.ts");
			const i = "/RedditRecap2022",
				c = "https://i.redd.it/8yb4biw7bf481.png",
				l = {
					action: Object(o.a)(() => n.e("Recap").then(n.bind(null, "./src/reddit/actions/pages/recap/index.ts")).then(e => e.recapPageRequested)),
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
						name: r.Sb.RECAP
					},
					path: i,
					routePredicate: e => Object(a.a)(e)
				};
			t.b = l
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/report",
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
					action: Object(o.a)(() => n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested)),
					chunk: r.u.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.REPORT
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: r.u.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [r.u.FRONTPAGE, r.u.SUBREDDIT, r.u.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.jc).map(e => a.jc[e]).join("|"),
				l = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings~SubredditWiki"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(o.a)({
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
					chunk: a.u.SETTINGS,
					exact: !0,
					meta: {
						name: a.Sb.SETTINGS
					},
					path: `/settings/:page(${c})?`
				}, {
					action: Object(i.a)(() => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/actions/userDataRequest.ts")).then(e => e.userDataRequestPageRequested)),
					component: Object(o.a)({
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
					chunk: a.u.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Sb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = l
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = ["/subreddits/leaderboard", "/subreddits/leaderboard/:categoryName/"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditLeaderboard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/pages/SubredditLeaderboard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditLeaderboard/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/actions/pages/subredditLeaderboard.ts")).then(e => e.subredditLeaderboardPageRequested)),
					chunk: r.u.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: r.Sb.SUBREDDIT_LEADERBOARD,
						isResponsive: !0
					},
					path: a,
					prefetches: [r.u.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/countrySites/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditWiki",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("Settings~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
			d = Object(a.c)(d), d.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName+", "/w/:wikiPageName+", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(r.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: o.u.EMPTY,
					exact: !0,
					meta: {
						name: o.Sb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("Settings~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: o.u.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: o.Sb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [o.u.SUBREDDIT]
				};
			t.a = [p, b]
		},
		"./src/reddit/routes/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/talk.ts");
			const a = "/talk",
				i = {
					action: o.a,
					chunk: r.u.TALK,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Talk",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Talk").then(n.bind(null, "./src/reddit/pages/Talk/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Talk/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Sb.TALK
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: r.u.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: r.Sb.TOPIC
					},
					prefetches: [r.u.COMMENTS_PAGE, r.u.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return P
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./src/config.ts"),
				a = n("./node_modules/reselect/es/index.js"),
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
			const h = Object(a.a)(e => Object(p.c)(e, {
				experimentEligibilitySelector: b.f,
				experimentName: l.Xd
			}), e => e === l.be.Enabled);
			var g = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = n("./src/reddit/selectors/experiments/magicLink.ts"),
				v = n("./src/lib/getParsedUserAgent/index.ts");
			const O = Object(a.a)(e => Object(p.c)(e, {
				experimentEligibilitySelector: e => Object(v.g)(e.meta.userAgent) && Object(b.f)(e),
				experimentName: l.Ef
			}), e => e === l.Tf.Enabled);
			var C = n("./src/reddit/selectors/meta.ts"),
				E = n("./src/reddit/actions/modal.ts"),
				y = n("./src/reddit/selectors/accountManager/modalData.ts");
			const x = Object(a.a)(b.f, C.b, y.a, (e, t, n) => e && "DE" === t && n === E.a.Report);
			var _ = n("./src/reddit/selectors/responsiveSettings.ts");
			const j = Object(a.c)({
					frontpageSignupVariant: m.a,
					isNetzDGComplianceEnabled: x,
					magicLinkVariant: f.a,
					ssoLoginLinkVariant: e => Object(p.c)(e, {
						experimentEligibilitySelector: e => !Object(b.e)(e),
						experimentName: l.Kf
					}),
					blockingInterstitialVariant: g.e,
					blockingInterstitialV2Variant: g.f
				}),
				S = Object(a.c)({
					isAmModalDesignUpdateEnabled: u.a,
					isBlockingInterstitialEnabled: g.b,
					isBlockingInterstitialV2Enabled: g.c,
					isGoogleSsoGisEnabled: h,
					isSafariOneTapEnabled: O
				}),
				P = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, e => Object(y.c)(e), y.a, _.a, C.j, j, S, (e, t, n, a, u, m, p, b) => {
					const {
						isNetzDGComplianceEnabled: h,
						blockingInterstitialVariant: g,
						blockingInterstitialV2Variant: f,
						frontpageSignupVariant: v,
						ssoLoginLinkVariant: O,
						magicLinkVariant: C
					} = p, {
						isAmModalDesignUpdateEnabled: E,
						isBlockingInterstitialEnabled: y,
						isBlockingInterstitialV2Enabled: x,
						isGoogleSsoGisEnabled: _,
						isSafariOneTapEnabled: j
					} = b;
					let S = `${o.a.accountManagerOrigin}${e}`;
					if (S = Object(i.a)(S, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), O && (S = Object(i.a)(S, {
							[`experiment_${l.Kf}`]: O
						})), _ && (S = Object(i.a)(S, {
							[`experiment_${l.Xd}`]: "enabled"
						})), h && (S = Object(i.a)(S, {
							experiment_d2x_netzdg_compliance: d.Enabled,
							thing_id: n
						})), S = Object(i.a)(S, {
							experiment_d2x_onboarding: "enabled"
						}), j && (S = Object(i.a)(S, {
							[`experiment_${l.Ef}`]: "enabled"
						})), y && (S = Object(i.a)(S, {
							[`experiment_${l.Hb}`]: g
						})), x && (S = Object(i.a)(S, {
							[`experiment_${l.Ib}`]: f
						})), E && (S = Object(i.a)(S, {
							[`experiment_${l.pb}`]: "enabled"
						})), v && (S = Object(i.a)(S, {
							[l.id]: v,
							uiMode: t
						})), C && (S = Object(i.a)(S, {
							[`experiment_${l.ve}`]: C
						})), u && (S = Object(i.a)(S, {
							mweb_responsive_settings: "treatment"
						})), m) {
						const e = Object(s.isoLocaleToR2Language)(m);
						m !== r.DEFAULT_LOCALE && e && (S = Object(i.a)(S, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? S : S = Object(i.a)(S, {
						actionSource: a
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
				return o
			}));
			const s = e => e.accountManagerModalData.actionSource,
				r = e => e.accountManagerModalData.redirectUrl,
				o = e => e.accountManagerModalData.thingId
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = (e, t) => {
					let {
						post: n
					} = t;
					const s = n.belongsTo.id;
					if (!s) return null;
					const r = e.authorFlair.models[s];
					if (!r) return null;
					const o = n.author;
					return o && r[o] || null
				},
				r = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!s) return null;
					if (!n) return null;
					const r = e.authorFlair.models[n];
					return r ? r[s] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(s.a)({
				features: {
					avatar: r.a
				}
			});
			const o = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				a = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				i = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/avatar/index.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(s.a)({
				features: {
					avatar: r.a
				}
			});
			const a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				i = e => {
					var t, n, s, r;
					const a = null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.marketingEvent;
					if (!(null == a ? void 0 : a.active) || !(null === (r = null == a ? void 0 : a.assetUrls) || void 0 === r ? void 0 : r.length)) return null;
					const i = a.assetUrls[0];
					return !a.experimentRequired || Object(o.a)(a.experimentRequired)(e) ? i : null
				}
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
				o = n("./src/reddit/helpers/localStorage/index.ts"),
				a = n("./src/reddit/reducers/features/avatar/index.ts"),
				i = n("./src/reddit/selectors/experiments/econ/index.ts");
			Object(r.a)({
				features: {
					avatar: a.a
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
					} = Object(o.y)();
					return n === e.id && s > e.maxViews ? null : e
				}),
				d = Object(s.a)(l, e => {
					if (!e) return null;
					const {
						id: t,
						lastInteractionTimestamp: n
					} = Object(o.y)();
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
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
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
					const r = Object(a.Cb)(e, {
						userName: s
					});
					if (!r) return;
					const o = i(e, {
						subredditId: n
					});
					return o ? o[r.id] : void 0
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
					const s = Object(o.e)(n);
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
				o = n("./src/reddit/actions/economics/econManagement/constants.ts");
			const a = e => e.map(e => {
					let {
						backup_created_at: t,
						backup_modified_at: n,
						created_at: s,
						hidden_at: r,
						modified_at: o,
						...a
					} = e;
					return {
						...a,
						backupCreatedAt: t,
						backupModifiedAt: n,
						createdAt: s,
						hiddenAt: r,
						modifiedAt: o
					}
				}),
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
					case o.c:
						return {
							...e, entityTypes: t.payload.reduce((e, t) => ({
								...e,
								[t.typename]: t
							}), {})
						};
					case o.g:
						return {
							...i, entityTypes: e.entityTypes, displayState: r.a.Loading
						};
					case o.f:
						return {
							...i, entityTypes: e.entityTypes, displayState: r.a.Error
						};
					case o.h: {
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
					case o.a: {
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
					case o.d: {
						const n = t.payload;
						return {
							...e,
							redditorInfo: n
						}
					}
					case o.e: {
						const n = t.payload,
							s = a(n);
						return {
							...e,
							vaults: s
						}
					}
					default:
						return e;
					case o.i: {
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
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.Vc.DnNoModal === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.tb
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
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(l.bb, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return !n || Object(o.B)(n)
				}, c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: r.id,
					throttledVariants: {
						[r.Vd.CurrentThrottled]: r.id
					}
				}), i.a),
				m = e => e === r.Vd.CurrentThrottled,
				p = e => e === r.Vd.CurrentThrottled || e === r.Vd.CurrentUnthrottled || e === r.Vd.CurrentUnthrottledCopy || e === r.Vd.NewPopUnthrottledCopy,
				b = e => e === r.Vd.NewPopUnthrottledCopy,
				h = e => e === r.Vd.NewPageUnthrottledCopy || e === r.Vd.NewPageUnthrottledCopyFields,
				g = e => e === r.Vd.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/happeningNow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./node_modules/reselect/es/index.js");
			const a = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.wb
			}), e => e === s.Wc.Enabled || e === s.Wc.EnabledWithNux)
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
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.me,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(s.a)(c, e => e === r.pe.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Ac,
					experimentEligibilitySelector: a.e
				}), i.a),
				u = Object(s.a)(d, e => e === r.fd.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Kb,
					experimentEligibilitySelector: a.e
				}), i.a),
				p = Object(s.a)(m, e => e === r.ne.ContinuousScroll),
				b = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Lb,
					experimentEligibilitySelector: a.e
				}), i.a),
				h = Object(s.a)(b, e => e === r.oe.Enabled),
				g = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Xb,
					experimentEligibilitySelector: () => !0
				}), i.a),
				f = Object(s.a)(g, e => e === r.eb.Enabled)
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
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Ob,
					experimentEligibilitySelector: a.e
				}), e => e === r.U.Enabled),
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Pb,
					experimentEligibilitySelector: a.e
				}), e => e === r.V.Enabled),
				l = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Qb,
					experimentEligibilitySelector: a.e
				}), e => e === r.W.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Rb,
					experimentEligibilitySelector: a.e
				}), e => e === r.X.Enabled),
				u = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Tb,
					experimentEligibilitySelector: a.e
				}), e => e === r.Z.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Sb,
					experimentEligibilitySelector: a.e
				}), e => e === r.Y.Enabled)
		},
		"./src/reddit/selectors/experiments/onlineIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.ef
					}) === s.Nd
				},
				i = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.df
					}) === s.Nd
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Se
					}) === s.Nd
				},
				l = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Re
					}) === s.Nd
				}
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/presence.ts"),
				i = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				l = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.h
					});
					return t === s.l.VoteCountOnly || t === s.l.CommentCountOnly || t === s.l.VoteAndCommentCount
				},
				d = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.h
					});
					return t === s.l.VoteCountOnly || t === s.l.VoteAndCommentCount
				},
				u = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.h
					});
					return t === s.l.CommentCountOnly || t === s.l.VoteAndCommentCount
				},
				m = (e, t) => {
					let {
						post: n
					} = t;
					return p(e, {
						postId: n.id
					})
				},
				p = (e, t) => {
					let {
						postId: n
					} = t;
					const r = e.posts.models[n];
					if (Object(i.d)(e) || !r || r.isSponsored || r.isScoreHidden || r.score >= c || Object(a.a)(e)) return !1;
					const l = Object(o.d)(e, {
							experimentName: s.h
						}),
						d = null == l ? void 0 : l.variant;
					return d === s.l.VoteCountOnly || d === s.l.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const r = e.posts.models[n];
					if (Object(i.d)(e) || !r || r.isSponsored || r.numComments >= c || Object(a.a)(e)) return !1;
					const l = Object(o.d)(e, {
							experimentName: s.h
						}),
						d = null == l ? void 0 : l.variant;
					return d === s.l.CommentCountOnly || d === s.l.VoteAndCommentCount
				},
				h = e => {
					if (Object(a.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.yc
					}) === s.ed.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.cf
				}) === s.Nd
			}
		},
		"./src/reddit/selectors/experiments/recap.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Cc
				}) === s.Nd,
				a = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Dc
				}) === s.Nd,
				i = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.qb
				}) === s.Nd,
				c = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Bc
				}) === s.Nd
		},
		"./src/reddit/selectors/experiments/recapLeadUpGame.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./node_modules/reselect/es/index.js");
			const c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.qf
					}) === s.Nd
				},
				l = Object(i.a)(a.S, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(r.B)(n)
				}, (e, t) => !e && t),
				d = (e, t) => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: e => l(e, t),
						experimentName: s.rf
					}) === s.Nd
				}
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/reducers/user/experiments/shredditPDPExperimentHeader/index.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/selectors/user.ts");
			const c = Object(a.a)(i.S, e => !e),
				l = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: c,
					experimentName: s.If
				}), e => e === s.Nd),
				d = Object(a.a)(l, e => e.user.experiments.shredditPDPExperimentHeader, (e, t) => e ? t : o.a.Off),
				u = Object(a.a)(d, e => e === o.a.Treatment),
				m = (e, t) => {
					u(t) && e.block(e => {
						if ((e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname)) return window.location.href = e.pathname, !1
					})
				}
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
				o = n("./src/reddit/models/HappeningNow/Filter/index.ts"),
				a = n("./src/reddit/reducers/features/happeningNow/index.ts"),
				i = n("./src/reddit/reducers/features/happeningNow/selectedFilter/index.ts"),
				c = n("./src/redditGQL/types.ts");
			Object(r.a)({
				features: {
					happeningNow: a.a
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
						case o.a.Chat:
							return t.filter(t => {
								var n;
								return (null === (n = p(e, t)) || void 0 === n ? void 0 : n.contentType) === c.t.Chat
							});
						case o.a.Talk:
							return t.filter(t => {
								var n;
								return (null === (n = p(e, t)) || void 0 === n ? void 0 : n.contentType) === c.t.Talk
							});
						case o.a.All:
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
				return o
			})), n.d(t, "b", (function() {
				return a
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
			const o = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.url) || r.a.url
				},
				a = e => {
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
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				pages: {
					modHub: a.a
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
		"./src/reddit/selectors/recapGame.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/recapGame/index.ts");
			Object(s.a)({
				features: {
					recapGame: r.b
				}
			});
			const o = e => {
				var t;
				return (null === (t = e.features) || void 0 === t ? void 0 : t.recapGame) || r.a
			}
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
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
				o = e => e.features.removalReasons.api.pending
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
				o = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = {},
				i = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState || a
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
					return Object(o.C)(n)
				}, (e, t) => t && (e === r.Sb.COMMENTS || e === r.Sb.SUBREDDIT))
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
				o = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.Gb, e => !(!e || !e.length));
			const c = Object(s.a)(i.E, e => !e),
				l = Object(s.a)(i.Gb, e => e && e.find(e => e === o.a.Apple)),
				d = Object(s.a)(i.Gb, e => !(!e || !e.includes(o.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [r.b, r.d, r.e, r.g, r.p, r.r].includes(e))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(r.S)(e);
					if (a(e)) return !1;
					const {
						subscriptionsPinned: n
					} = e.user.prefs;
					return void 0 === n && !t || !!n
				},
				a = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Sb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var l = n("./src/reddit/constants/jsapiEvents.ts");
			const d = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${i}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(l.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === i && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(a, `${s.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const s = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(s), this.queue.length > d && this.queue.shift(), this.active && this.fireEvent(s)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					r.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
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
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/addQueryParams/index.ts"),
				r = n("./src/server/helpers/canonicalUrl.tsx");
			const o = e => {
					let {
						path: t,
						profileName: n,
						rest: r,
						queryParams: o
					} = e;
					const i = t.includes("posts") ? `/user/${n}/submitted` : `/user/${n}`,
						c = a(`${i}/${r||""}`);
					return Object(s.a)(c, o)
				},
				a = e => Object(r.a)(e.replace("posts", "submitted")),
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return `/user/${e}/submitted${t?"/":""}`
				}
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e", "vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit", "CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81", "Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2", "PostCreation~Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-c~93a1f1ba", "Governance~ModListing~Reddit~ReportFlow~Subreddit", "Reddit~RpanListingUnit~StandalonePostPage~reddit-components-MediumPost", "Chat~Governance~Reddit", "Governance~Reddit~SubredditForkingCTA", "Governance~ModListing~Reddit", "Governance~Reddit", "ModListing~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.941e3a8f786838a66bdb.js.map