// https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.bc70ad906af10db5c711.js
// Retrieved at 7/15/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages~reddit-components-ModHub-Content-ModQueue"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, o) {
				var n = s ? s.call(o, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var r = Object.keys(e),
					a = Object.keys(t);
				if (r.length !== a.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), l = 0; l < r.length; l++) {
					var d = r[l];
					if (!i(d)) return !1;
					var c = e[d],
						m = t[d];
					if (!1 === (n = s ? s.call(o, c, m, d) : void 0) || void 0 === n && c !== m) return !1
				}
				return !0
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
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
				y = Object(a.c)({
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
				S = e => n.a.createElement("div", {
					className: g.a.flatList
				}, n.a.createElement("div", {
					className: Object(i.a)(g.a.comments, Object(m.b)(e))
				}), n.a.createElement("div", {
					className: Object(i.a)(g.a.ellipsis, Object(m.b)(e))
				}));
			t.a = f(C(e => n.a.createElement("div", {
				className: Object(i.a)(e.className, h.a.compactPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement("div", {
				className: g.a.wrapper
			}, n.a.createElement(E, x({
				key: "c"
			}, e)), n.a.createElement("div", {
				key: "a",
				className: g.a.expandoContainer
			}, n.a.createElement("div", {
				className: Object(i.a)(g.a.expando, Object(m.a)(e))
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
				className: Object(i.a)(g.a.title, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "eb",
				className: Object(i.a)(g.a.meta, Object(m.b)(e))
			})), n.a.createElement(S, x({
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
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/selectors/profile.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/lib/addQueryParams/index.ts"),
				k = s("./src/lib/filterQueryParams/index.ts"),
				S = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				v = s("./src/reddit/selectors/meta.ts"),
				I = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				_ = s.n(I);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(o || (o = {}));
			const P = p.a.wrapped(S.b, "Row", _.a),
				j = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					origin: v.j
				});
			var L = Object(i.b)(j)(e => a.a.createElement("div", null, a.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, a.a.createElement(P, {
					displayText: n.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), a.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Posts
					})
				}, a.a.createElement(P, {
					displayText: n.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === o.Posts
				})), a.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Comments
					})
				}, a.a.createElement(P, {
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
					moderatingSubreddits: N.m,
					origin: v.j
				}),
				A = Object(i.b)(B),
				D = p.a.div("DropdownContainer", R.a),
				V = p.a.div("SearchBarContainer", R.a),
				Q = p.a.wrapped(S.b, "Row", R.a),
				U = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class W extends a.a.Component {
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
					return a.a.createElement(D, {
						onClickCapture: this.stopPropagation
					}, a.a.createElement(V, null, a.a.createElement(T.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: n.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), a.a.createElement(O.a, {
						to: Object(k.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, a.a.createElement(Q, {
						displayText: n.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = U(t);
						return a.a.createElement(O.a, {
							key: t.id,
							to: Object(E.a)(Object(k.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), s)
						}, a.a.createElement(Q, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var H = M(A(W)),
				K = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				X = s.n(K);
			const q = Object(m.a)(h.a),
				G = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				J = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				z = p.a.wrapped(x.a, "Inline", X.a),
				Z = p.a.div("Filter", X.a),
				Y = p.a.wrapped(b.a, "LayoutSwitch", X.a),
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
					isPostTypeFilterDropdownOpen: Object(C.b)(J),
					isSubredditFilterDropdownOpen: Object(C.b)(G),
					profile: (e, {
						profileName: t
					}) => t ? Object(f.j)(e, {
						profileName: t
					}) : null,
					subreddit: (e, {
						subredditName: t
					}) => t ? Object(y.y)(e, {
						subredditName: t
					}) : null
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
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(G), this.props.sendEventWithName("subreddit")
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
					return a.a.createElement(z, null, !e.hideSubredditFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(Z, {
						id: G,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, a.a.createElement(g.a, {
						name: "caret_down"
					})), a.a.createElement(q, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: G
					}, a.a.createElement(H, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), e.showTypeFilter && a.a.createElement("div", {
						className: Object(d.a)({
							[X.a.filterMargin]: !e.hideSubredditFilter
						})
					}, a.a.createElement(Z, {
						id: J,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, a.a.createElement(g.a, {
						name: "caret_down"
					})), a.a.createElement(q, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: J
					}, a.a.createElement(L, {
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
				DropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				dropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				DropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				dropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
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
				S = s("./src/reddit/components/PostList/index.tsx"),
				O = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/helpers/isComment.ts"),
				_ = s("./src/reddit/helpers/isPost.ts"),
				P = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
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
				H = s.n(W);
			const K = p.a.div("LeftRail", H.a),
				X = p.a.wrapped(V.a, "BulkActionCheckbox", H.a),
				q = p.a.wrapped(N.a, "UnthreadedCommentContainer", H.a),
				G = p.a.div("CommentColumn", H.a),
				J = p.a.div("VoteColumn", H.a),
				z = p.a.wrapped(w.a, "ModToolsFlatlist", H.a),
				Z = p.a.wrapped(D.a, "Votes", H.a),
				Y = p.a.div("CommentContentWrapper", H.a),
				$ = p.a.div("ParentPostTitle", H.a),
				ee = p.a.div("CommentParentWrapper", H.a),
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
						onVoteClick: a,
						showModTools: i,
						subreddit: d,
						showBulkActionCheckbox: c,
						toggleCheckbox: m
					} = e;
					return l.a.createElement(q, {
						className: Object(x.a)(t, {
							[H.a.isBanned]: !!s.bannedBy,
							[H.a.isReported]: Object(U.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: s.permalink
					}, l.a.createElement(K, {
						className: Object(x.a)({
							[H.a.hasBorder]: !!s.bannedBy || Object(U.a)(s)
						})
					}, c && l.a.createElement(X, {
						isCheckboxSelected: n,
						toggleCheckbox: m
					})), l.a.createElement(J, null, l.a.createElement(Z, {
						compact: !1,
						model: s,
						onVoteClick: a,
						scoreClassName: H.a.score
					})), l.a.createElement(G, null, l.a.createElement(ee, null, s.postTitle && l.a.createElement($, null, s.postTitle), s.postAuthor && l.a.createElement(M.a, {
						comment: s
					})), l.a.createElement(Y, null, l.a.createElement(F.a, {
						comment: s
					}, l.a.createElement(A.a, {
						content: Object(Q.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: te(e)
					}), l.a.createElement(R.a, {
						comment: s,
						flair: o,
						subredditName: d ? d.displayText : null
					}), Object(b.c)(s) && l.a.createElement(B.a, {
						onIgnoreReports: r,
						reportable: s
					}), i && !s.isDeleted && l.a.createElement(z, {
						comment: s
					})))))
				}, "Component", H.a)),
				oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ne = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				re = s.n(ne);
			const ae = p.a.div("VoteSpacer", re.a),
				ie = p.a.div("ContentWrapper", re.a),
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
					}), l.a.createElement(ae, null, l.a.createElement(ie, null, l.a.createElement(de, null, s.postAuthor && l.a.createElement(M.a, {
						comment: s,
						subredditOrProfile: c
					}), s.postTitle && l.a.createElement(T.a, null, s.postTitle)), l.a.createElement(F.a, {
						comment: s
					}, l.a.createElement(ce, null, l.a.createElement(A.a, {
						content: Object(Q.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: me(e)
					})), n && l.a.createElement(B.a, {
						onIgnoreReports: a,
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
				Se = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				Oe = s.n(Se);
			const {
				fbt: ve
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = `${ke.a.assetPath}/img/snoomoji/cat_blep.png`, _e = p.a.div("Container", Oe.a), Pe = p.a.div("Image", Oe.a), je = p.a.div("Title", Oe.a), Le = p.a.div("Text", Oe.a);
			var we = () => l.a.createElement(_e, null, l.a.createElement(Pe, {
					style: {
						backgroundImage: `url(${Ie})`
					}
				}), l.a.createElement(je, null, ve._("The queue is clean!", null, {
					hk: "3d14fC"
				})), l.a.createElement(Le, null, ve._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Te = s("./src/reddit/components/PostList/Placeholder.tsx");
			const Ne = Object(v.t)(),
				Fe = Object(c.c)({
					layout: v.O
				});
			var Re = Ne(Object(d.b)(Fe)(e => l.a.createElement(Te.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Me = s("./node_modules/lodash/flatten.js"),
				Be = s.n(Me),
				Ae = s("./src/reddit/actions/tooltip.ts"),
				De = s("./src/reddit/icons/fonts/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				Qe = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				We = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				He = s("./src/higherOrderComponents/asTooltip.tsx"),
				Ke = s("./src/reddit/actions/modal.ts"),
				Xe = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				qe = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Ge = s("./src/reddit/controls/Dropdown/index.tsx"),
				Je = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ze = s("./src/reddit/helpers/flair.ts"),
				Ze = s("./src/reddit/selectors/activeModalId.ts"),
				Ye = s("./src/reddit/selectors/moderatorPermissions.ts"),
				$e = s("./src/reddit/selectors/postFlair.ts"),
				et = s("./src/reddit/selectors/posts.ts"),
				tt = s("./src/reddit/selectors/tooltip.ts"),
				st = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ot = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				nt = s.n(ot);
			const rt = p.a.wrapped(e => l.a.createElement("button", {
					className: e.className,
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? g.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, l.a.createElement(y.a, null, e.buttonText)), "StatusItem", nt.a),
				at = p.a.div("StatusContainer", nt.a),
				it = Object(c.c)({
					selectedItems: Ce.g
				}),
				lt = Object(d.b)(it, e => ({
					onIgnoreReports: () => e(Object(u.f)(fe.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(fe.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(fe.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(fe.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(fe.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(fe.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(fe.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(fe.a.Unspoiler))
				})),
				dt = e => e.some(e => Object(I.a)(e)),
				ct = p.a.wrapped(lt(Object(st.c)(e => l.a.createElement("div", {
					className: e.className,
					style: e.style
				}, l.a.createElement(at, null, l.a.createElement(rt, {
					onClick: e.onIgnoreReports,
					buttonText: g.fbt._("Ignore Reports", null, {
						hk: "1hZ3hN"
					})
				}), l.a.createElement(rt, {
					onClick: e.onUnignoreReports,
					buttonText: g.fbt._("Unignore Reports", null, {
						hk: "3y089p"
					})
				}), l.a.createElement(rt, {
					isDisabled: dt(e.selectedItems),
					onClick: e.onLock,
					buttonText: g.fbt._("Lock", null, {
						hk: "4bc0vl"
					})
				}), l.a.createElement(rt, {
					isDisabled: dt(e.selectedItems),
					onClick: e.onUnlock,
					buttonText: g.fbt._("Unlock", null, {
						hk: "Pe2ML"
					})
				}), l.a.createElement(rt, {
					isDisabled: dt(e.selectedItems),
					onClick: e.onSpoiler,
					buttonText: g.fbt._("Mark as Spoiler", null, {
						hk: "4pIu4V"
					})
				}), l.a.createElement(rt, {
					isDisabled: dt(e.selectedItems),
					onClick: e.onUnspoiler,
					buttonText: g.fbt._("Unmark as Spoiler", null, {
						hk: "1ImDYd"
					})
				}), l.a.createElement(rt, {
					isDisabled: dt(e.selectedItems),
					onClick: e.onMarkNSFW,
					buttonText: g.fbt._("Mark as NSFW", null, {
						hk: "4yS4Hz"
					})
				}), l.a.createElement(rt, {
					isDisabled: dt(e.selectedItems),
					onClick: e.onUnmarkNSFW,
					buttonText: g.fbt._("Unmark as NSFW", null, {
						hk: "ZzA74"
					})
				}))))), "StatusList", nt.a);
			var mt = Object(He.a)(ct);
			const pt = Object(c.c)({
				isDropdownOpen: (e, {
					tooltipId: t
				}) => Object(tt.b)(t)(e)
			});
			var ut = Object(d.b)(pt)(Object(st.c)(e => {
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
				ht = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				bt = s.n(ht);
			const gt = "BulkAction--BulkItemFilter",
				xt = "BulkActions--PostFlair--Modal",
				ft = Object(He.a)(Ge.a),
				yt = p.a.div("CheckboxContainer", bt.a),
				Ct = p.a.wrapped(V.a, "Checkbox", bt.a),
				Et = p.a.wrapped(e => l.a.createElement(Je.b, {
					className: e.className,
					displayText: e.displayText,
					onClick: e.onClick
				}), "DropdownRow", bt.a),
				kt = p.a.span("Bullet", bt.a),
				St = p.a.div("Text", bt.a),
				Ot = Object(c.c)({
					activeModalId: Ze.a,
					dropdownIsOpen: Object(tt.b)(gt),
					flairData: $e.d,
					isApiPending: Ce.a,
					moderatorPermissions: Ye.l,
					posts: et.I,
					selectedItems: Ce.g
				}),
				vt = Object(d.b)(Ot, e => ({
					onApprove: () => e(Object(u.f)(fe.a.Approve)),
					onFlair: (t, s) => e(Object(u.f)(fe.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(Ae.h)({
						tooltipId: gt
					})),
					onOpenModToolsDropdown: () => e(Object(Ae.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(u.f)(fe.a.Remove)),
					onSpam: () => e(Object(u.f)(fe.a.Spam)),
					onToggleFlairModal: () => e(Object(Ke.i)(xt))
				})),
				It = (e, t) => {
					const s = Be()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const o = [];
					return s.forEach(e => {
						if (e.type === ge.f.Text || e.type === ge.f.Richtext) {
							const t = Object(ze.g)(e);
							a()(o, t) || o.push(t)
						}
					}), o.length > 1 ? [{
						type: ge.f.Text,
						text: g.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var _t = vt(p.a.wrapped(e => {
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
						onRemove: h,
						onSpam: b,
						onToggleFlairModal: x,
						posts: f,
						selectedItems: y,
						startNumItems: C,
						subredditId: E,
						toggleSelectAll: k,
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
					}], v = d && d.flair, I = E && n && n.displaySettings.isEnabled && v && !dt(y);
					return l.a.createElement("div", {
						className: s
					}, l.a.createElement(yt, {
						id: gt
					}, l.a.createElement(Ct, {
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: k
					}), l.a.createElement(De.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), l.a.createElement(ft, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: gt
					}, O.map(e => l.a.createElement(Et, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => S(e.filterType)
					})))), r && l.a.createElement(i.Fragment, null, l.a.createElement(qe.c, {
						disabled: a,
						text: g.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, l.a.createElement(Ve.a, null)), l.a.createElement(qe.c, {
						disabled: a,
						text: g.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: h
					}, l.a.createElement(Qe.a, null)), l.a.createElement(qe.c, {
						disabled: a,
						text: g.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: b
					}, l.a.createElement(Ue.a, null)), l.a.createElement(qe.c, {
						disabled: a,
						onClick: e.onOpenModToolsDropdown
					}, l.a.createElement(ut, {
						tooltipId: "BulkActions--ModTools"
					}), l.a.createElement(De.a, {
						name: "list_bulleted"
					})), l.a.createElement("div", null, I && l.a.createElement(qe.c, {
						disabled: a,
						onClick: x
					}, l.a.createElement(We.a, null)))), r && E && t === xt && l.a.createElement(Xe.a, {
						flairs: It(y, f),
						modalId: xt,
						onFlairChanged: ({
							previewFlair: e,
							selectedTemplateId: t
						}) => {
							u(e, t)
						},
						subredditId: E
					}), m > 0 && l.a.createElement(St, null, g.fbt._("Items {startNumItems}- {endNumItems}", [g.fbt._param("startNumItems", `${C}`), g.fbt._param("endNumItems", `${o}`)], {
						hk: "2B34NC"
					}), l.a.createElement(kt, null, "•"), g.fbt._("{numSelected} selected", [g.fbt._param("numSelected", `${c}`)], {
						hk: "4uf9Ow"
					})))
				}, "ModToolsBulkOperations", bt.a)),
				Pt = s("./src/reddit/contexts/Post/index.tsx"),
				jt = s("./src/reddit/components/ModQueueList/index.m.less"),
				Lt = s.n(jt);
			const wt = e => Object(_.a)(e.id),
				Tt = p.a.div("ItemContainer", Lt.a),
				Nt = p.a.div("ButtonContainer", Lt.a),
				Ft = Object(v.t)({
					currentProfileName: v.h,
					isCommentPermalink: v.v,
					isCommentsPage: v.w,
					isFrontpage: v.y,
					isProfilePostListing: v.I,
					isTopicPage: v.N,
					queryParams: v.T,
					pageLayer: e => e
				}),
				Rt = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: Ce.c,
					loadMore: Ce.e,
					modQueueListingItems: Ce.d,
					origin: ye.j,
					selectedItems: Ce.g,
					subredditId: (e, t) => t.subredditName ? Object(Ee.D)(e, t.subredditName) : null
				}),
				Mt = Object(d.b)(Rt, e => ({
					addSelectedItems: t => e(Object(u.a)({
						ids: t
					})),
					bulkSelectItems: t => e(Object(u.b)({
						ids: t
					})),
					bulkUnselectItems: t => e(Object(u.c)({
						ids: t
					})),
					fireAdPixelsOfType: (t, s) => e(Object(h.z)(t, s)),
					openPost: t => e(Object(h.M)(t))
				})),
				Bt = e => e.page ? parseInt(e.page, 10) : fe.b,
				At = e => Bt(e) + 1,
				Dt = e => Math.max(fe.b, Bt(e) - 1),
				Vt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Bt(e) === fe.b ? t : 25 * Dt(e) + t
				},
				Qt = e => Bt(e) === fe.b ? fe.b : 25 * Dt(e) + 1;
			var Ut;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Ut || (Ut = {}));
			class Wt extends l.a.Component {
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
							case Ut.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(_.a)(e.id) && t.push(e.id)
								});
								break;
							case Ut.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(I.a)(e.id) && t.push(e.id)
								});
								break;
							case Ut.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Ut.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(_.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== ge.f.Spoiler && e.type !== ge.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case Ut.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(_.a)(e.id)) {
										const s = e;
										s.media && s.media.type === xe.o.TEXT && t.push(s.id)
									}
								});
								break;
							case Ut.spamFiltered:
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
							if (wt(t)) {
								const o = t,
									n = Object(P.b)({
										layout: e.layout,
										post: o
									});
								return l.a.createElement(Tt, {
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
									onClickPost: Object(S.b)(o.id, e),
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
							return l.a.createElement(Tt, {
								key: s
							}, l.a.createElement(Pt.a, {
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
						})), l.a.createElement("div", null, l.a.createElement("div", null, t), l.a.createElement(Nt, null, l.a.createElement(k, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Dt(e),
								after: null
							}),
							nextButtonEnabled: o,
							nextTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: At(e),
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
					return l.a.createElement("div", null, l.a.createElement(_t, {
						endNumItems: Vt(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Qt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? l.a.createElement(we, null) : e.isModQueueListingPending ? l.a.createElement(Re, null) : null)
				}
			}
			t.a = Ft(Mt(Wt))
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
				a = s.n(r);
			t.a = o.a.wrapped(n.a, "Component", a.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/constant.js"),
				n = s.n(o),
				r = s("./node_modules/lodash/times.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				l = s.n(i),
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
				S = s.n(k),
				O = s("./src/reddit/components/LargePost/placeholder.m.less"),
				v = s.n(O);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(y.t)(),
				P = Object(c.c)({
					isFakeSubreddit: y.x
				}),
				j = Object(d.b)(P),
				L = e => {
					const t = {
						interactive: !1,
						voteState: E.a.notVoted
					};
					return l.a.createElement("div", {
						className: v.a.emptyVerticalVotes
					}, l.a.createElement(f.d, I({
						key: "u"
					}, t)), l.a.createElement("div", {
						className: v.a.emptyScore,
						key: "s"
					}), l.a.createElement(f.c, I({
						key: "d"
					}, t)))
				},
				w = e => l.a.createElement("div", I({
					className: Object(g.a)(v.a.subredditIcon, Object(C.a)({
						isLoading: !0
					}))
				}, e));
			var T = _(j(({
				className: e,
				dispatch: t,
				pageLayer: s,
				...o
			}) => l.a.createElement("div", {
				className: Object(g.a)(S.a.baseLargeAndMediumPostStyles, e)
			}, l.a.createElement(x.b, {
				key: "a"
			}, l.a.createElement(L, o)), l.a.createElement("div", {
				className: v.a.content,
				key: "b"
			}, l.a.createElement("div", {
				className: v.a.topLine,
				key: "ba"
			}, o.isFakeSubreddit && l.a.createElement(w, {
				key: "baa"
			}), l.a.createElement("div", {
				key: "bab",
				className: Object(g.a)(v.a.topMetaOne, Object(C.b)(o))
			}), l.a.createElement("div", {
				key: "bac",
				className: Object(g.a)(v.a.topMetaTwo, Object(C.b)(o))
			})), l.a.createElement("div", {
				key: "bb",
				className: Object(g.a)(v.a.title, Object(C.b)(o))
			})), l.a.createElement("div", {
				key: "c",
				className: Object(g.a)(v.a.media, Object(C.a)(o))
			}), l.a.createElement("div", {
				className: v.a.content,
				key: "d"
			}, l.a.createElement("div", {
				className: v.a.flatlist
			}, l.a.createElement("div", {
				className: Object(g.a)(v.a.flatlistItemOne, Object(C.b)(o))
			}), l.a.createElement("div", {
				className: Object(g.a)(v.a.flatListItemTwo, Object(C.b)(o))
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
						visible: i
					} = this.state, [d, c] = r(o), m = t || c, p = n()(l.a.createElement(d, {
						isLoading: s && i
					})), u = a()(m, p);
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
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/helpers/describeApiError/index.ts"),
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
				return s && (n = Object(i.a)({
					apiError: s,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: d.a.somethingWrong
				}, r.a.createElement("div", {
					className: d.a.somethingWrongText
				}, n), t && r.a.createElement(a.i, {
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
				return $
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
				l = s("./node_modules/lodash/throttle.js"),
				d = s.n(l),
				c = s("./node_modules/react/index.js"),
				m = s.n(c),
				p = s("./node_modules/shallowequal/index.js"),
				u = s.n(p),
				h = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/ads/index.ts"),
				g = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/fastdom/index.ts"),
				y = s("./src/lib/lessComponent.tsx"),
				C = s("./src/lib/opener/index.ts"),
				E = s("./src/lib/sentry/index.ts"),
				k = s("./src/reddit/components/PostList/LoadMore.tsx"),
				S = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				v = s("./src/reddit/constants/adEvents.ts"),
				I = s("./src/reddit/constants/componentSizes.ts"),
				_ = s("./src/reddit/constants/postLayout.ts"),
				P = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/controls/OutboundLink/index.tsx"),
				L = s("./src/reddit/helpers/getClickInfo.ts"),
				w = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/helpers/brandSafety/index.ts"),
				R = s("./src/reddit/helpers/trackers/ads.ts"),
				M = s("./src/lib/LRUCache/index.ts"),
				B = s("./src/telemetry/index.ts"),
				A = s("./src/telemetry/models/Timer.ts"),
				D = s("./src/reddit/components/PostList/index.m.less"),
				V = s.n(D);
			const {
				fbt: Q
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = 500, W = new M.a(U), H = new M.a(U), K = new M.a(U), X = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, q = y.a.div("SeeMore", V.a), G = y.a.wrapped(T.a, "ArrowRight", V.a), J = (e, t, s, o, n, r, a, i, l) => {
				const d = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}-${r}`;
				let c = W.get(d);
				return void 0 === c && (c = () => {
					s && a.onBottomViewed(o, n), a.trackOnPostEnteredViewport(e, t, i, l)
				}, W.set(d, c)), c
			}, z = (e, t, s, o, n) => {
				const r = `left-${e}-${t}`;
				let a = H.get(r);
				return void 0 === a && (a = r => {
					s.trackOnPostExitedViewport(e, t, r, o, n)
				}, H.set(r, a)), a
			}, Z = (e, t, s = !1) => {
				const o = `click-${e}`;
				let n = K.get(o);
				return void 0 === n && (n = (e, o, n, r, a) => {
					if (o.isSponsored) {
						t.fireAdPixelsOfType(o, v.a.Click);
						const {
							source: e
						} = Object(b.t)(o, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object(j.a)(o.id, n, t).url), Object(R.a)(o, a), Object(C.d)(t, C.c.BLANK)
						}
					} else t.openPost({
						postOrComment: o,
						clickInfo: Object(L.a)(e),
						isFrontpage: s
					})
				}, K.set(o, n)), n
			}, Y = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class $ extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new M.a(U), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
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
							a = r.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(F.a)(r, a))
					}, x.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && B.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = B.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = B.c.end(this.timerId);
						setTimeout(() => Object(B.b)(x.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && B.c.cancel(this.timerId), e.postIds.length && (this.timerId = B.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (f.a.read(() => this.checkAndSendScreenview()), this.timerId && B.c.has(this.timerId)) {
						const e = B.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(B.b)(x.l.Redesign, {
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
					this.timerId && B.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return B.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = B.c.end(e);
					setTimeout(() => {
						s(t(o, A.TimerType.InApp))
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
						...a
					} = e, i = Object.keys(o), l = Object.keys(a);
					if (l.length !== i.length) return !0;
					if (l.some(e => {
							let t = !1;
							return t = "function" == typeof o[e] || "object" == typeof o[e] ? !u()(o[e], a[e]) : o[e] !== a[e]
						})) return !0;
					if (t === n) return !1;
					if (s !== r) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((o, r) => {
							const a = 0 === r;
							return s({
								isFirstPost: a,
								layout: e,
								post: t[o]
							}) !== s({
								isFirstPost: a,
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
						hostPostData: r,
						isCommentPermalink: a,
						isCommentsPage: i,
						isFrontpage: l,
						isProfilePostListing: d,
						isTopicPage: c,
						isCommentCountAnimationEnabled: p,
						isVoteCountAnimationEnabled: u,
						isCountAnimShadowTestEnabled: h,
						listingBelowVariant: b,
						listingKey: g,
						listingName: f,
						pageLayer: y,
						pageReferrer: C,
						redditStyle: k,
						shouldHideFlair: S,
						triggerNewPostPill: O,
						postIds: v
					} = this.props, I = 0 === t, P = `post-${o}-${e}-${t}-${s?"last-index":""}-${f}-${g}-${C}`;
					let j;
					if (void 0 === (j = this.scrollChildCache.get(P))) {
						const {
							inSubredditOrProfile: L,
							postsById: T
						} = this.props, F = T[e], R = F.crosspostRootId && T[F.crosspostRootId] ? T[F.crosspostRootId] : F;
						F.crosspostRootId && !T[F.crosspostRootId] && E.c.withScope(e => {
							e.setExtra("errorType", x.r.API), e.setExtra("description", `Post ${F.id} is crosspost of ${F.crosspostRootId}, but ` + `${F.crosspostRootId} details are missing in the state`), E.c.captureMessage("Crosspost parent details are missing")
						});
						const M = this.props.postComponentForLayout({
							isCrosspost: !!F.crosspostRootId,
							isFirstPost: I,
							layout: o,
							post: R
						});
						let B = `post-list-item-[layout: ${o}]-[postId: ${e}]`;
						this.props.listingBelowVariant && g && (B += `--${g}`);
						const A = J(e, o, s, g, f, C, this.props, t, this.props.hostPostData),
							D = z(e, o, this.props, t, y),
							V = Z(e, this.props, l),
							Q = R.media && R.media.type === N.o.EMBED ? R.media.provider : null,
							U = p && !F.isSponsored,
							W = u && !F.isSponsored && !F.isScoreHidden;
						j = {
							estHeight: Object(w.c)(F, o),
							id: e,
							isFocusable: !(!R.media || !(o === _.g.Large || o === _.g.Classic && Object(N.G)(R.media))) && (N.d.has(R.media.type) && (!Q || !N.s.has(Q)) && !R.isSpoiler && !R.isNSFW),
							trackOnEnteredViewport: A,
							trackOnExitedViewport: D,
							render: ({
								className: o,
								height: p,
								width: u,
								remeasure: x,
								setScrollerChildRef: C,
								shouldLoadInitially: E
							}) => m.a.createElement(M, {
								className: o,
								currentProfileName: n,
								key: B,
								availableWidth: u,
								eventFactory: this.eventFactoryHandler,
								first: I,
								forceLoadMedia: E,
								hostPostData: r,
								inSubredditOrProfile: L,
								isCommentPermalink: a,
								isCommentsPage: i,
								isFrontpage: l,
								isProfilePostListing: d,
								isTopicPage: c,
								isCommentCountAnimationEnabled: U,
								isVoteCountAnimationEnabled: W,
								isCountAnimShadowTestEnabled: h,
								listingBelowVariant: b,
								listingKey: g,
								listingName: f,
								pageLayer: y,
								last: s,
								onClickPost: V,
								onSizeChanged: x,
								postId: e,
								postIds: v,
								redditStyle: k,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: C,
								shouldHideFlair: S,
								onceInViewport: () => {
									null == O || O(t)
								}
							})
						}, this.scrollChildCache.set(P, j)
					}
					return j
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
					const a = r;
					return m.a.createElement("div", {
						className: V.a.placeholder
					}, m.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && m.a.createElement(S.a, {
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
						className: V.a.placeholder
					}, m.a.createElement(k.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: X[o]
					}), !!e && m.a.createElement(S.a, {
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
						layout: a,
						location: i,
						loadMore: l,
						postIds: d,
						onLoadMore: p
					} = this.props;
					let u = d.map((e, t, s) => {
						const o = t === d.length - 1;
						return this.scrollChildForPost(e, t, o, a)
					});
					n && (u = Y(u, n));
					const b = this.props.measureScrollFPS ? `post-listings-${a}` : void 0,
						f = i ? Object(o.e)(i) : null,
						y = f || r;
					return m.a.createElement(c.Fragment, null, m.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: y ? V.a.truncatedPostList : Object(g.a)(V.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: p,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: b,
						viewportTopPadding: I.f
					}, u), f && m.a.createElement(q, {
						className: V.a.seeMoreButton
					}, m.a.createElement(P.a, {
						className: V.a.seeMorePostsText,
						to: Object(h.a)(f, {
							type: x.Vb.Posts
						})
					}, Q._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			$.defaultProps = {
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				f = s.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => Object(l.a)(f.a.iconStyles, e.className, {
					[f.a.mRedditStyle]: e.redditStyle
				}),
				E = ({
					className: e,
					redditStyle: t,
					...s
				}) => r.a.createElement(b.a, y({
					name: "view_compact",
					className: C({
						className: e,
						redditStyle: t
					})
				}, s)),
				k = ({
					className: e,
					redditStyle: t,
					...s
				}) => r.a.createElement(b.a, y({
					name: "view_classic",
					className: C({
						className: e,
						redditStyle: t
					})
				}, s)),
				S = ({
					className: e,
					redditStyle: t,
					...s
				}) => r.a.createElement(b.a, y({
					name: "view_card",
					className: C({
						className: e,
						redditStyle: t
					})
				}, s)),
				O = ({
					isActive: e,
					...t
				}) => r.a.createElement("button", y({
					className: Object(l.a)(f.a.layoutButton, {
						[f.a.mIsActive]: e
					})
				}, t)),
				v = Object(h.t)(),
				I = Object(i.c)({
					postLayout: h.O,
					redditStyle: h.A
				}),
				_ = Object(a.b)(I, e => ({
					onListingLayoutChange: (t, s) => e(Object(c.v)(t, s)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = v(_(Object(p.c)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || u.e[e.postLayout];
				return r.a.createElement("div", {
					className: Object(l.a)(f.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, r.a.createElement("div", {
					className: f.a.title
				}, o.fbt._("View", null, {
					hk: "18a931"
				})), r.a.createElement("div", {
					className: f.a.iconContainer
				}, (() => [{
					layout: u.d.Card,
					Icon: S,
					text: o.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: u.d.Classic,
					Icon: k,
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
					const a = () => (o => {
							e.onChange ? e.onChange(o) : (e.onListingLayoutChange(o, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: o,
								screen: Object(g.screen)(e),
								subreddit: Object(g.subreddit)(e)
							})))
						})(o.layout),
						i = () => e.toggleTooltip(l),
						l = "layoutSwitch--" + o.layout,
						c = o.layout === n;
					return r.a.createElement(O, {
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
						onClick: c ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle,
						isFilled: c
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
					case n.G.AUTHORIZATION_ERROR:
						return t ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case n.G.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case n.G.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case n.G.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case n.G.LIKELY_UBLOCK_ERROR:
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.bc70ad906af10db5c711.js.map