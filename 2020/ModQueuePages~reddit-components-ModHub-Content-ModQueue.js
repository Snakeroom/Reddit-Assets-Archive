// https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.d6809c8e4d9f33f785bc.js
// Retrieved at 10/26/2020, 11:00:17 AM by Reddit Dataminer v1.0.0
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
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				g = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/selectors/profile.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/lib/addQueryParams/index.ts"),
				S = s("./src/lib/filterQueryParams/index.ts"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/selectors/meta.ts"),
				I = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				_ = s.n(I);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(o || (o = {}));
			const v = p.a.wrapped(O.b, "Row", _.a),
				P = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					origin: j.l
				});
			var w = Object(i.b)(P)(e => a.a.createElement("div", null, a.a.createElement(E.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(S.a)("".concat(e.origin).concat(e.currentPage.url), ["after", "before", "only", "page"])
				}, a.a.createElement(v, {
					displayText: n.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), a.a.createElement(E.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(y.a)(Object(S.a)("".concat(e.origin).concat(e.currentPage.url), ["after", "before", "page"]), {
						only: o.Posts
					})
				}, a.a.createElement(v, {
					displayText: n.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === o.Posts
				})), a.a.createElement(E.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(y.a)(Object(S.a)("".concat(e.origin).concat(e.currentPage.url), ["after", "before", "page"]), {
						only: o.Comments
					})
				}, a.a.createElement(v, {
					displayText: n.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === o.Comments
				})))),
				T = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./src/reddit/contexts/PageLayer/index.tsx")),
				L = s("./src/reddit/controls/SearchBar/index.tsx"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				F = s("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				B = s.n(F);
			const D = Object(T.t)({
					currentPageUrl: T.e
				}),
				M = Object(l.c)({
					moderatingSubreddits: N.k,
					origin: j.l
				}),
				Q = Object(i.b)(M),
				A = p.a.div("DropdownContainer", B.a),
				R = p.a.div("SearchBarContainer", B.a),
				W = p.a.wrapped(O.b, "Row", B.a),
				U = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class V extends a.a.Component {
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
					return a.a.createElement(A, {
						onClickCapture: this.stopPropagation
					}, a.a.createElement(R, null, a.a.createElement(L.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: n.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), a.a.createElement(E.a, {
						to: Object(S.a)("".concat(e.origin).concat(e.currentPageUrl), ["after", "before", "page", "profile", "subreddit"])
					}, a.a.createElement(W, {
						displayText: n.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = U(t);
						return a.a.createElement(E.a, {
							key: t.id,
							to: Object(y.a)(Object(S.a)("".concat(e.origin).concat(e.currentPageUrl), ["after", "before", "page", "profile", "subreddit"]), s)
						}, a.a.createElement(W, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var X = D(Q(V)),
				q = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				Z = s.n(q);
			const H = Object(m.a)(b.a),
				z = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				K = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				J = p.a.wrapped(x.a, "Inline", Z.a),
				G = p.a.div("Filter", Z.a),
				Y = p.a.wrapped(h.a, "LayoutSwitch", Z.a),
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
					isPostTypeFilterDropdownOpen: Object(k.b)(K),
					isSubredditFilterDropdownOpen: Object(k.b)(z),
					profile: (e, t) => {
						let {
							profileName: s
						} = t;
						return s ? Object(f.j)(e, {
							profileName: s
						}) : null
					},
					subreddit: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(C.B)(e, {
							subredditName: s
						}) : null
					}
				}),
				te = Object(i.b)(ee, e => ({
					loadAllSubreddits: () => e(Object(u.d)(!0)),
					onOpenDropdown: t => e(Object(c.h)({
						tooltipId: t
					}))
				}));
			class se extends a.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(z), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(K), this.props.sendEventWithName("content_type")
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
					return a.a.createElement(J, null, !e.hideSubredditFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(G, {
						id: z,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, a.a.createElement(g.b, null)), a.a.createElement(H, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: z
					}, a.a.createElement(X, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), e.showTypeFilter && a.a.createElement("div", {
						className: Object(d.a)({
							[Z.a.filterMargin]: !e.hideSubredditFilter
						})
					}, a.a.createElement(G, {
						id: K,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, a.a.createElement(g.b, null)), a.a.createElement(H, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: K
					}, a.a.createElement(w, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), a.a.createElement(Y, null))
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
				DropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				dropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				DropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				dropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				Bullet: "K9CBgM-Xyd_FBz7TcYHah",
				bullet: "K9CBgM-Xyd_FBz7TcYHah",
				Text: "_14Wi7Tj4JyvXkmtsyZkG9e",
				text: "_14Wi7Tj4JyvXkmtsyZkG9e",
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
				l = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/layout/row/Inline/index.tsx"),
				k = s("./src/reddit/components/PaginationButtons/index.m.less"),
				y = s.n(k);
			var S = e => l.a.createElement(C.a, {
					className: y.a.buttonContainer
				}, l.a.createElement(f.p, {
					className: Object(x.a)(y.a.routerLink, {
						[y.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, g.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), l.a.createElement(f.p, {
					className: Object(x.a)(y.a.routerLink, {
						[y.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, g.fbt._("Next", null, {
					hk: "2M8bo9"
				}))),
				O = s("./src/reddit/components/PostList/index.tsx"),
				E = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/helpers/isComment.ts"),
				_ = s("./src/reddit/helpers/isPost.ts"),
				v = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				P = s("./src/lib/logs/console.ts"),
				w = s("./src/lib/objectSelector/index.ts"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				N = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				F = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				B = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				D = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/index.tsx"),
				Q = s("./src/reddit/components/RichTextJson/index.tsx"),
				A = s("./src/reddit/components/VerticalVotes/index.tsx"),
				R = s("./src/reddit/controls/Checkbox/index.tsx"),
				W = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				U = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				V = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				X = s.n(V);
			const q = p.a.div("LeftRail", X.a),
				Z = p.a.wrapped(R.a, "BulkActionCheckbox", X.a),
				H = p.a.wrapped(N.a, "UnthreadedCommentContainer", X.a),
				z = p.a.div("CommentColumn", X.a),
				K = p.a.div("VoteColumn", X.a),
				J = p.a.wrapped(T.c, "ModToolsFlatlist", X.a),
				G = p.a.wrapped(A.a, "Votes", X.a),
				Y = p.a.div("CommentContentWrapper", X.a),
				$ = p.a.div("ParentPostTitle", X.a),
				ee = p.a.div("CommentParentWrapper", X.a),
				te = Object(w.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var se = Object(L.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						flair: o,
						isCheckboxSelected: n = !1,
						onIgnoreReports: r,
						onVoteClick: a,
						showModTools: i,
						subreddit: d,
						showBulkActionCheckbox: c,
						toggleCheckbox: m
					} = e;
					return l.a.createElement(H, {
						className: Object(x.a)(t, {
							[X.a.isBanned]: !!s.bannedBy,
							[X.a.isReported]: Object(U.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: s.permalink
					}, l.a.createElement(q, {
						className: Object(x.a)({
							[X.a.hasBorder]: !!s.bannedBy || Object(U.a)(s)
						})
					}, c && l.a.createElement(Z, {
						isCheckboxSelected: n,
						toggleCheckbox: m
					})), l.a.createElement(K, null, l.a.createElement(G, {
						compact: !1,
						model: s,
						onVoteClick: a,
						scoreClassName: X.a.score
					})), l.a.createElement(z, null, l.a.createElement(ee, null, s.postTitle && l.a.createElement($, null, s.postTitle), s.postAuthor && l.a.createElement(D.a, {
						comment: s
					})), l.a.createElement(Y, null, l.a.createElement(F.a, {
						comment: s
					}, l.a.createElement(Q.a, {
						content: Object(W.a)(s),
						rtJsonElementProps: te(e)
					}), l.a.createElement(B.a, {
						comment: s,
						flair: o,
						subredditName: d ? d.displayText : null
					}), Object(h.c)(s) && l.a.createElement(M.a, {
						onIgnoreReports: r,
						reportable: s
					}), i && !s.isDeleted && l.a.createElement(J, {
						comment: s
					})))))
				}, "Component", X.a)),
				oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ne = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				re = s.n(ne);
			const ae = p.a.div("VoteSpacer", re.a),
				ie = p.a.div("ContentWrapper", re.a),
				le = p.a.wrapped(B.a, "Meta", re.a),
				de = p.a.div("CommentParentWrapper", re.a),
				ce = p.a.div("CommentContentWrapper", re.a),
				me = Object(w.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var pe = Object(L.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						flair: o,
						hasReports: n,
						isCheckboxSelected: r = !1,
						onIgnoreReports: a,
						onVoteClick: i,
						showModTools: d,
						subreddit: c,
						showBulkActionCheckbox: m,
						toggleCheckbox: p
					} = e;
					return l.a.createElement(N.a, {
						className: t,
						clickTrackingId: s.id,
						permalink: s.permalink
					}, l.a.createElement(oe.a, {
						model: s,
						handleVote: i,
						showBulkActionCheckbox: m,
						isCheckboxSelected: r,
						toggleCheckbox: p,
						subreddit: c
					}), l.a.createElement(ae, null, l.a.createElement(ie, null, l.a.createElement(de, null, s.postAuthor && l.a.createElement(D.a, {
						comment: s,
						subredditOrProfile: c
					}), s.postTitle && l.a.createElement(L.a, null, s.postTitle)), l.a.createElement(F.a, {
						comment: s
					}, l.a.createElement(ce, null, l.a.createElement(Q.a, {
						content: Object(W.a)(s),
						rtJsonElementProps: me(e)
					})), n && l.a.createElement(M.a, {
						onIgnoreReports: a,
						reportable: s
					}), l.a.createElement(le, {
						comment: s,
						flair: o
					}))), d && !s.isDeleted && l.a.createElement(T.c, {
						comment: s
					})))
				}, "Component", re.a)),
				ue = s("./src/reddit/constants/postLayout.ts");
			const be = {
					[ue.g.Large]: pe,
					[ue.g.Medium]: L.c,
					[ue.g.Classic]: L.c,
					[ue.g.Compact]: se
				},
				he = e => null;
			var ge = s("./src/reddit/models/Flair/index.ts"),
				xe = s("./src/reddit/models/Media/index.ts"),
				fe = s("./src/reddit/models/ModQueue/index.ts"),
				Ce = s("./src/reddit/selectors/meta.ts"),
				ke = s("./src/reddit/selectors/modQueue.ts"),
				ye = s("./src/reddit/selectors/subreddit.ts"),
				Se = s("./src/config.ts"),
				Oe = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				Ee = s.n(Oe);
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = "".concat(Se.a.assetPath, "/img/snoomoji/cat_blep.png"), _e = p.a.div("Container", Ee.a), ve = p.a.div("Image", Ee.a), Pe = p.a.div("Title", Ee.a), we = p.a.div("Text", Ee.a);
			var Te = () => l.a.createElement(_e, null, l.a.createElement(ve, {
					style: {
						backgroundImage: "url(".concat(Ie, ")")
					}
				}), l.a.createElement(Pe, null, je._("The queue is clean!", null, {
					hk: "3d14fC"
				})), l.a.createElement(we, null, je._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Le = s("./src/reddit/components/PostList/Placeholder.tsx");
			const Ne = Object(j.t)(),
				Fe = Object(c.c)({
					layout: j.N
				});
			var Be = Ne(Object(d.b)(Fe)(e => l.a.createElement(Le.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				De = s("./node_modules/lodash/flatten.js"),
				Me = s.n(De),
				Qe = s("./src/reddit/actions/tooltip.ts"),
				Ae = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				Re = s("./src/reddit/icons/fonts/helpers.tsx"),
				We = s("./src/reddit/icons/fonts/List/index.m.less"),
				Ue = s.n(We);
			var Ve = p.a.wrapped(e => l.a.createElement("i", {
					className: "".concat(Object(Re.b)("list"), " ").concat(e.className)
				}), "ListIcon", Ue.a),
				Xe = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				qe = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Ze = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				He = s("./src/higherOrderComponents/asTooltip.tsx"),
				ze = s("./src/reddit/actions/modal.ts"),
				Ke = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Je = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Ge = s("./src/reddit/controls/Dropdown/index.tsx"),
				Ye = s("./src/reddit/controls/Dropdown/Row.tsx"),
				$e = s("./src/reddit/helpers/flair.ts"),
				et = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				tt = s("./src/reddit/selectors/activeModalId.ts"),
				st = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ot = s("./src/reddit/selectors/postFlair.ts"),
				nt = s("./src/reddit/selectors/posts.ts"),
				rt = s("./src/reddit/selectors/tooltip.ts"),
				at = s("./src/reddit/components/TrackingHelper/index.tsx"),
				it = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				lt = s.n(it);
			const dt = p.a.wrapped(e => l.a.createElement("button", {
					className: e.className,
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? g.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, l.a.createElement(C.a, null, e.buttonText)), "StatusItem", lt.a),
				ct = p.a.div("StatusContainer", lt.a),
				mt = Object(c.c)({
					selectedItems: ke.g
				}),
				pt = Object(d.b)(mt, e => ({
					onIgnoreReports: () => e(Object(u.f)(fe.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(fe.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(fe.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(fe.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(fe.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(fe.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(fe.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(fe.a.Unspoiler))
				})),
				ut = e => e.some(e => Object(I.a)(e)),
				bt = p.a.wrapped(pt(Object(at.c)(e => l.a.createElement("div", {
					className: e.className,
					style: e.style
				}, l.a.createElement(ct, null, l.a.createElement(dt, {
					onClick: e.onIgnoreReports,
					buttonText: g.fbt._("Ignore Reports", null, {
						hk: "1hZ3hN"
					})
				}), l.a.createElement(dt, {
					onClick: e.onUnignoreReports,
					buttonText: g.fbt._("Unignore Reports", null, {
						hk: "3y089p"
					})
				}), l.a.createElement(dt, {
					isDisabled: ut(e.selectedItems),
					onClick: e.onLock,
					buttonText: g.fbt._("Lock", null, {
						hk: "4bc0vl"
					})
				}), l.a.createElement(dt, {
					isDisabled: ut(e.selectedItems),
					onClick: e.onUnlock,
					buttonText: g.fbt._("Unlock", null, {
						hk: "Pe2ML"
					})
				}), l.a.createElement(dt, {
					isDisabled: ut(e.selectedItems),
					onClick: e.onSpoiler,
					buttonText: g.fbt._("Mark as Spoiler", null, {
						hk: "4pIu4V"
					})
				}), l.a.createElement(dt, {
					isDisabled: ut(e.selectedItems),
					onClick: e.onUnspoiler,
					buttonText: g.fbt._("Unmark as Spoiler", null, {
						hk: "1ImDYd"
					})
				}), l.a.createElement(dt, {
					isDisabled: ut(e.selectedItems),
					onClick: e.onMarkNSFW,
					buttonText: g.fbt._("Mark as NSFW", null, {
						hk: "4yS4Hz"
					})
				}), l.a.createElement(dt, {
					isDisabled: ut(e.selectedItems),
					onClick: e.onUnmarkNSFW,
					buttonText: g.fbt._("Unmark as NSFW", null, {
						hk: "ZzA74"
					})
				}))))), "StatusList", lt.a);
			var ht = Object(He.a)(bt);
			const gt = Object(c.c)({
				isDropdownOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(rt.b)(s)(e)
				}
			});
			var xt = Object(d.b)(gt)(Object(at.c)(e => {
					const {
						className: t,
						isDropdownOpen: s,
						tooltipId: o
					} = e;
					return l.a.createElement("div", {
						id: o,
						className: t
					}, l.a.createElement(ht, {
						isOpen: s,
						tooltipId: o
					}))
				})),
				ft = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				Ct = s.n(ft);
			const kt = "BulkAction--BulkItemFilter",
				yt = "BulkActions--PostFlair--Modal",
				St = Object(He.a)(Ge.a),
				Ot = p.a.div("CheckboxContainer", Ct.a),
				Et = p.a.wrapped(R.a, "Checkbox", Ct.a),
				jt = p.a.wrapped(et.b, "DropdownTriangle", Ct.a),
				It = p.a.wrapped(e => l.a.createElement(Ye.b, {
					className: e.className,
					displayText: e.displayText,
					onClick: e.onClick
				}), "DropdownRow", Ct.a),
				_t = p.a.span("Bullet", Ct.a),
				vt = p.a.div("Text", Ct.a),
				Pt = Object(c.c)({
					activeModalId: tt.a,
					dropdownIsOpen: Object(rt.b)(kt),
					flairData: ot.d,
					isApiPending: ke.a,
					moderatorPermissions: st.j,
					posts: nt.R,
					selectedItems: ke.g
				}),
				wt = Object(d.b)(Pt, e => ({
					onApprove: () => e(Object(u.f)(fe.a.Approve)),
					onFlair: (t, s) => e(Object(u.f)(fe.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(Qe.h)({
						tooltipId: kt
					})),
					onOpenModToolsDropdown: () => e(Object(Qe.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(u.f)(fe.a.Remove)),
					onSpam: () => e(Object(u.f)(fe.a.Spam)),
					onToggleFlairModal: () => e(Object(ze.i)(yt))
				})),
				Tt = (e, t) => {
					const s = Me()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const o = [];
					return s.forEach(e => {
						if (e.type === ge.f.Text || e.type === ge.f.Richtext) {
							const t = Object($e.g)(e);
							a()(o, t) || o.push(t)
						}
					}), o.length > 1 ? [{
						type: ge.f.Text,
						text: g.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var Lt = wt(p.a.wrapped(e => {
					const {
						activeModalId: t,
						className: s,
						endNumItems: o,
						flairData: n,
						isAnyItemSelected: r,
						isApiPending: a,
						moderatorPermissions: d,
						numSelected: c,
						numShowing: m,
						onApprove: p,
						onFlair: u,
						onRemove: b,
						onSpam: h,
						onToggleFlairModal: x,
						posts: f,
						selectedItems: C,
						startNumItems: k,
						subredditId: y,
						toggleSelectAll: S,
						toggleSelectByFilter: O
					} = e, E = [{
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
					}], j = d && d.flair, I = y && n && n.displaySettings.isEnabled && j && !ut(C);
					return l.a.createElement("div", {
						className: s
					}, l.a.createElement(Ot, {
						id: kt
					}, l.a.createElement(Et, {
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: S
					}), l.a.createElement(jt, {
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), l.a.createElement(St, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: kt
					}, E.map(e => l.a.createElement(It, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => O(e.filterType)
					})))), r && l.a.createElement(i.Fragment, null, l.a.createElement(Je.c, {
						disabled: a,
						text: g.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, l.a.createElement(Ae.a, null)), l.a.createElement(Je.c, {
						disabled: a,
						text: g.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, l.a.createElement(Xe.a, null)), l.a.createElement(Je.c, {
						disabled: a,
						text: g.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, l.a.createElement(qe.a, null)), l.a.createElement(Je.c, {
						disabled: a,
						onClick: e.onOpenModToolsDropdown
					}, l.a.createElement(xt, {
						tooltipId: "BulkActions--ModTools"
					}), l.a.createElement(Ve, null)), l.a.createElement("div", null, I && l.a.createElement(Je.c, {
						disabled: a,
						onClick: x
					}, l.a.createElement(Ze.a, null)))), r && y && t === yt && l.a.createElement(Ke.a, {
						flairs: Tt(C, f),
						modalId: yt,
						onFlairChanged: e => {
							let {
								previewFlair: t,
								selectedTemplateId: s
							} = e;
							u(t, s)
						},
						subredditId: y
					}), m > 0 && l.a.createElement(vt, null, g.fbt._("Items {startNumItems}- {endNumItems}", [g.fbt._param("startNumItems", "".concat(k)), g.fbt._param("endNumItems", "".concat(o))], {
						hk: "2B34NC"
					}), l.a.createElement(_t, null, "•"), g.fbt._("{numSelected} selected", [g.fbt._param("numSelected", "".concat(c))], {
						hk: "4uf9Ow"
					})))
				}, "ModToolsBulkOperations", Ct.a)),
				Nt = s("./src/reddit/components/ModQueueList/index.m.less"),
				Ft = s.n(Nt);
			const Bt = e => Object(_.a)(e.id),
				Dt = p.a.div("ItemContainer", Ft.a),
				Mt = p.a.div("ButtonContainer", Ft.a),
				Qt = Object(j.t)({
					currentProfileName: j.h,
					isCommentPermalink: j.v,
					isCommentsPage: j.w,
					isFrontpage: j.y,
					isProfilePostListing: j.I,
					isTopicPage: j.M,
					queryParams: j.S,
					pageLayer: e => e
				}),
				At = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: ke.c,
					loadMore: ke.e,
					modQueueListingItems: ke.d,
					origin: Ce.l,
					selectedItems: ke.g,
					subredditId: (e, t) => t.subredditName ? Object(ye.G)(e, t.subredditName) : null
				}),
				Rt = Object(d.b)(At, e => ({
					addSelectedItems: t => e(Object(u.a)({
						ids: t
					})),
					bulkSelectItems: t => e(Object(u.b)({
						ids: t
					})),
					bulkUnselectItems: t => e(Object(u.c)({
						ids: t
					})),
					fireAdPixelsOfType: (t, s) => e(Object(b.t)(t, s)),
					openPost: t => e(Object(b.C)(t))
				})),
				Wt = e => e.page ? parseInt(e.page, 10) : fe.b,
				Ut = e => Wt(e) + 1,
				Vt = e => Math.max(fe.b, Wt(e) - 1),
				Xt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Wt(e) === fe.b ? t : 25 * Vt(e) + t
				},
				qt = e => Wt(e) === fe.b ? fe.b : 25 * Vt(e) + 1;
			var Zt;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Zt || (Zt = {}));
			class Ht extends l.a.Component {
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
							case Zt.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(_.a)(e.id) && t.push(e.id)
								});
								break;
							case Zt.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(I.a)(e.id) && t.push(e.id)
								});
								break;
							case Zt.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Zt.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(_.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== ge.f.Spoiler && e.type !== ge.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case Zt.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(_.a)(e.id)) {
										const s = e;
										s.media && s.media.type === xe.o.TEXT && t.push(s.id)
									}
								});
								break;
							case Zt.spamFiltered:
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
							const s = "modqueue-item-[layout: ".concat(e.layout, "]-[id: ").concat(t.id, "]");
							if (Bt(t)) {
								const o = t,
									n = Object(v.b)({
										layout: e.layout,
										post: o
									});
								return l.a.createElement(Dt, {
									key: s
								}, l.a.createElement(n, {
									availableWidth: E.g,
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
									onClickPost: Object(O.b)(o.id, e),
									showBulkActionCheckbox: !0,
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(o.id), [o.id]),
									shouldShowGalleryTileOption: !0,
									isGalleryTileLayoutDefault: !0
								}))
							}
							const o = function(e, t) {
								const s = be[t];
								return void 0 === s ? (Object(P.a)(void 0, "Could not find component for layout ".concat(t, ".")), he) : s
							}(0, e.layout);
							return l.a.createElement(Dt, {
								key: s
							}, l.a.createElement(o, {
								commentId: t.id,
								hasReports: Object(h.c)(t),
								highlight: !1,
								isCheckboxSelected: this.isCheckboxSelected(t.id),
								showBulkActionCheckbox: !0,
								showModTools: !0,
								toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(t.id), [t.id]),
								trackClick: e.sendEventWithName
							}))
						})), l.a.createElement("div", null, l.a.createElement("div", null, t), l.a.createElement(Mt, null, l.a.createElement(S, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)("".concat(e.origin).concat(e.currentPage.url), {
								page: Vt(e),
								after: null
							}),
							nextButtonEnabled: o,
							nextTo: Object(m.a)("".concat(e.origin).concat(e.currentPage.url), {
								page: Ut(e),
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
					return l.a.createElement("div", null, l.a.createElement(Lt, {
						endNumItems: Xt(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: qt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? l.a.createElement(Te, null) : e.isModQueueListingPending ? l.a.createElement(Be, null) : null)
				}
			}
			t.a = Qt(Rt(Ht))
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
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				k = s.n(C);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var S = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const O = e => Object(l.a)(k.a.iconStyles, e.className, {
					[k.a.mDisabled]: e.disabled,
					[k.a.mRedditStyle]: e.redditStyle
				}),
				E = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: o
					} = e, n = S(e, ["className", "disabled", "redditStyle"]);
					return r.a.createElement(b.a, y({
						className: O({
							className: t,
							disabled: s,
							redditStyle: o
						})
					}, n))
				},
				j = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: o
					} = e, n = S(e, ["className", "disabled", "redditStyle"]);
					return r.a.createElement(u.a, y({
						className: O({
							className: t,
							disabled: s,
							redditStyle: o
						})
					}, n))
				},
				I = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: o
					} = e, n = S(e, ["className", "disabled", "redditStyle"]);
					return r.a.createElement(h.a, y({
						className: O({
							className: t,
							disabled: s,
							redditStyle: o
						})
					}, n))
				},
				_ = e => {
					var {
						isActive: t
					} = e, s = S(e, ["isActive"]);
					return r.a.createElement("button", y({
						className: Object(l.a)(k.a.layoutButton, {
							[k.a.mIsActive]: t
						})
					}, s))
				},
				v = Object(x.t)(),
				P = Object(i.c)({
					postLayout: x.N,
					redditStyle: x.A
				}),
				w = Object(a.b)(P, e => ({
					onListingLayoutChange: (t, s) => e(Object(c.x)(t, s)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = v(w(Object(g.c)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || p.e[e.postLayout];
				return r.a.createElement("div", {
					className: Object(l.a)(k.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, r.a.createElement("div", {
					className: k.a.title
				}, o.fbt._("View", null, {
					hk: "18a931"
				})), r.a.createElement("div", {
					className: k.a.iconContainer
				}, (() => [{
					layout: p.d.Card,
					Icon: I,
					text: o.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: p.d.Classic,
					Icon: j,
					text: o.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: p.d.Compact,
					Icon: E,
					text: o.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(o => {
					const a = () => (o => {
							e.onChange ? e.onChange(o) : (e.onListingLayoutChange(o, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: o,
								screen: Object(f.screen)(e),
								subreddit: Object(f.subreddit)(e)
							})))
						})(o.layout),
						i = () => e.toggleTooltip(l),
						l = "layoutSwitch--" + o.layout,
						c = o.layout === n;
					return r.a.createElement(_, {
						"aria-label": o.text,
						"aria-pressed": c,
						id: l,
						isActive: c,
						key: o.layout,
						onClick: a,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: a
					}, r.a.createElement(o.Icon, {
						disabled: !c,
						onClick: c ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), r.a.createElement(d.c, {
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
			s("./node_modules/core-js/modules/es6.regexp.search.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Search/index.tsx"),
				i = s("./src/reddit/controls/SearchBar/index.m.less"),
				l = s.n(i);
			t.a = e => n.a.createElement("div", {
				className: Object(r.a)(l.a.searchContainer, e.className)
			}, n.a.createElement("input", {
				className: Object(r.a)(l.a.search, {
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
				className: Object(r.a)(l.a.searchIconContainer, {
					[l.a.mClickable]: !!e.onSearch,
					[l.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, n.a.createElement(a.a, null)))
		},
		"./src/reddit/icons/fonts/List/index.m.less": function(e, t, s) {
			e.exports = {
				ListIcon: "t3UrRpUFSigA4IRW8iMLv",
				listIcon: "t3UrRpUFSigA4IRW8iMLv"
			}
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.d6809c8e4d9f33f785bc.js.map