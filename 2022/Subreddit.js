// https://www.redditstatic.com/desktop2x/Subreddit.0c1568a2435a79081bfb.js
// Retrieved at 4/11/2022, 4:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "reddit-components-BlankPost", "reddit-components-ContentGate", "reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_copyArray.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return o(r(e), s(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				s = Math.random;
			e.exports = function(e, t) {
				return e + n(s() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_shuffleSelf.js"),
				o = n("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var n = o(e);
				return r(n, s(t, 0, n.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					r = e.length,
					o = r - 1;
				for (t = void 0 === t ? r : t; ++n < t;) {
					var i = s(n, o),
						a = e[i];
					e[i] = e[n], e[n] = a
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arraySampleSize.js"),
				r = n("./node_modules/lodash/_baseSampleSize.js"),
				o = n("./node_modules/lodash/isArray.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return t = (n ? i(e, t, n) : void 0 === t) ? 1 : a(t), (o(e) ? s : r)(e, t)
			}
		},
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/chat/controls/Svg/index.m.less"),
				c = n.n(a);
			t.a = i.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: i
					} = e;
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: s,
						[c.a.hover]: !!i
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", c.a)
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
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
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
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(s.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(r.useState)(null), [i, c] = Object(r.useState)(null), [d, l] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), b = Object(r.useCallback)(() => m(!1), []), h = Object(r.useCallback)(() => m(!u), [u]), f = Object(r.useMemo)(() => {
					const t = a(e);
					return d ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: x,
					styles: g,
					update: E
				} = Object(o.a)(t, i, f);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...x.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: g.popper,
						...x.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: h,
					visible: u,
					update: E
				}), [l, x, c, b, p, g, t, n, h, u, E])
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/intlSupport.ts");

			function o(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: o,
					locale: i = s.D
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const a = new Date(e * s.Sb);
				return r.a ? new Intl.DateTimeFormat(i, {
					month: o ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(a) : a.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.D;
				const n = e.toString().length > 10,
					r = new Date(e * (n ? 1 : 1e3));
				return r.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/lib/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./src/lib/delay/index.ts"),
				r = n("./src/lib/getParsedUserAgent/index.ts"),
				o = n("./src/lib/localStorageAvailable/index.ts"),
				i = n("./src/lib/notifications/constants.ts"),
				a = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = () => {
					if (Object(a.a)() !== i.c.NotificationsSupported) return i.a.Unsupported;
					const e = Object(o.a)() && localStorage.getItem(i.f) === i.g;
					return "granted" === Notification.permission ? i.a.Granted : "denied" === Notification.permission ? i.a.Denied : e ? i.a.Closed : i.a.Default
				},
				d = () => !!Object(o.a)() && (localStorage.removeItem(i.f), !0),
				l = async (e, t, n, a, d, l) => {
					const u = c();
					if (u === i.a.Unsupported) return void l();
					if (Object(o.a)()) {
						const t = localStorage.getItem(i.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + i.i > n) return void l();
						localStorage.setItem(i.h, n.toString())
					}
					if (!t && u === i.a.Denied) return a(!1, !0), void l();
					if (!t && u === i.a.Granted) return d(!1), void l();
					if (!t && u === i.a.Closed) return void l();
					let m = i.a.Default;
					const p = navigator.userAgent;
					switch (Object(r.b)(p) || Object(r.f)(p) ? Object(s.a)(1800).then(() => {
						m === i.a.Default && n()
					}) : n(), m = await Notification.requestPermission()) {
						case "granted":
							d(!0);
							break;
						case "denied":
							a(!0, !0);
							break;
						case "default":
							l();
							break;
						default:
							a(!0, !1), localStorage.setItem(i.f, i.g)
					}
				}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				return window
			}
			var o = n("./node_modules/lodash/debounce.js"),
				i = n.n(o),
				a = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/hooks/usePromoContext.ts"),
				l = n("./src/reddit/constants/promo.ts"),
				u = n("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var m = function() {
					const e = Object(u.a)(c.ic.Bottom_cell),
						t = Object(u.a)(c.ic.Bottom_cell_dismissible),
						n = Object(u.a)(c.ic.Bottom_cell_dismissible_immediate_trigger),
						s = Object(u.a)(c.ic.Bottom_cell_signup_upsell_copy),
						r = Object(u.a)(c.ic.Bottom_cell_surprise_install_copy),
						o = Object(u.a)(c.ic.Bottom_sheet);
					return e || s || r ? l.b.SignupUpsellCell : t || n ? l.b.SignupUpsellCellDismissible : o ? l.b.SignupUpsellBottomSheet : null
				},
				p = n("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function x(e) {
				const t = e.displayName || e.name || "Component";

				function n(t) {
					const n = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(d.a)(), n = m(), o = Object(p.a)(n), l = Object(u.a)(c.ic.Bottom_cell_dismissible_immediate_trigger);
						return s.useMemo(() => i()(() => {
							if (!o && n) {
								const e = document.getElementById(a.d),
									s = e ? e.scrollTop : r().scrollY,
									o = r().innerHeight,
									i = o / 3,
									c = 2 * o;
								s >= (l ? i : c) && t(n)
							}
						}, e, {
							maxWait: h
						}), [l, o, n, t, e])
					}();
					return s.createElement(e, f({
						showSignupUpsell: n
					}, t))
				}
				return n.displayName = `withShowSignupUpsell(${t})`, n
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
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			}));
			const s = 120,
				r = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				o = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				i = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				a = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				d = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				l = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED",
				u = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_VISIBILITY_UPDATE"
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(s.a)(r)
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			}));
			const s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				o = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				i = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				a = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				c = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				d = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				l = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
				u = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_LOADED",
				m = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_PENDING",
				p = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_UPDATED"
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(r.a)(o.c),
				p = Object(r.a)(o.b),
				b = Object(r.a)(o.a),
				h = Object(r.a)(o.f),
				f = Object(r.a)(o.e),
				x = Object(r.a)(o.d),
				g = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					e === l.a.Push ? t(h()) : t(m()), await async function(e, t, n) {
						const s = await Object(a.a)(e(), {
							channel: t
						});
						if (s.ok && s.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									s = n && n.sections;
								if (s) return function(e) {
									const t = {},
										n = [];
									let s = {},
										r = [];
									const o = e => {
										const {
											rowIds: o,
											rowsCollection: i
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let s = 0; s < e.rows.length; s++) {
													const r = e.rows[s],
														o = r.messageType;
													t.push(o), n[o] = r
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										s = {
											...s,
											...i
										}, r = [...r, ...o];
										const a = e.id;
										n.push(a), t[a] = {
											...e,
											rows: o
										}
									};
									for (let i = 0; i < e.length; i++) o(e[i]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: s,
											allIds: r
										}
									}
								}(s)
							}(s.body);
							t === l.a.Push ? n(f(e)) : n(p(e))
						} else t === l.a.Push ? n(x({
							error: s.error
						})) : n(b({
							error: s.error
						}))
					}(r, e, t)
				};
			const E = Object(r.a)(o.g),
				_ = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					(await Object(a.b)(o(), e)).ok ? (v(t, e), function(e) {
						e(Object(i.f)({
							kind: u.b.SuccessCommunity,
							text: s.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(i.f)({
							kind: u.b.Error,
							text: s.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function v(e, t) {
				e(E({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const O = Object(r.a)(o.j),
				y = Object(r.a)(o.i),
				j = Object(r.a)(o.k),
				I = Object(r.a)(o.h),
				S = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					var o, a;
					t(O());
					const l = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(r(), e);
					if (null === (a = null === (o = l.error) || void 0 === o ? void 0 : o.fields) || void 0 === a ? void 0 : a.length) return t(I({
						error: l.error
					})), void t(Object(i.d)());
					if (l.ok && l.body) {
						const e = l.body,
							n = e && e.data,
							s = n && n.identity && n.identity.subscribedSubreddits,
							r = s && s.pageInfo,
							o = (s && s.edges).map(e => e.node);
						t(y({
							nodes: o,
							pageInfo: r
						}))
					}
				}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/notifications/index.ts"),
				r = n("./src/lib/notifications/constants.ts"),
				o = n("./src/lib/notifications/featureFlags.ts"),
				i = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => i.d.pushNotificationsBrowserSupported(e) ? Object(o.a)() : r.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case r.a.Denied:
							a.nb(!1), Object(s.c)();
							break;
						case r.a.Default:
						case r.a.Granted:
							a.nb(!0), Object(s.c)();
							break;
						case r.a.Closed:
							a.nb(!0)
					}
				}
		},
		"./src/reddit/actions/notificationsInbox/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			const s = "INBOX_NOTIFICATIONS__PENDING",
				r = "INBOX_NOTIFICATIONS__LOADED",
				o = "INBOX_NOTIFICATIONS__FAILED",
				i = "INBOX_NOTIFS_SET_OVERFLOW_MENU_ID",
				a = "INBOX_NOTIFICATIONS__REMOVE_NOTIFICATION",
				c = "INBOX_NOTIFS__MARK_AS_READ",
				d = "INBOX_NOTIFS__SET_EARLIER_DIVIDER_INDEX",
				l = "INBOX_NOTIFS_MARK_ALL_AS_READ"
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return w
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "f", (function() {
				return W
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "a", (function() {
				return V
			})), n.d(t, "h", (function() {
				return q
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "g", (function() {
				return z
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				i = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				a = n("./src/reddit/actions/tabBadging.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/redditGQL/operations/BlockAwarder.json");
			var u = (e, t) => Object(d.a)(e, {
					...l,
					variables: t
				}),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/redditGQL/operations/NotificationInboxFeed.json"),
				f = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				x = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var E;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(E || (E = {}));
			var _ = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var v = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var O = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				y = n("./src/reddit/helpers/trackers/inbox.ts"),
				j = n("./src/reddit/models/Badge/index.ts"),
				I = n("./src/reddit/models/NotificationInbox/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/appBadges.ts"),
				N = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const k = Object(r.a)(i.e),
				P = Object(r.a)(i.b),
				T = Object(r.a)(i.a),
				w = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					var o, i;
					const a = n(),
						l = Object(N.a)(a);
					t(k());
					const u = await ((e, t) => Object(d.a)(e, {
						...h,
						variables: t
					}))(r(), e);
					if (null === (i = null === (o = u.error) || void 0 === o ? void 0 : o.fields) || void 0 === i ? void 0 : i.length) return t(T({
						error: u.error
					})), void t(Object(c.d)());
					const m = u && u.body,
						p = A(m);
					if (null === l) {
						const e = Object(N.f)(a);
						t(D(p.nodes, e.length))
					}
					t(P(p))
				}, L = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					var r, o;
					const i = await (e => Object(d.a)(e, {
						...f
					}))(s());
					if (null === (o = null === (r = i.error) || void 0 === r ? void 0 : r.fields) || void 0 === o ? void 0 : o.length) return;
					const a = i && i.body,
						c = R(a).nodes.filter(e => !e.viewedAt);
					c.length && c.forEach(e => {
						var n;
						Object(y.s)({
							id: e.id,
							isClicked: !1,
							isViewed: Boolean(e.viewedAt),
							type: null === (n = e.context) || void 0 === n ? void 0 : n.messageType
						})(t())
					})
				}, A = e => {
					const t = e && e.data,
						n = t && t.notificationInbox,
						s = n && n.elements,
						r = s && s.pageInfo;
					return {
						nodes: (s && s.edges).map(e => e.node),
						pageInfo: r
					}
				}, R = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, D = (e, t) => async (n, s) => {
					const r = s(),
						o = Object(N.a)(r),
						i = ((e, t) => {
							let n, s = 0;
							const r = new Date,
								o = r.getDate(),
								i = r.getMonth(),
								a = r.getFullYear();
							for (; s < e.length && !n;) {
								const r = e[s],
									c = new Date(r.sentAt),
									d = c.getDate(),
									l = c.getMonth(),
									u = c.getFullYear();
								if ((d !== o || l !== i || u !== a) && !n) {
									n = ((t || 0) + s).toString()
								} else s++
							}
							return n
						})(e, t);
					i && i !== o && n(B({
						index: i
					}))
				}, B = Object(r.a)(i.g), F = (Object(r.a)(i.h), Object(r.a)(i.f)), M = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					const i = [e];
					if ((await ((e, t) => Object(d.a)(e, {
							..._,
							variables: {
								input: t
							}
						}))(o(), {
							notificationIds: i
						})).ok) {
						t(F({
							id: e
						}));
						const r = Object(N.f)(n());
						t(D(r)), t(Object(c.f)(Object(c.e)(s.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), S.b.SuccessCommunityGreen)))
					} else t(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), S.b.Error)))
				}, U = (e, t) => async (n, r, o) => {
					let {
						gqlContext: i
					} = o;
					if (!e) return;
					(await Object(O.b)(i(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(c.f)(Object(c.e)(s.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), S.b.SuccessCommunityGreen)))) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), S.b.Error)))
				}, W = (e, t) => async (n, r, o) => {
					let {
						gqlContext: i
					} = o;
					if (!e) return;
					(await Object(O.b)(i(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n((() => {
						const n = s.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(c.f)(Object(c.e)(n, S.b.Undo, s.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), U(e, t)))
					})()) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), S.b.Error)))
				}, H = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					if (!e) return;
					(await ((e, t) => Object(p.a)(Object(b.a)(e, [x.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/sendreplies`),
						method: m.jb.POST,
						data: {
							id: t
						}
					}))(o(), e)).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), S.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), S.b.Error)))
				}, V = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					if (!e) return;
					(await u(o(), {
						awardingId: e
					})).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), S.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), S.b.Error)))
				}, G = Object(r.a)(i.d), q = (e, t) => async (n, s, r) => {
					let i, {
						apiContext: c
					} = r;
					if (t === I.a.CommentReply || t === I.a.PostReply || t === I.a.PrivateMessage || t === I.a.UsernameMention) {
						if ((i = await ((e, t) => Object(p.a)(Object(b.a)(e, [x.a]), {
								endpoint: Object(g.a)(`${e.apiUrl}/api/read_message`),
								method: m.jb.POST,
								data: {
									id: t
								}
							}))(c(), e)).ok) {
							let e = Object(C.a)(s());
							if (e > 0) {
								e--;
								const t = Object(o.e)({
									count: e,
									key: j.c.ActivityTab
								});
								n(Object(o.a)(t)), n(Object(a.e)())
							}
						}
					} else i = await ((e, t) => Object(p.a)(Object(b.a)(e, [x.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/read_notification`),
						method: m.jb.POST,
						data: {
							id: t
						}
					}))(c(), e);
					if (i.ok) {
						const t = (new Date).toISOString();
						n(G({
							id: e,
							now: t
						}))
					}
				}, K = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = (new Date).toLocaleDateString(),
						i = await ((e, t) => Object(d.a)(e, {
							...v,
							variables: {
								input: t
							}
						}))(s(), {
							lastSentAt: r
						});
					if (i.ok) {
						const t = i.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(o.a)(n)), e(Object(a.d)()))
					}
				}, Q = Object(r.a)(i.c), z = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: i
						}
					} = t(), a = new Date;
					if (!i || a.getTime() - new Date(i).getTime() > 15e3) {
						if ((await ((e, t) => Object(p.a)(Object(b.a)(e, [x.a]), {
								endpoint: Object(g.a)(`${e.apiUrl}/api/read_all_messages`),
								method: m.jb.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(r(), [E.Activity, E.Messages])).ok) {
							const t = Object(o.e)({
									count: 0,
									key: j.c.MessageTab
								}),
								n = Object(o.e)({
									count: 0,
									key: j.c.ActivityTab
								});
							e(Object(o.a)({
								...t,
								...n
							})), e(Q({
								now: a.toISOString()
							}))
						} else e(Object(c.f)(Object(c.e)(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "VW7c3"
						}), S.b.Error)))
					}
				}
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "l", (function() {
				return R
			})), n.d(t, "k", (function() {
				return D
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return M
			})), n.d(t, "h", (function() {
				return U
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				h = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				f = Object(r.a)(b),
				x = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				g = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				E = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				_ = Object(r.a)(g),
				v = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				O = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				y = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				j = Object(r.a)(O),
				I = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				C = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				N = Object(r.a)(S),
				k = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				P = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				T = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				w = Object(r.a)(P),
				L = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				A = Object(r.a)(T),
				R = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = s(),
						a = Object(p.S)(i, {
							subredditId: e
						}).name;
					n(h());
					const d = await Object(c.k)(o(), a, t);
					if (d.ok) {
						n(f({
							subredditId: e,
							isEnabled: t
						}))
					} else n(x());
					return d.ok
				}, D = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = s(),
						a = Object(p.S)(i, {
							subredditId: e
						}).name;
					n(E());
					const d = await Object(c.j)(o(), t, l.d.LinkFlair, a);
					if (d.ok) {
						n(_({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(v());
					return d.ok
				}, B = (e, t) => async (n, r, o) => {
					let {
						apiContext: d
					} = o;
					const m = r(),
						b = Object(p.S)(m, {
							subredditId: t
						}).name;
					n(y());
					const h = await Object(c.f)(d(), e, b, l.d.LinkFlair);
					let f = h.ok && !(h.body && !1 === h.body.success);
					if (f) {
						const s = h.body;
						if (n(j({
								subredditId: t,
								template: s
							})), s.id) {
							const r = e.styleTemplate,
								o = m.structuredStyles.flairTemplate.models[s.id];
							r ? f = await n(Object(i.d)(t, s.id, r)) : o && (f = await n(Object(i.c)(t, s.id)))
						}
					}
					if (f) {
						const e = Object(a.e)(s.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(I());
						const r = Object(a.e)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), B(e, t));
						n(Object(a.f)(r))
					}
					return f
				}, F = (e, t) => async (n, r, o) => {
					let {
						apiContext: i
					} = o;
					const d = r(),
						l = Object(p.S)(d, {
							subredditId: t
						}).name;
					if (n(C()), (await Object(c.b)(i(), e, l)).ok) {
						n(N({
							subredditId: t,
							templateId: e
						}));
						const r = Object(a.e)(s.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(a.f)(r))
					} else {
						n(k());
						const r = Object(a.e)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						n(Object(a.f)(r))
					}
				}, M = (e, t) => async (n, r, o) => {
					let {
						apiContext: i
					} = o;
					const d = r(),
						b = Object(m.d)(d, {
							subredditId: t
						}).templateIds,
						h = Object(p.S)(d, {
							subredditId: t
						}).name;
					if (n(w({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(i(), h, l.d.LinkFlair, e)).ok) {
						n(L());
						const e = Object(a.e)(s.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(A({
							subredditId: t,
							templateIds: b
						}));
						const r = Object(a.e)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						n(Object(a.f)(r))
					}
				}, U = e => {
					let {
						post: t,
						previewFlair: n,
						selectedTemplateId: s
					} = e;
					return async (e, r, i) => {
						let {
							apiContext: a
						} = i;
						const l = t.flair.filter(e => !Object(d.q)(e.type));
						if (n && l.unshift(n), e(Object(o.S)({
								[t.id]: {
									flair: l
								}
							})), n) {
							const e = Object(d.g)(n);
							Object(c.h)(a(), t.id, s, e)
						} else Object(c.h)(a(), t.id, "", "")
					}
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "c", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forEach.js"),
				r = n.n(s),
				o = n("./node_modules/lodash/isEqual.js"),
				i = n.n(o),
				a = n("./node_modules/lodash/values.js"),
				c = n.n(a),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts");
			var f = n("./src/reddit/helpers/trackers/blade.ts"),
				x = n("./src/reddit/models/Image/index.tsx"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/telemetry/index.ts");
			const _ = e => {
					let {
						subredditId: t,
						flairId: n,
						imageKey: s,
						imageData: r
					} = e;
					return async (e, o, i) => {
						const a = o(),
							c = Object(g.S)(a, {
								subredditId: t
							});
						if (!c) return !1;
						e(Object(l.k)(r));
						const d = await (async (e, t, n, s, r, o) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
							method: m.jb.POST,
							data: {
								filepath: s,
								imagetype: r,
								mimetype: o
							}
						}))(i.apiContext(), c.name, n, r.file.name, s, await Object(u.h)(r.file));
						let f = !1;
						try {
							const t = await Object(l.g)(o(), d, r, x.a.FlairTemplates);
							t && e(Object(l.j)(t)), f = !0
						} catch (E) {
							if (E instanceof Error) throw E;
							e(Object(l.i)(E))
						}
						return f
					}
				},
				v = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS",
				O = Object(d.a)(v),
				y = (e, t, n) => async (s, o, a) => {
					const {
						apiContext: d
					} = a;
					let u = o();
					const {
						pendingImages: v,
						...y
					} = n;
					let j = y;
					const I = Object(g.S)(u, {
						subredditId: e
					});
					if (!I) return !1;
					const S = u.structuredStyles.flairTemplate.models[t];
					if (S && i()(S, j)) return !0;
					if (v) {
						const n = [];
						if (r()(v, (r, o) => {
								r && n.push(s(_({
									flairId: t,
									imageData: Object(x.m)(r),
									imageKey: o,
									subredditId: e
								})))
							}), !(await Promise.all(n)).every(e => e)) return !1;
						j = ((e, t, n) => {
							const s = {
								...e
							};
							return r()(t, (e, t) => {
								const r = e && n.imageUploads[e.id];
								r && r.kind === x.b.TempUploaded && (s[t] = r.url)
							}), s
						})(j, v, o())
					}
					u = o();
					let C = null,
						N = null;
					const k = [];
					try {
						(C = await Object(l.f)(u, x.a.FlairTemplates)) && (N = Object(l.m)(C)(s, o, a), k.push(...c()(C.imagesByKey)))
					} catch (L) {
						return !1
					}
					const P = await (async (e, t, n, s) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
							method: m.jb.PUT,
							data: s
						}))(d(), I.name, t, j),
						T = S ? "edit_post_flair_template" : "save_post_flair_template",
						w = Object(f.e)(u, T);
					if (P.ok) {
						let e;
						if (N) try {
							await N, e = ((e, t, n) => {
								const s = {
									...e
								};
								return t.forEach(e => {
									const t = n.imageUploads[e.id];
									t && t.kind === x.b.Uploaded && (e.url === s.postBackgroundImage ? s.postBackgroundImage = t.url : e.url === s.postPlaceholderImage && (s.postPlaceholderImage = t.url))
								}), s
							})(j, k, o())
						} catch (L) {
							e = null
						} else e = j;
						s(O({
							flairId: t,
							template: e || j
						}))
					} else C && C.websocket.close();
					return Object(E.a)({
						...w,
						actionInfo: {
							...w.actionInfo,
							success: P.ok
						}
					}), P.ok
				}, j = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", I = Object(d.a)(j), S = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = s(),
						a = Object(g.S)(i, {
							subredditId: e
						});
					if (!a) return !1;
					const c = await (async (e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
							method: m.jb.DELETE
						}))(o(), a.name, t),
						d = Object(f.e)(i, "delete_flair_template");
					return c.ok && n(I({
						flairId: t
					})), Object(E.a)({
						...d,
						actionInfo: {
							...d.actionInfo,
							success: c.ok
						}
					}), c.ok
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				i = n("./src/reddit/actions/notificationsInbox/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(r.a)(a.u),
				p = Object(r.a)(a.t),
				b = Object(r.a)(a.s),
				h = e => {
					switch (e) {
						case l.b.OFF:
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.b.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.b.LOW:
							return s.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const f = e => {
				let {
					subredditId: t,
					notificationLevel: n,
					successCallback: r,
					undoCallback: a
				} = e;
				return async (e, f, x) => {
					let {
						gqlContext: g
					} = x;
					var E, _, v;
					e(p());
					const O = (e => {
							switch (e) {
								case l.b.FREQUENT:
									return {
										isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
									};
								case l.b.LOW:
									return {
										isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
									};
								case l.b.OFF:
								default:
									return {
										isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
									}
							}
						})(n),
						y = await Object(d.b)(g(), t, O);
					if ((null === (_ = null === (E = y.error) || void 0 === E ? void 0 : E.fields) || void 0 === _ ? void 0 : _.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(y.body) && (null === (v = y.body.data.updateSubredditNotificationSettings.errors) || void 0 === v ? void 0 : v.length)) return e(b()), e(Object(c.f)({
						kind: u.b.Error,
						text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					y.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: n
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: n
							}
						}
					})), r && r(), e(a ? Object(c.f)(Object(c.e)(h(n), u.b.Undo, s.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(i.i)(t, a))) : Object(c.f)(Object(c.e)(h(n), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, i, a) => {
					let {
						routes: c
					} = a;
					const d = i();
					Object(s.a)(e, c, d) ? n(Object(o.b)(e)) : t ? Object(r.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/components/AwardedListingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "Euf0eewj0MUfCAneI6fj_",
				title: "_3ugv2ujLUVD37KHjuncuRT",
				close: "_3JAHw6m54Wrjm0rnX7GgRZ",
				dismissedContainer: "_1HciFW1Gf3BHBs0dEvE_tk",
				dismissedText: "_1cXKsx4apv5X14RmNQ0794",
				iconCarouselWrapper: "_2BnXKMLxfFWoe-pZcfIiIm",
				awardIcon: "_34m3e-Z2OR_TEdYH0Ih7O6",
				linearAnimation: "_4HAlQmVogiasYQ9srm4z4",
				iconCarouselInnerWrapper0: "_2fP0vb7wP0Afwdaw6cwZpG",
				slide0: "_3GqXepZa1qvL1X0wE8N0e2",
				iconCarouselInnerWrapper1: "_2O70Ew5pvoBSnOqL4T5EGx",
				slide1: "Fo2rMgLePrq248kivE__Q",
				scale: "_1IMFuS4ukJn7lP178Rtiqd",
				fadeInALittle: "_2KMwT7J3kyGA-____-iftE",
				fadeInTheRest: "_2BxmXNxZx082mr62D3k1LQ"
			}
		},
		"./src/reddit/components/AwardedListingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/banners.ts"),
				a = n("./src/reddit/constants/page.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-redux/es/index.js")),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./node_modules/lodash/sampleSize.js"),
				b = n.n(p),
				h = n("./src/reddit/models/Gold/Award.ts"),
				f = n("./src/reddit/components/AwardedListingBanner/index.m.less"),
				x = n.n(f);
			const g = 11,
				E = 1e3,
				_ = 500,
				v = [x.a.iconCarouselInnerWrapper0, x.a.iconCarouselInnerWrapper1];

			function O(e) {
				let {
					asset: t
				} = e;
				return r.a.createElement("div", {
					className: x.a.awardIcon,
					style: {
						backgroundImage: `url('${t}')`
					}
				})
			}
			const y = Object(m.c)({
				awards: e => e.awards.models
			});
			class j extends s.Component {
				constructor(e) {
					super(e), this.state = {
						animationClass: v[0],
						icons: []
					}
				}
				componentDidMount() {
					this.timerId = setInterval(() => this.updateOrdering(), E + _)
				}
				componentWillUnmount() {
					clearInterval(this.timerId)
				}
				updateOrdering() {
					this.setState(e => {
						const t = [...e.icons];
						return t.unshift(t.pop()), {
							icons: t,
							animationClass: e.animationClass === v[0] ? v[1] : v[0]
						}
					})
				}
				shouldComponentUpdate(e, t) {
					return this.state.animationClass !== t.animationClass
				}
				static getDerivedStateFromProps(e, t) {
					if (t.icons.length) return null;
					const n = Object.values(e.awards).filter(e => {
						return e.awardType === h.f.Global && e.isEnabled && !e.isOptional
					});
					return n.length ? {
						icons: b()(n, g).map(e => {
							var t;
							const n = (null === (t = e.staticIcon64) || void 0 === t ? void 0 : t.url) || e.staticIcon.url;
							return r.a.createElement(O, {
								asset: n,
								key: e.id
							})
						})
					} : null
				}
				render() {
					const {
						animationClass: e,
						icons: t
					} = this.state;
					return r.a.createElement("div", {
						className: x.a.iconCarouselWrapper
					}, r.a.createElement("div", {
						className: e
					}, t))
				}
			}
			var I = Object(u.b)(y)(j);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var C;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Visible = "visible"
			}(C || (C = {}));
			t.a = e => {
				const {
					className: t
				} = e, n = Object(c.f)(i.a.AWARDED_LISTING_BANNER, a.g), [u, m] = Object(s.useState)(n ? C.Hidden : C.Visible);
				if (u === C.Hidden) return null;
				const p = () => {
					m(C.Visible), Object(c.kb)(i.a.AWARDED_LISTING_BANNER, !1, a.g)
				};
				return u === C.Dismissed ? r.a.createElement("div", {
					className: Object(o.a)(x.a.dismissedContainer, t)
				}, r.a.createElement("div", {
					className: x.a.dismissedText
				}, S._("Ok, we won't show you this again.", null, {
					hk: "4z33KK"
				})), r.a.createElement(d.l, {
					onClick: p
				}, S._("undo", null, {
					hk: "1A9z3Y"
				}))) : r.a.createElement("div", {
					className: Object(o.a)(x.a.container, t)
				}, r.a.createElement("h2", {
					className: x.a.title
				}, S._("Explore and react to the top awarded posts on Reddit", null, {
					hk: "3IAtgk"
				})), r.a.createElement(I, null), r.a.createElement(l.a, {
					className: x.a.close,
					onClick: () => {
						m(C.Dismissed), Object(c.kb)(i.a.AWARDED_LISTING_BANNER, !0, a.g)
					}
				}))
			}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/AdViewability/index.tsx"),
				i = n("./src/reddit/connectors/PostViewable/index.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(i.a)(null),
				l = e => {
					let {
						className: t,
						post: n
					} = e;
					return n.isSponsored ? r.a.createElement(o.a, {
						post: n,
						trackDisplay: !0
					}, r.a.createElement("div", {
						className: Object(a.a)(t, `Blank ${n.id}`)
					})) : null
				};
			t.default = Object(c.b)(d(l))
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, n) {
			e.exports = {
				notificationButton: "_3lH4vtstXYL3BXfT_hrmNu",
				notificationDropdown: "_3RIXPgg0td0Ikm3OCair-W",
				notificationRow: "nbdugyDJvnPyib81V0bre",
				isSelected: "_1yo5m2yCZUVzNB40ZytJzk",
				notificationIcon: "qIoApQle9dXP6HkO35IOx",
				notificationPopup: "J-YgwKJ71m7H4bkbzeN5G",
				title: "_3oHXlwUZwpR5SS-8P9tILX",
				subredditWrapper: "_3V00i2DgErfrsJUA2i5OVw",
				subredditTitle: "_8eiyc5qzybrCg1tKBvgsm",
				icon: "_28KZtJenmDKbbe4nGYKwSQ",
				SubredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				subredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				DefaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				defaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				subscribeButton: "_2R2t7BzhdzT5QExBlp5Di0",
				hideButton: "_3lnzUjXBFhqkpfm2GDP6i",
				popupTooltip: "_2h6EM3mo5Qn9Eqm18v5Hiz"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "MSTY2ZpsdupobywLEfx9u",
				stickyWrapper: "VJkPo4gom3XvkL4X-w0JS",
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX",
				isSticking: "ZGQod_mafxz0rQZ6X1osG",
				buttonWrapper: "_2I_YJCANrzkY2DZkeu2nht",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				notificationButtonContainer: "_1cAYKT6f3GM-_aZei--pxM",
				intersectionWrapper: "_3EWe8WOn2CDJW5khbbnAIX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/actions/subreddit/notifications.ts"),
				m = n("./src/lib/combineRefs/index.tsx"),
				p = n("./src/lib/hooks/useOnClickOutside.ts"),
				b = n("./src/lib/hooks/useTooltip.ts"),
				h = n("./src/reddit/components/CommonTooltip/index.m.less"),
				f = n.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var g = r.a.memo((function(e) {
					let {
						visible: t,
						tooltipId: n,
						className: o,
						arrowClassName: i,
						...c
					} = e;
					const [d, l] = Object(s.useState)(t);
					return Object(s.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, l(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), l(!1)
						}
					}, [t]), t ? r.a.createElement("div", x({
						id: n,
						className: Object(a.a)(f.a.tooltip, o, {
							[f.a.visible]: d
						})
					}, c.popperProps), d && r.a.createElement(r.a.Fragment, null, c.arrowProps && r.a.createElement("div", x({
						className: Object(a.a)(f.a.arrow, i)
					}, c.arrowProps)), c.children)) : null
				})),
				E = n("./src/reddit/models/Subreddit/index.ts");
			const _ = e => {
					switch (e) {
						case E.b.FREQUENT:
							return "notification_frequent";
						case E.b.OFF:
							return "notification_off";
						case E.b.LOW:
						default:
							return "notification"
					}
				},
				v = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				O = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var y = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/reddit/controls/Dropdown/index.tsx"),
				I = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				N = n.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var P = e => {
					return r.a.createElement(j.a, {
						id: e.dropdownId,
						className: N.a.notificationDropdown
					}, [{
						displayText: y.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(E.b.FREQUENT),
						isSelected: e.notificationLevel === E.b.FREQUENT,
						icon: r.a.createElement(S.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === E.b.FREQUENT
						})
					}, {
						displayText: y.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(E.b.LOW),
						isSelected: e.notificationLevel === E.b.LOW,
						icon: r.a.createElement(S.a, {
							name: "notification",
							isFilled: e.notificationLevel === E.b.LOW
						})
					}, {
						displayText: y.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(E.b.OFF),
						isSelected: e.notificationLevel === E.b.OFF,
						icon: r.a.createElement(S.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === E.b.OFF
						})
					}].map(e => r.a.createElement(I.b, k({
						className: Object(a.a)(N.a.notificationDropdown, N.a.notificationRow, {
							[N.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				T = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/reddit/selectors/telemetry.ts");
			const L = e => t => ({
				...w.n(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: w.gb(t)
			});
			var A = n("./src/reddit/hooks/useTracking.ts"),
				R = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const D = d.a.img("SubredditIcon", N.a),
				B = d.a.wrapped(R.a, "DefaultIcon", N.a);
			var F = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: n,
						subredditIcon: s,
						onHide: o,
						onUpdate: i
					} = e;
					const a = Object(A.a)(),
						c = n ? r.a.createElement(D, {
							src: s || void 0
						}) : r.a.createElement(B, null),
						d = `r/${t}`;
					return r.a.createElement("div", {
						className: N.a.notificationPopup
					}, r.a.createElement("div", {
						className: N.a.title
					}, r.a.createElement("h2", null, y.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), r.a.createElement("h3", null, y.fbt._("{subreddit name}", [y.fbt._param("subreddit name", d)], {
						hk: "1es0XP"
					}))), r.a.createElement("div", {
						className: N.a.subredditWrapper
					}, r.a.createElement("div", {
						className: N.a.subredditTitle
					}, c, r.a.createElement("span", null, d), r.a.createElement(S.a, {
						name: "notification_frequent",
						className: N.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(T.t, {
						className: N.a.subscribeButton,
						priority: T.c.Primary,
						size: T.d.M,
						text: y.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							o(), i(E.b.FREQUENT), a(L(E.b.FREQUENT.toLowerCase()))
						}
					})), r.a.createElement("button", {
						className: N.a.hideButton,
						onClick: o
					}, y.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				M = n("./src/reddit/helpers/localStorage/index.ts");
			var U = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var W = e => {
					const t = Object(o.d)(),
						n = Object(A.a)(),
						i = Object(b.b)(v),
						a = Object(b.b)(O),
						[c, d] = function(e, t) {
							const [n, r] = Object(s.useState)(Object(M.O)(e, t));
							return [n, Object(s.useCallback)(() => {
								const n = Object(M.a)(e, t);
								r(n)
							}, [e, t, r])]
						}(e.userId, e.subredditId),
						l = Object(o.e)(e => !!Object(U.a)(e));
					Object(s.useEffect)(() => {
						e.notificationLevel !== E.b.LOW && e.notificationLevel !== E.b.OFF || d()
					}, [e.subredditId]);
					const h = 2 === c,
						f = () => {
							i.hide()
						},
						x = () => {
							a.hide()
						};
					Object(s.useEffect)(() => (h && (a.update && a.update(), a.show()), () => {
						x(), f()
					}), [e.subredditName, h]);
					const y = () => {
							x(), i.show()
						},
						j = (e => `dropdown-${e}`)(e.subredditName),
						I = (e => `popup-${e}`)(e.subredditName);
					Object(p.a)(j, f);
					const C = Object(s.useCallback)(e => {
							e.stopPropagation(), i.visible ? f() : y()
						}, [f, y, i.visible]),
						k = Object(s.useCallback)(t => {
							t === E.b.FREQUENT && Object(M.cb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						T = Object(s.useCallback)(s => {
							const {
								subredditId: r
							} = e;
							f(), x(), t(Object(u.b)({
								subredditId: r,
								notificationLevel: s,
								successCallback: () => k(s)
							})), n(L(s.toLowerCase()))
						}, [f, e.subredditId, t, n]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						type: "button",
						className: N.a.notificationButton,
						ref: Object(m.a)(i.target.ref, a.target.ref),
						onClick: C,
						"data-testid": "subredditNotificationButton"
					}, r.a.createElement(S.a, {
						name: _(e.notificationLevel),
						className: N.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(g, {
						popperProps: i.popperProps,
						visible: i.visible,
						tooltipId: j
					}, r.a.createElement(P, {
						dropdownId: j,
						notificationLevel: e.notificationLevel,
						onClick: T
					})), h && !l && r.a.createElement(g, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: I,
						className: N.a.popupTooltip
					}, r.a.createElement(F, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: x,
						onUpdate: T
					})))
				},
				H = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				V = n("./src/reddit/components/SubredditNav/index.tsx"),
				G = n("./src/reddit/components/SubscribeButton/index.tsx"),
				q = n("./src/reddit/constants/componentSizes.ts"),
				K = n("./src/reddit/constants/postLayout.ts"),
				Q = n("./src/reddit/constants/posts.ts"),
				z = n("./src/reddit/featureFlags/index.ts"),
				Y = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				J = n("./src/reddit/constants/tracking.ts");
			var Z = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				X = n("./src/reddit/hooks/useWindowEvent.ts"),
				$ = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				ee = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				te = n("./src/reddit/selectors/subreddit.ts"),
				ne = n("./src/reddit/selectors/user.ts"),
				se = n("./src/reddit/selectors/widgets.ts"),
				re = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				oe = n.n(re);
			const ie = d.a.img("SubredditIcon", oe.a),
				ae = Object(i.c)({
					notificationLevel: te.F,
					spPollsEnabled: z.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(ee.a)(e, {
							subredditId: n
						})
					},
					tournamentsEnabled: (e, t) => {
						let {
							subredditId: n
						} = t;
						return !!n && Object(te.M)(e, {
							subredditId: n
						})
					},
					userId: ne.i,
					userIsSubscriber: (e, t) => {
						let {
							subredditName: n
						} = t;
						const s = n;
						return Object(te.eb)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					},
					widget: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(se.f)(e, {
							subredditId: n
						}) : void 0
					}
				}),
				ce = {
					threshold: [.5, .001],
					rootMargin: `${1-q.f}px 0px 0px 0px`
				};
			t.a = Object(o.b)(ae, (e, t) => ({
				_updateSubredditInfo: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(Object(u.a)({
						subredditAboutInfo: {
							[s]: {
								notificationLevel: E.b.LOW
							}
						}
					}))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(c.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					n = e.subreddit ? e.subreddit.name : e.subredditName,
					i = e.subreddit ? e.subreddit.url : e.subredditUrl,
					c = e.subreddit ? e.subreddit.title : "",
					d = Object(o.e)($.b),
					u = Object(o.e)($.a),
					m = d || u,
					[p, b] = Object(s.useState)(!1),
					h = Object(s.useRef)(null),
					[f, x] = Object(s.useState)(),
					[g, E] = Object(s.useState)(null),
					_ = Object(s.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: n
							} = t;
							n >= .5 ? e(!1) : n <= .001 && e(!0)
						})
					})(b), []);
				Object(X.a)("resize", ((e, t, n) => () => {
					var s;
					e(t && n ? null === (s = t.getBoundingClientRect()) || void 0 === s ? void 0 : s.height : void 0)
				})(x, g, m)), Object(Z.a)(h, _, ce);
				const v = e.subreddit && Object(Y.a)(e),
					O = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && v),
					y = n.charAt(0).toUpperCase() + n.slice(1),
					j = !!e.subreddit && e.subredditInlineEditingEnabled,
					I = Object(a.a)(oe.a.SubredditIcon, oe.a.editableIcon, {
						[oe.a.emptyEditableIcon]: !v
					}),
					S = O ? r.a.createElement(H.a, {
						className: I,
						subreddit: e.subreddit,
						iconUrl: v || void 0,
						inTopBar: !0
					}) : r.a.createElement(R.a, {
						className: oe.a.DefaultIcon
					}),
					C = O ? r.a.createElement(ie, {
						src: v || void 0
					}) : r.a.createElement(R.a, {
						className: oe.a.DefaultIcon
					}),
					N = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					k = e.layout ? e.layout === K.g.Large ? "984px" : "100%" : "1086px";
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					style: {
						height: p ? void 0 : f
					},
					className: Object(a.a)(oe.a.wrapper, {
						[oe.a.stickyWrapper]: m,
						[oe.a.isSticking]: p
					})
				}, r.a.createElement("div", {
					className: oe.a.container,
					style: {
						maxWidth: k
					},
					ref: m ? E : void 0
				}, r.a.createElement("div", {
					className: oe.a.subredditMetaContainer
				}, j ? S : C, r.a.createElement("div", {
					className: Object(a.a)(oe.a.textContainer, {
						[oe.a.textContainerNoIcon]: !O
					})
				}, r.a.createElement("div", {
					className: oe.a.text
				}, r.a.createElement("h1", {
					className: oe.a.title
				}, c || y), !!c && r.a.createElement("h2", {
					className: oe.a.description
				}, "r/", n)), r.a.createElement("div", {
					className: oe.a.buttonWrapper
				}, r.a.createElement("div", {
					className: oe.a.subscribeButtonContainer
				}, r.a.createElement(G.a, {
					className: oe.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return p ? (e => t => ({
							...w.n(t),
							source: "sticky_banner",
							action: J.c.CLICK,
							noun: e,
							subreddit: w.gb(t)
						}))(t) : (e => t => ({
							...w.n(t),
							source: "id_banner",
							action: J.c.CLICK,
							noun: e,
							subreddit: w.gb(t)
						}))(t)
					},
					identifier: {
						name: n,
						type: Q.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(M.cb)(e.userId, t), e.updateSubredditInfo())
					}
				})), e.userIsSubscriber && t && e.notificationLevel && r.a.createElement("div", {
					className: oe.a.notificationButtonContainer
				}, r.a.createElement(W, {
					notificationLevel: e.notificationLevel,
					subredditName: n,
					subredditId: t,
					subredditIcon: v,
					shouldShowSubredditIcon: O,
					userId: e.userId
				}))))), N && r.a.createElement(V.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: i,
					subredditId: t,
					subredditNavContainerClassName: oe.a.subredditNavContainer
				}))), r.a.createElement("div", {
					className: oe.a.intersectionWrapper
				}, r.a.createElement("div", {
					style: {
						height: m ? f : void 0
					},
					ref: m ? h : void 0
				})))
			}))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.tsx"),
				x = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.tsx"),
				E = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				_ = n("./src/reddit/components/TextWithLinks/index.tsx"),
				v = n("./src/reddit/constants/parameters.ts"),
				O = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				j = n("./src/chat/controls/Svg/index.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var S = e => o.a.createElement(j.a, I({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				C = n("./src/reddit/models/ContentGate.ts"),
				N = n("./src/lib/constants/index.ts"),
				k = n("./src/reddit/selectors/platform.ts"),
				P = n("./src/reddit/selectors/user.ts");
			var T = n("./src/reddit/selectors/meta.ts"),
				w = n("./src/reddit/components/ContentGate/index.m.less"),
				L = n.n(w);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = l.a.wrapped(S, "PrivateKey", L.a), D = l.a.div("ButtonsContainer", L.a), B = l.a.div("Container", L.a), F = l.a.div("ContainerExp", L.a), M = l.a.div("Description", L.a), U = l.a.div("PrivateSubredditDetails", L.a), W = l.a.div("PrivateSubredditDescription", L.a), H = l.a.h3("PrivateSubredditName", L.a), V = l.a.a("Link", L.a), G = l.a.wrapped(y.n, "LinkRouterButton", L.a), q = l.a.wrapped(y.m, "LinkButton", L.a), K = l.a.wrapped(y.q, "SecondaryLinkRouterButton", L.a), Q = l.a.wrapped(y.p, "SecondaryLinkButton", L.a), z = l.a.wrapped(G, "GoHomeLinkButton", L.a), Y = l.a.wrapped(h.a, "CreateCommunityButton", L.a), J = l.a.img("Image", L.a), Z = l.a.img("ImagePlaceholder", L.a), X = l.a.wrapped(G, "LeftLinkRouterButton", L.a), $ = l.a.wrapped(q, "LeftLinkButton", L.a), ee = l.a.wrapped(Q, "SecondaryLeftLinkButton", L.a), te = l.a.wrapped(K, "SecondaryLeftLinkRouterButton", L.a), ne = l.a.h3("Title", L.a), se = l.a.div("PageBody", L.a), re = l.a.div("InterstitialMessageWrapper", L.a), oe = Object(d.c)({
				isLoggedIn: P.P,
				origin: T.j,
				user: P.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(P.Q)(e)) return !1;
					const t = Object(k.d)(e);
					if (!t) return !1;
					const n = Object(P.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const r = 30 * N.B;
					return s > Date.now() - r
				})(e),
				isSeo: T.g
			}), ie = Object(O.u)(), ae = Object(i.b)(oe, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.D(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.o)())
					}
				}
			}), ce = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					continueToGatedSubreddit: i,
					isLoggedIn: a,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: l,
					location: p,
					origin: h,
					pageLayer: f,
					quarantineRequiresEmail: O,
					quarantineMessage: y,
					quarantineMessageHtml: j,
					quarantineMessageRTJson: I,
					interstitialWarningMessage: S,
					interstitialWarningMessageHtml: N,
					interstitialWarningMessageRTJson: k,
					setNSFWPreference: P,
					subredditDescription: T,
					subredditName: w,
					user: B
				} = e, F = async () => {
					if (a ? await P() : await Object(m.n)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(v.i, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case C.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ne, null, A._("r/{community name} is a Reddit Premium community", [A._param("community name", w)], {
							hk: "2lyDwB"
						})), o.a.createElement(M, null, A._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(D, null, B ? o.a.createElement(ee, {
							href: `${s.a.redditUrl}/premium`,
							redditStyle: !0
						}, A._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement($, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, A._("Sign Up", null, {
							hk: "rvpjy"
						})), B ? o.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, A._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(Q, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, A._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case C.a.Nsfw:
					case C.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ne, null, n === C.a.Nsfw ? A._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : A._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(M, null, A._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(D, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, A._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(Q, {
							onClick: F,
							redditStyle: !0
						}, A._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case C.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(R, null), o.a.createElement(ne, null, "r/", w, " ", A._("is a private community", null, {
							hk: "7zZmq"
						})), T && T.length && o.a.createElement(U, null, o.a.createElement(H, null, "r/", w), o.a.createElement(W, null, o.a.createElement("div", null, T))), o.a.createElement(M, null, A._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", w, " ", A._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), A._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(D, null, B ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: L.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(ee, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${w}`,
							redditStyle: !0
						}, A._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ee, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, A._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, A._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), w && o.a.createElement(E.a, {
							subredditName: w
						}));
					case C.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ne, null, A._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(M, null, A._("This community is {=quarantined}", [A._param("=quarantined", o.a.createElement(V, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, A._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(re, null, I ? o.a.createElement(g.a, {
							content: I,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : j ? o.a.createElement(x.a, {
							html: j
						}) : y || A._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), A._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(D, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(D, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, A._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(q, {
								href: `${s.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, A._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(D, null, o.a.createElement(X, {
								to: "/",
								redditStyle: !0
							}, A._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Q, {
								onClick: t,
								redditStyle: !0
							}, A._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(B, r, O)));
					case C.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, null, A._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(M, null, o.a.createElement(re, null, k ? o.a.createElement(g.a, {
							content: k,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : N ? o.a.createElement(x.a, {
							html: N
						}) : S), A._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(D, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, A._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(Q, {
							onClick: i,
							redditStyle: !0
						}, A._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case C.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ne, null, A._("r/{community name} has been banned from Reddit", [A._param("community name", w)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(M, null, e ? o.a.createElement(_.a, {
							linkClassName: L.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : A._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(D, null, o.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case C.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, A._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(D, null, o.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case C.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(Z, null), o.a.createElement(ne, null, A._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(M, null, A._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(D, null, B && o.a.createElement(Y, {
							eventSource: "content_gate"
						}), o.a.createElement(z, {
							to: "/",
							redditStyle: !0
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case C.a.ProfileDoesNotExist:
					case C.a.ProfileDeleted:
					case C.a.ProfileSuspended:
					case C.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case C.a.ProfileBlockedForLegalReason:
									return A._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case C.a.ProfileDeleted:
									return A._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case C.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, A._("This account has been {=suspended} .", [A._param("=suspended", o.a.createElement(V, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, A._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case C.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ne, null, A._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(M, null, A._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(D, null, o.a.createElement(z, {
							to: "/",
							redditStyle: !0
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case C.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, A._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(D, null, o.a.createElement(z, {
							to: "/",
							redditStyle: !0
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case C.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, A._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(D, null, o.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, A._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ie(ae(Object(a.i)(e => {
				const t = Object(r.useContext)(c.a) ? F : B;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(se, null, ce(e))), o.a.createElement(f.a, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = n.n(f),
				g = n("./src/lib/lessComponent.tsx");
			const E = "create-community-button",
				_ = g.a.wrapped(l.c, "StyledTooltip", x.a),
				v = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(i.b)(v, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(n)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: E
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: r,
					onHideTooltip: i,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: u
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						u && u(e), a(c)
					},
					onMouseEnter: r,
					onMouseLeave: i,
					priority: p.c.Secondary,
					id: E,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: E,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: E,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				buttonFontXS: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontXs: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontS: "_1l-KcydphK1LZ0DY8WNS7-",
				buttonFontM: "_2-Ytw7EJuJ76FU11odY0vH",
				buttonFontL: "_1fMOhvVkzFghuFsd8kzAEz",
				buttonFontXL: "_25jU9LTEsPZrTgo4UTgEvr",
				buttonFontXl: "_25jU9LTEsPZrTgo4UTgEvr",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFontH6Small: "_5_68hlXr857aHgLLCMBWC",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/constants/banners.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/localStorage/index.ts");
			const m = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				p = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				b = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				});
			var h = n("./src/reddit/icons/svgs/CirclePost/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				x = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/components/CreatePostBanner/index.m.less"),
				E = n.n(g);
			const _ = Object(i.b)(null, e => ({
				showToast: () => {
					e(Object(a.f)({
						kind: x.b.SuccessCommunity,
						text: s.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(u.kb)(d.a.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(p())
					}, this.createPost = () => {
						this.props.sendEvent(b())
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						subreddit: e
					} = this.props, t = !Object(u.f)(d.a.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(m()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? o.a.createElement("div", {
						className: E.a.banner
					}, o.a.createElement("button", {
						className: E.a.closeContainer,
						onClick: this.closeBanner
					}, o.a.createElement(f.a, {
						className: E.a.close
					})), o.a.createElement(h.a, {
						className: E.a.postIcon
					}), o.a.createElement("div", {
						className: E.a.heading
					}, s.fbt._("Create the ideal {subredditDisplayText} post", [s.fbt._param("subredditDisplayText", ` ${e.displayText} `)], {
						hk: "3ZioIj"
					})), o.a.createElement("div", {
						className: E.a.text
					}, s.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), o.a.createElement("br", null), s.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), o.a.createElement("div", {
						className: E.a.buttonWrapper
					}, o.a.createElement(l.m, {
						className: E.a.button,
						target: "_blank",
						href: `/${e.displayText}/submit`,
						onClick: this.createPost
					}, s.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = _(Object(c.c)(v))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				a = n.n(i);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(o.a)(a.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(o.a)(a.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? a.a.bodyHidePadding : a.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PowerupsInFeedUnit-index-tsx",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PowerupsInFeedUnit-index-tsx").then(n.bind(null, "./src/reddit/components/Econ/PowerupsInFeedUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsInFeedUnit/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/Econ/Prediction/Confetti/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_30UqRfQUvAM856xCCnxuZt",
				left: "NGXhDTfdYyHsV0bMiz8c9",
				right: "_1gN69CDTTgxbquzyeJIRdg"
			}
		},
		"./src/reddit/components/Econ/Prediction/Confetti/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/reddit/components/Econ/Prediction/Confetti/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => {
				let {
					className: t,
					...n
				} = e;
				return a.a.createElement("div", l({
					className: Object(o.a)(d.a.container, t)
				}, n), a.a.createElement("img", {
					className: d.a.left,
					src: `${s.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: r.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}), a.a.createElement("img", {
					className: d.a.right,
					src: `${s.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: r.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-CreatingTournamentBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-CreatingTournamentBanner").then(n.bind(null, "./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/EmptyPredictions/index.m.less": function(e, t, n) {
			e.exports = {
				primaryText: "_1bwD7kygv4bVZM8fDgSQv8",
				mainContentWrapper: "_3-p7jwY9LowTxunslKskSz",
				mainContent: "_2ckdQlwH_QZ38t7uWKUMLo",
				backgroundPlaceholder: "s5jLEXcFLaQaE2Ck0qPJV",
				component: "_2fO9Pa6g6JYBjRFkKsbzHI"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/config.ts");
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js"), a = `\n  ${o.a.assetPath}/img/econ/predictions/waiting.png,\n  ${o.a.assetPath}/img/econ/predictions/waiting@2x.png 2x,\n  ${o.a.assetPath}/img/econ/predictions/waiting@3x.png 3x,\n`;
			t.a = e => r.a.createElement("img", {
				className: e.className,
				srcSet: a,
				src: `${o.a.assetPath}/img/econ/predictions/waiting@2x.png 2x`,
				alt: i._("Snoos gazing into a crystal ball", null, {
					hk: "1XM1Zp"
				})
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.m.less": function(e, t, n) {
			e.exports = {
				"status-badge": "_2u7bIsw_LdudsW_rSs4GtE",
				statusBadge: "_2u7bIsw_LdudsW_rSs4GtE",
				live: "_2gAzDyByGNwe-USVOIr2v3",
				ended: "DDaz64wxy8rIcPfzwEXfB"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.m.less"),
				d = n.n(c);
			const l = e => {
				let {
					className: t,
					status: n
				} = e;
				const r = [a.a.Live, a.a.LiveInProgress].includes(n),
					c = n === a.a.Closed;
				return o.a.createElement("span", {
					className: Object(i.a)(d.a.statusBadge, t, {
						[d.a.live]: r,
						[d.a.ended]: c
					})
				}, r && s.fbt._("Live", null, {
					hk: "1hUJkn"
				}), c && s.fbt._("Ended", null, {
					hk: "3oH4rs"
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				c = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const d = e => {
				let {
					tournamentId: t,
					className: n
				} = e;
				const r = Object(i.e)(e => Object(c.a)(e, t));
				return r && r.tokenIconUrl ? o.a.createElement("img", {
					className: n,
					alt: s.fbt._("Tournament token", null, {
						hk: "3cgDZy"
					}),
					src: r.tokenIconUrl
				}) : o.a.createElement(a.a, {
					className: n
				})
			}
		},
		"./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/econ/index.ts");
			const a = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("svg", {
						className: t,
						fill: "none",
						height: "20",
						viewBox: "0 0 20 20",
						width: "20",
						xmlns: "http://www.w3.org/2000/svg"
					}, r.a.createElement("path", {
						d: "m11.8373 7.17254c-.0381-2.14805-1.2066-4.26563-3.12608-5.6611-.7001 1.14224-1.0571 2.46166-1.02847 3.80108.02863 1.33941.44168 2.64237 1.18995 3.75365",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m8.87285 9.06578c-.03047.01981-.17672-.13254-.39609-.43722-.29757-.44864-.53424-.93481-.70383-1.44575-.25319-.76597-.37124-1.57014-.34887-2.37656.0185-.47751.08381-.95205.195-1.4168.12075-.49951.29704-.98393.52559-1.44421.04547-.10166.09632-.20083.15234-.29708l.16453-.28792c.0182-.03202.04253-.06014.07159-.08276.02907-.02261.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03655.00458.07183.01631.10384.03453l.02742.01828c.38016.28079.73681.5921 1.0664.93082.30177.31806.57737.65991.82417 1.02223.4117.60733.7253 1.27566.9293 1.98046.1388.46809.2126.95301.2194 1.44118 0 .34277-.0396.52863-.0731.52863-.0336 0-.0762-.18281-.1402-.50731-.0876-.45579-.214-.90328-.3778-1.33757-.2445-.64356-.5745-1.25128-.9811-1.8068-.2427-.32728-.50846-.63681-.79524-.92625-.31294-.30838-.64797-.59352-1.00242-.85313l.41742-.08226-.15234.2666c-.05268.08874-.10048.18028-.1432.27422-.20887.42313-.37327.8668-.49055 1.32387-.10969.42749-.18107.8639-.21328 1.30406-.04198.75145.02993 1.50493.21328 2.23488.31535 1.25684.78762 1.94696.70078 1.99875z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m15.6001 5.87727c-.8963-.80295-1.9238-1.44605-3.0378-1.90125-.8516-.34734-1.7854-.585-2.69037-.41742-1.00242.18586-1.84945.84246-2.58984 1.55086-.89883.86988-1.70321 1.87383-2.14196 3.04687-.34277.91407-.45703 1.93177-1.02984 2.72697-.44789.6292-1.12582 1.0481-1.73672 1.5234s-1.19894 1.0664-1.32691 1.8281c-.134064.7983.2666 1.5905.76172 2.2349.43629.6039.99546 1.1085 1.64074 1.4808.65104.3698 1.41006.5028 2.14805.3763 1.28273-.2544 2.18918-1.3711 3.33937-2.0018.91406-.4966 1.98046-.6657 2.93876-1.0664 1.7105-.7343 3.0622-2.1139 3.7613-3.8391.6813-1.72672.7474-3.63533.1874-5.40512",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m11.9928 5.88635c-.9902.47227-2.10078.77238-3.13214.36105-.44942-.17824-.91407-.48597-.99633-.96281-.08836-.53777.35648-1.01156.81047-1.31472 1.4823-.98567 3.3333-1.06641 5.0669-.66422 1.7337.40218 3.2663 2.19375 3.4842 3.95941 1.1699.23309 1.6178 1.90582 1.4396 3.08494-.0975.649-.4647 1.2416-.5027 1.8967-.0595 1.042.7175 1.9591.8302 2.9966.0424.4433-.0361.8899-.2271 1.2922-.1909.4024-.4873.7455-.8576.993-.7449.4829-2.1998.8653-2.9661.4174-.5408.5408-1.0664.8531-1.953.5621-.4365-.1597-.8123-.4516-1.075-.835s-.3992-.8392-.3906-1.3039c.0251-.4645.1826-.9122.4539-1.2901.2713-.378.645-.6704 1.0772-.8427-.118-.6928-.0689-1.4038.143-2.0739.212-.6701.5808-1.2799 1.0757-1.7789.4357-.4311.6475-1.2568.8623-1.82809.3184-.84551.0792-1.3589-.7115-1.79461-.7906-.4357-.6322-.91406-1.5356-.93234",
						fill: "#7e53c1"
					}), r.a.createElement("path", {
						d: "m2.93455 11.5232c-.76172.5652-1.73063 2.1861-1.73063 2.1861-.335154.9887-.09293 2.174.67184 2.8839.30469.2803.66879.4814.97347.7617.24375.2209.4479.489.72973.6581.29688.1598.6324.2336.96891.2133 1.02679-.0183 1.96523-.5515 2.83207-1.1014.52711-.3337.74496-.3748 1.08469-.8973.33972-.5226.44179-1.2508.08074-1.7596-.10551-.1489-.24341-.2718-.40332-.3597s-.33766-.1383-.51989-.1476c.14706-.1759.25646-.3801.32145-.5999.06499-.2199.08417-.4507.05637-.6783-.03221-.2274-.1238-.4424-.26556-.6232-.14175-.1808-.32865-.321-.54187-.4066-.21517-.0769-.44922-.0833-.66831-.0184s-.41185.1978-.55044.3795c-.12035-.4571-.26812-.9415-.66117-1.1929-.39304-.2514-.95672-.1706-1.36043.0899s-.73429.2133-1.01156.6094",
						fill: "#ff85c6"
					}), r.a.createElement("g", {
						fill: "#000"
					}, r.a.createElement("path", {
						d: "m12.0369 5.96144c.0076.01828-.0975.08074-.3047.18129-.1051.04875-.2422.09598-.4022.15234-.1874.06167-.3781.11253-.5713.15235l-.1691.03351-.1813.01524-.1904.02133-.2011.00761c-.29982.01193-.59992-.01521-.89273-.08074-.34868-.0711-.67773-.21717-.96434-.42809-.33198-.24583-.57949-.58862-.7084-.98109-.00992-.03112-.01206-.0642-.00622-.09634.00585-.03215.01949-.06236.03974-.088l.18129-.22699.09293-.11578c.03351-.03656.06855-.0716.10359-.10816l.21176-.21633.23613-.20109c.33521-.27221.70445-.49959 1.0984-.67641.86515-.37673 1.79855-.5717 2.74215-.57281.2458 0 .4946.00761.7465.02285.1249.01066.2514.02437.3778.03656l.3885.06703c.5231.11861 1.0247.31749 1.4869.58957.4807.27702.916.62643 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1606.44653.2128.92481.1524 1.39547l-.2225-.32449c.3024.07237.582.21897.8136.42656.2182.19639.3962.43337.524.69773.2368.4925.3602 1.03182.3611 1.57828.0036.26324-.0198.52618-.0701.78458-.0515.2498-.1265.4941-.224.7297-.1751.4479-.3458.8471-.3351 1.231.0236.4021.1338.7945.323 1.1502.1736.3762.3762.748.5149 1.1486.0732.1995.1243.4064.1523.617.025.2054.025.4131 0 .6185-.049.3813-.1783.7479-.3793 1.0756-.1803.2992-.4198.5584-.7038.7617-.2515.1695-.5267.3009-.8166.39-.4515.1462-.9263.2072-1.4.1798-.2998-.0157-.5927-.0952-.8593-.2331-.0441-.0259-.0837-.0472-.1142-.0701l-.0747-.064c-.0381-.035-.0548-.0564-.0487-.064s.0335 0 .0792.0168l.0838.0366c.0335.0137.0746.0259.1203.0426.265.0859.5427.1261.8212.1188.4422-.0126.879-.1002 1.2919-.2589.253-.0934.4915-.2222.7083-.3824.2336-.1832.4283-.4111.5729-.6703.1596-.2843.2582-.5987.2894-.9232.0316-.3501-.0206-.7025-.1523-1.0284-.131-.3519-.3321-.7038-.5256-1.0953-.2303-.4174-.366-.8802-.3976-1.3559-.0049-.2555.0316-.5102.1081-.7541.0701-.2376.1524-.457.2407-.6779.083-.2069.1462-.4211.1889-.6399.0401-.2216.0575-.44666.0518-.67179-.0025-.45984-.1065-.91345-.3046-1.32843-.089-.19841-.2208-.37466-.386-.5161-.1651-.14144-.3595-.24457-.5692-.30199-.0707-.01706-.1324-.05965-.1735-.11957s-.0585-.13291-.049-.20492c.0449-.37936.0001-.76396-.131-1.12278-.1711-.47191-.4347-.90491-.7754-1.27359-.3334-.36724-.7207-.68161-1.1487-.93234-.4116-.24365-.858-.42295-1.3238-.53168l-.3504-.06704-.352-.0396c-.2346-.0193-.4671-.02946-.6977-.03047-.8711-.0115-1.7356.15167-2.5426.47988-.69944.29292-1.31358.75772-1.78547 1.35129l.03199-.18738c.09268.31809.28096.59997.5393.80742.23935.19093.5167.32857.81351.40371.26464.07357.53739.114.81197.12035h.1874l.1798-.00762.1721-.00761.163-.01981c.2118-.01828.3976-.06246.5607-.08988.163-.02742.3046-.06856.4082-.0975.2194-.05942.3398-.08379.3474-.06551z"
					}), r.a.createElement("path", {
						d: "m15.1617 6.80064c.032-.01066.16.18738.2529.60938.0533.25693.0661.52062.0381.78152-.0428.34276-.1325.678-.2666.99633-.159.38683-.3724.749-.6338 1.07553-.2727.3504-.5713.684-.8318 1.0664-.1345.1968-.2591.4001-.3732.6094-.1109.2057-.1964.4241-.2544.6505-.126.4741-.116.9741.0289 1.4427l.0549.1523.0655.1524v.0107c.0153.035.0235.0728.0241.1111s-.0063.0763-.0205.1118c-.0142.0356-.0352.068-.062.0954-.0268.0273-.0587.0491-.094.064l-.0228.0092c-.4112.1591-.7588.4486-.9897.8242s-.3322.8166-.2885 1.2553c.0443.3877.1928.7562.4296 1.0664.21.2635.5015.4499.8288.5301.0736.0194.1484.0342.2239.0442.0792.0102.1564.0183.2316.0244.1384.0097.2774.0097.4159 0 .2139-.0066.4231-.0652.6093-.1706.3047-.1874.4007-.3977.4434-.3702.0167.0076.0091.0655-.029.166-.0649.1473-.1623.2781-.2849.3824-.2014.1636-.4437.2689-.7007.3047-.1541.0256-.31.0389-.4662.0396-.0823 0-.1656 0-.2499 0-.0935-.0045-.1866-.0152-.2787-.032-.4244-.0768-.8101-.2954-1.0939-.62-.3157-.3695-.521-.8204-.5926-1.3011-.0783-.5443.0291-1.0992.3047-1.5752.2866-.522.7517-.9233 1.3101-1.1304l-.1645.4022-.0838-.1858c-.0228-.064-.0487-.1265-.0701-.192-.1795-.573-.1895-1.1856-.0289-1.7641.0739-.272.1819-.5336.3215-.7785.1288-.2228.2697-.4385.4219-.646.2956-.4067.6231-.7464.8943-1.06636.2517-.28403.4648-.60009.6337-.93996.1414-.27918.2488-.57429.32-.87903.0485-.23077.0679-.4667.0579-.7023-.0198-.38695-.0732-.6109-.0305-.62461z"
					}), r.a.createElement("path", {
						d: "m11.7475 15.5359c.0397.0198-.0121.1751-.0487.457-.0497.3816-.0079.7696.1219 1.1319.0832.2572.2266.4908.4181.6816.1916.1907.4258.3331.6833.4153.2964.1041.6157.1251.9232.0609.3275-.0754.6263-.2436.8608-.4844.0439-.0439.1008-.0725.1623-.0816.0614-.009.1242.0019.1789.0313l.0229.0122.131.0716c.3301.1294.6855.1815 1.039.1523.3483-.0224.6927-.0874 1.0252-.1935.2948-.0892.572-.2283.8196-.4113.2096-.1663.3885-.3678.5287-.5957.2115-.3484.3397-.741.3747-1.1471.0275-.2879.0153-.457.0595-.4677.0441-.0107.1233.1523.1675.457.0501.4566-.033.918-.2392 1.3285-.1429.2883-.3393.5468-.5789.7617-.2813.2401-.6046.426-.9536.5484-.3748.137-.7663.2231-1.1639.256-.4489.0469-.9024-.017-1.3209-.1859-.07-.0335-.1371-.0746-.2056-.1112l.3626-.0381c-.3113.3274-.7135.554-1.1548.6505-.409.0775-.8316.0374-1.2188-.1158-.1777-.0673-.3469-.1553-.5042-.262-.1473-.1097-.279-.2388-.3915-.3839-.2342-.2994-.39-.6525-.4534-1.0273-.0633-.3748-.0321-.7595.0908-1.1192.1112-.291.2346-.4083.2635-.3915z"
					}), r.a.createElement("path", {
						d: "m12.5288 4.12384c.0335.12188-.6551.38696-1.2964.98567-.6414.59871-.9766 1.24922-1.0939 1.20504-.0533-.01981-.0411-.2209.0792-.51797.1677-.38261.4134-.72603.7214-1.00828.3079-.28226.6714-.49715 1.0672-.63094.3062-.09902.5073-.08836.5225-.03352z"
					}), r.a.createElement("path", {
						d: "m11.1488 3.92917c.0243.12492-.6734.33058-1.32543.89273s-.98262 1.20199-1.10145 1.15781c-.05332-.0198-.04265-.21937.07922-.51187.171-.37717.42374-.71159.73992-.97903.31619-.26744.68794-.4612 1.08824-.56726.3107-.0716.5088-.04723.5195.00762z"
					}), r.a.createElement("path", {
						d: "m16.3803 10.1901c-.1097-.067.3915-.97041.5347-2.19678s-.1005-2.22269.0229-2.26078c.0533-.01676.1935.2148.3047.63223.0647.24543.1066.49635.1249.74953.0464.62313-.0318 1.24927-.23 1.84183-.0799.24049-.1819.47305-.3047.69469-.2118.37938-.4053.56978-.4525.53928z"
					}), r.a.createElement("path", {
						d: "m18.9885 16.1546c-.064-.0137-.0412-.2773-.1036-.6749-.0645-.5111-.2722-.9936-.5992-1.3918-.327-.3981-.7599-.6957-1.2488-.8583-.3793-.1356-.6413-.163-.6429-.23-.0015-.0671.2697-.1402.7191-.0686.5932.102 1.1302.4135 1.5132.8779.383.4643.5866 1.0507.5739 1.6525-.0167.4555-.1538.7069-.2117.6932z"
					}), r.a.createElement("path", {
						d: "m14.8916 15.5424c0 .0549-.2575.0945-.6475-.0213-.5113-.1635-.9518-.4959-1.2494-.9426-.2976-.4468-.4345-.9814-.3882-1.5162.0426-.4038.1767-.6216.2285-.6094s.0411.2513.0792.6094c.0371.4555.1895.8941.443 1.2745.2535.3803.5996.6898 1.0058.8994.3138.1721.5377.2483.5286.3062z"
					}), r.a.createElement("path", {
						d: "m17.5289 17.9844c.0198.0518-.1813.1919-.5546.3047-.2195.0627-.4453.1005-.6733.1127-.2821.0127-.5646-.0104-.841-.0685-.5039-.1057-.972-.3398-1.3589-.6795-.2879-.2651-.4021-.4799-.3625-.5164.0396-.0366.2376.0883.5454.2681.3936.2324.8213.4016 1.2675.5012.2454.051.4945.082.7449.0929.2078.0059.4158.0008.6231-.0152.358-.029.5896-.0625.6094 0z"
					}), r.a.createElement("path", {
						d: "m2.90817 17.6644c.02743-.0336.16758.0441.422.1447.35517.1372.73285.207 1.11363.2056.2607-.0006.52062-.0286.77543-.0837.29447-.0691.58245-.1634.86074-.2819.6451-.2903 1.25785-.6478 1.82813-1.0664.3184-.2194.63527-.4357.95215-.6337.16005-.1033.32643-.1964.49816-.2788.16632-.0783.33786-.145.5134-.1996.33819-.1066.66119-.1691.94909-.2316.2657-.0562.5281-.1269.7861-.2117.9461-.291 1.3894-.7419 1.4503-.6856.0274.0229-.0411.1783-.2529.39-.3054.2895-.6618.5198-1.0511.6795-.2631.1148-.5339.2111-.8105.2879-.2925.0838-.5957.1615-.8943.2712-.1517.0544-.29977.1185-.44329.1919-.15014.0784-.29562.1654-.43571.2605-.30468.1966-.60937.4114-.92929.6323-.60607.446-1.26645.8131-1.96524 1.0923-.31459.118-.64019.2042-.97195.2574-.29262.0427-.58936.0493-.8836.0198-.42771-.0359-.83949-.1789-1.19742-.4159-.24527-.1751-.33668-.3168-.31383-.3442z"
					}), r.a.createElement("path", {
						d: "m6.225 5.96731c.03504.03047-.11882.24832-.27269.70688-.15387.45855-.32906 1.14257-.64289 1.98046-.35795 1.00905-.94757 1.92005-1.72149 2.65995-.44789.4128-.98261.7419-1.41984 1.1365-.22006.1952-.41046.4216-.5652.6718-.15641.2581-.27396.5379-.34886.8303-.1496.5767-.109 1.1864.11578 1.7382.2033.5106.57035.9393 1.04355 1.2188.43841.246.94.3563 1.44117.3168.4522-.035.89467-.1495 1.30711-.3382.62316-.2632 1.19822-.6282 1.70168-1.0801.36106-.3214.55149-.521.585-.4921.03352.029-.09902.2682-.42351.6521-.46912.5411-1.04342.9812-1.68797 1.2934-.4486.2367-.93728.3881-1.44117.4463-.60087.0697-1.20871-.0451-1.74282-.329-.59015-.3284-1.05149-.8472-1.308628-1.4717-.279975-.664-.334037-1.4015-.153867-2.0993.089401-.3498.231157-.6842.420465-.9917.18513-.296.41307-.563.67641-.7922.24386-.2077.49809-.403.76172-.585.24527-.1767.47683-.3473.68707-.5286.39554-.3476.74199-.7474 1.02984-1.18832.25632-.38967.48001-.79986.66879-1.22636.34278-.78153.57586-1.46707.81199-1.91344.23614-.44637.45551-.63984.47836-.61547z"
					}), r.a.createElement("path", {
						d: "m7.61001 17.0368c-.01371-.0229.07312-.096.22852-.227.21967-.1779.4162-.3826.585-.6094.11178-.1553.19769-.3276.25441-.5103.06503-.2047.08222-.4215.05027-.6338-.0336-.226-.14711-.4325-.31992-.5819-.08594-.0808-.18875-.1414-.30099-.1775-.11225-.0361-.23111-.0467-.34799-.0312-.04085.0077-.08309.0029-.12121-.0136-.03812-.0166-.07037-.0443-.09255-.0795-.02219-.0351-.03328-.0762-.03183-.1177.00144-.0416.01535-.0817.03992-.1153.15099-.206.25783-.4409.31383-.6901.0588-.2522.04721-.5157-.03352-.7617-.06006-.1925-.16964-.3659-.31775-.5028s-.32957-.2325-.52623-.2772c-.18409-.0295-.37273-.0078-.54539.0625-.16009.0641-.29709.1751-.39305.3184v.0076c-.02289.0359-.05711.0632-.09724.0776-.04014.0144-.08391.0149-.12442.0017-.0405-.0133-.07544-.0397-.0993-.075s-.03529-.0776-.03247-.1201c.00897-.1905-.02689-.3804-.10468-.5545s-.19534-.3275-.34321-.4479c-.2408-.1906-.54594-.2806-.85161-.2514-.20637.0174-.40675.0781-.58804.1783-.12797.07-.195.1203-.21176.1035-.01676-.0167.02437-.0914.14168-.2026.17711-.1566.39359-.2619.62613-.3047.16814-.034.3411-.0371.51035-.0091.2035.0334.39676.1126.5652.2316.2034.1439.36838.3356.48046.5582.11209.2226.16786.4693.16243.7184l-.35801-.1097c.1399-.2193.34103-.3927.5785-.4989.23747-.1061.50086-.1403.75756-.0983.27463.053.52991.1791.73901.3648.2091.1858.36429.4245.44927.691.10765.3236.12191.671.04113 1.0024-.07296.3061-.21004.5932-.40219.8425l-.20109-.3306c.17731-.0238.3577-.0071.52763.0488s.32497.1497.45346.2741c.2323.2134.37995.5033.4159.8166.02715.2664-.00994.5354-.10816.7846-.08209.2088-.20017.4017-.34887.5697-.20103.2307-.44204.4232-.71145.5683-.18586.099-.29707.131-.30773.1112z"
					}), r.a.createElement("path", {
						d: "m1.63036 14.9239c-.05028-.0671.02742-.2026.10054-.4037.0973-.242.14496-.501.14016-.7618-.00623-.1382-.03082-.275-.07313-.4067-.02438-.0824-.06591-.1587-.12187-.224-.04305-.0401-.0954-.0689-.15235-.0837-.05179-.0153-.10207-.0122-.13253-.0381-.03047-.0259-.03657-.0899.03503-.1646.05278-.0478.11654-.0819.18564-.0991.06909-.0173.14139-.0173.21046.0001.09781.0283.18881.0762.26741.1409s.14313.1448.18962.2354c.14254.2601.1987.5588.16036.8529-.03833.2941-.16918.5684-.37364.7833-.20414.2026-.39305.23-.4357.1691z"
					}), r.a.createElement("path", {
						d: "m3.30922 14.9463c.00761-.0838.2148-.1218.47836-.2529.15103-.0716.29108-.1645.41589-.2757.14195-.126.25387-.2821.32754-.457.02539-.0616.03666-.1281.033-.1946-.00367-.0666-.02218-.1314-.05417-.1899-.03199-.0584-.07666-.1089-.13073-.1479-.05407-.0389-.11616-.0652-.18173-.077-.24375-.0457-.42504.0685-.48598.0152-.02894-.0243-.02742-.0959.04266-.1889.10853-.1306.26266-.215.43113-.2361.1238-.0188.25029-.0073.36868.0335.13848.0489.26222.1322.35953.2422.10996.1238.18329.2757.21175.4388.02862.1723.0102.3491-.05332.5119-.09984.2397-.25932.45-.4633.6108-.20397.1607-.44567.2667-.70213.3078-.15219.0271-.30857.0187-.45703-.0244-.09445-.035-.1432-.0777-.14015-.1158z"
					})), r.a.createElement("path", {
						d: "m3.53778 4.27334c.35264.00703.70225-.06643 1.02223-.2148.5652-.30469.58653-1.05879.69317-1.70473l-.68707-.57586-.29098-.29097c-.40265-.06883-.81671-.01302-1.18676.15996-.11314.03509-.21026.109-.27422.20871-.04419.13436-.03491.28058.0259.40828.20871.67336.43723 1.34824.69773 2.00941z",
						fill: "#fcff78"
					}), r.a.createElement("path", {
						d: "m6.92588 3.76312-1.45336-1.21875c-.08836.62309-.10817 1.28121-.66879 1.66207-.31535.21481-.73582.28793-1.16848.30469.28754.71505.63298 1.40543 1.03289 2.06426.56368.13254 1.12582.15234 1.6636-.21176.81047-.54691.7084-1.71844.59414-2.60051z",
						fill: "#34e2ac"
					}), r.a.createElement("path", {
						d: "m8.74027 5.59247c-.30468-.5591-.8059-.98262-1.2934-1.39242l-.24832-.20719c.0975.87293.10665 1.89668-.59871 2.47558-.54843.45704-1.14867.49665-1.75804.39.19381.29675.40386.58258.62918.85618.30468.35953.64593.70839 1.0923.8455.39305.12036.81809.06246 1.21875 0 .23991-.04098.4642-.14628.64899-.30468.23423-.14822.41471-.36769.51492-.62614.19905-.67984.12528-1.4105-.20567-2.03683z",
						fill: "#4ab6ff"
					}), r.a.createElement("path", {
						d: "m3.63372 1.50807c-.00915.02133-.07922 0-.20262.01066-.17338.01719-.33517.09486-.45703.21938-.08963.10119-.15545.22118-.19262.35115s-.04475.26662-.02219.3999c.03199.32297.21176.66727.45703 1.05117.47989.78 1.04203 1.71387 1.65903 2.75438l.47226.79828c.14562.26333.3215.50874.52407.73125.09393.10008.20166.18626.31992.25594.12269.06894.2545.12023.39152.15234.29024.05902.59075.04276.87293-.04723.14265-.04381.27929-.10522.40676-.18281.12585-.08503.24364-.18141.35191-.28793.21371-.19425.37641-.43804.47379-.70992.18434-.52102 0-1.09231-.33515-1.52344-.33516-.43113-.79067-.79371-1.1959-1.13648l-1.15782-.94149c-1.42593-1.13953-2.32629-1.82812-2.28515-1.89668.04113-.06855 1.02832.50578 2.52586 1.56914.37324.26661.78.56368 1.20961.89121.42961.32754.91406.67336 1.32082 1.18981.21796.26961.37913.58054.47379.91406.0477.17942.07177.36431.0716.54996-.00338.19142-.03469.38131-.09293.56368-.12117.36293-.33056.6901-.60938.95214-.1406.13226-.29366.25062-.45703.35344-.16878.10363-.34998.18553-.53929.24375-.37848.12012-.78173.13955-1.17001.05637-.19307-.04362-.37883-.11494-.55148-.21176-.16901-.097-.32297-.21811-.45703-.35953-.23145-.25682-.43095-.54072-.59414-.84551l-.45703-.81047c-.5911-1.05574-1.11668-2.01093-1.55086-2.81683-.2209-.40067-.41438-.82266-.42047-1.23551-.0138-.17693.01449-.35461.08254-.51851.06804-.16391.17393-.30937.30898-.4245.08602-.06939.18569-.1199.29251-.14825.10683-.02835.21842-.03389.32753-.01628.15844.03047.21328.09141.20567.10512z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m4.46393 6.19913c-.07008.03961-.40371-.44332-.88664-1.25836-.24223-.40675-.52102-.8973-.82266-1.44574-.07617-.13558-.15234-.27879-.22395-.43722-.07862-.16703-.13841-.34229-.17824-.52254-.04674-.20918-.04674-.4261 0-.63528.05176-.237.17898-.45082.36258-.60937.19251-.15305.43201-.23486.67793-.23156.21542.00414.42722.05618.62004.15234.16671.07743.32497.17188.47226.28184.13711.10359.25747.20261.38086.30468.4875.38848.91407.74496 1.27969 1.05117.71906.60938 1.13801 1.02223 1.09078 1.08622-.04722.06398-.55605-.23157-1.3391-.76172-.39152-.26356-.85008-.58653-1.35586-.95215-.23758-.19065-.49262-.35846-.76172-.50121-.24527-.11426-.53929-.11578-.69164.01676-.08628.07832-.14594.18165-.17062.29554-.02806.12849-.02806.26152 0 .39.07188.29274.18147.5749.32601.83942.2727.55757.51188 1.0664.70535 1.49144.38086.85617.585 1.40766.51493 1.44574z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m3.32259 4.185c.04265-.05027.22089.06856.50425.05637.17023-.01048.33705-.05232.49207-.1234.09475-.04162.18639-.08999.27422-.14473.08767-.05455.16761-.12065.23766-.19652.24239-.29049.364-.66295.33973-1.04051-.00975-.12051-.03484-.23928-.07465-.35343-.02743-.08836-.03809-.15235-.01371-.16454.02437-.01218.07921 0 .15234.07161.11052.10274.19152.23319.23461.37781.06054.21354.072.43801.03351.6566-.04331.27667-.16671.53459-.35496.74191-.09867.10747-.21387.1985-.34125.26965-.11202.0622-.22989.11323-.35191.15235-.21234.07339-.43982.09174-.66117.05332-.1515-.02712-.29151-.09872-.40219-.20567-.07008-.07008-.09445-.12492-.06855-.15082z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m4.604 6.28436c.03047-.00914.0716.05637.13864.15234.03548.05467.08035.10264.13253.14168.06723.04371.1441.07037.22395.0777.05049.00737.10135.01195.15234.01371.05353.00107.10705-.00249.15996-.01067.12363-.02073.24399-.05761.35801-.10968.26973-.11881.50848-.29813.69774-.52407.18908-.22808.32585-.49485.40066-.78152.06123-.2426.09295-.49171.09445-.74191 0-.42047-.15234-.67184-.09445-.7084.02285-.01523.09141.02437.1752.13406.11597.16041.19315.34554.22546.54082.04641.28689.0428.57965-.01066.86531-.06644.35874-.2238.69444-.45703.975-.23468.28133-.54026.49486-.88512.61852-.15255.05626-.31288.08863-.47531.09598-.077.00278-.15408-.00232-.23004-.01524-.06368-.0138-.1263-.03213-.18738-.05484-.12349-.03615-.23401-.10701-.3184-.20414-.05878-.07254-.09904-.15829-.11731-.24985-.02742-.13254-.01066-.20718.01676-.2148z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m14.8962 8.86965c.8394-1.7809.3564-5.85914-2.2502-7.58672-.6194.71264-1.0159 1.59151-1.1402 2.5275s.029 1.88788.441 2.7375",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m11.9471 6.54651c-.0289.01371-.1264-.10816-.2575-.35953-.178-.36602-.3017-.75607-.3671-1.15781-.1063-.61415-.0898-1.24329.0487-1.85098.1786-.77188.5449-1.48774 1.0664-2.08406v-.00762c.0445-.05081.1065-.08307.1736-.090408.0672-.007334.1346.010798.189.050798l.2956.21937c.1024.07061.1991.14905.2894.23461.1902.16824.367.3511.5287.54692.0807.09902.1675.19347.2391.29707l.2103.30469c.0335.05179.07.10207.102.15234l.0884.16148.1691.32602c.099.21633.195.43113.2773.64441l.1081.32145c.0376.10373.0691.20953.0945.31687.2039.74383.2933 1.5144.2651 2.28516-.0097.52011-.106 1.03497-.2849 1.52344-.0465.13373-.1094.26116-.1874.37933-.0518.08227-.0884.11883-.1066.11121-.0183-.00761-.0183-.06246 0-.15234.0182-.08988.0563-.2209.0777-.39609.0863-.48239.117-.97311.0914-1.4625-.0309-.72382-.1548-1.44065-.3687-2.13282-.0269-.09929-.0594-.19695-.0975-.2925l-.1097-.29554c-.0807-.19653-.1737-.39153-.2681-.58957l-.163-.28946-.0823-.15234c-.0289-.04723-.0625-.09293-.0945-.14016l-.1843-.28031c-.0655-.09293-.1523-.17672-.2163-.2666-.1443-.1766-.3017-.34211-.4708-.49512-.0811-.07598-.1682-.14527-.2605-.20718l-.2589-.19957.3762-.05028c-.4697.52458-.8126 1.15003-1.0024 1.82813-.1534.54814-.2101 1.11883-.1676 1.68644.0747.97196.3382 1.52953.2575 1.56305z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m12.4756 10.9713c.6932-.9314.556-2.20692-.3066-2.84893-.8626-.642-2.1238-.40739-2.81708.52403-.69325.93142-.55598 2.2069.30659 2.8489.86259.6421 2.12379.4074 2.81709-.524z",
						fill: "#b8e7ff"
					}), r.a.createElement("path", {
						d: "m12.6477 11.0997c-.3495.475-.8556.8112-1.429.9491-.2925.0698-.596.0806-.8927.032-.3037-.0513-.59239-.1689-.84553-.3443-.256-.1803-.47062-.4131-.62955-.6829s-.25852-.5704-.29213-.8817c-.0368-.31289-.01301-.62995.07008-.93385.16819-.60576.55597-1.12715 1.08773-1.4625.26428-.1668.558-.28159.8653-.33821.308-.05723.6247-.04811.9289.02676s.589.21377.8353.40742c.2408.1922.4364.43511.5728.71145.1316.27014.2083.56376.2254.86379.036.59244-.1401 1.17834-.4966 1.65294zm-.3458-.2575c.1408-.1938.2465-.4109.3123-.6413.0626-.22856.0807-.46699.0533-.70234-.0262-.22746-.1011-.4466-.2197-.64247-.1185-.19586-.278-.36385-.4674-.4925-.1832-.12067-.39-.20124-.6066-.23642s-.4382-.02418-.6502.03228c-.4264.11149-.80187.3653-1.06425.71939s-.39591.7872-.37845 1.22756c.00711.2192.06045.4345.15654.6316.09609.1972.23275.3718.40104.5125.17772.143.38412.2461.60512.3023.2211.0562.4516.0643.6761.0237.2336-.0413.457-.1271.6581-.2529.2016-.1291.379-.2925.5241-.4829z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m11.734 10.3357c.3564-.72954.0761-1.59909-.6262-1.94222-.7023-.34314-1.56058-.02993-1.91701.69958-.35643.7295-.07606 1.59904.62623 1.94214.70228.3432 1.56058.03 1.91698-.6995z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m10.6281 9.66417c.0662-.43647-.2192-.84166-.63736-.90502-.41814-.06335-.81073.23912-.87686.67559s.21923.84166.63738.90506c.41814.0633.81074-.2392.87684-.67563z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m11.5831 11.1074c.3374 0 .6109-.2851.6109-.6368s-.2735-.6368-.6109-.6368-.6109.2851-.6109.6368.2735.6368.6109.6368z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m12.8948 6.65901c-.0594-.02894.0366-.31687.1158-.78304l.0305-.18282.0228-.20109c.0214-.13711.0244-.28793.0366-.44332.0143-.33972.0097-.67997-.0137-1.01918-.0458-.61737-.1478-1.22927-.3047-1.82812-.1204-.45704-.2224-.74801-.1661-.78.0564-.032.2529.2148.4571.67793.2577.60474.4122 1.24843.457 1.90429.0235.35959.0148.72055-.0259 1.0786-.0259.16605-.0427.32449-.0807.46922l-.0503.21023-.061.19043c-.1706.48293-.3732.73277-.4174.70687z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m1.41844 16.2901c.07617-.0472.30469.2834.83789.5652.30658.1598.63944.263.98262.3047.42089.046.8467.0098 1.25379-.1066.88359-.2438 1.57828-.7617 2.06425-1.1639.48598-.4022.7861-.6734.85008-.6201.06399.0534-.12797.4129-.56519.9141-.26033.2951-.55316.5598-.87293.7891-.40061.2889-.84865.5054-1.32387.6399-.48542.1386-.99614.1641-1.49297.0746-.40609-.0764-.78949-.2442-1.12125-.4905-.222-.1628-.40729-.3704-.54387-.6094-.08836-.1676-.10054-.2773-.06855-.2971z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m1.2085 15.8394c.70843.486 1.55388.7323 2.4125.703s1.68528-.3328 2.3589-.8661c.23004-.2064.4744-.3963.73125-.5682.12943-.0849.27578-.1405.42889-.1632.15311-.0226.30931-.0116.45775.0322.15254.0661.2835.1737.37801.3105s.14881.2973.15672.4634c.00895.3331-.1037.658-.31688.9141-.21295.2544-.46491.4734-.74648.6489-.83941.5637-1.8525.9933-2.84426.7998-.54082-.1051-1.02984-.3884-1.50515-.6657-.21368-.1179-.41747-.2529-.60938-.4037-.3144-.2606-.5528-.6011-.69012-.9857",
						fill: "#ff85c6"
					}), r.a.createElement("path", {
						d: "m13.3224 5.51322c-.0032.29968-.0637.59597-.1782.87293-.0542.13337-.1411.25098-.2526.34202-.1116.09103-.2442.15259-.3857.179-.3321.03351-.6445-.22242-.7983-.54082-.134-.3332-.1968-.69074-.1844-1.04965-.0259-.98719.061-2.0216.4571-2.92348.1523-.35496.457-1.05422.7845-.45703.2514.45703.3596 1.10754.4479 1.62856.1099.64328.1467 1.29692.1097 1.94847z",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m2.43311 1.8313c.4357-.66727 5.62605 6.34054 5.62605 6.34054l-.4677.41742-1.76566-.26507z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m15.2968 5.96724c1.0832.9293 1.5783 2.68734 1.1944 4.06296 1.4335-1.13034 1.0999 1.88 0 2.9631.2803-.1081.844.2057 1.0222.4479.163.2547.2526.5493.259.8516.0566.6477-.0536 1.2991-.3199 1.8921-.6414 1.4062-2.9829 1.4808-3.6776.972-.1356.5332-.5698.9658-1.3071 1.106.9262.5225 1.7184.4951 2.4253-.3047.8805.2544 2.3628 0 3.1337-.4875s1.2584-1.4579 1.0664-2.3522c-.1341-.6093-.55-1.1197-.7389-1.7154-.227-.7145-.1112-1.4899.0336-2.2257.1447-.7358.3168-1.4884.195-2.22879-.1219-.74039-.6201-1.47622-1.3559-1.62094.0186-.79515-.2157-1.57567-.6691-2.22917-.4533-.6535-1.1024-1.14624-1.8537-1.40728l.5515 2.145",
						fill: "#7e53c1",
						opacity: ".67"
					}), r.a.createElement("path", {
						d: "m14.8307 4.86442c.113 1.0501.0543 2.11159-.1737 3.14285-.2483 1.02375-.7724 1.69559-1.5889 2.96003-1.3666 2.1145-4.16206 4.2123-4.16206 4.2123l-.21024 1.106s3.0012-.914 3.9229-1.5539c.1995-.361.2909-1.2187.3382-1.6316.0895-.7608.3635-1.4883.7982-2.1191.3443-.4997.7298-.8927 1.0375-1.41678.4246-.75116.6314-1.60579.5972-2.46797-.0544-.8398-.2078-1.67024-.457-2.47406",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m13.8086 14.0707c-.0274 0-.0761-.0807-.1173-.2514-.0508-.2446-.058-.4963-.0213-.7434.0512-.3631.1538-.717.3047-1.0512.1823-.399.3931-.7844.6307-1.1532.2422-.387.4677-.7511.6444-1.09233.1603-.2979.29-.61131.387-.93539.1523-.55148.1173-.9232.1858-.93387.0274 0 .0731.08227.1097.25442.0428.24545.0428.49646 0 .74191-.0594.36166-.1686.71336-.3245 1.04508-.1865.39658-.3992.78038-.6368 1.14868-.2422.3854-.457.751-.6368 1.0938-.156.299-.2801.6135-.3702.9385-.1417.5545-.0883.9262-.1554.9384z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m14.9072 14.0231c-.0564 0-.1326-.1752-.1524-.4829-.0454-.8133.2322-1.6116.7724-2.2212.2102-.2255.3824-.3199.4235-.2803.0914.0868-.3458.652-.6185 1.4579s-.3047 1.5143-.425 1.5265z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m6.19165 7.1707c-.01219-.06246.12949-.13559.32297-.2666.24618-.1607.45882-.36765.62613-.60938.15866-.24732.26783-.52308.32144-.81199.04723-.22852.05942-.38848.12036-.40067.06093-.01218.15234.13407.18738.41133.03174.3671-.06183.73413-.26546 1.04123-.20362.30709-.50528.53614-.85579.64979-.27117.07312-.44637.04266-.45703-.01371z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m4.43023 4.76671c0-.12035.43114-.18434.76172-.50273.33059-.3184.43571-.72821.55758-.72668.05789 0 .11731.1234.10207.33058-.03163.27398-.1599.52771-.36178.71562-.20187.18791-.46413.2977-.73966.30966-.20567 0-.32297-.07313-.31993-.12645z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m3.40812 2.70883c.30037 0 .54387-.2435.54387-.54387s-.2435-.54387-.54387-.54387c-.30036 0-.54386.2435-.54386.54387s.2435.54387.54386.54387z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m16.4716 14.2914c.0168-.0213.0915-.0076.192.0808.1373.1344.2244.3119.2468.5027.0418.2872-.0268.5795-.192.8181-.202.2785-.4875.4856-.815.5911-.5639.1875-1.1772.1593-1.7215-.0792-.4067-.1844-.585-.4037-.5515-.4464.0336-.0427.2682.0625.6521.1523.2215.0538.4484.082.6764.0838.2721.0041.543-.0376.8013-.1234.2476-.0783.4686-.2238.6383-.4204.1276-.1591.2003-.3553.2072-.5591.0152-.3641-.1782-.5515-.1341-.6003z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m12.6798 17.3567c-.0442.0365-.1813-.0305-.3199-.2255-.1735-.264-.2528-.5787-.2251-.8933.0276-.3146.1606-.6107.3774-.8404.1691-.1691.3169-.2117.3535-.1691.0365.0427-.0229.1676-.1021.3458-.2153.4435-.2582.9512-.1204 1.4245.0412.1904.0854.3138.0366.358z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m12.6432.993331c.0549.001261.1081.019339.1524.051799l.2955.21937c.1024.0706.1992.14904.2895.23461.1902.16823.3669.3511.5286.54692.0807.09902.1676.19347.2392.29707l.2102.30468c.0335.0518.0701.10207.1021.15235l.0883.16148.1311.24223c.1523.0716.3123.15234.457.23613.4808.277.916.62641 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1365.37028.2007.76334.1889 1.15781.2065.0822.3969.20031.5622.34887.2183.19639.3963.43337.524.69773.2368.4925.3602 1.03182.3611 1.57829.0037.26323-.0198.52615-.0701.78455-.0515.2498-.1264.4941-.2239.7297-.1752.4479-.3459.8471-.3352 1.231.0236.4022.1338.7945.323 1.1502.1737.3763.3763.748.5149 1.1486.0732.1995.1243.4064.1523.617.0251.2055.0251.4131 0 .6186-.049.3813-.1782.7478-.3793 1.0755-.1265.2034-.2802.3884-.457.55-.032.032-.0625.0655-.096.0959-.2813.2401-.6047.4261-.9537.5485-.3748.1369-.7662.223-1.1639.2559-.096 0-.1935.0107-.2925.0107-.3527.0071-.703-.0598-1.0283-.1965-.2835.2425-.6235.4096-.9887.4859-.1309.0263-.2641.0396-.3976.0396-.1308 0-.2613-.0118-.39-.035-.0691-.0034-.1379-.0121-.2057-.0259-.4243-.0768-.81-.2954-1.0938-.62-.3157-.3695-.5211-.8204-.5926-1.3011-.0692-.4618-.0031-.9338.1904-1.3589-.1661.0625-.3413.1219-.5256.1737-.2925.0838-.5957.1615-.8942.2712-.15177.0544-.29985.1185-.44337.1919-.15013.0784-.29561.1654-.4357.2605-.30469.1966-.60938.4114-.9293.6323-.60606.446-1.26645.8131-1.96523 1.0923-.31459.118-.6402.2042-.97196.2574-.1751.0251-.35174.0378-.52863.0381-.11856.0001-.23704-.006-.35496-.0183-.42771-.0359-.8395-.1789-1.19742-.4159-.24527-.1736-.3382-.3168-.31535-.3427.0035-.0009.00716-.0009.01066 0-.26616-.056-.52276-.1504-.76172-.2803-.59015-.3284-1.05149-.8472-1.308629-1.4717-.285418-.6678-.341666-1.4113-.159961-2.1145.089401-.3499.231157-.6843.42047-.9918.18512-.296.41306-.5629.6764-.7922.24386-.2077.49809-.403.76172-.585.24528-.1767.47684-.3473.68707-.5286.39554-.3476.742-.7473 1.02985-1.18827.25631-.38968.48-.79987.66879-1.22637.09293-.21023.17672-.41133.25593-.60937-.11902-.16844-.22936-.34285-.33058-.52254l-.45703-.81047c-.5911-1.05574-1.11668-2.01094-1.55086-2.81684-.12458-.21556-.23059-.44134-.31688-.67488-.08052-.16829-.14184-.3451-.18281-.52711-.04675-.20918-.04675-.4261 0-.63527.05176-.237.17898-.45082.36258-.60938.19129-.15206.429-.2338.67336-.23156h.00914c.2118.00575.41978.05775.60937.15234.16882.07706.32914.17152.47836.28184.13711.10359.25746.20262.38086.30469.4875.38847.91406.74496 1.27969 1.05117.40066.34125.7084.62004.89273.81047l.41743.30773.04418.03352c.02807-.2051.06723-.40852.1173-.60938.12074-.49951.29704-.98394.52559-1.44422.04547-.10165.09632-.20082.15234-.29707l.16453-.28793c.0182-.03202.04252-.06014.07159-.08275.02907-.02262.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03654.00457.07183.01631.10383.03453l.02743.01828c.38016.28079.7368.59209 1.0664.93082.21773.22749.42123.46813.60933.72058.3091-.0716.6226-.12249.9385-.15234.2026-.61813.5268-1.18947.9537-1.68035v-.00762c.0251-.02912.0562-.05248.0911-.06852.035-.01603.073-.024358.1115-.024409zm-7.59736 2.437499c.06405-.15644.10312-.32197.11578-.49055-.02525.16638-.06397.33044-.11578.49055zm-.73125 7.08097.03351-.0076c.02133-.0397.04114-.0808.06094-.1204l-.09293.128zm-.28793.3565c.04937-.0282.10023-.0536.15234-.0762l.02285-.0351c-.03808.0092-.07312.0183-.10664.029l-.07008.0807zm-1.00395 6.8143h-.00761zm9.62049-16.910168c-.0696-.000201-.1385.014672-.2019.043598s-.1197.07122-.1652.123981v.007617c-.4115.478212-.7312 1.028242-.943 1.622462-.2316.02742-.4571.06551-.6902.11426-.1682-.21931-.3483-.42934-.5392-.62918-.33831-.34598-.70412-.6639-1.09388-.95063l-.05027-.03199c-.05671-.03237-.11923-.05323-.18401-.06141-.06478-.00817-.13053-.00349-.1935.01377-.06296.01726-.12191.04677-.17346.08684-.05155.04006-.09469.0899-.12696.14666l-.1691.28336c-.06001.09869-.11492.20038-.16453.30469-.2348.4748-.4152.97461-.53778 1.48992-.02285.08988-.04418.18129-.06246.27726l-.16301-.12187c-.19195-.195-.49359-.4677-.8973-.80438-.36715-.30468-.79981-.66726-1.28578-1.05574l-.09598-.07617c-.08531-.08684-.18586-.15539-.28945-.23918-.15921-.11881-.33023-.22091-.51035-.30469-.22066-.10615-.46202-.162328-.70688-.164529l-.00914.216329v-.223946c-.29523-.003494-.58241.096186-.81199.281836-.21874.18764-.37103.44092-.43418.72211-.0536.24029-.0536.48944 0 .72973.04217.19688.10603.38848.19043.57128.08802.24388.19657.47984.32449.70536.44027.81808.96281 1.76414 1.55238 2.81683l.45704.81199c.0716.12493.16453.28184.27421.44333-.07464.18281-.14168.33972-.20871.48902-.18354.41537-.40112.81486-.65051 1.19437-.2769.42478-.61058.80968-.99175 1.14408-.21328.1844-.44942.358-.67184.518l-.0716.0518c-.24432.1701-.47974.3527-.70535.5469-.27965.2431-.52148.5265-.717541.8409-.201003.3259-.351499.6803-.446367 1.0512-.191573.7431-.132671 1.5287.167578 2.2349.277385.6687.77228 1.2242 1.40461 1.5768.21839.1184.45074.2089.69164.2696.09693.1355.21773.2521.35648.3443.38841.2581.83506.4151 1.2995.457.1255.0132.25161.0198.37781.0198.18655-.0002.37287-.0134.55758-.0396.34488-.0565.68324-.1473 1.01004-.2711.7161-.2867 1.39326-.6624 2.0155-1.1182l.18586-.128c.25594-.1767.49817-.3443.73887-.5012.13372-.0908.27259-.1737.4159-.2483.1356-.0694.27554-.13.41896-.1813.227-.0823.457-.1524.6871-.2118l.1934-.0548.1173-.0351c-.0901.3419-.1088.6987-.0548 1.0481.0765.5219.3 1.0113.6444 1.4107.3166.3609.7463.6037 1.2188.6886.0723.015.1456.0246.2193.029.1379.0242.2775.0364.4175.0366.1478.0002.2952-.0141.4402-.0427.3588-.0709.6965-.2231.9872-.4448.3197.1159.6578.1727.9979.1675.0959 0 .1965 0 .3047-.0106.4164-.0353.8263-.126 1.2187-.2697.375-.1317.7222-.3322 1.0238-.5911.0289-.0259.0533-.0518.0776-.0777l.0244-.0259c.1885-.174.3525-.3729.4875-.5911.2169-.3543.3565-.7504.4098-1.1623.0271-.2227.0271-.4477 0-.6704-.0266-.2257-.0777-.4479-.1523-.6627-.107-.2909-.2312-.5753-.3717-.8516-.0518-.1066-.1036-.2117-.1524-.3184-.176-.3298-.2798-.6933-.3047-1.0664-.0091-.3184.125-.6596.2819-1.0542l.0396-.099c.1028-.2484.1819-.506.2361-.7693.0531-.2709.0776-.54668.0731-.8227-.0008-.5803-.132-1.153-.3839-1.67578-.1406-.28852-.3356-.54716-.5743-.76172-.1482-.13199-.3144-.24227-.4936-.32753-.0056-.36454-.0704-.72574-.192-1.06946-.2059-.57305-.5256-1.09851-.9399-1.54476-.3892-.42647-.8419-.79028-1.3422-1.0786-.1249-.0716-.2589-.14168-.4159-.2148l-.0304-.05789-.0655-.12035-.0884-.16149c-.0228-.03808-.0472-.07465-.0716-.11121l-.0396-.06246-.2118-.31383c-.0548-.07922-.1127-.15234-.1706-.2148l-.0807-.09598c-.139-.17453-.2919-.33755-.4571-.4875l-.0807-.0777c-.0754-.07432-.1569-.14211-.2438-.20261l-.067-.05028-.2437-.176714-.0579-.042657c-.0834-.06156-.1843-.094675-.288-.094453z",
						fill: "#fff"
					}))
				},
				c = e => {
					let {
						className: t
					} = e;
					return Object(o.e)(i.t) ? r.a.createElement(d, {
						className: t
					}) : r.a.createElement(a, {
						className: t
					})
				},
				d = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("svg", {
						className: t,
						fill: "#000",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 40 40",
						height: "40",
						width: "40"
					}, r.a.createElement("path", {
						fill: "#ffdce2",
						d: "M11.76,15.15c.91-19.36,7.94-9.23,8-.71"
					}), r.a.createElement("path", {
						d: "M19.8,14.44a8.73,8.73,0,0,1-.45-2.07,14,14,0,0,0-.79-2.82,20,20,0,0,0-1.71-3.19,5.07,5.07,0,0,0-1.11-1.18,1.22,1.22,0,0,0-.47-.2c-.11,0-.17,0-.28.11a2.27,2.27,0,0,0-.65.88,8.65,8.65,0,0,0-.53,1.32c-.29.94-.53,1.91-.72,2.85-.4,1.87-.71,3.62-1.06,5a8.26,8.26,0,0,1-.83-4.73A30,30,0,0,1,13,5.56a6.5,6.5,0,0,1,.68-1c.13-.16.32-.3.47-.45a2.23,2.23,0,0,1,.62-.3A1.73,1.73,0,0,1,16,3.89a3.23,3.23,0,0,1,.95.69A10.88,10.88,0,0,1,19.1,8a13.48,13.48,0,0,1,.9,3.33A9.87,9.87,0,0,1,19.8,14.44Z"
					}), r.a.createElement("path", {
						fill: "#ffdce2",
						d: "M31.58,11.79c-3.31-3.6-8.69-4.11-13.65-2.9-5.63,1.4-7.87,6.7-10.6,10.93C5.6,21.92,3.57,23.67,2.11,26c-2.82,4.11.11,10.29,5.22,11.11,4.86.78,6.84-2.16,9.1-2.71,7.74-1.87,14.39-5.19,16-9.73C33.35,20.6,32.16,15.94,31.58,11.79Z"
					}), r.a.createElement("path", {
						d: "M31.59,11.78a19.39,19.39,0,0,1,.6,2.63A45.81,45.81,0,0,1,33,20a18.12,18.12,0,0,1,0,3.29,9.38,9.38,0,0,1-.31,1.67c-.11.26-.21.52-.32.77l-.41.72a14.17,14.17,0,0,1-3.83,3.82,29.56,29.56,0,0,1-6.61,3.36c-1.18.46-2.4.84-3.64,1.2a17.58,17.58,0,0,0-1.72.51,12.05,12.05,0,0,0-1.56.88,11.7,11.7,0,0,1-3.72,1.68,9.47,9.47,0,0,1-4.17,0A8.55,8.55,0,0,1,.63,32.57,8.24,8.24,0,0,1,.06,29a7,7,0,0,1,1.13-3.45,32.4,32.4,0,0,1,4.12-5c.35-.37.69-.75,1-1.12l.21-.25L6.7,19l.4-.64c.54-.86,1.07-1.73,1.6-2.58A22.63,22.63,0,0,1,12.5,11a11.46,11.46,0,0,1,5.28-2.83,20.36,20.36,0,0,1,5.45-.45,14.1,14.1,0,0,1,4.92,1.18,10.62,10.62,0,0,1,3.64,2.74,12.11,12.11,0,0,0-3.94-2.05,15,15,0,0,0-5-.52,22,22,0,0,0-4.59.76,12.15,12.15,0,0,0-3,1.28,12.59,12.59,0,0,0-3.54,3.18,44.59,44.59,0,0,0-2.77,4l-.66,1-.33.51L7.88,20s-.07.11-.12.17l-.11.12c-.54.61-1.1,1.2-1.65,1.76a34.28,34.28,0,0,0-3,3.43,8.73,8.73,0,0,0-.62.92,4.17,4.17,0,0,0-.48.94,5.91,5.91,0,0,0-.44,2,7.32,7.32,0,0,0,4,6.63,7.71,7.71,0,0,0,3.78.76,8.15,8.15,0,0,0,3.59-1,19.91,19.91,0,0,1,3.47-1.83,50.13,50.13,0,0,0,6.86-2.26,24.52,24.52,0,0,0,5.74-3.3A10.83,10.83,0,0,0,31,26.17a4.09,4.09,0,0,0,.4-.62,2.84,2.84,0,0,0,.33-.65l.15-.33a.34.34,0,0,0,0-.12l0-.18c0-.24.11-.48.14-.72C32.79,19.85,31.58,13.09,31.59,11.78Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M15,33.5c-.06-.16.39-.71,1.08-1.17a15.64,15.64,0,0,1,2-1c1.64-.84,3.65-1.16,5.09-1.87a12.34,12.34,0,0,0,3.33-2.36,7.84,7.84,0,0,0,2-2.77,2.59,2.59,0,0,1,.44,2,2.84,2.84,0,0,1-.7,1.6,16.44,16.44,0,0,1-6.26,3.36c-1.95.55-3.56,1-4.89,1.48-.31.13-.76.25-1.16.39S15.07,33.45,15,33.5Z"
					}), r.a.createElement("path", {
						fill: "#6a5cff",
						d: "M16.82,8.12c9.76-1.89,17.3,3.72,16.34,8,5,0,8.71,6.76,4.08,11.49,4.43,5.08,1.94,10.32-4.3,11.6-4.37.89-8.32-.76-9.83-4-1.71-3.65,1.08-7.29,5.78-7.42-5.56-5.2,3.42-8.34-.58-16.55"
					}), r.a.createElement("path", {
						d: "M28.32,11.28a2.88,2.88,0,0,1,.36.62,5.92,5.92,0,0,1,.57,1.41A8.27,8.27,0,0,1,29.32,18c-.43,1.8-1.46,3.56-1.82,5.3a4,4,0,0,0,.31,2.41c.09.17.21.33.31.5a5.45,5.45,0,0,0,.57.72l1.22,1.28c-.94.08-1.81.19-2.58.33a6.13,6.13,0,0,0-2.77,1.56,4,4,0,0,0-1.2,2.74,4.69,4.69,0,0,0,1,2.92,6.42,6.42,0,0,0,2.53,2,9.53,9.53,0,0,0,6.62.3c2.16-.61,4.1-2,4.68-3.84a5.58,5.58,0,0,0-1-4.93,9,9,0,0,0-.59-.77l-.47-.6-.23-.3c-.08-.05,0-.1.05-.15l.12-.14L37,26.28a3.29,3.29,0,0,0,.38-.54,5.5,5.5,0,0,0,.87-2.38A5.24,5.24,0,0,0,38,20.88a5.67,5.67,0,0,0-1.29-2.13,5.58,5.58,0,0,0-2-1.35A5.68,5.68,0,0,0,33,17.09L32.32,17l-.17,0a.92.92,0,0,1,0-.16l0-.34a12.4,12.4,0,0,0,.1-1.27,5.77,5.77,0,0,0-2.43-3.86,13.29,13.29,0,0,0-4.27-2.25,19.73,19.73,0,0,0-8.71-.71,16.24,16.24,0,0,1,9.39-.59,13.49,13.49,0,0,1,4.61,2,7.82,7.82,0,0,1,2.62,2.84l.28.58.2.64a5.36,5.36,0,0,1,.2,1.34s-.08.11,0,.11a2.28,2.28,0,0,0,.49.15,7.13,7.13,0,0,1,3.83,2.69,7.49,7.49,0,0,1,1.45,4.22,7.13,7.13,0,0,1-1.18,4.13l-.29.44a3.51,3.51,0,0,1-.3.36l-.19.21-.09.1s.05.07.07.11l.43.57.53.86a7.58,7.58,0,0,1,1,3.88,5.83,5.83,0,0,1-1.44,3.62,8.16,8.16,0,0,1-3,2.2,11.93,11.93,0,0,1-7,.82,8,8,0,0,1-5.53-3.76,5.77,5.77,0,0,1-.81-3.25,5.11,5.11,0,0,1,1.27-3,6.56,6.56,0,0,1,2.58-1.81,6.13,6.13,0,0,1,.72-.25L27,27.5l.15,0a3.27,3.27,0,0,1,.62-.07,4,4,0,0,1-.46-.55l-.18-.28a2.77,2.77,0,0,1-.22-.37l-.29-.82a5.64,5.64,0,0,1,.23-3.18c.64-1.87,2.06-4,2.21-6.23a8.74,8.74,0,0,0-.19-3C28.66,12.2,28.41,11.59,28.32,11.28Z"
					}), r.a.createElement("path", {
						d: "M21.44,26c4.39-2,1-8.4-3.18-5.83C15,22.4,17.62,27.75,21.44,26Z"
					}), r.a.createElement("path", {
						d: "M21.44,26a2.7,2.7,0,0,1-1.81.47A3.26,3.26,0,0,1,18.2,26a4.74,4.74,0,0,1-.94-.83,3.7,3.7,0,0,1-.74-3.43,3.84,3.84,0,0,1,2.65-2.54,3.49,3.49,0,0,1,3.12.51,4.05,4.05,0,0,1,1.58,2.53,3.41,3.41,0,0,1-.58,2.61,3.64,3.64,0,0,1-1.79,1.27,5.15,5.15,0,0,0,1.21-1.71,4.21,4.21,0,0,0,.23-1.55A3.07,3.07,0,0,0,22.4,21a2.89,2.89,0,0,0-1.53-1.1A3.08,3.08,0,0,0,17.68,21,3,3,0,0,0,17.22,24,3.49,3.49,0,0,0,19,25.89a3.7,3.7,0,0,0,1.39.27h.37L21,26.1Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M10.33,26.53c-2.77-.86-3.6-1.91-2.94-3.47C.11,25.47.07,33.88,7.18,36.34,13,38.34,17.35,28.69,10.33,26.53Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M10.33,26.52a6,6,0,0,1,1.09.35,7.15,7.15,0,0,1,.93.56,6.61,6.61,0,0,1,.93.91A4.92,4.92,0,0,1,14.13,31,7,7,0,0,1,14,32.23c-.11.37-.17.72-.28,1a6.35,6.35,0,0,1-1.83,2.6A4.9,4.9,0,0,1,8.76,37,5.92,5.92,0,0,1,7,36.75c-.51-.22-1-.39-1.54-.66a8.58,8.58,0,0,1-1.39-.92A7.55,7.55,0,0,1,2.94,34a6.86,6.86,0,0,1-1.51-3.62,6.46,6.46,0,0,1,.74-3.72A7.73,7.73,0,0,1,4.53,24a14.66,14.66,0,0,1,1.41-.82l1-.36.58-.22A1.88,1.88,0,0,1,8,22.47a8.28,8.28,0,0,0-.48,1.43,1.39,1.39,0,0,0,.07.59,2.1,2.1,0,0,0,.76.89,8.54,8.54,0,0,0,2,1A6.6,6.6,0,0,1,8,25.7a2.26,2.26,0,0,1-1-1.14,1.91,1.91,0,0,1-.11-.41c0-.11,0-.31,0-.28s0-.06,0-.07-.07.05-.07.06h0L6.41,24c-.34.18-.61.36-.83.46A6.81,6.81,0,0,0,2.8,27.22a5.82,5.82,0,0,0-.57,3.67A6,6,0,0,0,3.86,34a7.78,7.78,0,0,0,2.82,1.87,4.54,4.54,0,0,0,5.47-1.18,5.69,5.69,0,0,0,1.3-2.36,6.17,6.17,0,0,0,.22-1.26,4.91,4.91,0,0,0-.14-1.22,4.13,4.13,0,0,0-1.43-2.31l-.54-.42a3.12,3.12,0,0,0-.53-.29Z"
					}), r.a.createElement("path", {
						d: "M33,34.05c-.07-.07,0-.48.1-.95a3.82,3.82,0,0,0-.05-1.3,4.28,4.28,0,0,0-1.77-2.53,5.16,5.16,0,0,0-2.41-.83,8.67,8.67,0,0,0-2.22.13,2.56,2.56,0,0,1,2-1.06,6.24,6.24,0,0,1,3.93,2,4.58,4.58,0,0,1,.9,1.6,4.07,4.07,0,0,1,.11,1.61A3.53,3.53,0,0,1,33,34.05Z"
					}), r.a.createElement("path", {
						d: "M11.6,31.34a1.52,1.52,0,0,1-.23,1.17,3.33,3.33,0,0,1-.61.73c-.24.18-.45.38-.61.48a7.05,7.05,0,0,1-4.23,1,6.93,6.93,0,0,1-3.47-1.08A4.36,4.36,0,0,1,.63,31.32c.42.19.81.51,1.24.7s.77.38.9.56A5.23,5.23,0,0,0,5,33.78a6.76,6.76,0,0,0,2.3.15,5.93,5.93,0,0,0,3.37-1.35,4.62,4.62,0,0,0,.61-.63C11.43,31.69,11.55,31.43,11.6,31.34Z"
					}), r.a.createElement("path", {
						fill: "#ffdce2",
						d: "M19.92,15.9c.32-15.81,8.82-12.13,9.16-.18"
					}), r.a.createElement("path", {
						d: "M29.07,15.72a6.88,6.88,0,0,1-.46-2.09,13.82,13.82,0,0,0-.76-2.86,14.36,14.36,0,0,0-1.77-3.13c-.71-.94-1.71-1.52-2.28-1.24a3.32,3.32,0,0,0-1.53,1.77,15,15,0,0,0-.95,2.71c-.49,1.85-.78,3.61-1.1,5a7.42,7.42,0,0,1-.89-4.82,16,16,0,0,1,2.33-4.8A3.25,3.25,0,0,1,23.87,5a3.11,3.11,0,0,1,2.25.82,8.85,8.85,0,0,1,2.32,3.38,12.2,12.2,0,0,1,.87,3.39A11.14,11.14,0,0,1,29.07,15.72Z"
					}), r.a.createElement("path", {
						d: "M6.75,30.09a1,1,0,1,0,.06-2C5.64,28.27,5.51,30,6.75,30.09Z"
					}), r.a.createElement("path", {
						d: "M6.75,30.1A.74.74,0,0,1,6.19,30a1,1,0,0,1-.41-.73,1.19,1.19,0,0,1,.36-1,1.24,1.24,0,0,1,1.12-.3,1.08,1.08,0,0,1,.75.67,1.32,1.32,0,0,1,0,.94,1,1,0,0,1-.58.6,1.06,1.06,0,0,1-.68,0,1.6,1.6,0,0,0,.57-.28,1.6,1.6,0,0,0,.28-.36.93.93,0,0,0,0-1.08.85.85,0,0,0-1-.19,1,1,0,0,0-.45,1.45C6.23,29.91,6.65,30.08,6.75,30.1Z"
					}), r.a.createElement("path", {
						d: "M2.09,28.69c1.06-.05,1.47-2.36.39-2C1.59,27.11,1.2,28.85,2.09,28.69Z"
					}), r.a.createElement("path", {
						d: "M2.09,28.69a.32.32,0,0,1-.16,0,.37.37,0,0,1-.3-.17,1.1,1.1,0,0,1-.06-.7A1.82,1.82,0,0,1,1.94,27a1,1,0,0,1,.85-.44.47.47,0,0,1,.37.29.88.88,0,0,1,.08.41,1.92,1.92,0,0,1-.19.73,1.13,1.13,0,0,1-1,.72A1.46,1.46,0,0,0,2.78,28,1.34,1.34,0,0,0,3,27c-.08-.38-.54-.28-.74-.08a1.73,1.73,0,0,0-.62,1.4.37.37,0,0,0,.16.31A.45.45,0,0,0,2.09,28.69Z"
					}), r.a.createElement("circle", {
						fill: "#19f2c8",
						cx: "20.51",
						cy: "23.28",
						r: "2.04"
					}), r.a.createElement("path", {
						fill: "#19f2c8",
						d: "M22.55,23.28a2.72,2.72,0,0,0-.35-1A1.89,1.89,0,0,0,21,21.4a2,2,0,0,0-1.74.49,1.87,1.87,0,0,0-.56,1.69,1.91,1.91,0,0,0,2.25,1.51,2,2,0,0,0,1.56-1.81,1.81,1.81,0,0,1-.23,1.29,1.84,1.84,0,0,1-.94.78,2.22,2.22,0,0,1-2.5-.78,2.14,2.14,0,0,1,1.49-3.43,2.1,2.1,0,0,1,1.7.61,2,2,0,0,1,.47.85A2.09,2.09,0,0,1,22.55,23.28Z"
					}), r.a.createElement("circle", {
						fill: "#fff",
						cx: "18.9",
						cy: "21.87",
						r: "1.31"
					}), r.a.createElement("path", {
						fill: "#fff",
						d: "M20.21,21.87a2.75,2.75,0,0,0-.25-.65,1.17,1.17,0,0,0-.77-.52,1.22,1.22,0,0,0-1.06.32,1.15,1.15,0,0,0-.34,1,1.18,1.18,0,0,0,1.37.92,1.28,1.28,0,0,0,1-1.11,1.05,1.05,0,0,1-.08.87,1.21,1.21,0,0,1-.62.54,1.52,1.52,0,0,1-1.66-.55,1.44,1.44,0,0,1-.13-1.5,1.42,1.42,0,0,1,1.11-.77,1.34,1.34,0,0,1,1.12.41,1.26,1.26,0,0,1,.3.56A1.41,1.41,0,0,1,20.21,21.87Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M26,16.18c-1.46,1-4.82.41-5.26-1.56s.44-6.22,1.55-6.74C23.78,7.2,27.18,15.35,26,16.18Z"
					}), r.a.createElement("path", {
						d: "M26,16.17a1.08,1.08,0,0,0,.13-.59A5.5,5.5,0,0,0,26,14.27a13.67,13.67,0,0,0-1-2.63,14.42,14.42,0,0,0-1.87-3,1.41,1.41,0,0,0-.54-.41s0,0-.08,0-.14.14-.21.23a5.79,5.79,0,0,0-.64,1.52A13.35,13.35,0,0,0,21.16,13a6.94,6.94,0,0,0,.05,1.38,1.75,1.75,0,0,0,.51,1,3.86,3.86,0,0,0,2.16.95A3.71,3.71,0,0,0,26,16.06a3,3,0,0,1-2.21.92,3.5,3.5,0,0,1-2.17-.56,3.09,3.09,0,0,1-.94-1.09A3.12,3.12,0,0,1,20.37,14a11.14,11.14,0,0,1,.19-2.35,13.82,13.82,0,0,1,.53-2.13,6.53,6.53,0,0,1,.41-1,2.11,2.11,0,0,1,.72-.84.75.75,0,0,1,.64,0,1.88,1.88,0,0,1,.45.31,4.87,4.87,0,0,1,.65.73,12.72,12.72,0,0,1,.94,1.54,15.23,15.23,0,0,1,1.21,3,6.67,6.67,0,0,1,.26,1.7,2.64,2.64,0,0,1-.08.78A.63.63,0,0,1,26,16.17Z"
					}), r.a.createElement("path", {
						fill: "#94b3ff",
						d: "M33.47,23.09a.89.89,0,0,1-.11-.3l-.06-.26,0-.14,0-.08-.07.05a6.76,6.76,0,0,0-.63.52,6.62,6.62,0,0,0-.72.77l-.13.16-.13-.17a1.25,1.25,0,0,1-.19-1.07l.08-.32,0-.17s0-.18-.06-.16l-.23.15-.26.2a6.3,6.3,0,0,0-.83.72,2.56,2.56,0,0,0-.58.83c-.1.3-.08.46.11.63L29,25a2.77,2.77,0,0,1-.61-2.35,12.57,12.57,0,0,1,1.14-3,14,14,0,0,0,1-2.64,5.72,5.72,0,0,0,0-2.47c-.1-.38-.24-.73-.36-1.08l-.51-.93a8.88,8.88,0,0,1,.82.76,5.83,5.83,0,0,1,.68,1.14,4.33,4.33,0,0,1,.31,1.24,2.53,2.53,0,0,1,0,.94A17.5,17.5,0,0,1,29.71,21,7.05,7.05,0,0,0,29,22.94a2.13,2.13,0,0,0,.48,1.69l-.27.27a1.13,1.13,0,0,1-.35-.66,1.21,1.21,0,0,1,.12-.71,3.69,3.69,0,0,1,.75-1,7.86,7.86,0,0,1,.91-.75,5.41,5.41,0,0,1,.64-.38c.24-.13.45-.21.7-.32.07,0,0,.25.06.34a2.16,2.16,0,0,1,0,.36,4.34,4.34,0,0,1-.2.79.94.94,0,0,0,0,.83h-.39l.17-.19a6.25,6.25,0,0,1,1.49-1.12l.21-.11c0-.05,0,.05,0,.08v.12l0,.43Z"
					}), r.a.createElement("path", {
						fill: "#94b3ff",
						d: "M27.44,35.4a1.55,1.55,0,0,1-.47-.64,3,3,0,0,1-.23-.68,2.52,2.52,0,0,1-.06-.52l0-.25s0-.11,0-.08l-.1.1a1.38,1.38,0,0,0-.26.39,1.3,1.3,0,0,0-.12.4,2.49,2.49,0,0,0-.08.72,2.42,2.42,0,0,0,.44,1.36l-.56.55a3.74,3.74,0,0,1-1.55-2.34,4.67,4.67,0,0,1,2.14-4.55,4,4,0,0,1,4-.37c-.28,0-.59,0-.9.05a4.93,4.93,0,0,0-.94.21,8.29,8.29,0,0,0-1.35.61,4.13,4.13,0,0,0-2.34,3,3,3,0,0,0,1.28,2.95l-.28.28a3,3,0,0,1-.36-2.69,2.88,2.88,0,0,1,.88-1.29l.26-.22.14-.11c.05,0,.1-.08.08,0s0,.13.14.13h.05a3.9,3.9,0,0,0-.16,2.21A3.41,3.41,0,0,0,27.44,35.4Z"
					}), r.a.createElement("path", {
						fill: "#493ac1",
						d: "M28.06,37.14a11.11,11.11,0,0,0,1.27.18,10.21,10.21,0,0,0,1.84-.17,11.56,11.56,0,0,0,2.17-.61,6.25,6.25,0,0,0,1.79-1.22,4.49,4.49,0,0,0,1.16-3,5.57,5.57,0,0,0-.53-2.88,2.17,2.17,0,0,1,1.47,1,2.51,2.51,0,0,1,.52,1.45,7.52,7.52,0,0,1-1,3.29,4.4,4.4,0,0,1-1.05,1.13,9.61,9.61,0,0,1-1.16.8,6.9,6.9,0,0,1-2.43.81A11.52,11.52,0,0,1,29.9,38a3,3,0,0,1-1.16-.31A1.74,1.74,0,0,1,28.06,37.14Z"
					}), r.a.createElement("path", {
						fill: "#493ac1",
						d: "M33.09,26.76c0-.13.41-.15.79-.21a2,2,0,0,0,1-.34,3.49,3.49,0,0,0,.44-.41c.12-.13.21-.31.34-.48a3.58,3.58,0,0,0,.46-1.1,8.75,8.75,0,0,0-.18-3.77c.82,0,1.72.82,1.68,1.24a8.14,8.14,0,0,1-.88,3.8,3.82,3.82,0,0,1-1.05,1.24,2.52,2.52,0,0,1-1.37.44A2.49,2.49,0,0,1,33.09,26.76Z"
					}), r.a.createElement("path", {
						fill: "#fff8b8",
						d: "M2.29.57C0,2,5.89,16.92,8,19.08c2.8,1.55,7.52-.47,7.38-3.83S3.9-2.36,2.29.57Z"
					}), r.a.createElement("path", {
						d: "M2.27.56A.46.46,0,0,1,2.33.4.49.49,0,0,1,2.56.15a1.27,1.27,0,0,1,1.07,0A8.53,8.53,0,0,1,6.2,1.76a48.61,48.61,0,0,1,4.41,4.49,35.05,35.05,0,0,1,4.79,6.5,7.42,7.42,0,0,1,.83,2.15,4.29,4.29,0,0,1-.42,2.51,6,6,0,0,1-3.61,2.86,6.27,6.27,0,0,1-4,0L7.73,20a1.74,1.74,0,0,1-.35-.19l-.27-.3a8.55,8.55,0,0,1-.57-.79c-.33-.51-.6-1-.87-1.53a47.33,47.33,0,0,1-2.5-6A40,40,0,0,1,1.63,5.49a16.66,16.66,0,0,1-.3-2.67,5.66,5.66,0,0,1,.1-1.3A1.65,1.65,0,0,1,2.14.32a1.41,1.41,0,0,0-.31,1.21,6.29,6.29,0,0,0,.26,1.23c.24.84.56,1.72.89,2.57C3.63,7,4.29,8.6,4.52,9.47a46.46,46.46,0,0,0,1.64,5c.31.79.65,1.57,1,2.31.18.37.37.72.57,1.07.1.16.2.34.31.49s.11.16.17.22.06.1.11.13c2.53,1.36,6.38-.38,6.65-3V15.3a1.75,1.75,0,0,0-.07-.44,5.61,5.61,0,0,0-.34-.91,16.41,16.41,0,0,0-.95-1.75C13,11.08,12.2,10,11.46,9,10,7.06,8.48,5.29,7,3.69A32.32,32.32,0,0,0,4.48,1.12,4,4,0,0,0,3.13.3.77.77,0,0,0,2.27.56Z"
					}), r.a.createElement("path", {
						fill: "#ccffef",
						d: "M10.69,11.08a4.78,4.78,0,0,1-5,2.21c.85,2.93,2.21,5.84,3.6,6.41,2,.82,6.16-.77,6.05-4.37-.05-1.53-2.15-4.85-4-6.41a3.06,3.06,0,0,1-1.36,3"
					}), r.a.createElement("path", {
						d: "M10,11.89a4,4,0,0,0,.7-.78,3.28,3.28,0,0,0,.46-2.47c0-.16.22.08.38.21l.5.46c.37.36.54.56.77.82.43.49.79,1,1.06,1.31a13.15,13.15,0,0,1,1.36,2.22A5.79,5.79,0,0,1,15.66,15a3.73,3.73,0,0,1,0,.74,3.55,3.55,0,0,1-.08.73A4.5,4.5,0,0,1,14.15,19a5.93,5.93,0,0,1-2.51,1.3A4.13,4.13,0,0,1,8.71,20a5.88,5.88,0,0,1-1.77-2.14,15.31,15.31,0,0,1-1-2.29c-.14-.38-.26-.75-.37-1.12l-.23-.78-.26-.94c.27.06.53.13.8.17l.39.07a.58.58,0,0,0,.18,0h.1a3.55,3.55,0,0,0,.73,0,4.65,4.65,0,0,0,1.36-.39,5.37,5.37,0,0,0,2-1.6,4.48,4.48,0,0,1-2,2.32A4.31,4.31,0,0,1,7,13.86a2.56,2.56,0,0,1-.39,0H6.36s0,0,0,.08l.11.43c.08.28.16.56.25.83q.27.83.6,1.59a6.17,6.17,0,0,0,1.8,2.54,3.65,3.65,0,0,0,2.83.07,4.85,4.85,0,0,0,2.28-1.55,3.81,3.81,0,0,0,.81-2.38,5.26,5.26,0,0,0-.75-2.28,17.47,17.47,0,0,0-1.26-2c-.22-.3-.45-.6-.68-.88s-.23-.27-.35-.41l-.2-.23-.17-.17-.1-.11s0,0,0,.07a1.84,1.84,0,0,1-.14.64,2.93,2.93,0,0,1-.46.9A2.48,2.48,0,0,1,10,11.89Z"
					}), r.a.createElement("path", {
						fill: "#19f2c8",
						d: "M8.57,5.17c.14,2.42-2.75,3.95-4.8,3.76.61,1.47,1.56,6,3.36,5.89,2.38,0,5.54-1.7,5.25-4.6A17.52,17.52,0,0,0,8.44,5.46"
					}), r.a.createElement("path", {
						d: "M8.45,5.46A6.8,6.8,0,0,1,10.32,7,23.61,23.61,0,0,1,12.46,9.8c.06.1.27.33.23.56a3.26,3.26,0,0,1,0,.54,4,4,0,0,1-.2,1.08,4.35,4.35,0,0,1-1.29,1.84,6.37,6.37,0,0,1-4.11,1.54h.06a3,3,0,0,1-.53,0,3.14,3.14,0,0,1-.46-.18,3.81,3.81,0,0,1-1.27-1.48,11.83,11.83,0,0,1-.68-1.57c-.19-.52-.35-1-.51-1.54L3.5,9.77,3,8.37c.33,0,.68.05,1,0h.45c.18,0,.17,0,.27,0a4.7,4.7,0,0,0,.83-.17A4.79,4.79,0,0,0,7,7.54,3.1,3.1,0,0,0,8.41,5.18a2.4,2.4,0,0,1,.08,1.33A3.33,3.33,0,0,1,7.72,8,4.42,4.42,0,0,1,5.4,9.34c-.15,0-.29.05-.44.06H4.61L4.4,9.37s0,.05,0,.09a1.75,1.75,0,0,0,0,.25l.25.91a17.49,17.49,0,0,0,.54,1.73A6.71,6.71,0,0,0,6,13.84a1.42,1.42,0,0,0,1.12.76h0a5.26,5.26,0,0,0,4.57-2.48A3.1,3.1,0,0,0,12.05,11a2.72,2.72,0,0,0,0-.57c0-.1,0-.12,0-.17L11.9,10c-.4-.67-.83-1.29-1.25-1.87A27.49,27.49,0,0,0,8.45,5.46Z"
					}), r.a.createElement("path", {
						fill: "#fff",
						d: "M3.3,2.08A31.85,31.85,0,0,1,4.72,5.57c.7,1.64,1.36,3.56,2,5.26a47.44,47.44,0,0,0,3.47,7.56A5.89,5.89,0,0,1,7.76,15.9c-1-2.49-1.65-4.65-2.35-6.56s-1.28-3.56-1.69-5A19.92,19.92,0,0,1,3.3,2.08Z"
					}), r.a.createElement("path", {
						fill: "#6a5cff",
						d: "M20.72,8c-12.86-4.26-7.25,10.38.19,7.55-1.23-1.74-.58-5.59-.18-7.17"
					}), r.a.createElement("path", {
						d: "M20.74,8.4a16.52,16.52,0,0,1-.19,2.41,9.2,9.2,0,0,0,.22,3.3,2.47,2.47,0,0,0,.1.29l.06.14a1.76,1.76,0,0,0,.09.21,12.51,12.51,0,0,0,.67,1.1,10.52,10.52,0,0,1-1.3.49c-.11,0-.25.06-.37.09l-.27.06a4,4,0,0,1-.5.06,5.26,5.26,0,0,1-2.08-.2,7,7,0,0,1-3.39-2.27,6.31,6.31,0,0,1-1.55-3.87,3.51,3.51,0,0,1,.66-2.16,3.44,3.44,0,0,1,1.78-1.23,6.69,6.69,0,0,1,3.48,0,12.83,12.83,0,0,1,2.64,1c-.81.11-1.91.07-2.89.14s-1.81.15-2.21.2a2.36,2.36,0,0,0-1.61.62,2.2,2.2,0,0,0-.58,1.62A5.25,5.25,0,0,0,15,13.73a5.46,5.46,0,0,0,2.89,1.7,4.79,4.79,0,0,0,1.55.08,2.29,2.29,0,0,0,.36-.07l.21,0c.1-.06.28-.07.29-.15a2.12,2.12,0,0,1-.12-.2,1.34,1.34,0,0,1-.11-.31,5.39,5.39,0,0,1-.22-1,9.32,9.32,0,0,1,0-1.9A11.43,11.43,0,0,1,20.74,8.4Z"
					}), r.a.createElement("path", {
						fill: "#94b3ff",
						d: "M17.76,12.22c-.08,0-.17-.4-.36-.73,0-.05-.07,0,0-.08s0,.05,0,.07a2.47,2.47,0,0,0-.21.36l-.41.85-.08,0a1.77,1.77,0,0,1-.58-1,2.63,2.63,0,0,1,.05-1.39l.49.51a1.81,1.81,0,0,0-.41.23l0,0a.36.36,0,0,0-.11.1,1,1,0,0,0-.2.27,11.84,11.84,0,0,0-.49,1.4l-.18-.33-.08-.14h0L15,12.27,14.93,12a2.4,2.4,0,0,1-.29-1,1.92,1.92,0,0,1,.06-.62,1.81,1.81,0,0,1,.2-.54,2.45,2.45,0,0,1,.52-.62,3.09,3.09,0,0,1,2.39-.62c-.28.21-.67.4-1,.62s-.55.4-.69.48a1.51,1.51,0,0,0-.57.46c-.08.12-.1.13-.14.2a.77.77,0,0,0-.07.2,1,1,0,0,0,.05.5c0,.07,0,0,0,0l0-.09a1.18,1.18,0,0,1,.11-.19,1.11,1.11,0,0,1,.29-.28,2.53,2.53,0,0,1,.54-.28l.37-.14-.13.39a1.94,1.94,0,0,0-.06.86,1.13,1.13,0,0,0,.08.22.41.41,0,0,0,0,.09s0,0,.06-.07a1.67,1.67,0,0,1,.18-.28.46.46,0,0,1,.11-.12.56.56,0,0,1,.14-.1.32.32,0,0,1,.27,0c.24.21.19.35.23.49A3.65,3.65,0,0,1,17.76,12.22Z"
					}))
				}
		},
		"./src/reddit/components/Econ/Prediction/themes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/config.ts");
			const r = {
				theme_1: `url(${s.a.assetPath}/img/econ/predictions/theme1.png)`,
				theme_2: `url(${s.a.assetPath}/img/econ/predictions/theme2.png)`,
				theme_3: "linear-gradient(104.49deg, #279A63 7.96%, #B6C048 119.75%)",
				theme_4: "linear-gradient(91.64deg, #F5AC1F -10.49%, #FC7519 52.61%)",
				theme_5: `url(${s.a.assetPath}/img/econ/predictions/theme5.png)`,
				theme_6: `url(${s.a.assetPath}/img/econ/predictions/theme6.png)`,
				theme_7: `url(${s.a.assetPath}/img/econ/predictions/theme7.png)`,
				theme_8: `url(${s.a.assetPath}/img/econ/predictions/theme8.png)`
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/UserAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				winnerName: "_2Ld4Maxq0H1scF8CFo0X_a",
				tokenIcon: "_2ng76MX6PYeQXt1a8h8KWo",
				score: "_3JbhxiJWu2gV6JaiTF3uzx",
				avatarContainer: "_2ZwRsHNdUj-VCX3kAEvfuS",
				avatar: "_3ggbcbNUTU_E7CWkdqRASP",
				first: "_3QliOnSLoIQ9q79lsUpz_Q",
				third: "O47yLdXtE3UNQd_PIoMnQ",
				defaultAvatar: "_1MFV0LOIC_eTR8_8Bzy8Er",
				userIcon: "_1jEJK9NfCJT83N0sSzBuB-",
				outerCircle: "_1_TAbf1ftJCbFWt5CPQadV",
				second: "_3uIgvw-EV7gl101AWKSB9L",
				innerCircle: "_2d8KPU9h9fKX2LVxDMGQLO",
				placeBadge: "_3NSoLwFOYouY-1sbz3qMSN"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "C0hcQnbAEO0BNApe5yXyY",
				header: "_2ZyHot0tKqfb7CrQCVaZvh",
				winnersContainer: "_3YQnPYKP83Dft0BU-PfJUr",
				user: "_3NUy5pbf5zjIjsWOjHC7Gp",
				first: "_1bnJ73CUCCMLubzxjltNXB",
				second: "_24-h3WwFZZMXYeizPwLvUl",
				seeAllButton: "_1l-LD2VzJO8IA6b1zQ3Kxk"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less": function(e, t, n) {
			e.exports = {
				predictionLeaderboardList: "WnsHpoM6ZTGbLzCSxG1ho",
				topPredictor: "iABJTvK6lrMc3PmeMk2bZ"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				a = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					currentRank: n,
					tokenIcon: s,
					topPredictorsRank: a
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.predictionLeaderboardList, t)
				}, (null == a ? void 0 : a.length) ? a.map(e => {
					let {
						rank: t,
						redditor: o,
						redditorInfo: a,
						score: d
					} = e;
					var l;
					return o || a ? r.a.createElement("div", {
						key: `prediction-leaderboard-${a.id}`,
						className: c.a.topPredictor
					}, r.a.createElement(i.a, {
						isCurrentUser: (null === (l = null == n ? void 0 : n.redditor) || void 0 === l ? void 0 : l.name) === a.displayName,
						rank: t,
						redditor: o,
						redditorInfo: a,
						score: d,
						tokenIcon: s
					})) : null
				}) : d._("No top predictors", null, {
					hk: "1nIqZI"
				}))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_C9n5LWcnYHJ78_PhY6M_",
				header: "_29gj_JsULicXdU3UTZKiDI",
				subHeader: "_29O_p8gs7C07rkDh7fqksJ",
				closeButton: "_1Q_qQCWWqlqHQzCU0P83E_",
				listContainer: "_1MiUX_7AddF3lpCZ3nYtMe",
				currentRank: "_39H3viVq70CUv4_7JdBLsx",
				spacer: "_37V-Um9VhBWlh1fA0PP6hv"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				u = n("./src/reddit/hooks/usePageLayer.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				b = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				h = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				f = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				x = n.n(f);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(i.a)(e => {
				let {
					onClose: t,
					leaderboard: n,
					tournamentId: i,
					tokenIcon: f,
					isPreviousEvent: g = !1,
					isQueried: _ = !1
				} = e;
				const v = Object(m.a)(),
					O = Object(u.a)(),
					{
						currentRank: y,
						topPredictorsRank: j
					} = n,
					I = Object(o.e)(e => i ? Object(p.a)(e, i) : null),
					S = Object(o.e)(e => Object(a.r)(e, {
						pageLayer: O
					}));
				Object(s.useEffect)(() => {
					v(i ? Object(l.g)(i, g, _) : Object(l.e)())
				}, []);
				const C = y && y.rank > 0;
				return r.a.createElement("div", {
					className: x.a.container
				}, r.a.createElement("div", {
					className: x.a.header
				}, r.a.createElement(c.t, {
					className: x.a.closeButton,
					Icon: Object(d.b)("close"),
					priority: c.c.Plain,
					onClick: t
				}), r.a.createElement("h1", null, i ? E._("Tournament Leaderboard", null, {
					hk: "2ZYGPJ"
				}) : E._("All Time Top Predictors", null, {
					hk: "2OsQLm"
				})), r.a.createElement("h2", {
					className: x.a.subHeader
				}, I ? I.name : null == S ? void 0 : S.displayText)), r.a.createElement("div", {
					className: x.a.listContainer
				}, r.a.createElement(b.a, {
					currentRank: y,
					topPredictorsRank: j,
					tokenIcon: f
				}), C && r.a.createElement("div", {
					className: x.a.spacer
				}, " ")), y && y.redditorInfo && C && r.a.createElement(h.a, {
					className: x.a.currentRank,
					isCurrentUser: !0,
					rank: y.rank,
					redditor: y.redditor,
					redditorInfo: y.redditorInfo,
					score: y.score,
					tokenIcon: f
				}))
			}), v = e => r.a.createElement(_, g({
				withOverlay: !0,
				onOverlayClick: e.onClose
			}, e))
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less": function(e, t, n) {
			e.exports = {
				predictor: "ainvGgXQrIMFpP9X4Mrc_",
				userLink: "_34lqpm8WEQ2vCBLoneB-q5",
				userName: "Lm2HlDnjd61FFIUJMsqY1",
				yourProfile: "_3NXCPZBcTL9t1VpyqYkpAi",
				leaderboardIcon: "cr2gm4FK2Pvd3jSNEt1aM",
				rank: "_35mmwlcmeMehfyJXIsaV6P",
				userIcon: "_12PvAVnV9Mni44vSgjcixP",
				avatar: "KajS3NI16AuxmHTMwUM9Y",
				name: "_1XaIj4-_6OJb20sL98YYiD",
				score: "_3ebMVpO-ahVFbOZDTJpx9U",
				icon: "_2Xw8EThjahawQ2bJketixZ",
				rankBadge: "_1oPIwF1dXcLbArFfx2gunM"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				d = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/helpers/trackers/predictions.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				let {
					className: t,
					isCurrentUser: n,
					rank: s,
					redditor: m,
					redditorInfo: h,
					score: f,
					tokenIcon: x
				} = e;
				const g = Object(u.a)(),
					{
						icon: E,
						name: _,
						profile: v
					} = m || {},
					O = null != _ ? _ : h.displayName;
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.predictor, t)
				}, r.a.createElement("div", {
					className: p.a.rank
				}, s), r.a.createElement(d.a, {
					className: p.a.userLink,
					onClick: () => g(Object(l.g)({
						targetUserId: h.id
					})),
					to: `/user/${O}`,
					disabled: h.displayName === i.F || h.displayName === i.Lb
				}, r.a.createElement("div", {
					className: p.a.leaderboardIcon
				}, r.a.createElement(c.a, {
					className: Object(o.a)(p.a.userIcon, p.a.avatar),
					iconUrl: null == E ? void 0 : E.url,
					isNSFW: !!(null == v ? void 0 : v.isNsfw),
					userName: null != O ? O : ""
				}), r.a.createElement(a.a, {
					className: p.a.rankBadge,
					rank: s
				})), r.a.createElement("div", {
					className: p.a.name
				}, r.a.createElement("div", {
					className: p.a.userName
				}, O), n && r.a.createElement("div", {
					className: p.a.yourProfile
				}, b._("Yep, thats you.", null, {
					hk: "3DqdE1"
				})))), r.a.createElement("div", {
					className: p.a.score
				}, r.a.cloneElement(x, {
					className: p.a.icon
				}), f))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Predictor/index.m.less": function(e, t, n) {
			e.exports = {
				predictor: "_16w_MXnqyc1wG_7ojYbn1W",
				rank: "_31JLAJR9J0PoccMihIbeyx",
				userLink: "_2l47m5ZBEi8xLNq6RSIFbA",
				userName: "Wd3mDBfAqnzvsMdD9m0_8",
				yourProfile: "_3cwE2bEUU5EMjmUjmUkB1r",
				leaderboardIcon: "_3Mmx-E5UguOnjQ6UxOxNNt",
				avatar: "v7H_jS6knu3EL_GoHh7hp"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Stats/index.m.less": function(e, t, n) {
			e.exports = {
				statsList: "_3IT8I6DlfHtXDnF-gs2RpL",
				stat: "TjF7GdpuNmao0k5l4rcny",
				statValue: "w_GdgvUJ7AVXtoC3Sv9Dz",
				long: "_2hR4JXJZlWk-KpRAtz84dB",
				statDescription: "PxTXMQqDB54wd14g-M1Dx"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3sjfBnn2sAWNiul4Nz_Pg7",
				content: "_3jDA0vviEVX8RhAhtOCY_z",
				tournamentInfo: "_36aOJEytqILMykYWpABMrJ",
				seeAllButton: "_1VP0LbK9VUyIB4HE7T12hP",
				tournamentTitle: "UU382dFrrhmKHOT4_f6nB",
				tournamentDate: "_3aIs6cW_8V_yNVi8okT9V8",
				leaderboard: "_1ouATj40OEjkSu07FMhSFS"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "zArpLVQY3rXItf4R-k_Ab",
				content: "ihn4kxAce7LSsBs2NTPqT",
				header: "_3kAf9h9Yqca0lw94mWOJQd"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.m.less": function(e, t, n) {
			e.exports = {
				placeBadge: "_1H-3d7_OLmQnVDXXA2ArUr"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.m.less"),
				d = n.n(c);
			const l = `${a.a.assetPath}/img/econ/predictions/leaderboard`,
				u = `${l}/first@2x.png`,
				m = `${l}/second@2x.png`,
				p = `${l}/third@2x.png`,
				b = {
					1: {
						alt: s.fbt._("First place", null, {
							hk: "3uGGfU"
						}),
						src: u,
						srcSet: `\n  ${l}/first.png,\n  ${u} 2x,\n  ${l}/first@3x.png 3x,\n`
					},
					2: {
						alt: s.fbt._("Second place", null, {
							hk: "4AYjyw"
						}),
						src: m,
						srcSet: `\n  ${l}/second.png,\n  ${m} 2x,\n  ${l}/second@3x.png 3x,\n`
					},
					3: {
						alt: s.fbt._("Third place", null, {
							hk: "lyjwD"
						}),
						src: p,
						srcSet: `\n  ${l}/third.png,\n  ${p} 2x,\n  ${l}/third@3x.png 3x,\n`
					}
				},
				h = e => {
					let {
						rank: t,
						className: n
					} = e;
					const s = t && b[t];
					return s ? i.a.createElement("img", {
						alt: s.alt,
						className: Object(r.a)(d.a.placeBadge, n),
						src: s.src,
						srcSet: s.srcSet
					}) : null
				}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(n.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "_3uxjfiwzc4v4BiMEQHtZ3J",
				header: "_2F2J545Bkg5AzZZpmRUV5B",
				openModalButtonContainer: "Phr96vmtPy_VTwey6qWL_",
				openModalButton: "_1wSRscxdBnLN2r_D5XZhbe",
				modal: "PxqE9oFD_60_KiA_nA9CV",
				list: "_3DfAiOLDfE9ufqbW_M8d4G"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "PredictionLeaderboardSidebar", (function() {
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				c = n("./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				p = n("./src/reddit/hooks/useModalState.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				f = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				x = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				E = n.n(g);
			const _ = e => {
				let {
					className: t,
					subredditId: n,
					tournamentId: r
				} = e;
				var g;
				const _ = Object(b.a)(),
					v = Object(l.fb)(),
					O = "true" === (null == v ? void 0 : v.queryParams["top-predictors"]),
					[y, j, I] = Object(p.a)(O),
					{
						leaderboard: S,
						error: C
					} = Object(c.a)(n, r),
					N = r ? o.a.createElement(a.a, {
						tournamentId: r
					}) : o.a.createElement(h.a, null);
				if (o.a.useEffect(() => {
						S && _(r ? Object(m.h)(r) : Object(m.f)())
					}, [S, r]), !(null === (g = null == S ? void 0 : S.topPredictorsRank) || void 0 === g ? void 0 : g.length) || C) return null;
				const {
					currentRank: k,
					topPredictorsRank: P
				} = S, T = Boolean(r) ? s.fbt._("Tournament leaderboard", null, {
					hk: "1WFLrI"
				}) : s.fbt._("Top Predictors", null, {
					hk: "3HCYxQ"
				});
				return o.a.createElement(d.a, {
					className: Object(i.a)(E.a.themedWidget, t),
					contentOnly: !0
				}, o.a.createElement("h2", {
					className: E.a.header
				}, T), o.a.createElement(f.a, {
					className: E.a.list,
					currentRank: k,
					topPredictorsRank: P.slice(0, 4),
					tokenIcon: N
				}), o.a.createElement("div", {
					className: E.a.openModalButtonContainer
				}, o.a.createElement(u.a, {
					className: E.a.openModalButton,
					isFullWidth: !0,
					priority: u.c.Primary,
					onClick: () => {
						r && _(Object(m.c)()), j()
					}
				}, s.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), y && o.a.createElement(x.a, {
					className: E.a.modal,
					leaderboard: S,
					tournamentId: r,
					tokenIcon: N,
					onClose: I
				}))
			};
			t.default = _
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/predictions/index.ts"),
				i = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts");

			function a(e, t) {
				const n = Object(r.d)(),
					a = Object(r.e)(n => t ? Object(i.h)(n, {
						tournamentId: t
					}) : Object(i.d)(n, {
						subredditId: e
					})),
					c = Object(r.e)(t => Object(i.c)(t, {
						subredditId: e
					})),
					d = Object(r.e)(t => Object(i.b)(t, {
						subredditId: e
					})),
					l = Object(r.e)(t => Object(i.a)(t, {
						subredditId: e
					}));
				return Object(s.useEffect)(() => {
					d || c || l || n(Object(o.k)(e))
				}, [c, d, l, e, n]), {
					leaderboard: a,
					error: l
				}
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/TournamentBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "joYEg_Eiw7o4Qi0wAP2aB",
				image: "q2Mp_RDxvnC8ol_stVX1T",
				title: "zm9tjKy9uW1OKszNhlp5D",
				subhead: "_1RDleqO8yhcVcIUFTNcRQf",
				confetti: "Y_uA8FA3p1c-n00AzM7Nd"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/Leaderboard/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3MBNNo6fqxb0uNWyKrI5o4",
				ranks: "uUKoQ8LWuO4EBz06uq6FH",
				user: "_168PZ4dr9lD44TbD01rL8Y",
				"user-name": "_1Jphq41nWXoBjEjW1Ymo5b",
				userName: "_1Jphq41nWXoBjEjW1Ymo5b",
				"user-avatar": "v7it-sHd-KXMUERsL2892",
				userAvatar: "v7it-sHd-KXMUERsL2892",
				icon: "_1tiE0SiSAjC25b5rL9hoDL",
				label: "_35GlMF3eH5-VyQQhEZBWdA",
				rankBadge: "_1p2R5WS3mFFQ2DKgvcxocn"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3oTYdDXHZkuflfa_Dbps_h",
				"tournament-info": "_1MwmQHjBLiH6XWzzpVBtHF",
				tournamentInfo: "_1MwmQHjBLiH6XWzzpVBtHF",
				"tournament-title": "_140bbDmuxY96fDpSG10nI6",
				tournamentTitle: "_140bbDmuxY96fDpSG10nI6",
				long: "_17m7Cs0WhffLTYHtIMgC_w",
				stats: "_1H91NxLQLk0yC_vRXxCJLx",
				stat: "_2A9JItQmo_iv_nQGpFFRM6",
				simple: "_3QjFRZNg1KYioFwtOXMvT0"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lcQbWv2Yp41rPB4Kfza3X"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				a = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				l = n("./src/reddit/actions/economics/predictions/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts");
			var m = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				p = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				b = n.n(p);
			const h = e => {
				let {
					subredditId: t,
					queriedTournamentId: n
				} = e;
				const i = Object(o.d)(),
					{
						leaderboard: p,
						error: h
					} = function(e, t) {
						const n = Object(o.d)(),
							r = Object(o.e)(e => Object(u.h)(e, {
								tournamentId: t
							})),
							i = Object(o.e)(e => Object(u.g)(e, {
								tournamentId: t
							})),
							a = Object(o.e)(e => Object(u.f)(e, {
								tournamentId: t
							})),
							c = Object(o.e)(e => Object(u.e)(e, {
								tournamentId: t
							}));
						return Object(s.useEffect)(() => {
							r || a || i || c || n(Object(l.o)(e, t))
						}, [r, i, a, c, e, t, n]), {
							leaderboard: r,
							error: c
						}
					}(t, n);
				return !(null == p ? void 0 : p.topPredictorsRank) || h ? null : r.a.createElement(m.a, {
					className: b.a.modal,
					leaderboard: p,
					tournamentId: n,
					tokenIcon: r.a.createElement(d.a, {
						tournamentId: n
					}),
					onClose: () => {
						const e = new URLSearchParams(location.search);
						e.delete("prediction-tournament-rank"), i(Object(c.b)(Object(a.c)({
							pathname: location.pathname,
							search: e.toString()
						})))
					},
					isQueried: !0
				})
			};
			var f = n("./src/reddit/components/PostList/index.tsx"),
				x = n("./src/reddit/connectors/PostList/index.ts"),
				g = n("./src/reddit/constants/postLayout.ts"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/helpers/predictions/index.ts"),
				v = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/config.ts"),
				j = n("./node_modules/fbt/lib/FbtPublic.js"),
				I = n("./src/reddit/components/Econ/Prediction/Confetti/index.tsx"),
				S = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				C = n("./src/reddit/models/Prediction/index.ts"),
				N = n("./src/reddit/selectors/poll/index.ts"),
				k = n("./src/redditGQL/types.ts"),
				P = n("./src/reddit/components/Econ/PredictionsPostList/TournamentBanner/index.m.less"),
				T = n.n(P);
			const w = e => {
					let {
						subredditId: t
					} = e;
					const n = Object(o.e)(e => Object(v.f)(e, {
							subredditId: t
						})),
						s = Object(o.e)(e => n ? Object(N.h)(e, n.tournamentId) : []);
					if (!n) return null;
					if (n.status === k.v.Closed) return r.a.createElement(R, null);
					const i = s.filter(e => e.predictionStatus === C.b.Open && e.endsAt > Date.now()),
						a = i.length > 0,
						c = i.length && i.some(e => !e.userSelection);
					return a && !c ? r.a.createElement(A, null) : a ? null : r.a.createElement(L, null)
				},
				L = () => r.a.createElement("section", {
					className: T.a.container
				}, r.a.createElement("div", {
					className: T.a.image,
					style: {
						backgroundImage: `url(${y.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), r.a.createElement("div", null, r.a.createElement("h3", {
					className: T.a.title
				}, j.fbt._("There's nothing to predict right now", null, {
					hk: "29BSNR"
				})), r.a.createElement("p", {
					className: T.a.subhead
				}, j.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "1HtxKJ"
				})))),
				A = () => r.a.createElement("section", {
					className: T.a.container
				}, r.a.createElement(I.a, {
					className: T.a.confetti
				}), r.a.createElement(S.a, {
					className: T.a.image
				}), r.a.createElement("div", null, r.a.createElement("h3", {
					className: T.a.title
				}, j.fbt._("Your predictions are in!", null, {
					hk: "2hlZz4"
				})), r.a.createElement("p", {
					className: T.a.subhead
				}, j.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "48ISNI"
				})))),
				R = () => r.a.createElement("section", {
					className: T.a.container
				}, r.a.createElement("div", {
					className: T.a.image,
					style: {
						backgroundImage: `url(${y.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), r.a.createElement("div", null, r.a.createElement("h3", {
					className: T.a.title
				}, j.fbt._("No prediction tournaments are active right now", null, {
					hk: "4G1oCo"
				})), r.a.createElement("p", {
					className: T.a.subhead
				}, j.fbt._("Check back to see when a tournament is created.", null, {
					hk: "2ldkRW"
				}))));
			var D = n("./src/lib/classNames/index.ts"),
				B = n("./src/lib/prettyPrintNumber/index.ts"),
				F = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				M = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				U = n("./src/lib/constants/index.ts"),
				W = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				H = n("./src/reddit/components/UserIcon/index.tsx"),
				V = n("./src/reddit/controls/InternalLink/index.tsx"),
				G = n("./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/Leaderboard/index.m.less"),
				q = n.n(G);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = e => {
				let {
					className: t,
					ranks: n
				} = e;
				return r.a.createElement("div", {
					className: Object(D.a)(q.a.container, t)
				}, r.a.createElement("div", {
					className: q.a.label
				}, K._("Tournament Leaders", null, {
					hk: "2JMRGi"
				})), r.a.createElement("div", {
					className: q.a.ranks
				}, n.map(e => {
					let {
						redditor: t,
						redditorInfo: n,
						rank: s
					} = e;
					var o, i, a, c;
					return r.a.createElement(V.a, {
						key: n.id,
						className: q.a.user,
						to: `/user/${null==t?void 0:t.name}`,
						disabled: n.displayName === U.F || n.displayName === U.Lb
					}, r.a.createElement("div", {
						className: q.a.userAvatar
					}, r.a.createElement(H.a, {
						className: q.a.icon,
						iconUrl: null === (o = null == t ? void 0 : t.icon) || void 0 === o ? void 0 : o.url,
						isNSFW: Boolean(null === (i = null == t ? void 0 : t.profile) || void 0 === i ? void 0 : i.isNsfw),
						userName: null !== (a = null == t ? void 0 : t.name) && void 0 !== a ? a : ""
					}), r.a.createElement(W.a, {
						className: q.a.rankBadge,
						rank: s
					})), r.a.createElement("div", {
						className: q.a.userName
					}, null !== (c = null == t ? void 0 : t.name) && void 0 !== c ? c : n.displayName))
				})))
			};
			var z = n("./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/index.m.less"),
				Y = n.n(z);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = e => {
				let {
					subredditId: t
				} = e;
				var n, s;
				const i = Object(o.e)(e => Object(v.f)(e, {
						subredditId: t
					})),
					a = Object(o.e)(e => i && Object(u.h)(e, {
						tournamentId: i.tournamentId
					}));
				return i ? r.a.createElement("section", {
					className: Y.a.container,
					style: {
						backgroundImage: F.a[i.theme] || F.a.theme_1
					}
				}, r.a.createElement("div", {
					className: Y.a.tournamentInfo
				}, r.a.createElement("p", null, J._("Predictions Tournament", null, {
					hk: "2AxvmU"
				})), r.a.createElement("h1", {
					className: Object(D.a)(Y.a.tournamentTitle, {
						[Y.a.long]: i.name.length > 40
					})
				}, i.name, " ", r.a.createElement(M.a, {
					status: i.status
				}))), r.a.createElement("div", {
					className: Y.a.stats
				}, (null == a ? void 0 : a.topPredictorsRank) && a.topPredictorsRank.length >= 3 && r.a.createElement(Q, {
					className: Y.a.stat,
					ranks: a.topPredictorsRank.slice(0, 3)
				}), r.a.createElement("div", {
					className: Object(D.a)(Y.a.stat, Y.a.simple)
				}, r.a.createElement("dt", null, i.totalParticipantsCount ? Object(B.b)(i.totalParticipantsCount) : "--"), r.a.createElement("dd", null, J._("Players", null, {
					hk: "1S5q3e"
				}))), r.a.createElement("div", {
					className: Object(D.a)(Y.a.stat, Y.a.simple)
				}, r.a.createElement("dt", null, i.totalPredictionsCount || "--"), r.a.createElement("dd", null, J._("Predictions", null, {
					hk: "3E8BVX"
				}))), r.a.createElement("div", {
					className: Object(D.a)(Y.a.stat, Y.a.simple)
				}, r.a.createElement("dt", {
					className: Object(D.a)({
						[Y.a.long]: Boolean((null === (n = null == a ? void 0 : a.currentRank) || void 0 === n ? void 0 : n.rank) && a.currentRank.rank >= 1e6)
					})
				}, (null === (s = null == a ? void 0 : a.currentRank) || void 0 === s ? void 0 : s.rank) || "--"), r.a.createElement("dd", null, J._("Your rank", null, {
					hk: "2tS82X"
				}))))) : null
			};
			var X = n("./src/reddit/components/Econ/PredictionsPostList/index.m.less"),
				$ = n.n(X);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(x.a)(e => {
				const t = Object(E.fb)(),
					n = null == t ? void 0 : t.queryParams["prediction-tournament-rank"],
					s = Object(o.e)(t => Object(O.D)(t, e.listingName)),
					{
						isFetched: a
					} = Object(i.a)(s),
					c = Object(o.e)(e => Object(v.l)(e, {
						subredditId: s
					})),
					d = r.a.useMemo(() => Object.values(c).sort(_.b).map(e => e.id), [Object.keys(c).length]);
				return r.a.createElement("div", {
					className: $.a.container
				}, a && r.a.createElement(r.a.Fragment, null, r.a.createElement(Z, {
					subredditId: s
				}), r.a.createElement(w, {
					subredditId: s
				})), a && n && r.a.createElement(h, {
					subredditId: s,
					queriedTournamentId: n
				}), r.a.createElement(f.a, ee({}, e, {
					postsById: c,
					postIds: d,
					loadMore: null,
					layout: g.g.Large
				})))
			})
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/Content.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less"),
				d = n.n(c);
			const l = e => {
				let {
					steps: t,
					withModalStyles: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(a.a)(d.a.banner, {
						[d.a.withModalStyles]: n
					})
				}, i.a.createElement("div", {
					className: d.a.header
				}, i.a.createElement("h2", null, i.a.createElement("span", {
					className: d.a.subHeader
				}, r.fbt._("Predictions", null, {
					hk: "ACRaq"
				})), r.fbt._("How It Works", null, {
					hk: "3QW4EZ"
				})), i.a.createElement("img", {
					alt: r.fbt._("Snoos gathered around a dark ball", null, {
						hk: "2sN6dD"
					}),
					className: d.a.bannerImage,
					src: `${s.a.assetPath}/img/econ/predictions/predictor_snoos_small.png`
				})), i.a.createElement("div", {
					className: d.a.innerCircle
				}), i.a.createElement("div", {
					className: d.a.middleCircle
				}), i.a.createElement("div", {
					className: d.a.outerCircle
				})), i.a.createElement("div", {
					className: Object(a.a)(d.a.stepsWrapper, {
						[d.a.withModalStyles]: n
					})
				}, t.map((e, n) => {
					let {
						title: s,
						description: r
					} = e;
					return i.a.createElement("div", {
						key: s,
						className: d.a.step
					}, i.a.createElement("div", {
						className: Object(a.a)(d.a.stepCount, {
							[d.a.showConnectingLine]: n !== t.length - 1
						})
					}, i.a.createElement("span", {
						className: d.a.stepNumber
					}, n + 1)), i.a.createElement("div", null, i.a.createElement("h3", {
						className: d.a.stepTitle
					}, s), i.a.createElement("p", {
						className: d.a.stepDescription
					}, r)))
				})))
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less": function(e, t, n) {
			e.exports = {
				widget: "_2skejWRT1rfgG6BplBSilb",
				banner: "_3Vuq-pvkzBHvhhc3OpN8CM",
				bannerImage: "_2GFV0XwSqv5Tr7PgZrRhVJ",
				withModalStyles: "_1RCK5xRisccYHWg1jiIoGb",
				circle: "_2016VIWG6bI8Nj8dsE4ypu",
				innerCircle: "_3j7kvNb-J6NJvKhocXhFpj",
				middleCircle: "_2m_eeq88Ifrg139rZyFFXk",
				outerCircle: "_3Ylo3qve0XxZ8mD9a2f841",
				header: "_2uBF46oc23WTMTLsgZkvHK",
				subHeader: "_2B5e_YXlIHTvceClBKv1h7",
				stepsWrapper: "_1A39M70HpOpbB2VfD7JRbq",
				step: "_1Z2_r-1ZgxI_OPxZQClct5",
				stepCount: "_2HWLDJDxl7OJmP4RsXqD9G",
				showConnectingLine: "_2XjaqnXdYZD-Z3ebpnuijI",
				stepNumber: "_39kWugzptUpQdvLWvfg7p6",
				stepTitle: "_1sgBe74lmm4Ril3sKb2nVU",
				stepDescription: "Utf73H7YpNoys-kCKEC6r",
				learnMoreWrapper: "_2KfRiOpMkVmGl6pasDgDj",
				learnMoreButton: "_3sIJNS0bEKk48Q-RSRYaUB"
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "jdE9Qjw-aDJCVYAdabIzn"
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return te
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/econ/index.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				m = n("./src/reddit/components/UserIcon/index.tsx"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/UserAvatar/index.m.less"),
				h = n.n(b);
			const f = e => {
				let {
					className: t,
					user: n,
					tokenIcon: s
				} = e;
				var o, i, d, b;
				const {
					redditor: f,
					redditorInfo: x,
					rank: g,
					score: E
				} = n, _ = null !== (o = null == f ? void 0 : f.name) && void 0 !== o ? o : null == x ? void 0 : x.displayName;
				return r.a.createElement(p.a, {
					className: Object(c.a)(t, {
						[h.a.first]: 1 === g,
						[h.a.third]: 3 === g
					}),
					to: `/user/${_}`,
					disabled: (null == x ? void 0 : x.displayName) === l.F || (null == x ? void 0 : x.displayName) === l.Lb
				}, r.a.createElement("div", {
					className: h.a.avatarContainer
				}, r.a.createElement("div", {
					className: h.a.outerCircle
				}, r.a.createElement("div", {
					className: h.a.innerCircle
				})), (null === (i = null == x ? void 0 : x.snoovatarIcon) || void 0 === i ? void 0 : i.url) ? r.a.createElement("img", {
					className: h.a.avatar,
					alt: a.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					src: x.snoovatarIcon.url
				}) : r.a.createElement("div", {
					className: h.a.defaultAvatar
				}, r.a.createElement(m.a, {
					className: h.a.userIcon,
					iconUrl: null === (d = null == f ? void 0 : f.icon) || void 0 === d ? void 0 : d.url,
					isNSFW: Boolean(null === (b = null == f ? void 0 : f.profile) || void 0 === b ? void 0 : b.isNsfw),
					userName: _
				})), r.a.createElement(u.a, {
					className: h.a.placeBadge,
					rank: g
				})), r.a.createElement("div", {
					className: h.a.winnerName
				}, _), r.a.createElement("div", {
					className: h.a.score
				}, r.a.cloneElement(s, {
					className: h.a.tokenIcon
				}), " ", E))
			};
			var x = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts"),
				E = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				O = n("./src/reddit/hooks/useModalState.ts"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				I = n("./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/index.m.less"),
				S = n.n(I);
			const C = e => {
				let {
					subredditId: t
				} = e;
				var n;
				const [i, l, u] = Object(O.a)(!1), m = Object(y.a)(), p = Object(o.e)(e => Object(j.f)(e, {
					subredditId: t
				})), {
					leaderboard: b,
					error: h
				} = Object(g.a)(t);
				if (Object(s.useEffect)(() => {
						b && m(Object(v.f)())
					}, [m, b]), h || !(null === (n = null == b ? void 0 : b.topPredictorsRank) || void 0 === n ? void 0 : n.length) || b.topPredictorsRank.length < 3 || !p) return null;
				const I = b.topPredictorsRank.slice(0, 3),
					C = r.a.createElement(d.a, {
						tournamentId: p.tournamentId
					});
				return r.a.createElement(E.a, {
					className: S.a.themedWidget,
					contentOnly: !0
				}, r.a.createElement("h2", {
					className: S.a.header
				}, a.fbt._("All time top predictors", null, {
					hk: "1sZnun"
				})), r.a.createElement("div", {
					className: S.a.winnersContainer
				}, I.map(e => {
					var t;
					return r.a.createElement(f, {
						className: Object(c.a)(S.a.user, {
							[S.a.first]: 1 === e.rank,
							[S.a.second]: 2 === e.rank
						}),
						key: null === (t = e.redditorInfo) || void 0 === t ? void 0 : t.id,
						user: e,
						tokenIcon: C
					})
				})), r.a.createElement(_.a, {
					priority: _.c.Primary,
					className: S.a.seeAllButton,
					onClick: () => {
						m(Object(v.b)()), l()
					},
					isFullWidth: !0
				}, a.fbt._("See all", null, {
					hk: "23jjqI"
				})), i && r.a.createElement(x.a, {
					leaderboard: b,
					tokenIcon: C,
					onClose: u
				}))
			};
			var N = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				k = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				P = n("./src/lib/prettyPrintNumber/index.ts"),
				T = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Stats/index.m.less"),
				w = n.n(T);
			const L = e => {
				let {
					tournament: t,
					userRank: n
				} = e;
				return r.a.createElement("dl", {
					className: w.a.statsList
				}, r.a.createElement("div", {
					className: w.a.stat
				}, r.a.createElement("dt", {
					className: w.a.statValue
				}, t.totalParticipantsCount ? Object(P.b)(t.totalParticipantsCount) : "--"), r.a.createElement("dd", {
					className: w.a.statDescription
				}, a.fbt._("Players", null, {
					hk: "QKnjj"
				}))), r.a.createElement("div", {
					className: w.a.stat
				}, r.a.createElement("dt", {
					className: w.a.statValue
				}, t.totalPredictionsCount || "--"), r.a.createElement("dd", {
					className: w.a.statDescription
				}, a.fbt._("Predictions", null, {
					hk: "2MJSk1"
				}))), r.a.createElement("div", {
					className: w.a.stat
				}, r.a.createElement("dt", {
					className: Object(c.a)(w.a.statValue, {
						[w.a.long]: Boolean((null == n ? void 0 : n.rank) && n.rank >= 1e6)
					})
				}, (null == n ? void 0 : n.rank) || "--"), r.a.createElement("dd", {
					className: w.a.statDescription
				}, a.fbt._("Your rank", null, {
					hk: "2aohc3"
				}))))
			};
			var A = n("./src/reddit/components/HumanDate/index.tsx"),
				R = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				D = n("./src/reddit/helpers/trackers/predictions.ts"),
				B = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Predictor/index.m.less"),
				F = n.n(B);
			const M = e => {
				let {
					className: t,
					userRank: n
				} = e;
				const s = Object(y.a)(),
					{
						rank: o,
						redditor: i,
						redditorInfo: a
					} = n,
					{
						icon: d,
						name: b,
						profile: h
					} = i || {},
					f = null != b ? b : a.displayName;
				return r.a.createElement("div", {
					className: Object(c.a)(F.a.predictor, t)
				}, r.a.createElement(u.a, {
					className: F.a.rank,
					rank: o
				}), r.a.createElement(p.a, {
					className: F.a.userLink,
					onClick: () => s(Object(D.g)({
						targetUserId: a.id
					})),
					to: `/user/${f}`,
					disabled: a.displayName === l.F || a.displayName === l.Lb
				}, r.a.createElement("div", {
					className: F.a.leaderboardIcon
				}, r.a.createElement(m.a, {
					className: Object(c.a)(F.a.avatar),
					iconUrl: null == d ? void 0 : d.url,
					isNSFW: !!(null == h ? void 0 : h.isNsfw),
					userName: null != f ? f : ""
				})), r.a.createElement("div", {
					className: F.a.userName
				}, f)))
			};
			var U = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/index.m.less"),
				W = n.n(U);
			const H = e => {
				let {
					tournamentId: t
				} = e;
				const [n, s, i] = Object(O.a)(!1), c = Object(o.e)(e => Object(j.a)(e, t)), l = Object(o.e)(e => Object(R.h)(e, {
					tournamentId: t
				})), u = Object(y.a)();
				if (!c || !l) return null;
				const m = l.topPredictorsRank.slice(0, 3);
				return r.a.createElement("section", null, r.a.createElement("div", {
					className: W.a.header,
					style: {
						backgroundImage: N.a[c.theme] || N.a.theme_1
					}
				}, r.a.createElement("h3", {
					className: W.a.tournamentTitle
				}, c.name, " ", r.a.createElement(k.a, {
					status: c.status
				})), c.createdAt && c.endedAt && r.a.createElement("div", {
					className: W.a.tournamentDate
				}, r.a.createElement(A.a, {
					seconds: Math.floor(c.createdAt / 1e3),
					showDay: !0,
					shortMonths: !0
				}), " ", "-", " ", r.a.createElement(A.a, {
					seconds: Math.floor(c.endedAt / 1e3),
					showDay: !0,
					shortMonths: !0
				}))), r.a.createElement("div", {
					className: W.a.content
				}, r.a.createElement("div", {
					className: W.a.tournamentInfo
				}, r.a.createElement("div", {
					className: W.a.leaderboard
				}, m.map(e => r.a.createElement(M, {
					key: e.redditorInfo.id,
					userRank: e
				}))), r.a.createElement(L, {
					tournament: c,
					userRank: l.currentRank
				})), r.a.createElement(_.a, {
					className: W.a.seeAllButton,
					onClick: () => {
						s(), u(Object(v.a)())
					},
					isFullWidth: !0
				}, a.fbt._("See all", null, {
					hk: "aMyfi"
				}))), n && r.a.createElement(x.a, {
					isPreviousEvent: !0,
					leaderboard: l,
					tokenIcon: r.a.createElement(d.a, {
						tournamentId: c.tournamentId
					}),
					tournamentId: c.tournamentId,
					onClose: i
				}))
			};
			var V = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/index.m.less"),
				G = n.n(V);
			const q = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(y.a)(),
					s = Object(o.e)(e => Object(j.g)(e, {
						subredditId: t
					}).slice(1, 3).map(e => e.tournamentId));
				return r.a.useEffect(() => {
					s.length && n(Object(v.d)())
				}, [s]), s.length ? r.a.createElement(E.a, {
					className: G.a.themedWidget,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: G.a.content
				}, r.a.createElement("h2", {
					className: G.a.header
				}, a.fbt._("Previous tournaments", null, {
					hk: "2BA4B9"
				})), s.map(e => r.a.createElement(H, {
					key: e,
					tournamentId: e
				})))) : null
			};
			var K = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/Content.tsx"),
				Q = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less"),
				z = n.n(Q);
			const Y = [{
				title: a.fbt._("Mods create questions", null, {
					hk: "2Ay8LV"
				}),
				description: a.fbt._("A Predictions tournament kicks off once questions are created. More questions can be added as the tournament progresses.", null, {
					hk: "11SFeA"
				})
			}, {
				title: a.fbt._("Users make predictions", null, {
					hk: "4c8bYm"
				}),
				description: a.fbt._("Predict using tokens given to you. Put down more tokens to win bigger rewards (if you’re right).", null, {
					hk: "17d2f"
				})
			}, {
				title: a.fbt._("Track the competition", null, {
					hk: "1ZIdYB"
				}),
				description: a.fbt._("Follow the leaderboard to see who gets the most tokens. When mods close a tournament, final winners are announced!", null, {
					hk: "3o8fok"
				})
			}];
			var J = () => {
					const e = Object(y.a)();
					Object(s.useEffect)(() => {
						e(Object(D.r)())
					}, [e]);
					return r.a.createElement(E.a, {
						className: z.a.widget,
						contentOnly: !0
					}, r.a.createElement(K.a, {
						steps: Y
					}), r.a.createElement("div", {
						className: z.a.learnMoreWrapper
					}, r.a.createElement(p.a, {
						to: "/predictions",
						onMouseDown: () => e(Object(D.f)())
					}, r.a.createElement(_.t, {
						className: z.a.learnMoreButton,
						isFullWidth: !0
					}, a.fbt._("Learn More", null, {
						hk: "4wy6Ra"
					})))))
				},
				Z = (n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"), n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"));

			function X(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(o.e)(e => Object(j.f)(e, {
					subredditId: t
				}));
				return n ? r.a.createElement(Z.default, {
					subredditId: t,
					tournamentId: n.tournamentId
				}) : null
			}
			var $ = n("./src/reddit/components/Econ/Tournament/Sidebar/index.m.less"),
				ee = n.n($);

			function te(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(o.e)(i.s),
					s = Object(o.e)(i.r),
					a = Object(o.e)(i.q);
				return r.a.createElement("div", {
					className: ee.a.container
				}, n && r.a.createElement(C, {
					subredditId: t
				}), a && r.a.createElement(J, null), r.a.createElement(X, {
					subredditId: t
				}), s && r.a.createElement(q, {
					subredditId: t
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Economics-SubredditPremium-LFGBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Economics-SubredditPremium-LFGBanner").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumNewUserWelcome").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", o)
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, n) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/EmptySubredditPostList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/PostList/Placeholder.tsx"),
				l = n("./src/reddit/hooks/useIsClient.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/components/Econ/Prediction/EmptyPredictions/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = c.a.wrapped(d.a, "backgroundPlaceholder", p.a);

			function f(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(o.e)(e => !!t && Object(u.k)(e, {
						subredditId: t
					})),
					s = Object(l.a)();
				return r.a.createElement("div", {
					className: Object(a.a)(p.a.component, p.a.emptyHomepage)
				}, r.a.createElement(h, {
					isLoading: n,
					layout: i.g.Classic
				}), s && !n && r.a.createElement("div", {
					className: p.a.mainContentWrapper
				}, r.a.createElement("div", {
					className: p.a.mainContent
				}, r.a.createElement("div", {
					className: p.a.primaryText
				}, b._("No prediction tournament posts", null, {
					hk: "1gqn5x"
				})))))
			}
			var x = n("./src/reddit/components/EmptySubreddit.tsx");

			function g(e) {
				let {
					isPredictionsPage: t,
					listingName: n,
					sort: s,
					subreddit: o
				} = e;
				return t ? r.a.createElement(f, {
					subredditId: null == o ? void 0 : o.id
				}) : r.a.createElement(x.a, {
					listingName: n,
					sort: s,
					subreddit: o || void 0
				})
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, n) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return U
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "b", (function() {
				return q
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/pick.js"),
				o = n.n(r),
				i = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Emoji/index.m.less"),
				h = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = p.a.wrapped(e => {
				let {
					backgroundImage: t,
					style: n,
					...s
				} = e;
				return c.a.createElement("div", f({
					style: {
						...n || {},
						backgroundImage: `url('${t}')`
					}
				}, s))
			}, "EmojiDisplay", h.a);
			var g = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				_ = n("./src/reddit/constants/colors.ts"),
				v = n("./src/reddit/constants/parameters.ts"),
				O = n("./src/reddit/controls/InternalLink/index.tsx"),
				y = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				j = n("./src/reddit/icons/svgs/Close/index.tsx"),
				I = n("./src/reddit/models/Flair/index.ts"),
				S = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = n("./src/reddit/components/Flair/index.m.less"),
				N = n.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const P = Object(E.a)(g.b),
				T = p.a.div("FlairWrapper", N.a),
				w = p.a.wrapped(d.a, "CloseButton", N.a),
				L = p.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: n,
						...s
					} = e;
					const r = n;
					return c.a.createElement(x, k({
						style: {
							...A(!!t, r) || {}
						}
					}, s))
				}), "FlairEmojiDisplay", N.a),
				A = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				R = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						s = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[v.r]: s,
						[v.u]: t ? "1" : ""
					})
				},
				D = e => e.isFlairFilter ? c.a.createElement(O.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(O.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: R(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class B extends c.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[N.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(S.a)(this.props).flair,
							color: `${U(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(w, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(j.a, {
						className: N.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(S.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(P, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(D, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const F = Object(m.a)(B),
				M = Object(m.a)(e => {
					let t = "",
						n = !1;
					const s = e.richtext.map((s, r) => {
						if (s.e === I.c.Emoji) {
							const o = s;
							return t += o.a, n = !0, c.a.createElement(L, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: r,
								title: o.a
							})
						} {
							const e = s;
							return t += e.t, c.a.createElement("span", {
								key: r
							}, e.t)
						}
					});
					let r;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (r = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = c.a.createElement(T, {
						className: Object(u.a)(e.className, {
							[N.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...r,
							backgroundColor: e.backgroundColor || Object(S.a)(e).flair,
							color: `${U(e)}`
						}
					}, s, e.isSelected && c.a.createElement(w, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(j.a, {
						className: N.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(S.a)(e).flair
						}
					})));
					return c.a.createElement(D, {
						flair: o,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				U = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(S.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(y.a)(Object(S.a)(e).post, _.a.black, _.a.white) : e.textColor === I.e.Dark ? _.a.black : _.a.white,
				W = p.a.wrapped(F, "TextFlair", N.a),
				H = p.a.wrapped(M, "RichTextFlair", N.a),
				V = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.i)(.1, Object(S.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				G = p.a.wrapped(e => {
					const t = V(e),
						n = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(D, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", N.a);

			function q(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: r,
					isFlairFilter: o,
					isSelected: i,
					onClick: a,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: h
				} = e, f = Object(u.a)({
					[N.a.flairVariant]: o,
					[N.a.small]: o && !e.large,
					[N.a.large]: o && e.large
				}, t);
				switch (r.type) {
					case I.f.Richtext:
						return n || !r.richtext ? null : c.a.createElement(H, {
							backgroundColor: r.backgroundColor,
							className: f,
							forceSmallEmojis: b,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: r.richtext,
							subredditName: m,
							textColor: r.textColor,
							to: h
						});
					case I.f.Text:
						return n || !r.text ? null : c.a.createElement(W, {
							backgroundColor: r.backgroundColor,
							className: f,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: r.text,
							textColor: r.textColor,
							redditStyle: !p,
							to: h
						});
					case I.f.Meta:
						return c.a.createElement(W, {
							backgroundColor: r.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: m,
							text: r.text,
							textColor: r.textColor,
							redditStyle: !p,
							to: h
						});
					case I.f.Nsfw:
					case I.f.Spoiler:
						return c.a.createElement(G, {
							className: t,
							text: r.text,
							type: r.type
						});
					case I.f.Quarantined:
						return null;
					case I.f.Oc:
						return c.a.createElement(W, {
							backgroundColor: _.a.alienblue,
							text: r.text,
							textColor: I.e.Light,
							tooltip: s.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return r.text ? c.a.createElement(W, {
							backgroundColor: r.backgroundColor,
							className: f,
							isFlairFilter: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: r.text,
							redditStyle: !p,
							to: h
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/Flair/index.tsx"),
				l = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.ab
				}),
				b = Object(a.b)(p),
				h = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = b(e => {
				let {
					className: t,
					isFlairFilter: n,
					onClick: s,
					onMouseDown: o,
					disabled: a = !1,
					flair: c,
					labelNSFW: m,
					subredditName: p
				} = e;
				const b = !!c.find(e => e.type === u.f.Richtext),
					f = c.map(e => {
						if (e.type === u.f.Text && b) return null;
						if (!m && e.type === u.f.Nsfw) return null;
						const t = Object(l.j)(e),
							c = `/r/${p}/`,
							f = o ? () => o(e) : r.a;
						return i.a.createElement(d.b, {
							isFlairFilter: n,
							key: h(e),
							onClick: s,
							onMouseDown: f,
							disabled: a,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: p,
							to: Object(l.e)(c, t)
						})
					});
				return i.a.createElement("div", {
					className: t
				}, f)
			})
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/FlairList/index.tsx"),
				l = n("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/flair.ts"),
				b = n("./src/reddit/helpers/trackers/postFlair.ts"),
				h = n("./src/reddit/models/Flair/index.ts"),
				f = n("./src/reddit/selectors/postFlair.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/components/FlairWrapper/index.m.less"),
				E = n.n(g);
			const _ = Object(i.b)(() => Object(a.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(u.q)(e, {
							pageLayer: n
						})
					},
					isPostFlairEnabled: (e, t) => Object(f.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					subredditName: (e, t) => {
						let {
							post: n
						} = t;
						return Object(x.S)(e, {
							subredditId: n.belongsTo.id
						}).name
					}
				})),
				v = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: s.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: h.f.Oc
					}), e.isMeta && t.push({
						text: s.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: h.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = _(e => {
				let {
					className: t,
					disableFlair: n,
					flairPosition: s,
					isFlairFilter: r,
					isPostFlairEnabled: i,
					nowrap: a,
					post: u,
					sendEvent: f,
					subredditName: x,
					titleFlair: g
				} = e;
				const _ = Object(l.a)(),
					O = s === h.b.Left,
					y = g || v(u),
					j = [];
				let I = [];
				O ? y.map(e => {
					Object(p.q)(e.type) ? j.push(e) : I.push(e)
				}) : I = y;
				const S = a ? E.a.flairNoWrap : j.length > 0 || I.length > 0 ? E.a.flairWrapper : null,
					C = e => {
						const t = {
							id: u.belongsTo.id,
							eventType: u.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(m.e)(m.a.SearchResults), f && f(Object(b.a)(u.id, t))
					},
					N = e => {
						Object(m.e)(m.a.SearchResults), f && f(Object(b.e)(e, u.id))
					},
					k = !(n || !y || !y.length);
				return k ? o.a.createElement("div", {
					className: Object(c.a)(S, t),
					"data-ignore-click": _
				}, k && j && o.a.createElement(d.a, {
					className: E.a.flairList,
					isFlairFilter: r,
					key: "leftFlair",
					onClick: C,
					onMouseDown: N,
					flair: j,
					disabled: !i,
					subredditName: x
				}), k && o.a.createElement(d.a, {
					className: E.a.flairList,
					isFlairFilter: r,
					key: "rightFlair",
					onClick: C,
					onMouseDown: N,
					flair: I,
					disabled: !i,
					subredditName: x
				})) : null
			})
		},
		"./src/reddit/components/Governance/ClaimPointsBanner/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-ClaimPointsBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-ClaimPointsBanner").then(n.bind(null, "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = Object(r.a)("spClaimablePoints", o)
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				i = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(i.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(o.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				icon: "_3HTtcITrR-crvsRovLrijl",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
		},
		"./src/reddit/components/HotPotatoEmbed/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2lTcCESjnP_DKJcPBqBFLK",
				expanded: "_3YFAwrV7olBOgwhZhuM3fH",
				hotPotatoIcon: "rgiE-zLgaejGTLKViTz7K",
				iframe: "Q-OBKuePQXXm3LGhGfv3k",
				overlay: "moeaZEzC0AbAvmDwN22Ma"
			}
		},
		"./src/reddit/components/HotPotatoEmbed/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/header.ts"),
				u = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/search.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/tooltip.ts");
			const h = s.a.hotPotatoUrl,
				f = new URL(`${h}/embed`),
				x = ["fullscreen", "edit", "cx", "cy", "px", "ts"],
				g = () => {
					var e;
					if ("undefined" == typeof window) return {
						iframeURL: void 0,
						isFullscreen: !1
					};
					const t = window.location.search.toLocaleLowerCase(),
						n = new URLSearchParams(t);
					for (const s of x) {
						const t = null === (e = n.get(s)) || void 0 === e ? void 0 : e.toLocaleLowerCase(),
							r = "string" == typeof t && "false" !== t;
						n.has(s) && r && t && f.searchParams.set(s, t)
					}
					return {
						iframeURL: f.toString(),
						isFullscreen: f.searchParams.has("fullscreen") || f.searchParams.has("edit")
					}
				},
				E = s.a.hotPotatoUrl;
			var _, v;
			! function(e) {
				e.RefreshAuth = "refreshAuth", e.Close = "close", e.SignIn = "signIn", e.SyncCoordinates = "syncCoordinates", e.OpenProfile = "openProfile"
			}(_ || (_ = {})),
			function(e) {
				e.SetFullScreen = "setFullScreen", e.InjectAuthHeaders = "injectAuthHeaders", e.InjectTelemetryDefaults = "injectTelemetryDefaults"
			}(v || (v = {}));
			var O = class {
					constructor(e, t, n, s, r, o) {
						this.subscribe = () => {
							null === window || void 0 === window || window.addEventListener("message", this.onMessage)
						}, this.unsubscribe = () => {
							null === window || void 0 === window || window.removeEventListener("message", this.onMessage)
						}, this.onMessage = e => {
							let {
								origin: t,
								data: n
							} = e;
							t === E && (n.type === _.RefreshAuth ? this.sendMessageAuthAndTelemetry() : n.type === _.Close ? this.onMessageClose() : n.type === _.SignIn && n.dest ? this.onMessageSignIn(n.dest) : n.type === _.SyncCoordinates && n.data ? this.onMessageSyncCoordinates(n.data) : n.type === _.OpenProfile && n.data && this.onMessageOpenProfile(n.data))
						}, this.sendMessageAuthAndTelemetry = () => {
							const {
								expiration: e,
								headers: t,
								telemetryDefaults: n
							} = this.getAuthClientData();
							this.sendMessageInjectAuthHeaders({
								expiration: e,
								headers: t
							}), this.sendMessageInjectTelemetryDefaults({
								telemetryDefaults: n
							})
						}, this.sendMessageFullscreen = e => {
							this.sendMessage({
								type: v.SetFullScreen,
								state: e
							})
						}, this.sendMessageInjectAuthHeaders = e => {
							this.sendMessage({
								type: v.InjectAuthHeaders,
								...e
							})
						}, this.sendMessageInjectTelemetryDefaults = e => {
							this.sendMessage({
								type: v.InjectTelemetryDefaults,
								...e
							})
						}, this.ref = e, this.getAuthClientData = t, this.onMessageClose = n, this.onMessageSignIn = s, this.onMessageSyncCoordinates = r, this.onMessageOpenProfile = o
					}
					sendMessage(e) {
						var t, n;
						null === (n = null === (t = this.ref.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage(e, E)
					}
				},
				y = n("./src/reddit/components/TrackingHelper/index.tsx"),
				j = n("./src/reddit/constants/keycodes.ts"),
				I = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				S = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				N = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/telemetry.ts")),
				k = n("./src/telemetry/models/Event.ts");
			const P = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return Object.keys(e).reduce((n, s) => {
					const r = e[s];
					return r ? (n[s] = "object" == typeof r && t <= 4 ? P(r, t + 1) : r, n) : n
				}, {})
			};
			var T = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/HotPotatoEmbed/index.m.less"),
				L = n.n(w);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = Object(c.c)({
				session: e => e.user.session,
				telemetryDefaults: e => {
					const t = {
							...Object(N.n)(e),
							...{
								action: k.d.Load,
								source: k.f.Experiment,
								noun: k.e.UserId
							}
						},
						{
							action: n,
							source: s,
							noun: r,
							...o
						} = Object(k.g)(t);
					return P(o)
				},
				isTooltipOpened: e => Boolean(e.tooltip.tooltipId),
				isSearchDropdownOpened: e => e.search.isDropdownOpen,
				isHeaderDropdownOpened: e => e.header.isSubscriptionsDropdownOpen,
				isLoggedIn: T.Q
			}), D = Object(i.b)(R, e => ({
				closeSearchDropdown: () => e(Object(m.k)()),
				closeHeaderDropdown: () => e(Object(l.f)()),
				closeTooltipModal: () => e(Object(b.j)()),
				openLoginModal: () => e(Object(u.i)()),
				openProfilePage: t => e(Object(a.b)(`/user/${t}`)),
				openErrorToast: () => e(Object(p.f)({
					duration: p.a,
					kind: C.b.Error,
					text: A._("Something wen't wrong. Please try again later.", null, {
						hk: "4vD48K"
					})
				}))
			}));
			class B extends o.a.Component {
				constructor(e) {
					super(e), this.iframeRef = Object(r.createRef)(), this.handleEscapeKey = e => {
						e.code === j.a.Escape.toString() && this.toggleFullScreen(!1)
					}, this.toggleFullScreen = e => {
						this.messenger.sendMessageFullscreen(e), this.setState({
							isFullscreen: e
						}), Object(I.e)(!e)
					}, this.getAuthClientData = () => {
						const {
							session: e,
							telemetryDefaults: t
						} = this.props;
						return {
							expiration: e ? new Date(e.expires).getTime() : 0,
							headers: e ? {
								Authorization: `Bearer ${e.accessToken}`
							} : {},
							telemetryDefaults: t
						}
					}, this.onMessageSignIn = () => {
						this.props.openLoginModal()
					}, this.onMessageClose = () => {
						this.toggleFullScreen(!1)
					}, this.onMessageSyncCoordinates = e => {
						let {
							cx: t,
							cy: n,
							px: s,
							ts: r
						} = e;
						const o = new URL(location.href);
						o.searchParams.set("cx", `${t}`), o.searchParams.set("cy", `${n}`), o.searchParams.set("px", `${s}`), r && o.searchParams.set("ts", `${r}`), history.replaceState({}, "", o.toString())
					}, this.onMessageOpenProfile = e => {
						let {
							profileName: t
						} = e;
						t && "string" == typeof t && this.props.openProfilePage(t)
					}, this.onLoad = () => {
						this.setState({
							isLoaded: !0
						})
					}, this.onError = () => {
						this.setState({
							isLoaded: !1
						}), this.props.openErrorToast()
					}, this.onOverlayClick = () => {
						const {
							isFullscreen: e
						} = this.state, t = this.isAnyRedditModalOpened();
						e && t ? this.closeAnyRedditModal() : this.state.isFullscreen || (this.toggleFullScreen(!0), this.props.sendEvent(Object(S.c)()))
					}, this.messenger = new O(this.iframeRef, this.getAuthClientData, this.onMessageClose, this.onMessageSignIn, this.onMessageSyncCoordinates, this.onMessageOpenProfile);
					const {
						iframeURL: t,
						isFullscreen: n
					} = g();
					this.state = {
						iframeURL: t,
						isFullscreen: n,
						isLoaded: !1
					}
				}
				componentDidMount() {
					this.messenger.subscribe(), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					this.messenger.unsubscribe(), document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentDidUpdate(e) {
					let {
						session: t,
						isLoggedIn: n
					} = e;
					this.props.isLoggedIn === n && this.props.session === t || this.messenger.sendMessageAuthAndTelemetry()
				}
				closeAnyRedditModal() {
					const {
						isTooltipOpened: e,
						isHeaderDropdownOpened: t,
						isSearchDropdownOpened: n
					} = this.props;
					e && this.props.closeTooltipModal(), t && this.props.closeHeaderDropdown(), n && this.props.closeSearchDropdown()
				}
				isAnyRedditModalOpened() {
					const {
						isTooltipOpened: e,
						isHeaderDropdownOpened: t,
						isSearchDropdownOpened: n
					} = this.props;
					return e || t || n
				}
				render() {
					const {
						isLoaded: e,
						isFullscreen: t,
						iframeURL: n
					} = this.state, r = this.isAnyRedditModalOpened();
					return o.a.createElement("div", {
						className: Object(d.a)(L.a.container, {
							[L.a.expanded]: t
						})
					}, n && o.a.createElement("iframe", {
						ref: this.iframeRef,
						onLoad: this.onLoad,
						onError: this.onError,
						className: L.a.iframe,
						allow: "web-share; clipboard-read; clipboard-write",
						src: n
					}), !e && o.a.createElement("img", {
						className: L.a.hotPotatoIcon,
						src: `${s.a.assetPath}/img/hot-potato-loader.gif`
					}), e && (!t || r) && o.a.createElement("div", {
						className: L.a.overlay,
						onClick: this.onOverlayClick
					}))
				}
			}
			t.a = Object(y.c)(D(B))
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => n.e("SubredditHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			var a = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var s;
					const a = Object(i.a)(),
						c = {
							...n,
							locale: null !== (s = n.locale) && void 0 !== s ? s : a
						};
					return r.a.createElement(r.a.Fragment, null, Object(o.d)(t, c))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var d = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var s;
					const o = Object(i.a)(),
						a = {
							...n,
							locale: null !== (s = n.locale) && void 0 !== s ? s : o
						};
					return r.a.createElement(r.a.Fragment, null, Object(c.a)(t, a))
				},
				l = n("./src/lib/constants/index.ts");
			var u = function(e) {
					let {
						seconds: t,
						locale: n
					} = e;
					const s = Object(i.a)(),
						o = null != n ? n : s;
					return r.a.createElement(r.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.D;
						const n = e * l.Sb;
						return new Date(n).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(t, o))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function b(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.D;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function h(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.D;
				const r = Object(p.e)(e, t),
					o = new Date(e * l.Sb);
				let i;
				if (r === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return r === p.a.Future ? i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(o, s) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.D;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, s) : r === p.a.Past && (i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(o, s)), `${i} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.D;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,s)}`
			}
			var f = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: s,
					locale: o
				} = e;
				const a = Object(i.a)(),
					c = null != o ? o : a;
				return r.a.createElement(r.a.Fragment, null, h(t, n, s, c))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				o = n("./src/lib/pubsub/index.ts"),
				i = n("./src/reddit/constants/listings.ts"),
				a = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === i.b.Popular,
				d = e => e && e.toLowerCase() === i.b.All,
				l = e => e && e === a.c,
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
					let t, n, o, a, m, {
						listingName: p,
						subreddit: b,
						idCardWidget: h
					} = e;
					const f = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						x = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let g, E;
					return l(p) ? (t = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = i.c[i.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), a = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/all", m = i.c[i.b.All]) : c(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/popular", m = i.c[i.b.Popular]) : p && (n = h && h.description, o = u(""), a = b.displayText, m = b.url, E = h && h.subscribersCount, g = h && h.currentlyViewingCount), {
						snooBackground: o,
						description: n,
						titleText: a,
						url: m,
						subscribersCount: E,
						subscribersText: f,
						currentlyViewingText: x,
						currentlyViewingCount: g,
						...t ? {
							bannerBackgroundImage: t
						} : {}
					}
				},
				p = new o.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				f = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-InFeedPostCreation").then(n.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", a.a),
				l = c.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: i,
					title: c,
					textWrapperClassName: u
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, a.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, r.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? r.a.createElement(d, null, s) : r.a.createElement(d, null), r.a.createElement(l, {
					className: u
				}, r.a.createElement("div", {
					className: a.a.title
				}, c), i && r.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = n.n(b);
			const f = o.a.createElement(u.a, {
					className: h.a.icon
				}),
				x = Object(a.c)({
					subreddit: m.x,
					subredditAboutInfo: m.u
				}),
				g = Object(i.b)(x);
			t.a = g(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = n && n.quarantineMessageHtml,
					i = n && n.quarantineMessage || s.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return o.a.createElement(p.a, {
					className: h.a.container,
					color: d.a.quarantine,
					icon: f,
					subtitle: o.a.createElement("span", null, s.fbt._("This community is {=quarantined}", [s.fbt._param("=quarantined", o.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, s.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", r ? o.a.createElement(c.a, {
						className: h.a.rawHtmlDisplay,
						html: r
					}) : i, " ", o.a.createElement(l.a, {
						className: h.a.link,
						to: "/"
					}, s.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: s.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				h = m.a.div("BottomText", u.a),
				f = e => r.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return r.a.createElement(h, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				g = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				E = Object(c.a)(x, [a.a.Click, a.a.Keydown]),
				_ = Object(c.a)(f, [a.a.Click, a.a.Keydown]),
				v = Object(o.b)(g);
			t.c = v(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? r.a.createElement(E, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(_, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return N
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/lodash/isNil.js"),
				c = n.n(a),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(i.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...s
							}
						} = this;
						l.a.publish(d.a, s, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(o.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const n = Object(h.b)(e, t),
					s = Object(f.H)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var g = Object(o.b)(() => Object(i.a)(x, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const E = (e, t) => {
				const n = Object(h.b)(e, t),
					s = Object(f.H)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var _ = Object(o.b)(() => Object(i.a)(E, e => e))(e => r.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var v = Object(o.b)(() => Object(i.c)({
					subreddit: f.S
				}))(e => r.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				O = n("./src/reddit/hooks/usePostContext.ts");
			var y = e => {
				const t = Object(O.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var j = e => {
				const t = Object(O.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var I = e => {
				const t = Object(O.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var S = Object(o.b)(() => Object(i.c)({
				subreddit: f.S
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var C = Object(o.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(f.K)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var N = Object(o.b)(() => Object(i.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(f.S)(e, {
						subredditId: n
					}) : null
				}
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(i);
			const c = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return o.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: a.a.unblurButton
					}, c(t, n)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: m.db
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				b = n("./src/reddit/components/PlayButton/index.tsx"),
				h = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				x = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				E = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/constants/tracking.ts"),
				j = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				I = n.n(j);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => e > 2 * E.e,
				N = e => {
					const t = Object(d.a)(I.a.image, h.g, e.className, {
							[I.a.mShowCentered]: e.showCentered,
							[I.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${E.j}px`), e.isListing || e.isTall && C(e.height) || (n.maxHeight = `${E.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				k = e => {
					const t = {};
					return (!e.showFull && Object(E.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${E.j}px`, e.shouldBlur && (t.maxWidth = Object(E.L)(e.height, e.width) ? `${E.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(I.a.container, e.className),
						style: t
					}, e.children)
				},
				P = Object(i.b)(() => Object(c.a)(_.F, O.jb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(_.b)(e, s) : null
				}, v.d, _.G, (e, t, n, s, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: s.pageType,
					post: r
				})));
			t.a = P(e => {
				const t = Object(g.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(x.a)(e.post, e.pageType)
					}
				}, w(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, w(e)) : w(e)
			});
			const T = (e, t) => o.a.createElement(N, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[y.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				w = e => {
					let {
						onClick: t,
						...n
					} = e;
					const r = Object(E.L)(n.height, n.width),
						i = C(n.height) && r;
					return o.a.createElement(k, S({}, n, {
						className: `${r?`${y.a} `:""}${n.className||""}`
					}), n.isListing ? o.a.createElement("div", {
						className: n.contentImageClassName
					}, T(r, n)) : o.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: I.a.imageLink
					}, T(r, n), n.shouldBlur && !n.isVideoThumbnail && o.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > E.j && Object(E.L)(n.height, n.width) && o.a.createElement("div", {
						className: I.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && o.a.createElement(b.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					s = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const h = 100,
				f = h / 2 / 1e3;
			var x = n("./src/lib/forceHttps/index.ts"),
				g = n("./src/lib/hooks/usePrevious.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function _(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: s,
					onBufferingChange: r,
					shouldLoad: a,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(o.useRef)(),
					b = Object(o.useRef)(),
					_ = Object(g.a)(c);

				function v(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (v(!c && (t || s)), b.current && r) return p.current = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							o = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, s) return s = !1, void(a = c);
							if (e.paused || e.seeking || !n) return void(a = c);
							const r = i;
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + f ? i = !0 : i && c >= a && c > a + f && (i = !1), a = c, r !== i && t(i)
						}, h);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(b.current, r), () => {
						p.current && p.current()
					}
				}, []), Object(o.useEffect)(() => {
					_ !== c && v(!c && (t || s))
				}, [_, c, t, s]), i.a.createElement("video", E({}, m, {
					ref: e => b.current = e,
					muted: !0
				}), i.a.createElement("source", {
					src: Object(x.a)(u || "")
				}))
			}
			var v = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				O = n.n(v);
			const y = Object(c.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function j(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: o,
					started: c
				} = Object(a.e)(t => y(t, e)), {
					postId: p,
					shouldLoad: b,
					source: h,
					height: f,
					isNotCardView: x,
					showFull: g,
					shouldPause: E,
					width: v,
					isListing: j,
					className: I,
					showCentered: S,
					originalSource: C
				} = e, N = Object(a.d)();

				function k(e) {
					N(e ? Object(l.r)(p) : Object(l.E)(p))
				}

				function P() {
					return N(Object(l.z)({
						postId: p
					}))
				}
				const T = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && N(Object(l.s)(p))
				}, 200);

				function w(e) {
					e.persist(), T(e)
				}

				function L(e) {
					var t;
					(o || R(e), c) || (t = e.timeStamp, N(Object(l.A)(p, t)))
				}

				function A(e) {
					N(Object(l.q)(p, e.timeStamp))
				}

				function R(e) {
					! function(e) {
						N(Object(l.D)({
							metadata: e,
							postId: p
						}))
					}({
						id: p,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function D(e) {
					s || L(e), o || R(e), N(Object(l.C)(p))
				}

				function B() {
					const e = {};
					return S && (e.margin = "0 auto"), j || (e.maxHeight = `${m.e}px`), i.a.createElement(_, {
						autoplay: t,
						className: Object(d.a)(u.a, O.a.styledVideo),
						height: f,
						isListing: j,
						isNotCardView: x,
						key: p,
						loop: !0,
						onBufferingChange: k,
						onLoadStart: A,
						onLoadedData: L,
						onLoadedMetadata: R,
						onPause: P,
						onPlaying: D,
						onTimeUpdate: w,
						shouldLoad: b,
						shouldPause: E,
						showCentered: S,
						showFull: g,
						source: h,
						style: e,
						width: v
					})
				}
				return j ? B() : i.a.createElement("div", {
					className: Object(d.a)(O.a.container, I, {
						[O.a.centered]: S
					})
				}, i.a.createElement("a", {
					href: C,
					target: "_blank",
					rel: "noopener noreferrer"
				}, B()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, n) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				videoStyles: "LAwAnSnoexNeHoqZmXdLD",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/ModProgressModule/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "ModProgressModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("ModProgressModule")]).then(n.bind(null, "./src/reddit/components/ModProgressModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModProgressModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/NewPostPill/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_369llFshxbL10dgfLlIApJ",
				joinOptimizationsM2: "_3Osc6MFU-m49imecphhHPb",
				caption: "_2TsfnDXso674GKQKeaYyJz",
				wrapperExp: "_1rsB1M-j-PhnVlJxrOyQWm",
				memberIcon: "DnG050aRzI2YZFy5DI13M",
				presenceDotOutlineClass: "_1UJxCy40wXDQVKcZcKkJy7"
			}
		},
		"./src/reddit/components/NewPostPill/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				l = n("./src/reddit/components/NewPostPill/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				const {
					onClick: t,
					subredditName: n
				} = e, l = Object(s.useContext)(c.a), p = Object(o.e)(e => Object(d.a)(e) || Object(d.c)(e));
				return r.a.createElement("div", {
					className: Object(i.a)(u.a.wrapper, {
						[u.a.wrapperExp]: l,
						[u.a.joinOptimizationsM2]: p
					}),
					onClick: t
				}, r.a.createElement(a.a, {
					iconsKey: n,
					shouldShowPresenceDot: !0,
					memberIconClassName: u.a.memberIcon,
					presenceDotOutlineClassName: u.a.presenceDotOutlineClass
				}), r.a.createElement("label", {
					className: u.a.caption
				}, m._("New Posts", null, {
					hk: "3tuby1"
				})))
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPicker.m.less": function(e, t, n) {
			e.exports = {
				InterestListButtons: "_3miLvWoAksppOIKDbHmCpH",
				interestListButtons: "_3miLvWoAksppOIKDbHmCpH",
				InterestButton: "_3oCL2oMbe3H81mue3bR1CQ",
				interestButton: "_3oCL2oMbe3H81mue3bR1CQ",
				sharedButtonStyles: "nGPPVLjaF9xHLhEfs0OCV",
				Selected: "_9bvUa3_8YwoacACdyRw_T",
				selected: "_9bvUa3_8YwoacACdyRw_T",
				Placeholder: "_3lj8QAQ0ABoP56baCrm__e",
				placeholder: "_3lj8QAQ0ABoP56baCrm__e",
				Icon: "_3DtgruA-lLYrQl-qbVEgJm",
				icon: "_3DtgruA-lLYrQl-qbVEgJm",
				isLeft: "_1U2p5JzQnPfAZNB3-974OG",
				isRight: "_3szUhYjG4tA4Hqfi9MD1fa",
				InterestPickerPreview: "_3mV_F85IUlHJXj6vglN9dL",
				interestPickerPreview: "_3mV_F85IUlHJXj6vglN9dL",
				Dismissed: "_3RAeTThkWAn32hs_GxGw58",
				dismissed: "_3RAeTThkWAn32hs_GxGw58",
				InterestPickerPreviewTopBorder: "_25lW6DMq80IbK6ieXPoFp_",
				interestPickerPreviewTopBorder: "_25lW6DMq80IbK6ieXPoFp_",
				InterestPickerPreviewHeader: "_3153esXkC4o22mmMb4NEwq",
				interestPickerPreviewHeader: "_3153esXkC4o22mmMb4NEwq",
				InterestListItem: "OuNwEANldIlJWdGdhx4Ah",
				interestListItem: "OuNwEANldIlJWdGdhx4Ah",
				Title: "_3rvplkPXZC8aONpCwbcmBN",
				title: "_3rvplkPXZC8aONpCwbcmBN",
				ChooseMore: "_3_KngAlh-KmD6kGmN3AnAs",
				chooseMore: "_3_KngAlh-KmD6kGmN3AnAs",
				CaretRight: "_1LQqSQrTWMFaG2ofR18jvF",
				caretRight: "_1LQqSQrTWMFaG2ofR18jvF",
				DismissButton: "_1g-0M7zTPIr2nIPPr-AHJh",
				dismissButton: "_1g-0M7zTPIr2nIPPr-AHJh"
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPickerPreview.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/components/Onboarding/Interests/InterestPill.tsx"),
				c = n("./src/reddit/components/Scroller/ScrollChild.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/experiments.ts"),
				u = n("./src/reddit/helpers/counters/onboarding.ts"),
				m = n("./src/reddit/helpers/onboarding/reonboarding.ts"),
				p = n("./src/reddit/helpers/trackers/onboarding.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				f = n("./src/reddit/models/Onboarding/index.ts"),
				x = n("./src/reddit/selectors/experiments/onboarding.ts"),
				g = n("./src/lib/classNames/index.ts"),
				E = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				_ = n.n(E);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = e => {
				let {
					interests: t
				} = e;
				const n = Object(o.d)(),
					c = Object(d.b)(),
					E = Object(o.e)(x.b),
					O = E === l.ib.Feed ? t.topics.slice(0, 5) : t.topics,
					[y, j] = Object(s.useState)(!1),
					[I, S] = Object(s.useState)(),
					C = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
						e ? (S(e), c(Object(p.u)(null == e ? void 0 : e.topic))) : c(Object(p.s)()), n(Object(i.c)({
							type: f.c.REONBOARDING,
							selectedInterests: e ? {
								[e.id]: []
							} : {}
						})), Object(u.b)(f.e.Popover, E)
					},
					N = Object(s.useCallback)(() => {
						Object(m.a)(), c(Object(p.t)()), j(!0)
					}, [c]);
				return Object(m.b)() ? r.a.createElement("div", {
					className: Object(g.a)(_.a.InterestPickerPreview, {
						[_.a.Dismissed]: y
					})
				}, r.a.createElement("div", {
					className: _.a.InterestPickerPreviewTopBorder
				}), r.a.createElement("div", {
					className: _.a.InterestPickerPreviewHeader
				}, r.a.createElement("h3", {
					className: _.a.Title
				}, v._("What do you want to see more of?", null, {
					hk: "35GlAb"
				})), r.a.createElement("button", {
					"aria-label": v._("Dismiss", null, {
						hk: "2x5qvs"
					}),
					onClick: N
				}, r.a.createElement(b.a, {
					name: "close",
					className: _.a.DismissButton
				}))), r.a.createElement("ul", {
					className: _.a.InterestListButtons
				}, O.map((e, t) => {
					const n = e.topic;
					return r.a.createElement("li", {
						className: _.a.InterestListItem,
						key: e.id
					}, r.a.createElement(a.a, {
						colorIndex: t,
						isSelected: e === I,
						onClickHandler: () => C(e),
						topic: n
					}))
				})), r.a.createElement(h.a, {
					className: _.a.ChooseMore,
					onClick: () => C()
				}, v._("Choose more topics", null, {
					hk: "2bFeJ4"
				}), r.a.createElement(b.a, {
					className: _.a.CaretRight,
					name: "caret_right"
				}))) : null
			}, y = e => {
				let {
					children: t,
					desiredIdx: n,
					interests: s,
					sendEvent: o,
					variant: i
				} = e;
				return {
					child: {
						id: "interest-topic-recommendations",
						estHeight: 300,
						trackOnEnteredViewport: () => {
							Object(m.d)(), Object(u.b)(f.e.Feed, i), o(Object(p.v)())
						},
						render: () => r.a.createElement(O, {
							interests: s
						})
					},
					idx: Object(c.a)(n, t)
				}
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPill.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				d = n.n(c);
			const l = (e, t, n) => {
					if (!t && !n) return {};
					let s = u(e);
					return n && !t && (s = Object(a.f)(s, .25)), {
						backgroundColor: s
					}
				},
				u = e => m[e % 7],
				m = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			t.a = e => {
				let {
					colorIndex: t = 0,
					isSelected: n = !1,
					isSubtopic: s = !1,
					onClickHandler: a,
					topic: c
				} = e;
				return r.a.createElement(o.t, {
					className: Object(i.a)(d.a.InterestButton, {
						[d.a.Selected]: n
					}),
					kind: o.b.Button,
					onClick: a,
					style: l(t, n, s)
				}, c)
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(o.a)(e, t);
				class s extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(s)
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: i,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, n),
					style: Object(a.c)(s, e),
					onClick: i
				}, p), t)
			})
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/LRUCache/index.ts"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(t, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
				}, r.a.createElement(l.a, {
					className: h.a.backgroundWrapper
				}, r.a.createElement("div", {
					className: h.a.titleAndDescriptionContainer
				}, r.a.createElement("h3", {
					className: h.a.title
				}, f._("Top livestream", null, {
					hk: "4od1tZ"
				}))), r.a.createElement("div", {
					className: h.a.body
				}, r.a.createElement("div", {
					className: h.a.previewContainer
				}, r.a.createElement("div", {
					className: Object(a.a)(h.a.thumbnail, h.a.loading)
				})))))
			};
			var g = e => {
				let {
					className: t,
					layout: n
				} = e;
				return n === u.g.Classic ? r.a.createElement(c.b, {
					className: Object(a.a)(t, h.a.classicPostPlaceholder),
					isLoading: !0
				}) : n === u.g.Compact ? r.a.createElement(d.a, {
					className: Object(a.a)(t, h.a.compactPostPlaceholder),
					isLoading: !0
				}) : r.a.createElement(x, {
					className: t
				})
			};
			const E = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: n
					} = e;
					return r.a.createElement(g, {
						className: t,
						layout: n
					})
				},
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var _ = e => r.a.createElement(E, e),
				v = n("./src/reddit/components/Scroller/ScrollChild.ts"),
				O = n("./src/reddit/helpers/trackers/rpan.ts");
			const y = e => e === u.g.Classic ? 84 : e === u.g.Compact ? 42 : 340,
				j = new o.a(20),
				I = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						n = j.get(t);
					if (n) return n;
					const s = Object(v.a)(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: y(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(O.H)()),
								render: t => {
									let {
										className: n
									} = t;
									return r.a.createElement(_, {
										className: n,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: s
						};
					return j.set(t, o), o
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				loading: "_3Hsr_kP1TY2ld8xQG-XqAL",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				broadcastTitle: "_2PtVDFQbkz3Sh1f_ppShzf",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7",
				upvoteAnimation: "_1MEw3CaNaAuwCohG-n7UPc",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD"
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/lodash/sampleSize.js"),
				c = n.n(a),
				d = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				l = n("./src/reddit/hooks/useConstructor.ts"),
				u = n("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = n.n(u);
			const p = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-UserIcon-PresenceDot",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.resolve().then(n.bind(null, "./src/reddit/components/UserIcon/PresenceDot.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/UserIcon/PresenceDot.tsx"
					}
				}),
				b = 8,
				h = 3,
				f = e => {
					const {
						iconsKey: t,
						memberIconClassName: n,
						numVisibleIcons: s = h,
						presenceDotOutlineClassName: a,
						shouldShowPresenceDot: u,
						wrapperClassName: f
					} = e, x = Object(r.useRef)([]);
					return Object(l.a)(() => {
						const e = Object(d.a)(t, b, !0);
						x.current = c()(e, s)
					}), o.a.createElement("div", {
						className: Object(i.a)(m.a.membersIcons, f)
					}, x.current.map((e, t) => {
						let {
							color: r,
							image: c
						} = e;
						return t === s - 1 && u ? o.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: t
						}, o.a.createElement("img", {
							className: Object(i.a)(m.a.memberIcon, n),
							src: c,
							style: {
								backgroundColor: r
							}
						}), o.a.createElement(p, {
							showPresence: !0,
							outlineClassName: a
						})) : o.a.createElement("img", {
							className: Object(i.a)(m.a.memberIcon, n),
							key: t,
							src: c,
							style: {
								backgroundColor: r
							}
						})
					}))
				};
			t.a = f
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, t, n) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
			const b = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				h = c.a.wrapped(e => {
					const t = Object(l.a)();
					return o.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, s, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									r && s(n, r), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(a.a)(h))
		},
		"./src/reddit/components/RelatedSubredditsCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(s.a)({
					resolved: {},
					chunkName: () => "RelatedSubredditsCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("RelatedSubredditsCarousel").then(n.bind(null, "./src/reddit/components/RelatedSubredditsCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/RelatedSubredditsCarousel/index.tsx"
					}
				}),
				d = e => {
					const t = Object(i.e)(a.f),
						n = Object(i.e)(a.a);
					return t || n ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				E = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return o.a.createElement(g, p({}, s, {
						className: Object(i.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				_ = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return o.a.createElement(E, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(f, null, o.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(_, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = v
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "w", (function() {
				return L
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				m = c.a.code("M", a.a),
				p = c.a.pre("Pre", a.a),
				b = c.a.blockquote("Blockquote", a.a),
				h = c.a.p("P", a.a),
				f = c.a.li("Li", a.a),
				x = c.a.ul("Ul", a.a),
				g = c.a.ol("Ol", a.a),
				E = c.a.strong("B", a.a),
				_ = c.a.em("I", a.a),
				v = c.a.span("U", a.a),
				O = e => r.a.createElement("del", e),
				y = c.a.sub("Sub", a.a),
				j = c.a.sup("Sup", a.a),
				I = c.a.table("Table", a.a),
				S = c.a.tr("Tr", a.a),
				C = c.a.td("Tdl", a.a),
				N = c.a.td("Tdc", a.a),
				k = c.a.td("Tdr", a.a),
				P = c.a.th("Thl", a.a),
				T = c.a.th("Thc", a.a),
				w = (c.a.th("Thr", a.a), c.a.wrapped(e => r.a.createElement(o.b, e), "A", a.a)),
				L = c.a.wrapped(d.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return y
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/BlurredContent.tsx"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				g = n.n(x);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = n("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				v = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return i.a.createElement(_, E({}, s, {
						style: {
							color: Object(p.a)(Object(m.a)({
								flairStyleTemplate: t,
								theme: n,
								...s
							}))
						}
					}))
				}),
				O = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				y = e => r()(e, O),
				j = e => e.findIndex(O),
				I = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: o,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: x,
						useExplicitTextColor: E,
						shouldBlur: O
					} = e, I = s.document, S = [], C = e.mediaMetadata || null, N = j(I), k = y(I);
					if (O && !r) return i.a.createElement(_, {
						className: Object(a.a)(u.j, n)
					}, i.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: d
					}, Object(l.b)(!!o, !!c))));
					if (-1 !== N)
						for (let i = N; i <= k; i++) {
							const e = I[i];
							switch (e.e) {
								case b.k:
									S.push(f.c(e, x, i));
									break;
								case b.l:
									S.push(f.d(i));
									break;
								case b.b:
									S.push(f.a(e, C, x, i));
									break;
								case b.c:
									S.push(f.b(e, i));
									break;
								case b.p:
									S.push(f.f(e, C, x, i));
									break;
								case b.z:
									S.push(f.h(e, C, x, i));
									break;
								case b.u:
									S.push(f.g(e, C, x, i));
									break;
								case b.h:
									S.push(Object(h.a)(e, i));
									break;
								case b.m:
								case b.a:
								case b.D:
									S.push(...Object(h.b)(e, i, C, p, m, t))
							}
						}
					return E ? i.a.createElement(_, {
						className: Object(a.a)(u.j, n)
					}, S) : i.a.createElement(v, {
						className: Object(a.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, S)
				};
			class S extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					d.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), d.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return I(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/elements.tsx"),
				f = n("./src/reddit/components/RichTextJson/media.m.less"),
				x = n.n(f),
				g = n("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = /\/(\w+)\/asset\/(\w+)\//,
				v = g.a.wrapped(h.a, "A", x.a),
				O = g.a.wrapped(l.a, "ImageBox", x.a),
				y = g.a.wrapped(e => o.a.createElement("p", e), "Caption", x.a),
				j = g.a.div("Placeholder", x.a),
				I = g.a.wrapped(e => {
					let {
						className: t,
						e: n,
						...r
					} = e;
					const i = n === b.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(j, E({
						className: t,
						style: {
							"--placeholder-content-text": `'${i}'`
						}
					}, r))
				}, "Placeholder", x.a),
				S = (e, t) => {
					let {
						c: n,
						x: s,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: x.a.MediaWrapper
					}, o.a.createElement(u.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, o.a.createElement(d.a, {
						isListing: !1,
						source: n,
						height: r,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				C = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === b.s ? r = n.s.u : n.e === b.r ? r = n.s.gif : n.e === b.t && (r = (e => {
						const t = _.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? o.a.createElement(v, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				N = (e, t, n, s, r, a) => {
					const d = b.E(n, e.id);
					if (s) return [C(e, t, d)];
					const l = [];
					return d ? d.e === b.s ? l.push(((e, t, n, s) => {
						let {
							id: r,
							s: a
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, o.a.createElement(O, {
							altText: s,
							originalSource: a.u,
							postId: r,
							source: a.u,
							height: a.y,
							width: a.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(d, t, !!e.c, a)) : d.e === b.r ? l.push(((e, t, n) => {
						let {
							id: s,
							ext: r,
							s: a
						} = e;
						if (Object(p.g)(s)) {
							const e = r || Object(p.f)(s);
							return o.a.createElement("div", {
								className: Object(i.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: n
								})
							}, o.a.createElement(v, {
								href: e,
								key: t,
								target: "_blank"
							}, a.mp4 ? o.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: a.mp4
							})) : {
								originalSource: e
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, o.a.createElement(m.a, {
							height: a.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: a.mp4,
							width: a.x,
							postId: s,
							source: a.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === b.t && l.push(((e, t, n, s) => {
						let {
							hlsUrl: r,
							dashUrl: a,
							x: d,
							y: l,
							isGif: m
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, o.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							autoPlay: m,
							hlsSource: r,
							mpegDashSource: a,
							postId: s,
							isGif: m
						})))
					})(d, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(I, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(y, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return w
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "e", (function() {
				return W
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/v4.js"),
				l = n.n(d),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(x);
			const E = 1e3,
				_ = 1e3;
			var v;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(v || (v = {}));
			class O extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = v.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = v.Inside, setTimeout(() => {
							this.mouseLocation === v.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, E)
					}, this.onMouseOut = () => {
						this.mouseLocation = v.Outside, setTimeout(() => {
							this.mouseLocation !== v.Inside && this.setState({
								tooltipOpen: !1
							})
						}, _)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = b.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.gb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === p.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? a.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var y = Object(u.c)(O),
				j = n("./src/reddit/components/RichTextJson/media.tsx"),
				I = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				S = n("./src/reddit/components/SubredditMention/index.tsx"),
				C = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				N = n("./src/reddit/helpers/isComment.ts"),
				k = n("./src/reddit/helpers/isPost.ts"),
				P = n("./src/reddit/helpers/richTextJson/index.ts"),
				T = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const w = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						o = [],
						i = s.length;
					for (let a = 0; a < i; a++) {
						const e = s[a];
						o.push(e.e === p.w ? e.t : W(e, t, a))
					}
					const d = c.x[r - 1];
					return a.a.createElement(d, {
						key: n
					}, o)
				},
				L = e => a.a.createElement(c.e, {
					key: e
				}),
				A = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(B(r[a], t, n, a));
					return a.a.createElement(c.c, {
						key: s
					}, i)
				},
				R = (e, t) => {
					const n = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				D = (e, t, n, s) => {
					const r = e.c,
						o = [],
						i = r.length;
					for (let l = 0; l < i; l++) {
						const e = r[l].c;
						e && e.length && o.push(a.a.createElement(c.g, {
							key: l
						}, e.map((e, s) => B(e, t, n, s))))
					}
					const d = e.o ? c.i : c.v;
					return a.a.createElement(d, {
						key: s
					}, o)
				},
				B = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return A(e, t, n, s);
						case p.c:
							return R(e, s);
						case p.k:
							return w(e, n, s);
						case p.l:
							return L(s);
						case p.p:
							return D(e, t, n, s);
						case p.u:
							return M(e, t, n, s);
						case p.z:
							return F(e, t, n, s)
					}
				},
				F = (e, t, n, s) => {
					const r = e.c,
						o = e.h,
						i = r.length,
						d = o.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: s,
								D: r
							} = q(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(s, {
							key: c
						}, U(i, t, n))), m[c] = r
					}
					for (let p = 0; p < i; p++) {
						const e = r[p],
							s = e.length,
							o = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: i = []
								} = e[r];
							o.push(a.a.createElement(s, {
								key: r
							}, U(i, t, n)))
						}
						u.push(a.a.createElement(c.t, {
							key: p
						}, o))
					}
					return a.a.createElement(c.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, l)), a.a.createElement("tbody", null, u))
				},
				M = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(P.g)(r.id) ? a.a.createElement(c.j, {
						key: s
					}, U(e.c, t, n)) : Object(j.b)(r, s, t)
				},
				U = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === p.A) s.push(H(r, o));
						else if (r.e === p.x) s.push(a.a.createElement(I.a, {
							key: o
						}, U(r.c, t, n)));
						else if (r.e === p.n) s.push(a.a.createElement("br", {
							key: o
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(a.a.createElement(y, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else s.push(W(r, n, o))
					}
					return s
				},
				W = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(C.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, o;
							const i = Object(T.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(k.b)(d) && (r = d.postId), d && Object(N.b)(d) && (o = d.id, r = d.postId), a.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: i,
								postId: r,
								commentId: o
							}, s);
						case p.y:
							return a.a.createElement(S.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: n,
						t: r
					} = e, o = [];
					if (!n) return G(0, r, t);
					const i = Object(s.a)(r);
					let a = 0,
						c = 0;
					const d = n.length;
					for (; a < d; a++) {
						const [e, t, s] = n[a], d = t + s, l = i[t], u = i[d] - l;
						l > c && o.push(G(0, r.substr(c, l - c), `between${a}`)), o.push(G(e, r.substr(l, u), a)), c = l + u
					}
					return c < r.length && o.push(G(0, r.substr(c), `remaining${a}`)), o
				},
				V = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				G = (e, t, n) => {
					let s = t;
					return s = o()(V, (t, s, r) => e & parseInt(r, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				q = e => {
					switch (e) {
						case p.f:
							return {
								H: c.r, D: c.q
							};
						case p.d:
							return {
								H: c.r, D: c.o
							};
						case p.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/Scroller/ScrollChild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = (e, t) => {
				const n = new Set(Object.keys(t).map(e => parseInt(e, 10)));
				for (; n.has(e);) e++;
				return e
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("header", o.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, n) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Post/index.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				g = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				E = n("./src/reddit/helpers/name/index.ts"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/models/Theme/index.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = n("./src/reddit/components/MiniCardPost/index.m.less"),
				j = n.n(y),
				I = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				S = n.n(I);
			const C = e => e.type === _.f.Spoiler,
				N = Object(h.u)();
			t.a = N(Object(f.b)(Object(b.a)(Object(d.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: o,
					innerContainerClassName: d,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: _,
					showSubredditMeta: y = !0,
					showSubredditName: I,
					subredditOrProfile: N
				} = e, k = h && h.preview && h.preview.url || void 0, P = h && h.isSponsored ? "promoted_trend" : "trending", T = h && Object(l.a)(h.permalink) || "", w = _ && T || f && Object(a.a)("/search", {
					q: f.rawQuery,
					source: P
				}) || T, L = f ? f.subredditInfo && f.subredditInfo.icon : N && N.icon.url, A = f ? f.subredditInfo && f.subredditInfo.displayText : N && (N.displayText || N.name), R = h ? h.flair.filter(C) : [], D = h ? h.score : 0, B = h ? h.numComments : 0, F = h && h.isSponsored, M = Object(O.a)(e).body, U = `linear-gradient(\n      ${Object(r.f)(M,.2)},\n      ${Object(r.f)(M,.3)},\n      ${Object(r.f)(M,.4)},\n      ${Object(r.f)(M,.6)},\n      ${Object(r.f)(M,.8)},\n      ${M}\n    )`, W = i.a.createElement("div", {
					id: o,
					className: Object(c.a)(S.a.trendingPost, {
						[S.a["m-background"]]: !!k
					})
				}, i.a.createElement(x.a, {
					to: w
				}, i.a.createElement("div", {
					className: Object(c.a)(S.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(v.g)(Object(O.a)(e).body, k || Object(O.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, F && i.a.createElement("div", {
					className: S.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), i.a.createElement("div", {
					className: Object(c.a)(S.a.innerContainer, j.a.innerContainer, d),
					onClick: b,
					title: h ? h.title : ""
				}, i.a.createElement("h2", {
					className: h ? S.a.title : S.a.titleNoDescription
				}, e.title), h ? i.a.createElement("div", {
					className: Object(c.a)(S.a.description, n)
				}, R.length > 0 && i.a.createElement(m.a, {
					className: S.a.flair,
					titleFlair: R,
					nowrap: !0,
					post: h
				}), h.title) : i.a.createElement("div", {
					className: S.a.spacer
				}), y && L && A && i.a.createElement(g.a, {
					className: S.a.relatedSubredditMetaData,
					iconClassName: S.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", A)], {
						hk: "2YTyJf"
					})
				}), !y && h && i.a.createElement("div", {
					className: S.a.metaLine
				}, I && A && i.a.createElement("span", {
					className: S.a.meta
				}, Object(E.c)(A)), i.a.createElement("span", {
					className: S.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(D, "number", Object(u.b)(D))], {
					hk: "1Jm6il"
				})), i.a.createElement("span", {
					className: S.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(B, "number", Object(u.b)(B))], {
					hk: "311aXY"
				})))))));
				return F ? i.a.createElement(p.a, {
					post: h
				}, W) : W
			}))))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(a);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: s,
					showCardView: a
				} = e, d = {
					[c.a["m-card"]]: a
				};
				return r.a.createElement("div", {
					id: n,
					className: Object(o.a)(c.a.container, d, t)
				}, r.a.createElement(i.a, {
					className: c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, d, s),
					header: e.header,
					headerClassName: Object(o.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = () => r.a.createElement(i.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				header: m(),
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: l.a.post,
				key: `placeholder-post-${t}`
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.one, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.two, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.icon, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");
			const r = Object(s.createContext)(!1);

			function o() {
				return Object(s.useContext)(r)
			}
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/selectors/brandSafety.ts"),
				c = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(i.u)();
			t.a = m(Object(o.b)((e, t) => {
				let {
					listingName: n,
					pageLayer: s
				} = t;
				const r = Object(a.b)(e, {
						listingName: n,
						pageLayer: s
					}),
					o = Object(d.E)(e) || Object(c.a)(e),
					i = Object(a.e)(e);
				return {
					canShowAd: r && !o,
					awaitingBrandSafetyCheck: !Object(a.c)(e),
					isAdsDisabled: o,
					viewIsUnsafe: i
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: n,
					viewIsUnsafe: s,
					pageLayer: o,
					...i
				} = e;
				return !n && t && o ? r.a.createElement(l.a, u({
					forceHouseAd: s
				}, i)) : null
			}))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				f = n("./src/reddit/selectors/moderatorPermissions.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/userPrefs.ts"),
				E = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				_ = n.n(E);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = u.a.div("BladeContainer", _.a), y = u.a.wrapped(h.a, "CloseIcon", _.a), j = u.a.div("LoadingTitleContainer", _.a), I = u.a.div("LoadingNavContainer", _.a), S = u.a.div("ShortLoadingNav", _.a), C = u.a.wrapped(b.a, "ThemedChevron", _.a), N = e => {
				let {
					...t
				} = e;
				return i.a.createElement(O, null, i.a.createElement(y, null), i.a.createElement(p.k, null, i.a.createElement(p.p, null, v._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(p.o, null, i.a.createElement(j, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingTitle, t.isLoading && _.a.loading)
				})), i.a.createElement(I, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), i.a.createElement(C, null)), i.a.createElement(I, null, i.a.createElement(S, null), i.a.createElement(C, null)), i.a.createElement(I, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), i.a.createElement(C, null)), i.a.createElement(I, null, i.a.createElement(S, null), i.a.createElement(C, null)), i.a.createElement(I, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), i.a.createElement(C, null)))))
			}, k = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(N, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(N, {
					gradientType: "posts",
					isLoading: !0
				})
			}), P = Object(c.c)({
				isEditing: x.i,
				isSubscriptionsPinned: g.b,
				moderatorPermissions: f.n
			});
			t.a = Object(a.b)(P)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(_.a.Container, e.isSubscriptionsPinned && _.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(k, {
					subredditId: e.subredditId
				})) : i.a.createElement(o.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return i
			})), n.d(t, "p", (function() {
				return a
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "j", (function() {
				return v
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(r);
			const i = s.a.section("FormPage", o.a),
				a = s.a.h1("HomePageTitle", o.a),
				c = s.a.button("HomePageBreadcrumb", o.a),
				d = s.a.div("HomePageGroup", o.a),
				l = s.a.h1("FormPageTitle", o.a),
				u = s.a.div("FormPageSection", o.a),
				m = s.a.div("FormGroup", o.a),
				p = s.a.h2("FormGroupTitle", o.a),
				b = s.a.div("FormElement", o.a),
				h = s.a.div("FormGroupDescription", o.a),
				f = s.a.div("FormItem", o.a),
				x = s.a.h3("FormElementTitle", o.a),
				g = s.a.div("FormElementDescription", o.a),
				E = s.a.div("FormElementError", o.a),
				_ = s.a.div("FormElementSubGroup", o.a),
				v = s.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/ApiRequestState/index.ts"),
				x = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				g = n("./src/reddit/components/SubredditIcon/index.m.less"),
				E = n.n(g);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: s,
						...r
					} = e, i = [n, E.a.inTopBar, E.a.iconContainer];
					return s ? i.push(E.a.emptyEditableIconInTopBar) : i.push(E.a.editableIcon, E.a.emptyEditableIcon), o.a.createElement("span", _({}, r, {
						className: Object(c.a)(...i)
					}), s ? o.a.createElement(h.a, {
						name: "upload",
						className: E.a.emptyUploadButton
					}) : o.a.createElement(h.a, {
						name: "add",
						className: E.a.emptyPlusButton
					}), e.children)
				},
				O = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: r,
						onClick: i,
						inTopBar: a,
						src: d
					} = e;
					return o.a.createElement("span", {
						className: E.a.iconContainer
					}, o.a.createElement("img", {
						alt: s,
						onClick: i,
						role: r,
						src: d,
						className: Object(c.a)(n, {
							[E.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				y = Object(a.c)({
					isLoading: x.b
				});
			class j extends o.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => o.a.createElement(u.a, {
						className: E.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: e => {
							const t = Object(f.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? o.a.createElement("span", {
						className: E.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? s.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : s.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = o.a.createElement(o.a.Fragment, null, o.a.createElement(O, _({
						alt: s.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? o.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? o.a.createElement("a", {
						href: this.props.linkTo
					}, o.a.createElement(v, _({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v, _({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [E.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(E.a.loadingIconInTopBar), t = 32), o.a.createElement(m.a, {
							className: Object(c.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? o.a.createElement("div", {
						className: E.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(i.b)(y, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(d.a)(t.subreddit.id, n, s))
				}
			}))(Object(l.c)(j))
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = o.a.wrapped(i.b, "SubredditIcon", d.a),
				u = o.a.wrapped(e => r.a.createElement(a.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const E = Object(b.c)(g),
				_ = Object(i.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				v = Object(o.b)(_),
				O = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: o,
						rtJsonElementProps: i
					} = e;
					if (!n || !t) return r.a.createElement(E, {
						subredditName: s,
						rtJsonElementProps: i
					});
					switch (o) {
						case h.jf.SmIcon:
							return r.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: i
							});
						case h.jf.SmIconHc:
							return r.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return r.a.createElement(E, {
								subredditName: s,
								rtJsonElementProps: i
							})
					}
				};
			t.b = v(O)
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				d = e => {
					const t = Object(i.e)(a.e),
						n = Object(i.e)(a.a);
					return t || n ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				f = n("./src/reddit/components/IdCard/async.tsx"),
				x = n("./src/lib/isFakeSubreddit/index.ts"),
				g = n("./src/reddit/components/IdCard/helpers.ts"),
				E = e => !Object(x.a)(e) || Object(g.e)(e) || Object(g.f)(e) || Object(g.g)(e),
				_ = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				v = n("./src/reddit/components/ModProgressModule/async.tsx"),
				O = n("./src/reddit/components/PowerupsSidebar/index.tsx"),
				y = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				j = n("./src/reddit/components/SidebarContainer/index.tsx"),
				I = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				S = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				C = n("./src/lib/makeListingKey/index.ts"),
				N = n("./src/reddit/actions/subreddit.ts"),
				k = n("./src/lib/classNames/index.ts"),
				P = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/reddit/helpers/name/index.ts"),
				L = n("./src/reddit/helpers/overlay/index.ts"),
				A = n("./src/reddit/selectors/experiments/topPosts.ts"),
				R = n("./src/reddit/selectors/posts.ts"),
				D = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const B = .99;
			class F extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= B && t(n)
					}
				}
				render() {
					return a.a.createElement(D.a, {
						threshold: B,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var M = F,
				U = n("./src/lib/isUrl/index.ts"),
				W = n("./src/lib/prettyPrintNumber/index.ts"),
				H = n("./src/reddit/components/FlairWrapper/index.tsx"),
				V = n("./src/reddit/components/Thumbnail/index.tsx"),
				G = n("./src/reddit/models/Flair/index.ts"),
				q = n("./src/reddit/models/Subreddit/index.ts"),
				K = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				Q = n.n(K);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = e => e.type === G.f.Nsfw || e.type === G.f.Spoiler, J = Object(d.c)({
				post: R.G,
				subredditOrProfile: R.U
			});
			class Z extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: n
						} = this.props;
						e(t), n && n(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: n
						} = this.props;
						e.stopPropagation(), n && n(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: n,
						showSubredditName: s,
						subredditOrProfile: r
					} = this.props, o = {
						post: t
					}, i = Object(U.a)(Object(V.b)(o)), c = t.flair.filter(Y);
					return a.a.createElement("div", {
						className: Object(k.a)(Q.a.container, e, {
							[Q.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: Q.a.mainLine
					}, i && a.a.createElement("div", {
						className: Q.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(V.a, o)), a.a.createElement("div", {
						className: Object(k.a)(Q.a.title, !i && Q.a.titleSingle),
						title: t.title
					}, c.length > 0 && a.a.createElement(H.a, {
						className: Q.a.flair,
						titleFlair: c,
						nowrap: !0,
						post: t
					}), t.title)), a.a.createElement("div", {
						className: Q.a.metaLine
					}, s && !!r && a.a.createElement("span", {
						className: Q.a.meta
					}, Object(q.h)(r) ? Object(w.d)(r.displayText || r.name) : Object(w.c)(r.displayText || r.name)), a.a.createElement("span", {
						className: Q.a.meta
					}, z._({
						"*": "{score} points",
						_1: "1 point"
					}, [z._plural(t.score, "score", Object(W.b)(t.score))], {
						hk: "1JZ0qm"
					})), a.a.createElement("span", {
						className: Q.a.meta
					}, z._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [z._plural(t.numComments, "numComments", Object(W.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var X = Object(c.b)(J, e => ({
					openLightbox: t => e(Object(L.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Z),
				$ = n("./src/reddit/components/SidebarPostList/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = 10, se = 2, re = Object(d.a)(R.N, e => e.filter(e => !e.isSponsored)), oe = Object(d.c)({
				posts: (e, t) => re(e, {
					...t
				})
			});
			class ie extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: n
						} = this.props, [s] = n;
						s && (t(s), e && e(s.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || ne, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((n, s) => (e = Math.ceil(s.posts.length / t), {
							chunkIdx: n.chunkIdx < e - 1 ? n.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: n,
							onPostVisible: s,
							redditStyle: r,
							smallPostClassName: o
						} = this.props;
						return a.a.createElement(M, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, a.a.createElement(X, {
							className: Object(k.a)(ee.a.smallPost, o),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(x.a)(Object(w.g)(t)),
							thumbnailOnClick: n
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: n,
						moreButtonText: s,
						onPostVisible: r,
						posts: o,
						redditStyle: i,
						showMoreButton: c,
						topPostsVariant: d
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === o.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(A.a)(d),
						p = Object(A.b)(d),
						b = m || p,
						h = o.slice(l * u, (l + 1) * u),
						[f, ...g] = h,
						E = b ? h.slice(0, se) : g.slice(0, se),
						_ = b ? h.slice(se) : g.slice(se);
					return a.a.createElement("div", {
						className: Object(k.a)(ee.a.container, t, {
							[ee.a.redditStyle]: i
						})
					}, !b && a.a.createElement(M, {
						onPostVisible: r,
						postId: f.id
					}, a.a.createElement(P.a, {
						postId: f.id,
						backgroundWrapperClassName: ee.a.largePostBackgroundWrapper,
						descriptionClassName: ee.a.largePostDescription,
						innerContainerClassName: ee.a.largePostInnerContainer,
						"data-redditstyle": i,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(x.a)(Object(w.g)(n)),
						trendingPost: f
					})), E.map(this.renderSmallPost), e, _.map(this.renderSmallPost), c && a.a.createElement(T.r, {
						className: ee.a.SeeMore,
						onClick: this.showMorePosts
					}, s || te._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ae = Object(c.b)(oe, e => ({
					openPost: t => e(Object(L.a)(t.permalink))
				}))(ie),
				ce = n("./src/reddit/components/TrackingHelper/index.tsx"),
				de = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				le = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				ue = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				me = n("./src/reddit/selectors/discoveryUnit.ts"),
				pe = n("./src/reddit/selectors/subreddit.ts"),
				be = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				he = n.n(be);
			const fe = 10,
				xe = Object(d.a)((e, t) => t.subredditName, e => Object(C.a)(e, l.W.TOP, {
					t: l.hc.WEEK
				})),
				ge = Object(d.c)({
					discoveryUnit: e => Object(me.b)(e, {
						unitName: ue.i
					}),
					listingKey: xe,
					posts: (e, t) => {
						const n = xe(e, t);
						return Object(R.N)(e, {
							listingKey: n
						})
					},
					subreddit: pe.x
				});
			class Ee extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(le.b)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(le.q)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(le.t)(t, e, void 0, n))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: n,
						loadMorePosts: r,
						posts: o,
						subredditName: i,
						topPostsVariant: c
					} = this.props;
					if (0 === o.length) return null;
					const d = i,
						l = o.length > fe;
					return a.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, a.a.createElement(ae, {
						listingKey: n,
						listingName: d,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: he.a.smallPost,
						showMoreButton: l,
						topPostsVariant: c
					}, a.a.createElement("div", null, e)))
				}
			}
			var _e = Object(c.b)(ge, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(N.r)({
							sort: l.W.TOP,
							subredditName: n,
							t: l.hc.WEEK
						}))
					}
				})(Object(ce.c)(Ee)),
				ve = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				Oe = n("./src/reddit/constants/tracking.ts"),
				ye = n("./src/reddit/selectors/seo/linksModule.ts"),
				je = n("./src/reddit/selectors/telemetry.ts"),
				Ie = n("./src/telemetry/models/Subreddit.ts");
			const Se = e => t => ({
					...je.n(t),
					action: Oe.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ce = e => t => n => ({
					...je.n(n),
					action: Oe.c.CLICK,
					noun: Object(Ie.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ne = Object(d.c)({
					communities: ye.c
				});
			var ke = Object(c.b)(Ne)(e => {
					const t = Object(ce.b)();
					return e.communities && e.communities.length ? a.a.createElement(I.a, null, a.a.createElement(ve.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: Se,
						getSubscribeEventFactoryHandler: Ce,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Pe = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				Te = n("./src/reddit/constants/experiments.ts"),
				we = n("./src/reddit/featureFlags/index.ts"),
				Le = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				Ae = n("./src/reddit/models/Widgets/index.ts"),
				Re = n("./src/reddit/selectors/communityFlairs.ts"),
				De = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Be = n("./src/reddit/selectors/listings.ts"),
				Fe = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				Me = n.n(Fe);
			const Ue = 250,
				We = 270,
				He = u.a.wrapped(j.a, "SidebarContainer", Me.a),
				Ve = Object(d.c)({
					apiError: Be.c,
					apiPending: Be.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Re.b)(e, n)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Re.c)(e, n)
					},
					isInNewModuleNCPV3Experiment: e => Object(De.a)(e) === Te.me.NewModule,
					showGovernance: we.d.spPoints,
					showLeaderboard: we.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(pe.L)(e, {
							subredditId: n
						}) && !Object(pe.M)(e, {
							subredditId: n
						})
					},
					widgets: pe.s
				}),
				Ge = Object(c.b)(Ve);
			class qe extends i.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const n = this.getRelatedCommunitiesWidgetData();
						return n ? {
							id: "related-communities-widget",
							kind: Ae.i.CommunityList,
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: Ae.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: Ae.g.Cloud,
							shortName: s.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
							templates: this.props.communityFlairModels
						}
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, n = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !o()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						listingName: t,
						isInNewModuleNCPV3Experiment: n,
						showGovernance: s,
						showLeaderboard: r,
						showPredictionsLeaderboard: o,
						subredditId: i,
						subredditName: c,
						topPostsVariant: d
					} = this.props;
					let u = 0;
					const x = Object(A.a)(d),
						g = Object(A.b)(d),
						j = Object(A.c)(d),
						C = x || g;
					let N, k;
					!!this.getPostFlairWidget() ? N = this.props.widgets : (N = this.getCommunityWidgets(), k = this.makeFlairFilterWidget());
					const P = this.makeRelatedCommunitiesWidget(x, g),
						T = !x,
						w = g,
						L = a.a.createElement(y.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Le.a.FIRST,
							sizes: l.i
						});
					return a.a.createElement(He, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, n && a.a.createElement(v.a, {
						subredditId: i,
						subredditName: c
					}), E(t) && a.a.createElement(f.a, {
						listingName: t
					}), a.a.createElement(p.a, {
						cardClassName: Me.a.card,
						subredditId: i
					}), a.a.createElement(O.a, {
						subredditId: i
					}), o && a.a.createElement(m.a, {
						subredditId: i
					}), C && a.a.createElement(I.a, null, a.a.createElement(_e, {
						subredditName: c,
						topPostsVariant: d
					}, a.a.createElement("div", {
						className: Me.a.inFeedAd
					}, L))), C && P && a.a.createElement(I.a, null, a.a.createElement(Pe.a, {
						subredditName: c,
						truncateThreshold: We,
						widget: P
					})), w && N.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(I.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(Pe.a, {
							subredditName: c,
							truncateThreshold: Ue,
							widget: e
						}))
					}), s && a.a.createElement(b.a, {
						className: Me.a.card,
						subredditId: i
					}), k && a.a.createElement(I.a, null, a.a.createElement(Pe.a, {
						subredditName: c,
						widget: k
					})), r && a.a.createElement(h.a, {
						className: Me.a.card,
						subredditId: i,
						uniqueId: i
					}), a.a.createElement(_.g, {
						subredditId: i
					}), !C && L, a.a.createElement(ke, {
						subredditId: i
					}), T && !w && N.map((e, t) => {
						const n = "community-list" === e.kind;
						return a.a.createElement(I.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(Pe.a, {
							subredditName: c,
							truncateThreshold: j && n ? We : j ? Ue : void 0,
							widget: e
						}))
					}), a.a.createElement(S.a, {
						adComponent: a.a.createElement(y.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Le.a.BOTTOM,
							sizes: l.p
						})
					}))
				}
			}
			t.a = Ge(qe)
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
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : i.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: s,
						...r
					} = e;
					return o.a.createElement(i.t, u({}, r, {
						priority: m(i.c.Primary, t, n),
						className: Object(l.a)(r.className, d.a.BaseButton),
						size: s ? i.d.S : i.d.M
					}))
				},
				b = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
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
						...a
					} = e;
					return o.a.createElement(i.t, u({}, a, {
						priority: m(i.c.Secondary, n, s),
						className: Object(l.a)(a.className, d.a.BaseButton),
						size: r ? i.d.S : i.d.M,
						text: b(t)
					}))
				};
			class f extends o.a.Component {
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
						isFullWidth: i = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
						isFullWidth: i,
						style: c
					};
					return this.props.userIsSubscriber ? o.a.createElement(h, u({}, d, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(p, u({}, d, {
						id: n
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
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
				i = e => {
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
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-TabBadger-Component").then(n.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(i.c)({
					postCount: l.M,
					previousPageIsOverlay: d.p,
					tabBadged: e => e.tabBadged
				}),
				m = Object(o.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : r.a.createElement(a.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return T
			}));
			var s = n("./src/lib/isUrl/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = n("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = n("./src/reddit/controls/ContentType/index.tsx"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/models/Theme/index.ts"),
				f = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = n("./src/telemetry/models/Outbound.ts"),
				g = n("./src/reddit/components/Thumbnail/index.m.less"),
				E = n.n(g);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = e => e.placeholderImage || Object(f.a)(e).placeholderImage,
				O = e => e.placeholderImage ? "cover" : Object(f.a)(e).placeholderImagePosition,
				y = c.a.span("LinkText", E.a),
				j = e => {
					let {
						className: t,
						onClick: n,
						children: s
					} = e;
					return o.a.createElement("div", {
						onClick: n,
						className: Object(i.a)(E.a.linkIcon, t)
					}, s)
				},
				I = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(E.a.hiddenImage, e.className)
				}),
				S = e => {
					const t = o.a.createRef(),
						{
							src: n,
							errorSrc: s
						} = e;
					return n && s && Object(l.a)(n).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${s})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(i.a)(E.a.thumbnail, E.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(f.a)(e).button : Object(f.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(j, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(i.a)(E.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(y, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(I, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				C = e => e.isOutbound ? Object(f.a)(e).button : e.placeholderImage ? "transparent" : Object(f.a)(e).line,
				N = e => {
					const t = v(e),
						n = t && {
							background: Object(h.g)(Object(f.a)(e).placeholder, t, O(e))
						};
					return o.a.createElement("div", {
						className: Object(i.a)(E.a.thumbnail, E.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...n,
							borderColor: C(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(u.a, {
						className: Object(i.a)(e.contentTypeClassName, E.a.contentType, {
							[E.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(j, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(i.a)(E.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(y, {
						className: e.linkTextClassName
					}, e.text)))
				},
				k = e => o.a.createElement(S, _({}, e, {
					className: Object(i.a)(E.a.blurredThumbnail, e.className)
				})),
				P = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: n,
						contentTypeClassName: r,
						crosspost: a,
						forceShowNSFW: c,
						isCommentsPage: d,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: p,
						outboundLinkIconClassName: h,
						post: f,
						redditStyle: g,
						removeLink: _,
						showContentType: O,
						templatePlaceholderImage: y,
						text: j,
						theme: I,
						usePreview: S
					} = e, C = !I.subredditContext.shouldShowNSFWContent && (f.isNSFW || !(!a || !a.isNSFW)) && !c, N = v({
						placeholderImage: y,
						redditStyle: g,
						theme: I
					}), k = T(e), P = d ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage, w = L(f, t, N, C, j, I, k, l, O, _, g, u, p, h, r), A = Object(b.D)(f);
					return Object(s.a)(A) && !_ && A.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(i.a)(E.a.container, S ? E.a.usePreview : "", n)
					}, o.a.createElement(m.b, {
						href: Object(b.D)(f),
						isSponsored: f.isSponsored,
						postId: f.id,
						source: f.source,
						sourceElement: P
					}, w)) : o.a.createElement("div", {
						className: Object(i.a)(E.a.container, S ? E.a.usePreview : "", n)
					}, w)
				}),
				T = e => {
					let {
						crosspost: t,
						post: n,
						url: s,
						usePreview: r
					} = e;
					if (s) return s;
					const {
						preview: o,
						media: i,
						thumbnail: a
					} = t || n;
					return r && o ? o.url : n.isSponsored && o && "default" === a.url ? o.url : w(i) ? i.scrubberThumbSource : a.url
				},
				w = e => !!e && e.type === b.o.LIVEVIDEO,
				L = (e, t, n, r, a, c, l, u, m, p, b, h, f, x, g) => {
					const v = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(s.a)(l)) {
						const n = w(e.media),
							s = n ? {
								errorSrc: d.U
							} : {},
							u = Object(i.a)(t, {
								[E.a.verticallyCenterThumbnail]: n
							});
						return r ? o.a.createElement(k, _({
							"data-click-id": "image",
							src: l
						}, s, {
							className: u,
							isOutbound: v && !p,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c
						})) : o.a.createElement(S, _({
							alt: e.title,
							className: u,
							src: l
						}, s, {
							isOutbound: v && !p,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c
						}))
					}
					return o.a.createElement(N, {
						className: t,
						contentTypeClassName: g,
						placeholderImage: n,
						isMeta: u,
						isOutbound: v && !p,
						linkIconClassName: h,
						linkTextClassName: f,
						outboundLinkIconClassName: x,
						redditStyle: b,
						showContentType: m,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = P
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/AdViewability/index.tsx"),
				i = n("./src/reddit/components/BlankPost/index.tsx"),
				a = n("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(a.a)(null);
			class d extends r.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? r.a.createElement(i.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: n
					}) : r.a.createElement(o.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = c(d)
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, n) {
			e.exports = {
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Footer/index.tsx"),
				l = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				u = n.n(l),
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/reddit/actions/login.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/selectors/telemetry.ts");
			const g = "nsfw_dialog";
			var E = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const _ = `${a.a.assetPath}/img/nsfw-blocking-promo/nsfw.png`,
				v = `${a.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`,
				O = {
					d2x_nsfw_signup_blocking_de_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				y = e => {
					const t = Object(o.d)(),
						n = Object(b.b)();
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.mainCta)
					}, r.a.createElement("img", {
						src: _
					}), r.a.createElement("div", {
						className: u.a.cta
					}, (() => m.fbt._("Log in to confirm you're over 18", null, {
						hk: "RUR2Z"
					}))()), r.a.createElement("div", {
						className: u.a.contentTitle
					}, e.contentTitle), r.a.createElement("div", {
						className: u.a.warning
					}, (() => m.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), r.a.createElement("div", {
						className: u.a.buttonContainer
					}, r.a.createElement(f.j, {
						className: Object(c.a)(u.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(x.n)(e),
								source: "xpromo",
								action: "click",
								noun: g
							}))()), t(Object(p.i)())
						}
					}, (() => m.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), r.a.createElement(f.j, {
						className: u.a.cancel,
						onClick: () => {
							n((() => e => ({
								...Object(x.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: g
							}))()), t(Object(i.b)("/"))
						}
					}, (() => m.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				j = e => r.a.createElement("div", {
					className: u.a.qrCodeOuter
				}, r.a.createElement("div", {
					className: u.a.qrCodeInner
				}, r.a.createElement("img", {
					className: u.a.qrCode,
					src: e.qrCodeAsset
				}), r.a.createElement("div", {
					className: u.a.copyLine1
				}, (() => m.fbt._("Download the app to use", null, {
					hk: "4i9ZxV"
				}))()), r.a.createElement("div", {
					className: u.a.copyLine2
				}, (() => m.fbt._("Anonymous Browsing", null, {
					hk: "rTJ9j"
				}))()), r.a.createElement("img", {
					className: u.a.sneakySnoo,
					src: v
				}))),
				I = e => {
					const t = Object(b.b)();
					r.a.useEffect(() => {
						t((() => e => ({
							...Object(x.n)(e),
							source: "xpromo",
							action: "view",
							noun: g
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, s = Object(o.e)(E.b) === h.lc.Enabled ? O.d2x_nsfw_signup_blocking_de_v1 : O.d2x_nsfw_signup_blocking_non_us_v1;
					return r.a.createElement("div", {
						className: u.a.container
					}, r.a.createElement(y, {
						contentTitle: n
					}), r.a.createElement("div", {
						className: u.a.footerWrapper
					}, r.a.createElement(d.a, null)), r.a.createElement(j, {
						qrCodeAsset: s
					}))
				}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: i.eb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(o.d([n], !0)),
					onSubscriptionsRequested: () => e(o.f()),
					onUnsubscribe: () => e(o.d([n], !1))
				}
			})
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlair.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.V,
				hideNSFWPref: b.F,
				isActive: p.j,
				moderatorPermissions: u.m,
				modModeEnabled: d.T,
				showEditFlair: m.a
			}), (e, t) => {
				let {
					postId: n
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						} = t;
						return e(Object(i.h)({
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const s = t === c.a.upvoted ? Object(o.kb)(n) : Object(o.w)(n);
						e(s)
					},
					onIgnoreReports: () => e(Object(o.gb)(n)),
					onOpenReportsDropdown: t => e(Object(a.h)({
						tooltipId: t
					}))
				}
			}, (e, t, n) => ({
				...n,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: s,
						selectedTemplateId: r
					} = e;
					return t.dispatchFlairChanged({
						post: n.post,
						previewFlair: s,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/constants/banners.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner", e.AWARDED_LISTING_BANNER = "awarded_listing_banner", e.AVATAR_LISTING_BANNER = "avatar_listing_banner"
				}(s || (s = {}))
		},
		"./src/reddit/constants/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(s || (s = {}));
			var r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(r || (r = {}))
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
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js");
			const i = o.createContext({
				showPromo: r.a,
				dismissPromo: r.a,
				completePromo: r.a,
				promos: new Map
			});
			t.a = i
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, n) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/ContentType/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/icons.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/constants/elementClassNames.ts"),
				d = n("./src/reddit/controls/ContentType/index.m.less"),
				l = n.n(d);
			const u = e => Object(o.a)(l.a.contentTypeIcon, e.className),
				m = {
					embed: i.a.embed,
					gallery: i.a.media_gallery,
					gifvideo: i.a.gif_post,
					image: i.a.image_post,
					meta: i.a.poll_post,
					rpan: i.a.video_live,
					rtjson: i.a.text_post,
					text: i.a.text_post,
					video: i.a.video_post,
					liveaudio: i.a.audio
				};

			function p(e) {
				const t = u(e),
					n = e.type && m[e.type] || i.a.link_post;
				return r.a.createElement(a.a, {
					name: n,
					className: Object(o.a)({
						[c.a]: n === i.a.link_post
					}, t)
				})
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/constants/elementClassNames.ts"),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = n.n(i);
			t.a = s.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${r.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, n) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Search/index.m.less"),
				h = n.n(b);
			const f = Object(o.b)(() => Object(i.c)({
				subredditsByName: Object(c.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(u.x)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}))(e => r.a.createElement("div", {
				className: Object(a.a)(p.a.subText, h.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => r.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, r.a.createElement(l.b, {
				className: Object(a.a)(h.a.subredditIcon, h.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : r.a.createElement(l.b, {
				className: Object(a.a)(h.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && r.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, n) {
			e.exports = {
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4"
			}
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				o = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const i = (e, t) => Object(s.a)(e, {
					...r,
					variables: t
				}),
				a = (e, t) => Object(s.a)(e, {
					...o,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(s)(e => {
					const {
						featureEnabled: s,
						...o
					} = e, i = o;
					return s ? r.a.createElement(t, i) : void 0 !== n ? r.a.createElement(n, i) : null
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
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/map.js"),
				r = n.n(s),
				o = n("./src/lib/FocusTrap/index.ts");
			const i = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				a = e => {
					let t = e;
					do {
						if (i(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				c = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				d = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return r()(t, e => e.textContent || "")
				})() : null,
				l = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!l(n, e)) return;
					const {
						startContainer: s,
						startOffset: r,
						endContainer: o,
						endOffset: i
					} = n, a = document.createRange();
					a.selectNode(e);
					let c = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, n) && (a.setStart(s, r), c = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, n) && (a.setEnd(o, i), c = !1), c) return [e];
					const d = document.createElement("div");
					return d.appendChild(a.cloneContents()), [...d.childNodes]
				},
				m = (e, t, n) => {
					let s = e;
					for (; s && (!n || !n(s));) {
						if (s && t(s)) return s;
						s = s.parentElement
					}
				},
				p = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
					e.querySelectorAll(o.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/memoize.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/categories.tsx"),
				i = n("./src/config.ts");
			const a = Array.from({
					length: 20
				}).map((e, t) => `${i.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				c = Array.from({
					length: 8
				}).map((e, t) => `${i.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				d = [];
			t.a = r()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return d;
				const s = n ? c : a,
					r = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: o.a[(r + t) % o.a.length],
					image: s[(r + t) % s.length]
				}))
			}), (function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return `${e}_${t}`
			}))
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let r, o, i, a, c, d, l, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (o = s.a.QuarantinedSubreddit, a = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = s.a.PrivateSubreddit, i = e.subredditDescription, l = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = s.a.GoldSubreddit : e.subredditBanned ? (o = s.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? o = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? o = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (o = s.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (o = s.a.Nsfw), o && n ? {
					banMessage: r,
					contentGateType: o,
					isContributorRequestsDisabled: l,
					isContributorRequestTimestamp: u,
					subredditDescription: i,
					subredditName: n,
					quarantineMessage: a,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: d,
					interstitialWarningMessage: m,
					interstitialWarningMessageHtml: p,
					interstitialWarningMessageRTJson: b
				} : void 0
			}
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/env/index.ts"),
				r = n("./src/reddit/helpers/parseUrl.ts");
			const o = ["old", "new", "en", "www", "np", "m"],
				i = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(s.a)() ? [window.location.host] : []].concat("").concat(o.map((function(e) {
					return e + ".reddit.com"
				}))).concat(o.map((function(e) {
					return e + ".reddit.local"
				}))),
				a = ["mod.reddit.com"],
				c = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: i.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: a,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: a,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e, t) {
				const n = c[e];
				if (!c) throw new Error("Could not find reddit URL spec: " + e);
				const s = Object(r.a)(t);
				if (!s) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || i).indexOf(s.hostname)) return;
				const o = s.pathname.match(n.pathname);
				if (o) {
					return {
						url: t,
						routeName: e,
						components: n.pathnameComponents.reduce((function(e, t, n) {
							return e[t] = o[n + 1], e
						}), {})
					}
				}
			}

			function l(e) {
				return (e.match(new RegExp(r.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(c).some((function(n) {
						return t = d(n, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/models/Prediction/index.ts");
			const r = (e, t) => {
					const n = Date.now(),
						r = n <= e.endsAt,
						o = n <= t.endsAt,
						i = e.status === s.b.Cancelled || e.status === s.b.CancelInProgress;
					return i !== (t.status === s.b.Cancelled || t.status === s.b.CancelInProgress) ? i ? 1 : -1 : r !== o ? r ? -1 : 1 : r && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : r || e.selectedOptionId === t.selectedOptionId ? e.createdAt > t.createdAt ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				o = (e, t) => r({
					createdAt: e.createdAt,
					endsAt: e.endsAt,
					selectedOptionId: e.userSelection || null,
					resolvedOptionId: e.resolvedOptionId,
					totalVoteCount: e.totalVoteCount,
					status: e.predictionStatus
				}, {
					createdAt: t.createdAt,
					endsAt: t.endsAt,
					selectedOptionId: t.userSelection || null,
					resolvedOptionId: t.resolvedOptionId,
					totalVoteCount: t.totalVoteCount,
					status: t.predictionStatus
				}),
				i = (e, t) => {
					var n, s;
					const {
						pollData: o
					} = e, {
						pollData: i
					} = t;
					return o && i ? r({
						createdAt: e.created,
						endsAt: null == o ? void 0 : o.votingEndTimestamp,
						selectedOptionId: null !== (n = null == o ? void 0 : o.userSelection) && void 0 !== n ? n : null,
						resolvedOptionId: null == o ? void 0 : o.resolvedOptionId,
						totalVoteCount: null == o ? void 0 : o.totalVoteCount,
						status: null == o ? void 0 : o.predictionStatus
					}, {
						createdAt: t.created,
						endsAt: null == i ? void 0 : i.votingEndTimestamp,
						selectedOptionId: null !== (s = null == i ? void 0 : i.userSelection) && void 0 !== s ? s : null,
						resolvedOptionId: null == i ? void 0 : i.resolvedOptionId,
						totalVoteCount: null == i ? void 0 : i.totalVoteCount,
						status: null == i ? void 0 : i.predictionStatus
					}) : 0
				}
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const n = Array.prototype.slice.call(arguments);
								return n.unshift(t), e.push(n), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const n = e.methods[t];
							e[n] = e.factory(n)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const n = document.getElementsByTagName("script")[0];
							n.parentNode.insertBefore(t, n)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				o = "emote|",
				i = "|downsized";

			function a(e, t) {
				return r + e + (t ? i : "")
			}

			function c(e) {
				return !!(null == e ? void 0 : e.startsWith(r))
			}

			function d(e) {
				return !!(null == e ? void 0 : e.startsWith(o))
			}

			function l(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(c)
			}

			function u(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(d)
			}

			function m(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function p(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...p(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function b(e) {
				return p(e, s.F).map(e => e.id)
			}

			function h(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return p(e, e => e.e === s.o || t && e.e === s.y).map(e => e.u ? e.u : `https://reddit.com/r/${e.t}`)
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "d", (function() {
				return x
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(s.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(o.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "v", (function() {
				return N
			})), n.d(t, "A", (function() {
				return w
			})), n.d(t, "s", (function() {
				return L
			})), n.d(t, "t", (function() {
				return A
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "p", (function() {
				return D
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "z", (function() {
				return F
			})), n.d(t, "y", (function() {
				return M
			})), n.d(t, "x", (function() {
				return U
			})), n.d(t, "o", (function() {
				return W
			})), n.d(t, "r", (function() {
				return H
			})), n.d(t, "m", (function() {
				return K
			})), n.d(t, "g", (function() {
				return Q
			})), n.d(t, "l", (function() {
				return z
			})), n.d(t, "e", (function() {
				return Y
			})), n.d(t, "f", (function() {
				return J
			})), n.d(t, "h", (function() {
				return Z
			})), n.d(t, "j", (function() {
				return X
			})), n.d(t, "k", (function() {
				return $
			})), n.d(t, "i", (function() {
				return ee
			})), n.d(t, "d", (function() {
				return te
			})), n.d(t, "n", (function() {
				return ne
			})), n.d(t, "w", (function() {
				return se
			}));
			var s, r = n("./src/lib/stringInterpolate/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				a = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				c = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = (n("./src/reddit/helpers/widgets/index.tsx"), n("./src/reddit/models/DiscoveryUnit/index.ts")),
				l = n("./src/reddit/models/Search/index.ts"),
				u = n("./src/reddit/selectors/experiments/serpSIIDs.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/reddit/selectors/trending.ts"),
				h = n("./src/reddit/selectors/widgets.ts"),
				f = n("./src/telemetry/index.ts"),
				x = n("./src/reddit/helpers/search/searchImpressionId.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(s || (s = {}));
			const g = "discovery_unit",
				E = (e, t, n) => ({
					...p.n(e),
					source: g,
					screen: p.Y(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(r.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				_ = (e, t, n) => ({
					...E(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				v = (e, t) => {
					Object(f.a)(O(t)(e))
				},
				O = (e, t) => n => _(n, e, t),
				y = (e, t, n, s) => "unitName" in t ? E(e, t, s) : ((e, t, n) => ({
					...p.n(e),
					source: "search",
					screen: p.Y(e),
					search: n ? {
						...p.Z(e, n, a.a.SERP),
						structureType: p.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				j = (e, t, n, r, o) => ({
					...y(e, t, r, o),
					action: "view",
					noun: s.ITEM_POST,
					post: p.H(e, n)
				}),
				I = e => {
					let {
						post: t,
						rawQuery: n,
						searchQuery: s
					} = e;
					return {
						displayQuery: decodeURIComponent(s),
						rawQuery: n ? decodeURIComponent(n) : void 0,
						structureType: t && t.isSponsored ? p.c.PromotedTrend : p.c.Trending
					}
				};
			var S;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(S || (S = {}));
			const C = e => {
					Object(f.a)(T({
						...e,
						action: i.c.CLICK
					}))
				},
				N = e => {
					Object(f.a)(T({
						...e,
						action: i.c.VIEW
					}))
				},
				k = {
					[a.a.Popular]: S.POPULAR_CAROUSEL,
					[a.a.Typeahead]: S.SEARCH_DROPDOWN
				},
				P = {
					[a.a.Popular]: l.d.tile,
					[a.a.Typeahead]: l.d.dropdown
				},
				T = e => {
					let {
						action: t,
						offset: n = 0,
						state: r,
						telemetrySource: o,
						trendingSearch: i
					} = e;
					const a = k[o],
						c = P[o],
						l = Object(b.a)(r, c).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === i.id) + n;
					return {
						...p.n(r),
						source: "search",
						action: t,
						noun: s.TRENDING,
						metaSearch: I(i),
						discoveryUnit: a === S.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: p.d(r, {
							paneName: a,
							position: l
						}),
						search: {
							originElement: a === S.SEARCH_DROPDOWN ? "search_dropdown" : void 0,
							originPageType: r.platform.currentPage ? p.u(r.platform.currentPage) : void 0,
							query: i.rawQuery,
							structureType: p.c.Trending,
							impressionId: Object(u.a)(r) ? x.a.get(o) : void 0,
							queryId: p.ab(r, o)
						}
					}
				},
				w = (e, t, n, s, r, o, a) => {
					Object(f.a)({
						...p.n(e),
						...Object(c.l)({
							state: e,
							postId: n,
							searchOptions: s,
							pageLayer: r,
							key: o,
							discoveryUnit: t
						}),
						action: i.c.VIEW,
						noun: a ? "ad" : "post"
					})
				},
				L = (e, t, n, s) => {
					Object(f.a)(j(e, t, n, s))
				},
				A = (e, t, n, s) => r => j(r, e, t, n, s),
				R = (e, t) => {
					Object(f.a)({
						...E(e, t),
						source: g,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				D = (e, t, n, s) => {
					Object(f.a)(B(t, n, s)(e))
				},
				B = (e, t, n, r) => o => {
					return {
						...y(o, e, n, r),
						source: g,
						action: i.c.CLICK,
						noun: s.ITEM_POST,
						post: p.H(o, t)
					}
				},
				F = (e, t, n, s) => r => o => Object(c.l)({
					state: o,
					postId: r,
					searchOptions: e,
					pageLayer: t,
					key: n,
					discoveryUnit: s
				}),
				M = (e, t, n, s) => r => o => Object(c.j)({
					action: i.c.CLICK,
					state: o,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: n,
					postId: r,
					discoveryUnit: s
				}),
				U = (e, t, n, s) => r => o => ({
					...Object(c.l)({
						state: o,
						postId: r,
						searchOptions: e,
						pageLayer: t,
						key: n,
						discoveryUnit: s
					}),
					noun: "ad"
				}),
				W = (e, t) => n => r => ({
					...e ? E(r, e, t) : {},
					source: g,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: p.H(r, n)
				}),
				H = (e, t, n, s) => {
					Object(f.a)(V(t, n, s)(e))
				},
				V = (e, t, n, s) => r => {
					const o = Object(m.c)(r, {
							postId: t
						}),
						a = o ? Object(h.b)(r, o) : void 0;
					return {
						...y(r, e, n, s),
						...a,
						source: g,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: p.H(r, t)
					}
				},
				G = () => ({
					id: "xd_focus_verticals",
					unitType: d.e.Listing,
					experiment: "",
					title: o.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.c.Large,
					surface: d.d.Frontpage,
					url: "gql.reddit.com"
				}),
				q = (e, t, n) => p.d(e, {
					position: n
				}),
				K = (e, t, n) => {
					const s = G();
					return e => ({
						..._(e, s),
						actionInfo: q(e, 0, n),
						subreddit: p.hb(e, t)
					})
				},
				Q = (e, t, n) => {
					const s = G();
					return e => ({
						...j(e, s, t),
						actionInfo: q(e, 0, n)
					})
				},
				z = (e, t, n) => {
					const r = G();
					return e => ({
						...E(e, r),
						actionInfo: q(e, 0, n),
						subreddit: p.hb(e, t) || null,
						source: g,
						action: i.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				Y = (e, t, n) => {
					const r = G();
					return e => ({
						...E(e, r),
						actionInfo: q(e, 0, n),
						post: p.H(e, t) || null,
						source: g,
						action: i.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				J = (e, t, n, r) => {
					const o = G();
					return e => ({
						...E(e, o),
						actionInfo: q(e, 0, r),
						subreddit: p.hb(e, n) || null,
						post: p.H(e, t) || null,
						source: g,
						action: i.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				Z = (e, t, n) => {
					const r = G();
					return e => ({
						...E(e, r),
						actionInfo: q(e, 0, n),
						subreddit: p.hb(e, t) || null,
						source: g,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				X = (e, t, n, r) => {
					const o = G();
					return e => ({
						...E(e, o),
						actionInfo: q(e, 0, n),
						subreddit: p.hb(e, t) || null,
						post: r ? p.H(e, r) : null,
						source: g,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				$ = (e, t, n, r) => {
					const o = G();
					return e => ({
						...E(e, o),
						actionInfo: q(e, 0, n),
						subreddit: p.hb(e, t) || null,
						post: r ? p.H(e, r) : null,
						source: g,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ee = (e, t, n) => {
					const r = G();
					return e => ({
						...E(e, r),
						actionInfo: q(e, 0, n),
						subreddit: p.hb(e, t) || null,
						source: g,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				te = (e, t, n) => {
					const r = G();
					return e => ({
						...E(e, r),
						actionInfo: q(e, 0, n),
						subreddit: p.hb(e, t) || null,
						source: g,
						action: i.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				ne = (e, t) => n => ({
					...E(n, e),
					...t && Object(h.b)(n, t),
					source: g,
					action: i.c.CLICK,
					noun: "item"
				}),
				se = e => t => ({
					...E(t, e),
					source: g,
					action: i.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(r.b)(t) || Object(o.b)(t))) return Object(r.b)(t) ? i.SourceElement.Comment : Object(s.x)(n) ? i.SourceElement.PostDetail : Object(s.H)(n) ? i.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(r.n)(e),
					action: s.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				i = () => e => ({
					...Object(r.n)(e),
					action: s.c.CLICK,
					noun: "hot_potato",
					source: "nav"
				}),
				a = () => e => ({
					...Object(r.n)(e),
					action: s.c.CLICK,
					noun: "hot_potato",
					source: "inbox"
				})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "w", (function() {
				return m
			})), n.d(t, "t", (function() {
				return p
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "v", (function() {
				return _
			})), n.d(t, "y", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "z", (function() {
				return S
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "g", (function() {
				return w
			}));
			var s, r, o, i, a, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(s || (s = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(r || (r = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(o || (o = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(i || (i = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(a || (a = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const m = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: s,
						type: r
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: s
						},
						notification: {
							type: r
						}
					})
				},
				p = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: s,
						type: r
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: s
						},
						notification: {
							type: r
						}
					})
				},
				b = () => e => ({
					...l.n(e),
					action: d.c.RECEIVE,
					noun: "notification",
					source: "in_app_notification"
				}),
				h = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: s,
						type: r,
						awardId: o
					} = e;
					return e => {
						Object(u.a)({
							...l.n(e),
							action: "receive",
							noun: "inbox_notification",
							source: i.Inbox,
							inbox: {
								id: t,
								isClicked: n,
								isViewed: s
							},
							notification: {
								type: r
							},
							goldPurchase: {
								awardId: o
							}
						})
					}
				},
				f = e => {
					let {
						dnPromptAction: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_banner",
						source: "inbox",
						banner: {
							id: "inbox_dn_banner"
						},
						actionInfo: {
							pageType: "dn_prompt",
							type: t
						}
					})
				},
				x = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: s,
						type: r,
						awardId: o,
						position: i,
						postId: a,
						subredditId: c
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: s
						},
						notification: {
							type: r
						},
						goldPurchase: {
							awardId: o
						},
						actionInfo: {
							position: i
						},
						subreddit: c ? {
							id: c
						} : null,
						post: a ? {
							id: a
						} : null
					})
				},
				g = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: s,
						type: r,
						awardId: o,
						position: i,
						postId: a,
						subredditId: c
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: s
						},
						notification: {
							type: r
						},
						goldPurchase: {
							awardId: o
						},
						actionInfo: {
							position: i
						},
						subreddit: c ? {
							id: c
						} : null,
						post: a ? {
							id: a
						} : null
					})
				},
				E = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox",
						source: i.Inbox,
						inbox: {
							badgeCount: t,
							tab: n
						}
					})
				},
				_ = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "mini_inbox",
						source: i.Inbox,
						inbox: {
							badgeCount: t,
							tab: s.Activity
						}
					})
				},
				v = e => {
					let {
						badgeCount: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox",
						source: i.Nav,
						inbox: {
							badgeCount: t
						}
					})
				},
				O = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: s,
						type: r,
						awardId: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_notification_overflow",
						source: i.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: s
						},
						notification: {
							type: r
						},
						goldPurchase: {
							awardId: o
						}
					})
				},
				y = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: s,
						type: r
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox_notification_overflow",
						source: i.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: s
						},
						notification: {
							type: r
						}
					})
				};
			var j;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(j || (j = {}));
			const I = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: s,
						isViewed: r,
						type: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "overflow_option",
						source: i.Inbox,
						inbox: {
							id: n,
							isClicked: s,
							isViewed: r
						},
						notification: {
							type: o
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				S = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: s,
						isViewed: r,
						type: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.UNDO,
						noun: "overflow_option",
						source: i.Inbox,
						inbox: {
							id: n,
							isClicked: s,
							isViewed: r
						},
						notification: {
							type: o
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				C = e => {
					let {
						actionInfoType: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "empty_state_cta",
						source: i.Inbox,
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				N = e => t => ({
					...l.n(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: i.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				k = () => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: i.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: o.MiniInbox
					}
				}),
				P = () => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "messages",
					source: i.Inbox
				}),
				T = e => {
					let {
						isMiniInbox: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "mark_all_as_read",
						source: i.Inbox,
						actionInfo: t ? {
							...l.d(e),
							pageType: o.MiniInbox
						} : {}
					})
				},
				w = (e, t) => n => ({
					...l.n(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: i.Inbox,
					actionInfo: {
						...l.d(n),
						pageType: e,
						type: t
					}
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "v", (function() {
				return j
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "u", (function() {
				return S
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "h", (function() {
				return k
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				i = "onboarding";
			var a;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more"
			}(a || (a = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
					return t => ({
						...Object(r.n)(t),
						action: s.c.CLICK,
						noun: a.EXIT,
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: i
					})
				},
				d = () => e => ({
					...Object(r.n)(e),
					action: s.c.DISMISS,
					noun: a.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: i
				}),
				l = () => e => ({
					...Object(r.n)(e),
					action: s.c.VIEW,
					noun: a.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: i
				}),
				u = e => t => ({
					...Object(r.n)(t),
					action: s.c.DISMISS,
					noun: e,
					source: i
				}),
				m = () => e => ({
					...Object(r.n)(e),
					source: i,
					action: s.c.VIEW,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(r.n)(e),
					source: i,
					action: s.c.VIEW,
					noun: a.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(r.n)(e),
					source: i,
					action: s.c.VIEW,
					noun: a.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(r.n)(e),
					source: i,
					action: s.c.SUBMIT,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				f = () => e => ({
					...Object(r.n)(e),
					source: i,
					action: s.c.SUBMIT,
					noun: a.ONBOARDING_INTEREST
				}),
				x = () => e => ({
					...Object(r.n)(e),
					source: i,
					action: s.c.SUBMIT,
					noun: a.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				g = () => e => ({
					...Object(r.n)(e),
					source: i,
					action: s.c.SKIP,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				E = () => e => ({
					...Object(r.n)(e),
					source: i,
					action: s.c.SKIP,
					noun: a.ONBOARDING_INTEREST
				}),
				_ = () => e => ({
					...Object(r.n)(e),
					source: i,
					action: s.c.SELECT,
					noun: a.GENDER
				}),
				v = (e, t, n, o) => c => ({
					...Object(r.n)(c),
					source: i,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(c),
						reason: o
					},
					noun: t ? a.CATEGORY : a.SUB_CATEGORY,
					onboarding: {
						categoryName: n
					}
				}),
				O = (e, t, n, o) => c => ({
					...Object(r.n)(c),
					source: i,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(c),
						reason: o
					},
					noun: a.SUBREDDIT,
					onboarding: {
						categoryName: t,
						subredditName: n
					}
				}),
				y = e => t => ({
					...Object(r.n)(t),
					source: i,
					action: s.c.CLICK,
					noun: a.VIEW_MORE,
					onboarding: {
						categoryName: e
					}
				}),
				j = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: a.TOPIC_PREVIEW
				}),
				I = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: a.TOPIC_PREVIEW
				}),
				S = e => t => ({
					...Object(r.n)(t),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: a.CATEGORY,
					onboarding: {
						categoryName: e
					}
				}),
				C = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: a.TOPIC_PREVIEW
				}),
				N = (e, t) => n => ({
					...Object(r.n)(n),
					source: i,
					action: s.c.VIEW,
					noun: e ? a.CATEGORY : a.SUB_CATEGORY,
					onboarding: {
						categoryName: t
					}
				}),
				k = (e, t, n) => o => ({
					...Object(r.n)(o),
					source: i,
					action: s.c.VIEW,
					actionInfo: {
						...Object(r.d)(o),
						reason: n
					},
					noun: a.SUBREDDIT,
					onboarding: {
						categoryName: e,
						subredditName: t
					}
				})
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				o = n("./src/reddit/selectors/experiments/serpSIIDs.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				c = n("./src/reddit/helpers/search/searchImpressionId.ts");
			const d = (e, t) => n => {
					const a = `flair_name:'${t.postFlairName}'`;
					return {
						source: "post",
						action: "click",
						noun: "post_flair",
						...i.n(n),
						actionInfo: i.d(n),
						correlationId: Object(s.c)(s.a.SearchResults),
						post: i.H(n, e),
						search: {
							...i.L(n, t),
							query: a,
							queryId: i.ab(n, r.a.SERP),
							impressionId: Object(o.a)(n) ? c.a.get(r.a.SERP) : void 0
						},
						subreddit: i.gb(n)
					}
				},
				l = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...i.n(t),
					actionInfo: i.d(t),
					correlationId: Object(s.c)(s.a.SearchResults),
					search: i.L(t, e),
					subreddit: i.gb(t)
				}),
				u = e => t => {
					const n = Object(a.g)(e);
					return {
						...i.n(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: i.gb(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				m = () => e => ({
					...i.n(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: i.gb(e)
				}),
				p = e => t => {
					const n = Object(a.g)(e);
					return {
						...i.n(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: i.gb(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				b = (e, t) => n => {
					const s = Object(a.g)(e),
						d = i.H(n, t),
						l = `flair_name:'${s}'`;
					return {
						...i.n(n),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: i.gb(n),
						postFlair: {
							id: e.templateId,
							title: s
						},
						post: d,
						search: {
							query: l,
							subredditId: d ? d.subredditId : void 0,
							subredditName: d ? d.subredditName : void 0,
							postFlairName: s,
							originElement: "post_flair",
							queryId: i.ab(n, r.a.SERP),
							impressionId: Object(o.a)(n) ? c.a.get(r.a.SERP) : void 0,
							originPageType: n.platform.currentPage ? i.u(n.platform.currentPage) : void 0
						},
						feed: i.q(n)
					}
				}
		},
		"./src/reddit/helpers/trackers/predictionsLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...Object(s.n)(e),
					subreddit: Object(s.gb)(e)
				}),
				o = {
					source: "global",
					action: "view",
					noun: "screen"
				},
				i = () => e => ({
					...r(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "all_time_community_predictors"
					}
				}),
				a = () => e => ({
					...r(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				c = () => e => ({
					...r(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "previous_tournament_predictor"
					}
				}),
				d = () => e => ({
					...r(e),
					...o,
					actionInfo: {
						pageType: "all_time_community_predictors_preview"
					}
				}),
				l = e => t => ({
					...r(t),
					...o,
					actionInfo: {
						pageType: "tournament_leaderboard_preview",
						reason: "predictions_tab"
					},
					predictions: {
						tournamentId: e
					}
				}),
				u = () => e => ({
					...r(e),
					...o,
					actionInfo: {
						pageType: "previous_tournaments"
					}
				}),
				m = () => e => ({
					...r(e),
					...o,
					actionInfo: {
						pageType: "all_time_community_predictors"
					}
				}),
				p = e => {
					let {
						isPreviousEvent: t,
						isQueried: n
					} = e;
					if (!n) return {
						reason: t ? "previous_tournament" : "predictions_tab"
					}
				},
				b = (e, t, n) => s => ({
					...r(s),
					...o,
					actionInfo: {
						pageType: "tournament_leaderboard",
						...p({
							isPreviousEvent: t,
							isQueried: n
						})
					},
					predictions: {
						tournamentId: e
					}
				})
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "H", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "D", (function() {
				return p
			})), n.d(t, "A", (function() {
				return b
			})), n.d(t, "E", (function() {
				return h
			})), n.d(t, "C", (function() {
				return f
			})), n.d(t, "B", (function() {
				return x
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "v", (function() {
				return E
			})), n.d(t, "x", (function() {
				return _
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "q", (function() {
				return y
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "z", (function() {
				return I
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "y", (function() {
				return C
			})), n.d(t, "G", (function() {
				return N
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "w", (function() {
				return D
			})), n.d(t, "F", (function() {
				return B
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "l", (function() {
				return M
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "h", (function() {
				return H
			}));
			var s, r = n("./src/reddit/constants/chat.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(s || (s = {}));
			const a = (e, t) => {
					if (t) {
						const n = i.A(e, t.post.id),
							s = i.H(e, t.post.id),
							r = i.gb(e);
						if (t.post.authorInfo && s && (s.authorId = t.post.authorInfo.id), n) {
							n.streamPublicId = t.stream.stream_id, n.id = t.stream.stream_id;
							const s = Object(o.j)(e, {
								streamIdFromPath: t.post.id
							});
							s === o.a.LIVE ? n.type = "stream_live" : s === o.a.VOD ? n.type = "stream_vod" : s === o.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: s,
							media: n,
							subreddit: r
						}
					}
					return {
						subreddit: i.gb(e)
					}
				},
				c = (e, t, n) => {
					if (!t || !n) return;
					const s = Object(o.j)(e, {
							streamIdFromPath: t.post.id
						}),
						i = t.chat_disabled || n.chatState === r.a.None;
					return {
						id: n.id,
						sessionDurationMs: n.sessionDurationMs,
						watchDurationMs: n.watchDurationMs,
						heartbeatDurationMs: n.heartbeatDurationMs,
						isLive: s === o.a.LIVE,
						playheadOffsetMs: n.playheadOffsetMs,
						timestampMs: n.timestampMs,
						startTimeMs: n.startTimeMs,
						volume: n.volume,
						chatState: i ? r.a.None : r.a.Compact,
						scrubbingStartMs: n.scrubbingStartMs,
						scrubbingEndMs: n.scrubbingEndMs,
						playerType: n.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...a(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...a(e)
				}),
				m = (e, t) => n => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...a(n, e),
					actionInfo: i.d(n, {
						position: t || 0
					})
				}),
				p = (e, t) => n => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...e && {
						...a(n, e)
					}
				}),
				b = (e, t) => n => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				h = (e, t) => n => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				f = (e, t) => n => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				x = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...a(s, t)
				}),
				g = (e, t, n, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...a(r, t),
					actionInfo: i.d(r, {
						referralId: s
					})
				}),
				E = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...a(s, t)
				}),
				_ = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...a(t, e)
				}),
				v = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				O = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				y = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				j = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(n, e, t),
					...a(n, e)
				}),
				I = e => t => {
					const n = Object(o.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...a(t, n)
					}
				},
				S = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(s, t, n),
					...a(s, t)
				}),
				C = (e, t) => n => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(n, e, t),
					...d(n)
				}),
				N = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: i.Q(t),
					screen: i.Y(t),
					...a(t, e)
				}),
				k = e => t => {
					const n = a(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.Q(t),
						screen: i.Y(t),
						...n
					}
				},
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...a(t, e)
				}),
				T = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...a(t, e)
				}),
				w = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...a(t, e),
					targetSubreddit: i.gb(t)
				}),
				L = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(n, e, t),
					...a(n, e)
				}),
				A = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(n, e, t),
					...a(n, e)
				}),
				R = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(n, e, t),
					...a(n, e)
				}),
				D = (e, t) => n => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(n, e, t),
					...a(n, e)
				}),
				B = (e, t) => n => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(n, e, t),
					...a(n, e)
				}),
				F = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(n, e, t),
					...a(n, e)
				}),
				M = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(n, e, t),
					...a(n, e),
					...d(n)
				}),
				U = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(n, e, t),
					...a(n, e),
					...d(n)
				}),
				W = (e, t) => n => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...a(n, t),
					...d(n)
				}),
				H = (e, t) => n => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...a(n, t),
					...d(n)
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...r.n(t),
					actionInfo: r.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.e)(s.a.SubredditCreation, !0)
				}),
				i = (e, t, n) => o => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...r.n(o),
					actionInfo: r.d(o, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				a = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...r.n(e),
					actionInfo: r.d(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				c = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...r.n(n),
					actionInfo: r.d(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				d = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...r.n(e),
					actionInfo: r.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...r.n(e),
					actionInfo: r.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...r.n(e),
					actionInfo: r.d(e)
				}),
				m = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...r.n(e),
					actionInfo: r.d(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return O
			}));
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.n(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...u.n(e),
					source: r,
					screen: u.Y(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {
						outbound: void 0
					};
					const r = Object(a.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${s}/`,
							sourceElement: Object(c.a)(t),
							subredditName: s,
							[r]: n.id
						},
						d = Object(l.x)(e, {
							subredditName: s
						});
					return d ? {
						outbound: {
							...o,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {};
					const s = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.H(e, n.id),
						subreddit: u.hb(e, s),
						...b(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...h(t, e)
				}),
				x = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.ib(t, e),
					screen: u.Y(t)
				}),
				g = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: s.ITEM_POST,
					post: u.H(n, t),
					subreddit: u.ib(n, e),
					screen: u.Y(n)
				}),
				E = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.ITEM_POST,
					post: u.H(n, t),
					subreddit: u.ib(n, e),
					screen: u.Y(n)
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/promo.ts"),
				r = n("./src/reddit/hooks/usePromoContext.ts");

			function o(e) {
				const {
					promos: t
				} = Object(r.a)();
				return !!e && t.get(e) === s.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function o(e) {
				const t = Object(s.e)(r.a) === e,
					n = Object(s.e)(r.c) === e,
					o = Object(s.e)(r.e) === e;
				return t || n || o
			}
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/clickSourceData/index.ts");

			function i() {
				const e = Object(r.e)(e => e.platform.currentPage),
					[t, n] = Object(s.useState)({});
				return Object(s.useEffect)(() => {
					n(Object(o.b)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				const t = Object(s.useRef)(!1);
				t.current || (e(), t.current = !0)
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
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/meta.ts");
			const a = "undefined" == typeof document ? function() {
				const e = Object(o.e)(i.i) || r.DEFAULT_LOCALE;
				return Object(s.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || r.DEFAULT_LOCALE;
				return Object(s.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			};
			t.a = a;
			const c = () => {
				const e = a(),
					t = Object(o.e)(i.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/useModalState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				const [t, n] = r.a.useState(e);
				return [t, () => n(!0), () => n(!1)]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.fb
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/sentry/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/Post/index.tsx");

			function i() {
				const e = Object(r.useContext)(o.c);
				return e || s.c.captureMessage("No post context provided"), e
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(s.useContext)(r.a)
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
				i = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: Object(o.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || i.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/CirclePost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				viewBox: "0 0 56 56",
				xmlns: "http://www.w3.org/2000/svg",
				className: e.className
			}, r.a.createElement("g", {
				transform: "translate(1 1)",
				fill: "inherit",
				stroke: "inherit",
				fillRule: "evenodd"
			}, r.a.createElement("rect", {
				x: "16",
				y: "35",
				width: "22.4",
				height: "2.8",
				rx: "1.4",
				stroke: "none"
			}), r.a.createElement("path", {
				d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
			}), r.a.createElement("circle", {
				strokeWidth: "2",
				fill: "none",
				cx: "27",
				cy: "27",
				r: "27"
			})))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), r.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
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
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const r = e => e.category === s.Supporter,
				o = e => e.category === s.Achievement
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, r, o, i, a = n("./src/reddit/models/FeedElement/index.ts");

			function c(e) {
				return e.__typename === a.a.InboxNotificationCollection
			}! function(e) {
				e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.ChatRequest = "CHAT_REQUEST", e.ChatAcceptInvite = "CHAT_ACCEPT_INVITE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.ModeratedSrViralCommentPost = "MODERATED_SR_VIRAL_COMMENT_POST", e.OneOff = "ONE_OFF", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.TalkLive = "TALK_LIVE", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
			}(s || (s = {})),
			function(e) {
				e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.Lore = "LORE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
			}(r || (r = {})),
			function(e) {
				e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
			}(o || (o = {})),
			function(e) {
				e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
			}(i || (i = {}))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
				}(s || (s = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, n) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(r),
				i = n("./node_modules/lodash/memoize.js"),
				a = n.n(i),
				c = n("./node_modules/lodash/throttle.js"),
				d = n.n(c),
				l = n("./node_modules/react/index.js"),
				u = n.n(l),
				m = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./node_modules/reselect/es/index.js"),
				h = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				f = n("./src/config.ts"),
				x = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/constants/index.ts"),
				E = n("./src/lib/extractQueryParams/index.ts"),
				_ = n("./src/lib/isAdHocMultireddit/index.ts"),
				v = n("./src/lib/isFakeSubreddit/index.ts"),
				O = n("./src/lib/listingSort/index.ts"),
				y = n("./src/lib/makeListingKey/index.ts"),
				j = n("./src/lib/objectSelector/index.ts"),
				I = n("./src/lib/promo/withShowSignupUpsell.tsx"),
				S = n("./src/lib/fastdom/index.ts"),
				C = n("./src/lib/performanceTimings/index.tsx"),
				N = n("./src/reddit/actions/preferences.ts"),
				k = n("./src/reddit/actions/search.ts"),
				P = n("./src/reddit/actions/searchQueryId/index.tsx"),
				T = n("./src/reddit/actions/subreddit.ts"),
				w = n("./src/reddit/components/AwardedListingBanner/index.tsx"),
				L = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				A = n("./src/reddit/components/ContentGate/index.tsx"),
				R = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				D = n("./src/reddit/components/Econ/PowerupsInFeedUnit/async.tsx"),
				B = n("./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts"),
				F = n("./src/reddit/components/Econ/PredictionsPostList/index.tsx"),
				M = n("./src/reddit/components/Econ/Tournament/Sidebar/index.tsx"),
				U = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				W = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				H = n("./src/reddit/components/EmptySubredditPostList/index.tsx"),
				V = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				G = n("./src/reddit/components/Governance/ClaimPointsBanner/async.ts"),
				q = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				K = n("./src/reddit/components/HeaderImage/index.tsx"),
				Q = n("./src/reddit/components/HotPotatoEmbed/index.tsx"),
				z = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				Y = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				J = n("./src/reddit/components/JumpToContent/index.tsx"),
				Z = n("./src/reddit/components/ListingPostList/index.tsx"),
				X = n("./src/reddit/components/NewPostPill/index.tsx"),
				$ = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				ee = n("./src/reddit/components/RelatedSubredditsCarousel/async.tsx"),
				te = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				ne = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				se = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				re = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				oe = n("./src/reddit/components/TabBadger/index.tsx"),
				ie = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				ce = n("./src/reddit/constants/parameters.ts"),
				de = n("./src/reddit/constants/postLayout.ts"),
				le = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ue = n("./src/reddit/featureFlags/index.ts"),
				me = n("./src/reddit/helpers/correlationIdTracker.ts"),
				pe = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				be = n("./src/reddit/helpers/name/index.ts"),
				he = n("./src/reddit/helpers/resonatePage/index.ts"),
				fe = n("./src/reddit/helpers/trackers/postList.ts"),
				xe = n("./src/reddit/helpers/trackers/screenview.ts"),
				ge = n("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Ee = n("./src/reddit/layout/page/Listing/index.tsx"),
				_e = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ve = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Oe = n("./src/reddit/selectors/countrySites.ts"),
				ye = n("./src/reddit/selectors/discoveryUnit.ts"),
				je = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				Ie = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				Se = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				Ce = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				ke = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Pe = n("./src/reddit/selectors/experiments/onboarding.ts"),
				Te = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				we = n("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Le = n("./src/reddit/selectors/experiments/searchQueryAligment.ts"),
				Ae = n("./src/reddit/selectors/experiments/topPosts.ts"),
				Re = n("./src/reddit/selectors/gold/powerups/index.ts"),
				De = n("./src/reddit/selectors/listings.ts"),
				Be = n("./src/reddit/selectors/meta.ts"),
				Fe = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Me = n("./src/reddit/selectors/newPostPill.ts"),
				Ue = n("./src/reddit/selectors/posts.ts"),
				We = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				He = n("./src/reddit/selectors/searchQueryId.ts"),
				Ve = n("./src/reddit/selectors/subreddit.ts"),
				Ge = n("./src/reddit/selectors/user.ts"),
				qe = n("./src/reddit/selectors/userPrefs.ts"),
				Ke = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx"),
				Qe = n("./src/lib/countrySites/index.ts"),
				ze = n("./src/reddit/components/Onboarding/Interests/InterestPickerPreview.tsx"),
				Ye = n("./src/reddit/constants/countrySites.ts"),
				Je = n("./src/reddit/helpers/search/searchQueryId.ts"),
				Ze = n("./src/reddit/selectors/onboarding.ts"),
				Xe = n("./src/reddit/pages/Subreddit/index.m.less"),
				$e = n.n(Xe);

			function et() {
				return (et = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: tt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), nt = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-AdHocMultiredditSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("reddit-components-AdHocMultiredditSidebar")]).then(n.bind(null, "./src/reddit/components/AdHocMultiredditSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdHocMultiredditSidebar/index.tsx"
				}
			}), st = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-LayerEmbed",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-LayerEmbed").then(n.bind(null, "./src/reddit/components/LayerEmbed/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/LayerEmbed/index.tsx"
				}
			}), rt = 5, ot = 3, it = 6e3, at = Object(le.u)(), ct = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditTopContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("SubredditTopContent")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"
				}
			}), dt = Object(j.a)(Object(b.a)((e, t) => {
				let {
					location: n
				} = t;
				return n.search
			}, e => o()([...Object(E.a)(e)]))), lt = e => Object(De.a)(e) || "", ut = Object(b.c)({
				isTopContentDismissed: Ge.Y
			}), mt = Object(b.c)({
				subreddit: (e, t) => Object(Ve.x)(e, {
					subredditName: t.match.params.subredditName
				})
			}), pt = Object(b.c)({
				powerupsEnabled: (e, t) => {
					const {
						subreddit: n
					} = mt(e, t);
					return !(!n || !Object(Re.k)(e, {
						subredditId: n.id
					}))
				}
			}), bt = Object(b.c)({
				isLoggedIn: Ge.Q
			}), ht = Object(j.a)((e, t) => {
				const {
					subreddit: n
				} = mt(e, t), {
					subredditName: s
				} = t.match.params;
				if (n) {
					if (e.subreddits.progressModule[n.id]) return !1;
					if (Object(Ne.a)(e)) return !1;
					const t = lt(e),
						r = Object(Fe.b)(ve.c.config)(e, {
							subredditId: n.id
						}),
						o = Object(Ue.D)(e, t, s, !0),
						i = !Object(De.d)(e, {
							listingKey: t
						});
					if (r && i && o.length <= 1) return !0
				}
				return !1
			}), ft = (e, t) => {
				const n = lt(e),
					s = Object(le.R)(e, t),
					{
						sort: r
					} = Et(e, t);
				return Object(Me.a)(e, {
					layout: s,
					listingKey: n,
					sort: r
				})
			}, xt = Object(b.c)({
				inAwardListingExperiment: Ie.a,
				isPopular: le.F
			}), gt = e => {
				const t = ce.E in e && e[ce.E].toUpperCase();
				if ("string" == typeof t && t in g.hc) return g.hc[t]
			}, Et = Object(j.a)((e, t) => {
				const {
					sort: n,
					subredditName: s,
					countryCode: r,
					languageCode: o
				} = t.match.params, i = dt(e, t), a = Object(v.a)(s, {
					countryCode: r,
					languageCode: o
				}), c = Object(v.c)(s, {
					countryCode: r,
					languageCode: o
				});
				if (n) return Object(O.b)({
					sort: n,
					timeSort: gt(i)
				});
				if (a) return c && Object(je.a)(e) ? Object(O.b)({
					sort: g.W.BEST
				}) : Object(O.b)({
					sort: g.W.HOT
				});
				const d = lt(e),
					l = e.listings.postOrder.listingSort[d];
				if (l && !l.hasChanged) return Object(O.d)(l.sort);
				const {
					subreddit: u
				} = mt(e, t);
				if (u) {
					const t = Object(Ve.B)(e, {
						subredditId: u.id
					});
					return Object(O.d)(t)
				}
				return Object(O.d)(e.user.prefs.sort)
			}), _t = Object(j.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(Ve.W)(e, {
					subredditName: n
				})
			}), vt = Object(b.c)({
				countrySiteUrlParams: Oe.b,
				claimablePointsEnabled: ue.d.spClaimablePoints,
				countrySiteSettings: Oe.a,
				isBlacklistedTopContentPage: ye.e,
				listingKey: lt,
				sortParams: Et,
				specialMembershipUpsellsEnabled: ue.d.spSpecialMembershipUpsells,
				topContent: _t,
				topContentDiscoveryUnit: e => Object(ye.b)(e, {
					unitName: _e.a
				}),
				topPostsVariant: Ae.d,
				walletRegistrationBannerEnabled: ue.d.spWalletRegistrationBanner,
				isEligibleForNsfwSignupUpsellTreatment: ke.a,
				searchResultsServerQueryId: e => Object(He.a)(e),
				isSearchQueryAlignmentActive: Le.a
			}), Ot = Object(b.c)({
				showCreatePostBanner: ht,
				contentGateInfo: (e, t) => Object(Ge.f)(e, t.match.params.subredditName),
				layout: le.R,
				isRpanDuVisible: (e, t) => {
					let {
						match: n
					} = t;
					return Object(We.a)(e, {
						listingName: `r/${n.params.subredditName}`,
						sort: n.params.sort
					})
				},
				rpanInjectionIndex: (e, t) => {
					let {
						match: n
					} = t;
					return Object(We.b)(e, {
						listingName: `r/${n.params.subredditName}`
					})
				},
				inResonatePilot: we.a,
				newPostPillTriggerIdx: ft,
				isReducedAnimation: qe.c,
				isCommentCountAnimationEnabled: Te.d,
				isVoteCountAnimationEnabled: Te.h,
				isCountAnimShadowTestEnabled: Te.e,
				isHotPotatoEmbedEnabled: Se.c,
				isBlockingInterstitialEnabled: Ce.b,
				interestTopicRecommendations: Ze.b,
				reonboardingFlow: Pe.b
			}), yt = () => Object(b.a)(Ge.kb, dt, ut, pt, mt, (e, t) => {
				let {
					match: n
				} = t;
				return Object(Ve.u)(e, {
					subredditName: n.params.subredditName
				})
			}, bt, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, Be.k, xt, vt, Ot, (e, t, n, s, r, o, i, a, c, d, l, u) => {
				let {
					isTopContentDismissed: m
				} = n, {
					powerupsEnabled: p
				} = s, {
					subreddit: b
				} = r, {
					isLoggedIn: h
				} = i, {
					inAwardListingExperiment: f,
					isPopular: x
				} = d, {
					countrySiteUrlParams: g,
					claimablePointsEnabled: E,
					countrySiteSettings: _,
					specialMembershipUpsellsEnabled: v,
					listingKey: O,
					sortParams: {
						sort: y,
						timeSort: j
					},
					topContent: I,
					topContentDiscoveryUnit: S,
					topPostsVariant: C,
					isBlacklistedTopContentPage: N,
					walletRegistrationBannerEnabled: k,
					isEligibleForNsfwSignupUpsellTreatment: P,
					searchResultsServerQueryId: T,
					isSearchQueryAlignmentActive: w
				} = l;
				const L = t && ce.j in t ? t[ce.j].toUpperCase() : c,
					A = !!t.hasOwnProperty("f");
				return {
					countrySiteUrlParams: g,
					countrySort: L,
					claimablePointsEnabled: E,
					countrySiteSettings: _,
					specialMembershipUpsellsEnabled: v,
					inAwardListingExperiment: f,
					isLoggedIn: h,
					isPopular: x,
					listingKey: O,
					renderNSFWContentGate: b && b.isNSFW && !e,
					isTopContentDismissed: m,
					powerupsEnabled: p,
					sort: y,
					subreddit: b,
					subredditAboutInfo: o,
					subredditName: a,
					timeSort: j,
					topContent: I,
					topContentDiscoveryUnit: S,
					topPostsVariant: C,
					isBlacklistedTopContentPage: N,
					isFlairFilter: A,
					walletRegistrationBannerEnabled: k,
					isEligibleForNsfwSignupUpsellTreatment: P,
					searchResultsServerQueryId: T,
					isSearchQueryAlignmentActive: w,
					...u
				}
			}), jt = (e, t) => ({
				onLoadMorePosts: () => {
					e(T.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					}))
				},
				onLoadMoreSearchResults: () => e(Object(k.n)([g.bc.Posts])),
				refreshFeed: () => e(T.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(N.G)()),
				redirectToNewSort: () => {
					e(Object(p.b)(`/r/${t.match.params.subredditName}/${g.W.NEW}/`))
				},
				unsetSearchResultsServerQueryId: () => e(Object(P.c)())
			}), It = Object(m.b)(yt, jt), St = Object(s.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("Trending").then(n.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), Ct = e => u.a.createElement(St, et({}, e, {
				fallback: u.a.createElement(ne.a, {
					className: e.className,
					showCardView: !!e.showCardView
				})
			})), Nt = Object(s.a)({
				resolved: {},
				chunkName: () => "FrontpageSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("FrontpageSidebar").then(n.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/FrontpageSidebar/index.tsx"
				}
			}), kt = Object(s.a)({
				resolved: {},
				chunkName: () => "TopWeekPostsDiscoveryUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("TopWeekPostsDiscoveryUnit")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"
				}
			});

			function Pt(e) {
				const {
					subreddit: t
				} = e;
				return !!t && !!t.name && "snoovatar" === t.name.toLowerCase()
			}

			function Tt(e) {
				const {
					subreddit: t
				} = e;
				return "youcannesdraw" === (null == t ? void 0 : t.name.toLowerCase())
			}
			class wt extends u.a.Component {
				constructor(e) {
					super(e), this.renderNewPostPill = e => {
						e === this.props.newPostPillTriggerIdx - 1 && (this.state.isNewPostPillRenderedOnce || (this.setState({
							isNewPostPillRenderedOnce: !0,
							shouldShowNewPostPill: !0
						}), this.props.sendEvent(Object(fe.d)(this.props.listingKey)), this.newPostPillTimer = setTimeout(() => {
							this.state.shouldShowNewPostPill && this.setState({
								shouldShowNewPostPill: !1
							})
						}, it)))
					}, this.onNewPostPillClick = () => {
						this.setState({
							shouldShowNewPostPill: !1
						}), this.props.sendEvent(Object(fe.c)(this.props.listingKey)), S.a.write(() => {
							window.addEventListener("scroll", this.handleScroll), window.scrollTo({
								top: 0,
								behavior: this.props.isReducedAnimation ? "auto" : "smooth"
							})
						})
					}, this.handleScroll = d()(() => {
						0 === window.scrollY && (window.removeEventListener("scroll", this.handleScroll), this.props.redirectToNewSort())
					}, g.K), this.onTopContentDismissed = () => {
						this.props.setTopContentDismissalPref()
					}, this.onViewed = (e, t) => {
						const {
							listingKey: n,
							pageLayer: s,
							sort: r,
							timeSort: o
						} = this.props, i = Object(le.O)(s);
						return Object(xe.f)({
							key: n,
							sort: r,
							timerType: t,
							timerMillis: e,
							timeSort: o,
							isPredictionsPage: i
						})
					}, this.noPostsComponent = () => {
						const {
							pageLayer: e,
							subredditName: t,
							sort: n,
							subreddit: s
						} = this.props, r = t.toLowerCase(), o = Object(le.O)(e);
						return u.a.createElement(H.a, {
							isPredictionsPage: o,
							listingName: r,
							sort: n,
							subreddit: s
						})
					}, this.memoizedGetInjectChildren = a()(e => {
						let {
							claimablePointsEnabled: t,
							inAwardListingExperiment: n,
							interestTopicRecommendations: s,
							isPopular: r,
							isRpanDuVisible: o,
							layout: i,
							listingKey: a,
							powerupsEnabled: c,
							reonboardingFlow: d,
							rpanInjectionIndex: l,
							sendEvent: m,
							sort: p,
							specialMembershipUpsellsEnabled: b,
							subreddit: h,
							subredditName: f,
							timeSort: E,
							topPostsVariant: _,
							walletRegistrationBannerEnabled: v
						} = e;
						return () => {
							const e = {},
								O = Object(Ae.c)(_),
								j = i === de.g.Classic ? $e.a.classicChild : i === de.g.Compact ? $e.a.compactChild : $e.a.cardChild;
							if (b && h && (e[0] = {
									estHeight: 487,
									id: `newbie-banner-${i}-${a}`,
									render(e) {
										let {
											className: t
										} = e;
										return u.a.createElement(W.a, {
											className: Object(x.a)(t, j)
										})
									}
								}, e[3] = {
									estHeight: 256,
									id: `lfg-banner-${i}-${a}`,
									render(e) {
										let {
											className: t
										} = e;
										return u.a.createElement(U.a, {
											className: Object(x.a)(t, j),
											subredditId: h.id
										})
									}
								}), h && (e[0] = {
									estHeight: 175,
									id: `community-survey-${i}-${a}`,
									render: () => u.a.createElement(Ke.a, {
										subredditId: h.id,
										postLayout: i,
										subredditSubscribers: h.subscribers
									})
								}), n && r && p === g.W.AWARDED && (e[0] = {
									estHeight: 180,
									id: `awardlisting-banner-${i}-${a}`,
									render(e) {
										let {
											className: t
										} = e;
										return u.a.createElement(w.a, {
											className: Object(x.a)(t, j)
										})
									}
								}), v && h && (e[1] = {
									estHeight: 384,
									id: `wallet-registration-${i}-${a}`,
									render(e) {
										let {
											className: t
										} = e;
										return u.a.createElement(q.a, {
											className: Object(x.a)(t, j),
											subredditId: h.id
										})
									}
								}), t && h && (e[2] = {
									estHeight: 268,
									id: `claim-points-${i}-${a}`,
									render(e) {
										let {
											className: t
										} = e;
										return u.a.createElement(G.a, {
											className: Object(x.a)(t, j),
											subredditId: h.id
										})
									}
								}), h && i === de.g.Large && c) {
								e[e[2] ? e[3] ? 4 : 3 : 2] = {
									estHeight: 476,
									id: `powerups-perks-${i}-${a}`,
									render(e) {
										let {
											className: t
										} = e;
										return u.a.createElement(D.a, {
											className: Object(x.a)(t, j),
											subredditId: h.id
										})
									}
								}
							}
							if (!r && O && E !== g.hc.WEEK && i === de.g.Large) {
								const t = Object(y.a)(f, g.W.TOP, {
									t: g.hc.WEEK
								});
								e[ot] = {
									estHeight: 0,
									id: `top-week-posts-${i}-${a}`,
									render(e) {
										let {
											className: n
										} = e;
										return u.a.createElement(kt, {
											className: n,
											listingKey: t,
											subredditName: f
										})
									}
								}
							}
							if (o) {
								const {
									child: t,
									idx: n
								} = Object($.a)({
									children: e,
									desiredIndex: l,
									layout: i,
									listingKey: a,
									listingName: `r/${f}`,
									sendEvent: m
								});
								e[n] = t
							}
							if (s) {
								const {
									interests: t,
									index: n
								} = s, {
									child: r,
									idx: o
								} = Object(ze.a)({
									children: e,
									desiredIdx: n,
									interests: t,
									sendEvent: m,
									variant: d
								});
								e[o] = r
							}
							return e
						}
					}, e => {
						let {
							isRpanDuVisible: t,
							sort: n,
							layout: s,
							listingKey: r,
							timeSort: o,
							subreddit: i
						} = e;
						return `rpan:${t}_s:${n}_l:${s}_lk${r}_ts:${o}_sr:${null==i?void 0:i.id}`
					}), this.state = {
						shouldShowNewPostPill: !1,
						isNewPostPillRenderedOnce: !1
					}
				}
				componentDidMount() {
					if (S.a.read(() => {
							Object(C.d)(C.c.Subreddit, this.props.isLoggedIn)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						g.Mb.includes(e) && Object(he.a)(e)
					}
					if (this.props.searchResultsServerQueryId.searchQueryId) {
						const {
							key: e,
							searchQueryId: t
						} = this.props.searchResultsServerQueryId;
						this.props.isSearchQueryAlignmentActive ? Je.a.set(e || "", t) : Object(me.d)(me.a.SearchResults, t || ""), this.props.unsetSearchResultsServerQueryId()
					}
				}
				componentDidUpdate(e) {
					if (e.isFlairFilter && !this.props.isFlairFilter && Object(me.c)(me.a.SearchResults) && Object(me.b)(me.a.SearchResults), this.props.inResonatePilot) {
						const t = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						(e.subredditName ? e.subredditName.toLowerCase() : "") !== t && g.Mb.includes(t) && Object(he.a)(t)
					}
					e.subredditName !== this.props.subredditName && (this.newPostPillTimer && clearTimeout(this.newPostPillTimer), this.setState({
						isNewPostPillRenderedOnce: !1,
						shouldShowNewPostPill: !1
					}))
				}
				componentWillUnmount() {
					this.props.isFlairFilter && Object(me.c)(me.a.SearchResults) && Object(me.b)(me.a.SearchResults)
				}
				render() {
					const {
						contentGateInfo: e,
						countrySiteUrlParams: t,
						countrySiteSettings: n,
						countrySort: s,
						isBlacklistedTopContentPage: r,
						isBlockingInterstitialEnabled: o,
						isCommentCountAnimationEnabled: i,
						isCountAnimShadowTestEnabled: a,
						isHotPotatoEmbedEnabled: c,
						isFlairFilter: d,
						isLoggedIn: l,
						isPopular: m,
						isTopContentDismissed: p,
						isVoteCountAnimationEnabled: b,
						layout: E,
						listingKey: O,
						match: y,
						pageLayer: j,
						renderNSFWContentGate: I,
						showCreatePostBanner: S,
						showSignupUpsell: C,
						sort: N,
						subreddit: k,
						subredditAboutInfo: P,
						subredditName: T,
						timeSort: w,
						topContent: D,
						topContentDiscoveryUnit: U,
						topPostsVariant: W,
						isEligibleForNsfwSignupUpsellTreatment: H
					} = this.props, G = this.memoizedGetInjectChildren(this.props), q = Object(v.a)(T, {
						countryCode: null == t ? void 0 : t.countryCode,
						languageCode: null == t ? void 0 : t.languageCode
					}), $ = T.toLowerCase(), ne = k && k.url ? k.url : Object(Qe.b)(`/r/${T}/`, null == t ? void 0 : t.countryCode, null == t ? void 0 : t.languageCode), ie = Object(h.a)({
						countryCode: Ye.a,
						languageCode: Ye.b,
						hardcodedPath: ne,
						permalink: ne,
						subredditName: T
					}, n), ce = {
						listingKey: O,
						listingName: $
					}, ue = Object(Ae.a)(W), me = Object(Ae.b)(W), he = Object(le.O)(j);
					let fe;
					if (q ? fe = Object(_.a)(T) ? u.a.createElement(nt, ce) : u.a.createElement(Nt, ce) : k && (fe = he ? u.a.createElement(M.a, {
							subredditId: k.id
						}) : u.a.createElement(re.a, et({}, ce, {
							className: $e.a.sidebar,
							subredditId: k.id,
							subredditName: T,
							topPostsVariant: W
						}))), (null == k ? void 0 : k.isNSFW) && H) return u.a.createElement(ae.a, {
						contentTitle: Object(be.c)(T)
					});
					const xe = Object(pe.a)(e, I, T);
					if (xe) return u.a.createElement(A.default, xe);
					const ge = E === de.g.Large,
						_e = m,
						ve = k ? k.id : void 0,
						Oe = !y.params.sort && D && !D.isSubscribed && D.postIds && D.postIds.length >= rt && !p && !r && !ue && !me,
						ye = {
							baseUrl: ie,
							countrySort: s,
							sort: N,
							subredditId: ve,
							timeSort: w
						},
						je = d ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Ie = k && k.subscribers;
					let Se;
					const Ce = window.URL;
					if (Pt(this.props)) {
						const e = new Ce(f.a.snoovatarUrl + "/static/client/");
						e.searchParams.set("platform", "desktop"), Se = u.a.createElement("iframe", {
							className: Object(x.a)($e.a.af),
							src: e.href
						})
					} else _e ? Se = u.a.createElement(Ct, {
						showCardView: this.props.layout === de.g.Large
					}) : Tt(this.props) && this.props.subreddit && (Se = u.a.createElement(st, {
						baseUrl: f.a.layersUrl,
						subredditId: this.props.subreddit.id
					}));
					const Ne = E === de.g.Large && N !== g.W.NEW && !he && !q,
						ke = this.state.shouldShowNewPostPill && Ne,
						Pe = he ? F.a : Z.a;
					return u.a.createElement(se.a, {
						subredditId: ve
					}, u.a.createElement(Ee.a, {
						subredditId: ve,
						className: Object(x.a)($e.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !q && u.a.Children.toArray([u.a.createElement(K.a, {
							headerText: k ? k.name : T,
							disableFullscreen: ge,
							isTopBannerVariant: !0,
							key: "headerimage",
							subredditOrProfile: k,
							url: ie
						}), u.a.createElement(L.a, {
							layout: E,
							key: "idtopbar",
							subreddit: k || void 0,
							subredditId: ve,
							subredditName: T,
							subredditUrl: ie
						}), c && u.a.createElement(Q.a, null), ve && u.a.createElement(ee.a, {
							key: "related-subreddit-carousel",
							subredditId: ve
						})]),
						trendingUnit: Se,
						content: u.a.createElement(u.a.Fragment, null, k && k.isQuarantined && u.a.createElement(Y.a, {
							subredditName: T
						}), k && S && u.a.createElement(R.a, {
							subreddit: k,
							listingKey: O,
							listingName: $
						}), _e && u.a.createElement(te.a, {
							className: $e.a.duHeader
						}, tt._("Popular posts", null, {
							hk: "Gfyj2"
						})), Oe && u.a.createElement(ct, {
							discoveryUnit: U,
							subredditName: k ? k.name : T,
							topContent: D,
							onCloseClick: this.onTopContentDismissed
						}), !q && l && !(P && P.userIsBanned) && !he && u.a.createElement(z.a, {
							subredditName: T
						}), !he && u.a.createElement(V.a, ye), u.a.createElement(J.a, null), u.a.createElement(oe.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: O,
							subredditName: T,
							subscriberCount: Ie
						}), he && u.a.createElement(B.a, {
							subreddit: k
						}), ke && u.a.createElement(X.a, {
							onClick: this.onNewPostPillClick,
							subredditName: T
						}), u.a.createElement(Pe, {
							getInjectChildren: he ? void 0 : G,
							isCommentCountAnimationEnabled: i,
							isVoteCountAnimationEnabled: b,
							isCountAnimShadowTestEnabled: a,
							listingKey: O,
							listingName: $,
							listingViewed: this.onViewed,
							triggerNewPostPill: Ne ? this.renderNewPostPill : void 0,
							noPostsComponent: this.noPostsComponent,
							onLoadMore: je,
							onScroll: C,
							inSubredditOrProfile: !q,
							disablePlaceholder: m && N === g.W.AWARDED,
							isBlockingInterstitialEnabled: o
						})),
						sidebar: fe
					}))
				}
			}
			t.default = at(It(Object(ie.c)(Object(I.a)(Object(ge.d)(wt)))))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/gold/constants.ts"),
				o = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const i = {};
			var a = n("./node_modules/icepick/icepick.js"),
				c = n("./src/reddit/actions/economics/powerups/constants.ts");
			const d = {},
				l = e => {
					var t, n;
					return (null === (t = e.find(e => {
						let {
							isPreferred: t
						} = e;
						return t
					})) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				u = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.pb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const i = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								a = s.filter(o.a).map(e => e.type),
								c = s.filter(o.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: i,
									achievementTypes: a,
									supporterTypes: c
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.d: {
							const {
								id: n,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let r = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: i
								} of s) {
								const n = i.filter(o.a),
									s = n.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									a = i.filter(o.b),
									c = a.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									d = l(n),
									u = l(a);
								r = {
									...r,
									[e]: {
										achievementTypes: s,
										supporterTypes: c,
										preferredAchievementType: d,
										preferredSupporterType: u,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[n]: r
							}
						}
						case c.f: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: r,
								supporterFlairType: o
							} = t.payload;
							return Object(a.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: r,
								pendingSupporterType: o
							}))
						}
						case c.g: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: r,
								supporterFlairType: o
							} = t.payload;
							return Object(a.updateIn)(e, [n, s], e => ({
								...e,
								preferredAchievementType: r,
								preferredSupporterType: o,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(a.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.h: {
							const {
								subredditId: n,
								userId: s,
								isHidden: r
							} = t.payload;
							return Object(a.updateIn)(e, [n, s], e => ({
								...e,
								isHidden: r
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const r = s.supportedSubreddits.filter(e => {
									let {
										subredditInfo: t
									} = e;
									return null == t ? void 0 : t.id
								}).map(e => {
									let {
										subredditInfo: t
									} = e;
									return t.id
								});
								n = {
									...n,
									[t]: r.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(s.a)(a.k, a.Hb, (e, t) => {
					let {
						listingName: n
					} = t;
					return -1 === [o.R, "r/popular"].indexOf(n)
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(i.D)(e, n.replace(/^r\//, ""))
				}, (e, t, n, s) => {
					if (e && n && s) {
						return t.subreddit[s]
					}
					return t
				}),
				u = Object(s.a)(l, e => {
					if (!e) return !1;
					if (!e.rpanDuDismissalTime) return !1;
					return new Date(e.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.B
				}),
				m = Object(s.a)(c.a, u, (e, t) => {
					let {
						listingName: n
					} = t;
					return n
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(d.m)(e, {
						subreddit: n
					})
				}, d.k, (e, t) => {
					let {
						sort: n
					} = t;
					return n
				}, (e, t, n, s, o, i) => i !== r.W.AWARDED && (!!e && (!o.isPermanentlyCanceled && (!t && (!!s && s.show_discovery_unit))))),
				p = Object(s.a)((e, t) => {
					let {
						listingName: n
					} = t;
					return n
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(d.m)(e, {
						subreddit: n
					})
				}, d.l, (e, t, n) => t ? t.discovery_unit_index : o.i)
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "i", (function() {
				return N
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "h", (function() {
				return L
			})), n.d(t, "k", (function() {
				return A
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "b", (function() {
				return W
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "g", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = n("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = n.n(d)()(e => Object(r.a)(Object(s.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				x = e => e.publicAccessNetwork.history.visitOrder,
				g = e => e.publicAccessNetwork.hlsStreams,
				E = Object(s.a)(g, e => e.ended),
				_ = Object(s.a)(g, e => e.removed),
				v = Object(s.a)(p, E, _, (e, t, n) => {
					const s = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = B(s, i.a.ENDED) ? i.a.ENDED : s,
							o = n.stream.vod_accessible;
						return r === s && !0 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = B(s, i.a.ENDED) ? i.a.ENDED : s,
							o = n.stream.vod_accessible;
						return r === s && !1 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !1
								}
							}
						}
					}, s)
				}),
				O = (e, t) => {
					return v(e)[Object(o.g)(t)]
				},
				y = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n
				}, (e, t) => u(t.listingName)(e, t), v, b, a.h, (e, t, n, s, r) => {
					const a = [];
					if (e) {
						const t = Object(o.g)(e);
						n[t] && a.push(t)
					}
					const c = a.concat(t),
						d = [...new Set(c)],
						l = new Set([...s, ...r]);
					return d.filter(e => {
						const t = n[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
					})
				}),
				j = Object(s.a)((e, t) => {
					let {
						count: n
					} = t;
					return n
				}, v, (e, t) => {
					let {
						listingName: n,
						streamIdFromPath: s
					} = t;
					return y(e, {
						listingName: n,
						streamIdFromPath: s
					})
				}, (e, t, n) => {
					const s = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				I = Object(s.a)(v, j, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				S = Object(s.a)(x, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return j(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, (e, t) => {
					const n = new Set(e),
						s = t.filter(e => !n.has(e));
					if (s.length) return s[0]
				}),
				C = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n
				}, v, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return j(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, h, (e, t, n, s) => {
					if (!n.length) return;
					const r = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = r.find(e => e.stream.state === i.a.IS_LIVE);
					if (o) return o.post.id;
					const a = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				N = Object(r.a)(Object(s.a)(C, v, (e, t) => e ? t[e] : void 0)),
				k = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? Object(o.g)(n) : void 0
				}, C, b, a.h, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return j(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, (e, t, n, s, r) => !e || n.includes(e) || s.includes(e) ? t || r[0] : e),
				P = Object(s.a)(f, x, S, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				T = Object(s.a)(f, x, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				w = Object(r.a)(Object(s.a)(k, v, (e, t) => e ? t[e] : void 0)),
				L = Object(r.a)(Object(s.a)(P, v, (e, t) => e ? t[e] : void 0)),
				A = Object(r.a)(Object(s.a)(T, v, (e, t) => e ? t[e] : void 0)),
				R = (Object(r.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, v, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => ({
					...t[n],
					preloadedPreviewUrl: e[n]
				})))), Object(s.a)(k, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				D = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? O(e, n) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function B(e, t) {
				const n = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const F = Object(s.a)(k, h, (e, t) => e && t.timestamps[e] || 0);
			var M;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(M || (M = {}));
			const U = Object(s.a)(k, v, m.b, (e, t, n) => {
					if (n) return M.INTRO;
					const s = e && t[e];
					if (!s) return M.UNAVAILABLE;
					const r = s.stream.state;
					return r === i.a.IS_LIVE || r === i.a.DISCONNECTED ? M.LIVE : r === i.a.ENDED && s.stream.vod_accessible ? M.VOD : M.UNAVAILABLE
				}),
				W = Object(s.a)(w, U, m.b, c.b, c.o, (e, t, n, s, r) => n ? s : e ? t === M.LIVE || t === M.VOD ? e.stream.hls_url : r : void 0),
				H = Object(s.a)(w, U, F, (e, t, n) => e ? t === M.LIVE ? e.broadcast_time : t === M.VOD && n < e.broadcast_time ? n : 0 : 0),
				V = (e, t) => {
					const n = p(e);
					return !!n && n[t] && n[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				a = Object(s.a)(i, o.n, (e, t) => t && !e.isIntroFinished),
				c = Object(s.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => !0,
				u = Object(s.a)(d.X, d.O, (e, t) => !(e || t)),
				m = e => {
					if (!u(e)) return;
					const t = Object(i.c)(e, {
						experimentEligibilitySelector: l,
						experimentName: o.Gd,
						expEventOverride: !1
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				p = e => {
					var t;
					const n = m(e);
					if (!n) return !1;
					let s = Object(c.r)(e),
						o = Object(c.d)(e);
					if ("undefined" != typeof window && !o) {
						const e = Object(a.a)("subreddit", window.location.href);
						(o = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (s = r.Nb.SUBREDDIT)
					}
					if (o && n) {
						const e = (null == o ? void 0 : o.toLocaleLowerCase()) === n;
						return s === r.Nb.SUBREDDIT && e
					}
					return !1
				},
				b = e => !!m(e) && Object(i.c)(e, {
					experimentEligibilitySelector: u,
					experimentName: o.Hd,
					expEventOverride: !1
				}) !== o.Id.Readonly
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const a = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Gb,
					experimentEligibilitySelector: i.e
				}), e => e === r.X.Enabled),
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Hb,
					experimentEligibilitySelector: i.e
				}), e => e === r.Y.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Ib,
					experimentEligibilitySelector: i.e
				}), e => e === r.Z.Enabled),
				l = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Jb,
					experimentEligibilitySelector: i.e
				}), e => e === r.ab.Enabled),
				u = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Lb,
					experimentEligibilitySelector: i.e
				}), e => e === r.cb.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Kb,
					experimentEligibilitySelector: i.e
				}), e => e === r.bb.Enabled)
		},
		"./src/reddit/selectors/experiments/loggedOutOneFeed.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/countrySites.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(s.a)(a.f, i.e, (e, t) => e && !t),
				d = e => (e => Object(o.c)(e, {
					experimentEligibilitySelector: c,
					experimentName: r.Ob
				}))(e) === r.gb.LoggedOutOneFeedDefault
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(s.a)(i.g, i.d, a.e, (e, t, n) => !e && !t && !n);

			function d(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: c,
					expEventOverride: t
				})
			}
			const l = d(r.Qb, !0),
				u = d(r.Qb, !1),
				m = d(r.Rb, !0),
				p = (d(r.Rb, !1), Object(s.a)(l, m, (e, t) => e === r.lc.Enabled || t === r.mc.Enabled))
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
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
				i = n("./src/reddit/selectors/experiments/presence.ts"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.q
					});
					return t === s.w.VoteCountOnly || t === s.w.CommentCountOnly || t === s.w.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.q
					});
					return t === s.w.VoteCountOnly || t === s.w.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.q
					});
					return t === s.w.CommentCountOnly || t === s.w.VoteAndCommentCount
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
					if (Object(a.c)(e) || !r || r.isSponsored || r.isScoreHidden || r.score >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: s.q
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.w.VoteCountOnly || l === s.w.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const r = e.posts.models[n];
					if (Object(a.c)(e) || !r || r.isSponsored || r.numComments >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: s.q
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.w.CommentCountOnly || l === s.w.VoteAndCommentCount
				},
				h = e => {
					if (Object(i.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Ub
					}) === s.nc.Enabled
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
					experimentName: s.we
				}) === s.ld
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/meta.ts");
			const i = e => Object(r.c)(e, {
				experimentEligibilitySelector: e => !Object(o.d)(e) && "US" === Object(o.b)(e),
				experimentName: s.Me
			}) === s.Te.Enabled
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(s.a)(i.g, i.d, a.e, (e, t, n) => !e && !t && !n);

			function d(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[r.ic.Bottom_cell_dismissible]: e,
						[r.ic.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.ic.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(r.tb, !0),
				u = d(r.ub, !0),
				m = d(r.vb, !0),
				p = d(r.tb, !1),
				b = d(r.ub, !1),
				h = d(r.vb, !1)
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "a", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/selectors/commentSelector.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(o.a)({
				features: {
					powerups: i.a
				}
			});
			const a = (e, t) => {
					let {
						subredditId: n
					} = t;
					var s;
					return n ? null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[n] : null
				},
				c = (e, t) => {
					let {
						subredditId: n
					} = t;
					var s, r;
					return n ? null === (r = null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[n]) || void 0 === r ? void 0 : r.flairsByType : null
				},
				d = (e, t) => {
					let {
						subredditId: n,
						userId: s
					} = t;
					var r, o;
					return n && s ? null === (o = null === (r = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === r ? void 0 : r[n]) || void 0 === o ? void 0 : o[s] : null
				},
				l = Object(s.a)(d, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				u = Object(s.a)([c, l], (e, t) => e && t ? e[t] : null),
				m = Object(s.a)(d, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(s.a)([c, m], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([c, d], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						r = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === s || e.type === r
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				h = Object(s.a)([a, d], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: s,
						flairsByType: r
					} = e, {
						supporterTypes: o,
						achievementTypes: i,
						preferredSupporterType: a,
						preferredAchievementType: c,
						pendingSupporterType: d,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(n, o, r, d || a),
						achievementFlairs: g(s, i, r, l || c)
					}
				}),
				f = Object(s.a)([d], e => !!e && e.isHidden),
				x = Object(s.a)([a, d, p], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				g = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				E = (e, t) => {
					let {
						commentId: n
					} = t;
					const s = Object(r.b)(e, {
							commentId: n
						}),
						o = null == s ? void 0 : s.subredditId,
						i = null == s ? void 0 : s.authorId;
					return !(!o || !i) && !!((e, t) => {
						let {
							subredditId: n,
							userId: s
						} = t;
						var r, o, i;
						return n && s ? null === (i = null === (o = null === (r = e.features.powerups) || void 0 === r ? void 0 : r.usersSupportedSubreddits) || void 0 === o ? void 0 : o[s]) || void 0 === i ? void 0 : i[n] : null
					})(e, {
						subredditId: o,
						userId: i
					})
				}
		},
		"./src/reddit/selectors/newPostPill.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/postLayout.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = (e, t) => Object(i.P)(e) && ((e, t) => {
				const {
					layout: n,
					sort: i,
					listingKey: a
				} = t, c = (Object(o.z)(e, {
					listingKey: a
				}) || []).length;
				return n === r.g.Large && i !== s.W.NEW && c >= 20
			})(e, t) ? 10 : -1
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			const s = e => e.user.notificationPrefs.api.getPreferences.loaded,
				r = e => e.user.notificationPrefs.api.getPreferences.pending,
				o = e => e.user.notificationPrefs.api.setPreferences.pending,
				i = e => e.user.notificationPrefs.preferences,
				a = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, s;
					const r = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						o = null === (n = null == r ? void 0 : r.rows) || void 0 === n ? void 0 : n.byId;
					return o && (null === (s = o[t]) || void 0 === s ? void 0 : s.isEnabled)
				},
				d = (e, t) => !t.some(t => c(e, t))
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			}));
			var s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/reddit/actions/notifications/utils.ts"),
				o = n("./node_modules/reselect/es/index.js");
			const i = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				a = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				c = Object(o.a)(a, e => !(!e || !e.hasNextPage)),
				d = Object(o.a)(a, e => e && e.endCursor),
				l = e => e.notificationsInbox && e.notificationsInbox.notifications,
				u = Object(o.a)(l, e => e.slice(0, 5)),
				m = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				p = Object(o.a)(l, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				b = Object(o.a)(l, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				}),
				h = Object(o.a)(r.a, e => e === s.c.NotificationsSupported)
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.searchQueryId
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.df
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.jf.SmIcon || t === s.jf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = Object(i.W)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = e => Object.keys(e.trending.models).reduce((t, n) => [...t, ...e.trending.models[n]], []),
				r = (e, t) => e.trending.models[t] || []
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const o = e => {
					if (i(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(r.a)(e)) || !!t
				},
				i = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Nb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${a}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(i, `${s.a.redditUrl}${c}`, n)
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
					this.queue.push(s), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(s)
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
		"./src/redditGQL/operations/BlockAwarder.json": function(e) {
			e.exports = JSON.parse('{"id":"9769ffbb7031"}')
		},
		"./src/redditGQL/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"36e10bfb5d5e"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/redditGQL/operations/UserSubredditsNotificationsLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"8404d1f9e84d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit.0c1568a2435a79081bfb.js.map