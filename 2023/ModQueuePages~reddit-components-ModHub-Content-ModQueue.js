// https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.b0d38707ac2e8dde833f.js
// Retrieved at 2/7/2023, 5:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages~reddit-components-ModHub-Content-ModQueue"], {
		"./src/reddit/actions/modQueue/realtime.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "b", (function() {
				return L
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = (s("./src/redditGQL/operations/LastModActionInSubreddit.json"), s("./src/redditGQL/operations/ModActivitySummaryByID.json")),
				r = s("./src/redditGQL/operations/SingleCommentById.json"),
				a = s("./src/redditGQL/operations/SinglePostInfoById.json");
			var i = s("./src/lib/initializeClient/installReducer.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/actions/comment/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/users.ts"),
				u = s("./src/reddit/endpoints/redditor/index.ts"),
				p = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				b = s("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				h = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				f = s("./src/reddit/helpers/isPost.ts"),
				g = s("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				x = s("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				k = s("./src/reddit/actions/modQueue/constants.ts");
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.o:
							return t.payload;
						default:
							return e
					}
				},
				O = s("./src/reddit/reducers/pages/modHub/index.ts"),
				_ = s("./src/reddit/selectors/modQueue.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				E = s("./src/redditGQL/types.ts");
			Object(i.a)({
				pages: {
					modHub: O.a
				}
			}), Object(i.a)({
				features: {
					modActivitySummaries: g.a
				}
			}), Object(i.a)({
				features: {
					realtimeModqueue: x.a
				}
			}), Object(i.a)({
				features: {
					realtimeUpdateAnimationId: v
				}
			});
			const y = Object(d.a)(k.l),
				j = e => async (t, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = await ((e, t) => Object(n.a)(e, {
							...o,
							variables: t
						}))(a(), {
							id: e
						}),
						d = Object(b.a)(i.body.data.subredditInfoById);
					t(y(d))
				}, w = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					e && t(j(e))
				}, S = Object(d.a)(k.m), I = (e, t) => {
					const s = (e => {
							var t, s;
							const {
								subredditName: n,
								pageName: o
							} = (null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || {}, r = (null === (s = e.platform.currentPage) || void 0 === s ? void 0 : s.queryParams) || {};
							return {
								page: (null == r ? void 0 : r.page) || "1",
								pageName: o,
								subredditName: n || (null == r ? void 0 : r.subreddit),
								queryParams: r
							}
						})(e),
						n = Object(_.d)(e, s);
					return null == n ? void 0 : n.includes(t)
				}, N = [E.z.ApproveComment, E.z.ApproveLink, E.z.RemoveComment, E.z.RemoveLink, E.z.SpamComment, E.z.SpamLink], R = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var r, a;
					const {
						moderatorID: i,
						targetID: d,
						action: l
					} = null === (r = null == e ? void 0 : e.subscribe) || void 0 === r ? void 0 : r.data, c = s(), p = Object(C.k)(c), b = N.includes(l), h = i === p, f = I(c, d);
					if (!b || h || !f) return;
					const g = await Object(u.b)(o(), {
						id: i
					}) || (null === (a = Object(C.Bb)(c, {
						userId: i
					})) || void 0 === a ? void 0 : a.username);
					g && t(Object(m.z)(g)), t(S({
						targetID: d
					}))
				}, T = Object(d.a)(k.p), P = Object(d.a)(k.o), L = e => async (t, s, o) => {
					let {
						gqlContext: i
					} = o;
					var d, m, u, b, g, x;
					const k = Object(f.a)(e),
						v = s(),
						O = null === (m = null === (d = null == v ? void 0 : v.features) || void 0 === d ? void 0 : d.realtimeModqueue) || void 0 === m ? void 0 : m.toUpdate.includes(e),
						_ = I(v, e);
					if (!O || !_) return;
					const C = k ? () => ((e, t) => Object(n.a)(e, {
							...a,
							variables: t
						}))(i(), {
							id: e
						}) : () => ((e, t) => Object(n.a)(e, {
							...r,
							variables: t
						}))(i(), {
							id: e
						}),
						E = await C();
					if (E.ok) {
						if (k) {
							const s = null === (b = null === (u = null == E ? void 0 : E.body) || void 0 === u ? void 0 : u.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(c.Q)({
								[e]: Object(h.f)(s)
							}))
						} else {
							const s = null === (x = null === (g = null == E ? void 0 : E.body) || void 0 === g ? void 0 : g.data) || void 0 === x ? void 0 : x.commentById;
							t(Object(l.j)({
								[e]: Object(p.a)(s)
							}))
						}
						t(P(e)), t(T({
							targetID: e
						}))
					}
				}
		},
		"./src/reddit/components/CCM/ModPreviousActions/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2-D4Vessy5Hd1e5HAU1PK3",
				wrapperTitle: "aC6WYpmVvQIF_BZRtMI_W",
				row: "ax8JnexGOa4WYNYKwXlQs",
				icon: "_1fiz4BfaOlncADi00qAx_l",
				userIconWrapper: "_1ChqLpIvObEfBbb4d-hyah",
				userIcon: "_3nEX0mG3UGhbY0hR0Kqaag",
				details: "_3jKisheiLDnZzH5J_qln3x",
				title: "_1-LXaYXcvGUA9hhrrw587d",
				meta: "_3w_F6oDd1-ZDKgp3jo94ew",
				time: "_2820zMw8REXxmaotvSTjqt",
				userlink: "_2622vu9WjymZhKkDq78CfF"
			}
		},
		"./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less": function(e, t, s) {
			e.exports = {
				BulkActionCheckbox: "_3iI16gsT5wEWtruoBxoOtR",
				bulkActionCheckbox: "_3iI16gsT5wEWtruoBxoOtR",
				UnthreadedCommentContainer: "sXloQX7r47Wzsk9BzGm2",
				unthreadedCommentContainer: "sXloQX7r47Wzsk9BzGm2",
				CommentColumn: "_1Xweq4o-zB3i3DcXmGzzCo",
				commentColumn: "_1Xweq4o-zB3i3DcXmGzzCo",
				ModToolsFlatlist: "vP5hkZOVsSDk7GDKAq7OO",
				modToolsFlatlist: "vP5hkZOVsSDk7GDKAq7OO",
				CommentContentWrapper: "-ejG1vHwBmlz_5bhISopO",
				commentContentWrapper: "-ejG1vHwBmlz_5bhISopO",
				CommentParentWrapper: "_3mX7brFt-u4nDJSVh-jpOe",
				commentParentWrapper: "_3mX7brFt-u4nDJSVh-jpOe",
				LeftRail: "Z9hmG99TfBJCAbBf-qUN5",
				leftRail: "Z9hmG99TfBJCAbBf-qUN5",
				hasBorder: "_1XsRq0m2kXDelxfbhz55U6",
				VoteColumn: "raHWe-JvKoiuubD1zI79q",
				voteColumn: "raHWe-JvKoiuubD1zI79q",
				Votes: "EJ8j2TI5xV293AHVFV98I",
				votes: "EJ8j2TI5xV293AHVFV98I",
				score: "_1dQ0ZDSConSfUQpPh7-fct",
				ParentPostTitle: "_3lXem8Q27IuhplBpcrbkOv",
				parentPostTitle: "_3lXem8Q27IuhplBpcrbkOv",
				Component: "_3WdgziOPlXBwthdefEr85r",
				component: "_3WdgziOPlXBwthdefEr85r",
				isBanned: "_34REldWOs0k5_KaRonS2V5",
				isReported: "sYxWb5PNRmW4dH0vC6Qiy"
			}
		},
		"./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less": function(e, t, s) {
			e.exports = {
				VoteSpacer: "_3SDIICEtoL7xtFw7iXPmd4",
				voteSpacer: "_3SDIICEtoL7xtFw7iXPmd4",
				ContentWrapper: "_3kLHiyeJw88pJ2rFPeO-h_",
				contentWrapper: "_3kLHiyeJw88pJ2rFPeO-h_",
				Meta: "TmC-aUr9G4BhD7f1fazLW",
				meta: "TmC-aUr9G4BhD7f1fazLW",
				CommentParentWrapper: "XNRBSCtZVEKlAOHUTl8fv",
				commentParentWrapper: "XNRBSCtZVEKlAOHUTl8fv",
				CommentContentWrapper: "_3CTfjjt3pW3hsmgbSddrW6",
				commentContentWrapper: "_3CTfjjt3pW3hsmgbSddrW6",
				Component: "_3Pul81GjcQcqXueoAqkS0P",
				component: "_3Pul81GjcQcqXueoAqkS0P",
				realtimeAnimation: "k1q-8FmYc8uNpQ3l8LyzP",
				realtimeFade: "FHiLBdKtJWOSipvihyEvn",
				isNightMode: "_30zL0aoM9O-6UtalCfZ_Kx",
				realtimeFadeNight: "_1svg6QVu96_c0B_a6jF7pt",
				realtimeUpdated: "aYn8shFTxZXAFEmeMl5fv"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asTooltip.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/preferences.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				C = s.n(_);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = "view--layout--FUE",
				j = "LayoutSwitch--picker",
				w = Object(d.a)(g.a),
				S = {
					[b.d.Card]: function(e) {
						return r.a.createElement(k.a, E({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return r.a.createElement(k.a, E({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return r.a.createElement(k.a, E({}, e, {
							name: "view_compact"
						}))
					}
				},
				I = {
					[b.d.Card]: () => n.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => n.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => n.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => n.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				N = Object(h.v)(),
				R = Object(i.c)({
					dropdownIsOpen: Object(O.b)(j),
					postLayout: h.U,
					redditStyle: h.E
				}),
				T = Object(a.b)(R, e => ({
					onListingLayoutChange: (t, s) => e(Object(m.x)(t, s)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: j
					}))
				}));
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: o
						} = this.props;
						t ? t(e) : (s(e, o), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(v.cb)(t),
							subreddit: Object(v.lb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: o
						} = this.props, a = s || b.e[o], i = e === a, d = S[e], c = I[e];
						return r.a.createElement(x.b, E({}, t, {
							className: Object(l.a)(C.a.LayoutItem, {
								[C.a.selected]: i,
								[C.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: c(),
							iconWrapperClassName: C.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: C.a.LayoutItemTextClassName
						}), r.a.createElement(d, {
							className: C.a.LayoutIcon,
							onClick: i ? void 0 : n,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(w, E({}, e, {
							className: C.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: C.a.DropdownRow,
							rowIconClassName: C.a.DropdownRowIcon,
							rowSelectedClassName: C.a.DropdownRowSelected,
							tooltipId: j
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, o = t || b.e[n];
					return r.a.createElement("div", {
						className: Object(l.a)(C.a.Container, e),
						id: y
					}, r.a.createElement("div", {
						className: C.a.DropdownContainer,
						onClick: s
					}, this.renderItem(o, {
						id: j,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), r.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = N(T(Object(p.c)(Object(c.a)(P))))
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "c", (function() {
				return v
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				i = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				m = s.n(c);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case l.g.AntiEvilOps:
					case l.g.AutomodFiltered:
					case l.g.CommunityOps:
					case l.g.ContentTakedown:
					case l.g.CopyrightTakedown:
					case l.g.Reddit:
						t = a.a;
						break;
					case l.g.AuthorDeleted:
					case l.g.Author:
						t = d.b;
						break;
					case l.g.Moderator:
						t = i.a;
						break;
					default:
						t = a.a
				}
				return r.a.createElement(t, {
					className: m.a.icon
				})
			}, b = e => {
				let t;
				switch (e) {
					case l.g.AntiEvilOps:
					case l.g.AutomodFiltered:
					case l.g.CommunityOps:
					case l.g.ContentTakedown:
					case l.g.CopyrightTakedown:
					case l.g.Reddit:
						t = "clear_fill";
						break;
					case l.g.AuthorDeleted:
					case l.g.Author:
						t = "delete_fill";
						break;
					case l.g.Moderator:
						t = "mod_fill";
						break;
					default:
						t = "clear_fill"
				}
				return t
			}, h = () => u._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [u._param("=User Agreement", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("User Agreement", null, {
				hk: "3MHgRl"
			}))), u._param("=Content Policy", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), f = () => u._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [u._param("=User Agreement", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("User Agreement", null, {
				hk: "yMHtU"
			}))), u._param("=Content Policy", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), g = (e, t) => {
				switch (e) {
					case l.g.AntiEvilOps:
						return u._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case l.g.Author:
						return u._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case l.g.AuthorDeleted:
						return u._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case l.g.AutomodFiltered:
						return u._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case l.g.CommunityOps:
						return u._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case l.g.ContentTakedown:
						return u._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case l.g.CopyrightTakedown:
						return u._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case l.g.Moderator:
						return u._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [u._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case l.g.Reddit:
						return u._("Sorry, this post was removed by Reddit's spam filters.", null, {
							hk: "10ItEu"
						});
					default:
						return u._("Sorry, this post has been removed", null, {
							hk: "11sG9V"
						})
				}
			}, x = (e, t) => {
				switch (e) {
					case l.g.AntiEvilOps:
						return r.a.createElement(h, null);
					case l.g.AuthorDeleted:
					case l.g.Author:
						return u._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case l.g.AutomodFiltered:
						return u._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [u._param("=[subreddit name]", r.a.createElement("a", {
							className: m.a.link,
							href: `${n.a.redditUrl}/r/${t}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, u._("{subreddit name}", [u._param("subreddit name", `r/${t}`)], {
							hk: "2o22vl"
						})))], {
							hk: "3dxuEW"
						});
					case l.g.CommunityOps:
						return u._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case l.g.ContentTakedown:
						return r.a.createElement(f, null);
					case l.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case l.g.Moderator:
						return u._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case l.g.Reddit:
					default:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, k = (e, t, s) => {
				switch (e) {
					case l.g.AntiEvilOps:
						return u._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case l.g.Author:
						return u._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case l.g.AuthorDeleted:
						return u._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case l.g.AutomodFiltered:
						return u._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case l.g.CommunityOps:
						return u._("This post was removed by Reddit admin, u/{username}.", [u._param("username", t)], {
							hk: "34nHWu"
						});
					case l.g.ContentTakedown:
						return u._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case l.g.CopyrightTakedown:
						return u._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case l.g.Moderator:
						return u._("This post was removed by r/{subredditName} moderator, u/{username}.", [u._param("subredditName", s), u._param("username", t)], {
							hk: "270bcn"
						});
					case l.g.Reddit:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, v = e => {
				switch (e) {
					case l.g.AntiEvilOps:
						return r.a.createElement(h, null);
					case l.g.AuthorDeleted:
					case l.g.Author:
						return u._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case l.g.AutomodFiltered:
						return u._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case l.g.CommunityOps:
						return u._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [u._param("=just ask", r.a.createElement("a", {
							className: m.a.link,
							href: `${n.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, u._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case l.g.ContentTakedown:
						return r.a.createElement(f, null);
					case l.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case l.g.Moderator:
						return u._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case l.g.Reddit:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3S3oDL"
						});
					default:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "uKfHK"
						})
				}
			}
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2qFtoxD1OfFOBkQIQeIP5N",
				opened: "_3kWeXZJizg6u4Rpq5Bx2k6",
				openable: "_1jr1ZpXLdZNEfWwHwMp3UW",
				filteredWrapper: "_1aoTzKKtmlGCr-UYW5QI5O",
				filteredRow: "_eBNIEsnbYySvkxjmpt2P",
				reportedWrapper: "_1rfFSNr23RcUWm7d90DpDo",
				reportMeta: "_32zOxnfn5FxzpA0vNAYP7J",
				ignoreButton: "_3qPfB3L3JEpdPsa2KJ6I6Y",
				ignoreButtonIcon: "_2xeI0-KXBryv89ds5re0ac",
				reported: "_37f_VPQZEbIxZBhfy_wkzt",
				icon: "OYsuhocczx0FWqSu4etye",
				approved: "_3PA1NUdBncNEoWXl9e53aE",
				statusText: "_3trW-r5LnijGIrjgDF1u2M",
				status: "_3Q6W_eSDsN-BhormvQBcRr",
				snoozabledButton: "_3Rixx0Z51qJ71wGmQ8UtQj",
				userIconWrapper: "_3vnCHVExwDbhdlwSh9BV9k",
				userIcon: "_1O-L18qAEJqcxeYP7bE4mK",
				snoozableDropdown: "_3L6lZrroGMf7wnI2DFJDJx",
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT",
				caretButton: "_1iROd0ZxfCEcEidNiygaYB",
				caretIcon: "-vF-jMhpa_XhPJ_ntG1Hv",
				userlink: "_2iRjlf0DdO9rVaTZpfwvHA"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "zF_-R5xzOOncUiSyzLSC9",
				actionBar: "NMY-KfFuIWlYboZZZ8EcY",
				overflowButton: "zctszRbdSXb3WEChmk-o9",
				button: "_3W9WNfkd8zxnn_VGjf4UnY",
				approve: "_3mPdPTYWWZwCYwh4wijZvJ",
				icon: "_1H-LK0KAgKuxT0BkJSN-51",
				overflowHeading: "_2DEP4U6JV7ZNOcbW94l3tb",
				dropdownRow: "_1dFDaRKdCA0DGOYecpQXWF"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Ae
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/modQueue/realtime.ts"),
				c = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				m = s("./src/reddit/components/ReportFlow/new.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				b = s("./src/reddit/helpers/isPost.ts"),
				h = s("./src/reddit/helpers/trackers/modTools.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				x = s("./src/reddit/hooks/useTracking.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/actions/comment/moderation.ts"),
				_ = s("./src/reddit/actions/modal.ts"),
				C = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/actions/postFlair.ts"),
				y = s("./src/reddit/actions/removalReasons/index.ts"),
				j = s("./src/reddit/selectors/activeModal.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {}));
			const I = e => e.isRemoved && (!e.bannedBy || e.bannedBy === d.m) || !e.isRemoved && Object(S.a)(e) ? n.FILTERED : e.isRemoved || Object(b.b)(e) && [v.g.AntiEvilOps, v.g.CommunityOps, v.g.ContentTakedown, v.g.CopyrightTakedown, v.g.Reddit].indexOf(e.removedByCategory) > -1 ? n.REMOVED : e.isSpam ? n.SPAM : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : n.UNMODERATED;
			var N = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				R = s.n(N),
				T = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/constants/icons.ts"),
				L = s("./src/reddit/actions/gold/modals.ts"),
				D = s("./src/reddit/actions/reportFlow/index.ts"),
				A = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				F = s("./src/reddit/components/OverflowMenu/index.tsx"),
				M = s("./src/reddit/constants/modals.ts"),
				B = s("./src/reddit/controls/Dropdown/Row.tsx"),
				z = s("./src/reddit/helpers/correlationIdTracker.ts"),
				U = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/trackers/gild.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				q = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				H = s("./src/reddit/selectors/user.ts");
			const V = (e, t) => Object(h.c)(t, e),
				Z = (e, t) => e ? t ? o.fbt._("Unlock Comments", null, {
					hk: "zGuti"
				}) : o.fbt._("Lock Comments", null, {
					hk: "1QO9cp"
				}) : t ? o.fbt._("Unlock thread", null, {
					hk: "SqzQU"
				}) : o.fbt._("Lock thread", null, {
					hk: "3drB04"
				});
			var G = e => {
					let {
						content: t,
						hostPostData: s,
						listingKey: n,
						moderatorPermissions: l
					} = e;
					var c, m;
					const u = Object(x.a)(),
						p = Object(i.d)(),
						g = Object(b.b)(t),
						v = Object(i.e)(H.k),
						E = Object(i.e)(H.P),
						y = Object(i.e)(q.b),
						j = Object(U.a)(l),
						w = g ? f.k : V,
						S = t.authorId === v,
						I = E && S,
						N = (null === (c = t.distinguishType) || void 0 === c ? void 0 : c.toLowerCase()) === d.J.ADMIN,
						G = (null === (m = t.distinguishType) || void 0 === m ? void 0 : m.toLowerCase()) === d.J.MODERATOR,
						X = Object(r.useCallback)(() => {
							const e = g ? C.D : O.c;
							p(e(t.id));
							const s = t.isLocked ? "unlock" : "lock";
							u(g ? w(t.id, s) : Object(h.j)(t.id, s, "mod_menu"))
						}, [w, u, p, t, g]),
						K = Object(r.useCallback)(e => {
							u(Object(f.k)(t.id, e, "post", n, s, void 0))
						}, [u, n, s, t]),
						J = Object(r.useCallback)(() => {
							var e;
							const s = t.isStickied ? "unsticky" : "sticky";
							g ? (p(Object(C.gb)(t.id)), u(Object(h.n)(s, t.id))) : (p(Object(O.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), u(Object(h.j)(t.id, s, "mod_menu")))
						}, [u, p, t, g]),
						Y = Object(r.useCallback)(() => {
							g && (p(Object(C.I)(t.id)), u(Object(h.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [u, p, t, g]),
						$ = Object(r.useCallback)(() => {
							g && (p(Object(C.F)(t.id)), Object(h.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [p, t, g]),
						ee = Object(r.useCallback)(() => {
							g && (p(Object(_.i)(M.a.CROWD_CONTROL)), p(Object(C.t)(t.id)))
						}, [p, t, g]),
						te = Object(i.e)(e => Object(Q.m)(e, {
							commentId: t.id
						})),
						se = Object(r.useCallback)(() => {
							const e = g ? t.permalink : te;
							e && (p(Object(C.C)(e)), g ? K("copy") : u(Object(h.j)(t.id, "share", "mod_menu")))
						}, [K, p, t, g, te, u]),
						ne = Object(r.useCallback)(async () => {
							if (!g) return;
							const e = Object(z.d)(z.a.GildingFlow, !0);
							p(Object(L.d)({
								awardId: null == y ? void 0 : y.id,
								correlationId: e,
								thingId: t.id
							})), u(Object(W.clickGildEvent)(t.id))
						}, [u, p, t, y, g]),
						oe = Object(r.useCallback)(() => {
							p(Object(D.c)(t.id)), g ? K("report") : u(Object(h.j)(t.id, "report", "mod_menu"))
						}, [K, p, t, g, u]),
						re = Object(r.useCallback)(() => {
							var e;
							g && (p(Object(C.db)(t.id, !t.hidden, !1, !0)), K((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [K, p, t, g]),
						ae = Object(r.useCallback)(() => {
							const e = g ? C.S : O.e;
							p(e(t.id, !0)), u(g ? Object(h.n)("spam", t.id) : Object(h.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [u, p, t, g]),
						ie = Object(r.useCallback)(e => {
							const s = g ? C.u : O.b;
							p(s(t.id, e));
							const n = e === d.J.ADMIN ? "distinguish_as_admin" : e === d.J.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							u(Object(h.j)(t.id, n, "mod_menu"))
						}, [p, t, g, u]);
					return a.a.createElement(F.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: R.a.overflowButton,
						icon: a.a.createElement(k.a, {
							name: P.a.overflow_horizontal,
							isFilled: !0
						})
					}, a.a.createElement("h6", {
						className: Object(T.a)("text-neutral-content-weak", R.a.overflowHeading)
					}, o.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						displayText: o.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ae
					}, a.a.createElement(k.a, {
						name: P.a.spam
					})), g && a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : o.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: J
					}, a.a.createElement(k.a, {
						name: t.isStickied ? P.a.unpin : P.a.pin
					}))), a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						onClick: X,
						displayText: Z(g, !!(null == t ? void 0 : t.isLocked))
					}, a.a.createElement(k.a, {
						name: P.a.lock,
						isFilled: null == t ? void 0 : t.isLocked
					})), S && a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						displayText: G ? o.fbt._("Undistinguish as a mod", null, {
							hk: "2Nmjxw"
						}) : o.fbt._("Distinguish as a mod", null, {
							hk: "35wmCr"
						}),
						onClick: () => ie(G ? "" : d.J.MODERATOR)
					}, a.a.createElement(k.a, {
						name: G ? P.a.distinguish_fill : P.a.distinguish
					})), I && a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						displayText: N ? o.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : o.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => ie(N ? "" : d.J.ADMIN)
					}, a.a.createElement(k.a, {
						name: N ? P.a.distinguish_fill : P.a.distinguish
					})), !g && (N || G) && S && a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky the comment", null, {
							hk: "18TByd"
						}) : o.fbt._("Sticky the comment", null, {
							hk: "3roZIi"
						}),
						onClick: J
					}, a.a.createElement(k.a, {
						name: t.isStickied ? P.a.unpin : P.a.pin
					})), g && !t.crosspostParentId && a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						onClick: Y,
						displayText: t.isOriginalContent ? o.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : o.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, a.a.createElement(k.a, {
						name: P.a.original
					})), g && a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						onClick: $,
						displayText: t.isNSFW ? o.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : o.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, a.a.createElement(k.a, {
						name: P.a.nsfw
					})), g && j && "subreddit" === t.belongsTo.type && a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						displayText: o.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: ee
					}, a.a.createElement(k.a, {
						name: P.a.crowd_control
					})), a.a.createElement("h6", {
						className: Object(T.a)("text-neutral-content-weak", R.a.overflowHeading)
					}, o.fbt._("Other", null, {
						hk: "2543kN"
					})), a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						displayText: o.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: se
					}, a.a.createElement(k.a, {
						name: P.a.share
					})), g && a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						onClick: ne,
						displayText: o.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, a.a.createElement(k.a, {
						name: P.a.award
					}), a.a.createElement(A.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						displayText: o.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: oe
					}, a.a.createElement(k.a, {
						name: P.a.report
					})), g && a.a.createElement(B.b, {
						className: R.a.dropdownRow,
						onClick: re,
						displayText: t.hidden ? o.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : o.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, a.a.createElement(k.a, {
						name: P.a.hide
					})))
				},
				X = s("./src/reddit/helpers/trackers/modListing.ts"),
				K = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				J = s("./src/config.ts"),
				Y = s("./src/reddit/components/UserIcon/index.tsx"),
				$ = s("./src/reddit/helpers/name/index.ts"),
				ee = s("./src/reddit/constants/intlSupport.ts"),
				te = s("./src/reddit/helpers/graphql/helpers.ts"),
				se = s("./src/reddit/hooks/useLocale.ts");

			function ne(e) {
				return new Date(Date.now()).getFullYear() === e.getFullYear()
			}
			var oe = function(e) {
					let {
						date: t,
						...s
					} = e;
					const n = Object(se.a)(),
						r = "string" == typeof t ? Object(te.g)(t) / d.Xb : t,
						i = new Date(r * d.Xb);
					if (!ee.a) return a.a.createElement(a.a.Fragment, null, i.toLocaleString());
					const l = new Intl.DateTimeFormat(n, {
							month: "short",
							day: "numeric",
							year: ne(i) ? void 0 : "numeric"
						}),
						c = new Intl.DateTimeFormat(n, {
							minute: "numeric",
							hour: "numeric"
						}),
						m = function(e) {
							const t = new Date(Date.now());
							return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
						}(i) ? o.fbt._("Today", null, {
							hk: "1sZpnp"
						}) : l.format(i),
						u = c.format(i);
					return o.fbt._("{date} at {time}", [o.fbt._param("date", m), o.fbt._param("time", u)], {
						hk: "Ot5zO"
					})
				},
				re = s("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts"),
				ae = s("./src/reddit/components/CCM/ModPreviousActions/index.m.less"),
				ie = s.n(ae);
			var de = e => {
				let {
					className: t,
					modAction: s,
					postOrCommentId: n
				} = e;
				var o, r, i, d, l;
				const c = (null === (o = s.moderatorInfo) || void 0 === o ? void 0 : o.displayName) || "",
					m = (null === (i = null === (r = s.moderatorInfo) || void 0 === r ? void 0 : r.icon) || void 0 === i ? void 0 : i.url) || "",
					u = !!(null === (l = null === (d = s.moderatorInfo) || void 0 === d ? void 0 : d.profile) || void 0 === l ? void 0 : l.isNsfw),
					p = Object(b.a)(n);
				return a.a.createElement("div", {
					className: Object(T.a)(t, ie.a.row)
				}, a.a.createElement("div", {
					className: ie.a.userIconWrapper
				}, a.a.createElement(Y.a, {
					className: ie.a.userIcon,
					iconUrl: m,
					userName: c,
					isNSFW: u
				})), a.a.createElement("div", {
					className: ie.a.details
				}, a.a.createElement("h3", {
					className: ie.a.title
				}, Object(re.a)(s.action, p ? "SubredditPost" : "")), a.a.createElement("p", {
					className: ie.a.meta
				}, a.a.createElement("a", {
					className: ie.a.userlink,
					href: `${J.a.redditUrl}/user/${c}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(c)))), a.a.createElement("span", {
					className: ie.a.time
				}, a.a.createElement(oe, {
					date: s.createdAt
				})))
			};
			var le = e => {
				let {
					className: t,
					reportAction: s
				} = e;
				return a.a.createElement("div", {
					className: Object(T.a)(t, ie.a.row)
				}, a.a.createElement(k.a, {
					isFilled: !0,
					name: "report_fill",
					className: ie.a.icon
				}), a.a.createElement("div", {
					className: ie.a.details
				}, a.a.createElement("h3", {
					className: ie.a.title
				}, o.fbt._("Reported for", null, {
					hk: "pm0ot"
				})), !!s.reason && a.a.createElement("p", {
					className: ie.a.meta
				}, s.reason)), a.a.createElement("span", {
					className: ie.a.time
				}, a.a.createElement(oe, {
					date: s.createdAt
				})))
			};
			var ce = e => {
					const t = Object(i.e)(t => {
						var s, n;
						const o = null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[e.postOrCommentId];
						if (o && o.length) return o.map(e => {
							var s, n;
							return null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.models[e]
						})
					});
					return t ? a.a.createElement("div", {
						className: Object(T.a)(e.className, ie.a.wrapper)
					}, a.a.createElement("h2", {
						className: ie.a.wrapperTitle
					}, o.fbt._("Recent actions", null, {
						hk: "PAtYM"
					})), t.map(t => "ModAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(de, {
						modAction: t,
						key: t.id,
						postOrCommentId: e.postOrCommentId
					}) : "ReportAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(le, {
						reportAction: t,
						key: t.id
					}) : null)) : null
				},
				me = s("./src/reddit/components/HumanDate/index.tsx"),
				ue = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				pe = s.n(ue);
			const be = e => {
				let {
					content: t
				} = e;
				var s;
				const n = (null == t ? void 0 : t.approvedBy) || "",
					r = Object(i.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(H.Cb)(e, {
						userName: n
					}) : null),
					d = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: pe.a.userIconWrapper
				}, a.a.createElement(Y.a, {
					className: Object(T.a)(pe.a.userIcon),
					iconUrl: null == r ? void 0 : r.accountIcon,
					userName: n,
					isNSFW: !!(null == r ? void 0 : r.isNSFW)
				})), a.a.createElement("div", {
					className: pe.a.statusText
				}, a.a.createElement("p", {
					className: pe.a.status
				}, o.fbt._("Approved", null, {
					hk: "4d15LY"
				})), a.a.createElement("p", null, a.a.createElement("a", {
					className: pe.a.userlink,
					href: `${J.a.redditUrl}/user/${n}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(n)), d && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(me.d, {
					seconds: d
				})))))
			};
			var he = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const fe = e => {
				let {
					content: t
				} = e;
				const s = Object(r.useMemo)(() => {
					var e;
					const s = [];
					(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== d.m || s.push({
						icon: "bot_fill",
						heading: o.fbt._("Blocked by AutoMod", null, {
							hk: "XZuzM"
						})
					});
					for (const n of t.modQueueTriggers || []) switch (n.type) {
						case he.a.AUTOMOD:
							s.push({
								icon: "bot_fill",
								heading: o.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: n.message
							});
							break;
						case he.a.SHADOWBANNED_SUBMITTER:
							s.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: n.message
							});
							break;
						case he.a.HATEFUL_CONTENT:
							s.push({
								icon: "mod_mode_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: n.message
							});
							break;
						case he.a.CROWD_CONTROL:
							s.push({
								icon: "crowd_control",
								heading: o.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: n.message
							});
							break;
						case he.a.BAN_EVASION:
							s.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "1Olxtp"
								}),
								reason: n.message
							})
					}
					return s
				}, [t.modQueueTriggers, t.bannedBy]);
				return a.a.createElement("div", {
					className: pe.a.filteredWrapper
				}, s.map((e, t) => {
					let {
						heading: s,
						reason: n,
						icon: o
					} = e;
					return a.a.createElement("div", {
						key: `${s}-${n}-${t}`,
						className: pe.a.filteredRow
					}, a.a.createElement(k.a, {
						isFilled: !0,
						name: o,
						className: Object(T.a)(pe.a.coloredIcon, pe.a.icon)
					}), a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("p", {
						className: pe.a.status
					}, s), n && a.a.createElement("p", null, n)))
				}))
			};
			var ge = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				xe = s("./src/reddit/selectors/subreddit.ts");
			const ke = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(i.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(H.Cb)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					r = Object(b.b)(t),
					d = Object(i.e)(e => Object(xe.X)(e, {
						subredditId: r ? t.belongsTo.id : t.subredditId
					})),
					l = r && t.removedByCategory ? t.removedByCategory : null,
					c = l ? Object(ge.b)(l) : "clear_fill",
					m = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, n ? a.a.createElement("div", {
					className: pe.a.userIconWrapper
				}, a.a.createElement(Y.a, {
					className: Object(T.a)(pe.a.userIcon),
					iconUrl: null == n ? void 0 : n.accountIcon,
					userName: null == n ? void 0 : n.username,
					isNSFW: null == n ? void 0 : n.isNSFW
				})) : a.a.createElement(k.a, {
					isFilled: !0,
					name: c,
					className: Object(T.a)(pe.a.coloredIcon, pe.a.icon)
				}), a.a.createElement("div", {
					className: pe.a.statusText
				}, a.a.createElement("p", {
					className: pe.a.status
				}, o.fbt._("Removed{spam}{reason}", [o.fbt._param("spam", t.isSpam ? " as spam" : ""), o.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), a.a.createElement("p", null, (null == n ? void 0 : n.username) ? a.a.createElement(a.a.Fragment, null, a.a.createElement("a", {
					className: pe.a.userlink,
					href: `${J.a.redditUrl}/user/${n.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(n.username)), m && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(me.d, {
					seconds: m
				}))) : l && Object(ge.e)(l, (null == n ? void 0 : n.username) || null, d.name))))
			};
			var ve = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				Oe = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				_e = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ce = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var Ee = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx");
			s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx");
			s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx");
			var ye = s("./src/reddit/icons/fonts/Op/index.m.less"),
				je = s.n(ye),
				we = s("./src/lib/lessComponent.tsx");
			we.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Ce.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(Ce.a, null, e.desc)), "OpIcon", je.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var Se = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				Ie = s.n(Se);
			we.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Ce.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", Ie.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var Ne = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Re = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				Te = s.n(Re);
			we.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Ce.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", Te.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Pe = e => {
					let {
						content: t
					} = e;
					const s = Object(_e.b)(),
						n = Object(i.d)(),
						d = Object(r.useCallback)(() => {
							const e = Object(b.a)(t.id),
								o = e ? C.eb : O.g,
								r = t.ignoreReports ? "restore_reports" : "ignore_reports",
								a = e ? Object(h.l)(r, t.id) : Object(h.k)(r, t.id);
							n(o(t.id)), s(a)
						}, [t.id, t.ignoreReports, s, n]),
						l = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(k.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(T.a)(pe.a.coloredIcon, pe.a.icon)
					}), a.a.createElement("div", {
						className: pe.a.reportedWrapper
					}, !!t.modReports.length && a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("p", {
						className: pe.a.status
					}, o.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [o.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return a.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object($.e)(n), ": ", s)
					})), !!t.userReports.length && a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("div", {
						className: pe.a.reportMeta
					}, a.a.createElement("p", {
						className: pe.a.status
					}, o.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [o.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !l && a.a.createElement(Oe.c, {
						className: pe.a.ignoreButton,
						onClick: d,
						text: t.ignoreReports ? o.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : o.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? a.a.createElement(Ne.a, {
						className: pe.a.ignoreButtonIcon
					}) : a.a.createElement(Ee.a, {
						className: pe.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, o, r, i] = e;
						return n ? void 0 !== r && i ? a.a.createElement(ve.a, {
							key: `user-${n}`,
							reason: n,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: r,
							useNewFormat: !0,
							className: pe.a.snoozabledButton,
							dropdownClassName: pe.a.snoozableDropdown,
							iconClassName: pe.a.snoozeIcon
						}) : a.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", o, ")") : null
					}))))
				},
				Le = e => {
					let {
						content: t
					} = e;
					const s = I(t),
						o = Object(r.useMemo)(() => {
							switch (s) {
								case n.APPROVED:
									return a.a.createElement(be, {
										content: t
									});
								case n.REMOVED:
								case n.SPAM:
									return a.a.createElement(ke, {
										content: t
									});
								case n.FILTERED:
									return a.a.createElement(fe, {
										content: t
									});
								case n.REPORTED:
									return a.a.createElement(Pe, {
										content: t
									});
								default:
									return a.a.createElement(r.Fragment, null)
							}
						}, [s, t]),
						[d, l] = Object(r.useState)(!1),
						c = Object(x.a)(),
						m = Object(r.useCallback)(e => {
							var n;
							e.stopPropagation(), l(!d), c(Object(X.e)((null === (n = t.belongsTo) || void 0 === n ? void 0 : n.id) || t.subredditId, s, Object(b.a)(t.id), !d))
						}, [c, t, d, l, s]),
						u = Object(i.e)(e => Object(K.a)(e)),
						p = Object(i.e)(e => {
							var s, n;
							return !!(null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[t.id])
						});
					if (s === n.UNMODERATED) return null;
					const h = u && p;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(T.a)(pe.a.wrapper, {
							[pe.a.approved]: s === n.APPROVED,
							[pe.a.reported]: s === n.REPORTED,
							[pe.a.opened]: d,
							[pe.a.openable]: h
						}),
						onClick: h ? m : void 0
					}, o, h && a.a.createElement("button", {
						className: pe.a.caretButton
					}, a.a.createElement(k.a, {
						name: d ? P.a.caret_up : P.a.caret_down,
						className: pe.a.caretIcon
					}))), u && p && d && a.a.createElement(ce, {
						className: pe.a.previousActions,
						postOrCommentId: t.id
					}))
				},
				De = (e, t) => Object(h.c)(t, e),
				Ae = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: h
					} = e;
					const S = Object(x.a)(),
						N = Object(i.d)(),
						T = I(t),
						P = Object(i.e)(j.b),
						L = Object(b.b)(t),
						D = Object(i.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						A = Object(i.e)(e => Object(w.m)(e, {
							postId: t.id
						})),
						F = Object(p.a)(A),
						[M, B] = Object(r.useState)(!1),
						z = Object(i.e)(e => {
							var s, n;
							return null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === n ? void 0 : n.toUpdate.includes(t.id)
						}),
						U = Object(r.useRef)(null),
						W = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: s
								} = e;
								s >= .5 ? B(!0) : t || B(!1)
							})
						}, []);
					M && z && N(Object(l.b)(t.id));
					const Q = Object(r.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(g.a)(U, W, Q);
					const q = [n.REPORTED, n.FILTERED, n.UNMODERATED].includes(T),
						H = [n.APPROVED, n.UNMODERATED, n.REPORTED].includes(T),
						V = L && F,
						Z = T === n.REMOVED && Object(b.b)(t) && t.removedByCategory === v.g.Reddit && !t.isRemoved && !t.isApproved,
						X = T === n.FILTERED || Z,
						K = T === n.REMOVED && !t.modRemovalReason && !X,
						J = [n.REMOVED, n.SPAM].indexOf(T) > -1,
						Y = L ? f.k : De,
						$ = Object(r.useCallback)(() => {
							const e = L ? C.r : O.a;
							N(e(t.id)), S(Y(t.id, "approve"))
						}, [S, N, t, L, Y]),
						ee = Object(r.useCallback)(() => {
							const e = L ? C.S : O.e;
							N(e(t.id, !1)), t.isRemoved && t.bannedBy === d.m ? S(Y(t.id, "confirm_remove")) : S(Y(t.id, "remove"))
						}, [S, N, t, L, Y]),
						te = Object(r.useCallback)(() => {
							N(Object(y.fetchReasonsAndOpenModal)(L ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, L, N]),
						se = Object(r.useCallback)(() => {
							N(Object(_.i)(Object(c.b)(t.id, !1))), S(Object(f.k)(t.id, "post_flair_picker"))
						}, [S, N, t]),
						ne = Object(r.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							L && N(Object(E.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [N, L, t]);
					return a.a.createElement("div", {
						className: R.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: U
					}, a.a.createElement(Le, {
						content: t
					}), a.a.createElement("div", {
						className: R.a.actionBar
					}, q && a.a.createElement(u.t, {
						className: [R.a.button, R.a.approve].join(" "),
						Icon: Object(k.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: R.a.icon,
						onClick: $,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), H && a.a.createElement(u.t, {
						className: R.a.button,
						Icon: Object(k.b)("close"),
						iconPosition: u.h.L,
						iconClassName: R.a.icon,
						onClick: ee,
						text: o.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), K && a.a.createElement(u.t, {
						className: R.a.button,
						onClick: te,
						text: o.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), X && a.a.createElement(u.t, {
						className: R.a.button,
						Icon: Object(k.b)("close"),
						iconPosition: u.h.L,
						iconClassName: R.a.icon,
						onClick: ee,
						text: o.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), J && a.a.createElement(u.t, {
						className: R.a.button,
						Icon: Object(k.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: R.a.icon,
						onClick: $,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), V && a.a.createElement(u.t, {
						className: R.a.button,
						Icon: Object(k.b)("tag"),
						priority: u.c.Plain,
						iconPosition: u.h.L,
						iconClassName: R.a.icon,
						onClick: se,
						text: o.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), L && P === Object(c.b)(t.id, !1) && a.a.createElement(c.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(c.b)(t.id, !1),
						onFlairChanged: ne
					}), a.a.createElement(G, {
						content: t,
						hostPostData: h,
						listingKey: s,
						moderatorPermissions: A
					}), D && a.a.createElement(m.a, {
						withOverlay: !0,
						postId: L ? t.id : void 0,
						commentId: L ? void 0 : t.id
					})))
				}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.b = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-ModQueueActivitySummaryCards",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ModQueueActivitySummaryCards").then(s.bind(null, "./src/reddit/components/ModQueueActivitySummaryCards/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModQueueActivitySummaryCards/index.tsx"
				}
			});
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-ModQueueActivitySummaryCards-ModActivityPreview",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ModQueueActivitySummaryCards-ModActivityPreview").then(s.bind(null, "./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx"
				}
			})
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/redditGQL/types.ts");
			const r = (e, t) => {
				switch (e) {
					case o.z.AddNote:
						return n.fbt._("Added mod note", null, {
							hk: "4EQdI3"
						});
					case o.z.AddRemovalReason:
						return n.fbt._("Added removal reason", null, {
							hk: "3sDuRA"
						});
					case o.z.AdjustPostCrowdControlLevel:
						return n.fbt._("Adjusted post crowd control level", null, {
							hk: "3Ru27s"
						});
					case o.z.EnablePostCrowdControlFilter:
						return n.fbt._("Enabled post crowd control level", null, {
							hk: "bnrbt"
						});
					case o.z.DisablePostCrowdControlFilter:
						return n.fbt._("Disabled post crowd control level", null, {
							hk: "3Pn8Cm"
						});
					case o.z.ApproveComment:
						return n.fbt._("Approved comment", null, {
							hk: "15N4AH"
						});
					case o.z.ApproveLink:
						return n.fbt._("Approved post", null, {
							hk: "2pHeO6"
						});
					case o.z.BanUser:
						return n.fbt._("Banned user", null, {
							hk: "30ZUto"
						});
					case o.z.Collections:
						return n.fbt._("Collections", null, {
							hk: "4DLN5q"
						});
					case o.z.DeleteNote:
						return n.fbt._("Deleted mod note", null, {
							hk: "24mUGI"
						});
					case o.z.Distinguish:
						return "SubredditPost" === t ? n.fbt._("Post distinguished", null, {
							hk: "1EzjPd"
						}) : n.fbt._("Comment distinguished", null, {
							hk: "3TNqQa"
						});
					case o.z.EditFlair:
						return "SubredditPost" === t ? n.fbt._("Post flair edited", null, {
							hk: "2oj67i"
						}) : n.fbt._("User flair edited", null, {
							hk: "2WAVS8"
						});
					case o.z.IgnoreReports:
						return "SubredditPost" === t ? n.fbt._("Post reports ignored", null, {
							hk: "1HbgCS"
						}) : n.fbt._("Comment reports ignored", null, {
							hk: "3eLRwL"
						});
					case o.z.Lock:
						return "SubredditPost" === t ? n.fbt._("Post locked", null, {
							hk: "45Huvj"
						}) : n.fbt._("Comment locked", null, {
							hk: "2HzroI"
						});
					case o.z.MarkNsfw:
						return n.fbt._("Toggled post NSFW", null, {
							hk: "eAiVp"
						});
					case o.z.MarkOriginalContent:
						return n.fbt._("Toggled post Original Content", null, {
							hk: "46B0Bk"
						});
					case o.z.MuteUser:
						return n.fbt._("Muted user", null, {
							hk: "31YWRG"
						});
					case o.z.RemoveComment:
						return n.fbt._("Removed comment", null, {
							hk: "2qfmzC"
						});
					case o.z.RemoveLink:
						return n.fbt._("Removed post", null, {
							hk: "2leMij"
						});
					case o.z.SetContestMode:
						return n.fbt._("Set post contest mode", null, {
							hk: "2iE074"
						});
					case o.z.SetSuggestedsort:
						return n.fbt._("Set post suggested sort", null, {
							hk: "3zw33Q"
						});
					case o.z.ShowComment:
						return n.fbt._("Showed comment", null, {
							hk: "1xvaXS"
						});
					case o.z.SpamComment:
						return n.fbt._("Marked comment as spam", null, {
							hk: "E6CLe"
						});
					case o.z.SpamLink:
						return n.fbt._("Removed post as spam", null, {
							hk: "1Al2xz"
						});
					case o.z.Spoiler:
						return n.fbt._("Added spoiler tag", null, {
							hk: "254Axx"
						});
					case o.z.Sticky:
						return "SubredditPost" === t ? n.fbt._("Post stickied", null, {
							hk: "4m9DRx"
						}) : n.fbt._("Comment stickied", null, {
							hk: "1JIPzu"
						});
					case o.z.UnbanUser:
						return n.fbt._("Unbanned user", null, {
							hk: "3U4olT"
						});
					case o.z.Unlock:
						return "SubredditPost" === t ? n.fbt._("Post unlocked", null, {
							hk: "3IXrG"
						}) : n.fbt._("Comment unlocked", null, {
							hk: "4v2jmJ"
						});
					case o.z.UnmuteUser:
						return n.fbt._("Unmuted user", null, {
							hk: "2aB30x"
						});
					case o.z.UnsetContestMode:
						return n.fbt._("Unset post contest mode", null, {
							hk: "W4Yjf"
						});
					case o.z.UnsnoozeReports:
						return "SubredditPost" === t ? n.fbt._("Post unsnoozed", null, {
							hk: "3jp8zr"
						}) : n.fbt._("Comment unsnoozed", null, {
							hk: "2x01Eq"
						});
					case o.z.Unspoiler:
						return n.fbt._("Removed spoiler tag", null, {
							hk: "2GvhDn"
						});
					case o.z.Unsticky:
						return "SubredditPost" === t ? n.fbt._("Post unstickied", null, {
							hk: "KXoHl"
						}) : n.fbt._("Comment unstickied", null, {
							hk: "dpEKC"
						});
					case o.z.UpdateRemovalReason:
					case o.z.WikiBanned:
					case o.z.WikiContributor:
					case o.z.WikiPageListed:
					case o.z.WikiPermLevel:
					case o.z.WikiRevise:
					case o.z.WikiUnbanned:
					case o.z.AcceptModeratorInvite:
					case o.z.AddCommunityTopics:
					case o.z.AddContributor:
					case o.z.AddModerator:
					case o.z.CreateAward:
					case o.z.CreateScheduledPost:
					case o.z.CreateRemovalReason:
					case o.z.CommunityStyling:
					case o.z.CommunityWidgets:
					case o.z.CreateRule:
					case o.z.DeleteAward:
					case o.z.DeleteRule:
					case o.z.DeleteScheduledPost:
					case o.z.DeleteOverriddenClassification:
					case o.z.DeleteRemovalReason:
					case o.z.DisableAward:
					case o.z.EditPostRequirements:
					case o.z.EditRule:
					case o.z.EditScheduledPost:
					case o.z.EditSettings:
					case o.z.EnableAward:
					case o.z.Events:
					case o.z.HiddenAward:
					case o.z.InviteModerator:
					case o.z.InviteSubscriber:
					case o.z.ModAwardGiven:
					case o.z.ModmailEnrollment:
					case o.z.OverrideClassification:
					case o.z.RemoveCommunityTopics:
					case o.z.RemoveContributor:
					case o.z.RemoveModerator:
					case o.z.RemoveWikiContributor:
					case o.z.ReorderModerators:
					case o.z.ReorderRules:
					case o.z.SetPermissions:
					case o.z.SnoozeReports:
					case o.z.SubmitContentRatingSurvey:
					case o.z.SubmitScheduledPost:
					case o.z.UnignoreReports:
					case o.z.UninviteModerator:
					default:
						return n.fbt._("Last mod action", null, {
							hk: "S9AMb"
						})
				}
			}
		},
		"./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3gono-WZrSL-d6xVXvjtMy",
				container: "_3gono-WZrSL-d6xVXvjtMy",
				Image: "cSzjL6IStvPqHPZ7Y7ly8",
				image: "cSzjL6IStvPqHPZ7Y7ly8",
				Title: "_15y0pZYrlSHF1PcfsddZ-q",
				title: "_15y0pZYrlSHF1PcfsddZ-q",
				Text: "_2jaFduo9u1gW746Eq2bUKo",
				text: "_2jaFduo9u1gW746Eq2bUKo"
			}
		},
		"./src/reddit/components/ModQueueList/LayoutNavigation.m.less": function(e, t, s) {
			e.exports = {
				Inline: "_3JHX3et1k6IdasjG0oW12P",
				inline: "_3JHX3et1k6IdasjG0oW12P",
				Filter: "_1OcIyF84egvn4Y6482t8jQ",
				filter: "_1OcIyF84egvn4Y6482t8jQ",
				LayoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7",
				layoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7"
			}
		},
		"./src/reddit/components/ModQueueList/LayoutNavigation.tsx": function(e, t, s) {
			"use strict";
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				x = s("./src/reddit/selectors/profile.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/tooltip.ts"),
				O = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				_ = s("./src/lib/addQueryParams/index.ts"),
				C = s("./src/lib/filterQueryParams/index.ts"),
				E = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/selectors/meta.ts"),
				w = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				S = s.n(w);
			! function(e) {
				e.Comments = "comments", e.Posts = "links", e.ChatPosts = "chat_comments"
			}(n || (n = {}));
			const I = m.a.wrapped(E.b, "Row", S.a),
				N = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: j.l
				});
			var R = Object(i.b)(N)(e => a.a.createElement("div", null, a.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(C.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, a.a.createElement(I, {
					displayText: o.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), a.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(_.a)(Object(C.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: n.Posts
					})
				}, a.a.createElement(I, {
					displayText: o.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === n.Posts
				})), a.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(_.a)(Object(C.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: n.Comments
					})
				}, a.a.createElement(I, {
					displayText: o.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === n.Comments
				})), a.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_live_post"),
					to: Object(_.a)(Object(C.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: n.ChatPosts
					})
				}, a.a.createElement(I, {
					displayText: o.fbt._("Live Chat Messages", null, {
						hk: "26ZmtR"
					}),
					isSelected: e.postTypeFilter === n.ChatPosts
				})))),
				T = s("./src/reddit/hooks/useLocalStorage.ts"),
				P = s("./src/reddit/hooks/useMounted.ts"),
				L = s("./src/reddit/constants/experiments.ts"),
				D = s("./src/reddit/helpers/chooseVariant/index.ts"),
				A = s("./src/reddit/selectors/user.ts");
			const F = e => Object(D.c)(e, {
				experimentEligibilitySelector: A.S,
				experimentName: L.Wb
			}) === L.Jd;
			var M = s("./src/reddit/components/ModQueueList/SortByNumReportsTooltip.m.less"),
				B = s.n(M);
			const z = e => {
				let {
					children: t
				} = e;
				const [s, n] = Object(T.a)("sort_num_reports_seen_count", 0), d = Object(i.e)(F), l = Object(P.a)(), c = !d || !l || s > 3;
				Object(r.useEffect)(() => {
					c || n(s + 1)
				}, [c]);
				return c ? t : a.a.createElement("div", {
					className: B.a.wrapper,
					onClick: () => {
						n(4)
					}
				}, a.a.createElement("span", {
					className: B.a.tooltip
				}, o.fbt._("NEW! More sort options added", null, {
					hk: "5y9ye"
				})), t)
			};
			var U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/controls/SearchBar/index.tsx"),
				Q = s("./src/reddit/helpers/trackers/modListing.ts"),
				q = s("./src/reddit/selectors/experiments/realtimeMQUpdates.ts"),
				H = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				Z = s.n(V);
			const G = Object(U.v)({
					currentPageUrl: U.f
				}),
				X = Object(d.c)({
					moderatingSubreddits: H.o,
					origin: j.l,
					isRealtimeMQUpdatesExperimentEnabled: q.a
				}),
				K = Object(i.b)(X),
				J = m.a.div("DropdownContainer", Z.a),
				Y = m.a.div("SearchBarContainer", Z.a),
				$ = m.a.wrapped(E.b, "Row", Z.a),
				ee = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class te extends a.a.Component {
				constructor(e) {
					super(e), this.onClickRow = e => {
						this.props.isRealtimeMQUpdatesExperimentEnabled && this.props.sendEvent(Object(Q.b)(!1, e, !1))
					}, this.state = {
						search: ""
					}, this.updateSortedSubreddits(e), this.updateFilteredSubreddits(e, this.state)
				}
				UNSAFE_componentWillUpdate(e, t) {
					e.moderatingSubreddits !== this.props.moderatingSubreddits ? (this.updateSortedSubreddits(e), this.updateFilteredSubreddits(e, t)) : t.search !== this.state.search && this.updateFilteredSubreddits(e, t)
				}
				updateSortedSubreddits(e) {
					this.sortedSubreddits = e.moderatingSubreddits.slice().sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1)
				}
				updateFilteredSubreddits(e, t) {
					if (!t.search) return void(this.filteredSubreddits = this.sortedSubreddits);
					const s = t.search.toLowerCase();
					let n;
					n = e.moderatingSubreddits !== this.props.moderatingSubreddits || 0 !== s.indexOf(this.state.search) ? this.sortedSubreddits : this.filteredSubreddits, this.filteredSubreddits = n.filter(e => -1 !== e.displayText.toLowerCase().indexOf(s))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return a.a.createElement(J, {
						onClickCapture: this.stopPropagation
					}, a.a.createElement(Y, null, a.a.createElement(W.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: o.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), a.a.createElement(y.default, {
						to: Object(C.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, a.a.createElement($, {
						displayText: o.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = ee(t);
						return a.a.createElement(y.default, {
							key: t.id,
							to: Object(_.a)(Object(C.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), s),
							onClick: () => this.onClickRow(t.name)
						}, a.a.createElement($, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var se = G(K(Object(b.c)(te))),
				ne = s("./src/reddit/helpers/trackers/modTools.ts"),
				oe = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				re = s.n(oe);
			const ae = Object(c.a)(h.a),
				ie = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				de = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				le = "MODQ--POST_SORT_DROPDOWN",
				ce = m.a.wrapped(g.a, "Inline", re.a),
				me = m.a.div("Filter", re.a),
				ue = m.a.wrapped(p.a, "LayoutSwitch", re.a),
				pe = e => {
					switch (e) {
						case "allPostTypes":
							return o.fbt._("Posts and Comments", null, {
								hk: "2BGBVi"
							});
						case "allSubreddits":
							return o.fbt._("All subreddits", null, {
								hk: "3GnUZA"
							});
						case "comments":
							return o.fbt._("Comments", null, {
								hk: "3PSW3P"
							});
						case "links":
							return o.fbt._("Posts", null, {
								hk: "1nfhQO"
							});
						case "searchPlaceholder":
							return o.fbt._("Find subreddit", null, {
								hk: "2rRq64"
							});
						case "chat_comments":
							return o.fbt._("Live Chat Messages", null, {
								hk: "4iL79y"
							})
					}
				},
				be = e => {
					switch (e) {
						case "oldest":
							return o.fbt._("Oldest First", null, {
								hk: "1JMyTy"
							});
						case "most_reported":
							return o.fbt._("Most Reported First", null, {
								hk: "mANyW"
							});
						default:
							return o.fbt._("Newest First", null, {
								hk: "iP4pS"
							})
					}
				},
				he = Object(d.c)({
					isPostTypeFilterDropdownOpen: Object(v.b)(de),
					isSubredditFilterDropdownOpen: Object(v.b)(ie),
					isPostSortDropdownOpen: Object(v.b)(le),
					profile: (e, t) => {
						let {
							profileName: s
						} = t;
						return s ? Object(x.k)(e, {
							profileName: s
						}) : null
					},
					subreddit: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(k.C)(e, {
							subredditName: s
						}) : null
					}
				}),
				fe = Object(i.b)(he, e => ({
					loadAllSubreddits: () => e(Object(u.d)(!0)),
					onOpenDropdown: t => e(Object(l.h)({
						tooltipId: t
					})),
					sendLivePostFilterDisplayedEvent: () => e(ne.i)
				}));
			class ge extends a.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(ie), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(de), this.props.sendEventWithName("content_type")(), this.props.isPostTypeFilterDropdownOpen || this.props.sendEvent(Object(ne.i)())
					}, this.onOpenPostSortDropdown = () => {
						this.props.onOpenDropdown(le), this.props.sendEventWithName("modqueue_sort")()
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || o.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), s = e.postTypeFilter && pe(e.postTypeFilter) || o.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					}), n = be(null == e ? void 0 : e.postSort);
					return a.a.createElement(ce, null, !e.hideSubredditFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(me, {
						id: ie,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(ae, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: ie
					}, a.a.createElement(se, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), a.a.createElement(z, null, a.a.createElement(me, {
						id: le,
						onClick: this.onOpenPostSortDropdown
					}, n, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(ae, {
						isOpen: e.isPostSortDropdownOpen,
						tooltipId: le
					}, a.a.createElement(O.b, {
						postSort: e.postSort,
						sendEventWithName: e.sendEventWithName
					}))), e.showTypeFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(me, {
						id: de,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(ae, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: de
					}, a.a.createElement(R, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), a.a.createElement(ue, null))
				}
			}
			t.a = fe(Object(b.c)(ge))
		},
		"./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less": function(e, t, s) {
			e.exports = {
				StatusItem: "_2K7YZXKFsZRhsQQ4AbJmxU",
				statusItem: "_2K7YZXKFsZRhsQQ4AbJmxU",
				StatusContainer: "_2iPB1Z8ZMY-jLMenh1R4K4",
				statusContainer: "_2iPB1Z8ZMY-jLMenh1R4K4",
				StatusList: "B7xBQCW-i0XkgeJ22rgLC",
				statusList: "B7xBQCW-i0XkgeJ22rgLC"
			}
		},
		"./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxContainer: "DsVp-bHpfq0Oq0qA6pTak",
				checkboxContainer: "DsVp-bHpfq0Oq0qA6pTak",
				Checkbox: "_3IYLDjbdCg9uE2oDb5e7Sn",
				checkbox: "_3IYLDjbdCg9uE2oDb5e7Sn",
				DropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				dropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				DropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				dropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				Button: "abvVqLDYtaKz3przU1pme",
				button: "abvVqLDYtaKz3przU1pme",
				Bullet: "K9CBgM-Xyd_FBz7TcYHah",
				bullet: "K9CBgM-Xyd_FBz7TcYHah",
				Text: "_14Wi7Tj4JyvXkmtsyZkG9e",
				text: "_14Wi7Tj4JyvXkmtsyZkG9e",
				left: "_1IovB6jH5oyEgCXjUwXpJs",
				right: "_1aKgaRqDhtICtELEl5XEw3",
				ModToolsBulkOperations: "IncH4Lk7NsVjvrE51jpu8",
				modToolsBulkOperations: "IncH4Lk7NsVjvrE51jpu8"
			}
		},
		"./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less": function(e, t, s) {
			e.exports = {
				Row: "_1i-lQzTwq8UQrdKuiR_jer",
				row: "_1i-lQzTwq8UQrdKuiR_jer"
			}
		},
		"./src/reddit/components/ModQueueList/SortByNumReportsTooltip.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "FWSg-pojW6Y4suOH94gHp",
				tooltip: "_2CgvwZaR7MuuZGWt19TMWD"
			}
		},
		"./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less": function(e, t, s) {
			e.exports = {
				DropdownContainer: "CxFih1Dllyb7Ee-gA27SM",
				dropdownContainer: "CxFih1Dllyb7Ee-gA27SM",
				SearchBarContainer: "_3TBm4aNfLDgkYxeb3BL6Qu",
				searchBarContainer: "_3TBm4aNfLDgkYxeb3BL6Qu",
				Row: "_2-Mqfq2jQLCLoIJJX5d6ER",
				row: "_2-Mqfq2jQLCLoIJJX5d6ER"
			}
		},
		"./src/reddit/components/ModQueueList/index.m.less": function(e, t, s) {
			e.exports = {
				ItemContainer: "_2QxKXxKsAXysE1p_Y7m66a",
				itemContainer: "_2QxKXxKsAXysE1p_Y7m66a",
				ButtonContainer: "_1UWG2tG2gGruVUIlnO6Qwr",
				buttonContainer: "_1UWG2tG2gGruVUIlnO6Qwr"
			}
		},
		"./src/reddit/components/ModQueueList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/difference.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/includes.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/modQueue/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				f = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/lib/classNames/index.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/components/PaginationButtons/index.m.less"),
				O = s.n(v);
			var _ = e => d.a.createElement(k.a, {
					className: O.a.buttonContainer
				}, d.a.createElement(x.s, {
					className: Object(g.a)(O.a.routerLink, {
						[O.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, f.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), d.a.createElement(x.s, {
					className: Object(g.a)(O.a.routerLink, {
						[O.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, f.fbt._("Next", null, {
					hk: "2mEXAi"
				}))),
				C = s("./src/reddit/components/PostList/index.tsx"),
				E = s("./src/reddit/constants/componentSizes.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/isComment.ts"),
				w = s("./src/reddit/helpers/isPost.ts"),
				S = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				I = s("./src/lib/logs/console.ts"),
				N = s("./src/lib/objectSelector/index.ts"),
				R = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				T = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				P = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				L = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				D = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				A = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				F = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				M = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				B = s("./src/reddit/components/ModModeReports/index.tsx"),
				z = s("./src/reddit/components/RichTextJson/index.tsx"),
				U = s("./src/reddit/components/VerticalVotes/index.tsx"),
				W = s("./src/reddit/controls/Checkbox/index.tsx"),
				Q = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				q = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				H = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				V = s.n(H);
			const Z = u.a.div("LeftRail", V.a),
				G = u.a.wrapped(W.a, "BulkActionCheckbox", V.a),
				X = u.a.div("CommentColumn", V.a),
				K = u.a.div("VoteColumn", V.a),
				J = u.a.wrapped(R.a, "ModToolsFlatlist", V.a),
				Y = u.a.wrapped(U.a, "Votes", V.a),
				$ = u.a.div("CommentContentWrapper", V.a),
				ee = u.a.div("ParentPostTitle", V.a),
				te = u.a.div("CommentParentWrapper", V.a),
				se = Object(N.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var ne = Object(T.b)(e => {
					const {
						className: t,
						comment: s,
						commentPermalink: n,
						flair: o,
						isCheckboxSelected: r = !1,
						onIgnoreReports: a,
						onVoteClick: i,
						showModTools: l,
						subreddit: c,
						showBulkActionCheckbox: m,
						toggleCheckbox: u
					} = e, p = Object(M.a)(s), b = Object(h.c)(s);
					return d.a.createElement(P.a, {
						className: Object(g.a)(t, V.a.Component, V.a.UnthreadedCommentContainer, "UnthreadedComment", {
							[V.a.isBanned]: !!s.bannedBy,
							[V.a.isReported]: Object(q.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: n
					}, d.a.createElement(Z, {
						className: Object(g.a)({
							[V.a.hasBorder]: !!s.bannedBy || Object(q.a)(s)
						})
					}, m && d.a.createElement(G, {
						isCheckboxSelected: r,
						toggleCheckbox: u
					})), d.a.createElement(K, null, d.a.createElement(Y, {
						compact: !1,
						model: s,
						onVoteClick: i,
						scoreClassName: V.a.score
					})), d.a.createElement(X, null, d.a.createElement(te, null, s.postTitle && d.a.createElement(ee, null, s.postTitle), s.postAuthor && d.a.createElement(A.a, {
						comment: s
					})), d.a.createElement($, null, d.a.createElement(L.a, {
						comment: s
					}, d.a.createElement(z.b, {
						content: Object(Q.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: se(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					}), d.a.createElement(D.a, {
						comment: s,
						flair: o,
						subredditName: c ? c.displayText : null
					}), p && d.a.createElement(F.a, {
						thing: s
					}), b && d.a.createElement(B.a, {
						onIgnoreReports: a,
						reportable: s
					}), l && !s.isDeleted && d.a.createElement(J, {
						comment: s
					})))))
				}),
				oe = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				re = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ae = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				ie = s.n(ae);
			const de = u.a.div("VoteSpacer", ie.a),
				le = u.a.div("ContentWrapper", ie.a),
				ce = u.a.wrapped(D.a, "Meta", ie.a),
				me = u.a.div("CommentParentWrapper", ie.a),
				ue = u.a.div("CommentContentWrapper", ie.a),
				pe = Object(N.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var be = Object(T.b)(u.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						commentPermalink: n,
						flair: o,
						hasReports: r,
						isCheckboxSelected: a = !1,
						onIgnoreReports: i,
						onVoteClick: l,
						showModTools: c,
						subreddit: m,
						showBulkActionCheckbox: u,
						toggleCheckbox: p,
						isModQueueDisplayEnabled: b,
						showRealtimeUpdateAnimation: h,
						isUpdatedContent: f,
						isNightMode: x
					} = e, k = Object(M.a)(s);
					return d.a.createElement(P.a, {
						className: Object(g.a)(t, "UnthreadedComment", {
							[ie.a.realtimeAnimation]: h,
							[ie.a.realtimeUpdated]: f,
							[ie.a.isNightMode]: x
						}),
						clickTrackingId: s.id,
						permalink: n
					}, d.a.createElement(re.a, {
						model: s,
						handleVote: l,
						showBulkActionCheckbox: u,
						isCheckboxSelected: a,
						toggleCheckbox: p
					}), d.a.createElement(de, null, d.a.createElement(le, null, d.a.createElement(me, null, s.postAuthor && !b && d.a.createElement(A.a, {
						comment: s,
						subredditOrProfile: m
					}), b && d.a.createElement(ce, {
						comment: s,
						flair: o,
						subredditOrProfile: m
					}), s.postTitle && d.a.createElement(T.a, null, s.postTitle)), d.a.createElement(L.a, {
						comment: s
					}, d.a.createElement(ue, null, d.a.createElement(z.b, {
						content: Object(Q.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: pe(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					})), k && !b && d.a.createElement(F.a, {
						thing: s
					}), r && !b && d.a.createElement(B.a, {
						onIgnoreReports: i,
						reportable: s
					}), !b && d.a.createElement(ce, {
						comment: s,
						flair: o
					}))), c && !s.isDeleted && (b ? d.a.createElement(oe.a, {
						content: s
					}) : d.a.createElement(R.a, {
						comment: s
					}))))
				}, "Component", ie.a)),
				he = s("./src/reddit/constants/postLayout.ts");
			const fe = {
					[he.g.Large]: be,
					[he.g.Medium]: T.c,
					[he.g.Classic]: T.c,
					[he.g.Compact]: ne
				},
				ge = e => null;
			var xe = s("./src/reddit/models/Flair/index.ts"),
				ke = s("./src/reddit/models/Media/index.ts"),
				ve = s("./src/reddit/models/ModQueue/index.ts"),
				Oe = s("./src/reddit/selectors/meta.ts"),
				_e = s("./src/reddit/selectors/modQueue.ts"),
				Ce = s("./src/reddit/selectors/subreddit.ts"),
				Ee = s("./src/config.ts"),
				ye = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				je = s.n(ye);
			const {
				fbt: we
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Se = `${Ee.a.assetPath}/img/snoomoji/cat_blep.png`, Ie = u.a.div("Container", je.a), Ne = u.a.div("Image", je.a), Re = u.a.div("Title", je.a), Te = u.a.div("Text", je.a);
			var Pe = () => d.a.createElement(Ie, null, d.a.createElement(Ne, {
					style: {
						backgroundImage: `url(${Se})`
					}
				}), d.a.createElement(Re, null, we._("The queue is clean!", null, {
					hk: "3d14fC"
				})), d.a.createElement(Te, null, we._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Le = s("./src/reddit/components/PostList/Placeholder.tsx");
			const De = Object(y.v)(),
				Ae = Object(c.c)({
					layout: y.U
				});
			var Fe = De(Object(l.b)(Ae)(e => d.a.createElement(Le.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Me = s("./node_modules/lodash/flatten.js"),
				Be = s.n(Me),
				ze = s("./src/reddit/actions/tooltip.ts"),
				Ue = s("./src/reddit/icons/fonts/index.tsx"),
				We = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				Qe = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				qe = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				He = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				Ve = s("./src/higherOrderComponents/asTooltip.tsx"),
				Ze = s("./src/reddit/actions/modal.ts"),
				Ge = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Xe = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Ke = s("./src/reddit/controls/Dropdown/index.tsx"),
				Je = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Ye = s("./src/reddit/helpers/flair.ts"),
				$e = s("./src/reddit/selectors/activeModalId.ts"),
				et = s("./src/reddit/selectors/moderatorPermissions.ts"),
				tt = s("./src/reddit/selectors/postFlair.ts"),
				st = s("./src/reddit/selectors/posts.ts"),
				nt = s("./src/reddit/selectors/tooltip.ts"),
				ot = s("./src/reddit/components/TrackingHelper/index.tsx"),
				rt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				at = s.n(rt);
			const it = e => d.a.createElement("button", {
					className: Object(g.a)(at.a.StatusItem, e.className),
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? f.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, e.buttonText),
				dt = Object(c.c)({
					selectedItems: _e.i
				}),
				lt = Object(l.b)(dt, e => ({
					onIgnoreReports: () => e(Object(p.f)(ve.a.IgnoreReports)),
					onLock: () => e(Object(p.f)(ve.a.Lock)),
					onMarkNSFW: () => e(Object(p.f)(ve.a.MarkNSFW)),
					onSpoiler: () => e(Object(p.f)(ve.a.Spoiler)),
					onUnignoreReports: () => e(Object(p.f)(ve.a.UnignoreReports)),
					onUnlock: () => e(Object(p.f)(ve.a.Unlock)),
					onUnmarkNSFW: () => e(Object(p.f)(ve.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(p.f)(ve.a.Unspoiler))
				})),
				ct = e => e.some(e => Object(j.a)(e));
			var mt = Object(Ve.a)(lt(Object(ot.c)(e => d.a.createElement("div", {
				className: Object(g.a)(at.a.StatusList, e.className),
				style: e.style
			}, d.a.createElement("div", {
				className: at.a.StatusContainer
			}, d.a.createElement(it, {
				onClick: e.onIgnoreReports,
				buttonText: f.fbt._("Ignore Reports", null, {
					hk: "1hZ3hN"
				})
			}), d.a.createElement(it, {
				onClick: e.onUnignoreReports,
				buttonText: f.fbt._("Unignore Reports", null, {
					hk: "3y089p"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onLock,
				buttonText: f.fbt._("Lock", null, {
					hk: "4bc0vl"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnlock,
				buttonText: f.fbt._("Unlock", null, {
					hk: "Pe2ML"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onSpoiler,
				buttonText: f.fbt._("Mark as Spoiler", null, {
					hk: "4pIu4V"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnspoiler,
				buttonText: f.fbt._("Unmark as Spoiler", null, {
					hk: "1ImDYd"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onMarkNSFW,
				buttonText: f.fbt._("Mark as NSFW", null, {
					hk: "4yS4Hz"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnmarkNSFW,
				buttonText: f.fbt._("Unmark as NSFW", null, {
					hk: "ZzA74"
				})
			}))))));
			const ut = Object(c.c)({
				isDropdownOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(nt.b)(s)(e)
				}
			});
			var pt = Object(l.b)(ut)(Object(ot.c)(e => {
					const {
						className: t,
						isDropdownOpen: s,
						tooltipId: n
					} = e;
					return d.a.createElement("div", {
						id: n,
						className: t
					}, d.a.createElement(mt, {
						isOpen: s,
						tooltipId: n
					}))
				})),
				bt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				ht = s.n(bt);
			const ft = "BulkAction--BulkItemFilter",
				gt = "BulkActions--PostFlair--Modal",
				xt = Object(Ve.a)(Ke.a),
				kt = e => d.a.createElement(Je.b, {
					className: Object(g.a)(ht.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				vt = Object(c.c)({
					activeModalId: $e.a,
					dropdownIsOpen: Object(nt.b)(ft),
					flairData: tt.d,
					isApiPending: _e.a,
					moderatorPermissions: et.n,
					posts: st.J,
					selectedItems: _e.i
				}),
				Ot = Object(l.b)(vt, e => ({
					onApprove: () => e(Object(p.f)(ve.a.Approve)),
					onFlair: (t, s) => e(Object(p.f)(ve.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(ze.h)({
						tooltipId: ft
					})),
					onOpenModToolsDropdown: () => e(Object(ze.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(p.f)(ve.a.Remove)),
					onSpam: () => e(Object(p.f)(ve.a.Spam)),
					onToggleFlairModal: () => e(Object(Ze.i)(gt))
				})),
				_t = (e, t) => {
					const s = Be()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const n = [];
					return s.forEach(e => {
						if (e.type === xe.f.Text || e.type === xe.f.Richtext) {
							const t = Object(Ye.g)(e);
							a()(n, t) || n.push(t)
						}
					}), n.length > 1 ? [{
						type: xe.f.Text,
						text: f.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var Ct = Ot(e => {
					const {
						activeModalId: t,
						className: s,
						endNumItems: n,
						flairData: o,
						isAnyItemSelected: r,
						isApiPending: a,
						moderatorPermissions: l,
						numSelected: c,
						numShowing: m,
						onApprove: u,
						onFlair: p,
						onRemove: b,
						onSpam: h,
						onToggleFlairModal: x,
						posts: k,
						selectedItems: v,
						startNumItems: O,
						subredditId: _,
						toggleSelectAll: C,
						toggleSelectByFilter: E
					} = e, y = [{
						name: f.fbt._("Spam filtered", null, {
							hk: "S0DJ9"
						}),
						filterType: "spamFiltered"
					}, {
						name: f.fbt._("Has reports", null, {
							hk: "1x2hhv"
						}),
						filterType: "hasReports"
					}, {
						name: f.fbt._("Self posts", null, {
							hk: "KFHYI"
						}),
						filterType: "selfPosts"
					}, {
						name: f.fbt._("Posts with flair", null, {
							hk: "18cMZD"
						}),
						filterType: "postsWithFlair"
					}, {
						name: f.fbt._("Posts", null, {
							hk: "gGGKv"
						}),
						filterType: "posts"
					}, {
						name: f.fbt._("Comments", null, {
							hk: "1F1pwI"
						}),
						filterType: "comments"
					}, {
						name: f.fbt._("Chat posts", null, {
							hk: "1uSGtz"
						}),
						filterType: "chat_comments"
					}], j = l && l.flair, w = _ && o && o.displaySettings.isEnabled && j && !ct(v);
					return d.a.createElement("div", {
						className: Object(g.a)(ht.a.ModToolsBulkOperations, s)
					}, d.a.createElement("div", {
						className: ht.a.CheckboxContainer,
						id: ft
					}, d.a.createElement(W.a, {
						className: ht.a.Checkbox,
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: C
					}), d.a.createElement(Ue.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), d.a.createElement(xt, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: ft
					}, y.map(e => d.a.createElement(kt, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => E(e.filterType)
					})))), r && d.a.createElement(i.Fragment, null, d.a.createElement(Xe.c, {
						className: ht.a.Button,
						disabled: a,
						text: f.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: u
					}, d.a.createElement(We.a, null)), d.a.createElement(Xe.c, {
						className: ht.a.Button,
						disabled: a,
						text: f.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, d.a.createElement(Qe.a, null)), d.a.createElement(Xe.c, {
						className: ht.a.Button,
						disabled: a,
						text: f.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, d.a.createElement(qe.a, null)), d.a.createElement(Xe.c, {
						className: ht.a.Button,
						disabled: a,
						onClick: e.onOpenModToolsDropdown
					}, d.a.createElement(pt, {
						tooltipId: "BulkActions--ModTools"
					}), d.a.createElement(Ue.a, {
						name: "list_bulleted"
					})), d.a.createElement("div", null, w && d.a.createElement(Xe.c, {
						disabled: a,
						onClick: x,
						className: ht.a.Button
					}, d.a.createElement(He.a, null)))), r && _ && t === gt && d.a.createElement(Ge.a, {
						flairs: _t(v, k),
						modalId: gt,
						onFlairChanged: e => {
							let {
								previewFlair: t,
								selectedTemplateId: s
							} = e;
							p(t, s)
						},
						subredditId: _
					}), m > 0 && d.a.createElement("div", {
						className: ht.a.Text
					}, d.a.createElement("span", {
						className: ht.a.right
					}, f.fbt._("Items {startNumItems}-{endNumItems}", [f.fbt._param("startNumItems", `${O}`), f.fbt._param("endNumItems", `${n}`)], {
						hk: "1FkOkC"
					})), d.a.createElement("span", {
						className: ht.a.Bullet
					}, "•"), d.a.createElement("span", {
						className: ht.a.left
					}, f.fbt._("{numSelected} selected", [f.fbt._param("numSelected", `${c}`)], {
						hk: "4uf9Ow"
					}))))
				}),
				Et = s("./src/reddit/contexts/Post/index.tsx"),
				yt = s("./src/reddit/components/ModQueueList/index.m.less"),
				jt = s.n(yt);
			const wt = e => Object(w.a)(e.id),
				St = u.a.div("ItemContainer", jt.a),
				It = u.a.div("ButtonContainer", jt.a),
				Nt = Object(y.v)({
					currentProfileName: y.j,
					isCommentPermalink: y.x,
					isCommentsPage: y.y,
					isFrontpage: y.B,
					isProfilePostListing: y.N,
					isTopicPage: y.T,
					queryParams: y.Z,
					pageLayer: e => e
				}),
				Rt = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: _e.e,
					loadMore: _e.g,
					modQueueListingItems: _e.f,
					origin: Oe.l,
					selectedItems: _e.i,
					subredditId: (e, t) => t.subredditName ? Object(Ce.I)(e, t.subredditName) : null
				}),
				Tt = Object(l.b)(Rt, e => ({
					addSelectedItems: t => e(Object(p.a)({
						ids: t
					})),
					bulkSelectItems: t => e(Object(p.b)({
						ids: t
					})),
					bulkUnselectItems: t => e(Object(p.c)({
						ids: t
					})),
					fireAdPixelsOfType: (t, s) => e(Object(b.y)(t, s)),
					openPost: t => e(Object(b.K)(t))
				})),
				Pt = e => e.page ? parseInt(e.page, 10) : ve.b,
				Lt = e => Pt(e) + 1,
				Dt = e => Math.max(ve.b, Pt(e) - 1),
				At = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Pt(e) === ve.b ? t : 25 * Dt(e) + t
				},
				Ft = e => Pt(e) === ve.b ? ve.b : 25 * Dt(e) + 1;
			var Mt;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Mt || (Mt = {}));
			class Bt extends d.a.Component {
				constructor() {
					super(...arguments), this.isCheckboxSelected = e => a()(this.props.selectedItems, e), this.isAllSelected = e => {
						const t = o()(e, this.props.selectedItems);
						return e.length > 0 && this.props.selectedItems.length > 0 && 0 === t.length
					}, this.toggleSelectedItems = (e, t) => {
						e ? this.props.bulkUnselectItems(t) : this.props.addSelectedItems(t)
					}, this.toggleSelectByFilter = e => {
						const t = [];
						if (!this.props.modQueueListingItems || !this.props.modQueueListingItems.length) return t;
						switch (e) {
							case Mt.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(w.a)(e.id) && t.push(e.id)
								});
								break;
							case Mt.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(j.a)(e.id) && t.push(e.id)
								});
								break;
							case Mt.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Mt.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(w.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== xe.f.Spoiler && e.type !== xe.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case Mt.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(w.a)(e.id)) {
										const s = e;
										s.media && s.media.type === ke.o.TEXT && t.push(s.id)
									}
								});
								break;
							case Mt.spamFiltered:
								this.props.modQueueListingItems.forEach(e => {
									e.isSpam && t.push(e.id)
								})
						}
						this.props.bulkSelectItems(t)
					}, this.isAnyItemSelected = () => this.props.selectedItems.length > 0, this.renderItems = e => {
						let t;
						const s = !!e.page && "1" !== e.page,
							n = !!e.loadMore && !!e.modQueueListingItems && 25 === e.modQueueListingItems.length;
						return e.modQueueListingItems && e.modQueueListingItems.length && (t = e.modQueueListingItems.map(t => {
							const s = `modqueue-item-[layout: ${e.layout}]-[id: ${t.id}]`;
							if (wt(t)) {
								const n = t,
									o = Object(S.b)({
										layout: e.layout,
										post: n
									});
								return d.a.createElement(St, {
									key: s
								}, d.a.createElement(o, {
									availableWidth: E.g,
									currentProfileName: e.currentProfileName,
									forceLoadMedia: !0,
									isCommentPermalink: e.isCommentPermalink,
									isCommentsPage: e.isCommentsPage,
									isFrontpage: e.isFrontpage,
									isProfilePostListing: e.isProfilePostListing,
									isCheckboxSelected: this.isCheckboxSelected(n.id),
									last: !0,
									pageLayer: e.pageLayer,
									postId: n.id,
									onClickPost: Object(C.b)(n.id, e),
									showBulkActionCheckbox: !0,
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(n.id), [n.id]),
									shouldShowGalleryTileOption: !0,
									isGalleryTileLayoutDefault: !0
								}))
							}
							const n = function(e, t) {
								const s = fe[t];
								return void 0 === s ? (Object(I.a)(void 0, `Could not find component for layout ${t}.`), ge) : s
							}(0, e.layout);
							return d.a.createElement(St, {
								key: s
							}, d.a.createElement(Et.a, {
								postId: t.postId
							}, d.a.createElement(n, {
								commentId: t.id,
								hasReports: Object(h.c)(t),
								highlight: !1,
								isCheckboxSelected: this.isCheckboxSelected(t.id),
								showBulkActionCheckbox: !0,
								showModTools: !0,
								toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(t.id), [t.id]),
								trackClick: e.sendEventWithName
							})))
						})), d.a.createElement("div", null, d.a.createElement("div", null, t), d.a.createElement(It, null, d.a.createElement(_, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Dt(e),
								after: null
							}),
							nextButtonEnabled: n,
							nextTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Lt(e),
								after: e.loadMore
							})
						})))
					}
				}
				componentWillUnmount() {
					this.props.bulkUnselectItems(this.props.selectedItems)
				}
				UNSAFE_componentWillUpdate(e) {
					e.pageName === this.props.pageName && e.page === this.props.page && e.profileName === this.props.profileName && e.subredditName === this.props.subredditName && e.postTypeFilter === this.props.postTypeFilter && e.postSort === this.props.postSort || this.props.bulkUnselectItems(this.props.selectedItems)
				}
				render() {
					const {
						props: e
					} = this, t = e.modQueueListingItems && e.modQueueListingItems.length ? e.modQueueListingItems.map(e => e.id) : [], s = e.selectedItems.length;
					return d.a.createElement("div", null, d.a.createElement(Ct, {
						endNumItems: At(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Ft(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? d.a.createElement(Pe, null) : e.isModQueueListingPending ? d.a.createElement(Fe, null) : null)
				}
			}
			t.a = Nt(Tt(Bt))
		},
		"./src/reddit/components/PaginationButtons/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_1kLu6euoyZ3I2dqDVrxoZD",
				routerLink: "_3k7SslJt4xhPIXKtoe8DFf",
				mDisabled: "_1VgBJV1BqaXyZVPBXEv-KC"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, s) {
			e.exports = {
				ReportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				reportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				DropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				dropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				DropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				dropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				mActive: "_1mwLBQ-SAEJSG4hvYZzPUO",
				SnoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				snoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				SnoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5",
				snoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/comment/moderation.ts"),
				c = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/helpers/isComment.ts"),
				g = s("./src/reddit/helpers/trackers/modTools.ts"),
				x = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				k = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				O = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				E = s.n(C);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = (e, t) => `SnoozableReport--${t}--${e}`, w = Object(r.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(_.b)(j(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: j(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(f.a)(t.reportedThingId) ? e(Object(l.h)(t.reportedThingId, t.reason, s)) : e(Object(c.fb)(t.reportedThingId, t.reason, s))
				}
			})), S = Object(u.a)(b.a);
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? d.kc.None : d.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(g.p)(Object(f.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: n,
						isDropdownOpen: r,
						isSnoozed: a,
						useNewFormat: d,
						className: l,
						dropdownClassName: c,
						iconClassName: m
					} = this.props, u = j(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(h.b, {
						id: u,
						className: Object(i.a)(E.a.DropdownLabelContainer, l),
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: u,
						className: E.a.DropdownLabel
					}, a ? y._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : d ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(k.a, null) : o.a.createElement(x.a, null))), o.a.createElement(S, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(i.a)(E.a.SnoozeButton, c),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: E.a.SnoozeButtonContent
					}, a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(O.a, {
						className: m
					}), y._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v.a, {
						className: m
					}), y._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = w(Object(p.c)(I))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext({})
		},
		"./src/reddit/controls/SearchBar/index.m.less": function(e, t, s) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Search/index.tsx"),
				i = s("./src/reddit/controls/SearchBar/index.m.less"),
				d = s.n(i);
			t.a = e => o.a.createElement("label", {
				className: Object(r.a)(d.a.searchContainer, e.className)
			}, o.a.createElement("input", {
				className: Object(r.a)(d.a.search, {
					[d.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), o.a.createElement("div", {
				className: Object(r.a)(d.a.searchIconContainer, {
					[d.a.mClickable]: !!e.onSearch,
					[d.a.mRightAligned]: e.rightAlignedIcon
				}),
				role: e.onSearch && "submit",
				onClick: e.onSearch
			}, o.a.createElement(a.a, null)))
		},
		"./src/reddit/helpers/trackers/modListing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "f", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				r = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				a = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				}),
				i = (e, t) => s => ({
					source: "moderator",
					action: "view",
					noun: "activemod_details",
					...Object(n.o)(s),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: e ? "general_queue" : "community"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.nb)(s, t)
					}
				}),
				d = (e, t, s) => o => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(n.o)(o),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.nb)(o, t)
					}
				}),
				l = (e, t, s, o) => r => ({
					source: "moderator",
					action: "click",
					noun: o ? "expand_previous_actions" : "collapse_previous_actions",
					...Object(n.o)(r),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "post" : "comment",
						reason: t
					},
					subreddit: Object(n.mb)(r, e)
				})
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(d.a.ModSettings, Object(a.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, s) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummaryByID.json": function(e) {
			e.exports = JSON.parse('{"id":"d968e053a7b8"}')
		},
		"./src/redditGQL/operations/SingleCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"f151b4667f32"}')
		},
		"./src/redditGQL/operations/SinglePostInfoById.json": function(e) {
			e.exports = JSON.parse('{"id":"b8368f5028bb"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.b0d38707ac2e8dde833f.js.map