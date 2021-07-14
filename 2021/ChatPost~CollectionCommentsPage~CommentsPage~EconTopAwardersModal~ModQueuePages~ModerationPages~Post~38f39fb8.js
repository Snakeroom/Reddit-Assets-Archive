// https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8.54f7f98834b5ddb26d38.js
// Retrieved at 7/14/2021, 6:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"], {
		"./src/lib/humanizeDateTime/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const s = 9999999999;

			function n(e) {
				return e > s ? new Date(e).toString() : new Date(1e3 * e).toString()
			}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "j", (function() {
				return f
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(s.a)(o.a),
				d = Object(s.a)(o.b),
				c = Object(s.a)(o.c),
				l = Object(s.a)(o.d),
				u = Object(s.a)(o.e),
				m = Object(s.a)(o.f),
				p = Object(s.a)(o.g),
				h = Object(s.a)(o.h),
				b = Object(s.a)(o.i),
				f = e => Object(n.h)(a.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/actions/gold/constants.ts");
			const i = Object(s.a)(o.mb),
				d = Object(s.a)(o.t),
				c = e => async t => {
					await t(d({
						id: e
					})), t(Object(n.h)(a.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/gold/reportAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/models/Toast/index.ts"),
				i = r("./src/reddit/endpoints/gold/communityAwards.ts"),
				d = r("./src/reddit/actions/gold/constants.ts");
			const c = Object(n.a)(d.lb),
				l = e => async (t, r, {
					apiContext: n
				}) => {
					t(c());
					try {
						if ((await Object(i.e)(n(), e.id)).error) throw new Error;
						await t(Object(a.f)({
							kind: o.b.SuccessAward,
							duration: a.a,
							text: s.fbt._("{award name} Award successfully reported for review.", [s.fbt._param("award name", e.name)], {
								hk: "1fHb5Q"
							})
						}))
					} catch (d) {
						await t(Object(a.f)({
							kind: o.b.Error,
							duration: a.a,
							text: s.fbt._("Something went wrong. The report could not be created at this time.", null, {
								hk: "1ewigu"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			}));
			var s = r("./src/lib/env/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/gold/constants.ts");
			Object(n.a)(c.ub), Object(n.a)(c.tb), Object(n.a)(c.sb);
			const l = Object(n.a)(c.xb),
				u = Object(n.a)(c.wb),
				m = Object(n.a)(c.vb),
				p = (e, t = 25) => async (r, n, {
					gqlContext: o
				}) => {
					if (!n().users.topAwarders.list.length) {
						r(l());
						try {
							const s = await Object(i.b)(o(), {
									top: t,
									postId: e
								}),
								n = s.body;
							if (s.ok) await r(u({
								postId: e,
								...n.data.postInfoById.topAwarders
							}));
							else if (n.errors && n.errors.length) throw new Error(n.errors.map(e => e.message).join("; "))
						} catch (d) {
							Object(s.b)() || console.error(d), a.c.captureMessage(d), r(m(d.message))
						}
					}
				}, h = Object(n.a)(c.yb), b = e => async (t, r) => {
					t(h({
						postId: e
					})), t(Object(d.h)(o.a.ECON_TOP_AWARDERS))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/config.ts"),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				d = r("./src/reddit/hooks/useClickSourceData.ts"),
				c = r("./src/reddit/components/AuthorLink/index.m.less"),
				l = r.n(c);
			t.a = e => {
				const t = Object(a.a)(e.className, l.a.authorLinkStyles, {
						[l.a.isAdmin]: e.isAdmin,
						[l.a.isAdminEmeritus]: e.isAdminEmeritus,
						[l.a.isLivestreaming]: e.isLivestreaming,
						[l.a.isMod]: e.isMod,
						[l.a.isOp]: e.isOp,
						[l.a.isStrong]: e.isStrong,
						[l.a.isUnstyled]: e.isUnstyled
					}),
					r = Object(d.a)();
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? n.a.createElement("a", {
					className: t,
					href: `${o.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? n.a.createElement("span", {
					className: Object(a.a)(l.a.deletedAuthorLink, e.className)
				}, e.children) : n.a.createElement(i.a, {
					className: t,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: r
					}
				}, e.children)
			}
		},
		"./src/reddit/components/AwardBadges/AddAwardPill/index.m.less": function(e, t, r) {
			e.exports = {
				addAwardPill: "_3Wf5TsmUR8Qf8nr0fDHjur",
				giftIcon: "eQZZIJf9NTq5MBV2285S2"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPill/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less": function(e, t, r) {
			e.exports = {
				buttonContainer: "DInSK-8C_3_wtp8rkyyk_",
				right: "_3h4h05agLr2A_NU_Rf3yCn",
				scrollButton: "_2MU8EpOTDEghV1ecmq37UZ",
				"focus-visible": "_38NFrOkGDKwQs4baFR_XWF",
				focusVisible: "_38NFrOkGDKwQs4baFR_XWF",
				chevronIcon: "uPrjAc1vFe8cn_-JitBDg"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less": function(e, t, r) {
			e.exports = {
				awardBadges: "_3XoW0oYd5806XiOr24gGdb",
				badgeButton: "_1vpnHb2bSTD6BcgVKisnPT",
				visibilityEffect: "_3vGYJIJIswDD8YOAMWGC4N",
				icon: "_3zozqOs5cvNd2uvuIiu2_L",
				showAllButton: "_1tAFPduILh7Zse0gkxT4vj"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less": function(e, t, r) {
			e.exports = {
				awardItem: "_2OYwDdghtXEuTF67C95YLY",
				awardIcon: "n08B7PrU01wzgZYIh-s7N",
				animate: "f18KwJcHh9SCfKw_W3Dm2",
				awardBounce: "_3bDgD_5hXKabLRqOe9sXRi"
			}
		},
		"./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less": function(e, t, r) {
			e.exports = {
				reportStepButton: "_2ke5Q4KsrJWi6sCDENRwI2"
			}
		},
		"./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less": function(e, t, r) {
			e.exports = {
				pill: "AavtiP0APDAhqwl7opcvC",
				iconContainer: "_2NhWk2-d-tn8oC0A-k_Ss-",
				awardIcon: "_20LMDg4_PtezakicbNPSfn",
				awardsPlaqueStyle: "qntP0rU06Z8LVP6TKmQHQ",
				"focus-visible": "qbP9Qnm2Qru28YDgfefpw",
				focusVisible: "qbP9Qnm2Qru28YDgfefpw"
			}
		},
		"./src/reddit/components/AwardBadges/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/gold/giveAward.ts"),
				c = r("./src/redditGQL/operations/HideAwardOnTarget.json"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				m = r("./src/reddit/actions/gold/constants.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				h = r("./src/reddit/models/Toast/index.ts");
			const b = Object(l.a)(m.D),
				f = ({
					awardId: e,
					thingId: t
				}) => async (r, n, {
					gqlContext: a
				}) => {
					r(b({
						awardId: e,
						thingId: t
					}));
					const o = s.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
						hk: "10OvOz"
					});
					try {
						(await ((e, t, r) => Object(u.a)(e, {
							...c,
							variables: {
								awardId: t,
								targetId: r
							}
						}))(a(), e, t)).error && r(Object(p.f)({
							kind: h.b.Error,
							duration: p.a,
							text: o
						}))
					} catch (i) {
						r(Object(p.f)({
							kind: h.b.Error,
							duration: p.a,
							text: o
						}))
					}
				};
			var w = r("./src/reddit/actions/gold/modals.ts"),
				g = r("./src/reddit/actions/modal.ts"),
				A = r("./src/reddit/actions/tooltip.ts"),
				v = r("./src/reddit/helpers/correlationIdTracker.ts"),
				x = r("./src/reddit/helpers/isPost.ts"),
				O = r("./src/reddit/helpers/trackers/gild.ts"),
				j = r("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = r("./src/reddit/components/TrackingHelper/index.tsx"),
				E = r("./src/reddit/models/Gold/Award.ts"),
				T = r("./src/reddit/selectors/activeModalId.ts"),
				C = r("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				I = r("./src/reddit/selectors/gold/awardIcon.ts"),
				P = r("./src/reddit/contexts/Post/index.tsx"),
				S = r("./src/reddit/contexts/User/index.tsx"),
				_ = r("./node_modules/lodash/debounce.js"),
				N = r.n(_),
				k = r("./src/lib/classNames/index.ts"),
				M = r("./src/lib/fastdom/index.ts"),
				B = r("./src/reddit/models/Gold/TopAwarded/index.ts"),
				L = r("./src/reddit/icons/fonts/Gift/index.tsx"),
				F = r("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				R = r.n(F);
			var H = a.a.memo(e => a.a.createElement("button", {
					className: Object(k.a)(e.className, R.a.addAwardPill),
					name: s.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, a.a.createElement(L.a, {
					className: R.a.giftIcon
				}))),
				U = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				D = r("./src/higherOrderComponents/makeAsync.tsx"),
				G = r("./src/lib/loadWithRetries/index.ts");
			var q = Object(D.a)({
					getComponent: () => Object(G.a)(() => r.e("AwardTooltip").then(r.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				z = r("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				Q = r.n(z);
			const W = 3500,
				V = 500;
			class J extends a.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = a.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: r,
							triggerOverlayAnimation: s
						} = this.props;
						e.id !== E.g && (this.setState({
							userGiven: !0,
							shouldAnimate: !t
						}), t || (s(r), setTimeout(() => {
							this.setState({
								shouldAnimate: !1
							})
						}, W)))
					}, this.handleOnClick = () => {
						const {
							onAddAward: e,
							award: t
						} = this.props;
						e(t.id === E.g ? void 0 : t.id)
					}, this.handleMouseEnter = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						this.hoverTimer = setTimeout(() => {
							e(t), this.setState({
								hoverStateTriggered: !0
							})
						}, V)
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
						count: r,
						giveAwardAnimationIconUrl: s,
						pillIconUrl: n,
						post: o,
						tooltipId: i
					} = this.props, {
						userGiven: d,
						shouldAnimate: c
					} = this.state, l = Object(U.a)(e.id, o.id);
					return a.a.createElement("span", {
						className: Q.a.awardPillContainer,
						id: i,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, a.a.createElement("button", {
						className: Object(k.a)(t, Q.a.awardPill, {
							[Q.a.userGiven]: d
						}),
						onClick: this.handleOnClick
					}, a.a.createElement("span", {
						className: Q.a.imageContainer
					}, a.a.createElement("img", {
						alt: e.name,
						className: Object(k.a)(Q.a.awardIcon, {
							[Q.a.hidden]: c
						}),
						id: l,
						ref: this.imageRef,
						src: n
					}), c && a.a.createElement("img", {
						alt: e.name,
						className: Q.a.animationIcon,
						src: s
					})), a.a.createElement("span", {
						className: Q.a.count
					}, r.toLocaleString())), a.a.createElement(q, {
						award: e,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideAward: this.handleHideAward,
						postOrComment: o,
						tooltipId: i
					}))
				}
			}
			var K = J,
				Y = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				$ = r("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				X = r.n($);
			var Z = a.a.memo(e => {
				const {
					className: t,
					direction: r,
					onClick: n
				} = e, o = "right" === r, i = s.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), d = s.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return a.a.createElement("div", {
					className: Object(k.a)(X.a.buttonContainer, {
						[X.a.right]: o
					}, t)
				}, a.a.createElement("button", {
					className: X.a.scrollButton,
					name: o ? d : i,
					onClick: n
				}, a.a.createElement(Y.a, {
					className: X.a.chevronIcon
				})))
			});
			const ee = (e, t) => {
				let r = `${Object(x.a)(e)?"Post":"Comment"}AwardBadges--${e}`;
				return t && (r = `${r}--${t}`), r
			};
			var te = r("./src/reddit/helpers/trackers/topAwarded.ts"),
				re = r("./src/reddit/hooks/useTracking.ts"),
				se = r("./src/reddit/actions/gold/topAwarded.ts"),
				ne = r("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				ae = r("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				oe = r.n(ae);
			const {
				fbt: ie
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
					const t = Object(o.d)(),
						r = Object(re.a)();
					return a.a.createElement("button", {
						className: Object(k.a)(oe.a.pill, e.className, {
							[oe.a.awardsPlaqueStyle]: !!e.awardsPlaqueStyle
						}),
						onClick: () => {
							const {
								postId: s
							} = e.post;
							r(Object(te.a)(s)), t(Object(se.b)(s))
						}
					}, a.a.createElement("span", {
						className: oe.a.iconContainer
					}, a.a.createElement(ne.a, {
						className: oe.a.awardIcon
					})), a.a.createElement("span", null, ie._("Top Awarded", null, {
						hk: "49Ol5i"
					})))
				},
				ce = r("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				le = r.n(ce);
			const ue = 11,
				me = 100;
			class pe extends a.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = a.a.createRef(), this.handleResize = N()(() => {
						this.handlePlaquePositionChange()
					}, 300), this.handlePlaquePositionChange = () => {
						const {
							awards: e,
							awardsCountInView: t,
							multiline: r
						} = this.props, s = t || ue;
						if (e.length < s - 4) return;
						if (r) return;
						const n = this.plaqueRef.current;
						if (!n) return;
						const a = n.scrollLeft > 0,
							o = n.scrollLeft < n.scrollWidth - n.clientWidth;
						this.setState({
							canScrollLeft: a,
							canScrollRight: o
						})
					}, this.handleScrollLeft = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							r = e.scrollLeft - (t - me);
						this.scrollPlaqueTo(r)
					}, this.handleScrollRight = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							r = e.scrollLeft + (t - me);
						this.scrollPlaqueTo(r)
					}, this.handleTriggerAnimation = e => {
						this.props.triggerOverlayAnimation(), M.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const r = document.getElementById(e);
							if (!r) return;
							const s = t.getBoundingClientRect(),
								n = r.getBoundingClientRect();
							if (n.left < s.left || n.right > s.right) {
								const e = n.left + (t.scrollLeft - s.left) - me;
								this.scrollPlaqueTo(e)
							}
						})
					};
					const t = e.awardsCountInView || ue,
						r = e.awards.length > t;
					this.state = {
						canScrollLeft: !1,
						canScrollRight: r && !e.multiline
					}
				}
				shouldComponentUpdate(e, t) {
					if (this.props.awards !== e.awards) {
						const t = this.props.awards.reduce((e, t) => (e[t.id] = (this.props.post.awardCountsById || {})[t.id], e), {});
						if (e.awards.reduce((r, s) => {
								const n = t[s.id],
									a = (e.post.awardCountsById || {})[s.id];
								return r || n !== a
							}, !1)) return !0
					}
					if (this.props.post.id !== e.post.id) return !0;
					for (const r in this.state)
						if (this.state[r] !== t[r]) return !0;
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
					} = this.props, r = t ? "auto" : "smooth", s = this.plaqueRef.current;
					if (!s) return;
					const n = s.clientWidth,
						a = s.scrollWidth - n,
						o = Math.min(Math.max(0, e), a);
					this.setState({
						canScrollLeft: o > 0,
						canScrollRight: o < a
					}), s.scrollTo({
						left: o,
						top: 0,
						behavior: r
					})
				}
				render() {
					const {
						awards: e,
						className: t,
						hideAddAwardButton: r,
						hideTopAwardedBadge: s,
						icons: n,
						isInEconLeaderboardsExperiment: o,
						multiline: i,
						post: d,
						prefersReducedMotion: c,
						onAddAward: l,
						onHideAward: u,
						onHideTooltip: m,
						onOpenReportFlow: p,
						onShowTooltip: h,
						tooltipType: b
					} = this.props, {
						canScrollLeft: f,
						canScrollRight: w
					} = this.state, g = e.length > 0, A = ee(d.id, b);
					return a.a.createElement("div", {
						className: Object(k.a)(le.a.awardBadges, t, {
							[le.a.noAwards]: !g,
							[le.a.multiline]: i
						}),
						ref: this.plaqueRef
					}, f && a.a.createElement(Z, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (d.topAwardedType === B.a.Active || d.topAwardedType === B.a.Inactive) && !s && o && a.a.createElement(de, {
						awardsPlaqueStyle: !0,
						post: d
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = d, r = t[e.id], s = n.icon32[e.id], o = n.icon128[e.id];
						return a.a.createElement(K, {
							award: e,
							className: le.a.clickablePlaqueItem,
							count: r,
							giveAwardAnimationIconUrl: o,
							key: e.id,
							onAddAward: l,
							onHideAward: u,
							onOpenReportFlow: p,
							onHideTooltip: m,
							onShowTooltip: h,
							pillIconUrl: s,
							post: d,
							prefersReducedMotion: c,
							tooltipId: `${A}-${e.id}`,
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !r && a.a.createElement(H, {
						className: le.a.clickablePlaqueItem,
						onAddAward: l
					}), !i && a.a.createElement("div", {
						className: le.a.spacer
					}), w && a.a.createElement(Z, {
						direction: "right",
						onClick: this.handleScrollRight
					}))
				}
			}
			var he = pe,
				be = r("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				fe = r.n(be);
			const {
				fbt: we
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class ge extends a.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = a.a.createRef(), this.handleAwardAddedEvent = () => {
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
					return a.a.createElement(a.a.Fragment, null, t > 1 && " • ", we._("{award-name} Award", [we._param("award-name", e.name)], {
						hk: "2QpjYF"
					}))
				}
				render() {
					const {
						award: e,
						className: t,
						count: r,
						iconClassName: s,
						iconUrl: n,
						onHideAward: o,
						onHideTooltip: i,
						onOpenReportFlow: d,
						postOrComment: c,
						tooltipId: l,
						tooltipLocation: u
					} = this.props;
					if (r <= 0) return null;
					const m = e.awardType === E.f.Moderator,
						p = Object(U.a)(e.id, c.id),
						h = "container" === u;
					return a.a.createElement("span", {
						className: Object(k.a)(fe.a.awardItem, t),
						id: h ? l : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i
					}, a.a.createElement("span", {
						id: h ? "" : l
					}, a.a.createElement("img", {
						alt: e.name,
						className: Object(k.a)(fe.a.awardIcon, {
							[fe.a.animate]: this.state.animate
						}, s),
						id: p,
						ref: this.imageRef,
						src: n
					})), a.a.createElement("span", null, r > 1 && r, m && this.renderModAwardName()), a.a.createElement(q, {
						award: e,
						onHideAward: () => o(e),
						postOrComment: c,
						tooltipId: l,
						onOpenReportFlow: () => d(e)
					}))
				}
			}
			var Ae = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ve = r("./src/reddit/icons/fonts/index.tsx"),
				xe = r("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				Oe = r.n(xe);
			var je = e => {
				const {
					className: t,
					onClick: r
				} = e;
				return a.a.createElement("button", {
					className: Object(k.a)(t, Oe.a.badgeButton, Oe.a.visibilityEffect),
					onClick: r
				}, a.a.createElement(ve.a, {
					name: "award",
					className: Oe.a.icon
				}))
			};
			var ye, Ee = e => {
					const {
						awards: t,
						className: r,
						hideBadgeButton: n,
						hideTopAwardedBadge: o,
						icons: i,
						isInEconLeaderboardsExperiment: d,
						onAddAward: c,
						onHideAward: l,
						onOpenReportFlow: u,
						onHideTooltip: m,
						onShowAllAwards: p,
						onShowTooltip: h,
						showAllAwards: b,
						tooltipType: f,
						thing: w
					} = e, g = ee(w.id, f), A = `${g}-view-all`;
					let v = [];
					v = b ? t : t.length > 5 ? t.slice(0, 4) : t;
					const O = !n && w.isGildable && t.length > 0,
						j = t.length > v.length ? t.slice(v.length).reduce((e, t) => e + (w.awardCountsById && w.awardCountsById[t.id] || 0), 0) : 0,
						y = s.fbt._("& {hidden award count} More", [s.fbt._param("hidden award count", j.toLocaleString())], {
							hk: "1OnmAi"
						});
					return a.a.createElement("div", {
						className: Object(k.a)(Oe.a.awardBadges, r)
					}, Object(x.a)(w.id) && (w.topAwardedType === B.a.Active || w.topAwardedType === B.a.Inactive) && !o && d && a.a.createElement(de, {
						post: w
					}), v.map(e => {
						const t = w.awardCountsById ? w.awardCountsById[e.id] : 0,
							r = i.icon32[e.id];
						return a.a.createElement(ge, {
							award: e,
							count: t,
							iconUrl: r,
							key: e.id,
							onHideAward: l,
							onOpenReportFlow: u,
							onHideTooltip: m,
							onShowTooltip: h,
							postOrComment: w,
							tooltipId: `${g}-${e.id}`,
							tooltipLocation: "icon"
						})
					}), j > 0 && a.a.createElement(a.a.Fragment, null, a.a.createElement("button", {
						"data-click-id": "awards",
						id: A,
						className: Oe.a.showAllButton,
						onClick: p,
						onMouseEnter: () => h(A),
						onMouseLeave: m
					}, y), a.a.createElement(Ae.c, {
						tooltipId: A,
						text: "View all Awards"
					})), O && a.a.createElement(je, {
						onClick: c
					}))
				},
				Te = r("./src/reddit/actions/gold/reportAward.ts"),
				Ce = r("./src/reddit/controls/Button/index.tsx"),
				Ie = r("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				Pe = r.n(Ie);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(ye || (ye = {}));
			var Se = e => {
				const t = Object(re.a)(),
					[r, i] = Object(n.useState)(e.award.awardType === E.f.Global ? ye.FLAG_USAGE : ye.BEGIN),
					d = Object(o.d)(),
					c = () => {
						r === ye.BEGIN ? t(Object(O.clickCancelAwardReportFlow)(e.award, e.thing.id)) : r === ye.REPORT_COMMUNITY_AWARD ? t(Object(O.clickCancelReportAward)(e.award, e.thing.id)) : r === ye.FLAG_USAGE && t(Object(O.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(O.clickConfirmReportAward)(e.award, e.thing.id)), d(Object(Te.a)(e.award)), e.onClose()
					},
					u = () => {
						t(Object(O.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), d(Object(p.f)(Object(p.e)(s.fbt._("{award name} Award successfully flagged for review.", [s.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), h.b.SuccessAward))), e.onClose()
					},
					m = a.a.createElement(a.a.Fragment, null, a.a.createElement(Ce.l, {
						onClick: () => {
							t(Object(O.clickReportAward)(e.award, e.thing.id)), i(ye.REPORT_COMMUNITY_AWARD)
						},
						className: Pe.a.reportStepButton
					}, s.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), a.a.createElement(Ce.l, {
						onClick: () => {
							t(Object(O.clickFlagAwardUsage)(e.award, e.thing.id)), i(ye.FLAG_USAGE)
						},
						className: Pe.a.reportStepButton
					}, s.fbt._("This award is being used inappropriately.", null, {
						hk: "Y8giW"
					})));
				switch (r) {
					case ye.BEGIN:
						return a.a.createElement(j.a, {
							withOverlay: !0,
							hideCancelButton: !0,
							onConfirm: c,
							onCancel: c,
							onClose: c,
							headerText: s.fbt._("What's Wrong?", null, {
								hk: "JqSAe"
							}),
							actionText: s.fbt._("Cancel", null, {
								hk: "370pdF"
							}),
							modalText: m
						});
					case ye.REPORT_COMMUNITY_AWARD:
						return a.a.createElement(j.a, {
							withOverlay: !0,
							onConfirm: l,
							onCancel: c,
							onClose: c,
							headerText: s.fbt._("Report Community Award", null, {
								hk: "3T6dhH"
							}),
							actionText: s.fbt._("Report Award", null, {
								hk: "dHwed"
							}),
							modalText: s.fbt._("Do you want to report the {award name} Award?", [s.fbt._param("award name", e.award.name)], {
								hk: "4by1t"
							})
						});
					case ye.FLAG_USAGE:
						return a.a.createElement(j.a, {
							withOverlay: !0,
							onConfirm: u,
							onCancel: c,
							onClose: c,
							headerText: s.fbt._("Flag Award Usage", null, {
								hk: "395heU"
							}),
							actionText: s.fbt._("Flag Award Usage", null, {
								hk: "24B1WV"
							}),
							modalText: s.fbt._("Is the {award name} Award inappropriate on this content? Reddit uses this information to improve the awarding experience and remove awards that are being misused.", [s.fbt._param("award name", e.award.name)], {
								hk: "3P3dMP"
							})
						})
				}
			};
			const _e = [32, 128],
				Ne = Object(i.c)({
					allAwards: e => e.awards.models,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(T.a)(e),
					isInEconLeaderboardsExperiment: C.b
				}),
				ke = e => Object(x.a)(e.id) ? e.postId : e.id,
				Me = Object(o.b)(Ne, (e, {
					thing: t
				}) => ({
					hideAward: r => e(f({
						awardId: r,
						thingId: ke(t)
					})),
					onAddAward: (r, s) => {
						const n = ke(t);
						return e(Object(w.d)({
							awardId: s,
							correlationId: r,
							thingId: n
						}))
					},
					onHideTooltip: () => e(Object(A.i)()),
					onShowTooltip: t => e(Object(A.f)({
						tooltipId: t
					})),
					onToggleHideAwardModal: () => e(Object(g.i)("AwardBadges--Modal--HideAwardConfirmation")),
					triggerOverlayAnimation: () => e(Object(d.b)(ke(t)))
				}));
			class Be extends a.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(v.d)(v.a.GildingFlow, !0),
							{
								onAddAward: s,
								sendEvent: n,
								thing: a
							} = this.props;
						s(t, e);
						const {
							clickAddAward: o
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n(o(a.id))
					}, this.handleShowAllAwards = () => {
						this.setState({
							showAllAwards: !0
						})
					}, this.handleHideAward = async e => {
						const {
							sendEvent: t,
							onToggleHideAwardModal: s,
							thing: n
						} = this.props;
						this.setState({
							selectedAward: e
						});
						const {
							clickHideAward: a
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(a(e, n.id)), s()
					}, this.handleHideAwardConfirmed = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: s
						} = this.state, {
							clickConfirmHideAward: n
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						s && (e(n(s, t.id)), this.props.hideAward(s.id))
					}, this.handleHideAwardCanceled = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: s
						} = this.state, {
							clickCancelHideAward: n
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						s && e(n(s, t.id))
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
						this.props.sendEvent(Object(O.clickAwardReportFlow)(e, this.props.thing.id)), this.setState({
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
						awardsPlaqueStyle: r,
						className: n,
						currentUser: o,
						hideCta: i,
						hideTopAwardedBadge: d,
						isConfirmModalOpen: c,
						isInEconLeaderboardsExperiment: l,
						isLoggedIn: u,
						isPostDetail: m,
						onHideTooltip: p,
						onShowTooltip: h,
						onToggleHideAwardModal: b,
						prefs: f,
						thing: w,
						triggerOverlayAnimation: g,
						tooltipType: A
					} = this.props, {
						showAllAwards: v
					} = this.state, O = f.reduceAnimationsFromAwards || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, y = Object.keys(w.awardCountsById || {}), T = Object(E.r)(y.map(t => e[t]).filter(Boolean)), C = {};
					for (const s of _e) {
						const e = {};
						C[`icon${s}`] = e;
						for (const t of T) e[t.id] = Object(I.c)({
							award: t,
							postOrComment: w,
							size: s,
							prefersReducedMotion: O
						})
					}
					const P = !!o && o.id === w.authorId;
					return a.a.createElement(a.a.Fragment, null, r ? a.a.createElement(he, {
						awards: T,
						awardsCountInView: t,
						className: n,
						hideAddAwardButton: i || !w.isGildable || P,
						hideTopAwardedBadge: d,
						icons: C,
						isInEconLeaderboardsExperiment: l,
						multiline: !!m,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: w,
						prefersReducedMotion: O,
						tooltipType: A,
						triggerOverlayAnimation: g
					}) : a.a.createElement(Ee, {
						awards: T,
						className: n,
						hideBadgeButton: i || !u,
						hideTopAwardedBadge: d,
						icons: C,
						isInEconLeaderboardsExperiment: l,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: p,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: h,
						showAllAwards: v || !!m,
						thing: w,
						tooltipType: A
					}), c && o && this.state.selectedAward && a.a.createElement(j.a, {
						actionText: s.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: P ? Object(x.a)(w.id) ? s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(x.a)(w.id) ? s.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : s.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "qlfga"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: b,
						withOverlay: !0
					}), this.state.reportingAward && a.a.createElement(Se, {
						award: this.state.reportingAward,
						thing: w,
						onClose: () => this.setState({
							reportingAward: null
						})
					}))
				}
			}
			t.a = Object(S.c)(Object(P.d)(Me(Object(y.c)(Be))))
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return T
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return k
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/config.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = r("./src/reddit/featureFlags/index.ts"),
				b = r("./src/reddit/helpers/economics/sortBadges.ts"),
				f = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				w = r("./src/reddit/models/Badge/index.ts");
			var g = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				A = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				v = r.n(A);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = "add-custom-badge-tooltip",
				j = 100,
				y = 2 * j,
				E = 24;
			class T extends n.a.Component {
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
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return n.a.createElement("img", {
						className: Object(d.a)(v.a.image, this.props.className),
						src: `${i.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${O}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || E;
					return n.a.createElement(s.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: v.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: v.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(f.a, {
						className: v.a.addCustom
					})), n.a.createElement(g, {
						className: v.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(e).map(e => {
						const t = Object(w.d)(r, r, e),
							a = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return n.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, n.a.createElement("div", {
							className: Object(d.a)(v.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(a),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: v.a.image,
							id: a,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? n.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: v.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: a,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: a,
							text: e.title
						})))
					}))
				}
			}
			const C = [],
				I = Object(o.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var s;
						return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t]) || C
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				P = Object(o.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const s = e.user.account;
						return s && (null === (r = e.users.appliedBadges[s.id]) || void 0 === r ? void 0 : r[t]) || C
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				S = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function _(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, a = t.map(e => r[e]).filter(Boolean);
				return n.a.createElement(T, x({
					badges: a
				}, s))
			}
			const N = Object(a.b)(I, S)(_),
				k = Object(a.b)(P, S)(_)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				u = r("./src/reddit/featureFlags/index.ts"),
				m = r("./src/reddit/hooks/useUserContext.ts"),
				p = r("./src/reddit/selectors/economics.ts"),
				h = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				b = r.n(h);

			function f(e) {
				var t, r;
				const {
					currentUser: s
				} = Object(m.a)(), a = null !== (t = e.badges) && void 0 !== t ? t : Object(p.i)(e.badgeIds, null !== (r = e.allBadges) && void 0 !== r ? r : {});
				return a.length ? n.a.createElement(l.b, {
					useHovercard: !0,
					badges: a,
					badgeSize: e.badgeSize,
					className: Object(i.a)(e.className, b.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && a.length < 2 && (null == s ? void 0 : s.id) === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			const w = [];
			t.b = Object(a.b)(() => Object(o.c)({
				badgeIds: (e, {
					subredditId: t,
					userId: r
				}) => {
					var s;
					return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t]) || w
				},
				allBadges: e => e.badges.models,
				customBadgesEnabled: u.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => u.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(d.j)())
			}))(f)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/selectors/economics.ts");

			function d(e) {
				const {
					badges: t
				} = e, r = t[t.length - 1];
				return r && !e.ignore ? n.a.cloneElement(e.children, {
					style: r.extra && r.extra.style && r.extra.style.color ? {
						...e.children.props.style || {},
						color: r.extra.style.color,
						fontWeight: 700
					} : e.children.props.style
				}) : e.children
			}
			t.b = Object(a.b)(() => Object(o.c)({
				badges: (e, {
					subredditId: t,
					userId: r
				}) => Object(i.q)(e, t, r)
			}))(d)
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/makeAsync.tsx");
			const n = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("GovernanceUserPublicPointsDisplay").then(r.bind(null, "./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx")).then(e => e.default)
			});
			t.a = n
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/higherOrderComponents/makeAsync.tsx"),
				o = r("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				d = e => e.alwaysShowChildren ? n.a.createElement(n.a.Fragment, null, e.children) : null;
			t.b = Object(a.a)({
				ErrorComponent: d,
				getComponent: () => Object(o.a)(() => r.e("AuthorHovercard").then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: d
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "i", (function() {
				return I
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./node_modules/lodash/isNil.js"),
				d = r.n(i),
				c = r("./src/reddit/constants/jsapiEvents.ts");
			var l = r("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: r,
								...s
							}
						} = this;
						l.a.publish(c.a, s, e)
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
			var p = Object(a.b)(u, {})(m),
				h = r("./src/reddit/selectors/comments.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				f = r("./src/reddit/selectors/subreddit.ts");
			const w = (e, t) => {
				const r = Object(b.a)(e, t),
					s = Object(f.H)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var g = Object(a.b)(() => Object(o.a)(w, h.j, (e, t) => ({
				...e,
				depth: t
			})))(e => n.a.createElement(p, {
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
			const A = (e, t) => {
				const r = Object(b.a)(e, t),
					s = Object(f.H)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(a.b)(() => Object(o.a)(A, e => e))(e => n.a.createElement(p, {
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
			var x = Object(a.b)(() => Object(o.c)({
					subreddit: f.S
				}))(e => n.a.createElement(p, {
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
				O = r("./src/reddit/hooks/usePostContext.ts");
			var j = e => {
				const {
					post: t,
					subredditOrProfile: r
				} = Object(O.a)(), a = Object(s.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					created: t.created,
					numComments: t.numComments,
					distinguishType: t.distinguishType,
					domain: t.source && t.source.displayText,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					sourceUrl: t.source && t.source.url,
					subreddit: r ? {
						id: r.id,
						name: r.name,
						type: r.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, r]);
				return n.a.createElement(p, {
					className: e.className,
					type: "post",
					data: a
				})
			};
			var y = e => {
				const {
					post: t,
					subredditOrProfile: r,
					isModerator: a
				} = Object(O.a)(), o = Object(s.useMemo)(() => ({
					author: t.author,
					isModerator: a,
					post: {
						id: t.id
					},
					subreddit: r ? {
						id: r.id,
						name: r.name,
						type: r.type
					} : {}
				}), [t, r, a]);
				return n.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: o
				})
			};
			var E = e => {
				const {
					post: t,
					subredditOrProfile: r
				} = Object(O.a)(), a = Object(s.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					distinguishType: t.distinguishType,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					numComments: t.numComments,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					subreddit: r ? {
						id: r.id,
						name: r.name,
						type: r.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, r]);
				return n.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: a
				})
			};
			var T = Object(a.b)(() => Object(o.c)({
				subreddit: f.S
			}))(e => n.a.createElement(p, {
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
			var C = Object(a.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(f.K)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(p, {
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
			var I = Object(a.b)(() => Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.S)(e, {
					subredditId: t
				}) : null
			}))(e => n.a.createElement(p, {
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
		"./src/reddit/components/PostTopMeta/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_2kj4VmBwjxriyYFAErhLcT",
				iconTooltipHoverBox: "FCXb7huCxyBIXH7T23q_k",
				badge: "_2v3rPYFjifVGM7CfOh1dOl",
				container: "_3AStxql1mQsrZuUIFP9xSg",
				adminIcon: "s46mo3ittWDxpPuCSXJ_T",
				contractorIcon: "MMQAY3zdk1u4R9hIKTklf",
				premiumIcon: "_6W0v52Yp6BzEfoWlrczS8",
				crosspostIcon: "_3hh-iGjzOv78L_7t_PUHev",
				userIcon: "_1ra0Iw9wwPoS0QhWWssr-u",
				link: "eQgJJIfdY4JNXam_N622j",
				publicWallet: "SxdIdV2SgMWcIFG6Qsk0Q",
				authorLink: "_2tbHP6ZydRpjI44J3syuqC",
				isActionFont: "_1qzCGTSJOhg8noWqRayhmN",
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
		"./src/reddit/components/PostTopMeta/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return ae
			})), r.d(t, "e", (function() {
				return oe
			})), r.d(t, "a", (function() {
				return ie
			})), r.d(t, "b", (function() {
				return le
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/lib/humanizeDateTime/index.ts"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/lib/timeAgo/index.ts"),
				m = r("./src/reddit/constants/experiments.ts"),
				p = r("./src/reddit/helpers/trackers/powerups.ts"),
				h = r("./src/reddit/actions/gold/powerups.ts"),
				b = r("./src/reddit/actions/profile/index.ts"),
				f = r("./src/reddit/helpers/isCrosspost.ts"),
				w = r("./src/reddit/hooks/useInfoTextTooltip.ts"),
				g = r("./src/reddit/hooks/useTracking.ts"),
				A = r("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				v = r("./src/reddit/icons/svgs/Powerup/index.tsx"),
				x = r("./src/reddit/components/AuthorLink/index.tsx"),
				O = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				j = r("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				y = r("./src/reddit/components/Flair/index.tsx"),
				E = r("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				T = r("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				C = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				I = r("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				P = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				S = r("./src/reddit/components/QuarantinedLabel/index.tsx"),
				_ = r("./src/reddit/components/SponsoredLabel/index.tsx"),
				N = r("./src/reddit/components/SubredditNameLink/index.tsx"),
				k = r("./src/reddit/constants/posts.ts"),
				M = r("./src/reddit/contexts/InsideOverlay.tsx"),
				B = r("./src/reddit/controls/MetaSeparator/index.tsx"),
				L = r("./src/reddit/components/Portal/index.tsx"),
				F = r("./src/reddit/constants/elementIds.ts"),
				R = n.a.memo((function({
					children: e
				}) {
					const [t, r] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => (r(!0), () => r(!1)), []), t ? n.a.createElement(L.a, {
						container: document.getElementById(F.d)
					}, n.a.Children.only(e)) : null
				})),
				H = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				U = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				D = r("./src/reddit/hooks/useClickSourceData.ts"),
				G = r("./src/reddit/icons/fonts/Admin/index.tsx"),
				q = (r("./src/reddit/icons/fonts/Premium/index.tsx"), r("./src/reddit/components/UserIcon/index.tsx")),
				z = r("./src/reddit/constants/postLayout.ts"),
				Q = r("./src/reddit/contexts/PageLayer/index.tsx"),
				W = r("./src/reddit/models/Flair/index.ts"),
				V = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				J = r("./src/reddit/models/Post/index.ts"),
				K = r("./src/reddit/models/Subreddit/index.ts"),
				Y = r("./src/reddit/selectors/authorFlair.ts"),
				$ = r("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				X = r("./src/reddit/selectors/gold/powerups/index.ts"),
				Z = r("./src/reddit/selectors/platform.ts"),
				ee = r("./src/reddit/selectors/userFlair.ts"),
				te = r("./src/reddit/components/PostTopMeta/index.m.less"),
				re = r.n(te);
			const {
				fbt: se
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ne = {
				placement: "top"
			};
			var ae;
			! function(e) {
				e.StickyPost = "sticky", e.Lightbox = "lightbox", e.TopAwardedModal = "topAwarded"
			}(ae || (ae = {}));
			const oe = e => Object(U.a)(Object(H.a)(e), V.a.metaText, V.b.metaText),
				ie = l.a.wrapped(B.b, "MetaSeparator", re.a),
				de = l.a.span("text", re.a),
				ce = Object(Q.t)(),
				le = e => {
					const t = Object(w.a)(ne),
						r = se._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						}),
						s = se._("Reddit contractor", null, {
							hk: "3APwEh"
						}),
						a = !e.isDeleted && e.post.distinguishType === i.E.ADMIN;
					return n.a.createElement(x.a, {
						author: e.post.author,
						className: Object(o.a)(re.a.authorLink, {
							[re.a.isActionFont]: e.showActionFont
						}),
						"data-click-id": "user",
						forceOpenInNewTab: e.forceOpenInNewTab,
						isAdmin: a,
						isAdminEmeritus: a,
						isAuthorDeleted: e.isDeleted,
						isUnstyled: !0,
						style: e.style
					}, `u/${e.post.author}`, a && n.a.createElement(n.a.Fragment, null, n.a.createElement(G.a, {
						className: re.a.adminIcon,
						isFilled: !0,
						desc: r
					}), n.a.createElement("span", {
						className: re.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), n.a.createElement(R, null, n.a.createElement(I.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), e.renderContractorBadge && n.a.createElement(n.a.Fragment, null, n.a.createElement(G.a, {
						className: re.a.contractorIcon,
						isFilled: !0,
						desc: s
					}), n.a.createElement("span", {
						className: re.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), n.a.createElement(R, null, n.a.createElement(I.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), !1)
				},
				ue = n.a.memo((function(e) {
					const {
						className: t,
						forceOpenInNewTab: r,
						isOverlay: d,
						pageLayer: l,
						post: x,
						showSub: M = !1,
						showTimestamp: B = !0,
						subredditOrProfile: L,
						tooltipType: F
					} = e, H = Object(a.d)(), U = Object(g.a)(), G = Object(a.e)($.a), V = Object(a.e)(Z.d), te = Object(a.e)(Z.g) || ["popular", "all"].includes(V || ""), ae = !(!x.isSponsored || !G || Object(m.Zd)(G));
					Object(s.useEffect)(() => {
						ae && H(Object(b.d)(x.author))
					}, []);
					const ce = x.belongsTo.id,
						ue = Object(s.useCallback)(e => Object(Y.a)(e, {
							post: x
						}), [x]),
						me = Object(a.e)(ue),
						pe = Object(D.a)(),
						he = Object(s.useCallback)(e => Object(ee.a)(e, {
							subredditId: ce
						}), [ce]),
						be = Object(a.e)(he),
						fe = Object(s.useCallback)(e => Object(X.a)(e, {
							subredditId: ce,
							userId: x.authorId
						}), [ce, x.authorId]),
						we = Object(a.e)(fe),
						ge = Object(s.useCallback)(e => Object(ee.d)(e, {
							subredditId: ce
						}), [ce]),
						Ae = Object(a.e)(ge),
						ve = Object(w.a)(ne),
						xe = Object(w.a)(ne),
						Oe = l && l.meta && l.meta.name === i.Jb.COMMENTS,
						je = Object(f.a)(x),
						ye = Ae === W.b.Left,
						Ee = x.authorIsContractor && !!L && L.type === K.f.EmployeesOnly,
						Te = !!L && we,
						Ce = !d && !Oe,
						Ie = () => n.a.createElement(ie, {
							className: e.metaSeparatorClassName
						}, "•"),
						Pe = Object(a.e)(e => Object(Q.O)(e, {
							pageLayer: l
						})),
						Se = z.e[Pe] === z.d.Card,
						_e = te && Se || !!Oe,
						Ne = ae && (te || !!Oe),
						ke = n.a.createElement(n.a.Fragment, null, me && ye && n.a.createElement("div", {
							className: re.a.flairContainer
						}, n.a.createElement(y.b, {
							disabled: !be,
							flair: me,
							forceSmallEmojis: !0,
							usesCommunityStyles: Ce
						})), Object(J.n)(x.author) ? n.a.createElement(le, {
							post: x,
							isDeleted: !0,
							renderContractorBadge: Ee,
							showActionFont: Ne,
							style: ae ? {} : {
								color: oe(e)
							}
						}) : n.a.createElement(n.a.Fragment, null, n.a.createElement(O.b, {
							className: re.a.badge,
							subredditId: ce,
							uniqueIdentifier: `${x.id}-${d}`,
							userId: x.authorId
						}), n.a.createElement(T.b, {
							postOrComment: x,
							tooltipType: F
						}, n.a.createElement(j.b, {
							ignore: !!x.distinguishType && x.distinguishType !== i.E.NONE,
							subredditId: ce,
							userId: x.authorId
						}, n.a.createElement(le, {
							post: x,
							forceOpenInNewTab: r,
							renderContractorBadge: Ee,
							style: ae ? {} : {
								color: oe(e)
							},
							showActionFont: Ne
						}))), Te && n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
							className: re.a.powerupBadge,
							onMouseEnter: xe.show,
							onMouseLeave: xe.hide,
							onClick: () => {
								U(Object(p.q)(F ? "post" : "postlist")), H(Object(h.f)("post_top_supporter_badge"))
							},
							ref: xe.target.ref
						}, n.a.createElement(v.a, {
							className: re.a.powerupIcon
						})), n.a.createElement(R, null, n.a.createElement(I.a, {
							arrowProps: xe.arrowProps,
							popperProps: xe.popperProps,
							visible: xe.visible
						}, se._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						}))))), me && !ye && n.a.createElement("div", {
							className: re.a.flairContainer
						}, n.a.createElement(y.b, {
							disabled: !be,
							flair: me,
							forceSmallEmojis: !0,
							usesCommunityStyles: Ce
						})), x.belongsTo.type === k.a.SUBREDDIT && !Object(J.n)(x.author) && n.a.createElement(E.a, {
							className: re.a.publicWallet,
							contentId: x.id,
							metaSeparator: n.a.createElement(Ie, null),
							subredditId: ce,
							userId: x.authorId,
							username: x.author
						})),
						Me = se._("{=Posted by}{author}", [se._param("=Posted by", n.a.createElement(de, {
							style: {
								color: oe(e)
							}
						}, se._("Posted by", null, {
							hk: "274iff"
						}))), se._param("author", ke)], {
							hk: "1abNaj"
						}),
						Be = n.a.createElement(n.a.Fragment, null, n.a.createElement(A.a, {
							className: re.a.crosspostIcon
						}), se._("{=Crossposted by}{author}", [se._param("=Crossposted by", n.a.createElement(de, {
							style: {
								color: oe(e)
							}
						}, se._("Crossposted by", null, {
							hk: "1YnHU8"
						}))), se._param("author", ke)], {
							hk: "3BfJwk"
						})),
						Le = () => je || ae ? je ? Be : ke : Me;
					return n.a.createElement("div", {
						className: Object(o.a)(re.a.container, t)
					}, M && L && n.a.createElement(C.a, {
						postId: x.id,
						subredditName: L.name,
						tooltipType: F
					}, n.a.createElement(N.a, {
						"data-click-id": "subreddit",
						to: {
							pathname: L.url,
							state: pe
						}
					}, L.displayText)), L && L.isQuarantined && n.a.createElement(S.a, null), M && !je && n.a.createElement(Ie, null), ae ? n.a.createElement(n.a.Fragment, null, (null == L ? void 0 : L.icon) && _e && n.a.createElement(q.a, {
						iconUrl: L.icon.url,
						isNSFW: L.isNSFW,
						userName: L.name,
						className: re.a.userIcon,
						omitResponsivePresenceWrapper: !0
					}), Le(), x.isSponsored && n.a.createElement(n.a.Fragment, null, n.a.createElement(Ie, null), n.a.createElement(_.a, {
						adHeaderVariant: G,
						greyTextColor: oe(e)
					}))) : n.a.createElement(n.a.Fragment, null, x.isSponsored && n.a.createElement(n.a.Fragment, null, n.a.createElement(_.a, null), n.a.createElement(Ie, null)), Le()), n.a.createElement(P.e, null), B && !ae && n.a.createElement(n.a.Fragment, null, n.a.createElement("a", {
						className: re.a.externalLink,
						"data-click-id": "timestamp",
						href: x.permalink,
						onMouseEnter: ve.show,
						onMouseLeave: ve.hide,
						ref: ve.target.ref,
						style: {
							color: oe(e)
						},
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, Object(u.d)(x.created / 1e3)), n.a.createElement(R, null, n.a.createElement(I.a, {
						arrowProps: ve.arrowProps,
						popperProps: ve.popperProps,
						visible: ve.visible
					}, Object(c.a)(x.created)))))
				}));
			t.d = ce(Object(M.b)(Object(d.a)(ue)))
		},
		"./src/reddit/components/QuarantinedLabel/index.m.less": function(e, t, r) {
			e.exports = {
				quarantineIcon: "_3fdQM74ud_8KssWgeznOrR",
				Container: "_3Ph6ensT9WFRjOg8dQQKJK",
				container: "_3Ph6ensT9WFRjOg8dQQKJK"
			}
		},
		"./src/reddit/components/QuarantinedLabel/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/higherOrderComponents/asTooltip.tsx"),
				i = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = r("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = r.n(u);
			const p = ["center", "top"],
				h = ["center", "bottom"],
				b = i.a.div("Container", m.a),
				f = Object(o.a)(d.b),
				w = Object(c.t)({
					isProfileListingPage: c.F
				});
			class g extends a.a.Component {
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
					return a.a.createElement(b, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, a.a.createElement(l.a, {
						className: m.a.quarantineIcon
					}), s.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), a.a.createElement(f, {
						text: s.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: p,
						tooltipPosition: h
					}))
				}
			}
			t.a = w(g)
		},
		"./src/reddit/components/SponsoredLabel/index.m.less": function(e, t, r) {
			e.exports = {
				Wrapper: "_2oEYZXchPfHwcf9mTMGMg8",
				wrapper: "_2oEYZXchPfHwcf9mTMGMg8",
				isPromotedBlue: "_3NAtxpywJRrKZN5zIU9vwP",
				isPromotedGrey: "V0WjfoF5BV7_qbExmbmeR"
			}
		},
		"./src/reddit/components/SponsoredLabel/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/reddit/components/SponsoredLabel/index.m.less"),
				i = r.n(o),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/constants/experiments.ts");
			const u = c.a.span("Wrapper", i.a);
			t.a = ({
				className: e,
				adHeaderVariant: t,
				greyTextColor: r
			}) => {
				const n = t === l.p.PromotedGrey || t === l.p.NoLockIcon;
				return a.a.createElement(u, {
					className: Object(d.a)(e, {
						[i.a.isPromotedBlue]: t === l.p.PromotedBlue,
						[i.a.isPromotedGrey]: n
					})
				}, a.a.createElement("span", {
					style: n ? {
						color: r
					} : {}
				}, s.fbt._("promoted", null, {
					hk: "1R81m"
				})))
			}
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, r) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				n = r("./src/reddit/components/SubredditNameLink/index.m.less"),
				a = r.n(n);
			const o = r("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", a.a);
			t.a = o
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, r) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/MetaSeparator/index.m.less"),
				i = r.n(o);
			const d = e => n.a.createElement("span", {
				className: Object(a.a)(i.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => n.a.createElement(d, {
				className: Object(a.a)(i.a.metaSeparator, e),
				isSmall: t
			})
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return x
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "k", (function() {
				return T
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "f", (function() {
				return P
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "h", (function() {
				return N
			})), r.d(t, "i", (function() {
				return k
			})), r.d(t, "e", (function() {
				return M
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/lib/uploadToS3/index.ts"),
				d = r("./src/redditGQL/operations/AwardSheetInfo.json"),
				c = r("./src/redditGQL/operations/AwardSheetInfoForProfile.json"),
				l = r("./src/redditGQL/operations/CreateCommunityAward.json"),
				u = r("./src/redditGQL/operations/CreateGlobalAward.json"),
				m = r("./src/redditGQL/operations/CreateModAward.json"),
				p = r("./src/redditGQL/operations/DisableAwardInCommunity.json"),
				h = r("./src/redditGQL/operations/EnableAwardInCommunity.json"),
				b = r("./src/redditGQL/operations/GlobalAwards.json"),
				f = r("./src/redditGQL/operations/ManageableAwards.json"),
				w = r("./src/redditGQL/operations/ManageableAwardsForProfile.json"),
				g = r("./src/redditGQL/operations/RemoveCommunityAward.json"),
				A = r("./src/reddit/constants/headers.ts"),
				v = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const x = (e, t, r, a) => {
					const i = {
						subreddit: t,
						filepath: r,
						mimetype: a
					};
					return Object(n.a)(Object(o.a)(e, [A.a]), {
						method: s.hb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: i
					})
				},
				O = async (e, t) => Object(i.a)(t, e), j = (e, t, r, s, n, o, i, d, c) => Object(a.a)(e, {
					...l,
					variables: {
						coinPrice: i,
						iconHeight: o,
						iconWidth: n,
						iconUrl: s,
						name: r,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), y = (e, t, r, s, n, o, i, d, c) => Object(a.a)(e, {
					...m,
					variables: {
						iconHeight: o,
						iconWidth: n,
						iconUrl: s,
						monthsOfPremium: i,
						name: r,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), E = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: r,
					context: s,
					daysOfDripExtension: n,
					daysOfPremium: o,
					description: i,
					endsAt: d,
					giverCoinReward: c,
					iconFormat: l,
					iconHeight: m,
					iconUrl: p,
					iconWidth: h,
					isNew: b,
					name: f,
					pennyPrice: w,
					pennyDonate: g,
					startsAt: A,
					subredditCoinReward: v
				}) => Object(a.a)(s, {
					...u,
					variables: {
						awardSubType: e,
						iconFormat: l,
						iconHeight: m,
						iconWidth: h,
						iconUrl: p,
						isNew: b,
						daysOfPremium: o,
						daysOfDripExtension: n,
						description: i,
						coinPrice: t,
						coinReward: r,
						name: f,
						pennyPrice: w,
						pennyDonate: g,
						giverCoinReward: c,
						startsAt: A,
						endsAt: d,
						subredditCoinReward: v
					}
				}), T = (e, t) => Object(a.a)(e, {
					...f,
					variables: {
						subredditId: t
					}
				}), C = (e, t) => Object(a.a)(e, {
					...w,
					variables: {
						profileName: t
					}
				}), I = e => Object(a.a)(e, {
					...b
				}), P = (e, t, r) => Object(a.a)(e, {
					...d,
					variables: {
						subredditId: t,
						thingId: r,
						includeGroup: !0
					}
				}), S = (e, t, r) => Object(a.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: r,
						includeGroup: !0
					}
				}), _ = (e, t) => Object(a.a)(e, {
					...g,
					variables: {
						awardId: t
					}
				}), N = (e, t, r) => Object(a.a)(e, {
					...p,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), k = (e, t, r) => Object(a.a)(e, {
					...h,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), M = async (e, t, r) => {
					const a = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(n.a)(Object(o.a)(e, [A.a]), {
						method: s.hb.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: a
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(v.a)(e)
					})
				}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => `awardItem__${t}-${e}`
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, r) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/models/RichTextJson/index.ts");
			const n = "giphy|",
				a = "|downsized";

			function o(e, t) {
				return n + e + (t ? a : "")
			}

			function i(e) {
				return e && 0 === e.indexOf(n)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(i)
			}

			function c(e) {
				let t = e.substring(n.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, r) => [...e, ...l(r, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, s.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === s.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/trackers/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				a = r("./src/reddit/selectors/gold/topAwarded.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t = {}) => ({
					...Object(n.g)(e, t),
					correlationId: Object(s.d)(s.a.GildingFlow, !1),
					profile: o.profile(e),
					subreddit: o.subreddit(e)
				}),
				d = e => t => ({
					source: "post",
					action: "click",
					noun: "award_spotlight_banner",
					...i(t, {
						thingId: e
					})
				}),
				c = e => t => ({
					source: "post_awards_leaderboard",
					action: "view",
					noun: "page",
					...i(t, {
						thingId: e
					})
				}),
				l = () => e => ({
					source: "post_awards_leaderboard",
					action: "click",
					noun: "give_gold",
					...i(e, {
						thingId: Object(a.a)(e) || void 0
					})
				})
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = r.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(a.a)(Object(o.b)("admin", e.isFilled), d.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(a.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function a(e) {
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
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, r) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = r.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/Powerup/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M12.249 32c-.4 0-.8-.1-1.2-.25l-.05-.05-5.05-2.6c-1.25-.7-1.75-2.2-1.25-3.5l.05-.1 2.45-5.45-3.15-1.5a2.985 2.985 0 01-1.4-3.55l3.5-12.05C6.649 1.2 8.299 0 10.099 0h7.8c.45 0 .9.1 1.3.3l.15.1 4.85 2.45c1.5.8 2.05 2.55 1.35 4.05l-2.2 4.3 4.45 2.25c.8.45 1.35 1.25 1.45 2.2.1.9-.2 1.8-.9 2.45l-14.15 13.15c-.55.5-1.25.75-1.95.75z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M10.648 17l-.85 2.1-4.65-2.2c.1.05.25.1.4.1h5.1zM23.749 13.6l3.1 1.6c.5.3.65 1 .15 1.45L12.849 29.8c-.3.25-.65.3-.95.15l-4.85-2.5c.3.1.65.1.9-.15l14.15-13.15c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				d: "M23.75 13.6l3.1 1.6c.5.3.65 1 .15 1.45l-4.9-2.5c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M18.898 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-3.35 6.55h-6.05l4.5-9.05z",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				d: "M18.9 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-4.9-2.5z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M21.95 12.65c.5.3.65 1 .15 1.45L7.95 27.3c-.3.25-.65.3-.9.15l-.1-.05a.86.86 0 01-.4-1.05l4.1-9.35h-5.1c-.15 0-.3-.05-.45-.1l-.1-.05c-.4-.25-.65-.75-.5-1.25L8.05 3.55A2.19 2.19 0 0110.15 2h7.8c.15 0 .3.05.45.1l.05.05c.45.25.7.85.45 1.4l-4.5 9.05h7.1c.15 0 .3.05.4.1l.05-.05z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M15.599 3.45c.55-.15 1.15-.25 1.7-.45-.6-.1-1.15-.15-1.75-.2-.6-.05-1.15-.05-1.75-.1-1.15-.05-2.25 0-3.4.05-.55 0-1.05.3-1.35.8-.15.3-.15.35-.2.5l-.15.4-.5 1.55c-.35 1.05-.7 2.1-1 3.15-.3 1.05-.65 2.1-.9 3.2-.3 1.05-.6 2.15-.8 3.25.55-1 1-2 1.5-3 .45-1 .9-2 1.35-3.05.4-1 .85-2.05 1.2-3.1l.6-1.55.25-.65h.05c1.15-.1 2.3-.25 3.4-.45.6-.1 1.15-.2 1.75-.35zM20.25 13.35c-1.1-.05-2.2-.05-3.3 0-.55 0-1.1.05-1.65.1-.55.05-1.1.1-1.65.2.55.15 1.1.25 1.6.35.55.1 1.1.2 1.65.25.6.1 1.25.15 1.85.2-.45.45-.9.85-1.3 1.3-.75.75-1.5 1.5-2.25 2.3-.75.8-1.5 1.55-2.2 2.35-.7.8-1.45 1.6-2.1 2.45.9-.65 1.7-1.3 2.55-2 .85-.7 1.65-1.4 2.45-2.1.8-.7 1.6-1.45 2.4-2.15l2.35-2.2c.1-.1.15-.25.2-.4 0-.4-.3-.65-.6-.65z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = ({
				className: e
			}) => n.a.createElement("svg", {
				className: e,
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
		},
		"./src/reddit/icons/svgs/TopAwarded/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M22.5 22.866h-21a1.5 1.5 0 01-1.5-1.5v-7.329c0-.59.34-1.1.835-1.345v-7.23a1.5 1.5 0 011.5-1.5h4.943v-1.65a1.5 1.5 0 011.5-1.5h6.444a1.5 1.5 0 011.5 1.5v4.363h4.943a1.5 1.5 0 011.5 1.5v4.517c.495.245.835.755.835 1.345v7.329a1.5 1.5 0 01-1.5 1.5z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M22.5 18.971h-21v2.395h21V18.97z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M22.5 14.037h-21v5.119h21v-5.119z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M21.665 14.66v3.178h-6.443V12.85h6.443v1.812zM8.779 10.136v7.702H2.335v-7.702H8.78z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M15.222 17.838v.348H8.779V6.987h6.443v10.852z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M16.244 12.85h-1.022v4.988h1.022V12.85zM8.779 10.136H7.756v7.702H8.78v-7.702z",
				fill: "#FEB331"
			}), n.a.createElement("path", {
				d: "M15.734 12.85h-.512v4.988h.512V12.85zM8.78 10.136h-.512v7.702h.512v-7.702z",
				fill: "#F76B0B"
			}), n.a.createElement("path", {
				d: "M21.665 8.175h-6.443v4.674h6.443V8.175zM8.779 5.462H2.335v4.674H8.78V5.462z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M15.222 2.313H8.779v4.674h6.443V2.312z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M16.244 8.175h-1.022v4.674h1.022V8.175zM8.779 5.462H7.756v4.674H8.78V5.462z",
				fill: "#DB5003"
			}), n.a.createElement("path", {
				d: "M11.752 11.577h-.063l-1.143.772v-1.038l1.206-.822h1.206v4.742h-1.206v-3.654zM5.326 12.403c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.502-.537-.502-.367 0-.584.25-.584.592H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.477h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#FFF1B6"
			}), n.a.createElement("path", {
				d: "M11.752 11.13h-.063l-1.143.771v-1.038l1.206-.822h1.206v4.742h-1.206V11.13zM5.326 11.955c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.503-.537-.503-.367 0-.584.25-.584.593H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.029h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M15.222 6.08H8.779v.907h6.443V6.08zM22.5 19.156h-21v.907h21v-.907zM21.665 12.866h-5.931l.51-.907h5.421v.907zM8.268 10.136H2.336v-.907h5.42l.512.907z",
				fill: "#FFFCD9"
			}))
		},
		"./src/reddit/models/Gold/TopAwarded/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Active = "ACTIVE", e.Inactive = "INACTIVE"
				}(s || (s = {}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var s, n, a, o;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var s;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "w", (function() {
				return A
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "y", (function() {
				return y
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "n", (function() {
				return T
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "p", (function() {
				return S
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "r", (function() {
				return B
			})), r.d(t, "x", (function() {
				return L
			})), r.d(t, "t", (function() {
				return F
			})), r.d(t, "u", (function() {
				return R
			})), r.d(t, "b", (function() {
				return H
			})), r.d(t, "v", (function() {
				return U
			})), r.d(t, "s", (function() {
				return D
			})), r.d(t, "g", (function() {
				return G
			})), r.d(t, "m", (function() {
				return q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/helpers/economics/sortBadges.ts"),
				a = r("./src/reddit/helpers/richTextJson/index.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				i = r("./src/reddit/models/Badge/managementPage.ts"),
				d = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/models/Product/index.ts"),
				l = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/commentSelector.ts"),
				p = r("./src/reddit/selectors/gold/powerups/index.ts"),
				h = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const b = [],
				f = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				w = (e, t) => {
					const r = f(e, t);
					return r && r.endsAt || null
				};
			var g;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(g || (g = {}));
			const A = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const r = w(e, t),
							s = Date.now();
						return r && s < r ? g.Subscribed : g.NotSubscribed
					}
					return g.DontKnow
				},
				v = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === u.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || b).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[i.a.Loyalty]: s.find(e => e.placement === o.a.First),
							[i.a.Achievement]: s.find(e => e.placement === o.a.Second),
							[i.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function x(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : b
			}
			const O = (e, t, r) => {
					var n;
					if (!s.d.spBadges(e)) return b;
					return x(null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t], e.badges.models)
				},
				j = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === u.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function y(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function E(e, t) {
				const {
					badge: r,
					subredditId: s
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(r) && r.userId === n) return r;
				const a = e.badges.models,
					i = e.user.ownedBadges[s] || {},
					d = Object(o.e)(r) ? r.type : r.id;
				return Object.keys(i).map(e => a[e]).find(e => e && e.type === d)
			}

			function T(e, t, r, s) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					if (r === i.a.Loyalty || r === i.a.Achievement) return n.data.collections[r];
					if (r === i.a.Cosmetic && s) return n.data.collections[r][s]
				}
				return b
			}

			function C(e, t) {
				const r = T(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : b
			}

			function I(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					const e = r.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return b
			}

			function P(e, t) {
				return T(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const S = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === l.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const s = e[r];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: r,
							type: d.a.SavedStripe
						})
					}
				}
				if (r.status === l.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const s = e[r];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: d.a.SavedPayPal
						})
					}
				}
				return t
			};
			var _;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(_ || (_ = {}));
			const N = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				k = (e, t) => Object.values(e.products.models).filter(e => e.type === c.a.Membership && t && e.subredditId === t),
				M = (e, t) => {
					if (!t) return {};
					const r = N.prices;
					k(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const s = f(e, t);
					return s && s.price && s.currency && (r[s.currency] = s.price), r
				},
				B = (e, t) => {
					var r, s, n, a;
					const o = (null === (a = null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === a ? void 0 : a.nomenclature) || N;
					return {
						prices: M(e, t),
						member: o.member || N.member,
						memberPlural: o.memberPlural || N.memberPlural,
						memberAlt: o.memberAlt || N.memberAlt,
						memberAltPlural: o.memberAltPlural || N.memberAltPlural,
						membership: o.membership || N.membership,
						membershipAlt: o.membershipAlt || N.membershipAlt
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				F = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				R = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				H = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				U = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				D = (e, t, r) => {
					if (!Object(h.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.p)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== r && Object(m.a)(e, {
						commentId: r
					});
					if (n && Object(a.a)(n)) return !0;
					const o = s.d.spGiphy(e),
						i = U(e, t);
					return !(!o || !i) || o && i
				},
				G = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				q = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/adHeaderExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = Object(s.a)(e => Object(a.c)(e, {
				experimentName: n.R,
				experimentEligibilitySelector: a.a
			}), e => e)
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: a.J,
						experimentName: s.Nb
					});
					return !(!t || Object(s.Zd)(t))
				},
				i = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: a.J,
						experimentName: s.Nb
					}) === s.cc.ListingEnabled
				}
		},
		"./src/reddit/selectors/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			const s = e => e.users.topAwarders.currentPostId,
				n = e => e.users.topAwarders.api.pending,
				a = e => e.users.topAwarders.api.error,
				o = (e, t) => e.users.topAwarders.list[t],
				i = (e, t) => e.users.topAwarders.currentRank[t]
		},
		"./src/redditGQL/operations/AwardSheetInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"e1be3a261389"}')
		},
		"./src/redditGQL/operations/AwardSheetInfoForProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"3a33281f30db"}')
		},
		"./src/redditGQL/operations/CreateCommunityAward.json": function(e) {
			e.exports = JSON.parse('{"id":"38852e4f82b0"}')
		},
		"./src/redditGQL/operations/CreateGlobalAward.json": function(e) {
			e.exports = JSON.parse('{"id":"c11324579f8c"}')
		},
		"./src/redditGQL/operations/CreateModAward.json": function(e) {
			e.exports = JSON.parse('{"id":"a04c85b4e964"}')
		},
		"./src/redditGQL/operations/DisableAwardInCommunity.json": function(e) {
			e.exports = JSON.parse('{"id":"689f37138ede"}')
		},
		"./src/redditGQL/operations/EnableAwardInCommunity.json": function(e) {
			e.exports = JSON.parse('{"id":"3c2210d8ba4b"}')
		},
		"./src/redditGQL/operations/GlobalAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"16101a740cd7"}')
		},
		"./src/redditGQL/operations/HideAwardOnTarget.json": function(e) {
			e.exports = JSON.parse('{"id":"4e43964bff6f"}')
		},
		"./src/redditGQL/operations/ManageableAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"bce139cc4904"}')
		},
		"./src/redditGQL/operations/ManageableAwardsForProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"f2dc00a6f019"}')
		},
		"./src/redditGQL/operations/RemoveCommunityAward.json": function(e) {
			e.exports = JSON.parse('{"id":"973872832463"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8.54f7f98834b5ddb26d38.js.map