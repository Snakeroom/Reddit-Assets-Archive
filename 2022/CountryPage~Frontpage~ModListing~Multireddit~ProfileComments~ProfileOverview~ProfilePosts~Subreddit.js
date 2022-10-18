// https://www.redditstatic.com/desktop2x/CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.a15e696b29cf3c5832af.js
// Retrieved at 10/18/2022, 6:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"], {
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return _
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = n("./src/redditGQL/operations/UpdateSubredditMuteSettings.json"),
				l = n("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json");
			const c = (e, t) => Object(a.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(a.a)(e, {
					...i,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var b = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/actions/subreddit/constants.ts"),
				m = n("./src/reddit/actions/subreddit/notifications.ts");
			const h = e => Object(o.f)({
					id: e,
					kind: b.b.Error,
					text: r.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				f = (e, t) => Object(o.f)({
					kind: b.b.SuccessCommunityGreen,
					text: r.fbt._("Muted r/{subreddit name}", [r.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					buttonText: r.fbt._("Undo", null, {
						hk: "1lx02Y"
					}),
					buttonAction: t
				}),
				w = (e, t) => Object(o.f)({
					kind: b.b.SuccessCommunityGreen,
					text: r.fbt._("Unmuted r/{subreddit name}", [r.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					buttonText: r.fbt._("Undo", null, {
						hk: "2siioQ"
					}),
					buttonAction: t
				}),
				S = Object(s.a)(p.C),
				C = (Object(s.a)(p.f), Object(s.a)(p.B), e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: a
						} = o;
						if ((await c(a(), t)).ok) r && r(), f(n, k({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				}),
				k = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: a
						} = o;
						if ((await u(a(), t)).ok) r && r(), w(n, C({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				g = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: a
						} = o;
						if ((await c(a(), t)).ok) r && r(), e(Object(m.c)({
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
						successCallback: r
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: a
						} = o;
						if ((await u(a(), t)).ok) r && r(), e(Object(m.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(w(n, g({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				_ = e => {
					let {
						subredditId: t,
						notificationLevel: n
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: d
						} = i;
						const c = Object(m.a)(n);
						(await ((e, t, n) => Object(a.a)(e, {
							...l,
							variables: {
								input: {
									...n,
									subredditId: t
								}
							}
						}))(d(), t, c)).ok ? (e(S({
							subredditId: t,
							notificationLevel: n
						})), e(Object(o.f)({
							kind: b.b.SuccessCommunityGreen,
							text: Object(m.b)(n)
						}))) : e(Object(o.f)({
							kind: b.b.Error,
							text: r.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = n("./src/reddit/actions/notificationsInbox/index.ts"),
				i = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				c = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const b = Object(s.a)(i.v),
				p = Object(s.a)(i.u),
				m = Object(s.a)(i.t),
				h = e => {
					switch (e) {
						case c.b.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case c.b.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case c.b.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				f = e => {
					switch (e) {
						case c.b.OFF:
							return r.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case c.b.FREQUENT:
							return r.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case c.b.LOW:
							return r.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
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
					successCallback: s,
					undoCallback: i
				} = e;
				return async (e, c, w) => {
					let {
						gqlContext: S
					} = w;
					var C, k, g;
					e(p());
					const y = h(n),
						_ = await Object(l.b)(S(), t, y);
					if ((null === (k = null === (C = _.error) || void 0 === C ? void 0 : C.fields) || void 0 === k ? void 0 : k.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(_.body) && (null === (g = _.body.data.updateSubredditNotificationSettings.errors) || void 0 === g ? void 0 : g.length)) return e(m()), e(Object(d.f)({
						kind: u.b.Error,
						text: r.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					_.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: n
					})), e(b({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: n
							}
						}
					})), s && s(), e(i ? Object(d.f)(Object(d.e)(f(n), u.b.Undo, r.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(a.i)(t, i))) : Object(d.f)(Object(d.e)(f(n), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/BackToTop/index.m.less"),
				l = n.n(d);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(a.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: r
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(t, l.a.container),
					style: r
				}, s.a.createElement(i.l, {
					onClick: () => u(n)
				}, c._("Back to Top", null, {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				w = n("./src/reddit/controls/Dropdown/index.tsx"),
				S = n("./src/reddit/controls/Dropdown/Row.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				y = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				_ = n.n(y);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = "view--layout--FUE",
				N = "LayoutSwitch--picker",
				E = Object(d.a)(w.a),
				v = {
					[m.d.Card]: function(e) {
						return o.a.createElement(C.a, O({}, e, {
							name: "view_card"
						}))
					},
					[m.d.Classic]: function(e) {
						return o.a.createElement(C.a, O({}, e, {
							name: "view_classic"
						}))
					},
					[m.d.Compact]: function(e) {
						return o.a.createElement(C.a, O({}, e, {
							name: "view_compact"
						}))
					}
				},
				j = {
					[m.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[m.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[m.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[m.d.Search]: () => r.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				T = Object(h.u)(),
				D = Object(i.c)({
					dropdownIsOpen: Object(g.b)(N),
					postLayout: h.S,
					redditStyle: h.D
				}),
				I = Object(a.b)(D, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(b.h)({
						tooltipId: N
					}))
				}));
			class L extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: r,
							subredditId: s
						} = this.props;
						t ? t(e) : (n(e, s), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(k.bb)(t),
							subreddit: Object(k.jb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: r,
							postLayout: s
						} = this.props, a = n || m.e[s], i = e === a, d = v[e], c = j[e];
						return o.a.createElement(S.b, O({}, t, {
							className: Object(l.a)(_.a.LayoutItem, {
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
						}), o.a.createElement(d, {
							className: _.a.LayoutIcon,
							onClick: i ? void 0 : r,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(E, O({}, e, {
							className: _.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: _.a.DropdownRow,
							rowIconClassName: _.a.DropdownRowIcon,
							rowSelectedClassName: _.a.DropdownRowSelected,
							tooltipId: N
						}), this.renderItem(m.d.Card), this.renderItem(m.d.Classic), this.renderItem(m.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: r
					} = this.props, s = t || m.e[r];
					return o.a.createElement("div", {
						className: Object(l.a)(_.a.Container, e),
						id: x
					}, o.a.createElement("div", {
						className: _.a.DropdownContainer,
						onClick: n
					}, this.renderItem(s, {
						id: N,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(I(Object(p.c)(Object(c.a)(L))))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				d = n("./src/reddit/actions/preferences.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				b = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				m = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				w = n("./src/reddit/actions/tooltip.ts"),
				S = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/higherOrderComponents/asTooltip.tsx"),
				k = n("./src/reddit/constants/history.ts"),
				g = n("./src/reddit/constants/listingSorts.ts"),
				y = n("./src/reddit/contexts/Tooltip.ts"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
				O = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/helpers/path/index.ts"),
				N = n("./src/reddit/helpers/trackers/navigation.ts"),
				E = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				T = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = n("./src/reddit/components/ListingSort/index.m.less"),
				P = n.n(L),
				R = n("./src/lib/lessComponent.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const A = "ListingSort--SortPicker",
				F = Object(C.a)(R.a.wrapped(_.a, "Dropdown", P.a)),
				U = R.a.wrapped(I.a, "ListingSortIcon", P.a),
				H = (R.a.wrapped(E.b, "DropdownTriangle", P.a), R.a.div("Title", P.a)),
				W = R.a.wrapped(e => s.a.createElement(O.b, B({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", P.a),
				G = e => {
					let {
						disabled: t,
						...n
					} = e;
					return s.a.createElement("div", B({}, n, {
						className: Object(a.a)(P.a.SortWrapper, n.className, {
							[P.a.isDisabled]: t
						})
					}))
				},
				M = R.a.div("DropdownRowDisabled", P.a),
				z = Object(c.u)({
					isFrontpage: c.A,
					isProfilePage: c.J,
					pageLayer: e => e
				}),
				K = Object(f.c)({
					isAwardListingExperimentEnabled: j.a,
					isBestSortPopularEnabled: v.a,
					user: D.k,
					dropdownIsOpen: (e, t) => Object(T.b)(t.dropdownId || A)(e),
					isPopularPage: c.F
				}),
				Y = Object(o.b)(K, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: r
					} = t;
					return {
						onOpenDropdown: () => e(Object(w.h)({
							tooltipId: n || A
						}))
					}
				});
			var V = R.a.wrapped(z(Y(Object(l.c)(e => s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && s.a.createElement(H, null, S.fbt._("Sort", null, {
					hk: "2BfINq"
				})), s.a.createElement(G, {
					disabled: e.disabled
				}, e.children || s.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(g.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, s.a.createElement(U, {
					sort: e.sort
				}))), s.a.createElement(y.a.Consumer, null, t => s.a.createElement(F, B({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? s.a.createElement(M, null, S.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, r, s) => {
					const o = [m.bb.HOT, m.bb.NEW, m.bb.TOP, m.bb.RISING];
					return (e && (n || r) || t && r) && o.unshift(m.bb.BEST), t && s && o.splice(3, 0, m.bb.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(x.a)(e.baseUrl, `${t}/`),
						r = n.split("?")[0],
						o = e.isProfilePage ? n.replace(r + "?", "") : void 0;
					return s.a.createElement(O.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(g.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(N.b)(t))
						},
						href: {
							pathname: r,
							state: {
								[k.b.FeedLoadReason]: k.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, s.a.createElement(U, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", P.a),
				q = n("./src/reddit/constants/parameters.ts");
			const J = e => {
					const t = Q[e];
					return t && t() || ""
				},
				Q = {
					[m.lc.AllStates]: () => S.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[m.lc.Alaska]: () => S.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[m.lc.Alabama]: () => S.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[m.lc.Arkansas]: () => S.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[m.lc.Arizona]: () => S.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[m.lc.California]: () => S.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[m.lc.Colorado]: () => S.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[m.lc.Connecticut]: () => S.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[m.lc.DistrictOfColumbia]: () => S.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[m.lc.Delaware]: () => S.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[m.lc.Florida]: () => S.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[m.lc.Georgia]: () => S.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[m.lc.Hawaii]: () => S.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[m.lc.Iowa]: () => S.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[m.lc.Idaho]: () => S.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[m.lc.Illinois]: () => S.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[m.lc.Indiana]: () => S.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[m.lc.Kansas]: () => S.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[m.lc.Kentucky]: () => S.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[m.lc.Louisiana]: () => S.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[m.lc.Massachusetts]: () => S.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[m.lc.Maryland]: () => S.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[m.lc.Maine]: () => S.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[m.lc.Michigan]: () => S.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[m.lc.Minnesota]: () => S.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[m.lc.Missouri]: () => S.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[m.lc.Mississippi]: () => S.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[m.lc.Montana]: () => S.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[m.lc.NorthCarolina]: () => S.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[m.lc.NorthDakota]: () => S.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[m.lc.Nebraska]: () => S.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[m.lc.NewHampshire]: () => S.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[m.lc.NewJersey]: () => S.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[m.lc.NewMexico]: () => S.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[m.lc.Nevada]: () => S.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[m.lc.NewYork]: () => S.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[m.lc.Ohio]: () => S.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[m.lc.Oklahoma]: () => S.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[m.lc.Oregon]: () => S.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[m.lc.Pennsylvania]: () => S.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[m.lc.RhodeIsland]: () => S.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[m.lc.SouthCarolina]: () => S.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[m.lc.SouthDakota]: () => S.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[m.lc.Tennessee]: () => S.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[m.lc.Texas]: () => S.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[m.lc.Utah]: () => S.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[m.lc.Virginia]: () => S.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[m.lc.Vermont]: () => S.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[m.lc.Washington]: () => S.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[m.lc.Wisconsin]: () => S.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[m.lc.WestVirginia]: () => S.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[m.lc.Wyoming]: () => S.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var X = n("./src/reddit/components/StateSort/index.m.less"),
				Z = n.n(X);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = R.a.wrapped(_.a, "_Dropdown", Z.a),
				te = Object(C.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && se(e) === m.C.UnitedStates
				},
				re = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return m.lc.AllStates
				},
				se = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = se(e),
						n = re(e);
					return ne(e) ? `${t}_${n}` : t
				},
				ae = Object(c.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(T.b)("StateSort--StateSortPicker")
				}),
				de = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(d.w)(m.C.UnitedStates + "_" + n))
					}
				}));
			var le = R.a.wrapped(ae(de(e => {
				const t = `${e.baseUrl}?${q.k}=${m.C.UnitedStates}`;
				return s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(G, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, s.a.createElement(W, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : J(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(y.a.Consumer, null, n => s.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(m.lc).map(n => {
					const r = m.lc[n];
					return s.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === m.lc.AllStates ? t : `${t}_${e}`)(r), oe(r))
					}, s.a.createElement(O.b, {
						className: Object(a.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: J(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", Z.a);
			const ce = {
				[m.C.Everywhere]: () => S.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[m.C.UnitedStates]: () => S.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[m.C.Argentina]: () => S.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[m.C.Australia]: () => S.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[m.C.Bulgaria]: () => S.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[m.C.Canada]: () => S.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[m.C.Chile]: () => S.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[m.C.Colombia]: () => S.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[m.C.Croatia]: () => S.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[m.C.CzechRepublic]: () => S.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[m.C.Finland]: () => S.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[m.C.France]: () => S.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[m.C.Germany]: () => S.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[m.C.Greece]: () => S.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[m.C.Hungary]: () => S.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[m.C.Iceland]: () => S.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[m.C.India]: () => S.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[m.C.Ireland]: () => S.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[m.C.Italy]: () => S.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[m.C.Japan]: () => S.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[m.C.Malaysia]: () => S.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[m.C.Mexico]: () => S.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[m.C.NewZealand]: () => S.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[m.C.Philippines]: () => S.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[m.C.Poland]: () => S.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[m.C.Portugal]: () => S.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[m.C.PuertoRico]: () => S.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[m.C.Romania]: () => S.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[m.C.Serbia]: () => S.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[m.C.Singapore]: () => S.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[m.C.Spain]: () => S.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[m.C.Sweden]: () => S.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[m.C.Taiwan]: () => S.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[m.C.Thailand]: () => S.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[m.C.Turkey]: () => S.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[m.C.UnitedKingdom]: () => S.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				be = n.n(ue);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const me = "CountrySort--CountrySortPicker",
				he = Object(c.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(T.b)(me)
				});
			var we = he(Object(o.b)(fe, e => ({
					onCloseDropdown: t => e(Object(w.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(w.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t, {
							[k.b.FeedLoadReason]: k.a.GeoModeChange
						})), e(Object(d.w)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = re(e.sort),
						r = `${e.baseUrl}?${q.k}=`;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Object(a.a)(be.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(me) : e.onOpenDropdown(me)
					}, s.a.createElement(G, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, s.a.createElement(W, {
						className: e.buttonClassName,
						displayText: (() => t in ce ? ce[t]() : ce[m.C.Everywhere]())(),
						id: me,
						showDropdownTriangle: !0
					})), s.a.createElement(y.a.Consumer, null, n => s.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: me
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(m.C).map(n => {
						const o = m.C[n];
						return s.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${r}${oe(o)}`, o)
						}, s.a.createElement(O.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: ce[o](),
							isSelected: t === o
						}))
					})))), t === m.C.UnitedStates && s.a.createElement(le, {
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
				Se = n("./node_modules/path-browserify/index.js"),
				Ce = n.n(Se),
				ke = n("./src/reddit/components/TimeSort/index.m.less"),
				ge = n.n(ke);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _e = Object(C.a)(_.a),
				Oe = R.a.div("ListingSortContainer", ge.a),
				xe = Object(c.u)(),
				Ne = Object(f.c)({
					dropdownIsOpen: Object(T.b)("TimeSort--SortPicker")
				});
			var Ee = xe(Object(o.b)(Ne, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(l.c)(e => s.a.createElement(Oe, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(G, {
					className: e.wrapperClassName,
					disabled: !1
				}, s.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(g.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(y.a.Consumer, null, t => s.a.createElement(_e, ye({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [m.oc.HOUR, m.oc.DAY, m.oc.WEEK, m.oc.MONTH, m.oc.YEAR, m.oc.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(c.J)(e) || (n = Ce.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						r = Object(p.a)(n, {
							[q.N]: t
						}),
						o = r.split("?")[0],
						i = `${r.replace(o+"?","")}`;
					return s.a.createElement(O.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(g.b)(t),
						href: {
							pathname: o,
							state: {
								[k.b.FeedLoadReason]: k.a.SortChange
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

			function Pe() {
				return (Pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = new Set([m.bb.CONTROVERSIAL, m.bb.TOP]),
				Be = new Set([m.bb.CONTROVERSIAL, m.bb.RISING]),
				Ae = new Set([m.bb.CONTROVERSIAL]),
				Fe = "ListingSort--Overflow",
				Ue = Object(c.u)({
					isFrontpage: c.A,
					isProfilePage: c.J,
					pageLayer: e => e
				}),
				He = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, v.a, D.k, c.F, j.a, De.j, (e, t, n, r, s, o, a) => {
					if (e) return {
						isPopularPage: s,
						sortOptions: e,
						locale: a
					};
					const i = [m.bb.HOT, m.bb.NEW, m.bb.TOP, m.bb.RISING];
					return (t && (r || n) || s && n) && i.unshift(m.bb.BEST), s && o && i.splice(3, 0, m.bb.AWARDED), {
						isPopularPage: s,
						sortOptions: i,
						locale: a
					}
				});
			class We extends s.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(N.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: r
						} = this.props, o = r ? Object(p.a)(n, {
							sort: e
						}) : Object(x.a)(n, `${e}/`), i = o.split("?")[0], d = r ? o.replace(i + "?", "") : void 0;
						return s.a.createElement(je.t, {
							className: Object(a.a)(Le.a.SortLink, e === t && Le.a.selected),
							kind: je.b.InternalLink,
							priority: je.c.Plain,
							Icon: n => s.a.createElement(U, Pe({}, n, {
								className: Object(a.a)(Le.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(g.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[k.b.FeedLoadReason]: k.a.SortChange
								},
								search: d
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: r,
							sort: o
						} = this.props, a = r && !!n && e === m.bb.HOT && o === m.bb.HOT;
						return s.a.createElement(s.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && s.a.createElement(we, {
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
						locale: r
					} = this.props;
					return !r.startsWith("en") && (n ? e === m.bb.AWARDED && (t === m.bb.HOT || t === m.bb.TOP) : e === m.bb.BEST && t === m.bb.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([m.bb.TOP, m.bb.NEW]);
					return Ae.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return Be.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: r,
						sortOptions: o,
						timeSort: i
					} = this.props, d = !t && Re.has(r), l = Be.has(r), c = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== r);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(V, Pe({}, this.props, {
						buttonClassName: Le.a.DropdownButton,
						className: Object(a.a)(Le.a.SortDropdown, e),
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1
					})), s.a.createElement("div", {
						className: Object(a.a)(Le.a.SortButtons, e)
					}, c.map(this.renderSort)), l && this.renderSort(r), d && s.a.createElement(Ee, {
						buttonClassName: Le.a.DropdownButton,
						className: Le.a.TimeSort,
						dropdownClassName: Le.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: Le.a.DropdownRow,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						timeSort: i || m.pc,
						wrapperClassName: Le.a.DropdownSortWrapper
					}), u.length > 0 && s.a.createElement(V, Pe({}, this.props, {
						className: Object(a.a)(Le.a.SortOverflow, e),
						dropdownClassName: Le.a.Dropdown,
						dropdownId: Fe,
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), s.a.createElement("button", {
						className: Le.a.SortOverflowButton,
						id: Fe
					}, s.a.createElement(Te.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Ge = Ue(Object(o.b)(He)(Object(l.c)(We))),
				Me = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				ze = n.n(Me);
			const Ke = Object(c.u)({
					isProfilePage: c.J,
					pageLayer: e => e
				}),
				Ye = Object(o.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, r) => {
							if (n) {
								const s = Object(i.c)({
									sort: t,
									timeSort: r
								});
								e(Object(d.J)(n, s))
							}
						}
					}
				});
			class Ve extends s.a.Component {
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
						disabled: r = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: d,
						subredditId: l,
						timeSort: c,
						updateSortPreference: u
					} = this.props;
					return s.a.createElement("div", {
						className: Object(a.a)(ze.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, s.a.createElement(Ge, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: d,
						timeSort: c
					}), !o && s.a.createElement(b.a, {
						className: ze.a.LayoutSwitch,
						subredditId: l
					}))
				}
			}
			t.a = Ke(Ye(Object(l.c)(Ve)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/controls/Dropdown/index.m.less"),
				l = n.n(d);
			const c = {
				[a.bb.BEST]: "best",
				[a.bb.HOT]: "hot",
				[a.bb.NEW]: "new",
				[a.bb.CONTROVERSIAL]: "controversial",
				[a.bb.TOP]: "top",
				[a.bb.RISING]: "rising",
				[a.bb.AWARDED]: "award"
			};

			function u(e) {
				let {
					className: t,
					isFilled: n,
					sort: r
				} = e;
				return c[r] ? s.a.createElement(i.a, {
					name: c[r],
					isFilled: n,
					className: Object(o.a)(t, l.a.iconStyles)
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/SidebarContainer/index.m.less"),
				o = n.n(s);
			t.a = r.a.div("container", o.a)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				b = n("./src/reddit/constants/location.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/trackers/navigation.ts"),
				h = n("./src/reddit/selectors/experiments/countrySites.ts"),
				f = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				w = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				S = n("./src/reddit/selectors/meta.ts"),
				C = n("./src/reddit/components/SidebarFooter/index.m.less"),
				k = n.n(C);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = d.a.a("Link", k.a), _ = Object(a.c)({
				countryCode: S.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: w.a
			}), O = Object(o.b)(_), x = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), N = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return s.a.createElement("div", {
					className: k.a.GreyRereddit
				}, n, !!b.c[t] && s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, g._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: k.a.NoneCapitalizeLink
				}, g._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(y, {
					href: "https://www.reddithelp.com"
				}, g._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, g._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, g._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, g._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, g._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, g._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), s.a.createElement("div", {
					className: k.a.Copyright
				}, g._("Reddit Inc © {year}. All rights reserved", [g._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = x(O(Object(l.c)(e => {
				const t = Object(o.f)().getState(),
					n = Object(h.a)(t, Object(i.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.ad.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.ad.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.ad.LargeImagePreview ? e.reredditButtons : [];
					return s.a.createElement(N, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const r = t => {
					const r = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return n.includes(t) || "en" === t ? s.a.createElement(y, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(m.a)(t))
					}, r[t]) : null
				};
				return s.a.createElement(c.a, {
					className: k.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!b.c[e.countryCode] && s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, g._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: k.a.NoneCapitalizeLink
				}, g._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(y, {
					href: "https://www.reddithelp.com"
				}, g._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, g._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, g._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, g._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: k.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, g._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, g._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: k.a.LinkContainer
				}, s.a.createElement("div", {
					className: k.a.Column
				}, r("en"), r("fr"), r("it")), s.a.createElement("div", {
					className: k.a.Column
				}, r("de"), r("es"), r("pt"))), s.a.createElement("div", {
					className: k.a.Copyright
				}, g._("Reddit Inc © {year}. All rights reserved", [g._param("year", (new Date).getFullYear().toString())], {
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
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/components/BackToTop/index.tsx"),
				c = n("./src/reddit/components/SidebarFooter/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				m = n.n(p),
				h = n("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = d.g[1] + 24,
				S = u.f + 8,
				C = S + 152 + 16,
				k = C + w + 8,
				g = h.a.div("Container", m.a),
				y = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...r
					} = e;
					return i.a.createElement(l.a, f({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?S:8}px)`
						}
					}, r))
				}, "BackToTop", m.a),
				_ = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: s,
						isSticky: o,
						shouldStickToBottom: a
					} = e;
					return i.a.createElement("div", {
						className: Object(r.a)(n, {
							[m.a.BottomStickyStyles]: a,
							[m.a.StickyStyles]: !a && o && !s,
							[m.a.StickyStylesFakeOverlay]: !a && !!s
						})
					}, t)
				};
			class O extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > k,
						shouldFooterSticky: this.windowHeight > C
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
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							children: r,
							className: s,
							hideFooter: o,
							pageLayer: a,
							recommendationsComponent: d,
							reredditButtons: l
						}
					} = this, u = this.state.isAdSticky && !(!t && !r), b = this.state.isBottomSticky;
					return i.a.createElement(g, {
						className: s,
						innerRef: this.setWrapperRef
					}, i.a.createElement(_, {
						isFakeOverlay: n,
						isSticky: u,
						shouldStickToBottom: b
					}, t, r, d, !o && i.a.createElement(c.a, {
						reredditButtons: l
					})), !d && !this.props.hideBackToTop && i.a.createElement(y, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const x = Object(b.u)();
			t.a = x(O)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/components/SEOTitle/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				m = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/models/Theme/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const k = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(C.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				g = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(C.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = k(e);
					return Object(S.f)(t)
				},
				_ = e => {
					const t = g(e);
					return Object(S.f)(t)
				};
			var O = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				x = n.n(O);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = Object(u.u)(), v = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						r = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						s = Object(w.db)(e);
					return r || s
				},
				nigtmode: w.db,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class j extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
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
					return e.backgroundColor = k(this.props), e.borderColor = Object(m.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = g(this.props), e.color = e.fill = _(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: r,
						headerButton: o,
						id: a,
						onClick: d,
						onHeaderClick: c,
						title: u,
						titleClassName: p,
						truncateThreshold: m
					} = this.props, h = n ? x.a.widgetContentOnly : x.a.widgetContent, f = !r && this.props.styles, w = f ? this.getWidgetBackgroundStyles() : {}, S = f ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(i.a)(t, x.a.widgetBackground, {
							[x.a.redditStyle]: r,
							[x.a.clickable]: !!d,
							[x.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: d,
						style: w
					}, u && s.a.createElement("div", {
						className: Object(i.a)(x.a.widgetHeader, {
							[x.a.clickable]: !!c
						}),
						id: a,
						style: {
							...S,
							...this.props.headerStyles
						},
						onClick: c
					}, s.a.createElement("div", {
						className: Object(i.a)(x.a.widgetTitle, p)
					}, s.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), o), s.a.createElement("div", {
						className: Object(i.a)(h, {
							[x.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(b.r, {
						className: x.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, N._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = E(v(Object(d.a)(Object(c.c)(j))))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = {
					[s.bb.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.bb.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.bb.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.bb.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.bb.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.bb.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.bb.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[s.oc.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.oc.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.oc.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.oc.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.oc.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.oc.ALL]: () => r.fbt._("All Time", null, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = s.a.createContext({})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const n = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === r.b.NO_ADS);
				return !n && !s
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
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(s);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(r.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/models/Event.ts");
			const o = () => e => ({
					source: s.f.HomeFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				a = () => e => ({
					source: s.f.CommunityNotificationsSettings,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				i = () => e => ({
					source: s.f.PopularFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				d = () => e => ({
					source: s.f.SubredditIdBanner,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				l = () => e => ({
					source: s.f.AboutCommunityOverflow,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				}),
				c = () => e => ({
					source: s.f.AboutCommunityOverflow,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: r.rb(e).id
					},
					...r.o(e)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			}));
			var r, s, o = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const i = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(a.xb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				d = (e, t) => n => ({
					source: s.POST,
					action: o.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: a.K(n, e),
					subreddit: a.jb(n),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...a.o(n)
				}),
				l = () => e => ({
					source: s.SIDEBAR,
					action: o.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...a.o(e)
				}),
				c = e => t => ({
					source: s.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: r.TOPIC,
					...a.o(t),
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
				return b
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				d = n("./node_modules/reselect/es/index.js");
			const l = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(i.h)(e) && Object(o.f)(e),
					experimentName: r.uc
				}), a.a),
				c = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => !Object(i.h)(e) && Object(o.f)(e),
					experimentName: r.tc
				}), a.a),
				u = Object(d.a)(l, c, (e, t) => e || t),
				b = Object(d.a)(l, c, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.a15e696b29cf3c5832af.js.map