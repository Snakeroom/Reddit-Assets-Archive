// https://www.redditstatic.com/desktop2x/NewCommunityProgress.994c53ddcb236f28ea96.js
// Retrieved at 10/26/2020, 4:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NewCommunityProgress"], {
		"./src/graphql/operations/DismissCommunityProgressCard.json": function(e) {
			e.exports = JSON.parse('{"id":"d43940dddaf7"}')
		},
		"./src/lib/colors/constants.ts": function(e, s, n) {
			"use strict";
			n.d(s, "a", (function() {
				return t
			})), n.d(s, "b", (function() {
				return o
			})), n.d(s, "c", (function() {
				return c
			}));
			const t = "#FFF",
				o = {
					black: "#000",
					white: t,
					orangered: "#FF4500",
					alienblue: "#0079D3",
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: "#FF4500",
					downvote: "#7193FF",
					positive: "#46D160",
					negative: "#EA0027",
					caution: "#FFB000",
					admin: "#FF4500",
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: "#FF4500",
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				c = Object.assign(Object.assign({}, o), {
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				})
		},
		"./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx": function(e, s, n) {
			"use strict";
			n.r(s), n.d(s, "default", (function() {
				return te
			}));
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/NewCommunityProgress/index.m.less"),
				r = n.n(i),
				d = n("./src/reddit/actions/subreddit/questions.ts"),
				a = n("./src/graphql/operations/DismissCommunityProgressCard.json"),
				l = n("./src/lib/makeGqlRequest/index.ts");
			var m = (e, s) => Object(l.a)(e, Object.assign(Object.assign({}, a), {
				variables: s
			}));

			function x(e, s) {
				return {
					moduleName: e.id,
					cardName: s
				}
			}
			const u = (e, s) => () => ({
					source: "new_community_setup",
					action: "view",
					noun: "progress_module",
					progressModule: x(e),
					actionInfo: {
						pageType: "community",
						reason: s
					}
				}),
				p = (e, s) => () => ({
					source: "new_community_setup",
					action: "click",
					noun: "card_action_button",
					progressModule: x(e, s),
					actionInfo: {
						pageType: "community"
					}
				}),
				f = (e, s) => () => ({
					source: "new_community_setup",
					action: "click",
					noun: "progress_module_help_center_link",
					progressModule: x(e, s),
					actionInfo: {
						pageType: "community"
					}
				}),
				b = e => () => ({
					source: "new_community_setup",
					action: "click",
					noun: "expand_progress_module",
					progressModule: x(e),
					actionInfo: {
						pageType: "community",
						reason: "expanded_module"
					}
				}),
				j = e => () => ({
					source: "new_community_setup",
					action: "click",
					noun: "collapse_progress_module",
					progressModule: x(e),
					actionInfo: {
						pageType: "community",
						reason: "collapses_module"
					}
				}),
				v = (e, s) => () => ({
					source: "new_community_setup",
					action: "click",
					noun: "hide_card",
					progressModule: x(e, s),
					actionInfo: {
						pageType: "community"
					}
				});
			var _ = n("./src/reddit/hooks/useMutation.ts"),
				E = n("./src/reddit/hooks/useTracking.ts"),
				N = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				O = (n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./src/lib/classNames/index.ts")),
				g = n("./node_modules/polished/dist/polished.es.js"),
				M = n("./src/lib/colors/constants.ts"),
				C = n("./src/lib/copyToClipboard/index.ts"),
				y = n("./src/reddit/actions/toaster.ts"),
				w = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				L = n("./src/reddit/controls/Button/index.tsx"),
				S = n("./src/reddit/controls/TextButton/index.tsx"),
				A = (n("./src/reddit/icons/fonts/AddCollection/index.tsx"), n("./src/reddit/icons/fonts/AddGild/index.tsx"), n("./src/reddit/icons/fonts/AddGildDashed/index.tsx"), n("./src/reddit/icons/fonts/Admin/index.tsx"), n("./src/reddit/icons/fonts/Approve/index.tsx"), n("./src/reddit/icons/fonts/Archived/index.tsx"), n("./src/reddit/icons/fonts/Calendar/index.tsx"), n("./src/reddit/icons/fonts/Clear/index.tsx"), n("./src/reddit/icons/fonts/Coin/index.tsx"), n("./src/reddit/icons/fonts/Comment/index.tsx"), n("./src/reddit/icons/fonts/Create/index.tsx"), n("./src/reddit/icons/fonts/Crosspost/index.tsx")),
				D = (n("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), n("./src/reddit/icons/fonts/Downvote/index.tsx"), n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), n("./src/reddit/icons/fonts/Embed/index.tsx"), n("./src/reddit/icons/fonts/Envelope/index.tsx")),
				k = (n("./src/reddit/icons/fonts/Expand/index.tsx"), n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), n("./src/reddit/icons/fonts/helpers.tsx")),
				F = n("./src/reddit/icons/fonts/Expandos/Media/GIF/index.m.less"),
				G = n.n(F),
				R = n("./src/lib/lessComponent.tsx");
			R.a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(k.b)("expandoMediaGif"), " ").concat(e.className)
			}), "GifMediaIcon", G.a);
			var P = n("./src/reddit/icons/fonts/Expandos/Media/Image/index.m.less"),
				U = n.n(P);
			R.a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(k.b)("expandoMediaImage"), " ").concat(e.className)
			}), "ImageMediaIcon", U.a), n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx");
			var K = n("./src/reddit/icons/fonts/Expandos/Media/Link/index.m.less"),
				T = n.n(K);
			R.a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(k.b)("expandoMediaLink"), " ").concat(e.className)
			}), "LinkMediaIcon", T.a);
			var B = n("./src/reddit/icons/fonts/Expandos/Media/Text/index.m.less"),
				H = n.n(B);
			R.a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(k.b)("expandoMediaText"), " ").concat(e.className)
			}), "TextMediaIcon", H.a), n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"), n("./src/reddit/icons/fonts/Gif/index.tsx"), n("./src/reddit/icons/fonts/Gift/index.tsx");
			var Q = n("./src/reddit/icons/fonts/Gild/index.m.less"),
				V = n.n(Q);
			R.a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(k.b)("gild"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(k.a, null, e.desc)), "GildIcon", V.a), n("./src/reddit/icons/fonts/Hide/index.tsx"), n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"), n("./src/reddit/icons/fonts/Info/index.tsx"), n("./src/reddit/icons/fonts/Link/index.tsx"), n("./src/reddit/icons/fonts/List/index.tsx"), n("./src/reddit/icons/fonts/Live/index.tsx"), n("./src/reddit/icons/fonts/Lock/index.tsx"), n("./src/reddit/icons/fonts/Menu/index.tsx"), n("./src/reddit/icons/fonts/ModActions/index.tsx"), n("./src/reddit/icons/fonts/ModSettings/index.tsx"), n("./src/reddit/icons/fonts/Op/index.tsx"), n("./src/reddit/icons/fonts/OutboundLink/index.tsx"), n("./src/reddit/icons/fonts/Pencil/index.tsx"), n("./src/reddit/icons/fonts/Photos/index.tsx");
			var W = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				X = (n("./src/reddit/icons/fonts/Premium/index.tsx"), n("./src/reddit/icons/fonts/Remove/index.tsx"), n("./src/reddit/icons/fonts/Report/index.tsx"), n("./src/reddit/icons/fonts/Save/index.tsx"), n("./src/reddit/icons/fonts/Share/index.tsx")),
				Z = (n("./src/reddit/icons/fonts/Spam/index.tsx"), n("./src/reddit/icons/fonts/Sticky/index.tsx"), n("./src/reddit/icons/fonts/Tag/index.tsx"), n("./src/reddit/icons/fonts/Text/index.tsx"), n("./src/reddit/icons/fonts/Unpin/index.tsx"), n("./src/reddit/icons/fonts/Upvote/index.tsx"), n("./src/reddit/icons/fonts/Video/index.tsx"), n("./src/reddit/models/Toast/index.ts"));
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = {
				add: W.a,
				crosspost: A.a,
				message: D.a,
				refresh: N.h,
				share: X.a,
				nsfw: N.e,
				redditor: N.g,
				comments: N.d
			};

			function q(e) {
				var s, n;
				const {
					id: t,
					title: i,
					bodyText: d,
					iconIdentifier: a,
					buttons: l,
					colorIdentifier: m,
					onClose: x = (() => {}),
					isNightMode: u,
					subredditUrl: b,
					progressModule: j
				} = e, v = Object(c.c)(), _ = Object(E.a)(), h = null !== (s = J[a]) && void 0 !== s ? s : N.a, I = u ? M.c : M.b, g = null !== (n = I[m]) && void 0 !== n ? n : I.downvote;

				function A(e) {
					Y(e) ? e.url.match(/reddithelp\.com/) && _(f(j, t)) : (Object(C.a)("https://reddit.com".concat(b)), v(Object(y.e)(Object(y.d)("Copied community URL to clipboard!", Z.b.SuccessCommunityGreen)))), _(p(j, t)), x()
				}
				return o.a.createElement("div", {
					className: r.a.ncpCard
				}, o.a.createElement($, {
					color: g,
					className: Object(O.a)(r.a.stripe, r.a.stripeUp)
				}), o.a.createElement(ee, {
					color: g,
					className: Object(O.a)(r.a.stripe, r.a.stripeDown)
				}), o.a.createElement(S.a, {
					className: r.a.headerButton,
					onClick: x
				}, o.a.createElement(w.b, null), o.a.createElement("div", null, z._("Close", null, {
					hk: "4gbyAA"
				}))), o.a.createElement("div", {
					className: r.a.iconCircle,
					style: {
						backgroundColor: g
					}
				}, o.a.createElement(h, {
					className: r.a.icon
				})), o.a.createElement("h2", {
					className: r.a.title
				}, i), o.a.createElement("p", {
					className: r.a.bodyText
				}, d), l.map(e => o.a.createElement(L.j, {
					key: e.buttonText,
					className: r.a.button,
					style: {
						backgroundColor: g,
						borderColor: g
					},
					href: Y(e) ? e.url : void 0,
					onClick: () => A(e)
				}, e.buttonText)))
			}

			function Y(e) {
				return "CommunityProgressUrlButton" === e.__typename
			}

			function $(e) {
				let {
					className: s,
					color: n
				} = e;
				return o.a.createElement("svg", {
					className: s,
					viewBox: "0 0 1 1",
					preserveAspectRatio: "none"
				}, o.a.createElement("path", {
					style: {
						fill: Object(g.l)(.8, n)
					},
					d: "M 0 1 V 0 H 1 Z"
				}))
			}

			function ee(e) {
				let {
					className: s,
					color: n
				} = e;
				return o.a.createElement("svg", {
					className: s,
					viewBox: "0 0 1 1",
					preserveAspectRatio: "none"
				}, o.a.createElement("path", {
					style: {
						fill: Object(g.l)(.8, n)
					},
					d: "M 0 0 V 1 H 1 Z"
				}))
			}

			function se() {
				return (se = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var n = arguments[s];
						for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function te(e) {
				let {
					subredditId: s,
					progressModule: n
				} = e;
				const i = Object(t.useRef)(null),
					[a, l] = Object(t.useState)(!0),
					x = Object(c.d)(I.T),
					p = Object(c.d)(e => Object(h.Z)(e, s)),
					f = Object(E.a)();
				Object(t.useEffect)(() => {
					f(u(n, a ? "expanded_module" : "collapses_module"))
				}, [a]);
				const [O] = Object(_.a)(m), g = Object(c.c)();
				return 0 === n.cards.length ? null : o.a.createElement("details", {
					ref: i,
					open: !0,
					className: r.a.ncpWidget,
					onToggle: () => {
						var e;
						const s = !!(null === (e = i.current) || void 0 === e ? void 0 : e.open);
						l(s), f(s ? b(n) : j(n))
					}
				}, o.a.createElement("summary", {
					className: r.a.ncpHeading
				}, o.a.createElement("span", null, n.displayText), a ? o.a.createElement(N.c, {
					className: r.a.chevron
				}) : o.a.createElement(N.b, {
					className: r.a.chevron
				}), !a && o.a.createElement("div", {
					className: r.a.dot
				})), n.cards.slice(0, 3).map(e => o.a.createElement(q, se({
					key: e.id,
					isNightMode: x,
					onClose: () => (async function(e) {
						g({
							type: d.a,
							payload: {
								cardId: e,
								subredditId: s
							}
						}), await O({
							input: {
								subredditId: s,
								cardId: e
							}
						}), f(v(n, e))
					})(e.id),
					subredditUrl: null != p ? p : "",
					progressModule: n
				}, e))))
			}
		},
		"./src/reddit/components/NewCommunityProgress/index.m.less": function(e, s, n) {
			e.exports = {
				ncpWidget: "_3YDlbacMM1vXlnIwwiZaw",
				ncpHeading: "_3diY46QRgoCQoBAl3nuOkB",
				headerButton: "_25msyEaogWclvFrvRa0Eu2",
				chevron: "v3pKVc9S7s-8XcRDMGAhh",
				dot: "_20d2EpHqvWq_dGcvYFPYjr",
				ncpCard: "_3CAiO1C0aUjv2nxiu1fyr8",
				stripe: "_2hjfwI45duenRC4CnFQJSH",
				stripeUp: "_2jNwELabjySzKNyW1VUkrV",
				stripeDown: "_1Da2-1LiTl4fR0YhCcFHuW",
				iconCircle: "GQHNmTs_Ee429ftHyCONS",
				icon: "_2Q_cCgKoPZ0SN7kfoONVsA",
				title: "_2mgPtZpyn1KEJL1s1MeMbO",
				bodyText: "uoN8_aKEPh_28cElE6IRe",
				button: "_1zhBaOxJ0Moon4XzsEHy0o"
			}
		},
		"./src/reddit/icons/fonts/AddCollection/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("addCollection"), e.className)
			})
		},
		"./src/reddit/icons/fonts/AddGild/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("addGild"), e.className)
			})
		},
		"./src/reddit/icons/fonts/AddGildDashed/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("addGildDashed"), e.className)
			})
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("admin"), d.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("approve"), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("archived"), d.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("calendar"), d.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("clear"), e.className)
			})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, s, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(i.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || c.a.gold
				}
			}), "CoinIcon", d.a);
			s.a = a
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, s, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var n = arguments[s];
						for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, s) {
				var n = {};
				for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && s.indexOf(t) < 0 && (n[t] = e[t]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (t = Object.getOwnPropertySymbols(e); o < t.length; o++) s.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[o]) && (n[t[o]] = e[t[o]])
				}
				return n
			};
			s.a = e => {
				var {
					className: s
				} = e, n = l(e, ["className"]);
				return o.a.createElement("i", a({
					className: Object(c.a)(Object(i.b)("comment"), d.a.commentIcon, s)
				}, n))
			}
		},
		"./src/reddit/icons/fonts/Create/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("create"), e.className)
			})
		},
		"./src/reddit/icons/fonts/Crosspost/index.m.less": function(e, s, n) {
			e.exports = {
				CrosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn",
				crosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn"
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				r = n.n(i);
			s.a = e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("crosspost"), " ").concat(r.a.CrosspostIcon, " ").concat(e.className)
			})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, s, n) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("distinguishShield"), " ").concat(e.className)
			}), "DistinguishShield", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Embed/index.m.less": function(e, s, n) {
			e.exports = {
				EmbedIcon: "_1J2DOAiKZ5l1xq516M9W_Q",
				embedIcon: "_1J2DOAiKZ5l1xq516M9W_Q"
			}
		},
		"./src/reddit/icons/fonts/Embed/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Embed/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("embed"), " ").concat(e.className)
			}), "EmbedIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, s, n) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Envelope/index.m.less"),
				r = n.n(i);
			s.a = e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("envelope"), " ").concat(r.a.Envelope, " ").concat(e.className)
			})
		},
		"./src/reddit/icons/fonts/Expand/index.m.less": function(e, s, n) {
			e.exports = {
				Expand: "_3wtzqtIQz3ef53grMdBKpl",
				expand: "_3wtzqtIQz3ef53grMdBKpl"
			}
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expand/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("expand"), " ").concat(e.className)
			}), "Expand", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, s, n) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, s, n) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/GIF/index.m.less": function(e, s, n) {
			e.exports = {
				GifMediaIcon: "_3wB85KY0fD_c1UU9-pxvzR",
				gifMediaIcon: "_3wB85KY0fD_c1UU9-pxvzR"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Image/index.m.less": function(e, s, n) {
			e.exports = {
				ImageMediaIcon: "_3jgGGr-8psWne1I-QKBSum",
				imageMediaIcon: "_3jgGGr-8psWne1I-QKBSum"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, s, n) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("expandoMediaLightbox"), " ").concat(e.className),
				onClick: e.onClick
			}), "LightboxIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Link/index.m.less": function(e, s, n) {
			e.exports = {
				LinkMediaIcon: "_4mMVDyMngOnDSLIRWwF5I",
				linkMediaIcon: "_4mMVDyMngOnDSLIRWwF5I"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Text/index.m.less": function(e, s, n) {
			e.exports = {
				TextMediaIcon: "_1vtUSUosfoeYuYpscHv1fo",
				textMediaIcon: "_1vtUSUosfoeYuYpscHv1fo"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, s, n) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("expandoMediaVideo"), " ").concat(e.className)
			}), "TextMediaIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Gif/index.m.less": function(e, s, n) {
			e.exports = {
				GifIcon: "_2FVMHfvH9Kj7f59LnZjdUX",
				gifIcon: "_2FVMHfvH9Kj7f59LnZjdUX"
			}
		},
		"./src/reddit/icons/fonts/Gif/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Gif/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("gif"), " ").concat(e.className)
			}), "GifIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Gild/index.m.less": function(e, s, n) {
			e.exports = {
				GildIcon: "_31hC6liK9ba3nW1h_0cKS3",
				gildIcon: "_31hC6liK9ba3nW1h_0cKS3"
			}
		},
		"./src/reddit/icons/fonts/Hide/index.m.less": function(e, s, n) {
			e.exports = {
				HideIcon: "_1ps3GcyMra2ZVakeRQFnGj",
				hideIcon: "_1ps3GcyMra2ZVakeRQFnGj"
			}
		},
		"./src/reddit/icons/fonts/Hide/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Hide/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("hide"), " ").concat(e.className)
			}), "HideIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.m.less": function(e, s, n) {
			e.exports = {
				IgnoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf",
				ignoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf"
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("ignoreReport"), " ").concat(e.className)
			}), "IgnoreReportIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, s, n) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Info/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("info"), " ").concat(e.className)
			}), "InfoIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Link/index.m.less": function(e, s, n) {
			e.exports = {
				LinkIcon: "_1UzGujIvFbQUgWI4gO6QeD",
				linkIcon: "_1UzGujIvFbQUgWI4gO6QeD"
			}
		},
		"./src/reddit/icons/fonts/Link/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Link/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("link"), " ").concat(e.className)
			}), "LinkIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/List/index.m.less": function(e, s, n) {
			e.exports = {
				ListIcon: "t3UrRpUFSigA4IRW8iMLv",
				listIcon: "t3UrRpUFSigA4IRW8iMLv"
			}
		},
		"./src/reddit/icons/fonts/List/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/List/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("list"), " ").concat(e.className)
			}), "ListIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("live"), d.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("lock"), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var n = arguments[s];
						for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
					}
					return e
				}).apply(this, arguments)
			}
			s.a = e => o.a.createElement("i", a({}, e, {
				className: Object(c.a)(Object(i.b)("modActions"), d.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, s, n) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(d.a.ModSettings, Object(i.b)("modSettings"), e.className)
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, s, n) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Op/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Op/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("op"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc)), "OpIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("outboundLink"), " ").concat(e.className)
			})
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, s, n) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Pencil/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, s, n) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Photos/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Photos/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("photos"), " ").concat(e.className)
			}), "PhotoIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Plus/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("plus"), e.className)
			})
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, s, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: "".concat(Object(c.b)("premium"), " ").concat(e.className)
			}), "PremiumIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("remove"), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("report"), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Save/index.m.less": function(e, s, n) {
			e.exports = {
				SaveIcon: "_3n1jtdyipCtmS0HkOM1Tfd",
				saveIcon: "_3n1jtdyipCtmS0HkOM1Tfd"
			}
		},
		"./src/reddit/icons/fonts/Save/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Save/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("save"), " ").concat(e.className)
			}), "SaveIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("share"), d.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("spam"), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("sticky"), d.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.m.less": function(e, s, n) {
			e.exports = {
				TagIcon: "_2e-QjEsH3vADXyIpSzLW6_",
				tagIcon: "_2e-QjEsH3vADXyIpSzLW6_"
			}
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Tag/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("tag"), " ").concat(e.className)
			}), "TagIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, s, n) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/fonts/Text/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Text/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("text"), " ").concat(e.className)
			}), "TextIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Unpin/index.m.less": function(e, s, n) {
			e.exports = {
				UnpinIcon: "_1X-tE86a0YWmVh310hgKTZ",
				unpinIcon: "_1X-tE86a0YWmVh310hgKTZ"
			}
		},
		"./src/reddit/icons/fonts/Unpin/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Unpin/index.m.less"),
				d = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(c.a)(Object(i.b)("unpin"), e.className)
			}), "UnpinIcon", d.a);
			s.a = a
		},
		"./src/reddit/icons/fonts/Video/index.m.less": function(e, s, n) {
			e.exports = {
				VideoIcon: "_1q4uVersxe3LOuom7R34bx",
				videoIcon: "_1q4uVersxe3LOuom7R34bx"
			}
		},
		"./src/reddit/icons/fonts/Video/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Video/index.m.less"),
				r = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("video"), " ").concat(e.className)
			}), "VideoIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, s, n) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommunityProgress.994c53ddcb236f28ea96.js.map