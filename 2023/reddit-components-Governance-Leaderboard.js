// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.707d399e6ff9d0c493b5.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-Leaderboard"], {
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
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
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const d = Object(s.a)(i.a),
				a = Object(s.a)(i.b),
				c = Object(s.a)(i.c),
				u = Object(s.a)(i.d),
				l = Object(s.a)(i.e),
				m = Object(s.a)(i.f),
				p = Object(s.a)(i.g),
				b = Object(s.a)(i.h),
				f = Object(s.a)(i.i),
				h = e => Object(n.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
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
				return N
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "a", (function() {
				return T
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
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
				h = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = r("./src/reddit/models/Badge/index.ts");
			var g = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				y = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				x = r.n(y);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = "add-custom-badge-tooltip",
				j = 100,
				C = 2 * j,
				E = 24;
			class N extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, j)), this.mouseOverTooltip = e
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
					if (this.props.usePlaceholder && !e.length) return n.a.createElement("img", {
						className: Object(a.a)(x.a.image, this.props.className),
						src: `${d.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${I}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || E;
					return n.a.createElement(s.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: x.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: x.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(h.a, {
						className: x.a.addCustom
					})), n.a.createElement(g, {
						className: x.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(f.a)(e).map(e => {
						const t = Object(v.d)(r, r, e),
							o = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return n.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, n.a.createElement("div", {
							className: Object(a.a)(x.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(o),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: x.a.image,
							id: o,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? n.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: x.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: o,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: o,
							text: e.title
						})))
					}))
				}
			}
			const S = [],
				_ = Object(i.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: r,
							userId: s
						} = t;
						var n;
						return (null === (n = e.users.appliedBadges[s]) || void 0 === n ? void 0 : n[r]) || S
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				P = Object(i.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: r
						} = t;
						var s;
						const n = e.user.account;
						return n && (null === (s = e.users.appliedBadges[n.id]) || void 0 === s ? void 0 : s[r]) || S
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				w = e => ({
					onShowTooltip: t => e(Object(u.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(u.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function B(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, o = t.map(e => r[e]).filter(Boolean);
				return n.a.createElement(N, O({
					badges: o
				}, s))
			}
			const k = Object(o.b)(_, w)(B),
				T = Object(o.b)(P, w)(B)
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
				i = r.n(o),
				d = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/badge.ts"),
				u = r("./src/config.ts"),
				l = r("./src/lib/constants/index.ts");
			! function(e) {
				e[e.Divider = 0] = "Divider", e[e.User = 1] = "User"
			}(s || (s = {}));
			var m = r("./src/reddit/endpoints/governance/requester.ts");
			var p = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/actions/leaderboard/constants.ts");
			const f = Object(p.a)(b.a),
				h = Object(p.a)(b.b),
				v = Object(p.a)(b.c);

			function g(e) {
				return e.type === s.User
			}
			const y = e => async (t, r, n) => {
				let {
					apiContext: o
				} = n;
				const i = r(),
					d = !!i.leaderboard.models[e],
					a = !!i.leaderboard.api.pending[e];
				if (d || a) return;
				t(h({
					subredditId: e
				}));
				const p = await
				function(e, t) {
					return Object(m.a)(e, {
						endpoint: `${u.a.metaUrl}/ratings/${t.subredditId}/points-monthly`,
						method: l.nb.GET
					}).then(e => {
						if (e.ok) {
							let t = 0;
							const r = [];
							return e.body.forEach(e => {
								const n = e.position - t;
								n > 1 && r.push({
									numUsers: n,
									type: s.Divider
								}), r.push({
									...e,
									type: s.User
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
				}(o(), {
					subredditId: e
				});
				if (p.ok) {
					t(v({
						subredditId: e,
						data: p.body.leaderboard
					}));
					const r = p.body.leaderboard.filter(g).map(e => e.userId);
					t(Object(c.j)({
						subredditId: e,
						userIds: r
					}))
				} else t(f({
					subredditId: e,
					data: p.error
				}))
			};
			var x = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				O = r("./src/reddit/icons/svgs/Info/index.tsx"),
				I = r("./src/reddit/selectors/crypto/points.ts"),
				j = r("./src/reddit/selectors/economics.ts"),
				C = r("./src/lib/classNames/index.ts"),
				E = r("./src/lib/prettyPrintNumber/index.ts"),
				N = r("./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less"),
				S = r.n(N);

			function _(e) {
				const t = Object(E.a)(e.entry.numUsers.toString()),
					r = 1 === e.entry.numUsers ? n.fbt._("User", null, {
						hk: "167Ce9"
					}) : n.fbt._("Users", null, {
						hk: "1pljbY"
					});
				return i.a.createElement("div", {
					className: Object(C.a)(S.a.container, e.className)
				}, i.a.createElement("div", {
					className: S.a.line
				}), i.a.createElement("div", {
					className: S.a.text
				}, `${t} ${r}`), i.a.createElement("div", {
					className: S.a.line
				}))
			}
			var P = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				B = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				k = r("./src/reddit/components/TrackingHelper/index.tsx"),
				T = r("./src/reddit/featureFlags/index.ts"),
				A = r("./src/reddit/helpers/governance/tokens.ts"),
				L = r("./src/reddit/selectors/telemetry.ts"),
				D = r("./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less"),
				F = r.n(D);
			const U = (e, t, r) => s => {
				const n = L.q(s);
				return {
					action: e,
					correlationId: t,
					source: "meta",
					noun: "leaderboard_user_name",
					...n,
					actionInfo: {
						...n.actionInfo,
						reason: r
					},
					subreddit: L.nb(s)
				}
			};
			const M = Object(a.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badgesEnabled: e => T.d.spBadges(e),
				pointsDetails: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(I.b)(e, r)
				}
			});
			var H = Object(k.c)(Object(d.b)(M)((function(e) {
					var t;
					const r = Object(w.a)();
					return i.a.createElement(P.a, {
						className: Object(C.a)(F.a.container, e.className, {
							[F.a.currentUser]: e.entry.userId === e.accountId
						}),
						to: `/user/${e.entry.userName}/`,
						onClick: () => {
							e.sendEvent(U("click", r, e.entry.userName))
						},
						onMouseEnter: () => {
							e.sendEvent(U("hover", r, e.entry.userName))
						}
					}, i.a.createElement("div", {
						className: F.a.user
					}, e.badgesEnabled && i.a.createElement("div", {
						className: F.a.badgeContainer
					}, i.a.createElement(B.c, {
						className: F.a.badge,
						correlationId: r,
						subredditId: e.subredditId,
						uniqueIdentifier: e.uniqueIdentifier,
						userId: e.entry.userId
					})), i.a.createElement("div", {
						className: F.a.username
					}, e.entry.userName)), i.a.createElement("div", {
						className: F.a.rank
					}, i.a.createElement("div", {
						className: F.a.points
					}, Object(E.a)(Object(A.c)(e.entry.score, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion))), i.a.createElement("div", {
						className: F.a.position
					}, `#${Object(E.a)(e.entry.position.toString())}`)))
				}))),
				G = r("./src/reddit/components/Governance/Leaderboard/index.m.less"),
				q = r.n(G);
			class $ extends i.a.Component {
				componentDidMount() {
					this.props.onFetchLeaderboardData()
				}
				render() {
					return this.props.userOptedOut ? null : i.a.createElement(x.a, {
						className: this.props.className,
						title: n.fbt._("Leaderboard (Past Month)", null, {
							hk: "4Bb1G7"
						})
					}, this.props.subreddit && i.a.createElement("div", {
						className: q.a.description
					}, n.fbt._("Scores are updated regularly based on the top contributors who earned the most {community-points-name} each month.", [n.fbt._param("community-points-name", this.props.tokenName)], {
						hk: "25uyZ3"
					})), i.a.createElement("div", {
						className: q.a.header
					}, i.a.createElement("div", {
						className: q.a.topUsers
					}, n.fbt._("top 10 users", null, {
						hk: "pe871"
					})), i.a.createElement("div", {
						className: q.a.tokens
					}, this.props.tokenName)), (() => this.props.leaderboardErrored ? i.a.createElement("div", {
						className: q.a.error
					}, i.a.createElement(O.a, {
						className: q.a.errorIcon
					})) : this.props.leaderboard ? i.a.createElement(o.Fragment, null, this.props.leaderboard.map(e => {
						switch (e.type) {
							case s.User:
								return i.a.createElement(H, {
									className: q.a.entryUser,
									entry: e,
									subredditId: this.props.subredditId,
									uniqueIdentifier: this.props.uniqueId,
									key: e.userId
								});
							case s.Divider:
								return i.a.createElement(_, {
									className: q.a.divider,
									entry: e,
									key: "divider"
								})
						}
					})) : Array.from({
						length: 8
					}).map((e, t) => i.a.createElement("div", {
						className: q.a.loading,
						key: t
					})))())
				}
			}
			const R = Object(a.c)({
				tokenName: (e, t) => {
					let {
						subredditId: r
					} = t;
					var s;
					return (null === (s = Object(I.b)(e, r)) || void 0 === s ? void 0 : s.name) || ""
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
					return Object(j.z)(e, r)
				}
			});
			t.default = Object(d.b)(R, (e, t) => {
				let {
					subredditId: r
				} = t;
				return {
					onFetchLeaderboardData: () => e(y(r))
				}
			})($)
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./node_modules/bignumber.js/bignumber.js"),
				n = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new s.BigNumber(e),
					n = new s.BigNumber(t || 1);
				return r.dividedToIntegerBy(n).toString()
			}

			function i(e, t) {
				return Object(n.b)(parseInt(o(e, t), 10))
			}

			function d(e, t) {
				const r = new s.BigNumber(e),
					n = new s.BigNumber(t || 1);
				return r.multipliedBy(n).toFixed(0)
			}

			function a(e) {
				const t = new s.BigNumber(e),
					r = new s.BigNumber("1e18");
				return t.dividedBy(r).toString()
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
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var s, n, o, i;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return g
			})), r.d(t, "o", (function() {
				return y
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "x", (function() {
				return O
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "q", (function() {
				return C
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "z", (function() {
				return N
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "n", (function() {
				return _
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "j", (function() {
				return B
			})), r.d(t, "p", (function() {
				return k
			})), r.d(t, "k", (function() {
				return L
			})), r.d(t, "r", (function() {
				return F
			})), r.d(t, "y", (function() {
				return U
			})), r.d(t, "u", (function() {
				return M
			})), r.d(t, "v", (function() {
				return H
			})), r.d(t, "b", (function() {
				return G
			})), r.d(t, "w", (function() {
				return q
			})), r.d(t, "s", (function() {
				return $
			})), r.d(t, "t", (function() {
				return R
			})), r.d(t, "g", (function() {
				return J
			})), r.d(t, "m", (function() {
				return V
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/helpers/economics/sortBadges.ts"),
				o = r("./src/reddit/helpers/richTextJson/index.ts"),
				i = r("./src/reddit/models/Badge/index.ts"),
				d = r("./src/reddit/models/Badge/managementPage.ts"),
				a = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/models/Product/index.ts"),
				u = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/comments.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				f = r("./src/reddit/selectors/gold/powerups/index.ts"),
				h = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const v = [],
				g = (e, t) => {
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
				y = (e, t) => {
					const r = g(e, t);
					return r && r.endsAt || null
				};
			var x;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(x || (x = {}));
			const O = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const r = y(e, t),
							s = Date.now();
						return r && s < r ? x.Subscribed : x.NotSubscribed
					}
					return x.DontKnow
				},
				I = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === l.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || v).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[d.a.Loyalty]: s.find(e => e.placement === i.a.First),
							[d.a.Achievement]: s.find(e => e.placement === i.a.Second),
							[d.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[d.a.Loyalty]: void 0,
						[d.a.Achievement]: void 0,
						[d.a.Cosmetic]: void 0
					}
				};

			function j(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : v
			}
			const C = (e, t, r) => {
					var n;
					if (!s.d.spBadges(e)) return v;
					return j(null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t], e.badges.models)
				},
				E = (e, t) => {
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

			function S(e, t) {
				const {
					badge: r,
					subredditId: s
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(r) && r.userId === n) return r;
				const o = e.badges.models,
					d = e.user.ownedBadges[s] || {},
					a = Object(i.e)(r) ? r.type : r.id;
				return Object.keys(d).map(e => o[e]).find(e => e && e.type === a)
			}

			function _(e, t, r, s) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					if (r === d.a.Loyalty || r === d.a.Achievement) return n.data.collections[r];
					if (r === d.a.Cosmetic && s) return n.data.collections[r][s]
				}
				return v
			}

			function P(e, t) {
				const r = _(e, t, d.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : v
			}

			function w(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === l.a.Fetched) {
					const e = r.data.collections[d.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return v
			}

			function B(e, t) {
				return _(e, t, d.a.Cosmetic, d.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const k = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === u.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const s = e[r];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: r,
							type: a.a.SavedStripe
						})
					}
				}
				if (r.status === u.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const s = e[r];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: a.a.SavedPayPal
						})
					}
				}
				return t
			};
			var T;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(T || (T = {}));
			const A = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				L = (e, t) => Object.values(e.products.models).filter(e => e.type === c.a.Membership && t && e.subredditId === t),
				D = (e, t) => {
					if (!t) return {};
					const r = A.prices;
					L(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const s = g(e, t);
					return s && s.price && s.currency && (r[s.currency] = s.price), r
				},
				F = (e, t) => {
					var r, s, n, o;
					const i = (null === (o = null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || A;
					return {
						prices: D(e, t),
						member: i.member || A.member,
						memberPlural: i.memberPlural || A.memberPlural,
						memberAlt: i.memberAlt || A.memberAlt,
						memberAltPlural: i.memberAltPlural || A.memberAltPlural,
						membership: i.membership || A.membership,
						membershipAlt: i.membershipAlt || A.membershipAlt
					}
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				M = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				H = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				G = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return;
					return e.economics.emotes[r]
				},
				q = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				$ = (e, t) => !!t && !!Object(f.a)(e, {
					subredditId: t
				}),
				R = (e, t, r) => {
					if (Object(b.b)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!z(e, t) || !(!s.d.spGiphy(e) || !W(e, r)));
					if (!Object(h.a)(e, {
							subredditId: t
						})) return !1;
					if (Object(f.f)(e, {
							subredditId: t
						})) return !0;
					if (W(e, r)) return !0;
					const n = s.d.spGiphy(e),
						o = q(e, t);
					return !!z(e, t) || n && o
				},
				W = (e, t) => {
					const r = "replyToPost" !== t && Object(p.c)(e, {
						commentId: t
					});
					if (r && Object(o.a)(r)) return !0
				},
				z = (e, t) => {
					const r = s.d.spGiphy(e),
						n = q(e, t);
					return r && n
				},
				J = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				V = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var s = r("./src/reddit/models/Gold/Powerups/index.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/actions/gold/constants.ts");
			const i = {};
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var r, s;
					switch (t.type) {
						case o.mb:
						case o.nb: {
							const {
								benefitStatuses: s,
								subredditId: n
							} = t.payload;
							if (!s) return e;
							const o = null !== (r = e[n]) && void 0 !== r ? r : {},
								i = {};
							return s.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								i[t] = r
							}), {
								...e,
								[n]: {
									...o,
									...i
								}
							}
						}
						case o.L: {
							const {
								benefitStatuses: r,
								subredditId: n
							} = t.payload, o = null !== (s = e[n]) && void 0 !== s ? s : {}, i = {};
							return r.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								i[t] = r
							}), {
								...e,
								[n]: {
									...o,
									...i
								}
							}
						}
						default:
							return e
					}
				},
				a = r("./node_modules/reselect/es/index.js");
			Object(n.a)({
				features: {
					powerupsBenefitSettings: d
				}
			});
			const c = (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? e.features.powerupsBenefitSettings[r] : null
				},
				u = (e => Object(a.a)(c, t => !!(null == t ? void 0 : t[e])))(s.a.CommentsWithGifs)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.707d399e6ff9d0c493b5.js.map