// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.f58bc5145d8b0285d0bf.js
// Retrieved at 5/9/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-Content-ModQueue"], {
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
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asTooltip.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				O = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				S = s.n(O);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const I = "view--layout--FUE",
				y = "LayoutSwitch--picker",
				j = Object(d.a)(g.a),
				w = {
					[b.d.Card]: function(e) {
						return r.a.createElement(C.a, _({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return r.a.createElement(C.a, _({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return r.a.createElement(C.a, _({}, e, {
							name: "view_compact"
						}))
					}
				},
				P = {
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
				L = Object(h.u)(),
				T = Object(i.c)({
					dropdownIsOpen: Object(E.b)(y),
					postLayout: h.R,
					redditStyle: h.D
				}),
				N = Object(a.b)(T, e => ({
					onListingLayoutChange: (t, s) => e(Object(m.y)(t, s)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: y
					}))
				}));
			class v extends r.a.Component {
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
							screen: Object(k.Y)(t),
							subreddit: Object(k.gb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: o,
							postLayout: n
						} = this.props, a = s || b.e[n], i = e === a, d = w[e], c = P[e];
						return r.a.createElement(f.b, _({}, t, {
							className: Object(l.a)(S.a.LayoutItem, {
								[S.a.selected]: i,
								[S.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: c(),
							iconWrapperClassName: S.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: S.a.LayoutItemTextClassName
						}), r.a.createElement(d, {
							className: S.a.LayoutIcon,
							onClick: i ? void 0 : o,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(j, _({}, e, {
							className: S.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: S.a.DropdownRow,
							rowIconClassName: S.a.DropdownRowIcon,
							rowSelectedClassName: S.a.DropdownRowSelected,
							tooltipId: y
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
					return r.a.createElement("div", {
						className: Object(l.a)(S.a.Container, e),
						id: I
					}, r.a.createElement("div", {
						className: S.a.DropdownContainer,
						onClick: s
					}, this.renderItem(n, {
						id: y,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), r.a.createElement(x.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = L(N(Object(u.c)(Object(c.a)(v))))
		},
		"./src/reddit/components/ModHub/Content/ModQueue.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				m = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				p = s("./src/reddit/components/ModQueueList/index.tsx"),
				u = s("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				b = s("./src/reddit/components/ModHub/Content/index.m.less"),
				h = s.n(b);
			t.default = e => a.a.createElement(m.a, {
				className: Object(i.a)(h.a.container, e.layout === l.g.Large ? h.a.isLargePostLayout : void 0)
			}, a.a.createElement(m.b, null, (e => {
				switch (e) {
					case "modqueue":
						return n.fbt._("Mod Queue", null, {
							hk: "XBRcQ"
						});
					case "reports":
						return n.fbt._("Reports", null, {
							hk: "14I8Zy"
						});
					case "spam":
						return n.fbt._("Spam", null, {
							hk: "3JIGi7"
						});
					case "edited":
						return n.fbt._("Edited", null, {
							hk: "3BN3ms"
						});
					case "unmoderated":
						return n.fbt._("Unmoderated", null, {
							hk: "36ryPx"
						});
					default:
						return n.fbt._("Mod Queue", null, {
							hk: "XBRcQ"
						})
				}
			})(e.pageName), a.a.createElement(c.a, {
				linkUrl: `${o.a.redditModHelpUrl}/hc/en-us/articles/360010090132`
			})), a.a.createElement(u.a, {
				hideSubredditFilter: !0,
				postTypeFilter: e.postTypeFilter,
				postSort: e.postSort,
				sendEventWithName: e.sendEventWithName,
				showTypeFilter: e.pageName !== d.gc.Unmoderated,
				subredditName: e.subredditName
			}), a.a.createElement(p.a, {
				after: e.after,
				layout: e.layout,
				sendEventWithName: e.sendEventWithName,
				subredditName: e.subredditName,
				page: e.page,
				pageName: e.pageName,
				postTypeFilter: e.postTypeFilter,
				postSort: e.postSort
			}))
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
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/modQueue/index.ts"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				E = s("./src/lib/addQueryParams/index.ts"),
				O = s("./src/lib/filterQueryParams/index.ts"),
				S = s("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				I = s("./src/reddit/selectors/meta.ts"),
				y = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				j = s.n(y);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(o || (o = {}));
			const w = m.a.wrapped(S.b, "Row", j.a),
				P = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: I.j
				});
			var L = Object(i.b)(P)(e => a.a.createElement("div", null, a.a.createElement(_.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(O.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, a.a.createElement(w, {
					displayText: n.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), a.a.createElement(_.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(E.a)(Object(O.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Posts
					})
				}, a.a.createElement(w, {
					displayText: n.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === o.Posts
				})), a.a.createElement(_.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(E.a)(Object(O.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Comments
					})
				}, a.a.createElement(w, {
					displayText: n.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === o.Comments
				})))),
				T = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/controls/SearchBar/index.tsx"),
				v = s("./src/reddit/selectors/moderatorPermissions.ts"),
				F = s("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				D = s.n(F);
			const B = Object(T.u)({
					currentPageUrl: T.f
				}),
				M = Object(d.c)({
					moderatingSubreddits: v.o,
					origin: I.j
				}),
				R = Object(i.b)(M),
				Q = m.a.div("DropdownContainer", D.a),
				W = m.a.div("SearchBarContainer", D.a),
				A = m.a.wrapped(S.b, "Row", D.a),
				U = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class H extends a.a.Component {
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
					return a.a.createElement(Q, {
						onClickCapture: this.stopPropagation
					}, a.a.createElement(W, null, a.a.createElement(N.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: n.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), a.a.createElement(_.a, {
						to: Object(O.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, a.a.createElement(A, {
						displayText: n.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = U(t);
						return a.a.createElement(_.a, {
							key: t.id,
							to: Object(E.a)(Object(O.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), s)
						}, a.a.createElement(A, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var X = B(R(H)),
				V = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				z = s.n(V);
			const q = Object(c.a)(b.a),
				Y = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				K = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				G = "MODQ--POST_SORT_DROPDOWN",
				Z = m.a.wrapped(x.a, "Inline", z.a),
				J = m.a.div("Filter", z.a),
				$ = m.a.wrapped(u.a, "LayoutSwitch", z.a),
				ee = e => {
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
							})
					}
				},
				te = e => {
					switch (e) {
						case "oldest":
							return n.fbt._("Oldest First", null, {
								hk: "1JMyTy"
							});
						default:
							return n.fbt._("Newest First", null, {
								hk: "iP4pS"
							})
					}
				},
				se = Object(d.c)({
					isPostTypeFilterDropdownOpen: Object(C.b)(K),
					isSubredditFilterDropdownOpen: Object(C.b)(Y),
					isPostSortDropdownOpen: Object(C.b)(G),
					profile: (e, t) => {
						let {
							profileName: s
						} = t;
						return s ? Object(g.j)(e, {
							profileName: s
						}) : null
					},
					subreddit: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(f.z)(e, {
							subredditName: s
						}) : null
					}
				}),
				oe = Object(i.b)(se, e => ({
					loadAllSubreddits: () => e(Object(p.d)(!0)),
					onOpenDropdown: t => e(Object(l.h)({
						tooltipId: t
					}))
				}));
			class ne extends a.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(Y), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(K), this.props.sendEventWithName("content_type")
					}, this.onOpenPostSortDropdown = () => {
						this.props.onOpenDropdown(G), this.props.sendEventWithName("modqueue_sort")()
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || n.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), s = e.postTypeFilter && ee(e.postTypeFilter) || n.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					}), o = te(null == e ? void 0 : e.postSort);
					return a.a.createElement(Z, null, !e.hideSubredditFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(J, {
						id: Y,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, a.a.createElement(h.a, {
						name: "caret_down"
					})), a.a.createElement(q, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: Y
					}, a.a.createElement(X, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), a.a.createElement(J, {
						id: G,
						onClick: this.onOpenPostSortDropdown
					}, o, a.a.createElement(h.a, {
						name: "caret_down"
					})), a.a.createElement(q, {
						isOpen: e.isPostSortDropdownOpen,
						tooltipId: G
					}, a.a.createElement(k.b, {
						postSort: e.postSort,
						sendEventWithName: e.sendEventWithName
					})), e.showTypeFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(J, {
						id: K,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, a.a.createElement(h.a, {
						name: "caret_down"
					})), a.a.createElement(q, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: K
					}, a.a.createElement(L, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), a.a.createElement($, null))
				}
			}
			t.a = oe(ne)
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
				r = s("./node_modules/lodash/includes.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/layout/row/Inline/index.tsx"),
				k = s("./src/reddit/components/PaginationButtons/index.m.less"),
				E = s.n(k);
			var O = e => d.a.createElement(C.a, {
					className: E.a.buttonContainer
				}, d.a.createElement(f.s, {
					className: Object(g.a)(E.a.routerLink, {
						[E.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, x.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), d.a.createElement(f.s, {
					className: Object(g.a)(E.a.routerLink, {
						[E.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, x.fbt._("Next", null, {
					hk: "2mEXAi"
				}))),
				S = s("./src/reddit/components/PostList/index.tsx"),
				_ = s("./src/reddit/constants/componentSizes.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/helpers/isPost.ts"),
				w = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				P = s("./src/lib/logs/console.ts"),
				L = s("./src/lib/objectSelector/index.ts"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				N = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				v = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				F = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				D = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				B = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				M = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				R = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Q = s("./src/reddit/components/ModModeReports/index.tsx"),
				W = s("./src/reddit/components/RichTextJson/index.tsx"),
				A = s("./src/reddit/components/VerticalVotes/index.tsx"),
				U = s("./src/reddit/controls/Checkbox/index.tsx"),
				H = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				X = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				V = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				z = s.n(V);
			const q = p.a.div("LeftRail", z.a),
				Y = p.a.wrapped(U.a, "BulkActionCheckbox", z.a),
				K = p.a.div("CommentColumn", z.a),
				G = p.a.div("VoteColumn", z.a),
				Z = p.a.wrapped(T.a, "ModToolsFlatlist", z.a),
				J = p.a.wrapped(A.a, "Votes", z.a),
				$ = p.a.div("CommentContentWrapper", z.a),
				ee = p.a.div("ParentPostTitle", z.a),
				te = p.a.div("CommentParentWrapper", z.a),
				se = Object(L.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var oe = Object(N.b)(e => {
					const {
						className: t,
						comment: s,
						commentPermalink: o,
						flair: n,
						isCheckboxSelected: r = !1,
						onIgnoreReports: a,
						onVoteClick: i,
						showModTools: l,
						subreddit: c,
						showBulkActionCheckbox: m,
						toggleCheckbox: p
					} = e, u = Object(R.d)(s), b = Object(h.c)(s);
					return d.a.createElement(v.a, {
						className: Object(g.a)(t, z.a.Component, z.a.UnthreadedCommentContainer, {
							[z.a.isBanned]: !!s.bannedBy,
							[z.a.isReported]: Object(X.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: o
					}, d.a.createElement(q, {
						className: Object(g.a)({
							[z.a.hasBorder]: !!s.bannedBy || Object(X.a)(s)
						})
					}, m && d.a.createElement(Y, {
						isCheckboxSelected: r,
						toggleCheckbox: p
					})), d.a.createElement(G, null, d.a.createElement(J, {
						compact: !1,
						model: s,
						onVoteClick: i,
						scoreClassName: z.a.score
					})), d.a.createElement(K, null, d.a.createElement(te, null, s.postTitle && d.a.createElement(ee, null, s.postTitle), s.postAuthor && d.a.createElement(B.a, {
						comment: s
					})), d.a.createElement($, null, d.a.createElement(F.a, {
						comment: s
					}, d.a.createElement(W.a, {
						content: Object(H.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: se(e)
					}), d.a.createElement(D.a, {
						comment: s,
						flair: n,
						subredditName: c ? c.displayText : null
					}), u && d.a.createElement(M.a, {
						thing: s
					}), b && d.a.createElement(Q.a, {
						onIgnoreReports: a,
						reportable: s
					}), l && !s.isDeleted && d.a.createElement(Z, {
						comment: s
					})))))
				}),
				ne = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				re = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				ae = s.n(re);
			const ie = p.a.div("VoteSpacer", ae.a),
				de = p.a.div("ContentWrapper", ae.a),
				le = p.a.wrapped(D.a, "Meta", ae.a),
				ce = p.a.div("CommentParentWrapper", ae.a),
				me = p.a.div("CommentContentWrapper", ae.a),
				pe = Object(L.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var ue = Object(N.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						commentPermalink: o,
						flair: n,
						hasReports: r,
						isCheckboxSelected: a = !1,
						onIgnoreReports: i,
						onVoteClick: l,
						showModTools: c,
						subreddit: m,
						showBulkActionCheckbox: p,
						toggleCheckbox: u
					} = e, b = Object(R.d)(s);
					return d.a.createElement(v.a, {
						className: t,
						clickTrackingId: s.id,
						permalink: o
					}, d.a.createElement(ne.a, {
						model: s,
						handleVote: l,
						showBulkActionCheckbox: p,
						isCheckboxSelected: a,
						toggleCheckbox: u
					}), d.a.createElement(ie, null, d.a.createElement(de, null, d.a.createElement(ce, null, s.postAuthor && d.a.createElement(B.a, {
						comment: s,
						subredditOrProfile: m
					}), s.postTitle && d.a.createElement(N.a, null, s.postTitle)), d.a.createElement(F.a, {
						comment: s
					}, d.a.createElement(me, null, d.a.createElement(W.a, {
						content: Object(H.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: pe(e)
					})), b && d.a.createElement(M.a, {
						thing: s
					}), r && d.a.createElement(Q.a, {
						onIgnoreReports: i,
						reportable: s
					}), d.a.createElement(le, {
						comment: s,
						flair: n
					}))), c && !s.isDeleted && d.a.createElement(T.a, {
						comment: s
					})))
				}, "Component", ae.a)),
				be = s("./src/reddit/constants/postLayout.ts");
			const he = {
					[be.g.Large]: ue,
					[be.g.Medium]: N.c,
					[be.g.Classic]: N.c,
					[be.g.Compact]: oe
				},
				xe = e => null;
			var ge = s("./src/reddit/models/Flair/index.ts"),
				fe = s("./src/reddit/models/Media/index.ts"),
				Ce = s("./src/reddit/models/ModQueue/index.ts"),
				ke = s("./src/reddit/selectors/meta.ts"),
				Ee = s("./src/reddit/selectors/modQueue.ts"),
				Oe = s("./src/reddit/selectors/subreddit.ts"),
				Se = s("./src/config.ts"),
				_e = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				Ie = s.n(_e);
			const {
				fbt: ye
			} = s("./node_modules/fbt/lib/FbtPublic.js"), je = `${Se.a.assetPath}/img/snoomoji/cat_blep.png`, we = p.a.div("Container", Ie.a), Pe = p.a.div("Image", Ie.a), Le = p.a.div("Title", Ie.a), Te = p.a.div("Text", Ie.a);
			var Ne = () => d.a.createElement(we, null, d.a.createElement(Pe, {
					style: {
						backgroundImage: `url(${je})`
					}
				}), d.a.createElement(Le, null, ye._("The queue is clean!", null, {
					hk: "3d14fC"
				})), d.a.createElement(Te, null, ye._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				ve = s("./src/reddit/components/PostList/Placeholder.tsx");
			const Fe = Object(I.u)(),
				De = Object(c.c)({
					layout: I.R
				});
			var Be = Fe(Object(l.b)(De)(e => d.a.createElement(ve.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Me = s("./node_modules/lodash/flatten.js"),
				Re = s.n(Me),
				Qe = s("./src/reddit/actions/tooltip.ts"),
				We = s("./src/reddit/icons/fonts/index.tsx"),
				Ae = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				He = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Xe = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				Ve = s("./src/higherOrderComponents/asTooltip.tsx"),
				ze = s("./src/reddit/actions/modal.ts"),
				qe = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ye = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Ke = s("./src/reddit/controls/Dropdown/index.tsx"),
				Ge = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Ze = s("./src/reddit/helpers/flair.ts"),
				Je = s("./src/reddit/selectors/activeModalId.ts"),
				$e = s("./src/reddit/selectors/moderatorPermissions.ts"),
				et = s("./src/reddit/selectors/postFlair.ts"),
				tt = s("./src/reddit/selectors/posts.ts"),
				st = s("./src/reddit/selectors/tooltip.ts"),
				ot = s("./src/reddit/components/TrackingHelper/index.tsx"),
				nt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				rt = s.n(nt);
			const at = e => d.a.createElement("button", {
					className: Object(g.a)(rt.a.StatusItem, e.className),
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? x.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, e.buttonText),
				it = Object(c.c)({
					selectedItems: Ee.f
				}),
				dt = Object(l.b)(it, e => ({
					onIgnoreReports: () => e(Object(u.f)(Ce.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(Ce.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(Ce.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(Ce.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(Ce.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(Ce.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(Ce.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(Ce.a.Unspoiler))
				})),
				lt = e => e.some(e => Object(y.a)(e));
			var ct = Object(Ve.a)(dt(Object(ot.c)(e => d.a.createElement("div", {
				className: Object(g.a)(rt.a.StatusList, e.className),
				style: e.style
			}, d.a.createElement("div", {
				className: rt.a.StatusContainer
			}, d.a.createElement(at, {
				onClick: e.onIgnoreReports,
				buttonText: x.fbt._("Ignore Reports", null, {
					hk: "1hZ3hN"
				})
			}), d.a.createElement(at, {
				onClick: e.onUnignoreReports,
				buttonText: x.fbt._("Unignore Reports", null, {
					hk: "3y089p"
				})
			}), d.a.createElement(at, {
				isDisabled: lt(e.selectedItems),
				onClick: e.onLock,
				buttonText: x.fbt._("Lock", null, {
					hk: "4bc0vl"
				})
			}), d.a.createElement(at, {
				isDisabled: lt(e.selectedItems),
				onClick: e.onUnlock,
				buttonText: x.fbt._("Unlock", null, {
					hk: "Pe2ML"
				})
			}), d.a.createElement(at, {
				isDisabled: lt(e.selectedItems),
				onClick: e.onSpoiler,
				buttonText: x.fbt._("Mark as Spoiler", null, {
					hk: "4pIu4V"
				})
			}), d.a.createElement(at, {
				isDisabled: lt(e.selectedItems),
				onClick: e.onUnspoiler,
				buttonText: x.fbt._("Unmark as Spoiler", null, {
					hk: "1ImDYd"
				})
			}), d.a.createElement(at, {
				isDisabled: lt(e.selectedItems),
				onClick: e.onMarkNSFW,
				buttonText: x.fbt._("Mark as NSFW", null, {
					hk: "4yS4Hz"
				})
			}), d.a.createElement(at, {
				isDisabled: lt(e.selectedItems),
				onClick: e.onUnmarkNSFW,
				buttonText: x.fbt._("Unmark as NSFW", null, {
					hk: "ZzA74"
				})
			}))))));
			const mt = Object(c.c)({
				isDropdownOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(st.b)(s)(e)
				}
			});
			var pt = Object(l.b)(mt)(Object(ot.c)(e => {
					const {
						className: t,
						isDropdownOpen: s,
						tooltipId: o
					} = e;
					return d.a.createElement("div", {
						id: o,
						className: t
					}, d.a.createElement(ct, {
						isOpen: s,
						tooltipId: o
					}))
				})),
				ut = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				bt = s.n(ut);
			const ht = "BulkAction--BulkItemFilter",
				xt = "BulkActions--PostFlair--Modal",
				gt = Object(Ve.a)(Ke.a),
				ft = e => d.a.createElement(Ge.b, {
					className: Object(g.a)(bt.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				Ct = Object(c.c)({
					activeModalId: Je.a,
					dropdownIsOpen: Object(st.b)(ht),
					flairData: et.d,
					isApiPending: Ee.a,
					moderatorPermissions: $e.n,
					posts: tt.J,
					selectedItems: Ee.f
				}),
				kt = Object(l.b)(Ct, e => ({
					onApprove: () => e(Object(u.f)(Ce.a.Approve)),
					onFlair: (t, s) => e(Object(u.f)(Ce.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(Qe.h)({
						tooltipId: ht
					})),
					onOpenModToolsDropdown: () => e(Object(Qe.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(u.f)(Ce.a.Remove)),
					onSpam: () => e(Object(u.f)(Ce.a.Spam)),
					onToggleFlairModal: () => e(Object(ze.i)(xt))
				})),
				Et = (e, t) => {
					const s = Re()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const o = [];
					return s.forEach(e => {
						if (e.type === ge.f.Text || e.type === ge.f.Richtext) {
							const t = Object(Ze.g)(e);
							a()(o, t) || o.push(t)
						}
					}), o.length > 1 ? [{
						type: ge.f.Text,
						text: x.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var Ot = kt(e => {
					const {
						activeModalId: t,
						className: s,
						endNumItems: o,
						flairData: n,
						isAnyItemSelected: r,
						isApiPending: a,
						moderatorPermissions: l,
						numSelected: c,
						numShowing: m,
						onApprove: p,
						onFlair: u,
						onRemove: b,
						onSpam: h,
						onToggleFlairModal: f,
						posts: C,
						selectedItems: k,
						startNumItems: E,
						subredditId: O,
						toggleSelectAll: S,
						toggleSelectByFilter: _
					} = e, I = [{
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
					}], y = l && l.flair, j = O && n && n.displaySettings.isEnabled && y && !lt(k);
					return d.a.createElement("div", {
						className: Object(g.a)(bt.a.ModToolsBulkOperations, s)
					}, d.a.createElement("div", {
						className: bt.a.CheckboxContainer,
						id: ht
					}, d.a.createElement(U.a, {
						className: bt.a.Checkbox,
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: S
					}), d.a.createElement(We.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), d.a.createElement(gt, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: ht
					}, I.map(e => d.a.createElement(ft, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => _(e.filterType)
					})))), r && d.a.createElement(i.Fragment, null, d.a.createElement(Ye.c, {
						className: bt.a.Button,
						disabled: a,
						text: x.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, d.a.createElement(Ae.a, null)), d.a.createElement(Ye.c, {
						className: bt.a.Button,
						disabled: a,
						text: x.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, d.a.createElement(Ue.a, null)), d.a.createElement(Ye.c, {
						className: bt.a.Button,
						disabled: a,
						text: x.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, d.a.createElement(He.a, null)), d.a.createElement(Ye.c, {
						className: bt.a.Button,
						disabled: a,
						onClick: e.onOpenModToolsDropdown
					}, d.a.createElement(pt, {
						tooltipId: "BulkActions--ModTools"
					}), d.a.createElement(We.a, {
						name: "list_bulleted"
					})), d.a.createElement("div", null, j && d.a.createElement(Ye.c, {
						disabled: a,
						onClick: f,
						className: bt.a.Button
					}, d.a.createElement(Xe.a, null)))), r && O && t === xt && d.a.createElement(qe.a, {
						flairs: Et(k, C),
						modalId: xt,
						onFlairChanged: e => {
							let {
								previewFlair: t,
								selectedTemplateId: s
							} = e;
							u(t, s)
						},
						subredditId: O
					}), m > 0 && d.a.createElement("div", {
						className: bt.a.Text
					}, d.a.createElement("span", {
						className: bt.a.right
					}, x.fbt._("Items {startNumItems}-{endNumItems}", [x.fbt._param("startNumItems", `${E}`), x.fbt._param("endNumItems", `${o}`)], {
						hk: "1FkOkC"
					})), d.a.createElement("span", {
						className: bt.a.Bullet
					}, "•"), d.a.createElement("span", {
						className: bt.a.left
					}, x.fbt._("{numSelected} selected", [x.fbt._param("numSelected", `${c}`)], {
						hk: "4uf9Ow"
					}))))
				}),
				St = s("./src/reddit/contexts/Post/index.tsx"),
				_t = s("./src/reddit/components/ModQueueList/index.m.less"),
				It = s.n(_t);
			const yt = e => Object(j.a)(e.id),
				jt = p.a.div("ItemContainer", It.a),
				wt = p.a.div("ButtonContainer", It.a),
				Pt = Object(I.u)({
					currentProfileName: I.i,
					isCommentPermalink: I.w,
					isCommentsPage: I.x,
					isFrontpage: I.A,
					isProfilePostListing: I.L,
					isTopicPage: I.Q,
					queryParams: I.W,
					pageLayer: e => e
				}),
				Lt = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: Ee.b,
					loadMore: Ee.d,
					modQueueListingItems: Ee.c,
					origin: ke.j,
					selectedItems: Ee.f,
					subredditId: (e, t) => t.subredditName ? Object(Oe.F)(e, t.subredditName) : null
				}),
				Tt = Object(l.b)(Lt, e => ({
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
				Nt = e => e.page ? parseInt(e.page, 10) : Ce.b,
				vt = e => Nt(e) + 1,
				Ft = e => Math.max(Ce.b, Nt(e) - 1),
				Dt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Nt(e) === Ce.b ? t : 25 * Ft(e) + t
				},
				Bt = e => Nt(e) === Ce.b ? Ce.b : 25 * Ft(e) + 1;
			var Mt;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Mt || (Mt = {}));
			class Rt extends d.a.Component {
				constructor() {
					super(...arguments), this.isCheckboxSelected = e => a()(this.props.selectedItems, e), this.isAllSelected = e => {
						const t = n()(e, this.props.selectedItems);
						return e.length > 0 && this.props.selectedItems.length > 0 && 0 === t.length
					}, this.toggleSelectedItems = (e, t) => {
						e ? this.props.bulkUnselectItems(t) : this.props.addSelectedItems(t)
					}, this.toggleSelectByFilter = e => {
						const t = [];
						if (!this.props.modQueueListingItems || !this.props.modQueueListingItems.length) return t;
						switch (e) {
							case Mt.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(j.a)(e.id) && t.push(e.id)
								});
								break;
							case Mt.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(y.a)(e.id) && t.push(e.id)
								});
								break;
							case Mt.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Mt.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(j.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== ge.f.Spoiler && e.type !== ge.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case Mt.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(j.a)(e.id)) {
										const s = e;
										s.media && s.media.type === fe.o.TEXT && t.push(s.id)
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
							o = !!e.loadMore && !!e.modQueueListingItems && 25 === e.modQueueListingItems.length;
						return e.modQueueListingItems && e.modQueueListingItems.length && (t = e.modQueueListingItems.map(t => {
							const s = `modqueue-item-[layout: ${e.layout}]-[id: ${t.id}]`;
							if (yt(t)) {
								const o = t,
									n = Object(w.b)({
										layout: e.layout,
										post: o
									});
								return d.a.createElement(jt, {
									key: s
								}, d.a.createElement(n, {
									availableWidth: _.g,
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
									onClickPost: Object(S.b)(o.id, e),
									showBulkActionCheckbox: !0,
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(o.id), [o.id]),
									shouldShowGalleryTileOption: !0,
									isGalleryTileLayoutDefault: !0
								}))
							}
							const o = function(e, t) {
								const s = he[t];
								return void 0 === s ? (Object(P.a)(void 0, `Could not find component for layout ${t}.`), xe) : s
							}(0, e.layout);
							return d.a.createElement(jt, {
								key: s
							}, d.a.createElement(St.a, {
								postId: t.postId
							}, d.a.createElement(o, {
								commentId: t.id,
								hasReports: Object(h.c)(t),
								highlight: !1,
								isCheckboxSelected: this.isCheckboxSelected(t.id),
								showBulkActionCheckbox: !0,
								showModTools: !0,
								toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(t.id), [t.id]),
								trackClick: e.sendEventWithName
							})))
						})), d.a.createElement("div", null, d.a.createElement("div", null, t), d.a.createElement(wt, null, d.a.createElement(O, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Ft(e),
								after: null
							}),
							nextButtonEnabled: o,
							nextTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: vt(e),
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
					return d.a.createElement("div", null, d.a.createElement(Ot, {
						endNumItems: Dt(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Bt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? d.a.createElement(Ne, null) : e.isModQueueListingPending ? d.a.createElement(Be, null) : null)
				}
			}
			t.a = Pt(Tt(Rt))
		},
		"./src/reddit/components/PaginationButtons/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_1kLu6euoyZ3I2dqDVrxoZD",
				routerLink: "_3k7SslJt4xhPIXKtoe8DFf",
				mDisabled: "_1VgBJV1BqaXyZVPBXEv-KC"
			}
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
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Search/index.tsx"),
				i = s("./src/reddit/controls/SearchBar/index.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("div", {
				className: Object(r.a)(d.a.searchContainer, e.className)
			}, n.a.createElement("input", {
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
			}), n.a.createElement("div", {
				className: Object(r.a)(d.a.searchIconContainer, {
					[d.a.mClickable]: !!e.onSearch,
					[d.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, n.a.createElement(a.a, null)))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.f58bc5145d8b0285d0bf.js.map