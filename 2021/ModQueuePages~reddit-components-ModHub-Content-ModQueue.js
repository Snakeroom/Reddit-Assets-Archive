// https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.02a45b0119bad71de699.js
// Retrieved at 4/29/2021, 6:20:05 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/CompactPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				emptyScore: "_3RRgbzXvoZ4MUYm45lAqp7",
				emptyVotes: "_2rSb53hAOWG9j6R_ToxoSJ",
				wrapper: "_2wuOxz4--LcoxCYSrpCBlx",
				expandoContainer: "_3CIl2qTD30RwYsMAGO2Y2S",
				expando: "_2UCpUVZ4aSncQhvkrQW_0i",
				subredditIconContainer: "_2IJnSguizdehDk_JnTKrdK",
				topLine: "_1OQE_XsSHzM7AtjVQahjoI",
				title: "_28eZmJsl2bogBZ2KPmeoFO",
				meta: "_24dJJDh8muEbehYysONmV1",
				comments: "_2-iJVRFJK-xC7a7xgBF-T5",
				ellipsis: "_1IFRAIwzfwChKq85FhLG69",
				flatList: "_3HxvQvODjYEHa-X5AuQinY"
			}
		},
		"./src/reddit/components/CompactPost/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = s.n(u),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				g = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(c.t)(),
				y = Object(i.c)({
					isFakeSubreddit: c.x
				}),
				C = Object(r.b)(y),
				E = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return n.a.createElement("div", {
						className: g.a.emptyVotes
					}, n.a.createElement(d.d, x({
						key: "u"
					}, t)), n.a.createElement("div", {
						key: "s",
						className: g.a.emptyScore
					}), n.a.createElement(d.c, x({
						key: "d"
					}, t)))
				},
				k = e => n.a.createElement(l.a, {
					className: Object(m.a)(e)
				}),
				v = e => n.a.createElement("div", {
					className: g.a.flatList
				}, n.a.createElement("div", {
					className: Object(a.a)(g.a.comments, Object(m.b)(e))
				}), n.a.createElement("div", {
					className: Object(a.a)(g.a.ellipsis, Object(m.b)(e))
				}));
			t.a = f(C(e => n.a.createElement("div", {
				className: Object(a.a)(e.className, h.a.compactPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement("div", {
				className: g.a.wrapper
			}, n.a.createElement(E, x({
				key: "c"
			}, e)), n.a.createElement("div", {
				key: "a",
				className: g.a.expandoContainer
			}, n.a.createElement("div", {
				className: Object(a.a)(g.a.expando, Object(m.a)(e))
			})), n.a.createElement("div", {
				key: "d",
				className: g.a.subredditIconContainer
			}, n.a.createElement(k, {
				isLoading: !1
			})), n.a.createElement("div", {
				key: "e",
				className: g.a.topLine
			}, n.a.createElement("div", {
				key: "ea",
				className: Object(a.a)(g.a.title, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "eb",
				className: Object(a.a)(g.a.meta, Object(m.b)(e))
			})), n.a.createElement(v, x({
				key: "f"
			}, e))))))
		},
		"./src/reddit/components/LargePost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_1yYeg-XN7v7i06TrK8Lh13",
				emptyVerticalVotes: "_3Qm3gV6v4Y9YWuQgCqMvJr",
				emptyScore: "y9vamInQ4LrXndusvhkBl",
				topLine: "_3QuUl4wSXyqVEAkIgGaLXl",
				subredditIcon: "CgxUJgu3x2x0HIb96uJcV",
				topMetaOne: "_3vDeGQp8VifbnDC95HagCL",
				topMetaTwo: "Nci_4K-inwrSvpM-HSgWy",
				title: "_1QxTngAAL4xURgv5RVNOq1",
				media: "_2cFr_UVzM0pQGvZVL2Pmx5",
				flatlist: "_33_7mRxP4egdr8CL9OMSdb",
				flatlistItemOne: "_EVV9UvUf3cYf-HtTUL33",
				flatListItemTwo: "_2Ovk4TwuzZDamFhAj_X5Nl",
				bottomMeta: "_3Yno3UEEUpbfXOklgaEf27",
				postActionBar: "_3-iHWkhaRqC0JmCwckFVg1",
				postActionButton: "_314KvlynGyTcpUjSXckrbY",
				long: "_3EpUFkJ6GGzK-aVzndYmTT"
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
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				g = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/selectors/profile.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/lib/addQueryParams/index.ts"),
				k = s("./src/lib/filterQueryParams/index.ts"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/selectors/meta.ts"),
				I = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				P = s.n(I);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(o || (o = {}));
			const _ = p.a.wrapped(v.b, "Row", P.a),
				j = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					origin: S.j
				});
			var L = Object(a.b)(j)(e => i.a.createElement("div", null, i.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, i.a.createElement(_, {
					displayText: n.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), i.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Posts
					})
				}, i.a.createElement(_, {
					displayText: n.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === o.Posts
				})), i.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Comments
					})
				}, i.a.createElement(_, {
					displayText: n.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === o.Comments
				})))),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				T = s("./src/reddit/controls/SearchBar/index.tsx"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				F = s("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				R = s.n(F);
			const M = Object(w.t)({
					currentPageUrl: w.e
				}),
				B = Object(l.c)({
					moderatingSubreddits: N.l,
					origin: S.j
				}),
				A = Object(a.b)(B),
				D = p.a.div("DropdownContainer", R.a),
				V = p.a.div("SearchBarContainer", R.a),
				Q = p.a.wrapped(v.b, "Row", R.a),
				U = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class W extends i.a.Component {
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
					return i.a.createElement(D, {
						onClickCapture: this.stopPropagation
					}, i.a.createElement(V, null, i.a.createElement(T.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: n.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), i.a.createElement(O.a, {
						to: Object(k.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, i.a.createElement(Q, {
						displayText: n.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = U(t);
						return i.a.createElement(O.a, {
							key: t.id,
							to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), s)
						}, i.a.createElement(Q, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var K = M(A(W)),
				X = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				H = s.n(X);
			const q = Object(m.a)(h.a),
				Z = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				J = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				z = p.a.wrapped(x.a, "Inline", H.a),
				G = p.a.div("Filter", H.a),
				$ = p.a.wrapped(b.a, "LayoutSwitch", H.a),
				Y = e => {
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
					isPostTypeFilterDropdownOpen: Object(C.b)(J),
					isSubredditFilterDropdownOpen: Object(C.b)(Z),
					profile: (e, {
						profileName: t
					}) => t ? Object(f.j)(e, {
						profileName: t
					}) : null,
					subreddit: (e, {
						subredditName: t
					}) => t ? Object(y.A)(e, {
						subredditName: t
					}) : null
				}),
				te = Object(a.b)(ee, e => ({
					loadAllSubreddits: () => e(Object(u.d)(!0)),
					onOpenDropdown: t => e(Object(c.h)({
						tooltipId: t
					}))
				}));
			class se extends i.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(Z), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(J), this.props.sendEventWithName("content_type")
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || n.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), s = e.postTypeFilter && Y(e.postTypeFilter) || n.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					});
					return i.a.createElement(z, null, !e.hideSubredditFilter && i.a.createElement(i.a.Fragment, null, i.a.createElement(G, {
						id: Z,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, i.a.createElement(g.b, null)), i.a.createElement(q, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: Z
					}, i.a.createElement(K, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), e.showTypeFilter && i.a.createElement("div", {
						className: Object(d.a)({
							[H.a.filterMargin]: !e.hideSubredditFilter
						})
					}, i.a.createElement(G, {
						id: J,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, i.a.createElement(g.b, null)), i.a.createElement(q, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: J
					}, i.a.createElement(L, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), i.a.createElement($, null))
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
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				l = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/components/PaginationButtons/index.m.less"),
				E = s.n(C);
			var k = e => l.a.createElement(y.a, {
					className: E.a.buttonContainer
				}, l.a.createElement(f.p, {
					className: Object(x.a)(E.a.routerLink, {
						[E.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, g.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), l.a.createElement(f.p, {
					className: Object(x.a)(E.a.routerLink, {
						[E.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, g.fbt._("Next", null, {
					hk: "2M8bo9"
				}))),
				v = s("./src/reddit/components/PostList/index.tsx"),
				O = s("./src/reddit/constants/componentSizes.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/helpers/isComment.ts"),
				P = s("./src/reddit/helpers/isPost.ts"),
				_ = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				j = s("./src/lib/logs/console.ts"),
				L = s("./src/lib/objectSelector/index.ts"),
				w = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				T = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				N = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				F = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				R = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				M = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/index.tsx"),
				A = s("./src/reddit/components/RichTextJson/index.tsx"),
				D = s("./src/reddit/components/VerticalVotes/index.tsx"),
				V = s("./src/reddit/controls/Checkbox/index.tsx"),
				Q = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				U = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				W = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				K = s.n(W);
			const X = p.a.div("LeftRail", K.a),
				H = p.a.wrapped(V.a, "BulkActionCheckbox", K.a),
				q = p.a.wrapped(N.a, "UnthreadedCommentContainer", K.a),
				Z = p.a.div("CommentColumn", K.a),
				J = p.a.div("VoteColumn", K.a),
				z = p.a.wrapped(w.a, "ModToolsFlatlist", K.a),
				G = p.a.wrapped(D.a, "Votes", K.a),
				$ = p.a.div("CommentContentWrapper", K.a),
				Y = p.a.div("ParentPostTitle", K.a),
				ee = p.a.div("CommentParentWrapper", K.a),
				te = Object(L.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var se = Object(T.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						flair: o,
						isCheckboxSelected: n = !1,
						onIgnoreReports: r,
						onVoteClick: i,
						showModTools: a,
						subreddit: d,
						showBulkActionCheckbox: c,
						toggleCheckbox: m
					} = e;
					return l.a.createElement(q, {
						className: Object(x.a)(t, {
							[K.a.isBanned]: !!s.bannedBy,
							[K.a.isReported]: Object(U.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: s.permalink
					}, l.a.createElement(X, {
						className: Object(x.a)({
							[K.a.hasBorder]: !!s.bannedBy || Object(U.a)(s)
						})
					}, c && l.a.createElement(H, {
						isCheckboxSelected: n,
						toggleCheckbox: m
					})), l.a.createElement(J, null, l.a.createElement(G, {
						compact: !1,
						model: s,
						onVoteClick: i,
						scoreClassName: K.a.score
					})), l.a.createElement(Z, null, l.a.createElement(ee, null, s.postTitle && l.a.createElement(Y, null, s.postTitle), s.postAuthor && l.a.createElement(M.a, {
						comment: s
					})), l.a.createElement($, null, l.a.createElement(F.a, {
						comment: s
					}, l.a.createElement(A.a, {
						content: Object(Q.a)(s),
						rtJsonElementProps: te(e)
					}), l.a.createElement(R.a, {
						comment: s,
						flair: o,
						subredditName: d ? d.displayText : null
					}), Object(b.c)(s) && l.a.createElement(B.a, {
						onIgnoreReports: r,
						reportable: s
					}), a && !s.isDeleted && l.a.createElement(z, {
						comment: s
					})))))
				}, "Component", K.a)),
				oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ne = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				re = s.n(ne);
			const ie = p.a.div("VoteSpacer", re.a),
				ae = p.a.div("ContentWrapper", re.a),
				le = p.a.wrapped(R.a, "Meta", re.a),
				de = p.a.div("CommentParentWrapper", re.a),
				ce = p.a.div("CommentContentWrapper", re.a),
				me = Object(L.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var pe = Object(T.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						flair: o,
						hasReports: n,
						isCheckboxSelected: r = !1,
						onIgnoreReports: i,
						onVoteClick: a,
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
						handleVote: a,
						showBulkActionCheckbox: m,
						isCheckboxSelected: r,
						toggleCheckbox: p,
						subreddit: c
					}), l.a.createElement(ie, null, l.a.createElement(ae, null, l.a.createElement(de, null, s.postAuthor && l.a.createElement(M.a, {
						comment: s,
						subredditOrProfile: c
					}), s.postTitle && l.a.createElement(T.a, null, s.postTitle)), l.a.createElement(F.a, {
						comment: s
					}, l.a.createElement(ce, null, l.a.createElement(A.a, {
						content: Object(Q.a)(s),
						rtJsonElementProps: me(e)
					})), n && l.a.createElement(B.a, {
						onIgnoreReports: i,
						reportable: s
					}), l.a.createElement(le, {
						comment: s,
						flair: o
					}))), d && !s.isDeleted && l.a.createElement(w.a, {
						comment: s
					})))
				}, "Component", re.a)),
				ue = s("./src/reddit/constants/postLayout.ts");
			const he = {
					[ue.g.Large]: pe,
					[ue.g.Medium]: T.c,
					[ue.g.Classic]: T.c,
					[ue.g.Compact]: se
				},
				be = e => null;
			var ge = s("./src/reddit/models/Flair/index.ts"),
				xe = s("./src/reddit/models/Media/index.ts"),
				fe = s("./src/reddit/models/ModQueue/index.ts"),
				ye = s("./src/reddit/selectors/meta.ts"),
				Ce = s("./src/reddit/selectors/modQueue.ts"),
				Ee = s("./src/reddit/selectors/subreddit.ts"),
				ke = s("./src/config.ts"),
				ve = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				Oe = s.n(ve);
			const {
				fbt: Se
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = `${ke.a.assetPath}/img/snoomoji/cat_blep.png`, Pe = p.a.div("Container", Oe.a), _e = p.a.div("Image", Oe.a), je = p.a.div("Title", Oe.a), Le = p.a.div("Text", Oe.a);
			var we = () => l.a.createElement(Pe, null, l.a.createElement(_e, {
					style: {
						backgroundImage: `url(${Ie})`
					}
				}), l.a.createElement(je, null, Se._("The queue is clean!", null, {
					hk: "3d14fC"
				})), l.a.createElement(Le, null, Se._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Te = s("./src/reddit/components/PostList/Placeholder.tsx");
			const Ne = Object(S.t)(),
				Fe = Object(c.c)({
					layout: S.O
				});
			var Re = Ne(Object(d.b)(Fe)(e => l.a.createElement(Te.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Me = s("./node_modules/lodash/flatten.js"),
				Be = s.n(Me),
				Ae = s("./src/reddit/actions/tooltip.ts"),
				De = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/List/index.tsx"),
				Qe = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				We = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				Ke = s("./src/higherOrderComponents/asTooltip.tsx"),
				Xe = s("./src/reddit/actions/modal.ts"),
				He = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				qe = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Ze = s("./src/reddit/controls/Dropdown/index.tsx"),
				Je = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ze = s("./src/reddit/helpers/flair.ts"),
				Ge = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				$e = s("./src/reddit/selectors/activeModalId.ts"),
				Ye = s("./src/reddit/selectors/moderatorPermissions.ts"),
				et = s("./src/reddit/selectors/postFlair.ts"),
				tt = s("./src/reddit/selectors/posts.ts"),
				st = s("./src/reddit/selectors/tooltip.ts"),
				ot = s("./src/reddit/components/TrackingHelper/index.tsx"),
				nt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				rt = s.n(nt);
			const it = p.a.wrapped(e => l.a.createElement("button", {
					className: e.className,
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? g.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, l.a.createElement(y.a, null, e.buttonText)), "StatusItem", rt.a),
				at = p.a.div("StatusContainer", rt.a),
				lt = Object(c.c)({
					selectedItems: Ce.g
				}),
				dt = Object(d.b)(lt, e => ({
					onIgnoreReports: () => e(Object(u.f)(fe.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(fe.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(fe.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(fe.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(fe.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(fe.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(fe.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(fe.a.Unspoiler))
				})),
				ct = e => e.some(e => Object(I.a)(e)),
				mt = p.a.wrapped(dt(Object(ot.c)(e => l.a.createElement("div", {
					className: e.className,
					style: e.style
				}, l.a.createElement(at, null, l.a.createElement(it, {
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
				}))))), "StatusList", rt.a);
			var pt = Object(Ke.a)(mt);
			const ut = Object(c.c)({
				isDropdownOpen: (e, {
					tooltipId: t
				}) => Object(st.b)(t)(e)
			});
			var ht = Object(d.b)(ut)(Object(ot.c)(e => {
					const {
						className: t,
						isDropdownOpen: s,
						tooltipId: o
					} = e;
					return l.a.createElement("div", {
						id: o,
						className: t
					}, l.a.createElement(pt, {
						isOpen: s,
						tooltipId: o
					}))
				})),
				bt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				gt = s.n(bt);
			const xt = "BulkAction--BulkItemFilter",
				ft = "BulkActions--PostFlair--Modal",
				yt = Object(Ke.a)(Ze.a),
				Ct = p.a.div("CheckboxContainer", gt.a),
				Et = p.a.wrapped(V.a, "Checkbox", gt.a),
				kt = p.a.wrapped(Ge.b, "DropdownTriangle", gt.a),
				vt = p.a.wrapped(e => l.a.createElement(Je.b, {
					className: e.className,
					displayText: e.displayText,
					onClick: e.onClick
				}), "DropdownRow", gt.a),
				Ot = p.a.span("Bullet", gt.a),
				St = p.a.div("Text", gt.a),
				It = Object(c.c)({
					activeModalId: $e.a,
					dropdownIsOpen: Object(st.b)(xt),
					flairData: et.d,
					isApiPending: Ce.a,
					moderatorPermissions: Ye.k,
					posts: tt.I,
					selectedItems: Ce.g
				}),
				Pt = Object(d.b)(It, e => ({
					onApprove: () => e(Object(u.f)(fe.a.Approve)),
					onFlair: (t, s) => e(Object(u.f)(fe.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(Ae.h)({
						tooltipId: xt
					})),
					onOpenModToolsDropdown: () => e(Object(Ae.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(u.f)(fe.a.Remove)),
					onSpam: () => e(Object(u.f)(fe.a.Spam)),
					onToggleFlairModal: () => e(Object(Xe.i)(ft))
				})),
				_t = (e, t) => {
					const s = Be()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const o = [];
					return s.forEach(e => {
						if (e.type === ge.f.Text || e.type === ge.f.Richtext) {
							const t = Object(ze.g)(e);
							i()(o, t) || o.push(t)
						}
					}), o.length > 1 ? [{
						type: ge.f.Text,
						text: g.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var jt = Pt(p.a.wrapped(e => {
					const {
						activeModalId: t,
						className: s,
						endNumItems: o,
						flairData: n,
						isAnyItemSelected: r,
						isApiPending: i,
						moderatorPermissions: d,
						numSelected: c,
						numShowing: m,
						onApprove: p,
						onFlair: u,
						onRemove: h,
						onSpam: b,
						onToggleFlairModal: x,
						posts: f,
						selectedItems: y,
						startNumItems: C,
						subredditId: E,
						toggleSelectAll: k,
						toggleSelectByFilter: v
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
					}], S = d && d.flair, I = E && n && n.displaySettings.isEnabled && S && !ct(y);
					return l.a.createElement("div", {
						className: s
					}, l.a.createElement(Ct, {
						id: xt
					}, l.a.createElement(Et, {
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: k
					}), l.a.createElement(kt, {
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), l.a.createElement(yt, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: xt
					}, O.map(e => l.a.createElement(vt, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => v(e.filterType)
					})))), r && l.a.createElement(a.Fragment, null, l.a.createElement(qe.c, {
						disabled: i,
						text: g.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, l.a.createElement(De.a, null)), l.a.createElement(qe.c, {
						disabled: i,
						text: g.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: h
					}, l.a.createElement(Qe.a, null)), l.a.createElement(qe.c, {
						disabled: i,
						text: g.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: b
					}, l.a.createElement(Ue.a, null)), l.a.createElement(qe.c, {
						disabled: i,
						onClick: e.onOpenModToolsDropdown
					}, l.a.createElement(ht, {
						tooltipId: "BulkActions--ModTools"
					}), l.a.createElement(Ve.a, null)), l.a.createElement("div", null, I && l.a.createElement(qe.c, {
						disabled: i,
						onClick: x
					}, l.a.createElement(We.a, null)))), r && E && t === ft && l.a.createElement(He.a, {
						flairs: _t(y, f),
						modalId: ft,
						onFlairChanged: ({
							previewFlair: e,
							selectedTemplateId: t
						}) => {
							u(e, t)
						},
						subredditId: E
					}), m > 0 && l.a.createElement(St, null, g.fbt._("Items {startNumItems}- {endNumItems}", [g.fbt._param("startNumItems", `${C}`), g.fbt._param("endNumItems", `${o}`)], {
						hk: "2B34NC"
					}), l.a.createElement(Ot, null, "•"), g.fbt._("{numSelected} selected", [g.fbt._param("numSelected", `${c}`)], {
						hk: "4uf9Ow"
					})))
				}, "ModToolsBulkOperations", gt.a)),
				Lt = s("./src/reddit/contexts/Post/index.tsx"),
				wt = s("./src/reddit/components/ModQueueList/index.m.less"),
				Tt = s.n(wt);
			const Nt = e => Object(P.a)(e.id),
				Ft = p.a.div("ItemContainer", Tt.a),
				Rt = p.a.div("ButtonContainer", Tt.a),
				Mt = Object(S.t)({
					currentProfileName: S.h,
					isCommentPermalink: S.v,
					isCommentsPage: S.w,
					isFrontpage: S.y,
					isProfilePostListing: S.I,
					isTopicPage: S.N,
					queryParams: S.T,
					pageLayer: e => e
				}),
				Bt = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: Ce.c,
					loadMore: Ce.e,
					modQueueListingItems: Ce.d,
					origin: ye.j,
					selectedItems: Ce.g,
					subredditId: (e, t) => t.subredditName ? Object(Ee.F)(e, t.subredditName) : null
				}),
				At = Object(d.b)(Bt, e => ({
					addSelectedItems: t => e(Object(u.a)({
						ids: t
					})),
					bulkSelectItems: t => e(Object(u.b)({
						ids: t
					})),
					bulkUnselectItems: t => e(Object(u.c)({
						ids: t
					})),
					fireAdPixelsOfType: (t, s) => e(Object(h.x)(t, s)),
					openPost: t => e(Object(h.I)(t))
				})),
				Dt = e => e.page ? parseInt(e.page, 10) : fe.b,
				Vt = e => Dt(e) + 1,
				Qt = e => Math.max(fe.b, Dt(e) - 1),
				Ut = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Dt(e) === fe.b ? t : 25 * Qt(e) + t
				},
				Wt = e => Dt(e) === fe.b ? fe.b : 25 * Qt(e) + 1;
			var Kt;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Kt || (Kt = {}));
			class Xt extends l.a.Component {
				constructor() {
					super(...arguments), this.isCheckboxSelected = e => i()(this.props.selectedItems, e), this.isAllSelected = e => {
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
									Object(P.a)(e.id) && t.push(e.id)
								});
								break;
							case Kt.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(I.a)(e.id) && t.push(e.id)
								});
								break;
							case Kt.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Kt.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(P.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== ge.f.Spoiler && e.type !== ge.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case Kt.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(P.a)(e.id)) {
										const s = e;
										s.media && s.media.type === xe.o.TEXT && t.push(s.id)
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
							const s = `modqueue-item-[layout: ${e.layout}]-[id: ${t.id}]`;
							if (Nt(t)) {
								const o = t,
									n = Object(_.b)({
										layout: e.layout,
										post: o
									});
								return l.a.createElement(Ft, {
									key: s
								}, l.a.createElement(n, {
									availableWidth: O.g,
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
									onClickPost: Object(v.b)(o.id, e),
									showBulkActionCheckbox: !0,
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(o.id), [o.id]),
									shouldShowGalleryTileOption: !0,
									isGalleryTileLayoutDefault: !0
								}))
							}
							const o = function(e, t) {
								const s = he[t];
								return void 0 === s ? (Object(j.a)(void 0, `Could not find component for layout ${t}.`), be) : s
							}(0, e.layout);
							return l.a.createElement(Ft, {
								key: s
							}, l.a.createElement(Lt.a, {
								postId: t.postId
							}, l.a.createElement(o, {
								commentId: t.id,
								hasReports: Object(b.c)(t),
								highlight: !1,
								isCheckboxSelected: this.isCheckboxSelected(t.id),
								showBulkActionCheckbox: !0,
								showModTools: !0,
								toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(t.id), [t.id]),
								trackClick: e.sendEventWithName
							})))
						})), l.a.createElement("div", null, l.a.createElement("div", null, t), l.a.createElement(Rt, null, l.a.createElement(k, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Qt(e),
								after: null
							}),
							nextButtonEnabled: o,
							nextTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Vt(e),
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
					return l.a.createElement("div", null, l.a.createElement(jt, {
						endNumItems: Ut(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Wt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? l.a.createElement(we, null) : e.isModQueueListingPending ? l.a.createElement(Re, null) : null)
				}
			}
			t.a = Mt(At(Xt))
		},
		"./src/reddit/components/PaginationButtons/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_1kLu6euoyZ3I2dqDVrxoZD",
				routerLink: "_3k7SslJt4xhPIXKtoe8DFf",
				mDisabled: "_1VgBJV1BqaXyZVPBXEv-KC"
			}
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/PostList/Placeholder.tsx"),
				r = s("./src/reddit/components/PostList/LoadMore.m.less"),
				i = s.n(r);
			t.a = o.a.wrapped(n.a, "Component", i.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/constant.js"),
				n = s.n(o),
				r = s("./node_modules/lodash/times.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				l = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/lib/intersectionObserver/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				g = s("./src/lib/classNames/index.ts"),
				x = s("./src/reddit/components/PostLeftRail/index.tsx"),
				f = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				k = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				v = s.n(k),
				O = s("./src/reddit/components/LargePost/placeholder.m.less"),
				S = s.n(O);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const P = Object(y.t)(),
				_ = Object(c.c)({
					isFakeSubreddit: y.x
				}),
				j = Object(d.b)(_),
				L = e => {
					const t = {
						interactive: !1,
						voteState: E.a.notVoted
					};
					return l.a.createElement("div", {
						className: S.a.emptyVerticalVotes
					}, l.a.createElement(f.d, I({
						key: "u"
					}, t)), l.a.createElement("div", {
						className: S.a.emptyScore,
						key: "s"
					}), l.a.createElement(f.c, I({
						key: "d"
					}, t)))
				},
				w = e => l.a.createElement("div", I({
					className: Object(g.a)(S.a.subredditIcon, Object(C.a)({
						isLoading: !0
					}))
				}, e));
			var T = P(j(({
				className: e,
				dispatch: t,
				pageLayer: s,
				...o
			}) => l.a.createElement("div", {
				className: Object(g.a)(v.a.baseLargeAndMediumPostStyles, e)
			}, l.a.createElement(x.b, {
				key: "a"
			}, l.a.createElement(L, o)), l.a.createElement("div", {
				className: S.a.content,
				key: "b"
			}, l.a.createElement("div", {
				className: S.a.topLine,
				key: "ba"
			}, o.isFakeSubreddit && l.a.createElement(w, {
				key: "baa"
			}), l.a.createElement("div", {
				key: "bab",
				className: Object(g.a)(S.a.topMetaOne, Object(C.b)(o))
			}), l.a.createElement("div", {
				key: "bac",
				className: Object(g.a)(S.a.topMetaTwo, Object(C.b)(o))
			})), l.a.createElement("div", {
				key: "bb",
				className: Object(g.a)(S.a.title, Object(C.b)(o))
			})), l.a.createElement("div", {
				key: "c",
				className: Object(g.a)(S.a.media, Object(C.a)(o))
			}), l.a.createElement("div", {
				className: S.a.content,
				key: "d"
			}, l.a.createElement("div", {
				className: S.a.flatlist
			}, l.a.createElement("div", {
				className: Object(g.a)(S.a.flatlistItemOne, Object(C.b)(o))
			}), l.a.createElement("div", {
				className: Object(g.a)(S.a.flatListItemTwo, Object(C.b)(o))
			}))))));
			const N = {
				[u.g.Large]: [T, 2],
				[u.g.Classic]: [h.b, 10],
				[u.g.Compact]: [b.a, 30]
			};

			function F(e) {
				return N[e]
			}
			const R = .1,
				M = Object(c.c)({
					loadingPostComponentForLayout: () => F
				}),
				B = Object(d.b)(M);
			class A extends l.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && p.b(this.wrapperRef), e && p.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= R;
						m.a.write(() => {
							this.mounted && this.setState(e => e.visible !== t ? {
								visible: t
							} : null)
						})
					}
				}
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0, this.mounted = !0
				}
				componentWillUnmount() {
					this.mounted = !1, this.wrapperRef && p.b(this.wrapperRef)
				}
				render() {
					const {
						className: e,
						countOverride: t,
						isLoading: s,
						layout: o,
						loadingPostComponentForLayout: r
					} = this.props, {
						visible: a
					} = this.state, [d, c] = r(o), m = t || c, p = n()(l.a.createElement(d, {
						isLoading: s && a
					})), u = i()(m, p);
					return l.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, l.a.Children.toArray(u))
				}
			}
			t.a = B(A)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/helpers/describeApiError/index.ts"),
				l = s("./src/reddit/components/PostList/index.m.less"),
				d = s.n(l);
			t.a = e => {
				const {
					onTryAgain: t,
					apiError: s
				} = e;
				let n = o.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return s && (n = Object(a.a)({
					apiError: s,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: d.a.somethingWrong
				}, r.a.createElement("div", {
					className: d.a.somethingWrongText
				}, n), t && r.a.createElement(i.i, {
					onClick: t
				}, o.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			}
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, s) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Z
			})), s.d(t, "a", (function() {
				return z
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				l = s("./node_modules/lodash/throttle.js"),
				d = s.n(l),
				c = s("./node_modules/react/index.js"),
				m = s.n(c),
				p = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/ads/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/fastdom/index.ts"),
				x = s("./src/lib/lessComponent.tsx"),
				f = s("./src/lib/opener/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				C = s("./src/reddit/components/PostList/LoadMore.tsx"),
				E = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				k = s("./src/reddit/components/Scroller/Simple.tsx"),
				v = s("./src/reddit/constants/adEvents.ts"),
				O = s("./src/reddit/constants/componentSizes.ts"),
				S = s("./src/reddit/constants/postLayout.ts"),
				I = s("./src/reddit/controls/InternalLink/index.tsx"),
				P = s("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = s("./src/reddit/helpers/getClickInfo.ts"),
				j = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				L = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/helpers/brandSafety/index.ts"),
				N = s("./src/lib/LRUCache/index.ts"),
				F = s("./src/telemetry/index.ts"),
				R = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				B = s.n(M);
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = 500, V = new N.a(D), Q = new N.a(D), U = new N.a(D), W = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, K = x.a.div("SeeMore", B.a), X = x.a.wrapped(L.a, "ArrowRight", B.a), H = (e, t, s, o, n, r, i, a) => {
				const l = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}-${r}`;
				let d = V.get(l);
				return void 0 === d && (d = () => {
					s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t, a)
				}, V.set(l, d)), d
			}, q = (e, t, s, o, n) => {
				const r = `left-${e}-${t}`;
				let i = Q.get(r);
				return void 0 === i && (i = r => {
					s.trackOnPostExitedViewport(e, t, r, o, n)
				}, Q.set(r, i)), i
			}, Z = (e, t) => {
				const s = `click-${e}`;
				let o = U.get(s);
				return void 0 === o && (o = (e, s, o, n) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, v.a.Click);
						const {
							source: e
						} = Object(u.t)(s, n);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							o && (t = Object(P.a)(s.id, o, t).url), Object(f.d)(t, f.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(_.a)(e)
					})
				}, U.set(s, o)), o
			}, J = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class z extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new N.a(D), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = d()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = r()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, o = e(), n = [];
						o.forEach(e => n.push(e.id));
						const r = n.map(e => t[e]).filter(Boolean),
							i = r.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(T.a)(r, i))
					}, b.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && F.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = F.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = F.c.end(this.timerId);
						setTimeout(() => Object(F.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && F.c.cancel(this.timerId), e.postIds.length && (this.timerId = F.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && F.c.has(this.timerId)) {
						const e = F.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(F.b)(b.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const o = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					o && o !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(o)
				}
				componentWillUnmount() {
					this.timerId && F.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return F.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = F.c.end(e);
					setTimeout(() => {
						s(t(o, R.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						triggerNewPostPill: s,
						...o
					} = this.props, {
						postsById: n,
						triggerNewPostPill: r,
						...i
					} = e, a = Object.keys(o), l = Object.keys(i);
					if (l.length !== a.length) return !0;
					if (l.some(e => o[e] !== i[e])) return !0;
					if (t === n) return !1;
					if (s !== r) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((o, r) => {
							const i = 0 === r;
							return s({
								isFirstPost: i,
								layout: e,
								post: t[o]
							}) !== s({
								isFirstPost: i,
								layout: e,
								post: n[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: n,
						hostPostId: r,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: l,
						isProfilePostListing: d,
						isTopicPage: c,
						listingKey: p,
						listingName: u,
						pageLayer: h,
						pageReferrer: g,
						postClickEventFactory: x,
						redditStyle: f,
						shouldHideFlair: C,
						isActionBarAnimationEnabled: E,
						triggerNewPostPill: k,
						postIds: v
					} = this.props, O = 0 === t, I = `post-${o}-${e}-${t}-${s?"last-index":""}-${u}-${p}-${g}`;
					let P;
					if (void 0 === (P = this.scrollChildCache.get(I))) {
						const {
							inSubredditOrProfile: _,
							postsById: L
						} = this.props, T = L[e], N = T.crosspostRootId && L[T.crosspostRootId] ? L[T.crosspostRootId] : T;
						T.crosspostRootId && !L[T.crosspostRootId] && y.c.withScope(e => {
							e.setExtra("errorType", b.q.API), e.setExtra("description", `Post ${T.id} is crosspost of ${T.crosspostRootId}, but ` + `${T.crosspostRootId} details are missing in the state`), y.c.captureMessage("Crosspost parent details are missing")
						});
						const F = this.props.postComponentForLayout({
								isCrosspost: !!T.crosspostRootId,
								isFirstPost: O,
								layout: o,
								post: N
							}),
							R = `post-list-item-[layout: ${o}]-[postId: ${e}]`,
							M = H(e, o, s, p, u, g, this.props, t),
							B = q(e, o, this.props, t, h),
							A = Z(e, this.props),
							D = N.media && N.media.type === w.o.EMBED ? N.media.provider : null;
						P = {
							estHeight: Object(j.c)(T, o),
							id: e,
							isFocusable: !(!N.media || !(o === S.g.Large || o === S.g.Classic && Object(w.G)(N.media))) && (w.d.has(N.media.type) && (!D || !w.s.has(D)) && !N.isSpoiler && !N.isNSFW),
							trackOnEnteredViewport: M,
							trackOnExitedViewport: B,
							render: ({
								className: o,
								height: b,
								width: g,
								remeasure: y,
								setScrollerChildRef: S,
								shouldLoadInitially: I
							}) => m.a.createElement(F, {
								className: o,
								currentProfileName: n,
								key: R,
								availableWidth: g,
								eventFactory: x,
								first: O,
								forceLoadMedia: I,
								hostPostId: r,
								inSubredditOrProfile: _,
								isActionBarAnimationEnabled: E,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: l,
								isProfilePostListing: d,
								isTopicPage: c,
								listingKey: p,
								listingName: u,
								pageLayer: h,
								last: s,
								onClickPost: A,
								onSizeChanged: y,
								postId: e,
								postIds: v,
								redditStyle: f,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: S,
								shouldHideFlair: C,
								onceInViewport: () => {
									null == k || k(t)
								}
							})
						}, this.scrollChildCache.set(I, P)
					}
					return P
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return m.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: n,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const i = r;
					return m.a.createElement("div", {
						className: B.a.placeholder
					}, m.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && m.a.createElement(E.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: n,
						onLoadMore: r
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: B.a.placeholder
					}, m.a.createElement(C.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: W[o]
					}), !!e && m.a.createElement(E.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isTruncated: r,
						layout: i,
						location: a,
						loadMore: l,
						postIds: d,
						onLoadMore: u
					} = this.props;
					let g = d.map((e, t, s) => {
						const o = t === d.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					n && (g = J(g, n));
					const x = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						f = a ? Object(o.e)(a) : null,
						y = f || r;
					return m.a.createElement(c.Fragment, null, m.a.createElement(k.b, {
						innerRef: this.updateScrollerRef,
						className: y ? B.a.truncatedPostList : Object(h.a)(B.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: u,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: O.f
					}, g), f && m.a.createElement(K, {
						className: B.a.seeMoreButton
					}, m.a.createElement(I.a, {
						className: B.a.seeMorePostsText,
						to: Object(p.a)(f, {
							type: b.Sb.Posts
						})
					}, A._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(X, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			z.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: m.a.Fragment
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				C = s.n(y);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => Object(l.a)(C.a.iconStyles, e.className, {
					[C.a.mDisabled]: e.disabled,
					[C.a.mRedditStyle]: e.redditStyle
				}),
				v = ({
					className: e,
					disabled: t,
					redditStyle: s,
					...o
				}) => r.a.createElement(h.a, E({
					className: k({
						className: e,
						disabled: t,
						redditStyle: s
					})
				}, o)),
				O = ({
					className: e,
					disabled: t,
					redditStyle: s,
					...o
				}) => r.a.createElement(u.a, E({
					className: k({
						className: e,
						disabled: t,
						redditStyle: s
					})
				}, o)),
				S = ({
					className: e,
					disabled: t,
					redditStyle: s,
					...o
				}) => r.a.createElement(b.a, E({
					className: k({
						className: e,
						disabled: t,
						redditStyle: s
					})
				}, o)),
				I = ({
					isActive: e,
					...t
				}) => r.a.createElement("button", E({
					className: Object(l.a)(C.a.layoutButton, {
						[C.a.mIsActive]: e
					})
				}, t)),
				P = Object(x.t)(),
				_ = Object(a.c)({
					postLayout: x.O,
					redditStyle: x.A
				}),
				j = Object(i.b)(_, e => ({
					onListingLayoutChange: (t, s) => e(Object(c.x)(t, s)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = P(j(Object(g.c)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || p.e[e.postLayout];
				return r.a.createElement("div", {
					className: Object(l.a)(C.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, r.a.createElement("div", {
					className: C.a.title
				}, o.fbt._("View", null, {
					hk: "18a931"
				})), r.a.createElement("div", {
					className: C.a.iconContainer
				}, (() => [{
					layout: p.d.Card,
					Icon: S,
					text: o.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: p.d.Classic,
					Icon: O,
					text: o.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: p.d.Compact,
					Icon: v,
					text: o.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(o => {
					const i = () => (o => {
							e.onChange ? e.onChange(o) : (e.onListingLayoutChange(o, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: o,
								screen: Object(f.screen)(e),
								subreddit: Object(f.subreddit)(e)
							})))
						})(o.layout),
						a = () => e.toggleTooltip(l),
						l = "layoutSwitch--" + o.layout,
						c = o.layout === n;
					return r.a.createElement(I, {
						"aria-label": o.text,
						"aria-pressed": c,
						id: l,
						isActive: c,
						key: o.layout,
						onClick: i,
						onMouseEnter: a,
						onMouseLeave: a,
						onTouchStart: i
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Search/index.tsx"),
				a = s("./src/reddit/controls/SearchBar/index.m.less"),
				l = s.n(a);
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
			}, n.a.createElement(i.a, null)))
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");

			function r({
				apiError: e,
				isLoggedOut: t
			}) {
				switch (e.type) {
					case n.E.AUTHORIZATION_ERROR:
						return t ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case n.E.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case n.E.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case n.E.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case n.E.LIKELY_UBLOCK_ERROR:
						return o.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/icons/fonts/List/index.m.less": function(e, t, s) {
			e.exports = {
				ListIcon: "t3UrRpUFSigA4IRW8iMLv",
				listIcon: "t3UrRpUFSigA4IRW8iMLv"
			}
		},
		"./src/reddit/icons/fonts/List/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/List/index.m.less"),
				a = s.n(i);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("list",e.isFilled)} ${e.className}`
			}), "ListIcon", a.a);
			t.a = l
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.02a45b0119bad71de699.js.map