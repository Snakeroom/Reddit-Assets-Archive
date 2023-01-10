// https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.049d228f2f9a7a1d135e.js
// Retrieved at 1/10/2023, 9:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"], {
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
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");

			function o(e) {
				const t = Object(r.useRef)();
				return Object(r.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const c = Object(r.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : c;
				return Array.isArray(t.modifiers) || (t = Object(r.assoc)(t, "modifiers", c.modifiers)), t
			}

			function i(e) {
				const [t, n] = Object(o.useState)(null), [c, i] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), f = Object(o.useCallback)(() => m(!1), []), b = Object(o.useCallback)(() => m(!u), [u]), v = Object(o.useMemo)(() => {
					const t = a(e);
					return d ? Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: h,
					styles: g,
					update: O
				} = Object(s.a)(t, c, v);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...h.arrow
					},
					hide: f,
					popperProps: {
						ref: i,
						style: g.popper,
						...h.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: b,
					visible: u,
					update: O
				}), [l, h, i, f, p, g, t, n, b, u, O])
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/lodash/every.js"),
				o = n.n(r);

			function s(e) {
				let t = null,
					n = null;
				return function() {
					for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++) s[c] = arguments[c];
					return null !== t && s.length === t.length && o()(s, (e, n) => e === t[n]) || (t = s, n = e(...s)), n
				}
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = "CREATOR_STATS_PENDING",
				o = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			}));
			const r = "ECON__MARKETPLACE_ITEM_CLAIMED",
				o = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK",
				s = "X__MARKETPLACE_DISMISS_AVATAR_PUSHCARD",
				c = "X__MARKETPLACE_DISMISS_AVATAR_PUSHCARD_BANNER",
				a = "X__MARKETPLACE_VIEW_AVATAR_PUSHCARD"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return f
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const o = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				s = Object(r.a)(o("awardSheetInfoRequested")),
				c = Object(r.a)(o("manageableAwardsRequested")),
				a = Object(r.a)(o("createCommunityAward")),
				i = Object(r.a)(o("createGlobalAward")),
				d = Object(r.a)(o("createModAward")),
				l = Object(r.a)(o("createAwardFailed")),
				u = Object(r.a)(o("createAwardSuccessful")),
				m = Object(r.a)(o("removeCommunityAward")),
				p = Object(r.a)(o("disableAwardinCommunity")),
				f = Object(r.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return v
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "f", (function() {
				return w
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/postParentMessage/index.ts"),
				s = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/selectors/gild.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/telemetry/index.ts"),
				b = n("./src/reddit/actions/gold/constants.ts");
			const v = Object(r.a)(b.J),
				h = Object(r.a)(b.f),
				g = () => async (e, t) => {
					const r = t();
					e(h()), Object(i.b)(i.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(o()(r))
				}, O = Object(r.a)(b.I), _ = e => {
					let {
						awardId: t,
						correlationId: n,
						thingId: r
					} = e;
					return async (e, o) => {
						const a = o(),
							i = t ? Object(u.a)(a, t) : void 0;
						e(O({
							award: i && i.isEnabled ? i : void 0,
							thingId: r,
							correlationId: n
						})), e(Object(l.h)(c.a.GOLD_GILD_MODAL));
						const f = Object(p.O)(a, {
							thingId: r
						});
						let b = null;
						if (f) b = f.id;
						else if (Object(s.a)(r)) {
							const e = Object(m.G)(a, {
								postId: r
							});
							e && (b = e.belongsTo.id)
						}
						b && Object(d.a)(b, r)
					}
				}, j = Object(r.a)(b.e), y = Object(r.a)(b.H), C = () => async (e, t) => {
					const r = t(),
						s = Object(a.d)(r);
					if (Object(a.g)(r)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(j()), e(Object(l.g)(c.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(s)(r)), Object(i.b)(i.a.GildingFlow)
				}, w = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return _
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				c = n("./src/config.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			var u = n("./src/reddit/reducers/features/avatar/index.ts"),
				m = n("./src/reddit/selectors/avatar.ts"),
				p = n("./src/reddit/actions/users.ts");
			Object(r.a)({
				features: {
					avatar: u.a
				}
			});
			const f = "SET_AVATAR_USER",
				b = Object(o.a)(f),
				v = "RANDOM_AVATAR_LOADED",
				h = Object(o.a)(v),
				g = (e, t, n) => async (r, o, s) => {
					let {
						apiContext: u
					} = s;
					var f, b, v, h;
					const g = Object(m.b)(o()),
						O = await (async (e, t, n, r, o) => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${c.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: a.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...r
							}
						}))(u(), e, t, n, g);
					if (!O.ok) throw new Error("User avatar failed to save");
					return r(Object(p.y)(O.body)), {
						accountIcon: null === (b = null === (f = O.body) || void 0 === f ? void 0 : f.avatar) || void 0 === b ? void 0 : b.headshot_image_url,
						fullBodySnoovatar: null === (h = null === (v = O.body) || void 0 === v ? void 0 : v.avatar) || void 0 === h ? void 0 : h.image_url
					}
				}, O = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${c.a.snoovatarUrl}/api/account`,
							method: a.ob.GET
						}))(r());
						t.ok && e(b(t.body))
					} catch (o) {
						s.c.captureException(o)
					}
				}, _ = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${c.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: a.ob.GET
						}))(r());
						t.ok && e(h(t.body))
					} catch (o) {
						s.c.captureException(o)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./src/reddit/actions/login.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/actions/users.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				d = n("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(d.a)(Object(a.l)(n)), e(Object(s.s)({
					forceFetch: !0
				})), await e(Object(o.g)(c.a.SNOOVATAR_MODAL))
			};

			function u() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n) => {
					const {
						clickSource: s,
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: f,
						shopTabState: b
					} = e, v = n();
					s && Object(d.a)(Object(a.g)(s)(v)), Object(i.S)(v) ? await t(Object(o.h)(c.a.SNOOVATAR_MODAL, {
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: f,
						shopTabState: b
					})) : await t(Object(r.openLoginModal)())
				}
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(c.a)(e => s.a.createElement(a.e, null, s.a.createElement(a.i, null, s.a.createElement(d.a, null, s.a.createElement(a.q, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(i.a, {
				onClick: t => {
					e.onClose && e.onClose(t), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(a.b, null)))), s.a.createElement(a.l, null, s.a.createElement(a.p, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(a.g, null, !e.hideCancelButton && s.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(a.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(t), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, n) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/hooks/usePrevious.ts"),
				c = n("./src/realtime/GQLSubscription/async.tsx"),
				a = n("./src/reddit/hooks/useIntersectionObserver.ts");
			const i = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var d = n("./src/reddit/components/CountAnimation/index.m.less"),
				l = n.n(d);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: n,
					incrementDelta: d,
					initialDelay: u,
					initialDisplayCount: p,
					isLoadTestOnly: f,
					onDataCB: b,
					postId: v,
					queryKey: h,
					queryVariables: g,
					shouldDisjointAnimation: O,
					subsequentRecurringDelay: _
				} = e, [j, y] = Object(r.useState)(!1), [C, w] = Object(r.useState)(!0), [x, k] = Object(r.useState)([]), [E, A] = Object(r.useState)(i(p).reverse()), I = Object(r.useRef)(!1), S = Object(r.useRef)(null), T = Object(r.useRef)(e => {}), P = Object(r.useRef)();
				T.current = Object(r.useCallback)(e => {
					let n = e || d();
					const r = [...E].reverse().join("");
					let o = parseInt(r) + n;
					o > t && (n = t - parseInt(r), o = t);
					const s = i(o).reverse();
					y(!1), k(E), A(s), w(!1), P.current = setTimeout(() => {
						y(!0)
					}, 0)
				}, [t, d, E]);
				const N = Object(r.useRef)(() => {}),
					R = Object(r.useRef)(),
					M = Object(r.useRef)();
				N.current = Object(r.useCallback)(() => {
					M.current = setTimeout(() => {
						T.current();
						const e = [...x].reverse().join("");
						parseInt(e) < t && N.current()
					}, _())
				}, [t, _, x]);
				const F = Object(r.useRef)(0),
					D = Object(r.useRef)(!1),
					L = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, r = 1 !== n;
							t ? (D.current = !0, I.current || (I.current = !0, R.current = setTimeout(() => {
								T.current(), N.current()
							}, u())), F.current > 0 && (T.current(F.current), F.current = 0)) : r && (D.current = !1)
						})
					}, []);
				Object(a.a)(S, L);
				const [V, G] = Object(r.useState)(!1), U = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, r = 1 !== n;
						t ? G(!0) : r && G(!1)
					})
				}, []), K = Object(r.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(a.a)(S, U, K.current);
				const B = Object(s.a)(t);
				Object(r.useEffect)(() => {
					if (void 0 !== B && B !== t) {
						const e = t - B;
						D.current ? T.current(e) : F.current += e
					}
					return () => {
						clearTimeout(R.current), clearTimeout(M.current), clearTimeout(P.current)
					}
				}, [t]);
				const q = Object(r.useCallback)(() => w(!0), [w]),
					z = 0 === x.length,
					W = C || z,
					H = Object(r.useRef)(((e, t) => `${t}_${e}_count_anim`)(v, n));
				return o.a.createElement(o.a.Fragment, null, !f && o.a.createElement("div", {
					className: l.a.countAnimation
				}, E.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const r = Math.abs(t),
							o = [n];
						if (n === r) return o;
						let s = !0;
						for (; s;) ++n > 9 && (n = 0), o.push(n), n === r && (s = !1);
						return o
					})(x[t] || 0, e);
					return o.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: q,
						style: j && x.length > 0 && !C ? {
							transform: `translateY(-${O&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(O?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, W ? o.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : n.map((e, t) => {
						const r = 0 === t || t === n.length - 1;
						if (!O || O && r) return o.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), o.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...E].reverse().join(""))), o.a.createElement("span", {
					ref: S
				}), V && o.a.createElement(c.a, {
					variables: g,
					onData: f ? m : b,
					queryKey: h,
					uniqueKey: H.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts");
			const o = 16374492e5,
				s = 45 * r.E;
			var c;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available", e.Expired = "Expired", e.Quarantined = "Quarantined"
			}(c || (c = {}));
			const a = e => {
					return e < Date.now() - s
				},
				i = e => e > o,
				d = (e, t, n, r) => {
					if (!n && !i(e.created)) return c.NotAvailable;
					if (n && !i(e.created) || a(e.created)) return c.Expired;
					if (n && r) return c.Quarantined;
					if (!t) return c.NotAvailableYet;
					const {
						shareAllCountTotals: o,
						shareCopyCountTotals: s,
						viewCountTotals: d,
						viewCountTrends: l
					} = t;
					return (null == o ? void 0 : o.availability.isAvailable) && (null == s ? void 0 : s.availability.isAvailable) && (null == d ? void 0 : d.availability.isAvailable) && (null == l ? void 0 : l.availability.isAvailable) && l.data && 0 !== l.data.length ? !(null == d ? void 0 : d.totalCount) || d.totalCount < 10 ? c.NotAvailableYet : c.Available : c.NotAvailableYet
				}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/noop.js"),
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => c.a.createElement(a.i, {
				className: l.a.modalHeader
			}, c.a.createElement(a.q, null, e.title), c.a.createElement(i.a, {
				onClick: e.onClosePressed || o.a
			}, c.a.createElement(a.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				s = n.n(o);
			const c = r.a.div("Wrapper", s.a);
			t.a = c
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, n) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				c = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Flair/index.tsx"),
				i = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(i);
			const l = c.a.span("Placeholder", d.a),
				u = c.a.div("SelectedFlair", d.a),
				m = c.a.wrapped(a.c, "FlairComponent", d.a);
			t.a = e => e.flair ? s.a.createElement(u, null, s.a.createElement(l, null, r.fbt._("{placeholder}", [r.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), s.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : s.a.createElement(u, null, r.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, n) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/lodash/once.js"),
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => c.a.createElement("div", {
					className: Object(i.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				f = o()((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
					return Object(a.a)({
						getComponent: () => Object(l.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
						ErrorComponent: e,
						LoadingComponent: e
					})
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/selectors/moderatorPermissions.ts"),
				b = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/controls/RadioInput/index.tsx"),
				O = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				_ = n("./src/reddit/helpers/trackers/postComposer.ts"),
				j = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				y = n("./src/reddit/icons/svgs/Search/index.tsx"),
				C = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				w = n.n(C);
			class x extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}, this.onSearchClick = () => {
						this.props.sendEvent(Object(_.n)())
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: n
					} = this.props, {
						searchQuery: o
					} = this.state, c = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), a = !!n && c.some(e => e.id === n);
					return s.a.createElement("div", {
						className: w.a.container
					}, s.a.createElement("div", {
						className: w.a.searchBoxWrapper
					}, s.a.createElement("input", {
						className: w.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: r.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), s.a.createElement(y.a, {
						className: w.a.searchIcon
					})), s.a.createElement(g.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, c.map((e, t) => {
						const r = Object(u.c)(e),
							o = n === e.id || !a && 0 === t;
						return s.a.createElement(O.a, {
							className: w.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, s.a.createElement(v.c, {
							className: w.a.flairComponent,
							flair: r,
							forceSmallEmojis: !0
						}), e.textEditable && s.a.createElement(j.a, {
							className: w.a.pencil
						}))
					})))
				}
			}
			var k = Object(h.c)(x),
				E = n("./src/reddit/components/FlairSearch/index.m.less"),
				A = n.n(E);
			const I = Object(d.a)(e => e && Object(u.c)(e)),
				S = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: f.g
				}),
				T = Object(c.b)(S);
			t.a = T(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: o,
					onChange: c,
					subredditId: a,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: f,
					isModerator: v
				} = e, h = Object(p.a)(), g = d && n && n.templateId && d[n.templateId] || void 0, O = Object(b.a)(), _ = n || I(g);
				return s.a.createElement("div", {
					className: Object(i.a)(o, A.a.container)
				}, d && l && s.a.createElement(k, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							h(Object(m.b)({
								userFlair: t
							})), c(n)
						}
					},
					selectedTemplateId: g ? g.id : "",
					templateIds: l,
					templates: d
				}), _ && g && (v || g.textEditable) && s.a.createElement("div", {
					className: A.a.flairEditSection
				}, s.a.createElement("div", {
					className: A.a.editLabel
				}, r.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), f && s.a.createElement("div", {
					className: A.a.restrictionHintText
				}, Object(u.k)(g)), s.a.createElement(O, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: _,
					flairTemplate: g,
					flairTemplateType: t,
					isFlairModOnly: g.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), c(n)
					},
					subredditId: a
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				a = n.n(c);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function(e) {
				let {
					visible: t,
					...n
				} = e;
				const [c, d] = Object(r.useState)(t);
				return Object(r.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, d(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), d(!1)
					}
				}, [t]), t ? o.a.createElement("div", i({
					className: Object(s.a)(a.a.tooltip, n.className, {
						[a.a.visible]: c
					})
				}, n.popperProps), n.children, c && o.a.createElement("div", i({
					className: a.a.arrow
				}, n.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/CreatorStats/helpers.ts"),
				l = n("./src/reddit/selectors/creatorStats.ts"),
				u = n("./src/reddit/components/PostContent/viewCount.m.less"),
				m = n.n(u);
			t.a = e => {
				let {
					className: t,
					post: n,
					showViewCount: o
				} = e;
				const {
					upvotePercentString: u,
					viewCountString: p
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						n = Object(i.b)(e.viewCount);
					return {
						upvotePercentString: r.fbt._("{percent upvoted}% Upvoted", [r.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: r.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [r.fbt._plural(e.viewCount, "number of views", n)], {
							hk: "rP01m"
						})
					}
				})(n), f = o && !!n.viewCount, b = Object(c.e)(e => Object(l.a)(e, n.id)), v = Object(c.e)(e => Object(l.c)(e, n.id)), h = Object(d.c)(n, v), g = b && h === d.b.Available;
				return s.a.createElement("div", {
					className: Object(a.a)(m.a.viewCounts, t)
				}, f && s.a.createElement("span", null, p), f && !!n.upvoteRatio && s.a.createElement("span", {
					className: m.a.dotSpacer
				}), !!n.upvoteRatio && !g && s.a.createElement("span", null, u))
			}
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, n) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				s = n("./src/reddit/constants/flair.ts"),
				c = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/models/Flair/index.ts");
			const i = e => (e || []).find(e => e.type === a.f.Text || e.type === a.f.Image || e.type === a.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, n) => {
				if (n && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const r = e && t.templateId ? e[t.templateId] : void 0;
				if (!r) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const a = Object(c.g)(t).length;
				return 0 === a ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : a > s.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(c.n)(t) && !Object(c.r)(r) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : o()(n, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				s = n.n(o);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", s.a);
			t.a = c
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				s = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				c = e => {
					let {
						type: t,
						key: n
					} = e;
					return s[o({
						type: t
					})][n]()
				}
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
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				m = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				h = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = n("./src/reddit/components/VerticalVotes/index.m.less"),
				O = n.n(g);
			const _ = Object(a.c)({
					isNightMode: v.fb,
					isAnimatingUpvotePostId: b.k
				}),
				j = Object(c.b)(_),
				y = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				C = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class w extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: f.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(f.a.upvoted), this.setState({
							voted: e !== f.a.upvoted ? f.a.upvoted : f.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(f.a.downvoted), this.setState({
							voted: e !== f.a.downvoted ? f.a.downvoted : f.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isCountAnimShadowTestEnabled: n,
							isNightMode: o,
							isAnimatingUpvotePostId: c,
							shouldShowUpvoteRatioOnHover: a,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: b,
							containerRef: v,
							model: g,
							postId: _
						} = e,
						j = y(e),
						w = C(e),
						x = g.voteState,
						k = c === _;
					return s.a.createElement("div", {
						className: Object(i.a)(O.a.votesContainer, e.className),
						id: `vote-arrows-${g.id}`,
						ref: v
					}, j ? s.a.createElement(m.b, {
						"aria-label": r.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": x === f.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": h.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: x
					}) : s.a.createElement("button", {
						"aria-label": r.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": x === f.a.upvoted,
						className: Object(i.a)(l.n, b, {
							[O.a.bounceUp]: k
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": h.b.UPVOTE,
						id: e.upvoteTooltipId
					}, s.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: x
					})), !e.compact && p && s.a.createElement(u.a, {
						className: Object(i.a)(O.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: x,
						shouldShowUpvoteRatioOnHover: a,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!n,
						postId: _
					}), w ? s.a.createElement(m.a, {
						"aria-label": r.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": x === f.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": h.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: x
					}) : s.a.createElement("button", {
						"aria-label": r.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": x === f.a.downvoted,
						className: Object(i.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": h.b.DOWNVOTE
					}, s.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: x
					})))
				}
			}
			const x = Object(d.a)(j(w));
			t.a = x
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/subscription/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(o.c)({
				userIsSubscriber: c.jb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(s.d([n], !0)),
					onSubscriptionsRequested: () => e(s.e()),
					onUnsubscribe: () => e(s.d([n], !1))
				}
			})
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			}));
			const r = "reddit",
				o = "reddit.ready",
				s = "reddit.urlChanged"
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== c.b.Enter && e.key !== c.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : o.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(s.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? o.a.createElement(i.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : o.a.createElement(a.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/constants/keycodes.ts");
			class c extends o.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return o.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: r
						} = this.state;
						if (t) return;
						const o = e.key === s.b.ArrowUp,
							c = e.key === s.b.ArrowDown;
						if (o || c) {
							const t = this.getValues();
							if (!t.length) return;
							const s = r ? t.indexOf(r) : 0,
								c = t[((o ? s - 1 : s + 1) + t.length) % t.length];
							n(c), this.setState({
								value: c
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
					return o.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, o.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), o.a.Children.map(e.children, (n, r) => {
						const s = 0 === r,
							c = n.props.value === t,
							a = null !== t ? c ? 0 : -1 : s ? 0 : -1;
						return o.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: c,
							tabIndex: a
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/components/CountAnimation/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = n("./src/reddit/components/PostContent/ViewCount.tsx"),
				f = n("./src/reddit/constants/colors.ts"),
				b = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				v = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				_ = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				j = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				C = n("./node_modules/reselect/es/index.js"),
				w = n("./src/reddit/controls/Score/index.m.less"),
				x = n.n(w);
			const k = {
					placement: "right"
				},
				E = e => e.voteState === O.a.downvoted ? Object(g.a)(e).voteText.downvote : e.voteState === O.a.upvoted ? Object(g.a)(e).voteText.upvote : Object(v.a)(Object(b.a)(e)),
				A = Object(C.c)({
					locale: e => Object(j.k)(e),
					post: (e, t) => {
						let {
							shouldShowUpvoteRatioOnHover: n,
							postId: r
						} = t;
						if (n && r) return Object(y.G)(e, {
							postId: r
						})
					}
				}),
				I = () => 0,
				S = Object(d.b)(A),
				T = Object(s.a)(e => {
					const t = {
							color: e.light ? f.a.lightboxHeaderText : E(e)
						},
						{
							score: n,
							postId: s = "",
							locale: b,
							isVoteCountAnimation: v,
							isCountAnimShadowTestEnabled: g,
							shouldShowUpvoteRatioOnHover: O,
							post: j
						} = e,
						y = Object(d.d)(),
						C = null == b ? void 0 : b.startsWith("en"),
						w = e.isScoreHidden ? C ? r.fbt._("Vote", null, {
							hk: "2TMson"
						}) : i.a.createElement("span", {
							className: x.a.dot
						}, "•") : Object(c.b)(n),
						A = Object(a.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && y(Object(l.H)({
								postId: s,
								delta: t
							}))
						}, [y, s]),
						S = Object(a.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: s
								}
							}
						}),
						T = !e.isScoreHidden && v && n < _.a,
						P = Object(h.a)(k),
						N = n < 0 ? 0 : n;
					return i.a.createElement("div", {
						className: Object(o.a)(x.a.score, e.className),
						style: t,
						onMouseEnter: O ? P.show : void 0,
						onMouseLeave: O ? P.hide : void 0,
						ref: O ? P.target.ref : void 0
					}, (T || g) && i.a.createElement(i.a.Fragment, null, i.a.createElement(u.b, {
						initialDisplayCount: N,
						countToUpperBound: N,
						initialDelay: I,
						subsequentRecurringDelay: I,
						incrementDelta: I,
						shouldDisjointAnimation: !0,
						postId: s,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: S.current,
						onDataCB: A,
						isLoadTestOnly: g && !T
					})), !T && w, O && j && i.a.createElement(m.a, P, i.a.createElement(p.a, {
						className: x.a.viewCount,
						post: j,
						showViewCount: !1
					})))
				});
			t.a = S(T)
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: n,
					memo: r,
					cta: o
				} = e;
				return t && n && r && o ? {
					subreddit: t,
					amount: n,
					memo: r,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/trackers/commentsChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return l
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "j", (function() {
				return w
			}));
			var r = n("./src/lib/makeCommentsPageKey/index.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/Event.ts");
			const d = (e, t) => ({
					...Object(a.o)(e),
					subreddit: Object(a.lb)(e),
					profile: Object(a.T)(e),
					post: Object(a.K)(e, t),
					comment: Object(a.h)({
						state: e,
						commentId: t
					})
				}),
				l = (e, t) => {
					const n = Object(c.c)(e, {
							commentId: t
						}),
						o = n && Object(r.a)(n.postId);
					if (!n || !o) return null;
					const i = {
							commentId: t,
							commentsPageKey: o
						},
						d = t && o && Object(s.j)(e, i) || 0;
					return Object(a.z)(e, void 0, {
						depth: d
					})
				},
				u = e => {
					var t;
					return null !== (t = e.split("chat_reaction_")[1]) && void 0 !== t ? t : ""
				},
				m = (e, t) => n => ({
					action: "load",
					noun: e,
					post: Object(a.K)(n, t),
					source: i.b.ChatView,
					subreddit: Object(a.lb)(n)
				}),
				p = (e, t) => n => ({
					...d(n, t),
					source: "live_post",
					action: o.c.CLICK,
					noun: e,
					actionInfo: {
						reason: "live_post",
						pageType: "actions_menu"
					},
					listing: l(n, t)
				}),
				f = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.VIEW,
					noun: "last_message"
				}),
				b = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.SUBMIT,
					noun: "reply",
					post: Object(a.K)(t, e),
					comment: Object(a.h)({
						state: t,
						commentId: e
					}),
					actionInfo: Object(a.d)(t, {
						reason: "live_post",
						type: "live_post"
					})
				}),
				v = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.CLICK,
					noun: "comment",
					actionInfo: Object(a.d)(t, {
						pageType: "user_mention",
						reason: "live_post",
						type: "live_post"
					})
				}),
				h = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.VIEW,
					noun: "warning",
					post: Object(a.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				g = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.CLOSE,
					noun: "warning",
					post: Object(a.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				O = e => t => ({
					...d(t, e),
					source: "global",
					action: o.c.VIEW,
					noun: "screen",
					actionInfo: {
						reason: "live_post",
						pageType: "given_awards_list"
					},
					listing: l(t, e)
				}),
				_ = (e, t, n) => r => ({
					...d(r, t),
					source: i.b.Chat,
					action: o.c.CLICK,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(r, t)
				}),
				j = (e, t, n) => r => ({
					...d(r, t),
					source: i.b.Chat,
					action: o.c.DELETE,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(r, t)
				}),
				y = () => e => {
					var t;
					return {
						...Object(a.o)(e),
						subreddit: Object(a.lb)(e),
						profile: Object(a.T)(e),
						actionInfo: {
							...Object(a.d)(e),
							paneName: (null === window || void 0 === window ? void 0 : window.parent) !== window ? "chat_tab" : (null === (t = null == e ? void 0 : e.platform.currentPage) || void 0 === t ? void 0 : t.locationState.clickSource) || ""
						},
						source: "chat_post",
						action: o.c.VIEW,
						noun: "hint"
					}
				},
				C = e => t => {
					const n = d(t, e);
					return n.comment.type = "thread_chat", {
						...n,
						source: "live_post",
						action: o.c.CLICK,
						noun: "chat_thread",
						actionInfo: Object(a.d)(t, {
							pageType: "actions_menu"
						})
					}
				},
				w = e => t => {
					const n = d(t, e);
					return n.comment.type = "thread_chat", {
						...n,
						source: "live_post",
						action: o.c.SUBMIT,
						noun: "comment",
						actionInfo: Object(a.d)(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return h
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...o.o(e),
					screen: o.cb(e),
					subreddit: o.lb(e),
					userSubreddit: o.ub(e)
				}),
				i = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === r.e.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(c.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...a(e),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...a(t),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? i(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, r) => o => ({
					...a(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "image",
					actionInfo: r ? {
						reason: r
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
						uploadDuration: n,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
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
					goldPurchase: n ? i(n) : null
				}),
				f = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? i(n) : null
				}),
				b = (e, t, n) => r => ({
					...a(r),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: i(e),
					profile: o.U(r, t),
					subreddit: o.mb(r, t)
				}),
				v = (e, t) => b(e, t, "disable_in_community"),
				h = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return u
			})), n.d(t, "clickGildEvent", (function() {
				return f
			})), n.d(t, "clickAddAward", (function() {
				return b
			})), n.d(t, "clickHideAward", (function() {
				return v
			})), n.d(t, "clickConfirmHideAward", (function() {
				return h
			})), n.d(t, "clickCancelHideAward", (function() {
				return g
			})), n.d(t, "clickAwardReportFlow", (function() {
				return _
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return j
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return y
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return C
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return w
			})), n.d(t, "clickReportAward", (function() {
				return x
			})), n.d(t, "clickCancelReportAward", (function() {
				return k
			})), n.d(t, "clickConfirmReportAward", (function() {
				return E
			})), n.d(t, "viewGildModalEvent", (function() {
				return A
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return I
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return S
			})), n.d(t, "clickMessageInputEvent", (function() {
				return T
			})), n.d(t, "typeMessageInputEvent", (function() {
				return P
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return N
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return R
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return M
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return F
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return D
			})), n.d(t, "clickNextButtonEvent", (function() {
				return L
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return V
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return G
			})), n.d(t, "clickFilterEvent", (function() {
				return U
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return K
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return B
			}));
			var r = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/models/GoldPurchase.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/helpers/isComment.ts"),
				l = n("./src/reddit/selectors/gild.ts");
			const u = e => e.awardType === o.e.Global && e.awardSubType === o.d.Appreciation ? a.GoldPurchaseType.GidAppreciation : e.awardType === o.e.Global && e.awardSubType === o.d.Premium ? a.GoldPurchaseType.GidPremium : e.awardSubType === o.d.Group ? a.GoldPurchaseType.GidGroup : e.awardType === o.e.Community ? a.GoldPurchaseType.GidCommunity : e.awardType === o.e.Moderator ? a.GoldPurchaseType.GidMod : e.awardType === o.e.Global && e.awardSubType === o.d.Global ? a.GoldPurchaseType.GidGlobal : a.GoldPurchaseType.GidUnknown,
				m = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: u(e),
					...t
				}),
				p = (e, t, n) => {
					const o = t && Object(s.g)(e, {
						commentId: t
					});
					return {
						...c.o(e),
						actionInfo: c.d(e, {
							reason: o ? "live_post" : void 0,
							...n
						}),
						comment: t ? c.h({
							state: e,
							commentId: t
						}) : void 0,
						correlationId: Object(l.b)(e) || Object(i.d)(i.a.GildingFlow, !1),
						post: t ? c.K(e, t) : void 0,
						screen: c.cb(e),
						subreddit: c.lb(e),
						userSubreddit: c.ub(e),
						listing: t ? Object(r.k)(e, t) : void 0
					}
				},
				f = (e, t) => n => ({
					...p(n, e, t),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: c.r(n)
				}),
				b = e => t => ({
					...p(t, e),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: c.r(t)
				}),
				v = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: m(e)
				}),
				h = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: m(e)
				}),
				g = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: m(e)
				}),
				O = e => (t, n) => r => ({
					...p(r, n),
					source: Object(d.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: m(t)
				}),
				_ = O("award_hovercard_report"),
				j = O("cancel_award_hovercard_report"),
				y = O("flag_award"),
				C = O("cancel_flag_award"),
				w = O("confirm_flag_award"),
				x = O("report_community_award"),
				k = O("cancel_report_community_award"),
				E = O("confirm_report_community_award"),
				A = (e, t, n) => r => ({
					...p(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				I = (e, t, n) => r => ({
					...p(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: m(e, n)
				}),
				S = (e, t) => n => ({
					...p(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				T = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				P = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				N = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				R = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				M = (e, t) => n => ({
					...p(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				F = (e, t) => n => ({
					...p(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				D = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				L = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				V = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				G = e => {
					let {
						award: t,
						awardeeKarmaEarned: n,
						awarderKarmaEarned: r,
						numberCoins: o,
						thingId: s
					} = e;
					return e => ({
						...p(e, s),
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: {
							contentType: Object(d.a)(s) ? "comment" : "post",
							awardeeKarmaEarned: n,
							awarderKarmaEarned: r,
							numberCoins: o,
							...m(t)
						}
					})
				},
				U = e => t => ({
					...p(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				K = () => e => ({
					...p(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				B = () => e => ({
					...p(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "j", (function() {
				return w
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/selectors/gold/giveAwards.ts"),
				c = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts"),
				f = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, b = !!n, v = s.b(e), h = v ? Object(u.getAwardTypeFromAward)(v) : null, g = b ? h : a.p(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, O = n ? Object(p.a)(n) ? "comment" : "post" : void 0, _ = l || a.u(e), j = [...Object(c.d)(e), ...Object(c.f)(e)].filter(e => e.mobileId === _)[0], y = t.offerContext || (v && 0 === v.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(j, b)), C = j ? Math.round(1e4 * (j.baselinePennies - j.pennies) / j.baselinePennies) / 100 : 0, w = j ? Math.round(1e4 * (j.coins - j.baselineCoins) / j.coins) / 100 : 0, x = j ? j.baselinePennies !== j.pennies ? `${C}_percent_price` : j.baselineCoins !== j.coins ? `${w}_percent_bonus` : void 0 : void 0, k = g === d.GoldPurchaseType.Premium ? r.Db : j ? j.pennies : void 0;
					return {
						...i.o(e),
						comment: n ? i.h({
							state: e,
							commentId: n
						}) : null,
						correlationId: a.s(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? i.K(e, n) : null,
						screen: i.cb(e),
						subreddit: n ? i.lb(e) : null,
						goldPurchase: {
							...v ? Object(f.a)(v) : null,
							type: g,
							gildedContent: b,
							contentType: O,
							numberCoins: j ? j.coins : void 0,
							offerContext: y,
							offerType: x
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
				v = (e, t, n) => r => ({
					...b(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				h = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				O = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				_ = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				j = (e, t) => n => ({
					...b(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				y = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				C = (e, t, n) => r => {
					const o = b(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					});
					return {
						...o,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...o.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...o.goldPurchase,
							source: e ? d.GiveGold : a.p(r) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				w = e => t => {
					var n;
					const r = b(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
							method: (null === (n = t.platform.currentPage) || void 0 === n ? void 0 : n.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					profile: a.T(e),
					screen: a.cb(e),
					subreddit: a.lb(e)
				}),
				d = (e, t, n) => r => ({
					source: Object(c.i)(r) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...i(r),
					post: a.K(r, e)
				}),
				l = (e, t, n, r) => o => {
					const c = n ? a.h({
							state: o,
							commentId: n
						}) : null,
						{
							sortToUse: i
						} = Object(s.a)(o, e);
					return {
						...d(e, t, r)(o),
						comment: c,
						listing: {
							sort: i
						}
					}
				},
				u = (e, t) => n => {
					const r = a.k(n);
					return r ? d(r.id, e, t)(n) : {
						source: Object(c.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...i(n)
					}
				},
				m = (e, t) => n => Object(o.a)({
					...d(e, t)(n),
					...a.o(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...i(t),
					post: a.k(t),
					userSubreddit: a.ub(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return c
			})), n.d(t, "n", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "a", (function() {
				return j
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: Object(o.cb)(e),
					profile: Object(o.T)(e),
					subreddit: Object(o.lb)(e),
					userSubreddit: Object(o.ub)(e)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...s(t)
				}),
				a = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					...s(n)
				}),
				i = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					media: {
						mimetype: Object(o.j)(n, t)
					},
					...s(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: r.c.CLICK,
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					actionInfo: {
						pageType: "chat_live_post"
					},
					...s(n)
				}),
				l = (e, t) => n => ({
					source: "comment",
					action: r.c.UNDO,
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				u = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				m = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				p = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...s(n)
				}),
				f = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					post: Object(o.K)(n, t),
					...s(n)
				}),
				b = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					...s(n)
				}),
				v = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					subreddit: Object(o.ob)(n, t)
				}),
				h = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					post: Object(o.K)(n, t),
					subreddit: Object(o.ob)(n, t)
				}),
				g = (e, t, n, r) => s => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(o.K)(s, n),
					subreddit: Object(o.ob)(s, n),
					actionInfo: {
						reason: r
					},
					...e && {
						comment: Object(o.h)({
							state: s,
							commentId: n
						})
					}
				}),
				O = () => e => ({
					...s(e),
					source: "modqueue",
					noun: "content_type_live_post",
					action: "view",
					actionInfo: {
						pageType: "chat_live_post"
					}
				}),
				_ = (e, t, n) => r => ({
					...s(r),
					source: "moderator",
					noun: "action",
					action: "click",
					actionInfo: {
						pageType: "mod_queue",
						paneName: n,
						reason: t
					},
					comment: Object(o.h)({
						state: r,
						commentId: e
					}) || void 0,
					post: Object(o.K)(r, e)
				}),
				j = (e, t) => n => ({
					...s(n),
					source: "moderator",
					noun: "add_note_mod_queue",
					action: "click",
					comment: Object(o.h)({
						state: n,
						commentId: e
					}) || void 0,
					post: Object(o.K)(n, e),
					modAction: {
						targetUserId: t
					}
				})
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "o", (function() {
				return I
			}));
			var r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/avatarMarketing.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const a = {
					goldPurchase: {
						offerContext: r.a.AvatarNewGear
					}
				},
				i = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...s.o(t)
					};
					return Object(o.a)(t) && Object.assign(n, a), n
				},
				d = (e, t) => n => {
					const {
						id: r
					} = Object(c.Cb)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...s.o(n),
						snoovatar: {
							userGenerated: r
						}
					}
				},
				l = e => ({
					...s.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: s.jb(e)
				}),
				u = e => t => ({
					...s.o(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					referrer: e,
					snoovatar: s.jb(t)
				}),
				m = e => ({
					...s.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: s.jb(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...s.o(e),
					...a
				}),
				f = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...s.o(e),
					...a
				}),
				b = e => t => ({
					...s.o(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				v = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...s.o(n),
					snoovatar: s.jb(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				h = v("view"),
				g = v("click"),
				O = v("dismiss"),
				_ = (e, t, n) => () => r => ({
					source: e,
					action: t,
					noun: n,
					...s.o(r),
					snoovatar: s.jb(r)
				}),
				j = _("anniversary_achievement", "view", "anniversary_achievement"),
				y = _("anniversary_achievement", "click", "close"),
				C = _("anniversary_achievement", "click", "equip"),
				w = e => () => t => ({
					...s.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				x = w("view"),
				k = w("click"),
				E = (e, t, n) => r => ({
					source: e,
					action: t,
					noun: n,
					...s.o(r),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: s.jb(r)
				}),
				A = e => E("onboarding", "click", e),
				I = () => E("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const s = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...o.o(e)
				}),
				c = e => t => {
					const n = o.lb(t),
						{
							userFlair: s,
							achievementFlair: c
						} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...o.o(t),
						subreddit: n,
						userFlair: {
							id: null == s ? void 0 : s.id,
							title: s ? Object(r.g)(s) : void 0,
							isActive: !!s || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == c ? void 0 : c.isLocked
						}
					}
				},
				a = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...o.o(e)
				}),
				i = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: o.lb(t),
					...o.o(t)
				})
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				s = n("./src/lib/hooks/useTooltip.ts");
			const c = Object(r.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function a(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(s.a)(e);
					return Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, c))
				}, [e]);
				return Object(s.b)(t)
			}
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
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = n.n(c);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(s.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a)
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = n.n(c);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", i({}, e, {
				className: Object(s.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", s({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(o);
			t.a = r.a.div("inlineRow", s.a)
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var r, o, s = n("./node_modules/redux/es/redux.js"),
				c = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(r || (r = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const a = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [r.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const d = {
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
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_pushcard",
				p = "avatar_promo_archived";
			var f;
			! function(e) {
				e.MaxEventViews = "targeting:max_event_views", e.Title = "copy:pushcard_title", e.Cta = "copy:pushcard_cta", e.BannerTitle = "copy:banner_title", e.BannerBody = "copy:banner_body", e.Deeplink = "deeplink"
			}(f || (f = {}));
			const b = e => {
					let {
						startsAt: t,
						endsAt: n
					} = e;
					const r = t && new Date(t) <= new Date,
						o = !!n && new Date(n) < new Date;
					return !!r && !o
				},
				v = e => {
					const {
						id: t,
						tags: n,
						webAssetUrls: r
					} = e, [o, s] = r, c = n.reduce((e, t) => {
						if (!t) return e;
						const n = Object.values(f).find(e => t.startsWith(e));
						return n ? (e[n] = t.slice(n.length + 1), e) : e
					}, {});
					return {
						id: t,
						maxViews: parseInt(c[f.MaxEventViews], 10),
						banner: {
							id: t,
							iconUrl: o,
							title: c[f.BannerTitle],
							body: c[f.BannerBody]
						},
						imageUrl: s,
						title: c[f.Title],
						cta: c[f.Cta],
						deeplink: c[f.Deeplink]
					}
				},
				h = e => {
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

			function g(e) {
				const t = {};
				return e.forEach(e => {
					var n;
					const {
						webAssetUrls: r,
						tags: o
					} = e;
					if (!(null == o ? void 0 : o.includes(p))) {
						if ((null == o ? void 0 : o.includes(m)) && r && r.length >= 2 && (t.pushcard = v(e)), null == o ? void 0 : o.includes(l)) {
							const {
								text: n,
								id: s
							} = e, c = r || null, a = h(o);
							t.quickCreateV1 = {
								...a,
								id: s,
								text: n,
								active: b(e) && !!c,
								webAssetUrls: c
							}
						}
						if (null == o ? void 0 : o.includes(u)) {
							const s = r || null,
								c = (null === (n = o.find(e => (null == e ? void 0 : e.startsWith("feature:")) && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
							t.marketingEvent = {
								active: b(e) && !!s,
								assetUrls: s,
								experimentRequired: c
							}
						}
					}
				}), t
			}
			var O = n("./src/reddit/actions/economics/marketplace/constants.ts"),
				_ = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				j = n("./src/reddit/actions/modal.ts"),
				y = n("./src/reddit/constants/modals.ts");
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case _.s:
						const {
							avatarMarketingEvents: o
						} = t.payload;
						return o ? {
							...d,
							...g(o)
						} : d;
					case O.a:
					case O.b:
					case O.e:
						return (null == e ? void 0 : e.pushcard) ? {
							...e,
							pushcard: {
								...e.pushcard
							}
						} : e;
					case j.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === y.a.SNOOVATAR_MODAL ? {
							...d,
							pushcard: null !== (r = null == e ? void 0 : e.pushcard) && void 0 !== r ? r : null
						} : e;
					default:
						return e
				}
			};
			var w = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.a: {
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
			t.a = Object(s.c)({
				marketing: C,
				avatarUser: i,
				randomAvatar: w
			})
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/creatorStats/constants.ts");
			const s = {};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						const {
							postOtherDiscussions: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			const a = {};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						const {
							postStats: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			const d = {};
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						const {
							subredditKarma: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				postOtherDiscussions: c,
				postStats: i,
				subredditKarma: l
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			}));
			const r = (e, t) => {
					let {
						post: n
					} = t;
					const r = n.belongsTo.id;
					if (!r) return null;
					const o = e.authorFlair.models[r];
					if (!o) return null;
					const s = n.author;
					return s && o[s] || null
				},
				o = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!n) return null;
					const o = e.authorFlair.models[n];
					return o ? o[r] : null
				},
				s = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const s = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				c = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				a = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const c = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				a = e => {
					var t, n, r, o;
					const c = null === (r = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === r ? void 0 : r.marketingEvent;
					if (!(null == c ? void 0 : c.active) || !(null === (o = null == c ? void 0 : c.assetUrls) || void 0 === o ? void 0 : o.length)) return null;
					const a = c.assetUrls[0];
					return !c.experimentRequired || Object(s.a)(c.experimentRequired)(e) ? a : null
				}
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/creatorStats/index.ts"),
				s = n("./src/reddit/selectors/moderatorPermissions.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/user.ts");
			Object(r.a)({
				features: {
					creatorStats: o.a
				}
			});
			const i = (e, t) => {
					var n, r;
					return null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === r ? void 0 : r.postOtherDiscussions[t]
				},
				d = (e, t) => {
					var n, r;
					return null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === r ? void 0 : r.postStats[t]
				},
				l = (e, t) => {
					var n, r, o;
					const s = null === (o = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === r ? void 0 : r.subredditKarma[t]) || void 0 === o ? void 0 : o.karma;
					if (!s) return;
					const {
						fromComments: c,
						fromPosts: a
					} = s;
					return {
						fromComments: c,
						fromPosts: a
					}
				},
				u = (e, t, n) => {
					const r = Object(c.G)(e, {
						postId: t
					});
					if (!r || r.isSponsored || r.removedByCategory) return !1;
					const o = Object(c.V)(e, {
						postId: t
					});
					if (o && o.isQuarantined) return !1;
					const i = !n && !!Object(s.m)(e, {
						postId: t
					});
					return Object(a.Fb)(e, {
						postId: t
					}) || i
				}
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
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
				return f
			})), n.d(t, "e", (function() {
				return b
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/experiments/index.ts"),
				c = n("./src/reddit/selectors/experiments/presence.ts"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const i = 1e4,
				d = e => {
					if (Object(c.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.h
					});
					return t === r.l.VoteCountOnly || t === r.l.CommentCountOnly || t === r.l.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.d)(e) || Object(c.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.h
					});
					return t === r.l.VoteCountOnly || t === r.l.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.d)(e) || Object(c.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.h
					});
					return t === r.l.CommentCountOnly || t === r.l.VoteAndCommentCount
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
					const o = e.posts.models[n];
					if (Object(a.d)(e) || !o || o.isSponsored || o.isScoreHidden || o.score >= i || Object(c.a)(e)) return !1;
					const d = Object(s.d)(e, {
							experimentName: r.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.l.VoteCountOnly || l === r.l.VoteAndCommentCount
				},
				f = (e, t) => {
					let {
						postId: n
					} = t;
					const o = e.posts.models[n];
					if (Object(a.d)(e) || !o || o.isSponsored || o.numComments >= i || Object(c.a)(e)) return !1;
					const d = Object(s.d)(e, {
							experimentName: r.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.l.CommentCountOnly || l === r.l.VoteAndCommentCount
				},
				b = e => {
					if (Object(c.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.vc
					}) === r.cd.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: r.Ye
				}) === r.Kd
			}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			const r = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				s = e => e.gild.isAnonymous,
				c = e => e.gild.isIframed,
				a = e => e.gild.message,
				i = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "d", (function() {
				return v
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				c = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, n) => {
					const r = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == r ? void 0 : r.url) ? r.url : t ? e.staticIcon.url : e.icon.url
				},
				m = e => {
					let {
						award: t,
						size: n,
						prefersReducedMotion: r,
						postOrComment: s
					} = e;
					return t.awardSubType === o.d.Group ? (e => {
						let {
							award: t,
							size: n,
							prefersReducedMotion: r,
							postOrComment: o
						} = e, s = t;
						if ((null == o ? void 0 : o.awardCountsById) && o.awardCountsById[t.id] && t.tiers) {
							const e = o.awardCountsById[t.id];
							s = t.tiers.reduce((t, n) => e >= n.awardingsRequired ? n : t)
						}
						return u(s, r, n)
					})({
						award: t,
						size: n,
						prefersReducedMotion: r,
						postOrComment: s
					}) : u(t, r, n)
				},
				p = Object(r.a)((e, t) => {
					let {
						awards: n,
						minSize: r,
						postOrCommentId: o
					} = t;
					const c = Object(d.d)(e),
						i = l.find(e => e >= r),
						u = o ? Object(a.G)(e, {
							postId: o
						}) || Object(s.c)(e, {
							commentId: o
						}) : void 0;
					return n.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: i,
						prefersReducedMotion: c,
						postOrComment: u
					})), e), {})
				}),
				f = (e, t) => {
					let {
						award: n,
						minSize: r,
						postOrCommentId: o
					} = t;
					return n ? p(e, {
						awards: [n],
						minSize: r,
						postOrCommentId: o
					})[n.id] : void 0
				},
				b = (e, t) => {
					let {
						minSize: n,
						userName: r
					} = t;
					const o = Object(i.Cb)(e, {
						userName: r
					});
					if (o && o.awardedLastMonth && o.awardedLastMonth.topAward) return f(e, {
						award: o.awardedLastMonth.topAward,
						minSize: n
					})
				},
				v = e => {
					const t = Object(c.b)(e),
						n = Object(c.a)(e);
					return f(e, {
						award: t,
						postOrCommentId: n || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return c
			})), n.d(t, "t", (function() {
				return a
			})), n.d(t, "s", (function() {
				return i
			})), n.d(t, "v", (function() {
				return d
			})), n.d(t, "u", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "p", (function() {
				return b
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "y", (function() {
				return _
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "z", (function() {
				return y
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "j", (function() {
				return A
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return T
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: s.a
				}
			});
			const c = e => e.features.goldPurchase.purchaseModal.activePage,
				a = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				i = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(r.l)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				v = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				_ = e => e.features.goldPurchase.payment.savedCards,
				j = e => e.features.goldPurchase.payment.rememberCard,
				y = e => e.features.goldPurchase.payment.useSavedCard,
				C = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				w = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				x = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				E = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				A = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				I = e => e.features.goldPurchase.payment.stripeToken.pending,
				S = e => e.features.goldPurchase.payment.paypal.passthrough,
				T = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const s = e => {
					const t = Object(o.S)(e);
					if (c(e)) return !1;
					const {
						subscriptionsPinned: n
					} = e.user.prefs;
					return void 0 === n && !t || !!n
				},
				c = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== r.Sb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards,
				i = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				s = n("./src/reddit/actions/jsApi.ts");
			const c = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				i = "/r/redesign/wiki/jsapi";
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
						this.store.then(e => e.dispatch(s.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(c, `${r.a.redditUrl}${i}`, e))
					} catch (n) {
						return void console.error(c, `${r.a.redditUrl}${i}`, n)
					}
					this.store.then(e => {
						e.dispatch(s.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const r = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(r), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(r)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					o.a.read(() => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.049d228f2f9a7a1d135e.js.map