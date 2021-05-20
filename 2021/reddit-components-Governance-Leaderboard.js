// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.df06aba4a21707554ab3.js
// Retrieved at 5/20/2021, 1:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-Leaderboard"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/reddit/actions/badge.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "i", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "m", (function() {
				return x
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/governance/errorToast.ts"),
				o = r("./src/reddit/endpoints/governance/badges.ts");
			const d = "BADGE__BADGE_MODAL_OPENED",
				i = "BADGE__BADGE_APPLICATION_SUCCESS",
				a = "BADGE__BADGE_APPLICATION_FAILURE",
				c = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				l = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				m = "BADGE__USER_BADGES_FETCH_SUCCESS",
				p = "BADGE__USER_BADGES_FETCH_FAILURE",
				b = "BADGE__USER_BADGES_FETCH_PENDING",
				f = Object(n.a)(d),
				h = Object(n.a)(i),
				E = Object(n.a)(a),
				g = (Object(n.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(n.a)(c)),
				y = Object(n.a)(u),
				_ = Object(n.a)(l),
				I = Object(n.a)(m),
				v = Object(n.a)(p),
				O = Object(n.a)(b),
				C = ({
					badgeIds: e,
					subredditId: t
				}) => async (r, n, {
					apiContext: d
				}) => {
					const i = n(),
						a = i.user.account;
					if (a) {
						const n = (i.users.appliedBadges[a.id] || {})[t] || [],
							c = e.length ? e[0] : n[0],
							u = !!e.length;
						r(h({
							badgeIds: e,
							subredditId: t,
							userId: a.id
						}));
						const l = await Object(o.a)(d(), t, c, u);
						l.ok || (r(E({
							badgeIds: e,
							subredditId: t,
							error: l.error,
							previousBadgeIds: n,
							userId: a.id
						})), Object(s.a)(r, l.error))
					}
				}, S = ({
					subredditId: e,
					userIds: t
				}) => async (r, n, {
					apiContext: s
				}) => {
					r(_({
						subredditId: e
					}));
					const d = await Object(o.b)(s(), e, t);
					d.ok ? r(g({
						...d.body,
						subredditId: e
					})) : r(y({
						subredditId: e,
						error: d.error
					}))
				}, x = ({
					subredditId: e
				}) => async (t, r, {
					apiContext: n
				}) => {
					const s = r().user.account;
					if (s) {
						t(O({
							subredditId: e
						}));
						const r = await Object(o.c)(n(), e, s.id);
						r.ok ? t(I({
							...r.body,
							subredditId: e
						})) : t(v({
							subredditId: e,
							error: r.error
						}))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				d = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "j", (function() {
				return h
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(n.a)(d.a),
				a = Object(n.a)(d.b),
				c = Object(n.a)(d.c),
				u = Object(n.a)(d.d),
				l = Object(n.a)(d.e),
				m = Object(n.a)(d.f),
				p = Object(n.a)(d.g),
				b = Object(n.a)(d.h),
				f = Object(n.a)(d.i),
				h = e => Object(s.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = r("./src/reddit/models/Toast/index.ts");

			function d(e, t) {
				e(Object(n.f)({
					duration: 5e3,
					kind: o.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/leaderboard/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			const n = "LEADERBOARD__LEADERBOARD_FETCH_FAILURE",
				s = "LEADERBOARD__LEADERBOARD_FETCH_PENDING",
				o = "LEADERBOARD__LEADERBOARD_FETCH_SUCCESS"
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
				return x
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "a", (function() {
				return B
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				i = r("./src/config.ts"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				u = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				f = r("./src/reddit/helpers/economics/sortBadges.ts"),
				h = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				E = r("./src/reddit/models/Badge/index.ts");
			var g = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				y = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				_ = r.n(y);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = "add-custom-badge-tooltip",
				O = 100,
				C = 2 * O,
				S = 24;
			class x extends s.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, O)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, C)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return s.a.createElement("img", {
						className: Object(a.a)(_.a.image, this.props.className),
						src: `${i.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${v}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || S;
					return s.a.createElement(n.Fragment, null, this.props.showAddCustom && s.a.createElement("div", {
						className: _.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, s.a.createElement("button", {
						className: _.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, s.a.createElement(h.a, {
						className: _.a.addCustom
					})), s.a.createElement(g, {
						className: _.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(f.a)(e).map(e => {
						const t = Object(E.d)(r, r, e),
							o = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return s.a.createElement(n.Fragment, {
							key: `badges-fragement-${e.id}`
						}, s.a.createElement("div", {
							className: Object(a.a)(_.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(o),
							onMouseLeave: () => this.handleMouseLeave()
						}, s.a.createElement("img", {
							className: _.a.image,
							id: o,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? s.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: _.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: o,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : s.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: o,
							text: e.title
						})))
					}))
				}
			}
			const N = [],
				A = Object(d.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var n;
						return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t]) || N
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				j = Object(d.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const n = e.user.account;
						return n && (null === (r = e.users.appliedBadges[n.id]) || void 0 === r ? void 0 : r[t]) || N
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				D = e => ({
					onShowTooltip: t => e(Object(u.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(u.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function P(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...n
				} = e, o = t.map(e => r[e]).filter(Boolean);
				return s.a.createElement(x, I({
					badges: o
				}, n))
			}
			const T = Object(o.b)(A, D)(P),
				B = Object(o.b)(j, D)(P)
		},
		"./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3U3eyY-903VKXVQvAX6Oci",
				line: "_2rsENdHzxqXJ3jqSdUylB9",
				text: "R99kMDIZ0Rs3Ftsu750Im"
			}
		},
		"./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2nlSSvS0u4wdSdhODO2_LD",
				flexRow: "_27XFXY0Nde6JEGFwKDLXpX",
				points: "_3dubtJAHgSz_JV7AiRzk12",
				position: "AzD_FyWlGp7oFW4xH0-MO",
				badge: "_2i9Lr8K4mvo7KpJoZHGbz0",
				badgeContainer: "_3tJG1HTVRm3dk-oHnTSl5h",
				currentUser: "_1M58uBin1CihyNgByc5_pr",
				user: "_3W7d8zooppcYXYlpjKZZRj",
				username: "_1vyJFDQjwC9W6mhvljSan",
				rank: "_3vpolg8V6jVUdNQB8lNsBS"
			}
		},
		"./src/reddit/components/Governance/Leaderboard/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1l8stWgw-zYCekbwl-n3c_",
				description: "_1BJNCz_yTuWAIlOv_rYvk_",
				divider: "_1zf-p8IC8IigBUFPt-H_45",
				entryUser: "-h3bdtmpLuhCRS6K-O5el",
				error: "XeA-6vh3Ag_VPJZW95yd_",
				errorIcon: "_3WI9lKaqHMMq_zIu6QXRY-",
				header: "_286cfq1tt7CbwNBqdqxRi0",
				loading: "pyciUPy6JIviG5S3kASOu"
			}
		},
		"./src/reddit/components/Governance/Leaderboard/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n, s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				d = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/badge.ts"),
				u = r("./src/config.ts"),
				l = r("./src/lib/constants/index.ts");
			! function(e) {
				e[e.Divider = 0] = "Divider", e[e.User = 1] = "User"
			}(n || (n = {}));
			var m = r("./src/reddit/endpoints/governance/requester.ts");
			var p = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/actions/leaderboard/constants.ts");
			const f = Object(p.a)(b.a),
				h = Object(p.a)(b.b),
				E = Object(p.a)(b.c);

			function g(e) {
				return e.type === n.User
			}
			const y = e => async (t, r, {
				apiContext: s
			}) => {
				const o = r(),
					d = !!o.leaderboard.models[e],
					i = !!o.leaderboard.api.pending[e];
				if (d || i) return;
				t(h({
					subredditId: e
				}));
				const a = await
				function(e, t) {
					return Object(m.a)(e, {
						endpoint: `${u.a.metaUrl}/ratings/${t.subredditId}/points-monthly`,
						method: l.eb.GET
					}).then(e => {
						if (e.ok) {
							let t = 0;
							const r = [];
							return e.body.forEach(e => {
								const s = e.position - t;
								s > 1 && r.push({
									numUsers: s,
									type: n.Divider
								}), r.push({
									...e,
									type: n.User
								}), t = e.position
							}), {
								...e,
								body: {
									leaderboard: r
								}
							}
						}
						return e
					})
				}(s(), {
					subredditId: e
				});
				if (a.ok) {
					t(E({
						subredditId: e,
						data: a.body.leaderboard
					}));
					const r = a.body.leaderboard.filter(g).map(e => e.userId);
					t(Object(c.l)({
						subredditId: e,
						userIds: r
					}))
				} else t(f({
					subredditId: e,
					data: a.error
				}))
			};
			var _ = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				I = r("./src/reddit/icons/svgs/Info/index.tsx"),
				v = r("./src/reddit/selectors/economics.ts"),
				O = r("./src/reddit/selectors/gov.ts"),
				C = r("./src/lib/classNames/index.ts"),
				S = r("./src/lib/prettyPrintNumber/index.ts"),
				x = r("./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less"),
				N = r.n(x);

			function A(e) {
				const t = Object(S.a)(e.entry.numUsers.toString()),
					r = 1 === e.entry.numUsers ? s.fbt._("User", null, {
						hk: "167Ce9"
					}) : s.fbt._("Users", null, {
						hk: "1pljbY"
					});
				return d.a.createElement("div", {
					className: Object(C.a)(N.a.container, e.className)
				}, d.a.createElement("div", {
					className: N.a.line
				}), d.a.createElement("div", {
					className: N.a.text
				}, `${t} ${r}`), d.a.createElement("div", {
					className: N.a.line
				}))
			}
			var j = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				D = r("./node_modules/uuid/v4.js"),
				P = r.n(D),
				T = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				B = r("./src/reddit/components/TrackingHelper/index.tsx"),
				k = r("./src/reddit/featureFlags/index.ts"),
				w = r("./src/reddit/helpers/governance/tokens.ts"),
				M = r("./src/reddit/selectors/telemetry.ts"),
				U = r("./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less"),
				F = r.n(U);
			const R = (e, t, r) => n => {
				const s = M.defaults(n);
				return {
					action: e,
					correlationId: t,
					source: "meta",
					noun: "leaderboard_user_name",
					...s,
					actionInfo: {
						...s.actionInfo,
						reason: r
					},
					subreddit: M.subreddit(n)
				}
			};
			const L = Object(a.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badgesEnabled: e => k.d.spBadges(e),
				tokenDisplayConversion: O.m
			});
			var G = Object(B.c)(Object(i.b)(L)((function(e) {
					const t = P()();
					return d.a.createElement(j.a, {
						className: Object(C.a)(F.a.container, e.className, {
							[F.a.currentUser]: e.entry.userId === e.accountId
						}),
						to: `/user/${e.entry.userName}/`,
						onClick: () => {
							e.sendEvent(R("click", t, e.entry.userName))
						},
						onMouseEnter: () => {
							e.sendEvent(R("hover", t, e.entry.userName))
						}
					}, d.a.createElement("div", {
						className: F.a.user
					}, e.badgesEnabled && d.a.createElement("div", {
						className: F.a.badgeContainer
					}, d.a.createElement(T.c, {
						className: F.a.badge,
						correlationId: t,
						subredditId: e.subredditId,
						uniqueIdentifier: e.uniqueIdentifier,
						userId: e.entry.userId
					})), d.a.createElement("div", {
						className: F.a.username
					}, e.entry.userName)), d.a.createElement("div", {
						className: F.a.rank
					}, d.a.createElement("div", {
						className: F.a.points
					}, Object(S.a)(Object(w.b)(e.entry.score, e.tokenDisplayConversion))), d.a.createElement("div", {
						className: F.a.position
					}, `#${Object(S.a)(e.entry.position.toString())}`)))
				}))),
				H = r("./src/reddit/components/Governance/Leaderboard/index.m.less"),
				$ = r.n(H);
			class q extends d.a.Component {
				componentDidMount() {
					this.props.onFetchLeaderboardData()
				}
				render() {
					return this.props.userOptedOut ? null : d.a.createElement(_.a, {
						className: this.props.className,
						title: s.fbt._("Leaderboard (Past Month)", null, {
							hk: "4Bb1G7"
						})
					}, this.props.subreddit && d.a.createElement("div", {
						className: $.a.description
					}, s.fbt._("Scores are updated regularly based on the top contributors who earned the most {community-points-name} each month.", [s.fbt._param("community-points-name", this.props.tokenName)], {
						hk: "25uyZ3"
					})), d.a.createElement("div", {
						className: $.a.header
					}, d.a.createElement("div", {
						className: $.a.topUsers
					}, s.fbt._("top 10 users", null, {
						hk: "pe871"
					})), d.a.createElement("div", {
						className: $.a.tokens
					}, this.props.tokenName)), (() => this.props.leaderboardErrored ? d.a.createElement("div", {
						className: $.a.error
					}, d.a.createElement(I.a, {
						className: $.a.errorIcon
					})) : this.props.leaderboard ? d.a.createElement(o.Fragment, null, this.props.leaderboard.map(e => {
						switch (e.type) {
							case n.User:
								return d.a.createElement(G, {
									className: $.a.entryUser,
									entry: e,
									subredditId: this.props.subredditId,
									uniqueIdentifier: this.props.uniqueId,
									key: e.userId
								});
							case n.Divider:
								return d.a.createElement(A, {
									className: $.a.divider,
									entry: e,
									key: "divider"
								})
						}
					})) : Array.from({
						length: 8
					}).map((e, t) => d.a.createElement("div", {
						className: $.a.loading,
						key: t
					})))())
				}
			}
			const Y = Object(a.c)({
				tokenName: O.n,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				leaderboard: (e, {
					subredditId: t
				}) => e.leaderboard.models[t],
				leaderboardErrored: (e, {
					subredditId: t
				}) => !!e.leaderboard.api.error[t],
				subreddit: (e, t) => e.subreddits.models[t.subredditId],
				userOptedOut: (e, {
					subredditId: t
				}) => Object(v.y)(e, t)
			});
			t.default = Object(i.b)(Y, (e, {
				subredditId: t
			}) => ({
				onFetchLeaderboardData: () => e(y(t))
			}))(q)
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				s = r("./src/reddit/endpoints/governance/requester.ts");
			async function o(e, t, r) {
				const o = Object(s.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${n.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: r
						}
					}),
					d = await o;
				if (d.ok) {
					const e = {},
						t = {},
						r = d.body;
					return Object.keys(r).forEach(n => {
						const s = r[n];
						t[n] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...d,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return d
			}
			async function d(e, t, r) {
				const o = await Object(s.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/badges/${t}?users=${r}`
				});
				if (o.ok) {
					const e = {},
						t = [],
						r = o.body;
					return Object.keys(r).forEach(n => {
						const s = r[n];
						e[n] = s, t.push(s.id)
					}), {
						...o,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return o
			}

			function i(e, t, r, o = !0) {
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${n.a.metaUrl}/badges/${t}/${r}`,
					data: {
						selected: o
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "k", (function() {
				return c
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "m", (function() {
				return E
			}));
			var n, s = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function a(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function c(e, t, r) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function l(e, t, r) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				h = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function E(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let r = 0;
				return e.placement && t.placement && (r = e.placement.localeCompare(t.placement)), 0 === r && e.position && t.position && (r = e.position - t.position), 0 === r && (r = e.title.localeCompare(t.title)), r
			}

			function s(e) {
				return [...e].sort(n)
			}
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.dividedToIntegerBy(s).toString()
			}

			function d(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function o(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function d(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function o(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), s.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			}));
			var n, s, o = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const d = {
					[n.Loyalty]: o.a.First,
					[n.Achievement]: o.a.Second,
					[n.Cosmetic]: void 0
				},
				i = e => e === o.a.First ? n.Loyalty : e === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, s, o, d;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(d || (d = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const o = {
				status: n.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case s.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: n,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: n,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case s.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case s.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s = r("./src/lib/constants/specialMembership.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				d = r("./src/reddit/helpers/economics/sortBadges.ts"),
				i = r("./src/reddit/models/Badge/index.ts"),
				a = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const c = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, r, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === i.a.First ? n[a.a.Loyalty][s] : n[a.a.Achievement][s] : u(e) ? n[a.a.Cosmetic][a.c.MyBadges][s] : n[a.a.Cosmetic][a.c.Gallery][s]) && (u(e) ? r.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return r === n ? Object(d.b)(e, t) : r - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, r) => {
					const n = t[e.id],
						s = t[r.id];
					return Object(d.b)(n, s)
				})
			}

			function b(e) {
				const t = {
					[a.a.Loyalty]: {},
					[a.a.Achievement]: {},
					[a.a.Cosmetic]: {
						[a.c.Gallery]: {},
						[a.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(r => {
					const n = e.collections[r],
						s = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[a.a.Loyalty][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[a.a.Achievement][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.Gallery][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.MyBadges][r] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const r = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && r.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), r, n, t), l(Object.keys(e.products).map(t => e.products[t]), r, n, t), {
					collections: {
						[a.a.Loyalty]: p(t[a.a.Loyalty], e.collections),
						[a.a.Achievement]: p(t[a.a.Achievement], e.collections),
						[a.a.Cosmetic]: {
							[a.c.Gallery]: p(t[a.a.Cosmetic][a.c.Gallery], e.collections),
							[a.c.MyBadges]: p(t[a.a.Cosmetic][a.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = c, t) => {
				switch (t.type) {
					case o.a: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: b(r),
								status: n.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "w", (function() {
				return y
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "q", (function() {
				return v
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "y", (function() {
				return C
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "n", (function() {
				return x
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "p", (function() {
				return D
			})), r.d(t, "k", (function() {
				return B
			})), r.d(t, "r", (function() {
				return w
			})), r.d(t, "x", (function() {
				return M
			})), r.d(t, "t", (function() {
				return U
			})), r.d(t, "u", (function() {
				return F
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "v", (function() {
				return L
			})), r.d(t, "s", (function() {
				return G
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "m", (function() {
				return $
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/helpers/economics/sortBadges.ts"),
				o = r("./src/reddit/helpers/richTextJson/index.ts"),
				d = r("./src/reddit/models/Badge/index.ts"),
				i = r("./src/reddit/models/Badge/managementPage.ts"),
				a = r("./src/reddit/models/Gold/Powerups/index.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				u = r("./src/reddit/models/Product/index.ts"),
				l = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts");
			const f = [],
				h = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === m.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				E = (e, t) => {
					const r = h(e, t);
					return r && r.endsAt || null
				};
			var g;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(g || (g = {}));
			const y = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === m.a.Fetched) {
						const r = E(e, t),
							n = Date.now();
						return r && n < r ? g.Subscribed : g.NotSubscribed
					}
					return g.DontKnow
				},
				_ = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === m.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[i.a.Loyalty]: n.find(e => e.placement === d.a.First),
							[i.a.Achievement]: n.find(e => e.placement === d.a.Second),
							[i.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function I(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const v = (e, t, r) => {
					var s;
					if (!n.d.spBadges(e)) return f;
					return I(null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				O = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === m.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function C(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function S(e, t) {
				const {
					badge: r,
					subredditId: n
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(d.e)(r) && r.userId === s) return r;
				const o = e.badges.models,
					i = e.user.ownedBadges[n] || {},
					a = Object(d.e)(r) ? r.type : r.id;
				return Object.keys(i).map(e => o[e]).find(e => e && e.type === a)
			}

			function x(e, t, r, n) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					if (r === i.a.Loyalty || r === i.a.Achievement) return s.data.collections[r];
					if (r === i.a.Cosmetic && n) return s.data.collections[r][n]
				}
				return f
			}

			function N(e, t) {
				const r = x(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function A(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					const e = r.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(d.f)
				}
				return f
			}

			function j(e, t) {
				return x(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(d.f)(e) || !!e.price))
			}
			const D = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === l.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const n = e[r];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: r,
							type: c.a.SavedStripe
						})
					}
				}
				if (r.status === l.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const n = e[r];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var P;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(P || (P = {}));
			const T = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				B = (e, t) => Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t),
				k = (e, t) => {
					if (!t) return {};
					const r = T.prices;
					B(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = h(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				w = (e, t) => {
					const r = e.subreddits.gov.meta[t || ""],
						n = r && r.extra && r.extra.nomenclature || T;
					return {
						prices: k(e, t),
						member: n.member || T.member,
						memberPlural: n.memberPlural || T.memberPlural,
						memberAlt: n.memberAlt || T.memberAlt,
						memberAltPlural: n.memberAltPlural || T.memberAltPlural,
						membership: n.membership || T.membership,
						membershipAlt: n.membershipAlt || T.membershipAlt
					}
				},
				M = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				U = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				F = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				R = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				L = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				G = (e, t, r) => {
					const s = "replyToPost" !== r && Object(p.a)(e, {
						commentId: r
					});
					if (!!s && Object(o.a)(s)) return !0;
					if (t && Object(b.o)(e, {
							subredditId: t,
							benefit: a.a.CommentsWithGifs
						})) return !0;
					const d = n.d.spGiphy(e),
						i = L(e, t);
					return d && i
				},
				H = (e, t, r) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[r]
					}
				},
				$ = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "r", (function() {
				return I
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "p", (function() {
				return C
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "j", (function() {
				return x
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts");
			const o = [],
				d = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				a = (e, {
					subredditId: t
				}) => {
					const r = I(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				c = (e, t) => {
					const r = y(e, t);
					if (r) return r.mainHeader
				},
				u = (e, t) => {
					const r = y(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				l = (e, t) => {
					const r = y(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : d
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				p = (e, t) => {
					const r = m(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				b = (e, t) => {
					const r = m(e, t);
					return r && r.amount || "0"
				},
				f = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || o
				},
				h = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				g = (e, t) => {
					const r = C(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				_ = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				I = (e, t) => {
					const r = _(e, t);
					return r && r.walletProvider
				},
				v = (e, t) => {
					const r = I(e, t),
						n = _(e, t);
					return r && r.provider || n && n.provider
				},
				O = (e, t) => {
					const r = v(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				C = (e, t) => {
					const r = I(e, t),
						n = v(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const o = r && r.extra && r.extra.contracts,
						d = o && o.unlocked;
					return d && {
						address: d.address,
						symbol: d.token || "",
						decimals: d.decimals || 18,
						image: d.image
					}
				},
				S = (e, {
					subredditId: t
				}) => {
					const r = I(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				x = (e, t) => {
					const r = _(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.df06aba4a21707554ab3.js.map