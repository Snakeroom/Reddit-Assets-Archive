// https://www.redditstatic.com/desktop2x/CoinsMobile.e41f04c6d115641c0e4d.js
// Retrieved at 3/30/2021, 4:20:06 PM by Reddit Dataminer v1.0.0
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
				o = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				c = a("./src/reddit/icons/svgs/ChevronUp/index.tsx");
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
						className: Object(o.a)(e, r.a.collapsibleFAQ)
					}, s.a.createElement("button", {
						className: r.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, s.a.createElement("span", {
						className: r.a.buttonContent,
						tabIndex: -1
					}, t, n ? s.a.createElement(c.a, {
						className: r.a.collapseIcon
					}) : s.a.createElement(l.a, {
						className: r.a.collapseIcon
					}))), s.a.createElement("div", {
						className: Object(o.a)(r.a.collapsibleAnswer, i)
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
				o = a.n(r);
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
						[o.a.isMobileStyled]: r
					})
				}, s.a.createElement("div", {
					className: o.a.iconContainer
				}, n), s.a.createElement("div", {
					className: o.a.textContainer
				}, s.a.createElement("h3", {
					className: o.a.title
				}, l), s.a.createElement("p", {
					className: o.a.content
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
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "c", (function() {
				return i
			})), a.d(t, "b", (function() {
				return r
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js");
			const s = new Set(["low_coin_upsell"]),
				i = new Set(["new_purchaser", "repeat_purchaser"]),
				r = [{
					prompt: () => n.fbt._("What are coins?", null, {
						hk: "bD2cQ"
					}),
					answer: () => n.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your coins in the future.", null, {
						hk: "2RS7Fb"
					})
				}, {
					prompt: () => n.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => n.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => n.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => n.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 coins and gives the recipient a week of Reddit Premium membership and 100 coins. Finally, the ultra rare Platinum Award costs 1800 coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 coins for that month.", null, {
						hk: "Mvg07"
					})
				}, {
					prompt: () => n.fbt._("I bought coins, how can I tell how many I have?", null, {
						hk: "4a4pGf"
					}),
					answer: () => n.fbt._("If you buy coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "2VWZ2s"
					})
				}, {
					prompt: () => n.fbt._("Can I transfer coins between Reddit accounts?", null, {
						hk: "1jLVez"
					}),
					answer: () => n.fbt._("You cannot transfer your Reddit coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 coins.", null, {
						hk: "435l4g"
					})
				}, {
					prompt: () => n.fbt._("Can I get coins for free?", null, {
						hk: "1fhxmd"
					}),
					answer: () => n.fbt._("We may give away coins on special occasions. Stay tuned!", null, {
						hk: "3qKa11"
					})
				}, {
					prompt: () => n.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => n.fbt._("Yes, Creddits are simply called \"coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3bz9Wy"
					})
				}, {
					prompt: () => n.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => n.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "coins".', null, {
						hk: "aFpGc"
					})
				}]
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
				o = a("./src/lib/constants/index.ts"),
				l = a("./src/reddit/components/TrackingHelper/index.tsx"),
				c = a("./src/reddit/helpers/correlationIdTracker.ts"),
				d = a("./src/reddit/helpers/trackers/screenview.ts"),
				m = a("./src/telemetry/index.ts"),
				p = a("./src/telemetry/models/Timer.ts"),
				u = a("./src/reddit/pages/CoinsMobilePage/index.m.less"),
				h = a.n(u),
				b = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				f = a("./src/reddit/models/Gold/Award.ts"),
				w = a("./src/reddit/models/Gold/Coins/index.ts"),
				g = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				_ = a("./src/reddit/components/GildMarketingDescription/index.tsx"),
				x = a("./src/reddit/icons/fonts/Coin/index.tsx");
			class v extends r.a.Component {
				componentDidMount() {
					Object(c.d)(c.a.GoldPayment, !1);
					const e = o.Eb.COINS;
					m.c.has(e) && this.props.sendEvent(Object(d.b)(p.TimerType.InApp, m.c.end(e)))
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
					}, r.a.createElement(_.a, {
						className: h.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-silver-large.png`
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
						}, r.a.createElement(x.a, null), f.q.coinPrice)
					})), r.a.createElement(_.a, {
						className: h.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-gold-large.png`
						}),
						isMobileStyled: !0,
						title: s.fbt._("Gold Award", null, {
							hk: "1oYdz0"
						})
					}, Object(b.a)(s.fbt._("Gives {Coin benefit placeholder} Reddit Coins and a week of r/lounge access and ad-free browsing. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin benefit placeholder", ":coin_benefit:"), s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "rZ9s8"
					}), {
						":coin_benefit:": r.a.createElement("span", {
							className: h.a.nowrap
						}, r.a.createElement(x.a, null), "100"),
						":coin_price:": r.a.createElement("span", {
							className: h.a.nowrap
						}, r.a.createElement(x.a, null), f.n.coinPrice)
					})), r.a.createElement(_.a, {
						className: h.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-platinum-large.png`
						}),
						isMobileStyled: !0,
						title: s.fbt._("Platinum Award", null, {
							hk: "3nCEqM"
						})
					}, Object(b.a)(s.fbt._("Gives a month of r/lounge access and ad-free browsing, and {Coin benefit placeholder} Reddit Coins for that month. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin benefit placeholder", ":coin_benefit:"), s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "1JTJWQ"
					}), {
						":coin_benefit:": r.a.createElement("span", {
							className: h.a.nowrap
						}, r.a.createElement(x.a, null), "700"),
						":coin_price:": r.a.createElement("span", {
							className: h.a.nowrap
						}, r.a.createElement(x.a, null), f.p.coinPrice)
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
					}, w.b.map((e, t) => r.a.createElement(g.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				componentWillUnmount() {
					Object(c.b)(c.a.GoldPayment)
				}
			}
			t.default = Object(l.c)(v)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinsMobile.e41f04c6d115641c0e4d.js.map