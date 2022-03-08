// https://www.redditstatic.com/desktop2x/SubredditWiki.c7c0bd6174ff6a0fc2b6.js
// Retrieved at 3/8/2022, 2:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./src/reddit/actions/inContextModeration.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			}));
			var i = s("./src/lib/makeActionCreator/index.ts");
			const r = "INCONTEXT__BANNED",
				n = "INCONTEXT__MUTED",
				a = Object(i.a)(r),
				d = Object(i.a)(n)
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return f
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = s("./src/reddit/actions/notificationsInbox/index.ts"),
				d = s("./src/reddit/actions/subreddit/constants.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(r.a)(d.u),
				b = Object(r.a)(d.t),
				p = Object(r.a)(d.s),
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
			const f = ({
				subredditId: e,
				notificationLevel: t,
				successCallback: s,
				undoCallback: r
			}) => async (d, f, {
				gqlContext: g
			}) => {
				var x, O, E;
				d(b());
				const N = (e => {
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
					k = await Object(c.b)(g(), e, N);
				if ((null === (O = null === (x = k.error) || void 0 === x ? void 0 : x.fields) || void 0 === O ? void 0 : O.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(k.body) && (null === (E = k.body.data.updateSubredditNotificationSettings.errors) || void 0 === E ? void 0 : E.length)) return d(p()), d(Object(o.f)({
					kind: m.b.Error,
					text: i.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				k.ok && (d(Object(n.c)({
					subredditId: e,
					notificationLevel: t
				})), d(u({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), s && s(), d(r ? Object(o.f)(Object(o.e)(h(t), m.b.Undo, i.fbt._("Undo", null, {
					hk: "46OwLP"
				}), Object(a.i)(e, r))) : Object(o.f)(Object(o.e)(h(t), m.b.SuccessCommunityGreen))))
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
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/actions/subreddit/notifications.ts"),
				u = s("./src/lib/combineRefs/index.tsx"),
				b = s("./src/lib/hooks/useOnClickOutside.ts"),
				p = s("./src/lib/hooks/useTooltip.ts"),
				h = s("./src/reddit/components/CommonTooltip/Hooked.tsx"),
				f = s("./src/reddit/models/Subreddit/index.ts");
			const g = e => {
					switch (e) {
						case f.b.FREQUENT:
							return "notification_frequent";
						case f.b.OFF:
							return "notification_off";
						case f.b.LOW:
						default:
							return "notification"
					}
				},
				x = {
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
			var E = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/reddit/controls/Dropdown/index.tsx"),
				k = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				C = s.n(v);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var S = e => {
					return r.a.createElement(N.a, {
						id: e.dropdownId,
						className: C.a.notificationDropdown
					}, [{
						displayText: E.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(f.b.FREQUENT),
						isSelected: e.notificationLevel === f.b.FREQUENT,
						icon: r.a.createElement(j.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === f.b.FREQUENT
						})
					}, {
						displayText: E.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(f.b.LOW),
						isSelected: e.notificationLevel === f.b.LOW,
						icon: r.a.createElement(j.a, {
							name: "notification",
							isFilled: e.notificationLevel === f.b.LOW
						})
					}, {
						displayText: E.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(f.b.OFF),
						isSelected: e.notificationLevel === f.b.OFF,
						icon: r.a.createElement(j.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === f.b.OFF
						})
					}].map(e => r.a.createElement(k.b, P({
						className: Object(d.a)(C.a.notificationDropdown, C.a.notificationRow, {
							[C.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				y = s("./src/reddit/controls/Button/index.tsx"),
				I = s("./src/reddit/selectors/telemetry.ts");
			const _ = e => t => ({
				...I.o(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: I.jb(t)
			});
			var w = s("./src/reddit/hooks/useTracking.ts"),
				T = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const L = c.a.img("SubredditIcon", C.a),
				F = c.a.wrapped(T.a, "DefaultIcon", C.a);
			var W = ({
					subredditName: e,
					shouldShowSubredditIcon: t,
					subredditIcon: s,
					onHide: i,
					onUpdate: n
				}) => {
					const a = Object(w.a)(),
						d = t ? r.a.createElement(L, {
							src: s || void 0
						}) : r.a.createElement(F, null),
						o = `r/${e}`;
					return r.a.createElement("div", {
						className: C.a.notificationPopup
					}, r.a.createElement("div", {
						className: C.a.title
					}, r.a.createElement("h2", null, E.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), r.a.createElement("h3", null, E.fbt._("{subreddit name}", [E.fbt._param("subreddit name", o)], {
						hk: "1es0XP"
					}))), r.a.createElement("div", {
						className: C.a.subredditWrapper
					}, r.a.createElement("div", {
						className: C.a.subredditTitle
					}, d, r.a.createElement("span", null, o), r.a.createElement(j.a, {
						name: "notification_frequent",
						className: C.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(y.t, {
						className: C.a.subscribeButton,
						priority: y.c.Primary,
						size: y.d.M,
						text: E.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							i(), n(f.b.FREQUENT), a(_(f.b.FREQUENT.toLowerCase()))
						}
					})), r.a.createElement("button", {
						className: C.a.hideButton,
						onClick: i
					}, E.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				B = s("./src/reddit/helpers/localStorage/index.ts");
			var M = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var D = e => {
					const t = Object(n.d)(),
						s = Object(w.a)(),
						a = Object(p.b)(x),
						d = Object(p.b)(O),
						[o, c] = function(e, t) {
							const [s, r] = Object(i.useState)(Object(B.P)(e, t));
							return [s, Object(i.useCallback)(() => {
								const s = Object(B.a)(e, t);
								r(s)
							}, [e, t, r])]
						}(e.userId, e.subredditId),
						l = Object(n.e)(e => !!Object(M.a)(e));
					Object(i.useEffect)(() => {
						e.notificationLevel !== f.b.LOW && e.notificationLevel !== f.b.OFF || c()
					}, [e.subredditId]);
					const E = 2 === o,
						N = () => {
							a.hide()
						},
						k = () => {
							d.hide()
						};
					Object(i.useEffect)(() => (E && (d.update && d.update(), d.show()), () => {
						k(), N()
					}), [e.subredditName, E]);
					const v = () => {
							k(), a.show()
						},
						P = (e => `dropdown-${e}`)(e.subredditName),
						y = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(P, N);
					const I = Object(i.useCallback)(e => {
							e.stopPropagation(), a.visible ? N() : v()
						}, [N, v, a.visible]),
						T = Object(i.useCallback)(t => {
							t === f.b.FREQUENT && Object(B.db)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						L = Object(i.useCallback)(i => {
							const {
								subredditId: r
							} = e;
							N(), k(), t(Object(m.b)({
								subredditId: r,
								notificationLevel: i,
								successCallback: () => T(i)
							})), s(_(i.toLowerCase()))
						}, [N, e.subredditId, t, s]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						type: "button",
						className: C.a.notificationButton,
						ref: Object(u.a)(a.target.ref, d.target.ref),
						onClick: I,
						"data-testid": "subredditNotificationButton"
					}, r.a.createElement(j.a, {
						name: g(e.notificationLevel),
						className: C.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(h.a, {
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: P
					}, r.a.createElement(S, {
						dropdownId: P,
						notificationLevel: e.notificationLevel,
						onClick: L
					})), E && !l && r.a.createElement(h.a, {
						arrowProps: d.arrowProps,
						popperProps: d.popperProps,
						visible: d.visible,
						tooltipId: y,
						className: C.a.popupTooltip
					}, r.a.createElement(W, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: k,
						onUpdate: L
					})))
				},
				R = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				U = s("./src/reddit/components/SubredditNav/index.tsx"),
				A = s("./src/reddit/components/SubscribeButton/index.tsx"),
				V = s("./src/reddit/constants/componentSizes.ts"),
				q = s("./src/reddit/constants/postLayout.ts"),
				K = s("./src/reddit/constants/posts.ts"),
				G = s("./src/reddit/featureFlags/index.ts"),
				Q = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				z = s("./src/reddit/constants/tracking.ts");
			var H = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				J = s("./src/reddit/hooks/useWindowEvent.ts"),
				Y = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				Z = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				X = s("./src/reddit/selectors/subreddit.ts"),
				$ = s("./src/reddit/selectors/user.ts"),
				ee = s("./src/reddit/selectors/widgets.ts"),
				te = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				se = s.n(te);
			const ie = c.a.img("SubredditIcon", se.a),
				re = Object(a.c)({
					notificationLevel: X.F,
					spPollsEnabled: G.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(Z.a)(e, {
						subredditId: t
					}),
					tournamentsEnabled: (e, {
						subredditId: t
					}) => !!t && Object(X.M)(e, {
						subredditId: t
					}),
					userId: $.i,
					userIsSubscriber: (e, {
						subredditName: t
					}) => {
						const s = t;
						return Object(X.eb)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					},
					widget: (e, {
						subredditId: t
					}) => t ? Object(ee.f)(e, {
						subredditId: t
					}) : void 0
				}),
				ne = {
					threshold: [.5, .001],
					rootMargin: `${1-V.f}px 0px 0px 0px`
				};
			t.a = Object(n.b)(re, (e, t) => ({
				_updateSubredditInfo: () => {
					var s;
					const i = t.subredditId || (null === (s = t.subreddit) || void 0 === s ? void 0 : s.id);
					if (i) return e(Object(m.a)({
						subredditAboutInfo: {
							[i]: {
								notificationLevel: f.b.LOW
							}
						}
					}))
				}
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(o.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					a = e.subreddit ? e.subreddit.url : e.subredditUrl,
					o = e.subreddit ? e.subreddit.title : "",
					c = Object(n.e)(Y.b),
					m = Object(n.e)(Y.a),
					u = c || m,
					[b, p] = Object(i.useState)(!1),
					h = Object(i.useRef)(null),
					[f, g] = Object(i.useState)(),
					[x, O] = Object(i.useState)(null),
					E = Object(i.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: s
							} = t;
							s >= .5 ? e(!1) : s <= .001 && e(!0)
						})
					})(p), []);
				Object(J.a)("resize", ((e, t, s) => () => {
					var i;
					e(t && s ? null === (i = t.getBoundingClientRect()) || void 0 === i ? void 0 : i.height : void 0)
				})(g, x, u)), Object(H.a)(h, E, ne);
				const N = e.subreddit && Object(Q.a)(e),
					k = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && N),
					j = s.charAt(0).toUpperCase() + s.slice(1),
					v = !!e.subreddit && e.subredditInlineEditingEnabled,
					C = Object(d.a)(se.a.SubredditIcon, se.a.editableIcon, {
						[se.a.emptyEditableIcon]: !N
					}),
					P = k ? r.a.createElement(R.a, {
						className: C,
						subreddit: e.subreddit,
						iconUrl: N || void 0,
						inTopBar: !0
					}) : r.a.createElement(T.a, {
						className: se.a.DefaultIcon
					}),
					S = k ? r.a.createElement(ie, {
						src: N || void 0
					}) : r.a.createElement(T.a, {
						className: se.a.DefaultIcon
					}),
					y = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					_ = e.layout ? e.layout === q.g.Large ? "984px" : "100%" : "1086px";
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					style: {
						height: b ? void 0 : f
					},
					className: Object(d.a)(se.a.wrapper, {
						[se.a.stickyWrapper]: u,
						[se.a.isSticking]: b
					})
				}, r.a.createElement("div", {
					className: se.a.container,
					style: {
						maxWidth: _
					},
					ref: u ? O : void 0
				}, r.a.createElement("div", {
					className: se.a.subredditMetaContainer
				}, v ? P : S, r.a.createElement("div", {
					className: Object(d.a)(se.a.textContainer, {
						[se.a.textContainerNoIcon]: !k
					})
				}, r.a.createElement("div", {
					className: se.a.text
				}, r.a.createElement("h1", {
					className: se.a.title
				}, o || j), !!o && r.a.createElement("h2", {
					className: se.a.description
				}, "r/", s)), r.a.createElement("div", {
					className: se.a.buttonWrapper
				}, r.a.createElement("div", {
					className: se.a.subscribeButtonContainer
				}, r.a.createElement(A.a, {
					className: se.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return b ? (e => t => ({
							...I.o(t),
							source: "sticky_banner",
							action: z.c.CLICK,
							noun: e,
							subreddit: I.jb(t)
						}))(t) : (e => t => ({
							...I.o(t),
							source: "id_banner",
							action: z.c.CLICK,
							noun: e,
							subreddit: I.jb(t)
						}))(t)
					},
					identifier: {
						name: s,
						type: K.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(B.db)(e.userId, t), e.updateSubredditInfo())
					}
				})), e.userIsSubscriber && t && e.notificationLevel && r.a.createElement("div", {
					className: se.a.notificationButtonContainer
				}, r.a.createElement(D, {
					notificationLevel: e.notificationLevel,
					subredditName: s,
					subredditId: t,
					subredditIcon: N,
					shouldShowSubredditIcon: k,
					userId: e.userId
				}))))), y && r.a.createElement(U.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: a,
					subredditId: t,
					subredditNavContainerClassName: se.a.subredditNavContainer
				}))), r.a.createElement("div", {
					className: se.a.intersectionWrapper
				}, r.a.createElement("div", {
					style: {
						height: u ? f : void 0
					},
					ref: u ? h : void 0
				})))
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
				r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				d = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/FlairWrapper/index.tsx"),
				b = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				p = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				O = s("./src/reddit/helpers/name/index.ts"),
				E = s("./src/reddit/models/Flair/index.ts"),
				N = s("./src/reddit/models/Theme/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = s("./src/reddit/components/MiniCardPost/index.m.less"),
				v = s.n(j),
				C = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				P = s.n(C);
			const S = e => e.type === E.f.Spoiler,
				y = Object(h.u)();
			t.a = y(Object(f.b)(Object(p.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: n,
					innerContainerClassName: c,
					onPostClick: p,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: E,
					showSubredditMeta: j = !0,
					showSubredditName: C,
					subredditOrProfile: y
				} = e, I = h && h.preview && h.preview.url || void 0, _ = h && h.isSponsored ? "promoted_trend" : "trending", w = h && Object(l.a)(h.permalink) || "", T = E && w || f && Object(d.a)("/search", {
					q: f.rawQuery,
					source: _
				}) || w, L = f ? f.subredditInfo && f.subredditInfo.icon : y && y.icon.url, F = f ? f.subredditInfo && f.subredditInfo.displayText : y && (y.displayText || y.name), W = h ? h.flair.filter(S) : [], B = h ? h.score : 0, M = h ? h.numComments : 0, D = h && h.isSponsored, R = Object(k.a)(e).body, U = `linear-gradient(\n      ${Object(r.f)(R,.2)},\n      ${Object(r.f)(R,.3)},\n      ${Object(r.f)(R,.4)},\n      ${Object(r.f)(R,.6)},\n      ${Object(r.f)(R,.8)},\n      ${R}\n    )`, A = a.a.createElement("div", {
					id: n,
					className: Object(o.a)(P.a.trendingPost, {
						[P.a["m-background"]]: !!I
					})
				}, a.a.createElement(g.a, {
					to: T
				}, a.a.createElement("div", {
					className: Object(o.a)(P.a.backgroundWrapper, v.a.backgroundWrapper, t),
					style: {
						background: Object(N.g)(Object(k.a)(e).body, I || Object(k.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, D && a.a.createElement("div", {
					className: P.a.promoted
				}, i.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(o.a)(P.a.innerContainer, v.a.innerContainer, c),
					onClick: p,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? P.a.title : P.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(o.a)(P.a.description, s)
				}, W.length > 0 && a.a.createElement(u.a, {
					className: P.a.flair,
					titleFlair: W,
					nowrap: !0,
					post: h
				}), h.title) : a.a.createElement("div", {
					className: P.a.spacer
				}), j && L && F && a.a.createElement(x.a, {
					className: P.a.relatedSubredditMetaData,
					iconClassName: P.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: i.fbt._("{subredditName} and more", [i.fbt._param("subredditName", F)], {
						hk: "2YTyJf"
					})
				}), !j && h && a.a.createElement("div", {
					className: P.a.metaLine
				}, C && F && a.a.createElement("span", {
					className: P.a.meta
				}, Object(O.c)(F)), a.a.createElement("span", {
					className: P.a.meta
				}, i.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [i.fbt._plural(B, "number", Object(m.b)(B))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: P.a.meta
				}, i.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [i.fbt._plural(M, "number", Object(m.b)(M))], {
					hk: "311aXY"
				})))))));
				return D ? a.a.createElement(b.a, {
					post: h
				}, A) : A
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/selectors/brandSafety.ts"),
				o = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(a.u)();
			t.a = u(Object(n.b)((e, {
				listingName: t,
				pageLayer: s
			}) => {
				const i = Object(d.b)(e, {
						listingName: t,
						pageLayer: s
					}),
					r = Object(c.D)(e) || Object(o.a)(e),
					n = Object(d.e)(e);
				return {
					canShowAd: i && !r,
					awaitingBrandSafetyCheck: !Object(d.c)(e),
					isAdsDisabled: r,
					viewIsUnsafe: n
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: s,
				pageLayer: i,
				...n
			}) => !t && e && i ? r.a.createElement(l.a, m({
				forceHouseAd: s
			}, n)) : null))
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
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/ImageInput/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				p = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/models/ApiRequestState/index.ts"),
				g = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				x = s("./src/reddit/components/SubredditIcon/index.m.less"),
				O = s.n(x);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => {
					const {
						subredditId: t,
						className: s,
						inTopBar: i,
						...r
					} = e, a = [s, O.a.inTopBar, O.a.iconContainer];
					return i ? a.push(O.a.emptyEditableIconInTopBar) : a.push(O.a.editableIcon, O.a.emptyEditableIcon), n.a.createElement("span", E({}, r, {
						className: Object(o.a)(...a)
					}), i ? n.a.createElement(h.a, {
						name: "upload",
						className: O.a.emptyUploadButton
					}) : n.a.createElement(h.a, {
						name: "add",
						className: O.a.emptyPlusButton
					}), e.children)
				},
				k = e => {
					const {
						iconColor: t,
						className: s,
						alt: i,
						role: r,
						onClick: a,
						inTopBar: d,
						src: c
					} = e;
					return n.a.createElement("span", {
						className: O.a.iconContainer
					}, n.a.createElement("img", {
						alt: i,
						onClick: a,
						role: r,
						src: c,
						className: Object(o.a)(s, {
							[O.a.editableIcon]: !d
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				j = Object(d.c)({
					isLoading: g.b
				});
			class v extends n.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(p.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => n.a.createElement(m.a, {
						className: O.a.imageUploader,
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
					} = Object(b.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? n.a.createElement("span", {
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
					}), s = n.a.createElement(n.a.Fragment, null, n.a.createElement(k, E({
						alt: i.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? n.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? n.a.createElement("a", {
						href: this.props.linkTo
					}, n.a.createElement(N, E({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : n.a.createElement(n.a.Fragment, null, n.a.createElement(N, E({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [O.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(O.a.loadingIconInTopBar), t = 32), n.a.createElement(u.a, {
							className: Object(o.a)(...e),
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
					return s ? n.a.createElement("div", {
						className: O.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(a.b)(j, (e, t) => ({
				onFileSelected: (s, i) => {
					e(Object(c.a)(t.subreddit.id, s, i))
				}
			}))(Object(l.c)(v))
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
				r = s("./node_modules/lodash/isEqual.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				b = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				p = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				f = s("./src/reddit/components/IdCard/async.tsx"),
				g = s("./src/lib/isFakeSubreddit/index.ts"),
				x = s("./src/reddit/components/IdCard/helpers.ts"),
				O = e => !Object(g.a)(e) || Object(x.e)(e) || Object(x.f)(e) || Object(x.g)(e),
				E = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = s("./src/reddit/components/ModProgressModule/async.tsx"),
				k = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				j = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				v = s("./src/reddit/components/SidebarContainer/index.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				P = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				S = s("./src/lib/makeListingKey/index.ts"),
				y = s("./src/reddit/actions/subreddit.ts"),
				I = s("./src/lib/classNames/index.ts"),
				_ = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				w = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/reddit/helpers/name/index.ts"),
				L = s("./src/reddit/helpers/overlay/index.ts"),
				F = s("./src/reddit/selectors/experiments/topPosts.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				B = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const M = .99;
			class D extends d.a.Component {
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
					return d.a.createElement(B.a, {
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
				G = s("./src/reddit/models/Subreddit/index.ts"),
				Q = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				z = s.n(Q);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), J = e => e.type === K.f.Nsfw || e.type === K.f.Spoiler, Y = Object(c.c)({
				post: W.G,
				subredditOrProfile: W.U
			});
			class Z extends d.a.PureComponent {
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
						subredditOrProfile: r
					} = this.props, n = {
						post: t
					}, a = Object(U.a)(Object(q.b)(n)), o = t.flair.filter(J);
					return d.a.createElement("div", {
						className: Object(I.a)(z.a.container, e, {
							[z.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, d.a.createElement("div", {
						className: z.a.mainLine
					}, a && d.a.createElement("div", {
						className: z.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, d.a.createElement(q.a, n)), d.a.createElement("div", {
						className: Object(I.a)(z.a.title, !a && z.a.titleSingle),
						title: t.title
					}, o.length > 0 && d.a.createElement(V.a, {
						className: z.a.flair,
						titleFlair: o,
						nowrap: !0,
						post: t
					}), t.title)), d.a.createElement("div", {
						className: z.a.metaLine
					}, i && !!r && d.a.createElement("span", {
						className: z.a.meta
					}, Object(G.h)(r) ? Object(T.d)(r.displayText || r.name) : Object(T.c)(r.displayText || r.name)), d.a.createElement("span", {
						className: z.a.meta
					}, H._({
						"*": "{score} points",
						_1: "1 point"
					}, [H._plural(t.score, "score", Object(A.b)(t.score))], {
						hk: "1JZ0qm"
					})), d.a.createElement("span", {
						className: z.a.meta
					}, H._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [H._plural(t.numComments, "numComments", Object(A.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var X = Object(o.b)(Y, e => ({
					openLightbox: t => e(Object(L.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Z),
				$ = s("./src/reddit/components/SidebarPostList/index.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = 10, ie = 2, re = Object(c.a)(W.N, e => e.filter(e => !e.isSponsored)), ne = Object(c.c)({
				posts: (e, t) => re(e, {
					...t
				})
			});
			class ae extends d.a.Component {
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
							redditStyle: r,
							smallPostClassName: n
						} = this.props;
						return d.a.createElement(R, {
							key: e.id,
							onPostVisible: i,
							postId: e.id
						}, d.a.createElement(X, {
							className: Object(I.a)(ee.a.smallPost, n),
							containerOnClick: s,
							postId: e.id,
							redditStyle: r,
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
						moreButtonText: i,
						onPostVisible: r,
						posts: n,
						redditStyle: a,
						showMoreButton: o,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === n.length) return null;
					const m = this.getVisiblePostsCounts(),
						u = Object(F.a)(c),
						b = Object(F.b)(c),
						p = u || b,
						h = n.slice(l * m, (l + 1) * m),
						[f, ...x] = h,
						O = p ? h.slice(0, ie) : x.slice(0, ie),
						E = p ? h.slice(ie) : x.slice(ie);
					return d.a.createElement("div", {
						className: Object(I.a)(ee.a.container, t, {
							[ee.a.redditStyle]: a
						})
					}, !p && d.a.createElement(R, {
						onPostVisible: r,
						postId: f.id
					}, d.a.createElement(_.a, {
						postId: f.id,
						backgroundWrapperClassName: ee.a.largePostBackgroundWrapper,
						descriptionClassName: ee.a.largePostDescription,
						innerContainerClassName: ee.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(T.g)(s)),
						trendingPost: f
					})), O.map(this.renderSmallPost), e, E.map(this.renderSmallPost), o && d.a.createElement(w.r, {
						className: ee.a.SeeMore,
						onClick: this.showMorePosts
					}, i || te._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var de = Object(o.b)(ne, e => ({
					openPost: t => e(Object(L.a)(t.permalink))
				}))(ae),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ce = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				le = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				me = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = s("./src/reddit/selectors/discoveryUnit.ts"),
				be = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				he = s.n(pe);
			const fe = 10,
				ge = Object(c.a)((e, t) => t.subredditName, e => Object(S.a)(e, l.W.TOP, {
					t: l.hc.WEEK
				})),
				xe = Object(c.c)({
					discoveryUnit: e => Object(ue.b)(e, {
						unitName: me.i
					}),
					listingKey: ge,
					posts: (e, t) => {
						const s = ge(e, t);
						return Object(W.N)(e, {
							listingKey: s
						})
					},
					subreddit: be.x
				});
			class Oe extends d.a.Component {
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
						loadMorePosts: r,
						posts: n,
						subredditName: a,
						topPostsVariant: o
					} = this.props;
					if (0 === n.length) return null;
					const c = a,
						l = n.length > fe;
					return d.a.createElement(ce.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: i.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, d.a.createElement(de, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: he.a.smallPost,
						showMoreButton: l,
						topPostsVariant: o
					}, d.a.createElement("div", null, e)))
				}
			}
			var Ee = Object(o.b)(xe, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(y.r)({
						sort: l.W.TOP,
						subredditName: t,
						t: l.hc.WEEK
					}))
				}))(Object(oe.c)(Oe)),
				Ne = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				ke = s("./src/reddit/constants/tracking.ts"),
				je = s("./src/reddit/selectors/seo/linksModule.ts"),
				ve = s("./src/reddit/selectors/telemetry.ts"),
				Ce = s("./src/telemetry/models/Subreddit.ts");
			const Pe = e => t => ({
					...ve.o(t),
					action: ke.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Se = e => t => s => ({
					...ve.o(s),
					action: ke.c.CLICK,
					noun: Object(Ce.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				ye = Object(c.c)({
					communities: je.c
				});
			var Ie = Object(o.b)(ye)(e => {
					const t = Object(oe.b)();
					return e.communities && e.communities.length ? d.a.createElement(C.a, null, d.a.createElement(Ne.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: Pe,
						getSubscribeEventFactoryHandler: Se,
						sendEvent: t,
						title: i.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				_e = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				we = s("./src/reddit/constants/experiments.ts"),
				Te = s("./src/reddit/featureFlags/index.ts"),
				Le = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Fe = s("./src/reddit/models/Widgets/index.ts"),
				We = s("./src/reddit/selectors/communityFlairs.ts"),
				Be = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Me = s("./src/reddit/selectors/listings.ts"),
				De = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				Re = s.n(De);
			const Ue = 250,
				Ae = 270,
				Ve = m.a.wrapped(v.a, "SidebarContainer", Re.a),
				qe = Object(c.c)({
					apiError: Me.c,
					apiPending: Me.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(We.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(We.c)(e, t),
					isInNewModuleNCPV3Experiment: e => Object(Be.a)(e) === we.ce.NewModule,
					showGovernance: Te.d.spPoints,
					showLeaderboard: Te.d.spLeaderboard,
					showPredictionsLeaderboard: (e, {
						subredditId: t
					}) => Object(be.L)(e, {
						subredditId: t
					}) && !Object(be.M)(e, {
						subredditId: t
					}),
					widgets: be.s
				}),
				Ke = Object(o.b)(qe);
			class Ge extends a.Component {
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
					return this.props.subredditName !== e.subredditName || !n()(this.props.widgets, e.widgets) || s
				}
				render() {
					const {
						className: e,
						listingName: t,
						isInNewModuleNCPV3Experiment: s,
						showGovernance: i,
						showLeaderboard: r,
						showPredictionsLeaderboard: n,
						subredditId: a,
						subredditName: o,
						topPostsVariant: c
					} = this.props;
					let m = 0;
					const g = Object(F.a)(c),
						x = Object(F.b)(c),
						v = Object(F.c)(c),
						S = g || x;
					let y, I;
					!!this.getPostFlairWidget() ? y = this.props.widgets : (y = this.getCommunityWidgets(), I = this.makeFlairFilterWidget());
					const _ = this.makeRelatedCommunitiesWidget(g, x),
						w = !g,
						T = x,
						L = d.a.createElement(j.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: m++,
							position: Le.a.FIRST,
							sizes: l.i
						});
					return d.a.createElement(Ve, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, s && d.a.createElement(N.a, {
						subredditId: a,
						subredditName: o
					}), O(t) && d.a.createElement(f.a, {
						listingName: t
					}), d.a.createElement(b.a, {
						cardClassName: Re.a.card,
						subredditId: a
					}), d.a.createElement(k.a, {
						subredditId: a
					}), n && d.a.createElement(u.a, {
						subredditId: a
					}), S && d.a.createElement(C.a, null, d.a.createElement(Ee, {
						subredditName: o,
						topPostsVariant: c
					}, d.a.createElement("div", {
						className: Re.a.inFeedAd
					}, L))), S && _ && d.a.createElement(C.a, null, d.a.createElement(_e.a, {
						subredditName: o,
						truncateThreshold: Ae,
						widget: _
					})), T && y.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return d.a.createElement(C.a, {
							key: `widgetSpacer${t}`
						}, d.a.createElement(_e.a, {
							subredditName: o,
							truncateThreshold: Ue,
							widget: e
						}))
					}), i && d.a.createElement(p.a, {
						className: Re.a.card,
						subredditId: a
					}), I && d.a.createElement(C.a, null, d.a.createElement(_e.a, {
						subredditName: o,
						widget: I
					})), r && d.a.createElement(h.a, {
						className: Re.a.card,
						subredditId: a,
						uniqueId: a
					}), d.a.createElement(E.g, {
						subredditId: a
					}), !S && L, d.a.createElement(Ie, {
						subredditId: a
					}), w && !T && y.map((e, t) => {
						const s = "community-list" === e.kind;
						return d.a.createElement(C.a, {
							key: `widgetSpacer${t}`
						}, d.a.createElement(_e.a, {
							subredditName: o,
							truncateThreshold: v && s ? Ae : v ? Ue : void 0,
							widget: e
						}))
					}), d.a.createElement(P.a, {
						adComponent: d.a.createElement(j.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: m++,
							position: Le.a.BOTTOM,
							sizes: l.p
						})
					}))
				}
			}
			t.a = Ke(Ge)
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
				r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				o = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/user.ts");
			const h = Object(i.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: p.b,
				crosspostRoot: b.d,
				crosspostSubredditOrProfile: b.e,
				flairStyleTemplate: c.V,
				hideNSFWPref: p.E,
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
					selectedTemplateId: i
				}) => e(Object(a.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: i
				})),
				handleVote: s => {
					const i = s === o.a.upvoted ? Object(n.jb)(t) : Object(n.w)(t);
					e(i)
				},
				onIgnoreReports: () => e(Object(n.fb)(t)),
				onOpenReportsDropdown: t => e(Object(d.h)({
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
				r = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				d = s.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: s = 10
			}) => r.a.createElement("div", {
				className: Object(n.a)(d.a.loadingIcon, t, {
					[d.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/pages/shared.ts"),
				o = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = s("./src/reddit/components/ContentGate/index.tsx"),
				l = s("./src/reddit/components/HeaderImage/index.tsx"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				b = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var p = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, i = Object(u.a)(s, m.W.HOT, {});
					return r.a.createElement(b.a, {
						listingKey: i,
						listingName: s.toLowerCase(),
						subredditId: t.id,
						subredditName: s
					})
				},
				h = s("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				f = s("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				g = s("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/constants/wiki.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				k = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				j = s("./src/reddit/components/JumpToContent/index.tsx"),
				v = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				C = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				P = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				S = s.n(P);

			function y(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return i.createElement(i.Fragment, null, i.createElement(j.a, null), i.createElement(C.a, {
					isModHub: !1,
					className: S.a.topBar,
					wikiPageName: t,
					subredditName: s
				}), i.createElement(v.a, {
					showRevisionInfo: !0,
					subredditName: s,
					wikiPageName: t
				}))
			}
			var I = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				_ = s.n(I);
			class w extends r.a.Component {
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
						wikiSubRoute: n,
						wikiPageName: a
					} = s, d = i[x.F], o = i[x.G], c = x.H in i;
					switch (n) {
						case O.m.Create:
						case O.m.Edit:
							return r.a.createElement(f.a, {
								contentClassName: _.a.wikiPageEditorContent,
								isCreation: n === O.m.Create,
								subredditName: t,
								topBarClassName: _.a.communityWikiTopBar,
								wikiPageName: a
							});
						case O.m.Revisions:
							return r.a.createElement(k.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && d && o ? r.a.createElement(h.a, {
								comparisonRevisionId: Object(N.a)(o),
								revisionId: Object(N.a)(d),
								subredditName: t,
								wikiPageName: a
							}) : a && (d || c) ? r.a.createElement(g.a, {
								revisionId: d ? Object(N.a)(d) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? r.a.createElement(y, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var T = Object(E.u)()(w),
				L = s("./src/reddit/constants/componentSizes.ts"),
				F = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				W = s("./src/reddit/layout/page/Listing/index.tsx"),
				B = s("./src/reddit/selectors/subreddit.ts"),
				M = s("./src/reddit/selectors/user.ts");
			const D = Object(E.u)(),
				R = Object(n.b)(() => Object(a.c)({
					contentGateInfo: (e, {
						match: t
					}) => Object(M.f)(e, t.params.subredditName),
					layout: E.R,
					over18Pref: M.ib,
					subreddit: (e, {
						match: t
					}) => Object(B.x)(e, {
						subredditName: t.params.subredditName || O.e
					}),
					subredditName: (e, {
						match: t
					}) => t.params.subredditName || O.e,
					wikiPageName: (e, {
						match: t
					}) => t.params.wikiPageName || O.i
				}), e => ({
					onPageViewed: () => e(Object(d.a)())
				}));
			class U extends r.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: s,
						subredditName: i
					} = this.props, n = !!s && s.isNSFW && !M.ib, a = Object(F.a)(t, n, i);
					if (a) return r.a.createElement(c.default, a);
					const d = `/r/${i}/`;
					return r.a.createElement(W.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: L.i,
						navBar: r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : i,
							maxWidth: L.i,
							subredditOrProfile: s,
							url: d
						}), r.a.createElement(o.a, {
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: i,
							subredditUrl: d
						})),
						content: r.a.createElement(T, {
							subredditName: i
						}),
						sidebar: s && r.a.createElement(p, {
							subreddit: s,
							subredditName: i
						})
					})
				}
			}
			t.default = D(R(U))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.c7c0bd6174ff6a0fc2b6.js.map