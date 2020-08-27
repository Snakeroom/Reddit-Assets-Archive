// https://www.redditstatic.com/desktop2x/ProfilePosts~ProfileSnoobuilder.a059f1ae4dcc5b82a837.js
// Retrieved at 8/27/2020, 5:20:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePosts~ProfileSnoobuilder"], {
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = n.n(m),
				b = n("./src/lib/lessComponent.tsx");
			const x = Object(u.t)(),
				f = Object(o.c)({
					layout: u.N
				}),
				h = Object(i.b)(f);
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(p.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.m + c.q + c.r,
						t = l.a - e,
						n = c.g - t,
						s = l.a + n + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(s, "px) {\n              .").concat(p.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.g + c.q + c.r, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.r, "px) / 2);\n              }\n\n              .").concat(p.a.Component, ".").concat(p.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.g + c.q + c.r, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return r.a.createElement("div", {
						className: p.a.Container
					}, r.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = x(h(b.a.wrapped(y, "Component", p.a)))
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				hideOnNarrow: "kp9WWKDE0A0U0u7XOOEQP",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L",
				showOnNarrow: "_2cJiWyA-Vif_pfBPZVATnV",
				overflowMenuButton: "_2glPIthm-tV6ZxKaznhb72"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/config.ts"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				b = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				x = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/index.tsx"),
				y = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				g = n("./src/reddit/models/Profile/index.ts"),
				E = n("./src/reddit/featureFlags/index.ts"),
				O = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/selectors/userPrefs.ts"),
				w = n("./src/reddit/components/ProfileNavMenu/index.m.less"),
				j = n.n(w);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = Object(f.t)({
					routeName: f.U,
					privateListingType: f.i
				}),
				L = Object(c.c)({
					isDropdownMenuOpen: e => Object(O.a)(e) === B,
					isOwnProfile: (e, t) => Object(_.L)(e, t.profileName),
					isSnoovatar30Enabled: E.d.snoovatar30,
					isSubscriptionsPinned: N.b
				}),
				C = Object(l.a)(h.a),
				B = "profile-nav-menu-tooltip";
			t.a = S(Object(o.b)(L, e => ({
				toggleTooltip: t => e(Object(p.h)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: n,
					privateListingType: s,
					profileName: r,
					routeName: o,
					toggleTooltip: a,
					isSnoovatar30Enabled: c,
					isSubscriptionsPinned: d
				} = e;
				return i.a.createElement("div", {
					className: j.a.container
				}, i.a.createElement(b.a, {
					bladeOpen: !1,
					offsetLeft: d ? x.u : 0,
					render: () => i.a.createElement(i.a.Fragment, null, P({
						profileName: r,
						isOwnProfile: n,
						routeName: o,
						privateListingType: s,
						isSnoovatar30Enabled: c
					}).map(e => i.a.createElement(I, k({}, e, {
						key: e.key
					}))), i.a.createElement("button", {
						className: Object(u.a)(j.a.mainLink, j.a.overflowMenuButton),
						id: B,
						onClick: () => a(B)
					}, i.a.createElement(v.a, null)), i.a.createElement(C, {
						className: j.a.dropdown,
						isOpen: t,
						tooltipId: B
					}, A({
						profileName: r,
						isOwnProfile: n,
						routeName: o,
						privateListingType: s
					}).map(e => i.a.createElement(T, k({}, e, {
						key: e.key
					})))))
				}))
			}));
			const I = e => {
					let {
						hideOnNarrow: t,
						isActive: n,
						text: s,
						url: r,
						internal: o
					} = e;
					return o ? i.a.createElement(y.a, {
						className: Object(u.a)(j.a.mainLink, {
							[j.a.hideOnNarrow]: !!t,
							[j.a.isActive]: n
						}),
						to: r
					}, s) : i.a.createElement("a", {
						className: Object(u.a)(j.a.mainLink, {
							[j.a.hideOnNarrow]: !!t,
							[j.a.isActive]: n
						}),
						href: r
					}, s)
				},
				T = e => {
					let {
						isActive: t,
						internal: n,
						key: s,
						url: r,
						showOnNarrow: o,
						text: c
					} = e;
					return n ? i.a.createElement(a.a, {
						className: Object(u.a)(j.a.dropdownLink, {
							[j.a.isActive]: t,
							[j.a.showOnNarrow]: !!o
						}),
						to: r,
						key: s,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, c) : i.a.createElement("a", {
						className: Object(u.a)(j.a.dropdownLink, {
							[j.a.showOnNarrow]: !!o
						}),
						href: r,
						key: s,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, c)
				},
				P = e => {
					let {
						profileName: t,
						isOwnProfile: n,
						routeName: r,
						privateListingType: i,
						isSnoovatar30Enabled: o
					} = e;
					const a = n ? [{
						internal: !0,
						isActive: r === m.Bb.PROFILE_PRIVATE && i === g.a.Saved,
						key: "profile.mainmenu.saved",
						text: s.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: "/user/".concat(t, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === m.Bb.PROFILE_PRIVATE && i === g.a.Hidden,
						key: "profile.mainmenu.hidden",
						text: s.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: "/user/".concat(t, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === m.Bb.PROFILE_PRIVATE && i === g.a.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: s.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: "/user/".concat(t, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === m.Bb.PROFILE_PRIVATE && i === g.a.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: s.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: "/user/".concat(t, "/downvoted/")
					}] : [];
					n ? (a.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === m.Bb.PROFILE_PRIVATE && i === g.a.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: "/user/".concat(t, "/gilded/")
					}), a.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === m.Bb.PROFILE_PRIVATE && i === g.a.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: s.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: "/user/".concat(t, "/gilded/given/")
					})) : a.push({
						hideOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: "".concat(d.a.oldRedditUrl, "/user/").concat(t, "/gilded/")
					});
					const c = o ? [{
						internal: !0,
						isActive: r === m.Bb.PROFILE_SNOOBUILDER,
						key: "profile.mainmenu.snoobuilder",
						text: s.fbt._("Snoobuilder", null, {
							hk: "3SSKff"
						}),
						url: "/user/".concat(t, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: r === m.Bb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: s.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: "/user/".concat(t, "/")
					}, {
						internal: !0,
						isActive: r === m.Bb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: s.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: "/user/".concat(t, "/posts/")
					}, {
						internal: !0,
						isActive: r === m.Bb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: s.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: "/user/".concat(t, "/comments/")
					}, ...c, ...a]
				},
				A = e => {
					let {
						profileName: t,
						isOwnProfile: n,
						routeName: r,
						privateListingType: i
					} = e;
					const o = n ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: r === m.Bb.PROFILE_PRIVATE && i === g.a.Hidden,
						key: "profile.dropdownmenu.hidden",
						text: s.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: "/user/".concat(t, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === m.Bb.PROFILE_PRIVATE && i === g.a.Upvoted,
						key: "profile.dropdownmenu.upvoted",
						text: s.fbt._("Upvoted", null, {
							hk: "J0TzC"
						}),
						url: "/user/".concat(t, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === m.Bb.PROFILE_PRIVATE && i === g.a.Downvoted,
						key: "profile.dropdownmenu.downvoted",
						text: s.fbt._("Downvoted", null, {
							hk: "2sxum6"
						}),
						url: "/user/".concat(t, "/downvoted/")
					}] : [];
					return n ? (o.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === m.Bb.PROFILE_PRIVATE && i === g.a.ReceivedGildings,
						key: "profile.dropdownmenu.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "31obau"
						}),
						url: "/user/".concat(t, "/gilded/")
					}), o.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === m.Bb.PROFILE_PRIVATE && i === g.a.GivenGildings,
						key: "profile.dropdownmenu.givenGildings",
						text: s.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: "/user/".concat(t, "/gilded/given/")
					}), o) : [...o, {
						showOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.dropdownmenu.gildedLegacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "2KdewZ"
						}),
						url: "".concat(d.a.oldRedditUrl, "/user/").concat(t, "/gilded/")
					}]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/reddit/components/SidebarContainer/index.tsx"),
				a = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = n("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				d = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				u = n("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				m = n("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				p = n("./src/reddit/constants/posts.ts");
			const b = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("Settings~reddit-components-ProfileIdCard"), n.e("reddit-components-ProfileIdCard")]).then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				x = e => i.a.createElement(o.a, {
					className: e.className
				}, i.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), i.a.createElement(m.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: p.a.PROFILE
					}
				}), i.a.createElement(a.a, {
					profileName: e.profileName
				}), i.a.createElement(c.a, {
					profileName: e.profileName
				}), i.a.createElement(d.a, null, i.a.createElement(u.a, {
					profileName: e.profileName
				})), i.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			x.defaultProps = {
				isOverlay: !1
			}, t.a = x
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/page.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(d.G)(t))
				})),
				b = c.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(a.a)(b))
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, n) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/take.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				b = n("./src/reddit/components/SidebarExpandableList/index.m.less"),
				x = n.n(b),
				f = n("./src/lib/lessComponent.tsx");
			const h = 10,
				y = f.a.wrapped(l.n, "TertiaryButton", x.a);
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: n
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && n && n()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: n,
							pending: r
						} = this.props, i = !e || t && n ? s.fbt._("View More", null, {
							hk: "1RK8uA"
						}) : s.fbt._("View Less", null, {
							hk: "1M72mK"
						});
						return a.a.createElement(y, {
							onClick: this.onButtonClick
						}, r ? a.a.createElement(u.a, {
							sizePx: h
						}) : i)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: n,
						items: s,
						minimizedLength: r,
						renderItem: o,
						title: c
					} = this.props, {
						expanded: l
					} = this.state, u = s.length > r || t, b = (!u || l ? s : i()(s, r)).map(e => o({
						item: e
					}));
					return a.a.createElement(d.a, {
						className: e,
						headerButton: n,
						title: c
					}, b, a.a.createElement(m.a, null, a.a.createElement(p.a, null, u && this.renderToggleButton())))
				}
			}
			v.defaultProps = {
				minimizedLength: c.Gb
			}, t.a = v
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = n("./src/reddit/models/User/index.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/subscriptions.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = n.n(x);
			const h = Object(a.c)({
					currentUser: b.i,
					moderated: m.n,
					subscriptions: p.f,
					hasMoreModerated: m.d,
					loadMorePending: m.a
				}),
				y = Object(o.b)(h, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, n), e), t), {
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return i.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = y(e => {
				const {
					currentUser: t,
					moderated: n,
					profileName: r,
					subscriptions: o,
					hasMoreModerated: a,
					onLoadMore: c,
					loadMorePending: l
				} = e;
				if (0 === n.length) return null;
				const m = t && Object(u.e)(t).toLowerCase() === r.toLowerCase() ? s.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : s.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					p = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(n, new Set(o));
				return i.a.createElement(d.a, {
					className: f.a.container,
					title: m,
					items: p,
					renderItem: v,
					hasMoreItems: a,
					onLoadMore: c,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, n) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				u = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = n.n(p);
			const x = Object(c.c)({
					hasMoreMultireddits: m.e,
					loadMorePending: m.b,
					multireddits: m.o
				}),
				f = Object(o.b)(x, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.f)(t.profileName, !0))
				}), (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, n), e), t), {
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				h = e => {
					let {
						item: t
					} = e;
					return i.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, i.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), i.a.createElement("div", {
						className: b.a.description
					}, i.a.createElement(a.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), i.a.createElement("div", {
						className: b.a.meta
					}, s.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [s.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = f(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: n,
					multireddits: r,
					onLoadMore: o,
					profileName: a
				} = e;
				return r && r.length ? i.a.createElement(u.a, null, i.a.createElement(l.a, {
					hasMoreItems: t,
					items: r,
					onLoadMore: o,
					pending: n,
					renderItem: h,
					title: s.fbt._("Public custom feeds by u/{profileName}", [s.fbt._param("profileName", a)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, n) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = n("./src/reddit/controls/OutboundLink/index.tsx"),
				l = n("./src/reddit/controls/Typography/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = n("./node_modules/lodash/isEqual.js"),
				p = n.n(m);
			const b = Object(a.b)(a.d, p.a);
			var x = n("./src/reddit/selectors/profile.ts"),
				f = n("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				h = n.n(f),
				y = n("./src/lib/lessComponent.tsx");
			const v = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(x.r)(e, Object(x.m)(e, n))
				}
			}, b);
			t.a = Object(o.b)(v)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : i.a.createElement(c.a, {
					title: s.fbt._("Trophy Case ({trophyCount})", [s.fbt._param("trophyCount", "".concat(t.length))], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: w
				})
			});
			const g = y.a.wrapped(u.a, "TrophyItem", h.a),
				E = y.a.div("TrophyIcon", h.a),
				O = y.a.h5("TrophyName", h.a),
				_ = y.a.div("TrophyContent", h.a),
				N = y.a.wrapped(l.c, "Description", h.a);

			function w(e) {
				let {
					item: t
				} = e;
				const n = i.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return i.a.createElement(g, {
					key: t.id
				}, i.a.createElement(E, null, t.url ? i.a.createElement(d.b, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, n) : n), i.a.createElement(_, null, i.a.createElement(O, null, t.name), i.a.createElement(N, null, t.description)))
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/reddit/constants/elementClassNames.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = n.n(u),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const h = b.a.button("IconButton", m.a),
				y = b.a.wrapped(d.a, "SubscribeIcon", m.a),
				v = b.a.wrapped(c.a, "UnsubscribeIcon", m.a),
				g = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = f(e, ["border", "small"]);
					return i.a.createElement(h, s, i.a.createElement(y, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", m.a),
				E = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = f(e, ["border", "small"]);
					return t ? i.a.createElement(a.f, x({}, s, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: n
						})
					})) : i.a.createElement(a.n, x({}, s, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", m.a),
				O = e => {
					var {
						icon: t
					} = e, n = f(e, ["icon"]);
					return t ? i.a.createElement(g, x({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : i.a.createElement(E, x({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				},
				_ = b.a.wrapped(e => {
					var {
						border: t,
						small: n,
						type: s
					} = e, r = f(e, ["border", "small", "type"]);
					return i.a.createElement(h, r, i.a.createElement(v, {
						className: Object(p.a)(o.n, r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				N = b.a.wrapped(e => {
					var {
						border: t,
						small: n,
						buttonType: r
					} = e, o = f(e, ["border", "small", "buttonType"]);
					const c = i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === r ? s.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : s.fbt._("Following", null, {
							hk: "1wQlVR"
						})), i.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === r ? s.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : s.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						d = Object(p.a)(o.className, {
							[m.a.isSmall]: n
						});
					return t ? i.a.createElement(a.i, x({}, o, {
						className: d
					}), c) : i.a.createElement(a.n, x({}, o, {
						className: d
					}), c)
				}, "UnsubscribeButton", m.a),
				w = e => {
					var {
						icon: t
					} = e, n = f(e, ["icon"]);
					return t ? i.a.createElement(_, x({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : i.a.createElement(N, x({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				};
			class j extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: n = !1,
						id: s,
						small: r = !1
					} = this.props, o = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: r
					};
					return this.props.userIsSubscriber ? i.a.createElement(w, x({}, o, {
						buttonType: this.props.identifier.type
					})) : i.a.createElement(O, x({}, o, {
						id: s
					}), this.props.children, Object(l.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				i = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = e => {
					let {
						type: t,
						key: n
					} = e;
					return i[r({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(i.a))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(a),
				d = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const l = i.a.div("WidgetBackground", c.a),
				u = i.a.wrapped(e => {
					var {
						children: t
					} = e, n = d(e, ["children"]);
					return r.a.createElement("div", n, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				_ = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				N = n.n(_);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => i.a.createElement(b.a, {
					className: Object(d.a)(N.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: N.a.container
				}, e.isLoading ? i.a.createElement(h.a, {
					className: N.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: N.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(S, w({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(f.n, {
					className: N.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				k = Object(c.c)({
					hideNSFWPref: E.z
				}),
				S = Object(o.b)(k)(e => i.a.createElement("div", {
					className: N.a.communityItemContainer
				}, i.a.createElement(v.a, {
					widthRight: x.t
				}, i.a.createElement("div", {
					className: N.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: N.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(y.a, {
					className: N.a.planetIcon,
					"data-redditstyle": !0
				})), i.a.createElement("div", {
					className: N.a.communityDescriptionContainer
				}, i.a.createElement(a.a, {
					className: N.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(O.b)(e.name, e.type),
					to: Object(O.a)(e.name, e.type)
				}, Object(O.b)(e.name, e.type)), i.a.createElement("div", {
					className: N.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: N.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.b, {
					flair: {
						type: g.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(h.a, {
					className: Object(d.a)(N.a.communityCta, N.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(f.n, {
					className: Object(d.a)(N.a.communityCta, {
						[N.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: N.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === s.a.PROFILE ? Object(r.c)(e) : Object(r.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, n) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/components/Widgets/Base/index.tsx"),
				l = n("./src/reddit/constants/posts.ts"),
				u = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/ExternalAccount/index.ts"),
				p = n("./src/reddit/selectors/externalAccount.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				x = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				y = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				v = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				g = n("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				E = n.n(g);
			var O = e => {
					const {
						account: t,
						clickEvent: n,
						provider: s
					} = e;
					let i, o = t.username,
						a = "";
					return s !== m.a.Twitter ? null : (i = r.a.createElement(y.a, {
						className: E.a.twitterLogo
					}), a = x.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = "@".concat(t.username), r.a.createElement(v.a, null, r.a.createElement("span", {
						className: E.a.icon
					}, i), r.a.createElement(f.b, {
						className: E.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: n
					}, r.a.createElement("div", {
						className: E.a.linkTitle
					}, r.a.createElement("span", {
						className: E.a.name
					}, o), r.a.createElement(h.a, {
						className: E.a.linkIcon
					})), r.a.createElement("div", {
						className: E.a.linkDescription
					}, a))))
				},
				_ = n("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				N = n.n(_);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(o.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === l.a.PROFILE ? Object(p.c)(e, {
						profileName: n.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === l.a.PROFILE ? Object(b.eb)(e, {
						userName: n.name
					}) : null
				}
			}), k = Object(i.b)(j, e => ({
				trackTwitterAccountClicked: t => e((e, n) => u.k(n(), t))
			}), (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, n), e), t), {
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(c.c)(k(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: n
				} = e;
				return n ? r.a.createElement(a.a, null, r.a.createElement(d.b, null, r.a.createElement(d.a, null, w._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), n && r.a.createElement("div", {
					className: N.a.account
				}, r.a.createElement(O, {
					provider: m.a.Twitter,
					account: n,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: o.cb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(i.d([n], !0)),
					onSubscriptionsRequested: () => e(i.e()),
					onUnsubscribe: () => e(i.d([n], !1))
				}
			})
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function i(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				i = n.n(r);
			t.a = s.a.div("rightAligned", i.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(i.a)(e => r.a.createElement("div", {
				className: Object(o.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			t.a = Object(i.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: s,
					widthLeft: i,
					gutter: a
				} = e, u = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return r.a.createElement("div", d({
					className: Object(o.a)(c.a.expandRightContainer, t)
				}, u), r.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: i,
						height: s,
						marginRight: a
					}
				}, Array.isArray(n) && n[0]), r.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=ProfilePosts~ProfileSnoobuilder.a059f1ae4dcc5b82a837.js.map