// https://www.redditstatic.com/desktop2x/Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d.fe7746da331fd90f03a0.js
// Retrieved at 12/8/2021, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d"], {
		"./src/lib/memoizeByReference/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/lodash/every.js"),
				o = r.n(n);

			function s(e) {
				let t = null,
					r = null;
				return (...n) => (null !== t && n.length === t.length && o()(n, (e, r) => e === t[r]) || (t = n, r = e(...n)), r)
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = "CREATOR_STATS_PENDING",
				o = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return i
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
				return f
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const o = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				s = Object(n.a)(o("awardSheetInfoRequested")),
				a = Object(n.a)(o("manageableAwardsRequested")),
				c = Object(n.a)(o("createCommunityAward")),
				i = Object(n.a)(o("createGlobalAward")),
				d = Object(n.a)(o("createModAward")),
				l = Object(n.a)(o("createAwardFailed")),
				u = Object(n.a)(o("createAwardSuccessful")),
				m = Object(n.a)(o("removeCommunityAward")),
				p = Object(n.a)(o("disableAwardinCommunity")),
				f = Object(n.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return h
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "f", (function() {
				return j
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/postParentMessage/index.ts"),
				s = r("./src/reddit/helpers/isPost.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/selectors/gild.ts"),
				i = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/selectors/communityAwards.ts"),
				m = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/telemetry/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const h = Object(n.a)(b.L),
				g = Object(n.a)(b.f),
				v = () => async (e, t) => {
					const n = t();
					e(g()), Object(i.b)(i.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(o()(n))
				}, x = Object(n.a)(b.K), w = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (n, o) => {
					const c = o(),
						i = e ? Object(u.a)(c, e) : void 0;
					n(x({
						award: i && i.isEnabled ? i : void 0,
						thingId: r,
						correlationId: t
					})), n(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const f = Object(p.H)(c, {
						thingId: r
					});
					let b = null;
					if (f) b = f.id;
					else if (Object(s.a)(r)) {
						const e = Object(m.H)(c, {
							postId: r
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, r)
				}, _ = Object(n.a)(b.e), y = Object(n.a)(b.J), O = () => async (e, t) => {
					const n = t(),
						s = Object(c.d)(n);
					if (Object(c.g)(n)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(_()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(s)(n)), Object(i.b)(i.a.GildingFlow)
				}, j = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
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
				o = r.n(n),
				s = r("./src/lib/hooks/usePrevious.ts"),
				a = r("./src/realtime/GQLSubscription/async.tsx"),
				c = r("./src/reddit/hooks/useIntersectionObserver.ts");
			const i = e => {
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
					isLoadTestOnly: f,
					onDataCB: b,
					postId: h,
					queryKey: g,
					queryVariables: v,
					shouldDisjointAnimation: x,
					subsequentRecurringDelay: w
				} = e, [_, y] = Object(n.useState)(!1), [O, j] = Object(n.useState)(!0), [C, k] = Object(n.useState)([]), [P, T] = Object(n.useState)(i(p).reverse()), I = Object(n.useRef)(!1), E = Object(n.useRef)(null), S = Object(n.useRef)(e => {}), A = Object(n.useRef)();
				S.current = Object(n.useCallback)(e => {
					let r = e || d();
					const n = [...P].reverse().join("");
					let o = parseInt(n) + r;
					o > t && (r = t - parseInt(n), o = t);
					const s = i(o).reverse();
					y(!1), k(P), T(s), j(!1), A.current = setTimeout(() => {
						y(!0)
					}, 0)
				}, [t, d, P]);
				const M = Object(n.useRef)(() => {}),
					F = Object(n.useRef)(),
					N = Object(n.useRef)();
				M.current = Object(n.useCallback)(() => {
					N.current = setTimeout(() => {
						S.current();
						const e = [...C].reverse().join("");
						parseInt(e) < t && M.current()
					}, w())
				}, [t, w, C]);
				const R = Object(n.useRef)(0),
					L = Object(n.useRef)(!1),
					G = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: r
							} = e, n = 1 !== r;
							t ? (L.current = !0, I.current || (I.current = !0, F.current = setTimeout(() => {
								S.current(), M.current()
							}, u())), R.current > 0 && (S.current(R.current), R.current = 0)) : n && (L.current = !1)
						})
					}, []);
				Object(c.a)(E, G);
				const [B, D] = Object(n.useState)(!1), H = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: r
						} = e, n = 1 !== r;
						t ? D(!0) : n && D(!1)
					})
				}, []), V = Object(n.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(c.a)(E, H, V.current);
				const U = Object(s.a)(t);
				Object(n.useEffect)(() => {
					if (void 0 !== U && U !== t) {
						const e = t - U;
						L.current ? S.current(e) : R.current += e
					}
					return () => {
						clearTimeout(F.current), clearTimeout(N.current), clearTimeout(A.current)
					}
				}, [t]);
				const K = Object(n.useCallback)(() => j(!0), [j]),
					q = 0 === C.length,
					W = O || q,
					z = Object(n.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, r));
				return o.a.createElement(o.a.Fragment, null, !f && o.a.createElement("div", {
					className: l.a.countAnimation
				}, P.map((e, t) => {
					const r = ((e, t) => {
						let r = Math.abs(e);
						const n = Math.abs(t),
							o = [r];
						if (r === n) return o;
						let s = !0;
						for (; s;) ++r > 9 && (r = 0), o.push(r), r === n && (s = !1);
						return o
					})(C[t] || 0, e);
					return o.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: K,
						style: _ && C.length > 0 && !O ? {
							transform: `translateY(-${x&&r.length>1?100:100*(r.length-1)}%)`,
							transitionDuration: `${(x?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, W ? o.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : r.map((e, t) => {
						const n = 0 === t || t === r.length - 1;
						if (!x || x && n) return o.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), o.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...P].reverse().join(""))), o.a.createElement("span", {
					ref: E
				}), B && o.a.createElement(a.a, {
					variables: v,
					onData: f ? m : b,
					queryKey: g,
					uniqueKey: z.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./src/redditGQL/types.ts");
			const o = 16327836e5;
			var s;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available"
			}(s || (s = {}));
			const a = e => e > o,
				c = (e, t) => {
					if (!a(e.created)) return s.NotAvailable;
					if (!t) return s.NotAvailableYet;
					const {
						viewCountTotals: r,
						shareCountTotals: o
					} = t;
					return (null == r ? void 0 : r.status) === n.c.Unavailable && (null == o ? void 0 : o.status) === n.c.Unavailable ? s.NotAvailableYet : !(null == r ? void 0 : r.totalCount) || r.totalCount < 10 ? s.NotAvailableYet : s.Available
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
				o = r.n(n),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				c = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = r("./src/reddit/controls/TextButton/index.tsx"),
				d = r("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = r.n(d);
			t.a = e => a.a.createElement(c.i, {
				className: l.a.modalHeader
			}, a.a.createElement(c.q, null, e.title), a.a.createElement(i.a, {
				onClick: e.onClosePressed || o.a
			}, a.a.createElement(c.b, null)))
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
				o = r("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				s = r.n(o);
			const a = n.a.div("Wrapper", s.a);
			t.a = a
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
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/Flair/index.tsx"),
				i = r("./src/reddit/components/FlairPreview/index.m.less"),
				d = r.n(i);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(c.b, "FlairComponent", d.a);
			t.a = e => e.flair ? s.a.createElement(u, null, s.a.createElement(l, null, n.fbt._("{placeholder}", [n.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), s.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : s.a.createElement(u, null, n.fbt._("No flair selected", null, {
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
				return f
			}));
			var n = r("./node_modules/lodash/once.js"),
				o = r.n(n),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				c = r("./src/higherOrderComponents/makeAsync.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/lib/loadWithRetries/index.ts"),
				u = r("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = r.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(i.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				f = o()((e = p) => Object(c.a)({
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
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/memoizeByReference/index.ts"),
				l = r("./src/reddit/featureFlags/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				m = r("./src/reddit/helpers/trackers/userFlair.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/selectors/moderatorPermissions.ts"),
				b = r("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				h = r("./src/reddit/components/Flair/index.tsx"),
				g = r("./src/reddit/controls/RadioInput/index.tsx"),
				v = r("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				x = r("./src/reddit/icons/svgs/Pencil/index.tsx"),
				w = r("./src/reddit/icons/svgs/Search/index.tsx"),
				_ = r("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				y = r.n(_);
			class O extends s.a.Component {
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
						searchQuery: o
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), c = !!r && a.some(e => e.id === r);
					return s.a.createElement("div", {
						className: y.a.container
					}, s.a.createElement("div", {
						className: y.a.searchBoxWrapper
					}, s.a.createElement("input", {
						className: y.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), s.a.createElement(w.a, {
						className: y.a.searchIcon
					})), s.a.createElement(g.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: r
					}, a.map((e, t) => {
						const n = Object(u.c)(e),
							o = r === e.id || !c && 0 === t;
						return s.a.createElement(v.a, {
							className: y.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, s.a.createElement(h.b, {
							className: y.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && s.a.createElement(x.a, {
							className: y.a.pencil
						}))
					})))
				}
			}
			var j = r("./src/reddit/components/FlairSearch/index.m.less"),
				C = r.n(j);
			const k = Object(d.a)(e => e && Object(u.c)(e)),
				P = Object(c.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: f.g
				}),
				T = Object(a.b)(P);
			t.a = T(e => {
				const {
					flairTemplateType: t,
					flair: r,
					className: o,
					onChange: a,
					subredditId: c,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: f,
					isModerator: h
				} = e, g = Object(p.a)(), v = d && r && r.templateId && d[r.templateId] || void 0, x = Object(b.a)(), w = r || k(v);
				return s.a.createElement("div", {
					className: Object(i.a)(o, C.a.container)
				}, d && l && s.a.createElement(O, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								r = Object(u.c)(t);
							g(Object(m.b)({
								userFlair: t
							})), a(r)
						}
					},
					selectedTemplateId: v ? v.id : "",
					templateIds: l,
					templates: d
				}), w && v && (h || v.textEditable) && s.a.createElement("div", {
					className: C.a.flairEditSection
				}, s.a.createElement("div", {
					className: C.a.editLabel
				}, n.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), f && s.a.createElement("div", {
					className: C.a.restrictionHintText
				}, Object(u.k)(v)), s.a.createElement(x, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: w,
					flairTemplate: v,
					flairTemplateType: t,
					isFlairModOnly: v.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let r = e;
						t && (r = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(r)
					},
					subredditId: c
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				c = r.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function({
				visible: e,
				...t
			}) {
				const [r, a] = Object(n.useState)(e);
				return Object(n.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, a(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), a(!1)
					}
				}, [e]), e ? o.a.createElement("div", i({
					className: Object(s.a)(c.a.tooltip, t.className, {
						[c.a.visible]: r
					})
				}, t.popperProps), t.children, r && o.a.createElement("div", i({
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
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, r) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "o", (function() {
				return g
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "m", (function() {
				return x
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "q", (function() {
				return C
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "l", (function() {
				return P
			})), r.d(t, "t", (function() {
				return T
			})), r.d(t, "u", (function() {
				return I
			})), r.d(t, "r", (function() {
				return E
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "s", (function() {
				return A
			})), r.d(t, "c", (function() {
				return M
			}));
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				c = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/controls/Input/ModalInput.tsx"),
				d = r("./src/reddit/icons/svgs/Close/index.tsx"),
				l = r("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.wrapped(d.a, "CloseIcon", u.a),
				f = o.a.section("ModalBody", u.a),
				b = o.a.section("ModalPostPreview", u.a),
				h = o.a.p("ModalText", u.a),
				g = o.a.div("ModalSmallText", u.a),
				v = o.a.div("ModalDescriptionText", u.a),
				x = o.a.div("ModalMetaText", u.a),
				w = o.a.label("ModalFormItem", u.a),
				_ = o.a.wrapped(i.a, "ModalInput", u.a),
				y = o.a.label("ModalInputLabel", u.a),
				O = o.a.footer("ModalFooter", u.a),
				j = o.a.header("ModalHeader", u.a),
				C = o.a.div("ModalTitle", u.a),
				k = o.a.div("ModalAnnotation", u.a),
				P = o.a.div("ModalMain", u.a),
				T = o.a.textarea("TextArea", u.a),
				I = o.a.wrapped(c.l, "WarningButton", u.a),
				E = o.a.wrapped(c.l, "PrimaryButton", u.a),
				S = o.a.wrapped(c.o, "CancelButton", u.a),
				A = o.a.wrapped(c.r, "RemoveButton", u.a),
				M = ({
					className: e,
					...t
				}) => a.a.createElement(c.t, m({
					kind: c.b.Button,
					priority: c.c.Primary,
					className: Object(n.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
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
					upvotePercentString: o,
					viewCountString: m
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						r = Object(i.b)(e.viewCount);
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
				})(t), f = r && !!t.viewCount, b = Object(a.e)(e => Object(u.a)(e, t.id)), h = Object(a.e)(e => Object(l.a)(e, t.id)), g = Object(a.e)(e => Object(l.b)(e, t.id)), v = Object(d.c)(t, g), x = b && h && v === d.b.Available;
				return s.a.createElement("div", {
					className: Object(c.a)(p.a.viewCounts, e)
				}, f && s.a.createElement("span", null, m), f && !!t.upvoteRatio && s.a.createElement("span", {
					className: p.a.dotSpacer
				}), !!t.upvoteRatio && !x && s.a.createElement("span", null, o))
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
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./node_modules/lodash/isEqual.js"),
				o = r.n(n),
				s = r("./src/reddit/constants/flair.ts"),
				a = r("./src/reddit/helpers/flair.ts"),
				c = r("./src/reddit/models/Flair/index.ts");
			const i = e => (e || []).find(e => e.type === c.f.Text || e.type === c.f.Image || e.type === c.f.Richtext);
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
				const c = Object(a.g)(t).length;
				return 0 === c ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : c > s.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(n) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : o()(r, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/constants/keycodes.ts"),
				d = r("./src/reddit/controls/Input/index.m.less"),
				l = r.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === i.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...r
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(a.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, r))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: c.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
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
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/constants/keycodes.ts"),
				c = r("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = r("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = r("./src/reddit/layout/row/Inline/index.tsx"),
				l = r("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = r.n(l);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
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
					}) : o.a.createElement(c.a, {
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
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/reddit/constants/keycodes.ts");
			class a extends o.a.Component {
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
						return o.a.Children.forEach(this.props.children, t => {
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
						const o = e.key === s.b.ArrowUp,
							a = e.key === s.b.ArrowDown;
						if (o || a) {
							const t = this.getValues();
							if (!t.length) return;
							const s = n ? t.indexOf(n) : 0,
								a = t[((o ? s - 1 : s + 1) + t.length) % t.length];
							r(a), this.setState({
								value: a
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
					}), o.a.Children.map(e.children, (r, n) => {
						const s = 0 === n,
							a = r.props.value === t,
							c = null !== t ? a ? 0 : -1 : s ? 0 : -1;
						return o.a.cloneElement(r, {
							disabled: e.disabled,
							onClick: e => this.handleClick(r.props.value),
							selected: a,
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
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./node_modules/react/index.js"),
				i = r.n(c),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/reddit/actions/post.ts"),
				u = r("./src/reddit/components/CountAnimation/index.tsx"),
				m = r("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = r("./src/reddit/components/PostContent/ViewCount.tsx"),
				f = r("./src/reddit/constants/colors.ts"),
				b = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				g = r("./src/reddit/hooks/useInfoTextTooltip.ts"),
				v = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = r("./src/reddit/models/Vote/index.ts"),
				w = r("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				_ = r("./src/reddit/selectors/meta.ts"),
				y = r("./src/reddit/selectors/posts.ts"),
				O = r("./node_modules/reselect/es/index.js"),
				j = r("./src/reddit/controls/Score/index.m.less"),
				C = r.n(j);
			const k = {
					placement: "right"
				},
				P = e => e.voteState === x.a.downvoted ? Object(v.a)(e).voteText.downvote : e.voteState === x.a.upvoted ? Object(v.a)(e).voteText.upvote : Object(h.a)(Object(b.a)(e)),
				T = Object(O.c)({
					locale: e => Object(_.i)(e),
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
				E = Object(d.b)(T),
				S = Object(s.a)(e => {
					const t = {
							color: e.light ? f.a.lightboxHeaderText : P(e)
						},
						{
							score: r,
							postId: s = "",
							locale: b,
							isVoteCountAnimation: h,
							isCountAnimShadowTestEnabled: v,
							isReadingIndicatorsExperimentEnabled: x,
							post: _
						} = e,
						y = Object(d.d)(),
						O = null == b ? void 0 : b.startsWith("en"),
						j = e.isScoreHidden ? O ? n.fbt._("Vote", null, {
							hk: "2TMson"
						}) : i.a.createElement("span", {
							className: C.a.dot
						}, "•") : Object(a.b)(r),
						T = Object(c.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && y(Object(l.I)({
								postId: s,
								delta: t
							}))
						}, [y, s]),
						E = Object(c.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: s
								}
							}
						}),
						S = !e.isScoreHidden && h && r < w.a,
						A = Object(g.a)(k);
					return i.a.createElement("div", {
						className: Object(o.a)(C.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: x ? A.show : void 0,
						onMouseLeave: x ? A.hide : void 0,
						ref: x ? A.target.ref : void 0
					}, (S || v) && i.a.createElement(i.a.Fragment, null, i.a.createElement(u.b, {
						initialDisplayCount: r,
						countToUpperBound: r,
						initialDelay: I,
						subsequentRecurringDelay: I,
						incrementDelta: I,
						shouldDisjointAnimation: !0,
						postId: s,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: E.current,
						onDataCB: T,
						isLoadTestOnly: v && !S
					})), !S && j, x && _ && i.a.createElement(m.a, A, i.a.createElement(p.a, {
						className: C.a.viewCount,
						post: _,
						showViewCount: !1
					})))
				});
			t.a = E(S)
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
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
				return f
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/trackers/gild.ts");
			const c = e => ({
					...o.defaults(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				i = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(a.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...c(e),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...c(t),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? i(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => n => ({
					...c(n),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, n) => o => ({
					...c(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
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
					goldPurchase: r ? i(r) : null
				}),
				f = (e, t, r) => n => ({
					...c(n),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? i(r) : null
				}),
				b = (e, t, r) => n => ({
					...c(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: i(e),
					profile: o.profileById(n, t),
					subreddit: o.subredditById(n, t)
				}),
				h = (e, t) => b(e, t, "disable_in_community"),
				g = (e, t) => b(e, t, "enable_in_community")
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
				return f
			})), r.d(t, "clickHideAward", (function() {
				return b
			})), r.d(t, "clickConfirmHideAward", (function() {
				return h
			})), r.d(t, "clickCancelHideAward", (function() {
				return g
			})), r.d(t, "clickAwardReportFlow", (function() {
				return x
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return w
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return _
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return y
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return O
			})), r.d(t, "clickReportAward", (function() {
				return j
			})), r.d(t, "clickCancelReportAward", (function() {
				return C
			})), r.d(t, "clickConfirmReportAward", (function() {
				return k
			})), r.d(t, "viewGildModalEvent", (function() {
				return P
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return T
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return I
			})), r.d(t, "clickMessageInputEvent", (function() {
				return E
			})), r.d(t, "typeMessageInputEvent", (function() {
				return S
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return M
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return F
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return N
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return R
			})), r.d(t, "clickNextButtonEvent", (function() {
				return L
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return G
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return B
			})), r.d(t, "clickFilterEvent", (function() {
				return D
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return H
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return V
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/telemetry/models/GoldPurchase.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? s.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? s.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? s.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? s.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? s.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? s.GoldPurchaseType.GidGlobal : s.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...o.defaults(e),
					comment: t ? o.comment(e, t) : void 0,
					correlationId: Object(i.b)(e) || Object(a.e)(a.a.GildingFlow, !1),
					post: t ? o.post(e, t) : void 0,
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: o.feed(t)
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				f = e => t => ({
					...u(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: o.feed(t)
				}),
				b = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				g = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				v = e => (t, r) => n => ({
					...u(n, r),
					source: Object(c.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				x = v("award_hovercard_report"),
				w = v("cancel_award_hovercard_report"),
				_ = v("flag_award"),
				y = v("cancel_flag_award"),
				O = v("confirm_flag_award"),
				j = v("report_community_award"),
				C = v("cancel_report_community_award"),
				k = v("confirm_report_community_award"),
				P = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				T = (e, t, r) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				I = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				E = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				S = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				F = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				N = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				L = e => t => ({
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
				B = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: n,
					thingId: o
				}) => s => ({
					...u(s, o),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(c.a)(o) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: n,
						...l(e)
					}
				}),
				D = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				H = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				V = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return b
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "i", (function() {
				return O
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/gold/giveAwards.ts"),
				a = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/isComment.ts"),
				f = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, b = !!r, h = s.b(e), g = h ? Object(u.getAwardTypeFromAward)(h) : null, v = b ? g : c.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, x = r ? Object(p.a)(r) ? "comment" : "post" : void 0, w = l || c.t(e), _ = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === w)[0], y = t.offerContext || (h && 0 === h.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(_, b)), O = _ ? Math.round(1e4 * (_.baselinePennies - _.pennies) / _.baselinePennies) / 100 : 0, j = _ ? Math.round(1e4 * (_.coins - _.baselineCoins) / _.coins) / 100 : 0, C = _ ? _.baselinePennies !== _.pennies ? `${O}_percent_price` : _.baselineCoins !== _.coins ? `${j}_percent_bonus` : void 0 : void 0, k = v === d.GoldPurchaseType.Premium ? n.yb : _ ? _.pennies : void 0;
					return {
						...i.defaults(e),
						comment: r ? i.comment(e, r) : null,
						correlationId: c.r(e) || Object(m.e)(m.a.GoldPayment, !1),
						post: r ? i.post(e, r) : null,
						screen: i.screen(e),
						subreddit: r ? i.subreddit(e) : null,
						goldPurchase: {
							...h ? Object(f.a)(h) : null,
							type: v,
							gildedContent: b,
							contentType: x,
							numberCoins: _ ? _.coins : void 0,
							offerContext: y,
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
				h = (e, t, r) => n => ({
					...b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				v = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				x = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				w = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				_ = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				y = (e, t, r) => n => {
					const o = b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
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
							source: e ? d.GiveGold : c.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				O = e => t => {
					var r;
					const n = b(t, {
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
				o = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = r("./src/reddit/selectors/platform.ts"),
				c = r("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					profile: c.profile(e),
					screen: c.screen(e),
					subreddit: c.subreddit(e)
				}),
				d = (e, t, r) => n => ({
					source: Object(a.i)(n) || r ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...i(n),
					post: c.post(n, e)
				}),
				l = (e, t, r, n) => o => {
					const a = r ? c.comment(o, r) : null,
						{
							sortToUse: i
						} = Object(s.a)(o, e);
					return {
						...d(e, t, n)(o),
						comment: a,
						listing: {
							sort: i
						}
					}
				},
				u = (e, t) => r => {
					const n = c.currentPost(r);
					return n ? d(n.id, e, t)(r) : {
						source: Object(a.i)(r) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...i(r)
					}
				},
				m = (e, t) => r => Object(o.a)({
					...d(e, t)(r),
					...c.defaults(r)
				}),
				p = e => t => ({
					source: "id_card",
					action: n.c.CLICK,
					noun: e,
					...i(t),
					post: c.currentPost(t),
					userSubreddit: c.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return a
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
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
				return f
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "l", (function() {
				return g
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: Object(o.screen)(e),
					profile: Object(o.profile)(e),
					subreddit: Object(o.subreddit)(e),
					userSubreddit: Object(o.userSubreddit)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...s(t)
				}),
				c = (e, t) => r => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.post)(r, t),
					...s(r)
				}),
				i = (e, t) => r => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(o.post)(r, t),
					comment: Object(o.comment)(r, t),
					...s(r)
				}),
				d = (e, t) => r => ({
					source: "comment",
					action: n.c.UNDO,
					noun: e,
					post: Object(o.post)(r, t),
					comment: Object(o.comment)(r, t),
					...s(r)
				}),
				l = (e, t) => r => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(o.post)(r, t),
					comment: Object(o.comment)(r, t),
					...s(r)
				}),
				u = (e, t) => r => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(o.post)(r, t),
					comment: Object(o.comment)(r, t),
					...s(r)
				}),
				m = (e, t) => r => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.post)(r, t),
					comment: Object(o.comment)(r, t),
					...s(r)
				}),
				p = (e, t) => r => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(o.comment)(r, t),
					post: Object(o.post)(r, t),
					...s(r)
				}),
				f = (e, t) => r => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(o.post)(r, t),
					...s(r)
				}),
				b = (e, t) => r => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(o.post)(r, t),
					subreddit: Object(o.subredditByPostOrCommentId)(r, t)
				}),
				h = (e, t) => r => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(o.comment)(r, t),
					post: Object(o.post)(r, t),
					subreddit: Object(o.subredditByPostOrCommentId)(r, t)
				}),
				g = (e, t, r, n) => s => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(o.post)(s, r),
					subreddit: Object(o.subredditByPostOrCommentId)(s, r),
					actionInfo: {
						reason: n
					},
					...e && {
						comment: Object(o.comment)(s, r)
					}
				})
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
			}));
			var n = r("./src/reddit/helpers/flair.ts"),
				o = r("./src/reddit/selectors/gold/powerups/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...s.defaults(e)
				}),
				c = e => t => {
					const r = s.subreddit(t),
						a = Object(o.w)(t, {
							subredditId: null == r ? void 0 : r.id
						}),
						{
							userFlair: c,
							achievementFlair: i,
							supporterFlair: d
						} = e,
						l = i || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...s.defaults(t),
						subreddit: r,
						userFlair: {
							id: null == c ? void 0 : c.id,
							title: c ? Object(n.g)(c) : void 0,
							isActive: !!c || void 0,
							achievementFlairId: null == i ? void 0 : i.type,
							achievementFlairTitle: null == i ? void 0 : i.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: a
						}
					}
				},
				i = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...s.defaults(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: s.subreddit(t),
					...s.defaults(t)
				})
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				o = r("./node_modules/react/index.js"),
				s = r("./src/lib/hooks/useTooltip.ts");
			const a = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function c(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(s.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, a))
				}, [e]);
				return Object(s.b)(t)
			}
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), o.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#svg-add-collection",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), o.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
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
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, o.a.createElement("g", {
				stroke: "none"
			}, o.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				c = r.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", i({}, e, {
				className: Object(s.a)(c.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
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
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/layout/row/Inline/index.m.less"),
				s = r.n(o);
			t.a = n.a.div("inlineRow", s.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, r) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				i = r.n(c);
			t.a = Object(s.a)(e => o.a.createElement("div", {
				className: Object(a.a)(i.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: i.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: i.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return i
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(n || (n = {}));
			const s = {
				[n.Powerups]: () => o.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[n.Premium]: () => o.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var a, c;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(a || (a = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(c || (c = {}));
			const i = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === r,
					o = "new_purchaser" === r,
					s = "repeat_purchaser" === r;
				return t ? c.GildFlow : n ? c.LowCoinBalance : o ? c.NewUserTargetedOffer : s ? c.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				o = r("./src/reddit/actions/creatorStats/constants.ts");
			const s = {};
			var a = (e = s, t) => {
				switch (t.type) {
					case o.a:
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
			var i = (e = c, t) => {
				switch (t.type) {
					case o.a:
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
				postStats: a,
				subredditKarma: i
			})
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/creatorStats/index.ts"),
				s = r("./src/reddit/selectors/moderatorPermissions.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				c = r("./src/reddit/selectors/user.ts");
			Object(n.a)({
				features: {
					creatorStats: o.a
				}
			});
			const i = (e, t) => {
					var r, n;
					return null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.creatorStats) || void 0 === n ? void 0 : n.postStats[t]
				},
				d = (e, t) => {
					var r, n, o;
					const s = null === (o = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.creatorStats) || void 0 === n ? void 0 : n.subredditKarma[t]) || void 0 === o ? void 0 : o.karma;
					if (!s) return;
					const {
						fromComments: a,
						fromPosts: c
					} = s;
					return {
						fromComments: a,
						fromPosts: c
					}
				},
				l = (e, t) => {
					const r = Object(a.H)(e, {
						postId: t
					});
					return !(!r || r.isSponsored) && (Object(c.qb)(e, {
						postId: t
					}) || !!Object(s.l)(e, {
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
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				s = r("./src/reddit/selectors/moderatorPermissions.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: e => ((e, t) => Object(a.qb)(e, {
						postId: t
					}) || !!Object(s.l)(e, {
						postId: t
					}) || Object(a.H)(e))(e, t),
					experimentName: n.Q
				}) === n.fd
			}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				s = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				c = e => e.gild.message,
				i = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return a
			})), r.d(t, "s", (function() {
				return c
			})), r.d(t, "r", (function() {
				return i
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
				return f
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "l", (function() {
				return v
			})), r.d(t, "w", (function() {
				return x
			})), r.d(t, "x", (function() {
				return w
			})), r.d(t, "v", (function() {
				return _
			})), r.d(t, "y", (function() {
				return y
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "m", (function() {
				return T
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "d", (function() {
				return E
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: s.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				c = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				i = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.l)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				v = e => e.features.goldPurchase.payment.postalCode,
				x = e => e.features.goldPurchase.payment.savedCardsPending,
				w = e => e.features.goldPurchase.payment.savedCards,
				_ = e => e.features.goldPurchase.payment.rememberCard,
				y = e => e.features.goldPurchase.payment.useSavedCard,
				O = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				j = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				C = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				P = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				T = e => e.features.goldPurchase.payment.stripeToken.pending,
				I = e => e.features.goldPurchase.payment.paypal.passthrough,
				E = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d.fe7746da331fd90f03a0.js.map