// https://www.redditstatic.com/desktop2x/Comment.26311028fa26195da604.js
// Retrieved at 1/24/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Comment"], {
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
				return m
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
				p = Object(n.a)(c.vb),
				m = (e, t = 25) => async (r, n, {
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
							Object(s.b)() || console.error(i), o.c.captureMessage(i), r(p(i.message))
						}
					}
				}, h = Object(n.a)(c.yb), b = e => async (t, r) => {
					t(h({
						postId: e
					})), t(Object(i.h)(a.a.ECON_TOP_AWARDERS))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "f", (function() {
				return y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/query-string/index.js"),
				n = r.n(s),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				d = r("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				i = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = r("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const u = new Set(["home", "r/popular"]),
				p = e => {
					const t = location && location.search || "",
						r = n.a.parse(t);
					u.has(e) && (r.related = e);
					const s = n.a.stringify(r);
					return s ? `?${s}` : ""
				},
				m = Object(o.a)(a.N),
				h = Object(o.a)(a.y),
				b = Object(o.a)(a.O),
				w = Object(o.a)(a.z),
				f = Object(o.a)(a.M),
				v = Object(o.a)(a.L),
				x = Object(o.a)(a.t),
				g = Object(o.a)(a.u),
				A = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = Object(i.g)(e),
						o = r();
					if (Object(c.d)(o, n)) return;
					t(m(n));
					const a = await Object(d.e)(s(), n),
						l = Date.now();
					if (a.ok && a.body && a.body.data) {
						const e = a.body.data;
						t(h({
							model: e,
							utcTimeStamp: l
						}))
					} else t(C({
						streamId: n,
						error: a.error,
						utcTimeStamp: l
					}))
				}, O = (e, t) => async (r, s) => r(j(e, t)), j = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					const o = s();
					if (Object(c.f)(o)) return;
					r(b());
					const a = await Object(d.f)(n(), e, t),
						i = Date.now();
					if (a.ok && a.body && a.body.data) {
						const t = a.body.data;
						r(w({
							listingName: e,
							models: t,
							utcTimeStamp: i
						}))
					} else r(E({
						error: a.error,
						utcTimeStamp: i
					}))
				}, y = (e, t) => async (r, s) => r(_(e, t)), _ = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					const o = s();
					if (Object(c.f)(o)) return;
					r(b());
					const a = Date.now(),
						i = e.replace("r/", ""),
						u = Object(l.C)(o, i),
						p = await Object(d.b)(n(), {
							subredditId: u,
							options: t
						}),
						m = p.body;
					p.ok && m && m.data || r(E({
						error: p.error,
						utcTimeStamp: a
					}));
					const h = m.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const r = await Object(d.e)(e, t),
								s = Date.now(),
								n = r.body;
							return n && n.data ? n.data : void C({
								streamId: t,
								error: r.error,
								utcTimeStamp: s
							})
						})(n(), e.node.id)),
						f = (await Promise.all(h)).filter(e => void 0 !== typeof e);
					r(w({
						listingName: e,
						models: f,
						utcTimeStamp: a
					}))
				}, C = e => async t => {
					t(f(e))
				}, E = e => async t => {
					t(v(e))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/loadableAction/index.ts");
			const n = Object(s.a)(() => Promise.all([r.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), r.e("ReportFlow")]).then(r.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				o = Object(s.a)(() => Promise.all([r.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), r.e("ReportFlow")]).then(r.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				a = Object(s.a)(() => Promise.all([r.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), r.e("ReportFlow")]).then(r.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
				p = r("./src/reddit/actions/gold/constants.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				h = r("./src/reddit/models/Toast/index.ts");
			const b = Object(l.a)(p.D),
				w = ({
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
						}))(o(), e, t)).error && r(Object(m.f)({
							kind: h.b.Error,
							duration: m.a,
							text: a
						}))
					} catch (d) {
						r(Object(m.f)({
							kind: h.b.Error,
							duration: m.a,
							text: a
						}))
					}
				};
			var f = r("./src/reddit/actions/gold/modals.ts"),
				v = r("./src/reddit/actions/modal.ts"),
				x = r("./src/reddit/actions/tooltip.ts"),
				g = r("./src/reddit/helpers/correlationIdTracker.ts"),
				A = r("./src/reddit/helpers/isPost.ts"),
				O = r("./src/reddit/helpers/trackers/gild.ts"),
				j = r("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = r("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = r("./src/reddit/models/Gold/Award.ts"),
				C = r("./src/reddit/selectors/activeModalId.ts"),
				E = r("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				T = r("./src/reddit/selectors/gold/awardIcon.ts"),
				N = r("./src/reddit/contexts/Post/index.tsx"),
				I = r("./src/reddit/contexts/User/index.tsx"),
				k = r("./node_modules/lodash/debounce.js"),
				R = r.n(k),
				M = r("./src/lib/classNames/index.ts"),
				S = r("./src/lib/fastdom/index.ts"),
				F = r("./src/reddit/models/Gold/TopAwarded/index.ts"),
				B = r("./src/reddit/icons/fonts/Gift/index.tsx"),
				P = r("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				L = r.n(P);
			var D = o.a.memo(e => o.a.createElement("button", {
					className: Object(M.a)(e.className, L.a.addAwardPill),
					name: s.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, o.a.createElement(B.a, {
					className: L.a.giftIcon
				}))),
				G = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				H = r("./src/higherOrderComponents/makeAsync.tsx"),
				U = r("./src/lib/loadWithRetries/index.ts");
			var q = Object(H.a)({
					getComponent: () => Object(U.a)(() => r.e("AwardTooltip").then(r.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				W = r("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				V = r.n(W);
			const z = 3500,
				Q = 500;
			class J extends o.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = o.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: r,
							triggerOverlayAnimation: s
						} = this.props;
						e.id !== _.g && (this.setState({
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
						count: r,
						giveAwardAnimationIconUrl: s,
						pillIconUrl: n,
						post: a,
						tooltipId: d
					} = this.props, {
						userGiven: i,
						shouldAnimate: c
					} = this.state, l = Object(G.a)(e.id, a.id);
					return o.a.createElement("span", {
						className: V.a.awardPillContainer,
						id: d,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, o.a.createElement("button", {
						className: Object(M.a)(t, V.a.awardPill, {
							[V.a.userGiven]: i
						}),
						onClick: this.handleOnClick
					}, o.a.createElement("span", {
						className: V.a.imageContainer
					}, o.a.createElement("img", {
						alt: e.name,
						className: Object(M.a)(V.a.awardIcon, {
							[V.a.hidden]: c
						}),
						id: l,
						ref: this.imageRef,
						src: n
					}), c && o.a.createElement("img", {
						alt: e.name,
						className: V.a.animationIcon,
						src: s
					})), o.a.createElement("span", {
						className: V.a.count
					}, r.toLocaleString())), o.a.createElement(q, {
						award: e,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideAward: this.handleHideAward,
						postOrComment: a,
						tooltipId: d
					}))
				}
			}
			var Y = J,
				K = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
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
					className: Object(M.a)(X.a.buttonContainer, {
						[X.a.right]: a
					}, t)
				}, o.a.createElement("button", {
					className: X.a.scrollButton,
					name: a ? i : d,
					onClick: n
				}, o.a.createElement(K.a, {
					className: X.a.chevronIcon
				})))
			});
			const ee = (e, t) => {
				let r = `${Object(A.a)(e)?"Post":"Comment"}AwardBadges--${e}`;
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
						className: Object(M.a)(ae.a.pill, e.className, {
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
				pe = 100;
			class me extends o.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = o.a.createRef(), this.handleResize = R()(() => {
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
							r = e.scrollLeft - (t - pe);
						this.scrollPlaqueTo(r)
					}, this.handleScrollRight = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							r = e.scrollLeft + (t - pe);
						this.scrollPlaqueTo(r)
					}, this.handleTriggerAnimation = e => {
						this.props.triggerOverlayAnimation(), S.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const r = document.getElementById(e);
							if (!r) return;
							const s = t.getBoundingClientRect(),
								n = r.getBoundingClientRect();
							if (n.left < s.left || n.right > s.right) {
								const e = n.left + (t.scrollLeft - s.left) - pe;
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
						onHideTooltip: p,
						onOpenReportFlow: m,
						onShowTooltip: h,
						tooltipType: b
					} = this.props, {
						canScrollLeft: w,
						canScrollRight: f
					} = this.state, v = e.length > 0, x = ee(i.id, b);
					return o.a.createElement("div", {
						className: Object(M.a)(le.a.awardBadges, t, {
							[le.a.noAwards]: !v,
							[le.a.multiline]: d
						}),
						ref: this.plaqueRef
					}, w && o.a.createElement(Z, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (i.topAwardedType === F.a.Active || i.topAwardedType === F.a.Inactive) && !s && a && o.a.createElement(ie, {
						awardsPlaqueStyle: !0,
						post: i
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = i, r = t[e.id], s = n.icon32[e.id], a = n.icon128[e.id];
						return o.a.createElement(Y, {
							award: e,
							className: le.a.clickablePlaqueItem,
							count: r,
							giveAwardAnimationIconUrl: a,
							key: e.id,
							onAddAward: l,
							onHideAward: u,
							onOpenReportFlow: m,
							onHideTooltip: p,
							onShowTooltip: h,
							pillIconUrl: s,
							post: i,
							prefersReducedMotion: c,
							tooltipId: `${x}-${e.id}`,
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !r && o.a.createElement(D, {
						className: le.a.clickablePlaqueItem,
						onAddAward: l
					}), !d && o.a.createElement("div", {
						className: le.a.spacer
					}), f && o.a.createElement(Z, {
						direction: "right",
						onClick: this.handleScrollRight
					}))
				}
			}
			var he = me,
				be = r("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				we = r.n(be);
			const {
				fbt: fe
			} = r("./node_modules/fbt/lib/FbtPublic.js");
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
					const p = e.awardType === _.f.Moderator,
						m = Object(G.a)(e.id, c.id),
						h = "container" === u;
					return o.a.createElement("span", {
						className: Object(M.a)(we.a.awardItem, t),
						id: h ? l : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: d
					}, o.a.createElement("span", {
						id: h ? "" : l
					}, o.a.createElement("img", {
						alt: e.name,
						className: Object(M.a)(we.a.awardIcon, {
							[we.a.animate]: this.state.animate
						}, s),
						id: m,
						ref: this.imageRef,
						src: n
					})), o.a.createElement("span", null, r > 1 && r, p && this.renderModAwardName()), o.a.createElement(q, {
						award: e,
						onHideAward: () => a(e),
						postOrComment: c,
						tooltipId: l,
						onOpenReportFlow: () => i(e)
					}))
				}
			}
			var xe = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ge = r("./src/reddit/icons/fonts/index.tsx"),
				Ae = r("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				Oe = r.n(Ae);
			var je = e => {
				const {
					className: t,
					onClick: r
				} = e;
				return o.a.createElement("button", {
					className: Object(M.a)(t, Oe.a.badgeButton, Oe.a.visibilityEffect),
					onClick: r
				}, o.a.createElement(ge.a, {
					name: "award",
					className: Oe.a.icon
				}))
			};
			var ye, _e = e => {
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
						onHideTooltip: p,
						onShowAllAwards: m,
						onShowTooltip: h,
						showAllAwards: b,
						tooltipType: w,
						thing: f
					} = e, v = ee(f.id, w), x = `${v}-view-all`;
					let g = [];
					g = b ? t : t.length > 5 ? t.slice(0, 4) : t;
					const O = !n && f.isGildable && t.length > 0,
						j = t.length > g.length ? t.slice(g.length).reduce((e, t) => e + (f.awardCountsById && f.awardCountsById[t.id] || 0), 0) : 0,
						y = s.fbt._("& {hidden award count} More", [s.fbt._param("hidden award count", j.toLocaleString())], {
							hk: "1OnmAi"
						});
					return o.a.createElement("div", {
						className: Object(M.a)(Oe.a.awardBadges, r)
					}, Object(A.a)(f.id) && (f.topAwardedType === F.a.Active || f.topAwardedType === F.a.Inactive) && !a && i && o.a.createElement(ie, {
						post: f
					}), g.map(e => {
						const t = f.awardCountsById ? f.awardCountsById[e.id] : 0,
							r = d.icon32[e.id];
						return o.a.createElement(ve, {
							award: e,
							count: t,
							iconUrl: r,
							key: e.id,
							onHideAward: l,
							onOpenReportFlow: u,
							onHideTooltip: p,
							onShowTooltip: h,
							postOrComment: f,
							tooltipId: `${v}-${e.id}`,
							tooltipLocation: "icon"
						})
					}), j > 0 && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
						"data-click-id": "awards",
						id: x,
						className: Oe.a.showAllButton,
						onClick: m,
						onMouseEnter: () => h(x),
						onMouseLeave: p
					}, y), o.a.createElement(xe.c, {
						tooltipId: x,
						text: s.fbt._("View all Awards", null, {
							hk: "3JL2sD"
						})
					})), O && o.a.createElement(je, {
						onClick: c
					}))
				},
				Ce = r("./src/reddit/actions/gold/reportAward.ts"),
				Ee = r("./src/reddit/controls/Button/index.tsx"),
				Te = r("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				Ne = r.n(Te);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(ye || (ye = {}));
			var Ie = e => {
				const t = Object(re.a)(),
					[r, d] = Object(n.useState)(e.award.awardType === _.f.Global ? ye.FLAG_USAGE : ye.BEGIN),
					i = Object(a.d)(),
					c = () => {
						r === ye.BEGIN ? t(Object(O.clickCancelAwardReportFlow)(e.award, e.thing.id)) : r === ye.REPORT_COMMUNITY_AWARD ? t(Object(O.clickCancelReportAward)(e.award, e.thing.id)) : r === ye.FLAG_USAGE && t(Object(O.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(O.clickConfirmReportAward)(e.award, e.thing.id)), i(Object(Ce.a)(e.award)), e.onClose()
					},
					u = () => {
						t(Object(O.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), i(Object(m.f)(Object(m.e)(s.fbt._("{award name} Award successfully flagged for review.", [s.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), h.b.SuccessAward))), e.onClose()
					},
					p = o.a.createElement(o.a.Fragment, null, o.a.createElement(Ee.o, {
						onClick: () => {
							t(Object(O.clickReportAward)(e.award, e.thing.id)), d(ye.REPORT_COMMUNITY_AWARD)
						},
						className: Ne.a.reportStepButton
					}, s.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), o.a.createElement(Ee.o, {
						onClick: () => {
							t(Object(O.clickFlagAwardUsage)(e.award, e.thing.id)), d(ye.FLAG_USAGE)
						},
						className: Ne.a.reportStepButton
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
							modalText: p
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
			const ke = [32, 128],
				Re = Object(d.c)({
					allAwards: e => e.awards.models,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(C.a)(e),
					isInEconLeaderboardsExperiment: E.b
				}),
				Me = e => Object(A.a)(e.id) ? e.postId : e.id,
				Se = Object(a.b)(Re, (e, {
					thing: t
				}) => ({
					hideAward: r => e(w({
						awardId: r,
						thingId: Me(t)
					})),
					onAddAward: (r, s) => {
						const n = Me(t);
						return e(Object(f.d)({
							awardId: s,
							correlationId: r,
							thingId: n
						}))
					},
					onHideTooltip: () => e(Object(x.i)()),
					onShowTooltip: t => e(Object(x.f)({
						tooltipId: t
					})),
					onToggleHideAwardModal: () => e(Object(v.i)("AwardBadges--Modal--HideAwardConfirmation")),
					triggerOverlayAnimation: () => e(Object(i.b)(Me(t)))
				}));
			class Fe extends o.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(g.e)(g.a.GildingFlow, !0),
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
						currentUser: a,
						hideCta: d,
						hideTopAwardedBadge: i,
						isConfirmModalOpen: c,
						isInEconLeaderboardsExperiment: l,
						isLoggedIn: u,
						isPostDetail: p,
						onHideTooltip: m,
						onShowTooltip: h,
						onToggleHideAwardModal: b,
						prefs: w,
						thing: f,
						triggerOverlayAnimation: v,
						tooltipType: x
					} = this.props, {
						showAllAwards: g
					} = this.state, O = w.reduceAnimationsFromAwards || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, y = Object.keys(f.awardCountsById || {}), C = Object(_.r)(y.map(t => e[t]).filter(Boolean)), E = {};
					for (const s of ke) {
						const e = {};
						E[`icon${s}`] = e;
						for (const t of C) e[t.id] = Object(T.c)({
							award: t,
							postOrComment: f,
							size: s,
							prefersReducedMotion: O
						})
					}
					const N = !!a && a.id === f.authorId;
					return o.a.createElement(o.a.Fragment, null, r ? o.a.createElement(he, {
						awards: C,
						awardsCountInView: t,
						className: n,
						hideAddAwardButton: d || !f.isGildable || N,
						hideTopAwardedBadge: i,
						icons: E,
						isInEconLeaderboardsExperiment: l,
						multiline: !!p,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: f,
						prefersReducedMotion: O,
						tooltipType: x,
						triggerOverlayAnimation: v
					}) : o.a.createElement(_e, {
						awards: C,
						className: n,
						hideBadgeButton: d || !u,
						hideTopAwardedBadge: i,
						icons: E,
						isInEconLeaderboardsExperiment: l,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: m,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: h,
						showAllAwards: g || !!p,
						thing: f,
						tooltipType: x
					}), c && a && this.state.selectedAward && o.a.createElement(j.a, {
						actionText: s.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: N ? Object(A.a)(f.id) ? s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : s.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(A.a)(f.id) ? s.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : s.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [s.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "qlfga"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: b,
						withOverlay: !0
					}), this.state.reportingAward && o.a.createElement(Ie, {
						award: this.state.reportingAward,
						thing: f,
						onClose: () => this.setState({
							reportingAward: null
						})
					}))
				}
			}
			t.a = Object(I.c)(Object(N.e)(Se(Object(y.c)(Fe))))
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				o = r("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				a = r.n(o);
			const d = s.a.wrapped(n.c, "RestrictedButton", a.a);
			t.a = d
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, r) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, r) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = r("./src/reddit/controls/TextButton/index.tsx"),
				c = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = r("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = r.n(l);
			const p = e => e.preventDefault();
			t.a = Object(a.a)(e => o.a.createElement(d.e, null, o.a.createElement(d.i, null, o.a.createElement(c.a, null, o.a.createElement(d.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(d.b, null)))), o.a.createElement(d.l, null, o.a.createElement(d.p, {
				className: u.a.ModalText
			}, e.modalText)), o.a.createElement(d.g, null, !e.hideCancelButton && o.a.createElement(d.a, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(d.u, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/ModActionsMenu/index.m.less": function(e, t, r) {
			e.exports = {
				ModActionsMenu: "_28noJDp6DzFWESejYQdpcD",
				modActionsMenu: "_28noJDp6DzFWESejYQdpcD"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/tooltip.ts"),
				i = r("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				c = r("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = r("./src/reddit/selectors/tooltip.ts"),
				u = r("./src/reddit/components/ModActionsMenu/index.m.less"),
				p = r.n(u);
			const m = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(l.b)(t)(e)
				}),
				h = Object(o.b)(m, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(d.h)({
						tooltipId: t
					}))
				})),
				b = () => null;
			t.a = h(e => n.a.createElement("div", {
				className: p.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? b : e.onClick
			}, e.inCommentFlatlist ? n.a.createElement(i.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : n.a.createElement(c.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, r) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return A
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = r("./src/reddit/controls/Dropdown/index.tsx"),
				m = r("./src/reddit/controls/Dropdown/Row.tsx"),
				h = r("./src/reddit/icons/fonts/index.tsx"),
				b = r("./src/reddit/selectors/tooltip.ts"),
				w = r("./src/reddit/components/OverflowMenu/index.m.less"),
				f = r.n(w);
			const v = c.a.wrapped(p.a, "_Dropdown", f.a),
				x = Object(u.a)(v),
				g = c.a.button("MenuButton", f.a),
				A = c.a.wrapped(m.b, "DropdownRow", f.a),
				O = Object(d.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(b.b)(t)(e)
				}),
				j = Object(a.b)(O, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				y = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => o.a.createElement(g, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(i.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: y(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : o.a.createElement(h.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), o.a.createElement(x, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				preventFocusScroll: e.preventFocusScroll,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				o = Object(s.a)({
					resolved: {},
					chunkName: () => "VideoShareModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("VideoShareModal").then(r.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = o
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/reddit/constants/colors.ts");
			const o = {
				backgroundColor: n.a.overlayReportFlow
			};
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), r.e("ReportFlow")]).then(r.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/reddit/constants/colors.ts");
			const o = {
					backgroundColor: n.a.overlayReportFlow
				},
				a = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), r.e("ReportFlow")]).then(r.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				d = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("ReportFlowNew").then(r.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = d
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "a", (function() {
				return p
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				i = r.n(d);
			const c = e => n.a.createElement("button", {
					className: Object(o.a)(i.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && n.a.createElement("span", {
					className: Object(o.a)(i.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = a.a.wrapped(c, "ApproveButton", i.a),
				u = a.a.wrapped(c, "RemoveButton", i.a),
				p = e => n.a.createElement("button", {
					className: Object(o.a)(i.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				chatIcon: "_1PhtucoKocd-ADJ-JDEoiC",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO",
				modalBody: "T4VmKX-IOkP4UG-B4jUR-"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/uuid/v4.js"),
				i = r.n(d),
				c = r("./src/config.ts"),
				l = r("./src/lib/addQueryParams/index.ts"),
				u = r("./src/reddit/actions/chat/toggle.ts"),
				p = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/actions/post.ts"),
				h = r("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				b = r("./src/reddit/actions/tooltip.ts"),
				w = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				f = r("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				v = r("./src/reddit/constants/parameters.ts"),
				x = r("./src/reddit/controls/Dropdown/index.tsx"),
				g = r("./src/reddit/controls/Dropdown/Row.tsx"),
				A = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = r("./src/reddit/helpers/trackers/shareToChat.ts"),
				j = r("./src/reddit/hooks/useTracking.ts"),
				y = r("./src/reddit/icons/fonts/index.tsx"),
				_ = r("./src/reddit/models/Post/index.ts"),
				C = r("./src/reddit/models/Subreddit/index.ts"),
				E = r("./src/reddit/routes/postCreation/constants.ts"),
				T = r("./src/reddit/selectors/activeModalId.ts"),
				N = r("./src/reddit/selectors/experiments/shareToChatButton.ts"),
				I = r("./src/reddit/selectors/tooltip.ts"),
				k = r("./src/reddit/components/ShareMenu/index.m.less"),
				R = r.n(k);
			const M = Object(w.a)(x.a),
				S = i()(),
				F = o.a.memo(e => {
					const t = Object(a.d)(),
						r = Object(j.a)(),
						d = Object(a.e)(N.a),
						i = Object(a.e)(t => Object(I.b)(e.dropdownId)(t)),
						w = Object(a.e)(t => Object(T.b)(Object(f.a)(e.dropdownId))(t)),
						x = Object(n.useCallback)(() => {
							t(Object(b.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						k = e => t(Object(m.D)(e)),
						F = Object(n.useCallback)(() => {
							e.post && (t(Object(h.d)(e.post.id)), t(Object(p.i)(Object(f.a)(e.post.id))))
						}, [t, e.post]),
						B = !e.subredditType || e.subredditType === C.f.Public,
						P = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						L = Object(n.useCallback)(e => {
							t(Object(u.f)(e)), r(Object(O.a)())
						}, [t, r]);
					return o.a.createElement("div", {
						className: e.className,
						onClick: x,
						id: e.dropdownId
					}, e.children, o.a.createElement(M, {
						className: R.a.dropdown,
						isOpen: i,
						tooltipId: e.dropdownId
					}, o.a.createElement(g.b, {
						className: R.a.dropdownRow,
						displayText: s.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: r
							} = e;
							if (r && Object(_.p)(r)) e.sendEventWithName("share_copy", {
								referralId: S
							}), F();
							else {
								const r = Object(l.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), k(r)
							}
						}
					}, o.a.createElement(y.a, {
						name: "link_post",
						className: R.a.linkIcon
					})), P && o.a.createElement(g.b, {
						className: R.a.dropdownRow,
						displayText: s.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${E.b}?source_id=${e.post.id}`, "_blank")
						}
					}, o.a.createElement(y.a, {
						name: "crosspost",
						className: R.a.crosspostIcon
					})), B && o.a.createElement(g.b, {
						className: R.a.dropdownRow,
						displayText: s.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							e.sendEventWithName("share_embed"), window.open(`${c.a.rebedMediaUrl}/embed?url=${e.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, o.a.createElement(y.a, {
						name: "embed",
						className: R.a.embedIcon
					})), d && o.a.createElement(g.b, {
						className: R.a.dropdownRow,
						displayText: s.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const {
								permalink: t
							} = e, r = Object(l.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							L(r)
						}
					}, o.a.createElement(y.a, {
						name: "chat",
						className: R.a.chatIcon
					}))), w && e.post && o.a.createElement(f.b, {
						className: R.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: S
							}), k(t)), F()
						},
						url: Object(l.a)(Object(A.a)(e.post.id), {
							[v.r]: S,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = F
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-ViewReportsDropdown-index").then(r.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return d
			}));
			const s = "comment",
				n = "comment-submission-form-markdown",
				o = "comment-submission-form-richtext",
				a = "comments-page-link-num-comments",
				d = "post-content"
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, r) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				i = r("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				c = r.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => n.a.createElement("div", {
					className: Object(o.a)(c.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, n.a.createElement(d.a, {
					className: c.a.expandRight
				}, n.a.createElement(a.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: c.a.checkboxIcon
				}), e.text)),
				p = ({
					className: e,
					...t
				}) => n.a.createElement(u, l({
					className: Object(o.a)(c.a.postCheckboxMenuItem, e)
				}, t))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "c", (function() {
				return A
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/uniqueId.js"),
				o = r.n(n),
				a = r("./node_modules/raf/index.js"),
				d = r.n(a),
				i = r("./node_modules/react/index.js"),
				c = r.n(i),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/layout/row/Inline/index.tsx"),
				h = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = r.n(h);
			var w = Object(u.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return c.a.createElement("div", {
						className: b.a.wrapper
					}, c.a.createElement(m.a, {
						className: b.a.titleRow
					}, r), c.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), c.a.createElement(m.a, {
						className: b.a.buttonRow
					}, c.a.createElement(p.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = r("./src/reddit/controls/ErrorText/index.m.less"),
				v = r.n(f);
			class x extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
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
					d()(() => {
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
						errorModalBody: r,
						errorModalTitle: n = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: d
					} = this.state;
					return c.a.createElement("div", {
						className: Object(l.a)(v.a.wrapper, t)
					}, c.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), a && c.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, o), d && c.a.createElement(w, {
						onConfirmed: this.toggleModal,
						title: n
					}, r || e))
				}
			}
			const g = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: s,
						fallbackMessage: n,
						messages: o = []
					} = e, a = o.length ? o : n ? [n] : [];
					return a.length ? c.a.createElement("div", {
						className: t
					}, a.map((e, t) => c.a.createElement(x, {
						className: r,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				A = e => c.a.createElement(g, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = x
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return A
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "m", (function() {
				return k
			})), r.d(t, "h", (function() {
				return R
			})), r.d(t, "i", (function() {
				return M
			})), r.d(t, "e", (function() {
				return S
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
				p = r("./src/redditGQL/operations/CreateModAward.json"),
				m = r("./src/redditGQL/operations/DisableAwardInCommunity.json"),
				h = r("./src/redditGQL/operations/EnableAwardInCommunity.json"),
				b = r("./src/redditGQL/operations/GlobalAwards.json"),
				w = r("./src/redditGQL/operations/ManageableAwards.json"),
				f = r("./src/redditGQL/operations/ManageableAwardsForProfile.json"),
				v = r("./src/redditGQL/operations/RemoveCommunityAward.json"),
				x = r("./src/reddit/constants/headers.ts"),
				g = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const A = (e, t, r, o) => {
					const d = {
						subreddit: t,
						filepath: r,
						mimetype: o
					};
					return Object(n.a)(Object(a.a)(e, [x.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: d
					})
				},
				O = async (e, t) => Object(d.a)(t, e), j = (e, t, r, s, n, a, d, i, c) => Object(o.a)(e, {
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
					...p,
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
				}), _ = ({
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
					iconHeight: p,
					iconUrl: m,
					iconWidth: h,
					isNew: b,
					name: w,
					pennyPrice: f,
					pennyDonate: v,
					startsAt: x,
					subredditCoinReward: g
				}) => Object(o.a)(s, {
					...u,
					variables: {
						awardSubType: e,
						iconFormat: l,
						iconHeight: p,
						iconWidth: h,
						iconUrl: m,
						isNew: b,
						daysOfPremium: a,
						daysOfDripExtension: n,
						description: d,
						coinPrice: t,
						coinReward: r,
						name: w,
						pennyPrice: f,
						pennyDonate: v,
						giverCoinReward: c,
						startsAt: x,
						endsAt: i,
						subredditCoinReward: g
					}
				}), C = (e, t) => Object(o.a)(e, {
					...w,
					variables: {
						subredditId: t
					}
				}), E = (e, t) => Object(o.a)(e, {
					...f,
					variables: {
						profileName: t
					}
				}), T = e => Object(o.a)(e, {
					...b
				}), N = (e, t, r) => Object(o.a)(e, {
					...i,
					variables: {
						subredditId: t,
						thingId: r,
						includeGroup: !0
					}
				}), I = (e, t, r) => Object(o.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: r,
						includeGroup: !0
					}
				}), k = (e, t) => Object(o.a)(e, {
					...v,
					variables: {
						awardId: t
					}
				}), R = (e, t, r) => Object(o.a)(e, {
					...m,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), M = (e, t, r) => Object(o.a)(e, {
					...h,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), S = async (e, t, r) => {
					const o = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(n.a)(Object(a.a)(e, [x.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: o
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(g.a)(e)
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
		"./src/reddit/helpers/isRemoved.ts": function(e, t, r) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(n.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = (s.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}), e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(n.a)(e.bannedAtUTC))], {
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
				i = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(n.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : s.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/shareToChat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/tracking.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
				...Object(n.m)(e),
				source: "post",
				action: s.c.CLICK,
				noun: "share_chat",
				subreddit: Object(n.hb)(e)
			})
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
					correlationId: Object(s.e)(s.a.GildingFlow, !1),
					profile: a.P(e),
					subreddit: a.hb(e)
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
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				d = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = r.n(d);
			t.a = e => n.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("approve", e.isFilled), i.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				d = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = r.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => n.a.createElement("i", c({
				className: Object(o.a)(Object(a.b)("comment", t.isFilled), i.a.commentIcon, e)
			}, t))
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(o.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(o.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				d = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = r.n(d);
			t.a = e => n.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("lock", e.isFilled), i.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				d = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = r.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("i", c({}, e, {
				className: Object(o.a)(Object(a.b)("mod", e.isFilled), i.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				d = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = r.n(d);
			t.a = e => n.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("remove", e.isFilled), i.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				d = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = r.n(d);
			t.a = e => n.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("report", e.isFilled), i.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				d = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = r.n(d);
			t.a = e => n.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("spam", e.isFilled), i.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(o.b)("tag",e.isFilled)} ${e.className}`
			})
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
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Chevron/index.m.less"),
				d = r.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(o.a)(d.a.chevron, e.className),
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
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, r) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				i = r.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: r,
					heightLeft: s,
					widthLeft: o,
					gutter: d,
					...l
				} = e;
				return n.a.createElement("div", c({
					className: Object(a.a)(i.a.expandRightContainer, t)
				}, l), n.a.createElement("div", {
					className: i.a.left,
					style: {
						flexBasis: o,
						height: s,
						marginRight: d
					}
				}, Array.isArray(r) && r[0]), n.a.createElement("div", {
					className: i.a.right
				}, Array.isArray(r) && r[1]))
			}, 2)
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const n = e => e.category === s.Supporter,
				o = e => e.category === s.Achievement
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
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/gold/constants.ts"),
				o = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const a = {};
			var d = r("./node_modules/icepick/icepick.js"),
				i = r("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, r;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (r = e[0]) || void 0 === r ? void 0 : r.type)
				},
				u = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: (e = a, t) => {
					switch (t.type) {
						case n.pb:
							const {
								subredditId: r, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const a = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								d = s.filter(o.a).map(e => e.type),
								i = s.filter(o.b).map(e => e.type);
							return {
								...e, [r]: {
									flairsByType: a,
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
								id: r,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let n = e[r] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: a
								} of s) {
								const r = a.filter(o.a),
									s = r.map(({
										type: e
									}) => e),
									d = a.filter(o.b),
									i = d.map(({
										type: e
									}) => e),
									c = l(r),
									u = l(d);
								n = {
									...n,
									[e]: {
										achievementTypes: s,
										supporterTypes: i,
										preferredAchievementType: c,
										preferredSupporterType: u,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[r]: n
							}
						}
						case i.f: {
							const {
								subredditId: r,
								userId: s,
								achievementFlairType: n,
								supporterFlairType: o
							} = t.payload;
							return Object(d.updateIn)(e, [r, s], e => ({
								...e,
								pendingAchievementType: n,
								pendingSupporterType: o
							}))
						}
						case i.g: {
							const {
								subredditId: r,
								userId: s,
								achievementFlairType: n,
								supporterFlairType: o
							} = t.payload;
							return Object(d.updateIn)(e, [r, s], e => ({
								...e,
								preferredAchievementType: n,
								preferredSupporterType: o,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case i.e: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return Object(d.updateIn)(e, [r, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case i.h: {
							const {
								subredditId: r,
								userId: s,
								isHidden: n
							} = t.payload;
							return Object(d.updateIn)(e, [r, s], e => ({
								...e,
								isHidden: n
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = u, t) => {
					switch (t.type) {
						case i.i: {
							let r = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const n = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								r = {
									...r,
									[t]: n.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				}
			})
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
						experimentEligibilitySelector: o.J,
						experimentName: s.xc
					});
					return !(!t || Object(s.mf)(t))
				},
				d = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: o.J,
						experimentName: s.xc
					}) === s.ad.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const d = e => !!Object(o.b)(e) || Object(n.c)(e, {
				experimentEligibilitySelector: a.J,
				experimentName: s.k
			}) === s.f.Enabled
		},
		"./src/reddit/selectors/experiments/shareToChatButton.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(e => Object(o.c)(e, {
				experimentEligibilitySelector: a.J,
				experimentName: n.Nb
			}), e => e === n.Vc)
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return c
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "a", (function() {
				return x
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/commentSelector.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(o.a)({
				features: {
					powerups: a.a
				}
			});
			const d = (e, {
					subredditId: t
				}) => {
					var r;
					return t ? null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[t] : null
				},
				i = (e, {
					subredditId: t
				}) => {
					var r, s;
					return t ? null === (s = null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[t]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				c = (e, {
					subredditId: t,
					userId: r
				}) => {
					var s, n;
					return t && r ? null === (n = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === n ? void 0 : n[r] : null
				},
				l = Object(s.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				u = Object(s.a)([i, l], (e, t) => e && t ? e[t] : null),
				p = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				m = Object(s.a)([i, p], (e, t) => e && t ? e[t] : null),
				h = Object(s.a)([i, c], (e, t) => {
					if (!e) return [];
					const r = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						n = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !r.includes(e.type),
						isPreferred: e.type === s || e.type === n
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				b = Object(s.a)([d, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: r,
						achievementTypes: s,
						flairsByType: n
					} = e, {
						supporterTypes: o,
						achievementTypes: a,
						preferredSupporterType: d,
						preferredAchievementType: i,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: v(r, o, n, c || d),
						achievementFlairs: v(s, a, n, l || i)
					}
				}),
				w = Object(s.a)([c], e => !!e && e.isHidden),
				f = Object(s.a)([d, c, m], (e, t, r) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return r ? [r, ...s] : s
				}),
				v = (e, t, r, s) => e.map(e => ({
					...r[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				x = (e, {
					commentId: t
				}) => {
					const r = Object(n.b)(e, {
							commentId: t
						}),
						s = null == r ? void 0 : r.subredditId,
						o = null == r ? void 0 : r.authorId;
					return !(!s || !o) && !!((e, {
						subredditId: t,
						userId: r
					}) => {
						var s, n, o;
						return t && r ? null === (o = null === (n = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === n ? void 0 : n[r]) || void 0 === o ? void 0 : o[t] : null
					})(e, {
						subredditId: s,
						userId: o
					})
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Comment.26311028fa26195da604.js.map