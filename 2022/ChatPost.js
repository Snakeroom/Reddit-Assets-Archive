// https://www.redditstatic.com/desktop2x/ChatPost.f870fe689c7ef344a1bb.js
// Retrieved at 2/11/2022, 5:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var n = "Expected a function";
			e.exports = function(e, t, s) {
				if ("function" != typeof e) throw new TypeError(n);
				return setTimeout((function() {
					e.apply(void 0, s)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseDelay.js"),
				o = n("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return s(e, 1, t)
				}));
			e.exports = o
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e, t, ...n) {
				let s, o = !1;
				const a = async () => {
					n && n.length ? await e.call(window, ...n) : await e.call(window), o || (s = window.setTimeout(a, t))
				};
				return s = window.setTimeout(a, t), () => {
					o = !0, window.clearTimeout(s)
				}
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
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				r = n("./src/reddit/actions/gold/constants.ts");
			const i = Object(s.a)(r.mb),
				d = Object(s.a)(r.t),
				c = e => async t => {
					await t(d({
						id: e
					})), t(Object(o.h)(a.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/gold/reportAward.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/reddit/models/Toast/index.ts"),
				i = n("./src/reddit/endpoints/gold/communityAwards.ts"),
				d = n("./src/reddit/actions/gold/constants.ts");
			const c = Object(o.a)(d.lb),
				l = e => async (t, n, {
					apiContext: o
				}) => {
					t(c());
					try {
						if ((await Object(i.e)(o(), e.id)).error) throw new Error;
						await t(Object(a.f)({
							kind: r.b.SuccessAward,
							duration: a.a,
							text: s.fbt._("{award name} Award successfully reported for review.", [s.fbt._param("award name", e.name)], {
								hk: "1fHb5Q"
							})
						}))
					} catch (d) {
						await t(Object(a.f)({
							kind: r.b.Error,
							duration: a.a,
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
				return b
			}));
			var s = n("./src/lib/env/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/sentry/index.ts"),
				r = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/endpoints/gold/topAwarded.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/gold/constants.ts");
			Object(o.a)(c.ub), Object(o.a)(c.tb), Object(o.a)(c.sb);
			const l = Object(o.a)(c.xb),
				m = Object(o.a)(c.wb),
				p = Object(o.a)(c.vb),
				u = (e, t = 25) => async (n, o, {
					gqlContext: r
				}) => {
					if (!o().users.topAwarders.list.length) {
						n(l());
						try {
							const s = await Object(i.b)(r(), {
									top: t,
									postId: e
								}),
								o = s.body;
							if (s.ok) await n(m({
								postId: e,
								...o.data.postInfoById.topAwarders
							}));
							else if (o.errors && o.errors.length) throw new Error(o.errors.map(e => e.message).join("; "))
						} catch (d) {
							Object(s.b)() || console.error(d), a.c.captureMessage(d), n(p(d.message))
						}
					}
				}, h = Object(o.a)(c.yb), b = e => async (t, n) => {
					t(h({
						postId: e
					})), t(Object(d.h)(r.a.ECON_TOP_AWARDERS))
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/gold/giveAward.ts"),
				c = n("./src/redditGQL/operations/HideAwardOnTarget.json"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				m = n("./src/lib/makeGqlRequest/index.ts"),
				p = n("./src/reddit/actions/gold/constants.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/models/Toast/index.ts");
			const b = Object(l.a)(p.D),
				f = ({
					awardId: e,
					thingId: t
				}) => async (n, o, {
					gqlContext: a
				}) => {
					n(b({
						awardId: e,
						thingId: t
					}));
					const r = s.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
						hk: "10OvOz"
					});
					try {
						(await ((e, t, n) => Object(m.a)(e, {
							...c,
							variables: {
								awardId: t,
								targetId: n
							}
						}))(a(), e, t)).error && n(Object(u.f)({
							kind: h.b.Error,
							duration: u.a,
							text: r
						}))
					} catch (i) {
						n(Object(u.f)({
							kind: h.b.Error,
							duration: u.a,
							text: r
						}))
					}
				};
			var v = n("./src/reddit/actions/gold/modals.ts"),
				g = n("./src/reddit/actions/modal.ts"),
				C = n("./src/reddit/actions/tooltip.ts"),
				w = n("./src/reddit/helpers/correlationIdTracker.ts"),
				x = n("./src/reddit/helpers/isPost.ts"),
				_ = n("./src/reddit/helpers/trackers/gild.ts"),
				E = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				I = n("./src/reddit/components/TrackingHelper/index.tsx"),
				k = n("./src/reddit/models/Gold/Award.ts"),
				A = n("./src/reddit/selectors/activeModalId.ts"),
				T = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				y = n("./src/reddit/selectors/gold/awardIcon.ts"),
				O = n("./src/reddit/contexts/Post/index.tsx"),
				j = n("./src/reddit/contexts/User/index.tsx"),
				N = n("./node_modules/lodash/debounce.js"),
				M = n.n(N),
				S = n("./src/lib/classNames/index.ts"),
				L = n("./src/lib/fastdom/index.ts"),
				R = n("./src/reddit/models/Gold/TopAwarded/index.ts"),
				P = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				B = n("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				F = n.n(B);
			var D = a.a.memo(e => a.a.createElement("button", {
					className: Object(S.a)(e.className, F.a.addAwardPill),
					name: s.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, a.a.createElement(P.a, {
					className: F.a.giftIcon
				}))),
				U = n("./src/reddit/helpers/awards/getAwardItemId.ts"),
				H = n("./src/higherOrderComponents/makeAsync.tsx"),
				W = n("./src/lib/loadWithRetries/index.ts");
			var G = Object(H.a)({
					getComponent: () => Object(W.a)(() => n.e("AwardTooltip").then(n.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				q = n("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				V = n.n(q);
			const z = 3500,
				K = 500;
			class J extends a.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = a.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: n,
							triggerOverlayAnimation: s
						} = this.props;
						e.id !== k.g && (this.setState({
							userGiven: !0,
							shouldAnimate: !t
						}), t || (s(n), setTimeout(() => {
							this.setState({
								shouldAnimate: !1
							})
						}, z)))
					}, this.handleOnClick = () => {
						const {
							onAddAward: e,
							award: t
						} = this.props;
						e(t.id === k.g ? void 0 : t.id)
					}, this.handleMouseEnter = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						this.hoverTimer = setTimeout(() => {
							e(t), this.setState({
								hoverStateTriggered: !0
							})
						}, K)
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
						pillIconUrl: o,
						post: r,
						tooltipId: i
					} = this.props, {
						userGiven: d,
						shouldAnimate: c
					} = this.state, l = Object(U.a)(e.id, r.id);
					return a.a.createElement("span", {
						className: V.a.awardPillContainer,
						id: i,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, a.a.createElement("button", {
						className: Object(S.a)(t, V.a.awardPill, {
							[V.a.userGiven]: d
						}),
						onClick: this.handleOnClick
					}, a.a.createElement("span", {
						className: V.a.imageContainer
					}, a.a.createElement("img", {
						alt: e.name,
						className: Object(S.a)(V.a.awardIcon, {
							[V.a.hidden]: c
						}),
						id: l,
						ref: this.imageRef,
						src: o
					}), c && a.a.createElement("img", {
						alt: e.name,
						className: V.a.animationIcon,
						src: s
					})), a.a.createElement("span", {
						className: V.a.count
					}, n.toLocaleString())), a.a.createElement(G, {
						award: e,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideAward: this.handleHideAward,
						postOrComment: r,
						tooltipId: i
					}))
				}
			}
			var Q = J,
				Y = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				X = n("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				Z = n.n(X);
			var $ = a.a.memo(e => {
				const {
					className: t,
					direction: n,
					onClick: o
				} = e, r = "right" === n, i = s.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), d = s.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return a.a.createElement("div", {
					className: Object(S.a)(Z.a.buttonContainer, {
						[Z.a.right]: r
					}, t)
				}, a.a.createElement("button", {
					className: Z.a.scrollButton,
					name: r ? d : i,
					onClick: o
				}, a.a.createElement(Y.a, {
					className: Z.a.chevronIcon
				})))
			});
			const ee = (e, t) => {
				let n = `${Object(x.a)(e)?"Post":"Comment"}AwardBadges--${e}`;
				return t && (n = `${n}--${t}`), n
			};
			var te = n("./src/reddit/helpers/trackers/topAwarded.ts"),
				ne = n("./src/reddit/hooks/useTracking.ts"),
				se = n("./src/reddit/actions/gold/topAwarded.ts"),
				oe = n("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				ae = n("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				re = n.n(ae);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
					const t = Object(r.d)(),
						n = Object(ne.a)();
					return a.a.createElement("button", {
						className: Object(S.a)(re.a.pill, e.className, {
							[re.a.awardsPlaqueStyle]: !!e.awardsPlaqueStyle
						}),
						onClick: () => {
							const {
								postId: s
							} = e.post;
							n(Object(te.a)(s)), t(Object(se.b)(s))
						}
					}, a.a.createElement("span", {
						className: re.a.iconContainer
					}, a.a.createElement(oe.a, {
						className: re.a.awardIcon
					})), a.a.createElement("span", null, ie._("Top Awarded", null, {
						hk: "49Ol5i"
					})))
				},
				ce = n("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				le = n.n(ce);
			const me = 11,
				pe = 100;
			class ue extends a.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = a.a.createRef(), this.handleResize = M()(() => {
						this.handlePlaquePositionChange()
					}, 300), this.handlePlaquePositionChange = () => {
						const {
							awards: e,
							awardsCountInView: t,
							multiline: n
						} = this.props, s = t || me;
						if (e.length < s - 4) return;
						if (n) return;
						const o = this.plaqueRef.current;
						if (!o) return;
						const a = o.scrollLeft > 0,
							r = o.scrollLeft < o.scrollWidth - o.clientWidth;
						this.setState({
							canScrollLeft: a,
							canScrollRight: r
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
						this.props.triggerOverlayAnimation(), L.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const n = document.getElementById(e);
							if (!n) return;
							const s = t.getBoundingClientRect(),
								o = n.getBoundingClientRect();
							if (o.left < s.left || o.right > s.right) {
								const e = o.left + (t.scrollLeft - s.left) - pe;
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
								const o = t[s.id],
									a = (e.post.awardCountsById || {})[s.id];
								return n || o !== a
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
					const o = s.clientWidth,
						a = s.scrollWidth - o,
						r = Math.min(Math.max(0, e), a);
					this.setState({
						canScrollLeft: r > 0,
						canScrollRight: r < a
					}), s.scrollTo({
						left: r,
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
						icons: o,
						isInEconLeaderboardsExperiment: r,
						multiline: i,
						post: d,
						prefersReducedMotion: c,
						onAddAward: l,
						onHideAward: m,
						onHideTooltip: p,
						onOpenReportFlow: u,
						onShowTooltip: h,
						tooltipType: b
					} = this.props, {
						canScrollLeft: f,
						canScrollRight: v
					} = this.state, g = e.length > 0, C = ee(d.id, b);
					return a.a.createElement("div", {
						className: Object(S.a)(le.a.awardBadges, t, {
							[le.a.noAwards]: !g,
							[le.a.multiline]: i
						}),
						ref: this.plaqueRef
					}, f && a.a.createElement($, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (d.topAwardedType === R.a.Active || d.topAwardedType === R.a.Inactive) && !s && r && a.a.createElement(de, {
						awardsPlaqueStyle: !0,
						post: d
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = d, n = t[e.id], s = o.icon32[e.id], r = o.icon128[e.id];
						return a.a.createElement(Q, {
							award: e,
							className: le.a.clickablePlaqueItem,
							count: n,
							giveAwardAnimationIconUrl: r,
							key: e.id,
							onAddAward: l,
							onHideAward: m,
							onOpenReportFlow: u,
							onHideTooltip: p,
							onShowTooltip: h,
							pillIconUrl: s,
							post: d,
							prefersReducedMotion: c,
							tooltipId: `${C}-${e.id}`,
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !n && a.a.createElement(D, {
						className: le.a.clickablePlaqueItem,
						onAddAward: l
					}), !i && a.a.createElement("div", {
						className: le.a.spacer
					}), v && a.a.createElement($, {
						direction: "right",
						onClick: this.handleScrollRight
					}))
				}
			}
			var he = ue,
				be = n("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				fe = n.n(be);
			const {
				fbt: ve
			} = n("./node_modules/fbt/lib/FbtPublic.js");
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
					return a.a.createElement(a.a.Fragment, null, t > 1 && " • ", ve._("{award-name} Award", [ve._param("award-name", e.name)], {
						hk: "2QpjYF"
					}))
				}
				render() {
					const {
						award: e,
						className: t,
						count: n,
						iconClassName: s,
						iconUrl: o,
						onHideAward: r,
						onHideTooltip: i,
						onOpenReportFlow: d,
						postOrComment: c,
						tooltipId: l,
						tooltipLocation: m
					} = this.props;
					if (n <= 0) return null;
					const p = e.awardType === k.f.Moderator,
						u = Object(U.a)(e.id, c.id),
						h = "container" === m;
					return a.a.createElement("span", {
						className: Object(S.a)(fe.a.awardItem, t),
						id: h ? l : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i
					}, a.a.createElement("span", {
						id: h ? "" : l
					}, a.a.createElement("img", {
						alt: e.name,
						className: Object(S.a)(fe.a.awardIcon, {
							[fe.a.animate]: this.state.animate
						}, s),
						id: u,
						ref: this.imageRef,
						src: o
					})), a.a.createElement("span", null, n > 1 && n, p && this.renderModAwardName()), a.a.createElement(G, {
						award: e,
						onHideAward: () => r(e),
						postOrComment: c,
						tooltipId: l,
						onOpenReportFlow: () => d(e)
					}))
				}
			}
			var Ce = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				we = n("./src/reddit/icons/fonts/index.tsx"),
				xe = n("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				_e = n.n(xe);
			var Ee = e => {
				const {
					className: t,
					onClick: n
				} = e;
				return a.a.createElement("button", {
					className: Object(S.a)(t, _e.a.badgeButton, _e.a.visibilityEffect),
					onClick: n
				}, a.a.createElement(we.a, {
					name: "award",
					className: _e.a.icon
				}))
			};
			var Ie, ke = e => {
					const {
						awards: t,
						className: n,
						hideBadgeButton: o,
						hideTopAwardedBadge: r,
						icons: i,
						isInEconLeaderboardsExperiment: d,
						onAddAward: c,
						onHideAward: l,
						onOpenReportFlow: m,
						onHideTooltip: p,
						onShowAllAwards: u,
						onShowTooltip: h,
						showAllAwards: b,
						tooltipType: f,
						thing: v
					} = e, g = ee(v.id, f), C = `${g}-view-all`;
					let w = [];
					w = b ? t : t.length > 5 ? t.slice(0, 4) : t;
					const _ = !o && v.isGildable && t.length > 0,
						E = t.length > w.length ? t.slice(w.length).reduce((e, t) => e + (v.awardCountsById && v.awardCountsById[t.id] || 0), 0) : 0,
						I = s.fbt._("& {hidden award count} More", [s.fbt._param("hidden award count", E.toLocaleString())], {
							hk: "1OnmAi"
						});
					return a.a.createElement("div", {
						className: Object(S.a)(_e.a.awardBadges, n)
					}, Object(x.a)(v.id) && (v.topAwardedType === R.a.Active || v.topAwardedType === R.a.Inactive) && !r && d && a.a.createElement(de, {
						post: v
					}), w.map(e => {
						const t = v.awardCountsById ? v.awardCountsById[e.id] : 0,
							n = i.icon32[e.id];
						return a.a.createElement(ge, {
							award: e,
							count: t,
							iconUrl: n,
							key: e.id,
							onHideAward: l,
							onOpenReportFlow: m,
							onHideTooltip: p,
							onShowTooltip: h,
							postOrComment: v,
							tooltipId: `${g}-${e.id}`,
							tooltipLocation: "icon"
						})
					}), E > 0 && a.a.createElement(a.a.Fragment, null, a.a.createElement("button", {
						"data-click-id": "awards",
						id: C,
						className: _e.a.showAllButton,
						onClick: u,
						onMouseEnter: () => h(C),
						onMouseLeave: p
					}, I), a.a.createElement(Ce.c, {
						tooltipId: C,
						text: s.fbt._("View all Awards", null, {
							hk: "3JL2sD"
						})
					})), _ && a.a.createElement(Ee, {
						onClick: c
					}))
				},
				Ae = n("./src/reddit/actions/gold/reportAward.ts"),
				Te = n("./src/reddit/controls/Button/index.tsx"),
				ye = n("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				Oe = n.n(ye);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(Ie || (Ie = {}));
			var je = e => {
				const t = Object(ne.a)(),
					[n, i] = Object(o.useState)(e.award.awardType === k.f.Global ? Ie.FLAG_USAGE : Ie.BEGIN),
					d = Object(r.d)(),
					c = () => {
						n === Ie.BEGIN ? t(Object(_.clickCancelAwardReportFlow)(e.award, e.thing.id)) : n === Ie.REPORT_COMMUNITY_AWARD ? t(Object(_.clickCancelReportAward)(e.award, e.thing.id)) : n === Ie.FLAG_USAGE && t(Object(_.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(_.clickConfirmReportAward)(e.award, e.thing.id)), d(Object(Ae.a)(e.award)), e.onClose()
					},
					m = () => {
						t(Object(_.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), d(Object(u.f)(Object(u.e)(s.fbt._("{award name} Award successfully flagged for review.", [s.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), h.b.SuccessAward))), e.onClose()
					},
					p = a.a.createElement(a.a.Fragment, null, a.a.createElement(Te.o, {
						onClick: () => {
							t(Object(_.clickReportAward)(e.award, e.thing.id)), i(Ie.REPORT_COMMUNITY_AWARD)
						},
						className: Oe.a.reportStepButton
					}, s.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), a.a.createElement(Te.o, {
						onClick: () => {
							t(Object(_.clickFlagAwardUsage)(e.award, e.thing.id)), i(Ie.FLAG_USAGE)
						},
						className: Oe.a.reportStepButton
					}, s.fbt._("This award is being used inappropriately.", null, {
						hk: "Y8giW"
					})));
				switch (n) {
					case Ie.BEGIN:
						return a.a.createElement(E.a, {
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
					case Ie.REPORT_COMMUNITY_AWARD:
						return a.a.createElement(E.a, {
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
					case Ie.FLAG_USAGE:
						return a.a.createElement(E.a, {
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
			const Ne = [32, 128],
				Me = Object(i.c)({
					allAwards: e => e.awards.models,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(A.a)(e),
					isInEconLeaderboardsExperiment: T.b
				}),
				Se = e => Object(x.a)(e.id) ? e.postId : e.id,
				Le = Object(r.b)(Me, (e, {
					thing: t
				}) => ({
					hideAward: n => e(f({
						awardId: n,
						thingId: Se(t)
					})),
					onAddAward: (n, s) => {
						const o = Se(t);
						return e(Object(v.d)({
							awardId: s,
							correlationId: n,
							thingId: o
						}))
					},
					onHideTooltip: () => e(Object(C.i)()),
					onShowTooltip: t => e(Object(C.f)({
						tooltipId: t
					})),
					onToggleHideAwardModal: () => e(Object(g.i)("AwardBadges--Modal--HideAwardConfirmation")),
					triggerOverlayAnimation: () => e(Object(d.b)(Se(t)))
				}));
			class Re extends a.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(w.e)(w.a.GildingFlow, !0),
							{
								onAddAward: s,
								sendEvent: o,
								thing: a
							} = this.props;
						s(t, e);
						const {
							clickAddAward: r
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						o(r(a.id))
					}, this.handleShowAllAwards = () => {
						this.setState({
							showAllAwards: !0
						})
					}, this.handleHideAward = async e => {
						const {
							sendEvent: t,
							onToggleHideAwardModal: s,
							thing: o
						} = this.props;
						this.setState({
							selectedAward: e
						});
						const {
							clickHideAward: a
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(a(e, o.id)), s()
					}, this.handleHideAwardConfirmed = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: s
						} = this.state, {
							clickConfirmHideAward: o
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						s && (e(o(s, t.id)), this.props.hideAward(s.id))
					}, this.handleHideAwardCanceled = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: s
						} = this.state, {
							clickCancelHideAward: o
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						s && e(o(s, t.id))
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
						this.props.sendEvent(Object(_.clickAwardReportFlow)(e, this.props.thing.id)), this.setState({
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
						className: o,
						currentUser: r,
						hideCta: i,
						hideTopAwardedBadge: d,
						isConfirmModalOpen: c,
						isInEconLeaderboardsExperiment: l,
						isLoggedIn: m,
						isPostDetail: p,
						onHideTooltip: u,
						onShowTooltip: h,
						onToggleHideAwardModal: b,
						prefs: f,
						thing: v,
						triggerOverlayAnimation: g,
						tooltipType: C
					} = this.props, {
						showAllAwards: w
					} = this.state, _ = f.reduceAnimationsFromAwards || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, I = Object.keys(v.awardCountsById || {}), A = Object(k.r)(I.map(t => e[t]).filter(Boolean)), T = {};
					for (const s of Ne) {
						const e = {};
						T[`icon${s}`] = e;
						for (const t of A) e[t.id] = Object(y.c)({
							award: t,
							postOrComment: v,
							size: s,
							prefersReducedMotion: _
						})
					}
					const O = !!r && r.id === v.authorId;
					return a.a.createElement(a.a.Fragment, null, n ? a.a.createElement(he, {
						awards: A,
						awardsCountInView: t,
						className: o,
						hideAddAwardButton: i || !v.isGildable || O,
						hideTopAwardedBadge: d,
						icons: T,
						isInEconLeaderboardsExperiment: l,
						multiline: !!p,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: v,
						prefersReducedMotion: _,
						tooltipType: C,
						triggerOverlayAnimation: g
					}) : a.a.createElement(ke, {
						awards: A,
						className: o,
						hideBadgeButton: i || !m,
						hideTopAwardedBadge: d,
						icons: T,
						isInEconLeaderboardsExperiment: l,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: u,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: h,
						showAllAwards: w || !!p,
						thing: v,
						tooltipType: C
					}), c && r && this.state.selectedAward && a.a.createElement(E.a, {
						actionText: s.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: O ? Object(x.a)(v.id) ? s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(x.a)(v.id) ? s.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : s.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "qlfga"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: b,
						withOverlay: !0
					}), this.state.reportingAward && a.a.createElement(je, {
						award: this.state.reportingAward,
						thing: v,
						onClose: () => this.setState({
							reportingAward: null
						})
					}))
				}
			}
			t.a = Object(j.c)(Object(O.e)(Le(Object(I.c)(Re))))
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				p = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				u = n.n(p);
			const h = e => {
				const {
					className: t,
					comment: n,
					isCommentAuthorBlocked: o,
					isAuthorDeleted: r,
					isLivestreaming: i,
					isStrong: c,
					style: l,
					collapsed: p
				} = e;
				return p && o ? a.a.createElement("p", {
					className: Object(d.a)(u.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : a.a.createElement(m.a, {
					className: Object(d.a)(u.a.commentAuthorLink, t),
					author: n.author,
					isCommentAuthorBlocked: o,
					isAuthorDeleted: r,
					isLivestreaming: i,
					isStrong: c,
					style: l
				}, n.author)
			};
			var b = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				f = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				g = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				C = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				w = n("./src/reddit/components/PostTopMeta/index.tsx"),
				x = n("./src/reddit/controls/MetaData/index.tsx"),
				_ = n("./src/reddit/helpers/flair.ts"),
				E = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/reddit/models/Comment/index.ts"),
				A = n("./src/reddit/selectors/gold/powerups/index.ts"),
				T = n("./src/lib/constants/index.ts"),
				y = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				O = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				j = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = n.n(j);
			const M = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				renderedInOverlay: r,
				collapsed: i
			}) => a.a.createElement(O.b, {
				className: Object(d.a)(N.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: r ? w.c.Lightbox : void 0,
				isCommentAuthorBlocked: Object(k.g)(n),
				collapsed: i
			}, a.a.createElement(y.b, {
				ignore: Object(k.f)(n) || !!n.distinguishType && n.distinguishType !== T.G.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, a.a.createElement(h, {
				className: e,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				isCommentAuthorBlocked: Object(k.g)(n),
				isAuthorDeleted: Object(k.f)(n),
				collapsed: i
			})));
			var S = n("./src/config.ts"),
				L = n("./src/reddit/actions/tooltip.ts"),
				R = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const P = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var B = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(B);
			const D = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const o = Object(r.d)(),
					i = () => o(Object(L.h)({
						tooltipId: c
					})),
					c = P("CommentTopMeta--cakeday--", t, n),
					l = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("img", {
					className: Object(d.a)(F.a.cakedayIcon, e),
					src: `${S.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: c,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), a.a.createElement(R.c, {
					tooltipId: c,
					text: l
				}))
			};
			var U = n("./src/lib/addQueryParams/index.ts"),
				H = n("./src/reddit/actions/comment/index.ts"),
				W = n("./src/reddit/actions/post.ts"),
				G = n("./src/reddit/components/HumanDate/index.tsx"),
				q = n("./src/reddit/helpers/path/index.ts");
			const V = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						permalink: o,
						renderedInOverlay: i,
						isBlockingInterstitialEnabled: d
					} = e, c = Object(r.d)(), l = P("CommentTopMeta--Created--", n.id, i), m = () => c(Object(L.h)({
						tooltipId: l
					}));
					return a.a.createElement("a", {
						className: t,
						href: Object(U.a)(o, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: l,
						onClick: e => {
							z(c, n.id), d && (e.preventDefault(), c(Object(W.Y)(Object(q.b)(o), n.postId)))
						},
						onMouseEnter: m,
						onMouseLeave: m,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, a.a.createElement(G.d, {
						seconds: n.created,
						shortenedUnit: s
					}), a.a.createElement(R.c, {
						tooltipId: l
					}, a.a.createElement(G.b, {
						seconds: n.created
					})))
				},
				z = (e, t) => {
					window.addEventListener("focus", (function n() {
						K(e, t, n)
					}))
				},
				K = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(H.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(H.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var J = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				Q = n.n(J);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = () => a.a.createElement(x.a, {
				className: Q.a.crowdControlText
			}, Y._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Z = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				$ = n.n(Z);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = ({
				compact: e,
				editedAt: t
			}) => a.a.createElement(x.a, {
				className: $.a.editedText
			}, ee._("edited {time}", [ee._param("time", a.a.createElement(G.d, {
				seconds: t,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ne = n("./src/reddit/helpers/isRemoved.ts"),
				se = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				oe = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				ae = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				re = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				de = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				le = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = n.n(le);
			const pe = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: o
			}) => {
				const i = Object(r.d)(),
					d = e => () => i(Object(L.f)({
						tooltipId: e
					})),
					c = () => i(Object(L.i)()),
					l = t => P(t, e.id, o),
					m = l("CommentTopMeta--Approve--"),
					p = l("CommentTopMeta--Remove--"),
					u = l("CommentTopMeta--Report--"),
					h = l("CommentTopMeta--Spam--"),
					b = d(p);
				return a.a.createElement(a.a.Fragment, null, (e.approvedBy || e.isApproved) && a.a.createElement(a.a.Fragment, null, a.a.createElement(ae.a, {
					className: me.a.approveIcon,
					desc: Object(se.a)(e),
					id: m,
					onMouseEnter: d(m),
					onMouseLeave: c,
					isFilled: !0
				}), a.a.createElement(R.c, {
					tooltipId: m,
					text: Object(se.a)(e)
				})), Object(ne.a)(e) && a.a.createElement(a.a.Fragment, null, a.a.createElement(ie.a, {
					className: me.a.removeIcon,
					desc: Object(se.b)(e),
					id: p,
					onMouseEnter: b,
					onMouseLeave: c,
					isFilled: !0
				}), a.a.createElement(R.c, {
					tooltipId: p,
					text: Object(se.b)(e)
				})), Object(ne.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && a.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && a.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: b,
					onMouseLeave: c
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && a.a.createElement(re.a, {
					className: me.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(ce.a, {
					className: me.a.spamIcon,
					desc: Object(se.d)(e),
					id: h,
					onMouseEnter: d(h),
					onMouseLeave: c,
					isFilled: !0
				}), a.a.createElement(R.c, {
					tooltipId: h,
					text: Object(se.d)(e)
				})), Object(oe.a)(e) && a.a.createElement(a.a.Fragment, null, a.a.createElement(de.a, {
					className: me.a.reportIcon,
					desc: Object(se.c)(e.numReports),
					id: u,
					onMouseEnter: d(u),
					onMouseLeave: c,
					isFilled: !0
				}), a.a.createElement(R.c, {
					tooltipId: u,
					text: Object(se.c)(e.numReports)
				})))
			};
			var ue, he = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ue || (ue = {}));
			var be = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				fe = n.n(be);
			const ve = {
					[ue.Admin]: {
						color: he.c,
						label: s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[ue.Mod]: {
						color: he.d,
						label: s.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[ue.Op]: {
						color: he.a,
						label: s.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[ue.AlumniAdmin]: {
						color: he.c,
						label: s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[ue.Contractor]: {
						color: he.a,
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
					const t = Object(r.d)(),
						n = function(e) {
							return e.isAdmin ? ue.Admin : e.isMod ? ue.Mod : e.isOp ? ue.Op : e.distinguishType === T.G.ALUMNI_ADMIN ? ue.AlumniAdmin : e.authorIsContractor ? ue.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === ue.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						label: i,
						tooltipTemplate: c
					} = ve[n], l = P(s, e.comment.id, e.renderedInOverlay), m = c(e), p = () => t(Object(L.h)({
						tooltipId: l
					}));
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
						className: Object(d.a)(fe.a.role, e.className),
						style: {
							color: o
						},
						id: l,
						onMouseEnter: p,
						onMouseLeave: p
					}, a.a.createElement("span", null, i), n === ue.Mod && a.a.createElement(Ce, null)), a.a.createElement(R.c, {
						tooltipId: l,
						text: m
					}))
				},
				Ce = () => a.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: fe.a.modAchievement,
					src: `${S.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var we = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				xe = n.n(we);
			const {
				fbt: _e
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ee = () => a.a.createElement(x.a, {
				className: xe.a.stickiedText
			}, _e._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Ie = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				ke = n.n(Ie);
			const Ae = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: c,
					ignoreLock: m,
					isLivestreaming: p,
					permalink: u,
					renderedInOverlay: h,
					subredditDisplayText: T,
					renderContractorBadge: y,
					isInModNotesExperiment: O
				} = e, j = Object(I.a)(), N = i.subredditId, S = Object(r.e)(e => Object(A.h)(e, {
					subredditId: N
				}));
				if (i.isDeleted) return a.a.createElement("div", {
					className: Object(d.a)(ke.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, a.a.createElement("span", {
					className: ke.a.authorLine
				}, a.a.createElement("span", {
					className: ke.a.metaText
				}, i.deletedBy === k.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), a.a.createElement(x.c, {
					className: ke.a.separator
				}), a.a.createElement(V, {
					key: "Created",
					className: ke.a.metaText,
					comment: i,
					compact: !0,
					permalink: u,
					renderedInOverlay: h
				})));
				return a.a.createElement("div", {
					className: Object(d.a)(ke.a.container, t),
					"data-testid": "post-comment-header"
				}, a.a.createElement("span", {
					className: ke.a.authorLine
				}, !Object(k.f)(i) && a.a.createElement(f.b, {
					className: ke.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), a.a.createElement("div", {
					className: ke.a.baselineItem
				}, a.a.createElement(M, {
					authorClassName: ke.a.author,
					comment: i,
					isLivestreaming: p,
					renderedInOverlay: h,
					collapsed: n
				})), !Object(k.f)(i) && O && a.a.createElement(C.a, {
					postOrComment: i
				}), o && a.a.createElement(X, null), a.a.createElement(ge, {
					className: ke.a.role,
					comment: i,
					subredditDisplayText: T,
					renderContractorBadge: y,
					renderedInOverlay: h
				}), i.isAuthorCakeday ? a.a.createElement(D, {
					className: ke.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: h
				}) : !Object(k.f)(i) && S && a.a.createElement(b.a, {
					className: ke.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						j(Object(E.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), a.a.createElement(g.a, {
					className: ke.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), a.a.createElement(x.c, {
					className: ke.a.separator
				}), a.a.createElement(V, {
					key: "Created",
					className: ke.a.metaText,
					comment: i,
					compact: !0,
					permalink: u,
					renderedInOverlay: h
				}), i.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(x.c, {
					className: ke.a.separator
				}), a.a.createElement(Ee, null)), i.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(x.c, {
					className: ke.a.separator
				}), a.a.createElement(te, {
					compact: !0,
					editedAt: i.editedAt
				})), a.a.createElement(pe, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: h
				}), a.a.createElement(l.a, {
					thing: i,
					tooltipType: h ? w.c.Lightbox : void 0
				})), c && !Object(_.o)(c) && a.a.createElement("span", {
					className: ke.a.userFlairLine
				}, a.a.createElement(v.b, {
					className: ke.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var Te = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				ye = n("./src/reddit/selectors/economics.ts"),
				Oe = n("./src/reddit/models/Flair/index.ts"),
				je = n("./src/reddit/selectors/comments.ts"),
				Ne = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				Me = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Se = n("./src/reddit/selectors/subreddit.ts"),
				Le = n("./src/reddit/selectors/userFlair.ts"),
				Re = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Pe = n.n(Re);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = c.a.wrapped(v.b, "RightPositionedAuthorFlair", Pe.a),
				De = c.a.span("DeletedText", Pe.a),
				Ue = c.a.wrapped(x.a, "MetaSeparator", Pe.a),
				He = Object(r.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(ye.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(Se.G)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Le.e)(e, {
						subredditId: t.subredditId
					}),
					commentPermalink: (e, t) => Object(je.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Me.b,
					isInModNotesExperiment: (e, {
						comment: t
					}) => Object(Ne.a)(e, t.subredditId)
				}));
			t.a = He(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: r,
					commentPermalink: i,
					commentsPageKey: c,
					compact: m,
					flair: p,
					flairPosition: u,
					hasBadges: h,
					isBlockingInterstitialEnabled: b,
					isLivestreaming: C,
					isPostComment: _,
					ignoreFlairPosition: E,
					ignoreLock: I,
					renderContractorBadge: A,
					renderedInOverlay: T,
					subredditDisplayText: y,
					userHasNft: O,
					isInModNotesExperiment: j
				} = e, N = a.a.createElement(a.a.Fragment, null, a.a.createElement(Te.b, {
					comment: r,
					commentId: r.id
				}), a.a.createElement(Te.a, {
					comment: r,
					commentId: r.id,
					commentsPageKey: c
				}));
				if (_) return a.a.createElement(a.a.Fragment, null, a.a.createElement(Ae, {
					className: Object(d.a)(n, {
						[Pe.a.collapsed]: s
					}),
					collapsedBecauseCrowdControl: o,
					comment: r,
					flair: p || null,
					ignoreLock: I,
					isLivestreaming: C,
					permalink: i,
					renderedInOverlay: T,
					subredditDisplayText: y,
					renderContractorBadge: !!A,
					collapsed: s,
					isInModNotesExperiment: j
				}), N);
				if (r.isDeleted) return a.a.createElement(We, Be({}, e, {
					className: Object(d.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s
					})
				}));
				if (s) return a.a.createElement(Ge, Be({}, e, {
					className: Object(d.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s
					})
				}));
				const S = !E && u === Oe.b.Left;
				return a.a.createElement("div", {
					className: Object(d.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s,
						[Pe.a.hasBadges]: h,
						[Pe.a.liveStreaming]: C
					}),
					"data-testid": "comment-top-meta"
				}, p && S && a.a.createElement(v.b, {
					flair: p,
					forceSmallEmojis: m
				}), !Object(k.f)(r) && a.a.createElement(f.b, {
					className: Pe.a.userBadges,
					showAddCustom: !0,
					subredditId: r.subredditId,
					userId: r.authorId,
					uniqueIdentifier: r.id
				}), t && t, a.a.createElement(M, {
					authorClassName: O ? Pe.a.NftAuthor : void 0,
					comment: r,
					isLivestreaming: C,
					isStrong: !!m,
					renderedInOverlay: T,
					collapsed: s
				}), o && a.a.createElement(X, null), o && a.a.createElement(x.c, {
					className: Pe.a.metaText,
					key: "crowdControlSeparator"
				}), p && !S && a.a.createElement(Fe, {
					flair: p,
					forceSmallEmojis: m
				}), !m && a.a.createElement(g.a, {
					className: Pe.a.publicPoints,
					contentId: r.id,
					metaSeparator: a.a.createElement(x.c, {
						className: Pe.a.metaText
					}),
					subredditId: r.subredditId,
					userId: r.authorId,
					username: r.author
				}), N, a.a.createElement(ge, {
					className: Pe.a.authorRole,
					comment: r,
					subredditDisplayText: y,
					renderContractorBadge: !!A,
					renderedInOverlay: T
				}), !m && a.a.createElement(a.a.Fragment, null, !r.isDeleted && !_ && a.a.createElement(a.a.Fragment, null, a.a.createElement(x.b, {
					className: Pe.a.metaText,
					isScoreHidden: r.isScoreHidden,
					score: r.score
				}), a.a.createElement(x.c, {
					className: Pe.a.metaText,
					key: "scoreCreatedSeparator"
				})), a.a.createElement(V, {
					key: "Created",
					className: Pe.a.MetaLink,
					comment: r,
					permalink: i,
					renderedInOverlay: T,
					isBlockingInterstitialEnabled: b
				}), r.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(x.c, {
					className: Pe.a.separator
				}), a.a.createElement(Ee, null)), r.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(x.c, {
					className: Pe.a.separator
				}), a.a.createElement(te, {
					editedAt: r.editedAt
				}))), a.a.createElement(pe, {
					comment: r,
					ignoreLock: I,
					renderedInOverlay: T
				}), a.a.createElement(l.a, {
					thing: r,
					tooltipType: T ? w.c.Lightbox : void 0
				}))
			});
			const We = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: r,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d,
						renderedInOverlay: c
					} = e;
					return a.a.createElement("div", {
						className: o
					}, a.a.createElement(De, null, r.deletedBy === k.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), a.a.createElement(V, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: r,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: d
					}), n && qe({
						childrenInfo: t
					}))
				},
				Ge = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o,
						collapsed: r,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d
					} = e;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement("div", null, a.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(k.f)(t),
						collapsed: r
					})), a.a.createElement(x.b, {
						className: Pe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), a.a.createElement(x.c, {
						className: Pe.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(V, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: o,
						isBlockingInterstitialEnabled: d
					}), qe({
						childrenInfo: s
					}))
				},
				qe = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return a.a.createElement(Ue, {
						className: Pe.a.metaText
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
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Comments-PredictionComment").then(n.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, n) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				Avatar: "_3ES-TCR45dPoj_NuOATuNi",
				avatar: "_3ES-TCR45dPoj_NuOATuNi",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				ErrorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				errorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return y
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "a", (function() {
				return G
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/times.js"),
				a = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/pages/comments.ts"),
				p = n("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/describeApiError/index.ts"),
				b = n("./src/reddit/helpers/path/index.ts"),
				f = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				v = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				g = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				C = n("./src/reddit/icons/svgs/Comments/index.tsx"),
				w = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				x = n("./src/reddit/components/Comments/States/index.m.less"),
				_ = n.n(x);
			const E = l.a.wrapped(C.a, "CommentsIcon", _.a),
				I = l.a.wrapped(w.a, "SnooFacepalm", _.a),
				k = l.a.p("EmptyTitle", _.a),
				A = l.a.p("ErrorTitle", _.a),
				T = l.a.p("EmptyText", _.a),
				y = ({
					className: e,
					isChat: t
				}) => i.a.createElement("div", {
					className: Object(c.a)(_.a.StateContainer, e)
				}, i.a.createElement(E, null), i.a.createElement(k, null, t ? s.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : s.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), i.a.createElement(T, null, s.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				O = () => i.a.createElement("div", {
					className: _.a.StateContainer
				}, i.a.createElement(E, null), i.a.createElement(k, null, s.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(T, null, s.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				j = ({
					link: e
				}) => i.a.createElement("div", {
					className: _.a.StateContainer
				}, i.a.createElement(E, null), i.a.createElement(k, null, s.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), i.a.createElement(u.n, {
					to: Object(b.b)(e)
				}, s.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				N = Object(d.b)(null, (e, {
					postId: t,
					commentId: n,
					sort: s
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, n, {
						sort: s
					}, s))
				}))(({
					apiError: e,
					onClick: t
				}) => i.a.createElement("div", {
					className: _.a.StateContainer
				}, i.a.createElement(I, null), i.a.createElement(A, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : s.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), i.a.createElement(u.l, {
					onClick: t
				}, s.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				M = ({
					postId: e,
					commentId: t,
					sort: n,
					apiError: s
				}) => i.a.createElement("div", {
					className: Object(c.a)(_.a.StateContainer, _.a.ErrorFullPage)
				}, i.a.createElement(N, {
					postId: e,
					commentId: t,
					sort: n,
					apiError: s
				})),
				S = l.a.wrapped(({
					className: e
				}) => i.a.createElement("div", {
					className: e
				}, i.a.createElement(p.a, null)), "LoadingFullPage", _.a),
				L = l.a.div("CommentsPlaceholderContainer", _.a),
				R = l.a.div("CommentPlaceholder", _.a),
				P = l.a.div("Avatar", _.a),
				B = l.a.div("VoteColumn", _.a),
				F = l.a.div("TextColumn", _.a),
				D = l.a.wrapped(g.a, "Upvote", _.a),
				U = l.a.wrapped(v.a, "Downvote", _.a),
				H = () => i.a.createElement("div", {
					className: Object(c.a)(_.a.TopMetaPlaceholder, Object(f.a)({
						isLoading: !0
					}))
				}),
				W = () => i.a.createElement("div", {
					className: Object(c.a)(_.a.CommentBodyPlaceholder, Object(f.a)({
						isLoading: !0
					}))
				}),
				G = e => i.a.createElement(L, null, a()(10, t => i.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(f.a)({
						isLoading: !0
					})
				}) : i.a.createElement(B, null, i.a.createElement(D, null), i.a.createElement(U, null)), i.a.createElement(F, null, i.a.createElement(H, null), i.a.createElement(W, null)))))
		},
		"./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less": function(e, t, n) {
			e.exports = {
				awardComment: "Qkdtf2CTKJDknbazL-AMW",
				silverTierAwardComment: "_2K5jTegGACZTi8TWvs4SyB",
				goldTierAwardComment: "_37sBwMRYEzwkWdokXOOlQJ",
				platinumTierAwardComment: "_11aS54KCcFm_OLfRPhp_3D",
				imageContainer: "_1vPp7dOkl_3DKjZYjW06BW",
				backgroundAnimation: "_2i4HeuNgltvyx1u5avuVnK",
				backgroundStar: "_3nk7xeDcgOeGYAfF3Spsbh",
				spinCW: "_2Puyz3btdtqWX6E5eI2hBB",
				spinCw: "_2Puyz3btdtqWX6E5eI2hBB",
				backgroundStar2: "_2kPpfDsovGUW6dzF2F4n3P",
				backgroundSparkle: "_3z4E7G1TTNdvve0FxUTLUo",
				twinkle: "Vv46qL__rbNs6Bj4N8Dsl",
				sparkleBottomLeft: "u1JiASpbiuGwsfsTCsHCf",
				sparkleTopRight: "_3rJK5s9oFDAt1F0Hpr7BRE",
				sparkleBottomRight: "_1RcdEbzgGuOANa3oJzFJdl",
				awardCommentText: "_1uqs3HOwKgnPYqpbzW9WqV",
				coinIcon: "_2uSjw9de_n2QHtDV1EiJPd"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/lodash/memoize.js"),
				a = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				p = n("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				u = n("./src/reddit/selectors/experiments/econ/index.ts"),
				h = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				b = n.n(h);
			const f = l.a.div("Userpic", b.a);
			t.a = a()(({
				defaultImage: e,
				userId: t
			}) => {
				const n = Object(d.e)(u.z),
					{
						processingAvatarImageUrl: o
					} = s.a;
				if (n) return e ? i.a.createElement("img", {
					className: b.a.NewUserpic,
					src: e,
					alt: "user icon"
				}) : i.a.createElement(p.a, {
					className: b.a.NewUserpic,
					userId: t
				});
				const a = (e => e.replace(c.Ib.Account + "_", ""))(t),
					{
						avatar: r,
						color: l
					} = (e => {
						const t = m.length,
							n = parseInt(e, 36),
							s = n % 20 + 1,
							o = Math.floor(n / 20) % t;
						return {
							avatar: ("0" + s).slice(-2),
							color: m[o]
						}
					})(a),
					h = `${o}/avatar_default_${r}_${l}.png`;
				return i.a.createElement(f, {
					"data-testid": "old-default-icon",
					style: {
						backgroundImage: `url(${h})`,
						backgroundColor: `#${l}`
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				roundedIcon: "qzfpAikXRAwHLMGlL6_5m",
				NewUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				newUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				c = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				l = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				m = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				p = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				u = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				h = n.n(u);
			const b = Object(r.c)({
					account: e => e.user.account
				}),
				f = Object(a.b)(b);
			t.a = i.a.wrapped(f(({
				account: e,
				className: t,
				height: n,
				icon: s,
				isLivestreaming: a,
				isNSFW: r,
				trash: i,
				userId: u,
				width: b
			}) => {
				const f = a ? 36 : 20,
					v = u || `${null==e?void 0:e.id}`,
					g = {
						height: n || f,
						width: b || f,
						minWidth: b || f
					};
				if (i) return o.a.createElement("div", {
					className: t,
					style: g
				}, o.a.createElement(p.a, {
					className: h.a.TrashIcon
				}));
				const C = e && e.id === u ? e.accountIcon : r ? l.a : null != s ? s : void 0;
				return Object(m.a)(C) ? o.a.createElement("div", {
					className: t,
					style: g
				}, o.a.createElement(c.a, {
					headshot: C
				})) : o.a.createElement("div", {
					className: t,
					style: g
				}, o.a.createElement(d.a, {
					userId: v,
					defaultImage: C
				}))
			}), "ChatIcon", h.a)
		},
		"./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less": function(e, t, n) {
			e.exports = {
				CollapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				LivestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF",
				livestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				Menu: "_5my6mpNfA-0tUAWEfSqKg",
				menu: "_5my6mpNfA-0tUAWEfSqKg",
				Livestreaming: "_3BiWoByLkhvgOFD5mQKC3P",
				livestreaming: "_3BiWoByLkhvgOFD5mQKC3P",
				MenuItem: "_2w0PAV-r7nSn2rWmPNSgkZ",
				menuItem: "_2w0PAV-r7nSn2rWmPNSgkZ",
				MenuItemPermalink: "_2aYTbUyyYyWA0n00oUWj1v",
				menuItemPermalink: "_2aYTbUyyYyWA0n00oUWj1v",
				ApproveIcon: "_3gt_IOdHja-rh09hVkYpPb",
				approveIcon: "_3gt_IOdHja-rh09hVkYpPb",
				BlockIcon: "_1QA0OmqFuhRg545zEsYGHt",
				blockIcon: "_1QA0OmqFuhRg545zEsYGHt",
				DownvoteIcon: "nnun3pxpJpQYatp4jQ8qI",
				downvoteIcon: "nnun3pxpJpQYatp4jQ8qI",
				EditIcon: "_3PW1UsfpSAMxomcTcf_ikU",
				editIcon: "_3PW1UsfpSAMxomcTcf_ikU",
				FlagIcon: "_269qxNSrwp7r6TRmz330pB",
				flagIcon: "_269qxNSrwp7r6TRmz330pB",
				ModeratorIcon: "XH0mr3-n4WSQOuflprs1R",
				moderatorIcon: "XH0mr3-n4WSQOuflprs1R",
				RemoveIcon: "_2buZ4_GVymVoT-epE6aVWC",
				removeIcon: "_2buZ4_GVymVoT-epE6aVWC",
				ReplyIcon: "GOcnt_7O2SheQ1cMVusGY",
				replyIcon: "GOcnt_7O2SheQ1cMVusGY",
				SpamIcon: "_2uhO8ps5ygzeaMfBqgte48",
				spamIcon: "_2uhO8ps5ygzeaMfBqgte48",
				TrashIcon: "y5OXD3zhZe6eOjDY_te9N",
				trashIcon: "y5OXD3zhZe6eOjDY_te9N",
				UnblockIcon: "_1IhZkqtDhYt8bWr9c-84ox",
				unblockIcon: "_1IhZkqtDhYt8bWr9c-84ox",
				UpvoteIcon: "_1MOqImJegfZ2kFkmYR7sN8",
				upvoteIcon: "_1MOqImJegfZ2kFkmYR7sN8",
				HorizontalVotes: "_292WfpEp6iZvLlnRwGwndc",
				horizontalVotes: "_292WfpEp6iZvLlnRwGwndc"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Reply/index.m.less": function(e, t, n) {
			e.exports = {
				ChatIcon: "A7lJyo4aA-0ZG543rcU5N",
				chatIcon: "A7lJyo4aA-0ZG543rcU5N",
				ReplyAuthor: "_1oqAMLcBteCs1uqiee6hPH",
				replyAuthor: "_1oqAMLcBteCs1uqiee6hPH",
				ReplyComment: "_1G2J0kP9hg_lbO0_snqlRa",
				replyComment: "_1G2J0kP9hg_lbO0_snqlRa",
				ReplyWrapper: "nJ-zNz-rKWpUAVwBrcicJ",
				replyWrapper: "nJ-zNz-rKWpUAVwBrcicJ",
				ReplyLinkBubble: "_2jEkNe2J7P_4gGTPVvYH_n",
				replyLinkBubble: "_2jEkNe2J7P_4gGTPVvYH_n",
				delete: "YvyNyAbJVOuICmvKmRvEQ",
				Livestreaming: "_2cp8F9ZQJKebx4VCw7KnnY",
				livestreaming: "_2cp8F9ZQJKebx4VCw7KnnY"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less": function(e, t, n) {
			e.exports = {
				SystemMessageText: "_2QTeDg8kTAhAgxZWbsorEm",
				systemMessageText: "_2QTeDg8kTAhAgxZWbsorEm"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/index.m.less": function(e, t, n) {
			e.exports = {
				Menu: "_2qe0ML8CXcWe4YSyvE9LgB",
				menu: "_2qe0ML8CXcWe4YSyvE9LgB",
				CommentWrapper: "_1cLn4fCD5gseRsUmt4bMvC",
				commentWrapper: "_1cLn4fCD5gseRsUmt4bMvC",
				CommentReadMoreButton: "_1MYiq2Hs6CoOoLuxy6wdz4",
				commentReadMoreButton: "_1MYiq2Hs6CoOoLuxy6wdz4",
				SystemMessageWrapper: "_3XyD1I20-_JDHKoCJuLrOW",
				systemMessageWrapper: "_3XyD1I20-_JDHKoCJuLrOW",
				LivestreamingCommentWrapper: "_2eTWiuSXGVaOGc5m6zQgeI",
				livestreamingCommentWrapper: "_2eTWiuSXGVaOGc5m6zQgeI",
				livestreamingTimeStamp: "_3tm5nGCrgdKGC7teW20lkz",
				DeleteText: "_3NYb7Rn0lpswKMy5MQyLQd",
				deleteText: "_3NYb7Rn0lpswKMy5MQyLQd",
				HighlightTarget: "_1xb8KSvW9CPjS0xPMZ7Dwf",
				highlightTarget: "_1xb8KSvW9CPjS0xPMZ7Dwf",
				Time: "_3zcUapb9ifA8a4OWCpuUSq",
				time: "_3zcUapb9ifA8a4OWCpuUSq",
				ErrorText: "_2juClHvsqBfQddQtKSlF6V",
				errorText: "_2juClHvsqBfQddQtKSlF6V",
				RichTextJson: "_1E4TbYahRPkKEc1TNmQX-K",
				richTextJson: "_1E4TbYahRPkKEc1TNmQX-K",
				Livestreaming: "_24c_0WdNkjV_cdd2RJ6AmK",
				livestreaming: "_24c_0WdNkjV_cdd2RJ6AmK",
				TopMeta: "SJ4qRd99ApBBSiNYdfSoh",
				topMeta: "SJ4qRd99ApBBSiNYdfSoh",
				ChatIcon: "_3vCuaD6pLcosMuwzU6nhAB",
				chatIcon: "_3vCuaD6pLcosMuwzU6nhAB",
				Reply: "_3F-9o12RM4UV20egYU2h21",
				reply: "_3F-9o12RM4UV20egYU2h21",
				CommentTruncated: "_3PXAOD2xpFqPtI_Lvf2_yc",
				commentTruncated: "_3PXAOD2xpFqPtI_Lvf2_yc",
				CommentExpanded: "yvxBkSg0EB3OQJ-wQuj73",
				commentExpanded: "yvxBkSg0EB3OQJ-wQuj73",
				TruncatedVotesButton: "_3WFcMWN18wFH1DiydIjsja",
				truncatedVotesButton: "_3WFcMWN18wFH1DiydIjsja"
			}
		},
		"./src/reddit/components/CommentsChat/Scroller/index.m.less": function(e, t, n) {
			e.exports = {
				NewComments: "_3GhW7Cq0eM7vr_gXsZP1XK",
				newComments: "_3GhW7Cq0eM7vr_gXsZP1XK",
				show: "Tptm_9duqsvpN1p297GT0",
				ButtonWrapper: "ol-vdNEpF-pHpwSKyGQDF",
				buttonWrapper: "ol-vdNEpF-pHpwSKyGQDF",
				ScrollerWrapper: "_2HUS1KWemnPFcYeDdGcB5k",
				scrollerWrapper: "_2HUS1KWemnPFcYeDdGcB5k",
				loading: "_2Nsq1nyEjWMCKSWs72G7lx",
				ScrollerSection: "_3nKpelf5u6QAnrZcGbvig_",
				scrollerSection: "_3nKpelf5u6QAnrZcGbvig_",
				gradientAnimation: "_1GHoi4QoUeFfb4IzUIMCoR",
				LivestreamingWrapper: "_2kV0SeyyPoyl4Cfm2Fi2UI",
				livestreamingWrapper: "_2kV0SeyyPoyl4Cfm2Fi2UI",
				ChunkPlaceholder: "_1qabk5TtS1HAm0eXfcUmxv",
				chunkPlaceholder: "_1qabk5TtS1HAm0eXfcUmxv",
				top: "ZuYs_5l7Qf6T91OUOD4pG"
			}
		},
		"./src/reddit/components/CommentsChat/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "COMMENT_TIMESTAMP_UPDATE_INTERVAL", (function() {
				return gn
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/debounce.js"),
				o = n.n(s),
				a = n("./node_modules/lodash/last.js"),
				r = n.n(a),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/setInterval/index.ts"),
				u = n("./src/lib/timeAgo/index.ts"),
				h = n("./src/reddit/actions/blockedRedditors.ts"),
				b = n("./src/reddit/actions/comment/index.ts"),
				f = n("./src/lib/makeActionCreator/index.ts"),
				v = n("./node_modules/lodash/first.js"),
				g = n.n(v),
				C = n("./node_modules/lodash/isArray.js"),
				w = n.n(C),
				x = n("./src/reddit/helpers/isComment.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				E = n("./src/reddit/models/Comment/index.ts"),
				I = n("./src/reddit/models/Flair/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				A = n("./src/reddit/models/Vote/index.ts");
			const T = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const n = O(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(_.b)(e.associated_award) : void 0,
							author: e.author,
							authorId: e.author_fullname,
							authorIconImage: e.author_icon_img,
							authorIconIsDefault: e.author_is_default_icon,
							authorIconIsNSFW: e.author_is_nsfw_icon,
							authorSnoovatarImage: e.author_snoovatar_img,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedReasonCode: e.collapsed_reason_code,
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							commentType: e.comment_type,
							created: e.created_utc,
							distinguishType: y(n),
							id: e.name,
							isAdmin: n === E.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: n === E.e.Submitter,
							isMod: n === E.e.Moderator,
							markdown: e.body,
							media: {
								type: "rtjson",
								richtextContent: e.rtjson || {
									document: [{
										c: [{
											e: "text",
											t: e.body
										}],
										e: "par"
									}]
								},
								rteMode: k.i.RICH_TEXT
							},
							parentId: e.parent_id && Object(x.a)(e.parent_id) ? e.parent_id : null,
							permalink: e.context,
							postId: e.link_id,
							score: e.score,
							subredditId: e.subreddit_id,
							treatmentTags: e.treatment_tags,
							isSystem: !1,
							approvedAtUTC: null,
							approvedBy: null,
							bannedAtUTC: null,
							bannedBy: null,
							collapsedReason: null,
							deletedBy: null,
							editedAt: null,
							ignoreReports: !1,
							isApproved: !1,
							isAuthorPremium: !1,
							isLocked: !1,
							isDeleted: !1,
							isRemoved: !1,
							isScoreHidden: !1,
							isSpam: !1,
							isStickied: !1,
							isSaved: !1,
							modReports: [],
							modReportsDismissed: [],
							numReports: 0,
							postAuthor: null,
							postTitle: null,
							sendReplies: !0,
							userReports: [],
							userReportsDismissed: [],
							voteState: A.a.notVoted,
							...t || {}
						}
					}
				},
				y = e => {
					switch (e) {
						case E.e.Admin:
							return m.G.ADMIN;
						case E.e.Moderator:
							return m.G.MODERATOR;
						case E.e.Alumni:
							return m.G.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				O = e => g()((e || []).filter(e => w()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || E.e.None;
			const j = (e, t, n) => {
				const s = {
						[t]: {}
					},
					{
						author: o,
						author_flair_background_color: a,
						author_flair_richtext: r,
						author_flair_template_id: i,
						author_flair_text: d,
						author_flair_text_color: c,
						author_flair_type: l
					} = n;
				if (o && l) {
					if (l === I.f.Richtext) {
						if (!a || !r) return;
						return {
							[t]: {
								[o]: {
									type: l,
									backgroundColor: a,
									cssClass: void 0,
									richtext: r,
									templateId: i,
									textColor: c
								}
							}
						}
					}
					if (l === I.f.Text) {
						if (!d) return s;
						return {
							[t]: {
								[o]: {
									type: l,
									backgroundColor: a,
									cssClass: void 0,
									text: d,
									templateId: i,
									textColor: c
								}
							}
						}
					}
				}
			};
			var N = n("./src/lib/env/index.ts");
			const M = new Map,
				S = e => e,
				L = new Set;
			var R;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(R || (R = {}));
			const P = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				B = (e, t) => {
					const n = S(t),
						s = M.get(n);
					s && s.socket && (s.isClosePlanned = !0, s.socket.close())
				},
				F = (e, t, n, s) => {
					const o = S(t),
						a = M.get(o);
					if (a && (a.socket.readyState === WebSocket.CONNECTING || a.socket.readyState === WebSocket.OPEN)) return;
					const r = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					M.set(o, r), r.socket.addEventListener("open", () => {
						r.retries = {
							...P
						}
					}), r.socket.addEventListener("message", H.bind(null, s)), r.socket.addEventListener("close", D.bind(null, o, s)), r.socket.addEventListener("error", W.bind(null, o)), window && window.addEventListener("beforeunload", B.bind(null, e, t))
				},
				D = (e, t, n) => {
					const s = M.get(e);
					s && (s.isClosePlanned ? M.delete(e) : U(e, t))
				},
				U = (e, t) => {
					const n = M.get(e);
					if (!n) return;
					const {
						retries: {
							backoffTime: s,
							connectionAttempts: o,
							jitterAmount: a,
							maximumRetries: r
						},
						socket: i,
						uniqueId: d,
						url: c
					} = n;
					if (M.delete(e), o < r && i.readyState !== WebSocket.OPEN) {
						const e = s * Math.pow(2, o),
							r = Math.random() * a - a / 2,
							i = Math.round(e + r),
							l = {
								...n.retries,
								connectionAttempts: o + 1
							};
						setTimeout(() => {
							F(c, d, l, t)
						}, i), Object(N.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				H = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(N.a)() && console.error(t)
					}
				},
				W = (e, t) => {
					const n = M.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? M.delete(e) : Object(N.a)() && console.error(t)
				};
			var G = n("./src/reddit/selectors/comments.ts"),
				q = n("./src/reddit/selectors/commentSelector.ts"),
				V = n("./src/reddit/selectors/moderatorPermissions.ts"),
				z = n("./src/reddit/actions/comment/websocket/constants.ts");
			const K = Object(f.a)(z.b),
				J = Object(f.a)(z.c),
				Q = Object(f.a)(z.a),
				Y = Object(f.a)(z.d),
				X = {},
				Z = (e, t, n, s) => async (o, a) => {
					(e => new Promise(t => {
						const {
							cb: n,
							url: s,
							uniqueId: o
						} = e;
						L.has(o) ? t() : (L.add(o), setTimeout(() => {
							L.delete(o), F(s, o, {
								...P
							}, n), t()
						}, 1))
					}))({
						uniqueId: n,
						url: t,
						cb: t => {
							switch (t.type) {
								case R.NEW_COMMENT: {
									const n = t.payload.name,
										r = T(t.payload),
										i = a(),
										d = Object(q.b)(i, {
											commentId: n
										}),
										c = !(!n || !X[n]);
									if (r && !c) {
										const n = j(0, s, t.payload),
											a = t.payload.total_comment_count;
										if (void 0 === d) {
											const t = Object(G.w)(i, {
												commentsPageKey: e
											});
											o(K({
												authorFlair: n,
												comment: r,
												commentsPageKey: e,
												headCommentId: t,
												numComments: a
											}))
										} else o(J({
											authorFlair: n,
											comment: r,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case R.UPDATE_COMMENT: {
									const n = t.payload.name,
										r = a(),
										i = Object(q.b)(r, {
											commentId: n
										}),
										d = T(t.payload);
									if (i && d) {
										const n = j(0, s, t.payload),
											a = t.payload.total_comment_count;
										o(J({
											authorFlair: n,
											comment: d,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case R.UPDATE_COMMENT_SCORE: {
									const n = t.payload.name,
										s = t.payload.score,
										r = a(),
										i = Object(q.b)(r, {
											commentId: n
										});
									i && o(J({
										comment: {
											...i,
											score: s
										},
										commentsPageKey: e
									}));
									break
								}
								case R.DELETE_COMMENT: {
									const e = t.payload.name,
										n = a(),
										s = Object(q.b)(n, {
											commentId: e
										});
									s && !s.isDeleted ? o(Q({
										id: e
									})) : X[e] = R.DELETE_COMMENT;
									break
								}
								case R.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										n = t.payload.name,
										s = a(),
										r = Object(q.b)(s, {
											commentId: n
										}),
										i = (s.user.account && s.user.account.id) === (r && r.authorId),
										d = !!e && !!Object(V.l)(s, {
											postId: e
										});
									!r || r.isRemoved && r.isDeleted || i || d ? X[n] = R.REMOVE_COMMENT : o(Q({
										id: n
									}));
									break
								}
								case R.USER_JOIN: {
									const n = T(t.payload, {
											isSystem: !0
										}),
										s = !0;
									n && o(Y({
										comment: n,
										commentsPageKey: e,
										isChatSort: s
									}));
									break
								}
							}
						}
					})
				};
			var $ = n("./src/reddit/actions/pages/comments.ts"),
				ee = n("./src/reddit/components/Comments/States/index.tsx"),
				te = n("./node_modules/fbt/lib/FbtPublic.js"),
				ne = n("./node_modules/lodash/defer.js"),
				se = n.n(ne),
				oe = n("./src/lib/classNames/index.ts"),
				ae = n("./src/lib/lessComponent.tsx"),
				re = n("./src/lib/makeDraftKey/index.ts"),
				ie = n("./src/lib/objectSelector/index.ts"),
				de = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ce = n("./src/reddit/components/Comments/PredictionComment/async.ts"),
				le = n("./src/reddit/helpers/awards/message.ts"),
				me = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				pe = n("./src/reddit/components/RichTextJson/index.tsx"),
				ue = n("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				he = n("./src/reddit/icons/svgs/Star/index.tsx"),
				be = n("./src/reddit/icons/svgs/Star2/index.tsx"),
				fe = n("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				ve = n.n(fe);
			const ge = Object(ie.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				Ce = e => {
					const {
						award: t,
						comment: n,
						iconUrl: s
					} = e;
					let o = "",
						a = !0,
						r = !1;
					return t.coinPrice < le.a ? (o = ve.a.silverTierAwardComment, a = !1) : t.coinPrice < le.b ? o = ve.a.goldTierAwardComment : (o = ve.a.platinumTierAwardComment, r = !0), d.a.createElement("div", {
						className: Object(oe.a)(ve.a.awardComment, o)
					}, d.a.createElement("div", {
						className: ve.a.imageContainer
					}, a && d.a.createElement(d.a.Fragment, null, d.a.createElement(he.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundStar)
					}), d.a.createElement(be.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundStar, ve.a.backgroundStar2)
					})), r && d.a.createElement(d.a.Fragment, null, d.a.createElement(ue.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleBottomLeft)
					}), d.a.createElement(ue.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleTopRight)
					}), d.a.createElement(ue.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleBottomRight)
					})), d.a.createElement("img", {
						src: s
					})), d.a.createElement(pe.a, {
						className: ve.a.awardCommentText,
						content: Object(me.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: ge(e),
						useExplicitTextColor: !0
					}))
				};
			var we = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				xe = n("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				_e = n.n(xe);
			var Ee = ({
					commentCount: e,
					isLivestreaming: t,
					onClick: n
				}) => {
					const s = Object(oe.a)(_e.a.CollapsedComment, {
						[_e.a.LivestreamingWrapper]: t
					});
					return d.a.createElement("div", {
						className: s,
						onClick: n
					}, te.fbt._("collapsed {collapsed message} (may be sensitive)", [te.fbt._param("collapsed message", te.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [te.fbt._plural(e, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				Ie = n("./src/reddit/actions/comment/authoring.ts"),
				ke = n("./src/reddit/actions/comment/moderation.ts"),
				Ae = n("./src/reddit/actions/modal.ts"),
				Te = n("./src/reddit/actions/reportFlow/index.ts"),
				ye = n("./src/reddit/actions/tooltip.ts"),
				Oe = n("./src/reddit/actions/userBlocks.ts"),
				je = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Ne = n("./src/reddit/constants/tracking.ts"),
				Me = n("./src/reddit/selectors/telemetry.ts"),
				Se = n("./src/telemetry/models/Event.ts");
			const Le = e => ({
					screen: Object(Me.bb)(e),
					profile: Object(Me.S)(e),
					subreddit: Object(Me.jb)(e)
				}),
				Re = (e, t) => n => ({
					action: "load",
					noun: e,
					post: Object(Me.J)(n, t),
					source: Se.b.ChatView,
					subreddit: Object(Me.jb)(n)
				}),
				Pe = e => t => ({
					source: "chat_post",
					action: Ne.c.VIEW,
					noun: "last_message",
					post: Object(Me.J)(t, e),
					comment: Object(Me.i)(t, e),
					...Le(t)
				});
			var Be = n("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				Fe = n.n(Be);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = ae.a.button("MenuItem", Fe.a),
				He = ae.a.a("MenuItemPermalink", Fe.a),
				We = ({
					children: e,
					comment: t,
					onClick: n,
					onHideTooltip: s,
					onShowTooltip: o,
					sendEvent: a,
					tooltipId: r,
					tooltipText: i,
					trackingNoun: c
				}) => d.a.createElement(Ue, {
					id: r,
					onMouseEnter: o.bind(void 0, r),
					onMouseLeave: s.bind(void 0, r),
					onClick: e => {
						n(e), c && (a(((e, t) => n => ({
							source: "comment",
							action: Ne.c.CLICK,
							noun: e,
							post: Object(Me.J)(n, t),
							comment: Object(Me.i)(n, t),
							...Le(n)
						}))(c, t.id)), a(((e, t) => n => ({
							source: "comment_overflow_menu",
							action: Ne.c.CLICK,
							noun: e,
							post: Object(Me.J)(n, t),
							comment: Object(Me.i)(n, t),
							...Le(n)
						}))(c, t.id)))
					}
				}, e, d.a.createElement(je.c, {
					tooltipId: r
				}, i)),
				Ge = e => d.a.createElement(We, De({
					onClick: e.onHideTooltip
				}, e), d.a.createElement(He, {
					href: e.commentPermalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var qe = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Ve = n("./src/reddit/components/HumanDate/index.tsx"),
				ze = n("./src/reddit/components/ModModeReports/helpers.ts"),
				Ke = n("./src/reddit/components/ReportFlow/index.tsx"),
				Je = n("./src/reddit/components/ReportFlow/new.tsx"),
				Qe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Ye = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				Xe = n("./src/reddit/icons/svgs/Edit/index.tsx"),
				Ze = n("./src/reddit/icons/svgs/Flag/index.tsx"),
				$e = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				et = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				tt = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				nt = n("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				st = n("./src/reddit/icons/svgs/Spam/index.tsx"),
				ot = n("./src/reddit/models/PostDraft/index.ts"),
				at = n("./src/reddit/selectors/activeModalId.ts"),
				rt = n("./src/reddit/selectors/blockedRedditors.ts"),
				it = n("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				dt = n("./src/reddit/selectors/user.ts");

			function ct() {
				return (ct = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const lt = ae.a.wrapped($e.a, "BlockIcon", Fe.a),
				mt = ae.a.wrapped(Ze.a, "FlagIcon", Fe.a),
				pt = ae.a.wrapped(Xe.a, "EditIcon", Fe.a),
				ut = ae.a.wrapped(Ye.a, "ApproveIcon", Fe.a),
				ht = ae.a.wrapped(nt.a, "ReplyIcon", Fe.a),
				bt = ae.a.wrapped(tt.a, "RemoveIcon", Fe.a),
				ft = ae.a.wrapped(st.a, "SpamIcon", Fe.a),
				vt = ae.a.wrapped(et.a, "ModeratorIcon", Fe.a),
				gt = e => (t, {
					comment: n
				}) => `${e}${n.id}`,
				Ct = e => `Comment-${e}--Modal--DeleteComment`,
				wt = Object(l.c)({
					currentUser: dt.k,
					isMod: (e, {
						comment: t
					}) => !!Object(V.l)(e, {
						postId: t.postId
					}),
					isAuthorBlocked: (e, {
						comment: t
					}) => Object(rt.d)(e, t.authorId),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var n, s;
						return (null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === s ? void 0 : s.postOrCommentId) === t.id
					},
					approveTooltipId: gt("CommentChatPost--Approve--"),
					blockTooltipId: gt("CommentChatPost--Block--"),
					createTooltipId: gt("CommentChatPost--Create--"),
					editTooltipId: gt("CommentChatPost--Edit--"),
					replyTooltipId: gt("CommentChatPost--Reply--"),
					reportTooltipId: gt("CommentChatPost--Report--"),
					upvoteTooltipId: gt("CommentChatPost--Upvote--"),
					downvoteTooltipId: gt("CommentChatPost--Downvote--"),
					distinguishTooltipId: gt("CommentChatPost--Distinguish--"),
					spamTooltipId: gt("CommentChatPost--Spam--"),
					removeTooltipId: gt("CommentChatPost--Remove--"),
					deleteTooltipId: gt("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, {
						comment: t
					}) => Object(at.a)(e) === Ct(t.id),
					reportingRevampEnabled: it.a
				});
			var xt = Object(c.b)(wt, (e, {
					comment: t,
					commentsPageKey: n
				}) => ({
					onReplyClick: () => e(Object(Ie.p)({
						parentCommentId: t.id,
						commentsPageKey: n,
						singleOpen: !0
					})),
					onReportClick: n => {
						n.stopPropagation(), e(Object(Te.c)(t.id, !1))
					},
					onHideTooltip: () => e(Object(ye.i)()),
					onShowTooltip: t => e(Object(ye.f)({
						tooltipId: t
					})),
					onEditClick: () => {
						const s = t.media && t.media.rteMode;
						n && e(Object(Ie.d)({
							commentId: t.id,
							draftKey: Object(re.a)(ot.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: s,
							commentsPageKey: n
						}))
					},
					onApproveClick: () => e(Object(ke.a)(t.id)),
					onBlockClick: () => e(Object(Oe.h)(t.author)),
					onUnblockClick: () => e(Object(Oe.g)(t.author)),
					onUpvoteClick: () => e(Object(b.q)(t.id)),
					onDownvoteClick: () => e(Object(b.j)(t.id)),
					onDistinguishClick: n => e(Object(ke.b)(t.id, n)),
					onSpamClick: () => e(Object(ke.e)(t.id, !0)),
					onRemoveClick: () => e(Object(ke.e)(t.id, !1)),
					deleteComment: () => n && e(Object(Ie.h)(t.id, t.postId)),
					onDeleteClick: () => e(Object(Ae.i)(Ct(t.id))),
					toggleDeleteCommentModal: () => e(Object(Ae.i)(Ct(t.id)))
				}))(Object(Qe.c)(e => {
					const {
						comment: t,
						className: n,
						createTooltipId: s,
						currentUser: o,
						deleteComment: a,
						deleteTooltipId: r,
						editTooltipId: i,
						isAuthorBlocked: c,
						isDeleteModalOpen: l,
						isLivestreaming: p,
						isMod: u,
						onApproveClick: h,
						onBlockClick: b,
						onDeleteClick: f,
						onEditClick: v,
						onHideTooltip: g,
						onRemoveClick: C,
						onReplyClick: w,
						onReportClick: x,
						onShowTooltip: _,
						onSpamClick: E,
						onUnblockClick: I,
						onDistinguishClick: k,
						reportFlowIsOpen: A,
						replyTooltipId: T,
						reportTooltipId: y,
						approveTooltipId: O,
						blockTooltipId: j,
						removeTooltipId: N,
						distinguishTooltipId: M,
						sendEvent: S,
						spamTooltipId: L,
						toggleDeleteCommentModal: R,
						timestampUpdateTrigger: P
					} = e, B = !!o && o.id === t.authorId, F = Object(ze.b)(t), D = t.isApproved && F, U = !t.bannedBy || t.bannedBy === m.l, H = {
						comment: t,
						onHideTooltip: g,
						onShowTooltip: _,
						sendEvent: S
					}, W = t.isMod;
					return d.a.createElement("div", {
						className: n
					}, d.a.createElement("div", {
						className: Object(oe.a)(Fe.a.Menu, {
							[Fe.a.Livestreaming]: p
						})
					}, (t.bannedBy || F) && u && d.a.createElement(We, ct({
						onClick: h,
						tooltipId: O,
						tooltipText: D ? te.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : te.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), d.a.createElement(ut, null)), !t.isLocked && d.a.createElement(We, ct({
						onClick: w,
						tooltipId: T,
						tooltipText: te.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), d.a.createElement(ht, null)), u && B && d.a.createElement(We, ct({
						onClick: () => k(W ? m.G.NONE : m.G.MODERATOR),
						tooltipId: M,
						tooltipText: W ? te.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : te.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), d.a.createElement(vt, null)), u && U && d.a.createElement(We, ct({
						onClick: E,
						tooltipId: L,
						tooltipText: te.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), d.a.createElement(ft, null)), !B && d.a.createElement(We, ct({
						onClick: x,
						tooltipId: y,
						tooltipText: te.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), d.a.createElement(mt, null)), A && (() => e.reportingRevampEnabled ? d.a.createElement(Je.a, {
						withOverlay: !0,
						overlayCustomStyles: Ke.b,
						postId: t.postId,
						commentId: t.id
					}) : d.a.createElement(Ke.a, {
						withOverlay: !0,
						commentId: t.id,
						overlayCustomStyles: Ke.b,
						postId: t.postId
					}))(), B && !p && d.a.createElement(We, ct({
						onClick: v,
						tooltipId: i,
						tooltipText: te.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, H), d.a.createElement(pt, null)), u && U ? d.a.createElement(We, ct({
						onClick: C,
						tooltipId: N,
						tooltipText: t.bannedBy === m.l ? te.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : te.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						trackingNoun: t.bannedBy === m.l ? "confirm_remove" : "remove"
					}, H), d.a.createElement(bt, null)) : B && d.a.createElement(We, ct({
						onClick: f,
						tooltipId: r,
						tooltipText: te.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						trackingNoun: "delete"
					}, e), d.a.createElement(bt, null)), l && d.a.createElement(qe.a, {
						actionText: te.fbt._("Delete", null, {
							hk: "3j0q3Z"
						}),
						cancelActionText: te.fbt._("Keep", null, {
							hk: "3LTfYE"
						}),
						headerText: te.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: te.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: a,
						toggleModal: R,
						withOverlay: !0
					}), !!o && !B && d.a.createElement(We, ct({
						onClick: () => c ? I() : b(),
						tooltipId: j,
						tooltipText: c ? te.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : te.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${c?"unblock":"block"}`
					}, H), d.a.createElement(lt, null))), !p && d.a.createElement(Ge, ct({}, e, {
						tooltipId: s,
						tooltipText: d.a.createElement(Ve.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: P
					}), d.a.createElement(Ve.d, {
						seconds: t.created
					})))
				})),
				_t = n("./src/chat/helpers/dom.ts"),
				Et = n("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				It = n("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				kt = n.n(It);
			const At = {},
				Tt = ae.a.wrapped(we.a, "ChatIcon", kt.a),
				yt = ae.a.span("ReplyAuthor", kt.a),
				Ot = ae.a.div("ReplyWrapper", kt.a);
			var jt = Object(c.b)(() => Object(l.c)({
					comment: q.b,
					commentPermalink: G.m
				}))(({
					comment: e,
					commentId: t,
					commentPermalink: n,
					isLivestreaming: s,
					onReplyClick: o
				}) => e ? e.isDeleted ? d.a.createElement(Ot, null, d.a.createElement("span", {
					className: Object(oe.a)(kt.a.ReplyLinkBubble, kt.a.delete, {
						[kt.a.Livestreaming]: s
					})
				}, d.a.createElement(on, null))) : d.a.createElement(Ot, null, d.a.createElement("a", {
					className: Object(oe.a)(kt.a.ReplyLinkBubble, {
						[kt.a.Livestreaming]: s
					}),
					href: n,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(_t.a)(() => o(e.id))
				}, d.a.createElement(Tt, {
					userId: e.authorId,
					icon: e.profileImage
				}), d.a.createElement(yt, null, e.author), d.a.createElement(Et.a, {
					className: kt.a.ReplyComment,
					key: `rich-text-${t}`,
					content: Object(me.a)(e),
					rtJsonElementProps: At
				}))) : null),
				Nt = n("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				Mt = n.n(Nt);
			const St = Object(ie.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var Lt = e => {
					const {
						comment: t
					} = e;
					return void 0 === St(e) ? null : d.a.createElement(pe.a, {
						className: Mt.a.SystemMessageText,
						content: Object(me.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: St(e),
						useExplicitTextColor: !0
					})
				},
				Rt = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Pt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Bt = n("./src/reddit/controls/ErrorText/index.tsx"),
				Ft = n("./src/reddit/constants/experiments.ts"),
				Dt = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Ut = e => Object(Dt.c)(e, {
				experimentName: Ft.nb,
				experimentEligibilitySelector: Dt.a
			}) === Ft.ib.Enabled;
			var Ht = n("./src/reddit/selectors/communityAwards.ts");
			const Wt = (e, {
				commentId: t
			}) => {
				const n = Object(q.b)(e, {
					commentId: t
				});
				if (n && n.associatedAwardId) return Object(Ht.a)(e, n.associatedAwardId)
			};
			var Gt = n("./src/reddit/selectors/gold/awardIcon.ts"),
				qt = n("./src/reddit/selectors/poll/index.ts"),
				Vt = n("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				zt = n.n(Vt);
			const Kt = 250,
				Jt = 10,
				Qt = ae.a.wrapped(Bt.b, "ErrorText", zt.a),
				Yt = ae.a.wrapped(de.a, "TopMeta", zt.a),
				Xt = ae.a.span("DeleteText", zt.a),
				Zt = ae.a.wrapped(jt, "Reply", zt.a),
				$t = Object(Pt.u)(),
				en = Object(c.b)(() => Object(l.c)({
					associatedAward: (e, {
						commentId: t
					}) => Wt(e, {
						commentId: t
					}),
					awardIconUrl: (e, {
						commentId: t
					}) => {
						const n = Wt(e, {
							commentId: t
						});
						if (n) return Object(Gt.a)(e, {
							award: n,
							minSize: 64,
							postOrCommentId: t
						})
					},
					comment: q.b,
					commentPermalink: G.m,
					errorMsgs: G.G,
					flair: G.e,
					isActive: (e, {
						commentId: t
					}) => Boolean(e.shortcuts.activeCommentId && t === e.shortcuts.activeCommentId),
					isEditing: G.z,
					prediction: qt.f,
					subreddit: Pt.r,
					shouldRenderSystemMessages: Ut
				})),
				tn = Object(ie.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class nn extends d.a.Component {
				constructor(e) {
					super(e), this.elemRef = d.a.createRef(), this.toggleBody = () => {
						const e = !this.state.isExpanded;
						this.setState({
							isExpanded: e
						})
					}, this.expandCollapsedComment = () => {
						const e = !this.state.isCollapsed;
						this.setState({
							isCollapsed: e
						})
					};
					const t = Boolean(e.comment && e.comment.collapsed);
					this.state = {
						isCollapsed: t,
						isExpanded: !1,
						isTruncated: !1
					}
				}
				componentDidMount() {
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > Kt && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
						isTruncated: !0
					})
				}
				componentDidUpdate(e, t) {
					this.limitCommentBodyHeight(t)
				}
				limitCommentBodyHeight(e) {
					const {
						isExpanded: t,
						isTruncated: n
					} = this.state, s = t !== e.isExpanded || n !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && s) {
						const e = this.elemRef.current;
						let n = Kt;
						if (t) {
							n = e.scrollHeight + Jt;
							const t = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", t)
							};
							e.addEventListener("transitionend", t)
						}
						this.elemRef.current.style.maxHeight = `${n}px`
					}
				}
				render() {
					const {
						associatedAward: e,
						awardIconUrl: t,
						childrenInfo: n,
						comment: s,
						commentPermalink: o,
						commentsPageKey: a,
						errorMsgs: r,
						flair: i,
						isActive: c,
						isEditing: l,
						isLivestreaming: m,
						postId: p,
						prediction: u,
						renderedInOverlay: h,
						sendEvent: b,
						targetComment: f,
						timestampUpdateTrigger: v,
						addToRefList: g,
						onReplyClick: C,
						shouldRenderSystemMessages: w
					} = this.props, {
						isCollapsed: x,
						isExpanded: _,
						isTruncated: E
					} = this.state;
					if (!s) return null;
					c && se()(() => this.elemRef.current && this.elemRef.current.focus()), se()(() => this.elemRef && this.elemRef.current && g && g(this.elemRef));
					const I = s.isSystem,
						k = !l && !s.isDeleted && !I,
						A = !!e,
						T = Object(oe.a)({
							[zt.a.SystemMessageWrapper]: I && !m && w,
							[zt.a.CommentWrapper]: !m && !I,
							[zt.a.CommentExpanded]: _,
							[zt.a.CommentTruncated]: E,
							[zt.a.HighlightTarget]: f,
							[zt.a.LivestreamingCommentWrapper]: m
						});
					return x ? d.a.createElement(Ee, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : d.a.createElement("div", {
						id: f ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: T
					}, l && d.a.createElement(Rt.a, {
						key: "chatCommentsForm",
						isLivestreaming: m,
						postId: p,
						sendEvent: b,
						draftKey: Object(re.a)(ot.c.edit, s.id),
						commentsPageKey: a,
						isEditing: l,
						comment: s
					}), k && d.a.createElement(d.a.Fragment, null, d.a.createElement(Yt, {
						childrenInfo: n,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: s,
						commentsPageKey: a,
						compact: !0,
						flair: i,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: m,
						renderedInOverlay: h
					}, d.a.createElement(we.a, {
						className: Object(oe.a)(zt.a.ChatIcon, {
							[zt.a.Livestreaming]: m
						}),
						isLivestreaming: m,
						icon: s.profileImage,
						userId: s.authorId,
						isNSFW: s.profileOver18 || s.authorIconIsNSFW
					})), s.parentId && d.a.createElement(Zt, {
						commentId: s.parentId,
						onReplyClick: C,
						isLivestreaming: m
					}), m && d.a.createElement("span", {
						className: zt.a.livestreamingTimeStamp
					}, d.a.createElement(Ve.d, {
						seconds: s.created
					})), A && e && m ? d.a.createElement(Ce, {
						award: e,
						comment: s,
						iconUrl: t
					}) : u ? d.a.createElement(ce.a, {
						comment: s,
						prediction: u
					}) : [d.a.createElement(pe.a, {
						className: Object(oe.a)(zt.a.RichTextJson, {
							[zt.a.Livestreaming]: m
						}),
						content: Object(me.a)(s),
						key: `rich-text-${s.id}`,
						rtJsonElementProps: tn(this.props),
						useExplicitTextColor: m
					}), d.a.createElement(xt, {
						key: "Menu",
						className: Object(oe.a)(zt.a.Menu, {
							[zt.a.Livestreaming]: m
						}),
						comment: s,
						commentPermalink: o,
						commentsPageKey: a,
						isLivestreaming: m,
						timestampUpdateTrigger: v
					})]), s.isDeleted && d.a.createElement(on, null), k && r && r.map((e, t) => d.a.createElement(Qt, {
						key: `${t}-${e}`
					}, e)), !l && E && d.a.createElement("button", {
						className: Object(oe.a)(zt.a.CommentReadMoreButton, {
							[zt.a.Livestreaming]: m
						}),
						onClick: this.toggleBody
					}, te.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), I && !m && w && d.a.createElement(Lt, {
						comment: s
					}))
				}
			}
			const sn = $t(en(nn)),
				on = ({
					isLivestreaming: e
				}) => d.a.createElement(d.a.Fragment, null, d.a.createElement(we.a, {
					className: Object(oe.a)(zt.a.ChatIcon, {
						[zt.a.Livestreaming]: e || !1
					}),
					trash: !0
				}), d.a.createElement(Xt, null, te.fbt._("deleted", null, {
					hk: "4rQ3ZP"
				})));
			var an = sn,
				rn = n("./node_modules/lodash/isEqual.js"),
				dn = n.n(rn),
				cn = n("./src/reddit/controls/Button/index.tsx"),
				ln = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				mn = n.n(ln);
			const pn = ae.a.div("ButtonWrapper", mn.a),
				un = ({
					top: e
				}) => d.a.createElement("span", {
					className: Object(oe.a)(mn.a.ChunkPlaceholder, {
						[mn.a.top]: e
					})
				}, te.fbt._("Loading...", null, {
					hk: "2s97tt"
				})),
				hn = ({
					className: e,
					isLivestreaming: t,
					isLoading: n,
					setRef: s,
					...o
				}) => d.a.createElement("div", {
					ref: s,
					className: Object(oe.a)(e, {
						[mn.a.ScrollerWrapper]: !t,
						[mn.a.LivestreamingWrapper]: t,
						[mn.a.loading]: n
					})
				}, !n && o.isPrevLoading && !t && d.a.createElement(un, {
					top: !0
				}), o.children, !n && o.isNextLoading && !t && d.a.createElement(un, null));
			class bn extends d.a.Component {
				constructor(e) {
					super(e), this._ref = d.a.createRef(), this._refBeforeActiveComments = d.a.createRef(), this._refNextActiveComments = d.a.createRef(), this.chunkSize = 50, this.loadedMore = !1, this.scrollTop = () => this.$ref ? Math.ceil(this.$ref.scrollTop) : 0, this.scrollHeight = () => this.$ref ? this.$ref.scrollHeight : 0, this.clientHeight = () => this.$ref ? this.$ref.clientHeight : 0, this.scrolledPosition = () => this.scrollHeight() - this.clientHeight() - this.scrollTop(), this.scrolledToTop = () => 0 === this.scrollTop(), this.scrolledToBottom = (e = 0) => e >= this.scrolledPosition(), this.scrollToLastBottomChunk = () => {
						const e = this.state.chunks.length - 1;
						e !== this.state.activeChunkIndex ? this.setState({
							activeChunkIndex: e
						}, () => {
							this.scrollToBottom(), this.hideNewComments(!0)
						}) : (this.scrollToBottom(), this.hideNewComments(!0))
					}, this.addScrollListener = () => this.$ref && this.$ref.addEventListener("wheel", this.onScroll), this.removeScrollListener = () => this.$ref && this.$ref.removeEventListener("wheel", this.onScroll), this.preventParentScroll = e => {
						e.preventDefault();
						const t = this.$ref && this.$ref.scrollTop + e.deltaY;
						this.scrollTo(t || 0)
					}, this.shouldLoadMoreData = () => {
						this.props.loadMore && this.scrolledToTop() && this.props.loadMore(), this.loadedMore = !(!this.scrolledToTop() || !this.props.hasMoreComments)
					}, this.onScroll = e => {
						this.preventParentScroll(e), this.setNextTopChunk(), this.setNextBottomChunk(), this.shouldLoadMoreData(), this.hideNewComments()
					}, this.state = {
						initialized: !1,
						list: this.props.children,
						chunks: this.splitChunks([...this.props.children]),
						activeChunkIndex: 0,
						newCommentsCount: 0
					}
				}
				get $ref() {
					return this._ref.current
				}
				get $refBeforeActiveComments() {
					return this._refBeforeActiveComments.current
				}
				get $refNextActiveComments() {
					return this._refNextActiveComments.current
				}
				scrollTo(e) {
					this.$ref && (this.$ref.scrollTo ? this.$ref.scrollTo({
						top: e
					}) : this.$ref.scrollTop = e)
				}
				scrollToBottom() {
					this.$ref && (this.$ref.scrollTo ? this.$ref.scrollTo({
						top: this.scrollHeight() - this.clientHeight()
					}) : this.$ref.scrollTop = this.scrollHeight())
				}
				scrolledToFirstTopChunk() {
					return !this.props.hasMoreComments && this.state.activeChunkIndex <= 1
				}
				scrolledToLastBottomChunk() {
					const e = this.state.chunks.length - 1;
					return this.state.activeChunkIndex + 1 >= e
				}
				scrollToTargetComment(e) {
					const t = Math.floor(this.clientHeight() / 2);
					if (void 0 !== e) return void this.scrollTo(e - t);
					const {
						targetCommentIndex: n,
						children: s
					} = this.props;
					if (s && s.length && void 0 !== n && s[n]) {
						const e = Math.floor(n / this.chunkSize);
						this.state.activeChunkIndex !== e && this.setState({
							activeChunkIndex: e
						});
						const s = document.querySelector("#targetComment").offsetTop;
						s > t ? this.scrollTo(s - t) : this.scrollTo(s)
					}
				}
				hideNewComments(e) {
					(this.state.newCommentsCount > 0 && this.scrolledToBottom() || e) && this.setState({
						newCommentsCount: 0
					})
				}
				splitChunks(e) {
					const t = [];
					for (; e.length;) t.push(e.splice(0, this.chunkSize));
					return t
				}
				setNextBottomScroll() {
					const e = this.$refNextActiveComments ? this.$refNextActiveComments.clientHeight : 0;
					this.scrollTo(this.scrollHeight() - this.clientHeight() - e)
				}
				setNextBottomChunk() {
					if (this.scrolledToBottom()) {
						const e = this.state.activeChunkIndex + 1,
							t = this.state.chunks.length - 1,
							n = e < t ? e : t;
						this.setState({
							activeChunkIndex: n
						}, this.setNextBottomScroll)
					}
				}
				setNextTopScroll() {
					this.scrollTo(this.$refBeforeActiveComments && this.$refBeforeActiveComments.clientHeight || 0)
				}
				setNextTopChunk() {
					if (this.scrolledToTop()) {
						const e = this.state.activeChunkIndex - 1,
							t = this.state.chunks.length - 1,
							n = t > e ? e : t;
						e >= 0 && this.setState({
							activeChunkIndex: n
						}, this.setNextTopScroll)
					}
				}
				getChunkIndexOnUpdate(e, t) {
					if (this.props && this.props.children.length && this.props.children[0] && this.props.children.length - e.children.length > 1) {
						const e = t.length - this.state.chunks.length,
							n = this.state.activeChunkIndex + e;
						if (e > 1) return n
					}
				}
				componentDidMount() {
					this.addScrollListener(), this.scrollToLastBottomChunk(), this.setState({
						initialized: !0
					}), this.scrollToTargetComment(), this.props.targetCommentIndex || this.props.onLastMessageView && this.props.onLastMessageView()
				}
				componentWillUnmount() {
					this.removeScrollListener()
				}
				getSnapshotBeforeUpdate(e) {
					const t = e.children.length !== this.props.children.length || !dn()(g()(e.children), g()(this.props.children)) || !dn()(r()(e.children), r()(this.props.children));
					return t ? {
						childrenAreNotEqual: t,
						scrolledBottom: this.scrolledToBottom(30)
					} : null
				}
				componentDidUpdate(e, t, n) {
					if (n && n.childrenAreNotEqual) {
						const t = this.splitChunks([...this.props.children]),
							s = this.getChunkIndexOnUpdate(e, t),
							o = this.props.children.length - e.children.length;
						this.setState({
							list: this.props.children,
							chunks: t,
							activeChunkIndex: s || this.state.activeChunkIndex,
							newCommentsCount: this.scrolledToBottom() || 1 !== o || this.loadedMore ? this.state.newCommentsCount : this.state.newCommentsCount + o
						}, () => {
							s && this.setNextTopScroll(), n.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1, n.scrolledBottom && o > 0 && this.props.onLastMessageView && this.props.onLastMessageView()
						})
					} else t.newCommentsCount > 0 && 0 === this.state.newCommentsCount && this.props.onLastMessageView && this.props.onLastMessageView()
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, n = this.state.newCommentsCount > 0 ? Object(oe.a)([mn.a.NewComments, mn.a.show]) : mn.a.NewComments;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(hn, {
						className: e,
						key: "chatScroller",
						chunkSize: this.chunkSize,
						isLoading: !this.state.initialized || !!this.props.isLoading,
						isPrevLoading: !this.scrolledToFirstTopChunk(),
						isLivestreaming: t,
						isNextLoading: !this.scrolledToLastBottomChunk(),
						setRef: this._ref
					}, d.a.createElement("div", {
						key: "beforeActiveCommentsSection",
						ref: this._refBeforeActiveComments,
						className: mn.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), d.a.createElement("div", {
						key: "activeCommentsSection",
						className: mn.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), d.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: mn.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), d.a.createElement(pn, null, d.a.createElement(cn.l, {
						className: n,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", te.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [te.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var fn = bn,
				vn = n("./src/reddit/selectors/posts.ts");
			const gn = 6e4,
				Cn = (e, t, {
					authorId: n,
					id: s
				}) => e.includes(n) && !t.includes(s),
				wn = Object(l.c)({
					blockedRedditors: rt.a,
					blockedRedditorsPending: rt.b,
					chatCommentLinks: G.g,
					isPending: G.d,
					liveCommentsWebsocket: vn.E,
					moreCommentsLink: G.F
				}),
				xn = Object(c.b)(wn, (e, t) => ({
					onLiveCommentsSubscribe: (n, s, o) => e(Z(n, s, o, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						B(0, t)
					})(0, n)),
					loadMoreComments: n => e(Object(b.l)(t.commentsPageKey, n)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object($.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.u.CHAT
					}, m.u.CHAT))
				}));
			class _n extends d.a.Component {
				constructor(e) {
					super(e), this._refList = {}, this._refScroller = d.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
						this._refScroller && this._refScroller.current && this._refScroller.current.scrollToLastBottomChunk()
					}, e.loadBlockedRedditors(), this.loadMoreComments = this.loadMoreComments.bind(this), this.sendViewLastMessageTelemetry = o()(this.sendViewLastMessageTelemetry.bind(this), 100), this.state = {
						expandedCommentIds: [],
						targetCommentIndex: void 0,
						timestampUpdateTrigger: Date.now()
					}
				}
				isTimestampUpdateNeeded() {
					const {
						chatCommentLinks: e
					} = this.props, t = e[e.length - 1], n = t && t.created;
					return !!n && Object(u.c)(n) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(p.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, gn)
				}
				expandComment(e) {
					this.setState({
						expandedCommentIds: [...this.state.expandedCommentIds, e]
					})
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						commentsPageKey: t,
						liveCommentsWebsocket: n,
						loadComments: s,
						onLiveCommentsSubscribe: o,
						postId: a
					} = this.props;
					n && (e && s(), o(t, n, a), this._subscribedPostId = a, this._subscribedLiveCommentsWebsocket = n)
				}
				componentWillUnmount() {
					const {
						offLiveCommentsSubscribe: e
					} = this.props;
					this._subscribedPostId && this._subscribedLiveCommentsWebsocket && (e(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), this._timestampUpdater && this._timestampUpdater())
				}
				shouldComponentUpdate(e, t) {
					const {
						blockedRedditors: n,
						blockedRedditorsPending: s,
						chatCommentLinks: o,
						commentsPageKey: a,
						isLoading: r,
						isPending: i,
						postId: d,
						draftKey: c
					} = this.props, {
						expandedCommentIds: l,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== d || e.draftKey !== c || e.isLoading !== r || e.isPending !== i || e.blockedRedditorsPending !== s || e.commentsPageKey !== a || e.chatCommentLinks && e.chatCommentLinks.length !== o.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== n.ids.length || t.expandedCommentIds.length !== l.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: n,
						commentId: s,
						commentsPageKey: o,
						liveCommentsWebsocket: a,
						offLiveCommentsSubscribe: r,
						onLiveCommentsSubscribe: i,
						postId: d
					} = this.props;
					if (d !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && r(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), d && a && (i(o, a, d), this._subscribedPostId = d, this._subscribedLiveCommentsWebsocket = a)), e.blockedRedditors.ids !== t.ids) {
						const e = new Set(t.ids),
							s = {};
						n.forEach(e => s[e.id] = e.authorId), this.setState({
							expandedCommentIds: this.state.expandedCommentIds.filter(t => {
								const n = s[t];
								return !e.has(n)
							})
						})
					}
					if (this.deferTimestampUpdate(), s) {
						const e = Object(p.a)(() => {
							const {
								targetCommentIndex: t
							} = this.state;
							void 0 === t && (this.scrollToTargetComment(), s && n.forEach((e, t) => e.id === s && this.setState({
								targetCommentIndex: t
							})), e())
						}, 100)
					}
				}
				loadMoreComments() {
					const {
						loadMoreComments: e,
						moreCommentsLink: t,
						postId: n,
						sendEvent: s
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), s(Re("history", n)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, n = r()(e);
					(null == n ? void 0 : n.id) && t(Pe(n.id))
				}
				scrollToTargetComment(e) {
					if (e && this._refList[e] && this._refList[e].current && this._refScroller && this._refScroller.current) {
						const t = this._refList[e].current,
							n = t ? t.offsetTop : 0;
						return this._refScroller.current.scrollToTargetComment(n), void(t && t.focus())
					}
					const {
						commentId: t
					} = this.props, n = t && document.querySelector("#targetComment");
					n && this._refScroller && this._refScroller.current && this._refScroller.current.scrollToTargetComment(n.offsetTop)
				}
				render() {
					const {
						blockedRedditors: e,
						chatCommentLinks: t,
						className: n,
						commentId: s,
						commentsPageKey: o,
						emptyStateClassName: a,
						isLivestreaming: r,
						isLoading: i,
						isPending: c,
						postId: l,
						renderedInOverlay: m,
						sendEvent: p
					} = this.props, {
						expandedCommentIds: u,
						targetCommentIndex: h,
						timestampUpdateTrigger: b
					} = this.state, f = !(t && t.length || i || c);
					return d.a.createElement(d.a.Fragment, null, f ? d.a.createElement(ee.c, {
						className: a,
						isChat: !0
					}) : d.a.createElement(fn, {
						className: n,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: r,
						isLoading: i || c,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => Cn(e.ids, u, t) ? d.a.createElement(Ee, {
						commentCount: 1,
						isLivestreaming: r,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : d.a.createElement(an, {
						ref: t.id,
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: o,
						isLivestreaming: r,
						postId: l,
						renderedInOverlay: !!m,
						sendEvent: p,
						timestampUpdateTrigger: b,
						targetComment: t.id === s,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = xn(Object(Qe.c)(_n))
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				defaultAvatar: "_8gjnVWVhueS_hMv9By4wh"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				d = n.n(i);
			t.a = ({
				className: e,
				style: t = {},
				userId: n
			}) => {
				const {
					processingAvatarImageUrl: o
				} = s.a, i = `url(${o}/defaults/v2/avatar_default_${(e=>{let t=0;for(const n of e)t+=n.charCodeAt();return t%8})(n)}.png)`;
				return a.a.createElement("div", {
					className: Object(r.a)(d.a.avatar, e),
					style: {
						...t,
						backgroundImage: i
					}
				})
			}
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
		"./src/reddit/components/RichTextJsonChatReply/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "qqC8Lcm050i_jAM3CePWY",
				container: "qqC8Lcm050i_jAM3CePWY"
			}
		},
		"./src/reddit/components/RichTextJsonChatReply/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/RichTextJson/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				c = n("./src/reddit/models/RichTextJson/index.ts");
			const l = e => o.a.createElement(i.f, null, e),
				m = e => {
					const t = [],
						n = e.c || [],
						s = n.length;
					for (let o = 0; o < s; o++) {
						const e = n[o];
						t.push(e.e === c.w ? e.t : Object(d.e)(e, {}, o))
					}
					return o.a.createElement(o.a.Fragment, null, t)
				},
				p = e => e.c && e.c.length ? o.a.createElement(o.a.Fragment, null, Object(d.i)(e.c, null, {})) : o.a.createElement("br", null);
			var u = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				b = n.n(h);
			const f = n("./src/lib/lessComponent.tsx").a.div("Container", b.a),
				v = {
					[c.a]: "<animated image>",
					[c.b]: "<quote>",
					[c.c]: "<code block>",
					[c.h]: "<embed>",
					[c.m]: "<image>",
					[c.p]: "<list>",
					[c.z]: "<table>",
					[c.D]: "<video>"
				};
			t.a = e => {
				const {
					className: t,
					content: n
				} = e, s = n.document, i = [], d = Object(r.b)(s), h = Object(r.c)(s);
				if (-1 !== d)
					for (let o = d; o <= h; o++) {
						const e = s[o],
							t = e && v[e.e];
						switch (e.e) {
							case c.l:
								break;
							case c.b:
							case c.c:
							case c.p:
							case c.z:
							case c.m:
							case c.a:
							case c.D:
							case c.h:
								i.push(l(t));
								break;
							case c.k:
								i.push(m(e));
								break;
							case c.u:
								i.push(p(e))
						}
					}
				return o.a.createElement(f, {
					className: Object(a.a)(u.j, t)
				}, i)
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			})), n.d(t, "c", (function() {
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(o),
				r = n("./node_modules/raf/index.js"),
				i = n.n(r),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = n.n(h);
			var f = Object(m.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return c.a.createElement("div", {
						className: b.a.wrapper
					}, c.a.createElement(u.a, {
						className: b.a.titleRow
					}, n), c.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), c.a.createElement(u.a, {
						className: b.a.buttonRow
					}, c.a.createElement(p.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				v = n("./src/reddit/controls/ErrorText/index.m.less"),
				g = n.n(v);
			class C extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${a()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: n,
						errorModalTitle: o = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: r,
						isModalOpen: i
					} = this.state;
					return c.a.createElement("div", {
						className: Object(l.a)(g.a.wrapper, t)
					}, c.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), r && c.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, a), i && c.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: o
					}, n || e))
				}
			}
			const w = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: o,
						messages: a = []
					} = e, r = a.length ? a : o ? [o] : [];
					return r.length ? c.a.createElement("div", {
						className: t
					}, r.map((e, t) => c.a.createElement(C, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				x = e => c.a.createElement(w, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = C
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = r.a.span("metaText", c.a),
				m = e => a.a.createElement(l, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...o
				}) => {
					const r = Object(i.b)(t),
						d = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", r)], {
							hk: "2L3T21"
						}),
						c = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", r)], {
							hk: "gf67v"
						});
					return a.a.createElement(l, o, c)
				},
				u = e => a.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return x
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "k", (function() {
				return A
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "e", (function() {
				return L
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/lib/uploadToS3/index.ts"),
				d = n("./src/redditGQL/operations/AwardSheetInfo.json"),
				c = n("./src/redditGQL/operations/AwardSheetInfoForProfile.json"),
				l = n("./src/redditGQL/operations/CreateCommunityAward.json"),
				m = n("./src/redditGQL/operations/CreateGlobalAward.json"),
				p = n("./src/redditGQL/operations/CreateModAward.json"),
				u = n("./src/redditGQL/operations/DisableAwardInCommunity.json"),
				h = n("./src/redditGQL/operations/EnableAwardInCommunity.json"),
				b = n("./src/redditGQL/operations/GlobalAwards.json"),
				f = n("./src/redditGQL/operations/ManageableAwards.json"),
				v = n("./src/redditGQL/operations/ManageableAwardsForProfile.json"),
				g = n("./src/redditGQL/operations/RemoveCommunityAward.json"),
				C = n("./src/reddit/constants/headers.ts"),
				w = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const x = (e, t, n, a) => {
					const i = {
						subreddit: t,
						filepath: n,
						mimetype: a
					};
					return Object(o.a)(Object(r.a)(e, [C.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: i
					})
				},
				_ = async (e, t) => Object(i.a)(t, e), E = (e, t, n, s, o, r, i, d, c) => Object(a.a)(e, {
					...l,
					variables: {
						coinPrice: i,
						iconHeight: r,
						iconWidth: o,
						iconUrl: s,
						name: n,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), I = (e, t, n, s, o, r, i, d, c) => Object(a.a)(e, {
					...p,
					variables: {
						iconHeight: r,
						iconWidth: o,
						iconUrl: s,
						monthsOfPremium: i,
						name: n,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), k = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: n,
					context: s,
					daysOfDripExtension: o,
					daysOfPremium: r,
					description: i,
					endsAt: d,
					giverCoinReward: c,
					iconFormat: l,
					iconHeight: p,
					iconUrl: u,
					iconWidth: h,
					isNew: b,
					name: f,
					pennyPrice: v,
					pennyDonate: g,
					startsAt: C,
					subredditCoinReward: w
				}) => Object(a.a)(s, {
					...m,
					variables: {
						awardSubType: e,
						iconFormat: l,
						iconHeight: p,
						iconWidth: h,
						iconUrl: u,
						isNew: b,
						daysOfPremium: r,
						daysOfDripExtension: o,
						description: i,
						coinPrice: t,
						coinReward: n,
						name: f,
						pennyPrice: v,
						pennyDonate: g,
						giverCoinReward: c,
						startsAt: C,
						endsAt: d,
						subredditCoinReward: w
					}
				}), A = (e, t) => Object(a.a)(e, {
					...f,
					variables: {
						subredditId: t
					}
				}), T = (e, t) => Object(a.a)(e, {
					...v,
					variables: {
						profileName: t
					}
				}), y = e => Object(a.a)(e, {
					...b
				}), O = (e, t, n) => Object(a.a)(e, {
					...d,
					variables: {
						subredditId: t,
						thingId: n,
						includeGroup: !0
					}
				}), j = (e, t, n) => Object(a.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: n,
						includeGroup: !0
					}
				}), N = (e, t) => Object(a.a)(e, {
					...g,
					variables: {
						awardId: t
					}
				}), M = (e, t, n) => Object(a.a)(e, {
					...u,
					variables: {
						awardId: t,
						subredditId: n
					}
				}), S = (e, t, n) => Object(a.a)(e, {
					...h,
					variables: {
						awardId: t,
						subredditId: n
					}
				}), L = async (e, t, n) => {
					const a = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(o.a)(Object(r.a)(e, [C.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: a
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(w.a)(e)
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
		"./src/reddit/helpers/awards/message.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return r
			}));
			const s = 500,
				o = 1800,
				a = (e, t = !1) => t ? e.coinPrice < s ? 0 : e.coinPrice < o ? 50 : 100 : 2048,
				r = (e, t, n = !1) => {
					const s = a(t, n);
					return e.slice(0, s)
				}
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/humanizeUTCDate/index.tsx");
			const a = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				r = (s.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}), e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
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
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
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
				o = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const d = Object(o.e)(i, {
							commentId: e
						}),
						c = Object(a.g)(i, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...r.o(i),
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
					...r.o(e)
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
				o = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				a = n("./src/reddit/selectors/gold/topAwarded.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t = {}) => ({
					...Object(o.h)(e, t),
					correlationId: Object(s.e)(s.a.GildingFlow, !1),
					profile: r.S(e),
					subreddit: r.jb(e)
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
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
			}), o.a.createElement("path", {
				d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			}))
		},
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, t, n) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Edit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.edit, e.className),
				viewBox: "4 4 12 12"
			}, o.a.createElement("g", {
				transform: "translate(-68.000000, -207.000000)"
			}, o.a.createElement("path", {
				d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
			})))
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? a.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 511.63 511.631"
			}, o.a.createElement("path", {
				d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
			}))
		},
		"./src/reddit/icons/svgs/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fillRule: "evenodd",
				d: "M12.3535,14.6465 C12.5485,14.8415 12.5485,15.1585 12.3535,15.3535 C12.2555,15.4515 12.1275,15.5005 11.9995,15.5005 C11.8725,15.5005 11.7445,15.4515 11.6465,15.3535 L9.9995,13.7075 L8.3535,15.3535 C8.2555,15.4515 8.1275,15.5005 7.9995,15.5005 C7.8725,15.5005 7.7445,15.4515 7.6465,15.3535 C7.4515,15.1585 7.4515,14.8415 7.6465,14.6465 L9.2925,13.0005 L7.6465,11.3535 C7.4515,11.1585 7.4515,10.8415 7.6465,10.6465 C7.8415,10.4515 8.1585,10.4515 8.3535,10.6465 L9.9995,12.2925 L11.6465,10.6465 C11.8415,10.4515 12.1585,10.4515 12.3535,10.6465 C12.5485,10.8415 12.5485,11.1585 12.3535,11.3535 L10.7075,13.0005 L12.3535,14.6465 Z M15.9995,8.0005 C17.1045,8.0005 17.9995,8.8955 17.9995,10.0005 L17.9995,16.0005 C17.9995,17.1045 17.1045,18.0005 15.9995,18.0005 L3.9995,18.0005 C2.8955,18.0005 1.9995,17.1045 1.9995,16.0005 L1.9995,10.0005 C1.9995,8.8955 2.8955,8.0005 3.9995,8.0005 L15.9995,8.0005 Z M4,7 C3.229,7 2.532,7.301 2,7.78 L2,7 C2,6.586 2.126,6.201 2.342,5.882 C2.485,5.669 2.669,5.485 2.882,5.342 C3.201,5.126 3.586,5 4,5 L16,5 C16.414,5 16.799,5.126 17.118,5.342 C17.225,5.414 17.324,5.495 17.414,5.586 C17.505,5.676 17.587,5.775 17.658,5.882 C17.874,6.201 18,6.586 18,7 L18,7.78 C17.468,7.301 16.771,7 16,7 L4,7 Z M4,4 C3.229,4 2.532,4.301 2,4.78 L2,4 C2,2.896 2.896,2 4,2 L16,2 C17.104,2 18,2.896 18,4 L18,4.78 C17.468,4.301 16.771,4 16,4 L4,4 Z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function a(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M10 0L11.4142 8.58579L20 10L11.4142 11.4142L10 20L8.58579 11.4142L0 10L8.58579 8.58579L10 0Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function a(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "m81.4458 35.074-29.1976 11.7753 26.9134 16.3348-28.9722-12.3194 7.4803 30.5811-11.7754-29.1976-16.3347 26.9135 12.3193-28.9723-30.581 7.4803 29.1975-11.7754-26.9134-16.3347 28.9722 12.3193-7.4802-30.581 11.7753 29.1975 16.3348-26.9134-12.3194 28.9722z",
					clipRule: "evenodd",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function a(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					clipRule: "evenodd",
					d: "m27.3003.299194 2.4798 21.013306 16.6121-13.10519-13.1052 16.61209 21.0133 2.4798-21.0133 2.4798 13.1052 16.6121-16.6121-13.1052-2.4798 21.0133-2.4798-21.0133-16.61209 13.1052 13.10519-16.6121-21.013307-2.4798 21.013307-2.4798-13.10519-16.61209 16.61209 13.10519z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/TopAwarded/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M22.5 22.866h-21a1.5 1.5 0 01-1.5-1.5v-7.329c0-.59.34-1.1.835-1.345v-7.23a1.5 1.5 0 011.5-1.5h4.943v-1.65a1.5 1.5 0 011.5-1.5h6.444a1.5 1.5 0 011.5 1.5v4.363h4.943a1.5 1.5 0 011.5 1.5v4.517c.495.245.835.755.835 1.345v7.329a1.5 1.5 0 01-1.5 1.5z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M22.5 18.971h-21v2.395h21V18.97z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M22.5 14.037h-21v5.119h21v-5.119z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M21.665 14.66v3.178h-6.443V12.85h6.443v1.812zM8.779 10.136v7.702H2.335v-7.702H8.78z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M15.222 17.838v.348H8.779V6.987h6.443v10.852z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M16.244 12.85h-1.022v4.988h1.022V12.85zM8.779 10.136H7.756v7.702H8.78v-7.702z",
				fill: "#FEB331"
			}), o.a.createElement("path", {
				d: "M15.734 12.85h-.512v4.988h.512V12.85zM8.78 10.136h-.512v7.702h.512v-7.702z",
				fill: "#F76B0B"
			}), o.a.createElement("path", {
				d: "M21.665 8.175h-6.443v4.674h6.443V8.175zM8.779 5.462H2.335v4.674H8.78V5.462z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M15.222 2.313H8.779v4.674h6.443V2.312z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M16.244 8.175h-1.022v4.674h1.022V8.175zM8.779 5.462H7.756v4.674H8.78V5.462z",
				fill: "#DB5003"
			}), o.a.createElement("path", {
				d: "M11.752 11.577h-.063l-1.143.772v-1.038l1.206-.822h1.206v4.742h-1.206v-3.654zM5.326 12.403c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.502-.537-.502-.367 0-.584.25-.584.592H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.477h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#FFF1B6"
			}), o.a.createElement("path", {
				d: "M11.752 11.13h-.063l-1.143.771v-1.038l1.206-.822h1.206v4.742h-1.206V11.13zM5.326 11.955c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.503-.537-.503-.367 0-.584.25-.584.593H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.029h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M15.222 6.08H8.779v.907h6.443V6.08zM22.5 19.156h-21v.907h21v-.907zM21.665 12.866h-5.931l.51-.907h5.421v.907zM8.268 10.136H2.336v-.907h5.42l.512.907z",
				fill: "#FFFCD9"
			}))
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const o = e => e.category === s.Supporter,
				a = e => e.category === s.Achievement
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
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/gold/constants.ts"),
				a = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const r = {};
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
				subredditPowerupsFlairs: (e = r, t) => {
					switch (t.type) {
						case o.pb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const r = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = s.filter(a.a).map(e => e.type),
								d = s.filter(a.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: r,
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
							let o = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: r
								} of s) {
								const n = r.filter(a.a),
									s = n.map(({
										type: e
									}) => e),
									i = r.filter(a.b),
									d = i.map(({
										type: e
									}) => e),
									c = l(n),
									m = l(i);
								o = {
									...o,
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
								[n]: o
							}
						}
						case d.f: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: o,
								supporterFlairType: a
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: o,
								pendingSupporterType: a
							}))
						}
						case d.g: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: o,
								supporterFlairType: a
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								preferredAchievementType: o,
								preferredSupporterType: a,
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
								isHidden: o
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								isHidden: o
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
								const o = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								n = {
									...n,
									[t]: o.reduce((e, t) => (e[t] = !0, e), {})
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
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const r = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: a.K,
						experimentName: s.Cc
					});
					return !(!t || Object(s.uf)(t))
				},
				i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a.K,
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
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "a", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(a.a)({
				features: {
					powerups: r.a
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
					var s, o;
					return t && n ? null === (o = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === o ? void 0 : o[n] : null
				},
				l = Object(s.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(s.a)([d, l], (e, t) => e && t ? e[t] : null),
				p = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				u = Object(s.a)([d, p], (e, t) => e && t ? e[t] : null),
				h = Object(s.a)([d, c], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						o = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === s || e.type === o
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				b = Object(s.a)([i, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: s,
						flairsByType: o
					} = e, {
						supporterTypes: a,
						achievementTypes: r,
						preferredSupporterType: i,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(n, a, o, c || i),
						achievementFlairs: g(s, r, o, l || d)
					}
				}),
				f = Object(s.a)([c], e => !!e && e.isHidden),
				v = Object(s.a)([i, c, u], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				g = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				C = (e, {
					commentId: t
				}) => {
					const n = Object(o.b)(e, {
							commentId: t
						}),
						s = null == n ? void 0 : n.subredditId,
						a = null == n ? void 0 : n.authorId;
					return !(!s || !a) && !!((e, {
						subredditId: t,
						userId: n
					}) => {
						var s, o, a;
						return t && n ? null === (a = null === (o = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === o ? void 0 : o[n]) || void 0 === a ? void 0 : a[t] : null
					})(e, {
						subredditId: s,
						userId: a
					})
				}
		},
		"./src/reddit/selectors/gold/topAwarded.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			const s = e => e.users.topAwarders.currentPostId,
				o = e => e.users.topAwarders.api.pending,
				a = e => e.users.topAwarders.api.error,
				r = (e, t) => e.users.topAwarders.list[t],
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.f870fe689c7ef344a1bb.js.map