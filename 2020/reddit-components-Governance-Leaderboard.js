// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.46260274d8455bca6146.js
// Retrieved at 8/31/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-Leaderboard"], {
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
				return O
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "a", (function() {
				return _
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				a = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				u = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([r.e("vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip"), r.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), r.e("SubredditPremiumBadgeHovercardTooltip")]).then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/helpers/economics/sortBadges.ts"),
				g = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = r("./src/reddit/models/Badge/index.ts");
			var f = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				x = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				y = r.n(x);
			const I = "add-custom-badge-tooltip",
				E = 100,
				C = 2 * E;
			class O extends s.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, E)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, C)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return s.a.createElement("img", {
						className: Object(i.a)(y.a.image, this.props.className),
						src: "".concat(a.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(I, "-").concat(this.props.uniqueIdentifier);
					return s.a.createElement(n.Fragment, null, this.props.showAddCustom && s.a.createElement("div", {
						className: y.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, s.a.createElement("button", {
						className: y.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, s.a.createElement(g.a, {
						className: y.a.addCustom
					})), s.a.createElement(f, {
						className: y.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(this.props.badges).map(e => {
						const t = Object(v.b)(24, 24, e),
							r = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return s.a.createElement(n.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, s.a.createElement("div", {
							className: Object(i.a)(y.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(r),
							onMouseLeave: () => this.handleMouseLeave()
						}, s.a.createElement("img", {
							className: y.a.image,
							id: r,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? s.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: y.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: r,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : s.a.createElement(p.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: r,
							text: e.title
						})))
					}))
				}
			}
			const j = Object(d.c)({
					badges: (e, t) => {
						let {
							subredditId: r,
							userId: n
						} = t;
						return ((e.users.appliedBadges[n] || {})[r] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: b.d.spPremium
				}),
				N = Object(d.c)({
					badges: (e, t) => {
						let {
							subredditId: r
						} = t;
						const n = e.user.account;
						if (n) {
							return ((e.users.appliedBadges[n.id] || {})[r] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: b.d.spPremium
				}),
				w = e => ({
					onShowTooltip: t => e(Object(u.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(u.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				}),
				k = Object(o.b)(j, w)(O),
				_ = Object(o.b)(N, w)(O)
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
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/badge.ts"),
				u = r("./src/config.ts"),
				l = r("./src/lib/constants/index.ts");
			! function(e) {
				e[e.Divider = 0] = "Divider", e[e.User = 1] = "User"
			}(n || (n = {}));
			var m = r("./src/reddit/endpoints/governance/requester.ts");
			var p = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/actions/leaderboard/constants.ts");
			const h = Object(p.a)(b.a),
				g = Object(p.a)(b.b),
				v = Object(p.a)(b.c);

			function f(e) {
				return e.type === n.User
			}
			const x = e => async (t, r, s) => {
				let {
					apiContext: o
				} = s;
				const d = r(),
					a = !!d.leaderboard.models[e],
					i = !!d.leaderboard.api.pending[e];
				if (a || i) return;
				t(g({
					subredditId: e
				}));
				const p = await
				function(e, t) {
					return Object(m.a)(e, {
						endpoint: "".concat(u.a.metaUrl, "/ratings/").concat(t.subredditId, "/points-monthly"),
						method: l.db.GET
					}).then(e => {
						if (e.ok) {
							let t = 0;
							const r = [];
							return e.body.forEach(e => {
								const s = e.position - t;
								s > 1 && r.push({
									numUsers: s,
									type: n.Divider
								}), r.push(Object.assign(Object.assign({}, e), {
									type: n.User
								})), t = e.position
							}), Object.assign(Object.assign({}, e), {
								body: {
									leaderboard: r
								}
							})
						}
						return e
					})
				}(o(), {
					subredditId: e
				});
				if (p.ok) {
					t(v({
						subredditId: e,
						data: p.body.leaderboard
					}));
					const r = p.body.leaderboard.filter(f).map(e => e.userId);
					t(Object(c.l)({
						subredditId: e,
						userIds: r
					}))
				} else t(h({
					subredditId: e,
					data: p.error
				}))
			};
			var y = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				I = r("./src/reddit/icons/svgs/Info/index.tsx"),
				E = r("./src/reddit/selectors/economics.ts"),
				C = r("./src/reddit/selectors/gov.ts"),
				O = (r("./node_modules/core-js/modules/es6.regexp.to-string.js"), r("./src/lib/classNames/index.ts")),
				j = r("./src/lib/prettyPrintNumber/index.ts"),
				N = r("./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less"),
				w = r.n(N);

			function k(e) {
				const t = Object(j.a)(e.entry.numUsers.toString()),
					r = 1 === e.entry.numUsers ? s.fbt._("User", null, {
						hk: "167Ce9"
					}) : s.fbt._("Users", null, {
						hk: "1pljbY"
					});
				return d.a.createElement("div", {
					className: Object(O.a)(w.a.container, e.className)
				}, d.a.createElement("div", {
					className: w.a.line
				}), d.a.createElement("div", {
					className: w.a.text
				}, "".concat(t, " ").concat(r)), d.a.createElement("div", {
					className: w.a.line
				}))
			}
			var _ = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				T = r("./node_modules/uuid/v4.js"),
				P = r.n(T),
				H = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				L = r("./src/reddit/components/TrackingHelper/index.tsx"),
				B = r("./src/reddit/featureFlags/index.ts"),
				S = r("./src/reddit/helpers/governance/tokens.ts"),
				U = r("./src/reddit/selectors/telemetry.ts"),
				D = r("./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less"),
				A = r.n(D);
			const M = (e, t, r) => n => {
				const s = U.defaults(n);
				return Object.assign(Object.assign({
					action: e,
					correlationId: t,
					source: "meta",
					noun: "leaderboard_user_name"
				}, s), {
					actionInfo: Object.assign(Object.assign({}, s.actionInfo), {
						reason: r
					}),
					subreddit: U.subreddit(n)
				})
			};
			const R = Object(i.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badgesEnabled: e => B.d.spBadges(e) || B.d.spPremium(e),
				tokenDisplayConversion: C.p
			});
			var q = Object(L.c)(Object(a.b)(R)((function(e) {
					const t = P()();
					return d.a.createElement(_.a, {
						className: Object(O.a)(A.a.container, e.className, {
							[A.a.currentUser]: e.entry.userId === e.accountId
						}),
						to: "/user/".concat(e.entry.userName, "/"),
						onClick: () => {
							e.sendEvent(M("click", t, e.entry.userName))
						},
						onMouseEnter: () => {
							e.sendEvent(M("hover", t, e.entry.userName))
						}
					}, d.a.createElement("div", {
						className: A.a.user
					}, e.badgesEnabled && d.a.createElement("div", {
						className: A.a.badgeContainer
					}, d.a.createElement(H.c, {
						className: A.a.badge,
						correlationId: t,
						subredditId: e.subredditId,
						uniqueIdentifier: e.uniqueIdentifier,
						userId: e.entry.userId
					})), d.a.createElement("div", {
						className: A.a.username
					}, e.entry.userName)), d.a.createElement("div", {
						className: A.a.rank
					}, d.a.createElement("div", {
						className: A.a.points
					}, Object(j.a)(Object(S.b)(e.entry.score, e.tokenDisplayConversion))), d.a.createElement("div", {
						className: A.a.position
					}, "#".concat(Object(j.a)(e.entry.position.toString())))))
				}))),
				F = r("./src/reddit/components/Governance/Leaderboard/index.m.less"),
				G = r.n(F);
			class W extends d.a.Component {
				componentDidMount() {
					this.props.onFetchLeaderboardData()
				}
				render() {
					return this.props.userOptedOut ? null : d.a.createElement(y.a, {
						className: this.props.className,
						title: s.fbt._("Leaderboard (Past Month)", null, {
							hk: "4Bb1G7"
						})
					}, this.props.subreddit && d.a.createElement("div", {
						className: G.a.description
					}, s.fbt._("Scores are updated regularly based on the top contributors who earned the most {community-points-name} each month.", [s.fbt._param("community-points-name", this.props.tokenName)], {
						hk: "25uyZ3"
					})), d.a.createElement("div", {
						className: G.a.header
					}, d.a.createElement("div", {
						className: G.a.topUsers
					}, s.fbt._("top 10 users", null, {
						hk: "pe871"
					})), d.a.createElement("div", {
						className: G.a.tokens
					}, this.props.tokenName)), (() => this.props.leaderboardErrored ? d.a.createElement("div", {
						className: G.a.error
					}, d.a.createElement(I.a, {
						className: G.a.errorIcon
					})) : this.props.leaderboard ? d.a.createElement(o.Fragment, null, this.props.leaderboard.map(e => {
						switch (e.type) {
							case n.User:
								return d.a.createElement(q, {
									className: G.a.entryUser,
									entry: e,
									subredditId: this.props.subredditId,
									uniqueIdentifier: this.props.uniqueId,
									key: e.userId
								});
							case n.Divider:
								return d.a.createElement(k, {
									className: G.a.divider,
									entry: e,
									key: "divider"
								})
						}
					})) : Array.from({
						length: 8
					}).map((e, t) => d.a.createElement("div", {
						className: G.a.loading,
						key: t
					})))())
				}
			}
			const J = Object(i.c)({
				tokenName: C.q,
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
					return Object(E.z)(e, r)
				}
			});
			t.default = Object(a.b)(J, (e, t) => {
				let {
					subredditId: r
				} = t;
				return {
					onFetchLeaderboardData: () => e(x(r))
				}
			})(W)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "i", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "j", (function() {
				return b
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

			function a(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function c(e, t, r) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function l(e, t, r) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = e => ({
					type: "claim",
					subredditId: e
				}),
				p = e => ({
					type: "subscribe",
					subredditId: e
				});
			async function b(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/es6.regexp.to-string.js");
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

			function a(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.multipliedBy(s).toFixed(0)
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
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "q", (function() {
				return I
			})), r.d(t, "r", (function() {
				return E
			})), r.d(t, "p", (function() {
				return C
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "u", (function() {
				return N
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "s", (function() {
				return _
			})), r.d(t, "o", (function() {
				return T
			})), r.d(t, "l", (function() {
				return P
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/reddit/featureFlags/index.ts"),
				d = r("./src/reddit/selectors/experiments/pollsGA.ts"),
				a = r("./src/reddit/selectors/postCreations.ts");
			const i = [],
				c = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				l = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = N(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const r = O(e, t);
					if (r) return r.mainHeader
				},
				p = (e, t) => {
					const r = O(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				b = (e, t) => {
					const r = O(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : c
				},
				h = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					const r = h(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				v = (e, t) => {
					const r = h(e, t);
					return r && r.amount || "0"
				},
				f = (e, t) => {
					if (Object(d.a)(e)) {
						const t = Object(a.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const r = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return r && !e
					}
					return r
				},
				x = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				y = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || i
				},
				I = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || u,
				C = (e, t) => {
					const r = _(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				O = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				j = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				N = (e, t) => {
					const r = j(e, t);
					return r && r.walletProvider
				},
				w = (e, t) => {
					const r = N(e, t),
						n = j(e, t);
					return r && r.provider || n && n.provider
				},
				k = (e, t) => {
					const r = w(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				_ = (e, t) => {
					const r = N(e, t),
						n = w(e, t);
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
				T = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = N(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				P = (e, t) => {
					const r = j(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.46260274d8455bca6146.js.map