// https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8.12279ef3c8a307ad197a.js
// Retrieved at 10/4/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"], {
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
				o = r("./src/reddit/actions/modal.ts"),
				n = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(s.a)(a.a),
				d = Object(s.a)(a.b),
				c = Object(s.a)(a.c),
				l = Object(s.a)(a.d),
				u = Object(s.a)(a.e),
				m = Object(s.a)(a.f),
				p = Object(s.a)(a.g),
				h = Object(s.a)(a.h),
				b = Object(s.a)(a.i),
				f = e => Object(o.h)(n.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
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
				o = r("./src/reddit/actions/modal.ts"),
				n = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/actions/gold/constants.ts");
			const i = Object(s.a)(a.jb),
				d = Object(s.a)(a.t),
				c = e => async t => {
					await t(d({
						id: e
					})), t(Object(o.h)(n.a.GOLD_GILD_ANIMATION_OVERLAY))
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
				o = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/gold/constants.ts");
			Object(o.a)(c.ub), Object(o.a)(c.tb), Object(o.a)(c.sb);
			const l = Object(o.a)(c.xb),
				u = Object(o.a)(c.wb),
				m = Object(o.a)(c.vb),
				p = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
					return async (r, o, a) => {
						let {
							gqlContext: d
						} = a;
						if (!o().users.topAwarders.list.length) {
							r(l());
							try {
								const s = await Object(i.b)(d(), {
										top: t,
										postId: e
									}),
									o = s.body;
								if (s.ok) await r(u({
									postId: e,
									...o.data.postInfoById.topAwarders
								}));
								else if (o.errors && o.errors.length) throw new Error(o.errors.map(e => e.message).join("; "))
							} catch (c) {
								Object(s.b)() || console.error(c), n.c.captureMessage(c), r(m(c.message))
							}
						}
					}
				},
				h = Object(o.a)(c.yb),
				b = e => async (t, r) => {
					t(h({
						postId: e
					})), t(Object(d.h)(a.a.ECON_TOP_AWARDERS))
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
				o = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/config.ts"),
				d = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/controls/InternalLink/index.tsx"),
				l = r("./src/reddit/hooks/useClickSourceData.ts"),
				u = r("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				m = r("./src/reddit/components/AuthorLink/index.m.less"),
				p = r.n(m);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				var t, r;
				const s = Object(a.a)(e.className, p.a.authorLinkStyles, {
						[p.a.isLivestreaming]: e.isLivestreaming,
						[p.a.isStrong]: e.isStrong,
						[p.a.isUnstyled]: e.isUnstyled
					}),
					m = Object(l.a)(),
					b = Object(n.d)(),
					f = Object(n.e)(u.b),
					v = Object(n.e)(u.c),
					w = t => {
						var r;
						if (null === (r = e.onClick) || void 0 === r || r.call(e, t), f || v) {
							const r = e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? `${i.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), b(Object(d.db)(r))
						}
					};
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? o.a.createElement("a", h({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					className: s,
					href: `${i.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: w
				}), e.children) : e.isAuthorDeleted ? o.a.createElement("span", {
					className: Object(a.a)(p.a.deletedAuthorLink, e.className)
				}, e.children) : o.a.createElement(c.default, h({}, null !== (r = e.linkProps) && void 0 !== r ? r : {}, {
					className: s,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: m
					},
					onClick: w
				}), e.children)
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
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				n = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/gold/giveAward.ts"),
				c = r("./src/redditGQL/operations/HideAwardOnTarget.json"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				m = r("./src/reddit/actions/gold/constants.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				h = r("./src/reddit/models/Toast/index.ts");
			const b = Object(l.a)(m.D),
				f = e => {
					let {
						awardId: t,
						thingId: r
					} = e;
					return async (e, o, n) => {
						let {
							gqlContext: a
						} = n;
						e(b({
							awardId: t,
							thingId: r
						}));
						const i = s.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
							hk: "10OvOz"
						});
						try {
							(await ((e, t, r) => Object(u.a)(e, {
								...c,
								variables: {
									awardId: t,
									targetId: r
								}
							}))(a(), t, r)).error && e(Object(p.f)({
								kind: h.b.Error,
								duration: p.a,
								text: i
							}))
						} catch (d) {
							e(Object(p.f)({
								kind: h.b.Error,
								duration: p.a,
								text: i
							}))
						}
					}
				};
			var v = r("./src/reddit/actions/gold/modals.ts"),
				w = r("./src/reddit/actions/modal.ts"),
				g = r("./src/reddit/actions/tooltip.ts"),
				O = r("./src/reddit/helpers/correlationIdTracker.ts"),
				x = r("./src/reddit/helpers/isPost.ts"),
				A = r("./src/reddit/helpers/trackers/gild.ts"),
				j = r("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				E = r("./src/reddit/components/TrackingHelper/index.tsx"),
				y = r("./src/reddit/selectors/activeModalId.ts"),
				I = r("./src/reddit/selectors/communityAwards.ts"),
				C = r("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				T = r("./src/reddit/selectors/gold/awardIcon.ts"),
				_ = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = r("./src/reddit/contexts/Post/index.tsx"),
				N = r("./src/reddit/contexts/User/index.tsx"),
				S = r("./node_modules/lodash/debounce.js"),
				k = r.n(S),
				M = r("./src/lib/classNames/index.ts"),
				L = r("./src/lib/fastdom/index.ts"),
				B = r("./src/reddit/models/Gold/TopAwarded/index.ts"),
				F = r("./src/reddit/icons/fonts/Gift/index.tsx"),
				H = r("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				R = r.n(H);
			var D = n.a.memo(e => n.a.createElement("button", {
					className: Object(M.a)(e.className, R.a.addAwardPill),
					name: s.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, n.a.createElement(F.a, {
					className: R.a.giftIcon
				}))),
				U = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				z = r("./src/reddit/models/Gold/Award.ts"),
				G = r("./src/higherOrderComponents/makeAsync.tsx"),
				W = r("./src/lib/loadWithRetries/index.ts");
			var q = Object(G.a)({
					getComponent: () => Object(W.a)(() => r.e("AwardTooltip").then(r.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Q = r("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				V = r.n(Q);
			const J = 3500,
				Y = 500;
			class K extends n.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = n.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: r,
							triggerOverlayAnimation: s
						} = this.props;
						e.id !== z.h && (this.setState({
							userGiven: !0,
							shouldAnimate: !t
						}), t || (s(r), setTimeout(() => {
							this.setState({
								shouldAnimate: !1
							})
						}, J)))
					}, this.handleOnClick = () => {
						const {
							onAddAward: e,
							award: t
						} = this.props;
						e(t.id === z.h ? void 0 : t.id)
					}, this.handleMouseEnter = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						this.hoverTimer = setTimeout(() => {
							e(t), this.setState({
								hoverStateTriggered: !0
							})
						}, Y)
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
						pillIconUrl: o,
						post: a,
						tooltipId: i
					} = this.props, {
						userGiven: d,
						shouldAnimate: c
					} = this.state, l = Object(U.a)(e.id, a.id);
					return n.a.createElement("span", {
						className: V.a.awardPillContainer,
						id: i,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, n.a.createElement("button", {
						className: Object(M.a)(t, V.a.awardPill, {
							[V.a.userGiven]: d
						}),
						onClick: this.handleOnClick
					}, n.a.createElement("span", {
						className: V.a.imageContainer
					}, n.a.createElement("img", {
						alt: e.name,
						className: Object(M.a)(V.a.awardIcon, {
							[V.a.hidden]: c
						}),
						id: l,
						ref: this.imageRef,
						src: o
					}), c && n.a.createElement("img", {
						alt: e.name,
						className: V.a.animationIcon,
						src: s
					})), n.a.createElement("span", {
						className: V.a.count
					}, r.toLocaleString())), n.a.createElement(q, {
						award: e,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideAward: this.handleHideAward,
						postOrComment: a,
						tooltipId: i
					}))
				}
			}
			var $ = K,
				X = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Z = r("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				ee = r.n(Z);
			var te = n.a.memo(e => {
				const {
					className: t,
					direction: r,
					onClick: o
				} = e, a = "right" === r, i = s.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), d = s.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return n.a.createElement("div", {
					className: Object(M.a)(ee.a.buttonContainer, {
						[ee.a.right]: a
					}, t)
				}, n.a.createElement("button", {
					className: ee.a.scrollButton,
					name: a ? d : i,
					onClick: o
				}, n.a.createElement(X.a, {
					className: ee.a.chevronIcon
				})))
			});
			const re = (e, t) => {
				let r = `${Object(x.a)(e)?"Post":"Comment"}AwardBadges--${e}`;
				return t && (r = `${r}--${t}`), r
			};
			var se = r("./src/reddit/helpers/trackers/topAwarded.ts"),
				oe = r("./src/reddit/hooks/useTracking.ts"),
				ne = r("./src/reddit/actions/gold/topAwarded.ts"),
				ae = r("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				ie = r("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				de = r.n(ie);
			const {
				fbt: ce
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var le = e => {
					const t = Object(a.d)(),
						r = Object(oe.a)();
					return n.a.createElement("button", {
						className: Object(M.a)(de.a.pill, e.className, {
							[de.a.awardsPlaqueStyle]: !!e.awardsPlaqueStyle
						}),
						onClick: () => {
							const {
								postId: s
							} = e.post;
							r(Object(se.a)(s)), t(Object(ne.b)(s))
						}
					}, n.a.createElement("span", {
						className: de.a.iconContainer
					}, n.a.createElement(ae.a, {
						className: de.a.awardIcon
					})), n.a.createElement("span", null, ce._("Top Awarded", null, {
						hk: "49Ol5i"
					})))
				},
				ue = r("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				me = r.n(ue);
			const pe = 11,
				he = 100;
			class be extends n.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = n.a.createRef(), this.handleResize = k()(() => {
						this.handlePlaquePositionChange()
					}, 300), this.handlePlaquePositionChange = () => {
						const {
							awards: e,
							awardsCountInView: t,
							multiline: r
						} = this.props, s = t || pe;
						if (e.length < s - 4) return;
						if (r) return;
						const o = this.plaqueRef.current;
						if (!o) return;
						const n = o.scrollLeft > 0,
							a = o.scrollLeft < o.scrollWidth - o.clientWidth;
						this.setState({
							canScrollLeft: n,
							canScrollRight: a
						})
					}, this.handleScrollLeft = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							r = e.scrollLeft - (t - he);
						this.scrollPlaqueTo(r)
					}, this.handleScrollRight = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							r = e.scrollLeft + (t - he);
						this.scrollPlaqueTo(r)
					}, this.handleTriggerAnimation = e => {
						this.props.triggerOverlayAnimation(), L.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const r = document.getElementById(e);
							if (!r) return;
							const s = t.getBoundingClientRect(),
								o = r.getBoundingClientRect();
							if (o.left < s.left || o.right > s.right) {
								const e = o.left + (t.scrollLeft - s.left) - he;
								this.scrollPlaqueTo(e)
							}
						})
					};
					const t = e.awardsCountInView || pe,
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
								const o = t[s.id],
									n = (e.post.awardCountsById || {})[s.id];
								return r || o !== n
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
					const o = s.clientWidth,
						n = s.scrollWidth - o,
						a = Math.min(Math.max(0, e), n);
					this.setState({
						canScrollLeft: a > 0,
						canScrollRight: a < n
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
						icons: o,
						isInEconLeaderboardsExperiment: a,
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
						canScrollRight: v
					} = this.state, w = e.length > 0, g = re(d.id, b);
					return n.a.createElement("div", {
						className: Object(M.a)(me.a.awardBadges, t, {
							[me.a.noAwards]: !w,
							[me.a.multiline]: i
						}),
						ref: this.plaqueRef
					}, f && n.a.createElement(te, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (d.topAwardedType === B.a.Active || d.topAwardedType === B.a.Inactive) && !s && a && n.a.createElement(le, {
						awardsPlaqueStyle: !0,
						post: d
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = d, r = t[e.id], s = o.icon32[e.id], a = o.icon128[e.id];
						return n.a.createElement($, {
							award: e,
							className: me.a.clickablePlaqueItem,
							count: r,
							giveAwardAnimationIconUrl: a,
							key: e.id,
							onAddAward: l,
							onHideAward: u,
							onOpenReportFlow: p,
							onHideTooltip: m,
							onShowTooltip: h,
							pillIconUrl: s,
							post: d,
							prefersReducedMotion: c,
							tooltipId: `${g}-${e.id}`,
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !r && n.a.createElement(D, {
						className: me.a.clickablePlaqueItem,
						onAddAward: l
					}), !i && n.a.createElement("div", {
						className: me.a.spacer
					}), v && n.a.createElement(te, {
						direction: "right",
						onClick: this.handleScrollRight
					}))
				}
			}
			var fe = be,
				ve = r("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				we = r.n(ve);
			const {
				fbt: ge
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class Oe extends n.a.PureComponent {
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
					return n.a.createElement(n.a.Fragment, null, t > 1 && " • ", ge._("{award-name} Award", [ge._param("award-name", e.name)], {
						hk: "2QpjYF"
					}))
				}
				render() {
					const {
						award: e,
						className: t,
						count: r,
						iconClassName: s,
						iconUrl: o,
						onHideAward: a,
						onHideTooltip: i,
						onOpenReportFlow: d,
						postOrComment: c,
						tooltipId: l,
						tooltipLocation: u
					} = this.props;
					if (r <= 0) return null;
					const m = e.awardType === z.f.Moderator,
						p = Object(U.a)(e.id, c.id),
						h = "container" === u;
					return n.a.createElement("span", {
						className: Object(M.a)(we.a.awardItem, t),
						id: h ? l : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i
					}, n.a.createElement("span", {
						id: h ? "" : l
					}, n.a.createElement("img", {
						alt: e.name,
						className: Object(M.a)(we.a.awardIcon, {
							[we.a.animate]: this.state.animate
						}, s),
						id: p,
						ref: this.imageRef,
						src: o
					})), n.a.createElement("span", null, r > 1 && r, m && this.renderModAwardName()), n.a.createElement(q, {
						award: e,
						onHideAward: () => a(e),
						postOrComment: c,
						tooltipId: l,
						onOpenReportFlow: () => d(e)
					}))
				}
			}
			var xe = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Ae = r("./src/reddit/icons/fonts/index.tsx"),
				je = r("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				Ee = r.n(je);
			var ye = e => {
				const {
					className: t,
					onClick: r
				} = e;
				return n.a.createElement("button", {
					className: Object(M.a)(t, Ee.a.badgeButton, Ee.a.visibilityEffect),
					onClick: r
				}, n.a.createElement(Ae.a, {
					name: "award",
					className: Ee.a.icon
				}))
			};
			var Ie = e => {
					const {
						awards: t,
						className: r,
						hideBadgeButton: a,
						hideTopAwardedBadge: i,
						icons: d,
						isInEconLeaderboardsExperiment: c,
						onAddAward: l,
						onHideAward: u,
						onOpenReportFlow: m,
						onHideTooltip: p,
						onShowAllAwards: h,
						onShowTooltip: b,
						showAllAwards: f,
						tooltipType: v,
						thing: w
					} = e, g = re(w.id, v), O = `${g}-view-all`;
					let A = [];
					A = f ? t : t.length > 5 ? t.slice(0, 4) : t;
					const j = !a && w.isGildable && t.length > 0,
						E = Object(o.useCallback)(() => l(), [l]),
						y = t.length > A.length ? t.slice(A.length).reduce((e, t) => e + (w.awardCountsById && w.awardCountsById[t.id] || 0), 0) : 0,
						I = s.fbt._("& {hidden award count} More", [s.fbt._param("hidden award count", y.toLocaleString())], {
							hk: "1OnmAi"
						});
					return n.a.createElement("div", {
						className: Object(M.a)(Ee.a.awardBadges, r)
					}, Object(x.a)(w.id) && (w.topAwardedType === B.a.Active || w.topAwardedType === B.a.Inactive) && !i && c && n.a.createElement(le, {
						post: w
					}), A.map(e => {
						const t = w.awardCountsById ? w.awardCountsById[e.id] : 0,
							r = d.icon32[e.id];
						return n.a.createElement(Oe, {
							award: e,
							count: t,
							iconUrl: r,
							key: e.id,
							onHideAward: u,
							onOpenReportFlow: m,
							onHideTooltip: p,
							onShowTooltip: b,
							postOrComment: w,
							tooltipId: `${g}-${e.id}`,
							tooltipLocation: "icon"
						})
					}), y > 0 && n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
						"data-click-id": "awards",
						id: O,
						className: Ee.a.showAllButton,
						onClick: h,
						onMouseEnter: () => b(O),
						onMouseLeave: p
					}, I), n.a.createElement(xe.c, {
						tooltipId: O,
						text: s.fbt._("View all Awards", null, {
							hk: "3JL2sD"
						})
					})), j && n.a.createElement(ye, {
						onClick: E
					}))
				},
				Ce = r("./src/reddit/endpoints/gold/communityAwards.ts");
			const Te = Object(l.a)(m.ib);
			var _e, Pe = r("./src/reddit/controls/Button/index.tsx"),
				Ne = r("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				Se = r.n(Ne);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(_e || (_e = {}));
			var ke = e => {
				const t = Object(oe.a)(),
					[r, i] = Object(o.useState)(e.award.awardType === z.f.Global ? _e.FLAG_USAGE : _e.BEGIN),
					d = Object(a.d)(),
					c = () => {
						r === _e.BEGIN ? t(Object(A.clickCancelAwardReportFlow)(e.award, e.thing.id)) : r === _e.REPORT_COMMUNITY_AWARD ? t(Object(A.clickCancelReportAward)(e.award, e.thing.id)) : r === _e.FLAG_USAGE && t(Object(A.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(A.clickConfirmReportAward)(e.award, e.thing.id)), d((e => async (t, r, o) => {
							let {
								apiContext: n
							} = o;
							t(Te());
							try {
								if ((await Object(Ce.e)(n(), e.id)).error) throw new Error;
								await t(Object(p.f)({
									kind: h.b.SuccessAward,
									duration: p.a,
									text: s.fbt._("{award name} Award successfully reported for review.", [s.fbt._param("award name", e.name)], {
										hk: "1fHb5Q"
									})
								}))
							} catch (a) {
								await t(Object(p.f)({
									kind: h.b.Error,
									duration: p.a,
									text: s.fbt._("Something went wrong. The report could not be created at this time.", null, {
										hk: "1ewigu"
									})
								}))
							}
						})(e.award)), e.onClose()
					},
					u = () => {
						t(Object(A.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), d(Object(p.f)(Object(p.e)(s.fbt._("{award name} Award successfully flagged for review.", [s.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), h.b.SuccessAward))), e.onClose()
					},
					m = n.a.createElement(n.a.Fragment, null, n.a.createElement(Pe.o, {
						onClick: () => {
							t(Object(A.clickReportAward)(e.award, e.thing.id)), i(_e.REPORT_COMMUNITY_AWARD)
						},
						className: Se.a.reportStepButton
					}, s.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), n.a.createElement(Pe.o, {
						onClick: () => {
							t(Object(A.clickFlagAwardUsage)(e.award, e.thing.id)), i(_e.FLAG_USAGE)
						},
						className: Se.a.reportStepButton
					}, s.fbt._("This award is being used inappropriately.", null, {
						hk: "Y8giW"
					})));
				switch (r) {
					case _e.BEGIN:
						return n.a.createElement(j.a, {
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
					case _e.REPORT_COMMUNITY_AWARD:
						return n.a.createElement(j.a, {
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
					case _e.FLAG_USAGE:
						return n.a.createElement(j.a, {
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
			const Me = [32, 128],
				Le = Object(i.c)({
					awards: I.j,
					claimedFreeAward: _.b,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(y.a)(e),
					isInEconLeaderboardsExperiment: C.b
				}),
				Be = e => Object(x.a)(e.id) ? e.postId : e.id,
				Fe = Object(a.b)(Le, (e, t) => {
					let {
						thing: r
					} = t;
					return {
						hideAward: t => e(f({
							awardId: t,
							thingId: Be(r)
						})),
						onAddAward: (t, s) => {
							const o = Be(r);
							return e(Object(v.d)({
								awardId: s,
								correlationId: t,
								thingId: o
							}))
						},
						onHideTooltip: () => e(Object(g.i)()),
						onShowTooltip: t => e(Object(g.f)({
							tooltipId: t
						})),
						onToggleHideAwardModal: () => e(Object(w.i)("AwardBadges--Modal--HideAwardConfirmation")),
						triggerOverlayAnimation: () => e(Object(d.b)(Be(r)))
					}
				});
			class He extends n.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(O.d)(O.a.GildingFlow, !0),
							{
								claimedFreeAward: s,
								onAddAward: o,
								sendEvent: n,
								thing: a
							} = this.props;
						o(t, null != e ? e : null == s ? void 0 : s.id);
						const {
							clickAddAward: i
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n(i(a.id))
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
							clickHideAward: n
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(n(e, o.id)), s()
					}, this.handleHideAwardConfirmed = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: s
						} = this.state, {
							clickConfirmHideAward: o
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						s && (e(o(s, t.id)), this.props.hideAward(s.id))
					}, this.handleHideAwardCanceled = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: s
						} = this.state, {
							clickCancelHideAward: o
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
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
						this.props.sendEvent(Object(A.clickAwardReportFlow)(e, this.props.thing.id)), this.setState({
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
						awards: e,
						awardsCountInView: t,
						awardsPlaqueStyle: r,
						className: o,
						currentUser: a,
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
						thing: v,
						triggerOverlayAnimation: w,
						tooltipType: g
					} = this.props, {
						showAllAwards: O
					} = this.state, A = f.reduceAnimationsFromAwards || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, E = {};
					for (const s of Me) {
						const t = {};
						E[`icon${s}`] = t;
						for (const r of e) t[r.id] = Object(T.c)({
							award: r,
							postOrComment: v,
							size: s,
							prefersReducedMotion: A
						})
					}
					const y = !!a && a.id === v.authorId;
					return n.a.createElement(n.a.Fragment, null, r ? n.a.createElement(fe, {
						awards: e,
						awardsCountInView: t,
						className: o,
						hideAddAwardButton: i || !v.isGildable || y,
						hideTopAwardedBadge: d,
						icons: E,
						isInEconLeaderboardsExperiment: l,
						multiline: !!m,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: v,
						prefersReducedMotion: A,
						tooltipType: g,
						triggerOverlayAnimation: w
					}) : n.a.createElement(Ie, {
						awards: e,
						className: o,
						hideBadgeButton: i || !u,
						hideTopAwardedBadge: d,
						icons: E,
						isInEconLeaderboardsExperiment: l,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: p,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: h,
						showAllAwards: O || !!m,
						thing: v,
						tooltipType: g
					}), c && a && this.state.selectedAward && n.a.createElement(j.a, {
						actionText: s.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: y ? Object(x.a)(v.id) ? s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
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
					}), this.state.reportingAward && n.a.createElement(ke, {
						award: this.state.reportingAward,
						thing: v,
						onClose: () => this.setState({
							reportingAward: null
						})
					}))
				}
			}
			t.a = Object(N.c)(Object(P.e)(Fe(Object(E.c)(He))))
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
				return I
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "a", (function() {
				return k
			}));
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
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
				v = r("./src/reddit/models/Badge/index.ts");
			var w = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				g = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				O = r.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const A = "add-custom-badge-tooltip",
				j = 100,
				E = 2 * j,
				y = 24;
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, j)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, E)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return o.a.createElement("img", {
						className: Object(d.a)(O.a.image, this.props.className),
						src: `${i.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${A}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || y;
					return o.a.createElement(s.Fragment, null, this.props.showAddCustom && o.a.createElement("div", {
						className: O.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, o.a.createElement("button", {
						className: O.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, o.a.createElement(f.a, {
						className: O.a.addCustom
					})), o.a.createElement(w, {
						className: O.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(e).map(e => {
						const t = Object(v.d)(r, r, e),
							n = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return o.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, o.a.createElement("div", {
							className: Object(d.a)(O.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(n),
							onMouseLeave: () => this.handleMouseLeave()
						}, o.a.createElement("img", {
							className: O.a.image,
							id: n,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? o.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: O.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: n,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : o.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: n,
							text: e.title
						})))
					}))
				}
			}
			const C = [],
				T = Object(a.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: r,
							userId: s
						} = t;
						var o;
						return (null === (o = e.users.appliedBadges[s]) || void 0 === o ? void 0 : o[r]) || C
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				_ = Object(a.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: r
						} = t;
						var s;
						const o = e.user.account;
						return o && (null === (s = e.users.appliedBadges[o.id]) || void 0 === s ? void 0 : s[r]) || C
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				P = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function N(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, n = t.map(e => r[e]).filter(Boolean);
				return o.a.createElement(I, x({
					badges: n
				}, s))
			}
			const S = Object(n.b)(T, P)(N),
				k = Object(n.b)(_, P)(N)
		},
		"./src/reddit/components/Econ/Audio/index.m.less": function(e, t, r) {
			e.exports = {
				liveContainer: "reBgd-KYxGiWr_ZyzPgr_",
				userRow: "poHPrsWD-JtPCRh7foOm-",
				isListener: "_3DcaFqbAKhkVLYT6i2vxLy",
				speakerRings: "_1XlH7yy1d0pGBQ0hDDAaDv",
				listener: "_3fwbxY1I7EhKfr8MK7xT0S",
				speaker: "_1zEocOo_0euorSuKdx4-t2",
				snoovatar: "_23HWId-tu5O6LulDxLoVD1",
				userIcon: "Xzl_H3G7Qyd756Y0rQz4w",
				classic: "_2XdJHCLvUWJ2gdGBnugD5t",
				buttonContainer: "_2yhW3k4B2CUUSvt-3mqV3S",
				muteContainer: "_3mxKqH41iEa2lxIov7Eup-",
				muteIcon: "_18bneLE5nnOdUrY8P-eepo",
				fullRow: "_2cJzNEK-EGk9V7LDTIEFb-",
				endedContainer: "_21e_ZHJXEi7zMZ6XWWBz",
				nightMode: "z6LY0qX0g0puWE-RPF8XB",
				liveClassicContainer: "_3JLTqaLlFv8aPfzi9eQazu",
				classicSpeaker: "QsNKjj4EDQH2hYFYQB6T4",
				snoovatarHeadshotContainer: "_28VC5AU-z3J-h80HdMusUT",
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t",
				metaStatus: "OvWqIzFfbWF0I-5FMZ18I",
				isLive: "_3Vqz8YzNczoVWpOtpwXAit",
				processingButton: "nxYqAuGeco2RA9q0e9ECw"
			}
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
				o = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
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
				} = Object(m.a)(), n = null !== (t = e.badges) && void 0 !== t ? t : Object(p.i)(e.badgeIds, null !== (r = e.allBadges) && void 0 !== r ? r : {});
				return n.length ? o.a.createElement(l.b, {
					useHovercard: !0,
					badges: n,
					badgeSize: e.badgeSize,
					className: Object(i.a)(e.className, b.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && n.length < 2 && (null == s ? void 0 : s.id) === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			const v = [];
			t.b = Object(n.b)(() => Object(a.c)({
				badgeIds: (e, t) => {
					let {
						subredditId: r,
						userId: s
					} = t;
					var o;
					return (null === (o = e.users.appliedBadges[s]) || void 0 === o ? void 0 : o[r]) || v
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
				o = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/selectors/economics.ts");

			function d(e) {
				const {
					badges: t
				} = e, r = t[t.length - 1];
				return r && !e.ignore ? o.a.cloneElement(e.children, {
					style: r.extra && r.extra.style && r.extra.style.color ? {
						...e.children.props.style || {},
						color: r.extra.style.color,
						fontWeight: 700
					} : e.children.props.style
				}) : e.children
			}
			t.b = Object(n.b)(() => Object(a.c)({
				badges: (e, t) => {
					let {
						subredditId: r,
						userId: s
					} = t;
					return Object(i.q)(e, r, s)
				}
			}))(d)
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/makeAsync.tsx");
			const o = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("GovernanceUserPublicPointsDisplay").then(r.bind(null, "./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx")).then(e => e.default)
			});
			t.a = o
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/higherOrderComponents/makeAsync.tsx"),
				o = r("./src/lib/loadWithRetries/index.ts");
			const n = "UserInfoTooltip";
			t.b = Object(s.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(o.a)(() => r.e("AuthorHovercard").then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./src/higherOrderComponents/makeAsync.tsx"),
				a = r("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				d = e => e.alwaysShowChildren ? o.a.createElement(o.a.Fragment, null, e.children) : null;
			t.b = Object(n.a)({
				ErrorComponent: d,
				getComponent: () => Object(a.a)(() => r.e("AuthorHovercard").then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: d
			})
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, r) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return w
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "c", (function() {
				return O
			}));
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
			const u = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(a.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent(), t.onHover && t.onHover())
					}
				})),
				p = r("./src/reddit/actions/subreddit.ts");
			const h = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var b = Object(a.b)(h, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						var r;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (r = t.onShow) || void 0 === r || r.call(t)
					}
				})),
				f = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = r.n(f);
			class w extends o.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = () => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.props.onClick || (this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300))
					}, this.onClick = e => {
						this.props.onlyLeaveOnClick && (this.isHovering ? clearTimeout(this.openHovercardTimeoutId) : clearTimeout(this.closeHovercardTimeoutId)), this.props.onClick && this.props.onClick(e)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return o.a.createElement("div", {
						className: Object(n.a)(v.a.HoverDiv, t),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					}, e)
				}
			}
			const g = m(w),
				O = b(w)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, r) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/layout/row/Inline/index.tsx"),
				n = r("./src/reddit/components/Hovercards/helpers.m.less"),
				a = r.n(n);
			const i = s.a.wrapped(o.a, "UserActionItem", a.a),
				d = e => {
					const {
						author: t,
						itemId: r,
						subredditName: s,
						tooltipIdPrefix: o,
						tooltipType: n
					} = e;
					let a = o;
					return r && (a = `${a}--${r}`), n && (a = `${a}--${n}`), t && (a = `${a}--${t}`), s && (a = `${a}--${s}`), a
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return w
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "i", (function() {
				return T
			}));
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./node_modules/lodash/isNil.js"),
				d = r.n(i),
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
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? o.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && o.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(n.b)(u, {})(m),
				h = r("./src/reddit/selectors/comments.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				f = r("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const r = Object(b.b)(e, t),
					s = Object(f.M)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var w = Object(n.b)(() => Object(a.a)(v, h.j, (e, t) => ({
				...e,
				depth: t
			})))(e => o.a.createElement(p, {
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
			const g = (e, t) => {
				const r = Object(b.b)(e, t),
					s = Object(f.M)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var O = Object(n.b)(() => Object(a.a)(g, e => e))(e => o.a.createElement(p, {
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
			var x = Object(n.b)(() => Object(a.c)({
					subreddit: f.X
				}))(e => o.a.createElement(p, {
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
				A = r("./src/reddit/hooks/usePostContext.ts");
			var j = e => {
				const t = Object(A.a)(),
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
				return t ? o.a.createElement(p, {
					className: e.className,
					type: "post",
					data: r
				}) : null
			};
			var E = e => {
				const t = Object(A.a)(),
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
				return t ? o.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: r
				}) : null
			};
			var y = e => {
				const t = Object(A.a)(),
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
				return t ? o.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: r
				}) : null
			};
			var I = Object(n.b)(() => Object(a.c)({
				subreddit: f.X
			}))(e => o.a.createElement(p, {
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
				subredditOrProfile: (e, t) => Object(f.P)(e, {
					identifier: t
				})
			}))(e => o.a.createElement(p, {
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
			var T = Object(n.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? Object(f.X)(e, {
						subredditId: r
					}) : null
				}
			}))(e => o.a.createElement(p, {
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
		"./src/reddit/components/LastAuthorModNoteIcon/index.m.less": function(e, t, r) {
			e.exports = {
				hoverContainer: "_282iT6zlGPTjxs4_wnUw_R",
				showBackground: "RaBr7sOrqehAgubv6f1hE",
				isNightMode: "_1-EjTsf9H83ryPyVjAZp2A"
			}
		},
		"./src/reddit/components/LastAuthorModNoteIcon/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/tooltip.ts"),
				d = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				c = r("./src/reddit/components/Hovercards/helpers.ts"),
				l = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				u = r("./src/reddit/helpers/trackers/modNote.ts"),
				m = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/components/ModNoteItem/index.tsx"),
				h = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				b = r("./src/reddit/controls/Dropdown/index.tsx"),
				f = r("./src/reddit/components/LastAuthorModNoteTooltip/index.m.less"),
				v = r.n(f);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(h.a)(b.a),
				O = e => {
					let {
						modNoteData: t,
						isOverlay: r,
						isPost: n,
						isNightMode: i,
						onClick: d,
						subredditId: c
					} = e;
					const l = r && n,
						h = Object(m.a)();
					return Object(s.useEffect)(() => (h(Object(u.w)({
						modNote: t,
						subredditId: c
					})), () => h(Object(u.r)({
						modNote: t,
						subredditId: c
					}))), []), o.a.createElement(o.a.Fragment, null, l && o.a.createElement("div", {
						className: v.a.TopSpacer
					}), o.a.createElement("div", {
						className: v.a.backgroundContrast
					}, o.a.createElement(p.b, {
						className: Object(a.a)(v.a.ModNoteItem, {
							[v.a.isNightMode]: i
						}),
						modNote: t,
						subredditId: c,
						context: p.a.LastAuthorUserNoteTooltip,
						onClick: d
					})), !l && o.a.createElement("div", {
						className: v.a.BottomSpacer
					}))
				},
				x = e => {
					const t = e.isOverlay && e.isPost,
						r = t ? ["center", "bottom"] : ["center", "top"],
						s = t ? ["center", "top"] : ["center", "bottom"];
					return o.a.createElement(g, w({
						className: v.a.dropdown,
						id: e.hoverId,
						isOpen: e.dropdownIsOpen,
						targetPosition: r,
						tooltipPosition: s,
						style: {
							backgroundColor: "transparent",
							border: "none",
							boxShadow: "none"
						}
					}, e), o.a.createElement(O, e))
				};
			x.WrappedComponent = O;
			var A = x,
				j = r("./src/reddit/components/PostTopMeta/index.tsx"),
				E = r("./src/reddit/helpers/isPost.ts"),
				y = r("./src/reddit/hooks/useIsOverlay.ts"),
				I = r("./src/reddit/icons/fonts/index.tsx"),
				C = r("./src/reddit/models/ModUserNotes/index.ts"),
				T = r("./src/reddit/selectors/modUserNotes.ts"),
				_ = r("./src/reddit/selectors/tooltip.ts"),
				P = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/components/LastAuthorModNoteIcon/index.m.less"),
				S = r.n(N);
			t.a = e => {
				let {
					postOrComment: t,
					className: r
				} = e;
				var u;
				const m = Object(y.a)(),
					p = Object(C.g)(t.id, m),
					h = Object(C.h)(t),
					b = Object(n.e)(P.db),
					f = Object(n.e)(e => Object(T.b)(e, t.authorId, h)),
					v = Object(n.e)(e => Object(_.a)(e) === p),
					w = Object(n.d)(),
					g = Object(s.useCallback)(() => w(Object(i.i)()), [w]),
					O = Object(s.useCallback)(() => {
						const e = Object(c.b)({
							itemId: t.id,
							tooltipIdPrefix: d.a,
							tooltipType: m ? j.c.Lightbox : void 0
						});
						w(Object(i.f)({
							tooltipId: e,
							args: {
								isModNotesView: !0
							}
						}))
					}, [t, w, m]);
				if (!f) return null;
				const x = "label" in f && (null == f ? void 0 : f.label) || C.c,
					N = Object(I.b)(C.e[x], {
						isFilled: !0
					}),
					k = `${p}-hover-id`;
				return o.a.createElement(l.a, {
					className: Object(a.a)(r, S.a.hoverContainer, {
						[S.a.isNightMode]: b,
						[S.a.showBackground]: v
					}),
					tooltipId: p,
					authorOrSubredditName: (null === (u = f.operator) || void 0 === u ? void 0 : u.displayName) || "",
					hoverId: k,
					sendHoverEvent: () => {}
				}, o.a.createElement(N, {
					style: {
						color: C.d[x],
						fontSize: "12px",
						lineHeight: "12px"
					}
				}), o.a.createElement("div", {
					id: p,
					onMouseLeave: g
				}, o.a.createElement(A, {
					dropdownIsOpen: v,
					hoverId: k,
					modNoteData: f,
					isOverlay: m,
					isPost: Object(E.a)(t.id),
					isNightMode: b,
					subredditId: h,
					tooltipId: p,
					onClick: O
				})))
			}
		},
		"./src/reddit/components/LastAuthorModNoteTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "GPstmeFeO4czqJR2zs1mz",
				backgroundContrast: "_3r14JJj4Xkm_GnndoMhqik",
				ModNoteItem: "BQRl_o5B2PQPF96yT1qZc",
				modNoteItem: "BQRl_o5B2PQPF96yT1qZc",
				isNightMode: "_2NlJQ9MQqeRtsH7eKMyZVd",
				BottomSpacer: "sLQ_5L4_zMOcWEY-pLAkI",
				bottomSpacer: "sLQ_5L4_zMOcWEY-pLAkI",
				TopSpacer: "_2nXhIGpJFqVn_qWacMlFhL",
				topSpacer: "_2nXhIGpJFqVn_qWacMlFhL"
			}
		},
		"./src/reddit/components/ModNoteItem/index.m.less": function(e, t, r) {
			e.exports = {
				modNote: "pGw5f7WKM2dO9R0Aotv_x",
				header: "_3fOY2z5qmhIMTA5pHRw3HR",
				label: "_1s8o7TA7uhyKDAg_gBrROJ",
				labelIcon: "Z6i_tRKSyOfgORihc8AE2",
				note: "_16zfBhiOYAW7fHRK1jNOh",
				noLabel: "_1AvILjWpUTsm2yDYqIToxg",
				metadata: "OtVR2-taBTlpgc-PYOW3y",
				operatorBlock: "_15WP0iKlbJ_q8GgQVkCs0c",
				userIcon: "_399VmO76IeqVl7VMLjAdBG",
				createdDate: "_1wtfZke59yzfGrkBaSwBaO",
				link: "_2Dl07XZ7LNM7tsrbGG4Ym1"
			}
		},
		"./src/reddit/components/ModNoteItem/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var s, o = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/helpers/trackers/modNote.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/components/UserIcon/index.tsx"),
				m = r("./src/reddit/controls/InternalLink/index.tsx"),
				p = r("./src/reddit/hooks/useLocale.ts"),
				h = r("./src/reddit/icons/fonts/index.tsx"),
				b = r("./src/reddit/models/ModUserNotes/index.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/components/ModNoteItem/index.m.less"),
				w = r.n(v);
			! function(e) {
				e.LastAuthorUserNoteTooltip = "LastAuthorUserNoteTooltip", e.ModIdCard = "ModIdCard"
			}(s || (s = {}));
			t.b = e => {
				var t, r, s;
				const n = Object(i.e)(f.db),
					{
						className: v,
						modNote: g,
						onClick: O,
						subredditId: x,
						context: A
					} = e,
					j = "label" in g && g.label || b.c,
					E = "note" in g ? g.note : void 0,
					y = Object(h.b)(b.e[j || "bot"], {
						isFilled: !0
					}),
					I = Object(p.a)(),
					C = new Intl.DateTimeFormat(I, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(g.createdAt)),
					T = g.commentInfo,
					{
						postInfo: _
					} = g,
					P = _ ? _.permalink : T ? T.permalink : void 0,
					N = Object(h.b)("external_link"),
					S = Object(l.a)();
				return a.a.createElement("div", {
					className: Object(d.a)(v, w.a.modNote),
					onClick: e => {
						e.stopPropagation(), O && O(e), (() => {
							const e = "LastAuthorUserNoteTooltip" === A && c.e || "ModIdCard" === A && c.i;
							e && S(e({
								modNote: g,
								subredditId: x
							}))
						})()
					},
					style: j ? {
						backgroundColor: n ? b.b[j] : b.a[j]
					} : {}
				}, j !== b.c && a.a.createElement("div", {
					className: w.a.header
				}, a.a.createElement("div", {
					className: w.a.label
				}, a.a.createElement(y, {
					className: w.a.labelIcon,
					style: {
						color: b.d[j],
						fontSize: "15px",
						lineHeight: "15px"
					}
				}), b.f[j]())), E && a.a.createElement("div", {
					className: Object(d.a)(w.a.note, {
						[w.a.noLabel]: j === b.c
					})
				}, E), a.a.createElement("div", {
					className: w.a.metadata
				}, a.a.createElement(m.default, {
					className: w.a.operatorBlock,
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === A && c.o || "ModIdCard" === A && c.p;
							e && S(e({
								modNote: g,
								subredditId: x
							}))
						})()
					},
					to: `/user/${null===(t=g.operator)||void 0===t?void 0:t.displayName}/`
				}, a.a.createElement(u.a, {
					className: w.a.userIcon,
					userName: (null === (r = g.operator) || void 0 === r ? void 0 : r.displayName) || "",
					isNSFW: !1
				}), "u/", null === (s = g.operator) || void 0 === s ? void 0 : s.displayName), a.a.createElement("span", {
					className: w.a.createdDate
				}, o.fbt._("on {createdDate}", [o.fbt._param("createdDate", C)], {
					hk: "2VoP7K"
				})), P && a.a.createElement("a", {
					className: w.a.link,
					href: P || "",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === A && c.f || "ModIdCard" === A && c.g;
							e && S(e({
								modNote: g,
								subredditId: x
							}))
						})()
					}
				}, a.a.createElement(N, {
					className: w.a.linkIcon,
					style: {
						color: n ? "white" : "black",
						fontSize: "14px",
						opacity: .3
					}
				}))))
			}
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
				isDeleted: "_1pHpG_nGDGKayS5oFfQGDX",
				publicWallet: "SxdIdV2SgMWcIFG6Qsk0Q",
				authorLink: "_2tbHP6ZydRpjI44J3syuqC",
				isActionFont: "_1qzCGTSJOhg8noWqRayhmN",
				outboundLink: "_3V0C4FGg6153xIBQjwsycq",
				flairContainer: "NAURX0ARMmhJ5eqxQrlQW",
				timestamp: "_2VF2J19pUIMSLJFky-7PEI",
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
				return ce
			})), r.d(t, "a", (function() {
				return le
			})), r.d(t, "b", (function() {
				return pe
			}));
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/ads/index.ts"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/actions/profile/index.ts"),
				m = r("./src/reddit/helpers/isCrosspost.ts"),
				p = r("./src/reddit/hooks/useInfoTextTooltip.ts"),
				h = r("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				b = r("./src/reddit/icons/svgs/Powerup/index.tsx"),
				f = r("./src/reddit/components/AuthorLink/index.tsx"),
				v = r("./node_modules/fbt/lib/FbtPublic.js"),
				w = r("./src/reddit/models/Audio/index.ts"),
				g = r("./src/reddit/components/Econ/Audio/index.m.less"),
				O = r.n(g);
			var x = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: r
					} = t;
					if (!r) return null;
					const {
						recordingStatus: s
					} = r, n = [w.a.NotAvailable, w.a.Removed].includes(null != s ? s : w.a.NotAvailable);
					return !r.isLive && n ? null : o.a.createElement(o.a.Fragment, null, o.a.createElement("span", null, "• "), o.a.createElement("span", {
						"data-testid": "audio-meta-status",
						className: Object(i.a)(O.a.metaStatus, {
							[O.a.isLive]: r.isLive
						})
					}, r.isLive && v.fbt._("Live", null, {
						hk: "1wPVEx"
					}), !r.isLive && s === w.a.Available && v.fbt._("Recording", null, {
						hk: "1bhFSx"
					}), !r.isLive && s === w.a.Processing && v.fbt._("Processing...", null, {
						hk: "2MMuzJ"
					})))
				},
				A = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				j = r("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				E = r("./src/reddit/components/Flair/index.tsx"),
				y = r("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				I = r("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				C = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				T = r("./src/reddit/components/HumanDate/index.tsx"),
				_ = r("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				P = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = r("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				S = r("./src/reddit/components/QuarantinedLabel/index.tsx"),
				k = r("./src/reddit/components/SponsoredLabel/index.tsx"),
				M = r("./src/reddit/components/SubredditNameLink/index.tsx"),
				L = r("./src/reddit/constants/posts.ts"),
				B = r("./src/reddit/contexts/InsideOverlay.tsx"),
				F = r("./src/reddit/controls/MetaSeparator/index.tsx"),
				H = r("./src/lib/portal/index.tsx"),
				R = r("./src/reddit/constants/elementIds.ts"),
				D = o.a.memo((function(e) {
					let {
						children: t
					} = e;
					const [r, n] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => (n(!0), () => n(!1)), []), r ? o.a.createElement(H.a, {
						container: document.getElementById(R.e)
					}, o.a.Children.only(t)) : null
				})),
				U = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				z = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				G = r("./src/reddit/hooks/useClickSourceData.ts"),
				W = r("./src/reddit/icons/fonts/Admin/index.tsx"),
				q = (r("./src/reddit/icons/fonts/Premium/index.tsx"), r("./src/reddit/components/UserIcon/index.tsx")),
				Q = r("./src/reddit/constants/postLayout.ts"),
				V = r("./src/reddit/contexts/PageLayer/index.tsx"),
				J = r("./src/reddit/models/Flair/index.ts"),
				Y = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				K = r("./src/reddit/models/Post/index.ts"),
				$ = r("./src/reddit/models/Subreddit/index.ts"),
				X = r("./src/reddit/selectors/authorFlair.ts"),
				Z = r("./src/reddit/selectors/experiments/econ/index.ts"),
				ee = r("./src/reddit/selectors/gold/powerups/index.ts"),
				te = r("./src/reddit/selectors/platform.ts"),
				re = r("./src/reddit/selectors/userFlair.ts"),
				se = r("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				oe = r("./src/reddit/components/PostTopMeta/index.m.less"),
				ne = r.n(oe);
			const {
				fbt: ae
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ie = {
				placement: "top"
			};
			var de;
			! function(e) {
				e.StickyPost = "sticky", e.Lightbox = "lightbox", e.TopAwardedModal = "topAwarded"
			}(de || (de = {}));
			const ce = e => Object(z.a)(Object(U.a)(e), Y.a.metaText, Y.b.metaText),
				le = l.a.wrapped(F.b, "MetaSeparator", ne.a),
				ue = l.a.span("text", ne.a),
				me = Object(V.u)(),
				pe = e => {
					const t = Object(p.a)(ie),
						r = ae._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						}),
						s = ae._("Reddit contractor", null, {
							hk: "3APwEh"
						}),
						n = !e.isDeleted && e.post.distinguishType === d.J.ADMIN;
					return o.a.createElement(f.a, {
						author: e.post.author,
						className: Object(i.a)(ne.a.authorLink, {
							[ne.a.isActionFont]: e.showActionFont,
							[ne.a.isDeleted]: e.isDeleted
						}),
						forceOpenInNewTab: e.forceOpenInNewTab,
						isAuthorDeleted: e.isDeleted,
						isUnstyled: !0,
						linkProps: {
							"data-click-id": "user",
							"data-testid": "post_author_link"
						},
						onClick: e.onClick,
						style: e.style
					}, `u/${e.post.author}`, n && o.a.createElement(o.a.Fragment, null, o.a.createElement(W.a, {
						className: ne.a.adminIcon,
						isFilled: !0,
						desc: r
					}), o.a.createElement("span", {
						className: ne.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), o.a.createElement(D, null, o.a.createElement(_.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), e.renderContractorBadge && o.a.createElement(o.a.Fragment, null, o.a.createElement(W.a, {
						className: ne.a.contractorIcon,
						isFilled: !0,
						desc: s
					}), o.a.createElement("span", {
						className: ne.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), o.a.createElement(D, null, o.a.createElement(_.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), !1)
				},
				he = o.a.memo((function(e) {
					const {
						className: t,
						forceOpenInNewTab: r,
						isModWithUserNotesPermissions: c,
						isOverlay: l,
						onClickPostAuthor: v,
						pageLayer: g,
						post: O,
						showSub: B = !1,
						showTimestamp: F = !0,
						subredditOrProfile: H,
						tooltipType: R,
						onClick: U
					} = e, z = Object(n.d)(), W = Object(n.e)(te.d), Y = Object(n.e)(te.g) || ["popular", "all"].includes(W || ""), oe = O.isSponsored || Object(a.u)(g);
					Object(s.useEffect)(() => {
						oe && z(Object(u.d)(O.author))
					}, [oe, z, O.author]);
					const de = O.belongsTo.id,
						me = Object(s.useCallback)(e => Object(X.a)(e, {
							post: O
						}), [O]),
						he = Object(n.e)(me),
						be = Object(G.a)(),
						fe = Object(s.useCallback)(e => Object(re.a)(e, {
							subredditId: de
						}), [de]),
						ve = Object(n.e)(fe),
						we = Object(s.useCallback)(e => Object(ee.a)(e, {
							subredditId: de,
							userId: O.authorId
						}), [de, O.authorId]),
						ge = Object(n.e)(Z.i),
						Oe = Object(n.e)(we),
						xe = Object(s.useCallback)(e => Object(re.e)(e, {
							subredditId: de
						}), [de]),
						Ae = Object(n.e)(xe),
						je = Object(p.a)(ie),
						Ee = Object(p.a)(ie),
						ye = g && g.meta && g.meta.name === d.Sb.COMMENTS,
						Ie = Object(m.a)(O),
						Ce = Ae === J.b.Left,
						Te = O.authorIsContractor && !!H && H.type === $.f.EmployeesOnly,
						_e = !!H && !ge && Oe,
						Pe = !l && !ye,
						Ne = () => o.a.createElement(le, {
							className: e.metaSeparatorClassName
						}, "•"),
						Se = Object(n.e)(e => Object(V.S)(e, {
							pageLayer: g
						})),
						ke = Q.e[Se] === Q.d.Card,
						Me = Y && ke || !!ye,
						Le = oe && (Y || !!ye),
						Be = o.a.createElement(o.a.Fragment, null, he && Ce && o.a.createElement("div", {
							className: ne.a.flairContainer
						}, o.a.createElement(E.b, {
							disabled: !ve,
							flair: he,
							forceSmallEmojis: !0,
							usesCommunityStyles: Pe
						})), Object(K.o)(O.author) ? o.a.createElement(pe, {
							isDeleted: !0,
							onClick: v,
							post: O,
							renderContractorBadge: Te,
							showActionFont: Le,
							style: oe ? {} : {
								color: ce(e)
							}
						}) : o.a.createElement(o.a.Fragment, null, o.a.createElement(A.b, {
							className: ne.a.badge,
							subredditId: de,
							uniqueIdentifier: `${O.id}-${l}`,
							userId: O.authorId
						}), o.a.createElement(I.b, {
							postOrComment: O,
							tooltipType: R
						}, o.a.createElement(j.b, {
							ignore: !!O.distinguishType && O.distinguishType !== d.J.NONE,
							subredditId: de,
							userId: O.authorId
						}, o.a.createElement(pe, {
							forceOpenInNewTab: r,
							onClick: v,
							post: O,
							renderContractorBadge: Te,
							style: oe ? {} : {
								color: ce(e)
							},
							showActionFont: Le
						}))), !Object(K.o)(O.author) && c && o.a.createElement(N.a, {
							postOrComment: O,
							tooltipType: R
						}), _e && o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
							className: ne.a.powerupBadge,
							onMouseEnter: Ee.show,
							onMouseLeave: Ee.hide,
							ref: Ee.target.ref
						}, o.a.createElement(b.a, {
							className: ne.a.powerupIcon
						})), o.a.createElement(D, null, o.a.createElement(_.a, {
							arrowProps: Ee.arrowProps,
							popperProps: Ee.popperProps,
							visible: Ee.visible
						}, ae._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						}))))), he && !Ce && o.a.createElement("div", {
							className: ne.a.flairContainer
						}, o.a.createElement(E.b, {
							disabled: !ve,
							flair: he,
							forceSmallEmojis: !0,
							usesCommunityStyles: Pe
						})), O.belongsTo.type === L.a.SUBREDDIT && !Object(K.o)(O.author) && o.a.createElement(y.a, {
							className: ne.a.publicWallet,
							contentId: O.id,
							metaSeparator: o.a.createElement(Ne, null),
							subredditId: de,
							userId: O.authorId,
							username: O.author
						})),
						Fe = ae._("{=Posted by}{author}", [ae._param("=Posted by", o.a.createElement(ue, {
							style: {
								color: ce(e)
							}
						}, ae._("Posted by", null, {
							hk: "274iff"
						}))), ae._param("author", Be)], {
							hk: "1abNaj"
						}),
						He = o.a.createElement(o.a.Fragment, null, o.a.createElement(h.a, {
							className: ne.a.crosspostIcon
						}), ae._("{=Crossposted by}{author}", [ae._param("=Crossposted by", o.a.createElement(ue, {
							style: {
								color: ce(e)
							}
						}, ae._("Crossposted by", null, {
							hk: "1YnHU8"
						}))), ae._param("author", Be)], {
							hk: "3BfJwk"
						})),
						Re = () => Ie || oe ? Ie ? He : Be : Fe;
					return o.a.createElement("div", {
						className: Object(i.a)(ne.a.container, t),
						"data-adclicklocation": se.a.TOP_BAR,
						onClick: U
					}, B && H && o.a.createElement(C.a, {
						postId: O.id,
						subredditName: H.name,
						tooltipType: R
					}, o.a.createElement(M.a, {
						"data-click-id": "subreddit",
						to: {
							pathname: H.url,
							state: be
						}
					}, H.displayText)), H && H.isQuarantined && o.a.createElement(S.a, null), B && !Ie && o.a.createElement(Ne, null), oe ? o.a.createElement(o.a.Fragment, null, (null == H ? void 0 : H.icon) && Me && o.a.createElement(f.a, {
						author: O.author,
						isUnstyled: !0,
						forceOpenInNewTab: r,
						onClick: v,
						linkProps: {
							"data-click-id": "user",
							"data-testid": "post_author_link_icon"
						}
					}, o.a.createElement(q.a, {
						iconUrl: H.icon.url,
						isNSFW: H.isNSFW,
						userName: H.name,
						className: ne.a.userIcon,
						omitResponsivePresenceWrapper: !0
					})), Re(), o.a.createElement(Ne, null), o.a.createElement(k.a, {
						greyTextColor: ce(e),
						isSurveyAd: O.isSurveyAd
					})) : Re(), o.a.createElement(P.e, null), F && !oe && o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
						className: ne.a.timestamp,
						"data-testid": "post_timestamp",
						"data-click-id": "timestamp",
						onMouseEnter: je.show,
						onMouseLeave: je.hide,
						ref: je.target.ref,
						style: {
							color: ce(e)
						}
					}, o.a.createElement(T.d, {
						seconds: O.created / d.Xb
					})), o.a.createElement(D, null, o.a.createElement(_.a, {
						arrowProps: je.arrowProps,
						popperProps: je.popperProps,
						visible: je.visible
					}, o.a.createElement(T.b, {
						seconds: O.created / d.Xb
					})))), Object(w.c)(O) && o.a.createElement(x, {
						post: O
					}))
				}));
			t.d = me(Object(B.b)(Object(c.a)(he)))
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
				o = r("./node_modules/react/index.js"),
				n = r.n(o),
				a = r("./src/higherOrderComponents/asTooltip.tsx"),
				i = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = r("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = r.n(u);
			const p = ["center", "top"],
				h = ["center", "bottom"],
				b = i.a.div("Container", m.a),
				f = Object(a.a)(d.b),
				v = Object(c.u)({
					isProfileListingPage: c.I
				});
			class w extends n.a.Component {
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
					return n.a.createElement(b, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, n.a.createElement(l.a, {
						className: m.a.quarantineIcon
					}), s.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), n.a.createElement(f, {
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
			t.a = v(w)
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
				o = r("./node_modules/react/index.js"),
				n = r.n(o),
				a = r("./src/reddit/components/SponsoredLabel/index.m.less"),
				i = r.n(a),
				d = r("./src/lib/classNames/index.ts");
			const c = r("./src/lib/lessComponent.tsx").a.span("Wrapper", i.a);
			t.a = e => {
				let {
					className: t,
					greyTextColor: r,
					isSurveyAd: o
				} = e;
				const a = o ? s.fbt._("We'd like your feedback", null, {
					hk: "3ltlDO"
				}) : s.fbt._("promoted", null, {
					hk: "1R81m"
				});
				return n.a.createElement(c, {
					className: Object(d.a)(t, i.a.isPromotedGrey)
				}, n.a.createElement("span", {
					style: {
						color: r
					}
				}, a))
			}
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
				o = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/MetaSeparator/index.m.less"),
				i = r.n(a);
			const d = e => o.a.createElement("span", {
				className: Object(n.a)(i.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: r
				} = e;
				return o.a.createElement(d, {
					className: Object(n.a)(i.a.metaSeparator, t),
					isSmall: r
				})
			}
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return x
			})), r.d(t, "n", (function() {
				return A
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "m", (function() {
				return N
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "i", (function() {
				return k
			})), r.d(t, "e", (function() {
				return M
			}));
			var s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
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
				v = r("./src/redditGQL/operations/ManageableAwardsForProfile.json"),
				w = r("./src/redditGQL/operations/RemoveCommunityAward.json"),
				g = r("./src/reddit/constants/headers.ts"),
				O = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const x = (e, t, r, n) => {
					const i = {
						subreddit: t,
						filepath: r,
						mimetype: n
					};
					return Object(o.a)(Object(a.a)(e, [g.a]), {
						method: s.ob.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: i
					})
				},
				A = async (e, t) => Object(i.a)(t, e), j = (e, t, r, s, o, a, i, d, c) => Object(n.a)(e, {
					...l,
					variables: {
						coinPrice: i,
						iconHeight: a,
						iconWidth: o,
						iconUrl: s,
						name: r,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), E = (e, t, r, s, o, a, i, d, c) => Object(n.a)(e, {
					...m,
					variables: {
						iconHeight: a,
						iconWidth: o,
						iconUrl: s,
						monthsOfPremium: i,
						name: r,
						subredditId: t,
						startsAt: d,
						endsAt: c
					}
				}), y = e => {
					let {
						awardSubType: t,
						coinPrice: r,
						coinReward: s,
						context: o,
						daysOfDripExtension: a,
						daysOfPremium: i,
						description: d,
						endsAt: c,
						giverCoinReward: l,
						iconFormat: m,
						iconHeight: p,
						iconUrl: h,
						iconWidth: b,
						isNew: f,
						name: v,
						pennyPrice: w,
						pennyDonate: g,
						startsAt: O,
						subredditCoinReward: x
					} = e;
					return Object(n.a)(o, {
						...u,
						variables: {
							awardSubType: t,
							iconFormat: m,
							iconHeight: p,
							iconWidth: b,
							iconUrl: h,
							isNew: f,
							daysOfPremium: i,
							daysOfDripExtension: a,
							description: d,
							coinPrice: r,
							coinReward: s,
							name: v,
							pennyPrice: w,
							pennyDonate: g,
							giverCoinReward: l,
							startsAt: O,
							endsAt: c,
							subredditCoinReward: x
						}
					})
				}, I = (e, t) => Object(n.a)(e, {
					...f,
					variables: {
						subredditId: t
					}
				}), C = (e, t) => Object(n.a)(e, {
					...v,
					variables: {
						profileName: t
					}
				}), T = e => Object(n.a)(e, {
					...b
				}), _ = (e, t, r) => Object(n.a)(e, {
					...d,
					variables: {
						subredditId: t,
						thingId: r,
						includeGroup: !0
					}
				}), P = (e, t, r) => Object(n.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: r,
						includeGroup: !0
					}
				}), N = (e, t) => Object(n.a)(e, {
					...w,
					variables: {
						awardId: t
					}
				}), S = (e, t, r) => Object(n.a)(e, {
					...p,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), k = (e, t, r) => Object(n.a)(e, {
					...h,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), M = async (e, t, r) => {
					const n = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(o.a)(Object(a.a)(e, [g.a]), {
						method: s.ob.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(O.a)(e)
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
				o = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				n = r("./src/reddit/selectors/gold/topAwarded.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						...Object(o.h)(e, t),
						correlationId: Object(s.d)(s.a.GildingFlow, !1),
						profile: a.T(e),
						subreddit: a.jb(e)
					}
				},
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
						thingId: Object(n.a)(e) || void 0
					})
				})
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/react/index.js"),
				o = r("./src/reddit/contexts/InsideOverlay.tsx");

			function n() {
				return Object(s.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = r.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(n.a)(Object(a.b)("admin", e.isFilled), d.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/react/index.js"),
				o = r.n(s);

			function n(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), o.a.createElement("path", {
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
				o = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = r.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(n.a)(i.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/Powerup/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M12.249 32c-.4 0-.8-.1-1.2-.25l-.05-.05-5.05-2.6c-1.25-.7-1.75-2.2-1.25-3.5l.05-.1 2.45-5.45-3.15-1.5a2.985 2.985 0 01-1.4-3.55l3.5-12.05C6.649 1.2 8.299 0 10.099 0h7.8c.45 0 .9.1 1.3.3l.15.1 4.85 2.45c1.5.8 2.05 2.55 1.35 4.05l-2.2 4.3 4.45 2.25c.8.45 1.35 1.25 1.45 2.2.1.9-.2 1.8-.9 2.45l-14.15 13.15c-.55.5-1.25.75-1.95.75z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M10.648 17l-.85 2.1-4.65-2.2c.1.05.25.1.4.1h5.1zM23.749 13.6l3.1 1.6c.5.3.65 1 .15 1.45L12.849 29.8c-.3.25-.65.3-.95.15l-4.85-2.5c.3.1.65.1.9-.15l14.15-13.15c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M23.75 13.6l3.1 1.6c.5.3.65 1 .15 1.45l-4.9-2.5c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M18.898 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-3.35 6.55h-6.05l4.5-9.05z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M18.9 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-4.9-2.5z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M21.95 12.65c.5.3.65 1 .15 1.45L7.95 27.3c-.3.25-.65.3-.9.15l-.1-.05a.86.86 0 01-.4-1.05l4.1-9.35h-5.1c-.15 0-.3-.05-.45-.1l-.1-.05c-.4-.25-.65-.75-.5-1.25L8.05 3.55A2.19 2.19 0 0110.15 2h7.8c.15 0 .3.05.45.1l.05.05c.45.25.7.85.45 1.4l-4.5 9.05h7.1c.15 0 .3.05.4.1l.05-.05z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M15.599 3.45c.55-.15 1.15-.25 1.7-.45-.6-.1-1.15-.15-1.75-.2-.6-.05-1.15-.05-1.75-.1-1.15-.05-2.25 0-3.4.05-.55 0-1.05.3-1.35.8-.15.3-.15.35-.2.5l-.15.4-.5 1.55c-.35 1.05-.7 2.1-1 3.15-.3 1.05-.65 2.1-.9 3.2-.3 1.05-.6 2.15-.8 3.25.55-1 1-2 1.5-3 .45-1 .9-2 1.35-3.05.4-1 .85-2.05 1.2-3.1l.6-1.55.25-.65h.05c1.15-.1 2.3-.25 3.4-.45.6-.1 1.15-.2 1.75-.35zM20.25 13.35c-1.1-.05-2.2-.05-3.3 0-.55 0-1.1.05-1.65.1-.55.05-1.1.1-1.65.2.55.15 1.1.25 1.6.35.55.1 1.1.2 1.65.25.6.1 1.25.15 1.85.2-.45.45-.9.85-1.3 1.3-.75.75-1.5 1.5-2.25 2.3-.75.8-1.5 1.55-2.2 2.35-.7.8-1.45 1.6-2.1 2.45.9-.65 1.7-1.3 2.55-2 .85-.7 1.65-1.4 2.45-2.1.8-.7 1.6-1.45 2.4-2.15l2.35-2.2c.1-.1.15-.25.2-.4 0-.4-.3-.65-.6-.65z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", {
					fillRule: "evenodd"
				}, o.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), o.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/icons/svgs/TopAwarded/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s);
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
		"./src/reddit/models/Audio/index.ts": function(e, t, r) {
			"use strict";
			var s, o, n;

			function a(e) {
				return Boolean(e.audioRoom)
			}
			r.d(t, "a", (function() {
					return o
				})), r.d(t, "b", (function() {
					return n
				})), r.d(t, "c", (function() {
					return a
				})),
				function(e) {
					e.Unknown = "UNKNOWN", e.Twilio = "TWILIO"
				}(s || (s = {})),
				function(e) {
					e[e.NotAvailable = 0] = "NotAvailable", e[e.Processing = 1] = "Processing", e[e.Available = 2] = "Available", e[e.Removed = 3] = "Removed"
				}(o || (o = {})),
				function(e) {
					e[e.Unknown = 0] = "Unknown", e[e.NotStarted = 1] = "NotStarted", e[e.Scheduled = 2] = "Scheduled", e[e.InProgress = 3] = "InProgress", e[e.Ended = 4] = "Ended"
				}(n || (n = {}))
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
		"./src/reddit/models/ModUserNotes/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "h", (function() {
				return p
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/reddit/helpers/isPost.ts"),
				n = r("./src/redditGQL/types.ts");
			const a = "DEFAULT_MOD_NOTE",
				i = (e, t) => `LAST_AUTHOR_MOD_NOTE-${e}${t?"-overlay":""}`,
				d = {
					[n.z.BotBan]: "#1717604F",
					[n.z.PermaBan]: "#3E0A514F",
					[n.z.Ban]: "#5B00414F",
					[n.z.AbuseWarning]: "#6D001A4F",
					[n.z.SpamWarning]: "#5423134F",
					[n.z.SpamWatch]: "#3A26194F",
					[n.z.SolidContributor]: "#0044414F",
					[n.z.HelpfulUser]: "#02315C4F",
					[a]: "#242424"
				},
				c = {
					[n.z.BotBan]: "#CCD7FF",
					[n.z.PermaBan]: "#F3CCFF",
					[n.z.Ban]: "#FFC9D2",
					[n.z.AbuseWarning]: "#FFD5AE",
					[n.z.SpamWarning]: "#FFF494",
					[n.z.SpamWatch]: "#EAD5A2",
					[n.z.SolidContributor]: "#CBFD9A",
					[n.z.HelpfulUser]: "#A6EDFF",
					[a]: "#E6E6E6"
				},
				l = {
					[n.z.BotBan]: "bot_fill",
					[n.z.PermaBan]: "bot_fill",
					[n.z.Ban]: "ban_fill",
					[n.z.AbuseWarning]: "spoiler_fill",
					[n.z.SpamWarning]: "spoiler_fill",
					[n.z.SpamWatch]: "nsfw_language_fill",
					[n.z.SolidContributor]: "new_fill",
					[n.z.HelpfulUser]: "peace_fill",
					[a]: "user_note_fill"
				},
				u = {
					[n.z.BotBan]: "#5349DA",
					[n.z.PermaBan]: "#9C3CAC",
					[n.z.Ban]: "#DE107F",
					[n.z.AbuseWarning]: "#FB133A",
					[n.z.SpamWarning]: "#E79800",
					[n.z.SpamWatch]: "#9C6926",
					[n.z.SolidContributor]: "#00A368",
					[n.z.HelpfulUser]: "#006DC6",
					[a]: "#818384"
				},
				m = {
					[n.z.BotBan]: () => s.fbt._("Bot Ban", null, {
						hk: "2kKP5R"
					}),
					[n.z.PermaBan]: () => s.fbt._("Perma Ban", null, {
						hk: "2NKibN"
					}),
					[n.z.Ban]: () => s.fbt._("Ban", null, {
						hk: "4tkpUP"
					}),
					[n.z.AbuseWarning]: () => s.fbt._("Abuse Warning", null, {
						hk: "3yQJ5"
					}),
					[n.z.SpamWarning]: () => s.fbt._("Spam Warning", null, {
						hk: "4sYfYD"
					}),
					[n.z.SpamWatch]: () => s.fbt._("Spam Watch", null, {
						hk: "3CoM4o"
					}),
					[n.z.SolidContributor]: () => s.fbt._("Good Contributor", null, {
						hk: "31uTvb"
					}),
					[n.z.HelpfulUser]: () => s.fbt._("Helpful", null, {
						hk: "1iapJ2"
					})
				},
				p = e => Object(o.a)(e.id) ? e.belongsTo.id : e.subredditId
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var s, o, n, a;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(n || (n = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var s;

			function o(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return w
			})), r.d(t, "o", (function() {
				return g
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "x", (function() {
				return x
			})), r.d(t, "f", (function() {
				return A
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "z", (function() {
				return I
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "n", (function() {
				return T
			})), r.d(t, "e", (function() {
				return _
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "p", (function() {
				return S
			})), r.d(t, "k", (function() {
				return L
			})), r.d(t, "r", (function() {
				return F
			})), r.d(t, "y", (function() {
				return H
			})), r.d(t, "u", (function() {
				return R
			})), r.d(t, "v", (function() {
				return D
			})), r.d(t, "b", (function() {
				return U
			})), r.d(t, "w", (function() {
				return z
			})), r.d(t, "s", (function() {
				return G
			})), r.d(t, "t", (function() {
				return W
			})), r.d(t, "g", (function() {
				return V
			})), r.d(t, "m", (function() {
				return J
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/helpers/economics/sortBadges.ts"),
				n = r("./src/reddit/helpers/richTextJson/index.ts"),
				a = r("./src/reddit/models/Badge/index.ts"),
				i = r("./src/reddit/models/Badge/managementPage.ts"),
				d = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/models/Product/index.ts"),
				l = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/comments.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				h = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const v = [],
				w = (e, t) => {
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
				g = (e, t) => {
					const r = w(e, t);
					return r && r.endsAt || null
				};
			var O;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(O || (O = {}));
			const x = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const r = g(e, t),
							s = Date.now();
						return r && s < r ? O.Subscribed : O.NotSubscribed
					}
					return O.DontKnow
				},
				A = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === u.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || v).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[i.a.Loyalty]: s.find(e => e.placement === a.a.First),
							[i.a.Achievement]: s.find(e => e.placement === a.a.Second),
							[i.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function j(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : v
			}
			const E = (e, t, r) => {
					var o;
					if (!s.d.spBadges(e)) return v;
					return j(null === (o = e.users.appliedBadges[r]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				y = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === u.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function I(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: r,
					subredditId: s
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(r) && r.userId === o) return r;
				const n = e.badges.models,
					i = e.user.ownedBadges[s] || {},
					d = Object(a.e)(r) ? r.type : r.id;
				return Object.keys(i).map(e => n[e]).find(e => e && e.type === d)
			}

			function T(e, t, r, s) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === u.a.Fetched) {
					if (r === i.a.Loyalty || r === i.a.Achievement) return o.data.collections[r];
					if (r === i.a.Cosmetic && s) return o.data.collections[r][s]
				}
				return v
			}

			function _(e, t) {
				const r = T(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : v
			}

			function P(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					const e = r.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return v
			}

			function N(e, t) {
				return T(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
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
			var k;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(k || (k = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				L = (e, t) => Object.values(e.products.models).filter(e => e.type === c.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const r = M.prices;
					L(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const s = w(e, t);
					return s && s.price && s.currency && (r[s.currency] = s.price), r
				},
				F = (e, t) => {
					var r, s, o, n;
					const a = (null === (n = null === (o = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === o ? void 0 : o[t || ""]) || void 0 === n ? void 0 : n.nomenclature) || M;
					return {
						prices: B(e, t),
						member: a.member || M.member,
						memberPlural: a.memberPlural || M.memberPlural,
						memberAlt: a.memberAlt || M.memberAlt,
						memberAltPlural: a.memberAltPlural || M.memberAltPlural,
						membership: a.membership || M.membership,
						membershipAlt: a.membershipAlt || M.membershipAlt
					}
				},
				H = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				R = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				U = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return;
					return e.economics.emotes[r]
				},
				z = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				G = (e, t, r) => {
					if (Object(b.n)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== r && Object(p.b)(e, {
						commentId: r
					});
					return !(!s || !Object(n.a)(s))
				},
				W = (e, t, r) => {
					if (Object(h.a)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!Q(e, t) || !(!s.d.spGiphy(e) || !q(e, r)));
					if (!Object(f.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(b.o)(e, {
							subredditId: t
						})) return !0;
					if (q(e, r)) return !0;
					const o = s.d.spGiphy(e),
						n = z(e, t);
					return !!Q(e, t) || o && n
				},
				q = (e, t) => {
					const r = "replyToPost" !== t && Object(p.b)(e, {
						commentId: t
					});
					if (r && Object(n.b)(r)) return !0
				},
				Q = (e, t) => {
					const r = s.d.spGiphy(e),
						o = z(e, t);
					return r && o
				},
				V = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				J = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				n = r("./src/reddit/selectors/user.ts");
			const a = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: n.Q,
						experimentName: s.pd
					});
					return !(!t || Object(s.tg)(t))
				},
				i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: n.Q,
						experimentName: s.pd
					}) === s.Qd.ListingEnabled
				}
		},
		"./src/reddit/selectors/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			const s = e => e.users.topAwarders.currentPostId,
				o = e => e.users.topAwarders.api.pending,
				n = e => e.users.topAwarders.api.error,
				a = (e, t) => e.users.topAwarders.list[t],
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8.12279ef3c8a307ad197a.js.map