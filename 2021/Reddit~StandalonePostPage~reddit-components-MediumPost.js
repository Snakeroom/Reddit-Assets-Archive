// https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-MediumPost.fed8a13e6a9c642b650d.js
// Retrieved at 11/11/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~StandalonePostPage~reddit-components-MediumPost"], {
		"./src/lib/hooks/usePrevious.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js");

			function s(e) {
				const t = Object(n.useRef)();
				return Object(n.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				s = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(n.freeze)({
				modifiers: []
			});

			function c(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", i.modifiers)), t
			}

			function a(e) {
				const [t, r] = Object(s.useState)(null), [i, a] = Object(s.useState)(null), [d, l] = Object(s.useState)(null), [u, m] = Object(s.useState)(!1), p = Object(s.useCallback)(async () => m(!0), []), b = Object(s.useCallback)(() => m(!1), []), f = Object(s.useCallback)(() => m(!u), [u]), v = Object(s.useMemo)(() => {
					const t = c(e);
					return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: h,
					styles: g,
					update: O
				} = Object(o.a)(t, i, v);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...h.arrow
					},
					hide: b,
					popperProps: {
						ref: a,
						style: g.popper,
						...h.popper
					},
					show: p,
					target: {
						element: t,
						ref: r
					},
					toggle: f,
					visible: u,
					update: O
				}), [l, h, a, b, p, g, t, r, f, u, O])
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/lodash/every.js"),
				s = r.n(n);

			function o(e) {
				let t = null,
					r = null;
				return (...n) => (null !== t && n.length === t.length && s()(n, (e, r) => e === t[r]) || (t = n, r = e(...n)), r)
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = "CREATOR_STATS_PENDING",
				s = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const s = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(n.a)(s("awardSheetInfoRequested")),
				i = Object(n.a)(s("manageableAwardsRequested")),
				c = Object(n.a)(s("createCommunityAward")),
				a = Object(n.a)(s("createGlobalAward")),
				d = Object(n.a)(s("createModAward")),
				l = Object(n.a)(s("createAwardFailed")),
				u = Object(n.a)(s("createAwardSuccessful")),
				m = Object(n.a)(s("removeCommunityAward")),
				p = Object(n.a)(s("disableAwardinCommunity")),
				b = Object(n.a)(s("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return v
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "f", (function() {
				return y
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/postParentMessage/index.ts"),
				o = r("./src/reddit/helpers/isPost.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/selectors/gild.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/selectors/communityAwards.ts"),
				m = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/telemetry/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts");
			const v = Object(n.a)(f.L),
				h = Object(n.a)(f.f),
				g = () => async (e, t) => {
					const n = t();
					e(h()), Object(a.b)(a.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: s
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(s()(n))
				}, O = Object(n.a)(f.K), j = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (n, s) => {
					const c = s(),
						a = e ? Object(u.a)(c, e) : void 0;
					n(O({
						award: a && a.isEnabled ? a : void 0,
						thingId: r,
						correlationId: t
					})), n(Object(l.h)(i.a.GOLD_GILD_MODAL));
					const b = Object(p.G)(c, {
						thingId: r
					});
					let f = null;
					if (b) f = b.id;
					else if (Object(o.a)(r)) {
						const e = Object(m.H)(c, {
							postId: r
						});
						e && (f = e.belongsTo.id)
					}
					f && Object(d.a)(f, r)
				}, _ = Object(n.a)(f.e), x = Object(n.a)(f.J), w = () => async (e, t) => {
					const n = t(),
						o = Object(c.d)(n);
					if (Object(c.g)(n)) {
						const e = "close.gild";
						Object(s.a)({
							type: e
						})
					}
					e(_()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(o)(n)), Object(a.b)(a.a.GildingFlow)
				}, y = () => async () => {
					Object(s.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return b
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return j
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/config.ts"),
				c = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts");
			var u = r("./src/reddit/reducers/features/avatar/index.ts"),
				m = r("./src/reddit/selectors/avatar.ts"),
				p = r("./src/reddit/actions/users.ts");
			Object(n.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				f = Object(s.a)(b),
				v = "RANDOM_AVATAR_LOADED",
				h = Object(s.a)(v),
				g = (e, t, r) => async (n, s, {
					apiContext: o
				}) => {
					var u, b, f, v;
					const h = Object(m.b)(s()),
						g = await (async (e, t, r, n, s) => Object(a.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatar`,
							method: c.jb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": s || ""
							},
							data: {
								accessory_ids: t,
								styles: r,
								...n
							}
						}))(o(), e, t, r, h);
					if (!g.ok) throw new Error("User avatar failed to save");
					return n(Object(p.A)(g.body)), {
						accountIcon: null === (b = null === (u = g.body) || void 0 === u ? void 0 : u.avatar) || void 0 === b ? void 0 : b.headshot_image_url,
						fullBodySnoovatar: null === (v = null === (f = g.body) || void 0 === f ? void 0 : f.avatar) || void 0 === v ? void 0 : v.image_url
					}
				}, O = () => async (e, t, {
					apiContext: r
				}) => {
					try {
						const t = await (async e => Object(a.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/account`,
							method: c.jb.GET
						}))(r());
						t.ok && e(f(t.body))
					} catch (n) {
						o.c.captureException(n)
					}
				}, j = () => async (e, t, {
					apiContext: r
				}) => {
					try {
						const t = await (async e => Object(a.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: c.jb.GET
						}))(r());
						t.ok && e(h(t.body))
					} catch (n) {
						o.c.captureException(n)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/reddit/actions/login.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/users.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				a = r("./src/reddit/selectors/user.ts"),
				d = r("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const r = t();
				Object(d.a)(Object(c.j)(r)), e(Object(o.t)({
					forceFetch: !0
				})), await e(Object(s.g)(i.a.SNOOVATAR_MODAL))
			};

			function u(e = {}) {
				return async (t, r) => {
					const {
						clickSource: o,
						share: l,
						source: u
					} = e, m = r();
					o && Object(d.a)(Object(c.e)(o)(m)), Object(a.K)(m) ? await t(Object(s.h)(i.a.SNOOVATAR_MODAL, {
						share: l,
						source: u
					})) : await t(Object(n.i)())
				}
			}
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, r) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/hooks/usePrevious.ts"),
				i = r("./src/realtime/GQLSubscription/async.tsx"),
				c = r("./src/reddit/hooks/useIntersectionObserver.ts");
			const a = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var d = r("./src/reddit/components/CountAnimation/index.m.less"),
				l = r.n(d);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: r,
					incrementDelta: d,
					initialDelay: u,
					initialDisplayCount: p,
					inViewPortAnimatingCallbackOnce: b,
					isLoadTestOnly: f,
					onDataCB: v,
					postId: h,
					queryKey: g,
					queryVariables: O,
					shouldDisjointAnimation: j,
					subsequentRecurringDelay: _
				} = e, [x, w] = Object(n.useState)(!1), [y, C] = Object(n.useState)(!0), [k, E] = Object(n.useState)([]), [A, S] = Object(n.useState)(a(p).reverse()), P = Object(n.useRef)(!1), I = Object(n.useRef)(null), T = Object(n.useRef)(e => {}), N = Object(n.useRef)();
				T.current = Object(n.useCallback)(e => {
					let r = e || d();
					const n = [...A].reverse().join("");
					let s = parseInt(n) + r;
					s > t && (r = t - parseInt(n), s = t);
					const o = a(s).reverse();
					w(!1), E(A), S(o), C(!1), N.current = setTimeout(() => {
						w(!0)
					}, 0)
				}, [t, d, A]);
				const R = Object(n.useRef)(() => {}),
					F = Object(n.useRef)(),
					M = Object(n.useRef)();
				R.current = Object(n.useCallback)(() => {
					M.current = setTimeout(() => {
						T.current();
						const e = [...k].reverse().join("");
						parseInt(e) < t && R.current()
					}, _())
				}, [t, _, k]);
				const D = Object(n.useRef)(0),
					G = Object(n.useRef)(!1),
					V = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: r
							} = e, n = 1 !== r;
							t ? (G.current = !0, P.current || (P.current = !0, F.current = setTimeout(() => {
								T.current(), R.current()
							}, u())), D.current > 0 && (T.current(D.current), D.current = 0)) : n && (G.current = !1)
						})
					}, []);
				Object(c.a)(I, V);
				const [B, U] = Object(n.useState)(!1), L = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: r
						} = e, n = 1 !== r;
						t ? U(!0) : n && U(!1)
					})
				}, []), q = Object(n.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(c.a)(I, L, q.current);
				const z = Object(o.a)(t);
				Object(n.useEffect)(() => {
					if (void 0 !== z && z !== t) {
						const e = t - z;
						G.current ? (T.current(e), b && b()) : D.current += e
					}
					return () => {
						clearTimeout(F.current), clearTimeout(M.current), clearTimeout(N.current)
					}
				}, [t]);
				const K = Object(n.useCallback)(() => C(!0), [C]),
					H = 0 === k.length,
					Y = y || H,
					W = Object(n.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, r));
				return s.a.createElement(s.a.Fragment, null, !f && s.a.createElement("div", {
					className: l.a.countAnimation
				}, A.map((e, t) => {
					const r = ((e, t) => {
						let r = Math.abs(e);
						const n = Math.abs(t),
							s = [r];
						if (r === n) return s;
						let o = !0;
						for (; o;) ++r > 9 && (r = 0), s.push(r), r === n && (o = !1);
						return s
					})(k[t] || 0, e);
					return s.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: K,
						style: x && k.length > 0 && !y ? {
							transform: `translateY(-${j&&r.length>1?100:100*(r.length-1)}%)`,
							transitionDuration: `${(j?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, Y ? s.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : r.map((e, t) => {
						const n = 0 === t || t === r.length - 1;
						if (!j || j && n) return s.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), s.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...A].reverse().join(""))), s.a.createElement("span", {
					ref: I
				}), B && s.a.createElement(i.a, {
					variables: O,
					onData: f ? m : v,
					queryKey: g,
					uniqueKey: W.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./src/redditGQL/types.ts");
			const s = 16327836e5;
			var o;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available"
			}(o || (o = {}));
			const i = e => e > s,
				c = (e, t) => {
					if (!i(e.created)) return o.NotAvailable;
					if (!t) return o.NotAvailableYet;
					const {
						viewCountTotals: r,
						shareCountTotals: s
					} = t;
					return (null == r ? void 0 : r.status) === n.c.Unavailable && (null == s ? void 0 : s.status) === n.c.Unavailable ? o.NotAvailableYet : !(null == r ? void 0 : r.totalCount) || r.totalCount < 10 ? o.NotAvailableYet : o.Available
				}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, r) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/noop.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				c = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = r("./src/reddit/controls/TextButton/index.tsx"),
				d = r("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = r.n(d);
			t.a = e => i.a.createElement(c.i, {
				className: l.a.modalHeader
			}, i.a.createElement(c.q, null, e.title), i.a.createElement(a.a, {
				onClick: e.onClosePressed || s.a
			}, i.a.createElement(c.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, r) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				o = r.n(s);
			const i = n.a.div("Wrapper", o.a);
			t.a = i
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, r) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/Flair/index.tsx"),
				a = r("./src/reddit/components/FlairPreview/index.m.less"),
				d = r.n(a);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				m = i.a.wrapped(c.b, "FlairComponent", d.a);
			t.a = e => e.flair ? o.a.createElement(u, null, o.a.createElement(l, null, n.fbt._("{placeholder}", [n.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), o.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : o.a.createElement(u, null, n.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, r) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var n = r("./node_modules/lodash/once.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				c = r("./src/higherOrderComponents/makeAsync.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/lib/loadWithRetries/index.ts"),
				u = r("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = r.n(u);
			const p = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(a.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = s()((e = p) => Object(c.a)({
					getComponent: () => Object(l.a)(() => Promise.all([r.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), r.e("FlairEdit")]).then(r.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/memoizeByReference/index.ts"),
				l = r("./src/reddit/featureFlags/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				m = r("./src/reddit/helpers/trackers/userFlair.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				b = r("./src/reddit/selectors/moderatorPermissions.ts"),
				f = r("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				v = r("./src/reddit/components/Flair/index.tsx"),
				h = r("./src/reddit/controls/RadioInput/index.tsx"),
				g = r("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				O = r("./src/reddit/icons/svgs/Pencil/index.tsx"),
				j = r("./src/reddit/icons/svgs/Search/index.tsx"),
				_ = r("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				x = r.n(_);
			class w extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: r
					} = this.props, {
						searchQuery: s
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(s)), c = !!r && i.some(e => e.id === r);
					return o.a.createElement("div", {
						className: x.a.container
					}, o.a.createElement("div", {
						className: x.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: x.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: s
					}), o.a.createElement(j.a, {
						className: x.a.searchIcon
					})), o.a.createElement(h.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: r
					}, i.map((e, t) => {
						const n = Object(u.c)(e),
							s = r === e.id || !c && 0 === t;
						return o.a.createElement(g.a, {
							className: x.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: s ? 0 : -1,
							value: e.id
						}, o.a.createElement(v.b, {
							className: x.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(O.a, {
							className: x.a.pencil
						}))
					})))
				}
			}
			var y = r("./src/reddit/components/FlairSearch/index.m.less"),
				C = r.n(y);
			const k = Object(d.a)(e => e && Object(u.c)(e)),
				E = Object(c.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				A = Object(i.b)(E);
			t.a = A(e => {
				const {
					flairTemplateType: t,
					flair: r,
					className: s,
					onChange: i,
					subredditId: c,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: v
				} = e, h = Object(p.a)(), g = d && r && r.templateId && d[r.templateId] || void 0, O = Object(f.a)(), j = r || k(g);
				return o.a.createElement("div", {
					className: Object(a.a)(s, C.a.container)
				}, d && l && o.a.createElement(w, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								r = Object(u.c)(t);
							h(Object(m.b)({
								userFlair: t
							})), i(r)
						}
					},
					selectedTemplateId: g ? g.id : "",
					templateIds: l,
					templates: d
				}), j && g && (v || g.textEditable) && o.a.createElement("div", {
					className: C.a.flairEditSection
				}, o.a.createElement("div", {
					className: C.a.editLabel
				}, n.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && o.a.createElement("div", {
					className: C.a.restrictionHintText
				}, Object(u.k)(g)), o.a.createElement(O, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: j,
					flairTemplate: g,
					flairTemplateType: t,
					isFlairModOnly: g.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let r = e;
						t && (r = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), i(r)
					},
					subredditId: c
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				c = r.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = s.a.memo((function({
				visible: e,
				...t
			}) {
				const [r, i] = Object(n.useState)(e);
				return Object(n.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, i(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), i(!1)
					}
				}, [e]), e ? s.a.createElement("div", a({
					className: Object(o.a)(c.a.tooltip, t.className, {
						[c.a.visible]: r
					})
				}, t.popperProps), t.children, r && s.a.createElement("div", a({
					className: c.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, r) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/components/CreatorStats/helpers.ts"),
				l = r("./src/reddit/selectors/creatorStats.ts"),
				u = r("./src/reddit/selectors/experiments/creatorStats.ts"),
				m = r("./src/reddit/components/PostContent/viewCount.m.less"),
				p = r.n(m);
			t.a = ({
				className: e,
				post: t,
				showViewCount: r
			}) => {
				const {
					upvotePercentString: s,
					viewCountString: m
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						r = Object(a.b)(e.viewCount);
					return {
						upvotePercentString: n.fbt._("{percent upvoted}% Upvoted", [n.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: n.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [n.fbt._plural(e.viewCount, "number of views", r)], {
							hk: "rP01m"
						})
					}
				})(t), b = r && !!t.viewCount, f = Object(i.e)(e => Object(u.a)(e, t.id)), v = Object(i.e)(e => Object(l.a)(e, t.id)), h = Object(i.e)(e => Object(l.b)(e, t.id)), g = Object(d.c)(t, h), O = f && v && g === d.b.Available;
				return o.a.createElement("div", {
					className: Object(c.a)(p.a.viewCounts, e)
				}, b && o.a.createElement("span", null, m), b && !!t.upvoteRatio && o.a.createElement("span", {
					className: p.a.dotSpacer
				}), !!t.upvoteRatio && !O && o.a.createElement("span", null, s))
			}
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, r) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./node_modules/lodash/isEqual.js"),
				s = r.n(n),
				o = r("./src/reddit/constants/flair.ts"),
				i = r("./src/reddit/helpers/flair.ts"),
				c = r("./src/reddit/models/Flair/index.ts");
			const a = e => (e || []).find(e => e.type === c.f.Text || e.type === c.f.Image || e.type === c.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, r) => {
				if (r && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const n = e && t.templateId ? e[t.templateId] : void 0;
				if (!n) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const c = Object(i.g)(t).length;
				return 0 === c ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : c > o.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(i.n)(t) && !Object(i.r)(n) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : s()(r, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				o = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => o[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, r) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return x
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/reddit/constants/elementClassNames.ts"),
				u = r("./src/reddit/controls/Score/index.tsx"),
				m = r("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = r("./src/reddit/models/Vote/index.ts"),
				f = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/components/VerticalVotes/index.m.less"),
				g = r.n(h);
			const O = Object(c.c)({
					isNightMode: v.X,
					isAnimatingUpvotePostId: f.k
				}),
				j = Object(i.b)(O),
				_ = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				x = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class w extends o.a.Component {
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
							isCountAnimShadowTestEnabled: r,
							isNightMode: s,
							isAnimatingUpvotePostId: i,
							isReadingIndicatorsExperimentEnabled: c,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: v,
							model: h,
							postId: O
						} = e,
						j = _(e),
						w = x(e),
						y = h.voteState,
						C = i === O;
					return o.a.createElement("div", {
						className: Object(a.a)(g.a.votesContainer, e.className),
						id: `vote-arrows-${h.id}`,
						ref: v
					}, j ? o.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": y === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: s,
						onClick: this.onUpvote,
						voteState: y
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": y === b.a.upvoted,
						className: Object(a.a)(l.n, f, {
							[g.a.bounceUp]: C
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: y
					})), !e.compact && p && o.a.createElement(u.a, {
						className: Object(a.a)(g.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: y,
						isReadingIndicatorsExperimentEnabled: c,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!r,
						postId: O
					}), w ? o.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": y === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: s,
						onClick: this.onDownvote,
						voteState: y
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": y === b.a.downvoted,
						className: Object(a.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: y
					})))
				}
			}
			const y = Object(d.a)(j(w));
			t.a = y
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/subscription/index.ts"),
				i = r("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				c = r("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(s.c)({
				isInJoinOptimizationsExperiment: e => Object(i.a)(e) || Object(i.c)(e) || Object(i.d)(e) || Object(i.g)(e),
				userIsSubscriber: c.cb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
			}))
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			const n = "reddit",
				s = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, r) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/constants/keycodes.ts"),
				c = r("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				a = r("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = r("./src/reddit/layout/row/Inline/index.tsx"),
				l = r("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = r.n(l);
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== i.b.Enter && e.key !== i.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : s.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(o.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? s.a.createElement(a.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : s.a.createElement(c.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/constants/keycodes.ts");
			class i extends s.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: r
						} = this.props;
						t || this.state.value !== e && (r(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return s.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: r
						} = this.props, {
							value: n
						} = this.state;
						if (t) return;
						const s = e.key === o.b.ArrowUp,
							i = e.key === o.b.ArrowDown;
						if (s || i) {
							const t = this.getValues();
							if (!t.length) return;
							const o = n ? t.indexOf(n) : 0,
								i = t[((s ? o - 1 : o + 1) + t.length) % t.length];
							r(i), this.setState({
								value: i
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return s.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, s.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), s.a.Children.map(e.children, (r, n) => {
						const o = 0 === n,
							i = r.props.value === t,
							c = null !== t ? i ? 0 : -1 : o ? 0 : -1;
						return s.a.cloneElement(r, {
							disabled: e.disabled,
							onClick: e => this.handleClick(r.props.value),
							selected: i,
							tabIndex: c
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, r) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./node_modules/react/index.js"),
				a = r.n(c),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/reddit/actions/post.ts"),
				u = r("./src/reddit/components/CountAnimation/index.tsx"),
				m = r("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = r("./src/reddit/components/PostContent/ViewCount.tsx"),
				b = r("./src/reddit/constants/colors.ts"),
				f = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				v = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = r("./src/reddit/helpers/trackers/post.ts"),
				g = r("./src/reddit/hooks/useInfoTextTooltip.ts"),
				O = r("./src/reddit/hooks/useTracking.ts"),
				j = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = r("./src/reddit/models/Vote/index.ts"),
				x = r("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				w = r("./src/reddit/selectors/meta.ts"),
				y = r("./src/reddit/selectors/posts.ts"),
				C = r("./node_modules/reselect/es/index.js"),
				k = r("./src/reddit/controls/Score/index.m.less"),
				E = r.n(k);
			const A = {
					placement: "right"
				},
				S = e => e.voteState === _.a.downvoted ? Object(j.a)(e).voteText.downvote : e.voteState === _.a.upvoted ? Object(j.a)(e).voteText.upvote : Object(v.a)(Object(f.a)(e)),
				P = Object(C.c)({
					locale: e => Object(w.i)(e),
					post: (e, {
						isReadingIndicatorsExperimentEnabled: t,
						postId: r
					}) => {
						if (t && r) return Object(y.H)(e, {
							postId: r
						})
					}
				}),
				I = () => 0,
				T = Object(d.b)(P),
				N = Object(o.a)(e => {
					const t = {
							color: e.light ? b.b.lightboxHeaderText : S(e)
						},
						{
							score: r,
							postId: o = "",
							locale: f,
							isVoteCountAnimation: v,
							isCountAnimShadowTestEnabled: j,
							isReadingIndicatorsExperimentEnabled: _,
							post: w
						} = e,
						y = Object(d.d)(),
						C = null == f ? void 0 : f.startsWith("en"),
						k = e.isScoreHidden ? C ? n.fbt._("Vote", null, {
							hk: "2TMson"
						}) : a.a.createElement("span", {
							className: E.a.dot
						}, "•") : Object(i.b)(r),
						P = Object(c.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && y(Object(l.I)({
								postId: o,
								delta: t
							}))
						}, [y, o]),
						T = Object(c.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						N = Object(O.a)(),
						R = Object(c.useCallback)(() => {
							N(Object(h.s)(o))
						}, [N, o]),
						F = !e.isScoreHidden && v && r < x.a,
						M = Object(g.a)(A);
					return a.a.createElement("div", {
						className: Object(s.a)(E.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: _ ? M.show : void 0,
						onMouseLeave: _ ? M.hide : void 0,
						ref: _ ? M.target.ref : void 0
					}, (F || j) && a.a.createElement(a.a.Fragment, null, a.a.createElement(u.b, {
						initialDisplayCount: r,
						countToUpperBound: r,
						initialDelay: I,
						subsequentRecurringDelay: I,
						incrementDelta: I,
						shouldDisjointAnimation: !0,
						inViewPortAnimatingCallbackOnce: R,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: T.current,
						onDataCB: P,
						isLoadTestOnly: j && !F
					})), !F && k, _ && w && a.a.createElement(m.a, M, a.a.createElement(p.a, {
						className: E.a.viewCount,
						post: w,
						showViewCount: !1
					})))
				});
			t.a = T(N)
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return h
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/helpers/trackers/gild.ts");
			const c = e => ({
					...s.defaults(e),
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				a = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(i.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...c(e),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...c(t),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? a(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => n => ({
					...c(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, n) => s => ({
					...c(s),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "image",
					actionInfo: n ? {
						reason: n
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, r) => n => ({
					...c(n),
					source: "create_award",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: r ? a(r) : null
				}),
				b = (e, t, r) => n => ({
					...c(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? a(r) : null
				}),
				f = (e, t, r) => n => ({
					...c(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: a(e),
					profile: s.profileById(n, t),
					subreddit: s.subredditById(n, t)
				}),
				v = (e, t) => f(e, t, "disable_in_community"),
				h = (e, t) => f(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), r.d(t, "clickGildEvent", (function() {
				return m
			})), r.d(t, "clickRpanGiveAward", (function() {
				return p
			})), r.d(t, "clickAddAward", (function() {
				return b
			})), r.d(t, "clickHideAward", (function() {
				return f
			})), r.d(t, "clickConfirmHideAward", (function() {
				return v
			})), r.d(t, "clickCancelHideAward", (function() {
				return h
			})), r.d(t, "clickAwardReportFlow", (function() {
				return O
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return j
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return _
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return x
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return w
			})), r.d(t, "clickReportAward", (function() {
				return y
			})), r.d(t, "clickCancelReportAward", (function() {
				return C
			})), r.d(t, "clickConfirmReportAward", (function() {
				return k
			})), r.d(t, "viewGildModalEvent", (function() {
				return E
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return A
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return S
			})), r.d(t, "clickMessageInputEvent", (function() {
				return P
			})), r.d(t, "typeMessageInputEvent", (function() {
				return I
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return T
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return N
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return R
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return F
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return M
			})), r.d(t, "clickNextButtonEvent", (function() {
				return D
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return G
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return V
			})), r.d(t, "clickFilterEvent", (function() {
				return B
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return U
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return L
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/models/GoldPurchase.ts"),
				i = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/helpers/isComment.ts"),
				a = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...s.defaults(e),
					comment: t ? s.comment(e, t) : void 0,
					correlationId: Object(a.b)(e) || Object(i.d)(i.a.GildingFlow, !1),
					post: t ? s.post(e, t) : void 0,
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: s.feed(t)
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				b = e => t => ({
					...u(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: s.feed(t)
				}),
				f = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				v = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, r) => n => ({
					...u(n, r),
					source: Object(c.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				O = g("award_hovercard_report"),
				j = g("cancel_award_hovercard_report"),
				_ = g("flag_award"),
				x = g("cancel_flag_award"),
				w = g("confirm_flag_award"),
				y = g("report_community_award"),
				C = g("cancel_report_community_award"),
				k = g("confirm_report_community_award"),
				E = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				A = (e, t, r) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				S = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				I = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				T = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				R = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				F = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				D = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				G = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				V = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: n,
					thingId: s
				}) => o => ({
					...u(o, s),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(c.a)(s) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: n,
						...l(e)
					}
				}),
				B = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				U = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				L = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return f
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "i", (function() {
				return w
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/selectors/gold/giveAwards.ts"),
				i = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				a = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/isComment.ts"),
				b = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const f = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, f = !!r, v = o.b(e), h = v ? Object(u.getAwardTypeFromAward)(v) : null, g = f ? h : c.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, O = r ? Object(p.a)(r) ? "comment" : "post" : void 0, j = l || c.t(e), _ = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === j)[0], x = t.offerContext || (v && 0 === v.coinPrice ? s.a.StorefrontFreeAward : Object(s.d)(_, f)), w = _ ? Math.round(1e4 * (_.baselinePennies - _.pennies) / _.baselinePennies) / 100 : 0, y = _ ? Math.round(1e4 * (_.coins - _.baselineCoins) / _.coins) / 100 : 0, C = _ ? _.baselinePennies !== _.pennies ? `${w}_percent_price` : _.baselineCoins !== _.coins ? `${y}_percent_bonus` : void 0 : void 0, k = g === d.GoldPurchaseType.Premium ? n.yb : _ ? _.pennies : void 0;
					return {
						...a.defaults(e),
						comment: r ? a.comment(e, r) : null,
						correlationId: c.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: r ? a.post(e, r) : null,
						screen: a.screen(e),
						subreddit: r ? a.subreddit(e) : null,
						goldPurchase: {
							...v ? Object(b.a)(v) : null,
							type: g,
							gildedContent: f,
							contentType: O,
							numberCoins: _ ? _.coins : void 0,
							offerContext: x,
							offerType: C
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: k
						},
						purchase: {
							priceMicros: k
						}
					}
				},
				v = (e, t, r) => n => ({
					...f(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				h = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				O = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				j = (e, t) => r => ({
					...f(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				_ = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				x = (e, t, r) => n => {
					const s = f(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...s.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...s.goldPurchase,
							source: e ? d.GiveGold : c.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				w = e => t => {
					var r;
					const n = f(t, {
						thingId: e
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...n.payment,
							method: (null === (r = t.platform.currentPage) || void 0 === r ? void 0 : r.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/telemetry/index.ts"),
				o = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = r("./src/reddit/selectors/platform.ts"),
				c = r("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					profile: c.profile(e),
					screen: c.screen(e),
					subreddit: c.subreddit(e)
				}),
				d = (e, t, r) => n => ({
					source: Object(i.i)(n) || r ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...a(n),
					post: c.post(n, e)
				}),
				l = (e, t, r, n) => s => {
					const i = r ? c.comment(s, r) : null,
						{
							sortToUse: a
						} = Object(o.a)(s, e);
					return {
						...d(e, t, n)(s),
						comment: i,
						listing: {
							sort: a
						}
					}
				},
				u = (e, t) => r => {
					const n = c.currentPost(r);
					return n ? d(n.id, e, t)(r) : {
						source: Object(i.i)(r) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...a(r)
					}
				},
				m = (e, t) => r => Object(s.a)({
					...d(e, t)(r),
					...c.defaults(r)
				}),
				p = e => t => ({
					source: "id_card",
					action: n.c.CLICK,
					noun: e,
					...a(t),
					post: c.currentPost(t),
					userSubreddit: c.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return i
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "l", (function() {
				return h
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(s.screen)(e),
					profile: Object(s.profile)(e),
					subreddit: Object(s.subreddit)(e),
					userSubreddit: Object(s.userSubreddit)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				c = (e, t) => r => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					...o(r)
				}),
				a = (e, t) => r => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					comment: Object(s.comment)(r, t),
					...o(r)
				}),
				d = (e, t) => r => ({
					source: "comment",
					action: n.c.UNDO,
					noun: e,
					post: Object(s.post)(r, t),
					comment: Object(s.comment)(r, t),
					...o(r)
				}),
				l = (e, t) => r => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					comment: Object(s.comment)(r, t),
					...o(r)
				}),
				u = (e, t) => r => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					comment: Object(s.comment)(r, t),
					...o(r)
				}),
				m = (e, t) => r => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					comment: Object(s.comment)(r, t),
					...o(r)
				}),
				p = (e, t) => r => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.comment)(r, t),
					post: Object(s.post)(r, t),
					...o(r)
				}),
				b = (e, t) => r => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					...o(r)
				}),
				f = (e, t) => r => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					subreddit: Object(s.subredditByPostOrCommentId)(r, t)
				}),
				v = (e, t) => r => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.comment)(r, t),
					post: Object(s.post)(r, t),
					subreddit: Object(s.subredditByPostOrCommentId)(r, t)
				}),
				h = (e, t, r, n) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(s.post)(o, r),
					subreddit: Object(s.subredditByPostOrCommentId)(o, r),
					actionInfo: {
						reason: n
					},
					...e && {
						comment: Object(s.comment)(o, r)
					}
				})
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "k", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "n", (function() {
				return w
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "m", (function() {
				return E
			}));
			var n = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/avatarMarketing.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const c = {
					goldPurchase: {
						offerContext: n.a.AvatarNewGear
					}
				},
				a = e => t => {
					const r = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.defaults(t)
					};
					return Object(s.a)(t) && Object.assign(r, c), r
				},
				d = (e, t) => r => {
					const {
						id: n
					} = Object(i.nb)(r, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...o.defaults(r),
						snoovatar: {
							userGenerated: n
						}
					}
				},
				l = e => ({
					...o.defaults(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				u = e => ({
					...o.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				m = e => ({
					...o.defaults(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.defaults(e),
					...c
				}),
				b = e => t => r => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...o.defaults(r),
					snoovatar: o.snoovatarActiveForBuilderEvent(r),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				f = b("view"),
				v = b("click"),
				h = b("dismiss"),
				g = (e, t, r) => () => n => ({
					source: e,
					action: t,
					noun: r,
					...o.defaults(n),
					snoovatar: o.snoovatarActiveForBuilderEvent(n)
				}),
				O = g("anniversary_achievement", "view", "anniversary_achievement"),
				j = g("anniversary_achievement", "click", "close"),
				_ = g("anniversary_achievement", "click", "equip"),
				x = e => () => t => ({
					...o.defaults(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				w = x("view"),
				y = x("click"),
				C = (e, t, r) => n => ({
					source: e,
					action: t,
					noun: r,
					...o.defaults(n),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: o.snoovatarActiveForBuilderEvent(n)
				}),
				k = e => C("onboarding", "click", e),
				E = () => C("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return d
			}));
			var n = r("./src/reddit/helpers/flair.ts"),
				s = r("./src/reddit/selectors/gold/powerups/index.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...o.defaults(e)
				}),
				c = e => t => {
					const r = o.subreddit(t),
						i = Object(s.w)(t, {
							subredditId: null == r ? void 0 : r.id
						}),
						{
							userFlair: c,
							achievementFlair: a,
							supporterFlair: d
						} = e,
						l = a || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...o.defaults(t),
						subreddit: r,
						userFlair: {
							id: null == c ? void 0 : c.id,
							title: c ? Object(n.g)(c) : void 0,
							isActive: !!c || void 0,
							achievementFlairId: null == a ? void 0 : a.type,
							achievementFlairTitle: null == a ? void 0 : a.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: i
						}
					}
				},
				a = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...o.defaults(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: o.subreddit(t),
					...o.defaults(t)
				})
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				s = r("./node_modules/react/index.js"),
				o = r("./src/lib/hooks/useTooltip.ts");
			const i = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function c(e) {
				const t = Object(s.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, i))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				c = r.n(i);
			const a = r("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", c.a);
			t.a = a
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.m.less"),
				o = r.n(s);
			t.a = n.a.div("inlineRow", o.a)
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			}));
			var n, s = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(n || (n = {}));
			const o = {
				[n.Powerups]: () => s.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[n.Premium]: () => s.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var i, c;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(i || (i = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(c || (c = {}));
			const a = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === r,
					s = "new_purchaser" === r,
					o = "repeat_purchaser" === r;
				return t ? c.GildFlow : n ? c.LowCoinBalance : s ? c.NewUserTargetedOffer : o ? c.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, r) {
			"use strict";
			var n, s, o = r("./node_modules/redux/es/redux.js"),
				i = r("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(n || (n = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(s || (s = {}));
			const c = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [n.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var a = (e = c, t) => {
				switch (t.type) {
					case i.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const d = {
					marketingEvent: {
						active: !1,
						assetUrls: null
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
					}
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_promo_archived",
				p = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const r = e.split(":");
							if (!r.length && r.length < 3) return null;
							try {
								t[r[1]] = JSON.parse(r[2])
							} catch {
								t[r[1]] = r[2]
							}
						}
					}), t
				};
			var b = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				f = r("./src/reddit/actions/modal.ts"),
				v = r("./src/reddit/constants/modals.ts");
			var h = (e = null, t) => {
				var r;
				switch (t.type) {
					case b.o:
						const {
							avatarMarketingEvents: n
						} = t.payload;
						return n ? function(e) {
							if (!e) return d;
							const t = d;
							return e.forEach(e => {
								const {
									startsAt: r,
									endsAt: n,
									webAssetUrls: s,
									tags: o
								} = e, i = r && new Date(r) <= new Date, c = !!n && new Date(n) < new Date, a = !!i && !c, d = o.includes(m);
								if (o && o.includes(l) && !d) {
									const {
										text: r,
										id: n
									} = e, i = s || null, c = p(o);
									t && (t.quickCreateV1 = {
										...c,
										id: n,
										text: r,
										active: a && !!i,
										webAssetUrls: i
									})
								}
								if (o && o.includes(u) && !d) {
									const e = s || null;
									t && (t.marketingEvent = {
										active: a && !!e,
										assetUrls: e
									})
								}
							}), t
						}(n) : d;
					case f.c:
						return (null === (r = t.payload) || void 0 === r ? void 0 : r.id) === v.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var g = (e = null, t) => {
				switch (t.type) {
					case i.a: {
						const {
							image: e,
							accessory_ids: r
						} = t.payload;
						return {
							image: e,
							accessoryIds: r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				marketing: h,
				avatarUser: a,
				randomAvatar: g
			})
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/creatorStats/constants.ts");
			const o = {};
			var i = (e = o, t) => {
				switch (t.type) {
					case s.a:
						const {
							postStats: r
						} = t.payload;
						return {
							...e, ...r
						};
					default:
						return e
				}
			};
			const c = {};
			var a = (e = c, t) => {
				switch (t.type) {
					case s.a:
						const {
							subredditKarma: r
						} = t.payload;
						return {
							...e, ...r
						};
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				postStats: i,
				subredditKarma: a
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			const n = (e, {
					post: t
				}) => {
					const r = t.belongsTo.id;
					if (!r) return null;
					const n = e.authorFlair.models[r];
					if (!n) return null;
					const s = t.author;
					return s && n[s] || null
				},
				s = (e, {
					subredditId: t
				}) => {
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!t) return null;
					const n = e.authorFlair.models[t];
					return n ? n[r] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/avatar/index.ts");
			Object(n.a)({
				features: {
					avatar: s.a
				}
			});
			const o = e => {
					var t, r;
					return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.avatarUser
				},
				i = e => {
					var t, r;
					return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.avatarUser.csrf_token
				},
				c = e => {
					var t, r;
					return (null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/avatar/index.ts"),
				i = r("./src/reddit/selectors/experiments/econ/index.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const c = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing)
				},
				a = Object(n.a)(i.d, e => {
					var t, r, n;
					const s = null === (n = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing) || void 0 === n ? void 0 : n.marketingEvent;
					return (null == s ? void 0 : s.active) ? (null == s ? void 0 : s.assetUrls) && (null == s ? void 0 : s.assetUrls[0]) : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/creatorStats/index.ts"),
				o = r("./src/reddit/selectors/moderatorPermissions.ts"),
				i = r("./src/reddit/selectors/posts.ts"),
				c = r("./src/reddit/selectors/user.ts");
			Object(n.a)({
				features: {
					creatorStats: s.a
				}
			});
			const a = (e, t) => {
					var r, n;
					return null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.creatorStats) || void 0 === n ? void 0 : n.postStats[t]
				},
				d = (e, t) => {
					var r, n, s;
					const o = null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.creatorStats) || void 0 === n ? void 0 : n.subredditKarma[t]) || void 0 === s ? void 0 : s.karma;
					if (o) return o.fromComments + o.fromPosts
				},
				l = (e, t) => {
					const r = Object(i.H)(e, {
						postId: t
					});
					return !(!r || r.isSponsored) && (Object(c.qb)(e, {
						postId: t
					}) || !!Object(o.l)(e, {
						postId: t
					}))
				}
		},
		"./src/reddit/selectors/experiments/creatorStats.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/moderatorPermissions.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: e => ((e, t) => Object(i.qb)(e, {
						postId: t
					}) || !!Object(o.l)(e, {
						postId: t
					}) || Object(i.H)(e))(e, t),
					experimentName: n.M
				}) === n.Zc
			}
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "f", (function() {
				return p
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts");
			const c = Object(n.a)(e => Object(o.c)(e, {
					experimentName: s.zb,
					experimentEligibilitySelector: i.e
				}), e => e === s.V.Enabled),
				a = Object(n.a)(e => Object(o.c)(e, {
					experimentName: s.Ab,
					experimentEligibilitySelector: i.e
				}), e => e === s.W.Enabled),
				d = Object(n.a)(e => Object(o.c)(e, {
					experimentName: s.Cb,
					experimentEligibilitySelector: i.e
				}), e => e === s.Y.Enabled),
				l = Object(n.a)(e => Object(o.c)(e, {
					experimentName: s.Db,
					experimentEligibilitySelector: i.e
				}), e => e === s.Z.Enabled),
				u = Object(n.a)(e => Object(o.c)(e, {
					experimentName: s.Hb,
					experimentEligibilitySelector: i.e
				}), e => e === s.db.Enabled),
				m = (Object(n.a)(e => Object(o.c)(e, {
					experimentName: s.Bb,
					experimentEligibilitySelector: i.e
				}), e => e === s.X.Enabled), Object(n.a)(e => Object(o.c)(e, {
					experimentName: s.Eb,
					experimentEligibilitySelector: i.e
				}), e => e === s.ab.Enabled)),
				p = Object(n.a)(e => Object(o.c)(e, {
					experimentName: s.Fb,
					experimentEligibilitySelector: i.e
				}), e => e === s.bb.Enabled);
			Object(n.a)(e => Object(o.c)(e, {
				experimentName: s.Ib,
				experimentEligibilitySelector: i.e
			}), e => e === s.eb.Enabled), Object(n.a)(e => Object(o.c)(e, {
				experimentName: s.Gb,
				experimentEligibilitySelector: i.e
			}), e => e === s.cb.Enabled)
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "e", (function() {
				return f
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/index.ts"),
				i = r("./src/reddit/selectors/experiments/presence.ts"),
				c = r("./src/reddit/selectors/userPrefs.ts");
			const a = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.n
					});
					return t === n.t.VoteCountOnly || t === n.t.CommentCountOnly || t === n.t.VoteAndCommentCount
				},
				l = e => {
					if (Object(c.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.n
					});
					return t === n.t.VoteCountOnly || t === n.t.VoteAndCommentCount
				},
				u = e => {
					if (Object(c.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.n
					});
					return t === n.t.CommentCountOnly || t === n.t.VoteAndCommentCount
				},
				m = (e, {
					post: t
				}) => p(e, {
					postId: t.id
				}),
				p = (e, {
					postId: t
				}) => {
					const r = e.posts.models[t];
					if (Object(c.c)(e) || !r || r.isSponsored || r.isScoreHidden || r.score >= a || Object(i.a)(e)) return !1;
					const s = Object(o.d)(e, {
							experimentName: n.n
						}),
						d = null == s ? void 0 : s.variant;
					return d === n.t.VoteCountOnly || d === n.t.VoteAndCommentCount
				},
				b = (e, {
					postId: t
				}) => {
					const r = e.posts.models[t];
					if (Object(c.c)(e) || !r || r.isSponsored || r.numComments >= a || Object(i.a)(e)) return !1;
					const s = Object(o.d)(e, {
							experimentName: n.n
						}),
						d = null == s ? void 0 : s.variant;
					return d === n.t.CommentCountOnly || d === n.t.VoteAndCommentCount
				},
				f = e => {
					if (Object(i.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.Mb
					}) === n.ac.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.ie
				}) === n.Zc
			}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				s = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				c = e => e.gild.message,
				a = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return v
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/commentSelector.ts"),
				i = r("./src/reddit/selectors/gold/giveAwards.ts"),
				c = r("./src/reddit/selectors/posts.ts"),
				a = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, r) => {
					const n = t ? e[`staticIcon${r}`] : e[`icon${r}`];
					return (null == n ? void 0 : n.url) ? n.url : t ? e.staticIcon.url : e.icon.url
				},
				m = ({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => e.awardSubType === s.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => {
					let s = e;
					if ((null == n ? void 0 : n.awardCountsById) && n.awardCountsById[e.id] && e.tiers) {
						const t = n.awardCountsById[e.id];
						s = e.tiers.reduce((e, r) => t >= r.awardingsRequired ? r : e)
					}
					return u(s, r, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) : u(e, r, t),
				p = Object(n.a)((e, {
					awards: t,
					minSize: r,
					postOrCommentId: n
				}) => {
					const s = Object(d.c)(e),
						i = l.find(e => e >= r),
						a = n ? Object(c.H)(e, {
							postId: n
						}) || Object(o.b)(e, {
							commentId: n
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: i,
						prefersReducedMotion: s,
						postOrComment: a
					})), e), {})
				}),
				b = (e, {
					award: t,
					minSize: r,
					postOrCommentId: n
				}) => t ? p(e, {
					awards: [t],
					minSize: r,
					postOrCommentId: n
				})[t.id] : void 0,
				f = (e, {
					minSize: t,
					userName: r
				}) => {
					const n = Object(a.nb)(e, {
						userName: r
					});
					if (n && n.awardedLastMonth && n.awardedLastMonth.topAward) return b(e, {
						award: n.awardedLastMonth.topAward,
						minSize: t
					})
				},
				v = e => {
					const t = Object(i.b)(e),
						r = Object(i.a)(e);
					return b(e, {
						award: t,
						postOrCommentId: r || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = e => e.gild.selectedAward,
				s = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return i
			})), r.d(t, "s", (function() {
				return c
			})), r.d(t, "r", (function() {
				return a
			})), r.d(t, "u", (function() {
				return d
			})), r.d(t, "t", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "w", (function() {
				return O
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "v", (function() {
				return _
			})), r.d(t, "y", (function() {
				return x
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "m", (function() {
				return A
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "d", (function() {
				return P
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(s.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const i = e => e.features.goldPurchase.purchaseModal.activePage,
				c = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				a = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.l)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				v = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				j = e => e.features.goldPurchase.payment.savedCards,
				_ = e => e.features.goldPurchase.payment.rememberCard,
				x = e => e.features.goldPurchase.payment.useSavedCard,
				w = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				y = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				C = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				E = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				A = e => e.features.goldPurchase.payment.stripeToken.pending,
				S = e => e.features.goldPurchase.payment.paypal.passthrough,
				P = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/lib/constants/index.ts");
			const s = e => !o(e) && !!e.user.prefs.subscriptionsPinned,
				o = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.Mb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./src/lib/fastdom/index.ts"),
				o = r("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				c = "jsapi.consumer",
				a = "/r/redesign/wiki/jsapi";
			var d = r("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${c}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === c && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${n.a.redditUrl}${a}`, e))
					} catch (r) {
						return void console.error(i, `${n.a.redditUrl}${a}`, r)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, r) {
					const n = {
						name: e,
						props: t,
						element: r
					};
					this.queue.push(n), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(n)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					s.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-MediumPost.fed8a13e6a9c642b650d.js.map