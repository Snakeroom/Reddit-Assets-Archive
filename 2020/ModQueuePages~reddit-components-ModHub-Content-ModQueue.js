// https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.1ce2358e43933437e836.js
// Retrieved at 5/18/2020, 11:20:08 AM by Reddit Dataminer v1.0.0
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
				CommentBody: "_2MpQwJBmFbNsa_Vw7EV8OX",
				commentBody: "_2MpQwJBmFbNsa_Vw7EV8OX",
				Fade: "oJgHb8jt8pcSpTiugG0Db",
				fade: "oJgHb8jt8pcSpTiugG0Db",
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
				Fade: "_2Mj-hTi0oAhSeVNOXqsYr2",
				fade: "_2Mj-hTi0oAhSeVNOXqsYr2",
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
				g = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/selectors/profile.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/lib/addQueryParams/index.ts"),
				E = s("./src/lib/filterQueryParams/index.ts"),
				S = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/selectors/meta.ts"),
				_ = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				v = s.n(_);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(o || (o = {}));
			const I = p.a.wrapped(S.b, "Row", v.a),
				P = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					origin: j.j
				});
			var w = Object(i.b)(P)(e => r.a.createElement("div", null, r.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(E.a)("".concat(e.origin).concat(e.currentPage.url), ["after", "before", "only", "page"])
				}, r.a.createElement(I, {
					displayText: n.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), r.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(y.a)(Object(E.a)("".concat(e.origin).concat(e.currentPage.url), ["after", "before", "page"]), {
						only: o.Posts
					})
				}, r.a.createElement(I, {
					displayText: n.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === o.Posts
				})), r.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(y.a)(Object(E.a)("".concat(e.origin).concat(e.currentPage.url), ["after", "before", "page"]), {
						only: o.Comments
					})
				}, r.a.createElement(I, {
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
					origin: j.j
				}),
				Q = Object(i.b)(M),
				A = p.a.div("DropdownContainer", B.a),
				R = p.a.div("SearchBarContainer", B.a),
				W = p.a.wrapped(S.b, "Row", B.a),
				U = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class V extends r.a.Component {
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
					return r.a.createElement(A, {
						onClickCapture: this.stopPropagation
					}, r.a.createElement(R, null, r.a.createElement(L.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: n.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), r.a.createElement(O.a, {
						to: Object(E.a)("".concat(e.origin).concat(e.currentPageUrl), ["after", "before", "page", "profile", "subreddit"])
					}, r.a.createElement(W, {
						displayText: n.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = U(t);
						return r.a.createElement(O.a, {
							key: t.id,
							to: Object(y.a)(Object(E.a)("".concat(e.origin).concat(e.currentPageUrl), ["after", "before", "page", "profile", "subreddit"]), s)
						}, r.a.createElement(W, {
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
				J = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				K = p.a.wrapped(x.a, "Inline", Z.a),
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
					isPostTypeFilterDropdownOpen: Object(k.b)(J),
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
						return s ? Object(C.z)(e, {
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
			class se extends r.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(z), this.props.sendEventWithName("subreddit")
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
					return r.a.createElement(K, null, !e.hideSubredditFilter && r.a.createElement(r.a.Fragment, null, r.a.createElement(G, {
						id: z,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, r.a.createElement(g.b, null)), r.a.createElement(H, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: z
					}, r.a.createElement(X, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), e.showTypeFilter && r.a.createElement("div", {
						className: Object(d.a)({
							[Z.a.filterMargin]: !e.hideSubredditFilter
						})
					}, r.a.createElement(G, {
						id: J,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, r.a.createElement(g.b, null)), r.a.createElement(H, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: J
					}, r.a.createElement(w, {
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
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/layout/row/Inline/index.tsx"),
				k = s("./src/reddit/components/PaginationButtons/index.m.less"),
				y = s.n(k),
				E = e => l.a.createElement(C.a, {
					className: y.a.buttonContainer
				}, l.a.createElement(f.o, {
					className: Object(x.a)(y.a.routerLink, {
						[y.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, g.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), l.a.createElement(f.o, {
					className: Object(x.a)(y.a.routerLink, {
						[y.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, g.fbt._("Next", null, {
					hk: "2M8bo9"
				}))),
				S = s("./src/reddit/components/PostList/index.tsx"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/isComment.ts"),
				_ = s("./src/reddit/helpers/isPost.ts"),
				v = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				I = s("./src/reddit/selectors/telemetry.ts");
			const P = (e, t) => s => ({
				source: "bulk_mod_action",
				action: "click",
				noun: t,
				media: I.media(s, e),
				post: I.post(s, e),
				profile: I.profile(s),
				screen: I.screen(s),
				session: I.session(s),
				subreddit: I.subreddit(s)
			});
			var w = s("./src/lib/logs/console.ts"),
				T = s("./src/lib/objectSelector/index.ts"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				N = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				F = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				B = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				D = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				M = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				Q = s("./src/reddit/components/ModModeReports/index.tsx"),
				A = s("./src/reddit/components/RichTextJson/index.tsx"),
				R = s("./src/reddit/components/VerticalVotes/index.tsx"),
				W = s("./src/reddit/controls/Checkbox/index.tsx"),
				U = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				V = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				X = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				q = s.n(X);
			const Z = p.a.div("LeftRail", q.a),
				H = p.a.wrapped(W.a, "BulkActionCheckbox", q.a),
				z = p.a.wrapped(F.a, "UnthreadedCommentContainer", q.a),
				J = p.a.div("CommentColumn", q.a),
				K = p.a.div("VoteColumn", q.a),
				G = p.a.wrapped(L.c, "ModToolsFlatlist", q.a),
				Y = p.a.div("CommentBody", q.a),
				$ = p.a.div("Fade", q.a),
				ee = p.a.wrapped(R.a, "Votes", q.a),
				te = p.a.div("CommentContentWrapper", q.a),
				se = p.a.div("ParentPostTitle", q.a),
				oe = p.a.div("CommentParentWrapper", q.a),
				ne = Object(T.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var ae = Object(N.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						flair: o,
						isCheckboxSelected: n = !1,
						language: a,
						onIgnoreReports: r,
						onVoteClick: i,
						showModTools: d,
						subreddit: c,
						showBulkActionCheckbox: m,
						toggleCheckbox: p
					} = e;
					return l.a.createElement(z, {
						className: Object(x.a)(t, {
							[q.a.isBanned]: !!s.bannedBy,
							[q.a.isReported]: Object(V.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: s.permalink
					}, l.a.createElement(Z, {
						className: Object(x.a)({
							[q.a.hasBorder]: !!s.bannedBy || Object(V.a)(s)
						})
					}, m && l.a.createElement(H, {
						isCheckboxSelected: n,
						toggleCheckbox: p
					})), l.a.createElement(K, null, l.a.createElement(ee, {
						compact: !1,
						model: s,
						onVoteClick: i,
						scoreClassName: q.a.score
					})), l.a.createElement(J, null, l.a.createElement(oe, null, s.postTitle && l.a.createElement(se, null, s.postTitle), s.postAuthor && l.a.createElement(M.a, {
						comment: s
					})), l.a.createElement(te, null, l.a.createElement(B.a, {
						comment: s
					}, l.a.createElement(Y, null, l.a.createElement(A.a, {
						content: Object(U.a)(s),
						rtJsonElementProps: ne(e)
					}), l.a.createElement($, null)), l.a.createElement(D.a, {
						comment: s,
						flair: o,
						language: a,
						subredditName: c ? c.displayText : null
					}), Object(h.c)(s) && l.a.createElement(Q.a, {
						onIgnoreReports: r,
						reportable: s
					}), d && !s.isDeleted && l.a.createElement(G, {
						comment: s,
						language: a
					})))))
				}, "Component", q.a)),
				re = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ie = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				le = s.n(ie);
			const de = p.a.div("VoteSpacer", le.a),
				ce = p.a.div("ContentWrapper", le.a),
				me = p.a.wrapped(D.a, "Meta", le.a),
				pe = p.a.div("CommentParentWrapper", le.a),
				ue = p.a.div("CommentContentWrapper", le.a),
				be = p.a.div("Fade", le.a),
				he = Object(T.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var ge = Object(N.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						flair: o,
						hasReports: n,
						isCheckboxSelected: a = !1,
						language: r,
						onIgnoreReports: i,
						onVoteClick: d,
						showModTools: c,
						subreddit: m,
						showBulkActionCheckbox: p,
						toggleCheckbox: u
					} = e;
					return l.a.createElement(F.a, {
						className: t,
						clickTrackingId: s.id,
						permalink: s.permalink
					}, l.a.createElement(re.a, {
						model: s,
						handleVote: d,
						showBulkActionCheckbox: p,
						isCheckboxSelected: a,
						toggleCheckbox: u,
						subreddit: m
					}), l.a.createElement(de, null, l.a.createElement(ce, null, l.a.createElement(pe, null, s.postAuthor && l.a.createElement(M.a, {
						comment: s,
						subredditOrProfile: m
					}), s.postTitle && l.a.createElement(N.a, null, s.postTitle)), l.a.createElement(B.a, {
						comment: s
					}, l.a.createElement(ue, null, l.a.createElement(A.a, {
						content: Object(U.a)(s),
						rtJsonElementProps: he(e)
					}), l.a.createElement(be, null)), n && l.a.createElement(Q.a, {
						onIgnoreReports: i,
						reportable: s
					}), l.a.createElement(me, {
						comment: s,
						flair: o,
						language: r
					}))), c && !s.isDeleted && l.a.createElement(L.c, {
						comment: s,
						language: r
					})))
				}, "Component", le.a)),
				xe = s("./src/reddit/constants/postLayout.ts");
			const fe = {
					[xe.g.Large]: ge,
					[xe.g.Medium]: N.c,
					[xe.g.Classic]: N.c,
					[xe.g.Compact]: ae
				},
				Ce = e => null;
			var ke = s("./src/reddit/models/Flair/index.ts"),
				ye = s("./src/reddit/models/Media/index.ts"),
				Ee = s("./src/reddit/models/ModQueue/index.ts"),
				Se = s("./src/reddit/selectors/meta.ts"),
				Oe = s("./src/reddit/selectors/modQueue.ts"),
				je = s("./src/reddit/selectors/subreddit.ts"),
				_e = s("./src/config.ts"),
				ve = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				Ie = s.n(ve);
			const {
				fbt: Pe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), we = "".concat(_e.a.assetPath, "/img/snoomoji/cat_blep.png"), Te = p.a.div("Container", Ie.a), Le = p.a.div("Image", Ie.a), Ne = p.a.div("Title", Ie.a), Fe = p.a.div("Text", Ie.a);
			var Be = () => l.a.createElement(Te, null, l.a.createElement(Le, {
					style: {
						backgroundImage: "url(".concat(we, ")")
					}
				}), l.a.createElement(Ne, null, Pe._("The queue is clean!", null, {
					hk: "3d14fC"
				})), l.a.createElement(Fe, null, Pe._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				De = s("./src/reddit/components/PostList/Placeholder.tsx");
			const Me = Object(O.t)(),
				Qe = Object(c.c)({
					layout: O.N
				});
			var Ae = Me(Object(d.b)(Qe)(e => l.a.createElement(De.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Re = s("./node_modules/lodash/flatten.js"),
				We = s.n(Re),
				Ue = s("./src/reddit/actions/tooltip.ts"),
				Ve = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				Xe = s("./src/reddit/icons/fonts/helpers.tsx"),
				qe = s("./src/reddit/icons/fonts/List/index.m.less"),
				Ze = s.n(qe);
			var He = p.a.wrapped(e => l.a.createElement("i", {
					className: "".concat(Object(Xe.b)("list"), " ").concat(e.className)
				}), "ListIcon", Ze.a),
				ze = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				Je = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Ke = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				Ge = s("./src/higherOrderComponents/asTooltip.tsx"),
				Ye = s("./src/reddit/actions/modal.ts"),
				$e = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				et = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				tt = s("./src/reddit/controls/Dropdown/index.tsx"),
				st = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ot = s("./src/reddit/helpers/flair.ts"),
				nt = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				at = s("./src/reddit/selectors/activeModalId.ts"),
				rt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				it = s("./src/reddit/selectors/postFlair.ts"),
				lt = s("./src/reddit/selectors/posts.ts"),
				dt = s("./src/reddit/selectors/tooltip.ts"),
				ct = s("./src/reddit/components/TrackingHelper/index.tsx"),
				mt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				pt = s.n(mt);
			const ut = p.a.wrapped(e => l.a.createElement("button", {
					className: e.className,
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? g.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, l.a.createElement(C.a, null, e.buttonText)), "StatusItem", pt.a),
				bt = p.a.div("StatusContainer", pt.a),
				ht = Object(c.c)({
					selectedItems: Oe.g
				}),
				gt = Object(d.b)(ht, e => ({
					onIgnoreReports: () => e(Object(u.f)(Ee.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(Ee.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(Ee.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(Ee.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(Ee.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(Ee.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(Ee.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(Ee.a.Unspoiler))
				})),
				xt = e => e.some(e => Object(j.a)(e)),
				ft = p.a.wrapped(gt(Object(ct.c)(e => l.a.createElement("div", {
					className: e.className,
					style: e.style
				}, l.a.createElement(bt, null, l.a.createElement(ut, {
					onClick: e.onIgnoreReports,
					buttonText: g.fbt._("Ignore Reports", null, {
						hk: "1hZ3hN"
					})
				}), l.a.createElement(ut, {
					onClick: e.onUnignoreReports,
					buttonText: g.fbt._("Unignore Reports", null, {
						hk: "3y089p"
					})
				}), l.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onLock,
					buttonText: g.fbt._("Lock", null, {
						hk: "4bc0vl"
					})
				}), l.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onUnlock,
					buttonText: g.fbt._("Unlock", null, {
						hk: "Pe2ML"
					})
				}), l.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onSpoiler,
					buttonText: g.fbt._("Mark as Spoiler", null, {
						hk: "4pIu4V"
					})
				}), l.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onUnspoiler,
					buttonText: g.fbt._("Unmark as Spoiler", null, {
						hk: "1ImDYd"
					})
				}), l.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onMarkNSFW,
					buttonText: g.fbt._("Mark as NSFW", null, {
						hk: "4yS4Hz"
					})
				}), l.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onUnmarkNSFW,
					buttonText: g.fbt._("Unmark as NSFW", null, {
						hk: "ZzA74"
					})
				}))))), "StatusList", pt.a);
			var Ct = Object(Ge.a)(ft);
			const kt = Object(c.c)({
				isDropdownOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(dt.b)(s)(e)
				}
			});
			var yt = Object(d.b)(kt)(Object(ct.c)(e => {
					const {
						className: t,
						isDropdownOpen: s,
						tooltipId: o
					} = e;
					return l.a.createElement("div", {
						id: o,
						className: t
					}, l.a.createElement(Ct, {
						isOpen: s,
						tooltipId: o
					}))
				})),
				Et = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				St = s.n(Et);
			const Ot = "BulkAction--BulkItemFilter",
				jt = "BulkActions--PostFlair--Modal",
				_t = Object(Ge.a)(tt.a),
				vt = p.a.div("CheckboxContainer", St.a),
				It = p.a.wrapped(W.a, "Checkbox", St.a),
				Pt = p.a.wrapped(nt.b, "DropdownTriangle", St.a),
				wt = p.a.wrapped(e => l.a.createElement(st.b, {
					className: e.className,
					displayText: e.displayText,
					onClick: e.onClick
				}), "DropdownRow", St.a),
				Tt = p.a.span("Bullet", St.a),
				Lt = p.a.div("Text", St.a),
				Nt = Object(c.c)({
					activeModalId: at.a,
					dropdownIsOpen: Object(dt.b)(Ot),
					flairData: it.d,
					isApiPending: Oe.a,
					moderatorPermissions: rt.j,
					posts: lt.R,
					selectedItems: Oe.g
				}),
				Ft = Object(d.b)(Nt, e => ({
					onApprove: () => e(Object(u.f)(Ee.a.Approve)),
					onFlair: (t, s) => e(Object(u.f)(Ee.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(Ue.h)({
						tooltipId: Ot
					})),
					onOpenModToolsDropdown: () => e(Object(Ue.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(u.f)(Ee.a.Remove)),
					onSpam: () => e(Object(u.f)(Ee.a.Spam)),
					onToggleFlairModal: () => e(Object(Ye.i)(jt))
				})),
				Bt = (e, t) => {
					const s = We()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const o = [];
					return s.forEach(e => {
						if (e.type === ke.f.Text || e.type === ke.f.Richtext) {
							const t = Object(ot.g)(e);
							r()(o, t) || o.push(t)
						}
					}), o.length > 1 ? [{
						type: ke.f.Text,
						text: g.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var Dt = Ft(p.a.wrapped(e => {
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
						onToggleFlairModal: x,
						posts: f,
						selectedItems: C,
						startNumItems: k,
						subredditId: y,
						toggleSelectAll: E,
						toggleSelectByFilter: S
					} = e, O = [{
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
					}], j = d && d.flair, _ = y && n && n.displaySettings.isEnabled && j && !xt(C);
					return l.a.createElement("div", {
						className: s
					}, l.a.createElement(vt, {
						id: Ot
					}, l.a.createElement(It, {
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: E
					}), l.a.createElement(Pt, {
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), l.a.createElement(_t, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: Ot
					}, O.map(e => l.a.createElement(wt, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => S(e.filterType)
					})))), a && l.a.createElement(i.Fragment, null, l.a.createElement(et.c, {
						disabled: r,
						text: g.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, l.a.createElement(Ve.a, null)), l.a.createElement(et.c, {
						disabled: r,
						text: g.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, l.a.createElement(ze.a, null)), l.a.createElement(et.c, {
						disabled: r,
						text: g.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, l.a.createElement(Je.a, null)), l.a.createElement(et.c, {
						disabled: r,
						onClick: e.onOpenModToolsDropdown
					}, l.a.createElement(yt, {
						tooltipId: "BulkActions--ModTools"
					}), l.a.createElement(He, null)), l.a.createElement("div", null, _ && l.a.createElement(et.c, {
						disabled: r,
						onClick: x
					}, l.a.createElement(Ke.a, null)))), a && y && t === jt && l.a.createElement($e.a, {
						flairs: Bt(C, f),
						modalId: jt,
						onFlairChanged: e => {
							let {
								previewFlair: t,
								selectedTemplateId: s
							} = e;
							u(t, s)
						},
						subredditId: y
					}), m > 0 && l.a.createElement(Lt, null, g.fbt._("Items {startNumItems}- {endNumItems}", [g.fbt._param("startNumItems", "".concat(k)), g.fbt._param("endNumItems", "".concat(o))], {
						hk: "2B34NC"
					}), l.a.createElement(Tt, null, "•"), g.fbt._("{numSelected} selected", [g.fbt._param("numSelected", "".concat(c))], {
						hk: "4uf9Ow"
					})))
				}, "ModToolsBulkOperations", St.a)),
				Mt = s("./src/reddit/components/ModQueueList/index.m.less"),
				Qt = s.n(Mt);
			const At = e => Object(_.a)(e.id),
				Rt = p.a.div("ItemContainer", Qt.a),
				Wt = p.a.div("ButtonContainer", Qt.a),
				Ut = Object(O.t)({
					currentProfileName: O.h,
					isCommentPermalink: O.v,
					isCommentsPage: O.w,
					isFrontpage: O.y,
					isProfilePostListing: O.I,
					isTopicPage: O.M,
					queryParams: O.S,
					pageLayer: e => e
				}),
				Vt = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: Oe.c,
					loadMore: Oe.e,
					modQueueListingItems: Oe.d,
					origin: Se.j,
					selectedItems: Oe.g,
					subredditId: (e, t) => t.subredditName ? Object(je.E)(e, t.subredditName) : null
				}),
				Xt = Object(d.b)(Vt, e => ({
					addSelectedItems: t => e(Object(u.a)({
						ids: t
					})),
					bulkSelectItems: t => e(Object(u.b)({
						ids: t
					})),
					bulkUnselectItems: t => e(Object(u.c)({
						ids: t
					})),
					fireAdPixelsOfType: (t, s) => e(Object(b.B)(t, s)),
					openPost: t => e(Object(b.M)(t))
				})),
				qt = e => e.page ? parseInt(e.page, 10) : Ee.b,
				Zt = e => qt(e) + 1,
				Ht = e => Math.max(Ee.b, qt(e) - 1),
				zt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return qt(e) === Ee.b ? t : 25 * Ht(e) + t
				},
				Jt = e => qt(e) === Ee.b ? Ee.b : 25 * Ht(e) + 1;
			var Kt;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Kt || (Kt = {}));
			class Gt extends l.a.Component {
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
							case Kt.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(_.a)(e.id) && t.push(e.id)
								});
								break;
							case Kt.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(j.a)(e.id) && t.push(e.id)
								});
								break;
							case Kt.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Kt.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(_.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== ke.f.Spoiler && e.type !== ke.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case Kt.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(_.a)(e.id)) {
										const s = e;
										s.media && s.media.type === ye.n.TEXT && t.push(s.id)
									}
								});
								break;
							case Kt.spamFiltered:
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
							if (At(t)) {
								const o = t,
									n = Object(v.b)({
										layout: e.layout,
										post: o
									});
								return l.a.createElement(Rt, {
									key: s
								}, l.a.createElement(n, {
									currentProfileName: e.currentProfileName,
									eventFactory: P,
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
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(o.id), [o.id])
								}))
							}
							const o = function(e, t) {
								const s = fe[t];
								return void 0 === s ? (Object(w.a)(void 0, "Could not find component for layout ".concat(t, ".")), Ce) : s
							}(0, e.layout);
							return l.a.createElement(Rt, {
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
						})), l.a.createElement("div", null, l.a.createElement("div", null, t), l.a.createElement(Wt, null, l.a.createElement(E, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)("".concat(e.origin).concat(e.currentPage.url), {
								page: Ht(e),
								after: null
							}),
							nextButtonEnabled: o,
							nextTo: Object(m.a)("".concat(e.origin).concat(e.currentPage.url), {
								page: Zt(e),
								after: e.loadMore
							})
						})))
					}
				}
				componentWillUnmount() {
					this.props.bulkUnselectItems(this.props.selectedItems)
				}
				componentWillUpdate(e) {
					e.pageName === this.props.pageName && e.page === this.props.page && e.profileName === this.props.profileName && e.subredditName === this.props.subredditName && e.postTypeFilter === this.props.postTypeFilter || this.props.bulkUnselectItems(this.props.selectedItems)
				}
				render() {
					const {
						props: e
					} = this, t = e.modQueueListingItems && e.modQueueListingItems.length ? e.modQueueListingItems.map(e => e.id) : [], s = e.selectedItems.length;
					return l.a.createElement("div", null, l.a.createElement(Dt, {
						endNumItems: zt(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Jt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? l.a.createElement(Be, null) : e.isModQueueListingPending ? l.a.createElement(Ae, null) : null)
				}
			}
			t.a = Ut(Xt(Gt))
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
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
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
			var E = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const S = e => Object(l.a)(k.a.iconStyles, e.className, {
					[k.a.mDisabled]: e.disabled,
					[k.a.mRedditStyle]: e.redditStyle
				}),
				O = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: o
					} = e, n = E(e, ["className", "disabled", "redditStyle"]);
					return a.a.createElement(b.a, y({
						className: S({
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
					} = e, n = E(e, ["className", "disabled", "redditStyle"]);
					return a.a.createElement(u.a, y({
						className: S({
							className: t,
							disabled: s,
							redditStyle: o
						})
					}, n))
				},
				_ = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: o
					} = e, n = E(e, ["className", "disabled", "redditStyle"]);
					return a.a.createElement(h.a, y({
						className: S({
							className: t,
							disabled: s,
							redditStyle: o
						})
					}, n))
				},
				v = e => {
					var {
						isActive: t
					} = e, s = E(e, ["isActive"]);
					return a.a.createElement("button", y({
						className: Object(l.a)(k.a.layoutButton, {
							[k.a.mIsActive]: t
						})
					}, s))
				},
				I = Object(x.t)(),
				P = Object(i.c)({
					postLayout: x.N,
					redditStyle: x.A
				}),
				w = Object(r.b)(P, e => ({
					onListingLayoutChange: (t, s) => e(Object(c.v)(t, s)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = I(w(Object(g.c)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || p.e[e.postLayout];
				return a.a.createElement("div", {
					className: Object(l.a)(k.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, a.a.createElement("div", {
					className: k.a.title
				}, o.fbt._("View", null, {
					hk: "18a931"
				})), a.a.createElement("div", {
					className: k.a.iconContainer
				}, (() => [{
					layout: p.d.Card,
					Icon: _,
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
					Icon: O,
					text: o.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(o => {
					const r = () => (o => {
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
					return a.a.createElement(v, {
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
						disabled: !c,
						onClick: c ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
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
			s("./node_modules/core-js/modules/es6.regexp.search.js");
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

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({
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

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({
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

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		}
	}
]);
//# sourceMappingURL=ModQueuePages~reddit-components-ModHub-Content-ModQueue.1ce2358e43933437e836.js.map