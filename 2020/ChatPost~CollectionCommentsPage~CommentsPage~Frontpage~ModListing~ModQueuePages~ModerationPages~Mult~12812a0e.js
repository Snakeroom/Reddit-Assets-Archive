// https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~12812a0e.de5d5eeb03a7d5787818.js
// Retrieved at 1/17/2020, 8:50:22 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~12812a0e"], {
		"./src/lib/humanizeDateTime/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			const o = 9999999999;

			function n(e) {
				return e > o ? new Date(e).toString() : new Date(1e3 * e).toString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = e => {
				return new Date(1e3 * e).toUTCString().replace("GMT", "UTC")
			}
		},
		"./src/reddit/components/AddAwardHoverButton/index.m.less": function(e, t, s) {
			e.exports = {
				AddAwardHoverButton: "_1oW4MfEm5eJEVbpLz6k6y8",
				addAwardHoverButton: "_1oW4MfEm5eJEVbpLz6k6y8",
				Icon: "uknhgp8KiNzfoIB1P0bzy",
				icon: "uknhgp8KiNzfoIB1P0bzy"
			}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, s) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isOp: "_1uBAPhkb8ZOA-9p_B6inAR",
				isAdmin: "_1-wk-QXxJ0S4snrasETuaA",
				isAdminEmeritus: "sKTYSQHxlRLbA-0pCpguU",
				isMod: "_1VChcviPF84MLFsL2xfBCP",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				d = s("./src/reddit/controls/InternalLink/index.tsx"),
				i = s("./src/reddit/components/AuthorLink/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const t = Object(r.a)(e.className, c.a.authorLinkStyles, {
					[c.a.isAdmin]: e.isAdmin,
					[c.a.isAdminEmeritus]: e.isAdminEmeritus,
					[c.a.isLivestreaming]: e.isLivestreaming,
					[c.a.isMod]: e.isMod,
					[c.a.isOp]: e.isOp,
					[c.a.isStrong]: e.isStrong,
					[c.a.isUnstyled]: e.isUnstyled
				});
				return e.isExternal || e.isLivestreaming ? n.a.createElement("a", {
					className: t,
					href: "".concat(a.a.redditUrl, "/user/").concat(e.author),
					rel: "nofollow",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? n.a.createElement("span", {
					className: Object(r.a)(c.a.deletedAuthorLink, e.className)
				}, e.children) : n.a.createElement(d.a, {
					className: t,
					style: e.style,
					to: "/user/".concat(e.author, "/")
				}, e.children)
			}
		},
		"./src/reddit/components/AwardBadges/index.m.less": function(e, t, s) {
			e.exports = {
				awardBadges: "_2LeW9tc_6Fs1n7Ou8uD-70",
				awardIcon: "_3u6g9UTYlEOr-yfM5hyq3p",
				awardItem: "_2y3bja4n4-unxyUrMEFH8C",
				animate: "_1PxSePitTwBoI0g9Zc4E3g",
				awardBounce: "_1w7WAKB-wuX5TZqe_TStJx",
				showAllButton: "_10Q0ZYgDml-1g2q2eQ5ky_",
				awarders: "_3618Xifw_RaDU8D22bhmPZ",
				badgeButton: "_3mcXKZUh7FvUMLSv0AHyXs",
				visibilityEffect: "Rk_HDo1zkk5qmw1fIBUBR",
				icon: "_2J9jlNokb9X4gvrrZR3BX2"
			}
		},
		"./src/reddit/components/AwardBadges/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/gold/modals.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/i18n/utils.ts");
			const m = (e, t) => {
				const s = Object(l.a)("awards", ["Award", "Awards"], t);
				return 1 === e.length ? Object(l.c)("".concat(s, " from ").concat(Object(l.b)("awarder-0", e[0]))) : 2 === e.length ? Object(l.c)("".concat(s, " from ").concat(Object(l.b)("awarder-0", e[0]), " and ").concat(Object(l.b)("awarder-1", e[1]))) : 3 === e.length ? Object(l.c)("".concat(s, " from ").concat(Object(l.b)("awarder-0", e[0]), ", ").concat(Object(l.b)("awarder-1", e[1]), ", and ").concat(Object(l.b)("awarder-2", e[2]))) : e.length > 3 ? Object(l.c)("".concat(s, " from ").concat(Object(l.b)("awarder-0", e[0]), ", ").concat(Object(l.b)("awarder-1", e[1]), ", ").concat(Object(l.b)("awarder-2", e[2]), ", and more")) : void 0
			};
			var u = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/icons/fonts/helpers.tsx");
			var b = e => n.a.createElement("i", {
				className: Object(d.a)(Object(h.b)("addGild"), e.className)
			});
			var x = e => n.a.createElement("i", {
					className: Object(d.a)(Object(h.b)("addGildDashed"), e.className)
				}),
				g = s("./src/reddit/components/AddAwardHoverButton/index.m.less"),
				w = s.n(g);
			class v extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						isHovered: !1
					}, this.handleMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.handleMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}
				}
				render() {
					const {
						className: e,
						onClick: t
					} = this.props, s = this.state.isHovered ? b : x;
					return n.a.createElement("button", {
						className: Object(d.a)(e, w.a.AddAwardHoverButton),
						onClick: t,
						onBlur: this.handleMouseLeave,
						onFocus: this.handleMouseEnter,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, n.a.createElement(s, {
						className: w.a.Icon
					}), n.a.createElement(p.c, null, "Add"))
				}
			}
			var E = v,
				O = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/models/Gold/Award.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				A = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				T = s("./src/higherOrderComponents/makeAsync.tsx"),
				C = s("./src/lib/loadWithRetries/index.ts");
			var I = Object(T.a)({
					getComponent: () => Object(C.a)(() => s.e("AwardTooltip").then(s.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				S = s("./src/reddit/components/AwardBadges/index.m.less"),
				B = s.n(S);
			class N extends n.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = n.a.createRef(), this.handleAwardAddedEvent = () => {
						this.setState({
							animate: !0
						}), setTimeout(() => this.setState({
							animate: !1
						}), 1e3)
					}, this.onShowTooltip = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						return e(t)
					}, this.state = {
						animate: !1
					}
				}
				componentDidMount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.addEventListener("awardAdded", this.handleAwardAddedEvent)
				}
				componentWillUnmount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.removeEventListener("awardAdded", this.handleAwardAddedEvent)
				}
				renderModAwardName() {
					const {
						award: e,
						count: t
					} = this.props;
					return n.a.createElement(n.a.Fragment, null, t > 1 && " • ", n.a.createElement(p.c, null, n.a.createElement(p.b, {
						name: "award-name"
					}, e.name), " Award"))
				}
				render() {
					const {
						award: e,
						className: t,
						count: s,
						iconClassName: o,
						onHideTooltip: r,
						postOrComment: a,
						tooltipId: i,
						tooltipLocation: c
					} = this.props;
					if (s <= 0) return;
					const l = e.icon32 ? e.icon32.url : e.icon.url,
						m = e.awardType === f.c.Moderator,
						u = Object(A.a)(e.id, a.id),
						p = s > 1 || m,
						h = "container" === c;
					return n.a.createElement("span", {
						className: Object(d.a)(B.a.awardItem, t),
						id: h ? i : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: r
					}, n.a.createElement("span", {
						id: h ? "" : i
					}, n.a.createElement("img", {
						alt: e.name,
						className: Object(d.a)(B.a.awardIcon, {
							[B.a.animate]: this.state.animate
						}, o),
						id: u,
						ref: this.imageRef,
						src: l
					})), n.a.createElement("span", {
						className: p ? B.a.itemText : ""
					}, s > 1 && s, m && this.renderModAwardName()), n.a.createElement(I, {
						award: e,
						postOrComment: a,
						tooltipId: i
					}))
				}
			}
			class P extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						isHovered: !1
					}, this.handleMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.handleMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}
				}
				render() {
					const {
						className: e,
						onClick: t
					} = this.props, s = this.state.isHovered ? b : x;
					return n.a.createElement("button", {
						className: Object(d.a)(e, B.a.badgeButton, B.a.visibilityEffect),
						onClick: t,
						onBlur: this.handleMouseLeave,
						onFocus: this.handleMouseEnter,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, n.a.createElement(s, {
						className: B.a.icon
					}))
				}
			}
			var _ = P;
			const M = (e, t) => {
					const s = Object(u.a)(e) ? "Post" : "Comment";
					let o = "".concat(s, "AwardBadges--").concat(e);
					return t && (o = "".concat(o, "--").concat(t)), o
				},
				L = Object(a.c)({
					isLoggedIn: y.J,
					allAwards: e => e.awards.models
				}),
				k = Object(r.b)(L, (e, t) => {
					let {
						isOverlay: s,
						thing: o
					} = t;
					return {
						onAddAward: () => {
							const t = Object(u.a)(o.id) ? o.postId : o.id;
							return e(Object(i.d)(t, s))
						},
						onHideTooltip: () => e(Object(c.h)()),
						onShowTooltip: t => e(Object(c.f)({
							tooltipId: t
						}))
					}
				}),
				H = 5;
			class D extends n.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async () => {
						const {
							onAddAward: e,
							sendEvent: t,
							thing: o
						} = this.props;
						e();
						const {
							clickAddAward: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(n(o.id))
					}, this.handleShowAllAwards = e => {
						const {
							onShowAllClick: t
						} = this.props;
						t ? t(e) : this.setState({
							showAllAwards: !0
						})
					}, this.state = {
						showAllAwards: !1
					}
				}
				renderAwardings(e) {
					const {
						showAllAwards: t
					} = this.state, {
						forceShowAllAwards: s,
						itemClassName: o,
						onHideTooltip: r,
						onShowTooltip: a,
						showAllClassName: i,
						tooltipType: c,
						thing: l
					} = this.props, m = M(l.id, c), u = "".concat(m, "-view-all");
					let h = [];
					h = s || t ? e : e.length > H ? e.slice(0, H - 1) : e;
					const b = e.length > h.length ? e.slice(h.length).reduce((e, t) => e + (l.awardCountsById && l.awardCountsById[t.id] || 0), 0) : 0,
						x = n.a.createElement(p.c, null, "& ", n.a.createElement(p.b, {
							name: "hidden-award-cound"
						}, b), " More");
					return n.a.createElement(n.a.Fragment, null, h.map(e => {
						const t = l.awardCountsById ? l.awardCountsById[e.id] : 0;
						return n.a.createElement(N, {
							award: e,
							className: o,
							count: t,
							key: e.id,
							onHideTooltip: r,
							onShowTooltip: a,
							postOrComment: l,
							tooltipId: "".concat(m, "-").concat(e.id),
							tooltipLocation: "icon"
						})
					}), b > 0 && n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
						"data-click-id": "awards",
						id: u,
						className: Object(d.a)(B.a.showAllButton, i),
						onClick: this.handleShowAllAwards,
						onMouseEnter: () => a(u),
						onMouseLeave: r
					}, x), n.a.createElement(O.c, {
						tooltipId: u,
						text: "View all Awards"
					})))
				}
				renderAwarders(e) {
					const {
						thing: t
					} = this.props, {
						awarders: s
					} = t;
					if (!s || 0 === s.length) return null;
					const o = e.reduce((e, s) => {
							return e + (t.awardCountsById && t.awardCountsById[s.id] || 0)
						}, 0),
						r = m(s, o);
					return n.a.createElement("span", {
						className: B.a.awarders
					}, r)
				}
				render() {
					const {
						children: e,
						className: t,
						isLoggedIn: s,
						hideCta: o,
						showAwarders: r,
						allAwards: a,
						thing: i
					} = this.props, c = Object(f.l)(Object.keys(i.awardCountsById || {}).map(e => a[e]).filter(Boolean)), l = !!c.length, m = !o && s && i.isGildable && l && !r, p = !o && s && i.isGildable && l && !Object(u.a)(i.id) && r;
					return n.a.createElement("div", {
						className: Object(d.a)(t, B.a.awardBadges)
					}, e, this.renderAwardings(c), m && n.a.createElement(_, {
						onClick: this.handleAddAward
					}), r && this.renderAwarders(c), p && n.a.createElement(E, {
						onClick: this.handleAddAward
					}))
				}
			}
			t.a = k(Object(j.b)(D))
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/higherOrderComponents/makeAsync.tsx");
			var u = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("SubredditPremiumBadgeHovercardTooltip")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/helpers/economics/sortBadges.ts"),
				x = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				g = s("./src/reddit/models/Badge/index.ts");
			var w = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				v = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				E = s.n(v);
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "a", (function() {
				return S
			}));
			const O = "add-custom-badge-tooltip",
				j = 100,
				f = 2 * j;
			class y extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, j)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, f)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return n.a.createElement("img", {
						className: Object(i.a)(E.a.image, this.props.className),
						src: "".concat(d.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(O, "-").concat(this.props.uniqueIdentifier);
					return n.a.createElement(o.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: E.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: E.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(x.a, {
						className: E.a.addCustom
					})), n.a.createElement(w, {
						className: E.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(this.props.badges).map(e => {
						const t = Object(g.b)(24, 24, e),
							s = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return n.a.createElement(o.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, n.a.createElement("div", {
							className: Object(i.a)(E.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: E.a.image,
							id: s,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? n.a.createElement(u, {
							badge: e,
							correlationId: this.props.correlationId,
							className: E.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: s,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: s,
							text: e.title
						})))
					}))
				}
			}
			const A = Object(a.c)({
					badges: (e, t) => {
						let {
							subredditId: s,
							userId: o
						} = t;
						return ((e.users.appliedBadges[o] || {})[s] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: h.d.spPremium
				}),
				T = Object(a.c)({
					badges: (e, t) => {
						let {
							subredditId: s
						} = t;
						const o = e.user.account;
						if (o) {
							return ((e.users.appliedBadges[o.id] || {})[s] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: h.d.spPremium
				}),
				C = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.h)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				}),
				I = Object(r.b)(A, C)(y),
				S = Object(r.b)(T, C)(y)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				m = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/selectors/economics.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				h = s.n(p);

			function b(e) {
				const {
					badges: t
				} = e;
				return t.length ? n.a.createElement(l.b, {
					useHovercard: !0,
					badges: t,
					className: Object(d.a)(e.className, h.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && t.length < 2 && e.accountId === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			t.b = Object(r.b)(() => Object(a.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: o
					} = t;
					return Object(u.q)(e, s, o)
				},
				customBadgesEnabled: m.d.spCustomBadges,
				premiumEnabled: e => m.d.spPremium(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.h)()),
				onOpenUploadDialog: () => e(Object(i.j)())
			}))(b)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/selectors/economics.ts");

			function i(e) {
				const {
					badges: t
				} = e, s = t[t.length - 1];
				return s && !e.ignore ? n.a.cloneElement(e.children, {
					style: s.extra && s.extra.style && s.extra.style.color ? Object.assign({}, e.children.props.style || {}, {
						color: s.extra.style.color,
						fontWeight: 700
					}) : e.children.props.style
				}) : e.children
			}
			t.b = Object(r.b)(() => Object(a.c)({
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: o
					} = t;
					return Object(d.q)(e, s, o)
				}
			}))(i)
		},
		"./src/reddit/components/Economics/Support/DonationAmount/async.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/reddit/featureFlags/index.ts"),
				c = s("./src/reddit/selectors/economics.ts"),
				l = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const m = Object(d.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("EconomicsSupportDonationAmount").then(s.bind(null, "./src/reddit/components/Economics/Support/DonationAmount/index.tsx")).then(e => e.default)
			});
			const u = Object(a.c)({
				amountIsNotZero: (e, t) => {
					const s = Object(c.j)(e, t);
					return 0 !== parseInt(s)
				},
				featureEnabled: i.d.spSupport
			});
			t.a = Object(r.b)(u)((function(e) {
				const {
					amountIsNotZero: t,
					featureEnabled: s
				} = e, o = l(e, ["amountIsNotZero", "featureEnabled"]);
				return e.featureEnabled && e.amountIsNotZero ? n.a.createElement(m, o) : null
			}))
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx");
			const n = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceUserPublicPointsDisplay").then(s.bind(null, "./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx")).then(e => e.default)
			});
			t.a = n
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = "UserInfoTooltip",
				a = () => null;
			t.b = Object(o.a)({
				ErrorComponent: a,
				getComponent: () => Object(n.a)(() => Promise.all([s.e("AuthorHovercard~Settings"), s.e("AuthorHovercard")]).then(s.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/PostTopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2kj4VmBwjxriyYFAErhLcT",
				badge: "_2v3rPYFjifVGM7CfOh1dOl",
				container: "_3AStxql1mQsrZuUIFP9xSg",
				premiumIcon: "_6W0v52Yp6BzEfoWlrczS8",
				contractorIcon: "MMQAY3zdk1u4R9hIKTklf",
				adminIcon: "s46mo3ittWDxpPuCSXJ_T",
				crosspostIcon: "_3hh-iGjzOv78L_7t_PUHev",
				link: "eQgJJIfdY4JNXam_N622j",
				publicWallet: "SxdIdV2SgMWcIFG6Qsk0Q",
				authorLink: "_2tbHP6ZydRpjI44J3syuqC",
				outboundLink: "_3V0C4FGg6153xIBQjwsycq",
				flairContainer: "NAURX0ARMmhJ5eqxQrlQW",
				externalLink: "_3jOxDPIQ0KaOWpzvSQo-1s",
				sponsored: "_1iAifs5p5MzPoJz5YrErUW",
				text: "_2fCzxBE1dlMh4OFc7B3Dun",
				MetaSeparator: "_3V4xlrklKBP2Hg51ejjjvz",
				metaSeparator: "_3V4xlrklKBP2Hg51ejjjvz"
			}
		},
		"./src/reddit/components/PostTopMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/humanizeDateTime/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				p = s("./src/reddit/helpers/isCrosspost.ts");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var b, x = e => n.a.createElement("svg", h({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), n.a.createElement("path", {
					d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
				}), n.a.createElement("path", {
					d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
				})),
				g = s("./src/reddit/actions/tooltip.ts"),
				w = s("./src/reddit/components/AuthorLink/index.tsx"),
				v = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				E = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				O = s("./src/reddit/components/Flair/index.tsx"),
				j = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				f = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				y = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				A = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				T = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				I = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				S = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				B = s("./src/reddit/constants/posts.ts"),
				N = s("./src/reddit/contexts/InsideOverlay.tsx"),
				P = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				M = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				L = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				k = (s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/models/Flair/index.ts")),
				H = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				D = s("./src/reddit/models/Post/index.ts"),
				U = s("./src/reddit/models/Subreddit/index.ts"),
				F = s("./src/reddit/selectors/authorFlair.ts"),
				R = s("./src/reddit/selectors/userFlair.ts"),
				Z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				V = s("./src/reddit/components/PostTopMeta/index.m.less"),
				W = s.n(V);
			s.d(t, "c", (function() {
					return b
				})), s.d(t, "a", (function() {
					return Q
				})), s.d(t, "b", (function() {
					return X
				})),
				function(e) {
					e.StickyPost = "sticky", e.Lightbox = "lightbox"
				}(b || (b = {}));
			const z = e => Object(M.a)(Object(_.a)(e), H.a.metaText, H.b.metaText),
				Q = m.a.wrapped(P.b, "MetaSeparator", W.a),
				q = m.a.span("text", W.a),
				G = Object(Z.t)(),
				J = Object(r.b)(() => Object(a.c)({
					authorFlair: F.a,
					createdTooltipId: (e, t) => {
						let {
							isOverlay: s,
							post: o
						} = t;
						return "PostTopMeta--Created--".concat(s, "--").concat(o.id)
					},
					isUserFlairEnabled: (e, t) => Object(R.a)(e, {
						subredditId: t.post.belongsTo.id
					}),
					flairPosition: (e, t) => Object(R.d)(e, {
						subredditId: t.post.belongsTo.id
					})
				}), e => ({
					onHideTooltip: () => e(Object(g.h)()),
					onShowTooltip: t => e(Object(g.f)({
						tooltipId: t
					}))
				})),
				X = e => {
					const t = !e.isDeleted && e.post.distinguishType === i.B.ADMIN;
					return n.a.createElement(w.a, {
						className: W.a.authorLink,
						"data-click-id": "user",
						author: e.post.author,
						isAdmin: t,
						isAdminEmeritus: t,
						isAuthorDeleted: e.isDeleted,
						isUnstyled: !0,
						style: e.style
					}, "u/".concat(e.post.author), t && n.a.createElement(L.a, {
						className: W.a.adminIcon
					}), e.renderContractorBadge && n.a.createElement(L.a, {
						className: W.a.contractorIcon
					}), !1)
				};
			class Y extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const {
						className: e,
						createdTooltipId: t,
						isOverlay: s,
						isUserFlairEnabled: r,
						flairPosition: a,
						language: c,
						onHideTooltip: m,
						pageLayer: h,
						post: b,
						authorFlair: g,
						showSub: w = !1,
						showTimestamp: N = !0,
						subredditOrProfile: P,
						tooltipType: _
					} = this.props, M = h && h.meta && h.meta.name === i.xb.COMMENTS, L = Object(p.a)(b), H = a === k.b.Left, F = b.authorIsContractor && !!P && P.type === U.b.EmployeesOnly, R = !s && !M, Z = n.a.createElement(n.a.Fragment, null, !L && n.a.createElement(q, {
						style: {
							color: z(this.props)
						}
					}, "Posted by"), L && n.a.createElement(o.Fragment, null, n.a.createElement(x, {
						className: W.a.crosspostIcon
					}), n.a.createElement(q, {
						style: {
							color: z(this.props)
						}
					}, "Crossposted by")), g && H && n.a.createElement("div", {
						className: W.a.flairContainer
					}, n.a.createElement(O.b, {
						disabled: !r,
						flair: g,
						forceSmallEmojis: !0,
						usesCommunityStyles: R
					})), Object(D.h)(b.author) ? n.a.createElement(X, {
						post: b,
						isDeleted: !0,
						renderContractorBadge: F,
						style: {
							color: z(this.props)
						}
					}) : n.a.createElement(o.Fragment, null, !Object(D.h)(b.author) && n.a.createElement(v.b, {
						className: W.a.badge,
						subredditId: b.belongsTo.id,
						uniqueIdentifier: "".concat(b.id, "-").concat(s),
						userId: b.authorId
					}), n.a.createElement(f.b, {
						postOrComment: b,
						tooltipType: _
					}, n.a.createElement(E.b, {
						ignore: Object(D.h)(b.author) || !!b.distinguishType && b.distinguishType !== i.B.NONE,
						subredditId: b.belongsTo.id,
						userId: b.authorId
					}, n.a.createElement(X, {
						post: b,
						renderContractorBadge: F,
						style: {
							color: z(this.props)
						}
					})))), g && !H && n.a.createElement("div", {
						className: W.a.flairContainer
					}, n.a.createElement(O.b, {
						disabled: !r,
						flair: g,
						forceSmallEmojis: !0,
						usesCommunityStyles: R
					})), b.belongsTo.type === B.a.SUBREDDIT && !Object(D.h)(b.author) && n.a.createElement(j.a, {
						className: W.a.publicWallet,
						contentId: b.id,
						subredditId: b.belongsTo.id,
						userId: b.authorId,
						username: b.author
					}));
					return n.a.createElement("div", {
						className: Object(d.a)(W.a.container, e)
					}, w && P && n.a.createElement(y.a, {
						postId: b.id,
						subredditName: P.name,
						tooltipType: _
					}, n.a.createElement(S.a, {
						"data-click-id": "subreddit",
						to: P.url
					}, P.displayText)), P && P.isQuarantined && n.a.createElement(C.a, null), w && !L && n.a.createElement(Q, {
						className: this.props.metaSeparatorClassName
					}, "•"), b.isSponsored && n.a.createElement(o.Fragment, null, n.a.createElement(I.a, null), n.a.createElement(Q, {
						className: this.props.metaSeparatorClassName
					}, "•")), Z, n.a.createElement(T.e, {
						post: b
					}), N && n.a.createElement("a", {
						className: W.a.externalLink,
						"data-click-id": "timestamp",
						href: b.permalink,
						id: t,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: m,
						style: {
							color: z(this.props)
						},
						target: "_blank",
						rel: "nofollow noopener"
					}, Object(u.d)(c, b.created / 1e3), n.a.createElement(A.c, {
						caretOnTop: s,
						tooltipId: t,
						text: Object(l.a)(b.created)
					})))
				}
			}
			t.d = G(Object(N.b)(Object(c.a)(J(Y))))
		},
		"./src/reddit/components/SponsoredLabel/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2oEYZXchPfHwcf9mTMGMg8",
				wrapper: "_2oEYZXchPfHwcf9mTMGMg8"
			}
		},
		"./src/reddit/components/SponsoredLabel/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/components/SponsoredLabel/index.m.less"),
				d = s.n(a);
			const i = s("./src/lib/lessComponent.tsx").a.span("Wrapper", d.a);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement(i, {
					className: t
				}, n.a.createElement(r.c, null, "promoted"))
			}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = (e, t) => "awardItem__".concat(t, "-").concat(e)
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return l
			}));
			var o = s("./src/app/strings/index.ts"),
				n = s("./src/lib/humanizeUTCDate/index.tsx"),
				r = s("./src/reddit/i18n/utils.ts");
			const a = (e, t) => t.approvedBy && "string" == typeof t.approvedBy && t.approvedAtUTC ? Object(o.a)(e, "modTools.approvedBy", {
					username: t.approvedBy,
					time: Object(n.a)(t.approvedAtUTC)
				}) : Object(r.c)("Approved"),
				d = Object(o.e)("modTools.actionByAutomod"),
				i = (e, t) => {
					let s = t.bannedBy && "string" == typeof t.bannedBy && t.bannedAtUTC ? Object(o.a)(e, "modTools.removedBy", {
						username: t.bannedBy,
						time: Object(n.a)(t.bannedAtUTC)
					}) : Object(r.c)("Removed");
					return t.modReasonBy && t.modRemovalReason && (s = s + "\n" + Object(o.a)(e, "modTools.reasonBy", {
						username: t.modReasonBy
					}) + t.modRemovalReason), t.modNote && (s = s + "\n" + Object(o.a)(e, "modTools.note") + t.modNote), s
				},
				c = (e, t) => "".concat(t, " ").concat(Object(r.c)("Reports")),
				l = (e, t) => t.bannedBy && "string" == typeof t.bannedBy && t.bannedAtUTC ? Object(o.a)(e, "modTools.removedAsSpamBy", {
					username: t.bannedBy,
					time: Object(n.a)(t.bannedAtUTC)
				}) : Object(r.c)("Removed as spam")
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), n.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		}
	}
]);
//# sourceMappingURL=ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~12812a0e.de5d5eeb03a7d5787818.js.map