// https://www.redditstatic.com/desktop2x/CoinsMobile.8263bb15e5e47a1a8552.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinsMobile"], {
		"./src/reddit/components/CollapsibleFAQ/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CollapsibleFAQ/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				i = n("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				r = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				c = n("./src/reddit/icons/svgs/ChevronUp/index.tsx");
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
						children: n
					} = this.props, {
						isOpen: a
					} = this.state, i = a ? r.a.isOpen : "";
					return s.a.createElement("div", {
						className: Object(o.a)(e, r.a.collapsibleFAQ)
					}, s.a.createElement("button", {
						className: r.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, s.a.createElement("span", {
						className: r.a.buttonContent,
						tabIndex: -1
					}, t, a ? s.a.createElement(c.a, {
						className: r.a.collapseIcon
					}) : s.a.createElement(l.a, {
						className: r.a.collapseIcon
					}))), s.a.createElement("div", {
						className: Object(o.a)(r.a.collapsibleAnswer, i)
					}, n))
				}
			}
			t.a = d
		},
		"./src/reddit/components/GildMarketingDescription/index.m.less": function(e, t, n) {
			e.exports = {
				iconContainer: "_3aLGwXXgtLTRBL_s4zGzpA",
				textContainer: "L1uF-uIVgiGprHTgSe6Pa",
				title: "_1RHFAL2gq_LNUOW3yaREdJ",
				content: "_3iKxdZxO2uDcDfP0M_uXXu",
				isMobileStyled: "hhQ0bLehrQAD95bHHfIHL"
			}
		},
		"./src/reddit/components/GildMarketingDescription/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/GildMarketingDescription/index.m.less"),
				o = n.n(r);
			t.a = e => {
				const {
					children: t,
					className: n,
					icon: a,
					isMobileStyled: r,
					title: l
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(n, {
						[o.a.isMobileStyled]: r
					})
				}, s.a.createElement("div", {
					className: o.a.iconContainer
				}, a), s.a.createElement("div", {
					className: o.a.textContainer
				}, s.a.createElement("h3", {
					className: o.a.title
				}, l), s.a.createElement("p", {
					className: o.a.content
				}, t)))
			}
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				i = n("./node_modules/react-helmet/es/Helmet.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/pageTitle.ts"),
				c = n("./src/reddit/helpers/tabBadging/index.ts"),
				d = n("./src/reddit/selectors/appBadges.ts");
			const m = Object(o.a)(d.c, e => ({
				badgeCount: e
			}));
			class p extends a.Component {
				constructor() {
					super(...arguments), this.title = Object(l.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(l.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(c.b)(this.props.badgeCount > 0), s.a.createElement(i.b, null, s.a.createElement("title", null, this.getTitle()))
				}
			}
			t.a = Object(r.b)(m)(p)
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function i(e, t) {
				const n = e.toString().split(":");
				return n.length % 2 == 0 ? e : n.reduce((e, n, a) => (a % 2 == 0 ? e.push(n) : "" === n ? e.push(":") : `:${n}:` in t ? e.push(t[`:${n}:`]) : e.push(`:${n}:`), e), []).map((e, t) => s.a.createElement(s.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
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
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = new Set(["low_coin_upsell"]),
				i = new Set(["new_purchaser", "repeat_purchaser"]),
				r = [{
					prompt: () => a.fbt._("What are coins?", null, {
						hk: "bD2cQ"
					}),
					answer: () => a.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your coins in the future.", null, {
						hk: "2RS7Fb"
					})
				}, {
					prompt: () => a.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => a.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => a.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => a.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 coins and gives the recipient a week of Reddit Premium membership and 100 coins. Finally, the ultra rare Platinum Award costs 1800 coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 coins for that month.", null, {
						hk: "Mvg07"
					})
				}, {
					prompt: () => a.fbt._("I bought coins, how can I tell how many I have?", null, {
						hk: "4a4pGf"
					}),
					answer: () => a.fbt._("If you buy coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "2VWZ2s"
					})
				}, {
					prompt: () => a.fbt._("Can I transfer coins between Reddit accounts?", null, {
						hk: "1jLVez"
					}),
					answer: () => a.fbt._("You cannot transfer your Reddit coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 coins.", null, {
						hk: "435l4g"
					})
				}, {
					prompt: () => a.fbt._("Can I get coins for free?", null, {
						hk: "1fhxmd"
					}),
					answer: () => a.fbt._("We may give away coins on special occasions. Stay tuned!", null, {
						hk: "3qKa11"
					})
				}, {
					prompt: () => a.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => a.fbt._("Yes, Creddits are simply called \"coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3bz9Wy"
					})
				}, {
					prompt: () => a.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => a.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "coins".', null, {
						hk: "aFpGc"
					})
				}]
		},
		"./src/reddit/pages/CoinsMobilePage/index.m.less": function(e, t, n) {
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
		"./src/reddit/pages/CoinsMobilePage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				o = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/pageTitle.ts"),
				c = n("./src/reddit/components/TitleTagManager/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/trackers/screenview.ts"),
				u = n("./src/telemetry/index.ts"),
				h = n("./src/telemetry/models/Timer.ts"),
				b = n("./src/reddit/pages/CoinsMobilePage/index.m.less"),
				g = n.n(b),
				f = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				w = n("./src/reddit/models/Gold/Award.ts"),
				_ = n("./src/reddit/models/Gold/Coins/index.ts"),
				x = n("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				C = n("./src/reddit/components/GildMarketingDescription/index.tsx"),
				v = n("./src/reddit/icons/fonts/Coin/index.tsx");
			class E extends r.a.Component {
				componentDidMount() {
					Object(m.d)(m.a.GoldPayment, !1);
					const e = o.Db.COINS;
					u.c.has(e) && this.props.sendEvent(Object(p.b)(h.TimerType.InApp, u.c.end(e)))
				}
				render() {
					const {
						className: e
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(c.a, {
						title: Object(l.a)().toString()
					}), r.a.createElement("div", {
						className: e
					}, r.a.createElement("div", {
						className: g.a.wrapper
					}, this.renderGildBreakdown(), this.renderFAQSection())))
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
					}, r.a.createElement(C.a, {
						className: g.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${a.a.assetPath}/img/gold/badges/award-silver-large.png`
						}),
						isMobileStyled: !0,
						title: s.fbt._("Silver Award", null, {
							hk: "2h79np"
						})
					}, Object(f.a)(s.fbt._("Shows a Silver Award on the post or comment and ... that’s it. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "zIrMH"
					}), {
						":coin_price:": r.a.createElement("span", {
							className: g.a.nowrap
						}, r.a.createElement(v.a, null), w.q.coinPrice)
					})), r.a.createElement(C.a, {
						className: g.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${a.a.assetPath}/img/gold/badges/award-gold-large.png`
						}),
						isMobileStyled: !0,
						title: s.fbt._("Gold Award", null, {
							hk: "1oYdz0"
						})
					}, Object(f.a)(s.fbt._("Gives {Coin benefit placeholder} Reddit Coins and a week of r/lounge access and ad-free browsing. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin benefit placeholder", ":coin_benefit:"), s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "rZ9s8"
					}), {
						":coin_benefit:": r.a.createElement("span", {
							className: g.a.nowrap
						}, r.a.createElement(v.a, null), "100"),
						":coin_price:": r.a.createElement("span", {
							className: g.a.nowrap
						}, r.a.createElement(v.a, null), w.n.coinPrice)
					})), r.a.createElement(C.a, {
						className: g.a.gridItem,
						icon: r.a.createElement("img", {
							src: `${a.a.assetPath}/img/gold/badges/award-platinum-large.png`
						}),
						isMobileStyled: !0,
						title: s.fbt._("Platinum Award", null, {
							hk: "3nCEqM"
						})
					}, Object(f.a)(s.fbt._("Gives a month of r/lounge access and ad-free browsing, and {Coin benefit placeholder} Reddit Coins for that month. You’ll need {Coin price placeholder} Coins.", [s.fbt._param("Coin benefit placeholder", ":coin_benefit:"), s.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "1JTJWQ"
					}), {
						":coin_benefit:": r.a.createElement("span", {
							className: g.a.nowrap
						}, r.a.createElement(v.a, null), "700"),
						":coin_price:": r.a.createElement("span", {
							className: g.a.nowrap
						}, r.a.createElement(v.a, null), w.p.coinPrice)
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
					}, _.b.map((e, t) => r.a.createElement(x.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				componentWillUnmount() {
					Object(m.b)(m.a.GoldPayment)
				}
			}
			t.default = Object(d.c)(E)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinsMobile.8263bb15e5e47a1a8552.js.map