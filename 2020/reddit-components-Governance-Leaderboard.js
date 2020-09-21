// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.f5c99e62b87f3b1a5ec5.js
// Retrieved at 9/21/2020, 7:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-Leaderboard"], {
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
				return O
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "a", (function() {
				return T
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("SubredditPremiumBadgeHovercardTooltip")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/helpers/economics/sortBadges.ts"),
				g = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = s("./src/reddit/models/Badge/index.ts");
			var x = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				C = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				I = s.n(C);
			const f = "add-custom-badge-tooltip",
				y = 100,
				E = 2 * y;
			class O extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, y)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, E)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return n.a.createElement("img", {
						className: Object(i.a)(I.a.image, this.props.className),
						src: "".concat(d.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(f, "-").concat(this.props.uniqueIdentifier);
					return n.a.createElement(r.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: I.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: I.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(g.a, {
						className: I.a.addCustom
					})), n.a.createElement(x, {
						className: I.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(this.props.badges).map(e => {
						const t = Object(v.b)(24, 24, e),
							s = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return n.a.createElement(r.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, n.a.createElement("div", {
							className: Object(i.a)(I.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: I.a.image,
							id: s,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? n.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: I.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: s,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: s,
							text: e.title
						})))
					}))
				}
			}
			const j = Object(a.c)({
					badges: (e, t) => {
						let {
							subredditId: s,
							userId: r
						} = t;
						return ((e.users.appliedBadges[r] || {})[s] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: b.d.spSpecialMemberships
				}),
				_ = Object(a.c)({
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
					useHovercard: b.d.spSpecialMemberships
				}),
				N = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				}),
				k = Object(o.b)(j, N)(O),
				T = Object(o.b)(_, N)(O)
		},
		"./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3U3eyY-903VKXVQvAX6Oci",
				line: "_2rsENdHzxqXJ3jqSdUylB9",
				text: "R99kMDIZ0Rs3Ftsu750Im"
			}
		},
		"./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Governance/Leaderboard/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Governance/Leaderboard/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/badge.ts"),
				l = s("./src/config.ts"),
				u = s("./src/lib/constants/index.ts");
			! function(e) {
				e[e.Divider = 0] = "Divider", e[e.User = 1] = "User"
			}(r || (r = {}));
			var m = s("./src/reddit/endpoints/governance/requester.ts");
			var p = s("./src/lib/makeActionCreator/index.ts"),
				b = s("./src/reddit/actions/leaderboard/constants.ts");
			const h = Object(p.a)(b.a),
				g = Object(p.a)(b.b),
				v = Object(p.a)(b.c);

			function x(e) {
				return e.type === r.User
			}
			const C = e => async (t, s, n) => {
				let {
					apiContext: o
				} = n;
				const a = s(),
					d = !!a.leaderboard.models[e],
					i = !!a.leaderboard.api.pending[e];
				if (d || i) return;
				t(g({
					subredditId: e
				}));
				const p = await
				function(e, t) {
					return Object(m.a)(e, {
						endpoint: "".concat(l.a.metaUrl, "/ratings/").concat(t.subredditId, "/points-monthly"),
						method: u.db.GET
					}).then(e => {
						if (e.ok) {
							let t = 0;
							const s = [];
							return e.body.forEach(e => {
								const n = e.position - t;
								n > 1 && s.push({
									numUsers: n,
									type: r.Divider
								}), s.push(Object.assign(Object.assign({}, e), {
									type: r.User
								})), t = e.position
							}), Object.assign(Object.assign({}, e), {
								body: {
									leaderboard: s
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
					const s = p.body.leaderboard.filter(x).map(e => e.userId);
					t(Object(c.l)({
						subredditId: e,
						userIds: s
					}))
				} else t(h({
					subredditId: e,
					data: p.error
				}))
			};
			var I = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/icons/svgs/Info/index.tsx"),
				y = s("./src/reddit/selectors/economics.ts"),
				E = s("./src/reddit/selectors/gov.ts"),
				O = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./src/lib/classNames/index.ts")),
				j = s("./src/lib/prettyPrintNumber/index.ts"),
				_ = s("./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less"),
				N = s.n(_);

			function k(e) {
				const t = Object(j.a)(e.entry.numUsers.toString()),
					s = 1 === e.entry.numUsers ? n.fbt._("User", null, {
						hk: "167Ce9"
					}) : n.fbt._("Users", null, {
						hk: "1pljbY"
					});
				return a.a.createElement("div", {
					className: Object(O.a)(N.a.container, e.className)
				}, a.a.createElement("div", {
					className: N.a.line
				}), a.a.createElement("div", {
					className: N.a.text
				}, "".concat(t, " ").concat(s)), a.a.createElement("div", {
					className: N.a.line
				}))
			}
			var T = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = s("./node_modules/uuid/v4.js"),
				B = s.n(w),
				L = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				S = s("./src/reddit/components/TrackingHelper/index.tsx"),
				H = s("./src/reddit/featureFlags/index.ts"),
				U = s("./src/reddit/helpers/governance/tokens.ts"),
				D = s("./src/reddit/selectors/telemetry.ts"),
				M = s("./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less"),
				P = s.n(M);
			const A = (e, t, s) => r => {
				const n = D.defaults(r);
				return Object.assign(Object.assign({
					action: e,
					correlationId: t,
					source: "meta",
					noun: "leaderboard_user_name"
				}, n), {
					actionInfo: Object.assign(Object.assign({}, n.actionInfo), {
						reason: s
					}),
					subreddit: D.subreddit(r)
				})
			};
			const q = Object(i.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badgesEnabled: e => H.d.spBadges(e),
				tokenDisplayConversion: E.p
			});
			var F = Object(S.c)(Object(d.b)(q)((function(e) {
					const t = B()();
					return a.a.createElement(T.a, {
						className: Object(O.a)(P.a.container, e.className, {
							[P.a.currentUser]: e.entry.userId === e.accountId
						}),
						to: "/user/".concat(e.entry.userName, "/"),
						onClick: () => {
							e.sendEvent(A("click", t, e.entry.userName))
						},
						onMouseEnter: () => {
							e.sendEvent(A("hover", t, e.entry.userName))
						}
					}, a.a.createElement("div", {
						className: P.a.user
					}, e.badgesEnabled && a.a.createElement("div", {
						className: P.a.badgeContainer
					}, a.a.createElement(L.c, {
						className: P.a.badge,
						correlationId: t,
						subredditId: e.subredditId,
						uniqueIdentifier: e.uniqueIdentifier,
						userId: e.entry.userId
					})), a.a.createElement("div", {
						className: P.a.username
					}, e.entry.userName)), a.a.createElement("div", {
						className: P.a.rank
					}, a.a.createElement("div", {
						className: P.a.points
					}, Object(j.a)(Object(U.b)(e.entry.score, e.tokenDisplayConversion))), a.a.createElement("div", {
						className: P.a.position
					}, "#".concat(Object(j.a)(e.entry.position.toString())))))
				}))),
				G = s("./src/reddit/components/Governance/Leaderboard/index.m.less"),
				W = s.n(G);
			class V extends a.a.Component {
				componentDidMount() {
					this.props.onFetchLeaderboardData()
				}
				render() {
					return this.props.userOptedOut ? null : a.a.createElement(I.a, {
						className: this.props.className,
						title: n.fbt._("Leaderboard (Past Month)", null, {
							hk: "4Bb1G7"
						})
					}, this.props.subreddit && a.a.createElement("div", {
						className: W.a.description
					}, n.fbt._("Scores are updated regularly based on the top contributors who earned the most {community-points-name} each month.", [n.fbt._param("community-points-name", this.props.tokenName)], {
						hk: "25uyZ3"
					})), a.a.createElement("div", {
						className: W.a.header
					}, a.a.createElement("div", {
						className: W.a.topUsers
					}, n.fbt._("top 10 users", null, {
						hk: "pe871"
					})), a.a.createElement("div", {
						className: W.a.tokens
					}, this.props.tokenName)), (() => this.props.leaderboardErrored ? a.a.createElement("div", {
						className: W.a.error
					}, a.a.createElement(f.a, {
						className: W.a.errorIcon
					})) : this.props.leaderboard ? a.a.createElement(o.Fragment, null, this.props.leaderboard.map(e => {
						switch (e.type) {
							case r.User:
								return a.a.createElement(F, {
									className: W.a.entryUser,
									entry: e,
									subredditId: this.props.subredditId,
									uniqueIdentifier: this.props.uniqueId,
									key: e.userId
								});
							case r.Divider:
								return a.a.createElement(k, {
									className: W.a.divider,
									entry: e,
									key: "divider"
								})
						}
					})) : Array.from({
						length: 8
					}).map((e, t) => a.a.createElement("div", {
						className: W.a.loading,
						key: t
					})))())
				}
			}
			const J = Object(i.c)({
				tokenName: E.q,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				leaderboard: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.leaderboard.models[s]
				},
				leaderboardErrored: (e, t) => {
					let {
						subredditId: s
					} = t;
					return !!e.leaderboard.api.error[s]
				},
				subreddit: (e, t) => e.subreddits.models[t.subredditId],
				userOptedOut: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(y.z)(e, s)
				}
			});
			t.default = Object(d.b)(J, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onFetchLeaderboardData: () => e(C(s))
				}
			})(V)
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = s("./node_modules/bignumber.js/bignumber.js"),
				n = s("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const s = new r.BigNumber(e),
					n = new r.BigNumber(t);
				return s.dividedToIntegerBy(n).toString()
			}

			function a(e, t) {
				return Object(n.b)(parseInt(o(e, t), 10))
			}

			function d(e, t) {
				const s = new r.BigNumber(e),
					n = new r.BigNumber(t);
				return s.multipliedBy(n).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

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
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.f5c99e62b87f3b1a5ec5.js.map