// https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.0693d675be4ca20a3675.js
// Retrieved at 5/17/2021, 3:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"], {
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/lodash/every.js"),
				s = n.n(r);

			function o(e) {
				let t = null,
					n = null;
				return (...r) => (null !== t && r.length === t.length && s()(r, (e, n) => e === t[n]) || (t = r, n = e(...r)), n)
			}
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
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
			const s = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(r.a)(s("awardSheetInfoRequested")),
				a = Object(r.a)(s("manageableAwardsRequested")),
				c = Object(r.a)(s("createCommunityAward")),
				i = Object(r.a)(s("createGlobalAward")),
				d = Object(r.a)(s("createModAward")),
				l = Object(r.a)(s("createAwardFailed")),
				u = Object(r.a)(s("createAwardSuccessful")),
				m = Object(r.a)(s("removeCommunityAward")),
				p = Object(r.a)(s("disableAwardinCommunity")),
				f = Object(r.a)(s("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "f", (function() {
				return C
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/postParentMessage/index.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/selectors/gild.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/telemetry/index.ts"),
				b = n("./src/reddit/actions/gold/constants.ts");
			const h = Object(r.a)(b.L),
				v = Object(r.a)(b.g),
				g = () => async (e, t) => {
					const r = t();
					e(v()), Object(i.b)(i.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: s
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(s()(r))
				}, w = Object(r.a)(b.K), x = ({
					awardId: e,
					correlationId: t,
					thingId: n
				}) => async (r, s) => {
					const c = s(),
						i = e ? Object(u.a)(c, e) : void 0;
					r(w({
						award: i && i.isEnabled ? i : void 0,
						thingId: n,
						correlationId: t
					})), r(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const f = Object(p.K)(c, {
						thingId: n
					});
					let b = null;
					if (f) b = f.id;
					else if (Object(o.a)(n)) {
						const e = Object(m.F)(c, {
							postId: n
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, n)
				}, j = Object(r.a)(b.f), O = Object(r.a)(b.J), y = () => async (e, t) => {
					const r = t(),
						o = Object(c.d)(r);
					if (Object(c.g)(r)) {
						const e = "close.gild";
						Object(s.a)({
							type: e
						})
					}
					e(j()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(o)(r)), Object(i.b)(i.a.GildingFlow)
				}, C = () => async () => {
					Object(s.a)({
						type: "login.gild"
					})
				}
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				a = n("./src/reddit/hooks/usePrevious.ts"),
				c = n("./src/reddit/components/CountAnimation/config.ts"),
				i = n("./src/reddit/components/CountAnimation/helpers.ts"),
				d = n("./src/reddit/components/CountAnimation/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const {
					initialDisplayCount: t,
					countToUpperBound: n,
					incrementDelta: d,
					initialDelay: u,
					subsequentRecurringDelay: m,
					shouldDisjointAnimation: p,
					id: f
				} = e, [b, h] = Object(r.useState)(!1), [v, g] = Object(r.useState)(!0), [w, x] = Object(r.useState)([]), [j, O] = Object(r.useState)(Object(i.d)(t).reverse()), y = Object(r.useRef)(!1), C = Object(r.useRef)(null), _ = Object(r.useRef)(e => {}), I = Object(r.useRef)();
				_.current = Object(r.useCallback)(e => {
					let t = e || d();
					const r = [...j].reverse().join("");
					let s = parseInt(r) + t;
					s > n && (t = n - parseInt(r), s = n);
					const o = Object(i.d)(s).reverse();
					h(!1), x(j), O(o), g(!1), I.current = setTimeout(() => {
						h(!0)
					}, 0)
				}, [n, d, j]);
				const k = Object(r.useRef)(() => {}),
					E = Object(r.useRef)(),
					P = Object(r.useRef)();
				k.current = Object(r.useCallback)(() => {
					P.current = setTimeout(() => {
						_.current();
						const e = [...w].reverse().join("");
						parseInt(e) < n && k.current()
					}, m())
				}, [n, m, w]);
				const S = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && (y.current || (y.current = !0, E.current = setTimeout(() => {
							_.current(), k.current()
						}, u())))
					})
				}, []);
				Object(o.a)(C, S);
				const T = Object(a.a)(n);
				Object(r.useEffect)(() => (void 0 !== T && T !== n && _.current(n - T), () => {
					clearTimeout(E.current), clearTimeout(P.current), clearTimeout(I.current)
				}), [n]);
				const N = Object(r.useCallback)(() => g(!0), [g]),
					A = 0 === w.length,
					F = v || A;
				return s.a.createElement("div", {
					className: l.a.countAnimation,
					ref: C
				}, j.map((e, t) => {
					const n = w[t] || 0,
						r = Object(i.f)(n, e);
					return s.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: N,
						style: b && w.length > 0 && !v ? {
							transform: `translateY(-${p&&r.length>1?100:100*(r.length-1)}%)`,
							transitionDuration: `${(p?c.b.disjointAnimationDuration:c.b.animationIncrementDuration)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, F ? s.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : r.map((e, t) => {
						const n = 0 === t || t === r.length - 1;
						if (!p || p && n) return s.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), s.a.createElement("span", {
					id: f,
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...j].reverse().join("")))
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
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => a.a.createElement(c.h, {
				className: l.a.modalHeader
			}, a.a.createElement(c.p, null, e.title), a.a.createElement(i.a, {
				onClick: e.onClosePressed || s.a
			}, a.a.createElement(c.b, null)))
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
				s = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				o = n.n(s);
			const a = r.a.div("Wrapper", o.a);
			t.a = a
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
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Flair/index.tsx"),
				i = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(i);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(c.b, "FlairComponent", d.a);
			t.a = e => e.flair ? o.a.createElement(u, null, o.a.createElement(l, null, r.fbt._("{placeholder}", [r.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), o.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : o.a.createElement(u, null, r.fbt._("No flair selected", null, {
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
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(i.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				f = s()((e = p) => Object(c.a)({
					getComponent: () => Object(l.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/selectors/moderatorPermissions.ts"),
				p = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				v = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				g = n("./src/reddit/icons/svgs/Search/index.tsx"),
				w = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				x = n.n(w);
			class j extends o.a.Component {
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
						selectedTemplateId: n
					} = this.props, {
						searchQuery: s
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(s)), c = !!n && a.some(e => e.id === n);
					return o.a.createElement("div", {
						className: x.a.container
					}, o.a.createElement("div", {
						className: x.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: x.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: r.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: s
					}), o.a.createElement(g.a, {
						className: x.a.searchIcon
					})), o.a.createElement(b.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, a.map((e, t) => {
						const r = Object(u.c)(e),
							s = n === e.id || !c && 0 === t;
						return o.a.createElement(h.a, {
							className: x.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: s ? 0 : -1,
							value: e.id
						}, o.a.createElement(f.b, {
							className: x.a.flairComponent,
							flair: r,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(v.a, {
							className: x.a.pencil
						}))
					})))
				}
			}
			var O = n("./src/reddit/components/FlairSearch/index.m.less"),
				y = n.n(O);
			const C = "FlairSearch-EmojiPicker-DropdownId",
				_ = Object(d.a)(e => e && Object(u.c)(e)),
				I = Object(c.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: m.f
				}),
				k = Object(a.b)(I);
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.onFlairEdit = e => {
						const {
							templates: t
						} = this.props, n = t && e.templateId ? t[e.templateId] : void 0;
						let r = e;
						n && (r = Object(u.d)({
							flair: e,
							template: n,
							ignoreTextAllowance: !0
						})), this.props.onChange(r)
					}, this.onTemplateSelected = e => {
						const {
							templates: t
						} = this.props;
						if (t) {
							const n = t[e],
								r = Object(u.c)(n);
							this.props.onChange(r)
						}
					}
				}
				render() {
					const {
						props: e
					} = this, {
						isModerator: t,
						templates: n,
						templateIds: s,
						subredditId: a
					} = e, c = n && e.flair && e.flair.templateId && n[e.flair.templateId] || void 0, d = Object(p.a)(), l = e.flair || _(c);
					return o.a.createElement("div", {
						className: Object(i.a)(e.className, y.a.container)
					}, n && s && o.a.createElement(j, {
						flairTemplateType: e.flairTemplateType,
						onChange: this.onTemplateSelected,
						selectedTemplateId: c ? c.id : "",
						templateIds: s,
						templates: n
					}), l && c && (t || c.textEditable) ? o.a.createElement("div", {
						className: y.a.flairEditSection
					}, o.a.createElement("div", {
						className: y.a.editLabel
					}, r.fbt._("Edit flair", null, {
						hk: "1APWWu"
					})), e.areFlairRestrictionsEnabled && o.a.createElement("div", {
						className: y.a.restrictionHintText
					}, Object(u.k)(c)), o.a.createElement(d, {
						autofocus: !0,
						emojiPickerId: C,
						flair: l,
						flairTemplate: c,
						flairTemplateType: e.flairTemplateType,
						isFlairModOnly: c.modOnly,
						onChange: this.onFlairEdit,
						subredditId: a
					})) : null)
				}
			}
			t.a = k(E)
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				c = n.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = s.a.memo((function({
				visible: e,
				...t
			}) {
				const [n, a] = Object(r.useState)(e);
				return Object(r.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, a(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), a(!1)
					}
				}, [e]), e ? s.a.createElement("div", i({
					className: Object(o.a)(c.a.tooltip, {
						[c.a.visible]: n
					})
				}, t.popperProps), t.children, n && s.a.createElement("div", i({
					className: c.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/PopupPortal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/lib/CSSVariableProvider/index.tsx"),
				c = n("./src/reddit/constants/zIndex.ts");
			const i = "POPUP_CONTAINER";
			let d;
			const l = ["right", "top"],
				u = ["left", "top"];

			function m(e) {
				const [t, n] = Object(r.useState)(null);
				return Object(r.useEffect)(() => {
					const t = () => {
						const t = (e => {
							let t;
							if (!(t = "string" == typeof e ? document.getElementById(e) : e.current)) return;
							const n = t.getBoundingClientRect(),
								{
									style: r
								} = Object(o.b)({
									isFixed: !1,
									targetBox: n,
									targetPosition: l,
									tooltipPosition: u,
									tooltipSize: {
										width: 100,
										height: 100
									}
								});
							return {
								x: r.left,
								y: r.top
							}
						})(e);
						t && n(t)
					};
					return t(), window.addEventListener("resize", t), () => {
						window.removeEventListener("resize", t)
					}
				}, [e]), t
			}

			function p(e) {
				const {
					children: t,
					rightOf: n
				} = e, r = m(n);
				return r && (d || (d = document.getElementById(i))) ? Object(a.d)(s.a.createElement("div", {
					style: {
						position: "absolute",
						transform: `translate(${r.x}px, ${r.y}px)`,
						zIndex: c.e
					}
				}, t), d) : null
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
				s = n.n(r),
				o = n("./src/reddit/constants/flair.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				c = n("./src/reddit/models/Flair/index.ts");
			const i = e => (e || []).find(e => e.type === c.f.Text || e.type === c.f.Image || e.type === c.f.Richtext);
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
				const c = Object(a.g)(t).length;
				return 0 === c ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : c > o.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(r) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : s()(n, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
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
				return O
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				m = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				b = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/VerticalVotes/index.m.less"),
				g = n.n(v);
			const w = Object(c.c)({
					isNightMode: h.V,
					totalDiscount: b.d,
					variantAnimationConfig: b.e
				}),
				x = Object(a.b)(w),
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				O = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class y extends o.a.Component {
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
							isNightMode: n,
							shouldShowScore: s = !0,
							upvoteButtonClassName: a,
							containerRef: c,
							model: d,
							totalDiscount: p,
							variantAnimationConfig: b,
							postId: h
						} = e,
						v = j(e),
						w = O(e),
						x = d.voteState;
					return o.a.createElement("div", {
						className: Object(i.a)(g.a.votesContainer, e.className),
						id: `vote-arrows-${d.id}`,
						ref: c
					}, v ? o.a.createElement(m.b, {
						"aria-label": r.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": x === f.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: n,
						onClick: this.onUpvote,
						voteState: x
					}) : o.a.createElement("button", {
						"aria-label": r.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": x === f.a.upvoted,
						className: Object(i.a)(l.n, a),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: x
					})), !e.compact && s && o.a.createElement(u.a, {
						className: Object(i.a)(g.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: x,
						isScoreHidden: e.model.isScoreHidden,
						totalDiscount: p,
						shouldDisjointAnimation: null == b ? void 0 : b.shouldDisjointAnimation,
						shouldShowPageTransPersistence: null == b ? void 0 : b.shouldShowPageTransPersistence,
						postId: h
					}), w ? o.a.createElement(m.a, {
						"aria-label": r.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": x === f.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: n,
						onClick: this.onDownvote,
						voteState: x
					}) : o.a.createElement("button", {
						"aria-label": r.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": x === f.a.downvoted,
						className: Object(i.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: x
					})))
				}
			}
			const C = Object(d.a)(x(y));
			t.a = C
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "d", (function() {
				return F
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const c = (e, t, n) => r => {
				const s = e(r),
					a = t(r),
					c = !s && a;
				return Object(o.a)(n.baseClassName, r.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: s,
					[n.mIsVoteable]: c
				})
			};
			var i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				l = n("./src/reddit/models/Vote/index.ts"),
				u = n("./src/reddit/controls/Downvote/index.m.less"),
				m = n.n(u);
			const p = {
					...m.a,
					baseClassName: m.a.Downvote
				},
				f = ({
					voteState: e
				}) => e === l.a.downvoted,
				b = c(f, ({
					interactive: e
				}) => !1 !== e, p);
			var h = e => {
					const t = Object(i.a)();
					return s.a.createElement(d.b, {
						className: b(e),
						compact: e.compact,
						isFilled: t && f(e)
					})
				},
				v = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = n("./src/reddit/controls/Upvote/index.m.less"),
				w = n.n(g);
			const x = {
					...w.a,
					baseClassName: w.a.Upvote
				},
				j = ({
					voteState: e
				}) => e === l.a.upvoted,
				O = c(j, ({
					interactive: e
				}) => !1 !== e, x);
			var y = e => {
					const t = Object(i.a)();
					return s.a.createElement(v.b, {
						className: O(e),
						compact: e.compact,
						isFilled: t && j(e)
					})
				},
				C = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				_ = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				E = n.n(k);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => Object(o.a)({
					[E.a.compact]: e.compact,
					[E.a.dark]: Object(_.b)(Object(C.a)(e)),
					[E.a.nightmode]: e.isNightMode
				}),
				T = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: r,
						...a
					} = e;
					return s.a.createElement("button", P({}, a, {
						className: Object(o.a)(E.a.customDownvote, S(e), {
							[E.a.voted]: e.voteState === l.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				N = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: r,
						...a
					} = e;
					return s.a.createElement("button", P({}, a, {
						className: Object(o.a)(E.a.customUpvote, S(e), {
							[E.a.voted]: e.voteState === l.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				A = h,
				F = y
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = "reddit",
				s = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
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
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
			class m extends s.a.Component {
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
					return e.hidden ? null : s.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(o.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? s.a.createElement(i.a, {
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
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/keycodes.ts");
			class a extends s.a.Component {
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
						return s.a.Children.forEach(this.props.children, t => {
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
						const s = e.key === o.b.ArrowUp,
							a = e.key === o.b.ArrowDown;
						if (s || a) {
							const t = this.getValues();
							if (!t.length) return;
							const o = r ? t.indexOf(r) : 0,
								a = t[((s ? o - 1 : o + 1) + t.length) % t.length];
							n(a), this.setState({
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
					return s.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, s.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), s.a.Children.map(e.children, (n, r) => {
						const o = 0 === r,
							a = n.props.value === t,
							c = null !== t ? a ? 0 : -1 : o ? 0 : -1;
						return s.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: a,
							tabIndex: c
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./node_modules/lodash/random.js"),
				i = n.n(c),
				d = n("./node_modules/react/index.js"),
				l = n.n(d),
				u = n("./node_modules/react-redux/es/index.js"),
				m = n("./src/reddit/components/CountAnimation/index.tsx"),
				p = n("./src/reddit/components/CountAnimation/config.ts"),
				f = n("./src/reddit/components/CountAnimation/helpers.ts"),
				b = n("./src/reddit/constants/colors.ts"),
				h = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				v = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/selectors/meta.ts"),
				j = n("./src/reddit/controls/Score/index.m.less"),
				O = n.n(j);
			const y = e => e.voteState === w.a.downvoted ? Object(g.a)(e).voteText.downvote : e.voteState === w.a.upvoted ? Object(g.a)(e).voteText.upvote : Object(v.a)(Object(h.a)(e)),
				{
					upvoteCount: {
						inititalDelayRange: {
							lower: C,
							upper: _
						},
						subsequentRecurringDelayRange: {
							lower: I,
							upper: k
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: E,
							upper: P
						}
					}
				} = p.b,
				S = () => i()(C, _),
				T = () => i()(I, k),
				N = Object(u.b)(e => ({
					locale: Object(x.i)(e)
				})),
				A = Object(o.a)(e => {
					const t = {
							color: e.light ? b.b.lightboxHeaderText : y(e)
						},
						{
							totalDiscount: n,
							score: o,
							shouldDisjointAnimation: c,
							shouldShowPageTransPersistence: u,
							postId: p = "",
							locale: h
						} = e,
						v = null == h ? void 0 : h.startsWith("en"),
						g = e.isScoreHidden ? v ? r.fbt._("Vote", null, {
							hk: "2TMson"
						}) : l.a.createElement("span", {
							className: O.a.dot
						}, "•") : Object(a.b)(o),
						w = Object(d.useCallback)(() => i()(Math.ceil((n || 0) * E), Math.ceil((n || 0) * P)), [n]),
						x = Object(d.useRef)(Object(f.k)(p, f.a.Vote)),
						j = Object(d.useRef)(u && void 0 !== n && Object(f.e)(x.current));
					return l.a.createElement("div", {
						className: Object(s.a)(O.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, e.isScoreHidden || void 0 === n ? g : l.a.createElement(m.a, {
						initialDisplayCount: j.current || o - n,
						countToUpperBound: o,
						initialDelay: S,
						subsequentRecurringDelay: T,
						incrementDelta: w,
						shouldDisjointAnimation: c,
						id: x.current
					}))
				});
			t.a = N(A)
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
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
				return v
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/trackers/gild.ts");
			const c = e => ({
					...s.defaults(e),
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
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
					type: Object(a.getAwardTypeFromAward)(e)
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
					goldPurchase: e ? i(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, n) => r => ({
					...c(r),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, r) => s => ({
					...c(s),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
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
					...c(r),
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
					goldPurchase: n ? i(n) : null
				}),
				f = (e, t, n) => r => ({
					...c(r),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? i(n) : null
				}),
				b = (e, t, n) => r => ({
					...c(r),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: i(e),
					profile: s.profileById(r, t),
					subreddit: s.subredditById(r, t)
				}),
				h = (e, t) => b(e, t, "disable_in_community"),
				v = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), n.d(t, "clickGildEvent", (function() {
				return m
			})), n.d(t, "clickRpanGiveAward", (function() {
				return p
			})), n.d(t, "clickAddAward", (function() {
				return f
			})), n.d(t, "clickHideAward", (function() {
				return b
			})), n.d(t, "clickConfirmHideAward", (function() {
				return h
			})), n.d(t, "clickCancelHideAward", (function() {
				return v
			})), n.d(t, "clickAwardReportFlow", (function() {
				return w
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return x
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return j
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return O
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return y
			})), n.d(t, "clickReportAward", (function() {
				return C
			})), n.d(t, "clickCancelReportAward", (function() {
				return _
			})), n.d(t, "clickConfirmReportAward", (function() {
				return I
			})), n.d(t, "viewGildModalEvent", (function() {
				return k
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return E
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return P
			})), n.d(t, "clickMessageInputEvent", (function() {
				return S
			})), n.d(t, "typeMessageInputEvent", (function() {
				return T
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return N
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return A
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return F
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return M
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return R
			})), n.d(t, "clickNextButtonEvent", (function() {
				return D
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return L
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return G
			})), n.d(t, "clickFilterEvent", (function() {
				return U
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return B
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return V
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/telemetry/models/GoldPurchase.ts"),
				a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === r.f.Global && e.awardSubType === r.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === r.f.Global && e.awardSubType === r.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === r.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === r.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === r.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === r.f.Global && e.awardSubType === r.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
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
					correlationId: Object(i.b)(e) || Object(a.d)(a.a.GildingFlow, !1),
					post: t ? s.post(e, t) : void 0,
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
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
					noun: "add_award"
				}),
				b = (e, t) => n => ({
					...u(n, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => n => ({
					...u(n, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				v = (e, t) => n => ({
					...u(n, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, n) => r => ({
					...u(r, n),
					source: Object(c.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				w = g("award_hovercard_report"),
				x = g("cancel_award_hovercard_report"),
				j = g("flag_award"),
				O = g("cancel_flag_award"),
				y = g("confirm_flag_award"),
				C = g("report_community_award"),
				_ = g("cancel_report_community_award"),
				I = g("confirm_report_community_award"),
				k = (e, t, n) => r => ({
					...u(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				E = (e, t, n) => r => ({
					...u(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, n)
				}),
				P = (e, t) => n => ({
					...u(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				S = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				T = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				F = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				M = (e, t) => n => ({
					...u(n, e),
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
				D = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				L = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				G = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: n,
					numberCoins: r,
					thingId: s
				}) => o => ({
					...u(o, s),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(c.a)(s) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: n,
						numberCoins: r,
						...l(e)
					}
				}),
				U = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				B = () => e => ({
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
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "j", (function() {
				return C
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts"),
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
					} = t, b = !!n, h = o.b(e), v = h ? Object(u.getAwardTypeFromAward)(h) : null, g = b ? v : c.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, w = n ? Object(p.a)(n) ? "comment" : "post" : void 0, x = l || c.t(e), j = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === x)[0], O = t.offerContext || (h && 0 === h.coinPrice ? s.a.StorefrontFreeAward : Object(s.d)(j, b)), y = j ? Math.round(1e4 * (j.baselinePennies - j.pennies) / j.baselinePennies) / 100 : 0, C = j ? Math.round(1e4 * (j.coins - j.baselineCoins) / j.coins) / 100 : 0, _ = j ? j.baselinePennies !== j.pennies ? `${y}_percent_price` : j.baselineCoins !== j.coins ? `${C}_percent_bonus` : void 0 : void 0, I = g === d.GoldPurchaseType.Premium ? r.sb : j ? j.pennies : void 0;
					return {
						...i.defaults(e),
						comment: n ? i.comment(e, n) : null,
						correlationId: c.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? i.post(e, n) : null,
						screen: i.screen(e),
						subreddit: n ? i.subreddit(e) : null,
						goldPurchase: {
							...h ? Object(f.a)(h) : null,
							type: g,
							gildedContent: b,
							contentType: w,
							numberCoins: j ? j.coins : void 0,
							offerContext: O,
							offerType: _
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: I
						},
						purchase: {
							priceMicros: I
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
				v = e => t => ({
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
				w = e => t => ({
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
				j = (e, t) => n => ({
					...b(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				O = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				y = (e, t, n) => r => {
					const s = b(r, {
						packageId: t,
						thingId: e,
						offerContext: n
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
							source: e ? d.GiveGold : c.o(r) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				C = e => t => {
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
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
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
				s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					profile: c.profile(e),
					screen: c.screen(e),
					subreddit: c.subreddit(e)
				}),
				d = (e, t, n) => r => ({
					source: Object(a.h)(r) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...i(r),
					post: c.post(r, e)
				}),
				l = (e, t, n, r) => s => {
					const a = n ? c.comment(s, n) : null,
						{
							sortToUse: i
						} = Object(o.a)(s, e);
					return {
						...d(e, t, r)(s),
						comment: a,
						listing: {
							sort: i
						}
					}
				},
				u = (e, t) => n => {
					const r = c.currentPost(n);
					return r ? d(r.id, e, t)(n) : {
						source: Object(a.h)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...i(n)
					}
				},
				m = (e, t) => n => Object(s.a)({
					...d(e, t)(n),
					...c.defaults(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...i(t),
					post: c.currentPost(t),
					userSubreddit: c.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "a", (function() {
				return i
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
				return f
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "l", (function() {
				return v
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(s.screen)(e),
					profile: Object(s.profile)(e),
					subreddit: Object(s.subreddit)(e),
					userSubreddit: Object(s.userSubreddit)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				c = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					...o(n)
				}),
				i = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: r.c.UNDO,
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				l = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				u = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				m = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				p = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.comment)(n, t),
					post: Object(s.post)(n, t),
					...o(n)
				}),
				f = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					...o(n)
				}),
				b = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					subreddit: Object(s.subredditByPostOrCommentId)(n, t)
				}),
				h = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.comment)(n, t),
					post: Object(s.post)(n, t),
					subreddit: Object(s.subredditByPostOrCommentId)(n, t)
				}),
				v = (e, t, n, r) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(s.post)(o, n),
					subreddit: Object(s.subredditByPostOrCommentId)(o, n),
					actionInfo: {
						reason: r
					},
					...e && {
						comment: Object(s.comment)(o, n)
					}
				})
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/hooks/useTooltip.ts");
			const a = Object(r.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function c(e) {
				const t = Object(s.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, a))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e, t) {
				const n = Object(r.useCallback)(n => {
					if (!t) return;
					const r = document.getElementById(e);
					r && (r.contains(n.target) || t(n))
				}, [e, t]);
				Object(r.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e) {
				const t = Object(r.useRef)();
				return Object(r.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(r.freeze)({
				modifiers: []
			});

			function c(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(r.assoc)(t, "modifiers", a.modifiers)), t
			}

			function i(e) {
				const [t, n] = Object(s.useState)(null), [a, i] = Object(s.useState)(null), [d, l] = Object(s.useState)(null), [u, m] = Object(s.useState)(!1), p = Object(s.useCallback)(async () => m(!0), []), f = Object(s.useCallback)(() => m(!1), []), b = Object(s.useMemo)(() => {
					const t = c(e);
					return d ? Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: h,
					styles: v,
					update: g
				} = Object(o.a)(t, a, b);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: v.arrow,
						...h.arrow
					},
					hide: f,
					popperProps: {
						ref: i,
						style: v.popper,
						...h.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					visible: u,
					update: g
				}), [l, h, i, f, p, v, t, n, u, g])
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				i = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), i.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? s.a.createElement("span", d({}, n, {
				className: Object(o.a)(i.a.compactDownvoteWrapper, n.className)
			}), s.a.createElement(l, {
				className: i.a.compactDownvote,
				isFilled: t
			})) : s.a.createElement("span", d({}, n, {
				className: Object(o.a)(i.a.downvoteWrapper, n.className)
			}), s.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				c = n.n(a);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", c.a);
			t.a = i
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				i = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), i.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? s.a.createElement("span", d({}, n, {
				className: Object(o.a)(i.a.compactUpvoteWrapper, n.className)
			}), s.a.createElement(l, {
				className: i.a.compactUpvote,
				isFilled: t
			})) : s.a.createElement("span", d({}, n, {
				className: Object(o.a)(i.a.upvoteWrapper, n.className)
			}), s.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				c = n.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => s.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(o.a)(c.a.checkbox, e)
			}, t), s.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.b.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				c = n.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({}, e, {
				className: Object(o.a)(c.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				o = n.n(s);
			t.a = r.a.div("inlineRow", o.a)
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			}));
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(r || (r = {}));
			const o = {
				[r.Powerups]: () => s.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[r.Premium]: () => s.fbt._("Reddit - Buy Premium", null, {
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
				const n = e && e.dealInfo && e.dealInfo.type,
					r = "low_coin_upsell" === n,
					s = "new_purchaser" === n,
					o = "repeat_purchaser" === n;
				return t ? c.GildFlow : r ? c.LowCoinBalance : s ? c.NewUserTargetedOffer : o ? c.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				o = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				a = n("./src/reddit/actions/modQueue/constants.ts"),
				c = n("./src/reddit/actions/pages/constants.ts"),
				i = n("./src/reddit/actions/pages/postCreation.ts"),
				d = n("./src/reddit/actions/pages/postDraft.ts"),
				l = n("./src/reddit/actions/pages/subreddit.ts"),
				u = n("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case i.PAGE_LOADED:
					case d.PAGE_LOADED:
					case c.b:
					case c.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case a.i:
					case a.f:
					case a.m:
					case a.p:
					case a.v: {
						const {
							response: n
						} = t.payload, {
							userFlair: r
						} = n, s = {
							...e
						};
						return Object.keys(r).forEach(e => {
							s[e] || (s[e] = r[e])
						}), s
					}
					case u.r: {
						const {
							subredditId: n,
							applied: r,
							displaySettings: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: r,
								displaySettings: s
							}
						}
					}
					case o.h: {
						const {
							subredditId: n,
							applied: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: r
							}
						}
					}
					case u.j: {
						const {
							subredditId: n,
							isEnabled: r
						} = t.payload, s = {
							...e[n].displaySettings,
							isEnabled: r
						};
						return {
							...e,
							[n]: {
								...e[n],
								displaySettings: s
							}
						}
					}
					case u.d: {
						const {
							subredditId: n,
							canAssignOwn: r
						} = t.payload, s = {
							...e[n].permissions,
							canAssignOwn: r
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: s
							}
						}
					}
					case u.q: {
						const n = t.payload,
							r = e[n.subredditId],
							s = e[n.subredditId].templates,
							o = e[n.subredditId].templateIds,
							a = {
								...s,
								[n.template.id]: n.template
							},
							c = [...o];
						return c.includes(n.template.id) || c.push(n.template.id), {
							...e,
							[n.subredditId]: {
								...r,
								templates: a,
								templateIds: c
							}
						}
					}
					case u.g: {
						const n = t.payload,
							r = e[n.subredditId],
							o = e[n.subredditId].templates,
							a = e[n.subredditId].templateIds,
							c = s()(o, n.templateId),
							i = a.filter(e => e !== n.templateId);
						return {
							...e,
							[n.subredditId]: {
								...r,
								templates: {
									...c
								},
								templateIds: i
							}
						}
					}
					case u.m:
					case u.l: {
						const n = t.payload,
							r = e[n.subredditId];
						return {
							...e,
							[n.subredditId]: {
								...r,
								templateIds: n.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = (e, {
					post: t
				}) => {
					const n = t.belongsTo.id;
					if (!n) return null;
					const r = e.authorFlair.models[n];
					if (!r) return null;
					const s = t.author;
					return s && r[s] || null
				},
				s = (e, {
					subredditId: t
				}) => {
					const n = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!n) return null;
					if (!t) return null;
					const r = e.authorFlair.models[t];
					return r ? r[n] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/experiments/coreStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => r.hc.Enabled === Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: r.dc
			})
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			const r = e => e.gild.gildModalThingId,
				s = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				c = e => e.gild.message,
				i = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				o = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/selectors/userPrefs.ts");
			const d = [32, 48, 64, 128],
				l = (e, t, n) => {
					const r = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == r ? void 0 : r.url) ? r.url : t ? e.staticIcon.url : e.icon.url
				},
				u = ({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: s
				}) => e.awardSubType === r.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: r
				}) => {
					let s = e;
					if ((null == r ? void 0 : r.awardCountsById) && r.awardCountsById[e.id] && e.tiers) {
						const t = r.awardCountsById[e.id];
						s = e.tiers.reduce((e, n) => t >= n.awardingsRequired ? n : e)
					}
					return l(s, n, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: s
				}) : l(e, n, t),
				m = (e, {
					awards: t,
					minSize: n,
					postOrCommentId: r
				}) => {
					const o = Object(i.c)(e),
						c = d.find(e => e >= n),
						l = r ? Object(a.F)(e, {
							postId: r
						}) || Object(s.a)(e, {
							commentId: r
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = u({
						award: t,
						size: c,
						prefersReducedMotion: o,
						postOrComment: l
					})), e), {})
				},
				p = (e, {
					award: t,
					minSize: n,
					postOrCommentId: r
				}) => t ? m(e, {
					awards: [t],
					minSize: n,
					postOrCommentId: r
				})[t.id] : void 0,
				f = (e, {
					minSize: t,
					userName: n
				}) => {
					const r = Object(c.mb)(e, {
						userName: n
					});
					if (r && r.awardedLastMonth && r.awardedLastMonth.topAward) return p(e, {
						award: r.awardedLastMonth.topAward,
						minSize: t
					})
				},
				b = e => {
					const t = Object(o.b)(e),
						n = Object(o.a)(e);
					return p(e, {
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
				return s
			}));
			const r = e => e.gild.selectedAward,
				s = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return a
			})), n.d(t, "s", (function() {
				return c
			})), n.d(t, "r", (function() {
				return i
			})), n.d(t, "u", (function() {
				return d
			})), n.d(t, "t", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "z", (function() {
				return h
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "y", (function() {
				return y
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return T
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(s.a)({
				features: {
					goldPurchase: o.a
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
					const t = Object(r.i)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.updateCardModal.pending,
				v = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				w = e => e.features.goldPurchase.payment.postalCode,
				x = e => e.features.goldPurchase.payment.savedCardsPending,
				j = e => e.features.goldPurchase.payment.savedCards,
				O = e => e.features.goldPurchase.payment.rememberCard,
				y = e => e.features.goldPurchase.payment.useSavedCard,
				C = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				I = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				E = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				P = e => e.features.goldPurchase.payment.stripeToken.pending,
				S = e => e.features.goldPurchase.payment.paypal.passthrough,
				T = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/models/Flair/index.ts"),
				o = n("./src/reddit/selectors/moderatorPermissions.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/userFlair/index.ts");
			Object(a.a)({
				features: {
					userFlair: c.a
				}
			});
			const i = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				d = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				l = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : s.b.Right,
				u = Object(r.a)((e, {
					subredditId: t
				}) => {
					const n = i(e, {
						subredditId: t
					});
					if (n) return {
						type: s.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				m = (e, {
					subredditId: t
				}) => {
					const n = d(e, {
							subredditId: t
						}),
						r = u(e, {
							subredditId: t
						}),
						s = i(e, {
							subredditId: t
						});
					if (!n || !r || !s) return !1;
					if (s.applied) return !0;
					const a = Object(o.f)(e, {
							subredditId: t
						}),
						{
							canUserChange: c
						} = r.permissions;
					return !!s.templateIds.find(e => {
						return !s.templates[e].modOnly || a
					}) && c
				}
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				c = "jsapi.consumer",
				i = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
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
						e.detail && (t = e.detail.name, console.warn(a, `${r.a.redditUrl}${i}`, e))
					} catch (n) {
						return void console.error(a, `${r.a.redditUrl}${i}`, n)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.0693d675be4ca20a3675.js.map