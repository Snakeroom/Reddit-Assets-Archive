// https://www.redditstatic.com/desktop2x/Reddit~RpanListingUnit~StandalonePostPage~reddit-components-MediumPost.0fa8a86d119f7e70bb66.js
// Retrieved at 12/12/2022, 12:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~RpanListingUnit~StandalonePostPage~reddit-components-MediumPost"], {
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
				return h
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "f", (function() {
				return x
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
			const h = Object(r.a)(b.J),
				g = Object(r.a)(b.f),
				v = () => async (e, t) => {
					const r = t();
					e(g()), Object(i.b)(i.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(o()(r))
				}, O = Object(r.a)(b.I), j = e => {
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
				}, w = Object(r.a)(b.e), _ = Object(r.a)(b.H), y = () => async (e, t) => {
					const r = t(),
						s = Object(a.d)(r);
					if (Object(a.g)(r)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(w()), e(Object(l.g)(c.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(s)(r)), Object(i.b)(i.a.GildingFlow)
				}, x = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
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
					postId: h,
					queryKey: g,
					queryVariables: v,
					shouldDisjointAnimation: O,
					subsequentRecurringDelay: j
				} = e, [w, _] = Object(r.useState)(!1), [y, x] = Object(r.useState)(!0), [C, k] = Object(r.useState)([]), [I, T] = Object(r.useState)(i(p).reverse()), P = Object(r.useRef)(!1), E = Object(r.useRef)(null), A = Object(r.useRef)(e => {}), S = Object(r.useRef)();
				A.current = Object(r.useCallback)(e => {
					let n = e || d();
					const r = [...I].reverse().join("");
					let o = parseInt(r) + n;
					o > t && (n = t - parseInt(r), o = t);
					const s = i(o).reverse();
					_(!1), k(I), T(s), x(!1), S.current = setTimeout(() => {
						_(!0)
					}, 0)
				}, [t, d, I]);
				const N = Object(r.useRef)(() => {}),
					M = Object(r.useRef)(),
					R = Object(r.useRef)();
				N.current = Object(r.useCallback)(() => {
					R.current = setTimeout(() => {
						A.current();
						const e = [...C].reverse().join("");
						parseInt(e) < t && N.current()
					}, j())
				}, [t, j, C]);
				const F = Object(r.useRef)(0),
					D = Object(r.useRef)(!1),
					G = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, r = 1 !== n;
							t ? (D.current = !0, P.current || (P.current = !0, M.current = setTimeout(() => {
								A.current(), N.current()
							}, u())), F.current > 0 && (A.current(F.current), F.current = 0)) : r && (D.current = !1)
						})
					}, []);
				Object(a.a)(E, G);
				const [L, K] = Object(r.useState)(!1), B = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, r = 1 !== n;
						t ? K(!0) : r && K(!1)
					})
				}, []), z = Object(r.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(a.a)(E, B, z.current);
				const V = Object(s.a)(t);
				Object(r.useEffect)(() => {
					if (void 0 !== V && V !== t) {
						const e = t - V;
						D.current ? A.current(e) : F.current += e
					}
					return () => {
						clearTimeout(M.current), clearTimeout(R.current), clearTimeout(S.current)
					}
				}, [t]);
				const U = Object(r.useCallback)(() => x(!0), [x]),
					q = 0 === C.length,
					W = y || q,
					H = Object(r.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, n));
				return o.a.createElement(o.a.Fragment, null, !f && o.a.createElement("div", {
					className: l.a.countAnimation
				}, I.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const r = Math.abs(t),
							o = [n];
						if (n === r) return o;
						let s = !0;
						for (; s;) ++n > 9 && (n = 0), o.push(n), n === r && (s = !1);
						return o
					})(C[t] || 0, e);
					return o.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: U,
						style: w && C.length > 0 && !y ? {
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
				}, [...I].reverse().join(""))), o.a.createElement("span", {
					ref: E
				}), L && o.a.createElement(c.a, {
					variables: v,
					onData: f ? m : b,
					queryKey: g,
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
				m = c.a.wrapped(a.b, "FlairComponent", d.a);
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
				h = n("./src/reddit/components/Flair/index.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				v = n("./src/reddit/controls/RadioInput/index.tsx"),
				O = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				j = n("./src/reddit/helpers/trackers/postComposer.ts"),
				w = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Search/index.tsx"),
				y = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				x = n.n(y);
			class C extends s.a.Component {
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
						selectedTemplateId: n
					} = this.props, {
						searchQuery: o
					} = this.state, c = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), a = !!n && c.some(e => e.id === n);
					return s.a.createElement("div", {
						className: x.a.container
					}, s.a.createElement("div", {
						className: x.a.searchBoxWrapper
					}, s.a.createElement("input", {
						className: x.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: r.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), s.a.createElement(_.a, {
						className: x.a.searchIcon
					})), s.a.createElement(v.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, c.map((e, t) => {
						const r = Object(u.c)(e),
							o = n === e.id || !a && 0 === t;
						return s.a.createElement(O.a, {
							className: x.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, s.a.createElement(h.b, {
							className: x.a.flairComponent,
							flair: r,
							forceSmallEmojis: !0
						}), e.textEditable && s.a.createElement(w.a, {
							className: x.a.pencil
						}))
					})))
				}
			}
			var k = Object(g.c)(C),
				I = n("./src/reddit/components/FlairSearch/index.m.less"),
				T = n.n(I);
			const P = Object(d.a)(e => e && Object(u.c)(e)),
				E = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: f.g
				}),
				A = Object(c.b)(E);
			t.a = A(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: o,
					onChange: c,
					subredditId: a,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: f,
					isModerator: h
				} = e, g = Object(p.a)(), v = d && n && n.templateId && d[n.templateId] || void 0, O = Object(b.a)(), j = n || P(v);
				return s.a.createElement("div", {
					className: Object(i.a)(o, T.a.container)
				}, d && l && s.a.createElement(k, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							g(Object(m.b)({
								userFlair: t
							})), c(n)
						}
					},
					selectedTemplateId: v ? v.id : "",
					templateIds: l,
					templates: d
				}), j && v && (h || v.textEditable) && s.a.createElement("div", {
					className: T.a.flairEditSection
				}, s.a.createElement("div", {
					className: T.a.editLabel
				}, r.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), f && s.a.createElement("div", {
					className: T.a.restrictionHintText
				}, Object(u.k)(v)), s.a.createElement(O, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: j,
					flairTemplate: v,
					flairTemplateType: t,
					isFlairModOnly: v.modOnly,
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
				})(n), f = o && !!n.viewCount, b = Object(c.e)(e => Object(l.a)(e, n.id)), h = Object(c.e)(e => Object(l.c)(e, n.id)), g = Object(d.c)(n, h), v = b && g === d.b.Available;
				return s.a.createElement("div", {
					className: Object(a.a)(m.a.viewCounts, t)
				}, f && s.a.createElement("span", null, p), f && !!n.upvoteRatio && s.a.createElement("span", {
					className: m.a.dotSpacer
				}), !!n.upvoteRatio && !v && s.a.createElement("span", null, u))
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
				h = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				g = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				v = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				j = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				w = n("./src/reddit/selectors/meta.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				y = n("./node_modules/reselect/es/index.js"),
				x = n("./src/reddit/controls/Score/index.m.less"),
				C = n.n(x);
			const k = {
					placement: "right"
				},
				I = e => e.voteState === O.a.downvoted ? Object(v.a)(e).voteText.downvote : e.voteState === O.a.upvoted ? Object(v.a)(e).voteText.upvote : Object(h.a)(Object(b.a)(e)),
				T = Object(y.c)({
					locale: e => Object(w.j)(e),
					post: (e, t) => {
						let {
							shouldShowUpvoteRatioOnHover: n,
							postId: r
						} = t;
						if (n && r) return Object(_.G)(e, {
							postId: r
						})
					}
				}),
				P = () => 0,
				E = Object(d.b)(T),
				A = Object(s.a)(e => {
					const t = {
							color: e.light ? f.a.lightboxHeaderText : I(e)
						},
						{
							score: n,
							postId: s = "",
							locale: b,
							isVoteCountAnimation: h,
							isCountAnimShadowTestEnabled: v,
							shouldShowUpvoteRatioOnHover: O,
							post: w
						} = e,
						_ = Object(d.d)(),
						y = null == b ? void 0 : b.startsWith("en"),
						x = e.isScoreHidden ? y ? r.fbt._("Vote", null, {
							hk: "2TMson"
						}) : i.a.createElement("span", {
							className: C.a.dot
						}, "•") : Object(c.b)(n),
						T = Object(a.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && _(Object(l.H)({
								postId: s,
								delta: t
							}))
						}, [_, s]),
						E = Object(a.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: s
								}
							}
						}),
						A = !e.isScoreHidden && h && n < j.a,
						S = Object(g.a)(k),
						N = n < 0 ? 0 : n;
					return i.a.createElement("div", {
						className: Object(o.a)(C.a.score, e.className),
						style: t,
						onMouseEnter: O ? S.show : void 0,
						onMouseLeave: O ? S.hide : void 0,
						ref: O ? S.target.ref : void 0
					}, (A || v) && i.a.createElement(i.a.Fragment, null, i.a.createElement(u.b, {
						initialDisplayCount: N,
						countToUpperBound: N,
						initialDelay: P,
						subsequentRecurringDelay: P,
						incrementDelta: P,
						shouldDisjointAnimation: !0,
						postId: s,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: E.current,
						onDataCB: T,
						isLoadTestOnly: v && !A
					})), !A && x, O && w && i.a.createElement(m.a, S, i.a.createElement(p.a, {
						className: C.a.viewCount,
						post: w,
						showViewCount: !1
					})))
				});
			t.a = E(A)
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
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "j", (function() {
				return x
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
				h = e => t => ({
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
				g = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.VIEW,
					noun: "warning",
					post: Object(a.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				v = e => t => ({
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
				j = (e, t, n) => r => ({
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
				w = (e, t, n) => r => ({
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
				_ = () => e => {
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
				y = e => t => {
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
				x = e => t => {
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
				return h
			})), n.d(t, "i", (function() {
				return g
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
					isModAward: e.awardType === r.f.Moderator,
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
				h = (e, t) => b(e, t, "disable_in_community"),
				g = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return u
			})), n.d(t, "clickGildEvent", (function() {
				return f
			})), n.d(t, "clickRpanGiveAward", (function() {
				return b
			})), n.d(t, "clickAddAward", (function() {
				return h
			})), n.d(t, "clickHideAward", (function() {
				return g
			})), n.d(t, "clickConfirmHideAward", (function() {
				return v
			})), n.d(t, "clickCancelHideAward", (function() {
				return O
			})), n.d(t, "clickAwardReportFlow", (function() {
				return w
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return _
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return y
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return x
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return C
			})), n.d(t, "clickReportAward", (function() {
				return k
			})), n.d(t, "clickCancelReportAward", (function() {
				return I
			})), n.d(t, "clickConfirmReportAward", (function() {
				return T
			})), n.d(t, "viewGildModalEvent", (function() {
				return P
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return E
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return A
			})), n.d(t, "clickMessageInputEvent", (function() {
				return S
			})), n.d(t, "typeMessageInputEvent", (function() {
				return N
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return M
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return R
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return F
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return D
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return G
			})), n.d(t, "clickNextButtonEvent", (function() {
				return L
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return K
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return B
			})), n.d(t, "clickFilterEvent", (function() {
				return z
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return V
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return U
			}));
			var r = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/models/GoldPurchase.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/helpers/isComment.ts"),
				l = n("./src/reddit/selectors/gild.ts");
			const u = e => e.awardType === o.f.Global && e.awardSubType === o.d.Appreciation ? a.GoldPurchaseType.GidAppreciation : e.awardType === o.f.Global && e.awardSubType === o.d.Premium ? a.GoldPurchaseType.GidPremium : e.awardSubType === o.d.Group ? a.GoldPurchaseType.GidGroup : e.awardType === o.f.Community ? a.GoldPurchaseType.GidCommunity : e.awardType === o.f.Moderator ? a.GoldPurchaseType.GidMod : e.awardType === o.f.Global && e.awardSubType === o.d.Global ? a.GoldPurchaseType.GidGlobal : a.GoldPurchaseType.GidUnknown,
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
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				h = e => t => ({
					...p(t, e),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: c.r(t)
				}),
				g = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: m(e)
				}),
				v = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: m(e)
				}),
				O = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: m(e)
				}),
				j = e => (t, n) => r => ({
					...p(r, n),
					source: Object(d.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: m(t)
				}),
				w = j("award_hovercard_report"),
				_ = j("cancel_award_hovercard_report"),
				y = j("flag_award"),
				x = j("cancel_flag_award"),
				C = j("confirm_flag_award"),
				k = j("report_community_award"),
				I = j("cancel_report_community_award"),
				T = j("confirm_report_community_award"),
				P = (e, t, n) => r => ({
					...p(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				E = (e, t, n) => r => ({
					...p(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: m(e, n)
				}),
				A = (e, t) => n => ({
					...p(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				S = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				N = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				M = e => t => ({
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
				F = (e, t) => n => ({
					...p(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				D = (e, t) => n => ({
					...p(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				G = e => t => ({
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
				K = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				B = e => {
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
				z = e => t => ({
					...p(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				V = () => e => ({
					...p(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				U = () => e => ({
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
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "j", (function() {
				return x
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
					} = t, b = !!n, h = s.b(e), g = h ? Object(u.getAwardTypeFromAward)(h) : null, v = b ? g : a.p(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, O = n ? Object(p.a)(n) ? "comment" : "post" : void 0, j = l || a.u(e), w = [...Object(c.d)(e), ...Object(c.f)(e)].filter(e => e.mobileId === j)[0], _ = t.offerContext || (h && 0 === h.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(w, b)), y = w ? Math.round(1e4 * (w.baselinePennies - w.pennies) / w.baselinePennies) / 100 : 0, x = w ? Math.round(1e4 * (w.coins - w.baselineCoins) / w.coins) / 100 : 0, C = w ? w.baselinePennies !== w.pennies ? `${y}_percent_price` : w.baselineCoins !== w.coins ? `${x}_percent_bonus` : void 0 : void 0, k = v === d.GoldPurchaseType.Premium ? r.Db : w ? w.pennies : void 0;
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
							...h ? Object(f.a)(h) : null,
							type: v,
							gildedContent: b,
							contentType: O,
							numberCoins: w ? w.coins : void 0,
							offerContext: _,
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
				h = (e, t, n) => r => ({
					...b(r, {
						packageId: t,
						thingId: e,
						offerContext: n
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
				j = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				w = (e, t) => n => ({
					...b(n, {
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
				y = (e, t, n) => r => {
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
				x = e => t => {
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
					source: Object(c.j)(r) || n ? "post_lightbox" : "post_detail",
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
						source: Object(c.j)(n) || t ? "post_lightbox" : "post_detail",
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
			n.d(t, "l", (function() {
				return c
			})), n.d(t, "m", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
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
				h = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					subreddit: Object(o.ob)(n, t)
				}),
				g = (e, t) => n => ({
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
				v = (e, t, n, r) => s => ({
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
				j = (e, t, n) => r => ({
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
				})
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
				return h
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
				h = e => {
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
				return h
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "y", (function() {
				return j
			})), n.d(t, "w", (function() {
				return w
			})), n.d(t, "z", (function() {
				return _
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "n", (function() {
				return P
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "d", (function() {
				return A
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
				h = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				v = e => e.features.goldPurchase.payment.postalCode,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				j = e => e.features.goldPurchase.payment.savedCards,
				w = e => e.features.goldPurchase.payment.rememberCard,
				_ = e => e.features.goldPurchase.payment.useSavedCard,
				y = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				x = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				C = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				I = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				T = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				P = e => e.features.goldPurchase.payment.stripeToken.pending,
				E = e => e.features.goldPurchase.payment.paypal.passthrough,
				A = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~RpanListingUnit~StandalonePostPage~reddit-components-MediumPost.0fa8a86d119f7e70bb66.js.map