// https://www.redditstatic.com/desktop2x/Subreddit~SubredditWiki.1463ab8ea0a7248835fc.js
// Retrieved at 8/14/2023, 5:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit~SubredditWiki"], {
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				o = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = n.n(o);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(a.b, {
				className: Object(i.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/About/index.m.less": function(e, t, n) {
			e.exports = {
				container: "N_iDpRmG9YYThFDrZyJAv",
				aboutHeader: "_2T1tO-zWzgtKTFfmut2w7_",
				infoIcon: "_1FfqSg_dkea9uZhjR2NZff",
				expandButton: "_3756Fx6x6guD5iUTIFyKLQ",
				headerText: "heKUEgv15QcZEOOBQLcdQ",
				content: "_24emvNxFCdF1xT1nE07Z22",
				collapsed: "_3WvNFS-a1EomDcvRVPdxaL"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/ChannelsList/index.m.less": function(e, t, n) {
			e.exports = {
				more: "yEXxZgb5MQg4NSGZ0WMgB",
				moreText: "PwTl0c0TTn3dtqLgSGHH2",
				chevronIcon: "LZZ_vW1DYdahLhiRHXerj"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				listItem: "w5boqI7CP61oplJYuKFgy",
				greyBackground: "_3JZ1jE9fZedmnOqszIX6Uq",
				name: "_1g82YJfPfX99XdDk4RCVvF",
				bold: "_3PEjo4_qw1yF6OAY528CNz",
				light: "_3oOf0AMbtBG-11JXinK6HH",
				notificationIndicator: "_3KPn156kySmig6QuGEl8D8",
				chatBubblesIcon: "_38m5ZUgLSYat8ghDOUzI5D",
				postsIcon: "_1a3DK4OMX0U6aSijf05RjW"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/ListItem/placeholder.m.less": function(e, t, n) {
			e.exports = {
				container: "_2ntycIUtqloepWz_WOkB1-",
				icon: "_15LJ5K95RpfroqVCo6h6Jz",
				content: "O8WqhKsM6uqZ1ti4jzftf",
				shimmer: "xqDuRbD54bfTiYuytbqHC",
				gradientAnimation: "_31lalrJCmaEJyJOrrOnELR"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				sidebar: "_1g18x6QdNGxinN6_cuc2_1"
			}
		},
		"./src/reddit/components/CommunityChat/constants.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.NEVER_VISITED = "NEVER_VISITED", e.VISITED__NO_NEW_ACTIVITY = "VISITED__NO_NEW_ACTIVITY", e.VISITED__HAS_NEW_ACTIVITY = "VISITED__HAS_NEW_ACTIVITY"
				}(s || (s = {}));
			const r = "matrix-client-container"
		},
		"./src/reddit/components/CommunityChat/contexts/MatrixClientContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/matrix-js-sdk/lib/browser-index.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/selectors/user.ts");
			const c = Object(i.createContext)(null),
				l = e => {
					let {
						children: t
					} = e;
					const n = Object(o.e)(d.a),
						[l, u] = Object(i.useState)(null);
					return Object(i.useEffect)(() => {
						let e = !0;
						const t = r.a.createClient({
							baseUrl: "https://matrix.redditspace.com",
							timelineSupport: !0,
							useAuthorizationHeader: !0
						});
						return (async () => {
							await t.login("com.reddit.token", {
								token: n
							}), await t.startClient({
								initialSyncLimit: 10,
								pollTimeout: 3e4
							}), t.once(s.ClientEvent.Sync, async n => {
								"PREPARED" === n && e && u(t)
							})
						})(), () => {
							e = !1, t.stopClient(), u(null)
						}
					}, [n]), a.a.createElement(c.Provider, {
						value: l
					}, t)
				},
				u = () => Object(i.useContext)(c)
		},
		"./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less": function(e, t, n) {
			e.exports = {
				muteButton: "E6ihBvDYBbdvjzCcN_LZE",
				muteIcon: "_1Sx3lrWefgX2BpcEoC6zMv",
				muteDefault: "_3pc_K2D7OtCZ3HzDnRlOJv",
				muteHover: "_1CwsmOiXqCke04fKLHhV-a"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, n) {
			e.exports = {
				notificationButton: "_3lH4vtstXYL3BXfT_hrmNu",
				notificationDropdown: "_3RIXPgg0td0Ikm3OCair-W",
				notificationRow: "nbdugyDJvnPyib81V0bre",
				isSelected: "_1yo5m2yCZUVzNB40ZytJzk",
				notificationIcon: "qIoApQle9dXP6HkO35IOx",
				notificationPopup: "J-YgwKJ71m7H4bkbzeN5G",
				title: "_3oHXlwUZwpR5SS-8P9tILX",
				subredditWrapper: "_3V00i2DgErfrsJUA2i5OVw",
				subredditTitle: "_8eiyc5qzybrCg1tKBvgsm",
				icon: "_28KZtJenmDKbbe4nGYKwSQ",
				SubredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				subredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				DefaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				defaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				subscribeButton: "_2R2t7BzhdzT5QExBlp5Di0",
				hideButton: "_3lnzUjXBFhqkpfm2GDP6i",
				popupTooltip: "_2h6EM3mo5Qn9Eqm18v5Hiz"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/UserCount/index.m.less": function(e, t, n) {
			e.exports = {
				userCountContainer: "_2RrnVtJvy93R_5EsAOLOlj",
				currentlyViewingCount: "_1-ha6lk0s1V4mXK-GXIY_P",
				separator: "_3pTilZhQ0eLPU1K9h-DUg5",
				subscriberCount: "_3Ou6utr-V6t9WH76zWxf5J"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "MSTY2ZpsdupobywLEfx9u",
				stickyWrapper: "VJkPo4gom3XvkL4X-w0JS",
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX",
				isSticking: "ZGQod_mafxz0rQZ6X1osG",
				buttonWrapper: "_2I_YJCANrzkY2DZkeu2nht",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				SubredditIconImg: "u0UgpXN5r-VO6PP9OAViq",
				subredditIconImg: "u0UgpXN5r-VO6PP9OAViq",
				blur: "_38oiFpMv7UiE7wnlYWtYvR",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				notificationButtonContainer: "_1cAYKT6f3GM-_aZei--pxM",
				intersectionWrapper: "_3EWe8WOn2CDJW5khbbnAIX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/actions/subreddit/muting.ts"),
				m = n("./src/reddit/actions/subreddit/notifications.ts"),
				p = n("./src/lib/combineRefs/index.tsx"),
				b = n("./src/lib/hooks/useOnClickOutside.ts"),
				h = n("./src/lib/hooks/useTooltip.ts"),
				f = n("./src/reddit/components/CommonTooltip/index.m.less"),
				C = n.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var g = r.a.memo((function(e) {
					let {
						visible: t,
						tooltipId: n,
						className: i,
						arrowClassName: a,
						...d
					} = e;
					const [c, l] = Object(s.useState)(t);
					return Object(s.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, l(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), l(!1)
						}
					}, [t]), t ? r.a.createElement("div", v({
						id: n,
						className: Object(o.a)(C.a.tooltip, i, {
							[C.a.visible]: c
						})
					}, d.popperProps), c && r.a.createElement(r.a.Fragment, null, d.arrowProps && r.a.createElement("div", v({
						className: Object(o.a)(C.a.arrow, a)
					}, d.arrowProps)), d.children)) : null
				})),
				x = n("./src/reddit/models/Subreddit/index.ts");
			const E = e => {
					switch (e) {
						case x.c.FREQUENT:
							return "notification_frequent";
						case x.c.OFF:
							return "notification_off";
						case x.c.LOW:
						default:
							return "notification"
					}
				},
				_ = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				y = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var O = n("./node_modules/fbt/lib/FbtPublic.js"),
				S = n("./src/reddit/controls/Dropdown/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/Row.tsx"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				I = n("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				N = n.n(I);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var w = e => {
					return r.a.createElement(S.a, {
						id: e.dropdownId,
						className: N.a.notificationDropdown
					}, [{
						displayText: O.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(x.c.FREQUENT),
						isSelected: e.notificationLevel === x.c.FREQUENT,
						icon: r.a.createElement(j.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === x.c.FREQUENT
						})
					}, {
						displayText: O.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(x.c.LOW),
						isSelected: e.notificationLevel === x.c.LOW,
						icon: r.a.createElement(j.a, {
							name: "notification",
							isFilled: e.notificationLevel === x.c.LOW
						})
					}, {
						displayText: O.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(x.c.OFF),
						isSelected: e.notificationLevel === x.c.OFF,
						icon: r.a.createElement(j.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === x.c.OFF
						})
					}].map(e => r.a.createElement(k.b, P({
						className: Object(o.a)(N.a.notificationDropdown, N.a.notificationRow, {
							[N.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				T = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/selectors/telemetry.ts");
			const R = e => t => ({
				...L.q(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: L.nb(t)
			});
			var F = n("./src/reddit/hooks/useTracking.ts"),
				D = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const B = c.a.img("SubredditIcon", N.a),
				M = c.a.wrapped(D.a, "DefaultIcon", N.a);
			var A = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: n,
						subredditIcon: s,
						onHide: i,
						onUpdate: a
					} = e;
					const o = Object(F.a)(),
						d = n ? r.a.createElement(B, {
							src: s || void 0
						}) : r.a.createElement(M, null),
						c = `r/${t}`;
					return r.a.createElement("div", {
						className: N.a.notificationPopup
					}, r.a.createElement("div", {
						className: N.a.title
					}, r.a.createElement("h2", null, O.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), r.a.createElement("h3", null, O.fbt._("{subreddit name}", [O.fbt._param("subreddit name", c)], {
						hk: "1es0XP"
					}))), r.a.createElement("div", {
						className: N.a.subredditWrapper
					}, r.a.createElement("div", {
						className: N.a.subredditTitle
					}, d, r.a.createElement("span", null, c), r.a.createElement(j.a, {
						name: "notification_frequent",
						className: N.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(T.t, {
						className: N.a.subscribeButton,
						priority: T.c.Primary,
						size: T.d.M,
						text: O.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							i(), a(x.c.FREQUENT), o(R(x.c.FREQUENT.toLowerCase()))
						}
					})), r.a.createElement("button", {
						className: N.a.hideButton,
						onClick: i
					}, O.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				V = n("./src/reddit/helpers/localStorage/index.ts");
			var U = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var W = e => {
					const t = Object(i.d)(),
						n = Object(F.a)(),
						a = Object(h.b)(_),
						o = Object(h.b)(y),
						[d, c] = function(e, t) {
							const [n, r] = Object(s.useState)(Object(V.U)(e, t));
							return [n, Object(s.useCallback)(() => {
								const n = Object(V.a)(e, t);
								r(n)
							}, [e, t, r])]
						}(e.userId, e.subredditId),
						l = Object(i.e)(e => !!Object(U.a)(e));
					Object(s.useEffect)(() => {
						e.notificationLevel !== x.c.LOW && e.notificationLevel !== x.c.OFF || c()
					}, [e.subredditId]);
					const u = 2 === d,
						f = () => {
							a.hide()
						},
						C = () => {
							o.hide()
						};
					Object(s.useEffect)(() => (u && (o.update && o.update(), o.show()), () => {
						C(), f()
					}), [e.subredditName, u]);
					const v = () => {
							C(), a.show()
						},
						O = (e => `dropdown-${e}`)(e.subredditName),
						S = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(O, f);
					const k = Object(s.useCallback)(e => {
							e.stopPropagation(), a.visible ? f() : v()
						}, [f, v, a.visible]),
						I = Object(s.useCallback)(t => {
							t === x.c.FREQUENT && Object(V.eb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						P = Object(s.useCallback)(s => {
							const {
								subredditId: r
							} = e;
							f(), C(), t(Object(m.d)({
								subredditId: r,
								notificationLevel: s,
								successCallback: () => I(s)
							})), n(R(s.toLowerCase()))
						}, [f, e.subredditId, t, n]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						type: "button",
						className: N.a.notificationButton,
						ref: Object(p.a)(a.target.ref, o.target.ref),
						onClick: k,
						"data-testid": "subredditNotificationButton"
					}, r.a.createElement(j.a, {
						name: E(e.notificationLevel),
						className: N.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(g, {
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: O
					}, r.a.createElement(w, {
						dropdownId: O,
						notificationLevel: e.notificationLevel,
						onClick: P
					})), u && !l && r.a.createElement(g, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: S,
						className: N.a.popupTooltip
					}, r.a.createElement(A, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: C,
						onUpdate: P
					})))
				},
				H = n("./src/lib/prettyPrintNumber/index.ts"),
				q = n("./src/reddit/selectors/widgets.ts"),
				G = n("./src/reddit/components/CommunityIdTopBar/UserCount/index.m.less"),
				K = n.n(G);
			const z = O.fbt._("members", null, {
					hk: "28o6N2"
				}),
				Z = O.fbt._("online", null, {
					hk: "3UJwb6"
				}),
				J = (e, t) => void 0 !== e && t ? `${Object(H.b)(e)} ${t}` : "";
			var Y = e => {
					let {
						subredditId: t
					} = e;
					const n = Object(i.e)(e => Object(q.d)(e, {
							subredditId: t
						})),
						{
							currentlyViewingCount: a,
							currentlyViewingText: o,
							subscribersCount: d,
							subscribersText: c
						} = n || {},
						l = Object(s.useMemo)(() => J(a, o || Z), [a, o]),
						u = Object(s.useMemo)(() => J(d, c || z), [d, c]);
					return l || u ? r.a.createElement("div", {
						className: K.a.userCountContainer
					}, r.a.createElement("span", {
						className: K.a.currentlyViewingCount
					}, u), r.a.createElement("span", {
						className: K.a.separator
					}, u && l && "•"), r.a.createElement("span", {
						className: K.a.subscriberCount
					}, l)) : null
				},
				Q = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				X = n("./src/reddit/components/SubredditNav/index.tsx"),
				$ = n("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = n("./src/reddit/constants/componentSizes.ts"),
				te = n("./src/reddit/constants/postLayout.ts"),
				ne = n("./src/reddit/constants/posts.ts"),
				se = n("./src/reddit/featureFlags/index.ts"),
				re = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				ie = n("./src/reddit/constants/tracking.ts");
			var ae = n("./src/reddit/helpers/trackers/subredditMuting.ts"),
				oe = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				de = n("./src/reddit/hooks/useWindowEvent.ts"),
				ce = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				le = n("./src/reddit/selectors/experiments/communityChat.ts"),
				ue = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				me = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				pe = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				be = n("./src/reddit/selectors/subreddit.ts"),
				he = n("./src/reddit/selectors/user.ts"),
				fe = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				Ce = n.n(fe),
				ve = n("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				ge = n("./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less"),
				xe = n.n(ge);
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _e = e => {
				let {
					onClickUnmute: t
				} = e;
				return r.a.createElement(T.t, {
					priority: T.c.Plain,
					className: xe.a.muteButton,
					onClick: t
				}, r.a.createElement(ve.a, {
					className: xe.a.muteIcon
				}), r.a.createElement("span", {
					className: xe.a.muteDefault
				}, Ee._("Muted", null, {
					hk: "incHh"
				})), r.a.createElement("span", {
					className: xe.a.muteHover
				}, Ee._("Unmute", null, {
					hk: "4qbgbm"
				})))
			}, ye = c.a.img("SubredditIcon", Ce.a), Oe = Object(a.c)({
				isNsfwBlurSubreddit: me.e,
				notificationLevel: be.L,
				isMuted: be.K,
				spPollsEnabled: se.d.spPolls,
				subredditInlineEditingEnabled: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(pe.a)(e, {
						subredditId: n
					})
				},
				tournamentsEnabled: (e, t) => {
					let {
						subredditId: n
					} = t;
					return !!n && Object(be.S)(e, {
						subredditId: n
					})
				},
				userId: he.k,
				userIsSubscriber: (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = n;
					return Object(be.jb)(e, {
						identifier: {
							name: s,
							type: "subreddit"
						}
					})
				},
				isCommunityMutingEnabled: ce.a,
				widget: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(q.f)(e, {
						subredditId: n
					}) : void 0
				},
				showCommunityChat: le.d
			}), Se = {
				threshold: [.5, .001],
				rootMargin: `${1-ee.f}px 0px 0px 0px`
			};
			t.a = Object(i.b)(Oe, (e, t) => ({
				_updateSubredditInfo: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(Object(m.c)({
						subredditAboutInfo: {
							[s]: {
								notificationLevel: x.c.LOW
							}
						}
					}))
				},
				unmuteSubreddit: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id),
						r = t.subreddit ? t.subreddit.name : t.subredditName;
					if (s) return e(Object(u.e)({
						subredditId: s,
						subredditName: r
					}))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					n = e.subreddit ? e.subreddit.name : e.subredditName,
					a = e.subreddit ? e.subreddit.url : e.subredditUrl,
					d = e.subreddit ? e.subreddit.title : "",
					c = Object(i.e)(ue.b),
					u = Object(i.e)(ue.a),
					m = c || u,
					[p, b] = Object(s.useState)(!1),
					h = Object(s.useRef)(null),
					[f, C] = Object(s.useState)(),
					[v, g] = Object(s.useState)(null),
					x = Object(F.a)(),
					E = Object(s.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: n
							} = t;
							n >= .5 ? e(!1) : n <= .001 && e(!0)
						})
					})(b), []);
				Object(de.a)("resize", ((e, t, n) => () => {
					var s;
					e(t && n ? null === (s = t.getBoundingClientRect()) || void 0 === s ? void 0 : s.height : void 0)
				})(C, v, m)), Object(oe.a)(h, E, Se);
				const _ = e.subreddit && Object(re.a)(e),
					y = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && _),
					O = n.charAt(0).toUpperCase() + n.slice(1),
					S = !!e.subreddit && e.subredditInlineEditingEnabled,
					k = Object(o.a)(Ce.a.SubredditIcon, Ce.a.editableIcon, {
						[Ce.a.emptyEditableIcon]: !_
					}),
					j = y ? r.a.createElement(Q.a, {
						className: k,
						subreddit: e.subreddit,
						iconUrl: _ || void 0,
						inTopBar: !0
					}) : r.a.createElement(D.a, {
						className: Ce.a.DefaultIcon
					}),
					I = y ? r.a.createElement(ye, {
						className: Object(o.a)(Ce.a.SubredditIconImg, {
							[Ce.a.blur]: e.isNsfwBlurSubreddit
						}),
						src: _ || void 0
					}) : r.a.createElement(D.a, {
						className: Object(o.a)(Ce.a.DefaultIcon, {
							[Ce.a.blur]: e.isNsfwBlurSubreddit
						})
					}),
					N = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					P = e.layout ? e.layout === te.g.Large ? "984px" : "100%" : "1086px",
					w = e.isCommunityMutingEnabled && e.isMuted;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					style: {
						height: p ? void 0 : f
					},
					className: Object(o.a)(Ce.a.wrapper, {
						[Ce.a.stickyWrapper]: m,
						[Ce.a.isSticking]: p
					})
				}, r.a.createElement("div", {
					className: Ce.a.container,
					style: {
						maxWidth: P
					},
					ref: m ? g : void 0
				}, r.a.createElement("div", {
					className: Ce.a.subredditMetaContainer
				}, S ? j : I, r.a.createElement("div", {
					className: Object(o.a)(Ce.a.textContainer, {
						[Ce.a.textContainerNoIcon]: !y
					})
				}, r.a.createElement("div", {
					className: Object(o.a)(Ce.a.text, {
						[Ce.a.blur]: e.isNsfwBlurSubreddit
					})
				}, r.a.createElement("h1", {
					className: Ce.a.title
				}, d || O), !!d && r.a.createElement("h2", {
					className: Ce.a.description
				}, "r/", n), e.showCommunityChat && !!t && r.a.createElement(Y, {
					subredditId: t
				})), r.a.createElement("div", {
					className: Ce.a.buttonWrapper
				}, r.a.createElement("div", {
					className: Ce.a.subscribeButtonContainer
				}, r.a.createElement($.a, {
					className: Ce.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return p ? (e => t => ({
							...L.q(t),
							source: "sticky_banner",
							action: ie.c.CLICK,
							noun: e,
							subreddit: L.nb(t)
						}))(t) : (e => t => ({
							...L.q(t),
							source: "id_banner",
							action: ie.c.CLICK,
							noun: e,
							subreddit: L.nb(t)
						}))(t)
					},
					identifier: {
						name: n,
						type: ne.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					onClick: () => {
						!e.userIsSubscriber && e.setRelatedRecommendedCommunitiesVisible && e.setRelatedRecommendedCommunitiesVisible(!0)
					},
					afterUnsubscribeAction: () => {
						t && (Object(V.eb)(e.userId, t), e.updateSubredditInfo())
					}
				})), w && r.a.createElement(_e, {
					onClickUnmute: () => {
						x(Object(ae.b)({
							subredditId: t
						})), e.unmuteSubreddit()
					}
				}), e.userIsSubscriber && !w && t && e.notificationLevel && r.a.createElement("div", {
					className: Ce.a.notificationButtonContainer
				}, r.a.createElement(W, {
					notificationLevel: e.notificationLevel,
					subredditName: n,
					subredditId: t,
					subredditIcon: _,
					shouldShowSubredditIcon: y,
					userId: e.userId
				}))))), N && r.a.createElement(X.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: a,
					subredditId: t,
					subredditNavContainerClassName: Ce.a.subredditNavContainer
				}))), r.a.createElement("div", {
					className: Ce.a.intersectionWrapper
				}, r.a.createElement("div", {
					style: {
						height: m ? f : void 0
					},
					ref: m ? h : void 0
				})))
			}))
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "j", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/redditGQL/types.ts");
			const i = 500,
				a = 100,
				o = 5e3,
				d = 0,
				c = 1440,
				l = 36600,
				u = 1e9,
				m = {
					disabled: s.fbt._("Disabled", null, {
						hk: "1KaunG"
					}).toString(),
					modonly: s.fbt._("Mods only", null, {
						hk: "2yA6R8"
					}).toString(),
					anyone: s.fbt._("Anyone", null, {
						hk: "4gPsEy"
					}).toString()
				},
				p = [s.fbt._("Wiki is disabled for all users except mods", null, {
					hk: "2loUiE"
				}).toString(), s.fbt._("Only mods, approved wiki contributors, or those on a page's edit list may edit", null, {
					hk: "1WUeVN"
				}).toString(), s.fbt._("Anyone who can submit to the community may edit", null, {
					hk: "3hxotT"
				}).toString()],
				b = {
					any: s.fbt._("Any", null, {
						hk: "hVUT8"
					}),
					link: s.fbt._("Links only", null, {
						hk: "3upkyk"
					}),
					self: s.fbt._("Text posts only", null, {
						hk: "1VZn8Y"
					})
				},
				h = [s.fbt._("Any post type is allowed", null, {
					hk: "1rOxtJ"
				}), s.fbt._("Only links to external sites are allowed", null, {
					hk: "OJQdj"
				}), s.fbt._("Only text posts are allowed", null, {
					hk: "3q3v14"
				})],
				f = {
					mods: s.fbt._("Moderators", null, {
						hk: "2rrkiT"
					}),
					anyone: s.fbt._("Anyone", null, {
						hk: "Xp8Fs"
					})
				},
				C = {
					[r.X.Low]: s.fbt._("Low", null, {
						hk: "4k3iTe"
					}),
					[r.X.High]: s.fbt._("High (default)", null, {
						hk: "2GOHsH"
					}),
					[r.X.All]: s.fbt._("All", null, {
						hk: "gl6gc"
					})
				},
				v = {
					[r.X.Low]: s.fbt._("Low (default)", null, {
						hk: "2tqJd7"
					}),
					[r.X.High]: s.fbt._("High", null, {
						hk: "ABfkc"
					}),
					[r.X.All]: s.fbt._("All", null, {
						hk: "3bPDOM"
					})
				},
				g = {
					blank: s.fbt._("none (recommended)", null, {
						hk: "2FMwQH"
					}),
					confidence: s.fbt._("best", null, {
						hk: "13cLYH"
					}),
					old: s.fbt._("old", null, {
						hk: "3V0QN8"
					}),
					top: s.fbt._("top", null, {
						hk: "40R5FY"
					}),
					qa: s.fbt._("q&a", null, {
						hk: "3cm6YL"
					}),
					live: s.fbt._("live (beta)", null, {
						hk: "2EVYAd"
					}),
					controversial: s.fbt._("controversial", null, {
						hk: "1uFV5F"
					}),
					new: s.fbt._("new", null, {
						hk: "39TZi6"
					})
				}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				QuarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				quarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.tsx"),
				C = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				g = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				x = n("./node_modules/lodash/flatMap.js"),
				E = n.n(x),
				_ = n("./src/lib/linkMatchers/index.ts"),
				y = n("./src/lib/linkMatchers/customLinks.ts"),
				O = n("./src/reddit/controls/OutboundLink/index.tsx");
			const S = /\[(.+?)\]\((.+?)\)/g,
				k = e => {
					const t = e.split(S);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, i] = t.slice(s, s + 3);
						n.push(e), n.push([i, r])
					}
					return n
				};
			var j = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = E()(t, k)), e.parseRegularLinks && (t = E()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = _.c.add(y.g.subreddit.prefix, y.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return i.a.createElement(O.b, {
								className: e.linkClassName,
								href: s,
								key: n
							}, r)
						}
						return i.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				I = n("./src/reddit/constants/parameters.ts"),
				N = n("./src/reddit/contexts/PageLayer/index.tsx"),
				P = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/reddit/icons/svgs/PrivateKey/index.tsx"),
				T = n("./src/reddit/models/ContentGate.ts"),
				L = n("./src/reddit/selectors/contentGate.ts"),
				R = n("./src/reddit/selectors/meta.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/components/ContentGate/index.m.less"),
				B = n.n(D);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = l.a.wrapped(w.a, "PrivateKey", B.a), V = l.a.div("ButtonsContainer", B.a), U = l.a.div("Container", B.a), W = l.a.div("ContainerExp", B.a), H = l.a.div("Description", B.a), q = l.a.div("PrivateSubredditDetails", B.a), G = l.a.div("PrivateSubredditDescription", B.a), K = l.a.h3("PrivateSubredditName", B.a), z = l.a.a("Link", B.a), Z = l.a.wrapped(P.n, "LinkRouterButton", B.a), J = l.a.wrapped(P.m, "LinkButton", B.a), Y = l.a.wrapped(P.p, "SecondaryLinkButton", B.a), Q = l.a.wrapped(Z, "GoHomeLinkButton", B.a), X = l.a.wrapped(h.a, "CreateCommunityButton", B.a), $ = l.a.img("Image", B.a), ee = l.a.img("ImagePlaceholder", B.a), te = l.a.wrapped(Z, "LeftLinkRouterButton", B.a), ne = l.a.wrapped(J, "LeftLinkButton", B.a), se = l.a.wrapped(Y, "SecondaryLeftLinkButton", B.a), re = l.a.h3("Title", B.a), ie = l.a.div("PageBody", B.a), ae = l.a.div("InterstitialMessageWrapper", B.a), oe = l.a.div("QuarantineLearnMore", B.a), de = Object(c.c)({
				isLoggedIn: F.R,
				origin: R.l,
				user: F.m,
				isPrivateSubredditContributorRequestPending: e => Object(L.a)(e),
				isSeo: R.h
			}), ce = Object(N.v)(), le = Object(a.b)(de, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.C(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.u(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.r)())
					}
				}
			}), ue = e => {
				const {
					banMessage: t,
					banTitle: n,
					contentGateType: r,
					continueToQuarantinedSubreddit: a,
					continueToGatedSubreddit: o,
					isLoggedIn: d,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: l,
					isSeo: p,
					location: h,
					origin: f,
					pageLayer: x,
					quarantineRequiresEmail: E,
					quarantineMessage: _,
					quarantineMessageHtml: y,
					quarantineMessageRTJson: O,
					interstitialWarningMessage: S,
					interstitialWarningMessageHtml: k,
					interstitialWarningMessageRTJson: N,
					setNSFWPreference: P,
					subredditDescription: w,
					subredditName: L,
					user: R
				} = e, F = async () => {
					if (d ? await P() : await Object(m.q)(), p) {
						const e = new URL(window.location.href);
						e.searchParams.set(I.k, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (r) {
					case T.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(re, null, M._("r/{community name} is a Reddit Premium community", [M._param("community name", L)], {
							hk: "2lyDwB"
						})), i.a.createElement(H, null, M._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(V, null, R ? i.a.createElement(se, {
							href: `${s.a.redditUrl}/premium`,
							redditStyle: !0
						}, M._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(ne, {
							href: Object(u.a)(h, f),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), R ? i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(Y, {
							href: Object(u.a)(h, f),
							redditStyle: !0
						}, M._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case T.a.Nsfw:
					case T.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(re, null, r === T.a.Nsfw ? M._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : M._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(H, null, M._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(V, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(Y, {
							onClick: F,
							redditStyle: !0
						}, M._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case T.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(A, null), i.a.createElement(re, null, "r/", L, " ", M._("is a private community", null, {
							hk: "7zZmq"
						})), w && w.length && i.a.createElement(q, null, i.a.createElement(K, null, "r/", L), i.a.createElement(G, null, i.a.createElement("div", null, w))), i.a.createElement(H, null, M._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", L, " ", M._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), M._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(V, null, R ? i.a.createElement(i.a.Fragment, null, !c && i.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: B.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), i.a.createElement(se, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${L}`,
							redditStyle: !0
						}, M._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(se, {
							href: Object(u.a)(h, f),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), L && i.a.createElement(g.a, {
							subredditName: L
						}));
					case T.a.QuarantinedSubreddit:
						const d = R && R.hasVerifiedEmail;
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined_interstitial.svg`
						}), i.a.createElement(re, null, M._("r/{subredditName} is quarantined", [M._param("subredditName", L)], {
							hk: "2pxhFx"
						})), i.a.createElement(H, null, i.a.createElement(ae, null, O ? i.a.createElement(v.b, {
							content: O,
							rtJsonElementProps: {
								pageLayer: x
							}
						}) : y ? i.a.createElement(C.a, {
							html: y
						}) : _ || M._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), !E || d ? M._("Are you sure you’d like to continue?", null, {
							hk: "1fQqm4"
						}) : R ? M._("If you’d still like to view this community, verify your email address to continue.", null, {
							hk: "2vhFbK"
						}) : M._("If you’d still like to view this community, verify your email address and log in to your Reddit account to continue.", null, {
							hk: "2SmlRy"
						})), i.a.createElement(V, null, ((e, t, n) => {
							const r = e && e.hasVerifiedEmail;
							return !n || r ? i.a.createElement(V, null, i.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, M._("Go Back", null, {
								hk: "11Lp6m"
							})), i.a.createElement(Y, {
								onClick: t,
								redditStyle: !0
							}, M._("Yes, Continue", null, {
								hk: "1D03m3"
							}))) : i.a.createElement(V, null, i.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, M._("Go Back", null, {
								hk: "11Lp6m"
							})), i.a.createElement(Y, {
								href: `${s.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, M._("Verify Email", null, {
								hk: "1893cq"
							})))
						})(R, a, E)), i.a.createElement(oe, null, M._("Learn more about {=quarantined communities}.", [M._param("=quarantined communities", i.a.createElement(z, {
							href: "https://reddit.zendesk.com/hc/en-us/articles/360043069012-Quarantined-Subreddits"
						}, M._("quarantined communities", null, {
							hk: "3yq6Z5"
						})))], {
							hk: "uOTFJ"
						})));
					case T.a.GatedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(re, null, M._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), i.a.createElement(H, null, i.a.createElement(ae, null, N ? i.a.createElement(v.b, {
							content: N,
							rtJsonElementProps: {
								pageLayer: x
							}
						}) : k ? i.a.createElement(C.a, {
							html: k
						}) : S), M._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), i.a.createElement(V, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("No Thank You", null, {
							hk: "4B26AR"
						})), i.a.createElement(Y, {
							onClick: o,
							redditStyle: !0
						}, M._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case T.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(re, null, n), (e => i.a.createElement(H, null, e ? i.a.createElement(j, {
							linkClassName: B.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : M._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(V, null, i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case T.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(re, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(V, null, i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case T.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ee, null), i.a.createElement(re, null, M._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(H, null, M._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(V, null, R && i.a.createElement(X, {
							eventSource: "content_gate"
						}), i.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case T.a.ProfileDoesNotExist:
					case T.a.ProfileDeleted:
					case T.a.ProfileSuspended:
					case T.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case T.a.ProfileBlockedForLegalReason:
									return M._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case T.a.ProfileDeleted:
									return M._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case T.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, M._("This account has been {=suspended} .", [M._param("=suspended", i.a.createElement(z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, M._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case T.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(re, null, M._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(H, null, M._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(V, null, i.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case T.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(re, null, M._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(V, null, i.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case T.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(re, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(V, null, i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ce(le(Object(o.i)(e => {
				const t = Object(r.useContext)(d.a) ? W : U;
				return i.a.createElement(t, null, i.a.createElement("div", {
					"data-testid": "content-gate"
				}, i.a.createElement(ie, null, ue(e))), i.a.createElement(f.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(n.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/DescriptionBlock/EditableDescriptionBlock.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-autosize-textarea/lib/index.js"),
				o = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditSettings.ts"),
				p = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				b = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				h = n("./src/reddit/components/IdCard/DescriptionBlock/index.tsx"),
				f = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				C = n("./src/reddit/components/TrackingHelper/index.tsx"),
				v = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/selectors/activeModalId.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				O = n.n(y);
			const S = 6,
				k = `${f.a}_description`,
				j = Object(c.c)({
					apiPending: _.Y,
					unsavedChangesModalIsOpen: Object(E.b)(k)
				}),
				I = Object(d.b)(j, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						updateSubredditSettings: t => e(Object(m.j)(n.id, t, {}, !0)),
						openUnsavedChangesModal: () => {
							e(Object(u.h)(k))
						}
					}
				});
			class N extends i.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = i.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
						this.textAreaRef = e
					}, this.handleOnFocus = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.state.editing) {
							const t = e.target !== this.textAreaRef ? () => this.focusTextArea() : void 0;
							this.setState({
								editing: !0
							}, t), this.props.sendEvent(g.a)
						}
					}, this.focusTextArea = () => {
						if (this.textAreaRef && this.textAreaRef.focus && (this.textAreaRef.focus({
								preventScroll: !0
							}), this.textAreaRef.setSelectionRange)) {
							const e = this.textAreaRef.value.length;
							this.textAreaRef.setSelectionRange(e, e)
						}
					}, this.handleOnBlur = e => {
						e.relatedTarget === this.textAreaRef || e.target.contains(e.relatedTarget) || e.relatedTarget === this.containerRef.current || (e.preventDefault(), e.stopPropagation(), this.stopEditing(!0, !1))
					}, this.onCancel = () => {
						this.setState({
							description: this.props.description
						}, () => this.stopEditing(!1, !0))
					}, this.onSave = () => {
						this.props.updateSubredditSettings({
							publicDescription: this.state.description
						}), this.isSaving = !0, this.stopEditing(!1, !0);
						const e = this.state.description,
							t = this.props.description;
						this.props.sendEvent(Object(g.d)(e, t))
					}, this.state = {
						description: e.description || "",
						editing: !1
					}
				}
				hasFocus() {
					return !!document.activeElement && (document.activeElement === this.containerRef.current || this.containerRef.current && this.containerRef.current.contains(document.activeElement))
				}
				UNSAFE_componentWillReceiveProps(e) {
					!e.apiPending && this.props.apiPending && (this.isSaving = !1), e.description === this.props.description || this.hasPendingChanges() || this.setState({
						description: e.description
					})
				}
				stopEditing(e, t) {
					e && this.hasPendingChanges() && !this.isSaving && this.props.openUnsavedChangesModal(), this.setState({
						editing: !1
					}), t && this.containerRef.current && this.containerRef.current.blur()
				}
				renderInactiveDescription() {
					const e = this.props.apiPending ? i.a.createElement(v.a, {
						className: O.a.loadingIcon,
						sizePx: S
					}) : void 0;
					return this.state.description ? i.a.createElement(i.a.Fragment, null, i.a.createElement(h.a, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, i.a.createElement(x.a, {
						name: "edit",
						className: O.a.pencil
					}), e)) : i.a.createElement("div", {
						className: O.a.emptyDescription
					}, s.fbt._("Add description", null, {
						hk: "47p1vF"
					}), e)
				}
				renderTextArea() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(o.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: s.fbt._("Tell us about your community", null, {
							hk: "40SeWt"
						}),
						className: Object(l.a)(O.a.editableDescription, O.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: b.d,
						value: this.state.description,
						"data-testid": "edit-description-block"
					}), i.a.createElement("div", {
						className: O.a.editableDescriptionControlRow
					}, i.a.createElement(p.a, {
						className: O.a.characterCountdown,
						maxChars: b.d,
						text: this.state.description
					}), i.a.createElement("span", {
						className: O.a.cancel,
						onClick: this.onCancel
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement("span", {
						className: O.a.save,
						onClick: this.onSave
					}, s.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [O.a.defaultEditableDescriptionContainer];
					const e = [O.a.editableDescriptionContainer];
					return this.state.editing && e.push(O.a.activeEditableDescriptionContainer), e
				}
				render() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						ref: this.containerRef,
						className: Object(l.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						"data-testid": "description-block"
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && i.a.createElement(f.b, {
						withOverlay: !0,
						modalId: k,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})))
				}
			}
			t.a = I(Object(C.c)(N))
		},
		"./src/reddit/components/IdCard/DescriptionBlock/index.m.less": function(e, t, n) {
			e.exports = {
				descriptionContainer: "_1EPynDYoibfs7nDggdH7Gq",
				truncated: "_3-0c12FCnHoLz34dQVveax",
				description: "_1zPvgKHteTOub9dKkvrOl4",
				showMore: "_1dp4_svQVkkuV143AIEKsf",
				ellipsis: "_5VBcBVybCfosCzMJlXzC3",
				showFullDescriptionButton: "_3YNtuKT-Is6XUBvdluRTyI",
				active: "_2Z_0gYdq8Wr3FulRLZXC3e",
				transition: "_2ZTVnRPqdyKo1dA7Q7i4EL",
				noTransition: "k51Bu_pyEfHQF6AAhaKfS",
				editableDescriptionContainer: "_2qi_L6gKnhyJ0ZxPmwbDFK",
				activeEditableDescriptionContainer: "_3GG6tRGPPJiejLqt2AZfh4",
				defaultEditableDescriptionContainer: "IzSmZckfdQu5YP9qCsdWO",
				emptyDescription: "_1YvJWALkJ8iKZxUU53TeNO",
				editableDescriptionControlRow: "_3adDzm8E3q64yWtEcs5XU7",
				characterCountdown: "_3jyKpErOrdUDMh0RFq5V6f",
				save: "dqhlvajEe-qyxij0jNsi0",
				cancel: "_12nHw-MGuz_r1dQx5YPM2v",
				editableDescription: "_3zTJ9t4vNwm1NrIaZ35NS6",
				activeEditableDescription: "_2JIiUcAdp9rIhjEbIjcuQ-",
				loadingIcon: "_2I2LpaEhGCzQ9inJMwliNO",
				pencil: "_42Nh7O6pFcqnA6OZd3bOK"
			}
		},
		"./src/reddit/components/IdCard/DescriptionBlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/fastdom/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				l = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = o.a.div("DescriptionContainer", l.a);
			class p extends r.a.Component {
				constructor(e) {
					super(e), this.containerRef = null, this.textRef = null, this.showFullDescription = e => {
						e.preventDefault(), e.stopPropagation(), this.setState({
							shouldTruncateDescription: !1
						})
					}, this.setContainerRef = e => this.containerRef = e, this.setTextRef = e => this.textRef = e, this.state = {
						shouldDisplayShowMore: !1,
						shouldTruncateDescription: e.shouldTruncateDescription
					}
				}
				componentDidMount() {
					this.state.shouldTruncateDescription && a.a.read(() => {
						this.containerRef && this.textRef && this.textRef.offsetHeight > this.containerRef.offsetHeight && this.setState({
							shouldDisplayShowMore: !0
						})
					})
				}
				render() {
					const {
						children: e,
						description: t,
						subreddit: n
					} = this.props, {
						shouldDisplayShowMore: s,
						shouldTruncateDescription: a
					} = this.state, o = n ? u._("Welcome to {subredditName}", [u._param("subredditName", n.name)], {
						hk: "1dVVp0"
					}) : "";
					return r.a.createElement(m, {
						className: Object(i.a)(l.a.descriptionContainer, a && l.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef,
						"data-testid": "no-edit-description-block"
					}, r.a.createElement("div", {
						className: l.a.description,
						ref: this.setTextRef
					}, t || o, e), a && s && r.a.createElement("div", {
						className: l.a.showMore
					}, "...", r.a.createElement(d.r, {
						className: l.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, u._("MORE", null, {
						hk: "1Xmz7S"
					}))))
				}
			}
			t.a = p
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "i", (function() {
				return I
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./node_modules/lodash/isNil.js"),
				d = n.n(o),
				c = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...s
							}
						} = this;
						l.a.publish(c.a, s, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const C = (e, t) => {
				const n = Object(h.c)(e, t),
					s = Object(f.N)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(i.b)(() => Object(a.a)(C, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const g = (e, t) => {
				const n = Object(h.c)(e, t),
					s = Object(f.N)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var x = Object(i.b)(() => Object(a.a)(g, e => e))(e => r.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var E = Object(i.b)(() => Object(a.c)({
					subreddit: f.X
				}))(e => r.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				_ = n("./src/reddit/hooks/usePostContext.ts");
			var y = e => {
				const t = Object(_.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var O = e => {
				const t = Object(_.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var S = e => {
				const t = Object(_.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var k = Object(i.b)(() => Object(a.c)({
				subreddit: f.X
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var j = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.Q)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var I = Object(i.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(f.X)(e, {
						subredditId: n
					}) : null
				}
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, n) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				videoStyles: "LAwAnSnoexNeHoqZmXdLD",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/ModProgressModule/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "ModProgressModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("ModProgressModule")]).then(n.bind(null, "./src/reddit/components/ModProgressModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModProgressModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
			const b = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				h = d.a.wrapped(e => {
					const t = Object(l.a)();
					return i.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, s, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									r && s(n, r), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(o.a)(h))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, n) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/polished/dist/polished.es.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Post/index.tsx"),
				C = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				g = n("./src/reddit/helpers/name/index.ts"),
				x = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = n("./src/reddit/components/MiniCardPost/index.m.less"),
				O = n.n(y),
				S = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				k = n.n(S);
			const j = e => e.type === x.f.Spoiler,
				I = Object(h.v)();
			t.a = I(Object(f.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: x,
					showSubredditMeta: y = !0,
					showSubredditName: S,
					subredditOrProfile: I
				} = e, N = h && h.preview && h.preview.url || void 0, P = h && h.isSponsored ? "promoted_trend" : "trending", w = h && Object(l.a)(h.permalink) || "", T = x && w || f && Object(o.a)("/search", {
					q: f.rawQuery,
					source: P
				}) || w, L = f ? f.subredditInfo && f.subredditInfo.icon : I && I.icon.url, R = f ? f.subredditInfo && f.subredditInfo.displayText : I && (I.displayText || I.name), F = h ? h.flair.filter(j) : [], D = h ? h.score : 0, B = h ? h.numComments : 0, M = h && h.isSponsored, A = Object(_.a)(e).body, V = `linear-gradient(\n      ${Object(r.f)(A,.2)},\n      ${Object(r.f)(A,.3)},\n      ${Object(r.f)(A,.4)},\n      ${Object(r.f)(A,.6)},\n      ${Object(r.f)(A,.8)},\n      ${A}\n    )`, U = a.a.createElement("div", {
					id: i,
					className: Object(d.a)(k.a.trendingPost, {
						[k.a["m-background"]]: !!N
					})
				}, a.a.createElement(C.default, {
					to: T
				}, a.a.createElement("div", {
					className: Object(d.a)(k.a.backgroundWrapper, O.a.backgroundWrapper, t),
					style: {
						background: Object(E.f)(Object(_.a)(e).body, N || Object(_.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": V
					}
				}, M && a.a.createElement("div", {
					className: k.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(k.a.innerContainer, O.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? k.a.title : k.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(k.a.description, n)
				}, F.length > 0 && a.a.createElement(m.a, {
					className: k.a.flair,
					titleFlair: F,
					nowrap: !0,
					post: h
				}), h.title) : a.a.createElement("div", {
					className: k.a.spacer
				}), y && L && R && a.a.createElement(v.a, {
					className: k.a.relatedSubredditMetaData,
					iconClassName: k.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", R)], {
						hk: "2YTyJf"
					})
				}), !y && h && a.a.createElement("div", {
					className: k.a.metaLine
				}, S && R && a.a.createElement("span", {
					className: k.a.meta
				}, Object(g.d)(R)), a.a.createElement("span", {
					className: k.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(D, "number", Object(u.b)(D))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: k.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(B, "number", Object(u.b)(B))], {
					hk: "311aXY"
				})))))));
				return M ? a.a.createElement(p.a, {
					post: h
				}, U) : U
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/selectors/brandSafety.ts"),
				d = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.v)();
			t.a = m(Object(i.b)((e, t) => {
				let {
					listingName: n,
					pageLayer: s
				} = t;
				const r = Object(o.b)(e, {
						listingName: n,
						pageLayer: s
					}),
					i = Object(c.G)(e) || Object(d.a)(e),
					a = Object(o.e)(e);
				return {
					canShowAd: r && !i,
					awaitingBrandSafetyCheck: !Object(o.c)(e),
					isAdsDisabled: i,
					viewIsUnsafe: a
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: n,
					viewIsUnsafe: s,
					pageLayer: i,
					...a
				} = e;
				return !n && t && i ? r.a.createElement(l.a, u({
					forceHouseAd: s
				}, a)) : null
			}))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", r.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return a
			})), n.d(t, "p", (function() {
				return o
			})), n.d(t, "n", (function() {
				return d
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = n.n(r);
			const a = s.a.section("FormPage", i.a),
				o = s.a.h1("HomePageTitle", i.a),
				d = s.a.button("HomePageBreadcrumb", i.a),
				c = s.a.div("HomePageGroup", i.a),
				l = s.a.h1("FormPageTitle", i.a),
				u = s.a.div("FormPageSection", i.a),
				m = s.a.div("FormGroup", i.a),
				p = s.a.h2("FormGroupTitle", i.a),
				b = s.a.div("FormElement", i.a),
				h = s.a.div("FormGroupDescription", i.a),
				f = s.a.div("FormItem", i.a),
				C = s.a.h3("FormElementTitle", i.a),
				v = s.a.div("FormElementDescription", i.a),
				g = s.a.div("FormElementError", i.a),
				x = s.a.div("FormElementSubGroup", i.a),
				E = s.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/ApiRequestState/index.ts"),
				C = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				v = n("./src/reddit/components/SubredditIcon/index.m.less"),
				g = n.n(v);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: s,
						...r
					} = e, a = [n, g.a.inTopBar, g.a.iconContainer];
					return s ? a.push(g.a.emptyEditableIconInTopBar) : a.push(g.a.editableIcon, g.a.emptyEditableIcon), i.a.createElement("span", x({}, r, {
						className: Object(d.a)(...a)
					}), s ? i.a.createElement(h.a, {
						name: "upload",
						className: g.a.emptyUploadButton
					}) : i.a.createElement(h.a, {
						name: "add",
						className: g.a.emptyPlusButton
					}), e.children)
				},
				_ = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: r,
						onClick: a,
						inTopBar: o,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: g.a.iconContainer
					}, i.a.createElement("img", {
						alt: s,
						onClick: a,
						role: r,
						src: c,
						className: Object(d.a)(n, {
							[g.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				y = Object(o.c)({
					isLoading: C.b
				});
			class O extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: g.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: e => {
							const t = Object(f.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? i.a.createElement("span", {
						className: g.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? s.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : s.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(_, x({
						alt: s.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, i.a.createElement(E, x({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(E, x({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [g.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(g.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
							className: Object(d.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? i.a.createElement("div", {
						className: g.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(a.b)(y, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(c.a)(t.subreddit.id, n, s))
				}
			}))(Object(l.c)(O))
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				c = e => {
					const t = Object(a.e)(o.e),
						n = Object(a.e)(o.a);
					return t || n ? i.a.createElement(d, e) : null
				}
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/IdCard/DescriptionBlock/index.tsx"),
				b = n("./src/reddit/components/IdCard/DescriptionBlock/EditableDescriptionBlock.tsx"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/widgets.ts"),
				g = n("./src/reddit/components/CommunityChat/Sidebar/About/index.m.less"),
				x = n.n(g);
			var E = e => {
					let {
						subredditId: t
					} = e;
					const [n, r] = Object(a.useState)(!0), i = Object(d.e)(e => Object(C.X)(e, {
						subredditId: t
					})), c = Object(d.e)(e => Object(f.a)(e, {
						subredditId: t
					})), l = Object(d.e)(e => Object(v.d)(e, {
						subredditId: t
					})), u = Object(a.useMemo)(() => {
						var e;
						return null !== (e = null == l ? void 0 : l.description) && void 0 !== e ? e : ""
					}, [l]);
					return o.a.createElement("div", {
						className: x.a.container
					}, o.a.createElement("div", {
						className: x.a.aboutHeader
					}, o.a.createElement(h.a, {
						className: x.a.infoIcon,
						name: "info"
					}), o.a.createElement("span", {
						className: x.a.headerText
					}, s.fbt._("About", null, {
						hk: "3DwgcI"
					})), o.a.createElement("button", {
						className: x.a.expandButton,
						"aria-expanded": n,
						"aria-controls": "subreddit-about-content",
						"aria-label": s.fbt._("Expand or collapse subreddit description", null, {
							hk: "undzC"
						}),
						onClick: () => {
							r(!n)
						}
					}, o.a.createElement(h.a, {
						name: n ? "caret_up" : "caret_down"
					}))), o.a.createElement("div", {
						id: "subreddit-about-content",
						className: Object(m.a)(x.a.content, {
							[x.a.collapsed]: !n
						})
					}, l && (c ? o.a.createElement(b.a, {
						description: u,
						shouldTruncateDescription: !1,
						isCommentsPage: !1,
						subreddit: i
					}) : o.a.createElement(p.a, {
						description: u,
						shouldTruncateDescription: !1,
						subreddit: i
					}))))
				},
				_ = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				y = n("./src/reddit/actions/communityChat/index.ts"),
				O = n("./src/reddit/components/CommunityChat/constants.ts"),
				S = n("./node_modules/lodash/throttle.js"),
				k = n.n(S),
				j = n("./node_modules/matrix-js-sdk/lib/browser-index.js"),
				I = n("./src/reddit/components/CommunityChat/contexts/MatrixClientContext.tsx"),
				N = n("./src/reddit/selectors/features/communityChat/index.ts");
			const P = O.a.VISITED__NO_NEW_ACTIVITY;
			var w = e => {
					const t = Object(I.b)(),
						[n, s] = Object(a.useState)(null),
						[r, i] = Object(a.useState)(!1),
						o = Object(d.e)(N.d) === e.id,
						c = Object(a.useMemo)(() => {
							var t;
							return decodeURIComponent(null !== (t = e.roomId) && void 0 !== t ? t : "")
						}, [e]),
						l = Object(a.useMemo)(() => !n, [n]);
					return Object(a.useEffect)(() => {
						if (!t) return;
						const e = () => {
							const e = t.getRoom(c);
							"join" === (null == e ? void 0 : e.getMyMembership()) && s(e)
						};
						return e(), t.on(j.ClientEvent.Sync, e), () => {
							t.off(j.ClientEvent.Sync, e)
						}
					}, [t, c]), Object(a.useEffect)(() => {
						if (!n) return;
						if (o) return i(!1);
						let e = !0;
						const t = k()(() => e && i(n.getUnreadNotificationCount() > 0), 2e3);
						return t(), n.on(j.RoomEvent.Timeline, t), n.on(j.RoomEvent.AccountData, t), () => {
							e = !1, n.off(j.RoomEvent.Timeline, t), n.off(j.RoomEvent.AccountData, t)
						}
					}, [n, o]), t ? l ? O.a.NEVER_VISITED : r ? O.a.VISITED__HAS_NEW_ACTIVITY : O.a.VISITED__NO_NEW_ACTIVITY : P
				},
				T = n("./src/reddit/icons/svgs/ChatBubbles/index.tsx");
			var L = e => e.isFilled ? o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M1.625 14.375V15C1.19419 14.9995 0.781168 14.8281 0.476536 14.5235C0.171904 14.2188 0.000529257 13.8058 0 13.375V1.624C0.000793729 1.19336 0.172285 0.780598 0.476889 0.476182C0.781492 0.171766 1.19436 0.000528638 1.625 0H13.375C13.8056 0.000528638 14.2185 0.171766 14.5231 0.476182C14.8277 0.780598 14.9992 1.19336 15 1.624H4.629C3.834 1.62611 3.07216 1.94286 2.51001 2.50501C1.94786 3.06716 1.63111 3.829 1.629 4.624L1.625 14.375ZM18 4.625V16.375C17.9995 16.8058 17.8281 17.2188 17.5235 17.5235C17.2188 17.8281 16.8058 17.9995 16.375 18H4.625C4.19419 17.9995 3.78117 17.8281 3.47654 17.5235C3.1719 17.2188 3.00053 16.8058 3 16.375V4.625C3.00053 4.19419 3.1719 3.78117 3.47654 3.47654C3.78117 3.1719 4.19419 3.00053 4.625 3H16.375C16.8058 3.00053 17.2188 3.1719 17.5235 3.47654C17.8281 3.78117 17.9995 4.19419 18 4.625ZM14 13H7V14.5H14V13ZM14 10H7V11.5H14V10ZM14 7H7V8.5H14V7Z"
				})) : o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M14 8.25H7V7H14V8.25ZM14 10H7V11.25H14V10ZM14 13H7V14.25H14V13ZM18 16.375V4.625C17.9995 4.19419 17.8281 3.78117 17.5235 3.47654C17.2188 3.1719 16.8058 3.00053 16.375 3H4.625C4.19419 3.00053 3.78117 3.1719 3.47654 3.47654C3.1719 3.78117 3.00053 4.19419 3 4.625V16.375C3.00053 16.8058 3.1719 17.2188 3.47654 17.5235C3.78117 17.8281 4.19419 17.9995 4.625 18H16.375C16.8058 17.9995 17.2188 17.8281 17.5235 17.5235C17.8281 17.2188 17.9995 16.8058 18 16.375ZM16.375 4.25C16.4745 4.25 16.5698 4.28951 16.6402 4.35984C16.7105 4.43016 16.75 4.52554 16.75 4.625V16.375C16.75 16.4745 16.7105 16.5698 16.6402 16.6402C16.5698 16.7105 16.4745 16.75 16.375 16.75H4.625C4.52554 16.75 4.43016 16.7105 4.35984 16.6402C4.28951 16.5698 4.25 16.4745 4.25 16.375V4.625C4.25 4.52554 4.28951 4.43016 4.35984 4.35984C4.43016 4.28951 4.52554 4.25 4.625 4.25H16.375ZM1.625 13.75C1.52554 13.75 1.43016 13.7105 1.35983 13.6402C1.28951 13.5698 1.25 13.4745 1.25 13.375V1.624C1.25026 1.52472 1.28989 1.42959 1.36019 1.35948C1.43049 1.28937 1.52572 1.25 1.625 1.25H13.375C13.4743 1.25 13.5695 1.28937 13.6398 1.35948C13.7101 1.42959 13.7497 1.52472 13.75 1.624H15C14.9992 1.19336 14.8277 0.780598 14.5231 0.476182C14.2185 0.171766 13.8056 0.000528638 13.375 0H1.625C1.19436 0.000528638 0.781492 0.171766 0.476889 0.476182C0.172285 0.780598 0.000793729 1.19336 0 1.624V13.375C0.000529257 13.8058 0.171904 14.2188 0.476536 14.5235C0.781168 14.8281 1.19419 14.9995 1.625 15V13.75Z"
				})),
				R = n("./src/reddit/components/CommunityChat/Sidebar/ListItem/index.m.less"),
				F = n.n(R),
				D = n("./src/reddit/components/CommunityChat/utils.ts");
			const B = e => {
					let {
						model: t,
						channelUiState: n,
						renderIcon: s
					} = e;
					const r = Object(d.d)(),
						i = Object(d.e)(N.d) === t.id,
						c = Object(a.useMemo)(() => Object(D.a)(t.id, t.name), [t]);
					return o.a.createElement(_.a, {
						className: Object(m.a)(F.a.listItem, {
							[F.a.greyBackground]: i
						}),
						to: c,
						onClick: () => {
							r(Object(y.f)(t.id))
						}
					}, o.a.createElement("div", {
						className: F.a.iconContainer
					}, s(i)), o.a.createElement("span", {
						className: Object(m.a)(F.a.name, {
							[F.a.light]: n === O.a.NEVER_VISITED,
							[F.a.bold]: n === O.a.VISITED__HAS_NEW_ACTIVITY
						})
					}, t.name))
				},
				M = e => {
					let {
						model: t
					} = e;
					const n = Object(a.useCallback)(e => o.a.createElement(L, {
						isFilled: e,
						className: F.a.postsIcon
					}), []);
					return o.a.createElement(B, {
						model: t,
						channelUiState: O.a.VISITED__NO_NEW_ACTIVITY,
						renderIcon: n
					})
				},
				A = e => {
					let {
						model: t
					} = e;
					const n = w(t),
						s = Object(a.useCallback)(e => o.a.createElement(T.a, {
							isFilled: e,
							className: Object(m.a)(F.a.chatBubblesIcon, {
								[F.a.light]: n === O.a.NEVER_VISITED
							})
						}), [n]);
					return o.a.createElement(B, {
						model: t,
						channelUiState: n,
						renderIcon: s
					})
				};
			var V = n("./src/reddit/components/CommunityChat/Sidebar/ListItem/placeholder.m.less"),
				U = n.n(V);
			var W = () => o.a.createElement("div", {
					className: U.a.container
				}, o.a.createElement("div", {
					className: Object(m.a)(U.a.icon, U.a.shimmer)
				}), o.a.createElement("div", {
					className: Object(m.a)(U.a.content, U.a.shimmer)
				})),
				H = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				q = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				G = n("./src/reddit/models/CommunityChat/index.ts"),
				K = n("./src/reddit/components/CommunityChat/Sidebar/ChannelsList/index.m.less"),
				z = n.n(K);
			const Z = () => o.a.createElement(o.a.Fragment, null, o.a.createElement(W, null), o.a.createElement(W, null), o.a.createElement(W, null)),
				J = e => {
					switch (e.__typename) {
						case G.a.SubredditPostChannel:
							return o.a.createElement(M, {
								key: e.id,
								model: e
							});
						case G.a.SubredditChatChannel:
							return o.a.createElement(A, {
								key: e.id,
								model: e
							});
						default:
							return null
					}
				};
			var Y = e => {
					let {
						subredditId: t
					} = e;
					const [n, r] = Object(a.useState)(!1), i = Object(d.e)(e => Object(N.e)(e, t)), c = Object(a.useMemo)(() => i.length - 5, [i]), l = Object(a.useMemo)(() => {
						const e = s.fbt._("{number of hidden channels in community chat sidebar} more", [s.fbt._param("number of hidden channels in community chat sidebar", c.toString())], {
								hk: "4cTN8u"
							}),
							t = s.fbt._("See Less", null, {
								hk: "24SRwO"
							});
						return n ? t : e
					}, [n, c]), u = Object(a.useMemo)(() => {
						const e = i.slice(0, 5);
						return n ? i : e
					}, [n, i]);
					return u.length ? o.a.createElement(o.a.Fragment, null, u.map(J), c > 0 && o.a.createElement("div", {
						className: z.a.more,
						onClick: () => {
							r(!n)
						}
					}, o.a.createElement("span", {
						className: z.a.moreText
					}, l), n ? o.a.createElement(q.a, {
						className: z.a.chevronIcon
					}) : o.a.createElement(H.a, {
						className: z.a.chevronIcon
					}))) : o.a.createElement(Z, null)
				},
				Q = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				X = n("./src/reddit/components/CommunityChat/Sidebar/index.m.less"),
				$ = n.n(X);
			var ee = e => {
					let {
						subredditId: t
					} = e;
					return o.a.createElement(Q.a, {
						className: $.a.sidebar,
						contentOnly: !0,
						redditStyle: !0
					}, o.a.createElement(E, {
						subredditId: t
					}), o.a.createElement(Y, {
						subredditId: t
					}))
				},
				te = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				ne = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				se = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				re = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				ie = n("./src/reddit/components/IdCard/async.tsx"),
				ae = n("./src/lib/isFakeSubreddit/index.ts"),
				oe = n("./src/reddit/components/IdCard/helpers.ts"),
				de = e => !Object(ae.a)(e) || Object(oe.e)(e) || Object(oe.f)(e) || Object(oe.g)(e),
				ce = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				le = n("./src/reddit/components/ModProgressModule/async.tsx"),
				ue = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				me = n("./src/reddit/components/SidebarContainer/index.tsx"),
				pe = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				be = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				he = n("./src/lib/makeListingKey/index.ts"),
				fe = n("./src/reddit/actions/subreddit.ts"),
				Ce = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				ve = n("./src/reddit/controls/Button/index.tsx"),
				ge = n("./src/reddit/helpers/name/index.ts"),
				xe = n("./src/reddit/helpers/overlay/index.ts"),
				Ee = n("./src/reddit/selectors/experiments/topPosts.ts"),
				_e = n("./src/reddit/selectors/posts.ts"),
				ye = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const Oe = .99;
			class Se extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= Oe && t(n)
					}
				}
				render() {
					return o.a.createElement(ye.a, {
						threshold: Oe,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var ke = Se,
				je = n("./src/lib/isUrl/index.ts"),
				Ie = n("./src/lib/prettyPrintNumber/index.ts"),
				Ne = n("./src/reddit/components/FlairWrapper/index.tsx"),
				Pe = n("./src/reddit/components/Thumbnail/index.tsx"),
				we = n("./src/reddit/models/Flair/index.ts"),
				Te = n("./src/reddit/models/Subreddit/index.ts"),
				Le = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				Re = n.n(Le);
			const {
				fbt: Fe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), De = e => e.type === we.f.Nsfw || e.type === we.f.Spoiler, Be = Object(c.c)({
				post: _e.F,
				subredditOrProfile: _e.U
			});
			class Me extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: n
						} = this.props;
						e(t), n && n(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: n
						} = this.props;
						e.stopPropagation(), n && n(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: n,
						showSubredditName: s,
						subredditOrProfile: r
					} = this.props, i = {
						post: t
					}, a = Object(je.a)(Object(Pe.c)(i)), d = t.flair.filter(De);
					return o.a.createElement("div", {
						className: Object(m.a)(Re.a.container, e, {
							[Re.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: Re.a.mainLine
					}, a && o.a.createElement("div", {
						className: Re.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(Pe.b, i)), o.a.createElement("div", {
						className: Object(m.a)(Re.a.title, !a && Re.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(Ne.a, {
						className: Re.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t
					}), t.title)), o.a.createElement("div", {
						className: Re.a.metaLine
					}, s && !!r && o.a.createElement("span", {
						className: Re.a.meta
					}, Object(Te.i)(r) ? Object(ge.e)(r.displayText || r.name) : Object(ge.d)(r.displayText || r.name)), o.a.createElement("span", {
						className: Re.a.meta
					}, Fe._({
						"*": "{score} points",
						_1: "1 point"
					}, [Fe._plural(t.score, "score", Object(Ie.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: Re.a.meta
					}, Fe._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [Fe._plural(t.numComments, "numComments", Object(Ie.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Ae = Object(d.b)(Be, e => ({
					openLightbox: t => e(Object(xe.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Me),
				Ve = n("./src/reddit/components/SidebarPostList/index.m.less"),
				Ue = n.n(Ve);
			const {
				fbt: We
			} = n("./node_modules/fbt/lib/FbtPublic.js"), He = 10, qe = 2, Ge = Object(c.a)(_e.M, e => e.filter(e => !e.isSponsored)), Ke = Object(c.c)({
				posts: (e, t) => Ge(e, {
					...t
				})
			});
			class ze extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: n
						} = this.props, [s] = n;
						s && (t(s), e && e(s.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || He, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((n, s) => (e = Math.ceil(s.posts.length / t), {
							chunkIdx: n.chunkIdx < e - 1 ? n.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: n,
							onPostVisible: s,
							redditStyle: r,
							smallPostClassName: i
						} = this.props;
						return o.a.createElement(ke, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, o.a.createElement(Ae, {
							className: Object(m.a)(Ue.a.smallPost, i),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(ae.a)(Object(ge.i)(t)),
							thumbnailOnClick: n
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: n,
						moreButtonText: s,
						onPostVisible: r,
						posts: i,
						redditStyle: a,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === i.length) return null;
					const u = this.getVisiblePostsCounts(),
						p = Object(Ee.a)(c),
						b = Object(Ee.b)(c),
						h = p || b,
						f = i.slice(l * u, (l + 1) * u),
						[C, ...v] = f,
						g = h ? f.slice(0, qe) : v.slice(0, qe),
						x = h ? f.slice(qe) : v.slice(qe);
					return o.a.createElement("div", {
						className: Object(m.a)(Ue.a.container, t, {
							[Ue.a.redditStyle]: a
						})
					}, !h && o.a.createElement(ke, {
						onPostVisible: r,
						postId: C.id
					}, o.a.createElement(Ce.a, {
						postId: C.id,
						backgroundWrapperClassName: Ue.a.largePostBackgroundWrapper,
						descriptionClassName: Ue.a.largePostDescription,
						innerContainerClassName: Ue.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(ae.a)(Object(ge.i)(n)),
						trendingPost: C
					})), g.map(this.renderSmallPost), e, x.map(this.renderSmallPost), d && o.a.createElement(ve.r, {
						className: Ue.a.SeeMore,
						onClick: this.showMorePosts
					}, s || We._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var Ze = Object(d.b)(Ke, e => ({
					openPost: t => e(Object(xe.a)(t.permalink))
				}))(ze),
				Je = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Ye = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Qe = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				Xe = n("./src/reddit/selectors/discoveryUnit.ts"),
				$e = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				et = n.n($e);
			const tt = 10,
				nt = Object(c.a)((e, t) => t.subredditName, e => Object(he.a)(e, l.ab.TOP, {
					t: l.nc.WEEK
				})),
				st = Object(c.c)({
					discoveryUnit: e => Object(Xe.b)(e, {
						unitName: Qe.i
					}),
					listingKey: nt,
					posts: (e, t) => {
						const n = nt(e, t);
						return Object(_e.M)(e, {
							listingKey: n
						})
					},
					subreddit: C.C
				});
			class rt extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(Ye.b)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Ye.k)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Ye.n)(t, e, void 0, n))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: n,
						loadMorePosts: r,
						posts: i,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					if (0 === i.length) return null;
					const c = a,
						l = i.length > tt;
					return o.a.createElement(Q.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(Ze, {
						listingKey: n,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: et.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var it = Object(d.b)(st, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(fe.r)({
							sort: l.ab.TOP,
							subredditName: n,
							t: l.nc.WEEK
						}))
					}
				})(Object(Je.c)(rt)),
				at = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				ot = n("./src/reddit/constants/tracking.ts"),
				dt = n("./src/reddit/selectors/seo/linksModule.ts"),
				ct = n("./src/reddit/selectors/telemetry.ts"),
				lt = n("./src/telemetry/models/Subreddit.ts");
			const ut = e => t => ({
					...ct.q(t),
					action: ot.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				mt = e => t => n => ({
					...ct.q(n),
					action: ot.c.CLICK,
					noun: Object(lt.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				pt = Object(c.c)({
					communities: dt.c
				});
			var bt = Object(d.b)(pt)(e => {
					const t = Object(Je.b)();
					return e.communities && e.communities.length ? o.a.createElement(pe.a, null, o.a.createElement(at.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: ut,
						getSubscribeEventFactoryHandler: mt,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				ht = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				ft = n("./src/reddit/constants/experiments.ts"),
				Ct = n("./src/reddit/featureFlags/index.ts"),
				vt = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				gt = n("./src/reddit/models/Widgets/index.ts"),
				xt = n("./src/reddit/selectors/communityFlairs.ts"),
				Et = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				_t = n("./src/reddit/selectors/listings.ts"),
				yt = n("./src/reddit/selectors/experiments/communityChat.ts"),
				Ot = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				St = n.n(Ot);
			const kt = 250,
				jt = 270,
				It = u.a.wrapped(me.a, "SidebarContainer", St.a),
				Nt = Object(c.c)({
					apiError: _t.c,
					apiPending: _t.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(xt.b)(e, n)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(xt.c)(e, n)
					},
					isInNewModuleNCPV3Experiment: e => Object(Et.a)(e) === ft.Se.NewModule,
					showCommunityChat: yt.d,
					showGovernance: Ct.d.spPoints,
					showLeaderboard: Ct.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(C.R)(e, {
							subredditId: n
						}) && !Object(C.S)(e, {
							subredditId: n
						})
					},
					widgets: C.x
				}),
				Pt = Object(d.b)(Nt);
			class wt extends a.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const n = this.getRelatedCommunitiesWidgetData();
						return n ? {
							id: "related-communities-widget",
							kind: gt.i.CommunityList,
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: gt.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: gt.g.Cloud,
							shortName: s.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
							templates: this.props.communityFlairModels
						}
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, n = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !i()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						listingName: t,
						isInNewModuleNCPV3Experiment: n,
						showCommunityChat: s,
						showGovernance: r,
						showLeaderboard: i,
						showPredictionsLeaderboard: a,
						subredditId: d,
						subredditName: c,
						topPostsVariant: u
					} = this.props;
					let m = 0;
					const p = Object(Ee.a)(u),
						b = Object(Ee.b)(u),
						h = Object(Ee.c)(u),
						f = p || b;
					let C, v;
					!!this.getPostFlairWidget() ? C = this.props.widgets : (C = this.getCommunityWidgets(), v = this.makeFlairFilterWidget());
					const g = this.makeRelatedCommunitiesWidget(p, b),
						x = !p,
						E = b,
						_ = o.a.createElement(ue.a, {
							placement: l.e.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: m++,
							position: vt.a.FIRST,
							sizes: l.j
						});
					return o.a.createElement(It, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, n && o.a.createElement(le.a, {
						subredditId: d,
						subredditName: c
					}), de(t) && !s && o.a.createElement(ie.a, {
						listingName: t
					}), s && o.a.createElement(ee, {
						subredditId: d
					}), o.a.createElement(ne.a, {
						cardClassName: St.a.card,
						subredditId: d
					}), a && o.a.createElement(te.a, {
						subredditId: d
					}), f && o.a.createElement(pe.a, null, o.a.createElement(it, {
						subredditName: c,
						topPostsVariant: u
					}, o.a.createElement("div", {
						className: St.a.inFeedAd
					}, _))), f && g && o.a.createElement(pe.a, null, o.a.createElement(ht.a, {
						subredditName: c,
						truncateThreshold: jt,
						widget: g
					})), E && C.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(pe.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(ht.a, {
							subredditName: c,
							truncateThreshold: kt,
							widget: e
						}))
					}), r && o.a.createElement(se.a, {
						className: St.a.card,
						subredditId: d
					}), v && o.a.createElement(pe.a, null, o.a.createElement(ht.a, {
						subredditName: c,
						widget: v
					})), i && o.a.createElement(re.a, {
						className: St.a.card,
						subredditId: d,
						uniqueId: d
					}), o.a.createElement(ce.g, {
						subredditId: d
					}), !f && _, o.a.createElement(bt, {
						subredditId: d
					}), x && !E && C.map((e, t) => {
						const n = "community-list" === e.kind;
						return o.a.createElement(pe.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(ht.a, {
							subredditName: c,
							truncateThreshold: h && n ? jt : h ? kt : void 0,
							widget: e
						}))
					}), o.a.createElement(be.a, {
						adComponent: o.a.createElement(ue.a, {
							placement: l.e.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: m++,
							position: vt.a.BOTTOM,
							sizes: l.p
						})
					}))
				}
			}
			t.a = Pt(wt)
		},
		"./src/reddit/components/SubredditUnsavedChangesModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const m = "subreddit-unsaved-changes-modal",
				p = Object(a.b)(null, (e, t) => ({
					closeModal: () => e(Object(d.g)(t.modalId || m))
				}));
			class b extends i.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.onDiscard(), this.props.closeModal()
					}, this.onCancelClick = () => {
						this.props.onCancel(), this.props.closeModal()
					}, this.onSaveClick = () => {
						this.props.onSave(), this.props.closeModal()
					}
				}
				render() {
					return i.a.createElement(c.e, null, i.a.createElement(c.i, null, i.a.createElement(u.a, null, i.a.createElement(c.q, null, s.fbt._("Save changes before leaving?", null, {
						hk: "34wJXL"
					})), i.a.createElement(l.a, {
						onClick: this.onCancelClick
					}, i.a.createElement(c.b, null)))), i.a.createElement(c.l, null, i.a.createElement(c.p, null, s.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "2SOiAP"
					}))), i.a.createElement(c.g, null, i.a.createElement(c.a, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, s.fbt._("Discard", null, {
						hk: "ViASy"
					})), i.a.createElement(c.r, {
						onClick: this.onSaveClick,
						"data-redditstyle": !0
					}, s.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			t.b = Object(o.a)(p(b))
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/postFlair.ts"),
				o = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.d,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.Y,
				hideNSFWPref: b.H,
				isActive: p.j,
				moderatorPermissions: u.m,
				modModeEnabled: c.W,
				showEditFlair: m.a
			}), (e, t) => {
				let {
					postId: n
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						} = t;
						return e(Object(a.h)({
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const s = t === d.a.upvoted ? Object(i.ib)(n) : Object(i.v)(n);
						e(s)
					},
					onIgnoreReports: () => e(Object(i.eb)(n)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, n) => ({
				...n,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: s,
						selectedTemplateId: r
					} = e;
					return t.dispatchFlairChanged({
						post: n.post,
						previewFlair: s,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return d
			}));
			const s = "comment",
				r = "comment-submission-form-markdown",
				i = "comment-submission-form-richtext",
				a = "comments-page-link-num-comments",
				o = "language-prompt-close",
				d = "post-content"
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = n.n(a);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(o.a.loadingIcon, n, {
						[o.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(i.b)(s)(e => {
					const {
						featureEnabled: s,
						...i
					} = e, a = i;
					return s ? r.a.createElement(t, a) : void 0 !== n ? r.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(i.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ChatBubbles/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => e.isFilled ? r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M4.88595 13.444C4.36701 13.2885 3.86823 13.0723 3.39995 12.8L1.14695 13.362C1.04227 13.3879 0.932671 13.3863 0.828782 13.3574C0.724894 13.3285 0.630237 13.2732 0.553985 13.1969C0.477733 13.1207 0.422472 13.026 0.393557 12.9221C0.364642 12.8183 0.363055 12.7087 0.388949 12.604L0.949948 10.354C0.0362578 8.79992 -0.232941 6.94998 0.199949 5.19997C0.500428 3.96481 1.14111 2.83861 2.04929 1.94916C2.95748 1.05971 4.09679 0.442643 5.33795 0.167974C6.47394 -0.0883142 7.65628 -0.0533851 8.77516 0.269517C9.89404 0.59242 10.9132 1.19282 11.7379 2.01497C12.5377 2.81615 13.1259 3.80335 13.4499 4.88797C12.727 4.8582 12.0031 4.9207 11.2959 5.07397C9.80268 5.40459 8.43199 6.14717 7.33944 7.21745C6.24689 8.28772 5.47624 9.64283 5.11495 11.129C4.93328 11.8866 4.85623 12.6655 4.88595 13.444ZM17.9859 8.26497C17.1609 7.44322 16.1418 6.84307 15.023 6.5202C13.9042 6.19732 12.722 6.16216 11.5859 6.41797C10.3453 6.69314 9.20666 7.31044 8.29905 8.19985C7.39143 9.08926 6.75119 10.2152 6.45095 11.45C6.01885 13.1986 6.28766 15.0469 7.19995 16.6L6.63595 18.852C6.60975 18.9567 6.61112 19.0664 6.63993 19.1704C6.66873 19.2745 6.72399 19.3693 6.80032 19.4456C6.87665 19.5219 6.97145 19.5772 7.07548 19.606C7.17951 19.6348 7.28923 19.6362 7.39395 19.61L9.64695 19.047C10.7002 19.6709 11.9018 20.0001 13.1259 20C13.6895 19.9994 14.2511 19.9323 14.7989 19.8C16.0342 19.5 17.1607 18.8597 18.0505 17.9519C18.9403 17.0441 19.5578 15.905 19.8329 14.664C20.0882 13.5282 20.0529 12.3463 19.7302 11.2278C19.4076 10.1093 18.808 9.09026 17.9869 8.26497H17.9859Z"
			})) : r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12.504 1.40581C10.8548 0.436577 8.91582 0.0822804 7.03046 0.405669C5.1451 0.729058 3.43503 1.70926 2.20312 3.17267C0.971219 4.63608 0.296983 6.48826 0.299833 8.40115H0.299805L0.299872 8.40828C0.313102 9.81313 0.695242 11.187 1.40423 12.3936L0.35366 15.2932C0.235566 15.6192 0.315178 15.984 0.558332 16.2311C0.801486 16.4782 1.16495 16.5636 1.49275 16.4508L4.41155 15.4461C4.8205 15.6752 5.24681 15.8723 5.68667 16.0356C6.15267 16.2085 6.67064 15.971 6.84359 15.505C7.01655 15.039 6.77899 14.521 6.31299 14.348C5.85073 14.1765 5.40714 13.9583 4.98911 13.6968C4.75881 13.5527 4.47577 13.5204 4.21892 13.6088L2.68747 14.1359L3.246 12.5944C3.34354 12.3252 3.30716 12.0256 3.14802 11.7876C2.47615 10.7827 2.1119 9.60363 2.09983 8.3949C2.09845 6.90836 2.62279 5.46917 3.58017 4.33187C4.53832 3.19367 5.86837 2.43129 7.33476 2.17976C8.80115 1.92824 10.3092 2.2038 11.5919 2.95764C12.8746 3.71149 13.8491 4.89497 14.3428 6.29846C14.5078 6.76735 15.0216 7.01375 15.4905 6.84881C15.9594 6.68386 16.2058 6.17004 16.0408 5.70115C15.4061 3.89665 14.1531 2.37504 12.504 1.40581ZM18.8305 8.17201C17.1805 7.45435 15.3385 7.30651 13.5952 7.75182C11.8518 8.19714 10.3064 9.21026 9.20265 10.6313C8.09895 12.0524 7.49983 13.8005 7.49983 15.5998H7.49979L7.49987 15.6083C7.5131 17.0132 7.89524 18.387 8.60423 19.5937L7.55365 22.4932C7.43556 22.8192 7.51517 23.184 7.75833 23.4311C8.00148 23.6782 8.36494 23.7637 8.69274 23.6508L11.6074 22.6476C13.0373 23.4576 14.6834 23.8153 16.3272 23.6671C18.1192 23.5055 19.8065 22.7519 21.1227 21.525C22.4389 20.2982 23.3092 18.668 23.5961 16.8917C23.8831 15.1154 23.5705 13.2941 22.7075 11.7152C21.8446 10.1363 20.4805 8.88968 18.8305 8.17201ZM14.0406 9.49583C15.3966 9.14947 16.8292 9.26445 18.1126 9.82264C19.3959 10.3808 20.4569 11.3504 21.1281 12.5785C21.7992 13.8065 22.0424 15.2231 21.8192 16.6046C21.596 17.9862 20.9191 19.2541 19.8954 20.2083C18.8717 21.1625 17.5594 21.7487 16.1655 21.8744C14.7717 22.0001 13.3757 21.658 12.1978 20.9023C11.9661 20.7537 11.6792 20.7192 11.4189 20.8088L9.88747 21.336L10.446 19.7944C10.5435 19.5252 10.5072 19.2256 10.348 18.9876C9.67627 17.9829 9.31203 16.8041 9.29983 15.5956C9.30077 14.1976 9.76668 12.8396 10.6242 11.7354C11.4827 10.6302 12.6847 9.84218 14.0406 9.49583Z"
			}))
		},
		"./src/reddit/icons/svgs/PrivateKey/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "-1 -1 21 21"
			}, r.a.createElement("path", {
				d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
			}))
		},
		"./src/reddit/selectors/contentGate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = e => {
				if (!Object(i.S)(e)) return !1;
				const t = Object(r.d)(e);
				if (!t) return !1;
				const n = Object(i.h)(e, t);
				if (!n) return !1;
				if (!n.privateSubreddit) return !1;
				const {
					isContributorRequestTimestamp: a
				} = n;
				if (!a) return !1;
				const o = 30 * s.D;
				return a > Date.now() - o
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit~SubredditWiki.1463ab8ea0a7248835fc.js.map