// https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.e8252b9e2bf64356298c.js
// Retrieved at 2/23/2022, 10:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"], {
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/lodash/every.js"),
				o = n.n(s);

			function r(e) {
				let t = null,
					n = null;
				return (...s) => (null !== t && s.length === t.length && o()(s, (e, n) => e === t[n]) || (t = s, n = e(...s)), n)
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "CREATOR_STATS_PENDING",
				o = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = n.n(s);
			const r = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/CallToActionButton/index.m.less"),
				a = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/hooks/usePrevious.ts"),
				i = n("./src/realtime/GQLSubscription/async.tsx"),
				c = n("./src/reddit/hooks/useIntersectionObserver.ts");
			const a = e => {
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
					isLoadTestOnly: b,
					onDataCB: v,
					postId: f,
					queryKey: x,
					queryVariables: h,
					shouldDisjointAnimation: O,
					subsequentRecurringDelay: C
				} = e, [j, E] = Object(s.useState)(!1), [_, S] = Object(s.useState)(!0), [g, w] = Object(s.useState)([]), [T, N] = Object(s.useState)(a(p).reverse()), I = Object(s.useRef)(!1), k = Object(s.useRef)(null), y = Object(s.useRef)(e => {}), A = Object(s.useRef)();
				y.current = Object(s.useCallback)(e => {
					let n = e || d();
					const s = [...T].reverse().join("");
					let o = parseInt(s) + n;
					o > t && (n = t - parseInt(s), o = t);
					const r = a(o).reverse();
					E(!1), w(T), N(r), S(!1), A.current = setTimeout(() => {
						E(!0)
					}, 0)
				}, [t, d, T]);
				const F = Object(s.useRef)(() => {}),
					P = Object(s.useRef)(),
					R = Object(s.useRef)();
				F.current = Object(s.useCallback)(() => {
					R.current = setTimeout(() => {
						y.current();
						const e = [...g].reverse().join("");
						parseInt(e) < t && F.current()
					}, C())
				}, [t, C, g]);
				const M = Object(s.useRef)(0),
					D = Object(s.useRef)(!1),
					L = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, s = 1 !== n;
							t ? (D.current = !0, I.current || (I.current = !0, P.current = setTimeout(() => {
								y.current(), F.current()
							}, u())), M.current > 0 && (y.current(M.current), M.current = 0)) : s && (D.current = !1)
						})
					}, []);
				Object(c.a)(k, L);
				const [V, B] = Object(s.useState)(!1), W = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, s = 1 !== n;
						t ? B(!0) : s && B(!1)
					})
				}, []), U = Object(s.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(c.a)(k, W, U.current);
				const H = Object(r.a)(t);
				Object(s.useEffect)(() => {
					if (void 0 !== H && H !== t) {
						const e = t - H;
						D.current ? y.current(e) : M.current += e
					}
					return () => {
						clearTimeout(P.current), clearTimeout(R.current), clearTimeout(A.current)
					}
				}, [t]);
				const J = Object(s.useCallback)(() => S(!0), [S]),
					K = 0 === g.length,
					G = _ || K,
					q = Object(s.useRef)(((e, t) => `${t}_${e}_count_anim`)(f, n));
				return o.a.createElement(o.a.Fragment, null, !b && o.a.createElement("div", {
					className: l.a.countAnimation
				}, T.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const s = Math.abs(t),
							o = [n];
						if (n === s) return o;
						let r = !0;
						for (; r;) ++n > 9 && (n = 0), o.push(n), n === s && (r = !1);
						return o
					})(g[t] || 0, e);
					return o.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: J,
						style: j && g.length > 0 && !_ ? {
							transform: `translateY(-${O&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(O?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, G ? o.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : n.map((e, t) => {
						const s = 0 === t || t === n.length - 1;
						if (!O || O && s) return o.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), o.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...T].reverse().join(""))), o.a.createElement("span", {
					ref: k
				}), V && o.a.createElement(i.a, {
					variables: h,
					onData: b ? m : v,
					queryKey: x,
					uniqueKey: q.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts");
			const o = 16374492e5,
				r = 45 * s.B;
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
						shareAllCountTotals: n,
						shareCopyCountTotals: s,
						viewCountTotals: o,
						viewCountTrends: a
					} = t;
					return (null == n ? void 0 : n.availability.isAvailable) && (null == s ? void 0 : s.availability.isAvailable) && (null == o ? void 0 : o.availability.isAvailable) && (null == a ? void 0 : a.availability.isAvailable) ? !(null == o ? void 0 : o.totalCount) || o.totalCount < 10 ? i.NotAvailableYet : i.Available : i.NotAvailableYet
				}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				m = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(m);
			const b = c.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(u.a)(n)) return null;
				const s = n && n.eventInfo,
					c = Object(l.a)(n),
					m = s && Object(i.c)(s.eventStart, s.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(a.a, {
					post: n
				}), !c && m && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(d);
			var u = e => o.a.createElement("i", {
				className: Object(c.a)(Object(a.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var m = e => o.a.createElement("i", {
					className: Object(c.a)(Object(a.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				b = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				v = n.n(b),
				f = n("./src/lib/lessComponent.tsx");
			const x = f.a.span("PostEventFutureText", v.a),
				h = f.a.span("PostEventPastText", v.a),
				O = f.a.span("PostEventNowText", v.a),
				C = f.a.span("Container", v.a),
				j = f.a.wrapped(u, "CalendarIcon", v.a),
				E = f.a.wrapped(m, "LiveIcon", v.a),
				_ = f.a.div("LoadingState", v.a);
			class S extends s.Component {
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
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: s,
						eventIsLive: c,
						eventStart: a
					} = n, d = Object(r.e)(a, s);
					let l, u;
					if (this.state.mounted || d === r.a.Live) l = o.a.createElement(p.c, {
						startTime: a,
						endTime: s,
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
					if (c) u = o.a.createElement(O, null, o.a.createElement(E, null), l);
					else if (d === r.a.Future) u = o.a.createElement(x, null, o.a.createElement(j, null), l);
					else {
						if (d !== r.a.Past) return null;
						u = o.a.createElement(h, null, o.a.createElement(j, null), l)
					}
					return o.a.createElement(C, {
						className: e
					}, u)
				}
			}
			t.a = S
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => i.a.createElement(c.i, {
				className: l.a.modalHeader
			}, i.a.createElement(c.q, null, e.title), i.a.createElement(a.a, {
				onClick: e.onClosePressed || o.a
			}, i.a.createElement(c.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				r = n.n(o);
			const i = s.a.div("Wrapper", r.a);
			t.a = i
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Flair/index.tsx"),
				a = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(a);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				m = i.a.wrapped(c.b, "FlairComponent", d.a);
			t.a = e => e.flair ? r.a.createElement(u, null, r.a.createElement(l, null, s.fbt._("{placeholder}", [s.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), r.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : r.a.createElement(u, null, s.fbt._("No flair selected", null, {
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
				return b
			}));
			var s = n("./node_modules/lodash/once.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(a.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = o()((e = p) => Object(c.a)({
					getComponent: () => Object(l.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				v = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/index.tsx"),
				O = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				C = n("./src/reddit/helpers/trackers/postComposer.ts"),
				j = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				E = n("./src/reddit/icons/svgs/Search/index.tsx"),
				_ = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				S = n.n(_);
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}, this.onSearchClick = () => {
						this.props.sendEvent(Object(C.n)())
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: n
					} = this.props, {
						searchQuery: o
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), c = !!n && i.some(e => e.id === n);
					return r.a.createElement("div", {
						className: S.a.container
					}, r.a.createElement("div", {
						className: S.a.searchBoxWrapper
					}, r.a.createElement("input", {
						className: S.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: s.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), r.a.createElement(E.a, {
						className: S.a.searchIcon
					})), r.a.createElement(h.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, i.map((e, t) => {
						const s = Object(u.c)(e),
							o = n === e.id || !c && 0 === t;
						return r.a.createElement(O.a, {
							className: S.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, r.a.createElement(f.b, {
							className: S.a.flairComponent,
							flair: s,
							forceSmallEmojis: !0
						}), e.textEditable && r.a.createElement(j.a, {
							className: S.a.pencil
						}))
					})))
				}
			}
			var w = Object(x.c)(g),
				T = n("./src/reddit/components/FlairSearch/index.m.less"),
				N = n.n(T);
			const I = Object(d.a)(e => e && Object(u.c)(e)),
				k = Object(c.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				y = Object(i.b)(k);
			t.a = y(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: o,
					onChange: i,
					subredditId: c,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: f
				} = e, x = Object(p.a)(), h = d && n && n.templateId && d[n.templateId] || void 0, O = Object(v.a)(), C = n || I(h);
				return r.a.createElement("div", {
					className: Object(a.a)(o, N.a.container)
				}, d && l && r.a.createElement(w, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							x(Object(m.b)({
								userFlair: t
							})), i(n)
						}
					},
					selectedTemplateId: h ? h.id : "",
					templateIds: l,
					templates: d
				}), C && h && (f || h.textEditable) && r.a.createElement("div", {
					className: N.a.flairEditSection
				}, r.a.createElement("div", {
					className: N.a.editLabel
				}, s.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && r.a.createElement("div", {
					className: N.a.restrictionHintText
				}, Object(u.k)(h)), r.a.createElement(O, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: C,
					flairTemplate: h,
					flairTemplateType: t,
					isFlairModOnly: h.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), i(n)
					},
					subredditId: c
				})))
			})
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => !e.isApproved && !!Object(s.b)(e, s.a.AUTOMOD),
				r = e => !e.isApproved && !!Object(s.b)(e, s.a.CROWD_CONTROL),
				i = e => !e.isApproved && !!Object(s.b)(e, s.a.HATEFUL_CONTENT),
				c = e => o(e) || r(e) || i(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./src/reddit/components/ModModeBanners/index.m.less"),
				a = n.n(c);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(a.a.banner, a.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
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
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./src/reddit/components/ModModeBanners/index.m.less"),
				a = n.n(c);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(a.a.banner, a.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
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
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				c = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						r = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(a.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/lib/classNames/index.ts"),
				h = n("./src/lib/objectSelector/index.ts"),
				O = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				C = n("./src/reddit/components/PostContainer/index.m.less"),
				j = n.n(C);
			const E = Object(p.a)(() => Object(r.c)({
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
				pageType: e => Object(f.d)(e).pageType
			}));
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: v,
						style: f,
						ref: h,
						shouldAddGalleryViewability: O = !0
					} = this.props, C = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: h,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => m && m(n, l, t, r, p))(n), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && v(Object(a.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(j.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), E = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || E ? o.a.createElement(c.a, {
						post: l,
						trackDisplay: !0
					}, C) : l.media && Object(b.E)(l.media) && O ? o.a.createElement(u, {
						postId: l.id
					}, C) : C
				}
			}
			t.a = E(Object(O.a)(Object(m.c)(_)))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/CreatorStats/helpers.ts"),
				l = n("./src/reddit/selectors/creatorStats.ts"),
				u = n("./src/reddit/selectors/experiments/creatorStats.ts"),
				m = n("./src/reddit/components/PostContent/viewCount.m.less"),
				p = n.n(m);
			t.a = ({
				className: e,
				post: t,
				showViewCount: n
			}) => {
				const {
					upvotePercentString: o,
					viewCountString: m
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						n = Object(a.b)(e.viewCount);
					return {
						upvotePercentString: s.fbt._("{percent upvoted}% Upvoted", [s.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: s.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [s.fbt._plural(e.viewCount, "number of views", n)], {
							hk: "rP01m"
						})
					}
				})(t), b = n && !!t.viewCount, v = Object(i.e)(e => Object(u.a)(e, t.id)), f = Object(i.e)(e => Object(l.a)(e, t.id)), x = Object(i.e)(e => Object(l.b)(e, t.id)), h = Object(d.c)(t, x), O = v && f && h === d.b.Available;
				return r.a.createElement("div", {
					className: Object(c.a)(p.a.viewCounts, e)
				}, b && r.a.createElement("span", null, m), b && !!t.upvoteRatio && r.a.createElement("span", {
					className: p.a.dotSpacer
				}), !!t.upvoteRatio && !O && r.a.createElement("span", null, o))
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
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./node_modules/lodash/isEqual.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/flair.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				c = n("./src/reddit/models/Flair/index.ts");
			const a = e => (e || []).find(e => e.type === c.f.Text || e.type === c.f.Image || e.type === c.f.Richtext);
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
				const s = e && t.templateId ? e[t.templateId] : void 0;
				if (!s) return {
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
				} : Object(i.n)(t) && !Object(i.r)(s) ? {
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
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				m = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(m);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: o
						} = this.props, r = !!s;
						o(e ? Object(u.o)({
							postId: n,
							isFollowed: r
						}) : Object(u.g)({
							postId: n,
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
						post: n
					} = this.props, o = this.state.isHovered, i = n.isFollowed;
					let c = i ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (c = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(a.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
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
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			const r = Object(s.createContext)({
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
					const [t, n] = Object(s.useState)(0), [i, c] = Object(s.useState)(!1), [a, d] = Object(s.useState)(0), l = {
						currentTime: t,
						setCurrentTime: n,
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
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				m = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/VerticalVotes/index.m.less"),
				h = n.n(x);
			const O = Object(c.c)({
					isNightMode: f.bb,
					isAnimatingUpvotePostId: v.k
				}),
				C = Object(i.b)(O),
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				E = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
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
							isCountAnimShadowTestEnabled: n,
							isNightMode: o,
							isAnimatingUpvotePostId: i,
							shouldShowUpvoteRatioOnHover: c,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: v,
							containerRef: f,
							model: x,
							postId: O
						} = e,
						C = j(e),
						_ = E(e),
						S = x.voteState,
						g = i === O;
					return r.a.createElement("div", {
						className: Object(a.a)(h.a.votesContainer, e.className),
						id: `vote-arrows-${x.id}`,
						ref: f
					}, C ? r.a.createElement(m.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": S === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: S
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": S === b.a.upvoted,
						className: Object(a.a)(l.n, v, {
							[h.a.bounceUp]: g
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, r.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: S
					})), !e.compact && p && r.a.createElement(u.a, {
						className: Object(a.a)(h.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: S,
						shouldShowUpvoteRatioOnHover: c,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!n,
						postId: O
					}), _ ? r.a.createElement(m.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": S === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: S
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": S === b.a.downvoted,
						className: Object(a.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: S
					})))
				}
			}
			const S = Object(d.a)(C(_));
			t.a = S
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				a = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
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
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/keycodes.ts");
			class i extends o.a.Component {
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
							value: s
						} = this.state;
						if (t) return;
						const o = e.key === r.b.ArrowUp,
							i = e.key === r.b.ArrowDown;
						if (o || i) {
							const t = this.getValues();
							if (!t.length) return;
							const r = s ? t.indexOf(s) : 0,
								i = t[((o ? r - 1 : r + 1) + t.length) % t.length];
							n(i), this.setState({
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
					}), o.a.Children.map(e.children, (n, s) => {
						const r = 0 === s,
							i = n.props.value === t,
							c = null !== t ? i ? 0 : -1 : r ? 0 : -1;
						return o.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: i,
							tabIndex: c
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/components/CountAnimation/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = n("./src/reddit/components/PostContent/ViewCount.tsx"),
				b = n("./src/reddit/constants/colors.ts"),
				v = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				f = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				x = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				j = n("./src/reddit/selectors/meta.ts"),
				E = n("./src/reddit/selectors/posts.ts"),
				_ = n("./node_modules/reselect/es/index.js"),
				S = n("./src/reddit/controls/Score/index.m.less"),
				g = n.n(S);
			const w = {
					placement: "right"
				},
				T = e => e.voteState === O.a.downvoted ? Object(h.a)(e).voteText.downvote : e.voteState === O.a.upvoted ? Object(h.a)(e).voteText.upvote : Object(f.a)(Object(v.a)(e)),
				N = Object(_.c)({
					locale: e => Object(j.i)(e),
					post: (e, {
						shouldShowUpvoteRatioOnHover: t,
						postId: n
					}) => {
						if (t && n) return Object(E.G)(e, {
							postId: n
						})
					}
				}),
				I = () => 0,
				k = Object(d.b)(N),
				y = Object(r.a)(e => {
					const t = {
							color: e.light ? b.a.lightboxHeaderText : T(e)
						},
						{
							score: n,
							postId: r = "",
							locale: v,
							isVoteCountAnimation: f,
							isCountAnimShadowTestEnabled: h,
							shouldShowUpvoteRatioOnHover: O,
							post: j
						} = e,
						E = Object(d.d)(),
						_ = null == v ? void 0 : v.startsWith("en"),
						S = e.isScoreHidden ? _ ? s.fbt._("Vote", null, {
							hk: "2TMson"
						}) : a.a.createElement("span", {
							className: g.a.dot
						}, "•") : Object(i.b)(n),
						N = Object(c.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && E(Object(l.I)({
								postId: r,
								delta: t
							}))
						}, [E, r]),
						k = Object(c.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: r
								}
							}
						}),
						y = !e.isScoreHidden && f && n < C.a,
						A = Object(x.a)(w),
						F = n < 0 ? 0 : n;
					return a.a.createElement("div", {
						className: Object(o.a)(g.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: O ? A.show : void 0,
						onMouseLeave: O ? A.hide : void 0,
						ref: O ? A.target.ref : void 0
					}, (y || h) && a.a.createElement(a.a.Fragment, null, a.a.createElement(u.b, {
						initialDisplayCount: F,
						countToUpperBound: F,
						initialDelay: I,
						subsequentRecurringDelay: I,
						incrementDelta: I,
						shouldDisjointAnimation: !0,
						postId: r,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: k.current,
						onDataCB: N,
						isLoadTestOnly: h && !y
					})), !y && S, O && j && a.a.createElement(m.a, A, a.a.createElement(p.a, {
						className: g.a.viewCount,
						post: j,
						showViewCount: !1
					})))
				});
			t.a = k(y)
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.posts
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
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					profile: c.S(e),
					screen: c.bb(e),
					subreddit: c.jb(e)
				}),
				d = (e, t, n) => s => ({
					source: Object(i.i)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...a(s),
					post: c.J(s, e)
				}),
				l = (e, t, n, s) => o => {
					const i = n ? c.i(o, n) : null,
						{
							sortToUse: a
						} = Object(r.a)(o, e);
					return {
						...d(e, t, s)(o),
						comment: i,
						listing: {
							sort: a
						}
					}
				},
				u = (e, t) => n => {
					const s = c.k(n);
					return s ? d(s.id, e, t)(n) : {
						source: Object(i.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...a(n)
					}
				},
				m = (e, t) => n => Object(o.a)({
					...d(e, t)(n),
					...c.o(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...a(t),
					post: c.k(t),
					userSubreddit: c.tb(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "l", (function() {
				return x
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: Object(o.bb)(e),
					profile: Object(o.S)(e),
					subreddit: Object(o.jb)(e),
					userSubreddit: Object(o.tb)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...r(t)
				}),
				c = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.J)(n, t),
					...r(n)
				}),
				a = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(o.J)(n, t),
					comment: Object(o.i)(n, t),
					...r(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: s.c.UNDO,
					noun: e,
					post: Object(o.J)(n, t),
					comment: Object(o.i)(n, t),
					...r(n)
				}),
				l = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(o.J)(n, t),
					comment: Object(o.i)(n, t),
					...r(n)
				}),
				u = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(o.J)(n, t),
					comment: Object(o.i)(n, t),
					...r(n)
				}),
				m = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.J)(n, t),
					comment: Object(o.i)(n, t),
					...r(n)
				}),
				p = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(o.i)(n, t),
					post: Object(o.J)(n, t),
					...r(n)
				}),
				b = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(o.J)(n, t),
					...r(n)
				}),
				v = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(o.J)(n, t),
					subreddit: Object(o.mb)(n, t)
				}),
				f = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(o.i)(n, t),
					post: Object(o.J)(n, t),
					subreddit: Object(o.mb)(n, t)
				}),
				x = (e, t, n, s) => r => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(o.J)(r, n),
					subreddit: Object(o.mb)(r, n),
					actionInfo: {
						reason: s
					},
					...e && {
						comment: Object(o.i)(r, n)
					}
				})
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "d", (function() {
				return w
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/trackers/postEvent.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(s || (s = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(o || (o = {}));
			const d = e => t => ({
					source: s.collection,
					noun: o.post,
					...m(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: s.collection,
					noun: t ? o.unfollow : o.follow,
					...m(n, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: i.a.postEvent,
					noun: t ? o.unfollow : o.follow,
					...m(n, e)
				}),
				m = (e, t) => {
					const n = {
						...a.o(e),
						action: r.c.CLICK,
						subreddit: a.jb(e)
					};
					return void 0 === t ? n : {
						...n,
						post: a.J(e, t),
						postCollection: a.L(e, {
							postId: t
						}),
						postEvent: a.M(e, {
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
					...a.o(e),
					subreddit: a.jb(e),
					source: s.postComposer
				}),
				h = (e, t) => n => ({
					...m(n, e),
					source: t || s.postOverflowMenu,
					noun: o.collectionAddPost
				}),
				O = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: o.collectionRemovePost
				}),
				C = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: o.collectionCancel
				}),
				j = () => e => {
					const t = Object(c.o)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						noun: o.collectionCreate
					}
				},
				E = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: o.collectionSelect
				}),
				_ = e => t => ({
					...a.o(t),
					subreddit: a.jb(t),
					source: s.collectionComposer,
					action: r.c.CLICK,
					noun: o.collectionDelete,
					postCollection: a.K(t, {
						collectionId: e
					})
				}),
				S = e => t => ({
					...m(t),
					source: s.collectionComposer,
					noun: o.collectionEdit,
					postCollection: a.K(t, {
						collectionId: e
					})
				}),
				g = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: o.startEvent
				}),
				w = () => e => {
					const t = Object(c.o)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						action: r.c.VIEW,
						noun: o.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return O
			}));
			var s, o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/timezone/index.ts"),
				c = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(s || (s = {}));
			const p = e => u.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...u.o(e),
						source: s.postComposer,
						action: c.c.CLICK,
						noun: "event_create",
						subreddit: u.jb(e)
					})
				},
				v = e => {
					Object(m.a)({
						...u.o(e),
						source: s.postComposer,
						action: c.c.CLICK,
						noun: "event_edit",
						subreddit: u.jb(e),
						postEvent: C(e),
						postComposer: j(e)
					})
				},
				f = () => e => ({
					source: s.eventComposer,
					action: c.c.VIEW,
					noun: c.b.SCREEN,
					actionInfo: p(e),
					postEvent: C(e)
				}),
				x = e => t => ({
					...S(t, Object(d.o)(t)),
					source: s.postComposer,
					noun: "apply",
					postComposer: E(e)
				}),
				h = () => e => ({
					...S(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				O = e => t => ({
					...S(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: j(t),
					postEvent: _(e)
				}),
				C = e => {
					const t = Object(l.p)(e);
					return t && _(t)
				},
				j = e => E(Object(l.p)(e)),
				E = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === a.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / o.Sb : void 0
					}
				},
				_ = e => {
					const t = Object(i.f)(e.startDate).getTime() / o.Sb,
						n = Object(i.f)(e.endDate).getTime() / o.Sb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: n,
						eventState: Object(r.e)(t, n)
					}
				},
				S = (e, t) => {
					const n = {
						source: s.eventComposer,
						action: c.c.CLICK,
						subreddit: u.jb(e)
					};
					return t ? {
						...n,
						post: u.J(e, t),
						postEvent: u.M(e, {
							postId: t
						}),
						postCollection: u.L(e, {
							postId: t
						})
					} : n
				}
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/gold/powerups/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...r.o(e)
				}),
				c = e => t => {
					const n = r.jb(t),
						i = Object(o.x)(t, {
							subredditId: null == n ? void 0 : n.id
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
						...r.o(t),
						subreddit: n,
						userFlair: {
							id: null == c ? void 0 : c.id,
							title: c ? Object(s.g)(c) : void 0,
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
					...r.o(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: r.jb(t),
					...r.o(t)
				})
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				c = n.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function o(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL"
				}(s || (s = {}))
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/creatorStats/constants.ts");
			const r = {};
			var i = (e = r, t) => {
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
			const c = {};
			var a = (e = c, t) => {
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
			t.a = Object(s.c)({
				postStats: i,
				subredditKarma: a
			})
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/creatorStats/index.ts"),
				r = n("./src/reddit/selectors/moderatorPermissions.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts");
			Object(s.a)({
				features: {
					creatorStats: o.a
				}
			});
			const a = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === s ? void 0 : s.postStats[t]
				},
				d = (e, t) => {
					var n, s, o;
					const r = null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === s ? void 0 : s.subredditKarma[t]) || void 0 === o ? void 0 : o.karma;
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
					const n = Object(i.G)(e, {
						postId: t
					});
					return !(!n || n.isSponsored || n.removedByCategory) && (Object(c.zb)(e, {
						postId: t
					}) || !!Object(r.l)(e, {
						postId: t
					}))
				}
		},
		"./src/reddit/selectors/experiments/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/moderatorPermissions.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: e => ((e, t) => Object(i.zb)(e, {
						postId: t
					}) || !!Object(r.l)(e, {
						postId: t
					}) || Object(i.L)(e))(e, t),
					experimentName: s.N
				}) === s.dd
			}
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
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
				return v
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/presence.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts");
			const a = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.p
					});
					return t === s.v.VoteCountOnly || t === s.v.CommentCountOnly || t === s.v.VoteAndCommentCount
				},
				l = e => {
					if (Object(c.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.p
					});
					return t === s.v.VoteCountOnly || t === s.v.VoteAndCommentCount
				},
				u = e => {
					if (Object(c.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.p
					});
					return t === s.v.CommentCountOnly || t === s.v.VoteAndCommentCount
				},
				m = (e, {
					post: t
				}) => p(e, {
					postId: t.id
				}),
				p = (e, {
					postId: t
				}) => {
					const n = e.posts.models[t];
					if (Object(c.c)(e) || !n || n.isSponsored || n.isScoreHidden || n.score >= a || Object(i.a)(e)) return !1;
					const o = Object(r.d)(e, {
							experimentName: s.p
						}),
						d = null == o ? void 0 : o.variant;
					return d === s.v.VoteCountOnly || d === s.v.VoteAndCommentCount
				},
				b = (e, {
					postId: t
				}) => {
					const n = e.posts.models[t];
					if (Object(c.c)(e) || !n || n.isSponsored || n.numComments >= a || Object(i.a)(e)) return !1;
					const o = Object(r.d)(e, {
							experimentName: s.p
						}),
						d = null == o ? void 0 : o.variant;
					return d === s.v.CommentCountOnly || d === s.v.VoteAndCommentCount
				},
				v = e => {
					if (Object(i.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Jb
					}) === s.dc.Enabled
				}
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/posts.ts");
			const c = e => Object(r.c)(e, {
					experimentName: o.te,
					experimentEligibilitySelector: r.a
				}),
				a = (e, t) => t === o.Be.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(s.a)(i.G, c, (e, t) => a(e, t));
			Object(s.a)((e, t) => t, c, (e, t) => a(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.e8252b9e2bf64356298c.js.map