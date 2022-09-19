// https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.69206c621cb3eaab9bbe.js
// Retrieved at 9/19/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var i = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > r) return [];
				var n = a,
					c = d(e, a);
				t = s(t), e -= a;
				for (var l = i(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = n("./src/redditGQL/operations/UpdateSubredditMuteSettings.json"),
				c = n("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json");
			const l = (e, t) => Object(r.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(r.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var m = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/actions/subreddit/constants.ts"),
				f = n("./src/reddit/actions/subreddit/notifications.ts");
			const p = e => Object(o.f)({
					id: e,
					kind: m.b.Error,
					text: i.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				h = (e, t) => Object(o.f)({
					kind: m.b.SuccessCommunityGreen,
					text: i.fbt._("Muted r/{subreddit name}", [i.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					buttonText: i.fbt._("Undo", null, {
						hk: "1lx02Y"
					}),
					buttonAction: t
				}),
				g = (e, t) => Object(o.f)({
					kind: m.b.SuccessCommunityGreen,
					text: i.fbt._("Unmuted r/{subreddit name}", [i.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					buttonText: i.fbt._("Undo", null, {
						hk: "2siioQ"
					}),
					buttonAction: t
				}),
				O = Object(s.a)(b.C),
				S = (Object(s.a)(b.f), Object(s.a)(b.B), e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: i
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: r
						} = o;
						if ((await l(r(), t)).ok) i && i(), h(n, x({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(p(`error-muting-${t}`))
						}
					}
				}),
				x = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: i
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: r
						} = o;
						if ((await u(r(), t)).ok) i && i(), g(n, S({
							subredditId: t,
							subredditName: n
						}));
						else {
							e(p(`error-muting-${t}`))
						}
					}
				},
				k = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: i
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: r
						} = o;
						if ((await l(r(), t)).ok) i && i(), e(Object(f.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(h(n, v({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(p(`error-muting-${t}`))
						}
					}
				},
				v = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: i
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: r
						} = o;
						if ((await u(r(), t)).ok) i && i(), e(Object(f.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(g(n, k({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(p(`error-muting-${t}`))
						}
					}
				},
				y = e => {
					let {
						subredditId: t,
						notificationLevel: n
					} = e;
					return async (e, s, a) => {
						let {
							gqlContext: d
						} = a;
						const l = Object(f.a)(n);
						(await ((e, t, n) => Object(r.a)(e, {
							...c,
							variables: {
								input: {
									...n,
									subredditId: t
								}
							}
						}))(d(), t, l)).ok ? (e(O({
							subredditId: t,
							notificationLevel: n
						})), e(Object(o.f)({
							kind: m.b.SuccessCommunityGreen,
							text: Object(f.b)(n)
						}))) : e(Object(o.f)({
							kind: m.b.Error,
							text: i.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				r = n("./src/reddit/actions/notificationsInbox/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(a.v),
				b = Object(s.a)(a.u),
				f = Object(s.a)(a.t),
				p = e => {
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
				h = e => {
					switch (e) {
						case l.b.OFF:
							return i.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.b.FREQUENT:
							return i.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.b.LOW:
							return i.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
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
					successCallback: s,
					undoCallback: a
				} = e;
				return async (e, l, g) => {
					let {
						gqlContext: O
					} = g;
					var S, x, k;
					e(b());
					const v = p(n),
						y = await Object(c.b)(O(), t, v);
					if ((null === (x = null === (S = y.error) || void 0 === S ? void 0 : S.fields) || void 0 === x ? void 0 : x.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(y.body) && (null === (k = y.body.data.updateSubredditNotificationSettings.errors) || void 0 === k ? void 0 : k.length)) return e(f()), e(Object(d.f)({
						kind: u.b.Error,
						text: i.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					y.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: n
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: n
							}
						}
					})), s && s(), e(a ? Object(d.f)(Object(d.e)(h(n), u.b.Undo, i.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(r.i)(t, a))) : Object(d.f)(Object(d.e)(h(n), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const c = e => e.preventDefault();
			t.a = Object(o.a)(e => {
				const t = !!e.cancelActionText,
					n = !(!e.actionText || !e.onConfirm);
				return s.a.createElement(r.e, {
					style: e.style
				}, s.a.createElement(r.i, null, s.a.createElement(d.a, null, s.a.createElement(r.q, null, e.headerText), !e.hideCancel && s.a.createElement(a.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, s.a.createElement(r.b, null)))), s.a.createElement(r.l, null, e.modalBody), (t || n) && s.a.createElement(r.g, null, t && s.a.createElement(r.a, {
					"data-redditstyle": !0,
					onMouseDown: c,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), n && s.a.createElement(r.u, {
					"data-redditstyle": !0,
					onMouseDown: c,
					onClick: t => {
						e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
					}
				}, e.actionText)))
			})
		},
		"./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1zWtHiYTjd_dHKshI_FQLR",
				dropdown: "_2muFC1qWHk2mO5x8lGVyGM",
				dropdownItemIcon: "_1D9iFrWOBZmGhWOOTxQSQd",
				subreddit: "IdgQ7L1oPiV2CHjiixIsL",
				subredditIcon: "_1mbmPey1Ti7N82RxiNYwk4",
				subredditInfo: "iCOtIByN3gRJuGnBSiRH8",
				subredditInfoName: "_1YSZsZPokJgrQgt6O8wyQc",
				subredditInfoNotification: "S1AmtANJqf-rrPlopYsx6",
				errorMessage: "_1lRWEAsFlmp7KoBrRTsBv_"
			}
		},
		"./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				l = n("./src/reddit/actions/subreddit/muting.ts"),
				u = n("./src/reddit/actions/subreddit/notifications.ts"),
				m = n("./src/reddit/components/ModalStyledComponents/Modal.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/Subreddit/index.ts");
			var p = n("./src/reddit/components/SubredditIcon/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				O = n("./src/reddit/helpers/trackers/notifications.ts"),
				S = n("./src/reddit/helpers/trackers/subredditMuting.ts"),
				x = n("./src/reddit/hooks/useExperimentVariant.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.m.less"),
				y = n.n(v);
			const C = e => {
				let {
					subreddit: t,
					onUnmute: n,
					onSelect: i
				} = e;
				var o, d;
				const c = Object(x.a)(h.R),
					[l, u] = Object(r.useState)(!1),
					v = Object(r.useRef)(),
					C = Object(k.a)(),
					{
						id: _,
						notificationLevel: N,
						name: E,
						isNsfw: w,
						isMuted: j
					} = t,
					I = j && c === h.Jd,
					L = I ? f.b.OFF : N,
					F = t.styles.icon || (null === (o = t.styles.legacyIcon) || void 0 === o ? void 0 : o.url),
					M = null !== (d = t.styles.primaryColor) && void 0 !== d ? d : void 0,
					T = (e => {
						switch (e) {
							case f.b.OFF:
								return s.fbt._("Off", null, {
									hk: "1JWIiA"
								});
							case f.b.FREQUENT:
								return s.fbt._("High Frequency", null, {
									hk: "1W8tQh"
								});
							case f.b.LOW:
							default:
								return s.fbt._("Low", null, {
									hk: "2YMQmI"
								})
						}
					})(L),
					D = (e => {
						switch (e) {
							case f.b.OFF:
								return s.fbt._("OFF", null, {
									hk: "2Zjohc"
								});
							case f.b.FREQUENT:
								return s.fbt._("FREQUENT", null, {
									hk: "3I2QgC"
								});
							case f.b.LOW:
							default:
								return s.fbt._("LOW", null, {
									hk: "1qOHXh"
								})
						}
					})(L),
					U = (e => {
						switch (e) {
							case f.b.OFF:
								return a.a.createElement(b.a, {
									name: "notification_off"
								});
							case f.b.FREQUENT:
								return a.a.createElement(b.a, {
									name: "notification_frequent"
								});
							case f.b.LOW:
							default:
								return a.a.createElement(b.a, {
									name: "notification"
								})
						}
					})(L),
					P = [{
						displayText: s.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						isSelected: L === f.b.FREQUENT,
						value: f.b.FREQUENT,
						icon: a.a.createElement(b.a, {
							name: "notification_frequent",
							className: y.a.dropdownItemIcon
						})
					}, {
						displayText: s.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						isSelected: L === f.b.LOW,
						value: f.b.LOW,
						icon: a.a.createElement(b.a, {
							name: "notification",
							className: y.a.dropdownItemIcon
						})
					}, {
						displayText: s.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						isSelected: L === f.b.OFF,
						value: f.b.OFF,
						icon: a.a.createElement(b.a, {
							name: "notification_off",
							className: y.a.dropdownItemIcon
						})
					}];
				return a.a.createElement("div", {
					className: y.a.container,
					key: _
				}, a.a.createElement("div", {
					className: y.a.subreddit
				}, a.a.createElement(p.b, {
					iconUrl: F,
					altText: s.fbt._("Subreddit icon", null, {
						hk: "gEWhf"
					}),
					shouldHideNsfwIcon: w,
					primaryColor: M,
					className: y.a.subredditIcon
				}), a.a.createElement("div", {
					className: y.a.subredditInfo
				}, a.a.createElement("h4", {
					className: y.a.subredditInfoName
				}, "r/", E), a.a.createElement("span", {
					className: y.a.subredditInfoNotification
				}, I ? s.fbt._("Community is muted", null, {
					hk: "4ntSSB"
				}) : s.fbt._("Notifications: {notification level}", [s.fbt._param("notification level", T)], {
					hk: "2YgR3R"
				})))), a.a.createElement(g.b, {
					isCompactStyle: !0,
					displayText: D,
					options: P,
					onSelect: e => {
						var t;
						I ? (v.current = e.value, u(!0)) : (C(Object(O.n)(_, E, null === (t = e.value) || void 0 === t ? void 0 : t.toLowerCase())), i(_, e.value))
					},
					buttonClassName: y.a.dropdown,
					buttonIcon: U
				}), l && a.a.createElement(m.a, {
					withOverlay: !0,
					headerText: s.fbt._("Unmute {name of subreddit to unmute}", [s.fbt._param("name of subreddit to unmute", `r/${t.name}`)], {
						hk: "4c7YXB"
					}),
					toggleModal: () => u(!1),
					modalBody: s.fbt._("Unmute {name of subreddit to unmute} to turn on notifications. This means their posts will be shown in your feeds and recommendations again.", [s.fbt._param("name of subreddit to unmute", `r/${t.name}`)], {
						hk: "2Slx6q"
					}),
					actionText: s.fbt._("Yes, Unmute", null, {
						hk: "2kNju2"
					}),
					cancelActionText: s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					onConfirm: () => {
						var e;
						C(Object(S.c)()), n({
							subredditId: _,
							notificationLevel: null !== (e = v.current) && void 0 !== e ? e : f.b.LOW
						})
					}
				}))
			};
			var _ = n("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				N = n("./src/reddit/selectors/user.ts");
			const E = Object(o.c)({
					cursor: N.sb,
					hasError: N.tb,
					hasNextPage: N.ub,
					isPending: N.vb,
					subreddits: N.wb
				}),
				w = Object(d.b)(E, e => ({
					clearSubscribedSubredditsList: () => e(Object(c.c)()),
					fetchSubscribesSubreddits: t => e(Object(c.b)(t)),
					updateSubredditMuteAndNotificationLevelSettings: t => {
						e(Object(l.d)(t))
					},
					updateSubredditNotificationLevel: (t, n) => e(Object(u.d)({
						subredditId: t,
						notificationLevel: n,
						successCallback: () => e(Object(c.c)({
							subredditId: t,
							notificationLevel: n
						}))
					}))
				}));
			t.default = w(e => {
				let {
					fetchSubscribesSubreddits: t,
					subreddits: n,
					cursor: o,
					hasNextPage: d,
					hasError: c,
					isPending: l,
					updateSubredditMuteAndNotificationLevelSettings: u,
					updateSubredditNotificationLevel: m,
					clearSubscribedSubredditsList: b
				} = e;
				const f = Object(k.a)();
				Object(r.useEffect)(() => (f(Object(O.o)()), t({
					first: 20
				}), () => {
					b()
				}), []);
				const p = n && n.length > 0;
				return c ? a.a.createElement("span", {
					className: y.a.errorMessage,
					"data-testid": "error-message"
				}, s.fbt._("There was an issue fetching your subreddits notifications settings. Please try again later.", null, {
					hk: "1Wt132"
				})) : l && !p ? a.a.createElement(_.a, {
					rowsCount: 5
				}) : p ? a.a.createElement(a.a.Fragment, null, n.map(e => a.a.createElement(C, {
					subreddit: e,
					onSelect: m,
					onUnmute: u,
					key: e.id
				})), d && a.a.createElement(i.a, {
					onChange: e => {
						e.isIntersecting && o && t({
							after: o,
							first: 20
						})
					},
					rootMargin: "0px 0px 0px 0px",
					threshold: .5
				}, a.a.createElement("div", null)), l && a.a.createElement(_.a, {
					rowsCount: 1
				})) : a.a.createElement("span", {
					className: y.a.errorMessage,
					"data-testid": "error-message"
				}, s.fbt._("You do not have subscribed subreddits.", null, {
					hk: "20pdSk"
				}))
			})
		},
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var i = n("./node_modules/lodash/times.js"),
				s = n.n(i),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/Settings/Notifications/index.m.less"),
				d = n.n(a);
			const c = e => {
				let {
					rowsCount: t
				} = e;
				return r.a.createElement("div", {
					role: "alert",
					"aria-busy": "true"
				}, r.a.createElement("div", {
					className: d.a.loadingSectionHeader
				}), s()(t, e => r.a.createElement("div", {
					className: d.a.loadingToggleWrapper,
					key: e
				}, r.a.createElement("span", {
					className: d.a.loadingToggleName
				}), r.a.createElement("span", {
					className: d.a.loadingToggleButton
				}))))
			}
		},
		"./src/reddit/components/Settings/Notifications/index.m.less": function(e, t, n) {
			e.exports = {
				loadingSectionHeader: "_1JAbJoDWgS5w77rjLy_a7c",
				glimmer: "_1VqfnmhCxLKQ6Pb1zId6Ip",
				loadingToggleWrapper: "_3hfCPonrfNQjCQe_kHaSDY",
				loadingToggleName: "_2nmcEilpCLrMUDYAFuRPhZ",
				loadingToggleButton: "RXOVV5JR-ysmH1CtOhOzv",
				errorMessage: "_3wk25QxRP-Wk1zL9JaaNAH",
				ModPnSettingsSubredditList: "_1Wq_iiOCv9Zlu6GiZmzuEY",
				modPnSettingsSubredditList: "_1Wq_iiOCv9Zlu6GiZmzuEY",
				communityAlert: "_1kjkPylfnJVOQOlvkz5mRN",
				header: "_3ppHgcPj1O00wgJFJhnPgl",
				arrow: "_2TrPYhNtc4V7otMW_Lfj3L"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, n) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				disabled: "FVIZ8GUq5tMGZlJ7y28ll",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				isClosed: "_3sZzbLftdYnJNnJ7m7ImmO",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V",
				buttonIcon: "_1J0h3Uv7HEaVZiJLcCUlQw"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				o = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/Dropdown/Row.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = s.a.createRef(), this.menuItems = s.a.createRef(), this.containerRef = s.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: i
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), i(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
							isOpen: !1
						})
					}, this.onOptionClick = (e, t) => {
						this.onSelectOption(e, t)
					}, this.handleDropdownClick = e => {
						e.preventDefault(), e.stopPropagation(), this.props.onOpen && this.props.onOpen(), this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.handleDropdownBlur = e => {
						let t = !1;
						if (e.relatedTarget === this.dropdownButton.current) t = !0;
						else {
							if (!this.menuItems.current) return;
							const n = this.menuItems.current.getElementsByClassName(r.a.menuOption);
							for (let i = 0; i < n.length; i++) e.relatedTarget === n[i] && (t = !0)
						}
						this.setState({
							isOpen: t
						})
					}, this.handleDropdownKeyDown = e => {
						if (!this.state.isOpen && [40, 32, 13].includes(e.keyCode)) return e.preventDefault(), void this.setState({
							isOpen: !0
						}, this.focusOnFirstOption);
						40 === e.keyCode && (e.preventDefault(), this.focusOnFirstOption()), 27 === e.keyCode && this.state.isOpen && (e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), this.setState({
							isOpen: !1
						}))
					}, this.handleOptionKeyDown = (e, t) => {
						if (32 === e.keyCode || 13 === e.keyCode) this.onSelectOption(e, t, !0);
						else if (38 === e.keyCode || 40 === e.keyCode) {
							if (e.preventDefault(), !this.menuItems.current) return;
							const t = this.menuItems.current.getElementsByClassName(r.a.menuOption);
							for (let n = 0; n < t.length; n++) t[n] === e.target && (38 === e.keyCode && n > 0 && t[n - 1].focus(), 40 === e.keyCode && n < t.length - 1 && t[n + 1].focus())
						}
					}
				}
				componentDidMount() {
					document.body.addEventListener("click", this.handleDocumentClick, !1)
				}
				componentWillUnmount() {
					document.body.removeEventListener("click", this.handleDocumentClick, !1)
				}
				focusOnFirstOption() {
					if (!this.menuItems.current) return;
					const e = this.menuItems.current.getElementsByClassName(r.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: n,
						menuOptionClassName: i
					} = this.props;
					return e.map((e, o) => s.a.createElement(d.b, {
						key: o + e.displayText,
						className: Object(a.a)(r.a.menuOption, i, {
							[r.a.topics]: n
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: n
					}, e.icon && e.icon, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: i,
						isTopicsStyle: o,
						menuItemsClassName: d,
						name: m,
						isSaving: b,
						buttonIcon: f,
						disabled: p
					} = this.props, {
						isOpen: h
					} = this.state;
					return s.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(a.a)(r.a.dropdownMenu, t, {
							[r.a.topics]: o
						})
					}, s.a.createElement("button", {
						onClick: p ? void 0 : this.handleDropdownClick,
						className: Object(a.a)(e, r.a.selector, {
							[r.a.compact]: i
						}, {
							[r.a.topics]: o
						}, {
							[r.a.disabled]: p
						}),
						name: m,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: p ? void 0 : this.handleDropdownBlur,
						onKeyDown: p ? void 0 : this.handleDropdownKeyDown
					}, s.a.createElement("span", {
						className: r.a.selectorContent,
						tabIndex: -1
					}, f && s.a.createElement("span", {
						className: r.a.buttonIcon
					}, f), n), p ? null : b ? s.a.createElement(c.a, {
						sizePx: 8,
						className: r.a.loadingIcon
					}) : s.a.createElement(l.a, {
						name: "caret_down"
					})), s.a.createElement("div", {
						className: Object(a.a)(r.a.menuItems, d, {
							[r.a.topics]: o,
							[r.a.isClosed]: !h
						}),
						onMouseDown: u,
						ref: this.menuItems
					}, !p && h && this.getDropdownMenuItems()))
				}
			}
			t.b = m
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var i = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/models/Event.ts");
			const o = () => e => ({
					source: s.f.HomeFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: i.rb(e).id
					},
					...i.o(e)
				}),
				r = () => e => ({
					source: s.f.CommunityNotificationsSettings,
					action: s.d.Click,
					noun: s.e.UnmuteSubreddit,
					targetUser: {
						id: i.rb(e).id
					},
					...i.o(e)
				}),
				a = () => e => ({
					source: s.f.PopularFeed,
					action: s.d.Click,
					noun: s.e.MuteSubreddit,
					targetUser: {
						id: i.rb(e).id
					},
					...i.o(e)
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var i = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a;
				return Object(i.e)(n => Object(s.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityNotificationSettings.69206c621cb3eaab9bbe.js.map