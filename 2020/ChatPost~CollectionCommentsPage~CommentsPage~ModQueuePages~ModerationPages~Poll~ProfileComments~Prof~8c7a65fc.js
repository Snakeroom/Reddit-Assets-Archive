// https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc.26ee8602d4ff66d19fab.js
// Retrieved at 6/10/2020, 5:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"], {
		"./src/graphql/operations/HideAwardOnTarget.json": function(e) {
			e.exports = JSON.parse('{"id":"4e43964bff6f"}')
		},
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
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/actions/gold/constants.ts");
			const i = Object(o.a)(a.X),
				d = () => async e => {
					e(Object(n.h)(r.a.GOLD_GILD_ANIMATION_OVERLAY))
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
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				i = s("./src/reddit/controls/InternalLink/index.tsx"),
				d = s("./src/reddit/components/AuthorLink/index.m.less"),
				c = s.n(d);
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
				}, e.children) : n.a.createElement(i.a, {
					className: t,
					style: e.style,
					to: "/user/".concat(e.author, "/")
				}, e.children)
			}
		},
		"./src/reddit/components/AwardBadges/AddAwardPill/index.m.less": function(e, t, s) {
			e.exports = {
				addAwardPill: "_3Wf5TsmUR8Qf8nr0fDHjur",
				"focus-visible": "Vid7Flh9w2Ipi5lLiXtJQ",
				focusVisible: "Vid7Flh9w2Ipi5lLiXtJQ",
				giftIcon: "eQZZIJf9NTq5MBV2285S2"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPill/index.m.less": function(e, t, s) {
			e.exports = {
				awardPill: "q2KM5tcmhqOBd4ElRihZQ",
				"focus-visible": "_3hSD8Pi71g2Q9c03wUYjLs",
				focusVisible: "_3hSD8Pi71g2Q9c03wUYjLs",
				userGiven: "_1HqRbG571qt3Nk2zj_W3TS",
				imageContainer: "_1rwi4ljDNaPtYUiOiXomov",
				count: "_1YpK2GgjHXEnSEetPdXV17",
				awardIcon: "_2lnLb-ItT6LeziBNeQZx8I",
				hidden: "_3JxvBqAeBggcg7vHXhdVlS",
				animationIcon: "_2qKgWPWPiz4EnwPhDH9jaU",
				elasticShrink: "_1nKXGUCyFMbujKJCUr7v1F",
				fadeIn: "_3Unh28GaDqT2GLqHAD02_S"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less": function(e, t, s) {
			e.exports = {
				awardBadges: "_1wgnb6w6OJogtEV2N4B3lD",
				noAwards: "_1pZRAWakamwUD9Urx217oC",
				multiline: "_3c1kr0TjcknQSAP9naDKGv",
				spacer: "_1FZ8jCjLuxoHLtbgJDekEU"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "DInSK-8C_3_wtp8rkyyk_",
				right: "_3h4h05agLr2A_NU_Rf3yCn",
				scrollButton: "_2MU8EpOTDEghV1ecmq37UZ",
				"focus-visible": "_38NFrOkGDKwQs4baFR_XWF",
				focusVisible: "_38NFrOkGDKwQs4baFR_XWF",
				chevronIcon: "uPrjAc1vFe8cn_-JitBDg"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less": function(e, t, s) {
			e.exports = {
				awardBadges: "_3XoW0oYd5806XiOr24gGdb",
				badgeButton: "_1vpnHb2bSTD6BcgVKisnPT",
				visibilityEffect: "_3vGYJIJIswDD8YOAMWGC4N",
				icon: "_3zozqOs5cvNd2uvuIiu2_L",
				showAllButton: "_1tAFPduILh7Zse0gkxT4vj"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less": function(e, t, s) {
			e.exports = {
				awardItem: "_2OYwDdghtXEuTF67C95YLY",
				awardIcon: "n08B7PrU01wzgZYIh-s7N",
				animate: "f18KwJcHh9SCfKw_W3Dm2",
				awardBounce: "_3bDgD_5hXKabLRqOe9sXRi"
			}
		},
		"./src/reddit/components/AwardBadges/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/gold/giveAward.ts"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/graphql/operations/HideAwardOnTarget.json"),
				m = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/lib/makeGqlRequest/index.ts"),
				h = s("./src/reddit/actions/gold/constants.ts");
			const b = Object(c.a)(h.D),
				f = e => {
					let {
						awardId: t,
						thingId: s
					} = e;
					return async (e, n, r) => {
						let {
							gqlContext: a
						} = r;
						e(b({
							awardId: t,
							thingId: s
						}));
						const i = o.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
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
								text: i
							}))
						} catch (d) {
							e(Object(m.e)({
								kind: u.b.Error,
								duration: m.a,
								text: i
							}))
						}
					}
				};
			var g = s("./src/reddit/actions/gold/modals.ts"),
				x = s("./src/reddit/actions/modal.ts"),
				w = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/helpers/isPost.ts"),
				A = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = s("./src/reddit/components/PostTopMeta/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/models/Gold/Award.ts"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				C = s("./node_modules/lodash/debounce.js"),
				S = s.n(C),
				_ = s("./src/lib/classNames/index.ts"),
				I = s("./src/lib/fastdom/index.ts"),
				P = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				N = s("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				M = s.n(N);
			var k = r.a.memo(e => r.a.createElement("button", {
					className: M.a.addAwardPill,
					name: o.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, r.a.createElement(P.a, {
					className: M.a.giftIcon
				}))),
				L = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				B = s("./src/higherOrderComponents/makeAsync.tsx"),
				H = s("./src/lib/loadWithRetries/index.ts");
			var R = Object(B.a)({
					getComponent: () => Object(H.a)(() => s.e("AwardTooltip").then(s.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				D = s("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				U = s.n(D);
			const F = 3500,
				q = 500;
			class Q extends r.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = r.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: s,
							triggerOverlayAnimation: o
						} = this.props;
						e.id !== y.g && (this.setState({
							userGiven: !0,
							shouldAnimate: !t
						}), t || (o(s), setTimeout(() => {
							this.setState({
								shouldAnimate: !1
							})
						}, F)))
					}, this.handleOnClick = () => {
						const {
							onAddAward: e,
							award: t
						} = this.props;
						e(t.id === y.g ? void 0 : t.id)
					}, this.handleMouseEnter = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						this.hoverTimer = setTimeout(() => {
							e(t), this.setState({
								hoverStateTriggered: !0
							})
						}, q)
					}, this.handleMouseLeave = () => {
						const {
							onHideTooltip: e
						} = this.props;
						this.state.hoverStateTriggered && (e(), this.setState({
							hoverStateTriggered: !1
						})), this.hoverTimer && (clearTimeout(this.hoverTimer), this.hoverTimer = void 0)
					}, this.handleHideAward = () => {
						const {
							onHideAward: e,
							award: t
						} = this.props;
						e(t)
					}, this.state = {
						hoverStateTriggered: !1,
						shouldAnimate: !1,
						userGiven: !1
					}
				}
				componentDidMount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.addEventListener("awardAdded", this.triggerAnimation)
				}
				componentWillUnmount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.removeEventListener("awardAdded", this.triggerAnimation)
				}
				render() {
					const {
						award: e,
						count: t,
						post: s,
						tooltipId: o
					} = this.props, {
						userGiven: n,
						shouldAnimate: a
					} = this.state, i = e.icon32 ? e.icon32.url : e.icon.url, d = e.icon128 ? e.icon128.url : e.icon.url, c = Object(L.a)(e.id, s.id);
					return r.a.createElement("button", {
						className: Object(_.a)(U.a.awardPill, {
							[U.a.userGiven]: n
						}),
						id: o,
						onClick: this.handleOnClick,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, r.a.createElement("span", {
						className: U.a.imageContainer
					}, r.a.createElement("img", {
						alt: e.name,
						className: Object(_.a)(U.a.awardIcon, {
							[U.a.hidden]: a
						}),
						id: c,
						ref: this.imageRef,
						src: i
					}), a && r.a.createElement("img", {
						alt: e.name,
						className: U.a.animationIcon,
						src: d
					})), r.a.createElement("span", {
						className: U.a.count
					}, t.toLocaleString()), r.a.createElement(R, {
						award: e,
						onHideAward: this.handleHideAward,
						postOrComment: s,
						tooltipId: o
					}))
				}
			}
			var W = Q,
				G = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				V = s("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				z = s.n(V);
			var J = r.a.memo(e => {
				const {
					className: t,
					direction: s,
					onClick: n
				} = e, a = "right" === s, i = o.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), d = o.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return r.a.createElement("div", {
					className: Object(_.a)(z.a.buttonContainer, {
						[z.a.right]: a
					}, t)
				}, r.a.createElement("button", {
					className: z.a.scrollButton,
					name: a ? d : i,
					onClick: n
				}, r.a.createElement(G.a, {
					className: z.a.chevronIcon
				})))
			});
			const K = (e, t) => {
				const s = Object(v.a)(e) ? "Post" : "Comment";
				let o = "".concat(s, "AwardBadges--").concat(e);
				return t && (o = "".concat(o, "--").concat(t)), o
			};
			var Z = s("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				Y = s.n(Z);
			const X = 11,
				$ = 100;
			class ee extends r.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = r.a.createRef(), this.handleResize = S()(() => {
						this.handlePlaquePositionChange()
					}, 300), this.handlePlaquePositionChange = () => {
						const {
							awards: e,
							multiline: t
						} = this.props;
						if (e.length < X - 4) return;
						if (t) return;
						const s = this.plaqueRef.current;
						if (!s) return;
						const o = s.scrollLeft > 0,
							n = s.scrollLeft < s.scrollWidth - s.clientWidth;
						this.setState({
							canScrollLeft: o,
							canScrollRight: n
						})
					}, this.handleScrollLeft = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							s = e.scrollLeft - (t - $);
						this.scrollPlaqueTo(s)
					}, this.handleScrollRight = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							s = e.scrollLeft + (t - $);
						this.scrollPlaqueTo(s)
					}, this.handleTriggerAnimation = e => {
						this.props.triggerOverlayAnimation(), I.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const s = document.getElementById(e);
							if (!s) return;
							const o = t.getBoundingClientRect(),
								n = s.getBoundingClientRect();
							if (n.left < o.left || n.right > o.right) {
								const e = n.left + (t.scrollLeft - o.left) - $;
								this.scrollPlaqueTo(e)
							}
						})
					};
					const t = e.awards.length > X;
					this.state = {
						canScrollLeft: !1,
						canScrollRight: t && !e.multiline
					}
				}
				shouldComponentUpdate(e, t) {
					if (this.props.awards !== e.awards) {
						const t = this.props.awards.reduce((e, t) => (e[t.id] = (this.props.post.awardCountsById || {})[t.id], e), {});
						if (e.awards.reduce((s, o) => {
								const n = t[o.id],
									r = (e.post.awardCountsById || {})[o.id];
								return s || n !== r
							}, !1)) return !0
					}
					if (this.props.post.id !== e.post.id) return !0;
					for (const s in this.state)
						if (this.state[s] !== t[s]) return !0;
					return !1
				}
				componentDidUpdate(e) {
					this.props.awards.length !== e.awards.length && this.handlePlaquePositionChange()
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				scrollPlaqueTo(e) {
					const {
						prefersReducedMotion: t
					} = this.props, s = t ? "auto" : "smooth", o = this.plaqueRef.current;
					if (!o) return;
					const n = o.clientWidth,
						r = o.scrollWidth - n,
						a = Math.min(Math.max(0, e), r);
					this.setState({
						canScrollLeft: a > 0,
						canScrollRight: a < r
					}), o.scrollTo({
						left: a,
						top: 0,
						behavior: s
					})
				}
				render() {
					const {
						awards: e,
						hideAddAwardButton: t,
						multiline: s,
						post: o,
						prefersReducedMotion: n,
						onAddAward: a,
						onHideAward: i,
						onHideTooltip: d,
						onShowTooltip: c,
						tooltipType: l
					} = this.props, {
						canScrollLeft: m,
						canScrollRight: u
					} = this.state, p = e.length > 0, h = K(o.id, l);
					return r.a.createElement("div", {
						className: Object(_.a)(Y.a.awardBadges, {
							[Y.a.noAwards]: !p,
							[Y.a.multiline]: s
						}),
						ref: this.plaqueRef
					}, m && r.a.createElement(J, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = o, s = t[e.id];
						return r.a.createElement(W, {
							award: e,
							count: s,
							key: e.id,
							onAddAward: a,
							onHideAward: i,
							onHideTooltip: d,
							onShowTooltip: c,
							post: o,
							prefersReducedMotion: n,
							tooltipId: "".concat(h, "-").concat(e.id),
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !t && r.a.createElement(k, {
						onAddAward: a
					}), !s && r.a.createElement("div", {
						className: Y.a.spacer
					}), u && r.a.createElement(J, {
						direction: "right",
						onClick: this.handleScrollRight
					}))
				}
			}
			var te = ee,
				se = s("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				oe = s.n(se);
			const {
				fbt: ne
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class re extends r.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = r.a.createRef(), this.handleAwardAddedEvent = () => {
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
					return r.a.createElement(r.a.Fragment, null, t > 1 && " • ", ne._("{award-name} Award", [ne._param("award-name", e.name)], {
						hk: "2QpjYF"
					}))
				}
				render() {
					const {
						award: e,
						className: t,
						count: s,
						iconClassName: o,
						onHideAward: n,
						onHideTooltip: a,
						postOrComment: i,
						tooltipId: d,
						tooltipLocation: c
					} = this.props;
					if (s <= 0) return null;
					const l = e.icon32 ? e.icon32.url : e.icon.url,
						m = e.awardType === y.f.Moderator,
						u = Object(L.a)(e.id, i.id),
						p = "container" === c;
					return r.a.createElement("span", {
						className: Object(_.a)(oe.a.awardItem, t),
						id: p ? d : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: a
					}, r.a.createElement("span", {
						id: p ? "" : d
					}, r.a.createElement("img", {
						alt: e.name,
						className: Object(_.a)(oe.a.awardIcon, {
							[oe.a.animate]: this.state.animate
						}, o),
						id: u,
						ref: this.imageRef,
						src: l
					})), r.a.createElement("span", null, s > 1 && s, m && this.renderModAwardName()), r.a.createElement(R, {
						award: e,
						onHideAward: () => n(e),
						postOrComment: i,
						tooltipId: d
					}))
				}
			}
			var ae = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ie = s("./src/reddit/icons/fonts/helpers.tsx");
			var de = e => r.a.createElement("i", {
				className: Object(_.a)(Object(ie.b)("addGild"), e.className)
			});
			var ce = e => r.a.createElement("i", {
					className: Object(_.a)(Object(ie.b)("addGildDashed"), e.className)
				}),
				le = s("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				me = s.n(le);
			class ue extends r.a.PureComponent {
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
					} = this.props, s = this.state.isHovered ? de : ce;
					return r.a.createElement("button", {
						className: Object(_.a)(e, me.a.badgeButton, me.a.visibilityEffect),
						onClick: t,
						onBlur: this.handleMouseLeave,
						onFocus: this.handleMouseEnter,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, r.a.createElement(s, {
						className: me.a.icon
					}))
				}
			}
			var pe = ue;
			var he = e => {
				const {
					awards: t,
					hideBadgeButton: s,
					onAddAward: n,
					onHideAward: a,
					onHideTooltip: i,
					onShowAllAwards: d,
					onShowTooltip: c,
					showAllAwards: l,
					tooltipType: m,
					thing: u
				} = e, p = K(u.id, m), h = "".concat(p, "-view-all");
				let b = [];
				b = l ? t : t.length > 5 ? t.slice(0, 4) : t;
				const f = !s && u.isGildable && t.length > 0,
					g = t.length > b.length ? t.slice(b.length).reduce((e, t) => e + (u.awardCountsById && u.awardCountsById[t.id] || 0), 0) : 0,
					x = o.fbt._("& {hidden award count} More", [o.fbt._param("hidden award count", g.toLocaleString())], {
						hk: "1OnmAi"
					});
				return r.a.createElement("div", {
					className: me.a.awardBadges
				}, b.map(e => {
					const t = u.awardCountsById ? u.awardCountsById[e.id] : 0;
					return r.a.createElement(re, {
						award: e,
						count: t,
						key: e.id,
						onHideAward: a,
						onHideTooltip: i,
						onShowTooltip: c,
						postOrComment: u,
						tooltipId: "".concat(p, "-").concat(e.id),
						tooltipLocation: "icon"
					})
				}), g > 0 && r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					"data-click-id": "awards",
					id: h,
					className: me.a.showAllButton,
					onClick: d,
					onMouseEnter: () => c(h),
					onMouseLeave: i
				}, x), r.a.createElement(ae.c, {
					tooltipId: h,
					text: "View all Awards"
				})), f && r.a.createElement(pe, {
					onClick: n
				}))
			};
			const be = Object(i.c)({
					allAwards: e => e.awards.models,
					currentUser: T.i,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(j.a)(e),
					isLoggedIn: T.H
				}),
				fe = Object(a.b)(be, (e, t) => {
					let {
						isOverlay: s,
						thing: o
					} = t;
					return {
						hideAward: t => e(f({
							awardId: t,
							thingId: Object(v.a)(o.id) ? o.postId : o.id
						})),
						onAddAward: t => {
							const n = Object(v.a)(o.id) ? o.postId : o.id;
							return e(Object(g.d)({
								awardId: t,
								thingId: n,
								isOverlay: s
							}))
						},
						onHideTooltip: () => e(Object(w.i)()),
						onShowTooltip: t => e(Object(w.f)({
							tooltipId: t
						})),
						onToggleHideAwardModal: () => e(Object(x.i)("AwardBadges--Modal--HideAwardConfirmation")),
						triggerOverlayAnimation: () => e(Object(d.b)())
					}
				});
			class ge extends r.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const {
							onAddAward: t,
							sendEvent: o,
							thing: n
						} = this.props;
						t(e);
						const {
							clickAddAward: r
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						o(r(n.id))
					}, this.handleShowAllAwards = () => {
						this.setState({
							showAllAwards: !0
						})
					}, this.handleHideAward = async e => {
						const {
							sendEvent: t,
							onToggleHideAwardModal: o,
							thing: n
						} = this.props;
						this.setState({
							selectedAward: e
						});
						const {
							clickHideAward: r
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(r(e, n.id)), o()
					}, this.handleHideAwardConfirmed = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: o
						} = this.state, {
							clickConfirmHideAward: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						o && (e(n(o, t.id)), this.props.hideAward(o.id))
					}, this.handleHideAwardCanceled = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: o
						} = this.state, {
							clickCancelHideAward: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						o && e(n(o, t.id))
					}, this.handleShowTooltip = e => {
						const {
							onShowTooltip: t
						} = this.props;
						t(e)
					}, this.handleHideTooltip = () => {
						const {
							onHideTooltip: e
						} = this.props;
						e()
					}, this.state = {
						selectedAward: null,
						showAllAwards: !1
					}
				}
				render() {
					const {
						allAwards: e,
						awardsPlaqueStyle: t,
						currentUser: s,
						hideCta: n,
						isConfirmModalOpen: a,
						isLoggedIn: i,
						isOverlay: d,
						isPostDetail: c,
						onHideTooltip: l,
						onShowTooltip: m,
						onToggleHideAwardModal: u,
						thing: p,
						triggerOverlayAnimation: h
					} = this.props, {
						showAllAwards: b
					} = this.state, f = "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, g = Object(y.p)(Object.keys(p.awardCountsById || {}).map(t => e[t]).filter(Boolean)), x = d ? O.c.Lightbox : void 0, w = s && s.id === p.authorId;
					return r.a.createElement(r.a.Fragment, null, t ? r.a.createElement(te, {
						awards: g,
						hideAddAwardButton: !1 === p.isGildable || !0 === w,
						multiline: !!c,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: p,
						prefersReducedMotion: f,
						tooltipType: x,
						triggerOverlayAnimation: h
					}) : r.a.createElement(he, {
						awards: g,
						hideBadgeButton: n || !i,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onHideTooltip: l,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: m,
						showAllAwards: b || !!c,
						thing: p,
						tooltipType: x
					}), a && s && this.state.selectedAward && r.a.createElement(A.a, {
						actionText: o.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: w ? Object(v.a)(p.id) ? o.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : o.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(v.a)(p.id) ? o.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : o.fbt._("The award giver(s) and recipient will be notified that moderator u/{modName} has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [o.fbt._param("modName", s.displayText ? s.displayText : s.username || ""), o.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "1aqKr5"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: u,
						withOverlay: !0
					}))
				}
			}
			t.a = fe(Object(E.c)(ge))
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
				return y
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "a", (function() {
				return _
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				d = s("./src/lib/classNames/index.ts"),
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
				f = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				g = s("./src/reddit/models/Badge/index.ts");
			var x = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				w = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				v = s.n(w);
			const A = "add-custom-badge-tooltip",
				O = 100,
				E = 2 * O;
			class y extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, O)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, E)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return n.a.createElement("img", {
						className: Object(d.a)(v.a.image, this.props.className),
						src: "".concat(i.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(A, "-").concat(this.props.uniqueIdentifier);
					return n.a.createElement(o.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: v.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: v.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(f.a, {
						className: v.a.addCustom
					})), n.a.createElement(x, {
						className: v.a.badgeHovercard,
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
							className: Object(d.a)(v.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: v.a.image,
							id: s,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? n.a.createElement(u, {
							badge: e,
							correlationId: this.props.correlationId,
							className: v.a.badgeHovercard,
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
			const j = Object(a.c)({
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
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.i)())
				}),
				S = Object(r.b)(j, C)(y),
				_ = Object(r.b)(T, C)(y)
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
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(a.a)(e => r.a.createElement(i.d, null, r.a.createElement(i.h, null, r.a.createElement(c.a, null, r.a.createElement(i.p, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(i.b, null)))), r.a.createElement(i.k, null, r.a.createElement(i.o, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(i.f, null, r.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "3DgVq6"
			})), r.a.createElement(i.t, {
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
				return b
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
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
					className: Object(i.a)(e.className, h.a.badge),
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
					return Object(u.w)(e, s, o)
				},
				customBadgesEnabled: m.d.spCustomBadges,
				premiumEnabled: e => m.d.spPremium(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(d.i)())
			}))(b)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/selectors/economics.ts");

			function d(e) {
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
					return Object(i.w)(e, s, o)
				}
			}))(d)
		},
		"./src/reddit/components/Economics/Support/DonationAmount/async.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/reddit/featureFlags/index.ts"),
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
			const m = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("EconomicsSupportDonationAmount").then(s.bind(null, "./src/reddit/components/Economics/Support/DonationAmount/index.tsx")).then(e => e.default)
			});
			const u = Object(a.c)({
				amountIsNotZero: (e, t) => {
					const s = Object(c.m)(e, t);
					return 0 !== parseInt(s)
				},
				featureEnabled: d.d.spSupport
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
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				d = e => e.alwaysShowChildren ? n.a.createElement(n.a.Fragment, null, e.children) : null;
			t.b = Object(r.a)({
				ErrorComponent: d,
				getComponent: () => Object(a.a)(() => Promise.all([s.e("AuthorHovercard~Settings~SubredditWiki"), s.e("AuthorHovercard")]).then(s.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: d
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return A
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return S
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				d = s.n(i),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
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
							n = m(t, ["className", "consumers"]);
						l.a.publish(c.a, n, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? n.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && n.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var h = Object(r.b)(u, {})(p),
				b = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const s = Object(b.n)(e, t),
					o = Object(f.H)(e, t);
				return {
					comment: s,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var x = Object(r.b)(() => Object(a.a)(g, b.j, (e, t) => Object.assign({}, e, {
				depth: t
			})))(e => n.a.createElement(h, {
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
			const w = (e, t) => {
				const s = Object(b.n)(e, t),
					o = Object(f.H)(e, t);
				return {
					comment: s,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var v = Object(r.b)(() => Object(a.a)(w, e => e))(e => n.a.createElement(h, {
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
			var A = Object(r.b)(() => Object(a.c)({
					subreddit: f.Q
				}))(e => n.a.createElement(h, {
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
				O = s("./src/reddit/selectors/posts.ts");
			var E = Object(r.b)(() => Object(a.c)({
				post: O.O,
				subredditOrProfile: O.bb,
				isModerator: (e, t) => {
					const s = Object(O.bb)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => n.a.createElement(h, {
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
			var y = Object(r.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(O.bb)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(O.bb)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => n.a.createElement(h, {
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
			var j = Object(r.b)(() => Object(a.c)({
				post: O.O,
				subredditOrProfile: O.bb,
				isModerator: (e, t) => {
					const s = Object(O.bb)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => n.a.createElement(h, {
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
			var T = Object(r.b)(() => Object(a.c)({
				subreddit: f.Q
			}))(e => n.a.createElement(h, {
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
			var C = Object(r.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.K)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(h, {
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
			var S = Object(r.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(f.Q)(e, {
						subredditId: s
					}) : null
				}
			}))(e => n.a.createElement(h, {
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
				return b
			})), s.d(t, "a", (function() {
				return V
			})), s.d(t, "b", (function() {
				return Z
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
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
			var b, f = e => n.a.createElement("svg", h({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), n.a.createElement("path", {
					d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
				}), n.a.createElement("path", {
					d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
				})),
				g = s("./src/reddit/actions/tooltip.ts"),
				x = s("./src/reddit/components/AuthorLink/index.tsx"),
				w = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				A = s("./src/reddit/components/Flair/index.tsx"),
				O = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				E = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				y = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				j = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				T = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				_ = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				I = s("./src/reddit/constants/posts.ts"),
				P = s("./src/reddit/contexts/InsideOverlay.tsx"),
				N = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				M = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				k = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				L = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				B = (s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/models/Flair/index.ts")),
				H = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				R = s("./src/reddit/models/Post/index.ts"),
				D = s("./src/reddit/models/Subreddit/index.ts"),
				U = s("./src/reddit/selectors/authorFlair.ts"),
				F = s("./src/reddit/selectors/userFlair.ts"),
				q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Q = s("./src/reddit/components/PostTopMeta/index.m.less"),
				W = s.n(Q);
			! function(e) {
				e.StickyPost = "sticky", e.Lightbox = "lightbox"
			}(b || (b = {}));
			const G = e => Object(k.a)(Object(M.a)(e), H.a.metaText, H.b.metaText),
				V = m.a.wrapped(N.b, "MetaSeparator", W.a),
				z = m.a.span("text", W.a),
				J = Object(q.t)(),
				K = Object(r.b)(() => Object(a.c)({
					authorFlair: U.a,
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
					onHideTooltip: () => e(Object(g.i)()),
					onShowTooltip: t => e(Object(g.f)({
						tooltipId: t
					}))
				})),
				Z = e => {
					const t = !e.isDeleted && e.post.distinguishType === d.B.ADMIN;
					return n.a.createElement(x.a, {
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
						onHideTooltip: c,
						pageLayer: m,
						post: h,
						authorFlair: b,
						showSub: g = !1,
						showTimestamp: x = !0,
						subredditOrProfile: P,
						tooltipType: N
					} = this.props, M = m && m.meta && m.meta.name === d.zb.COMMENTS, k = Object(p.a)(h), L = a === B.b.Left, H = h.authorIsContractor && !!P && P.type === D.d.EmployeesOnly, U = !s && !M, F = () => n.a.createElement(V, {
						className: this.props.metaSeparatorClassName
					}, "•"), q = n.a.createElement(n.a.Fragment, null, !k && n.a.createElement(z, {
						style: {
							color: G(this.props)
						}
					}, "Posted by"), k && n.a.createElement(o.Fragment, null, n.a.createElement(f, {
						className: W.a.crosspostIcon
					}), n.a.createElement(z, {
						style: {
							color: G(this.props)
						}
					}, "Crossposted by")), b && L && n.a.createElement("div", {
						className: W.a.flairContainer
					}, n.a.createElement(A.b, {
						disabled: !r,
						flair: b,
						forceSmallEmojis: !0,
						usesCommunityStyles: U
					})), Object(R.h)(h.author) ? n.a.createElement(Z, {
						post: h,
						isDeleted: !0,
						renderContractorBadge: H,
						style: {
							color: G(this.props)
						}
					}) : n.a.createElement(o.Fragment, null, !Object(R.h)(h.author) && n.a.createElement(w.b, {
						className: W.a.badge,
						subredditId: h.belongsTo.id,
						uniqueIdentifier: "".concat(h.id, "-").concat(s),
						userId: h.authorId
					}), n.a.createElement(E.b, {
						postOrComment: h,
						tooltipType: N
					}, n.a.createElement(v.b, {
						ignore: Object(R.h)(h.author) || !!h.distinguishType && h.distinguishType !== d.B.NONE,
						subredditId: h.belongsTo.id,
						userId: h.authorId
					}, n.a.createElement(Z, {
						post: h,
						renderContractorBadge: H,
						style: {
							color: G(this.props)
						}
					})))), b && !L && n.a.createElement("div", {
						className: W.a.flairContainer
					}, n.a.createElement(A.b, {
						disabled: !r,
						flair: b,
						forceSmallEmojis: !0,
						usesCommunityStyles: U
					})), h.belongsTo.type === I.a.SUBREDDIT && !Object(R.h)(h.author) && n.a.createElement(O.a, {
						className: W.a.publicWallet,
						contentId: h.id,
						metaSeparator: n.a.createElement(F, null),
						subredditId: h.belongsTo.id,
						userId: h.authorId,
						username: h.author
					}));
					return n.a.createElement("div", {
						className: Object(i.a)(W.a.container, e)
					}, g && P && n.a.createElement(y.a, {
						postId: h.id,
						subredditName: P.name,
						tooltipType: N
					}, n.a.createElement(_.a, {
						"data-click-id": "subreddit",
						to: P.url
					}, P.displayText)), P && P.isQuarantined && n.a.createElement(C.a, null), g && !k && n.a.createElement(F, null), h.isSponsored && n.a.createElement(o.Fragment, null, n.a.createElement(S.a, null), n.a.createElement(F, null)), q, n.a.createElement(T.e, {
						post: h
					}), x && n.a.createElement("a", {
						className: W.a.externalLink,
						"data-click-id": "timestamp",
						href: h.permalink,
						id: t,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: c,
						style: {
							color: G(this.props)
						},
						target: "_blank",
						rel: "nofollow noopener"
					}, Object(u.d)(h.created / 1e3), n.a.createElement(j.c, {
						caretOnTop: s,
						tooltipId: t,
						text: Object(l.a)(h.created)
					})))
				}
			}
			t.d = J(Object(P.b)(Object(c.a)(K(Y))))
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
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				u = s.n(m);
			const p = ["center", "top"],
				h = ["center", "bottom"],
				b = i.a.div("Container", u.a),
				f = Object(a.a)(d.b),
				g = Object(c.t)({
					isProfileListingPage: c.F
				});
			class x extends r.a.Component {
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
					return r.a.createElement(b, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, r.a.createElement(l.a, {
						className: u.a.quarantineIcon
					}), o.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), r.a.createElement(f, {
						text: o.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: p,
						tooltipPosition: h
					}))
				}
			}
			t.a = g(x)
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
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/SponsoredLabel/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.span("Wrapper", i.a);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement(d, {
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
				n = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = s.n(n);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(o.a, "SubredditName", r.a);
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
				return d
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				i = s.n(a);
			const d = e => n.a.createElement("span", {
				className: Object(r.a)(i.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: s
				} = e;
				return n.a.createElement(d, {
					className: Object(r.a)(i.a.metaSeparator, t),
					isSmall: s
				})
			}
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
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? o.fbt._("Approved by {username} at {time}", [o.fbt._param("username", e.approvedBy), o.fbt._param("time", Object(n.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : o.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = o.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(n.a)(e.bannedAtUTC))], {
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
				d = e => o.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [o.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed as spam by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(n.a)(e.bannedAtUTC))], {
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
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("admin"), d.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve"), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, s) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Gift/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(r.a, null, e.desc)), "GiftIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock"), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove"), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report"), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam"), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
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
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", {
					fillRule: "evenodd"
				}, n.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), n.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		}
	}
]);
//# sourceMappingURL=ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc.26ee8602d4ff66d19fab.js.map