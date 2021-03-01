// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.5f8051cd071e24f9ff3e.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-Leaderboard"], {
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
				d = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(n.a)(o.a),
				a = Object(n.a)(o.b),
				c = Object(n.a)(o.c),
				u = Object(n.a)(o.d),
				l = Object(n.a)(o.e),
				m = Object(n.a)(o.f),
				p = Object(n.a)(o.g),
				b = Object(n.a)(o.h),
				f = Object(n.a)(o.i),
				h = e => Object(s.h)(d.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
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
				return C
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return _
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				d = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
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
				g = r("./src/reddit/models/Badge/index.ts");
			var v = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				y = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				x = r.n(y);
			const I = "add-custom-badge-tooltip",
				E = 100,
				O = 2 * E;
			class C extends s.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, E)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, O)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return s.a.createElement("img", {
						className: Object(a.a)(x.a.image, this.props.className),
						src: `${i.a.assetPath}/img/badges/placeholder.png`
					});
					const e = `${I}-${this.props.uniqueIdentifier}`;
					return s.a.createElement(n.Fragment, null, this.props.showAddCustom && s.a.createElement("div", {
						className: x.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, s.a.createElement("button", {
						className: x.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, s.a.createElement(h.a, {
						className: x.a.addCustom
					})), s.a.createElement(v, {
						className: x.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(f.a)(this.props.badges).map(e => {
						const t = Object(g.d)(24, 24, e),
							r = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return s.a.createElement(n.Fragment, {
							key: `badges-fragement-${e.id}`
						}, s.a.createElement("div", {
							className: Object(a.a)(x.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(r),
							onMouseLeave: () => this.handleMouseLeave()
						}, s.a.createElement("img", {
							className: x.a.image,
							id: r,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`
						}), this.props.useHovercard ? s.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: x.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: r,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : s.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: r,
							text: e.title
						})))
					}))
				}
			}
			const j = Object(o.c)({
					badges: (e, {
						subredditId: t,
						userId: r
					}) => {
						return ((e.users.appliedBadges[r] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: b.d.spSpecialMemberships
				}),
				w = Object(o.c)({
					badges: (e, {
						subredditId: t
					}) => {
						const r = e.user.account;
						if (r) {
							return ((e.users.appliedBadges[r.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: b.d.spSpecialMemberships
				}),
				k = e => ({
					onShowTooltip: t => e(Object(u.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(u.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				}),
				N = Object(d.b)(j, k)(C),
				_ = Object(d.b)(w, k)(C)
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
				d = r("./node_modules/react/index.js"),
				o = r.n(d),
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
				g = Object(p.a)(b.c);

			function v(e) {
				return e.type === n.User
			}
			const y = e => async (t, r, {
				apiContext: s
			}) => {
				const d = r(),
					o = !!d.leaderboard.models[e],
					i = !!d.leaderboard.api.pending[e];
				if (o || i) return;
				t(h({
					subredditId: e
				}));
				const a = await
				function(e, t) {
					return Object(m.a)(e, {
						endpoint: `${u.a.metaUrl}/ratings/${t.subredditId}/points-monthly`,
						method: l.cb.GET
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
					t(g({
						subredditId: e,
						data: a.body.leaderboard
					}));
					const r = a.body.leaderboard.filter(v).map(e => e.userId);
					t(Object(c.l)({
						subredditId: e,
						userIds: r
					}))
				} else t(f({
					subredditId: e,
					data: a.error
				}))
			};
			var x = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				I = r("./src/reddit/icons/svgs/Info/index.tsx"),
				E = r("./src/reddit/selectors/economics.ts"),
				O = r("./src/reddit/selectors/gov.ts"),
				C = r("./src/lib/classNames/index.ts"),
				j = r("./src/lib/prettyPrintNumber/index.ts"),
				w = r("./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less"),
				k = r.n(w);

			function N(e) {
				const t = Object(j.a)(e.entry.numUsers.toString()),
					r = 1 === e.entry.numUsers ? s.fbt._("User", null, {
						hk: "167Ce9"
					}) : s.fbt._("Users", null, {
						hk: "1pljbY"
					});
				return o.a.createElement("div", {
					className: Object(C.a)(k.a.container, e.className)
				}, o.a.createElement("div", {
					className: k.a.line
				}), o.a.createElement("div", {
					className: k.a.text
				}, `${t} ${r}`), o.a.createElement("div", {
					className: k.a.line
				}))
			}
			var _ = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				P = r("./node_modules/uuid/v4.js"),
				S = r.n(P),
				T = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				B = r("./src/reddit/components/TrackingHelper/index.tsx"),
				A = r("./src/reddit/featureFlags/index.ts"),
				L = r("./src/reddit/helpers/governance/tokens.ts"),
				D = r("./src/reddit/selectors/telemetry.ts"),
				U = r("./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less"),
				H = r.n(U);
			const F = (e, t, r) => n => {
				const s = D.defaults(n);
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
					subreddit: D.subreddit(n)
				}
			};
			const M = Object(a.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badgesEnabled: e => A.d.spBadges(e),
				tokenDisplayConversion: O.m
			});
			var $ = Object(B.c)(Object(i.b)(M)((function(e) {
					const t = S()();
					return o.a.createElement(_.a, {
						className: Object(C.a)(H.a.container, e.className, {
							[H.a.currentUser]: e.entry.userId === e.accountId
						}),
						to: `/user/${e.entry.userName}/`,
						onClick: () => {
							e.sendEvent(F("click", t, e.entry.userName))
						},
						onMouseEnter: () => {
							e.sendEvent(F("hover", t, e.entry.userName))
						}
					}, o.a.createElement("div", {
						className: H.a.user
					}, e.badgesEnabled && o.a.createElement("div", {
						className: H.a.badgeContainer
					}, o.a.createElement(T.c, {
						className: H.a.badge,
						correlationId: t,
						subredditId: e.subredditId,
						uniqueIdentifier: e.uniqueIdentifier,
						userId: e.entry.userId
					})), o.a.createElement("div", {
						className: H.a.username
					}, e.entry.userName)), o.a.createElement("div", {
						className: H.a.rank
					}, o.a.createElement("div", {
						className: H.a.points
					}, Object(j.a)(Object(L.b)(e.entry.score, e.tokenDisplayConversion))), o.a.createElement("div", {
						className: H.a.position
					}, `#${Object(j.a)(e.entry.position.toString())}`)))
				}))),
				R = r("./src/reddit/components/Governance/Leaderboard/index.m.less"),
				G = r.n(R);
			class q extends o.a.Component {
				componentDidMount() {
					this.props.onFetchLeaderboardData()
				}
				render() {
					return this.props.userOptedOut ? null : o.a.createElement(x.a, {
						className: this.props.className,
						title: s.fbt._("Leaderboard (Past Month)", null, {
							hk: "4Bb1G7"
						})
					}, this.props.subreddit && o.a.createElement("div", {
						className: G.a.description
					}, s.fbt._("Scores are updated regularly based on the top contributors who earned the most {community-points-name} each month.", [s.fbt._param("community-points-name", this.props.tokenName)], {
						hk: "25uyZ3"
					})), o.a.createElement("div", {
						className: G.a.header
					}, o.a.createElement("div", {
						className: G.a.topUsers
					}, s.fbt._("top 10 users", null, {
						hk: "pe871"
					})), o.a.createElement("div", {
						className: G.a.tokens
					}, this.props.tokenName)), (() => this.props.leaderboardErrored ? o.a.createElement("div", {
						className: G.a.error
					}, o.a.createElement(I.a, {
						className: G.a.errorIcon
					})) : this.props.leaderboard ? o.a.createElement(d.Fragment, null, this.props.leaderboard.map(e => {
						switch (e.type) {
							case n.User:
								return o.a.createElement($, {
									className: G.a.entryUser,
									entry: e,
									subredditId: this.props.subredditId,
									uniqueIdentifier: this.props.uniqueId,
									key: e.userId
								});
							case n.Divider:
								return o.a.createElement(N, {
									className: G.a.divider,
									entry: e,
									key: "divider"
								})
						}
					})) : Array.from({
						length: 8
					}).map((e, t) => o.a.createElement("div", {
						className: G.a.loading,
						key: t
					})))())
				}
			}
			const W = Object(a.c)({
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
				}) => Object(E.x)(e, t)
			});
			t.default = Object(i.b)(W, (e, {
				subredditId: t
			}) => ({
				onFetchLeaderboardData: () => e(y(t))
			}))(q)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return o
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
				return g
			}));
			var n, s = r("./src/config.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts");

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
				return Object(d.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(d.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function l(e, t, r) {
				return await Object(d.a)(e, {
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
			async function g(e, t) {
				return await Object(d.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function d(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(d(e, t), 10))
			}

			function i(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function d(e) {
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
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, s, d;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(d || (d = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "p", (function() {
				return x
			})), r.d(t, "h", (function() {
				return I
			})), r.d(t, "x", (function() {
				return E
			})), r.d(t, "k", (function() {
				return O
			})), r.d(t, "m", (function() {
				return C
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "i", (function() {
				return k
			})), r.d(t, "o", (function() {
				return N
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "q", (function() {
				return B
			})), r.d(t, "w", (function() {
				return A
			})), r.d(t, "s", (function() {
				return L
			})), r.d(t, "t", (function() {
				return D
			})), r.d(t, "b", (function() {
				return U
			})), r.d(t, "u", (function() {
				return H
			})), r.d(t, "r", (function() {
				return F
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "l", (function() {
				return $
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/helpers/economics/sortBadges.ts"),
				d = r("./src/reddit/helpers/richTextJson/index.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				i = r("./src/reddit/models/Badge/managementPage.ts"),
				a = r("./src/reddit/models/Gold/Powerups/index.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				u = r("./src/reddit/models/Product/index.ts"),
				l = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups.ts");
			const f = (e, t) => {
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
				h = (e, t) => {
					const r = f(e, t);
					return r && r.endsAt || null
				};
			var g;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(g || (g = {}));
			const v = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === m.a.Fetched) {
						const r = h(e, t),
							n = Date.now();
						return r && n < r ? g.Subscribed : g.NotSubscribed
					}
					return g.DontKnow
				},
				y = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === m.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[i.a.Loyalty]: n.find(e => e.placement === o.a.First),
							[i.a.Achievement]: n.find(e => e.placement === o.a.Second),
							[i.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				},
				x = (e, t, r) => {
					if (!n.d.spBadges(e)) return [];
					const d = (e.users.appliedBadges[r] || {})[t] || [];
					return Object(s.a)(d.map(t => e.badges.models[t]).filter(Boolean))
				},
				I = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === m.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function E(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function O(e, t) {
				const {
					badge: r,
					subredditId: n
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(r) && r.userId === s) return r;
				const d = e.badges.models,
					i = e.user.ownedBadges[n] || {},
					a = Object(o.e)(r) ? r.type : r.id;
				return Object.keys(i).map(e => d[e]).find(e => e && e.type === a)
			}

			function C(e, t, r, n) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					if (r === i.a.Loyalty || r === i.a.Achievement) return s.data.collections[r];
					if (r === i.a.Cosmetic && n) return s.data.collections[r][n]
				}
				return []
			}

			function j(e, t) {
				const r = C(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function w(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					const e = r.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return []
			}

			function k(e, t) {
				return C(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const N = e => {
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
			var _;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(_ || (_ = {}));
			const P = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				S = (e, t) => Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t),
				T = (e, t) => {
					if (!t) return {};
					const r = P.prices;
					S(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = f(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				B = (e, t) => {
					const r = e.subreddits.gov.meta[t || ""],
						n = r && r.extra && r.extra.nomenclature || P;
					return {
						prices: T(e, t),
						member: n.member || P.member,
						memberPlural: n.memberPlural || P.memberPlural,
						memberAlt: n.memberAlt || P.memberAlt,
						memberAltPlural: n.memberAltPlural || P.memberAltPlural,
						membership: n.membership || P.membership,
						membershipAlt: n.membershipAlt || P.membershipAlt
					}
				},
				A = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				U = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				H = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				F = (e, t, r) => {
					const s = "replyToPost" !== r && Object(p.a)(e, {
						commentId: r
					});
					if (!!s && Object(d.a)(s)) return !0;
					if (t && Object(b.m)(e, {
							subredditId: t,
							benefit: a.a.CommentsWithGifs
						})) return !0;
					const o = n.d.spGiphy(e),
						i = H(e, t);
					return o && i
				},
				M = (e, t, r) => {
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
				return g
			})), r.d(t, "m", (function() {
				return v
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "r", (function() {
				return I
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "p", (function() {
				return C
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "j", (function() {
				return w
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts");
			const d = [],
				o = {},
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
					} : o
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
					return r && e.subreddits.gov.releaseNotes[r] || d
				},
				h = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				g = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				v = (e, t) => {
					const r = C(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				x = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				I = (e, t) => {
					const r = x(e, t);
					return r && r.walletProvider
				},
				E = (e, t) => {
					const r = I(e, t),
						n = x(e, t);
					return r && r.provider || n && n.provider
				},
				O = (e, t) => {
					const r = E(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				C = (e, t) => {
					const r = I(e, t),
						n = E(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const d = r && r.extra && r.extra.contracts,
						o = d && d.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				j = (e, {
					subredditId: t
				}) => {
					const r = I(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				w = (e, t) => {
					const r = x(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.5f8051cd071e24f9ff3e.js.map