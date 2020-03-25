// https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc.a8b7075180c62dcfa988.js
// Retrieved at 3/25/2020, 5:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"], {
		"./src/graphql/operations/HideAwardOnTarget.json": function(e) {
			e.exports = JSON.parse('{"id":"4e43964bff6f"}')
		},
		"./src/lib/humanizeDateTime/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			const o = 9999999999;

			function r(e) {
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				d = s("./src/reddit/controls/InternalLink/index.tsx"),
				i = s("./src/reddit/components/AuthorLink/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const t = Object(n.a)(e.className, c.a.authorLinkStyles, {
					[c.a.isAdmin]: e.isAdmin,
					[c.a.isAdminEmeritus]: e.isAdminEmeritus,
					[c.a.isLivestreaming]: e.isLivestreaming,
					[c.a.isMod]: e.isMod,
					[c.a.isOp]: e.isOp,
					[c.a.isStrong]: e.isStrong,
					[c.a.isUnstyled]: e.isUnstyled
				});
				return e.isExternal || e.isLivestreaming ? r.a.createElement("a", {
					className: t,
					href: "".concat(a.a.redditUrl, "/user/").concat(e.author),
					rel: "nofollow",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? r.a.createElement("span", {
					className: Object(n.a)(c.a.deletedAuthorLink, e.className)
				}, e.children) : r.a.createElement(d.a, {
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/graphql/operations/HideAwardOnTarget.json"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/lib/makeGqlRequest/index.ts"),
				h = s("./src/reddit/actions/gold/constants.ts");
			const x = Object(c.a)(h.C),
				f = e => {
					let {
						awardId: t,
						thingId: s
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: n
						} = r;
						e(x({
							awardId: t,
							thingId: s
						}));
						const a = Object(l.c)("Something went wrong. The Award could not be hidden at this time.");
						try {
							(await ((e, t, s) => Object(b.a)(e, Object.assign({}, m, {
								variables: {
									awardId: t,
									targetId: s
								}
							})))(n(), t, s)).error && e(Object(u.e)({
								kind: p.b.Error,
								duration: u.a,
								text: a
							}))
						} catch (d) {
							e(Object(u.e)({
								kind: p.b.Error,
								duration: u.a,
								text: a
							}))
						}
					}
				};
			var g = s("./src/reddit/actions/gold/modals.ts"),
				v = s("./src/reddit/actions/modal.ts"),
				O = s("./src/reddit/actions/tooltip.ts");
			const w = (e, t) => {
				const s = Object(l.a)("awards", ["Award", "Awards"], t);
				return 1 === e.length ? Object(l.c)("".concat(s, " from ").concat(Object(l.b)("awarder-0", e[0]))) : 2 === e.length ? Object(l.c)("".concat(s, " from ").concat(Object(l.b)("awarder-0", e[0]), " and ").concat(Object(l.b)("awarder-1", e[1]))) : 3 === e.length ? Object(l.c)("".concat(s, " from ").concat(Object(l.b)("awarder-0", e[0]), ", ").concat(Object(l.b)("awarder-1", e[1]), ", and ").concat(Object(l.b)("awarder-2", e[2]))) : e.length > 3 ? Object(l.c)("".concat(s, " from ").concat(Object(l.b)("awarder-0", e[0]), ", ").concat(Object(l.b)("awarder-1", e[1]), ", ").concat(Object(l.b)("awarder-2", e[2]), ", and more")) : void 0
			};
			var j = s("./src/reddit/helpers/isPost.ts"),
				y = s("./src/reddit/i18n/components.tsx"),
				E = s("./src/reddit/icons/fonts/helpers.tsx");
			var A = e => n.a.createElement("i", {
				className: Object(i.a)(Object(E.b)("addGild"), e.className)
			});
			var T = e => n.a.createElement("i", {
					className: Object(i.a)(Object(E.b)("addGildDashed"), e.className)
				}),
				C = s("./src/reddit/components/AddAwardHoverButton/index.m.less"),
				N = s.n(C);
			class S extends n.a.PureComponent {
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
					} = this.props, s = this.state.isHovered ? A : T;
					return n.a.createElement("button", {
						className: Object(i.a)(e, N.a.AddAwardHoverButton),
						onClick: t,
						onBlur: this.handleMouseLeave,
						onFocus: this.handleMouseEnter,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, n.a.createElement(s, {
						className: N.a.Icon
					}), n.a.createElement(y.c, null, "Add"))
				}
			}
			var I = S,
				M = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				P = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/models/Gold/Award.ts"),
				k = s("./src/reddit/selectors/activeModalId.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				U = s("./src/higherOrderComponents/makeAsync.tsx"),
				D = s("./src/lib/loadWithRetries/index.ts");
			var R = Object(U.a)({
					getComponent: () => Object(D.a)(() => s.e("AwardTooltip").then(s.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				F = s("./src/reddit/components/AwardBadges/index.m.less"),
				W = s.n(F);
			class Q extends n.a.PureComponent {
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
					return n.a.createElement(n.a.Fragment, null, t > 1 && " • ", n.a.createElement(y.c, null, n.a.createElement(y.b, {
						name: "award-name"
					}, e.name), " Award"))
				}
				render() {
					const {
						award: e,
						className: t,
						count: s,
						iconClassName: o,
						onHideAward: r,
						onHideTooltip: a,
						postOrComment: d,
						tooltipId: c,
						tooltipLocation: l
					} = this.props;
					if (s <= 0) return null;
					const m = e.icon32 ? e.icon32.url : e.icon.url,
						u = e.awardType === B.d.Moderator,
						p = Object(H.a)(e.id, d.id),
						b = s > 1 || u,
						h = "container" === l;
					return n.a.createElement("span", {
						className: Object(i.a)(W.a.awardItem, t),
						id: h ? c : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: a
					}, n.a.createElement("span", {
						id: h ? "" : c
					}, n.a.createElement("img", {
						alt: e.name,
						className: Object(i.a)(W.a.awardIcon, {
							[W.a.animate]: this.state.animate
						}, o),
						id: p,
						ref: this.imageRef,
						src: m
					})), n.a.createElement("span", {
						className: b ? W.a.itemText : ""
					}, s > 1 && s, u && this.renderModAwardName()), n.a.createElement(R, {
						award: e,
						onHideAward: r,
						postOrComment: d,
						tooltipId: c
					}))
				}
			}
			class z extends n.a.PureComponent {
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
					} = this.props, s = this.state.isHovered ? A : T;
					return n.a.createElement("button", {
						className: Object(i.a)(e, W.a.badgeButton, W.a.visibilityEffect),
						onClick: t,
						onBlur: this.handleMouseLeave,
						onFocus: this.handleMouseEnter,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, n.a.createElement(s, {
						className: W.a.icon
					}))
				}
			}
			var V = z;
			const Z = (e, t) => {
					const s = Object(j.a)(e) ? "Post" : "Comment";
					let o = "".concat(s, "AwardBadges--").concat(e);
					return t && (o = "".concat(o, "--").concat(t)), o
				},
				q = 5,
				J = Object(d.c)({
					allAwards: e => e.awards.models,
					currentUser: L.i,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(k.a)(e),
					isLoggedIn: L.G
				}),
				G = Object(a.b)(J, (e, t) => {
					let {
						isOverlay: s,
						thing: o
					} = t;
					return {
						hideAward: t => e(f({
							awardId: t,
							thingId: Object(j.a)(o.id) ? o.postId : o.id
						})),
						onAddAward: () => {
							const t = Object(j.a)(o.id) ? o.postId : o.id;
							return e(Object(g.d)(t, s))
						},
						onHideTooltip: () => e(Object(O.i)()),
						onShowTooltip: t => e(Object(O.f)({
							tooltipId: t
						})),
						onToggleHideAwardModal: () => e(Object(v.i)("AwardBadges--Modal--HideAwardConfirmation"))
					}
				});
			class Y extends n.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async () => {
						const {
							onAddAward: e,
							sendEvent: t,
							thing: o
						} = this.props;
						e();
						const {
							clickAddAward: r
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(r(o.id))
					}, this.handleHideAward = async e => {
						const {
							sendEvent: t,
							onToggleHideAwardModal: o,
							thing: r
						} = this.props;
						this.setState({
							selectedAward: e
						});
						const {
							clickHideAward: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(n(e, r.id)), o()
					}, this.handleHideAwardConfirmed = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: o
						} = this.state, {
							clickConfirmHideAward: r
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						o && (e(r(o, t.id)), this.props.hideAward(o.id))
					}, this.handleHideAwardCanceled = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: o
						} = this.state, {
							clickCancelHideAward: r
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						o && e(r(o, t.id))
					}, this.handleShowAllAwards = e => {
						const {
							onShowAllClick: t
						} = this.props;
						t ? t(e) : this.setState({
							showAllAwards: !0
						})
					}, this.state = {
						selectedAward: null,
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
						showAllClassName: d,
						tooltipType: c,
						thing: l
					} = this.props, m = Z(l.id, c), u = "".concat(m, "-view-all");
					let p = [];
					p = s || t ? e : e.length > q ? e.slice(0, q - 1) : e;
					const b = e.length > p.length ? e.slice(p.length).reduce((e, t) => e + (l.awardCountsById && l.awardCountsById[t.id] || 0), 0) : 0,
						h = n.a.createElement(y.c, null, "& ", n.a.createElement(y.b, {
							name: "hidden-award-cound"
						}, b), " More");
					return n.a.createElement(n.a.Fragment, null, p.map(e => {
						const t = l.awardCountsById ? l.awardCountsById[e.id] : 0;
						return n.a.createElement(Q, {
							award: e,
							className: o,
							count: t,
							key: e.id,
							onHideAward: () => this.handleHideAward(e),
							onHideTooltip: r,
							onShowTooltip: a,
							postOrComment: l,
							tooltipId: "".concat(m, "-").concat(e.id),
							tooltipLocation: "icon"
						})
					}), b > 0 && n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
						"data-click-id": "awards",
						id: u,
						className: Object(i.a)(W.a.showAllButton, d),
						onClick: this.handleShowAllAwards,
						onMouseEnter: () => a(u),
						onMouseLeave: r
					}, h), n.a.createElement(P.c, {
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
						r = w(s, o);
					return n.a.createElement("span", {
						className: W.a.awarders
					}, r)
				}
				render() {
					const {
						children: e,
						className: t,
						currentUser: s,
						isLoggedIn: r,
						isConfirmModalOpen: a,
						hideCta: d,
						showAwarders: c,
						onToggleHideAwardModal: l,
						allAwards: m,
						thing: u
					} = this.props, p = Object(B.m)(Object.keys(u.awardCountsById || {}).map(e => m[e]).filter(Boolean)), b = s && s.id === u.authorId, h = !!p.length, x = !d && r && u.isGildable && h && !c, f = !d && r && u.isGildable && h && !Object(j.a)(u.id) && c;
					return n.a.createElement("div", {
						className: Object(i.a)(t, W.a.awardBadges)
					}, e, this.renderAwardings(p), x && n.a.createElement(V, {
						onClick: this.handleAddAward
					}), c && this.renderAwarders(p), f && n.a.createElement(I, {
						onClick: this.handleAddAward
					}), a && s && this.state.selectedAward && n.a.createElement(M.a, {
						actionText: o.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: b ? Object(j.a)(u.id) ? o.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : o.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(j.a)(u.id) ? o.fbt._("The award giver(s) and recipient will be notified that moderator u/{modName} has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [o.fbt._param("modName", s.displayText ? s.displayText : s.username || ""), o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "1c649v"
						}) : o.fbt._("The award giver(s) and recipient will be notified that moderator u/{modName} has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [o.fbt._param("modName", s.displayText ? s.displayText : s.username || ""), o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "1aqKr5"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: l,
						withOverlay: !0
					}))
				}
			}
			t.a = G(Object(_.c)(Y))
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
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
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
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/helpers/economics/sortBadges.ts"),
				x = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = s("./src/reddit/models/Badge/index.ts");
			var g = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				v = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				O = s.n(v);
			s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return N
			})), s.d(t, "a", (function() {
				return S
			}));
			const w = "add-custom-badge-tooltip",
				j = 100,
				y = 2 * j;
			class E extends r.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, j)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, y)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return r.a.createElement("img", {
						className: Object(i.a)(O.a.image, this.props.className),
						src: "".concat(d.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(w, "-").concat(this.props.uniqueIdentifier);
					return r.a.createElement(o.Fragment, null, this.props.showAddCustom && r.a.createElement("div", {
						className: O.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, r.a.createElement("button", {
						className: O.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, r.a.createElement(x.a, {
						className: O.a.addCustom
					})), r.a.createElement(g, {
						className: O.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(this.props.badges).map(e => {
						const t = Object(f.b)(24, 24, e),
							s = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return r.a.createElement(o.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, r.a.createElement("div", {
							className: Object(i.a)(O.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, r.a.createElement("img", {
							className: O.a.image,
							id: s,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? r.a.createElement(u, {
							badge: e,
							correlationId: this.props.correlationId,
							className: O.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: s,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : r.a.createElement(p.c, {
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
					useHovercard: b.d.spPremium
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
					useHovercard: b.d.spPremium
				}),
				C = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.i)())
				}),
				N = Object(n.b)(A, C)(E),
				S = Object(n.b)(T, C)(E)
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				i = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(n.a)(e => r.a.createElement(a.c, null, r.a.createElement(a.g, null, r.a.createElement(c.a, null, r.a.createElement(a.n, null, e.headerText || Object(i.c)("Confirm")), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.j, null, r.a.createElement(a.m, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(a.e, null, r.a.createElement(a.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || Object(i.c)("Cancel")), r.a.createElement(a.r, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				m = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/selectors/economics.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				b = s.n(p);

			function h(e) {
				const {
					badges: t
				} = e;
				return t.length ? r.a.createElement(l.b, {
					useHovercard: !0,
					badges: t,
					className: Object(d.a)(e.className, b.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && t.length < 2 && e.accountId === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			t.b = Object(n.b)(() => Object(a.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: o
					} = t;
					return Object(u.v)(e, s, o)
				},
				customBadgesEnabled: m.d.spCustomBadges,
				premiumEnabled: e => m.d.spPremium(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(i.i)())
			}))(h)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/selectors/economics.ts");

			function i(e) {
				const {
					badges: t
				} = e, s = t[t.length - 1];
				return s && !e.ignore ? r.a.cloneElement(e.children, {
					style: s.extra && s.extra.style && s.extra.style.color ? Object.assign({}, e.children.props.style || {}, {
						color: s.extra.style.color,
						fontWeight: 700
					}) : e.children.props.style
				}) : e.children
			}
			t.b = Object(n.b)(() => Object(a.c)({
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: o
					} = t;
					return Object(d.v)(e, s, o)
				}
			}))(i)
		},
		"./src/reddit/components/Economics/Support/DonationAmount/async.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/reddit/featureFlags/index.ts"),
				c = s("./src/reddit/selectors/economics.ts"),
				l = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
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
					const s = Object(c.m)(e, t);
					return 0 !== parseInt(s)
				},
				featureEnabled: i.d.spSupport
			});
			t.a = Object(n.b)(u)((function(e) {
				const {
					amountIsNotZero: t,
					featureEnabled: s
				} = e, o = l(e, ["amountIsNotZero", "featureEnabled"]);
				return e.featureEnabled && e.amountIsNotZero ? r.a.createElement(m, o) : null
			}))
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx");
			const r = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceUserPublicPointsDisplay").then(s.bind(null, "./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx")).then(e => e.default)
			});
			t.a = r
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const n = "UserInfoTooltip",
				a = () => null;
			t.b = Object(o.a)({
				ErrorComponent: a,
				getComponent: () => Object(r.a)(() => Promise.all([s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("AuthorHovercard")]).then(s.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				i = s.n(d),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
					}
					return s
				};
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class p extends o.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: o
							} = t,
							r = m(t, ["className", "consumers"]);
						l.a.publish(c.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					i()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					i()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(n.b)(u, {})(p),
				h = s("./src/reddit/selectors/comments.ts"),
				x = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(h.n)(e, t),
					o = Object(x.G)(e, t);
				return {
					comment: s,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var g = Object(n.b)(() => Object(a.a)(f, h.j, (e, t) => Object.assign({}, e, {
				depth: t
			})))(e => r.a.createElement(b, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const v = (e, t) => {
				const s = Object(h.n)(e, t),
					o = Object(x.G)(e, t);
				return {
					comment: s,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var O = Object(n.b)(() => Object(a.a)(v, e => e))(e => r.a.createElement(b, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var w = Object(n.b)(() => Object(a.c)({
					subreddit: x.P
				}))(e => r.a.createElement(b, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				j = s("./src/reddit/selectors/posts.ts");
			var y = Object(n.b)(() => Object(a.c)({
				post: j.M,
				subredditOrProfile: j.Y,
				isModerator: (e, t) => {
					const s = Object(j.Y)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var E = Object(n.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(j.Y)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(j.Y)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var A = Object(n.b)(() => Object(a.c)({
				post: j.M,
				subredditOrProfile: j.Y,
				isModerator: (e, t) => {
					const s = Object(j.Y)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var T = Object(n.b)(() => Object(a.c)({
				subreddit: x.P
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var C = Object(n.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(x.J)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var N = Object(n.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(x.P)(e, {
						subredditId: s
					}) : null
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return N
			}))
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
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/humanizeDateTime/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				p = s("./src/reddit/helpers/isCrosspost.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var h, x = e => r.a.createElement("svg", b({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), r.a.createElement("path", {
					d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
				}), r.a.createElement("path", {
					d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
				})),
				f = s("./src/reddit/actions/tooltip.ts"),
				g = s("./src/reddit/components/AuthorLink/index.tsx"),
				v = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				O = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				w = s("./src/reddit/components/Flair/index.tsx"),
				j = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				y = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				E = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				A = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				T = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				N = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				S = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				I = s("./src/reddit/constants/posts.ts"),
				M = s("./src/reddit/contexts/InsideOverlay.tsx"),
				P = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				B = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				k = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				L = (s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/models/Flair/index.ts")),
				H = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				U = s("./src/reddit/models/Post/index.ts"),
				D = s("./src/reddit/models/Subreddit/index.ts"),
				R = s("./src/reddit/selectors/authorFlair.ts"),
				F = s("./src/reddit/selectors/userFlair.ts"),
				W = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Q = s("./src/reddit/components/PostTopMeta/index.m.less"),
				z = s.n(Q);
			s.d(t, "c", (function() {
					return h
				})), s.d(t, "a", (function() {
					return Z
				})), s.d(t, "b", (function() {
					return Y
				})),
				function(e) {
					e.StickyPost = "sticky", e.Lightbox = "lightbox"
				}(h || (h = {}));
			const V = e => Object(B.a)(Object(_.a)(e), H.a.metaText, H.b.metaText),
				Z = m.a.wrapped(P.b, "MetaSeparator", z.a),
				q = m.a.span("text", z.a),
				J = Object(W.t)(),
				G = Object(n.b)(() => Object(a.c)({
					authorFlair: R.a,
					createdTooltipId: (e, t) => {
						let {
							isOverlay: s,
							post: o
						} = t;
						return "PostTopMeta--Created--".concat(s, "--").concat(o.id)
					},
					isUserFlairEnabled: (e, t) => Object(F.a)(e, {
						subredditId: t.post.belongsTo.id
					}),
					flairPosition: (e, t) => Object(F.d)(e, {
						subredditId: t.post.belongsTo.id
					})
				}), e => ({
					onHideTooltip: () => e(Object(f.i)()),
					onShowTooltip: t => e(Object(f.f)({
						tooltipId: t
					}))
				})),
				Y = e => {
					const t = !e.isDeleted && e.post.distinguishType === i.C.ADMIN;
					return r.a.createElement(g.a, {
						className: z.a.authorLink,
						"data-click-id": "user",
						author: e.post.author,
						isAdmin: t,
						isAdminEmeritus: t,
						isAuthorDeleted: e.isDeleted,
						isUnstyled: !0,
						style: e.style
					}, "u/".concat(e.post.author), t && r.a.createElement(k.a, {
						className: z.a.adminIcon
					}), e.renderContractorBadge && r.a.createElement(k.a, {
						className: z.a.contractorIcon
					}), !1)
				};
			class K extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const {
						className: e,
						createdTooltipId: t,
						isOverlay: s,
						isUserFlairEnabled: n,
						flairPosition: a,
						language: c,
						onHideTooltip: m,
						pageLayer: b,
						post: h,
						authorFlair: f,
						showSub: g = !1,
						showTimestamp: M = !0,
						subredditOrProfile: P,
						tooltipType: _
					} = this.props, B = b && b.meta && b.meta.name === i.Ab.COMMENTS, k = Object(p.a)(h), H = a === L.b.Left, R = h.authorIsContractor && !!P && P.type === D.c.EmployeesOnly, F = !s && !B, W = r.a.createElement(r.a.Fragment, null, !k && r.a.createElement(q, {
						style: {
							color: V(this.props)
						}
					}, "Posted by"), k && r.a.createElement(o.Fragment, null, r.a.createElement(x, {
						className: z.a.crosspostIcon
					}), r.a.createElement(q, {
						style: {
							color: V(this.props)
						}
					}, "Crossposted by")), f && H && r.a.createElement("div", {
						className: z.a.flairContainer
					}, r.a.createElement(w.b, {
						disabled: !n,
						flair: f,
						forceSmallEmojis: !0,
						usesCommunityStyles: F
					})), Object(U.h)(h.author) ? r.a.createElement(Y, {
						post: h,
						isDeleted: !0,
						renderContractorBadge: R,
						style: {
							color: V(this.props)
						}
					}) : r.a.createElement(o.Fragment, null, !Object(U.h)(h.author) && r.a.createElement(v.b, {
						className: z.a.badge,
						subredditId: h.belongsTo.id,
						uniqueIdentifier: "".concat(h.id, "-").concat(s),
						userId: h.authorId
					}), r.a.createElement(y.b, {
						postOrComment: h,
						tooltipType: _
					}, r.a.createElement(O.b, {
						ignore: Object(U.h)(h.author) || !!h.distinguishType && h.distinguishType !== i.C.NONE,
						subredditId: h.belongsTo.id,
						userId: h.authorId
					}, r.a.createElement(Y, {
						post: h,
						renderContractorBadge: R,
						style: {
							color: V(this.props)
						}
					})))), f && !H && r.a.createElement("div", {
						className: z.a.flairContainer
					}, r.a.createElement(w.b, {
						disabled: !n,
						flair: f,
						forceSmallEmojis: !0,
						usesCommunityStyles: F
					})), h.belongsTo.type === I.a.SUBREDDIT && !Object(U.h)(h.author) && r.a.createElement(j.a, {
						className: z.a.publicWallet,
						contentId: h.id,
						subredditId: h.belongsTo.id,
						userId: h.authorId,
						username: h.author
					}));
					return r.a.createElement("div", {
						className: Object(d.a)(z.a.container, e)
					}, g && P && r.a.createElement(E.a, {
						postId: h.id,
						subredditName: P.name,
						tooltipType: _
					}, r.a.createElement(S.a, {
						"data-click-id": "subreddit",
						to: P.url
					}, P.displayText)), P && P.isQuarantined && r.a.createElement(C.a, null), g && !k && r.a.createElement(Z, {
						className: this.props.metaSeparatorClassName
					}, "•"), h.isSponsored && r.a.createElement(o.Fragment, null, r.a.createElement(N.a, null), r.a.createElement(Z, {
						className: this.props.metaSeparatorClassName
					}, "•")), W, r.a.createElement(T.e, {
						post: h
					}), M && r.a.createElement("a", {
						className: z.a.externalLink,
						"data-click-id": "timestamp",
						href: h.permalink,
						id: t,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: m,
						style: {
							color: V(this.props)
						},
						target: "_blank",
						rel: "nofollow noopener"
					}, Object(u.d)(c, h.created / 1e3), r.a.createElement(A.c, {
						caretOnTop: s,
						tooltipId: t,
						text: Object(l.a)(h.created)
					})))
				}
			}
			t.d = J(Object(M.b)(Object(c.a)(G(K))))
		},
		"./src/reddit/components/QuarantinedLabel/index.m.less": function(e, t, s) {
			e.exports = {
				quarantineIcon: "_3fdQM74ud_8KssWgeznOrR",
				Container: "_3Ph6ensT9WFRjOg8dQQKJK",
				container: "_3Ph6ensT9WFRjOg8dQQKJK"
			}
		},
		"./src/reddit/components/QuarantinedLabel/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				u = s.n(m);
			const p = ["center", "top"],
				b = ["center", "bottom"],
				h = d.a.div("Container", u.a),
				x = Object(a.a)(i.b),
				f = Object(c.t)({
					isProfileListingPage: c.F
				});
			class g extends n.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						isProfileListingPage: e
					} = this.props;
					if (!e) return null;
					const {
						showTooltip: t
					} = this.state;
					return n.a.createElement(h, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, n.a.createElement(l.a, {
						className: u.a.quarantineIcon
					}), o.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), n.a.createElement(x, {
						text: o.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: p,
						tooltipPosition: b
					}))
				}
			}
			t.a = f(g)
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
				r = s.n(o),
				n = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/components/SponsoredLabel/index.m.less"),
				d = s.n(a);
			const i = s("./src/lib/lessComponent.tsx").a.span("Wrapper", d.a);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement(i, {
					className: t
				}, r.a.createElement(n.c, null, "promoted"))
			}
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				r = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				n = s.n(r);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(o.a, "SubredditName", n.a);
			t.a = a
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				d = s.n(a);
			const i = e => r.a.createElement("span", {
				className: Object(n.a)(d.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: s
				} = e;
				return r.a.createElement(i, {
					className: Object(n.a)(d.a.metaSeparator, t),
					isSmall: s
				})
			}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = (e, t) => "awardItem__".concat(t, "-").concat(e)
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
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
				r = s("./src/lib/humanizeUTCDate/index.tsx"),
				n = s("./src/reddit/i18n/utils.ts");
			const a = (e, t) => t.approvedBy && "string" == typeof t.approvedBy && t.approvedAtUTC ? Object(o.a)(e, "modTools.approvedBy", {
					username: t.approvedBy,
					time: Object(r.a)(t.approvedAtUTC)
				}) : Object(n.c)("Approved"),
				d = Object(o.d)("modTools.actionByAutomod"),
				i = (e, t) => {
					let s = t.bannedBy && "string" == typeof t.bannedBy && t.bannedAtUTC ? Object(o.a)(e, "modTools.removedBy", {
						username: t.bannedBy,
						time: Object(r.a)(t.bannedAtUTC)
					}) : Object(n.c)("Removed");
					return t.modReasonBy && t.modRemovalReason && (s = s + "\n" + Object(o.a)(e, "modTools.reasonBy", {
						username: t.modReasonBy
					}) + t.modRemovalReason), t.modNote && (s = s + "\n" + Object(o.a)(e, "modTools.note") + t.modNote), s
				},
				c = (e, t) => "".concat(t, " ").concat(Object(n.c)("Reports")),
				l = (e, t) => t.bannedBy && "string" == typeof t.bannedBy && t.bannedAtUTC ? Object(o.a)(e, "modTools.removedAsSpamBy", {
					username: t.bannedBy,
					time: Object(r.a)(t.bannedAtUTC)
				}) : Object(n.c)("Removed as spam")
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(d);
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(a.b)("admin"), i.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(d);
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(a.b)("approve"), i.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(d);
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(a.b)("lock"), i.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(d);
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(a.b)("remove"), i.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(d);
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(a.b)("report"), i.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(d);
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(a.b)("spam"), i.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), r.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), r.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		}
	}
]);
//# sourceMappingURL=ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc.a8b7075180c62dcfa988.js.map