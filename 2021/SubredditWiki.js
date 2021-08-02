// https://www.redditstatic.com/desktop2x/SubredditWiki.2872bc390f32597751e0.js
// Retrieved at 8/2/2021, 12:10:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts");

			function i(e, {
				showDay: t,
				useUtc: s,
				shortMonths: i,
				locale: r = n.B
			} = {}) {
				const o = new Date(e * n.Nb);
				return new Intl.DateTimeFormat(r, {
					month: i ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: s ? "UTC" : void 0
				}).format(o)
			}
		},
		"./src/lib/humanizeDateTime/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts");

			function i(e, t = n.B) {
				const s = e * n.Nb;
				return new Date(s).toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "long"
				})
			}
		},
		"./src/lib/humanizeEventTime/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/eventTools/index.ts");

			function o(e, t = i.B) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function a(e, t, s, a = i.B) {
				const d = Object(r.e)(e, t),
					c = new Date(e * i.Nb);
				let l;
				if (d === r.a.Live || s) return n.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return d === r.a.Future ? l = Object(r.d)(e) ? n.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(r.b)(e) >= 5 ? o(c, a) : function(e, t = i.B) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(c, a) : d === r.a.Past && (l = Object(r.d)(e) ? n.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : o(c, a)), `${l} @ ${function(e,t=i.B){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(c,a)}`
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts");
			t.a = (e, t = n.B) => {
				return new Date(1e3 * e).toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
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
				return o
			})), s.d(t, "d", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const i = "INCONTEXT__BANNED",
				r = "INCONTEXT__MUTED",
				o = Object(n.a)(i),
				a = Object(n.a)(r)
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
				o = s("./src/reddit/actions/subreddit/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/blade.ts"),
				c = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(i.a)(o.w),
				g = Object(i.a)(o.x),
				x = Object(i.a)(o.v),
				f = (e, t, s) => async (n, i, r) => {
					const o = Object(p.y)(i(), {
						subredditName: e
					});
					if (o) return v(o, t, s)(n, i, r)
				}, k = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), v = (e, t, s) => async (i, o, p) => {
					const f = await Object(l.e)(t);
					i(h());
					const v = o();
					try {
						await Object(r.g)("communityIcon", f, e.id)(i, o, p)
					} catch (y) {
						return Object(b.a)(Object(c.c)(v, "something went wrong with the uploading the image")), i(Object(a.f)({
							kind: u.b.Error,
							text: k()
						})), void i(x())
					}
					const E = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!E) return Object(b.a)(Object(c.c)(v, "image is null")), i(Object(a.f)({
						kind: u.b.Error,
						text: k()
					})), void i(x());
					await Object(r.k)(e.id, {
						communityIcon: E
					}, d.b.idCard, s)(i, o, p), i(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: n.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), i(g())
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/matchRoute/index.ts"),
				i = s("./src/lib/opener/index.ts"),
				r = s("./node_modules/react-router-redux/es/index.js");
			const o = (e, t = !0) => async (s, o, {
				routes: a
			}) => {
				const d = o();
				Object(n.a)(e, a, d) ? s(Object(r.b)(e)) : t ? Object(i.d)(e, "_blank") : window.location.assign(e)
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
				o = s("./src/config.ts"),
				a = s("./src/reddit/controls/InternalLink/index.tsx"),
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
					href: `${o.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? i.a.createElement("span", {
					className: Object(r.a)(l.a.deletedAuthorLink, e.className)
				}, e.children) : i.a.createElement(a.a, {
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
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s("./src/lib/makeActionCreator/index.ts"),
				p = s("./src/reddit/actions/subreddit/constants.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				g = s("./src/reddit/helpers/localStorage/index.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/models/Toast/index.ts");
			const k = Object(m.a)(p.u),
				v = Object(m.a)(p.t),
				E = Object(m.a)(p.s);
			const y = (e, t) => async (s, n, {
				gqlContext: i
			}) => {
				var r, o, a, d;
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
					m = await Object(h.b)(i(), e, l);
				if ((null === (o = null === (r = m.error) || void 0 === r ? void 0 : r.fields) || void 0 === o ? void 0 : o.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(m.body) && (null === (a = m.body.data.updateSubredditNotificationSettings.errors) || void 0 === a ? void 0 : a.length)) return s(E()), s(Object(b.f)({
					kind: f.b.Error,
					text: u.fbt._("Sorry, you’ve encountered an error.", null, {
						hk: "4CcZhw"
					})
				}));
				m.ok && (s(k({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), s(Object(b.f)({
					kind: f.b.SuccessCommunityGreen,
					text: t === x.b.OFF ? u.fbt._("Unfollowed, You’ll no longer recieve updates", null, {
						hk: "3cvv2O"
					}) : u.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
						hk: "1fYEVg"
					})
				})), t === x.b.FREQUENT && Object(g.ab)(null === (d = c.user.account) || void 0 === d ? void 0 : d.id, e))
			};
			var _ = s("./src/reddit/actions/subredditWelcomeMessage.ts"),
				C = s("./src/lib/combineRefs/index.tsx"),
				O = s("./src/lib/hooks/useOnClickOutside.ts"),
				w = s("./src/lib/hooks/useTooltip.ts"),
				j = s("./src/reddit/components/CommonTooltip/Hooked.tsx"),
				N = s("./src/reddit/icons/fonts/index.tsx"),
				T = s("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				S = s.n(T);
			const P = e => e === x.b.FREQUENT ? i.a.createElement(N.a, {
					name: "notification_frequent_fill"
				}) : i.a.createElement(N.a, {
					name: "notification_frequent"
				}),
				I = e => e === x.b.LOW ? i.a.createElement(N.a, {
					name: "notification_fill"
				}) : i.a.createElement(N.a, {
					name: "notification"
				}),
				L = e => e === x.b.OFF ? i.a.createElement(N.a, {
					name: "notification_off",
					isFilled: !0
				}) : i.a.createElement(N.a, {
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
				B = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				},
				M = {
					placement: "top"
				};
			var W = s("./src/reddit/controls/Dropdown/index.tsx"),
				D = s("./src/reddit/controls/Dropdown/Row.tsx");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const H = c.a.wrapped(W.a, "StyledDropdown", S.a),
				A = c.a.wrapped(D.b, "DropdownRow", S.a);
			var U = e => {
					return i.a.createElement(H, {
						id: e.dropdownId,
						className: S.a.notificationDropdown
					}, [{
						displayText: u.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(x.b.FREQUENT),
						isSelected: e.notificationLevel === x.b.FREQUENT,
						icon: P(e.notificationLevel)
					}, {
						displayText: u.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(x.b.LOW),
						isSelected: e.notificationLevel === x.b.LOW,
						icon: I(e.notificationLevel)
					}, {
						displayText: u.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(x.b.OFF),
						isSelected: e.notificationLevel === x.b.OFF,
						icon: L(e.notificationLevel)
					}].map(e => i.a.createElement(A, F({
						iconWrapperClassName: S.a.notificationOverflowIconWrapper,
						className: Object(a.a)(S.a.notificationDropdown, S.a.notificationRow, {
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
			var J = s("./src/reddit/hooks/useTracking.ts");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var K = e => i.a.createElement("svg", q({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), i.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}));
			const Y = c.a.img("SubredditIcon", S.a),
				Z = c.a.wrapped(K, "DefaultIcon", S.a);
			var X = ({
					subredditName: e,
					shouldShowSubredditIcon: t,
					subredditIcon: s,
					onHide: n,
					onUpdate: r
				}) => {
					const o = Object(J.a)(),
						a = t ? i.a.createElement(Y, {
							src: s || void 0
						}) : i.a.createElement(Z, null),
						d = `r/${e}`;
					return i.a.createElement("div", {
						className: S.a.notificationPopup
					}, i.a.createElement("div", {
						className: S.a.title
					}, i.a.createElement("h2", null, u.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), i.a.createElement("h3", null, u.fbt._("{subbredit name}", [u.fbt._param("subbredit name", d)], {
						hk: "3QhSOM"
					}))), i.a.createElement("div", {
						className: S.a.subredditWrapper
					}, i.a.createElement("div", {
						className: S.a.subbreditTitle
					}, a, i.a.createElement("span", null, d), i.a.createElement(N.a, {
						name: "notification_frequent_fill",
						className: S.a.notificationIcon
					})), i.a.createElement(V.q, {
						className: S.a.subscribeButton,
						priority: V.b.Primary,
						size: V.c.M,
						text: u.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							n(), r(x.b.FREQUENT), o(G(x.b.FREQUENT.toLowerCase()))
						}
					})), i.a.createElement("button", {
						className: S.a.hideButton,
						onClick: n
					}, u.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				Q = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx");
			var $ = ({
					arrowProps: e,
					popperProps: t,
					visible: s,
					subredditName: n
				}) => i.a.createElement(Q.a, {
					arrowProps: e,
					popperProps: t,
					visible: s
				}, i.a.createElement("div", {
					className: S.a.tooltipText
				}, i.a.createElement("p", null, u.fbt._("Love r/{subreddit name}?", [u.fbt._param("subreddit name", n)], {
					hk: "2ftUJw"
				})), i.a.createElement("p", null, u.fbt._("Get updates on it!", null, {
					hk: "XD60G"
				})))),
				ee = s("./src/reddit/hooks/useInfoTextTooltip.ts");
			var te = s("./src/lib/localStorageAvailable/index.ts"),
				se = s("./src/reddit/constants/experiments.ts"),
				ne = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ie = s("./src/reddit/selectors/experiments/utils.ts"),
				re = s("./src/reddit/selectors/user.ts");
			const oe = e => (Object(re.I)(e) || Object(re.J)(e)) && Object(te.a)(),
				ae = Object(o.a)(e => Object(ne.c)(e, {
					experimentName: se.Y,
					experimentEligibilitySelector: oe
				}), ie.a),
				de = Object(o.a)(ae, e => e === se.uc.ToolTip_nonSub),
				ce = Object(o.a)(ae, e => e === se.uc.ToolTip_2ndVisit),
				le = Object(o.a)(ae, e => e === se.uc.ToolTip_3rdVisit),
				ue = Object(o.a)(ae, e => e === se.uc.HalfSheet_2ndVisit),
				me = Object(o.a)(ae, e => e === se.uc.HalfSheet_3rdVisit),
				pe = Object(o.a)(ue, me, ce, le, de, (e, t, s, n, i) => e || t || s || n || i);
			var be = e => {
					const t = Object(r.d)(),
						s = Object(J.a)(),
						o = Object(r.e)(ue),
						a = Object(r.e)(me),
						d = Object(r.e)(ce),
						c = Object(r.e)(le),
						l = Object(r.e)(de),
						u = Object(w.b)(R),
						m = Object(w.b)(B),
						p = Object(ee.a)(M),
						[b, h] = function(e, t) {
							const [s, i] = Object(n.useState)(Object(g.M)(e, t));
							return [s, Object(n.useCallback)(() => {
								const s = Object(g.a)(e, t);
								i(s)
							}, [e, t, i])]
						}(e.userId, e.subredditId);
					Object(n.useEffect)(() => {
						e.notificationLevel !== x.b.LOW && e.notificationLevel !== x.b.OFF || h()
					}, [e.subredditId]);
					const f = o && 2 === b || a && 3 === b,
						k = d && 2 === b || c && 3 === b || l && e.showTooltipAfterSubscription,
						v = () => {
							u.hide()
						},
						E = () => {
							m.hide()
						},
						_ = () => {
							p.hide()
						};
					Object(n.useEffect)(() => (f && (m.update && m.update(), m.show()), k && (p.update && p.update(), p.show()), () => {
						E(), _(), v()
					}), [e.subredditName, f, k]);
					const T = () => {
							E(), _(), u.show()
						},
						P = (e => `dropdown-${e}`)(e.subredditName),
						I = (e => `popup-${e}`)(e.subredditName);
					Object(O.a)(P, v);
					const L = Object(n.useCallback)(e => {
							e.stopPropagation(), u.visible ? v() : T()
						}, [v, T, u.visible]),
						W = Object(n.useCallback)(n => {
							v(), _(), E(), t(y(e.subredditId, n)), s(G(n.toLowerCase()))
						}, [v, e.subredditId, t, s, _, v]);
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
						type: "button",
						className: S.a.notificationButton,
						ref: Object(C.a)(p.target.ref, u.target.ref, m.target.ref),
						onClick: L,
						"data-testid": "subredditNotificationButton"
					}, (e => {
						switch (e) {
							case x.b.FREQUENT:
								return i.a.createElement(N.a, {
									name: "notification_frequent_fill",
									className: S.a.notificationIcon
								});
							case x.b.OFF:
								return i.a.createElement(N.a, {
									name: "notification_off",
									className: S.a.notificationIcon
								});
							case x.b.LOW:
							default:
								return i.a.createElement(N.a, {
									name: "notification",
									className: S.a.notificationIcon
								})
						}
					})(e.notificationLevel)), k && i.a.createElement($, {
						arrowProps: p.arrowProps,
						popperProps: p.popperProps,
						visible: p.visible,
						subredditName: e.subredditName
					}), i.a.createElement(j.a, {
						popperProps: u.popperProps,
						visible: u.visible,
						tooltipId: P
					}, i.a.createElement(U, {
						dropdownId: P,
						notificationLevel: e.notificationLevel,
						onClick: W
					})), f && i.a.createElement(j.a, {
						arrowProps: m.arrowProps,
						popperProps: m.popperProps,
						visible: m.visible,
						tooltipId: I,
						className: S.a.popupTooltip
					}, i.a.createElement(X, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: E,
						onUpdate: W
					})))
				},
				he = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				ge = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				xe = s("./src/reddit/components/SubredditNav/index.tsx"),
				fe = s("./src/reddit/components/SubscribeButton/index.tsx"),
				ke = s("./src/reddit/constants/postLayout.ts"),
				ve = s("./src/reddit/constants/posts.ts"),
				Ee = s("./src/reddit/featureFlags/index.ts"),
				ye = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				_e = s("./src/reddit/constants/tracking.ts");
			var Ce = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				Oe = s("./src/reddit/selectors/subreddit.ts"),
				we = s("./src/reddit/selectors/widgets.ts"),
				je = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				Ne = s.n(je);
			const Te = c.a.img("SubredditIcon", Ne.a),
				Se = Object(o.c)({
					isHighFrequencyEnabled: pe,
					notificationLevel: Oe.F,
					spPollsEnabled: Ee.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(Ce.a)(e, {
						subredditId: t
					}),
					tournamentsEnabled: (e, {
						subredditId: t
					}) => !!t && Object(Oe.M)(e, {
						subredditId: t
					}),
					userId: re.h,
					userIsSubscriber: (e, {
						subredditName: t
					}) => {
						const s = t;
						return Object(Oe.eb)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					},
					widget: (e, {
						subredditId: t
					}) => t ? Object(we.f)(e, {
						subredditId: t
					}) : void 0
				});
			t.a = Object(r.b)(Se, (e, t) => ({
				_onOpenWelcomeMessageModal: () => {
					var s;
					const n = t.subredditId || (null === (s = t.subreddit) || void 0 === s ? void 0 : s.id);
					if (n) return e(Object(_.d)(n))
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
				const [t, s] = Object(n.useState)(!1), r = e.subreddit ? e.subreddit.id : e.subredditId, o = e.subreddit ? e.subreddit.name : e.subredditName, d = e.subreddit ? e.subreddit.url : e.subredditUrl, c = e.subreddit ? e.subreddit.title : "", u = e.subreddit && Object(ye.a)(e), m = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && u), p = e.isHighFrequencyEnabled && e.userIsSubscriber, b = o.charAt(0).toUpperCase() + o.slice(1), h = !!e.subreddit && e.subredditInlineEditingEnabled, x = Object(a.a)(Ne.a.SubredditIcon, Ne.a.editableIcon, {
					[Ne.a.emptyEditableIcon]: !u
				}), f = m ? i.a.createElement(ge.a, {
					className: x,
					subreddit: e.subreddit,
					iconUrl: u || void 0,
					inTopBar: !0
				}) : i.a.createElement(K, {
					className: Ne.a.DefaultIcon
				}), k = m ? i.a.createElement(Te, {
					src: u || void 0
				}) : i.a.createElement(K, {
					className: Ne.a.DefaultIcon
				}), v = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0), E = e.layout ? e.layout === ke.g.Large ? "984px" : "100%" : "1086px";
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
					className: Object(a.a)(Ne.a.textContainer, {
						[Ne.a.textContainerNoIcon]: !m
					})
				}, i.a.createElement("div", {
					className: Ne.a.text
				}, i.a.createElement("h1", {
					className: Ne.a.title
				}, c || b), !!c && i.a.createElement("h2", {
					className: Ne.a.description
				}, "r/", o)), i.a.createElement("div", {
					className: Ne.a.subscribeButtonContainer
				}, i.a.createElement(fe.a, {
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
						name: o,
						type: ve.a.SUBREDDIT
					},
					onClick: e.onOpenWelcomeMessageModal,
					small: !0,
					enableNotificationTooltipAfterSubscription: () => s(!0),
					afterUnsubscribeAction: () => {
						r && (Object(g.ab)(e.userId, r), e.updateSubredditInfo())
					}
				})), p && r && e.notificationLevel && i.a.createElement("div", {
					className: Ne.a.notificationButtonContainer
				}, i.a.createElement(be, {
					notificationLevel: e.notificationLevel,
					subredditName: o,
					subredditId: r,
					subredditIcon: u,
					shouldShowSubredditIcon: m,
					showTooltipAfterSubscription: t,
					userId: e.userId
				})), e.subreddit && i.a.createElement(he.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), v && i.a.createElement(xe.a, {
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
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = s.n(l);
			const m = e => e.preventDefault();
			t.a = Object(o.a)(e => r.a.createElement(a.d, null, r.a.createElement(a.h, null, r.a.createElement(c.a, null, r.a.createElement(a.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.k, null, r.a.createElement(a.o, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(a.f, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
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
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/downToChat.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				u = s("./src/reddit/selectors/downToChat.ts"),
				m = s("./src/reddit/selectors/experiments/downToChat.ts"),
				p = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(o.c)({
				isDownToChatExperimentEnabled: m.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(u.c)(e, t.id)
			}), x = Object(r.b)(g, e => ({
				startChatting: t => e(Object(a.i)(t))
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
				return o
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
				o = Object(i.a)("spBurnLinks", Object(n.a)({
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
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/timeAgo/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/selectors/meta.ts");
			var c = "undefined" == typeof document ? function() {
				return Object(a.e)(d.i) || o.B
			} : function() {
				return document.documentElement.lang || o.B
			};
			var l = function({
				seconds: e,
				...t
			}) {
				var s;
				const n = c(),
					o = {
						...t,
						locale: null !== (s = t.locale) && void 0 !== s ? s : n
					};
				return i.a.createElement(i.a.Fragment, null, Object(r.d)(e, o))
			};
			s("./src/reddit/helpers/dayAgoFormatDate/index.tsx");
			var u = s("./src/lib/humanizeDate/index.ts");
			var m = function({
					seconds: e,
					...t
				}) {
					var s;
					const n = c(),
						r = {
							...t,
							locale: null !== (s = t.locale) && void 0 !== s ? s : n
						};
					return i.a.createElement(i.a.Fragment, null, Object(u.a)(e, r))
				},
				p = s("./src/lib/humanizeDateTime/index.ts");
			var b = function({
				seconds: e,
				locale: t
			}) {
				const s = c(),
					n = null != t ? t : s;
				return i.a.createElement(i.a.Fragment, null, Object(p.a)(e, n))
			};
			s("./src/lib/humanizeEventTime/index.ts");
			s("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/IdCard/index.m.less"),
				o = s.n(r);
			const a = i.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return i.a.createElement("div", {
					className: o.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/config.ts"),
				r = s("./src/reddit/constants/listings.ts"),
				o = s("./src/reddit/constants/page.ts");
			const a = e => e && e.toLowerCase() === r.b.Popular,
				d = e => e && e.toLowerCase() === r.b.All,
				c = e => e && e === o.b,
				l = (e, t = 40, s = 68) => ({
					height: s,
					image: e,
					width: t
				}),
				u = ({
					listingName: e,
					subreddit: t,
					idCardWidget: s
				}) => {
					let o, u, m, p, b;
					const h = s && s.subscribersText || n.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						g = s && s.currentlyViewingText || n.fbt._("Online", null, {
							hk: "36JX70"
						});
					let x, f;
					return c(e) ? (o = `${i.a.assetPath}/img/id-cards/home-banner@2x.png`, m = l(`url('${i.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = r.c[r.b.Home], u = n.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = n.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(e) ? (o = `${i.a.assetPath}/img/id-cards/banner@2x.png`, u = n.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = l(`url('${i.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = r.c[r.b.All]) : a(e) ? (o = `${i.a.assetPath}/img/id-cards/banner@2x.png`, u = n.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = l(`url('${i.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = r.c[r.b.Popular]) : e && (u = s && s.description, m = l(""), p = t.displayText, b = t.url, f = s && s.subscribersCount, x = s && s.currentlyViewingCount), {
						snooBackground: m,
						description: u,
						titleText: p,
						url: b,
						subscribersCount: f,
						subscribersText: h,
						currentlyViewingText: g,
						currentlyViewingCount: x,
						...o ? {
							bannerBackgroundImage: o
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
				o = s("./src/reddit/components/IdCard/index.m.less"),
				a = s.n(o);
			const d = ({
				snooBackground: e
			}) => i.a.createElement("div", {
				className: a.a.AdorableSnoo,
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
				className: Object(r.a)(a.a.Title, a.a.TitleShifted)
			}, i.a.createElement(d, {
				snooBackground: t
			}), i.a.createElement("div", {
				className: a.a.TitleTextShiftedContainer
			}, i.a.createElement("span", {
				className: a.a.TitleText
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
				return _
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "i", (function() {
				return N
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/lodash/isNil.js"),
				d = s.n(a),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends n.Component {
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
			var p = Object(r.b)(u, {})(m),
				b = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const s = Object(h.a)(e, t),
					n = Object(g.H)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var f = Object(r.b)(() => Object(o.a)(x, b.j, (e, t) => ({
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
					n = Object(g.H)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var v = Object(r.b)(() => Object(o.a)(k, e => e))(e => i.a.createElement(p, {
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
			var E = Object(r.b)(() => Object(o.c)({
					subreddit: g.S
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
				y = s("./src/reddit/hooks/usePostContext.ts");
			var _ = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = Object(y.a)(), r = Object(n.useMemo)(() => ({
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
				} = Object(y.a)(), o = Object(n.useMemo)(() => ({
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
					data: o
				})
			};
			var O = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = Object(y.a)(), r = Object(n.useMemo)(() => ({
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
			var w = Object(r.b)(() => Object(o.c)({
				subreddit: g.S
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
			var j = Object(r.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(g.K)(e, {
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
			var N = Object(r.b)(() => Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(g.S)(e, {
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
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				g = Object(r.b)(() => Object(o.c)({
					isNightmodeOn: m.V
				}));
			t.a = g(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), i.a.createElement("iframe", {
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
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/PlayButton/index.tsx"),
				b = s("./src/reddit/constants/elementClassNames.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/ads.ts"),
				x = s("./src/reddit/hooks/useClickSourceData.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/constants/tracking.ts"),
				C = s("./src/reddit/components/Media/blurredContent.ts"),
				O = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				w = s.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => e > 2 * f.e,
				T = e => {
					const t = Object(c.a)(w.a.image, b.g, e.className, {
							[w.a.mShowCentered]: e.showCentered,
							[w.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${f.j}px`), e.isListing || e.isTall && N(e.height) || (s.maxHeight = `${f.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), r.a.createElement("img", {
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
				P = Object(o.b)(() => Object(d.a)(v.E, y.bb, (e, {
					isSponsored: t,
					postId: s
				}) => t && s ? Object(v.b)(e, s) : null, k.a, E.actionInfo, v.F, (e, t, s, n, i, r) => ({
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
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(h.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(g.a)(e.post, e.pageType)
					}
				}, L(e)) : e.isListing && e.postPermalink ? r.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink)
				}, L(e)) : L(e)
			});
			const I = (e, t) => r.a.createElement(T, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[_.a]: !e
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
						i = N(t.height) && s;
					return r.a.createElement(S, j({}, t, {
						className: `${s?`${_.a} `:""}${t.className||""}`
					}), t.isListing ? r.a.createElement("div", {
						className: t.contentImageClassName
					}, I(s, t)) : r.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
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
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/forceHttps/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = s.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
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
						src: Object(o.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
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
			class u extends i.a.Component {
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
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
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
			class k extends o.a.Component {
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
						let o = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, n) return n = !1, void(a = d);
							if (e.paused || e.seeking || !s) return void(a = d);
							const i = o;
							4 === e.readyState ? o = !1 : !o && d >= a && d < a + g ? o = !0 : o && d >= a && d > a + g && (o = !1), a = d, i !== o && t(o)
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
						showCentered: a,
						showFull: d,
						source: c,
						...l
					} = this.props;
					return o.a.createElement("video", f({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), o.a.createElement("source", {
						src: Object(x.a)(this.props.source || "")
					}))
				}
			}
			var v = k,
				E = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				y = s.n(E);
			const _ = Object(d.c)({
					autoplayPref: p.b,
					consumed: b.a,
					loadTimes: b.f,
					metadata: b.h,
					started: b.k
				}),
				C = Object(a.b)(_, (e, {
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
			class O extends o.a.Component {
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
						return e && (s.margin = "0 auto"), t || (s.maxHeight = `${m.e}px`), o.a.createElement(v, {
							autoplay: this.props.autoplayPref,
							className: Object(c.a)(u.a, y.a.styledVideo),
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
					return this.props.isListing ? this.renderVideoPlayer() : o.a.createElement("div", {
						className: Object(c.a)(y.a.container, this.props.className, {
							[y.a.centered]: this.props.showCentered
						})
					}, o.a.createElement("a", {
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/reddit/components/OverflowMenu/index.m.less"),
				x = s.n(g);
			const f = c.a.wrapped(m.a, "_Dropdown", x.a),
				k = Object(u.a)(f),
				v = c.a.button("MenuButton", x.a),
				E = c.a.wrapped(p.b, "DropdownRow", x.a),
				y = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				_ = Object(o.b)(y, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = _(e => r.a.createElement(v, {
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/routes/avatar/index.ts"),
				g = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				x = s.n(g);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: s,
				post: d
			}) => {
				const g = Object(l.b)(),
					k = Object(o.d)(),
					v = d && d.id,
					E = d && d.voteState,
					y = Object(i.useCallback)(() => g(Object(m.b)(e ? "user_hovercard" : "profile_overview", t)), [e, g, t]);
				return r.a.createElement(a.a, {
					to: `${h.a}/${t}`
				}, r.a.createElement(u.q, {
					onClick: () => {
						s ? v && E === b.a.notVoted && (g(m.c), k(Object(c.bb)(v))) : y()
					},
					className: Object(n.a)(x.a.snoovatarButton, x.a.snoovatarExtraPadding, x.a.compactButtonLayout, {
						[x.a.avatarPostifyButton]: s
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(n.a)({
						[x.a.shirtIcon]: !s,
						[x.a.avatarPostButtonShirtIcon]: s
					})
				}), f._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: x.a.chevronIcon
				})))
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const b = Object(o.b)(null, e => ({
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
							"--RawHTMLDisplay-tr-even": Object(n.g)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.g)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(a.a)(h))
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
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
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
			const u = ({
					className: e,
					children: t,
					editorWrapperRef: s,
					initialHeight: n
				}) => i.a.createElement("div", {
					className: Object(a.a)(c.a.editorWrapper, e),
					style: n ? {
						height: n
					} : void 0,
					ref: s
				}, t),
				m = ({
					isFullHeight: e,
					textAreaRef: t,
					...s
				}) => i.a.createElement(o.a, l({
					className: Object(a.a)(c.a.textareaAutosize, {
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
						isResized: o
					} = this.state;
					return i.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, i.a.createElement(m, l({}, r, {
						children: !0,
						isFullHeight: !!o,
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

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
				g = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				f = m.a.span("SpoilerWrapper", u.a),
				k = m.a.wrapped(({
					className: e,
					isOpen: t,
					...s
				}) => r.a.createElement(f, p({}, s, {
					className: Object(o.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				v = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
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
				return u
			})), s.d(t, "h", (function() {
				return m
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
				return y
			})), s.d(t, "l", (function() {
				return _
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "n", (function() {
				return O
			})), s.d(t, "t", (function() {
				return w
			})), s.d(t, "p", (function() {
				return j
			})), s.d(t, "o", (function() {
				return N
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
				o = s("./src/reddit/components/RichTextJson/elements.m.less"),
				a = s.n(o),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				u = d.a.hr("Hr", a.a),
				m = d.a.code("M", a.a),
				p = d.a.pre("Pre", a.a),
				b = d.a.blockquote("Blockquote", a.a),
				h = d.a.p("P", a.a),
				g = d.a.li("Li", a.a),
				x = d.a.ul("Ul", a.a),
				f = d.a.ol("Ol", a.a),
				k = d.a.strong("B", a.a),
				v = d.a.em("I", a.a),
				E = d.a.span("U", a.a),
				y = e => i.a.createElement("del", e),
				_ = d.a.sub("Sub", a.a),
				C = d.a.sup("Sup", a.a),
				O = d.a.table("Table", a.a),
				w = d.a.tr("Tr", a.a),
				j = d.a.td("Tdl", a.a),
				N = d.a.td("Tdc", a.a),
				T = d.a.td("Tdr", a.a),
				S = d.a.th("Thl", a.a),
				P = d.a.th("Thc", a.a),
				I = (d.a.th("Thr", a.a), d.a.wrapped(e => i.a.createElement(r.b, e), "A", a.a)),
				L = d.a.wrapped(c.a, "A", a.a)
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
				return _
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "a", (function() {
				return w
			}));
			var n = s("./node_modules/lodash/findLastIndex.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/sentry/index.ts"),
				l = s("./src/reddit/components/Media/blurredContent.ts"),
				u = s("./src/reddit/constants/elementClassNames.ts"),
				m = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				}) => o.a.createElement(v, k({}, s, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...s
						}))
					}
				}))),
				y = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				_ = e => i()(e, y),
				C = e => e.findIndex(y),
				O = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: i,
						isNSFW: r,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: x,
						useExplicitTextColor: k,
						shouldBlur: y
					} = e, O = n.document, w = [], j = e.mediaMetadata || null, N = C(O), T = _(O);
					if (y && !i) return o.a.createElement(v, {
						className: Object(a.a)(u.j, s)
					}, o.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: c
					}, Object(l.a)(!!r, !!d))));
					if (-1 !== N)
						for (let o = N; o <= T; o++) {
							const e = O[o];
							switch (e.e) {
								case b.k:
									w.push(g.c(e, x, o));
									break;
								case b.l:
									w.push(g.d(o));
									break;
								case b.b:
									w.push(g.a(e, j, x, o));
									break;
								case b.c:
									w.push(g.b(e, o));
									break;
								case b.p:
									w.push(g.f(e, j, x, o));
									break;
								case b.z:
									w.push(g.h(e, j, x, o));
									break;
								case b.u:
									w.push(g.g(e, j, x, o));
									break;
								case b.h:
									w.push(Object(h.a)(e, o));
									break;
								case b.m:
								case b.a:
								case b.D:
									w.push(...Object(h.b)(e, o, j, p, m, t))
							}
						}
					return k ? o.a.createElement(v, {
						className: Object(a.a)(u.j, s)
					}, w) : o.a.createElement(E, {
						className: Object(a.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, w)
				};
			class w extends o.a.Component {
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
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				d = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
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
				y = f.a.wrapped(l.a, "ImageBox", x.a),
				_ = f.a.wrapped(e => r.a.createElement("p", e), "Caption", x.a),
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
				}, r.a.createElement(u.a, {
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
				j = (e, t, s) => {
					const n = e.c;
					let i = "";
					return s && (s.e === b.s ? i = s.s.u : s.e === b.r ? i = s.s.gif : s.e === b.t && (i = (e => {
						const t = v.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), i ? r.a.createElement(E, {
						href: i,
						key: t,
						title: n
					}, n || i) : null
				},
				N = (e, t, s, n, i, a) => {
					const c = b.E(s, e.id);
					if (n) return [j(e, t, c)];
					const l = [];
					return c ? c.e === b.s ? l.push((({
						id: e,
						s: t
					}, s, n, i) => r.a.createElement("div", {
						className: Object(o.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: n
						})
					}, r.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: s,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, r.a.createElement(y, {
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
					}))))(c, t, !!e.c, a)) : c.e === b.r ? l.push((({
						id: e,
						ext: t,
						s
					}, n, i) => {
						if (Object(p.f)(e)) {
							const a = t || Object(p.e)(e);
							return r.a.createElement("div", {
								className: Object(o.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: i
								})
							}, r.a.createElement(E, {
								href: a,
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
								originalSource: a
							}))
						}
						return r.a.createElement("div", {
							className: Object(o.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: i
							})
						}, r.a.createElement(u.a, {
							height: s.y,
							isListing: !1,
							key: n,
							showCentered: !0,
							showFull: !0,
							width: s.x
						}, r.a.createElement(m.a, {
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
					}, a, c, l) => r.a.createElement("div", {
						className: Object(o.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: c
						})
					}, r.a.createElement(u.a, {
						height: n,
						isListing: !1,
						isVideo: !0,
						key: a,
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
					}))(e.e, t)), e.c && l.push(((e, t) => r.a.createElement(_, {
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
				return B
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "h", (function() {
				return D
			})), s.d(t, "g", (function() {
				return F
			})), s.d(t, "i", (function() {
				return H
			})), s.d(t, "e", (function() {
				return A
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				i = s("./node_modules/lodash/reduce.js"),
				r = s.n(i),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./node_modules/uuid/v4.js"),
				l = s.n(c),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/models/Product/index.ts"),
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
			class y extends a.a.Component {
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
					return i ? a.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: r,
						src: i,
						width: s,
						height: n,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(g, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: r,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var _ = Object(u.c)(y),
				C = s("./src/reddit/components/RichTextJson/media.tsx"),
				O = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				w = s("./src/reddit/components/SubredditMention/index.tsx"),
				j = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				N = s("./src/reddit/helpers/isComment.ts"),
				T = s("./src/reddit/helpers/isPost.ts"),
				S = s("./src/reddit/helpers/richTextJson/index.ts"),
				P = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const I = (e, t, s) => {
					const n = e.c || [],
						i = e.l,
						r = [],
						o = n.length;
					for (let a = 0; a < o; a++) {
						const e = n[a];
						r.push(e.e === p.w ? e.t : A(e, t, a))
					}
					const c = d.x[i - 1];
					return a.a.createElement(c, {
						key: s
					}, r)
				},
				L = e => a.a.createElement(d.e, {
					key: e
				}),
				R = (e, t, s, n) => {
					const i = e.c;
					if (!i) return;
					const r = i.length,
						o = [];
					for (let a = 0; a < r; a++) o.push(W(i[a], t, s, a));
					return a.a.createElement(d.c, {
						key: n
					}, o)
				},
				B = (e, t) => {
					const s = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				M = (e, t, s, n) => {
					const i = e.c,
						r = [],
						o = i.length;
					for (let l = 0; l < o; l++) {
						const e = i[l].c;
						e && e.length && r.push(a.a.createElement(d.g, {
							key: l
						}, e.map((e, n) => W(e, t, s, n))))
					}
					const c = e.o ? d.i : d.v;
					return a.a.createElement(c, {
						key: n
					}, r)
				},
				W = (e, t, s, n) => {
					switch (e.e) {
						case p.b:
							return R(e, t, s, n);
						case p.c:
							return B(e, n);
						case p.k:
							return I(e, s, n);
						case p.l:
							return L(n);
						case p.p:
							return M(e, t, s, n);
						case p.u:
							return F(e, t, s, n);
						case p.z:
							return D(e, t, s, n)
					}
				},
				D = (e, t, s, n) => {
					const i = e.c,
						r = e.h,
						o = i.length,
						c = r.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = r[d],
							{
								H: n,
								D: i
							} = G(e.a),
							{
								c: o = []
							} = e;
						l.push(a.a.createElement(n, {
							key: d
						}, H(o, t, s))), m[d] = i
					}
					for (let p = 0; p < o; p++) {
						const e = i[p],
							n = e.length,
							r = [];
						for (let i = 0; i < n; i++) {
							const n = m[i],
								{
									c: o = []
								} = e[i];
							r.push(a.a.createElement(n, {
								key: i
							}, H(o, t, s)))
						}
						u.push(a.a.createElement(d.t, {
							key: p
						}, r))
					}
					return a.a.createElement(d.n, {
						key: n
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, l)), a.a.createElement("tbody", null, u))
				},
				F = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(n);
					const i = e.c[0];
					return i.e !== p.m && i.e !== p.a || !Object(S.f)(i.id) ? a.a.createElement(d.j, {
						key: n
					}, H(e.c, t, s)) : Object(C.b)(i, n, t)
				},
				H = (e, t, s) => {
					const n = [],
						i = e.length;
					for (let r = 0; r < i; r++) {
						const i = e[r];
						if (i.e === p.A) n.push(U(i, r));
						else if (i.e === p.x) n.push(a.a.createElement(O.a, {
							key: r
						}, H(i.c, t, s)));
						else if (i.e === p.n) n.push(a.a.createElement("br", {
							key: r
						}));
						else if (i.e === p.m || i.e === p.a) {
							if (i.id.startsWith("emote|")) {
								const e = p.E(t, i.id);
								e && n.push(a.a.createElement(_, {
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
							if (Object(j.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let i, r;
							const o = Object(P.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(T.b)(c) && (i = c.postId), c && Object(N.b)(c) && (r = c.id, i = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: o,
								postId: i,
								commentId: r
							}, n);
						case p.y:
							return a.a.createElement(w.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(d.a, {
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
					const o = Object(n.a)(i);
					let a = 0,
						d = 0;
					const c = s.length;
					for (; a < c; a++) {
						const [e, t, n] = s[a], c = t + n, l = o[t], u = o[c] - l;
						l > d && r.push(z(0, i.substr(d, l - d), `between${a}`)), r.push(z(e, i.substr(l, u), a)), d = l + u
					}
					return d < i.length && r.push(z(0, i.substr(d), `remaining${a}`)), r
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
					return n = r()(V, (t, n, i) => e & parseInt(i, 10) ? a.a.createElement(n, {
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
				o = s.n(r),
				a = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				k = s("./src/reddit/helpers/name/index.ts"),
				v = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = s("./src/reddit/components/MiniCardPost/index.m.less"),
				C = s.n(_),
				O = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				w = s.n(O);
			const j = e => e.type === v.f.Spoiler,
				N = Object(h.t)();
			t.a = N(Object(g.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: r,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: g,
					shouldOpenPost: v,
					showSubredditMeta: _ = !0,
					showSubredditName: O,
					subredditOrProfile: N
				} = e, T = h && h.preview && h.preview.url || void 0, S = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", I = v && P || g && Object(a.a)("/search", {
					q: g.rawQuery,
					source: S
				}) || P, L = g ? g.subredditInfo && g.subredditInfo.icon : N && N.icon.url, R = g ? g.subredditInfo && g.subredditInfo.displayText : N && (N.displayText || N.name), B = h ? h.flair.filter(j) : [], M = h ? h.score : 0, W = h ? h.numComments : 0, D = h && h.isSponsored, F = Object(y.a)(e).body, H = `linear-gradient(\n      ${Object(i.g)(F,.2)},\n      ${Object(i.g)(F,.3)},\n      ${Object(i.g)(F,.4)},\n      ${Object(i.g)(F,.6)},\n      ${Object(i.g)(F,.8)},\n      ${F}\n    )`, A = o.a.createElement("div", {
					id: r,
					className: Object(d.a)(w.a.trendingPost, {
						[w.a["m-background"]]: !!T
					})
				}, o.a.createElement(x.a, {
					to: I
				}, o.a.createElement("div", {
					className: Object(d.a)(w.a.backgroundWrapper, C.a.backgroundWrapper, t),
					style: {
						background: Object(E.g)(Object(y.a)(e).body, T || Object(y.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": H
					}
				}, D && o.a.createElement("div", {
					className: w.a.promoted
				}, n.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), o.a.createElement("div", {
					className: Object(d.a)(w.a.innerContainer, C.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, o.a.createElement("h2", {
					className: h ? w.a.title : w.a.titleNoDescription
				}, e.title), h ? o.a.createElement("div", {
					className: Object(d.a)(w.a.description, s)
				}, B.length > 0 && o.a.createElement(m.a, {
					className: w.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : o.a.createElement("div", {
					className: w.a.spacer
				}), _ && L && R && o.a.createElement(f.a, {
					className: w.a.relatedSubredditMetaData,
					iconClassName: w.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: n.fbt._("{subredditName} and more", [n.fbt._param("subredditName", R)], {
						hk: "2YTyJf"
					})
				}), !_ && h && o.a.createElement("div", {
					className: w.a.metaLine
				}, O && R && o.a.createElement("span", {
					className: w.a.meta
				}, Object(k.c)(R)), o.a.createElement("span", {
					className: w.a.meta
				}, n.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [n.fbt._plural(M, "number", Object(u.b)(M))], {
					hk: "1Jm6il"
				})), o.a.createElement("span", {
					className: w.a.meta
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(W, "number", Object(u.b)(W))], {
					hk: "311aXY"
				})))))));
				return D ? o.a.createElement(p.a, {
					post: h
				}, A) : A
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
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
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(o.t)();
			t.a = m(Object(r.b)((e, {
				listingName: t,
				pageLayer: s
			}) => {
				const n = Object(a.b)(e, {
						listingName: t,
						pageLayer: s
					}),
					i = Object(c.A)(e) || Object(d.a)(e),
					r = Object(a.e)(e);
				return {
					canShowAd: n && !i,
					awaitingBrandSafetyCheck: !Object(a.c)(e),
					isAdsDisabled: i,
					viewIsUnsafe: r
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: s,
				pageLayer: n,
				...r
			}) => !t && e && n ? i.a.createElement(l.a, u({
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/components/SidebarFooter/index.m.less"),
				m = s.n(u);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = r.a.a("Link", m.a), h = Object(l.c)({
				isNavbarLikeMwebEnabled: c.a
			}), g = Object(o.b)(h), x = Object(d.t)({
				isFrontpage: d.y
			});
			t.a = x(g(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? i.a.createElement(a.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, i.a.createElement("div", {
				className: m.a.LinkContainer
			}, i.a.createElement("div", {
				className: m.a.Column
			}, i.a.createElement(b, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("User Agreement", null, {
				hk: "2RA6JL"
			})), i.a.createElement(b, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			}))), i.a.createElement("div", {
				className: m.a.Column
			}, i.a.createElement(b, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), i.a.createElement(b, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, p._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), i.a.createElement("div", {
				className: m.a.Copyright
			}, p._("© {year} Reddit, Inc. All rights reserved.", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : i.a.createElement(a.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, i.a.createElement("div", {
				className: m.a.LinkContainer
			}, i.a.createElement("div", {
				className: m.a.Column
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
				className: m.a.Column
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
				className: m.a.Copyright
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
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(u);
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
				}) => a.a.createElement("div", {
					className: Object(n.a)(e, m.a.container),
					style: s
				}, a.a.createElement(l.i, {
					className: m.a.button,
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

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = d.e[1] + 24,
				C = x.f + 8 + 152 + 16,
				O = C + _ + 8,
				w = E.a.div("Container", v.a),
				j = E.a.wrapped(({
					className: e,
					isOverlay: t,
					...s
				}) => a.a.createElement(h, y({
					className: e,
					isOverlay: t,
					style: {
						top: "calc(100vh - 8px)"
					}
				}, s)), "BackToTop", v.a),
				N = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: i
				}) => a.a.createElement("div", {
					className: Object(n.a)(t, {
						[v.a.StickyStyles]: i && !s,
						[v.a.StickyStylesFakeOverlay]: !!s
					})
				}, e);
			class T extends o.Component {
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
							pageLayer: o
						}
					} = this, d = this.state.isAdSticky && !(!t && !n);
					return a.a.createElement(w, {
						className: i,
						innerRef: this.setWrapperRef
					}, a.a.createElement(N, {
						isFakeOverlay: s,
						isSticky: d
					}, t, n, !r && a.a.createElement(g.a, null)), !this.props.hideBackToTop && a.a.createElement(j, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const S = Object(f.t)();
			t.a = S(T)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/ImageInput/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
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
					} = e, o = [s, k.a.inTopBar, k.a.iconContainer];
					return n ? o.push(k.a.emptyEditableIconInTopBar) : o.push(k.a.editableIcon, k.a.emptyEditableIcon), r.a.createElement("span", v({}, i, {
						className: Object(d.a)(...o)
					}), n ? r.a.createElement(h.a, {
						name: "upload",
						className: k.a.emptyUploadButton
					}) : r.a.createElement(h.a, {
						name: "add",
						className: k.a.emptyPlusButton
					}), e.children)
				},
				y = e => {
					const {
						iconColor: t,
						className: s,
						alt: n,
						role: i,
						onClick: o,
						inTopBar: a,
						src: c
					} = e;
					return r.a.createElement("span", {
						className: k.a.iconContainer
					}, r.a.createElement("img", {
						alt: n,
						onClick: o,
						role: i,
						src: c,
						className: Object(d.a)(s, {
							[k.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				_ = Object(a.c)({
					isLoading: x.b
				});
			class C extends r.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => r.a.createElement(u.a, {
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
					}), s = r.a.createElement(r.a.Fragment, null, r.a.createElement(y, v({
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
						return this.props.inTopBar && (e.push(k.a.loadingIconInTopBar), t = 32), r.a.createElement(m.a, {
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
			t.a = Object(o.b)(_, (e, t) => ({
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
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SubredditIcon/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = s.n(d);
			const l = r.a.wrapped(o.b, "SubredditIcon", c.a),
				u = r.a.wrapped(e => i.a.createElement(a.b, e), "S", c.a)
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
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => i.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, i.a.createElement(l.a, {
						href: `/r/${e}/`
					}, i.a.createElement("span", {
						className: m.a.subredditIconContainer
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
					return i.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const k = Object(b.c)(f),
				v = Object(o.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				E = Object(r.b)(v),
				y = ({
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
						case h.Od.SmIcon:
							return i.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: r
							});
						case h.Od.SmIconHc:
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
			t.b = E(y)
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
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				x = s("./src/lib/isFakeSubreddit/index.ts"),
				f = s("./src/reddit/components/IdCard/helpers.ts"),
				k = e => !Object(x.a)(e) || Object(f.c)(e) || Object(f.d)(e) || Object(f.e)(e),
				v = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				y = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				_ = s("./src/reddit/components/SidebarContainer/index.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				O = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				w = s("./src/lib/makeListingKey/index.ts"),
				j = s("./src/reddit/actions/subreddit.ts"),
				N = s("./src/lib/classNames/index.ts"),
				T = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				S = s("./src/reddit/controls/Button/index.tsx"),
				P = s("./src/reddit/helpers/name/index.ts"),
				I = s("./src/reddit/helpers/overlay/index.ts"),
				L = s("./src/reddit/selectors/experiments/topPosts.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				B = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const M = .99;
			class W extends a.a.Component {
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
					return a.a.createElement(B.a, {
						threshold: M,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var D = W,
				F = s("./src/lib/isUrl/index.ts"),
				H = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/FlairWrapper/index.tsx"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				V = s("./src/reddit/models/Flair/index.ts"),
				z = s("./src/reddit/models/Subreddit/index.ts"),
				G = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				J = s.n(G);
			const {
				fbt: q
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = e => e.type === V.f.Nsfw || e.type === V.f.Spoiler, Y = Object(c.c)({
				post: R.F,
				subredditOrProfile: R.S
			});
			class Z extends a.a.PureComponent {
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
					}, o = Object(F.a)(Object(U.b)(r)), d = t.flair.filter(K);
					return a.a.createElement("div", {
						className: Object(N.a)(J.a.container, e, {
							[J.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: J.a.mainLine
					}, o && a.a.createElement("div", {
						className: J.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(U.a, r)), a.a.createElement("div", {
						className: Object(N.a)(J.a.title, !o && J.a.titleSingle),
						title: t.title
					}, d.length > 0 && a.a.createElement(A.a, {
						className: J.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), a.a.createElement("div", {
						className: J.a.metaLine
					}, n && !!i && a.a.createElement("span", {
						className: J.a.meta
					}, Object(z.h)(i) ? Object(P.d)(i.displayText || i.name) : Object(P.c)(i.displayText || i.name)), a.a.createElement("span", {
						className: J.a.meta
					}, q._({
						"*": "{score} points",
						_1: "1 point"
					}, [q._plural(t.score, "score", Object(H.b)(t.score))], {
						hk: "1JZ0qm"
					})), a.a.createElement("span", {
						className: J.a.meta
					}, q._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [q._plural(t.numComments, "numComments", Object(H.b)(t.numComments))], {
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = 10, se = 2, ne = Object(c.a)(R.L, e => e.filter(e => !e.isSponsored)), ie = Object(c.c)({
				posts: (e, t) => ne(e, {
					...t
				})
			});
			class re extends a.a.Component {
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
						return a.a.createElement(D, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, a.a.createElement(X, {
							className: Object(N.a)($.a.smallPost, r),
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
						redditStyle: o,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === r.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(L.a)(c),
						p = Object(L.b)(c),
						b = m || p,
						h = r.slice(l * u, (l + 1) * u),
						[g, ...f] = h,
						k = b ? h.slice(0, se) : f.slice(0, se),
						v = b ? h.slice(se) : f.slice(se);
					return a.a.createElement("div", {
						className: Object(N.a)($.a.container, t, {
							[$.a.redditStyle]: o
						})
					}, !b && a.a.createElement(D, {
						onPostVisible: i,
						postId: g.id
					}, a.a.createElement(T.a, {
						postId: g.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(x.a)(Object(P.g)(s)),
						trendingPost: g
					})), k.map(this.renderSmallPost), e, v.map(this.renderSmallPost), d && a.a.createElement(S.o, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, n || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var oe = Object(d.b)(ie, e => ({
					openPost: t => e(Object(I.a)(t.permalink))
				}))(re),
				ae = s("./src/reddit/components/TrackingHelper/index.tsx"),
				de = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ce = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = s("./src/reddit/selectors/discoveryUnit.ts"),
				me = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = s.n(pe);
			const he = 10,
				ge = Object(c.a)((e, t) => t.subredditName, e => Object(w.a)(e, l.U.TOP, {
					t: l.bc.WEEK
				})),
				xe = Object(c.c)({
					discoveryUnit: e => Object(ue.c)(e, {
						unitName: le.j
					}),
					listingKey: ge,
					posts: (e, t) => {
						const s = ge(e, t);
						return Object(R.L)(e, {
							listingKey: s
						})
					},
					subreddit: me.y
				});
			class fe extends a.a.Component {
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
						subredditName: o,
						topPostsVariant: d
					} = this.props;
					if (0 === r.length) return null;
					const c = o,
						l = r.length > he;
					return a.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: n.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, a.a.createElement(oe, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: i,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, a.a.createElement("div", null, e)))
				}
			}
			var ke = Object(d.b)(xe, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(j.r)({
						sort: l.U.TOP,
						subredditName: t,
						t: l.bc.WEEK
					}))
				}))(Object(ae.c)(fe)),
				ve = s("./src/config.ts"),
				Ee = s("./src/lib/localStorageAvailable/index.ts"),
				ye = s("./src/reddit/actions/modal.ts"),
				_e = s("./src/higherOrderComponents/asModal/index.tsx"),
				Ce = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Oe = s("./src/reddit/controls/TextButton/index.tsx"),
				we = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Ne extends a.a.Component {
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(Ce.d, null, a.a.createElement(Ce.h, null, a.a.createElement(we.a, null, a.a.createElement(Ce.p, null, je._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), a.a.createElement(Oe.a, {
						onClick: e.toggleModal
					}, a.a.createElement(Ce.b, null)))), a.a.createElement(Ce.k, null, a.a.createElement(Ce.o, null, je._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), a.a.createElement(Ce.f, null, a.a.createElement(Ce.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, je._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(Ce.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, je._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var Te = Object(_e.a)(Ne),
				Se = s("./src/reddit/components/IdCard/Banner.tsx"),
				Pe = s("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Ie = s("./src/reddit/constants/blade.ts"),
				Le = s("./src/reddit/controls/InternalLink/index.tsx"),
				Re = s("./src/reddit/helpers/localStorage/index.ts"),
				Be = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				Me = s("./src/reddit/icons/fonts/index.tsx"),
				We = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				De = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Fe = s("./src/reddit/selectors/activeModalId.ts"),
				He = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ae = s("./src/reddit/selectors/structuredStyles.ts"),
				Ue = s("./src/reddit/components/IdCard/index.m.less"),
				Ve = s.n(Ue),
				ze = s("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				Ge = s.n(ze);
			const Je = "mod_onboarding_modal",
				qe = "mod_onboarding_widget",
				Ke = Object(c.a)(Fe.a, (e, t) => Object(He.b)(De.c.config)(e, {
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
			class Ye extends a.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(Re.Cb)(qe, !0, this.props.subredditId), this.props.sendEvent(Object(Be.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(Be.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(Be.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(Be.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(Be.d)("styling_generic_link"))
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
					} = this.props, r = e && !(t && s && n) && (!Object(Ee.a)() || !Object(Re.C)(qe, i));
					r !== this.state.visible && (this.setState({
						visible: r
					}), r && this.props.sendEvent(Object(Be.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: i,
						subredditName: r,
						toggleCloseMenuModal: o
					} = this.props;
					return this.state.visible ? a.a.createElement(de.a, {
						className: Object(N.a)(Ge.a.container, this.props.className)
					}, a.a.createElement(Se.a, {
						bannerBackgroundImage: `${ve.a.assetPath}/img/id-cards/mod-onboarding@2x.png`
					}), a.a.createElement(Me.a, {
						name: "close",
						className: Ge.a.closeIcon,
						onClick: o
					}), Object(Pe.a)({
						titleText: n.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(f.b)(`url('${ve.a.assetPath}/img/id-cards/snoo-artist@2x.png')`)
					}), a.a.createElement("div", {
						className: Object(N.a)(Ve.a.Description, Ge.a.description)
					}, n.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [n.fbt._param("=Customize Appearance Overview", a.a.createElement("a", {
						href: Ie.e.exportImport,
						className: Ge.a.modHelpLink,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), a.a.createElement(Le.a, {
						to: `/r/${r}?styling=true&route=${Ie.c.NameAndIcon}`,
						className: Ge.a.link,
						onClick: this.customizeIcon
					}, i ? a.a.createElement(We.a, {
						className: Ge.a.checked
					}) : a.a.createElement(We.a, {
						className: Ge.a.unchecked
					}), n.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), a.a.createElement(Le.a, {
						to: `/r/${r}?styling=true&route=${Ie.c.Banner}`,
						className: Ge.a.link,
						onClick: this.customizeBannerImage
					}, t ? a.a.createElement(We.a, {
						className: Ge.a.checked
					}) : a.a.createElement(We.a, {
						className: Ge.a.unchecked
					}), n.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), a.a.createElement(Le.a, {
						to: `/r/${r}?styling=true&route=${Ie.c.Global}`,
						className: Ge.a.link,
						onClick: this.customizeThemeColors
					}, s ? a.a.createElement(We.a, {
						className: Ge.a.checked
					}) : a.a.createElement(We.a, {
						className: Ge.a.unchecked
					}), n.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), a.a.createElement(S.n, {
						to: `/r/${r}?styling=true`,
						className: Ge.a.button,
						onClick: this.customizeAppearance
					}, n.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), a.a.createElement("div", {
						className: Ge.a.subtext
					}, n.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === Je && a.a.createElement(Te, {
						withOverlay: !0,
						toggleModal: o,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Ze = Object(d.b)(Ke, (e, {
					subredditId: t,
					subredditName: s
				}) => ({
					toggleCloseMenuModal: () => e(Object(ye.i)(Je))
				}))(Object(ae.c)(Ye)),
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
					const t = Object(ae.b)();
					return e.communities && e.communities.length ? a.a.createElement(C.a, null, a.a.createElement(Xe.b, {
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
				ot = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				at = s("./src/reddit/featureFlags/index.ts"),
				dt = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				ct = s("./src/reddit/models/Widgets/index.ts"),
				lt = s("./src/reddit/selectors/communityFlairs.ts"),
				ut = s("./src/reddit/selectors/experiments/econ/index.ts"),
				mt = s("./src/reddit/selectors/listings.ts"),
				pt = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				bt = s.n(pt);
			const ht = 250,
				gt = 270,
				xt = u.a.wrapped(_.a, "SidebarContainer", bt.a),
				ft = Object(c.c)({
					apiError: mt.c,
					apiPending: mt.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(lt.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(lt.c)(e, t),
					isPredictionsLeaderboardsEnabled: ut.p,
					showGovernance: at.d.spPoints,
					showLeaderboard: at.d.spLeaderboard,
					showPredictionsLeaderboard: (e, {
						subredditId: t
					}) => Object(me.L)(e, {
						subredditId: t
					}) && !Object(me.M)(e, {
						subredditId: t
					}),
					widgets: me.q
				}),
				kt = Object(d.b)(ft);
			class vt extends o.Component {
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
						isPredictionsLeaderboardsEnabled: t,
						listingName: s,
						showGovernance: n,
						showLeaderboard: i,
						showPredictionsLeaderboard: r,
						subredditId: o,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const x = Object(L.a)(c),
						f = Object(L.b)(c),
						_ = Object(L.c)(c),
						w = x || f;
					let j, N;
					!!this.getPostFlairWidget() ? j = this.props.widgets : (j = this.getCommunityWidgets(), N = this.makeFlairFilterWidget());
					const T = this.makeRelatedCommunitiesWidget(x, f),
						S = !x,
						P = f,
						I = a.a.createElement(y.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: s,
							placementIndex: u++,
							position: dt.a.FIRST,
							sizes: l.h
						});
					return a.a.createElement(xt, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, k(s) && a.a.createElement(g.a, {
						listingName: s
					}), a.a.createElement(p.a, {
						cardClassName: bt.a.card,
						subredditId: o
					}), a.a.createElement(E.a, {
						subredditId: o
					}), t && r && a.a.createElement(m.a, {
						subredditId: o
					}), w && a.a.createElement(C.a, null, a.a.createElement(ke, {
						subredditName: d,
						topPostsVariant: c
					}, a.a.createElement("div", {
						className: bt.a.inFeedAd
					}, I))), w && T && a.a.createElement(C.a, null, a.a.createElement(ot.a, {
						subredditName: d,
						truncateThreshold: gt,
						widget: T
					})), P && j.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(C.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(ot.a, {
							subredditName: d,
							truncateThreshold: ht,
							widget: e
						}))
					}), a.a.createElement(Ze, {
						subredditId: o,
						subredditName: d
					}), n && a.a.createElement(b.a, {
						className: bt.a.card,
						subredditId: o
					}), N && a.a.createElement(C.a, null, a.a.createElement(ot.a, {
						subredditName: d,
						widget: N
					})), i && a.a.createElement(h.a, {
						className: bt.a.card,
						subredditId: o,
						uniqueId: o
					}), a.a.createElement(v.g, {
						subredditId: o
					}), !w && I, a.a.createElement(rt, {
						subredditId: o
					}), S && !P && j.map((e, t) => {
						const s = "community-list" === e.kind;
						return a.a.createElement(C.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(ot.a, {
							subredditName: d,
							truncateThreshold: _ && s ? gt : _ ? ht : void 0,
							widget: e
						}))
					}), a.a.createElement(O.a, {
						adComponent: a.a.createElement(y.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: s,
							placementIndex: u++,
							position: dt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = kt(vt)
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
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
				o = ({
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
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(a);
			const c = r.a.div("WidgetBackground", d.a),
				l = r.a.wrapped(({
					children: e,
					...t
				}) => i.a.createElement("div", t, i.a.createElement(o.b, {
					type: o.a.Widget
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
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				m = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, s))
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
				y = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				C = s.n(_);

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
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(N, O({
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
				j = Object(d.c)({
					hideNSFWPref: E.B,
					nightmode: E.V
				}),
				N = Object(o.b)(j)(e => r.a.createElement("div", {
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
				}, r.a.createElement(a.a, {
					className: C.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(y.b)(e.name, e.type),
					to: Object(y.a)(e.name, e.type)
				}, Object(y.b)(e.name, e.type)), r.a.createElement("div", {
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
				}) : r.a.createElement(u.a, {
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
				return o
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				i = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
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
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(k.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(k.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = v(e);
					return Object(f.f)(t)
				},
				_ = e => {
					const t = E(e);
					return Object(f.f)(t)
				};
			var C = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = s.n(C);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.t)(), N = Object(r.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.m)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						i = Object(x.V)(e);
					return n || i
				},
				nigtmode: x.V,
				subredditId: u.m,
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = _(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: o,
						title: d,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, p = s ? O.a.widgetContentOnly : O.a.widgetContent, b = !n && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, g = b ? this.getWidgetHeaderStyles() : {};
					return i.a.createElement("div", {
						className: Object(a.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: n,
							[O.a.clickable]: !!o,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: o,
						style: h
					}, d && i.a.createElement("div", {
						className: O.a.widgetHeader,
						style: g
					}, i.a.createElement("div", {
						className: Object(a.a)(O.a.widgetTitle, l)
					}, i.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), i.a.createElement("div", {
						className: Object(a.a)(p, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && i.a.createElement(m.o, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, w._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(N(Object(d.a)(Object(l.c)(T))))
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				u = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
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
				y = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/selectors/subredditWiki.ts"),
				j = s("./node_modules/lodash/times.js"),
				N = s.n(j),
				T = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				S = s("./src/reddit/components/Wiki/RevisionsHistory/index.m.less"),
				P = s.n(S);
			var I = () => {
					const e = i.createElement("div", {
						className: Object(d.a)(P.a.loadingShimmer, Object(T.b)({
							isLoading: !0
						}))
					});
					return i.createElement("div", null, N()(4, t => i.createElement("div", {
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
			var B = s("./node_modules/lodash/noop.js"),
				M = s.n(B),
				W = s("./src/reddit/components/AuthorLink/index.tsx"),
				D = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				F = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
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
			const J = Object(a.c)({
				revision: w.n
			});
			class q extends r.a.Component {
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
						revision: o,
						subredditName: a
					} = this.props, c = o.page.name, l = o.isHidden, {
						expanded: u
					} = this.state, m = o.authorInfo && o.authorInfo.name, p = Object(y.a)({
						subredditName: a,
						wikiPageName: c
					}, s), b = v(p, {
						revision: o.id
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
					}, Object(F.b)(o)), i && r.a.createElement("td", {
						className: P.a.cellPage
					}, r.a.createElement(A.a, {
						className: P.a.wikiPageLink,
						title: `/${c}`,
						to: p
					}, x)), r.a.createElement("td", {
						className: P.a.cellUser
					}, m && r.a.createElement(D.a, {
						sendHoverCardEvent: M.a,
						tooltipId: `revision-${o.id}`,
						user: m
					}, r.a.createElement(W.a, {
						author: m,
						className: P.a.usernameLink
					}, m))), r.a.createElement("td", {
						className: P.a.cellReason
					}, r.a.createElement("div", {
						className: Object(d.a)(P.a.reasonTextWrapper, u ? P.a.mExpanded : null)
					}, r.a.createElement("div", {
						ref: this.reasonElementRef,
						className: P.a.reasonText
					}, o.reason), !u && r.a.createElement(h.g, {
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
			var K = Object(o.b)(J, e => ({
				toggleIsHidden: t => e(Object(l.b)(t))
			}))(q);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = Object(a.c)({
				hasError: w.o,
				hasWikiModPerms: (e, t) => {
					const s = Object(O.y)(e, t);
					return !!s && Object(C.i)(e, {
						subredditId: s.id
					})
				},
				isPending: w.q,
				isRevertConfirmationModalOpen: Object(_.b)("wiki-revert-confirmation"),
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
						isRecentRevisionsMode: o,
						isRevertConfirmationModalOpen: a,
						listingInfo: c,
						subredditName: l,
						wikiPageName: p
					} = this.props, {
						selectedRevisions: g
					} = this.state, x = c && c.ids || [], f = c && c.pageInfo.hasNextPage;
					let k = "",
						E = "#";
					p && (k = Object(y.a)({
						subredditName: l,
						wikiPageName: p
					}, s), 2 === g.length && (E = v(k, {
						revision: g[0],
						revisionToCompare: g[1]
					})));
					const _ = !o && t;
					return r.a.createElement("div", {
						ref: this.containerRef,
						className: Object(d.a)(P.a.container, {
							[P.a.mModHub]: s,
							[P.a.mShowActionButtons]: _
						})
					}, r.a.createElement(b.a, {
						buttonText: o ? void 0 : n.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: k,
						className: P.a.pageTitle,
						title: r.a.createElement("span", {
							className: P.a.pageTitleText
						}, o ? n.fbt._("Recent revisions", null, {
							hk: "VsZfq"
						}) : n.fbt._("Page history for {pageName}", [n.fbt._param("pageName", `/${p}`)], {
							hk: "y2LqH"
						}))
					}), r.a.createElement("div", {
						className: P.a.content
					}, !o && r.a.createElement("div", {
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
					}, r.a.createElement("thead", null, r.a.createElement("tr", null, !o && r.a.createElement("th", {
						className: P.a.colHeaderCheckbox
					}), r.a.createElement("th", {
						className: P.a.colHeaderTime
					}, n.fbt._("time", null, {
						hk: "231ZTq"
					})), o && r.a.createElement("th", {
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
					}, _ && r.a.createElement(r.a.Fragment, null, n.fbt._("Actions", null, {
						hk: "1V50p1"
					}), r.a.createElement(m.a, null, n.fbt._("View: View current version", null, {
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
					})), a && r.a.createElement(u.a, {
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
			const Q = Object(o.b)(Z, (e, t) => ({
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				u = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				p = s("./src/reddit/constants/wiki.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				g = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				x = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				k = s("./src/reddit/selectors/subredditWiki.ts"),
				v = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				E = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				y = s("./src/telemetry/models/Outbound.ts"),
				_ = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = s("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				O = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				w = s("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				j = s.n(w);
			const N = e => {
				const {
					item: t,
					subredditName: s,
					isModHub: n
				} = e, r = t.isPagePresent && Object(O.a)({
					subredditName: s,
					wikiPageName: t.path
				}, n);
				return i.createElement("li", null, r ? i.createElement(_.a, {
					className: j.a.link,
					to: r
				}, t.name) : i.createElement("span", null, t.name), !!t.children.length && i.createElement("ul", null, t.children.map(e => i.createElement(N, {
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
					} = e, o = Object(C.a)(r.pageTree || []);
					return i.createElement("div", {
						className: j.a.container
					}, i.createElement("h1", null, n.fbt._("Viewing pages for {subredditName}", [n.fbt._param("subredditName", s)], {
						hk: "1f0dHX"
					})), i.createElement("h2", null, n.fbt._("Below is a list of pages in this wiki visible to you in this subreddit.", null, {
						hk: "3ywypD"
					})), i.createElement("ul", null, o.map(e => i.createElement(N, {
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
					wikiDirectory: o,
					wikiPage: a,
					wikiPageName: c
				} = e;
				let l = null;
				return o && c === p.j ? l = r.a.createElement(T, {
					isModHub: s,
					subredditName: i,
					wikiDirectory: o
				}) : a && a.content && c === p.h ? l = r.a.createElement("div", {
					className: P.a.automodContent
				}, a.content.markdown) : a && a.content && (l = r.a.createElement(v.a, {
					className: P.a.wikiHtmlContent,
					html: a.content.html,
					sourceElement: y.SourceElement.Wiki
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
				})), l, n && a && a.revision && r.a.createElement("div", {
					className: P.a.revisionInfo
				}, r.a.createElement(E.a, {
					showTimeAgo: !0,
					isLastRevision: !0,
					revision: a.revision
				})))
			}
			var R = s("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				B = s.n(R);
			const M = Object(o.b)(() => Object(a.c)({
					pending: k.a,
					wikiDirectory: k.b,
					wikiPage: k.c
				})),
				W = Object(b.t)();
			class D extends i.Component {
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
						let e = m.f + 10;
						this.props.isModHub && (e += m.j + m.k);
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
						wikiDirectory: o,
						wikiPage: a,
						wikiPageName: d
					} = this.props, c = this.getWikiPageStatus(), m = d === p.i, b = this.props.isModHub ? `/r/${this.props.subredditName}/about/wiki` : `/r/${this.props.subredditName}/wiki`, h = `${b}/index`, k = m ? void 0 : n.fbt._("Wiki home", null, {
						hk: "1E1oVk"
					});
					if (t || !c) return i.createElement(u.a, {
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
							return !(!a || !a.content || a.content.markdown) ? i.createElement(l.a, {
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
								wikiDirectory: o,
								wikiPage: a,
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
									className: B.a.hideIcon
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
									className: B.a.hideIcon
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
						className: Object(d.a)(e, B.a.container)
					}, this.renderPageContents())
				}
			}
			t.a = W(M(Object(c.c)(D)))
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
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				c = s("./src/reddit/constants/wiki.ts"),
				l = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				u = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				m = s("./src/reddit/selectors/subredditWiki.ts"),
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
			const x = Object(o.c)({
					diffInfo: (e, t) => {
						const s = Object(l.a)(t);
						return Object(m.i)(e, {
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
						wikiPageName: o
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
					const m = Object(u.a)({
						subredditName: s,
						wikiPageName: o,
						wikiSubRoute: c.m.Revisions
					}, t);
					return i.createElement("div", {
						className: Object(a.a)(e, h.a.container, t ? h.a.mModHub : null)
					}, i.createElement(d.a, {
						buttonText: n.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: m,
						className: h.a.pageTitle,
						title: n.fbt._("Comparing revisions for /{pageName}", [n.fbt._param("pageName", o)], {
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./node_modules/react-router-redux/es/index.js"),
				u = s("./src/lib/makeActionCreator/index.ts"),
				m = s("./src/reddit/actions/pages/subredditWiki/index.ts"),
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
				y = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				C = s("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const O = Object(u.a)(C.a);
			var w = s("./src/reddit/components/BlockNavigation/index.tsx"),
				j = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				N = s("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				T = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				P = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				I = s("./src/reddit/contexts/NavbarExp.ts"),
				L = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				B = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				M = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				W = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/platform.ts"),
				F = s("./src/reddit/selectors/subredditWiki.ts"),
				H = s("./src/higherOrderComponents/asModal/index.tsx"),
				A = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				U = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				V = s("./src/reddit/controls/TextButton/index.tsx"),
				z = s("./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less"),
				G = s.n(z);
			class J extends r.a.PureComponent {
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
					}, r.a.createElement(A.h, {
						className: G.a.modalHeader
					}, r.a.createElement(A.p, null, n.fbt._("Add a reason for your revision", null, {
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
					}))), r.a.createElement(A.f, {
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
			var q = Object(H.a)(J),
				K = s("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				Y = s.n(K);
			const Z = "Discard-wiki-page-changes",
				X = "Add-wiki-revision-reason",
				Q = 2,
				$ = (e, t, s) => {
					const i = t.status,
						r = {
							[B.a.InvalidPageName]: n.fbt._("Page name is invalid", null, {
								hk: "3Ogzsc"
							}),
							[B.a.MaxLengthExceed]: n.fbt._("Page name must be shorter than {maxPageLen} characters", [n.fbt._param("maxPageLen", `${b.d}`)], {
								hk: "11HwWR"
							}),
							[B.a.PageAlreadyExists]: n.fbt._("Page with this name already exists", null, {
								hk: "3WRlhT"
							}),
							[B.a.RestrictedPageName]: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "BQtR2"
							})
						};
					if (e) {
						if (i === M.b.Valid) return r[B.a.PageAlreadyExists];
						if (i === M.b.PageNotFound) return n.fbt._("You do not have permission to create this page", null, {
							hk: "423aTf"
						});
						if (s) return r[s]
					} else if (i === M.b.Valid && !t.isRevisable) return n.fbt._("You do not have permission to edit this page", null, {
						hk: "1bUgsZ"
					})
				},
				ee = Object(a.c)({
					allowNavigationCallback: D.a,
					isRevisionReasonModalOpen: Object(W.b)(X),
					isSaveBeforeLeaveModalOpen: Object(W.b)(Z),
					wikiPage: F.c
				}),
				te = Object(o.b)(ee, (e, t) => ({
					onSaveWikiPage: (s, i) => e((({
						pageContent: e,
						wikiPageName: t,
						revisionReason: s,
						subredditName: i
					}) => async (r, o, a) => {
						const d = await k({
							context: a.apiContext(),
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
						})), await r(Object(m.fetchSubredditWikiData)({
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
								kind: y.b.Error,
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
							} = n.urlParams, i = Object(_.a)(n.url, {
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
							wikiPage: o,
							wikiPageName: a
						} = this.props, {
							disableBlocking: c,
							isSavePending: l,
							markdown: u
						} = this.state, m = o && o.content && o.content.markdown || "", p = !u.trim(), b = u !== m, h = t && o ? Object(B.b)(o.name) : void 0, g = !(!o || o.status !== M.b.PageNotCreated || h), x = !(!o || o.status !== M.b.Valid || !o.isRevisable), f = t ? g : x, k = f && b && !p && !l && !h;
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
						}, o ? f ? r.a.createElement(N.a, {
							autoFocus: !0,
							className: Y.a.resizableTextarea,
							disabled: l,
							onChange: this.onTextChange,
							placeholder: n.fbt._("Add page content here", null, {
								hk: "4fxFCc"
							}),
							value: u
						}) : r.a.createElement(S.a, {
							description: $(t, o, h),
							title: t ? n.fbt._('"{pageName}" cannot be created', [n.fbt._param("pageName", a)], {
								hk: "235tfC"
							}) : n.fbt._('"{pageName}" cannot be edited', [n.fbt._param("pageName", a)], {
								hk: "4qKJob"
							})
						}) : r.a.createElement(P.a, {
							paragraphsCount: Q
						})), s && r.a.createElement(q, {
							withOverlay: !0,
							onCancel: this.onCancelAddingRevisionReason,
							onSave: this.onSaveWithReason,
							isPending: l
						}), r.a.createElement(w.a, {
							blockOnBeforeUnload: !0,
							dialogId: Z,
							enabled: b && !c
						}), i && r.a.createElement(j.a, {
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
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				c = s("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				l = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				u = s("./src/reddit/constants/wiki.ts"),
				m = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				p = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				b = s("./src/reddit/selectors/subredditWiki.ts"),
				h = s("./src/reddit/components/Wiki/WikiPageSource/index.m.less"),
				g = s.n(h);
			const x = Object(o.c)({
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
						revisionId: o,
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
						v = !o,
						E = Object(m.a)({
							subredditName: b,
							wikiPageName: x,
							wikiSubRoute: v ? void 0 : u.m.Revisions
						}, t);
					return i.createElement("div", {
						className: Object(a.a)(e, g.a.container, t ? g.a.mModHub : null)
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
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/copyToClipboard/index.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				b = s("./src/reddit/constants/wiki.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/subredditWiki.ts"),
				E = s("./src/config.ts"),
				y = s("./src/reddit/components/OverflowMenu/index.tsx"),
				_ = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				w = s("./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less"),
				j = s.n(w);
			const N = ["right", "bottom"],
				T = ["right", "top"];
			class S extends o.a.Component {
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
						wikiPageName: a
					} = this.props, d = s ? `/r/${i}/about/wiki` : `/r/${i}/wiki`;
					return o.a.createElement(y.b, {
						className: Object(c.a)(e, j.a.container),
						dropdownClassName: j.a.dropdown,
						dropdownId: t,
						targetPosition: N,
						tooltipPosition: T
					}, r && o.a.createElement(C.b, {
						className: j.a.row,
						displayText: n.fbt._("View page history", null, {
							hk: "fy9yY"
						}),
						href: `${d}/revisions/${a}`
					}), r && o.a.createElement(C.b, {
						className: j.a.row,
						displayText: n.fbt._("View page source", null, {
							hk: "1d5vg5"
						}),
						href: `${d}/${a}?${_.C}`,
						onClick: this.onViewPageSourceClick
					}), s && o.a.createElement(C.b, {
						className: j.a.row,
						displayText: n.fbt._("View in community", null, {
							hk: "mSFod"
						}),
						href: `/r/${i}/wiki/${a}`
					}), o.a.createElement(C.b, {
						className: j.a.row,
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
						const s = Object(k.y)(e, t);
						return !!s && Object(f.i)(e, {
							subredditId: s.id
						})
					},
					wikiPage: v.c
				}),
				B = Object(a.b)(R, e => ({
					onCopyPageUrl: t => e((e => async t => {
						Object(l.a)(e) && t(Object(u.f)(Object(u.e)(n.fbt._("Copied page URL", null, {
							hk: "4qKWjj"
						}), x.b.SuccessCommunity)))
					})(t))
				}));
			class M extends o.a.Component {
				render() {
					const {
						hasWikiModPerms: e,
						isModHub: t,
						wikiPage: s,
						wikiPageName: r,
						subredditName: a,
						className: d
					} = this.props, l = !!s && s.status === g.b.Valid, u = !!s && s.isRevisable, m = e && u && l, x = t ? `/r/${a}/about/wiki/edit/${r}` : `/r/${a}/wiki/edit/${r}`;
					return o.a.createElement("div", {
						className: Object(c.a)(d, L.a.container)
					}, t && s && s.revision && o.a.createElement(p.a, {
						showTimeAgo: !0,
						className: L.a.revisionInfo,
						isLastRevision: !0,
						revision: s.revision
					}), o.a.createElement("div", {
						className: L.a.flexSpacer
					}), m && o.a.createElement(h.n, {
						className: L.a.button,
						to: `/r/${a}/about/wiki/settings/${r}`
					}, n.fbt._("Page settings", null, {
						hk: "2IAvWU"
					})), l && u && o.a.createElement(h.k, {
						className: L.a.button,
						to: Object(i.c)(x, {
							[b.a]: !0
						})
					}, n.fbt._("Edit", null, {
						hk: "1nftDt"
					})), l && o.a.createElement(P, {
						className: L.a.overflowMenu,
						dropdownId: `wikiPage-OverflowMenu-${r}-${t}`,
						isModHub: t,
						onCopyPageUrl: this.props.onCopyPageUrl,
						sendEvent: this.props.sendEvent,
						subredditName: a,
						wikiPage: s,
						wikiPageName: r
					}))
				}
			}
			t.a = B(Object(m.c)(M))
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
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				r = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less"),
				o = s.n(r);

			function a(e) {
				const {
					buttonLink: t,
					buttonText: s,
					description: r,
					icon: a,
					onButtonClick: d,
					title: c
				} = e;
				let l = null;
				return s && t ? l = n.createElement(i.k, {
					className: o.a.button,
					onClick: e.onButtonClick,
					to: t
				}, s) : s && d && (l = n.createElement(i.i, {
					className: o.a.button,
					onClick: e.onButtonClick
				}, s)), n.createElement("div", {
					className: o.a.container
				}, a, c && n.createElement("div", {
					className: o.a.title
				}, c), r && n.createElement("div", {
					className: o.a.description
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less"),
				c = s.n(d);
			const l = e => r.createElement("div", {
				className: Object(o.a)(e.className, Object(a.b)({
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
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/components/Wiki/common/PageTitle/index.m.less"),
				d = s.n(a);

			function c(e) {
				const {
					buttonLink: t,
					buttonText: s,
					className: n,
					title: a
				} = e;
				return i.a.createElement("div", {
					className: Object(r.a)(n, d.a.container)
				}, a, s && t && i.a.createElement(o.p, {
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
				return _
			}));
			var n = s("./node_modules/lodash/noop.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/timeAgo/index.ts"),
				u = s("./src/reddit/components/AuthorLink/index.tsx"),
				m = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/helpers/graphql/helpers.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/components/Wiki/common/RevisionInfo/index.m.less"),
				x = s.n(g);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = ["center", "top"], v = ["center", "bottom"], E = Object(a.a)(p.b), y = e => {
				const t = new Date(Object(b.e)(e.revisedAt));
				return Object(l.d)(t.valueOf() / 1e3)
			};
			class _ extends o.a.Component {
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
						showTooltip: a
					} = this.state, l = s.authorInfo && s.authorInfo.name || c.C, p = new Date(Object(b.e)(s.revisedAt)), g = o.a.createElement(m.a, {
						tooltipId: "wikipage-revision-author",
						user: l,
						sendHoverCardEvent: i.a
					}, o.a.createElement(u.a, {
						className: x.a.authorLink,
						author: l,
						isAuthorDeleted: Object(h.n)(l),
						isUnstyled: !0
					}, l));
					return o.a.createElement("span", {
						className: Object(d.a)(e, x.a.container)
					}, t ? f._("Last revised by {username}", [f._param("username", g)], {
						hk: "jNOhx"
					}) : f._("Revised by {username}", [f._param("username", g)], {
						hk: "2Q35rs"
					}), r && o.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", y(s), o.a.createElement(E, {
						text: p.toString(),
						isOpen: a,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: k,
						tooltipPosition: v
					})), n && s.reason && o.a.createElement("span", null, " - ", s.reason))
				}
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(i.c)({
				userIsSubscriber: o.eb
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
				o = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(i.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.T,
				hideNSFWPref: b.B,
				isActive: p.j,
				moderatorPermissions: u.k,
				modModeEnabled: c.R,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: n
				}) => e(Object(o.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: n
				})),
				handleVote: s => {
					const n = s === d.a.upvoted ? Object(r.bb)(t) : Object(r.u)(t);
					e(n)
				},
				onIgnoreReports: () => e(Object(r.X)(t)),
				onOpenReportsDropdown: t => e(Object(a.h)({
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
				o = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: s = 10
			}) => i.a.createElement("div", {
				className: Object(r.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				}
			})
		},
		"./src/reddit/helpers/dayAgoFormatDate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/humanizeUTCDate/index.tsx"),
				r = s("./src/lib/timeAgo/index.ts");
			t.a = (e, t) => {
				const s = (e => e - 8 * n.O / n.Nb)(e);
				return Object(r.c)(s) >= 1 ? Object(i.a)(s, t) : Object(r.d)(s, {
					locale: t
				})
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/RichTextJson/index.ts");
			const i = "giphy|",
				r = "|downsized";

			function o(e, t) {
				return i + e + (t ? r : "")
			}

			function a(e) {
				return e && 0 === e.indexOf(i)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(a)
			}

			function c(e) {
				let t = e.substring(i.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, s) => [...e, ...l(s, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, n.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === n.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/helpers/isComment.ts"),
				r = s("./src/reddit/helpers/isPost.ts"),
				o = s("./src/telemetry/models/Outbound.ts");
			const a = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(i.b)(e) || Object(r.b)(e))) return Object(i.b)(e) ? o.SourceElement.Comment : Object(n.w)(t) ? o.SourceElement.PostDetail : Object(n.E)(t) ? o.SourceElement.ListingPostDetail : void 0
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
				return o
			})), s.d(t, "e", (function() {
				return a
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
				o = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				a = e => e => ({
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
				return y
			}));
			var n, i, r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/isComment.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(i || (i = {}));
			const m = e => ({
					...u.defaults(e),
					source: i.LINK,
					action: r.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.defaults(e),
					source: i,
					screen: u.screen(e),
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
					if (!s || !Object(a.b)(s) && !Object(o.b)(s)) return {
						outbound: void 0
					};
					const i = Object(a.b)(s) ? "postId" : "commentId",
						r = {
							url: `/r/${n}/`,
							sourceElement: Object(d.a)(t),
							subredditName: n,
							[i]: s.id
						},
						c = Object(l.y)(e, {
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
					if (!s || !Object(a.b)(s) && !Object(o.b)(s)) return {};
					const n = Object(a.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.post(e, s.id),
						subreddit: u.subredditById(e, n),
						...b(e, t)
					}
				},
				g = e => t => ({
					...m(t),
					...h(t, e)
				}),
				x = e => t => ({
					...p(t),
					source: "global",
					action: r.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				f = (e, t) => s => ({
					...p(s),
					source: i.DISCOVERY_UNIT,
					action: r.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				k = (e, t) => s => ({
					...p(s),
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, i, r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(i || (i = {}));
			const a = (e, t) => s => ({
					source: i.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(o.widget)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...o.defaults
				}),
				d = (e, t) => s => ({
					source: i.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: o.post(s, e),
					subreddit: o.subreddit(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...o.defaults(s)
				}),
				c = () => e => ({
					source: i.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...o.defaults(e)
				}),
				l = e => t => ({
					source: i.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...o.defaults(t),
					topicMetadata: {
						displayName: e
					}
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(a);
			t.a = Object(r.a)(e => i.a.createElement("div", {
				className: Object(o.a)(d.a.expandedCenterContainer, e.className)
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
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/pages/shared.ts"),
				d = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = s("./src/reddit/components/ContentGate/index.tsx"),
				l = s("./src/reddit/components/HeaderImage/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var b = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, n = Object(m.a)(s, u.U.HOT, {});
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
				y = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				_ = s("./src/reddit/components/JumpToContent/index.tsx"),
				C = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				O = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				w = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				j = s.n(w);

			function N(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return n.createElement(n.Fragment, null, n.createElement(_.a, null), n.createElement(O.a, {
					isModHub: !1,
					className: j.a.topBar,
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
						wikiPageName: o
					} = s, a = n[f.A], d = n[f.B], c = f.C in n;
					switch (r) {
						case k.m.Create:
						case k.m.Edit:
							return i.a.createElement(g.a, {
								contentClassName: S.a.wikiPageEditorContent,
								isCreation: r === k.m.Create,
								subredditName: t,
								topBarClassName: S.a.communityWikiTopBar,
								wikiPageName: o
							});
						case k.m.Revisions:
							return i.a.createElement(y.a, {
								key: o,
								isRecentRevisionsMode: !o,
								subredditName: t,
								wikiPageName: o
							});
						default:
							return o && a && d ? i.a.createElement(h.a, {
								comparisonRevisionId: Object(E.a)(d),
								revisionId: Object(E.a)(a),
								subredditName: t,
								wikiPageName: o
							}) : o && (a || c) ? i.a.createElement(x.a, {
								revisionId: a ? Object(E.a)(a) : void 0,
								subredditName: t,
								wikiPageName: o
							}) : o ? i.a.createElement(N, {
								wikiPageName: o,
								subredditName: t
							}) : null
					}
				}
			}
			var I = Object(v.t)()(P),
				L = s("./src/reddit/constants/componentSizes.ts"),
				R = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				B = s("./src/reddit/layout/page/Listing/index.tsx"),
				M = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const D = Object(v.t)(),
				F = Object(r.b)(() => Object(o.c)({
					contentGateInfo: (e, {
						match: t
					}) => Object(W.e)(e, t.params.subredditName),
					layout: v.P,
					over18Pref: W.cb,
					subreddit: (e, {
						match: t
					}) => Object(M.y)(e, {
						subredditName: t.params.subredditName || k.e
					}),
					subredditName: (e, {
						match: t
					}) => t.params.subredditName || k.e,
					wikiPageName: (e, {
						match: t
					}) => t.params.wikiPageName || k.i
				}), e => ({
					onPageViewed: () => e(Object(a.a)())
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
					} = this.props, r = !!s && s.isNSFW && !W.cb, o = Object(R.a)(t, r, n);
					if (o) return i.a.createElement(c.default, o);
					const a = `/r/${n}/`;
					return i.a.createElement(B.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: L.i,
						navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : n,
							maxWidth: L.i,
							subredditOrProfile: s,
							url: a
						}), i.a.createElement(d.a, {
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: n,
							subredditUrl: a
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
			t.default = D(F(H))
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => n.Eb.Enabled === Object(i.c)(e, {
				experimentEligibilitySelector: r.J,
				experimentName: n.Db
			})
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			const a = e => i.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: n.Gd
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === n.Od.SmIcon || t === n.Od.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const s = Object(o.W)(e, {
						subredditName: t
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.2872bc390f32597751e0.js.map