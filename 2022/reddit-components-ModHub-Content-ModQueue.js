// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.2d7b98dd05d1b0e9340e.js
// Retrieved at 3/21/2022, 12:30:04 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/ModHub/Content/ModQueue.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				m = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				p = s("./src/reddit/components/ModQueueList/index.tsx"),
				u = s("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				b = s("./src/reddit/components/ModHub/Content/index.m.less"),
				h = s.n(b);
			t.default = e => r.a.createElement(m.a, {
				className: Object(i.a)(h.a.container, e.layout === d.g.Large ? h.a.isLargePostLayout : void 0)
			}, r.a.createElement(m.b, null, (e => {
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
			})(e.pageName), r.a.createElement(c.a, {
				linkUrl: `${o.a.redditModHelpUrl}/hc/en-us/articles/360010090132`
			})), r.a.createElement(u.a, {
				hideSubredditFilter: !0,
				postTypeFilter: e.postTypeFilter,
				sendEventWithName: e.sendEventWithName,
				showTypeFilter: e.pageName !== l.fc.Unmoderated,
				subredditName: e.subredditName
			}), r.a.createElement(p.a, {
				after: e.after,
				layout: e.layout,
				sendEventWithName: e.sendEventWithName,
				subredditName: e.subredditName,
				page: e.page,
				pageName: e.pageName,
				postTypeFilter: e.postTypeFilter
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
				filterMargin: "_2bX-c80byEShP8Q3c-pyFF",
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
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/selectors/profile.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/lib/addQueryParams/index.ts"),
				y = s("./src/lib/filterQueryParams/index.ts"),
				S = s("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/selectors/meta.ts"),
				I = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				j = s.n(I);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(o || (o = {}));
			const T = p.a.wrapped(S.b, "Row", j.a),
				P = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					origin: O.j
				});
			var L = Object(i.b)(P)(e => r.a.createElement("div", null, r.a.createElement(_.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(y.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, r.a.createElement(T, {
					displayText: n.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), r.a.createElement(_.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(E.a)(Object(y.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Posts
					})
				}, r.a.createElement(T, {
					displayText: n.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === o.Posts
				})), r.a.createElement(_.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(E.a)(Object(y.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Comments
					})
				}, r.a.createElement(T, {
					displayText: n.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === o.Comments
				})))),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/controls/SearchBar/index.tsx"),
				F = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				B = s.n(w);
			const M = Object(v.u)({
					currentPageUrl: v.f
				}),
				D = Object(l.c)({
					moderatingSubreddits: F.n,
					origin: O.j
				}),
				Q = Object(i.b)(D),
				R = p.a.div("DropdownContainer", B.a),
				W = p.a.div("SearchBarContainer", B.a),
				A = p.a.wrapped(S.b, "Row", B.a),
				U = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class X extends r.a.Component {
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
					return r.a.createElement(R, {
						onClickCapture: this.stopPropagation
					}, r.a.createElement(W, null, r.a.createElement(N.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: n.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), r.a.createElement(_.a, {
						to: Object(y.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, r.a.createElement(A, {
						displayText: n.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = U(t);
						return r.a.createElement(_.a, {
							key: t.id,
							to: Object(E.a)(Object(y.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), s)
						}, r.a.createElement(A, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var V = M(Q(X)),
				q = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				H = s.n(q);
			const z = Object(m.a)(b.a),
				K = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				J = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				Z = p.a.wrapped(g.a, "Inline", H.a),
				G = p.a.div("Filter", H.a),
				Y = p.a.wrapped(h.a, "LayoutSwitch", H.a),
				$ = e => {
					switch (e) {
						case "allPostTypes":
							return n.fbt._("Posts and Comments", null, {
								hk: "2oWJdB"
							});
						case "allSubreddits":
							return n.fbt._("All subreddits", null, {
								hk: "OqzeW"
							});
						case "comments":
							return n.fbt._("Comments", null, {
								hk: "1a9mt8"
							});
						case "links":
							return n.fbt._("Posts", null, {
								hk: "fijEw"
							});
						case "searchPlaceholder":
							return n.fbt._("Find subreddit", null, {
								hk: "3yJKEz"
							})
					}
				},
				ee = Object(l.c)({
					isPostTypeFilterDropdownOpen: Object(k.b)(J),
					isSubredditFilterDropdownOpen: Object(k.b)(K),
					profile: (e, {
						profileName: t
					}) => t ? Object(f.j)(e, {
						profileName: t
					}) : null,
					subreddit: (e, {
						subredditName: t
					}) => t ? Object(C.x)(e, {
						subredditName: t
					}) : null
				}),
				te = Object(i.b)(ee, e => ({
					loadAllSubreddits: () => e(Object(u.d)(!0)),
					onOpenDropdown: t => e(Object(c.h)({
						tooltipId: t
					}))
				}));
			class se extends r.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(K), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(J), this.props.sendEventWithName("content_type")
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || n.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), s = e.postTypeFilter && $(e.postTypeFilter) || n.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					});
					return r.a.createElement(Z, null, !e.hideSubredditFilter && r.a.createElement(r.a.Fragment, null, r.a.createElement(G, {
						id: K,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, r.a.createElement(x.a, {
						name: "caret_down"
					})), r.a.createElement(z, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: K
					}, r.a.createElement(V, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), e.showTypeFilter && r.a.createElement("div", {
						className: Object(d.a)({
							[H.a.filterMargin]: !e.hideSubredditFilter
						})
					}, r.a.createElement(G, {
						id: J,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, r.a.createElement(x.a, {
						name: "caret_down"
					})), r.a.createElement(z, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: J
					}, r.a.createElement(L, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), r.a.createElement(Y, null))
				}
			}
			t.a = te(se)
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
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/layout/row/Inline/index.tsx"),
				k = s("./src/reddit/components/PaginationButtons/index.m.less"),
				E = s.n(k);
			var y = e => l.a.createElement(C.a, {
					className: E.a.buttonContainer
				}, l.a.createElement(f.s, {
					className: Object(g.a)(E.a.routerLink, {
						[E.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, x.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), l.a.createElement(f.s, {
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
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/helpers/isPost.ts"),
				T = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				P = s("./src/lib/logs/console.ts"),
				L = s("./src/lib/objectSelector/index.ts"),
				v = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				N = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				F = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				w = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				B = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				M = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				D = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Q = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				W = s("./src/reddit/components/RichTextJson/index.tsx"),
				A = s("./src/reddit/components/VerticalVotes/index.tsx"),
				U = s("./src/reddit/controls/Checkbox/index.tsx"),
				X = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				V = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				q = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				H = s.n(q);
			const z = p.a.div("LeftRail", H.a),
				K = p.a.wrapped(U.a, "BulkActionCheckbox", H.a),
				J = p.a.div("CommentColumn", H.a),
				Z = p.a.div("VoteColumn", H.a),
				G = p.a.wrapped(v.a, "ModToolsFlatlist", H.a),
				Y = p.a.wrapped(A.a, "Votes", H.a),
				$ = p.a.div("CommentContentWrapper", H.a),
				ee = p.a.div("ParentPostTitle", H.a),
				te = p.a.div("CommentParentWrapper", H.a),
				se = Object(L.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var oe = Object(N.b)(e => {
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
					} = e, u = Object(Q.d)(s), b = Object(h.c)(s);
					return l.a.createElement(F.a, {
						className: Object(g.a)(t, H.a.Component, H.a.UnthreadedCommentContainer, {
							[H.a.isBanned]: !!s.bannedBy,
							[H.a.isReported]: Object(V.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: o
					}, l.a.createElement(z, {
						className: Object(g.a)({
							[H.a.hasBorder]: !!s.bannedBy || Object(V.a)(s)
						})
					}, m && l.a.createElement(K, {
						isCheckboxSelected: a,
						toggleCheckbox: p
					})), l.a.createElement(Z, null, l.a.createElement(Y, {
						compact: !1,
						model: s,
						onVoteClick: i,
						scoreClassName: H.a.score
					})), l.a.createElement(J, null, l.a.createElement(te, null, s.postTitle && l.a.createElement(ee, null, s.postTitle), s.postAuthor && l.a.createElement(M.a, {
						comment: s
					})), l.a.createElement($, null, l.a.createElement(w.a, {
						comment: s
					}, l.a.createElement(W.a, {
						content: Object(X.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: se(e)
					}), l.a.createElement(B.a, {
						comment: s,
						flair: n,
						subredditName: c ? c.displayText : null
					}), u && l.a.createElement(D.a, {
						thing: s
					}), b && l.a.createElement(R.a, {
						onIgnoreReports: r,
						reportable: s
					}), d && !s.isDeleted && l.a.createElement(G, {
						comment: s
					})))))
				}),
				ne = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ae = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				re = s.n(ae);
			const ie = p.a.div("VoteSpacer", re.a),
				le = p.a.div("ContentWrapper", re.a),
				de = p.a.wrapped(B.a, "Meta", re.a),
				ce = p.a.div("CommentParentWrapper", re.a),
				me = p.a.div("CommentContentWrapper", re.a),
				pe = Object(L.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var ue = Object(N.b)(p.a.wrapped(e => {
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
						toggleCheckbox: u
					} = e, b = Object(Q.d)(s);
					return l.a.createElement(F.a, {
						className: t,
						clickTrackingId: s.id,
						permalink: o
					}, l.a.createElement(ne.a, {
						model: s,
						handleVote: d,
						showBulkActionCheckbox: p,
						isCheckboxSelected: r,
						toggleCheckbox: u
					}), l.a.createElement(ie, null, l.a.createElement(le, null, l.a.createElement(ce, null, s.postAuthor && l.a.createElement(M.a, {
						comment: s,
						subredditOrProfile: m
					}), s.postTitle && l.a.createElement(N.a, null, s.postTitle)), l.a.createElement(w.a, {
						comment: s
					}, l.a.createElement(me, null, l.a.createElement(W.a, {
						content: Object(X.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: pe(e)
					})), b && l.a.createElement(D.a, {
						thing: s
					}), a && l.a.createElement(R.a, {
						onIgnoreReports: i,
						reportable: s
					}), l.a.createElement(de, {
						comment: s,
						flair: n
					}))), c && !s.isDeleted && l.a.createElement(v.a, {
						comment: s
					})))
				}, "Component", re.a)),
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
				ye = s("./src/reddit/selectors/subreddit.ts"),
				Se = s("./src/config.ts"),
				_e = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				Oe = s.n(_e);
			const {
				fbt: Ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), je = `${Se.a.assetPath}/img/snoomoji/cat_blep.png`, Te = p.a.div("Container", Oe.a), Pe = p.a.div("Image", Oe.a), Le = p.a.div("Title", Oe.a), ve = p.a.div("Text", Oe.a);
			var Ne = () => l.a.createElement(Te, null, l.a.createElement(Pe, {
					style: {
						backgroundImage: `url(${je})`
					}
				}), l.a.createElement(Le, null, Ie._("The queue is clean!", null, {
					hk: "3d14fC"
				})), l.a.createElement(ve, null, Ie._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Fe = s("./src/reddit/components/PostList/Placeholder.tsx");
			const we = Object(O.u)(),
				Be = Object(c.c)({
					layout: O.R
				});
			var Me = we(Object(d.b)(Be)(e => l.a.createElement(Fe.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				De = s("./node_modules/lodash/flatten.js"),
				Qe = s.n(De),
				Re = s("./src/reddit/actions/tooltip.ts"),
				We = s("./src/reddit/icons/fonts/index.tsx"),
				Ae = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				Xe = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				qe = s("./src/higherOrderComponents/asTooltip.tsx"),
				He = s("./src/reddit/actions/modal.ts"),
				ze = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ke = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Je = s("./src/reddit/controls/Dropdown/index.tsx"),
				Ze = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Ge = s("./src/reddit/helpers/flair.ts"),
				Ye = s("./src/reddit/selectors/activeModalId.ts"),
				$e = s("./src/reddit/selectors/moderatorPermissions.ts"),
				et = s("./src/reddit/selectors/postFlair.ts"),
				tt = s("./src/reddit/selectors/posts.ts"),
				st = s("./src/reddit/selectors/tooltip.ts"),
				ot = s("./src/reddit/components/TrackingHelper/index.tsx"),
				nt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				at = s.n(nt);
			const rt = e => l.a.createElement("button", {
					className: Object(g.a)(at.a.StatusItem, e.className),
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? x.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, e.buttonText),
				it = Object(c.c)({
					selectedItems: Ee.f
				}),
				lt = Object(d.b)(it, e => ({
					onIgnoreReports: () => e(Object(u.f)(Ce.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(Ce.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(Ce.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(Ce.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(Ce.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(Ce.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(Ce.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(Ce.a.Unspoiler))
				})),
				dt = e => e.some(e => Object(I.a)(e));
			var ct = Object(qe.a)(lt(Object(ot.c)(e => l.a.createElement("div", {
				className: Object(g.a)(at.a.StatusList, e.className),
				style: e.style
			}, l.a.createElement("div", {
				className: at.a.StatusContainer
			}, l.a.createElement(rt, {
				onClick: e.onIgnoreReports,
				buttonText: x.fbt._("Ignore Reports", null, {
					hk: "1hZ3hN"
				})
			}), l.a.createElement(rt, {
				onClick: e.onUnignoreReports,
				buttonText: x.fbt._("Unignore Reports", null, {
					hk: "3y089p"
				})
			}), l.a.createElement(rt, {
				isDisabled: dt(e.selectedItems),
				onClick: e.onLock,
				buttonText: x.fbt._("Lock", null, {
					hk: "4bc0vl"
				})
			}), l.a.createElement(rt, {
				isDisabled: dt(e.selectedItems),
				onClick: e.onUnlock,
				buttonText: x.fbt._("Unlock", null, {
					hk: "Pe2ML"
				})
			}), l.a.createElement(rt, {
				isDisabled: dt(e.selectedItems),
				onClick: e.onSpoiler,
				buttonText: x.fbt._("Mark as Spoiler", null, {
					hk: "4pIu4V"
				})
			}), l.a.createElement(rt, {
				isDisabled: dt(e.selectedItems),
				onClick: e.onUnspoiler,
				buttonText: x.fbt._("Unmark as Spoiler", null, {
					hk: "1ImDYd"
				})
			}), l.a.createElement(rt, {
				isDisabled: dt(e.selectedItems),
				onClick: e.onMarkNSFW,
				buttonText: x.fbt._("Mark as NSFW", null, {
					hk: "4yS4Hz"
				})
			}), l.a.createElement(rt, {
				isDisabled: dt(e.selectedItems),
				onClick: e.onUnmarkNSFW,
				buttonText: x.fbt._("Unmark as NSFW", null, {
					hk: "ZzA74"
				})
			}))))));
			const mt = Object(c.c)({
				isDropdownOpen: (e, {
					tooltipId: t
				}) => Object(st.b)(t)(e)
			});
			var pt = Object(d.b)(mt)(Object(ot.c)(e => {
					const {
						className: t,
						isDropdownOpen: s,
						tooltipId: o
					} = e;
					return l.a.createElement("div", {
						id: o,
						className: t
					}, l.a.createElement(ct, {
						isOpen: s,
						tooltipId: o
					}))
				})),
				ut = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				bt = s.n(ut);
			const ht = "BulkAction--BulkItemFilter",
				xt = "BulkActions--PostFlair--Modal",
				gt = Object(qe.a)(Je.a),
				ft = e => l.a.createElement(Ze.b, {
					className: Object(g.a)(bt.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				Ct = Object(c.c)({
					activeModalId: Ye.a,
					dropdownIsOpen: Object(st.b)(ht),
					flairData: et.d,
					isApiPending: Ee.a,
					moderatorPermissions: $e.m,
					posts: tt.J,
					selectedItems: Ee.f
				}),
				kt = Object(d.b)(Ct, e => ({
					onApprove: () => e(Object(u.f)(Ce.a.Approve)),
					onFlair: (t, s) => e(Object(u.f)(Ce.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(Re.h)({
						tooltipId: ht
					})),
					onOpenModToolsDropdown: () => e(Object(Re.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(u.f)(Ce.a.Remove)),
					onSpam: () => e(Object(u.f)(Ce.a.Spam)),
					onToggleFlairModal: () => e(Object(He.i)(xt))
				})),
				Et = (e, t) => {
					const s = Qe()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const o = [];
					return s.forEach(e => {
						if (e.type === ge.f.Text || e.type === ge.f.Richtext) {
							const t = Object(Ge.g)(e);
							r()(o, t) || o.push(t)
						}
					}), o.length > 1 ? [{
						type: ge.f.Text,
						text: x.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var yt = kt(e => {
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
						posts: C,
						selectedItems: k,
						startNumItems: E,
						subredditId: y,
						toggleSelectAll: S,
						toggleSelectByFilter: _
					} = e, O = [{
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
					}], I = d && d.flair, j = y && n && n.displaySettings.isEnabled && I && !dt(k);
					return l.a.createElement("div", {
						className: Object(g.a)(bt.a.ModToolsBulkOperations, s)
					}, l.a.createElement("div", {
						className: bt.a.CheckboxContainer,
						id: ht
					}, l.a.createElement(U.a, {
						className: bt.a.Checkbox,
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: S
					}), l.a.createElement(We.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), l.a.createElement(gt, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: ht
					}, O.map(e => l.a.createElement(ft, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => _(e.filterType)
					})))), a && l.a.createElement(i.Fragment, null, l.a.createElement(Ke.c, {
						className: bt.a.Button,
						disabled: r,
						text: x.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, l.a.createElement(Ae.a, null)), l.a.createElement(Ke.c, {
						className: bt.a.Button,
						disabled: r,
						text: x.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, l.a.createElement(Ue.a, null)), l.a.createElement(Ke.c, {
						className: bt.a.Button,
						disabled: r,
						text: x.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, l.a.createElement(Xe.a, null)), l.a.createElement(Ke.c, {
						className: bt.a.Button,
						disabled: r,
						onClick: e.onOpenModToolsDropdown
					}, l.a.createElement(pt, {
						tooltipId: "BulkActions--ModTools"
					}), l.a.createElement(We.a, {
						name: "list_bulleted"
					})), l.a.createElement("div", null, j && l.a.createElement(Ke.c, {
						disabled: r,
						onClick: f,
						className: bt.a.Button
					}, l.a.createElement(Ve.a, null)))), a && y && t === xt && l.a.createElement(ze.a, {
						flairs: Et(k, C),
						modalId: xt,
						onFlairChanged: ({
							previewFlair: e,
							selectedTemplateId: t
						}) => {
							u(e, t)
						},
						subredditId: y
					}), m > 0 && l.a.createElement("div", {
						className: bt.a.Text
					}, l.a.createElement("span", {
						className: bt.a.right
					}, x.fbt._("Items {startNumItems}-{endNumItems}", [x.fbt._param("startNumItems", `${E}`), x.fbt._param("endNumItems", `${o}`)], {
						hk: "1FkOkC"
					})), l.a.createElement("span", {
						className: bt.a.Bullet
					}, "•"), l.a.createElement("span", {
						className: bt.a.left
					}, x.fbt._("{numSelected} selected", [x.fbt._param("numSelected", `${c}`)], {
						hk: "4uf9Ow"
					}))))
				}),
				St = s("./src/reddit/contexts/Post/index.tsx"),
				_t = s("./src/reddit/components/ModQueueList/index.m.less"),
				Ot = s.n(_t);
			const It = e => Object(j.a)(e.id),
				jt = p.a.div("ItemContainer", Ot.a),
				Tt = p.a.div("ButtonContainer", Ot.a),
				Pt = Object(O.u)({
					currentProfileName: O.i,
					isCommentPermalink: O.w,
					isCommentsPage: O.x,
					isFrontpage: O.A,
					isProfilePostListing: O.L,
					isTopicPage: O.Q,
					queryParams: O.W,
					pageLayer: e => e
				}),
				Lt = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: Ee.b,
					loadMore: Ee.d,
					modQueueListingItems: Ee.c,
					origin: ke.j,
					selectedItems: Ee.f,
					subredditId: (e, t) => t.subredditName ? Object(ye.D)(e, t.subredditName) : null
				}),
				vt = Object(d.b)(Lt, e => ({
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
				Ft = e => Nt(e) + 1,
				wt = e => Math.max(Ce.b, Nt(e) - 1),
				Bt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Nt(e) === Ce.b ? t : 25 * wt(e) + t
				},
				Mt = e => Nt(e) === Ce.b ? Ce.b : 25 * wt(e) + 1;
			var Dt;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Dt || (Dt = {}));
			class Qt extends l.a.Component {
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
							case Dt.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(j.a)(e.id) && t.push(e.id)
								});
								break;
							case Dt.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(I.a)(e.id) && t.push(e.id)
								});
								break;
							case Dt.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Dt.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(j.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== ge.f.Spoiler && e.type !== ge.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case Dt.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(j.a)(e.id)) {
										const s = e;
										s.media && s.media.type === fe.o.TEXT && t.push(s.id)
									}
								});
								break;
							case Dt.spamFiltered:
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
							if (It(t)) {
								const o = t,
									n = Object(T.b)({
										layout: e.layout,
										post: o
									});
								return l.a.createElement(jt, {
									key: s
								}, l.a.createElement(n, {
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
							return l.a.createElement(jt, {
								key: s
							}, l.a.createElement(St.a, {
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
						})), l.a.createElement("div", null, l.a.createElement("div", null, t), l.a.createElement(Tt, null, l.a.createElement(y, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: wt(e),
								after: null
							}),
							nextButtonEnabled: o,
							nextTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Ft(e),
								after: e.loadMore
							})
						})))
					}
				}
				componentWillUnmount() {
					this.props.bulkUnselectItems(this.props.selectedItems)
				}
				UNSAFE_componentWillUpdate(e) {
					e.pageName === this.props.pageName && e.page === this.props.page && e.profileName === this.props.profileName && e.subredditName === this.props.subredditName && e.postTypeFilter === this.props.postTypeFilter || this.props.bulkUnselectItems(this.props.selectedItems)
				}
				render() {
					const {
						props: e
					} = this, t = e.modQueueListingItems && e.modQueueListingItems.length ? e.modQueueListingItems.map(e => e.id) : [], s = e.selectedItems.length;
					return l.a.createElement("div", null, l.a.createElement(yt, {
						endNumItems: Bt(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Mt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? l.a.createElement(Ne, null) : e.isModQueueListingPending ? l.a.createElement(Me, null) : null)
				}
			}
			t.a = Pt(vt(Qt))
		},
		"./src/reddit/components/PaginationButtons/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_1kLu6euoyZ3I2dqDVrxoZD",
				routerLink: "_3k7SslJt4xhPIXKtoe8DFf",
				mDisabled: "_1VgBJV1BqaXyZVPBXEv-KC"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				g = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				f = s.n(g);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => Object(l.a)(f.a.iconStyles, e.className, {
					[f.a.mRedditStyle]: e.redditStyle
				}),
				E = ({
					className: e,
					redditStyle: t,
					...s
				}) => a.a.createElement(h.a, C({
					name: "view_compact",
					className: k({
						className: e,
						redditStyle: t
					})
				}, s)),
				y = ({
					className: e,
					redditStyle: t,
					...s
				}) => a.a.createElement(h.a, C({
					name: "view_classic",
					className: k({
						className: e,
						redditStyle: t
					})
				}, s)),
				S = ({
					className: e,
					redditStyle: t,
					...s
				}) => a.a.createElement(h.a, C({
					name: "view_card",
					className: k({
						className: e,
						redditStyle: t
					})
				}, s)),
				_ = ({
					isActive: e,
					...t
				}) => a.a.createElement("button", C({
					className: Object(l.a)(f.a.layoutButton, {
						[f.a.mIsActive]: e
					})
				}, t)),
				O = Object(b.u)(),
				I = Object(i.c)({
					postLayout: b.R,
					redditStyle: b.D
				}),
				j = Object(r.b)(I, e => ({
					onListingLayoutChange: (t, s) => e(Object(c.y)(t, s)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = O(j(Object(p.c)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || u.e[e.postLayout];
				return a.a.createElement("div", {
					className: Object(l.a)(f.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, a.a.createElement("div", {
					className: f.a.title
				}, o.fbt._("View", null, {
					hk: "18a931"
				})), a.a.createElement("div", {
					className: f.a.iconContainer
				}, (() => [{
					layout: u.d.Card,
					Icon: S,
					text: o.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: u.d.Classic,
					Icon: y,
					text: o.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: u.d.Compact,
					Icon: E,
					text: o.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(o => {
					const r = () => (o => {
							e.onChange ? e.onChange(o) : (e.onListingLayoutChange(o, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: o,
								screen: Object(x.ab)(e),
								subreddit: Object(x.ib)(e)
							})))
						})(o.layout),
						i = () => e.toggleTooltip(l),
						l = "layoutSwitch--" + o.layout,
						c = o.layout === n;
					return a.a.createElement(_, {
						"aria-label": o.text,
						"aria-pressed": c,
						id: l,
						isActive: c,
						key: o.layout,
						onClick: r,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: r
					}, a.a.createElement(o.Icon, {
						onClick: c ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle,
						isFilled: c
					}), a.a.createElement(d.c, {
						tooltipId: l,
						text: o.text
					}))
				})))
			})))
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.2d7b98dd05d1b0e9340e.js.map