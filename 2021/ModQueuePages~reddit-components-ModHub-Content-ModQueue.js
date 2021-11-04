// https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.054cbaff84094bbb989a.js
// Retrieved at 11/4/2021, 7:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages~reddit-components-ModHub-Content-ModQueue"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, o) {
				var n = s ? s.call(o, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var a = Object.keys(e),
					r = Object.keys(t);
				if (a.length !== r.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
					var d = a[l];
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
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
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
			const f = Object(c.u)(),
				y = Object(r.c)({
					isFakeSubreddit: c.y
				}),
				E = Object(a.b)(y),
				C = e => {
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
				O = e => n.a.createElement("div", {
					className: g.a.flatList
				}, n.a.createElement("div", {
					className: Object(i.a)(g.a.comments, Object(m.b)(e))
				}), n.a.createElement("div", {
					className: Object(i.a)(g.a.ellipsis, Object(m.b)(e))
				}));
			t.a = f(E(e => n.a.createElement("div", {
				className: Object(i.a)(e.className, h.a.compactPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement("div", {
				className: g.a.wrapper
			}, n.a.createElement(C, x({
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
			})), n.a.createElement(O, x({
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
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
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
				E = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/lib/addQueryParams/index.ts"),
				k = s("./src/lib/filterQueryParams/index.ts"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/selectors/meta.ts"),
				j = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				_ = s.n(j);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(o || (o = {}));
			const I = p.a.wrapped(O.b, "Row", _.a),
				P = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					origin: S.j
				});
			var L = Object(i.b)(P)(e => r.a.createElement("div", null, r.a.createElement(v.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, r.a.createElement(I, {
					displayText: n.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), r.a.createElement(v.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(C.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Posts
					})
				}, r.a.createElement(I, {
					displayText: n.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === o.Posts
				})), r.a.createElement(v.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(C.a)(Object(k.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: o.Comments
					})
				}, r.a.createElement(I, {
					displayText: n.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === o.Comments
				})))),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/controls/SearchBar/index.tsx"),
				T = s("./src/reddit/selectors/moderatorPermissions.ts"),
				F = s("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				R = s.n(F);
			const M = Object(w.u)({
					currentPageUrl: w.f
				}),
				B = Object(l.c)({
					moderatingSubreddits: T.n,
					origin: S.j
				}),
				A = Object(i.b)(B),
				D = p.a.div("DropdownContainer", R.a),
				V = p.a.div("SearchBarContainer", R.a),
				Q = p.a.wrapped(O.b, "Row", R.a),
				W = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class U extends r.a.Component {
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
					return r.a.createElement(D, {
						onClickCapture: this.stopPropagation
					}, r.a.createElement(V, null, r.a.createElement(N.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: n.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), r.a.createElement(v.a, {
						to: Object(k.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, r.a.createElement(Q, {
						displayText: n.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = W(t);
						return r.a.createElement(v.a, {
							key: t.id,
							to: Object(C.a)(Object(k.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), s)
						}, r.a.createElement(Q, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var H = M(A(U)),
				q = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				K = s.n(q);
			const X = Object(m.a)(h.a),
				Y = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				z = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				J = p.a.wrapped(x.a, "Inline", K.a),
				Z = p.a.div("Filter", K.a),
				G = p.a.wrapped(b.a, "LayoutSwitch", K.a),
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
					isPostTypeFilterDropdownOpen: Object(E.b)(z),
					isSubredditFilterDropdownOpen: Object(E.b)(Y),
					profile: (e, {
						profileName: t
					}) => t ? Object(f.j)(e, {
						profileName: t
					}) : null,
					subreddit: (e, {
						subredditName: t
					}) => t ? Object(y.w)(e, {
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
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(Y), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(z), this.props.sendEventWithName("content_type")
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
					return r.a.createElement(J, null, !e.hideSubredditFilter && r.a.createElement(r.a.Fragment, null, r.a.createElement(Z, {
						id: Y,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, r.a.createElement(g.a, {
						name: "caret_down"
					})), r.a.createElement(X, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: Y
					}, r.a.createElement(H, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), e.showTypeFilter && r.a.createElement("div", {
						className: Object(d.a)({
							[K.a.filterMargin]: !e.hideSubredditFilter
						})
					}, r.a.createElement(Z, {
						id: z,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, r.a.createElement(g.a, {
						name: "caret_down"
					})), r.a.createElement(X, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: z
					}, r.a.createElement(L, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), r.a.createElement(G, null))
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
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/layout/row/Inline/index.tsx"),
				E = s("./src/reddit/components/PaginationButtons/index.m.less"),
				C = s.n(E);
			var k = e => l.a.createElement(y.a, {
					className: C.a.buttonContainer
				}, l.a.createElement(f.s, {
					className: Object(x.a)(C.a.routerLink, {
						[C.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, g.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), l.a.createElement(f.s, {
					className: Object(x.a)(C.a.routerLink, {
						[C.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, g.fbt._("Next", null, {
					hk: "2mEXAi"
				}))),
				O = s("./src/reddit/components/PostList/index.tsx"),
				v = s("./src/reddit/constants/componentSizes.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/isComment.ts"),
				_ = s("./src/reddit/helpers/isPost.ts"),
				I = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				P = s("./src/lib/logs/console.ts"),
				L = s("./src/lib/objectSelector/index.ts"),
				w = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				N = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				T = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				F = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				R = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				M = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				B = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				A = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				D = s("./src/reddit/components/ModModeReports/index.tsx"),
				V = s("./src/reddit/components/RichTextJson/index.tsx"),
				Q = s("./src/reddit/components/VerticalVotes/index.tsx"),
				W = s("./src/reddit/controls/Checkbox/index.tsx"),
				U = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				H = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				q = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				K = s.n(q);
			const X = p.a.div("LeftRail", K.a),
				Y = p.a.wrapped(W.a, "BulkActionCheckbox", K.a),
				z = p.a.div("CommentColumn", K.a),
				J = p.a.div("VoteColumn", K.a),
				Z = p.a.wrapped(w.a, "ModToolsFlatlist", K.a),
				G = p.a.wrapped(Q.a, "Votes", K.a),
				$ = p.a.div("CommentContentWrapper", K.a),
				ee = p.a.div("ParentPostTitle", K.a),
				te = p.a.div("CommentParentWrapper", K.a),
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
					} = e, u = Object(A.c)(s), h = Object(b.c)(s);
					return l.a.createElement(T.a, {
						className: Object(x.a)(t, K.a.Component, K.a.UnthreadedCommentContainer, {
							[K.a.isBanned]: !!s.bannedBy,
							[K.a.isReported]: Object(H.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: o
					}, l.a.createElement(X, {
						className: Object(x.a)({
							[K.a.hasBorder]: !!s.bannedBy || Object(H.a)(s)
						})
					}, m && l.a.createElement(Y, {
						isCheckboxSelected: a,
						toggleCheckbox: p
					})), l.a.createElement(J, null, l.a.createElement(G, {
						compact: !1,
						model: s,
						onVoteClick: i,
						scoreClassName: K.a.score
					})), l.a.createElement(z, null, l.a.createElement(te, null, s.postTitle && l.a.createElement(ee, null, s.postTitle), s.postAuthor && l.a.createElement(M.a, {
						comment: s
					})), l.a.createElement($, null, l.a.createElement(F.a, {
						comment: s
					}, l.a.createElement(V.a, {
						content: Object(U.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: se(e)
					}), l.a.createElement(R.a, {
						comment: s,
						flair: n,
						subredditName: c ? c.displayText : null
					}), u && l.a.createElement(B.a, {
						thing: s
					}), h && l.a.createElement(D.a, {
						onIgnoreReports: r,
						reportable: s
					}), d && !s.isDeleted && l.a.createElement(Z, {
						comment: s
					})))))
				}),
				ne = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ae = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				re = s.n(ae);
			const ie = p.a.div("VoteSpacer", re.a),
				le = p.a.div("ContentWrapper", re.a),
				de = p.a.wrapped(R.a, "Meta", re.a),
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
					} = e, h = Object(A.c)(s);
					return l.a.createElement(T.a, {
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
					}), s.postTitle && l.a.createElement(N.a, null, s.postTitle)), l.a.createElement(F.a, {
						comment: s
					}, l.a.createElement(me, null, l.a.createElement(V.a, {
						content: Object(U.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: pe(e)
					})), h && l.a.createElement(B.a, {
						thing: s
					}), a && l.a.createElement(D.a, {
						onIgnoreReports: i,
						reportable: s
					}), l.a.createElement(de, {
						comment: s,
						flair: n
					}))), c && !s.isDeleted && l.a.createElement(w.a, {
						comment: s
					})))
				}, "Component", re.a)),
				he = s("./src/reddit/constants/postLayout.ts");
			const be = {
					[he.g.Large]: ue,
					[he.g.Medium]: N.c,
					[he.g.Classic]: N.c,
					[he.g.Compact]: oe
				},
				ge = e => null;
			var xe = s("./src/reddit/models/Flair/index.ts"),
				fe = s("./src/reddit/models/Media/index.ts"),
				ye = s("./src/reddit/models/ModQueue/index.ts"),
				Ee = s("./src/reddit/selectors/meta.ts"),
				Ce = s("./src/reddit/selectors/modQueue.ts"),
				ke = s("./src/reddit/selectors/subreddit.ts"),
				Oe = s("./src/config.ts"),
				ve = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				Se = s.n(ve);
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _e = `${Oe.a.assetPath}/img/snoomoji/cat_blep.png`, Ie = p.a.div("Container", Se.a), Pe = p.a.div("Image", Se.a), Le = p.a.div("Title", Se.a), we = p.a.div("Text", Se.a);
			var Ne = () => l.a.createElement(Ie, null, l.a.createElement(Pe, {
					style: {
						backgroundImage: `url(${_e})`
					}
				}), l.a.createElement(Le, null, je._("The queue is clean!", null, {
					hk: "3d14fC"
				})), l.a.createElement(we, null, je._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Te = s("./src/reddit/components/PostList/Placeholder.tsx");
			const Fe = Object(S.u)(),
				Re = Object(c.c)({
					layout: S.Q
				});
			var Me = Fe(Object(d.b)(Re)(e => l.a.createElement(Te.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Be = s("./node_modules/lodash/flatten.js"),
				Ae = s.n(Be),
				De = s("./src/reddit/actions/tooltip.ts"),
				Ve = s("./src/reddit/icons/fonts/index.tsx"),
				Qe = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				We = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				He = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				qe = s("./src/higherOrderComponents/asTooltip.tsx"),
				Ke = s("./src/reddit/actions/modal.ts"),
				Xe = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ye = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ze = s("./src/reddit/controls/Dropdown/index.tsx"),
				Je = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Ze = s("./src/reddit/helpers/flair.ts"),
				Ge = s("./src/reddit/selectors/activeModalId.ts"),
				$e = s("./src/reddit/selectors/moderatorPermissions.ts"),
				et = s("./src/reddit/selectors/postFlair.ts"),
				tt = s("./src/reddit/selectors/posts.ts"),
				st = s("./src/reddit/selectors/tooltip.ts"),
				ot = s("./src/reddit/components/TrackingHelper/index.tsx"),
				nt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				at = s.n(nt);
			const rt = e => l.a.createElement("button", {
					className: Object(x.a)(at.a.StatusItem, e.className),
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? g.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, e.buttonText),
				it = Object(c.c)({
					selectedItems: Ce.f
				}),
				lt = Object(d.b)(it, e => ({
					onIgnoreReports: () => e(Object(u.f)(ye.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(ye.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(ye.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(ye.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(ye.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(ye.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(ye.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(ye.a.Unspoiler))
				})),
				dt = e => e.some(e => Object(j.a)(e));
			var ct = Object(qe.a)(lt(Object(ot.c)(e => l.a.createElement("div", {
				className: Object(x.a)(at.a.StatusList, e.className),
				style: e.style
			}, l.a.createElement("div", {
				className: at.a.StatusContainer
			}, l.a.createElement(rt, {
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
				ht = s.n(ut);
			const bt = "BulkAction--BulkItemFilter",
				gt = "BulkActions--PostFlair--Modal",
				xt = Object(qe.a)(ze.a),
				ft = e => l.a.createElement(Je.b, {
					className: Object(x.a)(ht.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				yt = Object(c.c)({
					activeModalId: Ge.a,
					dropdownIsOpen: Object(st.b)(bt),
					flairData: et.d,
					isApiPending: Ce.a,
					moderatorPermissions: $e.m,
					posts: tt.K,
					selectedItems: Ce.f
				}),
				Et = Object(d.b)(yt, e => ({
					onApprove: () => e(Object(u.f)(ye.a.Approve)),
					onFlair: (t, s) => e(Object(u.f)(ye.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(De.h)({
						tooltipId: bt
					})),
					onOpenModToolsDropdown: () => e(Object(De.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(u.f)(ye.a.Remove)),
					onSpam: () => e(Object(u.f)(ye.a.Spam)),
					onToggleFlairModal: () => e(Object(Ke.i)(gt))
				})),
				Ct = (e, t) => {
					const s = Ae()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const o = [];
					return s.forEach(e => {
						if (e.type === xe.f.Text || e.type === xe.f.Richtext) {
							const t = Object(Ze.g)(e);
							r()(o, t) || o.push(t)
						}
					}), o.length > 1 ? [{
						type: xe.f.Text,
						text: g.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var kt = Et(e => {
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
						onRemove: h,
						onSpam: b,
						onToggleFlairModal: f,
						posts: y,
						selectedItems: E,
						startNumItems: C,
						subredditId: k,
						toggleSelectAll: O,
						toggleSelectByFilter: v
					} = e, S = [{
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
					}], j = d && d.flair, _ = k && n && n.displaySettings.isEnabled && j && !dt(E);
					return l.a.createElement("div", {
						className: Object(x.a)(ht.a.ModToolsBulkOperations, s)
					}, l.a.createElement("div", {
						className: ht.a.CheckboxContainer,
						id: bt
					}, l.a.createElement(W.a, {
						className: ht.a.Checkbox,
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: O
					}), l.a.createElement(Ve.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), l.a.createElement(xt, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: bt
					}, S.map(e => l.a.createElement(ft, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => v(e.filterType)
					})))), a && l.a.createElement(i.Fragment, null, l.a.createElement(Ye.c, {
						className: ht.a.Button,
						disabled: r,
						text: g.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, l.a.createElement(Qe.a, null)), l.a.createElement(Ye.c, {
						className: ht.a.Button,
						disabled: r,
						text: g.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: h
					}, l.a.createElement(We.a, null)), l.a.createElement(Ye.c, {
						className: ht.a.Button,
						disabled: r,
						text: g.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: b
					}, l.a.createElement(Ue.a, null)), l.a.createElement(Ye.c, {
						className: ht.a.Button,
						disabled: r,
						onClick: e.onOpenModToolsDropdown
					}, l.a.createElement(pt, {
						tooltipId: "BulkActions--ModTools"
					}), l.a.createElement(Ve.a, {
						name: "list_bulleted"
					})), l.a.createElement("div", null, _ && l.a.createElement(Ye.c, {
						disabled: r,
						onClick: f,
						className: ht.a.Button
					}, l.a.createElement(He.a, null)))), a && k && t === gt && l.a.createElement(Xe.a, {
						flairs: Ct(E, y),
						modalId: gt,
						onFlairChanged: ({
							previewFlair: e,
							selectedTemplateId: t
						}) => {
							u(e, t)
						},
						subredditId: k
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
				Ot = s("./src/reddit/contexts/Post/index.tsx"),
				vt = s("./src/reddit/components/ModQueueList/index.m.less"),
				St = s.n(vt);
			const jt = e => Object(_.a)(e.id),
				_t = p.a.div("ItemContainer", St.a),
				It = p.a.div("ButtonContainer", St.a),
				Pt = Object(S.u)({
					currentProfileName: S.i,
					isCommentPermalink: S.w,
					isCommentsPage: S.x,
					isFrontpage: S.z,
					isProfilePostListing: S.K,
					isTopicPage: S.P,
					queryParams: S.V,
					pageLayer: e => e
				}),
				Lt = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: Ce.b,
					loadMore: Ce.d,
					modQueueListingItems: Ce.c,
					origin: Ee.j,
					selectedItems: Ce.f,
					subredditId: (e, t) => t.subredditName ? Object(ke.B)(e, t.subredditName) : null
				}),
				wt = Object(d.b)(Lt, e => ({
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
					openPost: t => e(Object(h.K)(t))
				})),
				Nt = e => e.page ? parseInt(e.page, 10) : ye.b,
				Tt = e => Nt(e) + 1,
				Ft = e => Math.max(ye.b, Nt(e) - 1),
				Rt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Nt(e) === ye.b ? t : 25 * Ft(e) + t
				},
				Mt = e => Nt(e) === ye.b ? ye.b : 25 * Ft(e) + 1;
			var Bt;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Bt || (Bt = {}));
			class At extends l.a.Component {
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
							case Bt.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(_.a)(e.id) && t.push(e.id)
								});
								break;
							case Bt.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(j.a)(e.id) && t.push(e.id)
								});
								break;
							case Bt.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Bt.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(_.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== xe.f.Spoiler && e.type !== xe.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case Bt.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(_.a)(e.id)) {
										const s = e;
										s.media && s.media.type === fe.o.TEXT && t.push(s.id)
									}
								});
								break;
							case Bt.spamFiltered:
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
									n = Object(I.b)({
										layout: e.layout,
										post: o
									});
								return l.a.createElement(_t, {
									key: s
								}, l.a.createElement(n, {
									availableWidth: v.g,
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
								return void 0 === s ? (Object(P.a)(void 0, `Could not find component for layout ${t}.`), ge) : s
							}(0, e.layout);
							return l.a.createElement(_t, {
								key: s
							}, l.a.createElement(Ot.a, {
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
						})), l.a.createElement("div", null, l.a.createElement("div", null, t), l.a.createElement(It, null, l.a.createElement(k, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Ft(e),
								after: null
							}),
							nextButtonEnabled: o,
							nextTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Tt(e),
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
					return l.a.createElement("div", null, l.a.createElement(kt, {
						endNumItems: Rt(e),
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
			t.a = Pt(wt(At))
		},
		"./src/reddit/components/OneFeed/Footer.m.less": function(e, t, s) {
			e.exports = {
				Footer: "_3AaWcDg070_adHsR2kuysq",
				footer: "_3AaWcDg070_adHsR2kuysq",
				ClassicLayout: "_2haLgsTDyDtdH_2cecOvLP",
				classicLayout: "_2haLgsTDyDtdH_2cecOvLP",
				LargeLayout: "_1nHCEySWEWsOIjYYvrF3Ay",
				largeLayout: "_1nHCEySWEWsOIjYYvrF3Ay",
				SeeFewerPostsView: "_3EYDFTyujo6kmshltlBq10",
				seeFewerPostsView: "_3EYDFTyujo6kmshltlBq10",
				Title: "_21u1WVXVWqUtM7v_Y0c9_0",
				title: "_21u1WVXVWqUtM7v_Y0c9_0",
				Button: "_3FNnHKnM8zvRUpKS2hqoVu",
				button: "_3FNnHKnM8zvRUpKS2hqoVu",
				Divider: "_5XRkOTBpwyH-aTpv3Uj2",
				divider: "_5XRkOTBpwyH-aTpv3Uj2",
				ThankYouView: "_3jke_Z4bAXFPXe4m2Z_ocv",
				thankYouView: "_3jke_Z4bAXFPXe4m2Z_ocv",
				Icon: "_3Qyit4QoTHIo9Mp3ed0NZg",
				icon: "_3Qyit4QoTHIo9Mp3ed0NZg",
				Subtitle: "_2f9EhN-2fH0l-KxOeQ_wj8",
				subtitle: "_2f9EhN-2fH0l-KxOeQ_wj8"
			}
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
				a = s("./src/reddit/components/PostList/LoadMore.m.less"),
				r = s.n(a);
			t.a = o.a.wrapped(n.a, "Component", r.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/constant.js"),
				n = s.n(o),
				a = s("./node_modules/lodash/times.js"),
				r = s.n(a),
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
				E = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				C = s("./src/reddit/models/Vote/index.ts"),
				k = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				O = s.n(k),
				v = s("./src/reddit/components/LargePost/placeholder.m.less"),
				S = s.n(v);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(y.u)(),
				I = Object(c.c)({
					isFakeSubreddit: y.y
				}),
				P = Object(d.b)(I),
				L = e => {
					const t = {
						interactive: !1,
						voteState: C.a.notVoted
					};
					return l.a.createElement("div", {
						className: S.a.emptyVerticalVotes
					}, l.a.createElement(f.d, j({
						key: "u"
					}, t)), l.a.createElement("div", {
						className: S.a.emptyScore,
						key: "s"
					}), l.a.createElement(f.c, j({
						key: "d"
					}, t)))
				},
				w = e => l.a.createElement("div", j({
					className: Object(g.a)(S.a.subredditIcon, Object(E.a)({
						isLoading: !0
					}))
				}, e));
			var N = _(P(({
					className: e,
					dispatch: t,
					pageLayer: s,
					...o
				}) => l.a.createElement("div", {
					className: Object(g.a)(O.a.baseLargeAndMediumPostStyles, e)
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
					className: Object(g.a)(S.a.topMetaOne, Object(E.b)(o))
				}), l.a.createElement("div", {
					key: "bac",
					className: Object(g.a)(S.a.topMetaTwo, Object(E.b)(o))
				})), l.a.createElement("div", {
					key: "bb",
					className: Object(g.a)(S.a.title, Object(E.b)(o))
				})), l.a.createElement("div", {
					key: "c",
					className: Object(g.a)(S.a.media, Object(E.a)(o))
				}), l.a.createElement("div", {
					className: S.a.content,
					key: "d"
				}, l.a.createElement("div", {
					className: S.a.flatlist
				}, l.a.createElement("div", {
					className: Object(g.a)(S.a.flatlistItemOne, Object(E.b)(o))
				}), l.a.createElement("div", {
					className: Object(g.a)(S.a.flatListItemTwo, Object(E.b)(o))
				})))))),
				T = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				F = s.n(T);
			const R = {
				[u.g.Large]: [N, 2],
				[u.g.Classic]: [h.b, 10],
				[u.g.Compact]: [b.a, 30],
				[u.g.Search]: [e => l.a.createElement("div", {
					className: Object(g.a)(e.className, F.a.postContainer)
				}, l.a.createElement("div", {
					className: F.a.postContent
				}, l.a.createElement("div", {
					className: F.a.postItemMetaContainer
				}, l.a.createElement("div", {
					className: Object(g.a)(F.a.subredditName, Object(E.b)(e))
				}), l.a.createElement("div", {
					className: Object(g.a)(F.a.author, Object(E.b)(e))
				})), l.a.createElement("div", {
					className: F.a.postItemTitleContainer
				}, l.a.createElement("div", {
					className: Object(g.a)(F.a.title, Object(E.b)(e))
				}), l.a.createElement("div", {
					className: F.a.thumbnailContainer
				}, l.a.createElement("div", {
					className: Object(g.a)(F.a.thumbnail, Object(E.b)(e))
				}))), l.a.createElement("div", {
					className: F.a.flatlist
				}, l.a.createElement("div", {
					className: Object(g.a)(F.a.flatListItem, Object(E.b)(e))
				}), l.a.createElement("div", {
					className: Object(g.a)(F.a.flatListItem, Object(E.b)(e))
				}), l.a.createElement("div", {
					className: Object(g.a)(F.a.flatListItem, Object(E.b)(e))
				})))), 8]
			};

			function M(e) {
				return R[e]
			}
			const B = .1,
				A = Object(c.c)({
					loadingPostComponentForLayout: () => M
				}),
				D = Object(d.b)(A);
			class V extends l.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && p.b(this.wrapperRef), e && p.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= B;
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
						loadingPostComponentForLayout: a
					} = this.props, {
						visible: i
					} = this.state, [d, c] = a(o), m = t || c, p = n()(l.a.createElement(d, {
						isLoading: s && i
					})), u = r()(m, p);
					return l.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, l.a.Children.toArray(u))
				}
			}
			t.a = D(V)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/controls/Button/index.tsx"),
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
				})), a.a.createElement("div", {
					className: d.a.somethingWrong
				}, a.a.createElement("div", {
					className: d.a.somethingWrongText
				}, n), t && a.a.createElement(r.l, {
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
				return Ce
			})), s.d(t, "a", (function() {
				return Oe
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o, n = s("./node_modules/history/esm/history.js"),
				a = s("./node_modules/lodash/debounce.js"),
				r = s.n(a),
				i = s("./node_modules/lodash/last.js"),
				l = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				m = s("./node_modules/react/index.js"),
				p = s.n(m),
				u = s("./node_modules/shallowequal/index.js"),
				h = s.n(u),
				b = s("./src/lib/addQueryParams/index.ts"),
				g = s("./src/lib/ads/index.ts"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/fastdom/index.ts"),
				E = s("./src/lib/lessComponent.tsx"),
				C = s("./src/lib/opener/index.ts"),
				k = s("./src/lib/sentry/index.ts"),
				O = s("./node_modules/react-redux/es/index.js"),
				v = s("./src/reddit/actions/post.ts"),
				S = s("./src/reddit/actions/toaster.ts"),
				j = s("./src/reddit/constants/oneFeed.ts"),
				_ = s("./src/reddit/constants/postLayout.ts"),
				I = s("./src/reddit/contexts/ApiContext.tsx"),
				P = s("./src/lib/makeGqlRequest/index.ts"),
				L = s("./src/redditGQL/operations/UpdateRecommendationPreferences.json");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(o || (o = {}));
			const w = (e, t) => Object(P.a)(e, {
					...L,
					variables: t
				}),
				N = (e, t) => w(e(), {
					input: {
						dislikedSimilarSubredditSeedPreference: {
							action: o.ADD,
							subredditId: t
						}
					}
				}),
				T = (e, t) => w(e(), {
					input: {
						dislikedSubredditPreference: {
							action: o.ADD,
							subredditId: t
						}
					}
				});
			var F = s("./src/reddit/helpers/trackers/post.ts"),
				R = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				M = s("./src/reddit/hooks/useTracking.ts"),
				B = s("./src/reddit/icons/fonts/index.tsx"),
				A = s("./src/reddit/components/OneFeed/Footer.m.less"),
				D = s.n(A);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Q = async ({
				dispatch: e,
				gqlContext: t,
				setRecommendationFooterView: s,
				similar: o,
				subredditId: n
			}) => {
				const a = o ? N : T;
				try {
					if (!0 === (await a(t, n)).ok) return void s(j.a.ThankYouView);
					e(Object(S.d)())
				} catch (r) {
					e(Object(S.d)())
				}
			}, W = ({
				displayText: e,
				seeLessFromThisCommunity: t,
				seeLessLikeThisCommunity: s,
				seeLessOfThisPostClick: o
			}) => p.a.createElement("div", {
				className: D.a.SeeFewerPostsView
			}, p.a.createElement("div", {
				className: D.a.Title
			}, V._("What would you like to see less of?", null, {
				hk: "mw3bZ"
			})), p.a.createElement("div", null, p.a.createElement("button", {
				className: D.a.Button,
				onClick: o
			}, V._("This individual post", null, {
				hk: "103pQH"
			}))), p.a.createElement("hr", {
				className: D.a.Divider
			}), p.a.createElement("div", null, p.a.createElement("button", {
				className: D.a.Button,
				onClick: t
			}, V._("Posts from this community", null, {
				hk: "RacDp"
			}))), !!e && p.a.createElement(p.a.Fragment, null, p.a.createElement("hr", {
				className: D.a.Divider
			}), p.a.createElement("div", null, p.a.createElement("button", {
				className: D.a.Button,
				onClick: s
			}, V._("Posts from communities similar to {subreddit name}", [V._param("subreddit name", e)], {
				hk: "3pCPAD"
			}))))), U = () => p.a.createElement("div", {
				className: D.a.ThankYouView
			}, p.a.createElement("div", {
				className: D.a.Title
			}, p.a.createElement(B.a, {
				name: "checkmark",
				className: D.a.Icon
			}), V._("Thanks for letting us know!", null, {
				hk: "2VBsFC"
			})), p.a.createElement("div", {
				className: D.a.Subtitle
			}, V._("Your feedback improves your feed.", null, {
				hk: "2WLaqS"
			})));
			var H = Object(I.b)(({
					gqlContext: e,
					layout: t,
					post: s
				}) => {
					var o;
					const n = Object(O.d)(),
						a = Object(M.a)(),
						r = Object(m.useRef)(!1),
						{
							hideRecommendationFooter: i,
							recommendationFooterView: l,
							setRecommendationFooterView: d
						} = Object(R.a)(),
						c = s.belongsTo.id,
						u = s.id,
						{
							subredditId: h,
							subredditName: b
						} = (null === (o = s.recommendationContext) || void 0 === o ? void 0 : o.source) || {};
					Object(m.useEffect)(() => {
						if (l === j.a.ThankYouView) {
							const e = r.current ? () => n(Object(v.Y)(u, !0, !1, !0)) : i,
								t = setTimeout(e, 1500);
							return () => clearTimeout(t)
						}
					}, [n, i, u, l]);
					const g = Object(m.useCallback)(() => {
							r.current = !0, d(j.a.ThankYouView), a(Object(F.j)(u))
						}, [u, a, d]),
						f = Object(m.useCallback)(() => {
							Q({
								dispatch: n,
								gqlContext: e,
								setRecommendationFooterView: d,
								similar: !1,
								subredditId: c
							}), r.current = !0, a(Object(F.b)(u))
						}, [n, e, u, a, d, c]),
						y = Object(m.useCallback)(() => {
							h && (Q({
								dispatch: n,
								gqlContext: e,
								setRecommendationFooterView: d,
								similar: !0,
								subredditId: h
							}), r.current = !0, a(Object(F.m)(u)))
						}, [n, e, u, h, a, d]);
					return l && l !== j.a.None ? p.a.createElement("div", {
						className: Object(x.a)(D.a.Footer, {
							[D.a.ClassicLayout]: t === _.g.Classic,
							[D.a.CompactLayout]: t === _.g.Compact,
							[D.a.LargeLayout]: t === _.g.Large
						})
					}, l === j.a.SeeFewerPostsView && p.a.createElement(W, {
						displayText: b,
						seeLessFromThisCommunity: f,
						seeLessLikeThisCommunity: y,
						seeLessOfThisPostClick: g
					}), l === j.a.ThankYouView && p.a.createElement(U, null)) : null
				}),
				q = s("./src/reddit/components/PostList/LoadMore.tsx"),
				K = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				X = s("./src/reddit/components/Scroller/Simple.tsx"),
				Y = s("./src/reddit/constants/adEvents.ts"),
				z = s("./src/reddit/constants/componentSizes.ts"),
				J = s("./src/reddit/contexts/OneFeed/index.ts");
			var Z = function({
					children: e
				}) {
					const [t, s] = Object(m.useState)(j.a.None), o = Object(m.useCallback)(() => s(j.a.None), []), n = Object(m.useMemo)(() => ({
						hideRecommendationFooter: o,
						recommendationFooterView: t,
						setRecommendationFooterView: s
					}), [o, t, s]);
					return p.a.createElement(J.a.Provider, {
						value: n
					}, e)
				},
				G = s("./src/reddit/controls/InternalLink/index.tsx"),
				$ = s("./src/reddit/controls/OutboundLink/index.tsx"),
				ee = s("./src/reddit/helpers/getClickInfo.ts"),
				te = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				se = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				oe = s("./src/reddit/models/Media/index.ts"),
				ne = s("./src/reddit/helpers/brandSafety/index.ts"),
				ae = s("./src/reddit/helpers/trackers/ads.ts"),
				re = s("./src/lib/LRUCache/index.ts"),
				ie = s("./src/telemetry/index.ts"),
				le = s("./src/telemetry/models/Timer.ts"),
				de = s("./src/reddit/components/PostList/index.m.less"),
				ce = s.n(de);
			const {
				fbt: me
			} = s("./node_modules/fbt/lib/FbtPublic.js"), pe = 500, ue = new re.a(pe), he = new re.a(pe), be = new re.a(pe), ge = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, xe = E.a.div("SeeMore", ce.a), fe = E.a.wrapped(se.a, "ArrowRight", ce.a), ye = (e, t, s, o, n, a, r, i, l) => {
				const d = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}-${a}`;
				let c = ue.get(d);
				return void 0 === c && (c = () => {
					s && r.onBottomViewed(o, n), r.trackOnPostEnteredViewport(e, t, i, l)
				}, ue.set(d, c)), c
			}, Ee = (e, t, s, o, n) => {
				const a = `left-${e}-${t}`;
				let r = he.get(a);
				return void 0 === r && (r = a => {
					s.trackOnPostExitedViewport(e, t, a, o, n)
				}, he.set(a, r)), r
			}, Ce = (e, t, s = !1) => {
				const o = `click-${e}`;
				let n = be.get(o);
				return void 0 === n && (n = (e, o, n, a, r) => {
					if (o.isSponsored) {
						t.fireAdPixelsOfType(o, Y.a.Click);
						const {
							source: e
						} = Object(g.t)(o, a);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object($.a)(o.id, n, t).url), Object(ae.a)(o, r), Object(C.e)(t, C.d.BLANK)
						}
					} else t.openPost({
						postOrComment: o,
						clickInfo: Object(ee.a)(e),
						isFrontpage: s
					})
				}, be.set(o, n)), n
			}, ke = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Oe extends p.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new re.a(pe), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						const {
							isNpsScrollSurveyEnabled: t,
							onScroll: s,
							surveyTriggerScrollCounted: o
						} = this.props;
						this.dispatchBrandSafety(e), t && o && !this.surveyTriggerCounted && this.surveyTriggerListener(e), s && s(e)
					}, this.surveyTriggerListener = c()(({
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
						const a = n.map(e => t[e]).filter(Boolean),
							r = a.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(ne.a)(a, r))
					}, f.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && ie.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = ie.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = ie.c.end(this.timerId);
						setTimeout(() => Object(ie.b)(f.m.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && ie.c.cancel(this.timerId), e.postIds.length && (this.timerId = ie.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (y.a.read(() => this.checkAndSendScreenview()), this.timerId && ie.c.has(this.timerId)) {
						const e = ie.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(ie.b)(f.m.Redesign, {
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
					this.timerId && ie.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && l()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return ie.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview() || !t) return;
					const o = ie.c.end(e);
					setTimeout(() => {
						s(t(o, le.TimerType.InApp))
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
						triggerNewPostPill: a,
						...r
					} = e, i = Object.keys(o), l = Object.keys(r);
					if (l.length !== i.length) return !0;
					if (l.some(e => {
							let t = !1;
							return t = "function" == typeof o[e] || "object" == typeof o[e] ? !h()(o[e], r[e]) : o[e] !== r[e]
						})) return !0;
					if (t === n) return !1;
					if (s !== a) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((o, a) => {
							const r = 0 === a;
							return s({
								isFirstPost: r,
								layout: e,
								post: t[o]
							}) !== s({
								isFirstPost: r,
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
						hostPostData: a,
						isCommentPermalink: r,
						isCommentsPage: i,
						isFrontpage: l,
						isProfilePostListing: d,
						isTopicPage: c,
						isCommentCountAnimationEnabled: m,
						isVoteCountAnimationEnabled: u,
						isCountAnimShadowTestEnabled: h,
						listingBelowVariant: b,
						listingKey: g,
						listingName: x,
						pageLayer: y,
						pageReferrer: E,
						redditStyle: C,
						shouldHideFlair: O,
						triggerNewPostPill: v,
						postIds: S
					} = this.props, j = 0 === t, I = `post-${o}-${e}-${t}-${s?"last-index":""}-${x}-${g}-${E}`;
					let P;
					if (void 0 === (P = this.scrollChildCache.get(I))) {
						const {
							inSubredditOrProfile: L,
							postsById: w
						} = this.props, N = w[e], T = N.crosspostRootId && w[N.crosspostRootId] ? w[N.crosspostRootId] : N;
						N.crosspostRootId && !w[N.crosspostRootId] && k.c.withScope(e => {
							e.setExtra("errorType", f.s.API), e.setExtra("description", `Post ${N.id} is crosspost of ${N.crosspostRootId}, but ` + `${N.crosspostRootId} details are missing in the state`), k.c.captureMessage("Crosspost parent details are missing")
						});
						const F = this.props.postComponentForLayout({
							isCrosspost: !!N.crosspostRootId,
							isFirstPost: j,
							layout: o,
							post: T
						});
						let R = `post-list-item-[layout: ${o}]-[postId: ${e}]`;
						this.props.listingBelowVariant && g && (R += `--${g}`);
						const M = ye(e, o, s, g, x, E, this.props, t, this.props.hostPostData),
							B = Ee(e, o, this.props, t, y),
							A = Ce(e, this.props, l),
							D = T.media && T.media.type === oe.o.EMBED ? T.media.provider : null,
							V = m && !N.isSponsored,
							Q = u && !N.isSponsored && !N.isScoreHidden,
							W = !!(null == N ? void 0 : N.recommendationContext);
						P = {
							estHeight: Object(te.c)(N, o),
							id: e,
							isFocusable: !(!T.media || !(o === _.g.Large || o === _.g.Classic && Object(oe.H)(T.media))) && (oe.d.has(T.media.type) && (!D || !oe.s.has(D)) && !T.isSpoiler),
							trackOnEnteredViewport: M,
							trackOnExitedViewport: B,
							render: ({
								className: m,
								height: u,
								width: f,
								remeasure: E,
								setScrollerChildRef: k,
								shouldLoadInitially: _
							}) => p.a.createElement(Z, {
								key: R
							}, p.a.createElement(F, {
								availableWidth: f,
								className: m,
								currentProfileName: n,
								eventFactory: this.eventFactoryHandler,
								first: j,
								forceLoadMedia: _,
								hostPostData: a,
								inSubredditOrProfile: L,
								isCommentCountAnimationEnabled: V,
								isCommentPermalink: r,
								isCommentsPage: i,
								isCountAnimShadowTestEnabled: h,
								isFrontpage: l,
								isProfilePostListing: d,
								isTopicPage: c,
								isVoteCountAnimationEnabled: Q,
								key: R,
								last: s,
								listingBelowVariant: b,
								listingIndex: t,
								listingKey: g,
								listingName: x,
								onceInViewport: v,
								onClickPost: A,
								onSizeChanged: E,
								pageLayer: y,
								postId: e,
								postIds: S,
								redditStyle: C,
								scrollerItemRef: k,
								sendEvent: this.props.sendEvent,
								shouldHideFlair: O
							}), W && p.a.createElement(H, {
								post: T,
								layout: o
							}))
						}, this.scrollChildCache.set(I, P)
					}
					return P
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return p.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: n,
						postListPlaceholderComponent: a
					} = this.props;
					if (s) return;
					const r = a;
					return p.a.createElement("div", {
						className: ce.a.placeholder
					}, p.a.createElement(r, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && p.a.createElement(K.a, {
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
						onLoadMore: a
					} = this.props;
					if (!s) return p.a.createElement("div", {
						className: ce.a.placeholder
					}, p.a.createElement(q.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: ge[o]
					}), !!e && p.a.createElement(K.a, {
						apiError: e,
						onTryAgain: a
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: o,
						isSerpExperimentOverride: a,
						isTruncated: r,
						layout: i,
						location: l,
						loadMore: d,
						postIds: c,
						postsById: u,
						onLoadMore: h
					} = this.props;
					let g = c.filter(e => Boolean(u[e])).map((e, t, s) => {
						const o = t === s.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					o && (g = ke(g, o));
					const y = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						E = l ? Object(n.e)(l) : null,
						C = E || r;
					return p.a.createElement(m.Fragment, null, p.a.createElement(X.b, {
						innerRef: this.updateScrollerRef,
						className: C ? ce.a.truncatedPostList : Object(x.a)(ce.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: h,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: y,
						viewportTopPadding: z.f
					}, g), !a && E && p.a.createElement(xe, {
						className: ce.a.seeMoreButton
					}, p.a.createElement(G.a, {
						className: ce.a.seeMorePostsText,
						to: Object(b.a)(E, {
							type: f.Yb.Posts
						})
					}, me._("See More Posts", null, {
						hk: "3o0CqI"
					}), p.a.createElement(fe, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Oe.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: p.a.Fragment
			}
		},
		"./src/reddit/components/SearchPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2486DvSWPD-F9xM1LaS9AZ",
				postContent: "-epve_JNERIUWcWNKZJF6",
				postItemMetaContainer: "_2dzkHWoQ7wLdDsEAwyw1NL",
				subredditName: "_1cE9WBao1CSNnKKQd97erN",
				author: "dXH0UqIq_Mtkd24573Rs5",
				postItemTitleContainer: "_1NHO6pCrlHfrC6Q-_d-3kZ",
				title: "aHlABuIzfJ3NbabTwjGN8",
				thumbnail: "_1wEL9K8jt2pgaYL1hhQt_P",
				thumbnailContainer: "_22TlQsT52A1DMzjuJNEb7b",
				flatlist: "_2ztqeqAwKeO-Fwjjpm3ou2",
				flatListItem: "hKjLaaNx-nWjCGihE3wwZ"
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
			const E = e => Object(l.a)(f.a.iconStyles, e.className, {
					[f.a.mRedditStyle]: e.redditStyle
				}),
				C = ({
					className: e,
					redditStyle: t,
					...s
				}) => a.a.createElement(b.a, y({
					name: "view_compact",
					className: E({
						className: e,
						redditStyle: t
					})
				}, s)),
				k = ({
					className: e,
					redditStyle: t,
					...s
				}) => a.a.createElement(b.a, y({
					name: "view_classic",
					className: E({
						className: e,
						redditStyle: t
					})
				}, s)),
				O = ({
					className: e,
					redditStyle: t,
					...s
				}) => a.a.createElement(b.a, y({
					name: "view_card",
					className: E({
						className: e,
						redditStyle: t
					})
				}, s)),
				v = ({
					isActive: e,
					...t
				}) => a.a.createElement("button", y({
					className: Object(l.a)(f.a.layoutButton, {
						[f.a.mIsActive]: e
					})
				}, t)),
				S = Object(h.u)(),
				j = Object(i.c)({
					postLayout: h.Q,
					redditStyle: h.C
				}),
				_ = Object(r.b)(j, e => ({
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
			t.a = S(_(Object(p.c)(e => {
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
					Icon: O,
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
					Icon: C,
					text: o.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(o => {
					const r = () => (o => {
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
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");

			function a({
				apiError: e,
				isLoggedOut: t
			}) {
				switch (e.type) {
					case n.H.AUTHORIZATION_ERROR:
						return t ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case n.H.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case n.H.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case n.H.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case n.H.LIKELY_UBLOCK_ERROR:
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
		"./src/redditGQL/operations/UpdateRecommendationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"fa7b23e7dbc7"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-ModHub-Content-ModQueue.054cbaff84094bbb989a.js.map