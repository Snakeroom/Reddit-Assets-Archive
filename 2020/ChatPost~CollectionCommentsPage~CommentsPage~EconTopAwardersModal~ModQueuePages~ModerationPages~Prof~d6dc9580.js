// https://www.redditstatic.com/desktop2x/ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580.223f429ff9b395a2d431.js
// Retrieved at 7/28/2020, 10:42:45 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"], {
		"./src/graphql/operations/HideAwardOnTarget.json": function(e) {
			e.exports = JSON.parse('{"id":"4e43964bff6f"}')
		},
		"./src/graphql/operations/TopAwardedPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"51af644ab3dd"}')
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
				return d
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/constants/modals.ts"),
				n = s("./src/reddit/actions/gold/constants.ts");
			const d = Object(r.a)(n.ab),
				i = () => async e => {
					e(Object(a.h)(o.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/gold/topAwarded.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return f
			}));
			var r = s("./src/lib/env/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				n = s("./src/reddit/constants/modals.ts"),
				d = (s("./src/graphql/operations/TopAwardedPosts.json"), s("./src/graphql/operations/TopAwardersLeaderboard.json")),
				i = s("./src/lib/makeGqlRequest/index.ts");
			const c = (e, t) => Object(i.a)(e, Object.assign(Object.assign({}, d), {
				variables: t
			}));
			var l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/gold/constants.ts");
			Object(a.a)(m.kb), Object(a.a)(m.jb), Object(a.a)(m.ib);
			const u = Object(a.a)(m.nb),
				p = Object(a.a)(m.mb),
				h = Object(a.a)(m.lb),
				b = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
					return async (s, a, n) => {
						let {
							gqlContext: d
						} = n;
						if (!a().users.topAwarders.list.length) {
							s(u());
							try {
								const r = await c(d(), {
										top: t,
										postId: e
									}),
									a = r.body;
								if (r.ok) await s(p(Object.assign({
									postId: e
								}, a.data.postInfoById.topAwarders)));
								else if (a.errors && a.errors.length) throw new Error(a.errors.map(e => e.message).join("; "))
							} catch (i) {
								Object(r.b)() || console.error(i), o.c.captureMessage(i), s(h(i.message))
							}
						}
					}
				},
				g = Object(a.a)(m.ob),
				f = e => async (t, s) => {
					t(g({
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
				d = s("./src/reddit/controls/InternalLink/index.tsx"),
				i = s("./src/reddit/components/AuthorLink/index.m.less"),
				c = s.n(i);
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
				}, e.children) : a.a.createElement(d.a, {
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
				d = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/gold/giveAward.ts"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/graphql/operations/HideAwardOnTarget.json"),
				m = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/lib/makeGqlRequest/index.ts"),
				h = s("./src/reddit/actions/gold/constants.ts");
			const b = Object(c.a)(h.C),
				g = e => {
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
						const d = r.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
							hk: "10OvOz"
						});
						try {
							(await ((e, t, s) => Object(p.a)(e, Object.assign(Object.assign({}, l), {
								variables: {
									awardId: t,
									targetId: s
								}
							})))(n(), t, s)).error && e(Object(m.e)({
								kind: u.b.Error,
								duration: m.a,
								text: d
							}))
						} catch (i) {
							e(Object(m.e)({
								kind: u.b.Error,
								duration: m.a,
								text: d
							}))
						}
					}
				};
			var f = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/modal.ts"),
				x = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/helpers/correlationIdTracker.ts"),
				A = s("./src/reddit/helpers/isPost.ts"),
				O = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				j = s("./src/reddit/models/Gold/Award.ts"),
				T = s("./src/reddit/selectors/activeModalId.ts"),
				y = s("./src/reddit/constants/experiments.ts"),
				C = s("./src/reddit/helpers/chooseVariant/index.ts"),
				I = s("./src/reddit/selectors/user.ts");
			var P = s("./src/reddit/selectors/userPrefs.ts"),
				S = s("./node_modules/lodash/debounce.js"),
				_ = s.n(S),
				N = s("./src/lib/classNames/index.ts"),
				M = s("./src/lib/fastdom/index.ts"),
				k = s("./src/reddit/models/Gold/TopAwarded/index.ts"),
				B = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				L = s("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				H = s.n(L);
			var R = o.a.memo(e => o.a.createElement("button", {
					className: Object(N.a)(e.className, H.a.addAwardPill),
					name: r.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, o.a.createElement(B.a, {
					className: H.a.giftIcon
				}))),
				D = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				F = s("./src/reddit/helpers/awards/getIconForSize.ts"),
				U = s("./src/higherOrderComponents/makeAsync.tsx"),
				q = s("./src/lib/loadWithRetries/index.ts");
			var z = Object(U.a)({
					getComponent: () => Object(q.a)(() => s.e("AwardTooltip").then(s.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				V = s("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				W = s.n(V);
			const G = 3500,
				Q = 500;
			class J extends o.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = o.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: s,
							triggerOverlayAnimation: r
						} = this.props;
						e.id !== j.g && (this.setState({
							userGiven: !0,
							shouldAnimate: !t
						}), t || (r(s), setTimeout(() => {
							this.setState({
								shouldAnimate: !1
							})
						}, G)))
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
						post: r,
						prefersReducedMotion: a,
						tooltipId: n
					} = this.props, {
						userGiven: d,
						shouldAnimate: i
					} = this.state, c = Object(F.a)(e, 32, a), l = Object(F.a)(e, 128, a), m = Object(D.a)(e.id, r.id);
					return o.a.createElement("span", {
						className: W.a.awardPillContainer,
						id: n,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, o.a.createElement("button", {
						className: Object(N.a)(t, W.a.awardPill, {
							[W.a.userGiven]: d
						}),
						onClick: this.handleOnClick
					}, o.a.createElement("span", {
						className: W.a.imageContainer
					}, o.a.createElement("img", {
						alt: e.name,
						className: Object(N.a)(W.a.awardIcon, {
							[W.a.hidden]: i
						}),
						id: m,
						ref: this.imageRef,
						src: c
					}), i && o.a.createElement("img", {
						alt: e.name,
						className: W.a.animationIcon,
						src: l
					})), o.a.createElement("span", {
						className: W.a.count
					}, s.toLocaleString())), o.a.createElement(z, {
						award: e,
						onHideAward: this.handleHideAward,
						postOrComment: r,
						tooltipId: n
					}))
				}
			}
			var K = J,
				Y = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				X = s("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				Z = s.n(X);
			var $ = o.a.memo(e => {
				const {
					className: t,
					direction: s,
					onClick: a
				} = e, n = "right" === s, d = r.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), i = r.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return o.a.createElement("div", {
					className: Object(N.a)(Z.a.buttonContainer, {
						[Z.a.right]: n
					}, t)
				}, o.a.createElement("button", {
					className: Z.a.scrollButton,
					name: n ? i : d,
					onClick: a
				}, o.a.createElement(Y.a, {
					className: Z.a.chevronIcon
				})))
			});
			const ee = (e, t) => {
				const s = Object(A.a)(e) ? "Post" : "Comment";
				let r = "".concat(s, "AwardBadges--").concat(e);
				return t && (r = "".concat(r, "--").concat(t)), r
			};
			var te = s("./src/reddit/helpers/trackers/topAwarded.ts"),
				se = s("./src/reddit/hooks/useTracking.ts"),
				re = s("./src/reddit/actions/gold/topAwarded.ts"),
				ae = s("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				oe = s("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				ne = s.n(oe);
			const {
				fbt: de
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ie = e => {
					const t = Object(n.c)(),
						s = Object(se.a)();
					return o.a.createElement("button", {
						className: Object(N.a)(ne.a.pill, e.className, {
							[ne.a.awardsPlaqueStyle]: !!e.awardsPlaqueStyle
						}),
						onClick: () => {
							const {
								postId: r
							} = e.post;
							s(Object(te.a)(r)), t(Object(re.b)(r))
						}
					}, o.a.createElement("span", {
						className: ne.a.iconContainer
					}, o.a.createElement(ae.a, {
						className: ne.a.awardIcon
					})), o.a.createElement("span", null, de._("Top Awarded", null, {
						hk: "49Ol5i"
					})))
				},
				ce = s("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				le = s.n(ce);
			const me = 11,
				ue = 100;
			class pe extends o.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = o.a.createRef(), this.handleResize = _()(() => {
						this.handlePlaquePositionChange()
					}, 300), this.handlePlaquePositionChange = () => {
						const {
							awards: e,
							awardsCountInView: t,
							multiline: s
						} = this.props, r = t || me;
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
							s = e.scrollLeft - (t - ue);
						this.scrollPlaqueTo(s)
					}, this.handleScrollRight = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							s = e.scrollLeft + (t - ue);
						this.scrollPlaqueTo(s)
					}, this.handleTriggerAnimation = e => {
						this.props.triggerOverlayAnimation(), M.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const s = document.getElementById(e);
							if (!s) return;
							const r = t.getBoundingClientRect(),
								a = s.getBoundingClientRect();
							if (a.left < r.left || a.right > r.right) {
								const e = a.left + (t.scrollLeft - r.left) - ue;
								this.scrollPlaqueTo(e)
							}
						})
					};
					const t = e.awardsCountInView || me,
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
						isInEconLeaderboardsExperiment: a,
						multiline: n,
						post: d,
						prefersReducedMotion: i,
						onAddAward: c,
						onHideAward: l,
						onHideTooltip: m,
						onShowTooltip: u,
						tooltipType: p
					} = this.props, {
						canScrollLeft: h,
						canScrollRight: b
					} = this.state, g = e.length > 0, f = ee(d.id, p);
					return o.a.createElement("div", {
						className: Object(N.a)(le.a.awardBadges, t, {
							[le.a.noAwards]: !g,
							[le.a.multiline]: n
						}),
						ref: this.plaqueRef
					}, h && o.a.createElement($, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (d.topAwardedType === k.a.Active || d.topAwardedType === k.a.Inactive) && !r && a && o.a.createElement(ie, {
						awardsPlaqueStyle: !0,
						post: d
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = d, s = t[e.id];
						return o.a.createElement(K, {
							award: e,
							className: le.a.clickablePlaqueItem,
							count: s,
							key: e.id,
							onAddAward: c,
							onHideAward: l,
							onHideTooltip: m,
							onShowTooltip: u,
							post: d,
							prefersReducedMotion: i,
							tooltipId: "".concat(f, "-").concat(e.id),
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !s && o.a.createElement(R, {
						className: le.a.clickablePlaqueItem,
						onAddAward: c
					}), !n && o.a.createElement("div", {
						className: le.a.spacer
					}), b && o.a.createElement($, {
						direction: "right",
						onClick: this.handleScrollRight
					}))
				}
			}
			var he = pe,
				be = s("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				ge = s.n(be);
			const {
				fbt: fe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class we extends o.a.PureComponent {
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
						onHideAward: a,
						onHideTooltip: n,
						postOrComment: d,
						prefersReducedMotion: i,
						tooltipId: c,
						tooltipLocation: l
					} = this.props;
					if (s <= 0) return null;
					const m = Object(F.a)(e, 32, i),
						u = e.awardType === j.f.Moderator,
						p = Object(D.a)(e.id, d.id),
						h = "container" === l;
					return o.a.createElement("span", {
						className: Object(N.a)(ge.a.awardItem, t),
						id: h ? c : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: n
					}, o.a.createElement("span", {
						id: h ? "" : c
					}, o.a.createElement("img", {
						alt: e.name,
						className: Object(N.a)(ge.a.awardIcon, {
							[ge.a.animate]: this.state.animate
						}, r),
						id: p,
						ref: this.imageRef,
						src: m
					})), o.a.createElement("span", null, s > 1 && s, u && this.renderModAwardName()), o.a.createElement(z, {
						award: e,
						onHideAward: () => a(e),
						postOrComment: d,
						tooltipId: c
					}))
				}
			}
			var xe = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ve = s("./src/reddit/icons/fonts/helpers.tsx");
			var Ae = e => o.a.createElement("i", {
				className: Object(N.a)(Object(ve.b)("addGild"), e.className)
			});
			var Oe = e => o.a.createElement("i", {
					className: Object(N.a)(Object(ve.b)("addGildDashed"), e.className)
				}),
				Ee = s("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				je = s.n(Ee);
			class Te extends o.a.PureComponent {
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
					} = this.props, s = this.state.isHovered ? Ae : Oe;
					return o.a.createElement("button", {
						className: Object(N.a)(e, je.a.badgeButton, je.a.visibilityEffect),
						onClick: t,
						onBlur: this.handleMouseLeave,
						onFocus: this.handleMouseEnter,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, o.a.createElement(s, {
						className: je.a.icon
					}))
				}
			}
			var ye = Te;
			var Ce = e => {
				const {
					awards: t,
					className: s,
					hideBadgeButton: a,
					hideTopAwardedBadge: n,
					isInEconLeaderboardsExperiment: d,
					onAddAward: i,
					onHideAward: c,
					onHideTooltip: l,
					onShowAllAwards: m,
					onShowTooltip: u,
					prefersReducedMotion: p,
					showAllAwards: h,
					tooltipType: b,
					thing: g
				} = e, f = ee(g.id, b), w = "".concat(f, "-view-all");
				let x = [];
				x = h ? t : t.length > 5 ? t.slice(0, 4) : t;
				const v = !a && g.isGildable && t.length > 0,
					O = t.length > x.length ? t.slice(x.length).reduce((e, t) => e + (g.awardCountsById && g.awardCountsById[t.id] || 0), 0) : 0,
					E = r.fbt._("& {hidden award count} More", [r.fbt._param("hidden award count", O.toLocaleString())], {
						hk: "1OnmAi"
					});
				return o.a.createElement("div", {
					className: Object(N.a)(je.a.awardBadges, s)
				}, Object(A.a)(g.id) && (g.topAwardedType === k.a.Active || g.topAwardedType === k.a.Inactive) && !n && d && o.a.createElement(ie, {
					post: g
				}), x.map(e => {
					const t = g.awardCountsById ? g.awardCountsById[e.id] : 0;
					return o.a.createElement(we, {
						award: e,
						count: t,
						key: e.id,
						onHideAward: c,
						onHideTooltip: l,
						onShowTooltip: u,
						postOrComment: g,
						prefersReducedMotion: p,
						tooltipId: "".concat(f, "-").concat(e.id),
						tooltipLocation: "icon"
					})
				}), O > 0 && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					"data-click-id": "awards",
					id: w,
					className: je.a.showAllButton,
					onClick: m,
					onMouseEnter: () => u(w),
					onMouseLeave: l
				}, E), o.a.createElement(xe.c, {
					tooltipId: w,
					text: "View all Awards"
				})), v && o.a.createElement(ye, {
					onClick: i
				}))
			};
			const Ie = Object(d.c)({
					allAwards: e => e.awards.models,
					currentUser: I.i,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(T.a)(e),
					isInEconLeaderboardsExperiment: e => {
						const t = Object(C.c)(e, {
							experimentEligibilitySelector: I.H,
							experimentName: y.cb
						});
						return !(!t || Object(y.zc)(t))
					},
					isLoggedIn: I.H,
					prefersReducedAnimations: P.c
				}),
				Pe = Object(n.b)(Ie, (e, t) => {
					let {
						thing: s
					} = t;
					return {
						hideAward: t => e(g({
							awardId: t,
							thingId: Object(A.a)(s.id) ? s.postId : s.id
						})),
						onAddAward: (t, r) => {
							const a = Object(A.a)(s.id) ? s.postId : s.id;
							return e(Object(f.d)({
								awardId: r,
								correlationId: t,
								thingId: a
							}))
						},
						onHideTooltip: () => e(Object(x.i)()),
						onShowTooltip: t => e(Object(x.f)({
							tooltipId: t
						})),
						onToggleHideAwardModal: () => e(Object(w.i)("AwardBadges--Modal--HideAwardConfirmation")),
						triggerOverlayAnimation: () => e(Object(i.b)())
					}
				});
			class Se extends o.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(v.d)(v.a.GildingFlow, !0),
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
					}, this.state = {
						selectedAward: null,
						showAllAwards: !1
					}
				}
				render() {
					const {
						allAwards: e,
						awardsCountInView: t,
						awardsPlaqueStyle: s,
						className: a,
						currentUser: n,
						hideCta: d,
						hideTopAwardedBadge: i,
						isConfirmModalOpen: c,
						isInEconLeaderboardsExperiment: l,
						isLoggedIn: m,
						isPostDetail: u,
						onHideTooltip: p,
						onShowTooltip: h,
						onToggleHideAwardModal: b,
						prefersReducedAnimations: g,
						thing: f,
						triggerOverlayAnimation: w,
						tooltipType: x
					} = this.props, {
						showAllAwards: v
					} = this.state, E = g || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, T = Object(j.p)(Object.keys(f.awardCountsById || {}).map(t => e[t]).filter(Boolean)), y = !!n && n.id === f.authorId;
					return o.a.createElement(o.a.Fragment, null, s ? o.a.createElement(he, {
						awards: T,
						awardsCountInView: t,
						className: a,
						hideAddAwardButton: d || !f.isGildable || y,
						hideTopAwardedBadge: i,
						isInEconLeaderboardsExperiment: l,
						multiline: !!u,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: f,
						prefersReducedMotion: E,
						tooltipType: x,
						triggerOverlayAnimation: w
					}) : o.a.createElement(Ce, {
						awards: T,
						className: a,
						hideBadgeButton: d || !m,
						hideTopAwardedBadge: i,
						isInEconLeaderboardsExperiment: l,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onHideTooltip: p,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: h,
						prefersReducedMotion: E,
						showAllAwards: v || !!u,
						thing: f,
						tooltipType: x
					}), c && n && this.state.selectedAward && o.a.createElement(O.a, {
						actionText: r.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: y ? Object(A.a)(f.id) ? r.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : r.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(A.a)(f.id) ? r.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : r.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "qlfga"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: b,
						withOverlay: !0
					}))
				}
			}
			t.a = Pe(Object(E.c)(Se))
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
				return j
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "a", (function() {
				return P
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
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
				g = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = s("./src/reddit/models/Badge/index.ts");
			var w = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				x = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				v = s.n(x);
			const A = "add-custom-badge-tooltip",
				O = 100,
				E = 2 * O;
			class j extends a.a.Component {
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
					if (this.props.usePlaceholder && !this.props.badges.length) return a.a.createElement("img", {
						className: Object(i.a)(v.a.image, this.props.className),
						src: "".concat(d.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(A, "-").concat(this.props.uniqueIdentifier);
					return a.a.createElement(r.Fragment, null, this.props.showAddCustom && a.a.createElement("div", {
						className: v.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, a.a.createElement("button", {
						className: v.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, a.a.createElement(g.a, {
						className: v.a.addCustom
					})), a.a.createElement(w, {
						className: v.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(this.props.badges).map(e => {
						const t = Object(f.b)(24, 24, e),
							s = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return a.a.createElement(r.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, a.a.createElement("div", {
							className: Object(i.a)(v.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, a.a.createElement("img", {
							className: v.a.image,
							id: s,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? a.a.createElement(u, {
							badge: e,
							correlationId: this.props.correlationId,
							className: v.a.badgeHovercard,
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
					useHovercard: h.d.spPremium
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
					useHovercard: h.d.spPremium
				}),
				C = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.i)())
				}),
				I = Object(o.b)(T, C)(j),
				P = Object(o.b)(y, C)(j)
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				n = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(n.a)(e => o.a.createElement(d.d, null, o.a.createElement(d.h, null, o.a.createElement(c.a, null, o.a.createElement(d.p, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(d.b, null)))), o.a.createElement(d.k, null, o.a.createElement(d.o, {
				className: m.a.ModalText
			}, e.modalText)), o.a.createElement(d.f, null, o.a.createElement(d.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(d.t, {
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
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
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
					className: Object(d.a)(e.className, h.a.badge),
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
				customBadgesEnabled: m.d.spCustomBadges,
				premiumEnabled: e => m.d.spPremium(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(i.i)())
			}))(b)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/selectors/economics.ts");

			function i(e) {
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
					return Object(d.r)(e, s, r)
				}
			}))(i)
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
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const d = "UserInfoTooltip",
				i = e => e.alwaysShowChildren ? a.a.createElement(a.a.Fragment, null, e.children) : null;
			t.b = Object(o.a)({
				ErrorComponent: i,
				getComponent: () => Object(n.a)(() => Promise.all([s.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"), s.e("AuthorHovercard")]).then(s.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return A
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return j
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
				d = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				i = s.n(d),
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
					i()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					i()(this.el) || this.fireEvent(this.el)
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
				g = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(b.n)(e, t),
					r = Object(g.I)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var w = Object(o.b)(() => Object(n.a)(f, b.j, (e, t) => Object.assign(Object.assign({}, e), {
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
			const x = (e, t) => {
				const s = Object(b.n)(e, t),
					r = Object(g.I)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var v = Object(o.b)(() => Object(n.a)(x, e => e))(e => a.a.createElement(h, {
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
			var A = Object(o.b)(() => Object(n.c)({
					subreddit: g.R
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
				O = s("./src/reddit/selectors/posts.ts");
			var E = Object(o.b)(() => Object(n.c)({
				post: O.O,
				subredditOrProfile: O.bb,
				isModerator: (e, t) => {
					const s = Object(O.bb)(e, t);
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
			var j = Object(o.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(O.bb)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(O.bb)(e, {
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
				post: O.O,
				subredditOrProfile: O.bb,
				isModerator: (e, t) => {
					const s = Object(O.bb)(e, t);
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
				subreddit: g.R
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
				subredditOrProfile: (e, t) => Object(g.L)(e, {
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
					return s ? Object(g.R)(e, {
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
				metaSeparator: "_3V4xlrklKBP2Hg51ejjjvz"
			}
		},
		"./src/reddit/components/PostTopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return Q
			})), s.d(t, "a", (function() {
				return K
			})), s.d(t, "b", (function() {
				return Z
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/humanizeDateTime/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/timeAgo/index.ts"),
				u = s("./src/reddit/helpers/isCrosspost.ts"),
				p = s("./src/reddit/hooks/useInfoTextTooltip.ts");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var b = e => a.a.createElement("svg", h({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), a.a.createElement("path", {
					d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
				}), a.a.createElement("path", {
					d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
				})),
				g = s("./src/reddit/components/AuthorLink/index.tsx"),
				f = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				w = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				x = s("./src/reddit/components/Flair/index.tsx"),
				v = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				A = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				O = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				E = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				y = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				C = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				I = s("./src/reddit/constants/posts.ts"),
				P = s("./src/reddit/contexts/InsideOverlay.tsx"),
				S = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/components/Portal/index.tsx"),
				N = s("./src/reddit/constants/elementIds.ts"),
				M = a.a.memo((function(e) {
					let {
						children: t
					} = e;
					const [s, o] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => (o(!0), () => o(!1)), []), s ? a.a.createElement(_.a, {
						container: document.getElementById(N.d)
					}, a.a.Children.only(t)) : null
				})),
				k = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				B = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				L = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				H = (s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/models/Flair/index.ts")),
				R = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				D = s("./src/reddit/models/Post/index.ts"),
				F = s("./src/reddit/models/Subreddit/index.ts"),
				U = s("./src/reddit/selectors/authorFlair.ts"),
				q = s("./src/reddit/selectors/userFlair.ts"),
				z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				V = s("./src/reddit/components/PostTopMeta/index.m.less"),
				W = s.n(V);
			const G = {
				placement: "top"
			};
			var Q;
			! function(e) {
				e.StickyPost = "sticky", e.Lightbox = "lightbox", e.TopAwardedModal = "topAwarded"
			}(Q || (Q = {}));
			const J = e => Object(B.a)(Object(k.a)(e), R.a.metaText, R.b.metaText),
				K = l.a.wrapped(S.b, "MetaSeparator", W.a),
				Y = l.a.span("text", W.a),
				X = Object(z.t)(),
				Z = e => {
					const t = !e.isDeleted && e.post.distinguishType === d.C.ADMIN;
					return a.a.createElement(g.a, {
						className: W.a.authorLink,
						"data-click-id": "user",
						author: e.post.author,
						isAdmin: t,
						isAdminEmeritus: t,
						isAuthorDeleted: e.isDeleted,
						isUnstyled: !0,
						style: e.style
					}, "u/".concat(e.post.author), t && a.a.createElement(L.a, {
						className: W.a.adminIcon
					}), e.renderContractorBadge && a.a.createElement(L.a, {
						className: W.a.contractorIcon
					}), !1)
				},
				$ = a.a.memo((function(e) {
					const {
						className: t,
						isOverlay: s,
						pageLayer: i,
						post: l,
						showSub: h = !1,
						showTimestamp: g = !0,
						subredditOrProfile: P,
						tooltipType: S
					} = e, _ = l.belongsTo.id, N = Object(r.useCallback)(e => Object(U.a)(e, {
						post: l
					}), [l]), k = Object(o.d)(N), B = Object(r.useCallback)(e => Object(q.a)(e, {
						subredditId: _
					}), [_]), L = Object(o.d)(B), R = Object(r.useCallback)(e => Object(q.d)(e, {
						subredditId: _
					}), [_]), z = Object(o.d)(R), V = Object(p.a)(G), Q = i && i.meta && i.meta.name === d.Bb.COMMENTS, X = Object(u.a)(l), $ = z === H.b.Left, ee = l.authorIsContractor && !!P && P.type === F.d.EmployeesOnly, te = !s && !Q, se = () => a.a.createElement(K, {
						className: e.metaSeparatorClassName
					}, "•"), re = a.a.createElement(a.a.Fragment, null, !X && a.a.createElement(Y, {
						style: {
							color: J(e)
						}
					}, "Posted by"), X && a.a.createElement(r.Fragment, null, a.a.createElement(b, {
						className: W.a.crosspostIcon
					}), a.a.createElement(Y, {
						style: {
							color: J(e)
						}
					}, "Crossposted by")), k && $ && a.a.createElement("div", {
						className: W.a.flairContainer
					}, a.a.createElement(x.b, {
						disabled: !L,
						flair: k,
						forceSmallEmojis: !0,
						usesCommunityStyles: te
					})), Object(D.h)(l.author) ? a.a.createElement(Z, {
						post: l,
						isDeleted: !0,
						renderContractorBadge: ee,
						style: {
							color: J(e)
						}
					}) : a.a.createElement(r.Fragment, null, !Object(D.h)(l.author) && a.a.createElement(f.b, {
						className: W.a.badge,
						subredditId: _,
						uniqueIdentifier: "".concat(l.id, "-").concat(s),
						userId: l.authorId
					}), a.a.createElement(A.b, {
						postOrComment: l,
						tooltipType: S
					}, a.a.createElement(w.b, {
						ignore: Object(D.h)(l.author) || !!l.distinguishType && l.distinguishType !== d.C.NONE,
						subredditId: _,
						userId: l.authorId
					}, a.a.createElement(Z, {
						post: l,
						renderContractorBadge: ee,
						style: {
							color: J(e)
						}
					})))), k && !$ && a.a.createElement("div", {
						className: W.a.flairContainer
					}, a.a.createElement(x.b, {
						disabled: !L,
						flair: k,
						forceSmallEmojis: !0,
						usesCommunityStyles: te
					})), l.belongsTo.type === I.a.SUBREDDIT && !Object(D.h)(l.author) && a.a.createElement(v.a, {
						className: W.a.publicWallet,
						contentId: l.id,
						metaSeparator: a.a.createElement(se, null),
						subredditId: _,
						userId: l.authorId,
						username: l.author
					}));
					return a.a.createElement("div", {
						className: Object(n.a)(W.a.container, t)
					}, h && P && a.a.createElement(O.a, {
						postId: l.id,
						subredditName: P.name,
						tooltipType: S
					}, a.a.createElement(C.a, {
						"data-click-id": "subreddit",
						to: P.url
					}, P.displayText)), P && P.isQuarantined && a.a.createElement(T.a, null), h && !X && a.a.createElement(se, null), l.isSponsored && a.a.createElement(r.Fragment, null, a.a.createElement(y.a, null), a.a.createElement(se, null)), re, a.a.createElement(j.e, {
						post: l
					}), g && a.a.createElement(a.a.Fragment, null, a.a.createElement("a", {
						className: W.a.externalLink,
						"data-click-id": "timestamp",
						href: l.permalink,
						onMouseEnter: V.show,
						onMouseLeave: V.hide,
						ref: V.target.ref,
						style: {
							color: J(e)
						},
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, Object(m.d)(l.created / 1e3)), a.a.createElement(M, null, a.a.createElement(E.a, {
						arrowProps: V.arrowProps,
						popperProps: V.popperProps,
						visible: V.visible
					}, Object(c.a)(l.created)))))
				}));
			t.d = X(Object(P.b)(Object(i.a)($)))
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
				d = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				u = s.n(m);
			const p = ["center", "top"],
				h = ["center", "bottom"],
				b = d.a.div("Container", u.a),
				g = Object(n.a)(i.b),
				f = Object(c.t)({
					isProfileListingPage: c.F
				});
			class w extends o.a.Component {
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
					}), o.a.createElement(g, {
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
			t.a = f(w)
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
				d = s.n(n);
			const i = s("./src/lib/lessComponent.tsx").a.span("Wrapper", d.a);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement(i, {
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
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				d = s.n(n);
			const i = e => a.a.createElement("span", {
				className: Object(o.a)(d.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: s
				} = e;
				return a.a.createElement(i, {
					className: Object(o.a)(d.a.metaSeparator, t),
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
		"./src/reddit/helpers/trackers/topAwarded.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			}));
			var r = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/helpers/trackers/goldPayment.ts"),
				o = s("./src/reddit/selectors/gold/topAwarded.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const d = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return Object.assign(Object.assign({}, Object(a.h)(e, t)), {
						correlationId: Object(r.d)(r.a.GildingFlow, !1),
						profile: n.profile(e),
						subreddit: n.subreddit(e)
					})
				},
				i = e => t => Object.assign({
					source: "post",
					action: "click",
					noun: "award_spotlight_banner"
				}, d(t, {
					thingId: e
				})),
				c = e => t => Object.assign({
					source: "post_awards_leaderboard",
					action: "view",
					noun: "page"
				}, d(t, {
					thingId: e
				})),
				l = () => e => Object.assign({
					source: "post_awards_leaderboard",
					action: "click",
					noun: "give_gold"
				}, d(e, {
					thingId: Object(o.a)(e) || void 0
				}))
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(d);
			t.a = e => a.a.createElement("i", {
				className: Object(o.a)(Object(n.b)("admin"), i.a.adminIcon, e.className),
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
				d = s.n(n);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(o.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(o.a, null, e.desc)), "GiftIcon", d.a);
			t.a = i
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
				d = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(d.a.chevron, e.className),
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
				return d
			}));
			const r = e => e.users.topAwarders.currentPostId,
				a = e => e.users.topAwarders.api.pending,
				o = e => e.users.topAwarders.api.error,
				n = (e, t) => e.users.topAwarders.list[t],
				d = (e, t) => e.users.topAwarders.currentRank[t]
		}
	}
]);
//# sourceMappingURL=ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580.223f429ff9b395a2d431.js.map