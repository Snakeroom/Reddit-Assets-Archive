// https://www.redditstatic.com/desktop2x/ModQueuePages.9563b04e9c91b02f9bdd.js
// Retrieved at 2/3/2022, 4:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages"], {
		"./node_modules/lodash/includes.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseIndexOf.js"),
				a = n("./node_modules/lodash/isArrayLike.js"),
				r = n("./node_modules/lodash/isString.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				d = n("./node_modules/lodash/values.js"),
				i = Math.max;
			e.exports = function(e, t, n, c) {
				e = a(e) ? e : d(e), n = n && !c ? o(n) : 0;
				var l = e.length;
				return n < 0 && (n = i(l + n, 0)), r(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && s(e, t, n) > -1
			}
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/gold/constants.ts");
			const d = Object(s.a)(o.mb),
				i = Object(s.a)(o.t),
				c = e => async t => {
					await t(i({
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
				d = n("./src/reddit/endpoints/gold/communityAwards.ts"),
				i = n("./src/reddit/actions/gold/constants.ts");
			const c = Object(a.a)(i.lb),
				l = e => async (t, n, {
					apiContext: a
				}) => {
					t(c());
					try {
						if ((await Object(d.e)(a(), e.id)).error) throw new Error;
						await t(Object(r.f)({
							kind: o.b.SuccessAward,
							duration: r.a,
							text: s.fbt._("{award name} Award successfully reported for review.", [s.fbt._param("award name", e.name)], {
								hk: "1fHb5Q"
							})
						}))
					} catch (i) {
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
				d = n("./src/reddit/endpoints/gold/topAwarded.ts"),
				i = n("./src/reddit/actions/modal.ts"),
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
							const s = await Object(d.b)(o(), {
									top: t,
									postId: e
								}),
								a = s.body;
							if (s.ok) await n(m({
								postId: e,
								...a.data.postInfoById.topAwarders
							}));
							else if (a.errors && a.errors.length) throw new Error(a.errors.map(e => e.message).join("; "))
						} catch (i) {
							Object(s.b)() || console.error(i), r.c.captureMessage(i), n(p(i.message))
						}
					}
				}, b = Object(a.a)(c.yb), h = e => async (t, n) => {
					t(b({
						postId: e
					})), t(Object(i.h)(o.a.ECON_TOP_AWARDERS))
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
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/gold/giveAward.ts"),
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
					} catch (d) {
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
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				C = n("./src/reddit/helpers/isPost.ts"),
				E = n("./src/reddit/helpers/trackers/gild.ts"),
				k = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/models/Gold/Award.ts"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				j = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
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
						tooltipId: d
					} = this.props, {
						userGiven: i,
						shouldAnimate: c
					} = this.state, l = Object(U.a)(e.id, o.id);
					return r.a.createElement("span", {
						className: V.a.awardPillContainer,
						id: d,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, r.a.createElement("button", {
						className: Object(P.a)(t, V.a.awardPill, {
							[V.a.userGiven]: i
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
						tooltipId: d
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
				} = e, o = "right" === n, d = s.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), i = s.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return r.a.createElement("div", {
					className: Object(P.a)(Z.a.buttonContainer, {
						[Z.a.right]: o
					}, t)
				}, r.a.createElement("button", {
					className: Z.a.scrollButton,
					name: o ? i : d,
					onClick: a
				}, r.a.createElement(K.a, {
					className: Z.a.chevronIcon
				})))
			});
			const ee = (e, t) => {
				let n = `${Object(C.a)(e)?"Post":"Comment"}AwardBadges--${e}`;
				return t && (n = `${n}--${t}`), n
			};
			var te = n("./src/reddit/helpers/trackers/topAwarded.ts"),
				ne = n("./src/reddit/hooks/useTracking.ts"),
				se = n("./src/reddit/actions/gold/topAwarded.ts"),
				ae = n("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				re = n("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				oe = n.n(re);
			const {
				fbt: de
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ie = e => {
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
					})), r.a.createElement("span", null, de._("Top Awarded", null, {
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
						multiline: d,
						post: i,
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
					} = this.state, g = e.length > 0, w = ee(i.id, h);
					return r.a.createElement("div", {
						className: Object(P.a)(le.a.awardBadges, t, {
							[le.a.noAwards]: !g,
							[le.a.multiline]: d
						}),
						ref: this.plaqueRef
					}, f && r.a.createElement($, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (i.topAwardedType === F.a.Active || i.topAwardedType === F.a.Inactive) && !s && o && r.a.createElement(ie, {
						awardsPlaqueStyle: !0,
						post: i
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = i, n = t[e.id], s = a.icon32[e.id], o = a.icon128[e.id];
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
							post: i,
							prefersReducedMotion: c,
							tooltipId: `${w}-${e.id}`,
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !n && r.a.createElement(D, {
						className: le.a.clickablePlaqueItem,
						onAddAward: l
					}), !d && r.a.createElement("div", {
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
						onHideTooltip: d,
						onOpenReportFlow: i,
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
						onMouseLeave: d
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
						onOpenReportFlow: () => i(e)
					}))
				}
			}
			var we = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ve = n("./src/reddit/icons/fonts/index.tsx"),
				Ce = n("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				Ee = n.n(Ce);
			var ke = e => {
				const {
					className: t,
					onClick: n
				} = e;
				return r.a.createElement("button", {
					className: Object(P.a)(t, Ee.a.badgeButton, Ee.a.visibilityEffect),
					onClick: n
				}, r.a.createElement(ve.a, {
					name: "award",
					className: Ee.a.icon
				}))
			};
			var Oe, _e = e => {
					const {
						awards: t,
						className: n,
						hideBadgeButton: a,
						hideTopAwardedBadge: o,
						icons: d,
						isInEconLeaderboardsExperiment: i,
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
					let v = [];
					v = h ? t : t.length > 5 ? t.slice(0, 4) : t;
					const E = !a && x.isGildable && t.length > 0,
						k = t.length > v.length ? t.slice(v.length).reduce((e, t) => e + (x.awardCountsById && x.awardCountsById[t.id] || 0), 0) : 0,
						O = s.fbt._("& {hidden award count} More", [s.fbt._param("hidden award count", k.toLocaleString())], {
							hk: "1OnmAi"
						});
					return r.a.createElement("div", {
						className: Object(P.a)(Ee.a.awardBadges, n)
					}, Object(C.a)(x.id) && (x.topAwardedType === F.a.Active || x.topAwardedType === F.a.Inactive) && !o && i && r.a.createElement(ie, {
						post: x
					}), v.map(e => {
						const t = x.awardCountsById ? x.awardCountsById[e.id] : 0,
							n = d.icon32[e.id];
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
					}), k > 0 && r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						"data-click-id": "awards",
						id: w,
						className: Ee.a.showAllButton,
						onClick: u,
						onMouseEnter: () => b(w),
						onMouseLeave: p
					}, O), r.a.createElement(we.c, {
						tooltipId: w,
						text: s.fbt._("View all Awards", null, {
							hk: "3JL2sD"
						})
					})), E && r.a.createElement(ke, {
						onClick: c
					}))
				},
				ye = n("./src/reddit/actions/gold/reportAward.ts"),
				je = n("./src/reddit/controls/Button/index.tsx"),
				Ie = n("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				Ae = n.n(Ie);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(Oe || (Oe = {}));
			var Te = e => {
				const t = Object(ne.a)(),
					[n, d] = Object(a.useState)(e.award.awardType === _.f.Global ? Oe.FLAG_USAGE : Oe.BEGIN),
					i = Object(o.d)(),
					c = () => {
						n === Oe.BEGIN ? t(Object(E.clickCancelAwardReportFlow)(e.award, e.thing.id)) : n === Oe.REPORT_COMMUNITY_AWARD ? t(Object(E.clickCancelReportAward)(e.award, e.thing.id)) : n === Oe.FLAG_USAGE && t(Object(E.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(E.clickConfirmReportAward)(e.award, e.thing.id)), i(Object(ye.a)(e.award)), e.onClose()
					},
					m = () => {
						t(Object(E.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), i(Object(u.f)(Object(u.e)(s.fbt._("{award name} Award successfully flagged for review.", [s.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), b.b.SuccessAward))), e.onClose()
					},
					p = r.a.createElement(r.a.Fragment, null, r.a.createElement(je.o, {
						onClick: () => {
							t(Object(E.clickReportAward)(e.award, e.thing.id)), d(Oe.REPORT_COMMUNITY_AWARD)
						},
						className: Ae.a.reportStepButton
					}, s.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), r.a.createElement(je.o, {
						onClick: () => {
							t(Object(E.clickFlagAwardUsage)(e.award, e.thing.id)), d(Oe.FLAG_USAGE)
						},
						className: Ae.a.reportStepButton
					}, s.fbt._("This award is being used inappropriately.", null, {
						hk: "Y8giW"
					})));
				switch (n) {
					case Oe.BEGIN:
						return r.a.createElement(k.a, {
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
						return r.a.createElement(k.a, {
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
						return r.a.createElement(k.a, {
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
				Ne = Object(d.c)({
					allAwards: e => e.awards.models,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(y.a)(e),
					isInEconLeaderboardsExperiment: j.b
				}),
				Pe = e => Object(C.a)(e.id) ? e.postId : e.id,
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
					triggerOverlayAnimation: () => e(Object(i.b)(Pe(t)))
				}));
			class Fe extends r.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(v.e)(v.a.GildingFlow, !0),
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
						this.props.sendEvent(Object(E.clickAwardReportFlow)(e, this.props.thing.id)), this.setState({
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
						hideCta: d,
						hideTopAwardedBadge: i,
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
						showAllAwards: v
					} = this.state, E = f.reduceAnimationsFromAwards || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, O = Object.keys(x.awardCountsById || {}), y = Object(_.r)(O.map(t => e[t]).filter(Boolean)), j = {};
					for (const s of Se) {
						const e = {};
						j[`icon${s}`] = e;
						for (const t of y) e[t.id] = Object(I.c)({
							award: t,
							postOrComment: x,
							size: s,
							prefersReducedMotion: E
						})
					}
					const A = !!o && o.id === x.authorId;
					return r.a.createElement(r.a.Fragment, null, n ? r.a.createElement(be, {
						awards: y,
						awardsCountInView: t,
						className: a,
						hideAddAwardButton: d || !x.isGildable || A,
						hideTopAwardedBadge: i,
						icons: j,
						isInEconLeaderboardsExperiment: l,
						multiline: !!p,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: x,
						prefersReducedMotion: E,
						tooltipType: w,
						triggerOverlayAnimation: g
					}) : r.a.createElement(_e, {
						awards: y,
						className: a,
						hideBadgeButton: d || !m,
						hideTopAwardedBadge: i,
						icons: j,
						isInEconLeaderboardsExperiment: l,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: u,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: b,
						showAllAwards: v || !!p,
						thing: x,
						tooltipType: w
					}), c && o && this.state.selectedAward && r.a.createElement(k.a, {
						actionText: s.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: A ? Object(C.a)(x.id) ? s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(C.a)(x.id) ? s.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
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
			const d = s.a.wrapped(a.c, "RestrictedButton", o.a);
			t.a = d
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
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
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
				v = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				k = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				O = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Show/index.tsx"),
				y = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				I = n.n(j);
			const A = Object(h.u)(),
				T = e => `Distinguish--Dropdown--${e}`,
				S = Object(d.c)({
					currentUser: v.k,
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
				moderatorPermissions: d,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: p,
				onLockComment: b,
				onRemoveComment: h,
				onShowComment: x,
				onSpamComment: g,
				onToggleDistinguishDropdown: w,
				sendEvent: v,
				...j
			}) => {
				const A = Object(u.b)(t),
					T = t.isApproved && A,
					S = !t.isRemoved || t.bannedBy === c.l,
					N = o,
					P = e => v(Object(f.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || A) && r.a.createElement(y.a, {
					text: T ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), P("approve")
					}
				}, r.a.createElement(C.a, {
					className: I.a.icon
				})), S && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, {
					text: t.bannedBy === c.l ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						h(), t.bannedBy === c.l ? P("confirm_remove") : P("remove")
					}
				}, r.a.createElement(k.a, {
					className: I.a.icon
				})), r.a.createElement(y.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						g(), P("spam")
					}
				}, r.a.createElement(O.a, {
					className: I.a.icon
				}))), r.a.createElement(y.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), P(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(E.a, {
					className: I.a.icon
				})), N && r.a.createElement(y.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						x()
					}
				}, r.a.createElement(_.a, {
					className: Object(i.a)(I.a.icon, I.a.Show)
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
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				p = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				u = n.n(p);
			const b = e => {
				const {
					className: t,
					comment: n,
					isCommentAuthorBlocked: a,
					isAuthorDeleted: o,
					isLivestreaming: d,
					isStrong: c,
					style: l,
					collapsed: p
				} = e;
				return p && a ? r.a.createElement("p", {
					className: Object(i.a)(u.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					className: Object(i.a)(u.a.commentAuthorLink, t),
					author: n.author,
					isCommentAuthorBlocked: a,
					isAuthorDeleted: o,
					isLivestreaming: d,
					isStrong: c,
					style: l
				}, n.author)
			};
			var h = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				f = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = n("./src/reddit/components/Flair/index.tsx"),
				g = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				w = n("./src/reddit/components/PostTopMeta/index.tsx"),
				v = n("./src/reddit/controls/MetaData/index.tsx"),
				C = n("./src/reddit/helpers/flair.ts"),
				E = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/models/Comment/index.ts"),
				_ = n("./src/reddit/selectors/gold/powerups/index.ts"),
				y = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				I = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				A = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				T = n.n(A);
			const S = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: s,
				isStrong: a,
				renderedInOverlay: o,
				collapsed: d
			}) => r.a.createElement(I.b, {
				className: Object(i.a)(T.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: o ? w.c.Lightbox : void 0,
				isCommentAuthorBlocked: Object(O.g)(n),
				collapsed: d
			}, r.a.createElement(j.b, {
				ignore: Object(O.f)(n) || !!n.distinguishType && n.distinguishType !== y.G.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(b, {
				className: e,
				comment: n,
				isLivestreaming: s,
				isStrong: a,
				isCommentAuthorBlocked: Object(O.g)(n),
				isAuthorDeleted: Object(O.f)(n),
				collapsed: d
			})));
			var N = n("./src/config.ts"),
				P = n("./src/reddit/actions/tooltip.ts"),
				M = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const F = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var L = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				B = n.n(L);
			const R = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const a = Object(o.d)(),
					d = () => a(Object(P.h)({
						tooltipId: c
					})),
					c = F("CommentTopMeta--cakeday--", t, n),
					l = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(i.a)(B.a.cakedayIcon, e),
					src: `${N.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: c,
					onMouseEnter: d,
					onMouseLeave: d,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(M.c, {
					tooltipId: c,
					text: l
				}))
			};
			var D = n("./src/lib/addQueryParams/index.ts"),
				U = n("./src/reddit/actions/comment/index.ts"),
				W = n("./src/reddit/actions/post.ts"),
				H = n("./src/reddit/components/HumanDate/index.tsx"),
				Q = n("./src/reddit/helpers/path/index.ts");
			const G = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						permalink: a,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: i
					} = e, c = Object(o.d)(), l = F("CommentTopMeta--Created--", n.id, d), m = () => c(Object(P.h)({
						tooltipId: l
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(D.a)(a, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: l,
						onClick: e => {
							V(c, n.id), i && (e.preventDefault(), c(Object(W.Y)(Object(Q.b)(a), n.postId)))
						},
						onMouseEnter: m,
						onMouseLeave: m,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(H.d, {
						seconds: n.created,
						shortenedUnit: s
					}), r.a.createElement(M.c, {
						tooltipId: l
					}, r.a.createElement(H.b, {
						seconds: n.created
					})))
				},
				V = (e, t) => {
					window.addEventListener("focus", (function n() {
						q(e, t, n)
					}))
				},
				q = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(U.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(U.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var z = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				X = n.n(z);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = () => r.a.createElement(v.a, {
				className: X.a.crowdControlText
			}, J._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Y = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				Z = n.n(Y);
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(v.a, {
				className: Z.a.editedText
			}, $._("edited {time}", [$._param("time", r.a.createElement(H.d, {
				seconds: t,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var te = n("./src/reddit/helpers/isRemoved.ts"),
				ne = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				se = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				ae = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				re = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				oe = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				de = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				ce = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				le = n.n(ce);
			const me = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: a
			}) => {
				const d = Object(o.d)(),
					i = e => () => d(Object(P.f)({
						tooltipId: e
					})),
					c = () => d(Object(P.i)()),
					l = t => F(t, e.id, a),
					m = l("CommentTopMeta--Approve--"),
					p = l("CommentTopMeta--Remove--"),
					u = l("CommentTopMeta--Report--"),
					b = l("CommentTopMeta--Spam--"),
					h = i(p);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae.a, {
					className: le.a.approveIcon,
					desc: Object(ne.a)(e),
					id: m,
					onMouseEnter: i(m),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(M.c, {
					tooltipId: m,
					text: Object(ne.a)(e)
				})), Object(te.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(oe.a, {
					className: le.a.removeIcon,
					desc: Object(ne.b)(e),
					id: p,
					onMouseEnter: h,
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(M.c, {
					tooltipId: p,
					text: Object(ne.b)(e)
				})), Object(te.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: le.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => d(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(te.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && r.a.createElement("a", {
					className: le.a.removalReason,
					onMouseEnter: h,
					onMouseLeave: c
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(re.a, {
					className: le.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: le.a.spamIcon,
					desc: Object(ne.d)(e),
					id: b,
					onMouseEnter: i(b),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(M.c, {
					tooltipId: b,
					text: Object(ne.d)(e)
				})), Object(se.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: le.a.reportIcon,
					desc: Object(ne.c)(e.numReports),
					id: u,
					onMouseEnter: i(u),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(M.c, {
					tooltipId: u,
					text: Object(ne.c)(e.numReports)
				})))
			};
			var pe, ue = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(pe || (pe = {}));
			var be = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				he = n.n(be);
			const fe = {
					[pe.Admin]: {
						color: ue.c,
						label: s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[pe.Mod]: {
						color: ue.d,
						label: s.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[pe.Op]: {
						color: ue.a,
						label: s.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[pe.AlumniAdmin]: {
						color: ue.c,
						label: s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[pe.Contractor]: {
						color: ue.a,
						label: s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				xe = e => {
					const t = Object(o.d)(),
						n = function(e) {
							return e.isAdmin ? pe.Admin : e.isMod ? pe.Mod : e.isOp ? pe.Op : e.distinguishType === y.G.ALUMNI_ADMIN ? pe.AlumniAdmin : e.authorIsContractor ? pe.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === pe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: a,
						label: d,
						tooltipTemplate: c
					} = fe[n], l = F(s, e.comment.id, e.renderedInOverlay), m = c(e), p = () => t(Object(P.h)({
						tooltipId: l
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(i.a)(he.a.role, e.className),
						style: {
							color: a
						},
						id: l,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, d), n === pe.Mod && r.a.createElement(ge, null)), r.a.createElement(M.c, {
						tooltipId: l,
						text: m
					}))
				},
				ge = () => r.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: he.a.modAchievement,
					src: `${N.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var we = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ve = n.n(we);
			const {
				fbt: Ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ee = () => r.a.createElement(v.a, {
				className: ve.a.stickiedText
			}, Ce._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ke = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Oe = n.n(ke);
			const _e = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: a,
					comment: d,
					flair: c,
					ignoreLock: m,
					isLivestreaming: p,
					permalink: u,
					renderedInOverlay: b,
					subredditDisplayText: y,
					renderContractorBadge: j
				} = e, I = Object(k.a)(), A = d.subredditId, T = Object(o.e)(e => Object(_.h)(e, {
					subredditId: A
				}));
				if (d.isDeleted) return r.a.createElement("div", {
					className: Object(i.a)(Oe.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Oe.a.authorLine
				}, r.a.createElement("span", {
					className: Oe.a.metaText
				}, d.deletedBy === O.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(v.c, {
					className: Oe.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: Oe.a.metaText,
					comment: d,
					compact: !0,
					permalink: u,
					renderedInOverlay: b
				})));
				return r.a.createElement("div", {
					className: Object(i.a)(Oe.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Oe.a.authorLine
				}, !Object(O.f)(d) && r.a.createElement(f.b, {
					className: Oe.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: d.subredditId,
					userId: d.authorId,
					uniqueIdentifier: d.id
				}), r.a.createElement("div", {
					className: Oe.a.baselineItem
				}, r.a.createElement(S, {
					authorClassName: Oe.a.author,
					comment: d,
					isLivestreaming: p,
					renderedInOverlay: b,
					collapsed: n
				})), a && r.a.createElement(K, null), r.a.createElement(xe, {
					className: Oe.a.role,
					comment: d,
					subredditDisplayText: y,
					renderContractorBadge: j,
					renderedInOverlay: b
				}), d.isAuthorCakeday ? r.a.createElement(R, {
					className: Oe.a.cakeDay,
					commentId: d.id,
					renderedInOverlay: b
				}) : !Object(O.f)(d) && T && r.a.createElement(h.a, {
					className: Oe.a.achievementFlair,
					subredditId: d.subredditId,
					userId: d.authorId,
					onHover: () => {
						I(Object(E.b)(d.id, d.subredditId, d.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(g.a, {
					className: Oe.a.cryptoPoints,
					contentId: d.id,
					subredditId: d.subredditId,
					userId: d.authorId,
					username: d.author
				}), r.a.createElement(v.c, {
					className: Oe.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: Oe.a.metaText,
					comment: d,
					compact: !0,
					permalink: u,
					renderedInOverlay: b
				}), d.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: Oe.a.separator
				}), r.a.createElement(Ee, null)), d.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: Oe.a.separator
				}), r.a.createElement(ee, {
					compact: !0,
					editedAt: d.editedAt
				})), r.a.createElement(me, {
					comment: d,
					ignoreLock: m,
					renderedInOverlay: b
				}), r.a.createElement(l.a, {
					thing: d,
					tooltipType: b ? w.c.Lightbox : void 0
				})), c && !Object(C.o)(c) && r.a.createElement("span", {
					className: Oe.a.userFlairLine
				}, r.a.createElement(x.b, {
					className: Oe.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var ye = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				je = n("./src/reddit/selectors/economics.ts"),
				Ie = n("./src/reddit/models/Flair/index.ts"),
				Ae = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Te = n("./src/reddit/selectors/subreddit.ts"),
				Se = n("./src/reddit/selectors/userFlair.ts"),
				Ne = n("./src/reddit/selectors/comments.ts"),
				Pe = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Me = n.n(Pe);

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Le = c.a.wrapped(x.b, "RightPositionedAuthorFlair", Me.a),
				Be = c.a.span("DeletedText", Me.a),
				Re = c.a.wrapped(v.a, "MetaSeparator", Me.a),
				De = Object(o.b)(() => Object(d.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(je.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(Te.G)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Se.e)(e, {
						subredditId: t.subredditId
					}),
					commentPermalink: (e, t) => Object(Ne.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Ae.b
				}));
			t.a = De(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: a,
					comment: o,
					commentPermalink: d,
					commentsPageKey: c,
					compact: m,
					flair: p,
					flairPosition: u,
					hasBadges: b,
					isBlockingInterstitialEnabled: h,
					isLivestreaming: C,
					isPostComment: E,
					ignoreFlairPosition: k,
					ignoreLock: _,
					renderContractorBadge: y,
					renderedInOverlay: j,
					subredditDisplayText: I,
					userHasNft: A
				} = e, T = r.a.createElement(r.a.Fragment, null, r.a.createElement(ye.b, {
					comment: o,
					commentId: o.id
				}), r.a.createElement(ye.a, {
					comment: o,
					commentId: o.id,
					commentsPageKey: c
				}));
				if (E) return r.a.createElement(r.a.Fragment, null, r.a.createElement(_e, {
					className: Object(i.a)(n, {
						[Me.a.collapsed]: s
					}),
					collapsedBecauseCrowdControl: a,
					comment: o,
					flair: p || null,
					ignoreLock: _,
					isLivestreaming: C,
					permalink: d,
					renderedInOverlay: j,
					subredditDisplayText: I,
					renderContractorBadge: !!y,
					collapsed: s
				}), T);
				if (o.isDeleted) return r.a.createElement(Ue, Fe({}, e, {
					className: Object(i.a)(n, Me.a.container, {
						[Me.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(We, Fe({}, e, {
					className: Object(i.a)(n, Me.a.container, {
						[Me.a.collapsed]: s
					})
				}));
				const N = !k && u === Ie.b.Left;
				return r.a.createElement("div", {
					className: Object(i.a)(n, Me.a.container, {
						[Me.a.collapsed]: s,
						[Me.a.hasBadges]: b,
						[Me.a.liveStreaming]: C
					}),
					"data-testid": "comment-top-meta"
				}, p && N && r.a.createElement(x.b, {
					flair: p,
					forceSmallEmojis: m
				}), !Object(O.f)(o) && r.a.createElement(f.b, {
					className: Me.a.userBadges,
					showAddCustom: !0,
					subredditId: o.subredditId,
					userId: o.authorId,
					uniqueIdentifier: o.id
				}), t && t, r.a.createElement(S, {
					authorClassName: A ? Me.a.NftAuthor : void 0,
					comment: o,
					isLivestreaming: C,
					isStrong: !!m,
					renderedInOverlay: j,
					collapsed: s
				}), a && r.a.createElement(K, null), a && r.a.createElement(v.c, {
					className: Me.a.metaText,
					key: "crowdControlSeparator"
				}), p && !N && r.a.createElement(Le, {
					flair: p,
					forceSmallEmojis: m
				}), !m && r.a.createElement(g.a, {
					className: Me.a.publicPoints,
					contentId: o.id,
					metaSeparator: r.a.createElement(v.c, {
						className: Me.a.metaText
					}),
					subredditId: o.subredditId,
					userId: o.authorId,
					username: o.author
				}), T, r.a.createElement(xe, {
					className: Me.a.authorRole,
					comment: o,
					subredditDisplayText: I,
					renderContractorBadge: !!y,
					renderedInOverlay: j
				}), !m && r.a.createElement(r.a.Fragment, null, !o.isDeleted && !E && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.b, {
					className: Me.a.metaText,
					isScoreHidden: o.isScoreHidden,
					score: o.score
				}), r.a.createElement(v.c, {
					className: Me.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(G, {
					key: "Created",
					className: Me.a.MetaLink,
					comment: o,
					permalink: d,
					renderedInOverlay: j,
					isBlockingInterstitialEnabled: h
				}), o.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: Me.a.separator
				}), r.a.createElement(Ee, null)), o.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: Me.a.separator
				}), r.a.createElement(ee, {
					editedAt: o.editedAt
				}))), r.a.createElement(me, {
					comment: o,
					ignoreLock: _,
					renderedInOverlay: j
				}), r.a.createElement(l.a, {
					thing: o,
					tooltipType: j ? w.c.Lightbox : void 0
				}))
			});
			const Ue = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: a,
						comment: o,
						commentPermalink: d,
						isBlockingInterstitialEnabled: i,
						renderedInOverlay: c
					} = e;
					return r.a.createElement("div", {
						className: a
					}, r.a.createElement(Be, null, o.deletedBy === O.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(G, {
						key: "Created",
						className: Me.a.MetaLink,
						comment: o,
						permalink: d,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: i
					}), n && He({
						childrenInfo: t
					}))
				},
				We = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: a,
						collapsed: o,
						commentPermalink: d,
						isBlockingInterstitialEnabled: i
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(O.f)(t),
						collapsed: o
					})), r.a.createElement(v.b, {
						className: Me.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(v.c, {
						className: Me.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(G, {
						key: "Created",
						className: Me.a.MetaLink,
						comment: t,
						permalink: d,
						renderedInOverlay: a,
						isBlockingInterstitialEnabled: i
					}), He({
						childrenInfo: s
					}))
				},
				He = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Re, {
						className: Me.a.metaText
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
				d = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/actions/comment/index.ts"),
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
				v = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				C = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/selectors/comments.ts"),
				k = n("./src/reddit/selectors/commentSelector.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				y = n.n(_),
				j = n("./src/lib/lessComponent.tsx");
			const I = j.a.div("VoteSpacer", y.a),
				A = j.a.div("ContentWrapper", y.a),
				T = j.a.div("CommentContentWrapper", y.a),
				S = j.a.div("CommentBody", y.a),
				N = j.a.div("ParentPostTitle", y.a),
				P = j.a.div("CommentParentWrapper", y.a),
				M = Object(o.c)({
					comment: (e, t) => Object(k.b)(e, t),
					commentPermalink: E.m,
					flair: E.e,
					subreddit: O.G
				}),
				F = Object(r.b)(M, (e, {
					commentId: t,
					trackClick: n
				}) => ({
					onIgnoreReports: () => e(Object(c.g)(t)),
					onVoteClick: s => {
						const [a, r] = s === C.a.upvoted ? [Object(i.q)(t), "upvote_comment"] : [Object(i.j)(t), "downvote_comment"];
						n(r)(), e(a)
					}
				})),
				L = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = F(j.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					commentPermalink: s,
					flair: r,
					hasReports: o,
					isCheckboxSelected: d = !1,
					onIgnoreReports: i,
					onVoteClick: c,
					showModTools: C,
					subreddit: E,
					showBulkActionCheckbox: k,
					toggleCheckbox: O
				} = e, _ = Object(f.d)(n);
				return a.a.createElement(m.a, {
					className: t,
					clickTrackingId: n.id,
					permalink: s
				}, a.a.createElement(g.a, {
					model: n,
					handleVote: c,
					showBulkActionCheckbox: k,
					isCheckboxSelected: d,
					toggleCheckbox: O
				}), a.a.createElement(I, null, a.a.createElement(A, null, a.a.createElement(P, null, n.postTitle && a.a.createElement(N, null, n.postTitle), n.postAuthor && a.a.createElement(b.a, {
					comment: n
				})), a.a.createElement(T, null, a.a.createElement(p.a, {
					comment: n
				}, a.a.createElement(S, null, a.a.createElement(w.a, {
					content: Object(v.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: L(e)
				})), a.a.createElement(u.a, {
					comment: n,
					flair: r,
					subredditName: E ? E.displayText : null
				}), _ && a.a.createElement(h.a, {
					thing: n
				}), o && a.a.createElement(x.a, {
					onIgnoreReports: i,
					reportable: n
				}), C && !n.isDeleted && a.a.createElement(l.a, {
					comment: n
				}))))))
			}, "Component", y.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				i = n("./src/reddit/helpers/overlay/index.ts");
			const c = Object(r.b)(null, e => ({
				openLightbox: t => e(Object(i.a)(t))
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
			t.a = c(Object(d.a)(l))
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
				d = n.n(o);
			const i = r.a.div("DashWrapper", d.a);
			t.a = e => null === e.comment.parentId ? a.a.createElement(i, null, e.children) : a.a.createElement(i, null, a.a.createElement(i, null, e.children))
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
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				i = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				c = n.n(i),
				l = n("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(d.a, "Inline", c.a),
				p = l.a.wrapped(d.a, "PostedInfo", c.a),
				u = l.a.wrapped(d.a, "SubredditWrapper", c.a),
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
				d = n("./src/reddit/components/SubredditIcon/index.tsx"),
				i = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				l = n.n(c),
				m = n("./src/lib/lessComponent.tsx");
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = m.a.wrapped(r.a, "AuthorLink", l.a), b = m.a.wrapped(i.a, "Inline", l.a), h = m.a.wrapped(i.a, "SubredditWrapper", l.a), f = m.a.div("TextContainer", l.a), x = m.a.wrapped(d.b, "SubredditIcon", l.a);
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
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(l);
			const p = e => e.preventDefault();
			t.a = Object(o.a)(e => r.a.createElement(d.e, null, r.a.createElement(d.i, null, r.a.createElement(c.a, null, r.a.createElement(d.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(d.b, null)))), r.a.createElement(d.l, null, r.a.createElement(d.p, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(d.g, null, !e.hideCancelButton && r.a.createElement(d.a, {
				className: m.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(d.u, {
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
				d = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
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
				v = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/lib/addQueryParams/index.ts"),
				E = n("./src/lib/filterQueryParams/index.ts"),
				k = n("./src/reddit/controls/Dropdown/Row.tsx"),
				O = n("./src/reddit/controls/InternalLink/index.tsx"),
				_ = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				j = n.n(y);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(s || (s = {}));
			const I = p.a.wrapped(k.b, "Row", j.a),
				A = Object(i.c)({
					currentPage: e => e.platform.currentPage,
					origin: _.j
				});
			var T = Object(d.b)(A)(e => o.a.createElement("div", null, o.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(E.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, o.a.createElement(I, {
					displayText: a.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), o.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(C.a)(Object(E.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: s.Posts
					})
				}, o.a.createElement(I, {
					displayText: a.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === s.Posts
				})), o.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(C.a)(Object(E.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
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
				B = Object(i.c)({
					moderatingSubreddits: P.n,
					origin: _.j
				}),
				R = Object(d.b)(B),
				D = p.a.div("DropdownContainer", F.a),
				U = p.a.div("SearchBarContainer", F.a),
				W = p.a.wrapped(k.b, "Row", F.a),
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
						to: Object(E.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, o.a.createElement(W, {
						displayText: a.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const n = H(t);
						return o.a.createElement(O.a, {
							key: t.id,
							to: Object(C.a)(Object(E.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), n)
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
				ee = Object(i.c)({
					isPostTypeFilterDropdownOpen: Object(v.b)(J),
					isSubredditFilterDropdownOpen: Object(v.b)(X),
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
				te = Object(d.b)(ee, e => ({
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
				d = n("./node_modules/react/index.js"),
				i = n.n(d),
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
				v = n("./src/reddit/components/PaginationButtons/index.m.less"),
				C = n.n(v);
			var E = e => i.a.createElement(w.a, {
					className: C.a.buttonContainer
				}, i.a.createElement(g.s, {
					className: Object(x.a)(C.a.routerLink, {
						[C.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, f.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), i.a.createElement(g.s, {
					className: Object(x.a)(C.a.routerLink, {
						[C.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, f.fbt._("Next", null, {
					hk: "2mEXAi"
				}))),
				k = n("./src/reddit/components/PostList/index.tsx"),
				O = n("./src/reddit/constants/componentSizes.ts"),
				_ = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/helpers/isComment.ts"),
				j = n("./src/reddit/helpers/isPost.ts"),
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
						onVoteClick: d,
						showModTools: c,
						subreddit: l,
						showBulkActionCheckbox: m,
						toggleCheckbox: p
					} = e, u = Object(R.d)(n), b = Object(h.c)(n);
					return i.a.createElement(P.a, {
						className: Object(x.a)(t, q.a.Component, q.a.UnthreadedCommentContainer, {
							[q.a.isBanned]: !!n.bannedBy,
							[q.a.isReported]: Object(G.a)(n)
						}),
						clickTrackingId: n.id,
						permalink: s
					}, i.a.createElement(z, {
						className: Object(x.a)({
							[q.a.hasBorder]: !!n.bannedBy || Object(G.a)(n)
						})
					}, m && i.a.createElement(X, {
						isCheckboxSelected: r,
						toggleCheckbox: p
					})), i.a.createElement(K, null, i.a.createElement(Z, {
						compact: !1,
						model: n,
						onVoteClick: d,
						scoreClassName: q.a.score
					})), i.a.createElement(J, null, i.a.createElement(te, null, n.postTitle && i.a.createElement(ee, null, n.postTitle), n.postAuthor && i.a.createElement(L.a, {
						comment: n
					})), i.a.createElement($, null, i.a.createElement(M.a, {
						comment: n
					}, i.a.createElement(U.a, {
						content: Object(Q.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: ne(e)
					}), i.a.createElement(F.a, {
						comment: n,
						flair: a,
						subredditName: l ? l.displayText : null
					}), u && i.a.createElement(B.a, {
						thing: n
					}), b && i.a.createElement(D.a, {
						onIgnoreReports: o,
						reportable: n
					}), c && !n.isDeleted && i.a.createElement(Y, {
						comment: n
					})))))
				}),
				ae = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				re = n("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				oe = n.n(re);
			const de = p.a.div("VoteSpacer", oe.a),
				ie = p.a.div("ContentWrapper", oe.a),
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
						onIgnoreReports: d,
						onVoteClick: c,
						showModTools: l,
						subreddit: m,
						showBulkActionCheckbox: p,
						toggleCheckbox: u
					} = e, b = Object(R.d)(n);
					return i.a.createElement(P.a, {
						className: t,
						clickTrackingId: n.id,
						permalink: s
					}, i.a.createElement(ae.a, {
						model: n,
						handleVote: c,
						showBulkActionCheckbox: p,
						isCheckboxSelected: o,
						toggleCheckbox: u
					}), i.a.createElement(de, null, i.a.createElement(ie, null, i.a.createElement(le, null, n.postAuthor && i.a.createElement(L.a, {
						comment: n,
						subredditOrProfile: m
					}), n.postTitle && i.a.createElement(N.a, null, n.postTitle)), i.a.createElement(M.a, {
						comment: n
					}, i.a.createElement(me, null, i.a.createElement(U.a, {
						content: Object(Q.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: pe(e)
					})), b && i.a.createElement(B.a, {
						thing: n
					}), r && i.a.createElement(D.a, {
						onIgnoreReports: d,
						reportable: n
					}), i.a.createElement(ce, {
						comment: n,
						flair: a
					}))), l && !n.isDeleted && i.a.createElement(S.a, {
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
				ve = n("./src/reddit/selectors/meta.ts"),
				Ce = n("./src/reddit/selectors/modQueue.ts"),
				Ee = n("./src/reddit/selectors/subreddit.ts"),
				ke = n("./src/config.ts"),
				Oe = n("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				_e = n.n(Oe);
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), je = `${ke.a.assetPath}/img/snoomoji/cat_blep.png`, Ie = p.a.div("Container", _e.a), Ae = p.a.div("Image", _e.a), Te = p.a.div("Title", _e.a), Se = p.a.div("Text", _e.a);
			var Ne = () => i.a.createElement(Ie, null, i.a.createElement(Ae, {
					style: {
						backgroundImage: `url(${je})`
					}
				}), i.a.createElement(Te, null, ye._("The queue is clean!", null, {
					hk: "3d14fC"
				})), i.a.createElement(Se, null, ye._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Pe = n("./src/reddit/components/PostList/Placeholder.tsx");
			const Me = Object(_.u)(),
				Fe = Object(l.c)({
					layout: _.R
				});
			var Le = Me(Object(c.b)(Fe)(e => i.a.createElement(Pe.a, {
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
			const ot = e => i.a.createElement("button", {
					className: Object(x.a)(rt.a.StatusItem, e.className),
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? f.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, e.buttonText),
				dt = Object(l.c)({
					selectedItems: Ce.f
				}),
				it = Object(c.b)(dt, e => ({
					onIgnoreReports: () => e(Object(u.f)(we.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(we.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(we.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(we.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(we.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(we.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(we.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(we.a.Unspoiler))
				})),
				ct = e => e.some(e => Object(y.a)(e));
			var lt = Object(Ve.a)(it(Object(st.c)(e => i.a.createElement("div", {
				className: Object(x.a)(rt.a.StatusList, e.className),
				style: e.style
			}, i.a.createElement("div", {
				className: rt.a.StatusContainer
			}, i.a.createElement(ot, {
				onClick: e.onIgnoreReports,
				buttonText: f.fbt._("Ignore Reports", null, {
					hk: "1hZ3hN"
				})
			}), i.a.createElement(ot, {
				onClick: e.onUnignoreReports,
				buttonText: f.fbt._("Unignore Reports", null, {
					hk: "3y089p"
				})
			}), i.a.createElement(ot, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onLock,
				buttonText: f.fbt._("Lock", null, {
					hk: "4bc0vl"
				})
			}), i.a.createElement(ot, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnlock,
				buttonText: f.fbt._("Unlock", null, {
					hk: "Pe2ML"
				})
			}), i.a.createElement(ot, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onSpoiler,
				buttonText: f.fbt._("Mark as Spoiler", null, {
					hk: "4pIu4V"
				})
			}), i.a.createElement(ot, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnspoiler,
				buttonText: f.fbt._("Unmark as Spoiler", null, {
					hk: "1ImDYd"
				})
			}), i.a.createElement(ot, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onMarkNSFW,
				buttonText: f.fbt._("Mark as NSFW", null, {
					hk: "4yS4Hz"
				})
			}), i.a.createElement(ot, {
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
					return i.a.createElement("div", {
						id: s,
						className: t
					}, i.a.createElement(lt, {
						isOpen: n,
						tooltipId: s
					}))
				})),
				ut = n("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				bt = n.n(ut);
			const ht = "BulkAction--BulkItemFilter",
				ft = "BulkActions--PostFlair--Modal",
				xt = Object(Ve.a)(Je.a),
				gt = e => i.a.createElement(Ke.b, {
					className: Object(x.a)(bt.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				wt = Object(l.c)({
					activeModalId: Ze.a,
					dropdownIsOpen: Object(nt.b)(ht),
					flairData: et.d,
					isApiPending: Ce.a,
					moderatorPermissions: $e.m,
					posts: tt.J,
					selectedItems: Ce.f
				}),
				vt = Object(c.b)(wt, e => ({
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
				Ct = (e, t) => {
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
			var Et = vt(e => {
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
						selectedItems: v,
						startNumItems: C,
						subredditId: E,
						toggleSelectAll: k,
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
					}], y = c && c.flair, j = E && a && a.displaySettings.isEnabled && y && !ct(v);
					return i.a.createElement("div", {
						className: Object(x.a)(bt.a.ModToolsBulkOperations, n)
					}, i.a.createElement("div", {
						className: bt.a.CheckboxContainer,
						id: ht
					}, i.a.createElement(H.a, {
						className: bt.a.Checkbox,
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: k
					}), i.a.createElement(Ue.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), i.a.createElement(xt, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: ht
					}, _.map(e => i.a.createElement(gt, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => O(e.filterType)
					})))), r && i.a.createElement(d.Fragment, null, i.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: o,
						text: f.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, i.a.createElement(We.a, null)), i.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: o,
						text: f.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, i.a.createElement(He.a, null)), i.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: o,
						text: f.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, i.a.createElement(Qe.a, null)), i.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: o,
						onClick: e.onOpenModToolsDropdown
					}, i.a.createElement(pt, {
						tooltipId: "BulkActions--ModTools"
					}), i.a.createElement(Ue.a, {
						name: "list_bulleted"
					})), i.a.createElement("div", null, j && i.a.createElement(Xe.c, {
						disabled: o,
						onClick: g,
						className: bt.a.Button
					}, i.a.createElement(Ge.a, null)))), r && E && t === ft && i.a.createElement(ze.a, {
						flairs: Ct(v, w),
						modalId: ft,
						onFlairChanged: ({
							previewFlair: e,
							selectedTemplateId: t
						}) => {
							u(e, t)
						},
						subredditId: E
					}), m > 0 && i.a.createElement("div", {
						className: bt.a.Text
					}, i.a.createElement("span", {
						className: bt.a.right
					}, f.fbt._("Items {startNumItems}-{endNumItems}", [f.fbt._param("startNumItems", `${C}`), f.fbt._param("endNumItems", `${s}`)], {
						hk: "1FkOkC"
					})), i.a.createElement("span", {
						className: bt.a.Bullet
					}, "•"), i.a.createElement("span", {
						className: bt.a.left
					}, f.fbt._("{numSelected} selected", [f.fbt._param("numSelected", `${l}`)], {
						hk: "4uf9Ow"
					}))))
				}),
				kt = n("./src/reddit/contexts/Post/index.tsx"),
				Ot = n("./src/reddit/components/ModQueueList/index.m.less"),
				_t = n.n(Ot);
			const yt = e => Object(j.a)(e.id),
				jt = p.a.div("ItemContainer", _t.a),
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
					isModQueueListingPending: Ce.b,
					loadMore: Ce.d,
					modQueueListingItems: Ce.c,
					origin: ve.j,
					selectedItems: Ce.f,
					subredditId: (e, t) => t.subredditName ? Object(Ee.C)(e, t.subredditName) : null
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
			class Rt extends i.a.Component {
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
									Object(j.a)(e.id) && t.push(e.id)
								});
								break;
							case Bt.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(y.a)(e.id) && t.push(e.id)
								});
								break;
							case Bt.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Bt.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(j.a)(e.id)) {
										const n = e;
										n.flair && n.flair.filter(e => e.type !== xe.f.Spoiler && e.type !== xe.f.Nsfw).length > 0 && t.push(n.id)
									}
								});
								break;
							case Bt.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(j.a)(e.id)) {
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
							if (yt(t)) {
								const s = t,
									a = Object(I.b)({
										layout: e.layout,
										post: s
									});
								return i.a.createElement(jt, {
									key: n
								}, i.a.createElement(a, {
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
									onClickPost: Object(k.b)(s.id, e),
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
							return i.a.createElement(jt, {
								key: n
							}, i.a.createElement(kt.a, {
								postId: t.postId
							}, i.a.createElement(s, {
								commentId: t.id,
								hasReports: Object(h.c)(t),
								highlight: !1,
								isCheckboxSelected: this.isCheckboxSelected(t.id),
								showBulkActionCheckbox: !0,
								showModTools: !0,
								toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(t.id), [t.id]),
								trackClick: e.sendEventWithName
							})))
						})), i.a.createElement("div", null, i.a.createElement("div", null, t), i.a.createElement(It, null, i.a.createElement(E, {
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
					return i.a.createElement("div", null, i.a.createElement(Et, {
						endNumItems: Ft(e),
						numSelected: n,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Lt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? i.a.createElement(Ne, null) : e.isModQueueListingPending ? i.a.createElement(Le, null) : null)
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
				return _
			}));
			var s, a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = n("./src/reddit/components/FlairPreview/index.tsx"),
				h = n("./src/reddit/components/FlairSearch/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				w = n("./src/reddit/selectors/postFlair.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				k = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				O = n.n(k);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const _ = (e, t = !1, n = s.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				y = Object(i.c)({
					flairData: w.d,
					subreddit: v.R,
					isMod: (e, t) => !!Object(g.m)(e, t)
				});
			class j extends o.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(C.jb)(t, this.props.subredditId)
					}));
					const t = Object(E.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(E.c)(this.props.flairs) || null;
					return Object(E.b)(e, t, n)
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
					} = e, d = r.displayText, {
						templates: i,
						templateIds: c
					} = s, {
						canSave: l
					} = this.canSave();
					return o.a.createElement(u.a, {
						className: n
					}, o.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: a.fbt._("Select {subredditName} flair", [a.fbt._param("subredditName", d)], {
							hk: "1lDMWS"
						})
					}), o.a.createElement(b.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						placeholderText: a.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), o.a.createElement(h.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						subredditId: r.id,
						templates: i,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), o.a.createElement("div", {
						className: O.a.buttonsRow
					}, o.a.createElement(f.l, {
						disabled: !l,
						onClick: this.onApply
					}, a.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), o.a.createElement(f.o, {
						className: O.a.clearButton,
						onClick: this.onClear
					}, a.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(d.b)(y, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(j);
			t.a = Object(l.a)(Object(c.c)(I))
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
				d = n("./src/reddit/components/VerticalVotes/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.tsx"),
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
					isReadingIndicatorsExperimentEnabled: v
				} = e, C = `upvote-button-${t.id}${x?"-overlay":""}`;
				return a.a.createElement(o.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: f
				}, s && a.a.createElement(i.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), a.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: f,
					upvoteTooltipId: C,
					isVoteCountAnimation: g,
					isCountAnimShadowTestEnabled: u,
					postId: w,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: v
					}),
					isReadingIndicatorsExperimentEnabled: v
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
				d = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				i = n.n(d);
			const c = e => a.a.createElement("button", {
					className: Object(r.a)(i.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && a.a.createElement("span", {
					className: Object(r.a)(i.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = o.a.wrapped(c, "ApproveButton", i.a),
				m = o.a.wrapped(c, "RemoveButton", i.a),
				p = e => a.a.createElement("button", {
					className: Object(r.a)(i.a.removalReasonButton, e.className),
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
				d = n("./src/reddit/controls/Checkbox/index.m.less"),
				i = n.n(d);
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
					[i.a.redditStyle]: e.redditStyle,
					[i.a.disabled]: e.disabled
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
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
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
			const v = e => Object(i.a)(g.a.iconStyles, e.className, {
					[g.a.mRedditStyle]: e.redditStyle
				}),
				C = ({
					className: e,
					redditStyle: t,
					...n
				}) => r.a.createElement(h.a, w({
					name: "view_compact",
					className: v({
						className: e,
						redditStyle: t
					})
				}, n)),
				E = ({
					className: e,
					redditStyle: t,
					...n
				}) => r.a.createElement(h.a, w({
					name: "view_classic",
					className: v({
						className: e,
						redditStyle: t
					})
				}, n)),
				k = ({
					className: e,
					redditStyle: t,
					...n
				}) => r.a.createElement(h.a, w({
					name: "view_card",
					className: v({
						className: e,
						redditStyle: t
					})
				}, n)),
				O = ({
					isActive: e,
					...t
				}) => r.a.createElement("button", w({
					className: Object(i.a)(g.a.layoutButton, {
						[g.a.mIsActive]: e
					})
				}, t)),
				_ = Object(b.u)(),
				y = Object(d.c)({
					postLayout: b.R,
					redditStyle: b.D
				}),
				j = Object(o.b)(y, e => ({
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
			t.a = _(j(Object(p.c)(e => {
				const {
					sendEvent: t,
					subredditId: n
				} = e, a = e.layout || u.e[e.postLayout];
				return r.a.createElement("div", {
					className: Object(i.a)(g.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, r.a.createElement("div", {
					className: g.a.title
				}, s.fbt._("View", null, {
					hk: "18a931"
				})), r.a.createElement("div", {
					className: g.a.iconContainer
				}, (() => [{
					layout: u.d.Card,
					Icon: k,
					text: s.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: u.d.Classic,
					Icon: E,
					text: s.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: u.d.Compact,
					Icon: C,
					text: s.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(s => {
					const o = () => (s => {
							e.onChange ? e.onChange(s) : (e.onListingLayoutChange(s, n), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: s,
								screen: Object(f.ab)(e),
								subreddit: Object(f.ib)(e)
							})))
						})(s.layout),
						d = () => e.toggleTooltip(i),
						i = "layoutSwitch--" + s.layout,
						l = s.layout === a;
					return r.a.createElement(O, {
						"aria-label": s.text,
						"aria-pressed": l,
						id: i,
						isActive: l,
						key: s.layout,
						onClick: o,
						onMouseEnter: d,
						onMouseLeave: d,
						onTouchStart: o
					}, r.a.createElement(s.Icon, {
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle,
						isFilled: l
					}), r.a.createElement(c.c, {
						tooltipId: i,
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
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				i = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(i);
			const l = o.a.span("metaText", c.a),
				m = e => r.a.createElement(l, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...a
				}) => {
					const o = Object(d.b)(t),
						i = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", o)], {
							hk: "2L3T21"
						}),
						c = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? i : s.fbt._({
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
				}, [s.fbt._plural(e, "number", Object(d.b)(e))], {
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
				d = n("./src/reddit/controls/SearchBar/index.m.less"),
				i = n.n(d);
			t.a = e => a.a.createElement("div", {
				className: Object(r.a)(i.a.searchContainer, e.className)
			}, a.a.createElement("input", {
				className: Object(r.a)(i.a.search, {
					[i.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), a.a.createElement("div", {
				className: Object(r.a)(i.a.searchIconContainer, {
					[i.a.mClickable]: !!e.onSearch,
					[i.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, a.a.createElement(o.a, null)))
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return C
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "l", (function() {
				return j
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
				d = n("./src/lib/uploadToS3/index.ts"),
				i = n("./src/redditGQL/operations/AwardSheetInfo.json"),
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
				v = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const C = (e, t, n, r) => {
					const d = {
						subreddit: t,
						filepath: n,
						mimetype: r
					};
					return Object(a.a)(Object(o.a)(e, [w.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: d
					})
				},
				E = async (e, t) => Object(d.a)(t, e), k = (e, t, n, s, a, o, d, i, c) => Object(r.a)(e, {
					...l,
					variables: {
						coinPrice: d,
						iconHeight: o,
						iconWidth: a,
						iconUrl: s,
						name: n,
						subredditId: t,
						startsAt: i,
						endsAt: c
					}
				}), O = (e, t, n, s, a, o, d, i, c) => Object(r.a)(e, {
					...p,
					variables: {
						iconHeight: o,
						iconWidth: a,
						iconUrl: s,
						monthsOfPremium: d,
						name: n,
						subredditId: t,
						startsAt: i,
						endsAt: c
					}
				}), _ = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: n,
					context: s,
					daysOfDripExtension: a,
					daysOfPremium: o,
					description: d,
					endsAt: i,
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
					subredditCoinReward: v
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
						description: d,
						coinPrice: t,
						coinReward: n,
						name: f,
						pennyPrice: x,
						pennyDonate: g,
						giverCoinReward: c,
						startsAt: w,
						endsAt: i,
						subredditCoinReward: v
					}
				}), y = (e, t) => Object(r.a)(e, {
					...f,
					variables: {
						subredditId: t
					}
				}), j = (e, t) => Object(r.a)(e, {
					...x,
					variables: {
						profileName: t
					}
				}), I = e => Object(r.a)(e, {
					...h
				}), A = (e, t, n) => Object(r.a)(e, {
					...i,
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
						error: Object(v.a)(e)
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
				return d
			})), n.d(t, "d", (function() {
				return i
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
				d = e => s.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [s.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				i = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(a.a)(e.bannedAtUTC))], {
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
				return d
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const d = (e, t, n) => d => {
					const i = Object(a.e)(d, {
							commentId: e
						}),
						c = Object(r.g)(d, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...o.n(d),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == i ? void 0 : i.templateId,
							title: i ? Object(s.g)(i) : void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name
						}
					}
				},
				i = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...o.n(e)
				})
		},
		"./src/reddit/helpers/trackers/topAwarded.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/selectors/gold/topAwarded.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const d = (e, t = {}) => ({
					...Object(a.h)(e, t),
					correlationId: Object(s.e)(s.a.GildingFlow, !1),
					profile: o.R(e),
					subreddit: o.ib(e)
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
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = n.n(d);
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("approve", e.isFilled), i.a.approveIcon, e.className),
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
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = n.n(d);
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("lock", e.isFilled), i.a.lockIcon, e.className),
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
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = n.n(d);
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("remove", e.isFilled), i.a.removeIcon, e.className),
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
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = n.n(d);
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("report", e.isFilled), i.a.reportIcon, e.className),
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
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = n.n(d);
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("spam", e.isFilled), i.a.spamIcon, e.className),
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
				d = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(d.a.chevron, e.className),
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
				d = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
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
				v = n("./src/lib/classNames/index.ts"),
				C = n("./node_modules/lodash/omit.js"),
				E = n.n(C),
				k = n("./src/lib/addQueryParams/index.ts"),
				O = n("./src/reddit/controls/InternalLink/index.tsx"),
				_ = n("./src/reddit/pages/ModQueuePages/index.m.less"),
				y = n.n(_);
			const j = Object(i.c)({
				currentPage: e => e.platform.currentPage
			});
			var I = Object(d.b)(j)(e => o.a.createElement(O.a, {
				className: Object(v.a)(y.a.navChild, {
					[y.a.mIsActive]: e.isActive
				}),
				to: Object(k.a)(`/r/mod/about/${e.pathName}`, E()(e.currentPage.queryParams, ["after", "before", "page"]))
			}, e.title));
			var A = e => o.a.createElement("div", {
					className: y.a.navContainer
				}, o.a.createElement("div", {
					className: Object(v.a)(y.a.innerContainer, {
						[y.a.mDisableFullScreen]: e.disableFullscreen
					})
				}, o.a.createElement("h1", {
					className: y.a.title
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
				className: y.a.sidebar
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
				H = Object(i.c)({
					queryParams: (e, {
						location: t
					}) => a()([...Object(c.a)(t.search)])
				}),
				Q = Object(i.a)(H, b.R, x.n, (e, {
					match: t
				}) => t.params.pageName, ({
					queryParams: e
				}, t, n, s) => {
					const a = e.subreddit,
						r = e.profile,
						o = e.only,
						d = `${e.page||f.b}`;
					return {
						after: e.after || "",
						layout: t,
						isModerator: n.length > 0,
						page: d,
						pageName: s,
						postTypeFilter: o,
						profileName: r,
						subredditName: a
					}
				}),
				G = Object(d.b)(Q);
			class V extends o.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: "bulk_mod_action",
						action: "click",
						noun: e,
						screen: Object(g.ab)(t)
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
						profileName: d,
						postTypeFilter: i,
						subredditName: c
					} = this.props, p = c && `r/${c}` || d && `user/${d}`, b = "unmoderated" !== r, f = b ? i : void 0;
					return o.a.createElement("div", null, n && o.a.createElement(h.a, {
						className: t,
						fitPageToContent: !0,
						disableFullscreen: s === u.g.Large,
						navBar: o.a.createElement(A, {
							disableFullscreen: s === u.g.Large,
							pageName: r
						}),
						content: o.a.Children.toArray([o.a.createElement(m.a, {
							key: d,
							postTypeFilter: f,
							profileName: d,
							sendEventWithName: this.sendEventWithName,
							showTypeFilter: b,
							subredditName: c
						}), o.a.createElement(l.a, {
							after: e,
							key: `${d}-${c}`,
							layout: s,
							page: a,
							pageName: r,
							postTypeFilter: f,
							profileName: d,
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
			var d = n("./node_modules/icepick/icepick.js"),
				i = n("./src/reddit/actions/economics/powerups/constants.ts");
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
								d = s.filter(r.a).map(e => e.type),
								i = s.filter(r.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: o,
									achievementTypes: d,
									supporterTypes: i
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = c, t) => {
					switch (t.type) {
						case i.d: {
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
									d = o.filter(r.b),
									i = d.map(({
										type: e
									}) => e),
									c = l(n),
									m = l(d);
								a = {
									...a,
									[e]: {
										achievementTypes: s,
										supporterTypes: i,
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
						case i.f: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: a,
								supporterFlairType: r
							} = t.payload;
							return Object(d.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: a,
								pendingSupporterType: r
							}))
						}
						case i.g: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: a,
								supporterFlairType: r
							} = t.payload;
							return Object(d.updateIn)(e, [n, s], e => ({
								...e,
								preferredAchievementType: a,
								preferredSupporterType: r,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case i.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(d.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case i.h: {
							const {
								subredditId: n,
								userId: s,
								isHidden: a
							} = t.payload;
							return Object(d.updateIn)(e, [n, s], e => ({
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
						case i.i: {
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
				return d
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(a.c)(e, {
						experimentEligibilitySelector: r.K,
						experimentName: s.Bc
					});
					return !(!t || Object(s.tf)(t))
				},
				d = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: r.K,
						experimentName: s.Bc
					}) === s.gd.ListingEnabled
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
			const d = (e, {
					subredditId: t
				}) => {
					var n;
					return t ? null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t] : null
				},
				i = (e, {
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
				m = Object(s.a)([i, l], (e, t) => e && t ? e[t] : null),
				p = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				u = Object(s.a)([i, p], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([i, c], (e, t) => {
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
				h = Object(s.a)([d, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: s,
						flairsByType: a
					} = e, {
						supporterTypes: r,
						achievementTypes: o,
						preferredSupporterType: d,
						preferredAchievementType: i,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(n, r, a, c || d),
						achievementFlairs: g(s, o, a, l || i)
					}
				}),
				f = Object(s.a)([c], e => !!e && e.isHidden),
				x = Object(s.a)([d, c, u], (e, t, n) => {
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
				return d
			}));
			const s = e => e.users.topAwarders.currentPostId,
				a = e => e.users.topAwarders.api.pending,
				r = e => e.users.topAwarders.api.error,
				o = (e, t) => e.users.topAwarders.list[t],
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages.9563b04e9c91b02f9bdd.js.map