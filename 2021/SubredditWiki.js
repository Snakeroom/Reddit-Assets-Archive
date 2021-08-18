// https://www.redditstatic.com/desktop2x/SubredditWiki.745c3dc1b5fac514dd07.js
// Retrieved at 8/18/2021, 11:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const i of e) t++, s += i.length, n[t] = s;
					return n
				},
				i = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const i of e) {
						for (let e = 0; e < i.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
				}
		},
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
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/structuredStyles/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/blade.ts"),
				c = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(i.a)(a.w),
				g = Object(i.a)(a.x),
				x = Object(i.a)(a.v),
				f = (e, t, s) => async (n, i, r) => {
					const a = Object(p.z)(i(), {
						subredditName: e
					});
					if (a) return v(a, t, s)(n, i, r)
				}, k = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), v = (e, t, s) => async (i, a, p) => {
					const f = await Object(l.e)(t);
					i(h());
					const v = a();
					try {
						await Object(r.g)("communityIcon", f, e.id)(i, a, p)
					} catch (_) {
						return Object(b.a)(Object(c.c)(v, "something went wrong with the uploading the image")), i(Object(o.f)({
							kind: m.b.Error,
							text: k()
						})), void i(x())
					}
					const E = Object(u.c)(a(), {
						name: "communityIcon"
					});
					if (!E) return Object(b.a)(Object(c.c)(v, "image is null")), i(Object(o.f)({
						kind: m.b.Error,
						text: k()
					})), void i(x());
					await Object(r.k)(e.id, {
						communityIcon: E
					}, d.b.idCard, s)(i, a, p), i(Object(o.f)({
						kind: m.b.SuccessCommunity,
						text: n.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), i(g())
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, s) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				o = s("./src/reddit/controls/InternalLink/index.tsx"),
				d = s("./src/reddit/hooks/useClickSourceData.ts"),
				c = s("./src/reddit/components/AuthorLink/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(r.a)(e.className, l.a.authorLinkStyles, {
						[l.a.isLivestreaming]: e.isLivestreaming,
						[l.a.isStrong]: e.isStrong,
						[l.a.isUnstyled]: e.isUnstyled
					}),
					s = Object(d.a)();
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? i.a.createElement("a", {
					className: t,
					href: `${a.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? i.a.createElement("span", {
					className: Object(r.a)(l.a.deletedAuthorLink, e.className)
				}, e.children) : i.a.createElement(o.a, {
					className: t,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: s
					}
				}, e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3lH4vtstXYL3BXfT_hrmNu",
				NotificationIcon: "_29XsM9vUO4SVgLfTrgjeiO",
				notificationIcon: "qIoApQle9dXP6HkO35IOx",
				notificationTooltipWraper: "_2w2pkG-bByJieZMGqtXafn",
				notificationDropdown: "_3RIXPgg0td0Ikm3OCair-W",
				notificationOverflowIconWrapper: "_1h1OAZgXRqrOoMn-RDyv31",
				isSelected: "_1yo5m2yCZUVzNB40ZytJzk",
				notificationRow: "nbdugyDJvnPyib81V0bre",
				tooltipText: "_2dh3-wnW4-dW-1clOFqfpU",
				notificationPopup: "J-YgwKJ71m7H4bkbzeN5G",
				title: "_3oHXlwUZwpR5SS-8P9tILX",
				subredditWrapper: "_3V00i2DgErfrsJUA2i5OVw",
				subbreditTitle: "bExO_WAeieEopnDbueyoM",
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
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX",
				notificationButtonContainer: "_1cAYKT6f3GM-_aZei--pxM"
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
				m = s("./node_modules/fbt/lib/FbtPublic.js"),
				u = s("./src/lib/makeActionCreator/index.ts"),
				p = s("./src/reddit/actions/subreddit/constants.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				g = s("./src/reddit/helpers/localStorage/index.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/models/Toast/index.ts");
			const k = Object(u.a)(p.u),
				v = Object(u.a)(p.t),
				E = Object(u.a)(p.s);
			const _ = (e, t) => async (s, n, {
				gqlContext: i
			}) => {
				var r, a, o, d;
				s(v());
				const c = n(),
					l = (e => {
						switch (e) {
							case x.b.FREQUENT:
								return {
									isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
								};
							case x.b.LOW:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
								};
							case x.b.OFF:
							default:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
								}
						}
					})(t),
					u = await Object(h.b)(i(), e, l);
				if ((null === (a = null === (r = u.error) || void 0 === r ? void 0 : r.fields) || void 0 === a ? void 0 : a.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(u.body) && (null === (o = u.body.data.updateSubredditNotificationSettings.errors) || void 0 === o ? void 0 : o.length)) return s(E()), s(Object(b.f)({
					kind: f.b.Error,
					text: m.fbt._("Sorry, you’ve encountered an error.", null, {
						hk: "4CcZhw"
					})
				}));
				u.ok && (s(k({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), s(Object(b.f)({
					kind: f.b.SuccessCommunityGreen,
					text: t === x.b.OFF ? m.fbt._("Unfollowed, You’ll no longer recieve updates", null, {
						hk: "3cvv2O"
					}) : m.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
						hk: "1fYEVg"
					})
				})), t === x.b.FREQUENT && Object(g.cb)(null === (d = c.user.account) || void 0 === d ? void 0 : d.id, e))
			};
			var y = s("./src/reddit/actions/subredditWelcomeMessage.ts"),
				C = s("./src/lib/combineRefs/index.tsx"),
				O = s("./src/lib/hooks/useOnClickOutside.ts"),
				w = s("./src/lib/hooks/useTooltip.ts"),
				N = s("./src/reddit/components/CommonTooltip/Hooked.tsx"),
				j = s("./src/reddit/icons/fonts/index.tsx"),
				T = s("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				S = s.n(T);
			const P = e => e === x.b.FREQUENT ? i.a.createElement(j.a, {
					name: "notification_frequent_fill"
				}) : i.a.createElement(j.a, {
					name: "notification_frequent"
				}),
				I = e => e === x.b.LOW ? i.a.createElement(j.a, {
					name: "notification_fill"
				}) : i.a.createElement(j.a, {
					name: "notification"
				}),
				L = e => e === x.b.OFF ? i.a.createElement(j.a, {
					name: "notification_off",
					isFilled: !0
				}) : i.a.createElement(j.a, {
					name: "notification_off"
				}),
				R = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				M = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				},
				B = {
					placement: "top"
				};
			var W = s("./src/reddit/controls/Dropdown/index.tsx"),
				F = s("./src/reddit/controls/Dropdown/Row.tsx");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const H = c.a.wrapped(W.a, "StyledDropdown", S.a),
				A = c.a.wrapped(F.b, "DropdownRow", S.a);
			var U = e => {
					return i.a.createElement(H, {
						id: e.dropdownId,
						className: S.a.notificationDropdown
					}, [{
						displayText: m.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(x.b.FREQUENT),
						isSelected: e.notificationLevel === x.b.FREQUENT,
						icon: P(e.notificationLevel)
					}, {
						displayText: m.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(x.b.LOW),
						isSelected: e.notificationLevel === x.b.LOW,
						icon: I(e.notificationLevel)
					}, {
						displayText: m.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(x.b.OFF),
						isSelected: e.notificationLevel === x.b.OFF,
						icon: L(e.notificationLevel)
					}].map(e => i.a.createElement(A, D({
						iconWrapperClassName: S.a.notificationOverflowIconWrapper,
						className: Object(o.a)(S.a.notificationDropdown, S.a.notificationRow, {
							[S.a.isSelected]: e.isSelected
						}),
						key: e.displayText
					}, e), e.icon)))
				},
				V = s("./src/reddit/controls/Button/index.tsx"),
				z = s("./src/reddit/selectors/telemetry.ts");
			const G = e => t => ({
				...z.defaults(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: z.subreddit(t)
			});
			var q = s("./src/reddit/hooks/useTracking.ts"),
				J = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const K = c.a.img("SubredditIcon", S.a),
				Y = c.a.wrapped(J.a, "DefaultIcon", S.a);
			var Z = ({
					subredditName: e,
					shouldShowSubredditIcon: t,
					subredditIcon: s,
					onHide: n,
					onUpdate: r
				}) => {
					const a = Object(q.a)(),
						o = t ? i.a.createElement(K, {
							src: s || void 0
						}) : i.a.createElement(Y, null),
						d = `r/${e}`;
					return i.a.createElement("div", {
						className: S.a.notificationPopup
					}, i.a.createElement("div", {
						className: S.a.title
					}, i.a.createElement("h2", null, m.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), i.a.createElement("h3", null, m.fbt._("{subbredit name}", [m.fbt._param("subbredit name", d)], {
						hk: "3QhSOM"
					}))), i.a.createElement("div", {
						className: S.a.subredditWrapper
					}, i.a.createElement("div", {
						className: S.a.subbreditTitle
					}, o, i.a.createElement("span", null, d), i.a.createElement(j.a, {
						name: "notification_frequent_fill",
						className: S.a.notificationIcon
					})), i.a.createElement(V.q, {
						className: S.a.subscribeButton,
						priority: V.b.Primary,
						size: V.c.M,
						text: m.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							n(), r(x.b.FREQUENT), a(G(x.b.FREQUENT.toLowerCase()))
						}
					})), i.a.createElement("button", {
						className: S.a.hideButton,
						onClick: n
					}, m.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				X = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx");
			var Q = ({
					arrowProps: e,
					popperProps: t,
					visible: s,
					subredditName: n
				}) => i.a.createElement(X.a, {
					arrowProps: e,
					popperProps: t,
					visible: s
				}, i.a.createElement("div", {
					className: S.a.tooltipText
				}, i.a.createElement("p", null, m.fbt._("Love r/{subreddit name}?", [m.fbt._param("subreddit name", n)], {
					hk: "2ftUJw"
				})), i.a.createElement("p", null, m.fbt._("Get updates on it!", null, {
					hk: "XD60G"
				})))),
				$ = s("./src/reddit/hooks/useInfoTextTooltip.ts");
			var ee = s("./src/lib/localStorageAvailable/index.ts"),
				te = s("./src/reddit/constants/experiments.ts"),
				se = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ne = s("./src/reddit/selectors/experiments/utils.ts"),
				ie = s("./src/reddit/selectors/user.ts");
			const re = e => (Object(ie.I)(e) || Object(ie.J)(e)) && Object(ee.a)(),
				ae = Object(a.a)(e => Object(se.c)(e, {
					experimentName: te.V,
					experimentEligibilitySelector: re
				}), ne.a),
				oe = Object(a.a)(ae, e => e === te.tc.ToolTip_nonSub),
				de = Object(a.a)(ae, e => e === te.tc.ToolTip_2ndVisit),
				ce = Object(a.a)(ae, e => e === te.tc.ToolTip_3rdVisit),
				le = Object(a.a)(ae, e => e === te.tc.HalfSheet_2ndVisit),
				me = Object(a.a)(ae, e => e === te.tc.HalfSheet_3rdVisit),
				ue = Object(a.a)(le, me, de, ce, oe, (e, t, s, n, i) => e || t || s || n || i);
			var pe = e => {
					const t = Object(r.d)(),
						s = Object(q.a)(),
						a = Object(r.e)(le),
						o = Object(r.e)(me),
						d = Object(r.e)(de),
						c = Object(r.e)(ce),
						l = Object(r.e)(oe),
						m = Object(w.b)(R),
						u = Object(w.b)(M),
						p = Object($.a)(B),
						[b, h] = function(e, t) {
							const [s, i] = Object(n.useState)(Object(g.N)(e, t));
							return [s, Object(n.useCallback)(() => {
								const s = Object(g.a)(e, t);
								i(s)
							}, [e, t, i])]
						}(e.userId, e.subredditId);
					Object(n.useEffect)(() => {
						e.notificationLevel !== x.b.LOW && e.notificationLevel !== x.b.OFF || h()
					}, [e.subredditId]);
					const f = a && 2 === b || o && 3 === b,
						k = d && 2 === b || c && 3 === b || l && e.showTooltipAfterSubscription,
						v = () => {
							m.hide()
						},
						E = () => {
							u.hide()
						},
						y = () => {
							p.hide()
						};
					Object(n.useEffect)(() => (f && (u.update && u.update(), u.show()), k && (p.update && p.update(), p.show()), () => {
						E(), y(), v()
					}), [e.subredditName, f, k]);
					const T = () => {
							E(), y(), m.show()
						},
						P = (e => `dropdown-${e}`)(e.subredditName),
						I = (e => `popup-${e}`)(e.subredditName);
					Object(O.a)(P, v);
					const L = Object(n.useCallback)(e => {
							e.stopPropagation(), m.visible ? v() : T()
						}, [v, T, m.visible]),
						W = Object(n.useCallback)(n => {
							v(), y(), E(), t(_(e.subredditId, n)), s(G(n.toLowerCase()))
						}, [v, e.subredditId, t, s, y, v]);
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
						type: "button",
						className: S.a.notificationButton,
						ref: Object(C.a)(p.target.ref, m.target.ref, u.target.ref),
						onClick: L,
						"data-testid": "subredditNotificationButton"
					}, (e => {
						switch (e) {
							case x.b.FREQUENT:
								return i.a.createElement(j.a, {
									name: "notification_frequent_fill",
									className: S.a.notificationIcon
								});
							case x.b.OFF:
								return i.a.createElement(j.a, {
									name: "notification_off",
									className: S.a.notificationIcon
								});
							case x.b.LOW:
							default:
								return i.a.createElement(j.a, {
									name: "notification",
									className: S.a.notificationIcon
								})
						}
					})(e.notificationLevel)), k && i.a.createElement(Q, {
						arrowProps: p.arrowProps,
						popperProps: p.popperProps,
						visible: p.visible,
						subredditName: e.subredditName
					}), i.a.createElement(N.a, {
						popperProps: m.popperProps,
						visible: m.visible,
						tooltipId: P
					}, i.a.createElement(U, {
						dropdownId: P,
						notificationLevel: e.notificationLevel,
						onClick: W
					})), f && i.a.createElement(N.a, {
						arrowProps: u.arrowProps,
						popperProps: u.popperProps,
						visible: u.visible,
						tooltipId: I,
						className: S.a.popupTooltip
					}, i.a.createElement(Z, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: E,
						onUpdate: W
					})))
				},
				be = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				he = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				ge = s("./src/reddit/components/SubredditNav/index.tsx"),
				xe = s("./src/reddit/components/SubscribeButton/index.tsx"),
				fe = s("./src/reddit/constants/postLayout.ts"),
				ke = s("./src/reddit/constants/posts.ts"),
				ve = s("./src/reddit/featureFlags/index.ts"),
				Ee = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				_e = s("./src/reddit/constants/tracking.ts");
			var ye = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				Ce = s("./src/reddit/selectors/subreddit.ts"),
				Oe = s("./src/reddit/selectors/widgets.ts"),
				we = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				Ne = s.n(we);
			const je = c.a.img("SubredditIcon", Ne.a),
				Te = Object(a.c)({
					isHighFrequencyEnabled: ue,
					notificationLevel: Ce.G,
					spPollsEnabled: ve.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(ye.a)(e, {
						subredditId: t
					}),
					tournamentsEnabled: (e, {
						subredditId: t
					}) => !!t && Object(Ce.N)(e, {
						subredditId: t
					}),
					userId: ie.h,
					userIsSubscriber: (e, {
						subredditName: t
					}) => {
						const s = t;
						return Object(Ce.fb)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					},
					widget: (e, {
						subredditId: t
					}) => t ? Object(Oe.f)(e, {
						subredditId: t
					}) : void 0
				});
			t.a = Object(r.b)(Te, (e, t) => ({
				_onOpenWelcomeMessageModal: () => {
					var s;
					const n = t.subredditId || (null === (s = t.subreddit) || void 0 === s ? void 0 : s.id);
					if (n) return e(Object(y.d)(n))
				},
				_updateSubredditInfo: () => {
					var s;
					const n = t.subredditId || (null === (s = t.subreddit) || void 0 === s ? void 0 : s.id);
					if (n) return e(k({
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
				onOpenWelcomeMessageModal: () => !e.userIsSubscriber && t._onOpenWelcomeMessageModal(),
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(d.a)(e => {
				const [t, s] = Object(n.useState)(!1), r = e.subreddit ? e.subreddit.id : e.subredditId, a = e.subreddit ? e.subreddit.name : e.subredditName, d = e.subreddit ? e.subreddit.url : e.subredditUrl, c = e.subreddit ? e.subreddit.title : "", m = e.subreddit && Object(Ee.a)(e), u = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && m), p = e.isHighFrequencyEnabled && e.userIsSubscriber, b = a.charAt(0).toUpperCase() + a.slice(1), h = !!e.subreddit && e.subredditInlineEditingEnabled, x = Object(o.a)(Ne.a.SubredditIcon, Ne.a.editableIcon, {
					[Ne.a.emptyEditableIcon]: !m
				}), f = u ? i.a.createElement(he.a, {
					className: x,
					subreddit: e.subreddit,
					iconUrl: m || void 0,
					inTopBar: !0
				}) : i.a.createElement(J.a, {
					className: Ne.a.DefaultIcon
				}), k = u ? i.a.createElement(je, {
					src: m || void 0
				}) : i.a.createElement(J.a, {
					className: Ne.a.DefaultIcon
				}), v = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0), E = e.layout ? e.layout === fe.g.Large ? "984px" : "100%" : "1086px";
				Object(n.useEffect)(() => {
					t && s(!1)
				}, [r]);
				return i.a.createElement("div", {
					className: Ne.a.container,
					style: {
						maxWidth: E
					}
				}, i.a.createElement("div", {
					className: Ne.a.subredditMetaContainer
				}, h ? f : k, i.a.createElement("div", {
					className: Object(o.a)(Ne.a.textContainer, {
						[Ne.a.textContainerNoIcon]: !u
					})
				}, i.a.createElement("div", {
					className: Ne.a.text
				}, i.a.createElement("h1", {
					className: Ne.a.title
				}, c || b), !!c && i.a.createElement("h2", {
					className: Ne.a.description
				}, "r/", a)), i.a.createElement("div", {
					className: Ne.a.subscribeButtonContainer
				}, i.a.createElement(xe.a, {
					className: Ne.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => ({
							...z.defaults(t),
							source: "id_banner",
							action: _e.c.CLICK,
							noun: e,
							subreddit: z.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: a,
						type: ke.a.SUBREDDIT
					},
					onClick: e.onOpenWelcomeMessageModal,
					small: !0,
					enableNotificationTooltipAfterSubscription: () => s(!0),
					afterUnsubscribeAction: () => {
						r && (Object(g.cb)(e.userId, r), e.updateSubredditInfo())
					}
				})), p && r && e.notificationLevel && i.a.createElement("div", {
					className: Ne.a.notificationButtonContainer
				}, i.a.createElement(pe, {
					notificationLevel: e.notificationLevel,
					subredditName: a,
					subredditId: r,
					subredditIcon: m,
					shouldShowSubredditIcon: u,
					showTooltipAfterSubscription: t,
					userId: e.userId
				})), e.subreddit && i.a.createElement(be.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), v && i.a.createElement(ge.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: d,
					subredditId: r,
					subredditNavContainerClassName: Ne.a.subredditNavContainer
				}))
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
				p = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(a.c)({
				isDownToChatExperimentEnabled: u.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(m.c)(e, t.id)
			}), x = Object(r.b)(g, e => ({
				startChatting: t => e(Object(o.i)(t))
			}));
			t.a = x(Object(d.c)(e => {
				const {
					headerButton: t,
					isEnabled: s,
					isDownToChatExperimentEnabled: n
				} = e;
				if (!s || !n) return null;
				const r = h._("Start Chatting", null, {
					hk: "3KfdZ4"
				});
				return i.a.createElement(c.q, {
					className: b.a.button,
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
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./src/reddit/featureFlags/component.tsx");
			const r = Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(i.a)("spBurnLinks", Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/IdCard/index.m.less"),
				a = s.n(r);
			const o = i.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return i.a.createElement("div", {
					className: a.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/config.ts"),
				r = s("./src/reddit/constants/listings.ts"),
				a = s("./src/reddit/constants/page.ts");
			const o = e => e && e.toLowerCase() === r.b.Popular,
				d = e => e && e.toLowerCase() === r.b.All,
				c = e => e && e === a.b,
				l = (e, t = 40, s = 68) => ({
					height: s,
					image: e,
					width: t
				}),
				m = ({
					listingName: e,
					subreddit: t,
					idCardWidget: s
				}) => {
					let a, m, u, p, b;
					const h = s && s.subscribersText || n.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						g = s && s.currentlyViewingText || n.fbt._("Online", null, {
							hk: "36JX70"
						});
					let x, f;
					return c(e) ? (a = `${i.a.assetPath}/img/id-cards/home-banner@2x.png`, u = l(`url('${i.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = r.c[r.b.Home], m = n.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = n.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(e) ? (a = `${i.a.assetPath}/img/id-cards/banner@2x.png`, m = n.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), u = l(`url('${i.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = r.c[r.b.All]) : o(e) ? (a = `${i.a.assetPath}/img/id-cards/banner@2x.png`, m = n.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), u = l(`url('${i.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = r.c[r.b.Popular]) : e && (m = s && s.description, u = l(""), p = t.displayText, b = t.url, f = s && s.subscribersCount, x = s && s.currentlyViewingCount), {
						snooBackground: u,
						description: m,
						titleText: p,
						url: b,
						subscribersCount: f,
						subscribersText: h,
						currentlyViewingText: g,
						currentlyViewingCount: x,
						...a ? {
							bannerBackgroundImage: a
						} : {}
					}
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, s) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/IdCard/index.m.less"),
				o = s.n(a);
			const d = ({
				snooBackground: e
			}) => i.a.createElement("div", {
				className: o.a.AdorableSnoo,
				style: {
					background: e.image,
					backgroundSize: `${e.width}px ${e.height}px`,
					height: e.height,
					width: e.width
				}
			});
			t.a = ({
				titleText: e,
				snooBackground: t
			}) => i.a.createElement("div", {
				className: Object(r.a)(o.a.Title, o.a.TitleShifted)
			}, i.a.createElement(d, {
				snooBackground: t
			}), i.a.createElement("div", {
				className: o.a.TitleTextShiftedContainer
			}, i.a.createElement("span", {
				className: o.a.TitleText
			}, e)))
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "h", (function() {
				return N
			})), s.d(t, "i", (function() {
				return j
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./node_modules/lodash/isNil.js"),
				d = s.n(o),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts");
			const m = Object(a.c)({
				consumers: e => e.jsApi
			});
			class u extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: s,
								...n
							}
						} = this;
						l.a.publish(c.a, n, e)
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
					return e.consumers.length ? i.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && i.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(r.b)(m, {})(u),
				b = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const s = Object(h.a)(e, t),
					n = Object(g.I)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var f = Object(r.b)(() => Object(a.a)(x, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => i.a.createElement(p, {
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
			const k = (e, t) => {
				const s = Object(h.a)(e, t),
					n = Object(g.I)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var v = Object(r.b)(() => Object(a.a)(k, e => e))(e => i.a.createElement(p, {
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
			var E = Object(r.b)(() => Object(a.c)({
					subreddit: g.T
				}))(e => i.a.createElement(p, {
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
				_ = s("./src/reddit/hooks/usePostContext.ts");
			var y = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = Object(_.a)(), r = Object(n.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					created: t.created,
					numComments: t.numComments,
					distinguishType: t.distinguishType,
					domain: t.source && t.source.displayText,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					sourceUrl: t.source && t.source.url,
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, s]);
				return i.a.createElement(p, {
					className: e.className,
					type: "post",
					data: r
				})
			};
			var C = e => {
				const {
					post: t,
					subredditOrProfile: s,
					isModerator: r
				} = Object(_.a)(), a = Object(n.useMemo)(() => ({
					author: t.author,
					isModerator: r,
					post: {
						id: t.id
					},
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {}
				}), [t, s, r]);
				return i.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: a
				})
			};
			var O = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = Object(_.a)(), r = Object(n.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					distinguishType: t.distinguishType,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					numComments: t.numComments,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, s]);
				return i.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: r
				})
			};
			var w = Object(r.b)(() => Object(a.c)({
				subreddit: g.T
			}))(e => i.a.createElement(p, {
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
			var N = Object(r.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(g.L)(e, {
					identifier: t
				})
			}))(e => i.a.createElement(p, {
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
			var j = Object(r.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(g.T)(e, {
					subredditId: t
				}) : null
			}))(e => i.a.createElement(p, {
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
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				u = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				g = Object(r.b)(() => Object(a.c)({
					isNightmodeOn: u.W
				}));
			t.a = g(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(o.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${m.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), i.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: s,
					style: n,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				unblurButtonContainer: "c1UAj_LbgdGBuJFlKbnrQ",
				unblurButton: "_2Ws3wFSVPzJhnW46FsoxLv"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				m = s("./src/lib/opener/index.ts"),
				u = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/PlayButton/index.tsx"),
				b = s("./src/reddit/constants/elementClassNames.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/ads.ts"),
				x = s("./src/reddit/hooks/useClickSourceData.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/constants/tracking.ts"),
				C = s("./src/reddit/components/Media/blurredContent.ts"),
				O = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				w = s.n(O);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => e > 2 * f.e,
				T = e => {
					const t = Object(c.a)(w.a.image, b.g, e.className, {
							[w.a.mShowCentered]: e.showCentered,
							[w.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${f.j}px`), e.isListing || e.isTall && j(e.height) || (s.maxHeight = `${f.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), r.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				S = e => {
					const t = {};
					return (!e.showFull && Object(f.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${f.j}px`, e.shouldBlur && (t.maxWidth = Object(f.I)(e.height, e.width) ? `${f.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), r.a.createElement("div", {
						className: Object(c.a)(w.a.container, e.className),
						style: t
					}, e.children)
				},
				P = Object(a.b)(() => Object(d.a)(v.G, _.cb, (e, {
					isSponsored: t,
					postId: s
				}) => t && s ? Object(v.b)(e, s) : null, k.a, E.actionInfo, v.H, (e, t, s, n, i, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					sendGoodVisitEvent: n,
					pageType: i.pageType,
					post: r
				})));
			t.a = P(e => {
				const t = e.sendGoodVisitEvent ? Object(x.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? r.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: m.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(h.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(g.a)(e.post, e.pageType)
					}
				}, L(e)) : e.isListing && e.postPermalink ? r.a.createElement(o.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(u.a)(e.postPermalink, void 0, t) : Object(u.a)(e.postPermalink)
				}, L(e)) : L(e)
			});
			const I = (e, t) => r.a.createElement(T, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[y.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				L = ({
					onClick: e,
					...t
				}) => {
					const s = Object(f.I)(t.height, t.width),
						i = j(t.height) && s;
					return r.a.createElement(S, N({}, t, {
						className: `${s?`${y.a} `:""}${t.className||""}`
					}), t.isListing ? r.a.createElement("div", {
						className: t.contentImageClassName
					}, I(s, t)) : r.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: m.b
					}, I(s, t)), t.isListing && !t.showFull && t.height > f.j && Object(f.I)(t.height, t.width) && r.a.createElement("div", {
						className: w.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && r.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && r.a.createElement("div", {
						className: w.a.unblurButtonContainer
					}, r.a.createElement("button", {
						className: w.a.unblurButton
					}, Object(C.a)(!!t.isNSFW, !!t.isSpoiler))))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/forceHttps/index.ts"),
				o = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = s.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < o.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					n = e.blurSrc ? i.a.createElement("img", {
						className: c.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					d = Object(o.B)(e.height, e.width, e.forceAspectRatio);
				return i.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && i.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), i.a.createElement("div", {
					className: Object(r.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class m extends i.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return i.a.Children.only(this.props.children) || i.a.createElement("div", null)
					}
					return i.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/throttle.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/video.ts"),
				m = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/selectors/video.ts");
			const h = 100,
				g = h / 2 / 1e3;
			var x = s("./src/lib/forceHttps/index.ts");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class k extends a.a.Component {
				constructor(e) {
					super(e), this.toggle = e => {
						if (e) {
							const e = this.play();
							e && e.catch && e.catch(() => {})
						} else this.pause()
					}, this.ref = null
				}
				play() {
					if (this.ref && this.ref.play) return this.ref.play()
				}
				pause() {
					if (this.ref && this.ref.pause) return this.ref.pause()
				}
				componentDidMount() {
					this.initEventHandlers(), this.toggle(!this.props.shouldPause && (this.props.autoplay || this.props.isNotCardView))
				}
				componentWillUnmount() {
					this.destroyEventHandlers()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.shouldPause !== e.shouldPause && this.toggle(!e.shouldPause && (e.autoplay || e.isNotCardView))
				}
				destroyEventHandlers() {
					this.ref && this.cancelBufferingDetector && this.cancelBufferingDetector()
				}
				initEventHandlers() {
					this.ref && this.props.onBufferingChange && (this.cancelBufferingDetector = function(e, t) {
						let s = !1,
							n = !1;
						const i = () => s = !0,
							r = () => n = !0;
						e.addEventListener("loadeddata", i), e.addEventListener("play", r), e.addEventListener("playing", r);
						let a = !1,
							o = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, n) return n = !1, void(o = d);
							if (e.paused || e.seeking || !s) return void(o = d);
							const i = a;
							4 === e.readyState ? a = !1 : !a && d >= o && d < o + g ? a = !0 : a && d >= o && d > o + g && (a = !1), o = d, i !== a && t(a)
						}, h);
						return () => {
							clearInterval(c), e.removeEventListener("playing", r), e.removeEventListener("play", r), e.removeEventListener("loadeddata", i)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: s,
						onBufferingChange: n,
						shouldLoad: i,
						shouldPause: r,
						showCentered: o,
						showFull: d,
						source: c,
						...l
					} = this.props;
					return a.a.createElement("video", f({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), a.a.createElement("source", {
						src: Object(x.a)(this.props.source || "")
					}))
				}
			}
			var v = k,
				E = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				_ = s.n(E);
			const y = Object(d.c)({
					autoplayPref: p.b,
					consumed: b.a,
					loadTimes: b.f,
					metadata: b.h,
					started: b.k
				}),
				C = Object(o.b)(y, (e, {
					postId: t
				}) => ({
					onBufferingChanged: s => {
						e(s ? l.r(t) : l.E(t))
					},
					onLoadStarted: s => e(l.q(t, s)),
					onMetadataReceived: s => e(l.D({
						metadata: s,
						postId: t
					})),
					onPaused: () => e(l.z({
						postId: t
					})),
					onPlayable: s => e(l.A(t, s)),
					onPlaying: () => e(l.C(t)),
					onWatched: () => e(l.s(t)),
					onViewableImpression: () => e(l.x(t)),
					onFullyViewableImpression: () => e(l.u(t)),
					onPlayedWithSound: () => e(l.B(!1, t)),
					onWatchedPercent: s => e(l.N(s, t))
				}));
			class O extends a.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = i()(e => {
						if (this.props.consumed) return;
						const {
							target: t
						} = e;
						t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && this.props.onWatched()
					}, 200), this.onTimeUpdate = e => {
						e.persist(), this._checkForConsumption(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e), this.props.started || this.props.onPlayable(e.timeStamp)
					}, this.loadStarted = e => {
						this.props.onLoadStarted(e.timeStamp)
					}, this.sendTransformedMetadata = e => {
						this.props.onMetadataReceived({
							id: this.props.postId,
							length: 1e3 * e.target.duration,
							originalHeight: e.target.videoHeight,
							originalWidth: e.target.videoWidth
						})
					}, this.onPaused = e => {
						this.props.onPaused()
					}, this.onPlaying = e => {
						this.props.loadTimes || this.onVideoPlayable(e), this.props.metadata || this.sendTransformedMetadata(e), this.props.onPlaying()
					}, this.renderVideoPlayer = () => {
						const {
							showCentered: e,
							isListing: t
						} = this.props, s = {};
						return e && (s.margin = "0 auto"), t || (s.maxHeight = `${u.e}px`), a.a.createElement(v, {
							autoplay: this.props.autoplayPref,
							className: Object(c.a)(m.a, _.a.styledVideo),
							height: this.props.height,
							isListing: this.props.isListing,
							isNotCardView: this.props.isNotCardView,
							key: this.props.postId,
							loop: !0,
							onBufferingChange: this.props.onBufferingChanged,
							onLoadStart: this.loadStarted,
							onLoadedData: this.onVideoPlayable,
							onLoadedMetadata: this.sendTransformedMetadata,
							onPause: this.props.onPaused,
							onPlaying: this.onPlaying,
							onTimeUpdate: this.onTimeUpdate,
							shouldLoad: this.props.shouldLoad,
							shouldPause: this.props.shouldPause,
							showCentered: this.props.showCentered,
							showFull: this.props.showFull,
							source: this.props.source,
							style: s,
							width: this.props.width
						})
					}
				}
				render() {
					return this.props.isListing ? this.renderVideoPlayer() : a.a.createElement("div", {
						className: Object(c.a)(_.a.container, this.props.className, {
							[_.a.centered]: this.props.showCentered
						})
					}, a.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = C(O)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const i = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? n.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? n.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
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
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/reddit/components/OverflowMenu/index.m.less"),
				x = s.n(g);
			const f = c.a.wrapped(u.a, "_Dropdown", x.a),
				k = Object(m.a)(f),
				v = c.a.button("MenuButton", x.a),
				E = c.a.wrapped(p.b, "DropdownRow", x.a),
				_ = Object(o.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				y = Object(a.b)(_, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = y(e => r.a.createElement(v, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: C(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), r.a.createElement(k, {
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
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/snoovatar.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				g = s.n(h);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: s,
				post: o,
				share: h
			}) => {
				const f = Object(l.b)(),
					k = Object(a.d)(),
					v = o && o.id,
					E = o && o.voteState;
				let _ = null;
				v || (_ = e ? "user_hovercard" : "profile_overview");
				const y = Object(i.useCallback)(() => f(Object(u.c)(e ? "user_hovercard" : "profile_overview", t)), [e, f, t]);
				return r.a.createElement(m.q, {
					onClick: () => {
						s ? (f(u.d), v && E === b.a.notVoted && k(Object(d.db)(v))) : y();
						const e = s ? "postify" : "copy";
						k(Object(c.b)({
							clickSource: _,
							share: h,
							source: e
						}))
					},
					className: Object(n.a)(g.a.snoovatarButton, g.a.snoovatarExtraPadding, g.a.compactButtonLayout, {
						[g.a.avatarPostifyButton]: s
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(n.a)({
						[g.a.shirtIcon]: !s,
						[g.a.avatarPostButtonShirtIcon]: s
					})
				}), x._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: g.a.chevronIcon
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
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(u);
			const b = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				h = d.a.wrapped(e => {
					const t = Object(l.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, n, i) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									i && n(s, i), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(n.g)(Object(m.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.g)(Object(m.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(o.a)(h))
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, s) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-autosize-textarea/lib/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
					className: e,
					children: t,
					editorWrapperRef: s,
					initialHeight: n
				}) => i.a.createElement("div", {
					className: Object(o.a)(c.a.editorWrapper, e),
					style: n ? {
						height: n
					} : void 0,
					ref: s
				}, t),
				u = ({
					isFullHeight: e,
					textAreaRef: t,
					...s
				}) => i.a.createElement(a.a, l({
					className: Object(o.a)(c.a.textareaAutosize, {
						[c.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, s));
			class p extends i.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const {
						className: e,
						initialHeight: t,
						innerRef: s,
						onEditorResize: n,
						...r
					} = this.props, {
						isResized: a
					} = this.state;
					return i.a.createElement(m, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, i.a.createElement(u, l({}, r, {
						children: !0,
						isFullHeight: !!a,
						textAreaRef: s
					})))
				}
			}
			t.a = p
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				m = s.n(l),
				u = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				g = u.a.span("InnerSpan", m.a),
				x = u.a.span("TooltipTarget", m.a),
				f = u.a.span("SpoilerWrapper", m.a),
				k = u.a.wrapped(({
					className: e,
					isOpen: t,
					...s
				}) => r.a.createElement(f, p({}, s, {
					className: Object(a.a)(e, {
						[m.a.isOpen]: t
					})
				})), "SpoilerWrapper", m.a),
				v = Object(c.a)(u.a.wrapped(d.b, "Component", m.a), [o.a.Click, o.a.Keydown]);
			class E extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return r.a.createElement(k, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, r.a.createElement(g, null, r.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), r.a.createElement(v, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = E
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "v", (function() {
				return x
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "u", (function() {
				return E
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "n", (function() {
				return O
			})), s.d(t, "t", (function() {
				return w
			})), s.d(t, "p", (function() {
				return N
			})), s.d(t, "o", (function() {
				return j
			})), s.d(t, "q", (function() {
				return T
			})), s.d(t, "s", (function() {
				return S
			})), s.d(t, "r", (function() {
				return P
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "w", (function() {
				return L
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/RichTextJson/elements.m.less"),
				o = s.n(a),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", o.a), d.a.div("H2", o.a), d.a.div("H3", o.a), d.a.div("H4", o.a), d.a.div("H5", o.a), d.a.div("H6", o.a)],
				m = d.a.hr("Hr", o.a),
				u = d.a.code("M", o.a),
				p = d.a.pre("Pre", o.a),
				b = d.a.blockquote("Blockquote", o.a),
				h = d.a.p("P", o.a),
				g = d.a.li("Li", o.a),
				x = d.a.ul("Ul", o.a),
				f = d.a.ol("Ol", o.a),
				k = d.a.strong("B", o.a),
				v = d.a.em("I", o.a),
				E = d.a.span("U", o.a),
				_ = e => i.a.createElement("del", e),
				y = d.a.sub("Sub", o.a),
				C = d.a.sup("Sup", o.a),
				O = d.a.table("Table", o.a),
				w = d.a.tr("Tr", o.a),
				N = d.a.td("Tdl", o.a),
				j = d.a.td("Tdc", o.a),
				T = d.a.td("Tdr", o.a),
				S = d.a.th("Thl", o.a),
				P = d.a.th("Thc", o.a),
				I = (d.a.th("Thr", o.a), d.a.wrapped(e => i.a.createElement(r.b, e), "A", o.a)),
				L = d.a.wrapped(c.a, "A", o.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "a", (function() {
				return w
			}));
			var n = s("./node_modules/lodash/findLastIndex.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/sentry/index.ts"),
				l = s("./src/reddit/components/Media/blurredContent.ts"),
				m = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/media.tsx"),
				g = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = s("./src/reddit/components/RichTextJson/index.m.less"),
				f = s.n(x);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = s("./src/lib/lessComponent.tsx").a.div("Container", f.a),
				E = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...s
				}) => a.a.createElement(v, k({}, s, {
					style: {
						color: Object(p.a)(Object(u.a)({
							flairStyleTemplate: e,
							theme: t,
							...s
						}))
					}
				}))),
				_ = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				y = e => i()(e, _),
				C = e => e.findIndex(_),
				O = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: i,
						isNSFW: r,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: u,
						renderMediaAsLinks: p,
						rtJsonElementProps: x,
						useExplicitTextColor: k,
						shouldBlur: _
					} = e, O = n.document, w = [], N = e.mediaMetadata || null, j = C(O), T = y(O);
					if (_ && !i) return a.a.createElement(v, {
						className: Object(o.a)(m.j, s)
					}, a.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: c
					}, Object(l.a)(!!r, !!d))));
					if (-1 !== j)
						for (let a = j; a <= T; a++) {
							const e = O[a];
							switch (e.e) {
								case b.k:
									w.push(g.c(e, x, a));
									break;
								case b.l:
									w.push(g.d(a));
									break;
								case b.b:
									w.push(g.a(e, N, x, a));
									break;
								case b.c:
									w.push(g.b(e, a));
									break;
								case b.p:
									w.push(g.f(e, N, x, a));
									break;
								case b.z:
									w.push(g.h(e, N, x, a));
									break;
								case b.u:
									w.push(g.g(e, N, x, a));
									break;
								case b.h:
									w.push(Object(h.a)(e, a));
									break;
								case b.m:
								case b.a:
								case b.D:
									w.push(...Object(h.b)(e, a, N, p, u, t))
							}
						}
					return k ? a.a.createElement(v, {
						className: Object(o.a)(m.j, s)
					}, w) : a.a.createElement(E, {
						className: Object(o.a)(m.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, w)
				};
			class w extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					c.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), c.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return O(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/config.ts"),
				d = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				m = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				u = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/helpers/richTextJson/index.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/elements.tsx"),
				g = s("./src/reddit/components/RichTextJson/media.m.less"),
				x = s.n(g),
				f = s("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = /\/(\w+)\/asset\/(\w+)\//,
				E = f.a.wrapped(h.a, "A", x.a),
				_ = f.a.wrapped(l.a, "ImageBox", x.a),
				y = f.a.wrapped(e => r.a.createElement("p", e), "Caption", x.a),
				C = f.a.div("Placeholder", x.a),
				O = f.a.wrapped(({
					className: e,
					e: t,
					...s
				}) => {
					const i = t === b.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return r.a.createElement(C, k({
						className: e,
						style: {
							"--placeholder-content-text": `'${i}'`
						}
					}, s))
				}, "Placeholder", x.a),
				w = ({
					c: e,
					x: t,
					y: s
				}, n) => r.a.createElement("div", {
					className: x.a.MediaWrapper
				}, r.a.createElement(m.a, {
					height: s,
					isListing: !1,
					key: n,
					showCentered: !0,
					showFull: !0,
					width: t
				}, r.a.createElement(c.a, {
					isListing: !1,
					source: e,
					height: s,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				N = (e, t, s) => {
					const n = e.c;
					let i = "";
					return s && (s.e === b.s ? i = s.s.u : s.e === b.r ? i = s.s.gif : s.e === b.t && (i = (e => {
						const t = v.exec(e);
						return t ? `${o.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), i ? r.a.createElement(E, {
						href: i,
						key: t,
						title: n
					}, n || i) : null
				},
				j = (e, t, s, n, i, o) => {
					const c = b.E(s, e.id);
					if (n) return [N(e, t, c)];
					const l = [];
					return c ? c.e === b.s ? l.push((({
						id: e,
						s: t
					}, s, n, i) => r.a.createElement("div", {
						className: Object(a.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: n
						})
					}, r.a.createElement(m.a, {
						height: t.y,
						isListing: !1,
						key: s,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, r.a.createElement(_, {
						altText: i,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(c, t, !!e.c, o)) : c.e === b.r ? l.push((({
						id: e,
						ext: t,
						s
					}, n, i) => {
						if (Object(p.f)(e)) {
							const o = t || Object(p.e)(e);
							return r.a.createElement("div", {
								className: Object(a.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: i
								})
							}, r.a.createElement(E, {
								href: o,
								key: n,
								target: "_blank"
							}, s.mp4 ? r.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, r.a.createElement("source", {
								src: s.mp4
							})) : {
								originalSource: o
							}))
						}
						return r.a.createElement("div", {
							className: Object(a.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: i
							})
						}, r.a.createElement(m.a, {
							height: s.y,
							isListing: !1,
							key: n,
							showCentered: !0,
							showFull: !0,
							width: s.x
						}, r.a.createElement(u.a, {
							height: s.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: s.mp4,
							width: s.x,
							postId: e,
							source: s.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(c, t, !!e.c)) : c.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: s,
						y: n,
						isGif: i
					}, o, c, l) => r.a.createElement("div", {
						className: Object(a.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: c
						})
					}, r.a.createElement(m.a, {
						height: n,
						isListing: !1,
						isVideo: !0,
						key: o,
						showCentered: !0,
						showFull: !0,
						width: s
					}, r.a.createElement(d.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: i,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: i
					}))))(c, t, !!e.c, i)) : l.push(((e, t) => r.a.createElement(O, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => r.a.createElement(y, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return I
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "h", (function() {
				return F
			})), s.d(t, "g", (function() {
				return D
			})), s.d(t, "i", (function() {
				return H
			})), s.d(t, "e", (function() {
				return A
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				i = s("./node_modules/lodash/reduce.js"),
				r = s.n(i),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./node_modules/uuid/v4.js"),
				l = s.n(c),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/models/Product/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/higherOrderComponents/makeAsync.tsx");
			var g = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				f = s.n(x);
			const k = 1e3,
				v = 1e3;
			var E;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(E || (E = {}));
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = E.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = E.Inside, setTimeout(() => {
							this.mouseLocation === E.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, k)
					}, this.onMouseOut = () => {
						this.mouseLocation = E.Outside, setTimeout(() => {
							this.mouseLocation !== E.Inside && this.setState({
								tooltipOpen: !1
							})
						}, v)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = b.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, n, i;
					t.e === p.s ? (s = t.s.x, n = t.s.y, i = t.s.u) : t.e === p.r && (s = t.s.x, n = t.s.y, i = t.s.gif);
					const r = this.state.tooltipOpen ? l()() : void 0;
					return i ? o.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, o.a.createElement("img", {
						id: r,
						src: i,
						width: s,
						height: n,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && o.a.createElement(g, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: r,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var y = Object(m.c)(_),
				C = s("./src/reddit/components/RichTextJson/media.tsx"),
				O = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				w = s("./src/reddit/components/SubredditMention/index.tsx"),
				N = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				j = s("./src/reddit/helpers/isComment.ts"),
				T = s("./src/reddit/helpers/isPost.ts"),
				S = s("./src/reddit/helpers/richTextJson/index.ts"),
				P = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const I = (e, t, s) => {
					const n = e.c || [],
						i = e.l,
						r = [],
						a = n.length;
					for (let o = 0; o < a; o++) {
						const e = n[o];
						r.push(e.e === p.w ? e.t : A(e, t, o))
					}
					const c = d.x[i - 1];
					return o.a.createElement(c, {
						key: s
					}, r)
				},
				L = e => o.a.createElement(d.e, {
					key: e
				}),
				R = (e, t, s, n) => {
					const i = e.c;
					if (!i) return;
					const r = i.length,
						a = [];
					for (let o = 0; o < r; o++) a.push(W(i[o], t, s, o));
					return o.a.createElement(d.c, {
						key: n
					}, a)
				},
				M = (e, t) => {
					const s = e.c;
					return o.a.createElement(d.k, {
						key: t
					}, o.a.createElement(d.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				B = (e, t, s, n) => {
					const i = e.c,
						r = [],
						a = i.length;
					for (let l = 0; l < a; l++) {
						const e = i[l].c;
						e && e.length && r.push(o.a.createElement(d.g, {
							key: l
						}, e.map((e, n) => W(e, t, s, n))))
					}
					const c = e.o ? d.i : d.v;
					return o.a.createElement(c, {
						key: n
					}, r)
				},
				W = (e, t, s, n) => {
					switch (e.e) {
						case p.b:
							return R(e, t, s, n);
						case p.c:
							return M(e, n);
						case p.k:
							return I(e, s, n);
						case p.l:
							return L(n);
						case p.p:
							return B(e, t, s, n);
						case p.u:
							return D(e, t, s, n);
						case p.z:
							return F(e, t, s, n)
					}
				},
				F = (e, t, s, n) => {
					const i = e.c,
						r = e.h,
						a = i.length,
						c = r.length,
						l = [],
						m = [],
						u = [];
					for (let d = 0; d < c; d++) {
						const e = r[d],
							{
								H: n,
								D: i
							} = G(e.a),
							{
								c: a = []
							} = e;
						l.push(o.a.createElement(n, {
							key: d
						}, H(a, t, s))), u[d] = i
					}
					for (let p = 0; p < a; p++) {
						const e = i[p],
							n = e.length,
							r = [];
						for (let i = 0; i < n; i++) {
							const n = u[i],
								{
									c: a = []
								} = e[i];
							r.push(o.a.createElement(n, {
								key: i
							}, H(a, t, s)))
						}
						m.push(o.a.createElement(d.t, {
							key: p
						}, r))
					}
					return o.a.createElement(d.n, {
						key: n
					}, o.a.createElement("thead", null, o.a.createElement(d.t, null, l)), o.a.createElement("tbody", null, m))
				},
				D = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => o.a.createElement(d.j, {
						key: e
					}, o.a.createElement("br", null)))(n);
					const i = e.c[0];
					return i.e !== p.m && i.e !== p.a || !Object(S.f)(i.id) ? o.a.createElement(d.j, {
						key: n
					}, H(e.c, t, s)) : Object(C.b)(i, n, t)
				},
				H = (e, t, s) => {
					const n = [],
						i = e.length;
					for (let r = 0; r < i; r++) {
						const i = e[r];
						if (i.e === p.A) n.push(U(i, r));
						else if (i.e === p.x) n.push(o.a.createElement(O.a, {
							key: r
						}, H(i.c, t, s)));
						else if (i.e === p.n) n.push(o.a.createElement("br", {
							key: r
						}));
						else if (i.e === p.m || i.e === p.a) {
							if (i.id.startsWith("emote|")) {
								const e = p.E(t, i.id);
								e && n.push(o.a.createElement(y, {
									key: r,
									node: i,
									media: e
								}))
							}
						} else n.push(A(i, s, r))
					}
					return n
				},
				A = (e, t, s) => {
					switch (e.e) {
						case p.o:
							const n = U({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(N.b)(e.u)) return o.a.createElement(d.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let i, r;
							const a = Object(P.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(T.b)(c) && (i = c.postId), c && Object(j.b)(c) && (r = c.id, i = c.postId), o.a.createElement(d.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: a,
								postId: i,
								commentId: r
							}, n);
						case p.y:
							return o.a.createElement(w.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return o.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return o.a.createElement(d.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				U = (e, t) => {
					const {
						f: s,
						t: i
					} = e, r = [];
					if (!s) return z(0, i, t);
					const a = Object(n.a)(i);
					let o = 0,
						d = 0;
					const c = s.length;
					for (; o < c; o++) {
						const [e, t, n] = s[o], c = t + n, l = a[t], m = a[c] - l;
						l > d && r.push(z(0, i.substr(d, l - d), `between${o}`)), r.push(z(e, i.substr(l, m), o)), d = l + m
					}
					return d < i.length && r.push(z(0, i.substr(d), `remaining${o}`)), r
				},
				V = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				z = (e, t, s) => {
					let n = t;
					return n = r()(V, (t, n, i) => e & parseInt(i, 10) ? o.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				G = e => {
					switch (e) {
						case p.f:
							return {
								H: d.r, D: d.q
							};
						case p.d:
							return {
								H: d.r, D: d.o
							};
						case p.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
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
				p = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				k = s("./src/reddit/helpers/name/index.ts"),
				v = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Theme/index.ts"),
				_ = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = s("./src/reddit/components/MiniCardPost/index.m.less"),
				C = s.n(y),
				O = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				w = s.n(O);
			const N = e => e.type === v.f.Spoiler,
				j = Object(h.u)();
			t.a = j(Object(g.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: r,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: g,
					shouldOpenPost: v,
					showSubredditMeta: y = !0,
					showSubredditName: O,
					subredditOrProfile: j
				} = e, T = h && h.preview && h.preview.url || void 0, S = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", I = v && P || g && Object(o.a)("/search", {
					q: g.rawQuery,
					source: S
				}) || P, L = g ? g.subredditInfo && g.subredditInfo.icon : j && j.icon.url, R = g ? g.subredditInfo && g.subredditInfo.displayText : j && (j.displayText || j.name), M = h ? h.flair.filter(N) : [], B = h ? h.score : 0, W = h ? h.numComments : 0, F = h && h.isSponsored, D = Object(_.a)(e).body, H = `linear-gradient(\n      ${Object(i.g)(D,.2)},\n      ${Object(i.g)(D,.3)},\n      ${Object(i.g)(D,.4)},\n      ${Object(i.g)(D,.6)},\n      ${Object(i.g)(D,.8)},\n      ${D}\n    )`, A = a.a.createElement("div", {
					id: r,
					className: Object(d.a)(w.a.trendingPost, {
						[w.a["m-background"]]: !!T
					})
				}, a.a.createElement(x.a, {
					to: I
				}, a.a.createElement("div", {
					className: Object(d.a)(w.a.backgroundWrapper, C.a.backgroundWrapper, t),
					style: {
						background: Object(E.g)(Object(_.a)(e).body, T || Object(_.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": H
					}
				}, F && a.a.createElement("div", {
					className: w.a.promoted
				}, n.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(w.a.innerContainer, C.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? w.a.title : w.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(w.a.description, s)
				}, M.length > 0 && a.a.createElement(u.a, {
					className: w.a.flair,
					titleFlair: M,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : a.a.createElement("div", {
					className: w.a.spacer
				}), y && L && R && a.a.createElement(f.a, {
					className: w.a.relatedSubredditMetaData,
					iconClassName: w.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: n.fbt._("{subredditName} and more", [n.fbt._param("subredditName", R)], {
						hk: "2YTyJf"
					})
				}), !y && h && a.a.createElement("div", {
					className: w.a.metaLine
				}, O && R && a.a.createElement("span", {
					className: w.a.meta
				}, Object(k.c)(R)), a.a.createElement("span", {
					className: w.a.meta
				}, n.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [n.fbt._plural(B, "number", Object(m.b)(B))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: w.a.meta
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(W, "number", Object(m.b)(W))], {
					hk: "311aXY"
				})))))));
				return F ? a.a.createElement(p.a, {
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
					i = Object(c.A)(e) || Object(d.a)(e),
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
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(i);
			t.a = n.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/components/SidebarFooter/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = r.a.a("Link", u.a), h = Object(l.c)({
				isNavbarLikeMwebEnabled: c.a
			}), g = Object(a.b)(h), x = Object(d.u)({
				isFrontpage: d.z
			});
			t.a = x(g(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? i.a.createElement(o.a, {
				className: u.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, i.a.createElement("div", {
				className: u.a.LinkContainer
			}, i.a.createElement("div", {
				className: u.a.Column
			}, i.a.createElement(b, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("User Agreement", null, {
				hk: "2RA6JL"
			})), i.a.createElement(b, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			}))), i.a.createElement("div", {
				className: u.a.Column
			}, i.a.createElement(b, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), i.a.createElement(b, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, p._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), i.a.createElement("div", {
				className: u.a.Copyright
			}, p._("© {year} Reddit, Inc. All rights reserved.", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : i.a.createElement(o.a, {
				className: u.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, i.a.createElement("div", {
				className: u.a.LinkContainer
			}, i.a.createElement("div", {
				className: u.a.Column
			}, i.a.createElement(b, {
				href: "https://www.reddithelp.com"
			}, p._("help", null, {
				hk: "4lyYaD"
			})), i.a.createElement(b, {
				href: "https://www.reddit.com/coins"
			}, p._("Reddit coins", null, {
				hk: "32iMaN"
			})), i.a.createElement(b, {
				href: "https://www.reddit.com/premium"
			}, p._("Reddit premium", null, {
				hk: "RuO3A"
			})), i.a.createElement(b, {
				href: "https://redditgifts.com/"
			}, p._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && i.a.createElement(i.a.Fragment, null, i.a.createElement(b, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, p._("Communities", null, {
				hk: "3CJu37"
			})), i.a.createElement(b, {
				href: "https://www.reddit.com/posts/2020/"
			}, p._("Rereddit", null, {
				hk: "1z3k7C"
			})), i.a.createElement(b, {
				href: "https://www.reddit.com/topics/a-1/"
			}, p._("Topics", null, {
				hk: "349RFt"
			})))), i.a.createElement("div", {
				className: u.a.Column
			}, i.a.createElement(b, {
				href: "https://about.reddit.com"
			}, p._("about", null, {
				hk: "1sqJKs"
			})), i.a.createElement(b, {
				href: "https://about.reddit.com/careers/"
			}, p._("careers", null, {
				hk: "26ABvc"
			})), i.a.createElement(b, {
				href: "https://about.reddit.com/press/"
			}, p._("press", null, {
				hk: "2Qmgdz"
			})), i.a.createElement(b, {
				href: "https://www.redditinc.com/advertising"
			}, p._("advertise", null, {
				hk: "Mt40U"
			})), i.a.createElement(b, {
				href: "http://www.redditblog.com/"
			}, p._("blog", null, {
				hk: "46IQJw"
			})), i.a.createElement(b, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("Terms", null, {
				hk: "4qRzfE"
			})), i.a.createElement(b, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), i.a.createElement(b, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			})), i.a.createElement(b, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, p._("Mod policy", null, {
				hk: "2gYc2T"
			})))), i.a.createElement("div", {
				className: u.a.Copyright
			}, p._("Reddit Inc © {year} . All rights reserved", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "3nJUt5"
			})))))
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
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", i.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/lodash/throttle.js"),
				r = s.n(i),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(c.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var h = ({
					className: e,
					isOverlay: t,
					style: s
				}) => o.a.createElement("div", {
					className: Object(n.a)(e, u.a.container),
					style: s
				}, o.a.createElement(l.i, {
					className: u.a.button,
					onClick: () => b(t)
				}, p._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				g = s("./src/reddit/components/SidebarFooter/index.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				v = s.n(k),
				E = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = d.e[1] + 24,
				C = x.f + 8 + 152 + 16,
				O = C + y + 8,
				w = E.a.div("Container", v.a),
				N = E.a.wrapped(({
					className: e,
					isOverlay: t,
					...s
				}) => o.a.createElement(h, _({
					className: e,
					isOverlay: t,
					style: {
						top: "calc(100vh - 8px)"
					}
				}, s)), "BackToTop", v.a),
				j = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: i
				}) => o.a.createElement("div", {
					className: Object(n.a)(t, {
						[v.a.StickyStyles]: i && !s,
						[v.a.StickyStylesFakeOverlay]: !!s
					})
				}, e);
			class T extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > O,
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
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.I), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
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
							adComponentOnFakeOverlay: s,
							children: n,
							className: i,
							hideFooter: r,
							pageLayer: a
						}
					} = this, d = this.state.isAdSticky && !(!t && !n);
					return o.a.createElement(w, {
						className: i,
						innerRef: this.setWrapperRef
					}, o.a.createElement(j, {
						isFakeOverlay: s,
						isSticky: d
					}, t, n, !r && o.a.createElement(g.a, null)), !this.props.hideBackToTop && o.a.createElement(N, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const S = Object(f.u)();
			t.a = S(T)
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
				p = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/models/ApiRequestState/index.ts"),
				x = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				f = s("./src/reddit/components/SubredditIcon/index.m.less"),
				k = s.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = e => {
					const {
						subredditId: t,
						className: s,
						inTopBar: n,
						...i
					} = e, a = [s, k.a.inTopBar, k.a.iconContainer];
					return n ? a.push(k.a.emptyEditableIconInTopBar) : a.push(k.a.editableIcon, k.a.emptyEditableIcon), r.a.createElement("span", v({}, i, {
						className: Object(d.a)(...a)
					}), n ? r.a.createElement(h.a, {
						name: "upload",
						className: k.a.emptyUploadButton
					}) : r.a.createElement(h.a, {
						name: "add",
						className: k.a.emptyPlusButton
					}), e.children)
				},
				_ = e => {
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
						className: k.a.iconContainer
					}, r.a.createElement("img", {
						alt: n,
						onClick: a,
						role: i,
						src: c,
						className: Object(d.a)(s, {
							[k.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				y = Object(o.c)({
					isLoading: x.b
				});
			class C extends r.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => r.a.createElement(m.a, {
						className: k.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(g.b)();
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
					return this.props.inTopBar ? r.a.createElement("span", {
						className: k.a.clickableUploadText,
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
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = r.a.createElement(r.a.Fragment, null, r.a.createElement(_, v({
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
					}, r.a.createElement(E, v({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : r.a.createElement(r.a.Fragment, null, r.a.createElement(E, v({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [k.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(k.a.loadingIconInTopBar), t = 32), r.a.createElement(u.a, {
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
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? r.a.createElement("div", {
						className: k.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(a.b)(y, (e, t) => ({
				onFileSelected: (s, n) => {
					e(Object(c.a)(t.subreddit, s, n))
				}
			}))(Object(l.c)(C))
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SubredditIcon/index.tsx"),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = s.n(d);
			const l = r.a.wrapped(a.b, "SubredditIcon", c.a),
				m = r.a.wrapped(e => i.a.createElement(o.b, e), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				u = s.n(m);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => i.a.createElement("span", {
						className: u.a.subredditMentionContainer
					}, i.a.createElement(l.a, {
						href: `/r/${e}/`
					}, i.a.createElement("span", {
						className: u.a.subredditIconContainer
					}, i.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = s("./src/reddit/selectors/subredditMention.ts");
			class f extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(g.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return i.a.createElement(o.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const k = Object(b.c)(f),
				v = Object(a.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				E = Object(r.b)(v),
				_ = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: s,
					userVariant: n,
					rtJsonElementProps: r
				}) => {
					if (!t || !e) return i.a.createElement(k, {
						subredditName: s,
						rtJsonElementProps: r
					});
					switch (n) {
						case h.Nd.SmIcon:
							return i.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: r
							});
						case h.Nd.SmIconHc:
							return i.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: r
							});
						default:
							return i.a.createElement(k, {
								subredditName: s,
								rtJsonElementProps: r
							})
					}
				};
			t.b = E(_)
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
				p = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				x = s("./src/lib/isFakeSubreddit/index.ts"),
				f = s("./src/reddit/components/IdCard/helpers.ts"),
				k = e => !Object(x.a)(e) || Object(f.c)(e) || Object(f.d)(e) || Object(f.e)(e),
				v = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				_ = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				y = s("./src/reddit/components/SidebarContainer/index.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				O = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				w = s("./src/lib/makeListingKey/index.ts"),
				N = s("./src/reddit/actions/subreddit.ts"),
				j = s("./src/lib/classNames/index.ts"),
				T = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				S = s("./src/reddit/controls/Button/index.tsx"),
				P = s("./src/reddit/helpers/name/index.ts"),
				I = s("./src/reddit/helpers/overlay/index.ts"),
				L = s("./src/reddit/selectors/experiments/topPosts.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				M = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const B = .99;
			class W extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= B && t(s)
					}
				}
				render() {
					return o.a.createElement(M.a, {
						threshold: B,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var F = W,
				D = s("./src/lib/isUrl/index.ts"),
				H = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/FlairWrapper/index.tsx"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				V = s("./src/reddit/models/Flair/index.ts"),
				z = s("./src/reddit/models/Subreddit/index.ts"),
				G = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				q = s.n(G);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = e => e.type === V.f.Nsfw || e.type === V.f.Spoiler, Y = Object(c.c)({
				post: R.H,
				subredditOrProfile: R.U
			});
			class Z extends o.a.PureComponent {
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
					}, a = Object(D.a)(Object(U.b)(r)), d = t.flair.filter(K);
					return o.a.createElement("div", {
						className: Object(j.a)(q.a.container, e, {
							[q.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: q.a.mainLine
					}, a && o.a.createElement("div", {
						className: q.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(U.a, r)), o.a.createElement("div", {
						className: Object(j.a)(q.a.title, !a && q.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(A.a, {
						className: q.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: q.a.metaLine
					}, n && !!i && o.a.createElement("span", {
						className: q.a.meta
					}, Object(z.h)(i) ? Object(P.d)(i.displayText || i.name) : Object(P.c)(i.displayText || i.name)), o.a.createElement("span", {
						className: q.a.meta
					}, J._({
						"*": "{score} points",
						_1: "1 point"
					}, [J._plural(t.score, "score", Object(H.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: q.a.meta
					}, J._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [J._plural(t.numComments, "numComments", Object(H.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var X = Object(d.b)(Y, e => ({
					openLightbox: t => e(Object(I.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Z),
				Q = s("./src/reddit/components/SidebarPostList/index.m.less"),
				$ = s.n(Q);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = 10, se = 2, ne = Object(c.a)(R.N, e => e.filter(e => !e.isSponsored)), ie = Object(c.c)({
				posts: (e, t) => ne(e, {
					...t
				})
			});
			class re extends o.a.Component {
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
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || te, this.showMorePosts = () => {
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
						return o.a.createElement(F, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, o.a.createElement(X, {
							className: Object(j.a)($.a.smallPost, r),
							containerOnClick: s,
							postId: e.id,
							redditStyle: i,
							showSubredditName: Object(x.a)(Object(P.g)(t)),
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
						u = Object(L.a)(c),
						p = Object(L.b)(c),
						b = u || p,
						h = r.slice(l * m, (l + 1) * m),
						[g, ...f] = h,
						k = b ? h.slice(0, se) : f.slice(0, se),
						v = b ? h.slice(se) : f.slice(se);
					return o.a.createElement("div", {
						className: Object(j.a)($.a.container, t, {
							[$.a.redditStyle]: a
						})
					}, !b && o.a.createElement(F, {
						onPostVisible: i,
						postId: g.id
					}, o.a.createElement(T.a, {
						postId: g.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(x.a)(Object(P.g)(s)),
						trendingPost: g
					})), k.map(this.renderSmallPost), e, v.map(this.renderSmallPost), d && o.a.createElement(S.o, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, n || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ae = Object(d.b)(ie, e => ({
					openPost: t => e(Object(I.a)(t.permalink))
				}))(re),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				de = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ce = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				me = s("./src/reddit/selectors/discoveryUnit.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = s.n(pe);
			const he = 10,
				ge = Object(c.a)((e, t) => t.subredditName, e => Object(w.a)(e, l.U.TOP, {
					t: l.cc.WEEK
				})),
				xe = Object(c.c)({
					discoveryUnit: e => Object(me.c)(e, {
						unitName: le.k
					}),
					listingKey: ge,
					posts: (e, t) => {
						const s = ge(e, t);
						return Object(R.N)(e, {
							listingKey: s
						})
					},
					subreddit: ue.z
				});
			class fe extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(ce.h)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(ce.x)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(ce.C)(t, e, void 0, s))
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
						l = r.length > he;
					return o.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: n.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(ae, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: i,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var ke = Object(d.b)(xe, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(N.r)({
						sort: l.U.TOP,
						subredditName: t,
						t: l.cc.WEEK
					}))
				}))(Object(oe.c)(fe)),
				ve = s("./src/config.ts"),
				Ee = s("./src/lib/localStorageAvailable/index.ts"),
				_e = s("./src/reddit/actions/modal.ts"),
				ye = s("./src/higherOrderComponents/asModal/index.tsx"),
				Ce = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Oe = s("./src/reddit/controls/TextButton/index.tsx"),
				we = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Ne
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class je extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(Ce.e, null, o.a.createElement(Ce.i, null, o.a.createElement(we.a, null, o.a.createElement(Ce.q, null, Ne._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), o.a.createElement(Oe.a, {
						onClick: e.toggleModal
					}, o.a.createElement(Ce.b, null)))), o.a.createElement(Ce.l, null, o.a.createElement(Ce.p, null, Ne._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), o.a.createElement(Ce.g, null, o.a.createElement(Ce.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, Ne._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(Ce.r, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, Ne._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var Te = Object(ye.a)(je),
				Se = s("./src/reddit/components/IdCard/Banner.tsx"),
				Pe = s("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Ie = s("./src/reddit/constants/blade.ts"),
				Le = s("./src/reddit/controls/InternalLink/index.tsx"),
				Re = s("./src/reddit/helpers/localStorage/index.ts"),
				Me = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				Be = s("./src/reddit/icons/fonts/index.tsx"),
				We = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				Fe = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				De = s("./src/reddit/selectors/activeModalId.ts"),
				He = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ae = s("./src/reddit/selectors/structuredStyles.ts"),
				Ue = s("./src/reddit/components/IdCard/index.m.less"),
				Ve = s.n(Ue),
				ze = s("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				Ge = s.n(ze);
			const qe = "mod_onboarding_modal",
				Je = "mod_onboarding_widget",
				Ke = Object(c.a)(De.a, (e, t) => Object(He.b)(Fe.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(Ae.k)(e, {
					subredditId: t.subredditId
				}), (e, t, s) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					modHasEditedBanner: !s || !!(s.bannerBackgroundImage || s.bannerHeight || s.bannerPositionedImage || s.bannerBackgroundColor),
					modHasEditedColors: !s || !!(s.primaryColor || s.highlightColor || s.backgroundColor || s.backgroundImage),
					modHasEditedIcon: !s || (!!s.communityIcon || !!s.bannerShowCommunityIcon)
				}));
			class Ye extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(Re.Gb)(Je, !0, this.props.subredditId), this.props.sendEvent(Object(Me.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(Me.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(Me.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(Me.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(Me.d)("styling_generic_link"))
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						hasModeratorPermissions: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: n,
						subredditId: i
					} = this.props, r = e && !(t && s && n) && (!Object(Ee.a)() || !Object(Re.D)(Je, i));
					r !== this.state.visible && (this.setState({
						visible: r
					}), r && this.props.sendEvent(Object(Me.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: i,
						subredditName: r,
						toggleCloseMenuModal: a
					} = this.props;
					return this.state.visible ? o.a.createElement(de.a, {
						className: Object(j.a)(Ge.a.container, this.props.className)
					}, o.a.createElement(Se.a, {
						bannerBackgroundImage: `${ve.a.assetPath}/img/id-cards/mod-onboarding@2x.png`
					}), o.a.createElement(Be.a, {
						name: "close",
						className: Ge.a.closeIcon,
						onClick: a
					}), Object(Pe.a)({
						titleText: n.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(f.b)(`url('${ve.a.assetPath}/img/id-cards/snoo-artist@2x.png')`)
					}), o.a.createElement("div", {
						className: Object(j.a)(Ve.a.Description, Ge.a.description)
					}, n.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [n.fbt._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: Ie.e.exportImport,
						className: Ge.a.modHelpLink,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(Le.a, {
						to: `/r/${r}?styling=true&route=${Ie.c.NameAndIcon}`,
						className: Ge.a.link,
						onClick: this.customizeIcon
					}, i ? o.a.createElement(We.a, {
						className: Ge.a.checked
					}) : o.a.createElement(We.a, {
						className: Ge.a.unchecked
					}), n.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), o.a.createElement(Le.a, {
						to: `/r/${r}?styling=true&route=${Ie.c.Banner}`,
						className: Ge.a.link,
						onClick: this.customizeBannerImage
					}, t ? o.a.createElement(We.a, {
						className: Ge.a.checked
					}) : o.a.createElement(We.a, {
						className: Ge.a.unchecked
					}), n.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), o.a.createElement(Le.a, {
						to: `/r/${r}?styling=true&route=${Ie.c.Global}`,
						className: Ge.a.link,
						onClick: this.customizeThemeColors
					}, s ? o.a.createElement(We.a, {
						className: Ge.a.checked
					}) : o.a.createElement(We.a, {
						className: Ge.a.unchecked
					}), n.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), o.a.createElement(S.n, {
						to: `/r/${r}?styling=true`,
						className: Ge.a.button,
						onClick: this.customizeAppearance
					}, n.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), o.a.createElement("div", {
						className: Ge.a.subtext
					}, n.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === qe && o.a.createElement(Te, {
						withOverlay: !0,
						toggleModal: a,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Ze = Object(d.b)(Ke, (e, {
					subredditId: t,
					subredditName: s
				}) => ({
					toggleCloseMenuModal: () => e(Object(_e.i)(qe))
				}))(Object(oe.c)(Ye)),
				Xe = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				Qe = s("./src/reddit/constants/tracking.ts"),
				$e = s("./src/reddit/selectors/seo/linksModule.ts"),
				et = s("./src/reddit/selectors/telemetry.ts"),
				tt = s("./src/telemetry/models/Subreddit.ts");
			const st = e => t => ({
					...et.defaults(t),
					action: Qe.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				nt = e => t => s => ({
					...et.defaults(s),
					action: Qe.c.CLICK,
					noun: Object(tt.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				it = Object(c.c)({
					communities: $e.c
				});
			var rt = Object(d.b)(it)(e => {
					const t = Object(oe.b)();
					return e.communities && e.communities.length ? o.a.createElement(C.a, null, o.a.createElement(Xe.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: st,
						getSubscribeEventFactoryHandler: nt,
						sendEvent: t,
						title: n.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				at = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				ot = s("./src/reddit/featureFlags/index.ts"),
				dt = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				ct = s("./src/reddit/models/Widgets/index.ts"),
				lt = s("./src/reddit/selectors/communityFlairs.ts"),
				mt = s("./src/reddit/selectors/listings.ts"),
				ut = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				pt = s.n(ut);
			const bt = 250,
				ht = 270,
				gt = m.a.wrapped(y.a, "SidebarContainer", pt.a),
				xt = Object(c.c)({
					apiError: mt.c,
					apiPending: mt.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(lt.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(lt.c)(e, t),
					showGovernance: ot.d.spPoints,
					showLeaderboard: ot.d.spLeaderboard,
					showPredictionsLeaderboard: (e, {
						subredditId: t
					}) => Object(ue.M)(e, {
						subredditId: t
					}) && !Object(ue.N)(e, {
						subredditId: t
					}),
					widgets: ue.r
				}),
				ft = Object(d.b)(xt);
			class kt extends a.Component {
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
							kind: "community-list",
							shortName: n.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: s
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: ct.d.Cloud,
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
						showGovernance: s,
						showLeaderboard: n,
						showPredictionsLeaderboard: i,
						subredditId: r,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					let c = 0;
					const m = Object(L.a)(d),
						x = Object(L.b)(d),
						f = Object(L.c)(d),
						y = m || x;
					let w, N;
					!!this.getPostFlairWidget() ? w = this.props.widgets : (w = this.getCommunityWidgets(), N = this.makeFlairFilterWidget());
					const j = this.makeRelatedCommunitiesWidget(m, x),
						T = !m,
						S = x,
						P = o.a.createElement(_.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: c++,
							position: dt.a.FIRST,
							sizes: l.h
						});
					return o.a.createElement(gt, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, k(t) && o.a.createElement(g.a, {
						listingName: t
					}), o.a.createElement(p.a, {
						cardClassName: pt.a.card,
						subredditId: r
					}), o.a.createElement(E.a, {
						subredditId: r
					}), i && o.a.createElement(u.a, {
						subredditId: r
					}), y && o.a.createElement(C.a, null, o.a.createElement(ke, {
						subredditName: a,
						topPostsVariant: d
					}, o.a.createElement("div", {
						className: pt.a.inFeedAd
					}, P))), y && j && o.a.createElement(C.a, null, o.a.createElement(at.a, {
						subredditName: a,
						truncateThreshold: ht,
						widget: j
					})), S && w.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(C.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(at.a, {
							subredditName: a,
							truncateThreshold: bt,
							widget: e
						}))
					}), o.a.createElement(Ze, {
						subredditId: r,
						subredditName: a
					}), s && o.a.createElement(b.a, {
						className: pt.a.card,
						subredditId: r
					}), N && o.a.createElement(C.a, null, o.a.createElement(at.a, {
						subredditName: a,
						widget: N
					})), n && o.a.createElement(h.a, {
						className: pt.a.card,
						subredditId: r,
						uniqueId: r
					}), o.a.createElement(v.g, {
						subredditId: r
					}), !y && P, o.a.createElement(rt, {
						subredditId: r
					}), T && !S && w.map((e, t) => {
						const s = "community-list" === e.kind;
						return o.a.createElement(C.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(at.a, {
							subredditName: a,
							truncateThreshold: f && s ? ht : f ? bt : void 0,
							widget: e
						}))
					}), o.a.createElement(O.a, {
						adComponent: o.a.createElement(_.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: c++,
							position: dt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = ft(kt)
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const i = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = ({
					type: e,
					key: t
				}) => r[i({
					type: e
				})][t]()
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
				return w
			})), s.d(t, "a", (function() {
				return j
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
			var p = Object(a.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				y = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				C = s.n(y);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => r.a.createElement(b.a, {
					className: Object(c.a)(C.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: C.a.container
				}, e.isLoading ? r.a.createElement(x.a, {
					className: C.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: C.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(j, O({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(g.q, {
					className: C.a.bottomButton,
					kind: g.a.Button,
					priority: g.b.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				N = Object(d.c)({
					hideNSFWPref: E.B,
					nightmode: E.W
				}),
				j = Object(a.b)(N)(e => r.a.createElement("div", {
					className: Object(c.a)(C.a.communityItemContainer, {
						[C.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(k.a, {
					className: C.a.communityItemExpandCenter,
					widthRight: h.t
				}, r.a.createElement("div", {
					className: C.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: C.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(f.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(C.a.defaultCommunityIcon, {
						[C.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: C.a.communityDescriptionContainer
				}, r.a.createElement(o.a, {
					className: C.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(_.b)(e.name, e.type),
					to: Object(_.a)(e.name, e.type)
				}, Object(_.b)(e.name, e.type)), r.a.createElement("div", {
					className: C.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: C.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					className: C.a.nsfwFlair,
					flair: {
						type: v.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(x.a, {
					className: Object(c.a)(C.a.communityCta, C.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(g.q, {
					className: Object(c.a)(C.a.communityCta, {
						[C.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(p, {
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
					className: C.a.communityDescription
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
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
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
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2e42jHFUxTCKhK9ZV7rkYM",
				unchecked: "KghweVAiFiX0RI_syl89Q",
				checked: "g4y6sLtk5FcL7BGU4ySVF",
				checkedFadeIn: "_3iW8CR-_Svhfa-LJLVcw2F",
				subtext: "_1STduBQ65V-3ECZ3WRoEKV",
				section: "_23svPjrTufAABoINCKRN_7",
				container: "_2YGvHlE11080fRAzC4onab",
				button: "_2F46jVXxeuK0SKM9TO-8pY",
				closeIcon: "_3mATOvmc_Q9pFcfcBXjFol",
				description: "_3js_prVH0h73q85Oa9P7lN"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(k.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(k.a)(e).widgetColors.sidebarWidgetHeaderColor,
				_ = e => {
					const t = v(e);
					return Object(f.f)(t)
				},
				y = e => {
					const t = E(e);
					return Object(f.f)(t)
				};
			var C = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = s.n(C);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = Object(m.u)(), j = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.n)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						i = Object(x.W)(e);
					return n || i
				},
				nigtmode: x.W,
				subredditId: m.n,
				topPostVariant: h.d
			}));
			class T extends i.a.Component {
				constructor() {
					super(...arguments), this.contentRef = i.a.createRef(), this.state = {
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = _(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = y(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: a,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, p = s ? O.a.widgetContentOnly : O.a.widgetContent, b = !n && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, g = b ? this.getWidgetHeaderStyles() : {};
					return i.a.createElement("div", {
						className: Object(o.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: n,
							[O.a.clickable]: !!a,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: h
					}, d && i.a.createElement("div", {
						className: O.a.widgetHeader,
						style: g
					}, i.a.createElement("div", {
						className: Object(o.a)(O.a.widgetTitle, l)
					}, i.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), i.a.createElement("div", {
						className: Object(o.a)(p, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && i.a.createElement(u.o, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, w._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = N(j(Object(d.a)(Object(l.c)(T))))
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
		"./src/reddit/components/Wiki/RevisionsHistory/index.m.less": function(e, t, s) {
			e.exports = {
				container: "ce8AyHVPoXK2ammlk4dfU",
				mModHub: "lPFQHGq7ZJKxOjbVRcUdL",
				content: "_1VN7jDMwPO-3f4G4d4Uy64",
				pageTitle: "V22-y0iI914ak74zxkV1a",
				pageTitleText: "_3BCuy1seZbIJ-Vw-iWJCTG",
				compareBar: "sT-SyQpGKrzgwl4yACquP",
				compareButton: "_1Mw_9r88mDyglkMA5Pp5Ms",
				table: "_2Lg_uTkZH6amYWXVr49IWM",
				colHeaderCheckbox: "_3qPtBJYDKp7pfTfAUKAzlI",
				colHeaderTime: "_3pBaYFkqpMeop0hSx3HG-b",
				colHeaderPage: "_1n5DuAwDmS92cPgdXSZ0VO",
				colHeaderUser: "_1hHgxs8vZyaUp-aaXVfveR",
				colHeaderReason: "_2eOOtPq7Dwb8YjxxasuXgN",
				colHeaderActions: "_2KyULn42zdubuWRRe3ofMX",
				row: "_1n6bCdFzFTcMb8nbcUVbiz",
				mHidden: "_3MGUJlnTJODLOgfuo6ps3N",
				revertButton: "r_5uSGcfTRKw2BrjrMAR6",
				cellPage: "RApPXNo2Wc734CFMKUP9W",
				wikiPageLink: "_3CiqT117augUjPWWrx2TW0",
				usernameLink: "RxzK_7t17mU6YV5lKPTX-",
				cellReason: "_181zFMPLOrQCybR7mpAjDS",
				reasonTextWrapper: "_2k1ikYAtkuItWLnM2v1FoJ",
				mExpanded: "_2Ek11A--oU1fiuOX4icZFo",
				reasonText: "_3rkoZiwX9xBWbnUj8KdDg_",
				moreButton: "MlwbIZHA-n0l6pJotytjr",
				buttons: "_2NPnlVPBDNk-5rZwESZ9B9",
				viewButton: "_1QQV3g6raY4DMIZmGWf_EB",
				active: "Jkkj0xIEOc5nizoeloGlN",
				cellCheckbox: "_2jHe0kuo-s2zjj9AFEoKIR",
				checkbox: "_2z1fkA5gXEWTIixh5mc5Mu",
				loadingRow: "_1twsCmeo_Rv87GnJLkvjOG",
				loadingShimmer: "_2OTytxS0mfmxAGAw4qKI6K",
				mShowActionButtons: "_3ZOwuRsjzzqragH4DDY3Au"
			}
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return $
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				m = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				u = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				x = s("./src/lib/addQueryParams/index.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/helpers/wiki/wikiRevision.ts");

			function v(e, t) {
				const {
					revision: s,
					revisionToCompare: n
				} = t;
				if (!s && !n) return e;
				const i = {};
				return s && (i[f.A] = Object(k.b)(s)), n && (i[f.B] = Object(k.b)(n)), Object(x.a)(e, i)
			}
			var E = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				_ = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/selectors/subredditWiki.ts"),
				N = s("./node_modules/lodash/times.js"),
				j = s.n(N),
				T = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				S = s("./src/reddit/components/Wiki/RevisionsHistory/index.m.less"),
				P = s.n(S);
			var I = () => {
					const e = i.createElement("div", {
						className: Object(d.a)(P.a.loadingShimmer, Object(T.b)({
							isLoading: !0
						}))
					});
					return i.createElement("div", null, j()(4, t => i.createElement("div", {
						key: t,
						className: P.a.loadingRow
					}, e)))
				},
				L = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			class R extends r.a.Component {
				constructor() {
					super(...arguments), this.isIntersecting = !1, this.handleChange = e => {
						this.isIntersecting = e.isIntersecting, this.triggerLoadMoreIfNeeded()
					}, this.triggerLoadMoreIfNeeded = () => {
						const {
							isLoading: e,
							hasError: t
						} = this.props;
						!this.isIntersecting || e || t || this.props.onLoadMore()
					}
				}
				componentDidMount() {
					this.triggerLoadMoreIfNeeded()
				}
				componentDidUpdate() {
					this.triggerLoadMoreIfNeeded()
				}
				render() {
					return r.a.createElement(L.a, {
						onChange: this.handleChange
					}, r.a.createElement("div", null))
				}
			}
			var M = s("./node_modules/lodash/noop.js"),
				B = s.n(M),
				W = s("./src/reddit/components/AuthorLink/index.tsx"),
				F = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				D = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				H = s("./src/reddit/controls/Checkbox/index.tsx"),
				A = s("./src/reddit/controls/InternalLink/index.tsx"),
				U = s("./node_modules/lodash/forEach.js"),
				V = s.n(U),
				z = s("./src/lib/fastdom/index.ts");

			function G(e) {
				z.a.read(() => {
					V()(e, e => {
						if (e instanceof HTMLElement && e.parentElement) {
							const t = e.offsetWidth < e.scrollWidth,
								s = e.parentElement,
								n = "true" === s.dataset.textOverflow;
							t !== n && z.a.write(() => {
								s.dataset.textOverflow = String(t)
							})
						}
					})
				})
			}
			const q = Object(o.c)({
				revision: w.n
			});
			class J extends r.a.Component {
				constructor() {
					super(...arguments), this.reasonElementRef = r.a.createRef(), this.state = {}, this.onToggleHiddenClick = async () => {
						const {
							revision: e,
							revisionId: t,
							subredditName: s
						} = this.props, n = e.isHidden;
						this.props.sendEvent(Object(g.l)(n)), this.setState({
							isHideRequestPending: !0
						}), await this.props.toggleIsHidden({
							revisionId: t,
							subredditName: s,
							wikiPageName: e.page.name
						}), this.setState({
							isHideRequestPending: !1
						})
					}, this.onRevertClick = () => {
						this.props.onRevertClick(this.props.revision)
					}, this.onShowMoreButtonClick = () => {
						this.setState({
							expanded: !0
						})
					}, this.onCheckboxToggle = () => {
						this.props.onCheckboxToggle(this.props.revisionId)
					}, this.onViewClick = () => {
						this.props.sendEvent(g.q)
					}
				}
				componentDidMount() {
					this.reasonElementRef.current && G([this.reasonElementRef.current])
				}
				render() {
					const {
						hasWikiModPerms: e,
						isCheckboxSelected: t,
						isModHub: s,
						isRecentRevisionMode: i,
						revision: a,
						subredditName: o
					} = this.props, c = a.page.name, l = a.isHidden, {
						expanded: m
					} = this.state, u = a.authorInfo && a.authorInfo.name, p = Object(_.a)({
						subredditName: o,
						wikiPageName: c
					}, s), b = v(p, {
						revision: a.id
					}), g = !i && e, x = c.split("/").slice(-1)[0];
					return r.a.createElement("tr", {
						className: Object(d.a)(P.a.row, l ? P.a.mHidden : null)
					}, !i && r.a.createElement("td", {
						className: P.a.cellCheckbox
					}, r.a.createElement(H.a, {
						className: P.a.checkbox,
						isCheckboxSelected: t,
						toggleCheckbox: this.onCheckboxToggle
					})), r.a.createElement("td", {
						className: P.a.cellTime
					}, Object(D.b)(a)), i && r.a.createElement("td", {
						className: P.a.cellPage
					}, r.a.createElement(A.a, {
						className: P.a.wikiPageLink,
						title: `/${c}`,
						to: p
					}, x)), r.a.createElement("td", {
						className: P.a.cellUser
					}, u && r.a.createElement(F.a, {
						sendHoverCardEvent: B.a,
						tooltipId: `revision-${a.id}`,
						user: u
					}, r.a.createElement(W.a, {
						author: u,
						className: P.a.usernameLink
					}, u))), r.a.createElement("td", {
						className: P.a.cellReason
					}, r.a.createElement("div", {
						className: Object(d.a)(P.a.reasonTextWrapper, m ? P.a.mExpanded : null)
					}, r.a.createElement("div", {
						ref: this.reasonElementRef,
						className: P.a.reasonText
					}, a.reason), !m && r.a.createElement(h.g, {
						className: P.a.moreButton,
						onClick: this.onShowMoreButtonClick
					}, n.fbt._("more", null, {
						hk: "2IGYPS"
					})))), r.a.createElement("td", null, r.a.createElement("div", {
						className: P.a.buttons
					}, r.a.createElement(h.p, {
						className: P.a.viewButton,
						onClick: this.onViewClick,
						to: b
					}, n.fbt._("View", null, {
						hk: "4imNnh"
					})), g && r.a.createElement(r.a.Fragment, null, r.a.createElement(h.o, {
						className: P.a.hideShowButton,
						disabled: this.state.isHideRequestPending,
						onClick: this.onToggleHiddenClick
					}, l ? n.fbt._("Show", null, {
						hk: "3YKyhU"
					}) : n.fbt._("Hide", null, {
						hk: "30nwHP"
					})), r.a.createElement(h.o, {
						className: P.a.revertButton,
						onClick: this.onRevertClick
					}, n.fbt._("Revert", null, {
						hk: "5mbFS"
					}))))))
				}
			}
			var K = Object(a.b)(q, e => ({
				toggleIsHidden: t => e(Object(l.b)(t))
			}))(J);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = Object(o.c)({
				hasError: w.o,
				hasWikiModPerms: (e, t) => {
					const s = Object(O.z)(e, t);
					return !!s && Object(C.i)(e, {
						subredditId: s.id
					})
				},
				isPending: w.q,
				isRevertConfirmationModalOpen: Object(y.b)("wiki-revert-confirmation"),
				listingInfo: w.p
			});
			class X extends r.a.Component {
				constructor() {
					super(...arguments), this.containerRef = r.a.createRef(), this.state = {
						selectedRevisions: []
					}, this.onRevertConfirmed = () => {
						const {
							subredditName: e
						} = this.props, {
							revertRevision: t
						} = this.state;
						t && (this.props.sendEvent(g.k), this.props.onRevertToRevision({
							revisionId: t.id,
							subredditName: e,
							wikiPageName: t.page.name
						}))
					}, this.onCompareClick = () => {
						this.props.sendEvent(g.d)
					}, this.onRevertButtonClick = e => {
						this.setState({
							revertRevision: e
						}), this.props.toggleRevetConfirmationModal()
					}, this.handleResize = () => {
						this.containerRef.current && function(e) {
							G(e.getElementsByClassName(P.a.reasonText))
						}(this.containerRef.current)
					}, this.onLoadMore = () => {
						this.props.onLoadMoreRevisions()
					}, this.onCheckboxToggle = e => {
						const {
							listingInfo: t
						} = this.props, s = t && t.ids || [];
						this.setState(t => {
							let n = t.selectedRevisions;
							return 2 === (n = n.includes(e) ? n.filter(t => t !== e) : n.length < 2 ? [...n, e] : [e]).length && s.indexOf(n[0]) < s.indexOf(n[1]) && n.reverse(), {
								selectedRevisions: n
							}
						})
					}, this.renderRowItem = (e, t) => {
						const {
							hasWikiModPerms: s,
							subredditName: n
						} = this.props, {
							selectedRevisions: i
						} = this.state;
						return r.a.createElement(K, {
							key: e,
							hasWikiModPerms: s,
							isCheckboxSelected: i.includes(e),
							isModHub: this.props.isModHub,
							isRecentRevisionMode: this.props.isRecentRevisionsMode,
							onCheckboxToggle: this.onCheckboxToggle,
							onRevertClick: this.onRevertButtonClick,
							revisionId: e,
							sendEvent: this.props.sendEvent,
							subredditName: n
						})
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						hasError: e,
						hasWikiModPerms: t,
						isModHub: s,
						isPending: i,
						isRecentRevisionsMode: a,
						isRevertConfirmationModalOpen: o,
						listingInfo: c,
						subredditName: l,
						wikiPageName: p
					} = this.props, {
						selectedRevisions: g
					} = this.state, x = c && c.ids || [], f = c && c.pageInfo.hasNextPage;
					let k = "",
						E = "#";
					p && (k = Object(_.a)({
						subredditName: l,
						wikiPageName: p
					}, s), 2 === g.length && (E = v(k, {
						revision: g[0],
						revisionToCompare: g[1]
					})));
					const y = !a && t;
					return r.a.createElement("div", {
						ref: this.containerRef,
						className: Object(d.a)(P.a.container, {
							[P.a.mModHub]: s,
							[P.a.mShowActionButtons]: y
						})
					}, r.a.createElement(b.a, {
						buttonText: a ? void 0 : n.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: k,
						className: P.a.pageTitle,
						title: r.a.createElement("span", {
							className: P.a.pageTitleText
						}, a ? n.fbt._("Recent revisions", null, {
							hk: "VsZfq"
						}) : n.fbt._("Page history for {pageName}", [n.fbt._param("pageName", `/${p}`)], {
							hk: "y2LqH"
						}))
					}), r.a.createElement("div", {
						className: P.a.content
					}, !a && r.a.createElement("div", {
						className: P.a.compareBar
					}, r.a.createElement(h.p, {
						className: P.a.compareButton,
						disabled: g.length < 2,
						onClick: this.onCompareClick,
						to: E
					}, n.fbt._("Compare", null, {
						hk: "3grtKa"
					})), n.fbt._("{selectedCnt}/2 selected to compare", [n.fbt._param("selectedCnt", g.length.toString())], {
						hk: "1PfMOM"
					})), r.a.createElement("table", {
						className: P.a.table
					}, r.a.createElement("thead", null, r.a.createElement("tr", null, !a && r.a.createElement("th", {
						className: P.a.colHeaderCheckbox
					}), r.a.createElement("th", {
						className: P.a.colHeaderTime
					}, n.fbt._("time", null, {
						hk: "231ZTq"
					})), a && r.a.createElement("th", {
						className: P.a.colHeaderPage
					}, n.fbt._("Wiki page", null, {
						hk: "2CzzvU"
					})), r.a.createElement("th", {
						className: P.a.colHeaderUser
					}, n.fbt._("Username", null, {
						hk: "3dJxeH"
					})), r.a.createElement("th", {
						className: P.a.colHeaderReason
					}, n.fbt._("Revision Reason", null, {
						hk: "3Z0slk"
					})), r.a.createElement("th", {
						className: P.a.colHeaderActions
					}, y && r.a.createElement(r.a.Fragment, null, n.fbt._("Actions", null, {
						hk: "1V50p1"
					}), r.a.createElement(u.a, null, n.fbt._("View: View current version", null, {
						hk: "1Wp1Qa"
					}), r.a.createElement("br", null), n.fbt._("Hide: Hide revision from page history", null, {
						hk: "1G574c"
					}), r.a.createElement("br", null), n.fbt._("Revert: Revert page to an older version", null, {
						hk: "2IMILE"
					})))))), r.a.createElement("tbody", {
						className: P.a.tableBody
					}, x.map(this.renderRowItem))), i && r.a.createElement(I, null), f && r.a.createElement(R, {
						hasError: e,
						isLoading: i,
						onLoadMore: this.onLoadMore
					})), o && r.a.createElement(m.a, {
						actionText: n.fbt._("Revert", null, {
							hk: "qQOSa"
						}),
						headerText: n.fbt._("Revert wiki page", null, {
							hk: "2ZNWTL"
						}),
						modalText: n.fbt._("Are you sure you wish to change this wiki page to a previously saved version?", null, {
							hk: "4yhcAG"
						}),
						onConfirm: this.onRevertConfirmed,
						toggleModal: this.props.toggleRevetConfirmationModal,
						withOverlay: !0
					}))
				}
			}
			const Q = Object(a.b)(Z, (e, t) => ({
				toggleRevetConfirmationModal: () => e(Object(c.i)("wiki-revert-confirmation")),
				onRevertToRevision: t => e(Object(l.a)(t)),
				onLoadMoreRevisions: () => e(Object(l.c)({
					...t,
					canLoadMore: !0,
					canShowFailToast: !0,
					isRecent: !!t.isRecentRevisionsMode
				}))
			}))(Object(p.c)(X));

			function $(e) {
				const t = !!e.isRecentRevisionsMode,
					s = Object(E.a)({
						...e,
						isRecent: t
					});
				return r.a.createElement(Q, Y({
					key: s,
					listingKey: s
				}, e))
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less": function(e, t, s) {
			e.exports = {
				container: "kuIrk7ySqHYuv5Gt8MVk7",
				automodContent: "_1FI4zcF0t1ECf8oc18uKd0",
				automodInfoBanner: "_2cLJCh1PnBUPaTO1HveGgo",
				wikiHtmlContent: "_1r4JJnDJUTKPWFmsi-Is_u",
				revisionInfo: "_3n6jRoJzvGVG7cvZDrvW1G"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2knUS3S97xMYycQVxOi0Yd",
				link: "_2uut3Ijozr0WkSh-oLVTkt"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3kIjxjzGVq5UfR6Bjiovd",
				hideIcon: "_2G1CaoG-VN3IjmyXMjpIfp"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				m = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				p = s("./src/reddit/constants/wiki.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				g = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				x = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				k = s("./src/reddit/selectors/subredditWiki.ts"),
				v = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				E = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				_ = s("./src/telemetry/models/Outbound.ts"),
				y = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = s("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				O = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				w = s("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				N = s.n(w);
			const j = e => {
				const {
					item: t,
					subredditName: s,
					isModHub: n
				} = e, r = t.isPagePresent && Object(O.a)({
					subredditName: s,
					wikiPageName: t.path
				}, n);
				return i.createElement("li", null, r ? i.createElement(y.a, {
					className: N.a.link,
					to: r
				}, t.name) : i.createElement("span", null, t.name), !!t.children.length && i.createElement("ul", null, t.children.map(e => i.createElement(j, {
					isModHub: n,
					item: e,
					key: e.path,
					subredditName: s
				}))))
			};
			var T = e => {
					const {
						isModHub: t,
						subredditName: s,
						wikiDirectory: r
					} = e, a = Object(C.a)(r.pageTree || []);
					return i.createElement("div", {
						className: N.a.container
					}, i.createElement("h1", null, n.fbt._("Viewing pages for {subredditName}", [n.fbt._param("subredditName", s)], {
						hk: "1f0dHX"
					})), i.createElement("h2", null, n.fbt._("Below is a list of pages in this wiki visible to you in this subreddit.", null, {
						hk: "3ywypD"
					})), i.createElement("ul", null, a.map(e => i.createElement(j, {
						isModHub: t,
						item: e,
						key: e.path,
						subredditName: s
					}))))
				},
				S = s("./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less"),
				P = s.n(S);
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function L(e) {
				const {
					className: t,
					isModHub: s,
					showRevisionInfo: n,
					subredditName: i,
					wikiDirectory: a,
					wikiPage: o,
					wikiPageName: c
				} = e;
				let l = null;
				return a && c === p.j ? l = r.a.createElement(T, {
					isModHub: s,
					subredditName: i,
					wikiDirectory: a
				}) : o && o.content && c === p.h ? l = r.a.createElement("div", {
					className: P.a.automodContent
				}, o.content.markdown) : o && o.content && (l = r.a.createElement(v.a, {
					className: P.a.wikiHtmlContent,
					html: o.content.html,
					sourceElement: _.SourceElement.Wiki
				})), r.a.createElement("div", {
					className: Object(d.a)(t, P.a.container)
				}, c === p.h && r.a.createElement("div", {
					className: P.a.automodInfoBanner
				}, I._("This page is used to configure AutoModerator for the subreddit, please see the {=full documentation} for information", [I._param("=full documentation", r.a.createElement("a", {
					href: "/wiki/automoderator/full-documentation"
				}, I._("full documentation", null, {
					hk: "1iIGFO"
				})))], {
					hk: "C2ew1"
				})), l, n && o && o.revision && r.a.createElement("div", {
					className: P.a.revisionInfo
				}, r.a.createElement(E.a, {
					showTimeAgo: !0,
					isLastRevision: !0,
					revision: o.revision
				})))
			}
			var R = s("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				M = s.n(R);
			const B = Object(a.b)(() => Object(o.c)({
					pending: k.a,
					wikiDirectory: k.b,
					wikiPage: k.c
				})),
				W = Object(b.u)();
			class F extends i.Component {
				constructor() {
					super(...arguments), this.onEditButtonClick = () => {
						this.props.sendEvent(Object(h.f)())
					}, this.isListingPage = () => this.props.wikiPageName === p.j, this.reloadPage = () => {
						window.location.reload()
					}
				}
				componentDidMount() {
					this.scrollToHash()
				}
				componentDidUpdate(e) {
					const t = this.props.pageLayer !== e.pageLayer,
						s = this.props.wikiPage !== e.wikiPage;
					(t || s) && this.scrollToHash()
				}
				scrollToHash() {
					const e = window.location.hash.slice(1),
						t = e ? document.getElementById(e) : null;
					if (t) {
						let e = u.f + 10;
						this.props.isModHub && (e += u.j + u.k);
						const s = window.scrollY + t.getBoundingClientRect().top - e;
						window.scrollTo(0, s)
					}
				}
				getWikiPageStatus() {
					const {
						wikiDirectory: e,
						wikiPage: t
					} = this.props;
					return this.isListingPage() ? e && e.status : t && t.status
				}
				renderPageContents() {
					const {
						isModHub: e = !1,
						pending: t,
						showRevisionInfo: s,
						subredditName: r,
						wikiDirectory: a,
						wikiPage: o,
						wikiPageName: d
					} = this.props, c = this.getWikiPageStatus(), u = d === p.i, b = this.props.isModHub ? `/r/${this.props.subredditName}/about/wiki` : `/r/${this.props.subredditName}/wiki`, h = `${b}/index`, k = u ? void 0 : n.fbt._("Wiki home", null, {
						hk: "1E1oVk"
					});
					if (t || !c) return i.createElement(m.a, {
						showTitle: !0
					});
					if (c === f.b.Unknown || c === f.b.PageNotCreated) {
						if (Object(g.b)(d)) return i.createElement(l.a, {
							buttonLink: h,
							buttonText: k,
							description: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "VYLjZ"
							}),
							title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
								hk: "33IIrL"
							})
						})
					}
					switch (c) {
						case f.b.Valid:
							return !(!o || !o.content || o.content.markdown) ? i.createElement(l.a, {
								buttonLink: `${b}/edit/${d}`,
								buttonText: n.fbt._("Edit page", null, {
									hk: "2I8ztD"
								}),
								description: n.fbt._("Edit it to add some content", null, {
									hk: "13lGpZ"
								}),
								title: n.fbt._("This page is empty", null, {
									hk: "r0I6D"
								})
							}) : i.createElement(L, {
								isModHub: e,
								showRevisionInfo: s,
								subredditName: r,
								wikiDirectory: a,
								wikiPage: o,
								wikiPageName: d
							});
						case f.b.PageNotCreated:
							return i.createElement(l.a, {
								buttonLink: `${b}/create/${d}`,
								buttonText: n.fbt._("Create page", null, {
									hk: "2JH7OE"
								}),
								description: n.fbt._("Create a wiki page from this URL", null, {
									hk: "NY4dz"
								}),
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
									hk: "33IIrL"
								})
							});
						case f.b.Unknown:
							return i.createElement(l.a, {
								buttonText: n.fbt._("Reload page", null, {
									hk: "1L70ii"
								}),
								onButtonClick: this.reloadPage,
								title: n.fbt._("An unknown error occurred", null, {
									hk: "3BhfEB"
								})
							});
						case f.b.RestrictedPage:
							return i.createElement(l.a, {
								buttonLink: h,
								buttonText: k,
								description: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
									hk: "VYLjZ"
								}),
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
									hk: "33IIrL"
								})
							});
						case f.b.MayNotView:
							return i.createElement(l.a, {
								buttonLink: h,
								buttonText: k,
								description: n.fbt._("The mods of this community have disabled this wiki page", null, {
									hk: "y3LOU"
								}),
								icon: i.createElement(x.a, {
									className: M.a.hideIcon
								}),
								title: n.fbt._("This page has been disabled", null, {
									hk: "1v13Nq"
								})
							});
						case f.b.WikiDisabled:
							return i.createElement(l.a, {
								buttonLink: `/r/${r}/`,
								buttonText: n.fbt._("Continue to r/{subredditName}", [n.fbt._param("subredditName", r)], {
									hk: "1oJQF7"
								}),
								description: n.fbt._("The mods of this community have disabled their wiki", null, {
									hk: "3qHJ8v"
								}),
								icon: i.createElement(x.a, {
									className: M.a.hideIcon
								}),
								title: n.fbt._("This wiki has been disabled", null, {
									hk: "3tfoag"
								})
							});
						case f.b.PageNotFound:
							return i.createElement(l.a, {
								buttonLink: h,
								buttonText: k,
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
									hk: "4o8Kt8"
								})
							});
						default:
							return null
					}
				}
				render() {
					const {
						className: e
					} = this.props;
					return i.createElement("div", {
						className: Object(d.a)(e, M.a.container)
					}, this.renderPageContents())
				}
			}
			t.a = W(B(Object(c.c)(F)))
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_38GE9wiaoDeBwytESxgurW",
				mModHub: "FOp_mrprAjmysKAwsxZhy",
				content: "_1FDDEmz6LhrlUvB4ha670Y",
				pageTitle: "_1M_2BWIe9pJyTSD3ZNzB2C",
				loadingPlaceholder: "_2eJGN5qzU3dzM10INVODCG",
				loadingSection: "_97ug2ZsHOzZBsGZ98Mqwl",
				diffWrapper: "_1EwbfNO_skwriCJJeOOslG"
			}
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				c = s("./src/reddit/constants/wiki.ts"),
				l = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				m = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				u = s("./src/reddit/selectors/subredditWiki.ts"),
				p = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				b = s("./src/reddit/components/Wiki/WikiPageDiff/index.m.less"),
				h = s.n(b);
			var g = () => i.createElement("div", {
				className: h.a.loadingPlaceholder
			}, i.createElement("div", {
				className: h.a.loadingSection
			}, i.createElement(p.a, {
				paragraphsCount: 1
			})), i.createElement("div", {
				className: h.a.loadingSection
			}, i.createElement(p.a, {
				paragraphsCount: 1
			})));
			const x = Object(a.c)({
					diffInfo: (e, t) => {
						const s = Object(l.a)(t);
						return Object(u.i)(e, {
							key: s
						})
					}
				}),
				f = Object(r.b)(x);
			class k extends i.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						subredditName: s,
						diffInfo: r,
						wikiPageName: a
					} = this.props;
					let l = null;
					l = !r || r.pending ? i.createElement(g, null) : r.error ? n.fbt._("Could not load comparison diff", null, {
						hk: "4mrAev"
					}) : i.createElement("div", {
						className: h.a.diffWrapper,
						dangerouslySetInnerHTML: {
							__html: r.htmlDiff || ""
						}
					});
					const u = Object(m.a)({
						subredditName: s,
						wikiPageName: a,
						wikiSubRoute: c.m.Revisions
					}, t);
					return i.createElement("div", {
						className: Object(o.a)(e, h.a.container, t ? h.a.mModHub : null)
					}, i.createElement(d.a, {
						buttonText: n.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: u,
						className: h.a.pageTitle,
						title: n.fbt._("Comparing revisions for /{pageName}", [n.fbt._param("pageName", a)], {
							hk: "DGV1Y"
						})
					}), i.createElement("div", {
						className: h.a.content
					}, l))
				}
			}
			t.a = f(k)
		},
		"./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1pXEnZ4uzz3OUpnXwRJCtz",
				modalHeader: "_3K-huH_Qa4D32ZPqAH9Ky",
				contentBlock: "N3HQ_fD9TZ7_Mk0iUMrkY",
				labelText: "_12y9PvK2L1LCL-P6PdoQ_B",
				reasonInput: "_3ZAhhe9gmKBwxW31xEmhKG",
				details: "_28OX1xAAmItegIE7yXUOxo",
				modalFooter: "NGYee0xeXDoBFshm7Ad-A",
				loadingIcon: "_2dRNmLURJShL28WViqaeCk"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.m.less": function(e, t, s) {
			e.exports = {
				topBar: "an_IeG33-UK9pts_JjqgQ",
				content: "_38SkvHzrhjQ7cSy7R0Lar1",
				resizableTextarea: "jtUB91J6tX7NTsovNabut",
				modHubTopBarExp: "BGubyqJMSlwQ45Xw5I-AT"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./node_modules/react-router-redux/es/index.js"),
				m = s("./src/lib/makeActionCreator/index.ts"),
				u = s("./src/reddit/actions/pages/subredditWiki/index.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/constants/wiki.ts"),
				h = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/makeApiRequest/index.ts"),
				x = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var k = e => Object(g.a)(Object(x.a)(e.context, [f.a]), {
					endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/edit`,
					method: h.hb.POST,
					data: {
						content: e.pageContent,
						page: e.wikiPageName,
						previous: e.previousRevision,
						reason: e.revisionReason
					}
				}),
				v = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				E = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				_ = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				C = s("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const O = Object(m.a)(C.a);
			var w = s("./src/reddit/components/BlockNavigation/index.tsx"),
				N = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				j = s("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				T = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				P = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				I = s("./src/reddit/contexts/NavbarExp.ts"),
				L = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				M = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				B = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				W = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/platform.ts"),
				D = s("./src/reddit/selectors/subredditWiki.ts"),
				H = s("./src/higherOrderComponents/asModal/index.tsx"),
				A = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				U = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				V = s("./src/reddit/controls/TextButton/index.tsx"),
				z = s("./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less"),
				G = s.n(z);
			class q extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						text: ""
					}, this.onSaveButtonClick = async () => {
						const {
							text: e
						} = this.state;
						this.props.onSave(e)
					}, this.onTextChange = e => {
						this.setState({
							text: e.target.value
						})
					}
				}
				render() {
					const {
						isPending: e
					} = this.props, {
						text: t
					} = this.state, s = b.g - t.length;
					return r.a.createElement("div", {
						className: G.a.container
					}, r.a.createElement(A.i, {
						className: G.a.modalHeader
					}, r.a.createElement(A.q, null, n.fbt._("Add a reason for your revision", null, {
						hk: "3ozq8e"
					})), r.a.createElement(V.a, {
						onClick: this.props.onCancel
					}, r.a.createElement(A.b, null))), r.a.createElement("div", {
						className: G.a.contentBlock
					}, r.a.createElement("label", null, r.a.createElement("span", {
						className: G.a.labelText
					}, n.fbt._("Revision reason", null, {
						hk: "W55mK"
					})), r.a.createElement("input", {
						autoFocus: !0,
						className: G.a.reasonInput,
						maxLength: b.g,
						onChange: this.onTextChange,
						placeholder: n.fbt._("Ex: Added source to appendix", null, {
							hk: "KB2dD"
						}),
						value: t
					})), r.a.createElement("div", {
						className: G.a.details
					}, n.fbt._({
						"*": "{number} characters left",
						_1: "1 character left"
					}, [n.fbt._plural(s, "number")], {
						hk: "1Ra9c8"
					}))), r.a.createElement(A.g, {
						className: G.a.modalFooter
					}, r.a.createElement(A.a, {
						onClick: this.props.onCancel
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(L.i, {
						onClick: this.onSaveButtonClick,
						disabled: e
					}, e ? r.a.createElement(U.a, {
						className: G.a.loadingIcon,
						sizePx: 10
					}) : n.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			var J = Object(H.a)(q),
				K = s("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				Y = s.n(K);
			const Z = "Discard-wiki-page-changes",
				X = "Add-wiki-revision-reason",
				Q = 2,
				$ = (e, t, s) => {
					const i = t.status,
						r = {
							[M.a.InvalidPageName]: n.fbt._("Page name is invalid", null, {
								hk: "3Ogzsc"
							}),
							[M.a.MaxLengthExceed]: n.fbt._("Page name must be shorter than {maxPageLen} characters", [n.fbt._param("maxPageLen", `${b.d}`)], {
								hk: "11HwWR"
							}),
							[M.a.PageAlreadyExists]: n.fbt._("Page with this name already exists", null, {
								hk: "3WRlhT"
							}),
							[M.a.RestrictedPageName]: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "BQtR2"
							})
						};
					if (e) {
						if (i === B.b.Valid) return r[M.a.PageAlreadyExists];
						if (i === B.b.PageNotFound) return n.fbt._("You do not have permission to create this page", null, {
							hk: "423aTf"
						});
						if (s) return r[s]
					} else if (i === B.b.Valid && !t.isRevisable) return n.fbt._("You do not have permission to edit this page", null, {
						hk: "1bUgsZ"
					})
				},
				ee = Object(o.c)({
					allowNavigationCallback: F.a,
					isRevisionReasonModalOpen: Object(W.b)(X),
					isSaveBeforeLeaveModalOpen: Object(W.b)(Z),
					wikiPage: D.c
				}),
				te = Object(a.b)(ee, (e, t) => ({
					onSaveWikiPage: (s, i) => e((({
						pageContent: e,
						wikiPageName: t,
						revisionReason: s,
						subredditName: i
					}) => async (r, a, o) => {
						const d = await k({
							context: o.apiContext(),
							pageContent: e,
							revisionReason: s,
							subredditName: i,
							wikiPageName: t
						});
						if (d.ok) r(O({
							pageKey: Object(E.a)({
								subredditName: i,
								wikiPageName: t
							}),
							pageRevisionsListingKey: Object(v.a)({
								subredditName: i,
								wikiPageName: t,
								isRecent: !1
							}),
							recentRevisionsListingKey: Object(v.a)({
								subredditName: i,
								wikiPageName: t,
								isRecent: !0
							})
						})), await r(Object(u.fetchSubredditWikiData)({
							includeDirectory: !0,
							includePageData: !0,
							subredditName: i,
							wikiPageName: t
						}));
						else {
							let e = n.fbt._("Something went wrong", null, {
								hk: "4oNh1E"
							});
							d.body && "RESTRICTED_PAGE" === d.body.reason && (e = n.fbt._("Cannot create/edit restricted page", null, {
								hk: "2pUIkm"
							})), r(Object(p.f)({
								kind: _.b.Error,
								text: e
							}))
						}
						return d.ok
					})({
						pageContent: s,
						revisionReason: i,
						subredditName: t.subredditName,
						wikiPageName: t.wikiPageName
					})),
					onFinishWikiEdit: t => e(((e = !1) => async (t, s) => {
						const n = s().platform.currentPage,
							i = n.locationState && n.locationState[b.a];
						if (e && i) t(Object(l.a)());
						else {
							const {
								subredditName: e,
								wikiPageName: s
							} = n.urlParams, i = Object(y.a)(n.url, {
								subredditName: e,
								wikiPageName: s
							});
							t(Object(l.c)(i))
						}
					})(t)),
					closeAllModals: () => e(Object(c.f)()),
					toggleModal: t => e(Object(c.i)(t))
				}));
			class se extends r.a.Component {
				constructor(e) {
					super(e), this.isUnmounted = !1, this.onSaveWithReason = async e => {
						const {
							markdown: t
						} = this.state;
						this.setState({
							isSavePending: !0
						}), this.props.sendEvent(Object(R.m)(this.props.isCreation));
						const s = await this.props.onSaveWikiPage(t, e);
						this.isUnmounted || (this.setState({
							isSavePending: !1
						}), s ? this.setState({
							disableBlocking: !0
						}, () => {
							this.props.onFinishWikiEdit()
						}) : this.finishPendingNavTransition(!1))
					}, this.onLeavePageConfirmed = () => {
						this.finishPendingNavTransition(!0)
					}, this.onAbortLeavingPage = () => {
						this.finishPendingNavTransition(!1), this.props.closeAllModals()
					}, this.onCancelAddingRevisionReason = () => {
						this.finishPendingNavTransition(!1), this.props.closeAllModals()
					}, this.showRevisionReasonModal = () => {
						this.props.isRevisionReasonModalOpen || this.props.toggleModal(X)
					}, this.onCancel = () => {
						this.props.onFinishWikiEdit(!0)
					}, this.onTextChange = e => {
						this.setState({
							markdown: e.target.value
						})
					}, this.renderWikiPageEditor = e => {
						const {
							isCreation: t,
							isRevisionReasonModalOpen: s,
							isSaveBeforeLeaveModalOpen: i,
							wikiPage: a,
							wikiPageName: o
						} = this.props, {
							disableBlocking: c,
							isSavePending: l,
							markdown: m
						} = this.state, u = a && a.content && a.content.markdown || "", p = !m.trim(), b = m !== u, h = t && a ? Object(M.b)(a.name) : void 0, g = !(!a || a.status !== B.b.PageNotCreated || h), x = !(!a || a.status !== B.b.Valid || !a.isRevisable), f = t ? g : x, k = f && b && !p && !l && !h;
						return r.a.createElement("div", {
							className: Object(d.a)(Y.a.container, this.props.className)
						}, r.a.createElement("div", {
							className: Object(d.a)(this.props.topBarClassName, Y.a.topBar, {
								[Y.a.modHubTopBarExp]: e
							})
						}, r.a.createElement(L.l, {
							onClick: this.onCancel,
							disabled: l
						}, n.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), r.a.createElement(L.i, {
							disabled: !k,
							onClick: this.showRevisionReasonModal
						}, n.fbt._("Save", null, {
							hk: "4yMsMq"
						}))), r.a.createElement("div", {
							className: Object(d.a)(this.props.contentClassName, Y.a.content)
						}, a ? f ? r.a.createElement(j.a, {
							autoFocus: !0,
							className: Y.a.resizableTextarea,
							disabled: l,
							onChange: this.onTextChange,
							placeholder: n.fbt._("Add page content here", null, {
								hk: "4fxFCc"
							}),
							value: m
						}) : r.a.createElement(S.a, {
							description: $(t, a, h),
							title: t ? n.fbt._('"{pageName}" cannot be created', [n.fbt._param("pageName", o)], {
								hk: "235tfC"
							}) : n.fbt._('"{pageName}" cannot be edited', [n.fbt._param("pageName", o)], {
								hk: "4qKJob"
							})
						}) : r.a.createElement(P.a, {
							paragraphsCount: Q
						})), s && r.a.createElement(J, {
							withOverlay: !0,
							onCancel: this.onCancelAddingRevisionReason,
							onSave: this.onSaveWithReason,
							isPending: l
						}), r.a.createElement(w.a, {
							blockOnBeforeUnload: !0,
							dialogId: Z,
							enabled: b && !c
						}), i && r.a.createElement(N.a, {
							actionText: n.fbt._("Discard", null, {
								hk: "1SiwLl"
							}),
							headerText: n.fbt._("Discard changes before leaving?", null, {
								hk: "354NTe"
							}),
							modalText: n.fbt._("You have made some changes to your wiki page, do you wish to discard the changes?", null, {
								hk: "4sMjD7"
							}),
							onCancel: this.onAbortLeavingPage,
							onClose: this.onAbortLeavingPage,
							onConfirm: this.onLeavePageConfirmed,
							withOverlay: !0
						}))
					};
					const t = e.wikiPage && e.wikiPage.content ? e.wikiPage.content.markdown : "";
					this.state = {
						isSavePending: !1,
						markdown: t
					}
				}
				componentDidUpdate(e) {
					const {
						wikiPage: t
					} = this.props;
					if (t && !e.wikiPage) {
						const e = t.content && t.content.markdown || "";
						this.setState({
							markdown: e
						})
					}
				}
				componentWillUnmount() {
					this.isUnmounted = !0, this.finishPendingNavTransition(!1)
				}
				finishPendingNavTransition(e) {
					this.props.allowNavigationCallback && this.props.allowNavigationCallback(e)
				}
				render() {
					return r.a.createElement(I.a.Consumer, null, this.renderWikiPageEditor)
				}
			}
			t.a = te(Object(T.c)(se))
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.m.less": function(e, t, s) {
			e.exports = {
				container: "hFkZVSvr5ZCDtsUNvUe0t",
				mModHub: "OTGEcq8eHMW4w8Jk_xUB_",
				content: "jB-E_8PuDLsGMGUcJ38Ed",
				pageTitle: "_7mpqbmAh_bdv9eJPLzJkl",
				headerRow: "_24xr0pCtEq8smcGh9hy-iC",
				pageSource: "_3FGoxkytIqYAnG5hdqa8Uq"
			}
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				c = s("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				l = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				m = s("./src/reddit/constants/wiki.ts"),
				u = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				p = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				b = s("./src/reddit/selectors/subredditWiki.ts"),
				h = s("./src/reddit/components/Wiki/WikiPageSource/index.m.less"),
				g = s.n(h);
			const x = Object(a.c)({
					pending: b.a,
					revision: (e, {
						revisionId: t
					}) => t ? Object(b.n)(e, {
						revisionId: t
					}) : void 0,
					wikiPage: b.c
				}),
				f = Object(r.b)(x);
			class k extends i.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						pending: s,
						revision: r,
						revisionId: a,
						subredditName: b,
						wikiPage: h,
						wikiPageName: x
					} = this.props;
					let f = null;
					f = s ? i.createElement(d.a, null) : h ? h.status === p.b.Valid ? h.content && h.content.markdown : n.fbt._("Cannot show page content", null, {
						hk: "pwCwd"
					}) : n.fbt._("Page not found", null, {
						hk: "26hzSO"
					});
					const k = r || h && h.revision,
						v = !a,
						E = Object(u.a)({
							subredditName: b,
							wikiPageName: x,
							wikiSubRoute: v ? void 0 : m.m.Revisions
						}, t);
					return i.createElement("div", {
						className: Object(o.a)(e, g.a.container, t ? g.a.mModHub : null)
					}, i.createElement(c.a, {
						buttonText: v ? n.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}) : n.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: E,
						className: g.a.pageTitle,
						title: !v && k ? n.fbt._("Revision from {timeAgo}", [n.fbt._param("timeAgo", Object(l.b)(k))], {
							hk: "36r4TU"
						}) : n.fbt._("Page source", null, {
							hk: "33sFXM"
						})
					}), i.createElement("div", {
						className: g.a.content
					}, i.createElement("div", {
						className: g.a.headerRow
					}, k && i.createElement(l.a, {
						isLastRevision: v,
						revision: k,
						showReason: !0,
						showTimeAgo: !1
					})), i.createElement("div", {
						className: g.a.pageSource
					}, f)))
				}
			}
			t.a = f(k)
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3m-pL3lGJRyo7pWckPUL_d",
				dropdown: "_3IUuipl8jTmMnjXR0NDisP",
				row: "_25Y1JThsMmw5VNvhFFLb0j"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "I0T583ZtOWVEpRWsa0kbu",
				button: "_2IOi-lonN6Hy4pTcjFTLBp",
				revisionInfo: "Ln6UHsxFeDZdhv1yRUL0F",
				flexSpacer: "meAs5YnW58CX9i8rWjZQL"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/copyToClipboard/index.ts"),
				m = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				b = s("./src/reddit/constants/wiki.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/subredditWiki.ts"),
				E = s("./src/config.ts"),
				_ = s("./src/reddit/components/OverflowMenu/index.tsx"),
				y = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				w = s("./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less"),
				N = s.n(w);
			const j = ["right", "bottom"],
				T = ["right", "top"];
			class S extends a.a.Component {
				constructor() {
					super(...arguments), this.onViewPageSourceClick = () => {
						this.props.sendEvent(O.r)
					}, this.onCopyPageUrl = () => {
						const {
							subredditName: e,
							wikiPageName: t
						} = this.props, s = `${E.a.redditUrl}/r/${e}/wiki/${t}`;
						this.props.onCopyPageUrl(s), this.props.sendEvent(O.e)
					}
				}
				render() {
					const {
						className: e,
						dropdownId: t,
						isModHub: s,
						subredditName: i,
						wikiPage: r,
						wikiPageName: o
					} = this.props, d = s ? `/r/${i}/about/wiki` : `/r/${i}/wiki`;
					return a.a.createElement(_.b, {
						className: Object(c.a)(e, N.a.container),
						dropdownClassName: N.a.dropdown,
						dropdownId: t,
						targetPosition: j,
						tooltipPosition: T
					}, r && a.a.createElement(C.b, {
						className: N.a.row,
						displayText: n.fbt._("View page history", null, {
							hk: "fy9yY"
						}),
						href: `${d}/revisions/${o}`
					}), r && a.a.createElement(C.b, {
						className: N.a.row,
						displayText: n.fbt._("View page source", null, {
							hk: "1d5vg5"
						}),
						href: `${d}/${o}?${y.C}`,
						onClick: this.onViewPageSourceClick
					}), s && a.a.createElement(C.b, {
						className: N.a.row,
						displayText: n.fbt._("View in community", null, {
							hk: "mSFod"
						}),
						href: `/r/${i}/wiki/${o}`
					}), a.a.createElement(C.b, {
						className: N.a.row,
						displayText: n.fbt._("Copy URL", null, {
							hk: "3yBYUk"
						}),
						onClick: this.onCopyPageUrl
					}))
				}
			}
			var P = S,
				I = s("./src/reddit/components/Wiki/WikiPageTopBar/index.m.less"),
				L = s.n(I);
			const R = Object(d.c)({
					hasWikiModPerms: (e, t) => {
						const s = Object(k.z)(e, t);
						return !!s && Object(f.i)(e, {
							subredditId: s.id
						})
					},
					wikiPage: v.c
				}),
				M = Object(o.b)(R, e => ({
					onCopyPageUrl: t => e((e => async t => {
						Object(l.a)(e) && t(Object(m.f)(Object(m.e)(n.fbt._("Copied page URL", null, {
							hk: "4qKWjj"
						}), x.b.SuccessCommunity)))
					})(t))
				}));
			class B extends a.a.Component {
				render() {
					const {
						hasWikiModPerms: e,
						isModHub: t,
						wikiPage: s,
						wikiPageName: r,
						subredditName: o,
						className: d
					} = this.props, l = !!s && s.status === g.b.Valid, m = !!s && s.isRevisable, u = e && m && l, x = t ? `/r/${o}/about/wiki/edit/${r}` : `/r/${o}/wiki/edit/${r}`;
					return a.a.createElement("div", {
						className: Object(c.a)(d, L.a.container)
					}, t && s && s.revision && a.a.createElement(p.a, {
						showTimeAgo: !0,
						className: L.a.revisionInfo,
						isLastRevision: !0,
						revision: s.revision
					}), a.a.createElement("div", {
						className: L.a.flexSpacer
					}), u && a.a.createElement(h.n, {
						className: L.a.button,
						to: `/r/${o}/about/wiki/settings/${r}`
					}, n.fbt._("Page settings", null, {
						hk: "2IAvWU"
					})), l && m && a.a.createElement(h.k, {
						className: L.a.button,
						to: Object(i.c)(x, {
							[b.a]: !0
						})
					}, n.fbt._("Edit", null, {
						hk: "1nftDt"
					})), l && a.a.createElement(P, {
						className: L.a.overflowMenu,
						dropdownId: `wikiPage-OverflowMenu-${r}-${t}`,
						isModHub: t,
						onCopyPageUrl: this.props.onCopyPageUrl,
						sendEvent: this.props.sendEvent,
						subredditName: o,
						wikiPage: s,
						wikiPageName: r
					}))
				}
			}
			t.a = M(Object(u.c)(B))
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Av0UmXioR3Vgw-lpzfBWu",
				button: "_2hFu9bCtEjS60NjZM3F_UE",
				description: "_2c02P9rTnnEw2KuDpY8JxB",
				title: "_3rol4SGAf0n5-e8EENfrur"
			}
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				r = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less"),
				a = s.n(r);

			function o(e) {
				const {
					buttonLink: t,
					buttonText: s,
					description: r,
					icon: o,
					onButtonClick: d,
					title: c
				} = e;
				let l = null;
				return s && t ? l = n.createElement(i.k, {
					className: a.a.button,
					onClick: e.onButtonClick,
					to: t
				}, s) : s && d && (l = n.createElement(i.i, {
					className: a.a.button,
					onClick: e.onButtonClick
				}, s)), n.createElement("div", {
					className: a.a.container
				}, o, c && n.createElement("div", {
					className: a.a.title
				}, c), r && n.createElement("div", {
					className: a.a.description
				}, r), l)
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				placeholderTitle: "XK5I3_2arHFpfmDn6iUGt",
				placeholderParagraph: "_3Rhsg99h5kjE-u1Pp-Uk8P",
				placeholderTextLine: "_5pG9RcI-AYalqG5z6osMT"
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/range.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less"),
				c = s.n(d);
			const l = e => r.createElement("div", {
				className: Object(a.a)(e.className, Object(o.b)({
					isLoading: !0
				}))
			});
			t.a = e => r.createElement(r.Fragment, null, e.showTitle && r.createElement(l, {
				className: c.a.placeholderTitle
			}), i()(e.paragraphsCount || 6).map(e => r.createElement("div", {
				className: c.a.placeholderParagraph,
				key: e
			}, i()(10).map(e => r.createElement(l, {
				className: c.a.placeholderTextLine,
				key: e
			})))))
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2NCACehu2vXVQzdHocg7Rq",
				linkButton: "_28uXMdKULX2ygqCKM5Apfz",
				active: "_2DijTkAaakBaDtqxBeulFO"
			}
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				o = s("./src/reddit/components/Wiki/common/PageTitle/index.m.less"),
				d = s.n(o);

			function c(e) {
				const {
					buttonLink: t,
					buttonText: s,
					className: n,
					title: o
				} = e;
				return i.a.createElement("div", {
					className: Object(r.a)(n, d.a.container)
				}, o, s && t && i.a.createElement(a.p, {
					className: d.a.linkButton,
					to: t
				}, s))
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2b8IWktp8nbHqDKTRFWebW",
				authorLink: "IY5BT71vlrhwNnwInSc2f"
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/lodash/noop.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/components/AuthorLink/index.tsx"),
				u = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = s("./src/reddit/helpers/graphql/helpers.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/components/Wiki/common/RevisionInfo/index.m.less"),
				f = s.n(x);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = ["center", "top"], E = ["center", "bottom"], _ = Object(o.a)(b.b), y = e => {
				const t = new Date(Object(h.e)(e.revisedAt));
				return Object(l.d)(t.valueOf() / 1e3)
			};
			class C extends a.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						className: e,
						isLastRevision: t,
						revision: s,
						showReason: n = !1,
						showTimeAgo: r = !1
					} = this.props, {
						showTooltip: o
					} = this.state, l = s.authorInfo && s.authorInfo.name || c.C, b = new Date(Object(h.e)(s.revisedAt)), x = a.a.createElement(u.a, {
						tooltipId: "wikipage-revision-author",
						user: l,
						sendHoverCardEvent: i.a
					}, a.a.createElement(m.a, {
						className: f.a.authorLink,
						author: l,
						isAuthorDeleted: Object(g.n)(l),
						isUnstyled: !0
					}, l));
					return a.a.createElement("span", {
						className: Object(d.a)(e, f.a.container)
					}, t ? k._("Last revised by {username}", [k._param("username", x)], {
						hk: "jNOhx"
					}) : k._("Revised by {username}", [k._param("username", x)], {
						hk: "2Q35rs"
					}), r && a.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", a.a.createElement(p.d, {
						seconds: b.valueOf() / c.Ob
					}), a.a.createElement(_, {
						text: b.toString(),
						isOpen: o,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: v,
						tooltipPosition: E
					})), n && s.reason && a.a.createElement("span", null, " - ", s.reason))
				}
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(i.c)({
				userIsSubscriber: a.fb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
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
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(i.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.U,
				hideNSFWPref: b.B,
				isActive: p.j,
				moderatorPermissions: m.k,
				modModeEnabled: c.S,
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
					const n = s === d.a.upvoted ? Object(r.db)(t) : Object(r.w)(t);
					e(n)
				},
				onIgnoreReports: () => e(Object(r.Z)(t)),
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
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/helpers/isComment.ts"),
				r = s("./src/reddit/helpers/isPost.ts"),
				a = s("./src/telemetry/models/Outbound.ts");
			const o = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(i.b)(e) || Object(r.b)(e))) return Object(i.b)(e) ? a.SourceElement.Comment : Object(n.x)(t) ? a.SourceElement.PostDetail : Object(n.G)(t) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			}));
			const n = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				i = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				r = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				a = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				o = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return _
			}));
			var n, i, r = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/helpers/isComment.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(i || (i = {}));
			const u = e => ({
					...m.defaults(e),
					source: i.LINK,
					action: r.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...m.defaults(e),
					source: i,
					screen: m.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: c.f.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(o.b)(s) && !Object(a.b)(s)) return {
						outbound: void 0
					};
					const i = Object(o.b)(s) ? "postId" : "commentId",
						r = {
							url: `/r/${n}/`,
							sourceElement: Object(d.a)(t),
							subredditName: n,
							[i]: s.id
						},
						c = Object(l.z)(e, {
							subredditName: n
						});
					return c ? {
						outbound: {
							...r,
							url: c.url,
							subredditId: c.id
						}
					} : {
						outbound: {
							...r
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(o.b)(s) && !Object(a.b)(s)) return {};
					const n = Object(o.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: m.post(e, s.id),
						subreddit: m.subredditById(e, n),
						...b(e, t)
					}
				},
				g = e => t => ({
					...u(t),
					...h(t, e)
				}),
				x = e => t => ({
					...p(t),
					source: "global",
					action: r.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: m.subredditByName(t, e),
					screen: m.screen(t)
				}),
				f = (e, t) => s => ({
					...p(s),
					source: i.DISCOVERY_UNIT,
					action: r.c.VIEW,
					noun: n.ITEM_POST,
					post: m.post(s, t),
					subreddit: m.subredditByName(s, e),
					screen: m.screen(s)
				}),
				k = (e, t) => s => ({
					...p(s),
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.ITEM_POST,
					post: m.post(s, t),
					subreddit: m.subredditByName(s, e),
					screen: m.screen(s)
				}),
				v = e => t => ({
					...p(t),
					subreddit: m.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...p(t),
					subreddit: m.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				_ = e => t => ({
					...p(t),
					subreddit: m.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, i, r = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(i || (i = {}));
			const o = (e, t) => s => ({
					source: i.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(a.widget)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.defaults
				}),
				d = (e, t) => s => ({
					source: i.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.post(s, e),
					subreddit: a.subreddit(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.defaults(s)
				}),
				c = () => e => ({
					source: i.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.defaults(e)
				}),
				l = e => t => ({
					source: i.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...a.defaults(t),
					topicMetadata: {
						displayName: e
					}
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
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), i.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
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
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function i(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
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
				p = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var b = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, n = Object(u.a)(s, m.U.HOT, {});
					return i.a.createElement(p.a, {
						listingKey: n,
						listingName: s.toLowerCase(),
						subredditId: t.id,
						subredditName: s
					})
				},
				h = s("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				g = s("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				x = s("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				f = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/constants/wiki.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				_ = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				y = s("./src/reddit/components/JumpToContent/index.tsx"),
				C = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				O = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				w = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				N = s.n(w);

			function j(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return n.createElement(n.Fragment, null, n.createElement(y.a, null), n.createElement(O.a, {
					isModHub: !1,
					className: N.a.topBar,
					wikiPageName: t,
					subredditName: s
				}), n.createElement(C.a, {
					showRevisionInfo: !0,
					subredditName: s,
					wikiPageName: t
				}))
			}
			var T = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				S = s.n(T);
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
					} = s, o = n[f.A], d = n[f.B], c = f.C in n;
					switch (r) {
						case k.m.Create:
						case k.m.Edit:
							return i.a.createElement(g.a, {
								contentClassName: S.a.wikiPageEditorContent,
								isCreation: r === k.m.Create,
								subredditName: t,
								topBarClassName: S.a.communityWikiTopBar,
								wikiPageName: a
							});
						case k.m.Revisions:
							return i.a.createElement(_.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? i.a.createElement(h.a, {
								comparisonRevisionId: Object(E.a)(d),
								revisionId: Object(E.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? i.a.createElement(x.a, {
								revisionId: o ? Object(E.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? i.a.createElement(j, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var I = Object(v.u)()(P),
				L = s("./src/reddit/constants/componentSizes.ts"),
				R = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				M = s("./src/reddit/layout/page/Listing/index.tsx"),
				B = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const F = Object(v.u)(),
				D = Object(r.b)(() => Object(a.c)({
					contentGateInfo: (e, {
						match: t
					}) => Object(W.e)(e, t.params.subredditName),
					layout: v.Q,
					over18Pref: W.db,
					subreddit: (e, {
						match: t
					}) => Object(B.z)(e, {
						subredditName: t.params.subredditName || k.e
					}),
					subredditName: (e, {
						match: t
					}) => t.params.subredditName || k.e,
					wikiPageName: (e, {
						match: t
					}) => t.params.wikiPageName || k.i
				}), e => ({
					onPageViewed: () => e(Object(o.a)())
				}));
			class H extends i.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: s,
						subredditName: n
					} = this.props, r = !!s && s.isNSFW && !W.db, a = Object(R.a)(t, r, n);
					if (a) return i.a.createElement(c.default, a);
					const o = `/r/${n}/`;
					return i.a.createElement(M.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: L.i,
						navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : n,
							maxWidth: L.i,
							subredditOrProfile: s,
							url: o
						}), i.a.createElement(d.a, {
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: n,
							subredditUrl: o
						})),
						content: i.a.createElement(I, {
							subredditName: n
						}),
						sidebar: s && i.a.createElement(b, {
							subreddit: s,
							subredditName: n
						})
					})
				}
			}
			t.default = F(D(H))
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const a = e => n.xb.Enabled === Object(i.c)(e, {
				experimentEligibilitySelector: r.J,
				experimentName: n.wb
			})
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts");
			const o = e => i.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o,
						experimentName: n.Fd
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === n.Nd.SmIcon || t === n.Nd.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					const s = Object(a.X)(e, {
						subredditName: t
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.745c3dc1b5fac514dd07.js.map