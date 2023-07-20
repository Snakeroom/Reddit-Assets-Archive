// https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~RichTextEditor.0a8d64f9232b20ec693f.js
// Retrieved at 7/20/2023, 4:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~MembershipPaywallPage~RichTextEditor"], {
		"./src/lib/forEachGroup/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			const o = t => t;

			function r(t, e, n) {
				const [r, s] = Array.isArray(t) ? [t.length, e => t[e]] : [t.size, e => t.get(e)], {
					keyFn: i = o
				} = e || {};
				let {
					start: c = 0,
					end: a = r
				} = e || {};
				if ((c = c < 0 ? 0 : c) >= (a = a > r ? r : a)) return;
				let l = s(c),
					d = i(l, c),
					u = c;
				for (let o = c + 1; o < a; o++) {
					const t = s(o),
						e = i(t, o);
					if (e !== d) {
						if (!1 === n(l, d, u, o)) return;
						d = e, u = o, l = t
					}
				}
				n(l, d, u, a)
			}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return k
			})), n.d(e, "g", (function() {
				return T
			})), n.d(e, "b", (function() {
				return x
			})), n.d(e, "d", (function() {
				return v
			})), n.d(e, "e", (function() {
				return j
			})), n.d(e, "c", (function() {
				return R
			})), n.d(e, "f", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				r = n.n(o),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				i = n("./src/reddit/endpoints/economics/emojis.ts"),
				c = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				a = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				l = n("./src/reddit/endpoints/governance/badges.ts"),
				d = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function p(t, e, n) {
				return Object(u.a)(t, {
					method: "get",
					endpoint: `${d.a.metaUrl}/products/${e}?owners=${n}` + "&types=emotes_pack,giphy"
				})
			}
			var h = n("./src/reddit/models/Badge/index.ts"),
				m = n("./src/reddit/models/Badge/managementPage.ts"),
				g = n("./src/reddit/models/Product/index.ts"),
				f = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				b = n("./src/reddit/selectors/economics.ts"),
				y = n("./src/reddit/selectors/products.ts"),
				E = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				S = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function C(t) {
				return !!t && "removeBadge" === t.type
			}

			function O(t) {
				if (!C(t)) return t
			}
			const k = () => async (t, e, n) => {
				let {
					apiContext: o
				} = n;
				if (!e().user.account) return;
				await t(Object(E.b)({
					includeMemberships: !0
				}));
				const r = e().economics.me.data.specialMemberships || {},
					s = Object.keys(r);
				if (s.length) {
					const e = await Object(c.e)(o(), s);
					e.ok && t(Object(S.g)(e.body))
				}
			}, T = (t, e) => async (n, o, r) => {
				let {
					apiContext: s
				} = r;
				const i = o().user.account,
					c = o().economics.subredditPremium[t],
					l = !c || c.status !== f.a.Fetched || e;
				if (i && l) {
					const e = await Object(a.a)(s(), t, i.id);
					n(Object(S.i)(e))
				}
			}, x = t => async (e, n, o) => {
				let {
					apiContext: r
				} = o;
				const i = n(),
					c = i.user.account,
					a = Object(b.f)(i, t.subredditId),
					d = Object.keys(a).map(t => a[t]).filter(Boolean);
				if (c && t.badge) {
					let n, o;
					n = t.placement === h.a.First ? a[m.a.Loyalty] : t.placement === h.a.Second ? a[m.a.Achievement] : a[m.a.Cosmetic], e(Object(S.a)({
						...t,
						badge: O(t.badge),
						currentAppliedBadges: d,
						userId: c.id
					})), C(t.badge) && n ? o = await Object(l.a)(r(), t.subredditId, n.id, !1) : C(t.badge) || (o = await Object(l.a)(r(), t.subredditId, t.badge.id)), o && !o.ok && (e(Object(S.a)({
						...t,
						badge: n,
						currentAppliedBadges: d,
						userId: c.id
					})), Object(s.a)(e, o.error))
				}
			}, v = (t, e) => async (n, o, r) => {
				let {
					apiContext: s
				} = r;
				await n(T(t, !0));
				const i = o().economics.subredditPremium[t];
				if (i && i.status === f.a.Fetched) {
					const o = i.data.userOwnedBadges.find(t => t.type === e.id);
					o && (n(x({
						badge: o,
						subredditId: t,
						placement: o.placement
					})), n(Object(S.d)(m.c.MyBadges)))
				}
			}, j = t => async (e, n, o) => {
				let {
					apiContext: c
				} = o;
				const a = n().user.account,
					l = !n().economics.emotes[t],
					d = !n().economics.gifs[t];
				if (a && (l || d)) {
					const [n, o] = await Promise.all([Object(i.b)(c(), t), p(c(), t, a.id)]);
					if (!o.ok) return void Object(s.a)(e, o.error);
					const l = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					r()(o.body, t => {
						t.type === g.a.EmotesPack ? l.emotes.push(t) : t.type === g.a.Giphy && l.giphy.push(t)
					}), e(Object(S.e)({
						subredditId: t,
						products: l
					}))
				}
			}, R = (t, e, n) => async (o, r, s) => {
				let {
					apiContext: i
				} = s;
				if (await o(T(t, !0)), n && e) {
					const n = r(),
						s = Object(b.f)(n, t),
						i = Object(y.a)(n, e);
					if (!s[Object(m.d)(i.placement)] && i) {
						const e = Object(b.l)(n, {
							subredditId: t,
							badge: i
						});
						e && await o(x({
							badge: e,
							subredditId: t
						}))
					}
					o(Object(S.c)({
						subredditId: t,
						initialView: m.c.MyBadges
					}))
				}
			}, w = t => async (e, n, o) => {
				let {
					apiContext: r
				} = o;
				const {
					wallet: s
				} = await Object(c.c)(r(), t);
				e(Object(S.f)({
					wallet: s
				})), await e(T(t.subredditId, !0))
			}
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return g
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/SubredditTypeaheadSearch.json"),
				i = (t, e) => Object(r.a)(t, {
					...s,
					variables: e
				}),
				c = n("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				a = t => {
					let {
						allowedPostTypes: e,
						id: n,
						isCrosspostDestination: o,
						isNsfw: r,
						name: s,
						styles: i,
						subscribersCount: a
					} = t;
					return {
						allowedPostTypes: Object(c.a)(e),
						communityIcon: i && i.icon || "",
						icon: i && i.legacyIcon && i.legacyIcon.url || "",
						id: n,
						isCrosspostDestination: o,
						isNsfw: r,
						name: s,
						primaryColor: i && i.primaryColor || "",
						subscribers: a
					}
				},
				l = n("./src/reddit/helpers/name/index.ts"),
				d = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				u = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const p = Object(o.a)(u.c),
				h = Object(o.a)(u.b),
				m = Object(o.a)(u.a),
				g = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (n, o, r) => {
						let {
							gqlContext: s
						} = r;
						const c = Object(l.i)(t);
						if (!c) return;
						const u = o(),
							g = u.subredditAutocomplete;
						if (g.api.pending[c] || g.models[c]) return;
						if (Object(d.b)(u, {
								substring: c
							})) return;
						n(p({
							key: c
						}));
						const f = await i(s(), {
							query: c,
							includeNsfw: e
						});
						if (f.ok) {
							const t = f.body.data.subredditTypeahead.subreddits.edges.map(t => a(t.node));
							n(h({
								key: c,
								subreddits: t
							}))
						} else n(m({
							key: c,
							error: f.error
						}))
					}
				}
		},
		"./src/reddit/components/CollapseIntoOverflow/index.m.less": function(t, e, n) {
			t.exports = {
				hidden: "_2x_bJPl7Q970NCRxOS36QB",
				innerWrapper: "_3oLr47tuKGv2mNpavCZ2X0",
				outerWrapper: "_1wi_3uF8fUynqe5reIop-G",
				overflowMenu: "_2aOuodBenLHlceR3j0AlIM",
				overflowMenuWrapper: "_3nQ7w1VIzZvzFawddOYgBC",
				row: "_2IirhjIkZ7hgWGtpr087xZ",
				postWrap: "WaTxGJXojt1RbZOH3q6eC"
			}
		},
		"./src/reddit/components/CollapseIntoOverflow/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return m
			}));
			var o = n("./src/lib/fastdom/index.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/OverflowMenu/index.tsx"),
				a = n("./src/reddit/helpers/richTextEditor/index.ts"),
				l = n("./src/reddit/components/CollapseIntoOverflow/index.m.less"),
				d = n.n(l);
			const u = 33,
				p = t => t.preventDefault(),
				h = (t, e) => `${t===a.a.Post?"Post":"Comment"}--Overflow-Dropdown__${e}`;
			class m extends s.a.Component {
				constructor(t) {
					super(t), this.breakpoints = [], this.updateCurrentBreakpoint = () => {
						o.a.read(() => {
							if (!this.container) return;
							const {
								indexOfCurrentBreakpoint: t,
								totalNumCollapsibleItems: e
							} = this.state, n = this.container.clientWidth;
							let r = this.breakpoints.findIndex((t, o) => {
								const r = o + 1 < e - 1,
									s = this.breakpoints[o + 1] + (r ? u : 0);
								return n < s
							});
							r < 0 && (r = e - 1), r !== t && o.a.write(() => {
								this.setState({
									indexOfCurrentBreakpoint: r,
									shouldShowOverflow: r < e - 1
								})
							})
						})
					};
					const e = this.getTotalNumCollapsibleItems();
					this.state = this.calculateOverflowState(e)
				}
				calculateOverflowState(t) {
					return {
						indexOfCurrentBreakpoint: t - 1,
						shouldShowOverflow: !1,
						totalNumCollapsibleItems: t
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.updateCurrentBreakpoint)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.updateCurrentBreakpoint)
				}
				componentDidUpdate() {
					const t = this.getTotalNumCollapsibleItems();
					t !== this.state.totalNumCollapsibleItems && o.a.write(() => {
						this.breakpoints = [], this.setState(this.calculateOverflowState(t))
					})
				}
				getTotalNumCollapsibleItems() {
					return Array.isArray(this.props.children) ? this.props.children.reduce((t, e) => (Array.isArray(e) ? t += e.length : e && t++, t), 0) : 1
				}
				registerBreakpoint(t, e) {
					this.breakpoints[e] = 0, o.a.read(() => {
						if (t && t.clientWidth) {
							const n = t.clientWidth;
							this.breakpoints[e] = 0 === e ? n : this.breakpoints[e - 1] + n, this.breakpoints[this.state.totalNumCollapsibleItems - 1] && this.updateCurrentBreakpoint()
						}
					})
				}
				render() {
					const {
						children: t,
						className: e,
						oveflowMenuDropdownId: n,
						onOverflowMenuClick: o,
						renderOverflowMenuTooltip: r,
						editorType: l
					} = this.props, {
						indexOfCurrentBreakpoint: u,
						shouldShowOverflow: m
					} = this.state, g = s.a.Children.toArray(t).filter(Boolean);
					return s.a.createElement("div", {
						className: Object(i.a)(d.a.outerWrapper, e),
						ref: t => this.container = t
					}, s.a.createElement("div", {
						className: d.a.innerWrapper
					}, g.map((t, e) => s.a.createElement("span", {
						className: e > u ? d.a.hidden : void 0,
						key: e,
						ref: t => this.registerBreakpoint(t, e)
					}, t)), m && s.a.createElement("div", {
						className: d.a.overflowMenuWrapper,
						key: "overflowMenuWrapper"
					}, r && r(), s.a.createElement(c.b, {
						className: d.a.overflowMenu,
						dropdownId: h(l, n),
						isFixed: !1,
						handleMouseDown: p,
						onClick: o
					}, s.a.createElement("div", {
						className: Object(i.a)(d.a.row, {
							[d.a.postWrap]: l === a.a.Post
						})
					}, g.map((t, e) => s.a.createElement("span", {
						className: e <= u ? d.a.hidden : void 0,
						key: e
					}, t)))))))
				}
			}
		},
		"./src/reddit/components/MakeGifToggle/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_1iRy5EPCLqSx8I0k9OT0wW",
				content: "NfjQg3srQXRhyOxLBwXrS",
				toggleSwitch: "_1fUmirx6e9tUDs04TQq6A1",
				mCompactSwitch: "_3Cx_YBpXo1s1iy7oA-4s6R",
				mDisabled: "_1M5N6DrrQQCQJs3JctDSu8",
				hoverTooltip: "_9qS60cx9uxyt1k4eZF_0w",
				tooltipContentClass: "_21DP8j-B-UkVKGJONbrTmX"
			}
		},
		"./src/reddit/components/MakeGifToggle/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/MakeGifToggle/index.m.less"),
				u = n.n(d);
			e.a = t => s.a.createElement(l.a, {
				className: Object(i.a)(u.a.container, t.disabled ? u.a.mDisabled : null, t.isCompact ? u.a.mCompactSwitch : null),
				onMouseDown: t => t.preventDefault(),
				onClick: e => {
					e.stopPropagation(), !t.disabled && t.onClick()
				}
			}, s.a.createElement(l.a, {
				className: u.a.content
			}, s.a.createElement(a.a, {
				className: u.a.toggleSwitch,
				on: t.on
			}), s.a.createElement("label", null, o.fbt._("Make GIF", null, {
				hk: "2ig2GG"
			}))), t.tooltip ? s.a.createElement(c.a, {
				className: u.a.hoverTooltip,
				tooltipContentClass: u.a.tooltipContentClass,
				text: t.tooltip
			}) : null)
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(t, e, n) {
			t.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ProgressBar/index.m.less"),
				c = n.n(i);
			e.a = t => {
				let {
					className: e,
					innerBarClassName: n,
					percent: o
				} = t;
				return r.a.createElement("div", {
					className: Object(s.a)(c.a.outerBar, e)
				}, r.a.createElement("div", {
					className: Object(s.a)(c.a.innerBar, n),
					style: {
						width: `${o.toFixed(2)}%`
					}
				}))
			}
		},
		"./src/reddit/components/RichTextEditor/Blockquote/index.m.less": function(t, e, n) {
			t.exports = {
				BlockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6",
				blockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6"
			}
		},
		"./src/reddit/components/RichTextEditor/CodeBlock/index.m.less": function(t, e, n) {
			t.exports = {
				CodeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh",
				codeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh"
			}
		},
		"./src/reddit/components/RichTextEditor/DragController/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return h
			})), n.d(e, "c", (function() {
				return m
			})), n.d(e, "a", (function() {
				return g
			}));
			var o = n("./node_modules/lodash/includes.js"),
				r = n.n(o);
			var s = n("./src/reddit/helpers/dom/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const c = t => t.className.indexOf("public-DraftEditor-content") >= 0,
				a = t => !!t.parentElement && !!t.parentElement.parentElement && c(t.parentElement.parentElement),
				l = t => !(!t.dataset.block || !t.dataset.offsetKey),
				d = t => {
					const {
						offsetKey: e
					} = t.dataset;
					return e ? (t => t.split("-")[0])(e) : ""
				},
				u = (t, e) => {
					return ((t, e) => {
						const n = function(t, e) {
							let n = 0,
								o = t.length - 1;
							for (; n <= o;) {
								const r = o + n >> 1,
									s = e(t[r]);
								if (s > 0) n = r + 1;
								else {
									if (!(s < 0)) return r;
									o = r - 1
								}
							}
							return n
						}(t, t => {
							const n = t.getBoundingClientRect();
							return e < n.top ? -1 : e > n.bottom ? 1 : 0
						});
						return t[Math.min(n, t.length - 1)]
					})(t.querySelectorAll("[data-block][data-offset-key]"), e)
				},
				p = (t, e) => {
					const n = Object(s.b)(t, l, c);
					return n || u(t, e)
				},
				h = (t, e) => {
					const n = (t => {
						const e = t.target;
						if (!(e instanceof HTMLElement)) return;
						const n = Object(s.b)(e, c);
						if (!n) return;
						const o = p(e, t.clientY);
						if (!o) return;
						const r = Object(s.b)(o, a);
						return r ? {
							editorContentElement: n,
							topLevelElement: r,
							blockElement: o
						} : void 0
					})(e);
					if (!n) return;
					const {
						topLevelElement: o,
						blockElement: r
					} = n, l = d(r), u = t.getCurrentContent(), h = u.getBlockForKey(l);
					if (!h) return;
					const {
						upperElement: m,
						lowerElement: g
					} = ((t, e, n, o) => {
						let r = n,
							s = n;
						if (t.getType() === i.b.UNSTYLED) r = s = e;
						else if (Object(i.o)(t.getType())) {
							r = s = e;
							const c = o.getBlockAfter(t.getKey());
							c && Object(i.u)(c.getType()) && (s = n.nextElementSibling)
						} else Object(i.u)(t.getType()) && (r = n.previousElementSibling, s = e);
						return {
							upperElement: r,
							lowerElement: s
						}
					})(h, r, o, u), {
						clientY: f,
						isBefore: b
					} = ((t, e, n) => {
						const o = t.getBoundingClientRect(),
							r = e.getBoundingClientRect();
						let i, a;
						if (n > (o.top + r.bottom) / 2) {
							i = r.bottom, a = !1;
							const t = Object(s.b)(e, t => !!t.nextElementSibling, c);
							if (t) {
								i = (t.nextElementSibling.getBoundingClientRect().top + r.bottom) / 2
							}
						} else {
							i = o.top, a = !0;
							const e = Object(s.b)(t, t => !!t.previousElementSibling, c);
							if (e) {
								i = (e.previousElementSibling.getBoundingClientRect().bottom + o.top) / 2
							}
						}
						return {
							clientY: i,
							isBefore: a
						}
					})(m, g, e.clientY);
					let y = l;
					if (h.getType() !== i.b.UNSTYLED) {
						const t = p(b ? m : g, f);
						t && (y = d(t))
					}
					return {
						clientY: f,
						isBefore: b,
						blockKey: y
					}
				},
				m = t => t.items ? !!Array.from(t.items).find(t => "file" === t.kind) : !(!t.files || !t.files.length) || r()(t.types, "Files"),
				g = t => t.items ? Array.from(t.items).map(t => "file" === t.kind ? t.getAsFile() : null).filter(Boolean) : t.files ? Array.from(t.files) : []
		},
		"./src/reddit/components/RichTextEditor/DragController/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_13Sj3UMDKkCCJTq88berCB",
				hideCaret: "_2BqK1CuzH2oWi2F9_cuFPQ",
				DropLine: "z5iuD3MVYcfS7tTihbvof",
				dropLine: "z5iuD3MVYcfS7tTihbvof",
				Tooltip: "_1z9S1KmnM79xn-UA0FnbP6",
				tooltip: "_1z9S1KmnM79xn-UA0FnbP6"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(t, e, n) {
			t.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				a = n.n(c);

			function l() {
				return (l = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			e.a = i.a.wrapped(t => {
				const {
					children: e,
					className: n,
					renderBelow: o,
					text: i,
					tooltipContentClass: c,
					...d
				} = t;
				return r.a.createElement("div", l({}, d, {
					className: Object(s.a)(a.a.container, n)
				}), i ? r.a.createElement("div", {
					className: Object(s.a)(a.a.tooltip, c, o ? a.a.below : a.a.above)
				}, i) : null, e)
			}, "HoverTooltip", a.a)
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less": function(t, e, n) {
			t.exports = {
				LinkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				linkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				Link: "_3vJCj_aXdDc-UXA9fDK-z-",
				link: "_3vJCj_aXdDc-UXA9fDK-z-",
				LinkButton: "_1NtBcR7JgjxkWLJrk3ddD3",
				linkButton: "_1NtBcR7JgjxkWLJrk3ddD3"
			}
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less": function(t, e, n) {
			t.exports = {
				EditForm: "_1iFkUjPC4J8jzWrDthDpcv",
				editForm: "_1iFkUjPC4J8jzWrDthDpcv",
				LinkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				linkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				Input: "_2rXi0UvEKRcI3WdI52LAx1",
				input: "_2rXi0UvEKRcI3WdI52LAx1",
				Label: "_2olni9Ucr8-t8W62nTkY_",
				label: "_2olni9Ucr8-t8W62nTkY_",
				HintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				hintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				InvalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				invalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				SubmitButton: "_8a_rf-Al8VNnUQ42WlvF",
				submitButton: "_8a_rf-Al8VNnUQ42WlvF"
			}
		},
		"./src/reddit/components/RichTextEditor/OrderedList/index.m.less": function(t, e, n) {
			t.exports = {
				OrderedListWrapper: "_1QXegNe8bOemD558m-vc9t",
				orderedListWrapper: "_1QXegNe8bOemD558m-vc9t"
			}
		},
		"./src/reddit/components/RichTextEditor/Paragraph/index.m.less": function(t, e, n) {
			t.exports = {
				ParagraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O",
				paragraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O"
			}
		},
		"./src/reddit/components/RichTextEditor/TextRendering/index.m.less": function(t, e, n) {
			t.exports = {
				H1: "_15ThA3NFuzpQTnPu0I3QKj",
				h1: "_15ThA3NFuzpQTnPu0I3QKj",
				H2: "_3R5icAd6cRzwpq-yhvQUoW",
				h2: "_3R5icAd6cRzwpq-yhvQUoW",
				H3: "_3UxnA7bFPnKoS0rKMO1UYe",
				h3: "_3UxnA7bFPnKoS0rKMO1UYe",
				H4: "_10CFPbxVR0HQhyRBkeExmO",
				h4: "_10CFPbxVR0HQhyRBkeExmO",
				H5: "_3bidJE2WceaRjyBA8LLfp3",
				h5: "_3bidJE2WceaRjyBA8LLfp3",
				H6: "_27N6aQ0-d-ntRM1JkDwGg7",
				h6: "_27N6aQ0-d-ntRM1JkDwGg7"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less": function(t, e, n) {
			t.exports = {
				button: "_2lAJkFZXhr5kbH7YF-sYFf",
				enabled: "_1H0LLEwUP5ys6cgxr9KhMa",
				active: "_32EiQr-Px2GJvCfigwwmuK"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				d = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less"),
				u = n.n(d);

			function p() {
				return (p = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const h = t => {
				t.preventDefault(), t.stopPropagation()
			};
			e.a = i.a.wrapped(t => {
				const {
					active: e,
					className: n,
					disabledTooltip: o,
					enabled: i = !0,
					tooltip: d,
					Icon: m,
					iconName: g,
					onClick: f,
					overridingClassName: b,
					tooltipBelow: y,
					children: E
				} = t, S = {
					"aria-label": d,
					"aria-selected": e,
					className: b || Object(s.a)(u.a.button, n, {
						[u.a.active]: !!e,
						[u.a.enabled]: i
					}),
					onMouseDown: h,
					onClick: t => {
						h(t), i && f && f(t)
					},
					role: "button",
					tabIndex: -1
				};
				return r.a.createElement(c.t, p({}, S, {
					size: c.d.S,
					priority: c.c.Plain,
					isSquare: !0,
					Icon: g ? Object(a.b)(g) : m
				}), r.a.createElement(l.a, {
					text: (i ? d : o) || "",
					tooltipContentClass: t.tooltipContentClass,
					renderBelow: y
				}), E)
			}, "FormatterButton", u.a)
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less": function(t, e, n) {
			t.exports = {
				LoadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				loadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				markdownIcon: "_2ROqhD3999k4q_d5PMRde-",
				Text: "EVdFfF5K7kZFMaYpSHbLe",
				text: "EVdFfF5K7kZFMaYpSHbLe",
				Button: "_1Mg8ZhclDuQlkzEqVU21qu",
				button: "_1Mg8ZhclDuQlkzEqVU21qu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/selectors/editorContent.ts"),
				p = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				h = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less"),
				m = n.n(h);
			const g = a.a.wrapped(d.a, "LoadingIcon", m.a),
				f = Object(c.c)({
					isConverting: (t, e) => Object(u.a)(t, e.draftKey)
				}),
				b = Object(i.b)(f);
			e.a = s.a.memo(b(t => s.a.createElement(l.t, {
				priority: l.c.Plain,
				size: l.d.XS,
				text: s.a.createElement(s.a.Fragment, null, t.isConverting && s.a.createElement(g, {
					sizePx: 12
				}), o.fbt._("Markdown Mode", null, {
					hk: "1DXoXV"
				})),
				"aria-label": o.fbt._("Switch to markdown", null, {
					hk: "OxsM0"
				}),
				tabIndex: -1,
				className: t.className,
				onClick: t.onClick
			}, !t.shouldHideTooltip && s.a.createElement(p.a, {
				text: o.fbt._("Switch to markdown", null, {
					hk: "4mWw83"
				})
			}))))
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less": function(t, e, n) {
			t.exports = {
				ImageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				imageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				VideoIcon: "uo_2BSPFse-IQNQbclyKb",
				videoIcon: "uo_2BSPFse-IQNQbclyKb",
				HiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu",
				hiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return m
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/constants/icons.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				d = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less"),
				p = n.n(u);
			const h = a.a.input("HiddenInput", p.a);
			class m extends r.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInputChange = t => {
						t.stopPropagation();
						const e = this.hiddenInputEl,
							n = e.files;
						n && n.length && (this.props.onFilesInput(Array.from(n)), e.value = "")
					}, this.onButtonClick = () => {
						this.hiddenInputEl && this.hiddenInputEl.click(), this.props.onClick()
					}, this.onHiddenInputClick = t => t.stopPropagation()
				}
				render() {
					const {
						accept: t,
						active: e,
						controlsState: n,
						destSubreddit: r,
						disabledTooltip: a,
						enabled: u,
						type: p
					} = this.props, m = "image" === p, g = n.blocks[l.a];
					let f = !0;
					if (r && r.allowedPostTypes) {
						const {
							images: t,
							videos: e
						} = r.allowedPostTypes;
						f = m ? t : e
					}
					let b = g.isActive,
						y = g.isEnabled && f;
					return void 0 !== e && (b = e), void 0 !== u && (y = u), s.a.createElement(d.a, {
						iconName: m ? c.a.image_post : c.a.video_post,
						active: b,
						enabled: y,
						tooltip: m ? o.fbt._("Add an image", null, {
							hk: "4bqU7J"
						}) : o.fbt._("Add a video", null, {
							hk: "2dn6oZ"
						}),
						onClick: this.onButtonClick,
						disabledTooltip: a
					}, s.a.createElement(h, {
						multiple: !0,
						innerRef: t => this.hiddenInputEl = t,
						onChange: this.onFileInputChange,
						onClick: this.onHiddenInputClick,
						type: "file",
						accept: t || Array.from(m ? i.b : i.d).join()
					}))
				}
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less": function(t, e, n) {
			t.exports = {
				Icon: "_3UAl61hrkRAXX5JQ6m_q8R",
				icon: "_3UAl61hrkRAXX5JQ6m_q8R"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return h
			})), n.d(e, "b", (function() {
				return m
			})), n.d(e, "e", (function() {
				return g
			})), n.d(e, "j", (function() {
				return f
			})), n.d(e, "g", (function() {
				return b
			})), n.d(e, "i", (function() {
				return y
			})), n.d(e, "k", (function() {
				return E
			})), n.d(e, "d", (function() {
				return S
			})), n.d(e, "l", (function() {
				return C
			})), n.d(e, "h", (function() {
				return O
			})), n.d(e, "a", (function() {
				return k
			})), n.d(e, "c", (function() {
				return T
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/constants/icons.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				l = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const p = t => c.a.wrapped(t, "Icon", d.a),
				h = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return n => {
						const o = p(t);
						return s.a.createElement(o, u({}, n, {
							style: {
								padding: e
							}
						}))
					}
				},
				m = {
					type: "style",
					name: "bold",
					iconName: i.a.bold,
					style: a.k.BOLD,
					tooltipTranslation: () => o.fbt._("Bold", null, {
						hk: "16qNLn"
					})
				},
				g = {
					type: "style",
					name: "italics",
					iconName: i.a.italic,
					style: a.k.ITALIC,
					tooltipTranslation: () => o.fbt._("Italics", null, {
						hk: "3hxpiB"
					})
				},
				f = {
					type: "style",
					name: "strikethrough",
					iconName: i.a.strikethrough,
					style: a.k.STRIKETHROUGH,
					tooltipTranslation: () => o.fbt._("Strikethrough", null, {
						hk: "U4hXC"
					})
				},
				b = {
					type: "style",
					name: "inline_code",
					iconName: i.a.code_inline,
					style: a.k.MONOSPACE,
					tooltipTranslation: () => o.fbt._("Inline Code", null, {
						hk: "1eNxEt"
					})
				},
				y = {
					type: "style",
					name: "spoiler",
					iconName: i.a.spoiler,
					style: a.k.SPOILER,
					tooltipTranslation: () => o.fbt._("Spoiler", null, {
						hk: "1tb6Ht"
					})
				},
				E = {
					type: "style",
					name: "superscript",
					iconName: i.a.superscript,
					style: a.k.SUPERSCRIPT,
					tooltipTranslation: () => o.fbt._("Superscript", null, {
						hk: "sqKFn"
					})
				},
				S = {
					type: "block",
					name: "heading",
					iconName: i.a.text_size,
					block: a.b.H1,
					tooltipTranslation: () => o.fbt._("Heading", null, {
						hk: "4jnBPs"
					})
				},
				C = {
					type: "block",
					name: "unordered_list",
					iconName: i.a.list_bulleted,
					block: a.i.UNORDERED,
					tooltipTranslation: () => o.fbt._("Bulleted List", null, {
						hk: "21Yx7R"
					})
				},
				O = {
					type: "block",
					name: "ordered_list",
					iconName: i.a.list_numbered,
					block: a.i.ORDERED,
					tooltipTranslation: () => o.fbt._("Numbered List", null, {
						hk: "4BmF1X"
					})
				},
				k = {
					type: "block",
					name: "block_quote",
					iconName: i.a.quote,
					block: a.e,
					tooltipTranslation: () => o.fbt._("Quote Block", null, {
						hk: "1xUsGm"
					})
				},
				T = {
					type: "block",
					name: "code_block",
					iconName: i.a.code_block,
					block: a.f,
					tooltipTranslation: () => o.fbt._("Code Block", null, {
						hk: "2y19DH"
					})
				}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				ToolbarWrapper: "_2w8adx4kIBGPEESCyEmToa",
				toolbarWrapper: "_2w8adx4kIBGPEESCyEmToa",
				isSticky: "r7zyyy152ZTdiHhea0cIj",
				tooltip: "dMXy0l6Saub8-fPDkQvGC",
				SectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				sectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				CollapseIntoOverflow: "_2Sw_-OGBZ8HN7tA8CP2qjP",
				collapseIntoOverflow: "_2Sw_-OGBZ8HN7tA8CP2qjP",
				MarkdownButtonWrapper: "-CJZhr1W053faqFXFYgXO",
				markdownButtonWrapper: "-CJZhr1W053faqFXFYgXO",
				MarkdownButton: "_2Z7RdWBmSoubpoKJAgNIAi",
				markdownButton: "_2Z7RdWBmSoubpoKJAgNIAi"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return v
			})), n.d(e, "g", (function() {
				return R
			})), n.d(e, "f", (function() {
				return w
			})), n.d(e, "h", (function() {
				return B
			})), n.d(e, "e", (function() {
				return I
			})), n.d(e, "a", (function() {
				return _
			})), n.d(e, "d", (function() {
				return A
			})), n.d(e, "b", (function() {
				return K
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/icons.ts"),
				l = n("./src/reddit/components/CollapseIntoOverflow/index.tsx"),
				d = n("./src/reddit/helpers/richTextEditor/index.ts"),
				u = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				h = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				m = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				g = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				f = n("./src/reddit/components/RichTextEditor/table/helpers.ts");
			var b = (t, e, n) => {
					if (Object(h.v)(o.RichUtils.getCurrentBlockType(t))) return t;
					const r = t.getCurrentContent(),
						s = t.getSelection().getEndKey(),
						i = Object(f.l)(e, n),
						c = Object(g.f)(r, s, i, g.a.after, !0),
						a = o.EditorState.push(t, c, m.e);
					return o.EditorState.forceSelection(a, o.SelectionState.createEmpty(i[0].getKey()))
				},
				y = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				E = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				S = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				C = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.tsx"),
				O = n("./src/reddit/components/RichTextEditor/Toolbar/index.m.less"),
				k = n.n(O);

			function T() {
				return (T = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const x = t => i.a.createElement(y.a, T({}, t, {
					tooltipContentClass: k.a.tooltip
				})),
				v = () => i.a.createElement("div", {
					className: k.a.SectionSpacer
				}),
				j = (t, e, n, r, s) => {
					const {
						name: c,
						iconName: a,
						tooltipTranslation: l
					} = t, d = l();
					if ("style" === t.type) {
						const {
							style: o
						} = t;
						return i.a.createElement(x, {
							iconName: a,
							active: e.styles[o].isActive,
							enabled: e.styles[o].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const t = Object(u.c)(o, n);
								r(t), s(c, ((t, e) => t.getCurrentInlineStyle().contains(e))(t, o))
							}
						})
					} {
						const {
							block: l
						} = t;
						return i.a.createElement(x, {
							iconName: a,
							active: e.blocks[l].isActive,
							enabled: e.blocks[l].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const t = Object(u.i)(l, n);
								r(t), s(c, ((t, e) => o.RichUtils.getCurrentBlockType(t) === e)(t, l))
							}
						})
					}
				},
				R = (t, e, n, o, r) => t.map(t => j(t, e, n, o, r)),
				w = [E.b, E.e],
				B = [E.j, E.g, E.k, E.i],
				I = [E.d, E.l, E.h, E.a, E.c],
				_ = t => i.a.createElement(x, {
					iconName: a.a.link_post,
					active: t.controlsState.link.isActive,
					enabled: t.controlsState.link.isEnabled,
					tooltip: r.fbt._("Link", null, {
						hk: "e4PGW"
					}),
					onClick: () => {
						t.onLinkButtonClick(), t.trackOnClick("link", !0)
					}
				}),
				A = t => i.a.createElement(x, {
					iconName: a.a.table,
					active: t.controlsState.blocks[h.l].isActive,
					enabled: t.controlsState.blocks[h.l].isEnabled,
					tooltip: r.fbt._("Table", null, {
						hk: "3cHfLT"
					}),
					onClick: () => {
						t.onChange(b(t.editorState, 3, 2)), t.trackOnClick("table", !0)
					}
				}),
				K = t => {
					const {
						className: e,
						allowImageUploads: n = !1,
						allowVideoUploads: o = !1,
						destSubreddit: r,
						editorState: s,
						isOverlay: a,
						onChange: u,
						onFilesSelect: h,
						readOnly: m,
						trackOnClick: g,
						onLinkButtonClick: f,
						onMarkdownButtonClick: b,
						editorKey: y
					} = t, E = Object(p.a)(s);
					return m && Object(p.b)(E), i.a.createElement("div", {
						className: Object(c.a)(k.a.ToolbarWrapper, e, {
							[k.a.isSticky]: !a
						})
					}, i.a.createElement(l.a, {
						oveflowMenuDropdownId: y,
						className: k.a.CollapseIntoOverflow,
						editorType: d.a.Post
					}, R(w, E, s, u, g), i.a.createElement(_, {
						controlsState: E,
						trackOnClick: g,
						onLinkButtonClick: f
					}), R(B, E, s, u, g), i.a.createElement(v, null), R(I, E, s, u, g), i.a.createElement(v, null), i.a.createElement(A, {
						controlsState: E,
						editorState: s,
						trackOnClick: g,
						onChange: u
					}), n && i.a.createElement(C.a, {
						destSubreddit: r,
						controlsState: E,
						onClick: () => g("image_upload"),
						onFilesInput: h,
						type: "image"
					}), o && i.a.createElement(C.a, {
						destSubreddit: r,
						controlsState: E,
						onClick: () => g("video_upload"),
						onFilesInput: h,
						type: "video"
					})), i.a.createElement("div", {
						className: k.a.MarkdownButtonWrapper
					}, i.a.createElement(S.a, {
						className: k.a.MarkdownButton,
						onClick: b
					})))
				}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r() {
				const t = window.getSelection();
				if (!t.rangeCount) return null;
				const e = Object(o.getVisibleSelectionRect)(window);
				return e || (!e && t.focusNode && t.focusNode === t.anchorNode ? t.focusNode.getBoundingClientRect() : null)
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.m.less": function(t, e, n) {
			t.exports = {
				tooltipBox: "tVQ1dB4n0mAWdcQNxFq-K",
				dropdown: "_1akkpO3lymdoWGIc5tjIpm",
				triangle: "_2O2U-Vhc1mg9O7DOwp50Aa",
				triangleBack: "_3IfYYXUMUzn2OvoiMUNcaQ",
				triangleFront: "_3CtwSTtkmKXvzDo3TmCp9C",
				triangleBelow: "_1churYJpAwcb-tf0k1c46F"
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return h
			})), n.d(e, "b", (function() {
				return g
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/index.tsx"),
				c = n("./src/reddit/helpers/dom/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/Tooltip/index.m.less"),
				l = n.n(a);
			const d = 8,
				u = 16,
				p = 15 + u / 2;
			var h;
			! function(t) {
				t[t.None = 0] = "None", t[t.Above = 1] = "Above", t[t.Below = 2] = "Below"
			}(h || (h = {}));
			const m = t => {
				let {
					isBelow: e = !1,
					style: n
				} = t;
				return r.a.createElement("div", {
					className: Object(s.a)(l.a.triangle, {
						[l.a.triangleBelow]: e
					}),
					style: n
				}, r.a.createElement("div", {
					className: l.a.triangleBack
				}), r.a.createElement("div", {
					className: l.a.triangleFront
				}))
			};
			class g extends o.Component {
				constructor(t) {
					super(t), this.containerRef = null, this.updateContainerRef = t => this.containerRef = t, this.setTargetPosition = t => {
						t ? this.updatePositioning(t) : this.setState({
							positioning: null
						})
					}, this.state = {
						positioning: null
					}
				}
				updatePositioning(t) {
					if (!this.containerRef) return;
					const e = this.containerRef.getBoundingClientRect(),
						n = Math.round(e.width),
						o = Math.round(e.height),
						r = this.state.positioning;
					if (!t) {
						if (!r) return;
						if (r.tooltipWidth === n && r.tooltipHeight === o) return
					}
					const s = t ? t.bottom : r.target.bottom,
						i = t ? t.top : r.target.top,
						a = t ? t.left : r.target.left,
						l = Object(c.e)(this.containerRef);
					let d, u, p;
					if (l) {
						const t = l.getBoundingClientRect();
						d = t.bottom - (s || 0), u = a - t.left + l.scrollLeft, p = i - t.top + l.scrollTop
					} else {
						const t = document.documentElement,
							e = window.pageYOffset || t.scrollTop;
						u = a + (window.pageXOffset || t.scrollLeft), p = i + e
					}
					const h = {
						target: {
							top: i,
							left: a
						},
						tooltipWidth: n,
						tooltipHeight: o,
						tooltip: {
							top: p,
							left: u,
							bottom: d
						}
					};
					this.adjustPositionForTriangle(h, l), this.setState({
						positioning: h
					})
				}
				adjustPositionForTriangle(t, e) {
					const {
						trianglePlacement: n
					} = this.props;
					if (!n) return;
					const o = e ? e.offsetWidth : document.documentElement.offsetWidth,
						r = o ? Math.max(t.tooltip.left + t.tooltipWidth - o, 0) : 0;
					t.tooltip.left -= r + p;
					const s = r + p - u / 2;
					let i;
					n === h.Above ? (t.tooltip.top += d, i = -d) : (t.tooltip.top -= t.tooltipHeight + d, i = t.tooltipHeight), t.triangle = {
						top: i,
						left: s
					}
				}
				componentDidUpdate(t, e) {
					t.targetPosition !== this.props.targetPosition ? this.setTargetPosition(this.props.targetPosition || null) : this.updatePositioning()
				}
				componentDidMount() {
					this.setTargetPosition(this.props.targetPosition || null), this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(this.setTargetPosition)
				}
				componentWillUnmount() {
					this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(null)
				}
				render() {
					const {
						aboveParent: t,
						dropdown: e,
						trianglePlacement: n
					} = this.props, {
						positioning: o
					} = this.state, c = o && void 0 !== o.triangle && r.a.createElement(m, {
						isBelow: n === h.Below,
						style: {
							top: o.triangle.top + "px",
							left: o.triangle.left + "px"
						}
					});
					let a = r.a.createElement("div", {
						className: Object(s.a)(l.a.tooltipBox, this.props.className, {
							[l.a.dropdown]: e
						}),
						style: o ? {
							left: o.tooltip.left,
							...t ? {
								bottom: o.tooltip.bottom
							} : {
								top: o.tooltip.top
							}
						} : {},
						ref: this.updateContainerRef
					}, o && this.props.children && r.a.createElement(r.a.Fragment, null, c, this.props.children));
					return this.props.usePortal && (a = Object(i.d)(a, this.props.portalContainer || document.body)), a
				}
			}
		},
		"./src/reddit/components/RichTextEditor/UnorderedList/index.m.less": function(t, e, n) {
			t.exports = {
				UnorderedListWrapper: "vXDC2CysyRNVq3lFirKDs",
				unorderedListWrapper: "vXDC2CysyRNVq3lFirKDs"
			}
		},
		"./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return o
			})), n.d(e, "e", (function() {
				return r
			})), n.d(e, "g", (function() {
				return s
			})), n.d(e, "h", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "d", (function() {
				return a
			})), n.d(e, "f", (function() {
				return l
			})), n.d(e, "a", (function() {
				return d
			}));
			const o = "bold",
				r = "italic",
				s = "underline",
				i = "undo",
				c = "backspace",
				a = "delete",
				l = "split-block",
				d = "adjust-depth"
		},
		"./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "e", (function() {
				return r
			})), n.d(e, "d", (function() {
				return s
			})), n.d(e, "b", (function() {
				return i
			})), n.d(e, "c", (function() {
				return c
			})), n.d(e, "f", (function() {
				return a
			}));
			const o = "backspace-character",
				r = "insert-fragment",
				s = "insert-characters",
				i = "change-block-data",
				c = "change-block-type",
				a = "remove-range"
		},
		"./src/reddit/components/RichTextEditor/editorStateTransforms.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return u
			})), n.d(e, "i", (function() {
				return p
			})), n.d(e, "b", (function() {
				return g
			})), n.d(e, "f", (function() {
				return f
			})), n.d(e, "h", (function() {
				return b
			})), n.d(e, "g", (function() {
				return y
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "e", (function() {
				return S
			})), n.d(e, "a", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/styles.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const u = (t, e) => {
					return e.getSelection().isCollapsed() ? Object(l.a)(t, e) : Object(l.b)(t, e)
				},
				p = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection(),
						s = r.getEndKey(),
						a = o.RichUtils.getCurrentBlockType(e) === t ? d.n : t;
					let u = e,
						p = o.Modifier.setBlockType(n, r, a);
					const h = n.getBlockForKey(s).getLength();
					if (Object(d.r)(a) || Object(d.q)(a)) {
						const t = o.SelectionState.createEmpty(r.getStartKey()).merge({
							focusKey: r.getEndKey(),
							focusOffset: h
						});
						u = Object(l.c)(u), p = ((t, e) => {
							const n = Object.keys(d.k).reduce((t, n) => o.Modifier.removeInlineStyle(t, e, d.k[n]), t);
							return Object(c.h)(n, e)
						})(p, t)
					}
					if (Object(d.q)(a) || Object(d.p)(a)) {
						const t = p.getBlockAfter(s);
						if (!t || t.getType() !== a && t.getType() !== d.n) {
							const t = o.SelectionState.createEmpty(s).merge({
								anchorOffset: h,
								focusOffset: h
							});
							p = o.Modifier.splitBlock(p, t), p = o.Modifier.setBlockType(p, p.getSelectionAfter(), d.n)
						}
					}
					return p = p.merge({
						selectionAfter: r
					}), o.EditorState.push(u, p, i.c)
				},
				h = (t, e) => {
					const n = o.Modifier.setBlockType(t, e, d.n);
					return o.Modifier.replaceText(n, e, "", Object(r.OrderedSet)([]))
				},
				m = (t, e) => o.EditorState.forceSelection(t, o.SelectionState.createEmpty(e)),
				g = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = a.d(e, n),
						c = s.getBlockAfter(n.getEndKey()),
						l = o.SelectionState.createEmpty(c.getKey()),
						u = o.Modifier.replaceText(o.Modifier.setBlockType(s, l, d.n), l, "", Object(r.OrderedSet)([])),
						p = o.EditorState.push(t, u, i.d);
					return m(p, c.getKey())
				},
				f = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						r = e.getBlockForKey(n.getEndKey()),
						i = r.set("depth", Math.max(r.getDepth() - 1, 0)),
						c = e.merge({
							blockMap: e.getBlockMap().merge({
								[r.getKey()]: i
							})
						});
					return o.EditorState.push(t, c, s.a)
				},
				b = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						r = e.getBlockForKey(n.getEndKey()).getKey(),
						s = o.EditorState.push(t, h(e, n), i.c);
					return m(s, r)
				},
				y = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						r = e.getBlockForKey(n.getEndKey()),
						s = r.getKey(),
						c = e.getBlockBefore(s).getKey(),
						a = o.SelectionState.createEmpty(s).merge({
							focusOffset: r.getText().length
						}),
						l = o.EditorState.push(t, h(((t, e) => {
							const n = t.getBlockMap().remove(e);
							return t.merge({
								blockMap: n
							})
						})(e, c), a), i.c);
					return m(l, s)
				},
				E = t => {
					const e = a.d(t.getCurrentContent(), t.getSelection());
					return o.EditorState.push(t, e, s.f)
				},
				S = t => {
					const e = a.a(t.getCurrentContent(), t.getSelection(), "\n");
					return o.EditorState.push(t, e, i.d)
				},
				C = t => {
					const e = t.getSelection(),
						n = a.a(t.getCurrentContent(), e, " ");
					return o.EditorState.push(t, n, i.d)
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			e.a = Object(o.a)({
				resolved: {},
				chunkName: () => "PowerupsEmotesTooltip",
				isReady(t) {
					const e = this.resolve(t);
					return !1 !== this.resolved[e] && !!n.m[e]
				},
				importAsync: () => n.e("PowerupsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx")),
				requireAsync(t) {
					const e = this.resolve(t);
					return this.resolved[e] = !1, this.importAsync(t).then(t => (this.resolved[e] = !0, t))
				},
				requireSync(t) {
					const e = this.resolve(t);
					return n(e)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/emotes/decorator.m.less": function(t, e, n) {
			t.exports = {
				emote: "Q7hqnjoPSXm7QyvW8qf57",
				sticker: "_1WD0TSe2_gY29FXmFjPCza"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return p
			})), n.d(e, "c", (function() {
				return h
			})), n.d(e, "g", (function() {
				return m
			})), n.d(e, "b", (function() {
				return g
			})), n.d(e, "h", (function() {
				return f
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "e", (function() {
				return y
			})), n.d(e, "i", (function() {
				return E
			})), n.d(e, "d", (function() {
				return S
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/lib/memoizeByReference/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				d = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = "⬛";

			function h(t, e) {
				return t.createEntity(c.a.EMOTE, "IMMUTABLE", e)
			}

			function m(t, e) {
				let n = e.getCurrentContent();
				const r = (n = h(n, t)).getLastCreatedEntityKey();
				n = Object(d.b)(n, e.getSelection(), p, void 0, r);
				const s = o.EditorState.push(e, n, i.d);
				return o.EditorState.forceSelection(s, s.getSelection())
			}

			function g(t, e) {
				if (e.getStartKey() !== e.getEndKey()) return !1;
				const n = t.getBlockForKey(e.getEndKey()).getType();
				return !(Object(u.q)(n) || Object(u.r)(n) || Object(u.t)(n))
			}

			function f(t, e) {
				const n = Object(a.a)(t, e, e => {
					const n = e.getEntity();
					return !!n && t.getEntity(n).getType() === c.a.EMOTE
				});
				let r;
				for (; r = n.pop();) {
					const e = o.SelectionState.createEmpty(r.blockKey).merge({
						anchorOffset: r.start,
						focusOffset: r.end
					});
					t = o.Modifier.removeRange(t, e, "backward")
				}
				return t
			}

			function b(t) {
				const e = t.getSelection();
				if (!e.isCollapsed()) return null;
				const n = t.getCurrentContent().getBlockForKey(e.getFocusKey()),
					o = n.getText(),
					r = n.getCharacterList();
				let s = e.getFocusOffset() - 1;
				const i = [];
				for (; s >= 0;) {
					const t = o[s],
						e = r.get(s),
						n = e && e.getEntity();
					if (!t.trim().length || n) return null;
					if (":" === t && i.length > 0) break;
					i.unshift(t), s--
				}
				return s >= 0 && i.length ? i.join("").toLowerCase() : null
			}

			function y(t, e, n) {
				t.findEntityRanges(t => {
					const e = t.getEntity();
					return !!e && n.getEntity(e).getType() === c.a.EMOTE
				}, e)
			}
			const E = Object(s.a)(t => {
				if (t.getBlockMap().size > 1) return !1;
				const e = t.getFirstBlock();
				let n = 0;
				return y(e, () => n++, t), n <= 3 && n === e.getLength()
			});

			function S(t, e) {
				if (E(t.getCurrentContent()) === E(e.getCurrentContent())) return t;
				const n = t.getCurrentContent(),
					s = n.getFirstBlock();
				return o.EditorState.set(t, {
					currentContent: o.Modifier.mergeBlockData(n, Object(l.b)(s), Object(r.Map)({
						_emote_modified: new Date
					}))
				})
			}
		},
		"./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r(t, e, n, r) {
				let s = t.getCharacterList();
				return s = s.withMutations(t => {
					for (let s = e; s < n; s++) t.set(s, o.CharacterMetadata.applyEntity(t.get(s), r))
				}), t.set("characterList", s)
			}
		},
		"./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function r(t, e, n, r, s) {
				const i = t.createEntity(n.getType(), n.getMutability(), n.getData()),
					c = t.getLastCreatedEntityKey();
				return [i, Object(o.a)(e, r, s, c)]
			}

			function s(t, e) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const o = new Map;
				let s = e,
					i = t;
				return e.forEach((t, e) => {
					t && e && t.findEntityRanges(t => !!t.getEntity(), (n, r) => {
						const s = t.getEntityAt(n),
							i = o.get(s) || [];
						i.push({
							start: n,
							end: r,
							blockKey: e
						}), o.set(s, i)
					})
				}), o.forEach((e, o) => {
					const c = t.getEntity(o);
					(n ? e.slice(1) : e).forEach(t => {
						let {
							start: e,
							end: n,
							blockKey: o
						} = t;
						const a = s.get(o),
							[l, d] = r(i, a, c, e, n);
						i = l, s = s.set(o, d)
					})
				}), [i, s]
			}
		},
		"./src/reddit/components/RichTextEditor/entity/entityTypes.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const o = {
					COMMENT_LINK: "COMMENT_LINK",
					EMOTE: "EMOTE",
					LINK: "LINK",
					POST_LINK: "POST_LINK",
					SUBREDDIT_LINK: "SUBREDDIT_LINK",
					USER_LINK: "USER_LINK",
					USER_MENTION: "USER_MENTION"
				},
				r = new Set([o.COMMENT_LINK, o.LINK, o.POST_LINK, o.SUBREDDIT_LINK, o.USER_LINK, o.USER_MENTION]),
				s = (t, e) => {
					const n = t && e.getEntity(t);
					return !!n && (t => r.has(t))(n.getType())
				}
		},
		"./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");

			function r(t, e, n) {
				const r = [];
				return Object(o.a)(t, e, (t, o) => {
					const s = e.getStartKey() === o ? e.getStartOffset() : 0,
						i = e.getEndKey() === o ? e.getEndOffset() : t.getLength();
					t.findEntityRanges(n, (e, n) => {
						s <= n && i >= e && r.push({
							blockKey: o,
							entityKey: t.getEntityAt(e),
							start: e,
							end: n
						})
					})
				}), r
			}
		},
		"./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r(t, e) {
				const n = e.getFocusKey();
				if (n !== e.getAnchorKey()) return;
				const r = t.getBlockForKey(n),
					s = e.getStartOffset(),
					i = e.getEndOffset(),
					c = r.getEntityAt(i) || (i > 0 ? r.getEntityAt(i - 1) : null);
				if (!c) return;
				let a, l;
				if (r.findEntityRanges(t => t.getEntity() === c, (t, e) => {
						t <= s && i <= e && (a = t, l = e)
					}), "number" != typeof a || "number" != typeof l) return;
				const d = r.getText().slice(a, l);
				return {
					entitySelection: o.SelectionState.createEmpty(n).merge({
						anchorOffset: a,
						focusOffset: l
					}),
					entityKey: c,
					entityText: d
				}
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/decorator.m.less": function(t, e, n) {
			t.exports = {
				RegularLink: "_1FRfMxEAy__7c8vezYv9qP",
				regularLink: "_1FRfMxEAy__7c8vezYv9qP"
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/helpers.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return m
			})), n.d(e, "d", (function() {
				return f
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "c", (function() {
				return y
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "h", (function() {
				return S
			})), n.d(e, "g", (function() {
				return C
			})), n.d(e, "e", (function() {
				return O
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./src/lib/linkMatchers/index.ts"),
				s = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				d = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = [c.a.SUBREDDIT_LINK, c.a.USER_LINK, c.a.USER_MENTION],
				h = [...p, c.a.LINK];

			function m(t, e, n) {
				t.findEntityRanges(t => {
					const e = t.getEntity();
					return !!e && h.includes(n.getEntity(e).getType())
				}, e)
			}
			const g = t => {
					const e = r.a.match(t);
					if (e && e.length && e[0]) {
						const {
							schema: t,
							url: n
						} = e[0];
						return {
							linkPrefix: t,
							url: n
						}
					}
					return {
						linkPrefix: "",
						url: ""
					}
				},
				f = Object(i.a)((function(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection();
					if (!n.isCollapsed()) return;
					if (Object(u.q)(e.getBlockForKey(n.getStartKey()).getType())) return;
					const s = n.getFocusKey(),
						i = e.getBlockForKey(s),
						c = n.getFocusOffset(),
						a = i.getText(),
						l = a.lastIndexOf(" ", c - 1) + 1,
						p = a.slice(l, c);
					if (!p) return;
					const h = r.f.match(p);
					if (!h) return;
					const m = h[h.length - 1],
						g = l + m.index,
						f = l + m.lastIndex;
					let b = -1;
					if (i.findEntityRanges(t => !!t.getEntity(), (t, e) => {
							t < c && (b = e)
						}), b >= g) return;
					return i.getCharacterList().slice(g, f).find(d.b) ? void 0 : {
						selection: o.SelectionState.createEmpty(s).merge({
							anchorOffset: g,
							focusOffset: f
						}),
						url: m.url
					}
				}));

			function b(t, e, n) {
				const r = t.getSelection();
				let s = t.getCurrentContent();
				const i = (s = s.createEntity(c.a.LINK, "MUTABLE", {
					url: n
				})).getLastCreatedEntityKey();
				return s = (s = o.Modifier.applyEntity(s, e, i)).merge({
					selectionAfter: r
				}), o.EditorState.push(t, s, "apply-entity")
			}
			const y = Object(i.a)((function(t) {
				const e = t.getCurrentContent(),
					n = Object(l.a)(e, t.getSelection());
				if (!n) return;
				const o = e.getEntity(n.entityKey);
				if (o.getType() !== c.a.LINK) return;
				const {
					url: r
				} = o.getData();
				return {
					url: r,
					...n
				}
			}));
			const E = Object(i.a)((function(t) {
				const e = t.getCurrentContent(),
					n = t.getSelection(),
					o = Object(l.a)(e, n);
				if (!o) return;
				const r = n.getFocusOffset(),
					s = e.getEntity(o.entityKey),
					{
						linkPrefix: i
					} = g(o.entityText);
				return !p.includes(s.getType()) || !o.entityText.startsWith(i) || r - o.entitySelection.getStartOffset() < i.length ? void 0 : {
					internalName: o.entityText.slice(i.length),
					...o
				}
			}));

			function S(t, e, n, r) {
				let s = "apply-entity",
					i = t.getCurrentContent(),
					a = t;
				const d = Object(l.a)(i, e);
				if (n)
					if (d) {
						const t = i.getEntity(d.entityKey),
							{
								url: e
							} = t.getData();
						e !== n && (i = i.mergeEntityData(d.entityKey, {
							url: n
						})), void 0 !== r && d.entityText !== r && (i = o.Modifier.replaceText(i, d.entitySelection, r, void 0, d.entityKey), s = "insert-characters")
					} else {
						if (void 0 === r) throw new Error("New link display text must be provided!");
						const t = (i = i.createEntity(c.a.LINK, "MUTABLE", {
							url: n
						})).getLastCreatedEntityKey();
						i = o.Modifier.replaceText(i, e, r, void 0, t), s = "insert-characters"
					}
				else i = (i = o.Modifier.applyEntity(i, e, "")).merge({
					selectionAfter: t.getSelection()
				});
				return i === t.getCurrentContent() ? t : a = o.EditorState.push(a, i, s)
			}

			function C(t, e) {
				const n = E(t);
				if (!n) return t;
				const {
					linkPrefix: r,
					url: i
				} = g(n.entityText), c = `${r===s.d.mention?s.d.profile:r}${e}`, a = n.entitySelection.getStartOffset() + c.length;
				let l = S(t, n.entitySelection, i, c);
				return l = o.EditorState.forceSelection(l, n.entitySelection.merge({
					anchorOffset: a,
					focusOffset: a
				}))
			}

			function O(t, e) {
				if (e.getStartKey() !== e.getEndKey()) return !1;
				const n = t.getBlockForKey(e.getEndKey()).getType();
				return !Object(u.q)(n) && !Object(u.t)(n) && !Object(a.a)(t, e, e => {
					const n = e.getEntity();
					return !!n && t.getEntity(n).getType() !== c.a.LINK
				}).length
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/common.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "h", (function() {
				return c
			})), n.d(e, "e", (function() {
				return a
			})), n.d(e, "c", (function() {
				return l
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "b", (function() {
				return u
			})), n.d(e, "i", (function() {
				return p
			})), n.d(e, "d", (function() {
				return h
			})), n.d(e, "g", (function() {
				return m
			}));
			var o, r = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(t) {
				t.before = "before", t.after = "after"
			}(o || (o = {}));
			const c = (t, e) => new r.ContentBlock({
					key: t || Object(r.genKey)(),
					...e ? {
						text: e,
						characterList: Object(s.List)(Object(s.Repeat)(r.CharacterMetadata.create(), e.length))
					} : {}
				}),
				a = t => t.props.children,
				l = t => a(t).props.block,
				d = function(t, e, n) {
					let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.after,
						a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
						l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
					const d = [];
					let p = -1;
					if (t.getBlockMap().forEach((t, r) => {
							s === o.after && d.push(t), r === e && (d.push(...n), p = d.length - 1), s === o.before && d.push(t)
						}), p >= 0) {
						if (a) {
							const t = d[p + 1];
							t && t.getType() === i.n || d.splice(p + 1, 0, c())
						}
						if (l) {
							const t = p - n.length,
								e = d[t];
							e && e.getType() === i.n || d.splice(t + 1, 0, c())
						}
					}
					return t.merge({
						blockMap: r.BlockMapBuilder.createFromArray(d),
						selectionAfter: u(n[n.length - 1], !1, !0)
					})
				},
				u = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						o = r.SelectionState.createEmpty(t.getKey()).merge({
							hasFocus: n
						});
					return e && (o = o.merge({
						anchorOffset: t.getLength(),
						focusOffset: t.getLength()
					})), o
				},
				p = (t, e) => {
					let n = t.getBlockBefore(e),
						o = t.getBlockMap();
					return o.get(e) ? (o = o.size > 1 ? o.remove(e) : o.set(e, c(e)), n = n || o.first(), t.merge({
						blockMap: o,
						selectionAfter: u(n, !0)
					})) : t
				},
				h = (t, e) => e.querySelector(`[data-block][data-offset-key="${t}-0-0"]`),
				m = t => t.getType() === i.n && !t.getText()
		},
		"./src/reddit/components/RichTextEditor/helpers/controlsState.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return f
			})), n.d(e, "b", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forEach.js"),
				r = n.n(o),
				s = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				l = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				u = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				h = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const m = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = (() => {
							const t = {};
							return r()(d.k, e => t[e] = {
								isActive: !1,
								isEnabled: !1
							}), t
						})(),
						i = new Set(Object.keys(o));
					if (i.delete(d.k.HIGHLIGHT), n.isCollapsed()) {
						const r = e.getBlockForKey(n.getEndKey()),
							s = r.getType();
						Object(d.q)(s) || Object(d.r)(s) || Object(d.t)(s) || i.forEach(t => o[t].isEnabled = !0), t.getCurrentInlineStyle().forEach(t => {
							t && o[t] && (o[t].isActive = !0)
						}), Object(u.i)(r) && (o[d.k.BOLD] = {
							isEnabled: !1,
							isActive: !1
						})
					} else {
						Object(h.e)(e, n).forEach(t => {
							i.delete(t), o[t] && (o[t].isActive = !0, o[t].isEnabled = !0)
						}), Object(p.a)(e, n, (t, r) => {
							if (!i.size) return !1;
							const c = n.getStartKey() === r ? n.getStartOffset() : 0,
								a = n.getEndKey() === r ? n.getEndOffset() : t.getLength(),
								l = t.getType(),
								u = t.getCharacterList();
							Object(d.q)(l) || Object(d.r)(l) || Object(d.t)(l) || Object(s.a)(u, {
								start: c,
								end: a
							}, (n, r, s, c) => {
								const a = n.getStyle(),
									l = n.getEntity(),
									d = l ? e.getEntity(l) : null;
								if (i.forEach(e => {
										const n = !o[e].isActive,
											r = Object(h.f)(a, t, d, e, n);
										r && r !== a && (o[e].isEnabled = !0, i.delete(e))
									}), !i.size) return !1
							})
						})
					}
					return o
				},
				g = t => {
					const e = {};
					return r()(d.b, n => e[n] = {
						isActive: !1,
						isEnabled: t
					}), e
				},
				f = Object(i.a)(t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = (t => {
							const e = t.getCurrentContent(),
								n = t.getSelection();
							let o = g(!0),
								s = null;
							if (n.isCollapsed()) s = e.getBlockForKey(n.getEndKey()).getType();
							else {
								let t = null;
								Object(p.a)(e, n, (e, n) => {
									const r = e.getType();
									return Object(d.t)(r) ? (o = g(!1), !1) : (null === t && (t = r), t !== r ? (t = null, !1) : void 0)
								}), s = t
							}
							return null !== s && ((Object(d.v)(s) || Object(d.t)(s)) && r()(o, t => {
								t.isEnabled = !1
							}), o[s].isActive = !0), o
						})(t);
					return {
						giphy: {
							isActive: !1,
							isEnabled: o[d.a].isEnabled && !Object(l.j)(e)
						},
						emote: {
							isActive: !1,
							isEnabled: Object(c.b)(e, n)
						},
						link: {
							isActive: !1,
							isEnabled: Object(a.e)(e, n)
						},
						blocks: o,
						styles: m(t)
					}
				}),
				b = t => {
					r()(t.blocks, t => {
						t.isEnabled = !1
					}), r()(t.styles, t => {
						t.isEnabled = !1
					}), t.link.isEnabled = !1
				}
		},
		"./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts": function(t, e, n) {
			"use strict";

			function o(t, e, n) {
				const o = e.getStartKey(),
					r = e.getEndKey();
				if (o === r) return void n(t.getBlockForKey(o), o);
				let s = !1;
				t.getBlockMap().forEach((t, e) => {
					if (e === o && (s = !0), !s || !t || !e) return;
					const i = n(t, e);
					return e !== r && i
				})
			}
			n.d(e, "a", (function() {
				return o
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/modifiers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "a", (function() {
				return a
			})), n.d(e, "d", (function() {
				return l
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts");

			function s(t, e) {
				const n = e.getStartKey();
				if (n !== e.getEndKey()) return;
				const o = t.getBlockForKey(n),
					s = e.getStartOffset(),
					i = e.getEndOffset(),
					c = s > 0 ? o.getEntityAt(s - 1) : null,
					a = o.getEntityAt(i);
				if (!c || !a || c !== a) return;
				const l = t.getEntity(a),
					d = o.getCharacterList().toSeq().skip(i).takeWhile(t => !!t && t.getEntity() === a).count(),
					[u, p] = Object(r.a)(t, o, l, i, i + d);
				return u.merge({
					blockMap: u.getBlockMap().set(o.getKey(), p)
				})
			}

			function i(t, e, n) {
				const r = s(t, e) || t;
				return o.Modifier.replaceWithFragment(r, e, n)
			}

			function c(t, e, n, r, i) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = s(t, e) || c), o.Modifier.replaceText(c, e, n, r, i)
			}

			function a(t, e, n, r, i) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = s(t, e) || c), o.Modifier.insertText(c, e, n, r, i)
			}

			function l(t, e) {
				const n = s(t, e) || t;
				return o.Modifier.splitBlock(n, e)
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/lodash/forEach.js"),
				r = n.n(o);
			e.a = (t, e) => {
				const n = t.getBlocksAsArray(),
					o = e.getKey(),
					s = e.getType();
				let i = null,
					c = null,
					a = !1;
				if (r()(n, (t, e) => {
						if (a || t.getKey() !== o || (a = !0), t.getType() === s) null === i && (i = e), c = e;
						else {
							if (a) return !1;
							i = null, c = null
						}
					}), a) return c = c || 0, {
					start: i = i || 0,
					blocks: n.slice(i, c + 1)
				}
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/styles.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return u
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "b", (function() {
				return h
			})), n.d(e, "a", (function() {
				return m
			})), n.d(e, "c", (function() {
				return g
			})), n.d(e, "d", (function() {
				return f
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");
			const d = Object(r.OrderedSet)([]),
				u = function(t, e, n, o) {
					let s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
					const l = e.getType();
					if (Object(c.q)(l) || Object(c.r)(l) || Object(c.t)(l)) return;
					if (o === c.k.BOLD && Object(a.i)(e)) return;
					const u = n ? n.getType() : null,
						p = u === i.a.SUBREDDIT_LINK || u === i.a.USER_LINK;
					return p && o !== c.k.SPOILER && o !== c.k.MONOSPACE || u === i.a.EMOTE ? void 0 : o === c.k.MONOSPACE || o === c.k.SPOILER ? s ? Object(r.OrderedSet)([o]) : d : (t.has(c.k.MONOSPACE) || t.has(c.k.SPOILER)) && s ? Object(r.OrderedSet)([o]) : !s || o !== c.k.SUPERSCRIPT && o !== c.k.SUBSCRIPT ? s ? t.add(o) : t.has(o) ? t.delete(o) : void 0 : t.delete(c.k.SUBSCRIPT).delete(c.k.SUPERSCRIPT).add(o)
				},
				p = (t, e) => {
					let n = null,
						o = !0;
					return Object(l.a)(t, e, (r, l) => {
						const d = r.getType(),
							u = Object(a.i)(r);
						if (u || (o = !1), Object(c.q)(d) || Object(c.r)(d) || Object(c.t)(d)) return !1;
						const p = e.getStartKey() === l ? e.getStartOffset() : 0,
							h = e.getEndKey() === l ? e.getEndOffset() : r.getLength(),
							m = r.getCharacterList();
						Object(s.a)(m, {
							start: p,
							end: h
						}, e => {
							const o = e.getEntity();
							if (o && t.getEntity(o).getType() === i.a.SUBREDDIT_LINK) return;
							let r = e.getStyle();
							return u && (r = r.add(c.k.BOLD)), null === n ? n = r.asMutable() : n.intersect(r), !(n && !n.size) && void 0
						})
					}), null === n ? [] : (o && n.delete(c.k.BOLD), n.toJS())
				},
				h = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection();
					let i = n.getBlockMap();
					const a = -1 === p(n, r).indexOf(t);
					Object(l.a)(n, r, (e, l) => {
						if (!e || !l) return !1;
						const d = r.getStartKey() === l ? r.getStartOffset() : 0,
							p = r.getEndKey() === l ? r.getEndOffset() : e.getLength(),
							h = e.getCharacterList(),
							m = h.withMutations(r => {
								Object(s.a)(h, {
									start: d,
									end: p
								}, (s, i, l, d) => {
									const p = s.getStyle(),
										h = s.getEntity(),
										m = h ? n.getEntity(h) : null,
										g = u(p, e, m, t, a);
									if (g) {
										const t = ((t, e) => o.CharacterMetadata.create({
											style: e,
											entity: e.has(c.k.SPOILER) ? null : t.getEntity()
										}))(s, g);
										for (let e = l; e < d; e++) r.set(e, t)
									}
								})
							});
						if (m !== h) {
							const t = e.set("characterList", m);
							i = i.set(l, t)
						}
					});
					const d = n.merge({
						blockMap: i,
						selectionAfter: r
					});
					return o.EditorState.push(e, d, "change-inline-style")
				},
				m = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection(),
						s = n.getBlockForKey(r.getStartKey()),
						i = s.getEntityAt(r.getStartOffset()),
						c = i ? n.getEntity(i) : null,
						a = e.getCurrentInlineStyle(),
						l = u(a, s, c, t, !a.has(t));
					let d = e;
					return l && (d = o.EditorState.setInlineStyleOverride(d, l)), d
				},
				g = t => o.EditorState.setInlineStyleOverride(t, d),
				f = (t, e) => {
					const n = t.getSelection(),
						o = e.getSelection();
					return n.getStartOffset() > 0 || n.getFocusKey() === o.getFocusKey() || t.getCurrentInlineStyle().isEmpty() ? t : g(t)
				}
		},
		"./src/reddit/components/RichTextEditor/index.m.less": function(t, e, n) {
			t.exports = {
				Container: "_3YZ-jFfccqhepgq1dDuLEv",
				container: "_3YZ-jFfccqhepgq1dDuLEv",
				FocusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				focusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				showSubmitButton: "_3Imp2y02BMA96sEJAe9M3M",
				mRedesign: "_2sl29I15jbNPrKiiB9kfVf",
				editorWrapper: "_2baJGEALPiEMZpWB2iWQs7",
				mExpanded: "_1UhKfcyzvaWRtDdXZmzg6D",
				userIcon: "_1wS6Q6S9RvAbzxaselfK2i",
				CurrentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				currentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				hasInitialHeight: "_35E-zXyMmfsLI7nv_sBvFL",
				hasInitialMinHeight: "_18GfdTZmF2EPjYSkBDE0WI",
				noBorder: "HXDWn-rmYOwqGcGtz9AKm",
				insetSubmitButton: "_3b2mbY1nb1R-z21ihISt7z",
				emptyContent: "_3cP1eCSI5AeGc6__VQ1axu",
				focusedContent: "_2O6bpyGivXLGxZ0LErKCzW"
			}
		},
		"./src/reddit/components/RichTextEditor/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = (n("./node_modules/draft-js/dist/Draft.css"), n("./node_modules/fbt/lib/FbtPublic.js")),
				s = n("./node_modules/lodash/debounce.js"),
				i = n.n(s),
				c = n("./node_modules/lodash/filter.js"),
				a = n.n(c),
				l = n("./node_modules/lodash/noop.js"),
				d = n.n(l),
				u = n("./node_modules/react/index.js"),
				p = n.n(u),
				h = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				g = n("./node_modules/shallowequal/index.js"),
				f = n.n(g),
				b = n("./src/lib/classNames/index.ts"),
				y = n("./src/lib/fastdom/index.ts"),
				E = n("./src/lib/lessComponent.tsx"),
				S = n("./src/lib/linkMatchers/customLinks.ts"),
				C = n("./src/lib/logs/console.ts"),
				O = n("./src/telemetry/models/Media.ts"),
				k = n("./src/realtime/GQLSubscription/async.tsx"),
				T = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				x = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				v = n("./src/reddit/featureFlags/index.ts"),
				j = n("./src/reddit/helpers/trackers/postComposer.ts"),
				R = n("./src/reddit/models/PostCreationForm/index.ts"),
				w = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const B = {
				BREAK_HEADER_ENTITY: "BREAK_HEADER_ENTITY",
				CONVERT_TO_LIST_ON_SPACE: "CONVERT_TO_LIST_ON_SPACE",
				EXEC_TABLE_ON_ENTER_HANDLER: "EXEC_TABLE_ON_ENTER_HANDLER",
				INSERT_LINE_BREAK: "INSERT_LINE_BREAK",
				LINKIFY_ON_ENTER: "LINKIFY_ON_ENTER",
				LINKIFY_ON_SPACE: "LINKIFY_ON_SPACE",
				MAKE_PLAIN_BLOCK: "MAKE_PLAIN_BLOCK",
				OPEN_LINK_TOOLTIP: "OPEN_LINK_TOOLTIP",
				REDUCE_LIST_INDENT: "REDUCE_LIST_INDENT",
				REMOVE_EXTRA_LIST_ITEM: "REMOVE_EXTRA_LIST_ITEM",
				RESET_CURRENT_AND_PREVIOUS_BLOCKS: "RESET_CURRENT_AND_PREVIOUS_BLOCKS",
				SUBMIT: "SUBMIT"
			};
			const I = t => {
					const e = t.getCurrentContent().getBlockMap();
					if (e.size > 2 || (t => !!t.reduce((function() {
							let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
								e = arguments.length > 1 ? arguments[1] : void 0;
							return t + e.getLength()
						}), 0))(e) || (t => !!t.find(t => Object(w.o)(t.getType())))(e) || t.isInCompositionMode()) return null; {
						const n = t.getSelection();
						if (n.isCollapsed() && n.getFocusKey() === e.first().getKey()) return n.getFocusKey()
					}
				},
				_ = t => {
					const e = t.getCharacterList().map(t => o.CharacterMetadata.create({
						entity: t.getEntity()
					}));
					return t.set("characterList", e)
				};
			var A = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				K = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				M = n("./node_modules/lodash/escape.js"),
				L = n.n(M),
				N = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				D = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				F = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				P = n("./node_modules/immutable/dist/immutable.js"),
				U = n("./src/reddit/helpers/dom/index.ts"),
				H = n("./node_modules/lodash/chunk.js"),
				W = n.n(H),
				z = n("./node_modules/lodash/flatten.js"),
				q = n.n(z),
				V = n("./node_modules/lodash/takeWhile.js"),
				G = n.n(V),
				Y = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				Q = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				J = n("./node_modules/lodash/last.js"),
				X = n.n(J),
				Z = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				$ = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				tt = n("./node_modules/lodash/find.js"),
				et = n.n(tt);
			var nt = (t, e) => {
				const n = t.getSelection(),
					r = t.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(Q.e)(r, s, i);
				if (!c || c !== a) return t;
				const l = Object(Q.g)(s),
					d = Object(Q.g)(i),
					{
						blocks: u,
						start: p
					} = c,
					{
						colCount: h
					} = d,
					m = u.length / h,
					{
						minCol: g,
						minRow: f,
						maxCol: b,
						maxRow: y
					} = Object(Q.f)(l, d),
					E = u.filter(t => {
						const {
							rowIndex: n,
							colIndex: o
						} = Object(Q.g)(t);
						return "rows" === e ? !(f <= n && n <= y) : !(g <= o && o <= b)
					});
				E.sort(Q.b);
				const S = "rows" === e ? h : E.length / m,
					C = q()(Object(Q.d)(W()(E, S))),
					O = r.getBlocksAsArray(),
					k = [...O.slice(0, p), ...C, ...O.slice(p + u.length)],
					T = r.merge({
						blockMap: o.BlockMapBuilder.createFromArray(k)
					}),
					x = {
						colIndex: g,
						rowIndex: f
					};
				let v = et()(C, t => Object(Q.h)(x, Object(Q.g)(t)));
				v || (v = C.length ? C[C.length - 1] : O[p > 0 ? p - 1 : 0]);
				const j = o.SelectionState.createEmpty(v.getKey()).merge({
					focusOffset: v.getLength(),
					anchorOffset: v.getLength()
				});
				let R = o.EditorState.push(t, T, Z.e);
				return R = o.EditorState.forceSelection(R, j)
			};
			var ot = function(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const n = t.getSelection();
				if (n.isCollapsed()) return;
				if (n.getStartKey() === n.getEndKey() && !e) return;
				const r = t.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(Q.e)(r, s, i);
				if (!c || c !== a) return;
				const l = {};
				let d = n;
				if (s === i) {
					const t = Object(Q.n)(i, 0, n.getStartOffset()),
						e = Object(Q.n)(i, n.getEndOffset());
					l[i.getKey()] = Object(Q.j)(i, [t, e]), d = n
				} else {
					if (c.blocks[0].getKey() === n.getStartKey() && X()(c.blocks).getKey() === n.getEndKey()) return nt(t, "rows");
					Object($.a)(r, n, (t, e) => {
						l[e] = Object(Q.n)(t, 0, 0)
					}), d = n.merge({
						anchorOffset: 0,
						focusOffset: 0
					})
				}
				const u = r.merge({
					blockMap: r.getBlockMap().merge(l),
					selectionAfter: d
				});
				return o.EditorState.push(t, u, Z.f)
			};
			const rt = (t, e, n, o) => {
					const {
						htmlParts: r
					} = e;
					t.forEach((t, s) => {
						r.push(`<${n} ${o[s]} style="margin: 0px; padding: 4px 9px; border: 1px solid rgb(229, 227, 218);">`), Ct(t, e), r.push(`</${n}>`)
					})
				},
				st = t => {
					const e = t[0],
						n = t[t.length - 1],
						o = [...t].sort(Q.b),
						{
							minCol: r,
							maxCol: s
						} = Object(Q.f)(Object(Q.g)(e), Object(Q.g)(n)),
						i = s - r + 1;
					return Object(Q.d)(W()(o, i))
				},
				it = (t, e, n) => {
					n ? Ct(t[0], e) : ((t, e) => {
						const {
							editor: n,
							htmlParts: o
						} = e, r = n.getEditorKey(), s = t[0].map(t => {
							const {
								alignment: e
							} = Object(Q.g)(t);
							return e ? `align="${Q.a[e]}"` : ""
						}), [i, ...c] = t;
						o.push(`\n    <table data-editor="${r}">\n      <thead>\n        <tr>`), rt(i, e, "th", s), o.push("\n        </tr>\n      </thead>\n      <tbody>"), c.forEach(t => {
							o.push("\n        <tr>"), rt(t, e, "td", s), o.push("\n        </tr>")
						}), o.push("\n      </tbody>\n    </table>")
					})(st(t), e)
				},
				ct = (t, e, n) => {
					n ? e.textParts.push(Tt(t[0], e)) : ((t, e) => {
						const {
							textParts: n
						} = e;
						t.forEach(t => {
							n.push(t.map(t => Tt(t, e)).join(" "))
						})
					})(st(t), e)
				},
				at = t => {
					const {
						processed: e,
						remaining: n
					} = t, o = [];
					for (; n.length;) {
						const t = n[0];
						if (!Object(w.v)(t.getType())) break;
						o.push(n.shift())
					}
					const r = !n.length && !e.length,
						s = 1 === o.length && r;
					it(o, t, s), ct(o, t, s), ((t, e, n, o) => {
						if (n)
							if (o) {
								const n = t[0].merge({
									data: Object(P.Map)(),
									type: w.n
								});
								e.blocksParts = [n]
							} else e.blocksParts = q()(st(t))
					})(o, t, r, s), e.push(...o)
				},
				lt = t => ot(t, !0),
				dt = (t, e, n) => {
					const r = Object(w.v)(n.first().getType()),
						s = Object(w.v)(n.last().getType()),
						i = t.getBlockForKey(e.getAnchorKey()),
						c = t.getBlockForKey(e.getFocusKey()),
						[a, l] = Object(Q.e)(t, i, c);
					return a && a === l ? ((t, e, n, r) => {
						const s = Object(w.v)(r.first().getType()),
							i = t.getBlockForKey(e.getAnchorKey()),
							c = t.getBlockForKey(e.getFocusKey()),
							{
								blocks: a,
								start: l
							} = n;
						a.sort(Q.b);
						const d = Object(Q.g)(a[0]);
						let {
							colCount: u
						} = d;
						const p = W()(a, u);
						let h = p.length;
						const {
							minRow: m,
							minCol: g
						} = Object(Q.f)(Object(Q.g)(i), Object(Q.g)(c)), f = r.toArray();
						if (s) {
							const n = G()(f, t => Object(w.v)(t.getType()));
							n.sort(Q.b);
							const r = Object(Q.g)(n[0]).colCount,
								s = W()(n, r),
								i = s.length,
								c = m + i - 1,
								d = g + r - 1;
							if (n.length !== i * r) throw new Error("Invalid table fragment!");
							if (d >= u && p.forEach(t => {
									t.push(...Object(Q.l)(d - u + 1, 1))
								}), u = p[0].length, c >= h) {
								const t = W()(Object(Q.l)(u, c - h + 1), u);
								p.push(...t)
							}
							h = p.length;
							for (let t = 0; t < i; t++)
								for (let e = 0; e < r; e++) {
									const n = m + t,
										o = g + e,
										r = s[t][e];
									p[n][o] = r.set("key", p[n][o].getKey())
								}
							const b = Object(Q.d)(p),
								y = q()(b),
								E = t.getBlocksAsArray(),
								S = [...E.slice(0, l), ...y, ...E.slice(l + a.length)],
								C = Object(Q.o)(e, p[m][g], p[c][d]);
							return t.merge({
								blockMap: o.BlockMapBuilder.createFromArray(S),
								selectionAfter: C
							})
						} {
							const n = p[m][g],
								r = Object(Q.j)(n, f, " ");
							let s = e;
							return e.getStartKey() !== e.getEndKey() && (s = Object(Q.o)(e, n, n)), Y.c(t, s, o.BlockMapBuilder.createFromArray([r]))
						}
					})(t, e, a, n) : a || l || !r && !s ? void 0 : ((t, e, n) => {
						const r = Object(w.v)(n.first().getType()),
							s = Object(w.v)(n.last().getType()),
							i = n.toArray();
						r && i.unshift(Object(D.h)()), s && i.push(Object(D.h)());
						const c = o.BlockMapBuilder.createFromArray(i);
						return Y.c(t, e, c)
					})(t, e, n)
				};
			var ut = n("./node_modules/draft-js/lib/removeEntitiesAtEdges.js"),
				pt = n.n(ut);
			var ht = (t, e) => {
				const n = e.getStartKey(),
					o = e.getStartOffset(),
					r = e.getEndKey(),
					s = e.getEndOffset(),
					i = pt()(t, e).getBlockMap(),
					c = i.keySeq(),
					a = c.indexOf(n),
					l = c.indexOf(r) + 1;
				return i.slice(a, l).map((t, e) => {
					const i = t.getText(),
						c = t.getCharacterList();
					return n === r ? t.merge({
						text: i.slice(o, s),
						characterList: c.slice(o, s)
					}) : e === n ? t.merge({
						text: i.slice(o),
						characterList: c.slice(o)
					}) : e === r ? t.merge({
						text: i.slice(0, s),
						characterList: c.slice(0, s)
					}) : t
				})
			};
			const mt = (t, e) => {
					const n = {
							children: [],
							parentItem: e,
							type: t.getType()
						},
						o = {
							block: t,
							parentList: n
						};
					return n.children.push(o), e && (e.childrenLists = e.childrenLists || [], e.childrenLists.push(n)), {
						list: n,
						item: o
					}
				},
				gt = (t, e) => {
					const {
						type: n,
						children: o
					} = t, {
						htmlParts: r
					} = e, s = n === w.b.ORDERED_LIST ? "ol" : "ul";
					r.push(`<${s}>`), o.forEach(t => ((t, e) => {
						const {
							block: n,
							childrenLists: o
						} = t, {
							htmlParts: r
						} = e;
						r.push("<li>"), Ct(n, e, !0), o && o.forEach(t => gt(t, e)), r.push("</li>")
					})(t, e)), r.push(`</${s}>`)
				},
				ft = (t, e) => {
					const {
						children: n
					} = t;
					n.forEach((t, n) => bt(t, n, e))
				},
				bt = (t, e, n) => {
					const {
						block: o,
						childrenLists: r
					} = t, {
						textParts: s
					} = n, i = " ".repeat(o.getDepth()), c = o.getType() === w.b.ORDERED_LIST ? `${e+1}.` : "-", a = Tt(o, n);
					s.push(`${i}${c} ${a}`), r && r.forEach(t => ft(t, n))
				},
				yt = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = n.getType(), r = [n];
					for (; e.length;) {
						const t = e[0],
							n = t.getType();
						if (!Object(w.s)(n)) break;
						if (t.getDepth() > 0 || n === w.b.UNORDERED_LIST) r.push(e.shift());
						else {
							if (n !== o) break;
							if (r.some(t => t.getType() !== w.b.ORDERED_LIST)) break;
							r.push(e.shift())
						}
					}
					const s = (t => {
						const e = t[0],
							n = {
								type: e.getType(),
								children: []
							};
						let o, r = n,
							s = e.getDepth();
						return t.forEach(t => {
							const e = t.getType(),
								n = t.getDepth();
							if (n > s) {
								const e = mt(t, o);
								r = e.list, o = e.item, s = n
							} else {
								for (; s !== n;) r = r.parentItem ? r.parentItem.parentList : r, s--;
								if (e === r.type) o = {
									block: t,
									parentList: r
								}, r.children.push(o);
								else {
									const e = mt(t, r.parentItem);
									r = e.list, o = e.item
								}
							}
						}), n
					})(r);
					gt(s, t), ft(s, t), t.processed.push(...r)
				};
			var Et = (t, e) => {
				const n = t.toArray().filter(t => !Object(w.t)(t.getType()));
				if (1 === n.length) {
					n[0].getType() !== w.n && n.push(new o.ContentBlock({
						key: Object(o.genKey)(),
						type: w.n
					}))
				}
				const r = o.ContentState.createFromBlockArray(n),
					s = JSON.stringify(Object(o.convertToRaw)(r));
				return `<div data-reddit-rtjson="${L()(s)}">${e}</div>`
			};
			const St = () => !!window.clipboardData,
				Ct = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						htmlParts: o
					} = e, r = Ot(t, e);
					r && r.forEach(t => o.push(n ? t.innerHTML : t.outerHTML))
				},
				Ot = (t, e) => {
					const {
						selection: n,
						editor: o
					} = e, r = n.getStartKey(), s = n.getEndKey(), i = t.getKey(), c = o.refs.editor, a = Object(D.d)(i, c);
					return a ? i === r || i === s ? Object(U.c)(a) : [a] : null
				};
			var kt = (t, e, n) => {
				const r = t.getCurrentContent(),
					s = t.getSelection(),
					i = Bt(t) || ht(r, s);
				if (!i || !i.count()) return;
				const c = i.toArray(),
					a = {
						editor: e,
						editorState: t,
						selection: s,
						remaining: c,
						processed: [],
						htmlParts: [],
						textParts: [],
						blocksParts: [...c]
					};
				for (; a.remaining.length;) {
					const t = a.remaining[0].getType();
					switch (!0) {
						case Object(w.t)(t):
							wt(a);
							break;
						case Object(w.s)(t):
							yt(a);
							break;
						case Object(w.v)(t):
							at(a);
							break;
						default:
							xt(a)
					}
				}
				const l = a.textParts.join("\n"),
					d = (t => Object(P.OrderedMap)(t.map(t => {
						const e = Object(o.genKey)();
						return [e, t.set("key", e)]
					})))(a.blocksParts);
				return ((t, e) => {
					let {
						html: n,
						text: o
					} = e;
					St() ? window.clipboardData.setData("text", o) : (n && t.clipboardData.setData("text/html", n), t.clipboardData.setData("text/plain", o))
				})(n, {
					html: Et(d, a.htmlParts.join("")),
					text: l
				}), n.stopPropagation(), n.preventDefault(), e.setClipboard(d), d
			};
			const Tt = (t, e) => {
					const n = t.getText(),
						o = e.editorState.getCurrentContent(),
						r = [];
					let s = -1;
					return t.getCharacterList().forEach((t, e) => {
						const i = t && t.getEntity();
						if (i && void 0 !== e) {
							const t = o.getEntity(i);
							t.getType() === F.a.EMOTE && (r.push(n.substring(s + 1, e)), r.push(`:${t.getData().id}:`), s = e)
						}
					}), r.push(n.substring(s + 1, n.length)), r.join("")
				},
				xt = t => {
					const e = t.remaining.shift();
					((t, e) => Ct(t, e))(e, t), ((t, e) => {
						e.textParts.push(Tt(t, e))
					})(e, t), t.processed.push(e)
				},
				vt = (t, e) => {
					const n = t.first(),
						r = t.last();
					let s = t;
					if (Object(w.u)(n.getType()) ? s = s.set(s.keySeq().first(), n.merge({
							type: w.n
						})) : Object(w.o)(n.getType()) && (s = o.BlockMapBuilder.createFromArray([Object(D.h)(), ...s.toArray()])), Object(w.u)(r.getType()) || !Object(N.q)(e)) {
						const t = Object(D.h)();
						s = s.set(t.getKey(), t)
					} else if (Object(w.o)(r.getType())) {
						const t = Object(D.h)().merge({
							type: w.j
						});
						s = s.set(t.getKey(), t)
					}
					return s
				},
				jt = (t, e, n) => {
					const o = t.getBlockForKey(e.getStartKey());
					if (Object(w.u)(o.getType())) {
						const o = n.first(),
							r = n.set(n.keySeq().first(), Object(D.h)(o.getKey(), o.getText()).merge({
								type: w.j
							}));
						return Y.c(t, e, r)
					}
				},
				Rt = (t, e, n) => {
					const o = ((t, e, n) => {
						const o = e ? e.getText() : "";
						return `<span data-editor="${n}">${L()(o)}</span>`
					})(0, e, n.editor.getEditorKey());
					n.htmlParts.push(o)
				},
				wt = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = e[0] && Object(w.u)(e[0].getType()) ? e.shift() : void 0;
					Rt(0, o, t), ((t, e) => {
						const n = t ? Tt(t, e) : "";
						e.textParts.push(n)
					})(o, t), t.processed.push(n), o && t.processed.push(o)
				},
				Bt = t => {
					const e = t.getSelection(),
						n = e.getFocusKey();
					if (n !== e.getAnchorKey()) return;
					const r = t.getCurrentContent(),
						s = r.getBlockForKey(n);
					if (Object(w.o)(s.getType())) {
						const t = [s],
							e = r.getBlockAfter(s.getKey());
						return e && Object(w.u)(e.getType()) && t.push(e), o.ContentState.createFromBlockArray(t).getBlockMap()
					}
				},
				It = t => {
					const e = Bt(t);
					if (e) return Object(N.d)(t, e.first().getKey())
				},
				_t = t => {
					const e = t.getSelection();
					let n = t.getCurrentContent();
					const r = n.getBlockForKey(e.getStartKey()),
						s = n.getBlockForKey(e.getEndKey());
					if (Object(w.t)(r.getType()) || Object(w.t)(s.getType())) {
						if (e.isCollapsed())
							if (Object(w.u)(r.getType())) n = Y.d(n, e), n = o.Modifier.setBlockType(n, n.getSelectionAfter(), w.n);
							else if (Object(w.o)(r.getType())) {
							let r = n.getBlockAfter(e.getStartKey());
							return r || (r = (t = Object(N.b)(t, e.getStartKey(), D.a.after)).getCurrentContent().getBlockAfter(e.getStartKey())), o.EditorState.forceSelection(t, Object(D.b)(r, !0))
						}
						return o.EditorState.push(t, n, "split-block")
					}
				},
				At = (t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent(),
						s = "up" === e ? n.getStartKey() : n.getEndKey(),
						i = r.getBlockForKey(s);
					if (!Object(w.o)(i.getType())) return;
					const c = "up" === e ? r.getBlockBefore(s) : r.getBlockAfter(s);
					return c ? o.EditorState.forceSelection(t, Object(D.b)(c, !0)) : Object(N.b)(t, s, "up" === e ? D.a.before : D.a.after)
				},
				Kt = (t, e) => {
					if (t.shiftKey) return;
					const n = At(e, "up");
					return n && t.preventDefault(), n
				},
				Mt = (t, e) => {
					if (t.shiftKey) return;
					const n = At(e, "down");
					return n && t.preventDefault(), n
				},
				Lt = (t, e) => {
					const n = t.getSelection();
					return n.isCollapsed() && 0 === n.getStartOffset() && Object(w.o)(t.getCurrentContent().getBlockForKey(n.getStartKey()).getType())
				};
			var Nt = (t, e) => {
					if (!Object(N.q)(e)) return t;
					const n = t.getSelection(),
						o = t.getCurrentContent(),
						r = o.getBlockForKey(n.getStartKey());
					if (Object(w.o)(r.getType())) {
						const e = o.getBlockAfter(r.getKey());
						if (!e || !Object(w.u)(e.getType())) return Object(N.d)(t, r.getKey(), !1)
					}
					return t
				},
				Dt = n("./src/reddit/actions/modal.ts"),
				Ft = n("./src/reddit/actions/upload.ts"),
				Pt = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Ut = t => null,
				Ht = n("./src/reddit/helpers/media/index.ts"),
				Wt = n("./src/reddit/helpers/richTextEditor/index.ts"),
				zt = n("./src/reddit/selectors/activeModalId.ts");
			const qt = "application/x-reddit-rte-block";
			var Vt = n("./src/reddit/models/Upload/index.ts"),
				Gt = n("./src/reddit/selectors/experiments/d2xShredditPlayer.ts"),
				Yt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less"),
				Qt = n.n(Yt);
			const Jt = E.a.img("Img", Qt.a);
			var Xt = E.a.wrapped(t => {
					const {
						className: e,
						url: n
					} = t;
					return p.a.createElement("div", {
						className: e
					}, p.a.createElement(Jt, {
						draggable: !1,
						src: n
					}))
				}, "Component", Qt.a),
				Zt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less"),
				$t = n.n(Zt);
			const te = E.a.div("Message", $t.a);
			var ee = E.a.wrapped(t => {
					const {
						className: e,
						isImage: n
					} = t;
					return p.a.createElement("div", {
						className: e
					}, p.a.createElement(te, null, n ? r.fbt._("Processing video...", null, {
						hk: "3g3QoU"
					}) : r.fbt._("Processing image...", null, {
						hk: "1xoNB3"
					})))
				}, "Component", $t.a),
				ne = n("./src/lib/formatApiError/index.ts"),
				oe = n("./src/reddit/components/ProgressBar/index.tsx"),
				re = n("./src/reddit/controls/Button/index.tsx"),
				se = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less"),
				ie = n.n(se);
			const ce = E.a.div("ControlRow", ie.a),
				ae = E.a.wrapped(re.t, "Button", ie.a),
				le = E.a.wrapped(re.t, "ErrButton", ie.a),
				de = E.a.div("Status", ie.a),
				ue = E.a.wrapped(oe.a, "ProgressBar", ie.a),
				pe = E.a.div("ErrorLine", ie.a),
				he = t => e => {
					e.stopPropagation(), t(e)
				};
			var me = E.a.wrapped(t => {
					const {
						upload: e
					} = t, n = he(t.onCancel), o = he(t.onRetry), s = he(t.onRemove), {
						status: i,
						progress: c
					} = e, a = c && c.percent || 0, l = i === Vt.a.FAILED || i === Vt.a.CANCELED, d = (t => {
						const {
							status: e,
							progress: n
						} = t;
						return e === Vt.a.CANCELED ? r.fbt._("Upload was canceled", null, {
							hk: "71azQ"
						}) : e === Vt.a.FAILED ? r.fbt._("Upload failed: {errorText}", [r.fbt._param("errorText", Object(ne.a)(t.error))], {
							hk: "3NGGzE"
						}) : 100 === (n && n.percent || 0) ? r.fbt._("Success!", null, {
							hk: "3622uh"
						}) : r.fbt._("Uploading: {fileName}", [r.fbt._param("fileName", t.file.name)], {
							hk: "H7qzO"
						})
					})(e);
					return p.a.createElement("div", {
						className: t.className
					}, l ? p.a.createElement(pe, null) : p.a.createElement(ue, {
						innerBarClassName: ie.a.ProgressBarInner,
						percent: a
					}), p.a.createElement(ce, null, p.a.createElement(de, {
						className: l ? ie.a.hasError : void 0,
						title: l ? d : void 0
					}, d), p.a.createElement("div", {
						className: ie.a.ButtonsContainer
					}, l ? [p.a.createElement(le, {
						kind: re.b.Button,
						priority: re.c.Plain,
						key: "remove",
						onClick: s
					}, r.fbt._("Remove", null, {
						hk: "3tYl0U"
					})), p.a.createElement(le, {
						kind: re.b.Button,
						priority: re.c.Plain,
						key: "retry",
						onClick: o
					}, r.fbt._("Retry", null, {
						hk: "3sO2HB"
					}))] : p.a.createElement(ae, {
						kind: re.b.Button,
						priority: re.c.Plain,
						disabled: 100 === a,
						onClick: n
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})))))
				}, "Component", ie.a),
				ge = n("./node_modules/react-motion/lib/react-motion.js"),
				fe = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				be = n("./src/reddit/components/Media/ShredditPlayerWrapper/index.tsx"),
				ye = n("./src/reddit/components/PlayButton/index.tsx"),
				Ee = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less"),
				Se = n.n(Ee);
			const Ce = {
					stiffness: 60,
					damping: 20
				},
				Oe = [{
					key: "video",
					style: {
						opacity: Object(ge.spring)(1, Ce)
					}
				}],
				ke = E.a.wrapped(t => {
					const {
						autoPlay: e = !1,
						className: n,
						showControls: o,
						shouldPause: r,
						style: s,
						dashUrl: i,
						hlsUrl: c,
						isShredditPlayerRemainingFeedsEnabled: a,
						otherUrl: l,
						posterUrl: d
					} = t;
					return a ? p.a.createElement("div", {
						className: n,
						style: s
					}, p.a.createElement(be.a, {
						isGif: !1,
						isListing: !1,
						posterUrl: d,
						preventAutoplay: !0,
						shouldUseInitializationOptimization: !0,
						source: c || l
					})) : p.a.createElement("div", {
						className: n,
						style: s
					}, p.a.createElement(fe.b, {
						autoPlay: e,
						shouldIgnoreAutoplayPref: !0,
						shouldLoad: !1,
						shouldPause: r,
						isGif: !1,
						hlsSource: c,
						mpegDashSource: i,
						otherSource: l,
						showSettingsIcon: !1,
						showControlBar: o,
						playerClickPlay: !1,
						hideUntilLoaded: !0
					}))
				}, "VideoPlayer", Se.a),
				Te = E.a.img("PosterImg", Se.a),
				xe = E.a.wrapped(t => {
					const {
						className: e,
						onPlayButtonClick: n,
						url: o,
						showPlayButton: r
					} = t;
					return p.a.createElement("div", {
						className: e
					}, p.a.createElement(Te, {
						draggable: !1,
						src: o
					}), r && p.a.createElement(ye.a, {
						className: Se.a.playButton,
						onClick: n
					}))
				}, "Poster", Se.a);
			class ve extends p.a.Component {
				constructor(t) {
					super(t), this.onPlayButtonClick = () => {
						this.setState({
							showVideo: !0
						})
					}, this.willEnter = () => ({
						opacity: 0
					}), this.willLeave = () => ({
						opacity: Object(ge.spring)(0, Ce)
					}), this.didLeave = () => {
						this.setState({
							showVideo: !1
						})
					}, this.state = {
						showVideo: !1
					}
				}
				renderVideo() {
					const {
						props: t
					} = this;
					return p.a.createElement("div", {
						className: t.className
					}, p.a.createElement(ke, {
						dashUrl: t.dashUrl,
						hlsUrl: t.hlsUrl,
						isShredditPlayerRemainingFeedsEnabled: t.isShredditPlayerRemainingFeedsEnabled,
						otherUrl: t.otherUrl,
						posterUrl: t.posterUrl,
						showControls: t.isUploaded && t.isSelected,
						shouldPause: !t.isSelected || void 0
					}))
				}
				render() {
					const {
						className: t,
						isSelected: e,
						posterUrl: n,
						dashUrl: o,
						hlsUrl: r,
						otherUrl: s,
						isShredditPlayerRemainingFeedsEnabled: i
					} = this.props;
					if (!n || i) return this.renderVideo();
					const {
						showVideo: c
					} = this.state, a = !!(o || r || s);
					return p.a.createElement(ge.TransitionMotion, {
						defaultStyles: [],
						styles: e && c && a ? Oe : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave,
						didLeave: this.didLeave
					}, i => p.a.createElement("div", {
						className: t
					}, i.map(t => p.a.createElement(ke, {
						key: t.key,
						autoPlay: !0,
						style: t.style,
						otherUrl: s,
						dashUrl: o,
						hlsUrl: r,
						posterUrl: n,
						showControls: !0,
						shouldPause: !e || void 0
					})), p.a.createElement(xe, {
						url: n,
						showPlayButton: !c || !e,
						onPlayButtonClick: this.onPlayButtonClick
					})))
				}
			}
			var je = E.a.wrapped(ve, "Component", Se.a),
				Re = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less"),
				we = n.n(Re);

			function Be() {
				return (Be = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Ie = t => {
					const {
						alignCenter: e,
						isSelected: n,
						onCancel: o,
						onRetry: r,
						onRemove: s,
						upload: i,
						mediaAsset: c,
						thumbnail: a,
						renderSmallMedia: l,
						...d
					} = t, u = Object(h.e)(Gt.c);
					let m = !1;
					if (i) m = "image" === Object(Ht.g)(i.metadata.mimetype);
					else {
						if (!c) return null;
						m = c.type === N.a.Image || c.type === N.a.AnimatedImage
					}
					const g = i ? i.metadata.height : c.height,
						f = !i || i.status === Vt.a.SUCCESS,
						y = m && !!g && g < 104,
						E = !g;
					return p.a.createElement("div", Be({
						className: Object(b.a)(we.a.container, {
							[we.a.alignCenter]: e,
							[we.a.isCompact]: y,
							[we.a.isUploaded]: f,
							[we.a.isSelected]: n
						})
					}, d), E ? p.a.createElement(ee, {
						className: we.a.placeholder,
						isImage: m
					}) : m ? p.a.createElement(Xt, {
						className: Object(b.a)(we.a.imagePreview, {
							[we.a.renderSmallMedia]: l
						}),
						url: i ? i.metadata.localUrl : c.imageUrl
					}) : p.a.createElement(je, {
						className: we.a.videoPreview,
						dashUrl: c ? c.dashUrl : void 0,
						hlsUrl: c ? c.hlsUrl : void 0,
						isSelected: n,
						isUploaded: f,
						otherUrl: i ? i.metadata.localUrl : void 0,
						posterUrl: a ? a.url : c.posterUrl,
						isShredditPlayerRemainingFeedsEnabled: u
					}), i && p.a.createElement(me, {
						className: we.a.statusBar,
						onCancel: o,
						onRemove: s,
						onRetry: r,
						upload: i
					}))
				},
				_e = n("./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less"),
				Ae = n.n(_e);

			function Ke() {
				return (Ke = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const Me = E.a.div("HiddenDiv", Ae.a);
			var Le = t => {
					let {
						elementRef: e,
						...n
					} = t;
					return p.a.createElement(Me, Ke({}, n, {
						innerRef: e
					}), p.a.createElement("br", null))
				},
				Ne = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				De = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				Fe = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Pe = n("./src/reddit/layout/row/Inline/index.tsx"),
				Ue = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				He = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				We = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				ze = n("./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less"),
				qe = n.n(ze);
			const Ve = E.a.wrapped(He.a, "FormatterButton", qe.a),
				Ge = Object(We.f)(Fe.b),
				Ye = Object(We.f)(De.a),
				Qe = E.a.wrapped(Pe.a, "ToolbarContent", qe.a);
			var Je = t => {
					const {
						alignCenter: e,
						block: n,
						editorState: o,
						onChange: s,
						showVideoControls: i
					} = t, c = n.getKey(), {
						makeGif: a = !1
					} = Object(N.h)(n) || {};
					return p.a.createElement("div", {
						className: Object(b.a)(qe.a.container, {
							[qe.a.alignCenter]: e
						})
					}, p.a.createElement(Qe, {
						className: Object(b.a)(qe.a.content, {
							[qe.a.multiButtonToolbarContent]: i
						})
					}, i && p.a.createElement(Ne.a, {
						isCompact: !0,
						key: "make-gif",
						on: a,
						onClick: () => s(Object(N.r)(o, c, {
							makeGif: !a
						}))
					}), i && t.showThumbnailButton && p.a.createElement(Ve, {
						Icon: Ye,
						onClick: t.onThumbnailButtonClick,
						tooltip: r.fbt._("Choose thumbnail", null, {
							hk: "2gKwDF"
						}),
						tooltipBelow: !0
					}), i && p.a.createElement(Ue.c, null), p.a.createElement(Ve, {
						Icon: Ge,
						onClick: () => s(Object(N.d)(o, c)),
						tooltip: r.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						tooltipBelow: !0
					})))
				},
				Xe = n("./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less"),
				Ze = n.n(Xe);
			const $e = t => `RTE_VIDEO_THUMBNAIL_SELECTOR_${t.getKey()}`,
				tn = Object(m.a)(t => t.uploads, (t, e) => {
					const n = Object(N.h)(e.block);
					return n && n.uploadInfo && n.uploadInfo.uploadKey
				}, (t, e) => e ? t[e] : void 0),
				en = Object(h.b)((t, e) => ({
					upload: tn(t, e),
					isThumbnailSelectorOpen: Object(zt.a)(t) === $e(e.block),
					isRteVideoPosterEnabled: v.d.rteVideoPoster(t)
				}), (t, e) => ({
					onCancelUpload: e => t(Ft.i(e, !1)),
					toggleVideoThumbnailsSelector: () => t(Object(Dt.i)($e(e.block)))
				})),
				nn = E.a.div("MediaContainer", Ze.a),
				on = E.a.div("Container", Ze.a);
			class rn extends p.a.Component {
				constructor(t) {
					super(t), this.onNativeSelectionChange = () => {
						const t = window.getSelection();
						if (0 === t.rangeCount) return;
						const e = t.getRangeAt(0),
							{
								commonAncestorContainer: n
							} = e;
						this.state.active ? this.rootContainer.contains(n) || this.setState({
							active: !1
						}) : this.rootContainer && this.rootContainer.contains(n) && this.selectBlock(), this.setState({
							isInSelection: Object(U.g)(e, this.rootContainer)
						})
					}, this.selectBlock = () => {
						const t = document.createRange();
						t.selectNodeContents(this.rootContainer);
						const e = window.getSelection();
						e.removeAllRanges(), e.addRange(t), this.setState({
							active: !0
						})
					}, this.isSelected = () => {
						const t = this.props.blockProps.getEditorState().getSelection(),
							e = this.props.block.getKey();
						return this.state.active && Object(N.n)(t, e)
					}, this.onRetryUpload = () => {
						const {
							upload: t
						} = this.props;
						t && this.props.blockProps.onRetryUpload(t.key)
					}, this.onMediaViewClickCapture = t => {
						this.state.active || this.selectBlock()
					}, this.onDragStart = t => {
						t.dataTransfer.effectAllowed = "move", t.dataTransfer.setData(qt, this.props.block.getKey())
					}, this.onRemove = () => {
						const t = this.props.blockProps.getEditorState();
						this.props.blockProps.onChange(Object(N.d)(t, this.props.block.getKey()))
					}, this.onCancelUpload = async () => {
						this.props.upload && (await this.props.onCancelUpload(this.props.upload.key), this.selectBlock())
					}, this.onToolbarStateChange = t => {
						this.props.blockProps.onChange(t)
					}, this.toggleVideoThumbnailsSelector = () => {
						this.props.toggleVideoThumbnailsSelector()
					}, this.onThumbnailSelect = t => {
						const e = this.props.blockProps.getEditorState(),
							n = this.props.block.getKey();
						let o = Object(N.r)(e, this.props.block.getKey(), {
							thumbnail: t
						});
						o = Object(N.p)(o, n), this.props.blockProps.onChange(o), this.toggleVideoThumbnailsSelector()
					}, this.state = {
						active: !1,
						isInSelection: !1
					}
				}
				shouldComponentUpdate(t, e) {
					return e.active !== this.state.active || e.isInSelection !== this.state.isInSelection || t.block !== this.props.block || t.upload !== this.props.upload || Object(N.n)(t.selection, t.block.getKey())
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange);
					const {
						selection: t
					} = this.props;
					t.getHasFocus() && Object(N.n)(t, this.props.block.getKey()) && this.selectBlock(), this.overlayContainer = Ut(!0)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(t) {
					const e = t.block.getKey(),
						n = this.props.blockProps.getEditorState(),
						o = n;
					n !== o && this.props.blockProps.onChange(o), !this.state.active && t.selection !== this.props.selection && t.selection.getHasFocus() && Object(N.n)(t.selection, e) && this.selectBlock()
				}
				getToolbarOffset() {
					if (!this.props.blockProps.rteFocusableContentRef || !this.rootContainer) return 0;
					const {
						top: t
					} = this.rootContainer.getBoundingClientRect(), {
						top: e
					} = this.props.blockProps.rteFocusableContentRef.getBoundingClientRect();
					return t - e - 30 - 10
				}
				render() {
					const {
						block: t,
						blockProps: e,
						isRteVideoPosterEnabled: n,
						offsetKey: o,
						upload: r
					} = this.props, s = Object(N.h)(t), i = s ? s.thumbnail : void 0, c = !!r && Object(Ht.n)(r.metadata.mimetype || ""), {
						active: a,
						isInSelection: l
					} = this.state, d = e.editorType === Wt.a.Comment;
					return p.a.createElement(on, {
						innerRef: t => this.rootContainer = t
					}, a && p.a.createElement(Je, {
						block: t,
						editorState: e.getEditorState(),
						onChange: this.onToolbarStateChange,
						onThumbnailButtonClick: this.toggleVideoThumbnailsSelector,
						showThumbnailButton: n,
						showVideoControls: c,
						alignCenter: !d
					}), p.a.createElement(Le, null), p.a.createElement("div", {
						contentEditable: !1,
						"data-offset-key": o
					}, p.a.createElement(nn, {
						draggable: !0,
						onDragStart: this.onDragStart,
						innerRef: t => this.mediaContainer = t
					}, p.a.createElement(Ie, {
						isSelected: l || a,
						thumbnail: i,
						onCancel: this.onCancelUpload,
						onClickCapture: this.onMediaViewClickCapture,
						onRetry: this.onRetryUpload,
						onRemove: this.onRemove,
						upload: r,
						mediaAsset: s.mediaAsset,
						alignCenter: !d,
						renderSmallMedia: d
					})), r && c && p.a.createElement(Pt.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleVideoThumbnailsSelector,
						videoSource: r.metadata.localUrl,
						videoDuration: r.metadata.videoDuration,
						selected: i,
						isOpen: this.props.isThumbnailSelectorOpen
					})), p.a.createElement(Le, null))
				}
			}
			var sn = en(rn),
				cn = n("./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less"),
				an = n.n(cn);
			class ln extends p.a.PureComponent {
				constructor(t) {
					super(t);
					const {
						contentState: e,
						block: n
					} = Object(D.e)(t.children[0]).props;
					this.mediaBlockKey = e.getBlockBefore(n.getKey()).getKey()
				}
				render() {
					const t = this.props.children[0],
						e = Object(D.e)(t),
						{
							block: n,
							contentState: o
						} = e.props,
						s = o.getBlockForKey(this.mediaBlockKey),
						i = Object(N.h)(s);
					if (!i || !(i.mediaAsset || i.uploadInfo && i.uploadInfo.mediaType)) return null;
					const c = !n.getLength();
					return p.a.createElement("div", {
						className: an.a.wrapper,
						style: {
							"--media-caption-placeholder-text": c ? `'${r.fbt._("Add caption",null,{hk:"3zI8El"})}'` : ""
						}
					}, t)
				}
			}
			const dn = Object(P.Map)({
				[w.j]: {
					element: "div",
					wrapper: p.a.createElement(ln, null)
				}
			});
			var un = (t, e, n) => {
					const r = t.getSelection(),
						s = t.getCurrentContent(),
						i = s.getBlockForKey(r.getAnchorKey()),
						c = s.getBlockForKey(r.getFocusKey()),
						[a, l] = Object(Q.e)(s, i, c);
					if (!a || a !== l) return t;
					const {
						blocks: d,
						start: u
					} = a, p = Object(Q.g)(i), h = Object(Q.g)(c), {
						colCount: m
					} = h;
					d.sort(Q.b);
					const g = W()(d, m),
						{
							minCol: f,
							minRow: b,
							maxCol: y,
							maxRow: E
						} = Object(Q.f)(p, h),
						S = {
							rowIndex: 0,
							colIndex: 0
						};
					if ("rows" === e) {
						const t = "before" === n ? b : E + 1,
							e = W()(Object(Q.l)(m, E - b + 1), m);
						g.splice(t, 0, ...e), S.rowIndex = t
					} else {
						const t = "before" === n ? f : y + 1;
						g.forEach(e => {
							e.splice(t, 0, ...Object(Q.l)(y - f + 1, 1))
						}), S.colIndex = t
					}
					const C = Object(Q.d)(g),
						O = s.getBlocksAsArray(),
						k = q()(C),
						T = [...O.slice(0, u), ...k, ...O.slice(u + d.length)],
						x = s.merge({
							blockMap: o.BlockMapBuilder.createFromArray(T)
						}),
						v = et()(k, t => Object(Q.h)(S, Object(Q.g)(t))),
						j = Object(Q.o)(r, v, v);
					let R = o.EditorState.push(t, x, Z.e);
					return R = o.EditorState.forceSelection(R, j)
				},
				pn = n("./node_modules/lodash/clamp.js"),
				hn = n.n(pn),
				mn = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts");
			var gn = function(t, e) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "preserve";
				const r = t.getSelection(),
					s = t.getCurrentContent(),
					i = "up" === e || "left" === e ? r.getStartKey() : r.getEndKey(),
					c = s.getBlockForKey(i);
				if (!Object(w.v)(c.getType())) return;
				const a = Object(Q.g)(c),
					{
						colCount: l,
						colIndex: d,
						rowIndex: u
					} = a,
					p = s.getBlocksAsArray(),
					h = Object(mn.a)(s, c);
				if (!h) return;
				let m = u,
					g = d;
				switch (e) {
					case "up":
						m--;
						break;
					case "down":
						m++;
						break;
					case "left":
						--g < 0 && (m--, g = l - 1);
						break;
					case "right":
						++g >= l && (m++, g = 0)
				}
				const f = {
					rowIndex: m,
					colIndex: g
				};
				let b = i;
				const y = et()(h.blocks, t => Object(Q.h)(Object(Q.g)(t), f));
				if (y) b = y.getKey();
				else {
					const t = Object(Q.c)(f, a) < 0 ? h.start - 1 : h.start + h.blocks.length;
					0 <= t && t < p.length && (b = p[t].getKey())
				}
				const E = s.getBlockForKey(b);
				let S = 0;
				"preserve" === n ? S = hn()(r.getFocusOffset(), 0, E.getLength()) : "end" === n && (S = E.getLength());
				const C = r.merge({
					anchorKey: b,
					focusKey: b,
					focusOffset: S,
					anchorOffset: S
				});
				return r !== C ? o.EditorState.forceSelection(t, C) : void 0
			};
			const fn = (t, e) => {
					const n = e.getCurrentContent(),
						o = e.getSelection(),
						r = n.getBlockForKey(o.getFocusKey()),
						[s] = Object(Q.e)(n, r, r);
					if (!s) return;
					const i = Object(Q.g)(r);
					let c;
					return (c = i.colIndex === i.colCount - 1 && i.rowIndex === s.blocks.length / i.colCount - 1 && !t.shiftKey && o.getFocusKey() === o.getAnchorKey() ? un(e, "rows", "after") : gn(e, t.shiftKey ? "left" : "right", "end")) ? (t.preventDefault(), c) : void 0
				},
				bn = (t, e) => {
					if (t.shiftKey) return;
					const n = gn(e, "up");
					return n && t.preventDefault(), n
				},
				yn = (t, e) => {
					if (t.shiftKey) return;
					const n = gn(e, "down");
					return n && t.preventDefault(), n
				};
			class En {
				constructor() {
					this.lastRowInsertionState = null
				}
				undoRowInsertion(t) {
					const e = o.EditorState.undo(t);
					return gn(e, "down", "end") || e
				}
				isSelectionInLastRow(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = e.getBlockForKey(n.getFocusKey()),
						[r] = Object(Q.e)(e, o, o);
					if (!r) return !1;
					const s = Object(Q.g)(r.blocks[0]).colCount,
						i = r.blocks.length / s;
					return Object(Q.g)(o).rowIndex === i - 1
				}
				insertNewRow(t) {
					const e = t.getSelection();
					let n = un(t, "rows", "after");
					return n = o.EditorState.forceSelection(n, e), n = gn(n, "down") || n, this.lastRowInsertionState = n, n
				}
				handle(t) {
					return t.getSelection().isCollapsed() ? t === this.lastRowInsertionState ? this.undoRowInsertion(t) : this.isSelectionInLastRow(t) ? this.insertNewRow(t) : gn(t, "down") || t : t
				}
			}
			const Sn = (t, e) => {
				const n = t.getSelection();
				if (n.isCollapsed() || n.getStartKey() === n.getEndKey()) return;
				const r = t.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(Q.e)(r, s, i);
				if (c && c === a) {
					const s = Object(Q.o)(n, i, i, !1),
						c = Y.b(r, s, e);
					return o.EditorState.push(t, c, Z.d)
				}
			};
			var Cn = n("./node_modules/lodash/forEach.js"),
				On = n.n(Cn);
			const kn = (t, e) => e ? t[0] : t[t.length - 1];
			var Tn = (t, e) => {
					return t.getSelection().isCollapsed() ? ((t, e) => {
						const n = t.getSelection(),
							r = e.getSelection();
						if (!n.isCollapsed() || r.isCollapsed() || 0 !== r.getStartOffset() || r.getStartKey() !== n.getStartKey()) return t;
						const s = t.getCurrentContent(),
							i = e.getCurrentContent(),
							c = s.getBlockForKey(n.getAnchorKey());
						if (!Object(w.v)(c.getType())) return t;
						const {
							rowIndex: a,
							colIndex: l
						} = Object(Q.g)(c);
						if (0 !== a || 0 !== l) return t;
						const d = s.getBlockMap(),
							u = i.getBlockMap();
						if (d.size >= u.size) return t;
						const p = s.getBlockAfter(n.getAnchorKey()),
							h = i.getBlockAfter(r.getEndKey());
						if (p && p !== h) return t;
						const m = c.merge({
								type: w.n,
								data: Object(P.Map)({})
							}),
							g = s.merge({
								blockMap: d.set(c.getKey(), m)
							});
						return o.EditorState.set(t, {
							currentContent: g
						})
					})(t, e) : ((t, e) => {
						const n = t.getSelection();
						if (n.isCollapsed()) return t;
						if (e.getSelection() === n) return t;
						if (n.getFocusKey() === n.getAnchorKey()) return t;
						const r = t.getCurrentContent(),
							s = r.getBlockForKey(n.getAnchorKey()),
							i = r.getBlockForKey(n.getFocusKey()),
							[c, a] = Object(Q.e)(r, s, i);
						if (!c && !a) return t;
						let l = t;
						if (c !== a) {
							const e = n.getIsBackward(),
								r = Object(Q.o)(n, c ? kn(c.blocks, !e) : null, a ? kn(a.blocks, e) : null, e);
							n !== r && (l = o.EditorState.forceSelection(t, r))
						} else if (c && a && c === a) {
							const e = Object(Q.g)(s),
								c = Object(Q.g)(i),
								d = r.getBlocksAsArray(),
								{
									start: u,
									blocks: p
								} = a,
								h = p[0],
								m = Object(Q.g)(h);
							if (0 !== m.colIndex || 0 !== m.rowIndex) throw new Error("First table block must always has [0, 0] coordinate!");
							const g = Object(Q.b)(i, s) < 0,
								f = Object(Q.k)(e, c),
								b = [],
								y = [];
							On()(p, t => {
								const e = Object(Q.g)(t);
								f(e.rowIndex, e.colIndex) ? b.push(t) : t !== h && y.push(t)
							});
							const E = b[0] === h;
							b.sort(Q.b);
							const S = [...d.slice(0, u), ...E ? [] : [h], ...b, ...y, ...d.slice(u + p.length)],
								C = kn(b, !g),
								O = kn(b, g),
								k = Object(Q.o)(n, C, O, g),
								T = r.merge({
									blockMap: o.BlockMapBuilder.createFromArray(S),
									selectionAfter: k
								});
							l = o.EditorState.set(t, {
								currentContent: T
							}), k !== n && (l = o.EditorState.forceSelection(l, k))
						}
						return l
					})(t, e)
				},
				xn = n("./src/reddit/components/RichTextEditor/table/Renderer/index.m.less"),
				vn = n.n(xn);
			const jn = E.a.div("Cell", vn.a),
				Rn = E.a.div("Row", vn.a),
				wn = E.a.div("Table", vn.a),
				Bn = (t, e) => {
					if (!e || !t.contains(e)) return;
					let n = e;
					for (; n && n !== t;) {
						if (n instanceof HTMLElement && n.hasAttribute("data-row")) return n;
						n.parentElement && (n = n.parentElement)
					}
				},
				In = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
						n = t,
						o = e;
					for (; n && o > 0;) {
						if (n instanceof HTMLElement && n.dataset.table) return n;
						n.parentElement && (n = n.parentElement), o--
					}
				},
				_n = t => {
					const {
						dataset: e
					} = t;
					if ("string" == typeof e.row && "string" == typeof e.col) return {
						rowIndex: +e.row,
						colIndex: +e.col
					}
				},
				An = t => {
					const e = window.getSelection(),
						{
							focusNode: n,
							anchorNode: o,
							rangeCount: r
						} = e;
					if (n !== o && r && t) {
						const n = e.getRangeAt(0);
						return Object(U.g)(n, t) && !t.contains(n.commonAncestorContainer)
					}
					return !1
				},
				Kn = t => {
					const e = p.a.Children.toArray(t),
						n = Object(D.e)(e[0]),
						{
							selection: o,
							contentState: r,
							block: s
						} = n.props,
						{
							colCount: i
						} = Object(Q.g)(s);
					e.sort((t, e) => Object(Q.b)(Object(D.c)(t), Object(D.c)(e)));
					const c = W()(e, i);
					let a, l, d = !1;
					if (o.getAnchorKey() !== o.getFocusKey()) {
						const t = r.getBlocksAsArray(),
							n = r.getBlockForKey(o.getStartKey()),
							i = r.getBlockForKey(o.getEndKey()),
							c = t.indexOf(n),
							u = t.indexOf(i),
							p = t.indexOf(s),
							h = p + e.length - 1;
						c < p && p < u || c < h && h < u ? d = !0 : p <= c && u <= h && (l = Object(Q.g)(o.getIsBackward() ? i : n), a = Object(Q.g)(o.getIsBackward() ? n : i))
					}
					return {
						rows: c,
						anchorCell: l,
						focusCell: a,
						isSelectWholeTable: d
					}
				};
			class Mn extends p.a.Component {
				constructor(t) {
					super(t), this.tableElem = null, this.onMouseDown = t => {
						if (!this.tableElem || t.nativeEvent.detail < 2) return;
						const e = window.getSelection(),
							n = e.rangeCount ? e.getRangeAt(0) : null,
							o = Bn(this.tableElem, e.focusNode);
						if (n && o)
							if (2 === t.nativeEvent.detail && e.isCollapsed) {
								const r = n.cloneRange();
								r.setEndAfter(o), r.toString() || (t.preventDefault(), e.selectAllChildren(o))
							} else t.nativeEvent.detail >= 3 && (e.selectAllChildren(o), t.preventDefault())
					}, this.onNativeSelectionChange = () => {
						const t = this.tableElem;
						if (!t) return;
						const e = window.getSelection();
						if (e.anchorNode === e.focusNode) return void this.resetSelection();
						const n = Bn(t, e.anchorNode),
							o = Bn(t, e.focusNode);
						n && n === o ? this.resetSelection() : n && o ? this.setCellsRange(n, o) : n || o ? this.selectWholeTable() : An(t) ? this.selectWholeTable() : this.resetSelection()
					}, this.resetSelection = () => {
						(this.state.anchorCell || this.state.focusCell || this.state.isSelectWholeTable) && this.setState({
							isSelectWholeTable: !1,
							focusCell: void 0,
							anchorCell: void 0
						})
					}, this.setCellsRange = (t, e) => {
						const n = _n(e),
							o = _n(t);
						Object(Q.h)(n, this.state.focusCell) && Object(Q.h)(o, this.state.anchorCell) && !this.state.isSelectWholeTable || this.setState({
							focusCell: n,
							anchorCell: o,
							isSelectWholeTable: !1
						})
					}, this.selectWholeTable = () => {
						!this.state.focusCell && this.state.isSelectWholeTable || this.setState({
							focusCell: void 0,
							isSelectWholeTable: !0
						})
					}, this.state = Kn(t.children)
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				UNSAFE_componentWillReceiveProps(t) {
					t.children !== this.props.children && this.setState(Kn(t.children))
				}
				render() {
					const {
						rows: t,
						anchorCell: e,
						focusCell: n,
						isSelectWholeTable: o
					} = this.state;
					let r;
					o ? r = (t, e) => !0 : e && n && !Object(Q.h)(e, n) && (r = Object(Q.k)(e, n));
					const s = t[0].map(t => Object(Q.g)(Object(D.e)(t).props.block).alignment),
						i = t.map((t, e) => p.a.createElement(Rn, {
							key: e
						}, t.map((t, n) => p.a.createElement(jn, {
							"data-row": e,
							"data-col": n,
							"data-selected": !!r && r(e, n),
							key: n,
							style: {
								"--cell-text-alignment": s[n] ? Q.a[s[n]] : void 0
							}
						}, t))));
					return p.a.createElement(wn, {
						className: r ? vn.a.isFakeSelectionActive : void 0,
						innerRef: t => this.tableElem = t,
						onMouseDown: this.onMouseDown,
						"data-table": !0
					}, i)
				}
			}
			const Ln = Object(P.Map)({
				[w.l]: {
					element: "div",
					wrapper: p.a.createElement(Mn, null)
				}
			});
			var Nn = n("./node_modules/lodash/isEqual.js"),
				Dn = n.n(Nn),
				Fn = n("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				Pn = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx"),
				Un = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx"),
				Hn = n("./src/reddit/icons/svgs/FormattingAlignRight/index.tsx"),
				Wn = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx"),
				zn = n("./src/reddit/icons/svgs/FormattingInsertRow/index.tsx"),
				qn = n("./src/reddit/models/RichTextJson/index.ts");
			var Vn = function(t) {
				arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const e = t.getSelection(),
					n = t.getCurrentContent(),
					r = n.getBlockForKey(e.getAnchorKey()),
					s = n.getBlockForKey(e.getFocusKey()),
					[i, c] = Object(Q.e)(n, r, s);
				if (i && i === c) {
					const {
						blocks: n
					} = i;
					n.sort(Q.b);
					const r = Object(Q.o)(e, n[0], X()(n));
					return nt(o.EditorState.set(t, {
						selection: r
					}), "rows")
				}
			};
			var Gn = (t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent(),
						s = r.getBlockForKey(n.getAnchorKey()),
						i = r.getBlockForKey(n.getFocusKey()),
						[c, a] = Object(Q.e)(r, s, i);
					if (!c || c !== a) return t;
					const l = Object(Q.g)(s),
						d = Object(Q.g)(i),
						{
							minCol: u,
							maxCol: p
						} = Object(Q.f)(l, d),
						h = c.blocks.map(t => {
							const {
								colIndex: n
							} = Object(Q.g)(t);
							return u <= n && n <= p ? Object(Q.m)(t, {
								alignment: e
							}) : t
						}),
						m = r.getBlockMap(),
						g = r.merge({
							blockMap: m.merge(o.BlockMapBuilder.createFromArray(h)),
							selectionAfter: n,
							selectionBefore: n
						});
					return o.EditorState.push(t, g, Z.b)
				},
				Yn = n("./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less"),
				Qn = n.n(Yn);

			function Jn() {
				return (Jn = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const Xn = (t, e) => n => p.a.createElement(t, Jn({}, e, n)),
				Zn = Object(We.f)(zn.a),
				$n = Xn(Zn, {
					orientation: "up"
				}),
				to = Xn(Zn, {
					orientation: "right"
				}),
				eo = Xn(Zn, {
					orientation: "left"
				}),
				no = Object(We.f)(Wn.a),
				oo = Xn(no, {
					orientation: "vertical"
				}),
				ro = Object(We.f)(Pn.a),
				so = Object(We.f)(Un.a),
				io = Object(We.f)(Hn.a),
				co = Object(We.f)(Fe.b),
				ao = E.a.wrapped(Pe.a, "ToolbarContent", Qn.a),
				lo = t => p.a.createElement(He.a, Jn({}, t, {
					className: Object(b.a)(Qn.a.formatterButton, t.className),
					tooltipContentClass: Qn.a.tooltip
				}));
			var uo = t => {
					const {
						editorState: e,
						onChange: n
					} = t;
					return p.a.createElement(ao, null, p.a.createElement(lo, {
						Icon: so,
						onClick: () => n(Gn(e, qn.e)),
						tooltip: r.fbt._("Left align", null, {
							hk: "45eAc"
						})
					}), p.a.createElement(lo, {
						Icon: ro,
						onClick: () => n(Gn(e, qn.d)),
						tooltip: r.fbt._("Center align", null, {
							hk: "4aAfyf"
						})
					}), p.a.createElement(lo, {
						Icon: io,
						onClick: () => n(Gn(e, qn.f)),
						tooltip: r.fbt._("Right align", null, {
							hk: "3oHuXw"
						})
					}), p.a.createElement(Ue.c, null), p.a.createElement(lo, {
						Icon: eo,
						onClick: () => n(un(e, "columns", "before")),
						tooltip: r.fbt._("Insert column before", null, {
							hk: "11EB6Q"
						})
					}), p.a.createElement(lo, {
						Icon: to,
						onClick: () => n(un(e, "columns", "after")),
						tooltip: r.fbt._("Insert column after", null, {
							hk: "Ddlpl"
						})
					}), p.a.createElement(lo, {
						Icon: oo,
						onClick: () => n(nt(e, "columns")),
						tooltip: r.fbt._("Delete column", null, {
							hk: "3HaQQD"
						})
					}), p.a.createElement(Ue.c, null), p.a.createElement(lo, {
						Icon: $n,
						onClick: () => n(un(e, "rows", "before")),
						tooltip: r.fbt._("Insert row above", null, {
							hk: "1HIgn"
						})
					}), p.a.createElement(lo, {
						Icon: Zn,
						onClick: () => n(un(e, "rows", "after")),
						tooltip: r.fbt._("Insert row below", null, {
							hk: "3t7ZU"
						})
					}), p.a.createElement(lo, {
						Icon: no,
						onClick: () => n(nt(e, "rows")),
						tooltip: r.fbt._("Delete row", null, {
							hk: "3yJYqS"
						})
					}), p.a.createElement(Ue.c, null), p.a.createElement(lo, {
						Icon: co,
						onClick: () => n(Vn(e) || e),
						tooltip: r.fbt._("Delete table", null, {
							hk: "1fK0KA"
						})
					}))
				},
				po = n("./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less"),
				ho = n.n(po);
			const mo = 20,
				go = E.a.div("ActionButton", ho.a),
				fo = E.a.div("ToolbarWrapper", ho.a),
				bo = t => {
					const e = {};
					if (!t || !document.documentElement) return e;
					const n = t.left - 185,
						o = t.left + 185 - document.documentElement.clientWidth;
					return n < 0 ? e.left = -n + mo + 2 : o > 0 && (e.left = -o + mo - 2), e
				},
				yo = t => {
					t.preventDefault(), t.stopPropagation()
				};
			class Eo extends u.Component {
				constructor(t) {
					super(t), this.containerElem = null, this.setContainerRef = t => this.containerElem = t, this.onResize = t => {
						this.hideToolbar(), this.state.tooltipPosition && this.updateForCurrentSelection()
					}, this.onDocumentClick = t => {
						this.state.isToolbarActive && this.containerElem && (this.containerElem.contains(t.target) || this.hideToolbar())
					}, this.onNativeSelectionChange = () => {
						this.updateForCurrentSelection()
					}, this.updateForCurrentSelection = () => {
						const t = window.getSelection();
						if (!t.rangeCount) return void this.hideActionButton();
						const e = t.getRangeAt(0).commonAncestorContainer,
							{
								rteDomRef: n
							} = this.props;
						if (!n.contains(e)) return void this.hideActionButton();
						const o = In(e);
						if (!o) return void this.hideActionButton();
						const r = Bn(o, t.anchorNode);
						if (!r) return void this.hideActionButton();
						const s = Bn(o, t.focusNode);
						s ? this.updateActionButtonPosition(r, s) : this.hideActionButton()
					}, this.updateActionButtonPosition = (t, e) => {
						const n = t.getBoundingClientRect(),
							o = e.getBoundingClientRect(),
							r = {
								top: Math.min(n.top, o.top),
								left: Math.max(n.right, o.right) - mo
							};
						Dn()(this.state.tooltipPosition, r) || this.setState({
							tooltipPosition: r
						}), this.hideToolbar()
					}, this.hideActionButton = () => {
						this.hideToolbar(), this.state.tooltipPosition && this.setState({
							tooltipPosition: null
						})
					}, this.hideToolbar = () => {
						this.state.isToolbarActive && this.setState({
							isToolbarActive: !1
						})
					}, this.onActionButtonClick = t => {
						this.setState(t => ({
							isToolbarActive: !t.isToolbarActive
						})), yo(t)
					}, this.state = {
						isToolbarActive: !1,
						tooltipPosition: null
					}, this.api = {
						hideActionButton: this.hideActionButton
					}
				}
				componentDidMount() {
					const {
						onSetApi: t
					} = this.props;
					document.addEventListener("selectionchange", this.onNativeSelectionChange), document.addEventListener("click", this.onDocumentClick), window.addEventListener("resize", this.onResize), t && t(this.api)
				}
				componentWillUnmount() {
					const {
						onSetApi: t
					} = this.props;
					document.removeEventListener("selectionchange", this.onNativeSelectionChange), document.removeEventListener("click", this.onDocumentClick), window.removeEventListener("resize", this.onResize), t && t(null)
				}
				UNSAFE_componentWillReceiveProps(t) {
					const e = t.editorState.getSelection(),
						n = this.props.editorState.getSelection();
					e.getHasFocus() && Object(w.v)(o.RichUtils.getCurrentBlockType(t.editorState)) ? e !== n && this.hideToolbar() : this.hideActionButton()
				}
				render() {
					const t = !this.props.readOnly && this.state.isToolbarActive,
						{
							tooltipPosition: e
						} = this.state;
					return p.a.createElement("div", {
						ref: this.setContainerRef
					}, p.a.createElement(Fn.b, {
						targetPosition: e
					}, p.a.createElement(go, {
						className: t ? ho.a.isPressed : void 0,
						onClick: this.onActionButtonClick,
						onMouseDown: yo,
						onMouseMove: yo
					}, t ? p.a.createElement(fo, {
						style: bo(e)
					}, p.a.createElement(uo, {
						onChange: this.props.onChange,
						editorState: this.props.editorState
					})) : null)))
				}
			}
			var So = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts");
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function Co() {
				return (Co = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}

			function Oo() {
				return new Map
			}
			const ko = p.a.createContext(Oo());

			function To(t) {
				class e extends p.a.Component {
					constructor() {
						super(...arguments), this.elementRef = null, this.updateElementRef = t => {
							const {
								registry: e
							} = this.props;
							this.elementRef = t, t ? e.set(this.props.entityKey, t) : e.delete(this.props.entityKey)
						}
					}
					componentWillReceiveProps(t) {
						const {
							registry: e
						} = this.props;
						this.props.entityKey !== t.entityKey && this.elementRef && (e.get(this.props.entityKey) === this.elementRef && e.delete(this.props.entityKey), e.set(t.entityKey, this.elementRef))
					}
					render() {
						return p.a.createElement("span", {
							ref: this.updateElementRef
						}, p.a.createElement(t, this.props))
					}
				}
				return t => p.a.createElement(ko.Consumer, null, n => p.a.createElement(e, Co({}, t, {
					registry: n
				})))
			}
			var xo = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				vo = n("./src/reddit/components/RichTextEditor/emotes/decorator.m.less"),
				jo = n.n(vo);
			const Ro = {
					strategy: xo.e,
					component: To(t => {
						const {
							contentState: e
						} = t, n = Object(xo.i)(e), o = e.getEntity(t.entityKey), {
							id: r,
							emoji: s,
							sticker: i
						} = o.getData(), c = n ? i : s;
						return p.a.createElement("span", {
							className: Object(b.a)(jo.a.emote, {
								[jo.a.sticker]: n
							}),
							title: `:${r}:`,
							style: {
								backgroundImage: `url(${c.path})`,
								width: c.x
							}
						}, t.children)
					})
				},
				wo = () => Ro;
			var Bo = n("./src/reddit/selectors/gold/enabledFeatures.ts"),
				Io = n("./src/reddit/selectors/gold/powerups/index.ts"),
				_o = n("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts"),
				Ao = n("./src/higherOrderComponents/makeAsync.tsx"),
				Ko = Object(Ao.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("SpecialMembershipsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.tsx")).then(t => t.default)
				});
			var Mo = t => {
				const {
					subreddit: e
				} = t, n = e.id, o = Object(h.e)(t => Object(Bo.b)(t, {
					subredditId: n
				}));
				return Object(h.e)(t => Object(Io.a)(t, {
					subredditId: n
				})) ? p.a.createElement(_o.a, t) : p.a.createElement(p.a.Fragment, null, o && p.a.createElement(Ko, t))
			};
			const Lo = new Set([F.a.LINK]);
			var No = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				Do = n("./src/reddit/components/RichTextEditor/entity/link/decorator.m.less"),
				Fo = n.n(Do);
			const Po = E.a.a("RegularLink", Fo.a),
				Uo = {
					strategy: No.a,
					component: To(t => {
						const e = t.contentState.getEntity(t.entityKey),
							{
								url: n
							} = e.getData();
						return p.a.createElement(Po, {
							href: n
						}, t.children)
					})
				},
				Ho = () => Uo;
			var Wo = n("./src/lib/linkMatchers/index.ts");
			const zo = (t, e) => {
					if (e.getType() === w.f) return [];
					return (t.match(e.getText()) || []).filter(t => ((t, e) => {
						let {
							index: n,
							lastIndex: o
						} = e;
						for (let r = n; r < o; r++) {
							if (t.getInlineStyleAt(r).contains(w.k.MONOSPACE)) return !1
						}
						return !0
					})(e, t))
				},
				qo = (t, e, n, r, s, i) => {
					const c = t.getBlockForKey(e),
						a = o.SelectionState.createEmpty(e),
						l = [],
						d = new Set;
					let u = t;
					const p = n === F.a.USER_MENTION ? F.a.USER_LINK : n,
						h = (t, e, o) => {
							let r = null;
							for (let s = t; s < e; s++) {
								const t = c.getEntityAt(s),
									e = t && u.getEntity(t);
								if (e) {
									if (e.getType() !== n) return;
									r || d.has(t) || (r = t)
								}
							}
							if (r) {
								u.getEntity(r).getData().url !== o && (u = u.mergeEntityData(r, {
									url: o
								}))
							}
							return r || (t => (u = u.createEntity(p, "MUTABLE", {
								url: t
							})).getLastCreatedEntityKey())(o)
						},
						m = (t, e, n) => {
							const r = a.merge({
								anchorOffset: t,
								focusOffset: e
							});
							u = o.Modifier.applyEntity(u, r, n)
						},
						g = (t, e) => m(t, e, null),
						f = u.getBlockForKey(e);
					zo(r, f).forEach((t, r) => {
						let {
							index: c,
							lastIndex: p,
							url: g
						} = t;
						const f = h(c, p, g);
						f && (n === F.a.USER_MENTION ? (((t, n, r) => {
							const c = u && u.getBlockForKey(e),
								l = c && c.getText().substr(t, n);
							if (l && l.replace(S.d.mention, "") && l.startsWith(S.d.mention) && S.c.test(l.replace(S.d.mention, ""))) {
								const e = a.merge({
										anchorOffset: t,
										focusOffset: t + S.d.mention.length
									}),
									c = a.merge({
										anchorOffset: t,
										focusOffset: n + S.d.mention.length
									}),
									l = a.merge({
										anchorOffset: n + S.d.mention.length,
										focusOffset: n + S.d.mention.length
									});
								u = Object(Y.b)(u, e, S.d.profile), u = o.Modifier.applyEntity(u, c, r), s && i && i(o.EditorState.forceSelection(s, l))
							}
						})(c + r, p + r, f), l.push([c + r, p + r + 1])) : (m(c, p, f), l.push([c, p])), d.add(f))
					});
					let b = 0;
					return f.findEntityRanges(t => {
						const e = t.getEntity();
						return !!e && u.getEntity(e).getType() === n
					}, (t, e) => {
						if (b >= l.length) return void g(t, e);
						const [n, o] = l[b];
						e <= n ? g(t, e) : (t < n && g(t, n - 1), e > o && g(o, e), b++)
					}), u
				},
				Vo = (t, e) => {
					const n = t.getCurrentContent(),
						r = e.getCurrentContent();
					if (n === r) return t;
					const s = n.getBlockMap(),
						i = r.getBlockMap();
					let c = n;
					return s.forEach((e, n) => {
						if (n) {
							if (e === i.get(n)) return;
							c = qo(c, n, F.a.SUBREDDIT_LINK, Wo.g), c = qo(c, n, F.a.USER_LINK, Wo.j), c = qo(c, n, F.a.USER_MENTION, Wo.e, t, e => t = e)
						}
					}), t.getCurrentContent() === c ? t : (c = c.merge({
						selectionAfter: t.getCurrentContent().getSelectionAfter(),
						selectionBefore: t.getCurrentContent().getSelectionBefore()
					}), o.EditorState.set(t, {
						currentContent: c
					}))
				};
			var Go = t => {
				const e = t.getCurrentContent();
				return e.getBlockMap().some(t => {
					if ((null == t ? void 0 : t.getType()) === w.a) return !0;
					let n = !1;
					return null == t || t.findEntityRanges(t => {
						const n = t.getEntity();
						return !!n && e.getEntity(n).getType() === F.a.EMOTE
					}, () => n = !0), n
				})
			};
			const Yo = " ".repeat(4),
				Qo = new RegExp("^ {1,4}|\\t"),
				Jo = new Set([w.b.CODE_BLOCK]),
				Xo = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection(),
						s = t.shiftKey;
					let i = n,
						c = r.getAnchorOffset(),
						a = r.getFocusOffset();
					if (Object($.a)(n, r, (t, e) => {
							const n = t.getType();
							if ("paragraph" === n || !Jo.has(n)) return !1;
							let l = null;
							const d = t.getText(),
								u = o.SelectionState.createEmpty(e);
							if (s) {
								const t = d.match(Qo);
								if (t) {
									const e = t[0].length;
									i = Y.b(i, u.merge({
										focusOffset: e
									}), ""), l = -e
								}
							} else i = Y.a(i, r.isCollapsed() ? r : u, Yo), l = 4;
							null !== l && (e === r.getAnchorKey() && (c += l), e === r.getFocusKey() && (a += l))
						}), i !== n) return i = i.merge({
						selectionAfter: r.merge({
							anchorOffset: c,
							focusOffset: a
						})
					}), t.preventDefault(), o.EditorState.push(e, i, s ? "remove-range" : "insert-characters")
				},
				Zo = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return ot(t);
					if (0 === e.getStartOffset()) {
						const o = n.getBlockForKey(e.getEndKey());
						if (Object(w.v)(o.getType())) return t; {
							const e = n.getBlockBefore(o.getKey());
							if (e && Object(w.v)(e.getType())) return t
						}
					}
				})(t) || ((t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent();
					if (n.isCollapsed() && 0 === n.getStartOffset()) {
						const s = r.getBlockForKey(n.getEndKey());
						if (Object(w.o)(s.getType())) return Object(N.d)(t, s.getKey());
						if (Object(w.u)(s.getType())) {
							const e = r.getBlockBefore(s.getKey());
							return o.EditorState.forceSelection(t, Object(D.b)(e))
						}
						if (!Object(N.q)(e) && Object(D.g)(s)) {
							const e = r.getBlockBefore(s.getKey());
							if (e && Object(w.o)(e.getType())) return t = o.EditorState.push(t, Object(D.i)(r, s.getKey()), Z.f), o.EditorState.forceSelection(t, Object(D.b)(e))
						}
					}
				})(t, e),
				$o = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return ot(t); {
						const o = n.getBlockForKey(e.getEndKey());
						if (e.getEndOffset() === o.getLength()) {
							if (Object(w.v)(o.getType())) return t; {
								const e = n.getBlockAfter(o.getKey());
								if (e && Object(w.v)(e.getType())) return t
							}
						}
					}
				})(t) || ((t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent();
					if (!n.isCollapsed()) return;
					const s = r.getBlockForKey(n.getEndKey());
					if (n.getEndOffset() === s.getLength()) {
						if (Object(w.o)(s.getType())) return Object(N.d)(t, s.getKey()); {
							const i = r.getBlockAfter(n.getEndKey());
							if (i && Object(w.o)(i.getType())) {
								if (Object(N.q)(e)) return Object(N.d)(t, i.getKey());
								if (Object(D.g)(s)) return t = o.EditorState.push(t, Object(D.i)(r, s.getKey()), Z.f), o.EditorState.forceSelection(t, Object(D.b)(i))
							}
						}
					}
				})(t, e),
				tr = t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return !1;
					const n = o.RichUtils.getCurrentBlockType(t);
					if (!w.c.includes(n)) return !1;
					if (e.getFocusOffset() > 0) {
						if ("\n" === t.getCurrentContent().getBlockForKey(e.getFocusKey()).getText()[e.getFocusOffset() - 1]) return !1
					}
					return !0
				};
			var er = n("./src/lib/memoizeByReference/index.ts");
			const nr = Object(er.a)(t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return;
					const n = e.getStartOffset(),
						o = t.getCurrentContent(),
						r = o.getBlockForKey(e.getFocusKey());
					if (r.getType() !== w.n) return;
					const s = r.getText();
					if (s.startsWith("1.") && 2 === n) return w.i.ORDERED;
					if (s.startsWith("*") && 1 === n) {
						const t = o.getBlockBefore(r.getKey());
						if (t && t.getType() === w.n && t.getText().startsWith("* ")) return;
						return w.i.UNORDERED
					}
				}),
				or = t => {
					const e = nr(t);
					if (!e) return t;
					const n = Object(So.a)(t);
					let r = o.Modifier.replaceText(n.getCurrentContent(), n.getSelection().merge({
						anchorOffset: 0
					}), "");
					return r = o.Modifier.setBlockType(r, r.getSelectionAfter(), e), o.EditorState.push(n, r, Z.c)
				};
			var rr = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const sr = Object(Ao.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GifTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx")).then(t => t.default)
			});

			function ir(t) {
				return p.a.createElement(sr, t)
			}
			var cr = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				ar = n("./src/reddit/components/RichTextEditor/spoiler/decorator.m.less"),
				lr = n.n(ar);
			const dr = t => p.a.createElement("span", {
					className: lr.a.spoiler
				}, p.a.createElement("span", null), t.children, p.a.createElement("span", null)),
				ur = () => ({
					strategy: cr.a,
					component: dr
				});
			var pr = n("./src/reddit/components/FocusableContent/index.tsx"),
				hr = n("./src/reddit/components/RichTextEditor/Blockquote/index.m.less"),
				mr = n.n(hr);
			const gr = E.a.div("BlockQuoteWrapper", mr.a),
				fr = Object(P.Map)({
					[w.e]: {
						element: "blockquote",
						wrapper: p.a.createElement(gr, null)
					}
				});
			var br = n("./src/reddit/components/RichTextEditor/CodeBlock/index.m.less"),
				yr = n.n(br);
			const Er = Object(P.Map)({
				[w.f]: {
					element: "code",
					wrapper: p.a.createElement(t => p.a.createElement("div", {
						className: yr.a.CodeBlockWrapper
					}, t.children), null)
				}
			});
			var Sr = n("./node_modules/bowser/src/bowser.js"),
				Cr = n.n(Sr),
				Or = n("./node_modules/lodash/includes.js"),
				kr = n.n(Or),
				Tr = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				xr = n("./src/reddit/components/RichTextEditor/DragController/index.m.less"),
				vr = n.n(xr);
			const jr = E.a.div("DropLine", vr.a),
				Rr = E.a.wrapped(Fn.b, "Tooltip", vr.a);
			class wr extends u.Component {
				constructor(t) {
					super(t), this.dragCount = 0, this.setContainerRef = t => this.containerRef = t, this.preventDocumentDrop = t => {
						!! function t(e) {
							return e.draggable ? e : e.parentElement ? t(e.parentElement) : null
						}(t.target) || (t.preventDefault(), t.stopPropagation())
					}, this.onDragOver = t => {
						const e = kr()(t.dataTransfer.types, qt);
						if (!e) {
							if (!Object(Tr.c)(t.dataTransfer) || !this.props.allowMediaUploads) return
						}
						if (!e && !Object(Tr.c)(t.dataTransfer)) return;
						t.preventDefault();
						try {
							t.dataTransfer.dropEffect = e ? "move" : "copy"
						} catch (s) {}
						const {
							editorState: n
						} = this.props;
						let o = null;
						const r = Object(Tr.b)(n, t);
						if (r) {
							const t = this.containerRef.getBoundingClientRect().left;
							o = {
								top: r.clientY,
								left: t
							}
						}
						Dn()(o, this.state.point) || this.setState({
							point: o
						})
					}, this.onDragEnter = t => {
						this.dragCount++
					}, this.onDragLeave = t => {
						this.dragCount--, 0 === this.dragCount && this.state.point && this.setState({
							point: null
						})
					}, this.onDrop = t => {
						const e = () => {
								this.dragCount = 0, this.setState({
									point: null
								})
							},
							n = Cr.a.msie ? null : t.dataTransfer.getData(qt),
							o = Object(Tr.a)(t.dataTransfer);
						if (!(n || o.length && this.props.allowMediaUploads)) return void e();
						const {
							editorState: r
						} = this.props, s = Object(Tr.b)(r, t);
						if (!s) return void e();
						t.preventDefault(), t.stopPropagation();
						const i = s.isBefore ? D.a.before : D.a.after;
						n ? this.props.onBlockMove(n, s.blockKey, i) : setTimeout(() => {
							this.props.onFilesDrop(o, s.blockKey, i)
						}), e()
					}, this.state = {
						point: null
					}
				}
				componentDidMount() {
					document.addEventListener("drop", this.preventDocumentDrop), document.addEventListener("dragover", this.preventDocumentDrop)
				}
				componentWillUnmount() {
					document.removeEventListener("drop", this.preventDocumentDrop), document.removeEventListener("dragover", this.preventDocumentDrop)
				}
				render() {
					const {
						children: t
					} = this.props, {
						point: e
					} = this.state, n = p.a.Children.only(t);
					return p.a.createElement("div", {
						className: Object(b.a)(vr.a.container, {
							[vr.a.hideCaret]: !!e
						}),
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this.onDragOver,
						onDrop: this.onDrop,
						ref: this.setContainerRef
					}, p.a.createElement("div", null, n), p.a.createElement(Rr, {
						targetPosition: e
					}, p.a.createElement(jr, null)))
				}
			}
			var Br = n("./node_modules/draft-js/lib/DraftPasteProcessor.js"),
				Ir = n.n(Br),
				_r = n("./node_modules/draft-js/lib/getEntityKeyForSelection.js"),
				Ar = n.n(_r),
				Kr = n("./node_modules/draft-js/lib/splitTextIntoTextBlocks.js"),
				Mr = n.n(Kr),
				Lr = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts"),
				Nr = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function Dr(t, e, n) {
				const r = Object(o.convertFromHTML)(e, void 0, n);
				if (r) {
					const {
						contentBlocks: e,
						entityMap: n
					} = r;
					if (e) {
						const r = o.BlockMapBuilder.createFromArray(function(t) {
							return t.map(t => Object(w.r)(t.getType()) ? _(t) : t)
						}(e));
						return [t.set("entityMap", n), r]
					}
				}
				return [t, null]
			}

			function Fr(t, e, n) {
				const r = Mr()(e),
					s = n && 1 === r.length ? n : o.CharacterMetadata.create(),
					i = Ir.a.processText(r, s).map(t => t.merge({
						type: w.n
					}));
				return o.BlockMapBuilder.createFromArray(i)
			}
			const Pr = t => {
					if (!t) return null;
					const e = (new DOMParser).parseFromString(t, "text/html").querySelector("[data-reddit-rtjson]");
					return e && e.getAttribute("data-reddit-rtjson")
				},
				Ur = t => {
					if (St()) return {
						text: window.clipboardData.getData("text"),
						html: null
					}; {
						const e = t.clipboardData.getData("text/html");
						return {
							text: t.clipboardData.getData("text/plain"),
							html: e
						}
					}
				};

			function Hr(t, e, n, r) {
				const {
					text: s,
					html: i
				} = Ur(n), c = function(t, e, n, o) {
					const r = {
							text: e,
							html: n,
							rtjson: o,
							fragment: null
						},
						s = t.getClipboard();
					return s && n && function(t, e, n, o) {
						return -1 !== e.indexOf(o) || 1 === t.size && t.first().getText() === n
					}(s, n, e, t.getEditorKey()) && (r.fragment = s), r
				}(e, s, i, i && Pr(i));
				e.getClipboard() && !c.fragment && e.setClipboard(null);
				const a = t.getCurrentContent(),
					l = t.getSelection(),
					d = t.getCurrentInlineStyle(),
					u = e.props.blockRenderMap;
				let p = null,
					h = a;
				if (!(p = function(t, e, n) {
						const o = t.getBlockForKey(e.getStartKey()),
							r = t.getBlockForKey(e.getEndKey());
						if (o.getType() === w.f || r.getType() === w.f) return Fr(0, n).map(t => t.merge({
							type: w.f,
							depth: 0
						}))
					}(h, l, c.text)) && c.fragment && (p = c.fragment, [h, p] = Object(Lr.b)(h, p), p = vt(p, r)), !p && c.rtjson && (p = function(t) {
						const e = JSON.parse(t);
						return Object(o.convertFromRaw)(e).getBlockMap()
					}(c.rtjson)), !p && c.html && ([h, p] = Dr(h, c.html, u)), !p && c.text) {
					const t = function(t, e, n) {
						return o.CharacterMetadata.create({
							style: n,
							entity: Ar()(t, e)
						})
					}(h, l, d);
					p = Fr(0, c.text, t), [h, p] = function(t, e) {
						let n = t,
							o = e;
						return e.forEach(t => {
							const e = t.getText(),
								r = Wo.f.match(e);
							if (!r) return;
							let s = t;
							r.forEach(t => {
								let {
									index: e,
									lastIndex: r,
									url: i
								} = t;
								const c = (n = n.createEntity(F.a.LINK, "MUTABLE", {
									url: i
								})).getLastCreatedEntityKey();
								s = Object(Nr.a)(s, e, r, c), o = o.set(s.getKey(), s)
							})
						}), [n, o]
					}(h, p)
				}
				if (p) return h = function(t, e, n) {
					if (n.isEmpty()) return t;
					let o = dt(t, e, n) || jt(t, e, n);
					return o || (o = Y.c(t, e, n))
				}(h, l, p), o.EditorState.push(t, h, Z.e)
			}
			var Wr = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				zr = n("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				qr = n("./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less"),
				Vr = n.n(qr);
			const Gr = E.a.div("LinkDetailsBox", Vr.a),
				Yr = E.a.a("Link", Vr.a),
				Qr = E.a.a("LinkButton", Vr.a);
			var Jr = t => p.a.createElement("div", null, p.a.createElement(Gr, {
					onMouseDown: t => t.preventDefault()
				}, p.a.createElement(Yr, {
					href: t.url,
					target: "_blank"
				}, t.url), p.a.createElement("span", null, " – "), p.a.createElement(Qr, {
					onClick: () => t.onStartEdit(),
					role: "button"
				}, r.fbt._("Change", null, {
					hk: "3aOmcP"
				})), p.a.createElement("span", null, " | "), p.a.createElement(Qr, {
					onClick: () => t.onRemove(),
					role: "button"
				}, r.fbt._("Remove", null, {
					hk: "3tYl0U"
				})))),
				Xr = n("./src/reddit/controls/Input/index.tsx"),
				Zr = n("./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less"),
				$r = n.n(Zr);
			const ts = E.a.form("EditForm", $r.a),
				es = E.a.wrapped(t => p.a.createElement("div", t, t.children), "LinkEditorBox", $r.a),
				ns = E.a.wrapped(Xr.a, "Input", $r.a),
				os = E.a.label("Label", $r.a),
				rs = E.a.div("HintAndButtonRow", $r.a),
				ss = E.a.span("InvalidUrlHint", $r.a),
				is = E.a.wrapped(re.l, "SubmitButton", $r.a),
				cs = t => {
					t && (t.focus(), t.select())
				},
				as = / /g,
				ls = /\.{3}/g,
				ds = t => t.replace(as, "%20").replace(ls, "%2E%2E%2E");
			class us extends u.Component {
				constructor(t) {
					super(t), this.focused = !1, this.focusLostTimer = 0, this.textInputElementRef = null, this.urlInputElementRef = null, this.onEdited = () => {
						const t = this.state.url.trim(),
							e = ds(t),
							n = Object(Wo.i)(e);
						if (!n) return this.setState({
							isInvalidUrl: !0
						}), void(this.urlInputElementRef && this.urlInputElementRef.focus());
						const o = n.url;
						this.props.onEdited(o, this.state.displayText.trim() || t)
					}, this.onFocus = () => {
						this.focused = !0
					}, this.onBlur = () => {
						this.focused = !1, this.focusLostTimer = window.setTimeout(() => {
							this.focused || this.props.onFocusLost()
						}, 0)
					}, this.onClick = t => {
						t.stopPropagation()
					}, this.handleUrlChange = t => {
						const e = t.target.value;
						let {
							isInvalidUrl: n
						} = this.state;
						n && Object(Wo.h)(Wo.f, e) && (n = !1), this.setState({
							url: e,
							isInvalidUrl: n
						})
					}, this.handleDisplayTextChange = t => {
						this.setState({
							displayText: t.target.value
						})
					}, this.handleSubmit = t => {
						this.onEdited(), t.preventDefault()
					}, this.state = {
						url: t.url,
						displayText: t.displayText,
						isInvalidUrl: !1
					}
				}
				componentDidMount() {
					Object(Wo.h)(Wo.f, this.state.displayText) ? cs(this.textInputElementRef) : cs(this.urlInputElementRef)
				}
				componentWillUnmount() {
					this.focusLostTimer && clearTimeout(this.focusLostTimer)
				}
				render() {
					const {
						isInsertMode: t
					} = this.props;
					return p.a.createElement(es, {
						tabIndex: 0,
						onClick: this.onClick,
						onBlur: this.onBlur,
						onFocus: this.onFocus
					}, p.a.createElement(ts, {
						onSubmit: this.handleSubmit
					}, p.a.createElement(os, null, r.fbt._("Text:", null, {
						hk: "13SRB5"
					}), p.a.createElement(ns, {
						innerRef: t => this.textInputElementRef = t,
						type: "text",
						placeholder: r.fbt._("Title of link (optional)", null, {
							hk: "17GvI"
						}),
						value: this.state.displayText,
						onChange: this.handleDisplayTextChange
					})), p.a.createElement(os, null, r.fbt._("Link:", null, {
						hk: "3XqufJ"
					}), p.a.createElement(ns, {
						innerRef: t => this.urlInputElementRef = t,
						type: "text",
						placeholder: r.fbt._("Paste or type a link", null, {
							hk: "3QWoAf"
						}),
						value: this.state.url,
						onChange: this.handleUrlChange
					})), p.a.createElement(rs, null, p.a.createElement(is, {
						type: "submit",
						disabled: this.state.isInvalidUrl
					}, t ? r.fbt._("Insert", null, {
						hk: "3H7yaS"
					}) : r.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), this.state.isInvalidUrl ? p.a.createElement(ss, null, r.fbt._("Link doesn't look right", null, {
						hk: "1BHfKz"
					})) : null)))
				}
			}

			function ps(t, e, n) {
				const o = t.getCurrentContent(),
					r = {
						text: "",
						url: ""
					};
				if (e.isCollapsed()) return r;
				if (n) r.text = n.entityText, r.url = o.getEntity(n.entityKey).getData().url;
				else {
					r.text = function(t, e) {
						if (t.getStartKey() !== t.getEndKey()) throw new Error("Selection must be in a single block");
						return t.isCollapsed() ? "" : e.getBlockForKey(t.getStartKey()).getText().slice(t.getStartOffset(), t.getEndOffset())
					}(e, t.getCurrentContent());
					const n = Object(Wo.h)(Wo.f, r.text);
					n && (r.url = n.url)
				}
				return r
			}

			function hs(t, e) {
				return o.EditorState.set(t, {
					currentContent: o.Modifier.removeInlineStyle(t.getCurrentContent(), e, w.k.HIGHLIGHT)
				})
			}
			class ms extends u.Component {
				constructor(t) {
					super(t), this.api = null, this.updateTooltipPosition = null, this.lastEditorSelectionClientRect = null, this.editLinkInSelection = t => {
						const {
							editorState: e
						} = this.props;
						let n = t,
							r = e;
						const s = e.getCurrentContent();
						if (!Object(No.e)(s, t)) return !1;
						const i = Object(Wr.a)(s, t);
						if (i) {
							if (s.getEntity(i.entityKey).getType() !== F.a.LINK) return !1;
							n = i.entitySelection
						} else this.isEditorFocused() && (this.lastEditorSelectionClientRect = Object(zr.a)());
						return this.state.linkSelection && (r = hs(e, this.state.linkSelection)), r = function(t, e) {
							return o.EditorState.set(t, {
								currentContent: o.Modifier.applyInlineStyle(t.getCurrentContent(), e, w.k.HIGHLIGHT)
							})
						}(e, n), this.props.onChange(r, () => {
							this.setState({
								linkSelection: n,
								linkEntity: i
							})
						}), !0
					}, this.hidePopup = () => {
						this.interruptLinkEditing(), this.hideDetailsPopup()
					}, this.showDetailsPopup = () => {
						this.state.isDetailsPopupActive || this.setState({
							isDetailsPopupActive: !0
						})
					}, this.hideDetailsPopup = () => {
						this.state.isDetailsPopupActive && this.setState({
							isDetailsPopupActive: !1
						})
					}, this.updatePosition = () => {
						if (!this.updateTooltipPosition) return;
						const {
							editorState: t,
							containerRef: e
						} = this.props, n = t.getCurrentContent();
						let o;
						if (this.state.linkSelection) {
							const t = Object(Wr.a)(n, this.state.linkSelection);
							if (t) {
								const e = this.props.entityElementRegistry.get(t.entityKey);
								o = e && e.getBoundingClientRect()
							} else this.lastEditorSelectionClientRect && (o = this.lastEditorSelectionClientRect)
						} else {
							const n = Object(No.c)(t);
							if (n) {
								const t = this.props.entityElementRegistry.get(n.entityKey);
								o = t && t.getBoundingClientRect()
							} else o = e && e.getBoundingClientRect()
						}
						o && (this.updateTooltipPosition({
							left: o.left,
							top: o.bottom
						}), this.lastEditorSelectionClientRect = null)
					}, this.handleLink = (t, e) => {
						const {
							linkSelection: n
						} = this.state, {
							editorState: r
						} = this.props;
						let s = r;
						n && (n.isCollapsed() || (s = hs(r, n)), void 0 !== t && (s = Object(No.h)(s, n, t, e)), this.setState({
							linkSelection: null,
							linkEntity: null
						}), s !== r && (s = o.EditorState.forceSelection(s, s.getSelection()), this.props.onChange(s)))
					}, this.onLinkEdited = (t, e) => {
						this.handleLink(t, e)
					}, this.interruptLinkEditing = () => this.handleLink(), this.isEditorFocused = () => this.props.editorState.getSelection().getHasFocus(), this.onStartEditFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(No.c)(t);
						e && this.editLinkInSelection(e.entitySelection)
					}, this.onRemoveFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(No.c)(t);
						e && this.props.onChange(Object(No.h)(t, e.entitySelection, ""))
					}, this.renderEditorPopup = () => {
						const {
							linkSelection: t,
							linkEntity: e
						} = this.state, {
							editorState: n
						} = this.props;
						if (!t) return null;
						const {
							text: o,
							url: r
						} = ps(n, t, e);
						return p.a.createElement(us, {
							url: r,
							displayText: o,
							isInsertMode: !e,
							onEdited: this.onLinkEdited,
							onFocusLost: this.interruptLinkEditing
						})
					}, this.renderDetailsPopup = () => {
						const t = Object(No.c)(this.props.editorState);
						return t && this.isEditorFocused() && this.state.isDetailsPopupActive ? p.a.createElement(Jr, {
							url: t.url,
							onStartEdit: this.onStartEditFocusedLink,
							onRemove: this.onRemoveFocusedLink
						}) : null
					}, this.state = {
						isDetailsPopupActive: !1,
						linkSelection: null,
						linkEntity: null
					}, this.api = {
						editLinkInSelection: this.editLinkInSelection,
						hidePopup: this.hidePopup
					}
				}
				componentDidMount() {
					const {
						onSetApi: t
					} = this.props;
					this.api && t && t(this.api)
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate(t, e) {
					e.linkSelection === this.state.linkSelection && t.editorState === this.props.editorState || (this.showDetailsPopup(), this.updatePosition())
				}
				render() {
					return p.a.createElement(Fn.b, {
						onSetPositionUpdater: t => this.updateTooltipPosition = t,
						trianglePlacement: Fn.a.Above
					}, this.renderEditorPopup() || this.renderDetailsPopup())
				}
			}
			var gs = n("./src/reddit/components/RichTextEditor/OrderedList/index.m.less"),
				fs = n.n(gs);
			const bs = E.a.ol("OrderedListWrapper", fs.a),
				ys = Object(P.Map)({
					[w.i.ORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: p.a.createElement(bs, null)
					}
				});
			var Es = n("./src/reddit/components/RichTextEditor/Paragraph/index.m.less"),
				Ss = n.n(Es);
			const Cs = E.a.div("ParagraphWrapper", Ss.a),
				Os = Object(P.Map)({
					[w.n]: {
						element: "div",
						aliasedElements: ["p"],
						wrapper: p.a.createElement(Cs, null)
					}
				});
			var ks = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx");
			var Ts = n("./src/reddit/components/RichTextEditor/TextRendering/index.m.less"),
				xs = n.n(Ts);
			const vs = Object(er.a)(() => ({
					[w.k.SUPERSCRIPT]: {
						position: "relative",
						top: "-0.4em",
						fontSize: "0.7em",
						lineHeight: "0.7em"
					},
					[w.k.HIGHLIGHT]: {
						backgroundColor: "#b8e0f9"
					},
					[w.k.UNDERLINE]: {
						textDecoration: "none"
					},
					[w.k.MONOSPACE]: {
						backgroundColor: "var(--newRedditTheme-field)",
						caretColor: "#000",
						color: "var(--newRedditTheme-monospaceColor)",
						fontFamily: "Noto Mono, Menlo, Monaco, Consolas, monospace",
						padding: "0.1em 0.2em",
						fontSize: "0.8em",
						borderRadius: "3px"
					}
				})),
				js = E.a.div("H1", xs.a),
				Rs = E.a.div("H2", xs.a),
				ws = E.a.div("H3", xs.a),
				Bs = E.a.div("H4", xs.a),
				Is = E.a.div("H5", xs.a),
				_s = E.a.div("H6", xs.a),
				As = t => ({
					component: e => p.a.createElement(t, null, p.a.createElement(o.EditorBlock, e)),
					editable: !0
				}),
				Ks = {
					[w.g.H1]: As(js),
					[w.g.H2]: As(Rs),
					[w.g.H3]: As(ws),
					[w.g.H4]: As(Bs),
					[w.g.H5]: As(Is),
					[w.g.H6]: As(_s)
				},
				Ms = ["italic normal 1em 'Noto Sans'", "italic bold 1em 'Noto Sans'", "normal bold 1em 'Noto Sans'"],
				Ls = () => {
					const t = document.fonts;
					t && t.load && Ms.forEach(e => t.load(e))
				};
			var Ns = n("./src/reddit/components/RichTextEditor/UnorderedList/index.m.less"),
				Ds = n.n(Ns);
			const Fs = E.a.ul("UnorderedListWrapper", Ds.a),
				Ps = Object(P.Map)({
					[w.i.UNORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: p.a.createElement(Fs, null)
					}
				});
			var Us = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Hs = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				Ws = n("./src/reddit/controls/SubredditDropdown/index.m.less"),
				zs = n.n(Ws);

			function qs() {
				return (qs = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const Vs = t => {
				let {
					isFocused: e,
					...n
				} = t;
				return p.a.createElement("div", qs({
					className: Object(b.a)(zs.a.entry, {
						[zs.a.mIsFocused]: e
					})
				}, n))
			};
			class Gs extends u.Component {
				constructor(t) {
					super(t), this.mouseDown = !1, this.onMouseUp = () => {
						this.mouseDown && (this.props.onEntrySelect(this.props.entry), this.mouseDown = !1)
					}, this.onMouseDown = t => {
						this.mouseDown = !0, t.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onEntryFocus(this.props.entry)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1
				}
				render() {
					return p.a.createElement(Vs, {
						isFocused: this.props.isFocused,
						onMouseDown: this.onMouseDown,
						onMouseUp: this.onMouseUp,
						onMouseOver: this.onMouseOver
					}, this.props.children)
				}
			}
			var Ys = n("./src/reddit/helpers/name/index.ts"),
				Qs = n("./src/reddit/selectors/subredditAutocomplete.ts");
			const Js = Object(m.c)({
				subredditSuggestions: (t, e) => {
					const n = Object(Qs.d)(t, e);
					return n ? n.subreddits : []
				}
			});
			class Xs extends u.Component {
				constructor(t) {
					super(t), this.api = null, this.onEntrySelect = t => {
						this.props.onSelect(this.props.subredditSuggestions[t].name)
					}, this.onEntryFocus = t => {
						this.setState({
							selectedSuggestionIndex: t
						})
					}, this.moveUp = () => {
						if (this.props.subredditSuggestions.length > 1) {
							let t = this.state.selectedSuggestionIndex - 1;
							return t = t < 0 ? this.props.subredditSuggestions.length - 1 : t, this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.props.subredditSuggestions.length > 1) {
							const t = (this.state.selectedSuggestionIndex + 1) % this.props.subredditSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.props.subredditSuggestions.length) {
							const t = this.props.subredditSuggestions[this.state.selectedSuggestionIndex];
							return t && this.props.onSelect(t.name), !0
						}
						return !1
					}, this.state = {
						selectedSuggestionIndex: 0
					}, this.requestSubredditAutocomplete = i()(this.requestSubredditAutocomplete.bind(this), 200, {
						maxWait: 200
					}), this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.requestSubredditAutocomplete(this.props.substring), this.props.onDropdownApi(this.api)
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(t) {
					t.substring !== this.props.substring && (this.requestSubredditAutocomplete(t.substring), this.setState({
						selectedSuggestionIndex: 0
					}))
				}
				requestSubredditAutocomplete(t) {
					this.props.onGetSubredditAutocomplete(t)
				}
				render() {
					return this.props.subredditSuggestions.length ? p.a.createElement("div", {
						className: Object(b.a)(zs.a.list, this.props.className)
					}, this.props.subredditSuggestions.map((t, e) => p.a.createElement(Gs, {
						entry: e,
						isFocused: e === this.state.selectedSuggestionIndex,
						key: t.name,
						onEntrySelect: this.onEntrySelect,
						onEntryFocus: this.onEntryFocus
					}, Object(Ys.d)(t.name)))) : null
				}
			}
			var Zs = Object(h.b)(Js, (t, e) => ({
					onGetSubredditAutocomplete: e => {
						t(Hs.a(e))
					}
				}))(Xs),
				$s = n("./src/reddit/selectors/comments.ts");
			const ti = Object(m.c)({
				commentAuthors: $s.h
			});
			class ei extends u.Component {
				constructor(t) {
					super(t), this.api = null, this.onEntrySelect = t => {
						this.props.onSelect(this.state.userSuggestions[t])
					}, this.onEntryFocus = t => {
						this.setState({
							selectedSuggestionIndex: t
						})
					}, this.moveUp = () => {
						if (this.state.userSuggestions.length > 1) {
							let t = this.state.selectedSuggestionIndex - 1;
							return t = t < 0 ? this.state.userSuggestions.length - 1 : t, this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.state.userSuggestions.length > 1) {
							const t = (this.state.selectedSuggestionIndex + 1) % this.state.userSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.state.userSuggestions.length) {
							const t = this.state.userSuggestions[this.state.selectedSuggestionIndex];
							return t && this.props.onSelect(t), !0
						}
						return !1
					}, this.state = {
						userSuggestions: [],
						selectedSuggestionIndex: 0
					}, this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.props.onDropdownApi(this.api), this.setState({
						userSuggestions: this.filterUsers(this.props.substring)
					})
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(t) {
					t.substring !== this.props.substring && this.setState({
						selectedSuggestionIndex: 0,
						userSuggestions: this.filterUsers(t.substring)
					})
				}
				filterUsers(t) {
					const {
						commentAuthors: e
					} = this.props;
					return e.filter(e => e.toLowerCase().startsWith(t.toLowerCase()))
				}
				render() {
					return this.state.userSuggestions.length ? p.a.createElement("div", {
						className: Object(b.a)(zs.a.list, this.props.className)
					}, this.state.userSuggestions.map((t, e) => p.a.createElement(Gs, {
						key: e,
						entry: e,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						isFocused: e === this.state.selectedSuggestionIndex
					}, Object(Ys.e)(t)))) : null
				}
			}
			var ni = Object(h.b)(ti)(ei),
				oi = n("./node_modules/lodash/dropRightWhile.js"),
				ri = n.n(oi),
				si = n("./node_modules/lodash/flatMap.js"),
				ii = n.n(si),
				ci = n("./node_modules/lodash/reduceRight.js"),
				ai = n.n(ci),
				li = n("./node_modules/lodash/trimEnd.js"),
				di = n.n(li),
				ui = n("./node_modules/lodash/trimStart.js"),
				pi = n.n(ui),
				hi = n("./src/lib/forEachGroup/index.ts");

			function mi(t, e) {
				const n = [],
					o = t.withMutations(t => {
						for (; t.size && e(t.first());) n.push(t.first()), t.shift()
					});
				return {
					popped: n,
					stack: o
				}
			}
			var gi = n("./src/lib/unicodeUtils/index.ts"),
				fi = n("./src/reddit/helpers/richTextJson/index.ts"),
				bi = n("./src/reddit/models/RichTextJson/nodeMakers.ts");
			const yi = {
				BOLD: qn.k.bold,
				ITALIC: qn.k.italic,
				MONOSPACE: qn.k.monospace,
				STRIKETHROUGH: qn.k.strikethrough,
				SUBSCRIPT: qn.k.subscript,
				SUPERSCRIPT: qn.k.superscript,
				UNDERLINE: qn.k.underline
			};
			var Ei = (t, e) => Si(t.getBlockMap(), t, e);
			const Si = (t, e, n) => {
					const o = [];
					let r = t.toStack();
					for (; r.size;) {
						const t = r.first(),
							s = t.getType();
						switch (r = r.shift(), s) {
							case w.g.H1:
							case w.g.H2:
							case w.g.H3:
							case w.g.H4:
							case w.g.H5:
							case w.g.H6:
								o.push(vi(t, e));
								break;
							case w.e: {
								const {
									popped: n,
									stack: s
								} = mi(r, t => t.getType() === w.e);
								r = s, o.push(ji([t, ...n], e));
								break
							}
							case w.f: {
								const {
									popped: e,
									stack: n
								} = mi(r, t => t.getType() === w.f);
								r = n, o.push(Ri([t, ...e]));
								break
							}
							case w.i.ORDERED:
							case w.i.UNORDERED: {
								const {
									popped: n,
									stack: i
								} = mi(r, t => t.getType() === s);
								r = i, o.push(wi([t, ...n], e));
								break
							}
							case w.l: {
								const {
									popped: n,
									stack: s
								} = mi(r, t => Object(w.v)(t.getType()));
								r = s, o.push(Bi([t, ...n], e));
								break
							}
							case w.a: {
								let e = r.first();
								e && Object(w.u)(e.getType()) ? r = r.shift() : e = void 0, o.push(Ii(t, e, n));
								break
							}
							case w.n:
							default:
								o.push(Ti(t, e))
						}
					}
					return o
				},
				Ci = t => t.reduce((t, e) => e === w.k.UNDERLINE || e === w.k.SUBSCRIPT ? t : t | (yi[e] || 0) | 0, 0),
				Oi = (t, e) => {
					const n = [],
						o = Object(gi.b)(t);
					return Object(hi.a)(e, {
						keyFn: t => t.getStyle()
					}, (e, r, s, i) => {
						if (r.isEmpty()) return;
						const c = t.slice(s, i),
							a = s + (c.length - pi()(c).length),
							l = i - (c.length - di()(c).length),
							d = l - a,
							u = o[a],
							p = o[l] - u;
						d > 0 && n.push([Ci(r), u, p])
					}), n.length ? n : null
				},
				ki = (t, e) => {
					const n = t.getText(),
						o = t.getCharacterList(),
						r = [],
						s = w.d.includes(t.getType()),
						i = w.c.includes(t.getType());
					let c = 0;
					return Object(hi.a)(o, {
						keyFn: (t, o) => {
							const r = t.getEntity();
							return s && t.getStyle().contains(w.k.SPOILER) ? "spoiler" : Object(F.b)(r, e) ? `link-${t.getEntity()}` : "\n" === n[o] ? i ? "linebreak" : "skip" : r && e.getEntity(r).getType() === F.a.EMOTE ? `emote-${c++}` : "text"
						}
					}, (t, s, i, c) => {
						const a = n.slice(i, c),
							l = o.slice(i, c).toList();
						if ("text" === s) {
							const t = Oi(a, l);
							r.push(Object(bi.s)(a, t))
						} else if ("spoiler" === s) r.push(Object(bi.n)(a));
						else if (s.startsWith("link-")) {
							const n = e.getEntity(t.getEntity());
							r.push(((t, e, n) => {
								const o = t.getType(),
									r = [F.a.USER_LINK, F.a.USER_MENTION],
									{
										url: s
									} = t.getData(),
									i = e.startsWith("/");
								if (o === F.a.SUBREDDIT_LINK) {
									const t = e.replace(S.e, "");
									return Object(bi.o)(t, i)
								}
								if (r.includes(o)) {
									const t = e.replace(S.a, "");
									return Object(bi.t)(t, i)
								}
								const c = Oi(e, n);
								return Object(bi.i)(e, s, c)
							})(n, a, l))
						} else if ("linebreak" === s) r.push(Object(bi.h)());
						else if (s.startsWith("emote-")) {
							const n = e.getEntity(t.getEntity()).getData();
							r.push(Object(bi.e)(n.fullId, n.imageType))
						}
					}), r
				},
				Ti = (t, e) => Object(bi.l)(ki(t, e)),
				xi = t => "text" === t.e ? Object(bi.m)(t.t) : "link" === t.e ? Object(bi.i)(t.t, t.u, null) : t.e === qn.z ? t.c.map(xi) : t.e === qn.o ? Object(bi.m)("") : t,
				vi = (t, e) => Object(bi.f)(w.m[t.getType()], ((t, e) => ai()(ii()(ki(t, e), xi), (t, e) => {
					let [n, ...o] = t;
					if (!n) return [e];
					const r = o.length ? o : [];
					return n && "raw" === e.e && "raw" === n.e ? [Object(bi.m)(e.t + n.t), ...r] : [e, n, ...r]
				}, []))(t, e)),
				ji = (t, e) => Object(bi.c)(ri()(t.map(t => ((t, e) => t.getText().trim().length ? Ti(t, e) : bi.a)(t, e)), t => t === bi.a)),
				Ri = t => Object(bi.d)(t.map(t => Object(bi.m)(t.getText()))),
				wi = (t, e) => {
					if (!t.length) return Object(bi.k)([], !1);
					const n = t[0].getDepth();
					let o = null;
					const r = [];
					let s = [];
					const i = () => null !== o || s.length,
						c = () => {
							const t = [];
							null !== o && (t.push(o), o = null), s.length && (t.push(wi(s, e)), s = []), r.push(Object(bi.j)(t))
						};
					return t.forEach(t => {
						t.getDepth() > n ? s.push(t) : (i() && c(), o = Object(bi.l)(ki(t, e)))
					}), i() && c(), Object(bi.k)(r, t[0].getType() === w.i.ORDERED)
				},
				Bi = (t, e) => {
					const n = [...t].sort(Q.b),
						o = n[0],
						{
							colCount: r
						} = Object(Q.g)(o),
						s = W()(n, r),
						i = s[0].map(t => {
							const {
								alignment: n
							} = Object(Q.g)(t);
							return Object(bi.q)(ki(t, e), n)
						}),
						c = s.slice(1).map(t => t.map(t => Object(bi.p)(ki(t, e))));
					return Object(bi.r)(i, c)
				},
				Ii = (t, e, n) => {
					const o = Object(N.h)(t);
					if (!o) throw new Error("Invalid atomic block!");
					const {
						uploadInfo: r,
						mediaAsset: s,
						makeGif: i
					} = o, c = e ? e.getText() : "";
					if (r && n) {
						const t = n[r.uploadKey],
							e = t && t.metadata.mimetype || "",
							{
								assetId: s,
								thumbnailAssetId: a
							} = Object(N.f)(o, n);
						return Object(Ht.l)(e) ? Object(bi.b)(s, c) : Object(Ht.m)(e) ? Object(bi.g)(s, c) : Object(bi.u)(s, c, a, i)
					} {
						const {
							assetId: t,
							type: e
						} = s;
						let n;
						switch (e) {
							case N.a.AnimatedImage:
								n = Object(bi.b)(t, c);
								break;
							case N.a.Image:
								n = Object(bi.g)(t, c);
								break;
							case N.a.Video:
								n = Object(bi.u)(t, c);
								break;
							default:
								throw new Error("Invalid media type")
						}
						return Object(fi.h)(t) ? Object(bi.l)([n]) : n
					}
				};
			var _i, Ai = n("./src/reddit/constants/componentSizes.ts"),
				Ki = n("./src/reddit/constants/elementIds.ts");
			! function(t) {
				t.Up = "up", t.Down = "down"
			}(_i || (_i = {}));
			var Mi = t => {
					const e = window.getSelection().focusNode;
					if (!e || !e.parentElement) return;
					const n = document.getElementById(Ki.e),
						o = n || document.documentElement;
					if (!o) return;
					const r = window.innerHeight,
						{
							bottom: s,
							top: i
						} = e.parentElement.getBoundingClientRect(),
						c = n ? 0 : Ai.f + Ai.o;
					t === _i.Up && i < c ? o.scrollBy(0, i - c) : t === _i.Down && s > r && o.scrollBy(0, s - r)
				},
				Li = n("./src/reddit/models/Product/index.ts"),
				Ni = (t, e, n) => {
					const o = {
						url: n
					};
					return t.createEntity(e, "MUTABLE", o)
				},
				Di = n("./node_modules/lodash/maxBy.js"),
				Fi = n.n(Di);
			const Pi = (t, e) => {
				if (!e) return (t => {
					const e = t.id;
					switch (t.e) {
						case qn.n:
							return {
								assetId: e, type: N.a.Image
							};
						case qn.a:
							return {
								assetId: e, type: N.a.AnimatedImage
							};
						case qn.F:
							return {
								assetId: e, type: N.a.Video
							}
					}
				})(t);
				const n = e.id;
				switch (e.e) {
					case qn.t: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: N.a.Image,
							imageUrl: t.u,
							width: t.x,
							height: t.y
						}
					}
					case qn.s: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: N.a.AnimatedImage,
							imageUrl: t.gif,
							posterUrl: t.p,
							dashUrl: t.mp4,
							width: t.x,
							height: t.y
						}
					}
					case qn.u: {
						const {
							isGif: t,
							dashUrl: o,
							hlsUrl: r,
							p: s,
							x: i,
							y: c
						} = e;
						let a;
						if (s) {
							a = Fi()(s, t => t.x).u
						}
						return {
							assetId: n,
							type: N.a.Video,
							isGif: t,
							dashUrl: o,
							hlsUrl: r,
							posterUrl: a,
							width: i,
							height: c
						}
					}
				}
			};

			function Ui(t, e, n) {
				const r = t.id,
					s = t.c,
					i = qn.G(e, r),
					c = Pi(t, i),
					a = [new o.ContentBlock({
						key: Object(o.genKey)(),
						type: w.a,
						data: Object(P.Map)({
							mediaAsset: c
						})
					})];
				if (n) {
					const t = Object(D.h)(Object(o.genKey)(), s).merge({
						type: w.j
					});
					a.push(t)
				}
				return a
			}
			const Hi = Object.keys(yi),
				Wi = (t, e, n) => {
					switch (e.e) {
						case qn.w:
							return Qi(t, e.c, w.b.UNSTYLED, n);
						case qn.l:
							const o = w.h[e.l];
							return Qi(t, e.c || [], o, n);
						case qn.q:
							return Vi(t, e, n);
						case qn.b:
							return zi(t, e, n);
						case qn.c:
							return void e.c.forEach(e => Qi(t, [e], w.b.CODE_BLOCK, n));
						case qn.B:
							return qi(t, e, n);
						case qn.n:
						case qn.a:
						case qn.F:
							return void t.blocks.push(...Ui(e, n.mediaMetadataMap, Object(N.q)(n.editorType)))
					}
				},
				zi = (t, e, n) => {
					e && e.c && e.c.length && e.c.forEach(e => e.e === qn.w ? Qi(t, e.c, w.b.BLOCK_QUOTE, n) : Wi(t, e, n))
				},
				qi = (t, e, n) => {
					const {
						h: o,
						c: r
					} = e, s = o.length;
					[o, ...r].forEach((e, r) => e.forEach((e, i) => {
						const {
							c = []
						} = e, {
							a
						} = o[i], l = {
							alignment: a,
							colCount: s,
							colIndex: i,
							rowIndex: r
						};
						Qi(t, c, w.b.TABLE_CELL, n, l)
					}))
				},
				Vi = function(t, e, n) {
					let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
					const r = e.o ? w.b.ORDERED_LIST : w.b.UNORDERED_LIST;
					e.c.forEach(e => {
						const s = e.c;
						if (!s || !s.length) return;
						const [i, c] = s, a = i.e === qn.w ? i.c : [];
						Qi(t, a, r, n, void 0, o), c && c.e === qn.q && Vi(t, c, n, o + 1)
					})
				},
				Gi = {
					[qn.A]: ["r/", "/r/"],
					[qn.D]: ["u/", "/user/"],
					[qn.E]: ["u/", "/user/"],
					[qn.x]: ["p/", ""],
					[qn.g]: ["c/", ""]
				},
				Yi = {
					[qn.A]: F.a.SUBREDDIT_LINK,
					[qn.D]: F.a.USER_LINK,
					[qn.E]: F.a.USER_MENTION,
					[qn.x]: F.a.POST_LINK,
					[qn.g]: F.a.COMMENT_LINK
				},
				Qi = function(t, e, n, r) {
					let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
						i = arguments.length > 5 ? arguments[5] : void 0,
						c = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
					const a = t.content;
					if (1 === e.length && (e[0].e === qn.n || e[0].e === qn.a)) {
						const n = e[0];
						if (Object(fi.h)(n.id)) return void t.blocks.push(...Ui(n, r.mediaMetadataMap, Object(N.q)(r.editorType)))
					}
					const {
						charList: l,
						text: d,
						updatedContent: u
					} = Ji(e, a, r), p = new o.ContentBlock({
						key: Object(o.genKey)(),
						characterList: Object(P.List)(l),
						data: Object(P.fromJS)(s),
						depth: i,
						text: d,
						type: n
					});
					t.content = u || a, c ? t.blocks.unshift(p) : t.blocks.push(p)
				},
				Ji = (t, e, n) => {
					let o = e,
						r = "";
					const s = [];
					if (t.forEach(t => {
							const e = Xi(t, o, n);
							o = e.updatedContent || o, r += e.text, s.push(...e.charList)
						}), r.length !== s.length) throw new Error("Characters length mismatch!");
					return {
						charList: s,
						text: r,
						updatedContent: o !== e ? o : void 0
					}
				},
				Xi = (t, e, n) => {
					switch (t.e) {
						case qn.C: {
							const {
								t: e,
								f: n
							} = t;
							return {
								charList: $i(e, n),
								text: e
							}
						}
						case qn.z: {
							const {
								c: r
							} = t, s = Ji(r, e, n);
							return s.charList = s.charList.map(t => (t => o.CharacterMetadata.create({
								style: t.getStyle().add(w.k.SPOILER),
								entity: t.getEntity()
							}))(t)), s
						}
						case qn.x:
						case qn.g:
						case qn.y: {
							const {
								t: e
							} = t;
							return {
								charList: $i(e),
								text: e
							}
						}
						case qn.A:
						case qn.D:
						case qn.E: {
							const [n, o] = Gi[t.e], r = (t.l ? "/" : "") + n + t.t, s = o + t.t, i = Ni(e, Yi[t.e], s), c = i.getLastCreatedEntityKey();
							return {
								charList: $i(r, void 0, c),
								text: r,
								updatedContent: i
							}
						}
						case qn.p: {
							const {
								t: n,
								u: o,
								f: r
							} = t, s = Ni(e, F.a.LINK, o), i = s.getLastCreatedEntityKey();
							return {
								charList: $i(n, r, i),
								text: n,
								updatedContent: s
							}
						}
						case qn.n:
						case qn.a:
							const {
								id: r
							} = t;
							if (r.startsWith("emote|")) {
								const t = Object(Li.b)(r),
									o = n.activeEmotes && n.activeEmotes[t];
								if (o) {
									const t = Object(xo.c)(e, o),
										n = t.getLastCreatedEntityKey(),
										r = xo.a;
									return {
										charList: $i(r, void 0, n),
										text: r,
										updatedContent: t
									}
								}
								const s = `:${t}:`;
								return {
									charList: $i(s),
									text: s
								}
							}
							return {
								text: "", charList: $i("")
							};
						default:
							return {
								text: "", charList: $i("")
							}
					}
				},
				Zi = t => {
					const e = Hi.filter(e => !!(yi[e] & t));
					return Object(P.OrderedSet)(e)
				},
				$i = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					const r = o.CharacterMetadata.create({
							entity: n
						}),
						s = Array(t.length).fill(r),
						i = Object(gi.a)(t);
					return e && e.forEach(t => {
						const [e, r, c] = t, a = Zi(e), l = r + c, d = o.CharacterMetadata.create({
							entity: n,
							style: a
						});
						s.fill(d, i[r], i[l])
					}), s
				},
				tc = (t, e) => {
					t.blocks.length && (t.blocks[0].getType() === w.b.TABLE_CELL && Qi(t, [], w.b.UNSTYLED, e, void 0, void 0, !0), t.blocks[t.blocks.length - 1].getType() === w.b.TABLE_CELL && Qi(t, [], w.b.UNSTYLED, e))
				};
			var ec = (t, e, n, r) => {
					const s = "string" == typeof t ? JSON.parse(t) : t;
					if (!s || !s.document || !s.document.length) return null;
					const i = {
							editorType: e,
							mediaMetadataMap: n,
							activeEmotes: r ? r.reduce((t, e) => ({
								...t,
								...e.emotes
							}), {}) : void 0
						},
						c = {
							blocks: [],
							content: o.ContentState.createFromText("")
						};
					s.document.forEach(t => {
						Wi(c, t, i)
					}), 0 === c.blocks.length && Qi(c, [], w.b.UNSTYLED, i), tc(c, i);
					const a = o.BlockMapBuilder.createFromArray(c.blocks),
						l = o.SelectionState.createEmpty(a.first().getKey());
					return c.content.merge({
						blockMap: a,
						selectionBefore: l,
						selectionAfter: l
					})
				},
				nc = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				oc = n("./src/reddit/components/UsersCountIndicator/constants.ts"),
				rc = n("./src/reddit/constants/elementClassNames.ts"),
				sc = n("./src/reddit/constants/keycodes.ts"),
				ic = n("./src/reddit/helpers/correlationIdTracker.ts"),
				cc = n("./src/reddit/icons/svgs/Send/index.tsx"),
				ac = n("./src/reddit/selectors/economics.ts"),
				lc = n("./src/reddit/components/RichTextEditor/index.m.less"),
				dc = n.n(lc);

			function uc() {
				return (uc = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			Object(ks.b)({
				draftToRTFJson: Ei,
				getMediaCount: N.g,
				getPendingThumbnailUploads: N.i,
				isAllMediaUploaded: N.m
			});
			const pc = "handled",
				hc = "not-handled",
				mc = /^\s*$/,
				gc = 20,
				fc = E.a.wrapped(pr.a, "FocusableContent", dc.a),
				bc = E.a.div("Container", dc.a),
				yc = E.a.wrapped(nc.a, "CurrentUserIcon", dc.a),
				Ec = t => `${x.b}-${t}`,
				Sc = Object(h.b)(() => {
					const t = (() => Object(m.a)(t => t.uploads, (t, e) => e.rteState.editorKey, (t, e) => a()(t, t => t.key.startsWith(Ec(e)))))();
					return Object(m.c)({
						editorUploads: t,
						emotesSpecialMembershipEnabled: v.d.spEmotes,
						giphySpecialMembershipEnabled: v.d.spGiphy,
						activeEmotes: (t, e) => {
							var n;
							return Object(ac.b)(t, {
								subredditId: null === (n = e.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						},
						shouldShowCommentGifsTooltip: (t, e) => {
							var n;
							return Object(Bo.c)(t, {
								subredditId: null === (n = e.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						}
					})
				}, t => ({
					onFetchEditorProducts: e => t(Object(T.e)(e)),
					onTrackMediaDrop: e => t((t, n) => j.t(n(), e)),
					retryUpload: (e, n) => t(x.c(e, n)),
					startUploads: (e, n, o, r, s, i) => t(x.e(e, n, Ec(o), r, s, i))
				}));
			class Cc extends u.Component {
				constructor(t) {
					super(t), this.blockRenderMap = o.DefaultDraftBlockRenderMap.merge(fr, Er, Ln, ys, Os, Ps, dn), this.editorHeight = null, this.editorRef = null, this.editorRootStyleMutationObserver = null, this.linksControllerApi = null, this.suggestionDropdownApi = null, this.tableToolbarControllerApi = null, this.emotesTooltipApi = null, this.gifTooltipApi = null, this.updateSuggestionDropdownPosition = null, this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1, this.needSyncScroll = null, this.transforms = {
						[B.BREAK_HEADER_ENTITY]: So.b,
						[B.INSERT_LINE_BREAK]: So.e,
						[B.REDUCE_LIST_INDENT]: So.f,
						[B.RESET_CURRENT_AND_PREVIOUS_BLOCKS]: So.g,
						[B.REMOVE_EXTRA_LIST_ITEM]: So.h,
						[K.d]: t => $o(t, this.props.editorType),
						[K.b]: t => Zo(t, this.props.editorType),
						[K.f]: So.d,
						[K.c]: t => Object(So.c)(w.k.BOLD, t),
						[K.e]: t => Object(So.c)(w.k.ITALIC, t),
						[K.g]: t => Object(So.c)(w.k.UNDERLINE, t)
					}, this.realtimeGQLVariables = void 0, this.setContainerRef = t => {
						const {
							domRef: e
						} = this.props;
						e && e(t), this.setState({
							containerRef: t
						})
					}, this.setFocusableContentRef = t => this.setState({
						focusableContentRef: t
					}), this.setUserStoppedTyping = i()(() => this.setState({
						isUserTyping: !1
					}), oc.c), this.rteStateChanged = (t, e) => {
						const n = {
							...this.props.rteState,
							isBound: !0,
							editorState: t
						};
						this.props.onChange(n, e), this.props.isTypingIndicatorsWriteTestEnabled && e && (this.state.isUserTyping || this.setState({
							isUserTyping: !0
						}), this.setUserStoppedTyping())
					}, this.hideTooltips = () => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.tableToolbarControllerApi && this.tableToolbarControllerApi.hideActionButton(), this.linksControllerApi && this.linksControllerApi.hidePopup(), this.suppressAutocompleteForFocusedLink()
					}, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const t = this.editorRef.refs.editor,
							e = t.style.height ? Number.parseInt(t.style.height) : null;
						this.editorHeight !== e && (this.hideTooltips(), this.editorHeight = e, e && this.props.onEditorResize && this.props.onEditorResize(e))
					}, this.insertValidatedMedia = () => {
						const {
							editorUploads: t,
							shouldOmitImageCaptionBlock: e
						} = this.props, {
							editorState: n,
							mediaToInsert: o
						} = this.state;
						if (!o) return;
						const {
							files: r,
							blockKey: s,
							insertionMode: i
						} = o, c = r.map(e => t.find(t => t.file === e)).filter(Boolean);
						this.setState({
							mediaToInsert: null
						});
						const a = c.filter(t => !!t.metadata.mimetype);
						a.length && this.onChange(Object(N.l)(n, a, s, i, e))
					}, this.focus = () => this.editorRef && this.editorRef.focus(), this.blur = () => this.editorRef && this.editorRef.blur(), this.isFocused = () => this.state.editorState.getSelection().getHasFocus(), this.isEmpty = () => !this.state.editorState.getCurrentContent().hasText(), this.setEditorRef = t => this.editorRef = t, this.setSuggestionDropdownApi = t => this.suggestionDropdownApi = t, this.setLinksControllerApi = t => this.linksControllerApi = t, this.setTableToolbarControllerApi = t => this.tableToolbarControllerApi = t, this.setEmotesTooltipApi = t => this.emotesTooltipApi = t, this.setGifTooltipApi = t => this.gifTooltipApi = t, this.setSuggestionDropdownPositionUpdater = t => this.updateSuggestionDropdownPosition = t, this.getEditorState = () => this.state.editorState, this.setEditorState = (t, e) => {
						const n = this.state.editorState.getCurrentContent() !== t.getCurrentContent();
						n && this.props.readOnly || (this.setState({
							editorState: t
						}, e), this.rteStateChanged(t, n))
					}, this.toolbarSetState = t => {
						const e = t.getInlineStyleOverride();
						let n = t;
						n.getSelection().getHasFocus() || (n = o.EditorState.forceSelection(n, n.getSelection()), e && (n = o.EditorState.setInlineStyleOverride(n, e))), this.onChange(n)
					}, this.onChange = (t, e) => {
						let n = t;
						n = Tn(n, this.state.editorState), n = Nt(n, this.props.editorType), this.emotesTooltipApi && (n = Object(xo.d)(n, this.state.editorState)), n = Vo(n, this.state.editorState), n = Object(rr.d)(n, this.state.editorState), this.setEditorState(n, e);
						let {
							suppressAutocompleteForLink: o
						} = this.state;
						if (o) {
							const e = Object(No.b)(t);
							e && e.entityKey === o || (o = null)
						}
						this.setState({
							suppressAutocompleteForLink: o
						}), this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1
					}, this.onFocus = () => {
						const {
							onFocus: t
						} = this.props;
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), t && (Object(ic.d)(ic.a.CommentComposer, !1), t())
					}, this.handleBeforeInput = t => {
						const {
							editorState: e
						} = this.state;
						if (this.isMouseDown) return pc;
						if (Lt(e, t)) return pc;
						let n = function(t, e) {
							const n = t.getSelection(),
								r = n.getFocusOffset();
							if (!n.isCollapsed() || 0 === r) return;
							const s = n.getFocusKey(),
								i = t.getCurrentContent(),
								c = i.getBlockForKey(s),
								a = c.getEntityAt(r - 1),
								l = c.getEntityAt(r);
							if (!(a && (!l || l !== a))) return;
							const d = i.getEntity(a),
								u = Lo.has(d.getType());
							if ("MUTABLE" === d.getMutability() && u) {
								const r = o.Modifier.insertText(i, n, e, t.getCurrentInlineStyle());
								return o.EditorState.push(t, r, "insert-characters")
							}
						}(e, t) || e;
						return (n = Sn(n, t) || n) !== e ? (this.onChange(n), pc) : hc
					}, this.keyBindingFN = t => {
						const {
							editorState: e
						} = this.state, {
							submitOnEnter: n
						} = this.props, r = e.getSelection();
						if (t.metaKey && t.keyCode === sc.a.K) return B.OPEN_LINK_TOOLTIP;
						if (t.keyCode === sc.a.Space) {
							if (nr(e)) return B.CONVERT_TO_LIST_ON_SPACE;
							if (Object(No.d)(e)) return B.LINKIFY_ON_SPACE
						} else if (t.keyCode === sc.a.Enter) {
							if (t.ctrlKey || t.metaKey || n && !t.shiftKey) return B.SUBMIT;
							if (t.shiftKey && tr(e)) return B.INSERT_LINE_BREAK; {
								const t = this.enterKeyBinding(e);
								if (t) return t
							}
						} else if (t.keyCode === sc.a.Backspace) {
							if (this.isJustLinkified || this.isJustConvertedToList) return K.h;
							if (r.isCollapsed()) {
								const t = e.getCurrentContent(),
									n = r.getEndKey(),
									o = r.getStartOffset(),
									s = t.getBlockForKey(n),
									i = s.getType();
								if ((Object(w.s)(i) || Object(w.q)(i) || Object(w.p)(i)) && 0 === o && s.getLength() > 0) {
									const e = t.getBlockBefore(n);
									if (!e || e.getType() !== i) return B.MAKE_PLAIN_BLOCK
								}
							}
						}
						return Object(o.getDefaultKeyBinding)(t)
					}, this.handleKeyCommand = t => {
						const {
							editorState: e
						} = this.state;
						let n = t,
							r = null;
						const s = t => {
							let e = t;
							if (r) {
								const {
									selection: t,
									url: n
								} = r;
								e = Object(No.f)(e, t, n)
							}
							return this.onChange(e), this.isJustLinkified = !!r, pc
						};
						if (n === B.SUBMIT) this.props.onSubmit();
						else {
							if (n === B.CONVERT_TO_LIST_ON_SPACE) {
								const t = s(or(e));
								return this.isJustConvertedToList = !0, t
							}
							if (n === B.LINKIFY_ON_SPACE) return r = Object(No.d)(e), s(Object(So.a)(e));
							if (n === B.LINKIFY_ON_ENTER && (r = Object(No.d)(e), !(n = this.enterKeyBinding(e, !1)))) return s(Object(So.d)(e))
						}
						if (n === B.OPEN_LINK_TOOLTIP) return this.onToolbarLinkButtonClick(), pc;
						if (n === B.MAKE_PLAIN_BLOCK) {
							return s(Object(So.i)(w.n, e))
						}
						if (n === B.EXEC_TABLE_ON_ENTER_HANDLER) return s(this.tableOnEnterHandler.handle(e));
						const i = this.transforms[n];
						if (i) {
							const t = i(e);
							if (t) return s(t)
						}
						const c = o.RichUtils.handleKeyCommand(e, n);
						return c ? s(c) : hc
					}, this.handleOnTab = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleTabInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent()) return void t.preventDefault();
						const {
							editorState: e
						} = this.state;
						let n = fn(t, e);
						if (n = n || Xo(t, e)) return void this.onChange(n);
						const r = o.RichUtils.onTab(t, e, 2);
						this.onChange(r)
					}, this.handleOnUpArrow = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleUpArrowInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.moveUp()) return void t.preventDefault();
						const e = bn(t, this.state.editorState) || Kt(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = _i.Up
					}, this.handleOnDownArrow = t => {
						if (this.suggestionDropdownApi && this.suggestionDropdownApi.moveDown()) return void t.preventDefault();
						const e = yn(t, this.state.editorState) || Mt(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = _i.Down
					}, this.handleReturn = t => {
						const e = _t(this.state.editorState);
						return e ? (this.onChange(e), t.preventDefault(), pc) : this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent() ? (t.preventDefault(), pc) : hc
					}, this.suppressAutocompleteForFocusedLink = () => {
						const t = Object(No.b)(this.state.editorState);
						t && this.state.suppressAutocompleteForLink !== t.entityKey && this.setState({
							suppressAutocompleteForLink: t.entityKey
						})
					}, this.handleEscape = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.handleEscapeKeyInEditor(), this.suppressAutocompleteForFocusedLink()
					}, this.handleOnCopy = t => {
						this.editorRef && kt(this.state.editorState, this.editorRef, t)
					}, this.handleOnCut = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (!kt(e, this.editorRef, t)) return;
						const n = lt(e) || It(e) || Object(N.e)(e);
						n && this.onChange(n)
					}, this.handleOnPaste = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (this.handleFilesPaste(t, e), t.isPropagationStopped()) return;
						const n = Hr(e, this.editorRef, t, this.props.editorType);
						n && this.onChange(n)
					}, this.handleFilesPaste = (t, e) => {
						if (!this.props.allowImageUploads && !this.props.allowVideoUploads) return void t.stopPropagation();
						const n = t.clipboardData.files;
						if (n && n.length) {
							const o = Array.from(n),
								r = e.getSelection().getEndKey();
							this.insertMediaFiles({
								files: o,
								blockKey: r,
								insertionMode: D.a.after,
								filesSource: O.FileSource.Clipboard
							}), t.stopPropagation()
						}
					}, this.handleOnMouseDown = t => {
						this.isMouseDown = !0
					}, this.handleOnMouseUp = t => {
						this.isMouseDown = !1
					}, this.handleDroppedFiles = (t, e) => pc, this.handleDrop = (t, e, n) => pc, this.handleBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.handlePastedText = (t, e) => pc, this.onInternalSuggestionSelected = t => {
						this.onChange(Object(No.g)(this.state.editorState, t)), this.isJustAutocompleteSelected = !0
					}, this.onToolbarEmoteButtonClick = t => {
						this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.emotesTooltipApi && this.emotesTooltipApi.toggleTooltip(t)
					}, this.onToolbarGifButtonClick = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.toggleTooltip(t)
					}, this.onToolbarLinkButtonClick = () => {
						if (!this.linksControllerApi) return;
						const {
							editorState: t
						} = this.state;
						this.linksControllerApi.editLinkInSelection(t.getSelection()) || Object(C.b)(void 0, "Current selection cannot be edited by link editor!")
					}, this.handleSwitchToMarkdownMode = () => {
						const {
							editorState: t
						} = this.state, {
							onSwitchEditorMode: e
						} = this.props, n = ks.a.toRichTextJSON({
							...this.props.rteState,
							isBound: !0,
							editorState: Object(N.c)(t)
						});
						e && e(R.i.MARKDOWN, n), this.state.confirmModalOpen && this.toggleConfirmModal()
					}, this.onToolbarMarkdownSwitchClick = () => {
						const {
							editorState: t
						} = this.state;
						t && Go(t) ? this.setState({
							confirmModalOpen: !0
						}) : this.handleSwitchToMarkdownMode()
					}, this.toggleConfirmModal = () => {
						this.setState({
							confirmModalOpen: !this.state.confirmModalOpen
						})
					}, this.insertMediaFiles = async t => {
						const {
							onFilesFilter: e,
							rteState: n,
							shouldUseGqlUploadLease: o,
							minImageDimension: r,
							editorType: s
						} = this.props, {
							files: i,
							filesSource: c
						} = t;
						let a = i;
						e && (a = e(i, this.state.editorState)), this.setState({
							mediaToInsert: {
								...t,
								files: a
							}
						});
						const l = a.slice(0, gc);
						await this.props.startUploads(l, c, n.editorKey, s === Wt.a.Post, o, r), this.insertValidatedMedia()
					}, this.onRetryUpload = t => {
						this.props.retryUpload(t, this.props.editorType === Wt.a.Post)
					}, this.onFilesSelect = t => {
						const {
							editorState: e
						} = this.state, n = e.getSelection().getEndKey();
						this.insertMediaFiles({
							files: t,
							blockKey: n,
							insertionMode: D.a.after,
							filesSource: O.FileSource.FileSelector
						})
					}, this.onFilesDrop = (t, e, n) => {
						this.props.onTrackMediaDrop(t), this.insertMediaFiles({
							files: t,
							blockKey: e,
							insertionMode: n,
							filesSource: O.FileSource.DragAndDrop
						})
					}, this.onBlockMove = (t, e, n) => {
						const {
							editorState: o
						} = this.state, r = Object(N.o)(o, t, e, n);
						r && this.onChange(r)
					}, this.getAtomicBlocksRenderConfig = () => ({
						component: sn,
						props: {
							getEditorState: this.getEditorState,
							onChange: this.onChange,
							onRetryUpload: this.onRetryUpload,
							rteFocusableContentRef: this.state.focusableContentRef,
							editorType: this.props.editorType
						}
					}), this.blockRendererFn = t => {
						const e = t.getType();
						return e === w.a ? this.getAtomicBlocksRenderConfig() : e in Ks ? Ks[e] : void 0
					}, this.renderToolbar = t => p.a.createElement(Ue.b, t), this.entityElementRegistry = Oo(), this.tableOnEnterHandler = new En;
					const {
						postId: e,
						isTypingIndicatorsWriteTestEnabled: n
					} = t;
					n && (this.realtimeGQLVariables = {
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "USER_IS_TYPING_ON_POST",
								postID: e
							}
						}
					});
					const {
						activeEmotes: r,
						editorType: s,
						noBorder: c,
						initialHeight: a,
						initialMinHeight: l,
						rteState: d
					} = t;
					let u;
					d.isBound ? u = d.editorState : Object(qn.I)(d.initialRTJSON) ? u = this.createInitialState(d.editorKey) : (u = o.EditorState.createWithContent(ec(d.initialRTJSON, s, d.mediaMetadataMap, r), this.editorDecorators()), u = this.moveSelectionToEnd(u)), this.state = {
						noBorder: c,
						containerRef: null,
						confirmModalOpen: !1,
						editorState: u,
						focusableContentRef: null,
						inited: !1,
						initialHeight: a,
						initialMinHeight: l,
						isUserTyping: !1,
						mediaToInsert: null,
						suppressAutocompleteForLink: null
					}
				}
				editorDecorators() {
					return new o.CompositeDecorator([wo(), ur(), Ho()])
				}
				moveSelectionToEnd(t) {
					const e = t.getCurrentContent().getBlockMap(),
						n = e.last().getKey(),
						r = e.last().getLength(),
						s = new o.SelectionState({
							anchorKey: n,
							anchorOffset: r,
							focusKey: n,
							focusOffset: r
						});
					return o.EditorState.acceptSelection(t, s)
				}
				createInitialState(t) {
					return o.EditorState.createWithContent(o.ContentState.createFromBlockArray([new o.ContentBlock({
						key: `${t}_initial`
					})]), this.editorDecorators())
				}
				componentDidMount() {
					if (this.props.rteRef && this.props.rteRef(this), y.a.write(Ls), this.rteStateChanged(this.state.editorState, !1), this.editorRef) {
						const t = this.editorRef.refs.editor;
						t.addEventListener("scroll", this.hideTooltips), this.editorRootStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorRootStyleMutationObserver.observe(t, {
							attributes: !0,
							attributeFilter: ["style"]
						})
					}
					const {
						destSubreddit: t,
						emotesSpecialMembershipEnabled: e,
						giphySpecialMembershipEnabled: n
					} = this.props;
					t && t.id && (e || n) && this.props.onFetchEditorProducts(t.id)
				}
				componentDidUpdate(t, e) {
					const n = this.getLinkForAutocomplete();
					if (n && this.updateSuggestionDropdownPosition) {
						const t = this.entityElementRegistry.get(n.entityKey);
						if (t) {
							const {
								left: e,
								bottom: n,
								height: o
							} = t.getBoundingClientRect();
							this.updateSuggestionDropdownPosition({
								left: e,
								top: n,
								bottom: n - o
							})
						}
					}
					this.needSyncScroll && (Mi(this.needSyncScroll), this.needSyncScroll = null)
				}
				componentWillUnmount() {
					if (this.props.rteRef && this.props.rteRef(null), this.insertValidatedMedia = () => {}, this.props.isTypingIndicatorsWriteTestEnabled && this.setUserStoppedTyping.cancel(), this.editorRef) {
						this.editorRef.refs.editor.removeEventListener("scroll", this.hideTooltips)
					}
					this.editorRootStyleMutationObserver && (this.editorRootStyleMutationObserver.disconnect(), this.editorRootStyleMutationObserver = null)
				}
				UNSAFE_componentWillReceiveProps(t) {
					t.rteState !== this.props.rteState && t.rteState.isBound && t.rteState.editorState !== this.state.editorState && this.setState({
						editorState: t.rteState.editorState
					})
				}
				shouldComponentUpdate(t, e) {
					if (e !== this.state) return !0;
					if (!(t.rteState.isBound && t.rteState.editorState === this.state.editorState)) return !0;
					return !f()(t, this.props, (t, e, n) => "rteState" === n || void 0)
				}
				enterKeyBinding(t) {
					let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					const n = t.getCurrentContent(),
						o = t.getSelection(),
						r = o.getStartKey(),
						s = o.getEndKey(),
						i = o.getEndOffset(),
						c = n.getBlockForKey(r).getType(),
						a = n.getBlockForKey(s),
						l = a.getType(),
						d = i === a.getText().length;
					if (c === w.l || l === w.l) return B.EXEC_TABLE_ON_ENTER_HANDLER;
					if (o.isCollapsed()) {
						if (e && Object(No.d)(t)) return B.LINKIFY_ON_ENTER;
						if (Object(w.r)(l) && d) return B.BREAK_HEADER_ENTITY;
						if (Object(w.s)(l)) {
							if (mc.test(a.getText())) return a.getDepth() > 0 ? B.REDUCE_LIST_INDENT : B.REMOVE_EXTRA_LIST_ITEM
						} else if (l === w.e) {
							const t = n.getBlockBefore(s);
							if (t && t.getType() === w.e && mc.test(t.getText()) && mc.test(a.getText())) return B.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						} else if (l === w.f) {
							const t = n.getBlockBefore(s),
								e = n.getBlockAfter(s);
							if (!a.getText() && t && t.getType() === w.f && !t.getText() && (!e || e.getType() !== w.f)) return B.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						}
					}
				}
				getLinkForAutocomplete() {
					const {
						editorState: t,
						suppressAutocompleteForLink: e
					} = this.state;
					if (!this.isJustAutocompleteSelected && t.getSelection().getHasFocus()) {
						const n = Object(No.b)(t);
						if (n && n.entityKey !== e) return n
					}
				}
				renderInternalLinkSuggestionDropdown() {
					const {
						isChatPost: t
					} = this.props, e = this.getLinkForAutocomplete();
					return e ? p.a.createElement(Fn.b, {
						aboveParent: t,
						dropdown: !0,
						onSetPositionUpdater: this.setSuggestionDropdownPositionUpdater
					}, e.entityText.startsWith(S.f) && p.a.createElement(Zs, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					}), S.a.test(e.entityText) && p.a.createElement(ni, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					})) : null
				}
				render() {
					const {
						className: t,
						userCanUseEmojis: e,
						userCanUseGifs: n,
						allowImageUploads: s = !1,
						allowVideoUploads: i = !1,
						dataTestId: c,
						destSubreddit: a,
						editorType: l,
						focusableContentRTEClassName: u,
						hideToolbar: h,
						rteState: m,
						isExpanded: g,
						isOverlay: f,
						isCommentBoxDesignEnabled: y,
						onSubmit: E,
						placeholderText: S,
						shouldShowCommentGifsTooltip: C,
						showSubmitButton: O = !1,
						submitButtonClassName: T,
						toolbarPosition: x = "top",
						renderToolbar: v = this.renderToolbar,
						isTypingIndicatorsWriteTestEnabled: j
					} = this.props, {
						editorKey: R
					} = m, {
						containerRef: w,
						editorState: B,
						mediaToInsert: _,
						confirmModalOpen: K,
						isUserTyping: M
					} = this.state, L = this.props.readOnly || !!_, N = I(B), D = this.isEmpty(), F = v({
						allowImageUploads: s,
						allowVideoUploads: i,
						destSubreddit: a,
						editorKey: R,
						editorState: B,
						isOverlay: !!f,
						onChange: this.toolbarSetState,
						onFilesSelect: this.onFilesSelect,
						trackOnClick: this.props.trackToolbarClick,
						readOnly: L,
						onEmoteButtonClick: this.onToolbarEmoteButtonClick,
						onGifButtonClick: this.onToolbarGifButtonClick,
						onLinkButtonClick: this.onToolbarLinkButtonClick,
						onMarkdownButtonClick: this.onToolbarMarkdownSwitchClick,
						userCanUseEmojis: !!e,
						userCanUseGifs: !!n
					}), P = !h && (!y || g);
					return p.a.createElement(bc, {
						className: t,
						innerRef: this.setContainerRef
					}, j && M && p.a.createElement(k.a, {
						variables: this.realtimeGQLVariables,
						onData: d.a,
						queryKey: "userIsTypingOnPost"
					}), y && p.a.createElement("div", {
						className: dc.a.userIcon
					}, p.a.createElement(yc, null)), p.a.createElement(fc, {
						className: Object(b.a)(u, {
							[dc.a.showSubmitButton]: O,
							[dc.a.mExpanded]: g,
							[dc.a.mRedesign]: y
						}),
						noBorder: this.props.noBorder,
						isFocused: this.isFocused(),
						ref: this.setFocusableContentRef
					}, P && "top" === x && F, w && p.a.createElement(Eo, {
						editorState: B,
						readOnly: L,
						onChange: this.onChange,
						onSetApi: this.setTableToolbarControllerApi,
						rteDomRef: w
					}), p.a.createElement("div", {
						className: Object(b.a)(dc.a.editorWrapper, {
							[dc.a.hasInitialHeight]: !!this.props.initialHeight,
							[dc.a.hasInitialMinHeight]: !!this.props.initialMinHeight,
							[dc.a.noBorder]: !!this.props.noBorder
						}),
						style: {
							"--rte-initial-height": this.props.initialHeight ? `${this.props.initialHeight}px` : void 0,
							"--rte-initial-min-height": this.props.initialMinHeight ? `${this.props.initialMinHeight}px` : void 0
						},
						"data-test-id": c,
						onCopyCapture: this.handleOnCopy,
						onCutCapture: this.handleOnCut,
						onPasteCapture: this.handleOnPaste,
						onMouseDown: this.handleOnMouseDown,
						onMouseUp: this.handleOnMouseUp
					}, p.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n                .${rc.b}[${rc.d}="${N}-0-0"]::after {\n                  bottom: 0;\n                  color: var(--newCommunityTheme-actionIcon);\n                  content: '${S}';\n                  cursor: text;\n                  left: 0;\n                  position: absolute;\n                  top: 0;\n                }\n              `
						}
					}), p.a.createElement(wr, {
						allowMediaUploads: (s || i) && !L,
						onBlockMove: this.onBlockMove,
						onFilesDrop: this.onFilesDrop,
						editorState: B,
						onChange: this.onChange
					}, p.a.createElement(ko.Provider, {
						value: this.entityElementRegistry
					}, p.a.createElement(o.Editor, {
						readOnly: L,
						ref: this.setEditorRef,
						blockRendererFn: this.blockRendererFn,
						blockRenderMap: this.blockRenderMap,
						editorKey: R,
						editorState: B,
						keyBindingFn: this.keyBindingFN,
						handleBeforeInput: this.handleBeforeInput,
						handleKeyCommand: this.handleKeyCommand,
						handlePastedText: this.handlePastedText,
						handleDroppedFiles: this.handleDroppedFiles,
						handleDrop: this.handleDrop,
						onBlur: this.handleBlur,
						onChange: this.onChange,
						onFocus: this.onFocus,
						onTab: this.handleOnTab,
						onUpArrow: this.handleOnUpArrow,
						onDownArrow: this.handleOnDownArrow,
						onEscape: this.handleEscape,
						spellCheck: !0,
						handleReturn: this.handleReturn,
						customStyleMap: vs()
					})))), P && "bottom" === x && F, p.a.createElement(ms, {
						containerRef: w,
						editorState: B,
						entityElementRegistry: this.entityElementRegistry,
						onSetApi: this.setLinksControllerApi,
						onChange: this.onChange
					}), l === Wt.a.Comment && a && p.a.createElement(Mo, {
						editorState: B,
						onChange: this.onChange,
						onSetApi: this.setEmotesTooltipApi,
						subreddit: a,
						userCanUseEmojis: !!e
					}), (C || n) && a && p.a.createElement(ir, {
						editorState: B,
						onChange: this.onChange,
						onSetApi: this.setGifTooltipApi,
						subreddit: a,
						userCanUseGifs: !!n
					}), this.renderInternalLinkSuggestionDropdown(), O && p.a.createElement(re.e, {
						"aria-label": r.fbt._("submit", null, {
							hk: "12XoZ8"
						}),
						className: Object(b.a)(T, dc.a.insetSubmitButton, {
							[dc.a.emptyContent]: D,
							[dc.a.focusedContent]: this.isFocused()
						}),
						disabled: D,
						onClick: E,
						tabIndex: -1,
						type: "submit"
					}, p.a.createElement(cc.a, null))), K && p.a.createElement(A.a, {
						toggleModal: this.toggleConfirmModal,
						onConfirm: this.handleSwitchToMarkdownMode,
						actionText: r.fbt._("Continue", null, {
							hk: "3aoEeD"
						}),
						cancelActionText: r.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: r.fbt._("Switch to Markdown", null, {
							hk: "3zGkKa"
						}),
						modalText: l === Wt.a.Comment ? r.fbt._("Switching to markdown will remove any image or GIF from your comment.", null, {
							hk: "3v46Jt"
						}) : r.fbt._("Switching to markdown will remove any images, gifs or videos from your post.", null, {
							hk: "3rlwkB"
						}),
						trackClick: () => {}
					}))
				}
			}
			e.a = Sc(Object(Us.b)(t => p.a.createElement(Cc, uc({
				key: t.rteState.editorKey
			}, t))))
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less": function(t, e, n) {
			t.exports = {
				Img: "_1gJwMe53cjYITkMu0Ve8j-",
				img: "_1gJwMe53cjYITkMu0Ve8j-",
				Component: "_3VYFd7PKhTJ-0i22YsgFPv",
				component: "_3VYFd7PKhTJ-0i22YsgFPv"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less": function(t, e, n) {
			t.exports = {
				Message: "_3cyJHYsdZdz4RWdmrzyYx-",
				message: "_3cyJHYsdZdz4RWdmrzyYx-",
				Component: "_3JSUHg1gLhxUj4PB_Pgw8a",
				component: "_3JSUHg1gLhxUj4PB_Pgw8a"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less": function(t, e, n) {
			t.exports = {
				buttonBaseStyles: "_3R1ajPuzbs2MdbXedj3YXU",
				ControlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				controlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				ButtonsContainer: "dZ3F6qSOhun6ezUwcnbal",
				buttonsContainer: "dZ3F6qSOhun6ezUwcnbal",
				Button: "_2rIEdliEXr7qNb-COL-zuO",
				button: "_2rIEdliEXr7qNb-COL-zuO",
				ErrButton: "_3CUr1530H3uD-ts9tKd9RA",
				errButton: "_3CUr1530H3uD-ts9tKd9RA",
				Status: "jXuqxr-x0kyU3BSfugjwM",
				status: "jXuqxr-x0kyU3BSfugjwM",
				hasError: "_4XwI6tILia1pR9HTda4wv",
				ProgressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				progressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				ProgressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				progressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				ErrorLine: "_3M-thbkBHHvsWjDt8edbhz",
				errorLine: "_3M-thbkBHHvsWjDt8edbhz",
				Component: "_1CqupI5I-zzAInIdLwphQg",
				component: "_1CqupI5I-zzAInIdLwphQg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less": function(t, e, n) {
			t.exports = {
				VideoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				videoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				PosterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				posterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				Poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				Component: "wSihDBKVJH6iP2jdDjRQ6",
				component: "wSihDBKVJH6iP2jdDjRQ6",
				playButton: "il4HPAfKcVtq-WQY-if85"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less": function(t, e, n) {
			t.exports = {
				statusBar: "_33CSkXq7gXeXCM2zSal9BN",
				container: "_1FMEfWD94pPZ_HdEN_e7Xy",
				isCompact: "_3-T8BPflZuKw_F2VRPDbcX",
				isUploaded: "_3Lj2c902Oeb7yL_jYu9v5L",
				isSelected: "Eaps2a9y_jwhKHth8v14G",
				imagePreview: "_2nlrFrYbO0bIKFeZ3HMbn_",
				placeholder: "_1-LSy7nvfNGWVhRWwwQu6A",
				videoPreview: "_2MumquPHY8gruoy6114twC",
				alignCenter: "_3U9f0TNBM1K2bggm3KMHTk",
				renderSmallMedia: "_3L8V1OmRzcZEzmJFdJV6dS"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less": function(t, e, n) {
			t.exports = {
				HiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg",
				hiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_3hDtN0e5U4EpahGe25ye-b",
				alignCenter: "Vh7FGvkGyl5SeyJP4J1GG",
				content: "_3wXzBVn-uBvRcixZwQWkNX",
				multiButtonToolbarContent: "_4g7-oW_EplZpFIKv75-Lu",
				FormatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				formatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				ToolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ",
				toolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less": function(t, e, n) {
			t.exports = {
				MediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				mediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				Container: "DK9d46mm9FgC8mFWPGlG_",
				container: "DK9d46mm9FgC8mFWPGlG_"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less": function(t, e, n) {
			t.exports = {
				wrapper: "_2eZK2IABgFqGZLMYPxwoNY"
			}
		},
		"./src/reddit/components/RichTextEditor/media/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "q", (function() {
				return b
			})), n.d(e, "h", (function() {
				return y
			})), n.d(e, "r", (function() {
				return E
			})), n.d(e, "l", (function() {
				return S
			})), n.d(e, "k", (function() {
				return C
			})), n.d(e, "n", (function() {
				return O
			})), n.d(e, "p", (function() {
				return k
			})), n.d(e, "d", (function() {
				return x
			})), n.d(e, "c", (function() {
				return v
			})), n.d(e, "e", (function() {
				return j
			})), n.d(e, "m", (function() {
				return w
			})), n.d(e, "g", (function() {
				return B
			})), n.d(e, "j", (function() {
				return I
			})), n.d(e, "i", (function() {
				return _
			})), n.d(e, "o", (function() {
				return A
			})), n.d(e, "b", (function() {
				return K
			})), n.d(e, "f", (function() {
				return L
			}));
			var o, r = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./node_modules/lodash/flatten.js"),
				c = n.n(i),
				a = n("./node_modules/lodash/last.js"),
				l = n.n(a),
				d = n("./src/reddit/helpers/media/index.ts"),
				u = n("./src/reddit/helpers/richTextEditor/index.ts"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/models/Upload/index.ts"),
				m = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				g = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				f = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(t) {
				t[t.Image = 0] = "Image", t[t.AnimatedImage = 1] = "AnimatedImage", t[t.Video = 2] = "Video"
			}(o || (o = {}));
			const b = t => t !== u.a.Comment,
				y = t => {
					if (!Object(f.o)(t.getType())) return;
					const e = t.getData(),
						n = e.get("mediaAsset"),
						o = e.get("uploadInfo");
					if (!n && !o) return;
					const r = e.get("thumbnail");
					return {
						makeGif: e.get("makeGif"),
						thumbnail: r,
						uploadInfo: o,
						mediaAsset: n
					}
				},
				E = (t, e, n) => {
					let o = t.getCurrentContent();
					const i = o.getBlockForKey(e),
						c = y(i),
						a = c && c.uploadInfo;
					if (!a) throw new Error("Block must contain `uploadInfo` data");
					if (n.makeGif === c.makeGif && n.thumbnail === c.thumbnail) return t;
					const l = Object(s.Map)(n),
						d = o.getBlockMap().toKeyedSeq().filter(t => {
							const e = y(t);
							return !!e && !!e.uploadInfo && e.uploadInfo.uploadKey === a.uploadKey
						}).map(t => t.mergeIn(["data"], l));
					return o = (o = o.mergeIn(["blockMap"], d)).merge({
						selectionAfter: t.getSelection()
					}), r.EditorState.push(t, o, m.b)
				},
				S = (t, e, n, o, i) => {
					let a = t.getCurrentContent();
					const u = c()(e.map(t => {
						const e = Object(d.g)(t.metadata.mimetype),
							n = (t => {
								if (t && t.metadata.videoFirstFrameUrl) {
									return {
										url: t.metadata.videoFirstFrameUrl,
										time: 0
									}
								}
							})(t),
							o = new r.ContentBlock({
								key: Object(r.genKey)(),
								type: f.a,
								data: Object(s.Map)({
									uploadInfo: {
										mediaType: e,
										uploadKey: t.key
									},
									thumbnail: n
								})
							}),
							c = new r.ContentBlock({
								key: Object(r.genKey)(),
								type: f.j
							});
						return i ? [o] : [o, c]
					}));
					a = Object(g.f)(a, n, u, o);
					const p = r.EditorState.push(t, a, m.e),
						h = l()(u);
					return r.EditorState.forceSelection(p, Object(g.b)(h, !0))
				},
				C = (t, e, n, i, c, a, l, d) => {
					const u = new r.ContentBlock({
							key: Object(r.genKey)(),
							type: f.a,
							data: Object(s.Map)({
								mediaAsset: {
									type: o.AnimatedImage,
									assetId: Object(p.c)(e, i),
									imageUrl: n,
									width: c,
									height: a
								}
							})
						}),
						h = Object(g.f)(t.getCurrentContent(), l, [u], d);
					let b = r.EditorState.push(t, h, m.e);
					b = r.EditorState.forceSelection(b, Object(g.b)(u, !0));
					const y = u.getKey();
					return b.getCurrentContent().getBlockAfter(y) || (b = K(b, y)), b
				};

			function O(t, e) {
				return t.isCollapsed() && t.getStartKey() === e && 0 === t.getStartOffset() && 0 === t.getEndOffset()
			}

			function k(t, e) {
				const n = t.getCurrentContent().getBlockAfter(e);
				return r.EditorState.forceSelection(t, Object(g.b)(n, !0))
			}
			const T = (t, e) => {
					const n = t.getBlockAfter(e);
					return t = Object(g.i)(t, e), n && Object(f.u)(n.getType()) && (t = Object(g.i)(t, n.getKey())), t
				},
				x = function(t, e) {
					let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
						o = t.getCurrentContent();
					o = T(o, e);
					let s = n ? r.EditorState.push(t, o, m.f) : r.EditorState.set(t, {
						currentContent: o
					});
					return s = r.EditorState.forceSelection(s, o.getSelectionAfter())
				},
				v = t => {
					let e = t.getCurrentContent();
					R(e).forEach(t => {
						e = T(e, t.getKey())
					});
					const n = r.EditorState.push(t, e, m.f);
					return r.EditorState.forceSelection(n, e.getSelectionAfter())
				},
				j = t => {
					let e = t.getCurrentContent();
					const n = t.getSelection();
					e = r.Modifier.removeRange(e, n, "forward");
					let o = r.EditorState.push(t, e, m.f);
					return o = r.EditorState.forceSelection(o, e.getSelectionAfter())
				},
				R = t => t.getBlockMap().toSeq().filter(t => !!t && !!y(t)),
				w = (t, e) => t.getBlockMap().toSeq().filter(t => {
					const n = y(t),
						o = n && n.uploadInfo && n.uploadInfo.uploadKey;
					return !(!o || e[o] && e[o].url)
				}).isEmpty(),
				B = t => {
					const e = R(t),
						n = {
							gifvideo: 0,
							image: 0,
							video: 0,
							total: 0
						};
					return e.forEach(t => {
						const e = y(t);
						let r;
						r = e.makeGif ? "gifvideo" : e.uploadInfo && "video" === e.uploadInfo.mediaType || e.mediaAsset && e.mediaAsset.type === o.Video ? "video" : "image", n[r]++, n.total++
					}), n
				},
				I = t => !R(t).isEmpty(),
				_ = (t, e) => {
					const n = R(t).map(t => {
						const n = y(t),
							{
								uploadInfo: o,
								thumbnail: r
							} = n;
						if (!o || !r) return;
						const s = M(n),
							i = e[s];
						return i && i.url ? void 0 : {
							...r,
							uploadKey: s
						}
					}).filter(Boolean).toArray();
					return n.length ? n : void 0
				},
				A = (t, e, n, o) => {
					let s = t.getCurrentContent();
					const i = s.getBlockForKey(e),
						c = s.getBlockAfter(e),
						a = [i];
					if (c && Object(f.u)(c.getType()) && a.push(c), a.find(t => t.getKey() === n)) return;
					const d = a.reduce((t, e) => t.remove(e.getKey()), s.getBlockMap());
					s = s.set("blockMap", d), s = Object(g.f)(s, n, a, o);
					const u = r.EditorState.push(t, s, m.e);
					return r.EditorState.forceSelection(u, Object(g.b)(l()(a), !0))
				},
				K = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.a.after;
					const o = Object(g.h)(),
						s = Object(g.f)(t.getCurrentContent(), e, [o], n),
						i = r.EditorState.push(t, s, m.e);
					return r.EditorState.forceSelection(i, r.SelectionState.createEmpty(o.getKey()))
				},
				M = t => t.thumbnail && t.uploadInfo ? `${t.uploadInfo.uploadKey}-thumbnail-${t.thumbnail.time}` : "",
				L = (t, e) => {
					let n = "",
						o = "";
					if (t.uploadInfo) {
						const {
							uploadKey: r
						} = t.uploadInfo, s = e[r];
						s && s.url && (n = Object(h.b)(s.url));
						const i = e[M(t)];
						i && i.url && (o = Object(h.b)(i.url))
					}
					return {
						assetId: n,
						thumbnailAssetId: o
					}
				}
		},
		"./src/reddit/components/RichTextEditor/spoiler/decorator.m.less": function(t, e, n) {
			t.exports = {
				spoiler: "_1AlhnBqYYVTQbTr33YViyK"
			}
		},
		"./src/reddit/components/RichTextEditor/spoiler/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return s
			})), n.d(e, "a", (function() {
				return i
			}));
			var o = n("./src/lib/forEachGroup/index.ts"),
				r = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const s = t => t.getStyle().has(r.k.SPOILER);

			function i(t, e, n) {
				const r = t.getCharacterList();
				Object(o.a)(r, {
					keyFn: s
				}, (t, n, o, r) => {
					n && e(o, r)
				})
			}
		},
		"./src/reddit/components/RichTextEditor/table/Renderer/index.m.less": function(t, e, n) {
			t.exports = {
				Cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				Row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				Table: "_9QFGu47IyMX1ID1xQid-8",
				table: "_9QFGu47IyMX1ID1xQid-8",
				isFakeSelectionActive: "_1QXaG0_iXh-LFDkah9HqP3"
			}
		},
		"./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				formatterButton: "_1dNavKEU0lSO4mo9fYWTPm",
				ToolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				toolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				tooltip: "_3fnB5glctifL-mkYhH6aA1"
			}
		},
		"./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less": function(t, e, n) {
			t.exports = {
				ActionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				actionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				isPressed: "_2WwwYG59S_TJRq7FSdTVKK",
				ToolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9",
				toolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9"
			}
		},
		"./src/reddit/components/RichTextEditor/table/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return a
			})), n.d(e, "g", (function() {
				return l
			})), n.d(e, "m", (function() {
				return u
			})), n.d(e, "n", (function() {
				return p
			})), n.d(e, "j", (function() {
				return h
			})), n.d(e, "l", (function() {
				return m
			})), n.d(e, "f", (function() {
				return g
			})), n.d(e, "k", (function() {
				return f
			})), n.d(e, "c", (function() {
				return b
			})), n.d(e, "h", (function() {
				return y
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "i", (function() {
				return S
			})), n.d(e, "e", (function() {
				return C
			})), n.d(e, "o", (function() {
				return O
			})), n.d(e, "d", (function() {
				return k
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/reddit/models/RichTextJson/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const a = {
					[s.e]: "left",
					[s.f]: "right",
					[s.d]: "center"
				},
				l = t => {
					const e = t.getData();
					return {
						colIndex: e.get("colIndex"),
						rowIndex: e.get("rowIndex"),
						colCount: e.get("colCount"),
						alignment: e.get("alignment")
					}
				},
				d = ["data"],
				u = (t, e) => t.mergeIn(d, e),
				p = (t, e, n) => t.merge({
					text: t.getText().slice(e, n),
					characterList: t.getCharacterList().slice(e, n)
				}),
				h = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
						r = arguments.length > 3 ? arguments[3] : void 0;
					const s = e.map(t => t.getText()).join(n),
						i = n ? r || o.CharacterMetadata.create() : null,
						c = [];
					return e.forEach(t => {
						c.push(...t.getCharacterList().toArray()), i && e.length > 1 && c.push(i)
					}), t.merge({
						text: s,
						characterList: c
					})
				},
				m = (t, e) => {
					const n = [];
					for (let s = 0; s < e; s++)
						for (let e = 0; e < t; e++) n.push(new o.ContentBlock({
							key: Object(o.genKey)(),
							type: c.l,
							data: Object(r.Map)({
								colCount: t,
								colIndex: e,
								rowIndex: s
							})
						}));
					return n
				},
				g = (t, e) => ({
					minCol: Math.min(t.colIndex, e.colIndex),
					minRow: Math.min(t.rowIndex, e.rowIndex),
					maxCol: Math.max(t.colIndex, e.colIndex),
					maxRow: Math.max(t.rowIndex, e.rowIndex)
				}),
				f = (t, e) => {
					const {
						minCol: n,
						minRow: o,
						maxCol: r,
						maxRow: s
					} = g(t, e);
					return (t, e) => o <= t && t <= s && n <= e && e <= r
				},
				b = (t, e) => t.rowIndex < e.rowIndex ? -1 : t.rowIndex > e.rowIndex ? 1 : t.colIndex - e.colIndex,
				y = (t, e) => t === e || !(!t || !e) && 0 === b(t, e),
				E = (t, e) => b(l(t), l(e)),
				S = t => {
					if (Object(c.v)(t.getType())) {
						return 0 === l(t).rowIndex
					}
					return !1
				},
				C = (t, e, n) => {
					const o = (e, n) => {
						if (e) {
							const o = Object(i.a)(t, e);
							return o && n && -1 !== o.blocks.indexOf(n) ? [o, o] : [o, n ? Object(i.a)(t, n) : null]
						}
						return n ? o(n, null).reverse() : [null, null]
					};
					return o(Object(c.v)(e.getType()) ? e : null, Object(c.v)(n.getType()) ? n : null)
				},
				O = function(t, e, n) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					const r = {
						isBackward: o
					};
					return e && (r.anchorKey = e.getKey(), r.anchorOffset = o ? e.getLength() : 0), n && (r.focusKey = n.getKey(), r.focusOffset = o ? 0 : n.getLength()), t.merge(r)
				},
				k = t => {
					if (!t.length) return [];
					const e = t[0].length;
					return t.map((t, n) => t.map((t, o) => u(t, {
						rowIndex: n,
						colIndex: o,
						colCount: e
					})))
				}
		},
		"./src/reddit/components/ThumbnailSelector/index.m.less": function(t, e, n) {
			t.exports = {
				Component: "uqOt5KqJAqw5pe-WNxa0a",
				component: "uqOt5KqJAqw5pe-WNxa0a",
				TitleRow: "HEiFtUR3s93dQ2jUWWnxr",
				titleRow: "HEiFtUR3s93dQ2jUWWnxr",
				Close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				CloseWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				closeWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				ThumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				thumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				Image: "_2H32szY9NZ1aKr6j4Ced7u",
				image: "_2H32szY9NZ1aKr6j4Ced7u",
				thumbnail: "_2Ks8P6YD1-8_Ju3IrYpPJf",
				isSelected: "_3oA67AGI49fKcqDP970t4U",
				ButtonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				buttonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				CancelButton: "mBq3crGX9-xOOg-b-1V85",
				cancelButton: "mBq3crGX9-xOOg-b-1V85"
			}
		},
		"./src/reddit/components/ThumbnailSelector/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/debounce.js"),
				s = n.n(r),
				i = n("./node_modules/lodash/range.js"),
				c = n.n(i),
				a = n("./node_modules/react/index.js"),
				l = n.n(a),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/higherOrderComponents/asModal/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/media/index.ts"),
				g = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/components/ThumbnailSelector/index.m.less"),
				E = n.n(y);
			const S = 10,
				C = Object(p.a)(u.a.div("Component", E.a)),
				O = u.a.wrapped(b.a, "TitleRow", E.a),
				k = u.a.wrapped(f.a, "Close", E.a),
				T = u.a.div("CloseWrapper", E.a),
				x = u.a.div("ThumbnailsContainer", E.a),
				v = u.a.img("Image", E.a),
				j = t => l.a.createElement("div", {
					className: Object(d.a)(E.a.thumbnail, Object(g.a)({
						isLoading: t.isLoading
					}), {
						[E.a.isSelected]: t.isSelected
					}),
					onClick: t.onClick,
					ref: t.elementRef
				}, t.thumbnail.url && l.a.createElement(v, {
					src: t.thumbnail.url
				})),
				R = u.a.wrapped(b.a, "ButtonRow", E.a),
				w = h.l,
				B = u.a.wrapped(h.o, "CancelButton", E.a),
				I = (t, e) => {
					if (1 === t) return [0];
					const n = c()(0, e, e / (t - 1));
					return n.push(e), n.map(t => +t.toFixed(2))
				};
			class _ extends l.a.Component {
				constructor(t) {
					super(t), this.isThumbnailsAreGenerating = !1, this.setSelectedElementRef = t => this.selectedElement = t, this.setThumbnails = s()(t => this.setState({
						thumbnails: t
					}), 100), this.scrollIntoView = () => {
						this.selectedElement && this.selectedElement.scrollIntoView({})
					}, this.setSelected = t => {
						this.setState({
							selectedIndex: t
						})
					}, this.onSelectButton = () => {
						const {
							selectedIndex: t
						} = this.state, e = this.state.thumbnails[t];
						this.props.onSelect({
							time: e.time,
							url: e.url
						})
					};
					const {
						thumbnailsCount: e = S,
						selected: n,
						videoDuration: o
					} = this.props, r = I(e, o).map(t => ({
						time: t,
						url: n && n.time === t ? n.url : void 0
					})), i = n ? r.findIndex(t => n.time === t.time) : -1;
					this.state = {
						thumbnails: r,
						selectedIndex: i
					}
				}
				componentDidMount() {
					this.scrollIntoView(), this.props.isOpen && this.generateVideoThumbnails()
				}
				componentDidUpdate(t) {
					this.props.isOpen && !t.isOpen && (this.scrollIntoView(), this.generateVideoThumbnails())
				}
				async generateVideoThumbnails() {
					const {
						thumbnails: t
					} = this.state;
					if (this.isThumbnailsAreGenerating || !t.find(t => !t.url)) return;
					this.isThumbnailsAreGenerating = !0;
					const e = document.createElement("video"),
						n = document.createElement("canvas");
					await Object(m.q)(e, this.props.videoSource);
					let o = 0;
					e.currentTime = t[o].time, await Object(m.e)(e, n, e => (t[o].url = e.dataUrl, o++, this.setThumbnails(t), o < t.length ? t[o].time : null)), this.setState({
						thumbnails: t
					}), this.isThumbnailsAreGenerating = !1
				}
				render() {
					if (!this.props.isOpen) return null;
					const {
						selectedIndex: t,
						thumbnails: e
					} = this.state;
					return l.a.createElement(C, {
						withOverlay: !0
					}, l.a.createElement(O, null, o.fbt._("Choose thumbnail", null, {
						hk: "XlI0H"
					}), l.a.createElement(T, {
						onClick: this.props.onToggleModal
					}, l.a.createElement(k, null))), l.a.createElement(x, null, e.map((e, n) => l.a.createElement(j, {
						key: n,
						elementRef: n === t ? this.setSelectedElementRef : void 0,
						isLoading: !e.url,
						onClick: () => this.setSelected(n),
						isSelected: n === t,
						thumbnail: e
					}))), l.a.createElement(R, null, l.a.createElement(B, {
						onClick: this.props.onToggleModal
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), l.a.createElement(w, {
						onClick: this.onSelectButton
					}, o.fbt._("Select", null, {
						hk: "3s53WD"
					}))))
				}
			}
			e.a = _
		},
		"./src/reddit/components/UsersCountIndicator/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return s
			})), n.d(e, "d", (function() {
				return i
			})), n.d(e, "e", (function() {
				return c
			})), n.d(e, "f", (function() {
				return a
			})), n.d(e, "g", (function() {
				return l
			}));
			const o = 5,
				r = 2,
				s = 1e4,
				i = 2e3,
				c = 3e4,
				a = 1e4,
				l = 2
		},
		"./src/reddit/controls/SubredditDropdown/index.m.less": function(t, e, n) {
			t.exports = {
				entry: "BR2J4z5ndMj6r3-QW2hHI",
				mIsFocused: "_2KXTnIrbZ1Fr5F4nZyXeKS",
				list: "_17g61LC45mhwjs-g79qbZK"
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			const s = (t, e) => Object(r.a)(t, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: e.productId,
							quantity: "1"
						}],
						subredditId: e.subredditId
					}
				}),
				i = (t, e) => Object(r.a)(t, {
					method: "get",
					endpoint: `${o.a.metaUrl}/product-collections/${e}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return l
			})), n.d(e, "b", (function() {
				return d
			})), n.d(e, "d", (function() {
				return u
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "c", (function() {
				return h
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				c = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/communities/${e.subredditId}/me`,
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function d(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: e && e.username
					}
				})
			}

			function u(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: e.trial ? "0" : e.price,
						products: [{
							productId: e.productId,
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: e.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: e.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: e.username
						}
					}
				})
			}

			function p(t, e) {
				return Object(i.a)(Object(r.a)(t, [s.a]), {
					endpoint: `${t.apiUrl}/api/info?id=${e.join(",")}`,
					method: "get"
				}).then(t => {
					if (t.ok) {
						const e = t.body.data.children.map(t => {
							let {
								data: e
							} = t;
							return Object(a.a)(e)
						}).reduce((t, e) => (t[e.id] = e, t), {});
						return {
							...t,
							body: e
						}
					}
					return t
				})
			}
			async function h(t, e) {
				const n = await Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						...e,
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					}
				});
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(c.b)(n.error)}`);
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return d
			})), n.d(e, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				r = n.n(o),
				s = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/badges.ts"),
				c = n("./src/reddit/endpoints/governance/community.ts"),
				a = n("./src/reddit/endpoints/governance/products/badges.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			async function d(t, e, n) {
				const o = {
						subredditId: e,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					d = function(t, e) {
						return Object(l.a)(t, {
							method: "get",
							endpoint: `${s.a.metaUrl}/product-collections/${e}?types=badge`
						})
					}(t, e),
					u = Object(c.a)(t, {
						subredditId: e
					}),
					p = Object(a.b)(t, e),
					h = Object(i.c)(t, e, n),
					[m, g, f, b] = await Promise.all([d, u, p, h]);
				if (m.ok ? o.collections = m.body : o.errors.collections = m.error, g.ok) {
					const t = g.body;
					o.subscription = t.specialMemberships, o.communityRaw = t
				}
				return f.ok ? o.products = f.body : o.errors.products = f.error, b.ok ? (r()(o.badges, b.body.badges), o.userOwnedBadges = b.body.userOwnedBadges) : o.errors.userBadges = b.error, o
			}
			const u = (t, e) => Object(l.a)(t, {
				endpoint: `${s.a.metaUrl}/products/${e}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function i(t, e) {
				return Object(s.a)(t, {
					endpoint: `${o.a.metaUrl}/communities/${e.subredditId}/me`,
					method: r.ob.GET
				})
			}
		},
		"./src/reddit/helpers/richTextEditor/index.ts": function(t, e, n) {
			"use strict";
			var o;
			n.d(e, "a", (function() {
					return o
				})),
				function(t) {
					t[t.Post = 0] = "Post", t[t.Comment = 1] = "Comment"
				}(o || (o = {}))
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1ZVHRoTDdo57082D2GcC80"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				c = n.n(i);
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, r.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM7.42 16h5.08c.55 0 1-.45 1-1s-.45-1-1-1H7.42c-.56 0-1 .45-1 1s.44 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_33vXt91MK_ualpifvvw_3v"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				c = n.n(i);
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, r.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 16h5.4c.54 0 1-.45 1-1s-.46-1-1-1H3.5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_34rYEsgbWk8eOQx_bs7fTV"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				c = n.n(i);
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, r.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM11.5 16h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_8Y1-XP7A1OOfoU_mUqKcg"
			}
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				c = n.n(i);
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: "vertical" === t.orientation ? "rotate(90, 10, 10)" : ""
			}, r.a.createElement("path", {
				d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
			}), r.a.createElement("path", {
				d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
			}), r.a.createElement("path", {
				d: "M8.6 7.17l4.23 4.24c.4.4.4 1.04 0 1.43-.4.4-1.03.4-1.42 0L7.18 8.6c-.4-.4-.4-1.04 0-1.43.4-.4 1.03-.4 1.42 0z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1PNKgIKbpvIWTVU3LO0PJQ"
			}
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				c = n.n(i);
			const a = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: a[t.orientation || "down"]
			}, r.a.createElement("path", {
				d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
			}), r.a.createElement("path", {
				d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
			}), r.a.createElement("path", {
				d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			e.a = t => r.a.createElement("svg", {
				className: t.className,
				id: t.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_3QNLLzw_kUPhkWkxg22tT9"
			}
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ThumbnailSelect/index.m.less"),
				c = n.n(i);
			e.a = t => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}), r.a.createElement("path", {
				fill: "#A5A4A4",
				d: "M6 3h8c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V5c0-1.1046.8954-2 2-2zm11 1c1.1046 0 2 .8954 2 2v8c0 1.1046-.8954 2-2 2V4zM3 4v12h-.6667C1.597 16 1 15.1734 1 14.1538V5.8462C1 4.8266 1.597 4 2.3333 4H3z"
			})))
		},
		"./src/reddit/selectors/editorContent.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/actions/postCreation/constants.ts");
			const r = (t, e) => t.creations.api.editor.converting.pending[e || o.k]
		},
		"./src/reddit/selectors/gold/enabledFeatures.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return a
			})), n.d(e, "a", (function() {
				return l
			})), n.d(e, "c", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/selectors/economics.ts"),
				i = n("./src/reddit/selectors/gold/powerups/index.ts"),
				c = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const a = Object(o.a)(r.d.spEmotes, s.b, i.a, (t, e, n) => {
					if (n) return !0;
					const o = !(!e || !Object.keys(e).length);
					return t && o
				}),
				l = Object(o.a)(s.b, i.b, i.c, i.a, (t, e, n, o) => {
					if (o) return [...e, ...n].slice(0, 3);
					let r = [];
					for (const s of t || [])
						if ((r = [...r, ...Object.values(s.emotes)]).length > 3) break;
					return r.slice(0, 3)
				}),
				d = Object(o.a)(r.d.spGiphy, i.a, c.a, (t, e, n) => !!(t || e && n))
		},
		"./src/reddit/selectors/products.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/Product/index.ts");
			const r = (t, e) => {
					const n = t.products.models[e];
					if (n && n.type === o.a.Badge) return n
				},
				s = (t, e) => {
					let {
						productId: n
					} = e;
					const o = t.products.models[n];
					if (o) {
						const e = o.subredditId,
							r = Object.keys(t.user.ownedBadges[e] || {}),
							s = t.badges.models,
							i = Date.now();
						let c = !1;
						return r.forEach(t => {
							const e = s[t];
							e && e.type === n && e.endsAt > i && (c = !0)
						}), c
					}
					return !1
				}
		},
		"./src/redditGQL/operations/SubredditTypeaheadSearch.json": function(t) {
			t.exports = JSON.parse('{"id":"20edc5ee12df"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~RichTextEditor.0a8d64f9232b20ec693f.js.map