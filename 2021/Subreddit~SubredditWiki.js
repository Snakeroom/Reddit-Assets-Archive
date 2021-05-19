// https://www.redditstatic.com/desktop2x/Subreddit~SubredditWiki.5b4bc86f2495837e70d5.js
// Retrieved at 5/19/2021, 7:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit~SubredditWiki", "reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(r(e, t), 1)
			}
		},
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(o);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: a
					} = e;
				return r.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[d.a.disable]: n,
						[d.a.active]: s,
						[d.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", d.a)
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(r.a)(a.w),
				f = Object(r.a)(a.x),
				x = Object(r.a)(a.v),
				g = (e, t, n) => async (s, r, i) => {
					const a = Object(p.A)(r(), {
						subredditName: e
					});
					if (a) return E(a, t, n)(s, r, i)
				}, C = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), E = (e, t, n) => async (r, a, p) => {
					const g = await Object(l.e)(t);
					r(h());
					const E = a();
					try {
						await Object(i.g)("communityIcon", g, e.id)(r, a, p)
					} catch (_) {
						return Object(b.a)(Object(c.c)(E, "something went wrong with the uploading the image")), r(Object(o.f)({
							kind: u.b.Error,
							text: C()
						})), void r(x())
					}
					const y = Object(m.c)(a(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(c.c)(E, "image is null")), r(Object(o.f)({
						kind: u.b.Error,
						text: C()
					})), void r(x());
					await Object(i.k)(e.id, {
						communityIcon: y
					}, d.b.idCard, n)(r, a, p), r(Object(o.f)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(f())
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				i = n("./node_modules/react-router-redux/es/index.js");
			const a = (e, t = !0) => async (n, a, {
				routes: o
			}) => {
				const d = a();
				Object(s.a)(e, o, d) ? n(Object(i.b)(e)) : t ? Object(r.d)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, n) {
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
				PlanetIcon: "_2mtjijx_N8XyA4fHqJJnc8",
				planetIcon: "_2mtjijx_N8XyA4fHqJJnc8",
				subscribeButton: "_2R2t7BzhdzT5QExBlp5Di0",
				hideButton: "_3lnzUjXBFhqkpfm2GDP6i",
				popupTooltip: "_2h6EM3mo5Qn9Eqm18v5Hiz"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				Planet: "ixfotyd9YXZz0LNAtJ25N",
				planet: "ixfotyd9YXZz0LNAtJ25N",
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
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./node_modules/fbt/lib/FbtPublic.js"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				m = n("./src/reddit/actions/subreddit/constants.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				h = n("./src/reddit/helpers/localStorage/index.ts"),
				f = n("./src/reddit/models/Subreddit/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts");
			const g = Object(u.a)(m.u),
				C = Object(u.a)(m.t),
				E = Object(u.a)(m.s);
			const y = (e, t) => async (n, s, {
				gqlContext: r
			}) => {
				var i, a, o, d;
				n(C());
				const c = s(),
					u = (e => {
						switch (e) {
							case f.b.FREQUENT:
								return {
									isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
								};
							case f.b.LOW:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
								};
							case f.b.OFF:
							default:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
								}
						}
					})(t),
					m = await Object(b.b)(r(), e, u);
				if ((null === (a = null === (i = m.error) || void 0 === i ? void 0 : i.fields) || void 0 === a ? void 0 : a.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(m.body) && (null === (o = m.body.data.updateSubredditNotificationSettings.errors) || void 0 === o ? void 0 : o.length)) return n(E()), n(Object(p.f)({
					kind: x.b.Error,
					text: l.fbt._("Sorry, you’ve encountered an error.", null, {
						hk: "4CcZhw"
					})
				}));
				m.ok && (n(g({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), n(Object(p.f)({
					kind: x.b.SuccessCommunityGreen,
					text: t === f.b.OFF ? l.fbt._("Unfollowed, You’ll no longer recieve updates", null, {
						hk: "3cvv2O"
					}) : l.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
						hk: "1fYEVg"
					})
				})), t === f.b.FREQUENT && Object(h.X)(null === (d = c.user.account) || void 0 === d ? void 0 : d.id, e))
			};
			var _ = n("./src/reddit/actions/subredditWelcomeMessage.ts"),
				v = n("./src/lib/combineRefs/index.tsx"),
				O = n("./src/reddit/components/CommonTooltip/index.m.less"),
				j = n.n(O);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var S = r.a.memo((function({
					visible: e,
					tooltipId: t,
					className: n,
					arrowClassName: i,
					...a
				}) {
					const [d, c] = Object(s.useState)(e);
					return Object(s.useEffect)(() => {
						let t = window.setTimeout(() => {
							t = void 0, c(e)
						}, 0);
						return () => {
							t && window.clearTimeout(t), c(!1)
						}
					}, [e]), e ? r.a.createElement("div", k({
						id: t,
						className: Object(o.a)(j.a.tooltip, n, {
							[j.a.visible]: d
						})
					}, a.popperProps), d && r.a.createElement(r.a.Fragment, null, a.arrowProps && r.a.createElement("div", k({
						className: Object(o.a)(j.a.arrow, i)
					}, a.arrowProps)), a.children)) : null
				})),
				w = n("./src/reddit/icons/fonts/index.tsx");
			var T = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M8 18C8 18.5304 8.21072 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20C10.5304 20 11.0391 19.7893 11.4142 19.4142C11.7893 19.0391 12 18.5304 12 18H8Z"
			}), r.a.createElement("path", {
				d: "M17.36 11C16.9898 10.7484 16.6868 10.41 16.4776 10.0143C16.2685 9.61854 16.1594 9.1776 16.16 8.72999V7.07999C16.16 5.44891 15.5121 3.88463 14.3587 2.73129C13.2054 1.57794 11.6411 0.929993 10.01 0.929993C8.37892 0.929993 6.81465 1.57794 5.6613 2.73129C4.50795 3.88463 3.86 5.44891 3.86 7.07999V8.70999C3.8617 9.16278 3.75115 9.60894 3.53826 10.0086C3.32536 10.4082 3.01674 10.7488 2.64 11C2.10136 11.3641 1.65957 11.8539 1.3529 12.4272C1.04622 13.0005 0.883909 13.6399 0.880005 14.29V15C0.887769 15.2927 1.00888 15.571 1.21781 15.7762C1.42674 15.9814 1.70717 16.0975 2 16.1H18C18.2928 16.0975 18.5733 15.9814 18.7822 15.7762C18.9911 15.571 19.1122 15.2927 19.12 15V14.32C19.121 13.6648 18.961 13.0194 18.6541 12.4405C18.3472 11.8616 17.9028 11.3669 17.36 11ZM17.88 14.87H2.12V14.31C2.11479 13.8549 2.2226 13.4056 2.43379 13.0024C2.64497 12.5993 2.95291 12.2548 3.33 12C3.87004 11.635 4.3127 11.1435 4.61944 10.5684C4.92619 9.99321 5.08773 9.35182 5.09 8.69999V7.07999C5.09 5.78043 5.60625 4.5341 6.52518 3.61517C7.44411 2.69624 8.69044 2.17999 9.99 2.17999C11.2896 2.17999 12.5359 2.69624 13.4548 3.61517C14.3738 4.5341 14.89 5.78043 14.89 7.07999V8.71999C14.8977 9.37022 15.0639 10.0088 15.3741 10.5803C15.6842 11.1518 16.129 11.6391 16.67 12C17.0415 12.2511 17.3459 12.5891 17.5568 12.9848C17.7677 13.3804 17.8786 13.8217 17.88 14.27V14.87Z"
			}));
			var I = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M8 18C8 18.5304 8.21072 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20C10.5304 20 11.0391 19.7893 11.4142 19.4142C11.7893 19.0391 12 18.5304 12 18H8Z"
			}), r.a.createElement("path", {
				d: "M17.36 11C16.9898 10.7484 16.6868 10.41 16.4776 10.0143C16.2685 9.61854 16.1594 9.1776 16.16 8.72999V7.07999C16.16 5.44891 15.5121 3.88463 14.3587 2.73129C13.2054 1.57794 11.6411 0.929993 10.01 0.929993C8.37892 0.929993 6.81465 1.57794 5.6613 2.73129C4.50795 3.88463 3.86 5.44891 3.86 7.07999V8.70999C3.8617 9.16278 3.75115 9.60894 3.53826 10.0086C3.32536 10.4082 3.01674 10.7488 2.64 11C2.10136 11.3641 1.65957 11.8539 1.3529 12.4272C1.04622 13.0005 0.883909 13.6399 0.880005 14.29V15C0.887769 15.2927 1.00888 15.571 1.21781 15.7762C1.42674 15.9814 1.70717 16.0975 2 16.1H18C18.2928 16.0975 18.5733 15.9814 18.7822 15.7762C18.9911 15.571 19.1122 15.2927 19.12 15V14.32C19.121 13.6648 18.961 13.0194 18.6541 12.4405C18.3472 11.8616 17.9028 11.3669 17.36 11Z"
			}));
			var P = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M10 20C9.4696 20 8.96089 19.7893 8.58582 19.4142C8.21074 19.0392 8.00003 18.5304 8.00003 18H12C12 18.5304 11.7893 19.0392 11.4142 19.4142C11.0392 19.7893 10.5305 20 10 20Z"
			}), r.a.createElement("path", {
				d: "M0.69003 9.87001C0.484486 9.08656 0.380302 8.27998 0.38003 7.47001C0.377155 6.2073 0.623936 4.95649 1.10618 3.78949C1.58842 2.62249 2.29662 1.56234 3.19003 0.670013L4.08003 1.55001C3.04289 2.57241 2.29486 3.85113 1.91197 5.25624C1.52907 6.66136 1.52496 8.14279 1.90003 9.55001L0.69003 9.87001Z"
			}), r.a.createElement("path", {
				d: "M19.31 9.87001L18.1 9.56001C18.4751 8.15279 18.471 6.67136 18.0881 5.26624C17.7052 3.86113 16.9572 2.58241 15.92 1.56001L16.81 0.680013C17.7034 1.57234 18.4116 2.63249 18.8939 3.79949C19.3761 4.96649 19.6229 6.21731 19.62 7.48001C19.6189 8.28663 19.5147 9.0898 19.31 9.87001Z"
			}), r.a.createElement("path", {
				d: "M18 16.1H2.00003C1.70719 16.0975 1.42676 15.9815 1.21783 15.7763C1.0089 15.5711 0.887794 15.2928 0.88003 15V14.32C0.879043 13.6648 1.03902 13.0194 1.34591 12.4405C1.6528 11.8616 2.09719 11.3669 2.64003 11C3.01025 10.7484 3.3132 10.41 3.52239 10.0143C3.73158 9.61856 3.84064 9.17762 3.84003 8.73001V7.08001C3.84003 5.44893 4.48798 3.88466 5.64132 2.73131C6.79467 1.57796 8.35895 0.930013 9.99003 0.930013C11.6211 0.930013 13.1854 1.57796 14.3387 2.73131C15.4921 3.88466 16.14 5.44893 16.14 7.08001V8.71001C16.1383 9.1628 16.2489 9.60896 16.4618 10.0086C16.6747 10.4082 16.9833 10.7488 17.36 11C17.9015 11.366 18.345 11.859 18.6518 12.4361C18.9586 13.0131 19.1194 13.6565 19.12 14.31V15C19.1123 15.2928 18.9912 15.5711 18.7822 15.7763C18.5733 15.9815 18.2929 16.0975 18 16.1ZM2.12003 14.85H17.88V14.29C17.8819 13.8383 17.7725 13.393 17.5615 12.9936C17.3505 12.5942 17.0443 12.253 16.67 12C16.13 11.635 15.6873 11.1435 15.3806 10.5684C15.0738 9.99323 14.9123 9.35184 14.91 8.70001V7.09001C14.91 6.44654 14.7833 5.80936 14.537 5.21486C14.2908 4.62037 13.9299 4.0802 13.4749 3.62519C13.0198 3.17018 12.4797 2.80925 11.8852 2.563C11.2907 2.31676 10.6535 2.19001 10.01 2.19001C9.36655 2.19001 8.72938 2.31676 8.13488 2.563C7.54039 2.80925 7.00021 3.17018 6.54521 3.62519C6.0902 4.0802 5.72927 4.62037 5.48302 5.21486C5.23677 5.80936 5.11003 6.44654 5.11003 7.09001V8.72001C5.10229 9.37024 4.93615 10.0088 4.62598 10.5803C4.31582 11.1519 3.87099 11.6392 3.33003 12C2.95858 12.2511 2.65415 12.5892 2.44325 12.9848C2.23236 13.3805 2.12139 13.8217 2.12003 14.27V14.85Z"
			}));
			var N = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M8.00004 18C8.00004 18.5305 8.21075 19.0392 8.58582 19.4142C8.9609 19.7893 9.4696 20 10 20C10.5305 20 11.0392 19.7893 11.4142 19.4142C11.7893 19.0392 12 18.5305 12 18H8.00004Z"
			}), r.a.createElement("path", {
				d: "M2.00004 7.47002C1.99724 6.42034 2.20261 5.38051 2.60426 4.4107C3.00592 3.4409 3.59589 2.56036 4.34004 1.82002L2.93004 0.400024C1.99827 1.32608 1.25952 2.42782 0.756569 3.64142C0.253622 4.85501 -0.00352089 6.15634 3.64097e-05 7.47002C-0.00114324 8.32416 0.109805 9.17476 0.330036 10L2.26004 9.50002C2.08831 8.83699 2.00095 8.15493 2.00004 7.47002Z"
			}), r.a.createElement("path", {
				d: "M17.07 0.400024L15.66 1.82002C16.4042 2.56036 16.9942 3.4409 17.3958 4.4107C17.7975 5.38051 18.0028 6.42034 18 7.47002C17.9966 8.14489 17.9093 8.81671 17.74 9.47003L19.67 9.97003C19.8877 9.15447 19.9986 8.31412 20 7.47002C20.0036 6.15634 19.7465 4.85501 19.2435 3.64142C18.7406 2.42782 18.0018 1.32608 17.07 0.400024Z"
			}), r.a.createElement("path", {
				d: "M17.36 11C16.9898 10.7484 16.6869 10.41 16.4777 10.0143C16.2685 9.61857 16.1594 9.17763 16.16 8.73002V7.08002C16.16 5.44894 15.5121 3.88467 14.3587 2.73132C13.2054 1.57797 11.6411 0.930024 10.01 0.930024C8.37895 0.930024 6.81468 1.57797 5.66133 2.73132C4.50798 3.88467 3.86004 5.44894 3.86004 7.08002V8.71002C3.86173 9.16282 3.75119 9.60897 3.53829 10.0086C3.32539 10.4082 3.01677 10.7488 2.64004 11C2.10139 11.3641 1.6596 11.854 1.35293 12.4272C1.04626 13.0005 0.88394 13.6399 0.880036 14.29V15C0.887801 15.2928 1.00891 15.5711 1.21784 15.7763C1.42677 15.9815 1.7072 16.0975 2.00004 16.1H18C18.2929 16.0975 18.5733 15.9815 18.7822 15.7763C18.9912 15.5711 19.1123 15.2928 19.12 15V14.32C19.121 13.6648 18.961 13.0194 18.6542 12.4405C18.3473 11.8616 17.9029 11.3669 17.36 11Z"
			}));
			var L = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M8.00006 18C8.00006 18.5304 8.21077 19.0391 8.58584 19.4142C8.96092 19.7893 9.46963 20 10.0001 20C10.5305 20 11.0392 19.7893 11.4143 19.4142C11.7893 19.0391 12.0001 18.5304 12.0001 18H8.00006Z"
			}), r.a.createElement("path", {
				d: "M10.0001 2.18C11.3005 2.18265 12.5468 2.70112 13.4655 3.62163C14.3841 4.54215 14.9001 5.78952 14.9001 7.09V8.72C14.9067 9.36933 15.0713 10.0073 15.3797 10.5787C15.6881 11.1502 16.1309 11.638 16.6701 12C17.0415 12.2511 17.3459 12.5892 17.5568 12.9848C17.7677 13.3804 17.8787 13.8217 17.8801 14.27V14.83H17.7601L18.7601 15.83C18.8833 15.7277 18.9822 15.5992 19.0497 15.4539C19.1171 15.3086 19.1514 15.1502 19.1501 14.99V14.31C19.1461 13.6538 18.9808 13.0086 18.6686 12.4314C18.3564 11.8541 17.907 11.3626 17.3601 11C16.9898 10.7484 16.6869 10.41 16.4777 10.0143C16.2685 9.61854 16.1595 9.1776 16.1601 8.73V7.08C16.1654 5.8599 15.8072 4.66587 15.131 3.65026C14.4548 2.63466 13.4914 1.84354 12.3636 1.37785C11.2359 0.91216 9.99497 0.793019 8.79922 1.03563C7.60347 1.27824 6.50712 1.8716 5.65006 2.74L6.54006 3.62C6.99277 3.16291 7.53173 2.80026 8.12567 2.55307C8.71962 2.30588 9.35673 2.17907 10.0001 2.18Z"
			}), r.a.createElement("path", {
				d: "M19.4401 18.56L1.44006 0.559998L0.560059 1.44L4.19006 5.08C3.96402 5.72253 3.84905 6.39886 3.85006 7.08V8.71C3.85285 9.16188 3.74383 9.60744 3.53272 10.007C3.3216 10.4065 3.01495 10.7477 2.64006 11C2.10141 11.3641 1.65962 11.8539 1.35295 12.4272C1.04628 13.0005 0.883963 13.6399 0.880059 14.29V15C0.887823 15.2927 1.00893 15.571 1.21786 15.7762C1.42679 15.9814 1.70722 16.0975 2.00006 16.1H15.2101L18.5601 19.44L19.4401 18.56ZM2.12006 14.85V14.29C2.11815 13.8383 2.22755 13.393 2.43859 12.9936C2.64962 12.5942 2.9558 12.253 3.33006 12C3.8701 11.635 4.31275 11.1435 4.61949 10.5684C4.92624 9.99322 5.08778 9.35182 5.09006 8.7V7.08C5.09463 6.74391 5.13146 6.40904 5.20006 6.08L14.0001 14.85H2.12006Z"
			}));
			var B = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M7.99998 18C7.99998 19.1 8.89997 20 9.99998 20C11.1 20 12 19.1 12 18H7.99998Z"
				}), r.a.createElement("path", {
					d: "M19.1 14.9V14.2C19.1 12.9 18.4 11.7 17.3 10.9C16.5 10.4 16.1 9.5 16.1 8.6V7.1C16.1 3.7 13.4 0.9 9.99998 0.9C8.29998 0.9 6.79998 1.6 5.59998 2.7L18.7 15.8C19 15.6 19.1 15.3 19.1 14.9Z"
				}), r.a.createElement("path", {
					d: "M19.4 18.5L1.39998 0.5L0.599976 1.4L4.19998 5C3.99998 5.7 3.79998 6.4 3.89998 7.1V8.7C3.89998 9.6 3.49998 10.5 2.69998 11C1.59998 11.7 0.999976 13 0.899976 14.3V15C0.899976 15.6 1.39998 16.1 1.99998 16.1H15.2L18.5 19.5L19.4 18.5Z"
				})),
				M = n("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				R = n.n(M);
			const F = c.a.wrapped(T, "NotificationIcon", R.a),
				D = c.a.wrapped(I, "NotificationIcon", R.a),
				A = c.a.wrapped(L, "NotificationIcon", R.a),
				U = c.a.wrapped(B, "NotificationIcon", R.a),
				H = c.a.wrapped(N, "NotificationIcon", R.a),
				V = c.a.wrapped(P, "NotificationIcon", R.a),
				W = (e, t) => e === f.b.FREQUENT ? t ? r.a.createElement(w.a, {
					name: "notification_frequent_fill"
				}) : r.a.createElement(H, null) : t ? r.a.createElement(w.a, {
					name: "notification_frequent"
				}) : r.a.createElement(V, null),
				q = (e, t) => e === f.b.LOW ? t ? r.a.createElement(w.a, {
					name: "notification_fill"
				}) : r.a.createElement(D, null) : t ? r.a.createElement(w.a, {
					name: "notification"
				}) : r.a.createElement(F, null),
				J = (e, t) => e === f.b.OFF ? t ? r.a.createElement(w.a, {
					name: "notification_off",
					isFilled: !0
				}) : r.a.createElement(U, null) : t ? r.a.createElement(w.a, {
					name: "notification_off"
				}) : r.a.createElement(A, null),
				G = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				K = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				},
				Y = {
					placement: "top"
				};
			var z = n("./src/reddit/controls/Dropdown/index.tsx"),
				Z = n("./src/reddit/controls/Dropdown/Row.tsx"),
				X = n("./src/reddit/hooks/useCoreStyleExperiments.ts");

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = c.a.wrapped(z.a, "StyledDropdown", R.a),
				ee = c.a.wrapped(Z.b, "DropdownRow", R.a);
			var te = e => {
					const t = Object(X.a)();
					return r.a.createElement($, {
						id: e.dropdownId,
						className: R.a.notificationDropdown
					}, [{
						displayText: l.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(f.b.FREQUENT),
						isSelected: e.notificationLevel === f.b.FREQUENT,
						icon: W(e.notificationLevel, t)
					}, {
						displayText: l.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(f.b.LOW),
						isSelected: e.notificationLevel === f.b.LOW,
						icon: q(e.notificationLevel, t)
					}, {
						displayText: l.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(f.b.OFF),
						isSelected: e.notificationLevel === f.b.OFF,
						icon: J(e.notificationLevel, t)
					}].map(e => r.a.createElement(ee, Q({
						iconWrapperClassName: R.a.notificationOverflowIconWrapper,
						className: Object(o.a)(R.a.notificationDropdown, R.a.notificationRow, {
							[R.a.isSelected]: e.isSelected
						}),
						key: e.displayText
					}, e), e.icon)))
				},
				ne = n("./src/reddit/controls/Button/index.tsx"),
				se = n("./src/reddit/selectors/telemetry.ts");
			const re = e => t => ({
				...se.defaults(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: se.subreddit(t)
			});
			var ie = n("./src/reddit/hooks/useTracking.ts"),
				ae = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx");

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var de = e => r.a.createElement("svg", oe({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}));
			const ce = c.a.wrapped(ae.a, "PlanetIcon", R.a),
				le = c.a.img("SubredditIcon", R.a),
				ue = c.a.wrapped(N, "NotificationIcon", R.a);
			var me = ({
					subredditName: e,
					shouldShowSubredditIcon: t,
					subredditIcon: n,
					onHide: s,
					onUpdate: i
				}) => {
					const a = Object(X.a)(),
						o = Object(ie.a)(),
						d = t ? r.a.createElement(le, {
							src: n || void 0
						}) : a ? r.a.createElement(de, {
							className: R.a.DefaultIcon
						}) : r.a.createElement(ce, null),
						c = `r/${e}`;
					return r.a.createElement("div", {
						className: R.a.notificationPopup
					}, r.a.createElement("div", {
						className: R.a.title
					}, r.a.createElement("h2", null, l.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), r.a.createElement("h3", null, l.fbt._("{subbredit name}", [l.fbt._param("subbredit name", c)], {
						hk: "3QhSOM"
					}))), r.a.createElement("div", {
						className: R.a.subredditWrapper
					}, r.a.createElement("div", {
						className: R.a.subbreditTitle
					}, d, r.a.createElement("span", null, c), a ? r.a.createElement(w.a, {
						name: "notification_frequent_fill",
						className: R.a.notificationIcon
					}) : r.a.createElement(ue, null)), r.a.createElement(ne.q, {
						className: R.a.subscribeButton,
						priority: ne.b.Primary,
						size: ne.c.M,
						text: l.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							s(), i(f.b.FREQUENT), o(re(f.b.FREQUENT.toLowerCase()))
						}
					})), r.a.createElement("button", {
						className: R.a.hideButton,
						onClick: s
					}, l.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				pe = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx");
			var be = ({
					arrowProps: e,
					popperProps: t,
					visible: n,
					subredditName: s
				}) => r.a.createElement(pe.a, {
					arrowProps: e,
					popperProps: t,
					visible: n
				}, r.a.createElement("div", {
					className: R.a.tooltipText
				}, r.a.createElement("p", null, l.fbt._("Love r/{subreddit name}?", [l.fbt._param("subreddit name", s)], {
					hk: "2ftUJw"
				})), r.a.createElement("p", null, l.fbt._("Get updates on it!", null, {
					hk: "XD60G"
				})))),
				he = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				fe = n("./src/reddit/hooks/useOnClickOutside.ts");
			var xe = n("./src/reddit/hooks/useTooltip.ts"),
				ge = n("./src/lib/localStorageAvailable/index.ts"),
				Ce = n("./src/reddit/constants/experiments.ts"),
				Ee = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ye = n("./src/reddit/selectors/experiments/utils.ts"),
				_e = n("./src/reddit/selectors/user.ts");
			const ve = e => (Object(_e.I)(e) || Object(_e.J)(e)) && Object(ge.a)(),
				Oe = Object(a.a)(e => Object(Ee.c)(e, {
					experimentName: Ce.U,
					experimentEligibilitySelector: ve
				}), ye.a),
				je = Object(a.a)(Oe, e => e === Ce.ac.ToolTip_nonSub),
				ke = Object(a.a)(Oe, e => e === Ce.ac.ToolTip_2ndVisit),
				Se = Object(a.a)(Oe, e => e === Ce.ac.ToolTip_3rdVisit),
				we = Object(a.a)(Oe, e => e === Ce.ac.HalfSheet_2ndVisit),
				Te = Object(a.a)(Oe, e => e === Ce.ac.HalfSheet_3rdVisit),
				Ie = Object(a.a)(we, Te, ke, Se, je, (e, t, n, s, r) => e || t || n || s || r);
			var Pe = e => {
					const t = Object(i.d)(),
						n = Object(X.a)(),
						a = Object(ie.a)(),
						o = Object(i.e)(we),
						d = Object(i.e)(Te),
						c = Object(i.e)(ke),
						l = Object(i.e)(Se),
						u = Object(i.e)(je),
						m = Object(xe.b)(G),
						p = Object(xe.b)(K),
						b = Object(he.a)(Y),
						[x, g] = function(e, t) {
							const [n, r] = Object(s.useState)(Object(h.J)(e, t));
							return [n, Object(s.useCallback)(() => {
								const n = Object(h.a)(e, t);
								r(n)
							}, [e, t, r])]
						}(e.userId, e.subredditId);
					Object(s.useEffect)(() => {
						e.notificationLevel !== f.b.LOW && e.notificationLevel !== f.b.OFF || g()
					}, [e.subredditId]);
					const C = o && 2 === x || d && 3 === x,
						E = c && 2 === x || l && 3 === x || u && e.showTooltipAfterSubscription,
						_ = () => {
							m.hide()
						},
						O = () => {
							p.hide()
						},
						j = () => {
							b.hide()
						};
					Object(s.useEffect)(() => (C && (p.update && p.update(), p.show()), E && (b.update && b.update(), b.show()), () => {
						O(), j(), _()
					}), [e.subredditName, C, E]);
					const k = () => {
							O(), j(), m.show()
						},
						T = (e => `dropdown-${e}`)(e.subredditName),
						I = (e => `popup-${e}`)(e.subredditName);
					Object(fe.a)(T, _);
					const P = Object(s.useCallback)(e => {
							e.stopPropagation(), m.visible ? _() : k()
						}, [_, k, m.visible]),
						N = Object(s.useCallback)(n => {
							_(), j(), O(), t(y(e.subredditId, n)), a(re(n.toLowerCase()))
						}, [_, e.subredditId, t, a, j, _]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						type: "button",
						className: R.a.notificationButton,
						ref: Object(v.a)(b.target.ref, m.target.ref, p.target.ref),
						onClick: P,
						"data-testid": "subredditNotificationButton"
					}, ((e, t) => {
						switch (e) {
							case f.b.FREQUENT:
								return t ? r.a.createElement(w.a, {
									name: "notification_frequent_fill",
									className: R.a.notificationIcon
								}) : r.a.createElement(H, null);
							case f.b.OFF:
								return t ? r.a.createElement(w.a, {
									name: "notification_off",
									className: R.a.notificationIcon
								}) : r.a.createElement(A, null);
							case f.b.LOW:
							default:
								return t ? r.a.createElement(w.a, {
									name: "notification",
									className: R.a.notificationIcon
								}) : r.a.createElement(F, null)
						}
					})(e.notificationLevel, n)), E && r.a.createElement(be, {
						arrowProps: b.arrowProps,
						popperProps: b.popperProps,
						visible: b.visible,
						subredditName: e.subredditName
					}), r.a.createElement(S, {
						popperProps: m.popperProps,
						visible: m.visible,
						tooltipId: T
					}, r.a.createElement(te, {
						dropdownId: T,
						notificationLevel: e.notificationLevel,
						onClick: N
					})), C && r.a.createElement(S, {
						arrowProps: p.arrowProps,
						popperProps: p.popperProps,
						visible: p.visible,
						tooltipId: I,
						className: R.a.popupTooltip
					}, r.a.createElement(me, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: O,
						onUpdate: N
					})))
				},
				Ne = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				Le = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				Be = n("./src/reddit/components/SubredditNav/index.tsx"),
				Me = n("./src/reddit/components/SubscribeButton/index.tsx"),
				Re = n("./src/reddit/constants/postLayout.ts"),
				Fe = n("./src/reddit/constants/posts.ts"),
				De = n("./src/reddit/featureFlags/index.ts"),
				Ae = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				Ue = n("./src/reddit/constants/tracking.ts");
			var He = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				Ve = n("./src/reddit/selectors/subreddit.ts"),
				We = n("./src/reddit/selectors/widgets.ts"),
				qe = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				Je = n.n(qe);
			const Ge = c.a.wrapped(ae.a, "Planet", Je.a),
				Ke = c.a.img("SubredditIcon", Je.a),
				Ye = Object(a.c)({
					isHighFrequencyEnabled: Ie,
					notificationLevel: Ve.H,
					spPollsEnabled: De.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(He.a)(e, {
						subredditId: t
					}),
					tournamentsEnabled: (e, {
						subredditId: t
					}) => !!t && Object(Ve.O)(e, {
						subredditId: t
					}),
					userId: _e.g,
					userIsSubscriber: (e, {
						subredditName: t
					}) => {
						const n = t;
						return Object(Ve.hb)(e, {
							identifier: {
								name: n,
								type: "subreddit"
							}
						})
					},
					widget: (e, {
						subredditId: t
					}) => t ? Object(We.f)(e, {
						subredditId: t
					}) : void 0
				});
			t.a = Object(i.b)(Ye, (e, t) => ({
				_onOpenWelcomeMessageModal: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(Object(_.d)(s))
				},
				_updateSubredditInfo: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(g({
						subredditAboutInfo: {
							[s]: {
								notificationLevel: f.b.LOW
							}
						}
					}))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				onOpenWelcomeMessageModal: () => !e.userIsSubscriber && t._onOpenWelcomeMessageModal(),
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(d.a)(e => {
				const t = Object(X.a)(),
					[n, i] = Object(s.useState)(!1),
					a = e.subreddit ? e.subreddit.id : e.subredditId,
					d = e.subreddit ? e.subreddit.name : e.subredditName,
					c = e.subreddit ? e.subreddit.url : e.subredditUrl,
					l = e.subreddit ? e.subreddit.title : "",
					u = e.subreddit && Object(Ae.a)(e),
					m = !(!e.theme || !u),
					p = e.isHighFrequencyEnabled && e.userIsSubscriber,
					b = d.charAt(0).toUpperCase() + d.slice(1),
					f = !!e.subreddit && e.subredditInlineEditingEnabled,
					x = Object(o.a)(Je.a.SubredditIcon, Je.a.editableIcon, {
						[Je.a.emptyEditableIcon]: !u
					}),
					g = r.a.createElement(Le.a, {
						className: x,
						subreddit: e.subreddit,
						iconUrl: u || void 0,
						inTopBar: !0
					}),
					C = m ? r.a.createElement(Ke, {
						src: u || void 0
					}) : t ? r.a.createElement(de, {
						className: Je.a.DefaultIcon
					}) : r.a.createElement(Ge, null),
					E = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					y = e.layout ? e.layout === Re.g.Large ? "984px" : "100%" : "1086px";
				Object(s.useEffect)(() => {
					n && i(!1)
				}, [a]);
				return r.a.createElement("div", {
					className: Je.a.container,
					style: {
						maxWidth: y
					}
				}, r.a.createElement("div", {
					className: Je.a.subredditMetaContainer
				}, f ? g : C, r.a.createElement("div", {
					className: Object(o.a)(Je.a.textContainer, {
						[Je.a.textContainerNoIcon]: !m
					})
				}, r.a.createElement("div", {
					className: Je.a.text
				}, r.a.createElement("h1", {
					className: Je.a.title
				}, l || b), !!l && r.a.createElement("h2", {
					className: Je.a.description
				}, "r/", d)), r.a.createElement("div", {
					className: Je.a.subscribeButtonContainer
				}, r.a.createElement(Me.a, {
					className: Je.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => ({
							...se.defaults(t),
							source: "id_banner",
							action: Ue.c.CLICK,
							noun: e,
							subreddit: se.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: d,
						type: Fe.a.SUBREDDIT
					},
					onClick: e.onOpenWelcomeMessageModal,
					small: !0,
					enableNotificationTooltipAfterSubscription: () => i(!0),
					afterUnsubscribeAction: () => {
						a && (Object(h.X)(e.userId, a), e.updateSubredditInfo())
					}
				})), p && a && e.notificationLevel && r.a.createElement("div", {
					className: Je.a.notificationButtonContainer
				}, r.a.createElement(Pe, {
					notificationLevel: e.notificationLevel,
					subredditName: d,
					subredditId: a,
					subredditIcon: u,
					shouldShowSubredditIcon: m,
					showTooltipAfterSubscription: n,
					userId: e.userId
				})), e.subreddit && r.a.createElement(Ne.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), E && r.a.createElement(Be.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: c,
					subredditId: a,
					subredditNavContainerClassName: Je.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
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
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
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
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
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
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				f = n.n(h);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = c.a.div("FooterContainer", f.a), C = c.a.div("UserAgreement", f.a), E = c.a.a("UserAgreementLink", f.a), y = c.a.a("PrivacyLink", f.a);
			var _ = () => i.a.createElement(g, null, i.a.createElement(C, null, x._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [x._param("=User Agreement", i.a.createElement(E, {
					href: `${s.a.redditUrl}/help/useragreement`
				}, x._("User Agreement", null, {
					hk: "2srkM2"
				}))), x._param("=Privacy Policy", i.a.createElement(y, {
					href: `${s.a.redditUrl}/help/privacypolicy`
				}, x._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), x._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				v = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				O = n("./src/reddit/components/RichTextJson/index.tsx"),
				j = n("./node_modules/lodash/flatMap.js"),
				k = n.n(j),
				S = n("./src/lib/linkMatchers/index.ts"),
				w = n("./src/lib/linkMatchers/customLinks.ts"),
				T = n("./src/reddit/controls/OutboundLink/index.tsx");
			const I = /\[(.+?)\]\((.+?)\)/g,
				P = e => {
					const t = e.split(I);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, i] = t.slice(s, s + 3);
						n.push(e), n.push([i, r])
					}
					return n
				};
			var N = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = k()(t, P)), e.parseRegularLinks && (t = k()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = S.f.add(w.g.subreddit.prefix, w.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return i.a.createElement(T.b, {
								className: e.linkClassName,
								href: s,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return i.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				L = n("./src/reddit/contexts/PageLayer/index.tsx"),
				B = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/chat/controls/Svg/index.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var F = e => i.a.createElement(M.a, R({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				D = n("./src/reddit/models/ContentGate.ts"),
				A = n("./src/lib/constants/index.ts"),
				U = n("./src/reddit/selectors/platform.ts"),
				H = n("./src/reddit/selectors/user.ts");
			var V = n("./src/reddit/selectors/meta.ts"),
				W = n("./src/reddit/components/ContentGate/index.m.less"),
				q = n.n(W);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = c.a.wrapped(F, "PrivateKey", q.a), K = c.a.div("ButtonsContainer", q.a), Y = c.a.div("Container", q.a), z = c.a.div("Description", q.a), Z = c.a.div("PrivateSubredditDetails", q.a), X = c.a.div("PrivateSubredditDescription", q.a), Q = c.a.h3("PrivateSubredditName", q.a), $ = c.a.a("Link", q.a), ee = c.a.wrapped(B.k, "LinkRouterButton", q.a), te = c.a.wrapped(B.j, "LinkButton", q.a), ne = c.a.wrapped(B.n, "SecondaryLinkRouterButton", q.a), se = c.a.wrapped(B.m, "SecondaryLinkButton", q.a), re = c.a.wrapped(ee, "GoHomeLinkButton", q.a), ie = c.a.img("Image", q.a), ae = c.a.img("ImagePlaceholder", q.a), oe = c.a.wrapped(ee, "LeftLinkRouterButton", q.a), de = c.a.wrapped(te, "LeftLinkButton", q.a), ce = c.a.wrapped(se, "SecondaryLeftLinkButton", q.a), le = c.a.wrapped(ne, "SecondaryLeftLinkRouterButton", q.a), ue = c.a.h3("Title", q.a), me = c.a.div("PageBody", q.a), pe = c.a.div("QuarantineMessageWrapper", q.a), be = Object(d.c)({
				isLoggedIn: H.I,
				origin: V.j,
				user: H.i,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(H.J)(e)) return !1;
					const t = Object(U.d)(e);
					if (!t) return !1;
					const n = Object(H.e)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const r = 30 * A.x;
					return s > Date.now() - r
				})(e)
			}), he = Object(L.t)(), fe = Object(a.b)(be, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.A(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), xe = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: a,
					isContributorRequestsDisabled: o,
					isPrivateSubredditContributorRequestPending: d,
					location: c,
					origin: m,
					pageLayer: h,
					quarantineRequiresEmail: f,
					quarantineMessage: x,
					quarantineMessageHtml: g,
					quarantineMessageRTJson: C,
					setNSFWPreference: E,
					subredditDescription: y,
					subredditName: _,
					user: j
				} = e, k = async () => {
					a ? await E() : await Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case D.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(ue, null, J._("r/{community name} is a Reddit Premium community", [J._param("community name", _)], {
							hk: "2lyDwB"
						})), i.a.createElement(z, null, J._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(K, null, j ? i.a.createElement(ce, {
							href: `${s.a.redditUrl}/premium`
						}, J._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(de, {
							href: Object(l.a)(c, m)
						}, J._("Sign Up", null, {
							hk: "rvpjy"
						})), j ? i.a.createElement(ee, {
							to: "/"
						}, J._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(se, {
							href: Object(l.a)(c, m)
						}, J._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case D.a.Nsfw:
					case D.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(ue, null, n === D.a.Nsfw ? J._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : J._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(z, null, J._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(K, null, i.a.createElement(oe, {
							to: "/"
						}, J._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(se, {
							onClick: k
						}, J._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case D.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(G, null), i.a.createElement(ue, null, "r/", _, " ", J._("is a private community", null, {
							hk: "7zZmq"
						})), y && y.length && i.a.createElement(Z, null, i.a.createElement(Q, null, "r/", _), i.a.createElement(X, null, i.a.createElement("div", null, y))), i.a.createElement(z, null, J._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", _, " ", J._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), J._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(K, null, j ? i.a.createElement(i.a.Fragment, null, !o && i.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: q.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), i.a.createElement(ce, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${_}`
						}, J._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(ce, {
							href: Object(l.a)(c, m)
						}, J._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(ee, {
							to: "/"
						}, J._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case D.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), i.a.createElement(ue, null, J._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(z, null, J._("This community is {=quarantined}", [J._param("=quarantined", i.a.createElement($, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, J._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(pe, null, C ? i.a.createElement(O.a, {
							content: C,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : g ? i.a.createElement(v.a, {
							html: g
						}) : x || J._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), J._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(K, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? i.a.createElement(K, null, i.a.createElement(le, {
								to: "/"
							}, J._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(te, {
								href: `${s.a.redditUrl}/prefs/update`
							}, J._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(K, null, i.a.createElement(oe, {
								to: "/"
							}, J._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(se, {
								onClick: t
							}, J._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(j, r, f)));
					case D.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(ue, null, J._("r/{community name} has been banned from Reddit", [J._param("community name", _)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(z, null, e ? i.a.createElement(N, {
							linkClassName: q.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : J._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(K, null, i.a.createElement(ee, {
							to: "/"
						}, J._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, J._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(K, null, i.a.createElement(ee, {
							to: "/"
						}, J._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ae, null), i.a.createElement(ue, null, J._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(z, null, J._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(K, null, j && i.a.createElement(b.a, {
							eventSource: "content_gate"
						}), i.a.createElement(re, {
							to: "/"
						}, J._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.ProfileDoesNotExist:
					case D.a.ProfileDeleted:
					case D.a.ProfileSuspended:
					case D.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case D.a.ProfileBlockedForLegalReason:
									return J._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case D.a.ProfileDeleted:
									return J._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case D.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, J._("This account has been {=suspended} .", [J._param("=suspended", i.a.createElement($, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, J._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case D.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(ue, null, J._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(z, null, J._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(K, null, i.a.createElement(re, {
							to: "/"
						}, J._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, J._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(K, null, i.a.createElement(re, {
							to: "/"
						}, J._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, J._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(K, null, i.a.createElement(ee, {
							to: "/"
						}, J._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = he(fe(Object(o.i)(e => i.a.createElement(Y, null, i.a.createElement("div", null, i.a.createElement(me, null, xe(e))), i.a.createElement(_, null)))))
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
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/getSrCreationEntrypointCopy.ts"),
				b = n("./src/reddit/helpers/overlay/index.ts"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				f = n("./src/reddit/selectors/experiments/srCreationEntrypoints.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				C = n.n(g),
				E = n("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				_ = E.a.wrapped(c.c, "StyledTooltip", C.a),
				v = Object(o.c)({
					isInSrCreationEntrypointBehaviorExperiment: f.c,
					isInSrCreationEntrypointCopyExperiment: f.d,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(x.gb)(e),
					userIsSuspended: x.O
				});
			t.a = Object(a.b)(v, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(h.c)(t)), e(Object(b.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: y
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				isInSrCreationEntrypointBehaviorExperiment: n,
				isInSrCreationEntrypointCopyExperiment: r,
				onShowTooltip: a,
				onHideTooltip: o,
				openCommunityCreation: d,
				sendEvent: c,
				userDoesNotHaveEnoughExpToCreateCommunity: l,
				userIsSuspended: b
			}) => i.a.createElement(m.q, {
				className: e,
				disabled: b || l,
				onClick: () => n === u.od.Tabs ? window.open("/subreddits/create", "_blank") : d(c),
				onMouseEnter: a,
				onMouseLeave: o,
				priority: m.b.Secondary,
				id: y,
				isFullWidth: !0
			}, Object(p.a)(r, s.fbt._("Create Community", null, {
				hk: "28v7Qq"
			})), l ? i.a.createElement(_, {
				caretOnTop: !0,
				tooltipId: y,
				text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : b ? i.a.createElement(_, {
				caretOnTop: !0,
				tooltipId: y,
				text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_23HWOAAvtr9XUARUICwS1l",
				button: "_1FQRn1pPshYj4hu7mq9APN",
				ChatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				chatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				headerButton: "VjmtSca9g92ay_XMP6rCV",
				buttonCaption: "_3iAPYhncpDFRVQFe9wprJs"
			}
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/downToChat.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				u = n("./src/reddit/selectors/downToChat.ts"),
				m = n("./src/reddit/selectors/experiments/downToChat.ts"),
				p = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				b = n.n(p);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = Object(a.c)({
				isDownToChatExperimentEnabled: m.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(u.c)(e, t.id)
			}), x = Object(i.b)(f, e => ({
				startChatting: t => e(Object(o.i)(t))
			}));
			t.a = x(Object(d.c)(e => {
				const {
					headerButton: t,
					isEnabled: n,
					isDownToChatExperimentEnabled: s
				} = e;
				if (!n || !s) return null;
				const i = h._("Start Chatting", null, {
					hk: "3KfdZ4"
				});
				return r.a.createElement(c.q, {
					className: b.a.button,
					text: i,
					Icon: t ? l.a : void 0,
					onClick: () => {
						const {
							startChatting: t,
							subreddit: n
						} = e;
						t(n.id)
					},
					redditStyle: !0
				})
			}))
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
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/IdCard/index.m.less"),
				a = n.n(i);
			const o = r.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return r.a.createElement("div", {
					className: a.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				i = n("./src/reddit/constants/listings.ts"),
				a = n("./src/reddit/constants/page.ts");
			const o = e => e && e.toLowerCase() === i.b.Popular,
				d = e => e && e.toLowerCase() === i.b.All,
				c = e => e && e === a.b,
				l = (e, t = 40, n = 68) => ({
					height: n,
					image: e,
					width: t
				}),
				u = ({
					listingName: e,
					subreddit: t,
					idCardWidget: n
				}) => {
					let a, u, m, p, b;
					const h = n && n.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						f = n && n.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let x, g;
					return c(e) ? (a = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = i.c[i.b.Home], u = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(e) ? (a = `${r.a.assetPath}/img/id-cards/banner@2x.png`, u = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = i.c[i.b.All]) : o(e) ? (a = `${r.a.assetPath}/img/id-cards/banner@2x.png`, u = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = i.c[i.b.Popular]) : e && (u = n && n.description, m = l(""), p = t.displayText, b = t.url, g = n && n.subscribersCount, x = n && n.currentlyViewingCount), {
						snooBackground: m,
						description: u,
						titleText: p,
						url: b,
						subscribersCount: g,
						subscribersText: h,
						currentlyViewingText: f,
						currentlyViewingCount: x,
						...a ? {
							bannerBackgroundImage: a
						} : {}
					}
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(a);
			const d = ({
				snooBackground: e
			}) => r.a.createElement("div", {
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
			}) => r.a.createElement("div", {
				className: Object(i.a)(o.a.Title, o.a.TitleShifted)
			}, r.a.createElement(d, {
				snooBackground: t
			}), r.a.createElement("div", {
				className: o.a.TitleTextShiftedContainer
			}, r.a.createElement("span", {
				className: o.a.TitleText
			}, e)))
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "i", (function() {
				return w
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
			const x = (e, t) => {
				const n = Object(h.a)(e, t),
					s = Object(f.J)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var g = Object(i.b)(() => Object(a.a)(x, b.j, (e, t) => ({
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
			const C = (e, t) => {
				const n = Object(h.a)(e, t),
					s = Object(f.J)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var E = Object(i.b)(() => Object(a.a)(C, e => e))(e => r.a.createElement(p, {
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
			var y = Object(i.b)(() => Object(a.c)({
					subreddit: f.U
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
			var v = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(_.a)(), i = Object(s.useMemo)(() => ({
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
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: i
				})
			};
			var O = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: i
				} = Object(_.a)(), a = Object(s.useMemo)(() => ({
					author: t.author,
					isModerator: i,
					post: {
						id: t.id
					},
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {}
				}), [t, n, i]);
				return r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: a
				})
			};
			var j = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(_.a)(), i = Object(s.useMemo)(() => ({
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
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: i
				})
			};
			var k = Object(i.b)(() => Object(a.c)({
				subreddit: f.U
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
			var S = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.M)(e, {
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
			var w = Object(i.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.U)(e, {
					subredditId: t
				}) : null
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
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(i.b)(() => Object(a.c)({
					isNightmodeOn: m.V
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(o.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return w
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/helpers/trackers/ads.ts"),
				x = n("./src/reddit/hooks/useClickSourceData.ts"),
				g = n("./src/reddit/models/Media/index.ts"),
				C = n("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				E = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/constants/tracking.ts"),
				O = n("./src/reddit/components/Media/blurredContent.ts"),
				j = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				k = n.n(j);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => e > 2 * g.e,
				T = e => {
					const t = Object(c.a)(k.a.image, b.g, e.className, {
							[k.a.mShowCentered]: e.showCentered,
							[k.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${g.j}px`), e.isListing || e.isTall && w(e.height) || (n.maxHeight = `${g.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), i.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				I = e => {
					const t = {};
					return (!e.showFull && Object(g.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${g.j}px`, e.shouldBlur && (t.maxWidth = Object(g.I)(e.height, e.width) ? `${g.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(k.a.container, e.className),
						style: t
					}, e.children)
				},
				P = Object(a.b)(() => Object(d.a)(E.E, _.bb, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(E.b)(e, n) : null, C.a, y.actionInfo, E.F, (e, t, n, s, r, i) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					sendGoodVisitEvent: s,
					pageType: r.pageType,
					post: i
				})));
			t.a = P(e => {
				const t = e.sendGoodVisitEvent ? Object(x.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(h.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.id && Object(f.a)(e.post, e.pageType)
					}
				}, L(e)) : e.isListing && e.postPermalink ? i.a.createElement(o.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink)
				}, L(e)) : L(e)
			});
			const N = (e, t) => i.a.createElement(T, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[v.a]: !e
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
					const n = Object(g.I)(t.height, t.width),
						r = w(t.height) && n;
					return i.a.createElement(I, S({}, t, {
						className: `${n?`${v.a} `:""}${t.className||""}`
					}), t.isListing ? i.a.createElement("div", {
						className: t.contentImageClassName
					}, N(n, t)) : i.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, N(n, t)), t.isListing && !t.showFull && t.height > g.j && Object(g.I)(t.height, t.width) && i.a.createElement("div", {
						className: k.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && i.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && i.a.createElement("div", {
						className: k.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: k.a.unblurButton
					}, Object(O.a)(!!t.isNSFW, !!t.isSpoiler))))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/forceHttps/index.ts"),
				o = n("./src/reddit/models/Media/index.ts"),
				d = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = n.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < o.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
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
					s = e.blurSrc ? r.a.createElement("img", {
						className: c.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					d = Object(o.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), r.a.createElement("div", {
					className: Object(i.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const h = 100,
				f = h / 2 / 1e3;
			var x = n("./src/lib/forceHttps/index.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class C extends a.a.Component {
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
						let n = !1,
							s = !1;
						const r = () => n = !0,
							i = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", i), e.addEventListener("playing", i);
						let a = !1,
							o = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(o = d);
							if (e.paused || e.seeking || !n) return void(o = d);
							const r = a;
							4 === e.readyState ? a = !1 : !a && d >= o && d < o + f ? a = !0 : a && d >= o && d > o + f && (a = !1), o = d, r !== a && t(a)
						}, h);
						return () => {
							clearInterval(c), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", r)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: n,
						onBufferingChange: s,
						shouldLoad: r,
						shouldPause: i,
						showCentered: o,
						showFull: d,
						source: c,
						...l
					} = this.props;
					return a.a.createElement("video", g({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), a.a.createElement("source", {
						src: Object(x.a)(this.props.source || "")
					}))
				}
			}
			var E = C,
				y = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				_ = n.n(y);
			const v = Object(d.c)({
					autoplayPref: p.b,
					consumed: b.a,
					loadTimes: b.f,
					metadata: b.h,
					started: b.k
				}),
				O = Object(o.b)(v, (e, {
					postId: t
				}) => ({
					onBufferingChanged: n => {
						e(n ? l.r(t) : l.E(t))
					},
					onLoadStarted: n => e(l.q(t, n)),
					onMetadataReceived: n => e(l.D({
						metadata: n,
						postId: t
					})),
					onPaused: () => e(l.z({
						postId: t
					})),
					onPlayable: n => e(l.A(t, n)),
					onPlaying: () => e(l.C(t)),
					onWatched: () => e(l.s(t)),
					onViewableImpression: () => e(l.x(t)),
					onFullyViewableImpression: () => e(l.u(t)),
					onPlayedWithSound: () => e(l.B(!1, t)),
					onWatchedPercent: n => e(l.N(n, t))
				}));
			class j extends a.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = r()(e => {
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
						} = this.props, n = {};
						return e && (n.margin = "0 auto"), t || (n.maxHeight = `${m.e}px`), a.a.createElement(E, {
							autoplay: this.props.autoplayPref,
							className: Object(c.a)(u.a, _.a.styledVideo),
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
							style: n,
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
			t.a = O(j)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? s.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? s.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
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
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
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
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				b = d.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: {
						...e.style,
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					}
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(o.a)(b))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				C = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => i.a.createElement(g, p({}, n, {
					className: Object(a.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				E = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [o.a.Click, o.a.Keydown]);
			class y extends i.a.Component {
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
					return i.a.createElement(C, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(f, null, i.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(E, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = y
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "p", (function() {
				return w
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "w", (function() {
				return B
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/components/RichTextJson/elements.m.less"),
				o = n.n(a),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = [d.a.div("H1", o.a), d.a.div("H2", o.a), d.a.div("H3", o.a), d.a.div("H4", o.a), d.a.div("H5", o.a), d.a.div("H6", o.a)],
				m = d.a.hr("Hr", o.a),
				p = d.a.code("M", o.a),
				b = d.a.pre("Pre", o.a),
				h = d.a.blockquote("Blockquote", o.a),
				f = d.a.p("P", o.a),
				x = d.a.li("Li", o.a),
				g = d.a.ul("Ul", o.a),
				C = d.a.ol("Ol", o.a),
				E = d.a.strong("B", o.a),
				y = d.a.em("I", o.a),
				_ = d.a.span("U", o.a),
				v = e => r.a.createElement("del", e),
				O = d.a.sub("Sub", o.a),
				j = d.a.sup("Sup", o.a),
				k = d.a.table("Table", o.a),
				S = d.a.tr("Tr", o.a),
				w = d.a.td("Tdl", o.a),
				T = d.a.td("Tdc", o.a),
				I = d.a.td("Tdr", o.a),
				P = d.a.th("Thl", o.a),
				N = d.a.th("Thc", o.a),
				L = (d.a.th("Thr", o.a), d.a.wrapped(e => r.a.createElement(i.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "A", o.a)),
				B = d.a.wrapped(c.a, "A", o.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/blurredContent.ts"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				g = n.n(x);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = n("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				y = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => a.a.createElement(E, C({}, n, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				_ = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				v = e => r()(e, _),
				O = e => e.findIndex(_),
				j = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: i,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: x,
						useExplicitTextColor: C,
						shouldBlur: _
					} = e, j = s.document, k = [], S = e.mediaMetadata || null, w = O(j), T = v(j);
					if (_ && !r) return a.a.createElement(E, {
						className: Object(o.a)(u.j, n)
					}, a.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: c
					}, Object(l.a)(!!i, !!d))));
					if (-1 !== w)
						for (let a = w; a <= T; a++) {
							const e = j[a];
							switch (e.e) {
								case b.k:
									k.push(f.c(e, x, a));
									break;
								case b.l:
									k.push(f.d(a));
									break;
								case b.b:
									k.push(f.a(e, S, x, a));
									break;
								case b.c:
									k.push(f.b(e, a));
									break;
								case b.p:
									k.push(f.f(e, S, x, a));
									break;
								case b.z:
									k.push(f.h(e, S, x, a));
									break;
								case b.u:
									k.push(f.g(e, S, x, a));
									break;
								case b.h:
									k.push(Object(h.a)(e, a));
									break;
								case b.m:
								case b.a:
								case b.D:
									k.push(...Object(h.b)(e, a, S, p, m, t))
							}
						}
					return C ? a.a.createElement(E, {
						className: Object(o.a)(u.j, n)
					}, k) : a.a.createElement(y, {
						className: Object(o.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, k)
				};
			class k extends a.a.Component {
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
						return j(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/elements.tsx"),
				f = n("./src/reddit/components/RichTextJson/media.m.less"),
				x = n.n(f),
				g = n("./src/lib/lessComponent.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = /\/(\w+)\/asset\/(\w+)\//,
				y = g.a.wrapped(h.a, "A", x.a),
				_ = g.a.wrapped(l.a, "ImageBox", x.a),
				v = g.a.wrapped(e => i.a.createElement("p", e), "Caption", x.a),
				O = g.a.div("Placeholder", x.a),
				j = g.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const r = t === b.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return i.a.createElement(O, C({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, n))
				}, "Placeholder", x.a),
				k = ({
					c: e,
					x: t,
					y: n
				}, s) => i.a.createElement("div", {
					className: x.a.MediaWrapper
				}, i.a.createElement(u.a, {
					height: n,
					isListing: !1,
					key: s,
					showCentered: !0,
					showFull: !0,
					width: t
				}, i.a.createElement(c.a, {
					isListing: !1,
					source: e,
					height: n,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				S = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === b.s ? r = n.s.u : n.e === b.r ? r = n.s.gif : n.e === b.t && (r = (e => {
						const t = E.exec(e);
						return t ? `${o.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? i.a.createElement(y, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				w = (e, t, n, s, r, o) => {
					const c = b.E(n, e.id);
					if (s) return [S(e, t, c)];
					const l = [];
					return c ? c.e === b.s ? l.push((({
						id: e,
						s: t
					}, n, s, r) => i.a.createElement("div", {
						className: Object(a.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: s
						})
					}, i.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, i.a.createElement(_, {
						altText: r,
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
						s: n
					}, s, r) => {
						if (Object(p.f)(e)) {
							const o = t || Object(p.e)(e);
							return i.a.createElement("div", {
								className: Object(a.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: r
								})
							}, i.a.createElement(y, {
								href: o,
								key: s,
								target: "_blank"
							}, n.mp4 ? i.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: n.mp4
							})) : {
								originalSource: o
							}))
						}
						return i.a.createElement("div", {
							className: Object(a.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: r
							})
						}, i.a.createElement(u.a, {
							height: n.y,
							isListing: !1,
							key: s,
							showCentered: !0,
							showFull: !0,
							width: n.x
						}, i.a.createElement(m.a, {
							height: n.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: n.mp4,
							width: n.x,
							postId: e,
							source: n.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(c, t, !!e.c)) : c.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: s,
						isGif: r
					}, o, c, l) => i.a.createElement("div", {
						className: Object(a.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: c
						})
					}, i.a.createElement(u.a, {
						height: s,
						isListing: !1,
						isVideo: !0,
						key: o,
						showCentered: !0,
						showFull: !0,
						width: n
					}, i.a.createElement(d.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: r,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: r
					}))))(c, t, !!e.c, r)) : l.push(((e, t) => i.a.createElement(j, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => i.a.createElement(v, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return T
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "e", (function() {
				return D
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/v4.js"),
				l = n.n(c),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(x);
			const C = 1e3,
				E = 1e3;
			var y;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(y || (y = {}));
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = y.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = y.Inside, setTimeout(() => {
							this.mouseLocation === y.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, C)
					}, this.onMouseOut = () => {
						this.mouseLocation = y.Outside, setTimeout(() => {
							this.mouseLocation !== y.Inside && this.setState({
								tooltipOpen: !1
							})
						}, E)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = b.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
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
					let n, s, r;
					t.e === p.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const i = this.state.tooltipOpen ? l()() : void 0;
					return r ? o.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, o.a.createElement("img", {
						id: i,
						src: r,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && o.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: i,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var v = Object(u.c)(_),
				O = n("./src/reddit/components/RichTextJson/media.tsx"),
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				k = n("./src/reddit/components/SubredditMention/index.tsx"),
				S = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				w = n("./src/reddit/helpers/richTextJson/index.ts");
			const T = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						i = [],
						a = s.length;
					for (let o = 0; o < a; o++) {
						const e = s[o];
						i.push(e.e === p.w ? e.t : D(e, t, o))
					}
					const c = d.x[r - 1];
					return o.a.createElement(c, {
						key: n
					}, i)
				},
				I = e => o.a.createElement(d.e, {
					key: e
				}),
				P = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const i = r.length,
						a = [];
					for (let o = 0; o < i; o++) a.push(B(r[o], t, n, o));
					return o.a.createElement(d.c, {
						key: s
					}, a)
				},
				N = (e, t) => {
					const n = e.c;
					return o.a.createElement(d.k, {
						key: t
					}, o.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				L = (e, t, {
					renderingObjectInfo: n
				}, s) => {
					const r = e.c,
						i = [],
						a = r.length;
					for (let l = 0; l < a; l++) {
						const e = r[l].c;
						e && e.length && i.push(o.a.createElement(d.g, {
							key: l
						}, e.map((e, s) => B(e, t, {
							renderingObjectInfo: n
						}, s))))
					}
					const c = e.o ? d.i : d.v;
					return o.a.createElement(c, {
						key: s
					}, i)
				},
				B = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return P(e, t, n, s);
						case p.c:
							return N(e, s);
						case p.k:
							return T(e, n, s);
						case p.l:
							return I(s);
						case p.p:
							return L(e, t, n, s);
						case p.u:
							return R(e, t, n, s);
						case p.z:
							return M(e, t, n, s)
					}
				},
				M = (e, t, n, s) => {
					const r = e.c,
						i = e.h,
						a = r.length,
						c = i.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = i[d],
							{
								H: s,
								D: r
							} = V(e.a),
							{
								c: a = []
							} = e;
						l.push(o.a.createElement(s, {
							key: d
						}, F(a, t, n))), m[d] = r
					}
					for (let p = 0; p < a; p++) {
						const e = r[p],
							s = e.length,
							i = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: a = []
								} = e[r];
							i.push(o.a.createElement(s, {
								key: r
							}, F(a, t, n)))
						}
						u.push(o.a.createElement(d.t, {
							key: p
						}, i))
					}
					return o.a.createElement(d.n, {
						key: s
					}, o.a.createElement("thead", null, o.a.createElement(d.t, null, l)), o.a.createElement("tbody", null, u))
				},
				R = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => o.a.createElement(d.j, {
						key: e
					}, o.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(w.f)(r.id) ? o.a.createElement(d.j, {
						key: s
					}, F(e.c, t, n)) : Object(O.b)(r, s, t)
				},
				F = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let i = 0; i < r; i++) {
						const r = e[i];
						if (r.e === p.A) s.push(A(r, i));
						else if (r.e === p.x) s.push(o.a.createElement(j.a, {
							key: i
						}, F(r.c, t, n)));
						else if (r.e === p.n) s.push(o.a.createElement("br", {
							key: i
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(o.a.createElement(v, {
									key: i,
									node: r,
									media: e
								}))
							}
						} else s.push(D(r, n, i))
					}
					return s
				},
				D = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = A({
								t: e.t,
								f: e.f
							}, 0);
							return Object(S.b)(e.u) ? o.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s) : o.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a
							}, s);
						case p.y:
							return o.a.createElement(k.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return o.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return o.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				A = (e, t) => {
					const {
						f: n,
						t: r
					} = e, i = [];
					if (!n) return H(0, r, t);
					const a = Object(s.a)(r);
					let o = 0,
						d = 0;
					const c = n.length;
					for (; o < c; o++) {
						const [e, t, s] = n[o], c = t + s, l = a[t], u = a[c] - l;
						l > d && i.push(H(0, r.substr(d, l - d), `between${o}`)), i.push(H(e, r.substr(l, u), o)), d = l + u
					}
					return d < r.length && i.push(H(0, r.substr(d), `remaining${o}`)), i
				},
				U = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				H = (e, t, n) => {
					let s = t;
					return s = i()(U, (t, s, r) => e & parseInt(r, 10) ? o.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				V = e => {
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
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				g = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				C = n("./src/reddit/helpers/name/index.ts"),
				E = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = n("./src/reddit/components/MiniCardPost/index.m.less"),
				O = n.n(v),
				j = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				k = n.n(j);
			const S = e => e.type === E.f.Spoiler,
				w = Object(h.t)();
			t.a = w(Object(f.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: E,
					showSubredditMeta: v = !0,
					showSubredditName: j,
					subredditOrProfile: w
				} = e, T = h && h.preview && h.preview.url || void 0, I = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", N = E && P || f && Object(o.a)("/search", {
					q: f.rawQuery,
					source: I
				}) || P, L = f ? f.subredditInfo && f.subredditInfo.icon : w && w.icon.url, B = f ? f.subredditInfo && f.subredditInfo.displayText : w && (w.displayText || w.name), M = h ? h.flair.filter(S) : [], R = h ? h.score : 0, F = h ? h.numComments : 0, D = h && h.isSponsored, A = Object(_.a)(e).body, U = `linear-gradient(\n      ${Object(r.g)(A,.2)},\n      ${Object(r.g)(A,.3)},\n      ${Object(r.g)(A,.4)},\n      ${Object(r.g)(A,.6)},\n      ${Object(r.g)(A,.8)},\n      ${A}\n    )`, H = a.a.createElement("div", {
					id: i,
					className: Object(d.a)(k.a.trendingPost, {
						[k.a["m-background"]]: !!T
					})
				}, a.a.createElement(x.a, {
					to: N
				}, a.a.createElement("div", {
					className: Object(d.a)(k.a.backgroundWrapper, O.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(_.a)(e).body, T || Object(_.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, D && a.a.createElement("div", {
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
				}, M.length > 0 && a.a.createElement(m.a, {
					className: k.a.flair,
					titleFlair: M,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : a.a.createElement("div", {
					className: k.a.spacer
				}), v && L && B && a.a.createElement(g.a, {
					className: k.a.relatedSubredditMetaData,
					iconClassName: k.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", B)], {
						hk: "2YTyJf"
					})
				}), !v && h && a.a.createElement("div", {
					className: k.a.metaLine
				}, j && B && a.a.createElement("span", {
					className: k.a.meta
				}, Object(C.c)(B)), a.a.createElement("span", {
					className: k.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(R, "number", Object(u.b)(R))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: k.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(F, "number", Object(u.b)(F))], {
					hk: "311aXY"
				})))))));
				return D ? a.a.createElement(p.a, {
					post: h
				}, H) : H
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
			const m = Object(a.t)();
			t.a = m(Object(i.b)((e, {
				listingName: t,
				pageLayer: n
			}) => {
				const s = Object(o.b)(e, {
						listingName: t,
						pageLayer: n
					}),
					r = Object(c.A)(e) || Object(d.a)(e),
					i = Object(o.e)(e);
				return {
					canShowAd: s && !r,
					awaitingBrandSafetyCheck: !Object(o.c)(e),
					isAdsDisabled: r,
					viewIsUnsafe: i
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: n,
				pageLayer: s,
				...i
			}) => !t && e && s ? r.a.createElement(l.a, u({
				forceHouseAd: n
			}, i)) : null))
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
				h = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				g = n("./src/reddit/icons/svgs/Upload/index.tsx"),
				C = n("./src/reddit/models/ApiRequestState/index.ts"),
				E = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				y = n("./src/reddit/components/SubredditIcon/index.m.less"),
				_ = n.n(y);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: s,
						...r
					} = e, a = Object(h.a)(), o = [n, _.a.inTopBar, _.a.iconContainer];
					return s ? o.push(_.a.emptyEditableIconInTopBar) : o.push(_.a.editableIcon, _.a.emptyEditableIcon), i.a.createElement("span", v({}, r, {
						className: Object(d.a)(...o)
					}), s ? a ? i.a.createElement(f.a, {
						name: "upload",
						className: _.a.emptyUploadButton
					}) : i.a.createElement(g.a, {
						className: _.a.emptyUploadButton
					}) : a ? i.a.createElement(f.a, {
						name: "add",
						className: _.a.emptyPlusButton
					}) : i.a.createElement(x.a, {
						className: _.a.emptyPlusButton
					}), e.children)
				},
				j = e => {
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
						className: _.a.iconContainer
					}, i.a.createElement("img", {
						alt: s,
						onClick: a,
						role: r,
						src: c,
						className: Object(d.a)(n, {
							[_.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				k = Object(o.c)({
					isLoading: E.b
				});
			class S extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: _.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(C.b)();
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
						className: _.a.clickableUploadText,
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
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(j, v({
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
					}, i.a.createElement(O, v({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(O, v({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [_.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(_.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
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
						className: _.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(a.b)(k, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(c.a)(t.subreddit, n, s))
				}
			}))(Object(l.c)(S))
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = i.a.wrapped(a.b, "SubredditIcon", c.a),
				m = i.a.wrapped(e => r.a.createElement(o.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => r.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, r.a.createElement(l.a, {
						href: `/r/${e}/`
					}, r.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, r.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(o.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const C = Object(b.c)(g),
				E = Object(a.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				y = Object(i.b)(E),
				_ = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: s,
					rtJsonElementProps: i
				}) => {
					if (!t || !e) return r.a.createElement(C, {
						subredditName: n,
						rtJsonElementProps: i
					});
					switch (s) {
						case h.rd.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: i
							});
						case h.rd.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return r.a.createElement(C, {
								subredditName: n,
								rtJsonElementProps: i
							})
					}
				};
			t.b = y(_)
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
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				f = n("./src/reddit/components/IdCard/async.tsx"),
				x = n("./src/lib/isFakeSubreddit/index.ts"),
				g = n("./src/reddit/components/IdCard/helpers.ts"),
				C = e => !Object(x.a)(e) || Object(g.c)(e) || Object(g.d)(e) || Object(g.e)(e),
				E = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = n("./src/reddit/components/PowerupsSidebar/index.tsx"),
				_ = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				v = n("./src/reddit/components/SidebarContainer/index.tsx"),
				O = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				j = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				k = n("./src/lib/makeListingKey/index.ts"),
				S = n("./src/reddit/actions/subreddit.ts"),
				w = n("./src/lib/classNames/index.ts"),
				T = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/helpers/name/index.ts"),
				N = n("./src/reddit/helpers/overlay/index.ts"),
				L = n("./src/reddit/selectors/experiments/topPosts.ts"),
				B = n("./src/reddit/selectors/posts.ts"),
				M = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const R = .99;
			class F extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= R && t(n)
					}
				}
				render() {
					return o.a.createElement(M.a, {
						threshold: R,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var D = F,
				A = n("./src/lib/isUrl/index.ts"),
				U = n("./src/lib/prettyPrintNumber/index.ts"),
				H = n("./src/reddit/components/FlairWrapper/index.tsx"),
				V = n("./src/reddit/components/Thumbnail/index.tsx"),
				W = n("./src/reddit/models/Flair/index.ts"),
				q = n("./src/reddit/models/Subreddit/index.ts"),
				J = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				G = n.n(J);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = e => e.type === W.f.Nsfw || e.type === W.f.Spoiler, z = Object(c.c)({
				post: B.F,
				subredditOrProfile: B.R
			});
			class Z extends o.a.PureComponent {
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
					}, a = Object(A.a)(Object(V.b)(i)), d = t.flair.filter(Y);
					return o.a.createElement("div", {
						className: Object(w.a)(G.a.container, e, {
							[G.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: G.a.mainLine
					}, a && o.a.createElement("div", {
						className: G.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(V.a, i)), o.a.createElement("div", {
						className: Object(w.a)(G.a.title, !a && G.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(H.a, {
						className: G.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: G.a.metaLine
					}, s && !!r && o.a.createElement("span", {
						className: G.a.meta
					}, Object(q.h)(r) ? Object(P.d)(r.displayText || r.name) : Object(P.c)(r.displayText || r.name)), o.a.createElement("span", {
						className: G.a.meta
					}, K._({
						"*": "{score} points",
						_1: "1 point"
					}, [K._plural(t.score, "score", Object(U.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: G.a.meta
					}, K._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [K._plural(t.numComments, "numComments", Object(U.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var X = Object(d.b)(z, e => ({
					openLightbox: t => e(Object(N.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Z),
				Q = n("./src/reddit/components/SidebarPostList/index.m.less"),
				$ = n.n(Q);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = 10, ne = 2, se = Object(c.a)(B.L, e => e.filter(e => !e.isSponsored)), re = Object(c.c)({
				posts: (e, t) => se(e, {
					...t
				})
			});
			class ie extends o.a.Component {
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
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || te, this.showMorePosts = () => {
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
						return o.a.createElement(D, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, o.a.createElement(X, {
							className: Object(w.a)($.a.smallPost, i),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(x.a)(Object(P.g)(t)),
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
						m = Object(L.a)(c),
						p = Object(L.b)(c),
						b = m || p,
						h = i.slice(l * u, (l + 1) * u),
						[f, ...g] = h,
						C = b ? h.slice(0, ne) : g.slice(0, ne),
						E = b ? h.slice(ne) : g.slice(ne);
					return o.a.createElement("div", {
						className: Object(w.a)($.a.container, t, {
							[$.a.redditStyle]: a
						})
					}, !b && o.a.createElement(D, {
						onPostVisible: r,
						postId: f.id
					}, o.a.createElement(T.a, {
						postId: f.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(x.a)(Object(P.g)(n)),
						trendingPost: f
					})), C.map(this.renderSmallPost), e, E.map(this.renderSmallPost), d && o.a.createElement(I.o, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, s || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ae = Object(d.b)(re, e => ({
					openPost: t => e(Object(N.a)(t.permalink))
				}))(ie),
				oe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				de = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ce = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = n("./src/reddit/selectors/discoveryUnit.ts"),
				me = n("./src/reddit/selectors/subreddit.ts"),
				pe = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = n.n(pe);
			const he = 10,
				fe = Object(c.a)((e, t) => t.subredditName, e => Object(k.a)(e, l.R.TOP, {
					t: l.Yb.WEEK
				})),
				xe = Object(c.c)({
					discoveryUnit: e => Object(ue.c)(e, {
						unitName: le.j
					}),
					listingKey: fe,
					posts: (e, t) => {
						const n = fe(e, t);
						return Object(B.L)(e, {
							listingKey: n
						})
					},
					subreddit: me.A
				});
			class ge extends o.a.Component {
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
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(ce.x)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(ce.C)(t, e, void 0, n))
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
						l = i.length > he;
					return o.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(ae, {
						listingKey: n,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var Ce = Object(d.b)(xe, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(S.r)({
						sort: l.R.TOP,
						subredditName: t,
						t: l.Yb.WEEK
					}))
				}))(Object(oe.c)(ge)),
				Ee = n("./src/config.ts"),
				ye = n("./src/lib/localStorageAvailable/index.ts"),
				_e = n("./src/reddit/actions/modal.ts"),
				ve = n("./src/higherOrderComponents/asModal/index.tsx"),
				Oe = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				je = n("./src/reddit/controls/TextButton/index.tsx"),
				ke = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Se
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class we extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(Oe.d, null, o.a.createElement(Oe.h, null, o.a.createElement(ke.a, null, o.a.createElement(Oe.p, null, Se._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), o.a.createElement(je.a, {
						onClick: e.toggleModal
					}, o.a.createElement(Oe.b, null)))), o.a.createElement(Oe.k, null, o.a.createElement(Oe.o, null, Se._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), o.a.createElement(Oe.f, null, o.a.createElement(Oe.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, Se._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(Oe.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, Se._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var Te = Object(ve.a)(we),
				Ie = n("./src/reddit/components/IdCard/Banner.tsx"),
				Pe = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Ne = n("./src/reddit/constants/blade.ts"),
				Le = n("./src/reddit/controls/InternalLink/index.tsx"),
				Be = n("./src/reddit/helpers/localStorage/index.ts"),
				Me = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				Re = n("./src/reddit/icons/fonts/index.tsx"),
				Fe = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				De = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Ae = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ue = n("./src/reddit/selectors/activeModalId.ts"),
				He = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				Ve = n("./src/reddit/selectors/moderatorPermissions.ts"),
				We = n("./src/reddit/selectors/structuredStyles.ts"),
				qe = n("./src/reddit/components/IdCard/index.m.less"),
				Je = n.n(qe),
				Ge = n("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				Ke = n.n(Ge);
			const Ye = "mod_onboarding_modal",
				ze = "mod_onboarding_widget",
				Ze = Object(c.a)(Ue.a, (e, t) => Object(Ve.a)(Ae.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(We.k)(e, {
					subredditId: t.subredditId
				}), He.a, (e, t, n, s) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					isInIcons2020: s,
					modHasEditedBanner: !n || !!(n.bannerBackgroundImage || n.bannerHeight || n.bannerPositionedImage || n.bannerBackgroundColor),
					modHasEditedColors: !n || !!(n.primaryColor || n.highlightColor || n.backgroundColor || n.backgroundImage),
					modHasEditedIcon: !n || (!!n.communityIcon || !!n.bannerShowCommunityIcon)
				}));
			class Xe extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(Be.wb)(ze, !0, this.props.subredditId), this.props.sendEvent(Object(Me.d)("close"))
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
						modHasEditedColors: n,
						modHasEditedIcon: s,
						subredditId: r
					} = this.props, i = e && !(t && n && s) && (!Object(ye.a)() || !Object(Be.z)(ze, r));
					i !== this.state.visible && (this.setState({
						visible: i
					}), i && this.props.sendEvent(Object(Me.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						isInIcons2020: t,
						modHasEditedBanner: n,
						modHasEditedColors: r,
						modHasEditedIcon: i,
						subredditName: a,
						toggleCloseMenuModal: d
					} = this.props;
					return this.state.visible ? o.a.createElement(de.a, {
						className: Object(w.a)(Ke.a.container, this.props.className)
					}, o.a.createElement(Ie.a, {
						bannerBackgroundImage: `${Ee.a.assetPath}/img/id-cards/mod-onboarding@2x.png`
					}), t ? o.a.createElement(Re.a, {
						name: "close",
						className: Ke.a.closeIcon,
						onClick: d
					}) : o.a.createElement(De.a, {
						className: Ke.a.closeIcon,
						onClick: d
					}), Object(Pe.a)({
						titleText: s.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(g.b)(`url('${Ee.a.assetPath}/img/id-cards/snoo-artist@2x.png')`)
					}), o.a.createElement("div", {
						className: Object(w.a)(Je.a.Description, Ke.a.description)
					}, s.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [s.fbt._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: Ne.e.exportImport,
						className: Ke.a.modHelpLink,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(Le.a, {
						to: `/r/${a}?styling=true&route=${Ne.c.NameAndIcon}`,
						className: Ke.a.link,
						onClick: this.customizeIcon
					}, i ? o.a.createElement(Fe.a, {
						className: Ke.a.checked
					}) : o.a.createElement(Fe.a, {
						className: Ke.a.unchecked
					}), s.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), o.a.createElement(Le.a, {
						to: `/r/${a}?styling=true&route=${Ne.c.Banner}`,
						className: Ke.a.link,
						onClick: this.customizeBannerImage
					}, n ? o.a.createElement(Fe.a, {
						className: Ke.a.checked
					}) : o.a.createElement(Fe.a, {
						className: Ke.a.unchecked
					}), s.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), o.a.createElement(Le.a, {
						to: `/r/${a}?styling=true&route=${Ne.c.Global}`,
						className: Ke.a.link,
						onClick: this.customizeThemeColors
					}, r ? o.a.createElement(Fe.a, {
						className: Ke.a.checked
					}) : o.a.createElement(Fe.a, {
						className: Ke.a.unchecked
					}), s.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), o.a.createElement(I.n, {
						to: `/r/${a}?styling=true`,
						className: Ke.a.button,
						onClick: this.customizeAppearance
					}, s.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), o.a.createElement("div", {
						className: Ke.a.subtext
					}, s.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === Ye && o.a.createElement(Te, {
						withOverlay: !0,
						toggleModal: d,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Qe = Object(d.b)(Ze, (e, {
					subredditId: t,
					subredditName: n
				}) => ({
					toggleCloseMenuModal: () => e(Object(_e.i)(Ye))
				}))(Object(oe.c)(Xe)),
				$e = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				et = n("./src/reddit/constants/tracking.ts"),
				tt = n("./src/reddit/selectors/seo/linksModule.ts"),
				nt = n("./src/reddit/selectors/telemetry.ts"),
				st = n("./src/telemetry/models/Subreddit.ts");
			const rt = e => t => ({
					...nt.defaults(t),
					action: et.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				it = e => t => n => ({
					...nt.defaults(n),
					action: et.c.CLICK,
					noun: Object(st.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				at = Object(c.c)({
					communities: tt.c
				});
			var ot = Object(d.b)(at)(e => {
					const t = Object(oe.b)();
					return e.communities && e.communities.length ? o.a.createElement(O.a, null, o.a.createElement($e.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: rt,
						getSubscribeEventFactoryHandler: it,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				dt = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				ct = n("./src/reddit/featureFlags/index.ts"),
				lt = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				ut = n("./src/reddit/models/Widgets/index.ts"),
				mt = n("./src/reddit/selectors/communityFlairs.ts"),
				pt = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				bt = n("./src/reddit/selectors/listings.ts"),
				ht = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				ft = n.n(ht);
			const xt = 250,
				gt = 270,
				Ct = u.a.wrapped(v.a, "SidebarContainer", ft.a),
				Et = Object(c.c)({
					apiError: bt.c,
					apiPending: bt.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(mt.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(mt.c)(e, t),
					isPredictionsLeaderboardsEnabled: pt.g,
					showGovernance: ct.d.spPoints,
					showLeaderboard: ct.d.spLeaderboard,
					showPredictionsLeaderboard: (e, {
						subredditId: t
					}) => Object(me.N)(e, {
						subredditId: t
					}) && !Object(me.O)(e, {
						subredditId: t
					}),
					widgets: me.s
				}),
				yt = Object(d.b)(Et);
			class _t extends a.Component {
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
							kind: "community-list",
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: ut.d.Cloud,
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
						isPredictionsLeaderboardsEnabled: t,
						listingName: n,
						showGovernance: s,
						showLeaderboard: r,
						showPredictionsLeaderboard: i,
						subredditId: a,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const x = Object(L.a)(c),
						g = Object(L.b)(c),
						v = Object(L.c)(c),
						k = x || g;
					let S, w;
					!!this.getPostFlairWidget() ? S = this.props.widgets : (S = this.getCommunityWidgets(), w = this.makeFlairFilterWidget());
					const T = this.makeRelatedCommunitiesWidget(x, g),
						I = !x,
						P = g,
						N = o.a.createElement(_.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: n,
							placementIndex: u++,
							position: lt.a.FIRST,
							sizes: l.h
						});
					return o.a.createElement(Ct, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, C(n) && o.a.createElement(f.a, {
						listingName: n
					}), o.a.createElement(p.a, {
						cardClassName: ft.a.card,
						subredditId: a
					}), o.a.createElement(y.a, {
						subredditId: a
					}), t && i && o.a.createElement(m.a, {
						subredditId: a
					}), k && o.a.createElement(O.a, null, o.a.createElement(Ce, {
						subredditName: d,
						topPostsVariant: c
					}, o.a.createElement("div", {
						className: ft.a.inFeedAd
					}, N))), k && T && o.a.createElement(O.a, null, o.a.createElement(dt.a, {
						subredditName: d,
						truncateThreshold: gt,
						widget: T
					})), P && S.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(dt.a, {
							subredditName: d,
							truncateThreshold: xt,
							widget: e
						}))
					}), o.a.createElement(Qe, {
						subredditId: a,
						subredditName: d
					}), s && o.a.createElement(b.a, {
						className: ft.a.card,
						subredditId: a
					}), w && o.a.createElement(O.a, null, o.a.createElement(dt.a, {
						subredditName: d,
						widget: w
					})), r && o.a.createElement(h.a, {
						className: ft.a.card,
						subredditId: a,
						uniqueId: a
					}), o.a.createElement(E.g, {
						subredditId: a
					}), !k && N, o.a.createElement(ot, {
						subredditId: a
					}), I && !P && S.map((e, t) => {
						const n = "community-list" === e.kind;
						return o.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(dt.a, {
							subredditName: d,
							truncateThreshold: v && n ? gt : v ? xt : void 0,
							widget: e
						}))
					}), o.a.createElement(j.a, {
						adComponent: o.a.createElement(_.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: n,
							placementIndex: u++,
							position: lt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = yt(_t)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, n) {
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
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.S,
				hideNSFWPref: b.B,
				isActive: p.j,
				moderatorPermissions: u.j,
				modModeEnabled: c.Q,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: n,
					selectedTemplateId: s
				}) => e(Object(a.h)({
					post: t,
					previewFlair: n,
					selectedTemplateId: s
				})),
				handleVote: n => {
					const s = n === d.a.upvoted ? Object(i.bb)(t) : Object(i.u)(t);
					e(s)
				},
				onIgnoreReports: () => e(Object(i.X)(t)),
				onOpenReportsDropdown: t => e(Object(o.h)({
					tooltipId: t
				}))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: s
				}) => t.dispatchFlairChanged({
					post: n.post,
					previewFlair: e,
					selectedTemplateId: s
				})
			}), {
				forwardRef: !0
			});
			t.a = h
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
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				i = "|downsized";

			function a(e, t) {
				return r + e + (t ? i : "")
			}

			function o(e) {
				return e && 0 === e.indexOf(r)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(o)
			}

			function c(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...l(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, s.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === s.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			}));
			const s = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				r = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				i = () => e => ({
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
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return O
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/isComment.ts"),
				d = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const p = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: i.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				b = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: c.f.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, {
					renderingObjectInfo: t,
					pageLayer: n
				}) => {
					if (t && (Object(o.b)(t) || Object(d.b)(t))) return Object(o.b)(t) ? m.SourceElement.Comment : Object(a.w)(n) ? m.SourceElement.PostDetail : Object(a.E)(n) ? m.SourceElement.ListingPostDetail : void 0
				},
				f = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(d.b)(n) && !Object(o.b)(n)) return {
						outbound: void 0
					};
					const r = Object(d.b)(n) ? "postId" : "commentId",
						i = {
							url: `/r/${s}/`,
							sourceElement: h(0, t),
							subredditName: s,
							[r]: n.id
						},
						a = Object(l.A)(e, {
							subredditName: s
						});
					return a ? {
						outbound: {
							...i,
							url: a.url,
							subredditId: a.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				x = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(d.b)(n) && !Object(o.b)(n)) return {};
					const s = Object(d.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.post(e, n.id),
						subreddit: u.subredditById(e, s),
						...f(e, t)
					}
				},
				g = e => t => ({
					...p(t),
					...x(t, e)
				}),
				C = e => t => ({
					...b(t),
					source: "global",
					action: i.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				E = (e, t) => n => ({
					...b(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				y = (e, t) => n => ({
					...b(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				_ = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				v = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				O = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Upload/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 17",
				version: "1.1"
			}, r.a.createElement("path", {
				d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
				id: "a"
			}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = e => s.pb.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: i.J,
				experimentName: s.ob
			})
		},
		"./src/reddit/selectors/experiments/econ/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const i = Object(r.a)(s.Db),
				a = Object(r.a)(s.Gb),
				o = Object(r.a)(s.Bb),
				d = Object(r.a)(s.Eb),
				c = Object(r.a)(s.Cb),
				l = Object(r.a)(s.Fb),
				u = Object(r.a)(s.Hb),
				m = Object(r.a)(s.vb),
				p = Object(r.a)(s.ub);
			Object(r.a)(s.wb)
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			const o = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: o,
						experimentName: s.kd
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.rd.SmIcon || t === s.rd.SmIconHc
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
					const n = Object(a.Y)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit~SubredditWiki.5b4bc86f2495837e70d5.js.map