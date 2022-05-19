// https://www.redditstatic.com/desktop2x/CoinsMobile.cc82546a596534ed2f1a.js
// Retrieved at 5/19/2022, 10:20:04 AM by Reddit Dataminer v1.0.0
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
						question: t,
						children: a
					} = this.props, {
						isOpen: n
					} = this.state, i = n ? r.a.isOpen : "";
					return s.a.createElement("div", {
						className: Object(l.a)(e, r.a.collapsibleFAQ)
					}, s.a.createElement("button", {
						className: r.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, s.a.createElement("span", {
						className: r.a.buttonContent,
						tabIndex: -1
					}, t, n ? s.a.createElement(o.a, {
						className: r.a.collapseIcon
					}) : s.a.createElement(c.a, {
						className: r.a.collapseIcon
					}))), s.a.createElement("div", {
						className: Object(l.a)(r.a.collapsibleAnswer, i)
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
				l = a("./src/lib/constants/index.ts"),
				c = a("./src/reddit/components/TrackingHelper/index.tsx"),
				o = a("./src/reddit/helpers/correlationIdTracker.ts"),
				d = a("./src/reddit/helpers/trackers/screenview.ts"),
				p = a("./src/telemetry/index.ts"),
				m = a("./src/telemetry/models/Timer.ts"),
				u = a("./src/reddit/pages/CoinsMobilePage/index.m.less"),
				b = a.n(u),
				h = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				g = a("./src/reddit/models/Gold/Award.ts"),
				f = a("./src/reddit/models/Gold/Coins/index.ts"),
				_ = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				E = a("./src/reddit/components/GildMarketingDescription/index.tsx"),
				x = a("./src/reddit/icons/fonts/Coin/index.tsx");
			class C extends r.a.Component {
				componentDidMount() {
					Object(o.d)(o.a.GoldPayment, !1);
					const e = l.Nb.COINS;
					p.c.has(e) && this.props.sendEvent(Object(d.b)(m.TimerType.InApp, p.c.end(e)))
				}
				render() {
					const {
						className: e
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement("div", {
						className: b.a.wrapper
					}, this.renderGildBreakdown(), this.renderFAQSection()))
				}
				renderGildBreakdown() {
					return r.a.createElement("div", {
						className: b.a.detailGridSection
					}, r.a.createElement("p", {
						className: b.a.detailDesription
					}, s.fbt._("Coins are used to award exemplary posts or comments and help support Reddit.", null, {
						hk: "2phDYF"
					})), r.a.createElement("div", {
						className: b.a.gridContainer
					}, r.a.createElement(E.a, {
						className: b.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-silver-large.png`
						}),
						isMobileStyled: !0,
						title: s.fbt._("Silver Award", null, {
							hk: "2h79np"
						})
					}, Object(h.a)(s.fbt._("Shows a Silver Award on the post or comment and ... that’s it. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "zIrMH"
					}), {
						":coin_price:": r.a.createElement("span", {
							className: b.a.nowrap
						}, r.a.createElement(x.a, null), g.q.coinPrice)
					})), r.a.createElement(E.a, {
						className: b.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-gold-large.png`
						}),
						isMobileStyled: !0,
						title: s.fbt._("Gold Award", null, {
							hk: "1oYdz0"
						})
					}, Object(h.a)(s.fbt._("Gives {Coin benefit placeholder} Reddit Coins and a week of r/lounge access and ad-free browsing. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin benefit placeholder", ":coin_benefit:"), s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "rZ9s8"
					}), {
						":coin_benefit:": r.a.createElement("span", {
							className: b.a.nowrap
						}, r.a.createElement(x.a, null), "100"),
						":coin_price:": r.a.createElement("span", {
							className: b.a.nowrap
						}, r.a.createElement(x.a, null), g.n.coinPrice)
					})), r.a.createElement(E.a, {
						className: b.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-platinum-large.png`
						}),
						isMobileStyled: !0,
						title: s.fbt._("Platinum Award", null, {
							hk: "3nCEqM"
						})
					}, Object(h.a)(s.fbt._("Gives a month of r/lounge access and ad-free browsing, and {Coin benefit placeholder} Reddit Coins for that month. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin benefit placeholder", ":coin_benefit:"), s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "1JTJWQ"
					}), {
						":coin_benefit:": r.a.createElement("span", {
							className: b.a.nowrap
						}, r.a.createElement(x.a, null), "700"),
						":coin_price:": r.a.createElement("span", {
							className: b.a.nowrap
						}, r.a.createElement(x.a, null), g.p.coinPrice)
					}))))
				}
				renderFAQSection() {
					return r.a.createElement("div", {
						className: b.a.faqsSection
					}, r.a.createElement("h2", {
						className: b.a.faqsTitle
					}, s.fbt._("Coins FAQ", null, {
						hk: "21x0aE"
					})), r.a.createElement("div", {
						className: b.a.faqs
					}, f.b.map((e, t) => r.a.createElement(_.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				componentWillUnmount() {
					Object(o.b)(o.a.GoldPayment)
				}
			}
			t.default = Object(c.c)(C)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinsMobile.cc82546a596534ed2f1a.js.map