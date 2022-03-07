// https://www.redditstatic.com/desktop2x/Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d.a949836fe5086c212414.js
// Retrieved at 3/7/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d"], {
		"./src/lib/memoizeByReference/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/lodash/every.js"),
				n = s.n(o);

			function r(e) {
				let t = null,
					s = null;
				return (...o) => (null !== t && o.length === t.length && n()(o, (e, s) => e === t[s]) || (t = o, s = e(...o)), s)
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return n
			}));
			const o = "CREATOR_STATS_PENDING",
				n = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "f", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/query-string/index.js"),
				n = s.n(o),
				r = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const u = new Set(["home", "r/popular"]),
				m = e => {
					const t = location && location.search || "",
						s = n.a.parse(t);
					u.has(e) && (s.related = e);
					const o = n.a.stringify(s);
					return o ? `?${o}` : ""
				},
				p = Object(r.a)(c.N),
				b = Object(r.a)(c.y),
				h = Object(r.a)(c.O),
				f = Object(r.a)(c.z),
				x = Object(r.a)(c.M),
				v = Object(r.a)(c.L),
				O = Object(r.a)(c.t),
				j = Object(r.a)(c.u),
				w = e => async (t, s, {
					gqlContext: o
				}) => {
					const n = Object(a.g)(e),
						r = s();
					if (Object(d.d)(r, n)) return;
					t(p(n));
					const c = await Object(i.e)(o(), n),
						l = Date.now();
					if (c.ok && c.body && c.body.data) {
						const e = c.body.data;
						t(b({
							model: e,
							utcTimeStamp: l
						}))
					} else t(y({
						streamId: n,
						error: c.error,
						utcTimeStamp: l
					}))
				}, C = (e, t) => async (s, o) => s(_(e, t)), _ = (e, t) => async (s, o, {
					gqlContext: n
				}) => {
					const r = o();
					if (Object(d.f)(r)) return;
					s(h());
					const c = await Object(i.f)(n(), e, t),
						a = Date.now();
					if (c.ok && c.body && c.body.data) {
						const t = c.body.data;
						s(f({
							listingName: e,
							models: t,
							utcTimeStamp: a
						}))
					} else s(k({
						error: c.error,
						utcTimeStamp: a
					}))
				}, g = (e, t) => async (s, o) => s(E(e, t)), E = (e, t) => async (s, o, {
					gqlContext: n
				}) => {
					const r = o();
					if (Object(d.f)(r)) return;
					s(h());
					const c = Date.now(),
						a = e.replace("r/", ""),
						u = Object(l.D)(r, a),
						m = await Object(i.b)(n(), {
							subredditId: u,
							options: t
						}),
						p = m.body;
					m.ok && p && p.data || s(k({
						error: m.error,
						utcTimeStamp: c
					}));
					const b = p.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(i.e)(e, t),
								o = Date.now(),
								n = s.body;
							return n && n.data ? n.data : void y({
								streamId: t,
								error: s.error,
								utcTimeStamp: o
							})
						})(n(), e.node.id)),
						x = (await Promise.all(b)).filter(e => void 0 !== typeof e);
					s(f({
						listingName: e,
						models: x,
						utcTimeStamp: c
					}))
				}, y = e => async t => {
					t(x(e))
				}, k = e => async t => {
					t(v(e))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			}));
			var o = s("./src/lib/loadableAction/index.ts");
			const n = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				c = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				c = s.n(r);
			const i = o.a.wrapped(n.c, "RestrictedButton", c.a);
			t.a = i
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/hooks/usePrevious.ts"),
				c = s("./src/realtime/GQLSubscription/async.tsx"),
				i = s("./src/reddit/hooks/useIntersectionObserver.ts");
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
					onDataCB: h,
					postId: f,
					queryKey: x,
					queryVariables: v,
					shouldDisjointAnimation: O,
					subsequentRecurringDelay: j
				} = e, [w, C] = Object(o.useState)(!1), [_, g] = Object(o.useState)(!0), [E, y] = Object(o.useState)([]), [k, N] = Object(o.useState)(a(p).reverse()), S = Object(o.useRef)(!1), I = Object(o.useRef)(null), R = Object(o.useRef)(e => {}), T = Object(o.useRef)();
				R.current = Object(o.useCallback)(e => {
					let s = e || d();
					const o = [...k].reverse().join("");
					let n = parseInt(o) + s;
					n > t && (s = t - parseInt(o), n = t);
					const r = a(n).reverse();
					C(!1), y(k), N(r), g(!1), T.current = setTimeout(() => {
						C(!0)
					}, 0)
				}, [t, d, k]);
				const F = Object(o.useRef)(() => {}),
					A = Object(o.useRef)(),
					P = Object(o.useRef)();
				F.current = Object(o.useCallback)(() => {
					P.current = setTimeout(() => {
						R.current();
						const e = [...E].reverse().join("");
						parseInt(e) < t && F.current()
					}, j())
				}, [t, j, E]);
				const M = Object(o.useRef)(0),
					D = Object(o.useRef)(!1),
					L = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: s
							} = e, o = 1 !== s;
							t ? (D.current = !0, S.current || (S.current = !0, A.current = setTimeout(() => {
								R.current(), F.current()
							}, u())), M.current > 0 && (R.current(M.current), M.current = 0)) : o && (D.current = !1)
						})
					}, []);
				Object(i.a)(I, L);
				const [B, V] = Object(o.useState)(!1), W = Object(o.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: s
						} = e, o = 1 !== s;
						t ? V(!0) : o && V(!1)
					})
				}, []), q = Object(o.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(i.a)(I, W, q.current);
				const K = Object(r.a)(t);
				Object(o.useEffect)(() => {
					if (void 0 !== K && K !== t) {
						const e = t - K;
						D.current ? R.current(e) : M.current += e
					}
					return () => {
						clearTimeout(A.current), clearTimeout(P.current), clearTimeout(T.current)
					}
				}, [t]);
				const J = Object(o.useCallback)(() => g(!0), [g]),
					U = 0 === E.length,
					z = _ || U,
					G = Object(o.useRef)(((e, t) => `${t}_${e}_count_anim`)(f, s));
				return n.a.createElement(n.a.Fragment, null, !b && n.a.createElement("div", {
					className: l.a.countAnimation
				}, k.map((e, t) => {
					const s = ((e, t) => {
						let s = Math.abs(e);
						const o = Math.abs(t),
							n = [s];
						if (s === o) return n;
						let r = !0;
						for (; r;) ++s > 9 && (s = 0), n.push(s), s === o && (r = !1);
						return n
					})(E[t] || 0, e);
					return n.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: J,
						style: w && E.length > 0 && !_ ? {
							transform: `translateY(-${O&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(O?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, z ? n.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : s.map((e, t) => {
						const o = 0 === t || t === s.length - 1;
						if (!O || O && o) return n.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), n.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...k].reverse().join(""))), n.a.createElement("span", {
					ref: I
				}), B && n.a.createElement(c.a, {
					variables: v,
					onData: b ? m : h,
					queryKey: x,
					uniqueKey: G.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			}));
			var o = s("./src/lib/constants/index.ts");
			const n = 16374492e5,
				r = 45 * o.B;
			var c;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available", e.Expired = "Expired"
			}(c || (c = {}));
			const i = e => e > n,
				a = (e, t) => {
					if (!i(e.created)) return c.NotAvailable;
					if ((e => {
							return e < Date.now() - r
						})(e.created)) return c.Expired;
					if (!t) return c.NotAvailableYet;
					const {
						shareAllCountTotals: s,
						shareCopyCountTotals: o,
						viewCountTotals: n,
						viewCountTrends: a
					} = t;
					return (null == s ? void 0 : s.availability.isAvailable) && (null == o ? void 0 : o.availability.isAvailable) && (null == n ? void 0 : n.availability.isAvailable) && (null == a ? void 0 : a.availability.isAvailable) ? !(null == n ? void 0 : n.totalCount) || n.totalCount < 10 ? c.NotAvailableYet : c.Available : c.NotAvailableYet
				}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, s) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/noop.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = s.n(d);
			t.a = e => c.a.createElement(i.i, {
				className: l.a.modalHeader
			}, c.a.createElement(i.q, null, e.title), c.a.createElement(a.a, {
				onClick: e.onClosePressed || n.a
			}, c.a.createElement(i.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				r = s.n(n);
			const c = o.a.div("Wrapper", r.a);
			t.a = c
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Flair/index.tsx"),
				a = s("./src/reddit/components/FlairPreview/index.m.less"),
				d = s.n(a);
			const l = c.a.span("Placeholder", d.a),
				u = c.a.div("SelectedFlair", d.a),
				m = c.a.wrapped(i.b, "FlairComponent", d.a);
			t.a = e => e.flair ? r.a.createElement(u, null, r.a.createElement(l, null, o.fbt._("{placeholder}", [o.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), r.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : r.a.createElement(u, null, o.fbt._("No flair selected", null, {
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
			var o = s("./node_modules/lodash/once.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				u = s("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = s.n(u);
			const p = d.a.wrapped(e => c.a.createElement("div", {
					className: Object(a.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = n()((e = p) => Object(i.a)({
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				l = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/helpers/trackers/userFlair.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				f = s("./src/reddit/components/Flair/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				v = s("./src/reddit/controls/RadioInput/index.tsx"),
				O = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				j = s("./src/reddit/helpers/trackers/postComposer.ts"),
				w = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				C = s("./src/reddit/icons/svgs/Search/index.tsx"),
				_ = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				g = s.n(_);
			class E extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}, this.onSearchClick = () => {
						this.props.sendEvent(Object(j.n)())
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: s
					} = this.props, {
						searchQuery: n
					} = this.state, c = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(n)), i = !!s && c.some(e => e.id === s);
					return r.a.createElement("div", {
						className: g.a.container
					}, r.a.createElement("div", {
						className: g.a.searchBoxWrapper
					}, r.a.createElement("input", {
						className: g.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: o.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: n
					}), r.a.createElement(C.a, {
						className: g.a.searchIcon
					})), r.a.createElement(v.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: s
					}, c.map((e, t) => {
						const o = Object(u.c)(e),
							n = s === e.id || !i && 0 === t;
						return r.a.createElement(O.a, {
							className: g.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: n ? 0 : -1,
							value: e.id
						}, r.a.createElement(f.b, {
							className: g.a.flairComponent,
							flair: o,
							forceSmallEmojis: !0
						}), e.textEditable && r.a.createElement(w.a, {
							className: g.a.pencil
						}))
					})))
				}
			}
			var y = Object(x.c)(E),
				k = s("./src/reddit/components/FlairSearch/index.m.less"),
				N = s.n(k);
			const S = Object(d.a)(e => e && Object(u.c)(e)),
				I = Object(i.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				R = Object(c.b)(I);
			t.a = R(e => {
				const {
					flairTemplateType: t,
					flair: s,
					className: n,
					onChange: c,
					subredditId: i,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: f
				} = e, x = Object(p.a)(), v = d && s && s.templateId && d[s.templateId] || void 0, O = Object(h.a)(), j = s || S(v);
				return r.a.createElement("div", {
					className: Object(a.a)(n, N.a.container)
				}, d && l && r.a.createElement(y, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								s = Object(u.c)(t);
							x(Object(m.b)({
								userFlair: t
							})), c(s)
						}
					},
					selectedTemplateId: v ? v.id : "",
					templateIds: l,
					templates: d
				}), j && v && (f || v.textEditable) && r.a.createElement("div", {
					className: N.a.flairEditSection
				}, r.a.createElement("div", {
					className: N.a.editLabel
				}, o.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && r.a.createElement("div", {
					className: N.a.restrictionHintText
				}, Object(u.k)(v)), r.a.createElement(O, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: j,
					flairTemplate: v,
					flairTemplateType: t,
					isFlairModOnly: v.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let s = e;
						t && (s = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), c(s)
					},
					subredditId: i
				})))
			})
		},
		"./src/reddit/components/ModActionsMenu/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_28noJDp6DzFWESejYQdpcD",
				modActionsMenu: "_28noJDp6DzFWESejYQdpcD"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./src/reddit/components/ModActionsMenu/index.m.less"),
				m = s.n(u);
			const p = Object(c.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(l.b)(t)(e)
				}),
				b = Object(r.b)(p, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(i.h)({
						tooltipId: t
					}))
				})),
				h = () => null;
			t.a = b(e => n.a.createElement("div", {
				className: m.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? h : e.onClick
			}, e.inCommentFlatlist ? n.a.createElement(a.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : n.a.createElement(d.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				n = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				x = s.n(f);
			const v = d.a.wrapped(m.a, "_Dropdown", x.a),
				O = Object(u.a)(v),
				j = d.a.button("MenuButton", x.a),
				w = d.a.wrapped(p.b, "DropdownRow", x.a),
				C = Object(i.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				_ = Object(c.b)(C, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				g = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = _(e => r.a.createElement(j, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(a.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: g(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), r.a.createElement(O, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
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
					upvotePercentString: n,
					viewCountString: m
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						s = Object(a.b)(e.viewCount);
					return {
						upvotePercentString: o.fbt._("{percent upvoted}% Upvoted", [o.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: o.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [o.fbt._plural(e.viewCount, "number of views", s)], {
							hk: "rP01m"
						})
					}
				})(t), b = s && !!t.viewCount, h = Object(c.e)(e => Object(u.a)(e, t.id)), f = Object(c.e)(e => Object(l.a)(e, t.id)), x = Object(c.e)(e => Object(l.b)(e, t.id)), v = Object(d.c)(t, x), O = h && f && v === d.b.Available;
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.viewCounts, e)
				}, b && r.a.createElement("span", null, m), b && !!t.upvoteRatio && r.a.createElement("span", {
					className: p.a.dotSpacer
				}), !!t.upvoteRatio && !O && r.a.createElement("span", null, n))
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
			var o = s("./node_modules/lodash/isEqual.js"),
				n = s.n(o),
				r = s("./src/reddit/constants/flair.ts"),
				c = s("./src/reddit/helpers/flair.ts"),
				i = s("./src/reddit/models/Flair/index.ts");
			const a = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
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
				const o = e && t.templateId ? e[t.templateId] : void 0;
				if (!o) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const i = Object(c.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : i > r.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(c.n)(t) && !Object(c.r)(o) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : n()(s, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			const r = Object(o.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				c = ({
					children: e
				}) => {
					const [t, s] = Object(o.useState)(0), [c, i] = Object(o.useState)(!1), [a, d] = Object(o.useState)(0), l = {
						currentTime: t,
						setCurrentTime: s,
						isLive: c,
						setIsLive: i,
						totalTime: a,
						setTotalTime: d
					};
					return n.a.createElement(r.Provider, {
						value: l
					}, e)
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				r = Object(o.a)({
					resolved: {},
					chunkName: () => "VideoShareModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("VideoShareModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = r
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/constants/colors.ts");
			const r = {
				backgroundColor: n.a.overlayReportFlow
			};
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/constants/colors.ts");
			const r = {
					backgroundColor: n.a.overlayReportFlow
				},
				c = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				i = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlowNew").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = i
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				chatIcon: "_1PhtucoKocd-ADJ-JDEoiC",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO",
				modalBody: "T4VmKX-IOkP4UG-B4jUR-"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/uuid/v4.js"),
				a = s.n(i),
				d = s("./src/config.ts"),
				l = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/reddit/actions/chat/toggle.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				h = s("./src/reddit/actions/tooltip.ts"),
				f = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				x = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				v = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				w = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				C = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/routes/postCreation/constants.ts"),
				N = s("./src/reddit/selectors/activeModalId.ts"),
				S = s("./src/reddit/selectors/experiments/shareToChatButton.ts"),
				I = s("./src/reddit/selectors/tooltip.ts"),
				R = s("./src/reddit/components/ShareMenu/index.m.less"),
				T = s.n(R);
			const F = Object(f.a)(O.a),
				A = a()(),
				P = r.a.memo(e => {
					const t = Object(c.d)(),
						s = Object(_.a)(),
						i = Object(c.e)(S.a),
						a = Object(c.e)(t => Object(I.b)(e.dropdownId)(t)),
						f = Object(c.e)(t => Object(N.b)(Object(x.a)(e.dropdownId))(t)),
						O = Object(n.useCallback)(() => {
							t(Object(h.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						R = e => t(Object(p.D)(e)),
						P = Object(n.useCallback)(() => {
							e.post && (t(Object(b.d)(e.post.id)), t(Object(m.i)(Object(x.a)(e.post.id))))
						}, [t, e.post]),
						M = !e.subredditType || e.subredditType === y.f.Public,
						D = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						L = Object(n.useCallback)(e => {
							t(Object(u.f)(e)), s(Object(C.a)())
						}, [t, s]);
					return r.a.createElement("div", {
						className: e.className,
						onClick: O,
						id: e.dropdownId
					}, e.children, r.a.createElement(F, {
						className: T.a.dropdown,
						isOpen: a,
						tooltipId: e.dropdownId
					}, r.a.createElement(j.b, {
						className: T.a.dropdownRow,
						displayText: o.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(E.p)(s)) e.sendEventWithName("share_copy", {
								referralId: A
							}), P();
							else {
								const s = Object(l.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), R(s)
							}
						}
					}, r.a.createElement(g.a, {
						name: "link_post",
						className: T.a.linkIcon
					})), D && r.a.createElement(j.b, {
						className: T.a.dropdownRow,
						displayText: o.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${k.b}?source_id=${e.post.id}`, "_blank")
						}
					}, r.a.createElement(g.a, {
						name: "crosspost",
						className: T.a.crosspostIcon
					})), M && r.a.createElement(j.b, {
						className: T.a.dropdownRow,
						displayText: o.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							e.sendEventWithName("share_embed"), window.open(`${d.a.rebedMediaUrl}/embed?url=${e.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(g.a, {
						name: "embed",
						className: T.a.embedIcon
					})), i && r.a.createElement(j.b, {
						className: T.a.dropdownRow,
						displayText: o.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const {
								permalink: t
							} = e, s = Object(l.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							L(s)
						}
					}, r.a.createElement(g.a, {
						name: "chat",
						className: T.a.chatIcon
					}))), f && e.post && r.a.createElement(x.b, {
						className: T.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: A
							}), R(t)), P()
						},
						url: Object(l.a)(Object(w.a)(e.post.id), {
							[v.r]: A,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = P
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ViewReportsDropdown-index").then(s.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return i
			}));
			const o = "comment",
				n = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				c = "comments-page-link-num-comments",
				i = "post-content"
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				a = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => n.a.createElement("div", {
					className: Object(r.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, n.a.createElement(i.a, {
					className: d.a.expandRight
				}, n.a.createElement(c.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				m = ({
					className: e,
					...t
				}) => n.a.createElement(u, l({
					className: Object(r.a)(d.a.postCheckboxMenuItem, e)
				}, t))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			})), s.d(t, "c", (function() {
				return w
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(n),
				c = s("./node_modules/raf/index.js"),
				i = s.n(c),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = s.n(b);
			var f = Object(u.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: h.a.wrapper
					}, d.a.createElement(p.a, {
						className: h.a.titleRow
					}, s), d.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: h.a.buttonRow
					}, d.a.createElement(m.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				x = s("./src/reddit/controls/ErrorText/index.m.less"),
				v = s.n(x);
			class O extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: s,
						errorModalTitle: n = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: c,
						isModalOpen: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(v.a.wrapper, t)
					}, d.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, r), i && d.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: n
					}, s || e))
				}
			}
			const j = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: o,
						fallbackMessage: n,
						messages: r = []
					} = e, c = r.length ? r : n ? [n] : [];
					return c.length ? d.a.createElement("div", {
						className: t
					}, c.map((e, t) => d.a.createElement(O, {
						className: s,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				w = e => d.a.createElement(j, {
					fallbackMessage: o.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = O
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/keycodes.ts"),
				i = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				a = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = s.n(l);
			class m extends n.a.Component {
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
					return e.hidden ? null : n.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(r.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? n.a.createElement(a.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : n.a.createElement(i.a, {
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
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/constants/keycodes.ts");
			class c extends n.a.Component {
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
						return n.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props, {
							value: o
						} = this.state;
						if (t) return;
						const n = e.key === r.b.ArrowUp,
							c = e.key === r.b.ArrowDown;
						if (n || c) {
							const t = this.getValues();
							if (!t.length) return;
							const r = o ? t.indexOf(o) : 0,
								c = t[((n ? r - 1 : r + 1) + t.length) % t.length];
							s(c), this.setState({
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
					return n.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, n.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), n.a.Children.map(e.children, (s, o) => {
						const r = 0 === o,
							c = s.props.value === t,
							i = null !== t ? c ? 0 : -1 : r ? 0 : -1;
						return n.a.cloneElement(s, {
							disabled: e.disabled,
							onClick: e => this.handleClick(s.props.value),
							selected: c,
							tabIndex: i
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CountAnimation/index.tsx"),
				m = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				b = s("./src/reddit/constants/colors.ts"),
				h = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				f = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				x = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = s("./src/reddit/models/Vote/index.ts"),
				j = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				w = s("./src/reddit/selectors/meta.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				_ = s("./node_modules/reselect/es/index.js"),
				g = s("./src/reddit/controls/Score/index.m.less"),
				E = s.n(g);
			const y = {
					placement: "right"
				},
				k = e => e.voteState === O.a.downvoted ? Object(v.a)(e).voteText.downvote : e.voteState === O.a.upvoted ? Object(v.a)(e).voteText.upvote : Object(f.a)(Object(h.a)(e)),
				N = Object(_.c)({
					locale: e => Object(w.i)(e),
					post: (e, {
						shouldShowUpvoteRatioOnHover: t,
						postId: s
					}) => {
						if (t && s) return Object(C.G)(e, {
							postId: s
						})
					}
				}),
				S = () => 0,
				I = Object(d.b)(N),
				R = Object(r.a)(e => {
					const t = {
							color: e.light ? b.a.lightboxHeaderText : k(e)
						},
						{
							score: s,
							postId: r = "",
							locale: h,
							isVoteCountAnimation: f,
							isCountAnimShadowTestEnabled: v,
							shouldShowUpvoteRatioOnHover: O,
							post: w
						} = e,
						C = Object(d.d)(),
						_ = null == h ? void 0 : h.startsWith("en"),
						g = e.isScoreHidden ? _ ? o.fbt._("Vote", null, {
							hk: "2TMson"
						}) : a.a.createElement("span", {
							className: E.a.dot
						}, "•") : Object(c.b)(s),
						N = Object(i.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && C(Object(l.I)({
								postId: r,
								delta: t
							}))
						}, [C, r]),
						I = Object(i.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: r
								}
							}
						}),
						R = !e.isScoreHidden && f && s < j.a,
						T = Object(x.a)(y),
						F = s < 0 ? 0 : s;
					return a.a.createElement("div", {
						className: Object(n.a)(E.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: O ? T.show : void 0,
						onMouseLeave: O ? T.hide : void 0,
						ref: O ? T.target.ref : void 0
					}, (R || v) && a.a.createElement(a.a.Fragment, null, a.a.createElement(u.b, {
						initialDisplayCount: F,
						countToUpperBound: F,
						initialDelay: S,
						subsequentRecurringDelay: S,
						incrementDelta: S,
						shouldDisjointAnimation: !0,
						postId: r,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: I.current,
						onDataCB: N,
						isLoadTestOnly: v && !R
					})), !R && g, O && w && a.a.createElement(m.a, T, a.a.createElement(p.a, {
						className: E.a.viewCount,
						post: w,
						showViewCount: !1
					})))
				});
			t.a = I(R)
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
			var o = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/telemetry/index.ts"),
				r = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				c = s("./src/reddit/selectors/platform.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					profile: i.S(e),
					screen: i.bb(e),
					subreddit: i.jb(e)
				}),
				d = (e, t, s) => o => ({
					source: Object(c.i)(o) || s ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...a(o),
					post: i.J(o, e)
				}),
				l = (e, t, s, o) => n => {
					const c = s ? i.i(n, s) : null,
						{
							sortToUse: a
						} = Object(r.a)(n, e);
					return {
						...d(e, t, o)(n),
						comment: c,
						listing: {
							sort: a
						}
					}
				},
				u = (e, t) => s => {
					const o = i.k(s);
					return o ? d(o.id, e, t)(s) : {
						source: Object(c.i)(s) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...a(s)
					}
				},
				m = (e, t) => s => Object(n.a)({
					...d(e, t)(s),
					...i.o(s)
				}),
				p = e => t => ({
					source: "id_card",
					action: o.c.CLICK,
					noun: e,
					...a(t),
					post: i.k(t),
					userSubreddit: i.tb(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return c
			})), s.d(t, "j", (function() {
				return i
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
				return h
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "l", (function() {
				return x
			}));
			var o = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: Object(n.bb)(e),
					profile: Object(n.S)(e),
					subreddit: Object(n.jb)(e),
					userSubreddit: Object(n.tb)(e)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...r(t)
				}),
				i = (e, t) => s => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.J)(s, t),
					...r(s)
				}),
				a = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(n.J)(s, t),
					comment: Object(n.i)(s, t),
					...r(s)
				}),
				d = (e, t) => s => ({
					source: "comment",
					action: o.c.UNDO,
					noun: e,
					post: Object(n.J)(s, t),
					comment: Object(n.i)(s, t),
					...r(s)
				}),
				l = (e, t) => s => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(n.J)(s, t),
					comment: Object(n.i)(s, t),
					...r(s)
				}),
				u = (e, t) => s => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(n.J)(s, t),
					comment: Object(n.i)(s, t),
					...r(s)
				}),
				m = (e, t) => s => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.J)(s, t),
					comment: Object(n.i)(s, t),
					...r(s)
				}),
				p = (e, t) => s => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(n.i)(s, t),
					post: Object(n.J)(s, t),
					...r(s)
				}),
				b = (e, t) => s => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(n.J)(s, t),
					...r(s)
				}),
				h = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(n.J)(s, t),
					subreddit: Object(n.mb)(s, t)
				}),
				f = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(n.i)(s, t),
					post: Object(n.J)(s, t),
					subreddit: Object(n.mb)(s, t)
				}),
				x = (e, t, s, o) => r => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(n.J)(r, s),
					subreddit: Object(n.mb)(r, s),
					actionInfo: {
						reason: o
					},
					...e && {
						comment: Object(n.i)(r, s)
					}
				})
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
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
				return h
			})), s.d(t, "m", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "j", (function() {
				return w
			})), s.d(t, "q", (function() {
				return C
			})), s.d(t, "k", (function() {
				return _
			})), s.d(t, "l", (function() {
				return g
			})), s.d(t, "i", (function() {
				return E
			})), s.d(t, "d", (function() {
				return y
			}));
			var o, n, r = s("./src/reddit/constants/tracking.ts"),
				c = s("./src/reddit/helpers/trackers/postEvent.ts"),
				i = s("./src/reddit/selectors/platform.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(o || (o = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(n || (n = {}));
			const d = e => t => ({
					source: o.collection,
					noun: n.post,
					...m(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => s => ({
					source: o.collection,
					noun: t ? n.unfollow : n.follow,
					...m(s, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => s => ({
					source: c.a.postEvent,
					noun: t ? n.unfollow : n.follow,
					...m(s, e)
				}),
				m = (e, t) => {
					const s = {
						...a.o(e),
						action: r.c.CLICK,
						subreddit: a.jb(e)
					};
					return void 0 === t ? s : {
						...s,
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
					noun: n.collectionEducation
				}),
				b = e => ({
					...x(e),
					action: r.c.CLICK,
					noun: n.collectionEducationGotIt
				}),
				h = e => ({
					...x(e),
					action: r.c.VIEW,
					noun: n.eventEducation
				}),
				f = e => ({
					...x(e),
					action: r.c.CLICK,
					noun: n.eventEducationGotIt
				}),
				x = e => ({
					...a.o(e),
					subreddit: a.jb(e),
					source: o.postComposer
				}),
				v = (e, t) => s => ({
					...m(s, e),
					source: t || o.postOverflowMenu,
					noun: n.collectionAddPost
				}),
				O = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: n.collectionRemovePost
				}),
				j = () => e => ({
					...m(e),
					source: o.collectionComposer,
					noun: n.collectionCancel
				}),
				w = () => e => {
					const t = Object(i.o)(e) || void 0;
					return {
						...m(e, t),
						source: o.collectionComposer,
						noun: n.collectionCreate
					}
				},
				C = () => e => ({
					...m(e),
					source: o.collectionComposer,
					noun: n.collectionSelect
				}),
				_ = e => t => ({
					...a.o(t),
					subreddit: a.jb(t),
					source: o.collectionComposer,
					action: r.c.CLICK,
					noun: n.collectionDelete,
					postCollection: a.K(t, {
						collectionId: e
					})
				}),
				g = e => t => ({
					...m(t),
					source: o.collectionComposer,
					noun: n.collectionEdit,
					postCollection: a.K(t, {
						collectionId: e
					})
				}),
				E = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: n.startEvent
				}),
				y = () => e => {
					const t = Object(i.o)(e) || void 0;
					return {
						...m(e, t),
						source: o.collectionComposer,
						action: r.c.VIEW,
						noun: n.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			}));
			var o, n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				c = s("./src/lib/timezone/index.ts"),
				i = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/models/PostCreationForm/index.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/postCreations.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(o || (o = {}));
			const p = e => u.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...u.o(e),
						source: o.postComposer,
						action: i.c.CLICK,
						noun: "event_create",
						subreddit: u.jb(e)
					})
				},
				h = e => {
					Object(m.a)({
						...u.o(e),
						source: o.postComposer,
						action: i.c.CLICK,
						noun: "event_edit",
						subreddit: u.jb(e),
						postEvent: j(e),
						postComposer: w(e)
					})
				},
				f = () => e => ({
					source: o.eventComposer,
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					actionInfo: p(e),
					postEvent: j(e)
				}),
				x = e => t => ({
					...g(t, Object(d.o)(t)),
					source: o.postComposer,
					noun: "apply",
					postComposer: C(e)
				}),
				v = () => e => ({
					...g(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				O = e => t => ({
					...g(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: w(t),
					postEvent: _(e)
				}),
				j = e => {
					const t = Object(l.p)(e);
					return t && _(t)
				},
				w = e => C(Object(l.p)(e)),
				C = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === a.j.AtEventTime ? Object(c.f)(e.startDate).getTime() / n.Sb : void 0
					}
				},
				_ = e => {
					const t = Object(c.f)(e.startDate).getTime() / n.Sb,
						s = Object(c.f)(e.endDate).getTime() / n.Sb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(r.e)(t, s)
					}
				},
				g = (e, t) => {
					const s = {
						source: o.eventComposer,
						action: i.c.CLICK,
						subreddit: u.jb(e)
					};
					return t ? {
						...s,
						post: u.J(e, t),
						postEvent: u.M(e, {
							postId: t
						}),
						postCollection: u.L(e, {
							postId: t
						})
					} : s
				}
		},
		"./src/reddit/helpers/trackers/shareToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
				...Object(n.o)(e),
				source: "post",
				action: o.c.CLICK,
				noun: "share_chat",
				subreddit: Object(n.jb)(e)
			})
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			}));
			var o = s("./src/reddit/helpers/flair.ts"),
				n = s("./src/reddit/selectors/gold/powerups/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const c = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...r.o(e)
				}),
				i = e => t => {
					const s = r.jb(t),
						c = Object(n.x)(t, {
							subredditId: null == s ? void 0 : s.id
						}),
						{
							userFlair: i,
							achievementFlair: a,
							supporterFlair: d
						} = e,
						l = a || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...r.o(t),
						subreddit: s,
						userFlair: {
							id: null == i ? void 0 : i.id,
							title: i ? Object(o.g)(i) : void 0,
							isActive: !!i || void 0,
							achievementFlairId: null == a ? void 0 : a.type,
							achievementFlairTitle: null == a ? void 0 : a.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: c
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
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => n.a.createElement("i", d({
				className: Object(r.a)(Object(c.b)("comment", t.isFilled), a.a.commentIcon, e)
			}, t))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("i", d({}, e, {
				className: Object(r.a)(Object(c.b)("mod", e.isFilled), a.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), n.a.createElement("g", null, n.a.createElement("path", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = s.n(c);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({}, e, {
				className: Object(r.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				a = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: o,
					widthLeft: r,
					gutter: i,
					...l
				} = e;
				return n.a.createElement("div", d({
					className: Object(c.a)(a.a.expandRightContainer, t)
				}, l), n.a.createElement("div", {
					className: a.a.left,
					style: {
						flexBasis: r,
						height: o,
						marginRight: i
					}
				}, Array.isArray(s) && s[0]), n.a.createElement("div", {
					className: a.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/creatorStats/constants.ts");
			const r = {};
			var c = (e = r, t) => {
				switch (t.type) {
					case n.a:
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
			const i = {};
			var a = (e = i, t) => {
				switch (t.type) {
					case n.a:
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
			t.a = Object(o.c)({
				postStats: c,
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
			var o = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./src/reddit/reducers/features/creatorStats/index.ts"),
				r = s("./src/reddit/selectors/moderatorPermissions.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/user.ts");
			Object(o.a)({
				features: {
					creatorStats: n.a
				}
			});
			const a = (e, t) => {
					var s, o;
					return null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === o ? void 0 : o.postStats[t]
				},
				d = (e, t) => {
					var s, o, n;
					const r = null === (n = null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === o ? void 0 : o.subredditKarma[t]) || void 0 === n ? void 0 : n.karma;
					if (!r) return;
					const {
						fromComments: c,
						fromPosts: i
					} = r;
					return {
						fromComments: c,
						fromPosts: i
					}
				},
				l = (e, t) => {
					const s = Object(c.G)(e, {
						postId: t
					});
					return !(!s || s.isSponsored || s.removedByCategory) && (Object(i.zb)(e, {
						postId: t
					}) || !!Object(r.l)(e, {
						postId: t
					}))
				}
		},
		"./src/reddit/selectors/experiments/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/moderatorPermissions.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
				return Object(n.c)(e, {
					experimentEligibilitySelector: e => ((e, t) => Object(c.zb)(e, {
						postId: t
					}) || !!Object(r.l)(e, {
						postId: t
					}) || Object(c.L)(e))(e, t),
					experimentName: o.N
				}) === o.dd
			}
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const i = e => !!Object(r.b)(e) || Object(n.c)(e, {
				experimentEligibilitySelector: c.O,
				experimentName: o.k
			}) === o.f.Enabled
		},
		"./src/reddit/selectors/experiments/shareToChatButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const i = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: c.O,
				experimentName: n.Qb
			}), e => e === n.dd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d.a949836fe5086c212414.js.map