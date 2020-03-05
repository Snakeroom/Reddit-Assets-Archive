// https://www.redditstatic.com/desktop2x/CoinsMobile.4f7b82d520ed7b7131bd.js
// Retrieved at 3/5/2020, 3:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinsMobile"], {
		"./node_modules/lodash/times.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				c = 9007199254740991,
				r = 4294967295,
				o = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > c) return [];
				var s = r,
					l = o(e, r);
				t = n(t), e -= r;
				for (var d = a(l, t); ++s < e;) t(s);
				return d
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.m.less": function(e, t, s) {
			e.exports = {
				collapsibleFAQ: "PGMuR8fr8VizHP4fajECO",
				collapsibleFaq: "PGMuR8fr8VizHP4fajECO",
				questionButton: "AE_-OfcuQcVv1sMNAnYez",
				buttonContent: "_3GpGGAjkKUtSIydzuhDgjk",
				collapseIcon: "GcBEian3rJp0dqdStxeaG",
				collapsibleAnswer: "_2aCJykcYH0l0L0J29lNN6X",
				isOpen: "_1epMyDuMGgpwMk-QoPqYMi"
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				i = s("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				c = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = s("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class d extends n.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !e.defaultClosed
					}
				}
				render() {
					const {
						className: e,
						question: t,
						children: s
					} = this.props, {
						isOpen: a
					} = this.state, i = a ? c.a.isOpen : "";
					return n.a.createElement("div", {
						className: Object(r.a)(e, c.a.collapsibleFAQ)
					}, n.a.createElement("button", {
						className: c.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, n.a.createElement("span", {
						className: c.a.buttonContent,
						tabIndex: -1
					}, t, a ? n.a.createElement(l.a, {
						className: c.a.collapseIcon
					}) : n.a.createElement(o.a, {
						className: c.a.collapseIcon
					}))), n.a.createElement("div", {
						className: Object(r.a)(c.a.collapsibleAnswer, i)
					}, s))
				}
			}
			t.a = d
		},
		"./src/reddit/components/GildMarketingDescription/index.m.less": function(e, t, s) {
			e.exports = {
				iconContainer: "_3aLGwXXgtLTRBL_s4zGzpA",
				textContainer: "L1uF-uIVgiGprHTgSe6Pa",
				title: "_1RHFAL2gq_LNUOW3yaREdJ",
				content: "_3iKxdZxO2uDcDfP0M_uXXu",
				isMobileStyled: "hhQ0bLehrQAD95bHHfIHL"
			}
		},
		"./src/reddit/components/GildMarketingDescription/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/GildMarketingDescription/index.m.less"),
				r = s.n(c);
			t.a = e => {
				const {
					children: t,
					className: s,
					icon: a,
					isMobileStyled: c,
					title: o
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(s, {
						[r.a.isMobileStyled]: c
					})
				}, n.a.createElement("div", {
					className: r.a.iconContainer
				}, a), n.a.createElement("div", {
					className: r.a.textContainer
				}, n.a.createElement("h3", {
					className: r.a.title
				}, o), n.a.createElement("p", {
					className: r.a.content
				}, t)))
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function i(e, t) {
				const s = e.split(":");
				return s.length % 2 == 0 ? e : s.reduce((e, s, a) => (a % 2 == 0 ? e.push(s) : "" === s ? e.push(":") : ":".concat(s, ":") in t ? e.push(t[":".concat(s, ":")]) : e.push(":".concat(s, ":")), e), []).map((e, t) => n.a.createElement(n.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/pages/CoinsMobilePage/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1btvg1SigTazjp9DWDlVrm",
				detailDesription: "_5cl-df32CD1-4YueRAt7Z",
				gridContainer: "raM7DVcMgNAjUs8MFHwfs",
				gridItem: "_2OaG62ZgLC3KExDkupApYr",
				nowrap: "_3K0jQLXI5QhjzIs1OYfiS5",
				faqsSection: "_3l64ELqrj8ehwCgWf0g9EM",
				faqsTitle: "_3OkhxDtlRWYvCJH9KT7JaE",
				faqs: "_35BAdkFsONC5unGAp7SKv_"
			}
		},
		"./src/reddit/pages/CoinsMobilePage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/lodash/times.js"),
				c = s.n(i),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/helpers/trackers/coins.ts"),
				u = s("./src/reddit/helpers/trackers/screenview.ts"),
				g = s("./src/reddit/i18n/components.tsx"),
				x = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/telemetry/index.ts"),
				b = s("./src/telemetry/models/Timer.ts"),
				E = s("./src/reddit/pages/CoinsMobilePage/index.m.less"),
				_ = s.n(E),
				f = s("./src/app/strings/index.ts"),
				j = s("./src/reddit/helpers/createEmojiText/index.tsx"),
				w = s("./src/reddit/models/Gold/Award.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				O = s("./src/reddit/components/GildMarketingDescription/index.tsx"),
				v = s("./src/reddit/icons/fonts/Coin/index.tsx");
			const A = Object(d.c)({
					language: C.O
				}),
				M = Object(l.b)(A),
				D = 8;
			class G extends o.a.Component {
				componentDidMount() {
					p.e() || p.f();
					const e = n.zb.COINS;
					h.c.has(e) && this.props.sendEvent(Object(u.a)(b.TimerType.InApp, h.c.end(e)))
				}
				render() {
					const {
						className: e
					} = this.props;
					return o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: _.a.wrapper
					}, this.renderGildBreakdown(), this.renderFAQSection()))
				}
				renderGildBreakdown() {
					return o.a.createElement("div", {
						className: _.a.detailGridSection
					}, o.a.createElement("p", {
						className: _.a.detailDesription
					}, o.a.createElement(g.c, null, "Coins are used to award exemplary posts or comments and help support Reddit.")), o.a.createElement("div", {
						className: _.a.gridContainer
					}, o.a.createElement(O.a, {
						className: _.a.gridItem,
						icon: o.a.createElement("img", {
							src: "".concat(a.a.assetPath, "/img/gold/badges/award-silver-large.png")
						}),
						isMobileStyled: !0,
						title: Object(x.c)("Silver Award")
					}, Object(j.a)(Object(x.c)("Shows a Silver Award on the post or comment and ... that’s it. You’ll need :coin_price: Coins."), {
						":coin_price:": o.a.createElement("span", {
							className: _.a.nowrap
						}, o.a.createElement(v.a, null), w.l.coinPrice)
					})), o.a.createElement(O.a, {
						className: _.a.gridItem,
						icon: o.a.createElement("img", {
							src: "".concat(a.a.assetPath, "/img/gold/badges/award-gold-large.png")
						}),
						isMobileStyled: !0,
						title: Object(x.c)("Gold Award")
					}, Object(j.a)(Object(x.c)("Gives the recipient a week of Reddit Premium (including :coin_benefit: Coins) and shows a Gold Award on the post or comment. You’ll need :coin_price: Coins."), {
						":coin_benefit:": o.a.createElement("span", {
							className: _.a.nowrap
						}, o.a.createElement(v.a, null), "100"),
						":coin_price:": o.a.createElement("span", {
							className: _.a.nowrap
						}, o.a.createElement(v.a, null), w.j.coinPrice)
					})), o.a.createElement(O.a, {
						className: _.a.gridItem,
						icon: o.a.createElement("img", {
							src: "".concat(a.a.assetPath, "/img/gold/badges/award-platinum-large.png")
						}),
						isMobileStyled: !0,
						title: Object(x.c)("Platinum Award")
					}, Object(j.a)(Object(x.c)("Gives the recipient a month of Reddit Premium, which includes :coin_benefit: Coins for that month, and shows a Platinum Award on the post or comment. You’ll need :coin_price: Coins."), {
						":coin_benefit:": o.a.createElement("span", {
							className: _.a.nowrap
						}, o.a.createElement(v.a, null), "700"),
						":coin_price:": o.a.createElement("span", {
							className: _.a.nowrap
						}, o.a.createElement(v.a, null), w.k.coinPrice)
					}))))
				}
				renderFAQSection() {
					const {
						language: e
					} = this.props;
					return o.a.createElement("div", {
						className: _.a.faqsSection
					}, o.a.createElement("h2", {
						className: _.a.faqsTitle
					}, o.a.createElement(g.c, null, "Coins FAQ")), o.a.createElement("div", {
						className: _.a.faqs
					}, c()(D, t => o.a.createElement(N.a, {
						defaultClosed: !0,
						question: Object(f.a)(e, "gold.coinsFAQ.item".concat(t + 1, ".question")),
						key: t
					}, Object(f.a)(e, "gold.coinsFAQ.item".concat(t + 1, ".answer"))))))
				}
				componentWillUnmount() {
					p.d()
				}
			}
			t.default = M(Object(m.b)(G))
		}
	}
]);
//# sourceMappingURL=CoinsMobile.4f7b82d520ed7b7131bd.js.map