// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Leaderboard.744cac2e0cfa5c5818ec.js
// Retrieved at 4/29/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-Leaderboard"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t),
					o = new n.BigNumber(r.dividedBy(s)),
					a = new n.BigNumber("100").multipliedBy(o);
				return new n.BigNumber(a).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
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
				return q
			})), r.d(t, "j", (function() {
				return R
			})), r.d(t, "c", (function() {
				return B
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/post.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/config.ts"),
				l = r("./src/reddit/endpoints/governance/requester.ts");
			var u = r("./src/reddit/endpoints/governance/poll.ts");
			var m = r("./src/reddit/endpoints/governance/wallet.ts"),
				p = r("./src/reddit/models/Poll/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/models/Vote/index.ts"),
				g = r("./src/reddit/selectors/gov.ts"),
				f = r("./src/reddit/actions/governance/constants.ts"),
				v = r("./src/reddit/actions/governance/errorToast.ts");
			const O = Object(s.a)(f.b),
				x = Object(s.a)(f.c),
				j = Object(s.a)(f.d),
				y = Object(s.a)(f.e),
				I = Object(s.a)(f.f),
				w = (Object(s.a)(f.g), Object(s.a)(f.h), Object(s.a)(f.i)),
				k = Object(s.a)(f.j),
				E = Object(s.a)(f.k),
				N = Object(s.a)(f.l),
				C = Object(s.a)(f.r),
				_ = Object(s.a)(f.s),
				T = Object(s.a)(f.t),
				P = Object(s.a)(f.u),
				S = Object(s.a)(f.v),
				D = Object(s.a)(f.w),
				H = Object(s.a)(f.x),
				L = Object(s.a)(f.y),
				U = (e, t) => async (r, n, s) => {
					let o, {
							apiContext: a,
							gqlContext: i
						} = s,
						c = n().polls.models[e];
					if (r(E({
							pollId: e
						})), (o = c.type === p.a.GA ? await Object(u.c)(i(), e, t) : await Object(u.b)(a(), c.subredditId, e, t)).ok) {
						if (c.type === p.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							r(I({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else r(N(o.body));
						const s = n();
						if ((c = s.polls.models[e]) && Object(p.d)(c)) {
							const {
								postId: e
							} = c, t = s.posts.models[e];
							t && t.voteState === h.a.notVoted && r(Object(d.ab)(e))
						}
					} else r(k({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(v.a)(r, o.error || o.errors[0].messsage)
				}, q = (e, t) => async (r, s, d) => {
					let {
						apiContext: u
					} = d;
					r(T());
					const m = s().transfers.communityPoints.contentId || void 0,
						p = await
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
						contentId: m
					}));
					p.ok ? (r(P(Object.assign({}, p.body, {
						subredditId: e.subredditId
					}))), r(Object(i.e)({
						kind: b.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(o.a)(e.amount)), n.fbt._param("tokenName", Object(g.p)(s(), {
							subredditId: e.subredditId
						})), n.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(a.f)())) : (r(C({
						error: p.error
					})), Object(v.a)(r, p.error))
				}, R = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					t(D());
					const o = await Object(m.a)(s(), e);
					o.ok ? t(H(o.body)) : t(S({
						error: o.error
					}))
				}, B = (e, t) => async (r, s, o) => {
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
					d.ok ? (r(H({
						[t]: d.body
					})), r(Object(i.e)({
						kind: b.b.SuccessCommunity,
						text: e ? n.fbt._("You have successfully opted out of receiving {tokenName}", [n.fbt._param("tokenName", Object(g.p)(s(), {
							subredditId: t
						}))], {
							hk: "2GTi3T"
						}) : n.fbt._("You have opted into receiving {tokenName}", [n.fbt._param("tokenName", Object(g.p)(s(), {
							subredditId: t
						}))], {
							hk: "2Xx98N"
						})
					}))) : Object(v.a)(r, d.error)
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
			r.d(t, "b", (function() {
				return w
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return _
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([r.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), r.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), r.e("SubredditPremiumBadgeHovercardTooltip")]).then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/helpers/economics/sortBadges.ts"),
				g = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = r("./src/reddit/models/Badge/index.ts");
			var v = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				O = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				x = r.n(O);
			const j = "add-custom-badge-tooltip",
				y = 100,
				I = 2 * y;
			class w extends s.a.Component {
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
					if (this.props.usePlaceholder && !this.props.badges.length) return s.a.createElement("img", {
						className: Object(i.a)(x.a.image, this.props.className),
						src: "".concat(d.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(j, "-").concat(this.props.uniqueIdentifier);
					return s.a.createElement(n.Fragment, null, this.props.showAddCustom && s.a.createElement("div", {
						className: x.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, s.a.createElement("button", {
						className: x.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, s.a.createElement(g.a, {
						className: x.a.addCustom
					})), s.a.createElement(v, {
						className: x.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(this.props.badges).map(e => {
						const t = Object(f.b)(24, 24, e),
							r = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return s.a.createElement(n.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, s.a.createElement("div", {
							className: Object(i.a)(x.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(r),
							onMouseLeave: () => this.handleMouseLeave()
						}, s.a.createElement("img", {
							className: x.a.image,
							id: r,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? s.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: x.a.badgeHovercard,
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
			const k = Object(a.c)({
					badges: (e, t) => {
						let {
							subredditId: r,
							userId: n
						} = t;
						return ((e.users.appliedBadges[n] || {})[r] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: b.d.spPremium
				}),
				E = Object(a.c)({
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
				N = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.i)())
				}),
				C = Object(o.b)(k, N)(w),
				_ = Object(o.b)(E, N)(w)
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
			var n, s, o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				d = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/reddit/actions/badge.ts"),
				u = r("./src/config.ts"),
				m = r("./src/lib/constants/index.ts");

			function p(e, t) {
				return "".concat(e, "-").concat(t)
			}! function(e) {
				e[e.Divider = 0] = "Divider", e[e.User = 1] = "User"
			}(n || (n = {})),
			function(e) {
				e.Month = "points-monthly", e.Week = "points-weekly"
			}(s || (s = {}));
			var b = r("./src/reddit/endpoints/governance/requester.ts");
			var h = r("./src/lib/makeActionCreator/index.ts"),
				g = r("./src/reddit/actions/leaderboard/constants.ts");
			Object(h.a)(g.a);
			const f = Object(h.a)(g.b),
				v = Object(h.a)(g.c),
				O = Object(h.a)(g.d);

			function x(e) {
				return e.type === n.User
			}
			const j = (e, t) => async (r, s, o) => {
				let {
					apiContext: a
				} = o;
				const d = p(e, t),
					i = s(),
					c = !!i.leaderboard.models[d],
					h = !!i.leaderboard.api.pending[d];
				if (c || h) return;
				r(v({
					key: d
				}));
				const g = await
				function(e, t) {
					return Object(b.a)(e, {
						endpoint: "".concat(u.a.metaUrl, "/ratings/").concat(t.subredditId, "/").concat(t.dateRange),
						method: m.ab.GET
					}).then(e => {
						if (e.ok) {
							let t = 0;
							const r = [];
							return e.body.forEach(e => {
								const s = e.position - t;
								s > 1 && r.push({
									numUsers: s,
									type: n.Divider
								}), r.push(Object.assign({}, e, {
									type: n.User
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
				if (g.ok) {
					r(O({
						key: d,
						data: g.body.leaderboard
					}));
					const t = g.body.leaderboard.filter(x).map(e => e.userId);
					r(Object(l.l)({
						subredditId: e,
						userIds: t
					}))
				} else r(f({
					key: d,
					data: g.error
				}))
			};
			var y = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				I = r("./src/reddit/icons/svgs/Info/index.tsx"),
				w = r("./src/reddit/selectors/economics.ts"),
				k = r("./src/reddit/selectors/gov.ts"),
				E = r("./src/lib/classNames/index.ts"),
				N = r("./src/lib/prettyPrintNumber/index.ts"),
				C = r("./src/lib/timeUntil/index.ts"),
				_ = r("./src/reddit/components/Governance/Token/index.tsx"),
				T = r("./src/reddit/featureFlags/index.ts"),
				P = r("./src/reddit/icons/svgs/Settings/index.tsx"),
				S = r("./src/reddit/actions/governance/index.ts"),
				D = r("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: H
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var L = Object(i.b)(null, (e, t) => {
					let {
						subredditId: r
					} = t;
					return {
						onOptIn: () => e(Object(S.c)(!1, r))
					}
				})((function(e) {
					return d.a.createElement(D.i, {
						className: e.className,
						onClick: e.onOptIn
					}, H._("enable", null, {
						hk: "Vjjwq"
					}))
				})),
				U = (r("./node_modules/core-js/modules/es6.symbol.js"), r("./src/reddit/components/OverlayAwareTooltip/index.tsx")),
				q = r("./src/reddit/controls/Dropdown/index.tsx"),
				R = r("./src/reddit/controls/Dropdown/Row.tsx"),
				B = r("./src/reddit/components/Governance/Leaderboard/Distribution/SettingsDropdown/index.m.less"),
				A = r.n(B);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var F = function(e, t) {
				var r = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
				}
				return r
			};
			const G = Object(U.a)((function(e) {
					const {
						className: t,
						language: r,
						tokenName: n,
						subredditId: s
					} = e, a = F(e, ["className", "language", "tokenName", "subredditId"]);
					return d.a.createElement(q.a, M({
						className: Object(E.a)(e.className, A.a.container)
					}, a), d.a.createElement(R.b, {
						noIcon: !0,
						className: A.a.row,
						onClick: e.onOpenOptOutModal
					}, o.fbt._("Opt-out of receiving {tokenName}", [o.fbt._param("tokenName", n)], {
						hk: "2FTq84"
					})))
				})),
				V = Object(c.c)({
					tokenName: k.p,
					language: e => e.user.language
				});
			var W = Object(i.b)(V, (e, t) => {
					let {
						subredditId: r
					} = t;
					return {
						onOpenOptOutModal: () => e(Object(S.d)({
							subredditId: r
						}))
					}
				})(G),
				J = r("./src/reddit/components/Governance/Leaderboard/Distribution/index.m.less"),
				X = r.n(J);
			const Y = "distribution-opt-out";
			class K extends d.a.Component {
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
					const e = "".concat(Y).concat(this.props.uniqueId || ""),
						t = !!this.props.distribution && !!this.props.distribution.nextIssue && !!this.props.distribution.nextIssueAt;
					return this.props.specialMembership ? d.a.createElement("div", {
						className: Object(E.a)(this.props.className, X.a.container)
					}, d.a.createElement("div", {
						className: Object(E.a)(X.a.descriptionSmall)
					}, o.fbt._("You earn Points from your posts and comments in this subreddit. Earn enough Points and you’ll get an Achievement Badge!", null, {
						hk: "i3hUS"
					}))) : d.a.createElement("div", {
						className: Object(E.a)(this.props.className, X.a.container)
					}, d.a.createElement("div", {
						className: X.a.amount
					}, d.a.createElement("div", {
						className: Object(E.a)(X.a.description, {
							[X.a.disabledText]: !!this.props.wallet && !!this.props.wallet.optOut
						})
					}, t ? this.renderRelease() : this.renderNoRelease())), this.props.wallet && this.props.wallet.optOut && d.a.createElement(L, {
						subredditId: this.props.subreddit.id
					}), this.props.wallet && !this.props.wallet.optOut && d.a.createElement(P.a, {
						className: X.a.gear,
						id: e,
						onClick: this.state.showDropdown ? this.handleCloseDropdown : this.handleOpenDropdown
					}), this.props.wallet && !this.props.wallet.optOut && d.a.createElement(W, {
						isOpen: this.state.showDropdown,
						subredditId: this.props.subreddit.id,
						tooltipPosition: ["right", "top"],
						targetPosition: ["right", "bottom"],
						tooltipId: e
					}))
				}
				renderRelease() {
					return this.props.distribution && this.props.distribution.nextIssue && this.props.distribution.nextIssueAt ? d.a.createElement(a.Fragment, null, d.a.createElement("div", {
						className: X.a.wallet
					}, d.a.createElement(_.a, {
						className: X.a.token,
						subredditId: this.props.subreddit.id
					}), d.a.createElement("div", null, Object(N.a)(this.props.distribution.nextIssue))), d.a.createElement("div", {
						className: X.a.releasing
					}, o.fbt._("Releasing in {date}", [o.fbt._param("date", Object(C.a)(this.props.language, new Date(this.props.distribution.nextIssueAt), !0))], {
						hk: "4fQgko"
					}))) : null
				}
				renderNoRelease() {
					return d.a.createElement("div", {
						className: X.a.noRelease
					}, o.fbt._("There are currently no new distributions scheduled.", null, {
						hk: "k3Sb5"
					}))
				}
			}
			const Q = Object(c.c)({
				distribution: (e, t) => {
					let {
						subreddit: r
					} = t;
					return e.subreddits.gov.distributions[r.id]
				},
				language: e => e.user.language,
				specialMembership: T.d.spPremium,
				wallet: (e, t) => {
					let {
						subreddit: r
					} = t;
					return Object(k.g)(e, {
						subredditId: r.id
					})
				}
			});
			var z = Object(i.b)(Q)(K),
				Z = (r("./node_modules/core-js/modules/es6.regexp.to-string.js"), r("./src/reddit/components/Governance/Leaderboard/EntryDivider/index.m.less")),
				$ = r.n(Z);
			const ee = Object(c.c)({
				language: e => e.user.language
			});
			var te = Object(i.b)(ee)((function(e) {
					const t = Object(N.a)(e.entry.numUsers.toString()),
						r = 1 === e.entry.numUsers ? o.fbt._("User", null, {
							hk: "167Ce9"
						}) : o.fbt._("Users", null, {
							hk: "1pljbY"
						});
					return d.a.createElement("div", {
						className: Object(E.a)($.a.container, e.className)
					}, d.a.createElement("div", {
						className: $.a.line
					}), d.a.createElement("div", {
						className: $.a.text
					}, "".concat(t, " ").concat(r)), d.a.createElement("div", {
						className: $.a.line
					}))
				})),
				re = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ne = r("./node_modules/uuid/v4.js"),
				se = r.n(ne),
				oe = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				ae = r("./src/reddit/components/TrackingHelper/index.tsx"),
				de = r("./src/reddit/selectors/telemetry.ts"),
				ie = r("./src/reddit/components/Governance/Leaderboard/EntryUser/index.m.less"),
				ce = r.n(ie);
			const le = (e, t, r) => n => {
				const s = de.defaults(n);
				return Object.assign({
					action: e,
					correlationId: t,
					source: "meta",
					noun: "leaderboard_user_name"
				}, s, {
					actionInfo: Object.assign({}, s.actionInfo, {
						reason: r
					}),
					subreddit: de.subreddit(n)
				})
			};
			const ue = Object(c.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badgesEnabled: e => T.d.spBadges(e) || T.d.spPremium(e)
			});
			var me = Object(ae.c)(Object(i.b)(ue)((function(e) {
					const t = se()();
					return d.a.createElement(re.a, {
						className: Object(E.a)(ce.a.container, e.className, {
							[ce.a.currentUser]: e.entry.userId === e.accountId
						}),
						to: "/user/".concat(e.entry.userName, "/"),
						onClick: () => {
							e.sendEvent(le("click", t, e.entry.userName))
						},
						onMouseEnter: () => {
							e.sendEvent(le("hover", t, e.entry.userName))
						}
					}, d.a.createElement("div", {
						className: ce.a.user
					}, e.badgesEnabled && d.a.createElement("div", {
						className: ce.a.badgeContainer
					}, d.a.createElement(oe.c, {
						className: ce.a.badge,
						correlationId: t,
						subredditId: e.subredditId,
						uniqueIdentifier: e.uniqueIdentifier,
						userId: e.entry.userId
					})), d.a.createElement("div", {
						className: ce.a.username
					}, e.entry.userName)), d.a.createElement("div", {
						className: ce.a.rank
					}, d.a.createElement("div", {
						className: ce.a.points
					}, Object(N.a)(e.entry.score)), d.a.createElement("div", {
						className: ce.a.position
					}, "#".concat(Object(N.a)(e.entry.position.toString())))))
				}))),
				pe = r("./src/reddit/components/Governance/Leaderboard/index.m.less"),
				be = r.n(pe);
			class he extends d.a.Component {
				componentDidMount() {
					this.props.onFetchLeaderboardData(this.props.currentDateRange)
				}
				render() {
					return this.props.userOptedOut ? null : d.a.createElement(y.a, {
						className: this.props.className,
						title: o.fbt._("Leaderboard (Past Week)", null, {
							hk: "25pBi4"
						})
					}, this.props.subreddit && d.a.createElement(z, {
						className: be.a.distribution,
						subreddit: this.props.subreddit,
						uniqueId: this.props.uniqueId
					}), d.a.createElement("div", {
						className: be.a.header
					}, d.a.createElement("div", {
						className: be.a.topUsers
					}, o.fbt._("top 10 users", null, {
						hk: "pe871"
					})), d.a.createElement("div", {
						className: be.a.tokens
					}, this.props.tokenName)), (() => this.props.leaderboardErrored ? d.a.createElement("div", {
						className: be.a.error
					}, d.a.createElement(I.a, {
						className: be.a.errorIcon
					})) : this.props.leaderboard ? d.a.createElement(a.Fragment, null, this.props.leaderboard.map(e => {
						switch (e.type) {
							case n.User:
								return d.a.createElement(me, {
									className: be.a.entryUser,
									entry: e,
									subredditId: this.props.subredditId,
									uniqueIdentifier: this.props.uniqueId
								});
							case n.Divider:
								return d.a.createElement(te, {
									className: be.a.divider,
									entry: e
								})
						}
					})) : Array.from({
						length: 8
					}).map((e, t) => d.a.createElement("div", {
						className: be.a.loading,
						key: t
					})))())
				}
			}
			const ge = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.leaderboard.dateRangeSelection[r] || s.Week
				},
				fe = Object(c.c)({
					tokenName: k.p,
					currentDateRange: ge,
					distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
					leaderboard: (e, t) => {
						let {
							subredditId: r
						} = t;
						const n = p(r, ge(e, {
							subredditId: r
						}));
						return e.leaderboard.models[n]
					},
					leaderboardErrored: (e, t) => {
						let {
							subredditId: r
						} = t;
						const n = p(r, ge(e, {
							subredditId: r
						}));
						return !!e.leaderboard.api.error[n]
					},
					subreddit: (e, t) => e.subreddits.models[t.subredditId],
					userOptedOut: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(w.F)(e, r)
					}
				});
			t.default = Object(i.b)(fe, (e, t) => {
				let {
					subredditId: r
				} = t;
				return {
					onFetchLeaderboardData: t => e(j(r, t))
				}
			})(he)
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				i = r("./src/reddit/selectors/gov.ts");
			const c = Object(a.c)({
				tokenSymbol: i.q
			});
			t.a = Object(o.b)(c)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return s.a.createElement("img", {
					className: e.className,
					src: "".concat(d.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			}));
			var n, s = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
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
			async function d(e, t, r) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function i(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function c(e, t, r) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			}));
			var n = r("./node_modules/lodash/get.js"),
				s = r.n(n),
				o = r("./src/config.ts"),
				a = r("./src/graphql/operations/PollVote.json"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				l = (r("./src/reddit/models/Poll/index.ts"), r("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, r, n) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(r, "/votes/me/").concat(n)
				})
			}
			const m = (e, t, r) => Object(d.a)(e, Object.assign({}, a, {
				variables: {
					input: {
						postId: t,
						optionId: r
					}
				}
			}));

			function p(e, t) {
				return Object(l.a)(Object(i.a)(e, [c.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: s()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: s()(e.body, ["data", "children", 0, "data", "permalink"], "")
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
			var n = r("./src/config.ts"),
				s = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.ab.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							n = {
								[t.subredditId]: r
							};
						return Object.assign({}, e, {
							body: n
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
					endpoint: "".concat(n.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.ab.POST,
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
				return u
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
				return f
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "p", (function() {
				return O
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
				return k
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "r", (function() {
				return N
			})), r.d(t, "n", (function() {
				return C
			})), r.d(t, "k", (function() {
				return _
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts"),
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
					const n = w(e, {
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
					const r = y(e, t);
					if (r) return r.mainHeader
				},
				p = (e, t) => {
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
				h = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(a.a)(e)) {
						const t = Object(d.g)(e);
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
				f = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				v = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || i
				},
				O = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				j = (e, t) => {
					const r = N(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				I = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				w = (e, t) => {
					const r = I(e, t);
					return r && r.walletProvider
				},
				k = (e, t) => {
					const r = w(e, t),
						n = I(e, t);
					return r && r.provider || n && n.provider
				},
				E = (e, t) => {
					const r = k(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				N = (e, t) => {
					const r = w(e, t),
						n = k(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
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
				C = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = w(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
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
//# sourceMappingURL=reddit-components-Governance-Leaderboard.744cac2e0cfa5c5818ec.js.map