// https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.6b99b018dc0d469da36d.js
// Retrieved at 9/20/2022, 11:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages~reddit-components-ModHub-Content-ModQueue"], {
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Tooltip.ts"),
				k = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				O = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				_ = s.n(O);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const y = "view--layout--FUE",
				v = "LayoutSwitch--picker",
				j = Object(l.a)(k.a),
				S = {
					[b.d.Card]: function(e) {
						return a.a.createElement(E.a, w({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return a.a.createElement(E.a, w({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return a.a.createElement(E.a, w({}, e, {
							name: "view_compact"
						}))
					}
				},
				T = {
					[b.d.Card]: () => o.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => o.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => o.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => o.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				I = Object(h.u)(),
				N = Object(i.c)({
					dropdownIsOpen: Object(C.b)(v),
					postLayout: h.S,
					redditStyle: h.D
				}),
				R = Object(r.b)(N, e => ({
					onListingLayoutChange: (t, s) => e(Object(m.y)(t, s)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: v
					}))
				}));
			class P extends a.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: o,
							subredditId: n
						} = this.props;
						t ? t(e) : (s(e, n), o(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(x.bb)(t),
							subreddit: Object(x.jb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: o,
							postLayout: n
						} = this.props, r = s || b.e[n], i = e === r, l = S[e], c = T[e];
						return a.a.createElement(f.b, w({}, t, {
							className: Object(d.a)(_.a.LayoutItem, {
								[_.a.selected]: i,
								[_.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: c(),
							iconWrapperClassName: _.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: _.a.LayoutItemTextClassName
						}), a.a.createElement(l, {
							className: _.a.LayoutIcon,
							onClick: i ? void 0 : o,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return a.a.createElement(j, w({}, e, {
							className: _.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: _.a.DropdownRow,
							rowIconClassName: _.a.DropdownRowIcon,
							rowSelectedClassName: _.a.DropdownRowSelected,
							tooltipId: v
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: o
					} = this.props, n = t || b.e[o];
					return a.a.createElement("div", {
						className: Object(d.a)(_.a.Container, e),
						id: y
					}, a.a.createElement("div", {
						className: _.a.DropdownContainer,
						onClick: s
					}, this.renderItem(n, {
						id: v,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), a.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = I(R(Object(u.c)(Object(c.a)(P))))
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return k
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "c", (function() {
				return x
			}));
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				i = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				l = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				m = s.n(c);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = r.a;
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = l.b;
						break;
					case d.g.Moderator:
						t = i.a;
						break;
					default:
						t = r.a
				}
				return a.a.createElement(t, {
					className: m.a.icon
				})
			}, b = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = "clear_fill";
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = "delete_fill";
						break;
					case d.g.Moderator:
						t = "mod_fill";
						break;
					default:
						t = "clear_fill"
				}
				return t
			}, h = () => p._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [p._param("=User Agreement", a.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("User Agreement", null, {
				hk: "3MHgRl"
			}))), p._param("=Content Policy", a.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), g = () => p._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [p._param("=User Agreement", a.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("User Agreement", null, {
				hk: "yMHtU"
			}))), p._param("=Content Policy", a.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), k = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return p._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case d.g.Author:
						return p._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case d.g.AuthorDeleted:
						return p._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case d.g.AutomodFiltered:
						return p._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case d.g.CommunityOps:
						return p._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case d.g.ContentTakedown:
						return p._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case d.g.CopyrightTakedown:
						return p._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case d.g.Moderator:
						return p._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [p._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case d.g.Reddit:
						return p._("Sorry, this post was removed by Reddit's spam filters.", null, {
							hk: "10ItEu"
						});
					default:
						return p._("Sorry, this post has been removed", null, {
							hk: "11sG9V"
						})
				}
			}, f = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return a.a.createElement(h, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return p._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case d.g.AutomodFiltered:
						return p._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [p._param("=[subreddit name]", a.a.createElement("a", {
							className: m.a.link,
							href: `${o.a.redditUrl}/r/${t}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, p._("{subreddit name}", [p._param("subreddit name", `r/${t}`)], {
							hk: "2o22vl"
						})))], {
							hk: "3dxuEW"
						});
					case d.g.CommunityOps:
						return p._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case d.g.ContentTakedown:
						return a.a.createElement(g, null);
					case d.g.CopyrightTakedown:
						return p._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case d.g.Moderator:
						return p._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case d.g.Reddit:
					default:
						return p._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, E = (e, t, s) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return p._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case d.g.Author:
						return p._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case d.g.AuthorDeleted:
						return p._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case d.g.AutomodFiltered:
						return p._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case d.g.CommunityOps:
						return p._("This post was removed by Reddit admin, u/{username}.", [p._param("username", t)], {
							hk: "34nHWu"
						});
					case d.g.ContentTakedown:
						return p._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case d.g.CopyrightTakedown:
						return p._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case d.g.Moderator:
						return p._("This post was removed by r/{subredditName} moderator, u/{username}.", [p._param("subredditName", s), p._param("username", t)], {
							hk: "270bcn"
						});
					case d.g.Reddit:
						return p._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return p._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, x = e => {
				switch (e) {
					case d.g.AntiEvilOps:
						return a.a.createElement(h, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return p._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case d.g.AutomodFiltered:
						return p._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case d.g.CommunityOps:
						return p._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [p._param("=just ask", a.a.createElement("a", {
							className: m.a.link,
							href: `${o.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, p._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case d.g.ContentTakedown:
						return a.a.createElement(g, null);
					case d.g.CopyrightTakedown:
						return p._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case d.g.Moderator:
						return p._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case d.g.Reddit:
						return p._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3S3oDL"
						});
					default:
						return p._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
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
				return se
			}));
			var o, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				c = s("./src/reddit/components/OverflowMenu/index.tsx"),
				m = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				p = s("./src/reddit/components/ReportFlow/new.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/helpers/correlationIdTracker.ts"),
				k = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				f = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				E = s("./src/reddit/helpers/isPost.ts"),
				x = s("./src/reddit/helpers/trackers/gild.ts"),
				C = s("./src/reddit/helpers/trackers/modTools.ts"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				w = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/actions/comment/moderation.ts"),
				v = s("./src/reddit/actions/gold/modals.ts"),
				j = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/post.ts"),
				T = s("./src/reddit/actions/postFlair.ts"),
				I = s("./src/reddit/actions/removalReasons/index.ts"),
				N = s("./src/reddit/actions/reportFlow/index.ts"),
				R = s("./src/reddit/selectors/activeModal.ts"),
				P = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				L = s("./src/reddit/selectors/moderatorPermissions.ts"),
				F = s("./src/reddit/models/Post/index.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(o || (o = {}));
			const D = e => {
				var t;
				return e.isRemoved && e.bannedBy !== l.l || Object(E.b)(e) && [F.g.AntiEvilOps, F.g.CommunityOps, F.g.ContentTakedown, F.g.CopyrightTakedown, F.g.Reddit].indexOf(e.removedByCategory) > -1 ? o.REMOVED : (e.numReports || 0) > 0 ? o.REPORTED : e.isApproved ? o.APPROVED : e.isSpam ? o.SPAM : (null === (t = e.modQueueTriggers) || void 0 === t ? void 0 : t.length) || e.bannedBy === l.l ? o.FILTERED : o.UNMODERATED
			};
			var B = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				A = s.n(B),
				M = s("./src/lib/classNames/index.ts"),
				U = s("./src/reddit/components/HumanDate/index.tsx"),
				W = s("./src/reddit/components/UserIcon/index.tsx"),
				Q = s("./src/reddit/helpers/name/index.ts"),
				z = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				V = s.n(H);
			const Z = e => {
				let {
					content: t
				} = e;
				var s;
				const o = Object(i.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(z.Ab)(e, {
					userName: null == t ? void 0 : t.approvedBy
				}) : null);
				if (!o) return null;
				const a = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: V.a.userIconWrapper
				}, r.a.createElement(W.a, {
					className: Object(M.a)(V.a.userIcon),
					iconUrl: null == o ? void 0 : o.accountIcon,
					userName: null == o ? void 0 : o.username,
					isNSFW: null == o ? void 0 : o.isNSFW
				})), r.a.createElement("div", {
					className: V.a.statusText
				}, r.a.createElement("p", {
					className: V.a.status
				}, n.fbt._("Approved", null, {
					hk: "4d15LY"
				})), r.a.createElement("p", null, Object(Q.e)(null == o ? void 0 : o.username), a && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(U.d, {
					seconds: a
				})))))
			};
			var X = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const q = e => {
				let {
					content: t
				} = e;
				const s = Object(a.useMemo)(() => {
					var e;
					const s = [];
					(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== l.l || s.push({
						icon: "bot_fill",
						heading: n.fbt._("Blocked by AutoMod", null, {
							hk: "XZuzM"
						})
					});
					for (const o of t.modQueueTriggers || []) switch (o.type) {
						case X.a.AUTOMOD:
							s.push({
								icon: "bot_fill",
								heading: n.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: o.message
							});
							break;
						case X.a.SHADOWBANNED_SUBMITTER:
							s.push({
								icon: "ban_fill",
								heading: n.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: o.message
							});
							break;
						case X.a.HATEFUL_CONTENT:
							s.push({
								icon: "mod_mode_fill",
								heading: n.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: o.message
							});
							break;
						case X.a.CROWD_CONTROL:
							s.push({
								icon: "crowd_control",
								heading: n.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: o.message
							});
							break;
						case X.a.BAN_EVASION:
							s.push({
								icon: "ban_fill",
								heading: n.fbt._("Blocked by automatic filter", null, {
									hk: "1Olxtp"
								}),
								reason: o.message
							})
					}
					return s
				}, [t.modQueueTriggers, t.bannedBy]);
				return r.a.createElement("div", {
					className: V.a.filteredWrapper
				}, s.map((e, t) => {
					let {
						heading: s,
						reason: o,
						icon: n
					} = e;
					return r.a.createElement("div", {
						key: `${s}-${o}-${t}`,
						className: V.a.filteredRow
					}, r.a.createElement(w.a, {
						isFilled: !0,
						name: n,
						className: Object(M.a)(V.a.coloredIcon, V.a.icon)
					}), r.a.createElement("div", {
						className: V.a.statusText
					}, r.a.createElement("p", {
						className: V.a.status
					}, s), o && r.a.createElement("p", null, o)))
				}))
			};
			var K = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				G = s("./src/reddit/selectors/subreddit.ts");
			const Y = e => {
				let {
					content: t
				} = e;
				var s;
				const o = Object(i.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(z.Ab)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					a = Object(E.b)(t),
					l = Object(i.e)(e => Object(G.W)(e, {
						subredditId: a ? t.belongsTo.id : t.subredditId
					})),
					d = a && t.removedByCategory ? t.removedByCategory : null,
					c = d ? Object(K.b)(d) : "clear_fill",
					m = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return r.a.createElement(r.a.Fragment, null, o ? r.a.createElement("div", {
					className: V.a.userIconWrapper
				}, r.a.createElement(W.a, {
					className: Object(M.a)(V.a.userIcon),
					iconUrl: null == o ? void 0 : o.accountIcon,
					userName: null == o ? void 0 : o.username,
					isNSFW: null == o ? void 0 : o.isNSFW
				})) : r.a.createElement(w.a, {
					isFilled: !0,
					name: c,
					className: Object(M.a)(V.a.coloredIcon, V.a.icon)
				}), r.a.createElement("div", {
					className: V.a.statusText
				}, r.a.createElement("p", {
					className: V.a.status
				}, n.fbt._("Removed{spam}{reason}", [n.fbt._param("spam", t.isSpam ? " as spam" : ""), n.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), r.a.createElement("p", null, (null == o ? void 0 : o.username) ? r.a.createElement(r.a.Fragment, null, Object(Q.e)(null == o ? void 0 : o.username), m && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(U.d, {
					seconds: m
				}))) : d && Object(K.f)(d, l.name))))
			};
			var J = s("./src/reddit/components/Reports/SnoozableReport/index.tsx");
			const $ = e => {
					let {
						content: t
					} = e;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(w.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(M.a)(V.a.coloredIcon, V.a.icon)
					}), r.a.createElement("div", {
						className: V.a.reportedWrapper
					}, !!t.modReports.length && r.a.createElement("div", {
						className: V.a.statusText
					}, r.a.createElement("p", {
						className: V.a.status
					}, n.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [n.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, o] = e;
						return r.a.createElement("p", {
							key: `${s}-${o}-${t}`
						}, Object(Q.e)(o), ": ", s)
					})), !!t.userReports.length && r.a.createElement("div", {
						className: V.a.statusText
					}, r.a.createElement("p", {
						className: V.a.status
					}, n.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [n.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), t.userReports.map((e, s) => {
						let [o, n, a, i] = e;
						return o ? void 0 !== a && i ? r.a.createElement(J.a, {
							key: `user-${o}`,
							reason: o,
							amount: n,
							reportedThingId: t.id,
							isSnoozed: a,
							useNewFormat: !0,
							className: V.a.snoozabledButton,
							dropdownClassName: V.a.snoozableDropdown,
							iconClassName: V.a.snoozeIcon
						}) : r.a.createElement("p", {
							key: `user-${o}`
						}, o, " (", n, ")") : null
					}))))
				},
				ee = e => {
					let {
						content: t
					} = e;
					const s = D(t),
						n = Object(a.useMemo)(() => {
							switch (s) {
								case o.APPROVED:
									return r.a.createElement(Z, {
										content: t
									});
								case o.REMOVED:
								case o.SPAM:
									return r.a.createElement(Y, {
										content: t
									});
								case o.FILTERED:
									return r.a.createElement(q, {
										content: t
									});
								case o.REPORTED:
									return r.a.createElement($, {
										content: t
									});
								default:
									return r.a.createElement(a.Fragment, null)
							}
						}, [s, t]);
					return s === o.UNMODERATED ? null : r.a.createElement("div", {
						className: Object(M.a)(V.a.wrapper, {
							[V.a.approved]: s === o.APPROVED,
							[V.a.reported]: s === o.REPORTED
						})
					}, n)
				},
				te = (e, t) => Object(C.b)(t, e),
				se = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: F
					} = e;
					const B = Object(_.a)(),
						M = Object(i.d)(),
						U = D(t),
						W = Object(i.e)(P.b),
						Q = Object(i.e)(R.b),
						z = Object(E.b)(t),
						H = Object(i.e)(e => {
							var s, o;
							return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === t.id
						}),
						V = Object(i.e)(e => Object(L.m)(e, {
							postId: t.id
						})),
						Z = Object(f.a)(V),
						X = Object(k.a)(V),
						q = [o.REPORTED, o.FILTERED, o.UNMODERATED].includes(U),
						K = [o.APPROVED, o.UNMODERATED, o.REPORTED].includes(U),
						G = z && X,
						Y = U === o.REMOVED && !t.modRemovalReason,
						J = U === o.FILTERED,
						$ = !z,
						se = [o.REMOVED, o.SPAM].indexOf(U) > -1,
						oe = Object(a.useCallback)(e => {
							B(Object(O.k)(t.id, e, "post", s, F, void 0))
						}, [B, s, F, t]),
						ne = z ? O.k : te,
						ae = Object(a.useCallback)(() => {
							const e = z ? S.s : y.a;
							M(e(t.id)), B(ne(t.id, "approve"))
						}, [B, M, t, z, ne]),
						re = Object(a.useCallback)(() => {
							const e = z ? S.U : y.e;
							M(e(t.id, !1)), t.isRemoved && t.bannedBy === l.l ? B(ne(t.id, "confirm_remove")) : B(ne(t.id, "remove"))
						}, [B, M, t, z, ne]),
						ie = Object(a.useCallback)(() => {
							M(Object(I.fetchReasonsAndOpenModal)(z ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, z, M]),
						le = Object(a.useCallback)(() => {
							const e = z ? S.E : y.c;
							M(e(t.id)), B(ne(t.id, t.isLocked ? "unlock" : "lock"))
						}, [ne, B, M, t, z]),
						de = Object(a.useCallback)(() => {
							M(Object(j.i)(Object(m.b)(t.id, !1))), B(Object(O.k)(t.id, "post_flair_picker"))
						}, [B, M, t]),
						ce = Object(a.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: o
							} = e;
							z && M(Object(T.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: o
							}))
						}, [M, z, t]),
						me = Object(a.useCallback)(() => {
							z && (M(Object(S.ib)(t.id)), B(Object(C.l)(t.isStickied ? "unsticky" : "sticky", t.id)))
						}, [B, M, t, z]),
						pe = Object(a.useCallback)(() => {
							z && (M(Object(S.J)(t.id)), B(Object(C.l)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [B, M, t, z]),
						ue = Object(a.useCallback)(() => {
							z && (M(Object(S.G)(t.id)), Object(C.l)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [M, t, z]),
						be = Object(a.useCallback)(() => {
							z && (M(Object(j.i)(u.a.CROWD_CONTROL)), M(Object(S.u)(t.id)))
						}, [M, t, z]),
						he = Object(a.useCallback)(() => {
							z && (M(Object(S.D)(t.permalink)), oe("copy"))
						}, [oe, M, t, z]),
						ge = Object(a.useCallback)(async () => {
							if (!z) return;
							const e = Object(g.d)(g.a.GildingFlow, !0);
							M(Object(v.d)({
								awardId: null == W ? void 0 : W.id,
								correlationId: e,
								thingId: t.id
							})), B(Object(x.clickGildEvent)(t.id))
						}, [B, M, t, W, z]),
						ke = Object(a.useCallback)(() => {
							M(Object(N.c)(t.id)), oe("report")
						}, [oe, M, t]),
						fe = Object(a.useCallback)(() => {
							var e;
							z && (M(Object(S.fb)(t.id, !t.hidden, !1, !0)), oe((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [oe, M, t, z]),
						Ee = Object(a.useCallback)(() => {
							z && (M(Object(S.U)(t.id, !1)), B(Object(C.l)("spam", t.id)))
						}, [B, M, t, z]);
					return r.a.createElement("div", {
						className: A.a.wrapper,
						"data-testid": "modqueue-action-bar"
					}, r.a.createElement(ee, {
						content: t
					}), r.a.createElement("div", {
						className: A.a.actionBar
					}, q && r.a.createElement(b.t, {
						className: [A.a.button, A.a.approve].join(" "),
						Icon: Object(w.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: ae,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), K && r.a.createElement(b.t, {
						className: A.a.button,
						Icon: Object(w.b)("close"),
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: re,
						text: n.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), Y && r.a.createElement(b.t, {
						className: A.a.button,
						onClick: ie,
						text: n.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), J && r.a.createElement(b.t, {
						className: A.a.button,
						Icon: Object(w.b)("close"),
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: re,
						text: n.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), se && r.a.createElement(b.t, {
						className: A.a.button,
						Icon: Object(w.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: ae,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), $ && r.a.createElement(b.t, {
						className: A.a.button,
						priority: t.isLocked ? b.c.Primary : b.c.Plain,
						Icon: Object(w.b)("lock"),
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: le,
						text: t.isLocked ? n.fbt._("Unlock", null, {
							hk: "sdpF2"
						}) : n.fbt._("Lock", null, {
							hk: "1HN654"
						})
					}), G && r.a.createElement(b.t, {
						className: A.a.button,
						Icon: Object(w.b)("tag"),
						priority: b.c.Plain,
						iconPosition: b.h.L,
						iconClassName: A.a.icon,
						onClick: de,
						text: n.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), z && Q === Object(m.b)(t.id, !1) && r.a.createElement(m.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(m.b)(t.id, !1),
						onFlairChanged: ce
					}), z && r.a.createElement(c.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: A.a.overflowButton,
						icon: r.a.createElement(w.a, {
							name: "overflow_horizontal",
							isFilled: !0
						})
					}, r.a.createElement("h6", {
						className: A.a.overflowHeading
					}, n.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(h.b, {
						className: A.a.dropdownRow,
						displayText: n.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: Ee
					}, r.a.createElement(w.a, {
						name: "spam"
					})), r.a.createElement(h.b, {
						className: A.a.dropdownRow,
						displayText: t.isStickied ? n.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : n.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: me
					}, r.a.createElement(w.a, {
						name: t.isStickied ? "unpin" : "pin"
					}))), r.a.createElement(h.b, {
						className: A.a.dropdownRow,
						onClick: le,
						displayText: (null == t ? void 0 : t.isLocked) ? n.fbt._("Unlock Comments", null, {
							hk: "zGuti"
						}) : n.fbt._("Lock Comments", null, {
							hk: "1QO9cp"
						})
					}, r.a.createElement(w.a, {
						name: "lock",
						isFilled: null == t ? void 0 : t.isLocked
					})), !t.crosspostParentId && r.a.createElement(h.b, {
						className: A.a.dropdownRow,
						onClick: pe,
						displayText: t.isOriginalContent ? n.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : n.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, r.a.createElement(w.a, {
						name: "original"
					})), r.a.createElement(h.b, {
						className: A.a.dropdownRow,
						onClick: ue,
						displayText: t.isNSFW ? n.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : n.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, r.a.createElement(w.a, {
						name: "nsfw"
					})), Z && "subreddit" === t.belongsTo.type && r.a.createElement(h.b, {
						className: A.a.dropdownRow,
						displayText: n.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: be
					}, r.a.createElement(w.a, {
						name: "crowd_control"
					})), r.a.createElement("h6", {
						className: A.a.overflowHeading
					}, n.fbt._("Other", null, {
						hk: "2543kN"
					})), r.a.createElement(h.b, {
						className: A.a.dropdownRow,
						displayText: n.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: he
					}, r.a.createElement(w.a, {
						name: "share"
					})), r.a.createElement(h.b, {
						className: A.a.dropdownRow,
						onClick: ge,
						displayText: n.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, r.a.createElement(w.a, {
						name: "award"
					}), r.a.createElement(d.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), r.a.createElement(h.b, {
						className: A.a.dropdownRow,
						displayText: n.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: ke
					}, r.a.createElement(w.a, {
						name: "report"
					})), r.a.createElement(h.b, {
						className: A.a.dropdownRow,
						onClick: fe,
						displayText: t.hidden ? n.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : n.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, r.a.createElement(w.a, {
						name: "hide"
					}))), H && r.a.createElement(p.a, {
						withOverlay: !0,
						postId: t.id
					})))
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
			var o, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/modQueue/index.ts"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/selectors/profile.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				O = s("./src/lib/addQueryParams/index.ts"),
				_ = s("./src/lib/filterQueryParams/index.ts"),
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/controls/InternalLink/index.tsx"),
				v = s("./src/reddit/selectors/meta.ts"),
				j = s("./src/reddit/selectors/experiments/chat.ts"),
				S = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				T = s.n(S);
			! function(e) {
				e.Comments = "comments", e.Posts = "links", e.ChatPosts = "chat_comments"
			}(o || (o = {}));
			const I = m.a.wrapped(w.b, "Row", T.a),
				N = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					origin: v.k,
					isModQChatCommentsFilterEnabled: j.i
				});
			var R = Object(i.b)(N)(e => r.a.createElement("div", null, r.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(_.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, r.a.createElement(I, {
					displayText: n.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), r.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(O.a)(Object(_.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Posts
					})
				}, r.a.createElement(I, {
					displayText: n.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === o.Posts
				})), r.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(O.a)(Object(_.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Comments
					})
				}, r.a.createElement(I, {
					displayText: n.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === o.Comments
				})), e.isModQChatCommentsFilterEnabled && r.a.createElement(y.default, {
					onClick: e.sendEventWithName("content_type_live_post"),
					to: Object(O.a)(Object(_.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.ChatPosts
					})
				}, r.a.createElement(I, {
					displayText: n.fbt._("Live Chat Messages", null, {
						hk: "26ZmtR"
					}),
					isSelected: e.postTypeFilter === o.ChatPosts
				})))),
				P = s("./src/reddit/hooks/useLocalStorage.ts"),
				L = s("./src/reddit/hooks/useMounted.ts"),
				F = s("./src/reddit/constants/experiments.ts"),
				D = s("./src/reddit/helpers/chooseVariant/index.ts"),
				B = s("./src/reddit/selectors/user.ts");
			const A = e => Object(D.c)(e, {
				experimentEligibilitySelector: B.Q,
				experimentName: F.jc
			}) === F.Kd;
			var M = s("./src/reddit/components/ModQueueList/SortByNumReportsTooltip.m.less"),
				U = s.n(M);
			const W = e => {
				let {
					children: t
				} = e;
				const [s, o] = Object(P.a)("sort_num_reports_seen_count", 0), l = Object(i.e)(A), d = Object(L.a)(), c = !l || !d || s > 3;
				Object(a.useEffect)(() => {
					c || o(s + 1)
				}, [c]);
				return c ? t : r.a.createElement("div", {
					className: U.a.wrapper,
					onClick: () => {
						o(4)
					}
				}, r.a.createElement("span", {
					className: U.a.tooltip
				}, n.fbt._("NEW! More sort options added", null, {
					hk: "5y9ye"
				})), t)
			};
			var Q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				z = s("./src/reddit/controls/SearchBar/index.tsx"),
				H = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				Z = s.n(V);
			const X = Object(Q.u)({
					currentPageUrl: Q.f
				}),
				q = Object(l.c)({
					moderatingSubreddits: H.o,
					origin: v.k
				}),
				K = Object(i.b)(q),
				G = m.a.div("DropdownContainer", Z.a),
				Y = m.a.div("SearchBarContainer", Z.a),
				J = m.a.wrapped(w.b, "Row", Z.a),
				$ = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class ee extends r.a.Component {
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
					let o;
					o = e.moderatingSubreddits !== this.props.moderatingSubreddits || 0 !== s.indexOf(this.state.search) ? this.sortedSubreddits : this.filteredSubreddits, this.filteredSubreddits = o.filter(e => -1 !== e.displayText.toLowerCase().indexOf(s))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(G, {
						onClickCapture: this.stopPropagation
					}, r.a.createElement(Y, null, r.a.createElement(z.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: n.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), r.a.createElement(y.default, {
						to: Object(_.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, r.a.createElement(J, {
						displayText: n.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = $(t);
						return r.a.createElement(y.default, {
							key: t.id,
							to: Object(O.a)(Object(_.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), s)
						}, r.a.createElement(J, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var te = X(K(ee)),
				se = s("./src/reddit/helpers/trackers/modTools.ts"),
				oe = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				ne = s.n(oe);
			const ae = Object(c.a)(h.a),
				re = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				ie = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				le = "MODQ--POST_SORT_DROPDOWN",
				de = m.a.wrapped(k.a, "Inline", ne.a),
				ce = m.a.div("Filter", ne.a),
				me = m.a.wrapped(u.a, "LayoutSwitch", ne.a),
				pe = e => {
					switch (e) {
						case "allPostTypes":
							return n.fbt._("Posts and Comments", null, {
								hk: "2BGBVi"
							});
						case "allSubreddits":
							return n.fbt._("All subreddits", null, {
								hk: "3GnUZA"
							});
						case "comments":
							return n.fbt._("Comments", null, {
								hk: "3PSW3P"
							});
						case "links":
							return n.fbt._("Posts", null, {
								hk: "1nfhQO"
							});
						case "searchPlaceholder":
							return n.fbt._("Find subreddit", null, {
								hk: "2rRq64"
							});
						case "chat_comments":
							return n.fbt._("Live Chat Messages", null, {
								hk: "4iL79y"
							})
					}
				},
				ue = e => {
					switch (e) {
						case "oldest":
							return n.fbt._("Oldest First", null, {
								hk: "1JMyTy"
							});
						case "most_reported":
							return n.fbt._("Most Reported First", null, {
								hk: "mANyW"
							});
						default:
							return n.fbt._("Newest First", null, {
								hk: "iP4pS"
							})
					}
				},
				be = Object(l.c)({
					isPostTypeFilterDropdownOpen: Object(x.b)(ie),
					isSubredditFilterDropdownOpen: Object(x.b)(re),
					isPostSortDropdownOpen: Object(x.b)(le),
					isModQChatCommentsFilterEnabled: j.i,
					profile: (e, t) => {
						let {
							profileName: s
						} = t;
						return s ? Object(f.k)(e, {
							profileName: s
						}) : null
					},
					subreddit: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(E.A)(e, {
							subredditName: s
						}) : null
					}
				}),
				he = Object(i.b)(be, e => ({
					loadAllSubreddits: () => e(Object(p.d)(!0)),
					onOpenDropdown: t => e(Object(d.h)({
						tooltipId: t
					})),
					sendLivePostFilterDisplayedEvent: () => e(se.h)
				}));
			class ge extends r.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(re), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(ie), this.props.sendEventWithName("content_type")(), this.props.isModQChatCommentsFilterEnabled && !this.props.isPostTypeFilterDropdownOpen && this.props.sendEvent(Object(se.h)())
					}, this.onOpenPostSortDropdown = () => {
						this.props.onOpenDropdown(le), this.props.sendEventWithName("modqueue_sort")()
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || n.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), s = e.postTypeFilter && pe(e.postTypeFilter) || n.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					}), o = ue(null == e ? void 0 : e.postSort);
					return r.a.createElement(de, null, !e.hideSubredditFilter && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce, {
						id: re,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, r.a.createElement(g.a, {
						name: "caret_down"
					})), r.a.createElement(ae, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: re
					}, r.a.createElement(te, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), r.a.createElement(W, null, r.a.createElement(ce, {
						id: le,
						onClick: this.onOpenPostSortDropdown
					}, o, r.a.createElement(g.a, {
						name: "caret_down"
					})), r.a.createElement(ae, {
						isOpen: e.isPostSortDropdownOpen,
						tooltipId: le
					}, r.a.createElement(C.b, {
						postSort: e.postSort,
						sendEventWithName: e.sendEventWithName
					}))), e.showTypeFilter && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce, {
						id: ie,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, r.a.createElement(g.a, {
						name: "caret_down"
					})), r.a.createElement(ae, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: ie
					}, r.a.createElement(R, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), r.a.createElement(me, null))
				}
			}
			t.a = he(Object(b.c)(ge))
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
			var o = s("./node_modules/lodash/difference.js"),
				n = s.n(o),
				a = s("./node_modules/lodash/includes.js"),
				r = s.n(a),
				i = s("./node_modules/react/index.js"),
				l = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				k = s("./src/lib/classNames/index.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/layout/row/Inline/index.tsx"),
				x = s("./src/reddit/components/PaginationButtons/index.m.less"),
				C = s.n(x);
			var O = e => l.a.createElement(E.a, {
					className: C.a.buttonContainer
				}, l.a.createElement(f.s, {
					className: Object(k.a)(C.a.routerLink, {
						[C.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, g.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), l.a.createElement(f.s, {
					className: Object(k.a)(C.a.routerLink, {
						[C.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, g.fbt._("Next", null, {
					hk: "2mEXAi"
				}))),
				_ = s("./src/reddit/components/PostList/index.tsx"),
				w = s("./src/reddit/constants/componentSizes.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/helpers/isPost.ts"),
				S = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = s("./src/lib/logs/console.ts"),
				I = s("./src/lib/objectSelector/index.ts"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				R = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				P = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				L = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				F = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				D = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				B = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				A = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				M = s("./src/reddit/components/ModModeReports/index.tsx"),
				U = s("./src/reddit/components/RichTextJson/index.tsx"),
				W = s("./src/reddit/components/VerticalVotes/index.tsx"),
				Q = s("./src/reddit/controls/Checkbox/index.tsx"),
				z = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				H = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				V = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				Z = s.n(V);
			const X = p.a.div("LeftRail", Z.a),
				q = p.a.wrapped(Q.a, "BulkActionCheckbox", Z.a),
				K = p.a.div("CommentColumn", Z.a),
				G = p.a.div("VoteColumn", Z.a),
				Y = p.a.wrapped(N.a, "ModToolsFlatlist", Z.a),
				J = p.a.wrapped(W.a, "Votes", Z.a),
				$ = p.a.div("CommentContentWrapper", Z.a),
				ee = p.a.div("ParentPostTitle", Z.a),
				te = p.a.div("CommentParentWrapper", Z.a),
				se = Object(I.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var oe = Object(R.b)(e => {
					const {
						className: t,
						comment: s,
						commentPermalink: o,
						flair: n,
						isCheckboxSelected: a = !1,
						onIgnoreReports: r,
						onVoteClick: i,
						showModTools: d,
						subreddit: c,
						showBulkActionCheckbox: m,
						toggleCheckbox: p
					} = e, u = Object(A.a)(s), b = Object(h.c)(s);
					return l.a.createElement(P.a, {
						className: Object(k.a)(t, Z.a.Component, Z.a.UnthreadedCommentContainer, {
							[Z.a.isBanned]: !!s.bannedBy,
							[Z.a.isReported]: Object(H.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: o
					}, l.a.createElement(X, {
						className: Object(k.a)({
							[Z.a.hasBorder]: !!s.bannedBy || Object(H.a)(s)
						})
					}, m && l.a.createElement(q, {
						isCheckboxSelected: a,
						toggleCheckbox: p
					})), l.a.createElement(G, null, l.a.createElement(J, {
						compact: !1,
						model: s,
						onVoteClick: i,
						scoreClassName: Z.a.score
					})), l.a.createElement(K, null, l.a.createElement(te, null, s.postTitle && l.a.createElement(ee, null, s.postTitle), s.postAuthor && l.a.createElement(D.a, {
						comment: s
					})), l.a.createElement($, null, l.a.createElement(L.a, {
						comment: s
					}, l.a.createElement(U.b, {
						content: Object(z.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: se(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					}), l.a.createElement(F.a, {
						comment: s,
						flair: n,
						subredditName: c ? c.displayText : null
					}), u && l.a.createElement(B.a, {
						thing: s
					}), b && l.a.createElement(M.a, {
						onIgnoreReports: r,
						reportable: s
					}), d && !s.isDeleted && l.a.createElement(Y, {
						comment: s
					})))))
				}),
				ne = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ae = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				re = s.n(ae),
				ie = s("./src/reddit/components/ModQueueActionBar/index.tsx");
			const le = p.a.div("VoteSpacer", re.a),
				de = p.a.div("ContentWrapper", re.a),
				ce = p.a.wrapped(F.a, "Meta", re.a),
				me = p.a.div("CommentParentWrapper", re.a),
				pe = p.a.div("CommentContentWrapper", re.a),
				ue = Object(I.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var be = Object(R.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						commentPermalink: o,
						flair: n,
						hasReports: a,
						isCheckboxSelected: r = !1,
						onIgnoreReports: i,
						onVoteClick: d,
						showModTools: c,
						subreddit: m,
						showBulkActionCheckbox: p,
						toggleCheckbox: u,
						isModQueueDisplayEnabled: b
					} = e, h = Object(A.a)(s);
					return l.a.createElement(P.a, {
						className: t,
						clickTrackingId: s.id,
						permalink: o
					}, l.a.createElement(ne.a, {
						model: s,
						handleVote: d,
						showBulkActionCheckbox: p,
						isCheckboxSelected: r,
						toggleCheckbox: u
					}), l.a.createElement(le, null, l.a.createElement(de, null, l.a.createElement(me, null, s.postAuthor && !b && l.a.createElement(D.a, {
						comment: s,
						subredditOrProfile: m
					}), b && l.a.createElement(ce, {
						comment: s,
						flair: n,
						subredditOrProfile: m
					}), s.postTitle && l.a.createElement(R.a, null, s.postTitle)), l.a.createElement(L.a, {
						comment: s
					}, l.a.createElement(pe, null, l.a.createElement(U.b, {
						content: Object(z.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: ue(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					})), h && !b && l.a.createElement(B.a, {
						thing: s
					}), a && !b && l.a.createElement(M.a, {
						onIgnoreReports: i,
						reportable: s
					}), !b && l.a.createElement(ce, {
						comment: s,
						flair: n
					}))), c && !s.isDeleted && (b ? l.a.createElement(ie.a, {
						content: s
					}) : l.a.createElement(N.a, {
						comment: s
					}))))
				}, "Component", re.a)),
				he = s("./src/reddit/constants/postLayout.ts");
			const ge = {
					[he.g.Large]: be,
					[he.g.Medium]: R.c,
					[he.g.Classic]: R.c,
					[he.g.Compact]: oe
				},
				ke = e => null;
			var fe = s("./src/reddit/models/Flair/index.ts"),
				Ee = s("./src/reddit/models/Media/index.ts"),
				xe = s("./src/reddit/models/ModQueue/index.ts"),
				Ce = s("./src/reddit/selectors/meta.ts"),
				Oe = s("./src/reddit/selectors/modQueue.ts"),
				_e = s("./src/reddit/selectors/subreddit.ts"),
				we = s("./src/config.ts"),
				ye = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				ve = s.n(ye);
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Se = `${we.a.assetPath}/img/snoomoji/cat_blep.png`, Te = p.a.div("Container", ve.a), Ie = p.a.div("Image", ve.a), Ne = p.a.div("Title", ve.a), Re = p.a.div("Text", ve.a);
			var Pe = () => l.a.createElement(Te, null, l.a.createElement(Ie, {
					style: {
						backgroundImage: `url(${Se})`
					}
				}), l.a.createElement(Ne, null, je._("The queue is clean!", null, {
					hk: "3d14fC"
				})), l.a.createElement(Re, null, je._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Le = s("./src/reddit/components/PostList/Placeholder.tsx");
			const Fe = Object(y.u)(),
				De = Object(c.c)({
					layout: y.S
				});
			var Be = Fe(Object(d.b)(De)(e => l.a.createElement(Le.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Ae = s("./node_modules/lodash/flatten.js"),
				Me = s.n(Ae),
				Ue = s("./src/reddit/actions/tooltip.ts"),
				We = s("./src/reddit/icons/fonts/index.tsx"),
				Qe = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				ze = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				He = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				Ze = s("./src/higherOrderComponents/asTooltip.tsx"),
				Xe = s("./src/reddit/actions/modal.ts"),
				qe = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ke = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Ge = s("./src/reddit/controls/Dropdown/index.tsx"),
				Ye = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Je = s("./src/reddit/helpers/flair.ts"),
				$e = s("./src/reddit/selectors/activeModalId.ts"),
				et = s("./src/reddit/selectors/moderatorPermissions.ts"),
				tt = s("./src/reddit/selectors/postFlair.ts"),
				st = s("./src/reddit/selectors/posts.ts"),
				ot = s("./src/reddit/selectors/tooltip.ts"),
				nt = s("./src/reddit/components/TrackingHelper/index.tsx"),
				at = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				rt = s.n(at);
			const it = e => l.a.createElement("button", {
					className: Object(k.a)(rt.a.StatusItem, e.className),
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? g.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, e.buttonText),
				lt = Object(c.c)({
					selectedItems: Oe.h
				}),
				dt = Object(d.b)(lt, e => ({
					onIgnoreReports: () => e(Object(u.f)(xe.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(xe.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(xe.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(xe.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(xe.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(xe.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(xe.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(xe.a.Unspoiler))
				})),
				ct = e => e.some(e => Object(v.a)(e));
			var mt = Object(Ze.a)(dt(Object(nt.c)(e => l.a.createElement("div", {
				className: Object(k.a)(rt.a.StatusList, e.className),
				style: e.style
			}, l.a.createElement("div", {
				className: rt.a.StatusContainer
			}, l.a.createElement(it, {
				onClick: e.onIgnoreReports,
				buttonText: g.fbt._("Ignore Reports", null, {
					hk: "1hZ3hN"
				})
			}), l.a.createElement(it, {
				onClick: e.onUnignoreReports,
				buttonText: g.fbt._("Unignore Reports", null, {
					hk: "3y089p"
				})
			}), l.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onLock,
				buttonText: g.fbt._("Lock", null, {
					hk: "4bc0vl"
				})
			}), l.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnlock,
				buttonText: g.fbt._("Unlock", null, {
					hk: "Pe2ML"
				})
			}), l.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onSpoiler,
				buttonText: g.fbt._("Mark as Spoiler", null, {
					hk: "4pIu4V"
				})
			}), l.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnspoiler,
				buttonText: g.fbt._("Unmark as Spoiler", null, {
					hk: "1ImDYd"
				})
			}), l.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onMarkNSFW,
				buttonText: g.fbt._("Mark as NSFW", null, {
					hk: "4yS4Hz"
				})
			}), l.a.createElement(it, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnmarkNSFW,
				buttonText: g.fbt._("Unmark as NSFW", null, {
					hk: "ZzA74"
				})
			}))))));
			const pt = Object(c.c)({
				isDropdownOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(ot.b)(s)(e)
				}
			});
			var ut = Object(d.b)(pt)(Object(nt.c)(e => {
					const {
						className: t,
						isDropdownOpen: s,
						tooltipId: o
					} = e;
					return l.a.createElement("div", {
						id: o,
						className: t
					}, l.a.createElement(mt, {
						isOpen: s,
						tooltipId: o
					}))
				})),
				bt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				ht = s.n(bt);
			const gt = "BulkAction--BulkItemFilter",
				kt = "BulkActions--PostFlair--Modal",
				ft = Object(Ze.a)(Ge.a),
				Et = e => l.a.createElement(Ye.b, {
					className: Object(k.a)(ht.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				xt = Object(c.c)({
					activeModalId: $e.a,
					dropdownIsOpen: Object(ot.b)(gt),
					flairData: tt.d,
					isApiPending: Oe.a,
					moderatorPermissions: et.n,
					posts: st.J,
					selectedItems: Oe.h
				}),
				Ct = Object(d.b)(xt, e => ({
					onApprove: () => e(Object(u.f)(xe.a.Approve)),
					onFlair: (t, s) => e(Object(u.f)(xe.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(Ue.h)({
						tooltipId: gt
					})),
					onOpenModToolsDropdown: () => e(Object(Ue.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(u.f)(xe.a.Remove)),
					onSpam: () => e(Object(u.f)(xe.a.Spam)),
					onToggleFlairModal: () => e(Object(Xe.i)(kt))
				})),
				Ot = (e, t) => {
					const s = Me()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const o = [];
					return s.forEach(e => {
						if (e.type === fe.f.Text || e.type === fe.f.Richtext) {
							const t = Object(Je.g)(e);
							r()(o, t) || o.push(t)
						}
					}), o.length > 1 ? [{
						type: fe.f.Text,
						text: g.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var _t = Ct(e => {
					const {
						activeModalId: t,
						className: s,
						endNumItems: o,
						flairData: n,
						isAnyItemSelected: a,
						isApiPending: r,
						moderatorPermissions: d,
						numSelected: c,
						numShowing: m,
						onApprove: p,
						onFlair: u,
						onRemove: b,
						onSpam: h,
						onToggleFlairModal: f,
						posts: E,
						selectedItems: x,
						startNumItems: C,
						subredditId: O,
						toggleSelectAll: _,
						toggleSelectByFilter: w
					} = e, y = [{
						name: g.fbt._("Spam filtered", null, {
							hk: "S0DJ9"
						}),
						filterType: "spamFiltered"
					}, {
						name: g.fbt._("Has reports", null, {
							hk: "1x2hhv"
						}),
						filterType: "hasReports"
					}, {
						name: g.fbt._("Self posts", null, {
							hk: "KFHYI"
						}),
						filterType: "selfPosts"
					}, {
						name: g.fbt._("Posts with flair", null, {
							hk: "18cMZD"
						}),
						filterType: "postsWithFlair"
					}, {
						name: g.fbt._("Posts", null, {
							hk: "gGGKv"
						}),
						filterType: "posts"
					}, {
						name: g.fbt._("Comments", null, {
							hk: "1F1pwI"
						}),
						filterType: "comments"
					}, {
						name: g.fbt._("Chat posts", null, {
							hk: "1uSGtz"
						}),
						filterType: "chat_comments"
					}], v = d && d.flair, j = O && n && n.displaySettings.isEnabled && v && !ct(x);
					return l.a.createElement("div", {
						className: Object(k.a)(ht.a.ModToolsBulkOperations, s)
					}, l.a.createElement("div", {
						className: ht.a.CheckboxContainer,
						id: gt
					}, l.a.createElement(Q.a, {
						className: ht.a.Checkbox,
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: _
					}), l.a.createElement(We.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), l.a.createElement(ft, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: gt
					}, y.map(e => l.a.createElement(Et, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => w(e.filterType)
					})))), a && l.a.createElement(i.Fragment, null, l.a.createElement(Ke.c, {
						className: ht.a.Button,
						disabled: r,
						text: g.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, l.a.createElement(Qe.a, null)), l.a.createElement(Ke.c, {
						className: ht.a.Button,
						disabled: r,
						text: g.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, l.a.createElement(ze.a, null)), l.a.createElement(Ke.c, {
						className: ht.a.Button,
						disabled: r,
						text: g.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, l.a.createElement(He.a, null)), l.a.createElement(Ke.c, {
						className: ht.a.Button,
						disabled: r,
						onClick: e.onOpenModToolsDropdown
					}, l.a.createElement(ut, {
						tooltipId: "BulkActions--ModTools"
					}), l.a.createElement(We.a, {
						name: "list_bulleted"
					})), l.a.createElement("div", null, j && l.a.createElement(Ke.c, {
						disabled: r,
						onClick: f,
						className: ht.a.Button
					}, l.a.createElement(Ve.a, null)))), a && O && t === kt && l.a.createElement(qe.a, {
						flairs: Ot(x, E),
						modalId: kt,
						onFlairChanged: e => {
							let {
								previewFlair: t,
								selectedTemplateId: s
							} = e;
							u(t, s)
						},
						subredditId: O
					}), m > 0 && l.a.createElement("div", {
						className: ht.a.Text
					}, l.a.createElement("span", {
						className: ht.a.right
					}, g.fbt._("Items {startNumItems}-{endNumItems}", [g.fbt._param("startNumItems", `${C}`), g.fbt._param("endNumItems", `${o}`)], {
						hk: "1FkOkC"
					})), l.a.createElement("span", {
						className: ht.a.Bullet
					}, "•"), l.a.createElement("span", {
						className: ht.a.left
					}, g.fbt._("{numSelected} selected", [g.fbt._param("numSelected", `${c}`)], {
						hk: "4uf9Ow"
					}))))
				}),
				wt = s("./src/reddit/contexts/Post/index.tsx"),
				yt = s("./src/reddit/components/ModQueueList/index.m.less"),
				vt = s.n(yt);
			const jt = e => Object(j.a)(e.id),
				St = p.a.div("ItemContainer", vt.a),
				Tt = p.a.div("ButtonContainer", vt.a),
				It = Object(y.u)({
					currentProfileName: y.i,
					isCommentPermalink: y.w,
					isCommentsPage: y.x,
					isFrontpage: y.A,
					isProfilePostListing: y.L,
					isTopicPage: y.R,
					queryParams: y.X,
					pageLayer: e => e
				}),
				Nt = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: Oe.d,
					loadMore: Oe.f,
					modQueueListingItems: Oe.e,
					origin: Ce.k,
					selectedItems: Oe.h,
					subredditId: (e, t) => t.subredditName ? Object(_e.G)(e, t.subredditName) : null
				}),
				Rt = Object(d.b)(Nt, e => ({
					addSelectedItems: t => e(Object(u.a)({
						ids: t
					})),
					bulkSelectItems: t => e(Object(u.b)({
						ids: t
					})),
					bulkUnselectItems: t => e(Object(u.c)({
						ids: t
					})),
					fireAdPixelsOfType: (t, s) => e(Object(b.z)(t, s)),
					openPost: t => e(Object(b.L)(t))
				})),
				Pt = e => e.page ? parseInt(e.page, 10) : xe.b,
				Lt = e => Pt(e) + 1,
				Ft = e => Math.max(xe.b, Pt(e) - 1),
				Dt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Pt(e) === xe.b ? t : 25 * Ft(e) + t
				},
				Bt = e => Pt(e) === xe.b ? xe.b : 25 * Ft(e) + 1;
			var At;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(At || (At = {}));
			class Mt extends l.a.Component {
				constructor() {
					super(...arguments), this.isCheckboxSelected = e => r()(this.props.selectedItems, e), this.isAllSelected = e => {
						const t = n()(e, this.props.selectedItems);
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
									Object(v.a)(e.id) && t.push(e.id)
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
										s.flair && s.flair.filter(e => e.type !== fe.f.Spoiler && e.type !== fe.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case At.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(j.a)(e.id)) {
										const s = e;
										s.media && s.media.type === Ee.o.TEXT && t.push(s.id)
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
							o = !!e.loadMore && !!e.modQueueListingItems && 25 === e.modQueueListingItems.length;
						return e.modQueueListingItems && e.modQueueListingItems.length && (t = e.modQueueListingItems.map(t => {
							const s = `modqueue-item-[layout: ${e.layout}]-[id: ${t.id}]`;
							if (jt(t)) {
								const o = t,
									n = Object(S.b)({
										layout: e.layout,
										post: o
									});
								return l.a.createElement(St, {
									key: s
								}, l.a.createElement(n, {
									availableWidth: w.g,
									currentProfileName: e.currentProfileName,
									forceLoadMedia: !0,
									isCommentPermalink: e.isCommentPermalink,
									isCommentsPage: e.isCommentsPage,
									isFrontpage: e.isFrontpage,
									isProfilePostListing: e.isProfilePostListing,
									isCheckboxSelected: this.isCheckboxSelected(o.id),
									last: !0,
									pageLayer: e.pageLayer,
									postId: o.id,
									onClickPost: Object(_.b)(o.id, e),
									showBulkActionCheckbox: !0,
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(o.id), [o.id]),
									shouldShowGalleryTileOption: !0,
									isGalleryTileLayoutDefault: !0
								}))
							}
							const o = function(e, t) {
								const s = ge[t];
								return void 0 === s ? (Object(T.a)(void 0, `Could not find component for layout ${t}.`), ke) : s
							}(0, e.layout);
							return l.a.createElement(St, {
								key: s
							}, l.a.createElement(wt.a, {
								postId: t.postId
							}, l.a.createElement(o, {
								commentId: t.id,
								hasReports: Object(h.c)(t),
								highlight: !1,
								isCheckboxSelected: this.isCheckboxSelected(t.id),
								showBulkActionCheckbox: !0,
								showModTools: !0,
								toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(t.id), [t.id]),
								trackClick: e.sendEventWithName
							})))
						})), l.a.createElement("div", null, l.a.createElement("div", null, t), l.a.createElement(Tt, null, l.a.createElement(O, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Ft(e),
								after: null
							}),
							nextButtonEnabled: o,
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
					return l.a.createElement("div", null, l.a.createElement(_t, {
						endNumItems: Dt(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Bt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? l.a.createElement(Pe, null) : e.isModQueueListingPending ? l.a.createElement(Be, null) : null)
				}
			}
			t.a = It(Rt(Mt))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/comment/moderation.ts"),
				c = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/helpers/isComment.ts"),
				k = s("./src/reddit/helpers/trackers/modTools.ts"),
				f = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				E = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				x = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				C = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				w = s.n(_);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = (e, t) => `SnoozableReport--${t}--${e}`, j = Object(a.b)(() => Object(r.c)({
				isDropdownOpen: (e, t) => Object(O.b)(v(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: v(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(g.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, s)) : e(Object(c.hb)(t.reportedThingId, t.reason, s))
				}
			})), S = Object(p.a)(b.a);
			class T extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? l.ic.None : l.ic.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(k.n)(Object(g.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: o,
						isDropdownOpen: a,
						isSnoozed: r,
						useNewFormat: l,
						className: d,
						dropdownClassName: c,
						iconClassName: m
					} = this.props, p = v(e, s);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(h.b, {
						id: p,
						className: Object(i.a)(w.a.DropdownLabelContainer, d),
						onClick: o
					}, n.a.createElement("label", {
						htmlFor: p,
						className: w.a.DropdownLabel
					}, r ? y._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : l ? `${e} (${t})` : `${t}: ${e}`, a ? n.a.createElement(E.a, null) : n.a.createElement(f.a, null))), n.a.createElement(S, {
						isOpen: a,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: Object(i.a)(w.a.SnoozeButton, c),
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: w.a.SnoozeButtonContent
					}, r ? n.a.createElement(n.a.Fragment, null, n.a.createElement(C.a, {
						className: m
					}), y._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(x.a, {
						className: m
					}), y._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = j(Object(u.c)(T))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext({})
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Search/index.tsx"),
				i = s("./src/reddit/controls/SearchBar/index.m.less"),
				l = s.n(i);
			t.a = e => n.a.createElement("div", {
				className: Object(a.a)(l.a.searchContainer, e.className)
			}, n.a.createElement("input", {
				className: Object(a.a)(l.a.search, {
					[l.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), n.a.createElement("div", {
				className: Object(a.a)(l.a.searchIconContainer, {
					[l.a.mClickable]: !!e.onSearch,
					[l.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, n.a.createElement(r.a, null)))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.6b99b018dc0d469da36d.js.map