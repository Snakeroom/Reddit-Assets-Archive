// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.6f6aca26d93fc4420787.js
// Retrieved at 3/14/2020, 5:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-Leaderboard"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/bignumber.js/bignumber.js");

			function n(e, t) {
				const r = new s.BigNumber(e),
					n = new s.BigNumber(t),
					o = new s.BigNumber(r.dividedBy(n)),
					a = new s.BigNumber("100").multipliedBy(o);
				return new s.BigNumber(a).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/app/strings/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/post.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/config.ts"),
				l = r("./src/reddit/endpoints/governance/requester.ts");
			var u = r("./src/reddit/endpoints/governance/poll.ts");
			var p = r("./src/reddit/endpoints/governance/wallet.ts"),
				m = r("./src/reddit/models/Poll/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/models/Vote/index.ts"),
				h = r("./src/reddit/selectors/gov.ts"),
				v = r("./src/reddit/actions/governance/constants.ts"),
				O = r("./src/reddit/actions/governance/errorToast.ts");
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "i", (function() {
				return L
			})), r.d(t, "f", (function() {
				return U
			})), r.d(t, "g", (function() {
				return B
			})), r.d(t, "j", (function() {
				return q
			})), r.d(t, "c", (function() {
				return M
			}));
			const f = Object(n.a)(v.b),
				x = Object(n.a)(v.c),
				j = Object(n.a)(v.d),
				y = Object(n.a)(v.e),
				I = Object(n.a)(v.f),
				w = (Object(n.a)(v.g), Object(n.a)(v.h), Object(n.a)(v.i)),
				E = Object(n.a)(v.j),
				N = Object(n.a)(v.k),
				C = Object(n.a)(v.l),
				k = Object(n.a)(v.r),
				_ = Object(n.a)(v.s),
				P = Object(n.a)(v.t),
				T = Object(n.a)(v.u),
				S = Object(n.a)(v.v),
				D = Object(n.a)(v.w),
				H = Object(n.a)(v.x),
				L = Object(n.a)(v.y),
				U = (e, t) => async (r, s, n) => {
					let o, {
							apiContext: a,
							gqlContext: i
						} = n,
						c = s().polls.models[e];
					if (r(N({
							pollId: e
						})), (o = c.type === m.a.GA ? await Object(u.c)(i(), e, t) : await Object(u.b)(a(), c.subredditId, e, t)).ok) {
						if (c.type === m.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							r(I({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else r(C(o.body));
						const n = s();
						if ((c = n.polls.models[e]) && Object(m.d)(c)) {
							const {
								postId: e
							} = c, t = n.posts.models[e];
							t && t.voteState === g.a.notVoted && r(Object(d.X)(e))
						}
					} else r(E({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(O.a)(r, o.error || o.errors[0].messsage)
				}, B = (e, t) => async (r, n, d) => {
					let {
						apiContext: u
					} = d;
					r(P());
					const p = n().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(l.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(c.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(u(), Object.assign({}, e, {
						contentId: p
					}));
					if (m.ok) {
						const d = n().user.language;
						r(T(Object.assign({}, m.body, {
							subredditId: e.subredditId
						}))), r(Object(i.e)({
							kind: b.b.SuccessCommunity,
							text: Object(s.a)(d, "gov.transferSuccess", {
								amount: Object(o.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(h.p)(n(), {
									subredditId: e.subredditId
								})
							})
						})), t && r(Object(a.f)())
					} else r(k({
						error: m.error
					})), Object(O.a)(r, m.error)
				}, q = e => async (t, r, s) => {
					let {
						apiContext: n
					} = s;
					t(D());
					const o = await Object(p.a)(n(), e);
					o.ok ? t(H(o.body)) : t(S({
						error: o.error
					}))
				}, M = (e, t) => async (r, n, o) => {
					let {
						apiContext: a
					} = o;
					r(j());
					const d = await
					function(e, t, r) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(c.a.metaUrl, "/wallets/").concat(r, "/me")
						})
					}(a(), e, t);
					if (d.ok) {
						r(H({
							[t]: d.body
						}));
						const o = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						r(Object(i.e)({
							kind: b.b.SuccessCommunity,
							text: Object(s.a)(n().user.language, o, {
								tokenName: Object(h.p)(n(), {
									subredditId: t
								})
							})
						}))
					} else Object(O.a)(r, d.error)
				}
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var p = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([r.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), r.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), r.e("SubredditPremiumBadgeHovercardTooltip")]).then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				m = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				g = r("./src/reddit/helpers/economics/sortBadges.ts"),
				h = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = r("./src/reddit/models/Badge/index.ts");
			var O = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				f = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				x = r.n(f);
			r.d(t, "b", (function() {
				return w
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "a", (function() {
				return _
			}));
			const j = "add-custom-badge-tooltip",
				y = 100,
				I = 2 * y;
			class w extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, y)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, I)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return n.a.createElement("img", {
						className: Object(i.a)(x.a.image, this.props.className),
						src: "".concat(d.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(j, "-").concat(this.props.uniqueIdentifier);
					return n.a.createElement(s.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: x.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: x.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(h.a, {
						className: x.a.addCustom
					})), n.a.createElement(O, {
						className: x.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(g.a)(this.props.badges).map(e => {
						const t = Object(v.b)(24, 24, e),
							r = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return n.a.createElement(s.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, n.a.createElement("div", {
							className: Object(i.a)(x.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(r),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: x.a.image,
							id: r,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? n.a.createElement(p, {
							badge: e,
							correlationId: this.props.correlationId,
							className: x.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: r,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(m.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: r,
							text: e.title
						})))
					}))
				}
			}
			const E = Object(a.c)({
					badges: (e, t) => {
						let {
							subredditId: r,
							userId: s
						} = t;
						return ((e.users.appliedBadges[s] || {})[r] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: b.d.spPremium
				}),
				N = Object(a.c)({
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
				C = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.i)())
				}),
				k = Object(o.b)(E, C)(w),
				_ = Object(o.b)(N, C)(w)
		},
		"./src/reddit/components/Governance/Leaderboard/Distribution/SettingsDropdown/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2-JKQYYtQFdjMQJhVbDG_e",
				row: "q2yTYZFv4fUHEGX1rFR_m"
			}
		},
		"./src/reddit/components/Governance/Leaderboard/Distribution/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_32q2laSPP2zynVHz3RnmFA",
				description: "_2z340UMqfRQMV5dbkf27cg",
				descriptionSmall: "_2lGyUBe0npnlVdJSyTAQgH",
				disabledText: "_1VlkCIi5HF6re6HYIEjcO-",
				explanation: "_3HY9KL4hLnHIN0SXTtd7sP",
				gear: "_3UQtcgIc1btF7TSSH4q4iH",
				noRelease: "_13P3kuENlFnVlvkkfqFrwK",
				releasing: "_2PMbulVzccnHrw7DDPiqto",
				title: "_2rd8DPLmnfPIFKHbLCyR1n",
				token: "oPTB7VC8RAKk1jXQ0HRYu",
				wallet: "_1oM70Z_WtiI7ZfhIvZbyOR"
			}
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
				flexRow: "_27XFXY0Nde6JEGFwKDLXpX",
				container: "_2nlSSvS0u4wdSdhODO2_LD",
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
				datePickerContainer: "_3PZpCplhcmXmVN4-Ltw1jj",
				distribution: "_20giigIncPELawj1dJQbkq",
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
			var s, n, o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/badge.ts"),
				l = r("./src/config.ts"),
				u = r("./src/lib/constants/index.ts");

			function p(e, t) {
				return "".concat(e, "-").concat(t)
			}! function(e) {
				e[e.Divider = 0] = "Divider", e[e.User = 1] = "User"
			}(s || (s = {})),
			function(e) {
				e.Month = "points-monthly", e.Week = "points-weekly"
			}(n || (n = {}));
			var m = r("./src/reddit/endpoints/governance/requester.ts");
			var b = r("./src/lib/makeActionCreator/index.ts"),
				g = r("./src/reddit/actions/leaderboard/constants.ts");
			Object(b.a)(g.a);
			const h = Object(b.a)(g.b),
				v = Object(b.a)(g.c),
				O = Object(b.a)(g.d);

			function f(e) {
				return e.type === s.User
			}
			const x = (e, t) => async (r, n, o) => {
				let {
					apiContext: a
				} = o;
				const d = p(e, t),
					i = n(),
					b = !!i.leaderboard.models[d],
					g = !!i.leaderboard.api.pending[d];
				if (b || g) return;
				r(v({
					key: d
				}));
				const x = await
				function(e, t) {
					return Object(m.a)(e, {
						endpoint: "".concat(l.a.metaUrl, "/ratings/").concat(t.subredditId, "/").concat(t.dateRange),
						method: u.cb.GET
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
				}(a(), {
					dateRange: t,
					subredditId: e
				});
				if (x.ok) {
					r(O({
						key: d,
						data: x.body.leaderboard
					}));
					const t = x.body.leaderboard.filter(f).map(e => e.userId);
					r(Object(c.l)({
						subredditId: e,
						userIds: t
					}))
				} else r(h({
					key: d,
					data: x.error
				}))
			};
			var j = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = r("./src/reddit/featureFlags/index.ts"),
				I = r("./src/reddit/i18n/components.tsx"),
				w = r("./src/reddit/i18n/utils.ts"),
				E = r("./src/reddit/icons/svgs/Info/index.tsx"),
				N = r("./src/reddit/selectors/economics.ts"),
				C = r("./src/reddit/selectors/gov.ts"),
				k = r("./src/app/strings/index.ts"),
				_ = r("./src/lib/classNames/index.ts"),
				P = r("./src/lib/prettyPrintNumber/index.ts"),
				T = r("./src/lib/timeUntil/index.ts"),
				S = r("./src/reddit/components/Governance/Token/index.tsx"),
				D = r("./src/reddit/icons/svgs/Settings/index.tsx"),
				H = r("./src/reddit/actions/governance/index.ts"),
				L = r("./src/reddit/controls/Button/index.tsx");
			var U = Object(d.b)(null, (e, t) => {
					let {
						subredditId: r
					} = t;
					return {
						onOptIn: () => e(Object(H.c)(!1, r))
					}
				})((function(e) {
					return a.a.createElement(L.i, {
						className: e.className,
						onClick: e.onOptIn
					}, a.a.createElement(I.c, null, "enable"))
				})),
				B = (r("./node_modules/core-js/modules/es6.symbol.js"), r("./src/reddit/components/OverlayAwareTooltip/index.tsx")),
				q = r("./src/reddit/controls/Dropdown/index.tsx"),
				M = r("./src/reddit/controls/Dropdown/Row.tsx"),
				R = r("./src/reddit/components/Governance/Leaderboard/Distribution/SettingsDropdown/index.m.less"),
				A = r.n(R);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var F = function(e, t) {
				var r = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (r[s[n]] = e[s[n]])
				}
				return r
			};
			const V = Object(B.a)((function(e) {
					const {
						className: t,
						language: r,
						tokenName: s,
						subredditId: n
					} = e, o = F(e, ["className", "language", "tokenName", "subredditId"]);
					return a.a.createElement(q.a, G({
						className: Object(_.a)(e.className, A.a.container)
					}, o), a.a.createElement(M.b, {
						noIcon: !0,
						className: A.a.row,
						onClick: e.onOpenOptOutModal
					}, Object(k.a)(r, "polls.optOutModalTitle", {
						tokenName: s
					})))
				})),
				W = Object(i.c)({
					tokenName: C.p,
					language: e => e.user.language
				});
			var K = Object(d.b)(W, (e, t) => {
					let {
						subredditId: r
					} = t;
					return {
						onOpenOptOutModal: () => e(Object(H.d)({
							subredditId: r
						}))
					}
				})(V),
				J = r("./src/reddit/components/Governance/Leaderboard/Distribution/index.m.less"),
				X = r.n(J);
			const z = "distribution-opt-out";
			class Q extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showDropdown: !1
					}, this.handleOpenDropdown = () => {
						this.setState({
							showDropdown: !0
						}), document.body.addEventListener("click", this.handleCloseDropdown)
					}, this.handleCloseDropdown = () => {
						setTimeout(() => this.setState({
							showDropdown: !1
						})), document.body.removeEventListener("click", this.handleCloseDropdown)
					}
				}
				render() {
					const e = "".concat(z).concat(this.props.uniqueId || ""),
						t = !!this.props.distribution && !!this.props.distribution.nextIssue && !!this.props.distribution.nextIssueAt;
					return this.props.specialMembership ? a.a.createElement("div", {
						className: Object(_.a)(this.props.className, X.a.container)
					}, a.a.createElement("div", {
						className: Object(_.a)(X.a.descriptionSmall)
					}, a.a.createElement(I.c, null, "You earn Karma Points from your posts and comments in this subreddit. Earn enough Karma Points and you’ll get an Achievement Badge! Scores are updated once a week."))) : a.a.createElement("div", {
						className: Object(_.a)(this.props.className, X.a.container)
					}, a.a.createElement("div", {
						className: X.a.amount
					}, a.a.createElement("div", {
						className: Object(_.a)(X.a.description, {
							[X.a.disabledText]: !!this.props.wallet && !!this.props.wallet.optOut
						})
					}, t ? this.renderRelease() : this.renderNoRelease())), this.props.wallet && this.props.wallet.optOut && a.a.createElement(U, {
						subredditId: this.props.subreddit.id
					}), this.props.wallet && !this.props.wallet.optOut && a.a.createElement(D.a, {
						className: X.a.gear,
						id: e,
						onClick: this.state.showDropdown ? this.handleCloseDropdown : this.handleOpenDropdown
					}), this.props.wallet && !this.props.wallet.optOut && a.a.createElement(K, {
						isOpen: this.state.showDropdown,
						subredditId: this.props.subreddit.id,
						tooltipPosition: ["right", "top"],
						targetPosition: ["right", "bottom"],
						tooltipId: e
					}))
				}
				renderRelease() {
					return this.props.distribution && this.props.distribution.nextIssue && this.props.distribution.nextIssueAt ? a.a.createElement(o.Fragment, null, a.a.createElement("div", {
						className: X.a.wallet
					}, a.a.createElement(S.a, {
						className: X.a.token,
						subredditId: this.props.subreddit.id
					}), a.a.createElement("div", null, Object(P.a)(this.props.distribution.nextIssue))), a.a.createElement("div", {
						className: X.a.releasing
					}, Object(k.a)(this.props.language, "sidebar.gov.tokensReleasing", {
						date: Object(T.a)(this.props.language, new Date(this.props.distribution.nextIssueAt), !0)
					}))) : null
				}
				renderNoRelease() {
					return a.a.createElement("div", {
						className: X.a.noRelease
					}, a.a.createElement(I.c, null, "There are currently no new distributions scheduled."))
				}
			}
			const Z = Object(i.c)({
				distribution: (e, t) => {
					let {
						subreddit: r
					} = t;
					return e.subreddits.gov.distributions[r.id]
				},
				language: e => e.user.language,
				specialMembership: y.d.spPremium,
				wallet: (e, t) => {
					let {
						subreddit: r
					} = t;
					return Object(C.g)(e, {
						subredditId: r.id
					})
				}
			});
			var Y = Object(d.b)(Z)(Q),
				$ = (r("./node_modules/core-js/modules/es6.regexp.to-string.js"), r("./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less")),
				ee = r.n($);
			const te = Object(i.c)({
				language: e => e.user.language
			});
			var re = Object(d.b)(te)((function(e) {
					const t = Object(P.a)(e.entry.numUsers.toString()),
						r = 1 === e.entry.numUsers ? Object(k.a)(e.language, "gov.leaderboard.users.singular") : Object(k.a)(e.language, "gov.leaderboard.users.plural");
					return a.a.createElement("div", {
						className: Object(_.a)(ee.a.container, e.className)
					}, a.a.createElement("div", {
						className: ee.a.line
					}), a.a.createElement("div", {
						className: ee.a.text
					}, "".concat(t, " ").concat(r)), a.a.createElement("div", {
						className: ee.a.line
					}))
				})),
				se = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ne = r("./node_modules/uuid/v4.js"),
				oe = r.n(ne),
				ae = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				de = r("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = r("./src/reddit/selectors/telemetry.ts"),
				ce = r("./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less"),
				le = r.n(ce);
			const ue = (e, t, r) => s => {
				const n = ie.defaults(s);
				return Object.assign({
					action: e,
					correlationId: t,
					source: "meta",
					noun: "leaderboard_user_name"
				}, n, {
					actionInfo: Object.assign({}, n.actionInfo, {
						reason: r
					}),
					subreddit: ie.subreddit(s)
				})
			};
			const pe = Object(i.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badgesEnabled: e => y.d.spBadges(e) || y.d.spPremium(e)
			});
			var me = Object(de.b)(Object(d.b)(pe)((function(e) {
					const t = oe()();
					return a.a.createElement(se.a, {
						className: Object(_.a)(le.a.container, e.className, {
							[le.a.currentUser]: e.entry.userId === e.accountId
						}),
						to: "/user/".concat(e.entry.userName, "/"),
						onClick: () => {
							e.sendEvent(ue("click", t, e.entry.userName))
						},
						onMouseEnter: () => {
							e.sendEvent(ue("hover", t, e.entry.userName))
						}
					}, a.a.createElement("div", {
						className: le.a.user
					}, e.badgesEnabled && a.a.createElement("div", {
						className: le.a.badgeContainer
					}, a.a.createElement(ae.c, {
						className: le.a.badge,
						correlationId: t,
						subredditId: e.subredditId,
						uniqueIdentifier: e.uniqueIdentifier,
						userId: e.entry.userId
					})), a.a.createElement("div", {
						className: le.a.username
					}, e.entry.userName)), a.a.createElement("div", {
						className: le.a.rank
					}, a.a.createElement("div", {
						className: le.a.points
					}, Object(P.a)(e.entry.score)), a.a.createElement("div", {
						className: le.a.position
					}, "#".concat(Object(P.a)(e.entry.position.toString())))))
				}))),
				be = r("./src/reddit/components/Governance/Leaderboard/index.m.less"),
				ge = r.n(be);
			class he extends a.a.Component {
				componentDidMount() {
					this.props.onFetchLeaderboardData(this.props.currentDateRange)
				}
				render() {
					return this.props.userOptedOut ? null : a.a.createElement(j.a, {
						className: this.props.className,
						title: this.props.specialMembership ? Object(w.c)("Top Karma Earners (Last Week)") : Object(w.c)("Leaderboard (Past Week)")
					}, this.props.subreddit && a.a.createElement(Y, {
						className: ge.a.distribution,
						subreddit: this.props.subreddit,
						uniqueId: this.props.uniqueId
					}), a.a.createElement("div", {
						className: ge.a.header
					}, a.a.createElement("div", {
						className: ge.a.topUsers
					}, a.a.createElement(I.c, null, "top 10 users")), a.a.createElement("div", {
						className: ge.a.tokens
					}, this.props.tokenName)), (() => this.props.leaderboardErrored ? a.a.createElement("div", {
						className: ge.a.error
					}, a.a.createElement(E.a, {
						className: ge.a.errorIcon
					})) : this.props.leaderboard ? a.a.createElement(o.Fragment, null, this.props.leaderboard.map(e => {
						switch (e.type) {
							case s.User:
								return a.a.createElement(me, {
									className: ge.a.entryUser,
									entry: e,
									subredditId: this.props.subredditId,
									uniqueIdentifier: this.props.uniqueId
								});
							case s.Divider:
								return a.a.createElement(re, {
									className: ge.a.divider,
									entry: e
								})
						}
					})) : Array.from({
						length: 8
					}).map((e, t) => a.a.createElement("div", {
						className: ge.a.loading,
						key: t
					})))())
				}
			}
			const ve = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.leaderboard.dateRangeSelection[r] || n.Week
				},
				Oe = Object(i.c)({
					tokenName: C.p,
					currentDateRange: ve,
					distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
					leaderboard: (e, t) => {
						let {
							subredditId: r
						} = t;
						const s = p(r, ve(e, {
							subredditId: r
						}));
						return e.leaderboard.models[s]
					},
					leaderboardErrored: (e, t) => {
						let {
							subredditId: r
						} = t;
						const s = p(r, ve(e, {
							subredditId: r
						}));
						return !!e.leaderboard.api.error[s]
					},
					specialMembership: y.d.spPremium,
					subreddit: (e, t) => e.subreddits.models[t.subredditId],
					userOptedOut: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(N.D)(e, r)
					}
				});
			t.default = Object(d.b)(Oe, (e, t) => {
				let {
					subredditId: r
				} = t;
				return {
					onFetchLeaderboardData: t => e(x(r, t))
				}
			})(he)
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				i = r("./src/reddit/selectors/gov.ts");
			const c = Object(a.c)({
				tokenSymbol: i.q
			});
			t.a = Object(o.b)(c)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return n.a.createElement("img", {
					className: e.className,
					src: "".concat(d.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			}));
			var s, n = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case s.Ethereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function d(e, t, r) {
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
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(s || (s = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "a", (function() {
				return m
			}));
			var s = r("./node_modules/lodash/get.js"),
				n = r.n(s),
				o = r("./src/config.ts"),
				a = r("./src/graphql/operations/PollVote.json"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				l = (r("./src/reddit/models/Poll/index.ts"), r("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, r, s) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(r, "/votes/me/").concat(s)
				})
			}
			const p = (e, t, r) => Object(d.a)(e, Object.assign({}, a, {
				variables: {
					input: {
						postId: t,
						optionId: r
					}
				}
			}));

			function m(e, t) {
				return Object(l.a)(Object(i.a)(e, [c.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: n()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: n()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/config.ts"),
				n = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: n.cb.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							s = {
								[t.subredditId]: r
							};
						return Object.assign({}, e, {
							body: s
						})
					}
					return e
				})
			}

			function d(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: n.cb.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
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
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/platform.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const d = new Set(["pollstest", "whatssnoo"]),
				i = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				c = e => d.has((Object(o.e)(e) || "").toLowerCase()) || i.has((Object(o.e)(e) || "").toLowerCase()) && Object(n.c)(e, {
					experimentEligibilitySelector: a.G,
					experimentName: s.ab
				}) === s.hb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "p", (function() {
				return f
			})), r.d(t, "q", (function() {
				return x
			})), r.d(t, "o", (function() {
				return j
			})), r.d(t, "l", (function() {
				return y
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "s", (function() {
				return w
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "r", (function() {
				return C
			})), r.d(t, "n", (function() {
				return k
			})), r.d(t, "k", (function() {
				return _
			}));
			var s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				n = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/reddit/featureFlags/index.ts"),
				a = r("./src/reddit/selectors/experiments/pollsGA.ts"),
				d = r("./src/reddit/selectors/postCreations.ts");
			const i = [],
				c = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const s = w(e, {
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
				p = (e, t) => {
					const r = y(e, t);
					if (r) return r.mainHeader
				},
				m = (e, t) => {
					const r = y(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				b = (e, t) => {
					const r = y(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : c
				},
				g = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					if (Object(a.a)(e)) {
						const t = Object(d.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
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
				O = (e, t) => {
					const r = Object(s.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || i
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				j = (e, t) => {
					const r = C(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				I = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				w = (e, t) => {
					const r = I(e, t);
					return r && r.walletProvider
				},
				E = (e, t) => {
					const r = w(e, t),
						s = I(e, t);
					return r && r.provider || s && s.provider
				},
				N = (e, t) => {
					const r = E(e, t);
					return r === n.a.Ethereum || r === n.a.Rinkeby
				},
				C = (e, t) => {
					const r = w(e, t),
						s = E(e, t);
					if (r && !r.inTransition && s === n.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const o = r && r.extra && r.extra.contracts,
						a = o && o.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				k = (e, t) => {
					let {
						subredditId: r
					} = t;
					const s = w(e, {
						subredditId: r
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				_ = (e, t) => {
					const r = I(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=reddit-components-Governance-Leaderboard.6f6aca26d93fc4420787.js.map