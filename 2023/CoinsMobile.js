// https://www.redditstatic.com/desktop2x/CoinsMobile.8a7744f49063c94cb90a.js
// Retrieved at 6/7/2023, 12:00:04 AM by Reddit Dataminer v1.0.0
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
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
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
						buttonContentClassName: t,
						question: a,
						children: n
					} = this.props, {
						isOpen: i
					} = this.state, d = i ? r.a.isOpen : "";
					return s.a.createElement("div", {
						className: Object(l.a)(e, r.a.collapsibleFAQ)
					}, s.a.createElement("button", {
						className: r.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, s.a.createElement("span", {
						className: Object(l.a)(r.a.buttonContent, t),
						tabIndex: -1
					}, a, i ? s.a.createElement(o.a, {
						className: r.a.collapseIcon
					}) : s.a.createElement(c.a, {
						className: r.a.collapseIcon
					}))), s.a.createElement("div", {
						className: Object(l.a)(r.a.collapsibleAnswer, d)
					}, n))
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
				l = a.n(r);
			t.a = e => {
				const {
					children: t,
					className: a,
					icon: n,
					isMobileStyled: r,
					title: c
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(a, {
						[l.a.isMobileStyled]: r
					})
				}, s.a.createElement("div", {
					className: l.a.iconContainer
				}, n), s.a.createElement("div", {
					className: l.a.textContainer
				}, s.a.createElement("h3", {
					className: l.a.title
				}, c), s.a.createElement("p", {
					className: l.a.content
				}, t)))
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function i(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, n) => (n % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : `:${a}:` in t ? e.push(t[`:${a}:`]) : e.push(`:${a}:`), e), []).map((e, t) => s.a.createElement(s.a.Fragment, {
					key: t
				}, e))
			}
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
				l = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				o = a("./src/lib/constants/index.ts"),
				d = a("./src/reddit/components/TrackingHelper/index.tsx"),
				p = a("./src/reddit/helpers/correlationIdTracker.ts"),
				m = a("./src/reddit/helpers/trackers/screenview.ts"),
				u = a("./src/telemetry/index.ts"),
				b = a("./src/telemetry/models/Timer.ts"),
				h = a("./src/reddit/pages/CoinsMobilePage/index.m.less"),
				g = a.n(h),
				_ = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				x = a("./src/reddit/models/Gold/Award.ts"),
				f = a("./src/reddit/models/Gold/Coins/index.ts"),
				C = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				E = a("./src/reddit/components/GildMarketingDescription/index.tsx"),
				N = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				w = a("./src/reddit/selectors/experiments/econ/index.ts");
			const O = Object(c.c)({
				isCoinsSunset: w.d
			});
			class A extends r.a.Component {
				componentDidMount() {
					Object(p.d)(p.a.GoldPayment, !1);
					const e = o.Tb.COINS;
					u.c.has(e) && this.props.sendEvent(Object(m.b)(b.TimerType.InApp, u.c.end(e)))
				}
				render() {
					const {
						className: e,
						isCoinsSunset: t
					} = this.props;
					return t ? null : r.a.createElement("div", {
						className: e
					}, r.a.createElement("div", {
						className: g.a.wrapper
					}, this.renderGildBreakdown(), this.renderFAQSection()))
				}
				renderGildBreakdown() {
					return r.a.createElement("div", {
						className: g.a.detailGridSection
					}, r.a.createElement("p", {
						className: g.a.detailDesription
					}, s.fbt._("Coins are used to award exemplary posts or comments and help support Reddit.", null, {
						hk: "2phDYF"
					})), r.a.createElement("div", {
						className: g.a.gridContainer
					}, r.a.createElement(E.a, {
						className: g.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-silver-large.png`
						}),
						isMobileStyled: !0,
						title: s.fbt._("Silver Award", null, {
							hk: "2h79np"
						})
					}, Object(_.a)(s.fbt._("Shows a Silver Award on the post or comment and ... that’s it. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "zIrMH"
					}), {
						":coin_price:": r.a.createElement("span", {
							className: g.a.nowrap
						}, r.a.createElement(N.a, null), x.r.coinPrice)
					})), r.a.createElement(E.a, {
						className: g.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-gold-large.png`
						}),
						isMobileStyled: !0,
						title: s.fbt._("Gold Award", null, {
							hk: "1oYdz0"
						})
					}, Object(_.a)(s.fbt._("Gives {Coin benefit placeholder} Reddit Coins and a week of r/lounge access and ad-free browsing. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin benefit placeholder", ":coin_benefit:"), s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "rZ9s8"
					}), {
						":coin_benefit:": r.a.createElement("span", {
							className: g.a.nowrap
						}, r.a.createElement(N.a, null), "100"),
						":coin_price:": r.a.createElement("span", {
							className: g.a.nowrap
						}, r.a.createElement(N.a, null), x.o.coinPrice)
					})), r.a.createElement(E.a, {
						className: g.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-platinum-large.png`
						}),
						isMobileStyled: !0,
						title: s.fbt._("Platinum Award", null, {
							hk: "3nCEqM"
						})
					}, Object(_.a)(s.fbt._("Gives a month of r/lounge access and ad-free browsing, and {Coin benefit placeholder} Reddit Coins for that month. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin benefit placeholder", ":coin_benefit:"), s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "1JTJWQ"
					}), {
						":coin_benefit:": r.a.createElement("span", {
							className: g.a.nowrap
						}, r.a.createElement(N.a, null), "700"),
						":coin_price:": r.a.createElement("span", {
							className: g.a.nowrap
						}, r.a.createElement(N.a, null), x.q.coinPrice)
					}))))
				}
				renderFAQSection() {
					return r.a.createElement("div", {
						className: g.a.faqsSection
					}, r.a.createElement("h2", {
						className: g.a.faqsTitle
					}, s.fbt._("Coins FAQ", null, {
						hk: "21x0aE"
					})), r.a.createElement("div", {
						className: g.a.faqs
					}, f.a.map((e, t) => r.a.createElement(C.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				componentWillUnmount() {
					Object(p.b)(p.a.GoldPayment)
				}
			}
			t.default = Object(l.b)(O)(Object(d.c)(A))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinsMobile.8a7744f49063c94cb90a.js.map