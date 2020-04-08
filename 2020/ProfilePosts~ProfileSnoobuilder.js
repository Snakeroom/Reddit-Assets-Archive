// https://www.redditstatic.com/desktop2x/ProfilePosts~ProfileSnoobuilder.ff13e661692db2477743.js
// Retrieved at 4/8/2020, 3:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePosts~ProfileSnoobuilder"], {
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
				d = n("./src/app/strings/index.ts"),
				l = n("./src/config.ts"),
				u = n("./src/higherOrderComponents/asTooltip.tsx"),
				m = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/constants/index.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				x = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				f = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/index.tsx"),
				y = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				E = n("./src/reddit/models/Profile/index.ts"),
				O = n("./src/reddit/featureFlags/index.ts"),
				_ = n("./src/reddit/selectors/tooltip.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/selectors/userPrefs.ts"),
				j = n("./src/reddit/i18n/utils.ts"),
				S = n("./src/reddit/components/ProfileNavMenu/index.m.less"),
				k = n.n(S);
			const C = Object(g.t)({
					routeName: g.T,
					privateListingType: g.i
				}),
				L = Object(c.c)({
					isDropdownMenuOpen: e => Object(_.a)(e) === T,
					isOwnProfile: (e, t) => Object(N.J)(e, t.profileName),
					language: N.O,
					isSnoovatar30Enabled: O.d.snoovatar30,
					isSubscriptionsPinned: w.b
				}),
				I = Object(u.a)(h.a),
				T = "profile-nav-menu-tooltip";
			t.a = C(Object(o.b)(L, e => ({
				toggleTooltip: t => e(Object(p.h)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: n,
					language: s,
					privateListingType: r,
					profileName: o,
					routeName: a,
					toggleTooltip: c,
					isSnoovatar30Enabled: d,
					isSubscriptionsPinned: l
				} = e;
				return i.a.createElement("div", {
					className: k.a.container
				}, i.a.createElement(x.a, {
					bladeOpen: !1,
					offsetLeft: l ? f.u : 0,
					render: () => i.a.createElement(i.a.Fragment, null, P({
						language: s,
						profileName: o,
						isOwnProfile: n,
						routeName: a,
						privateListingType: r,
						isSnoovatar30Enabled: d
					}).map(e => i.a.createElement(A, e)), i.a.createElement("button", {
						className: Object(m.a)(k.a.mainLink, k.a.overflowMenuButton),
						id: T,
						onClick: () => c(T)
					}, i.a.createElement(v.a, null)), i.a.createElement(I, {
						className: k.a.dropdown,
						isOpen: t,
						tooltipId: T
					}, M({
						language: s,
						profileName: o,
						isOwnProfile: n,
						routeName: a,
						privateListingType: r
					}).map(e => i.a.createElement(B, e))))
				}))
			}));
			const A = e => {
					let {
						hideOnNarrow: t,
						isActive: n,
						text: s,
						url: r,
						internal: o
					} = e;
					return o ? i.a.createElement(y.a, {
						className: Object(m.a)(k.a.mainLink, {
							[k.a.hideOnNarrow]: !!t,
							[k.a.isActive]: n
						}),
						to: r
					}, s) : i.a.createElement("a", {
						className: Object(m.a)(k.a.mainLink, {
							[k.a.hideOnNarrow]: !!t,
							[k.a.isActive]: n
						}),
						href: r
					}, s)
				},
				B = e => {
					let {
						isActive: t,
						internal: n,
						key: s,
						url: r,
						showOnNarrow: o,
						text: c
					} = e;
					return n ? i.a.createElement(a.a, {
						className: Object(m.a)(k.a.dropdownLink, {
							[k.a.isActive]: t,
							[k.a.showOnNarrow]: !!o
						}),
						to: r,
						key: s,
						rel: "nofollow",
						role: "listitem"
					}, c) : i.a.createElement("a", {
						className: Object(m.a)(k.a.dropdownLink, {
							[k.a.showOnNarrow]: !!o
						}),
						href: r,
						key: s,
						rel: "nofollow",
						role: "listitem",
						target: "_blank"
					}, c)
				},
				P = e => {
					let {
						language: t,
						profileName: n,
						isOwnProfile: r,
						routeName: i,
						privateListingType: o,
						isSnoovatar30Enabled: a
					} = e;
					const c = r ? [{
						internal: !0,
						isActive: i === b.zb.PROFILE_PRIVATE && o === E.a.Saved,
						key: "profile.saved",
						text: Object(d.a)(t, "profile.sections.saved"),
						url: "/user/".concat(n, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: i === b.zb.PROFILE_PRIVATE && o === E.a.Hidden,
						key: "profile.hidden",
						text: Object(d.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(n, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: i === b.zb.PROFILE_PRIVATE && o === E.a.Upvoted,
						key: "profile.upvoted",
						text: Object(d.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(n, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: i === b.zb.PROFILE_PRIVATE && o === E.a.Downvoted,
						key: "profile.downvoted",
						text: Object(d.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(n, "/downvoted/")
					}] : [];
					r ? (c.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: i === b.zb.PROFILE_PRIVATE && o === E.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(n, "/gilded/")
					}), c.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: i === b.zb.PROFILE_PRIVATE && o === E.a.GivenGildings,
						key: "profile.receiverGildings",
						text: s.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(n, "/gilded/given/")
					})) : c.push({
						hideOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "3zOgw1"
						}),
						url: "".concat(l.a.oldRedditUrl, "/user/").concat(n, "/gilded/")
					});
					const u = a ? [{
						internal: !0,
						isActive: i === b.zb.PROFILE_SNOOBUILDER,
						key: "profile.snoobuilder",
						text: Object(j.c)("Snoobuilder"),
						url: "/user/".concat(n, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: i === b.zb.PROFILE_OVERVIEW,
						key: "profile.overview",
						text: Object(d.a)(t, "profile.overview"),
						url: "/user/".concat(n, "/")
					}, {
						internal: !0,
						isActive: i === b.zb.PROFILE_POSTS,
						key: "profile.posts",
						text: Object(d.a)(t, "profile.posts"),
						url: "/user/".concat(n, "/posts/")
					}, {
						internal: !0,
						isActive: i === b.zb.PROFILE_COMMENTS,
						key: "profile.comments",
						text: Object(d.a)(t, "profile.comments"),
						url: "/user/".concat(n, "/comments/")
					}, ...u, ...c]
				},
				M = e => {
					let {
						language: t,
						profileName: n,
						isOwnProfile: r,
						routeName: i,
						privateListingType: o
					} = e;
					const a = r ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: i === b.zb.PROFILE_PRIVATE && o === E.a.Hidden,
						key: "profile.hidden",
						text: Object(d.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(n, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: i === b.zb.PROFILE_PRIVATE && o === E.a.Upvoted,
						key: "profile.upvoted",
						text: Object(d.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(n, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: i === b.zb.PROFILE_PRIVATE && o === E.a.Downvoted,
						key: "profile.downvoted",
						text: Object(d.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(n, "/downvoted/")
					}] : [];
					return r ? (a.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: i === b.zb.PROFILE_PRIVATE && o === E.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(n, "/gilded/")
					}), a.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: i === b.zb.PROFILE_PRIVATE && o === E.a.GivenGildings,
						key: "profile.receiverGildings",
						text: s.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(n, "/gilded/given/")
					}), a) : [...a, {
						showOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "3zOgw1"
						}),
						url: "".concat(l.a.oldRedditUrl, "/user/").concat(n, "/gilded/")
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
				b = n("./src/reddit/constants/posts.ts");
			const p = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
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
				}, i.a.createElement(p, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), i.a.createElement(m.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: b.a.PROFILE
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
			const b = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(d.G)(t))
				})),
				p = c.a.wrapped(e => i.a.createElement("div", {
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
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = b(Object(a.a)(p))
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
				b = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				p = n("./src/reddit/components/SidebarExpandableList/index.m.less"),
				x = n.n(p),
				f = n("./src/lib/lessComponent.tsx");
			const g = 10,
				h = f.a.wrapped(l.n, "TertiaryButton", x.a);
			class y extends a.a.Component {
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
						return a.a.createElement(h, {
							onClick: this.onButtonClick
						}, r ? a.a.createElement(u.a, {
							sizePx: g
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
					} = this.state, u = s.length > r || t, p = (!u || l ? s : i()(s, r)).map(e => o({
						item: e
					}));
					return a.a.createElement(d.a, {
						className: e,
						headerButton: n,
						title: c
					}, p, a.a.createElement(m.a, null, a.a.createElement(b.a, null, u && this.renderToggleButton())))
				}
			}
			y.defaultProps = {
				minimizedLength: c.Eb
			}, t.a = y
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/app/strings/index.ts"),
				c = n("./src/reddit/actions/profile/index.ts"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = n("./src/reddit/models/User/index.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				b = n("./src/reddit/selectors/subscriptions.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = n.n(x);
			const g = Object(o.c)({
					currentUser: p.i,
					language: p.O,
					moderated: m.n,
					subscriptions: b.f,
					hasMoreModerated: m.d,
					loadMorePending: m.a
				}),
				h = Object(i.b)(g, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, n) => Object.assign({}, n, e, t, {
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				y = e => {
					let {
						item: t
					} = e;
					return r.a.createElement(l.a, {
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
			t.a = h(e => {
				const {
					currentUser: t,
					language: n,
					moderated: s,
					profileName: i,
					subscriptions: o,
					hasMoreModerated: c,
					onLoadMore: l,
					loadMorePending: m
				} = e;
				if (0 === s.length) return null;
				const b = t && Object(u.f)(t).toLowerCase() === i.toLowerCase() ? Object(a.a)(n, "profile.moderatedSubredditsYours") : Object(a.a)(n, "profile.moderatedSubreddits"),
					p = function(e, t, n) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							language: n,
							sendEvent: () => void 0
						}))
					}(s, new Set(o), n);
				return r.a.createElement(d.a, {
					className: f.a.container,
					title: b,
					items: p,
					renderItem: y,
					hasMoreItems: c,
					onLoadMore: l,
					pending: m
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = n("./src/reddit/i18n/components.tsx"),
				m = n("./src/reddit/i18n/utils.ts"),
				b = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				x = n.n(p);
			const f = Object(a.c)({
					hasMoreMultireddits: b.e,
					loadMorePending: b.b,
					multireddits: b.o
				}),
				g = Object(i.b)(f, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.e)(t.profileName, !0))
				}), (e, t, n) => Object.assign({}, n, e, t, {
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				h = e => {
					let {
						item: t
					} = e;
					return r.a.createElement("div", {
						className: x.a.listItem,
						key: t.url
					}, r.a.createElement("img", {
						className: x.a.icon,
						src: t.icon
					}), r.a.createElement("div", {
						className: x.a.description
					}, r.a.createElement(o.a, {
						className: x.a.name,
						to: t.url
					}, t.displayText), r.a.createElement("div", {
						className: x.a.meta
					}, r.a.createElement(u.c, null, r.a.createElement(u.b, {
						name: "subredditCount"
					}, t.subredditCount), " ", r.a.createElement(u.a, {
						name: "communities",
						singular: "community",
						plural: "communities",
						count: t.subredditCount
					})))))
				};
			t.a = g(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: n,
					multireddits: s,
					onLoadMore: i,
					profileName: o
				} = e;
				return s && s.length ? r.a.createElement(l.a, null, r.a.createElement(d.a, {
					hasMoreItems: t,
					items: s,
					onLoadMore: i,
					pending: n,
					renderItem: h,
					title: Object(m.c)("Public custom feeds by u/".concat(Object(m.b)("username", o)))
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
				b = n.n(m);
			const p = Object(a.b)(a.d, b.a);
			var x = n("./src/reddit/selectors/profile.ts"),
				f = n("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				g = n.n(f),
				h = n("./src/lib/lessComponent.tsx");
			const y = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(x.r)(e, Object(x.m)(e, n))
				}
			}, p);
			t.a = Object(o.b)(y)(e => {
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
			const v = h.a.wrapped(u.a, "TrophyItem", g.a),
				E = h.a.div("TrophyIcon", g.a),
				O = h.a.h5("TrophyName", g.a),
				_ = h.a.div("TrophyContent", g.a),
				N = h.a.wrapped(l.c, "Description", g.a);

			function w(e) {
				let {
					item: t
				} = e;
				const n = i.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return i.a.createElement(v, {
					key: t.id
				}, i.a.createElement(E, null, t.url ? i.a.createElement(d.a, {
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
				b = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/lessComponent.tsx");

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
			const g = p.a.button("IconButton", m.a),
				h = p.a.wrapped(d.a, "SubscribeIcon", m.a),
				y = p.a.wrapped(c.a, "UnsubscribeIcon", m.a),
				v = p.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = f(e, ["border", "small"]);
					return i.a.createElement(g, s, i.a.createElement(h, {
						className: Object(b.a)(s.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", m.a),
				E = p.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = f(e, ["border", "small"]);
					return t ? i.a.createElement(a.f, x({}, s, {
						className: Object(b.a)(s.className, {
							[m.a.isSmall]: n
						})
					})) : i.a.createElement(a.n, x({}, s, {
						className: Object(b.a)(s.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", m.a),
				O = e => {
					var {
						icon: t
					} = e, n = f(e, ["icon"]);
					return t ? i.a.createElement(v, x({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : i.a.createElement(E, x({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				},
				_ = p.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: s,
						type: r
					} = e, a = f(e, ["border", "language", "small", "type"]);
					return i.a.createElement(g, a, i.a.createElement(y, {
						className: Object(b.a)(o.n, a.className, {
							[m.a.isSmall]: s
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				N = p.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: r,
						type: o
					} = e, c = f(e, ["border", "language", "small", "type"]);
					const d = i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === o ? s.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : s.fbt._("Following", null, {
							hk: "1wQlVR"
						})), i.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === o ? s.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : s.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						l = Object(b.a)(c.className, {
							[m.a.isSmall]: r
						});
					return t ? i.a.createElement(a.i, x({}, c, {
						className: l,
						children: d
					})) : i.a.createElement(a.n, x({}, c, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", m.a),
				w = e => {
					var {
						icon: t
					} = e, n = f(e, ["icon"]);
					return t ? i.a.createElement(_, x({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : i.a.createElement(N, x({}, n, {
						className: Object(b.a)(n.className, {
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
						language: r,
						small: o = !1
					} = this.props, a = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: o
					};
					return this.props.userIsSubscriber ? i.a.createElement(w, x({}, a, {
						language: r,
						type: this.props.identifier.type
					})) : i.a.createElement(O, x({}, a, {
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
				return C
			})), n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/app/strings/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/index.tsx"),
				b = n("./src/reddit/actions/subscription/index.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const x = Object(a.c)({
				language: p.O
			});
			var f = Object(i.b)(x, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(b.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(b.e()),
						onUnsubscribe: () => e(b.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				g = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = n("./src/reddit/i18n/utils.ts"),
				O = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				_ = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				N = n("./src/reddit/models/Flair/index.ts"),
				w = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				j = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				S = n.n(j);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => r.a.createElement(g.a, {
					className: Object(d.a)(S.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: S.a.container
				}, e.isLoading ? r.a.createElement(v.a, {
					className: S.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: S.a.errorMsg
				}, e.errorMsg || Object(E.c)("Something went wrong.")) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(I, k({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(y.n, {
					className: S.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				L = Object(a.c)({
					hideNSFWPref: p.y,
					language: p.O
				}),
				I = Object(i.b)(L)(e => r.a.createElement("div", {
					className: S.a.communityItemContainer
				}, r.a.createElement(_.a, {
					widthRight: h.t
				}, r.a.createElement("div", {
					className: S.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: S.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(O.a, {
					className: S.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: S.a.communityDescriptionContainer
				}, r.a.createElement(o.a, {
					className: S.a.communityName,
					to: Object(w.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(w.b)(e.name, e.type)), r.a.createElement("div", {
					className: S.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: S.a.subscriberCount
				}, Object(c.b)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && r.a.createElement(u.b, {
					flair: {
						type: N.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(v.a, {
					className: Object(d.a)(S.a.communityCta, S.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(y.n, {
					className: Object(d.a)(S.a.communityCta, {
						[S.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(f, {
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
				}) : r.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: S.a.communityDescription
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
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
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
				m = n("./src/reddit/i18n/components.tsx"),
				b = n("./src/reddit/models/ExternalAccount/index.ts"),
				p = n("./src/reddit/selectors/externalAccount.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				g = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				y = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				v = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				E = n("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				O = n.n(E);
			var _ = e => {
					const {
						account: t,
						clickEvent: n,
						provider: s
					} = e;
					let i, o = t.username,
						a = "";
					return s !== b.a.Twitter ? null : (i = r.a.createElement(y.a, {
						className: O.a.twitterLogo
					}), a = f.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = "@".concat(t.username), r.a.createElement(v.a, null, r.a.createElement("span", {
						className: O.a.icon
					}, i), r.a.createElement(g.a, {
						className: O.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: n
					}, r.a.createElement("div", {
						className: O.a.linkTitle
					}, r.a.createElement("span", {
						className: O.a.name
					}, o), r.a.createElement(h.a, {
						className: O.a.linkIcon
					})), r.a.createElement("div", {
						className: O.a.linkDescription
					}, a))))
				},
				N = n("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				w = n.n(N);
			const j = Object(o.c)({
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
						return n.type === l.a.PROFILE ? Object(x.cb)(e, {
							userName: n.name
						}) : null
					}
				}),
				S = Object(i.b)(j, e => ({
					trackTwitterAccountClicked: t => e((e, n) => u.k(n(), t))
				}), (e, t, n) => Object.assign({}, n, e, t, {
					onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
				}));
			t.a = Object(c.c)(S(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: n
				} = e;
				return n ? r.a.createElement(a.a, null, r.a.createElement(d.b, null, r.a.createElement(d.a, null, r.a.createElement(m.c, null, "Connected accounts")), n && r.a.createElement("div", {
					className: w.a.account
				}, r.a.createElement(_, {
					provider: b.a.Twitter,
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
				o = n("./src/reddit/selectors/subreddit.ts"),
				a = n("./src/reddit/selectors/user.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				language: a.O,
				userIsSubscriber: o.Z
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
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(o);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(i.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = c
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
		}
	}
]);
//# sourceMappingURL=ProfilePosts~ProfileSnoobuilder.ff13e661692db2477743.js.map