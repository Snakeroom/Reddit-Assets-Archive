// https://www.redditstatic.com/desktop2x/SubredditWiki.73ef69ec6e5fe266ba73.js
// Retrieved at 2/16/2022, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./src/reddit/actions/inContextModeration.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			}));
			var i = s("./src/lib/makeActionCreator/index.ts");
			const n = "INCONTEXT__BANNED",
				r = "INCONTEXT__MUTED",
				o = Object(i.a)(n),
				a = Object(i.a)(r)
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return x
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = s("./src/reddit/actions/notificationsInbox/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts");
			const m = Object(n.a)(a.u),
				b = Object(n.a)(a.t),
				p = Object(n.a)(a.s),
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
			const x = ({
				subredditId: e,
				notificationLevel: t,
				successCallback: s,
				undoCallback: n
			}) => async (a, x, {
				gqlContext: f
			}) => {
				var g, O, C;
				a(b());
				const E = (e => {
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
					})(t),
					v = await Object(c.b)(f(), e, E);
				if ((null === (O = null === (g = v.error) || void 0 === g ? void 0 : g.fields) || void 0 === O ? void 0 : O.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(v.body) && (null === (C = v.body.data.updateSubredditNotificationSettings.errors) || void 0 === C ? void 0 : C.length)) return a(p()), a(Object(d.f)({
					kind: u.b.Error,
					text: i.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				v.ok && (a(Object(r.c)({
					subredditId: e,
					notificationLevel: t
				})), a(m({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), s && s(), a(n ? Object(d.f)(Object(d.e)(h(t), u.b.Undo, i.fbt._("Undo", null, {
					hk: "46OwLP"
				}), Object(o.i)(e, n))) : Object(d.f)(Object(d.e)(h(t), u.b.SuccessCommunityGreen))))
			}
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, s) {
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
				text: "_3TG57N4WQtubLLo8SbAXVF",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				notificationButtonContainer: "_1cAYKT6f3GM-_aZei--pxM",
				intersectionWrapper: "_3EWe8WOn2CDJW5khbbnAIX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/actions/subreddit/notifications.ts"),
				m = s("./src/lib/combineRefs/index.tsx"),
				b = s("./src/lib/hooks/useOnClickOutside.ts"),
				p = s("./src/lib/hooks/useTooltip.ts"),
				h = s("./src/reddit/components/CommonTooltip/Hooked.tsx"),
				x = s("./src/reddit/models/Subreddit/index.ts");
			const f = e => {
					switch (e) {
						case x.b.FREQUENT:
							return "notification_frequent";
						case x.b.OFF:
							return "notification_off";
						case x.b.LOW:
						default:
							return "notification"
					}
				},
				g = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				O = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var C = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/icons/fonts/index.tsx"),
				N = s("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				k = s.n(N);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = e => {
					return n.a.createElement(E.a, {
						id: e.dropdownId,
						className: k.a.notificationDropdown
					}, [{
						displayText: C.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(x.b.FREQUENT),
						isSelected: e.notificationLevel === x.b.FREQUENT,
						icon: n.a.createElement(j.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === x.b.FREQUENT
						})
					}, {
						displayText: C.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(x.b.LOW),
						isSelected: e.notificationLevel === x.b.LOW,
						icon: n.a.createElement(j.a, {
							name: "notification",
							isFilled: e.notificationLevel === x.b.LOW
						})
					}, {
						displayText: C.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(x.b.OFF),
						isSelected: e.notificationLevel === x.b.OFF,
						icon: n.a.createElement(j.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === x.b.OFF
						})
					}].map(e => n.a.createElement(v.b, S({
						className: Object(a.a)(k.a.notificationDropdown, k.a.notificationRow, {
							[k.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				I = s("./src/reddit/controls/Button/index.tsx"),
				P = s("./src/reddit/selectors/telemetry.ts");
			const w = e => t => ({
				...P.o(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: P.jb(t)
			});
			var y = s("./src/reddit/hooks/useTracking.ts"),
				T = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const L = c.a.img("SubredditIcon", k.a),
				F = c.a.wrapped(T.a, "DefaultIcon", k.a);
			var B = ({
					subredditName: e,
					shouldShowSubredditIcon: t,
					subredditIcon: s,
					onHide: i,
					onUpdate: r
				}) => {
					const o = Object(y.a)(),
						a = t ? n.a.createElement(L, {
							src: s || void 0
						}) : n.a.createElement(F, null),
						d = `r/${e}`;
					return n.a.createElement("div", {
						className: k.a.notificationPopup
					}, n.a.createElement("div", {
						className: k.a.title
					}, n.a.createElement("h2", null, C.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), n.a.createElement("h3", null, C.fbt._("{subreddit name}", [C.fbt._param("subreddit name", d)], {
						hk: "1es0XP"
					}))), n.a.createElement("div", {
						className: k.a.subredditWrapper
					}, n.a.createElement("div", {
						className: k.a.subredditTitle
					}, a, n.a.createElement("span", null, d), n.a.createElement(j.a, {
						name: "notification_frequent",
						className: k.a.notificationIcon,
						isFilled: !0
					})), n.a.createElement(I.t, {
						className: k.a.subscribeButton,
						priority: I.c.Primary,
						size: I.d.M,
						text: C.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							i(), r(x.b.FREQUENT), o(w(x.b.FREQUENT.toLowerCase()))
						}
					})), n.a.createElement("button", {
						className: k.a.hideButton,
						onClick: i
					}, C.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				W = s("./src/reddit/helpers/localStorage/index.ts");
			var M = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var D = e => {
					const t = Object(r.d)(),
						s = Object(y.a)(),
						o = Object(p.b)(g),
						a = Object(p.b)(O),
						[d, c] = function(e, t) {
							const [s, n] = Object(i.useState)(Object(W.P)(e, t));
							return [s, Object(i.useCallback)(() => {
								const s = Object(W.a)(e, t);
								n(s)
							}, [e, t, n])]
						}(e.userId, e.subredditId),
						l = Object(r.e)(e => !!Object(M.a)(e));
					Object(i.useEffect)(() => {
						e.notificationLevel !== x.b.LOW && e.notificationLevel !== x.b.OFF || c()
					}, [e.subredditId]);
					const C = 2 === d,
						E = () => {
							o.hide()
						},
						v = () => {
							a.hide()
						};
					Object(i.useEffect)(() => (C && (a.update && a.update(), a.show()), () => {
						v(), E()
					}), [e.subredditName, C]);
					const N = () => {
							v(), o.show()
						},
						S = (e => `dropdown-${e}`)(e.subredditName),
						I = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(S, E);
					const P = Object(i.useCallback)(e => {
							e.stopPropagation(), o.visible ? E() : N()
						}, [E, N, o.visible]),
						T = Object(i.useCallback)(t => {
							t === x.b.FREQUENT && Object(W.db)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						L = Object(i.useCallback)(i => {
							const {
								subredditId: n
							} = e;
							E(), v(), t(Object(u.b)({
								subredditId: n,
								notificationLevel: i,
								successCallback: () => T(i)
							})), s(w(i.toLowerCase()))
						}, [E, e.subredditId, t, s]);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
						type: "button",
						className: k.a.notificationButton,
						ref: Object(m.a)(o.target.ref, a.target.ref),
						onClick: P,
						"data-testid": "subredditNotificationButton"
					}, n.a.createElement(j.a, {
						name: f(e.notificationLevel),
						className: k.a.notificationIcon,
						isFilled: !0
					})), n.a.createElement(h.a, {
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: S
					}, n.a.createElement(_, {
						dropdownId: S,
						notificationLevel: e.notificationLevel,
						onClick: L
					})), C && !l && n.a.createElement(h.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: I,
						className: k.a.popupTooltip
					}, n.a.createElement(B, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: v,
						onUpdate: L
					})))
				},
				R = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				U = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				A = s("./src/reddit/components/SubredditNav/index.tsx"),
				V = s("./src/reddit/components/SubscribeButton/index.tsx"),
				q = s("./src/reddit/constants/componentSizes.ts"),
				K = s("./src/reddit/constants/postLayout.ts"),
				Q = s("./src/reddit/constants/posts.ts"),
				G = s("./src/reddit/featureFlags/index.ts"),
				H = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				Y = s("./src/reddit/constants/tracking.ts");
			var z = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Z = s("./src/reddit/hooks/useWindowEvent.ts"),
				J = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				X = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				$ = s("./src/reddit/selectors/subreddit.ts"),
				ee = s("./src/reddit/selectors/user.ts"),
				te = s("./src/reddit/selectors/widgets.ts"),
				se = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				ie = s.n(se);
			const ne = c.a.img("SubredditIcon", ie.a),
				re = Object(o.c)({
					notificationLevel: $.E,
					spPollsEnabled: G.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(X.a)(e, {
						subredditId: t
					}),
					tournamentsEnabled: (e, {
						subredditId: t
					}) => !!t && Object($.L)(e, {
						subredditId: t
					}),
					userId: ee.i,
					userIsSubscriber: (e, {
						subredditName: t
					}) => {
						const s = t;
						return Object($.db)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					},
					widget: (e, {
						subredditId: t
					}) => t ? Object(te.f)(e, {
						subredditId: t
					}) : void 0
				}),
				oe = {
					threshold: [.5, .001],
					rootMargin: `${1-q.f}px 0px 0px 0px`
				};
			t.a = Object(r.b)(re, (e, t) => ({
				_updateSubredditInfo: () => {
					var s;
					const i = t.subredditId || (null === (s = t.subreddit) || void 0 === s ? void 0 : s.id);
					if (i) return e(Object(u.a)({
						subredditAboutInfo: {
							[i]: {
								notificationLevel: x.b.LOW
							}
						}
					}))
				}
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					o = e.subreddit ? e.subreddit.url : e.subredditUrl,
					d = e.subreddit ? e.subreddit.title : "",
					c = Object(r.e)(J.b),
					u = Object(r.e)(J.a),
					m = c || u,
					[b, p] = Object(i.useState)(!1),
					h = Object(i.useRef)(null),
					[x, f] = Object(i.useState)(),
					[g, O] = Object(i.useState)(null),
					C = Object(i.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: s
							} = t;
							s >= .5 ? e(!1) : s <= .001 && e(!0)
						})
					})(p), []);
				Object(Z.a)("resize", ((e, t, s) => () => {
					var i;
					e(t && s ? null === (i = t.getBoundingClientRect()) || void 0 === i ? void 0 : i.height : void 0)
				})(f, g, m)), Object(z.a)(h, C, oe);
				const E = e.subreddit && Object(H.a)(e),
					v = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && E),
					j = s.charAt(0).toUpperCase() + s.slice(1),
					N = !!e.subreddit && e.subredditInlineEditingEnabled,
					k = Object(a.a)(ie.a.SubredditIcon, ie.a.editableIcon, {
						[ie.a.emptyEditableIcon]: !E
					}),
					S = v ? n.a.createElement(U.a, {
						className: k,
						subreddit: e.subreddit,
						iconUrl: E || void 0,
						inTopBar: !0
					}) : n.a.createElement(T.a, {
						className: ie.a.DefaultIcon
					}),
					_ = v ? n.a.createElement(ne, {
						src: E || void 0
					}) : n.a.createElement(T.a, {
						className: ie.a.DefaultIcon
					}),
					I = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					w = e.layout ? e.layout === K.g.Large ? "984px" : "100%" : "1086px";
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					style: {
						height: b ? void 0 : x
					},
					className: Object(a.a)(ie.a.wrapper, {
						[ie.a.stickyWrapper]: m,
						[ie.a.isSticking]: b
					})
				}, n.a.createElement("div", {
					className: ie.a.container,
					style: {
						maxWidth: w
					},
					ref: m ? O : void 0
				}, n.a.createElement("div", {
					className: ie.a.subredditMetaContainer
				}, N ? S : _, n.a.createElement("div", {
					className: Object(a.a)(ie.a.textContainer, {
						[ie.a.textContainerNoIcon]: !v
					})
				}, n.a.createElement("div", {
					className: ie.a.text
				}, n.a.createElement("h1", {
					className: ie.a.title
				}, d || j), !!d && n.a.createElement("h2", {
					className: ie.a.description
				}, "r/", s)), n.a.createElement("div", {
					className: ie.a.buttonWrapper
				}, n.a.createElement("div", {
					className: ie.a.subscribeButtonContainer
				}, n.a.createElement(V.a, {
					className: ie.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return b ? (e => t => ({
							...P.o(t),
							source: "sticky_banner",
							action: Y.c.CLICK,
							noun: e,
							subreddit: P.jb(t)
						}))(t) : (e => t => ({
							...P.o(t),
							source: "id_banner",
							action: Y.c.CLICK,
							noun: e,
							subreddit: P.jb(t)
						}))(t)
					},
					identifier: {
						name: s,
						type: Q.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(W.db)(e.userId, t), e.updateSubredditInfo())
					}
				})), e.userIsSubscriber && t && e.notificationLevel && n.a.createElement("div", {
					className: ie.a.notificationButtonContainer
				}, n.a.createElement(D, {
					notificationLevel: e.notificationLevel,
					subredditName: s,
					subredditId: t,
					subredditIcon: E,
					shouldShowSubredditIcon: v,
					userId: e.userId
				})), e.subreddit && n.a.createElement(R.a, {
					subreddit: e.subreddit,
					headerButton: !0
				})))), I && n.a.createElement(A.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: o,
					subredditId: t,
					subredditNavContainerClassName: ie.a.subredditNavContainer
				}))), n.a.createElement("div", {
					className: ie.a.intersectionWrapper
				}, n.a.createElement("div", {
					style: {
						height: m ? x : void 0
					},
					ref: m ? h : void 0
				})))
			}))
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = s.n(l);
			const m = e => e.preventDefault();
			t.a = Object(o.a)(e => r.a.createElement(a.e, null, r.a.createElement(a.i, null, r.a.createElement(c.a, null, r.a.createElement(a.q, null, e.headerText || i.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.l, null, r.a.createElement(a.p, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(a.g, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || i.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "_23HWOAAvtr9XUARUICwS1l",
				button: "_1FQRn1pPshYj4hu7mq9APN",
				ChatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				chatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				headerButton: "VjmtSca9g92ay_XMP6rCV",
				buttonCaption: "_3iAPYhncpDFRVQFe9wprJs"
			}
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/downToChat.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				u = s("./src/reddit/selectors/downToChat.ts"),
				m = s("./src/reddit/selectors/experiments/downToChat.ts"),
				b = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				p = s.n(b);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = Object(o.c)({
				isDownToChatExperimentEnabled: m.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(u.c)(e, t.id)
			}), f = Object(r.b)(x, e => ({
				startChatting: t => e(Object(a.i)(t))
			}));
			t.a = f(Object(d.c)(e => {
				const {
					headerButton: t,
					isEnabled: s,
					isDownToChatExperimentEnabled: i
				} = e;
				if (!s || !i) return null;
				const r = h._("Start Chatting", null, {
					hk: "3KfdZ4"
				});
				return n.a.createElement(c.t, {
					className: p.a.button,
					text: r,
					Icon: t ? l.a : void 0,
					onClick: () => {
						const {
							startChatting: t,
							subreddit: s
						} = e;
						t(s.id)
					},
					redditStyle: !0
				})
			}))
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(s.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ModProgressModule/async.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "ModProgressModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), s.e("ModProgressModule")]).then(s.bind(null, "./src/reddit/components/ModProgressModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModProgressModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/reddit/components/OverflowMenu/index.m.less"),
				f = s.n(x);
			const g = c.a.wrapped(m.a, "_Dropdown", f.a),
				O = Object(u.a)(g),
				C = c.a.button("MenuButton", f.a),
				E = c.a.wrapped(b.b, "DropdownRow", f.a),
				v = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				j = Object(o.b)(v, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				N = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => r.a.createElement(C, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": i.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: N(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(p.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), r.a.createElement(O, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				b = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				p = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				x = s.n(h);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: s,
				post: a,
				share: h
			}) => {
				const g = Object(l.b)(),
					O = Object(o.d)(),
					C = a && a.id,
					E = a && a.voteState;
				let v = null;
				C || (v = e ? "user_hovercard" : "profile_overview");
				const j = Object(n.useCallback)(() => g(Object(m.g)(e ? "user_hovercard" : "profile_overview", t)), [e, g, t]);
				return r.a.createElement(u.t, {
					onClick: () => {
						s ? (g(m.h), C && E === p.a.notVoted && O(Object(d.jb)(C))) : j();
						const e = s ? "postify" : "copy";
						O(Object(c.b)({
							clickSource: v,
							share: h,
							source: e
						}))
					},
					className: Object(i.a)(x.a.snoovatarButton, x.a.snoovatarExtraPadding, x.a.compactButtonLayout, {
						[x.a.avatarPostifyButton]: s
					}),
					isFullWidth: !0
				}, r.a.createElement(b.a, {
					className: Object(i.a)({
						[x.a.shirtIcon]: !s,
						[x.a.avatarPostButtonShirtIcon]: s
					})
				}), f._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: x.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, s) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				b = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				p = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				g = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				O = s("./src/reddit/helpers/name/index.ts"),
				C = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = s("./src/reddit/components/MiniCardPost/index.m.less"),
				N = s.n(j),
				k = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				S = s.n(k);
			const _ = e => e.type === C.f.Spoiler,
				I = Object(h.u)();
			t.a = I(Object(x.b)(Object(p.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: r,
					innerContainerClassName: c,
					onPostClick: p,
					trendingPost: h,
					trendingSearch: x,
					shouldOpenPost: C,
					showSubredditMeta: j = !0,
					showSubredditName: k,
					subredditOrProfile: I
				} = e, P = h && h.preview && h.preview.url || void 0, w = h && h.isSponsored ? "promoted_trend" : "trending", y = h && Object(l.a)(h.permalink) || "", T = C && y || x && Object(a.a)("/search", {
					q: x.rawQuery,
					source: w
				}) || y, L = x ? x.subredditInfo && x.subredditInfo.icon : I && I.icon.url, F = x ? x.subredditInfo && x.subredditInfo.displayText : I && (I.displayText || I.name), B = h ? h.flair.filter(_) : [], W = h ? h.score : 0, M = h ? h.numComments : 0, D = h && h.isSponsored, R = Object(v.a)(e).body, U = `linear-gradient(\n      ${Object(n.f)(R,.2)},\n      ${Object(n.f)(R,.3)},\n      ${Object(n.f)(R,.4)},\n      ${Object(n.f)(R,.6)},\n      ${Object(n.f)(R,.8)},\n      ${R}\n    )`, A = o.a.createElement("div", {
					id: r,
					className: Object(d.a)(S.a.trendingPost, {
						[S.a["m-background"]]: !!P
					})
				}, o.a.createElement(f.a, {
					to: T
				}, o.a.createElement("div", {
					className: Object(d.a)(S.a.backgroundWrapper, N.a.backgroundWrapper, t),
					style: {
						background: Object(E.g)(Object(v.a)(e).body, P || Object(v.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, D && o.a.createElement("div", {
					className: S.a.promoted
				}, i.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), o.a.createElement("div", {
					className: Object(d.a)(S.a.innerContainer, N.a.innerContainer, c),
					onClick: p,
					title: h ? h.title : ""
				}, o.a.createElement("h2", {
					className: h ? S.a.title : S.a.titleNoDescription
				}, e.title), h ? o.a.createElement("div", {
					className: Object(d.a)(S.a.description, s)
				}, B.length > 0 && o.a.createElement(m.a, {
					className: S.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: h
				}), h.title) : o.a.createElement("div", {
					className: S.a.spacer
				}), j && L && F && o.a.createElement(g.a, {
					className: S.a.relatedSubredditMetaData,
					iconClassName: S.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: i.fbt._("{subredditName} and more", [i.fbt._param("subredditName", F)], {
						hk: "2YTyJf"
					})
				}), !j && h && o.a.createElement("div", {
					className: S.a.metaLine
				}, k && F && o.a.createElement("span", {
					className: S.a.meta
				}, Object(O.c)(F)), o.a.createElement("span", {
					className: S.a.meta
				}, i.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [i.fbt._plural(W, "number", Object(u.b)(W))], {
					hk: "1Jm6il"
				})), o.a.createElement("span", {
					className: S.a.meta
				}, i.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [i.fbt._plural(M, "number", Object(u.b)(M))], {
					hk: "311aXY"
				})))))));
				return D ? o.a.createElement(b.a, {
					post: h
				}, A) : A
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				a = s("./src/reddit/selectors/brandSafety.ts"),
				d = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(o.u)();
			t.a = m(Object(r.b)((e, {
				listingName: t,
				pageLayer: s
			}) => {
				const i = Object(a.b)(e, {
						listingName: t,
						pageLayer: s
					}),
					n = Object(c.B)(e) || Object(d.a)(e),
					r = Object(a.e)(e);
				return {
					canShowAd: i && !n,
					awaitingBrandSafetyCheck: !Object(a.c)(e),
					isAdsDisabled: n,
					viewIsUnsafe: r
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: s,
				pageLayer: i,
				...r
			}) => !t && e && i ? n.a.createElement(l.a, u({
				forceHouseAd: s
			}, r)) : null))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/ImageInput/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				p = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/models/ApiRequestState/index.ts"),
				f = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				g = s("./src/reddit/components/SubredditIcon/index.m.less"),
				O = s.n(g);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const E = e => {
					const {
						subredditId: t,
						className: s,
						inTopBar: i,
						...n
					} = e, o = [s, O.a.inTopBar, O.a.iconContainer];
					return i ? o.push(O.a.emptyEditableIconInTopBar) : o.push(O.a.editableIcon, O.a.emptyEditableIcon), r.a.createElement("span", C({}, n, {
						className: Object(d.a)(...o)
					}), i ? r.a.createElement(h.a, {
						name: "upload",
						className: O.a.emptyUploadButton
					}) : r.a.createElement(h.a, {
						name: "add",
						className: O.a.emptyPlusButton
					}), e.children)
				},
				v = e => {
					const {
						iconColor: t,
						className: s,
						alt: i,
						role: n,
						onClick: o,
						inTopBar: a,
						src: c
					} = e;
					return r.a.createElement("span", {
						className: O.a.iconContainer
					}, r.a.createElement("img", {
						alt: i,
						onClick: o,
						role: n,
						src: c,
						className: Object(d.a)(s, {
							[O.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				j = Object(a.c)({
					isLoading: f.b
				});
			class N extends r.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(p.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => r.a.createElement(u.a, {
						className: O.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: e => {
							const t = Object(x.b)();
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
					} = Object(b.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? r.a.createElement("span", {
						className: O.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? i.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : i.fbt._("Add icon", null, {
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
					} = Object(b.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = r.a.createElement(r.a.Fragment, null, r.a.createElement(v, C({
						alt: i.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, r.a.createElement(E, C({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : r.a.createElement(r.a.Fragment, null, r.a.createElement(E, C({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [O.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(O.a.loadingIconInTopBar), t = 32), r.a.createElement(m.a, {
							className: Object(d.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(b.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? r.a.createElement("div", {
						className: O.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(o.b)(j, (e, t) => ({
				onFileSelected: (s, i) => {
					e(Object(c.a)(t.subreddit.id, s, i))
				}
			}))(Object(l.c)(N))
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				b = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				p = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				x = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/lib/isFakeSubreddit/index.ts"),
				g = s("./src/reddit/components/IdCard/helpers.ts"),
				O = e => !Object(f.a)(e) || Object(g.e)(e) || Object(g.f)(e) || Object(g.g)(e),
				C = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/ModProgressModule/async.tsx"),
				v = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				j = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				N = s("./src/reddit/components/SidebarContainer/index.tsx"),
				k = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				S = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				_ = s("./src/lib/makeListingKey/index.ts"),
				I = s("./src/reddit/actions/subreddit.ts"),
				P = s("./src/lib/classNames/index.ts"),
				w = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				y = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/reddit/helpers/name/index.ts"),
				L = s("./src/reddit/helpers/overlay/index.ts"),
				F = s("./src/reddit/selectors/experiments/topPosts.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				W = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const M = .99;
			class D extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= M && t(s)
					}
				}
				render() {
					return a.a.createElement(W.a, {
						threshold: M,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var R = D,
				U = s("./src/lib/isUrl/index.ts"),
				A = s("./src/lib/prettyPrintNumber/index.ts"),
				V = s("./src/reddit/components/FlairWrapper/index.tsx"),
				q = s("./src/reddit/components/Thumbnail/index.tsx"),
				K = s("./src/reddit/models/Flair/index.ts"),
				Q = s("./src/reddit/models/Subreddit/index.ts"),
				G = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				H = s.n(G);
			const {
				fbt: Y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = e => e.type === K.f.Nsfw || e.type === K.f.Spoiler, Z = Object(c.c)({
				post: B.G,
				subredditOrProfile: B.U
			});
			class J extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: s,
						showSubredditName: i,
						subredditOrProfile: n
					} = this.props, r = {
						post: t
					}, o = Object(U.a)(Object(q.b)(r)), d = t.flair.filter(z);
					return a.a.createElement("div", {
						className: Object(P.a)(H.a.container, e, {
							[H.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: H.a.mainLine
					}, o && a.a.createElement("div", {
						className: H.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(q.a, r)), a.a.createElement("div", {
						className: Object(P.a)(H.a.title, !o && H.a.titleSingle),
						title: t.title
					}, d.length > 0 && a.a.createElement(V.a, {
						className: H.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t
					}), t.title)), a.a.createElement("div", {
						className: H.a.metaLine
					}, i && !!n && a.a.createElement("span", {
						className: H.a.meta
					}, Object(Q.h)(n) ? Object(T.d)(n.displayText || n.name) : Object(T.c)(n.displayText || n.name)), a.a.createElement("span", {
						className: H.a.meta
					}, Y._({
						"*": "{score} points",
						_1: "1 point"
					}, [Y._plural(t.score, "score", Object(A.b)(t.score))], {
						hk: "1JZ0qm"
					})), a.a.createElement("span", {
						className: H.a.meta
					}, Y._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [Y._plural(t.numComments, "numComments", Object(A.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var X = Object(d.b)(Z, e => ({
					openLightbox: t => e(Object(L.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(J),
				$ = s("./src/reddit/components/SidebarPostList/index.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = 10, ie = 2, ne = Object(c.a)(B.N, e => e.filter(e => !e.isSponsored)), re = Object(c.c)({
				posts: (e, t) => ne(e, {
					...t
				})
			});
			class oe extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [i] = s;
						i && (t(i), e && e(i.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || se, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, i) => (e = Math.ceil(i.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: i,
							redditStyle: n,
							smallPostClassName: r
						} = this.props;
						return a.a.createElement(R, {
							key: e.id,
							onPostVisible: i,
							postId: e.id
						}, a.a.createElement(X, {
							className: Object(P.a)(ee.a.smallPost, r),
							containerOnClick: s,
							postId: e.id,
							redditStyle: n,
							showSubredditName: Object(f.a)(Object(T.g)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: i,
						onPostVisible: n,
						posts: r,
						redditStyle: o,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === r.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(F.a)(c),
						b = Object(F.b)(c),
						p = m || b,
						h = r.slice(l * u, (l + 1) * u),
						[x, ...g] = h,
						O = p ? h.slice(0, ie) : g.slice(0, ie),
						C = p ? h.slice(ie) : g.slice(ie);
					return a.a.createElement("div", {
						className: Object(P.a)(ee.a.container, t, {
							[ee.a.redditStyle]: o
						})
					}, !p && a.a.createElement(R, {
						onPostVisible: n,
						postId: x.id
					}, a.a.createElement(w.a, {
						postId: x.id,
						backgroundWrapperClassName: ee.a.largePostBackgroundWrapper,
						descriptionClassName: ee.a.largePostDescription,
						innerContainerClassName: ee.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(f.a)(Object(T.g)(s)),
						trendingPost: x
					})), O.map(this.renderSmallPost), e, C.map(this.renderSmallPost), d && a.a.createElement(y.r, {
						className: ee.a.SeeMore,
						onClick: this.showMorePosts
					}, i || te._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ae = Object(d.b)(re, e => ({
					openPost: t => e(Object(L.a)(t.permalink))
				}))(oe),
				de = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ce = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				le = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				ue = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				me = s("./src/reddit/selectors/discoveryUnit.ts"),
				be = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				he = s.n(pe);
			const xe = 10,
				fe = Object(c.a)((e, t) => t.subredditName, e => Object(_.a)(e, l.W.TOP, {
					t: l.hc.WEEK
				})),
				ge = Object(c.c)({
					discoveryUnit: e => Object(me.b)(e, {
						unitName: ue.i
					}),
					listingKey: fe,
					posts: (e, t) => {
						const s = fe(e, t);
						return Object(B.N)(e, {
							listingKey: s
						})
					},
					subreddit: be.w
				});
			class Oe extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(le.c)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(le.r)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(le.u)(t, e, void 0, s))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: s,
						loadMorePosts: n,
						posts: r,
						subredditName: o,
						topPostsVariant: d
					} = this.props;
					if (0 === r.length) return null;
					const c = o,
						l = r.length > xe;
					return a.a.createElement(ce.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: i.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, a.a.createElement(ae, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: n,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: he.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, a.a.createElement("div", null, e)))
				}
			}
			var Ce = Object(d.b)(ge, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(I.r)({
						sort: l.W.TOP,
						subredditName: t,
						t: l.hc.WEEK
					}))
				}))(Object(de.c)(Oe)),
				Ee = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				ve = s("./src/reddit/constants/tracking.ts"),
				je = s("./src/reddit/selectors/seo/linksModule.ts"),
				Ne = s("./src/reddit/selectors/telemetry.ts"),
				ke = s("./src/telemetry/models/Subreddit.ts");
			const Se = e => t => ({
					...Ne.o(t),
					action: ve.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				_e = e => t => s => ({
					...Ne.o(s),
					action: ve.c.CLICK,
					noun: Object(ke.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ie = Object(c.c)({
					communities: je.c
				});
			var Pe = Object(d.b)(Ie)(e => {
					const t = Object(de.b)();
					return e.communities && e.communities.length ? a.a.createElement(k.a, null, a.a.createElement(Ee.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: Se,
						getSubscribeEventFactoryHandler: _e,
						sendEvent: t,
						title: i.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				we = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				ye = s("./src/reddit/constants/experiments.ts"),
				Te = s("./src/reddit/featureFlags/index.ts"),
				Le = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Fe = s("./src/reddit/models/Widgets/index.ts"),
				Be = s("./src/reddit/selectors/communityFlairs.ts"),
				We = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Me = s("./src/reddit/selectors/listings.ts"),
				De = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				Re = s.n(De);
			const Ue = 250,
				Ae = 270,
				Ve = u.a.wrapped(N.a, "SidebarContainer", Re.a),
				qe = Object(c.c)({
					apiError: Me.c,
					apiPending: Me.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(Be.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(Be.c)(e, t),
					isInNewModuleNCPV3Experiment: e => Object(We.a)(e) === ye.ce.NewModule,
					showGovernance: Te.d.spPoints,
					showLeaderboard: Te.d.spLeaderboard,
					showPredictionsLeaderboard: (e, {
						subredditId: t
					}) => Object(be.K)(e, {
						subredditId: t
					}) && !Object(be.L)(e, {
						subredditId: t
					}),
					widgets: be.r
				}),
				Ke = Object(d.b)(qe);
			class Qe extends o.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const s = this.getRelatedCommunitiesWidgetData();
						return s ? {
							id: "related-communities-widget",
							kind: Fe.i.CommunityList,
							shortName: i.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: s
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: Fe.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: Fe.g.Cloud,
							shortName: i.fbt._("Filter by flair", null, {
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
					} = this.props, s = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || s
				}
				render() {
					const {
						className: e,
						listingName: t,
						isInNewModuleNCPV3Experiment: s,
						showGovernance: i,
						showLeaderboard: n,
						showPredictionsLeaderboard: r,
						subredditId: o,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const f = Object(F.a)(c),
						g = Object(F.b)(c),
						N = Object(F.c)(c),
						_ = f || g;
					let I, P;
					!!this.getPostFlairWidget() ? I = this.props.widgets : (I = this.getCommunityWidgets(), P = this.makeFlairFilterWidget());
					const w = this.makeRelatedCommunitiesWidget(f, g),
						y = !f,
						T = g,
						L = a.a.createElement(j.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Le.a.FIRST,
							sizes: l.i
						});
					return a.a.createElement(Ve, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, s && a.a.createElement(E.a, {
						subredditId: o,
						subredditName: d
					}), O(t) && a.a.createElement(x.a, {
						listingName: t
					}), a.a.createElement(b.a, {
						cardClassName: Re.a.card,
						subredditId: o
					}), a.a.createElement(v.a, {
						subredditId: o
					}), r && a.a.createElement(m.a, {
						subredditId: o
					}), _ && a.a.createElement(k.a, null, a.a.createElement(Ce, {
						subredditName: d,
						topPostsVariant: c
					}, a.a.createElement("div", {
						className: Re.a.inFeedAd
					}, L))), _ && w && a.a.createElement(k.a, null, a.a.createElement(we.a, {
						subredditName: d,
						truncateThreshold: Ae,
						widget: w
					})), T && I.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(k.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(we.a, {
							subredditName: d,
							truncateThreshold: Ue,
							widget: e
						}))
					}), i && a.a.createElement(p.a, {
						className: Re.a.card,
						subredditId: o
					}), P && a.a.createElement(k.a, null, a.a.createElement(we.a, {
						subredditName: d,
						widget: P
					})), n && a.a.createElement(h.a, {
						className: Re.a.card,
						subredditId: o,
						uniqueId: o
					}), a.a.createElement(C.g, {
						subredditId: o
					}), !_ && L, a.a.createElement(Pe, {
						subredditId: o
					}), y && !T && I.map((e, t) => {
						const s = "community-list" === e.kind;
						return a.a.createElement(k.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(we.a, {
							subredditName: d,
							truncateThreshold: N && s ? Ae : N ? Ue : void 0,
							widget: e
						}))
					}), a.a.createElement(S.a, {
						adComponent: a.a.createElement(j.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Le.a.BOTTOM,
							sizes: l.p
						})
					}))
				}
			}
			t.a = Ke(Qe)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less": function(e, t, s) {
			e.exports = {
				topBar: "_3kk9JdhNiGLp6Q4tGsrqLR"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less": function(e, t, s) {
			e.exports = {
				communityWikiTopBar: "_2XDZHbiDksRCrTtd194Wf2",
				wikiPageEditorContent: "_3GDwuTIITQZO6fapgaJpFD"
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				o = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/user.ts");
			const h = Object(i.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: p.b,
				crosspostRoot: b.d,
				crosspostSubredditOrProfile: b.e,
				flairStyleTemplate: c.V,
				hideNSFWPref: p.C,
				isActive: b.j,
				moderatorPermissions: u.l,
				modModeEnabled: c.T,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: i
				}) => e(Object(o.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: i
				})),
				handleVote: s => {
					const i = s === d.a.upvoted ? Object(r.jb)(t) : Object(r.w)(t);
					e(i)
				},
				onIgnoreReports: () => e(Object(r.fb)(t)),
				onOpenReportsDropdown: t => e(Object(a.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: i
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: i
				})
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: s = 10
			}) => n.a.createElement("div", {
				className: Object(r.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = function({
				className: e
			}) {
				return n.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					fill: "inherit"
				}, n.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/pages/shared.ts"),
				d = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = s("./src/reddit/components/ContentGate/index.tsx"),
				l = s("./src/reddit/components/HeaderImage/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				b = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var p = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, i = Object(m.a)(s, u.W.HOT, {});
					return n.a.createElement(b.a, {
						listingKey: i,
						listingName: s.toLowerCase(),
						subredditId: t.id,
						subredditName: s
					})
				},
				h = s("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				x = s("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				f = s("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				g = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/constants/wiki.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				v = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				j = s("./src/reddit/components/JumpToContent/index.tsx"),
				N = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				k = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				S = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				_ = s.n(S);

			function I(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return i.createElement(i.Fragment, null, i.createElement(j.a, null), i.createElement(k.a, {
					isModHub: !1,
					className: _.a.topBar,
					wikiPageName: t,
					subredditName: s
				}), i.createElement(N.a, {
					showRevisionInfo: !0,
					subredditName: s,
					wikiPageName: t
				}))
			}
			var P = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				w = s.n(P);
			class y extends n.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: s,
						queryParams: i
					} = e, {
						wikiSubRoute: r,
						wikiPageName: o
					} = s, a = i[g.F], d = i[g.G], c = g.H in i;
					switch (r) {
						case O.m.Create:
						case O.m.Edit:
							return n.a.createElement(x.a, {
								contentClassName: w.a.wikiPageEditorContent,
								isCreation: r === O.m.Create,
								subredditName: t,
								topBarClassName: w.a.communityWikiTopBar,
								wikiPageName: o
							});
						case O.m.Revisions:
							return n.a.createElement(v.a, {
								key: o,
								isRecentRevisionsMode: !o,
								subredditName: t,
								wikiPageName: o
							});
						default:
							return o && a && d ? n.a.createElement(h.a, {
								comparisonRevisionId: Object(E.a)(d),
								revisionId: Object(E.a)(a),
								subredditName: t,
								wikiPageName: o
							}) : o && (a || c) ? n.a.createElement(f.a, {
								revisionId: a ? Object(E.a)(a) : void 0,
								subredditName: t,
								wikiPageName: o
							}) : o ? n.a.createElement(I, {
								wikiPageName: o,
								subredditName: t
							}) : null
					}
				}
			}
			var T = Object(C.u)()(y),
				L = s("./src/reddit/constants/componentSizes.ts"),
				F = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				B = s("./src/reddit/layout/page/Listing/index.tsx"),
				W = s("./src/reddit/selectors/subreddit.ts"),
				M = s("./src/reddit/selectors/user.ts");
			const D = Object(C.u)(),
				R = Object(r.b)(() => Object(o.c)({
					contentGateInfo: (e, {
						match: t
					}) => Object(M.f)(e, t.params.subredditName),
					layout: C.R,
					over18Pref: M.eb,
					subreddit: (e, {
						match: t
					}) => Object(W.w)(e, {
						subredditName: t.params.subredditName || O.e
					}),
					subredditName: (e, {
						match: t
					}) => t.params.subredditName || O.e,
					wikiPageName: (e, {
						match: t
					}) => t.params.wikiPageName || O.i
				}), e => ({
					onPageViewed: () => e(Object(a.a)())
				}));
			class U extends n.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: s,
						subredditName: i
					} = this.props, r = !!s && s.isNSFW && !M.eb, o = Object(F.a)(t, r, i);
					if (o) return n.a.createElement(c.default, o);
					const a = `/r/${i}/`;
					return n.a.createElement(B.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: L.i,
						navBar: n.a.createElement(n.a.Fragment, null, n.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : i,
							maxWidth: L.i,
							subredditOrProfile: s,
							url: a
						}), n.a.createElement(d.a, {
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: i,
							subredditUrl: a
						})),
						content: n.a.createElement(T, {
							subredditName: i
						}),
						sidebar: s && n.a.createElement(p, {
							subreddit: s,
							subredditName: i
						})
					})
				}
			}
			t.default = D(R(U))
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var i = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => i.mc.Enabled === Object(n.c)(e, {
				experimentEligibilitySelector: r.K,
				experimentName: i.kc
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.73ef69ec6e5fe266ba73.js.map