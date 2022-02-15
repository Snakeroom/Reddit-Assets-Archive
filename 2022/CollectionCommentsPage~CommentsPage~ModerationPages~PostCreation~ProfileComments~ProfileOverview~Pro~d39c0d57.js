// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57.f1f3914a1bcafbb4304f.js
// Retrieved at 2/15/2022, 1:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"], {
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/gold/constants.ts");
			const i = Object(a.a)(o.mb),
				d = Object(a.a)(o.t),
				c = e => async t => {
					await t(d({
						id: e
					})), t(Object(s.h)(r.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/gold/reportAward.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/models/Toast/index.ts"),
				i = n("./src/reddit/endpoints/gold/communityAwards.ts"),
				d = n("./src/reddit/actions/gold/constants.ts");
			const c = Object(s.a)(d.lb),
				l = e => async (t, n, {
					apiContext: s
				}) => {
					t(c());
					try {
						if ((await Object(i.e)(s(), e.id)).error) throw new Error;
						await t(Object(r.f)({
							kind: o.b.SuccessAward,
							duration: r.a,
							text: a.fbt._("{award name} Award successfully reported for review.", [a.fbt._param("award name", e.name)], {
								hk: "1fHb5Q"
							})
						}))
					} catch (d) {
						await t(Object(r.f)({
							kind: o.b.Error,
							duration: r.a,
							text: a.fbt._("Something went wrong. The report could not be created at this time.", null, {
								hk: "1ewigu"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/gold/topAwarded.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			}));
			var a = n("./src/lib/env/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/endpoints/gold/topAwarded.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/gold/constants.ts");
			Object(s.a)(c.ub), Object(s.a)(c.tb), Object(s.a)(c.sb);
			const l = Object(s.a)(c.xb),
				u = Object(s.a)(c.wb),
				m = Object(s.a)(c.vb),
				p = (e, t = 25) => async (n, s, {
					gqlContext: o
				}) => {
					if (!s().users.topAwarders.list.length) {
						n(l());
						try {
							const a = await Object(i.b)(o(), {
									top: t,
									postId: e
								}),
								s = a.body;
							if (a.ok) await n(u({
								postId: e,
								...s.data.postInfoById.topAwarders
							}));
							else if (s.errors && s.errors.length) throw new Error(s.errors.map(e => e.message).join("; "))
						} catch (d) {
							Object(a.b)() || console.error(d), r.c.captureMessage(d), n(m(d.message))
						}
					}
				}, h = Object(s.a)(c.yb), b = e => async (t, n) => {
					t(h({
						postId: e
					})), t(Object(d.h)(o.a.ECON_TOP_AWARDERS))
				}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, n) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/gold/giveAward.ts"),
				c = n("./src/redditGQL/operations/HideAwardOnTarget.json"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/actions/gold/constants.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/models/Toast/index.ts");
			const b = Object(l.a)(m.D),
				w = ({
					awardId: e,
					thingId: t
				}) => async (n, s, {
					gqlContext: r
				}) => {
					n(b({
						awardId: e,
						thingId: t
					}));
					const o = a.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
						hk: "10OvOz"
					});
					try {
						(await ((e, t, n) => Object(u.a)(e, {
							...c,
							variables: {
								awardId: t,
								targetId: n
							}
						}))(r(), e, t)).error && n(Object(p.f)({
							kind: h.b.Error,
							duration: p.a,
							text: o
						}))
					} catch (i) {
						n(Object(p.f)({
							kind: h.b.Error,
							duration: p.a,
							text: o
						}))
					}
				};
			var f = n("./src/reddit/actions/gold/modals.ts"),
				v = n("./src/reddit/actions/modal.ts"),
				g = n("./src/reddit/actions/tooltip.ts"),
				A = n("./src/reddit/helpers/correlationIdTracker.ts"),
				x = n("./src/reddit/helpers/isPost.ts"),
				O = n("./src/reddit/helpers/trackers/gild.ts"),
				E = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_ = n("./src/reddit/components/TrackingHelper/index.tsx"),
				j = n("./src/reddit/models/Gold/Award.ts"),
				I = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				S = n("./src/reddit/selectors/gold/awardIcon.ts"),
				y = n("./src/reddit/contexts/Post/index.tsx"),
				k = n("./src/reddit/contexts/User/index.tsx"),
				T = n("./node_modules/lodash/debounce.js"),
				N = n.n(T),
				M = n("./src/lib/classNames/index.ts"),
				R = n("./src/lib/fastdom/index.ts"),
				L = n("./src/reddit/models/Gold/TopAwarded/index.ts"),
				B = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				P = n("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				F = n.n(P);
			var H = r.a.memo(e => r.a.createElement("button", {
					className: Object(M.a)(e.className, F.a.addAwardPill),
					name: a.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, r.a.createElement(B.a, {
					className: F.a.giftIcon
				}))),
				G = n("./src/reddit/helpers/awards/getAwardItemId.ts"),
				U = n("./src/higherOrderComponents/makeAsync.tsx"),
				D = n("./src/lib/loadWithRetries/index.ts");
			var q = Object(U.a)({
					getComponent: () => Object(D.a)(() => n.e("AwardTooltip").then(n.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				z = n("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				W = n.n(z);
			const V = 3500,
				Q = 500;
			class J extends r.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = r.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: n,
							triggerOverlayAnimation: a
						} = this.props;
						e.id !== j.g && (this.setState({
							userGiven: !0,
							shouldAnimate: !t
						}), t || (a(n), setTimeout(() => {
							this.setState({
								shouldAnimate: !1
							})
						}, V)))
					}, this.handleOnClick = () => {
						const {
							onAddAward: e,
							award: t
						} = this.props;
						e(t.id === j.g ? void 0 : t.id)
					}, this.handleMouseEnter = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						this.hoverTimer = setTimeout(() => {
							e(t), this.setState({
								hoverStateTriggered: !0
							})
						}, Q)
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
						giveAwardAnimationIconUrl: a,
						pillIconUrl: s,
						post: o,
						tooltipId: i
					} = this.props, {
						userGiven: d,
						shouldAnimate: c
					} = this.state, l = Object(G.a)(e.id, o.id);
					return r.a.createElement("span", {
						className: W.a.awardPillContainer,
						id: i,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, r.a.createElement("button", {
						className: Object(M.a)(t, W.a.awardPill, {
							[W.a.userGiven]: d
						}),
						onClick: this.handleOnClick
					}, r.a.createElement("span", {
						className: W.a.imageContainer
					}, r.a.createElement("img", {
						alt: e.name,
						className: Object(M.a)(W.a.awardIcon, {
							[W.a.hidden]: c
						}),
						id: l,
						ref: this.imageRef,
						src: s
					}), c && r.a.createElement("img", {
						alt: e.name,
						className: W.a.animationIcon,
						src: a
					})), r.a.createElement("span", {
						className: W.a.count
					}, n.toLocaleString())), r.a.createElement(q, {
						award: e,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideAward: this.handleHideAward,
						postOrComment: o,
						tooltipId: i
					}))
				}
			}
			var K = J,
				X = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Y = n("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				Z = n.n(Y);
			var $ = r.a.memo(e => {
				const {
					className: t,
					direction: n,
					onClick: s
				} = e, o = "right" === n, i = a.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), d = a.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return r.a.createElement("div", {
					className: Object(M.a)(Z.a.buttonContainer, {
						[Z.a.right]: o
					}, t)
				}, r.a.createElement("button", {
					className: Z.a.scrollButton,
					name: o ? d : i,
					onClick: s
				}, r.a.createElement(X.a, {
					className: Z.a.chevronIcon
				})))
			});
			const ee = (e, t) => {
				let n = `${Object(x.a)(e)?"Post":"Comment"}AwardBadges--${e}`;
				return t && (n = `${n}--${t}`), n
			};
			var te = n("./src/reddit/helpers/trackers/topAwarded.ts"),
				ne = n("./src/reddit/hooks/useTracking.ts"),
				ae = n("./src/reddit/actions/gold/topAwarded.ts"),
				se = n("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				re = n("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				oe = n.n(re);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
					const t = Object(o.d)(),
						n = Object(ne.a)();
					return r.a.createElement("button", {
						className: Object(M.a)(oe.a.pill, e.className, {
							[oe.a.awardsPlaqueStyle]: !!e.awardsPlaqueStyle
						}),
						onClick: () => {
							const {
								postId: a
							} = e.post;
							n(Object(te.a)(a)), t(Object(ae.b)(a))
						}
					}, r.a.createElement("span", {
						className: oe.a.iconContainer
					}, r.a.createElement(se.a, {
						className: oe.a.awardIcon
					})), r.a.createElement("span", null, ie._("Top Awarded", null, {
						hk: "49Ol5i"
					})))
				},
				ce = n("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				le = n.n(ce);
			const ue = 11,
				me = 100;
			class pe extends r.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = r.a.createRef(), this.handleResize = N()(() => {
						this.handlePlaquePositionChange()
					}, 300), this.handlePlaquePositionChange = () => {
						const {
							awards: e,
							awardsCountInView: t,
							multiline: n
						} = this.props, a = t || ue;
						if (e.length < a - 4) return;
						if (n) return;
						const s = this.plaqueRef.current;
						if (!s) return;
						const r = s.scrollLeft > 0,
							o = s.scrollLeft < s.scrollWidth - s.clientWidth;
						this.setState({
							canScrollLeft: r,
							canScrollRight: o
						})
					}, this.handleScrollLeft = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							n = e.scrollLeft - (t - me);
						this.scrollPlaqueTo(n)
					}, this.handleScrollRight = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							n = e.scrollLeft + (t - me);
						this.scrollPlaqueTo(n)
					}, this.handleTriggerAnimation = e => {
						this.props.triggerOverlayAnimation(), R.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const n = document.getElementById(e);
							if (!n) return;
							const a = t.getBoundingClientRect(),
								s = n.getBoundingClientRect();
							if (s.left < a.left || s.right > a.right) {
								const e = s.left + (t.scrollLeft - a.left) - me;
								this.scrollPlaqueTo(e)
							}
						})
					};
					const t = e.awardsCountInView || ue,
						n = e.awards.length > t;
					this.state = {
						canScrollLeft: !1,
						canScrollRight: n && !e.multiline
					}
				}
				shouldComponentUpdate(e, t) {
					if (this.props.awards !== e.awards) {
						const t = this.props.awards.reduce((e, t) => (e[t.id] = (this.props.post.awardCountsById || {})[t.id], e), {});
						if (e.awards.reduce((n, a) => {
								const s = t[a.id],
									r = (e.post.awardCountsById || {})[a.id];
								return n || s !== r
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
					} = this.props, n = t ? "auto" : "smooth", a = this.plaqueRef.current;
					if (!a) return;
					const s = a.clientWidth,
						r = a.scrollWidth - s,
						o = Math.min(Math.max(0, e), r);
					this.setState({
						canScrollLeft: o > 0,
						canScrollRight: o < r
					}), a.scrollTo({
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
						hideTopAwardedBadge: a,
						icons: s,
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
						canScrollLeft: w,
						canScrollRight: f
					} = this.state, v = e.length > 0, g = ee(d.id, b);
					return r.a.createElement("div", {
						className: Object(M.a)(le.a.awardBadges, t, {
							[le.a.noAwards]: !v,
							[le.a.multiline]: i
						}),
						ref: this.plaqueRef
					}, w && r.a.createElement($, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (d.topAwardedType === L.a.Active || d.topAwardedType === L.a.Inactive) && !a && o && r.a.createElement(de, {
						awardsPlaqueStyle: !0,
						post: d
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = d, n = t[e.id], a = s.icon32[e.id], o = s.icon128[e.id];
						return r.a.createElement(K, {
							award: e,
							className: le.a.clickablePlaqueItem,
							count: n,
							giveAwardAnimationIconUrl: o,
							key: e.id,
							onAddAward: l,
							onHideAward: u,
							onOpenReportFlow: p,
							onHideTooltip: m,
							onShowTooltip: h,
							pillIconUrl: a,
							post: d,
							prefersReducedMotion: c,
							tooltipId: `${g}-${e.id}`,
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !n && r.a.createElement(H, {
						className: le.a.clickablePlaqueItem,
						onAddAward: l
					}), !i && r.a.createElement("div", {
						className: le.a.spacer
					}), f && r.a.createElement($, {
						direction: "right",
						onClick: this.handleScrollRight
					}))
				}
			}
			var he = pe,
				be = n("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				we = n.n(be);
			const {
				fbt: fe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class ve extends r.a.PureComponent {
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
					return r.a.createElement(r.a.Fragment, null, t > 1 && " • ", fe._("{award-name} Award", [fe._param("award-name", e.name)], {
						hk: "2QpjYF"
					}))
				}
				render() {
					const {
						award: e,
						className: t,
						count: n,
						iconClassName: a,
						iconUrl: s,
						onHideAward: o,
						onHideTooltip: i,
						onOpenReportFlow: d,
						postOrComment: c,
						tooltipId: l,
						tooltipLocation: u
					} = this.props;
					if (n <= 0) return null;
					const m = e.awardType === j.f.Moderator,
						p = Object(G.a)(e.id, c.id),
						h = "container" === u;
					return r.a.createElement("span", {
						className: Object(M.a)(we.a.awardItem, t),
						id: h ? l : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i
					}, r.a.createElement("span", {
						id: h ? "" : l
					}, r.a.createElement("img", {
						alt: e.name,
						className: Object(M.a)(we.a.awardIcon, {
							[we.a.animate]: this.state.animate
						}, a),
						id: p,
						ref: this.imageRef,
						src: s
					})), r.a.createElement("span", null, n > 1 && n, m && this.renderModAwardName()), r.a.createElement(q, {
						award: e,
						onHideAward: () => o(e),
						postOrComment: c,
						tooltipId: l,
						onOpenReportFlow: () => d(e)
					}))
				}
			}
			var ge = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Ae = n("./src/reddit/icons/fonts/index.tsx"),
				xe = n("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				Oe = n.n(xe);
			var Ee = e => {
				const {
					className: t,
					onClick: n
				} = e;
				return r.a.createElement("button", {
					className: Object(M.a)(t, Oe.a.badgeButton, Oe.a.visibilityEffect),
					onClick: n
				}, r.a.createElement(Ae.a, {
					name: "award",
					className: Oe.a.icon
				}))
			};
			var _e, je = e => {
					const {
						awards: t,
						className: n,
						hideBadgeButton: s,
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
						tooltipType: w,
						thing: f
					} = e, v = ee(f.id, w), g = `${v}-view-all`;
					let A = [];
					A = b ? t : t.length > 5 ? t.slice(0, 4) : t;
					const O = !s && f.isGildable && t.length > 0,
						E = t.length > A.length ? t.slice(A.length).reduce((e, t) => e + (f.awardCountsById && f.awardCountsById[t.id] || 0), 0) : 0,
						_ = a.fbt._("& {hidden award count} More", [a.fbt._param("hidden award count", E.toLocaleString())], {
							hk: "1OnmAi"
						});
					return r.a.createElement("div", {
						className: Object(M.a)(Oe.a.awardBadges, n)
					}, Object(x.a)(f.id) && (f.topAwardedType === L.a.Active || f.topAwardedType === L.a.Inactive) && !o && d && r.a.createElement(de, {
						post: f
					}), A.map(e => {
						const t = f.awardCountsById ? f.awardCountsById[e.id] : 0,
							n = i.icon32[e.id];
						return r.a.createElement(ve, {
							award: e,
							count: t,
							iconUrl: n,
							key: e.id,
							onHideAward: l,
							onOpenReportFlow: u,
							onHideTooltip: m,
							onShowTooltip: h,
							postOrComment: f,
							tooltipId: `${v}-${e.id}`,
							tooltipLocation: "icon"
						})
					}), E > 0 && r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						"data-click-id": "awards",
						id: g,
						className: Oe.a.showAllButton,
						onClick: p,
						onMouseEnter: () => h(g),
						onMouseLeave: m
					}, _), r.a.createElement(ge.c, {
						tooltipId: g,
						text: a.fbt._("View all Awards", null, {
							hk: "3JL2sD"
						})
					})), O && r.a.createElement(Ee, {
						onClick: c
					}))
				},
				Ie = n("./src/reddit/actions/gold/reportAward.ts"),
				Ce = n("./src/reddit/controls/Button/index.tsx"),
				Se = n("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				ye = n.n(Se);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(_e || (_e = {}));
			var ke = e => {
				const t = Object(ne.a)(),
					[n, i] = Object(s.useState)(e.award.awardType === j.f.Global ? _e.FLAG_USAGE : _e.BEGIN),
					d = Object(o.d)(),
					c = () => {
						n === _e.BEGIN ? t(Object(O.clickCancelAwardReportFlow)(e.award, e.thing.id)) : n === _e.REPORT_COMMUNITY_AWARD ? t(Object(O.clickCancelReportAward)(e.award, e.thing.id)) : n === _e.FLAG_USAGE && t(Object(O.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(O.clickConfirmReportAward)(e.award, e.thing.id)), d(Object(Ie.a)(e.award)), e.onClose()
					},
					u = () => {
						t(Object(O.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), d(Object(p.f)(Object(p.e)(a.fbt._("{award name} Award successfully flagged for review.", [a.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), h.b.SuccessAward))), e.onClose()
					},
					m = r.a.createElement(r.a.Fragment, null, r.a.createElement(Ce.o, {
						onClick: () => {
							t(Object(O.clickReportAward)(e.award, e.thing.id)), i(_e.REPORT_COMMUNITY_AWARD)
						},
						className: ye.a.reportStepButton
					}, a.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), r.a.createElement(Ce.o, {
						onClick: () => {
							t(Object(O.clickFlagAwardUsage)(e.award, e.thing.id)), i(_e.FLAG_USAGE)
						},
						className: ye.a.reportStepButton
					}, a.fbt._("This award is being used inappropriately.", null, {
						hk: "Y8giW"
					})));
				switch (n) {
					case _e.BEGIN:
						return r.a.createElement(E.a, {
							withOverlay: !0,
							hideCancelButton: !0,
							onConfirm: c,
							onCancel: c,
							onClose: c,
							headerText: a.fbt._("What's Wrong?", null, {
								hk: "JqSAe"
							}),
							actionText: a.fbt._("Cancel", null, {
								hk: "370pdF"
							}),
							modalText: m
						});
					case _e.REPORT_COMMUNITY_AWARD:
						return r.a.createElement(E.a, {
							withOverlay: !0,
							onConfirm: l,
							onCancel: c,
							onClose: c,
							headerText: a.fbt._("Report Community Award", null, {
								hk: "3T6dhH"
							}),
							actionText: a.fbt._("Report Award", null, {
								hk: "dHwed"
							}),
							modalText: a.fbt._("Do you want to report the {award name} Award?", [a.fbt._param("award name", e.award.name)], {
								hk: "4by1t"
							})
						});
					case _e.FLAG_USAGE:
						return r.a.createElement(E.a, {
							withOverlay: !0,
							onConfirm: u,
							onCancel: c,
							onClose: c,
							headerText: a.fbt._("Flag Award Usage", null, {
								hk: "395heU"
							}),
							actionText: a.fbt._("Flag Award Usage", null, {
								hk: "24B1WV"
							}),
							modalText: a.fbt._("Is the {award name} Award inappropriate on this content? Reddit uses this information to improve the awarding experience and remove awards that are being misused.", [a.fbt._param("award name", e.award.name)], {
								hk: "3P3dMP"
							})
						})
				}
			};
			const Te = [32, 128],
				Ne = Object(i.c)({
					allAwards: e => e.awards.models,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(I.a)(e),
					isInEconLeaderboardsExperiment: C.b
				}),
				Me = e => Object(x.a)(e.id) ? e.postId : e.id,
				Re = Object(o.b)(Ne, (e, {
					thing: t
				}) => ({
					hideAward: n => e(w({
						awardId: n,
						thingId: Me(t)
					})),
					onAddAward: (n, a) => {
						const s = Me(t);
						return e(Object(f.d)({
							awardId: a,
							correlationId: n,
							thingId: s
						}))
					},
					onHideTooltip: () => e(Object(g.i)()),
					onShowTooltip: t => e(Object(g.f)({
						tooltipId: t
					})),
					onToggleHideAwardModal: () => e(Object(v.i)("AwardBadges--Modal--HideAwardConfirmation")),
					triggerOverlayAnimation: () => e(Object(d.b)(Me(t)))
				}));
			class Le extends r.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(A.e)(A.a.GildingFlow, !0),
							{
								onAddAward: a,
								sendEvent: s,
								thing: r
							} = this.props;
						a(t, e);
						const {
							clickAddAward: o
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						s(o(r.id))
					}, this.handleShowAllAwards = () => {
						this.setState({
							showAllAwards: !0
						})
					}, this.handleHideAward = async e => {
						const {
							sendEvent: t,
							onToggleHideAwardModal: a,
							thing: s
						} = this.props;
						this.setState({
							selectedAward: e
						});
						const {
							clickHideAward: r
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(r(e, s.id)), a()
					}, this.handleHideAwardConfirmed = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: a
						} = this.state, {
							clickConfirmHideAward: s
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a && (e(s(a, t.id)), this.props.hideAward(a.id))
					}, this.handleHideAwardCanceled = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: a
						} = this.state, {
							clickCancelHideAward: s
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a && e(s(a, t.id))
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
						awardsPlaqueStyle: n,
						className: s,
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
						prefs: w,
						thing: f,
						triggerOverlayAnimation: v,
						tooltipType: g
					} = this.props, {
						showAllAwards: A
					} = this.state, O = w.reduceAnimationsFromAwards || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, _ = Object.keys(f.awardCountsById || {}), I = Object(j.r)(_.map(t => e[t]).filter(Boolean)), C = {};
					for (const a of Te) {
						const e = {};
						C[`icon${a}`] = e;
						for (const t of I) e[t.id] = Object(S.c)({
							award: t,
							postOrComment: f,
							size: a,
							prefersReducedMotion: O
						})
					}
					const y = !!o && o.id === f.authorId;
					return r.a.createElement(r.a.Fragment, null, n ? r.a.createElement(he, {
						awards: I,
						awardsCountInView: t,
						className: s,
						hideAddAwardButton: i || !f.isGildable || y,
						hideTopAwardedBadge: d,
						icons: C,
						isInEconLeaderboardsExperiment: l,
						multiline: !!m,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: f,
						prefersReducedMotion: O,
						tooltipType: g,
						triggerOverlayAnimation: v
					}) : r.a.createElement(je, {
						awards: I,
						className: s,
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
						showAllAwards: A || !!m,
						thing: f,
						tooltipType: g
					}), c && o && this.state.selectedAward && r.a.createElement(E.a, {
						actionText: a.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: y ? Object(x.a)(f.id) ? a.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [a.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : a.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [a.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(x.a)(f.id) ? a.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [a.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : a.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [a.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "qlfga"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: b,
						withOverlay: !0
					}), this.state.reportingAward && r.a.createElement(ke, {
						award: this.state.reportingAward,
						thing: f,
						onClose: () => this.setState({
							reportingAward: null
						})
					}))
				}
			}
			t.a = Object(k.c)(Object(y.e)(Re(Object(_.c)(Le))))
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(o.a)(e => r.a.createElement(i.e, null, r.a.createElement(i.i, null, r.a.createElement(c.a, null, r.a.createElement(i.q, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(i.b, null)))), r.a.createElement(i.l, null, r.a.createElement(i.p, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(i.g, null, !e.hideCancelButton && r.a.createElement(i.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(i.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, n) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				b = n("./src/reddit/constants/posts.ts"),
				w = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/isRemoved.ts"),
				v = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				g = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				A = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				E = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = n("./src/reddit/icons/fonts/Report/index.tsx"),
				I = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				C = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				S = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				k = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/components/PostBadges/index.m.less"),
				N = n.n(T);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => r.a.createElement("span", M({
					className: N.a.removalReason
				}, e), e.children),
				L = () => a.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				B = () => a.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				P = e => a.fbt._("Moderator of {community name}", [a.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				F = () => a.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				H = () => a.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				G = (e, t, n) => {
					const a = `PostBadges--${e}--${t}`;
					return n ? `${a}--${n}` : a
				},
				U = Object(w.u)({
					isProfilePostListing: w.L,
					isSubreddit: w.N,
					pageLayer: e => e
				}),
				D = Object(i.c)({
					isPinned: (e, {
						post: t
					}) => Object(k.q)(e, {
						postId: t.id
					}),
					modModeEnabled: w.T
				}),
				q = Object(o.b)(D, (e, t) => ({
					onHideTooltip: () => e(Object(u.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(u.f)({
						tooltipId: t
					}))
				}));
			t.a = U(q(({
				className: e,
				displayText: t,
				isSubreddit: n,
				inSubredditOrProfile: i,
				isCompactPinnedPost: u,
				isPinned: w,
				isProfilePostListing: k,
				modModeEnabled: T,
				onHideTooltip: U,
				onOpenRemovalReasonModal: D,
				onShowTooltip: q,
				post: z,
				tooltipType: W,
				pageLayer: V
			}) => {
				const Q = {
						caretOnTop: !1
					},
					J = Object(o.e)(y.a),
					K = (z.isSponsored || Object(d.u)(V)) && (J === h.u.NoLockIcon || J === h.u.PromotedGrey),
					X = z.isRemoved && !z.modRemovalReason && !z.modNote && z.belongsTo.type === b.a.SUBREDDIT,
					Y = G("Approve", z.id, W),
					Z = G("Archived", z.id, W),
					$ = G("Lock", z.id, W),
					ee = G("Mod", z.id, W),
					te = G("Remove", z.id, W),
					ne = G("Report", z.id, W),
					ae = G("Spam", z.id, W),
					se = G("Sticky", z.id, W),
					re = G("Pinned", z.id, W);
				return r.a.createElement("div", {
					className: e
				}, i && t && z.distinguishType === l.G.MODERATOR && r.a.createElement(s.Fragment, null, r.a.createElement(A.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.modIcon)
				}), r.a.createElement(m.c, M({
					tooltipId: ee,
					text: P(t)
				}, Q))), z.isArchived && r.a.createElement(s.Fragment, null, r.a.createElement(O.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.archivedIcon),
					desc: L(),
					id: Z,
					onMouseEnter: q(Z),
					onMouseLeave: U
				}), r.a.createElement(m.c, M({
					tooltipId: Z,
					text: L()
				}, Q))), z.isLocked && !K && r.a.createElement(s.Fragment, null, r.a.createElement(E.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.lockIcon),
					desc: B(),
					id: $,
					onMouseEnter: q($),
					onMouseLeave: U
				}), r.a.createElement(m.c, M({
					tooltipId: $,
					text: B()
				}, Q))), n && Object(S.r)(z) && !u && r.a.createElement(s.Fragment, null, r.a.createElement(C.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.stickyIcon),
					desc: F(),
					id: se,
					onMouseEnter: q(se),
					onMouseLeave: U
				}), r.a.createElement(m.c, M({
					tooltipId: se,
					text: F()
				}, Q))), k && w && r.a.createElement(s.Fragment, null, r.a.createElement(C.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.stickyIcon),
					desc: H(),
					id: re,
					onMouseEnter: q(re),
					onMouseLeave: U
				}), r.a.createElement(m.c, M({
					tooltipId: re,
					text: H()
				}, Q))), (z.isApproved || z.approvedBy) && r.a.createElement(s.Fragment, null, r.a.createElement(x.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.approveIcon),
					desc: Object(v.a)(z),
					id: Y,
					onMouseEnter: q(Y),
					onMouseLeave: U
				}), r.a.createElement(m.c, M({
					tooltipId: Y,
					text: Object(v.a)(z)
				}, Q))), Object(f.a)(z) && r.a.createElement(s.Fragment, null, r.a.createElement(_.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.removeIcon),
					desc: Object(v.b)(z),
					id: te,
					onMouseEnter: q(te),
					onMouseLeave: U
				}), X && r.a.createElement(p.a, {
					className: N.a.addRemovalReason,
					onClick: D,
					text: a.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (z.modRemovalReason || z.modNote) && r.a.createElement(R, {
					onMouseEnter: q(te),
					onMouseLeave: U
				}, a.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(m.c, M({
					tooltipId: te,
					text: Object(v.b)(z)
				}, Q))), z.bannedBy && z.isSpam && r.a.createElement(s.Fragment, null, r.a.createElement(I.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.spamIcon),
					desc: Object(v.d)(z),
					id: ae,
					onMouseEnter: q(ae),
					onMouseLeave: U
				}), r.a.createElement(m.c, M({
					tooltipId: ae,
					text: Object(v.d)(z)
				}, Q))), Object(g.a)(z) && !T && r.a.createElement(s.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.reportIcon),
					desc: Object(v.c)(z.numReports),
					id: ne,
					onMouseEnter: q(ne),
					onMouseLeave: U
				}), r.a.createElement(m.c, M({
					tooltipId: ne,
					text: Object(v.c)(z.numReports)
				}, Q))))
			}))
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/snoovatarModal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				h = n("./src/reddit/models/Vote/index.ts"),
				b = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				w = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: n,
				post: i,
				share: b
			}) => {
				const v = Object(l.b)(),
					g = Object(o.d)(),
					A = i && i.id,
					x = i && i.voteState;
				let O = null;
				A || (O = e ? "user_hovercard" : "profile_overview");
				const E = Object(s.useCallback)(() => v(Object(m.g)(e ? "user_hovercard" : "profile_overview", t)), [e, v, t]);
				return r.a.createElement(u.t, {
					onClick: () => {
						n ? (v(m.h), A && x === h.a.notVoted && g(Object(d.jb)(A))) : E();
						const e = n ? "postify" : "copy";
						g(Object(c.b)({
							clickSource: O,
							share: b,
							source: e
						}))
					},
					className: Object(a.a)(w.a.snoovatarButton, w.a.snoovatarExtraPadding, w.a.compactButtonLayout, {
						[w.a.avatarPostifyButton]: n
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(a.a)({
						[w.a.shirtIcon]: !n,
						[w.a.avatarPostButtonShirtIcon]: n
					})
				}), f._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: w.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
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
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = n.n(i);
			const c = e => s.a.createElement("button", {
					className: Object(r.a)(d.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && s.a.createElement("span", {
					className: Object(r.a)(d.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = o.a.wrapped(c, "ApproveButton", d.a),
				u = o.a.wrapped(c, "RemoveButton", d.a),
				m = e => s.a.createElement("button", {
					className: Object(r.a)(d.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, n) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/ads/index.ts"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/getShortenedLink.ts"),
				d = n("./node_modules/fbt/lib/FbtPublic.js");
			const c = 16765092,
				l = "https://i.redd.it/snoovatar",
				u = "snoovatars",
				m = "avatars";
			var p = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				h = n("./src/reddit/components/AvatarPost/index.m.less"),
				b = n.n(h);
			var w = ({
					sourceUrl: e,
					username: t,
					post: n
				}) => {
					const [a, r] = new URL(e).pathname.split("/").slice(2), o = function(e) {
						return `${l}/${+e>=c?m:u}/shared/${e}.png`
					}(r);
					return s.a.createElement("div", {
						className: b.a.avatarPostContainer
					}, s.a.createElement("img", {
						className: b.a.avatarPostImage,
						src: o,
						alt: d.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), s.a.createElement(p.a, {
						isHovercard: !1,
						username: t,
						isAvatarPost: !0,
						post: n,
						share: {
							username: a,
							avatarId: r
						}
					}))
				},
				f = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				v = n("./src/reddit/hooks/useIsAvatarPost.ts"),
				g = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				A = n("./src/reddit/components/SourceLink/index.m.less"),
				x = n.n(A),
				O = n("./src/lib/lessComponent.tsx"),
				E = n("./src/telemetry/models/Outbound.ts");
			const _ = O.a.wrapped(g.a, "OutboundLinkIcon", x.a),
				j = O.a.div("SourceLinkWrapper", x.a);

			function I(e) {
				const {
					className: t,
					post: n,
					isCommentsPage: a,
					pageLayer: d
				} = e, c = a ? E.SourceElement.PostLink : E.SourceElement.ListingPostLink, {
					source: l
				} = n, u = n.isSponsored || Object(r.u)(d), m = Object(v.a)(n);
				return l ? m ? s.a.createElement(w, {
					sourceUrl: l.url,
					username: n.author,
					post: n
				}) : s.a.createElement(j, {
					className: Object(o.a)({
						[x.a["m-comment"]]: a
					}, t)
				}, s.a.createElement(f.a, {
					href: l.url,
					isSponsored: u,
					postId: n.id,
					source: l,
					sourceElement: c
				}, Object(i.a)({
					...n,
					isSponsored: u
				}), s.a.createElement(_, {
					isFilled: !0
				}))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class p extends s.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: a,
							postId: r,
							sendEvent: o,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: h,
							...b
						} = this.props, w = this.state.isHovered, f = Object(d.a)({
							type: t.type,
							key: w ? "unsubscribe" : "subscribed"
						});
						return s.a.createElement(i.t, u({
							className: e,
							priority: b.shouldReverseColor ? i.c.Primary : i.c.Secondary,
							text: f,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: i.d.XSP
						}, b))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: a,
							postId: r,
							sendEvent: o,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: h,
							...b
						} = this.props, w = Object(d.a)({
							type: t.type,
							key: "subscribe"
						});
						return s.a.createElement(i.t, u({
							className: e,
							priority: b.shouldReverseColor ? i.c.Secondary : i.c.Primary,
							size: i.d.XSP,
							text: w,
							onClick: this.onClick
						}, b, {
							id: `subscribe-button-${r}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: n
					} = this.props;
					return t ? this.state.hasJustSubscribed || n ? this.renderUnsubscribeButton() : e ? null : s.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(o.a)(Object(r.c)(p))
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return x
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "h", (function() {
				return N
			})), n.d(t, "i", (function() {
				return M
			})), n.d(t, "e", (function() {
				return R
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/lib/uploadToS3/index.ts"),
				d = n("./src/redditGQL/operations/AwardSheetInfo.json"),
				c = n("./src/redditGQL/operations/AwardSheetInfoForProfile.json"),
				l = n("./src/redditGQL/operations/CreateCommunityAward.json"),
				u = n("./src/redditGQL/operations/CreateGlobalAward.json"),
				m = n("./src/redditGQL/operations/CreateModAward.json"),
				p = n("./src/redditGQL/operations/DisableAwardInCommunity.json"),
				h = n("./src/redditGQL/operations/EnableAwardInCommunity.json"),
				b = n("./src/redditGQL/operations/GlobalAwards.json"),
				w = n("./src/redditGQL/operations/ManageableAwards.json"),
				f = n("./src/redditGQL/operations/ManageableAwardsForProfile.json"),
				v = n("./src/redditGQL/operations/RemoveCommunityAward.json"),
				g = n("./src/reddit/constants/headers.ts"),
				A = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const x = (e, t, n, r) => {
					const i = {
						subreddit: t,
						filepath: n,
						mimetype: r
					};
					return Object(s.a)(Object(o.a)(e, [g.a]), {
						method: a.jb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: i
					})
				},
				O = async (e, t) => Object(i.a)(t, e), E = (e, t, n, a, s, o, i, d, c) => Object(r.a)(e, {
					...l,
					variables: {
						coinPrice: i,
						iconHeight: o,
						iconWidth: s,
						iconUrl: a,
						name: n,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), _ = (e, t, n, a, s, o, i, d, c) => Object(r.a)(e, {
					...m,
					variables: {
						iconHeight: o,
						iconWidth: s,
						iconUrl: a,
						monthsOfPremium: i,
						name: n,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), j = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: n,
					context: a,
					daysOfDripExtension: s,
					daysOfPremium: o,
					description: i,
					endsAt: d,
					giverCoinReward: c,
					iconFormat: l,
					iconHeight: m,
					iconUrl: p,
					iconWidth: h,
					isNew: b,
					name: w,
					pennyPrice: f,
					pennyDonate: v,
					startsAt: g,
					subredditCoinReward: A
				}) => Object(r.a)(a, {
					...u,
					variables: {
						awardSubType: e,
						iconFormat: l,
						iconHeight: m,
						iconWidth: h,
						iconUrl: p,
						isNew: b,
						daysOfPremium: o,
						daysOfDripExtension: s,
						description: i,
						coinPrice: t,
						coinReward: n,
						name: w,
						pennyPrice: f,
						pennyDonate: v,
						giverCoinReward: c,
						startsAt: g,
						endsAt: d,
						subredditCoinReward: A
					}
				}), I = (e, t) => Object(r.a)(e, {
					...w,
					variables: {
						subredditId: t
					}
				}), C = (e, t) => Object(r.a)(e, {
					...f,
					variables: {
						profileName: t
					}
				}), S = e => Object(r.a)(e, {
					...b
				}), y = (e, t, n) => Object(r.a)(e, {
					...d,
					variables: {
						subredditId: t,
						thingId: n,
						includeGroup: !0
					}
				}), k = (e, t, n) => Object(r.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: n,
						includeGroup: !0
					}
				}), T = (e, t) => Object(r.a)(e, {
					...v,
					variables: {
						awardId: t
					}
				}), N = (e, t, n) => Object(r.a)(e, {
					...p,
					variables: {
						awardId: t,
						subredditId: n
					}
				}), M = (e, t, n) => Object(r.a)(e, {
					...h,
					variables: {
						awardId: t,
						subredditId: n
					}
				}), R = async (e, t, n) => {
					const r = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(s.a)(Object(o.a)(e, [g.a]), {
						method: a.jb.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: r
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(A.a)(e)
					})
				}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = (e, t) => `awardItem__${t}-${e}`
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? a.fbt._("Approved by {username} at {time}", [a.fbt._param("username", e.approvedBy), a.fbt._param("time", Object(s.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : a.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				o = (a.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}), e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? a.fbt._("Removed by {username} at {time}", [a.fbt._param("username", e.bannedBy), a.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : a.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + a.fbt._("Reason by {username}:", [a.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + a.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				}),
				i = e => a.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [a.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? a.fbt._("Removed as spam by {username} at {time}", [a.fbt._param("username", e.bannedBy), a.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : a.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
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
			var a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/selectors/gold/topAwarded.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t = {}) => ({
					...Object(s.h)(e, t),
					correlationId: Object(a.e)(a.a.GildingFlow, !1),
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
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var a = n("./node_modules/react-redux/es/index.js");
			const s = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				o = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var i = n("./src/reddit/selectors/experiments/econ/index.ts");
			const d = e => Object(a.e)(t => {
				return !!(({
					adminId: e,
					subredditId: t,
					avatarShareUrl: n
				}) => {
					const a = o.test(n.trim()),
						i = s.includes(e),
						d = r.includes(t);
					return a && i && d
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(i.d)(t)
			})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("archived", e.isFilled), d.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("pin", e.isFilled), d.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/TopAwarded/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M22.5 22.866h-21a1.5 1.5 0 01-1.5-1.5v-7.329c0-.59.34-1.1.835-1.345v-7.23a1.5 1.5 0 011.5-1.5h4.943v-1.65a1.5 1.5 0 011.5-1.5h6.444a1.5 1.5 0 011.5 1.5v4.363h4.943a1.5 1.5 0 011.5 1.5v4.517c.495.245.835.755.835 1.345v7.329a1.5 1.5 0 01-1.5 1.5z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M22.5 18.971h-21v2.395h21V18.97z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M22.5 14.037h-21v5.119h21v-5.119z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M21.665 14.66v3.178h-6.443V12.85h6.443v1.812zM8.779 10.136v7.702H2.335v-7.702H8.78z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M15.222 17.838v.348H8.779V6.987h6.443v10.852z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M16.244 12.85h-1.022v4.988h1.022V12.85zM8.779 10.136H7.756v7.702H8.78v-7.702z",
				fill: "#FEB331"
			}), s.a.createElement("path", {
				d: "M15.734 12.85h-.512v4.988h.512V12.85zM8.78 10.136h-.512v7.702h.512v-7.702z",
				fill: "#F76B0B"
			}), s.a.createElement("path", {
				d: "M21.665 8.175h-6.443v4.674h6.443V8.175zM8.779 5.462H2.335v4.674H8.78V5.462z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M15.222 2.313H8.779v4.674h6.443V2.312z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M16.244 8.175h-1.022v4.674h1.022V8.175zM8.779 5.462H7.756v4.674H8.78V5.462z",
				fill: "#DB5003"
			}), s.a.createElement("path", {
				d: "M11.752 11.577h-.063l-1.143.772v-1.038l1.206-.822h1.206v4.742h-1.206v-3.654zM5.326 12.403c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.502-.537-.502-.367 0-.584.25-.584.592H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.477h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#FFF1B6"
			}), s.a.createElement("path", {
				d: "M11.752 11.13h-.063l-1.143.771v-1.038l1.206-.822h1.206v4.742h-1.206V11.13zM5.326 11.955c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.503-.537-.503-.367 0-.584.25-.584.593H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.029h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M15.222 6.08H8.779v.907h6.443V6.08zM22.5 19.156h-21v.907h21v-.907zM21.665 12.866h-5.931l.51-.907h5.421v.907zM8.268 10.136H2.336v-.907h5.42l.512.907z",
				fill: "#FFFCD9"
			}))
		},
		"./src/reddit/models/Gold/TopAwarded/index.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Active = "ACTIVE", e.Inactive = "INACTIVE"
				}(a || (a = {}))
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var a = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: r.K,
						experimentName: a.Cc
					});
					return !(!t || Object(a.wf)(t))
				},
				i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: r.K,
						experimentName: a.Cc
					}) === a.hd.ListingEnabled
				}
		},
		"./src/reddit/selectors/gold/topAwarded.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			const a = e => e.users.topAwarders.currentPostId,
				s = e => e.users.topAwarders.api.pending,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57.f1f3914a1bcafbb4304f.js.map