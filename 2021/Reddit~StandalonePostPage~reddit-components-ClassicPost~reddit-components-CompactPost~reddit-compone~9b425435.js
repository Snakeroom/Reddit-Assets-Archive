// https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.2a32476dac58c8541006.js
// Retrieved at 6/14/2021, 3:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"], {
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js");

			function s(e, t) {
				const r = Object(n.useCallback)(r => {
					if (!t) return;
					const n = document.getElementById(e);
					n && (n.contains(r.target) || t(r))
				}, [e, t]);
				Object(n.useEffect)(() => {
					if (t) return window.addEventListener("click", r), () => {
						window.removeEventListener("click", r)
					}
				}, [t, r])
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				s = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-popper/lib/esm/usePopper.js");
			const c = Object(n.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : c;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", c.modifiers)), t
			}

			function a(e) {
				const [t, r] = Object(s.useState)(null), [c, a] = Object(s.useState)(null), [d, l] = Object(s.useState)(null), [u, m] = Object(s.useState)(!1), p = Object(s.useCallback)(async () => m(!0), []), f = Object(s.useCallback)(() => m(!1), []), b = Object(s.useCallback)(() => m(!u), [u]), v = Object(s.useMemo)(() => {
					const t = i(e);
					return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: h,
					styles: g,
					update: w
				} = Object(o.a)(t, c, v);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...h.arrow
					},
					hide: f,
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
					toggle: b,
					visible: u,
					update: w
				}), [l, h, a, f, p, g, t, r, b, u, w])
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
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "d", (function() {
				return i
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
				return f
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const s = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(n.a)(s("awardSheetInfoRequested")),
				c = Object(n.a)(s("manageableAwardsRequested")),
				i = Object(n.a)(s("createCommunityAward")),
				a = Object(n.a)(s("createGlobalAward")),
				d = Object(n.a)(s("createModAward")),
				l = Object(n.a)(s("createAwardFailed")),
				u = Object(n.a)(s("createAwardSuccessful")),
				m = Object(n.a)(s("removeCommunityAward")),
				p = Object(n.a)(s("disableAwardinCommunity")),
				f = Object(n.a)(s("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return v
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "f", (function() {
				return _
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/postParentMessage/index.ts"),
				o = r("./src/reddit/helpers/isPost.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/selectors/gild.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/selectors/communityAwards.ts"),
				m = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/telemetry/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const v = Object(n.a)(b.L),
				h = Object(n.a)(b.g),
				g = () => async (e, t) => {
					const n = t();
					e(h()), Object(a.b)(a.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: s
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(s()(n))
				}, w = Object(n.a)(b.K), O = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (n, s) => {
					const i = s(),
						a = e ? Object(u.a)(i, e) : void 0;
					n(w({
						award: a && a.isEnabled ? a : void 0,
						thingId: r,
						correlationId: t
					})), n(Object(l.h)(c.a.GOLD_GILD_MODAL));
					const f = Object(p.K)(i, {
						thingId: r
					});
					let b = null;
					if (f) b = f.id;
					else if (Object(o.a)(r)) {
						const e = Object(m.F)(i, {
							postId: r
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, r)
				}, j = Object(n.a)(b.f), x = Object(n.a)(b.J), y = () => async (e, t) => {
					const n = t(),
						o = Object(i.d)(n);
					if (Object(i.g)(n)) {
						const e = "close.gild";
						Object(s.a)({
							type: e
						})
					}
					e(j()), e(Object(l.g)(c.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(o)(n)), Object(a.b)(a.a.GildingFlow)
				}, _ = () => async () => {
					Object(s.a)({
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = r("./src/reddit/hooks/usePrevious.ts"),
				i = r("./src/reddit/components/CountAnimation/config.ts"),
				a = r("./src/reddit/components/CountAnimation/helpers.ts"),
				d = r("./src/reddit/components/CountAnimation/index.m.less"),
				l = r.n(d);
			t.a = e => {
				const {
					initialDisplayCount: t,
					countToUpperBound: r,
					incrementDelta: d,
					initialDelay: u,
					subsequentRecurringDelay: m,
					shouldDisjointAnimation: p,
					id: f
				} = e, [b, v] = Object(n.useState)(!1), [h, g] = Object(n.useState)(!0), [w, O] = Object(n.useState)([]), [j, x] = Object(n.useState)(Object(a.d)(t).reverse()), y = Object(n.useRef)(!1), _ = Object(n.useRef)(null), I = Object(n.useRef)(e => {}), C = Object(n.useRef)();
				I.current = Object(n.useCallback)(e => {
					let t = e || d();
					const n = [...j].reverse().join("");
					let s = parseInt(n) + t;
					s > r && (t = r - parseInt(n), s = r);
					const o = Object(a.d)(s).reverse();
					v(!1), O(j), x(o), g(!1), C.current = setTimeout(() => {
						v(!0)
					}, 0)
				}, [r, d, j]);
				const k = Object(n.useRef)(() => {}),
					P = Object(n.useRef)(),
					E = Object(n.useRef)();
				k.current = Object(n.useCallback)(() => {
					E.current = setTimeout(() => {
						I.current();
						const e = [...w].reverse().join("");
						parseInt(e) < r && k.current()
					}, m())
				}, [r, m, w]);
				const S = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && (y.current || (y.current = !0, P.current = setTimeout(() => {
							I.current(), k.current()
						}, u())))
					})
				}, []);
				Object(o.a)(_, S);
				const T = Object(c.a)(r);
				Object(n.useEffect)(() => (void 0 !== T && T !== r && I.current(r - T), () => {
					clearTimeout(P.current), clearTimeout(E.current), clearTimeout(C.current)
				}), [r]);
				const A = Object(n.useCallback)(() => g(!0), [g]),
					N = 0 === w.length,
					F = h || N;
				return s.a.createElement("div", {
					className: l.a.countAnimation,
					ref: _
				}, j.map((e, t) => {
					const r = w[t] || 0,
						n = Object(a.f)(r, e);
					return s.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: A,
						style: b && w.length > 0 && !h ? {
							transform: `translateY(-${p&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(p?i.b.disjointAnimationDuration:i.b.animationIncrementDuration)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, F ? s.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : n.map((e, t) => {
						const r = 0 === t || t === n.length - 1;
						if (!p || p && r) return s.a.createElement("span", {
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
				c = r.n(o),
				i = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = r("./src/reddit/controls/TextButton/index.tsx"),
				d = r("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = r.n(d);
			t.a = e => c.a.createElement(i.h, {
				className: l.a.modalHeader
			}, c.a.createElement(i.p, null, e.title), c.a.createElement(a.a, {
				onClick: e.onClosePressed || s.a
			}, c.a.createElement(i.b, null)))
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
			const c = n.a.div("Wrapper", o.a);
			t.a = c
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
				c = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/Flair/index.tsx"),
				a = r("./src/reddit/components/FlairPreview/index.m.less"),
				d = r.n(a);
			const l = c.a.span("Placeholder", d.a),
				u = c.a.div("SelectedFlair", d.a),
				m = c.a.wrapped(i.b, "FlairComponent", d.a);
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
				return f
			}));
			var n = r("./node_modules/lodash/once.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				i = r("./src/higherOrderComponents/makeAsync.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/lib/loadWithRetries/index.ts"),
				u = r("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = r.n(u);
			const p = d.a.wrapped(e => c.a.createElement("div", {
					className: Object(a.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				f = s()((e = p) => Object(i.a)({
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
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/memoizeByReference/index.ts"),
				l = r("./src/reddit/featureFlags/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				m = r("./src/reddit/helpers/trackers/userFlair.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/selectors/moderatorPermissions.ts"),
				b = r("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				v = r("./src/reddit/components/Flair/index.tsx"),
				h = r("./src/reddit/controls/RadioInput/index.tsx"),
				g = r("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				w = r("./src/reddit/icons/svgs/Pencil/index.tsx"),
				O = r("./src/reddit/icons/svgs/Search/index.tsx"),
				j = r("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				x = r.n(j);
			class y extends o.a.Component {
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
					} = this.state, c = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(s)), i = !!r && c.some(e => e.id === r);
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
					}), o.a.createElement(O.a, {
						className: x.a.searchIcon
					})), o.a.createElement(h.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: r
					}, c.map((e, t) => {
						const n = Object(u.c)(e),
							s = r === e.id || !i && 0 === t;
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
						}), e.textEditable && o.a.createElement(w.a, {
							className: x.a.pencil
						}))
					})))
				}
			}
			var _ = r("./src/reddit/components/FlairSearch/index.m.less"),
				I = r.n(_);
			const C = Object(d.a)(e => e && Object(u.c)(e)),
				k = Object(i.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: f.f
				}),
				P = Object(c.b)(k);
			t.a = P(e => {
				const {
					flairTemplateType: t,
					flair: r,
					className: s,
					onChange: c,
					subredditId: i,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: f,
					isModerator: v
				} = e, h = Object(p.a)(), g = d && r && r.templateId && d[r.templateId] || void 0, w = Object(b.a)(), O = r || C(g);
				return o.a.createElement("div", {
					className: Object(a.a)(s, I.a.container)
				}, d && l && o.a.createElement(y, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								r = Object(u.c)(t);
							h(Object(m.b)({
								userFlair: t
							})), c(r)
						}
					},
					selectedTemplateId: g ? g.id : "",
					templateIds: l,
					templates: d
				}), O && g && (v || g.textEditable) && o.a.createElement("div", {
					className: I.a.flairEditSection
				}, o.a.createElement("div", {
					className: I.a.editLabel
				}, n.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), f && o.a.createElement("div", {
					className: I.a.restrictionHintText
				}, Object(u.k)(g)), o.a.createElement(w, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: O,
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
						})), c(r)
					},
					subredditId: i
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				i = r.n(c);

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
				const [r, c] = Object(n.useState)(e);
				return Object(n.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, c(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), c(!1)
					}
				}, [e]), e ? s.a.createElement("div", a({
					className: Object(o.a)(i.a.tooltip, {
						[i.a.visible]: r
					})
				}, t.popperProps), t.children, r && s.a.createElement("div", a({
					className: i.a.arrow
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
		"./src/reddit/components/PopupPortal/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return p
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/higherOrderComponents/asTooltip.tsx"),
				c = r("./src/lib/CSSVariableProvider/index.tsx"),
				i = r("./src/reddit/constants/zIndex.ts");
			const a = "POPUP_CONTAINER";
			let d;
			const l = ["right", "top"],
				u = ["left", "top"];

			function m(e) {
				const [t, r] = Object(n.useState)(null);
				return Object(n.useEffect)(() => {
					const t = () => {
						const t = (e => {
							let t;
							if (!(t = "string" == typeof e ? document.getElementById(e) : e.current)) return;
							const r = t.getBoundingClientRect(),
								{
									style: n
								} = Object(o.b)({
									isFixed: !1,
									targetBox: r,
									targetPosition: l,
									tooltipPosition: u,
									tooltipSize: {
										width: 100,
										height: 100
									}
								});
							return {
								x: n.left,
								y: n.top
							}
						})(e);
						t && r(t)
					};
					return t(), window.addEventListener("resize", t), () => {
						window.removeEventListener("resize", t)
					}
				}, [e]), t
			}

			function p(e) {
				const {
					children: t,
					rightOf: r
				} = e, n = m(r);
				return n && (d || (d = document.getElementById(a))) ? Object(c.d)(s.a.createElement("div", {
					style: {
						position: "absolute",
						transform: `translate(${n.x}px, ${n.y}px)`,
						zIndex: i.e
					}
				}, t), d) : null
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
				c = r("./src/reddit/helpers/flair.ts"),
				i = r("./src/reddit/models/Flair/index.ts");
			const a = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
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
				const i = Object(c.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : i > o.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(c.n)(t) && !Object(c.r)(n) ? {
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
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/reddit/constants/elementClassNames.ts"),
				u = r("./src/reddit/controls/Score/index.tsx"),
				m = r("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = r("./src/reddit/models/Vote/index.ts"),
				b = r("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/components/VerticalVotes/index.m.less"),
				g = r.n(h);
			const w = Object(i.c)({
					isNightMode: v.W,
					totalDiscount: b.d,
					variantAnimationConfig: b.e
				}),
				O = Object(c.b)(w),
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				x = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
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
							isNightMode: r,
							shouldShowScore: s = !0,
							upvoteButtonClassName: c,
							containerRef: i,
							model: d,
							totalDiscount: p,
							variantAnimationConfig: b,
							postId: v
						} = e,
						h = j(e),
						w = x(e),
						O = d.voteState;
					return o.a.createElement("div", {
						className: Object(a.a)(g.a.votesContainer, e.className),
						id: `vote-arrows-${d.id}`,
						ref: i
					}, h ? o.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": O === f.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: r,
						onClick: this.onUpvote,
						voteState: O
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": O === f.a.upvoted,
						className: Object(a.a)(l.n, c),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: O
					})), !e.compact && s && o.a.createElement(u.a, {
						className: Object(a.a)(g.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: O,
						isScoreHidden: e.model.isScoreHidden,
						totalDiscount: p,
						shouldDisjointAnimation: null == b ? void 0 : b.shouldDisjointAnimation,
						shouldShowPageTransPersistence: null == b ? void 0 : b.shouldShowPageTransPersistence,
						postId: v
					}), w ? o.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": O === f.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: r,
						onClick: this.onDownvote,
						voteState: O
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": O === f.a.downvoted,
						className: Object(a.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: O
					})))
				}
			}
			const _ = Object(d.a)(O(y));
			t.a = _
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, r) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return S
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "d", (function() {
				return N
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, r) => n => {
				const s = e(n),
					c = t(n),
					i = !s && c;
				return Object(o.a)(r.baseClassName, n.className, {
					[r.mIsInteractive]: c,
					[r.mIsActive]: s,
					[r.mIsVoteable]: i
				})
			};
			var a = r("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = r("./src/reddit/models/Vote/index.ts"),
				l = r("./src/reddit/controls/Downvote/index.m.less"),
				u = r.n(l);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = ({
					voteState: e
				}) => e === d.a.downvoted,
				f = i(p, ({
					interactive: e
				}) => !1 !== e, m);
			var b = e => s.a.createElement(a.a, {
					className: f(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				v = r("./src/reddit/icons/fonts/Upvote/index.tsx"),
				h = r("./src/reddit/controls/Upvote/index.m.less"),
				g = r.n(h);
			const w = {
					...g.a,
					baseClassName: g.a.Upvote
				},
				O = ({
					voteState: e
				}) => e === d.a.upvoted,
				j = i(O, ({
					interactive: e
				}) => !1 !== e, w);
			var x = e => s.a.createElement(v.a, {
					className: j(e),
					compact: e.compact,
					isFilled: O(e)
				}),
				y = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				_ = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = r("./src/reddit/components/VerticalVotes/votes.m.less"),
				k = r.n(C);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = e => Object(o.a)({
					[k.a.compact]: e.compact,
					[k.a.dark]: Object(_.b)(Object(y.a)(e)),
					[k.a.nightmode]: e.isNightMode
				}),
				S = Object(c.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), r = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: n,
						...c
					} = e;
					return s.a.createElement("button", P({}, c, {
						className: Object(o.a)(k.a.customDownvote, E(e), {
							[k.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: r
					}))
				}),
				T = Object(c.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), r = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: n,
						...c
					} = e;
					return s.a.createElement("button", P({}, c, {
						className: Object(o.a)(k.a.customUpvote, E(e), {
							[k.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: r
					}))
				}),
				A = b,
				N = x
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
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, r) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
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
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/constants/keycodes.ts"),
				i = r("./src/reddit/icons/svgs/RadioOff/index.tsx"),
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
					}) : s.a.createElement(i.a, {
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
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/constants/keycodes.ts");
			class c extends s.a.Component {
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
							c = e.key === o.b.ArrowDown;
						if (s || c) {
							const t = this.getValues();
							if (!t.length) return;
							const o = n ? t.indexOf(n) : 0,
								c = t[((s ? o - 1 : o + 1) + t.length) % t.length];
							r(c), this.setState({
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
							c = r.props.value === t,
							i = null !== t ? c ? 0 : -1 : o ? 0 : -1;
						return s.a.cloneElement(r, {
							disabled: e.disabled,
							onClick: e => this.handleClick(r.props.value),
							selected: c,
							tabIndex: i
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, r) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./node_modules/lodash/random.js"),
				a = r.n(i),
				d = r("./node_modules/react/index.js"),
				l = r.n(d),
				u = r("./node_modules/react-redux/es/index.js"),
				m = r("./src/reddit/components/CountAnimation/index.tsx"),
				p = r("./src/reddit/components/CountAnimation/config.ts"),
				f = r("./src/reddit/components/CountAnimation/helpers.ts"),
				b = r("./src/reddit/constants/colors.ts"),
				v = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				g = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = r("./src/reddit/models/Vote/index.ts"),
				O = r("./src/reddit/selectors/meta.ts"),
				j = r("./src/reddit/controls/Score/index.m.less"),
				x = r.n(j);
			const y = e => e.voteState === w.a.downvoted ? Object(g.a)(e).voteText.downvote : e.voteState === w.a.upvoted ? Object(g.a)(e).voteText.upvote : Object(h.a)(Object(v.a)(e)),
				{
					upvoteCount: {
						inititalDelayRange: {
							lower: _,
							upper: I
						},
						subsequentRecurringDelayRange: {
							lower: C,
							upper: k
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: P,
							upper: E
						}
					}
				} = p.b,
				S = () => a()(_, I),
				T = () => a()(C, k),
				A = Object(u.b)(e => ({
					locale: Object(O.i)(e)
				})),
				N = Object(o.a)(e => {
					const t = {
							color: e.light ? b.b.lightboxHeaderText : y(e)
						},
						{
							totalDiscount: r,
							score: o,
							shouldDisjointAnimation: i,
							shouldShowPageTransPersistence: u,
							postId: p = "",
							locale: v
						} = e,
						h = null == v ? void 0 : v.startsWith("en"),
						g = e.isScoreHidden ? h ? n.fbt._("Vote", null, {
							hk: "2TMson"
						}) : l.a.createElement("span", {
							className: x.a.dot
						}, "•") : Object(c.b)(o),
						w = Object(d.useCallback)(() => a()(Math.ceil((r || 0) * P), Math.ceil((r || 0) * E)), [r]),
						O = Object(d.useRef)(Object(f.k)(p, f.a.Vote)),
						j = Object(d.useRef)(u && void 0 !== r && Object(f.e)(O.current));
					return l.a.createElement("div", {
						className: Object(s.a)(x.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, e.isScoreHidden || void 0 === r ? g : l.a.createElement(m.a, {
						initialDisplayCount: j.current || o - r,
						countToUpperBound: o,
						initialDelay: S,
						subsequentRecurringDelay: T,
						incrementDelta: w,
						shouldDisjointAnimation: i,
						id: O.current
					}))
				});
			t.a = A(N)
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, r) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
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
				return f
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return h
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
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
					type: Object(c.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...i(e),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...i(t),
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
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, n) => s => ({
					...i(s),
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
					...i(n),
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
				f = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? a(r) : null
				}),
				b = (e, t, r) => n => ({
					...i(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: a(e),
					profile: s.profileById(n, t),
					subreddit: s.subredditById(n, t)
				}),
				v = (e, t) => b(e, t, "disable_in_community"),
				h = (e, t) => b(e, t, "enable_in_community")
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
				return v
			})), r.d(t, "clickCancelHideAward", (function() {
				return h
			})), r.d(t, "clickAwardReportFlow", (function() {
				return w
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return O
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return j
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return x
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return y
			})), r.d(t, "clickReportAward", (function() {
				return _
			})), r.d(t, "clickCancelReportAward", (function() {
				return I
			})), r.d(t, "clickConfirmReportAward", (function() {
				return C
			})), r.d(t, "viewGildModalEvent", (function() {
				return k
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return P
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return E
			})), r.d(t, "clickMessageInputEvent", (function() {
				return S
			})), r.d(t, "typeMessageInputEvent", (function() {
				return T
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return N
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return F
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return R
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return M
			})), r.d(t, "clickNextButtonEvent", (function() {
				return D
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return G
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return L
			})), r.d(t, "clickFilterEvent", (function() {
				return U
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return B
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return V
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/models/GoldPurchase.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/helpers/isComment.ts"),
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
					correlationId: Object(a.b)(e) || Object(c.d)(c.a.GildingFlow, !1),
					post: t ? s.post(e, t) : void 0,
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
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
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				b = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				v = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, r) => n => ({
					...u(n, r),
					source: Object(i.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				w = g("award_hovercard_report"),
				O = g("cancel_award_hovercard_report"),
				j = g("flag_award"),
				x = g("cancel_flag_award"),
				y = g("confirm_flag_award"),
				_ = g("report_community_award"),
				I = g("cancel_report_community_award"),
				C = g("confirm_report_community_award"),
				k = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				P = (e, t, r) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				E = (e, t) => r => ({
					...u(r, t),
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
				A = e => t => ({
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
				F = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
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
				L = ({
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
						contentType: Object(i.a)(s) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: n,
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
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return b
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "i", (function() {
				return y
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/selectors/gold/giveAwards.ts"),
				c = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				a = r("./src/reddit/selectors/telemetry.ts"),
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
					} = t, b = !!r, v = o.b(e), h = v ? Object(u.getAwardTypeFromAward)(v) : null, g = b ? h : i.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, w = r ? Object(p.a)(r) ? "comment" : "post" : void 0, O = l || i.t(e), j = [...Object(c.d)(e), ...Object(c.f)(e)].filter(e => e.mobileId === O)[0], x = t.offerContext || (v && 0 === v.coinPrice ? s.a.StorefrontFreeAward : Object(s.d)(j, b)), y = j ? Math.round(1e4 * (j.baselinePennies - j.pennies) / j.baselinePennies) / 100 : 0, _ = j ? Math.round(1e4 * (j.coins - j.baselineCoins) / j.coins) / 100 : 0, I = j ? j.baselinePennies !== j.pennies ? `${y}_percent_price` : j.baselineCoins !== j.coins ? `${_}_percent_bonus` : void 0 : void 0, C = g === d.GoldPurchaseType.Premium ? n.vb : j ? j.pennies : void 0;
					return {
						...a.defaults(e),
						comment: r ? a.comment(e, r) : null,
						correlationId: i.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: r ? a.post(e, r) : null,
						screen: a.screen(e),
						subreddit: r ? a.subreddit(e) : null,
						goldPurchase: {
							...v ? Object(f.a)(v) : null,
							type: g,
							gildedContent: b,
							contentType: w,
							numberCoins: j ? j.coins : void 0,
							offerContext: x,
							offerType: I
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: C
						},
						purchase: {
							priceMicros: C
						}
					}
				},
				v = (e, t, r) => n => ({
					...b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
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
					noun: "credit_card"
				}),
				w = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				O = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				j = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				x = (e, t, r) => n => {
					const s = b(n, {
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
							source: e ? d.GiveGold : i.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				y = e => t => {
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
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
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
				c = r("./src/reddit/selectors/platform.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					profile: i.profile(e),
					screen: i.screen(e),
					subreddit: i.subreddit(e)
				}),
				d = (e, t, r) => n => ({
					source: Object(c.h)(n) || r ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...a(n),
					post: i.post(n, e)
				}),
				l = (e, t, r, n) => s => {
					const c = r ? i.comment(s, r) : null,
						{
							sortToUse: a
						} = Object(o.a)(s, e);
					return {
						...d(e, t, n)(s),
						comment: c,
						listing: {
							sort: a
						}
					}
				},
				u = (e, t) => r => {
					const n = i.currentPost(r);
					return n ? d(n.id, e, t)(r) : {
						source: Object(c.h)(r) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...a(r)
					}
				},
				m = (e, t) => r => Object(s.a)({
					...d(e, t)(r),
					...i.defaults(r)
				}),
				p = e => t => ({
					source: "id_card",
					action: n.c.CLICK,
					noun: e,
					...a(t),
					post: i.currentPost(t),
					userSubreddit: i.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return c
			})), r.d(t, "j", (function() {
				return i
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
				return f
			})), r.d(t, "h", (function() {
				return b
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
				c = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				i = (e, t) => r => ({
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
				f = (e, t) => r => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					...o(r)
				}),
				b = (e, t) => r => ({
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
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "e", (function() {
				return p
			}));
			var n = r("./src/reddit/helpers/flair.ts"),
				s = r("./src/reddit/selectors/comments.ts"),
				o = r("./src/reddit/selectors/gold/powerups/achievements.ts"),
				c = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				a = r("./src/reddit/selectors/userFlair.ts");

			function d(e) {
				const t = c.subreddit(e),
					r = null == t ? void 0 : t.id;
				if (!r) return;
				const s = Object(a.c)(e, {
						subredditId: r
					}),
					d = Object(i.h)(e),
					l = d ? Object(o.c)(e, {
						subredditId: r,
						userId: d
					}) : void 0,
					u = {
						achievementFlairId: null == l ? void 0 : l.type,
						achievementFlairTitle: null == l ? void 0 : l.name
					};
				if (!(null == s ? void 0 : s.displaySettings.isUserEnabled) || !(null == s ? void 0 : s.applied)) return {
					isActive: !1,
					...u
				};
				const m = s.applied.templateId,
					p = Object(n.g)(s.applied);
				return p ? {
					id: m,
					title: p,
					isActive: !0,
					...u
				} : {
					isActive: !1,
					...u
				}
			}
			const l = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...c.defaults(e)
				}),
				u = e => t => {
					const {
						userFlair: r,
						achievementFlair: s
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...c.defaults(t),
						userFlair: {
							id: null == r ? void 0 : r.id,
							title: r && Object(n.g)(r),
							isActive: r && !!r,
							achievementFlairId: null == s ? void 0 : s.type,
							achievementFlairTitle: null == s ? void 0 : s.name,
							isLocked: null == s ? void 0 : s.isLocked
						}
					}
				},
				m = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...c.defaults(e)
				}),
				p = (e, t, r) => i => {
					const a = Object(s.e)(i, {
							commentId: e
						}),
						d = Object(o.c)(i, {
							subredditId: t,
							userId: r
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...c.defaults(i),
						userFlair: {
							id: null == a ? void 0 : a.templateId,
							title: a ? Object(n.g)(a) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				s = r("./node_modules/react/index.js"),
				o = r("./src/lib/hooks/useTooltip.ts");
			const c = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function i(e) {
				const t = Object(s.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, c))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, r) {
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
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, r) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/Downvote/index.m.less"),
				a = r.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(c.b)("downvote", e.isFilled), a.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? s.a.createElement("span", d({}, r, {
				className: Object(o.a)(a.a.compactDownvoteWrapper, r.className)
			}), s.a.createElement(l, {
				className: a.a.compactDownvote,
				isFilled: t
			})) : s.a.createElement("span", d({}, r, {
				className: Object(o.a)(a.a.downvoteWrapper, r.className)
			}), s.a.createElement(l, {
				isFilled: t
			}))
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
				c = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = r.n(c);
			const a = r("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a);
			t.a = a
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, r) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/Upvote/index.m.less"),
				a = r.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(c.b)("upvote", e.isFilled), a.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? s.a.createElement("span", d({}, r, {
				className: Object(o.a)(a.a.compactUpvoteWrapper, r.className)
			}), s.a.createElement(l, {
				className: a.a.compactUpvote,
				isFilled: t
			})) : s.a.createElement("span", d({}, r, {
				className: Object(o.a)(a.a.upvoteWrapper, r.className)
			}), s.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
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
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = r.n(c);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({}, e, {
				className: Object(o.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
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
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
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
				return c
			})), r.d(t, "a", (function() {
				return i
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
			var c, i;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(c || (c = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(i || (i = {}));
			const a = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === r,
					s = "new_purchaser" === r,
					o = "repeat_purchaser" === r;
				return t ? i.GildFlow : n ? i.LowCoinBalance : s ? i.NewUserTargetedOffer : o ? i.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				o = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				c = r("./src/reddit/actions/modQueue/constants.ts"),
				i = r("./src/reddit/actions/pages/constants.ts"),
				a = r("./src/reddit/actions/pages/postCreation.ts"),
				d = r("./src/reddit/actions/pages/postDraft.ts"),
				l = r("./src/reddit/actions/pages/subreddit.ts"),
				u = r("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case a.PAGE_LOADED:
					case d.PAGE_LOADED:
					case i.b:
					case i.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case c.i:
					case c.f:
					case c.m:
					case c.p:
					case c.v: {
						const {
							response: r
						} = t.payload, {
							userFlair: n
						} = r, s = {
							...e
						};
						return Object.keys(n).forEach(e => {
							s[e] || (s[e] = n[e])
						}), s
					}
					case u.r: {
						const {
							subredditId: r,
							applied: n,
							displaySettings: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n,
								displaySettings: s
							}
						}
					}
					case o.h: {
						const {
							subredditId: r,
							applied: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n
							}
						}
					}
					case u.j: {
						const {
							subredditId: r,
							isEnabled: n
						} = t.payload, s = {
							...e[r].displaySettings,
							isEnabled: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: s
							}
						}
					}
					case u.d: {
						const {
							subredditId: r,
							canAssignOwn: n
						} = t.payload, s = {
							...e[r].permissions,
							canAssignOwn: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								permissions: s
							}
						}
					}
					case u.q: {
						const r = t.payload,
							n = e[r.subredditId],
							s = e[r.subredditId].templates,
							o = e[r.subredditId].templateIds,
							c = {
								...s,
								[r.template.id]: r.template
							},
							i = [...o];
						return i.includes(r.template.id) || i.push(r.template.id), {
							...e,
							[r.subredditId]: {
								...n,
								templates: c,
								templateIds: i
							}
						}
					}
					case u.g: {
						const r = t.payload,
							n = e[r.subredditId],
							o = e[r.subredditId].templates,
							c = e[r.subredditId].templateIds,
							i = s()(o, r.templateId),
							a = c.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...n,
								templates: {
									...i
								},
								templateIds: a
							}
						}
					}
					case u.m:
					case u.l: {
						const r = t.payload,
							n = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...n,
								templateIds: r.templateIds
							}
						}
					}
					default:
						return e
				}
			}
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
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				s = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				c = e => e.gild.isIframed,
				i = e => e.gild.message,
				a = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return b
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/commentSelector.ts"),
				o = r("./src/reddit/selectors/gold/giveAwards.ts"),
				c = r("./src/reddit/selectors/posts.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				a = r("./src/reddit/selectors/userPrefs.ts");
			const d = [32, 48, 64, 128],
				l = (e, t, r) => {
					const n = t ? e[`staticIcon${r}`] : e[`icon${r}`];
					return (null == n ? void 0 : n.url) ? n.url : t ? e.staticIcon.url : e.icon.url
				},
				u = ({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: s
				}) => e.awardSubType === n.d.Group ? (({
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
					return l(s, r, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: s
				}) : l(e, r, t),
				m = (e, {
					awards: t,
					minSize: r,
					postOrCommentId: n
				}) => {
					const o = Object(a.c)(e),
						i = d.find(e => e >= r),
						l = n ? Object(c.F)(e, {
							postId: n
						}) || Object(s.a)(e, {
							commentId: n
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = u({
						award: t,
						size: i,
						prefersReducedMotion: o,
						postOrComment: l
					})), e), {})
				},
				p = (e, {
					award: t,
					minSize: r,
					postOrCommentId: n
				}) => t ? m(e, {
					awards: [t],
					minSize: r,
					postOrCommentId: n
				})[t.id] : void 0,
				f = (e, {
					minSize: t,
					userName: r
				}) => {
					const n = Object(i.nb)(e, {
						userName: r
					});
					if (n && n.awardedLastMonth && n.awardedLastMonth.topAward) return p(e, {
						award: n.awardedLastMonth.topAward,
						minSize: t
					})
				},
				b = e => {
					const t = Object(o.b)(e),
						r = Object(o.a)(e);
					return p(e, {
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
				return c
			})), r.d(t, "s", (function() {
				return i
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
				return f
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "w", (function() {
				return w
			})), r.d(t, "x", (function() {
				return O
			})), r.d(t, "v", (function() {
				return j
			})), r.d(t, "y", (function() {
				return x
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "m", (function() {
				return P
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "d", (function() {
				return S
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(s.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const c = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				a = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.i)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				v = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				w = e => e.features.goldPurchase.payment.savedCardsPending,
				O = e => e.features.goldPurchase.payment.savedCards,
				j = e => e.features.goldPurchase.payment.rememberCard,
				x = e => e.features.goldPurchase.payment.useSavedCard,
				y = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				I = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				C = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				k = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				P = e => e.features.goldPurchase.payment.stripeToken.pending,
				E = e => e.features.goldPurchase.payment.paypal.passthrough,
				S = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				o = r("./src/reddit/selectors/moderatorPermissions.ts"),
				c = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/userFlair/index.ts");
			Object(c.a)({
				features: {
					userFlair: i.a
				}
			});
			const a = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				d = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				l = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : s.b.Right,
				u = Object(n.a)((e, {
					subredditId: t
				}) => {
					const r = a(e, {
						subredditId: t
					});
					if (r) return {
						type: s.d.UserFlair,
						displaySettings: r.displaySettings,
						permissions: r.permissions
					}
				}),
				m = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
							subredditId: t
						}),
						n = u(e, {
							subredditId: t
						}),
						s = a(e, {
							subredditId: t
						});
					if (!r || !n || !s) return !1;
					if (s.applied) return !0;
					const c = Object(o.f)(e, {
							subredditId: t
						}),
						{
							canUserChange: i
						} = n.permissions;
					return !!s.templateIds.find(e => {
						return !s.templates[e].modOnly || c
					}) && i
				}
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./src/lib/fastdom/index.ts"),
				o = r("./src/reddit/actions/jsApi.ts");
			const c = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				a = "/r/redesign/wiki/jsapi";
			var d = r("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${i}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === i && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(c, `${n.a.redditUrl}${a}`, e))
					} catch (r) {
						return void console.error(c, `${n.a.redditUrl}${a}`, r)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.2a32476dac58c8541006.js.map