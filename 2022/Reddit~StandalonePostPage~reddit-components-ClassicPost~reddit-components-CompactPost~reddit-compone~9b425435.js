// https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.e9c0f759be6e6248af20.js
// Retrieved at 1/25/2022, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"], {
		"./src/lib/memoizeByReference/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/lodash/every.js"),
				o = s.n(n);

			function r(e) {
				let t = null,
					s = null;
				return (...n) => (null !== t && n.length === t.length && o()(n, (e, s) => e === t[s]) || (t = n, s = e(...n)), s)
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = "CREATOR_STATS_PENDING",
				o = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/CallToActionButton/index.m.less"),
				a = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement(i.b, d({
				className: Object(r.a)(a.a.CallToActionButton, e, {
					[a.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, s) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/hooks/usePrevious.ts"),
				i = s("./src/realtime/GQLSubscription/async.tsx"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts");
			const a = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var d = s("./src/reddit/components/CountAnimation/index.m.less"),
				l = s.n(d);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: s,
					incrementDelta: d,
					initialDelay: u,
					initialDisplayCount: p,
					isLoadTestOnly: b,
					onDataCB: v,
					postId: f,
					queryKey: x,
					queryVariables: h,
					shouldDisjointAnimation: C,
					subsequentRecurringDelay: O
				} = e, [E, j] = Object(n.useState)(!1), [_, g] = Object(n.useState)(!0), [w, S] = Object(n.useState)([]), [T, I] = Object(n.useState)(a(p).reverse()), N = Object(n.useRef)(!1), k = Object(n.useRef)(null), y = Object(n.useRef)(e => {}), F = Object(n.useRef)();
				y.current = Object(n.useCallback)(e => {
					let s = e || d();
					const n = [...T].reverse().join("");
					let o = parseInt(n) + s;
					o > t && (s = t - parseInt(n), o = t);
					const r = a(o).reverse();
					j(!1), S(T), I(r), g(!1), F.current = setTimeout(() => {
						j(!0)
					}, 0)
				}, [t, d, T]);
				const A = Object(n.useRef)(() => {}),
					P = Object(n.useRef)(),
					R = Object(n.useRef)();
				A.current = Object(n.useCallback)(() => {
					R.current = setTimeout(() => {
						y.current();
						const e = [...w].reverse().join("");
						parseInt(e) < t && A.current()
					}, O())
				}, [t, O, w]);
				const M = Object(n.useRef)(0),
					D = Object(n.useRef)(!1),
					L = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: s
							} = e, n = 1 !== s;
							t ? (D.current = !0, N.current || (N.current = !0, P.current = setTimeout(() => {
								y.current(), A.current()
							}, u())), M.current > 0 && (y.current(M.current), M.current = 0)) : n && (D.current = !1)
						})
					}, []);
				Object(c.a)(k, L);
				const [B, V] = Object(n.useState)(!1), W = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: s
						} = e, n = 1 !== s;
						t ? V(!0) : n && V(!1)
					})
				}, []), U = Object(n.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(c.a)(k, W, U.current);
				const H = Object(r.a)(t);
				Object(n.useEffect)(() => {
					if (void 0 !== H && H !== t) {
						const e = t - H;
						D.current ? y.current(e) : M.current += e
					}
					return () => {
						clearTimeout(P.current), clearTimeout(R.current), clearTimeout(F.current)
					}
				}, [t]);
				const G = Object(n.useCallback)(() => g(!0), [g]),
					K = 0 === w.length,
					q = _ || K,
					Y = Object(n.useRef)(((e, t) => `${t}_${e}_count_anim`)(f, s));
				return o.a.createElement(o.a.Fragment, null, !b && o.a.createElement("div", {
					className: l.a.countAnimation
				}, T.map((e, t) => {
					const s = ((e, t) => {
						let s = Math.abs(e);
						const n = Math.abs(t),
							o = [s];
						if (s === n) return o;
						let r = !0;
						for (; r;) ++s > 9 && (s = 0), o.push(s), s === n && (r = !1);
						return o
					})(w[t] || 0, e);
					return o.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: G,
						style: E && w.length > 0 && !_ ? {
							transform: `translateY(-${C&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(C?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, q ? o.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : s.map((e, t) => {
						const n = 0 === t || t === s.length - 1;
						if (!C || C && n) return o.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), o.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...T].reverse().join(""))), o.a.createElement("span", {
					ref: k
				}), B && o.a.createElement(i.a, {
					variables: h,
					onData: b ? m : v,
					queryKey: x,
					uniqueKey: Y.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts");
			const o = 16374492e5,
				r = 45 * n.B;
			var i;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available", e.Expired = "Expired"
			}(i || (i = {}));
			const c = e => e > o,
				a = (e, t) => {
					if (!c(e.created)) return i.NotAvailable;
					if ((e => {
							return e < Date.now() - r
						})(e.created)) return i.Expired;
					if (!t) return i.NotAvailableYet;
					const {
						shareAllCountTotals: s,
						shareCopyCountTotals: n,
						viewCountTotals: o,
						viewCountTrends: a
					} = t;
					return (null == s ? void 0 : s.availability.isAvailable) && (null == n ? void 0 : n.availability.isAvailable) && (null == o ? void 0 : o.availability.isAvailable) && (null == a ? void 0 : a.availability.isAvailable) ? !(null == o ? void 0 : o.totalCount) || o.totalCount < 10 ? i.NotAvailableYet : i.Available : i.NotAvailableYet
				}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = c.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(u.a)(s)) return null;
				const n = s && s.eventInfo,
					c = Object(l.a)(s),
					m = n && Object(i.c)(n.eventStart, n.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(a.a, {
					post: s
				}), !c && m && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: s,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(d);
			var u = e => o.a.createElement("i", {
				className: Object(c.a)(Object(a.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var m = e => o.a.createElement("i", {
					className: Object(c.a)(Object(a.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				v = s.n(b),
				f = s("./src/lib/lessComponent.tsx");
			const x = f.a.span("PostEventFutureText", v.a),
				h = f.a.span("PostEventPastText", v.a),
				C = f.a.span("PostEventNowText", v.a),
				O = f.a.span("Container", v.a),
				E = f.a.wrapped(u, "CalendarIcon", v.a),
				j = f.a.wrapped(m, "LiveIcon", v.a),
				_ = f.a.div("LoadingState", v.a);
			class g extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: c,
						eventStart: a
					} = s, d = Object(r.e)(a, n);
					let l, u;
					if (this.state.mounted || d === r.a.Live) l = o.a.createElement(p.c, {
						startTime: a,
						endTime: n,
						isLive: c
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(_, {
							className: e
						})
					}
					if (c) u = o.a.createElement(C, null, o.a.createElement(j, null), l);
					else if (d === r.a.Future) u = o.a.createElement(x, null, o.a.createElement(E, null), l);
					else {
						if (d !== r.a.Past) return null;
						u = o.a.createElement(h, null, o.a.createElement(E, null), l)
					}
					return o.a.createElement(O, {
						className: e
					}, u)
				}
			}
			t.a = g
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, s) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = s.n(d);
			t.a = e => i.a.createElement(c.i, {
				className: l.a.modalHeader
			}, i.a.createElement(c.q, null, e.title), i.a.createElement(a.a, {
				onClick: e.onClosePressed || o.a
			}, i.a.createElement(c.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				r = s.n(o);
			const i = n.a.div("Wrapper", r.a);
			t.a = i
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, s) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Flair/index.tsx"),
				a = s("./src/reddit/components/FlairPreview/index.m.less"),
				d = s.n(a);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				m = i.a.wrapped(c.b, "FlairComponent", d.a);
			t.a = e => e.flair ? r.a.createElement(u, null, r.a.createElement(l, null, n.fbt._("{placeholder}", [n.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), r.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : r.a.createElement(u, null, n.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, s) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/lodash/once.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				u = s("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = s.n(u);
			const p = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(a.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = o()((e = p) => Object(c.a)({
					getComponent: () => Object(l.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("FlairEdit")]).then(s.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				l = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/helpers/trackers/userFlair.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				v = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				f = s("./src/reddit/components/Flair/index.tsx"),
				x = s("./src/reddit/controls/RadioInput/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				C = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				O = s("./src/reddit/icons/svgs/Search/index.tsx"),
				E = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				j = s.n(E);
			class _ extends r.a.Component {
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
						selectedTemplateId: s
					} = this.props, {
						searchQuery: o
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), c = !!s && i.some(e => e.id === s);
					return r.a.createElement("div", {
						className: j.a.container
					}, r.a.createElement("div", {
						className: j.a.searchBoxWrapper
					}, r.a.createElement("input", {
						className: j.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), r.a.createElement(O.a, {
						className: j.a.searchIcon
					})), r.a.createElement(x.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: s
					}, i.map((e, t) => {
						const n = Object(u.c)(e),
							o = s === e.id || !c && 0 === t;
						return r.a.createElement(h.a, {
							className: j.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, r.a.createElement(f.b, {
							className: j.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && r.a.createElement(C.a, {
							className: j.a.pencil
						}))
					})))
				}
			}
			var g = s("./src/reddit/components/FlairSearch/index.m.less"),
				w = s.n(g);
			const S = Object(d.a)(e => e && Object(u.c)(e)),
				T = Object(c.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				I = Object(i.b)(T);
			t.a = I(e => {
				const {
					flairTemplateType: t,
					flair: s,
					className: o,
					onChange: i,
					subredditId: c,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: f
				} = e, x = Object(p.a)(), h = d && s && s.templateId && d[s.templateId] || void 0, C = Object(v.a)(), O = s || S(h);
				return r.a.createElement("div", {
					className: Object(a.a)(o, w.a.container)
				}, d && l && r.a.createElement(_, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								s = Object(u.c)(t);
							x(Object(m.b)({
								userFlair: t
							})), i(s)
						}
					},
					selectedTemplateId: h ? h.id : "",
					templateIds: l,
					templates: d
				}), O && h && (f || h.textEditable) && r.a.createElement("div", {
					className: w.a.flairEditSection
				}, r.a.createElement("div", {
					className: w.a.editLabel
				}, n.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && r.a.createElement("div", {
					className: w.a.restrictionHintText
				}, Object(u.k)(h)), r.a.createElement(C, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: O,
					flairTemplate: h,
					flairTemplateType: t,
					isFlairModOnly: h.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let s = e;
						t && (s = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), i(s)
					},
					subredditId: c
				})))
			})
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => "string" == typeof e.bannedBy && e.bannedBy === n.l || !!Object(o.b)(e, o.a.AUTOMOD),
				i = e => !!e.bannedBy && !!e.collapsedBecauseCrowdControl,
				c = e => !!e.bannedBy && !!Object(o.b)(e, o.a.HATEFUL_CONTENT),
				a = e => r(e) || i(e) || c(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./src/reddit/components/ModModeBanners/index.m.less"),
				a = s.n(c);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(a.a.banner, a.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./src/reddit/components/ModModeBanners/index.m.less"),
				a = s.n(c);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(a.a.banner, a.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(a.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.m.less"),
				E = s.n(O);
			const j = Object(p.a)(() => Object(r.c)({
				basePixelMetadata: Object(h.a)((e, {
					post: t
				}) => Object(v.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(v.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(f.c)(e).pageType
			}));
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: v,
						style: f,
						ref: h,
						shouldAddGalleryViewability: C = !0
					} = this.props, O = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: h,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, l, t, r, p))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && v(Object(a.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(E.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), j = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || j ? o.a.createElement(c.a, {
						post: l,
						trackDisplay: !0
					}, O) : l.media && Object(b.E)(l.media) && C ? o.a.createElement(u, {
						postId: l.id
					}, O) : O
				}
			}
			t.a = j(Object(C.a)(Object(m.c)(_)))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/components/CreatorStats/helpers.ts"),
				l = s("./src/reddit/selectors/creatorStats.ts"),
				u = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				m = s("./src/reddit/components/PostContent/viewCount.m.less"),
				p = s.n(m);
			t.a = ({
				className: e,
				post: t,
				showViewCount: s
			}) => {
				const {
					upvotePercentString: o,
					viewCountString: m
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						s = Object(a.b)(e.viewCount);
					return {
						upvotePercentString: n.fbt._("{percent upvoted}% Upvoted", [n.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: n.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [n.fbt._plural(e.viewCount, "number of views", s)], {
							hk: "rP01m"
						})
					}
				})(t), b = s && !!t.viewCount, v = Object(i.e)(e => Object(u.a)(e, t.id)), f = Object(i.e)(e => Object(l.a)(e, t.id)), x = Object(i.e)(e => Object(l.b)(e, t.id)), h = Object(d.c)(t, x), C = v && f && h === d.b.Available;
				return r.a.createElement("div", {
					className: Object(c.a)(p.a.viewCounts, e)
				}, b && r.a.createElement("span", null, m), b && !!t.upvoteRatio && r.a.createElement("span", {
					className: p.a.dotSpacer
				}), !!t.upvoteRatio && !C && r.a.createElement("span", null, o))
			}
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./node_modules/lodash/isEqual.js"),
				o = s.n(n),
				r = s("./src/reddit/constants/flair.ts"),
				i = s("./src/reddit/helpers/flair.ts"),
				c = s("./src/reddit/models/Flair/index.ts");
			const a = e => (e || []).find(e => e.type === c.f.Text || e.type === c.f.Image || e.type === c.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, s) => {
				if (s && !t) return {
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
				} : c > r.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(i.n)(t) && !Object(i.r)(n) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : o()(s, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(u.o)({
							postId: s,
							isFollowed: r
						}) : Object(u.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, o = this.state.isHovered, i = s.isFollowed;
					let c = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (c = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(a.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, c)
				}
			}
			const v = Object(i.b)(() => Object(c.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const r = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				i = ({
					children: e
				}) => {
					const [t, s] = Object(n.useState)(0), [i, c] = Object(n.useState)(!1), [a, d] = Object(n.useState)(0), l = {
						currentTime: t,
						setCurrentTime: s,
						isLive: i,
						setIsLive: c,
						totalTime: a,
						setTotalTime: d
					};
					return o.a.createElement(r.Provider, {
						value: l
					}, e)
				}
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/controls/Score/index.tsx"),
				m = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/VerticalVotes/index.m.less"),
				h = s.n(x);
			const C = Object(c.c)({
					isNightMode: f.W,
					isAnimatingUpvotePostId: v.k
				}),
				O = Object(i.b)(C),
				E = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class _ extends r.a.Component {
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
							isCountAnimShadowTestEnabled: s,
							isNightMode: o,
							isAnimatingUpvotePostId: i,
							isReadingIndicatorsExperimentEnabled: c,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: v,
							containerRef: f,
							model: x,
							postId: C
						} = e,
						O = E(e),
						_ = j(e),
						g = x.voteState,
						w = i === C;
					return r.a.createElement("div", {
						className: Object(a.a)(h.a.votesContainer, e.className),
						id: `vote-arrows-${x.id}`,
						ref: f
					}, O ? r.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": g === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: g
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": g === b.a.upvoted,
						className: Object(a.a)(l.n, v, {
							[h.a.bounceUp]: w
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, r.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: g
					})), !e.compact && p && r.a.createElement(u.a, {
						className: Object(a.a)(h.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: g,
						isReadingIndicatorsExperimentEnabled: c,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!s,
						postId: C
					}), _ ? r.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": g === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: g
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": g === b.a.downvoted,
						className: Object(a.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: g
					})))
				}
			}
			const g = Object(d.a)(O(_));
			t.a = g
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, s) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/keycodes.ts"),
				c = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				a = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = s.n(l);
			class m extends o.a.Component {
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
					return e.hidden ? null : o.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(r.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? o.a.createElement(a.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : o.a.createElement(c.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/constants/keycodes.ts");
			class i extends o.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props;
						t || this.state.value !== e && (s(e), this.setState({
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
							onChange: s
						} = this.props, {
							value: n
						} = this.state;
						if (t) return;
						const o = e.key === r.b.ArrowUp,
							i = e.key === r.b.ArrowDown;
						if (o || i) {
							const t = this.getValues();
							if (!t.length) return;
							const r = n ? t.indexOf(n) : 0,
								i = t[((o ? r - 1 : r + 1) + t.length) % t.length];
							s(i), this.setState({
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
					return o.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, o.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), o.a.Children.map(e.children, (s, n) => {
						const r = 0 === n,
							i = s.props.value === t,
							c = null !== t ? i ? 0 : -1 : r ? 0 : -1;
						return o.a.cloneElement(s, {
							disabled: e.disabled,
							onClick: e => this.handleClick(s.props.value),
							selected: i,
							tabIndex: c
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./node_modules/react/index.js"),
				a = s.n(c),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CountAnimation/index.tsx"),
				m = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				b = s("./src/reddit/constants/colors.ts"),
				v = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				f = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				x = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				E = s("./src/reddit/selectors/meta.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				_ = s("./node_modules/reselect/es/index.js"),
				g = s("./src/reddit/controls/Score/index.m.less"),
				w = s.n(g);
			const S = {
					placement: "right"
				},
				T = e => e.voteState === C.a.downvoted ? Object(h.a)(e).voteText.downvote : e.voteState === C.a.upvoted ? Object(h.a)(e).voteText.upvote : Object(f.a)(Object(v.a)(e)),
				I = Object(_.c)({
					locale: e => Object(E.i)(e),
					post: (e, {
						isReadingIndicatorsExperimentEnabled: t,
						postId: s
					}) => {
						if (t && s) return Object(j.H)(e, {
							postId: s
						})
					}
				}),
				N = () => 0,
				k = Object(d.b)(I),
				y = Object(r.a)(e => {
					const t = {
							color: e.light ? b.a.lightboxHeaderText : T(e)
						},
						{
							score: s,
							postId: r = "",
							locale: v,
							isVoteCountAnimation: f,
							isCountAnimShadowTestEnabled: h,
							isReadingIndicatorsExperimentEnabled: C,
							post: E
						} = e,
						j = Object(d.d)(),
						_ = null == v ? void 0 : v.startsWith("en"),
						g = e.isScoreHidden ? _ ? n.fbt._("Vote", null, {
							hk: "2TMson"
						}) : a.a.createElement("span", {
							className: w.a.dot
						}, "•") : Object(i.b)(s),
						I = Object(c.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && j(Object(l.I)({
								postId: r,
								delta: t
							}))
						}, [j, r]),
						k = Object(c.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: r
								}
							}
						}),
						y = !e.isScoreHidden && f && s < O.a,
						F = Object(x.a)(S),
						A = s < 0 ? 0 : s;
					return a.a.createElement("div", {
						className: Object(o.a)(w.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: C ? F.show : void 0,
						onMouseLeave: C ? F.hide : void 0,
						ref: C ? F.target.ref : void 0
					}, (y || h) && a.a.createElement(a.a.Fragment, null, a.a.createElement(u.b, {
						initialDisplayCount: A,
						countToUpperBound: A,
						initialDelay: N,
						subsequentRecurringDelay: N,
						incrementDelta: N,
						shouldDisjointAnimation: !0,
						postId: r,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: k.current,
						onDataCB: I,
						isLoadTestOnly: h && !y
					})), !y && g, C && E && a.a.createElement(m.a, F, a.a.createElement(p.a, {
						className: w.a.viewCount,
						post: E,
						showViewCount: !1
					})))
				});
			t.a = k(y)
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/telemetry/index.ts"),
				r = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = s("./src/reddit/selectors/platform.ts"),
				c = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					profile: c.P(e),
					screen: c.Y(e),
					subreddit: c.hb(e)
				}),
				d = (e, t, s) => n => ({
					source: Object(i.i)(n) || s ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...a(n),
					post: c.G(n, e)
				}),
				l = (e, t, s, n) => o => {
					const i = s ? c.h(o, s) : null,
						{
							sortToUse: a
						} = Object(r.a)(o, e);
					return {
						...d(e, t, n)(o),
						comment: i,
						listing: {
							sort: a
						}
					}
				},
				u = (e, t) => s => {
					const n = c.i(s);
					return n ? d(n.id, e, t)(s) : {
						source: Object(i.i)(s) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...a(s)
					}
				},
				m = (e, t) => s => Object(o.a)({
					...d(e, t)(s),
					...c.m(s)
				}),
				p = e => t => ({
					source: "id_card",
					action: n.c.CLICK,
					noun: e,
					...a(t),
					post: c.i(t),
					userSubreddit: c.qb(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return i
			})), s.d(t, "j", (function() {
				return c
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "l", (function() {
				return x
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: Object(o.Y)(e),
					profile: Object(o.P)(e),
					subreddit: Object(o.hb)(e),
					userSubreddit: Object(o.qb)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...r(t)
				}),
				c = (e, t) => s => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.G)(s, t),
					...r(s)
				}),
				a = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(o.G)(s, t),
					comment: Object(o.h)(s, t),
					...r(s)
				}),
				d = (e, t) => s => ({
					source: "comment",
					action: n.c.UNDO,
					noun: e,
					post: Object(o.G)(s, t),
					comment: Object(o.h)(s, t),
					...r(s)
				}),
				l = (e, t) => s => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(o.G)(s, t),
					comment: Object(o.h)(s, t),
					...r(s)
				}),
				u = (e, t) => s => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(o.G)(s, t),
					comment: Object(o.h)(s, t),
					...r(s)
				}),
				m = (e, t) => s => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.G)(s, t),
					comment: Object(o.h)(s, t),
					...r(s)
				}),
				p = (e, t) => s => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(o.h)(s, t),
					post: Object(o.G)(s, t),
					...r(s)
				}),
				b = (e, t) => s => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(o.G)(s, t),
					...r(s)
				}),
				v = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(o.G)(s, t),
					subreddit: Object(o.kb)(s, t)
				}),
				f = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(o.h)(s, t),
					post: Object(o.G)(s, t),
					subreddit: Object(o.kb)(s, t)
				}),
				x = (e, t, s, n) => r => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(o.G)(r, s),
					subreddit: Object(o.kb)(r, s),
					actionInfo: {
						reason: n
					},
					...e && {
						comment: Object(o.h)(r, s)
					}
				})
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "o", (function() {
				return u
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "m", (function() {
				return f
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "p", (function() {
				return C
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "q", (function() {
				return j
			})), s.d(t, "k", (function() {
				return _
			})), s.d(t, "l", (function() {
				return g
			})), s.d(t, "i", (function() {
				return w
			})), s.d(t, "d", (function() {
				return S
			}));
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/helpers/trackers/postEvent.ts"),
				c = s("./src/reddit/selectors/platform.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(o || (o = {}));
			const d = e => t => ({
					source: n.collection,
					noun: o.post,
					...m(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => s => ({
					source: n.collection,
					noun: t ? o.unfollow : o.follow,
					...m(s, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => s => ({
					source: i.a.postEvent,
					noun: t ? o.unfollow : o.follow,
					...m(s, e)
				}),
				m = (e, t) => {
					const s = {
						...a.m(e),
						action: r.c.CLICK,
						subreddit: a.hb(e)
					};
					return void 0 === t ? s : {
						...s,
						post: a.G(e, t),
						postCollection: a.I(e, {
							postId: t
						}),
						postEvent: a.J(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...x(e),
					action: r.c.VIEW,
					noun: o.collectionEducation
				}),
				b = e => ({
					...x(e),
					action: r.c.CLICK,
					noun: o.collectionEducationGotIt
				}),
				v = e => ({
					...x(e),
					action: r.c.VIEW,
					noun: o.eventEducation
				}),
				f = e => ({
					...x(e),
					action: r.c.CLICK,
					noun: o.eventEducationGotIt
				}),
				x = e => ({
					...a.m(e),
					subreddit: a.hb(e),
					source: n.postComposer
				}),
				h = (e, t) => s => ({
					...m(s, e),
					source: t || n.postOverflowMenu,
					noun: o.collectionAddPost
				}),
				C = e => t => ({
					...m(t, e),
					source: n.collectionComposer,
					noun: o.collectionRemovePost
				}),
				O = () => e => ({
					...m(e),
					source: n.collectionComposer,
					noun: o.collectionCancel
				}),
				E = () => e => {
					const t = Object(c.o)(e) || void 0;
					return {
						...m(e, t),
						source: n.collectionComposer,
						noun: o.collectionCreate
					}
				},
				j = () => e => ({
					...m(e),
					source: n.collectionComposer,
					noun: o.collectionSelect
				}),
				_ = e => t => ({
					...a.m(t),
					subreddit: a.hb(t),
					source: n.collectionComposer,
					action: r.c.CLICK,
					noun: o.collectionDelete,
					postCollection: a.H(t, {
						collectionId: e
					})
				}),
				g = e => t => ({
					...m(t),
					source: n.collectionComposer,
					noun: o.collectionEdit,
					postCollection: a.H(t, {
						collectionId: e
					})
				}),
				w = e => t => ({
					...m(t, e),
					source: n.collectionComposer,
					noun: o.startEvent
				}),
				S = () => e => {
					const t = Object(c.o)(e) || void 0;
					return {
						...m(e, t),
						source: n.collectionComposer,
						action: r.c.VIEW,
						noun: o.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return C
			}));
			var n, o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/timezone/index.ts"),
				c = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/models/PostCreationForm/index.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/postCreations.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const p = e => u.c(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...u.m(e),
						source: n.postComposer,
						action: c.c.CLICK,
						noun: "event_create",
						subreddit: u.hb(e)
					})
				},
				v = e => {
					Object(m.a)({
						...u.m(e),
						source: n.postComposer,
						action: c.c.CLICK,
						noun: "event_edit",
						subreddit: u.hb(e),
						postEvent: O(e),
						postComposer: E(e)
					})
				},
				f = () => e => ({
					source: n.eventComposer,
					action: c.c.VIEW,
					noun: c.b.SCREEN,
					actionInfo: p(e),
					postEvent: O(e)
				}),
				x = e => t => ({
					...g(t, Object(d.o)(t)),
					source: n.postComposer,
					noun: "apply",
					postComposer: j(e)
				}),
				h = () => e => ({
					...g(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				C = e => t => ({
					...g(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: E(t),
					postEvent: _(e)
				}),
				O = e => {
					const t = Object(l.p)(e);
					return t && _(t)
				},
				E = e => j(Object(l.p)(e)),
				j = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === a.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / o.Rb : void 0
					}
				},
				_ = e => {
					const t = Object(i.f)(e.startDate).getTime() / o.Rb,
						s = Object(i.f)(e.endDate).getTime() / o.Rb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(r.e)(t, s)
					}
				},
				g = (e, t) => {
					const s = {
						source: n.eventComposer,
						action: c.c.CLICK,
						subreddit: u.hb(e)
					};
					return t ? {
						...s,
						post: u.G(e, t),
						postEvent: u.J(e, {
							postId: t
						}),
						postCollection: u.I(e, {
							postId: t
						})
					} : s
				}
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			}));
			var n = s("./src/reddit/helpers/flair.ts"),
				o = s("./src/reddit/selectors/gold/powerups/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...r.m(e)
				}),
				c = e => t => {
					const s = r.hb(t),
						i = Object(o.x)(t, {
							subredditId: null == s ? void 0 : s.id
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
						...r.m(t),
						subreddit: s,
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
					...r.m(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: r.hb(t),
					...r.m(t)
				})
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
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
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				c = s.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", a({}, e, {
				className: Object(r.a)(c.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/Inline/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("inlineRow", r.a)
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function o(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT"
				}(n || (n = {}))
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				o = s("./src/reddit/actions/creatorStats/constants.ts");
			const r = {};
			var i = (e = r, t) => {
				switch (t.type) {
					case o.a:
						const {
							postStats: s
						} = t.payload;
						return {
							...e, ...s
						};
					default:
						return e
				}
			};
			const c = {};
			var a = (e = c, t) => {
				switch (t.type) {
					case o.a:
						const {
							subredditKarma: s
						} = t.payload;
						return {
							...e, ...s
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
		"./src/reddit/selectors/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/creatorStats/index.ts"),
				r = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/user.ts");
			Object(n.a)({
				features: {
					creatorStats: o.a
				}
			});
			const a = (e, t) => {
					var s, n;
					return null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === n ? void 0 : n.postStats[t]
				},
				d = (e, t) => {
					var s, n, o;
					const r = null === (o = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === n ? void 0 : n.subredditKarma[t]) || void 0 === o ? void 0 : o.karma;
					if (!r) return;
					const {
						fromComments: i,
						fromPosts: c
					} = r;
					return {
						fromComments: i,
						fromPosts: c
					}
				},
				l = (e, t) => {
					const s = Object(i.H)(e, {
						postId: t
					});
					return !(!s || s.isSponsored) && (Object(c.pb)(e, {
						postId: t
					}) || !!Object(r.l)(e, {
						postId: t
					}))
				}
		},
		"./src/reddit/selectors/experiments/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: e => ((e, t) => Object(i.pb)(e, {
						postId: t
					}) || !!Object(r.l)(e, {
						postId: t
					}) || Object(i.G)(e))(e, t),
					experimentName: n.Q
				}) === n.Wc
			}
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const c = e => Object(r.c)(e, {
					experimentName: o.ke,
					experimentEligibilitySelector: r.a
				}),
				a = (e, t) => t === o.se.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(n.a)(i.H, c, (e, t) => a(e, t));
			Object(n.a)((e, t) => t, c, (e, t) => a(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.e9c0f759be6e6248af20.js.map