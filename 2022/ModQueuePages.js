// https://www.redditstatic.com/desktop2x/ModQueuePages.3a60c997f9b5256aad89.js
// Retrieved at 2/15/2022, 1:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages"], {
		"./node_modules/lodash/includes.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseIndexOf.js"),
				a = n("./node_modules/lodash/isArrayLike.js"),
				r = n("./node_modules/lodash/isString.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = n("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, n, c) {
				e = a(e) ? e : i(e), n = n && !c ? o(n) : 0;
				var l = e.length;
				return n < 0 && (n = d(l + n, 0)), r(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && s(e, t, n) > -1
			}
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/gold/constants.ts");
			const i = Object(s.a)(o.mb),
				d = Object(s.a)(o.t),
				c = e => async t => {
					await t(d({
						id: e
					})), t(Object(a.h)(r.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/gold/reportAward.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/models/Toast/index.ts"),
				i = n("./src/reddit/endpoints/gold/communityAwards.ts"),
				d = n("./src/reddit/actions/gold/constants.ts");
			const c = Object(a.a)(d.lb),
				l = e => async (t, n, {
					apiContext: a
				}) => {
					t(c());
					try {
						if ((await Object(i.e)(a(), e.id)).error) throw new Error;
						await t(Object(r.f)({
							kind: o.b.SuccessAward,
							duration: r.a,
							text: s.fbt._("{award name} Award successfully reported for review.", [s.fbt._param("award name", e.name)], {
								hk: "1fHb5Q"
							})
						}))
					} catch (d) {
						await t(Object(r.f)({
							kind: o.b.Error,
							duration: r.a,
							text: s.fbt._("Something went wrong. The report could not be created at this time.", null, {
								hk: "1ewigu"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/gold/topAwarded.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./src/lib/env/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/endpoints/gold/topAwarded.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/gold/constants.ts");
			Object(a.a)(c.ub), Object(a.a)(c.tb), Object(a.a)(c.sb);
			const l = Object(a.a)(c.xb),
				m = Object(a.a)(c.wb),
				p = Object(a.a)(c.vb),
				u = (e, t = 25) => async (n, a, {
					gqlContext: o
				}) => {
					if (!a().users.topAwarders.list.length) {
						n(l());
						try {
							const s = await Object(i.b)(o(), {
									top: t,
									postId: e
								}),
								a = s.body;
							if (s.ok) await n(m({
								postId: e,
								...a.data.postInfoById.topAwarders
							}));
							else if (a.errors && a.errors.length) throw new Error(a.errors.map(e => e.message).join("; "))
						} catch (d) {
							Object(s.b)() || console.error(d), r.c.captureMessage(d), n(p(d.message))
						}
					}
				}, b = Object(a.a)(c.yb), h = e => async (t, n) => {
					t(b({
						postId: e
					})), t(Object(d.h)(o.a.ECON_TOP_AWARDERS))
				}
		},
		"./src/reddit/components/AwardBadges/AddAwardPill/index.m.less": function(e, t, n) {
			e.exports = {
				addAwardPill: "_3Wf5TsmUR8Qf8nr0fDHjur",
				giftIcon: "eQZZIJf9NTq5MBV2285S2"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPill/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less": function(e, t, n) {
			e.exports = {
				buttonContainer: "DInSK-8C_3_wtp8rkyyk_",
				right: "_3h4h05agLr2A_NU_Rf3yCn",
				scrollButton: "_2MU8EpOTDEghV1ecmq37UZ",
				"focus-visible": "_38NFrOkGDKwQs4baFR_XWF",
				focusVisible: "_38NFrOkGDKwQs4baFR_XWF",
				chevronIcon: "uPrjAc1vFe8cn_-JitBDg"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less": function(e, t, n) {
			e.exports = {
				awardBadges: "_3XoW0oYd5806XiOr24gGdb",
				badgeButton: "_1vpnHb2bSTD6BcgVKisnPT",
				visibilityEffect: "_3vGYJIJIswDD8YOAMWGC4N",
				icon: "_3zozqOs5cvNd2uvuIiu2_L",
				showAllButton: "_1tAFPduILh7Zse0gkxT4vj"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less": function(e, t, n) {
			e.exports = {
				awardItem: "_2OYwDdghtXEuTF67C95YLY",
				awardIcon: "n08B7PrU01wzgZYIh-s7N",
				animate: "f18KwJcHh9SCfKw_W3Dm2",
				awardBounce: "_3bDgD_5hXKabLRqOe9sXRi"
			}
		},
		"./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less": function(e, t, n) {
			e.exports = {
				reportStepButton: "_2ke5Q4KsrJWi6sCDENRwI2"
			}
		},
		"./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less": function(e, t, n) {
			e.exports = {
				pill: "AavtiP0APDAhqwl7opcvC",
				iconContainer: "_2NhWk2-d-tn8oC0A-k_Ss-",
				awardIcon: "_20LMDg4_PtezakicbNPSfn",
				awardsPlaqueStyle: "qntP0rU06Z8LVP6TKmQHQ",
				"focus-visible": "qbP9Qnm2Qru28YDgfefpw",
				focusVisible: "qbP9Qnm2Qru28YDgfefpw"
			}
		},
		"./src/reddit/components/AwardBadges/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/gold/giveAward.ts"),
				c = n("./src/redditGQL/operations/HideAwardOnTarget.json"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				m = n("./src/lib/makeGqlRequest/index.ts"),
				p = n("./src/reddit/actions/gold/constants.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/models/Toast/index.ts");
			const h = Object(l.a)(p.D),
				f = ({
					awardId: e,
					thingId: t
				}) => async (n, a, {
					gqlContext: r
				}) => {
					n(h({
						awardId: e,
						thingId: t
					}));
					const o = s.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
						hk: "10OvOz"
					});
					try {
						(await ((e, t, n) => Object(m.a)(e, {
							...c,
							variables: {
								awardId: t,
								targetId: n
							}
						}))(r(), e, t)).error && n(Object(u.f)({
							kind: b.b.Error,
							duration: u.a,
							text: o
						}))
					} catch (i) {
						n(Object(u.f)({
							kind: b.b.Error,
							duration: u.a,
							text: o
						}))
					}
				};
			var x = n("./src/reddit/actions/gold/modals.ts"),
				g = n("./src/reddit/actions/modal.ts"),
				w = n("./src/reddit/actions/tooltip.ts"),
				C = n("./src/reddit/helpers/correlationIdTracker.ts"),
				v = n("./src/reddit/helpers/isPost.ts"),
				k = n("./src/reddit/helpers/trackers/gild.ts"),
				E = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/models/Gold/Award.ts"),
				j = n("./src/reddit/selectors/activeModalId.ts"),
				y = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				I = n("./src/reddit/selectors/gold/awardIcon.ts"),
				A = n("./src/reddit/contexts/Post/index.tsx"),
				T = n("./src/reddit/contexts/User/index.tsx"),
				S = n("./node_modules/lodash/debounce.js"),
				N = n.n(S),
				P = n("./src/lib/classNames/index.ts"),
				M = n("./src/lib/fastdom/index.ts"),
				F = n("./src/reddit/models/Gold/TopAwarded/index.ts"),
				L = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				B = n("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				R = n.n(B);
			var D = r.a.memo(e => r.a.createElement("button", {
					className: Object(P.a)(e.className, R.a.addAwardPill),
					name: s.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, r.a.createElement(L.a, {
					className: R.a.giftIcon
				}))),
				U = n("./src/reddit/helpers/awards/getAwardItemId.ts"),
				W = n("./src/higherOrderComponents/makeAsync.tsx"),
				H = n("./src/lib/loadWithRetries/index.ts");
			var Q = Object(W.a)({
					getComponent: () => Object(H.a)(() => n.e("AwardTooltip").then(n.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				G = n("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				V = n.n(G);
			const q = 3500,
				z = 500;
			class X extends r.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = r.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: n,
							triggerOverlayAnimation: s
						} = this.props;
						e.id !== _.g && (this.setState({
							userGiven: !0,
							shouldAnimate: !t
						}), t || (s(n), setTimeout(() => {
							this.setState({
								shouldAnimate: !1
							})
						}, q)))
					}, this.handleOnClick = () => {
						const {
							onAddAward: e,
							award: t
						} = this.props;
						e(t.id === _.g ? void 0 : t.id)
					}, this.handleMouseEnter = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						this.hoverTimer = setTimeout(() => {
							e(t), this.setState({
								hoverStateTriggered: !0
							})
						}, z)
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
						count: n,
						giveAwardAnimationIconUrl: s,
						pillIconUrl: a,
						post: o,
						tooltipId: i
					} = this.props, {
						userGiven: d,
						shouldAnimate: c
					} = this.state, l = Object(U.a)(e.id, o.id);
					return r.a.createElement("span", {
						className: V.a.awardPillContainer,
						id: i,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, r.a.createElement("button", {
						className: Object(P.a)(t, V.a.awardPill, {
							[V.a.userGiven]: d
						}),
						onClick: this.handleOnClick
					}, r.a.createElement("span", {
						className: V.a.imageContainer
					}, r.a.createElement("img", {
						alt: e.name,
						className: Object(P.a)(V.a.awardIcon, {
							[V.a.hidden]: c
						}),
						id: l,
						ref: this.imageRef,
						src: a
					}), c && r.a.createElement("img", {
						alt: e.name,
						className: V.a.animationIcon,
						src: s
					})), r.a.createElement("span", {
						className: V.a.count
					}, n.toLocaleString())), r.a.createElement(Q, {
						award: e,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideAward: this.handleHideAward,
						postOrComment: o,
						tooltipId: i
					}))
				}
			}
			var J = X,
				K = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Y = n("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				Z = n.n(Y);
			var $ = r.a.memo(e => {
				const {
					className: t,
					direction: n,
					onClick: a
				} = e, o = "right" === n, i = s.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), d = s.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return r.a.createElement("div", {
					className: Object(P.a)(Z.a.buttonContainer, {
						[Z.a.right]: o
					}, t)
				}, r.a.createElement("button", {
					className: Z.a.scrollButton,
					name: o ? d : i,
					onClick: a
				}, r.a.createElement(K.a, {
					className: Z.a.chevronIcon
				})))
			});
			const ee = (e, t) => {
				let n = `${Object(v.a)(e)?"Post":"Comment"}AwardBadges--${e}`;
				return t && (n = `${n}--${t}`), n
			};
			var te = n("./src/reddit/helpers/trackers/topAwarded.ts"),
				ne = n("./src/reddit/hooks/useTracking.ts"),
				se = n("./src/reddit/actions/gold/topAwarded.ts"),
				ae = n("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				re = n("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				oe = n.n(re);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
					const t = Object(o.d)(),
						n = Object(ne.a)();
					return r.a.createElement("button", {
						className: Object(P.a)(oe.a.pill, e.className, {
							[oe.a.awardsPlaqueStyle]: !!e.awardsPlaqueStyle
						}),
						onClick: () => {
							const {
								postId: s
							} = e.post;
							n(Object(te.a)(s)), t(Object(se.b)(s))
						}
					}, r.a.createElement("span", {
						className: oe.a.iconContainer
					}, r.a.createElement(ae.a, {
						className: oe.a.awardIcon
					})), r.a.createElement("span", null, ie._("Top Awarded", null, {
						hk: "49Ol5i"
					})))
				},
				ce = n("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				le = n.n(ce);
			const me = 11,
				pe = 100;
			class ue extends r.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = r.a.createRef(), this.handleResize = N()(() => {
						this.handlePlaquePositionChange()
					}, 300), this.handlePlaquePositionChange = () => {
						const {
							awards: e,
							awardsCountInView: t,
							multiline: n
						} = this.props, s = t || me;
						if (e.length < s - 4) return;
						if (n) return;
						const a = this.plaqueRef.current;
						if (!a) return;
						const r = a.scrollLeft > 0,
							o = a.scrollLeft < a.scrollWidth - a.clientWidth;
						this.setState({
							canScrollLeft: r,
							canScrollRight: o
						})
					}, this.handleScrollLeft = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							n = e.scrollLeft - (t - pe);
						this.scrollPlaqueTo(n)
					}, this.handleScrollRight = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							n = e.scrollLeft + (t - pe);
						this.scrollPlaqueTo(n)
					}, this.handleTriggerAnimation = e => {
						this.props.triggerOverlayAnimation(), M.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const n = document.getElementById(e);
							if (!n) return;
							const s = t.getBoundingClientRect(),
								a = n.getBoundingClientRect();
							if (a.left < s.left || a.right > s.right) {
								const e = a.left + (t.scrollLeft - s.left) - pe;
								this.scrollPlaqueTo(e)
							}
						})
					};
					const t = e.awardsCountInView || me,
						n = e.awards.length > t;
					this.state = {
						canScrollLeft: !1,
						canScrollRight: n && !e.multiline
					}
				}
				shouldComponentUpdate(e, t) {
					if (this.props.awards !== e.awards) {
						const t = this.props.awards.reduce((e, t) => (e[t.id] = (this.props.post.awardCountsById || {})[t.id], e), {});
						if (e.awards.reduce((n, s) => {
								const a = t[s.id],
									r = (e.post.awardCountsById || {})[s.id];
								return n || a !== r
							}, !1)) return !0
					}
					if (this.props.post.id !== e.post.id) return !0;
					for (const n in this.state)
						if (this.state[n] !== t[n]) return !0;
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
					} = this.props, n = t ? "auto" : "smooth", s = this.plaqueRef.current;
					if (!s) return;
					const a = s.clientWidth,
						r = s.scrollWidth - a,
						o = Math.min(Math.max(0, e), r);
					this.setState({
						canScrollLeft: o > 0,
						canScrollRight: o < r
					}), s.scrollTo({
						left: o,
						top: 0,
						behavior: n
					})
				}
				render() {
					const {
						awards: e,
						className: t,
						hideAddAwardButton: n,
						hideTopAwardedBadge: s,
						icons: a,
						isInEconLeaderboardsExperiment: o,
						multiline: i,
						post: d,
						prefersReducedMotion: c,
						onAddAward: l,
						onHideAward: m,
						onHideTooltip: p,
						onOpenReportFlow: u,
						onShowTooltip: b,
						tooltipType: h
					} = this.props, {
						canScrollLeft: f,
						canScrollRight: x
					} = this.state, g = e.length > 0, w = ee(d.id, h);
					return r.a.createElement("div", {
						className: Object(P.a)(le.a.awardBadges, t, {
							[le.a.noAwards]: !g,
							[le.a.multiline]: i
						}),
						ref: this.plaqueRef
					}, f && r.a.createElement($, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (d.topAwardedType === F.a.Active || d.topAwardedType === F.a.Inactive) && !s && o && r.a.createElement(de, {
						awardsPlaqueStyle: !0,
						post: d
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = d, n = t[e.id], s = a.icon32[e.id], o = a.icon128[e.id];
						return r.a.createElement(J, {
							award: e,
							className: le.a.clickablePlaqueItem,
							count: n,
							giveAwardAnimationIconUrl: o,
							key: e.id,
							onAddAward: l,
							onHideAward: m,
							onOpenReportFlow: u,
							onHideTooltip: p,
							onShowTooltip: b,
							pillIconUrl: s,
							post: d,
							prefersReducedMotion: c,
							tooltipId: `${w}-${e.id}`,
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !n && r.a.createElement(D, {
						className: le.a.clickablePlaqueItem,
						onAddAward: l
					}), !i && r.a.createElement("div", {
						className: le.a.spacer
					}), x && r.a.createElement($, {
						direction: "right",
						onClick: this.handleScrollRight
					}))
				}
			}
			var be = ue,
				he = n("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				fe = n.n(he);
			const {
				fbt: xe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class ge extends r.a.PureComponent {
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
					return r.a.createElement(r.a.Fragment, null, t > 1 && " • ", xe._("{award-name} Award", [xe._param("award-name", e.name)], {
						hk: "2QpjYF"
					}))
				}
				render() {
					const {
						award: e,
						className: t,
						count: n,
						iconClassName: s,
						iconUrl: a,
						onHideAward: o,
						onHideTooltip: i,
						onOpenReportFlow: d,
						postOrComment: c,
						tooltipId: l,
						tooltipLocation: m
					} = this.props;
					if (n <= 0) return null;
					const p = e.awardType === _.f.Moderator,
						u = Object(U.a)(e.id, c.id),
						b = "container" === m;
					return r.a.createElement("span", {
						className: Object(P.a)(fe.a.awardItem, t),
						id: b ? l : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i
					}, r.a.createElement("span", {
						id: b ? "" : l
					}, r.a.createElement("img", {
						alt: e.name,
						className: Object(P.a)(fe.a.awardIcon, {
							[fe.a.animate]: this.state.animate
						}, s),
						id: u,
						ref: this.imageRef,
						src: a
					})), r.a.createElement("span", null, n > 1 && n, p && this.renderModAwardName()), r.a.createElement(Q, {
						award: e,
						onHideAward: () => o(e),
						postOrComment: c,
						tooltipId: l,
						onOpenReportFlow: () => d(e)
					}))
				}
			}
			var we = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Ce = n("./src/reddit/icons/fonts/index.tsx"),
				ve = n("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				ke = n.n(ve);
			var Ee = e => {
				const {
					className: t,
					onClick: n
				} = e;
				return r.a.createElement("button", {
					className: Object(P.a)(t, ke.a.badgeButton, ke.a.visibilityEffect),
					onClick: n
				}, r.a.createElement(Ce.a, {
					name: "award",
					className: ke.a.icon
				}))
			};
			var Oe, _e = e => {
					const {
						awards: t,
						className: n,
						hideBadgeButton: a,
						hideTopAwardedBadge: o,
						icons: i,
						isInEconLeaderboardsExperiment: d,
						onAddAward: c,
						onHideAward: l,
						onOpenReportFlow: m,
						onHideTooltip: p,
						onShowAllAwards: u,
						onShowTooltip: b,
						showAllAwards: h,
						tooltipType: f,
						thing: x
					} = e, g = ee(x.id, f), w = `${g}-view-all`;
					let C = [];
					C = h ? t : t.length > 5 ? t.slice(0, 4) : t;
					const k = !a && x.isGildable && t.length > 0,
						E = t.length > C.length ? t.slice(C.length).reduce((e, t) => e + (x.awardCountsById && x.awardCountsById[t.id] || 0), 0) : 0,
						O = s.fbt._("& {hidden award count} More", [s.fbt._param("hidden award count", E.toLocaleString())], {
							hk: "1OnmAi"
						});
					return r.a.createElement("div", {
						className: Object(P.a)(ke.a.awardBadges, n)
					}, Object(v.a)(x.id) && (x.topAwardedType === F.a.Active || x.topAwardedType === F.a.Inactive) && !o && d && r.a.createElement(de, {
						post: x
					}), C.map(e => {
						const t = x.awardCountsById ? x.awardCountsById[e.id] : 0,
							n = i.icon32[e.id];
						return r.a.createElement(ge, {
							award: e,
							count: t,
							iconUrl: n,
							key: e.id,
							onHideAward: l,
							onOpenReportFlow: m,
							onHideTooltip: p,
							onShowTooltip: b,
							postOrComment: x,
							tooltipId: `${g}-${e.id}`,
							tooltipLocation: "icon"
						})
					}), E > 0 && r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						"data-click-id": "awards",
						id: w,
						className: ke.a.showAllButton,
						onClick: u,
						onMouseEnter: () => b(w),
						onMouseLeave: p
					}, O), r.a.createElement(we.c, {
						tooltipId: w,
						text: s.fbt._("View all Awards", null, {
							hk: "3JL2sD"
						})
					})), k && r.a.createElement(Ee, {
						onClick: c
					}))
				},
				je = n("./src/reddit/actions/gold/reportAward.ts"),
				ye = n("./src/reddit/controls/Button/index.tsx"),
				Ie = n("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				Ae = n.n(Ie);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(Oe || (Oe = {}));
			var Te = e => {
				const t = Object(ne.a)(),
					[n, i] = Object(a.useState)(e.award.awardType === _.f.Global ? Oe.FLAG_USAGE : Oe.BEGIN),
					d = Object(o.d)(),
					c = () => {
						n === Oe.BEGIN ? t(Object(k.clickCancelAwardReportFlow)(e.award, e.thing.id)) : n === Oe.REPORT_COMMUNITY_AWARD ? t(Object(k.clickCancelReportAward)(e.award, e.thing.id)) : n === Oe.FLAG_USAGE && t(Object(k.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(k.clickConfirmReportAward)(e.award, e.thing.id)), d(Object(je.a)(e.award)), e.onClose()
					},
					m = () => {
						t(Object(k.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), d(Object(u.f)(Object(u.e)(s.fbt._("{award name} Award successfully flagged for review.", [s.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), b.b.SuccessAward))), e.onClose()
					},
					p = r.a.createElement(r.a.Fragment, null, r.a.createElement(ye.o, {
						onClick: () => {
							t(Object(k.clickReportAward)(e.award, e.thing.id)), i(Oe.REPORT_COMMUNITY_AWARD)
						},
						className: Ae.a.reportStepButton
					}, s.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), r.a.createElement(ye.o, {
						onClick: () => {
							t(Object(k.clickFlagAwardUsage)(e.award, e.thing.id)), i(Oe.FLAG_USAGE)
						},
						className: Ae.a.reportStepButton
					}, s.fbt._("This award is being used inappropriately.", null, {
						hk: "Y8giW"
					})));
				switch (n) {
					case Oe.BEGIN:
						return r.a.createElement(E.a, {
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
							modalText: p
						});
					case Oe.REPORT_COMMUNITY_AWARD:
						return r.a.createElement(E.a, {
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
					case Oe.FLAG_USAGE:
						return r.a.createElement(E.a, {
							withOverlay: !0,
							onConfirm: m,
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
			const Se = [32, 128],
				Ne = Object(i.c)({
					allAwards: e => e.awards.models,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(j.a)(e),
					isInEconLeaderboardsExperiment: y.b
				}),
				Pe = e => Object(v.a)(e.id) ? e.postId : e.id,
				Me = Object(o.b)(Ne, (e, {
					thing: t
				}) => ({
					hideAward: n => e(f({
						awardId: n,
						thingId: Pe(t)
					})),
					onAddAward: (n, s) => {
						const a = Pe(t);
						return e(Object(x.d)({
							awardId: s,
							correlationId: n,
							thingId: a
						}))
					},
					onHideTooltip: () => e(Object(w.i)()),
					onShowTooltip: t => e(Object(w.f)({
						tooltipId: t
					})),
					onToggleHideAwardModal: () => e(Object(g.i)("AwardBadges--Modal--HideAwardConfirmation")),
					triggerOverlayAnimation: () => e(Object(d.b)(Pe(t)))
				}));
			class Fe extends r.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(C.e)(C.a.GildingFlow, !0),
							{
								onAddAward: s,
								sendEvent: a,
								thing: r
							} = this.props;
						s(t, e);
						const {
							clickAddAward: o
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a(o(r.id))
					}, this.handleShowAllAwards = () => {
						this.setState({
							showAllAwards: !0
						})
					}, this.handleHideAward = async e => {
						const {
							sendEvent: t,
							onToggleHideAwardModal: s,
							thing: a
						} = this.props;
						this.setState({
							selectedAward: e
						});
						const {
							clickHideAward: r
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(r(e, a.id)), s()
					}, this.handleHideAwardConfirmed = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: s
						} = this.state, {
							clickConfirmHideAward: a
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						s && (e(a(s, t.id)), this.props.hideAward(s.id))
					}, this.handleHideAwardCanceled = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: s
						} = this.state, {
							clickCancelHideAward: a
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						s && e(a(s, t.id))
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
						this.props.sendEvent(Object(k.clickAwardReportFlow)(e, this.props.thing.id)), this.setState({
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
						awardsPlaqueStyle: n,
						className: a,
						currentUser: o,
						hideCta: i,
						hideTopAwardedBadge: d,
						isConfirmModalOpen: c,
						isInEconLeaderboardsExperiment: l,
						isLoggedIn: m,
						isPostDetail: p,
						onHideTooltip: u,
						onShowTooltip: b,
						onToggleHideAwardModal: h,
						prefs: f,
						thing: x,
						triggerOverlayAnimation: g,
						tooltipType: w
					} = this.props, {
						showAllAwards: C
					} = this.state, k = f.reduceAnimationsFromAwards || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, O = Object.keys(x.awardCountsById || {}), j = Object(_.r)(O.map(t => e[t]).filter(Boolean)), y = {};
					for (const s of Se) {
						const e = {};
						y[`icon${s}`] = e;
						for (const t of j) e[t.id] = Object(I.c)({
							award: t,
							postOrComment: x,
							size: s,
							prefersReducedMotion: k
						})
					}
					const A = !!o && o.id === x.authorId;
					return r.a.createElement(r.a.Fragment, null, n ? r.a.createElement(be, {
						awards: j,
						awardsCountInView: t,
						className: a,
						hideAddAwardButton: i || !x.isGildable || A,
						hideTopAwardedBadge: d,
						icons: y,
						isInEconLeaderboardsExperiment: l,
						multiline: !!p,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: x,
						prefersReducedMotion: k,
						tooltipType: w,
						triggerOverlayAnimation: g
					}) : r.a.createElement(_e, {
						awards: j,
						className: a,
						hideBadgeButton: i || !m,
						hideTopAwardedBadge: d,
						icons: y,
						isInEconLeaderboardsExperiment: l,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: u,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: b,
						showAllAwards: C || !!p,
						thing: x,
						tooltipType: w
					}), c && o && this.state.selectedAward && r.a.createElement(E.a, {
						actionText: s.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: A ? Object(v.a)(x.id) ? s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(v.a)(x.id) ? s.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : s.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "qlfga"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: h,
						withOverlay: !0
					}), this.state.reportingAward && r.a.createElement(Te, {
						award: this.state.reportingAward,
						thing: x,
						onClose: () => this.setState({
							reportingAward: null
						})
					}))
				}
			}
			t.a = Object(T.c)(Object(A.e)(Me(Object(O.c)(Fe))))
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				o = n.n(r);
			const i = s.a.wrapped(a.c, "RestrictedButton", o.a);
			t.a = i
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, n) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/comment/moderation.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/ModModeReports/helpers.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/trackers/modTools.ts"),
				x = n("./src/reddit/selectors/moderatingComments.ts"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				w = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				k = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				E = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				O = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Show/index.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				y = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				I = n.n(y);
			const A = Object(h.u)(),
				T = e => `Distinguish--Dropdown--${e}`,
				S = Object(i.c)({
					currentUser: C.k,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(x.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(w.b)(T(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(h.h)(e, t) || Object(g.m)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: h.T
				}),
				N = Object(o.b)(S, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, s) => e(Object(m.b)(t.id, n, s)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(p.h)({
						tooltipId: T(t.id)
					}))
				}));
			t.a = A(N(l.a.wrapped(Object(b.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: a,
				collapsedBecauseCrowdControl: o,
				moderatorPermissions: i,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: p,
				onLockComment: b,
				onRemoveComment: h,
				onShowComment: x,
				onSpamComment: g,
				onToggleDistinguishDropdown: w,
				sendEvent: C,
				...y
			}) => {
				const A = Object(u.b)(t),
					T = t.isApproved && A,
					S = !t.isRemoved || t.bannedBy === c.l,
					N = o,
					P = e => C(Object(f.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || A) && r.a.createElement(j.a, {
					text: T ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), P("approve")
					}
				}, r.a.createElement(v.a, {
					className: I.a.icon
				})), S && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.a, {
					text: t.bannedBy === c.l ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						h(), t.bannedBy === c.l ? P("confirm_remove") : P("remove")
					}
				}, r.a.createElement(E.a, {
					className: I.a.icon
				})), r.a.createElement(j.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						g(), P("spam")
					}
				}, r.a.createElement(O.a, {
					className: I.a.icon
				}))), r.a.createElement(j.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), P(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(k.a, {
					className: I.a.icon
				})), N && r.a.createElement(j.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						x()
					}
				}, r.a.createElement(_.a, {
					className: Object(d.a)(I.a.icon, I.a.Show)
				})))
			}), "CommentModToolsFlatlist", I.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, n) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				flair: "cFNx42ceihnMpvAsovOTi",
				baselineItem: "_3QEK34iVL1BjyHAVleVVNQ",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				role: "_3AgEmWP1qkCB8nds7LhzEB",
				achievementFlair: "_2a_XgY10KOzM0PRvywwDuY",
				cakeDay: "TNzy9Y4Ql8v80YssZ59GR",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, n) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, n) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, n) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, n) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
			e.exports = {
				iconStyles: "S8WH2aCfP030wVxp0iR_o",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				NftAuthor: "kDnKKJWz2PJGoalLInCW1",
				nftAuthor: "kDnKKJWz2PJGoalLInCW1",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				userBadges: "_3Ofd-Ek86mwX500i92F84q",
				cakeDay: "UG2sa-VYMzrn7D1iNXtfR"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				p = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				u = n.n(p);
			const b = e => {
				const {
					className: t,
					collapsed: n,
					comment: a,
					isAuthorDeleted: o,
					isCommentAuthorBlocked: i,
					isLivestreaming: c,
					isStrong: l,
					onClick: p,
					style: b
				} = e;
				return n && i ? r.a.createElement("p", {
					className: Object(d.a)(u.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					author: a.author,
					className: Object(d.a)(u.a.commentAuthorLink, t),
					isAuthorDeleted: o,
					isCommentAuthorBlocked: i,
					isLivestreaming: c,
					isStrong: l,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: p,
					style: b
				}, a.author)
			};
			var h = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				f = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = n("./src/reddit/components/Flair/index.tsx"),
				g = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				w = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				C = n("./src/reddit/components/PostTopMeta/index.tsx"),
				v = n("./src/reddit/controls/MetaData/index.tsx"),
				k = n("./src/reddit/helpers/flair.ts"),
				E = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/models/Comment/index.ts"),
				j = n("./src/reddit/selectors/gold/powerups/index.ts"),
				y = n("./src/lib/constants/index.ts"),
				I = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				A = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				T = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				S = n.n(T);
			const N = ({
				authorClassName: e,
				className: t,
				collapsed: n,
				comment: s,
				isLivestreaming: a,
				isStrong: o,
				onClick: i,
				renderedInOverlay: c
			}) => r.a.createElement(A.b, {
				className: Object(d.a)(S.a.authorHoverCard, t),
				collapsed: n,
				isCommentAuthorBlocked: Object(_.g)(s),
				postOrComment: s,
				tooltipType: c ? C.c.Lightbox : void 0
			}, r.a.createElement(I.b, {
				ignore: Object(_.f)(s) || !!s.distinguishType && s.distinguishType !== y.G.NONE,
				subredditId: s.subredditId,
				userId: s.authorId
			}, r.a.createElement(b, {
				className: e,
				collapsed: n,
				comment: s,
				isAuthorDeleted: Object(_.f)(s),
				isCommentAuthorBlocked: Object(_.g)(s),
				isLivestreaming: a,
				isStrong: o,
				onClick: i
			})));
			var P = n("./src/config.ts"),
				M = n("./src/reddit/actions/tooltip.ts"),
				F = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const L = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var B = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				R = n.n(B);
			const D = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const a = Object(o.d)(),
					i = () => a(Object(M.h)({
						tooltipId: c
					})),
					c = L("CommentTopMeta--cakeday--", t, n),
					l = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(R.a.cakedayIcon, e),
					src: `${P.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: c,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(F.c, {
					tooltipId: c,
					text: l
				}))
			};
			var U = n("./src/lib/addQueryParams/index.ts"),
				W = n("./src/reddit/actions/comment/index.ts"),
				H = n("./src/reddit/actions/post.ts"),
				Q = n("./src/reddit/components/HumanDate/index.tsx"),
				G = n("./src/reddit/helpers/path/index.ts");
			const V = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						onClick: a,
						permalink: i,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					} = e, l = Object(o.d)(), m = L("CommentTopMeta--Created--", n.id, d), p = () => l(Object(M.h)({
						tooltipId: m
					}));
					return r.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(U.a)(i, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == a || a(e), q(l, n.id), c && (e.preventDefault(), l(Object(H.Y)(Object(G.b)(i), n.postId)))
						},
						onMouseEnter: p,
						onMouseLeave: p,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(Q.d, {
						seconds: n.created,
						shortenedUnit: s
					}), r.a.createElement(F.c, {
						tooltipId: m
					}, r.a.createElement(Q.b, {
						seconds: n.created
					})))
				},
				q = (e, t) => {
					window.addEventListener("focus", (function n() {
						z(e, t, n)
					}))
				},
				z = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(W.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(W.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var X = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				J = n.n(X);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = () => r.a.createElement(v.a, {
				className: J.a.crowdControlText
			}, K._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Z = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				$ = n.n(Z);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(v.a, {
				className: $.a.editedText
			}, ee._("edited {time}", [ee._param("time", r.a.createElement(Q.d, {
				seconds: t,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ne = n("./src/reddit/helpers/isRemoved.ts"),
				se = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				ae = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				re = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				oe = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				de = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				le = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = n.n(le);
			const pe = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: a
			}) => {
				const i = Object(o.d)(),
					d = e => () => i(Object(M.f)({
						tooltipId: e
					})),
					c = () => i(Object(M.i)()),
					l = t => L(t, e.id, a),
					m = l("CommentTopMeta--Approve--"),
					p = l("CommentTopMeta--Remove--"),
					u = l("CommentTopMeta--Report--"),
					b = l("CommentTopMeta--Spam--"),
					h = d(p);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
					className: me.a.approveIcon,
					desc: Object(se.a)(e),
					id: m,
					onMouseEnter: d(m),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(F.c, {
					tooltipId: m,
					text: Object(se.a)(e)
				})), Object(ne.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: me.a.removeIcon,
					desc: Object(se.b)(e),
					id: p,
					onMouseEnter: h,
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(F.c, {
					tooltipId: p,
					text: Object(se.b)(e)
				})), Object(ne.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && r.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: h,
					onMouseLeave: c
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(oe.a, {
					className: me.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: me.a.spamIcon,
					desc: Object(se.d)(e),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(F.c, {
					tooltipId: b,
					text: Object(se.d)(e)
				})), Object(ae.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: me.a.reportIcon,
					desc: Object(se.c)(e.numReports),
					id: u,
					onMouseEnter: d(u),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(F.c, {
					tooltipId: u,
					text: Object(se.c)(e.numReports)
				})))
			};
			var ue, be = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ue || (ue = {}));
			var he = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				fe = n.n(he);
			const xe = {
					[ue.Admin]: {
						color: be.c,
						label: s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[ue.Mod]: {
						color: be.d,
						label: s.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[ue.Op]: {
						color: be.a,
						label: s.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[ue.AlumniAdmin]: {
						color: be.c,
						label: s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[ue.Contractor]: {
						color: be.a,
						label: s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				ge = e => {
					const t = Object(o.d)(),
						n = function(e) {
							return e.isAdmin ? ue.Admin : e.isMod ? ue.Mod : e.isOp ? ue.Op : e.distinguishType === y.G.ALUMNI_ADMIN ? ue.AlumniAdmin : e.authorIsContractor ? ue.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === ue.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: a,
						label: i,
						tooltipTemplate: c
					} = xe[n], l = L(s, e.comment.id, e.renderedInOverlay), m = c(e), p = () => t(Object(M.h)({
						tooltipId: l
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(d.a)(fe.a.role, e.className),
						style: {
							color: a
						},
						id: l,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, i), n === ue.Mod && r.a.createElement(we, null)), r.a.createElement(F.c, {
						tooltipId: l,
						text: m
					}))
				},
				we = () => r.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: fe.a.modAchievement,
					src: `${P.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Ce = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ve = n.n(Ce);
			const {
				fbt: ke
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ee = () => r.a.createElement(v.a, {
				className: ve.a.stickiedText
			}, ke._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Oe = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				_e = n.n(Oe);
			const je = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: a,
					comment: i,
					flair: c,
					ignoreLock: m,
					isInModNotesExperiment: p,
					isLivestreaming: u,
					onCommentAuthorClick: b,
					onCommentTimestampClick: y,
					permalink: I,
					renderContractorBadge: A,
					renderedInOverlay: T,
					subredditDisplayText: S
				} = e, P = Object(O.a)(), M = i.subredditId, F = Object(o.e)(e => Object(j.h)(e, {
					subredditId: M
				}));
				if (i.isDeleted) return r.a.createElement("div", {
					className: Object(d.a)(_e.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: _e.a.authorLine
				}, r.a.createElement("span", {
					className: _e.a.metaText
				}, i.deletedBy === _.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(v.c, {
					className: _e.a.separator
				}), r.a.createElement(V, {
					key: "Created",
					className: _e.a.metaText,
					comment: i,
					compact: !0,
					permalink: I,
					renderedInOverlay: T
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(_e.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: _e.a.authorLine
				}, !Object(_.f)(i) && r.a.createElement(f.b, {
					className: _e.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: _e.a.baselineItem
				}, r.a.createElement(N, {
					authorClassName: _e.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: u,
					onClick: b,
					renderedInOverlay: T
				})), !Object(_.f)(i) && p && r.a.createElement(w.a, {
					postOrComment: i
				}), a && r.a.createElement(Y, null), r.a.createElement(ge, {
					className: _e.a.role,
					comment: i,
					subredditDisplayText: S,
					renderContractorBadge: A,
					renderedInOverlay: T
				}), i.isAuthorCakeday ? r.a.createElement(D, {
					className: _e.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: T
				}) : !Object(_.f)(i) && F && r.a.createElement(h.a, {
					className: _e.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						P(Object(E.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(g.a, {
					className: _e.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(v.c, {
					className: _e.a.separator
				}), r.a.createElement(V, {
					key: "Created",
					className: _e.a.metaText,
					comment: i,
					compact: !0,
					onClick: y,
					permalink: I,
					renderedInOverlay: T
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: _e.a.separator
				}), r.a.createElement(Ee, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: _e.a.separator
				}), r.a.createElement(te, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(pe, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: T
				}), r.a.createElement(l.a, {
					thing: i,
					tooltipType: T ? C.c.Lightbox : void 0
				})), c && !Object(k.o)(c) && r.a.createElement("span", {
					className: _e.a.userFlairLine
				}, r.a.createElement(x.b, {
					className: _e.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var ye = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ie = n("./src/reddit/selectors/economics.ts"),
				Ae = n("./src/reddit/models/Flair/index.ts"),
				Te = n("./src/reddit/selectors/comments.ts"),
				Se = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				Ne = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Pe = n("./src/reddit/selectors/subreddit.ts"),
				Me = n("./src/reddit/selectors/userFlair.ts"),
				Fe = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Le = n.n(Fe);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = c.a.wrapped(x.b, "RightPositionedAuthorFlair", Le.a),
				De = c.a.span("DeletedText", Le.a),
				Ue = c.a.wrapped(v.a, "MetaSeparator", Le.a),
				We = Object(o.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(Ie.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(Pe.G)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Me.e)(e, {
						subredditId: t.subredditId
					}),
					commentPermalink: (e, t) => Object(Te.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Ne.b,
					isInModNotesExperiment: (e, {
						comment: t
					}) => Object(Se.a)(e, t.subredditId)
				}));
			t.a = We(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: a,
					comment: o,
					commentPermalink: i,
					commentsPageKey: c,
					compact: m,
					flair: p,
					flairPosition: u,
					hasBadges: b,
					ignoreFlairPosition: h,
					ignoreLock: w,
					isBlockingInterstitialEnabled: k,
					isInModNotesExperiment: E,
					isLivestreaming: O,
					isPostComment: j,
					onCommentAuthorClick: y,
					onCommentTimestampClick: I,
					renderContractorBadge: A,
					renderedInOverlay: T,
					subredditDisplayText: S,
					userHasNft: P
				} = e, M = r.a.createElement(r.a.Fragment, null, r.a.createElement(ye.b, {
					comment: o,
					commentId: o.id
				}), r.a.createElement(ye.a, {
					comment: o,
					commentId: o.id,
					commentsPageKey: c
				}));
				if (j) return r.a.createElement(r.a.Fragment, null, r.a.createElement(je, {
					className: Object(d.a)(n, {
						[Le.a.collapsed]: s
					}),
					collapsed: s,
					collapsedBecauseCrowdControl: a,
					comment: o,
					flair: p || null,
					ignoreLock: w,
					isInModNotesExperiment: E,
					isLivestreaming: O,
					onCommentAuthorClick: y,
					onCommentTimestampClick: I,
					permalink: i,
					renderContractorBadge: !!A,
					renderedInOverlay: T,
					subredditDisplayText: S
				}), M);
				if (o.isDeleted) return r.a.createElement(He, Be({}, e, {
					className: Object(d.a)(n, Le.a.container, {
						[Le.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(Qe, Be({}, e, {
					className: Object(d.a)(n, Le.a.container, {
						[Le.a.collapsed]: s
					})
				}));
				const F = !h && u === Ae.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, Le.a.container, {
						[Le.a.collapsed]: s,
						[Le.a.hasBadges]: b,
						[Le.a.liveStreaming]: O
					}),
					"data-testid": "comment-top-meta"
				}, p && F && r.a.createElement(x.b, {
					flair: p,
					forceSmallEmojis: m
				}), !Object(_.f)(o) && r.a.createElement(f.b, {
					className: Le.a.userBadges,
					showAddCustom: !0,
					subredditId: o.subredditId,
					userId: o.authorId,
					uniqueIdentifier: o.id
				}), t && t, r.a.createElement(N, {
					authorClassName: P ? Le.a.NftAuthor : void 0,
					collapsed: s,
					comment: o,
					isLivestreaming: O,
					isStrong: !!m,
					onClick: y,
					renderedInOverlay: T
				}), a && r.a.createElement(Y, null), a && r.a.createElement(v.c, {
					className: Le.a.metaText,
					key: "crowdControlSeparator"
				}), p && !F && r.a.createElement(Re, {
					flair: p,
					forceSmallEmojis: m
				}), !m && r.a.createElement(g.a, {
					className: Le.a.publicPoints,
					contentId: o.id,
					metaSeparator: r.a.createElement(v.c, {
						className: Le.a.metaText
					}),
					subredditId: o.subredditId,
					userId: o.authorId,
					username: o.author
				}), M, r.a.createElement(ge, {
					className: Le.a.authorRole,
					comment: o,
					subredditDisplayText: S,
					renderContractorBadge: !!A,
					renderedInOverlay: T
				}), !m && r.a.createElement(r.a.Fragment, null, !o.isDeleted && !j && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.b, {
					className: Le.a.metaText,
					isScoreHidden: o.isScoreHidden,
					score: o.score
				}), r.a.createElement(v.c, {
					className: Le.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(V, {
					key: "Created",
					className: Le.a.MetaLink,
					comment: o,
					permalink: i,
					renderedInOverlay: T,
					isBlockingInterstitialEnabled: k
				}), o.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: Le.a.separator
				}), r.a.createElement(Ee, null)), o.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: Le.a.separator
				}), r.a.createElement(te, {
					editedAt: o.editedAt
				}))), r.a.createElement(pe, {
					comment: o,
					ignoreLock: w,
					renderedInOverlay: T
				}), r.a.createElement(l.a, {
					thing: o,
					tooltipType: T ? C.c.Lightbox : void 0
				}))
			});
			const He = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: a,
						comment: o,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d,
						renderedInOverlay: c
					} = e;
					return r.a.createElement("div", {
						className: a
					}, r.a.createElement(De, null, o.deletedBy === _.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(V, {
						key: "Created",
						className: Le.a.MetaLink,
						comment: o,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: d
					}), n && Ge({
						childrenInfo: t
					}))
				},
				Qe = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: a,
						collapsed: o,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(_.f)(t),
						collapsed: o
					})), r.a.createElement(v.b, {
						className: Le.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(v.c, {
						className: Le.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(V, {
						key: "Created",
						className: Le.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: a,
						isBlockingInterstitialEnabled: d
					}), Ge({
						childrenInfo: s
					}))
				},
				Ge = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Ue, {
						className: Le.a.metaText
					}, t ? s.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : s.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "dhX9w"
					}))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, n) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, n) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less": function(e, t, n) {
			e.exports = {
				BulkActionCheckbox: "_3iI16gsT5wEWtruoBxoOtR",
				bulkActionCheckbox: "_3iI16gsT5wEWtruoBxoOtR",
				UnthreadedCommentContainer: "sXloQX7r47Wzsk9BzGm2",
				unthreadedCommentContainer: "sXloQX7r47Wzsk9BzGm2",
				CommentColumn: "_1Xweq4o-zB3i3DcXmGzzCo",
				commentColumn: "_1Xweq4o-zB3i3DcXmGzzCo",
				ModToolsFlatlist: "vP5hkZOVsSDk7GDKAq7OO",
				modToolsFlatlist: "vP5hkZOVsSDk7GDKAq7OO",
				CommentContentWrapper: "-ejG1vHwBmlz_5bhISopO",
				commentContentWrapper: "-ejG1vHwBmlz_5bhISopO",
				CommentParentWrapper: "_3mX7brFt-u4nDJSVh-jpOe",
				commentParentWrapper: "_3mX7brFt-u4nDJSVh-jpOe",
				LeftRail: "Z9hmG99TfBJCAbBf-qUN5",
				leftRail: "Z9hmG99TfBJCAbBf-qUN5",
				hasBorder: "_1XsRq0m2kXDelxfbhz55U6",
				VoteColumn: "raHWe-JvKoiuubD1zI79q",
				voteColumn: "raHWe-JvKoiuubD1zI79q",
				Votes: "EJ8j2TI5xV293AHVFV98I",
				votes: "EJ8j2TI5xV293AHVFV98I",
				score: "_1dQ0ZDSConSfUQpPh7-fct",
				ParentPostTitle: "_3lXem8Q27IuhplBpcrbkOv",
				parentPostTitle: "_3lXem8Q27IuhplBpcrbkOv",
				Component: "_3WdgziOPlXBwthdefEr85r",
				component: "_3WdgziOPlXBwthdefEr85r",
				isBanned: "_34REldWOs0k5_KaRonS2V5",
				isReported: "sYxWb5PNRmW4dH0vC6Qiy"
			}
		},
		"./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less": function(e, t, n) {
			e.exports = {
				VoteSpacer: "_3SDIICEtoL7xtFw7iXPmd4",
				voteSpacer: "_3SDIICEtoL7xtFw7iXPmd4",
				ContentWrapper: "_3kLHiyeJw88pJ2rFPeO-h_",
				contentWrapper: "_3kLHiyeJw88pJ2rFPeO-h_",
				Meta: "TmC-aUr9G4BhD7f1fazLW",
				meta: "TmC-aUr9G4BhD7f1fazLW",
				CommentParentWrapper: "XNRBSCtZVEKlAOHUTl8fv",
				commentParentWrapper: "XNRBSCtZVEKlAOHUTl8fv",
				CommentContentWrapper: "_3CTfjjt3pW3hsmgbSddrW6",
				commentContentWrapper: "_3CTfjjt3pW3hsmgbSddrW6",
				Component: "_3Pul81GjcQcqXueoAqkS0P",
				component: "_3Pul81GjcQcqXueoAqkS0P"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, n) {
			e.exports = {
				VoteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				voteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				ContentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				contentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				CommentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				commentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				CommentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				commentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				CommentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				commentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				ParentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				parentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				Component: "_29-oldqrqqPwwjRRH0aLqU",
				component: "_29-oldqrqqPwwjRRH0aLqU"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return F
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/actions/comment/index.ts"),
				c = n("./src/reddit/actions/comment/moderation.ts"),
				l = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				m = n("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				p = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				u = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				b = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				h = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				f = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				x = n("./src/reddit/components/ModModeReports/index.tsx"),
				g = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				w = n("./src/reddit/components/RichTextJson/index.tsx"),
				C = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				k = n("./src/reddit/selectors/comments.ts"),
				E = n("./src/reddit/selectors/commentSelector.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				j = n.n(_),
				y = n("./src/lib/lessComponent.tsx");
			const I = y.a.div("VoteSpacer", j.a),
				A = y.a.div("ContentWrapper", j.a),
				T = y.a.div("CommentContentWrapper", j.a),
				S = y.a.div("CommentBody", j.a),
				N = y.a.div("ParentPostTitle", j.a),
				P = y.a.div("CommentParentWrapper", j.a),
				M = Object(o.c)({
					comment: (e, t) => Object(E.b)(e, t),
					commentPermalink: k.m,
					flair: k.e,
					subreddit: O.G
				}),
				F = Object(r.b)(M, (e, {
					commentId: t,
					trackClick: n
				}) => ({
					onIgnoreReports: () => e(Object(c.g)(t)),
					onVoteClick: s => {
						const [a, r] = s === v.a.upvoted ? [Object(d.q)(t), "upvote_comment"] : [Object(d.j)(t), "downvote_comment"];
						n(r)(), e(a)
					}
				})),
				L = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = F(y.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					commentPermalink: s,
					flair: r,
					hasReports: o,
					isCheckboxSelected: i = !1,
					onIgnoreReports: d,
					onVoteClick: c,
					showModTools: v,
					subreddit: k,
					showBulkActionCheckbox: E,
					toggleCheckbox: O
				} = e, _ = Object(f.d)(n);
				return a.a.createElement(m.a, {
					className: t,
					clickTrackingId: n.id,
					permalink: s
				}, a.a.createElement(g.a, {
					model: n,
					handleVote: c,
					showBulkActionCheckbox: E,
					isCheckboxSelected: i,
					toggleCheckbox: O
				}), a.a.createElement(I, null, a.a.createElement(A, null, a.a.createElement(P, null, n.postTitle && a.a.createElement(N, null, n.postTitle), n.postAuthor && a.a.createElement(b.a, {
					comment: n
				})), a.a.createElement(T, null, a.a.createElement(p.a, {
					comment: n
				}, a.a.createElement(S, null, a.a.createElement(w.a, {
					content: Object(C.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: L(e)
				})), a.a.createElement(u.a, {
					comment: n,
					flair: r,
					subredditName: k ? k.displayText : null
				}), _ && a.a.createElement(h.a, {
					thing: n
				}), o && a.a.createElement(x.a, {
					onIgnoreReports: d,
					reportable: n
				}), v && !n.isDeleted && a.a.createElement(l.a, {
					comment: n
				}))))))
			}, "Component", j.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/addQueryParams/index.ts"),
				i = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = n("./src/reddit/helpers/overlay/index.ts");
			const c = Object(r.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class l extends a.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: n,
						...s
					} = this.props, r = s => e(() => s.metaKey || s.ctrlKey || 1 === s.button ? window.open(Object(o.a)(t, {
						context: 3
					})) : n(Object(o.a)(t, {
						context: 3
					})))(s);
					return a.a.createElement("div", {
						className: s.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && r(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && r(e)
						}
					}, s.children)
				}
			}
			t.a = c(Object(i.a)(l))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				i = n.n(o);
			const d = r.a.div("DashWrapper", i.a);
			t.a = e => null === e.comment.parentId ? a.a.createElement(d, null, e.children) : a.a.createElement(d, null, a.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				subredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				TopMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				topMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				Inline: "meK3ndVOmnvQt6wVaAg5W",
				inline: "meK3ndVOmnvQt6wVaAg5W",
				PostedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				postedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				TextContainer: "iV3Hb5JWIQSpA3WhioY-N",
				textContainer: "iV3Hb5JWIQSpA3WhioY-N"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				i = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				c = n.n(d),
				l = n("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(i.a, "Inline", c.a),
				p = l.a.wrapped(i.a, "PostedInfo", c.a),
				u = l.a.wrapped(i.a, "SubredditWrapper", c.a),
				b = l.a.div("TextContainer", c.a),
				h = l.a.wrapped(o.a, "TopMeta", c.a);
			t.a = e => r.a.createElement(m, {
				className: e.className
			}, e.subredditName && r.a.createElement(u, null, e.subredditName && r.a.createElement(b, null, e.subredditName)), r.a.createElement(p, null, r.a.createElement(b, null, `${s.fbt._("Commented by",null,{hk:"4Dveap"})}`), r.a.createElement(h, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				AuthorLink: "_2jljMb6FK7HnIb15zmm1of",
				authorLink: "_2jljMb6FK7HnIb15zmm1of",
				SubredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				subredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				TextContainer: "_2in6k_0-sFgKVz16hifq03",
				textContainer: "_2in6k_0-sFgKVz16hifq03",
				SubredditIcon: "uCjYZbKNai0INWGwHjoUh",
				subredditIcon: "uCjYZbKNai0INWGwHjoUh",
				Inline: "_2VWXAfRlnHG_4nydI7J4l3",
				inline: "_2VWXAfRlnHG_4nydI7J4l3"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/AuthorLink/index.tsx"),
				o = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				l = n.n(c),
				m = n("./src/lib/lessComponent.tsx");
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = m.a.wrapped(r.a, "AuthorLink", l.a), b = m.a.wrapped(d.a, "Inline", l.a), h = m.a.wrapped(d.a, "SubredditWrapper", l.a), f = m.a.div("TextContainer", l.a), x = m.a.wrapped(i.b, "SubredditIcon", l.a);
			t.a = e => a.a.createElement(b, null, e.subredditOrProfile && a.a.createElement(h, null, e.subredditOrProfile && a.a.createElement(x, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && a.a.createElement(f, null, e.subredditOrProfile.displayText)), p._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && a.a.createElement(o.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, a.a.createElement(u, {
				author: e.comment.postAuthor,
				isUnstyled: !0
			}, `u/${e.comment.postAuthor}`)))
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(l);
			const p = e => e.preventDefault();
			t.a = Object(o.a)(e => r.a.createElement(i.e, null, r.a.createElement(i.i, null, r.a.createElement(c.a, null, r.a.createElement(i.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(i.b, null)))), r.a.createElement(i.l, null, r.a.createElement(i.p, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(i.g, null, !e.hideCancelButton && r.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(i.u, {
				className: m.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("UserAchievementFlair").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
		},
		"./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3gono-WZrSL-d6xVXvjtMy",
				container: "_3gono-WZrSL-d6xVXvjtMy",
				Image: "cSzjL6IStvPqHPZ7Y7ly8",
				image: "cSzjL6IStvPqHPZ7Y7ly8",
				Title: "_15y0pZYrlSHF1PcfsddZ-q",
				title: "_15y0pZYrlSHF1PcfsddZ-q",
				Text: "_2jaFduo9u1gW746Eq2bUKo",
				text: "_2jaFduo9u1gW746Eq2bUKo"
			}
		},
		"./src/reddit/components/ModQueueList/LayoutNavigation.m.less": function(e, t, n) {
			e.exports = {
				Inline: "_3JHX3et1k6IdasjG0oW12P",
				inline: "_3JHX3et1k6IdasjG0oW12P",
				Filter: "_1OcIyF84egvn4Y6482t8jQ",
				filter: "_1OcIyF84egvn4Y6482t8jQ",
				filterMargin: "_2bX-c80byEShP8Q3c-pyFF",
				LayoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7",
				layoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7"
			}
		},
		"./src/reddit/components/ModQueueList/LayoutNavigation.tsx": function(e, t, n) {
			"use strict";
			var s, a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/higherOrderComponents/asTooltip.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/modQueue/index.ts"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				h = n("./src/reddit/controls/LayoutSwitch/index.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/layout/row/Inline/index.tsx"),
				g = n("./src/reddit/selectors/profile.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/tooltip.ts"),
				v = n("./src/lib/addQueryParams/index.ts"),
				k = n("./src/lib/filterQueryParams/index.ts"),
				E = n("./src/reddit/controls/Dropdown/Row.tsx"),
				O = n("./src/reddit/controls/InternalLink/index.tsx"),
				_ = n("./src/reddit/selectors/meta.ts"),
				j = n("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				y = n.n(j);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(s || (s = {}));
			const I = p.a.wrapped(E.b, "Row", y.a),
				A = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: _.j
				});
			var T = Object(i.b)(A)(e => o.a.createElement("div", null, o.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, o.a.createElement(I, {
					displayText: a.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), o.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(v.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: s.Posts
					})
				}, o.a.createElement(I, {
					displayText: a.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === s.Posts
				})), o.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(v.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: s.Comments
					})
				}, o.a.createElement(I, {
					displayText: a.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === s.Comments
				})))),
				S = n("./src/reddit/contexts/PageLayer/index.tsx"),
				N = n("./src/reddit/controls/SearchBar/index.tsx"),
				P = n("./src/reddit/selectors/moderatorPermissions.ts"),
				M = n("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				F = n.n(M);
			const L = Object(S.u)({
					currentPageUrl: S.f
				}),
				B = Object(d.c)({
					moderatingSubreddits: P.n,
					origin: _.j
				}),
				R = Object(i.b)(B),
				D = p.a.div("DropdownContainer", F.a),
				U = p.a.div("SearchBarContainer", F.a),
				W = p.a.wrapped(E.b, "Row", F.a),
				H = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class Q extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						search: ""
					}, this.updateSortedSubreddits(e), this.updateFilteredSubreddits(e, this.state)
				}
				UNSAFE_componentWillUpdate(e, t) {
					e.moderatingSubreddits !== this.props.moderatingSubreddits ? (this.updateSortedSubreddits(e), this.updateFilteredSubreddits(e, t)) : t.search !== this.state.search && this.updateFilteredSubreddits(e, t)
				}
				updateSortedSubreddits(e) {
					this.sortedSubreddits = e.moderatingSubreddits.slice().sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1)
				}
				updateFilteredSubreddits(e, t) {
					if (!t.search) return void(this.filteredSubreddits = this.sortedSubreddits);
					const n = t.search.toLowerCase();
					let s;
					s = e.moderatingSubreddits !== this.props.moderatingSubreddits || 0 !== n.indexOf(this.state.search) ? this.sortedSubreddits : this.filteredSubreddits, this.filteredSubreddits = s.filter(e => -1 !== e.displayText.toLowerCase().indexOf(n))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(D, {
						onClickCapture: this.stopPropagation
					}, o.a.createElement(U, null, o.a.createElement(N.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: a.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), o.a.createElement(O.a, {
						to: Object(k.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, o.a.createElement(W, {
						displayText: a.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const n = H(t);
						return o.a.createElement(O.a, {
							key: t.id,
							to: Object(v.a)(Object(k.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), n)
						}, o.a.createElement(W, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var G = L(R(Q)),
				V = n("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				q = n.n(V);
			const z = Object(m.a)(b.a),
				X = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				J = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				K = p.a.wrapped(x.a, "Inline", q.a),
				Y = p.a.div("Filter", q.a),
				Z = p.a.wrapped(h.a, "LayoutSwitch", q.a),
				$ = e => {
					switch (e) {
						case "allPostTypes":
							return a.fbt._("Posts and Comments", null, {
								hk: "2oWJdB"
							});
						case "allSubreddits":
							return a.fbt._("All subreddits", null, {
								hk: "OqzeW"
							});
						case "comments":
							return a.fbt._("Comments", null, {
								hk: "1a9mt8"
							});
						case "links":
							return a.fbt._("Posts", null, {
								hk: "fijEw"
							});
						case "searchPlaceholder":
							return a.fbt._("Find subreddit", null, {
								hk: "3yJKEz"
							})
					}
				},
				ee = Object(d.c)({
					isPostTypeFilterDropdownOpen: Object(C.b)(J),
					isSubredditFilterDropdownOpen: Object(C.b)(X),
					profile: (e, {
						profileName: t
					}) => t ? Object(g.j)(e, {
						profileName: t
					}) : null,
					subreddit: (e, {
						subredditName: t
					}) => t ? Object(w.w)(e, {
						subredditName: t
					}) : null
				}),
				te = Object(i.b)(ee, e => ({
					loadAllSubreddits: () => e(Object(u.d)(!0)),
					onOpenDropdown: t => e(Object(l.h)({
						tooltipId: t
					}))
				}));
			class ne extends o.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(X), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(J), this.props.sendEventWithName("content_type")
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || a.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), n = e.postTypeFilter && $(e.postTypeFilter) || a.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					});
					return o.a.createElement(K, null, !e.hideSubredditFilter && o.a.createElement(o.a.Fragment, null, o.a.createElement(Y, {
						id: X,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, o.a.createElement(f.a, {
						name: "caret_down"
					})), o.a.createElement(z, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: X
					}, o.a.createElement(G, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), e.showTypeFilter && o.a.createElement("div", {
						className: Object(c.a)({
							[q.a.filterMargin]: !e.hideSubredditFilter
						})
					}, o.a.createElement(Y, {
						id: J,
						onClick: this.onOpenPostTypeFilterDropdown
					}, n, o.a.createElement(f.a, {
						name: "caret_down"
					})), o.a.createElement(z, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: J
					}, o.a.createElement(T, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), o.a.createElement(Z, null))
				}
			}
			t.a = te(ne)
		},
		"./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less": function(e, t, n) {
			e.exports = {
				StatusItem: "_2K7YZXKFsZRhsQQ4AbJmxU",
				statusItem: "_2K7YZXKFsZRhsQQ4AbJmxU",
				StatusContainer: "_2iPB1Z8ZMY-jLMenh1R4K4",
				statusContainer: "_2iPB1Z8ZMY-jLMenh1R4K4",
				StatusList: "B7xBQCW-i0XkgeJ22rgLC",
				statusList: "B7xBQCW-i0XkgeJ22rgLC"
			}
		},
		"./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxContainer: "DsVp-bHpfq0Oq0qA6pTak",
				checkboxContainer: "DsVp-bHpfq0Oq0qA6pTak",
				Checkbox: "_3IYLDjbdCg9uE2oDb5e7Sn",
				checkbox: "_3IYLDjbdCg9uE2oDb5e7Sn",
				DropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				dropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				DropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				dropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				Button: "abvVqLDYtaKz3przU1pme",
				button: "abvVqLDYtaKz3przU1pme",
				Bullet: "K9CBgM-Xyd_FBz7TcYHah",
				bullet: "K9CBgM-Xyd_FBz7TcYHah",
				Text: "_14Wi7Tj4JyvXkmtsyZkG9e",
				text: "_14Wi7Tj4JyvXkmtsyZkG9e",
				left: "_1IovB6jH5oyEgCXjUwXpJs",
				right: "_1aKgaRqDhtICtELEl5XEw3",
				ModToolsBulkOperations: "IncH4Lk7NsVjvrE51jpu8",
				modToolsBulkOperations: "IncH4Lk7NsVjvrE51jpu8"
			}
		},
		"./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less": function(e, t, n) {
			e.exports = {
				Row: "_1i-lQzTwq8UQrdKuiR_jer",
				row: "_1i-lQzTwq8UQrdKuiR_jer"
			}
		},
		"./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less": function(e, t, n) {
			e.exports = {
				DropdownContainer: "CxFih1Dllyb7Ee-gA27SM",
				dropdownContainer: "CxFih1Dllyb7Ee-gA27SM",
				SearchBarContainer: "_3TBm4aNfLDgkYxeb3BL6Qu",
				searchBarContainer: "_3TBm4aNfLDgkYxeb3BL6Qu",
				Row: "_2-Mqfq2jQLCLoIJJX5d6ER",
				row: "_2-Mqfq2jQLCLoIJJX5d6ER"
			}
		},
		"./src/reddit/components/ModQueueList/index.m.less": function(e, t, n) {
			e.exports = {
				ItemContainer: "_2QxKXxKsAXysE1p_Y7m66a",
				itemContainer: "_2QxKXxKsAXysE1p_Y7m66a",
				ButtonContainer: "_1UWG2tG2gGruVUIlnO6Qwr",
				buttonContainer: "_1UWG2tG2gGruVUIlnO6Qwr"
			}
		},
		"./src/reddit/components/ModQueueList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/difference.js"),
				a = n.n(s),
				r = n("./node_modules/lodash/includes.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/addQueryParams/index.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/modQueue/index.ts"),
				b = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/components/ModModeReports/helpers.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				x = n("./src/lib/classNames/index.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/reddit/layout/row/Inline/index.tsx"),
				C = n("./src/reddit/components/PaginationButtons/index.m.less"),
				v = n.n(C);
			var k = e => d.a.createElement(w.a, {
					className: v.a.buttonContainer
				}, d.a.createElement(g.s, {
					className: Object(x.a)(v.a.routerLink, {
						[v.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, f.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), d.a.createElement(g.s, {
					className: Object(x.a)(v.a.routerLink, {
						[v.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, f.fbt._("Next", null, {
					hk: "2mEXAi"
				}))),
				E = n("./src/reddit/components/PostList/index.tsx"),
				O = n("./src/reddit/constants/componentSizes.ts"),
				_ = n("./src/reddit/contexts/PageLayer/index.tsx"),
				j = n("./src/reddit/helpers/isComment.ts"),
				y = n("./src/reddit/helpers/isPost.ts"),
				I = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				A = n("./src/lib/logs/console.ts"),
				T = n("./src/lib/objectSelector/index.ts"),
				S = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				N = n("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				P = n("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				M = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				F = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				L = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				B = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				R = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				D = n("./src/reddit/components/ModModeReports/index.tsx"),
				U = n("./src/reddit/components/RichTextJson/index.tsx"),
				W = n("./src/reddit/components/VerticalVotes/index.tsx"),
				H = n("./src/reddit/controls/Checkbox/index.tsx"),
				Q = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				G = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				V = n("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				q = n.n(V);
			const z = p.a.div("LeftRail", q.a),
				X = p.a.wrapped(H.a, "BulkActionCheckbox", q.a),
				J = p.a.div("CommentColumn", q.a),
				K = p.a.div("VoteColumn", q.a),
				Y = p.a.wrapped(S.a, "ModToolsFlatlist", q.a),
				Z = p.a.wrapped(W.a, "Votes", q.a),
				$ = p.a.div("CommentContentWrapper", q.a),
				ee = p.a.div("ParentPostTitle", q.a),
				te = p.a.div("CommentParentWrapper", q.a),
				ne = Object(T.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var se = Object(N.b)(e => {
					const {
						className: t,
						comment: n,
						commentPermalink: s,
						flair: a,
						isCheckboxSelected: r = !1,
						onIgnoreReports: o,
						onVoteClick: i,
						showModTools: c,
						subreddit: l,
						showBulkActionCheckbox: m,
						toggleCheckbox: p
					} = e, u = Object(R.d)(n), b = Object(h.c)(n);
					return d.a.createElement(P.a, {
						className: Object(x.a)(t, q.a.Component, q.a.UnthreadedCommentContainer, {
							[q.a.isBanned]: !!n.bannedBy,
							[q.a.isReported]: Object(G.a)(n)
						}),
						clickTrackingId: n.id,
						permalink: s
					}, d.a.createElement(z, {
						className: Object(x.a)({
							[q.a.hasBorder]: !!n.bannedBy || Object(G.a)(n)
						})
					}, m && d.a.createElement(X, {
						isCheckboxSelected: r,
						toggleCheckbox: p
					})), d.a.createElement(K, null, d.a.createElement(Z, {
						compact: !1,
						model: n,
						onVoteClick: i,
						scoreClassName: q.a.score
					})), d.a.createElement(J, null, d.a.createElement(te, null, n.postTitle && d.a.createElement(ee, null, n.postTitle), n.postAuthor && d.a.createElement(L.a, {
						comment: n
					})), d.a.createElement($, null, d.a.createElement(M.a, {
						comment: n
					}, d.a.createElement(U.a, {
						content: Object(Q.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: ne(e)
					}), d.a.createElement(F.a, {
						comment: n,
						flair: a,
						subredditName: l ? l.displayText : null
					}), u && d.a.createElement(B.a, {
						thing: n
					}), b && d.a.createElement(D.a, {
						onIgnoreReports: o,
						reportable: n
					}), c && !n.isDeleted && d.a.createElement(Y, {
						comment: n
					})))))
				}),
				ae = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				re = n("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				oe = n.n(re);
			const ie = p.a.div("VoteSpacer", oe.a),
				de = p.a.div("ContentWrapper", oe.a),
				ce = p.a.wrapped(F.a, "Meta", oe.a),
				le = p.a.div("CommentParentWrapper", oe.a),
				me = p.a.div("CommentContentWrapper", oe.a),
				pe = Object(T.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var ue = Object(N.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: n,
						commentPermalink: s,
						flair: a,
						hasReports: r,
						isCheckboxSelected: o = !1,
						onIgnoreReports: i,
						onVoteClick: c,
						showModTools: l,
						subreddit: m,
						showBulkActionCheckbox: p,
						toggleCheckbox: u
					} = e, b = Object(R.d)(n);
					return d.a.createElement(P.a, {
						className: t,
						clickTrackingId: n.id,
						permalink: s
					}, d.a.createElement(ae.a, {
						model: n,
						handleVote: c,
						showBulkActionCheckbox: p,
						isCheckboxSelected: o,
						toggleCheckbox: u
					}), d.a.createElement(ie, null, d.a.createElement(de, null, d.a.createElement(le, null, n.postAuthor && d.a.createElement(L.a, {
						comment: n,
						subredditOrProfile: m
					}), n.postTitle && d.a.createElement(N.a, null, n.postTitle)), d.a.createElement(M.a, {
						comment: n
					}, d.a.createElement(me, null, d.a.createElement(U.a, {
						content: Object(Q.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: pe(e)
					})), b && d.a.createElement(B.a, {
						thing: n
					}), r && d.a.createElement(D.a, {
						onIgnoreReports: i,
						reportable: n
					}), d.a.createElement(ce, {
						comment: n,
						flair: a
					}))), l && !n.isDeleted && d.a.createElement(S.a, {
						comment: n
					})))
				}, "Component", oe.a)),
				be = n("./src/reddit/constants/postLayout.ts");
			const he = {
					[be.g.Large]: ue,
					[be.g.Medium]: N.c,
					[be.g.Classic]: N.c,
					[be.g.Compact]: se
				},
				fe = e => null;
			var xe = n("./src/reddit/models/Flair/index.ts"),
				ge = n("./src/reddit/models/Media/index.ts"),
				we = n("./src/reddit/models/ModQueue/index.ts"),
				Ce = n("./src/reddit/selectors/meta.ts"),
				ve = n("./src/reddit/selectors/modQueue.ts"),
				ke = n("./src/reddit/selectors/subreddit.ts"),
				Ee = n("./src/config.ts"),
				Oe = n("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				_e = n.n(Oe);
			const {
				fbt: je
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ye = `${Ee.a.assetPath}/img/snoomoji/cat_blep.png`, Ie = p.a.div("Container", _e.a), Ae = p.a.div("Image", _e.a), Te = p.a.div("Title", _e.a), Se = p.a.div("Text", _e.a);
			var Ne = () => d.a.createElement(Ie, null, d.a.createElement(Ae, {
					style: {
						backgroundImage: `url(${ye})`
					}
				}), d.a.createElement(Te, null, je._("The queue is clean!", null, {
					hk: "3d14fC"
				})), d.a.createElement(Se, null, je._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Pe = n("./src/reddit/components/PostList/Placeholder.tsx");
			const Me = Object(_.u)(),
				Fe = Object(l.c)({
					layout: _.R
				});
			var Le = Me(Object(c.b)(Fe)(e => d.a.createElement(Pe.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Be = n("./node_modules/lodash/flatten.js"),
				Re = n.n(Be),
				De = n("./src/reddit/actions/tooltip.ts"),
				Ue = n("./src/reddit/icons/fonts/index.tsx"),
				We = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				He = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				Qe = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				Ge = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				Ve = n("./src/higherOrderComponents/asTooltip.tsx"),
				qe = n("./src/reddit/actions/modal.ts"),
				ze = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				Xe = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Je = n("./src/reddit/controls/Dropdown/index.tsx"),
				Ke = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Ye = n("./src/reddit/helpers/flair.ts"),
				Ze = n("./src/reddit/selectors/activeModalId.ts"),
				$e = n("./src/reddit/selectors/moderatorPermissions.ts"),
				et = n("./src/reddit/selectors/postFlair.ts"),
				tt = n("./src/reddit/selectors/posts.ts"),
				nt = n("./src/reddit/selectors/tooltip.ts"),
				st = n("./src/reddit/components/TrackingHelper/index.tsx"),
				at = n("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				rt = n.n(at);
			const ot = e => d.a.createElement("button", {
					className: Object(x.a)(rt.a.StatusItem, e.className),
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? f.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, e.buttonText),
				it = Object(l.c)({
					selectedItems: ve.f
				}),
				dt = Object(c.b)(it, e => ({
					onIgnoreReports: () => e(Object(u.f)(we.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(we.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(we.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(we.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(we.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(we.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(we.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(we.a.Unspoiler))
				})),
				ct = e => e.some(e => Object(j.a)(e));
			var lt = Object(Ve.a)(dt(Object(st.c)(e => d.a.createElement("div", {
				className: Object(x.a)(rt.a.StatusList, e.className),
				style: e.style
			}, d.a.createElement("div", {
				className: rt.a.StatusContainer
			}, d.a.createElement(ot, {
				onClick: e.onIgnoreReports,
				buttonText: f.fbt._("Ignore Reports", null, {
					hk: "1hZ3hN"
				})
			}), d.a.createElement(ot, {
				onClick: e.onUnignoreReports,
				buttonText: f.fbt._("Unignore Reports", null, {
					hk: "3y089p"
				})
			}), d.a.createElement(ot, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onLock,
				buttonText: f.fbt._("Lock", null, {
					hk: "4bc0vl"
				})
			}), d.a.createElement(ot, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnlock,
				buttonText: f.fbt._("Unlock", null, {
					hk: "Pe2ML"
				})
			}), d.a.createElement(ot, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onSpoiler,
				buttonText: f.fbt._("Mark as Spoiler", null, {
					hk: "4pIu4V"
				})
			}), d.a.createElement(ot, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnspoiler,
				buttonText: f.fbt._("Unmark as Spoiler", null, {
					hk: "1ImDYd"
				})
			}), d.a.createElement(ot, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onMarkNSFW,
				buttonText: f.fbt._("Mark as NSFW", null, {
					hk: "4yS4Hz"
				})
			}), d.a.createElement(ot, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnmarkNSFW,
				buttonText: f.fbt._("Unmark as NSFW", null, {
					hk: "ZzA74"
				})
			}))))));
			const mt = Object(l.c)({
				isDropdownOpen: (e, {
					tooltipId: t
				}) => Object(nt.b)(t)(e)
			});
			var pt = Object(c.b)(mt)(Object(st.c)(e => {
					const {
						className: t,
						isDropdownOpen: n,
						tooltipId: s
					} = e;
					return d.a.createElement("div", {
						id: s,
						className: t
					}, d.a.createElement(lt, {
						isOpen: n,
						tooltipId: s
					}))
				})),
				ut = n("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				bt = n.n(ut);
			const ht = "BulkAction--BulkItemFilter",
				ft = "BulkActions--PostFlair--Modal",
				xt = Object(Ve.a)(Je.a),
				gt = e => d.a.createElement(Ke.b, {
					className: Object(x.a)(bt.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				wt = Object(l.c)({
					activeModalId: Ze.a,
					dropdownIsOpen: Object(nt.b)(ht),
					flairData: et.d,
					isApiPending: ve.a,
					moderatorPermissions: $e.m,
					posts: tt.J,
					selectedItems: ve.f
				}),
				Ct = Object(c.b)(wt, e => ({
					onApprove: () => e(Object(u.f)(we.a.Approve)),
					onFlair: (t, n) => e(Object(u.f)(we.a.Flair, t, n)),
					onOpenDropdown: () => e(Object(De.h)({
						tooltipId: ht
					})),
					onOpenModToolsDropdown: () => e(Object(De.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(u.f)(we.a.Remove)),
					onSpam: () => e(Object(u.f)(we.a.Spam)),
					onToggleFlairModal: () => e(Object(qe.i)(ft))
				})),
				vt = (e, t) => {
					const n = Re()(e.map(e => t[e].flair));
					if (n.length <= 1) return n;
					const s = [];
					return n.forEach(e => {
						if (e.type === xe.f.Text || e.type === xe.f.Richtext) {
							const t = Object(Ye.g)(e);
							o()(s, t) || s.push(t)
						}
					}), s.length > 1 ? [{
						type: xe.f.Text,
						text: f.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : n
				};
			var kt = Ct(e => {
					const {
						activeModalId: t,
						className: n,
						endNumItems: s,
						flairData: a,
						isAnyItemSelected: r,
						isApiPending: o,
						moderatorPermissions: c,
						numSelected: l,
						numShowing: m,
						onApprove: p,
						onFlair: u,
						onRemove: b,
						onSpam: h,
						onToggleFlairModal: g,
						posts: w,
						selectedItems: C,
						startNumItems: v,
						subredditId: k,
						toggleSelectAll: E,
						toggleSelectByFilter: O
					} = e, _ = [{
						name: f.fbt._("Spam filtered", null, {
							hk: "S0DJ9"
						}),
						filterType: "spamFiltered"
					}, {
						name: f.fbt._("Has reports", null, {
							hk: "1x2hhv"
						}),
						filterType: "hasReports"
					}, {
						name: f.fbt._("Self posts", null, {
							hk: "KFHYI"
						}),
						filterType: "selfPosts"
					}, {
						name: f.fbt._("Posts with flair", null, {
							hk: "18cMZD"
						}),
						filterType: "postsWithFlair"
					}, {
						name: f.fbt._("Posts", null, {
							hk: "gGGKv"
						}),
						filterType: "posts"
					}, {
						name: f.fbt._("Comments", null, {
							hk: "1F1pwI"
						}),
						filterType: "comments"
					}], j = c && c.flair, y = k && a && a.displaySettings.isEnabled && j && !ct(C);
					return d.a.createElement("div", {
						className: Object(x.a)(bt.a.ModToolsBulkOperations, n)
					}, d.a.createElement("div", {
						className: bt.a.CheckboxContainer,
						id: ht
					}, d.a.createElement(H.a, {
						className: bt.a.Checkbox,
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: E
					}), d.a.createElement(Ue.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), d.a.createElement(xt, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: ht
					}, _.map(e => d.a.createElement(gt, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => O(e.filterType)
					})))), r && d.a.createElement(i.Fragment, null, d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: o,
						text: f.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, d.a.createElement(We.a, null)), d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: o,
						text: f.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, d.a.createElement(He.a, null)), d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: o,
						text: f.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, d.a.createElement(Qe.a, null)), d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: o,
						onClick: e.onOpenModToolsDropdown
					}, d.a.createElement(pt, {
						tooltipId: "BulkActions--ModTools"
					}), d.a.createElement(Ue.a, {
						name: "list_bulleted"
					})), d.a.createElement("div", null, y && d.a.createElement(Xe.c, {
						disabled: o,
						onClick: g,
						className: bt.a.Button
					}, d.a.createElement(Ge.a, null)))), r && k && t === ft && d.a.createElement(ze.a, {
						flairs: vt(C, w),
						modalId: ft,
						onFlairChanged: ({
							previewFlair: e,
							selectedTemplateId: t
						}) => {
							u(e, t)
						},
						subredditId: k
					}), m > 0 && d.a.createElement("div", {
						className: bt.a.Text
					}, d.a.createElement("span", {
						className: bt.a.right
					}, f.fbt._("Items {startNumItems}-{endNumItems}", [f.fbt._param("startNumItems", `${v}`), f.fbt._param("endNumItems", `${s}`)], {
						hk: "1FkOkC"
					})), d.a.createElement("span", {
						className: bt.a.Bullet
					}, "•"), d.a.createElement("span", {
						className: bt.a.left
					}, f.fbt._("{numSelected} selected", [f.fbt._param("numSelected", `${l}`)], {
						hk: "4uf9Ow"
					}))))
				}),
				Et = n("./src/reddit/contexts/Post/index.tsx"),
				Ot = n("./src/reddit/components/ModQueueList/index.m.less"),
				_t = n.n(Ot);
			const jt = e => Object(y.a)(e.id),
				yt = p.a.div("ItemContainer", _t.a),
				It = p.a.div("ButtonContainer", _t.a),
				At = Object(_.u)({
					currentProfileName: _.i,
					isCommentPermalink: _.w,
					isCommentsPage: _.x,
					isFrontpage: _.A,
					isProfilePostListing: _.L,
					isTopicPage: _.Q,
					queryParams: _.W,
					pageLayer: e => e
				}),
				Tt = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: ve.b,
					loadMore: ve.d,
					modQueueListingItems: ve.c,
					origin: Ce.j,
					selectedItems: ve.f,
					subredditId: (e, t) => t.subredditName ? Object(ke.C)(e, t.subredditName) : null
				}),
				St = Object(c.b)(Tt, e => ({
					addSelectedItems: t => e(Object(u.a)({
						ids: t
					})),
					bulkSelectItems: t => e(Object(u.b)({
						ids: t
					})),
					bulkUnselectItems: t => e(Object(u.c)({
						ids: t
					})),
					fireAdPixelsOfType: (t, n) => e(Object(b.z)(t, n)),
					openPost: t => e(Object(b.L)(t))
				})),
				Nt = e => e.page ? parseInt(e.page, 10) : we.b,
				Pt = e => Nt(e) + 1,
				Mt = e => Math.max(we.b, Nt(e) - 1),
				Ft = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Nt(e) === we.b ? t : 25 * Mt(e) + t
				},
				Lt = e => Nt(e) === we.b ? we.b : 25 * Mt(e) + 1;
			var Bt;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Bt || (Bt = {}));
			class Rt extends d.a.Component {
				constructor() {
					super(...arguments), this.isCheckboxSelected = e => o()(this.props.selectedItems, e), this.isAllSelected = e => {
						const t = a()(e, this.props.selectedItems);
						return e.length > 0 && this.props.selectedItems.length > 0 && 0 === t.length
					}, this.toggleSelectedItems = (e, t) => {
						e ? this.props.bulkUnselectItems(t) : this.props.addSelectedItems(t)
					}, this.toggleSelectByFilter = e => {
						const t = [];
						if (!this.props.modQueueListingItems || !this.props.modQueueListingItems.length) return t;
						switch (e) {
							case Bt.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(y.a)(e.id) && t.push(e.id)
								});
								break;
							case Bt.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(j.a)(e.id) && t.push(e.id)
								});
								break;
							case Bt.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Bt.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(y.a)(e.id)) {
										const n = e;
										n.flair && n.flair.filter(e => e.type !== xe.f.Spoiler && e.type !== xe.f.Nsfw).length > 0 && t.push(n.id)
									}
								});
								break;
							case Bt.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(y.a)(e.id)) {
										const n = e;
										n.media && n.media.type === ge.o.TEXT && t.push(n.id)
									}
								});
								break;
							case Bt.spamFiltered:
								this.props.modQueueListingItems.forEach(e => {
									e.isSpam && t.push(e.id)
								})
						}
						this.props.bulkSelectItems(t)
					}, this.isAnyItemSelected = () => this.props.selectedItems.length > 0, this.renderItems = e => {
						let t;
						const n = !!e.page && "1" !== e.page,
							s = !!e.loadMore && !!e.modQueueListingItems && 25 === e.modQueueListingItems.length;
						return e.modQueueListingItems && e.modQueueListingItems.length && (t = e.modQueueListingItems.map(t => {
							const n = `modqueue-item-[layout: ${e.layout}]-[id: ${t.id}]`;
							if (jt(t)) {
								const s = t,
									a = Object(I.b)({
										layout: e.layout,
										post: s
									});
								return d.a.createElement(yt, {
									key: n
								}, d.a.createElement(a, {
									availableWidth: O.g,
									currentProfileName: e.currentProfileName,
									forceLoadMedia: !0,
									isCommentPermalink: e.isCommentPermalink,
									isCommentsPage: e.isCommentsPage,
									isFrontpage: e.isFrontpage,
									isProfilePostListing: e.isProfilePostListing,
									isCheckboxSelected: this.isCheckboxSelected(s.id),
									last: !0,
									pageLayer: e.pageLayer,
									postId: s.id,
									onClickPost: Object(E.b)(s.id, e),
									showBulkActionCheckbox: !0,
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(s.id), [s.id]),
									shouldShowGalleryTileOption: !0,
									isGalleryTileLayoutDefault: !0
								}))
							}
							const s = function(e, t) {
								const n = he[t];
								return void 0 === n ? (Object(A.a)(void 0, `Could not find component for layout ${t}.`), fe) : n
							}(0, e.layout);
							return d.a.createElement(yt, {
								key: n
							}, d.a.createElement(Et.a, {
								postId: t.postId
							}, d.a.createElement(s, {
								commentId: t.id,
								hasReports: Object(h.c)(t),
								highlight: !1,
								isCheckboxSelected: this.isCheckboxSelected(t.id),
								showBulkActionCheckbox: !0,
								showModTools: !0,
								toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(t.id), [t.id]),
								trackClick: e.sendEventWithName
							})))
						})), d.a.createElement("div", null, d.a.createElement("div", null, t), d.a.createElement(It, null, d.a.createElement(k, {
							prevButtonEnabled: n,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Mt(e),
								after: null
							}),
							nextButtonEnabled: s,
							nextTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Pt(e),
								after: e.loadMore
							})
						})))
					}
				}
				componentWillUnmount() {
					this.props.bulkUnselectItems(this.props.selectedItems)
				}
				UNSAFE_componentWillUpdate(e) {
					e.pageName === this.props.pageName && e.page === this.props.page && e.profileName === this.props.profileName && e.subredditName === this.props.subredditName && e.postTypeFilter === this.props.postTypeFilter || this.props.bulkUnselectItems(this.props.selectedItems)
				}
				render() {
					const {
						props: e
					} = this, t = e.modQueueListingItems && e.modQueueListingItems.length ? e.modQueueListingItems.map(e => e.id) : [], n = e.selectedItems.length;
					return d.a.createElement("div", null, d.a.createElement(kt, {
						endNumItems: Ft(e),
						numSelected: n,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Lt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? d.a.createElement(Ne, null) : e.isModQueueListingPending ? d.a.createElement(Le, null) : null)
				}
			}
			t.a = At(St(Rt))
		},
		"./src/reddit/components/PaginationButtons/index.m.less": function(e, t, n) {
			e.exports = {
				buttonContainer: "_1kLu6euoyZ3I2dqDVrxoZD",
				routerLink: "_3k7SslJt4xhPIXKtoe8DFf",
				mDisabled: "_1VgBJV1BqaXyZVPBXEv-KC"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			}));
			var s, a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = n("./src/reddit/components/FlairPreview/index.tsx"),
				h = n("./src/reddit/components/FlairSearch/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/trackers/postComposer.ts"),
				g = n("./src/reddit/models/Flair/index.ts"),
				w = n("./src/reddit/selectors/postFlair.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				k = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				E = n.n(k);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const O = (e, t = !1, n = s.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				_ = Object(d.c)({
					flairData: w.d,
					subreddit: C.R
				});
			class j extends o.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(x.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(x.b)()), this.setSelectedFlair(null)
					}, this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					};
					const t = Object(v.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(v.c)(this.props.flairs) || null;
					return Object(v.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: s,
						subreddit: r
					} = e, i = r.displayText, {
						templates: d,
						templateIds: c
					} = s, {
						canSave: l
					} = this.canSave();
					return o.a.createElement(u.a, {
						className: n
					}, o.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: a.fbt._("Select {subredditName} flair", [a.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), o.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: a.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), o.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: r.id,
						templates: d,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), o.a.createElement("div", {
						className: E.a.buttonsRow
					}, o.a.createElement(f.l, {
						disabled: !l,
						onClick: this.onApply
					}, a.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), o.a.createElement(f.o, {
						className: E.a.clearButton,
						onClick: this.onClear
					}, a.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const y = Object(i.b)(_, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(j);
			t.a = Object(l.a)(Object(c.c)(y))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/PostLeftRail/index.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.tsx"),
				c = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = n.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: f,
					isOverlay: x,
					isVoteCountAnimation: g,
					postId: w,
					shouldShowUpvoteRatioOnHover: C
				} = e, v = `upvote-button-${t.id}${x?"-overlay":""}`;
				return a.a.createElement(o.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: f
				}, s && a.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), a.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: f,
					upvoteTooltipId: v,
					isVoteCountAnimation: g,
					isCountAnimShadowTestEnabled: u,
					postId: w,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: C
					}),
					shouldShowUpvoteRatioOnHover: C
				}))
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, n) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = n.n(i);
			const c = e => a.a.createElement("button", {
					className: Object(r.a)(d.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && a.a.createElement("span", {
					className: Object(r.a)(d.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = o.a.wrapped(c, "ApproveButton", d.a),
				m = o.a.wrapped(c, "RemoveButton", d.a),
				p = e => a.a.createElement("button", {
					className: Object(r.a)(d.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/Widgets/ModSupportLinks/index.m.less": function(e, t, n) {
			e.exports = {
				ExternalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				externalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				InternalLink: "_3OMHgk6-gSH2TqxSTFsOXZ",
				internalLink: "_3OMHgk6-gSH2TqxSTFsOXZ"
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(i);
			t.a = e => a.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, a.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/reddit/controls/LayoutSwitch/index.m.less"),
				g = n.n(x);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => Object(d.a)(g.a.iconStyles, e.className, {
					[g.a.mRedditStyle]: e.redditStyle
				}),
				v = ({
					className: e,
					redditStyle: t,
					...n
				}) => r.a.createElement(h.a, w({
					name: "view_compact",
					className: C({
						className: e,
						redditStyle: t
					})
				}, n)),
				k = ({
					className: e,
					redditStyle: t,
					...n
				}) => r.a.createElement(h.a, w({
					name: "view_classic",
					className: C({
						className: e,
						redditStyle: t
					})
				}, n)),
				E = ({
					className: e,
					redditStyle: t,
					...n
				}) => r.a.createElement(h.a, w({
					name: "view_card",
					className: C({
						className: e,
						redditStyle: t
					})
				}, n)),
				O = ({
					isActive: e,
					...t
				}) => r.a.createElement("button", w({
					className: Object(d.a)(g.a.layoutButton, {
						[g.a.mIsActive]: e
					})
				}, t)),
				_ = Object(b.u)(),
				j = Object(i.c)({
					postLayout: b.R,
					redditStyle: b.D
				}),
				y = Object(o.b)(j, e => ({
					onListingLayoutChange: (t, n) => e(Object(l.y)(t, n)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = _(y(Object(p.c)(e => {
				const {
					sendEvent: t,
					subredditId: n
				} = e, a = e.layout || u.e[e.postLayout];
				return r.a.createElement("div", {
					className: Object(d.a)(g.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, r.a.createElement("div", {
					className: g.a.title
				}, s.fbt._("View", null, {
					hk: "18a931"
				})), r.a.createElement("div", {
					className: g.a.iconContainer
				}, (() => [{
					layout: u.d.Card,
					Icon: E,
					text: s.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: u.d.Classic,
					Icon: k,
					text: s.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: u.d.Compact,
					Icon: v,
					text: s.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(s => {
					const o = () => (s => {
							e.onChange ? e.onChange(s) : (e.onListingLayoutChange(s, n), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: s,
								screen: Object(f.bb)(e),
								subreddit: Object(f.jb)(e)
							})))
						})(s.layout),
						i = () => e.toggleTooltip(d),
						d = "layoutSwitch--" + s.layout,
						l = s.layout === a;
					return r.a.createElement(O, {
						"aria-label": s.text,
						"aria-pressed": l,
						id: d,
						isActive: l,
						key: s.layout,
						onClick: o,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: o
					}, r.a.createElement(s.Icon, {
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle,
						isFilled: l
					}), r.a.createElement(c.c, {
						tooltipId: d,
						text: s.text
					}))
				})))
			})))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = o.a.span("metaText", c.a),
				m = e => r.a.createElement(l, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...a
				}) => {
					const o = Object(i.b)(t),
						d = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", o)], {
							hk: "2L3T21"
						}),
						c = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", o)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, a, c)
				},
				u = e => r.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Search/index.tsx"),
				i = n("./src/reddit/controls/SearchBar/index.m.less"),
				d = n.n(i);
			t.a = e => a.a.createElement("div", {
				className: Object(r.a)(d.a.searchContainer, e.className)
			}, a.a.createElement("input", {
				className: Object(r.a)(d.a.search, {
					[d.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), a.a.createElement("div", {
				className: Object(r.a)(d.a.searchIconContainer, {
					[d.a.mClickable]: !!e.onSearch,
					[d.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, a.a.createElement(o.a, null)))
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return v
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "h", (function() {
				return N
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "e", (function() {
				return M
			}));
			var s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/lib/uploadToS3/index.ts"),
				d = n("./src/redditGQL/operations/AwardSheetInfo.json"),
				c = n("./src/redditGQL/operations/AwardSheetInfoForProfile.json"),
				l = n("./src/redditGQL/operations/CreateCommunityAward.json"),
				m = n("./src/redditGQL/operations/CreateGlobalAward.json"),
				p = n("./src/redditGQL/operations/CreateModAward.json"),
				u = n("./src/redditGQL/operations/DisableAwardInCommunity.json"),
				b = n("./src/redditGQL/operations/EnableAwardInCommunity.json"),
				h = n("./src/redditGQL/operations/GlobalAwards.json"),
				f = n("./src/redditGQL/operations/ManageableAwards.json"),
				x = n("./src/redditGQL/operations/ManageableAwardsForProfile.json"),
				g = n("./src/redditGQL/operations/RemoveCommunityAward.json"),
				w = n("./src/reddit/constants/headers.ts"),
				C = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const v = (e, t, n, r) => {
					const i = {
						subreddit: t,
						filepath: n,
						mimetype: r
					};
					return Object(a.a)(Object(o.a)(e, [w.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: i
					})
				},
				k = async (e, t) => Object(i.a)(t, e), E = (e, t, n, s, a, o, i, d, c) => Object(r.a)(e, {
					...l,
					variables: {
						coinPrice: i,
						iconHeight: o,
						iconWidth: a,
						iconUrl: s,
						name: n,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), O = (e, t, n, s, a, o, i, d, c) => Object(r.a)(e, {
					...p,
					variables: {
						iconHeight: o,
						iconWidth: a,
						iconUrl: s,
						monthsOfPremium: i,
						name: n,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), _ = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: n,
					context: s,
					daysOfDripExtension: a,
					daysOfPremium: o,
					description: i,
					endsAt: d,
					giverCoinReward: c,
					iconFormat: l,
					iconHeight: p,
					iconUrl: u,
					iconWidth: b,
					isNew: h,
					name: f,
					pennyPrice: x,
					pennyDonate: g,
					startsAt: w,
					subredditCoinReward: C
				}) => Object(r.a)(s, {
					...m,
					variables: {
						awardSubType: e,
						iconFormat: l,
						iconHeight: p,
						iconWidth: b,
						iconUrl: u,
						isNew: h,
						daysOfPremium: o,
						daysOfDripExtension: a,
						description: i,
						coinPrice: t,
						coinReward: n,
						name: f,
						pennyPrice: x,
						pennyDonate: g,
						giverCoinReward: c,
						startsAt: w,
						endsAt: d,
						subredditCoinReward: C
					}
				}), j = (e, t) => Object(r.a)(e, {
					...f,
					variables: {
						subredditId: t
					}
				}), y = (e, t) => Object(r.a)(e, {
					...x,
					variables: {
						profileName: t
					}
				}), I = e => Object(r.a)(e, {
					...h
				}), A = (e, t, n) => Object(r.a)(e, {
					...d,
					variables: {
						subredditId: t,
						thingId: n,
						includeGroup: !0
					}
				}), T = (e, t, n) => Object(r.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: n,
						includeGroup: !0
					}
				}), S = (e, t) => Object(r.a)(e, {
					...g,
					variables: {
						awardId: t
					}
				}), N = (e, t, n) => Object(r.a)(e, {
					...u,
					variables: {
						awardId: t,
						subredditId: n
					}
				}), P = (e, t, n) => Object(r.a)(e, {
					...b,
					variables: {
						awardId: t,
						subredditId: n
					}
				}), M = async (e, t, n) => {
					const r = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(a.a)(Object(o.a)(e, [w.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: r
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(C.a)(e)
					})
				}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => `awardItem__${t}-${e}`
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(a.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				o = (s.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}), e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(a.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : s.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + s.fbt._("Reason by {username}:", [s.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + s.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				}),
				i = e => s.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [s.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(a.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : s.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const d = Object(a.e)(i, {
							commentId: e
						}),
						c = Object(r.g)(i, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...o.o(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == d ? void 0 : d.templateId,
							title: d ? Object(s.g)(d) : void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name
						}
					}
				},
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...o.o(e)
				})
		},
		"./src/reddit/helpers/trackers/topAwarded.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/selectors/gold/topAwarded.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t = {}) => ({
					...Object(a.h)(e, t),
					correlationId: Object(s.e)(s.a.GildingFlow, !1),
					profile: o.S(e),
					subreddit: o.jb(e)
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
						thingId: Object(r.a)(e) || void 0
					})
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(r.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/icons/svgs/TopAwarded/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const a = e => e.category === s.Supporter,
				r = e => e.category === s.Achievement
		},
		"./src/reddit/models/Gold/TopAwarded/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Active = "ACTIVE", e.Inactive = "INACTIVE"
				}(s || (s = {}))
		},
		"./src/reddit/pages/ModQueuePages/index.m.less": function(e, t, n) {
			e.exports = {
				navContainer: "_2fXn_K-CtsU5UyENumO_L5",
				innerContainer: "D4pTlu3VV6Kg_fC6HNcGD",
				mDisableFullScreen: "_3ZorTtV7KSImN0_z0ufG7H",
				title: "_1m63Tp27qAqd29Jg_JFZLD",
				navChild: "mhX_cNPq9TYWEg2o5OfDb",
				mIsActive: "_3qryNXFOCTdHneRR0QlSzp",
				sidebar: "_2mohSnAqr6vkIYT6O-pVcP"
			}
		},
		"./src/reddit/pages/ModQueuePages/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/fromPairs.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/extractQueryParams/index.ts"),
				l = n("./src/reddit/components/ModQueueList/index.tsx"),
				m = n("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/layout/page/Listing/index.tsx"),
				f = n("./src/reddit/models/ModQueue/index.ts"),
				x = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/telemetry.ts"),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/lib/classNames/index.ts"),
				v = n("./node_modules/lodash/omit.js"),
				k = n.n(v),
				E = n("./src/lib/addQueryParams/index.ts"),
				O = n("./src/reddit/controls/InternalLink/index.tsx"),
				_ = n("./src/reddit/pages/ModQueuePages/index.m.less"),
				j = n.n(_);
			const y = Object(d.c)({
				currentPage: e => e.platform.currentPage
			});
			var I = Object(i.b)(y)(e => o.a.createElement(O.a, {
				className: Object(C.a)(j.a.navChild, {
					[j.a.mIsActive]: e.isActive
				}),
				to: Object(E.a)(`/r/mod/about/${e.pathName}`, k()(e.currentPage.queryParams, ["after", "before", "page"]))
			}, e.title));
			var A = e => o.a.createElement("div", {
					className: j.a.navContainer
				}, o.a.createElement("div", {
					className: Object(C.a)(j.a.innerContainer, {
						[j.a.mDisableFullScreen]: e.disableFullscreen
					})
				}, o.a.createElement("h1", {
					className: j.a.title
				}, w.fbt._("Moderation", null, {
					hk: "ldaHk"
				})), o.a.createElement(I, {
					title: w.fbt._("Queue", null, {
						hk: "2oFkyk"
					}),
					isActive: "modqueue" === e.pageName,
					pathName: "modqueue"
				}), o.a.createElement(I, {
					title: w.fbt._("Reports", null, {
						hk: "4ea70R"
					}),
					isActive: "reports" === e.pageName,
					pathName: "reports"
				}), o.a.createElement(I, {
					title: w.fbt._("Spam", null, {
						hk: "Ho2UJ"
					}),
					isActive: "spam" === e.pageName,
					pathName: "spam"
				}), o.a.createElement(I, {
					title: w.fbt._("Edited", null, {
						hk: "40RqNB"
					}),
					isActive: "edited" === e.pageName,
					pathName: "edited"
				}), o.a.createElement(I, {
					title: w.fbt._("Unmoderated", null, {
						hk: "2YBI6E"
					}),
					isActive: "unmoderated" === e.pageName,
					pathName: "unmoderated"
				}))),
				T = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				S = n("./src/config.ts"),
				N = n("./src/lib/lessComponent.tsx"),
				P = n("./src/lib/opener/index.ts"),
				M = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				F = n("./src/reddit/components/Widgets/ModSupportLinks/index.m.less"),
				L = n.n(F);
			const B = N.a.a("ExternalLink", L.a),
				R = N.a.wrapped(O.a, "InternalLink", L.a);
			var D = () => o.a.createElement(M.a, {
				title: w.fbt._("Moderator resources", null, {
					hk: "1i4sLY"
				}),
				redditStyle: !0
			}, o.a.createElement(B, {
				href: S.a.redditModHelpUrl,
				rel: P.c,
				target: P.d.BLANK
			}, w.fbt._("Mod help center", null, {
				hk: "1LSJPB"
			})), o.a.createElement(B, {
				href: `${S.a.redditUrl}/help/healthycommunities/`,
				rel: P.c,
				target: P.d.BLANK
			}, w.fbt._("Moderator guidelines", null, {
				hk: "15P5n5"
			})), o.a.createElement(R, {
				to: "/r/modsupport",
				rel: P.c,
				target: P.d.BLANK
			}, "r/modsupport"), o.a.createElement(B, {
				href: `${S.a.redditHelpUrl}/en/submit-request/rusername`,
				rel: P.c,
				target: P.d.BLANK
			}, w.fbt._("Contact Reddit", null, {
				hk: "43QJTq"
			})));
			var U = e => o.a.createElement("div", {
				className: j.a.sidebar
			}, e.subredditOrProfileUrl && o.a.createElement(T.a, null, o.a.createElement(M.a, {
				title: w.fbt._("Moderation", null, {
					hk: "K4118"
				})
			}, o.a.createElement(B, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/about/log/`,
				target: "_blank"
			}, w.fbt._("Moderation Log", null, {
				hk: "4CyDRz"
			})), o.a.createElement(B, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/wiki/config/automoderator`,
				target: "_blank"
			}, w.fbt._("Automoderator Config", null, {
				hk: "2GBjtX"
			})))), o.a.createElement(T.a, null, o.a.createElement(D, null)));
			const W = Object(b.u)(),
				H = Object(d.c)({
					queryParams: (e, {
						location: t
					}) => a()([...Object(c.a)(t.search)])
				}),
				Q = Object(d.a)(H, b.R, x.n, (e, {
					match: t
				}) => t.params.pageName, ({
					queryParams: e
				}, t, n, s) => {
					const a = e.subreddit,
						r = e.profile,
						o = e.only,
						i = `${e.page||f.b}`;
					return {
						after: e.after || "",
						layout: t,
						isModerator: n.length > 0,
						page: i,
						pageName: s,
						postTypeFilter: o,
						profileName: r,
						subredditName: a
					}
				}),
				G = Object(i.b)(Q);
			class V extends o.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: "bulk_mod_action",
						action: "click",
						noun: e,
						screen: Object(g.bb)(t)
					}))
				}
				render() {
					const {
						after: e,
						className: t,
						isModerator: n,
						layout: s,
						page: a,
						pageName: r,
						profileName: i,
						postTypeFilter: d,
						subredditName: c
					} = this.props, p = c && `r/${c}` || i && `user/${i}`, b = "unmoderated" !== r, f = b ? d : void 0;
					return o.a.createElement("div", null, n && o.a.createElement(h.a, {
						className: t,
						fitPageToContent: !0,
						disableFullscreen: s === u.g.Large,
						navBar: o.a.createElement(A, {
							disableFullscreen: s === u.g.Large,
							pageName: r
						}),
						content: o.a.Children.toArray([o.a.createElement(m.a, {
							key: i,
							postTypeFilter: f,
							profileName: i,
							sendEventWithName: this.sendEventWithName,
							showTypeFilter: b,
							subredditName: c
						}), o.a.createElement(l.a, {
							after: e,
							key: `${i}-${c}`,
							layout: s,
							page: a,
							pageName: r,
							postTypeFilter: f,
							profileName: i,
							sendEventWithName: this.sendEventWithName,
							subredditName: c
						})]),
						sidebar: o.a.createElement(U, {
							subredditOrProfileUrl: p
						})
					}))
				}
			}
			t.default = W(G(Object(p.c)(V)))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				a = n("./src/reddit/actions/gold/constants.ts"),
				r = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const o = {};
			var i = n("./node_modules/icepick/icepick.js"),
				d = n("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, n;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				m = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: (e = o, t) => {
					switch (t.type) {
						case a.pb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const o = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = s.filter(r.a).map(e => e.type),
								d = s.filter(r.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: o,
									achievementTypes: i,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = c, t) => {
					switch (t.type) {
						case d.d: {
							const {
								id: n,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let a = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: o
								} of s) {
								const n = o.filter(r.a),
									s = n.map(({
										type: e
									}) => e),
									i = o.filter(r.b),
									d = i.map(({
										type: e
									}) => e),
									c = l(n),
									m = l(i);
								a = {
									...a,
									[e]: {
										achievementTypes: s,
										supporterTypes: d,
										preferredAchievementType: c,
										preferredSupporterType: m,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[n]: a
							}
						}
						case d.f: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: a,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: a,
								pendingSupporterType: r
							}))
						}
						case d.g: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: a,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								preferredAchievementType: a,
								preferredSupporterType: r,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.h: {
							const {
								subredditId: n,
								userId: s,
								isHidden: a
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								isHidden: a
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = m, t) => {
					switch (t.type) {
						case d.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const a = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								n = {
									...n,
									[t]: a.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(a.c)(e, {
						experimentEligibilitySelector: r.K,
						experimentName: s.Cc
					});
					return !(!t || Object(s.wf)(t))
				},
				i = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: r.K,
						experimentName: s.Cc
					}) === s.hd.ListingEnabled
				}
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "a", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/selectors/commentSelector.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(r.a)({
				features: {
					powerups: o.a
				}
			});
			const i = (e, {
					subredditId: t
				}) => {
					var n;
					return t ? null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t] : null
				},
				d = (e, {
					subredditId: t
				}) => {
					var n, s;
					return t ? null === (s = null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				c = (e, {
					subredditId: t,
					userId: n
				}) => {
					var s, a;
					return t && n ? null === (a = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === a ? void 0 : a[n] : null
				},
				l = Object(s.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(s.a)([d, l], (e, t) => e && t ? e[t] : null),
				p = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				u = Object(s.a)([d, p], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([d, c], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						a = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === s || e.type === a
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				h = Object(s.a)([i, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: s,
						flairsByType: a
					} = e, {
						supporterTypes: r,
						achievementTypes: o,
						preferredSupporterType: i,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(n, r, a, c || i),
						achievementFlairs: g(s, o, a, l || d)
					}
				}),
				f = Object(s.a)([c], e => !!e && e.isHidden),
				x = Object(s.a)([i, c, u], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				g = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				w = (e, {
					commentId: t
				}) => {
					const n = Object(a.b)(e, {
							commentId: t
						}),
						s = null == n ? void 0 : n.subredditId,
						r = null == n ? void 0 : n.authorId;
					return !(!s || !r) && !!((e, {
						subredditId: t,
						userId: n
					}) => {
						var s, a, r;
						return t && n ? null === (r = null === (a = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === a ? void 0 : a[n]) || void 0 === r ? void 0 : r[t] : null
					})(e, {
						subredditId: s,
						userId: r
					})
				}
		},
		"./src/reddit/selectors/gold/topAwarded.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			const s = e => e.users.topAwarders.currentPostId,
				a = e => e.users.topAwarders.api.pending,
				r = e => e.users.topAwarders.api.error,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages.3a60c997f9b5256aad89.js.map