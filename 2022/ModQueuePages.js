// https://www.redditstatic.com/desktop2x/ModQueuePages.5276d72b9aaffa903829.js
// Retrieved at 3/7/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages"], {
		"./node_modules/lodash/includes.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js"),
				o = s("./node_modules/lodash/isArrayLike.js"),
				a = s("./node_modules/lodash/isString.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				i = s("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, s, l) {
				e = o(e) ? e : i(e), s = s && !l ? r(s) : 0;
				var c = e.length;
				return s < 0 && (s = d(c + s, 0)), a(e) ? s <= c && e.indexOf(t, s) > -1 : !!c && n(e, t, s) > -1
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
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, s) {
			e.exports = {
				VoteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				voteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				ContentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				contentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				CommentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				commentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				CommentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				commentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				CommentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				commentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				ParentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				parentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				Component: "_29-oldqrqqPwwjRRH0aLqU",
				component: "_29-oldqrqqPwwjRRH0aLqU"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			})), s.d(t, "b", (function() {
				return M
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/actions/comment/moderation.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				m = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				u = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				b = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				h = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				x = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				g = s("./src/reddit/components/ModModeReports/index.tsx"),
				C = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				f = s("./src/reddit/components/RichTextJson/index.tsx"),
				k = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				_ = s("./src/reddit/selectors/comments.ts"),
				S = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				y = s.n(j),
				I = s("./src/lib/lessComponent.tsx");
			const v = I.a.div("VoteSpacer", y.a),
				P = I.a.div("ContentWrapper", y.a),
				T = I.a.div("CommentContentWrapper", y.a),
				N = I.a.div("CommentBody", y.a),
				w = I.a.div("ParentPostTitle", y.a),
				F = I.a.div("CommentParentWrapper", y.a),
				L = Object(r.c)({
					comment: (e, t) => Object(S.b)(e, t),
					commentPermalink: _.m,
					flair: _.e,
					subreddit: O.H
				}),
				M = Object(a.b)(L, (e, {
					commentId: t,
					trackClick: s
				}) => ({
					onIgnoreReports: () => e(Object(l.g)(t)),
					onVoteClick: n => {
						const [o, a] = n === E.a.upvoted ? [Object(d.q)(t), "upvote_comment"] : [Object(d.j)(t), "downvote_comment"];
						s(a)(), e(o)
					}
				})),
				D = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = M(I.a.wrapped(e => {
				const {
					className: t,
					comment: s,
					commentPermalink: n,
					flair: a,
					hasReports: r,
					isCheckboxSelected: i = !1,
					onIgnoreReports: d,
					onVoteClick: l,
					showModTools: E,
					subreddit: _,
					showBulkActionCheckbox: S,
					toggleCheckbox: O
				} = e, j = Object(x.d)(s);
				return o.a.createElement(m.a, {
					className: t,
					clickTrackingId: s.id,
					permalink: n
				}, o.a.createElement(C.a, {
					model: s,
					handleVote: l,
					showBulkActionCheckbox: S,
					isCheckboxSelected: i,
					toggleCheckbox: O
				}), o.a.createElement(v, null, o.a.createElement(P, null, o.a.createElement(F, null, s.postTitle && o.a.createElement(w, null, s.postTitle), s.postAuthor && o.a.createElement(b.a, {
					comment: s
				})), o.a.createElement(T, null, o.a.createElement(p.a, {
					comment: s
				}, o.a.createElement(N, null, o.a.createElement(f.a, {
					content: Object(k.a)(s),
					mediaMetadata: s.media && s.media.mediaMetadata,
					rtJsonElementProps: D(e)
				})), o.a.createElement(u.a, {
					comment: s,
					flair: a,
					subredditName: _ ? _.displayText : null
				}), j && o.a.createElement(h.a, {
					thing: s
				}), r && o.a.createElement(g.a, {
					onIgnoreReports: d,
					reportable: s
				}), E && !s.isDeleted && o.a.createElement(c.a, {
					comment: s
				}))))))
			}, "Component", y.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = s("./src/reddit/helpers/overlay/index.ts");
			const l = Object(a.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class c extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: s,
						...n
					} = this.props, a = n => e(() => n.metaKey || n.ctrlKey || 1 === n.button ? window.open(Object(r.a)(t, {
						context: 3
					})) : s(Object(r.a)(t, {
						context: 3
					})))(n);
					return o.a.createElement("div", {
						className: n.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && a(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && a(e)
						}
					}, n.children)
				}
			}
			t.a = l(Object(i.a)(c))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				i = s.n(r);
			const d = a.a.div("DashWrapper", i.a);
			t.a = e => null === e.comment.parentId ? o.a.createElement(d, null, e.children) : o.a.createElement(d, null, o.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				subredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				TopMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				topMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				Inline: "meK3ndVOmnvQt6wVaAg5W",
				inline: "meK3ndVOmnvQt6wVaAg5W",
				PostedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				postedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				TextContainer: "iV3Hb5JWIQSpA3WhioY-N",
				textContainer: "iV3Hb5JWIQSpA3WhioY-N"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				i = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				l = s.n(d),
				c = s("./src/lib/lessComponent.tsx");
			const m = c.a.wrapped(i.a, "Inline", l.a),
				p = c.a.wrapped(i.a, "PostedInfo", l.a),
				u = c.a.wrapped(i.a, "SubredditWrapper", l.a),
				b = c.a.div("TextContainer", l.a),
				h = c.a.wrapped(r.a, "TopMeta", l.a);
			t.a = e => a.a.createElement(m, {
				className: e.className
			}, e.subredditName && a.a.createElement(u, null, e.subredditName && a.a.createElement(b, null, e.subredditName)), a.a.createElement(p, null, a.a.createElement(b, null, `${n.fbt._("Commented by",null,{hk:"4Dveap"})}`), a.a.createElement(h, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				AuthorLink: "_2jljMb6FK7HnIb15zmm1of",
				authorLink: "_2jljMb6FK7HnIb15zmm1of",
				SubredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				subredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				TextContainer: "_2in6k_0-sFgKVz16hifq03",
				textContainer: "_2in6k_0-sFgKVz16hifq03",
				SubredditIcon: "uCjYZbKNai0INWGwHjoUh",
				subredditIcon: "uCjYZbKNai0INWGwHjoUh",
				Inline: "_2VWXAfRlnHG_4nydI7J4l3",
				inline: "_2VWXAfRlnHG_4nydI7J4l3"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/components/AuthorLink/index.tsx"),
				r = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				c = s.n(l),
				m = s("./src/lib/lessComponent.tsx");
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = m.a.wrapped(a.a, "AuthorLink", c.a), b = m.a.wrapped(d.a, "Inline", c.a), h = m.a.wrapped(d.a, "SubredditWrapper", c.a), x = m.a.div("TextContainer", c.a), g = m.a.wrapped(i.b, "SubredditIcon", c.a);
			t.a = e => o.a.createElement(b, null, e.subredditOrProfile && o.a.createElement(h, null, e.subredditOrProfile && o.a.createElement(g, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && o.a.createElement(x, null, e.subredditOrProfile.displayText)), p._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && o.a.createElement(r.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, o.a.createElement(u, {
				author: e.comment.postAuthor,
				isUnstyled: !0
			}, `u/${e.comment.postAuthor}`)))
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
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/lib/addQueryParams/index.ts"),
				_ = s("./src/lib/filterQueryParams/index.ts"),
				S = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/selectors/meta.ts"),
				y = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				I = s.n(y);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(n || (n = {}));
			const v = p.a.wrapped(S.b, "Row", I.a),
				P = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: j.j
				});
			var T = Object(i.b)(P)(e => r.a.createElement("div", null, r.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(_.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, r.a.createElement(v, {
					displayText: o.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), r.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(E.a)(Object(_.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: n.Posts
					})
				}, r.a.createElement(v, {
					displayText: o.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === n.Posts
				})), r.a.createElement(O.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(E.a)(Object(_.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: n.Comments
					})
				}, r.a.createElement(v, {
					displayText: o.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === n.Comments
				})))),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/controls/SearchBar/index.tsx"),
				F = s("./src/reddit/selectors/moderatorPermissions.ts"),
				L = s("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				M = s.n(L);
			const D = Object(N.u)({
					currentPageUrl: N.f
				}),
				A = Object(d.c)({
					moderatingSubreddits: F.n,
					origin: j.j
				}),
				B = Object(i.b)(A),
				W = p.a.div("DropdownContainer", M.a),
				R = p.a.div("SearchBarContainer", M.a),
				U = p.a.wrapped(S.b, "Row", M.a),
				Q = e => "user" === e.type ? {
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
					return r.a.createElement(W, {
						onClickCapture: this.stopPropagation
					}, r.a.createElement(R, null, r.a.createElement(w.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: o.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), r.a.createElement(O.a, {
						to: Object(_.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, r.a.createElement(U, {
						displayText: o.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = Q(t);
						return r.a.createElement(O.a, {
							key: t.id,
							to: Object(E.a)(Object(_.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), s)
						}, r.a.createElement(U, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var X = D(B(V)),
				q = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				H = s.n(q);
			const z = Object(m.a)(b.a),
				J = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				K = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				G = p.a.wrapped(g.a, "Inline", H.a),
				Z = p.a.div("Filter", H.a),
				Y = p.a.wrapped(h.a, "LayoutSwitch", H.a),
				$ = e => {
					switch (e) {
						case "allPostTypes":
							return o.fbt._("Posts and Comments", null, {
								hk: "2oWJdB"
							});
						case "allSubreddits":
							return o.fbt._("All subreddits", null, {
								hk: "OqzeW"
							});
						case "comments":
							return o.fbt._("Comments", null, {
								hk: "1a9mt8"
							});
						case "links":
							return o.fbt._("Posts", null, {
								hk: "fijEw"
							});
						case "searchPlaceholder":
							return o.fbt._("Find subreddit", null, {
								hk: "3yJKEz"
							})
					}
				},
				ee = Object(d.c)({
					isPostTypeFilterDropdownOpen: Object(k.b)(K),
					isSubredditFilterDropdownOpen: Object(k.b)(J),
					profile: (e, {
						profileName: t
					}) => t ? Object(C.j)(e, {
						profileName: t
					}) : null,
					subreddit: (e, {
						subredditName: t
					}) => t ? Object(f.x)(e, {
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
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(J), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(K), this.props.sendEventWithName("content_type")
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || o.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), s = e.postTypeFilter && $(e.postTypeFilter) || o.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					});
					return r.a.createElement(G, null, !e.hideSubredditFilter && r.a.createElement(r.a.Fragment, null, r.a.createElement(Z, {
						id: J,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, r.a.createElement(x.a, {
						name: "caret_down"
					})), r.a.createElement(z, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: J
					}, r.a.createElement(X, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), e.showTypeFilter && r.a.createElement("div", {
						className: Object(l.a)({
							[H.a.filterMargin]: !e.hideSubredditFilter
						})
					}, r.a.createElement(Z, {
						id: K,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, r.a.createElement(x.a, {
						name: "caret_down"
					})), r.a.createElement(z, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: K
					}, r.a.createElement(T, {
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
			var n = s("./node_modules/lodash/difference.js"),
				o = s.n(n),
				a = s("./node_modules/lodash/includes.js"),
				r = s.n(a),
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
				C = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				k = s("./src/reddit/components/PaginationButtons/index.m.less"),
				E = s.n(k);
			var _ = e => d.a.createElement(f.a, {
					className: E.a.buttonContainer
				}, d.a.createElement(C.s, {
					className: Object(g.a)(E.a.routerLink, {
						[E.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, x.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), d.a.createElement(C.s, {
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
				O = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/helpers/isPost.ts"),
				v = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				P = s("./src/lib/logs/console.ts"),
				T = s("./src/lib/objectSelector/index.ts"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				w = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				F = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				L = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				M = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				D = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				A = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				B = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				W = s("./src/reddit/components/ModModeReports/index.tsx"),
				R = s("./src/reddit/components/RichTextJson/index.tsx"),
				U = s("./src/reddit/components/VerticalVotes/index.tsx"),
				Q = s("./src/reddit/controls/Checkbox/index.tsx"),
				V = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				X = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				q = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				H = s.n(q);
			const z = p.a.div("LeftRail", H.a),
				J = p.a.wrapped(Q.a, "BulkActionCheckbox", H.a),
				K = p.a.div("CommentColumn", H.a),
				G = p.a.div("VoteColumn", H.a),
				Z = p.a.wrapped(N.a, "ModToolsFlatlist", H.a),
				Y = p.a.wrapped(U.a, "Votes", H.a),
				$ = p.a.div("CommentContentWrapper", H.a),
				ee = p.a.div("ParentPostTitle", H.a),
				te = p.a.div("CommentParentWrapper", H.a),
				se = Object(T.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var ne = Object(w.b)(e => {
					const {
						className: t,
						comment: s,
						commentPermalink: n,
						flair: o,
						isCheckboxSelected: a = !1,
						onIgnoreReports: r,
						onVoteClick: i,
						showModTools: l,
						subreddit: c,
						showBulkActionCheckbox: m,
						toggleCheckbox: p
					} = e, u = Object(B.d)(s), b = Object(h.c)(s);
					return d.a.createElement(F.a, {
						className: Object(g.a)(t, H.a.Component, H.a.UnthreadedCommentContainer, {
							[H.a.isBanned]: !!s.bannedBy,
							[H.a.isReported]: Object(X.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: n
					}, d.a.createElement(z, {
						className: Object(g.a)({
							[H.a.hasBorder]: !!s.bannedBy || Object(X.a)(s)
						})
					}, m && d.a.createElement(J, {
						isCheckboxSelected: a,
						toggleCheckbox: p
					})), d.a.createElement(G, null, d.a.createElement(Y, {
						compact: !1,
						model: s,
						onVoteClick: i,
						scoreClassName: H.a.score
					})), d.a.createElement(K, null, d.a.createElement(te, null, s.postTitle && d.a.createElement(ee, null, s.postTitle), s.postAuthor && d.a.createElement(D.a, {
						comment: s
					})), d.a.createElement($, null, d.a.createElement(L.a, {
						comment: s
					}, d.a.createElement(R.a, {
						content: Object(V.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: se(e)
					}), d.a.createElement(M.a, {
						comment: s,
						flair: o,
						subredditName: c ? c.displayText : null
					}), u && d.a.createElement(A.a, {
						thing: s
					}), b && d.a.createElement(W.a, {
						onIgnoreReports: r,
						reportable: s
					}), l && !s.isDeleted && d.a.createElement(Z, {
						comment: s
					})))))
				}),
				oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ae = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				re = s.n(ae);
			const ie = p.a.div("VoteSpacer", re.a),
				de = p.a.div("ContentWrapper", re.a),
				le = p.a.wrapped(M.a, "Meta", re.a),
				ce = p.a.div("CommentParentWrapper", re.a),
				me = p.a.div("CommentContentWrapper", re.a),
				pe = Object(T.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var ue = Object(w.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						commentPermalink: n,
						flair: o,
						hasReports: a,
						isCheckboxSelected: r = !1,
						onIgnoreReports: i,
						onVoteClick: l,
						showModTools: c,
						subreddit: m,
						showBulkActionCheckbox: p,
						toggleCheckbox: u
					} = e, b = Object(B.d)(s);
					return d.a.createElement(F.a, {
						className: t,
						clickTrackingId: s.id,
						permalink: n
					}, d.a.createElement(oe.a, {
						model: s,
						handleVote: l,
						showBulkActionCheckbox: p,
						isCheckboxSelected: r,
						toggleCheckbox: u
					}), d.a.createElement(ie, null, d.a.createElement(de, null, d.a.createElement(ce, null, s.postAuthor && d.a.createElement(D.a, {
						comment: s,
						subredditOrProfile: m
					}), s.postTitle && d.a.createElement(w.a, null, s.postTitle)), d.a.createElement(L.a, {
						comment: s
					}, d.a.createElement(me, null, d.a.createElement(R.a, {
						content: Object(V.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: pe(e)
					})), b && d.a.createElement(A.a, {
						thing: s
					}), a && d.a.createElement(W.a, {
						onIgnoreReports: i,
						reportable: s
					}), d.a.createElement(le, {
						comment: s,
						flair: o
					}))), c && !s.isDeleted && d.a.createElement(N.a, {
						comment: s
					})))
				}, "Component", re.a)),
				be = s("./src/reddit/constants/postLayout.ts");
			const he = {
					[be.g.Large]: ue,
					[be.g.Medium]: w.c,
					[be.g.Classic]: w.c,
					[be.g.Compact]: ne
				},
				xe = e => null;
			var ge = s("./src/reddit/models/Flair/index.ts"),
				Ce = s("./src/reddit/models/Media/index.ts"),
				fe = s("./src/reddit/models/ModQueue/index.ts"),
				ke = s("./src/reddit/selectors/meta.ts"),
				Ee = s("./src/reddit/selectors/modQueue.ts"),
				_e = s("./src/reddit/selectors/subreddit.ts"),
				Se = s("./src/config.ts"),
				Oe = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				je = s.n(Oe);
			const {
				fbt: ye
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = `${Se.a.assetPath}/img/snoomoji/cat_blep.png`, ve = p.a.div("Container", je.a), Pe = p.a.div("Image", je.a), Te = p.a.div("Title", je.a), Ne = p.a.div("Text", je.a);
			var we = () => d.a.createElement(ve, null, d.a.createElement(Pe, {
					style: {
						backgroundImage: `url(${Ie})`
					}
				}), d.a.createElement(Te, null, ye._("The queue is clean!", null, {
					hk: "3d14fC"
				})), d.a.createElement(Ne, null, ye._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Fe = s("./src/reddit/components/PostList/Placeholder.tsx");
			const Le = Object(j.u)(),
				Me = Object(c.c)({
					layout: j.R
				});
			var De = Le(Object(l.b)(Me)(e => d.a.createElement(Fe.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Ae = s("./node_modules/lodash/flatten.js"),
				Be = s.n(Ae),
				We = s("./src/reddit/actions/tooltip.ts"),
				Re = s("./src/reddit/icons/fonts/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				Qe = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Xe = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				qe = s("./src/higherOrderComponents/asTooltip.tsx"),
				He = s("./src/reddit/actions/modal.ts"),
				ze = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Je = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Ke = s("./src/reddit/controls/Dropdown/index.tsx"),
				Ge = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Ze = s("./src/reddit/helpers/flair.ts"),
				Ye = s("./src/reddit/selectors/activeModalId.ts"),
				$e = s("./src/reddit/selectors/moderatorPermissions.ts"),
				et = s("./src/reddit/selectors/postFlair.ts"),
				tt = s("./src/reddit/selectors/posts.ts"),
				st = s("./src/reddit/selectors/tooltip.ts"),
				nt = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ot = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				at = s.n(ot);
			const rt = e => d.a.createElement("button", {
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
				dt = Object(l.b)(it, e => ({
					onIgnoreReports: () => e(Object(u.f)(fe.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(fe.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(fe.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(fe.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(fe.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(fe.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(fe.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(fe.a.Unspoiler))
				})),
				lt = e => e.some(e => Object(y.a)(e));
			var ct = Object(qe.a)(dt(Object(nt.c)(e => d.a.createElement("div", {
				className: Object(g.a)(at.a.StatusList, e.className),
				style: e.style
			}, d.a.createElement("div", {
				className: at.a.StatusContainer
			}, d.a.createElement(rt, {
				onClick: e.onIgnoreReports,
				buttonText: x.fbt._("Ignore Reports", null, {
					hk: "1hZ3hN"
				})
			}), d.a.createElement(rt, {
				onClick: e.onUnignoreReports,
				buttonText: x.fbt._("Unignore Reports", null, {
					hk: "3y089p"
				})
			}), d.a.createElement(rt, {
				isDisabled: lt(e.selectedItems),
				onClick: e.onLock,
				buttonText: x.fbt._("Lock", null, {
					hk: "4bc0vl"
				})
			}), d.a.createElement(rt, {
				isDisabled: lt(e.selectedItems),
				onClick: e.onUnlock,
				buttonText: x.fbt._("Unlock", null, {
					hk: "Pe2ML"
				})
			}), d.a.createElement(rt, {
				isDisabled: lt(e.selectedItems),
				onClick: e.onSpoiler,
				buttonText: x.fbt._("Mark as Spoiler", null, {
					hk: "4pIu4V"
				})
			}), d.a.createElement(rt, {
				isDisabled: lt(e.selectedItems),
				onClick: e.onUnspoiler,
				buttonText: x.fbt._("Unmark as Spoiler", null, {
					hk: "1ImDYd"
				})
			}), d.a.createElement(rt, {
				isDisabled: lt(e.selectedItems),
				onClick: e.onMarkNSFW,
				buttonText: x.fbt._("Mark as NSFW", null, {
					hk: "4yS4Hz"
				})
			}), d.a.createElement(rt, {
				isDisabled: lt(e.selectedItems),
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
			var pt = Object(l.b)(mt)(Object(nt.c)(e => {
					const {
						className: t,
						isDropdownOpen: s,
						tooltipId: n
					} = e;
					return d.a.createElement("div", {
						id: n,
						className: t
					}, d.a.createElement(ct, {
						isOpen: s,
						tooltipId: n
					}))
				})),
				ut = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				bt = s.n(ut);
			const ht = "BulkAction--BulkItemFilter",
				xt = "BulkActions--PostFlair--Modal",
				gt = Object(qe.a)(Ke.a),
				Ct = e => d.a.createElement(Ge.b, {
					className: Object(g.a)(bt.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				ft = Object(c.c)({
					activeModalId: Ye.a,
					dropdownIsOpen: Object(st.b)(ht),
					flairData: et.d,
					isApiPending: Ee.a,
					moderatorPermissions: $e.m,
					posts: tt.J,
					selectedItems: Ee.f
				}),
				kt = Object(l.b)(ft, e => ({
					onApprove: () => e(Object(u.f)(fe.a.Approve)),
					onFlair: (t, s) => e(Object(u.f)(fe.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(We.h)({
						tooltipId: ht
					})),
					onOpenModToolsDropdown: () => e(Object(We.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(u.f)(fe.a.Remove)),
					onSpam: () => e(Object(u.f)(fe.a.Spam)),
					onToggleFlairModal: () => e(Object(He.i)(xt))
				})),
				Et = (e, t) => {
					const s = Be()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const n = [];
					return s.forEach(e => {
						if (e.type === ge.f.Text || e.type === ge.f.Richtext) {
							const t = Object(Ze.g)(e);
							r()(n, t) || n.push(t)
						}
					}), n.length > 1 ? [{
						type: ge.f.Text,
						text: x.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var _t = kt(e => {
					const {
						activeModalId: t,
						className: s,
						endNumItems: n,
						flairData: o,
						isAnyItemSelected: a,
						isApiPending: r,
						moderatorPermissions: l,
						numSelected: c,
						numShowing: m,
						onApprove: p,
						onFlair: u,
						onRemove: b,
						onSpam: h,
						onToggleFlairModal: C,
						posts: f,
						selectedItems: k,
						startNumItems: E,
						subredditId: _,
						toggleSelectAll: S,
						toggleSelectByFilter: O
					} = e, j = [{
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
					}], y = l && l.flair, I = _ && o && o.displaySettings.isEnabled && y && !lt(k);
					return d.a.createElement("div", {
						className: Object(g.a)(bt.a.ModToolsBulkOperations, s)
					}, d.a.createElement("div", {
						className: bt.a.CheckboxContainer,
						id: ht
					}, d.a.createElement(Q.a, {
						className: bt.a.Checkbox,
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: S
					}), d.a.createElement(Re.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), d.a.createElement(gt, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: ht
					}, j.map(e => d.a.createElement(Ct, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => O(e.filterType)
					})))), a && d.a.createElement(i.Fragment, null, d.a.createElement(Je.c, {
						className: bt.a.Button,
						disabled: r,
						text: x.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, d.a.createElement(Ue.a, null)), d.a.createElement(Je.c, {
						className: bt.a.Button,
						disabled: r,
						text: x.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, d.a.createElement(Qe.a, null)), d.a.createElement(Je.c, {
						className: bt.a.Button,
						disabled: r,
						text: x.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, d.a.createElement(Ve.a, null)), d.a.createElement(Je.c, {
						className: bt.a.Button,
						disabled: r,
						onClick: e.onOpenModToolsDropdown
					}, d.a.createElement(pt, {
						tooltipId: "BulkActions--ModTools"
					}), d.a.createElement(Re.a, {
						name: "list_bulleted"
					})), d.a.createElement("div", null, I && d.a.createElement(Je.c, {
						disabled: r,
						onClick: C,
						className: bt.a.Button
					}, d.a.createElement(Xe.a, null)))), a && _ && t === xt && d.a.createElement(ze.a, {
						flairs: Et(k, f),
						modalId: xt,
						onFlairChanged: ({
							previewFlair: e,
							selectedTemplateId: t
						}) => {
							u(e, t)
						},
						subredditId: _
					}), m > 0 && d.a.createElement("div", {
						className: bt.a.Text
					}, d.a.createElement("span", {
						className: bt.a.right
					}, x.fbt._("Items {startNumItems}-{endNumItems}", [x.fbt._param("startNumItems", `${E}`), x.fbt._param("endNumItems", `${n}`)], {
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
				Ot = s("./src/reddit/components/ModQueueList/index.m.less"),
				jt = s.n(Ot);
			const yt = e => Object(I.a)(e.id),
				It = p.a.div("ItemContainer", jt.a),
				vt = p.a.div("ButtonContainer", jt.a),
				Pt = Object(j.u)({
					currentProfileName: j.i,
					isCommentPermalink: j.w,
					isCommentsPage: j.x,
					isFrontpage: j.A,
					isProfilePostListing: j.L,
					isTopicPage: j.Q,
					queryParams: j.W,
					pageLayer: e => e
				}),
				Tt = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: Ee.b,
					loadMore: Ee.d,
					modQueueListingItems: Ee.c,
					origin: ke.j,
					selectedItems: Ee.f,
					subredditId: (e, t) => t.subredditName ? Object(_e.D)(e, t.subredditName) : null
				}),
				Nt = Object(l.b)(Tt, e => ({
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
				wt = e => e.page ? parseInt(e.page, 10) : fe.b,
				Ft = e => wt(e) + 1,
				Lt = e => Math.max(fe.b, wt(e) - 1),
				Mt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return wt(e) === fe.b ? t : 25 * Lt(e) + t
				},
				Dt = e => wt(e) === fe.b ? fe.b : 25 * Lt(e) + 1;
			var At;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(At || (At = {}));
			class Bt extends d.a.Component {
				constructor() {
					super(...arguments), this.isCheckboxSelected = e => r()(this.props.selectedItems, e), this.isAllSelected = e => {
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
									Object(I.a)(e.id) && t.push(e.id)
								});
								break;
							case At.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(y.a)(e.id) && t.push(e.id)
								});
								break;
							case At.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case At.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(I.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== ge.f.Spoiler && e.type !== ge.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case At.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(I.a)(e.id)) {
										const s = e;
										s.media && s.media.type === Ce.o.TEXT && t.push(s.id)
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
							if (yt(t)) {
								const n = t,
									o = Object(v.b)({
										layout: e.layout,
										post: n
									});
								return d.a.createElement(It, {
									key: s
								}, d.a.createElement(o, {
									availableWidth: O.g,
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
									onClickPost: Object(S.b)(n.id, e),
									showBulkActionCheckbox: !0,
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(n.id), [n.id]),
									shouldShowGalleryTileOption: !0,
									isGalleryTileLayoutDefault: !0
								}))
							}
							const n = function(e, t) {
								const s = he[t];
								return void 0 === s ? (Object(P.a)(void 0, `Could not find component for layout ${t}.`), xe) : s
							}(0, e.layout);
							return d.a.createElement(It, {
								key: s
							}, d.a.createElement(St.a, {
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
						})), d.a.createElement("div", null, d.a.createElement("div", null, t), d.a.createElement(vt, null, d.a.createElement(_, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Lt(e),
								after: null
							}),
							nextButtonEnabled: n,
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
					return d.a.createElement("div", null, d.a.createElement(_t, {
						endNumItems: Mt(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Dt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? d.a.createElement(we, null) : e.isModQueueListingPending ? d.a.createElement(De, null) : null)
				}
			}
			t.a = Pt(Nt(Bt))
		},
		"./src/reddit/components/PaginationButtons/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_1kLu6euoyZ3I2dqDVrxoZD",
				routerLink: "_3k7SslJt4xhPIXKtoe8DFf",
				mDisabled: "_1VgBJV1BqaXyZVPBXEv-KC"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return O
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/helpers/trackers/postComposer.ts"),
				C = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/selectors/postFlair.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				_ = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				S = s.n(_);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const O = (e, t = !1, s = n.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${s}]`,
				j = Object(d.c)({
					flairData: f.d,
					subreddit: k.S
				});
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(g.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(g.b)()), this.setSelectedFlair(null)
					}, this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					};
					const t = Object(E.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(E.c)(this.props.flairs) || null;
					return Object(E.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: a
					} = e, i = a.displayText, {
						templates: d,
						templateIds: l
					} = n, {
						canSave: c
					} = this.canSave();
					return r.a.createElement(u.a, {
						className: s
					}, r.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), r.a.createElement(b.a, {
						flair: t,
						flairTemplateType: C.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), r.a.createElement(h.a, {
						flair: t,
						flairTemplateType: C.d.LinkFlair,
						subredditId: a.id,
						templates: d,
						templateIds: l,
						onChange: this.setSelectedFlair
					}), r.a.createElement("div", {
						className: S.a.buttonsRow
					}, r.a.createElement(x.l, {
						disabled: !c,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), r.a.createElement(x.o, {
						className: S.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(i.b)(j, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(y);
			t.a = Object(c.a)(Object(l.c)(I))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				l = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					isOverlay: g,
					isVoteCountAnimation: C,
					postId: f,
					shouldShowUpvoteRatioOnHover: k
				} = e, E = `upvote-button-${t.id}${g?"-overlay":""}`;
				return o.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(l.b)(t) && t.isSponsored,
					redditStyle: x
				}, n && o.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: E,
					isVoteCountAnimation: C,
					isCountAnimShadowTestEnabled: u,
					postId: f,
					scoreClassName: Object(a.a)(p.a.score, {
						[p.a.allowPointerEvents]: k
					}),
					shouldShowUpvoteRatioOnHover: k
				}))
			}
		},
		"./src/reddit/components/Widgets/ModSupportLinks/index.m.less": function(e, t, s) {
			e.exports = {
				ExternalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				externalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				InternalLink: "_3OMHgk6-gSH2TqxSTFsOXZ",
				internalLink: "_3OMHgk6-gSH2TqxSTFsOXZ"
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(i);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(r.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(a.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				g = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				C = s.n(g);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => Object(d.a)(C.a.iconStyles, e.className, {
					[C.a.mRedditStyle]: e.redditStyle
				}),
				E = ({
					className: e,
					redditStyle: t,
					...s
				}) => a.a.createElement(h.a, f({
					name: "view_compact",
					className: k({
						className: e,
						redditStyle: t
					})
				}, s)),
				_ = ({
					className: e,
					redditStyle: t,
					...s
				}) => a.a.createElement(h.a, f({
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
				}) => a.a.createElement(h.a, f({
					name: "view_card",
					className: k({
						className: e,
						redditStyle: t
					})
				}, s)),
				O = ({
					isActive: e,
					...t
				}) => a.a.createElement("button", f({
					className: Object(d.a)(C.a.layoutButton, {
						[C.a.mIsActive]: e
					})
				}, t)),
				j = Object(b.u)(),
				y = Object(i.c)({
					postLayout: b.R,
					redditStyle: b.D
				}),
				I = Object(r.b)(y, e => ({
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
			t.a = j(I(Object(p.c)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, o = e.layout || u.e[e.postLayout];
				return a.a.createElement("div", {
					className: Object(d.a)(C.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, a.a.createElement("div", {
					className: C.a.title
				}, n.fbt._("View", null, {
					hk: "18a931"
				})), a.a.createElement("div", {
					className: C.a.iconContainer
				}, (() => [{
					layout: u.d.Card,
					Icon: S,
					text: n.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: u.d.Classic,
					Icon: _,
					text: n.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: u.d.Compact,
					Icon: E,
					text: n.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(n => {
					const r = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(x.bb)(e),
								subreddit: Object(x.jb)(e)
							})))
						})(n.layout),
						i = () => e.toggleTooltip(d),
						d = "layoutSwitch--" + n.layout,
						c = n.layout === o;
					return a.a.createElement(O, {
						"aria-label": n.text,
						"aria-pressed": c,
						id: d,
						isActive: c,
						key: n.layout,
						onClick: r,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: r
					}, a.a.createElement(n.Icon, {
						onClick: c ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle,
						isFilled: c
					}), a.a.createElement(l.c, {
						tooltipId: d,
						text: n.text
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Search/index.tsx"),
				i = s("./src/reddit/controls/SearchBar/index.m.less"),
				d = s.n(i);
			t.a = e => o.a.createElement("div", {
				className: Object(a.a)(d.a.searchContainer, e.className)
			}, o.a.createElement("input", {
				className: Object(a.a)(d.a.search, {
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
				className: Object(a.a)(d.a.searchIconContainer, {
					[d.a.mClickable]: !!e.onSearch,
					[d.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, o.a.createElement(r.a, null)))
		},
		"./src/reddit/pages/ModQueuePages/index.m.less": function(e, t, s) {
			e.exports = {
				navContainer: "_2fXn_K-CtsU5UyENumO_L5",
				innerContainer: "D4pTlu3VV6Kg_fC6HNcGD",
				mDisableFullScreen: "_3ZorTtV7KSImN0_z0ufG7H",
				title: "_1m63Tp27qAqd29Jg_JFZLD",
				navChild: "mhX_cNPq9TYWEg2o5OfDb",
				mIsActive: "_3qryNXFOCTdHneRR0QlSzp",
				sidebar: "_2mohSnAqr6vkIYT6O-pVcP"
			}
		},
		"./src/reddit/pages/ModQueuePages/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				c = s("./src/reddit/components/ModQueueList/index.tsx"),
				m = s("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/layout/page/Listing/index.tsx"),
				x = s("./src/reddit/models/ModQueue/index.ts"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./node_modules/fbt/lib/FbtPublic.js"),
				k = s("./src/lib/classNames/index.ts"),
				E = s("./node_modules/lodash/omit.js"),
				_ = s.n(E),
				S = s("./src/lib/addQueryParams/index.ts"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/pages/ModQueuePages/index.m.less"),
				y = s.n(j);
			const I = Object(d.c)({
				currentPage: e => e.platform.currentPage
			});
			var v = Object(i.b)(I)(e => r.a.createElement(O.a, {
				className: Object(k.a)(y.a.navChild, {
					[y.a.mIsActive]: e.isActive
				}),
				to: Object(S.a)(`/r/mod/about/${e.pathName}`, _()(e.currentPage.queryParams, ["after", "before", "page"]))
			}, e.title));
			var P = e => r.a.createElement("div", {
					className: y.a.navContainer
				}, r.a.createElement("div", {
					className: Object(k.a)(y.a.innerContainer, {
						[y.a.mDisableFullScreen]: e.disableFullscreen
					})
				}, r.a.createElement("h1", {
					className: y.a.title
				}, f.fbt._("Moderation", null, {
					hk: "ldaHk"
				})), r.a.createElement(v, {
					title: f.fbt._("Queue", null, {
						hk: "2oFkyk"
					}),
					isActive: "modqueue" === e.pageName,
					pathName: "modqueue"
				}), r.a.createElement(v, {
					title: f.fbt._("Reports", null, {
						hk: "4ea70R"
					}),
					isActive: "reports" === e.pageName,
					pathName: "reports"
				}), r.a.createElement(v, {
					title: f.fbt._("Spam", null, {
						hk: "Ho2UJ"
					}),
					isActive: "spam" === e.pageName,
					pathName: "spam"
				}), r.a.createElement(v, {
					title: f.fbt._("Edited", null, {
						hk: "40RqNB"
					}),
					isActive: "edited" === e.pageName,
					pathName: "edited"
				}), r.a.createElement(v, {
					title: f.fbt._("Unmoderated", null, {
						hk: "2YBI6E"
					}),
					isActive: "unmoderated" === e.pageName,
					pathName: "unmoderated"
				}))),
				T = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				N = s("./src/config.ts"),
				w = s("./src/lib/lessComponent.tsx"),
				F = s("./src/lib/opener/index.ts"),
				L = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				M = s("./src/reddit/components/Widgets/ModSupportLinks/index.m.less"),
				D = s.n(M);
			const A = w.a.a("ExternalLink", D.a),
				B = w.a.wrapped(O.a, "InternalLink", D.a);
			var W = () => r.a.createElement(L.a, {
				title: f.fbt._("Moderator resources", null, {
					hk: "1i4sLY"
				}),
				redditStyle: !0
			}, r.a.createElement(A, {
				href: N.a.redditModHelpUrl,
				rel: F.c,
				target: F.d.BLANK
			}, f.fbt._("Mod help center", null, {
				hk: "1LSJPB"
			})), r.a.createElement(A, {
				href: `${N.a.redditUrl}/help/healthycommunities/`,
				rel: F.c,
				target: F.d.BLANK
			}, f.fbt._("Moderator guidelines", null, {
				hk: "15P5n5"
			})), r.a.createElement(B, {
				to: "/r/modsupport",
				rel: F.c,
				target: F.d.BLANK
			}, "r/modsupport"), r.a.createElement(A, {
				href: `${N.a.redditHelpUrl}/en/submit-request/rusername`,
				rel: F.c,
				target: F.d.BLANK
			}, f.fbt._("Contact Reddit", null, {
				hk: "43QJTq"
			})));
			var R = e => r.a.createElement("div", {
				className: y.a.sidebar
			}, e.subredditOrProfileUrl && r.a.createElement(T.a, null, r.a.createElement(L.a, {
				title: f.fbt._("Moderation", null, {
					hk: "K4118"
				})
			}, r.a.createElement(A, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/about/log/`,
				target: "_blank"
			}, f.fbt._("Moderation Log", null, {
				hk: "4CyDRz"
			})), r.a.createElement(A, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/wiki/config/automoderator`,
				target: "_blank"
			}, f.fbt._("Automoderator Config", null, {
				hk: "2GBjtX"
			})))), r.a.createElement(T.a, null, r.a.createElement(W, null)));
			const U = Object(b.u)(),
				Q = Object(d.c)({
					queryParams: (e, {
						location: t
					}) => o()([...Object(l.a)(t.search)])
				}),
				V = Object(d.a)(Q, b.R, g.n, (e, {
					match: t
				}) => t.params.pageName, ({
					queryParams: e
				}, t, s, n) => {
					const o = e.subreddit,
						a = e.profile,
						r = e.only,
						i = `${e.page||x.b}`;
					return {
						after: e.after || "",
						layout: t,
						isModerator: s.length > 0,
						page: i,
						pageName: n,
						postTypeFilter: r,
						profileName: a,
						subredditName: o
					}
				}),
				X = Object(i.b)(V);
			class q extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: "bulk_mod_action",
						action: "click",
						noun: e,
						screen: Object(C.bb)(t)
					}))
				}
				render() {
					const {
						after: e,
						className: t,
						isModerator: s,
						layout: n,
						page: o,
						pageName: a,
						profileName: i,
						postTypeFilter: d,
						subredditName: l
					} = this.props, p = l && `r/${l}` || i && `user/${i}`, b = "unmoderated" !== a, x = b ? d : void 0;
					return r.a.createElement("div", null, s && r.a.createElement(h.a, {
						className: t,
						fitPageToContent: !0,
						disableFullscreen: n === u.g.Large,
						navBar: r.a.createElement(P, {
							disableFullscreen: n === u.g.Large,
							pageName: a
						}),
						content: r.a.Children.toArray([r.a.createElement(m.a, {
							key: i,
							postTypeFilter: x,
							profileName: i,
							sendEventWithName: this.sendEventWithName,
							showTypeFilter: b,
							subredditName: l
						}), r.a.createElement(c.a, {
							after: e,
							key: `${i}-${l}`,
							layout: n,
							page: o,
							pageName: a,
							postTypeFilter: x,
							profileName: i,
							sendEventWithName: this.sendEventWithName,
							subredditName: l
						})]),
						sidebar: r.a.createElement(R, {
							subredditOrProfileUrl: p
						})
					}))
				}
			}
			t.default = U(X(Object(p.c)(q)))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages.5276d72b9aaffa903829.js.map