// https://www.redditstatic.com/desktop2x/CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.4048e844925c75ae1c5e.js
// Retrieved at 9/26/2022, 1:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"], {
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = n("./src/redditGQL/operations/UpdateSubredditMuteSettings.json"),
				c = n("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json");
			const l = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(o.a)(e, {
					...i,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var p = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/subreddit/constants.ts"),
				b = n("./src/reddit/actions/subreddit/notifications.ts");
			const h = e => Object(a.f)({
					id: e,
					kind: p.b.Error,
					text: s.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				f = (e, t) => Object(a.f)({
					kind: p.b.SuccessCommunityGreen,
					text: s.fbt._("Muted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					buttonText: s.fbt._("Undo", null, {
						hk: "1lx02Y"
					}),
					buttonAction: t
				}),
				w = (e, t) => Object(a.f)({
					kind: p.b.SuccessCommunityGreen,
					text: s.fbt._("Unmuted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					buttonText: s.fbt._("Undo", null, {
						hk: "2siioQ"
					}),
					buttonAction: t
				}),
				k = Object(r.a)(m.C),
				S = (Object(r.a)(m.f), Object(r.a)(m.B), e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, a) => {
						let {
							gqlContext: o
						} = a;
						if ((await l(o(), t)).ok) s && s(), f(n, g({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				}),
				g = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, a) => {
						let {
							gqlContext: o
						} = a;
						if ((await u(o(), t)).ok) s && s(), w(n, S({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				_ = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, a) => {
						let {
							gqlContext: o
						} = a;
						if ((await l(o(), t)).ok) s && s(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(f(n, y({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				y = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, a) => {
						let {
							gqlContext: o
						} = a;
						if ((await u(o(), t)).ok) s && s(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(w(n, _({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				O = e => {
					let {
						subredditId: t,
						notificationLevel: n
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: d
						} = i;
						const l = Object(b.a)(n);
						(await ((e, t, n) => Object(o.a)(e, {
							...c,
							variables: {
								input: {
									...n,
									subredditId: t
								}
							}
						}))(d(), t, l)).ok ? (e(k({
							subredditId: t,
							notificationLevel: n
						})), e(Object(a.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(b.b)(n)
						}))) : e(Object(a.f)({
							kind: p.b.Error,
							text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return w
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = n("./src/reddit/actions/notificationsInbox/index.ts"),
				i = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const p = Object(r.a)(i.v),
				m = Object(r.a)(i.u),
				b = Object(r.a)(i.t),
				h = e => {
					switch (e) {
						case l.b.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.b.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.b.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				f = e => {
					switch (e) {
						case l.b.OFF:
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.b.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.b.LOW:
							return s.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const w = e => {
				let {
					subredditId: t,
					notificationLevel: n,
					successCallback: r,
					undoCallback: i
				} = e;
				return async (e, l, w) => {
					let {
						gqlContext: k
					} = w;
					var S, g, _;
					e(m());
					const y = h(n),
						O = await Object(c.b)(k(), t, y);
					if ((null === (g = null === (S = O.error) || void 0 === S ? void 0 : S.fields) || void 0 === g ? void 0 : g.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(O.body) && (null === (_ = O.body.data.updateSubredditNotificationSettings.errors) || void 0 === _ ? void 0 : _.length)) return e(b()), e(Object(d.f)({
						kind: u.b.Error,
						text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					O.ok && (e(Object(a.c)({
						subredditId: t,
						notificationLevel: n
					})), e(p({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: n
							}
						}
					})), r && r(), e(i ? Object(d.f)(Object(d.e)(f(n), u.b.Undo, s.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(o.i)(t, i))) : Object(d.f)(Object(d.e)(f(n), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/BackToTop/index.m.less"),
				c = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(o.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: s
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(t, c.a.container),
					style: s
				}, r.a.createElement(i.l, {
					className: c.a.button,
					onClick: () => u(n)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				w = n("./src/reddit/controls/Dropdown/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/reddit/selectors/tooltip.ts"),
				y = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				O = n.n(y);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = "view--layout--FUE",
				N = "LayoutSwitch--picker",
				E = Object(d.a)(w.a),
				v = {
					[b.d.Card]: function(e) {
						return a.a.createElement(S.a, C({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return a.a.createElement(S.a, C({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return a.a.createElement(S.a, C({}, e, {
							name: "view_compact"
						}))
					}
				},
				j = {
					[b.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => s.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				T = Object(h.u)(),
				D = Object(i.c)({
					dropdownIsOpen: Object(_.b)(N),
					postLayout: h.S,
					redditStyle: h.D
				}),
				I = Object(o.b)(D, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: N
					}))
				}));
			class L extends a.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: s,
							subredditId: r
						} = this.props;
						t ? t(e) : (n(e, r), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(g.bb)(t),
							subreddit: Object(g.jb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: s,
							postLayout: r
						} = this.props, o = n || b.e[r], i = e === o, d = v[e], l = j[e];
						return a.a.createElement(k.b, C({}, t, {
							className: Object(c.a)(O.a.LayoutItem, {
								[O.a.selected]: i,
								[O.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: O.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: O.a.LayoutItemTextClassName
						}), a.a.createElement(d, {
							className: O.a.LayoutIcon,
							onClick: i ? void 0 : s,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return a.a.createElement(E, C({}, e, {
							className: O.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: O.a.DropdownRow,
							rowIconClassName: O.a.DropdownRowIcon,
							rowSelectedClassName: O.a.DropdownRowSelected,
							tooltipId: N
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: s
					} = this.props, r = t || b.e[s];
					return a.a.createElement("div", {
						className: Object(c.a)(O.a.Container, e),
						id: x
					}, a.a.createElement("div", {
						className: O.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: N,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), a.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(I(Object(m.c)(Object(l.a)(L))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				d = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				m = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				b = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				w = n("./src/reddit/actions/tooltip.ts"),
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				S = n("./src/higherOrderComponents/asTooltip.tsx"),
				g = n("./src/reddit/constants/history.ts"),
				_ = n("./src/reddit/constants/listingSorts.ts"),
				y = n("./src/reddit/contexts/Tooltip.ts"),
				O = n("./src/reddit/controls/Dropdown/index.tsx"),
				C = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/helpers/path/index.ts"),
				N = n("./src/reddit/helpers/trackers/navigation.ts"),
				E = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				T = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = n("./src/reddit/components/ListingSort/index.m.less"),
				B = n.n(L),
				P = n("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const A = "ListingSort--SortPicker",
				F = Object(S.a)(P.a.wrapped(O.a, "Dropdown", B.a)),
				H = P.a.wrapped(I.a, "ListingSortIcon", B.a),
				U = (P.a.wrapped(E.b, "DropdownTriangle", B.a), P.a.div("Title", B.a)),
				W = P.a.wrapped(e => r.a.createElement(C.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", B.a),
				G = e => {
					let {
						disabled: t,
						...n
					} = e;
					return r.a.createElement("div", R({}, n, {
						className: Object(o.a)(B.a.SortWrapper, n.className, {
							[B.a.isDisabled]: t
						})
					}))
				},
				M = P.a.div("DropdownRowDisabled", B.a),
				z = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Y = Object(f.c)({
					isAwardListingExperimentEnabled: j.a,
					isBestSortPopularEnabled: v.a,
					user: D.k,
					dropdownIsOpen: (e, t) => Object(T.b)(t.dropdownId || A)(e),
					isPopularPage: l.F
				}),
				K = Object(a.b)(Y, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: s
					} = t;
					return {
						onOpenDropdown: () => e(Object(w.h)({
							tooltipId: n || A
						}))
					}
				});
			var q = P.a.wrapped(z(K(Object(c.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(U, null, k.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(G, {
					disabled: e.disabled
				}, e.children || r.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(_.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, r.a.createElement(H, {
					sort: e.sort
				}))), r.a.createElement(y.a.Consumer, null, t => r.a.createElement(F, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(M, null, k.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, s, r) => {
					const a = [b.ab.HOT, b.ab.NEW, b.ab.TOP, b.ab.RISING];
					return (e && (n || s) || t && s) && a.unshift(b.ab.BEST), t && r && a.splice(3, 0, b.ab.AWARDED), a
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(m.a)(e.baseUrl, {
							sort: t
						}) : Object(x.a)(e.baseUrl, `${t}/`),
						s = n.split("?")[0],
						a = e.isProfilePage ? n.replace(s + "?", "") : void 0;
					return r.a.createElement(C.b, {
						className: Object(o.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(_.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(N.b)(t))
						},
						href: {
							pathname: s,
							state: {
								[g.b.FeedLoadReason]: g.a.SortChange
							},
							search: a
						},
						isSelected: e.sort === t,
						key: t
					}, r.a.createElement(H, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", B.a),
				V = n("./src/reddit/constants/parameters.ts");
			const J = e => {
					const t = Q[e];
					return t && t() || ""
				},
				Q = {
					[b.kc.AllStates]: () => k.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.kc.Alaska]: () => k.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.kc.Alabama]: () => k.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.kc.Arkansas]: () => k.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.kc.Arizona]: () => k.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.kc.California]: () => k.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.kc.Colorado]: () => k.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.kc.Connecticut]: () => k.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.kc.DistrictOfColumbia]: () => k.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.kc.Delaware]: () => k.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.kc.Florida]: () => k.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.kc.Georgia]: () => k.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.kc.Hawaii]: () => k.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.kc.Iowa]: () => k.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.kc.Idaho]: () => k.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.kc.Illinois]: () => k.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.kc.Indiana]: () => k.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.kc.Kansas]: () => k.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.kc.Kentucky]: () => k.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.kc.Louisiana]: () => k.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.kc.Massachusetts]: () => k.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.kc.Maryland]: () => k.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.kc.Maine]: () => k.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.kc.Michigan]: () => k.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.kc.Minnesota]: () => k.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.kc.Missouri]: () => k.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.kc.Mississippi]: () => k.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.kc.Montana]: () => k.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.kc.NorthCarolina]: () => k.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.kc.NorthDakota]: () => k.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.kc.Nebraska]: () => k.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.kc.NewHampshire]: () => k.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.kc.NewJersey]: () => k.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.kc.NewMexico]: () => k.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.kc.Nevada]: () => k.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.kc.NewYork]: () => k.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.kc.Ohio]: () => k.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.kc.Oklahoma]: () => k.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.kc.Oregon]: () => k.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.kc.Pennsylvania]: () => k.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.kc.RhodeIsland]: () => k.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.kc.SouthCarolina]: () => k.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.kc.SouthDakota]: () => k.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.kc.Tennessee]: () => k.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.kc.Texas]: () => k.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.kc.Utah]: () => k.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.kc.Virginia]: () => k.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.kc.Vermont]: () => k.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.kc.Washington]: () => k.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.kc.Wisconsin]: () => k.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.kc.WestVirginia]: () => k.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.kc.Wyoming]: () => k.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var X = n("./src/reddit/components/StateSort/index.m.less"),
				Z = n.n(X);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = P.a.wrapped(O.a, "_Dropdown", Z.a),
				te = Object(S.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && re(e) === b.B.UnitedStates
				},
				se = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return b.kc.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				ae = e => {
					const t = re(e),
						n = se(e);
					return ne(e) ? `${t}_${n}` : t
				},
				oe = Object(l.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(T.b)("StateSort--StateSortPicker")
				}),
				de = Object(a.b)(ie, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(d.w)(b.B.UnitedStates + "_" + n))
					}
				}));
			var ce = P.a.wrapped(oe(de(e => {
				const t = `${e.baseUrl}?${V.g}=${b.B.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(G, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(W, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : J(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(y.a.Consumer, null, n => r.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.kc).map(n => {
					const s = b.kc[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.kc.AllStates ? t : `${t}_${e}`)(s), ae(s))
					}, r.a.createElement(C.b, {
						className: Object(o.a)(e.rowClassName, e.sort === s ? e.rowSelectedClassName : void 0),
						displayText: J(s),
						isSelected: e.sort === s
					}))
				}))))
			})), "Component", Z.a);
			const le = {
				[b.B.Everywhere]: () => k.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.B.UnitedStates]: () => k.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.B.Argentina]: () => k.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.B.Australia]: () => k.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.B.Bulgaria]: () => k.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.B.Canada]: () => k.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.B.Chile]: () => k.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.B.Colombia]: () => k.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.B.Croatia]: () => k.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.B.CzechRepublic]: () => k.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.B.Finland]: () => k.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.B.France]: () => k.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.B.Germany]: () => k.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.B.Greece]: () => k.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.B.Hungary]: () => k.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.B.Iceland]: () => k.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.B.India]: () => k.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.B.Ireland]: () => k.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.B.Italy]: () => k.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.B.Japan]: () => k.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.B.Malaysia]: () => k.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.B.Mexico]: () => k.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.B.NewZealand]: () => k.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.B.Philippines]: () => k.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.B.Poland]: () => k.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.B.Portugal]: () => k.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.B.PuertoRico]: () => k.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.B.Romania]: () => k.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.B.Serbia]: () => k.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.B.Singapore]: () => k.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.B.Spain]: () => k.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.B.Sweden]: () => k.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.B.Taiwan]: () => k.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.B.Thailand]: () => k.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.B.Turkey]: () => k.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.B.UnitedKingdom]: () => k.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				pe = n.n(ue);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const be = "CountrySort--CountrySortPicker",
				he = Object(l.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(T.b)(be)
				});
			var we = he(Object(a.b)(fe, e => ({
					onCloseDropdown: t => e(Object(w.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(w.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t, {
							[g.b.FeedLoadReason]: g.a.GeoModeChange
						})), e(Object(d.w)(n))
					}
				}))(e => {
					const t = re(e.sort),
						n = se(e.sort),
						s = `${e.baseUrl}?${V.g}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(o.a)(pe.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, r.a.createElement(G, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(W, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[b.B.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), r.a.createElement(y.a.Consumer, null, n => r.a.createElement(te, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.B).map(n => {
						const a = b.B[n];
						return r.a.createElement("div", {
							key: a,
							onClick: () => e.onClickLink(`${s}${ae(a)}`, a)
						}, r.a.createElement(C.b, {
							className: Object(o.a)(e.rowClassName, t === a ? e.rowSelectedClassName : void 0),
							displayText: le[a](),
							isSelected: t === a
						}))
					})))), t === b.B.UnitedStates && r.a.createElement(ce, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ke = n("./node_modules/path-browserify/index.js"),
				Se = n.n(ke),
				ge = n("./src/reddit/components/TimeSort/index.m.less"),
				_e = n.n(ge);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(S.a)(O.a),
				Ce = P.a.div("ListingSortContainer", _e.a),
				xe = Object(l.u)(),
				Ne = Object(f.c)({
					dropdownIsOpen: Object(T.b)("TimeSort--SortPicker")
				});
			var Ee = xe(Object(a.b)(Ne, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => r.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(G, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(_.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(y.a.Consumer, null, t => r.a.createElement(Oe, ye({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.nc.HOUR, b.nc.DAY, b.nc.WEEK, b.nc.MONTH, b.nc.YEAR, b.nc.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(l.J)(e) || (n = Se.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						s = Object(m.a)(n, {
							[V.C]: t
						}),
						a = s.split("?")[0],
						i = `${s.replace(a+"?","")}`;
					return r.a.createElement(C.b, {
						className: Object(o.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(_.b)(t),
						href: {
							pathname: a,
							state: {
								[g.b.FeedLoadReason]: g.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(N.d)(t))
						}
					})
				}))))))),
				ve = n("./src/reddit/constants/listings.ts"),
				je = n("./src/reddit/controls/Button/index.tsx"),
				Te = n("./src/reddit/icons/fonts/index.tsx"),
				De = n("./src/reddit/selectors/meta.ts"),
				Ie = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Le = n.n(Ie);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Pe = new Set([b.ab.CONTROVERSIAL, b.ab.TOP]),
				Re = new Set([b.ab.CONTROVERSIAL, b.ab.RISING]),
				Ae = new Set([b.ab.CONTROVERSIAL]),
				Fe = "ListingSort--Overflow",
				He = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Ue = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, v.a, D.k, l.F, j.a, De.j, (e, t, n, s, r, a, o) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e,
						locale: o
					};
					const i = [b.ab.HOT, b.ab.NEW, b.ab.TOP, b.ab.RISING];
					return (t && (s || n) || r && n) && i.unshift(b.ab.BEST), r && a && i.splice(3, 0, b.ab.AWARDED), {
						isPopularPage: r,
						sortOptions: i,
						locale: o
					}
				});
			class We extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(N.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: s
						} = this.props, a = s ? Object(m.a)(n, {
							sort: e
						}) : Object(x.a)(n, `${e}/`), i = a.split("?")[0], d = s ? a.replace(i + "?", "") : void 0;
						return r.a.createElement(je.t, {
							className: Object(o.a)(Le.a.SortLink, e === t && Le.a.selected),
							kind: je.b.InternalLink,
							priority: je.c.Plain,
							Icon: n => r.a.createElement(H, Be({}, n, {
								className: Object(o.a)(Le.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(_.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[g.b.FeedLoadReason]: g.a.SortChange
								},
								search: d
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: s,
							sort: a
						} = this.props, o = s && !!n && e === b.ab.HOT && a === b.ab.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), o && r.a.createElement(we, {
							baseUrl: ve.c[ve.b.Popular],
							buttonClassName: Le.a.DropdownButton,
							className: Le.a.CountrySort,
							disabled: t,
							dropdownClassName: Le.a.Dropdown,
							rowClassName: Le.a.DropdownRow,
							rowSelectedClassName: Le.a.DropdownRowSelected,
							wrapperClassName: Le.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Le.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: s
					} = this.props;
					return !s.startsWith("en") && (n ? e === b.ab.AWARDED && (t === b.ab.HOT || t === b.ab.TOP) : e === b.ab.BEST && t === b.ab.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([b.ab.TOP, b.ab.NEW]);
					return Ae.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return Re.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: s,
						sortOptions: a,
						timeSort: i
					} = this.props, d = !t && Pe.has(s), c = Re.has(s), l = a.filter(e => !this.isOverflowSort(e)), u = a.filter(e => this.isOverflowSort(e) && e !== s);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(q, Be({}, this.props, {
						buttonClassName: Le.a.DropdownButton,
						className: Object(o.a)(Le.a.SortDropdown, e),
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(o.a)(Le.a.SortButtons, e)
					}, l.map(this.renderSort)), c && this.renderSort(s), d && r.a.createElement(Ee, {
						buttonClassName: Le.a.DropdownButton,
						className: Le.a.TimeSort,
						dropdownClassName: Le.a.Dropdown,
						listingSort: s,
						onChange: n,
						rowClassName: Le.a.DropdownRow,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						timeSort: i || b.oc,
						wrapperClassName: Le.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(q, Be({}, this.props, {
						className: Object(o.a)(Le.a.SortOverflow, e),
						dropdownClassName: Le.a.Dropdown,
						dropdownId: Fe,
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: Le.a.SortOverflowButton,
						id: Fe
					}, r.a.createElement(Te.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Ge = He(Object(a.b)(Ue)(Object(c.c)(We))),
				Me = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				ze = n.n(Me);
			const Ye = Object(l.u)({
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Ke = Object(a.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, s) => {
							if (n) {
								const r = Object(i.c)({
									sort: t,
									timeSort: s
								});
								e(Object(d.J)(n, r))
							}
						}
					}
				});
			class qe extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: n,
						disabled: s = !1,
						isProfilePage: a,
						sort: i,
						sortOptions: d,
						subredditId: c,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(o.a)(ze.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(Ge, {
						baseUrl: e,
						disabled: s,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: d,
						timeSort: l
					}), !a && r.a.createElement(p.a, {
						className: ze.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = Ye(Ke(Object(c.c)(qe)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/controls/Dropdown/index.m.less"),
				c = n.n(d);
			const l = {
				[o.ab.BEST]: "best",
				[o.ab.HOT]: "hot",
				[o.ab.NEW]: "new",
				[o.ab.CONTROVERSIAL]: "controversial",
				[o.ab.TOP]: "top",
				[o.ab.RISING]: "rising",
				[o.ab.AWARDED]: "award"
			};

			function u(e) {
				let {
					className: t,
					isFilled: n,
					sort: s
				} = e;
				return l[s] ? r.a.createElement(i.a, {
					name: l[s],
					isFilled: n,
					className: Object(a.a)(t, c.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				a = n.n(r);
			t.a = s.a.div("container", a.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				p = n("./src/reddit/constants/location.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/trackers/navigation.ts"),
				h = n("./src/reddit/selectors/experiments/countrySites.ts"),
				f = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				w = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				k = n("./src/reddit/selectors/meta.ts"),
				S = n("./src/reddit/components/SidebarFooter/index.m.less"),
				g = n.n(S);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = d.a.a("Link", g.a), O = Object(o.c)({
				countryCode: k.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: w.a
			}), C = Object(a.b)(O), x = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			}), N = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return r.a.createElement("div", {
					className: g.a.GreyRereddit
				}, n, !!p.c[t] && r.a.createElement("div", {
					className: g.a.LinkContainer
				}, r.a.createElement("div", {
					className: g.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, _._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: g.a.NoneCapitalizeLink
				}, _._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: g.a.Column
				}, r.a.createElement(y, {
					href: "https://www.reddithelp.com"
				}, _._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, _._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: g.a.LinkContainer
				}, r.a.createElement("div", {
					className: g.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: g.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, _._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: g.a.Copyright
				}, _._("Reddit Inc © {year}. All rights reserved", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = x(C(Object(c.c)(e => {
				const t = Object(a.f)().getState(),
					n = Object(h.a)(t, Object(i.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Tc.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.Tc.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.Tc.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(N, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return n.includes(t) || "en" === t ? r.a.createElement(y, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, s[t]) : null
				};
				return r.a.createElement(l.a, {
					className: g.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!p.c[e.countryCode] && r.a.createElement("div", {
					className: g.a.LinkContainer
				}, r.a.createElement("div", {
					className: g.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, _._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: g.a.NoneCapitalizeLink
				}, _._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: g.a.Column
				}, r.a.createElement(y, {
					href: "https://www.reddithelp.com"
				}, _._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, _._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: g.a.LinkContainer
				}, r.a.createElement("div", {
					className: g.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: g.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, _._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: g.a.LinkContainer
				}, r.a.createElement("div", {
					className: g.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: g.a.Column
				}, s("de"), s("es"), s("pt"))), r.a.createElement("div", {
					className: g.a.Copyright
				}, _._("Reddit Inc © {year}. All rights reserved", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/components/BackToTop/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = n.n(m),
				h = n("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = d.f[1] + 24,
				k = u.f + 8,
				S = k + 152 + 16,
				g = S + w + 8,
				_ = h.a.div("Container", b.a),
				y = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return i.a.createElement(c.a, f({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?k:8}px)`
						}
					}, s))
				}, "BackToTop", b.a),
				O = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: a,
						shouldStickToBottom: o
					} = e;
					return i.a.createElement("div", {
						className: Object(s.a)(n, {
							[b.a.BottomStickyStyles]: o,
							[b.a.StickyStyles]: !o && a && !r,
							[b.a.StickyStylesFakeOverlay]: !o && !!r
						})
					}, t)
				};
			class C extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > g,
						shouldFooterSticky: this.windowHeight > S
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = a()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.M), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: s,
							className: r,
							hideFooter: a,
							pageLayer: o,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), p = this.state.isBottomSticky;
					return i.a.createElement(_, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(O, {
						isFakeOverlay: n,
						isSticky: u,
						shouldStickToBottom: p
					}, t, s, d, !a && i.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && i.a.createElement(y, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const x = Object(p.u)();
			t.a = x(C)
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/models/Theme/index.ts"),
				S = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const g = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(S.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(S.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = g(e);
					return Object(k.f)(t)
				},
				O = e => {
					const t = _(e);
					return Object(k.f)(t)
				};
			var C = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				x = n.n(C);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = Object(u.u)(), v = Object(a.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						r = Object(w.db)(e);
					return s || r
				},
				nigtmode: w.db,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(m.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = g(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: a,
						id: o,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: m,
						truncateThreshold: b
					} = this.props, h = n ? x.a.widgetContentOnly : x.a.widgetContent, f = !s && this.props.styles, w = f ? this.getWidgetBackgroundStyles() : {}, k = f ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, x.a.widgetBackground, {
							[x.a.redditStyle]: s,
							[x.a.clickable]: !!d,
							[x.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: w
					}, u && r.a.createElement("div", {
						className: Object(i.a)(x.a.widgetHeader, {
							[x.a.clickable]: !!l
						}),
						id: o,
						style: k,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(i.a)(x.a.widgetTitle, m)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), a), r.a.createElement("div", {
						className: Object(i.a)(h, {
							[x.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(p.r, {
						className: x.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, N._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = E(v(Object(d.a)(Object(l.c)(j))))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const a = {
					[r.ab.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.ab.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.ab.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.ab.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.ab.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.ab.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.ab.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				o = e => {
					const t = a[e];
					return t && t() || ""
				},
				i = {
					[r.nc.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.nc.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.nc.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.nc.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.nc.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.nc.ALL]: () => s.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				d = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext({})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !r
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = n.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, r, a = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const i = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: a.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(o.xb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...o.o
				}),
				d = (e, t) => n => ({
					source: r.POST,
					action: a.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.K(n, e),
					subreddit: o.jb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...o.o(n)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: a.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...o.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: a.c.CLICK,
					noun: s.TOPIC,
					...o.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				o = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				d = n("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(i.h)(e) && Object(a.f)(e),
					experimentName: s.qc
				}), o.a),
				l = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(i.h)(e) && Object(a.f)(e),
					experimentName: s.pc
				}), o.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				p = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
				let {
					listingKey: n
				} = t;
				return e.tracking.viewportDataLoaded[n]
			}
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.4048e844925c75ae1c5e.js.map