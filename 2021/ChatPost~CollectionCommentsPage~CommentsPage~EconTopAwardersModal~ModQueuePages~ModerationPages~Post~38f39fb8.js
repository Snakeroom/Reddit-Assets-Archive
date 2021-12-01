// https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8.5980fa994859e31c4eeb.js
// Retrieved at 12/1/2021, 5:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"], {
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
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
				o = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const d = Object(s.a)(a.a),
				i = Object(s.a)(a.b),
				c = Object(s.a)(a.c),
				l = Object(s.a)(a.d),
				u = Object(s.a)(a.e),
				m = Object(s.a)(a.f),
				p = Object(s.a)(a.g),
				h = Object(s.a)(a.h),
				b = Object(s.a)(a.i),
				f = e => Object(n.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/actions/gold/constants.ts");
			const d = Object(s.a)(a.mb),
				i = Object(s.a)(a.t),
				c = e => async t => {
					await t(i({
						id: e
					})), t(Object(n.h)(o.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/gold/reportAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/communityAwards.ts"),
				i = r("./src/reddit/actions/gold/constants.ts");
			const c = Object(n.a)(i.lb),
				l = e => async (t, r, {
					apiContext: n
				}) => {
					t(c());
					try {
						if ((await Object(d.e)(n(), e.id)).error) throw new Error;
						await t(Object(o.f)({
							kind: a.b.SuccessAward,
							duration: o.a,
							text: s.fbt._("{award name} Award successfully reported for review.", [s.fbt._param("award name", e.name)], {
								hk: "1fHb5Q"
							})
						}))
					} catch (i) {
						await t(Object(o.f)({
							kind: a.b.Error,
							duration: o.a,
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
				o = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				d = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/gold/constants.ts");
			Object(n.a)(c.ub), Object(n.a)(c.tb), Object(n.a)(c.sb);
			const l = Object(n.a)(c.xb),
				u = Object(n.a)(c.wb),
				m = Object(n.a)(c.vb),
				p = (e, t = 25) => async (r, n, {
					gqlContext: a
				}) => {
					if (!n().users.topAwarders.list.length) {
						r(l());
						try {
							const s = await Object(d.b)(a(), {
									top: t,
									postId: e
								}),
								n = s.body;
							if (s.ok) await r(u({
								postId: e,
								...n.data.postInfoById.topAwarders
							}));
							else if (n.errors && n.errors.length) throw new Error(n.errors.map(e => e.message).join("; "))
						} catch (i) {
							Object(s.b)() || console.error(i), o.c.captureMessage(i), r(m(i.message))
						}
					}
				}, h = Object(n.a)(c.yb), b = e => async (t, r) => {
					t(h({
						postId: e
					})), t(Object(i.h)(a.a.ECON_TOP_AWARDERS))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, r) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/config.ts"),
				d = r("./src/reddit/controls/InternalLink/index.tsx"),
				i = r("./src/reddit/hooks/useClickSourceData.ts"),
				c = r("./src/reddit/components/AuthorLink/index.m.less"),
				l = r.n(c);
			t.a = e => {
				const t = Object(o.a)(e.className, l.a.authorLinkStyles, {
						[l.a.isLivestreaming]: e.isLivestreaming,
						[l.a.isStrong]: e.isStrong,
						[l.a.isUnstyled]: e.isUnstyled
					}),
					r = Object(i.a)();
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? n.a.createElement("a", {
					className: t,
					href: `${a.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? n.a.createElement("span", {
					className: Object(o.a)(l.a.deletedAuthorLink, e.className)
				}, e.children) : n.a.createElement(d.a, {
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
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/gold/giveAward.ts"),
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
					gqlContext: o
				}) => {
					r(b({
						awardId: e,
						thingId: t
					}));
					const a = s.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
						hk: "10OvOz"
					});
					try {
						(await ((e, t, r) => Object(u.a)(e, {
							...c,
							variables: {
								awardId: t,
								targetId: r
							}
						}))(o(), e, t)).error && r(Object(p.f)({
							kind: h.b.Error,
							duration: p.a,
							text: a
						}))
					} catch (d) {
						r(Object(p.f)({
							kind: h.b.Error,
							duration: p.a,
							text: a
						}))
					}
				};
			var w = r("./src/reddit/actions/gold/modals.ts"),
				g = r("./src/reddit/actions/modal.ts"),
				v = r("./src/reddit/actions/tooltip.ts"),
				A = r("./src/reddit/helpers/correlationIdTracker.ts"),
				O = r("./src/reddit/helpers/isPost.ts"),
				x = r("./src/reddit/helpers/trackers/gild.ts"),
				j = r("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = r("./src/reddit/components/TrackingHelper/index.tsx"),
				E = r("./src/reddit/models/Gold/Award.ts"),
				T = r("./src/reddit/selectors/activeModalId.ts"),
				I = r("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				P = r("./src/reddit/selectors/gold/awardIcon.ts"),
				C = r("./src/reddit/contexts/Post/index.tsx"),
				S = r("./src/reddit/contexts/User/index.tsx"),
				_ = r("./node_modules/lodash/debounce.js"),
				N = r.n(_),
				k = r("./src/lib/classNames/index.ts"),
				B = r("./src/lib/fastdom/index.ts"),
				M = r("./src/reddit/models/Gold/TopAwarded/index.ts"),
				L = r("./src/reddit/icons/fonts/Gift/index.tsx"),
				F = r("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				R = r.n(F);
			var H = o.a.memo(e => o.a.createElement("button", {
					className: Object(k.a)(e.className, R.a.addAwardPill),
					name: s.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, o.a.createElement(L.a, {
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
				Q = r("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				W = r.n(Q);
			const z = 3500,
				V = 500;
			class J extends o.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = o.a.createRef(), this.triggerAnimation = () => {
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
						}, z)))
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
						post: a,
						tooltipId: d
					} = this.props, {
						userGiven: i,
						shouldAnimate: c
					} = this.state, l = Object(U.a)(e.id, a.id);
					return o.a.createElement("span", {
						className: W.a.awardPillContainer,
						id: d,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, o.a.createElement("button", {
						className: Object(k.a)(t, W.a.awardPill, {
							[W.a.userGiven]: i
						}),
						onClick: this.handleOnClick
					}, o.a.createElement("span", {
						className: W.a.imageContainer
					}, o.a.createElement("img", {
						alt: e.name,
						className: Object(k.a)(W.a.awardIcon, {
							[W.a.hidden]: c
						}),
						id: l,
						ref: this.imageRef,
						src: n
					}), c && o.a.createElement("img", {
						alt: e.name,
						className: W.a.animationIcon,
						src: s
					})), o.a.createElement("span", {
						className: W.a.count
					}, r.toLocaleString())), o.a.createElement(q, {
						award: e,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideAward: this.handleHideAward,
						postOrComment: a,
						tooltipId: d
					}))
				}
			}
			var K = J,
				Y = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				$ = r("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				X = r.n($);
			var Z = o.a.memo(e => {
				const {
					className: t,
					direction: r,
					onClick: n
				} = e, a = "right" === r, d = s.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), i = s.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return o.a.createElement("div", {
					className: Object(k.a)(X.a.buttonContainer, {
						[X.a.right]: a
					}, t)
				}, o.a.createElement("button", {
					className: X.a.scrollButton,
					name: a ? i : d,
					onClick: n
				}, o.a.createElement(Y.a, {
					className: X.a.chevronIcon
				})))
			});
			const ee = (e, t) => {
				let r = `${Object(O.a)(e)?"Post":"Comment"}AwardBadges--${e}`;
				return t && (r = `${r}--${t}`), r
			};
			var te = r("./src/reddit/helpers/trackers/topAwarded.ts"),
				re = r("./src/reddit/hooks/useTracking.ts"),
				se = r("./src/reddit/actions/gold/topAwarded.ts"),
				ne = r("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				oe = r("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				ae = r.n(oe);
			const {
				fbt: de
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ie = e => {
					const t = Object(a.d)(),
						r = Object(re.a)();
					return o.a.createElement("button", {
						className: Object(k.a)(ae.a.pill, e.className, {
							[ae.a.awardsPlaqueStyle]: !!e.awardsPlaqueStyle
						}),
						onClick: () => {
							const {
								postId: s
							} = e.post;
							r(Object(te.a)(s)), t(Object(se.b)(s))
						}
					}, o.a.createElement("span", {
						className: ae.a.iconContainer
					}, o.a.createElement(ne.a, {
						className: ae.a.awardIcon
					})), o.a.createElement("span", null, de._("Top Awarded", null, {
						hk: "49Ol5i"
					})))
				},
				ce = r("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				le = r.n(ce);
			const ue = 11,
				me = 100;
			class pe extends o.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = o.a.createRef(), this.handleResize = N()(() => {
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
						const o = n.scrollLeft > 0,
							a = n.scrollLeft < n.scrollWidth - n.clientWidth;
						this.setState({
							canScrollLeft: o,
							canScrollRight: a
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
						this.props.triggerOverlayAnimation(), B.a.read(() => {
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
									o = (e.post.awardCountsById || {})[s.id];
								return r || n !== o
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
						o = s.scrollWidth - n,
						a = Math.min(Math.max(0, e), o);
					this.setState({
						canScrollLeft: a > 0,
						canScrollRight: a < o
					}), s.scrollTo({
						left: a,
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
						isInEconLeaderboardsExperiment: a,
						multiline: d,
						post: i,
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
					} = this.state, g = e.length > 0, v = ee(i.id, b);
					return o.a.createElement("div", {
						className: Object(k.a)(le.a.awardBadges, t, {
							[le.a.noAwards]: !g,
							[le.a.multiline]: d
						}),
						ref: this.plaqueRef
					}, f && o.a.createElement(Z, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (i.topAwardedType === M.a.Active || i.topAwardedType === M.a.Inactive) && !s && a && o.a.createElement(ie, {
						awardsPlaqueStyle: !0,
						post: i
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = i, r = t[e.id], s = n.icon32[e.id], a = n.icon128[e.id];
						return o.a.createElement(K, {
							award: e,
							className: le.a.clickablePlaqueItem,
							count: r,
							giveAwardAnimationIconUrl: a,
							key: e.id,
							onAddAward: l,
							onHideAward: u,
							onOpenReportFlow: p,
							onHideTooltip: m,
							onShowTooltip: h,
							pillIconUrl: s,
							post: i,
							prefersReducedMotion: c,
							tooltipId: `${v}-${e.id}`,
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !r && o.a.createElement(H, {
						className: le.a.clickablePlaqueItem,
						onAddAward: l
					}), !d && o.a.createElement("div", {
						className: le.a.spacer
					}), w && o.a.createElement(Z, {
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
			class ge extends o.a.PureComponent {
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
					return o.a.createElement(o.a.Fragment, null, t > 1 && " • ", we._("{award-name} Award", [we._param("award-name", e.name)], {
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
						onHideAward: a,
						onHideTooltip: d,
						onOpenReportFlow: i,
						postOrComment: c,
						tooltipId: l,
						tooltipLocation: u
					} = this.props;
					if (r <= 0) return null;
					const m = e.awardType === E.f.Moderator,
						p = Object(U.a)(e.id, c.id),
						h = "container" === u;
					return o.a.createElement("span", {
						className: Object(k.a)(fe.a.awardItem, t),
						id: h ? l : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: d
					}, o.a.createElement("span", {
						id: h ? "" : l
					}, o.a.createElement("img", {
						alt: e.name,
						className: Object(k.a)(fe.a.awardIcon, {
							[fe.a.animate]: this.state.animate
						}, s),
						id: p,
						ref: this.imageRef,
						src: n
					})), o.a.createElement("span", null, r > 1 && r, m && this.renderModAwardName()), o.a.createElement(q, {
						award: e,
						onHideAward: () => a(e),
						postOrComment: c,
						tooltipId: l,
						onOpenReportFlow: () => i(e)
					}))
				}
			}
			var ve = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Ae = r("./src/reddit/icons/fonts/index.tsx"),
				Oe = r("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				xe = r.n(Oe);
			var je = e => {
				const {
					className: t,
					onClick: r
				} = e;
				return o.a.createElement("button", {
					className: Object(k.a)(t, xe.a.badgeButton, xe.a.visibilityEffect),
					onClick: r
				}, o.a.createElement(Ae.a, {
					name: "award",
					className: xe.a.icon
				}))
			};
			var ye, Ee = e => {
					const {
						awards: t,
						className: r,
						hideBadgeButton: n,
						hideTopAwardedBadge: a,
						icons: d,
						isInEconLeaderboardsExperiment: i,
						onAddAward: c,
						onHideAward: l,
						onOpenReportFlow: u,
						onHideTooltip: m,
						onShowAllAwards: p,
						onShowTooltip: h,
						showAllAwards: b,
						tooltipType: f,
						thing: w
					} = e, g = ee(w.id, f), v = `${g}-view-all`;
					let A = [];
					A = b ? t : t.length > 5 ? t.slice(0, 4) : t;
					const x = !n && w.isGildable && t.length > 0,
						j = t.length > A.length ? t.slice(A.length).reduce((e, t) => e + (w.awardCountsById && w.awardCountsById[t.id] || 0), 0) : 0,
						y = s.fbt._("& {hidden award count} More", [s.fbt._param("hidden award count", j.toLocaleString())], {
							hk: "1OnmAi"
						});
					return o.a.createElement("div", {
						className: Object(k.a)(xe.a.awardBadges, r)
					}, Object(O.a)(w.id) && (w.topAwardedType === M.a.Active || w.topAwardedType === M.a.Inactive) && !a && i && o.a.createElement(ie, {
						post: w
					}), A.map(e => {
						const t = w.awardCountsById ? w.awardCountsById[e.id] : 0,
							r = d.icon32[e.id];
						return o.a.createElement(ge, {
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
					}), j > 0 && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
						"data-click-id": "awards",
						id: v,
						className: xe.a.showAllButton,
						onClick: p,
						onMouseEnter: () => h(v),
						onMouseLeave: m
					}, y), o.a.createElement(ve.c, {
						tooltipId: v,
						text: s.fbt._("View all Awards", null, {
							hk: "3JL2sD"
						})
					})), x && o.a.createElement(je, {
						onClick: c
					}))
				},
				Te = r("./src/reddit/actions/gold/reportAward.ts"),
				Ie = r("./src/reddit/controls/Button/index.tsx"),
				Pe = r("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				Ce = r.n(Pe);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(ye || (ye = {}));
			var Se = e => {
				const t = Object(re.a)(),
					[r, d] = Object(n.useState)(e.award.awardType === E.f.Global ? ye.FLAG_USAGE : ye.BEGIN),
					i = Object(a.d)(),
					c = () => {
						r === ye.BEGIN ? t(Object(x.clickCancelAwardReportFlow)(e.award, e.thing.id)) : r === ye.REPORT_COMMUNITY_AWARD ? t(Object(x.clickCancelReportAward)(e.award, e.thing.id)) : r === ye.FLAG_USAGE && t(Object(x.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(x.clickConfirmReportAward)(e.award, e.thing.id)), i(Object(Te.a)(e.award)), e.onClose()
					},
					u = () => {
						t(Object(x.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), i(Object(p.f)(Object(p.e)(s.fbt._("{award name} Award successfully flagged for review.", [s.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), h.b.SuccessAward))), e.onClose()
					},
					m = o.a.createElement(o.a.Fragment, null, o.a.createElement(Ie.o, {
						onClick: () => {
							t(Object(x.clickReportAward)(e.award, e.thing.id)), d(ye.REPORT_COMMUNITY_AWARD)
						},
						className: Ce.a.reportStepButton
					}, s.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), o.a.createElement(Ie.o, {
						onClick: () => {
							t(Object(x.clickFlagAwardUsage)(e.award, e.thing.id)), d(ye.FLAG_USAGE)
						},
						className: Ce.a.reportStepButton
					}, s.fbt._("This award is being used inappropriately.", null, {
						hk: "Y8giW"
					})));
				switch (r) {
					case ye.BEGIN:
						return o.a.createElement(j.a, {
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
						return o.a.createElement(j.a, {
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
						return o.a.createElement(j.a, {
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
				Ne = Object(d.c)({
					allAwards: e => e.awards.models,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(T.a)(e),
					isInEconLeaderboardsExperiment: I.b
				}),
				ke = e => Object(O.a)(e.id) ? e.postId : e.id,
				Be = Object(a.b)(Ne, (e, {
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
					onHideTooltip: () => e(Object(v.i)()),
					onShowTooltip: t => e(Object(v.f)({
						tooltipId: t
					})),
					onToggleHideAwardModal: () => e(Object(g.i)("AwardBadges--Modal--HideAwardConfirmation")),
					triggerOverlayAnimation: () => e(Object(i.b)(ke(t)))
				}));
			class Me extends o.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(A.d)(A.a.GildingFlow, !0),
							{
								onAddAward: s,
								sendEvent: n,
								thing: o
							} = this.props;
						s(t, e);
						const {
							clickAddAward: a
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n(a(o.id))
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
							clickHideAward: o
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(o(e, n.id)), s()
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
						awardsPlaqueStyle: r,
						className: n,
						currentUser: a,
						hideCta: d,
						hideTopAwardedBadge: i,
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
						tooltipType: v
					} = this.props, {
						showAllAwards: A
					} = this.state, x = f.reduceAnimationsFromAwards || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, y = Object.keys(w.awardCountsById || {}), T = Object(E.r)(y.map(t => e[t]).filter(Boolean)), I = {};
					for (const s of _e) {
						const e = {};
						I[`icon${s}`] = e;
						for (const t of T) e[t.id] = Object(P.c)({
							award: t,
							postOrComment: w,
							size: s,
							prefersReducedMotion: x
						})
					}
					const C = !!a && a.id === w.authorId;
					return o.a.createElement(o.a.Fragment, null, r ? o.a.createElement(he, {
						awards: T,
						awardsCountInView: t,
						className: n,
						hideAddAwardButton: d || !w.isGildable || C,
						hideTopAwardedBadge: i,
						icons: I,
						isInEconLeaderboardsExperiment: l,
						multiline: !!m,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: w,
						prefersReducedMotion: x,
						tooltipType: v,
						triggerOverlayAnimation: g
					}) : o.a.createElement(Ee, {
						awards: T,
						className: n,
						hideBadgeButton: d || !u,
						hideTopAwardedBadge: i,
						icons: I,
						isInEconLeaderboardsExperiment: l,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: p,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: h,
						showAllAwards: A || !!m,
						thing: w,
						tooltipType: v
					}), c && a && this.state.selectedAward && o.a.createElement(j.a, {
						actionText: s.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: C ? Object(O.a)(w.id) ? s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(O.a)(w.id) ? s.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : s.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "qlfga"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: b,
						withOverlay: !0
					}), this.state.reportingAward && o.a.createElement(Se, {
						award: this.state.reportingAward,
						thing: w,
						onClose: () => this.setState({
							reportingAward: null
						})
					}))
				}
			}
			t.a = Object(S.c)(Object(C.e)(Be(Object(y.c)(Me))))
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
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
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
				v = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				A = r.n(v);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = "add-custom-badge-tooltip",
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
						className: Object(i.a)(A.a.image, this.props.className),
						src: `${d.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${x}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || E;
					return n.a.createElement(s.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: A.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: A.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(f.a, {
						className: A.a.addCustom
					})), n.a.createElement(g, {
						className: A.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(e).map(e => {
						const t = Object(w.d)(r, r, e),
							o = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return n.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, n.a.createElement("div", {
							className: Object(i.a)(A.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(o),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: A.a.image,
							id: o,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? n.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: A.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: o,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: o,
							text: e.title
						})))
					}))
				}
			}
			const I = [],
				P = Object(a.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var s;
						return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t]) || I
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				C = Object(a.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const s = e.user.account;
						return s && (null === (r = e.users.appliedBadges[s.id]) || void 0 === r ? void 0 : r[t]) || I
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
				} = e, o = t.map(e => r[e]).filter(Boolean);
				return n.a.createElement(T, O({
					badges: o
				}, s))
			}
			const N = Object(o.b)(P, S)(_),
				k = Object(o.b)(C, S)(_)
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
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
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
				} = Object(m.a)(), o = null !== (t = e.badges) && void 0 !== t ? t : Object(p.i)(e.badgeIds, null !== (r = e.allBadges) && void 0 !== r ? r : {});
				return o.length ? n.a.createElement(l.b, {
					useHovercard: !0,
					badges: o,
					badgeSize: e.badgeSize,
					className: Object(d.a)(e.className, b.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && o.length < 2 && (null == s ? void 0 : s.id) === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			const w = [];
			t.b = Object(o.b)(() => Object(a.c)({
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
				onOpenUploadDialog: () => e(Object(i.j)())
			}))(f)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/selectors/economics.ts");

			function i(e) {
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
			t.b = Object(o.b)(() => Object(a.c)({
				badges: (e, {
					subredditId: t,
					userId: r
				}) => Object(d.q)(e, t, r)
			}))(i)
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
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/higherOrderComponents/makeAsync.tsx"),
				a = r("./src/lib/loadWithRetries/index.ts");
			const d = "UserInfoTooltip",
				i = e => e.alwaysShowChildren ? n.a.createElement(n.a.Fragment, null, e.children) : null;
			t.b = Object(o.a)({
				ErrorComponent: i,
				getComponent: () => Object(a.a)(() => r.e("AuthorHovercard").then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "h", (function() {
				return I
			})), r.d(t, "i", (function() {
				return P
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./node_modules/lodash/isNil.js"),
				i = r.n(d),
				c = r("./src/reddit/constants/jsapiEvents.ts");
			var l = r("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
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
					i()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					i()(this.el) || this.fireEvent(this.el)
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
			var p = Object(o.b)(u, {})(m),
				h = r("./src/reddit/selectors/comments.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				f = r("./src/reddit/selectors/subreddit.ts");
			const w = (e, t) => {
				const r = Object(b.b)(e, t),
					s = Object(f.F)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var g = Object(o.b)(() => Object(a.a)(w, h.j, (e, t) => ({
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
			const v = (e, t) => {
				const r = Object(b.b)(e, t),
					s = Object(f.F)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var A = Object(o.b)(() => Object(a.a)(v, e => e))(e => n.a.createElement(p, {
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
			var O = Object(o.b)(() => Object(a.c)({
					subreddit: f.Q
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
				x = r("./src/reddit/hooks/usePostContext.ts");
			var j = e => {
				const t = Object(x.a)(),
					r = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "post",
					data: r
				}) : null
			};
			var y = e => {
				const t = Object(x.a)(),
					r = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: r
				}) : null
			};
			var E = e => {
				const t = Object(x.a)(),
					r = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: r
				}) : null
			};
			var T = Object(o.b)(() => Object(a.c)({
				subreddit: f.Q
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
			var I = Object(o.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.I)(e, {
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
			var P = Object(o.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.Q)(e, {
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
				return de
			})), r.d(t, "e", (function() {
				return ie
			})), r.d(t, "a", (function() {
				return ce
			})), r.d(t, "b", (function() {
				return me
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/constants/experiments.ts"),
				u = r("./src/reddit/helpers/trackers/powerups.ts"),
				m = r("./src/reddit/actions/gold/powerups.ts"),
				p = r("./src/reddit/actions/profile/index.ts"),
				h = r("./src/reddit/helpers/isCrosspost.ts"),
				b = r("./src/reddit/hooks/useInfoTextTooltip.ts"),
				f = r("./src/reddit/hooks/useTracking.ts"),
				w = r("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				g = r("./src/reddit/icons/svgs/Powerup/index.tsx"),
				v = r("./src/reddit/components/AuthorLink/index.tsx"),
				A = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				O = r("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				x = r("./src/reddit/components/Flair/index.tsx"),
				j = r("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				y = r("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				E = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				T = r("./src/reddit/components/HumanDate/index.tsx"),
				I = r("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				P = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = r("./src/reddit/components/QuarantinedLabel/index.tsx"),
				S = r("./src/reddit/components/SponsoredLabel/index.tsx"),
				_ = r("./src/reddit/components/SubredditNameLink/index.tsx"),
				N = r("./src/reddit/constants/posts.ts"),
				k = r("./src/reddit/contexts/InsideOverlay.tsx"),
				B = r("./src/reddit/controls/MetaSeparator/index.tsx"),
				M = r("./src/lib/portal/index.tsx"),
				L = r("./src/reddit/constants/elementIds.ts"),
				F = n.a.memo((function({
					children: e
				}) {
					const [t, r] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => (r(!0), () => r(!1)), []), t ? n.a.createElement(M.a, {
						container: document.getElementById(L.d)
					}, n.a.Children.only(e)) : null
				})),
				R = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				H = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				U = r("./src/reddit/hooks/useClickSourceData.ts"),
				D = r("./src/reddit/icons/fonts/helpers.tsx"),
				G = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				q = r.n(G);
			var Q = e => n.a.createElement("i", {
					className: Object(a.a)(Object(D.b)("admin", e.isFilled), q.a.adminIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, n.a.createElement(D.a, null, e.desc)),
				W = (r("./src/reddit/icons/fonts/Premium/index.tsx"), r("./src/reddit/components/UserIcon/index.tsx")),
				z = r("./src/reddit/constants/postLayout.ts"),
				V = r("./src/reddit/contexts/PageLayer/index.tsx"),
				J = r("./src/reddit/models/Flair/index.ts"),
				K = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				Y = r("./src/reddit/models/Post/index.ts"),
				$ = r("./src/reddit/models/Subreddit/index.ts"),
				X = r("./src/reddit/selectors/authorFlair.ts"),
				Z = r("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				ee = r("./src/reddit/selectors/gold/powerups/index.ts"),
				te = r("./src/reddit/selectors/platform.ts"),
				re = r("./src/reddit/selectors/userFlair.ts"),
				se = r("./src/reddit/components/PostTopMeta/index.m.less"),
				ne = r.n(se);
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ae = {
				placement: "top"
			};
			var de;
			! function(e) {
				e.StickyPost = "sticky", e.Lightbox = "lightbox", e.TopAwardedModal = "topAwarded"
			}(de || (de = {}));
			const ie = e => Object(H.a)(Object(R.a)(e), K.a.metaText, K.b.metaText),
				ce = c.a.wrapped(B.b, "MetaSeparator", ne.a),
				le = c.a.span("text", ne.a),
				ue = Object(V.u)(),
				me = e => {
					const t = Object(b.a)(ae),
						r = oe._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						}),
						s = oe._("Reddit contractor", null, {
							hk: "3APwEh"
						}),
						o = !e.isDeleted && e.post.distinguishType === d.G.ADMIN;
					return n.a.createElement(v.a, {
						author: e.post.author,
						className: Object(a.a)(ne.a.authorLink, {
							[ne.a.isActionFont]: e.showActionFont
						}),
						"data-click-id": "user",
						forceOpenInNewTab: e.forceOpenInNewTab,
						isUnstyled: !0,
						style: e.style
					}, `u/${e.post.author}`, o && n.a.createElement(n.a.Fragment, null, n.a.createElement(Q, {
						className: ne.a.adminIcon,
						isFilled: !0,
						desc: r
					}), n.a.createElement("span", {
						className: ne.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), n.a.createElement(F, null, n.a.createElement(I.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), e.renderContractorBadge && n.a.createElement(n.a.Fragment, null, n.a.createElement(Q, {
						className: ne.a.contractorIcon,
						isFilled: !0,
						desc: s
					}), n.a.createElement("span", {
						className: ne.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), n.a.createElement(F, null, n.a.createElement(I.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), !1)
				},
				pe = n.a.memo((function(e) {
					const {
						className: t,
						forceOpenInNewTab: r,
						isOverlay: i,
						pageLayer: c,
						post: v,
						showSub: k = !1,
						showTimestamp: B = !0,
						subredditOrProfile: M,
						tooltipType: L
					} = e, R = Object(o.d)(), H = Object(f.a)(), D = Object(o.e)(Z.a), G = Object(o.e)(te.d), q = Object(o.e)(te.g) || ["popular", "all"].includes(G || ""), Q = !(!v.isSponsored || !D || Object(l.uf)(D));
					Object(s.useEffect)(() => {
						Q && R(Object(p.d)(v.author))
					}, []);
					const K = v.belongsTo.id,
						se = Object(s.useCallback)(e => Object(X.a)(e, {
							post: v
						}), [v]),
						de = Object(o.e)(se),
						ue = Object(U.a)(),
						pe = Object(s.useCallback)(e => Object(re.a)(e, {
							subredditId: K
						}), [K]),
						he = Object(o.e)(pe),
						be = Object(s.useCallback)(e => Object(ee.a)(e, {
							subredditId: K,
							userId: v.authorId
						}), [K, v.authorId]),
						fe = Object(o.e)(be),
						we = Object(s.useCallback)(e => Object(re.e)(e, {
							subredditId: K
						}), [K]),
						ge = Object(o.e)(we),
						ve = Object(b.a)(ae),
						Ae = Object(b.a)(ae),
						Oe = c && c.meta && c.meta.name === d.Mb.COMMENTS,
						xe = Object(h.a)(v),
						je = ge === J.b.Left,
						ye = v.authorIsContractor && !!M && M.type === $.f.EmployeesOnly,
						Ee = !!M && fe,
						Te = !i && !Oe,
						Ie = () => n.a.createElement(ce, {
							className: e.metaSeparatorClassName
						}, "•"),
						Pe = Object(o.e)(e => Object(V.Q)(e, {
							pageLayer: c
						})),
						Ce = z.e[Pe] === z.d.Card,
						Se = q && Ce || !!Oe,
						_e = Q && (q || !!Oe),
						Ne = n.a.createElement(n.a.Fragment, null, de && je && n.a.createElement("div", {
							className: ne.a.flairContainer
						}, n.a.createElement(x.b, {
							disabled: !he,
							flair: de,
							forceSmallEmojis: !0,
							usesCommunityStyles: Te
						})), Object(Y.o)(v.author) ? n.a.createElement(me, {
							post: v,
							isDeleted: !0,
							renderContractorBadge: ye,
							showActionFont: _e,
							style: Q ? {} : {
								color: ie(e)
							}
						}) : n.a.createElement(n.a.Fragment, null, n.a.createElement(A.b, {
							className: ne.a.badge,
							subredditId: K,
							uniqueIdentifier: `${v.id}-${i}`,
							userId: v.authorId
						}), n.a.createElement(y.b, {
							postOrComment: v,
							tooltipType: L
						}, n.a.createElement(O.b, {
							ignore: !!v.distinguishType && v.distinguishType !== d.G.NONE,
							subredditId: K,
							userId: v.authorId
						}, n.a.createElement(me, {
							post: v,
							forceOpenInNewTab: r,
							renderContractorBadge: ye,
							style: Q ? {} : {
								color: ie(e)
							},
							showActionFont: _e
						}))), Ee && n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
							className: ne.a.powerupBadge,
							onMouseEnter: Ae.show,
							onMouseLeave: Ae.hide,
							onClick: () => {
								H(Object(u.J)(L ? "post" : "postlist")), R(Object(m.g)("post_top_supporter_badge"))
							},
							ref: Ae.target.ref
						}, n.a.createElement(g.a, {
							className: ne.a.powerupIcon
						})), n.a.createElement(F, null, n.a.createElement(I.a, {
							arrowProps: Ae.arrowProps,
							popperProps: Ae.popperProps,
							visible: Ae.visible
						}, oe._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						}))))), de && !je && n.a.createElement("div", {
							className: ne.a.flairContainer
						}, n.a.createElement(x.b, {
							disabled: !he,
							flair: de,
							forceSmallEmojis: !0,
							usesCommunityStyles: Te
						})), v.belongsTo.type === N.a.SUBREDDIT && !Object(Y.o)(v.author) && n.a.createElement(j.a, {
							className: ne.a.publicWallet,
							contentId: v.id,
							metaSeparator: n.a.createElement(Ie, null),
							subredditId: K,
							userId: v.authorId,
							username: v.author
						})),
						ke = oe._("{=Posted by}{author}", [oe._param("=Posted by", n.a.createElement(le, {
							style: {
								color: ie(e)
							}
						}, oe._("Posted by", null, {
							hk: "274iff"
						}))), oe._param("author", Ne)], {
							hk: "1abNaj"
						}),
						Be = n.a.createElement(n.a.Fragment, null, n.a.createElement(w.a, {
							className: ne.a.crosspostIcon
						}), oe._("{=Crossposted by}{author}", [oe._param("=Crossposted by", n.a.createElement(le, {
							style: {
								color: ie(e)
							}
						}, oe._("Crossposted by", null, {
							hk: "1YnHU8"
						}))), oe._param("author", Ne)], {
							hk: "3BfJwk"
						})),
						Me = () => xe || Q ? xe ? Be : Ne : ke;
					return n.a.createElement("div", {
						className: Object(a.a)(ne.a.container, t)
					}, k && M && n.a.createElement(E.a, {
						postId: v.id,
						subredditName: M.name,
						tooltipType: L
					}, n.a.createElement(_.a, {
						"data-click-id": "subreddit",
						to: {
							pathname: M.url,
							state: ue
						}
					}, M.displayText)), M && M.isQuarantined && n.a.createElement(C.a, null), k && !xe && n.a.createElement(Ie, null), Q ? n.a.createElement(n.a.Fragment, null, (null == M ? void 0 : M.icon) && Se && n.a.createElement(W.a, {
						iconUrl: M.icon.url,
						isNSFW: M.isNSFW,
						userName: M.name,
						className: ne.a.userIcon,
						omitResponsivePresenceWrapper: !0
					}), Me(), v.isSponsored && n.a.createElement(n.a.Fragment, null, n.a.createElement(Ie, null), n.a.createElement(S.a, {
						adHeaderVariant: D,
						greyTextColor: ie(e)
					}))) : n.a.createElement(n.a.Fragment, null, v.isSponsored && n.a.createElement(n.a.Fragment, null, n.a.createElement(S.a, null), n.a.createElement(Ie, null)), Me()), n.a.createElement(P.e, null), B && !Q && n.a.createElement(n.a.Fragment, null, n.a.createElement("a", {
						className: ne.a.externalLink,
						"data-click-id": "timestamp",
						href: v.permalink,
						onMouseEnter: ve.show,
						onMouseLeave: ve.hide,
						ref: ve.target.ref,
						style: {
							color: ie(e)
						},
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, n.a.createElement(T.d, {
						seconds: v.created / d.Rb
					})), n.a.createElement(F, null, n.a.createElement(I.a, {
						arrowProps: ve.arrowProps,
						popperProps: ve.popperProps,
						visible: ve.visible
					}, n.a.createElement(T.b, {
						seconds: v.created / d.Rb
					})))))
				}));
			t.d = ue(Object(k.b)(Object(i.a)(pe)))
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
				o = r.n(n),
				a = r("./src/higherOrderComponents/asTooltip.tsx"),
				d = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = r("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = r.n(u);
			const p = ["center", "top"],
				h = ["center", "bottom"],
				b = d.a.div("Container", m.a),
				f = Object(a.a)(i.b),
				w = Object(c.u)({
					isProfileListingPage: c.H
				});
			class g extends o.a.Component {
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
						className: m.a.quarantineIcon
					}), s.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), o.a.createElement(f, {
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
				o = r.n(n),
				a = r("./src/reddit/components/SponsoredLabel/index.m.less"),
				d = r.n(a),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/constants/experiments.ts");
			const u = c.a.span("Wrapper", d.a);
			t.a = ({
				className: e,
				adHeaderVariant: t,
				greyTextColor: r
			}) => {
				const n = t === l.s.PromotedGrey || t === l.s.NoLockIcon;
				return o.a.createElement(u, {
					className: Object(i.a)(e, {
						[d.a.isPromotedBlue]: t === l.s.PromotedBlue,
						[d.a.isPromotedGrey]: n
					})
				}, o.a.createElement("span", {
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
				o = r.n(n);
			const a = r("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", o.a);
			t.a = a
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
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/MetaSeparator/index.m.less"),
				d = r.n(a);
			const i = e => n.a.createElement("span", {
				className: Object(o.a)(d.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => n.a.createElement(i, {
				className: Object(o.a)(d.a.metaSeparator, e),
				isSmall: t
			})
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return O
			})), r.d(t, "n", (function() {
				return x
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "k", (function() {
				return T
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "h", (function() {
				return N
			})), r.d(t, "i", (function() {
				return k
			})), r.d(t, "e", (function() {
				return B
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/lib/uploadToS3/index.ts"),
				i = r("./src/redditGQL/operations/AwardSheetInfo.json"),
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
				v = r("./src/reddit/constants/headers.ts"),
				A = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const O = (e, t, r, o) => {
					const d = {
						subreddit: t,
						filepath: r,
						mimetype: o
					};
					return Object(n.a)(Object(a.a)(e, [v.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: d
					})
				},
				x = async (e, t) => Object(d.a)(t, e), j = (e, t, r, s, n, a, d, i, c) => Object(o.a)(e, {
					...l,
					variables: {
						coinPrice: d,
						iconHeight: a,
						iconWidth: n,
						iconUrl: s,
						name: r,
						subredditId: t,
						startsAt: i,
						endsAt: c
					}
				}), y = (e, t, r, s, n, a, d, i, c) => Object(o.a)(e, {
					...m,
					variables: {
						iconHeight: a,
						iconWidth: n,
						iconUrl: s,
						monthsOfPremium: d,
						name: r,
						subredditId: t,
						startsAt: i,
						endsAt: c
					}
				}), E = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: r,
					context: s,
					daysOfDripExtension: n,
					daysOfPremium: a,
					description: d,
					endsAt: i,
					giverCoinReward: c,
					iconFormat: l,
					iconHeight: m,
					iconUrl: p,
					iconWidth: h,
					isNew: b,
					name: f,
					pennyPrice: w,
					pennyDonate: g,
					startsAt: v,
					subredditCoinReward: A
				}) => Object(o.a)(s, {
					...u,
					variables: {
						awardSubType: e,
						iconFormat: l,
						iconHeight: m,
						iconWidth: h,
						iconUrl: p,
						isNew: b,
						daysOfPremium: a,
						daysOfDripExtension: n,
						description: d,
						coinPrice: t,
						coinReward: r,
						name: f,
						pennyPrice: w,
						pennyDonate: g,
						giverCoinReward: c,
						startsAt: v,
						endsAt: i,
						subredditCoinReward: A
					}
				}), T = (e, t) => Object(o.a)(e, {
					...f,
					variables: {
						subredditId: t
					}
				}), I = (e, t) => Object(o.a)(e, {
					...w,
					variables: {
						profileName: t
					}
				}), P = e => Object(o.a)(e, {
					...b
				}), C = (e, t, r) => Object(o.a)(e, {
					...i,
					variables: {
						subredditId: t,
						thingId: r,
						includeGroup: !0
					}
				}), S = (e, t, r) => Object(o.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: r,
						includeGroup: !0
					}
				}), _ = (e, t) => Object(o.a)(e, {
					...g,
					variables: {
						awardId: t
					}
				}), N = (e, t, r) => Object(o.a)(e, {
					...p,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), k = (e, t, r) => Object(o.a)(e, {
					...h,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), B = async (e, t, r) => {
					const o = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(n.a)(Object(a.a)(e, [v.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: o
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(A.a)(e)
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
		"./src/reddit/helpers/trackers/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				o = r("./src/reddit/selectors/gold/topAwarded.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const d = (e, t = {}) => ({
					...Object(n.g)(e, t),
					correlationId: Object(s.d)(s.a.GildingFlow, !1),
					profile: a.profile(e),
					subreddit: a.subreddit(e)
				}),
				i = e => t => ({
					source: "post",
					action: "click",
					noun: "award_spotlight_banner",
					...d(t, {
						thingId: e
					})
				}),
				c = e => t => ({
					source: "post_awards_leaderboard",
					action: "view",
					noun: "page",
					...d(t, {
						thingId: e
					})
				}),
				l = () => e => ({
					source: "post_awards_leaderboard",
					action: "click",
					noun: "give_gold",
					...d(e, {
						thingId: Object(o.a)(e) || void 0
					})
				})
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
			var s, n, o, a;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
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
			})), r.d(t, "x", (function() {
				return v
			})), r.d(t, "f", (function() {
				return A
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "q", (function() {
				return x
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "z", (function() {
				return y
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "n", (function() {
				return T
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "p", (function() {
				return S
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "r", (function() {
				return M
			})), r.d(t, "y", (function() {
				return L
			})), r.d(t, "u", (function() {
				return F
			})), r.d(t, "v", (function() {
				return R
			})), r.d(t, "b", (function() {
				return H
			})), r.d(t, "w", (function() {
				return U
			})), r.d(t, "s", (function() {
				return D
			})), r.d(t, "t", (function() {
				return G
			})), r.d(t, "g", (function() {
				return q
			})), r.d(t, "m", (function() {
				return Q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/helpers/economics/sortBadges.ts"),
				o = r("./src/reddit/helpers/richTextJson/index.ts"),
				a = r("./src/reddit/models/Badge/index.ts"),
				d = r("./src/reddit/models/Badge/managementPage.ts"),
				i = r("./src/reddit/models/Payments/index.ts"),
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
			const v = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const r = w(e, t),
							s = Date.now();
						return r && s < r ? g.Subscribed : g.NotSubscribed
					}
					return g.DontKnow
				},
				A = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === u.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || b).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[d.a.Loyalty]: s.find(e => e.placement === a.a.First),
							[d.a.Achievement]: s.find(e => e.placement === a.a.Second),
							[d.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[d.a.Loyalty]: void 0,
						[d.a.Achievement]: void 0,
						[d.a.Cosmetic]: void 0
					}
				};

			function O(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : b
			}
			const x = (e, t, r) => {
					var n;
					if (!s.d.spBadges(e)) return b;
					return O(null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t], e.badges.models)
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
				if (Object(a.e)(r) && r.userId === n) return r;
				const o = e.badges.models,
					d = e.user.ownedBadges[s] || {},
					i = Object(a.e)(r) ? r.type : r.id;
				return Object.keys(d).map(e => o[e]).find(e => e && e.type === i)
			}

			function T(e, t, r, s) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					if (r === d.a.Loyalty || r === d.a.Achievement) return n.data.collections[r];
					if (r === d.a.Cosmetic && s) return n.data.collections[r][s]
				}
				return b
			}

			function I(e, t) {
				const r = T(e, t, d.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : b
			}

			function P(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					const e = r.data.collections[d.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return b
			}

			function C(e, t) {
				return T(e, t, d.a.Cosmetic, d.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
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
							type: i.a.SavedStripe
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
							type: i.a.SavedPayPal
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
				B = (e, t) => {
					if (!t) return {};
					const r = N.prices;
					k(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const s = f(e, t);
					return s && s.price && s.currency && (r[s.currency] = s.price), r
				},
				M = (e, t) => {
					var r, s, n, o;
					const a = (null === (o = null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || N;
					return {
						prices: B(e, t),
						member: a.member || N.member,
						memberPlural: a.memberPlural || N.memberPlural,
						memberAlt: a.memberAlt || N.memberAlt,
						memberAltPlural: a.memberAltPlural || N.memberAltPlural,
						membership: a.membership || N.membership,
						membershipAlt: a.membershipAlt || N.membershipAlt
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
					if (Object(p.r)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== r && Object(m.b)(e, {
						commentId: r
					});
					return !(!s || !Object(o.a)(s))
				},
				G = (e, t, r) => {
					if (!Object(h.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.s)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== r && Object(m.b)(e, {
						commentId: r
					});
					if (n && Object(o.b)(n)) return !0;
					const a = s.d.spGiphy(e),
						d = U(e, t);
					return !(!a || !d) || a && d
				},
				q = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				Q = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/adHeaderExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(s.a)(e => Object(o.c)(e, {
				experimentName: n.kb,
				experimentEligibilitySelector: o.a
			}), e => e)
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = e => {
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: o.K,
						experimentName: s.Ac
					});
					return !(!t || Object(s.uf)(t))
				},
				d = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: o.K,
						experimentName: s.Ac
					}) === s.ed.ListingEnabled
				}
		},
		"./src/reddit/selectors/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			const s = e => e.users.topAwarders.currentPostId,
				n = e => e.users.topAwarders.api.pending,
				o = e => e.users.topAwarders.api.error,
				a = (e, t) => e.users.topAwarders.list[t],
				d = (e, t) => e.users.topAwarders.currentRank[t]
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8.5980fa994859e31c4eeb.js.map