// https://www.redditstatic.com/desktop2x/SubredditWiki.d686c762dcdd98733f47.js
// Retrieved at 1/12/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./src/reddit/actions/inContextModeration.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const i = "INCONTEXT__BANNED",
				r = "INCONTEXT__MUTED",
				a = Object(n.a)(i),
				o = Object(n.a)(r)
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/notificationsInbox/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/models/Toast/index.ts");
			const m = Object(i.a)(a.u),
				u = Object(i.a)(a.t),
				b = Object(i.a)(a.s),
				p = e => {
					switch (e) {
						case c.b.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case c.b.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case c.b.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const h = ({
				subredditId: e,
				notificationLevel: t,
				successCallback: s,
				undoCallback: i
			}) => async (a, h, {
				gqlContext: x
			}) => {
				var g, f, E;
				a(u());
				const C = (e => {
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
					})(t),
					O = await Object(d.b)(x(), e, C);
				if ((null === (f = null === (g = O.error) || void 0 === g ? void 0 : g.fields) || void 0 === f ? void 0 : f.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(O.body) && (null === (E = O.body.data.updateSubredditNotificationSettings.errors) || void 0 === E ? void 0 : E.length)) return a(b()), a(Object(o.f)({
					kind: l.b.Error,
					text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				O.ok && (a(m({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), s && s(), a(i ? Object(o.f)(Object(o.e)(p(t), l.b.Undo, n.fbt._("Undo", null, {
					hk: "46OwLP"
				}), Object(r.i)(e, i))) : Object(o.f)(Object(o.e)(p(t), l.b.SuccessCommunityGreen))))
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/actions/subreddit/notifications.ts"),
				u = s("./src/lib/combineRefs/index.tsx"),
				b = s("./src/lib/hooks/useOnClickOutside.ts"),
				p = s("./src/lib/hooks/useTooltip.ts"),
				h = s("./src/reddit/components/CommonTooltip/Hooked.tsx"),
				x = s("./src/reddit/models/Subreddit/index.ts");
			const g = e => {
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
				f = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				E = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var C = s("./node_modules/fbt/lib/FbtPublic.js"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				y = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				N = s("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				_ = s.n(N);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var k = e => {
					return i.a.createElement(O.a, {
						id: e.dropdownId,
						className: _.a.notificationDropdown
					}, [{
						displayText: C.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(x.b.FREQUENT),
						isSelected: e.notificationLevel === x.b.FREQUENT,
						icon: i.a.createElement(v.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === x.b.FREQUENT
						})
					}, {
						displayText: C.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(x.b.LOW),
						isSelected: e.notificationLevel === x.b.LOW,
						icon: i.a.createElement(v.a, {
							name: "notification",
							isFilled: e.notificationLevel === x.b.LOW
						})
					}, {
						displayText: C.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(x.b.OFF),
						isSelected: e.notificationLevel === x.b.OFF,
						icon: i.a.createElement(v.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === x.b.OFF
						})
					}].map(e => i.a.createElement(y.b, j({
						className: Object(o.a)(_.a.notificationDropdown, _.a.notificationRow, {
							[_.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				S = s("./src/reddit/controls/Button/index.tsx"),
				I = s("./src/reddit/selectors/telemetry.ts");
			const w = e => t => ({
				...I.o(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: I.jb(t)
			});
			var P = s("./src/reddit/hooks/useTracking.ts"),
				T = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const F = c.a.img("SubredditIcon", _.a),
				B = c.a.wrapped(T.a, "DefaultIcon", _.a);
			var L = ({
					subredditName: e,
					shouldShowSubredditIcon: t,
					subredditIcon: s,
					onHide: n,
					onUpdate: r
				}) => {
					const a = Object(P.a)(),
						o = t ? i.a.createElement(F, {
							src: s || void 0
						}) : i.a.createElement(B, null),
						d = `r/${e}`;
					return i.a.createElement("div", {
						className: _.a.notificationPopup
					}, i.a.createElement("div", {
						className: _.a.title
					}, i.a.createElement("h2", null, C.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), i.a.createElement("h3", null, C.fbt._("{subreddit name}", [C.fbt._param("subreddit name", d)], {
						hk: "1es0XP"
					}))), i.a.createElement("div", {
						className: _.a.subredditWrapper
					}, i.a.createElement("div", {
						className: _.a.subredditTitle
					}, o, i.a.createElement("span", null, d), i.a.createElement(v.a, {
						name: "notification_frequent",
						className: _.a.notificationIcon,
						isFilled: !0
					})), i.a.createElement(S.t, {
						className: _.a.subscribeButton,
						priority: S.c.Primary,
						size: S.d.M,
						text: C.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							n(), r(x.b.FREQUENT), a(w(x.b.FREQUENT.toLowerCase()))
						}
					})), i.a.createElement("button", {
						className: _.a.hideButton,
						onClick: n
					}, C.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				W = s("./src/reddit/helpers/localStorage/index.ts");
			var D = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var M = e => {
					const t = Object(r.d)(),
						s = Object(P.a)(),
						a = Object(p.b)(f),
						o = Object(p.b)(E),
						[d, c] = function(e, t) {
							const [s, i] = Object(n.useState)(Object(W.M)(e, t));
							return [s, Object(n.useCallback)(() => {
								const s = Object(W.a)(e, t);
								i(s)
							}, [e, t, i])]
						}(e.userId, e.subredditId),
						l = Object(r.e)(e => !!Object(D.a)(e));
					Object(n.useEffect)(() => {
						e.notificationLevel !== x.b.LOW && e.notificationLevel !== x.b.OFF || c()
					}, [e.subredditId]);
					const C = 2 === d,
						O = () => {
							a.hide()
						},
						y = () => {
							o.hide()
						};
					Object(n.useEffect)(() => (C && (o.update && o.update(), o.show()), () => {
						y(), O()
					}), [e.subredditName, C]);
					const N = () => {
							y(), a.show()
						},
						j = (e => `dropdown-${e}`)(e.subredditName),
						S = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(j, O);
					const I = Object(n.useCallback)(e => {
							e.stopPropagation(), a.visible ? O() : N()
						}, [O, N, a.visible]),
						T = Object(n.useCallback)(t => {
							t === x.b.FREQUENT && Object(W.Z)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						F = Object(n.useCallback)(n => {
							const {
								subredditId: i
							} = e;
							O(), y(), t(Object(m.b)({
								subredditId: i,
								notificationLevel: n,
								successCallback: () => T(n)
							})), s(w(n.toLowerCase()))
						}, [O, e.subredditId, t, s]);
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
						type: "button",
						className: _.a.notificationButton,
						ref: Object(u.a)(a.target.ref, o.target.ref),
						onClick: I,
						"data-testid": "subredditNotificationButton"
					}, i.a.createElement(v.a, {
						name: g(e.notificationLevel),
						className: _.a.notificationIcon,
						isFilled: !0
					})), i.a.createElement(h.a, {
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: j
					}, i.a.createElement(k, {
						dropdownId: j,
						notificationLevel: e.notificationLevel,
						onClick: F
					})), C && !l && i.a.createElement(h.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: S,
						className: _.a.popupTooltip
					}, i.a.createElement(L, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: y,
						onUpdate: F
					})))
				},
				R = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				U = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				A = s("./src/reddit/components/SubredditNav/index.tsx"),
				V = s("./src/reddit/components/SubscribeButton/index.tsx"),
				H = s("./src/reddit/constants/componentSizes.ts"),
				q = s("./src/reddit/constants/postLayout.ts"),
				Q = s("./src/reddit/constants/posts.ts"),
				K = s("./src/reddit/featureFlags/index.ts"),
				z = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				G = s("./src/reddit/constants/tracking.ts");
			var Z = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Y = s("./src/reddit/hooks/useWindowEvent.ts"),
				X = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				J = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				$ = s("./src/reddit/selectors/subreddit.ts"),
				ee = s("./src/reddit/selectors/user.ts"),
				te = s("./src/reddit/selectors/widgets.ts"),
				se = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				ne = s.n(se);
			const ie = c.a.img("SubredditIcon", ne.a),
				re = Object(a.c)({
					notificationLevel: $.E,
					spPollsEnabled: K.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(J.a)(e, {
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
				ae = {
					threshold: [.5, .001],
					rootMargin: `${1-H.f}px 0px 0px 0px`
				};
			t.a = Object(r.b)(re, (e, t) => ({
				_updateSubredditInfo: () => {
					var s;
					const n = t.subredditId || (null === (s = t.subreddit) || void 0 === s ? void 0 : s.id);
					if (n) return e(Object(m.a)({
						subredditAboutInfo: {
							[n]: {
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
					a = e.subreddit ? e.subreddit.url : e.subredditUrl,
					d = e.subreddit ? e.subreddit.title : "",
					c = Object(r.e)(X.b),
					m = Object(r.e)(X.a),
					u = c || m,
					[b, p] = Object(n.useState)(!1),
					h = Object(n.useRef)(null),
					[x, g] = Object(n.useState)(),
					[f, E] = Object(n.useState)(null),
					C = Object(n.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: s
							} = t;
							s >= .5 ? e(!1) : s <= .001 && e(!0)
						})
					})(p), []);
				Object(Y.a)("resize", ((e, t, s) => () => {
					var n;
					e(t && s ? null === (n = t.getBoundingClientRect()) || void 0 === n ? void 0 : n.height : void 0)
				})(g, f, u)), Object(Z.a)(h, C, ae);
				const O = e.subreddit && Object(z.a)(e),
					y = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && O),
					v = s.charAt(0).toUpperCase() + s.slice(1),
					N = !!e.subreddit && e.subredditInlineEditingEnabled,
					_ = Object(o.a)(ne.a.SubredditIcon, ne.a.editableIcon, {
						[ne.a.emptyEditableIcon]: !O
					}),
					j = y ? i.a.createElement(U.a, {
						className: _,
						subreddit: e.subreddit,
						iconUrl: O || void 0,
						inTopBar: !0
					}) : i.a.createElement(T.a, {
						className: ne.a.DefaultIcon
					}),
					k = y ? i.a.createElement(ie, {
						src: O || void 0
					}) : i.a.createElement(T.a, {
						className: ne.a.DefaultIcon
					}),
					S = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					w = e.layout ? e.layout === q.g.Large ? "984px" : "100%" : "1086px";
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					style: {
						height: b ? void 0 : x
					},
					className: Object(o.a)(ne.a.wrapper, {
						[ne.a.stickyWrapper]: u,
						[ne.a.isSticking]: b
					})
				}, i.a.createElement("div", {
					className: ne.a.container,
					style: {
						maxWidth: w
					},
					ref: u ? E : void 0
				}, i.a.createElement("div", {
					className: ne.a.subredditMetaContainer
				}, N ? j : k, i.a.createElement("div", {
					className: Object(o.a)(ne.a.textContainer, {
						[ne.a.textContainerNoIcon]: !y
					})
				}, i.a.createElement("div", {
					className: ne.a.text
				}, i.a.createElement("h1", {
					className: ne.a.title
				}, d || v), !!d && i.a.createElement("h2", {
					className: ne.a.description
				}, "r/", s)), i.a.createElement("div", {
					className: ne.a.buttonWrapper
				}, i.a.createElement("div", {
					className: ne.a.subscribeButtonContainer
				}, i.a.createElement(V.a, {
					className: ne.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return b ? (e => t => ({
							...I.o(t),
							source: "sticky_banner",
							action: G.c.CLICK,
							noun: e,
							subreddit: I.jb(t)
						}))(t) : (e => t => ({
							...I.o(t),
							source: "id_banner",
							action: G.c.CLICK,
							noun: e,
							subreddit: I.jb(t)
						}))(t)
					},
					identifier: {
						name: s,
						type: Q.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(W.Z)(e.userId, t), e.updateSubredditInfo())
					}
				})), e.userIsSubscriber && t && e.notificationLevel && i.a.createElement("div", {
					className: ne.a.notificationButtonContainer
				}, i.a.createElement(M, {
					notificationLevel: e.notificationLevel,
					subredditName: s,
					subredditId: t,
					subredditIcon: O,
					shouldShowSubredditIcon: y,
					userId: e.userId
				})), e.subreddit && i.a.createElement(R.a, {
					subreddit: e.subreddit,
					headerButton: !0
				})))), S && i.a.createElement(A.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: a,
					subredditId: t,
					subredditNavContainerClassName: ne.a.subredditNavContainer
				}))), i.a.createElement("div", {
					className: ne.a.intersectionWrapper
				}, i.a.createElement("div", {
					style: {
						height: u ? x : void 0
					},
					ref: u ? h : void 0
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(a.a)(e => r.a.createElement(o.e, null, r.a.createElement(o.i, null, r.a.createElement(c.a, null, r.a.createElement(o.q, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(o.b, null)))), r.a.createElement(o.l, null, r.a.createElement(o.p, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(o.g, null, !e.hideCancelButton && r.a.createElement(o.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(o.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/downToChat.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				m = s("./src/reddit/selectors/downToChat.ts"),
				u = s("./src/reddit/selectors/experiments/downToChat.ts"),
				b = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				p = s.n(b);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = Object(a.c)({
				isDownToChatExperimentEnabled: u.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(m.c)(e, t.id)
			}), g = Object(r.b)(x, e => ({
				startChatting: t => e(Object(o.i)(t))
			}));
			t.a = g(Object(d.c)(e => {
				const {
					headerButton: t,
					isEnabled: s,
					isDownToChatExperimentEnabled: n
				} = e;
				if (!s || !n) return null;
				const r = h._("Start Chatting", null, {
					hk: "3KfdZ4"
				});
				return i.a.createElement(c.t, {
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
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/ModProgressModule/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/reddit/components/OverflowMenu/index.m.less"),
				g = s.n(x);
			const f = c.a.wrapped(u.a, "_Dropdown", g.a),
				E = Object(m.a)(f),
				C = c.a.button("MenuButton", g.a),
				O = c.a.wrapped(b.b, "DropdownRow", g.a),
				y = Object(o.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				v = Object(a.b)(y, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				N = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = v(e => r.a.createElement(C, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: N(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(p.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), r.a.createElement(E, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				preventFocusScroll: e.preventFocusScroll,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				b = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				p = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				x = s.n(h);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: s,
				post: o,
				share: h
			}) => {
				const f = Object(l.b)(),
					E = Object(a.d)(),
					C = o && o.id,
					O = o && o.voteState;
				let y = null;
				C || (y = e ? "user_hovercard" : "profile_overview");
				const v = Object(i.useCallback)(() => f(Object(u.g)(e ? "user_hovercard" : "profile_overview", t)), [e, f, t]);
				return r.a.createElement(m.t, {
					onClick: () => {
						s ? (f(u.h), C && O === p.a.notVoted && E(Object(d.jb)(C))) : v();
						const e = s ? "postify" : "copy";
						E(Object(c.b)({
							clickSource: y,
							share: h,
							source: e
						}))
					},
					className: Object(n.a)(x.a.snoovatarButton, x.a.snoovatarExtraPadding, x.a.compactButtonLayout, {
						[x.a.avatarPostifyButton]: s
					}),
					isFullWidth: !0
				}, r.a.createElement(b.a, {
					className: Object(n.a)({
						[x.a.shirtIcon]: !s,
						[x.a.avatarPostButtonShirtIcon]: s
					})
				}), g._("Try this Look", null, {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/FlairWrapper/index.tsx"),
				b = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				p = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				E = s("./src/reddit/helpers/name/index.ts"),
				C = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = s("./src/reddit/components/MiniCardPost/index.m.less"),
				N = s.n(v),
				_ = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				j = s.n(_);
			const k = e => e.type === C.f.Spoiler,
				S = Object(h.u)();
			t.a = S(Object(x.b)(Object(p.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: r,
					innerContainerClassName: c,
					onPostClick: p,
					trendingPost: h,
					trendingSearch: x,
					shouldOpenPost: C,
					showSubredditMeta: v = !0,
					showSubredditName: _,
					subredditOrProfile: S
				} = e, I = h && h.preview && h.preview.url || void 0, w = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", T = C && P || x && Object(o.a)("/search", {
					q: x.rawQuery,
					source: w
				}) || P, F = x ? x.subredditInfo && x.subredditInfo.icon : S && S.icon.url, B = x ? x.subredditInfo && x.subredditInfo.displayText : S && (S.displayText || S.name), L = h ? h.flair.filter(k) : [], W = h ? h.score : 0, D = h ? h.numComments : 0, M = h && h.isSponsored, R = Object(y.a)(e).body, U = `linear-gradient(\n      ${Object(i.f)(R,.2)},\n      ${Object(i.f)(R,.3)},\n      ${Object(i.f)(R,.4)},\n      ${Object(i.f)(R,.6)},\n      ${Object(i.f)(R,.8)},\n      ${R}\n    )`, A = a.a.createElement("div", {
					id: r,
					className: Object(d.a)(j.a.trendingPost, {
						[j.a["m-background"]]: !!I
					})
				}, a.a.createElement(g.a, {
					to: T
				}, a.a.createElement("div", {
					className: Object(d.a)(j.a.backgroundWrapper, N.a.backgroundWrapper, t),
					style: {
						background: Object(O.g)(Object(y.a)(e).body, I || Object(y.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, M && a.a.createElement("div", {
					className: j.a.promoted
				}, n.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(j.a.innerContainer, N.a.innerContainer, c),
					onClick: p,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? j.a.title : j.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(j.a.description, s)
				}, L.length > 0 && a.a.createElement(u.a, {
					className: j.a.flair,
					titleFlair: L,
					nowrap: !0,
					post: h
				}), h.title) : a.a.createElement("div", {
					className: j.a.spacer
				}), v && F && B && a.a.createElement(f.a, {
					className: j.a.relatedSubredditMetaData,
					iconClassName: j.a.subredditIcon,
					iconUrl: F || void 0,
					suffix: n.fbt._("{subredditName} and more", [n.fbt._param("subredditName", B)], {
						hk: "2YTyJf"
					})
				}), !v && h && a.a.createElement("div", {
					className: j.a.metaLine
				}, _ && B && a.a.createElement("span", {
					className: j.a.meta
				}, Object(E.c)(B)), a.a.createElement("span", {
					className: j.a.meta
				}, n.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [n.fbt._plural(W, "number", Object(m.b)(W))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: j.a.meta
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(D, "number", Object(m.b)(D))], {
					hk: "311aXY"
				})))))));
				return M ? a.a.createElement(b.a, {
					post: h
				}, A) : A
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				o = s("./src/reddit/selectors/brandSafety.ts"),
				d = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(a.u)();
			t.a = u(Object(r.b)((e, {
				listingName: t,
				pageLayer: s
			}) => {
				const n = Object(o.b)(e, {
						listingName: t,
						pageLayer: s
					}),
					i = Object(c.B)(e) || Object(d.a)(e),
					r = Object(o.e)(e);
				return {
					canShowAd: n && !i,
					awaitingBrandSafetyCheck: !Object(o.c)(e),
					isAdsDisabled: i,
					viewIsUnsafe: r
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: s,
				pageLayer: n,
				...r
			}) => !t && e && n ? i.a.createElement(l.a, m({
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/ImageInput/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				p = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/models/ApiRequestState/index.ts"),
				g = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				f = s("./src/reddit/components/SubredditIcon/index.m.less"),
				E = s.n(f);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => {
					const {
						subredditId: t,
						className: s,
						inTopBar: n,
						...i
					} = e, a = [s, E.a.inTopBar, E.a.iconContainer];
					return n ? a.push(E.a.emptyEditableIconInTopBar) : a.push(E.a.editableIcon, E.a.emptyEditableIcon), r.a.createElement("span", C({}, i, {
						className: Object(d.a)(...a)
					}), n ? r.a.createElement(h.a, {
						name: "upload",
						className: E.a.emptyUploadButton
					}) : r.a.createElement(h.a, {
						name: "add",
						className: E.a.emptyPlusButton
					}), e.children)
				},
				y = e => {
					const {
						iconColor: t,
						className: s,
						alt: n,
						role: i,
						onClick: a,
						inTopBar: o,
						src: c
					} = e;
					return r.a.createElement("span", {
						className: E.a.iconContainer
					}, r.a.createElement("img", {
						alt: n,
						onClick: a,
						role: i,
						src: c,
						className: Object(d.a)(s, {
							[E.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				v = Object(o.c)({
					isLoading: g.b
				});
			class N extends r.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(p.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => r.a.createElement(m.a, {
						className: E.a.imageUploader,
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
						className: E.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? n.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : n.fbt._("Add icon", null, {
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
					}), s = r.a.createElement(r.a.Fragment, null, r.a.createElement(y, C({
						alt: n.fbt._("Subreddit icon", null, {
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
					}, r.a.createElement(O, C({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : r.a.createElement(r.a.Fragment, null, r.a.createElement(O, C({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [E.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(E.a.loadingIconInTopBar), t = 32), r.a.createElement(u.a, {
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
						className: E.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(a.b)(v, (e, t) => ({
				onFileSelected: (s, n) => {
					e(Object(c.a)(t.subreddit.id, s, n))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/isEqual.js"),
				r = s.n(i),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				b = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				p = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				x = s("./src/reddit/components/IdCard/async.tsx"),
				g = s("./src/lib/isFakeSubreddit/index.ts"),
				f = s("./src/reddit/components/IdCard/helpers.ts"),
				E = e => !Object(g.a)(e) || Object(f.e)(e) || Object(f.f)(e) || Object(f.g)(e),
				C = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = s("./src/reddit/components/ModProgressModule/async.tsx"),
				y = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				v = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				N = s("./src/reddit/components/SidebarContainer/index.tsx"),
				_ = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				j = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				k = s("./src/lib/makeListingKey/index.ts"),
				S = s("./src/reddit/actions/subreddit.ts"),
				I = s("./src/lib/classNames/index.ts"),
				w = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				P = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/reddit/helpers/name/index.ts"),
				F = s("./src/reddit/helpers/overlay/index.ts"),
				B = s("./src/reddit/selectors/experiments/topPosts.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				W = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const D = .99;
			class M extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= D && t(s)
					}
				}
				render() {
					return o.a.createElement(W.a, {
						threshold: D,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var R = M,
				U = s("./src/lib/isUrl/index.ts"),
				A = s("./src/lib/prettyPrintNumber/index.ts"),
				V = s("./src/reddit/components/FlairWrapper/index.tsx"),
				H = s("./src/reddit/components/Thumbnail/index.tsx"),
				q = s("./src/reddit/models/Flair/index.ts"),
				Q = s("./src/reddit/models/Subreddit/index.ts"),
				K = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				z = s.n(K);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Z = e => e.type === q.f.Nsfw || e.type === q.f.Spoiler, Y = Object(c.c)({
				post: L.H,
				subredditOrProfile: L.V
			});
			class X extends o.a.PureComponent {
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
						showSubredditName: n,
						subredditOrProfile: i
					} = this.props, r = {
						post: t
					}, a = Object(U.a)(Object(H.b)(r)), d = t.flair.filter(Z);
					return o.a.createElement("div", {
						className: Object(I.a)(z.a.container, e, {
							[z.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: z.a.mainLine
					}, a && o.a.createElement("div", {
						className: z.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(H.a, r)), o.a.createElement("div", {
						className: Object(I.a)(z.a.title, !a && z.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(V.a, {
						className: z.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t
					}), t.title)), o.a.createElement("div", {
						className: z.a.metaLine
					}, n && !!i && o.a.createElement("span", {
						className: z.a.meta
					}, Object(Q.h)(i) ? Object(T.d)(i.displayText || i.name) : Object(T.c)(i.displayText || i.name)), o.a.createElement("span", {
						className: z.a.meta
					}, G._({
						"*": "{score} points",
						_1: "1 point"
					}, [G._plural(t.score, "score", Object(A.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: z.a.meta
					}, G._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [G._plural(t.numComments, "numComments", Object(A.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var J = Object(d.b)(Y, e => ({
					openLightbox: t => e(Object(F.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(X),
				$ = s("./src/reddit/components/SidebarPostList/index.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = 10, ne = 2, ie = Object(c.a)(L.O, e => e.filter(e => !e.isSponsored)), re = Object(c.c)({
				posts: (e, t) => ie(e, {
					...t
				})
			});
			class ae extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [n] = s;
						n && (t(n), e && e(n.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || se, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, n) => (e = Math.ceil(n.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: n,
							redditStyle: i,
							smallPostClassName: r
						} = this.props;
						return o.a.createElement(R, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, o.a.createElement(J, {
							className: Object(I.a)(ee.a.smallPost, r),
							containerOnClick: s,
							postId: e.id,
							redditStyle: i,
							showSubredditName: Object(g.a)(Object(T.g)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: n,
						onPostVisible: i,
						posts: r,
						redditStyle: a,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === r.length) return null;
					const m = this.getVisiblePostsCounts(),
						u = Object(B.a)(c),
						b = Object(B.b)(c),
						p = u || b,
						h = r.slice(l * m, (l + 1) * m),
						[x, ...f] = h,
						E = p ? h.slice(0, ne) : f.slice(0, ne),
						C = p ? h.slice(ne) : f.slice(ne);
					return o.a.createElement("div", {
						className: Object(I.a)(ee.a.container, t, {
							[ee.a.redditStyle]: a
						})
					}, !p && o.a.createElement(R, {
						onPostVisible: i,
						postId: x.id
					}, o.a.createElement(w.a, {
						postId: x.id,
						backgroundWrapperClassName: ee.a.largePostBackgroundWrapper,
						descriptionClassName: ee.a.largePostDescription,
						innerContainerClassName: ee.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(T.g)(s)),
						trendingPost: x
					})), E.map(this.renderSmallPost), e, C.map(this.renderSmallPost), d && o.a.createElement(P.r, {
						className: ee.a.SeeMore,
						onClick: this.showMorePosts
					}, n || te._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var oe = Object(d.b)(re, e => ({
					openPost: t => e(Object(F.a)(t.permalink))
				}))(ae),
				de = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ce = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				le = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				me = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = s("./src/reddit/selectors/discoveryUnit.ts"),
				be = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				he = s.n(pe);
			const xe = 10,
				ge = Object(c.a)((e, t) => t.subredditName, e => Object(k.a)(e, l.W.TOP, {
					t: l.gc.WEEK
				})),
				fe = Object(c.c)({
					discoveryUnit: e => Object(ue.b)(e, {
						unitName: me.i
					}),
					listingKey: ge,
					posts: (e, t) => {
						const s = ge(e, t);
						return Object(L.O)(e, {
							listingKey: s
						})
					},
					subreddit: be.w
				});
			class Ee extends o.a.Component {
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
						loadMorePosts: i,
						posts: r,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					if (0 === r.length) return null;
					const c = a,
						l = r.length > xe;
					return o.a.createElement(ce.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: n.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(oe, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: i,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: he.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var Ce = Object(d.b)(fe, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(S.r)({
						sort: l.W.TOP,
						subredditName: t,
						t: l.gc.WEEK
					}))
				}))(Object(de.c)(Ee)),
				Oe = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				ye = s("./src/reddit/constants/tracking.ts"),
				ve = s("./src/reddit/selectors/seo/linksModule.ts"),
				Ne = s("./src/reddit/selectors/telemetry.ts"),
				_e = s("./src/telemetry/models/Subreddit.ts");
			const je = e => t => ({
					...Ne.o(t),
					action: ye.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				ke = e => t => s => ({
					...Ne.o(s),
					action: ye.c.CLICK,
					noun: Object(_e.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Se = Object(c.c)({
					communities: ve.c
				});
			var Ie = Object(d.b)(Se)(e => {
					const t = Object(de.b)();
					return e.communities && e.communities.length ? o.a.createElement(_.a, null, o.a.createElement(Oe.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: je,
						getSubscribeEventFactoryHandler: ke,
						sendEvent: t,
						title: n.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				we = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				Pe = s("./src/reddit/constants/experiments.ts"),
				Te = s("./src/reddit/featureFlags/index.ts"),
				Fe = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Be = s("./src/reddit/models/Widgets/index.ts"),
				Le = s("./src/reddit/selectors/communityFlairs.ts"),
				We = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				De = s("./src/reddit/selectors/listings.ts"),
				Me = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				Re = s.n(Me);
			const Ue = 250,
				Ae = 270,
				Ve = m.a.wrapped(N.a, "SidebarContainer", Re.a),
				He = Object(c.c)({
					apiError: De.c,
					apiPending: De.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(Le.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(Le.c)(e, t),
					isInNewModuleNCPV3Experiment: e => Object(We.a)(e) === Pe.Xd.NewModule,
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
				qe = Object(d.b)(He);
			class Qe extends a.Component {
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
							kind: Be.i.CommunityList,
							shortName: n.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: s
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: Be.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: Be.g.Cloud,
							shortName: n.fbt._("Filter by flair", null, {
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
						showGovernance: n,
						showLeaderboard: i,
						showPredictionsLeaderboard: r,
						subredditId: a,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let m = 0;
					const g = Object(B.a)(c),
						f = Object(B.b)(c),
						N = Object(B.c)(c),
						k = g || f;
					let S, I;
					!!this.getPostFlairWidget() ? S = this.props.widgets : (S = this.getCommunityWidgets(), I = this.makeFlairFilterWidget());
					const w = this.makeRelatedCommunitiesWidget(g, f),
						P = !g,
						T = f,
						F = o.a.createElement(v.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: m++,
							position: Fe.a.FIRST,
							sizes: l.i
						});
					return o.a.createElement(Ve, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, s && o.a.createElement(O.a, {
						subredditId: a,
						subredditName: d
					}), E(t) && o.a.createElement(x.a, {
						listingName: t
					}), o.a.createElement(b.a, {
						cardClassName: Re.a.card,
						subredditId: a
					}), o.a.createElement(y.a, {
						subredditId: a
					}), r && o.a.createElement(u.a, {
						subredditId: a
					}), k && o.a.createElement(_.a, null, o.a.createElement(Ce, {
						subredditName: d,
						topPostsVariant: c
					}, o.a.createElement("div", {
						className: Re.a.inFeedAd
					}, F))), k && w && o.a.createElement(_.a, null, o.a.createElement(we.a, {
						subredditName: d,
						truncateThreshold: Ae,
						widget: w
					})), T && S.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(_.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(we.a, {
							subredditName: d,
							truncateThreshold: Ue,
							widget: e
						}))
					}), n && o.a.createElement(p.a, {
						className: Re.a.card,
						subredditId: a
					}), I && o.a.createElement(_.a, null, o.a.createElement(we.a, {
						subredditName: d,
						widget: I
					})), i && o.a.createElement(h.a, {
						className: Re.a.card,
						subredditId: a,
						uniqueId: a
					}), o.a.createElement(C.g, {
						subredditId: a
					}), !k && F, o.a.createElement(Ie, {
						subredditId: a
					}), P && !T && S.map((e, t) => {
						const s = "community-list" === e.kind;
						return o.a.createElement(_.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(we.a, {
							subredditName: d,
							truncateThreshold: N && s ? Ae : N ? Ue : void 0,
							widget: e
						}))
					}), o.a.createElement(j.a, {
						adComponent: o.a.createElement(v.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: m++,
							position: Fe.a.BOTTOM,
							sizes: l.p
						})
					}))
				}
			}
			t.a = qe(Qe)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				o = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(o);
			const c = r.a.div("WidgetBackground", d.a),
				l = r.a.wrapped(({
					children: e,
					...t
				}) => i.a.createElement("div", t, i.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", d.a);
			t.b = e => i.a.createElement("div", {
				className: e.className
			}, i.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return S
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts");
			var b = Object(a.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				C = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				v = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				N = s.n(v);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => r.a.createElement(p.a, {
					className: Object(c.a)(N.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: N.a.container
				}, e.isLoading ? r.a.createElement(g.a, {
					className: N.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: N.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(S, _({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(x.t, {
					className: N.a.bottomButton,
					kind: x.b.Button,
					priority: x.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				k = Object(d.c)({
					hideNSFWPref: O.C,
					nightmode: O.W
				}),
				S = Object(a.b)(k)(e => r.a.createElement("div", {
					className: Object(c.a)(N.a.communityItemContainer, {
						[N.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(E.a, {
					className: N.a.communityItemExpandCenter,
					widthRight: h.t
				}, r.a.createElement("div", {
					className: N.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: N.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(f.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(N.a.defaultCommunityIcon, {
						[N.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: N.a.communityDescriptionContainer
				}, r.a.createElement(o.a, {
					className: N.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(y.b)(e.name, e.type),
					to: Object(y.a)(e.name, e.type)
				}, Object(y.b)(e.name, e.type)), r.a.createElement("div", {
					className: N.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: N.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					className: N.a.nsfwFlair,
					flair: {
						type: C.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(g.a, {
					className: Object(c.a)(N.a.communityCta, N.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(x.t, {
					className: N.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(b, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : r.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: N.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				i = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(i.d)(e) : Object(i.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
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
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				o = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(i.c)({
				activeModalId: l.a,
				autoplayPref: p.b,
				crosspostRoot: b.d,
				crosspostSubredditOrProfile: b.e,
				flairStyleTemplate: c.V,
				hideNSFWPref: p.C,
				isActive: b.j,
				moderatorPermissions: m.l,
				modModeEnabled: c.T,
				showEditFlair: u.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: n
				}) => e(Object(a.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: n
				})),
				handleVote: s => {
					const n = s === d.a.upvoted ? Object(r.jb)(t) : Object(r.w)(t);
					e(n)
				},
				onIgnoreReports: () => e(Object(r.fb)(t)),
				onOpenReportsDropdown: t => e(Object(o.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: n
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: n
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = s.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: s = 10
			}) => i.a.createElement("div", {
				className: Object(r.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => i.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = function({
				className: e
			}) {
				return i.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("g", {
					fill: "inherit"
				}, i.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(o);
			t.a = Object(r.a)(e => i.a.createElement("div", {
				className: Object(a.a)(d.a.expandedCenterContainer, e.className)
			}, i.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), i.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), i.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/pages/shared.ts"),
				d = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = s("./src/reddit/components/ContentGate/index.tsx"),
				l = s("./src/reddit/components/HeaderImage/index.tsx"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				b = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var p = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, n = Object(u.a)(s, m.W.HOT, {});
					return i.a.createElement(b.a, {
						listingKey: n,
						listingName: s.toLowerCase(),
						subredditId: t.id,
						subredditName: s
					})
				},
				h = s("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				x = s("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				g = s("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				f = s("./src/reddit/constants/parameters.ts"),
				E = s("./src/reddit/constants/wiki.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				y = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				v = s("./src/reddit/components/JumpToContent/index.tsx"),
				N = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				_ = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				j = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				k = s.n(j);

			function S(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return n.createElement(n.Fragment, null, n.createElement(v.a, null), n.createElement(_.a, {
					isModHub: !1,
					className: k.a.topBar,
					wikiPageName: t,
					subredditName: s
				}), n.createElement(N.a, {
					showRevisionInfo: !0,
					subredditName: s,
					wikiPageName: t
				}))
			}
			var I = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				w = s.n(I);
			class P extends i.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: s,
						queryParams: n
					} = e, {
						wikiSubRoute: r,
						wikiPageName: a
					} = s, o = n[f.E], d = n[f.F], c = f.G in n;
					switch (r) {
						case E.m.Create:
						case E.m.Edit:
							return i.a.createElement(x.a, {
								contentClassName: w.a.wikiPageEditorContent,
								isCreation: r === E.m.Create,
								subredditName: t,
								topBarClassName: w.a.communityWikiTopBar,
								wikiPageName: a
							});
						case E.m.Revisions:
							return i.a.createElement(y.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? i.a.createElement(h.a, {
								comparisonRevisionId: Object(O.a)(d),
								revisionId: Object(O.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? i.a.createElement(g.a, {
								revisionId: o ? Object(O.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? i.a.createElement(S, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var T = Object(C.u)()(P),
				F = s("./src/reddit/constants/componentSizes.ts"),
				B = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				L = s("./src/reddit/layout/page/Listing/index.tsx"),
				W = s("./src/reddit/selectors/subreddit.ts"),
				D = s("./src/reddit/selectors/user.ts");
			const M = Object(C.u)(),
				R = Object(r.b)(() => Object(a.c)({
					contentGateInfo: (e, {
						match: t
					}) => Object(D.f)(e, t.params.subredditName),
					layout: C.R,
					over18Pref: D.db,
					subreddit: (e, {
						match: t
					}) => Object(W.w)(e, {
						subredditName: t.params.subredditName || E.e
					}),
					subredditName: (e, {
						match: t
					}) => t.params.subredditName || E.e,
					wikiPageName: (e, {
						match: t
					}) => t.params.wikiPageName || E.i
				}), e => ({
					onPageViewed: () => e(Object(o.a)())
				}));
			class U extends i.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: s,
						subredditName: n
					} = this.props, r = !!s && s.isNSFW && !D.db, a = Object(B.a)(t, r, n);
					if (a) return i.a.createElement(c.default, a);
					const o = `/r/${n}/`;
					return i.a.createElement(L.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: F.i,
						navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : n,
							maxWidth: F.i,
							subredditOrProfile: s,
							url: o
						}), i.a.createElement(d.a, {
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: n,
							subredditUrl: o
						})),
						content: i.a.createElement(T, {
							subredditName: n
						}),
						sidebar: s && i.a.createElement(p, {
							subreddit: s,
							subredditName: n
						})
					})
				}
			}
			t.default = M(R(U))
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const a = e => n.ic.Enabled === Object(i.c)(e, {
				experimentEligibilitySelector: r.J,
				experimentName: n.hc
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.d686c762dcdd98733f47.js.map