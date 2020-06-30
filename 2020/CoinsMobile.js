// https://www.redditstatic.com/desktop2x/CoinsMobile.b978051c892ba0d8b27b.js
// Retrieved at 6/30/2020, 1:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinsMobile"], {
		"./src/reddit/components/CollapsibleFAQ/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/CollapsibleFAQ/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				i = a("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				r = a.n(i),
				c = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				o = a("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class d extends s.a.Component {
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
						children: a
					} = this.props, {
						isOpen: n
					} = this.state, i = n ? r.a.isOpen : "";
					return s.a.createElement("div", {
						className: Object(c.a)(e, r.a.collapsibleFAQ)
					}, s.a.createElement("button", {
						className: r.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, s.a.createElement("span", {
						className: r.a.buttonContent,
						tabIndex: -1
					}, t, n ? s.a.createElement(o.a, {
						className: r.a.collapseIcon
					}) : s.a.createElement(l.a, {
						className: r.a.collapseIcon
					}))), s.a.createElement("div", {
						className: Object(c.a)(r.a.collapsibleAnswer, i)
					}, a))
				}
			}
			t.a = d
		},
		"./src/reddit/components/GildMarketingDescription/index.m.less": function(e, t, a) {
			e.exports = {
				iconContainer: "_3aLGwXXgtLTRBL_s4zGzpA",
				textContainer: "L1uF-uIVgiGprHTgSe6Pa",
				title: "_1RHFAL2gq_LNUOW3yaREdJ",
				content: "_3iKxdZxO2uDcDfP0M_uXXu",
				isMobileStyled: "hhQ0bLehrQAD95bHHfIHL"
			}
		},
		"./src/reddit/components/GildMarketingDescription/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				i = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/components/GildMarketingDescription/index.m.less"),
				c = a.n(r);
			t.a = e => {
				const {
					children: t,
					className: a,
					icon: n,
					isMobileStyled: r,
					title: l
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(a, {
						[c.a.isMobileStyled]: r
					})
				}, s.a.createElement("div", {
					className: c.a.iconContainer
				}, n), s.a.createElement("div", {
					className: c.a.textContainer
				}, s.a.createElement("h3", {
					className: c.a.title
				}, l), s.a.createElement("p", {
					className: c.a.content
				}, t)))
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function i(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, n) => (n % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : ":".concat(a, ":") in t ? e.push(t[":".concat(a, ":")]) : e.push(":".concat(a, ":")), e), []).map((e, t) => s.a.createElement(s.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/pages/CoinsMobilePage/index.m.less": function(e, t, a) {
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
		"./src/reddit/pages/CoinsMobilePage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./src/config.ts"),
				s = a("./node_modules/fbt/lib/FbtPublic.js"),
				i = a("./node_modules/react/index.js"),
				r = a.n(i),
				c = a("./src/lib/constants/index.ts"),
				l = a("./src/reddit/components/TrackingHelper/index.tsx"),
				o = a("./src/reddit/helpers/correlationIdTracker.ts"),
				d = a("./src/reddit/helpers/trackers/screenview.ts"),
				m = a("./src/telemetry/index.ts"),
				p = a("./src/telemetry/models/Timer.ts"),
				u = a("./src/reddit/pages/CoinsMobilePage/index.m.less"),
				h = a.n(u),
				b = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				g = a("./src/reddit/models/Gold/Award.ts"),
				x = a("./src/reddit/models/Gold/Coins/index.ts"),
				_ = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				f = a("./src/reddit/components/GildMarketingDescription/index.tsx"),
				E = a("./src/reddit/icons/fonts/Coin/index.tsx");
			class C extends r.a.Component {
				componentDidMount() {
					Object(o.d)(o.a.GoldPayment, !1);
					const e = c.Ab.COINS;
					m.c.has(e) && this.props.sendEvent(Object(d.a)(p.TimerType.InApp, m.c.end(e)))
				}
				render() {
					const {
						className: e
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement("div", {
						className: h.a.wrapper
					}, this.renderGildBreakdown(), this.renderFAQSection()))
				}
				renderGildBreakdown() {
					return r.a.createElement("div", {
						className: h.a.detailGridSection
					}, r.a.createElement("p", {
						className: h.a.detailDesription
					}, s.fbt._("Coins are used to award exemplary posts or comments and help support Reddit.", null, {
						hk: "2phDYF"
					})), r.a.createElement("div", {
						className: h.a.gridContainer
					}, r.a.createElement(f.a, {
						className: h.a.gridItem,
						icon: r.a.createElement("img", {
							src: "".concat(n.a.assetPath, "/img/gold/badges/award-silver-large.png")
						}),
						isMobileStyled: !0,
						title: s.fbt._("Silver Award", null, {
							hk: "2h79np"
						})
					}, Object(b.a)(s.fbt._("Shows a Silver Award on the post or comment and ... that’s it. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "zIrMH"
					}), {
						":coin_price:": r.a.createElement("span", {
							className: h.a.nowrap
						}, r.a.createElement(E.a, null), g.o.coinPrice)
					})), r.a.createElement(f.a, {
						className: h.a.gridItem,
						icon: r.a.createElement("img", {
							src: "".concat(n.a.assetPath, "/img/gold/badges/award-gold-large.png")
						}),
						isMobileStyled: !0,
						title: s.fbt._("Gold Award", null, {
							hk: "1oYdz0"
						})
					}, Object(b.a)(s.fbt._("Gives the recipient a week of Reddit Premium (including {Coin benefit placeholder} Coins) and shows a Gold Award on the post or comment. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin benefit placeholder", ":coin_benefit:"), s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "rHjB2"
					}), {
						":coin_benefit:": r.a.createElement("span", {
							className: h.a.nowrap
						}, r.a.createElement(E.a, null), "100"),
						":coin_price:": r.a.createElement("span", {
							className: h.a.nowrap
						}, r.a.createElement(E.a, null), g.m.coinPrice)
					})), r.a.createElement(f.a, {
						className: h.a.gridItem,
						icon: r.a.createElement("img", {
							src: "".concat(n.a.assetPath, "/img/gold/badges/award-platinum-large.png")
						}),
						isMobileStyled: !0,
						title: s.fbt._("Platinum Award", null, {
							hk: "3nCEqM"
						})
					}, Object(b.a)(s.fbt._("Gives the recipient a month of Reddit Premium, which includes {Coin benefit placeholder} Coins for that month, and shows a Platinum Award on the post or comment. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin benefit placeholder", ":coin_benefit:"), s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "aE9cP"
					}), {
						":coin_benefit:": r.a.createElement("span", {
							className: h.a.nowrap
						}, r.a.createElement(E.a, null), "700"),
						":coin_price:": r.a.createElement("span", {
							className: h.a.nowrap
						}, r.a.createElement(E.a, null), g.n.coinPrice)
					}))))
				}
				renderFAQSection() {
					return r.a.createElement("div", {
						className: h.a.faqsSection
					}, r.a.createElement("h2", {
						className: h.a.faqsTitle
					}, s.fbt._("Coins FAQ", null, {
						hk: "21x0aE"
					})), r.a.createElement("div", {
						className: h.a.faqs
					}, x.b.map((e, t) => r.a.createElement(_.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				componentWillUnmount() {
					Object(o.b)(o.a.GoldPayment)
				}
			}
			t.default = Object(l.c)(C)
		}
	}
]);
//# sourceMappingURL=CoinsMobile.b978051c892ba0d8b27b.js.map