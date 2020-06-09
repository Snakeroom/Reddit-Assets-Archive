// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.03beaf2edd33c5790b51.js
// Retrieved at 6/9/2020, 4:30:11 PM by Reddit Dataminer v1.0.0
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
				return w
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
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
					getComponent: () => Promise.all([r.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), r.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), r.e("SubredditPremiumBadgeHovercardTooltip")]).then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
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
			class O extends n.a.Component {
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
					if (this.props.usePlaceholder && !this.props.badges.length) return n.a.createElement("img", {
						className: Object(i.a)(y.a.image, this.props.className),
						src: "".concat(a.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(I, "-").concat(this.props.uniqueIdentifier);
					return n.a.createElement(s.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: y.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: y.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(g.a, {
						className: y.a.addCustom
					})), n.a.createElement(f, {
						className: y.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(this.props.badges).map(e => {
						const t = Object(v.b)(24, 24, e),
							r = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return n.a.createElement(s.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, n.a.createElement("div", {
							className: Object(i.a)(y.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(r),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: y.a.image,
							id: r,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? n.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: y.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: r,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: r,
							text: e.title
						})))
					}))
				}
			}
			const N = Object(d.c)({
					badges: (e, t) => {
						let {
							subredditId: r,
							userId: s
						} = t;
						return ((e.users.appliedBadges[s] || {})[r] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: b.d.spPremium
				}),
				j = Object(d.c)({
					badges: (e, t) => {
						let {
							subredditId: r
						} = t;
						const s = e.user.account;
						if (s) {
							return ((e.users.appliedBadges[s.id] || {})[r] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: b.d.spPremium
				}),
				_ = e => ({
					onShowTooltip: t => e(Object(u.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(u.i)()),
					onOpenUploadDialog: () => e(Object(c.i)())
				}),
				k = Object(o.b)(N, _)(O),
				w = Object(o.b)(j, _)(O)
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
			var s, n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				d = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/badge.ts"),
				u = r("./src/config.ts"),
				l = r("./src/lib/constants/index.ts");
			! function(e) {
				e[e.Divider = 0] = "Divider", e[e.User = 1] = "User"
			}(s || (s = {}));
			var m = r("./src/reddit/endpoints/governance/requester.ts");
			var p = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/actions/leaderboard/constants.ts");
			const h = Object(p.a)(b.a),
				g = Object(p.a)(b.b),
				v = Object(p.a)(b.c);

			function f(e) {
				return e.type === s.User
			}
			const x = e => async (t, r, n) => {
				let {
					apiContext: o
				} = n;
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
						method: l.bb.GET
					}).then(e => {
						if (e.ok) {
							let t = 0;
							const r = [];
							return e.body.forEach(e => {
								const n = e.position - t;
								n > 1 && r.push({
									numUsers: n,
									type: s.Divider
								}), r.push(Object.assign({}, e, {
									type: s.User
								})), t = e.position
							}), Object.assign({}, e, {
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
				N = r("./src/lib/prettyPrintNumber/index.ts"),
				j = r("./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less"),
				_ = r.n(j);

			function k(e) {
				const t = Object(N.a)(e.entry.numUsers.toString()),
					r = 1 === e.entry.numUsers ? n.fbt._("User", null, {
						hk: "167Ce9"
					}) : n.fbt._("Users", null, {
						hk: "1pljbY"
					});
				return d.a.createElement("div", {
					className: Object(O.a)(_.a.container, e.className)
				}, d.a.createElement("div", {
					className: _.a.line
				}), d.a.createElement("div", {
					className: _.a.text
				}, "".concat(t, " ").concat(r)), d.a.createElement("div", {
					className: _.a.line
				}))
			}
			var w = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				T = r("./node_modules/uuid/v4.js"),
				P = r.n(T),
				H = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				L = r("./src/reddit/components/TrackingHelper/index.tsx"),
				B = r("./src/reddit/featureFlags/index.ts"),
				S = r("./src/reddit/helpers/governance/tokens.ts"),
				U = r("./src/reddit/selectors/telemetry.ts"),
				D = r("./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less"),
				A = r.n(D);
			const M = (e, t, r) => s => {
				const n = U.defaults(s);
				return Object.assign({
					action: e,
					correlationId: t,
					source: "meta",
					noun: "leaderboard_user_name"
				}, n, {
					actionInfo: Object.assign({}, n.actionInfo, {
						reason: r
					}),
					subreddit: U.subreddit(s)
				})
			};
			const F = Object(i.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badgesEnabled: e => B.d.spBadges(e) || B.d.spPremium(e),
				tokenDisplayConversion: C.o
			});
			var R = Object(L.c)(Object(a.b)(F)((function(e) {
					const t = P()();
					return d.a.createElement(w.a, {
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
					}, Object(N.a)(Object(S.b)(e.entry.score, e.tokenDisplayConversion))), d.a.createElement("div", {
						className: A.a.position
					}, "#".concat(Object(N.a)(e.entry.position.toString())))))
				}))),
				q = r("./src/reddit/components/Governance/Leaderboard/index.m.less"),
				G = r.n(q);
			class W extends d.a.Component {
				componentDidMount() {
					this.props.onFetchLeaderboardData()
				}
				render() {
					return this.props.userOptedOut ? null : d.a.createElement(y.a, {
						className: this.props.className,
						title: n.fbt._("Leaderboard (Past Month)", null, {
							hk: "4Bb1G7"
						})
					}, this.props.subreddit && d.a.createElement("div", {
						className: G.a.description
					}, n.fbt._("Scores are updated regularly based on the top contributors who earned the most {community-points-name} each month.", [n.fbt._param("community-points-name", this.props.tokenName)], {
						hk: "25uyZ3"
					})), d.a.createElement("div", {
						className: G.a.header
					}, d.a.createElement("div", {
						className: G.a.topUsers
					}, n.fbt._("top 10 users", null, {
						hk: "pe871"
					})), d.a.createElement("div", {
						className: G.a.tokens
					}, this.props.tokenName)), (() => this.props.leaderboardErrored ? d.a.createElement("div", {
						className: G.a.error
					}, d.a.createElement(I.a, {
						className: G.a.errorIcon
					})) : this.props.leaderboard ? d.a.createElement(o.Fragment, null, this.props.leaderboard.map(e => {
						switch (e.type) {
							case s.User:
								return d.a.createElement(R, {
									className: G.a.entryUser,
									entry: e,
									subredditId: this.props.subredditId,
									uniqueIdentifier: this.props.uniqueId,
									key: e.userId
								});
							case s.Divider:
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
			const V = Object(i.c)({
				tokenName: C.p,
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
					return Object(E.G)(e, r)
				}
			});
			t.default = Object(a.b)(V, (e, t) => {
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
				return s
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			}));
			var s, n = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function a(e, t, r) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function i(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function c(e, t, r) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(s || (s = {}))
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
			var s = r("./node_modules/bignumber.js/bignumber.js"),
				n = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new s.BigNumber(e),
					n = new s.BigNumber(t);
				return r.dividedBy(n).decimalPlaces(2).toString()
			}

			function d(e, t) {
				return Object(n.b)(parseInt(o(e, t), 10))
			}

			function a(e, t) {
				const r = new s.BigNumber(e),
					n = new s.BigNumber(t);
				return r.multipliedBy(n).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function o(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), n.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = e => !0
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
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "p", (function() {
				return x
			})), r.d(t, "q", (function() {
				return y
			})), r.d(t, "o", (function() {
				return I
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "m", (function() {
				return C
			})), r.d(t, "s", (function() {
				return O
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "r", (function() {
				return _
			})), r.d(t, "n", (function() {
				return k
			})), r.d(t, "k", (function() {
				return w
			}));
			var s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				n = r("./src/reddit/endpoints/governance/crypto.ts"),
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
					const s = O(e, {
						subredditId: r
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.harberger ? s.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const r = E(e, t);
					if (r) return r.mainHeader
				},
				p = (e, t) => {
					const r = E(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				b = (e, t) => {
					const r = E(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : c
				},
				h = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(d.a)(e)) {
						const t = Object(a.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const r = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						s = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (s) {
						const e = !!s.polls && !1 === s.polls.canCreate;
						return r && !e
					}
					return r
				},
				v = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				f = (e, t) => {
					const r = Object(s.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || i
				},
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || u,
				I = (e, t) => {
					const r = _(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				E = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				C = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				O = (e, t) => {
					const r = C(e, t);
					return r && r.walletProvider
				},
				N = (e, t) => {
					const r = O(e, t),
						s = C(e, t);
					return r && r.provider || s && s.provider
				},
				j = (e, t) => {
					const r = N(e, t);
					return r === n.a.Ethereum || r === n.a.Rinkeby || r === n.a.EthTraderEthereum || r === n.a.EthTraderRinkeby
				},
				_ = (e, t) => {
					const r = O(e, t),
						s = N(e, t);
					if (r && !r.inTransition && s === n.a.Stellar) return {
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
				k = (e, t) => {
					let {
						subredditId: r
					} = t;
					const s = O(e, {
						subredditId: r
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				w = (e, t) => {
					const r = C(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=reddit-components-Governance-Leaderboard.03beaf2edd33c5790b51.js.map