// https://www.redditstatic.com/desktop2x/CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.a47e9be27ed39b6df606.js
// Retrieved at 10/27/2022, 1:50:11 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"], {
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "a", (function() {
				return D
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "b", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
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
				b = (e, t) => Object(a.a)(e, {
					...i,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/actions/subreddit/constants.ts"),
				h = n("./src/reddit/actions/subreddit/notifications.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const S = e => Object(o.f)({
					id: e,
					kind: m.b.Error,
					duration: o.a,
					text: r.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				w = (e, t) => Object(o.f)({
					kind: m.b.SuccessCommunityGreen,
					text: r.fbt._("Muted r/{subreddit name}", [r.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: r.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				k = (e, t) => Object(o.f)({
					kind: m.b.SuccessCommunityGreen,
					text: r.fbt._("Unmuted r/{subreddit name}", [r.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: r.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var C = n("./src/reddit/endpoints/subreddit/about.ts");
			const g = Object(s.a)(p.i),
				O = Object(s.a)(p.h),
				y = Object(s.a)(p.G),
				_ = (Object(s.a)(p.j), Object(s.a)(p.F), Object(s.a)(p.g)),
				x = Object(s.a)(p.f),
				E = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: a
						} = o;
						if ((await u(a(), t)).ok) r && r(), w(n, N({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(S(`error-muting-${t}`))
						}
					}
				},
				N = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: a
						} = o;
						if ((await b(a(), t)).ok) r && r(), k(n, E({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(S(`error-muting-${t}`))
						}
					}
				},
				j = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: a
						} = o;
						if ((await u(a(), t)).ok) r && r(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(w(n, v({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(S(`error-muting-${t}`))
						}
					}
				},
				v = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: r
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: a
						} = o;
						if ((await b(a(), t)).ok) r && r(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(k(n, j({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(S(`error-muting-${t}`))
						}
					}
				},
				T = e => {
					let {
						subredditId: t,
						notificationLevel: n
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: d
						} = i;
						const l = Object(h.a)(n);
						(await ((e, t, n) => Object(a.a)(e, {
							...c,
							variables: {
								input: {
									...n,
									subredditId: t
								}
							}
						}))(d(), t, l)).ok ? (e(y({
							subredditId: t,
							notificationLevel: n
						})), e(Object(o.f)({
							kind: m.b.SuccessCommunityGreen,
							text: Object(h.b)(n)
						}))) : e(Object(o.f)({
							kind: m.b.Error,
							text: r.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				D = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const i = await (e => Object(a.a)(e, d))(s());
					if (i.ok && i.body && i.body.data) {
						const {
							data: t
						} = i.body, n = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(g({
							nodes: n
						}))
					} else e(O()), e(Object(o.f)({
						duration: o.a,
						kind: m.b.Error,
						text: r.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, I = e => {
					let {
						subredditId: t,
						subredditName: n
					} = e;
					return async (e, r, s) => {
						let {
							gqlContext: o
						} = s;
						const a = await b(o(), t),
							{
								data: i
							} = a.body;
						if (a.ok && i.deleteSubredditMuteSettings.ok) e(_(t)), e(k(n));
						else {
							e(S(`error-unmuting-${t}`))
						}
					}
				}, L = e => {
					let {
						subredditName: t
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: a
						} = s;
						const i = n(),
							d = Object(f.t)(i).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (d) {
							const t = d.name,
								n = `error-muting-duplicate-${t}`;
							return e(Object(o.f)({
								id: n,
								kind: m.b.Error,
								duration: o.a,
								text: r.fbt._("Sorry, r/{subreddit name} is already muted.", [r.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const c = await Object(C.a)(a(), t, !0),
							{
								data: l
							} = c.body,
							b = l && l.subreddit;
						if (!c.ok || null === b) {
							return e(((e, t) => Object(o.f)({
								id: e,
								kind: m.b.Error,
								duration: o.a,
								text: r.fbt._("Sorry, r/{subreddit name} isn't a community.", [r.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const p = b.id,
							h = await u(a(), p),
							{
								data: k
							} = h.body;
						if (h.ok && k.updateSubredditMuteSettings.ok) e(x([b])), e(w(b.name));
						else {
							e(S(`error-muting-${p}`))
						}
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
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = n("./src/reddit/actions/notificationsInbox/index.ts"),
				i = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const b = Object(s.a)(i.z),
				m = Object(s.a)(i.y),
				p = Object(s.a)(i.x),
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
							return r.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return r.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return r.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const S = e => {
				let {
					subredditId: t,
					notificationLevel: n,
					successCallback: s,
					undoCallback: i
				} = e;
				return async (e, l, S) => {
					let {
						gqlContext: w
					} = S;
					var k, C, g;
					e(m());
					const O = h(n),
						y = await Object(c.b)(w(), t, O);
					if ((null === (C = null === (k = y.error) || void 0 === k ? void 0 : k.fields) || void 0 === C ? void 0 : C.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(y.body) && (null === (g = y.body.data.updateSubredditNotificationSettings.errors) || void 0 === g ? void 0 : g.length)) return e(p()), e(Object(d.f)({
						kind: u.b.Error,
						text: r.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					y.ok && (e(Object(o.c)({
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
				container: "_365FiUZ11efXHV7l7fNp6K",
				bananaPill: "_2GJIRTOkmAXwBwD8gnpjoC",
				transform: "EUsCIvjLoHDQUlMif6rU3",
				icon: "hf82tIE9hVksLDPq4aS4W",
				text: "_3iPvcis9xcmXbF66ZaOGLu",
				altText: "-kJjcqwGv75MM1ykroFtu",
				bouncing: "_2ytFCvT-cA8CdwGKbaK3jG"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/timeAgo/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/elementIds.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/localStorage/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts");
			var h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/chooseVariant/index.ts");
			const S = e => {
				return Object(f.c)(e, {
					experimentEligibilitySelector: f.a,
					experimentName: h.xf
				}) === h.Sd
			};
			var w = n("./src/reddit/selectors/recapGame.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/BackToTop/index.m.less"),
				g = n.n(C);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = e => {
				if (e) {
					const e = document.getElementById(u.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: u
				} = e;
				const h = Object(l.b)(),
					f = Object(s.useRef)(null),
					[C, _] = Object(s.useState)(!1),
					[x, E] = Object(s.useState)(),
					[N, j] = Object(s.useState)(),
					[v, T] = Object(s.useState)(0),
					D = Object(a.e)(k.l),
					I = Object(a.e)(S),
					L = Object(a.e)(k.R),
					P = Object(a.e)(w.a),
					R = encodeURIComponent(i.a.redditUrl + "/r/recap"),
					B = i.a.accountManagerOrigin,
					A = L ? "/r/recap" : `${B}/login/?dest=${R}`,
					U = D ? D.id : "anonymous",
					F = "on" === P.recapGameState,
					M = () => {
						C && j(setTimeout(() => {
							f.current && (f.current.classList.add(g.a.transform), f.current.style.width = `${v}px`)
						}, 4750)), C && E(setTimeout(() => {
							_(!1), Object(m.Rb)(U, !1)
						}, 5e3))
					};
				Object(s.useEffect)(() => {
					F || setTimeout(() => {
						const e = Object(m.N)(U);
						e ? Object(c.e)(e.lastSeenTime) >= 24 && e.dropSkip === m.a.NONE ? _(!0) : Date.now() >= new Date(2022, 10, 2).getTime() && e.dropSkip !== m.a.SECOND && _(!0) : _(!0)
					})
				}, [U, F]);
				const G = Object(s.useCallback)(e => {
					if (e) {
						const t = e.clientWidth;
						T(t + 32)
					}
				}, []);
				return o.a.createElement("div", {
					className: Object(d.a)(t, g.a.container),
					style: u
				}, C && I && !n && !F ? o.a.createElement("a", {
					ref: f,
					href: A,
					className: g.a.bananaPill,
					onMouseEnter: () => {
						x && clearTimeout(x), N && clearTimeout(N), f.current && (f.current.classList.remove(g.a.transform), f.current.style.width = "65px")
					},
					onMouseLeave: M,
					onClick: () => {
						x && clearTimeout(x), N && clearTimeout(N), _(!1), Object(m.Rb)(U, !0), h((() => e => ({
							source: "recap",
							action: "click",
							noun: "feed_banana",
							...p.o(e)
						}))())
					}
				}, o.a.createElement("img", {
					className: g.a.icon,
					src: `${i.a.assetPath}/img/recap/banana_pill.png`,
					alt: O._("banana", null, {
						hk: "1fs9mn"
					})
				}), o.a.createElement("span", {
					className: g.a.text
				}, "+1"), O._("{=Back to Top}", [O._param("=Back to Top", o.a.createElement("span", {
					ref: G,
					className: g.a.altText
				}, O._("Back to Top", null, {
					hk: "4BTAZ0"
				})))], {
					hk: "4Foziy"
				}), o.a.createElement(r.a, {
					onChange: e => {
						e.isIntersecting && (M(), h((() => e => ({
							source: "recap",
							action: "view",
							noun: "feed_banana",
							...p.o(e)
						}))()))
					},
					rootMargin: "0px 0px 0px 0px",
					threshold: .5
				}, o.a.createElement("div", null))) : o.a.createElement(b.a, {
					className: g.a.button,
					onClick: () => y(n)
				}, O._("Back to Top", null, {
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
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				S = n("./src/reddit/controls/Dropdown/index.tsx"),
				w = n("./src/reddit/controls/Dropdown/Row.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				O = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				y = n.n(O);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = "view--layout--FUE",
				E = "LayoutSwitch--picker",
				N = Object(d.a)(S.a),
				j = {
					[p.d.Card]: function(e) {
						return o.a.createElement(k.a, _({}, e, {
							name: "view_card"
						}))
					},
					[p.d.Classic]: function(e) {
						return o.a.createElement(k.a, _({}, e, {
							name: "view_classic"
						}))
					},
					[p.d.Compact]: function(e) {
						return o.a.createElement(k.a, _({}, e, {
							name: "view_compact"
						}))
					}
				},
				v = {
					[p.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[p.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[p.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[p.d.Search]: () => r.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				T = Object(h.u)(),
				D = Object(i.c)({
					dropdownIsOpen: Object(g.b)(E),
					postLayout: h.S,
					redditStyle: h.D
				}),
				I = Object(a.b)(D, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(b.h)({
						tooltipId: E
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
							screen: Object(C.cb)(t),
							subreddit: Object(C.kb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: r,
							postLayout: s
						} = this.props, a = n || p.e[s], i = e === a, d = j[e], l = v[e];
						return o.a.createElement(w.b, _({}, t, {
							className: Object(c.a)(y.a.LayoutItem, {
								[y.a.selected]: i,
								[y.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: y.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: y.a.LayoutItemTextClassName
						}), o.a.createElement(d, {
							className: y.a.LayoutIcon,
							onClick: i ? void 0 : r,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(N, _({}, e, {
							className: y.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: y.a.DropdownRow,
							rowIconClassName: y.a.DropdownRowIcon,
							rowSelectedClassName: y.a.DropdownRowSelected,
							tooltipId: E
						}), this.renderItem(p.d.Card), this.renderItem(p.d.Classic), this.renderItem(p.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: r
					} = this.props, s = t || p.e[r];
					return o.a.createElement("div", {
						className: Object(c.a)(y.a.Container, e),
						id: x
					}, o.a.createElement("div", {
						className: y.a.DropdownContainer,
						onClick: n
					}, this.renderItem(s, {
						id: E,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				d = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				b = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				m = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				p = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				S = n("./src/reddit/actions/tooltip.ts"),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				k = n("./src/higherOrderComponents/asTooltip.tsx"),
				C = n("./src/reddit/constants/history.ts"),
				g = n("./src/reddit/constants/listingSorts.ts"),
				O = n("./src/reddit/contexts/Tooltip.ts"),
				y = n("./src/reddit/controls/Dropdown/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/helpers/path/index.ts"),
				E = n("./src/reddit/helpers/trackers/navigation.ts"),
				N = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				v = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
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
				U = Object(k.a)(R.a.wrapped(y.a, "Dropdown", P.a)),
				F = R.a.wrapped(I.a, "ListingSortIcon", P.a),
				M = (R.a.wrapped(N.b, "DropdownTriangle", P.a), R.a.div("Title", P.a)),
				G = R.a.wrapped(e => s.a.createElement(_.b, B({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", P.a),
				H = e => {
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
				W = R.a.div("DropdownRowDisabled", P.a),
				z = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				K = Object(f.c)({
					isAwardListingExperimentEnabled: v.a,
					isBestSortPopularEnabled: j.a,
					user: D.l,
					dropdownIsOpen: (e, t) => Object(T.b)(t.dropdownId || A)(e),
					isPopularPage: l.F
				}),
				q = Object(o.b)(K, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: r
					} = t;
					return {
						onOpenDropdown: () => e(Object(S.h)({
							tooltipId: n || A
						}))
					}
				});
			var Y = R.a.wrapped(z(q(Object(c.c)(e => s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && s.a.createElement(M, null, w.fbt._("Sort", null, {
					hk: "2BfINq"
				})), s.a.createElement(H, {
					disabled: e.disabled
				}, e.children || s.a.createElement(G, {
					className: e.buttonClassName,
					displayText: Object(g.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, s.a.createElement(F, {
					sort: e.sort
				}))), s.a.createElement(O.a.Consumer, null, t => s.a.createElement(U, B({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? s.a.createElement(W, null, w.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, r, s) => {
					const o = [p.bb.HOT, p.bb.NEW, p.bb.TOP, p.bb.RISING];
					return (e && (n || r) || t && r) && o.unshift(p.bb.BEST), t && s && o.splice(3, 0, p.bb.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(m.a)(e.baseUrl, {
							sort: t
						}) : Object(x.a)(e.baseUrl, `${t}/`),
						r = n.split("?")[0],
						o = e.isProfilePage ? n.replace(r + "?", "") : void 0;
					return s.a.createElement(_.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(g.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(E.b)(t))
						},
						href: {
							pathname: r,
							state: {
								[C.b.FeedLoadReason]: C.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, s.a.createElement(F, {
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
					[p.lc.AllStates]: () => w.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[p.lc.Alaska]: () => w.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[p.lc.Alabama]: () => w.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[p.lc.Arkansas]: () => w.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[p.lc.Arizona]: () => w.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[p.lc.California]: () => w.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[p.lc.Colorado]: () => w.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[p.lc.Connecticut]: () => w.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[p.lc.DistrictOfColumbia]: () => w.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[p.lc.Delaware]: () => w.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[p.lc.Florida]: () => w.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[p.lc.Georgia]: () => w.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[p.lc.Hawaii]: () => w.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[p.lc.Iowa]: () => w.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[p.lc.Idaho]: () => w.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[p.lc.Illinois]: () => w.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[p.lc.Indiana]: () => w.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[p.lc.Kansas]: () => w.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[p.lc.Kentucky]: () => w.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[p.lc.Louisiana]: () => w.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[p.lc.Massachusetts]: () => w.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[p.lc.Maryland]: () => w.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[p.lc.Maine]: () => w.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[p.lc.Michigan]: () => w.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[p.lc.Minnesota]: () => w.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[p.lc.Missouri]: () => w.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[p.lc.Mississippi]: () => w.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[p.lc.Montana]: () => w.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[p.lc.NorthCarolina]: () => w.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[p.lc.NorthDakota]: () => w.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[p.lc.Nebraska]: () => w.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[p.lc.NewHampshire]: () => w.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[p.lc.NewJersey]: () => w.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[p.lc.NewMexico]: () => w.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[p.lc.Nevada]: () => w.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[p.lc.NewYork]: () => w.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[p.lc.Ohio]: () => w.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[p.lc.Oklahoma]: () => w.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[p.lc.Oregon]: () => w.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[p.lc.Pennsylvania]: () => w.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[p.lc.RhodeIsland]: () => w.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[p.lc.SouthCarolina]: () => w.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[p.lc.SouthDakota]: () => w.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[p.lc.Tennessee]: () => w.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[p.lc.Texas]: () => w.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[p.lc.Utah]: () => w.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[p.lc.Virginia]: () => w.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[p.lc.Vermont]: () => w.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[p.lc.Washington]: () => w.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[p.lc.Wisconsin]: () => w.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[p.lc.WestVirginia]: () => w.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[p.lc.Wyoming]: () => w.fbt._("wyoming", null, {
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
			const ee = R.a.wrapped(y.a, "_Dropdown", Z.a),
				te = Object(k.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && se(e) === p.C.UnitedStates
				},
				re = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return p.lc.AllStates
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
				ae = Object(l.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(T.b)("StateSort--StateSortPicker")
				}),
				de = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(S.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(d.w)(p.C.UnitedStates + "_" + n))
					}
				}));
			var ce = R.a.wrapped(ae(de(e => {
				const t = `${e.baseUrl}?${V.k}=${p.C.UnitedStates}`;
				return s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, s.a.createElement(G, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : J(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(O.a.Consumer, null, n => s.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(p.lc).map(n => {
					const r = p.lc[n];
					return s.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === p.lc.AllStates ? t : `${t}_${e}`)(r), oe(r))
					}, s.a.createElement(_.b, {
						className: Object(a.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: J(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", Z.a);
			const le = {
				[p.C.Everywhere]: () => w.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[p.C.UnitedStates]: () => w.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[p.C.Argentina]: () => w.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[p.C.Australia]: () => w.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[p.C.Bulgaria]: () => w.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[p.C.Canada]: () => w.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[p.C.Chile]: () => w.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[p.C.Colombia]: () => w.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[p.C.Croatia]: () => w.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[p.C.CzechRepublic]: () => w.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[p.C.Finland]: () => w.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[p.C.France]: () => w.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[p.C.Germany]: () => w.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[p.C.Greece]: () => w.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[p.C.Hungary]: () => w.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[p.C.Iceland]: () => w.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[p.C.India]: () => w.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[p.C.Ireland]: () => w.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[p.C.Italy]: () => w.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[p.C.Japan]: () => w.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[p.C.Malaysia]: () => w.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[p.C.Mexico]: () => w.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[p.C.NewZealand]: () => w.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[p.C.Philippines]: () => w.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[p.C.Poland]: () => w.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[p.C.Portugal]: () => w.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[p.C.PuertoRico]: () => w.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[p.C.Romania]: () => w.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[p.C.Serbia]: () => w.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[p.C.Singapore]: () => w.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[p.C.Spain]: () => w.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[p.C.Sweden]: () => w.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[p.C.Taiwan]: () => w.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[p.C.Thailand]: () => w.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[p.C.Turkey]: () => w.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[p.C.UnitedKingdom]: () => w.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				be = n.n(ue);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = "CountrySort--CountrySortPicker",
				he = Object(l.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(T.b)(pe)
				});
			var Se = he(Object(o.b)(fe, e => ({
					onCloseDropdown: t => e(Object(S.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(S.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t, {
							[C.b.FeedLoadReason]: C.a.GeoModeChange
						})), e(Object(d.w)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = re(e.sort),
						r = `${e.baseUrl}?${V.k}=`;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Object(a.a)(be.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(pe) : e.onOpenDropdown(pe)
					}, s.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, s.a.createElement(G, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[p.C.Everywhere]())(),
						id: pe,
						showDropdownTriangle: !0
					})), s.a.createElement(O.a.Consumer, null, n => s.a.createElement(te, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: pe
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(p.C).map(n => {
						const o = p.C[n];
						return s.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${r}${oe(o)}`, o)
						}, s.a.createElement(_.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: le[o](),
							isSelected: t === o
						}))
					})))), t === p.C.UnitedStates && s.a.createElement(ce, {
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
				we = n("./node_modules/path-browserify/index.js"),
				ke = n.n(we),
				Ce = n("./src/reddit/components/TimeSort/index.m.less"),
				ge = n.n(Ce);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ye = Object(k.a)(y.a),
				_e = R.a.div("ListingSortContainer", ge.a),
				xe = Object(l.u)(),
				Ee = Object(f.c)({
					dropdownIsOpen: Object(T.b)("TimeSort--SortPicker")
				});
			var Ne = xe(Object(o.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(S.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => s.a.createElement(_e, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, s.a.createElement(G, {
					className: e.buttonClassName,
					displayText: Object(g.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(O.a.Consumer, null, t => s.a.createElement(ye, Oe({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [p.oc.HOUR, p.oc.DAY, p.oc.WEEK, p.oc.MONTH, p.oc.YEAR, p.oc.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(l.J)(e) || (n = ke.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						r = Object(m.a)(n, {
							[V.N]: t
						}),
						o = r.split("?")[0],
						i = `${r.replace(o+"?","")}`;
					return s.a.createElement(_.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(g.b)(t),
						href: {
							pathname: o,
							state: {
								[C.b.FeedLoadReason]: C.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(E.d)(t))
						}
					})
				}))))))),
				je = n("./src/reddit/constants/listings.ts"),
				ve = n("./src/reddit/controls/Button/index.tsx"),
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
			const Re = new Set([p.bb.CONTROVERSIAL, p.bb.TOP]),
				Be = new Set([p.bb.CONTROVERSIAL, p.bb.RISING]),
				Ae = new Set([p.bb.CONTROVERSIAL]),
				Ue = "ListingSort--Overflow",
				Fe = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Me = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, D.l, l.F, v.a, De.j, (e, t, n, r, s, o, a) => {
					if (e) return {
						isPopularPage: s,
						sortOptions: e,
						locale: a
					};
					const i = [p.bb.HOT, p.bb.NEW, p.bb.TOP, p.bb.RISING];
					return (t && (r || n) || s && n) && i.unshift(p.bb.BEST), s && o && i.splice(3, 0, p.bb.AWARDED), {
						isPopularPage: s,
						sortOptions: i,
						locale: a
					}
				});
			class Ge extends s.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(E.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: r
						} = this.props, o = r ? Object(m.a)(n, {
							sort: e
						}) : Object(x.a)(n, `${e}/`), i = o.split("?")[0], d = r ? o.replace(i + "?", "") : void 0;
						return s.a.createElement(ve.t, {
							className: Object(a.a)(Le.a.SortLink, e === t && Le.a.selected),
							kind: ve.b.InternalLink,
							priority: ve.c.Plain,
							Icon: n => s.a.createElement(F, Pe({}, n, {
								className: Object(a.a)(Le.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(g.a)(e),
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
							isPopularPage: r,
							sort: o
						} = this.props, a = r && !!n && e === p.bb.HOT && o === p.bb.HOT;
						return s.a.createElement(s.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && s.a.createElement(Se, {
							baseUrl: je.c[je.b.Popular],
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
					return !r.startsWith("en") && (n ? e === p.bb.AWARDED && (t === p.bb.HOT || t === p.bb.TOP) : e === p.bb.BEST && t === p.bb.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([p.bb.TOP, p.bb.NEW]);
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
					} = this.props, d = !t && Re.has(r), c = Be.has(r), l = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== r);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(Y, Pe({}, this.props, {
						buttonClassName: Le.a.DropdownButton,
						className: Object(a.a)(Le.a.SortDropdown, e),
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1
					})), s.a.createElement("div", {
						className: Object(a.a)(Le.a.SortButtons, e)
					}, l.map(this.renderSort)), c && this.renderSort(r), d && s.a.createElement(Ne, {
						buttonClassName: Le.a.DropdownButton,
						className: Le.a.TimeSort,
						dropdownClassName: Le.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: Le.a.DropdownRow,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						timeSort: i || p.pc,
						wrapperClassName: Le.a.DropdownSortWrapper
					}), u.length > 0 && s.a.createElement(Y, Pe({}, this.props, {
						className: Object(a.a)(Le.a.SortOverflow, e),
						dropdownClassName: Le.a.Dropdown,
						dropdownId: Ue,
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), s.a.createElement("button", {
						className: Le.a.SortOverflowButton,
						id: Ue
					}, s.a.createElement(Te.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var He = Fe(Object(o.b)(Me)(Object(c.c)(Ge))),
				We = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				ze = n.n(We);
			const Ke = Object(l.u)({
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				qe = Object(o.b)(null, (e, t) => {
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
								e(Object(d.K)(n, s))
							}
						}
					}
				});
			class Ye extends s.a.Component {
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
						subredditId: c,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return s.a.createElement("div", {
						className: Object(a.a)(ze.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, s.a.createElement(He, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: d,
						timeSort: l
					}), !o && s.a.createElement(b.a, {
						className: ze.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = Ke(qe(Object(c.c)(Ye)))
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
				c = n.n(d);
			const l = {
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
				return l[r] ? s.a.createElement(i.a, {
					name: l[r],
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
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				b = n("./src/reddit/constants/location.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/trackers/navigation.ts"),
				h = n("./src/reddit/selectors/experiments/countrySites.ts"),
				f = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				S = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				w = n("./src/reddit/selectors/meta.ts"),
				k = n("./src/reddit/components/SidebarFooter/index.m.less"),
				C = n.n(k);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = d.a.a("Link", C.a), y = Object(a.c)({
				countryCode: w.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: S.a
			}), _ = Object(o.b)(y), x = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			}), E = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return s.a.createElement("div", {
					className: C.a.GreyRereddit
				}, n, !!b.c[t] && s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/impressum"
				}, g._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, g._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, g._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, g._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, g._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, g._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, g._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, g._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), s.a.createElement("div", {
					className: C.a.Copyright
				}, g._("Reddit Inc © {year}. All rights reserved", [g._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = x(_(Object(c.c)(e => {
				const t = Object(o.f)().getState(),
					n = Object(h.a)(t, Object(i.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.ed.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.ed.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.ed.LargeImagePreview ? e.reredditButtons : [];
					return s.a.createElement(E, {
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
					return n.includes(t) || "en" === t ? s.a.createElement(O, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(p.a)(t))
					}, r[t]) : null
				};
				return s.a.createElement(l.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!b.c[e.countryCode] && s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/impressum"
				}, g._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, g._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, g._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, g._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, g._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, g._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, g._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, g._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, r("en"), r("fr"), r("it")), s.a.createElement("div", {
					className: C.a.Column
				}, r("de"), r("es"), r("pt"))), s.a.createElement("div", {
					className: C.a.Copyright
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
				c = n("./src/reddit/components/BackToTop/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				p = n.n(m),
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
			const S = d.g[1] + 24,
				w = u.f + 8,
				k = w + 152 + 16,
				C = k + S + 8,
				g = h.a.div("Container", p.a),
				O = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...r
					} = e;
					return i.a.createElement(c.a, f({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?w:8}px)`
						}
					}, r))
				}, "BackToTop", p.a),
				y = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: s,
						isSticky: o,
						shouldStickToBottom: a
					} = e;
					return i.a.createElement("div", {
						className: Object(r.a)(n, {
							[p.a.BottomStickyStyles]: a,
							[p.a.StickyStyles]: !a && o && !s,
							[p.a.StickyStylesFakeOverlay]: !a && !!s
						})
					}, t)
				};
			class _ extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
						shouldFooterSticky: this.windowHeight > k
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
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !r), b = this.state.isBottomSticky;
					return i.a.createElement(g, {
						className: s,
						innerRef: this.setWrapperRef
					}, i.a.createElement(y, {
						isFakeOverlay: n,
						isSticky: u,
						shouldStickToBottom: b
					}, t, r, d, !o && i.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && i.a.createElement(O, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const x = Object(b.u)();
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/widgets.ts"),
				p = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/models/Theme/index.ts"),
				k = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(k.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				g = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(k.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = C(e);
					return Object(w.f)(t)
				},
				y = e => {
					const t = g(e);
					return Object(w.f)(t)
				};
			var _ = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				x = n.n(_);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = Object(u.u)(), j = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						r = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						s = Object(S.eb)(e);
					return r || s
				},
				nigtmode: S.eb,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class v extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = O(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = g(this.props), e.color = e.fill = y(this.props), e
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
						onHeaderClick: l,
						title: u,
						titleClassName: m,
						truncateThreshold: p
					} = this.props, h = n ? x.a.widgetContentOnly : x.a.widgetContent, f = !r && this.props.styles, S = f ? this.getWidgetBackgroundStyles() : {}, w = f ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(i.a)(t, x.a.widgetBackground, {
							[x.a.redditStyle]: r,
							[x.a.clickable]: !!d,
							[x.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: d,
						style: S
					}, u && s.a.createElement("div", {
						className: Object(i.a)(x.a.widgetHeader, {
							[x.a.clickable]: !!l
						}),
						id: a,
						style: {
							...w,
							...this.props.headerStyles
						},
						onClick: l
					}, s.a.createElement("div", {
						className: Object(i.a)(x.a.widgetTitle, m)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), o), s.a.createElement("div", {
						className: Object(i.a)(h, {
							[x.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? p : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(b.r, {
						className: x.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, E._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = N(j(Object(d.a)(Object(l.c)(v))))
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
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "e", (function() {
				return b
			}));
			var r = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/models/Event.ts");
			const o = () => e => ({
					source: s.f.HomeFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: r.sb(e).id
					},
					...r.o(e)
				}),
				a = () => e => ({
					source: s.f.UserPreferences,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: r.sb(e).id
					},
					...r.o(e)
				}),
				i = () => e => ({
					source: s.f.UserPreferences,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: r.sb(e).id
					},
					...r.o(e)
				}),
				d = () => e => ({
					source: s.f.CommunityNotificationsSettings,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: r.sb(e).id
					},
					...r.o(e)
				}),
				c = () => e => ({
					source: s.f.PopularFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: r.sb(e).id
					},
					...r.o(e)
				}),
				l = () => e => ({
					source: s.f.SubredditIdBanner,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: r.sb(e).id
					},
					...r.o(e)
				}),
				u = () => e => ({
					source: s.f.AboutCommunityOverflow,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: r.sb(e).id
					},
					...r.o(e)
				}),
				b = () => e => ({
					source: s.f.AboutCommunityOverflow,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: r.sb(e).id
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
				return c
			})), n.d(t, "c", (function() {
				return l
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
					widget: Object(a.yb)(n, {
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
					subreddit: a.kb(n),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...a.o(n)
				}),
				c = () => e => ({
					source: s.SIDEBAR,
					action: o.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...a.o(e)
				}),
				l = e => t => ({
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
			const c = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(i.h)(e) && Object(o.f)(e),
					experimentName: r.wc
				}), a.a),
				l = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => !Object(i.h)(e) && Object(o.f)(e),
					experimentName: r.vc
				}), a.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				b = Object(d.a)(c, l, (e, t) => !(!e && !t))
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
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"2717435b2dc0"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.a47e9be27ed39b6df606.js.map