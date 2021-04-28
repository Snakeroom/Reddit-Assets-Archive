// https://www.redditstatic.com/desktop2x/Subreddit~SubredditWiki.915b7f5c3b9377ef2610.js
// Retrieved at 4/28/2021, 12:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit~SubredditWiki"], {
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
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(a);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: o
					} = e;
				return r.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[d.a.disable]: n,
						[d.a.active]: s,
						[d.a.hover]: !!o
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
				return f
			})), n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(r.a)(o.t),
				x = Object(r.a)(o.u),
				g = Object(r.a)(o.s),
				f = (e, t, n) => async (s, r, i) => {
					const o = Object(p.A)(r(), {
						subredditName: e
					});
					if (o) return E(o, t, n)(s, r, i)
				}, C = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), E = (e, t, n) => async (r, o, p) => {
					const f = await Object(l.e)(t);
					r(h());
					const E = o();
					try {
						await Object(i.g)("communityIcon", f, e.id)(r, o, p)
					} catch (y) {
						return Object(b.a)(Object(c.c)(E, "something went wrong with the uploading the image")), r(Object(a.f)({
							kind: u.b.Error,
							text: C()
						})), void r(g())
					}
					const _ = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!_) return Object(b.a)(Object(c.c)(E, "image is null")), r(Object(a.f)({
						kind: u.b.Error,
						text: C()
					})), void r(g());
					await Object(i.k)(e.id, {
						communityIcon: _
					}, d.b.idCard, n)(r, o, p), r(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(x())
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				i = n("./node_modules/react-router-redux/es/index.js");
			const o = (e, t = !0) => async (n, o, {
				routes: a
			}) => {
				const d = o();
				Object(s.a)(e, a, d) ? n(Object(i.b)(e)) : t ? Object(r.d)(e, "_blank") : window.location.assign(e)
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
				notificationIcon: "_29XsM9vUO4SVgLfTrgjeiO",
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
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/subredditWelcomeMessage.ts"),
				u = n("./src/lib/combineRefs/index.tsx"),
				m = n("./src/reddit/components/CommonTooltip/index.m.less"),
				p = n.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var h = r.a.memo((function({
				visible: e,
				tooltipId: t,
				className: n,
				arrowClassName: i,
				...o
			}) {
				const [d, c] = Object(s.useState)(e);
				return Object(s.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, c(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), c(!1)
					}
				}, [e]), e ? r.a.createElement("div", b({
					id: t,
					className: Object(a.a)(p.a.tooltip, n, {
						[p.a.visible]: d
					})
				}, o.popperProps), d && r.a.createElement(r.a.Fragment, null, o.arrowProps && r.a.createElement("div", b({
					className: Object(a.a)(p.a.arrow, i)
				}, o.arrowProps)), o.children)) : null
			}));
			var x = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M8 18C8 18.5304 8.21072 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20C10.5304 20 11.0391 19.7893 11.4142 19.4142C11.7893 19.0391 12 18.5304 12 18H8Z"
			}), r.a.createElement("path", {
				d: "M17.36 11C16.9898 10.7484 16.6868 10.41 16.4776 10.0143C16.2685 9.61854 16.1594 9.1776 16.16 8.72999V7.07999C16.16 5.44891 15.5121 3.88463 14.3587 2.73129C13.2054 1.57794 11.6411 0.929993 10.01 0.929993C8.37892 0.929993 6.81465 1.57794 5.6613 2.73129C4.50795 3.88463 3.86 5.44891 3.86 7.07999V8.70999C3.8617 9.16278 3.75115 9.60894 3.53826 10.0086C3.32536 10.4082 3.01674 10.7488 2.64 11C2.10136 11.3641 1.65957 11.8539 1.3529 12.4272C1.04622 13.0005 0.883909 13.6399 0.880005 14.29V15C0.887769 15.2927 1.00888 15.571 1.21781 15.7762C1.42674 15.9814 1.70717 16.0975 2 16.1H18C18.2928 16.0975 18.5733 15.9814 18.7822 15.7762C18.9911 15.571 19.1122 15.2927 19.12 15V14.32C19.121 13.6648 18.961 13.0194 18.6541 12.4405C18.3472 11.8616 17.9028 11.3669 17.36 11ZM17.88 14.87H2.12V14.31C2.11479 13.8549 2.2226 13.4056 2.43379 13.0024C2.64497 12.5993 2.95291 12.2548 3.33 12C3.87004 11.635 4.3127 11.1435 4.61944 10.5684C4.92619 9.99321 5.08773 9.35182 5.09 8.69999V7.07999C5.09 5.78043 5.60625 4.5341 6.52518 3.61517C7.44411 2.69624 8.69044 2.17999 9.99 2.17999C11.2896 2.17999 12.5359 2.69624 13.4548 3.61517C14.3738 4.5341 14.89 5.78043 14.89 7.07999V8.71999C14.8977 9.37022 15.0639 10.0088 15.3741 10.5803C15.6842 11.1518 16.129 11.6391 16.67 12C17.0415 12.2511 17.3459 12.5891 17.5568 12.9848C17.7677 13.3804 17.8786 13.8217 17.88 14.27V14.87Z"
			}));
			var g = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M8 18C8 18.5304 8.21072 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20C10.5304 20 11.0391 19.7893 11.4142 19.4142C11.7893 19.0391 12 18.5304 12 18H8Z"
			}), r.a.createElement("path", {
				d: "M17.36 11C16.9898 10.7484 16.6868 10.41 16.4776 10.0143C16.2685 9.61854 16.1594 9.1776 16.16 8.72999V7.07999C16.16 5.44891 15.5121 3.88463 14.3587 2.73129C13.2054 1.57794 11.6411 0.929993 10.01 0.929993C8.37892 0.929993 6.81465 1.57794 5.6613 2.73129C4.50795 3.88463 3.86 5.44891 3.86 7.07999V8.70999C3.8617 9.16278 3.75115 9.60894 3.53826 10.0086C3.32536 10.4082 3.01674 10.7488 2.64 11C2.10136 11.3641 1.65957 11.8539 1.3529 12.4272C1.04622 13.0005 0.883909 13.6399 0.880005 14.29V15C0.887769 15.2927 1.00888 15.571 1.21781 15.7762C1.42674 15.9814 1.70717 16.0975 2 16.1H18C18.2928 16.0975 18.5733 15.9814 18.7822 15.7762C18.9911 15.571 19.1122 15.2927 19.12 15V14.32C19.121 13.6648 18.961 13.0194 18.6541 12.4405C18.3472 11.8616 17.9028 11.3669 17.36 11Z"
			}));
			var f = e => r.a.createElement("svg", {
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
			var C = e => r.a.createElement("svg", {
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
			var E = e => r.a.createElement("svg", {
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
			var _ = e => r.a.createElement("svg", {
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
				y = n("./src/reddit/models/Subreddit/index.ts"),
				v = n("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				O = n.n(v);
			const j = c.a.wrapped(x, "NotificationIcon", O.a),
				k = c.a.wrapped(g, "NotificationIcon", O.a),
				w = c.a.wrapped(E, "NotificationIcon", O.a),
				S = c.a.wrapped(_, "NotificationIcon", O.a),
				T = c.a.wrapped(C, "NotificationIcon", O.a),
				I = c.a.wrapped(f, "NotificationIcon", O.a),
				P = e => e === y.b.FREQUENT ? r.a.createElement(T, null) : r.a.createElement(I, null),
				N = e => e === y.b.LOW ? r.a.createElement(k, null) : r.a.createElement(j, null),
				L = e => e === y.b.OFF ? r.a.createElement(S, null) : r.a.createElement(w, null),
				B = {
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
				R = {
					placement: "top"
				};
			var F = n("./node_modules/fbt/lib/FbtPublic.js"),
				D = n("./src/reddit/controls/Dropdown/index.tsx"),
				A = n("./src/reddit/controls/Dropdown/Row.tsx");

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const U = c.a.wrapped(D.a, "StyledDropdown", O.a),
				W = c.a.wrapped(A.b, "DropdownRow", O.a);
			var V = e => {
					const {
						onHide: t
					} = e, n = Object(s.useCallback)(() => {
						t()
					}, [t]);
					return r.a.createElement(U, {
						id: e.dropdownId,
						className: O.a.notificationDropdown
					}, [{
						displayText: F.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: n,
						isSelected: e.notificationLevel === y.b.FREQUENT,
						icon: P(e.notificationLevel)
					}, {
						displayText: F.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: n,
						isSelected: e.notificationLevel === y.b.LOW,
						icon: N(e.notificationLevel)
					}, {
						displayText: F.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: n,
						isSelected: e.notificationLevel === y.b.OFF,
						icon: L(e.notificationLevel)
					}].map(e => r.a.createElement(W, H({
						iconWrapperClassName: O.a.notificationOverflowIconWrapper,
						className: Object(a.a)(O.a.notificationDropdown, O.a.notificationRow, {
							[O.a.isSelected]: e.isSelected
						}),
						key: e.displayText
					}, e), e.icon)))
				},
				q = n("./src/reddit/controls/Button/index.tsx"),
				J = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				K = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx");

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Y = e => r.a.createElement("svg", G({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}));
			const z = c.a.wrapped(K.a, "PlanetIcon", O.a),
				Z = c.a.img("SubredditIcon", O.a),
				X = c.a.wrapped(C, "NotificationIcon", O.a);
			var Q = ({
					subredditName: e,
					shouldShowSubredditIcon: t,
					subredditIcon: n,
					onHide: s
				}) => {
					const i = Object(J.a)(),
						o = t ? r.a.createElement(Z, {
							src: n || void 0
						}) : i ? r.a.createElement(Y, {
							className: O.a.DefaultIcon
						}) : r.a.createElement(z, null),
						a = `r/${e}`;
					return r.a.createElement("div", {
						className: O.a.notificationPopup
					}, r.a.createElement("div", {
						className: O.a.title
					}, r.a.createElement("h2", null, F.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), r.a.createElement("h3", null, F.fbt._("{subbredit name}", [F.fbt._param("subbredit name", a)], {
						hk: "3QhSOM"
					}))), r.a.createElement("div", {
						className: O.a.subredditWrapper
					}, r.a.createElement("div", {
						className: O.a.subbreditTitle
					}, o, r.a.createElement("span", null, a), r.a.createElement(X, null)), r.a.createElement(q.q, {
						className: O.a.subscribeButton,
						priority: q.b.Primary,
						size: q.c.M,
						text: F.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: s
					})), r.a.createElement("button", {
						className: O.a.hideButton,
						onClick: s
					}, F.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				$ = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx");
			var ee = ({
					arrowProps: e,
					popperProps: t,
					visible: n,
					subredditName: s
				}) => r.a.createElement($.a, {
					arrowProps: e,
					popperProps: t,
					visible: n
				}, r.a.createElement("div", {
					className: O.a.tooltipText
				}, r.a.createElement("p", null, F.fbt._("Love r/{subreddit name}?", [F.fbt._param("subreddit name", s)], {
					hk: "2ftUJw"
				})), r.a.createElement("p", null, F.fbt._("Get updates on it!", null, {
					hk: "XD60G"
				})))),
				te = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				ne = n("./src/reddit/hooks/useOnClickOutside.ts"),
				se = n("./src/reddit/hooks/useTooltip.ts"),
				re = n("./src/reddit/constants/experiments.ts"),
				ie = n("./src/reddit/helpers/chooseVariant/index.ts"),
				oe = n("./src/reddit/selectors/experiments/utils.ts"),
				ae = n("./src/reddit/selectors/user.ts");
			const de = e => Object(ae.I)(e) || Object(ae.J)(e),
				ce = Object(o.a)(e => Object(ie.c)(e, {
					experimentName: re.W,
					experimentEligibilitySelector: de
				}), oe.a),
				le = Object(o.a)(ce, e => e === re.cc.ToolTip_nonSub),
				ue = Object(o.a)(ce, e => e === re.cc.ToolTip_2ndVisit),
				me = Object(o.a)(ce, e => e === re.cc.ToolTip_3rdVisit),
				pe = Object(o.a)(ce, e => e === re.cc.HalfSheet_2ndVisit),
				be = Object(o.a)(ce, e => e === re.cc.HalfSheet_3rdVisit),
				he = Object(o.a)(pe, be, ue, me, le, (e, t, n, s, r) => e || t || n || s || r);
			var xe = e => {
					const t = Object(i.e)(pe),
						n = Object(i.e)(be),
						o = Object(i.e)(ue),
						a = Object(i.e)(me),
						d = Object(i.e)(le),
						c = t || n,
						l = o || a || d,
						m = Object(se.b)(B),
						p = Object(se.b)(M),
						b = Object(te.a)(R);
					Object(s.useEffect)(() => {
						c && (p.update && p.update(), p.show()), l && (b.update && b.update(), b.show())
					}, [e.subredditName, c, l]);
					const x = Object(s.useCallback)(() => {
							m.hide()
						}, [m]),
						g = Object(s.useCallback)(() => {
							p.hide(), b.hide(), m.show()
						}, [p, m, b]),
						f = Object(s.useCallback)(() => {
							p.hide()
						}, [p]),
						C = (e => `dropdown-${e}`)(e.subredditName),
						E = (e => `popup-${e}`)(e.subredditName);
					Object(ne.a)(C, x);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						type: "button",
						className: O.a.notificationButton,
						ref: Object(u.a)(b.target.ref, m.target.ref, p.target.ref),
						onClick: e => {
							e.stopPropagation(), m.visible ? x() : g()
						}
					}, (e => {
						switch (e) {
							case y.b.FREQUENT:
								return r.a.createElement(T, null);
							case y.b.OFF:
								return r.a.createElement(w, null);
							case y.b.LOW:
							default:
								return r.a.createElement(j, null)
						}
					})(e.notificationLevel)), l && r.a.createElement(ee, {
						arrowProps: b.arrowProps,
						popperProps: b.popperProps,
						visible: b.visible,
						subredditName: e.subredditName
					}), r.a.createElement(h, {
						popperProps: m.popperProps,
						visible: m.visible,
						tooltipId: C
					}, r.a.createElement(V, {
						dropdownId: C,
						onHide: x,
						notificationLevel: e.notificationLevel
					})), c && r.a.createElement(h, {
						arrowProps: p.arrowProps,
						popperProps: p.popperProps,
						visible: p.visible,
						tooltipId: E,
						className: O.a.popupTooltip
					}, r.a.createElement(Q, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: f
					})))
				},
				ge = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				fe = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				Ce = n("./src/reddit/components/SubredditNav/index.tsx"),
				Ee = n("./src/reddit/components/SubscribeButton/index.tsx"),
				_e = n("./src/reddit/constants/postLayout.ts"),
				ye = n("./src/reddit/constants/posts.ts"),
				ve = n("./src/reddit/featureFlags/index.ts"),
				Oe = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				je = n("./src/reddit/constants/tracking.ts"),
				ke = n("./src/reddit/selectors/telemetry.ts");
			var we = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				Se = n("./src/reddit/selectors/subreddit.ts"),
				Te = n("./src/reddit/selectors/widgets.ts"),
				Ie = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				Pe = n.n(Ie);
			const Ne = c.a.wrapped(K.a, "Planet", Pe.a),
				Le = c.a.img("SubredditIcon", Pe.a),
				Be = Object(o.c)({
					isHighFrequencyEnabled: he,
					spPollsEnabled: ve.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(we.a)(e, {
						subredditId: t
					}),
					tournamentsEnabled: (e, {
						subredditId: t
					}) => !!t && Object(Se.N)(e, {
						subredditId: t
					}),
					userIsSubscriber: (e, {
						subredditName: t
					}) => {
						const n = t;
						return Object(Se.gb)(e, {
							identifier: {
								name: n,
								type: "subreddit"
							}
						})
					},
					widget: (e, {
						subredditId: t
					}) => t ? Object(Te.f)(e, {
						subredditId: t
					}) : void 0
				});
			t.a = Object(i.b)(Be, (e, t) => ({
				_onOpenWelcomeMessageModal: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(Object(l.d)(s))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				onOpenWelcomeMessageModal: () => !e.userIsSubscriber && t._onOpenWelcomeMessageModal()
			}))(Object(d.a)(e => {
				const t = Object(J.a)(),
					n = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					i = e.subreddit ? e.subreddit.url : e.subredditUrl,
					o = e.subreddit ? e.subreddit.title : "",
					d = e.subreddit && Object(Oe.a)(e),
					c = !(!e.theme || !d),
					l = s.charAt(0).toUpperCase() + s.slice(1),
					u = !!e.subreddit && e.subredditInlineEditingEnabled,
					m = Object(a.a)(Pe.a.SubredditIcon, Pe.a.editableIcon, {
						[Pe.a.emptyEditableIcon]: !d
					}),
					p = r.a.createElement(fe.a, {
						className: m,
						subreddit: e.subreddit,
						iconUrl: d || void 0,
						inTopBar: !0
					}),
					b = c ? r.a.createElement(Le, {
						src: d || void 0
					}) : t ? r.a.createElement(Y, {
						className: Pe.a.DefaultIcon
					}) : r.a.createElement(Ne, null),
					h = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					x = e.layout ? e.layout === _e.g.Large ? "984px" : "100%" : "1086px";
				return r.a.createElement("div", {
					className: Pe.a.container,
					style: {
						maxWidth: x
					}
				}, r.a.createElement("div", {
					className: Pe.a.subredditMetaContainer
				}, u ? p : b, r.a.createElement("div", {
					className: Object(a.a)(Pe.a.textContainer, {
						[Pe.a.textContainerNoIcon]: !c
					})
				}, r.a.createElement("div", {
					className: Pe.a.text
				}, r.a.createElement("h1", {
					className: Pe.a.title
				}, o || l), !!o && r.a.createElement("h2", {
					className: Pe.a.description
				}, "r/", s)), r.a.createElement("div", {
					className: Pe.a.subscribeButtonContainer
				}, r.a.createElement(Ee.a, {
					className: Pe.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => ({
							...ke.defaults(t),
							source: "id_banner",
							action: je.c.CLICK,
							noun: e,
							subreddit: ke.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: s,
						type: ye.a.SUBREDDIT
					},
					onClick: e.onOpenWelcomeMessageModal,
					small: !0
				})), e.isHighFrequencyEnabled && r.a.createElement("div", {
					className: Pe.a.notificationButtonContainer
				}, r.a.createElement(xe, {
					notificationLevel: y.b.FREQUENT,
					subredditName: s,
					subredditIcon: d,
					shouldShowSubredditIcon: c
				})), e.subreddit && r.a.createElement(ge.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), h && r.a.createElement(Ce.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: i,
					subredditId: n,
					subredditNavContainerClassName: Pe.a.subredditNavContainer
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
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				x = n.n(h);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = c.a.div("FooterContainer", x.a), C = c.a.div("UserAgreement", x.a), E = c.a.a("UserAgreementLink", x.a), _ = c.a.a("PrivacyLink", x.a);
			var y = () => i.a.createElement(f, null, i.a.createElement(C, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", i.a.createElement(E, {
					href: `${s.a.redditUrl}/help/useragreement`
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", i.a.createElement(_, {
					href: `${s.a.redditUrl}/help/privacypolicy`
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				v = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				O = n("./src/reddit/components/RichTextJson/index.tsx"),
				j = n("./node_modules/lodash/flatMap.js"),
				k = n.n(j),
				w = n("./src/lib/linkMatchers/index.ts"),
				S = n("./src/lib/linkMatchers/customLinks.ts"),
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
						const t = w.f.add(S.g.subreddit.prefix, S.g.subreddit.config).match(e);
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
				H = n("./src/reddit/selectors/platform.ts"),
				U = n("./src/reddit/selectors/user.ts");
			var W = n("./src/reddit/selectors/meta.ts"),
				V = n("./src/reddit/components/ContentGate/index.m.less"),
				q = n.n(V);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = c.a.wrapped(F, "PrivateKey", q.a), G = c.a.div("ButtonsContainer", q.a), Y = c.a.div("Container", q.a), z = c.a.div("Description", q.a), Z = c.a.div("PrivateSubredditDetails", q.a), X = c.a.div("PrivateSubredditDescription", q.a), Q = c.a.h3("PrivateSubredditName", q.a), $ = c.a.a("Link", q.a), ee = c.a.wrapped(B.k, "LinkRouterButton", q.a), te = c.a.wrapped(B.j, "LinkButton", q.a), ne = c.a.wrapped(B.n, "SecondaryLinkRouterButton", q.a), se = c.a.wrapped(B.m, "SecondaryLinkButton", q.a), re = c.a.wrapped(ee, "GoHomeLinkButton", q.a), ie = c.a.img("Image", q.a), oe = c.a.img("ImagePlaceholder", q.a), ae = c.a.wrapped(ee, "LeftLinkRouterButton", q.a), de = c.a.wrapped(te, "LeftLinkButton", q.a), ce = c.a.wrapped(se, "SecondaryLeftLinkButton", q.a), le = c.a.wrapped(ne, "SecondaryLeftLinkRouterButton", q.a), ue = c.a.h3("Title", q.a), me = c.a.div("PageBody", q.a), pe = c.a.div("QuarantineMessageWrapper", q.a), be = Object(d.c)({
				isLoggedIn: U.I,
				origin: W.j,
				user: U.i,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(U.J)(e)) return !1;
					const t = Object(H.d)(e);
					if (!t) return !1;
					const n = Object(U.e)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const r = 30 * A.x;
					return s > Date.now() - r
				})(e)
			}), he = Object(L.t)(), xe = Object(o.b)(be, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), ge = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: o,
					isContributorRequestsDisabled: a,
					isPrivateSubredditContributorRequestPending: d,
					location: c,
					origin: m,
					pageLayer: h,
					quarantineRequiresEmail: x,
					quarantineMessage: g,
					quarantineMessageHtml: f,
					quarantineMessageRTJson: C,
					setNSFWPreference: E,
					subredditDescription: _,
					subredditName: y,
					user: j
				} = e, k = async () => {
					o ? await E() : await Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case D.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(ue, null, J._("r/{community name} is a Reddit Premium community", [J._param("community name", y)], {
							hk: "2lyDwB"
						})), i.a.createElement(z, null, J._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(G, null, j ? i.a.createElement(ce, {
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
						})), i.a.createElement(G, null, i.a.createElement(ae, {
							to: "/"
						}, J._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(se, {
							onClick: k
						}, J._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case D.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(K, null), i.a.createElement(ue, null, "r/", y, " ", J._("is a private community", null, {
							hk: "7zZmq"
						})), _ && _.length && i.a.createElement(Z, null, i.a.createElement(Q, null, "r/", y), i.a.createElement(X, null, i.a.createElement("div", null, _))), i.a.createElement(z, null, J._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", y, " ", J._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), J._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(G, null, j ? i.a.createElement(i.a.Fragment, null, !a && i.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: q.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), i.a.createElement(ce, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${y}`
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
						}) : f ? i.a.createElement(v.a, {
							html: f
						}) : g || J._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), J._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(G, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? i.a.createElement(G, null, i.a.createElement(le, {
								to: "/"
							}, J._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(te, {
								href: `${s.a.redditUrl}/prefs/update`
							}, J._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(G, null, i.a.createElement(ae, {
								to: "/"
							}, J._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(se, {
								onClick: t
							}, J._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(j, r, x)));
					case D.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(ue, null, J._("r/{community name} has been banned from Reddit", [J._param("community name", y)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(z, null, e ? i.a.createElement(N, {
							linkClassName: q.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : J._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(G, null, i.a.createElement(ee, {
							to: "/"
						}, J._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, J._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(G, null, i.a.createElement(ee, {
							to: "/"
						}, J._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(oe, null), i.a.createElement(ue, null, J._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(z, null, J._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(G, null, j && i.a.createElement(b.a, {
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
						})(e)), i.a.createElement(G, null, i.a.createElement(re, {
							to: "/"
						}, J._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, J._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(G, null, i.a.createElement(re, {
							to: "/"
						}, J._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, J._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(G, null, i.a.createElement(ee, {
							to: "/"
						}, J._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = he(xe(Object(a.i)(e => i.a.createElement(Y, null, i.a.createElement("div", null, i.a.createElement(me, null, ge(e))), i.a.createElement(y, null)))))
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
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = n.n(h),
				g = n("./src/lib/lessComponent.tsx");
			const f = "create-community-button",
				C = g.a.wrapped(c.c, "StyledTooltip", x.a),
				E = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.gb)(e),
					userIsSuspended: b.O
				});
			t.a = Object(o.b)(E, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(p.b)(t)), e(Object(m.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: f
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: r,
				openCommunityCreation: o,
				sendEvent: a,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: c
			}) => i.a.createElement(u.l, {
				className: e,
				disabled: c || d,
				onClick: () => o(a),
				onMouseEnter: n,
				onMouseLeave: r,
				id: f,
				isFullWidth: !0
			}, s.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), d ? i.a.createElement(C, {
				caretOnTop: !0,
				tooltipId: f,
				text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : c ? i.a.createElement(C, {
				caretOnTop: !0,
				tooltipId: f,
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
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/downToChat.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				u = n("./src/reddit/selectors/downToChat.ts"),
				m = n("./src/reddit/selectors/experiments/downToChat.ts"),
				p = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				b = n.n(p);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = Object(o.c)({
				isDownToChatExperimentEnabled: m.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(u.c)(e, t.id)
			}), g = Object(i.b)(x, e => ({
				startChatting: t => e(Object(a.i)(t))
			}));
			t.a = g(Object(d.c)(e => {
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
				return o
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
				o = Object(r.a)("spBurnLinks", Object(s.a)({
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
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(i);
			const a = r.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return r.a.createElement("div", {
					className: o.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
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
				o = n("./src/reddit/constants/page.ts");
			const a = e => e && e.toLowerCase() === i.b.Popular,
				d = e => e && e.toLowerCase() === i.b.All,
				c = e => e && e === o.b,
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
					let o, u, m, p, b;
					const h = n && n.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						x = n && n.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let g, f;
					return c(e) ? (o = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = i.c[i.b.Home], u = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(e) ? (o = `${r.a.assetPath}/img/id-cards/banner@2x.png`, u = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = i.c[i.b.All]) : a(e) ? (o = `${r.a.assetPath}/img/id-cards/banner@2x.png`, u = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = i.c[i.b.Popular]) : e && (u = n && n.description, m = l(""), p = t.displayText, b = t.url, f = n && n.subscribersCount, g = n && n.currentlyViewingCount), {
						snooBackground: m,
						description: u,
						titleText: p,
						url: b,
						subscribersCount: f,
						subscribersText: h,
						currentlyViewingText: x,
						currentlyViewingCount: g,
						...o ? {
							bannerBackgroundImage: o
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
				o = n("./src/reddit/components/IdCard/index.m.less"),
				a = n.n(o);
			const d = ({
				snooBackground: e
			}) => r.a.createElement("div", {
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
			}) => r.a.createElement("div", {
				className: Object(i.a)(a.a.Title, a.a.TitleShifted)
			}, r.a.createElement(d, {
				snooBackground: t
			}), r.a.createElement("div", {
				className: a.a.TitleTextShiftedContainer
			}, r.a.createElement("span", {
				className: a.a.TitleText
			}, e)))
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "i", (function() {
				return S
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/lodash/isNil.js"),
				d = n.n(a),
				c = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
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
				x = n("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const n = Object(h.a)(e, t),
					s = Object(x.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var f = Object(i.b)(() => Object(o.a)(g, b.j, (e, t) => ({
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
					s = Object(x.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var E = Object(i.b)(() => Object(o.a)(C, e => e))(e => r.a.createElement(p, {
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
			var _ = Object(i.b)(() => Object(o.c)({
					subreddit: x.T
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
				y = n("./src/reddit/hooks/usePostContext.ts");
			var v = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(y.a)(), i = Object(s.useMemo)(() => ({
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
				} = Object(y.a)(), o = Object(s.useMemo)(() => ({
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
					data: o
				})
			};
			var j = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(y.a)(), i = Object(s.useMemo)(() => ({
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
			var k = Object(i.b)(() => Object(o.c)({
				subreddit: x.T
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
			var w = Object(i.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(x.L)(e, {
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
			var S = Object(i.b)(() => Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(x.T)(e, {
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
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(i.b)(() => Object(o.c)({
					isNightmodeOn: m.V
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
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
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/controls/OutboundLink/index.tsx"),
				x = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/constants/tracking.ts"),
				E = n("./src/reddit/components/Media/blurredContent.ts"),
				_ = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				y = n.n(_);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => e > 2 * x.e,
				j = e => {
					const t = Object(c.a)(y.a.image, b.g, e.className, {
							[y.a.mShowCentered]: e.showCentered,
							[y.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${x.j}px`), e.isListing || e.isTall && O(e.height) || (n.maxHeight = `${x.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), i.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				k = e => {
					const t = {};
					return (!e.showFull && Object(x.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${x.j}px`, e.shouldBlur && (t.maxWidth = Object(x.I)(e.height, e.width) ? `${x.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(y.a.container, e.className),
						style: t
					}, e.children)
				},
				w = Object(o.b)(() => Object(d.a)(g.E, f.bb, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(g.b)(e, n) : null, (e, t, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n
				})));
			t.a = w(e => e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
				href: e.outboundUrl,
				target: "_blank",
				rel: u.a,
				onMouseDown: t => {
					e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(h.c)(t.currentTarget, e.postId, e.basePixelMetadata)
				}
			}, T(e)) : e.isListing && e.postPermalink ? i.a.createElement(a.a, {
				target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
				to: Object(m.a)(e.postPermalink)
			}, T(e)) : T(e));
			const S = (e, t) => i.a.createElement(j, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[C.a]: !e
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
				T = ({
					onClick: e,
					...t
				}) => {
					const n = Object(x.I)(t.height, t.width),
						r = O(t.height) && n;
					return i.a.createElement(k, v({}, t, {
						className: `${n?`${C.a} `:""}${t.className||""}`
					}), t.isListing ? i.a.createElement("div", {
						className: t.contentImageClassName
					}, S(n, t)) : i.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, S(n, t)), t.isListing && !t.showFull && t.height > x.j && Object(x.I)(t.height, t.width) && i.a.createElement("div", {
						className: y.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && i.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && i.a.createElement("div", {
						className: y.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: y.a.unblurButton
					}, Object(E.a)(!!t.isNSFW, !!t.isSpoiler))))
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
				o = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				d = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = n.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
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
						src: Object(o.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
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
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const h = 100,
				x = h / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class C extends o.a.Component {
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
						let o = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(a = d);
							if (e.paused || e.seeking || !n) return void(a = d);
							const r = o;
							4 === e.readyState ? o = !1 : !o && d >= a && d < a + x ? o = !0 : o && d >= a && d > a + x && (o = !1), a = d, r !== o && t(o)
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
						src: Object(g.a)(this.props.source || "")
					}))
				}
			}
			var E = C,
				_ = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				y = n.n(_);
			const v = Object(d.c)({
					autoplayPref: p.b,
					consumed: b.a,
					loadTimes: b.f,
					metadata: b.h,
					started: b.k
				}),
				O = Object(a.b)(v, (e, {
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
			class j extends o.a.Component {
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
						return e && (n.margin = "0 auto"), t || (n.maxHeight = `${m.e}px`), o.a.createElement(E, {
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
							style: n,
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
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(o.b)(null, e => ({
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
			t.a = p(Object(a.a)(b))
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
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
				x = m.a.span("InnerSpan", u.a),
				g = m.a.span("TooltipTarget", u.a),
				f = m.a.span("SpoilerWrapper", u.a),
				C = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => i.a.createElement(f, p({}, n, {
					className: Object(o.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				E = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class _ extends i.a.Component {
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
					}, i.a.createElement(x, null, i.a.createElement(g, {
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
			t.a = _
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
				return x
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "t", (function() {
				return w
			})), n.d(t, "p", (function() {
				return S
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
				o = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(o),
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
			const u = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				m = d.a.hr("Hr", a.a),
				p = d.a.code("M", a.a),
				b = d.a.pre("Pre", a.a),
				h = d.a.blockquote("Blockquote", a.a),
				x = d.a.p("P", a.a),
				g = d.a.li("Li", a.a),
				f = d.a.ul("Ul", a.a),
				C = d.a.ol("Ol", a.a),
				E = d.a.strong("B", a.a),
				_ = d.a.em("I", a.a),
				y = d.a.span("U", a.a),
				v = e => r.a.createElement("del", e),
				O = d.a.sub("Sub", a.a),
				j = d.a.sup("Sup", a.a),
				k = d.a.table("Table", a.a),
				w = d.a.tr("Tr", a.a),
				S = d.a.td("Tdl", a.a),
				T = d.a.td("Tdc", a.a),
				I = d.a.td("Tdr", a.a),
				P = d.a.th("Thl", a.a),
				N = d.a.th("Thc", a.a),
				L = (d.a.th("Thr", a.a), d.a.wrapped(e => r.a.createElement(i.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "A", a.a)),
				B = d.a.wrapped(c.a, "A", a.a)
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
				o = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/blurredContent.ts"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
				x = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.m.less"),
				f = n.n(g);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = n("./src/lib/lessComponent.tsx").a.div("Container", f.a),
				_ = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => o.a.createElement(E, C({}, n, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				y = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				v = e => r()(e, y),
				O = e => e.findIndex(y),
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
						rtJsonElementProps: g,
						useExplicitTextColor: C,
						shouldBlur: y
					} = e, j = s.document, k = [], w = e.mediaMetadata || null, S = O(j), T = v(j);
					if (y && !r) return o.a.createElement(E, {
						className: Object(a.a)(u.j, n)
					}, o.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: c
					}, Object(l.a)(!!i, !!d))));
					if (-1 !== S)
						for (let o = S; o <= T; o++) {
							const e = j[o];
							switch (e.e) {
								case b.k:
									k.push(x.c(e, g, o));
									break;
								case b.l:
									k.push(x.d(o));
									break;
								case b.b:
									k.push(x.a(e, w, g, o));
									break;
								case b.c:
									k.push(x.b(e, o));
									break;
								case b.p:
									k.push(x.f(e, w, g, o));
									break;
								case b.z:
									k.push(x.h(e, w, g, o));
									break;
								case b.u:
									k.push(x.g(e, w, g, o));
									break;
								case b.h:
									k.push(Object(h.a)(e, o));
									break;
								case b.m:
								case b.a:
								case b.D:
									k.push(...Object(h.b)(e, o, w, p, m, t))
							}
						}
					return C ? o.a.createElement(E, {
						className: Object(a.a)(u.j, n)
					}, k) : o.a.createElement(_, {
						className: Object(a.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, k)
				};
			class k extends o.a.Component {
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
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/elements.tsx"),
				x = n("./src/reddit/components/RichTextJson/media.m.less"),
				g = n.n(x),
				f = n("./src/lib/lessComponent.tsx");

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
				_ = f.a.wrapped(h.a, "A", g.a),
				y = f.a.wrapped(l.a, "ImageBox", g.a),
				v = f.a.wrapped(e => i.a.createElement("p", e), "Caption", g.a),
				O = f.a.div("Placeholder", g.a),
				j = f.a.wrapped(({
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
				}, "Placeholder", g.a),
				k = ({
					c: e,
					x: t,
					y: n
				}, s) => i.a.createElement("div", {
					className: g.a.MediaWrapper
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
				w = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === b.s ? r = n.s.u : n.e === b.r ? r = n.s.gif : n.e === b.t && (r = (e => {
						const t = E.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? i.a.createElement(_, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				S = (e, t, n, s, r, a) => {
					const c = b.E(n, e.id);
					if (s) return [w(e, t, c)];
					const l = [];
					return c ? c.e === b.s ? l.push((({
						id: e,
						s: t
					}, n, s, r) => i.a.createElement("div", {
						className: Object(o.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: s
						})
					}, i.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, i.a.createElement(y, {
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
					}))))(c, t, !!e.c, a)) : c.e === b.r ? l.push((({
						id: e,
						ext: t,
						s: n
					}, s, r) => {
						if (Object(p.f)(e)) {
							const a = t || Object(p.e)(e);
							return i.a.createElement("div", {
								className: Object(o.a)(g.a.MediaWrapper, {
									[g.a.mHasCaption]: r
								})
							}, i.a.createElement(_, {
								href: a,
								key: s,
								target: "_blank"
							}, n.mp4 ? i.a.createElement("video", {
								className: g.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: n.mp4
							})) : {
								originalSource: a
							}))
						}
						return i.a.createElement("div", {
							className: Object(o.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: r
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
					}, a, c, l) => i.a.createElement("div", {
						className: Object(o.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: c
						})
					}, i.a.createElement(u.a, {
						height: s,
						isListing: !1,
						isVideo: !0,
						key: a,
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/v4.js"),
				l = n.n(c),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var x = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				f = n.n(g);
			const C = 1e3,
				E = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class y extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = _.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = _.Inside, setTimeout(() => {
							this.mouseLocation === _.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, C)
					}, this.onMouseOut = () => {
						this.mouseLocation = _.Outside, setTimeout(() => {
							this.mouseLocation !== _.Inside && this.setState({
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
					return r ? a.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: i,
						src: r,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(x, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: i,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var v = Object(u.c)(y),
				O = n("./src/reddit/components/RichTextJson/media.tsx"),
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				k = n("./src/reddit/components/SubredditMention/index.tsx"),
				w = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				S = n("./src/reddit/helpers/richTextJson/index.ts");
			const T = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						i = [],
						o = s.length;
					for (let a = 0; a < o; a++) {
						const e = s[a];
						i.push(e.e === p.w ? e.t : D(e, t, a))
					}
					const c = d.x[r - 1];
					return a.a.createElement(c, {
						key: n
					}, i)
				},
				I = e => a.a.createElement(d.e, {
					key: e
				}),
				P = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const i = r.length,
						o = [];
					for (let a = 0; a < i; a++) o.push(B(r[a], t, n, a));
					return a.a.createElement(d.c, {
						key: s
					}, o)
				},
				N = (e, t) => {
					const n = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				L = (e, t, {
					renderingObjectInfo: n
				}, s) => {
					const r = e.c,
						i = [],
						o = r.length;
					for (let l = 0; l < o; l++) {
						const e = r[l].c;
						e && e.length && i.push(a.a.createElement(d.g, {
							key: l
						}, e.map((e, s) => B(e, t, {
							renderingObjectInfo: n
						}, s))))
					}
					const c = e.o ? d.i : d.v;
					return a.a.createElement(c, {
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
						o = r.length,
						c = i.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = i[d],
							{
								H: s,
								D: r
							} = W(e.a),
							{
								c: o = []
							} = e;
						l.push(a.a.createElement(s, {
							key: d
						}, F(o, t, n))), m[d] = r
					}
					for (let p = 0; p < o; p++) {
						const e = r[p],
							s = e.length,
							i = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: o = []
								} = e[r];
							i.push(a.a.createElement(s, {
								key: r
							}, F(o, t, n)))
						}
						u.push(a.a.createElement(d.t, {
							key: p
						}, i))
					}
					return a.a.createElement(d.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, l)), a.a.createElement("tbody", null, u))
				},
				R = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(S.f)(r.id) ? a.a.createElement(d.j, {
						key: s
					}, F(e.c, t, n)) : Object(O.b)(r, s, t)
				},
				F = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let i = 0; i < r; i++) {
						const r = e[i];
						if (r.e === p.A) s.push(A(r, i));
						else if (r.e === p.x) s.push(a.a.createElement(j.a, {
							key: i
						}, F(r.c, t, n)));
						else if (r.e === p.n) s.push(a.a.createElement("br", {
							key: i
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(a.a.createElement(v, {
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
							return Object(w.b)(e.u) ? a.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s) : a.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a
							}, s);
						case p.y:
							return a.a.createElement(k.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(d.a, {
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
					if (!n) return U(0, r, t);
					const o = Object(s.a)(r);
					let a = 0,
						d = 0;
					const c = n.length;
					for (; a < c; a++) {
						const [e, t, s] = n[a], c = t + s, l = o[t], u = o[c] - l;
						l > d && i.push(U(0, r.substr(d, l - d), `between${a}`)), i.push(U(e, r.substr(l, u), a)), d = l + u
					}
					return d < r.length && i.push(U(0, r.substr(d), `remaining${a}`)), i
				},
				H = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				U = (e, t, n) => {
					let s = t;
					return s = i()(H, (t, s, r) => e & parseInt(r, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				W = e => {
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
				o = n.n(i),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/contexts/Post/index.tsx"),
				g = n("./src/reddit/controls/InternalLink/index.tsx"),
				f = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				C = n("./src/reddit/helpers/name/index.ts"),
				E = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/models/Theme/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = n("./src/reddit/components/MiniCardPost/index.m.less"),
				O = n.n(v),
				j = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				k = n.n(j);
			const w = e => e.type === E.f.Spoiler,
				S = Object(h.t)();
			t.a = S(Object(x.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: x,
					shouldOpenPost: E,
					showSubredditMeta: v = !0,
					showSubredditName: j,
					subredditOrProfile: S
				} = e, T = h && h.preview && h.preview.url || void 0, I = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", N = E && P || x && Object(a.a)("/search", {
					q: x.rawQuery,
					source: I
				}) || P, L = x ? x.subredditInfo && x.subredditInfo.icon : S && S.icon.url, B = x ? x.subredditInfo && x.subredditInfo.displayText : S && (S.displayText || S.name), M = h ? h.flair.filter(w) : [], R = h ? h.score : 0, F = h ? h.numComments : 0, D = h && h.isSponsored, A = Object(y.a)(e).body, H = `linear-gradient(\n      ${Object(r.g)(A,.2)},\n      ${Object(r.g)(A,.3)},\n      ${Object(r.g)(A,.4)},\n      ${Object(r.g)(A,.6)},\n      ${Object(r.g)(A,.8)},\n      ${A}\n    )`, U = o.a.createElement("div", {
					id: i,
					className: Object(d.a)(k.a.trendingPost, {
						[k.a["m-background"]]: !!T
					})
				}, o.a.createElement(g.a, {
					to: N
				}, o.a.createElement("div", {
					className: Object(d.a)(k.a.backgroundWrapper, O.a.backgroundWrapper, t),
					style: {
						background: Object(_.g)(Object(y.a)(e).body, T || Object(y.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": H
					}
				}, D && o.a.createElement("div", {
					className: k.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), o.a.createElement("div", {
					className: Object(d.a)(k.a.innerContainer, O.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, o.a.createElement("h2", {
					className: h ? k.a.title : k.a.titleNoDescription
				}, e.title), h ? o.a.createElement("div", {
					className: Object(d.a)(k.a.description, n)
				}, M.length > 0 && o.a.createElement(m.a, {
					className: k.a.flair,
					titleFlair: M,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : o.a.createElement("div", {
					className: k.a.spacer
				}), v && L && B && o.a.createElement(f.a, {
					className: k.a.relatedSubredditMetaData,
					iconClassName: k.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", B)], {
						hk: "2YTyJf"
					})
				}), !v && h && o.a.createElement("div", {
					className: k.a.metaLine
				}, j && B && o.a.createElement("span", {
					className: k.a.meta
				}, Object(C.c)(B)), o.a.createElement("span", {
					className: k.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(R, "number", Object(u.b)(R))], {
					hk: "1Jm6il"
				})), o.a.createElement("span", {
					className: k.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(F, "number", Object(u.b)(F))], {
					hk: "311aXY"
				})))))));
				return D ? o.a.createElement(p.a, {
					post: h
				}, U) : U
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/selectors/brandSafety.ts"),
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
			const m = Object(o.t)();
			t.a = m(Object(i.b)((e, {
				listingName: t,
				pageLayer: n
			}) => {
				const s = Object(a.b)(e, {
						listingName: t,
						pageLayer: n
					}),
					r = Object(c.A)(e) || Object(d.a)(e),
					i = Object(a.e)(e);
				return {
					canShowAd: s && !r,
					forcePlaceholder: !Object(a.c)(e),
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
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				f = n("./src/reddit/icons/svgs/Upload/index.tsx"),
				C = n("./src/reddit/models/ApiRequestState/index.ts"),
				E = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				_ = n("./src/reddit/components/SubredditIcon/index.m.less"),
				y = n.n(_);

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
					} = e, o = Object(h.a)(), a = [n, y.a.inTopBar, y.a.iconContainer];
					return s ? a.push(y.a.emptyEditableIconInTopBar) : a.push(y.a.editableIcon, y.a.emptyEditableIcon), i.a.createElement("span", v({}, r, {
						className: Object(d.a)(...a)
					}), s ? o ? i.a.createElement(x.a, {
						name: "upload",
						className: y.a.emptyUploadButton
					}) : i.a.createElement(f.a, {
						className: y.a.emptyUploadButton
					}) : o ? i.a.createElement(x.a, {
						name: "add",
						className: y.a.emptyPlusButton
					}) : i.a.createElement(g.a, {
						className: y.a.emptyPlusButton
					}), e.children)
				},
				j = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: r,
						onClick: o,
						inTopBar: a,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: y.a.iconContainer
					}, i.a.createElement("img", {
						alt: s,
						onClick: o,
						role: r,
						src: c,
						className: Object(d.a)(n, {
							[y.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				k = Object(a.c)({
					isLoading: E.b
				});
			class w extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: y.a.imageUploader,
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
						className: y.a.clickableUploadText,
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
						const e = [y.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(y.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
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
						className: y.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(o.b)(k, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(c.a)(t.subreddit, n, s))
				}
			}))(Object(l.c)(w))
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
				o = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
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
			const u = i.a.wrapped(o.b, "SubredditIcon", c.a),
				m = i.a.wrapped(e => r.a.createElement(a.b, l({}, e, {
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
				return y
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
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
				x = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = n("./src/reddit/selectors/subredditMention.ts");
			class f extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const C = Object(b.c)(f),
				E = Object(o.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				_ = Object(i.b)(E),
				y = ({
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
						case h.nd.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: i
							});
						case h.nd.SmIconHc:
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
			t.b = _(y)
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				x = n("./src/reddit/components/IdCard/async.tsx"),
				g = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/reddit/components/IdCard/helpers.ts"),
				C = e => !Object(g.a)(e) || Object(f.c)(e) || Object(f.d)(e) || Object(f.e)(e),
				E = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				_ = n("./src/reddit/components/PowerupsSidebar/index.tsx"),
				y = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				v = n("./src/reddit/components/SidebarContainer/index.tsx"),
				O = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				j = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				k = n("./src/lib/makeListingKey/index.ts"),
				w = n("./src/reddit/actions/subreddit.ts"),
				S = n("./src/lib/classNames/index.ts"),
				T = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/helpers/name/index.ts"),
				N = n("./src/reddit/helpers/overlay/index.ts"),
				L = n("./src/reddit/selectors/experiments/topPosts.ts"),
				B = n("./src/reddit/selectors/posts.ts"),
				M = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const R = .99;
			class F extends a.a.Component {
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
					return a.a.createElement(M.a, {
						threshold: R,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var D = F,
				A = n("./src/lib/isUrl/index.ts"),
				H = n("./src/lib/prettyPrintNumber/index.ts"),
				U = n("./src/reddit/components/FlairWrapper/index.tsx"),
				W = n("./src/reddit/components/Thumbnail/index.tsx"),
				V = n("./src/reddit/models/Flair/index.ts"),
				q = n("./src/reddit/models/Subreddit/index.ts"),
				J = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				K = n.n(J);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = e => e.type === V.f.Nsfw || e.type === V.f.Spoiler, z = Object(c.c)({
				post: B.F,
				subredditOrProfile: B.R
			});
			class Z extends a.a.PureComponent {
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
					}, o = Object(A.a)(Object(W.b)(i)), d = t.flair.filter(Y);
					return a.a.createElement("div", {
						className: Object(S.a)(K.a.container, e, {
							[K.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: K.a.mainLine
					}, o && a.a.createElement("div", {
						className: K.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(W.a, i)), a.a.createElement("div", {
						className: Object(S.a)(K.a.title, !o && K.a.titleSingle),
						title: t.title
					}, d.length > 0 && a.a.createElement(U.a, {
						className: K.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), a.a.createElement("div", {
						className: K.a.metaLine
					}, s && !!r && a.a.createElement("span", {
						className: K.a.meta
					}, Object(q.h)(r) ? Object(P.d)(r.displayText || r.name) : Object(P.c)(r.displayText || r.name)), a.a.createElement("span", {
						className: K.a.meta
					}, G._({
						"*": "{score} points",
						_1: "1 point"
					}, [G._plural(t.score, "score", Object(H.b)(t.score))], {
						hk: "1JZ0qm"
					})), a.a.createElement("span", {
						className: K.a.meta
					}, G._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [G._plural(t.numComments, "numComments", Object(H.b)(t.numComments))], {
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
			class ie extends a.a.Component {
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
						return a.a.createElement(D, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, a.a.createElement(X, {
							className: Object(S.a)($.a.smallPost, i),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(g.a)(Object(P.g)(t)),
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
						redditStyle: o,
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
						[x, ...f] = h,
						C = b ? h.slice(0, ne) : f.slice(0, ne),
						E = b ? h.slice(ne) : f.slice(ne);
					return a.a.createElement("div", {
						className: Object(S.a)($.a.container, t, {
							[$.a.redditStyle]: o
						})
					}, !b && a.a.createElement(D, {
						onPostVisible: r,
						postId: x.id
					}, a.a.createElement(T.a, {
						postId: x.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(P.g)(n)),
						trendingPost: x
					})), C.map(this.renderSmallPost), e, E.map(this.renderSmallPost), d && a.a.createElement(I.o, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, s || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var oe = Object(d.b)(re, e => ({
					openPost: t => e(Object(N.a)(t.permalink))
				}))(ie),
				ae = n("./src/reddit/components/TrackingHelper/index.tsx"),
				de = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ce = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = n("./src/reddit/selectors/discoveryUnit.ts"),
				me = n("./src/reddit/selectors/subreddit.ts"),
				pe = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = n.n(pe);
			const he = 10,
				xe = Object(c.a)((e, t) => t.subredditName, e => Object(k.a)(e, l.P.TOP, {
					t: l.Wb.WEEK
				})),
				ge = Object(c.c)({
					discoveryUnit: e => Object(ue.c)(e, {
						unitName: le.j
					}),
					listingKey: xe,
					posts: (e, t) => {
						const n = xe(e, t);
						return Object(B.L)(e, {
							listingKey: n
						})
					},
					subreddit: me.A
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
						subredditName: o,
						topPostsVariant: d
					} = this.props;
					if (0 === i.length) return null;
					const c = o,
						l = i.length > he;
					return a.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, a.a.createElement(oe, {
						listingKey: n,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, a.a.createElement("div", null, e)))
				}
			}
			var Ce = Object(d.b)(ge, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(w.r)({
						sort: l.P.TOP,
						subredditName: t,
						t: l.Wb.WEEK
					}))
				}))(Object(ae.c)(fe)),
				Ee = n("./src/config.ts"),
				_e = n("./src/lib/localStorageAvailable/index.ts"),
				ye = n("./src/reddit/actions/modal.ts"),
				ve = n("./src/higherOrderComponents/asModal/index.tsx"),
				Oe = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				je = n("./src/reddit/controls/TextButton/index.tsx"),
				ke = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: we
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class Se extends a.a.Component {
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(Oe.d, null, a.a.createElement(Oe.h, null, a.a.createElement(ke.a, null, a.a.createElement(Oe.p, null, we._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), a.a.createElement(je.a, {
						onClick: e.toggleModal
					}, a.a.createElement(Oe.b, null)))), a.a.createElement(Oe.k, null, a.a.createElement(Oe.o, null, we._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), a.a.createElement(Oe.f, null, a.a.createElement(Oe.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, we._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(Oe.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, we._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var Te = Object(ve.a)(Se),
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
				He = n("./src/reddit/selectors/activeModalId.ts"),
				Ue = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				We = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Ve = n("./src/reddit/selectors/structuredStyles.ts"),
				qe = n("./src/reddit/components/IdCard/index.m.less"),
				Je = n.n(qe),
				Ke = n("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				Ge = n.n(Ke);
			const Ye = "mod_onboarding_modal",
				ze = "mod_onboarding_widget",
				Ze = Object(c.a)(He.a, (e, t) => Object(We.a)(Ae.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(Ve.k)(e, {
					subredditId: t.subredditId
				}), Ue.a, (e, t, n, s) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					isInIcons2020: s,
					modHasEditedBanner: !n || !!(n.bannerBackgroundImage || n.bannerHeight || n.bannerPositionedImage || n.bannerBackgroundColor),
					modHasEditedColors: !n || !!(n.primaryColor || n.highlightColor || n.backgroundColor || n.backgroundImage),
					modHasEditedIcon: !n || (!!n.communityIcon || !!n.bannerShowCommunityIcon)
				}));
			class Xe extends a.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(Be.tb)(ze, !0, this.props.subredditId), this.props.sendEvent(Object(Me.d)("close"))
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
					} = this.props, i = e && !(t && n && s) && (!Object(_e.a)() || !Object(Be.y)(ze, r));
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
						subredditName: o,
						toggleCloseMenuModal: d
					} = this.props;
					return this.state.visible ? a.a.createElement(de.a, {
						className: Object(S.a)(Ge.a.container, this.props.className)
					}, a.a.createElement(Ie.a, {
						bannerBackgroundImage: `${Ee.a.assetPath}/img/id-cards/mod-onboarding@2x.png`
					}), t ? a.a.createElement(Re.a, {
						name: "close",
						className: Ge.a.closeIcon,
						onClick: d
					}) : a.a.createElement(De.a, {
						className: Ge.a.closeIcon,
						onClick: d
					}), Object(Pe.a)({
						titleText: s.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(f.b)(`url('${Ee.a.assetPath}/img/id-cards/snoo-artist@2x.png')`)
					}), a.a.createElement("div", {
						className: Object(S.a)(Je.a.Description, Ge.a.description)
					}, s.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [s.fbt._param("=Customize Appearance Overview", a.a.createElement("a", {
						href: Ne.e.exportImport,
						className: Ge.a.modHelpLink,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), a.a.createElement(Le.a, {
						to: `/r/${o}?styling=true&route=${Ne.c.NameAndIcon}`,
						className: Ge.a.link,
						onClick: this.customizeIcon
					}, i ? a.a.createElement(Fe.a, {
						className: Ge.a.checked
					}) : a.a.createElement(Fe.a, {
						className: Ge.a.unchecked
					}), s.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), a.a.createElement(Le.a, {
						to: `/r/${o}?styling=true&route=${Ne.c.Banner}`,
						className: Ge.a.link,
						onClick: this.customizeBannerImage
					}, n ? a.a.createElement(Fe.a, {
						className: Ge.a.checked
					}) : a.a.createElement(Fe.a, {
						className: Ge.a.unchecked
					}), s.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), a.a.createElement(Le.a, {
						to: `/r/${o}?styling=true&route=${Ne.c.Global}`,
						className: Ge.a.link,
						onClick: this.customizeThemeColors
					}, r ? a.a.createElement(Fe.a, {
						className: Ge.a.checked
					}) : a.a.createElement(Fe.a, {
						className: Ge.a.unchecked
					}), s.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), a.a.createElement(I.n, {
						to: `/r/${o}?styling=true`,
						className: Ge.a.button,
						onClick: this.customizeAppearance
					}, s.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), a.a.createElement("div", {
						className: Ge.a.subtext
					}, s.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === Ye && a.a.createElement(Te, {
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
					toggleCloseMenuModal: () => e(Object(ye.i)(Ye))
				}))(Object(ae.c)(Xe)),
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
				ot = Object(c.c)({
					communities: tt.c
				});
			var at = Object(d.b)(ot)(e => {
					const t = Object(ae.b)();
					return e.communities && e.communities.length ? a.a.createElement(O.a, null, a.a.createElement($e.b, {
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
				xt = n.n(ht);
			const gt = 250,
				ft = 270,
				Ct = u.a.wrapped(v.a, "SidebarContainer", xt.a),
				Et = Object(c.c)({
					apiError: bt.c,
					apiPending: bt.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(mt.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(mt.c)(e, t),
					isPredictionsLeaderboardsEnabled: pt.h,
					showGovernance: ct.d.spPoints,
					showLeaderboard: ct.d.spLeaderboard,
					showPredictionsLeaderboard: (e, {
						subredditId: t
					}) => Object(me.M)(e, {
						subredditId: t
					}) && !Object(me.N)(e, {
						subredditId: t
					}),
					widgets: me.s
				}),
				_t = Object(d.b)(Et);
			class yt extends o.Component {
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
						subredditId: o,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const g = Object(L.a)(c),
						f = Object(L.b)(c),
						v = Object(L.c)(c),
						k = g || f;
					let w, S;
					!!this.getPostFlairWidget() ? w = this.props.widgets : (w = this.getCommunityWidgets(), S = this.makeFlairFilterWidget());
					const T = this.makeRelatedCommunitiesWidget(g, f),
						I = !g,
						P = f,
						N = a.a.createElement(y.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: n,
							placementIndex: u++,
							position: lt.a.FIRST,
							sizes: l.h
						});
					return a.a.createElement(Ct, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, C(n) && a.a.createElement(x.a, {
						listingName: n
					}), a.a.createElement(p.a, {
						cardClassName: xt.a.card,
						subredditId: o
					}), a.a.createElement(_.a, {
						subredditId: o
					}), t && i && a.a.createElement(m.a, {
						subredditId: o
					}), k && a.a.createElement(O.a, null, a.a.createElement(Ce, {
						subredditName: d,
						topPostsVariant: c
					}, a.a.createElement("div", {
						className: xt.a.inFeedAd
					}, N))), k && T && a.a.createElement(O.a, null, a.a.createElement(dt.a, {
						subredditName: d,
						truncateThreshold: ft,
						widget: T
					})), P && w.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(dt.a, {
							subredditName: d,
							truncateThreshold: gt,
							widget: e
						}))
					}), a.a.createElement(Qe, {
						subredditId: o,
						subredditName: d
					}), s && a.a.createElement(b.a, {
						className: xt.a.card,
						subredditId: o
					}), S && a.a.createElement(O.a, null, a.a.createElement(dt.a, {
						subredditName: d,
						widget: S
					})), r && a.a.createElement(h.a, {
						className: xt.a.card,
						subredditId: o,
						uniqueId: o
					}), a.a.createElement(E.g, {
						subredditId: o
					}), !k && N, a.a.createElement(at, {
						subredditId: o
					}), I && !P && w.map((e, t) => {
						const n = "community-list" === e.kind;
						return a.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(dt.a, {
							subredditName: d,
							truncateThreshold: v && n ? ft : v ? gt : void 0,
							widget: e
						}))
					}), a.a.createElement(j.a, {
						adComponent: a.a.createElement(y.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: n,
							placementIndex: u++,
							position: lt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = _t(yt)
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
				o = n("./src/reddit/actions/postFlair.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
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
				}) => e(Object(o.h)({
					post: t,
					previewFlair: n,
					selectedTemplateId: s
				})),
				handleVote: n => {
					const s = n === d.a.upvoted ? Object(i.bb)(t) : Object(i.u)(t);
					e(s)
				},
				onIgnoreReports: () => e(Object(i.X)(t)),
				onOpenReportsDropdown: t => e(Object(a.h)({
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
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(s)(e => {
					const {
						featureEnabled: s,
						...i
					} = e, o = i;
					return s ? r.a.createElement(t, o) : void 0 !== n ? r.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
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

			function o(e, t) {
				return r + e + (t ? i : "")
			}

			function a(e) {
				return e && 0 === e.indexOf(r)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(a)
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
				return o
			})), n.d(t, "e", (function() {
				return a
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
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, n) {
			"use strict";
			n.d(t, "p", (function() {
				return o
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "b", (function() {
				return v
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => ({
					...r.defaults(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e),
					powerups: {
						...r.subredditPowerups(e),
						freeCount: t,
						paidCount: n
					}
				}),
				o = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...i(t),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				a = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				d = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersup_become_hero",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersups_see_all_heroes",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				l = e => (t, n) => s => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...i(s),
					profile: {
						id: t,
						name: n,
						type: "default"
					}
				}),
				u = l("postlist_supporters_cta"),
				m = l("comm_heroes_modal"),
				p = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				b = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				h = () => e => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...i(e)
				}),
				x = (e, t) => n => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...i(n, e, t)
				}),
				g = (e, t) => n => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...i(n, e, t)
				}),
				f = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...i(n, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				C = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				E = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				_ = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...i(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				y = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...i(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				v = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...i(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return O
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/isComment.ts"),
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
					if (t && (Object(a.b)(t) || Object(d.b)(t))) return Object(a.b)(t) ? m.SourceElement.Comment : Object(o.w)(n) ? m.SourceElement.PostDetail : Object(o.E)(n) ? m.SourceElement.ListingPostDetail : void 0
				},
				x = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(d.b)(n) && !Object(a.b)(n)) return {
						outbound: void 0
					};
					const r = Object(d.b)(n) ? "postId" : "commentId",
						i = {
							url: `/r/${s}/`,
							sourceElement: h(0, t),
							subredditName: s,
							[r]: n.id
						},
						o = Object(l.A)(e, {
							subredditName: s
						});
					return o ? {
						outbound: {
							...i,
							url: o.url,
							subredditId: o.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				g = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(d.b)(n) && !Object(a.b)(n)) return {};
					const s = Object(d.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.post(e, n.id),
						subreddit: u.subredditById(e, s),
						...x(e, t)
					}
				},
				f = e => t => ({
					...p(t),
					...g(t, e)
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
				_ = (e, t) => n => ({
					...b(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				y = e => t => ({
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
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => s.tb.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: i.J,
				experimentName: s.sb
			})
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
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
				o = n("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.id
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.nd.SmIcon || t === s.nd.SmIconHc
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
					const n = Object(o.X)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit~SubredditWiki.915b7f5c3b9377ef2610.js.map