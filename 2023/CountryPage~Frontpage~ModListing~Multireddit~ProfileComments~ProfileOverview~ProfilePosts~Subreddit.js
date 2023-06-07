// https://www.redditstatic.com/desktop2x/CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.74516b7060044f67e198.js
// Retrieved at 6/7/2023, 1:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"], {
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "g", (function() {
				return L
			})), n.d(t, "a", (function() {
				return D
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = n("./src/redditGQL/operations/MutedSubreddits.json"),
				c = n("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = n("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const u = (e, t) => Object(a.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				p = (e, t) => Object(a.a)(e, {
					...i,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var b = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/subreddit/constants.ts"),
				h = n("./src/reddit/actions/subreddit/notifications.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const g = e => Object(o.f)({
					id: e,
					kind: b.b.Error,
					duration: o.a,
					text: s.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				S = (e, t) => Object(o.f)({
					kind: b.b.SuccessCommunityGreen,
					text: s.fbt._("Muted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: s.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				w = (e, t) => Object(o.f)({
					kind: b.b.SuccessCommunityGreen,
					text: s.fbt._("Unmuted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: s.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var C = n("./src/reddit/endpoints/subreddit/about.ts");
			const k = Object(r.a)(m.i),
				y = Object(r.a)(m.h),
				O = Object(r.a)(m.G),
				_ = (Object(r.a)(m.j), Object(r.a)(m.F), Object(r.a)(m.g)),
				x = Object(r.a)(m.f),
				v = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: a
						} = o;
						var i, d;
						const c = await u(a(), t);
						if (c.ok && c.body && (null === (d = null === (i = c.body) || void 0 === i ? void 0 : i.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(S(n, j({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				j = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: a
						} = o;
						var i, d;
						const c = await p(a(), t);
						if (c.ok && c.body && (null === (d = null === (i = c.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(w(n, v({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				E = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: a
						} = o;
						var i, d;
						const c = await u(a(), t);
						if (c.ok && c.body && (null === (d = null === (i = c.body) || void 0 === i ? void 0 : i.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(S(n, N({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				N = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: a
						} = o;
						var i, d;
						const c = await p(a(), t);
						if (c.ok && c.body && (null === (d = null === (i = c.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) s && s(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(w(n, E({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				L = e => {
					let {
						subredditId: t,
						notificationLevel: n
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: d
						} = i;
						var l, u;
						const p = Object(h.a)(n),
							m = await ((e, t, n) => Object(a.a)(e, {
								...c,
								variables: {
									input: {
										...n,
										subredditId: t
									}
								}
							}))(d(), t, p);
						m.ok && m.body && (null === (u = null === (l = m.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === u ? void 0 : u.ok) ? (e(O({
							subredditId: t,
							notificationLevel: n
						})), e(Object(o.f)({
							kind: b.b.SuccessCommunityGreen,
							text: Object(h.b)(n)
						}))) : e(Object(o.f)({
							kind: b.b.Error,
							text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				D = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const i = await (e => Object(a.a)(e, d))(r());
					if (i.ok && i.body && i.body.data) {
						const {
							data: t
						} = i.body, n = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(k({
							nodes: n
						}))
					} else e(y()), e(Object(o.f)({
						duration: o.a,
						kind: b.b.Error,
						text: s.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, T = e => {
					let {
						subredditId: t,
						subredditName: n
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: o
						} = r;
						var a, i;
						const d = await p(o(), t);
						if (d.ok && d.body && (null === (i = null === (a = d.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === i ? void 0 : i.ok)) e(_(t)), e(w(n));
						else {
							e(g(`error-unmuting-${t}`))
						}
					}
				}, I = e => {
					let {
						subredditName: t
					} = e;
					return async (e, n, r) => {
						let {
							gqlContext: a
						} = r;
						var i, d;
						const c = n(),
							l = Object(f.t)(c).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (l) {
							const t = l.name,
								n = `error-muting-duplicate-${t}`;
							return e(Object(o.f)({
								id: n,
								kind: b.b.Error,
								duration: o.a,
								text: s.fbt._("Sorry, r/{subreddit name} is already muted.", [s.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const p = await Object(C.a)(a(), t, !0),
							{
								data: m
							} = p.body,
							h = m && m.subreddit;
						if (!p.ok || null === h) {
							return e(((e, t) => Object(o.f)({
								id: e,
								kind: b.b.Error,
								duration: o.a,
								text: s.fbt._("Sorry, r/{subreddit name} isn't a community.", [s.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const w = h.id,
							k = await u(a(), w);
						if (k.ok && k.body && (null === (d = null === (i = k.body) || void 0 === i ? void 0 : i.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(x([h])), e(S(h.name));
						else {
							e(g(`error-muting-${w}`))
						}
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
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = n("./src/reddit/actions/notificationsInbox/index.ts"),
				i = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const p = Object(r.a)(i.z),
				b = Object(r.a)(i.y),
				m = Object(r.a)(i.x),
				h = e => {
					switch (e) {
						case l.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				f = e => {
					switch (e) {
						case l.c.OFF:
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return s.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const g = e => {
				let {
					subredditId: t,
					notificationLevel: n,
					successCallback: r,
					undoCallback: i
				} = e;
				return async (e, l, g) => {
					let {
						gqlContext: S
					} = g;
					var w, C, k;
					e(b());
					const y = h(n),
						O = await Object(c.b)(S(), t, y);
					if ((null === (C = null === (w = O.error) || void 0 === w ? void 0 : w.fields) || void 0 === C ? void 0 : C.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(O.body) && (null === (k = O.body.data.updateSubredditNotificationSettings.errors) || void 0 === k ? void 0 : k.length)) return e(m()), e(Object(d.f)({
						kind: u.b.Error,
						text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					O.ok && (e(Object(o.c)({
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/elementIds.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/selectors/experiments/shredditParity.ts"),
				l = n("./src/reddit/components/BackToTop/index.m.less"),
				u = n.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				if (e) {
					const e = document.getElementById(i.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: s
				} = e;
				const i = Object(o.e)(c.a);
				return r.a.createElement("div", {
					className: Object(a.a)(t, u.a.container),
					style: s
				}, r.a.createElement(d.a, p({
					className: u.a.button,
					onClick: () => m(n)
				}, i && {
					priority: d.c.Secondary,
					rplStyle: !0
				}), b._("Back to Top", null, {
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
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				g = n("./src/reddit/controls/Dropdown/index.tsx"),
				S = n("./src/reddit/controls/Dropdown/Row.tsx"),
				w = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/selectors/tooltip.ts"),
				y = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				O = n.n(y);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = "view--layout--FUE",
				v = "LayoutSwitch--picker",
				j = Object(d.a)(g.a),
				E = {
					[m.d.Card]: function(e) {
						return o.a.createElement(w.a, _({}, e, {
							name: "view_card"
						}))
					},
					[m.d.Classic]: function(e) {
						return o.a.createElement(w.a, _({}, e, {
							name: "view_classic"
						}))
					},
					[m.d.Compact]: function(e) {
						return o.a.createElement(w.a, _({}, e, {
							name: "view_compact"
						}))
					}
				},
				N = {
					[m.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[m.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[m.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[m.d.Search]: () => s.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				L = Object(h.v)(),
				D = Object(i.c)({
					dropdownIsOpen: Object(k.b)(v),
					postLayout: h.U,
					redditStyle: h.E
				}),
				T = Object(a.b)(D, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.x)(t, n)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: v
					}))
				}));
			class I extends o.a.Component {
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
							screen: Object(C.cb)(t),
							subreddit: Object(C.lb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: s,
							postLayout: r
						} = this.props, a = n || m.e[r], i = e === a, d = E[e], l = N[e];
						return o.a.createElement(S.b, _({}, t, {
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
						}), o.a.createElement(d, {
							className: O.a.LayoutIcon,
							onClick: i ? void 0 : s,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(j, _({}, e, {
							className: O.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: O.a.DropdownRow,
							rowIconClassName: O.a.DropdownRowIcon,
							rowSelectedClassName: O.a.DropdownRowSelected,
							tooltipId: v
						}), this.renderItem(m.d.Card), this.renderItem(m.d.Classic), this.renderItem(m.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: s
					} = this.props, r = t || m.e[s];
					return o.a.createElement("div", {
						className: Object(c.a)(O.a.Container, e),
						id: x
					}, o.a.createElement("div", {
						className: O.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: v,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = L(T(Object(b.c)(Object(l.a)(I))))
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
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				d = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				b = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				m = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				g = n("./src/reddit/actions/tooltip.ts"),
				S = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/higherOrderComponents/asTooltip.tsx"),
				C = n("./src/reddit/constants/history.ts"),
				k = n("./src/reddit/constants/listingSorts.ts"),
				y = n("./src/reddit/contexts/Tooltip.ts"),
				O = n("./src/reddit/controls/Dropdown/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/trackers/navigation.ts"),
				j = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				N = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				I = n("./src/reddit/components/ListingSort/index.m.less"),
				P = n.n(I),
				R = n("./src/lib/lessComponent.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const A = "ListingSort--SortPicker",
				U = Object(w.a)(R.a.wrapped(O.a, "Dropdown", P.a)),
				F = R.a.wrapped(T.a, "ListingSortIcon", P.a),
				G = (R.a.wrapped(j.b, "DropdownTriangle", P.a), R.a.div("Title", P.a)),
				H = R.a.wrapped(e => r.a.createElement(_.b, B({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", P.a),
				M = e => {
					let {
						disabled: t,
						...n
					} = e;
					return r.a.createElement("div", B({}, n, {
						className: Object(a.a)(P.a.SortWrapper, n.className, {
							[P.a.isDisabled]: t
						})
					}))
				},
				z = R.a.div("DropdownRowDisabled", P.a),
				W = Object(l.v)({
					isFrontpage: l.B,
					isProfilePage: l.L,
					pageLayer: e => e
				}),
				Y = Object(f.c)({
					isAwardListingExperimentEnabled: N.a,
					isBestSortPopularEnabled: E.a,
					user: D.m,
					dropdownIsOpen: (e, t) => Object(L.b)(t.dropdownId || A)(e),
					isPopularPage: l.H
				}),
				K = Object(o.b)(Y, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: s
					} = t;
					return {
						onOpenDropdown: () => e(Object(g.h)({
							tooltipId: n || A
						}))
					}
				});
			var q = R.a.wrapped(W(K(Object(c.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(G, null, S.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(M, {
					disabled: e.disabled
				}, e.children || r.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(k.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, r.a.createElement(F, {
					sort: e.sort
				}))), r.a.createElement(y.a.Consumer, null, t => r.a.createElement(U, B({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(z, null, S.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, s, r) => {
					const o = [m.cb.HOT, m.cb.NEW, m.cb.TOP, m.cb.RISING];
					return (e && (n || s) || t && s) && o.unshift(m.cb.BEST), t && r && o.splice(3, 0, m.cb.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(b.a)(e.baseUrl, {
							sort: t
						}) : Object(x.a)(e.baseUrl, `${t}/`),
						s = n.split("?")[0],
						o = e.isProfilePage ? n.replace(s + "?", "") : void 0;
					return r.a.createElement(_.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(k.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(v.b)(t))
						},
						href: {
							pathname: s,
							state: {
								[C.b.FeedLoadReason]: C.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, r.a.createElement(F, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", P.a),
				V = n("./src/reddit/constants/parameters.ts");
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = R.a.wrapped(O.a, "_Dropdown", Z.a),
				te = Object(w.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && re(e) === m.C.UnitedStates
				},
				se = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return m.lc.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = re(e),
						n = se(e);
					return ne(e) ? `${t}_${n}` : t
				},
				ae = Object(l.v)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(L.b)("StateSort--StateSortPicker")
				}),
				de = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(d.v)(m.C.UnitedStates + "_" + n))
					}
				}));
			var ce = R.a.wrapped(ae(de(e => {
				const t = `${e.baseUrl}?${V.l}=${m.C.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(M, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(H, {
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
				}), Object.keys(m.lc).map(n => {
					const s = m.lc[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === m.lc.AllStates ? t : `${t}_${e}`)(s), oe(s))
					}, r.a.createElement(_.b, {
						className: Object(a.a)(e.rowClassName, e.sort === s ? e.rowSelectedClassName : void 0),
						displayText: J(s),
						isSelected: e.sort === s
					}))
				}))))
			})), "Component", Z.a);
			const le = {
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
				pe = n.n(ue);

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const me = "CountrySort--CountrySortPicker",
				he = Object(l.v)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(L.b)(me)
				});
			var ge = he(Object(o.b)(fe, e => ({
					onCloseDropdown: t => e(Object(g.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(g.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t, {
							[C.b.FeedLoadReason]: C.a.GeoModeChange
						})), e(Object(d.v)(n))
					}
				}))(e => {
					const t = re(e.sort),
						n = se(e.sort),
						s = `${e.baseUrl}?${V.l}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(a.a)(pe.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(me) : e.onOpenDropdown(me)
					}, r.a.createElement(M, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(H, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[m.C.Everywhere]())(),
						id: me,
						showDropdownTriangle: !0
					})), r.a.createElement(y.a.Consumer, null, n => r.a.createElement(te, be({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: me
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(m.C).map(n => {
						const o = m.C[n];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${s}${oe(o)}`, o)
						}, r.a.createElement(_.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: le[o](),
							isSelected: t === o
						}))
					})))), t === m.C.UnitedStates && r.a.createElement(ce, {
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
				we = n.n(Se),
				Ce = n("./src/reddit/components/TimeSort/index.m.less"),
				ke = n.n(Ce);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(w.a)(O.a),
				_e = R.a.div("ListingSortContainer", ke.a),
				xe = Object(l.v)(),
				ve = Object(f.c)({
					dropdownIsOpen: Object(L.b)("TimeSort--SortPicker")
				});
			var je = xe(Object(o.b)(ve, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => r.a.createElement(_e, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(M, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(k.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(y.a.Consumer, null, t => r.a.createElement(Oe, ye({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [m.oc.HOUR, m.oc.DAY, m.oc.WEEK, m.oc.MONTH, m.oc.YEAR, m.oc.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(l.L)(e) || (n = we.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						s = Object(b.a)(n, {
							[V.H]: t
						}),
						o = s.split("?")[0],
						i = `${s.replace(o+"?","")}`;
					return r.a.createElement(_.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(k.b)(t),
						href: {
							pathname: o,
							state: {
								[C.b.FeedLoadReason]: C.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(v.e)(t))
						}
					})
				}))))))),
				Ee = n("./src/reddit/constants/listings.ts"),
				Ne = n("./src/reddit/controls/Button/index.tsx"),
				Le = n("./src/reddit/icons/fonts/index.tsx"),
				De = n("./src/reddit/selectors/meta.ts"),
				Te = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Ie = n.n(Te);

			function Pe() {
				return (Pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = new Set([m.cb.CONTROVERSIAL, m.cb.TOP]),
				Be = new Set([m.cb.CONTROVERSIAL, m.cb.RISING]),
				Ae = new Set([m.cb.CONTROVERSIAL]),
				Ue = "ListingSort--Overflow",
				Fe = Object(l.v)({
					isFrontpage: l.B,
					isProfilePage: l.L,
					pageLayer: e => e
				}),
				Ge = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, E.a, D.m, l.H, N.a, De.k, (e, t, n, s, r, o, a) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e,
						locale: a
					};
					const i = [m.cb.HOT, m.cb.NEW, m.cb.TOP, m.cb.RISING];
					return (t && (s || n) || r && n) && i.unshift(m.cb.BEST), r && o && i.splice(3, 0, m.cb.AWARDED), {
						isPopularPage: r,
						sortOptions: i,
						locale: a
					}
				});
			class He extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(v.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: s
						} = this.props, o = s ? Object(b.a)(n, {
							sort: e
						}) : Object(x.a)(n, `${e}/`), i = o.split("?")[0], d = s ? o.replace(i + "?", "") : void 0;
						return r.a.createElement(Ne.t, {
							className: Object(a.a)(Ie.a.SortLink, e === t && Ie.a.selected),
							kind: Ne.b.InternalLink,
							priority: Ne.c.Plain,
							Icon: n => r.a.createElement(F, Pe({}, n, {
								className: Object(a.a)(Ie.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(k.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[C.b.FeedLoadReason]: C.a.SortChange
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
							sort: o
						} = this.props, a = s && !!n && e === m.cb.HOT && o === m.cb.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && r.a.createElement(ge, {
							baseUrl: Ee.c[Ee.b.Popular],
							buttonClassName: Ie.a.DropdownButton,
							className: Ie.a.CountrySort,
							disabled: t,
							dropdownClassName: Ie.a.Dropdown,
							rowClassName: Ie.a.DropdownRow,
							rowSelectedClassName: Ie.a.DropdownRowSelected,
							wrapperClassName: Ie.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Ie.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: s
					} = this.props;
					return !s.startsWith("en") && (n ? e === m.cb.AWARDED && (t === m.cb.HOT || t === m.cb.TOP) : e === m.cb.BEST && t === m.cb.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([m.cb.TOP, m.cb.NEW]);
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
						sort: s,
						sortOptions: o,
						timeSort: i
					} = this.props, d = !t && Re.has(s), c = Be.has(s), l = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== s);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(q, Pe({}, this.props, {
						buttonClassName: Ie.a.DropdownButton,
						className: Object(a.a)(Ie.a.SortDropdown, e),
						rowClassName: Ie.a.DropdownRow,
						rowIconClassName: Ie.a.DropdownRowIcon,
						rowSelectedClassName: Ie.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(Ie.a.SortButtons, e)
					}, l.map(this.renderSort)), c && this.renderSort(s), d && r.a.createElement(je, {
						buttonClassName: Ie.a.DropdownButton,
						className: Ie.a.TimeSort,
						dropdownClassName: Ie.a.Dropdown,
						listingSort: s,
						onChange: n,
						rowClassName: Ie.a.DropdownRow,
						rowSelectedClassName: Ie.a.DropdownRowSelected,
						timeSort: i || m.pc,
						wrapperClassName: Ie.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(q, Pe({}, this.props, {
						className: Object(a.a)(Ie.a.SortOverflow, e),
						dropdownClassName: Ie.a.Dropdown,
						dropdownId: Ue,
						rowClassName: Ie.a.DropdownRow,
						rowIconClassName: Ie.a.DropdownRowIcon,
						rowSelectedClassName: Ie.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: Ie.a.SortOverflowButton,
						id: Ue
					}, r.a.createElement(Le.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Me = Fe(Object(o.b)(Ge)(Object(c.c)(He))),
				ze = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				We = n.n(ze);
			const Ye = Object(l.v)({
					isProfilePage: l.L,
					pageLayer: e => e
				}),
				Ke = Object(o.b)(null, (e, t) => {
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
								e(Object(d.H)(n, r))
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
						isProfilePage: o,
						sort: i,
						sortOptions: d,
						subredditId: c,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(We.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(Me, {
						baseUrl: e,
						disabled: s,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: d,
						timeSort: l
					}), !o && r.a.createElement(p.a, {
						className: We.a.LayoutSwitch,
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/controls/Dropdown/index.m.less"),
				c = n.n(d);
			const l = {
				[a.cb.BEST]: "best",
				[a.cb.HOT]: "hot",
				[a.cb.NEW]: "new",
				[a.cb.CONTROVERSIAL]: "controversial",
				[a.cb.TOP]: "top",
				[a.cb.RISING]: "rising",
				[a.cb.AWARDED]: "award"
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
					className: Object(o.a)(t, c.a.iconStyles)
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
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, n) {
			e.exports = {
				LanguageRow: "_1uqw13duLAypklZz9JuxH5",
				languageRow: "_1uqw13duLAypklZz9JuxH5",
				Selected: "C0ynfBku9Az2wYA9j1_PA",
				selected: "C0ynfBku9Az2wYA9j1_PA",
				NightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				nightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				ButtonSection: "_2go248Acx87AyaspT-IqC3",
				buttonSection: "_2go248Acx87AyaspT-IqC3",
				SelectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				selectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				FrontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				frontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				TextSection: "_5Rt2rPaHLuyB5smTxh9cS",
				textSection: "_5Rt2rPaHLuyB5smTxh9cS",
				Placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				Icon: "_1ym0rG9P61fqq5EGeggDEg",
				icon: "_1ym0rG9P61fqq5EGeggDEg",
				isLeft: "_1wilU6X1e2oYYu84p5M0Bn",
				isRight: "_1N6ONFJor0MYB1AANfCh8M",
				LanguageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				languageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				HeaderBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				headerBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				MoreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				moreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				PromptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				promptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				PromptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				promptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				Close: "Z2DAjXDKT-rjUoOgPeR9b",
				close: "Z2DAjXDKT-rjUoOgPeR9b",
				PromptTitle: "_6pr2vYjViLknuzg7J_4II",
				promptTitle: "_6pr2vYjViLknuzg7J_4II",
				PromptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				promptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				PromptRow: "piSYz03CLXLD5jdQwPjUy",
				promptRow: "piSYz03CLXLD5jdQwPjUy",
				Dismiss: "Fssd937Pdx1KOrc1lhBS5",
				dismiss: "Fssd937Pdx1KOrc1lhBS5"
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				l = n.n(c),
				u = n("./src/reddit/constants/componentTestIds.ts"),
				p = n("./src/reddit/contexts/ApiContext.tsx"),
				b = n("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/selectors/telemetry.ts");
			const f = "bottom_sheet";
			var g;
			! function(e) {
				e.ADD = "add", e.LATER = "maybe_later", e.SKIP = "skip"
			}(g || (g = {}));
			var S = n("./src/reddit/hooks/useTracking.ts"),
				w = n("./src/reddit/icons/svgs/Close/index.tsx"),
				C = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/eligibleUXExperiences.ts"),
				y = n("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				O = n("./src/reddit/selectors/meta.ts"),
				_ = n("./src/redditGQL/types.ts");
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = e => {
				const {
					gqlContext: t
				} = e, n = Object(o.d)(), c = Object(S.a)(), p = Object(o.e)(O.b), [k, y] = Object(s.useState)(!1), [v, j] = Object(s.useState)({}), [E, N] = Object(s.useState)({}), [L, D] = Object(s.useState)([]);
				let T = ["es"];
				const I = Object(s.useCallback)(async () => {
					const e = await Object(b.b)(t);
					e && (N(e.languages), D(e.preferences), y(!0))
				}, [t]);
				Object(s.useEffect)(() => {
					I()
				}, [I]);
				const P = e => {
						c("skip" === e ? (e => t => ({
							...Object(h.o)(t),
							source: f,
							action: m.c.CLICK,
							noun: g.SKIP,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(p) : (e => t => ({
							...Object(h.o)(t),
							source: f,
							action: m.c.CLICK,
							noun: g.LATER,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(p)), y(!1), n(Object(i.c)({
							experience: _.cb.LanguagePreferenceBottomSheet,
							value: !1
						}))
					},
					R = () => {
						const e = Object.keys(v).join();
						c(((e, t) => n => ({
							...Object(h.o)(n),
							source: f,
							action: m.c.CLICK,
							noun: g.ADD,
							actionInfo: {
								...Object(h.d)(n),
								reason: t,
								type: e
							}
						}))(p, e)), (async () => {
							var e;
							const s = v;
							L.map(e => s[e] = !0);
							const r = await Object(b.d)(t, s);
							(null === (e = null == r ? void 0 : r.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? n(Object(d.f)({
								kind: C.b.SuccessCommunity,
								text: x._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): n(Object(d.f)({
								kind: C.b.Error,
								text: x._("Changes failed to save. Try adding content languages in user settings", null, {
									hk: "2YYdoj"
								})
							}))
						})(), y(!1), n(Object(i.c)({
							experience: _.cb.LanguagePreferenceBottomSheet,
							value: !1
						}))
					};
				return T = T.filter(e => !L.includes(e)), k && 0 !== T.length ? (c((e => t => ({
					...Object(h.o)(t),
					source: f,
					action: m.c.VIEW,
					noun: m.b.SCREEN,
					actionInfo: {
						...Object(h.d)(t),
						type: e
					}
				}))(p)), n(Object(i.d)(_.cb.LanguagePreferenceBottomSheet)), r.a.createElement("div", {
					className: l.a.PromptContainer
				}, r.a.createElement("div", {
					className: l.a.PromptClose
				}, r.a.createElement(w.a, {
					className: l.a.Close,
					onClick: () => P("skip"),
					"data-testid": u.e
				})), r.a.createElement("div", {
					className: l.a.PromptTitle
				}, x._("See content in more languages", null, {
					hk: "4uyzS1"
				})), r.a.createElement("div", {
					className: l.a.PromptSubtitle
				}, x._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "3VhB1c"
				})), 1 === T.length ? r.a.createElement("div", {
					className: l.a.PromptRow,
					onClick: () => (e => {
						const t = v;
						t[e] = !0, j(t), R()
					})(T[0]),
					"data-testid": T[0]
				}, x._("Add {language}", [x._param("language", E[T[0]])], {
					hk: "2emiHZ"
				})) : null, r.a.createElement("div", {
					className: Object(a.a)(l.a.PromptRow, {
						[l.a.Dismiss]: !0
					}),
					onClick: () => P("later")
				}, x._("Maybe later", null, {
					hk: "2LjBDw"
				})))) : null
			};
			t.a = Object(p.b)(e => {
				var t;
				const {
					gqlContext: n
				} = e, s = Object(o.f)().getState();
				return (null === (t = Object(o.e)(e => Object(k.a)(e, {
					experience: _.cb.LanguagePreferenceBottomSheet
				}))) || void 0 === t ? void 0 : t.value) && Object(y.b)(s) ? r.a.createElement(v, {
					gqlContext: n
				}) : null
			})
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
				o = n.n(r);
			t.a = s.a.div("container", o.a)
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
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				b = n("./src/reddit/constants/location.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				f = n("./src/reddit/selectors/experiments/countrySites.ts"),
				g = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				S = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				w = n("./src/reddit/selectors/meta.ts"),
				C = n("./src/redditGQL/types.ts"),
				k = n("./src/reddit/components/SidebarFooter/index.m.less"),
				y = n.n(k);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = d.a.a("Link", y.a), x = Object(a.c)({
				countryCode: w.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: f.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: S.a
			}), v = Object(o.b)(x), j = Object(m.v)({
				isFrontpage: m.B,
				isCountrySitePage: m.z
			}), E = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return r.a.createElement("div", {
					className: y.a.GreyRereddit
				}, n, !!b.c[t] && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, O._("Impressum", null, {
					hk: "4cKXSI"
				})), t === C.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, O._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, O._("help", null, {
					hk: "4lyYaD"
				})), t === C.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, O._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, O._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, O._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, O._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, O._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: y.a.Copyright
				}, O._("Reddit, Inc. © {year}. All rights reserved.", [O._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})))
			};
			t.a = j(v(Object(l.c)(e => {
				const t = Object(o.f)().getState(),
					n = Object(f.a)(t, Object(i.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === p.md.GreyRereddit || e.d2xPdpSideRailRecsVariant === p.md.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === p.md.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(E, {
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
					return n.includes(t) || "en" === t ? r.a.createElement(_, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, s[t]) : null
				};
				return r.a.createElement(u.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!b.c[e.countryCode] && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, O._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === C.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, O._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, O._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === C.j.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, O._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, O._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, O._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, O._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, O._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: y.a.Column
				}, s("de"), s("es"), s("pt"))), r.a.createElement("div", {
					className: y.a.Copyright
				}, O._("Reddit, Inc. © {year}. All rights reserved.", [O._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})), r.a.createElement(c.a, null))
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
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/components/BackToTop/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				m = n.n(b),
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
			const g = d.g[1] + 24,
				S = u.f + 8,
				w = S + 152 + 16,
				C = w + g + 8,
				k = h.a.div("Container", m.a),
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
							top: `calc(100vh - ${n?S:8}px)`
						}
					}, s))
				}, "BackToTop", m.a),
				O = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: o,
						shouldStickToBottom: a
					} = e;
					return i.a.createElement("div", {
						className: Object(s.a)(n, {
							[m.a.BottomStickyStyles]: a,
							[m.a.StickyStyles]: !a && o && !r,
							[m.a.StickyStylesFakeOverlay]: !a && !!r
						})
					}, t)
				};
			class _ extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
						shouldFooterSticky: this.windowHeight > w
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
							children: s,
							className: r,
							hideFooter: o,
							pageLayer: a,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), p = this.state.isBottomSticky;
					return i.a.createElement(k, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(O, {
						isFakeOverlay: n,
						isSticky: u,
						shouldStickToBottom: p
					}, t, s, d, !o && i.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && i.a.createElement(y, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const x = Object(p.v)();
			t.a = x(_)
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
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/widgets.ts"),
				m = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/models/Theme/index.ts"),
				w = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(w.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				k = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(w.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = C(e);
					return Object(S.f)(t)
				},
				O = e => {
					const t = k(e);
					return Object(S.f)(t)
				};
			var _ = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				x = n.n(_);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.v)(), E = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.o)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						r = Object(g.fb)(e);
					return s || r
				},
				nigtmode: g.fb,
				subredditId: u.o,
				topPostVariant: h.d
			}));
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(b.b)(e, t)), this.setState({
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(m.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = k(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: o,
						id: a,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: m
					} = this.props, h = n ? x.a.widgetContentOnly : x.a.widgetContent, f = !s && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, S = f ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, x.a.widgetBackground, {
							[x.a.redditStyle]: s,
							[x.a.clickable]: !!d,
							[x.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: g
					}, u && r.a.createElement("div", {
						className: Object(i.a)(x.a.widgetHeader, {
							[x.a.clickable]: !!l
						}),
						id: a,
						style: {
							...S,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(i.a)(x.a.widgetTitle, b)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), o), r.a.createElement("div", {
						className: Object(i.a)(h, {
							[x.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(p.r, {
						className: x.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, v._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(E(Object(d.a)(Object(l.c)(N))))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = {
					[r.cb.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.cb.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.cb.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.cb.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.cb.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.cb.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.cb.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[r.oc.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.oc.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.oc.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.oc.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.oc.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.oc.ALL]: () => s.fbt._("All Time", null, {
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
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeGqlRequest/index.ts");
			var r, o = n("./src/redditGQL/operations/LanguageSelections.json"),
				a = n("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(r || (r = {}));
			const i = (e, t) => {
					const n = {
						allKey: e,
						suggestedKey: r.SUGGESTED_KEY
					};
					return Object(s.a)(t, {
						...o,
						variables: n
					})
				},
				d = async e => {
					const t = await i(r.ALL_KEY, e());
					if (!t.ok) return null;
					const n = t.body,
						s = null == n ? void 0 : n.data;
					return s ? (e => {
						const t = {},
							n = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: n
						}
					})(s) : null
				}, c = async (e, t, n) => {
					const s = await i(e, t());
					if (!s.ok) return null;
					const o = s.body,
						a = null == o ? void 0 : o.data;
					if (a) {
						return ((e, t, n) => {
							let s = null,
								r = [];
							const o = [],
								a = [],
								i = {},
								d = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									d[e] = !0
								})
							}
							for (let c = 0; c < t.suggested.length; c++) {
								const r = t.suggested[c];
								if (i[r.isoCode] = !0, n === r.isoCode) s = r;
								else {
									if (!e && d[r.isoCode]) continue; {
										const t = !!(e || !e && d[r.isoCode]);
										o.push({
											selected: t,
											...r
										})
									}
								}
							}
							for (let c = 0; c < t.all.length; c++) {
								const o = t.all[c];
								o.isoCode === n ? (s = o, a.push({
									selected: !0,
									...o
								})) : !e && d[o.isoCode] ? a.push({
									selected: !0,
									...o
								}) : i[o.isoCode] || r.push({
									selected: !(e || !d[o.isoCode]),
									...o
								})
							}
							if (r = o.concat(r), null === s) {
								const e = n.split("-").shift();
								for (let t = 0; t < r.length; t++)
									if (r[t].isoCode === e) {
										s = r[t], r.splice(t, 1);
										break
									}
							}
							return s && ((e || !e && d[s.isoCode]) && (s.selected = !0), r.unshift(s)), e || (r = a.concat(r)), {
								sortedLanguages: r
							}
						})(e === r.TOP_KEYS, a, n)
					}
					return null
				}, l = async (e, t) => {
					const n = await ((e, t) => {
						const n = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(s.a)(e, {
							...a,
							variables: n
						})
					})(e(), Object.keys(t));
					if (!n.ok) return null;
					const r = n.body;
					return null == r ? void 0 : r.data
				}
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
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(r);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/telemetry/models/Event.ts");
			const o = e => {
					let {
						subredditId: t,
						postId: n
					} = e;
					return e => ({
						source: r.f.SubredditMuting,
						action: r.d.Mute,
						noun: r.e.Subreddit,
						subreddit: {
							id: t
						},
						...s.o(e),
						...n && {
							post: {
								id: n
							}
						}
					})
				},
				a = e => {
					let {
						subredditId: t,
						postId: n
					} = e;
					return e => ({
						source: r.f.SubredditMuting,
						action: r.d.Unmute,
						noun: r.e.Subreddit,
						subreddit: {
							id: t
						},
						...s.o(e),
						...n && {
							post: {
								id: n
							}
						}
					})
				}
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
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const i = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.yb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				d = (e, t) => n => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.K(n, e),
					subreddit: a.lb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.o(n)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: s.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.L
				}) === s.Td
			}
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
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				d = n("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(i.h)(e) && Object(o.f)(e),
					experimentName: s.rc
				}), a.a),
				l = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(i.h)(e) && Object(o.f)(e),
					experimentName: s.qc
				}), a.a),
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
		"./src/redditGQL/operations/LanguageSelections.json": function(e) {
			e.exports = JSON.parse('{"id":"40df26b7117b"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"6d0707c83164"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.74516b7060044f67e198.js.map