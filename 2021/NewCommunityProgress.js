// https://www.redditstatic.com/desktop2x/NewCommunityProgress.9f02f6af972e8aa37a46.js
// Retrieved at 3/8/2021, 4:30:05 PM by Reddit Dataminer v1.0.0
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
				return i
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
				i = {
					...o,
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
				}
		},
		"./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx": function(e, s, n) {
			"use strict";
			n.r(s), n.d(s, "default", (function() {
				return re
			}));
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/components/NewCommunityProgress/index.m.less"),
				r = n.n(c),
				d = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/graphql/operations/DismissCommunityProgressCard.json"),
				l = n("./src/lib/makeGqlRequest/index.ts");
			var m = (e, s) => Object(l.a)(e, {
				...a,
				variables: s
			});

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
				_ = e => () => ({
					source: "new_community_setup",
					action: "click",
					noun: "collapse_progress_module",
					progressModule: x(e),
					actionInfo: {
						pageType: "community",
						reason: "collapses_module"
					}
				}),
				j = (e, s) => () => ({
					source: "new_community_setup",
					action: "click",
					noun: "hide_card",
					progressModule: x(e, s),
					actionInfo: {
						pageType: "community"
					}
				});
			var E = n("./src/reddit/hooks/useMutation.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				O = n("./src/lib/classNames/index.ts"),
				C = n("./node_modules/polished/dist/polished.es.js"),
				g = n("./node_modules/query-string/index.js"),
				M = n("./src/lib/colors/constants.ts"),
				y = n("./src/lib/copyToClipboard/index.ts"),
				F = n("./src/reddit/actions/toaster.ts"),
				S = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				L = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/reddit/controls/TextButton/index.tsx"),
				k = (n("./src/reddit/icons/fonts/AddCollection/index.tsx"), n("./src/reddit/icons/fonts/AddGild/index.tsx"), n("./src/reddit/icons/fonts/AddGildDashed/index.tsx"), n("./src/reddit/icons/fonts/Admin/index.tsx"), n("./src/reddit/icons/fonts/Approve/index.tsx"), n("./src/reddit/icons/fonts/Archived/index.tsx"), n("./src/reddit/icons/fonts/Calendar/index.tsx"), n("./src/reddit/icons/fonts/Clear/index.tsx"), n("./src/reddit/icons/fonts/Coin/index.tsx"), n("./src/reddit/icons/fonts/Comment/index.tsx"), n("./src/reddit/icons/fonts/Create/index.tsx"), n("./src/reddit/icons/fonts/Crosspost/index.tsx")),
				A = (n("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), n("./src/reddit/icons/fonts/Downvote/index.tsx"), n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), n("./src/reddit/icons/fonts/Embed/index.tsx"), n("./src/reddit/icons/fonts/Envelope/index.tsx")),
				D = (n("./src/reddit/icons/fonts/Expand/index.tsx"), n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), n("./src/reddit/icons/fonts/helpers.tsx")),
				T = n("./src/reddit/icons/fonts/Expandos/Media/GIF/index.m.less"),
				$ = n.n(T),
				G = n("./src/lib/lessComponent.tsx");
			G.a.wrapped(e => o.a.createElement("i", {
				className: `${Object(D.b)("expandoMediaGif",e.isFilled)} ${e.className}`
			}), "GifMediaIcon", $.a);
			var U = n("./src/reddit/icons/fonts/Expandos/Media/Image/index.m.less"),
				R = n.n(U);
			G.a.wrapped(e => o.a.createElement("i", {
				className: `${Object(D.b)("expandoMediaImage",e.isFilled)} ${e.className}`
			}), "ImageMediaIcon", R.a), n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx");
			var P = n("./src/reddit/icons/fonts/Expandos/Media/Link/index.m.less"),
				B = n.n(P);
			G.a.wrapped(e => o.a.createElement("i", {
				className: `${Object(D.b)("expandoMediaLink",e.isFilled)} ${e.className}`
			}), "LinkMediaIcon", B.a);
			var K = n("./src/reddit/icons/fonts/Expandos/Media/Text/index.m.less"),
				H = n.n(K);
			G.a.wrapped(e => o.a.createElement("i", {
				className: `${Object(D.b)("expandoMediaText",e.isFilled)} ${e.className}`
			}), "TextMediaIcon", H.a), n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"), n("./src/reddit/icons/fonts/Gif/index.tsx"), n("./src/reddit/icons/fonts/Gift/index.tsx");
			var Q = n("./src/reddit/icons/fonts/Gild/index.m.less"),
				V = n.n(Q);
			G.a.wrapped(e => o.a.createElement("i", {
				className: `${Object(D.b)("gild",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(D.a, null, e.desc)), "GildIcon", V.a), n("./src/reddit/icons/fonts/Hide/index.tsx"), n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"), n("./src/reddit/icons/fonts/Info/index.tsx"), n("./src/reddit/icons/fonts/Link/index.tsx"), n("./src/reddit/icons/fonts/List/index.tsx"), n("./src/reddit/icons/fonts/Live/index.tsx"), n("./src/reddit/icons/fonts/Lock/index.tsx"), n("./src/reddit/icons/fonts/Menu/index.tsx"), n("./src/reddit/icons/fonts/ModActions/index.tsx"), n("./src/reddit/icons/fonts/ModSettings/index.tsx"), n("./src/reddit/icons/fonts/Op/index.tsx"), n("./src/reddit/icons/fonts/OutboundLink/index.tsx"), n("./src/reddit/icons/fonts/Pencil/index.tsx"), n("./src/reddit/icons/fonts/Photos/index.tsx");
			var W = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				X = (n("./src/reddit/icons/fonts/Premium/index.tsx"), n("./src/reddit/icons/fonts/Remove/index.tsx"), n("./src/reddit/icons/fonts/Report/index.tsx"), n("./src/reddit/icons/fonts/Save/index.tsx"), n("./src/reddit/icons/fonts/Share/index.tsx")),
				Z = (n("./src/reddit/icons/fonts/Spam/index.tsx"), n("./src/reddit/icons/fonts/Sticky/index.tsx"), n("./src/reddit/icons/fonts/Tag/index.tsx"), n("./src/reddit/icons/fonts/Text/index.tsx"), n("./src/reddit/icons/fonts/Unpin/index.tsx"), n("./src/reddit/icons/fonts/Upvote/index.tsx"), n("./src/reddit/icons/fonts/Video/index.tsx"), n("./src/reddit/models/NewCommunityProgress/index.ts")),
				z = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = {
				add: W.a,
				crosspost: k.a,
				message: A.a,
				refresh: v.h,
				share: X.a,
				nsfw: v.e,
				redditor: v.g,
				comments: v.d
			};

			function Y(e) {
				var s, n;
				const {
					id: t,
					title: c,
					bodyText: d,
					iconIdentifier: a,
					buttons: l,
					colorIdentifier: m,
					onClose: x = (() => {}),
					isNightMode: u,
					subredditUrl: b,
					progressModule: _
				} = e, j = Object(i.d)(), E = Object(h.a)(), N = null !== (s = J[a]) && void 0 !== s ? s : v.a, I = u ? M.c : M.b, C = null !== (n = I[m]) && void 0 !== n ? n : I.downvote;

				function g(e) {
					! function(e) {
						return "CommunityProgressShareButton" === e.__typename
					}(e) ? ee(e) && e.url.match(/reddithelp\.com/) && E(f(_, t)): (Object(y.a)(`https://reddit.com${b}`), j(Object(F.e)(Object(F.d)("Copied community URL to clipboard!", z.b.SuccessCommunityGreen)))), x(Z.a.CTA_BUTTON_CLICK), E(p(_, t))
				}
				return o.a.createElement("div", {
					className: r.a.ncpCard
				}, o.a.createElement(te, {
					color: C,
					className: Object(O.a)(r.a.stripe, r.a.stripeUp)
				}), o.a.createElement(oe, {
					color: C,
					className: Object(O.a)(r.a.stripe, r.a.stripeDown)
				}), o.a.createElement(w.a, {
					className: r.a.headerButton,
					onClick: () => x(Z.a.HIDE_BUTTON_CLICK)
				}, o.a.createElement(S.b, null), o.a.createElement("div", null, q._("Close", null, {
					hk: "4gbyAA"
				}))), o.a.createElement("div", {
					className: r.a.iconCircle,
					style: {
						backgroundColor: C
					}
				}, o.a.createElement(N, {
					className: r.a.icon
				})), o.a.createElement("h2", {
					className: r.a.title
				}, c), o.a.createElement("p", {
					className: r.a.bodyText
				}, d), l.map(e => o.a.createElement(L.j, {
					key: e.buttonText,
					className: r.a.button,
					style: {
						backgroundColor: C,
						borderColor: C
					},
					href: ee(e) ? e.url : se(e) ? ne(e, b) : void 0,
					onClick: () => g(e)
				}, e.buttonText)))
			}

			function ee(e) {
				return "CommunityProgressUrlButton" === e.__typename
			}

			function se(e) {
				return "CommunityProgressMakePostButton" === e.__typename
			}

			function ne(e, s) {
				var n;
				return `${s}submit?${Object(g.stringify)({title:e.postTitle,text:null===(n=e.postBody)||void 0===n?void 0:n.markdown,frequency:e.postRepeatFrequency},{skipNull:!0})}`
			}

			function te({
				className: e,
				color: s
			}) {
				return o.a.createElement("svg", {
					className: e,
					viewBox: "0 0 1 1",
					preserveAspectRatio: "none"
				}, o.a.createElement("path", {
					style: {
						fill: Object(C.l)(.8, s)
					},
					d: "M 0 1 V 0 H 1 Z"
				}))
			}

			function oe({
				className: e,
				color: s
			}) {
				return o.a.createElement("svg", {
					className: e,
					viewBox: "0 0 1 1",
					preserveAspectRatio: "none"
				}, o.a.createElement("path", {
					style: {
						fill: Object(C.l)(.8, s)
					},
					d: "M 0 0 V 1 H 1 Z"
				}))
			}

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var n = arguments[s];
						for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: ce
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function re({
				subredditId: e,
				progressModule: s
			}) {
				const n = Object(t.useRef)(null),
					[c, a] = Object(t.useState)(!0),
					l = Object(i.e)(I.U),
					x = Object(i.e)(s => Object(N.Y)(s, e)),
					p = Object(h.a)();
				Object(t.useEffect)(() => {
					p(u(s, c ? "expanded_module" : "collapses_module"))
				}, [c]);
				const [f] = Object(E.a)(m), O = Object(i.d)();
				return 0 === s.cards.length ? null : o.a.createElement("details", {
					ref: n,
					open: !0,
					className: r.a.ncpWidget,
					onToggle: () => {
						var e;
						const t = !!(null === (e = n.current) || void 0 === e ? void 0 : e.open);
						a(t), p(t ? b(s) : _(s))
					}
				}, o.a.createElement("summary", {
					className: r.a.ncpHeading
				}, o.a.createElement("span", null, s.displayText), c ? o.a.createElement(v.c, {
					className: r.a.chevron
				}) : o.a.createElement(v.b, {
					className: r.a.chevron
				}), !c && o.a.createElement("div", {
					className: r.a.dot
				})), s.cards.slice(0, 3).map(n => o.a.createElement(Y, ie({
					key: n.id,
					isNightMode: l,
					onClose: t => (async function(n, t) {
						O({
							type: d.d,
							payload: {
								cardId: n,
								subredditId: e
							}
						}), await f({
							input: {
								subredditId: e,
								cardId: n,
								action: t
							}
						}), p(j(s, n))
					})(n.id, t),
					subredditUrl: null != x ? x : "",
					progressModule: s
				}, n))))
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
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => {
				const s = Object(c.a)();
				return o.a.createElement("i", {
					className: Object(i.a)(Object(r.b)(s ? "collection" : "addCollection", e.isFilled), e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/AddGild/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("addGild", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/AddGildDashed/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("addGildDashed", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("admin", e.isFilled), d.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("archived", e.isFilled), d.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = n.n(d);
			s.a = e => {
				const s = Object(c.a)();
				return o.a.createElement("i", {
					className: Object(i.a)(Object(r.b)(s ? "scheduled" : "calendar", e.isFilled), a.a.calendarIcon, e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("clear", e.isFilled), e.className)
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
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/colors.ts"),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(a);
			const m = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const s = Object(r.a)();
				return o.a.createElement("i", {
					className: Object(i.a)(e.className, Object(d.b)(s ? "coins" : "coin", e.isFilled)),
					style: {
						color: e.fillColor || c.b.gold
					}
				})
			}, "CoinIcon", l.a);
			s.a = m
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
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
			s.a = ({
				className: e,
				...s
			}) => o.a.createElement("i", a({
				className: Object(i.a)(Object(c.b)("comment", s.isFilled), d.a.commentIcon, e)
			}, s))
		},
		"./src/reddit/icons/fonts/Create/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("create", e.isFilled), e.className)
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				r = n.n(c);
			s.a = e => o.a.createElement("i", {
				className: `${Object(i.b)("crosspost",e.isFilled)} ${r.a.CrosspostIcon} ${e.className}`
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
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				a = n.n(d);
			s.a = e => {
				const s = Object(c.a)();
				return o.a.createElement("i", {
					className: Object(i.a)(a.a.DistinguishShield, Object(r.b)(s ? "distinguish" : "distinguishShield", e.isFilled), e.className)
				})
			}
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Embed/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(i.b)("embed",e.isFilled)} ${e.className}`
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
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Envelope/index.m.less"),
				d = n.n(r);
			s.a = e => {
				const s = Object(i.a)();
				return o.a.createElement("i", {
					className: `${Object(c.b)(s?"message":"envelope",e.isFilled)} ${d.a.Envelope} ${e.className}`
				})
			}
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Expand/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(i.b)("expand",e.isFilled)} ${e.className}`
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				r = n.n(c),
				d = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = d.a.wrapped(e => {
				const s = Object(a.a)();
				return o.a.createElement("i", {
					className: `${Object(i.b)(s?"collapse":"expandoArrowCollapse",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "CollapseIcon", r.a);
			s.a = l
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				r = n.n(c),
				d = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = d.a.wrapped(e => {
				const s = Object(a.a)();
				return o.a.createElement("i", {
					className: `${Object(i.b)(s?"expand":"expandoArrowExpand",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "ExpandIcon", r.a);
			s.a = l
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(i.b)("expandoMediaLightbox",e.isFilled)} ${e.className}`,
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
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				d = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const s = Object(i.a)();
				return o.a.createElement("i", {
					className: `${Object(c.b)(s?"video_post":"expandoMediaVideo",e.isFilled)} ${e.className}`
				})
			}, "TextMediaIcon", d.a);
			s.a = a
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
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Gif/index.m.less"),
				d = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const s = Object(i.a)();
				return o.a.createElement("i", {
					className: `${Object(c.b)(s?"gif_post":"gif",e.isFilled)} ${e.className}`
				})
			}, "GifIcon", d.a);
			s.a = a
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Hide/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(i.b)("hide",e.isFilled)} ${e.className}`
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(i.b)("ignoreReport",e.isFilled)} ${e.className}`
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Info/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(i.b)("info",e.isFilled)} ${e.className}`
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
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Link/index.m.less"),
				d = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const s = Object(i.a)();
				return o.a.createElement("i", {
					className: `${Object(c.b)(s?"link_post":"link",e.isFilled)} ${e.className}`
				})
			}, "LinkIcon", d.a);
			s.a = a
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/List/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(i.b)("list",e.isFilled)} ${e.className}`
			}), "ListIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("live", e.isFilled), d.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var n = arguments[s];
						for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
					}
					return e
				}).apply(this, arguments)
			}
			s.a = e => {
				const s = Object(c.a)();
				return o.a.createElement("i", l({}, e, {
					className: Object(i.a)(Object(r.b)(s ? "mod" : "modActions", e.isFilled), a.a.modActions, e.className)
				}))
			}
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
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				a = n.n(d);
			s.a = e => {
				const s = Object(c.a)();
				return o.a.createElement("i", {
					className: Object(i.a)(a.a.ModSettings, Object(r.b)(s ? "mod" : "modSettings", e.isFilled), e.className)
				})
			}
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
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Op/index.m.less"),
				d = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const s = Object(i.a)();
				return o.a.createElement("i", {
					className: `${Object(c.b)(s?"author":"op",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(c.a, null, e.desc))
			}, "OpIcon", d.a);
			s.a = a
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => {
				const s = Object(i.a)();
				return o.a.createElement("i", {
					className: `${Object(c.b)(s?"external_link":"outboundLink",e.isFilled)} ${e.className}`
				})
			}
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
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Pencil/index.m.less"),
				d = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const s = Object(i.a)();
				return o.a.createElement("i", {
					className: `${Object(c.b)(s?"edit":"pencil",e.isFilled)} ${e.className}`
				})
			}, "PencilIcon", d.a);
			s.a = a
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
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Photos/index.m.less"),
				d = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const s = Object(i.a)();
				return o.a.createElement("i", {
					className: `${Object(c.b)(s?"image_post":"photos",e.isFilled)} ${e.className}`
				})
			}, "PhotoIcon", d.a);
			s.a = a
		},
		"./src/reddit/icons/fonts/Plus/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx");
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("plus", e.isFilled), e.className)
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(i.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Save/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(i.b)("save",e.isFilled)} ${e.className}`
			}), "SaveIcon", r.a);
			s.a = d
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("share", e.isFilled), d.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(r);
			s.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = n.n(d);
			s.a = e => {
				const s = Object(c.a)();
				return o.a.createElement("i", {
					className: Object(i.a)(Object(r.b)(s ? "pin" : "sticky", e.isFilled), a.a.stickyIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(r.a, null, e.desc))
			}
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Tag/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(i.b)("tag",e.isFilled)} ${e.className}`
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
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Text/index.m.less"),
				d = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const s = Object(i.a)();
				return o.a.createElement("i", {
					className: `${Object(c.b)(s?"text_post":"text",e.isFilled)} ${e.className}`
				})
			}, "TextIcon", d.a);
			s.a = a
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
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Unpin/index.m.less"),
				d = n.n(r);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("unpin", e.isFilled), e.className)
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Video/index.m.less"),
				r = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(i.b)("video",e.isFilled)} ${e.className}`
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
		},
		"./src/reddit/models/NewCommunityProgress/index.ts": function(e, s, n) {
			"use strict";
			n.d(s, "b", (function() {
				return t
			})), n.d(s, "a", (function() {
				return o
			}));
			const t = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var o;
			! function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(o || (o = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommunityProgress.9f02f6af972e8aa37a46.js.map