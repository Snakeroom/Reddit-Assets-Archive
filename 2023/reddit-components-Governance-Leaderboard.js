// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.4900623906867dc1958b.js
// Retrieved at 6/21/2023, 9:00:05 PM by Reddit Dataminer v1.0.0
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
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "j", (function() {
				return v
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/governance/errorToast.ts"),
				i = r("./src/reddit/endpoints/governance/badges.ts");
			const o = "BADGE__BADGE_APPLICATION_SUCCESS",
				d = "BADGE__BADGE_APPLICATION_FAILURE",
				c = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				a = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				l = "BADGE__USER_BADGES_FETCH_SUCCESS",
				m = "BADGE__USER_BADGES_FETCH_FAILURE",
				p = "BADGE__USER_BADGES_FETCH_PENDING",
				b = Object(n.a)(o),
				f = Object(n.a)(d),
				E = (Object(n.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(n.a)(c)),
				_ = Object(n.a)(a),
				h = Object(n.a)(u),
				O = (Object(n.a)(l), Object(n.a)(m), Object(n.a)(p), e => {
					let {
						badgeIds: t,
						subredditId: r
					} = e;
					return async (e, n, o) => {
						let {
							apiContext: d
						} = o;
						const c = n(),
							a = c.user.account;
						if (a) {
							const n = (c.users.appliedBadges[a.id] || {})[r] || [],
								o = t.length ? t[0] : n[0],
								u = !!t.length;
							e(b({
								badgeIds: t,
								subredditId: r,
								userId: a.id
							}));
							const l = await Object(i.a)(d(), r, o, u);
							l.ok || (e(f({
								badgeIds: t,
								subredditId: r,
								error: l.error,
								previousBadgeIds: n,
								userId: a.id
							})), Object(s.a)(e, l.error))
						}
					}
				}),
				v = e => {
					let {
						subredditId: t,
						userIds: r
					} = e;
					return async (e, n, s) => {
						let {
							apiContext: o
						} = s;
						e(h({
							subredditId: t
						}));
						const d = await Object(i.b)(o(), t, r);
						d.ok ? e(E({
							...d.body,
							subredditId: t
						})) : e(_({
							subredditId: t,
							error: d.error
						}))
					}
				}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				i = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				d = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
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
				return E
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const d = Object(n.a)(o.a),
				c = Object(n.a)(o.b),
				a = Object(n.a)(o.c),
				u = Object(n.a)(o.d),
				l = Object(n.a)(o.e),
				m = Object(n.a)(o.f),
				p = Object(n.a)(o.g),
				b = Object(n.a)(o.h),
				f = Object(n.a)(o.i),
				E = e => Object(s.h)(i.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
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
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "k", (function() {
				return p
			})), r.d(t, "l", (function() {
				return b
			})), r.d(t, "m", (function() {
				return f
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "o", (function() {
				return _
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "r", (function() {
				return v
			})), r.d(t, "s", (function() {
				return y
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "u", (function() {
				return C
			})), r.d(t, "v", (function() {
				return I
			})), r.d(t, "w", (function() {
				return S
			})), r.d(t, "x", (function() {
				return N
			}));
			const n = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				i = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				o = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				d = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				a = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				E = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				_ = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				h = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				O = "GOVERNANCE__TRANSFER_FAILURE",
				v = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				y = "GOVERNANCE__TRANSFER_PENDING",
				g = "GOVERNANCE__TRANSFER_SUCCESS",
				C = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				I = "GOVERNANCE__WALLETS_FETCH_PENDING",
				S = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				N = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				i = r("./src/reddit/models/Toast/index.ts");

			function o(e, t) {
				e(Object(n.f)({
					duration: 5e3,
					kind: i.b.Error,
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
				return i
			}));
			const n = "LEADERBOARD__LEADERBOARD_FETCH_FAILURE",
				s = "LEADERBOARD__LEADERBOARD_FETCH_PENDING",
				i = "LEADERBOARD__LEADERBOARD_FETCH_SUCCESS"
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
				return N
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "a", (function() {
				return R
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				u = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([r.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), r.e("SubredditPremiumBadgeHovercardTooltip")]).then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				f = r("./src/reddit/helpers/economics/sortBadges.ts"),
				E = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				_ = r("./src/reddit/models/Badge/index.ts");
			var h = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				O = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				v = r.n(O);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = "add-custom-badge-tooltip",
				C = 100,
				I = 2 * C,
				S = 24;
			class N extends s.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, C)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, I)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return s.a.createElement("img", {
						className: Object(c.a)(v.a.image, this.props.className),
						src: `${d.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${g}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || S;
					return s.a.createElement(n.Fragment, null, this.props.showAddCustom && s.a.createElement("div", {
						className: v.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, s.a.createElement("button", {
						className: v.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, s.a.createElement(E.a, {
						className: v.a.addCustom
					})), s.a.createElement(h, {
						className: v.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(f.a)(e).map(e => {
						const t = Object(_.d)(r, r, e),
							i = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return s.a.createElement(n.Fragment, {
							key: `badges-fragement-${e.id}`
						}, s.a.createElement("div", {
							className: Object(c.a)(v.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, s.a.createElement("img", {
							className: v.a.image,
							id: i,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? s.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: v.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: i,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : s.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: i,
							text: e.title
						})))
					}))
				}
			}
			const A = [],
				T = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: r,
							userId: n
						} = t;
						var s;
						return (null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[r]) || A
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				P = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: r
						} = t;
						var n;
						const s = e.user.account;
						return s && (null === (n = e.users.appliedBadges[s.id]) || void 0 === n ? void 0 : n[r]) || A
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				j = e => ({
					onShowTooltip: t => e(Object(u.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(u.i)()),
					onOpenUploadDialog: () => e(Object(a.j)())
				});

			function D(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...n
				} = e, i = t.map(e => r[e]).filter(Boolean);
				return s.a.createElement(N, y({
					badges: i
				}, n))
			}
			const x = Object(i.b)(T, j)(D),
				R = Object(i.b)(P, j)(D)
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
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/badge.ts"),
				u = r("./src/config.ts"),
				l = r("./src/lib/constants/index.ts");
			! function(e) {
				e[e.Divider = 0] = "Divider", e[e.User = 1] = "User"
			}(n || (n = {}));
			var m = r("./src/reddit/endpoints/governance/requester.ts");
			var p = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/actions/leaderboard/constants.ts");
			const f = Object(p.a)(b.a),
				E = Object(p.a)(b.b),
				_ = Object(p.a)(b.c);

			function h(e) {
				return e.type === n.User
			}
			const O = e => async (t, r, s) => {
				let {
					apiContext: i
				} = s;
				const o = r(),
					d = !!o.leaderboard.models[e],
					c = !!o.leaderboard.api.pending[e];
				if (d || c) return;
				t(E({
					subredditId: e
				}));
				const p = await
				function(e, t) {
					return Object(m.a)(e, {
						endpoint: `${u.a.metaUrl}/ratings/${t.subredditId}/points-monthly`,
						method: l.ob.GET
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
				}(i(), {
					subredditId: e
				});
				if (p.ok) {
					t(_({
						subredditId: e,
						data: p.body.leaderboard
					}));
					const r = p.body.leaderboard.filter(h).map(e => e.userId);
					t(Object(a.j)({
						subredditId: e,
						userIds: r
					}))
				} else t(f({
					subredditId: e,
					data: p.error
				}))
			};
			var v = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = r("./src/reddit/icons/svgs/Info/index.tsx"),
				g = r("./src/reddit/selectors/crypto/points.ts"),
				C = r("./src/reddit/selectors/economics.ts"),
				I = r("./src/lib/classNames/index.ts"),
				S = r("./src/lib/prettyPrintNumber/index.ts"),
				N = r("./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less"),
				A = r.n(N);

			function T(e) {
				const t = Object(S.a)(e.entry.numUsers.toString()),
					r = 1 === e.entry.numUsers ? s.fbt._("User", null, {
						hk: "167Ce9"
					}) : s.fbt._("Users", null, {
						hk: "1pljbY"
					});
				return o.a.createElement("div", {
					className: Object(I.a)(A.a.container, e.className)
				}, o.a.createElement("div", {
					className: A.a.line
				}), o.a.createElement("div", {
					className: A.a.text
				}, `${t} ${r}`), o.a.createElement("div", {
					className: A.a.line
				}))
			}
			var P = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				j = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				D = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				x = r("./src/reddit/components/TrackingHelper/index.tsx"),
				R = r("./src/reddit/featureFlags/index.ts"),
				B = r("./src/reddit/helpers/governance/tokens.ts"),
				L = r("./src/reddit/selectors/telemetry.ts"),
				M = r("./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less"),
				k = r.n(M);
			const w = (e, t, r) => n => {
				const s = L.o(n);
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
					subreddit: L.lb(n)
				}
			};
			const U = Object(c.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badgesEnabled: e => R.d.spBadges(e),
				pointsDetails: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(g.b)(e, r)
				}
			});
			var G = Object(x.c)(Object(d.b)(U)((function(e) {
					var t;
					const r = Object(j.a)();
					return o.a.createElement(P.a, {
						className: Object(I.a)(k.a.container, e.className, {
							[k.a.currentUser]: e.entry.userId === e.accountId
						}),
						to: `/user/${e.entry.userName}/`,
						onClick: () => {
							e.sendEvent(w("click", r, e.entry.userName))
						},
						onMouseEnter: () => {
							e.sendEvent(w("hover", r, e.entry.userName))
						}
					}, o.a.createElement("div", {
						className: k.a.user
					}, e.badgesEnabled && o.a.createElement("div", {
						className: k.a.badgeContainer
					}, o.a.createElement(D.c, {
						className: k.a.badge,
						correlationId: r,
						subredditId: e.subredditId,
						uniqueIdentifier: e.uniqueIdentifier,
						userId: e.entry.userId
					})), o.a.createElement("div", {
						className: k.a.username
					}, e.entry.userName)), o.a.createElement("div", {
						className: k.a.rank
					}, o.a.createElement("div", {
						className: k.a.points
					}, Object(S.a)(Object(B.c)(e.entry.score, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion))), o.a.createElement("div", {
						className: k.a.position
					}, `#${Object(S.a)(e.entry.position.toString())}`)))
				}))),
				F = r("./src/reddit/components/Governance/Leaderboard/index.m.less"),
				H = r.n(F);
			class V extends o.a.Component {
				componentDidMount() {
					this.props.onFetchLeaderboardData()
				}
				render() {
					return this.props.userOptedOut ? null : o.a.createElement(v.a, {
						className: this.props.className,
						title: s.fbt._("Leaderboard (Past Month)", null, {
							hk: "4Bb1G7"
						})
					}, this.props.subreddit && o.a.createElement("div", {
						className: H.a.description
					}, s.fbt._("Scores are updated regularly based on the top contributors who earned the most {community-points-name} each month.", [s.fbt._param("community-points-name", this.props.tokenName)], {
						hk: "25uyZ3"
					})), o.a.createElement("div", {
						className: H.a.header
					}, o.a.createElement("div", {
						className: H.a.topUsers
					}, s.fbt._("top 10 users", null, {
						hk: "pe871"
					})), o.a.createElement("div", {
						className: H.a.tokens
					}, this.props.tokenName)), (() => this.props.leaderboardErrored ? o.a.createElement("div", {
						className: H.a.error
					}, o.a.createElement(y.a, {
						className: H.a.errorIcon
					})) : this.props.leaderboard ? o.a.createElement(i.Fragment, null, this.props.leaderboard.map(e => {
						switch (e.type) {
							case n.User:
								return o.a.createElement(G, {
									className: H.a.entryUser,
									entry: e,
									subredditId: this.props.subredditId,
									uniqueIdentifier: this.props.uniqueId,
									key: e.userId
								});
							case n.Divider:
								return o.a.createElement(T, {
									className: H.a.divider,
									entry: e,
									key: "divider"
								})
						}
					})) : Array.from({
						length: 8
					}).map((e, t) => o.a.createElement("div", {
						className: H.a.loading,
						key: t
					})))())
				}
			}
			const $ = Object(c.c)({
				tokenName: (e, t) => {
					let {
						subredditId: r
					} = t;
					var n;
					return (null === (n = Object(g.b)(e, r)) || void 0 === n ? void 0 : n.name) || ""
				},
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				leaderboard: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.leaderboard.models[r]
				},
				leaderboardErrored: (e, t) => {
					let {
						subredditId: r
					} = t;
					return !!e.leaderboard.api.error[r]
				},
				subreddit: (e, t) => e.subreddits.models[t.subredditId],
				userOptedOut: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(C.z)(e, r)
				}
			});
			t.default = Object(d.b)($, (e, t) => {
				let {
					subredditId: r
				} = t;
				return {
					onFetchLeaderboardData: () => e(O(r))
				}
			})(V)
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				s = r("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, r) {
				const i = Object(s.a)(e, {
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
					o = await i;
				if (o.ok) {
					const e = {},
						t = {},
						r = o.body;
					return Object.keys(r).forEach(n => {
						const s = r[n];
						t[n] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...o,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return o
			}
			async function o(e, t, r) {
				const i = await Object(s.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/badges/${t}?users=${r}`
				});
				if (i.ok) {
					const e = {},
						t = [],
						r = i.body;
					return Object.keys(r).forEach(n => {
						const s = r[n];
						e[n] = s, t.push(s.id)
					}), {
						...i,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return i
			}

			function d(e, t, r) {
				let i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${n.a.metaUrl}/badges/${t}/${r}`,
					data: {
						selected: i
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return o
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "l", (function() {
				return a
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "n", (function() {
				return h
			}));
			var n, s = r("./src/config.ts"),
				i = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
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

			function d(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case n.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184";
					case n.ArbitrumNitroDevnet:
						return "https://meta-api.reddit.com/ethereum/nitroDevnet";
					case n.ArbitrumMainnet:
						return "https://a4ba.arbitrum.io/rpc";
					default:
						return `https://meta-api.reddit.com/ethereum/${e}`
				}
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby";
					case n.ArbitrumRinkeby:
						return 5391184;
					case n.ArbitrumNitroDevnet:
						return 421612;
					case n.ArbitrumMainnet:
						return 42170;
					default: {
						const [, t] = e.split(":");
						return t
					}
				}
			}

			function a(e) {
				return e === n.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, r) {
				return Object(i.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(i.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function m(e, t, r) {
				return await Object(i.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumNova = "ethereum:42170", e.ArbitrumRinkeby = "ethereum:5391184", e.ArbitrumNitroDevnet = "ethereum:421612", e.ArbitrumMainnet = "ethereum:42170", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(n || (n = {}));
			const p = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				f = e => ({
					type: "claim",
					subredditId: e
				}),
				E = e => ({
					type: "subscribe",
					subredditId: e
				}),
				_ = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function h(e, t) {
				return await Object(i.a)(e, {
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
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function i(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(i(e, t), 10))
			}

			function d(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return r.multipliedBy(s).toFixed(0)
			}

			function c(e) {
				const t = new n.BigNumber(e),
					r = new n.BigNumber("1e18");
				return t.dividedBy(r).toString()
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function i(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function o(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i(e) {
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
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			var n, s, i = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const o = {
					[n.Loyalty]: i.a.First,
					[n.Achievement]: i.a.Second,
					[n.Cosmetic]: void 0
				},
				d = e => e === i.a.First ? n.Loyalty : e === i.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, s, i, o;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
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
			const i = {
				status: n.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
				i = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				o = r("./src/reddit/helpers/economics/sortBadges.ts"),
				d = r("./src/reddit/models/Badge/index.ts"),
				c = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const a = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, r, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let i;
						(i = e.placement ? e.placement === d.a.First ? n[c.a.Loyalty][s] : n[c.a.Achievement][s] : u(e) ? n[c.a.Cosmetic][c.c.MyBadges][s] : n[c.a.Cosmetic][c.c.Gallery][s]) && (u(e) ? r.has(e.id) && i.unlocked.push(e) : t.has(e.id) || i.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return r === n ? Object(o.b)(e, t) : r - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, r) => {
					const n = t[e.id],
						s = t[r.id];
					return Object(o.b)(n, s)
				})
			}

			function b(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
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
					t[c.a.Loyalty][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][r] = {
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
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
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
					case i.h: {
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
					case i.i: {
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
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				i = r("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.a: {
							const r = t.payload.claimPoints || {},
								n = Object.keys(r).reduce((t, n) => (t[n] = {
									...e[n],
									availableClaims: r[n]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (n[t] = n[t] || {
									availableClaims: []
								}, n[t].isClaiming = !0)
							}), n
						}
						case s.b:
						case s.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				c = r("./src/reddit/actions/governance/constants.ts");
			const a = 15e4,
				u = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, r, n, s, i;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					d = null == o ? void 0 : o.contracts,
					c = null == d ? void 0 : d.unlocked,
					u = null !== (n = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== n ? n : e.provider,
					m = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					p = null == o ? void 0 : o.metaTransactions,
					b = (null == p ? void 0 : p.allowedContractMethods) || {},
					f = (null == p ? void 0 : p.gasLimit) || a,
					E = (null == c ? void 0 : c.decimals) || 0,
					_ = "1" + "0".repeat(E);
				return {
					allowedContractMethods: b,
					blockchainProvider: u,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: d,
					decimals: E,
					displayConversion: _,
					gasLimit: f,
					images: e.images || l,
					inTransition: m,
					name: e.name,
					nomenclature: null === (i = e.extra) || void 0 === i ? void 0 : i.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.a: {
						const {
							subredditId: r,
							meta: n
						} = t.payload;
						return {
							...e,
							[r]: m(n)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.n: {
						const {
							subredditId: r,
							wallets: n
						} = t.payload, s = Object.keys(n).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[r]: n[s]
								}
							}
						}, {});
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				claims: d,
				points: p,
				publicWallets: f
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				i = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: d.a
				}
			});
			const c = (e, t) => {
				var r, n, s;
				return t ? null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === s ? void 0 : s[t] : void 0
			};

			function a() {
				const e = Object(s.ib)(),
					t = Object(n.e)(t => Object(s.s)(t, {
						pageLayer: e
					})),
					r = Object(n.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const u = (e, t) => {
				var r;
				const n = null === (r = c(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return n === i.a.Ethereum || n === i.a.Rinkeby || n === i.a.EthTraderEthereum || n === i.a.EthTraderRinkeby || n === i.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "x", (function() {
				return y
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "q", (function() {
				return I
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "z", (function() {
				return N
			})), r.d(t, "l", (function() {
				return A
			})), r.d(t, "n", (function() {
				return T
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "j", (function() {
				return D
			})), r.d(t, "p", (function() {
				return x
			})), r.d(t, "k", (function() {
				return L
			})), r.d(t, "r", (function() {
				return k
			})), r.d(t, "y", (function() {
				return w
			})), r.d(t, "u", (function() {
				return U
			})), r.d(t, "v", (function() {
				return G
			})), r.d(t, "b", (function() {
				return F
			})), r.d(t, "w", (function() {
				return H
			})), r.d(t, "s", (function() {
				return V
			})), r.d(t, "t", (function() {
				return $
			})), r.d(t, "g", (function() {
				return q
			})), r.d(t, "m", (function() {
				return z
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/helpers/economics/sortBadges.ts"),
				i = r("./src/reddit/helpers/richTextJson/index.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				d = r("./src/reddit/models/Badge/managementPage.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				a = r("./src/reddit/models/Product/index.ts"),
				u = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/comments.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				f = r("./src/reddit/selectors/gold/powerups/index.ts"),
				E = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const _ = [],
				h = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				O = (e, t) => {
					const r = h(e, t);
					return r && r.endsAt || null
				};
			var v;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(v || (v = {}));
			const y = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const r = O(e, t),
							n = Date.now();
						return r && n < r ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				g = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === l.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || _).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[d.a.Loyalty]: n.find(e => e.placement === o.a.First),
							[d.a.Achievement]: n.find(e => e.placement === o.a.Second),
							[d.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[d.a.Loyalty]: void 0,
						[d.a.Achievement]: void 0,
						[d.a.Cosmetic]: void 0
					}
				};

			function C(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : _
			}
			const I = (e, t, r) => {
					var s;
					if (!n.d.spBadges(e)) return _;
					return C(null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				S = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === l.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function N(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function A(e, t) {
				const {
					badge: r,
					subredditId: n
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(r) && r.userId === s) return r;
				const i = e.badges.models,
					d = e.user.ownedBadges[n] || {},
					c = Object(o.e)(r) ? r.type : r.id;
				return Object.keys(d).map(e => i[e]).find(e => e && e.type === c)
			}

			function T(e, t, r, n) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === l.a.Fetched) {
					if (r === d.a.Loyalty || r === d.a.Achievement) return s.data.collections[r];
					if (r === d.a.Cosmetic && n) return s.data.collections[r][n]
				}
				return _
			}

			function P(e, t) {
				const r = T(e, t, d.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : _
			}

			function j(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === l.a.Fetched) {
					const e = r.data.collections[d.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return _
			}

			function D(e, t) {
				return T(e, t, d.a.Cosmetic, d.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const x = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === u.a.Fetched && r.data.stripe && r.data.stripe.sources) {
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
				if (r.status === u.a.Fetched && r.data.braintree && r.data.braintree.sources) {
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
			var R;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(R || (R = {}));
			const B = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				L = (e, t) => Object.values(e.products.models).filter(e => e.type === a.a.Membership && t && e.subredditId === t),
				M = (e, t) => {
					if (!t) return {};
					const r = B.prices;
					L(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = h(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				k = (e, t) => {
					var r, n, s, i;
					const o = (null === (i = null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === i ? void 0 : i.nomenclature) || B;
					return {
						prices: M(e, t),
						member: o.member || B.member,
						memberPlural: o.memberPlural || B.memberPlural,
						memberAlt: o.memberAlt || B.memberAlt,
						memberAltPlural: o.memberAltPlural || B.memberAltPlural,
						membership: o.membership || B.membership,
						membershipAlt: o.membershipAlt || B.membershipAlt
					}
				},
				w = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				U = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				G = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				F = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return;
					return e.economics.emotes[r]
				},
				H = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				V = (e, t) => !!t && !!Object(f.a)(e, {
					subredditId: t
				}),
				$ = (e, t, r) => {
					if (Object(b.b)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!Y(e, t) || !(!n.d.spGiphy(e) || !W(e, r)));
					if (!Object(E.a)(e, {
							subredditId: t
						})) return !1;
					if (Object(f.f)(e, {
							subredditId: t
						})) return !0;
					if (W(e, r)) return !0;
					const s = n.d.spGiphy(e),
						i = H(e, t);
					return !!Y(e, t) || s && i
				},
				W = (e, t) => {
					const r = "replyToPost" !== t && Object(p.c)(e, {
						commentId: t
					});
					if (r && Object(i.a)(r)) return !0
				},
				Y = (e, t) => {
					const r = n.d.spGiphy(e),
						s = H(e, t);
					return r && s
				},
				q = (e, t, r) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[r]
					}
				},
				z = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./src/reddit/models/Gold/Powerups/index.ts"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/actions/gold/constants.ts");
			const o = {};
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var r, n;
					switch (t.type) {
						case i.mb:
						case i.nb: {
							const {
								benefitStatuses: n,
								subredditId: s
							} = t.payload;
							if (!n) return e;
							const i = null !== (r = e[s]) && void 0 !== r ? r : {},
								o = {};
							return n.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								o[t] = r
							}), {
								...e,
								[s]: {
									...i,
									...o
								}
							}
						}
						case i.L: {
							const {
								benefitStatuses: r,
								subredditId: s
							} = t.payload, i = null !== (n = e[s]) && void 0 !== n ? n : {}, o = {};
							return r.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								o[t] = r
							}), {
								...e,
								[s]: {
									...i,
									...o
								}
							}
						}
						default:
							return e
					}
				},
				c = r("./node_modules/reselect/es/index.js");
			Object(s.a)({
				features: {
					powerupsBenefitSettings: d
				}
			});
			const a = (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? e.features.powerupsBenefitSettings[r] : null
				},
				u = (e => Object(c.a)(a, t => !!(null == t ? void 0 : t[e])))(n.a.CommentsWithGifs)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.4900623906867dc1958b.js.map