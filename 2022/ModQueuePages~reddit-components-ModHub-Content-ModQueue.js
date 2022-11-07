// https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.43acac1d1bae84a6599f.js
// Retrieved at 11/7/2022, 9:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages~reddit-components-ModHub-Content-ModQueue"], {
		"./src/reddit/actions/modQueue/realtime.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/reddit/endpoints/modQueue/modActivity.ts"),
				o = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				i = s("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				d = s("./src/reddit/reducers/pages/modHub/index.ts"),
				l = s("./src/reddit/actions/modQueue/constants.ts");
			Object(o.a)({
				pages: {
					modHub: d.a
				}
			}), Object(o.a)({
				features: {
					modActivitySummaries: i.a
				}
			});
			const c = Object(r.a)(l.l),
				m = e => async (t, s, o) => {
					let {
						gqlContext: r
					} = o;
					e && t((e => async (t, s, o) => {
						let {
							gqlContext: r
						} = o;
						const i = await Object(n.b)(r(), {
								id: e
							}),
							d = Object(a.a)(i.body.data.subredditInfoById);
						t(c(d))
					})(e))
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
				component: "_3Pul81GjcQcqXueoAqkS0P"
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
				x = s("./src/reddit/contexts/Tooltip.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				v = s.n(C);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = "view--layout--FUE",
				w = "LayoutSwitch--picker",
				j = Object(d.a)(f.a),
				S = {
					[b.d.Card]: function(e) {
						return r.a.createElement(k.a, _({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return r.a.createElement(k.a, _({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return r.a.createElement(k.a, _({}, e, {
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
				T = Object(i.c)({
					dropdownIsOpen: Object(E.b)(w),
					postLayout: h.U,
					redditStyle: h.E
				}),
				R = Object(a.b)(T, e => ({
					onListingLayoutChange: (t, s) => e(Object(m.y)(t, s)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: w
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
							screen: Object(O.cb)(t),
							subreddit: Object(O.kb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: o
						} = this.props, a = s || b.e[o], i = e === a, d = S[e], c = I[e];
						return r.a.createElement(g.b, _({}, t, {
							className: Object(l.a)(v.a.LayoutItem, {
								[v.a.selected]: i,
								[v.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: c(),
							iconWrapperClassName: v.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: v.a.LayoutItemTextClassName
						}), r.a.createElement(d, {
							className: v.a.LayoutIcon,
							onClick: i ? void 0 : n,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(j, _({}, e, {
							className: v.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: v.a.DropdownRow,
							rowIconClassName: v.a.DropdownRowIcon,
							rowSelectedClassName: v.a.DropdownRowSelected,
							tooltipId: w
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
						className: Object(l.a)(v.a.Container, e),
						id: y
					}, r.a.createElement("div", {
						className: v.a.DropdownContainer,
						onClick: s
					}, this.renderItem(o, {
						id: w,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), r.a.createElement(x.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = N(R(Object(p.c)(Object(c.a)(P))))
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "c", (function() {
				return O
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
			}), x = () => u._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [u._param("=User Agreement", r.a.createElement("a", {
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
			}), f = (e, t) => {
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
			}, g = (e, t) => {
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
						return r.a.createElement(x, null);
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
			}, O = e => {
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
						return r.a.createElement(x, null);
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
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT"
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
				return be
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				c = s("./src/reddit/components/OverflowMenu/index.tsx"),
				m = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				u = s("./src/reddit/components/ReportFlow/new.tsx"),
				p = s("./src/reddit/constants/modals.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				g = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				k = s("./src/reddit/helpers/isPost.ts"),
				O = s("./src/reddit/helpers/trackers/gild.ts"),
				E = s("./src/reddit/helpers/trackers/modTools.ts"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/hooks/useTracking.ts"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/actions/comment/moderation.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				j = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/post.ts"),
				I = s("./src/reddit/actions/postFlair.ts"),
				N = s("./src/reddit/actions/removalReasons/index.ts"),
				T = s("./src/reddit/actions/reportFlow/index.ts"),
				R = s("./src/reddit/selectors/activeModal.ts"),
				P = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				L = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/models/Post/index.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {}));
			const F = e => {
				var t;
				return e.isRemoved && e.bannedBy !== d.m || Object(k.b)(e) && [D.g.AntiEvilOps, D.g.CommunityOps, D.g.ContentTakedown, D.g.CopyrightTakedown, D.g.Reddit].indexOf(e.removedByCategory) > -1 ? n.REMOVED : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : e.isSpam ? n.SPAM : (null === (t = e.modQueueTriggers) || void 0 === t ? void 0 : t.length) || e.bannedBy === d.m ? n.FILTERED : n.UNMODERATED
			};
			var M = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				A = s.n(M),
				B = s("./src/lib/classNames/index.ts"),
				Q = s("./src/reddit/components/HumanDate/index.tsx"),
				W = s("./src/reddit/components/UserIcon/index.tsx"),
				U = s("./src/reddit/helpers/name/index.ts"),
				z = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				V = s.n(H);
			const q = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(i.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(z.Bb)(e, {
					userName: null == t ? void 0 : t.approvedBy
				}) : null);
				if (!n) return null;
				const r = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: V.a.userIconWrapper
				}, a.a.createElement(W.a, {
					className: Object(B.a)(V.a.userIcon),
					iconUrl: null == n ? void 0 : n.accountIcon,
					userName: null == n ? void 0 : n.username,
					isNSFW: null == n ? void 0 : n.isNSFW
				})), a.a.createElement("div", {
					className: V.a.statusText
				}, a.a.createElement("p", {
					className: V.a.status
				}, o.fbt._("Approved", null, {
					hk: "4d15LY"
				})), a.a.createElement("p", null, Object(U.e)(null == n ? void 0 : n.username), r && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(Q.d, {
					seconds: r
				})))))
			};
			var Z = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const X = e => {
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
						case Z.a.AUTOMOD:
							s.push({
								icon: "bot_fill",
								heading: o.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: n.message
							});
							break;
						case Z.a.SHADOWBANNED_SUBMITTER:
							s.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: n.message
							});
							break;
						case Z.a.HATEFUL_CONTENT:
							s.push({
								icon: "mod_mode_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: n.message
							});
							break;
						case Z.a.CROWD_CONTROL:
							s.push({
								icon: "crowd_control",
								heading: o.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: n.message
							});
							break;
						case Z.a.BAN_EVASION:
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
					className: V.a.filteredWrapper
				}, s.map((e, t) => {
					let {
						heading: s,
						reason: n,
						icon: o
					} = e;
					return a.a.createElement("div", {
						key: `${s}-${n}-${t}`,
						className: V.a.filteredRow
					}, a.a.createElement(_.a, {
						isFilled: !0,
						name: o,
						className: Object(B.a)(V.a.coloredIcon, V.a.icon)
					}), a.a.createElement("div", {
						className: V.a.statusText
					}, a.a.createElement("p", {
						className: V.a.status
					}, s), n && a.a.createElement("p", null, n)))
				}))
			};
			var G = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				K = s("./src/reddit/selectors/subreddit.ts");
			const J = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(i.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(z.Bb)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					r = Object(k.b)(t),
					d = Object(i.e)(e => Object(K.Y)(e, {
						subredditId: r ? t.belongsTo.id : t.subredditId
					})),
					l = r && t.removedByCategory ? t.removedByCategory : null,
					c = l ? Object(G.b)(l) : "clear_fill",
					m = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, n ? a.a.createElement("div", {
					className: V.a.userIconWrapper
				}, a.a.createElement(W.a, {
					className: Object(B.a)(V.a.userIcon),
					iconUrl: null == n ? void 0 : n.accountIcon,
					userName: null == n ? void 0 : n.username,
					isNSFW: null == n ? void 0 : n.isNSFW
				})) : a.a.createElement(_.a, {
					isFilled: !0,
					name: c,
					className: Object(B.a)(V.a.coloredIcon, V.a.icon)
				}), a.a.createElement("div", {
					className: V.a.statusText
				}, a.a.createElement("p", {
					className: V.a.status
				}, o.fbt._("Removed{spam}{reason}", [o.fbt._param("spam", t.isSpam ? " as spam" : ""), o.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), a.a.createElement("p", null, (null == n ? void 0 : n.username) ? a.a.createElement(a.a.Fragment, null, Object(U.e)(null == n ? void 0 : n.username), m && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(Q.d, {
					seconds: m
				}))) : l && Object(G.f)(l, d.name))))
			};
			var Y = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				$ = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				te = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var se = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ne = (s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx"), s("./src/reddit/icons/fonts/Menu/index.tsx"), s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx"), s("./src/reddit/icons/fonts/Op/index.m.less")),
				oe = s.n(ne),
				re = s("./src/lib/lessComponent.tsx");
			re.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(te.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(te.a, null, e.desc)), "OpIcon", oe.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var ae = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				ie = s.n(ae);
			re.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(te.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", ie.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var de = s("./src/reddit/icons/fonts/Report/index.tsx"),
				le = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				ce = s.n(le);
			re.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(te.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", ce.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const me = e => {
					let {
						content: t
					} = e;
					const s = Object(ee.b)(),
						n = Object(i.d)(),
						d = Object(r.useCallback)(() => {
							const e = Object(k.a)(t.id),
								o = e ? S.fb : y.g,
								r = t.ignoreReports ? "restore_reports" : "ignore_reports",
								a = e ? Object(E.j)(r, t.id) : Object(E.i)(r, t.id);
							n(o(t.id)), s(a)
						}, [t.id, t.ignoreReports, s, n]),
						l = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(_.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(B.a)(V.a.coloredIcon, V.a.icon)
					}), a.a.createElement("div", {
						className: V.a.reportedWrapper
					}, !!t.modReports.length && a.a.createElement("div", {
						className: V.a.statusText
					}, a.a.createElement("p", {
						className: V.a.status
					}, o.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [o.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return a.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object(U.e)(n), ": ", s)
					})), !!t.userReports.length && a.a.createElement("div", {
						className: V.a.statusText
					}, a.a.createElement("div", {
						className: V.a.reportMeta
					}, a.a.createElement("p", {
						className: V.a.status
					}, o.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [o.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !l && a.a.createElement($.c, {
						className: V.a.ignoreButton,
						onClick: d,
						text: t.ignoreReports ? o.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : o.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? a.a.createElement(de.a, {
						className: V.a.ignoreButtonIcon
					}) : a.a.createElement(se.a, {
						className: V.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, o, r, i] = e;
						return n ? void 0 !== r && i ? a.a.createElement(Y.a, {
							key: `user-${n}`,
							reason: n,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: r,
							useNewFormat: !0,
							className: V.a.snoozabledButton,
							dropdownClassName: V.a.snoozableDropdown,
							iconClassName: V.a.snoozeIcon
						}) : a.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", o, ")") : null
					}))))
				},
				ue = e => {
					let {
						content: t
					} = e;
					const s = F(t),
						o = Object(r.useMemo)(() => {
							switch (s) {
								case n.APPROVED:
									return a.a.createElement(q, {
										content: t
									});
								case n.REMOVED:
								case n.SPAM:
									return a.a.createElement(J, {
										content: t
									});
								case n.FILTERED:
									return a.a.createElement(X, {
										content: t
									});
								case n.REPORTED:
									return a.a.createElement(me, {
										content: t
									});
								default:
									return a.a.createElement(r.Fragment, null)
							}
						}, [s, t]);
					return s === n.UNMODERATED ? null : a.a.createElement("div", {
						className: Object(B.a)(V.a.wrapper, {
							[V.a.approved]: s === n.APPROVED,
							[V.a.reported]: s === n.REPORTED
						})
					}, o)
				},
				pe = (e, t) => Object(E.b)(t, e),
				be = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: D
					} = e;
					const M = Object(v.a)(),
						B = Object(i.d)(),
						Q = F(t),
						W = Object(i.e)(P.b),
						U = Object(i.e)(R.b),
						z = Object(k.b)(t),
						H = Object(i.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						V = Object(i.e)(e => Object(L.m)(e, {
							postId: t.id
						})),
						q = Object(g.a)(V),
						Z = Object(f.a)(V),
						X = [n.REPORTED, n.FILTERED, n.UNMODERATED].includes(Q),
						G = [n.APPROVED, n.UNMODERATED, n.REPORTED].includes(Q),
						K = z && Z,
						J = Q === n.REMOVED && !t.modRemovalReason,
						Y = Q === n.FILTERED,
						$ = !z,
						ee = [n.REMOVED, n.SPAM].indexOf(Q) > -1,
						te = Object(r.useCallback)(e => {
							M(Object(C.k)(t.id, e, "post", s, D, void 0))
						}, [M, s, D, t]),
						se = z ? C.k : pe,
						ne = Object(r.useCallback)(() => {
							const e = z ? S.r : y.a;
							B(e(t.id)), M(se(t.id, "approve"))
						}, [M, B, t, z, se]),
						oe = Object(r.useCallback)(() => {
							const e = z ? S.T : y.e;
							B(e(t.id, !1)), t.isRemoved && t.bannedBy === d.m ? M(se(t.id, "confirm_remove")) : M(se(t.id, "remove"))
						}, [M, B, t, z, se]),
						re = Object(r.useCallback)(() => {
							B(Object(N.fetchReasonsAndOpenModal)(z ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, z, B]),
						ae = Object(r.useCallback)(() => {
							const e = z ? S.D : y.c;
							B(e(t.id)), M(se(t.id, t.isLocked ? "unlock" : "lock"))
						}, [se, M, B, t, z]),
						ie = Object(r.useCallback)(() => {
							B(Object(j.i)(Object(m.b)(t.id, !1))), M(Object(C.k)(t.id, "post_flair_picker"))
						}, [M, B, t]),
						de = Object(r.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							z && B(Object(I.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [B, z, t]),
						le = Object(r.useCallback)(() => {
							z && (B(Object(S.hb)(t.id)), M(Object(E.l)(t.isStickied ? "unsticky" : "sticky", t.id)))
						}, [M, B, t, z]),
						ce = Object(r.useCallback)(() => {
							z && (B(Object(S.I)(t.id)), M(Object(E.l)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [M, B, t, z]),
						me = Object(r.useCallback)(() => {
							z && (B(Object(S.F)(t.id)), Object(E.l)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [B, t, z]),
						be = Object(r.useCallback)(() => {
							z && (B(Object(j.i)(p.a.CROWD_CONTROL)), B(Object(S.t)(t.id)))
						}, [B, t, z]),
						he = Object(r.useCallback)(() => {
							z && (B(Object(S.C)(t.permalink)), te("copy"))
						}, [te, B, t, z]),
						xe = Object(r.useCallback)(async () => {
							if (!z) return;
							const e = Object(x.d)(x.a.GildingFlow, !0);
							B(Object(w.d)({
								awardId: null == W ? void 0 : W.id,
								correlationId: e,
								thingId: t.id
							})), M(Object(O.clickGildEvent)(t.id))
						}, [M, B, t, W, z]),
						fe = Object(r.useCallback)(() => {
							B(Object(T.c)(t.id)), te("report")
						}, [te, B, t]),
						ge = Object(r.useCallback)(() => {
							var e;
							z && (B(Object(S.eb)(t.id, !t.hidden, !1, !0)), te((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [te, B, t, z]),
						ke = Object(r.useCallback)(() => {
							z && (B(Object(S.T)(t.id, !1)), M(Object(E.l)("spam", t.id)))
						}, [M, B, t, z]);
					return a.a.createElement("div", {
						className: A.a.wrapper,
						"data-testid": "modqueue-action-bar"
					}, a.a.createElement(ue, {
						content: t
					}), a.a.createElement("div", {
						className: A.a.actionBar
					}, X && a.a.createElement(b.t, {
						className: [A.a.button, A.a.approve].join(" "),
						Icon: Object(_.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: ne,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), G && a.a.createElement(b.t, {
						className: A.a.button,
						Icon: Object(_.b)("close"),
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: oe,
						text: o.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), J && a.a.createElement(b.t, {
						className: A.a.button,
						onClick: re,
						text: o.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), Y && a.a.createElement(b.t, {
						className: A.a.button,
						Icon: Object(_.b)("close"),
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: oe,
						text: o.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), ee && a.a.createElement(b.t, {
						className: A.a.button,
						Icon: Object(_.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: ne,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), $ && a.a.createElement(b.t, {
						className: A.a.button,
						priority: t.isLocked ? b.c.Primary : b.c.Plain,
						Icon: Object(_.b)("lock"),
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: ae,
						text: t.isLocked ? o.fbt._("Unlock", null, {
							hk: "sdpF2"
						}) : o.fbt._("Lock", null, {
							hk: "1HN654"
						})
					}), K && a.a.createElement(b.t, {
						className: A.a.button,
						Icon: Object(_.b)("tag"),
						priority: b.c.Plain,
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: ie,
						text: o.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), z && U === Object(m.b)(t.id, !1) && a.a.createElement(m.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(m.b)(t.id, !1),
						onFlairChanged: de
					}), z && a.a.createElement(c.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: A.a.overflowButton,
						icon: a.a.createElement(_.a, {
							name: "overflow_horizontal",
							isFilled: !0
						})
					}, a.a.createElement("h6", {
						className: A.a.overflowHeading
					}, o.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(h.b, {
						className: A.a.dropdownRow,
						displayText: o.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ke
					}, a.a.createElement(_.a, {
						name: "spam"
					})), a.a.createElement(h.b, {
						className: A.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : o.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: le
					}, a.a.createElement(_.a, {
						name: t.isStickied ? "unpin" : "pin"
					}))), a.a.createElement(h.b, {
						className: A.a.dropdownRow,
						onClick: ae,
						displayText: (null == t ? void 0 : t.isLocked) ? o.fbt._("Unlock Comments", null, {
							hk: "zGuti"
						}) : o.fbt._("Lock Comments", null, {
							hk: "1QO9cp"
						})
					}, a.a.createElement(_.a, {
						name: "lock",
						isFilled: null == t ? void 0 : t.isLocked
					})), !t.crosspostParentId && a.a.createElement(h.b, {
						className: A.a.dropdownRow,
						onClick: ce,
						displayText: t.isOriginalContent ? o.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : o.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, a.a.createElement(_.a, {
						name: "original"
					})), a.a.createElement(h.b, {
						className: A.a.dropdownRow,
						onClick: me,
						displayText: t.isNSFW ? o.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : o.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, a.a.createElement(_.a, {
						name: "nsfw"
					})), q && "subreddit" === t.belongsTo.type && a.a.createElement(h.b, {
						className: A.a.dropdownRow,
						displayText: o.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: be
					}, a.a.createElement(_.a, {
						name: "crowd_control"
					})), a.a.createElement("h6", {
						className: A.a.overflowHeading
					}, o.fbt._("Other", null, {
						hk: "2543kN"
					})), a.a.createElement(h.b, {
						className: A.a.dropdownRow,
						displayText: o.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: he
					}, a.a.createElement(_.a, {
						name: "share"
					})), a.a.createElement(h.b, {
						className: A.a.dropdownRow,
						onClick: xe,
						displayText: o.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, a.a.createElement(_.a, {
						name: "award"
					}), a.a.createElement(l.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), a.a.createElement(h.b, {
						className: A.a.dropdownRow,
						displayText: o.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: fe
					}, a.a.createElement(_.a, {
						name: "report"
					})), a.a.createElement(h.b, {
						className: A.a.dropdownRow,
						onClick: ge,
						displayText: t.hidden ? o.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : o.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, a.a.createElement(_.a, {
						name: "hide"
					}))), H && a.a.createElement(u.a, {
						withOverlay: !0,
						postId: t.id
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
				x = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/selectors/profile.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				C = s("./src/lib/addQueryParams/index.ts"),
				v = s("./src/lib/filterQueryParams/index.ts"),
				_ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/selectors/meta.ts"),
				j = s("./src/reddit/selectors/experiments/chat.ts"),
				S = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				I = s.n(S);
			! function(e) {
				e.Comments = "comments", e.Posts = "links", e.ChatPosts = "chat_comments"
			}(n || (n = {}));
			const N = m.a.wrapped(_.b, "Row", I.a),
				T = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: w.k,
					isModQChatCommentsFilterEnabled: j.j
				});
			var R = Object(i.b)(T)(e => a.a.createElement("div", null, a.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(v.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, a.a.createElement(N, {
					displayText: o.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), a.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(C.a)(Object(v.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: n.Posts
					})
				}, a.a.createElement(N, {
					displayText: o.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === n.Posts
				})), a.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(C.a)(Object(v.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: n.Comments
					})
				}, a.a.createElement(N, {
					displayText: o.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === n.Comments
				})), e.isModQChatCommentsFilterEnabled && a.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_live_post"),
					to: Object(C.a)(Object(v.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: n.ChatPosts
					})
				}, a.a.createElement(N, {
					displayText: o.fbt._("Live Chat Messages", null, {
						hk: "26ZmtR"
					}),
					isSelected: e.postTypeFilter === n.ChatPosts
				})))),
				P = s("./src/reddit/hooks/useLocalStorage.ts"),
				L = s("./src/reddit/hooks/useMounted.ts"),
				D = s("./src/reddit/constants/experiments.ts"),
				F = s("./src/reddit/helpers/chooseVariant/index.ts"),
				M = s("./src/reddit/selectors/user.ts");
			const A = e => Object(F.c)(e, {
				experimentEligibilitySelector: M.R,
				experimentName: D.fc
			}) === D.Qd;
			var B = s("./src/reddit/components/ModQueueList/SortByNumReportsTooltip.m.less"),
				Q = s.n(B);
			const W = e => {
				let {
					children: t
				} = e;
				const [s, n] = Object(P.a)("sort_num_reports_seen_count", 0), d = Object(i.e)(A), l = Object(L.a)(), c = !d || !l || s > 3;
				Object(r.useEffect)(() => {
					c || n(s + 1)
				}, [c]);
				return c ? t : a.a.createElement("div", {
					className: Q.a.wrapper,
					onClick: () => {
						n(4)
					}
				}, a.a.createElement("span", {
					className: Q.a.tooltip
				}, o.fbt._("NEW! More sort options added", null, {
					hk: "5y9ye"
				})), t)
			};
			var U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				z = s("./src/reddit/controls/SearchBar/index.tsx"),
				H = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				q = s.n(V);
			const Z = Object(U.v)({
					currentPageUrl: U.f
				}),
				X = Object(d.c)({
					moderatingSubreddits: H.o,
					origin: w.k
				}),
				G = Object(i.b)(X),
				K = m.a.div("DropdownContainer", q.a),
				J = m.a.div("SearchBarContainer", q.a),
				Y = m.a.wrapped(_.b, "Row", q.a),
				$ = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class ee extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
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
					return a.a.createElement(K, {
						onClickCapture: this.stopPropagation
					}, a.a.createElement(J, null, a.a.createElement(z.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: o.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), a.a.createElement(y.default, {
						to: Object(v.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, a.a.createElement(Y, {
						displayText: o.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = $(t);
						return a.a.createElement(y.default, {
							key: t.id,
							to: Object(C.a)(Object(v.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), s)
						}, a.a.createElement(Y, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var te = Z(G(ee)),
				se = s("./src/reddit/helpers/trackers/modTools.ts"),
				ne = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				oe = s.n(ne);
			const re = Object(c.a)(h.a),
				ae = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				ie = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				de = "MODQ--POST_SORT_DROPDOWN",
				le = m.a.wrapped(f.a, "Inline", oe.a),
				ce = m.a.div("Filter", oe.a),
				me = m.a.wrapped(p.a, "LayoutSwitch", oe.a),
				ue = e => {
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
				pe = e => {
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
				be = Object(d.c)({
					isPostTypeFilterDropdownOpen: Object(O.b)(ie),
					isSubredditFilterDropdownOpen: Object(O.b)(ae),
					isPostSortDropdownOpen: Object(O.b)(de),
					isModQChatCommentsFilterEnabled: j.j,
					profile: (e, t) => {
						let {
							profileName: s
						} = t;
						return s ? Object(g.k)(e, {
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
				he = Object(i.b)(be, e => ({
					loadAllSubreddits: () => e(Object(u.d)(!0)),
					onOpenDropdown: t => e(Object(l.h)({
						tooltipId: t
					})),
					sendLivePostFilterDisplayedEvent: () => e(se.h)
				}));
			class xe extends a.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(ae), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(ie), this.props.sendEventWithName("content_type")(), this.props.isModQChatCommentsFilterEnabled && !this.props.isPostTypeFilterDropdownOpen && this.props.sendEvent(Object(se.h)())
					}, this.onOpenPostSortDropdown = () => {
						this.props.onOpenDropdown(de), this.props.sendEventWithName("modqueue_sort")()
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || o.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), s = e.postTypeFilter && ue(e.postTypeFilter) || o.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					}), n = pe(null == e ? void 0 : e.postSort);
					return a.a.createElement(le, null, !e.hideSubredditFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(ce, {
						id: ae,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, a.a.createElement(x.a, {
						name: "caret_down"
					})), a.a.createElement(re, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: ae
					}, a.a.createElement(te, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), a.a.createElement(W, null, a.a.createElement(ce, {
						id: de,
						onClick: this.onOpenPostSortDropdown
					}, n, a.a.createElement(x.a, {
						name: "caret_down"
					})), a.a.createElement(re, {
						isOpen: e.isPostSortDropdownOpen,
						tooltipId: de
					}, a.a.createElement(E.b, {
						postSort: e.postSort,
						sendEventWithName: e.sendEventWithName
					}))), e.showTypeFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(ce, {
						id: ie,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, a.a.createElement(x.a, {
						name: "caret_down"
					})), a.a.createElement(re, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: ie
					}, a.a.createElement(R, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), a.a.createElement(me, null))
				}
			}
			t.a = he(Object(b.c)(xe))
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
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/lib/classNames/index.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/components/PaginationButtons/index.m.less"),
				E = s.n(O);
			var C = e => d.a.createElement(k.a, {
					className: E.a.buttonContainer
				}, d.a.createElement(g.s, {
					className: Object(f.a)(E.a.routerLink, {
						[E.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, x.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), d.a.createElement(g.s, {
					className: Object(f.a)(E.a.routerLink, {
						[E.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, x.fbt._("Next", null, {
					hk: "2mEXAi"
				}))),
				v = s("./src/reddit/components/PostList/index.tsx"),
				_ = s("./src/reddit/constants/componentSizes.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/helpers/isPost.ts"),
				S = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				I = s("./src/lib/logs/console.ts"),
				N = s("./src/lib/objectSelector/index.ts"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				R = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				P = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				L = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				D = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				F = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				M = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				A = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				B = s("./src/reddit/components/ModModeReports/index.tsx"),
				Q = s("./src/reddit/components/RichTextJson/index.tsx"),
				W = s("./src/reddit/components/VerticalVotes/index.tsx"),
				U = s("./src/reddit/controls/Checkbox/index.tsx"),
				z = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				H = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				V = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				q = s.n(V);
			const Z = u.a.div("LeftRail", q.a),
				X = u.a.wrapped(U.a, "BulkActionCheckbox", q.a),
				G = u.a.div("CommentColumn", q.a),
				K = u.a.div("VoteColumn", q.a),
				J = u.a.wrapped(T.a, "ModToolsFlatlist", q.a),
				Y = u.a.wrapped(W.a, "Votes", q.a),
				$ = u.a.div("CommentContentWrapper", q.a),
				ee = u.a.div("ParentPostTitle", q.a),
				te = u.a.div("CommentParentWrapper", q.a),
				se = Object(N.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var ne = Object(R.b)(e => {
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
					} = e, p = Object(A.a)(s), b = Object(h.c)(s);
					return d.a.createElement(P.a, {
						className: Object(f.a)(t, q.a.Component, q.a.UnthreadedCommentContainer, {
							[q.a.isBanned]: !!s.bannedBy,
							[q.a.isReported]: Object(H.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: n
					}, d.a.createElement(Z, {
						className: Object(f.a)({
							[q.a.hasBorder]: !!s.bannedBy || Object(H.a)(s)
						})
					}, m && d.a.createElement(X, {
						isCheckboxSelected: r,
						toggleCheckbox: u
					})), d.a.createElement(K, null, d.a.createElement(Y, {
						compact: !1,
						model: s,
						onVoteClick: i,
						scoreClassName: q.a.score
					})), d.a.createElement(G, null, d.a.createElement(te, null, s.postTitle && d.a.createElement(ee, null, s.postTitle), s.postAuthor && d.a.createElement(F.a, {
						comment: s
					})), d.a.createElement($, null, d.a.createElement(L.a, {
						comment: s
					}, d.a.createElement(Q.b, {
						content: Object(z.a)(s),
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
					}), p && d.a.createElement(M.a, {
						thing: s
					}), b && d.a.createElement(B.a, {
						onIgnoreReports: a,
						reportable: s
					}), l && !s.isDeleted && d.a.createElement(J, {
						comment: s
					})))))
				}),
				oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				re = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				ae = s.n(re),
				ie = s("./src/reddit/components/ModQueueActionBar/index.tsx");
			const de = u.a.div("VoteSpacer", ae.a),
				le = u.a.div("ContentWrapper", ae.a),
				ce = u.a.wrapped(D.a, "Meta", ae.a),
				me = u.a.div("CommentParentWrapper", ae.a),
				ue = u.a.div("CommentContentWrapper", ae.a),
				pe = Object(N.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var be = Object(R.b)(u.a.wrapped(e => {
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
						isModQueueDisplayEnabled: b
					} = e, h = Object(A.a)(s);
					return d.a.createElement(P.a, {
						className: t,
						clickTrackingId: s.id,
						permalink: n
					}, d.a.createElement(oe.a, {
						model: s,
						handleVote: l,
						showBulkActionCheckbox: u,
						isCheckboxSelected: a,
						toggleCheckbox: p
					}), d.a.createElement(de, null, d.a.createElement(le, null, d.a.createElement(me, null, s.postAuthor && !b && d.a.createElement(F.a, {
						comment: s,
						subredditOrProfile: m
					}), b && d.a.createElement(ce, {
						comment: s,
						flair: o,
						subredditOrProfile: m
					}), s.postTitle && d.a.createElement(R.a, null, s.postTitle)), d.a.createElement(L.a, {
						comment: s
					}, d.a.createElement(ue, null, d.a.createElement(Q.b, {
						content: Object(z.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: pe(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					})), h && !b && d.a.createElement(M.a, {
						thing: s
					}), r && !b && d.a.createElement(B.a, {
						onIgnoreReports: i,
						reportable: s
					}), !b && d.a.createElement(ce, {
						comment: s,
						flair: o
					}))), c && !s.isDeleted && (b ? d.a.createElement(ie.a, {
						content: s
					}) : d.a.createElement(T.a, {
						comment: s
					}))))
				}, "Component", ae.a)),
				he = s("./src/reddit/constants/postLayout.ts");
			const xe = {
					[he.g.Large]: be,
					[he.g.Medium]: R.c,
					[he.g.Classic]: R.c,
					[he.g.Compact]: ne
				},
				fe = e => null;
			var ge = s("./src/reddit/models/Flair/index.ts"),
				ke = s("./src/reddit/models/Media/index.ts"),
				Oe = s("./src/reddit/models/ModQueue/index.ts"),
				Ee = s("./src/reddit/selectors/meta.ts"),
				Ce = s("./src/reddit/selectors/modQueue.ts"),
				ve = s("./src/reddit/selectors/subreddit.ts"),
				_e = s("./src/config.ts"),
				ye = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				we = s.n(ye);
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Se = `${_e.a.assetPath}/img/snoomoji/cat_blep.png`, Ie = u.a.div("Container", we.a), Ne = u.a.div("Image", we.a), Te = u.a.div("Title", we.a), Re = u.a.div("Text", we.a);
			var Pe = () => d.a.createElement(Ie, null, d.a.createElement(Ne, {
					style: {
						backgroundImage: `url(${Se})`
					}
				}), d.a.createElement(Te, null, je._("The queue is clean!", null, {
					hk: "3d14fC"
				})), d.a.createElement(Re, null, je._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Le = s("./src/reddit/components/PostList/Placeholder.tsx");
			const De = Object(y.v)(),
				Fe = Object(c.c)({
					layout: y.U
				});
			var Me = De(Object(l.b)(Fe)(e => d.a.createElement(Le.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Ae = s("./node_modules/lodash/flatten.js"),
				Be = s.n(Ae),
				Qe = s("./src/reddit/actions/tooltip.ts"),
				We = s("./src/reddit/icons/fonts/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				ze = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				He = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				qe = s("./src/higherOrderComponents/asTooltip.tsx"),
				Ze = s("./src/reddit/actions/modal.ts"),
				Xe = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ge = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
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
					className: Object(f.a)(at.a.StatusItem, e.className),
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? x.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, e.buttonText),
				dt = Object(c.c)({
					selectedItems: Ce.h
				}),
				lt = Object(l.b)(dt, e => ({
					onIgnoreReports: () => e(Object(p.f)(Oe.a.IgnoreReports)),
					onLock: () => e(Object(p.f)(Oe.a.Lock)),
					onMarkNSFW: () => e(Object(p.f)(Oe.a.MarkNSFW)),
					onSpoiler: () => e(Object(p.f)(Oe.a.Spoiler)),
					onUnignoreReports: () => e(Object(p.f)(Oe.a.UnignoreReports)),
					onUnlock: () => e(Object(p.f)(Oe.a.Unlock)),
					onUnmarkNSFW: () => e(Object(p.f)(Oe.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(p.f)(Oe.a.Unspoiler))
				})),
				ct = e => e.some(e => Object(w.a)(e));
			var mt = Object(qe.a)(lt(Object(ot.c)(e => d.a.createElement("div", {
				className: Object(f.a)(at.a.StatusList, e.className),
				style: e.style
			}, d.a.createElement("div", {
				className: at.a.StatusContainer
			}, d.a.createElement(it, {
				onClick: e.onIgnoreReports,
				buttonText: x.fbt._("Ignore Reports", null, {
					hk: "1hZ3hN"
				})
			}), d.a.createElement(it, {
				onClick: e.onUnignoreReports,
				buttonText: x.fbt._("Unignore Reports", null, {
					hk: "3y089p"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onLock,
				buttonText: x.fbt._("Lock", null, {
					hk: "4bc0vl"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnlock,
				buttonText: x.fbt._("Unlock", null, {
					hk: "Pe2ML"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onSpoiler,
				buttonText: x.fbt._("Mark as Spoiler", null, {
					hk: "4pIu4V"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnspoiler,
				buttonText: x.fbt._("Unmark as Spoiler", null, {
					hk: "1ImDYd"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onMarkNSFW,
				buttonText: x.fbt._("Mark as NSFW", null, {
					hk: "4yS4Hz"
				})
			}), d.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnmarkNSFW,
				buttonText: x.fbt._("Unmark as NSFW", null, {
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
			const xt = "BulkAction--BulkItemFilter",
				ft = "BulkActions--PostFlair--Modal",
				gt = Object(qe.a)(Ke.a),
				kt = e => d.a.createElement(Je.b, {
					className: Object(f.a)(ht.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				Ot = Object(c.c)({
					activeModalId: $e.a,
					dropdownIsOpen: Object(nt.b)(xt),
					flairData: tt.d,
					isApiPending: Ce.a,
					moderatorPermissions: et.n,
					posts: st.J,
					selectedItems: Ce.h
				}),
				Et = Object(l.b)(Ot, e => ({
					onApprove: () => e(Object(p.f)(Oe.a.Approve)),
					onFlair: (t, s) => e(Object(p.f)(Oe.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(Qe.h)({
						tooltipId: xt
					})),
					onOpenModToolsDropdown: () => e(Object(Qe.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(p.f)(Oe.a.Remove)),
					onSpam: () => e(Object(p.f)(Oe.a.Spam)),
					onToggleFlairModal: () => e(Object(Ze.i)(ft))
				})),
				Ct = (e, t) => {
					const s = Be()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const n = [];
					return s.forEach(e => {
						if (e.type === ge.f.Text || e.type === ge.f.Richtext) {
							const t = Object(Ye.g)(e);
							a()(n, t) || n.push(t)
						}
					}), n.length > 1 ? [{
						type: ge.f.Text,
						text: x.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var vt = Et(e => {
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
						onToggleFlairModal: g,
						posts: k,
						selectedItems: O,
						startNumItems: E,
						subredditId: C,
						toggleSelectAll: v,
						toggleSelectByFilter: _
					} = e, y = [{
						name: x.fbt._("Spam filtered", null, {
							hk: "S0DJ9"
						}),
						filterType: "spamFiltered"
					}, {
						name: x.fbt._("Has reports", null, {
							hk: "1x2hhv"
						}),
						filterType: "hasReports"
					}, {
						name: x.fbt._("Self posts", null, {
							hk: "KFHYI"
						}),
						filterType: "selfPosts"
					}, {
						name: x.fbt._("Posts with flair", null, {
							hk: "18cMZD"
						}),
						filterType: "postsWithFlair"
					}, {
						name: x.fbt._("Posts", null, {
							hk: "gGGKv"
						}),
						filterType: "posts"
					}, {
						name: x.fbt._("Comments", null, {
							hk: "1F1pwI"
						}),
						filterType: "comments"
					}, {
						name: x.fbt._("Chat posts", null, {
							hk: "1uSGtz"
						}),
						filterType: "chat_comments"
					}], w = l && l.flair, j = C && o && o.displaySettings.isEnabled && w && !ct(O);
					return d.a.createElement("div", {
						className: Object(f.a)(ht.a.ModToolsBulkOperations, s)
					}, d.a.createElement("div", {
						className: ht.a.CheckboxContainer,
						id: xt
					}, d.a.createElement(U.a, {
						className: ht.a.Checkbox,
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: v
					}), d.a.createElement(We.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), d.a.createElement(gt, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: xt
					}, y.map(e => d.a.createElement(kt, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => _(e.filterType)
					})))), r && d.a.createElement(i.Fragment, null, d.a.createElement(Ge.c, {
						className: ht.a.Button,
						disabled: a,
						text: x.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: u
					}, d.a.createElement(Ue.a, null)), d.a.createElement(Ge.c, {
						className: ht.a.Button,
						disabled: a,
						text: x.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, d.a.createElement(ze.a, null)), d.a.createElement(Ge.c, {
						className: ht.a.Button,
						disabled: a,
						text: x.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, d.a.createElement(He.a, null)), d.a.createElement(Ge.c, {
						className: ht.a.Button,
						disabled: a,
						onClick: e.onOpenModToolsDropdown
					}, d.a.createElement(pt, {
						tooltipId: "BulkActions--ModTools"
					}), d.a.createElement(We.a, {
						name: "list_bulleted"
					})), d.a.createElement("div", null, j && d.a.createElement(Ge.c, {
						disabled: a,
						onClick: g,
						className: ht.a.Button
					}, d.a.createElement(Ve.a, null)))), r && C && t === ft && d.a.createElement(Xe.a, {
						flairs: Ct(O, k),
						modalId: ft,
						onFlairChanged: e => {
							let {
								previewFlair: t,
								selectedTemplateId: s
							} = e;
							p(t, s)
						},
						subredditId: C
					}), m > 0 && d.a.createElement("div", {
						className: ht.a.Text
					}, d.a.createElement("span", {
						className: ht.a.right
					}, x.fbt._("Items {startNumItems}-{endNumItems}", [x.fbt._param("startNumItems", `${E}`), x.fbt._param("endNumItems", `${n}`)], {
						hk: "1FkOkC"
					})), d.a.createElement("span", {
						className: ht.a.Bullet
					}, "•"), d.a.createElement("span", {
						className: ht.a.left
					}, x.fbt._("{numSelected} selected", [x.fbt._param("numSelected", `${c}`)], {
						hk: "4uf9Ow"
					}))))
				}),
				_t = s("./src/reddit/contexts/Post/index.tsx"),
				yt = s("./src/reddit/components/ModQueueList/index.m.less"),
				wt = s.n(yt);
			const jt = e => Object(j.a)(e.id),
				St = u.a.div("ItemContainer", wt.a),
				It = u.a.div("ButtonContainer", wt.a),
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
				Tt = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: Ce.d,
					loadMore: Ce.f,
					modQueueListingItems: Ce.e,
					origin: Ee.k,
					selectedItems: Ce.h,
					subredditId: (e, t) => t.subredditName ? Object(ve.I)(e, t.subredditName) : null
				}),
				Rt = Object(l.b)(Tt, e => ({
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
				Pt = e => e.page ? parseInt(e.page, 10) : Oe.b,
				Lt = e => Pt(e) + 1,
				Dt = e => Math.max(Oe.b, Pt(e) - 1),
				Ft = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Pt(e) === Oe.b ? t : 25 * Dt(e) + t
				},
				Mt = e => Pt(e) === Oe.b ? Oe.b : 25 * Dt(e) + 1;
			var At;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(At || (At = {}));
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
							case At.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(j.a)(e.id) && t.push(e.id)
								});
								break;
							case At.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(w.a)(e.id) && t.push(e.id)
								});
								break;
							case At.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case At.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(j.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== ge.f.Spoiler && e.type !== ge.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case At.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(j.a)(e.id)) {
										const s = e;
										s.media && s.media.type === ke.o.TEXT && t.push(s.id)
									}
								});
								break;
							case At.spamFiltered:
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
							if (jt(t)) {
								const n = t,
									o = Object(S.b)({
										layout: e.layout,
										post: n
									});
								return d.a.createElement(St, {
									key: s
								}, d.a.createElement(o, {
									availableWidth: _.g,
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
									onClickPost: Object(v.b)(n.id, e),
									showBulkActionCheckbox: !0,
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(n.id), [n.id]),
									shouldShowGalleryTileOption: !0,
									isGalleryTileLayoutDefault: !0
								}))
							}
							const n = function(e, t) {
								const s = xe[t];
								return void 0 === s ? (Object(I.a)(void 0, `Could not find component for layout ${t}.`), fe) : s
							}(0, e.layout);
							return d.a.createElement(St, {
								key: s
							}, d.a.createElement(_t.a, {
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
						})), d.a.createElement("div", null, d.a.createElement("div", null, t), d.a.createElement(It, null, d.a.createElement(C, {
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
					return d.a.createElement("div", null, d.a.createElement(vt, {
						endNumItems: Ft(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Mt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? d.a.createElement(Pe, null) : e.isModQueueListingPending ? d.a.createElement(Me, null) : null)
				}
			}
			t.a = Nt(Rt(Bt))
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
				x = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/reddit/helpers/trackers/modTools.ts"),
				g = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				k = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				O = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				E = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				_ = s.n(v);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = (e, t) => `SnoozableReport--${t}--${e}`, j = Object(r.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(C.b)(w(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: w(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(x.a)(t.reportedThingId) ? e(Object(l.h)(t.reportedThingId, t.reason, s)) : e(Object(c.gb)(t.reportedThingId, t.reason, s))
				}
			})), S = Object(u.a)(b.a);
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? d.kc.None : d.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(f.n)(Object(x.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
					} = this.props, u = w(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(h.b, {
						id: u,
						className: Object(i.a)(_.a.DropdownLabelContainer, l),
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: u,
						className: _.a.DropdownLabel
					}, a ? y._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : d ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(k.a, null) : o.a.createElement(g.a, null))), o.a.createElement(S, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(i.a)(_.a.SnoozeButton, c),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: _.a.SnoozeButtonContent
					}, a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(E.a, {
						className: m
					}), y._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(O.a, {
						className: m
					}), y._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = j(Object(p.c)(I))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext({})
		},
		"./src/reddit/endpoints/modQueue/modActivity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = s("./src/redditGQL/operations/LastModActionInSubreddit.json"),
				r = s("./src/redditGQL/operations/ModActivitySummaryByID.json");
			const a = (e, t) => Object(n.a)(e, {
					...r,
					variables: t
				}),
				i = (e, t) => Object(n.a)(e, {
					...o,
					variables: t
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
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
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
			e.exports = JSON.parse('{"id":"e737da763051"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.43acac1d1bae84a6599f.js.map