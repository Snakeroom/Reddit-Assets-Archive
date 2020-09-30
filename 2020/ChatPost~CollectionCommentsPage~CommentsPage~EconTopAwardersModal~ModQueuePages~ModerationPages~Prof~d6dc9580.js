// https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580.376668fb777aadd703be.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"], {
		"./src/graphql/operations/HideAwardOnTarget.json": function(e) {
			e.exports = JSON.parse('{"id":"4e43964bff6f"}')
		},
		"./src/graphql/operations/TopAwardedPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"7f1ba87a9dd2"}')
		},
		"./src/graphql/operations/TopAwardersLeaderboard.json": function(e) {
			e.exports = JSON.parse('{"id":"2a194e7926dd"}')
		},
		"./src/lib/humanizeDateTime/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			const r = 9999999999;

			function a(e) {
				return e > r ? new Date(e).toString() : new Date(1e3 * e).toString()
			}
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/constants/modals.ts"),
				n = s("./src/reddit/actions/gold/constants.ts");
			const i = Object(r.a)(n.hb),
				d = Object(r.a)(n.u),
				c = e => async t => {
					await t(d({
						id: e
					})), t(Object(a.h)(o.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/gold/reportAward.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				n = s("./src/reddit/models/Toast/index.ts"),
				i = s("./src/reddit/endpoints/gold/communityAwards.ts"),
				d = s("./src/reddit/actions/gold/constants.ts");
			const c = Object(a.a)(d.gb),
				l = e => async (t, s, a) => {
					let {
						apiContext: d
					} = a;
					t(c());
					try {
						if ((await Object(i.e)(d(), e.id)).error) throw new Error;
						await t(Object(o.e)({
							kind: n.b.SuccessAward,
							duration: o.a,
							text: r.fbt._("{award name} Award successfully reported for review.", [r.fbt._param("award name", e.name)], {
								hk: "1fHb5Q"
							})
						}))
					} catch (l) {
						await t(Object(o.e)({
							kind: n.b.Error,
							duration: o.a,
							text: r.fbt._("Something went wrong. The report could not be created at this time.", null, {
								hk: "1ewigu"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/gold/topAwarded.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			}));
			var r = s("./src/lib/env/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				n = s("./src/reddit/constants/modals.ts"),
				i = (s("./src/graphql/operations/TopAwardedPosts.json"), s("./src/graphql/operations/TopAwardersLeaderboard.json")),
				d = s("./src/lib/makeGqlRequest/index.ts");
			const c = (e, t) => Object(d.a)(e, Object.assign(Object.assign({}, i), {
				variables: t
			}));
			var l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/gold/constants.ts");
			Object(a.a)(m.pb), Object(a.a)(m.ob), Object(a.a)(m.nb);
			const u = Object(a.a)(m.sb),
				p = Object(a.a)(m.rb),
				h = Object(a.a)(m.qb),
				b = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
					return async (s, a, n) => {
						let {
							gqlContext: i
						} = n;
						if (!a().users.topAwarders.list.length) {
							s(u());
							try {
								const r = await c(i(), {
										top: t,
										postId: e
									}),
									a = r.body;
								if (r.ok) await s(p(Object.assign({
									postId: e
								}, a.data.postInfoById.topAwarders)));
								else if (a.errors && a.errors.length) throw new Error(a.errors.map(e => e.message).join("; "))
							} catch (d) {
								Object(r.b)() || console.error(d), o.c.captureMessage(d), s(h(d.message))
							}
						}
					}
				},
				w = Object(a.a)(m.tb),
				g = e => async (t, s) => {
					t(w({
						postId: e
					})), t(Object(l.h)(n.a.ECON_TOP_AWARDERS))
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
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/config.ts"),
				i = s("./src/reddit/controls/InternalLink/index.tsx"),
				d = s("./src/reddit/components/AuthorLink/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const t = Object(o.a)(e.className, c.a.authorLinkStyles, {
					[c.a.isAdmin]: e.isAdmin,
					[c.a.isAdminEmeritus]: e.isAdminEmeritus,
					[c.a.isLivestreaming]: e.isLivestreaming,
					[c.a.isMod]: e.isMod,
					[c.a.isOp]: e.isOp,
					[c.a.isStrong]: e.isStrong,
					[c.a.isUnstyled]: e.isUnstyled
				});
				return e.isExternal || e.isLivestreaming ? a.a.createElement("a", {
					className: t,
					href: "".concat(n.a.redditUrl, "/user/").concat(e.author),
					rel: "nofollow",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? a.a.createElement("span", {
					className: Object(o.a)(c.a.deletedAuthorLink, e.className)
				}, e.children) : a.a.createElement(i.a, {
					className: t,
					style: e.style,
					to: "/user/".concat(e.author, "/")
				}, e.children)
			}
		},
		"./src/reddit/components/AwardBadges/AddAwardPill/index.m.less": function(e, t, s) {
			e.exports = {
				addAwardPill: "_3Wf5TsmUR8Qf8nr0fDHjur",
				giftIcon: "eQZZIJf9NTq5MBV2285S2"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPill/index.m.less": function(e, t, s) {
			e.exports = {
				awardPillContainer: "yW-ely1Ik8KTYTO9TSOSa",
				awardPill: "q2KM5tcmhqOBd4ElRihZQ",
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
				spacer: "_1FZ8jCjLuxoHLtbgJDekEU",
				clickablePlaqueItem: "_2PVXBodfFt50jjk5ydPpWY",
				"focus-visible": "_3JCIceLNhOdJUR_ABw_M2V",
				focusVisible: "_3JCIceLNhOdJUR_ABw_M2V"
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
		"./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less": function(e, t, s) {
			e.exports = {
				reportStepButton: "_2ke5Q4KsrJWi6sCDENRwI2"
			}
		},
		"./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less": function(e, t, s) {
			e.exports = {
				pill: "AavtiP0APDAhqwl7opcvC",
				iconContainer: "_2NhWk2-d-tn8oC0A-k_Ss-",
				awardIcon: "_20LMDg4_PtezakicbNPSfn",
				awardsPlaqueStyle: "qntP0rU06Z8LVP6TKmQHQ",
				"focus-visible": "qbP9Qnm2Qru28YDgfefpw",
				focusVisible: "qbP9Qnm2Qru28YDgfefpw"
			}
		},
		"./src/reddit/components/AwardBadges/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/gold/giveAward.ts"),
				c = s("./src/graphql/operations/HideAwardOnTarget.json"),
				l = s("./src/lib/makeActionCreator/index.ts"),
				m = s("./src/lib/makeGqlRequest/index.ts"),
				u = s("./src/reddit/actions/gold/constants.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/models/Toast/index.ts");
			const b = Object(l.a)(u.G),
				w = e => {
					let {
						awardId: t,
						thingId: s
					} = e;
					return async (e, a, o) => {
						let {
							gqlContext: n
						} = o;
						e(b({
							awardId: t,
							thingId: s
						}));
						const i = r.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
							hk: "10OvOz"
						});
						try {
							(await ((e, t, s) => Object(m.a)(e, Object.assign(Object.assign({}, c), {
								variables: {
									awardId: t,
									targetId: s
								}
							})))(n(), t, s)).error && e(Object(p.e)({
								kind: h.b.Error,
								duration: p.a,
								text: i
							}))
						} catch (d) {
							e(Object(p.e)({
								kind: h.b.Error,
								duration: p.a,
								text: i
							}))
						}
					}
				};
			var g = s("./src/reddit/actions/gold/modals.ts"),
				f = s("./src/reddit/actions/modal.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				A = s("./src/reddit/helpers/correlationIdTracker.ts"),
				O = s("./src/reddit/helpers/isPost.ts"),
				x = s("./src/reddit/helpers/trackers/gild.ts"),
				j = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/models/Gold/Award.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/constants/experiments.ts"),
				I = s("./src/reddit/helpers/chooseVariant/index.ts"),
				_ = s("./src/reddit/selectors/user.ts");
			var S = s("./src/reddit/selectors/gold/awardIcon.ts"),
				P = s("./src/reddit/selectors/userPrefs.ts"),
				k = s("./node_modules/lodash/debounce.js"),
				N = s.n(k),
				M = s("./src/lib/classNames/index.ts"),
				B = s("./src/lib/fastdom/index.ts"),
				L = s("./src/reddit/models/Gold/TopAwarded/index.ts"),
				H = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				F = s("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				R = s.n(F);
			var U = o.a.memo(e => o.a.createElement("button", {
					className: Object(M.a)(e.className, R.a.addAwardPill),
					name: r.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, o.a.createElement(H.a, {
					className: R.a.giftIcon
				}))),
				D = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				q = s("./src/higherOrderComponents/makeAsync.tsx"),
				G = s("./src/lib/loadWithRetries/index.ts");
			var z = Object(q.a)({
					getComponent: () => Object(G.a)(() => s.e("AwardTooltip").then(s.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				V = s("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				W = s.n(V);
			const Q = 3500,
				J = 500;
			class Y extends o.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = o.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: s,
							triggerOverlayAnimation: r
						} = this.props;
						e.id !== T.g && (this.setState({
							userGiven: !0,
							shouldAnimate: !t
						}), t || (r(s), setTimeout(() => {
							this.setState({
								shouldAnimate: !1
							})
						}, Q)))
					}, this.handleOnClick = () => {
						const {
							onAddAward: e,
							award: t
						} = this.props;
						e(t.id === T.g ? void 0 : t.id)
					}, this.handleMouseEnter = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						this.hoverTimer = setTimeout(() => {
							e(t), this.setState({
								hoverStateTriggered: !0
							})
						}, J)
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
					}, this.handleOpenReportFlow = () => {
						const {
							onOpenReportFlow: e,
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
						className: t,
						count: s,
						giveAwardAnimationIconUrl: r,
						pillIconUrl: a,
						post: n,
						tooltipId: i
					} = this.props, {
						userGiven: d,
						shouldAnimate: c
					} = this.state, l = Object(D.a)(e.id, n.id);
					return o.a.createElement("span", {
						className: W.a.awardPillContainer,
						id: i,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, o.a.createElement("button", {
						className: Object(M.a)(t, W.a.awardPill, {
							[W.a.userGiven]: d
						}),
						onClick: this.handleOnClick
					}, o.a.createElement("span", {
						className: W.a.imageContainer
					}, o.a.createElement("img", {
						alt: e.name,
						className: Object(M.a)(W.a.awardIcon, {
							[W.a.hidden]: c
						}),
						id: l,
						ref: this.imageRef,
						src: a
					}), c && o.a.createElement("img", {
						alt: e.name,
						className: W.a.animationIcon,
						src: r
					})), o.a.createElement("span", {
						className: W.a.count
					}, s.toLocaleString())), o.a.createElement(z, {
						award: e,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideAward: this.handleHideAward,
						postOrComment: n,
						tooltipId: i
					}))
				}
			}
			var K = Y,
				X = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Z = s("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				$ = s.n(Z);
			var ee = o.a.memo(e => {
				const {
					className: t,
					direction: s,
					onClick: a
				} = e, n = "right" === s, i = r.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), d = r.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return o.a.createElement("div", {
					className: Object(M.a)($.a.buttonContainer, {
						[$.a.right]: n
					}, t)
				}, o.a.createElement("button", {
					className: $.a.scrollButton,
					name: n ? d : i,
					onClick: a
				}, o.a.createElement(X.a, {
					className: $.a.chevronIcon
				})))
			});
			const te = (e, t) => {
				const s = Object(O.a)(e) ? "Post" : "Comment";
				let r = "".concat(s, "AwardBadges--").concat(e);
				return t && (r = "".concat(r, "--").concat(t)), r
			};
			var se = s("./src/reddit/helpers/trackers/topAwarded.ts"),
				re = s("./src/reddit/hooks/useTracking.ts"),
				ae = s("./src/reddit/actions/gold/topAwarded.ts"),
				oe = s("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				ne = s("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				ie = s.n(ne);
			const {
				fbt: de
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
					const t = Object(n.c)(),
						s = Object(re.a)();
					return o.a.createElement("button", {
						className: Object(M.a)(ie.a.pill, e.className, {
							[ie.a.awardsPlaqueStyle]: !!e.awardsPlaqueStyle
						}),
						onClick: () => {
							const {
								postId: r
							} = e.post;
							s(Object(se.a)(r)), t(Object(ae.b)(r))
						}
					}, o.a.createElement("span", {
						className: ie.a.iconContainer
					}, o.a.createElement(oe.a, {
						className: ie.a.awardIcon
					})), o.a.createElement("span", null, de._("Top Awarded", null, {
						hk: "49Ol5i"
					})))
				},
				le = s("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				me = s.n(le);
			const ue = 11,
				pe = 100;
			class he extends o.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = o.a.createRef(), this.handleResize = N()(() => {
						this.handlePlaquePositionChange()
					}, 300), this.handlePlaquePositionChange = () => {
						const {
							awards: e,
							awardsCountInView: t,
							multiline: s
						} = this.props, r = t || ue;
						if (e.length < r - 4) return;
						if (s) return;
						const a = this.plaqueRef.current;
						if (!a) return;
						const o = a.scrollLeft > 0,
							n = a.scrollLeft < a.scrollWidth - a.clientWidth;
						this.setState({
							canScrollLeft: o,
							canScrollRight: n
						})
					}, this.handleScrollLeft = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							s = e.scrollLeft - (t - pe);
						this.scrollPlaqueTo(s)
					}, this.handleScrollRight = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							s = e.scrollLeft + (t - pe);
						this.scrollPlaqueTo(s)
					}, this.handleTriggerAnimation = e => {
						this.props.triggerOverlayAnimation(), B.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const s = document.getElementById(e);
							if (!s) return;
							const r = t.getBoundingClientRect(),
								a = s.getBoundingClientRect();
							if (a.left < r.left || a.right > r.right) {
								const e = a.left + (t.scrollLeft - r.left) - pe;
								this.scrollPlaqueTo(e)
							}
						})
					};
					const t = e.awardsCountInView || ue,
						s = e.awards.length > t;
					this.state = {
						canScrollLeft: !1,
						canScrollRight: s && !e.multiline
					}
				}
				shouldComponentUpdate(e, t) {
					if (this.props.awards !== e.awards) {
						const t = this.props.awards.reduce((e, t) => (e[t.id] = (this.props.post.awardCountsById || {})[t.id], e), {});
						if (e.awards.reduce((s, r) => {
								const a = t[r.id],
									o = (e.post.awardCountsById || {})[r.id];
								return s || a !== o
							}, !1)) return !0
					}
					if (this.props.post.id !== e.post.id) return !0;
					for (const s in this.state)
						if (this.state[s] !== t[s]) return !0;
					return this.props.post.topAwardedType !== e.post.topAwardedType
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
					} = this.props, s = t ? "auto" : "smooth", r = this.plaqueRef.current;
					if (!r) return;
					const a = r.clientWidth,
						o = r.scrollWidth - a,
						n = Math.min(Math.max(0, e), o);
					this.setState({
						canScrollLeft: n > 0,
						canScrollRight: n < o
					}), r.scrollTo({
						left: n,
						top: 0,
						behavior: s
					})
				}
				render() {
					const {
						awards: e,
						className: t,
						hideAddAwardButton: s,
						hideTopAwardedBadge: r,
						icons: a,
						isInEconLeaderboardsExperiment: n,
						multiline: i,
						post: d,
						prefersReducedMotion: c,
						onAddAward: l,
						onHideAward: m,
						onHideTooltip: u,
						onOpenReportFlow: p,
						onShowTooltip: h,
						tooltipType: b
					} = this.props, {
						canScrollLeft: w,
						canScrollRight: g
					} = this.state, f = e.length > 0, v = te(d.id, b);
					return o.a.createElement("div", {
						className: Object(M.a)(me.a.awardBadges, t, {
							[me.a.noAwards]: !f,
							[me.a.multiline]: i
						}),
						ref: this.plaqueRef
					}, w && o.a.createElement(ee, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (d.topAwardedType === L.a.Active || d.topAwardedType === L.a.Inactive) && !r && n && o.a.createElement(ce, {
						awardsPlaqueStyle: !0,
						post: d
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = d, s = t[e.id], r = a.icon32[e.id], n = a.icon128[e.id];
						return o.a.createElement(K, {
							award: e,
							className: me.a.clickablePlaqueItem,
							count: s,
							giveAwardAnimationIconUrl: n,
							key: e.id,
							onAddAward: l,
							onHideAward: m,
							onOpenReportFlow: p,
							onHideTooltip: u,
							onShowTooltip: h,
							pillIconUrl: r,
							post: d,
							prefersReducedMotion: c,
							tooltipId: "".concat(v, "-").concat(e.id),
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !s && o.a.createElement(U, {
						className: me.a.clickablePlaqueItem,
						onAddAward: l
					}), !i && o.a.createElement("div", {
						className: me.a.spacer
					}), g && o.a.createElement(ee, {
						direction: "right",
						onClick: this.handleScrollRight
					}))
				}
			}
			var be = he,
				we = s("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				ge = s.n(we);
			const {
				fbt: fe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class ve extends o.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = o.a.createRef(), this.handleAwardAddedEvent = () => {
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
					return o.a.createElement(o.a.Fragment, null, t > 1 && " • ", fe._("{award-name} Award", [fe._param("award-name", e.name)], {
						hk: "2QpjYF"
					}))
				}
				render() {
					const {
						award: e,
						className: t,
						count: s,
						iconClassName: r,
						iconUrl: a,
						onHideAward: n,
						onHideTooltip: i,
						onOpenReportFlow: d,
						postOrComment: c,
						tooltipId: l,
						tooltipLocation: m
					} = this.props;
					if (s <= 0) return null;
					const u = e.awardType === T.f.Moderator,
						p = Object(D.a)(e.id, c.id),
						h = "container" === m;
					return o.a.createElement("span", {
						className: Object(M.a)(ge.a.awardItem, t),
						id: h ? l : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i
					}, o.a.createElement("span", {
						id: h ? "" : l
					}, o.a.createElement("img", {
						alt: e.name,
						className: Object(M.a)(ge.a.awardIcon, {
							[ge.a.animate]: this.state.animate
						}, r),
						id: p,
						ref: this.imageRef,
						src: a
					})), o.a.createElement("span", null, s > 1 && s, u && this.renderModAwardName()), o.a.createElement(z, {
						award: e,
						onHideAward: () => n(e),
						postOrComment: c,
						tooltipId: l,
						onOpenReportFlow: () => d(e)
					}))
				}
			}
			var Ae = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Oe = s("./src/reddit/icons/fonts/helpers.tsx");
			var xe = e => o.a.createElement("i", {
				className: Object(M.a)(Object(Oe.b)("addGild"), e.className)
			});
			var je = e => o.a.createElement("i", {
					className: Object(M.a)(Object(Oe.b)("addGildDashed"), e.className)
				}),
				Ee = s("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				Te = s.n(Ee);
			class ye extends o.a.PureComponent {
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
					} = this.props, s = this.state.isHovered ? xe : je;
					return o.a.createElement("button", {
						className: Object(M.a)(e, Te.a.badgeButton, Te.a.visibilityEffect),
						onClick: t,
						onBlur: this.handleMouseLeave,
						onFocus: this.handleMouseEnter,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, o.a.createElement(s, {
						className: Te.a.icon
					}))
				}
			}
			var Ce = ye;
			var Ie, _e = e => {
					const {
						awards: t,
						className: s,
						hideBadgeButton: a,
						hideTopAwardedBadge: n,
						icons: i,
						isInEconLeaderboardsExperiment: d,
						onAddAward: c,
						onHideAward: l,
						onOpenReportFlow: m,
						onHideTooltip: u,
						onShowAllAwards: p,
						onShowTooltip: h,
						showAllAwards: b,
						tooltipType: w,
						thing: g
					} = e, f = te(g.id, w), v = "".concat(f, "-view-all");
					let A = [];
					A = b ? t : t.length > 5 ? t.slice(0, 4) : t;
					const x = !a && g.isGildable && t.length > 0,
						j = t.length > A.length ? t.slice(A.length).reduce((e, t) => e + (g.awardCountsById && g.awardCountsById[t.id] || 0), 0) : 0,
						E = r.fbt._("& {hidden award count} More", [r.fbt._param("hidden award count", j.toLocaleString())], {
							hk: "1OnmAi"
						});
					return o.a.createElement("div", {
						className: Object(M.a)(Te.a.awardBadges, s)
					}, Object(O.a)(g.id) && (g.topAwardedType === L.a.Active || g.topAwardedType === L.a.Inactive) && !n && d && o.a.createElement(ce, {
						post: g
					}), A.map(e => {
						const t = g.awardCountsById ? g.awardCountsById[e.id] : 0,
							s = i.icon32[e.id];
						return o.a.createElement(ve, {
							award: e,
							count: t,
							iconUrl: s,
							key: e.id,
							onHideAward: l,
							onOpenReportFlow: m,
							onHideTooltip: u,
							onShowTooltip: h,
							postOrComment: g,
							tooltipId: "".concat(f, "-").concat(e.id),
							tooltipLocation: "icon"
						})
					}), j > 0 && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
						"data-click-id": "awards",
						id: v,
						className: Te.a.showAllButton,
						onClick: p,
						onMouseEnter: () => h(v),
						onMouseLeave: u
					}, E), o.a.createElement(Ae.c, {
						tooltipId: v,
						text: "View all Awards"
					})), x && o.a.createElement(Ce, {
						onClick: c
					}))
				},
				Se = s("./src/reddit/actions/gold/reportAward.ts"),
				Pe = s("./src/reddit/controls/Button/index.tsx"),
				ke = s("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				Ne = s.n(ke);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(Ie || (Ie = {}));
			var Me = e => {
				const t = Object(re.a)(),
					[s, i] = Object(a.useState)(e.award.awardType === T.f.Global ? Ie.FLAG_USAGE : Ie.BEGIN),
					d = Object(n.c)(),
					c = () => {
						s === Ie.BEGIN ? t(Object(x.clickCancelAwardReportFlow)(e.award, e.thing.id)) : s === Ie.REPORT_COMMUNITY_AWARD ? t(Object(x.clickCancelReportAward)(e.award, e.thing.id)) : s === Ie.FLAG_USAGE && t(Object(x.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(x.clickConfirmReportAward)(e.award, e.thing.id)), d(Object(Se.a)(e.award)), e.onClose()
					},
					m = () => {
						t(Object(x.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), d(Object(p.e)(Object(p.d)(r.fbt._("{award name} Award successfully flagged for review.", [r.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), h.b.SuccessAward))), e.onClose()
					},
					u = o.a.createElement(o.a.Fragment, null, o.a.createElement(Pe.l, {
						onClick: () => {
							t(Object(x.clickReportAward)(e.award, e.thing.id)), i(Ie.REPORT_COMMUNITY_AWARD)
						},
						className: Ne.a.reportStepButton
					}, r.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), o.a.createElement(Pe.l, {
						onClick: () => {
							t(Object(x.clickFlagAwardUsage)(e.award, e.thing.id)), i(Ie.FLAG_USAGE)
						},
						className: Ne.a.reportStepButton
					}, r.fbt._("This award is being used inappropriately.", null, {
						hk: "Y8giW"
					})));
				switch (s) {
					case Ie.BEGIN:
						return o.a.createElement(j.a, {
							withOverlay: !0,
							hideCancelButton: !0,
							onConfirm: c,
							onCancel: c,
							onClose: c,
							headerText: r.fbt._("What's Wrong?", null, {
								hk: "JqSAe"
							}),
							actionText: r.fbt._("Cancel", null, {
								hk: "370pdF"
							}),
							modalText: u
						});
					case Ie.REPORT_COMMUNITY_AWARD:
						return o.a.createElement(j.a, {
							withOverlay: !0,
							onConfirm: l,
							onCancel: c,
							onClose: c,
							headerText: r.fbt._("Report Community Award", null, {
								hk: "3T6dhH"
							}),
							actionText: r.fbt._("Report Award", null, {
								hk: "dHwed"
							}),
							modalText: r.fbt._("Do you want to report the {award name} Award?", [r.fbt._param("award name", e.award.name)], {
								hk: "4by1t"
							})
						});
					case Ie.FLAG_USAGE:
						return o.a.createElement(j.a, {
							withOverlay: !0,
							onConfirm: m,
							onCancel: c,
							onClose: c,
							headerText: r.fbt._("Flag Award Usage", null, {
								hk: "395heU"
							}),
							actionText: r.fbt._("Flag Award Usage", null, {
								hk: "24B1WV"
							}),
							modalText: r.fbt._("Is the {award name} Award inappropriate on this content? Reddit uses this information to improve the awarding experience and remove awards that are being misused.", [r.fbt._param("award name", e.award.name)], {
								hk: "3P3dMP"
							})
						})
				}
			};
			const Be = Object(i.c)({
					allAwards: e => e.awards.models,
					icons: (e, t) => Object(S.b)(e, {
						postOrComment: t.thing,
						minSizes: [32, 128]
					}),
					currentUser: _.i,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(y.a)(e),
					isInEconLeaderboardsExperiment: e => {
						const t = Object(I.c)(e, {
							experimentEligibilitySelector: _.H,
							experimentName: C.ab
						});
						return !(!t || Object(C.Bc)(t))
					},
					isLoggedIn: _.H,
					prefersReducedAnimations: P.c
				}),
				Le = e => Object(O.a)(e.id) ? e.postId : e.id,
				He = Object(n.b)(Be, (e, t) => {
					let {
						thing: s
					} = t;
					return {
						hideAward: t => e(w({
							awardId: t,
							thingId: Le(s)
						})),
						onAddAward: (t, r) => {
							const a = Le(s);
							return e(Object(g.d)({
								awardId: r,
								correlationId: t,
								thingId: a
							}))
						},
						onHideTooltip: () => e(Object(v.i)()),
						onShowTooltip: t => e(Object(v.f)({
							tooltipId: t
						})),
						onToggleHideAwardModal: () => e(Object(f.i)("AwardBadges--Modal--HideAwardConfirmation")),
						triggerOverlayAnimation: () => e(Object(d.b)(Le(s)))
					}
				});
			class Fe extends o.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(A.d)(A.a.GildingFlow, !0),
							{
								onAddAward: r,
								sendEvent: a,
								thing: o
							} = this.props;
						r(t, e);
						const {
							clickAddAward: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a(n(o.id))
					}, this.handleShowAllAwards = () => {
						this.setState({
							showAllAwards: !0
						})
					}, this.handleHideAward = async e => {
						const {
							sendEvent: t,
							onToggleHideAwardModal: r,
							thing: a
						} = this.props;
						this.setState({
							selectedAward: e
						});
						const {
							clickHideAward: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(o(e, a.id)), r()
					}, this.handleHideAwardConfirmed = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: r
						} = this.state, {
							clickConfirmHideAward: a
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						r && (e(a(r, t.id)), this.props.hideAward(r.id))
					}, this.handleHideAwardCanceled = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: r
						} = this.state, {
							clickCancelHideAward: a
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						r && e(a(r, t.id))
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
					}, this.handleOpenReportFlow = e => {
						this.props.sendEvent(Object(x.clickAwardReportFlow)(e, this.props.thing.id)), this.setState({
							reportingAward: e
						})
					}, this.state = {
						selectedAward: null,
						showAllAwards: !1,
						reportingAward: null
					}
				}
				render() {
					const {
						allAwards: e,
						awardsCountInView: t,
						awardsPlaqueStyle: s,
						className: a,
						currentUser: n,
						hideCta: i,
						hideTopAwardedBadge: d,
						icons: c,
						isConfirmModalOpen: l,
						isInEconLeaderboardsExperiment: m,
						isLoggedIn: u,
						isPostDetail: p,
						onHideTooltip: h,
						onShowTooltip: b,
						onToggleHideAwardModal: w,
						prefersReducedAnimations: g,
						thing: f,
						triggerOverlayAnimation: v,
						tooltipType: A
					} = this.props, {
						showAllAwards: x
					} = this.state, E = g || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, y = Object(T.q)(Object.keys(f.awardCountsById || {}).map(t => e[t]).filter(Boolean)), C = !!n && n.id === f.authorId;
					return o.a.createElement(o.a.Fragment, null, s ? o.a.createElement(be, {
						awards: y,
						awardsCountInView: t,
						className: a,
						hideAddAwardButton: i || !f.isGildable || C,
						hideTopAwardedBadge: d,
						icons: c,
						isInEconLeaderboardsExperiment: m,
						multiline: !!p,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: f,
						prefersReducedMotion: E,
						tooltipType: A,
						triggerOverlayAnimation: v
					}) : o.a.createElement(_e, {
						awards: y,
						className: a,
						hideBadgeButton: i || !u,
						hideTopAwardedBadge: d,
						icons: c,
						isInEconLeaderboardsExperiment: m,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: h,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: b,
						showAllAwards: x || !!p,
						thing: f,
						tooltipType: A
					}), l && n && this.state.selectedAward && o.a.createElement(j.a, {
						actionText: r.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: C ? Object(O.a)(f.id) ? r.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : r.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(O.a)(f.id) ? r.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : r.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "qlfga"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: w,
						withOverlay: !0
					}), this.state.reportingAward && o.a.createElement(Me, {
						award: this.state.reportingAward,
						thing: f,
						onClose: () => this.setState({
							reportingAward: null
						})
					}))
				}
			}
			t.a = He(Object(E.c)(Fe))
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
				return I
			})), s.d(t, "a", (function() {
				return _
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/higherOrderComponents/makeAsync.tsx");
			var u = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("SubredditPremiumBadgeHovercardTooltip")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/helpers/economics/sortBadges.ts"),
				w = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				g = s("./src/reddit/models/Badge/index.ts");
			var f = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				v = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				A = s.n(v);
			const O = "add-custom-badge-tooltip",
				x = 100,
				j = 2 * x;
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, x)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, j)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return a.a.createElement("img", {
						className: Object(d.a)(A.a.image, this.props.className),
						src: "".concat(i.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(O, "-").concat(this.props.uniqueIdentifier);
					return a.a.createElement(r.Fragment, null, this.props.showAddCustom && a.a.createElement("div", {
						className: A.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, a.a.createElement("button", {
						className: A.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, a.a.createElement(w.a, {
						className: A.a.addCustom
					})), a.a.createElement(f, {
						className: A.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(this.props.badges).map(e => {
						const t = Object(g.b)(24, 24, e),
							s = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return a.a.createElement(r.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, a.a.createElement("div", {
							className: Object(d.a)(A.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, a.a.createElement("img", {
							className: A.a.image,
							id: s,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? a.a.createElement(u, {
							badge: e,
							correlationId: this.props.correlationId,
							className: A.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: s,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : a.a.createElement(p.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: s,
							text: e.title
						})))
					}))
				}
			}
			const T = Object(n.c)({
					badges: (e, t) => {
						let {
							subredditId: s,
							userId: r
						} = t;
						return ((e.users.appliedBadges[r] || {})[s] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: h.d.spSpecialMemberships
				}),
				y = Object(n.c)({
					badges: (e, t) => {
						let {
							subredditId: s
						} = t;
						const r = e.user.account;
						if (r) {
							return ((e.users.appliedBadges[r.id] || {})[s] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: h.d.spSpecialMemberships
				}),
				C = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				}),
				I = Object(o.b)(T, C)(E),
				_ = Object(o.b)(y, C)(E)
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
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
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
				return t.length ? a.a.createElement(l.b, {
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
			t.b = Object(o.b)(() => Object(n.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: r
					} = t;
					return Object(u.r)(e, s, r)
				},
				customBadgesEnabled: m.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => m.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(d.j)())
			}))(b)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/selectors/economics.ts");

			function d(e) {
				const {
					badges: t
				} = e, s = t[t.length - 1];
				return s && !e.ignore ? a.a.cloneElement(e.children, {
					style: s.extra && s.extra.style && s.extra.style.color ? Object.assign(Object.assign({}, e.children.props.style || {}), {
						color: s.extra.style.color,
						fontWeight: 700
					}) : e.children.props.style
				}) : e.children
			}
			t.b = Object(o.b)(() => Object(n.c)({
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: r
					} = t;
					return Object(i.r)(e, s, r)
				}
			}))(d)
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx");
			const a = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceUserPublicPointsDisplay").then(s.bind(null, "./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx")).then(e => e.default)
			});
			t.a = a
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				d = e => e.alwaysShowChildren ? a.a.createElement(a.a.Fragment, null, e.children) : null;
			t.b = Object(o.a)({
				ErrorComponent: d,
				getComponent: () => Object(n.a)(() => Promise.all([s.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"), s.e("AuthorHovercard")]).then(s.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: d
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return A
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return I
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				d = s.n(i),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (s[r[a]] = e[r[a]])
					}
					return s
				};
			const u = Object(n.c)({
				consumers: e => e.jsApi
			});
			class p extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: r
							} = t,
							a = m(t, ["className", "consumers"]);
						l.a.publish(c.a, a, e)
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
					return e.consumers.length ? a.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && a.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var h = Object(o.b)(u, {})(p),
				b = s("./src/reddit/selectors/comments.ts"),
				w = s("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const s = Object(b.n)(e, t),
					r = Object(w.J)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var f = Object(o.b)(() => Object(n.a)(g, b.j, (e, t) => Object.assign(Object.assign({}, e), {
				depth: t
			})))(e => a.a.createElement(h, {
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
				const s = Object(b.n)(e, t),
					r = Object(w.J)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var A = Object(o.b)(() => Object(n.a)(v, e => e))(e => a.a.createElement(h, {
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
			var O = Object(o.b)(() => Object(n.c)({
					subreddit: w.S
				}))(e => a.a.createElement(h, {
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
				x = s("./src/reddit/selectors/posts.ts");
			var j = Object(o.b)(() => Object(n.c)({
				post: x.N,
				subredditOrProfile: x.ab,
				isModerator: (e, t) => {
					const s = Object(x.ab)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => a.a.createElement(h, {
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
			var E = Object(o.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(x.ab)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(x.ab)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => a.a.createElement(h, {
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
			var T = Object(o.b)(() => Object(n.c)({
				post: x.N,
				subredditOrProfile: x.ab,
				isModerator: (e, t) => {
					const s = Object(x.ab)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => a.a.createElement(h, {
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
			var y = Object(o.b)(() => Object(n.c)({
				subreddit: w.S
			}))(e => a.a.createElement(h, {
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
			var C = Object(o.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(w.M)(e, {
					identifier: t
				})
			}))(e => a.a.createElement(h, {
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
			var I = Object(o.b)(() => Object(n.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(w.S)(e, {
						subredditId: s
					}) : null
				}
			}))(e => a.a.createElement(h, {
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
				metaSeparator: "_3V4xlrklKBP2Hg51ejjjvz",
				powerupBadge: "_22mcWwgVXFmw2-GrK4ZsJd",
				powerupIcon: "_1QXVZCgv3qdc2eb_RSi7qB"
			}
		},
		"./src/reddit/components/PostTopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return Z
			})), s.d(t, "a", (function() {
				return ee
			})), s.d(t, "b", (function() {
				return re
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/humanizeDateTime/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/timeAgo/index.ts"),
				u = s("./src/reddit/helpers/trackers/powerups.ts"),
				p = s("./src/reddit/actions/gold/powerups.ts"),
				h = s("./src/reddit/helpers/isCrosspost.ts"),
				b = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				w = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				f = s("./src/reddit/icons/svgs/Powerup/index.tsx"),
				v = s("./src/reddit/components/AuthorLink/index.tsx"),
				A = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				O = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				x = s("./src/reddit/components/Flair/index.tsx"),
				j = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				E = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				T = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				y = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				C = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				I = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				_ = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				S = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				P = s("./src/reddit/constants/posts.ts"),
				k = s("./src/reddit/contexts/InsideOverlay.tsx"),
				N = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				M = s("./src/reddit/components/Portal/index.tsx"),
				B = s("./src/reddit/constants/elementIds.ts"),
				L = a.a.memo((function(e) {
					let {
						children: t
					} = e;
					const [s, o] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => (o(!0), () => o(!1)), []), s ? a.a.createElement(M.a, {
						container: document.getElementById(B.d)
					}, a.a.Children.only(t)) : null
				})),
				H = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				F = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				R = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				U = (s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/models/Flair/index.ts")),
				D = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				q = s("./src/reddit/models/Post/index.ts"),
				G = s("./src/reddit/models/Subreddit/index.ts"),
				z = s("./src/reddit/selectors/authorFlair.ts"),
				V = s("./src/reddit/selectors/gold/powerups.ts"),
				W = s("./src/reddit/selectors/userFlair.ts"),
				Q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				J = s("./src/reddit/components/PostTopMeta/index.m.less"),
				Y = s.n(J);
			const {
				fbt: K
			} = s("./node_modules/fbt/lib/FbtPublic.js"), X = {
				placement: "top"
			};
			var Z;
			! function(e) {
				e.StickyPost = "sticky", e.Lightbox = "lightbox", e.TopAwardedModal = "topAwarded"
			}(Z || (Z = {}));
			const $ = e => Object(F.a)(Object(H.a)(e), D.a.metaText, D.b.metaText),
				ee = l.a.wrapped(N.b, "MetaSeparator", Y.a),
				te = l.a.span("text", Y.a),
				se = Object(Q.t)(),
				re = e => {
					const t = !e.isDeleted && e.post.distinguishType === i.C.ADMIN;
					return a.a.createElement(v.a, {
						className: Y.a.authorLink,
						"data-click-id": "user",
						author: e.post.author,
						isAdmin: t,
						isAdminEmeritus: t,
						isAuthorDeleted: e.isDeleted,
						isUnstyled: !0,
						style: e.style
					}, "u/".concat(e.post.author), t && a.a.createElement(R.a, {
						className: Y.a.adminIcon
					}), e.renderContractorBadge && a.a.createElement(R.a, {
						className: Y.a.contractorIcon
					}), !1)
				},
				ae = a.a.memo((function(e) {
					const {
						className: t,
						isOverlay: s,
						pageLayer: d,
						post: l,
						showSub: v = !1,
						showTimestamp: k = !0,
						subredditOrProfile: N,
						tooltipType: M
					} = e, B = Object(o.c)(), H = Object(w.a)(), F = l.belongsTo.id, R = Object(r.useCallback)(e => Object(z.a)(e, {
						post: l
					}), [l]), D = Object(o.d)(R), Q = Object(r.useCallback)(e => Object(W.a)(e, {
						subredditId: F
					}), [F]), J = Object(o.d)(Q), Z = Object(r.useCallback)(e => Object(V.a)(e, {
						subredditId: F,
						userId: l.authorId
					}), [F, l.authorId]), se = Object(o.d)(Z), ae = Object(r.useCallback)(e => Object(W.d)(e, {
						subredditId: F
					}), [F]), oe = Object(o.d)(ae), ne = Object(b.a)(X), ie = Object(b.a)(X), de = d && d.meta && d.meta.name === i.Bb.COMMENTS, ce = Object(h.a)(l), le = oe === U.b.Left, me = l.authorIsContractor && !!N && N.type === G.e.EmployeesOnly, ue = !!N && se, pe = !s && !de, he = () => a.a.createElement(ee, {
						className: e.metaSeparatorClassName
					}, "•"), be = a.a.createElement(a.a.Fragment, null, !ce && a.a.createElement(te, {
						style: {
							color: $(e)
						}
					}, "Posted by"), ce && a.a.createElement(r.Fragment, null, a.a.createElement(g.a, {
						className: Y.a.crosspostIcon
					}), a.a.createElement(te, {
						style: {
							color: $(e)
						}
					}, "Crossposted by")), D && le && a.a.createElement("div", {
						className: Y.a.flairContainer
					}, a.a.createElement(x.b, {
						disabled: !J,
						flair: D,
						forceSmallEmojis: !0,
						usesCommunityStyles: pe
					})), Object(q.h)(l.author) ? a.a.createElement(re, {
						post: l,
						isDeleted: !0,
						renderContractorBadge: me,
						style: {
							color: $(e)
						}
					}) : a.a.createElement(r.Fragment, null, !Object(q.h)(l.author) && a.a.createElement(A.b, {
						className: Y.a.badge,
						subredditId: F,
						uniqueIdentifier: "".concat(l.id, "-").concat(s),
						userId: l.authorId
					}), a.a.createElement(E.b, {
						postOrComment: l,
						tooltipType: M
					}, a.a.createElement(O.b, {
						ignore: Object(q.h)(l.author) || !!l.distinguishType && l.distinguishType !== i.C.NONE,
						subredditId: F,
						userId: l.authorId
					}, a.a.createElement(re, {
						post: l,
						renderContractorBadge: me,
						style: {
							color: $(e)
						}
					}))), ue && a.a.createElement(a.a.Fragment, null, a.a.createElement("button", {
						className: Y.a.powerupBadge,
						onMouseEnter: ie.show,
						onMouseLeave: ie.hide,
						onClick: () => {
							H(Object(u.e)(M ? "post" : "postlist")), B(Object(p.b)())
						},
						ref: ie.target.ref
					}, a.a.createElement(f.a, {
						className: Y.a.powerupIcon
					})), a.a.createElement(L, null, a.a.createElement(y.a, {
						arrowProps: ie.arrowProps,
						popperProps: ie.popperProps,
						visible: ie.visible
					}, K._("Powerups Top Supporter", null, {
						hk: "1GLWsz"
					}))))), D && !le && a.a.createElement("div", {
						className: Y.a.flairContainer
					}, a.a.createElement(x.b, {
						disabled: !J,
						flair: D,
						forceSmallEmojis: !0,
						usesCommunityStyles: pe
					})), l.belongsTo.type === P.a.SUBREDDIT && !Object(q.h)(l.author) && a.a.createElement(j.a, {
						className: Y.a.publicWallet,
						contentId: l.id,
						metaSeparator: a.a.createElement(he, null),
						subredditId: F,
						userId: l.authorId,
						username: l.author
					}));
					return a.a.createElement("div", {
						className: Object(n.a)(Y.a.container, t)
					}, v && N && a.a.createElement(T.a, {
						postId: l.id,
						subredditName: N.name,
						tooltipType: M
					}, a.a.createElement(S.a, {
						"data-click-id": "subreddit",
						to: N.url
					}, N.displayText)), N && N.isQuarantined && a.a.createElement(I.a, null), v && !ce && a.a.createElement(he, null), l.isSponsored && a.a.createElement(r.Fragment, null, a.a.createElement(_.a, null), a.a.createElement(he, null)), be, a.a.createElement(C.e, {
						post: l
					}), k && a.a.createElement(a.a.Fragment, null, a.a.createElement("a", {
						className: Y.a.externalLink,
						"data-click-id": "timestamp",
						href: l.permalink,
						onMouseEnter: ne.show,
						onMouseLeave: ne.hide,
						ref: ne.target.ref,
						style: {
							color: $(e)
						},
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, Object(m.d)(l.created / 1e3)), a.a.createElement(L, null, a.a.createElement(y.a, {
						arrowProps: ne.arrowProps,
						popperProps: ne.popperProps,
						visible: ne.visible
					}, Object(c.a)(l.created)))))
				}));
			t.d = se(Object(k.b)(Object(d.a)(ae)))
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				n = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				u = s.n(m);
			const p = ["center", "top"],
				h = ["center", "bottom"],
				b = i.a.div("Container", u.a),
				w = Object(n.a)(d.b),
				g = Object(c.t)({
					isProfileListingPage: c.F
				});
			class f extends o.a.Component {
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
					return o.a.createElement(b, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, o.a.createElement(l.a, {
						className: u.a.quarantineIcon
					}), r.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), o.a.createElement(w, {
						text: r.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: p,
						tooltipPosition: h
					}))
				}
			}
			t.a = g(f)
		},
		"./src/reddit/components/SponsoredLabel/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2oEYZXchPfHwcf9mTMGMg8",
				wrapper: "_2oEYZXchPfHwcf9mTMGMg8"
			}
		},
		"./src/reddit/components/SponsoredLabel/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				n = s("./src/reddit/components/SponsoredLabel/index.m.less"),
				i = s.n(n);
			const d = s("./src/lib/lessComponent.tsx").a.span("Wrapper", i.a);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement(d, {
					className: t
				}, r.fbt._("promoted", null, {
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
			var r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = s.n(a);
			const n = s("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", o.a);
			t.a = n
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
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				i = s.n(n);
			const d = e => a.a.createElement("span", {
				className: Object(o.a)(i.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: s
				} = e;
				return a.a.createElement(d, {
					className: Object(o.a)(i.a.metaSeparator, t),
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
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return n
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var r = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s) => Object.assign(Object.assign({}, a.defaults(e)), {
					correlationId: Object(r.d)(r.a.PowerupsFlow, !1),
					profile: a.profile(e),
					subreddit: a.subreddit(e),
					powerups: Object.assign(Object.assign({}, a.subredditPowerups(e)), {
						freeCount: t,
						paidCount: s
					})
				}),
				n = e => t => Object.assign(Object.assign({
					source: e,
					action: "click",
					noun: "powerups_user_badge"
				}, o(t)), {
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				i = () => e => Object.assign(Object.assign({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta"
				}, o(e)), {
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				d = () => e => Object.assign(Object.assign({
					source: "powerups",
					action: "view",
					noun: "post_upsell"
				}, o(e)), {
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				c = () => e => Object.assign(Object.assign({
					source: "powerups",
					action: "click",
					noun: "post_upsell"
				}, o(e)), {
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				l = (e, t) => s => Object.assign({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step"
				}, o(s, e, t))
		},
		"./src/reddit/helpers/trackers/topAwarded.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			}));
			var r = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/helpers/trackers/goldPayment.ts"),
				o = s("./src/reddit/selectors/gold/topAwarded.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return Object.assign(Object.assign({}, Object(a.h)(e, t)), {
						correlationId: Object(r.d)(r.a.GildingFlow, !1),
						profile: n.profile(e),
						subreddit: n.subreddit(e)
					})
				},
				d = e => t => Object.assign({
					source: "post",
					action: "click",
					noun: "award_spotlight_banner"
				}, i(t, {
					thingId: e
				})),
				c = e => t => Object.assign({
					source: "post_awards_leaderboard",
					action: "view",
					noun: "page"
				}, i(t, {
					thingId: e
				})),
				l = () => e => Object.assign({
					source: "post_awards_leaderboard",
					action: "click",
					noun: "give_gold"
				}, i(e, {
					thingId: Object(o.a)(e) || void 0
				}))
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => a.a.createElement("i", {
				className: Object(o.a)(Object(n.b)("admin"), d.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, s) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				n = s("./src/reddit/icons/fonts/Gift/index.m.less"),
				i = s.n(n);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(o.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(o.a, null, e.desc)), "GiftIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);

			function o(e) {
				return a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), a.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, a.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), a.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Powerup/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M12.249 32c-.4 0-.8-.1-1.2-.25l-.05-.05-5.05-2.6c-1.25-.7-1.75-2.2-1.25-3.5l.05-.1 2.45-5.45-3.15-1.5a2.985 2.985 0 01-1.4-3.55l3.5-12.05C6.649 1.2 8.299 0 10.099 0h7.8c.45 0 .9.1 1.3.3l.15.1 4.85 2.45c1.5.8 2.05 2.55 1.35 4.05l-2.2 4.3 4.45 2.25c.8.45 1.35 1.25 1.45 2.2.1.9-.2 1.8-.9 2.45l-14.15 13.15c-.55.5-1.25.75-1.95.75z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M10.648 17l-.85 2.1-4.65-2.2c.1.05.25.1.4.1h5.1zM23.749 13.6l3.1 1.6c.5.3.65 1 .15 1.45L12.849 29.8c-.3.25-.65.3-.95.15l-4.85-2.5c.3.1.65.1.9-.15l14.15-13.15c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M23.75 13.6l3.1 1.6c.5.3.65 1 .15 1.45l-4.9-2.5c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF8717"
			}), a.a.createElement("path", {
				d: "M18.898 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-3.35 6.55h-6.05l4.5-9.05z",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M18.9 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-4.9-2.5z",
				fill: "#FF8717"
			}), a.a.createElement("path", {
				d: "M21.95 12.65c.5.3.65 1 .15 1.45L7.95 27.3c-.3.25-.65.3-.9.15l-.1-.05a.86.86 0 01-.4-1.05l4.1-9.35h-5.1c-.15 0-.3-.05-.45-.1l-.1-.05c-.4-.25-.65-.75-.5-1.25L8.05 3.55A2.19 2.19 0 0110.15 2h7.8c.15 0 .3.05.45.1l.05.05c.45.25.7.85.45 1.4l-4.5 9.05h7.1c.15 0 .3.05.4.1l.05-.05z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M15.599 3.45c.55-.15 1.15-.25 1.7-.45-.6-.1-1.15-.15-1.75-.2-.6-.05-1.15-.05-1.75-.1-1.15-.05-2.25 0-3.4.05-.55 0-1.05.3-1.35.8-.15.3-.15.35-.2.5l-.15.4-.5 1.55c-.35 1.05-.7 2.1-1 3.15-.3 1.05-.65 2.1-.9 3.2-.3 1.05-.6 2.15-.8 3.25.55-1 1-2 1.5-3 .45-1 .9-2 1.35-3.05.4-1 .85-2.05 1.2-3.1l.6-1.55.25-.65h.05c1.15-.1 2.3-.25 3.4-.45.6-.1 1.15-.2 1.75-.35zM20.25 13.35c-1.1-.05-2.2-.05-3.3 0-.55 0-1.1.05-1.65.1-.55.05-1.1.1-1.65.2.55.15 1.1.25 1.6.35.55.1 1.1.2 1.65.25.6.1 1.25.15 1.85.2-.45.45-.9.85-1.3 1.3-.75.75-1.5 1.5-2.25 2.3-.75.8-1.5 1.55-2.2 2.35-.7.8-1.45 1.6-2.1 2.45.9-.65 1.7-1.3 2.55-2 .85-.7 1.65-1.4 2.45-2.1.8-.7 1.6-1.45 2.4-2.15l2.35-2.2c.1-.1.15-.25.2-.4 0-.4-.3-.65-.6-.65z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fillRule: "evenodd"
				}, a.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), a.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/icons/svgs/TopAwarded/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M22.5 22.866h-21a1.5 1.5 0 01-1.5-1.5v-7.329c0-.59.34-1.1.835-1.345v-7.23a1.5 1.5 0 011.5-1.5h4.943v-1.65a1.5 1.5 0 011.5-1.5h6.444a1.5 1.5 0 011.5 1.5v4.363h4.943a1.5 1.5 0 011.5 1.5v4.517c.495.245.835.755.835 1.345v7.329a1.5 1.5 0 01-1.5 1.5z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M22.5 18.971h-21v2.395h21V18.97z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M22.5 14.037h-21v5.119h21v-5.119z",
				fill: "#FF8717"
			}), a.a.createElement("path", {
				d: "M21.665 14.66v3.178h-6.443V12.85h6.443v1.812zM8.779 10.136v7.702H2.335v-7.702H8.78z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M15.222 17.838v.348H8.779V6.987h6.443v10.852z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M16.244 12.85h-1.022v4.988h1.022V12.85zM8.779 10.136H7.756v7.702H8.78v-7.702z",
				fill: "#FEB331"
			}), a.a.createElement("path", {
				d: "M15.734 12.85h-.512v4.988h.512V12.85zM8.78 10.136h-.512v7.702h.512v-7.702z",
				fill: "#F76B0B"
			}), a.a.createElement("path", {
				d: "M21.665 8.175h-6.443v4.674h6.443V8.175zM8.779 5.462H2.335v4.674H8.78V5.462z",
				fill: "#FF8717"
			}), a.a.createElement("path", {
				d: "M15.222 2.313H8.779v4.674h6.443V2.312z",
				fill: "#FF8717"
			}), a.a.createElement("path", {
				d: "M16.244 8.175h-1.022v4.674h1.022V8.175zM8.779 5.462H7.756v4.674H8.78V5.462z",
				fill: "#DB5003"
			}), a.a.createElement("path", {
				d: "M11.752 11.577h-.063l-1.143.772v-1.038l1.206-.822h1.206v4.742h-1.206v-3.654zM5.326 12.403c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.502-.537-.502-.367 0-.584.25-.584.592H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.477h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#FFF1B6"
			}), a.a.createElement("path", {
				d: "M11.752 11.13h-.063l-1.143.771v-1.038l1.206-.822h1.206v4.742h-1.206V11.13zM5.326 11.955c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.503-.537-.503-.367 0-.584.25-.584.593H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.029h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M15.222 6.08H8.779v.907h6.443V6.08zM22.5 19.156h-21v.907h21v-.907zM21.665 12.866h-5.931l.51-.907h5.421v.907zM8.268 10.136H2.336v-.907h5.42l.512.907z",
				fill: "#FFFCD9"
			}))
		},
		"./src/reddit/models/Gold/TopAwarded/index.ts": function(e, t, s) {
			"use strict";
			var r;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Active = "ACTIVE", e.Inactive = "INACTIVE"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/gold/topAwarded.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			const r = e => e.users.topAwarders.currentPostId,
				a = e => e.users.topAwarders.api.pending,
				o = e => e.users.topAwarders.api.error,
				n = (e, t) => e.users.topAwarders.list[t],
				i = (e, t) => e.users.topAwarders.currentRank[t]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580.376668fb777aadd703be.js.map