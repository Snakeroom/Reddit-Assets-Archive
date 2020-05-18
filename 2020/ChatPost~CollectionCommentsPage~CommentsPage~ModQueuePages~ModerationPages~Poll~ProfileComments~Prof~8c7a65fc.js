// https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc.906f704c8b90b8007c40.js
// Retrieved at 5/18/2020, 11:20:08 AM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, s) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isAdmin: "_1-wk-QXxJ0S4snrasETuaA",
				isAdminEmeritus: "sKTYSQHxlRLbA-0pCpguU",
				isMod: "_1VChcviPF84MLFsL2xfBCP",
				isOp: "_1uBAPhkb8ZOA-9p_B6inAR",
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
				l = s("./src/graphql/operations/HideAwardOnTarget.json"),
				m = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/lib/makeGqlRequest/index.ts"),
				b = s("./src/reddit/actions/gold/constants.ts");
			const h = Object(c.a)(b.C),
				x = e => {
					let {
						awardId: t,
						thingId: s
					} = e;
					return async (e, r, n) => {
						let {
							gqlContext: a
						} = n;
						e(h({
							awardId: t,
							thingId: s
						}));
						const d = o.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
							hk: "10OvOz"
						});
						try {
							(await ((e, t, s) => Object(p.a)(e, Object.assign({}, l, {
								variables: {
									awardId: t,
									targetId: s
								}
							})))(a(), t, s)).error && e(Object(m.e)({
								kind: u.b.Error,
								duration: m.a,
								text: d
							}))
						} catch (i) {
							e(Object(m.e)({
								kind: u.b.Error,
								duration: m.a,
								text: d
							}))
						}
					}
				};
			var f = s("./src/reddit/actions/gold/modals.ts"),
				g = s("./src/reddit/actions/modal.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				O = s("./src/reddit/helpers/isPost.ts"),
				w = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/models/Gold/Award.ts"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				S = s("./src/higherOrderComponents/makeAsync.tsx"),
				_ = s("./src/lib/loadWithRetries/index.ts");
			var N = Object(S.a)({
					getComponent: () => Object(_.a)(() => s.e("AwardTooltip").then(s.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				I = s("./src/reddit/components/AwardBadges/index.m.less"),
				P = s.n(I);
			const {
				fbt: M
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class k extends n.a.PureComponent {
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
					return n.a.createElement(n.a.Fragment, null, t > 1 && " • ", M._("{award-name} Award", [M._param("award-name", e.name)], {
						hk: "2QpjYF"
					}))
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
						u = e.awardType === E.e.Moderator,
						p = Object(C.a)(e.id, d.id),
						b = s > 1 || u,
						h = "container" === l;
					return n.a.createElement("span", {
						className: Object(i.a)(P.a.awardItem, t),
						id: h ? c : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: a
					}, n.a.createElement("span", {
						id: h ? "" : c
					}, n.a.createElement("img", {
						alt: e.name,
						className: Object(i.a)(P.a.awardIcon, {
							[P.a.animate]: this.state.animate
						}, o),
						id: p,
						ref: this.imageRef,
						src: m
					})), n.a.createElement("span", {
						className: b ? P.a.itemText : ""
					}, s > 1 && s, u && this.renderModAwardName()), n.a.createElement(N, {
						award: e,
						onHideAward: r,
						postOrComment: d,
						tooltipId: c
					}))
				}
			}
			var L = s("./src/reddit/icons/fonts/helpers.tsx");
			var B = e => n.a.createElement("i", {
				className: Object(i.a)(Object(L.b)("addGild"), e.className)
			});
			var H = e => n.a.createElement("i", {
				className: Object(i.a)(Object(L.b)("addGildDashed"), e.className)
			});
			class U extends n.a.PureComponent {
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
					} = this.props, s = this.state.isHovered ? B : H;
					return n.a.createElement("button", {
						className: Object(i.a)(e, P.a.badgeButton, P.a.visibilityEffect),
						onClick: t,
						onBlur: this.handleMouseLeave,
						onFocus: this.handleMouseEnter,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, n.a.createElement(s, {
						className: P.a.icon
					}))
				}
			}
			var D = U;
			const R = (e, t) => {
					const s = Object(O.a)(e) ? "Post" : "Comment";
					let o = "".concat(s, "AwardBadges--").concat(e);
					return t && (o = "".concat(o, "--").concat(t)), o
				},
				F = 5,
				Q = Object(d.c)({
					allAwards: e => e.awards.models,
					currentUser: T.j,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(A.a)(e),
					isLoggedIn: T.I
				}),
				W = Object(a.b)(Q, (e, t) => {
					let {
						isOverlay: s,
						thing: o
					} = t;
					return {
						hideAward: t => e(x({
							awardId: t,
							thingId: Object(O.a)(o.id) ? o.postId : o.id
						})),
						onAddAward: () => {
							const t = Object(O.a)(o.id) ? o.postId : o.id;
							return e(Object(f.d)(t, s))
						},
						onHideTooltip: () => e(Object(v.i)()),
						onShowTooltip: t => e(Object(v.f)({
							tooltipId: t
						})),
						onToggleHideAwardModal: () => e(Object(g.i)("AwardBadges--Modal--HideAwardConfirmation"))
					}
				});
			class q extends n.a.Component {
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
						itemClassName: r,
						onHideTooltip: a,
						onShowTooltip: d,
						showAllClassName: c,
						tooltipType: l,
						thing: m
					} = this.props, u = R(m.id, l), p = "".concat(u, "-view-all");
					let b = [];
					b = s || t ? e : e.length > F ? e.slice(0, F - 1) : e;
					const h = e.length > b.length ? e.slice(b.length).reduce((e, t) => e + (m.awardCountsById && m.awardCountsById[t.id] || 0), 0) : 0,
						x = o.fbt._("& {hidden-award-cound} More", [o.fbt._param("hidden-award-cound", h)], {
							hk: "2S9HpM"
						});
					return n.a.createElement(n.a.Fragment, null, b.map(e => {
						const t = m.awardCountsById ? m.awardCountsById[e.id] : 0;
						return n.a.createElement(k, {
							award: e,
							className: r,
							count: t,
							key: e.id,
							onHideAward: () => this.handleHideAward(e),
							onHideTooltip: a,
							onShowTooltip: d,
							postOrComment: m,
							tooltipId: "".concat(u, "-").concat(e.id),
							tooltipLocation: "icon"
						})
					}), h > 0 && n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
						"data-click-id": "awards",
						id: p,
						className: Object(i.a)(P.a.showAllButton, c),
						onClick: this.handleShowAllAwards,
						onMouseEnter: () => d(p),
						onMouseLeave: a
					}, x), n.a.createElement(y.c, {
						tooltipId: p,
						text: "View all Awards"
					})))
				}
				render() {
					const {
						children: e,
						className: t,
						currentUser: s,
						isLoggedIn: r,
						isConfirmModalOpen: a,
						hideCta: d,
						onToggleHideAwardModal: c,
						allAwards: l,
						thing: m
					} = this.props, u = Object(E.n)(Object.keys(m.awardCountsById || {}).map(e => l[e]).filter(Boolean)), p = s && s.id === m.authorId, b = !!u.length, h = !d && r && m.isGildable && b;
					return n.a.createElement("div", {
						className: Object(i.a)(t, P.a.awardBadges)
					}, e, this.renderAwardings(u), h && n.a.createElement(D, {
						onClick: this.handleAddAward
					}), a && s && this.state.selectedAward && n.a.createElement(w.a, {
						actionText: o.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: p ? Object(O.a)(m.id) ? o.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : o.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(O.a)(m.id) ? o.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : o.fbt._("The award giver(s) and recipient will be notified that moderator u/{modName} has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [o.fbt._param("modName", s.displayText ? s.displayText : s.username || ""), o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "1aqKr5"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: c,
						withOverlay: !0
					}))
				}
			}
			t.a = W(Object(j.c)(q))
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
			s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "a", (function() {
				return _
			}));
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
			const w = "add-custom-badge-tooltip",
				y = 100,
				j = 2 * y;
			class E extends r.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, y)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, j)
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
				S = Object(n.b)(A, C)(E),
				_ = Object(n.b)(T, C)(E)
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(a.a)(e => n.a.createElement(d.d, null, n.a.createElement(d.h, null, n.a.createElement(c.a, null, n.a.createElement(d.p, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), n.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, n.a.createElement(d.b, null)))), n.a.createElement(d.k, null, n.a.createElement(d.o, {
				className: m.a.ModalText
			}, e.modalText)), n.a.createElement(d.f, null, n.a.createElement(d.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "3DgVq6"
			})), n.a.createElement(d.t, {
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
					return Object(u.w)(e, s, o)
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
					return Object(d.w)(e, s, o)
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
				return d
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const d = "UserInfoTooltip",
				i = e => e.alwaysShowChildren ? r.a.createElement(r.a.Fragment, null, e.children) : null;
			t.b = Object(n.a)({
				ErrorComponent: i,
				getComponent: () => Object(a.a)(() => Promise.all([s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("AuthorHovercard")]).then(s.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return S
			}));
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
					o = Object(x.H)(e, t);
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
					o = Object(x.H)(e, t);
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
					subreddit: x.Q
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
				y = s("./src/reddit/selectors/posts.ts");
			var j = Object(n.b)(() => Object(a.c)({
				post: y.O,
				subredditOrProfile: y.bb,
				isModerator: (e, t) => {
					const s = Object(y.bb)(e, t);
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
				subredditOrProfile: (e, t) => Object(y.bb)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(y.bb)(e, {
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
				post: y.O,
				subredditOrProfile: y.bb,
				isModerator: (e, t) => {
					const s = Object(y.bb)(e, t);
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
				subreddit: x.Q
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
				subredditOrProfile: (e, t) => Object(x.K)(e, {
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
			var S = Object(n.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(x.Q)(e, {
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
			}))
		},
		"./src/reddit/components/PostTopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2kj4VmBwjxriyYFAErhLcT",
				badge: "_2v3rPYFjifVGM7CfOh1dOl",
				container: "_3AStxql1mQsrZuUIFP9xSg",
				adminIcon: "s46mo3ittWDxpPuCSXJ_T",
				contractorIcon: "MMQAY3zdk1u4R9hIKTklf",
				premiumIcon: "_6W0v52Yp6BzEfoWlrczS8",
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
			s.d(t, "c", (function() {
				return h
			})), s.d(t, "a", (function() {
				return V
			})), s.d(t, "b", (function() {
				return K
			}));
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
				y = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				j = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				E = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				A = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				T = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				_ = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				N = s("./src/reddit/constants/posts.ts"),
				I = s("./src/reddit/contexts/InsideOverlay.tsx"),
				P = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				M = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				k = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				L = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				B = (s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/models/Flair/index.ts")),
				H = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				U = s("./src/reddit/models/Post/index.ts"),
				D = s("./src/reddit/models/Subreddit/index.ts"),
				R = s("./src/reddit/selectors/authorFlair.ts"),
				F = s("./src/reddit/selectors/userFlair.ts"),
				Q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/components/PostTopMeta/index.m.less"),
				q = s.n(W);
			! function(e) {
				e.StickyPost = "sticky", e.Lightbox = "lightbox"
			}(h || (h = {}));
			const Z = e => Object(k.a)(Object(M.a)(e), H.a.metaText, H.b.metaText),
				V = m.a.wrapped(P.b, "MetaSeparator", q.a),
				z = m.a.span("text", q.a),
				J = Object(Q.t)(),
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
				K = e => {
					const t = !e.isDeleted && e.post.distinguishType === i.A.ADMIN;
					return r.a.createElement(g.a, {
						className: q.a.authorLink,
						"data-click-id": "user",
						author: e.post.author,
						isAdmin: t,
						isAdminEmeritus: t,
						isAuthorDeleted: e.isDeleted,
						isUnstyled: !0,
						style: e.style
					}, "u/".concat(e.post.author), t && r.a.createElement(L.a, {
						className: q.a.adminIcon
					}), e.renderContractorBadge && r.a.createElement(L.a, {
						className: q.a.contractorIcon
					}), !1)
				};
			class Y extends r.a.PureComponent {
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
						onHideTooltip: c,
						pageLayer: m,
						post: b,
						authorFlair: h,
						showSub: f = !1,
						showTimestamp: g = !0,
						subredditOrProfile: I,
						tooltipType: P
					} = this.props, M = m && m.meta && m.meta.name === i.yb.COMMENTS, k = Object(p.a)(b), L = a === B.b.Left, H = b.authorIsContractor && !!I && I.type === D.c.EmployeesOnly, R = !s && !M, F = () => r.a.createElement(V, {
						className: this.props.metaSeparatorClassName
					}, "•"), Q = r.a.createElement(r.a.Fragment, null, !k && r.a.createElement(z, {
						style: {
							color: Z(this.props)
						}
					}, "Posted by"), k && r.a.createElement(o.Fragment, null, r.a.createElement(x, {
						className: q.a.crosspostIcon
					}), r.a.createElement(z, {
						style: {
							color: Z(this.props)
						}
					}, "Crossposted by")), h && L && r.a.createElement("div", {
						className: q.a.flairContainer
					}, r.a.createElement(w.b, {
						disabled: !n,
						flair: h,
						forceSmallEmojis: !0,
						usesCommunityStyles: R
					})), Object(U.h)(b.author) ? r.a.createElement(K, {
						post: b,
						isDeleted: !0,
						renderContractorBadge: H,
						style: {
							color: Z(this.props)
						}
					}) : r.a.createElement(o.Fragment, null, !Object(U.h)(b.author) && r.a.createElement(v.b, {
						className: q.a.badge,
						subredditId: b.belongsTo.id,
						uniqueIdentifier: "".concat(b.id, "-").concat(s),
						userId: b.authorId
					}), r.a.createElement(j.b, {
						postOrComment: b,
						tooltipType: P
					}, r.a.createElement(O.b, {
						ignore: Object(U.h)(b.author) || !!b.distinguishType && b.distinguishType !== i.A.NONE,
						subredditId: b.belongsTo.id,
						userId: b.authorId
					}, r.a.createElement(K, {
						post: b,
						renderContractorBadge: H,
						style: {
							color: Z(this.props)
						}
					})))), h && !L && r.a.createElement("div", {
						className: q.a.flairContainer
					}, r.a.createElement(w.b, {
						disabled: !n,
						flair: h,
						forceSmallEmojis: !0,
						usesCommunityStyles: R
					})), b.belongsTo.type === N.a.SUBREDDIT && !Object(U.h)(b.author) && r.a.createElement(y.a, {
						className: q.a.publicWallet,
						contentId: b.id,
						metaSeparator: r.a.createElement(F, null),
						subredditId: b.belongsTo.id,
						userId: b.authorId,
						username: b.author
					}));
					return r.a.createElement("div", {
						className: Object(d.a)(q.a.container, e)
					}, f && I && r.a.createElement(E.a, {
						postId: b.id,
						subredditName: I.name,
						tooltipType: P
					}, r.a.createElement(_.a, {
						"data-click-id": "subreddit",
						to: I.url
					}, I.displayText)), I && I.isQuarantined && r.a.createElement(C.a, null), f && !k && r.a.createElement(F, null), b.isSponsored && r.a.createElement(o.Fragment, null, r.a.createElement(S.a, null), r.a.createElement(F, null)), Q, r.a.createElement(T.e, {
						post: b
					}), g && r.a.createElement("a", {
						className: q.a.externalLink,
						"data-click-id": "timestamp",
						href: b.permalink,
						id: t,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: c,
						style: {
							color: Z(this.props)
						},
						target: "_blank",
						rel: "nofollow noopener"
					}, Object(u.f)(b.created / 1e3), r.a.createElement(A.c, {
						caretOnTop: s,
						tooltipId: t,
						text: Object(l.a)(b.created)
					})))
				}
			}
			t.d = J(Object(I.b)(Object(c.a)(G(Y))))
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/SponsoredLabel/index.m.less"),
				d = s.n(a);
			const i = s("./src/lib/lessComponent.tsx").a.span("Wrapper", d.a);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement(i, {
					className: t
				}, o.fbt._("promoted", null, {
					hk: "1R81m"
				}))
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
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/humanizeUTCDate/index.tsx");
			const n = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? o.fbt._("Approved by {username} at {time}", [o.fbt._param("username", e.approvedBy), o.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : o.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = o.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				d = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : o.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + o.fbt._("Reason by {username}:", [o.fbt._param("username", "u/".concat(e.bannedBy))], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + o.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				i = e => o.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [o.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = (e, t) => t.bannedBy && "string" == typeof t.bannedBy && t.bannedAtUTC ? o.fbt._("Removed as spam by {username} at {time}", [o.fbt._param("username", t.bannedBy), o.fbt._param("time", Object(r.a)(t.bannedAtUTC))], {
					hk: "2uutjk"
				}) : o.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
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
//# sourceMappingURL=ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc.906f704c8b90b8007c40.js.map